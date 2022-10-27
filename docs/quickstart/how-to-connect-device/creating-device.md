---
title: Creating a Device
metaTitle: Creating a Device
metaDescription: Creating a Device
sidebar_position: 5
# sidebar_label: "Step 2"
# ![image](../../../static/img/quickstart/create-device/create_device1.png)
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Creating a Device

### Register a device

Go to the device page and click the register button.

<div>
    <img alt="device-page" src={useBaseUrl('/img/quickstart/create-device/create_device1.png')} />
</div>
<br />

When you click the button, the dialog window appears.

<div>
    <img alt="device-register-dialog" src={useBaseUrl('/img/quickstart/create-device/create_device2.png')} />
</div>
<br />

Enter the device name and click the register button. (the device may be named in accordance to the rules below the input field)

<div>
    <img alt="device-register-dialog-input" src={useBaseUrl('/img/quickstart/create-device/create_device3.png')} />
</div>
<br />

### Download certificates and keys

When the device is created, you can download the device certificates and keys.
These files can only be downloaded here.

<div>
    <img alt="device-certificate-download" src={useBaseUrl('/img/quickstart/create-device/create_device4.png')} />
</div>
<br />

The downloaded device certificate file will look like the image below the name.
You can use the certificate and key files to connect your device to the cloud and send MQTT messages.

<div>
    <center>
        <img alt="device-certificate" width="80%" src={useBaseUrl('/img/quickstart/create-device/create_device5.png')} />
    </center>
</div>
<br />

### Copy the details of device

After downloading the key file, click the "Done" button to see the registered device in the device list.
By clicking on the name in the device list, you can view the details of the device and get the information you need to connect to the cloud.

<div>
    <img alt="click-device-detail" src={useBaseUrl('/img/quickstart/create-device/create_device6.png')} />
</div>
<br />

In this tab, you can see all the raw data sent by the device after it is connected.

<div>
    <img alt="device-raw-data-tab" src={useBaseUrl('/img/quickstart/create-device/create_device7.png')} />
</div>
<br />

In 'Device Management' tab, copy the real device name and device endpoint required for cloud connection. Use this information to connect your device to the cloud.

<div>
    <img alt="device-management-tab" src={useBaseUrl('/img/quickstart/create-device/create_device8.png')} />
</div>
Copy the details.
<img alt="device-page" src={useBaseUrl('/img/quickstart/create-device/create_device9.png')} />
