"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var i=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,c=function(e,t){if(null==e)return{};var n,i,c={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),v=l(n),p=c,g=v["".concat(d,".").concat(p)]||v[p]||u[p]||a;return n?i.createElement(g,r(r({ref:t},s),{},{components:n})):i.createElement(g,r({ref:t},s))}));function p(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,r=new Array(a);r[0]=v;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:c,r[1]=o;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},5235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var i=n(7462),c=(n(7294),n(3905)),a=n(4996);const r={title:"Creating a Device",metaTitle:"Creating a Device",metaDescription:"Creating a Device",sidebar_position:8},o="Creating a Device",d={unversionedId:"quickstart/how-to-connect-device/creating-device",id:"quickstart/how-to-connect-device/creating-device",title:"Creating a Device",description:"To create a device, you need to sign in to WIZnet Cloud. If you created an account in the previous step, sign in to WIZnet Cloud.",source:"@site/docs/quickstart/how-to-connect-device/creating-device.md",sourceDirName:"quickstart/how-to-connect-device",slug:"/quickstart/how-to-connect-device/creating-device",permalink:"/quickstart/how-to-connect-device/creating-device",draft:!1,editUrl:"https://github.com/Wiznet-Open-Cloud/aws-wiznet-cloud-docs/tree/main/docs/quickstart/how-to-connect-device/creating-device.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Creating a Device",metaTitle:"Creating a Device",metaDescription:"Creating a Device",sidebar_position:8},sidebar:"mySidebar",previous:{title:"Creating a WIZnet Cloud Account",permalink:"/quickstart/how-to-connect-device/creating-account"},next:{title:"Connecting Device to Cloud",permalink:"/quickstart/how-to-connect-device/connecting-device-cloud"}},l={},s=[{value:"Register a device",id:"register-a-device",level:3},{value:"Download certificates and keys",id:"download-certificates-and-keys",level:3},{value:"Check device details",id:"check-device-details",level:3}],u={toc:s};function v(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"creating-a-device"},"Creating a Device"),(0,c.kt)("p",null,"To create a device, you need to sign in to WIZnet Cloud. If you created an account in the previous step, sign in to WIZnet Cloud."),(0,c.kt)("h3",{id:"register-a-device"},"Register a device"),(0,c.kt)("p",null,"This is the process of creating a new device. Go to the device page and click the ",(0,c.kt)("strong",{parentName:"p"},"Register")," button."),(0,c.kt)("div",null,(0,c.kt)("img",{alt:"device-page",src:(0,a.Z)("/img/quickstart/create-device/create_device1.png")})),(0,c.kt)("br",null),(0,c.kt)("p",null,"When you click the button, the dialog window appears. Below the input field is a description of the device name rules."),(0,c.kt)("div",null,(0,c.kt)("img",{alt:"device-register-dialog",src:(0,a.Z)("/img/quickstart/create-device/create_device2_en.png")})),(0,c.kt)("br",null),(0,c.kt)("p",null,"Enter the device name according to the device name rules and click the ",(0,c.kt)("strong",{parentName:"p"},"Register")," button. After a few seconds, device creation is complete."),(0,c.kt)("div",null,(0,c.kt)("img",{alt:"device-register-dialog-input",src:(0,a.Z)("/img/quickstart/create-device/create_device3.png")})),(0,c.kt)("br",null),(0,c.kt)("h3",{id:"download-certificates-and-keys"},"Download certificates and keys"),(0,c.kt)("p",null,"When the device is created, you can download the device certificates and keys.\nThese files can only be downloaded here.\nAfter downloading all the files, click the Done button to close the dialog window."),(0,c.kt)("div",null,(0,c.kt)("img",{alt:"device-certificate-download",src:(0,a.Z)("/img/quickstart/create-device/create_device4.png")})),(0,c.kt)("br",null),(0,c.kt)("p",null,"The downloaded device certificate file will look like the image below the name.\nYou can use the certificate and key files to connect your device to the Cloud and send MQTT messages."),(0,c.kt)("div",null,(0,c.kt)("center",null,(0,c.kt)("img",{alt:"device-certificate",width:"70%",src:(0,a.Z)("/img/quickstart/create-device/create_device5.png")}))),(0,c.kt)("br",null),(0,c.kt)("h3",{id:"check-device-details"},"Check device details"),(0,c.kt)("p",null,'If you close the dialog window, you can see that the device has been added to the device list. The connection status is displayed as "Disconnected" because there is no connection yet.\nBy clicking on the name in the device list, you can view the details of the device and get the information you need to connect to the Cloud.'),(0,c.kt)("div",null,(0,c.kt)("img",{alt:"click-device-detail",src:(0,a.Z)("/img/quickstart/create-device/create_device6.png")})),(0,c.kt)("br",null),(0,c.kt)("p",null,"When you enter the detail page, you can see the ",(0,c.kt)("strong",{parentName:"p"},"RAW DATA")," tab first. The raw data cannot be checked because the data has not been sent yet."),(0,c.kt)("div",null,(0,c.kt)("img",{alt:"device-raw-data-tab",src:(0,a.Z)("/img/quickstart/create-device/create_device7.png")})),(0,c.kt)("br",null),(0,c.kt)("p",null,"In ",(0,c.kt)("strong",{parentName:"p"},"Device Management")," tab, check the real device name and device endpoint required for Cloud connection.\nThe name set when creating the device and the name used in the Cloud are separate. You must use the real device name to connect to the device."),(0,c.kt)("div",null,(0,c.kt)("img",{alt:"device-management-tab",src:(0,a.Z)("/img/quickstart/create-device/create_device8.png")})))}v.isMDXComponent=!0}}]);