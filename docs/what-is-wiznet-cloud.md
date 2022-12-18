---
title: "What is WIZnet Cloud?"
metaTitle: What is WIZnet Cloud?"
metaDescription: "What is WIZnet Cloud?"
sidebar_position: 1
slug: /
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# What is WIZnet Cloud?

WIZnet Cloud is an IoT Cloud Platform based on AWS, providing device connection service based on MQTTS.

### Features

- The connection with the Cloud is based on the device certificate.
- Any device that can connect via MQTT on AWS can connect.
- You can check it in the form of raw data by sending MQTT messages to the Cloud.
- You can use the monitoring widget in your dashboard to visualize your data.
- By creating a device template, you can define the type of data sent by the device.
- You can use the control widget on the dashboard to send MQTT messages using a specific topic to the device, or send ON/OFF commands.

<div>
  <img alt="architecture" src={useBaseUrl('/img/architecture.png')} />
</div>
