---
title: "WIZnet Cloud란?"
metaTitle: What is WIZnet Cloud?"
metaDescription: "What is WIZnet Cloud?"
sidebar_position: 1
slug: /
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# WIZnet Cloud란?

WIZnet Cloud는 AWS 기반의 IoT Cloud Platform으로, MQTTS 기반의 Device Connection 서비스를 제공합니다.

### 특징

- 디바이스 인증서를 기반으로 클라우드와 연결됩니다.
- AWS에서 MQTT를 통해 연결할 수 있는 디바이스면 모두 연결할 수 있습니다.
- 클라우드에 MQTT 메시지를 보내서 Raw Data 형태로 확인할 수 있습니다.
- 대시보드에서 Monitoring 위젯을 사용해서 데이터를 시각화할 수 있습니다.
- Device Template을 생성해서 디바이스가 보내는 데이터 형태에 대해서 정의할 수 있습니다.
- 대시보드에서 Control 위젯을 사용해서 디바이스에 정해진 Topic을 사용해 MQTT 메시지를 보내거나, ON/OFF 명령을 보낼 수 있습니다.

<div>
  <img alt="architecture" src={useBaseUrl('/img/architecture.png')} />
</div>
