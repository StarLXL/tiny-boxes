!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){const i=n(1),a=n(2);function p(t){console.log("[dotenv][DEBUG] "+t)}const r=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,u=/\\n/g,s=/\n|\r|\r\n/;function o(t,e){const n=Boolean(e&&e.debug),i={};return t.toString().split(s).forEach((function(t,e){const a=t.match(r);if(null!=a){const t=a[1];let e=a[2]||"";const n=e.length-1,p='"'===e[0]&&'"'===e[n];"'"===e[0]&&"'"===e[n]||p?(e=e.substring(1,n),p&&(e=e.replace(u,"\n"))):e=e.trim(),i[t]=e}else n&&p(`did not match key and value when parsing line ${e+1}: ${t}`)})),i}t.exports.config=function(t){let e=a.resolve(process.cwd(),".env"),n="utf8",r=!1;t&&(null!=t.path&&(e=t.path),null!=t.encoding&&(n=t.encoding),null!=t.debug&&(r=!0));try{const t=o(i.readFileSync(e,{encoding:n}),{debug:r});return Object.keys(t).forEach((function(e){Object.prototype.hasOwnProperty.call(process.env,e)?r&&p(`"${e}" is already defined in \`process.env\` and will not be overwritten`):process.env[e]=t[e]})),{parsed:t}}catch(t){return{error:t}}},t.exports.parse=o},function(t,e){t.exports=require("fs")},function(t,e){t.exports=require("path")},function(t,e){t.exports=require("querystring")},function(t,e,n){"use strict";n.r(e);n(3);n(0).config();var i=process.env,a=(i.PINATA_API_KEY,i.PINATA_API_SECRET,i.WALLET_PRIVATE_KEY,i.EXTERNAL_URL_BASE),p=i.WEB3_PROVIDER_ENDPOINT,r=i.CONTRACT_ADDRESS,u=new Web3(p);tinyboxesContract=new u.eth.Contract([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"ANIMATION_COUNT",outputs:[{internalType:"int256",name:"",type:"int256"}],stateMutability:"view",type:"function"},{inputs:[],name:"ARTIST_PRINTS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOKEN_LIMIT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"seed",type:"string"},{internalType:"uint256[2]",name:"counts",type:"uint256[2]"},{internalType:"int256[13]",name:"dials",type:"int256[13]"},{internalType:"bool[3]",name:"switches",type:"bool[3]"}],name:"createBox",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"creator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"currentPrice",outputs:[{internalType:"uint256",name:"price",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"},{internalType:"string",name:"seed",type:"string"},{internalType:"uint256[2]",name:"counts",type:"uint256[2]"},{internalType:"int256[13]",name:"dials",type:"int256[13]"},{internalType:"bool[3]",name:"switches",type:"bool[3]"},{internalType:"uint256",name:"animation",type:"uint256"},{internalType:"uint256",name:"frame",type:"uint256"}],name:"perpetualRenderer",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"priceAt",outputs:[{internalType:"uint256",name:"price",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenAnimation",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenArt",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenCounts",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenData",outputs:[{internalType:"uint256",name:"seed",type:"uint256"},{internalType:"uint256",name:"animation",type:"uint256"},{internalType:"uint256[]",name:"counts",type:"uint256[]"},{internalType:"int256[]",name:"dials",type:"int256[]"},{internalType:"bool[]",name:"switches",type:"bool[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenDials",outputs:[{internalType:"int256[]",name:"",type:"int256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"},{internalType:"uint256",name:"_frame",type:"uint256"}],name:"tokenFrame",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenSeed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenSwitches",outputs:[{internalType:"bool[]",name:"",type:"bool[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}],r);var s=function(t,e){return{statusCode:e,body:JSON.stringify(t)}};exports.handler=function(t,e,n){var i=t.queryStringParameters.id;if("GET"!==t.httpMethod)return console.log("Bad method:",t.httpMethod),n(null,s("Method Not Allowed",405));if(void 0===i)return console.log("Undefined ID parameter is required"),n(null,s("Invalid Request",204));tinyboxesContract.methods.tokenData(i).call((function(t){console.log(t)}));return n(null,s({metadata:{description:"A scattering of tiny boxes, Aranged in patterns ranging from mundane to magnificent.",external_url:a+i,image:"",name:"Token "+i,attributes:[],background_color:"121212",animation_url:""}},200))}}]));