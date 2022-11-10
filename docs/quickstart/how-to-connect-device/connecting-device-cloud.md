---
title: Connecting Device to Cloud
metaTitle: Connecting Device to Cloud
metaDescription: Connecting Device to Cloud
sidebar_position: 9
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Connecting Device to Cloud

If you have created a device, you need to connect the device to the cloud.
In this step, you will set up the firmware to send MQTT messages from your device to the Cloud.
You can see more examples in the **Support** menu.

## Prerequisite

### Device

This manual is for the W5100S-EVB-Pico.

<div>
  <img alt="w5100s-evb-pico" src="https://github.com/Wiznet/RP2040-HAT-AWS-C/raw/main/static/images/getting_started/w5100s-evb-pico_main.png" width="50%"/>
</div>

Please refer the link below to check the details of this device.

[https://docs.wiznet.io/Product/iEthernet/W5100S/w5100s-evb-pico](https://docs.wiznet.io/Product/iEthernet/W5100S/w5100s-evb-pico)

<!-- 더 많은 지원 장치를 보려면 아래 가이드를 참조하세요. -->

### Development Environment

In order to build the device firmware, a development environment configuration is required.
To configure the development environment, refer to the **Development environment configuration** part of the guide below.

- [RP2040-HAT-AWS-C Getting started](https://github.com/Wiznet/RP2040-HAT-AWS-C/blob/main/getting_started.md#development-environment-configuration)

## Connecting Device

### Git clone repository

Clone the [Github repository: RP2040-HAT-AWS-C](https://github.com/Wiznet/RP2040-HAT-AWS-C) repository.

[https://github.com/Wiznet/RP2040-HAT-AWS-C](https://github.com/Wiznet/RP2040-HAT-AWS-C)

Go to the working directory and enter the command below.

```bash
git clone https://github.com/Wiznet/RP2040-HAT-AWS-C.git
```

### Setting configuration

Setup requires a domain and device name.
Go to the detail page of the device which you created in the previously step and click the Device Management tab.
Copy the device name and endpoint from the tab and edit the file below. <br />

<div>
    <img alt="template-list" src={useBaseUrl('/img/quickstart/connecting-device-cloud/device_management_tab.png')} />
</div>

<br/>

Open the project in VS Code and set the details in the file **examples/aws_iot_mqtt/aws_iot_mqtt.c**. Paste the copied endpoint and device name.

```c
/* AWS IoT */
#define MQTT_DOMAIN "awsiotdevice.endpoint.wizcloud.io"
#define MQTT_PUB_TOPIC "$aws/things/YOUR_DEVICE_NAME/shadow/update"
#define MQTT_SUB_TOPIC "$aws/things/YOUR_DEVICE_NAME/shadow/update/accepted"
#define MQTT_USERNAME NULL
#define MQTT_PASSWORD NULL
#define MQTT_CLIENT_ID "YOUR_DEVICE_NAME"
```

Next, change the certificate part in the **examples/aws_iot_mqtt/mqtt_certificate.h** file.
Enter the certificate contents corresponding to each variable.

- mqtt_root_ca: AWS Root CA 1
- mqtt_client_cert: Devcie Certificate
- mqtt_private_key: Device Private Key

Variables must be entered in the form below. Put `"` (quotation marks) at the beginning of the line and `\r\n"` at the end.

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

### Build and Upload

Detailed explanation on building and uploading firmware can be found at the link below.

[https://github.com/Wiznet/RP2040-HAT-AWS-C/tree/main/examples/aws_iot_mqtt#step-5-build](https://github.com/Wiznet/RP2040-HAT-AWS-C/tree/main/examples/aws_iot_mqtt#step-5-build)

## Check raw data

If the firmware is uploaded correctly, you can check the data that the device sends to WIZnet Cloud.
Go to the detail page of the connected device, click the Raw data tab.
Click the **Refresh** button to check the data being received in real time.

<div>
    <img alt="template-list" src={useBaseUrl('/img/quickstart/connecting-device-cloud/rawdata.png')} />
</div>
