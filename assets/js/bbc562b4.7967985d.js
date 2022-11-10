"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return a?i.createElement(h,r(r({ref:t},s),{},{components:a})):i.createElement(h,r({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var p=2;p<l;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=a(7462),n=(a(7294),a(3905)),l=a(4996);const r={title:"Creating a Device Template",metaTitle:"Creating a Device Template",metaDescription:"Creating a Device Template",sidebar_position:10},c="Creating a Device Template",o={unversionedId:"quickstart/how-to-connect-device/creating-device-template",id:"quickstart/how-to-connect-device/creating-device-template",title:"Creating a Device Template",description:"&nbsp In the previous step, we connected the devices and verified that the data is being sent to the Cloud. In next step, we will set the device template on the device to change it to a state where we can create widgets on the dashboard. => \uc774 \ubb38\uc7a5 \uc774\uc0c1\ud568 \uace0\uccd0\uc57c \ud568",source:"@site/docs/quickstart/how-to-connect-device/creating-device-template.md",sourceDirName:"quickstart/how-to-connect-device",slug:"/quickstart/how-to-connect-device/creating-device-template",permalink:"/quickstart/how-to-connect-device/creating-device-template",draft:!1,editUrl:"https://github.com/Wiznet-Open-Cloud/aws-wiznet-cloud-docs/tree/main/docs/quickstart/how-to-connect-device/creating-device-template.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Creating a Device Template",metaTitle:"Creating a Device Template",metaDescription:"Creating a Device Template",sidebar_position:10},sidebar:"mySidebar",previous:{title:"Connecting Device to Cloud",permalink:"/quickstart/how-to-connect-device/connecting-device-cloud"},next:{title:"Creating a Dashboard",permalink:"/quickstart/how-to-connect-device/creating-dashboard"}},p={},s=[{value:"Create new template",id:"create-new-template",level:3},{value:"Create capabilities",id:"create-capabilities",level:3},{value:"Save and Publish capabilities",id:"save-and-publish-capabilities",level:3},{value:"Applying a device template",id:"applying-a-device-template",level:3}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-a-device-template"},"Creating a Device Template"),(0,n.kt)("p",null,"\xa0"," In the previous step, we connected the devices and verified that the data is being sent to the Cloud. In next step, we will set the device template on the device to change it to a state where we can create widgets on the dashboard. => \uc774 \ubb38\uc7a5 \uc774\uc0c1\ud568 \uace0\uccd0\uc57c \ud568 ",(0,n.kt)("br",null),"\n","\xa0"," A device template defines the type of data that a device sends.\nA device template is a set of capabilities, and each item consists of a capability name, data type. It is created according to the type of data sent by the device. ",(0,n.kt)("br",null),"\n","\xa0"," If the data format sent by the device matches the device template format, the data is saved as ",(0,n.kt)("strong",{parentName:"p"},"model data"),". Otherwise the data is saved as ",(0,n.kt)("strong",{parentName:"p"},"unmodel data")," which cannot be used to create dashboard widgets."),(0,n.kt)("h3",{id:"create-new-template"},"Create new template"),(0,n.kt)("p",null,"On the device template page, click ",(0,n.kt)("strong",{parentName:"p"},"+ New Template")," button."),(0,n.kt)("div",null,(0,n.kt)("img",{alt:"click-new-template-button",src:(0,l.Z)("/img/quickstart/create-template/create_template1.png")})),(0,n.kt)("br",null),(0,n.kt)("p",null,"When the dialog window appears, set the name of the device template and click the ",(0,n.kt)("strong",{parentName:"p"},"Create")," button."),(0,n.kt)("div",null,(0,n.kt)("img",{alt:"create-template-dialog",src:(0,l.Z)("/img/quickstart/create-template/create_template2.png")})),(0,n.kt)("br",null),(0,n.kt)("p",null,"Once the template is created, click the name in the device template list to enter the detail page.\nDefine the data format sent from the device by adding capabilities from the detail page."),(0,n.kt)("div",null,(0,n.kt)("img",{alt:"click-template-details",src:(0,l.Z)("/img/quickstart/create-template/create_template3.png")})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"create-capabilities"},"Create capabilities"),(0,n.kt)("p",null,"On the template detail page, click the ",(0,n.kt)("strong",{parentName:"p"},"Add Capability")," button to add capabilities. This action makes it the same as the data sent from the device."),(0,n.kt)("div",null,(0,n.kt)("img",{alt:"add-capbilities",src:(0,l.Z)("/img/quickstart/create-template/create_template4.png")})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"save-and-publish-capabilities"},"Save and Publish capabilities"),(0,n.kt)("p",null,"If you have added capabilities, you should save them. Device templates have two main concepts: ",(0,n.kt)("strong",{parentName:"p"},"Save and Publish"),". ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Save")," means that the device template content is changed, but is not yet applied to the device. ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Publish")," is to change the state to be applied to the actual device."),(0,n.kt)("p",null,"If a device template is applied to a device and the contents are changed in the template and saved, the device data is still classified based on the previous published status. The device still determines whether the data is a model based on the content of the previously published device template.=> \ubb38\uc7a5 \uc218\uc815 \ud544\uc694 Only when it is published, the reference point for judging the data sent by the device changes. ",(0,n.kt)("br",null),"\nWhen you have added all the capabilities, click the ",(0,n.kt)("strong",{parentName:"p"},"Save")," button to save the changes.\nIt is not yet actually applied to the device."),(0,n.kt)("div",null,(0,n.kt)("img",{alt:"click-save-button",src:(0,l.Z)("/img/quickstart/create-template/create_template5.png")})),(0,n.kt)("br",null),(0,n.kt)("p",null,"After saving, click the ",(0,n.kt)("strong",{parentName:"p"},"Publish")," button to change it to a state that can actually be applied to the device."),(0,n.kt)("div",null,(0,n.kt)("img",{alt:"click-publish-button",src:(0,l.Z)("/img/quickstart/create-template/create_template6.png")})),(0,n.kt)("br",null),(0,n.kt)("p",null,"If you go back to the device template list page after publishing is complete, you can check the status of Pending and Published.\n",(0,n.kt)("strong",{parentName:"p"},"Pending")," means whether the state is saved or not. If published, it will be displayed as ",(0,n.kt)("strong",{parentName:"p"},"No Pending Changes"),", and if it is only saved and not published, it will be displayed as ",(0,n.kt)("strong",{parentName:"p"},"Has pending")," changes. Published shows the last published time."),(0,n.kt)("div",null,(0,n.kt)("img",{alt:"template-list",src:(0,l.Z)("/img/quickstart/create-template/create_template7.png")})),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"applying-a-device-template"},"Applying a device template"),(0,n.kt)("p",null,"To apply a device template, you need to go to the detail page of the device you want to apply. Go to the ",(0,n.kt)("strong",{parentName:"p"},"Edit device template")," item on the detail page of the device you created in the previous step. Select the device template you just created and click the ",(0,n.kt)("strong",{parentName:"p"},"Apply")," button to apply it. You can now create your dashboard."),(0,n.kt)("div",null,(0,n.kt)("img",{alt:"appliying-template",src:(0,l.Z)("/img/quickstart/create-template/create_template8.png")})),(0,n.kt)("br",null))}u.isMDXComponent=!0}}]);