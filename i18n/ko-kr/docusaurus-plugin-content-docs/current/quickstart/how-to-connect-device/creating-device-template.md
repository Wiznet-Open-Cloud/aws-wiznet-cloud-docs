---
title: 디바이스 템플릿 생성하기
metaTitle: Creating a Device Template
metaDescription: Creating a Device Template
sidebar_position: 7
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# 디바이스 템플릿 생성하기

앞 단계에서는 디바이스를 연결하고 데이터가 클라우드로 전송되는 것을 확인했습니다. 이 단계에서는 디바이스에 디바이스 템플릿을 설정해서 대시보드에서 위젯을 만들 수 있는 상태로 변경하겠습니다.<br/>
먼저 디바이스 템플릿은 디바이스가 보내는 데이터의 형태를 정의하는 것입니다. 디바이스 템플릿은 capability 의 집합으로 각 항목은 capability name와 data type으로 구성되어 있습니다. 자신이 보내는 데이터의 형태에 따라서 생성합니다.<br/>
디바이스에 할당된 디바이스 템플릿과 디바이스가 보내는 데이터의 형태가 같을 경우 model data로 저장되고, 그렇지 않으면 unmodel data로 저장됩니다. 위젯을 만들 때에는 model data로만 생성하기 때문에 자신이 정해둔 디바이스 템플릿 형태로 데이터를 보내줘야 합니다.

### 새로운 템플릿 생성하기

디바이스 템플릿 페이지로 가서, New Template 버튼을 클릭합니다.<br/>
[디바이스 템플릿 페이지 캡처 이미지]

다이얼로그 창이 나타나면, 디바이스 템플릿의 이름을 설정하고 create 버튼을 클릭합니다. <br/>
[다이얼로그 창 캡처 이미지]

템플릿이 생성되면, 디바이스 리스트에서 디바이스 이름을 클릭해서 상세 페이지로 갈 수 있습니다. <br/>
[디바이스 템플릿 리스트 캡처 이미지]

### Capability 만들기

템플릿 상세 페이지에서 Add Capability 버튼을 클릭해서 capability를 추가합니다.
디바이스에서 보내는 데이터 형태와 동일하게 만들어줍니다.
현재 데이터는 number type의 humidity와 number type의 temperature을 보내고 있으므로, capability도 동일하게 생성해줍니다. <br/>
[raw data 캡처 이미지] [capability 추가한 화면 캡처 이미지]

### 저장하고 발행하기 (Save and Publish)

capability를 추가했다면 저장해야 합니다.
디바이스 템플릿에는 save와 publish라는 두 가지 주요 개념이 있습니다. <br/>
**Save**는 디바이스 템플릿의 내용이 변경된 것을 저장한다는 것입니다. 하지만 변경된 내용이 디바이스에 적용되지는 않습니다. **Publish**는 변경한 내용을 디바이스에 실제로 적용한다는 것입니다. <br/>

만약 디바이스에 디바이스 템플릿이 할당되어 있는 상태에서 디바이스 템플릿 내용을 변경하고 Save만 했다면 디바이스에는 영향을 끼치지 않습니다. 디바이스는 여전히 이전에 publish되었던 디바이스 템플릿 내용을 기준으로 데이터의 모델 여부를 판단합니다. Publish되어야만 디바이스가 보내는 데이터를 판단하는 기준점이 변경됩니다. <br/>
앞에서 생성한 capability 내용을 저장합니다. 아직 실제로 디바이스에 적용되지 않는 상태입니다. <br/>
[save 버튼 누르는 화면 캡처 이미지]

save를 완료했으면 publish합니다. publish는 save가 선행되어야만 할 수 있는 작업입니다. save 해야 publish 버튼이 활성화됩니다. publish 하면 실제로 디바이스에 적용되는 상태가 됩니다. <br />
[publish 버튼 누르는 화면 캡처 이미지]

publish가 완료된 상태로 다시 디바이스 템플릿 리스트 페이지로 가보면, Pending과 Publish 상태를 확인할 수 있습니다. <br/>
Pending은 Save가 된 상태인지 아닌지 알려줍니다. Publish되었다면, No Pending Changes 로 표시되고, save만 하고 publish를 하지 않았다면 Has pending changes로 표시됩니다. Published는 마지막으로 publish 된 시간을 표시합니다. <br/>
[디바이스 템플릿 리스트 화면 캡처 이미지]

### 디바이스 템플릿 적용하기

디바이스 템플릿을 적용하려면, 적용하고 싶은 디바이스의 상세 페이지로 가야 합니다.
이전 단계에서 만들었던 디바이스의 상세페이지에서 edit device template 항목으로 갑니다.
지금 만든 디바이스 템플릿을 선택하고 Apply 버튼을 눌러서 적용합니다.
이제 대시보드를 만들 수 있습니다. <br />
[디바이스 상세 페이지 캡처 이미지]
