---
title: W5100S-EVB-Pico (Micropython)
metaTitle: W5100S-EVB-Pico
metaDescription: W5100S-EVB-Pico
sidebar_position: 7
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Connect with W5100S-EVB-Pico and Micropython

In this guide, learn how to connect to WIZnet Cloud using W5100S-EVB-Pico and Micropython.


## Prerequisite

### Device

* [W5100S-EVB-Pico](https://docs.wiznet.io/Product/iEthernet/W5100S/w5100s-evb-pico)

<div>
  <img alt="w5100s-evb-pico" src="https://github.com/Wiznet/RP2040-HAT-AWS-C/raw/main/static/images/getting_started/w5100s-evb-pico_main.png" width="50%"/>
</div>

Please refer to the link below to check the details of your device.

[https://docs.wiznet.io/Product/iEthernet/W5100S/w5100s-evb-pico](https://docs.wiznet.io/Product/iEthernet/W5100S/w5100s-evb-pico)



### Environment

* Windows or Linux environment
* [Thonny](https://thonny.org/)

Use Thonny as development environment for Micropython. Thonny is an integrated development environment for the Python language.
<br />
Click the link to download and install the Installer.



## Upload firmware

Download the device's Micropython firmware (.uf2) file from the link below.

[https://micropython.org/download/W5100S_EVB_PICO/](https://micropython.org/download/W5100S_EVB_PICO/)


Upload the firmware to your device. The upload process is as follows.

* Put the device into Boot mode.
  * H/W pinout v1.0: Apply power while pressing the BOOTSEL button.
  * H/W pinout v1.1: While holding down the BOOTSEL button, press the RUN button.

* After entering Boot mode, RPI-RP2 drive is created in Host PC as shown below.

<div>
  <img alt="rpi-rp2-drive" src={useBaseUrl('/img/guide/rpi-rp2-drive.png')} />
</div>

* Copy the firmware and paste it to the drive.
* The drive will disappear and the firmware will be uploaded.


## Run application

The link below contains sample application code.

- [W5100S-EVB-Pico-Micropython - AWS Sample](https://github.com/renakim/W5100S-EVB-Pico-Micropython/tree/main/examples/AWS)

A sample that sets up Ethernet and authenticates and connects to AWS IoT Core via MQTTS to send messages.

Create a main.py file in Thonny and paste the code into it.


### Modify main.py

The following variables must be set.

* Device Id
* MQTT Topic (Auto set by Device Id)
* Endpoint
* Certificates
  * Device certificate
  * Device private key


Enter the device information created in WIZnet Cloud as a variable value.

<div>
    <img alt="template-list" src={useBaseUrl('/img/quickstart/connecting-device-cloud/device_management_tab.png')} />
</div>

Click on the device, go to the DEVICE MANEGEMENT tab, check and copy the information and paste it into the code.

```python
device_id = '<Device name>'
hostname = '<Device Endpoint>'
```

### Upload certificates

Upload the certificate to the device and set the path.

The downloaded certificate is in the form of the following and uses certificate.pem.crt and private.pem.key.

* deviceId-certificate.pem.crt
* deviceId-private.pem.key
* deviceId-public.pem.key
* AmazonRootCA1.pem
* AmazonRootCA3.pem


**Convert Certificates (Using OpenSSL)**

Convert the certificate to der form using OpenSSL.

The original certificate is in base64-based PEM format, and you need to convert it to binary format .der.

>If you are using Windows 10 or higher, you can utilize the Windows Subsystem Linux (WSL) environment.
>OpenSSL Installer for Windows environment can be downloaded from [Link](https://slproweb.com/products/Win32OpenSSL.html).

Convert the device certificate and private key to der format using the command below.

```shell
# Device certificate
openssl x509 -outform der -in < -out certificate.crt.der
# Private key
openssl rsa -inform pem -in private.pem.key -outform DER -out private.key.der
```

Upload the converted certificate using Thonny and set the path.

* Open the File explorer window with the View - Files option.
* Place the mouse cursor on the file or directory to be uploaded, right-click, and select the 'Upload to /' menu.
* If set to a different path, modify it in main.py.

```py
# Certificate path
cert_file = 'cert/certificate.crt.der'
key_file = 'cert/privateKey.key.der'
```


### Install the Micropython library

Install the MQTT library in the Thonny environment.

After selecting Tools - Manage packages from the top menu, search for the umqtt keyword and install the micropython-umqtt.simple package.

<div>
  <img src="https://github.com/renakim/renakim.github.io/blob/master/files/w5100s-evb-pico/pico-micropython-azure-08.png?raw=true" />
</div>

If the installation went well, you can check the installed packages by clicking umqtt in the list on the left.


## Run and Monitor

With main.py open in Thonny, click the play button at the top or press F5 to run the application.

Debug messages are output like below:

<div>
  <img src="https://github.com/renakim/renakim.github.io/blob/master/files/w5100s-evb-pico/pico-micropython-thonny_mqtt.png?raw=true" />
</div>

>If you get a connection error, it's likely a certificate issue. Make sure you set the path correctly and put the certificate converted to .der.


### RAW DATA monitoring

You can check the real-time received data in the Device's RAW DATA tab.

<div>
    <img alt="template-list" src={useBaseUrl('/img/quickstart/connecting-device-cloud/rawdata.png')} />
</div>


Please refer to the following guide on how to use the dashboard.

[Creating a Dashboard](../quickstart/how-to-connect-device/creating-dashboard.md)

