"use strict";(self.webpackChunkpancakes=self.webpackChunkpancakes||[]).push([[877],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7432:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],c={title:"Est\xe1ndares de equipo"},i=void 0,l={unversionedId:"estandarCodigo",id:"estandarCodigo",title:"Est\xe1ndares de equipo",description:"Est\xe1ndares de documentos",source:"@site/docs/estandarCodigo.md",sourceDirName:".",slug:"/estandarCodigo",permalink:"/pancakes/docs/estandarCodigo",editUrl:"https://github.com/MutateInc/pancakes/docs/estandarCodigo.md",tags:[],version:"current",frontMatter:{title:"Est\xe1ndares de equipo"},sidebar:"docs",previous:{title:"Introducci\xf3n al proyecto",permalink:"/pancakes/docs/introduccion"},next:{title:"Stack de tecnolog\xeda",permalink:"/pancakes/docs/stack"}},d={},u=[{value:"Est\xe1ndares de documentos",id:"est\xe1ndares-de-documentos",level:2},{value:"Convenciones de C\xf3digo",id:"convenciones-de-c\xf3digo",level:2},{value:"Variables",id:"variables",level:3},{value:"Funciones",id:"funciones",level:3},{value:"Indentaci\xf3n",id:"indentaci\xf3n",level:3},{value:"Comentarios",id:"comentarios",level:3}],p={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"est\xe1ndares-de-documentos"},"Est\xe1ndares de documentos"),(0,a.kt)("p",null,"Cualquier tipo de documentaci\xf3n deber\xe1 ser presentada con la plantilla de documentos la cual se puede encontrar en la carpeta de Documentos/Plantillas dentro del \xe1rea de trabajo del proyecto."),(0,a.kt)("h2",{id:"convenciones-de-c\xf3digo"},"Convenciones de C\xf3digo"),(0,a.kt)("h3",{id:"variables"},"Variables"),(0,a.kt)("p",null,"Las variables deben nombrarse usando camelcase, comenzando con letras min\xfasculas (por ejemplo, localData), mientras que los nombres de variables globales deben comenzar con una letra may\xfascula (por ejemplo, GlobalData).\nLos nombres de constantes deben formarse con todas las letras may\xfasculas (por ejemplo, CONSDATA).\nLos nombres de las variables deben de ser significativos para comprender el motivo de su uso y hay que evitar el uso de d\xedgitos."),(0,a.kt)("h3",{id:"funciones"},"Funciones"),(0,a.kt)("p",null,"Las funciones deben describir el motivo de su uso de manera clara y breve y debe escribirse en camelcase comenzando con letras min\xfasculas (por ejemplo, guardarFuncion). "),(0,a.kt)("h3",{id:"indentaci\xf3n"},"Indentaci\xf3n"),(0,a.kt)("p",null,"Se deber\xe1 usar espacios para la indentaci\xf3n, manteniendo alineaci\xf3n y consistencia. No se usar\xe1n TABS."),(0,a.kt)("h3",{id:"comentarios"},"Comentarios"),(0,a.kt)("p",null,"Las funciones deber\xe1n contar con comentarios los cuales describen su prop\xf3sito, sus par\xe1metros de entrada y sus par\xe1metros de salida."))}m.isMDXComponent=!0}}]);