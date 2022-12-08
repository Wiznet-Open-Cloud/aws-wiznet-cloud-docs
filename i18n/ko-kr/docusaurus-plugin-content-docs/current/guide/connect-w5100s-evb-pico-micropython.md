---
title: W5100S-EVB-Pico (Micropython)
metaTitle: W5100S-EVB-Pico
metaDescription: W5100S-EVB-Pico
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl'


# W5100S-EVB-Pico 및 Micropython으로 연결하기

<!-- Micropython -->


이 가이드에서는 W5100S-EVB-Pico와 Micropython을 사용하여 WIZnet Cloud에 연결하는 방법을 배웁니다.

## 사전 준비

### 장치

* [W5100S-EVB-Pico](https://docs.wiznet.io/Product/iEthernet/W5100S/w5100s-evb-pico)

<div>
  <img alt="w5100s-evb-pico" src="https://github.com/Wiznet/RP2040-HAT-AWS-C/raw/main/static/images/getting_started/w5100s-evb-pico_main.png" width="50%"/>
</div>

장치의 세부 정보를 확인하려면 아래 링크를 참조하세요.

[https://docs.wiznet.io/Product/iEthernet/W5100S/w5100s-evb-pico](https://docs.wiznet.io/Product/iEthernet/W5100S/w5100s-evb-pico)



### 환경

* Windows 또는 Linux 환경
* [Thonny](https://thonny.org/)

Micropython의 개발 환경으로 Thonny를 사용합니다. Thonny는 Python 언어를 위한 통합 개발 환경입니다. <br />링크를 클릭하여 Installer를 다운로드하고 설치합니다.



## 펌웨어 업로드

아래 링크를 통해 디바이스의 Micropython 펌웨어(.uf2) 파일을 다운로드 합니다.

[https://micropython.org/download/W5100S_EVB_PICO/](https://micropython.org/download/W5100S_EVB_PICO/)


장치로 펌웨어를 업로드합니다. 업로드 과정은 다음과 같습니다.

* 장치를 Boot 모드로 만듭니다.
  * H/W pinout v1.0: BOOTSEL 버튼을 누른 채로 전원을 인가합니다.
  * H/W pinout v1.1: BOOTSEL 버튼을 누른 채로 RUN 버튼을 누릅니다.

* Boot 모드로 진입되었다면 아래와 같이 Host PC에서 RPI-RP2 드라이브가 생성됩니다.

<div>
  <img alt="rpi-rp2-drive" src={useBaseUrl('/img/guide/rpi-rp2-drive.png')} />
</div>

* 다운로드 한 펌웨어 파일을 복사하여 드라이브에 붙여넣기 합니다.
* 드라이브가 사라지고, 펌웨어 파일이 업로드 됩니다.


## 어플리케이션 실행

아래 링크에 샘플 어플리케이션 코드가 있습니다.

- [W5100S-EVB-Pico-Micropython - AWS Sample](https://github.com/renakim/W5100S-EVB-Pico-Micropython/tree/main/examples/AWS)

이더넷을 설정하고 MQTTS를 통해 AWS IoT Core에 인증 및 연결되어 메시지를 전송하는 샘플입니다.

Thonny에서 main.py 파일을 생성하고 코드를 붙여넣습니다.


### 변수 입력

다음의 변수들을 설정해야 합니다.

* Device Id
* MQTT Topic: 지정 토픽 사용
* Endpoint
* 디바이스 인증서 설정
  * Device certificate
  * Device private key


WIZnet Cloud에서 생성한 디바이스 정보를 변수 값으로 입력합니다.

<div>
    <img alt="template-list" src={useBaseUrl('/img/quickstart/connecting-device-cloud/device_management_tab.png')} />
</div>

디바이스를 클릭하고, DEVICE MANEGEMENT 탭으로 이동하여 정보를 확인 및 복사하고 코드에 붙여넣기 합니다.


```python
device_id = '<Device name>'
hostname = '<Device Endpoint>'
```

>MQTT Topic은 device_id 값에 따라 정해진 규칙으로 설정됩니다.


### 인증서 설정

인증서를 디바이스로 업로드 하고, 경로를 설정합니다.

다운로드 받은 인증서는 다음과 같은 형태입니다.

* deviceId-certificate.pem.crt
* deviceId-private.pem.key
* deviceId-public.pem.key
* AmazonRootCA1.pem
* AmazonRootCA3.pem

이 중, certificate.pem.crt와 private.pem.key를 사용합니다.


**인증서 변환 (Using OpenSSL)**

OpenSSL을 사용하여 인증서를 der 형태로 변환합니다.

기존 인증서는 base64 기반의 PEM 형태이고, 이를 바이너리 형태인 .der로 변환해야 합니다.

>Windows 10 이상의 환경이라면 WSL(Windows Subsystem Linux) 환경을 활용할 수 있습니다.
>Windows 환경을 위한 Installer는 [링크](https://slproweb.com/products/Win32OpenSSL.html)에서 다운로드합니다.

아래 명령을 사용하여 디바이스 인증서와 Private key를 der 형식으로 변환합니다.

```shell
# 디바이스 인증서 변환
openssl x509 -outform der -in < -out certificate.crt.der
# Key 변환
openssl rsa -inform pem -in private.pem.key -outform DER -out private.key.der
```

Thonny를 사용하여 변환한 인증서를 업로드하고, 경로를 설정합니다.

* View - Files 옵션으로 좌측 탐색기 창을 엽니다.
* 업로드 할 파일 또는 디렉토리에 마우스 커서를 위치하고 오른쪽 클릭 후, `Upload to /` 메뉴를 선택합니다.
* 경로를 확인하고, 다른 경로로 설정하고 싶다면 main.py에서 수정합니다.

```py
# Certificate path
cert_file = 'cert/certificate.crt.der'
key_file = 'cert/privateKey.key.der'
```


### Micropython 라이브러리 설치

Thonny 환경에서 MQTT 라이브러리를 설치합니다.

상단 메뉴의 Tools - Manage packages 선택 후, umqtt 키워드로 검색하여 micropython-umqtt.simple 패키지를 설치합니다.

<div>
  <img src="https://github.com/renakim/renakim.github.io/blob/master/files/w5100s-evb-pico/pico-micropython-azure-08.png?raw=true" />
</div>

설치가 잘 되었다면 좌측 목록에서 umqtt를 클릭했을 때 설치된 패키지를 확인할 수 있습니다.

<div>
  <img src="https://github.com/renakim/renakim.github.io/blob/master/files/w5100s-evb-pico/pico-micropython-azure-10.png?raw=true" />
</div>

## 동작 및 모니터링

Thonny에서 main.py를 연 상태로 상단의 재생 모양 버튼을 클릭 또는 F5를 입력하여 어플리케이션을 실행합니다.

디버그 메시지가 다음과 같이 출력됩니다.

<div>
  <img src="https://github.com/renakim/renakim.github.io/blob/master/files/w5100s-evb-pico/pico-micropython-thonny_mqtt.png?raw=true" />
</div>

>연결 에러가 발생한다면 인증서 문제일 가능성이 높습니다. 경로를 잘 설정했는지, .der로 변환한 인증서를 넣었는지 확인합니다.


### RAW DATA 확인

Device의 RAW DATA 탭에서 실시간 수신 데이터를 확인할 수 있습니다.

대시보드 사용 방법은 다음 링크를 참조하세요.

[대시보드 만들기](../quickstart/how-to-connect-device/creating-dashboard.md)

