---
title: Creating a Device
metaTitle: Creating a Device
metaDescription: Creating a Device
sidebar_position: 8
# sidebar_label: "Step 2"
# ![image](../../../static/img/quickstart/create-device/create_device1.png)
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Creating a Device

To create a device, you need to sign in to WIZnet Cloud. If you created an account in the previous step, sign in to WIZnet Cloud.

### Register a device

This is the process of creating a new device. Go to the device page and click the **Register** button.

<div>
    <img alt="device-page" src={useBaseUrl('/img/quickstart/create-device/create_device1.png')} />
</div>
<br />

When you click the button, the dialog window appears. Below the input field is a description of the device name rule.

<div>
    <img alt="device-register-dialog" src={useBaseUrl('/img/quickstart/create-device/create_device2_en.png')} />
</div>
<br />

Enter the device name according to the device name rules and click the register button. After a few seconds, device creation is complete.

<div>
    <img alt="device-register-dialog-input" src={useBaseUrl('/img/quickstart/create-device/create_device3.png')} />
</div>
<br />

### Download certificates and keys

When the device is created, you can download the device certificates and keys.
These files can only be downloaded here.
After downloading all the files, click the Done button to close the dialog window.

<div>
    <img alt="device-certificate-download" src={useBaseUrl('/img/quickstart/create-device/create_device4.png')} />
</div>
<br />

The downloaded device certificate file will look like the image below the name.
You can use the certificate and key files to connect your device to the Cloud and send MQTT messages.

<div>
    <center>
        <img alt="device-certificate" width="70%" src={useBaseUrl('/img/quickstart/create-device/create_device5.png')} />
    </center>
</div>
<br />

### Check device details

If you close the dialog window, you can see that the device has been added to the device list. The connection status is displayed as "Disconnected" because there is no connection yet.
By clicking on the name in the device list, you can view the details of the device and get the information you need to connect to the cloud.

<div>
    <img alt="click-device-detail" src={useBaseUrl('/img/quickstart/create-device/create_device6.png')} />
</div>
<br />

When you enter the detail page, you can see the raw data tab first. The raw data cannot be checked because the data has not been sent yet.

<div>
    <img alt="device-raw-data-tab" src={useBaseUrl('/img/quickstart/create-device/create_device7.png')} />
</div>
<br />

In 'Device Management' tab, check the real device name and device endpoint required for cloud connection.
The name set when creating the device and the name used in the Cloud are separate. You must use the real device name to connect to the device.

<div>
    <img alt="device-management-tab" src={useBaseUrl('/img/quickstart/create-device/create_device8.png')} />
</div>
