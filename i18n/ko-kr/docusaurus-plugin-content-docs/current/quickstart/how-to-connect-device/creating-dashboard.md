---
title: 대시보드 만들기
metaTitle: Creating a Dashboard
metaDescription: Creating a Dashboard
sidebar_position: 11
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# 대시보드 만들기

대시보드에서 위젯을 만들기 위해서는 디바이스에 디바이스 템플릿이 설정되어 있어야 합니다.
디바이스에 디바이스 템플릿이 설정되지 않았다면 이전 단계를 참고해서 설정합니다.

### 새로운 대시보드 만들기

대시보드 페이지로 가서 **+New** 버튼을 클릭합니다.

<div>
    <img alt="click-new-dashboard-button" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard1.png')} />
</div>
<br />

대시보드 타이틀을 설정하고, **Create** 버튼을 클릭합니다.

<div>
    <img alt="dashboard-create-dialog" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard2.png')} />
</div>
<br />

대시보드 리스트에서 생성한 대시보드의 타이틀을 클릭해서 상세 페이지로 넘어갑니다.

<div>
    <img alt="click-dashboard-title" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard3.png')} />
</div>
<br />

### 새로운 위젯 추가하기

대시보드 상세 페이지에서 **Add New Widget** 버튼이나 **Add** 버튼을 클릭합니다. 버튼을 클릭하면 위젯 생성을 위한 입력창이 나타납니다.

<div>
    <img alt="add-new-widget" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard4.png')} />
</div>
<br />

위젯 생성 입력란들은 모두 필수입니다. 먼저 위젯 타이틀을 입력하고, 위젯 타입을 선택합니다. <br />
위젯 타입에는 **D2C, C2D** 두 개의 타입이 있습니다. **D2C** 타입은 Device to Control의 약자로, 디바이스에서 보내는 데이터를 시각화하는 데에 사용하는 위젯입니다. 대표적으로 Line, Bar 차트 등이 있습니다. **C2D** 는 Control to Device 의 약자로, 디바이스에 명령을 보내는 위젯 타입입니다. 디바이스에 MQTT Message를 보내거나 ON/OFF 메시지를 보낼 수 있습니다. <br />
여기에서는 Line chart를 만들기 위해서 D2C 타입을 선택했습니다. 타입을 선택한 후 Widget Library에서 **Browse** 버튼을 클릭해서 위젯을 선택합니다.

<div>
    <img alt="widget-setting" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard5.png')} />
</div>
<br />

다이얼로그 창에서 Line Chart를 선택합니다.

<div>
    <img alt="select-widget-library" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard6.png')} />
</div>
<br />

앞에서 만들어둔 디바이스를 선택합니다.

<div>
    <img alt="select-device" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard7.png')} />
</div>
<br />

capability는 디바이스가 가지고 있는 디바이스 템플릿의 capabililty 목록입니다. 차트에서 시각화할 capability 를 선택합니다. capability 까지 선택했다면 Add 버튼을 클릭해서 위젯을 생성합니다.

<div>
    <img alt="select-capability" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard8.png')} />
</div>
<br />

대시보드에 생성한 위젯이 출력됩니다. 기본적으로는 마지막 15분의 데이터를 가져와서 위젯을 그려줍니다. 원하는 시간대를 선택해서 볼 수도 있습니다.

<div>
    <img alt="done-widget-add" src={useBaseUrl('/img/quickstart/create-dashboard/create_dashboard9.png')} />
</div>
<br />
