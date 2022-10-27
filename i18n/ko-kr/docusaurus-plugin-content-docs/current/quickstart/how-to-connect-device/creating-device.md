---
title: 디바이스 생성하기
metaTitle: Creating a Device
metaDescription: Creating a Device
sidebar_position: 5
# sidebar_label: "Step 2"
# ![image](../../../static/img/quickstart/create-device/create_device1.png)
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# 디바이스 생성하기

디바이스를 생성하기 위해서는 wiznet cloud에 로그인해야 합니다.
앞 단계에서 계정을 생성했다면, 로그인하세요

### 새로운 디바이스 생성하기

새로운 디바이스를 생성하는 과정입니다.
디바이스 페이지에 들어가서 register 버튼을 클릭합니다.<br/>
[디바이스 페이지 캡처 이미지]

버튼을 클릭하면, 디바이스 등록 다이얼로그 창이 나타납니다. 입력창 아래에는 디바이스 이름 규칙에 대한 설명이 적혀있습니다. <br/>
[register dialog 캡처 이미지(input 아래에 rule check 표시)]

디바이스 이름 규칙에 따라서 디바이스 이름을 입력하고 register 버튼을 클릭합니다. 몇 초가 소요된 후 디바이스 생성이 완료됩니다. <br/>
[디바이스 이름 입력한 다이얼로그 캡처 이미지]

### 인증서 및 키 파일 다운로드

디바이스가 생성되고 나면 디바이스의 인증서와 키들을 다운로드할 수 있습니다. 이 파일은 여기에서만 다운로드할 수 있고, 나중에 다운로드할 수 없습니다.
파일들을 모두 다운로드한 후, Done 버튼을 클릭해서 창을 닫습니다.<br/>
[인증서 다운로드 화면 캡처 이미지]

디바이스 인증서를 다운로드 해서 파일을 열어보면 아래와 같은 형태로 존재합니다.
디바이스 인증서와 키들은 디바이스와 클라우드를 연결하고, mqtt 메시지를 보낼 때 사용됩니다. <br/>
[인증서 내용 캡처 이미지]

### 디바이스 상세 정보 확인

디바이스 생성 다이얼로그 창을 닫으면, 디바이스 목록에 디바이스가 추가되어 있는 것을 볼 수 있습니다. 아직 연결이 되지 않아서 disconnected로 표시되어 있습니다.
디바이스 이름을 클릭하면, 디바이스 상세 페이지로 넘어가게 되고 클라우드 연결을 위한 정보들을 얻을 수 있습니다. <br/>
[디바이스 목록 캡처 이미지]

들어가면 제일 먼저 raw data tab을 볼 수 있습니다.
아직 데이터를 보내지 않은 상태라 raw data를 확인할 수 없습니다. <br/>
[raw data tab 캡처 이미지]

device management tab에서는 디바이스의 실제 이름, 디바이스 endpoint, mqtt topic을 확인할 수 있습니다.
디바이스 생성 시에 설정한 이름과 클라우드에서 사용하는 이름은 별도입니다. 디바이스 연결을 위해서는 real device name을 사용해야 합니다. <br/>
[device management 탭 캡처 이미지]
