var Bl="160";var Fu=0,ic=1,Bu=2;var Bh=1,Hl=2,bi=3,Xi=0,zn=1,cn=2;var Vi=0,ks=1,sc=2,rc=3,ac=4,Hu=5,ss=100,ku=101,zu=102,oc=103,lc=104,Vu=200,Gu=201,Wu=202,Xu=203,qo=204,Yo=205,qu=206,Yu=207,$u=208,Zu=209,Ku=210,Ju=211,ju=212,Qu=213,td=214,ed=0,nd=1,id=2,ua=3,sd=4,rd=5,ad=6,od=7,Hh=0,ld=1,cd=2,Gi=0,hd=1,ud=2,dd=3,fd=4,pd=5,md=6;var kh=300,Gs=301,Ws=302,$o=303,Zo=304,Wa=306,gr=1e3,ci=1001,Ko=1002,Nn=1003,cc=1004;var co=1005;var jn=1006,gd=1007;var _r=1008;var Wi=1009,_d=1010,xd=1011,kl=1012,zh=1013,ki=1014,zi=1015,xr=1016,Vh=1017,Gh=1018,as=1020,yd=1021,hi=1023,vd=1024,Md=1025,os=1026,Xs=1027,Sd=1028,Wh=1029,bd=1030,Xh=1031,qh=1033,ho=33776,uo=33777,fo=33778,po=33779,hc=35840,uc=35841,dc=35842,fc=35843,Yh=36196,pc=37492,mc=37496,gc=37808,_c=37809,xc=37810,yc=37811,vc=37812,Mc=37813,Sc=37814,bc=37815,Ec=37816,Tc=37817,wc=37818,Ac=37819,Rc=37820,Cc=37821,mo=36492,Pc=36494,Ic=36495,Ed=36283,Lc=36284,Dc=36285,Uc=36286;var da=2300,fa=2301,go=2302,Nc=2400,Oc=2401,Fc=2402;var $h=3e3,ls=3001,Td=3200,wd=3201,Zh=0,Ad=1,Qn="",An="srgb",Ti="srgb-linear",zl="display-p3",Xa="display-p3-linear",pa="linear",We="srgb",ma="rec709",ga="p3";var vs=7680;var Bc=519,Rd=512,Cd=513,Pd=514,Kh=515,Id=516,Ld=517,Dd=518,Ud=519,Hc=35044;var kc="300 es",Jo=1035,Ei=2e3,_a=2001,qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _o=Math.PI/180,jo=180/Math.PI;function Ks(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function Pn(i,t,e){return Math.max(t,Math.min(e,i))}function Nd(i,t){return(i%t+t)%t}function xo(i,t,e){return(1-e)*i+e*t}function zc(i){return(i&i-1)===0&&i!==0}function Qo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ar(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Te=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],x=n[8],v=s[0],m=s[3],p=s[6],M=s[1],y=s[4],T=s[7],O=s[2],I=s[5],L=s[8];return r[0]=a*v+o*M+l*O,r[3]=a*m+o*y+l*I,r[6]=a*p+o*T+l*L,r[1]=c*v+h*M+f*O,r[4]=c*m+h*y+f*I,r[7]=c*p+h*T+f*L,r[2]=d*v+u*M+x*O,r[5]=d*m+u*y+x*I,r[8]=d*p+u*T+x*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,x=e*f+n*d+s*u;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yo.makeScale(t,e)),this}rotate(t){return this.premultiply(yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yo=new Te;function Jh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=xa("canvas");return i.style.display="block",i}var Vc={};function ur(i){i in Vc||(Vc[i]=!0,console.warn(i))}var Gc=new Te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wc=new Te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[Ti]:{transfer:pa,primaries:ma,toReference:i=>i,fromReference:i=>i},[An]:{transfer:We,primaries:ma,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xa]:{transfer:pa,primaries:ga,toReference:i=>i.applyMatrix3(Wc),fromReference:i=>i.applyMatrix3(Gc)},[zl]:{transfer:We,primaries:ga,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wc),fromReference:i=>i.applyMatrix3(Gc).convertLinearToSRGB()}},Fd=new Set([Ti,Xa]),Be={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Fd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Br[t].toReference,s=Br[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Br[i].primaries},getTransfer:function(i){return i===Qn?pa:Br[i].transfer}};function zs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ms,ya=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=xa("canvas")),Ms.width=t.width,Ms.height=t.height;let n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zs(e[n]/255)*255):e[n]=zs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,va=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ks(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mo(s[a].image)):r.push(Mo(s[a]))}else r=Mo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hd=0,ei=class i extends qi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ci,s=ci,r=jn,a=_r,o=hi,l=Wi,c=i.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Ks(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ls?An:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===An?ls:$h}set encoding(t){ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ls?An:Qn}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=kh;ei.DEFAULT_ANISOTROPY=1;var wn=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],x=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,T=(u+1)/2,O=(p+1)/2,I=(h+d)/4,L=(f+v)/4,Y=(x+m)/4;return y>T&&y>O?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=I/n,r=L/n):T>O?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=I/s,r=Y/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=L/r,s=Y/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(f-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+u+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new wn(0,0,t,e),this.scissorTest=!1,this.viewport=new wn(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(ur("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ls?An:Qn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ei(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new va(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wi=class extends tl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ma=class extends ei{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var el=class extends ei{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],x=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=u,t[e+2]=x,t[e+3]=v;return}if(f!==v||l!==d||c!==u||h!==x){let m=1-o,p=l*d+c*u+h*x+f*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let O=Math.sqrt(y),I=Math.atan2(O,p*M);m=Math.sin(m*I)/O,o=Math.sin(o*I)/O}let T=o*M;if(l=l*m+d*T,c=c*m+u*T,h=h*m+x*T,f=f*m+v*T,m===1-o){let O=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=O,c*=O,h*=O,f*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],x=r[a+3];return t[e]=o*x+h*f+l*u-c*d,t[e+1]=l*x+h*d+c*f-o*u,t[e+2]=c*x+h*u+o*d-l*f,t[e+3]=h*x-o*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),u=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*x,this._y=c*u*f-d*h*x,this._z=c*h*x+d*u*f,this._w=c*h*f-d*u*x;break;case"YXZ":this._x=d*h*f+c*u*x,this._y=c*u*f-d*h*x,this._z=c*h*x-d*u*f,this._w=c*h*f+d*u*x;break;case"ZXY":this._x=d*h*f-c*u*x,this._y=c*u*f+d*h*x,this._z=c*h*x+d*u*f,this._w=c*h*f-d*u*x;break;case"ZYX":this._x=d*h*f-c*u*x,this._y=c*u*f+d*h*x,this._z=c*h*x-d*u*f,this._w=c*h*f+d*u*x;break;case"YZX":this._x=d*h*f+c*u*x,this._y=c*u*f+d*h*x,this._z=c*h*x-d*u*f,this._w=c*h*f-d*u*x;break;case"XZY":this._x=d*h*f-c*u*x,this._y=c*u*f-d*h*x,this._z=c*h*x+d*u*f,this._w=c*h*f+d*u*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return So.copy(this).projectOnVector(t),this.sub(So)}reflect(t){return this.sub(So.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},So=new F,Xc=new Yi,cs=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),kr.subVectors(this.max,or),Ss.subVectors(t.a,or),bs.subVectors(t.b,or),Es.subVectors(t.c,or),Ni.subVectors(bs,Ss),Oi.subVectors(Es,bs),Qi.subVectors(Ss,Es);let e=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-Qi.z,Qi.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,Qi.z,0,-Qi.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-Qi.y,Qi.x,0];return!bo(e,Ss,bs,Es,kr)||(e=[1,0,0,0,1,0,0,0,1],!bo(e,Ss,bs,Es,kr))?!1:(zr.crossVectors(Ni,Oi),e=[zr.x,zr.y,zr.z],bo(e,Ss,bs,Es,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xi=[new F,new F,new F,new F,new F,new F,new F,new F],ri=new F,Hr=new cs,Ss=new F,bs=new F,Es=new F,Ni=new F,Oi=new F,Qi=new F,or=new F,kr=new F,zr=new F,ts=new F;function bo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ts.fromArray(i,r);let o=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=t.dot(ts),c=e.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var kd=new cs,lr=new F,Eo=new F,qs=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);let e=lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(Eo)),this.expandByPoint(lr.copy(t.center).sub(Eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new F,To=new F,Vr=new F,Fi=new F,wo=new F,Gr=new F,Ao=new F,yr=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){To.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(To);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Vr),o=Fi.dot(this.direction),l=-Fi.dot(Vr),c=Fi.lengthSq(),h=Math.abs(1-a*a),f,d,u,x;if(h>0)if(f=a*l-o,d=a*o-l,x=r*h,f>=0)if(d>=-x)if(d<=x){let v=1/h;f*=v,d*=v,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(To).addScaledVector(Vr,d),u}intersectSphere(t,e){yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,s,r){wo.subVectors(e,t),Gr.subVectors(n,t),Ao.crossVectors(wo,Gr);let a=this.direction.dot(Ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,t);let l=o*this.direction.dot(Gr.crossVectors(Fi,Gr));if(l<0)return null;let c=o*this.direction.dot(wo.cross(Fi));if(c<0||l+c>a)return null;let h=-o*Fi.dot(Ao);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class i{constructor(t,e,n,s,r,a,o,l,c,h,f,d,u,x,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,d,u,x,v,m)}set(t,e,n,s,r,a,o,l,c,h,f,d,u,x,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),a=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,x=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+x*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=x+u*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,x=c*h,v=c*f;e[0]=d+v*o,e[4]=x*o-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-x,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,x=c*h,v=c*f;e[0]=d-v*o,e[4]=-a*f,e[8]=x+u*o,e[1]=u+x*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,u=a*f,x=o*h,v=o*f;e[0]=l*h,e[4]=x*c-u,e[8]=d*c+v,e[1]=l*f,e[5]=v*c+d,e[9]=u*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,u=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=v-d*f,e[8]=x*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*f+x,e[10]=d-v*f}else if(t.order==="XZY"){let d=a*l,u=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+v,e[5]=a*h,e[9]=u*f-x,e[2]=x*f-u,e[6]=o*h,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zd,t,Vd)}lookAt(t,e,n){let s=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Bi.crossVectors(n,qn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Bi.crossVectors(n,qn)),Bi.normalize(),Wr.crossVectors(qn,Bi),s[0]=Bi.x,s[4]=Wr.x,s[8]=qn.x,s[1]=Bi.y,s[5]=Wr.y,s[9]=qn.y,s[2]=Bi.z,s[6]=Wr.z,s[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],x=n[2],v=n[6],m=n[10],p=n[14],M=n[3],y=n[7],T=n[11],O=n[15],I=s[0],L=s[4],Y=s[8],b=s[12],w=s[1],U=s[5],B=s[9],J=s[13],P=s[2],W=s[6],N=s[10],st=s[14],$=s[3],Q=s[7],it=s[11],ct=s[15];return r[0]=a*I+o*w+l*P+c*$,r[4]=a*L+o*U+l*W+c*Q,r[8]=a*Y+o*B+l*N+c*it,r[12]=a*b+o*J+l*st+c*ct,r[1]=h*I+f*w+d*P+u*$,r[5]=h*L+f*U+d*W+u*Q,r[9]=h*Y+f*B+d*N+u*it,r[13]=h*b+f*J+d*st+u*ct,r[2]=x*I+v*w+m*P+p*$,r[6]=x*L+v*U+m*W+p*Q,r[10]=x*Y+v*B+m*N+p*it,r[14]=x*b+v*J+m*st+p*ct,r[3]=M*I+y*w+T*P+O*$,r[7]=M*L+y*U+T*W+O*Q,r[11]=M*Y+y*B+T*N+O*it,r[15]=M*b+y*J+T*st+O*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],x=t[3],v=t[7],m=t[11],p=t[15];return x*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*u-n*l*u)+v*(+e*l*u-e*c*d+r*a*d-s*a*u+s*c*h-r*l*h)+m*(+e*c*f-e*o*u-r*a*f+n*a*u+r*o*h-n*c*h)+p*(-s*o*h-e*l*f+e*o*d+s*a*f-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],x=t[12],v=t[13],m=t[14],p=t[15],M=f*m*c-v*d*c+v*l*u-o*m*u-f*l*p+o*d*p,y=x*d*c-h*m*c-x*l*u+a*m*u+h*l*p-a*d*p,T=h*v*c-x*f*c+x*o*u-a*v*u-h*o*p+a*f*p,O=x*f*l-h*v*l-x*o*d+a*v*d+h*o*m-a*f*m,I=e*M+n*y+s*T+r*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return t[0]=M*L,t[1]=(v*d*r-f*m*r-v*s*u+n*m*u+f*s*p-n*d*p)*L,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*L,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*u-n*l*u)*L,t[4]=y*L,t[5]=(h*m*r-x*d*r+x*s*u-e*m*u-h*s*p+e*d*p)*L,t[6]=(x*l*r-a*m*r-x*s*c+e*m*c+a*s*p-e*l*p)*L,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*u+e*l*u)*L,t[8]=T*L,t[9]=(x*f*r-h*v*r-x*n*u+e*v*u+h*n*p-e*f*p)*L,t[10]=(a*v*r-x*o*r+x*n*c-e*v*c-a*n*p+e*o*p)*L,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*u-e*o*u)*L,t[12]=O*L,t[13]=(h*v*s-x*f*s+x*n*d-e*v*d-h*n*m+e*f*m)*L,t[14]=(x*o*s-a*v*s-x*n*l+e*v*l+a*n*m-e*o*m)*L,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*d+e*o*d)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,x=r*f,v=a*h,m=a*f,p=o*f,M=l*c,y=l*h,T=l*f,O=n.x,I=n.y,L=n.z;return s[0]=(1-(v+p))*O,s[1]=(u+T)*O,s[2]=(x-y)*O,s[3]=0,s[4]=(u-T)*I,s[5]=(1-(d+p))*I,s[6]=(m+M)*I,s[7]=0,s[8]=(x+y)*L,s[9]=(m-M)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ts.set(s[0],s[1],s[2]).length(),a=Ts.set(s[4],s[5],s[6]).length(),o=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ai.copy(this);let c=1/r,h=1/a,f=1/o;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,e.setFromRotationMatrix(ai),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ei){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),u,x;if(o===Ei)u=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===_a)u=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ei){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*c,u=(n+s)*h,x,v;if(o===Ei)x=(a+r)*f,v=-2*f;else if(o===_a)x=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ts=new F,ai=new fn,zd=new F(0,0,0),Vd=new F(1,1,1),Bi=new F,Wr=new F,qn=new F,qc=new fn,Yc=new Yi,Sa=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sa.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gd=0,$c=new F,ws=new Yi,vi=new fn,Xr=new F,cr=new F,Wd=new F,Xd=new Yi,Zc=new F(1,0,0),Kc=new F(0,1,0),Jc=new F(0,0,1),qd={type:"added"},Yd={type:"removed"},Fn=class i extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Sa,n=new Yi,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fn},normalMatrix:{value:new Te}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Kc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Kc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(cr,Xr,this.up):vi.lookAt(Xr,cr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(vi),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Fn.DEFAULT_UP=new F(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new F,Mi=new F,Ro=new F,Si=new F,As=new F,Rs=new F,jc=new F,Co=new F,Po=new F,Io=new F,qr=!1,Os=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),oi.subVectors(t,e),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){oi.subVectors(s,e),Mi.subVectors(n,e),Ro.subVectors(t,e);let a=oi.dot(oi),o=oi.dot(Mi),l=oi.dot(Ro),c=Mi.dot(Mi),h=Mi.dot(Ro),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-u-x,x,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(t,e,n,s,r,a,o,l){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static isFrontFacing(t,e,n,s){return oi.subVectors(n,e),Mi.subVectors(t,e),oi.cross(Mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),oi.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,n),Rs.subVectors(r,n),Co.subVectors(t,n);let l=As.dot(Co),c=Rs.dot(Co);if(l<=0&&c<=0)return e.copy(n);Po.subVectors(t,s);let h=As.dot(Po),f=Rs.dot(Po);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(As,a);Io.subVectors(t,r);let u=As.dot(Io),x=Rs.dot(Io);if(x>=0&&u<=x)return e.copy(r);let v=u*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Rs,o);let m=h*x-u*f;if(m<=0&&f-h>=0&&u-x>=0)return jc.subVectors(r,s),o=(f-h)/(f-h+(u-x)),e.copy(s).addScaledVector(jc,o);let p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(As,a).addScaledVector(Rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Lo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Be.workingColorSpace){return this.r=t,this.g=e,this.b=n,Be.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Be.workingColorSpace){if(t=Nd(t,1),e=Pn(e,0,1),n=Pn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Lo(a,r,t+1/3),this.g=Lo(a,r,t),this.b=Lo(a,r,t-1/3)}return Be.toWorkingColorSpace(this,s),this}setStyle(t,e=An){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){let n=jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}copyLinearToSRGB(t){return this.r=vo(t.r),this.g=vo(t.g),this.b=vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return Be.fromWorkingColorSpace(Cn.copy(this),t),Math.round(Pn(Cn.r*255,0,255))*65536+Math.round(Pn(Cn.g*255,0,255))*256+Math.round(Pn(Cn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Be.workingColorSpace){Be.fromWorkingColorSpace(Cn.copy(this),e);let n=Cn.r,s=Cn.g,r=Cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Be.workingColorSpace){return Be.fromWorkingColorSpace(Cn.copy(this),e),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=An){Be.fromWorkingColorSpace(Cn.copy(this),t);let e=Cn.r,n=Cn.g,s=Cn.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Yr);let n=xo(Hi.h,Yr.h,e),s=xo(Hi.s,Yr.s,e),r=xo(Hi.l,Yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new pe;pe.NAMES=jh;var $d=0,$i=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=ks,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},rn=class extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var dn=new F,$r=new Nt,Vn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ar(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array),s=kn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array),s=kn(s,this.array),r=kn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}};var ba=class extends Vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ea=class extends Vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var en=class extends Vn{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Zd=0,Jn=new fn,Do=new Fn,Cs=new F,Yn=new cs,hr=new cs,Tn=new F,Gn=class i extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jh(t)?Ea:ba)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new en(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(Yn.min,hr.min),Yn.expandByPoint(Tn),Tn.addVectors(Yn.max,hr.max),Yn.expandByPoint(Tn)):(Yn.expandByPoint(hr.min),Yn.expandByPoint(hr.max))}Yn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Tn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tn.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(t,c),Tn.add(Cs)),s=Math.max(s,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new F,h[w]=new F;let f=new F,d=new F,u=new F,x=new Nt,v=new Nt,m=new Nt,p=new F,M=new F;function y(w,U,B){f.fromArray(s,w*3),d.fromArray(s,U*3),u.fromArray(s,B*3),x.fromArray(a,w*2),v.fromArray(a,U*2),m.fromArray(a,B*2),d.sub(f),u.sub(f),v.sub(x),m.sub(x);let J=1/(v.x*m.y-m.x*v.y);isFinite(J)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(u,-v.y).multiplyScalar(J),M.copy(u).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(J),c[w].add(p),c[U].add(p),c[B].add(p),h[w].add(M),h[U].add(M),h[B].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,U=T.length;w<U;++w){let B=T[w],J=B.start,P=B.count;for(let W=J,N=J+P;W<N;W+=3)y(n[W+0],n[W+1],n[W+2])}let O=new F,I=new F,L=new F,Y=new F;function b(w){L.fromArray(r,w*3),Y.copy(L);let U=c[w];O.copy(U),O.sub(L.multiplyScalar(L.dot(U))).normalize(),I.crossVectors(Y,U);let J=I.dot(h[w])<0?-1:1;l[w*4]=O.x,l[w*4+1]=O.y,l[w*4+2]=O.z,l[w*4+3]=J}for(let w=0,U=T.length;w<U;++w){let B=T[w],J=B.start,P=B.count;for(let W=J,N=J+P;W<N;W+=3)b(n[W+0]),b(n[W+1]),b(n[W+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(t)for(let d=0,u=t.count;d<u;d+=3){let x=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Tn.fromBufferAttribute(t,e),Tn.normalize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let p=0;p<h;p++)d[x++]=c[u++]}return new Vn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qc=new fn,es=new yr,Zr=new qs,th=new F,Ps=new F,Is=new F,Ls=new F,Uo=new F,Kr=new F,Jr=new Nt,jr=new Nt,Qr=new Nt,eh=new F,nh=new F,ih=new F,ta=new F,ea=new F,ce=class extends Fn{constructor(t=new Gn,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Uo.fromBufferAttribute(f,t),a?Kr.addScaledVector(Uo,h):Kr.addScaledVector(Uo.sub(e),h))}e.add(Kr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(Zr.containsPoint(es.origin)===!1&&(es.intersectSphere(Zr,th)===null||es.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Qc.copy(r).invert(),es.copy(t.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let m=d[x],p=a[m.materialIndex],M=Math.max(m.start,u.start),y=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let T=M,O=y;T<O;T+=3){let I=o.getX(T),L=o.getX(T+1),Y=o.getX(T+2);s=na(this,p,t,n,c,h,f,I,L,Y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=x,p=v;m<p;m+=3){let M=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);s=na(this,a,t,n,c,h,f,M,y,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){let m=d[x],p=a[m.materialIndex],M=Math.max(m.start,u.start),y=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let T=M,O=y;T<O;T+=3){let I=T,L=T+1,Y=T+2;s=na(this,p,t,n,c,h,f,I,L,Y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=x,p=v;m<p;m+=3){let M=m,y=m+1,T=m+2;s=na(this,a,t,n,c,h,f,M,y,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Kd(i,t,e,n,s,r,a,o){let l;if(t.side===zn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xi,o),l===null)return null;ea.copy(o),ea.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:i}}function na(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ps),i.getVertexPosition(l,Is),i.getVertexPosition(c,Ls);let h=Kd(i,t,e,n,Ps,Is,Ls,ta);if(h){s&&(Jr.fromBufferAttribute(s,o),jr.fromBufferAttribute(s,l),Qr.fromBufferAttribute(s,c),h.uv=Os.getInterpolation(ta,Ps,Is,Ls,Jr,jr,Qr,new Nt)),r&&(Jr.fromBufferAttribute(r,o),jr.fromBufferAttribute(r,l),Qr.fromBufferAttribute(r,c),h.uv1=Os.getInterpolation(ta,Ps,Is,Ls,Jr,jr,Qr,new Nt),h.uv2=h.uv1),a&&(eh.fromBufferAttribute(a,o),nh.fromBufferAttribute(a,l),ih.fromBufferAttribute(a,c),h.normal=Os.getInterpolation(ta,Ps,Is,Ls,eh,nh,ih,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};Os.getNormal(Ps,Is,Ls,f.normal),h.face=f}return h}var In=class i extends Gn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(f,2));function x(v,m,p,M,y,T,O,I,L,Y,b){let w=T/L,U=O/Y,B=T/2,J=O/2,P=I/2,W=L+1,N=Y+1,st=0,$=0,Q=new F;for(let it=0;it<N;it++){let ct=it*U-J;for(let pt=0;pt<W;pt++){let tt=pt*w-B;Q[v]=tt*M,Q[m]=ct*y,Q[p]=P,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=I>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(pt/L),f.push(1-it/Y),st+=1}}for(let it=0;it<Y;it++)for(let ct=0;ct<L;ct++){let pt=d+ct+W*it,tt=d+ct+W*(it+1),dt=d+(ct+1)+W*(it+1),wt=d+(ct+1)+W*it;l.push(pt,tt,wt),l.push(tt,dt,wt),$+=6}o.addGroup(u,$,b),u+=$,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Un(i){let t={};for(let e=0;e<i.length;e++){let n=Ys(i[e]);for(let s in n)t[s]=n[s]}return t}function Jd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qh(i){return i.getRenderTarget()===null?i.outputColorSpace:Be.workingColorSpace}var jd={clone:Ys,merge:Un},Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ai=class extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=Jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ta=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},On=class extends Ta{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_o*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ds=-90,Us=1,nl=class extends Fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new On(Ds,Us,t,e);s.layers=this.layers,this.add(s);let r=new On(Ds,Us,t,e);r.layers=this.layers,this.add(r);let a=new On(Ds,Us,t,e);a.layers=this.layers,this.add(a);let o=new On(Ds,Us,t,e);o.layers=this.layers,this.add(o);let l=new On(Ds,Us,t,e);l.layers=this.layers,this.add(l);let c=new On(Ds,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},wa=class extends ei{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},il=class extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ur("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ls?An:Qn),this.texture=new wa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new In(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Vi});r.uniforms.tEquirect.value=e;let a=new ce(s,r),o=e.minFilter;return e.minFilter===_r&&(e.minFilter=jn),new nl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},No=new F,ef=new F,nf=new Te,li=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=No.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(No),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nf.getNormalMatrix(t),s=this.coplanarPoint(No).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ns=new qs,ia=new F,Mr=class{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,a=new li){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],u=s[8],x=s[9],v=s[10],m=s[11],p=s[12],M=s[13],y=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,m-u,T-p).normalize(),n[1].setComponents(l+r,d+c,m+u,T+p).normalize(),n[2].setComponents(l+a,d+h,m+x,T+M).normalize(),n[3].setComponents(l-a,d-h,m-x,T-M).normalize(),n[4].setComponents(l-o,d-f,m-v,T-y).normalize(),e===Ei)n[5].setComponents(l+o,d+f,m+v,T+y).normalize();else if(e===_a)n[5].setComponents(o,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ia.x=s.normal.x>0?t.max.x:t.min.x,ia.y=s.normal.y>0?t.max.y:t.min.y,ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sf(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,d=c.usage,u=f.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,f){let d=h.array,u=h._updateRange,x=h.updateRanges;if(i.bindBuffer(f,c),u.count===-1&&x.length===0&&i.bufferSubData(f,0,d),x.length!==0){for(let v=0,m=x.length;v<m;v++){let p=x[v];e?i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}u.count!==-1&&(e?i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}var Ri=class i extends Gn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,d=e/l,u=[],x=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let y=0;y<c;y++){let T=y*f-r;x.push(T,-M,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let y=M+c*p,T=M+c*(p+1),O=M+1+c*(p+1),I=M+1+c*p;u.push(y,T,I),u.push(T,O,I)}this.setIndex(u),this.setAttribute("position",new en(x,3)),this.setAttribute("normal",new en(v,3)),this.setAttribute("uv",new en(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Me={alphahash_fragment:rf,alphahash_pars_fragment:af,alphamap_fragment:of,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:xf,bumpmap_pars_fragment:yf,clipping_planes_fragment:vf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:bf,color_fragment:Ef,color_pars_fragment:Tf,color_pars_vertex:wf,color_vertex:Af,common:Rf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:If,displacementmap_vertex:Lf,emissivemap_fragment:Df,emissivemap_pars_fragment:Uf,colorspace_fragment:Nf,colorspace_pars_fragment:Of,envmap_fragment:Ff,envmap_common_pars_fragment:Bf,envmap_pars_fragment:Hf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:jf,envmap_vertex:zf,fog_vertex:Vf,fog_pars_vertex:Gf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_fragment:Yf,lightmap_pars_fragment:$f,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Kf,lights_pars_begin:Jf,lights_toon_fragment:Qf,lights_toon_pars_fragment:tp,lights_phong_fragment:ep,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:ap,lights_fragment_end:op,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:dp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:_p,morphcolor_vertex:xp,morphnormal_vertex:yp,morphtarget_pars_vertex:vp,morphtarget_vertex:Mp,normal_fragment_begin:Sp,normal_fragment_maps:bp,normal_pars_fragment:Ep,normal_pars_vertex:Tp,normal_vertex:wp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Ip,opaque_fragment:Lp,packing:Dp,premultiplied_alpha_fragment:Up,project_vertex:Np,dithering_fragment:Op,dithering_pars_fragment:Fp,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:zp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Gp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:$p,specularmap_pars_fragment:Zp,tonemapping_fragment:Kp,tonemapping_pars_fragment:Jp,transmission_fragment:jp,transmission_pars_fragment:Qp,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:am,backgroundCube_frag:om,cube_vert:lm,cube_frag:cm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:xm,meshbasic_frag:ym,meshlambert_vert:vm,meshlambert_frag:Mm,meshmatcap_vert:Sm,meshmatcap_frag:bm,meshnormal_vert:Em,meshnormal_frag:Tm,meshphong_vert:wm,meshphong_frag:Am,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Pm,meshtoon_frag:Im,points_vert:Lm,points_frag:Dm,shadow_vert:Um,shadow_frag:Nm,sprite_vert:Om,sprite_frag:Fm},Tt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},mi={basic:{uniforms:Un([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Un([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new pe(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Un([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Un([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Un([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new pe(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Un([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Un([Tt.points,Tt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Un([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Un([Tt.common,Tt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Un([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Un([Tt.sprite,Tt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:Un([Tt.common,Tt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:Un([Tt.lights,Tt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};mi.physical={uniforms:Un([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};var sa={r:0,b:0,g:0};function Bm(i,t,e,n,s,r,a){let o=new pe(0),l=r===!0?0:1,c,h,f=null,d=0,u=null;function x(m,p){let M=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Wa)?(h===void 0&&(h=new ce(new In(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Ys(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Be.getTransfer(y.colorSpace)!==We,(f!==y||d!==y.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,d=y.version,u=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ce(new Ri(2,2),new Ai({name:"BackgroundMaterial",uniforms:Ys(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Be.getTransfer(y.colorSpace)!==We,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(sa,Qh(i)),n.buffers.color.setClear(sa.r,sa.g,sa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:x}}function Hm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function f(P,W,N,st,$){let Q=!1;if(a){let it=v(st,N,W);c!==it&&(c=it,u(c.object)),Q=p(P,st,N,$),Q&&M(P,st,N,$)}else{let it=W.wireframe===!0;(c.geometry!==st.id||c.program!==N.id||c.wireframe!==it)&&(c.geometry=st.id,c.program=N.id,c.wireframe=it,Q=!0)}$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,Y(P,W,N,st),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function x(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,W,N){let st=N.wireframe===!0,$=o[P.id];$===void 0&&($={},o[P.id]=$);let Q=$[W.id];Q===void 0&&(Q={},$[W.id]=Q);let it=Q[st];return it===void 0&&(it=m(d()),Q[st]=it),it}function m(P){let W=[],N=[],st=[];for(let $=0;$<s;$++)W[$]=0,N[$]=0,st[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:N,attributeDivisors:st,object:P,attributes:{},index:null}}function p(P,W,N,st){let $=c.attributes,Q=W.attributes,it=0,ct=N.getAttributes();for(let pt in ct)if(ct[pt].location>=0){let dt=$[pt],wt=Q[pt];if(wt===void 0&&(pt==="instanceMatrix"&&P.instanceMatrix&&(wt=P.instanceMatrix),pt==="instanceColor"&&P.instanceColor&&(wt=P.instanceColor)),dt===void 0||dt.attribute!==wt||wt&&dt.data!==wt.data)return!0;it++}return c.attributesNum!==it||c.index!==st}function M(P,W,N,st){let $={},Q=W.attributes,it=0,ct=N.getAttributes();for(let pt in ct)if(ct[pt].location>=0){let dt=Q[pt];dt===void 0&&(pt==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),pt==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor));let wt={};wt.attribute=dt,dt&&dt.data&&(wt.data=dt.data),$[pt]=wt,it++}c.attributes=$,c.attributesNum=it,c.index=st}function y(){let P=c.newAttributes;for(let W=0,N=P.length;W<N;W++)P[W]=0}function T(P){O(P,0)}function O(P,W){let N=c.newAttributes,st=c.enabledAttributes,$=c.attributeDivisors;N[P]=1,st[P]===0&&(i.enableVertexAttribArray(P),st[P]=1),$[P]!==W&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,W),$[P]=W)}function I(){let P=c.newAttributes,W=c.enabledAttributes;for(let N=0,st=W.length;N<st;N++)W[N]!==P[N]&&(i.disableVertexAttribArray(N),W[N]=0)}function L(P,W,N,st,$,Q,it){it===!0?i.vertexAttribIPointer(P,W,N,$,Q):i.vertexAttribPointer(P,W,N,st,$,Q)}function Y(P,W,N,st){if(n.isWebGL2===!1&&(P.isInstancedMesh||st.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let $=st.attributes,Q=N.getAttributes(),it=W.defaultAttributeValues;for(let ct in Q){let pt=Q[ct];if(pt.location>=0){let tt=$[ct];if(tt===void 0&&(ct==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),ct==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){let dt=tt.normalized,wt=tt.itemSize,zt=e.get(tt);if(zt===void 0)continue;let Vt=zt.buffer,re=zt.type,he=zt.bytesPerElement,Gt=n.isWebGL2===!0&&(re===i.INT||re===i.UNSIGNED_INT||tt.gpuType===zh);if(tt.isInterleavedBufferAttribute){let Se=tt.data,Z=Se.stride,Ke=tt.offset;if(Se.isInstancedInterleavedBuffer){for(let $t=0;$t<pt.locationSize;$t++)O(pt.location+$t,Se.meshPerAttribute);P.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let $t=0;$t<pt.locationSize;$t++)T(pt.location+$t);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let $t=0;$t<pt.locationSize;$t++)L(pt.location+$t,wt/pt.locationSize,re,dt,Z*he,(Ke+wt/pt.locationSize*$t)*he,Gt)}else{if(tt.isInstancedBufferAttribute){for(let Se=0;Se<pt.locationSize;Se++)O(pt.location+Se,tt.meshPerAttribute);P.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Se=0;Se<pt.locationSize;Se++)T(pt.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let Se=0;Se<pt.locationSize;Se++)L(pt.location+Se,wt/pt.locationSize,re,dt,wt*he,wt/pt.locationSize*Se*he,Gt)}}else if(it!==void 0){let dt=it[ct];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(pt.location,dt);break;case 3:i.vertexAttrib3fv(pt.location,dt);break;case 4:i.vertexAttrib4fv(pt.location,dt);break;default:i.vertexAttrib1fv(pt.location,dt)}}}}I()}function b(){B();for(let P in o){let W=o[P];for(let N in W){let st=W[N];for(let $ in st)x(st[$].object),delete st[$];delete W[N]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;let W=o[P.id];for(let N in W){let st=W[N];for(let $ in st)x(st[$].object),delete st[$];delete W[N]}delete o[P.id]}function U(P){for(let W in o){let N=o[W];if(N[P.id]===void 0)continue;let st=N[P.id];for(let $ in st)x(st[$].object),delete st[$];delete N[P.id]}}function B(){J(),h=!0,c!==l&&(c=l,u(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:J,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:T,disableUnusedAttributes:I}}function km(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,f){i.drawArrays(r,h,f),e.update(f,r,1)}function l(h,f,d){if(d===0)return;let u,x;if(s)u=i,x="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[x](r,h,f,d),e.update(f,r,d)}function c(h,f,d){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let x=0;x<d;x++)this.render(h[x],f[x]);else{u.multiDrawArraysWEBGL(r,h,0,f,0,d);let x=0;for(let v=0;v<d;v++)x+=f[v];e.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function zm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=a||t.has("OES_texture_float"),O=y&&T,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:O,maxSamples:I}}function Vm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new li,o=new Te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,y=M*4,T=p.clippingState||null;l.value=T,T=h(x,d,y,u);for(let O=0;O!==y;++O)T[O]=e[O];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,x){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,x!==!0||m===null){let p=u+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=u;y!==v;++y,T+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Gm(i){let t=new WeakMap;function e(a,o){return o===$o?a.mapping=Gs:o===Zo&&(a.mapping=Ws),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===$o||o===Zo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new il(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Aa=class extends Ta{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fs=4,sh=[.125,.215,.35,.446,.526,.582],rs=20,Oo=new Aa,rh=new pe,Fo=null,Bo=0,Ho=0,is=(1+Math.sqrt(5))/2,Ns=1/is,ah=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,is,Ns),new F(0,is,-Ns),new F(Ns,0,is),new F(-Ns,0,is),new F(is,Ns,0),new F(-is,Ns,0)],Ra=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Bo,Ho),t.scissorTest=!1,ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:xr,format:hi,colorSpace:Ti,depthBuffer:!1},s=oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=Xm(r,t,e)}return s}_compileMaterial(t){let e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,n,s){let o=new On(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(rh),h.toneMapping=Gi,h.autoClear=!1;let u=new rn({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),x=new ce(new In,u),v=!1,m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,v=!0):(u.color.copy(rh),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;ra(s,M*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gs||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ra(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Oo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ah[(s-1)%ah.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ce(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*rs-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);let p=[],M=0;for(let L=0;L<rs;++L){let Y=L/v,b=Math.exp(-Y*Y/2);p.push(b),L===0?M+=b:L<m&&(M+=2*b)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=x,d.mipInt.value=y-n;let T=this._sizeLods[s],O=3*T*(s>y-Fs?s-y+Fs:0),I=4*(this._cubeSize-T);ra(e,O,I,3*T,2*T),l.setRenderTarget(e),l.render(f,Oo)}};function Wm(i){let t=[],e=[],n=[],s=i,r=i-Fs+1+sh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Fs?l=sh[a-i+Fs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,x=6,v=3,m=2,p=1,M=new Float32Array(v*x*u),y=new Float32Array(m*x*u),T=new Float32Array(p*x*u);for(let I=0;I<u;I++){let L=I%3*2/3-1,Y=I>2?0:-1,b=[L,Y,0,L+2/3,Y,0,L+2/3,Y+1,0,L,Y,0,L+2/3,Y+1,0,L,Y+1,0];M.set(b,v*x*I),y.set(d,m*x*I);let w=[I,I,I,I,I,I];T.set(w,p*x*I)}let O=new Gn;O.setAttribute("position",new Vn(M,v)),O.setAttribute("uv",new Vn(y,m)),O.setAttribute("faceIndex",new Vn(T,p)),t.push(O),s>Fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oh(i,t,e){let n=new wi(i,t,e);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xm(i,t,e){let n=new Float32Array(rs),s=new F(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function lh(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function ch(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===$o||l===Zo,h=l===Gs||l===Ws;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new Ra(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||h&&f&&s(f)){e===null&&(e=new Ra(i));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ym(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $m(i,t,e,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let v=d.morphAttributes[x];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let x in u){let v=u[x];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,x=f.attributes.position,v=0;if(u!==null){let M=u.array;v=u.version;for(let y=0,T=M.length;y<T;y+=3){let O=M[y+0],I=M[y+1],L=M[y+2];d.push(O,I,I,L,L,O)}}else if(x!==void 0){let M=x.array;v=x.version;for(let y=0,T=M.length/3-1;y<T;y+=3){let O=y+0,I=y+1,L=y+2;d.push(O,I,I,L,L,O)}}else return;let m=new(Jh(d)?Ea:ba)(d,1);m.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Zm(i,t,e,n){let s=n.isWebGL2,r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,x){i.drawElements(r,x,o,u*l),e.update(x,r,1)}function f(u,x,v){if(v===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,x,o,u*l,v),e.update(x,r,v)}function d(u,x,v){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(u[p]/l,x[p]);else{m.multiDrawElementsWEBGL(r,x,0,o,u,0,v);let p=0;for(let M=0;M<v;M++)p+=x[M];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function Km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jm(i,t){return i[0]-t[0]}function jm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Qm(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new wn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=u!==void 0?u.length:0,v=r.get(h);if(v===void 0||v.count!==x){let P=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],Y=0;M===!0&&(Y=1),y===!0&&(Y=2),T===!0&&(Y=3);let b=h.attributes.position.count*Y,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let U=new Float32Array(b*w*4*x),B=new Ma(U,b,w,x);B.type=zi,B.needsUpdate=!0;let J=Y*4;for(let W=0;W<x;W++){let N=O[W],st=I[W],$=L[W],Q=b*w*4*W;for(let it=0;it<N.count;it++){let ct=it*J;M===!0&&(a.fromBufferAttribute(N,it),U[Q+ct+0]=a.x,U[Q+ct+1]=a.y,U[Q+ct+2]=a.z,U[Q+ct+3]=0),y===!0&&(a.fromBufferAttribute(st,it),U[Q+ct+4]=a.x,U[Q+ct+5]=a.y,U[Q+ct+6]=a.z,U[Q+ct+7]=0),T===!0&&(a.fromBufferAttribute($,it),U[Q+ct+8]=a.x,U[Q+ct+9]=a.y,U[Q+ct+10]=a.z,U[Q+ct+11]=$.itemSize===4?a.w:1)}}v={count:x,texture:B,size:new Nt(b,w)},r.set(h,v),h.addEventListener("dispose",P)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];let p=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let u=d===void 0?0:d.length,x=n[h.id];if(x===void 0||x.length!==u){x=[];for(let y=0;y<u;y++)x[y]=[y,0];n[h.id]=x}for(let y=0;y<u;y++){let T=x[y];T[0]=y,T[1]=d[y]}x.sort(jm);for(let y=0;y<8;y++)y<u&&x[y][1]?(o[y][0]=x[y][0],o[y][1]=x[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Jm);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let T=o[y],O=T[0],I=T[1];O!==Number.MAX_SAFE_INTEGER&&I?(v&&h.getAttribute("morphTarget"+y)!==v[O]&&h.setAttribute("morphTarget"+y,v[O]),m&&h.getAttribute("morphNormal"+y)!==m[O]&&h.setAttribute("morphNormal"+y,m[O]),s[y]=I,p+=I):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let M=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function tg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ca=class extends ei{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:os,h!==os&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=ki),n===void 0&&h===Xs&&(n=as),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},eu=new ei,nu=new Ca(1,1);nu.compareFunction=Kh;var iu=new Ma,su=new el,ru=new wa,hh=[],uh=[],dh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function Js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hh[s];if(r===void 0&&(r=new Float32Array(s),hh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function vn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qa(i,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2fv(this.addr,t),Mn(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vn(e,t))return;i.uniform3fv(this.addr,t),Mn(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4fv(this.addr,t),Mn(e,t)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Mn(e,t)}else{if(vn(e,n))return;ph.set(n),i.uniformMatrix2fv(this.addr,!1,ph),Mn(e,n)}}function ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Mn(e,t)}else{if(vn(e,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),Mn(e,n)}}function og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(vn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Mn(e,t)}else{if(vn(e,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),Mn(e,n)}}function lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2iv(this.addr,t),Mn(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3iv(this.addr,t),Mn(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4iv(this.addr,t),Mn(e,t)}}function dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;i.uniform2uiv(this.addr,t),Mn(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;i.uniform3uiv(this.addr,t),Mn(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;i.uniform4uiv(this.addr,t),Mn(e,t)}}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?nu:eu;e.setTexture2D(t||r,s)}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||su,s)}function xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ru,s)}function yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||iu,s)}function vg(i){switch(i){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return yg}}function Mg(i,t){i.uniform1fv(this.addr,t)}function Sg(i,t){let e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function bg(i,t){let e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function Eg(i,t){let e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function Tg(i,t){let e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wg(i,t){let e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ag(i,t){let e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rg(i,t){i.uniform1iv(this.addr,t)}function Cg(i,t){i.uniform2iv(this.addr,t)}function Pg(i,t){i.uniform3iv(this.addr,t)}function Ig(i,t){i.uniform4iv(this.addr,t)}function Lg(i,t){i.uniform1uiv(this.addr,t)}function Dg(i,t){i.uniform2uiv(this.addr,t)}function Ug(i,t){i.uniform3uiv(this.addr,t)}function Ng(i,t){i.uniform4uiv(this.addr,t)}function Og(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||eu,r[a])}function Fg(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||su,r[a])}function Bg(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ru,r[a])}function Hg(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);vn(n,r)||(i.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||iu,r[a])}function kg(i){switch(i){case 5126:return Mg;case 35664:return Sg;case 35665:return bg;case 35666:return Eg;case 35674:return Tg;case 35675:return wg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return Hg}}var sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vg(e.type)}},rl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}},al=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ko=/(\w+)(\])?(\[|\.)?/g;function mh(i,t){i.seq.push(t),i.map[t.id]=t}function zg(i,t,e){let n=i.name,s=n.length;for(ko.lastIndex=0;;){let r=ko.exec(n),a=ko.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mh(e,c===void 0?new sl(o,i,t):new rl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new al(o),mh(e,f)),e=f}}}var Vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);zg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vg=37297,Gg=0;function Wg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Xg(i){let t=Be.getPrimaries(Be.workingColorSpace),e=Be.getPrimaries(i),n;switch(t===e?n="":t===ga&&e===ma?n="LinearDisplayP3ToLinearSRGB":t===ma&&e===ga&&(n="LinearSRGBToLinearDisplayP3"),i){case Ti:case Xa:return[n,"LinearTransferOETF"];case An:case zl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _h(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wg(i.getShaderSource(t),a)}else return s}function qg(i,t){let e=Xg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Yg(i,t){let e;switch(t){case hd:e="Linear";break;case ud:e="Reinhard";break;case dd:e="OptimizedCineon";break;case fd:e="ACESFilmic";break;case md:e="AgX";break;case pd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $g(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Bs).join(`
`)}function Kg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Bs(i){return i!==""}function xh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(jg,t0)}var Qg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function t0(i,t){let e=Me[t];if(e===void 0){let n=Qg.get(t);if(n!==void 0)e=Me[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ol(e)}var e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(i){return i.replace(e0,n0)}function n0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mh(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function i0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function s0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function a0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hh:t="ENVMAP_BLENDING_MULTIPLY";break;case ld:t="ENVMAP_BLENDING_MIX";break;case cd:t="ENVMAP_BLENDING_ADD";break}return t}function o0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function l0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=i0(e),c=s0(e),h=r0(e),f=a0(e),d=o0(e),u=e.isWebGL2?"":$g(e),x=Zg(e),v=Kg(r),m=s.createProgram(),p,M,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Bs).join(`
`),p.length>0&&(p+=`
`),M=[u,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Bs).join(`
`),M.length>0&&(M+=`
`)):(p=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),M=[u,Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?Me.tonemapping_pars_fragment:"",e.toneMapping!==Gi?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),a=ol(a),a=xh(a,e),a=yh(a,e),o=ol(o),o=xh(o,e),o=yh(o,e),a=vh(a),o=vh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=y+p+a,O=y+M+o,I=gh(s,s.VERTEX_SHADER,T),L=gh(s,s.FRAGMENT_SHADER,O);s.attachShader(m,I),s.attachShader(m,L),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function Y(B){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(L).trim(),N=!0,st=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,I,L);else{let $=_h(s,I,"vertex"),Q=_h(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+$+`
`+Q)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||W==="")&&(st=!1);st&&(B.diagnostics={runnable:N,programLog:J,vertexShader:{log:P,prefix:p},fragmentShader:{log:W,prefix:M}})}s.deleteShader(I),s.deleteShader(L),b=new Vs(s,m),w=Jg(s,m)}let b;this.getUniforms=function(){return b===void 0&&Y(this),b};let w;this.getAttributes=function(){return w===void 0&&Y(this),w};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,Vg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=L,this}var c0=0,ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new cl(t),e.set(t,n)),n}},cl=class{constructor(t){this.id=c0++,this.code=t,this.usedTimes=0}};function h0(i,t,e,n,s,r,a){let o=new vr,l=new ll,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,w,U,B,J){let P=B.fog,W=J.geometry,N=b.isMeshStandardMaterial?B.environment:null,st=(b.isMeshStandardMaterial?e:t).get(b.envMap||N),$=st&&st.mapping===Wa?st.image.height:null,Q=x[b.type];b.precision!==null&&(u=s.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=it!==void 0?it.length:0,pt=0;W.morphAttributes.position!==void 0&&(pt=1),W.morphAttributes.normal!==void 0&&(pt=2),W.morphAttributes.color!==void 0&&(pt=3);let tt,dt,wt,zt;if(Q){let ye=mi[Q];tt=ye.vertexShader,dt=ye.fragmentShader}else tt=b.vertexShader,dt=b.fragmentShader,l.update(b),wt=l.getVertexShaderID(b),zt=l.getFragmentShaderID(b);let Vt=i.getRenderTarget(),re=J.isInstancedMesh===!0,he=J.isBatchedMesh===!0,Gt=!!b.map,Se=!!b.matcap,Z=!!st,Ke=!!b.aoMap,$t=!!b.lightMap,ie=!!b.bumpMap,Xt=!!b.normalMap,ke=!!b.displacementMap,fe=!!b.emissiveMap,R=!!b.metalnessMap,S=!!b.roughnessMap,K=b.anisotropy>0,vt=b.clearcoat>0,mt=b.iridescence>0,Mt=b.sheen>0,qt=b.transmission>0,At=K&&!!b.anisotropyMap,Ot=vt&&!!b.clearcoatMap,ne=vt&&!!b.clearcoatNormalMap,ae=vt&&!!b.clearcoatRoughnessMap,at=mt&&!!b.iridescenceMap,oe=mt&&!!b.iridescenceThicknessMap,te=Mt&&!!b.sheenColorMap,le=Mt&&!!b.sheenRoughnessMap,Yt=!!b.specularMap,Dt=!!b.specularColorMap,Zt=!!b.specularIntensityMap,Re=qt&&!!b.transmissionMap,Ft=qt&&!!b.thicknessMap,It=!!b.gradientMap,ft=!!b.alphaMap,D=b.alphaTest>0,Rt=!!b.alphaHash,Ct=!!b.extensions,jt=!!W.attributes.uv1,Bt=!!W.attributes.uv2,be=!!W.attributes.uv3,Pe=Gi;return b.toneMapped&&(Vt===null||Vt.isXRRenderTarget===!0)&&(Pe=i.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:dt,defines:b.defines,customVertexShaderID:wt,customFragmentShaderID:zt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:he,instancing:re,instancingColor:re&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Vt===null?i.outputColorSpace:Vt.isXRRenderTarget===!0?Vt.texture.colorSpace:Ti,map:Gt,matcap:Se,envMap:Z,envMapMode:Z&&st.mapping,envMapCubeUVHeight:$,aoMap:Ke,lightMap:$t,bumpMap:ie,normalMap:Xt,displacementMap:d&&ke,emissiveMap:fe,normalMapObjectSpace:Xt&&b.normalMapType===Ad,normalMapTangentSpace:Xt&&b.normalMapType===Zh,metalnessMap:R,roughnessMap:S,anisotropy:K,anisotropyMap:At,clearcoat:vt,clearcoatMap:Ot,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,iridescence:mt,iridescenceMap:at,iridescenceThicknessMap:oe,sheen:Mt,sheenColorMap:te,sheenRoughnessMap:le,specularMap:Yt,specularColorMap:Dt,specularIntensityMap:Zt,transmission:qt,transmissionMap:Re,thicknessMap:Ft,gradientMap:It,opaque:b.transparent===!1&&b.blending===ks,alphaMap:ft,alphaTest:D,alphaHash:Rt,combine:b.combine,mapUv:Gt&&v(b.map.channel),aoMapUv:Ke&&v(b.aoMap.channel),lightMapUv:$t&&v(b.lightMap.channel),bumpMapUv:ie&&v(b.bumpMap.channel),normalMapUv:Xt&&v(b.normalMap.channel),displacementMapUv:ke&&v(b.displacementMap.channel),emissiveMapUv:fe&&v(b.emissiveMap.channel),metalnessMapUv:R&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:At&&v(b.anisotropyMap.channel),clearcoatMapUv:Ot&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:te&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:le&&v(b.sheenRoughnessMap.channel),specularMapUv:Yt&&v(b.specularMap.channel),specularColorMapUv:Dt&&v(b.specularColorMap.channel),specularIntensityMapUv:Zt&&v(b.specularIntensityMap.channel),transmissionMapUv:Re&&v(b.transmissionMap.channel),thicknessMapUv:Ft&&v(b.thicknessMap.channel),alphaMapUv:ft&&v(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Xt||K),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:jt,vertexUv2s:Bt,vertexUv3s:be,pointsUvs:J.isPoints===!0&&!!W.attributes.uv&&(Gt||ft),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:pt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Gt&&b.map.isVideoTexture===!0&&Be.getTransfer(b.map.colorSpace)===We,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===cn,flipSided:b.side===zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ct&&b.extensions.derivatives===!0,extensionFragDepth:Ct&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ct&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ct&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ct&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)w.push(U),w.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(M(w,b),y(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function M(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function T(b){let w=x[b.type],U;if(w){let B=mi[w];U=jd.clone(B.uniforms)}else U=b.uniforms;return U}function O(b,w){let U;for(let B=0,J=c.length;B<J;B++){let P=c[B];if(P.cacheKey===w){U=P,++U.usedTimes;break}}return U===void 0&&(U=new l0(i,w,b,r),c.push(U)),U}function I(b){if(--b.usedTimes===0){let w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function Y(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:O,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:Y}}function u0(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function d0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,u,x,v,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:x,renderOrder:f.renderOrder,z:v,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=v,p.group=m),t++,p}function o(f,d,u,x,v,m){let p=a(f,d,u,x,v,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(f,d,u,x,v,m){let p=a(f,d,u,x,v,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||d0),n.length>1&&n.sort(d||Sh),s.length>1&&s.sort(d||Sh)}function h(){for(let f=t,d=i.length;f<d;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function f0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new bh,i.set(n,[a])):s>=r.length?(a=new bh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function p0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new pe};break;case"SpotLight":e={position:new F,direction:new F,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function m0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var g0=0;function _0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function x0(i,t){let e=new p0,n=m0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new fn,o=new fn;function l(h,f){let d=0,u=0,x=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let v=0,m=0,p=0,M=0,y=0,T=0,O=0,I=0,L=0,Y=0,b=0;h.sort(_0);let w=f===!0?Math.PI:1;for(let B=0,J=h.length;B<J;B++){let P=h[B],W=P.color,N=P.intensity,st=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=W.r*N*w,u+=W.g*N*w,x+=W.b*N*w;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(P.sh.coefficients[Q],N);b++}else if(P.isDirectionalLight){let Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){let it=P.shadow,ct=n.get(P);ct.shadowBias=it.bias,ct.shadowNormalBias=it.normalBias,ct.shadowRadius=it.radius,ct.shadowMapSize=it.mapSize,s.directionalShadow[v]=ct,s.directionalShadowMap[v]=$,s.directionalShadowMatrix[v]=P.shadow.matrix,T++}s.directional[v]=Q,v++}else if(P.isSpotLight){let Q=e.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(W).multiplyScalar(N*w),Q.distance=st,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,s.spot[p]=Q;let it=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,it.updateMatrices(P),P.castShadow&&Y++),s.spotLightMatrix[p]=it.matrix,P.castShadow){let ct=n.get(P);ct.shadowBias=it.bias,ct.shadowNormalBias=it.normalBias,ct.shadowRadius=it.radius,ct.shadowMapSize=it.mapSize,s.spotShadow[p]=ct,s.spotShadowMap[p]=$,I++}p++}else if(P.isRectAreaLight){let Q=e.get(P);Q.color.copy(W).multiplyScalar(N),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=Q,M++}else if(P.isPointLight){let Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*w),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){let it=P.shadow,ct=n.get(P);ct.shadowBias=it.bias,ct.shadowNormalBias=it.normalBias,ct.shadowRadius=it.radius,ct.shadowMapSize=it.mapSize,ct.shadowCameraNear=it.camera.near,ct.shadowCameraFar=it.camera.far,s.pointShadow[m]=ct,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=P.shadow.matrix,O++}s.point[m]=Q,m++}else if(P.isHemisphereLight){let Q=e.get(P);Q.skyColor.copy(P.color).multiplyScalar(N*w),Q.groundColor.copy(P.groundColor).multiplyScalar(N*w),s.hemi[y]=Q,y++}}M>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Tt.LTC_FLOAT_1,s.rectAreaLTC2=Tt.LTC_FLOAT_2):(s.rectAreaLTC1=Tt.LTC_HALF_1,s.rectAreaLTC2=Tt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Tt.LTC_FLOAT_1,s.rectAreaLTC2=Tt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Tt.LTC_HALF_1,s.rectAreaLTC2=Tt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=u,s.ambient[2]=x;let U=s.hash;(U.directionalLength!==v||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==M||U.hemiLength!==y||U.numDirectionalShadows!==T||U.numPointShadows!==O||U.numSpotShadows!==I||U.numSpotMaps!==L||U.numLightProbes!==b)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=M,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=I+L-Y,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=b,U.directionalLength=v,U.pointLength=m,U.spotLength=p,U.rectAreaLength=M,U.hemiLength=y,U.numDirectionalShadows=T,U.numPointShadows=O,U.numSpotShadows=I,U.numSpotMaps=L,U.numLightProbes=b,s.version=g0++)}function c(h,f){let d=0,u=0,x=0,v=0,m=0,p=f.matrixWorldInverse;for(let M=0,y=h.length;M<y;M++){let T=h[M];if(T.isDirectionalLight){let O=s.directional[d];O.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),d++}else if(T.isSpotLight){let O=s.spot[x];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),O.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),x++}else if(T.isRectAreaLight){let O=s.rectArea[v];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let O=s.point[u];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){let O=s.hemi[m];O.direction.setFromMatrixPosition(T.matrixWorld),O.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Eh(i,t){let e=new x0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function y0(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Eh(i,t),e.set(r,[l])):a>=o.length?(l=new Eh(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var hl=class extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ul=class extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S0(i,t,e){let n=new Mr,s=new Nt,r=new Nt,a=new wn,o=new hl({depthPacking:wd}),l=new ul,c={},h=e.maxTextureSize,f={[Xi]:zn,[zn]:Xi,[cn]:cn},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:v0,fragmentShader:M0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let x=new Gn;x.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ce(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let p=this.type;this.render=function(I,L,Y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let b=i.getRenderTarget(),w=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Vi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let J=p!==bi&&this.type===bi,P=p===bi&&this.type!==bi;for(let W=0,N=I.length;W<N;W++){let st=I[W],$=st.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let Q=$.getFrameExtents();if(s.multiply(Q),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,$.mapSize.y=r.y)),$.map===null||J===!0||P===!0){let ct=this.type!==bi?{minFilter:Nn,magFilter:Nn}:{};$.map!==null&&$.map.dispose(),$.map=new wi(s.x,s.y,ct),$.map.texture.name=st.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let it=$.getViewportCount();for(let ct=0;ct<it;ct++){let pt=$.getViewport(ct);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),B.viewport(a),$.updateMatrices(st,ct),n=$.getFrustum(),T(L,Y,$.camera,st,this.type)}$.isPointLightShadow!==!0&&this.type===bi&&M($,Y),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,w,U)};function M(I,L){let Y=t.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new wi(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,Y,d,v,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,Y,u,v,null)}function y(I,L,Y,b){let w=null,U=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)w=U;else if(w=Y.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let B=w.uuid,J=L.uuid,P=c[B];P===void 0&&(P={},c[B]=P);let W=P[J];W===void 0&&(W=w.clone(),P[J]=W,L.addEventListener("dispose",O)),w=W}if(w.visible=L.visible,w.wireframe=L.wireframe,b===bi?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:f[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let B=i.properties.get(w);B.light=Y}return w}function T(I,L,Y,b,w){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===bi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);let J=t.update(I),P=I.material;if(Array.isArray(P)){let W=J.groups;for(let N=0,st=W.length;N<st;N++){let $=W[N],Q=P[$.materialIndex];if(Q&&Q.visible){let it=y(I,Q,b,w);I.onBeforeShadow(i,I,L,Y,J,it,$),i.renderBufferDirect(Y,null,J,it,I,$),I.onAfterShadow(i,I,L,Y,J,it,$)}}}else if(P.visible){let W=y(I,P,b,w);I.onBeforeShadow(i,I,L,Y,J,W,null),i.renderBufferDirect(Y,null,J,W,I,null),I.onAfterShadow(i,I,L,Y,J,W,null)}}let B=I.children;for(let J=0,P=B.length;J<P;J++)T(B[J],L,Y,b,w)}function O(I){I.target.removeEventListener("dispose",O);for(let Y in c){let b=c[Y],w=I.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function b0(i,t,e){let n=e.isWebGL2;function s(){let D=!1,Rt=new wn,Ct=null,jt=new wn(0,0,0,0);return{setMask:function(Bt){Ct!==Bt&&!D&&(i.colorMask(Bt,Bt,Bt,Bt),Ct=Bt)},setLocked:function(Bt){D=Bt},setClear:function(Bt,be,Pe,Ie,ye){ye===!0&&(Bt*=Ie,be*=Ie,Pe*=Ie),Rt.set(Bt,be,Pe,Ie),jt.equals(Rt)===!1&&(i.clearColor(Bt,be,Pe,Ie),jt.copy(Rt))},reset:function(){D=!1,Ct=null,jt.set(-1,0,0,0)}}}function r(){let D=!1,Rt=null,Ct=null,jt=null;return{setTest:function(Bt){Bt?he(i.DEPTH_TEST):Gt(i.DEPTH_TEST)},setMask:function(Bt){Rt!==Bt&&!D&&(i.depthMask(Bt),Rt=Bt)},setFunc:function(Bt){if(Ct!==Bt){switch(Bt){case ed:i.depthFunc(i.NEVER);break;case nd:i.depthFunc(i.ALWAYS);break;case id:i.depthFunc(i.LESS);break;case ua:i.depthFunc(i.LEQUAL);break;case sd:i.depthFunc(i.EQUAL);break;case rd:i.depthFunc(i.GEQUAL);break;case ad:i.depthFunc(i.GREATER);break;case od:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=Bt}},setLocked:function(Bt){D=Bt},setClear:function(Bt){jt!==Bt&&(i.clearDepth(Bt),jt=Bt)},reset:function(){D=!1,Rt=null,Ct=null,jt=null}}}function a(){let D=!1,Rt=null,Ct=null,jt=null,Bt=null,be=null,Pe=null,Ie=null,ye=null;return{setTest:function(me){D||(me?he(i.STENCIL_TEST):Gt(i.STENCIL_TEST))},setMask:function(me){Rt!==me&&!D&&(i.stencilMask(me),Rt=me)},setFunc:function(me,Xe,Je){(Ct!==me||jt!==Xe||Bt!==Je)&&(i.stencilFunc(me,Xe,Je),Ct=me,jt=Xe,Bt=Je)},setOp:function(me,Xe,Je){(be!==me||Pe!==Xe||Ie!==Je)&&(i.stencilOp(me,Xe,Je),be=me,Pe=Xe,Ie=Je)},setLocked:function(me){D=me},setClear:function(me){ye!==me&&(i.clearStencil(me),ye=me)},reset:function(){D=!1,Rt=null,Ct=null,jt=null,Bt=null,be=null,Pe=null,Ie=null,ye=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,f=new WeakMap,d={},u={},x=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,O=null,I=null,L=null,Y=null,b=new pe(0,0,0),w=0,U=!1,B=null,J=null,P=null,W=null,N=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,Q=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(it)[1]),$=Q>=1):it.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),$=Q>=2);let ct=null,pt={},tt=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),wt=new wn().fromArray(tt),zt=new wn().fromArray(dt);function Vt(D,Rt,Ct,jt){let Bt=new Uint8Array(4),be=i.createTexture();i.bindTexture(D,be),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<Ct;Pe++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(Rt,0,i.RGBA,1,1,jt,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(Rt+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return be}let re={};re[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(re[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(i.DEPTH_TEST),l.setFunc(ua),fe(!1),R(ic),he(i.CULL_FACE),Xt(Vi);function he(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function Gt(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Se(D,Rt){return u[D]!==Rt?(i.bindFramebuffer(D,Rt),u[D]=Rt,n&&(D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Rt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Rt)),!0):!1}function Z(D,Rt){let Ct=v,jt=!1;if(D)if(Ct=x.get(Rt),Ct===void 0&&(Ct=[],x.set(Rt,Ct)),D.isWebGLMultipleRenderTargets){let Bt=D.texture;if(Ct.length!==Bt.length||Ct[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Pe=Bt.length;be<Pe;be++)Ct[be]=i.COLOR_ATTACHMENT0+be;Ct.length=Bt.length,jt=!0}}else Ct[0]!==i.COLOR_ATTACHMENT0&&(Ct[0]=i.COLOR_ATTACHMENT0,jt=!0);else Ct[0]!==i.BACK&&(Ct[0]=i.BACK,jt=!0);jt&&(e.isWebGL2?i.drawBuffers(Ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ct))}function Ke(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let $t={[ss]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};if(n)$t[oc]=i.MIN,$t[lc]=i.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&($t[oc]=D.MIN_EXT,$t[lc]=D.MAX_EXT)}let ie={[Vu]:i.ZERO,[Gu]:i.ONE,[Wu]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[Ku]:i.SRC_ALPHA_SATURATE,[$u]:i.DST_COLOR,[qu]:i.DST_ALPHA,[Xu]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[Yu]:i.ONE_MINUS_DST_ALPHA,[Ju]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[Qu]:i.CONSTANT_ALPHA,[td]:i.ONE_MINUS_CONSTANT_ALPHA};function Xt(D,Rt,Ct,jt,Bt,be,Pe,Ie,ye,me){if(D===Vi){p===!0&&(Gt(i.BLEND),p=!1);return}if(p===!1&&(he(i.BLEND),p=!0),D!==Hu){if(D!==M||me!==U){if((y!==ss||I!==ss)&&(i.blendEquation(i.FUNC_ADD),y=ss,I=ss),me)switch(D){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.ONE,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ac:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,O=null,L=null,Y=null,b.set(0,0,0),w=0,M=D,U=me}return}Bt=Bt||Rt,be=be||Ct,Pe=Pe||jt,(Rt!==y||Bt!==I)&&(i.blendEquationSeparate($t[Rt],$t[Bt]),y=Rt,I=Bt),(Ct!==T||jt!==O||be!==L||Pe!==Y)&&(i.blendFuncSeparate(ie[Ct],ie[jt],ie[be],ie[Pe]),T=Ct,O=jt,L=be,Y=Pe),(Ie.equals(b)===!1||ye!==w)&&(i.blendColor(Ie.r,Ie.g,Ie.b,ye),b.copy(Ie),w=ye),M=D,U=!1}function ke(D,Rt){D.side===cn?Gt(i.CULL_FACE):he(i.CULL_FACE);let Ct=D.side===zn;Rt&&(Ct=!Ct),fe(Ct),D.blending===ks&&D.transparent===!1?Xt(Vi):Xt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);let jt=D.stencilWrite;c.setTest(jt),jt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),K(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(D){B!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),B=D)}function R(D){D!==Fu?(he(i.CULL_FACE),D!==J&&(D===ic?i.cullFace(i.BACK):D===Bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Gt(i.CULL_FACE),J=D}function S(D){D!==P&&($&&i.lineWidth(D),P=D)}function K(D,Rt,Ct){D?(he(i.POLYGON_OFFSET_FILL),(W!==Rt||N!==Ct)&&(i.polygonOffset(Rt,Ct),W=Rt,N=Ct)):Gt(i.POLYGON_OFFSET_FILL)}function vt(D){D?he(i.SCISSOR_TEST):Gt(i.SCISSOR_TEST)}function mt(D){D===void 0&&(D=i.TEXTURE0+st-1),ct!==D&&(i.activeTexture(D),ct=D)}function Mt(D,Rt,Ct){Ct===void 0&&(ct===null?Ct=i.TEXTURE0+st-1:Ct=ct);let jt=pt[Ct];jt===void 0&&(jt={type:void 0,texture:void 0},pt[Ct]=jt),(jt.type!==D||jt.texture!==Rt)&&(ct!==Ct&&(i.activeTexture(Ct),ct=Ct),i.bindTexture(D,Rt||re[D]),jt.type=D,jt.texture=Rt)}function qt(){let D=pt[ct];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function At(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(D){wt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),wt.copy(D))}function Re(D){zt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),zt.copy(D))}function Ft(D,Rt){let Ct=f.get(Rt);Ct===void 0&&(Ct=new WeakMap,f.set(Rt,Ct));let jt=Ct.get(D);jt===void 0&&(jt=i.getUniformBlockIndex(Rt,D.name),Ct.set(D,jt))}function It(D,Rt){let jt=f.get(Rt).get(D);h.get(Rt)!==jt&&(i.uniformBlockBinding(Rt,jt,D.__bindingPointIndex),h.set(Rt,jt))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ct=null,pt={},u={},x=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,O=null,I=null,L=null,Y=null,b=new pe(0,0,0),w=0,U=!1,B=null,J=null,P=null,W=null,N=null,wt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:he,disable:Gt,bindFramebuffer:Se,drawBuffers:Z,useProgram:Ke,setBlending:Xt,setMaterial:ke,setFlipSided:fe,setCullFace:R,setLineWidth:S,setPolygonOffset:K,setScissorTest:vt,activeTexture:mt,bindTexture:Mt,unbindTexture:qt,compressedTexImage2D:At,compressedTexImage3D:Ot,texImage2D:Yt,texImage3D:Dt,updateUBOMapping:Ft,uniformBlockBinding:It,texStorage2D:te,texStorage3D:le,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:at,compressedTexSubImage3D:oe,scissor:Zt,viewport:Re,reset:ft}}function E0(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return u?new OffscreenCanvas(R,S):xa("canvas")}function v(R,S,K,vt){let mt=1;if((R.width>vt||R.height>vt)&&(mt=vt/Math.max(R.width,R.height)),mt<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let Mt=S?Qo:Math.floor,qt=Mt(mt*R.width),At=Mt(mt*R.height);f===void 0&&(f=x(qt,At));let Ot=K?x(qt,At):f;return Ot.width=qt,Ot.height=At,Ot.getContext("2d").drawImage(R,0,0,qt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+qt+"x"+At+")."),Ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return zc(R.width)&&zc(R.height)}function p(R){return o?!1:R.wrapS!==ci||R.wrapT!==ci||R.minFilter!==Nn&&R.minFilter!==jn}function M(R,S){return R.generateMipmaps&&S&&R.minFilter!==Nn&&R.minFilter!==jn}function y(R){i.generateMipmap(R)}function T(R,S,K,vt,mt=!1){if(o===!1)return S;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Mt=S;if(S===i.RED&&(K===i.FLOAT&&(Mt=i.R32F),K===i.HALF_FLOAT&&(Mt=i.R16F),K===i.UNSIGNED_BYTE&&(Mt=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(Mt=i.R8UI),K===i.UNSIGNED_SHORT&&(Mt=i.R16UI),K===i.UNSIGNED_INT&&(Mt=i.R32UI),K===i.BYTE&&(Mt=i.R8I),K===i.SHORT&&(Mt=i.R16I),K===i.INT&&(Mt=i.R32I)),S===i.RG&&(K===i.FLOAT&&(Mt=i.RG32F),K===i.HALF_FLOAT&&(Mt=i.RG16F),K===i.UNSIGNED_BYTE&&(Mt=i.RG8)),S===i.RGBA){let qt=mt?pa:Be.getTransfer(vt);K===i.FLOAT&&(Mt=i.RGBA32F),K===i.HALF_FLOAT&&(Mt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(Mt=qt===We?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(Mt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(Mt=i.RGB5_A1)}return(Mt===i.R16F||Mt===i.R32F||Mt===i.RG16F||Mt===i.RG32F||Mt===i.RGBA16F||Mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Mt}function O(R,S,K){return M(R,K)===!0||R.isFramebufferTexture&&R.minFilter!==Nn&&R.minFilter!==jn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function I(R){return R===Nn||R===cc||R===co?i.NEAREST:i.LINEAR}function L(R){let S=R.target;S.removeEventListener("dispose",L),b(S),S.isVideoTexture&&h.delete(S)}function Y(R){let S=R.target;S.removeEventListener("dispose",Y),U(S)}function b(R){let S=n.get(R);if(S.__webglInit===void 0)return;let K=R.source,vt=d.get(K);if(vt){let mt=vt[S.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&w(R),Object.keys(vt).length===0&&d.delete(K)}n.remove(R)}function w(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let K=R.source,vt=d.get(K);delete vt[S.__cacheKey],a.memory.textures--}function U(R){let S=R.texture,K=n.get(R),vt=n.get(S);if(vt.__webglTexture!==void 0&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(K.__webglFramebuffer[mt]))for(let Mt=0;Mt<K.__webglFramebuffer[mt].length;Mt++)i.deleteFramebuffer(K.__webglFramebuffer[mt][Mt]);else i.deleteFramebuffer(K.__webglFramebuffer[mt]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[mt])}else{if(Array.isArray(K.__webglFramebuffer))for(let mt=0;mt<K.__webglFramebuffer.length;mt++)i.deleteFramebuffer(K.__webglFramebuffer[mt]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let mt=0;mt<K.__webglColorRenderbuffer.length;mt++)K.__webglColorRenderbuffer[mt]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[mt]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let mt=0,Mt=S.length;mt<Mt;mt++){let qt=n.get(S[mt]);qt.__webglTexture&&(i.deleteTexture(qt.__webglTexture),a.memory.textures--),n.remove(S[mt])}n.remove(S),n.remove(R)}let B=0;function J(){B=0}function P(){let R=B;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),B+=1,R}function W(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function N(R,S){let K=n.get(R);if(R.isVideoTexture&&ke(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){let vt=R.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(K,R,S);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function st(R,S){let K=n.get(R);if(R.version>0&&K.__version!==R.version){wt(K,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function $(R,S){let K=n.get(R);if(R.version>0&&K.__version!==R.version){wt(K,R,S);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function Q(R,S){let K=n.get(R);if(R.version>0&&K.__version!==R.version){zt(K,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}let it={[gr]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},ct={[Nn]:i.NEAREST,[cc]:i.NEAREST_MIPMAP_NEAREST,[co]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[gd]:i.LINEAR_MIPMAP_NEAREST,[_r]:i.LINEAR_MIPMAP_LINEAR},pt={[Rd]:i.NEVER,[Ud]:i.ALWAYS,[Cd]:i.LESS,[Kh]:i.LEQUAL,[Pd]:i.EQUAL,[Dd]:i.GEQUAL,[Id]:i.GREATER,[Ld]:i.NOTEQUAL};function tt(R,S,K){if(K?(i.texParameteri(R,i.TEXTURE_WRAP_S,it[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,it[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,it[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ct[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ct[S.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==ci||S.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,I(S.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,I(S.minFilter)),S.minFilter!==Nn&&S.minFilter!==jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let vt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Nn||S.minFilter!==co&&S.minFilter!==_r||S.type===zi&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===xr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(R,vt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function dt(R,S){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));let vt=S.source,mt=d.get(vt);mt===void 0&&(mt={},d.set(vt,mt));let Mt=W(S);if(Mt!==R.__cacheKey){mt[Mt]===void 0&&(mt[Mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),mt[Mt].usedTimes++;let qt=mt[R.__cacheKey];qt!==void 0&&(mt[R.__cacheKey].usedTimes--,qt.usedTimes===0&&w(S)),R.__cacheKey=Mt,R.__webglTexture=mt[Mt].texture}return K}function wt(R,S,K){let vt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(vt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(vt=i.TEXTURE_3D);let mt=dt(R,S),Mt=S.source;e.bindTexture(vt,R.__webglTexture,i.TEXTURE0+K);let qt=n.get(Mt);if(Mt.version!==qt.__version||mt===!0){e.activeTexture(i.TEXTURE0+K);let At=Be.getPrimaries(Be.workingColorSpace),Ot=S.colorSpace===Qn?null:Be.getPrimaries(S.colorSpace),ne=S.colorSpace===Qn||At===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ae=p(S)&&m(S.image)===!1,at=v(S.image,ae,!1,s.maxTextureSize);at=fe(S,at);let oe=m(at)||o,te=r.convert(S.format,S.colorSpace),le=r.convert(S.type),Yt=T(S.internalFormat,te,le,S.colorSpace,S.isVideoTexture);tt(vt,S,oe);let Dt,Zt=S.mipmaps,Re=o&&S.isVideoTexture!==!0&&Yt!==Yh,Ft=qt.__version===void 0||mt===!0,It=O(S,at,oe);if(S.isDepthTexture)Yt=i.DEPTH_COMPONENT,o?S.type===zi?Yt=i.DEPTH_COMPONENT32F:S.type===ki?Yt=i.DEPTH_COMPONENT24:S.type===as?Yt=i.DEPTH24_STENCIL8:Yt=i.DEPTH_COMPONENT16:S.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===os&&Yt===i.DEPTH_COMPONENT&&S.type!==kl&&S.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ki,le=r.convert(S.type)),S.format===Xs&&Yt===i.DEPTH_COMPONENT&&(Yt=i.DEPTH_STENCIL,S.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=as,le=r.convert(S.type))),Ft&&(Re?e.texStorage2D(i.TEXTURE_2D,1,Yt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Yt,at.width,at.height,0,te,le,null));else if(S.isDataTexture)if(Zt.length>0&&oe){Re&&Ft&&e.texStorage2D(i.TEXTURE_2D,It,Yt,Zt[0].width,Zt[0].height);for(let ft=0,D=Zt.length;ft<D;ft++)Dt=Zt[ft],Re?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Dt.width,Dt.height,te,le,Dt.data):e.texImage2D(i.TEXTURE_2D,ft,Yt,Dt.width,Dt.height,0,te,le,Dt.data);S.generateMipmaps=!1}else Re?(Ft&&e.texStorage2D(i.TEXTURE_2D,It,Yt,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,te,le,at.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,at.width,at.height,0,te,le,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Re&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Yt,Zt[0].width,Zt[0].height,at.depth);for(let ft=0,D=Zt.length;ft<D;ft++)Dt=Zt[ft],S.format!==hi?te!==null?Re?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Dt.width,Dt.height,at.depth,te,Dt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Yt,Dt.width,Dt.height,at.depth,0,Dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Dt.width,Dt.height,at.depth,te,le,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Yt,Dt.width,Dt.height,at.depth,0,te,le,Dt.data)}else{Re&&Ft&&e.texStorage2D(i.TEXTURE_2D,It,Yt,Zt[0].width,Zt[0].height);for(let ft=0,D=Zt.length;ft<D;ft++)Dt=Zt[ft],S.format!==hi?te!==null?Re?e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Dt.width,Dt.height,te,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Yt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Dt.width,Dt.height,te,le,Dt.data):e.texImage2D(i.TEXTURE_2D,ft,Yt,Dt.width,Dt.height,0,te,le,Dt.data)}else if(S.isDataArrayTexture)Re?(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Yt,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,te,le,at.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,at.width,at.height,at.depth,0,te,le,at.data);else if(S.isData3DTexture)Re?(Ft&&e.texStorage3D(i.TEXTURE_3D,It,Yt,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,te,le,at.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,at.width,at.height,at.depth,0,te,le,at.data);else if(S.isFramebufferTexture){if(Ft)if(Re)e.texStorage2D(i.TEXTURE_2D,It,Yt,at.width,at.height);else{let ft=at.width,D=at.height;for(let Rt=0;Rt<It;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Yt,ft,D,0,te,le,null),ft>>=1,D>>=1}}else if(Zt.length>0&&oe){Re&&Ft&&e.texStorage2D(i.TEXTURE_2D,It,Yt,Zt[0].width,Zt[0].height);for(let ft=0,D=Zt.length;ft<D;ft++)Dt=Zt[ft],Re?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,te,le,Dt):e.texImage2D(i.TEXTURE_2D,ft,Yt,te,le,Dt);S.generateMipmaps=!1}else Re?(Ft&&e.texStorage2D(i.TEXTURE_2D,It,Yt,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,te,le,at)):e.texImage2D(i.TEXTURE_2D,0,Yt,te,le,at);M(S,oe)&&y(vt),qt.__version=Mt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function zt(R,S,K){if(S.image.length!==6)return;let vt=dt(R,S),mt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+K);let Mt=n.get(mt);if(mt.version!==Mt.__version||vt===!0){e.activeTexture(i.TEXTURE0+K);let qt=Be.getPrimaries(Be.workingColorSpace),At=S.colorSpace===Qn?null:Be.getPrimaries(S.colorSpace),Ot=S.colorSpace===Qn||qt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let ne=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,at=[];for(let ft=0;ft<6;ft++)!ne&&!ae?at[ft]=v(S.image[ft],!1,!0,s.maxCubemapSize):at[ft]=ae?S.image[ft].image:S.image[ft],at[ft]=fe(S,at[ft]);let oe=at[0],te=m(oe)||o,le=r.convert(S.format,S.colorSpace),Yt=r.convert(S.type),Dt=T(S.internalFormat,le,Yt,S.colorSpace),Zt=o&&S.isVideoTexture!==!0,Re=Mt.__version===void 0||vt===!0,Ft=O(S,oe,te);tt(i.TEXTURE_CUBE_MAP,S,te);let It;if(ne){Zt&&Re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,Dt,oe.width,oe.height);for(let ft=0;ft<6;ft++){It=at[ft].mipmaps;for(let D=0;D<It.length;D++){let Rt=It[D];S.format!==hi?le!==null?Zt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,0,0,Rt.width,Rt.height,le,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,Dt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,0,0,Rt.width,Rt.height,le,Yt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,Dt,Rt.width,Rt.height,0,le,Yt,Rt.data)}}}else{It=S.mipmaps,Zt&&Re&&(It.length>0&&Ft++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,Dt,at[0].width,at[0].height));for(let ft=0;ft<6;ft++)if(ae){Zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,at[ft].width,at[ft].height,le,Yt,at[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Dt,at[ft].width,at[ft].height,0,le,Yt,at[ft].data);for(let D=0;D<It.length;D++){let Ct=It[D].image[ft].image;Zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,0,0,Ct.width,Ct.height,le,Yt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,Dt,Ct.width,Ct.height,0,le,Yt,Ct.data)}}else{Zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,le,Yt,at[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Dt,le,Yt,at[ft]);for(let D=0;D<It.length;D++){let Rt=It[D];Zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,0,0,le,Yt,Rt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,Dt,le,Yt,Rt.image[ft])}}}M(S,te)&&y(i.TEXTURE_CUBE_MAP),Mt.__version=mt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Vt(R,S,K,vt,mt,Mt){let qt=r.convert(K.format,K.colorSpace),At=r.convert(K.type),Ot=T(K.internalFormat,qt,At,K.colorSpace);if(!n.get(S).__hasExternalTextures){let ae=Math.max(1,S.width>>Mt),at=Math.max(1,S.height>>Mt);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,Mt,Ot,ae,at,S.depth,0,qt,At,null):e.texImage2D(mt,Mt,Ot,ae,at,0,qt,At,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Xt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,mt,n.get(K).__webglTexture,0,ie(S)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,vt,mt,n.get(K).__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(R,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let vt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||Xt(S)){let mt=S.depthTexture;mt&&mt.isDepthTexture&&(mt.type===zi?vt=i.DEPTH_COMPONENT32F:mt.type===ki&&(vt=i.DEPTH_COMPONENT24));let Mt=ie(S);Xt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,vt,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,vt,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,vt,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){let vt=ie(S);K&&Xt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,S.width,S.height):Xt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let vt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let mt=0;mt<vt.length;mt++){let Mt=vt[mt],qt=r.convert(Mt.format,Mt.colorSpace),At=r.convert(Mt.type),Ot=T(Mt.internalFormat,qt,At,Mt.colorSpace),ne=ie(S);K&&Xt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Ot,S.width,S.height):Xt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Ot,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let vt=n.get(S.depthTexture).__webglTexture,mt=ie(S);if(S.depthTexture.format===os)Xt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0);else if(S.depthTexture.format===Xs)Xt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Gt(R){let S=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");he(S.__webglFramebuffer,R)}else if(K){S.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[vt]),S.__webglDepthbuffer[vt]=i.createRenderbuffer(),re(S.__webglDepthbuffer[vt],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),re(S.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(R,S,K){let vt=n.get(R);S!==void 0&&Vt(vt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Gt(R)}function Z(R){let S=R.texture,K=n.get(R),vt=n.get(S);R.addEventListener("dispose",Y),R.isWebGLMultipleRenderTargets!==!0&&(vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture()),vt.__version=S.version,a.memory.textures++);let mt=R.isWebGLCubeRenderTarget===!0,Mt=R.isWebGLMultipleRenderTargets===!0,qt=m(R)||o;if(mt){K.__webglFramebuffer=[];for(let At=0;At<6;At++)if(o&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[At]=[];for(let Ot=0;Ot<S.mipmaps.length;Ot++)K.__webglFramebuffer[At][Ot]=i.createFramebuffer()}else K.__webglFramebuffer[At]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let At=0;At<S.mipmaps.length;At++)K.__webglFramebuffer[At]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Mt)if(s.drawBuffers){let At=R.texture;for(let Ot=0,ne=At.length;Ot<ne;Ot++){let ae=n.get(At[Ot]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Xt(R)===!1){let At=Mt?S:[S];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ot=0;Ot<At.length;Ot++){let ne=At[Ot];K.__webglColorRenderbuffer[Ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Ot]);let ae=r.convert(ne.format,ne.colorSpace),at=r.convert(ne.type),oe=T(ne.internalFormat,ae,at,ne.colorSpace,R.isXRRenderTarget===!0),te=ie(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,oe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,K.__webglColorRenderbuffer[Ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),re(K.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),tt(i.TEXTURE_CUBE_MAP,S,qt);for(let At=0;At<6;At++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Ot=0;Ot<S.mipmaps.length;Ot++)Vt(K.__webglFramebuffer[At][Ot],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ot);else Vt(K.__webglFramebuffer[At],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(S,qt)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){let At=R.texture;for(let Ot=0,ne=At.length;Ot<ne;Ot++){let ae=At[Ot],at=n.get(ae);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),tt(i.TEXTURE_2D,ae,qt),Vt(K.__webglFramebuffer,R,ae,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,0),M(ae,qt)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let At=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?At=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(At,vt.__webglTexture),tt(At,S,qt),o&&S.mipmaps&&S.mipmaps.length>0)for(let Ot=0;Ot<S.mipmaps.length;Ot++)Vt(K.__webglFramebuffer[Ot],R,S,i.COLOR_ATTACHMENT0,At,Ot);else Vt(K.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,At,0);M(S,qt)&&y(At),e.unbindTexture()}R.depthBuffer&&Gt(R)}function Ke(R){let S=m(R)||o,K=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let vt=0,mt=K.length;vt<mt;vt++){let Mt=K[vt];if(M(Mt,S)){let qt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(Mt).__webglTexture;e.bindTexture(qt,At),y(qt),e.unbindTexture()}}}function $t(R){if(o&&R.samples>0&&Xt(R)===!1){let S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],K=R.width,vt=R.height,mt=i.COLOR_BUFFER_BIT,Mt=[],qt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(R),Ot=R.isWebGLMultipleRenderTargets===!0;if(Ot)for(let ne=0;ne<S.length;ne++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let ne=0;ne<S.length;ne++){Mt.push(i.COLOR_ATTACHMENT0+ne),R.depthBuffer&&Mt.push(qt);let ae=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(ae===!1&&(R.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),Ot&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[ne]),ae===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[qt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[qt])),Ot){let at=n.get(S[ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,K,vt,0,0,K,vt,mt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ot)for(let ne=0;ne<S.length;ne++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,At.__webglColorRenderbuffer[ne]);let ae=n.get(S[ne]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,ae,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function ie(R){return Math.min(s.maxSamples,R.samples)}function Xt(R){let S=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ke(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function fe(R,S){let K=R.colorSpace,vt=R.format,mt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Jo||K!==Ti&&K!==Qn&&(Be.getTransfer(K)===We?o===!1?t.has("EXT_sRGB")===!0&&vt===hi?(R.format=Jo,R.minFilter=jn,R.generateMipmaps=!1):S=ya.sRGBToLinear(S):(vt!==hi||mt!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=N,this.setTexture2DArray=st,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=Se,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=Xt}function T0(i,t,e){let n=e.isWebGL2;function s(r,a=Qn){let o,l=Be.getTransfer(a);if(r===Wi)return i.UNSIGNED_BYTE;if(r===Vh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Gh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===_d)return i.BYTE;if(r===xd)return i.SHORT;if(r===kl)return i.UNSIGNED_SHORT;if(r===zh)return i.INT;if(r===ki)return i.UNSIGNED_INT;if(r===zi)return i.FLOAT;if(r===xr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===yd)return i.ALPHA;if(r===hi)return i.RGBA;if(r===vd)return i.LUMINANCE;if(r===Md)return i.LUMINANCE_ALPHA;if(r===os)return i.DEPTH_COMPONENT;if(r===Xs)return i.DEPTH_STENCIL;if(r===Jo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Sd)return i.RED;if(r===Wh)return i.RED_INTEGER;if(r===bd)return i.RG;if(r===Xh)return i.RG_INTEGER;if(r===qh)return i.RGBA_INTEGER;if(r===ho||r===uo||r===fo||r===po)if(l===We)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ho)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ho)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hc||r===uc||r===dc||r===fc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===hc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===pc||r===mc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===pc)return l===We?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===mc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gc||r===_c||r===xc||r===yc||r===vc||r===Mc||r===Sc||r===bc||r===Ec||r===Tc||r===wc||r===Ac||r===Rc||r===Cc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===gc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_c)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ec)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ac)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cc)return l===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mo||r===Pc||r===Ic)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===mo)return l===We?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ic)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ed||r===Lc||r===Dc||r===Uc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===mo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Lc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===as?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var dl=class extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ti=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},w0={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,x=.005;c.inputState.pinching&&d>u+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fl=class extends qi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,x=null,v=e.getContextAttributes(),m=null,p=null,M=[],y=[],T=new Nt,O=null,I=new On;I.layers.enable(1),I.viewport=new wn;let L=new On;L.layers.enable(2),L.viewport=new wn;let Y=[I,L],b=new dl;b.layers.enable(1),b.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let dt=M[tt];return dt===void 0&&(dt=new dr,M[tt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(tt){let dt=M[tt];return dt===void 0&&(dt=new dr,M[tt]=dt),dt.getGripSpace()},this.getHand=function(tt){let dt=M[tt];return dt===void 0&&(dt=new dr,M[tt]=dt),dt.getHandSpace()};function B(tt){let dt=y.indexOf(tt.inputSource);if(dt===-1)return;let wt=M[dt];wt!==void 0&&(wt.update(tt.inputSource,tt.frame,c||a),wt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function J(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",P);for(let tt=0;tt<M.length;tt++){let dt=y[tt];dt!==null&&(y[tt]=null,M[tt].disconnect(dt))}w=null,U=null,t.setRenderTarget(m),u=null,d=null,f=null,s=null,p=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",J),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let dt={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new wi(u.framebufferWidth,u.framebufferHeight,{format:hi,type:Wi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let dt=null,wt=null,zt=null;v.depth&&(zt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=v.stencil?Xs:os,wt=v.stencil?as:ki);let Vt={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new wi(d.textureWidth,d.textureHeight,{format:hi,type:Wi,depthTexture:new Ca(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let re=t.properties.get(p);re.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(tt){for(let dt=0;dt<tt.removed.length;dt++){let wt=tt.removed[dt],zt=y.indexOf(wt);zt>=0&&(y[zt]=null,M[zt].disconnect(wt))}for(let dt=0;dt<tt.added.length;dt++){let wt=tt.added[dt],zt=y.indexOf(wt);if(zt===-1){for(let re=0;re<M.length;re++)if(re>=y.length){y.push(wt),zt=re;break}else if(y[re]===null){y[re]=wt,zt=re;break}if(zt===-1)break}let Vt=M[zt];Vt&&Vt.connect(wt)}}let W=new F,N=new F;function st(tt,dt,wt){W.setFromMatrixPosition(dt.matrixWorld),N.setFromMatrixPosition(wt.matrixWorld);let zt=W.distanceTo(N),Vt=dt.projectionMatrix.elements,re=wt.projectionMatrix.elements,he=Vt[14]/(Vt[10]-1),Gt=Vt[14]/(Vt[10]+1),Se=(Vt[9]+1)/Vt[5],Z=(Vt[9]-1)/Vt[5],Ke=(Vt[8]-1)/Vt[0],$t=(re[8]+1)/re[0],ie=he*Ke,Xt=he*$t,ke=zt/(-Ke+$t),fe=ke*-Ke;dt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(fe),tt.translateZ(ke),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert();let R=he+ke,S=Gt+ke,K=ie-fe,vt=Xt+(zt-fe),mt=Se*Gt/S*R,Mt=Z*Gt/S*R;tt.projectionMatrix.makePerspective(K,vt,mt,Mt,R,S),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}function $(tt,dt){dt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(dt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;b.near=L.near=I.near=tt.near,b.far=L.far=I.far=tt.far,(w!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,U=b.far);let dt=tt.parent,wt=b.cameras;$(b,dt);for(let zt=0;zt<wt.length;zt++)$(wt[zt],dt);wt.length===2?st(b,I,L):b.projectionMatrix.copy(I.projectionMatrix),Q(tt,b,dt)};function Q(tt,dt,wt){wt===null?tt.matrix.copy(dt.matrixWorld):(tt.matrix.copy(wt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(dt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(dt.projectionMatrix),tt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=jo*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=tt)};let it=null;function ct(tt,dt){if(h=dt.getViewerPose(c||a),x=dt,h!==null){let wt=h.views;u!==null&&(t.setRenderTargetFramebuffer(p,u.framebuffer),t.setRenderTarget(p));let zt=!1;wt.length!==b.cameras.length&&(b.cameras.length=0,zt=!0);for(let Vt=0;Vt<wt.length;Vt++){let re=wt[Vt],he=null;if(u!==null)he=u.getViewport(re);else{let Se=f.getViewSubImage(d,re);he=Se.viewport,Vt===0&&(t.setRenderTargetTextures(p,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),t.setRenderTarget(p))}let Gt=Y[Vt];Gt===void 0&&(Gt=new On,Gt.layers.enable(Vt),Gt.viewport=new wn,Y[Vt]=Gt),Gt.matrix.fromArray(re.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(re.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(he.x,he.y,he.width,he.height),Vt===0&&(b.matrix.copy(Gt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),zt===!0&&b.cameras.push(Gt)}}for(let wt=0;wt<M.length;wt++){let zt=y[wt],Vt=M[wt];zt!==null&&Vt!==void 0&&Vt.update(zt,dt,c||a)}it&&it(tt,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),x=null}let pt=new tu;pt.setAnimationLoop(ct),this.setAnimationLoop=function(tt){it=tt},this.dispose=function(){}}};function A0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R0(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){let T=y.program;n.uniformBlockBinding(M,T)}function c(M,y){let T=s[M.id];T===void 0&&(x(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",m));let O=y.program;n.updateUBOMapping(M,O);let I=t.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function h(M){let y=f();M.__bindingPointIndex=y;let T=i.createBuffer(),O=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,O,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=s[M.id],T=M.uniforms,O=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,L=T.length;I<L;I++){let Y=Array.isArray(T[I])?T[I]:[T[I]];for(let b=0,w=Y.length;b<w;b++){let U=Y[b];if(u(U,I,b,O)===!0){let B=U.__offset,J=Array.isArray(U.value)?U.value:[U.value],P=0;for(let W=0;W<J.length;W++){let N=J[W],st=v(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,B+P,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,P),P+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,y,T,O){let I=M.value,L=y+"_"+T;if(O[L]===void 0)return typeof I=="number"||typeof I=="boolean"?O[L]=I:O[L]=I.clone(),!0;{let Y=O[L];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return O[L]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function x(M){let y=M.uniforms,T=0,O=16;for(let L=0,Y=y.length;L<Y;L++){let b=Array.isArray(y[L])?y[L]:[y[L]];for(let w=0,U=b.length;w<U;w++){let B=b[w],J=Array.isArray(B.value)?B.value:[B.value];for(let P=0,W=J.length;P<W;P++){let N=J[P],st=v(N),$=T%O;$!==0&&O-$<st.boundary&&(T+=O-$),B.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=st.storage}}}let I=T%O;return I>0&&(T+=O-I),M.__size=T,M.__cache={},this}function v(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Sr=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let u=new Uint32Array(4),x=new Int32Array(4),v=null,m=null,p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;let y=this,T=!1,O=0,I=0,L=null,Y=-1,b=null,w=new wn,U=new wn,B=null,J=new pe(0),P=0,W=e.width,N=e.height,st=1,$=null,Q=null,it=new wn(0,0,W,N),ct=new wn(0,0,W,N),pt=!1,tt=new Mr,dt=!1,wt=!1,zt=null,Vt=new fn,re=new Nt,he=new F,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return L===null?st:1}let Z=n;function Ke(E,X){for(let j=0;j<E.length;j++){let et=E[j],q=e.getContext(et,X);if(q!==null)return q}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bl}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),Z===null){let X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),Z=Ke(X,E),Z===null)throw Ke(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $t,ie,Xt,ke,fe,R,S,K,vt,mt,Mt,qt,At,Ot,ne,ae,at,oe,te,le,Yt,Dt,Zt,Re;function Ft(){$t=new Ym(Z),ie=new zm(Z,$t,t),$t.init(ie),Dt=new T0(Z,$t,ie),Xt=new b0(Z,$t,ie),ke=new Km(Z),fe=new u0,R=new E0(Z,$t,Xt,fe,ie,Dt,ke),S=new Gm(y),K=new qm(y),vt=new sf(Z,ie),Zt=new Hm(Z,$t,vt,ie),mt=new $m(Z,vt,ke,Zt),Mt=new tg(Z,mt,vt,ke),te=new Qm(Z,ie,R),ae=new Vm(fe),qt=new h0(y,S,K,$t,ie,Zt,ae),At=new A0(y,fe),Ot=new f0,ne=new y0($t,ie),oe=new Bm(y,S,K,Xt,Mt,d,l),at=new S0(y,Mt,ie),Re=new R0(Z,ke,ie,Xt),le=new km(Z,$t,ke,ie),Yt=new Zm(Z,$t,ke,ie),ke.programs=qt.programs,y.capabilities=ie,y.extensions=$t,y.properties=fe,y.renderLists=Ot,y.shadowMap=at,y.state=Xt,y.info=ke}Ft();let It=new fl(y,Z);this.xr=It,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let E=$t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=$t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(E){E!==void 0&&(st=E,this.setSize(W,N,!1))},this.getSize=function(E){return E.set(W,N)},this.setSize=function(E,X,j=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,N=X,e.width=Math.floor(E*st),e.height=Math.floor(X*st),j===!0&&(e.style.width=E+"px",e.style.height=X+"px"),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(W*st,N*st).floor()},this.setDrawingBufferSize=function(E,X,j){W=E,N=X,st=j,e.width=Math.floor(E*j),e.height=Math.floor(X*j),this.setViewport(0,0,E,X)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(it)},this.setViewport=function(E,X,j,et){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,X,j,et),Xt.viewport(w.copy(it).multiplyScalar(st).floor())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,X,j,et){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,X,j,et),Xt.scissor(U.copy(ct).multiplyScalar(st).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(E){Xt.setScissorTest(pt=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(E=!0,X=!0,j=!0){let et=0;if(E){let q=!1;if(L!==null){let Lt=L.texture.format;q=Lt===qh||Lt===Xh||Lt===Wh}if(q){let Lt=L.texture.type,Ut=Lt===Wi||Lt===ki||Lt===kl||Lt===as||Lt===Vh||Lt===Gh,Qt=oe.getClearColor(),ue=oe.getClearAlpha(),_e=Qt.r,de=Qt.g,ge=Qt.b;Ut?(u[0]=_e,u[1]=de,u[2]=ge,u[3]=ue,Z.clearBufferuiv(Z.COLOR,0,u)):(x[0]=_e,x[1]=de,x[2]=ge,x[3]=ue,Z.clearBufferiv(Z.COLOR,0,x))}else et|=Z.COLOR_BUFFER_BIT}X&&(et|=Z.DEPTH_BUFFER_BIT),j&&(et|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Ot.dispose(),ne.dispose(),fe.dispose(),S.dispose(),K.dispose(),Mt.dispose(),Zt.dispose(),Re.dispose(),qt.dispose(),It.dispose(),It.removeEventListener("sessionstart",ye),It.removeEventListener("sessionend",me),zt&&(zt.dispose(),zt=null),Xe.stop()};function ft(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=ke.autoReset,X=at.enabled,j=at.autoUpdate,et=at.needsUpdate,q=at.type;Ft(),ke.autoReset=E,at.enabled=X,at.autoUpdate=j,at.needsUpdate=et,at.type=q}function Rt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ct(E){let X=E.target;X.removeEventListener("dispose",Ct),jt(X)}function jt(E){Bt(E),fe.remove(E)}function Bt(E){let X=fe.get(E).programs;X!==void 0&&(X.forEach(function(j){qt.releaseProgram(j)}),E.isShaderMaterial&&qt.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,j,et,q,Lt){X===null&&(X=Gt);let Ut=q.isMesh&&q.matrixWorld.determinant()<0,Qt=js(E,X,j,et,q);Xt.setMaterial(et,Ut);let ue=j.index,_e=1;if(et.wireframe===!0){if(ue=mt.getWireframeAttribute(j),ue===void 0)return;_e=2}let de=j.drawRange,ge=j.attributes.position,Oe=de.start*_e,Dn=(de.start+de.count)*_e;Lt!==null&&(Oe=Math.max(Oe,Lt.start*_e),Dn=Math.min(Dn,(Lt.start+Lt.count)*_e)),ue!==null?(Oe=Math.max(Oe,0),Dn=Math.min(Dn,ue.count)):ge!=null&&(Oe=Math.max(Oe,0),Dn=Math.min(Dn,ge.count));let hn=Dn-Oe;if(hn<0||hn===1/0)return;Zt.setup(q,et,Qt,j,ue);let si,ze=le;if(ue!==null&&(si=vt.get(ue),ze=Yt,ze.setIndex(si)),q.isMesh)et.wireframe===!0?(Xt.setLineWidth(et.wireframeLinewidth*Se()),ze.setMode(Z.LINES)):ze.setMode(Z.TRIANGLES);else if(q.isLine){let se=et.linewidth;se===void 0&&(se=1),Xt.setLineWidth(se*Se()),q.isLineSegments?ze.setMode(Z.LINES):q.isLineLoop?ze.setMode(Z.LINE_LOOP):ze.setMode(Z.LINE_STRIP)}else q.isPoints?ze.setMode(Z.POINTS):q.isSprite&&ze.setMode(Z.TRIANGLES);if(q.isBatchedMesh)ze.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ze.renderInstances(Oe,hn,q.count);else if(j.isInstancedBufferGeometry){let se=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,gs=Math.min(j.instanceCount,se);ze.renderInstances(Oe,hn,gs)}else ze.render(Oe,hn)};function be(E,X,j){E.transparent===!0&&E.side===cn&&E.forceSinglePass===!1?(E.side=zn,E.needsUpdate=!0,ji(E,X,j),E.side=Xi,E.needsUpdate=!0,ji(E,X,j),E.side=cn):ji(E,X,j)}this.compile=function(E,X,j=null){j===null&&(j=E),m=ne.get(j),m.init(),M.push(m),j.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),E!==j&&E.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(y._useLegacyLights);let et=new Set;return E.traverse(function(q){let Lt=q.material;if(Lt)if(Array.isArray(Lt))for(let Ut=0;Ut<Lt.length;Ut++){let Qt=Lt[Ut];be(Qt,j,q),et.add(Qt)}else be(Lt,j,q),et.add(Lt)}),M.pop(),m=null,et},this.compileAsync=function(E,X,j=null){let et=this.compile(E,X,j);return new Promise(q=>{function Lt(){if(et.forEach(function(Ut){fe.get(Ut).currentProgram.isReady()&&et.delete(Ut)}),et.size===0){q(E);return}setTimeout(Lt,10)}$t.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Pe=null;function Ie(E){Pe&&Pe(E)}function ye(){Xe.stop()}function me(){Xe.start()}let Xe=new tu;Xe.setAnimationLoop(Ie),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(E){Pe=E,It.setAnimationLoop(E),E===null?Xe.stop():Xe.start()},It.addEventListener("sessionstart",ye),It.addEventListener("sessionend",me),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(X),X=It.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,X,L),m=ne.get(E,M.length),m.init(),M.push(m),Vt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),tt.setFromProjectionMatrix(Vt),wt=this.localClippingEnabled,dt=ae.init(this.clippingPlanes,wt),v=Ot.get(E,p.length),v.init(),p.push(v),Je(E,X,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort($,Q),this.info.render.frame++,dt===!0&&ae.beginShadows();let j=m.state.shadowsArray;if(at.render(j,E,X),dt===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(v,E),m.setupLights(y._useLegacyLights),X.isArrayCamera){let et=X.cameras;for(let q=0,Lt=et.length;q<Lt;q++){let Ut=et[q];Ln(v,E,Ut,Ut.viewport)}}else Ln(v,E,X);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,X),Zt.resetDefaultState(),Y=-1,b=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Je(E,X,j,et){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||tt.intersectsSprite(E)){et&&he.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Vt);let Ut=Mt.update(E),Qt=E.material;Qt.visible&&v.push(E,Ut,Qt,j,he.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||tt.intersectsObject(E))){let Ut=Mt.update(E),Qt=E.material;if(et&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),he.copy(E.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),he.copy(Ut.boundingSphere.center)),he.applyMatrix4(E.matrixWorld).applyMatrix4(Vt)),Array.isArray(Qt)){let ue=Ut.groups;for(let _e=0,de=ue.length;_e<de;_e++){let ge=ue[_e],Oe=Qt[ge.materialIndex];Oe&&Oe.visible&&v.push(E,Ut,Oe,j,he.z,ge)}}else Qt.visible&&v.push(E,Ut,Qt,j,he.z,null)}}let Lt=E.children;for(let Ut=0,Qt=Lt.length;Ut<Qt;Ut++)Je(Lt[Ut],X,j,et)}function Ln(E,X,j,et){let q=E.opaque,Lt=E.transmissive,Ut=E.transparent;m.setupLightsView(j),dt===!0&&ae.setGlobalState(y.clippingPlanes,j),Lt.length>0&&Wn(q,Lt,X,j),et&&Xt.viewport(w.copy(et)),q.length>0&&di(q,X,j),Lt.length>0&&di(Lt,X,j),Ut.length>0&&di(Ut,X,j),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Wn(E,X,j,et){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let Lt=ie.isWebGL2;zt===null&&(zt=new wi(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")?xr:Wi,minFilter:_r,samples:Lt?4:0})),y.getDrawingBufferSize(re),Lt?zt.setSize(re.x,re.y):zt.setSize(Qo(re.x),Qo(re.y));let Ut=y.getRenderTarget();y.setRenderTarget(zt),y.getClearColor(J),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();let Qt=y.toneMapping;y.toneMapping=Gi,di(E,j,et),R.updateMultisampleRenderTarget(zt),R.updateRenderTargetMipmap(zt);let ue=!1;for(let _e=0,de=X.length;_e<de;_e++){let ge=X[_e],Oe=ge.object,Dn=ge.geometry,hn=ge.material,si=ge.group;if(hn.side===cn&&Oe.layers.test(et.layers)){let ze=hn.side;hn.side=zn,hn.needsUpdate=!0,ii(Oe,j,et,Dn,hn,si),hn.side=ze,hn.needsUpdate=!0,ue=!0}}ue===!0&&(R.updateMultisampleRenderTarget(zt),R.updateRenderTargetMipmap(zt)),y.setRenderTarget(Ut),y.setClearColor(J,P),y.toneMapping=Qt}function di(E,X,j){let et=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Lt=E.length;q<Lt;q++){let Ut=E[q],Qt=Ut.object,ue=Ut.geometry,_e=et===null?Ut.material:et,de=Ut.group;Qt.layers.test(j.layers)&&ii(Qt,X,j,ue,_e,de)}}function ii(E,X,j,et,q,Lt){E.onBeforeRender(y,X,j,et,q,Lt),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(y,X,j,et,E,Lt),q.transparent===!0&&q.side===cn&&q.forceSinglePass===!1?(q.side=zn,q.needsUpdate=!0,y.renderBufferDirect(j,X,et,q,E,Lt),q.side=Xi,q.needsUpdate=!0,y.renderBufferDirect(j,X,et,q,E,Lt),q.side=cn):y.renderBufferDirect(j,X,et,q,E,Lt),E.onAfterRender(y,X,j,et,q,Lt)}function ji(E,X,j){X.isScene!==!0&&(X=Gt);let et=fe.get(E),q=m.state.lights,Lt=m.state.shadowsArray,Ut=q.state.version,Qt=qt.getParameters(E,q.state,Lt,X,j),ue=qt.getProgramCacheKey(Qt),_e=et.programs;et.environment=E.isMeshStandardMaterial?X.environment:null,et.fog=X.fog,et.envMap=(E.isMeshStandardMaterial?K:S).get(E.envMap||et.environment),_e===void 0&&(E.addEventListener("dispose",Ct),_e=new Map,et.programs=_e);let de=_e.get(ue);if(de!==void 0){if(et.currentProgram===de&&et.lightsStateVersion===Ut)return Ci(E,Qt),de}else Qt.uniforms=qt.getUniforms(E),E.onBuild(j,Qt,y),E.onBeforeCompile(Qt,y),de=qt.acquireProgram(Qt,ue),_e.set(ue,de),et.uniforms=Qt.uniforms;let ge=et.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ge.clippingPlanes=ae.uniform),Ci(E,Qt),et.needsLights=to(E),et.lightsStateVersion=Ut,et.needsLights&&(ge.ambientLightColor.value=q.state.ambient,ge.lightProbe.value=q.state.probe,ge.directionalLights.value=q.state.directional,ge.directionalLightShadows.value=q.state.directionalShadow,ge.spotLights.value=q.state.spot,ge.spotLightShadows.value=q.state.spotShadow,ge.rectAreaLights.value=q.state.rectArea,ge.ltc_1.value=q.state.rectAreaLTC1,ge.ltc_2.value=q.state.rectAreaLTC2,ge.pointLights.value=q.state.point,ge.pointLightShadows.value=q.state.pointShadow,ge.hemisphereLights.value=q.state.hemi,ge.directionalShadowMap.value=q.state.directionalShadowMap,ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ge.spotShadowMap.value=q.state.spotShadowMap,ge.spotLightMatrix.value=q.state.spotLightMatrix,ge.spotLightMap.value=q.state.spotLightMap,ge.pointShadowMap.value=q.state.pointShadowMap,ge.pointShadowMatrix.value=q.state.pointShadowMatrix),et.currentProgram=de,et.uniformsList=null,de}function an(E){if(E.uniformsList===null){let X=E.currentProgram.getUniforms();E.uniformsList=Vs.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function Ci(E,X){let j=fe.get(E);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function js(E,X,j,et,q){X.isScene!==!0&&(X=Gt),R.resetTextureUnits();let Lt=X.fog,Ut=et.isMeshStandardMaterial?X.environment:null,Qt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ti,ue=(et.isMeshStandardMaterial?K:S).get(et.envMap||Ut),_e=et.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,de=!!j.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),ge=!!j.morphAttributes.position,Oe=!!j.morphAttributes.normal,Dn=!!j.morphAttributes.color,hn=Gi;et.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(hn=y.toneMapping);let si=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ze=si!==void 0?si.length:0,se=fe.get(et),gs=m.state.lights;if(dt===!0&&(wt===!0||E!==b)){let Le=E===b&&et.id===Y;ae.setState(et,E,Le)}let He=!1;et.version===se.__version?(se.needsLights&&se.lightsStateVersion!==gs.state.version||se.outputColorSpace!==Qt||q.isBatchedMesh&&se.batching===!1||!q.isBatchedMesh&&se.batching===!0||q.isInstancedMesh&&se.instancing===!1||!q.isInstancedMesh&&se.instancing===!0||q.isSkinnedMesh&&se.skinning===!1||!q.isSkinnedMesh&&se.skinning===!0||q.isInstancedMesh&&se.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&se.instancingColor===!1&&q.instanceColor!==null||se.envMap!==ue||et.fog===!0&&se.fog!==Lt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==ae.numPlanes||se.numIntersection!==ae.numIntersection)||se.vertexAlphas!==_e||se.vertexTangents!==de||se.morphTargets!==ge||se.morphNormals!==Oe||se.morphColors!==Dn||se.toneMapping!==hn||ie.isWebGL2===!0&&se.morphTargetsCount!==ze)&&(He=!0):(He=!0,se.__version=et.version);let fi=se.currentProgram;He===!0&&(fi=ji(et,X,q));let Lr=!1,gi=!1,_s=!1,pn=fi.getUniforms(),we=se.uniforms;if(Xt.useProgram(fi.program)&&(Lr=!0,gi=!0,_s=!0),et.id!==Y&&(Y=et.id,gi=!0),Lr||b!==E){pn.setValue(Z,"projectionMatrix",E.projectionMatrix),pn.setValue(Z,"viewMatrix",E.matrixWorldInverse);let Le=pn.map.cameraPosition;Le!==void 0&&Le.setValue(Z,he.setFromMatrixPosition(E.matrixWorld)),ie.logarithmicDepthBuffer&&pn.setValue(Z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&pn.setValue(Z,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,gi=!0,_s=!0)}if(q.isSkinnedMesh){pn.setOptional(Z,q,"bindMatrix"),pn.setOptional(Z,q,"bindMatrixInverse");let Le=q.skeleton;Le&&(ie.floatVertexTextures?(Le.boneTexture===null&&Le.computeBoneTexture(),pn.setValue(Z,"boneTexture",Le.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(pn.setOptional(Z,q,"batchingTexture"),pn.setValue(Z,"batchingTexture",q._matricesTexture,R));let Qs=j.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0&&ie.isWebGL2===!0)&&te.update(q,j,fi),(gi||se.receiveShadow!==q.receiveShadow)&&(se.receiveShadow=q.receiveShadow,pn.setValue(Z,"receiveShadow",q.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(we.envMap.value=ue,we.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),gi&&(pn.setValue(Z,"toneMappingExposure",y.toneMappingExposure),se.needsLights&&Qa(we,_s),Lt&&et.fog===!0&&At.refreshFogUniforms(we,Lt),At.refreshMaterialUniforms(we,et,st,N,zt),Vs.upload(Z,an(se),we,R)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Vs.upload(Z,an(se),we,R),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&pn.setValue(Z,"center",q.center),pn.setValue(Z,"modelViewMatrix",q.modelViewMatrix),pn.setValue(Z,"normalMatrix",q.normalMatrix),pn.setValue(Z,"modelMatrix",q.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let Le=et.uniformsGroups;for(let Pi=0,Dr=Le.length;Pi<Dr;Pi++)if(ie.isWebGL2){let tr=Le[Pi];Re.update(tr,fi),Re.bind(tr,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Qa(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function to(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,X,j){fe.get(E.texture).__webglTexture=X,fe.get(E.depthTexture).__webglTexture=j;let et=fe.get(E);et.__hasExternalTextures=!0,et.__hasExternalTextures&&(et.__autoAllocateDepthBuffer=j===void 0,et.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,X){let j=fe.get(E);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(E,X=0,j=0){L=E,O=X,I=j;let et=!0,q=null,Lt=!1,Ut=!1;if(E){let ue=fe.get(E);ue.__useDefaultFramebuffer!==void 0?(Xt.bindFramebuffer(Z.FRAMEBUFFER,null),et=!1):ue.__webglFramebuffer===void 0?R.setupRenderTarget(E):ue.__hasExternalTextures&&R.rebindTextures(E,fe.get(E.texture).__webglTexture,fe.get(E.depthTexture).__webglTexture);let _e=E.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(Ut=!0);let de=fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(de[X])?q=de[X][j]:q=de[X],Lt=!0):ie.isWebGL2&&E.samples>0&&R.useMultisampledRTT(E)===!1?q=fe.get(E).__webglMultisampledFramebuffer:Array.isArray(de)?q=de[j]:q=de,w.copy(E.viewport),U.copy(E.scissor),B=E.scissorTest}else w.copy(it).multiplyScalar(st).floor(),U.copy(ct).multiplyScalar(st).floor(),B=pt;if(Xt.bindFramebuffer(Z.FRAMEBUFFER,q)&&ie.drawBuffers&&et&&Xt.drawBuffers(E,q),Xt.viewport(w),Xt.scissor(U),Xt.setScissorTest(B),Lt){let ue=fe.get(E.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue.__webglTexture,j)}else if(Ut){let ue=fe.get(E.texture),_e=X||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ue.__webglTexture,j||0,_e)}Y=-1},this.readRenderTargetPixels=function(E,X,j,et,q,Lt,Ut){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ut!==void 0&&(Qt=Qt[Ut]),Qt){Xt.bindFramebuffer(Z.FRAMEBUFFER,Qt);try{let ue=E.texture,_e=ue.format,de=ue.type;if(_e!==hi&&Dt.convert(_e)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ge=de===xr&&($t.has("EXT_color_buffer_half_float")||ie.isWebGL2&&$t.has("EXT_color_buffer_float"));if(de!==Wi&&Dt.convert(de)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(de===zi&&(ie.isWebGL2||$t.has("OES_texture_float")||$t.has("WEBGL_color_buffer_float")))&&!ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-et&&j>=0&&j<=E.height-q&&Z.readPixels(X,j,et,q,Dt.convert(_e),Dt.convert(de),Lt)}finally{let ue=L!==null?fe.get(L).__webglFramebuffer:null;Xt.bindFramebuffer(Z.FRAMEBUFFER,ue)}}},this.copyFramebufferToTexture=function(E,X,j=0){let et=Math.pow(2,-j),q=Math.floor(X.image.width*et),Lt=Math.floor(X.image.height*et);R.setTexture2D(X,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,j,0,0,E.x,E.y,q,Lt),Xt.unbindTexture()},this.copyTextureToTexture=function(E,X,j,et=0){let q=X.image.width,Lt=X.image.height,Ut=Dt.convert(j.format),Qt=Dt.convert(j.type);R.setTexture2D(j,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,j.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,j.unpackAlignment),X.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,et,E.x,E.y,q,Lt,Ut,Qt,X.image.data):X.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,et,E.x,E.y,X.mipmaps[0].width,X.mipmaps[0].height,Ut,X.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,et,E.x,E.y,Ut,Qt,X.image),et===0&&j.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Xt.unbindTexture()},this.copyTextureToTexture3D=function(E,X,j,et,q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Lt=E.max.x-E.min.x+1,Ut=E.max.y-E.min.y+1,Qt=E.max.z-E.min.z+1,ue=Dt.convert(et.format),_e=Dt.convert(et.type),de;if(et.isData3DTexture)R.setTexture3D(et,0),de=Z.TEXTURE_3D;else if(et.isDataArrayTexture||et.isCompressedArrayTexture)R.setTexture2DArray(et,0),de=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,et.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,et.unpackAlignment);let ge=Z.getParameter(Z.UNPACK_ROW_LENGTH),Oe=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Dn=Z.getParameter(Z.UNPACK_SKIP_PIXELS),hn=Z.getParameter(Z.UNPACK_SKIP_ROWS),si=Z.getParameter(Z.UNPACK_SKIP_IMAGES),ze=j.isCompressedTexture?j.mipmaps[q]:j.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ze.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ze.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,E.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,E.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,E.min.z),j.isDataTexture||j.isData3DTexture?Z.texSubImage3D(de,q,X.x,X.y,X.z,Lt,Ut,Qt,ue,_e,ze.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(de,q,X.x,X.y,X.z,Lt,Ut,Qt,ue,ze.data)):Z.texSubImage3D(de,q,X.x,X.y,X.z,Lt,Ut,Qt,ue,_e,ze),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ge),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Oe),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Dn),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,hn),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,si),q===0&&et.generateMipmaps&&Z.generateMipmap(de),Xt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Xt.unbindTexture()},this.resetState=function(){O=0,I=0,L=null,Xt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===zl?"display-p3":"srgb",e.unpackColorSpace=Be.workingColorSpace===Xa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===An?ls:$h}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ls?An:Ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},pl=class extends Sr{};pl.prototype.isWebGL1Renderer=!0;var Pa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ia=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var br=class extends $i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Th=new F,wh=new F,Ah=new fn,zo=new yr,aa=new qs,ml=class extends Fn{constructor(t=new Gn,e=new br){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Th.fromBufferAttribute(e,s-1),wh.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Th.distanceTo(wh);t.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;Ah.copy(s).invert(),zo.copy(t.ray).applyMatrix4(Ah);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,h=new F,f=new F,d=new F,u=this.isLineSegments?2:1,x=n.index,m=n.attributes.position;if(x!==null){let p=Math.max(0,a.start),M=Math.min(x.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=u){let O=x.getX(y),I=x.getX(y+1);if(c.fromBufferAttribute(m,O),h.fromBufferAttribute(m,I),zo.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let Y=t.ray.origin.distanceTo(d);Y<t.near||Y>t.far||e.push({distance:Y,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=u){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),zo.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Rh=new F,Ch=new F,La=class extends ml{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Rh.fromBufferAttribute(e,s),Ch.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rh.distanceTo(Ch);t.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Da=class extends ei{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Nt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new F,s=[],r=[],a=[],o=new F,l=new fn;for(let u=0;u<=t;u++){let x=u/t;s[u]=this.getTangentAt(x,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Pn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,x))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Pn(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],u*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Er=class extends ni{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new Nt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},gl=class extends Er{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var oa=new F,Vo=new Gl,Go=new Gl,Wo=new Gl,_l=class extends ni{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(oa.subVectors(s[0],s[1]).add(s[0]),c=oa);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),Vo.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,x,v,m),Go.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,x,v,m),Wo.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,x,v,m)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Go.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Wo.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Vo.calc(l),Go.calc(l),Wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ph(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function C0(i,t){let e=1-i;return e*e*t}function P0(i,t){return 2*(1-i)*i*t}function I0(i,t){return i*i*t}function fr(i,t,e,n){return C0(i,t)+P0(i,e)+I0(i,n)}function L0(i,t){let e=1-i;return e*e*e*t}function D0(i,t){let e=1-i;return 3*e*e*i*t}function U0(i,t){return 3*(1-i)*i*i*t}function N0(i,t){return i*i*i*t}function pr(i,t,e,n,s){return L0(i,t)+D0(i,e)+U0(i,n)+N0(i,s)}var Ua=class extends ni{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pr(t,s.x,r.x,a.x,o.x),pr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xl=class extends ni{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pr(t,s.x,r.x,a.x,o.x),pr(t,s.y,r.y,a.y,o.y),pr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Na=class extends ni{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yl=class extends ni{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends ni{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fr(t,s.x,r.x,a.x),fr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vl=class extends ni{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fr(t,s.x,r.x,a.x),fr(t,s.y,r.y,a.y),fr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Ph(o,l.x,c.x,h.x,f.x),Ph(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},Ih=Object.freeze({__proto__:null,ArcCurve:gl,CatmullRomCurve3:_l,CubicBezierCurve:Ua,CubicBezierCurve3:xl,EllipseCurve:Er,LineCurve:Na,LineCurve3:yl,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:vl,SplineCurve:Fa}),Ml=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ih[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ih[s.type]().fromJSON(s))}return this}},$s=class extends Ml{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Na(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Oa(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ua(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s),new Nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Er(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Zi=class i extends Gn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],x=0,v=[],m=n/2,p=0;M(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new en(f,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(u,2));function M(){let T=new F,O=new F,I=0,L=(e-t)/n;for(let Y=0;Y<=r;Y++){let b=[],w=Y/r,U=w*(e-t)+t;for(let B=0;B<=s;B++){let J=B/s,P=J*l+o,W=Math.sin(P),N=Math.cos(P);O.x=U*W,O.y=-w*n+m,O.z=U*N,f.push(O.x,O.y,O.z),T.set(W,L,N).normalize(),d.push(T.x,T.y,T.z),u.push(J,1-w),b.push(x++)}v.push(b)}for(let Y=0;Y<s;Y++)for(let b=0;b<r;b++){let w=v[b][Y],U=v[b+1][Y],B=v[b+1][Y+1],J=v[b][Y+1];h.push(w,U,J),h.push(U,B,J),I+=6}c.addGroup(p,I,0),p+=I}function y(T){let O=x,I=new Nt,L=new F,Y=0,b=T===!0?t:e,w=T===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*w,0),d.push(0,w,0),u.push(.5,.5),x++;let U=x;for(let B=0;B<=s;B++){let P=B/s*l+o,W=Math.cos(P),N=Math.sin(P);L.x=b*N,L.y=m*w,L.z=b*W,f.push(L.x,L.y,L.z),d.push(0,w,0),I.x=W*.5+.5,I.y=N*.5*w+.5,u.push(I.x,I.y),x++}for(let B=0;B<s;B++){let J=O+B,P=U+B;T===!0?h.push(P,P+1,J):h.push(P+1,P,J),Y+=3}c.addGroup(p,Y,T===!0?1:2),p+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ki=class i extends Zi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sl=class i extends Gn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new en(r,3)),this.setAttribute("normal",new en(r.slice(),3)),this.setAttribute("uv",new en(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new F,T=new F,O=new F;for(let I=0;I<e.length;I+=3)u(e[I+0],y),u(e[I+1],T),u(e[I+2],O),l(y,T,O,M)}function l(M,y,T,O){let I=O+1,L=[];for(let Y=0;Y<=I;Y++){L[Y]=[];let b=M.clone().lerp(T,Y/I),w=y.clone().lerp(T,Y/I),U=I-Y;for(let B=0;B<=U;B++)B===0&&Y===I?L[Y][B]=b:L[Y][B]=b.clone().lerp(w,B/U)}for(let Y=0;Y<I;Y++)for(let b=0;b<2*(I-Y)-1;b++){let w=Math.floor(b/2);b%2===0?(d(L[Y][w+1]),d(L[Y+1][w]),d(L[Y][w])):(d(L[Y][w+1]),d(L[Y+1][w+1]),d(L[Y+1][w]))}}function c(M){let y=new F;for(let T=0;T<r.length;T+=3)y.x=r[T+0],y.y=r[T+1],y.z=r[T+2],y.normalize().multiplyScalar(M),r[T+0]=y.x,r[T+1]=y.y,r[T+2]=y.z}function h(){let M=new F;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let T=m(M)/2/Math.PI+.5,O=p(M)/Math.PI+.5;a.push(T,1-O)}x(),f()}function f(){for(let M=0;M<a.length;M+=6){let y=a[M+0],T=a[M+2],O=a[M+4],I=Math.max(y,T,O),L=Math.min(y,T,O);I>.9&&L<.1&&(y<.2&&(a[M+0]+=1),T<.2&&(a[M+2]+=1),O<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function u(M,y){let T=M*3;y.x=t[T+0],y.y=t[T+1],y.z=t[T+2]}function x(){let M=new F,y=new F,T=new F,O=new F,I=new Nt,L=new Nt,Y=new Nt;for(let b=0,w=0;b<r.length;b+=9,w+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),T.set(r[b+6],r[b+7],r[b+8]),I.set(a[w+0],a[w+1]),L.set(a[w+2],a[w+3]),Y.set(a[w+4],a[w+5]),O.copy(M).add(y).add(T).divideScalar(3);let U=m(O);v(I,w+0,M,U),v(L,w+2,y,U),v(Y,w+4,T,U)}}function v(M,y,T,O){O<0&&M.x===1&&(a[y]=M.x-1),T.x===0&&T.z===0&&(a[y]=O/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ba=class i extends Sl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Tr=class extends $s{constructor(t){super(t),this.uuid=Ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new $s().fromJSON(s))}return this}},O0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=au(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,d,u;if(n&&(r=z0(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let x=e;x<s;x+=e)f=i[x],d=i[x+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return wr(r,a,e,o,l,u,0),a}};function au(i,t,e,n,s){let r,a;if(s===j0(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Lh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Lh(r,i[r],i[r+1],a);return a&&Ya(a,a.next)&&(Rr(a),a=a.next),a}function hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ya(e,e.next)||tn(e.prev,e,e.next)===0)){if(Rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&q0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?B0(i,n,s,r):F0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Rr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=H0(hs(i),t,e),wr(i,t,e,n,s,r,2)):a===2&&k0(i,t,e,n,s,r):wr(hs(i),t,e,n,s,r,1);break}}}function F0(i){let t=i.prev,e=i,n=i.next;if(tn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=f&&x.y<=u&&Hs(s,o,r,l,a,c,x.x,x.y)&&tn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function B0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(tn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,u=o<l?o<c?o:c:l<c?l:c,x=h<f?h<d?h:d:f<d?f:d,v=o>l?o>c?o:c:l>c?l:c,m=h>f?h>d?h:d:f>d?f:d,p=bl(u,x,t,e,n),M=bl(v,m,t,e,n),y=i.prevZ,T=i.nextZ;for(;y&&y.z>=p&&T&&T.z<=M;){if(y.x>=u&&y.x<=v&&y.y>=x&&y.y<=m&&y!==s&&y!==a&&Hs(o,h,l,f,c,d,y.x,y.y)&&tn(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=u&&T.x<=v&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&Hs(o,h,l,f,c,d,T.x,T.y)&&tn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=p;){if(y.x>=u&&y.x<=v&&y.y>=x&&y.y<=m&&y!==s&&y!==a&&Hs(o,h,l,f,c,d,y.x,y.y)&&tn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=M;){if(T.x>=u&&T.x<=v&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&Hs(o,h,l,f,c,d,T.x,T.y)&&tn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function H0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ya(s,r)&&ou(s,n,n.next,r)&&Ar(s,r)&&Ar(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Rr(n),Rr(n.next),n=i=r),n=n.next}while(n!==i);return hs(n)}function k0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Z0(a,o)){let l=lu(a,o);a=hs(a,a.next),l=hs(l,l.next),wr(a,t,e,n,s,r,0),wr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function z0(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=au(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push($0(c));for(s.sort(V0),r=0;r<s.length;r++)e=G0(s[r],e);return e}function V0(i,t){return i.x-t.x}function G0(i,t){let e=W0(i,t);if(!e)return t;let n=lu(e,i);return hs(n,n.next),hs(e,e.next)}function W0(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Hs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Ar(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&X0(s,e)))&&(s=e,h=f)),e=e.next;while(e!==o);return s}function X0(i,t){return tn(i.prev,i,t.prev)<0&&tn(t.next,i,i.next)<0}function q0(i,t,e,n){let s=i;do s.z===0&&(s.z=bl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Y0(s)}function Y0(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function bl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Z0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!K0(i,t)&&(Ar(i,t)&&Ar(t,i)&&J0(i,t)&&(tn(i.prev,i,t.prev)||tn(i,t.prev,t))||Ya(i,t)&&tn(i.prev,i,i.next)>0&&tn(t.prev,t,t.next)>0)}function tn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ya(i,t){return i.x===t.x&&i.y===t.y}function ou(i,t,e,n){let s=ca(tn(i,t,e)),r=ca(tn(i,t,n)),a=ca(tn(e,n,i)),o=ca(tn(e,n,t));return!!(s!==r&&a!==o||s===0&&la(i,e,t)||r===0&&la(i,n,t)||a===0&&la(e,i,n)||o===0&&la(e,t,n))}function la(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ca(i){return i>0?1:i<0?-1:0}function K0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ou(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ar(i,t){return tn(i.prev,i,i.next)<0?tn(i,t,i.next)>=0&&tn(i,i.prev,t)>=0:tn(i,t,i.prev)<0||tn(i,i.next,t)<0}function J0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function lu(i,t){let e=new El(i.i,i.x,i.y),n=new El(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lh(i,t,e,n){let s=new El(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function El(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function j0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var mr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Dh(t),Uh(n,t);let a=t.length;e.forEach(Dh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Uh(n,e[l]);let o=O0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Dh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ha=class i extends Gn{constructor(t=new Tr([new Nt(0,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new en(s,3)),this.setAttribute("normal",new en(r,3)),this.setAttribute("uv",new en(a,2));function c(h){let f=s.length/3,d=h.extractPoints(e),u=d.shape,x=d.holes;mr.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=x.length;m<p;m++){let M=x[m];mr.isClockWise(M)===!0&&(x[m]=M.reverse())}let v=mr.triangulateShape(u,x);for(let m=0,p=x.length;m<p;m++){let M=x[m];u=u.concat(M)}for(let m=0,p=u.length;m<p;m++){let M=u[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=v.length;m<p;m++){let M=v[m],y=M[0]+f,T=M[1]+f,O=M[2]+f;n.push(y,T,O),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Q0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Q0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var us=class i extends Gn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new F,d=new F,u=[],x=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],y=p/n,T=0;p===0&&a===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let O=0;O<=e;O++){let I=O/e;f.x=-t*Math.cos(s+I*r)*Math.sin(a+y*o),f.y=t*Math.cos(a+y*o),f.z=t*Math.sin(s+I*r)*Math.sin(a+y*o),x.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(I+T,1-y),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let y=h[p][M+1],T=h[p][M],O=h[p+1][M],I=h[p+1][M+1];(p!==0||a>0)&&u.push(y,T,I),(p!==n-1||l<Math.PI)&&u.push(T,O,I)}this.setIndex(u),this.setAttribute("position",new en(x,3)),this.setAttribute("normal",new en(v,3)),this.setAttribute("uv",new en(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Bn=class extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ha(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function t_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oc:r=t,o=2*e-n;break;case Fc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oc:a=t,l=2*n-e;break;case Fc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,x=(n-e)/(s-e),v=x*x,m=v*x,p=-d*m+2*d*v-d*x,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*x+1,y=(-1-u)*m+(1.5+u)*v+.5*x,T=u*m-u*v;for(let O=0;O!==o;++O)r[O]=p*a[h+O]+M*a[c+O]+y*a[l+O]+T*a[f+O];return r}},wl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Al=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ui=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ha(e,this.TimeBufferType),this.values=ha(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ha(t.times,Array),values:ha(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case da:e=this.InterpolantFactoryMethodDiscrete;break;case fa:e=this.InterpolantFactoryMethodLinear;break;case go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&t_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===go,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,d=f-n,u=f+n;for(let x=0;x!==n;++x){let v=e[f+x];if(v!==e[d+x]||v!==e[u+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=fa;var ds=class extends ui{};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=da;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends ui{};Rl.prototype.ValueTypeName="color";var Cl=class extends ui{};Cl.prototype.ValueTypeName="number";var Pl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Yi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Cr=class extends ui{InterpolantFactoryMethodLinear(t){return new Pl(this.times,this.values,this.getValueSize(),t)}};Cr.prototype.ValueTypeName="quaternion";Cr.prototype.DefaultInterpolation=fa;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends ui{};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=da;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends ui{};Il.prototype.ValueTypeName="vector";var Ll=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],x=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return x}return null}}},e_=new Ll,Dl=class{constructor(t){this.manager=t!==void 0?t:e_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ka=class extends Fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Xo=new fn,Nh=new F,Oh=new F,Ul=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new wn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nh),Oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oh),e.updateMatrixWorld(),Xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Nl=class extends Ul{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},za=class extends ka{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new Nl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Va=class extends ka{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wl="\\[\\]\\.:\\/",n_=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",i_="[^"+Wl.replace("\\.","")+"]",s_=/((?:WC+[\/:])*)/.source.replace("WC",Xl),r_=/(WCOD+)?/.source.replace("WCOD",i_),a_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),o_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),l_=new RegExp("^"+s_+r_+a_+o_+"$"),c_=["material","materials","bones","map"],Ol=class{constructor(t,e,n){let s=n||Ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ze=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(n_,"")}static parseTrackName(t){let e=l_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);c_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ze.Composite=Ol;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S_=new Float32Array(1);var Ga=class{constructor(t,e,n=0,s=1/0){this.ray=new yr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Fl(t,this,n,e),n.sort(Fh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Fl(t[s],this,n,e);return n.sort(Fh),n}};function Fh(i,t){return i.distance-t.distance}function Fl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Fl(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);var u_=35,d_=25,xe=.95,Hn=.35,$a=6,ps=130,cu=300,hu=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),f_=[{value:"balanced",label:"Balanced (HP + even stats)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],p_=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch"],Kt={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Za=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf"];function m_(i){for(let t=i.length-1;t>0;t--){let e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i}var Fe={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:6,agi:4,vit:5,dex:4,luk:13,int:15,range:4},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:12,maxMp:12,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:6},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:12,maxMp:12,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1}},Ka={knight:{primary:6908265,secondary:9127187,hair:12887172,cape:3355443},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:4744577,hair:4744577},samurai:{primary:13882323,secondary:3556687,hair:3556687},werewolf:{primary:11119017,secondary:14474460,hair:12632256}},Pr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg"},uu={knight:[{name:"Shield Wall",description:"Gain +2 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"shieldWall"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:4,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Freeze",description:"Reduce target's AGI by 10 for 1 turn.",cost:8,target:"enemy",range:6,level:2,effectKey:"freeze"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:4,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:3,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:5,target:"enemy",range:4,level:2,effectKey:"shuriken"},{name:"Blind",description:"Steal 2 DEX from an enemy.",cost:8,target:"enemy",range:1,level:3,effectKey:"blind"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}]};function xt(i,t){let e=i[t]!=null?i[t]:0,n=i.tempBuff&&i.tempBuff[t]!=null?i.tempBuff[t]:0,s=i.tempDebuff&&i.tempDebuff[t]!=null?i.tempDebuff[t]:0;return e+n-s}function Ja(i,t,e,n){let s=t,r=e,o={shieldWall:"Shield Wall",dominate:"Dominate",arcaneBolt:"Arcane Bolt",freeze:"Freeze",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,f=(u,x,v,m)=>{if(v)u.hp=Math.min(u.maxHp,u.hp+x),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${x}`,!1,"heal");else{let p=u===s,M=!0;if(!p&&!m){let y=xt(u,"agi")*.7+xt(u,"luk")*.3;M=Math.random()*Math.max(.001,y)<=xt(s,"dex")}return M?(u.hp=Math.max(0,u.hp-x),u!==s&&(h=x),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(x),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),M}},d=(u,x,v,m)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,x,v,!1,m?"buff":"debuff")};switch(i){case"shieldWall":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=2,s.tempBuff.duration=3,d(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let u=2;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,d(r.x,r.y,`-${u} STR`,!1),d(s.x,s.y,`+${u} STR`,!0)}break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(xt(s,"int")-(xt(r,"int")*.7+xt(r,"luk")*.2)));f(r,u,!1,!0)}break;case"freeze":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=10,r.tempDebuff.duration=1,d(r.x,r.y,"-10 AGI",!1));break;case"mantra":if(r){let u=Math.max(1,Math.floor(xt(s,"int")*.3));if(s.tempBuff=s.tempBuff||{},s.tempBuff.int=u,s.tempBuff.duration=3,d(s.x,s.y,`+${u} LUK`,!0),!r)break;r.tempBuff=r.tempBuff||{},r.tempBuff.luk=u,r.tempBuff.duration=3,d(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(f(s,Math.max(1,Math.floor(xt(s,"int")*.3+xt(s,"luk")*.2)),!0),!r)break;f(r,Math.max(1,Math.floor(xt(s,"int")*.3+xt(r,"luk")*.2)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,d(r.x,r.y,`-${u} VIT`,!1),d(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(xt(s,"str")*.7-(xt(r,"vit")*.3+xt(r,"luk")*.2)));f(r,u,!1)&&f(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=u,r.tempDebuff.duration=4,d(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(xt(s,"str")*.6));f(r,u,!1)}break;case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(xt(s,"dex")*.7-(xt(r,"vit")*.3+xt(r,"luk")*.2)));f(r,u,!1)}break;case"execute":if(r){let u=Math.max(1,Math.floor(xt(s,"agi")*.7-(xt(r,"vit")*.3+xt(r,"luk")*.2)));f(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,d(r.x,r.y,`-${u} AGI`,!1),d(s.x,s.y,`+${u} AGI`,!0)}break;case"berserk":r&&(f(r,Math.max(1,Math.floor(xt(s,"str")*.8-xt(r,"vit")*.3+xt(r,"luk")*.2)),!1),f(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=u,s.tempBuff.vit=u,s.tempBuff.duration=2,d(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,d(r.x,r.y,`-${u} INT`,!1),d(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(xt(s,"int")*.6-(xt(r,"int")*.4+xt(r,"luk")*.2)));f(r,u,!1,!0),f(s,u,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(xt(s,"dex")*.6-(xt(r,"vit")*.3+xt(r,"luk")*.2)));f(r,u,!1)}break;case"blind":{if(!r)break;let u=2;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,d(r.x,r.y,`-${u} DEX`,!1),d(s.x,s.y,`+${u} DEX`,!0)}break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=3,d(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(xt(s,"str")*.3+xt(s,"dex")*.3-(xt(r,"vit")*.3+xt(r,"luk")*.2)));f(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(xt(s,"str")*.7+xt(s,"agi")*.1-(xt(r,"vit")*.3+xt(r,"luk")*.2)));f(r,u,!1)}break;case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=2,d(s.x,s.y,"+2 STR, +2 AGI",!0);break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function g_(){let i=u_,t=d_,e=Array.from({length:t},()=>Array(i).fill(!1)),n=Array.from({length:t},()=>Array(i).fill(0)),s=Array.from({length:t},()=>Array(i).fill(Kt.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=t-1;for(let U=-1;U<=1;U++)for(let B=-2;B<=2;B++){let J=r+B,P=o+U;J>=0&&J<i&&P>=0&&P<t&&(e[P][J]=!0,s[P][J]=Kt.BASE_TOP,n[P][J]=1)}for(let U=-1;U<=1;U++)for(let B=-2;B<=2;B++){let J=a+B,P=l+U;J>=0&&J<i&&P>=0&&P<t&&(e[P][J]=!0,s[P][J]=Kt.BASE_BOTTOM,n[P][J]=1)}let c=Math.floor(i/2),h=Math.floor(t/2);for(let U=-1;U<=1;U++)for(let B=-2;B<=2;B++){let J=c+B,P=h+U;J>=0&&J<i&&P>=0&&P<t&&(e[P][J]=!0,s[P][J]=Kt.CENTER,n[P][J]=1)}let f=new Set,d=(U,B)=>Math.abs(U-c)<=2&&Math.abs(B-h)<=1,u=(U,B)=>{U<0||U>=i||B<0||B>=t||d(U,B)||f.add(B*i+U)},x=Math.floor(i/2),v=Math.floor(t/2),m=Math.min(i,t)*.29,p=Math.max(60,(t+i)*2);for(let U=0;U<2;U++){let B=U===0?x-m:x+m,J=U===0?Math.PI/2:-Math.PI/2,P=U===0?Math.PI*3/2:Math.PI/2;for(let W=0;W<=p;W++){let N=W/p,st=J+N*(P-J),$=B+m*Math.cos(st),Q=v+m*Math.sin(st),it=Math.round($),ct=Math.round(Q);u(it,ct),u(it+1,ct),u(it-1,ct),u(it,ct+1),u(it,ct-1)}}let M=[[0,1],[0,-1],[1,0],[-1,0]];for(let U=0;U<1;U++){let B=[];f.forEach(J=>{let P=J%i,W=J/i|0;for(let[N,st]of M){let $=P+N,Q=W+st;if($<0||$>=i||Q<0||Q>=t)continue;let it=Q*i+$;f.has(it)||B.push(it)}}),B.forEach(J=>f.add(J))}f.forEach(U=>{let B=U%i,J=U/i|0;s[J][B]===Kt.BASE_TOP||s[J][B]===Kt.BASE_BOTTOM||s[J][B]===Kt.CENTER||(e[J][B]=!0,s[J][B]=Kt.PATH,n[J][B]=1)});let y=Math.round(x-m*1.6),T=Math.round(x+m*1.6),O=Math.round(x-m),I=Math.round(x+m),L=1;for(let U=h-L;U<=h+L;U++)if(!(U<0||U>=t))for(let B=y;B<=T;B++)B<0||B>=i||(e[U][B]=!0,s[U][B]!==Kt.CENTER&&s[U][B]!==Kt.BASE_TOP&&s[U][B]!==Kt.BASE_BOTTOM&&(s[U][B]=Kt.PATH),n[U][B]=Math.max(n[U][B],1));function Y(U,B,J,P){let W=Math.max(1,Math.min(U,B)),N=Math.min(t-2,Math.max(U,B)),st=Math.max(1,Math.min(J,P)),$=Math.min(i-2,Math.max(J,P));for(let Q=W;Q<=N;Q++)for(let it=st;it<=$;it++)s[Q][it]===Kt.BASE_TOP||s[Q][it]===Kt.BASE_BOTTOM||s[Q][it]===Kt.CENTER||(e[Q][it]=!0,s[Q][it]=Kt.PATH,n[Q][it]=1)}let b=3,w=3;Y(o,o+b-1,O,r-1),Y(o,o+b-1,r+1,I),Y(l-w+1,l,O,a-1),Y(l-w+1,l,a+1,I);for(let U=-1;U<=2;U++)for(let B=-2;B<=2;B++){let J=r+B,P=o+U;J>=0&&J<i&&P>=0&&P<t&&(e[P][J]=!0,s[P][J]=Kt.BASE_TOP,n[P][J]=1)}for(let U=-2;U<=1;U++)for(let B=-2;B<=2;B++){let J=a+B,P=l+U;J>=0&&J<i&&P>=0&&P<t&&(e[P][J]=!0,s[P][J]=Kt.BASE_BOTTOM,n[P][J]=1)}for(let U=0;U<t;U++)for(let B=0;B<i;B++){if(e[U][B]||s[U][B]===Kt.BASE_TOP||s[U][B]===Kt.BASE_BOTTOM||s[U][B]===Kt.CENTER)continue;let J=Math.abs(B-r)<=4&&Math.abs(U-o)<=3,P=Math.abs(B-a)<=4&&Math.abs(U-l)<=3,W=J||P,N=Math.random();N<.55&&!W?(s[U][B]=Kt.TREE,n[U][B]=1+Math.floor(Math.random()*2)):N<.75||W&&N<.5?(s[U][B]=Kt.WATER,n[U][B]=0):(s[U][B]=Kt.ROCK,n[U][B]=1+Math.floor(Math.random()*2))}return{w:i,h:t,path:e,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function __(i,t,e){let n=t===1?Kt.BASE_BOTTOM:Kt.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(e&&e.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function x_(i){let t=[];for(let e=0;e<i.h;e++)for(let n=0;n<i.w;n++)i.type[e][n]===Kt.CENTER&&t.push({gx:n,gy:e});return t}function du(i,t){let e=x_(i);if(e.length===0)return t;let n=s=>Math.min(...e.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...t].sort((s,r)=>n(s)-n(r))}function Ir(i,t,e){if(t<0||t>=i.w||e<0||e>=i.h)return!1;let n=i.type[e][t];return!(n===Kt.TREE||n===Kt.WATER||n===Kt.ROCK)}function y_(i,t,e,n){let s=[],r=i,a=t,o=e,l=n,c=Math.abs(o-r),h=Math.abs(l-a),f=r<o?1:-1,d=a<l?1:-1,u=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*u;x>-h&&(u-=h,r+=f),x<c&&(u+=c,a+=d)}return s}function ms(i,t,e,n,s){let r=y_(t,e,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!Ir(i,o.x,o.y))return!1}return!0}function ja(i,t,e,n,s,r){let a=(f,d)=>d*i.w+f,o=new Map;o.set(a(t,e),0);let l=[{x:t,y:e,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null;for(;l.length;){let{x:f,y:d,d:u}=l.shift();if(!(u>=n))for(let[x,v]of c){let m=f+x,p=d+v;if(!Ir(i,m,p))continue;if(h){let T=s.find(O=>O.hp>0&&O.x===m&&O.y===p);if(T&&T.player!==r.player)continue}let M=a(m,p);if(o.has(M))continue;let y=u+1;o.set(M,y),l.push({x:m,y:p,d:y})}}return o}function fu(i,t,e,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-t)+Math.abs(r-e);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function Ji(i,t,e,n,s,r,a){if(t===n&&e===s)return[{x:t,y:e}];let o=(d,u)=>u*i.w+d,l=new Map,c=[{x:t,y:e}];l.set(o(t,e),null);let h=[[0,1],[0,-1],[1,0],[-1,0]];function f(d,u){if(!Ir(i,d,u))return!1;let x=r.find(v=>v.hp>0&&v.x===d&&v.y===u);return x?x.id===a.id||x.player===a.player:!0}for(;c.length;){let{x:d,y:u}=c.shift();if(d===n&&u===s){let x=[],v={x:n,y:s};for(;v;)x.unshift(v),v=l.get(o(v.x,v.y));return x}for(let[x,v]of h){let m=d+x,p=u+v,M=o(m,p);l.has(M)||f(m,p)&&(l.set(M,{x:d,y:u}),c.push({x:m,y:p}))}}return null}var pu={[Kt.PATH]:2976557,[Kt.GRASS]:2968109,[Kt.TREE]:1719578,[Kt.WATER]:1989278,[Kt.ROCK]:4872778,[Kt.BASE_TOP]:8014410,[Kt.BASE_BOTTOM]:4872826,[Kt.CENTER]:13940810};function mu(i){return i.w*xe/2}function gu(i){return i.h*xe/2}function _u(i){let t=document.createElement("canvas");t.width=i,t.height=i;let e=t.getContext("2d"),n=e.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}e.putImageData(n,0,0);let r=new Da(t);return r.wrapS=r.wrapT=gr,r.repeat.set(4,4),r.needsUpdate=!0,r}function v_(i){let t=new ti,e=mu(i),n=gu(i),s=new In(xe,Hn,xe),r=_u(64),a=.88,o=.02,l=[];function c(d,u,x,v,m){let p=new Bn({color:3828266,roughness:.9});p.bumpMap=r,p.bumpScale=.12;for(let M=0;M<v;M++){let y=.08+Math.random()*m,T=.03+Math.random()*.03,O=new ce(new Zi(T*.5,T,y,6),p);O.position.set(d+(Math.random()-.5)*.5,x+y/2,u+(Math.random()-.5)*.5),O.rotation.x=(Math.random()-.5)*.2,O.rotation.z=(Math.random()-.5)*.2,O.castShadow=!0,t.add(O)}}let h=.12;function f(d,u,x,v){let m=x+.02,p=[[d-h,m,u-h],[d+h,m,u+h],[d-h,m,u+h],[d+h,m,u-h],[d-h+.06,m,u-h+.06],[d+h-.06,m,u+h-.06],[d-h+.06,m,u+h-.06],[d+h-.06,m,u-h+.06]],M=new Float32Array(p.length*3);p.forEach((I,L)=>{M[L*3]=I[0],M[L*3+1]=I[1],M[L*3+2]=I[2]});let y=new Gn;y.setAttribute("position",new Vn(M,3)),y.computeBoundingSphere();let T=new br({color:855309,linewidth:1}),O=new La(y,T);v.add(O)}for(let d=0;d<i.h;d++)for(let u=0;u<i.w;u++){let x=i.type[d][u],v=i.height[d][u],m=pu[x],p=Hn+v*.35,M=p/2+Hn/2,y=new Bn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),T=(m>>16&255)/255,O=(m>>8&255)/255,I=(m&255)/255,L=T,Y=O,b=I;if(x===Kt.PATH||x===Kt.TREE||x===Kt.ROCK){let st=Math.random()*.45;L=T*(1-st)+.42*st,Y=O*(1-st)+.26*st,b=I*(1-st)+.14*st}(x===Kt.TREE||x===Kt.ROCK)&&(L*=.5,Y*=.5,b*=.5);let w=1+(Math.random()-.5)*.12;y.color.setRGB(Math.min(1,L*w),Math.min(1,Y*w),Math.min(1,b*w)),y.bumpMap=r,y.bumpScale=.12;let U=new ce(s,y);U.position.set(u*xe-e+xe/2,p/2,d*xe-n+xe/2),U.castShadow=!0,U.receiveShadow=!0,U.userData={gx:u,gy:d,type:x},t.add(U);let B=u*xe-e+xe/2,J=d*xe-n+xe/2;if(x===Kt.TREE&&f(B,J,M,t),x===Kt.TREE){let P=new ti;P.position.set(B,M,J);let W=u===0||u===i.w-1||d===0||d===i.h-1,N=W?.75+Math.random()*.35:.5+Math.random()*.2,st=new pe(4007959),$=()=>1+(Math.random()-.5)*.4;st.r=Math.min(1,Math.max(0,st.r*$())),st.g=Math.min(1,Math.max(0,st.g*$())),st.b=Math.min(1,Math.max(0,st.b*$()));let Q=.85+Math.random()*.2,it=new Bn({color:st,roughness:Q});it.bumpMap=r,it.bumpScale=.1+Math.random()*.12;let ct=new ce(new Zi(.12,.14,N,8),it);ct.position.set(0,N/2,0),ct.castShadow=!0,ct.raycast=function(){},P.add(ct);let pt=r.clone();pt.repeat.set(3,3);let tt=new pe(2972205),dt=()=>1+(Math.random()-.5)*.44;tt.r=Math.min(1,Math.max(0,tt.r*dt())),tt.g=Math.min(1,Math.max(0,tt.g*dt())),tt.b=Math.min(1,Math.max(0,tt.b*dt()));let wt=.78+Math.random()*.24,zt=new Bn({color:tt,roughness:wt});zt.bumpMap=pt,zt.bumpScale=.16+Math.random()*.14;let Vt=W?.52:.45,re=W?1.05:.9,he=.12,Gt=re*.5,Se=re*.45,Z=re*.4,Ke=new ce(new Ki(Vt,Gt,8),zt);Ke.position.set(0,N+Gt/2,0),Ke.castShadow=!0,Ke.raycast=function(){},P.add(Ke);let $t=new ce(new Ki(Vt*.75,Se,8),zt);$t.position.set(0,N+Gt-he+Se/2,0),$t.castShadow=!0,$t.raycast=function(){},P.add($t);let ie=new ce(new Ki(Vt*.5,Z,8),zt);ie.position.set(0,N+Gt-he+Se-he+Z/2,0),ie.castShadow=!0,ie.raycast=function(){},P.add(ie),t.add(P),l.push(P)}else if(x===Kt.WATER){let P=pu[Kt.WATER],W=(P>>16&255)/255,N=(P>>8&255)/255,st=(P&255)/255,$=1+(Math.random()-.5)*.12,Q=new Bn({color:new pe().setRGB(Math.min(1,W*$),Math.min(1,N*$),Math.min(1,st*$)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),it=new ce(new Ri(xe,xe),Q);it.rotation.x=-Math.PI/2,it.position.set(B,M+.02,J),it.receiveShadow=!0,t.add(it)}else if(x===Kt.ROCK){let P=new Bn({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let W=(Q,it,ct)=>{let pt=new ce(new Ba(Q,0),P);pt.position.set(B+it,M+Q-.2,J+ct),pt.rotation.set(Math.random(),Math.random(),Math.random()),pt.castShadow=!0,t.add(pt)},N=.32+Math.random()*.14,st=.2+Math.random()*.12,$=.12+Math.random()*.12;W(N,(Math.random()-.5)*.15,(Math.random()-.5)*.15),W(st,(Math.random()-.5)*.25,(Math.random()-.5)*.25),W($,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return t.userData.treeGroups=l,t}function M_(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let t=g_(),e=document.getElementById("canvas-wrap"),n=new Ia;n.background=new pe(1711652),n.fog=new Pa(1711652,30,90);let s=t.w*xe/2,r=t.h*xe/2,a=new On(50,e.clientWidth/e.clientHeight,.1,200),o=17,l=new F(12,38,16).normalize().multiplyScalar(o),c=new F,h=new F,f=new li(new F(0,1,0),0),d=new F,u=new F,x=!1,v=!1,m=!1,p=null,M=5,y=.004,T=-Math.PI*.4,O=Math.PI*.4,I=new F,L={x:0,y:0},Y=1,b=40,w=.08,U=.15,B=null,J=new Va(16777215,.45);n.add(J);let P=new za(16774630,1.1);P.position.set(30,50,20),P.castShadow=!0,P.shadow.mapSize.width=2048,P.shadow.mapSize.height=2048,P.shadow.camera.near=1,P.shadow.camera.far=120,P.shadow.camera.left=-50,P.shadow.camera.right=50,P.shadow.camera.top=50,P.shadow.camera.bottom=-50,n.add(P);let W=v_(t);n.add(W);let N=[],st=1,$=new Map,Q=_u(64),it=mu(t),ct=gu(t);function pt(_,g){let C=(Hn+t.height[g][_]*.35)/2+Hn/2;return new F(_*xe-it+xe/2,C,g*xe-ct+xe/2)}function tt(_,g){let A=(_>>16&255)/255,C=(_>>8&255)/255,H=(_&255)/255,k=1+(Math.random()-.5)*g;return new pe(Math.min(1,A*k),Math.min(1,C*k),Math.min(1,H*k))}let dt=.62;function wt(_,g){g=g??dt;let A=_ instanceof pe?_:new pe(_);return new pe(Math.max(0,A.r*g),Math.max(0,A.g*g),Math.max(0,A.b*g))}function zt(_,g,A){let C=Ka[g]||Ka.knight,H=wt(tt(C.primary,.08)),k=wt(tt(C.secondary,.08)),G=Fe[g]&&Fe[g].gender||"male",z=A??4006676,V=wt(tt(C.skin!=null?C.skin:15250592,.06)),nt=wt(tt(z,.08)),lt=()=>(Math.random()-.5)*.08,bt=()=>(Math.random()-.5)*.04,Pt=new Bn({color:H,metalness:Math.max(0,.25+bt()),roughness:Math.max(.3,Math.min(1,.5+lt()))});Pt.bumpMap=Q,Pt.bumpScale=.1;let rt=new Bn({color:k,metalness:Math.max(0,.2+bt()),roughness:Math.max(.3,Math.min(1,.55+lt()))});rt.bumpMap=Q,rt.bumpScale=.1;let Ht=new Bn({color:H,metalness:Math.max(0,.25+bt()),roughness:Math.max(.3,Math.min(1,.5+lt()))});Ht.bumpMap=Q,Ht.bumpScale=.1;let Ce=new Bn({color:V,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+lt()))});Ce.bumpMap=Q,Ce.bumpScale=.05;let De=new ti,Ae=.28,qe=.08,ln=.08,sn=new ce(new In(qe,Ae,ln),rt);sn.position.set(-.06,Ae/2,0),sn.castShadow=!0,De.add(sn);let mn=new ce(new In(qe,Ae,ln),rt);mn.position.set(.06,Ae/2,0),mn.castShadow=!0,De.add(mn);let Ye=.28,Ve=.2,Ne=.12,Ge=new ce(new In(Ve,Ye,Ne),Pt);Ge.position.set(0,Ae+Ye/2,0),Ge.castShadow=!0,De.add(Ge);let Ee=.06,un=.22,gn=.06,_n=new ce(new In(Ee,un,gn),Ht);_n.position.set(-(Ve/2+Ee/2),Ae+Ye-.08,0),_n.castShadow=!0,De.add(_n);let En=new ce(new In(Ee,un,gn),Ht);if(En.position.set(Ve/2+Ee/2,Ae+Ye-.08,0),En.castShadow=!0,De.add(En),C.cape!=null){let ee=Ve*1.35,Jt=Ae+Ye*.15,kt=new Ri(ee,Jt),Wt=new Bn({color:wt(tt(C.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+lt())),side:cn});Wt.bumpMap=Q,Wt.bumpScale=.12;let xn=new ce(kt,Wt);xn.position.set(0,Ae+Jt/2-.02,-Ne/2-.02),xn.rotation.y=Math.PI,xn.castShadow=!0,De.add(xn)}let ot=.1,gt=new ce(new us(ot,12,10),Ce);gt.position.set(0,Ae+Ye+ot,0),gt.castShadow=!0,De.add(gt);let yt=new rn({color:1710638}),ut=new ce(new In(.032,.004,.004),yt);ut.position.set(-.032,.028,ot*.92),gt.add(ut);let ht=new ce(new In(.032,.004,.004),yt);ht.position.set(.032,.028,ot*.92),gt.add(ht);let _t=new rn({color:2957087}),St=new ce(new In(.045,.012,.008),_t);St.position.set(0,-.028,ot*.92),gt.add(St);let Et=new Bn({color:nt,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+lt()))});if(Et.bumpMap=Q,Et.bumpScale=.15,G==="female"){let ee=new ce(new us(ot*.85,10,8,0,Math.PI*2,0,Math.PI*.45),Et);ee.position.set(0,ot*.35,-ot*.2),ee.castShadow=!0,gt.add(ee);let Jt=new ce(new In(ot*1.1,ot*2.2,ot*.5),Et);Jt.position.set(0,-ot*.6,-ot*.95),Jt.castShadow=!0,gt.add(Jt)}else{let ee=new ce(new us(ot*.82,10,8,0,Math.PI*2,0,Math.PI*.35),Et);ee.position.set(0,ot*.5,-ot*.15),ee.castShadow=!0,gt.add(ee)}return De.userData.leftLeg=sn,De.userData.rightLeg=mn,De.userData.leftArm=_n,De.userData.rightArm=En,De}function Vt(_,g){let A=_.userData;if(!A.leftLeg)return;let C=g*Math.PI*2,H=.35,k=.28;A.leftLeg.rotation.x=Math.sin(C)*H,A.rightLeg.rotation.x=Math.sin(C+Math.PI)*H,A.leftArm.rotation.y=Math.sin(C+Math.PI)*k,A.rightArm.rotation.y=Math.sin(C)*k}function re(_){let g=_.userData;g.leftLeg&&(g.leftLeg.rotation.x=0,g.rightLeg.rotation.x=0,g.leftArm.rotation.y=0,g.rightArm.rotation.y=0)}function he(_){let g=zt(_.player,_.class,_.hairColor);g.position.copy(pt(_.x,_.y)),g.castShadow=!0,g.userData.unitId=_.id;let A=.28,C=.28,H=.12,k=.18,G=.04,z=new Ri(k,G),V=new rn({color:6037528,side:cn,depthTest:!0,depthWrite:!1}),nt=new ce(z,V);nt.position.set(0,A+C/2,H/2+.02),nt.rotation.x=-Math.PI/2,nt.rotation.z=Math.PI/4,nt.visible=_.maxHp>0&&_.hp<_.maxHp&&_.hp>0,g.add(nt),g.userData.slashMark=nt,n.add(g),$.set(_.id,g),Z(g,_.maxHp>0&&_.hp/_.maxHp<.35)}function Gt(_){let g=$.get(_.id);!g||!g.userData.slashMark||(g.userData.slashMark.visible=_.maxHp>0&&_.hp<_.maxHp&&_.hp>0)}let Se=.35;function Z(_,g){if(_)if(g){_.rotation.x=.35,_.scale.setScalar(.96);let A=_.userData;A&&A.leftArm&&A.rightArm&&(A.leftArm.rotation.y=.2,A.rightArm.rotation.y=.2),_.traverse(C=>{C.isMesh&&C.material&&C.material.color&&(C.userData.originalColor||(C.userData.originalColor=C.material.color.clone()),C.material.color.copy(C.userData.originalColor).multiplyScalar(.82))})}else{_.rotation.x=0,_.scale.setScalar(1);let A=_.userData;A&&A.leftArm&&A.rightArm&&(A.leftArm.rotation.y=0,A.rightArm.rotation.y=0),_.traverse(C=>{C.isMesh&&C.material&&C.userData.originalColor&&C.material.color.copy(C.userData.originalColor)})}}function Ke(_){if(_.level>=3)return;let g=_.maxHp>0?_.hp/_.maxHp:1;_.level+=1;let A=H=>Math.max(1,Math.ceil(H*1.1)),C=H=>Math.max(1,Math.ceil(H*1.1));_.maxHp=A(_.maxHp),_.maxMp=A(_.maxMp),_.hp=Math.max(1,Math.min(_.maxHp,Math.ceil(g*_.maxHp))),_.mp=Math.max(1,Math.min(_.maxMp,Math.ceil(g*_.maxMp))),_.str=C(_.str),_.agi=C(_.agi),_.vit=C(_.vit),_.dex=C(_.dex),_.luk=C(_.luk),_.int=C(_.int),_.range>2&&(_.range=C(_.range)),console.log("[LEVEL UP]",`${_.name} (${_.class}, P${_.player})`,`\u2192 Lv.${_.level}`,`| HP ${_.hp}/${_.maxHp} MP ${_.mp}/${_.maxMp} STR ${_.str} VIT ${_.vit}`),$t(_)}function $t(_){let g=$.get(_.id),A=_.level===3?"levelup level3":_.level===2?"levelup level2":"levelup";if(Uu(_,A),!g)return;let C=performance.now(),H=0;function k(G){H++,H%2===0&&an();let z=G-C,V=Math.min(1,z/vt),nt=V<.5?1+.35*(V/.5):1+.35*(1-(V-.5)/.5);g.scale.setScalar(nt),V<1?requestAnimationFrame(k):g.scale.setScalar(1)}requestAnimationFrame(k)}let ie=400,Xt=280,ke=.45,fe=160,R=280,S=350,K=500,vt=600,mt=!1,Mt=new F,qt=new F,At=new F,Ot=new F;function ne(_=!1){let g=null;if(oe==="playing"&&Ft.length>0){let G=Ft[It];g=N.find(z=>z.id===G&&z.hp>0)}if(g||(g=N.find(G=>G.player===at&&G.hp>0)),!g)return;let A=a.position.distanceTo(c);if(A<.1&&(A=o),h.copy(a.position).sub(c).normalize(),h.lengthSq()<.01&&h.copy(l).normalize(),At.copy(pt(g.x,g.y)),Ot.copy(At).add(h.clone().multiplyScalar(A)),_||mt){c.copy(At),a.position.copy(Ot),a.lookAt(c),an();return}mt=!0,Mt.copy(c),qt.copy(a.position);let C=performance.now(),H=0;Sn.shadowMap.enabled=!1;function k(G){H++,H%2===0&&an();let z=Math.min(1,(G-C)/ie),V=z*(2-z);c.lerpVectors(Mt,At,V),a.position.lerpVectors(qt,Ot,V),a.lookAt(c),z<1?requestAnimationFrame(k):(Sn.shadowMap.enabled=!0,mt=!1)}requestAnimationFrame(k)}let ae=0,at=1,oe="draft",te="pvp",le="balanced",Yt=new Set(Za),Dt=0,Zt=null,Re=new Set,Ft=[],It=0,ft=null,D=new Map,Rt=null;function Ct(_){if(!_||_.hp<=0)return;Rt=_.id;let g=document.getElementById("unit-preview-card"),A=document.getElementById("unit-preview-image"),C=document.getElementById("unit-preview-name"),H=document.getElementById("unit-preview-meta"),k=document.getElementById("unit-preview-stats");g.classList.remove("player-1","player-2"),g.classList.add(_.player===1?"player-1":"player-2"),g.classList.toggle("level-2",_.level>=2&&_.level<3),g.classList.toggle("level-3",_.level>=3),A.src=Pr[_.class]||"",A.alt=_.name,C.textContent=_.name,H.textContent=`Lv.${_.level} ${_.class} \u2014 Player ${_.player}`,k.innerHTML=[["HP",`${_.hp}/${_.maxHp}`],["MP",`${_.mp}/${_.maxMp}`],["STR",xt(_,"str")],["AGI",xt(_,"agi")],["VIT",xt(_,"vit")],["DEX",xt(_,"dex")],["LUK",xt(_,"luk")],["INT",xt(_,"int")]].map(([z,V])=>`<span class="stat-label">${z}</span><span class="stat-val${z==="HP"?" stat-val-hp":""}">${V}</span>`).join("");let G=_.maxHp>0&&_.hp/_.maxHp<.3;g.classList.toggle("low-hp",G),g.style.display="block"}function jt(){Rt=null;let _=document.getElementById("unit-preview-card");_.classList.remove("low-hp","level-2","level-3"),_.style.display="none"}let Bt=!1,be=!1,Pe=!1,Ie=null,ye=!1,me=!1,Xe=!1,Je=[],Ln=new ti;n.add(Ln);let Wn=[],di=!0,ii=0,ji=0;function an(){di=!0,ii=performance.now()}let Ci=new ti;n.add(Ci);let js=[],Qa=xe,to=.02,E=3368703,X=13382451;function j(_,g){let A=_/2,C=A-g,H=new Tr;H.moveTo(-A,-A),H.lineTo(A,-A),H.lineTo(A,A),H.lineTo(-A,A),H.lineTo(-A,-A);let k=new $s;return k.moveTo(-C,-C),k.lineTo(C,-C),k.lineTo(C,C),k.lineTo(-C,C),k.lineTo(-C,-C),H.holes.push(k),new Ha(H)}let et=j(Qa,to);function q(_=null){let g=N.filter(A=>A.hp>0&&A.id!==_).map(A=>`${A.id},${A.x},${A.y},${A.player}`).sort().join("|");if(!(q._lastSig===g&&q._lastExclude===_)){for(q._lastSig=g,q._lastExclude=_,js.forEach(A=>A.dispose()),js.length=0;Ci.children.length;){let A=Ci.children[0];Ci.remove(A)}N.filter(A=>A.hp>0&&A.id!==_).forEach(A=>{let C=A.x,H=A.y,G=(Hn+t.height[H][C]*.35)/2+Hn/2,z=C*xe-it+xe/2,V=H*xe-ct+xe/2,nt=G+.02,lt=A.player===1?E:X,bt=new rn({color:lt,side:cn}),Pt=new ce(et,bt);Pt.rotation.x=-Math.PI/2,Pt.position.set(z,nt,V),Ci.add(Pt),js.push(bt)}),an()}}let Lt=1.15,Ut=(()=>{let _=new ce(new Ki(.1,.25,8),new rn({color:16768324}));return _.rotation.x=Math.PI,_.visible=!1,n.add(_),_})();function Qt(){if(oe!=="playing"||Ft.length===0||Xe){Ut.visible=!1,Ut.removeFromParent(),n.add(Ut);return}let _=Ft[It],g=N.find(C=>C.id===_);if(!g||g.hp<=0){Ut.visible=!1,Ut.removeFromParent(),n.add(Ut);return}let A=$.get(_);if(!A){Ut.visible=!1;return}Ut.removeFromParent(),A.add(Ut),Ut.position.set(0,Lt,0),Ut.visible=!0}function ue(_){let g=[[0,1],[0,-1],[1,0],[-1,0]],A=[];for(let[C,H]of g){let k=_.x+C,G=_.y+H;!Ir(t,k,G)||N.some(V=>V.id!==_.id&&V.x===k&&V.y===G&&V.hp>0)||A.push(Math.atan2(C,H))}return A}function _e(_){if(Je.length===0)return _;if(Je.length===1)return Je[0];let g=Je[0],A=Math.abs(de(_-g));for(let C=1;C<Je.length;C++){let H=Math.abs(de(_-Je[C]));H<A&&(A=H,g=Je[C])}return g}function de(_){for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;return _}let ge=1.2,Oe=(()=>{let _=new ce(new Ki(.12,.35,8),new rn({color:4500223}));return _.rotation.x=-Math.PI/2,_.visible=!1,n.add(_),_})();function Dn(_,g){if(!Xe||Ft.length===0||Je.length===0)return;let A=Ft[It],C=N.find(bt=>bt.id===A),H=$.get(A);if(!C||!H)return;Or(_,g),Li.setFromCamera(Di,a);let k=Li.intersectObjects(W.children,!0);if(k.length===0)return;let G=null;for(let bt of k){let Pt=bt.object;for(;Pt&&(Pt.userData.gx==null||Pt.userData.gy==null);)Pt=Pt.parent;if(Pt&&Pt.userData.gx!=null){G=bt.point;break}}if(!G)return;let z=pt(C.x,C.y),V=G.x-z.x,nt=G.z-z.z;if(V*V+nt*nt<1e-6)return;let lt=Math.atan2(V,nt);H.rotation.y=_e(lt)}function hn(){if(Ft.length===0)return;let _=Ft[It],g=N.find(H=>H.id===_),A=$.get(_);if(!g||!A)return;Je=[[0,1],[0,-1],[1,0],[-1,0]].map(([H,k])=>Math.atan2(H,k)),Oe.removeFromParent(),A.add(Oe),Oe.position.set(0,ge,0),Oe.rotation.x=-Math.PI/2,Oe.rotation.y=0,Oe.rotation.z=Math.PI,Oe.visible=!0,A.rotation.y=Je[0]}function si(){Oe.visible=!1,Oe.removeFromParent(),n.add(Oe)}let ze=(()=>{let _=$a,g=[1];for(let A=0;A<Math.floor((_-1)/2);A++)g.push(2,2,1,1);return _%2===1?g.push(2):(g.push(2,2),g.push(1)),g})();function se(){return ze[Dt]}function gs(){let _=se(),g=0;for(let A=0;A<Dt;A++)ze[A]===_&&g++;return g+1}function He(){oe="draft",Dt=0,Yt=new Set(Za),Zt=null,Re.clear(),nn(),gi(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function fi(){return N.filter(_=>_.hp>0).sort((_,g)=>{let A=xt(_,"agi"),C=xt(g,"agi");if(C!==A)return C-A;let H=xt(_,"dex");return xt(g,"dex")-H}).map(_=>_.id)}function Lr(){document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");_&&(_.style.display="none",_.innerHTML=""),nn();let g=document.getElementById("battle-start-overlay");g&&(g.classList.add("visible"),g.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let A=document.getElementById("draft-placement-card");for(A&&(A.style.display="none",A.innerHTML=""),oe="playing",ae=0,Ft=fi(),It=0;It<Ft.length&&N.find(k=>k.id===Ft[It]).hp<=0;)It++;It>=Ft.length&&(It=0);let C=N.find(k=>k.id===Ft[It]);at=C?C.player:1,ye=!1,me=!1,ft=Ft[It],setTimeout(()=>{g&&(g.classList.remove("visible"),g.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",q(),we(),Qt(),ne(!0)},4e3)}function gi(){let _=document.getElementById("draft-panel"),g=document.getElementById("draft-title"),A=document.getElementById("draft-classes"),C=document.getElementById("draft-message"),H=document.getElementById("turn-player"),k=document.getElementById("draft-placement-card");if(Zt){_.style.display="none",H.textContent=`Draft: Player ${se()} \u2014 place ${Fe[Zt].name}`;let z=se();k.style.display="flex",k.classList.remove("player-1","player-2"),k.classList.add("player-"+z),k.style.left=z===1?"24px":"",k.style.right=z===2?"24px":"";let V=[...N.filter(bt=>bt.player===z).map(bt=>bt.class),Zt],nt=(bt,Pt)=>{let rt=Fe[bt];return`
        <div class="draft-class-card${Pt?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Pr[bt]||""}" alt="${rt.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${rt.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${rt.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${rt.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${rt.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${rt.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${rt.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${rt.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${rt.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${rt.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${rt.range}</span>
            </div>
          </div>
        </div>
      `},lt=3;if(V.length>lt){k.classList.add("draft-placement-cols");let bt=[];for(let rt=0;rt<V.length;rt+=lt)bt.push(V.slice(rt,rt+lt));let Pt=V.length-1;k.innerHTML=bt.map((rt,Ht)=>{let Ce=Ht===bt.length-1,De=rt.map((Ae,qe)=>{let sn=Ht*lt+qe===Pt;return nt(Ae,sn)}).join("");return`<div class="draft-placement-col${Ce?" draft-placement-col-current":""}">${De}</div>`}).join("")}else k.classList.remove("draft-placement-cols"),k.innerHTML=V.map((bt,Pt)=>{let rt=Pt===V.length-1;return nt(bt,rt)}).join("");te==="pvcpu"&&se()===2&&setTimeout(nr,500),te==="cvcpu"&&setTimeout(nr,500);return}k.style.display="none",k.innerHTML="",oe==="draft"&&(_.style.display="flex");let G=se();g.textContent=`Player ${G}: Pick a class (${gs()}/${$a})`,C.textContent="",A.innerHTML="",H.textContent=`Draft: Player ${G} \u2014 pick a class`,m_([...Za]).forEach(z=>{let V=Yt.has(z),nt=Fe[z],lt=document.createElement("button");lt.type="button",lt.className="draft-class-card"+(V?"":" draft-class-card-selected"),lt.disabled=!V,lt.innerHTML=`
          <img class="draft-class-card-image" src="${Pr[z]||""}" alt="${nt.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${nt.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${nt.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${nt.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${nt.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${nt.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${nt.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${nt.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${nt.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${nt.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${nt.range}</span>
            </div>
          </div>
        `,V&&lt.addEventListener("click",()=>_s(z)),A.appendChild(lt)}),te==="pvcpu"&&se()===2&&setTimeout(nr,500),te==="cvcpu"&&setTimeout(nr,500)}function _s(_){if(!Yt.has(_)||Zt)return;Zt=_;let g=se(),A=new Set(N.map(k=>k.y*t.w+k.x)),C=__(t,g,A),H=du(t,C);Re=new Set(H.map(k=>k.gy*t.w+k.gx)),Tu(H),gi()}function pn(_,g){if(!Zt)return;let A=se(),C=g*t.w+_;if(!Re.has(C))return;let H=Fe[Zt],k={id:st++,player:A,x:_,y:g,level:1,name:H.name,class:Zt,hairColor:(Ka[Zt]||Ka.knight).hair,hp:H.hp,maxHp:H.maxHp,mp:H.mp,maxMp:H.maxMp,str:H.str,agi:H.agi,vit:H.vit,dex:H.dex,luk:H.luk,int:H.int,range:H.range};N.push(k),he(k);let G=$.get(k.id);G&&(G.rotation.y=k.player===1?Math.PI:0),Yt.delete(Zt),Zt=null,Re.clear(),nn();let z=document.getElementById("draft-placement-card");if(z&&(z.style.display="none",z.innerHTML=""),Dt++,Dt>=2*$a){Lr();return}let V=se(),nt=gs(),lt=document.getElementById("draft-panel"),bt=document.getElementById("draft-title"),Pt=document.getElementById("draft-message"),rt=document.getElementById("draft-classes"),Ht=document.getElementById("turn-player");lt&&bt&&rt&&Ht&&(lt.style.display="flex",bt.textContent=`Player ${V}: Pick a class (${nt}/${$a})`,Pt&&(Pt.textContent="Get ready\u2026"),rt.innerHTML="",Ht.textContent=`Draft: Player ${V} \u2014 pick a class`),setTimeout(gi,1500)}function we(){we._pending||(we._pending=!0,requestAnimationFrame(()=>{we._pending=!1,Qs()}))}function Qs(){let _=we._cache||(we._cache={}),g=_.turnEl||(_.turnEl=document.getElementById("turn-player")),A=_.menuLabel||(_.menuLabel=document.getElementById("menu-label")),C=_.turnMenu||(_.turnMenu=document.getElementById("turn-menu")),H=_.unitInfo||(_.unitInfo=document.getElementById("unit-info")),k=_.unitNameEl||(_.unitNameEl=document.getElementById("unit-name")),G=_.unitLevelClassEl||(_.unitLevelClassEl=document.getElementById("unit-level-class")),z=_.unitStatsEl||(_.unitStatsEl=document.getElementById("unit-stats")),V=_.unitClassImageEl||(_.unitClassImageEl=document.getElementById("unit-class-image"));if(oe==="playing"&&N.forEach(rt=>{if(rt.hp<=0)return;let Ht=$.get(rt.id);Ht&&Z(Ht,rt.maxHp>0&&rt.hp/rt.maxHp<Se)}),C.classList.remove("player-1","player-2"),C.classList.add(at===1?"player-1":"player-2"),C.classList.toggle("level-2",!1),C.classList.toggle("level-3",!1),oe==="playing"&&Ft.length>0){let rt=Ft[It];N.find(Ce=>Ce.id===rt&&Ce.hp>0)&&(ft==null||!N.find(Ce=>Ce.id===ft&&Ce.hp>0))&&(ft=rt)}if(ft!=null){let rt=N.find(Ht=>Ht.id===ft);if(rt&&rt.hp>0){H.classList.remove("no-unit");let Ht=rt.maxHp>0&&rt.hp/rt.maxHp<.25;C.classList.toggle("low-hp",Ht),C.classList.toggle("level-2",rt.level>=2&&rt.level<3),C.classList.toggle("level-3",rt.level>=3),k.textContent=rt.name,G.textContent=`Lv.${rt.level} ${rt.class}`,V.src=Pr[rt.class]||"",V.alt=rt.name,z.innerHTML=[["HP",`${rt.hp}/${rt.maxHp}`],["MP",`${rt.mp}/${rt.maxMp}`],["STR",xt(rt,"str")],["AGI",xt(rt,"agi")],["VIT",xt(rt,"vit")],["DEX",xt(rt,"dex")],["LUK",xt(rt,"luk")],["INT",xt(rt,"int")]].map(([Ce,De])=>`<span>${Ce}</span><span class="stat-val${Ce==="HP"?" stat-val-hp":""}">${De}</span>`).join("")}else C.classList.remove("low-hp","level-2","level-3"),H.classList.add("no-unit"),k.textContent="\u2014 Select a unit \u2014",G.textContent="",z.textContent="",V.src="",V.alt=""}else C.classList.remove("low-hp","level-2","level-3"),H.classList.add("no-unit"),k.textContent="\u2014 Select a unit \u2014",G.textContent="",z.textContent="",V.src="",V.alt="";if(ft!=null)g.textContent=`Player ${at} \u2014 Unit ${k.innerHTML} active`;else{let rt=Ft.length?N.find(Ht=>Ht.id===Ft[It]):null;g.textContent=rt?`${rt.name} (Player ${at})`:`Player ${at}`}A.textContent=`Player ${at}`;let nt=_.btnAttack||(_.btnAttack=document.getElementById("btn-attack")),lt=_.btnSkill||(_.btnSkill=document.getElementById("btn-skill")),bt=_.btnSpell||(_.btnSpell=document.getElementById("btn-spell")),Pt=_.btnEnd||(_.btnEnd=document.getElementById("btn-end"));if(te==="cvcpu"&&oe==="playing")nt.disabled=!0,lt.disabled=!0,bt.disabled=!0,Pt&&(Pt.disabled=!0),g.textContent=`Player ${at} (CPU)`;else if(Xe)nt.disabled=!0,lt.disabled=!0,bt.disabled=!0,g.textContent="Click on map to choose facing direction";else if(oe==="playing"){nt.disabled=me;let rt=Ft.length?Ft[It]:null,Ht=rt?N.find(Ae=>Ae.id===rt&&Ae.hp>0):null,Ce=te!=="cvcpu"&&(te!=="pvcpu"||at===1),De=Ce&&Ht&&!me?Nr(Ht):[];lt.disabled=me||!Ce||De.length===0,bt.disabled=!1,Pt&&(Pt.disabled=!1)}if(oe==="playing"){let rt=Math.min(ae+1,ps);g.textContent=(g.textContent||"")+` \u2014 Turn ${rt}/${ps}`;let Ht=_.turnsLeftEl||(_.turnsLeftEl=document.getElementById("turns-left")),Ce=_.turnsLeftValueEl||(_.turnsLeftValueEl=document.getElementById("turns-left-value"));if(Ht&&Ce){Ht.style.display="";let De=Math.max(0,ps-ae);Ce.textContent=String(De),Ht.classList.toggle("turns-left-low",De<=10)}}else{let rt=_.turnsLeftEl||(_.turnsLeftEl=document.getElementById("turns-left"));rt&&(rt.style.display="none")}oe==="playing"&&so(at)&&!Bt&&setTimeout(on,700)}function Le(){an(),jt(),be=!1,Pe=!1,Ie=null,Xe=!1,Je=[],si(),nn();let _=Ft.length;if(_===0)return;let g=Ft[It],A=N.find(V=>V.id===g);if(A&&A.tempDebuff&&A.tempDebuff.duration--,A&&A.tempDebuff&&A.tempDebuff.duration<=0&&(A.tempDebuff=void 0),A&&A.tempBuff&&A.tempBuff.duration--,A&&A.tempBuff&&A.tempBuff.duration<=0&&(A.tempBuff=void 0),A&&A.hp>0){let V=Math.ceil(xt(A,"int")*.15);A.mp=Math.min(A.maxMp,A.mp+V)}if(A&&A.hp>0){let V=A.x,nt=A.y;t.type[nt][V]===Kt.CENTER&&A.level===1&&Ke(A);let lt=A.player===1?Kt.BASE_TOP:Kt.BASE_BOTTOM;t.type[nt][V]===lt&&A.level===2&&Ke(A)}if(ae++,ae>=ps){Nu();return}let C=(It+1)%_,H=0;for(;H<_;){let V=Ft[C],nt=N.find(lt=>lt.id===V);if(nt&&nt.hp>0)break;C=(C+1)%_,H++}It=C;let k=N.find(V=>V.id===Ft[It]);at=k?k.player:1,ye=!1,me=!1,ft=Ft[It];let G=Ft[It];Ft=fi();let z=Ft.indexOf(G);It=z>=0?z:0,we(),Qt(),ne()}document.getElementById("btn-attack").addEventListener("click",()=>{if(Bt||me||oe!=="playing"||Ft.length===0)return;jt();let _=Ft[It],g=N.find(H=>H.id===_);if(!g||g.hp<=0)return;let A=g.range!=null?g.range:1;ft=_,be=!0;let C=fu(t,g.x,g.y,A);D=new Map,C.forEach((H,k)=>{let G=k%t.w,z=Math.floor(k/t.w);ms(t,g.x,g.y,G,z)&&D.set(k,H)}),wu(D),we()}),document.getElementById("btn-skill").addEventListener("click",_=>{if(_.preventDefault(),_.stopPropagation(),Bt||me)return;let g=Ft[It],A=g?N.find(z=>z.id===g&&z.hp>0):null;if(!A||A.player!==at)return;let C=document.getElementById("skill-list-overlay"),H=document.getElementById("btn-skill");if(!H)return;if(C&&C.style.display==="block"){C.style.display="none";return}let k=Nr(A),G=H.getBoundingClientRect();C||(C=document.createElement("div"),C.id="skill-list-overlay",C.className="skill-list-overlay",C.setAttribute("aria-hidden","true"),document.body.appendChild(C)),C.style.left=`${G.left}px`,C.style.top=`${G.top-4}px`,C.style.transform="translateY(-100%)",C.style.right="auto",C.style.bottom="auto",C.style.display="none",k.length===0?C.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(C.innerHTML=k.map((z,V)=>`<button type="button" class="skill-option" data-skill-index="${V}" ${z.disabled?"disabled":""}>
          <span class="skill-name">${z.name}</span> <span class="skill-meta">${z.cost} MP \xB7 Lv.${z.level}</span><br/>
          <span class="skill-meta">${z.description}</span>
        </button>`).join(""),C.querySelectorAll(".skill-option").forEach((z,V)=>{z.addEventListener("click",nt=>{nt.preventDefault(),nt.stopPropagation();let lt=k[V];if(Ie=lt,C.style.display="none",C.setAttribute("aria-hidden","true"),lt.target==="self"){if(A.mp<lt.cost)return;A.mp-=lt.cost,me=!0,Ur(A,A,lt,{showFloatingCombatText:Xn,handleUnitDeath:bn,updateUnitSlashVisibility:Gt,updateTurnUI:we},()=>{nn(),Pe=!1,Ie=null,xs=new Set,ye?Le():we()}),we();return}if(lt.target==="ally"&&ir(A,lt,N).filter(rt=>rt.targetUnit&&rt.targetUnit.id!==A.id).length===0&&A.mp>=lt.cost){A.mp-=lt.cost,me=!0,Ur(A,A,lt,{showFloatingCombatText:Xn,handleUnitDeath:bn,updateUnitSlashVisibility:Gt,updateTurnUI:we},()=>{nn(),Pe=!1,Ie=null,xs=new Set,ye?Le():we()}),we();return}Pe=!0,be=!1,Eu(A,lt),we()})})),requestAnimationFrame(()=>{C.style.display="block",C.style.visibility="visible",C.setAttribute("aria-hidden","false")})}),document.addEventListener("click",_=>{let g=document.getElementById("skill-list-overlay"),A=document.getElementById("btn-skill"),C=document.querySelector(".skill-wrap");!g||g.style.display!=="block"||C&&C.contains(_.target)||g.contains(_.target)||(g.style.display="none",g.setAttribute("aria-hidden","true"))}),document.getElementById("btn-spell").addEventListener("click",()=>{}),document.getElementById("btn-end").addEventListener("click",()=>{if(Bt||Xe||oe!=="playing"||Ft.length===0)return;let _=Ft[It],g=N.find(C=>C.id===_);if(!g||g.hp<=0)return;Xe=!0,ft=null,be=!1,D=new Map,nn(),hn(),Qt();let A=document.getElementById("turn-player");A.textContent="Click on map to choose facing direction",we()}),c.set(0,8,0),a.position.copy(c).add(l),a.lookAt(c);let Pi=document.getElementById("mode-select-overlay"),Dr=document.getElementById("mode-pvp"),tr=document.getElementById("mode-pvcpu"),eo=document.getElementById("mode-cvcpu"),er=document.getElementById("ai-draft-preference"),ql=document.getElementById("mode-select-ai-draft");ql&&(ql.style.display=hu?"":"none"),er&&(f_.forEach(_=>{let g=document.createElement("option");g.value=_.value,g.textContent=_.label,er.appendChild(g)}),er.value=le,er.addEventListener("change",()=>{le=er.value}));let Ii=new Audio;Ii.loop=!0,Ii.volume=.3,Ii.preload="auto";let no=window.location.href.replace(/[^/]*$/,""),Yl=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:no+(no.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Ii.src=Yl,Ii.addEventListener("error",()=>{let _=no+"assets/music/tavern.mp3";_!==Yl&&(Ii.src=_)});function io(){Ii.paused&&Ii.play().catch(()=>{})}Pi&&Dr&&tr?(Dr.addEventListener("click",()=>{io(),te="pvp",Pi.classList.add("hidden"),He()}),tr.addEventListener("click",()=>{io(),te="pvcpu",Pi.classList.add("hidden"),He()}),eo&&(hu?eo.addEventListener("click",()=>{io(),te="cvcpu",Pi.classList.add("hidden"),He()}):eo.style.display="none")):He();function so(_){return te==="pvcpu"&&_===2||te==="cvcpu"}function xu(){let _=Za.filter(k=>Yt.has(k));if(_.length===0)return null;let g=le||"balanced";if(g==="random")return _[Math.floor(Math.random()*_.length)];if(g==="custom")return p_.filter(G=>Yt.has(G))[0]??_[0]??null;let A=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function C(k){let G=Fe[k];if(!G)return 1/0;let z=A.map(nt=>G[nt]??0),V=z.reduce((nt,lt)=>nt+lt,0)/z.length;return z.reduce((nt,lt)=>nt+(lt-V)**2,0)/z.length}return g==="tanky"?[..._].sort((G,z)=>{let V=Fe[G]?.hp??0,nt=Fe[z]?.hp??0;return nt!==V?nt-V:(Fe[z]?.vit??0)-(Fe[G]?.vit??0)})[0]??null:g==="aggressive"?[..._].sort((G,z)=>{let V=Fe[G]?.str??0,nt=Fe[z]?.str??0;return nt!==V?nt-V:(Fe[z]?.agi??0)-(Fe[G]?.agi??0)})[0]??null:g==="scout"?[..._].sort((G,z)=>{let V=Fe[G]?.agi??0,nt=Fe[z]?.agi??0;return nt!==V?nt-V:(Fe[z]?.dex??0)-(Fe[G]?.dex??0)})[0]??null:g==="ranged"?[..._].sort((G,z)=>{let V=Fe[G]?.range??0,nt=Fe[z]?.range??0;return nt!==V?nt-V:(Fe[z]?.dex??0)-(Fe[G]?.dex??0)})[0]??null:g==="caster"?[..._].sort((G,z)=>{let V=Fe[G]?.int??0,nt=Fe[z]?.int??0;return nt!==V?nt-V:(Fe[z]?.mp??0)-(Fe[G]?.mp??0)})[0]??null:[..._].sort((k,G)=>{let z=Fe[k]?.hp??0,V=Fe[G]?.hp??0;return V!==z?V-z:C(k)-C(G)})[0]??null}function nr(){if(oe!=="draft"||!so(se()))return;if(!Zt){let A=xu();A&&_s(A),setTimeout(nr,500);return}let _=Array.from(Re).map(A=>({gx:A%t.w,gy:Math.floor(A/t.w)})),g=du(t,_);if(g.length>0){let{gx:A,gy:C}=g[0];pn(A,C)}}function $l(){let _=[];for(let g=0;g<t.h;g++)for(let A=0;A<t.w;A++)t.type[g][A]===Kt.CENTER&&_.push({gx:A,gy:g});return _}function yu(_){let g=[],A=_===1?Kt.BASE_TOP:Kt.BASE_BOTTOM;for(let C=0;C<t.h;C++)for(let H=0;H<t.w;H++)t.type[C][H]===A&&g.push({gx:H,gy:C});return g}function $n(_,g,A,C){return Math.abs(_-A)+Math.abs(g-C)}function vu(_){let g=_.range!=null?_.range:1,A=[];for(let C of N){if(C.hp<=0||C.player===_.player)continue;let H=$n(_.x,_.y,C.x,C.y);H<=g&&H>0&&ms(t,_.x,_.y,C.x,C.y)&&A.push({target:C,dist:H})}return A}function Mu(_){let g=N.filter(A=>A.hp>0&&A.player===_.player&&A.id!==_.id);for(let A of g){let C=N.filter(H=>H.hp>0&&H.player!==_.player);for(let H of C){let k=H.range!=null?H.range:1,G=$n(H.x,H.y,A.x,A.y);if(G<=k&&G>0&&ms(t,H.x,H.y,A.x,A.y))return!0}}return!1}function je(_,g,A,C){let H=_.x,k=_.y,G=Ji(t,_.x,_.y,g,A,N,_);if(!G||G.length<=1){C&&C();return}ft=null,nn(),Bt=!0,q(_.id),an();let z=$.get(_.id),V=1;function nt(){if(V>=G.length){_.x=G[G.length-1].x,_.y=G[G.length-1].y,Bt=!1,re(z),q(),D=new Map,ye=!0,C&&C();return}let lt=G[V-1],bt=G[V],Pt=pt(lt.x,lt.y).clone(),rt=pt(bt.x,bt.y).clone(),Ht=rt.x-Pt.x,Ce=rt.z-Pt.z;Ht*Ht+Ce*Ce>1e-6&&(z.rotation.y=Math.atan2(Ht,Ce));let De=performance.now(),Ae=0;function qe(ln){Ae++,Ae%2===0&&an();let sn=Math.min(1,(ln-De)/cu),Ye=(Ve=>Ve*Ve*(3-2*Ve))(sn);z.position.lerpVectors(Pt,rt,Ye),Vt(z,Ye),sn<1?requestAnimationFrame(qe):(V++,nt())}requestAnimationFrame(qe)}nt()}function Zl(_,g){let A=xt(g,"agi")*.7+xt(g,"luk")*.3,H=Math.random()*Math.max(.001,A)<=xt(_,"dex"),k=0;if(H){let Ne=xt(_,"str")*.7+xt(_,"dex")*.2+xt(_,"int")*.1-(xt(g,"vit")*.3+xt(g,"luk")*.2);k=Math.max(1,Math.floor(Ne))}me=!0,ft=null,be=!1,nn(),console.log("[ATTACK]",`${_.name} (${_.class}, P${_.player})`,"\u2192",`${g.name} (${g.class}, P${g.player})`,H?`${k} dmg`:"MISS",`| ${g.name} HP ${g.hp} \u2192 ${Math.max(0,g.hp-k)}/${g.maxHp}`);let G=$.get(_.id);if(!G||!G.userData.rightArm){H?(g.hp=Math.max(0,g.hp-k),Xn(g.x,g.y,String(k),!1),Gt(g),g.hp<=0&&bn(g)):Xn(g.x,g.y,"MISS",!0),setTimeout(ye?()=>Le():()=>we(),400);return}let z=pt(_.x,_.y).clone(),V=pt(g.x,g.y).clone(),nt=z.clone().lerp(V,.35),lt=V.x-z.x,bt=V.z-z.z;if(lt*lt+bt*bt>1e-6&&(G.rotation.y=Math.atan2(lt,bt)),(_.range!=null?_.range:1)>2){let Et=function(ee){St++,St%2===0&&an();let Jt=ee-_t,kt=Math.min(1,Jt/R);if(Ee.position.lerpVectors(ut,ht,kt),!ot&&kt>=1&&(ot=!0,n.remove(Ee),Ne.dispose(),Ge.dispose(),H?(g.hp=Math.max(0,g.hp-k),Xn(g.x,g.y,String(k),!1),g.hp<=0&&(yt=!0),$.get(g.id)?gt=ee:yt&&(bn(g),yt=!1),Gt(g)):Xn(g.x,g.y,"MISS",!0)),gt!=null&&H){let Wt=$.get(g.id);if(Wt){let xn=Math.min(1,(ee-gt)/fe),ve=1-xn;Ui.copy(_n).multiplyScalar(En*ve),Wt.position.copy(gn).add(Ui),xn>=1&&(Wt.position.copy(gn),gt=null,yt&&(bn(g),yt=!1))}else gt=null,yt&&(bn(g),yt=!1)}if(kt<1)requestAnimationFrame(Et);else{let Wt=gt==null;Wt&&yt&&(bn(g),yt=!1),Wt?(Sn.shadowMap.enabled=!0,setTimeout(ye?()=>Le():()=>we(),400)):requestAnimationFrame(Et)}},Ne=new Zi(.035,.035,.4,6),Ge=new rn({color:16763972}),Ee=new ce(Ne,Ge);Ee.position.copy(z),Ee.position.y+=.6;let un=V.clone().sub(z).normalize();Ee.quaternion.setFromUnitVectors(new F(0,1,0),un),n.add(Ee);let gn=pt(g.x,g.y).clone(),_n=V.clone().sub(z).normalize(),En=.4,ot=!1,gt=null,yt=!1,ut=Ee.position.clone(),ht=V.clone();ht.y+=.6;let _t=performance.now(),St=0;Sn.shadowMap.enabled=!1,requestAnimationFrame(Et);return}let Ht=!1,Ce=performance.now(),De=G.userData.rightArm,Ae=null,qe=!1,ln=pt(g.x,g.y).clone(),sn=V.clone().sub(z).normalize(),mn=.4,Ye=0;function Ve(Ne){Ye++,Ye%2===0&&an();let Ge=Ne-Ce,Ee=Math.min(1,Ge/Xt),un=Ee<=.4?Ee/.4:1,gn=Ee>.4?(Ee-.4)/.6:0;Ee<=.4?G.position.lerpVectors(z,nt,un):G.position.lerpVectors(nt,z,gn);let _n=Ee<=.35?Ee/.35:Ee<=.7?(.7-Ee)/.35:0;if(De.rotation.y=-_n*1.1,!Ht&&Ee>=ke&&(Ht=!0,H?(g.hp=Math.max(0,g.hp-k),Xn(g.x,g.y,String(k),!1),g.hp<=0&&(qe=!0),Gt(g),$.get(g.id)?Ae=Ne:qe&&(bn(g),qe=!1)):Xn(g.x,g.y,"MISS",!0)),Ae!=null&&H){let En=$.get(g.id);if(En){let ot=Math.min(1,(Ne-Ae)/fe),gt=1-ot;Ui.copy(sn).multiplyScalar(mn*gt),En.position.copy(ln).add(Ui),ot>=1&&(En.position.copy(ln),Ae=null,qe&&(bn(g),qe=!1))}else Ae=null,qe&&(bn(g),qe=!1)}if(Ee<1)requestAnimationFrame(Ve);else{G.position.copy(z),De.rotation.y=0;let En=Ae==null;En&&qe&&(bn(g),qe=!1),En?(Sn.shadowMap.enabled=!0,setTimeout(ye?()=>Le():()=>we(),400)):requestAnimationFrame(Ve)}}Sn.shadowMap.enabled=!1,requestAnimationFrame(Ve)}function Su(_,g){let A=pt(_,g);A.y+=.4;let C=new us(.1,12,12),H=new rn({color:8930559,transparent:!0,opacity:.9}),k=new ce(C,H);k.position.copy(A),n.add(k);let G=performance.now(),z=0;function V(nt){z++,z%2===0&&an();let lt=nt-G,bt=Math.min(1,lt/S),Pt=bt*(2-bt);k.scale.setScalar(Pt*4.5),H.opacity=.9*(1-bt),bt<1?requestAnimationFrame(V):(n.remove(k),C.dispose(),H.dispose())}requestAnimationFrame(V)}function Ur(_,g,A,C,H){if(A.target==="enemy"&&g==null){C.updateTurnUI&&C.updateTurnUI(),H&&H();return}let G=(A.range??0)>2&&g!=null&&(g.x!==_.x||g.y!==_.y),z=!G&&g!=null&&(g.x!==_.x||g.y!==_.y);if(!G&&!z){Ja(A.effectKey,_,g,C),C.updateTurnUI&&C.updateTurnUI(),H&&H();return}if(z){let ee=function(Jt){Et++,Et%2===0&&an();let kt=Jt-St,Wt=Math.min(1,kt/Xt),xn=Wt<=.4?Wt/.4:1,ve=Wt>.4?(Wt-.4)/.6:0;Wt<=.4?Ne.position.lerpVectors(Ge,un,xn):Ne.position.lerpVectors(un,Ge,ve);let Ue=Wt<=.35?Wt/.35:Wt<=.7?(.7-Wt)/.35:0;if(yt.rotation.y=-Ue*1.1,!ut&&Wt>=ke&&(ut=!0,Ja(A.effectKey,_,g,C),g.hp<=0&&(_t=!0),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g),$.get(g.id)&&A.target!=="ally"?ht=Jt:_t&&(bn(g),_t=!1)),ht!=null){let $e=$.get(g.id);if($e){let Qe=Math.min(1,(Jt-ht)/fe),yn=1-Qe;Ui.copy(ot).multiplyScalar(gt*yn),$e.position.copy(En).add(Ui),Qe>=1&&($e.position.copy(En),ht=null,_t&&(bn(g),_t=!1))}else ht=null,_t&&(bn(g),_t=!1)}Wt<1?requestAnimationFrame(ee):(Ne.position.copy(Ge),yt.rotation.y=0,ht==null&&_t&&(bn(g),_t=!1),ht==null?(Sn.shadowMap.enabled=!0,C.updateTurnUI&&C.updateTurnUI(),H&&H()):requestAnimationFrame(ee))},Ne=$.get(_.id);if(!Ne||!Ne.userData.rightArm){Ja(A.effectKey,_,g,C),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g),C.updateTurnUI&&C.updateTurnUI(),H&&H();return}let Ge=pt(_.x,_.y).clone(),Ee=pt(g.x,g.y).clone(),un=Ge.clone().lerp(Ee,.35),gn=Ee.x-Ge.x,_n=Ee.z-Ge.z;gn*gn+_n*_n>1e-6&&(Ne.rotation.y=Math.atan2(gn,_n));let En=pt(g.x,g.y).clone(),ot=Ee.clone().sub(Ge).normalize(),gt=.4,yt=Ne.userData.rightArm,ut=!1,ht=null,_t=!1,St=performance.now(),Et=0;Sn.shadowMap.enabled=!1,requestAnimationFrame(ee);return}let V=pt(_.x,_.y).clone(),nt=pt(g.x,g.y).clone(),lt=new Zi(.035,.035,.4,6),bt=new rn({color:16763972}),Pt=new ce(lt,bt);Pt.position.copy(V),Pt.position.y+=.6;let rt=nt.clone().sub(V).normalize();Pt.quaternion.setFromUnitVectors(new F(0,1,0),rt),n.add(Pt);let Ht=Pt.position.clone(),Ce=nt.clone();Ce.y+=.6;let De=performance.now(),Ae=pt(g.x,g.y).clone(),qe=nt.clone().sub(V).normalize(),ln=.4,sn=!1,mn=null,Ye=0;function Ve(Ne){Ye++,Ye%2===0&&an();let Ge=Ne-De,Ee=Math.min(1,Ge/R);if(Pt.position.lerpVectors(Ht,Ce,Ee),!sn&&Ee>=1&&(sn=!0,n.remove(Pt),lt.dispose(),bt.dispose(),A.type==="spell"&&Su(g.x,g.y),Ja(A.effectKey,_,g,C),$.get(g.id)&&g.hp>0&&(mn=Ne),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g)),mn!=null){let un=$.get(g.id);if(un){let gn=Math.min(1,(Ne-mn)/fe),_n=1-gn;Ui.copy(qe).multiplyScalar(ln*_n),un.position.copy(Ae).add(Ui),gn>=1&&(un.position.copy(Ae),mn=null)}else mn=null}Ee<1?requestAnimationFrame(Ve):mn==null?(Sn.shadowMap.enabled=!0,C.updateTurnUI&&C.updateTurnUI(),H&&H()):requestAnimationFrame(Ve)}Sn.shadowMap.enabled=!1,requestAnimationFrame(Ve)}function on(){if(oe!=="playing"||!so(at)||Bt||Ft.length===0)return;let _=Ft[It],g=N.find(ot=>ot.id===_);if(!g||g.hp<=0)return;let A=ja(t,g.x,g.y,xt(g,"agi"),N,g),C=[];A.forEach((ot,gt)=>{if(ot===0)return;let yt=gt%t.w,ut=Math.floor(gt/t.w);N.some(_t=>_t.id!==g.id&&_t.x===yt&&_t.y===ut&&_t.hp>0)||C.push({gx:yt,gy:ut,dist:ot})});let H=vu(g),k=$l(),G=yu(g.player),z=.25,V=.03,nt=g.maxHp>0&&g.hp/g.maxHp<z,lt=g.maxHp>0&&g.hp/g.maxHp<V,bt=g.level===2,Pt=ot=>N.some(gt=>gt.hp>0&&gt.x===ot.gx&&gt.y===ot.gy&&gt.id!==g.id),rt=k.filter(ot=>!Pt(ot)),Ht=G.filter(ot=>!Pt(ot)),Ce=Nr(g).filter(ot=>!ot.disabled&&g.mp>=ot.cost&&ot.target==="enemy"),De=Ce.length>0?Math.max(...Ce.map(ot=>ot.range||0)):0,Ae=Math.max(g.range!=null?g.range:1,De);function qe(ot,gt){if(gt.length===0)return null;let yt=null,ut=1/0;for(let ht of ot){let _t=0;for(let St of gt)_t+=$n(ht.gx,ht.gy,St.gx,St.gy);_t<ut&&(ut=_t,yt=ht)}return yt}function ln(ot,gt){if(gt.length===0||ot.length===0)return null;let yt=null,ut=1/0;for(let ht of ot){let _t=Math.min(...gt.map(St=>$n(ht.gx,ht.gy,St.gx,St.gy)));_t<ut&&(ut=_t,yt=ht)}return yt}function sn(ot,gt){let yt=Ae,ut=[];for(let ht of N){if(ht.hp<=0||ht.player===g.player)continue;let _t=$n(ot,gt,ht.x,ht.y);_t<=yt&&_t>0&&ms(t,ot,gt,ht.x,ht.y)&&ut.push({target:ht,dist:_t})}return ut}let mn=new Set(C.map(ot=>ot.gy*t.w+ot.gx));function Ye(ot,gt){if(!ot||ot.length<=1)return null;let yt=Math.min(gt,ot.length-1);for(let ut=yt;ut>=1;ut--){let ht=ot[ut],_t=ht.y*t.w+ht.x;if(mn.has(_t))return{gx:ht.x,gy:ht.y}}return null}function Ve(ot,gt){if(!ot||ot.length<=1)return null;let yt=Math.min(gt,ot.length-1);for(let ut=yt;ut>=1;ut--){let ht=ot[ut];if(!N.some(St=>St.id!==g.id&&St.hp>0&&St.x===ht.x&&St.y===ht.y))return{gx:ht.x,gy:ht.y}}return null}function Ne(ot){let gt=null,yt=null,ut=1/0;for(let ht of ot){let _t=Ji(t,g.x,g.y,ht.gx,ht.gy,N,g);_t&&_t.length>1&&_t.length<ut&&(ut=_t.length,gt=_t,yt=ht)}return gt&&yt?{path:gt,target:yt}:null}function Ge(ot){let gt=ot??C;if(gt.length===0)return null;let yt=N.filter(_t=>_t.hp>0&&_t.player!==g.player);if(yt.length===0)return gt[0];let ut=null,ht=-1;for(let _t of gt){let St=Math.min(...yt.map(Et=>$n(_t.gx,_t.gy,Et.x,Et.y)));St>ht&&(ht=St,ut=_t)}return ut}function Ee(ot){let gt=ot??C;if(gt.length===0)return null;let yt=N.filter(Et=>Et.hp>0&&Et.player!==g.player),ut=N.filter(Et=>Et.hp>0&&Et.player===g.player&&Et.id!==g.id);if(yt.length===0)return gt[0];let ht=g.maxHp>0&&g.hp/g.maxHp>=.6,_t=null,St=-1/0;for(let Et of gt){let ee=Math.min(...yt.map(Wt=>$n(Et.gx,Et.gy,Wt.x,Wt.y))),Jt=ut.length>0?Math.min(...ut.map(Wt=>$n(Et.gx,Et.gy,Wt.x,Wt.y))):999,kt;ht?kt=Jt<ee?ee-1e3:ee:kt=ee-Jt,kt>St&&(St=kt,_t=Et)}return _t}function un(){let ot=Ae,gt=N.filter(ht=>ht.hp>0&&ht.player!==g.player);if(gt.length===0)return null;let yt=null,ut=-1;for(let ht of C){let _t=Math.min(...gt.map(Et=>$n(ht.gx,ht.gy,Et.x,Et.y)));gt.some(Et=>$n(ht.gx,ht.gy,Et.x,Et.y)<=ot)&&_t>ut&&(ut=_t,yt=ht)}return yt}if(me){if(ye){Le();return}if(ps-ae<=20&&k.length>0){let St=k.some(Et=>Et.gx===g.x&&Et.gy===g.y);if(St&&C.length>0){let Et=new Set(k.map(kt=>kt.gy*t.w+kt.gx)),Jt=C.filter(kt=>Et.has(kt.gy*t.w+kt.gx)).filter(kt=>kt.gx!==g.x||kt.gy!==g.y);if(Jt.length>0){let kt=Ge(Jt);if(kt&&(kt.gx!==g.x||kt.gy!==g.y)){je(g,kt.gx,kt.gy,()=>setTimeout(Le,400));return}}Le();return}if(St){Le();return}if(C.length>0){let Et=rt.length>0?rt:k,ee=Ne(Et),Jt=ee?Ve(ee.path,xt(g,"agi")):null;if(Jt&&(Jt.gx!==g.x||Jt.gy!==g.y)){je(g,Jt.gx,Jt.gy,()=>setTimeout(Le,400));return}let kt=ln(C,Et);if(kt&&(kt.gx!==g.x||kt.gy!==g.y)){je(g,kt.gx,kt.gy,()=>setTimeout(Le,400));return}}Le();return}let gt=new Set(k.map(St=>St.gy*t.w+St.gx)),yt=k.length>0?C.filter(St=>gt.has(St.gy*t.w+St.gx)):null,ut=yt!=null&&yt.length>0?yt:C,ht=N.filter(St=>St.hp>0&&St.player===g.player&&St.id!==g.id),_t=null;if(ut.length>0&&ht.length>0&&(_t=Ee(ut),_t)){let St=Ji(t,g.x,g.y,_t.gx,_t.gy,N,g),Et=St?St.length-1:1/0;(!St||St.length<=1||Et>xt(g,"agi"))&&(_t=Ge(ut))}if(!_t&&ut.length>0&&(_t=Ge(ut)),_t&&(_t.gx!==g.x||_t.gy!==g.y)){je(g,_t.gx,_t.gy,()=>setTimeout(Le,400));return}Le();return}if(lt&&ps-ae>20&&!ye&&C.length>0){let ot=null,gt=1/0;for(let ut of C){let _t=sn(ut.gx,ut.gy).filter(St=>St.target.maxHp>0&&St.target.hp/St.target.maxHp<z);if(_t.length>0){let St=Math.min(..._t.map(Et=>Et.target.hp));St<gt&&(gt=St,ot=ut)}}if(ot){let ut=Ji(t,g.x,g.y,ot.gx,ot.gy,N,g),ht=ut?Ye(ut,xt(g,"agi")):null;if(ht&&(ht.gx!==g.x||ht.gy!==g.y)){je(g,ht.gx,ht.gy,()=>setTimeout(on,600));return}}let yt=Ge();if(yt&&(yt.gx!==g.x||yt.gy!==g.y)){je(g,yt.gx,yt.gy,()=>setTimeout(on,600));return}Le();return}if(!me){let ee=function(ve){return ir(g,ve,N).filter($e=>$e.targetUnit!=null).map($e=>$e.targetUnit)},ot=Nr(g),gt=g.maxHp>0?g.hp/g.maxHp:1,yt=.35,ut=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute"]),ht=new Set(["chakra"]),_t=new Set(["shieldWall","focus","bloodlust","iaido","howl","mantra"]),St=new Set(["freeze","impale"]),Et=new Set(["dominate","weaken","cripple","hex","blind"]),Jt={showFloatingCombatText:Xn,handleUnitDeath:bn,updateUnitSlashVisibility:Gt,updateTurnUI:we},kt=null,Wt=null;for(let ve of ot)if(!ve.disabled&&ut.has(ve.effectKey)){if(ve.effectKey==="feast"&&g.hp/g.maxHp>.7||ve.effectKey==="berserk"&&g.hp/g.maxHp<.25||ve.effectKey==="shuriken"&&H.length>0)continue;let Ue=ee(ve);if(Ue.length===0)continue;let $e=Ue.filter(Kn=>Kn.maxHp>0&&Kn.hp/Kn.maxHp<yt),Qe=(Kn,_i)=>xt(Kn,"int")-xt(_i,"int")||Kn.hp-_i.hp,yn=(Kn,_i)=>Kn.hp-_i.hp,Zn=$e.length>0?ve.type==="spell"?$e.sort(Qe)[0]:$e.sort(yn)[0]:ve.type==="spell"?Ue.sort(Qe)[0]:Ue.sort(yn)[0];kt=ve,Wt=Zn;break}if(!kt){for(let Ue of ot)if(!Ue.disabled&&ht.has(Ue.effectKey)){let Qe=ir(g,Ue,N).filter(yn=>yn.targetUnit&&yn.targetUnit.maxHp>0&&yn.targetUnit.hp/yn.targetUnit.maxHp<.5);if(Qe.length>0){let yn=Qe.sort((Zn,Kn)=>Zn.targetUnit.hp-Kn.targetUnit.hp)[0].targetUnit;kt=Ue,Wt=yn;break}}}if(!kt&&(H.length>0||C.some(Ue=>sn(Ue.gx,Ue.gy).length>0)))for(let Ue of ot){if(Ue.disabled||Ue.effectKey==="bloodlust"&&g.hp/g.maxHp>.8)continue;let $e=g.tempBuff&&g.tempBuff.duration>0;if(!(Ue.effectKey==="mantra"&&$e)&&_t.has(Ue.effectKey)){if(Ue.target==="self"&&!$e){kt=Ue,Wt=g;break}if(Ue.target==="ally"){let yn=ir(g,Ue,N).filter(Zn=>Zn.targetUnit!=null).map(Zn=>Zn.targetUnit);if(yn.length>0){let Zn=yn.filter(_i=>!_i.tempBuff||_i.tempBuff.duration<=0),Kn=(Zn.length>0?Zn:yn).sort((_i,Ou)=>_i.hp-Ou.hp)[0];kt=Ue,Wt=Kn;break}}}}let xn=H.some(ve=>ve.target.maxHp>0&&ve.target.hp/ve.target.maxHp<z);if(!kt&&!xn){for(let ve of ot)if(!ve.disabled&&Et.has(ve.effectKey)){let $e=ee(ve).sort((Qe,yn)=>Qe.hp-yn.hp)[0];kt=ve,Wt=$e;break}}if(!kt&&!xn){for(let ve of ot)if(!ve.disabled&&St.has(ve.effectKey)){let $e=ee(ve).filter(Qe=>!Qe.tempDebuff||Qe.tempDebuff.duration<=0);if($e.length>0){let Qe=$e.sort((yn,Zn)=>yn.hp-Zn.hp)[0];kt=ve,Wt=Qe;break}}}if(kt&&Wt){g.mp-=kt.cost,me=!0;let ve=kt.target==="self"?g:Wt;Ur(g,ve,kt,Jt,()=>setTimeout(on,600));return}}if(Mu(g)&&H.length>0){H.sort((gt,yt)=>gt.target.hp-yt.target.hp||gt.dist-yt.dist);let ot=H[0].target;Zl(g,ot);return}if(H.length>0){H.sort((gt,yt)=>gt.target.hp-yt.target.hp||gt.dist-yt.dist);let ot=H[0].target;Zl(g,ot);return}let gn=ps-ae;if(gn<=20&&k.length>0&&!ye&&C.length>0&&!k.some(gt=>gt.gx===g.x&&gt.gy===g.y)){let gt=rt.length>0?rt:k,yt=Ne(gt),ut=yt?yt.path:null,ht=(Wt,xn)=>Math.min(...k.map(ve=>$n(Wt,xn,ve.gx,ve.gy))),_t=ht(g.x,g.y),St=null,Et=-1,ee=z;for(let Wt of C){if(ht(Wt.gx,Wt.gy)>_t||sn(Wt.gx,Wt.gy).filter(Qe=>Qe.target.maxHp>0&&Qe.target.hp/Qe.target.maxHp<ee).length===0)continue;let Ue=ut?ut.findIndex(Qe=>Qe.x===Wt.gx&&Qe.y===Wt.gy):-1,$e=Ue>=0?Ue:0;$e>Et&&(Et=$e,St=Wt)}if(St&&(St.gx!==g.x||St.gy!==g.y)){je(g,St.gx,St.gy,()=>setTimeout(on,600));return}let Jt=yt?Ve(yt.path,xt(g,"agi")):null;if(Jt&&(Jt.gx!==g.x||Jt.gy!==g.y)){je(g,Jt.gx,Jt.gy,()=>setTimeout(on,600));return}let kt=ln(C,gt);if(kt&&(kt.gx!==g.x||kt.gy!==g.y)){je(g,kt.gx,kt.gy,()=>setTimeout(on,600));return}}if(nt&&C.length>0&&!ye){let ot=null,gt=1/0;for(let yt of C){let ht=sn(yt.gx,yt.gy).filter(_t=>_t.target.maxHp>0&&_t.target.hp/_t.target.maxHp<z);if(ht.length>0){let _t=Math.min(...ht.map(St=>St.target.hp));_t<gt&&(gt=_t,ot=yt)}}if(ot){let yt=Ji(t,g.x,g.y,ot.gx,ot.gy,N,g),ut=yt?Ye(yt,xt(g,"agi")):null;if(ut&&(ut.gx!==g.x||ut.gy!==g.y)){je(g,ut.gx,ut.gy,()=>setTimeout(on,600));return}}if(gn>20&&bt&&G.length>0&&!G.some(ut=>ut.gx===g.x&&ut.gy===g.y)){let ut=Ht.length>0?Ht:G,ht=Ne(ut);if(ht!=null&&ht.path.length<=5){let St=Ve(ht.path,xt(g,"agi"));if(St&&(St.gx!==g.x||St.gy!==g.y)){je(g,St.gx,St.gy,()=>setTimeout(on,600));return}let Et=ln(C,ut);if(Et&&(Et.gx!==g.x||Et.gy!==g.y)){je(g,Et.gx,Et.gy,()=>setTimeout(on,600));return}}}if(gn>20){let yt=Ge();if(yt&&$n(g.x,g.y,yt.gx,yt.gy)>0){je(g,yt.gx,yt.gy,()=>setTimeout(on,600));return}Le();return}}if(gn<=10&&k.length>0&&!ye&&C.length>0&&!k.some(gt=>gt.gx===g.x&&gt.gy===g.y)){let gt=rt.length>0?rt:k,yt=Ne(gt),ut=yt?Ve(yt.path,xt(g,"agi")):null;if(ut&&(ut.gx!==g.x||ut.gy!==g.y)){je(g,ut.gx,ut.gy,()=>setTimeout(on,600));return}let ht=ln(C,gt);if(ht&&(ht.gx!==g.x||ht.gy!==g.y)){je(g,ht.gx,ht.gy,()=>setTimeout(on,600));return}}if(g.level===1&&k.length>0&&!ye&&!k.some(gt=>gt.gx===g.x&&gt.gy===g.y)&&C.length>0){let gt=rt.length>0?rt:k,yt=Ne(gt),ut=yt?Ve(yt.path,xt(g,"agi")):null;if(ut&&(ut.gx!==g.x||ut.gy!==g.y)){je(g,ut.gx,ut.gy,()=>setTimeout(on,600));return}let ht=ln(C,gt);if(ht&&(ht.gx!==g.x||ht.gy!==g.y)){je(g,ht.gx,ht.gy,()=>setTimeout(on,600));return}}if(bt&&G.length>0&&!ye&&!G.some(gt=>gt.gx===g.x&&gt.gy===g.y)&&C.length>0){let yt=N.filter(Jt=>Jt.hp>0&&Jt.player!==g.player).filter(Jt=>Jt.maxHp>0&&Jt.hp/Jt.maxHp<z),ut=null,ht=1/0;for(let Jt of C){let Wt=sn(Jt.gx,Jt.gy).find(xn=>yt.some(ve=>ve.id===xn.target.id));Wt&&Wt.target.hp<ht&&(ht=Wt.target.hp,ut=Jt)}if(ut){let Jt=Ji(t,g.x,g.y,ut.gx,ut.gy,N,g),kt=Jt?Ye(Jt,xt(g,"agi")):null;if(kt&&(kt.gx!==g.x||kt.gy!==g.y)){je(g,kt.gx,kt.gy,()=>setTimeout(on,600));return}}let _t=Ht.length>0?Ht:G,St=Ne(_t),Et=St?Ve(St.path,xt(g,"agi")):null;if(Et&&(Et.gx!==g.x||Et.gy!==g.y)){je(g,Et.gx,Et.gy,()=>setTimeout(on,600));return}let ee=ln(C,_t);if(ee&&(ee.gx!==g.x||ee.gy!==g.y)){je(g,ee.gx,ee.gy,()=>setTimeout(on,600));return}}let _n=N.filter(ot=>ot.hp>0&&ot.player!==g.player);if(g.level>=2&&Ae>=2&&_n.length>0&&!ye&&C.length>0){let ot=un();if(ot&&(ot.gx!==g.x||ot.gy!==g.y)){je(g,ot.gx,ot.gy,()=>setTimeout(on,600));return}}if(_n.length>0&&!ye&&C.length>0){let gt=function(ut,ht){let _t=null;for(let St=-ot;St<=ot;St++)for(let Et=-ot;Et<=ot;Et++){if(Et===0&&St===0||Math.abs(Et)+Math.abs(St)>ot)continue;let ee=ut.x+Et,Jt=ut.y+St;if(ee<0||ee>=t.w||Jt<0||Jt>=t.h||!Ir(t,ee,Jt)||!ms(t,ee,Jt,ut.x,ut.y)||N.some(Ue=>Ue.hp>0&&Ue.x===ee&&Ue.y===Jt))continue;let Wt=Ji(t,g.x,g.y,ee,Jt,N,g),xn=Wt?Wt.length-1:1/0;Wt&&Wt.length>1&&(!ht||xn<=xt(g,"agi"))&&(!_t||Wt.length<_t.length)&&(_t=Wt)}return _t},ot=Ae,yt=[];for(let ut of _n){let ht=gt(ut,!0);ht&&yt.push({enemy:ut,path:ht})}if(yt.length>0){let ut=yt.filter(Et=>Et.enemy.maxHp>0&&Et.enemy.hp/Et.enemy.maxHp<z),ht=ut.length>0?ut:yt;ut.length>0?ht.sort((Et,ee)=>Et.enemy.hp-ee.enemy.hp||Et.path.length-ee.path.length):ht.sort((Et,ee)=>Et.path.length-ee.path.length||Et.enemy.hp-ee.enemy.hp);let _t=ht[0],St=Ye(_t.path,xt(g,"agi"));if(St&&(St.gx!==g.x||St.gy!==g.y)){je(g,St.gx,St.gy,()=>setTimeout(on,600));return}}if(yt.length===0){let ut=null,ht=1/0;for(let _t of _n){let St=gt(_t,!1);St&&St.length<ht&&(ht=St.length,ut=St)}if(ut){let _t=Ye(ut,xt(g,"agi"));if(_t&&(_t.gx!==g.x||_t.gy!==g.y)){je(g,_t.gx,_t.gy,()=>setTimeout(on,600));return}}}}Le()}function nn(){for(Wn.length=0;Ln.children.length;){let _=Ln.children[0];Ln.remove(_),_.geometry!==sr&&_.geometry!==rr&&_.geometry.dispose(),_.material.dispose()}an()}let xs=new Set;function Nr(_){return!_||!_.class?[]:uu[_.class]?uu[_.class].map(g=>({...g,disabled:g.disabled===!0||_.level<g.level||g.hpCost&&_.hp<g.hpCost||g.cost&&_.mp<g.cost})):[]}function ir(_,g,A){let C=[],H=(G,z,V,nt)=>Math.abs(G-V)+Math.abs(z-nt),k=g.range||0;if(g.target==="self")return C.push({gx:_.x,gy:_.y,targetUnit:null}),C;for(let G of A)G.hp<=0||H(_.x,_.y,G.x,G.y)>k||k>2&&!ms(t,_.x,_.y,G.x,G.y)||(g.target==="enemy"&&G.player!==_.player&&C.push({gx:G.x,gy:G.y,targetUnit:G}),g.target==="ally"&&G.player===_.player&&C.push({gx:G.x,gy:G.y,targetUnit:G}));return C}function bu(_,g){let A=g.range||0;if(g.target==="self")return[{gx:_.x,gy:_.y}];let C=fu(t,_.x,_.y,A),H=[];return C.forEach((k,G)=>{let z=G%t.w,V=G/t.w|0;A>2&&!ms(t,_.x,_.y,z,V)||H.push({gx:z,gy:V})}),H}function Eu(_,g){let A=ir(_,g,N);xs=new Set(A.map(H=>`${H.gx},${H.gy}`));let C=g.target==="self"?A:bu(_,g);nn(),C.forEach(({gx:H,gy:k})=>{let z=(Hn+t.height[k][H]*.35)/2+Hn/2,V=H*xe-it+xe/2,nt=k*xe-ct+xe/2,lt=z+.01,bt=new rn({color:8926122,transparent:!0,opacity:.4,side:cn}),Pt=new ce(sr,bt);Pt.rotation.x=-Math.PI/2,Pt.position.set(V,lt,nt),Ln.add(Pt),Wn.push(bt);let rt=new rn({color:11167436,transparent:!0,opacity:.7,side:cn}),Ht=new ce(rr,rt);Ht.rotation.x=-Math.PI/2,Ht.position.set(V,lt+.01,nt),Ht.userData.gx=H,Ht.userData.gy=k,Ln.add(Ht),Wn.push(rt)})}let Kl=.82,Jl=1.02,sr=new Ri(Jl,Jl),rr=new Ri(Kl,Kl);function Tu(_){nn(),_.forEach(({gx:g,gy:A})=>{let H=(Hn+t.height[A][g]*.35)/2+Hn/2,k=g*xe-it+xe/2,G=A*xe-ct+xe/2,z=H+.01,V=new rn({color:2271812,transparent:!0,opacity:.4,side:cn}),nt=new ce(sr,V);nt.rotation.x=-Math.PI/2,nt.position.set(k,z,G),Ln.add(nt),Wn.push(V);let lt=new rn({color:4508774,transparent:!0,opacity:.7,side:cn}),bt=new ce(rr,lt);bt.rotation.x=-Math.PI/2,bt.position.set(k,z+.01,G),bt.userData.gx=g,bt.userData.gy=A,Ln.add(bt),Wn.push(lt)}),an()}function ro(_){nn(),_.forEach((g,A)=>{if(g===0)return;let C=A%t.w,H=A/t.w|0,G=(Hn+t.height[H][C]*.35)/2+Hn/2,z=C*xe-it+xe/2,V=H*xe-ct+xe/2,nt=G+.01,lt=new rn({color:3381759,transparent:!0,opacity:.35,side:cn}),bt=new ce(sr,lt);bt.rotation.x=-Math.PI/2,bt.position.set(z,nt,V),Ln.add(bt),Wn.push(lt);let Pt=new rn({color:6730751,transparent:!0,opacity:.65,side:cn}),rt=new ce(rr,Pt);rt.rotation.x=-Math.PI/2,rt.position.set(z,nt+.01,V),Ln.add(rt),Wn.push(Pt)}),an()}function wu(_){nn(),_.forEach((g,A)=>{if(g===0)return;let C=A%t.w,H=A/t.w|0,G=(Hn+t.height[H][C]*.35)/2+Hn/2,z=C*xe-it+xe/2,V=H*xe-ct+xe/2,nt=G+.01,lt=new rn({color:10035746,transparent:!0,opacity:.4,side:cn}),bt=new ce(sr,lt);bt.rotation.x=-Math.PI/2,bt.position.set(z,nt,V),Ln.add(bt),Wn.push(lt);let Pt=new rn({color:13386820,transparent:!0,opacity:.7,side:cn}),rt=new ce(rr,Pt);rt.rotation.x=-Math.PI/2,rt.position.set(z,nt+.01,V),Ln.add(rt),Wn.push(Pt)}),an()}let Li=new Ga,Di=new Nt;function Or(_,g){let A=e.getBoundingClientRect();return Di.x=(_-A.left)/A.width*2-1,Di.y=-((g-A.top)/A.height)*2+1,{x:Di.x,y:Di.y}}function Au(_,g){if(Bt)return;Di.x=_,Di.y=g,Li.setFromCamera(Di,a);let A=Li.intersectObjects(W.children,!0);if(A.length===0)return;let C=null;for(let z of A){let V=z.object;for(;V&&(V.userData.gx==null||V.userData.gy==null);)V=V.parent;if(V&&V.userData.gx!=null){C=V;break}}if(!C||C.userData.gx==null)return;let H=C.userData.gx,k=C.userData.gy;if(oe==="draft"&&Zt){let z=k*t.w+H;Re.has(z)&&pn(H,k);return}if(oe!=="playing"||te==="cvcpu")return;if(Pe&&Ie){let z=Ft[It],V=N.find(rt=>rt.id===z&&rt.hp>0);if(V&&H===V.x&&k===V.y){Pe=!1,Ie=null,xs=new Set,nn(),ye?D=new Map:(D=ja(t,V.x,V.y,xt(V,"agi"),N,V),ro(D)),we();return}let nt=`${H},${k}`;if(!xs.has(nt))return;if(!V||V.mp<Ie.cost){Pe=!1,Ie=null,nn(),we();return}let lt=N.find(rt=>rt.x===H&&rt.y===k&&rt.hp>0);if(Ie.target==="enemy"&&(!lt||lt.player===V.player)||Ie.target==="ally"&&lt&&lt.player!==V.player||Ie.target==="self"&&(H!==V.x||k!==V.y)||Ie.target==="enemy"&&!lt)return;V.mp-=Ie.cost,me=!0;let bt={showFloatingCombatText:Xn,handleUnitDeath:bn,updateUnitSlashVisibility:Gt,updateTurnUI:we},Pt=Ie.target==="self"?V:lt||null;Ur(V,Pt,Ie,bt,()=>{nn(),Pe=!1,Ie=null,xs=new Set,ye?Le():we()});return}if(Xe){let z=Ft[It],V=N.find(lt=>lt.id===z),nt=$.get(z);if(V&&nt&&Je.length>0){let lt=pt(V.x,V.y),bt=pt(H,k),Pt=bt.x-lt.x,rt=bt.z-lt.z,Ht=Pt*Pt+rt*rt>1e-6?Math.atan2(Pt,rt):nt.rotation.y;nt.rotation.y=_e(Ht)}Le();return}if(ft!=null&&be){let z=N.find(lt=>lt.id===ft);if(!z||z.player!==at)return;let V=k*t.w+H,nt=N.find(lt=>lt.x===H&&lt.y===k&&lt.hp>0);if(nt&&nt.id===Ft[It]&&nt.player===at){be=!1,ft=nt.id,ye?(nn(),D=new Map):(D=ja(t,nt.x,nt.y,xt(nt,"agi"),N,nt),ro(D)),we();return}if(!D.has(V)||D.get(V)===0)return;if(nt&&nt.player!==at){let lt=xt(nt,"agi")*.7+xt(nt,"luk")*.3;if(Math.random()*Math.max(.001,lt)<=xt(z,"dex")){let rt=xt(z,"str")*.7+xt(z,"dex")*.1+xt(z,"int")*.07-(xt(nt,"vit")*.3+xt(nt,"luk")*.1),Ht=Math.max(1,Math.floor(rt));nt.hp=Math.max(0,nt.hp-Ht),Xn(nt.x,nt.y,String(Ht),!1),nt.hp<=0&&bn(nt),Gt(nt)}else Xn(nt.x,nt.y,"MISS",!0);me=!0,ft=null,be=!1,nn(),ye?Le():we()}return}let G=N.find(z=>z.x===H&&z.y===k&&z.hp>0);if(G){if(G.id===Ft[It]&&G.player===at){jt(),ft=G.id,be=!1,ye?(nn(),D=new Map):(D=ja(t,H,k,xt(G,"agi"),N,G),ro(D)),we();return}nn(),D=new Map,be=!1,Ct(G),we();return}if(jt(),ft!=null){let rt=function(){if(Pt>=lt.length){z.x=lt[lt.length-1].x,z.y=lt[lt.length-1].y,Bt=!1,re(bt),q(),D=new Map,ye=!0,me?Le():we();return}let Ht=lt[Pt-1],Ce=lt[Pt],De=pt(Ht.x,Ht.y).clone(),Ae=pt(Ce.x,Ce.y).clone(),qe=Ae.x-De.x,ln=Ae.z-De.z;qe*qe+ln*ln>1e-6&&(bt.rotation.y=Math.atan2(qe,ln));let sn=performance.now(),mn=0;function Ye(Ve){mn++,mn%2===0&&an();let Ne=Math.min(1,(Ve-sn)/cu),Ee=(un=>un*un*(3-2*un))(Ne);bt.position.lerpVectors(De,Ae,Ee),Vt(bt,Ee),Ne<1?requestAnimationFrame(Ye):(Pt++,rt())}requestAnimationFrame(Ye)};if(be)return;let z=N.find(Ht=>Ht.id===ft);if(!z||z.player!==at)return;let V=k*t.w+H;if(!D.has(V)||D.get(V)===0||N.some(Ht=>Ht.id!==z.id&&Ht.x===H&&Ht.y===k&&Ht.hp>0)||Bt||ye)return;let lt=Ji(t,z.x,z.y,H,k,N,z);if(!lt||lt.length<=1)return;ft=null,nn(),Bt=!0,q(z.id);let bt=$.get(z.id),Pt=1;rt()}}function jl(_){L.x=_.clientX,L.y=_.clientY,m=_.ctrlKey,p=Or(_.clientX,_.clientY),e.style.cursor=(_.ctrlKey,"grabbing")}function ao(_){return _.touches&&_.touches.length>0?{clientX:_.touches[0].clientX,clientY:_.touches[0].clientY}:_.changedTouches&&_.changedTouches.length>0?{clientX:_.changedTouches[0].clientX,clientY:_.changedTouches[0].clientY}:{clientX:_.clientX,clientY:_.clientY}}function Ql(_){if(!_||_.length<2)return 0;let g=_[0],A=_[1];return Math.hypot(A.clientX-g.clientX,A.clientY-g.clientY)}function Ru(_){if(_.touches.length===2){B=Ql(_.touches),p=null;return}if(_.touches.length!==1)return;B=null;let g=ao(_);jl({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Cu(_){if(_.touches.length===2){_.preventDefault();let A=Ql(_.touches);if(B!=null&&B>0){let C=A-B,H=a.position.distanceTo(c),k=Math.max(Y,Math.min(b,H-C*U));u.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(u.multiplyScalar(k)),a.lookAt(c),ii=performance.now()}B=A;return}if(B=null,_.touches.length!==1)return;_.preventDefault();let g=ao(_);tc({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Pu(_){if(_.touches.length<2&&(B=null),_.touches.length===2||_.changedTouches.length===0)return;let g=ao(_);oo({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function tc(_){if(Xe){Dn(_.clientX,_.clientY);return}if(p==null)return;let g=_.clientX-L.x,A=_.clientY-L.y;if(!x&&!v&&(Math.abs(g)>M||Math.abs(A)>M)&&(_.ctrlKey||m?v=!0:x=!0),v){I.copy(a.position).sub(c);let C=I.length();if(C<.001)return;let H=Math.atan2(I.x,I.z),k=Math.asin(Math.max(-1,Math.min(1,I.y/C)));H-=g*y,k+=A*y,k=Math.max(T,Math.min(O,k)),I.x=C*Math.cos(k)*Math.sin(H),I.y=C*Math.sin(k),I.z=C*Math.cos(k)*Math.cos(H),a.position.copy(c).add(I),a.lookAt(c),L.x=_.clientX,L.y=_.clientY,ii=performance.now()}else if(x){let C=Or(_.clientX,_.clientY);f.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,c.y,0)),Li.setFromCamera(new Nt(p.x,p.y),a),Li.ray.intersectPlane(f,d);let H=d.clone();Li.setFromCamera(new Nt(C.x,C.y),a),Li.ray.intersectPlane(f,d);let k=H.sub(d);c.add(k),a.position.add(k),a.lookAt(c),p={x:C.x,y:C.y},ii=performance.now()}}function oo(_){if(p!=null&&!x&&!v){let g=Or(_.clientX,_.clientY);Au(g.x,g.y)}p=null,x=!1,v=!1,m=!1,e.style.cursor="grab"}function Iu(_){_.preventDefault();let g=a.position.distanceTo(c),A=Math.max(Y,Math.min(b,g+_.deltaY*w));u.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(u.multiplyScalar(A)),a.lookAt(c),ii=performance.now()}e.style.cursor="grab",e.addEventListener("mousedown",jl),e.addEventListener("mousemove",tc),e.addEventListener("mouseup",oo),e.addEventListener("mouseleave",oo),e.addEventListener("touchstart",Ru,{passive:!0}),e.addEventListener("touchmove",Cu,{passive:!1}),e.addEventListener("touchend",Pu,{passive:!0}),e.addEventListener("wheel",Iu,{passive:!1});function ec(){let _=e.clientWidth,g=e.clientHeight;a.aspect=_/g,a.updateProjectionMatrix(),Sn.setSize(_,g),Sn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",ec);let Sn=new Sr({antialias:!1});Sn.setSize(e.clientWidth,e.clientHeight),Sn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Sn.shadowMap.enabled=!0,Sn.shadowMap.type=Hl,e.appendChild(Sn.domElement),ec();let Fr=document.createElement("div");Fr.id="combat-text-layer",e.appendChild(Fr);let pi=new F,Ui=new F,Lu=1400;function Xn(_,g,A,C,H){let k=document.createElement("div");k.className="combat-text-float "+(C?"miss":"damage")+(H?" "+H:""),k.textContent=A,k.style.position="absolute",Fr.appendChild(k);let G=H==="skill-name"?1.7:1.2,z=performance.now();function V(){pi.copy(pt(_,g)),pi.y+=G,pi.project(a);let bt=e.clientWidth,Pt=e.clientHeight;k.style.left=(pi.x*.5+.5)*bt+"px",k.style.top=(1-(pi.y*.5+.5))*Pt+"px"}let nt=0;function lt(){nt%2===0&&V(),nt++,performance.now()-z<Lu?requestAnimationFrame(lt):k.remove()}requestAnimationFrame(lt)}let Du=1500;function Uu(_,g){let A=document.createElement("div");A.className="combat-text-float "+(g||"levelup"),A.textContent="LEVEL UP!",A.style.position="absolute",Fr.appendChild(A);let C=performance.now(),H=0;function k(){pi.copy(pt(_.x,_.y)),pi.y+=1.2,pi.project(a);let z=e.clientWidth,V=e.clientHeight;A.style.left=(pi.x*.5+.5)*z+"px",A.style.top=(1-(pi.y*.5+.5))*V+"px"}function G(){H%2===0&&k(),H++,performance.now()-C<Du?requestAnimationFrame(G):A.remove()}requestAnimationFrame(G)}function bn(_){console.log("[DEATH]",`${_.name} (${_.class}, P${_.player})`,`at (${_.x},${_.y})`,`Lv.${_.level}`),Xn(_.x,_.y,"DEAD",!1);let g=$.get(_.id);if(!g){q(),nc();return}let A=performance.now();function C(H){an();let k=H-A,G=Math.min(1,k/K),z=G*G;g.rotation.x=z*Math.PI*.5,G<1?requestAnimationFrame(C):(n.remove(g),$.delete(_.id),q(),nc())}requestAnimationFrame(C)}function nc(){if(oe!=="playing")return;let _=N.some(A=>A.player===1&&A.hp>0),g=N.some(A=>A.player===2&&A.hp>0);_?g||lo(1):lo(2)}function Nu(){let _=$l(),g=new Set(_.map(G=>G.gy*t.w+G.gx)),A=N.filter(G=>G.hp>0&&G.player===1&&g.has(G.y*t.w+G.x)).length,C=N.filter(G=>G.hp>0&&G.player===2&&g.has(G.y*t.w+G.x)).length,H=null,k="";if(A>C)H=1,k=`Time's up! Player 1 wins! (${A} vs ${C} units on center base)`;else if(C>A)H=2,k=`Time's up! Player 2 wins! (${C} vs ${A} units on center base)`;else{let G=N.filter(V=>V.hp>0&&V.player===1).reduce((V,nt)=>V+nt.hp,0),z=N.filter(V=>V.hp>0&&V.player===2).reduce((V,nt)=>V+nt.hp,0);G>z?(H=1,k=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${G} vs ${z})`):z>G?(H=2,k=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${z} vs ${G})`):k=`Draw! (equal units on center: ${A}, equal HP)`}lo(H,k)}function lo(_,g){oe="gameover",document.getElementById("turn-menu").style.display="none",jt(),nn();let A=document.getElementById("game-over-overlay"),C=document.getElementById("game-over-title"),H=document.getElementById("game-over-cards");C.textContent=g??`Player ${_} wins!`;let k=N.filter(G=>G.player===(_??1));H.innerHTML=k.map(G=>{let z=G,V=G.level>=3?" level-3":G.level>=2?" level-2":"",nt=z.maxHp>0&&z.hp/z.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${V}${nt}">
          <img class="game-over-card-image" src="${Pr[G.class]||""}" alt="${z.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${z.name}</div>
            <div class="game-over-card-meta">Lv.${z.level} ${z.class} \u2014 HP ${z.hp}/${z.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${z.hp}/${z.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${z.mp}/${z.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${xt(z,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${xt(z,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${xt(z,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${xt(z,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${xt(z,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${xt(z,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${z.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),A.classList.add("visible")}function ys(_=0){requestAnimationFrame(ys),ii===0&&(ii=_);let g=_-ii>500,A=0;typeof ys.frameCount=="number"&&(A=ys.frameCount),ys.frameCount=A+1;let C=()=>{if(di){let H=.6+.4*Math.sin(_*.004);for(let k=0;k<Wn.length;k++){let G=k%2===0?.4:.7;Wn[k].opacity=G*H}Sn.render(n,a),di=!1}};g?_-ji>=100&&(ji=_,di=!0,C()):(ys.frameCount%2===0&&(di=!0),C())}ys()}M_();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
