---
title: Creating a Dashboard
metaTitle: Creating a Dashboard
metaDescription: Creating a Dashboard
sidebar_position: 11
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Creating a Dashboard

In order to create widgets on the dashboard, the device template must be set up on the device.
If a device template has not been set on the device, set it up referring to the previous steps.

### Create new dashboard

In dashboard page, click the **+ NEW** button.

<div>
    <img alt="click-new-dashboard-button" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard1.png')} />
</div>
<br />

Set the dashboard title on dialog, click the **Create** button.

<div>
    <img alt="dashboard-create-dialog" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard2.png')} />
</div>
<br />

Click the dashboard title in the dashboard list to enter the detail page.

<div>
    <img alt="click-dashboard-title" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard3.png')} />
</div>
<br />

### Add New Widget

Click **Add New Widget** or **Add** button in detail page. When you click the button, an input field for creating a widget appears.

<div>
    <img alt="add-new-widget" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard4.png')} />
</div>
<br />

All input fields are required. First, enter the widget title and select the widget type. <br/>
There are two widget types, D2C and C2D. <br />
**D2C** type is an abbreviation of Device to Control and is a widget used to visualize the data sent from the device. Typical examples include line and bar charts.
**C2D** is an abbreviation of Control to Device, which is a widget type that sends commands to the device. You can send MQTT messages or send ON/OFF messages.
In this tutorial, the D2C type is selected to create a line chart.
Click the **Browse** button to select a library of widgets from among d2c type widgets.

<div>
    <img alt="widget-setting" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard5.png')} />
</div>
<br />

Select the Line Chart in the dialog window.

<div>
    <img alt="select-widget-library" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard6.png')} />
</div>
<br />

Select the device you created in the previous step.

<div>
    <img alt="select-device" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard7.png')} />
</div>
<br />

Capability is a list of capabilities of the template that the device has.
Select the capability to visualize in the chart. If capability is selected, click Add button to create widget.

<div>
    <img alt="select-capability" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard8.png')} />
</div>
<br />

The widget created on the dashboard is output. Basically, the last 15 minutes of data are fetched and the widget is drawn. You can also select and view the desired time zone.

<div>
    <img alt="done-widget-add" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard9.png')} />
</div>
<br />
