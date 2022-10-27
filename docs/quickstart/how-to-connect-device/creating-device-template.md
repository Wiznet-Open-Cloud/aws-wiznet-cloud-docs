---
title: Creating a Device Template
metaTitle: Creating a Device Template
metaDescription: Creating a Device Template
sidebar_position: 10
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Creating a Device Template

A device template defines the type of data that a device sends.
If the data format sent by the device matches the device template format, the data is saved as model data. Otherwise the data is saved as unmodel data which cannot be use to create dashboard widgets.

### Create new template

In device template page, click **+ New Template** button.

<div>
    <img alt="click-new-template-button" src={useBaseUrl('/img/quickstart/create-template/create_template1.png')} />
</div>
<br />

In dialog, set the name of device template and click the **Create** button.

<div>
    <img alt="create-template-dialog" src={useBaseUrl('/img/quickstart/create-template/create_template2.png')} />
</div>
<br />

Once the template is created, click the name in the device template list to enter the detail page.
Define the data type sent from the device by adding capability on the detail page.

<div>
    <img alt="click-template-details" src={useBaseUrl('/img/quickstart/create-template/create_template3.png')} />
</div>
<br />

### Save and Publish Capabilities

Device templates have two main concepts: **save and publish**. <br />
**Save** means that the device template content is changed, but is not yet applied to the device.**Publish** is to change the state to be applied to the actual device.
If a device template is applied to a device and the contents are changed in the template and saved, the device data is still classified based on the previous publish status.
<br />

Click the **Add Capability** button to add a capability.
The capability defines the capability name and data type.

<div>
    <img alt="add-capbilities" src={useBaseUrl('/img/quickstart/create-template/create_template4.png')} />
</div>
<br />

When you have added all the capabilities, click the **Save** button to save the changes. Publishing is possible only after being saved. If it is not saved, you cannot publish.

<div>
    <img alt="click-save-button" src={useBaseUrl('/img/quickstart/create-template/create_template5.png')} />
</div>
<br />

After saving, click the **Publish** button to change it to a state that can actually be applied to the device.

<div>
    <img alt="click-publish-button" src={useBaseUrl('/img/quickstart/create-template/create_template6.png')} />
</div>
<br />

If you check the list of device templates after publishing, there are **No pending changes** and you can check the time of publication.
If you only save and do not publish, it will be displayed as **Has Pending changes** in the pending status.

<div>
    <img alt="template-list" src={useBaseUrl('/img/quickstart/create-template/create_template7.png')} />
</div>
<br />

### Applying a device template

In the device management tab, select the created template and click the **Apply** button to apply it.

<div>
    <img alt="appliying-template" src={useBaseUrl('/img/quickstart/create-template/create_template8.png')} />
</div>
<br />
