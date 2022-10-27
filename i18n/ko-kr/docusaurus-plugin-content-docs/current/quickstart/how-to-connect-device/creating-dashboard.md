---
title: 대시보드 만들기
metaTitle: Creating a Dashboard
metaDescription: Creating a Dashboard
sidebar_position: 11
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# 대시보드 만들기

대시보드에서 위젯을 만들기 위해서는 디바이스에 디바이스 템플릿이 설정되어 있어야 합니다.
설정하지 않았다면 이전 단계에서 생성 후에 설정해줘야 합니다.

### 새로운 대시보드 만들기

대시보드 페이지로 가서 +New 버튼을 클릭합니다. <br />
[대시보드 리스트 페이지 캡처 이미지]

대시보드 타이틀을 설정하고, Create 버튼을 클릭합니다. <br />
[다이얼로그 캡처 이미지]

대시보드 리스트에서 대시보드 타이틀을 클릭해서 상세 페이지로 넘어갑니다. <br />
[대시보드 리스트 페이지 캡처 이미지]

### 새로운 위젯 추가하기

대시보드 상세 페이지에서 Add New Widget 버튼이나 Add 버튼을 클릭합니다. 버튼을 클릭하면 위젯 생성을 위한 입력창이 나타납니다. <br />
[대시보드 상세 페이지 캡처 이미지]

위젯 생성 입력칸들은 모두 필수입니다. 먼저 위젯 타이틀을 입력하고, 위젯 타입을 선택합니다.

위젯 타입에는 D2C, C2D 으로 두 개의 타입이 있습니다. D2C 타입은 Device to Control의 약자로 디바이스에서 보내는 데이터를 시각화하는 데에 사용하는 위젯입니다. 대표적으로 Line, Bar 차트 등이 있습니다. C2D 는 Control to Device 의 약자로 디바이스에 명령을 보내는 위젯 타입입니다. MQTT Message를 보내거나 on/off 메시지를 보낼 수 있습니다. <br />

여기에서는 Line chart를 만들기 위해서 D2C 타입을 선택했습니다. 타입을 선택한 후 Widget Library에서 Browse 버튼을 클릭해서 위젯을 선택합니다. <br/>
[위젯 drawer 캡처 이미지]

다이얼로그에서 line chart를 선택합니다. <br/>
[위젯 다이얼로그 캡처 이미지]

앞에서 만들어둔 디바이스를 선택합니다. <br />
[디바이스 선택 캡처 이미지]

capability는 디바이스가 가지고 있는 디바이스 템플릿의 capabililty 목록입니다. 보고자 하는 capability를 선택합니다. capability 까지 선택했다면 add 버튼을 클릭해서 위젯을 생성합니다. <br/>
[capability 리스트 캡처 이미지]

대시보드에 생성한 위젯이 출력됩니다. 기본적으로는 마지막 15분의 데이터를 가져와서 위젯을 그려줍니다. 원하는 시간대를 선택해서 볼 수도 있습니다.
