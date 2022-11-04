---
title: 디바이스와 클라우드 연결하기
metaTitle: Connecting Device to Cloud
metaDescription: Connecting Device to Cloud
sidebar_position: 9
---

import useBaseUrl from '@docusaurus/useBaseUrl'


# 디바이스와 클라우드 연결하기

디바이스를 생성했다면, 디바이스와 클라우드를 연결하는 과정이 필요합니다.
이 단계에서는 펌웨어를 설정해서 디바이스에서 클라우드로 MQTT 메시지를 보내도록 합니다.
Support 메뉴에서 더 많은 예제를 보실 수 있습니다.

## 사전 준비

### 장치

이 문서는 W5100S-EVB-Pico를 대상으로 합니다.

<div>
  <img alt="w5100s-evb-pico" src="https://github.com/Wiznet/RP2040-HAT-AWS-C/raw/main/static/images/getting_started/w5100s-evb-pico_main.png" width="50%"/>
</div>


장치의 세부 정보를 확인하려면 아래 링크를 참조하세요.

[https://docs.wiznet.io/Product/iEthernet/W5100S/w5100s-evb-pico](https://docs.wiznet.io/Product/iEthernet/W5100S/w5100s-evb-pico)


<!-- 더 많은 지원 장치를 보려면 아래 가이드를 참조하세요. -->


### 개발 환경

디바이스 펌웨어 빌드를 하기 위해서는 개발 환경 구성이 필요합니다.

아래 가이드의 Development environment configuration 파트를 참조하여 개발 환경을 구축합니다.

* [RP2040-HAT-AWS-C Getting started](https://github.com/Wiznet/RP2040-HAT-AWS-C/blob/main/getting_started.md#development-environment-configuration)


## 디바이스 연결

### Git repository 복사

[Github repository: RP2040-HAT-AWS-C](https://github.com/Wiznet/RP2040-HAT-AWS-C) repository를 clone 합니다.

[https://github.com/Wiznet/RP2040-HAT-AWS-C](https://github.com/Wiznet/RP2040-HAT-AWS-C)

작업 디렉토리로 이동하여 아래 명령어를 입력합니다.

```bash
git clone https://github.com/Wiznet/RP2040-HAT-AWS-C.git
```

### Configuration 설정

설정에는 도메인(=endpoint)과 디바이스 이름이 필요합니다.
이전 단계에서 생성한 디바이스의 상세 페이지로 가서 Device Management tab을 클릭합니다.
해당 탭에서 디바이스의 이름과 endpoint를 복사해서 아래의 파일을 수정합니다. <br />

<div>
    <img alt="template-list" src={useBaseUrl('/img/quickstart/connecting-device-cloud/device_management_tab.png')} />
</div>


VS Code에서 프로젝트를 오픈하고, **examples/aws_iot_mqtt/aws_iot_mqtt.c** 파일에서 세부사항을 설정합니다. 복사한 Endpoint와 device name을 붙여넣습니다.

```c
/* AWS IoT */
#define MQTT_DOMAIN "awsiotdevice.endpoint.wizcloud.io" // device management에 있음
#define MQTT_PUB_TOPIC "$aws/things/YOUR_DEVICE_NAME/shadow/update"
#define MQTT_SUB_TOPIC "$aws/things/YOUR_DEVICE_NAME/shadow/update/accepted"
#define MQTT_USERNAME NULL
#define MQTT_PASSWORD NULL
#define MQTT_CLIENT_ID "YOUR_DEVICE_NAME"
```

그 다음은 examples/aws_iot_mqtt/mqtt_certificate.h 파일에서 인증서 부분을 변경합니다.

각 변수에 해당하는 인증서 내용을 입력합니다.

* mqtt_root_ca: AWS Root CA 1
* mqtt_client_cert: Devcie Certificate
* mqtt_private_key: Device Private Key


변수는 아래의 형태로 입력해야 합니다. 라인의 시작에는 `"` (따옴표) 를 넣고, 끝에는 `\r\n"` 을 넣어줍니다.

```c
uint8_t mqtt_root_ca[] =
"-----BEGIN CERTIFICATE-----\r\n"
"...\r\n"
"-----END CERTIFICATE-----\r\n";

uint8_t mqtt_client_cert[] =
"-----BEGIN CERTIFICATE-----\r\n"
"...\r\n"
"-----END CERTIFICATE-----\r\n";

uint8_t mqtt_private_key[] =
"-----BEGIN RSA PRIVATE KEY-----\r\n"
"...\r\n"
"-----END RSA PRIVATE KEY-----\r\n";
```

### 빌드 및 업로드

펌웨어 빌드 및 업로드에 대한 자세한 설명은 아래의 링크에서 참조할 수 있습니다.

[https://github.com/Wiznet/RP2040-HAT-AWS-C/tree/main/examples/aws_iot_mqtt#step-5-build](https://github.com/Wiznet/RP2040-HAT-AWS-C/tree/main/examples/aws_iot_mqtt#step-5-build)

## 원시 데이터 확인

펌웨어가 올바르게 업로드 되었다면 디바이스에서 WIZnet Cloud로 전송하는 데이터를 확인할 수 있습니다.

연결한 디바이스 상세 페이지로 진입 후, Raw data tab을 클릭합니다.

Refresh 버튼을 클릭하여 실시간으로 수신되는 데이터를 확인합니다. <br />

<div>
    <img alt="template-list" src={useBaseUrl('/img/quickstart/connecting-device-cloud/rawdata.png')} />
</div>

