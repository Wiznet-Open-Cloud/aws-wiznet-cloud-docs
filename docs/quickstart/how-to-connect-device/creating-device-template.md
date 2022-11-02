---
title: Creating a Device Template
metaTitle: Creating a Device Template
metaDescription: Creating a Device Template
sidebar_position: 10
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Creating a Device Template

&nbsp In the previous step, we connected the devices and verified that the data is being sent to the Cloud. In this step, we will set the device template on the device to change it to a state where we can create widgets on the dashboard. <br/>
&nbspA device template defines the type of data that a device sends.
A device template is a set of capabilities, and each item consists of a capability name and data type. It is created according to the type of data sent by the device. <br/>
&nbspIf the data format sent by the device matches the device template format, the data is saved as model data. Otherwise the data is saved as unmodel data which cannot be use to create dashboard widgets.

### Create new template

In device template page, click **+ New Template** button.

<div>
    <img alt="click-new-template-button" src={useBaseUrl('/img/quickstart/create-template/create_template1.png')} />
</div>
<br />

When the dialog window appears, set the name of device template and click the **Create** button.

<div>
    <img alt="create-template-dialog" src={useBaseUrl('/img/quickstart/create-template/create_template2.png')} />
</div>
<br />

Once the template is created, click the name in the device template list to enter the detail page.
Define the data format sent from the device by adding capability on the detail page.

<div>
    <img alt="click-template-details" src={useBaseUrl('/img/quickstart/create-template/create_template3.png')} />
</div>
<br />

### Create capabilities

On the template detail page, click the **Add Capability** button to add capabilities. Makes it the same as the data sent from the device.

<div>
    <img alt="add-capbilities" src={useBaseUrl('/img/quickstart/create-template/create_template4.png')} />
</div>
<br />

### Save and Publish capabilities

If you have added capabilities, you should save them. Device templates have two main concepts: **Save and Publish**. <br />
**Save** means that the device template content is changed, but is not yet applied to the device. <br />
**Publish** is to change the state to be applied to the actual device.

If a device template is applied to a device and the contents are changed in the template and saved, the device data is still classified based on the previous publish status. The device still determines whether the data is a model based on the content of the previously published device template. Only when it is published, the reference point for judging the data sent by the device changes. <br/>
When you have added all the capabilities, click the **Save** button to save the changes.
It is not yet actually applied to the device.

<div>
    <img alt="click-save-button" src={useBaseUrl('/img/quickstart/create-template/create_template5.png')} />
</div>
<br />

After saving, click the **Publish** button to change it to a state that can actually be applied to the device.

<div>
    <img alt="click-publish-button" src={useBaseUrl('/img/quickstart/create-template/create_template6.png')} />
</div>
<br />

If you go back to the device template list page after publishing is complete, you can check the status of Pending and Published.
**Pending** means whether the state is saved or not. If published, it will be displayed as **No Pending Changes**, and if it is only saved and not published, it will be displayed as **Has pending** changes. Published shows the last published time.

<div>
    <img alt="template-list" src={useBaseUrl('/img/quickstart/create-template/create_template7.png')} />
</div>
<br />

### Applying a device template

To apply a device template, you need to go to the detail page of the device you want to apply. Go to the **Edit device template** item on the detail page of the device you created in the previous step. Select the device template you just created and click the **Apply** button to apply it. You can now create your dashboard.

<div>
    <img alt="appliying-template" src={useBaseUrl('/img/quickstart/create-template/create_template8.png')} />
</div>
<br />
