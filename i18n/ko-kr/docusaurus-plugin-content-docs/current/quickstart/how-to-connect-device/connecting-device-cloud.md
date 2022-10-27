---
title: 디바이스와 클라우드 연결하기
metaTitle: Connecting Device to Cloud
metaDescription: Connecting Device to Cloud
sidebar_position: 6
---

# 디바이스와 클라우드 연결하기

디바이스를 생성했다면, 디바이스와 클라우드를 연결하는 과정이 필요합니다.
이 단계에서는 펌웨어를 설정해서 디바이스에서 클라우드로 mqtt 메시지를 보내도록 합니다.
이 튜토리얼에서는 W5100-EVB-Pico를 사용했습니다.
Support 메뉴에서 더 많은 예제를 보실 수 있습니다.

### Git repository 복사하기

[https://github.com/Wiznet/RP2040-HAT-AWS-C](https://github.com/Wiznet/RP2040-HAT-AWS-C)

먼저 rp2040-hat-aws-c repository를 clone 합니다.
자신이 원하는 디렉토리 위치에 가서 아래의 명령어를 입력합니다.

```bash
git clone https://github.com/Wiznet/RP2040-HAT-AWS-C.git
```

### Configuration 설정

설정에는 도메인(=endpoint)와 디바이스 이름이 필요합니다.
이전 단계에서 생성한 디바이스의 상세 페이지로 가서 Device Management tab을 클릭합니다.
해당 탭에서 디바이스의 이름과 endpoint를 복사해서 아래의 파일을 수정합니다. <br />
[디바이스 management tab 캡처 이미지]

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

그 다음은 examples/aws_iot_mqtt/mqtt_certificate.h 파일에서 인증서 파일을 변경합니다.
현재 이 예제에서는 총 3가지의 파일이 필요합니다.
mqtt_root_ca에는 디바이스 생성 시에 발급 받았던 인증서 중에 RootCA1 을 넣어주고,
mqtt_client_cert에는 device certificate를 넣어주고,
mqtt_private_key에는 private key 파일을 넣어줍니다.
인증서 정보를 넣어줄 때에는 아래의 형태처럼 모든 줄의 앞에는 “ (따옴표) 를 넣어주고, 뒤에는 \r\n” 을 넣어줍니다.

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

### 빌드, 업로드, 테스트

빌드와 펌웨어 업로드, 테스트에 대한 자세한 설명은 생략합니다.
여기서 사용한 예제에 대한 자세한 빌드 및 테스트 내용은 아래의 링크를 참조해서 진행하면 됩니다.
[https://github.com/Wiznet/RP2040-HAT-AWS-C/tree/main/examples/aws_iot_mqtt#step-5-build](https://github.com/Wiznet/RP2040-HAT-AWS-C/tree/main/examples/aws_iot_mqtt#step-5-build)

### 원시 데이터 확인

위의 설정이 올바르게 되었다면 디바이스에서 WIZnet Cloud로 전송하는 데이터를 확인할 수 있습니다. 연결한 디바이스 상세 페이지의 raw data tab에 들어갑니다. 데이터가 없다면, refresh 버튼을 클릭해서 데이터를 확인합니다. <br />

[raw data 페이지 캡처 이미지]
