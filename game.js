var Bl="160";var Bu=0,sc=1,ku=2;var kh=1,kl=2,Ti=3,qi=0,Wn=1,hn=2;var Gi=0,Vs=1,rc=2,ac=3,oc=4,Hu=5,os=100,zu=101,Vu=102,lc=103,cc=104,Gu=200,Wu=201,Xu=202,qu=203,qo=204,Yo=205,Yu=206,$u=207,Zu=208,Ku=209,Ju=210,ju=211,Qu=212,ed=213,td=214,nd=0,id=1,sd=2,ua=3,rd=4,ad=5,od=6,ld=7,Hh=0,cd=1,hd=2,Wi=0,ud=1,dd=2,fd=3,pd=4,md=5,gd=6;var zh=300,Xs=301,qs=302,$o=303,Zo=304,Wa=306,yr=1e3,di=1001,Ko=1002,Nn=1003,hc=1004;var co=1005;var ti=1006,xd=1007;var vr=1008;var Xi=1009,_d=1010,yd=1011,Hl=1012,Vh=1013,zi=1014,Vi=1015,Mr=1016,Gh=1017,Wh=1018,cs=1020,vd=1021,fi=1023,Md=1024,bd=1025,hs=1026,Ys=1027,Sd=1028,Xh=1029,Ed=1030,qh=1031,Yh=1033,ho=33776,uo=33777,fo=33778,po=33779,uc=35840,dc=35841,fc=35842,pc=35843,$h=36196,mc=37492,gc=37496,xc=37808,_c=37809,yc=37810,vc=37811,Mc=37812,bc=37813,Sc=37814,Ec=37815,Tc=37816,wc=37817,Ac=37818,Rc=37819,Cc=37820,Pc=37821,mo=36492,Ic=36494,Lc=36495,Td=36283,Dc=36284,Uc=36285,Nc=36286;var da=2300,fa=2301,go=2302,Oc=2400,Fc=2401,Bc=2402;var Zh=3e3,us=3001,wd=3200,Ad=3201,Kh=0,Rd=1,ni="",Rn="srgb",Ai="srgb-linear",zl="display-p3",Xa="display-p3-linear",pa="linear",Gt="srgb",ma="rec709",ga="p3";var bs=7680;var kc=519,Cd=512,Pd=513,Id=514,Jh=515,Ld=516,Dd=517,Ud=518,Nd=519,Hc=35044;var zc="300 es",Jo=1035,wi=2e3,xa=2001,Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xo=Math.PI/180,jo=180/Math.PI;function js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function In(i,e,t){return Math.max(e,Math.min(t,i))}function Od(i,e){return(i%e+e)%e}function _o(i,e,t){return(1-t)*i+t*e}function Vc(i){return(i&i-1)===0&&i!==0}function Qo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],_=n[8],v=s[0],m=s[3],p=s[6],M=s[1],y=s[4],T=s[7],O=s[2],I=s[5],L=s[8];return r[0]=a*v+o*M+l*O,r[3]=a*m+o*y+l*I,r[6]=a*p+o*T+l*L,r[1]=c*v+h*M+f*O,r[4]=c*m+h*y+f*I,r[7]=c*p+h*T+f*L,r[2]=d*v+u*M+_*O,r[5]=d*m+u*y+_*I,r[8]=d*p+u*T+_*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,_=t*f+n*d+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=u*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yo.makeScale(e,t)),this}rotate(e){return this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yo=new Tt;function jh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fd(){let i=_a("canvas");return i.style.display="block",i}var Gc={};function pr(i){i in Gc||(Gc[i]=!0,console.warn(i))}var Wc=new Tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xc=new Tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[Ai]:{transfer:pa,primaries:ma,toReference:i=>i,fromReference:i=>i},[Rn]:{transfer:Gt,primaries:ma,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xa]:{transfer:pa,primaries:ga,toReference:i=>i.applyMatrix3(Xc),fromReference:i=>i.applyMatrix3(Wc)},[zl]:{transfer:Gt,primaries:ga,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xc),fromReference:i=>i.applyMatrix3(Wc).convertLinearToSRGB()}},Bd=new Set([Ai,Xa]),Ot={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Bd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Br[e].toReference,s=Br[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Br[i].primaries},getTransfer:function(i){return i===ni?pa:Br[i].transfer}};function Gs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ss,ya=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=_a("canvas")),Ss.width=e.width,Ss.height=e.height;let n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_a("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gs(t[n]/255)*255):t[n]=Gs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kd=0,va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=js(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mo(s[a].image)):r.push(Mo(s[a]))}else r=Mo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hd=0,si=class i extends Yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=di,s=di,r=ti,a=vr,o=fi,l=Xi,c=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=js(),this.name="",this.source=new va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===us?Rn:ni),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yr:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yr:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rn?us:Zh}set encoding(e){pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===us?Rn:ni}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=zh;si.DEFAULT_ANISOTROPY=1;var An=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,T=(u+1)/2,O=(p+1)/2,I=(h+d)/4,L=(f+v)/4,$=(_+m)/4;return y>T&&y>O?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=I/n,r=L/n):T>O?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=I/s,r=$/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=L/r,s=$/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+u+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},el=class extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new An(0,0,e,t),this.scissorTest=!1,this.viewport=new An(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===us?Rn:ni),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new si(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends el{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ma=class extends si{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tl=class extends si{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $i=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=u,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==d||c!==u||h!==_){let m=1-o,p=l*d+c*u+h*_+f*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let O=Math.sqrt(y),I=Math.atan2(O,p*M);m=Math.sin(m*I)/O,o=Math.sin(o*I)/O}let T=o*M;if(l=l*m+d*T,c=c*m+u*T,h=h*m+_*T,f=f*m+v*T,m===1-o){let O=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=O,c*=O,h*=O,f*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],_=r[a+3];return e[t]=o*_+h*f+l*u-c*d,e[t+1]=l*_+h*d+c*f-o*u,e[t+2]=c*_+h*u+o*d-l*f,e[t+3]=h*_-o*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),u=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f-d*u*_;break;case"YXZ":this._x=d*h*f+c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f+d*u*_;break;case"ZXY":this._x=d*h*f-c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f-d*u*_;break;case"ZYX":this._x=d*h*f-c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f+d*u*_;break;case"YZX":this._x=d*h*f+c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f-d*u*_;break;case"XZY":this._x=d*h*f-c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f+d*u*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bo=new F,qc=new $i,ds=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(r,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Hr.subVectors(this.max,hr),Es.subVectors(e.a,hr),Ts.subVectors(e.b,hr),ws.subVectors(e.c,hr),Oi.subVectors(Ts,Es),Fi.subVectors(ws,Ts),ns.subVectors(Es,ws);let t=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-ns.z,ns.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,ns.z,0,-ns.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-ns.y,ns.x,0];return!So(t,Es,Ts,ws,Hr)||(t=[1,0,0,0,1,0,0,0,1],!So(t,Es,Ts,ws,Hr))?!1:(zr.crossVectors(Oi,Fi),t=[zr.x,zr.y,zr.z],So(t,Es,Ts,ws,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},vi=[new F,new F,new F,new F,new F,new F,new F,new F],li=new F,kr=new ds,Es=new F,Ts=new F,ws=new F,Oi=new F,Fi=new F,ns=new F,hr=new F,Hr=new F,zr=new F,is=new F;function So(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){is.fromArray(i,r);let o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),h=n.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var zd=new ds,ur=new F,Eo=new F,$s=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Eo)),this.expandByPoint(ur.copy(e.center).sub(Eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mi=new F,To=new F,Vr=new F,Bi=new F,wo=new F,Gr=new F,Ao=new F,br=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){To.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(To);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=Bi.dot(this.direction),l=-Bi.dot(Vr),c=Bi.lengthSq(),h=Math.abs(1-a*a),f,d,u,_;if(h>0)if(f=a*l-o,d=a*o-l,_=r*h,f>=0)if(d>=-_)if(d<=_){let v=1/h;f*=v,d*=v,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(To).addScaledVector(Vr,d),u}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,s,r){wo.subVectors(t,e),Gr.subVectors(n,e),Ao.crossVectors(wo,Gr);let a=this.direction.dot(Ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);let l=o*this.direction.dot(Gr.crossVectors(Bi,Gr));if(l<0)return null;let c=o*this.direction.dot(wo.cross(Bi));if(c<0||l+c>a)return null;let h=-o*Bi.dot(Ao);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pn=class i{constructor(e,t,n,s,r,a,o,l,c,h,f,d,u,_,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,d,u,_,v,m)}set(e,t,n,s,r,a,o,l,c,h,f,d,u,_,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*f,_=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+_*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=_+u*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,_=c*h,v=c*f;t[0]=d+v*o,t[4]=_*o-u,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-_,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,_=c*h,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=_+u*o,t[1]=u+_*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,u=a*f,_=o*h,v=o*f;t[0]=l*h,t[4]=_*c-u,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=u*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,u=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=v-d*f,t[8]=_*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*f+_,t[10]=d-v*f}else if(e.order==="XZY"){let d=a*l,u=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=a*h,t[9]=u*f-_,t[2]=_*f-u,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vd,e,Gd)}lookAt(e,t,n){let s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ki.crossVectors(n,$n),ki.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ki.crossVectors(n,$n)),ki.normalize(),Wr.crossVectors($n,ki),s[0]=ki.x,s[4]=Wr.x,s[8]=$n.x,s[1]=ki.y,s[5]=Wr.y,s[9]=$n.y,s[2]=ki.z,s[6]=Wr.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],_=n[2],v=n[6],m=n[10],p=n[14],M=n[3],y=n[7],T=n[11],O=n[15],I=s[0],L=s[4],$=s[8],S=s[12],w=s[1],N=s[5],B=s[9],J=s[13],P=s[2],W=s[6],D=s[10],se=s[14],Y=s[3],Q=s[7],ie=s[11],he=s[15];return r[0]=a*I+o*w+l*P+c*Y,r[4]=a*L+o*N+l*W+c*Q,r[8]=a*$+o*B+l*D+c*ie,r[12]=a*S+o*J+l*se+c*he,r[1]=h*I+f*w+d*P+u*Y,r[5]=h*L+f*N+d*W+u*Q,r[9]=h*$+f*B+d*D+u*ie,r[13]=h*S+f*J+d*se+u*he,r[2]=_*I+v*w+m*P+p*Y,r[6]=_*L+v*N+m*W+p*Q,r[10]=_*$+v*B+m*D+p*ie,r[14]=_*S+v*J+m*se+p*he,r[3]=M*I+y*w+T*P+O*Y,r[7]=M*L+y*N+T*W+O*Q,r[11]=M*$+y*B+T*D+O*ie,r[15]=M*S+y*J+T*se+O*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],_=e[3],v=e[7],m=e[11],p=e[15];return _*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*u-n*l*u)+v*(+t*l*u-t*c*d+r*a*d-s*a*u+s*c*h-r*l*h)+m*(+t*c*f-t*o*u-r*a*f+n*a*u+r*o*h-n*c*h)+p*(-s*o*h-t*l*f+t*o*d+s*a*f-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],_=e[12],v=e[13],m=e[14],p=e[15],M=f*m*c-v*d*c+v*l*u-o*m*u-f*l*p+o*d*p,y=_*d*c-h*m*c-_*l*u+a*m*u+h*l*p-a*d*p,T=h*v*c-_*f*c+_*o*u-a*v*u-h*o*p+a*f*p,O=_*f*l-h*v*l-_*o*d+a*v*d+h*o*m-a*f*m,I=t*M+n*y+s*T+r*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=M*L,e[1]=(v*d*r-f*m*r-v*s*u+n*m*u+f*s*p-n*d*p)*L,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*L,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*u-n*l*u)*L,e[4]=y*L,e[5]=(h*m*r-_*d*r+_*s*u-t*m*u-h*s*p+t*d*p)*L,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*p-t*l*p)*L,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*u+t*l*u)*L,e[8]=T*L,e[9]=(_*f*r-h*v*r-_*n*u+t*v*u+h*n*p-t*f*p)*L,e[10]=(a*v*r-_*o*r+_*n*c-t*v*c-a*n*p+t*o*p)*L,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*u-t*o*u)*L,e[12]=O*L,e[13]=(h*v*s-_*f*s+_*n*d-t*v*d-h*n*m+t*f*m)*L,e[14]=(_*o*s-a*v*s-_*n*l+t*v*l+a*n*m-t*o*m)*L,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,_=r*f,v=a*h,m=a*f,p=o*f,M=l*c,y=l*h,T=l*f,O=n.x,I=n.y,L=n.z;return s[0]=(1-(v+p))*O,s[1]=(u+T)*O,s[2]=(_-y)*O,s[3]=0,s[4]=(u-T)*I,s[5]=(1-(d+p))*I,s[6]=(m+M)*I,s[7]=0,s[8]=(_+y)*L,s[9]=(m-M)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=As.set(s[0],s[1],s[2]).length(),a=As.set(s[4],s[5],s[6]).length(),o=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ci.copy(this);let c=1/r,h=1/a,f=1/o;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=f,ci.elements[9]*=f,ci.elements[10]*=f,t.setFromRotationMatrix(ci),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=wi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),u,_;if(o===wi)u=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===xa)u=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=wi){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(a-r),d=(t+e)*c,u=(n+s)*h,_,v;if(o===wi)_=(a+r)*f,v=-2*f;else if(o===xa)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},As=new F,ci=new pn,Vd=new F(0,0,0),Gd=new F(1,1,1),ki=new F,Wr=new F,$n=new F,Yc=new pn,$c=new $i,ba=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(In(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-In(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(In(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-In(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(In(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-In(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $c.setFromEuler(this),this.setFromQuaternion($c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ba.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wd=0,Zc=new F,Rs=new $i,bi=new pn,Xr=new F,dr=new F,Xd=new F,qd=new $i,Kc=new F(1,0,0),Jc=new F(0,1,0),jc=new F(0,0,1),Yd={type:"added"},$d={type:"removed"},Fn=class i extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new ba,n=new $i,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pn},normalMatrix:{value:new Tt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Kc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(jc,e)}translateOnAxis(e,t){return Zc.copy(e).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(dr,Xr,this.up):bi.lookAt(Xr,dr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(bi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($d)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,qd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Fn.DEFAULT_UP=new F(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=new F,Si=new F,Ro=new F,Ei=new F,Cs=new F,Ps=new F,Qc=new F,Co=new F,Po=new F,Io=new F,qr=!1,Bs=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),Si.subVectors(n,t),Ro.subVectors(e,t);let a=hi.dot(hi),o=hi.dot(Si),l=hi.dot(Ro),c=Si.dot(Si),h=Si.dot(Ro),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-u-_,_,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,n,s,r,a,o,l){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),Si.subVectors(e,t),hi.cross(Si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),hi.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Cs.subVectors(s,n),Ps.subVectors(r,n),Co.subVectors(e,n);let l=Cs.dot(Co),c=Ps.dot(Co);if(l<=0&&c<=0)return t.copy(n);Po.subVectors(e,s);let h=Cs.dot(Po),f=Ps.dot(Po);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Cs,a);Io.subVectors(e,r);let u=Cs.dot(Io),_=Ps.dot(Io);if(_>=0&&u<=_)return t.copy(r);let v=u*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Ps,o);let m=h*_-u*f;if(m<=0&&f-h>=0&&u-_>=0)return Qc.subVectors(r,s),o=(f-h)/(f-h+(u-_)),t.copy(s).addScaledVector(Qc,o);let p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Cs,a).addScaledVector(Ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var mt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ot.workingColorSpace){if(e=Od(e,1),t=In(t,0,1),n=In(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Lo(a,r,e+1/3),this.g=Lo(a,r,e),this.b=Lo(a,r,e-1/3)}return Ot.toWorkingColorSpace(this,s),this}setStyle(e,t=Rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){let n=Qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return Ot.fromWorkingColorSpace(Pn.copy(this),e),Math.round(In(Pn.r*255,0,255))*65536+Math.round(In(Pn.g*255,0,255))*256+Math.round(In(Pn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.fromWorkingColorSpace(Pn.copy(this),t);let n=Pn.r,s=Pn.g,r=Pn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Rn){Ot.fromWorkingColorSpace(Pn.copy(this),e);let t=Pn.r,n=Pn.g,s=Pn.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Yr);let n=_o(Hi.h,Yr.h,t),s=_o(Hi.s,Yr.s,t),r=_o(Hi.l,Yr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new mt;mt.NAMES=Qh;var Zd=0,Zi=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Vs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},an=class extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var fn=new F,$r=new Ne,Xn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),n=Gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),n=Gn(n,this.array),s=Gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),n=Gn(n,this.array),s=Gn(s,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hc&&(e.usage=this.usage),e}};var Sa=class extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ea=class extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nn=class extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Kd=0,ei=new pn,Do=new Fn,Is=new F,Zn=new ds,fr=new ds,wn=new F,qn=class i extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?Ea:Sa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(wn.addVectors(Zn.min,fr.min),Zn.expandByPoint(wn),wn.addVectors(Zn.max,fr.max),Zn.expandByPoint(wn)):(Zn.expandByPoint(fr.min),Zn.expandByPoint(fr.max))}Zn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wn.fromBufferAttribute(o,c),l&&(Is.fromBufferAttribute(e,c),wn.add(Is)),s=Math.max(s,n.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new F,h[w]=new F;let f=new F,d=new F,u=new F,_=new Ne,v=new Ne,m=new Ne,p=new F,M=new F;function y(w,N,B){f.fromArray(s,w*3),d.fromArray(s,N*3),u.fromArray(s,B*3),_.fromArray(a,w*2),v.fromArray(a,N*2),m.fromArray(a,B*2),d.sub(f),u.sub(f),v.sub(_),m.sub(_);let J=1/(v.x*m.y-m.x*v.y);isFinite(J)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(u,-v.y).multiplyScalar(J),M.copy(u).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(J),c[w].add(p),c[N].add(p),c[B].add(p),h[w].add(M),h[N].add(M),h[B].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,N=T.length;w<N;++w){let B=T[w],J=B.start,P=B.count;for(let W=J,D=J+P;W<D;W+=3)y(n[W+0],n[W+1],n[W+2])}let O=new F,I=new F,L=new F,$=new F;function S(w){L.fromArray(r,w*3),$.copy(L);let N=c[w];O.copy(N),O.sub(L.multiplyScalar(L.dot(N))).normalize(),I.crossVectors($,N);let J=I.dot(h[w])<0?-1:1;l[w*4]=O.x,l[w*4+1]=O.y,l[w*4+2]=O.z,l[w*4+3]=J}for(let w=0,N=T.length;w<N;++w){let B=T[w],J=B.start,P=B.count;for(let W=J,D=J+P;W<D;W+=3)S(n[W+0]),S(n[W+1]),S(n[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let d=0,u=e.count;d<u;d+=3){let _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let p=0;p<h;p++)d[_++]=c[u++]}return new Xn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eh=new pn,ss=new br,Zr=new $s,th=new F,Ls=new F,Ds=new F,Us=new F,Uo=new F,Kr=new F,Jr=new Ne,jr=new Ne,Qr=new Ne,nh=new F,ih=new F,sh=new F,ea=new F,ta=new F,ct=class extends Fn{constructor(e=new qn,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Uo.fromBufferAttribute(f,e),a?Kr.addScaledVector(Uo,h):Kr.addScaledVector(Uo.sub(t),h))}t.add(Kr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(Zr.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Zr,th)===null||ss.origin.distanceToSquared(th)>(e.far-e.near)**2))&&(eh.copy(r).invert(),ss.copy(e.ray).applyMatrix4(eh),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){let m=d[_],p=a[m.materialIndex],M=Math.max(m.start,u.start),y=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let T=M,O=y;T<O;T+=3){let I=o.getX(T),L=o.getX(T+1),$=o.getX(T+2);s=na(this,p,e,n,c,h,f,I,L,$),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=_,p=v;m<p;m+=3){let M=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);s=na(this,a,e,n,c,h,f,M,y,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){let m=d[_],p=a[m.materialIndex],M=Math.max(m.start,u.start),y=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let T=M,O=y;T<O;T+=3){let I=T,L=T+1,$=T+2;s=na(this,p,e,n,c,h,f,I,L,$),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=_,p=v;m<p;m+=3){let M=m,y=m+1,T=m+2;s=na(this,a,e,n,c,h,f,M,y,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Jd(i,e,t,n,s,r,a,o){let l;if(e.side===Wn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===qi,o),l===null)return null;ta.copy(o),ta.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:i}}function na(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ls),i.getVertexPosition(l,Ds),i.getVertexPosition(c,Us);let h=Jd(i,e,t,n,Ls,Ds,Us,ea);if(h){s&&(Jr.fromBufferAttribute(s,o),jr.fromBufferAttribute(s,l),Qr.fromBufferAttribute(s,c),h.uv=Bs.getInterpolation(ea,Ls,Ds,Us,Jr,jr,Qr,new Ne)),r&&(Jr.fromBufferAttribute(r,o),jr.fromBufferAttribute(r,l),Qr.fromBufferAttribute(r,c),h.uv1=Bs.getInterpolation(ea,Ls,Ds,Us,Jr,jr,Qr,new Ne),h.uv2=h.uv1),a&&(nh.fromBufferAttribute(a,o),ih.fromBufferAttribute(a,l),sh.fromBufferAttribute(a,c),h.normal=Bs.getInterpolation(ea,Ls,Ds,Us,nh,ih,sh,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};Bs.getNormal(Ls,Ds,Us,f.normal),h.face=f}return h}var Ln=class i extends qn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(f,2));function _(v,m,p,M,y,T,O,I,L,$,S){let w=T/L,N=O/$,B=T/2,J=O/2,P=I/2,W=L+1,D=$+1,se=0,Y=0,Q=new F;for(let ie=0;ie<D;ie++){let he=ie*N-J;for(let me=0;me<W;me++){let te=me*w-B;Q[v]=te*M,Q[m]=he*y,Q[p]=P,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=I>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(me/L),f.push(1-ie/$),se+=1}}for(let ie=0;ie<$;ie++)for(let he=0;he<L;he++){let me=d+he+W*ie,te=d+he+W*(ie+1),fe=d+(he+1)+W*(ie+1),Ae=d+(he+1)+W*ie;l.push(me,te,Ae),l.push(te,fe,Ae),Y+=6}o.addGroup(u,Y,S),u+=Y,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Un(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}function jd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eu(i){return i.getRenderTarget()===null?i.outputColorSpace:Ot.workingColorSpace}var Qd={clone:Zs,merge:Un},ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ci=class extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ta=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},On=class extends Ta{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=-90,Os=1,nl=class extends Fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new On(Ns,Os,e,t);s.layers=this.layers,this.add(s);let r=new On(Ns,Os,e,t);r.layers=this.layers,this.add(r);let a=new On(Ns,Os,e,t);a.layers=this.layers,this.add(a);let o=new On(Ns,Os,e,t);o.layers=this.layers,this.add(o);let l=new On(Ns,Os,e,t);l.layers=this.layers,this.add(l);let c=new On(Ns,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},wa=class extends si{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},il=class extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===us?Rn:ni),this.texture=new wa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ln(5,5,5),r=new Ci({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:Gi});r.uniforms.tEquirect.value=t;let a=new ct(s,r),o=t.minFilter;return t.minFilter===vr&&(t.minFilter=ti),new nl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},No=new F,nf=new F,sf=new Tt,ui=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=No.subVectors(n,t).cross(nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(No),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sf.getNormalMatrix(e),s=this.coplanarPoint(No).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new $s,ia=new F,Er=class{constructor(e=new ui,t=new ui,n=new ui,s=new ui,r=new ui,a=new ui){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],u=s[8],_=s[9],v=s[10],m=s[11],p=s[12],M=s[13],y=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,m-u,T-p).normalize(),n[1].setComponents(l+r,d+c,m+u,T+p).normalize(),n[2].setComponents(l+a,d+h,m+_,T+M).normalize(),n[3].setComponents(l-a,d-h,m-_,T-M).normalize(),n[4].setComponents(l-o,d-f,m-v,T-y).normalize(),t===wi)n[5].setComponents(l+o,d+f,m+v,T+y).normalize();else if(t===xa)n[5].setComponents(o,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,d=c.usage,u=f.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,f){let d=h.array,u=h._updateRange,_=h.updateRanges;if(i.bindBuffer(f,c),u.count===-1&&_.length===0&&i.bufferSubData(f,0,d),_.length!==0){for(let v=0,m=_.length;v<m;v++){let p=_[v];t?i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}var Pi=class i extends qn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,u=[],_=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let y=0;y<c;y++){let T=y*f-r;_.push(T,-M,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let y=M+c*p,T=M+c*(p+1),O=M+1+c*(p+1),I=M+1+c*p;u.push(y,T,I),u.push(T,O,I)}this.setIndex(u),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
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
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
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
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
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
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
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
} // validated`,yf=`#ifdef USE_IRIDESCENCE
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
#endif`,vf=`#ifdef USE_BUMPMAP
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cf=`#define PI 3.141592653589793
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
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,If=`vec3 transformedNormal = objectNormal;
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
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Of="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`
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
}`,Bf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
}`,$f=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
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
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,ep=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
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
#endif`,rp=`struct PhysicalMaterial {
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
}`,ap=`
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gp=`#if defined( USE_POINTS_UV )
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
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
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
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wp=`float getShadowMask() {
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
}`,Xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
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
}`,dm=`#if DEPTH_PACKING == 3200
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
}`,fm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,ym=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,bm=`#define LAMBERT
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
}`,Em=`#define MATCAP
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
}`,Tm=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define STANDARD
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
}`,Im=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Dm=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Om=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:lf,alphamap_pars_fragment:cf,alphatest_fragment:hf,alphatest_pars_fragment:uf,aomap_fragment:df,aomap_pars_fragment:ff,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:xf,bsdfs:_f,iridescence_fragment:yf,bumpmap_pars_fragment:vf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:Ef,color_fragment:Tf,color_pars_fragment:wf,color_pars_vertex:Af,color_vertex:Rf,common:Cf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:If,displacementmap_pars_vertex:Lf,displacementmap_vertex:Df,emissivemap_fragment:Uf,emissivemap_pars_fragment:Nf,colorspace_fragment:Of,colorspace_pars_fragment:Ff,envmap_fragment:Bf,envmap_common_pars_fragment:kf,envmap_pars_fragment:Hf,envmap_pars_vertex:zf,envmap_physical_pars_fragment:Qf,envmap_vertex:Vf,fog_vertex:Gf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_fragment:$f,lightmap_pars_fragment:Zf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:Jf,lights_pars_begin:jf,lights_toon_fragment:ep,lights_toon_pars_fragment:tp,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:sp,lights_physical_pars_fragment:rp,lights_fragment_begin:ap,lights_fragment_maps:op,lights_fragment_end:lp,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:up,logdepthbuf_vertex:dp,map_fragment:fp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:xp,metalnessmap_pars_fragment:_p,morphcolor_vertex:yp,morphnormal_vertex:vp,morphtarget_pars_vertex:Mp,morphtarget_vertex:bp,normal_fragment_begin:Sp,normal_fragment_maps:Ep,normal_pars_fragment:Tp,normal_pars_vertex:wp,normal_vertex:Ap,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Pp,clearcoat_pars_fragment:Ip,iridescence_pars_fragment:Lp,opaque_fragment:Dp,packing:Up,premultiplied_alpha_fragment:Np,project_vertex:Op,dithering_fragment:Fp,dithering_pars_fragment:Bp,roughnessmap_fragment:kp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:Yp,skinnormal_vertex:$p,specularmap_fragment:Zp,specularmap_pars_fragment:Kp,tonemapping_fragment:Jp,tonemapping_pars_fragment:jp,transmission_fragment:Qp,transmission_pars_fragment:em,uv_pars_fragment:tm,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:am,backgroundCube_vert:om,backgroundCube_frag:lm,cube_vert:cm,cube_frag:hm,depth_vert:um,depth_frag:dm,distanceRGBA_vert:fm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:xm,linedashed_frag:_m,meshbasic_vert:ym,meshbasic_frag:vm,meshlambert_vert:Mm,meshlambert_frag:bm,meshmatcap_vert:Sm,meshmatcap_frag:Em,meshnormal_vert:Tm,meshnormal_frag:wm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Im,meshtoon_frag:Lm,points_vert:Dm,points_frag:Um,shadow_vert:Nm,shadow_frag:Om,sprite_vert:Fm,sprite_frag:Bm},we={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},_i={basic:{uniforms:Un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new mt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Un([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Un([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new mt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Un([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Un([we.points,we.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Un([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Un([we.common,we.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Un([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Un([we.sprite,we.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Un([we.common,we.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Un([we.lights,we.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};_i.physical={uniforms:Un([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var sa={r:0,b:0,g:0};function km(i,e,t,n,s,r,a){let o=new mt(0),l=r===!0?0:1,c,h,f=null,d=0,u=null;function _(m,p){let M=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Wa)?(h===void 0&&(h=new ct(new Ln(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Zs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ot.getTransfer(y.colorSpace)!==Gt,(f!==y||d!==y.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,d=y.version,u=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ct(new Pi(2,2),new Ci({name:"BackgroundMaterial",uniforms:Zs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ot.getTransfer(y.colorSpace)!==Gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(sa,eu(i)),n.buffers.color.setClear(sa.r,sa.g,sa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:_}}function Hm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function f(P,W,D,se,Y){let Q=!1;if(a){let ie=v(se,D,W);c!==ie&&(c=ie,u(c.object)),Q=p(P,se,D,Y),Q&&M(P,se,D,Y)}else{let ie=W.wireframe===!0;(c.geometry!==se.id||c.program!==D.id||c.wireframe!==ie)&&(c.geometry=se.id,c.program=D.id,c.wireframe=ie,Q=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,$(P,W,D,se),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,W,D){let se=D.wireframe===!0,Y=o[P.id];Y===void 0&&(Y={},o[P.id]=Y);let Q=Y[W.id];Q===void 0&&(Q={},Y[W.id]=Q);let ie=Q[se];return ie===void 0&&(ie=m(d()),Q[se]=ie),ie}function m(P){let W=[],D=[],se=[];for(let Y=0;Y<s;Y++)W[Y]=0,D[Y]=0,se[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:D,attributeDivisors:se,object:P,attributes:{},index:null}}function p(P,W,D,se){let Y=c.attributes,Q=W.attributes,ie=0,he=D.getAttributes();for(let me in he)if(he[me].location>=0){let fe=Y[me],Ae=Q[me];if(Ae===void 0&&(me==="instanceMatrix"&&P.instanceMatrix&&(Ae=P.instanceMatrix),me==="instanceColor"&&P.instanceColor&&(Ae=P.instanceColor)),fe===void 0||fe.attribute!==Ae||Ae&&fe.data!==Ae.data)return!0;ie++}return c.attributesNum!==ie||c.index!==se}function M(P,W,D,se){let Y={},Q=W.attributes,ie=0,he=D.getAttributes();for(let me in he)if(he[me].location>=0){let fe=Q[me];fe===void 0&&(me==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),me==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor));let Ae={};Ae.attribute=fe,fe&&fe.data&&(Ae.data=fe.data),Y[me]=Ae,ie++}c.attributes=Y,c.attributesNum=ie,c.index=se}function y(){let P=c.newAttributes;for(let W=0,D=P.length;W<D;W++)P[W]=0}function T(P){O(P,0)}function O(P,W){let D=c.newAttributes,se=c.enabledAttributes,Y=c.attributeDivisors;D[P]=1,se[P]===0&&(i.enableVertexAttribArray(P),se[P]=1),Y[P]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,W),Y[P]=W)}function I(){let P=c.newAttributes,W=c.enabledAttributes;for(let D=0,se=W.length;D<se;D++)W[D]!==P[D]&&(i.disableVertexAttribArray(D),W[D]=0)}function L(P,W,D,se,Y,Q,ie){ie===!0?i.vertexAttribIPointer(P,W,D,Y,Q):i.vertexAttribPointer(P,W,D,se,Y,Q)}function $(P,W,D,se){if(n.isWebGL2===!1&&(P.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let Y=se.attributes,Q=D.getAttributes(),ie=W.defaultAttributeValues;for(let he in Q){let me=Q[he];if(me.location>=0){let te=Y[he];if(te===void 0&&(he==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),he==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){let fe=te.normalized,Ae=te.itemSize,He=t.get(te);if(He===void 0)continue;let ze=He.buffer,rt=He.type,ht=He.bytesPerElement,Ve=n.isWebGL2===!0&&(rt===i.INT||rt===i.UNSIGNED_INT||te.gpuType===Vh);if(te.isInterleavedBufferAttribute){let bt=te.data,Z=bt.stride,Kt=te.offset;if(bt.isInstancedInterleavedBuffer){for(let Ze=0;Ze<me.locationSize;Ze++)O(me.location+Ze,bt.meshPerAttribute);P.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Ze=0;Ze<me.locationSize;Ze++)T(me.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Ze=0;Ze<me.locationSize;Ze++)L(me.location+Ze,Ae/me.locationSize,rt,fe,Z*ht,(Kt+Ae/me.locationSize*Ze)*ht,Ve)}else{if(te.isInstancedBufferAttribute){for(let bt=0;bt<me.locationSize;bt++)O(me.location+bt,te.meshPerAttribute);P.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let bt=0;bt<me.locationSize;bt++)T(me.location+bt);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let bt=0;bt<me.locationSize;bt++)L(me.location+bt,Ae/me.locationSize,rt,fe,Ae*ht,Ae/me.locationSize*bt*ht,Ve)}}else if(ie!==void 0){let fe=ie[he];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(me.location,fe);break;case 3:i.vertexAttrib3fv(me.location,fe);break;case 4:i.vertexAttrib4fv(me.location,fe);break;default:i.vertexAttrib1fv(me.location,fe)}}}}I()}function S(){B();for(let P in o){let W=o[P];for(let D in W){let se=W[D];for(let Y in se)_(se[Y].object),delete se[Y];delete W[D]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;let W=o[P.id];for(let D in W){let se=W[D];for(let Y in se)_(se[Y].object),delete se[Y];delete W[D]}delete o[P.id]}function N(P){for(let W in o){let D=o[W];if(D[P.id]===void 0)continue;let se=D[P.id];for(let Y in se)_(se[Y].object),delete se[Y];delete D[P.id]}}function B(){J(),h=!0,c!==l&&(c=l,u(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:J,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:T,disableUnusedAttributes:I}}function zm(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,d){if(d===0)return;let u,_;if(s)u=i,_="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[_](r,h,f,d),t.update(f,r,d)}function c(h,f,d){if(d===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let _=0;_<d;_++)this.render(h[_],f[_]);else{u.multiDrawArraysWEBGL(r,h,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=f[v];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Vm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=a||e.has("OES_texture_float"),O=y&&T,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:O,maxSamples:I}}function Gm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ui,o=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,y=M*4,T=p.clippingState||null;l.value=T,T=h(_,d,y,u);for(let O=0;O!==y;++O)T[O]=t[O];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,_){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let p=u+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=u;y!==v;++y,T+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Wm(i){let e=new WeakMap;function t(a,o){return o===$o?a.mapping=Xs:o===Zo&&(a.mapping=qs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===$o||o===Zo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new il(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Aa=class extends Ta{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ks=4,rh=[.125,.215,.35,.446,.526,.582],ls=20,Oo=new Aa,ah=new mt,Fo=null,Bo=0,ko=0,as=(1+Math.sqrt(5))/2,Fs=1/as,oh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,as,Fs),new F(0,as,-Fs),new F(Fs,0,as),new F(-Fs,0,as),new F(as,Fs,0),new F(-as,Fs,0)],Ra=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Bo,ko),e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Mr,format:fi,colorSpace:Ai,depthBuffer:!1},s=lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xm(r)),this._blurMaterial=qm(r,e,t)}return s}_compileMaterial(e){let t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,s){let o=new On(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ah),h.toneMapping=Wi,h.autoClear=!1;let u=new an({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),_=new ct(new Ln,u),v=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,v=!0):(u.color.copy(ah),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;ra(s,M*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Xs||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Oo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=oh[(s-1)%oh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ct(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ls-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);let p=[],M=0;for(let L=0;L<ls;++L){let $=L/v,S=Math.exp(-$*$/2);p.push(S),L===0?M+=S:L<m&&(M+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;let T=this._sizeLods[s],O=3*T*(s>y-ks?s-y+ks:0),I=4*(this._cubeSize-T);ra(t,O,I,3*T,2*T),l.setRenderTarget(t),l.render(f,Oo)}};function Xm(i){let e=[],t=[],n=[],s=i,r=i-ks+1+rh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ks?l=rh[a-i+ks-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,_=6,v=3,m=2,p=1,M=new Float32Array(v*_*u),y=new Float32Array(m*_*u),T=new Float32Array(p*_*u);for(let I=0;I<u;I++){let L=I%3*2/3-1,$=I>2?0:-1,S=[L,$,0,L+2/3,$,0,L+2/3,$+1,0,L,$,0,L+2/3,$+1,0,L,$+1,0];M.set(S,v*_*I),y.set(d,m*_*I);let w=[I,I,I,I,I,I];T.set(w,p*_*I)}let O=new qn;O.setAttribute("position",new Xn(M,v)),O.setAttribute("uv",new Xn(y,m)),O.setAttribute("faceIndex",new Xn(T,p)),e.push(O),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lh(i,e,t){let n=new Ri(i,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qm(i,e,t){let n=new Float32Array(ls),s=new F(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function ch(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function hh(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Vl(){return`

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
	`}function Ym(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===$o||l===Zo,h=l===Xs||l===qs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ra(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Ra(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $m(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let v=d.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let _ in d)e.update(d[_],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let _ in u){let v=u[_];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,_=f.attributes.position,v=0;if(u!==null){let M=u.array;v=u.version;for(let y=0,T=M.length;y<T;y+=3){let O=M[y+0],I=M[y+1],L=M[y+2];d.push(O,I,I,L,L,O)}}else if(_!==void 0){let M=_.array;v=_.version;for(let y=0,T=M.length/3-1;y<T;y+=3){let O=y+0,I=y+1,L=y+2;d.push(O,I,I,L,L,O)}}else return;let m=new(jh(d)?Ea:Sa)(d,1);m.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Km(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,_){i.drawElements(r,_,o,u*l),t.update(_,r,1)}function f(u,_,v){if(v===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,_,o,u*l,v),t.update(_,r,v)}function d(u,_,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(u[p]/l,_[p]);else{m.multiDrawElementsWEBGL(r,_,0,o,u,0,v);let p=0;for(let M=0;M<v;M++)p+=_[M];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function Jm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jm(i,e){return i[0]-e[0]}function Qm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function eg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new An,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=u!==void 0?u.length:0,v=r.get(h);if(v===void 0||v.count!==_){let P=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],$=0;M===!0&&($=1),y===!0&&($=2),T===!0&&($=3);let S=h.attributes.position.count*$,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let N=new Float32Array(S*w*4*_),B=new Ma(N,S,w,_);B.type=Vi,B.needsUpdate=!0;let J=$*4;for(let W=0;W<_;W++){let D=O[W],se=I[W],Y=L[W],Q=S*w*4*W;for(let ie=0;ie<D.count;ie++){let he=ie*J;M===!0&&(a.fromBufferAttribute(D,ie),N[Q+he+0]=a.x,N[Q+he+1]=a.y,N[Q+he+2]=a.z,N[Q+he+3]=0),y===!0&&(a.fromBufferAttribute(se,ie),N[Q+he+4]=a.x,N[Q+he+5]=a.y,N[Q+he+6]=a.z,N[Q+he+7]=0),T===!0&&(a.fromBufferAttribute(Y,ie),N[Q+he+8]=a.x,N[Q+he+9]=a.y,N[Q+he+10]=a.z,N[Q+he+11]=Y.itemSize===4?a.w:1)}}v={count:_,texture:B,size:new Ne(S,w)},r.set(h,v),h.addEventListener("dispose",P)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];let p=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let u=d===void 0?0:d.length,_=n[h.id];if(_===void 0||_.length!==u){_=[];for(let y=0;y<u;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<u;y++){let T=_[y];T[0]=y,T[1]=d[y]}_.sort(Qm);for(let y=0;y<8;y++)y<u&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(jm);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let T=o[y],O=T[0],I=T[1];O!==Number.MAX_SAFE_INTEGER&&I?(v&&h.getAttribute("morphTarget"+y)!==v[O]&&h.setAttribute("morphTarget"+y,v[O]),m&&h.getAttribute("morphNormal"+y)!==m[O]&&h.setAttribute("morphNormal"+y,m[O]),s[y]=I,p+=I):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let M=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function tg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ca=class extends si{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:hs,h!==hs&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hs&&(n=zi),n===void 0&&h===Ys&&(n=cs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},nu=new si,iu=new Ca(1,1);iu.compareFunction=Jh;var su=new Ma,ru=new tl,au=new wa,uh=[],dh=[],fh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function Qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=uh[s];if(r===void 0&&(r=new Float32Array(s),uh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qa(i,e){let t=dh[e];t===void 0&&(t=new Int32Array(e),dh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2fv(this.addr,e),Sn(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;i.uniform3fv(this.addr,e),Sn(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4fv(this.addr,e),Sn(t,e)}}function ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(bn(t,n))return;mh.set(n),i.uniformMatrix2fv(this.addr,!1,mh),Sn(t,n)}}function og(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(bn(t,n))return;ph.set(n),i.uniformMatrix3fv(this.addr,!1,ph),Sn(t,n)}}function lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(bn(t,n))return;fh.set(n),i.uniformMatrix4fv(this.addr,!1,fh),Sn(t,n)}}function cg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2iv(this.addr,e),Sn(t,e)}}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3iv(this.addr,e),Sn(t,e)}}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4iv(this.addr,e),Sn(t,e)}}function fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2uiv(this.addr,e),Sn(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3uiv(this.addr,e),Sn(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4uiv(this.addr,e),Sn(t,e)}}function xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?iu:nu;t.setTexture2D(e||r,s)}function _g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ru,s)}function yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||au,s)}function vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||su,s)}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return vg}}function bg(i,e){i.uniform1fv(this.addr,e)}function Sg(i,e){let t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function Eg(i,e){let t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Tg(i,e){let t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function wg(i,e){let t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ag(i,e){let t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rg(i,e){let t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cg(i,e){i.uniform1iv(this.addr,e)}function Pg(i,e){i.uniform2iv(this.addr,e)}function Ig(i,e){i.uniform3iv(this.addr,e)}function Lg(i,e){i.uniform4iv(this.addr,e)}function Dg(i,e){i.uniform1uiv(this.addr,e)}function Ug(i,e){i.uniform2uiv(this.addr,e)}function Ng(i,e){i.uniform3uiv(this.addr,e)}function Og(i,e){i.uniform4uiv(this.addr,e)}function Fg(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||nu,r[a])}function Bg(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ru,r[a])}function kg(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||au,r[a])}function Hg(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);bn(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||su,r[a])}function zg(i){switch(i){case 5126:return bg;case 35664:return Sg;case 35665:return Eg;case 35666:return Tg;case 35674:return wg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ig;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ug;case 36295:return Ng;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Hg}}var sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mg(t.type)}},rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zg(t.type)}},al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ho=/(\w+)(\])?(\[|\.)?/g;function gh(i,e){i.seq.push(e),i.map[e.id]=e}function Vg(i,e,t){let n=i.name,s=n.length;for(Ho.lastIndex=0;;){let r=Ho.exec(n),a=Ho.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gh(t,c===void 0?new sl(o,i,e):new rl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new al(o),gh(t,f)),t=f}}}var Ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Vg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function xh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Gg=37297,Wg=0;function Xg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function qg(i){let e=Ot.getPrimaries(Ot.workingColorSpace),t=Ot.getPrimaries(i),n;switch(e===t?n="":e===ga&&t===ma?n="LinearDisplayP3ToLinearSRGB":e===ma&&t===ga&&(n="LinearSRGBToLinearDisplayP3"),i){case Ai:case Xa:return[n,"LinearTransferOETF"];case Rn:case zl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _h(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Xg(i.getShaderSource(e),a)}else return s}function Yg(i,e){let t=qg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $g(i,e){let t;switch(e){case ud:t="Linear";break;case dd:t="Reinhard";break;case fd:t="OptimizedCineon";break;case pd:t="ACESFilmic";break;case gd:t="AgX";break;case md:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function Kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Hs).join(`
`)}function Jg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hs(i){return i!==""}function yh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(Qg,t0)}var e0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function t0(i,e){let t=Mt[e];if(t===void 0){let n=e0.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ol(t)}var n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(i){return i.replace(n0,i0)}function i0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function r0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function o0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hh:e="ENVMAP_BLENDING_MULTIPLY";break;case cd:e="ENVMAP_BLENDING_MIX";break;case hd:e="ENVMAP_BLENDING_ADD";break}return e}function l0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function c0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=s0(t),c=r0(t),h=a0(t),f=o0(t),d=l0(t),u=t.isWebGL2?"":Zg(t),_=Kg(t),v=Jg(r),m=s.createProgram(),p,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hs).join(`
`),p.length>0&&(p+=`
`),M=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hs).join(`
`),M.length>0&&(M+=`
`)):(p=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),M=[u,bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Wi?$g("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,Yg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),a=ol(a),a=yh(a,t),a=vh(a,t),o=ol(o),o=yh(o,t),o=vh(o,t),a=Mh(a),o=Mh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=y+p+a,O=y+M+o,I=xh(s,s.VERTEX_SHADER,T),L=xh(s,s.FRAGMENT_SHADER,O);s.attachShader(m,I),s.attachShader(m,L),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function $(B){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(L).trim(),D=!0,se=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,I,L);else{let Y=_h(s,I,"vertex"),Q=_h(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+Y+`
`+Q)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||W==="")&&(se=!1);se&&(B.diagnostics={runnable:D,programLog:J,vertexShader:{log:P,prefix:p},fragmentShader:{log:W,prefix:M}})}s.deleteShader(I),s.deleteShader(L),S=new Ws(s,m),w=jg(s,m)}let S;this.getUniforms=function(){return S===void 0&&$(this),S};let w;this.getAttributes=function(){return w===void 0&&$(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,Gg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=L,this}var h0=0,ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cl(e),t.set(e,n)),n}},cl=class{constructor(e){this.id=h0++,this.code=e,this.usedTimes=0}};function u0(i,e,t,n,s,r,a){let o=new Sr,l=new ll,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,w,N,B,J){let P=B.fog,W=J.geometry,D=S.isMeshStandardMaterial?B.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||D),Y=se&&se.mapping===Wa?se.image.height:null,Q=_[S.type];S.precision!==null&&(u=s.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let ie=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=ie!==void 0?ie.length:0,me=0;W.morphAttributes.position!==void 0&&(me=1),W.morphAttributes.normal!==void 0&&(me=2),W.morphAttributes.color!==void 0&&(me=3);let te,fe,Ae,He;if(Q){let yt=_i[Q];te=yt.vertexShader,fe=yt.fragmentShader}else te=S.vertexShader,fe=S.fragmentShader,l.update(S),Ae=l.getVertexShaderID(S),He=l.getFragmentShaderID(S);let ze=i.getRenderTarget(),rt=J.isInstancedMesh===!0,ht=J.isBatchedMesh===!0,Ve=!!S.map,bt=!!S.matcap,Z=!!se,Kt=!!S.aoMap,Ze=!!S.lightMap,it=!!S.bumpMap,Xe=!!S.normalMap,Ft=!!S.displacementMap,dt=!!S.emissiveMap,R=!!S.metalnessMap,b=!!S.roughnessMap,K=S.anisotropy>0,Me=S.clearcoat>0,xe=S.iridescence>0,be=S.sheen>0,Ye=S.transmission>0,Re=K&&!!S.anisotropyMap,Oe=Me&&!!S.clearcoatMap,nt=Me&&!!S.clearcoatNormalMap,at=Me&&!!S.clearcoatRoughnessMap,oe=xe&&!!S.iridescenceMap,ot=xe&&!!S.iridescenceThicknessMap,et=be&&!!S.sheenColorMap,lt=be&&!!S.sheenRoughnessMap,$e=!!S.specularMap,De=!!S.specularColorMap,Ke=!!S.specularIntensityMap,At=Ye&&!!S.transmissionMap,Fe=Ye&&!!S.thicknessMap,Ie=!!S.gradientMap,pe=!!S.alphaMap,U=S.alphaTest>0,Ce=!!S.alphaHash,Pe=!!S.extensions,Qe=!!W.attributes.uv1,Ge=!!W.attributes.uv2,St=!!W.attributes.uv3,Rt=Wi;return S.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(Rt=i.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:fe,defines:S.defines,customVertexShaderID:Ae,customFragmentShaderID:He,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:ht,instancing:rt,instancingColor:rt&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:Ai,map:Ve,matcap:bt,envMap:Z,envMapMode:Z&&se.mapping,envMapCubeUVHeight:Y,aoMap:Kt,lightMap:Ze,bumpMap:it,normalMap:Xe,displacementMap:d&&Ft,emissiveMap:dt,normalMapObjectSpace:Xe&&S.normalMapType===Rd,normalMapTangentSpace:Xe&&S.normalMapType===Kh,metalnessMap:R,roughnessMap:b,anisotropy:K,anisotropyMap:Re,clearcoat:Me,clearcoatMap:Oe,clearcoatNormalMap:nt,clearcoatRoughnessMap:at,iridescence:xe,iridescenceMap:oe,iridescenceThicknessMap:ot,sheen:be,sheenColorMap:et,sheenRoughnessMap:lt,specularMap:$e,specularColorMap:De,specularIntensityMap:Ke,transmission:Ye,transmissionMap:At,thicknessMap:Fe,gradientMap:Ie,opaque:S.transparent===!1&&S.blending===Vs,alphaMap:pe,alphaTest:U,alphaHash:Ce,combine:S.combine,mapUv:Ve&&v(S.map.channel),aoMapUv:Kt&&v(S.aoMap.channel),lightMapUv:Ze&&v(S.lightMap.channel),bumpMapUv:it&&v(S.bumpMap.channel),normalMapUv:Xe&&v(S.normalMap.channel),displacementMapUv:Ft&&v(S.displacementMap.channel),emissiveMapUv:dt&&v(S.emissiveMap.channel),metalnessMapUv:R&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:Re&&v(S.anisotropyMap.channel),clearcoatMapUv:Oe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:et&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:lt&&v(S.sheenRoughnessMap.channel),specularMapUv:$e&&v(S.specularMap.channel),specularColorMapUv:De&&v(S.specularColorMap.channel),specularIntensityMapUv:Ke&&v(S.specularIntensityMap.channel),transmissionMapUv:At&&v(S.transmissionMap.channel),thicknessMapUv:Fe&&v(S.thicknessMap.channel),alphaMapUv:pe&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Xe||K),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Qe,vertexUv2s:Ge,vertexUv3s:St,pointsUvs:J.isPoints===!0&&!!W.attributes.uv&&(Ve||pe),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:me,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&Ot.getTransfer(S.map.colorSpace)===Gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hn,flipSided:S.side===Wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Pe&&S.extensions.derivatives===!0,extensionFragDepth:Pe&&S.extensions.fragDepth===!0,extensionDrawBuffers:Pe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)w.push(N),w.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(M(w,S),y(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function M(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function y(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function T(S){let w=_[S.type],N;if(w){let B=_i[w];N=Qd.clone(B.uniforms)}else N=S.uniforms;return N}function O(S,w){let N;for(let B=0,J=c.length;B<J;B++){let P=c[B];if(P.cacheKey===w){N=P,++N.usedTimes;break}}return N===void 0&&(N=new c0(i,w,S,r),c.push(N)),N}function I(S){if(--S.usedTimes===0){let w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function $(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:O,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:$}}function d0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function f0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,u,_,v,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,d,u,_,v,m){let p=a(f,d,u,_,v,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):t.push(p)}function l(f,d,u,_,v,m){let p=a(f,d,u,_,v,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||f0),n.length>1&&n.sort(d||Sh),s.length>1&&s.sort(d||Sh)}function h(){for(let f=e,d=i.length;f<d;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function p0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Eh,i.set(n,[a])):s>=r.length?(a=new Eh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function m0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new mt};break;case"SpotLight":t={position:new F,direction:new F,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function g0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var x0=0;function _0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function y0(i,e){let t=new m0,n=g0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new pn,o=new pn;function l(h,f){let d=0,u=0,_=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let v=0,m=0,p=0,M=0,y=0,T=0,O=0,I=0,L=0,$=0,S=0;h.sort(_0);let w=f===!0?Math.PI:1;for(let B=0,J=h.length;B<J;B++){let P=h[B],W=P.color,D=P.intensity,se=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=W.r*D*w,u+=W.g*D*w,_+=W.b*D*w;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(P.sh.coefficients[Q],D);S++}else if(P.isDirectionalLight){let Q=t.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){let ie=P.shadow,he=n.get(P);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,s.directionalShadow[v]=he,s.directionalShadowMap[v]=Y,s.directionalShadowMatrix[v]=P.shadow.matrix,T++}s.directional[v]=Q,v++}else if(P.isSpotLight){let Q=t.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(W).multiplyScalar(D*w),Q.distance=se,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,s.spot[p]=Q;let ie=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,ie.updateMatrices(P),P.castShadow&&$++),s.spotLightMatrix[p]=ie.matrix,P.castShadow){let he=n.get(P);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,s.spotShadow[p]=he,s.spotShadowMap[p]=Y,I++}p++}else if(P.isRectAreaLight){let Q=t.get(P);Q.color.copy(W).multiplyScalar(D),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=Q,M++}else if(P.isPointLight){let Q=t.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*w),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){let ie=P.shadow,he=n.get(P);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,he.shadowCameraNear=ie.camera.near,he.shadowCameraFar=ie.camera.far,s.pointShadow[m]=he,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=P.shadow.matrix,O++}s.point[m]=Q,m++}else if(P.isHemisphereLight){let Q=t.get(P);Q.skyColor.copy(P.color).multiplyScalar(D*w),Q.groundColor.copy(P.groundColor).multiplyScalar(D*w),s.hemi[y]=Q,y++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=u,s.ambient[2]=_;let N=s.hash;(N.directionalLength!==v||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==M||N.hemiLength!==y||N.numDirectionalShadows!==T||N.numPointShadows!==O||N.numSpotShadows!==I||N.numSpotMaps!==L||N.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=M,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=I+L-$,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=$,s.numLightProbes=S,N.directionalLength=v,N.pointLength=m,N.spotLength=p,N.rectAreaLength=M,N.hemiLength=y,N.numDirectionalShadows=T,N.numPointShadows=O,N.numSpotShadows=I,N.numSpotMaps=L,N.numLightProbes=S,s.version=x0++)}function c(h,f){let d=0,u=0,_=0,v=0,m=0,p=f.matrixWorldInverse;for(let M=0,y=h.length;M<y;M++){let T=h[M];if(T.isDirectionalLight){let O=s.directional[d];O.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),d++}else if(T.isSpotLight){let O=s.spot[_];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),O.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),_++}else if(T.isRectAreaLight){let O=s.rectArea[v];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let O=s.point[u];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){let O=s.hemi[m];O.direction.setFromMatrixPosition(T.matrixWorld),O.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Th(i,e){let t=new y0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function v0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Th(i,e),t.set(r,[l])):a>=o.length?(l=new Th(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var hl=class extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ul=class extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},M0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
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
}`;function S0(i,e,t){let n=new Er,s=new Ne,r=new Ne,a=new An,o=new hl({depthPacking:Ad}),l=new ul,c={},h=t.maxTextureSize,f={[qi]:Wn,[Wn]:qi,[hn]:hn},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:M0,fragmentShader:b0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let _=new qn;_.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ct(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let p=this.type;this.render=function(I,L,$){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let S=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Gi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let J=p!==Ti&&this.type===Ti,P=p===Ti&&this.type!==Ti;for(let W=0,D=I.length;W<D;W++){let se=I[W],Y=se.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let Q=Y.getFrameExtents();if(s.multiply(Q),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,Y.mapSize.y=r.y)),Y.map===null||J===!0||P===!0){let he=this.type!==Ti?{minFilter:Nn,magFilter:Nn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ri(s.x,s.y,he),Y.map.texture.name=se.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let ie=Y.getViewportCount();for(let he=0;he<ie;he++){let me=Y.getViewport(he);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),B.viewport(a),Y.updateMatrices(se,he),n=Y.getFrustum(),T(L,$,Y.camera,se,this.type)}Y.isPointLightShadow!==!0&&this.type===Ti&&M(Y,$),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,w,N)};function M(I,L){let $=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ri(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,$,d,v,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,$,u,v,null)}function y(I,L,$,S){let w=null,N=$.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)w=N;else if(w=$.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let B=w.uuid,J=L.uuid,P=c[B];P===void 0&&(P={},c[B]=P);let W=P[J];W===void 0&&(W=w.clone(),P[J]=W,L.addEventListener("dispose",O)),w=W}if(w.visible=L.visible,w.wireframe=L.wireframe,S===Ti?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:f[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,$.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let B=i.properties.get(w);B.light=$}return w}function T(I,L,$,S,w){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Ti)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,I.matrixWorld);let J=e.update(I),P=I.material;if(Array.isArray(P)){let W=J.groups;for(let D=0,se=W.length;D<se;D++){let Y=W[D],Q=P[Y.materialIndex];if(Q&&Q.visible){let ie=y(I,Q,S,w);I.onBeforeShadow(i,I,L,$,J,ie,Y),i.renderBufferDirect($,null,J,ie,I,Y),I.onAfterShadow(i,I,L,$,J,ie,Y)}}}else if(P.visible){let W=y(I,P,S,w);I.onBeforeShadow(i,I,L,$,J,W,null),i.renderBufferDirect($,null,J,W,I,null),I.onAfterShadow(i,I,L,$,J,W,null)}}let B=I.children;for(let J=0,P=B.length;J<P;J++)T(B[J],L,$,S,w)}function O(I){I.target.removeEventListener("dispose",O);for(let $ in c){let S=c[$],w=I.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function E0(i,e,t){let n=t.isWebGL2;function s(){let U=!1,Ce=new An,Pe=null,Qe=new An(0,0,0,0);return{setMask:function(Ge){Pe!==Ge&&!U&&(i.colorMask(Ge,Ge,Ge,Ge),Pe=Ge)},setLocked:function(Ge){U=Ge},setClear:function(Ge,St,Rt,Ct,yt){yt===!0&&(Ge*=Ct,St*=Ct,Rt*=Ct),Ce.set(Ge,St,Rt,Ct),Qe.equals(Ce)===!1&&(i.clearColor(Ge,St,Rt,Ct),Qe.copy(Ce))},reset:function(){U=!1,Pe=null,Qe.set(-1,0,0,0)}}}function r(){let U=!1,Ce=null,Pe=null,Qe=null;return{setTest:function(Ge){Ge?ht(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(Ge){Ce!==Ge&&!U&&(i.depthMask(Ge),Ce=Ge)},setFunc:function(Ge){if(Pe!==Ge){switch(Ge){case nd:i.depthFunc(i.NEVER);break;case id:i.depthFunc(i.ALWAYS);break;case sd:i.depthFunc(i.LESS);break;case ua:i.depthFunc(i.LEQUAL);break;case rd:i.depthFunc(i.EQUAL);break;case ad:i.depthFunc(i.GEQUAL);break;case od:i.depthFunc(i.GREATER);break;case ld:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=Ge}},setLocked:function(Ge){U=Ge},setClear:function(Ge){Qe!==Ge&&(i.clearDepth(Ge),Qe=Ge)},reset:function(){U=!1,Ce=null,Pe=null,Qe=null}}}function a(){let U=!1,Ce=null,Pe=null,Qe=null,Ge=null,St=null,Rt=null,Ct=null,yt=null;return{setTest:function(gt){U||(gt?ht(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(gt){Ce!==gt&&!U&&(i.stencilMask(gt),Ce=gt)},setFunc:function(gt,Wt,Jt){(Pe!==gt||Qe!==Wt||Ge!==Jt)&&(i.stencilFunc(gt,Wt,Jt),Pe=gt,Qe=Wt,Ge=Jt)},setOp:function(gt,Wt,Jt){(St!==gt||Rt!==Wt||Ct!==Jt)&&(i.stencilOp(gt,Wt,Jt),St=gt,Rt=Wt,Ct=Jt)},setLocked:function(gt){U=gt},setClear:function(gt){yt!==gt&&(i.clearStencil(gt),yt=gt)},reset:function(){U=!1,Ce=null,Pe=null,Qe=null,Ge=null,St=null,Rt=null,Ct=null,yt=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,f=new WeakMap,d={},u={},_=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,O=null,I=null,L=null,$=null,S=new mt(0,0,0),w=0,N=!1,B=null,J=null,P=null,W=null,D=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,Q=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Y=Q>=1):ie.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Y=Q>=2);let he=null,me={},te=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Ae=new An().fromArray(te),He=new An().fromArray(fe);function ze(U,Ce,Pe,Qe){let Ge=new Uint8Array(4),St=i.createTexture();i.bindTexture(U,St),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<Pe;Rt++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ce,0,i.RGBA,1,1,Qe,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(Ce+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return St}let rt={};rt[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(rt[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ht(i.DEPTH_TEST),l.setFunc(ua),dt(!1),R(sc),ht(i.CULL_FACE),Xe(Gi);function ht(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function Ve(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function bt(U,Ce){return u[U]!==Ce?(i.bindFramebuffer(U,Ce),u[U]=Ce,n&&(U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ce),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ce)),!0):!1}function Z(U,Ce){let Pe=v,Qe=!1;if(U)if(Pe=_.get(Ce),Pe===void 0&&(Pe=[],_.set(Ce,Pe)),U.isWebGLMultipleRenderTargets){let Ge=U.texture;if(Pe.length!==Ge.length||Pe[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Rt=Ge.length;St<Rt;St++)Pe[St]=i.COLOR_ATTACHMENT0+St;Pe.length=Ge.length,Qe=!0}}else Pe[0]!==i.COLOR_ATTACHMENT0&&(Pe[0]=i.COLOR_ATTACHMENT0,Qe=!0);else Pe[0]!==i.BACK&&(Pe[0]=i.BACK,Qe=!0);Qe&&(t.isWebGL2?i.drawBuffers(Pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pe))}function Kt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let Ze={[os]:i.FUNC_ADD,[zu]:i.FUNC_SUBTRACT,[Vu]:i.FUNC_REVERSE_SUBTRACT};if(n)Ze[lc]=i.MIN,Ze[cc]=i.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(Ze[lc]=U.MIN_EXT,Ze[cc]=U.MAX_EXT)}let it={[Gu]:i.ZERO,[Wu]:i.ONE,[Xu]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Zu]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[Ku]:i.ONE_MINUS_DST_COLOR,[$u]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[ed]:i.CONSTANT_ALPHA,[td]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(U,Ce,Pe,Qe,Ge,St,Rt,Ct,yt,gt){if(U===Gi){p===!0&&(Ve(i.BLEND),p=!1);return}if(p===!1&&(ht(i.BLEND),p=!0),U!==Hu){if(U!==M||gt!==N){if((y!==os||I!==os)&&(i.blendEquation(i.FUNC_ADD),y=os,I=os),gt)switch(U){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,O=null,L=null,$=null,S.set(0,0,0),w=0,M=U,N=gt}return}Ge=Ge||Ce,St=St||Pe,Rt=Rt||Qe,(Ce!==y||Ge!==I)&&(i.blendEquationSeparate(Ze[Ce],Ze[Ge]),y=Ce,I=Ge),(Pe!==T||Qe!==O||St!==L||Rt!==$)&&(i.blendFuncSeparate(it[Pe],it[Qe],it[St],it[Rt]),T=Pe,O=Qe,L=St,$=Rt),(Ct.equals(S)===!1||yt!==w)&&(i.blendColor(Ct.r,Ct.g,Ct.b,yt),S.copy(Ct),w=yt),M=U,N=!1}function Ft(U,Ce){U.side===hn?Ve(i.CULL_FACE):ht(i.CULL_FACE);let Pe=U.side===Wn;Ce&&(Pe=!Pe),dt(Pe),U.blending===Vs&&U.transparent===!1?Xe(Gi):Xe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);let Qe=U.stencilWrite;c.setTest(Qe),Qe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),K(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(U){B!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),B=U)}function R(U){U!==Bu?(ht(i.CULL_FACE),U!==J&&(U===sc?i.cullFace(i.BACK):U===ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),J=U}function b(U){U!==P&&(Y&&i.lineWidth(U),P=U)}function K(U,Ce,Pe){U?(ht(i.POLYGON_OFFSET_FILL),(W!==Ce||D!==Pe)&&(i.polygonOffset(Ce,Pe),W=Ce,D=Pe)):Ve(i.POLYGON_OFFSET_FILL)}function Me(U){U?ht(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function xe(U){U===void 0&&(U=i.TEXTURE0+se-1),he!==U&&(i.activeTexture(U),he=U)}function be(U,Ce,Pe){Pe===void 0&&(he===null?Pe=i.TEXTURE0+se-1:Pe=he);let Qe=me[Pe];Qe===void 0&&(Qe={type:void 0,texture:void 0},me[Pe]=Qe),(Qe.type!==U||Qe.texture!==Ce)&&(he!==Pe&&(i.activeTexture(Pe),he=Pe),i.bindTexture(U,Ce||rt[U]),Qe.type=U,Qe.texture=Ce)}function Ye(){let U=me[he];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(U){Ae.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ae.copy(U))}function At(U){He.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),He.copy(U))}function Fe(U,Ce){let Pe=f.get(Ce);Pe===void 0&&(Pe=new WeakMap,f.set(Ce,Pe));let Qe=Pe.get(U);Qe===void 0&&(Qe=i.getUniformBlockIndex(Ce,U.name),Pe.set(U,Qe))}function Ie(U,Ce){let Qe=f.get(Ce).get(U);h.get(Ce)!==Qe&&(i.uniformBlockBinding(Ce,Qe,U.__bindingPointIndex),h.set(Ce,Qe))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},he=null,me={},u={},_=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,O=null,I=null,L=null,$=null,S=new mt(0,0,0),w=0,N=!1,B=null,J=null,P=null,W=null,D=null,Ae.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ht,disable:Ve,bindFramebuffer:bt,drawBuffers:Z,useProgram:Kt,setBlending:Xe,setMaterial:Ft,setFlipSided:dt,setCullFace:R,setLineWidth:b,setPolygonOffset:K,setScissorTest:Me,activeTexture:xe,bindTexture:be,unbindTexture:Ye,compressedTexImage2D:Re,compressedTexImage3D:Oe,texImage2D:$e,texImage3D:De,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:et,texStorage3D:lt,texSubImage2D:nt,texSubImage3D:at,compressedTexSubImage2D:oe,compressedTexSubImage3D:ot,scissor:Ke,viewport:At,reset:pe}}function T0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return u?new OffscreenCanvas(R,b):_a("canvas")}function v(R,b,K,Me){let xe=1;if((R.width>Me||R.height>Me)&&(xe=Me/Math.max(R.width,R.height)),xe<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let be=b?Qo:Math.floor,Ye=be(xe*R.width),Re=be(xe*R.height);f===void 0&&(f=_(Ye,Re));let Oe=K?_(Ye,Re):f;return Oe.width=Ye,Oe.height=Re,Oe.getContext("2d").drawImage(R,0,0,Ye,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ye+"x"+Re+")."),Oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Vc(R.width)&&Vc(R.height)}function p(R){return o?!1:R.wrapS!==di||R.wrapT!==di||R.minFilter!==Nn&&R.minFilter!==ti}function M(R,b){return R.generateMipmaps&&b&&R.minFilter!==Nn&&R.minFilter!==ti}function y(R){i.generateMipmap(R)}function T(R,b,K,Me,xe=!1){if(o===!1)return b;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let be=b;if(b===i.RED&&(K===i.FLOAT&&(be=i.R32F),K===i.HALF_FLOAT&&(be=i.R16F),K===i.UNSIGNED_BYTE&&(be=i.R8)),b===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(be=i.R8UI),K===i.UNSIGNED_SHORT&&(be=i.R16UI),K===i.UNSIGNED_INT&&(be=i.R32UI),K===i.BYTE&&(be=i.R8I),K===i.SHORT&&(be=i.R16I),K===i.INT&&(be=i.R32I)),b===i.RG&&(K===i.FLOAT&&(be=i.RG32F),K===i.HALF_FLOAT&&(be=i.RG16F),K===i.UNSIGNED_BYTE&&(be=i.RG8)),b===i.RGBA){let Ye=xe?pa:Ot.getTransfer(Me);K===i.FLOAT&&(be=i.RGBA32F),K===i.HALF_FLOAT&&(be=i.RGBA16F),K===i.UNSIGNED_BYTE&&(be=Ye===Gt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(be=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(be=i.RGB5_A1)}return(be===i.R16F||be===i.R32F||be===i.RG16F||be===i.RG32F||be===i.RGBA16F||be===i.RGBA32F)&&e.get("EXT_color_buffer_float"),be}function O(R,b,K){return M(R,K)===!0||R.isFramebufferTexture&&R.minFilter!==Nn&&R.minFilter!==ti?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function I(R){return R===Nn||R===hc||R===co?i.NEAREST:i.LINEAR}function L(R){let b=R.target;b.removeEventListener("dispose",L),S(b),b.isVideoTexture&&h.delete(b)}function $(R){let b=R.target;b.removeEventListener("dispose",$),N(b)}function S(R){let b=n.get(R);if(b.__webglInit===void 0)return;let K=R.source,Me=d.get(K);if(Me){let xe=Me[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&w(R),Object.keys(Me).length===0&&d.delete(K)}n.remove(R)}function w(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let K=R.source,Me=d.get(K);delete Me[b.__cacheKey],a.memory.textures--}function N(R){let b=R.texture,K=n.get(R),Me=n.get(b);if(Me.__webglTexture!==void 0&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(K.__webglFramebuffer[xe]))for(let be=0;be<K.__webglFramebuffer[xe].length;be++)i.deleteFramebuffer(K.__webglFramebuffer[xe][be]);else i.deleteFramebuffer(K.__webglFramebuffer[xe]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[xe])}else{if(Array.isArray(K.__webglFramebuffer))for(let xe=0;xe<K.__webglFramebuffer.length;xe++)i.deleteFramebuffer(K.__webglFramebuffer[xe]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let xe=0;xe<K.__webglColorRenderbuffer.length;xe++)K.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[xe]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let xe=0,be=b.length;xe<be;xe++){let Ye=n.get(b[xe]);Ye.__webglTexture&&(i.deleteTexture(Ye.__webglTexture),a.memory.textures--),n.remove(b[xe])}n.remove(b),n.remove(R)}let B=0;function J(){B=0}function P(){let R=B;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),B+=1,R}function W(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function D(R,b){let K=n.get(R);if(R.isVideoTexture&&Ft(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){let Me=R.image;if(Me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(K,R,b);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+b)}function se(R,b){let K=n.get(R);if(R.version>0&&K.__version!==R.version){Ae(K,R,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+b)}function Y(R,b){let K=n.get(R);if(R.version>0&&K.__version!==R.version){Ae(K,R,b);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+b)}function Q(R,b){let K=n.get(R);if(R.version>0&&K.__version!==R.version){He(K,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+b)}let ie={[yr]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},he={[Nn]:i.NEAREST,[hc]:i.NEAREST_MIPMAP_NEAREST,[co]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[xd]:i.LINEAR_MIPMAP_NEAREST,[vr]:i.LINEAR_MIPMAP_LINEAR},me={[Cd]:i.NEVER,[Nd]:i.ALWAYS,[Pd]:i.LESS,[Jh]:i.LEQUAL,[Id]:i.EQUAL,[Ud]:i.GEQUAL,[Ld]:i.GREATER,[Dd]:i.NOTEQUAL};function te(R,b,K){if(K?(i.texParameteri(R,i.TEXTURE_WRAP_S,ie[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ie[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ie[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,he[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,he[b.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==di||b.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,I(b.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==Nn&&b.minFilter!==ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Me=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Nn||b.minFilter!==co&&b.minFilter!==vr||b.type===Vi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Mr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(R,Me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function fe(R,b){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",L));let Me=b.source,xe=d.get(Me);xe===void 0&&(xe={},d.set(Me,xe));let be=W(b);if(be!==R.__cacheKey){xe[be]===void 0&&(xe[be]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),xe[be].usedTimes++;let Ye=xe[R.__cacheKey];Ye!==void 0&&(xe[R.__cacheKey].usedTimes--,Ye.usedTimes===0&&w(b)),R.__cacheKey=be,R.__webglTexture=xe[be].texture}return K}function Ae(R,b,K){let Me=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Me=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Me=i.TEXTURE_3D);let xe=fe(R,b),be=b.source;t.bindTexture(Me,R.__webglTexture,i.TEXTURE0+K);let Ye=n.get(be);if(be.version!==Ye.__version||xe===!0){t.activeTexture(i.TEXTURE0+K);let Re=Ot.getPrimaries(Ot.workingColorSpace),Oe=b.colorSpace===ni?null:Ot.getPrimaries(b.colorSpace),nt=b.colorSpace===ni||Re===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let at=p(b)&&m(b.image)===!1,oe=v(b.image,at,!1,s.maxTextureSize);oe=dt(b,oe);let ot=m(oe)||o,et=r.convert(b.format,b.colorSpace),lt=r.convert(b.type),$e=T(b.internalFormat,et,lt,b.colorSpace,b.isVideoTexture);te(Me,b,ot);let De,Ke=b.mipmaps,At=o&&b.isVideoTexture!==!0&&$e!==$h,Fe=Ye.__version===void 0||xe===!0,Ie=O(b,oe,ot);if(b.isDepthTexture)$e=i.DEPTH_COMPONENT,o?b.type===Vi?$e=i.DEPTH_COMPONENT32F:b.type===zi?$e=i.DEPTH_COMPONENT24:b.type===cs?$e=i.DEPTH24_STENCIL8:$e=i.DEPTH_COMPONENT16:b.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===hs&&$e===i.DEPTH_COMPONENT&&b.type!==Hl&&b.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=zi,lt=r.convert(b.type)),b.format===Ys&&$e===i.DEPTH_COMPONENT&&($e=i.DEPTH_STENCIL,b.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=cs,lt=r.convert(b.type))),Fe&&(At?t.texStorage2D(i.TEXTURE_2D,1,$e,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,$e,oe.width,oe.height,0,et,lt,null));else if(b.isDataTexture)if(Ke.length>0&&ot){At&&Fe&&t.texStorage2D(i.TEXTURE_2D,Ie,$e,Ke[0].width,Ke[0].height);for(let pe=0,U=Ke.length;pe<U;pe++)De=Ke[pe],At?t.texSubImage2D(i.TEXTURE_2D,pe,0,0,De.width,De.height,et,lt,De.data):t.texImage2D(i.TEXTURE_2D,pe,$e,De.width,De.height,0,et,lt,De.data);b.generateMipmaps=!1}else At?(Fe&&t.texStorage2D(i.TEXTURE_2D,Ie,$e,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,et,lt,oe.data)):t.texImage2D(i.TEXTURE_2D,0,$e,oe.width,oe.height,0,et,lt,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){At&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,$e,Ke[0].width,Ke[0].height,oe.depth);for(let pe=0,U=Ke.length;pe<U;pe++)De=Ke[pe],b.format!==fi?et!==null?At?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,De.width,De.height,oe.depth,et,De.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,$e,De.width,De.height,oe.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,De.width,De.height,oe.depth,et,lt,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,$e,De.width,De.height,oe.depth,0,et,lt,De.data)}else{At&&Fe&&t.texStorage2D(i.TEXTURE_2D,Ie,$e,Ke[0].width,Ke[0].height);for(let pe=0,U=Ke.length;pe<U;pe++)De=Ke[pe],b.format!==fi?et!==null?At?t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,De.width,De.height,et,De.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,$e,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage2D(i.TEXTURE_2D,pe,0,0,De.width,De.height,et,lt,De.data):t.texImage2D(i.TEXTURE_2D,pe,$e,De.width,De.height,0,et,lt,De.data)}else if(b.isDataArrayTexture)At?(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,$e,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,et,lt,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,oe.width,oe.height,oe.depth,0,et,lt,oe.data);else if(b.isData3DTexture)At?(Fe&&t.texStorage3D(i.TEXTURE_3D,Ie,$e,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,et,lt,oe.data)):t.texImage3D(i.TEXTURE_3D,0,$e,oe.width,oe.height,oe.depth,0,et,lt,oe.data);else if(b.isFramebufferTexture){if(Fe)if(At)t.texStorage2D(i.TEXTURE_2D,Ie,$e,oe.width,oe.height);else{let pe=oe.width,U=oe.height;for(let Ce=0;Ce<Ie;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,$e,pe,U,0,et,lt,null),pe>>=1,U>>=1}}else if(Ke.length>0&&ot){At&&Fe&&t.texStorage2D(i.TEXTURE_2D,Ie,$e,Ke[0].width,Ke[0].height);for(let pe=0,U=Ke.length;pe<U;pe++)De=Ke[pe],At?t.texSubImage2D(i.TEXTURE_2D,pe,0,0,et,lt,De):t.texImage2D(i.TEXTURE_2D,pe,$e,et,lt,De);b.generateMipmaps=!1}else At?(Fe&&t.texStorage2D(i.TEXTURE_2D,Ie,$e,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,et,lt,oe)):t.texImage2D(i.TEXTURE_2D,0,$e,et,lt,oe);M(b,ot)&&y(Me),Ye.__version=be.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function He(R,b,K){if(b.image.length!==6)return;let Me=fe(R,b),xe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+K);let be=n.get(xe);if(xe.version!==be.__version||Me===!0){t.activeTexture(i.TEXTURE0+K);let Ye=Ot.getPrimaries(Ot.workingColorSpace),Re=b.colorSpace===ni?null:Ot.getPrimaries(b.colorSpace),Oe=b.colorSpace===ni||Ye===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let nt=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,oe=[];for(let pe=0;pe<6;pe++)!nt&&!at?oe[pe]=v(b.image[pe],!1,!0,s.maxCubemapSize):oe[pe]=at?b.image[pe].image:b.image[pe],oe[pe]=dt(b,oe[pe]);let ot=oe[0],et=m(ot)||o,lt=r.convert(b.format,b.colorSpace),$e=r.convert(b.type),De=T(b.internalFormat,lt,$e,b.colorSpace),Ke=o&&b.isVideoTexture!==!0,At=be.__version===void 0||Me===!0,Fe=O(b,ot,et);te(i.TEXTURE_CUBE_MAP,b,et);let Ie;if(nt){Ke&&At&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,De,ot.width,ot.height);for(let pe=0;pe<6;pe++){Ie=oe[pe].mipmaps;for(let U=0;U<Ie.length;U++){let Ce=Ie[U];b.format!==fi?lt!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,0,0,Ce.width,Ce.height,lt,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,De,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,0,0,Ce.width,Ce.height,lt,$e,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,De,Ce.width,Ce.height,0,lt,$e,Ce.data)}}}else{Ie=b.mipmaps,Ke&&At&&(Ie.length>0&&Fe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,De,oe[0].width,oe[0].height));for(let pe=0;pe<6;pe++)if(at){Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,oe[pe].width,oe[pe].height,lt,$e,oe[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,De,oe[pe].width,oe[pe].height,0,lt,$e,oe[pe].data);for(let U=0;U<Ie.length;U++){let Pe=Ie[U].image[pe].image;Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,0,0,Pe.width,Pe.height,lt,$e,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,De,Pe.width,Pe.height,0,lt,$e,Pe.data)}}else{Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,lt,$e,oe[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,De,lt,$e,oe[pe]);for(let U=0;U<Ie.length;U++){let Ce=Ie[U];Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,0,0,lt,$e,Ce.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,De,lt,$e,Ce.image[pe])}}}M(b,et)&&y(i.TEXTURE_CUBE_MAP),be.__version=xe.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ze(R,b,K,Me,xe,be){let Ye=r.convert(K.format,K.colorSpace),Re=r.convert(K.type),Oe=T(K.internalFormat,Ye,Re,K.colorSpace);if(!n.get(b).__hasExternalTextures){let at=Math.max(1,b.width>>be),oe=Math.max(1,b.height>>be);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,be,Oe,at,oe,b.depth,0,Ye,Re,null):t.texImage2D(xe,be,Oe,at,oe,0,Ye,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Xe(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,xe,n.get(K).__webglTexture,0,it(b)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Me,xe,n.get(K).__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,b,K){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let Me=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||Xe(b)){let xe=b.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Vi?Me=i.DEPTH_COMPONENT32F:xe.type===zi&&(Me=i.DEPTH_COMPONENT24));let be=it(b);Xe(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,Me,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Me,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,Me,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){let Me=it(b);K&&Xe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,i.DEPTH24_STENCIL8,b.width,b.height):Xe(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let Me=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let xe=0;xe<Me.length;xe++){let be=Me[xe],Ye=r.convert(be.format,be.colorSpace),Re=r.convert(be.type),Oe=T(be.internalFormat,Ye,Re,be.colorSpace),nt=it(b);K&&Xe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Oe,b.width,b.height):Xe(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Oe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),D(b.depthTexture,0);let Me=n.get(b.depthTexture).__webglTexture,xe=it(b);if(b.depthTexture.format===hs)Xe(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Me,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Me,0);else if(b.depthTexture.format===Ys)Xe(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Me,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Ve(R){let b=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ht(b.__webglFramebuffer,R)}else if(K){b.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Me]),b.__webglDepthbuffer[Me]=i.createRenderbuffer(),rt(b.__webglDepthbuffer[Me],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),rt(b.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(R,b,K){let Me=n.get(R);b!==void 0&&ze(Me.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ve(R)}function Z(R){let b=R.texture,K=n.get(R),Me=n.get(b);R.addEventListener("dispose",$),R.isWebGLMultipleRenderTargets!==!0&&(Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture()),Me.__version=b.version,a.memory.textures++);let xe=R.isWebGLCubeRenderTarget===!0,be=R.isWebGLMultipleRenderTargets===!0,Ye=m(R)||o;if(xe){K.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(o&&b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Re]=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)K.__webglFramebuffer[Re][Oe]=i.createFramebuffer()}else K.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Re=0;Re<b.mipmaps.length;Re++)K.__webglFramebuffer[Re]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(be)if(s.drawBuffers){let Re=R.texture;for(let Oe=0,nt=Re.length;Oe<nt;Oe++){let at=n.get(Re[Oe]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Xe(R)===!1){let Re=be?b:[b];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Re.length;Oe++){let nt=Re[Oe];K.__webglColorRenderbuffer[Oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Oe]);let at=r.convert(nt.format,nt.colorSpace),oe=r.convert(nt.type),ot=T(nt.internalFormat,at,oe,nt.colorSpace,R.isXRRenderTarget===!0),et=it(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,ot,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,K.__webglColorRenderbuffer[Oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,Me.__webglTexture),te(i.TEXTURE_CUBE_MAP,b,Ye);for(let Re=0;Re<6;Re++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)ze(K.__webglFramebuffer[Re][Oe],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Oe);else ze(K.__webglFramebuffer[Re],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);M(b,Ye)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){let Re=R.texture;for(let Oe=0,nt=Re.length;Oe<nt;Oe++){let at=Re[Oe],oe=n.get(at);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),te(i.TEXTURE_2D,at,Ye),ze(K.__webglFramebuffer,R,at,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,0),M(at,Ye)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?Re=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Re,Me.__webglTexture),te(Re,b,Ye),o&&b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)ze(K.__webglFramebuffer[Oe],R,b,i.COLOR_ATTACHMENT0,Re,Oe);else ze(K.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,Re,0);M(b,Ye)&&y(Re),t.unbindTexture()}R.depthBuffer&&Ve(R)}function Kt(R){let b=m(R)||o,K=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Me=0,xe=K.length;Me<xe;Me++){let be=K[Me];if(M(be,b)){let Ye=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Re=n.get(be).__webglTexture;t.bindTexture(Ye,Re),y(Ye),t.unbindTexture()}}}function Ze(R){if(o&&R.samples>0&&Xe(R)===!1){let b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],K=R.width,Me=R.height,xe=i.COLOR_BUFFER_BIT,be=[],Ye=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(R),Oe=R.isWebGLMultipleRenderTargets===!0;if(Oe)for(let nt=0;nt<b.length;nt++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let nt=0;nt<b.length;nt++){be.push(i.COLOR_ATTACHMENT0+nt),R.depthBuffer&&be.push(Ye);let at=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(at===!1&&(R.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),Oe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[nt]),at===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ye])),Oe){let oe=n.get(b[nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,K,Me,0,0,K,Me,xe,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Oe)for(let nt=0;nt<b.length;nt++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,Re.__webglColorRenderbuffer[nt]);let at=n.get(b[nt]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,at,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function it(R){return Math.min(s.maxSamples,R.samples)}function Xe(R){let b=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ft(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function dt(R,b){let K=R.colorSpace,Me=R.format,xe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Jo||K!==Ai&&K!==ni&&(Ot.getTransfer(K)===Gt?o===!1?e.has("EXT_sRGB")===!0&&Me===fi?(R.format=Jo,R.minFilter=ti,R.generateMipmaps=!1):b=ya.sRGBToLinear(b):(Me!==fi||xe!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=D,this.setTexture2DArray=se,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=bt,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Xe}function w0(i,e,t){let n=t.isWebGL2;function s(r,a=ni){let o,l=Ot.getTransfer(a);if(r===Xi)return i.UNSIGNED_BYTE;if(r===Gh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===_d)return i.BYTE;if(r===yd)return i.SHORT;if(r===Hl)return i.UNSIGNED_SHORT;if(r===Vh)return i.INT;if(r===zi)return i.UNSIGNED_INT;if(r===Vi)return i.FLOAT;if(r===Mr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===vd)return i.ALPHA;if(r===fi)return i.RGBA;if(r===Md)return i.LUMINANCE;if(r===bd)return i.LUMINANCE_ALPHA;if(r===hs)return i.DEPTH_COMPONENT;if(r===Ys)return i.DEPTH_STENCIL;if(r===Jo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Sd)return i.RED;if(r===Xh)return i.RED_INTEGER;if(r===Ed)return i.RG;if(r===qh)return i.RG_INTEGER;if(r===Yh)return i.RGBA_INTEGER;if(r===ho||r===uo||r===fo||r===po)if(l===Gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ho)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ho)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uc||r===dc||r===fc||r===pc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===uc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$h)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===mc||r===gc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===mc)return l===Gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===gc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xc||r===_c||r===yc||r===vc||r===Mc||r===bc||r===Sc||r===Ec||r===Tc||r===wc||r===Ac||r===Rc||r===Cc||r===Pc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===xc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_c)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ec)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ac)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pc)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mo||r===Ic||r===Lc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===mo)return l===Gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ic)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Td||r===Dc||r===Uc||r===Nc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===mo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Dc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cs?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var dl=class extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ii=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},A0={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,_=.005;c.inputState.pinching&&d>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fl=class extends Yi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,_=null,v=t.getContextAttributes(),m=null,p=null,M=[],y=[],T=new Ne,O=null,I=new On;I.layers.enable(1),I.viewport=new An;let L=new On;L.layers.enable(2),L.viewport=new An;let $=[I,L],S=new dl;S.layers.enable(1),S.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=M[te];return fe===void 0&&(fe=new mr,M[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=M[te];return fe===void 0&&(fe=new mr,M[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=M[te];return fe===void 0&&(fe=new mr,M[te]=fe),fe.getHandSpace()};function B(te){let fe=y.indexOf(te.inputSource);if(fe===-1)return;let Ae=M[fe];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,c||a),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function J(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",P);for(let te=0;te<M.length;te++){let fe=y[te];fe!==null&&(y[te]=null,M[te].disconnect(fe))}w=null,N=null,e.setRenderTarget(m),u=null,d=null,f=null,s=null,p=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",J),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let fe={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new Ri(u.framebufferWidth,u.framebufferHeight,{format:fi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,Ae=null,He=null;v.depth&&(He=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?Ys:hs,Ae=v.stencil?cs:zi);let ze={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Ri(d.textureWidth,d.textureHeight,{format:fi,type:Xi,depthTexture:new Ca(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let rt=e.properties.get(p);rt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(te){for(let fe=0;fe<te.removed.length;fe++){let Ae=te.removed[fe],He=y.indexOf(Ae);He>=0&&(y[He]=null,M[He].disconnect(Ae))}for(let fe=0;fe<te.added.length;fe++){let Ae=te.added[fe],He=y.indexOf(Ae);if(He===-1){for(let rt=0;rt<M.length;rt++)if(rt>=y.length){y.push(Ae),He=rt;break}else if(y[rt]===null){y[rt]=Ae,He=rt;break}if(He===-1)break}let ze=M[He];ze&&ze.connect(Ae)}}let W=new F,D=new F;function se(te,fe,Ae){W.setFromMatrixPosition(fe.matrixWorld),D.setFromMatrixPosition(Ae.matrixWorld);let He=W.distanceTo(D),ze=fe.projectionMatrix.elements,rt=Ae.projectionMatrix.elements,ht=ze[14]/(ze[10]-1),Ve=ze[14]/(ze[10]+1),bt=(ze[9]+1)/ze[5],Z=(ze[9]-1)/ze[5],Kt=(ze[8]-1)/ze[0],Ze=(rt[8]+1)/rt[0],it=ht*Kt,Xe=ht*Ze,Ft=He/(-Kt+Ze),dt=Ft*-Kt;fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(dt),te.translateZ(Ft),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let R=ht+Ft,b=Ve+Ft,K=it-dt,Me=Xe+(He-dt),xe=bt*Ve/b*R,be=Z*Ve/b*R;te.projectionMatrix.makePerspective(K,Me,xe,be,R,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function Y(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;S.near=L.near=I.near=te.near,S.far=L.far=I.far=te.far,(w!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,N=S.far);let fe=te.parent,Ae=S.cameras;Y(S,fe);for(let He=0;He<Ae.length;He++)Y(Ae[He],fe);Ae.length===2?se(S,I,L):S.projectionMatrix.copy(I.projectionMatrix),Q(te,S,fe)};function Q(te,fe,Ae){Ae===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=jo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)};let ie=null;function he(te,fe){if(h=fe.getViewerPose(c||a),_=fe,h!==null){let Ae=h.views;u!==null&&(e.setRenderTargetFramebuffer(p,u.framebuffer),e.setRenderTarget(p));let He=!1;Ae.length!==S.cameras.length&&(S.cameras.length=0,He=!0);for(let ze=0;ze<Ae.length;ze++){let rt=Ae[ze],ht=null;if(u!==null)ht=u.getViewport(rt);else{let bt=f.getViewSubImage(d,rt);ht=bt.viewport,ze===0&&(e.setRenderTargetTextures(p,bt.colorTexture,d.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(p))}let Ve=$[ze];Ve===void 0&&(Ve=new On,Ve.layers.enable(ze),Ve.viewport=new An,$[ze]=Ve),Ve.matrix.fromArray(rt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(rt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ht.x,ht.y,ht.width,ht.height),ze===0&&(S.matrix.copy(Ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),He===!0&&S.cameras.push(Ve)}}for(let Ae=0;Ae<M.length;Ae++){let He=y[Ae],ze=M[Ae];He!==null&&ze!==void 0&&ze.update(He,fe,c||a)}ie&&ie(te,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),_=null}let me=new tu;me.setAnimationLoop(he),this.setAnimationLoop=function(te){ie=te},this.dispose=function(){}}};function R0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,eu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){let T=y.program;n.uniformBlockBinding(M,T)}function c(M,y){let T=s[M.id];T===void 0&&(_(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",m));let O=y.program;n.updateUBOMapping(M,O);let I=e.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function h(M){let y=f();M.__bindingPointIndex=y;let T=i.createBuffer(),O=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,O,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=s[M.id],T=M.uniforms,O=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,L=T.length;I<L;I++){let $=Array.isArray(T[I])?T[I]:[T[I]];for(let S=0,w=$.length;S<w;S++){let N=$[S];if(u(N,I,S,O)===!0){let B=N.__offset,J=Array.isArray(N.value)?N.value:[N.value],P=0;for(let W=0;W<J.length;W++){let D=J[W],se=v(D);typeof D=="number"||typeof D=="boolean"?(N.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,B+P,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=0,N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=0,N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=0):(D.toArray(N.__data,P),P+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,y,T,O){let I=M.value,L=y+"_"+T;if(O[L]===void 0)return typeof I=="number"||typeof I=="boolean"?O[L]=I:O[L]=I.clone(),!0;{let $=O[L];if(typeof I=="number"||typeof I=="boolean"){if($!==I)return O[L]=I,!0}else if($.equals(I)===!1)return $.copy(I),!0}return!1}function _(M){let y=M.uniforms,T=0,O=16;for(let L=0,$=y.length;L<$;L++){let S=Array.isArray(y[L])?y[L]:[y[L]];for(let w=0,N=S.length;w<N;w++){let B=S[w],J=Array.isArray(B.value)?B.value:[B.value];for(let P=0,W=J.length;P<W;P++){let D=J[P],se=v(D),Y=T%O;Y!==0&&O-Y<se.boundary&&(T+=O-Y),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=se.storage}}}let I=T%O;return I>0&&(T+=O-I),M.__size=T,M.__cache={},this}function v(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Tr=class{constructor(e={}){let{canvas:t=Fd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let u=new Uint32Array(4),_=new Int32Array(4),v=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;let y=this,T=!1,O=0,I=0,L=null,$=-1,S=null,w=new An,N=new An,B=null,J=new mt(0),P=0,W=t.width,D=t.height,se=1,Y=null,Q=null,ie=new An(0,0,W,D),he=new An(0,0,W,D),me=!1,te=new Er,fe=!1,Ae=!1,He=null,ze=new pn,rt=new Ne,ht=new F,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return L===null?se:1}let Z=n;function Kt(E,X){for(let j=0;j<E.length;j++){let ne=E[j],q=t.getContext(ne,X);if(q!==null)return q}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bl}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),Z===null){let X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),Z=Kt(X,E),Z===null)throw Kt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ze,it,Xe,Ft,dt,R,b,K,Me,xe,be,Ye,Re,Oe,nt,at,oe,ot,et,lt,$e,De,Ke,At;function Fe(){Ze=new $m(Z),it=new Vm(Z,Ze,e),Ze.init(it),De=new w0(Z,Ze,it),Xe=new E0(Z,Ze,it),Ft=new Jm(Z),dt=new d0,R=new T0(Z,Ze,Xe,dt,it,De,Ft),b=new Wm(y),K=new Ym(y),Me=new rf(Z,it),Ke=new Hm(Z,Ze,Me,it),xe=new Zm(Z,Me,Ft,Ke),be=new tg(Z,xe,Me,Ft),et=new eg(Z,it,R),at=new Gm(dt),Ye=new u0(y,b,K,Ze,it,Ke,at),Re=new R0(y,dt),Oe=new p0,nt=new v0(Ze,it),ot=new km(y,b,K,Xe,be,d,l),oe=new S0(y,be,it),At=new C0(Z,Ft,it,Xe),lt=new zm(Z,Ze,Ft,it),$e=new Km(Z,Ze,Ft,it),Ft.programs=Ye.programs,y.capabilities=it,y.extensions=Ze,y.properties=dt,y.renderLists=Oe,y.shadowMap=oe,y.state=Xe,y.info=Ft}Fe();let Ie=new fl(y,Z);this.xr=Ie,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(W,D,!1))},this.getSize=function(E){return E.set(W,D)},this.setSize=function(E,X,j=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,D=X,t.width=Math.floor(E*se),t.height=Math.floor(X*se),j===!0&&(t.style.width=E+"px",t.style.height=X+"px"),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(W*se,D*se).floor()},this.setDrawingBufferSize=function(E,X,j){W=E,D=X,se=j,t.width=Math.floor(E*j),t.height=Math.floor(X*j),this.setViewport(0,0,E,X)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,X,j,ne){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,X,j,ne),Xe.viewport(w.copy(ie).multiplyScalar(se).floor())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,X,j,ne){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,X,j,ne),Xe.scissor(N.copy(he).multiplyScalar(se).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(E){Xe.setScissorTest(me=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(E=!0,X=!0,j=!0){let ne=0;if(E){let q=!1;if(L!==null){let Le=L.texture.format;q=Le===Yh||Le===qh||Le===Xh}if(q){let Le=L.texture.type,qe=Le===Xi||Le===zi||Le===Hl||Le===cs||Le===Gh||Le===Wh,Be=ot.getClearColor(),st=ot.getClearAlpha(),vt=Be.r,ut=Be.g,ft=Be.b;qe?(u[0]=vt,u[1]=ut,u[2]=ft,u[3]=st,Z.clearBufferuiv(Z.COLOR,0,u)):(_[0]=vt,_[1]=ut,_[2]=ft,_[3]=st,Z.clearBufferiv(Z.COLOR,0,_))}else ne|=Z.COLOR_BUFFER_BIT}X&&(ne|=Z.DEPTH_BUFFER_BIT),j&&(ne|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Oe.dispose(),nt.dispose(),dt.dispose(),b.dispose(),K.dispose(),be.dispose(),Ke.dispose(),At.dispose(),Ye.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",yt),Ie.removeEventListener("sessionend",gt),He&&(He.dispose(),He=null),Wt.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Ft.autoReset,X=oe.enabled,j=oe.autoUpdate,ne=oe.needsUpdate,q=oe.type;Fe(),Ft.autoReset=E,oe.enabled=X,oe.autoUpdate=j,oe.needsUpdate=ne,oe.type=q}function Ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pe(E){let X=E.target;X.removeEventListener("dispose",Pe),Qe(X)}function Qe(E){Ge(E),dt.remove(E)}function Ge(E){let X=dt.get(E).programs;X!==void 0&&(X.forEach(function(j){Ye.releaseProgram(j)}),E.isShaderMaterial&&Ye.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,j,ne,q,Le){X===null&&(X=Ve);let qe=q.isMesh&&q.matrixWorld.determinant()<0,Be=tr(E,X,j,ne,q);Xe.setMaterial(ne,qe);let st=j.index,vt=1;if(ne.wireframe===!0){if(st=xe.getWireframeAttribute(j),st===void 0)return;vt=2}let ut=j.drawRange,ft=j.attributes.position,jt=ut.start*vt,Xt=(ut.start+ut.count)*vt;Le!==null&&(jt=Math.max(jt,Le.start*vt),Xt=Math.min(Xt,(Le.start+Le.count)*vt)),st!==null?(jt=Math.max(jt,0),Xt=Math.min(Xt,st.count)):ft!=null&&(jt=Math.max(jt,0),Xt=Math.min(Xt,ft.count));let un=Xt-jt;if(un<0||un===1/0)return;Ke.setup(q,ne,Be,j,st);let oi,Bt=lt;if(st!==null&&(oi=Me.get(st),Bt=$e,Bt.setIndex(oi)),q.isMesh)ne.wireframe===!0?(Xe.setLineWidth(ne.wireframeLinewidth*bt()),Bt.setMode(Z.LINES)):Bt.setMode(Z.TRIANGLES);else if(q.isLine){let xt=ne.linewidth;xt===void 0&&(xt=1),Xe.setLineWidth(xt*bt()),q.isLineSegments?Bt.setMode(Z.LINES):q.isLineLoop?Bt.setMode(Z.LINE_LOOP):Bt.setMode(Z.LINE_STRIP)}else q.isPoints?Bt.setMode(Z.POINTS):q.isSprite&&Bt.setMode(Z.TRIANGLES);if(q.isBatchedMesh)Bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Bt.renderInstances(jt,un,q.count);else if(j.isInstancedBufferGeometry){let xt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Hn=Math.min(j.instanceCount,xt);Bt.renderInstances(jt,un,Hn)}else Bt.render(jt,un)};function St(E,X,j){E.transparent===!0&&E.side===hn&&E.forceSinglePass===!1?(E.side=Wn,E.needsUpdate=!0,Qi(E,X,j),E.side=qi,E.needsUpdate=!0,Qi(E,X,j),E.side=hn):Qi(E,X,j)}this.compile=function(E,X,j=null){j===null&&(j=E),m=nt.get(j),m.init(),M.push(m),j.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),E!==j&&E.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(y._useLegacyLights);let ne=new Set;return E.traverse(function(q){let Le=q.material;if(Le)if(Array.isArray(Le))for(let qe=0;qe<Le.length;qe++){let Be=Le[qe];St(Be,j,q),ne.add(Be)}else St(Le,j,q),ne.add(Le)}),M.pop(),m=null,ne},this.compileAsync=function(E,X,j=null){let ne=this.compile(E,X,j);return new Promise(q=>{function Le(){if(ne.forEach(function(qe){dt.get(qe).currentProgram.isReady()&&ne.delete(qe)}),ne.size===0){q(E);return}setTimeout(Le,10)}Ze.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Rt=null;function Ct(E){Rt&&Rt(E)}function yt(){Wt.stop()}function gt(){Wt.start()}let Wt=new tu;Wt.setAnimationLoop(Ct),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(E){Rt=E,Ie.setAnimationLoop(E),E===null?Wt.stop():Wt.start()},Ie.addEventListener("sessionstart",yt),Ie.addEventListener("sessionend",gt),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(X),X=Ie.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,X,L),m=nt.get(E,M.length),m.init(),M.push(m),ze.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(ze),Ae=this.localClippingEnabled,fe=at.init(this.clippingPlanes,Ae),v=Oe.get(E,p.length),v.init(),p.push(v),Jt(E,X,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Y,Q),this.info.render.frame++,fe===!0&&at.beginShadows();let j=m.state.shadowsArray;if(oe.render(j,E,X),fe===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(v,E),m.setupLights(y._useLegacyLights),X.isArrayCamera){let ne=X.cameras;for(let q=0,Le=ne.length;q<Le;q++){let qe=ne[q];Dn(v,E,qe,qe.viewport)}}else Dn(v,E,X);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,X),Ke.resetDefaultState(),$=-1,S=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Jt(E,X,j,ne){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){ne&&ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ze);let qe=be.update(E),Be=E.material;Be.visible&&v.push(E,qe,Be,j,ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){let qe=be.update(E),Be=E.material;if(ne&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ht.copy(E.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),ht.copy(qe.boundingSphere.center)),ht.applyMatrix4(E.matrixWorld).applyMatrix4(ze)),Array.isArray(Be)){let st=qe.groups;for(let vt=0,ut=st.length;vt<ut;vt++){let ft=st[vt],jt=Be[ft.materialIndex];jt&&jt.visible&&v.push(E,qe,jt,j,ht.z,ft)}}else Be.visible&&v.push(E,qe,Be,j,ht.z,null)}}let Le=E.children;for(let qe=0,Be=Le.length;qe<Be;qe++)Jt(Le[qe],X,j,ne)}function Dn(E,X,j,ne){let q=E.opaque,Le=E.transmissive,qe=E.transparent;m.setupLightsView(j),fe===!0&&at.setGlobalState(y.clippingPlanes,j),Le.length>0&&Yn(q,Le,X,j),ne&&Xe.viewport(w.copy(ne)),q.length>0&&mi(q,X,j),Le.length>0&&mi(Le,X,j),qe.length>0&&mi(qe,X,j),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Yn(E,X,j,ne){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let Le=it.isWebGL2;He===null&&(He=new Ri(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")?Mr:Xi,minFilter:vr,samples:Le?4:0})),y.getDrawingBufferSize(rt),Le?He.setSize(rt.x,rt.y):He.setSize(Qo(rt.x),Qo(rt.y));let qe=y.getRenderTarget();y.setRenderTarget(He),y.getClearColor(J),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();let Be=y.toneMapping;y.toneMapping=Wi,mi(E,j,ne),R.updateMultisampleRenderTarget(He),R.updateRenderTargetMipmap(He);let st=!1;for(let vt=0,ut=X.length;vt<ut;vt++){let ft=X[vt],jt=ft.object,Xt=ft.geometry,un=ft.material,oi=ft.group;if(un.side===hn&&jt.layers.test(ne.layers)){let Bt=un.side;un.side=Wn,un.needsUpdate=!0,ai(jt,j,ne,Xt,un,oi),un.side=Bt,un.needsUpdate=!0,st=!0}}st===!0&&(R.updateMultisampleRenderTarget(He),R.updateRenderTargetMipmap(He)),y.setRenderTarget(qe),y.setClearColor(J,P),y.toneMapping=Be}function mi(E,X,j){let ne=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Le=E.length;q<Le;q++){let qe=E[q],Be=qe.object,st=qe.geometry,vt=ne===null?qe.material:ne,ut=qe.group;Be.layers.test(j.layers)&&ai(Be,X,j,st,vt,ut)}}function ai(E,X,j,ne,q,Le){E.onBeforeRender(y,X,j,ne,q,Le),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(y,X,j,ne,E,Le),q.transparent===!0&&q.side===hn&&q.forceSinglePass===!1?(q.side=Wn,q.needsUpdate=!0,y.renderBufferDirect(j,X,ne,q,E,Le),q.side=qi,q.needsUpdate=!0,y.renderBufferDirect(j,X,ne,q,E,Le),q.side=hn):y.renderBufferDirect(j,X,ne,q,E,Le),E.onAfterRender(y,X,j,ne,q,Le)}function Qi(E,X,j){X.isScene!==!0&&(X=Ve);let ne=dt.get(E),q=m.state.lights,Le=m.state.shadowsArray,qe=q.state.version,Be=Ye.getParameters(E,q.state,Le,X,j),st=Ye.getProgramCacheKey(Be),vt=ne.programs;ne.environment=E.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(E.isMeshStandardMaterial?K:b).get(E.envMap||ne.environment),vt===void 0&&(E.addEventListener("dispose",Pe),vt=new Map,ne.programs=vt);let ut=vt.get(st);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===qe)return Ii(E,Be),ut}else Be.uniforms=Ye.getUniforms(E),E.onBuild(j,Be,y),E.onBeforeCompile(Be,y),ut=Ye.acquireProgram(Be,st),vt.set(st,ut),ne.uniforms=Be.uniforms;let ft=ne.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ft.clippingPlanes=at.uniform),Ii(E,Be),ne.needsLights=eo(E),ne.lightsStateVersion=qe,ne.needsLights&&(ft.ambientLightColor.value=q.state.ambient,ft.lightProbe.value=q.state.probe,ft.directionalLights.value=q.state.directional,ft.directionalLightShadows.value=q.state.directionalShadow,ft.spotLights.value=q.state.spot,ft.spotLightShadows.value=q.state.spotShadow,ft.rectAreaLights.value=q.state.rectArea,ft.ltc_1.value=q.state.rectAreaLTC1,ft.ltc_2.value=q.state.rectAreaLTC2,ft.pointLights.value=q.state.point,ft.pointLightShadows.value=q.state.pointShadow,ft.hemisphereLights.value=q.state.hemi,ft.directionalShadowMap.value=q.state.directionalShadowMap,ft.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ft.spotShadowMap.value=q.state.spotShadowMap,ft.spotLightMatrix.value=q.state.spotLightMatrix,ft.spotLightMap.value=q.state.spotLightMap,ft.pointShadowMap.value=q.state.pointShadowMap,ft.pointShadowMatrix.value=q.state.pointShadowMatrix),ne.currentProgram=ut,ne.uniformsList=null,ut}function on(E){if(E.uniformsList===null){let X=E.currentProgram.getUniforms();E.uniformsList=Ws.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function Ii(E,X){let j=dt.get(E);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function tr(E,X,j,ne,q){X.isScene!==!0&&(X=Ve),R.resetTextureUnits();let Le=X.fog,qe=ne.isMeshStandardMaterial?X.environment:null,Be=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ai,st=(ne.isMeshStandardMaterial?K:b).get(ne.envMap||qe),vt=ne.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ut=!!j.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ft=!!j.morphAttributes.position,jt=!!j.morphAttributes.normal,Xt=!!j.morphAttributes.color,un=Wi;ne.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(un=y.toneMapping);let oi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Bt=oi!==void 0?oi.length:0,xt=dt.get(ne),Hn=m.state.lights;if(fe===!0&&(Ae===!0||E!==S)){let zn=E===S&&ne.id===$;at.setState(ne,E,zn)}let kt=!1;ne.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Hn.state.version||xt.outputColorSpace!==Be||q.isBatchedMesh&&xt.batching===!1||!q.isBatchedMesh&&xt.batching===!0||q.isInstancedMesh&&xt.instancing===!1||!q.isInstancedMesh&&xt.instancing===!0||q.isSkinnedMesh&&xt.skinning===!1||!q.isSkinnedMesh&&xt.skinning===!0||q.isInstancedMesh&&xt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&xt.instancingColor===!1&&q.instanceColor!==null||xt.envMap!==st||ne.fog===!0&&xt.fog!==Le||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==at.numPlanes||xt.numIntersection!==at.numIntersection)||xt.vertexAlphas!==vt||xt.vertexTangents!==ut||xt.morphTargets!==ft||xt.morphNormals!==jt||xt.morphColors!==Xt||xt.toneMapping!==un||it.isWebGL2===!0&&xt.morphTargetsCount!==Bt)&&(kt=!0):(kt=!0,xt.__version=ne.version);let Kn=xt.currentProgram;kt===!0&&(Kn=Qi(ne,X,q));let nr=!1,es=!1,ts=!1,mn=Kn.getUniforms(),gi=xt.uniforms;if(Xe.useProgram(Kn.program)&&(nr=!0,es=!0,ts=!0),ne.id!==$&&($=ne.id,es=!0),nr||S!==E){mn.setValue(Z,"projectionMatrix",E.projectionMatrix),mn.setValue(Z,"viewMatrix",E.matrixWorldInverse);let zn=mn.map.cameraPosition;zn!==void 0&&zn.setValue(Z,ht.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&mn.setValue(Z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&mn.setValue(Z,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,es=!0,ts=!0)}if(q.isSkinnedMesh){mn.setOptional(Z,q,"bindMatrix"),mn.setOptional(Z,q,"bindMatrixInverse");let zn=q.skeleton;zn&&(it.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),mn.setValue(Z,"boneTexture",zn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(mn.setOptional(Z,q,"batchingTexture"),mn.setValue(Z,"batchingTexture",q._matricesTexture,R));let It=j.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0&&it.isWebGL2===!0)&&et.update(q,j,Kn),(es||xt.receiveShadow!==q.receiveShadow)&&(xt.receiveShadow=q.receiveShadow,mn.setValue(Z,"receiveShadow",q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(gi.envMap.value=st,gi.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),es&&(mn.setValue(Z,"toneMappingExposure",y.toneMappingExposure),xt.needsLights&&Qa(gi,ts),Le&&ne.fog===!0&&Re.refreshFogUniforms(gi,Le),Re.refreshMaterialUniforms(gi,ne,se,D,He),Ws.upload(Z,on(xt),gi,R)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ws.upload(Z,on(xt),gi,R),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&mn.setValue(Z,"center",q.center),mn.setValue(Z,"modelViewMatrix",q.modelViewMatrix),mn.setValue(Z,"normalMatrix",q.normalMatrix),mn.setValue(Z,"modelMatrix",q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let zn=ne.uniformsGroups;for(let Ht=0,ys=zn.length;Ht<ys;Ht++)if(it.isWebGL2){let ir=zn[Ht];At.update(ir,Kn),At.bind(ir,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function Qa(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function eo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,X,j){dt.get(E.texture).__webglTexture=X,dt.get(E.depthTexture).__webglTexture=j;let ne=dt.get(E);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=j===void 0,ne.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,X){let j=dt.get(E);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(E,X=0,j=0){L=E,O=X,I=j;let ne=!0,q=null,Le=!1,qe=!1;if(E){let st=dt.get(E);st.__useDefaultFramebuffer!==void 0?(Xe.bindFramebuffer(Z.FRAMEBUFFER,null),ne=!1):st.__webglFramebuffer===void 0?R.setupRenderTarget(E):st.__hasExternalTextures&&R.rebindTextures(E,dt.get(E.texture).__webglTexture,dt.get(E.depthTexture).__webglTexture);let vt=E.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(qe=!0);let ut=dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ut[X])?q=ut[X][j]:q=ut[X],Le=!0):it.isWebGL2&&E.samples>0&&R.useMultisampledRTT(E)===!1?q=dt.get(E).__webglMultisampledFramebuffer:Array.isArray(ut)?q=ut[j]:q=ut,w.copy(E.viewport),N.copy(E.scissor),B=E.scissorTest}else w.copy(ie).multiplyScalar(se).floor(),N.copy(he).multiplyScalar(se).floor(),B=me;if(Xe.bindFramebuffer(Z.FRAMEBUFFER,q)&&it.drawBuffers&&ne&&Xe.drawBuffers(E,q),Xe.viewport(w),Xe.scissor(N),Xe.setScissorTest(B),Le){let st=dt.get(E.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+X,st.__webglTexture,j)}else if(qe){let st=dt.get(E.texture),vt=X||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,st.__webglTexture,j||0,vt)}$=-1},this.readRenderTargetPixels=function(E,X,j,ne,q,Le,qe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&qe!==void 0&&(Be=Be[qe]),Be){Xe.bindFramebuffer(Z.FRAMEBUFFER,Be);try{let st=E.texture,vt=st.format,ut=st.type;if(vt!==fi&&De.convert(vt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ft=ut===Mr&&(Ze.has("EXT_color_buffer_half_float")||it.isWebGL2&&Ze.has("EXT_color_buffer_float"));if(ut!==Xi&&De.convert(ut)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ut===Vi&&(it.isWebGL2||Ze.has("OES_texture_float")||Ze.has("WEBGL_color_buffer_float")))&&!ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-ne&&j>=0&&j<=E.height-q&&Z.readPixels(X,j,ne,q,De.convert(vt),De.convert(ut),Le)}finally{let st=L!==null?dt.get(L).__webglFramebuffer:null;Xe.bindFramebuffer(Z.FRAMEBUFFER,st)}}},this.copyFramebufferToTexture=function(E,X,j=0){let ne=Math.pow(2,-j),q=Math.floor(X.image.width*ne),Le=Math.floor(X.image.height*ne);R.setTexture2D(X,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,j,0,0,E.x,E.y,q,Le),Xe.unbindTexture()},this.copyTextureToTexture=function(E,X,j,ne=0){let q=X.image.width,Le=X.image.height,qe=De.convert(j.format),Be=De.convert(j.type);R.setTexture2D(j,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,j.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,j.unpackAlignment),X.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ne,E.x,E.y,q,Le,qe,Be,X.image.data):X.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ne,E.x,E.y,X.mipmaps[0].width,X.mipmaps[0].height,qe,X.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,ne,E.x,E.y,qe,Be,X.image),ne===0&&j.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(E,X,j,ne,q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Le=E.max.x-E.min.x+1,qe=E.max.y-E.min.y+1,Be=E.max.z-E.min.z+1,st=De.convert(ne.format),vt=De.convert(ne.type),ut;if(ne.isData3DTexture)R.setTexture3D(ne,0),ut=Z.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)R.setTexture2DArray(ne,0),ut=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ne.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ne.unpackAlignment);let ft=Z.getParameter(Z.UNPACK_ROW_LENGTH),jt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Xt=Z.getParameter(Z.UNPACK_SKIP_PIXELS),un=Z.getParameter(Z.UNPACK_SKIP_ROWS),oi=Z.getParameter(Z.UNPACK_SKIP_IMAGES),Bt=j.isCompressedTexture?j.mipmaps[q]:j.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Bt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Bt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,E.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,E.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,E.min.z),j.isDataTexture||j.isData3DTexture?Z.texSubImage3D(ut,q,X.x,X.y,X.z,Le,qe,Be,st,vt,Bt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(ut,q,X.x,X.y,X.z,Le,qe,Be,st,Bt.data)):Z.texSubImage3D(ut,q,X.x,X.y,X.z,Le,qe,Be,st,vt,Bt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ft),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,jt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Xt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,un),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,oi),q===0&&ne.generateMipmaps&&Z.generateMipmap(ut),Xe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Xe.unbindTexture()},this.resetState=function(){O=0,I=0,L=null,Xe.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===zl?"display-p3":"srgb",t.unpackColorSpace=Ot.workingColorSpace===Xa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rn?us:Zh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===us?Rn:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},pl=class extends Tr{};pl.prototype.isWebGL1Renderer=!0;var Pa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new mt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ia=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var wr=class extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wh=new F,Ah=new F,Rh=new pn,zo=new br,aa=new $s,ml=class extends Fn{constructor(e=new qn,t=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wh.fromBufferAttribute(t,s-1),Ah.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wh.distanceTo(Ah);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;Rh.copy(s).invert(),zo.copy(e.ray).applyMatrix4(Rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,h=new F,f=new F,d=new F,u=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){let p=Math.max(0,a.start),M=Math.min(_.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=u){let O=_.getX(y),I=_.getX(y+1);if(c.fromBufferAttribute(m,O),h.fromBufferAttribute(m,I),zo.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let $=e.ray.origin.distanceTo(d);$<e.near||$>e.far||t.push({distance:$,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=u){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),zo.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Ch=new F,Ph=new F,La=class extends ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ch.fromBufferAttribute(t,s),Ph.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ch.distanceTo(Ph);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Da=class extends si{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ne:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new pn;for(let u=0;u<=e;u++){let _=u/e;s[u]=this.getTangentAt(_,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(In(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,_))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(In(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],u*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ar=class extends ri{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Ne,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gl=class extends Ar{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var oa=new F,Vo=new Gl,Go=new Gl,Wo=new Gl,xl=class extends ri{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(oa.subVectors(s[0],s[1]).add(s[0]),c=oa);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),Vo.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,_,v,m),Go.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,_,v,m),Wo.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Go.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Wo.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Vo.calc(l),Go.calc(l),Wo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ih(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function P0(i,e){let t=1-i;return t*t*e}function I0(i,e){return 2*(1-i)*i*e}function L0(i,e){return i*i*e}function gr(i,e,t,n){return P0(i,e)+I0(i,t)+L0(i,n)}function D0(i,e){let t=1-i;return t*t*t*e}function U0(i,e){let t=1-i;return 3*t*t*i*e}function N0(i,e){return 3*(1-i)*i*i*e}function O0(i,e){return i*i*i*e}function xr(i,e,t,n,s){return D0(i,e)+U0(i,t)+N0(i,n)+O0(i,s)}var Ua=class extends ri{constructor(e=new Ne,t=new Ne,n=new Ne,s=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_l=class extends ri{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y),xr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Na=class extends ri{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends ri{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends ri{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(e,s.x,r.x,a.x),gr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends ri{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(e,s.x,r.x,a.x),gr(e,s.y,r.y,a.y),gr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Ih(o,l.x,c.x,h.x,f.x),Ih(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ne().fromArray(s))}return this}},Lh=Object.freeze({__proto__:null,ArcCurve:gl,CatmullRomCurve3:xl,CubicBezierCurve:Ua,CubicBezierCurve3:_l,EllipseCurve:Ar,LineCurve:Na,LineCurve3:yl,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:vl,SplineCurve:Fa}),Ml=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Lh[s.type]().fromJSON(s))}return this}},Ks=class extends Ml{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Na(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Oa(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ua(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s),new Ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Fa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ar(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Ki=class i extends qn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],_=0,v=[],m=n/2,p=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new nn(f,3)),this.setAttribute("normal",new nn(d,3)),this.setAttribute("uv",new nn(u,2));function M(){let T=new F,O=new F,I=0,L=(t-e)/n;for(let $=0;$<=r;$++){let S=[],w=$/r,N=w*(t-e)+e;for(let B=0;B<=s;B++){let J=B/s,P=J*l+o,W=Math.sin(P),D=Math.cos(P);O.x=N*W,O.y=-w*n+m,O.z=N*D,f.push(O.x,O.y,O.z),T.set(W,L,D).normalize(),d.push(T.x,T.y,T.z),u.push(J,1-w),S.push(_++)}v.push(S)}for(let $=0;$<s;$++)for(let S=0;S<r;S++){let w=v[S][$],N=v[S+1][$],B=v[S+1][$+1],J=v[S][$+1];h.push(w,N,J),h.push(N,B,J),I+=6}c.addGroup(p,I,0),p+=I}function y(T){let O=_,I=new Ne,L=new F,$=0,S=T===!0?e:t,w=T===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*w,0),d.push(0,w,0),u.push(.5,.5),_++;let N=_;for(let B=0;B<=s;B++){let P=B/s*l+o,W=Math.cos(P),D=Math.sin(P);L.x=S*D,L.y=m*w,L.z=S*W,f.push(L.x,L.y,L.z),d.push(0,w,0),I.x=W*.5+.5,I.y=D*.5*w+.5,u.push(I.x,I.y),_++}for(let B=0;B<s;B++){let J=O+B,P=N+B;T===!0?h.push(P,P+1,J):h.push(P+1,P,J),$+=3}c.addGroup(p,$,T===!0?1:2),p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ji=class i extends Ki{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bl=class i extends qn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new nn(r,3)),this.setAttribute("normal",new nn(r.slice(),3)),this.setAttribute("uv",new nn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new F,T=new F,O=new F;for(let I=0;I<t.length;I+=3)u(t[I+0],y),u(t[I+1],T),u(t[I+2],O),l(y,T,O,M)}function l(M,y,T,O){let I=O+1,L=[];for(let $=0;$<=I;$++){L[$]=[];let S=M.clone().lerp(T,$/I),w=y.clone().lerp(T,$/I),N=I-$;for(let B=0;B<=N;B++)B===0&&$===I?L[$][B]=S:L[$][B]=S.clone().lerp(w,B/N)}for(let $=0;$<I;$++)for(let S=0;S<2*(I-$)-1;S++){let w=Math.floor(S/2);S%2===0?(d(L[$][w+1]),d(L[$+1][w]),d(L[$][w])):(d(L[$][w+1]),d(L[$+1][w+1]),d(L[$+1][w]))}}function c(M){let y=new F;for(let T=0;T<r.length;T+=3)y.x=r[T+0],y.y=r[T+1],y.z=r[T+2],y.normalize().multiplyScalar(M),r[T+0]=y.x,r[T+1]=y.y,r[T+2]=y.z}function h(){let M=new F;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let T=m(M)/2/Math.PI+.5,O=p(M)/Math.PI+.5;a.push(T,1-O)}_(),f()}function f(){for(let M=0;M<a.length;M+=6){let y=a[M+0],T=a[M+2],O=a[M+4],I=Math.max(y,T,O),L=Math.min(y,T,O);I>.9&&L<.1&&(y<.2&&(a[M+0]+=1),T<.2&&(a[M+2]+=1),O<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function u(M,y){let T=M*3;y.x=e[T+0],y.y=e[T+1],y.z=e[T+2]}function _(){let M=new F,y=new F,T=new F,O=new F,I=new Ne,L=new Ne,$=new Ne;for(let S=0,w=0;S<r.length;S+=9,w+=6){M.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),T.set(r[S+6],r[S+7],r[S+8]),I.set(a[w+0],a[w+1]),L.set(a[w+2],a[w+3]),$.set(a[w+4],a[w+5]),O.copy(M).add(y).add(T).divideScalar(3);let N=m(O);v(I,w+0,M,N),v(L,w+2,y,N),v($,w+4,T,N)}}function v(M,y,T,O){O<0&&M.x===1&&(a[y]=M.x-1),T.x===0&&T.z===0&&(a[y]=O/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Ba=class i extends bl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Rr=class extends Ks{constructor(e){super(e),this.uuid=js(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ks().fromJSON(s))}return this}},F0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ou(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,d,u;if(n&&(r=V0(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let _=t;_<s;_+=t)f=i[_],d=i[_+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return Cr(r,a,t,o,l,u,0),a}};function ou(i,e,t,n,s){let r,a;if(s===Q0(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Dh(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Dh(r,i[r],i[r+1],a);return a&&Ya(a,a.next)&&(Ir(a),a=a.next),a}function fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ya(t,t.next)||tn(t.prev,t,t.next)===0)){if(Ir(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Cr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Y0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?k0(i,n,s,r):B0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ir(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=H0(fs(i),e,t),Cr(i,e,t,n,s,r,2)):a===2&&z0(i,e,t,n,s,r):Cr(fs(i),e,t,n,s,r,1);break}}}function B0(i){let e=i.prev,t=i,n=i.next;if(tn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=f&&_.y<=u&&zs(s,o,r,l,a,c,_.x,_.y)&&tn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function k0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(tn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,u=o<l?o<c?o:c:l<c?l:c,_=h<f?h<d?h:d:f<d?f:d,v=o>l?o>c?o:c:l>c?l:c,m=h>f?h>d?h:d:f>d?f:d,p=Sl(u,_,e,t,n),M=Sl(v,m,e,t,n),y=i.prevZ,T=i.nextZ;for(;y&&y.z>=p&&T&&T.z<=M;){if(y.x>=u&&y.x<=v&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&zs(o,h,l,f,c,d,y.x,y.y)&&tn(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=u&&T.x<=v&&T.y>=_&&T.y<=m&&T!==s&&T!==a&&zs(o,h,l,f,c,d,T.x,T.y)&&tn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=p;){if(y.x>=u&&y.x<=v&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&zs(o,h,l,f,c,d,y.x,y.y)&&tn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=M;){if(T.x>=u&&T.x<=v&&T.y>=_&&T.y<=m&&T!==s&&T!==a&&zs(o,h,l,f,c,d,T.x,T.y)&&tn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function H0(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ya(s,r)&&lu(s,n,n.next,r)&&Pr(s,r)&&Pr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ir(n),Ir(n.next),n=i=r),n=n.next}while(n!==i);return fs(n)}function z0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&K0(a,o)){let l=cu(a,o);a=fs(a,a.next),l=fs(l,l.next),Cr(a,e,t,n,s,r,0),Cr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function V0(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=ou(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Z0(c));for(s.sort(G0),r=0;r<s.length;r++)t=W0(s[r],t);return t}function G0(i,e){return i.x-e.x}function W0(i,e){let t=X0(i,e);if(!t)return e;let n=cu(t,i);return fs(n,n.next),fs(t,t.next)}function X0(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&zs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),Pr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&q0(s,t)))&&(s=t,h=f)),t=t.next;while(t!==o);return s}function q0(i,e){return tn(i.prev,i,e.prev)<0&&tn(e.next,i,i.next)<0}function Y0(i,e,t,n){let s=i;do s.z===0&&(s.z=Sl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$0(s)}function $0(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Sl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Z0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function zs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function K0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!J0(i,e)&&(Pr(i,e)&&Pr(e,i)&&j0(i,e)&&(tn(i.prev,i,e.prev)||tn(i,e.prev,e))||Ya(i,e)&&tn(i.prev,i,i.next)>0&&tn(e.prev,e,e.next)>0)}function tn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ya(i,e){return i.x===e.x&&i.y===e.y}function lu(i,e,t,n){let s=ca(tn(i,e,t)),r=ca(tn(i,e,n)),a=ca(tn(t,n,i)),o=ca(tn(t,n,e));return!!(s!==r&&a!==o||s===0&&la(i,t,e)||r===0&&la(i,n,e)||a===0&&la(t,i,n)||o===0&&la(t,e,n))}function la(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ca(i){return i>0?1:i<0?-1:0}function J0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&lu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Pr(i,e){return tn(i.prev,i,i.next)<0?tn(i,e,i.next)>=0&&tn(i,i.prev,e)>=0:tn(i,e,i.prev)<0||tn(i,i.next,e)<0}function j0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function cu(i,e){let t=new El(i.i,i.x,i.y),n=new El(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dh(i,e,t,n){let s=new El(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function El(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var _r=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Uh(e),Nh(n,e);let a=e.length;t.forEach(Uh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Nh(n,t[l]);let o=F0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Uh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Nh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ka=class i extends qn{constructor(e=new Rr([new Ne(0,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new nn(s,3)),this.setAttribute("normal",new nn(r,3)),this.setAttribute("uv",new nn(a,2));function c(h){let f=s.length/3,d=h.extractPoints(t),u=d.shape,_=d.holes;_r.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=_.length;m<p;m++){let M=_[m];_r.isClockWise(M)===!0&&(_[m]=M.reverse())}let v=_r.triangulateShape(u,_);for(let m=0,p=_.length;m<p;m++){let M=_[m];u=u.concat(M)}for(let m=0,p=u.length;m<p;m++){let M=u[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=v.length;m<p;m++){let M=v[m],y=M[0]+f,T=M[1]+f,O=M[2]+f;n.push(y,T,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ex(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function ex(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ps=class i extends qn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new F,d=new F,u=[],_=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],y=p/n,T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let O=0;O<=t;O++){let I=O/t;f.x=-e*Math.cos(s+I*r)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(s+I*r)*Math.sin(a+y*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(I+T,1-y),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let y=h[p][M+1],T=h[p][M],O=h[p+1][M],I=h[p+1][M+1];(p!==0||a>0)&&u.push(y,T,I),(p!==n-1||l<Math.PI)&&u.push(T,O,I)}this.setIndex(u),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bn=class extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ha(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function tx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Js=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tl=class extends Js{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fc:r=e,o=2*t-n;break;case Bc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fc:a=e,l=2*n-t;break;case Bc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,_=(n-t)/(s-t),v=_*_,m=v*_,p=-d*m+2*d*v-d*_,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*_+1,y=(-1-u)*m+(1.5+u)*v+.5*_,T=u*m-u*v;for(let O=0;O!==o;++O)r[O]=p*a[h+O]+M*a[c+O]+y*a[l+O]+T*a[f+O];return r}},wl=class extends Js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Al=class extends Js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ha(t,this.TimeBufferType),this.values=ha(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ha(e.times,Array),values:ha(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case fa:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&tx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===go,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,u=f+n;for(let _=0;_!==n;++_){let v=t[f+_];if(v!==t[d+_]||v!==t[u+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=fa;var ms=class extends pi{};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=da;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends pi{};Rl.prototype.ValueTypeName="color";var Cl=class extends pi{};Cl.prototype.ValueTypeName="number";var Pl=class extends Js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)$i.slerpFlat(r,0,a,c-o,a,c,l);return r}},Lr=class extends pi{InterpolantFactoryMethodLinear(e){return new Pl(this.times,this.values,this.getValueSize(),e)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.DefaultInterpolation=fa;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends pi{};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=da;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends pi{};Il.prototype.ValueTypeName="vector";var Ll=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],_=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return _}return null}}},nx=new Ll,Dl=class{constructor(e){this.manager=e!==void 0?e:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ha=class extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Xo=new pn,Oh=new F,Fh=new F,Ul=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new pn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new An(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oh),Fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fh),t.updateMatrixWorld(),Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Nl=class extends Ul{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},za=class extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new Nl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Va=class extends Ha{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wl="\\[\\]\\.:\\/",ix=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",sx="[^"+Wl.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",Xl),ax=/(WCOD+)?/.source.replace("WCOD",sx),ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),cx=new RegExp("^"+rx+ax+ox+lx+"$"),hx=["material","materials","bones","map"],Ol=class{constructor(e,t,n){let s=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(e){let t=cx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Ol;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ex=new Float32Array(1);var Ga=class{constructor(e,t,n=0,s=1/0){this.ray=new br(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Fl(e,this,n,t),n.sort(Bh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fl(e[s],this,n,t);return n.sort(Bh),n}};function Bh(i,e){return i.distance-e.distance}function Fl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Fl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);var dx=35,fx=25,_t=.95,kn=.35,$a=6,xs=130,hu=300,uu=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),px=[{value:"balanced",label:"Balanced (HP + even stats)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],mx=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch","paladin","exorcist","bandit","ranger","blacksmith","alchemist"],Je={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Za=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist"];function gx(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Nt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:16,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:20,maxHp:20,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:18,maxHp:18,mp:5,maxMp:5,str:9,agi:16,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:4,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:24,maxHp:24,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5}},Ka={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:11119017,secondary:14474460,hair:12632256},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:10913299,secondary:16775930,hair:16035328,cape:11402348},blacksmith:{primary:13874819,secondary:9849600,hair:11696641},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331}},Dr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp"},du={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Freeze",description:"Reduce target's AGI by 10 for 2 turns.",cost:4,target:"enemy",range:6,level:1,effectKey:"freeze",type:"spell"},{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:5,target:"enemy",range:6,level:2,effectKey:"arcaneBolt",type:"spell"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:6,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:7,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 3 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 3 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:3,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:7,target:"enemy",range:1,level:2,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 2 turns.",cost:6,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:7,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Assault",description:"Deal LUK-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"assault"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:6,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage to one enemy and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}]};function ce(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function Ja(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",freeze:"Freeze",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,f=(u,_,v,m)=>{if(v)u.hp=Math.min(u.maxHp,u.hp+_),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${_}`,!1,"heal");else{let p=u===s,M=!0;if(!p&&!m){let y=ce(u,"agi")*.7+ce(u,"luk")*.3;M=Math.random()*Math.max(.001,y)<=ce(s,"dex")}return M?(u.hp=Math.max(0,u.hp-_),u!==s&&(h=_),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(_),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),M}},d=(u,_,v,m)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,_,v,!1,m?"buff":"debuff")};switch(i){case"brave":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let u=2;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,d(r.x,r.y,`-${u} STR`,!1),d(s.x,s.y,`+${u} STR`,!0)}break;case"freeze":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=10,r.tempDebuff.duration=3,d(r.x,r.y,"-10 AGI",!1));break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(ce(s,"int")-(ce(r,"int")*.7+ce(r,"luk")*.2)));f(r,u,!1,!0)}break;case"mantra":if(r){let u=Math.max(1,Math.floor(ce(s,"int")*.3));if(s.tempBuff=s.tempBuff||{},s.tempBuff.int=u,s.tempBuff.duration=3,d(s.x,s.y,`+${u} LUK`,!0),!r)break;r.tempBuff=r.tempBuff||{},r.tempBuff.luk=u,r.tempBuff.duration=3,d(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(f(s,Math.max(1,Math.floor(ce(s,"int")*.3+ce(s,"luk")*.2)),!0),!r)break;f(r,Math.max(1,Math.floor(ce(s,"int")*.3+ce(r,"luk")*.2)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,d(r.x,r.y,`-${u} VIT`,!1),d(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)&&f(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=u,r.tempDebuff.duration=4,d(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.6));f(r,u,!1)}break;case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"dex")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,d(r.x,r.y,`-${u} AGI`,!1),d(s.x,s.y,`+${u} AGI`,!0)}break;case"execute":if(r){let u=Math.max(1,Math.floor(ce(s,"agi")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"berserk":r&&(f(r,Math.max(1,Math.floor(ce(s,"str")*.8-ce(r,"vit")*.3+ce(r,"luk")*.2)),!1),f(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=u,s.tempBuff.vit=u,s.tempBuff.duration=2,d(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,d(r.x,r.y,`-${u} INT`,!1),d(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(ce(s,"int")*.6-(ce(r,"int")*.4+ce(r,"luk")*.2)));f(r,u,!1,!0),f(s,u,!0)}break;case"blind":{if(!r)break;let u=1;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,d(r.x,r.y,`-${u} DEX`,!1),d(s.x,s.y,`+${u} DEX`,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"dex")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=4,d(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.4+ce(s,"dex")*.4-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.7+ce(s,"agi")*.1-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=4,d(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let u=Math.max(1,Math.floor(ce(s,"int")*.4));f(r,u,!0),f(s,3,!1)}break;case"judgement":{if(!r)break;let u=Math.max(1,Math.floor(s.maxHp-s.hp-(ce(r,"int")*.3+ce(r,"luk")*.2+ce(r,"vit")*.1)));f(r,u,!1,!0)}break;case"sanctuary":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.vit=1,s.tempBuff.dex=1,s.tempBuff.agi=1,s.tempBuff.int=1,s.tempBuff.luk=1,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=1,r.tempBuff.vit=1,r.tempBuff.dex=1,r.tempBuff.agi=1,r.tempBuff.int=1,r.tempBuff.luk=1,r.tempBuff.duration=3,d(s.x,s.y,"+1 ALL STATS",!0),d(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let u=Math.max(1,Math.floor(r.maxHp-r.hp-(ce(r,"int")*.4+ce(r,"luk")*.2)));f(r,u,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,d(r.x,r.y,"-2 LUK",!1),d(s.x,s.y,"+2 LUK",!0);break;case"assault":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"luk")*.6-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"windWalk":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=1,s.tempBuff.agi=3,s.tempBuff.duration=3,d(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"dex")*.6-(ce(r,"vit")*.3+ce(r,"luk")*.2)));if(f(r,u,!1)&&n.world&&n.units&&n.updateUnitPosition){let v=Math.max(1,Math.floor(u*.2)),m=vx(n.world,n.units,s,r,v);r.x=m.newGx,r.y=m.newGy,n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),m.collisionDamage>0&&f(r,m.collisionDamage,!1)}}break;case"forge":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=2,r.tempBuff.duration=3,d(s.x,s.y,"+2 STR",!0),d(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff=s.tempBuff||{},s.tempBuff.str=3,s.tempBuff.vit=3,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=3,r.tempBuff.vit=3,r.tempBuff.duration=3,d(s.x,s.y,"+3 STR, +3 VIT",!0),d(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let u=Math.max(1,Math.floor(ce(r,"luk")*.2));r.tempDebuff=r.tempDebuff||{},r.tempDebuff.poison=u,r.tempDebuff.duration=3,d(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"int")*.6-(ce(r,"int")*.4+ce(r,"luk")*.2)));f(r,u,!1,!0);let _=Math.max(1,Math.floor(u*.5));s.luk=Math.max(1,(s.luk||0)+_),d(s.x,s.y,`+${_} LUK`,!0)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function xx(){let i=dx,e=fx,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill(Je.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=e-1;for(let N=-1;N<=1;N++)for(let B=-2;B<=2;B++){let J=r+B,P=o+N;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=Je.BASE_TOP,n[P][J]=1)}for(let N=-1;N<=1;N++)for(let B=-2;B<=2;B++){let J=a+B,P=l+N;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=Je.BASE_BOTTOM,n[P][J]=1)}let c=Math.floor(i/2),h=Math.floor(e/2);for(let N=-1;N<=1;N++)for(let B=-2;B<=2;B++){let J=c+B,P=h+N;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=Je.CENTER,n[P][J]=1)}let f=new Set,d=(N,B)=>Math.abs(N-c)<=2&&Math.abs(B-h)<=1,u=(N,B)=>{N<0||N>=i||B<0||B>=e||d(N,B)||f.add(B*i+N)},_=Math.floor(i/2),v=Math.floor(e/2),m=Math.min(i,e)*.29,p=Math.max(60,(e+i)*2);for(let N=0;N<2;N++){let B=N===0?_-m:_+m,J=N===0?Math.PI/2:-Math.PI/2,P=N===0?Math.PI*3/2:Math.PI/2;for(let W=0;W<=p;W++){let D=W/p,se=J+D*(P-J),Y=B+m*Math.cos(se),Q=v+m*Math.sin(se),ie=Math.round(Y),he=Math.round(Q);u(ie,he),u(ie+1,he),u(ie-1,he),u(ie,he+1),u(ie,he-1)}}let M=[[0,1],[0,-1],[1,0],[-1,0]];for(let N=0;N<1;N++){let B=[];f.forEach(J=>{let P=J%i,W=J/i|0;for(let[D,se]of M){let Y=P+D,Q=W+se;if(Y<0||Y>=i||Q<0||Q>=e)continue;let ie=Q*i+Y;f.has(ie)||B.push(ie)}}),B.forEach(J=>f.add(J))}f.forEach(N=>{let B=N%i,J=N/i|0;s[J][B]===Je.BASE_TOP||s[J][B]===Je.BASE_BOTTOM||s[J][B]===Je.CENTER||(t[J][B]=!0,s[J][B]=Je.PATH,n[J][B]=1)});let y=Math.round(_-m*1.6),T=Math.round(_+m*1.6),O=Math.round(_-m),I=Math.round(_+m),L=1;for(let N=h-L;N<=h+L;N++)if(!(N<0||N>=e))for(let B=y;B<=T;B++)B<0||B>=i||(t[N][B]=!0,s[N][B]!==Je.CENTER&&s[N][B]!==Je.BASE_TOP&&s[N][B]!==Je.BASE_BOTTOM&&(s[N][B]=Je.PATH),n[N][B]=Math.max(n[N][B],1));function $(N,B,J,P){let W=Math.max(1,Math.min(N,B)),D=Math.min(e-2,Math.max(N,B)),se=Math.max(1,Math.min(J,P)),Y=Math.min(i-2,Math.max(J,P));for(let Q=W;Q<=D;Q++)for(let ie=se;ie<=Y;ie++)s[Q][ie]===Je.BASE_TOP||s[Q][ie]===Je.BASE_BOTTOM||s[Q][ie]===Je.CENTER||(t[Q][ie]=!0,s[Q][ie]=Je.PATH,n[Q][ie]=1)}let S=3,w=3;$(o,o+S-1,O,r-1),$(o,o+S-1,r+1,I),$(l-w+1,l,O,a-1),$(l-w+1,l,a+1,I);for(let N=-1;N<=2;N++)for(let B=-2;B<=2;B++){let J=r+B,P=o+N;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=Je.BASE_TOP,n[P][J]=1)}for(let N=-2;N<=1;N++)for(let B=-2;B<=2;B++){let J=a+B,P=l+N;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=Je.BASE_BOTTOM,n[P][J]=1)}for(let N=0;N<e;N++)for(let B=0;B<i;B++){if(t[N][B]||s[N][B]===Je.BASE_TOP||s[N][B]===Je.BASE_BOTTOM||s[N][B]===Je.CENTER)continue;let J=Math.abs(B-r)<=4&&Math.abs(N-o)<=3,P=Math.abs(B-a)<=4&&Math.abs(N-l)<=3,W=J||P,D=Math.random();D<.55&&!W?(s[N][B]=Je.TREE,n[N][B]=1+Math.floor(Math.random()*2)):D<.75||W&&D<.5?(s[N][B]=Je.WATER,n[N][B]=0):(s[N][B]=Je.ROCK,n[N][B]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function _x(i,e,t){let n=e===1?Je.BASE_BOTTOM:Je.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function yx(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===Je.CENTER&&e.push({gx:n,gy:t});return e}function fu(i,e){let t=yx(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function er(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===Je.TREE||n===Je.WATER||n===Je.ROCK)}function vx(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let f=0;for(let d=0;d<s;d++){let u=r+c,_=a+h,v=u<0||u>=i.w||_<0||_>=i.h,m=!er(i,u,_),p=e.some(M=>M.hp>0&&M.id!==n.id&&M.x===u&&M.y===_);if(v||m||p){let M=Math.max(1,f*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:M}}r=u,a=_,f++}return{newGx:r,newGy:a,collisionDamage:0}}function Mx(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),f=r<o?1:-1,d=a<l?1:-1,u=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let _=2*u;_>-h&&(u-=h,r+=f),_<c&&(u+=c,a+=d)}return s}function _s(i,e,t,n,s){let r=Mx(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!er(i,o.x,o.y))return!1}return!0}function ja(i,e,t,n,s,r){let a=(f,d)=>d*i.w+f,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null;for(;l.length;){let{x:f,y:d,d:u}=l.shift();if(!(u>=n))for(let[_,v]of c){let m=f+_,p=d+v;if(!er(i,m,p))continue;if(h){let T=s.find(O=>O.hp>0&&O.x===m&&O.y===p);if(T&&T.player!==r.player)continue}let M=a(m,p);if(o.has(M))continue;let y=u+1;o.set(M,y),l.push({x:m,y:p,d:y})}}return o}function pu(i,e,t,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-e)+Math.abs(r-t);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function ji(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(d,u)=>u*i.w+d,l=new Map,c=[{x:e,y:t}];l.set(o(e,t),null);let h=[[0,1],[0,-1],[1,0],[-1,0]];function f(d,u){if(!er(i,d,u))return!1;let _=r.find(v=>v.hp>0&&v.x===d&&v.y===u);return _?_.id===a.id||_.player===a.player:!0}for(;c.length;){let{x:d,y:u}=c.shift();if(d===n&&u===s){let _=[],v={x:n,y:s};for(;v;)_.unshift(v),v=l.get(o(v.x,v.y));return _}for(let[_,v]of h){let m=d+_,p=u+v,M=o(m,p);l.has(M)||f(m,p)&&(l.set(M,{x:d,y:u}),c.push({x:m,y:p}))}}return null}var mu={[Je.PATH]:2976557,[Je.GRASS]:2968109,[Je.TREE]:1719578,[Je.WATER]:1989278,[Je.ROCK]:4872778,[Je.BASE_TOP]:8014410,[Je.BASE_BOTTOM]:4872826,[Je.CENTER]:13940810};function gu(i){return i.w*_t/2}function xu(i){return i.h*_t/2}function _u(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new Da(e);return r.wrapS=r.wrapT=yr,r.repeat.set(4,4),r.needsUpdate=!0,r}function bx(i){let e=new ii,t=gu(i),n=xu(i),s=new Ln(_t,kn,_t),r=_u(64),a=.88,o=.02,l=[];function c(d,u,_,v,m){let p=new Bn({color:3828266,roughness:.9});p.bumpMap=r,p.bumpScale=.12;for(let M=0;M<v;M++){let y=.08+Math.random()*m,T=.03+Math.random()*.03,O=new ct(new Ki(T*.5,T,y,6),p);O.position.set(d+(Math.random()-.5)*.5,_+y/2,u+(Math.random()-.5)*.5),O.rotation.x=(Math.random()-.5)*.2,O.rotation.z=(Math.random()-.5)*.2,O.castShadow=!0,e.add(O)}}let h=.12;function f(d,u,_,v){let m=_+.02,p=[[d-h,m,u-h],[d+h,m,u+h],[d-h,m,u+h],[d+h,m,u-h],[d-h+.06,m,u-h+.06],[d+h-.06,m,u+h-.06],[d-h+.06,m,u+h-.06],[d+h-.06,m,u-h+.06]],M=new Float32Array(p.length*3);p.forEach((I,L)=>{M[L*3]=I[0],M[L*3+1]=I[1],M[L*3+2]=I[2]});let y=new qn;y.setAttribute("position",new Xn(M,3)),y.computeBoundingSphere();let T=new wr({color:855309,linewidth:1}),O=new La(y,T);v.add(O)}for(let d=0;d<i.h;d++)for(let u=0;u<i.w;u++){let _=i.type[d][u],v=i.height[d][u],m=mu[_],p=kn+v*.35,M=p/2+kn/2,y=new Bn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),T=(m>>16&255)/255,O=(m>>8&255)/255,I=(m&255)/255,L=T,$=O,S=I;if(_===Je.PATH||_===Je.TREE||_===Je.ROCK){let se=Math.random()*.45;L=T*(1-se)+.42*se,$=O*(1-se)+.26*se,S=I*(1-se)+.14*se}(_===Je.TREE||_===Je.ROCK)&&(L*=.5,$*=.5,S*=.5);let w=1+(Math.random()-.5)*.12;y.color.setRGB(Math.min(1,L*w),Math.min(1,$*w),Math.min(1,S*w)),y.bumpMap=r,y.bumpScale=.12;let N=new ct(s,y);N.position.set(u*_t-t+_t/2,p/2,d*_t-n+_t/2),N.castShadow=!0,N.receiveShadow=!0,N.userData={gx:u,gy:d,type:_},e.add(N);let B=u*_t-t+_t/2,J=d*_t-n+_t/2;if(_===Je.TREE&&f(B,J,M,e),_===Je.TREE){let P=new ii;P.position.set(B,M,J);let W=u===0||u===i.w-1||d===0||d===i.h-1,D=W?.75+Math.random()*.35:.5+Math.random()*.2,se=new mt(4007959),Y=()=>1+(Math.random()-.5)*.4;se.r=Math.min(1,Math.max(0,se.r*Y())),se.g=Math.min(1,Math.max(0,se.g*Y())),se.b=Math.min(1,Math.max(0,se.b*Y()));let Q=.85+Math.random()*.2,ie=new Bn({color:se,roughness:Q});ie.bumpMap=r,ie.bumpScale=.1+Math.random()*.12;let he=new ct(new Ki(.12,.14,D,8),ie);he.position.set(0,D/2,0),he.castShadow=!0,he.raycast=function(){},P.add(he);let me=r.clone();me.repeat.set(3,3);let te=new mt(2972205),fe=()=>1+(Math.random()-.5)*.44;te.r=Math.min(1,Math.max(0,te.r*fe())),te.g=Math.min(1,Math.max(0,te.g*fe())),te.b=Math.min(1,Math.max(0,te.b*fe()));let Ae=.78+Math.random()*.24,He=new Bn({color:te,roughness:Ae});He.bumpMap=me,He.bumpScale=.16+Math.random()*.14;let ze=W?.52:.45,rt=W?1.05:.9,ht=.12,Ve=rt*.5,bt=rt*.45,Z=rt*.4,Kt=new ct(new Ji(ze,Ve,8),He);Kt.position.set(0,D+Ve/2,0),Kt.castShadow=!0,Kt.raycast=function(){},P.add(Kt);let Ze=new ct(new Ji(ze*.75,bt,8),He);Ze.position.set(0,D+Ve-ht+bt/2,0),Ze.castShadow=!0,Ze.raycast=function(){},P.add(Ze);let it=new ct(new Ji(ze*.5,Z,8),He);it.position.set(0,D+Ve-ht+bt-ht+Z/2,0),it.castShadow=!0,it.raycast=function(){},P.add(it),e.add(P),l.push(P)}else if(_===Je.WATER){let P=mu[Je.WATER],W=(P>>16&255)/255,D=(P>>8&255)/255,se=(P&255)/255,Y=1+(Math.random()-.5)*.12,Q=new Bn({color:new mt().setRGB(Math.min(1,W*Y),Math.min(1,D*Y),Math.min(1,se*Y)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),ie=new ct(new Pi(_t,_t),Q);ie.rotation.x=-Math.PI/2,ie.position.set(B,M+.02,J),ie.receiveShadow=!0,e.add(ie)}else if(_===Je.ROCK){let P=new Bn({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let W=(Q,ie,he)=>{let me=new ct(new Ba(Q,0),P);me.position.set(B+ie,M+Q-.2,J+he),me.rotation.set(Math.random(),Math.random(),Math.random()),me.castShadow=!0,e.add(me)},D=.32+Math.random()*.14,se=.2+Math.random()*.12,Y=.12+Math.random()*.12;W(D,(Math.random()-.5)*.15,(Math.random()-.5)*.15),W(se,(Math.random()-.5)*.25,(Math.random()-.5)*.25),W(Y,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function Sx(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=xx(),t=document.getElementById("canvas-wrap"),n=new Ia;n.background=new mt(1711652),n.fog=new Pa(1711652,30,90);let s=e.w*_t/2,r=e.h*_t/2,a=new On(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=new F(12,38,16).normalize().multiplyScalar(o),c=new F,h=new F,f=new ui(new F(0,1,0),0),d=new F,u=new F,_=!1,v=!1,m=!1,p=null,M=5,y=.004,T=-Math.PI*.4,O=Math.PI*.4,I=new F,L={x:0,y:0},$=1,S=40,w=.08,N=.15,B=null,J=new Va(16777215,.45);n.add(J);let P=new za(16774630,1.1);P.position.set(30,50,20),P.castShadow=!0,P.shadow.mapSize.width=2048,P.shadow.mapSize.height=2048,P.shadow.camera.near=1,P.shadow.camera.far=120,P.shadow.camera.left=-50,P.shadow.camera.right=50,P.shadow.camera.top=50,P.shadow.camera.bottom=-50,n.add(P);let W=bx(e);n.add(W);let D=[],se=1,Y=new Map,Q=_u(64),ie=gu(e),he=xu(e);function me(x,g){let C=(kn+e.height[g][x]*.35)/2+kn/2;return new F(x*_t-ie+_t/2,C,g*_t-he+_t/2)}function te(x,g){let A=(x>>16&255)/255,C=(x>>8&255)/255,k=(x&255)/255,H=1+(Math.random()-.5)*g;return new mt(Math.min(1,A*H),Math.min(1,C*H),Math.min(1,k*H))}let fe=.62;function Ae(x,g){g=g??fe;let A=x instanceof mt?x:new mt(x);return new mt(Math.max(0,A.r*g),Math.max(0,A.g*g),Math.max(0,A.b*g))}function He(x,g,A){let C=Ka[g]||Ka.knight,k=Ae(te(C.primary,.08)),H=Ae(te(C.secondary,.08)),G=Nt[g]&&Nt[g].gender||"male",z=A??4006676,V=Ae(te(C.skin!=null?C.skin:15250592,.06)),ee=Ae(te(z,.08)),re=()=>(Math.random()-.5)*.08,Ee=()=>(Math.random()-.5)*.04,ae=new Bn({color:k,metalness:Math.max(0,.25+Ee()),roughness:Math.max(.3,Math.min(1,.5+re()))});ae.bumpMap=Q,ae.bumpScale=.1;let ge=new Bn({color:H,metalness:Math.max(0,.2+Ee()),roughness:Math.max(.3,Math.min(1,.55+re()))});ge.bumpMap=Q,ge.bumpScale=.1;let Ue=new Bn({color:k,metalness:Math.max(0,.25+Ee()),roughness:Math.max(.3,Math.min(1,.5+re()))});Ue.bumpMap=Q,Ue.bumpScale=.1;let Dt=new Bn({color:V,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+re()))});Dt.bumpMap=Q,Dt.bumpScale=.05;let Ut=new ii,Pt=.28,qt=.08,cn=.08,rn=new ct(new Ln(qt,Pt,cn),ge);rn.position.set(-.06,Pt/2,0),rn.castShadow=!0,Ut.add(rn);let xn=new ct(new Ln(qt,Pt,cn),ge);xn.position.set(.06,Pt/2,0),xn.castShadow=!0,Ut.add(xn);let Yt=.28,zt=.2,Lt=.12,Vt=new ct(new Ln(zt,Yt,Lt),ae);Vt.position.set(0,Pt+Yt/2,0),Vt.castShadow=!0,Ut.add(Vt);let Et=.06,dn=.22,_n=.06,yn=new ct(new Ln(Et,dn,_n),Ue);yn.position.set(-(zt/2+Et/2),Pt+Yt-.08,0),yn.castShadow=!0,Ut.add(yn);let Tn=new ct(new Ln(Et,dn,_n),Ue);if(Tn.position.set(zt/2+Et/2,Pt+Yt-.08,0),Tn.castShadow=!0,Ut.add(Tn),C.cape!=null){let tt=zt*1.35,je=Pt+Yt*.15,ke=new Pi(tt,je),We=new Bn({color:Ae(te(C.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+re())),side:hn});We.bumpMap=Q,We.bumpScale=.12;let vn=new ct(ke,We);vn.position.set(0,Pt+je/2-.02,-Lt/2-.02),vn.rotation.y=Math.PI,vn.castShadow=!0,Ut.add(vn)}let le=.1,_e=new ct(new ps(le,12,10),Dt);_e.position.set(0,Pt+Yt+le,0),_e.castShadow=!0,Ut.add(_e);let ve=new an({color:1710638}),de=new ct(new Ln(.032,.004,.004),ve);de.position.set(-.032,.028,le*.92),_e.add(de);let ue=new ct(new Ln(.032,.004,.004),ve);ue.position.set(.032,.028,le*.92),_e.add(ue);let ye=new an({color:2957087}),Se=new ct(new Ln(.045,.012,.008),ye);Se.position.set(0,-.028,le*.92),_e.add(Se);let Te=new Bn({color:ee,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+re()))});if(Te.bumpMap=Q,Te.bumpScale=.15,G==="female"){let tt=new ct(new ps(le*.85,10,8,0,Math.PI*2,0,Math.PI*.45),Te);tt.position.set(0,le*.35,-le*.2),tt.castShadow=!0,_e.add(tt);let je=new ct(new Ln(le*1.1,le*2.2,le*.5),Te);je.position.set(0,-le*.6,-le*.95),je.castShadow=!0,_e.add(je)}else{let tt=new ct(new ps(le*.82,10,8,0,Math.PI*2,0,Math.PI*.35),Te);tt.position.set(0,le*.5,-le*.15),tt.castShadow=!0,_e.add(tt)}return Ut.userData.leftLeg=rn,Ut.userData.rightLeg=xn,Ut.userData.leftArm=yn,Ut.userData.rightArm=Tn,Ut}function ze(x,g){let A=x.userData;if(!A.leftLeg)return;let C=g*Math.PI*2,k=.35,H=.28;A.leftLeg.rotation.x=Math.sin(C)*k,A.rightLeg.rotation.x=Math.sin(C+Math.PI)*k,A.leftArm.rotation.y=Math.sin(C+Math.PI)*H,A.rightArm.rotation.y=Math.sin(C)*H}function rt(x){let g=x.userData;g.leftLeg&&(g.leftLeg.rotation.x=0,g.rightLeg.rotation.x=0,g.leftArm.rotation.y=0,g.rightArm.rotation.y=0)}function ht(x){let g=He(x.player,x.class,x.hairColor);g.position.copy(me(x.x,x.y)),g.castShadow=!0,g.userData.unitId=x.id;let A=.28,C=.28,k=.12,H=.18,G=.04,z=new Pi(H,G),V=new an({color:6037528,side:hn,depthTest:!0,depthWrite:!1}),ee=new ct(z,V);ee.position.set(0,A+C/2,k/2+.02),ee.rotation.x=-Math.PI/2,ee.rotation.z=Math.PI/4,ee.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0,g.add(ee),g.userData.slashMark=ee,n.add(g),Y.set(x.id,g),Z(g,x.maxHp>0&&x.hp/x.maxHp<.35)}function Ve(x){let g=Y.get(x.id);!g||!g.userData.slashMark||(g.userData.slashMark.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0)}let bt=.35;function Z(x,g){if(x)if(g){x.rotation.x=.35,x.scale.setScalar(.96);let A=x.userData;A&&A.leftArm&&A.rightArm&&(A.leftArm.rotation.y=.2,A.rightArm.rotation.y=.2),x.traverse(C=>{C.isMesh&&C.material&&C.material.color&&(C.userData.originalColor||(C.userData.originalColor=C.material.color.clone()),C.material.color.copy(C.userData.originalColor).multiplyScalar(.82))})}else{x.rotation.x=0,x.scale.setScalar(1);let A=x.userData;A&&A.leftArm&&A.rightArm&&(A.leftArm.rotation.y=0,A.rightArm.rotation.y=0),x.traverse(C=>{C.isMesh&&C.material&&C.userData.originalColor&&C.material.color.copy(C.userData.originalColor)})}}function Kt(x){if(x.level>=3)return;let g=x.maxHp>0?x.hp/x.maxHp:1;x.level+=1;let A=k=>Math.max(1,Math.ceil(k*1.1)),C=k=>Math.max(1,Math.ceil(k*1.1));x.maxHp=A(x.maxHp),x.maxMp=A(x.maxMp),x.hp=Math.max(1,Math.min(x.maxHp,Math.ceil(g*x.maxHp))),x.mp=Math.max(1,Math.min(x.maxMp,Math.ceil(g*x.maxMp))),x.str=C(x.str),x.agi=C(x.agi),x.vit=C(x.vit),x.dex=C(x.dex),x.luk=C(x.luk),x.int=C(x.int),x.range>2&&(x.range=C(x.range)),console.log("[LEVEL UP]",`${x.name} (${x.class}, P${x.player})`,`\u2192 Lv.${x.level}`,`| HP ${x.hp}/${x.maxHp} MP ${x.mp}/${x.maxMp} STR ${x.str} VIT ${x.vit}`),Ze(x)}function Ze(x){let g=Y.get(x.id),A=x.level===3?"levelup level3":x.level===2?"levelup level2":"levelup";if(Nu(x,A),!g)return;let C=performance.now(),k=0;function H(G){k++,k%2===0&&on();let z=G-C,V=Math.min(1,z/Me),ee=V<.5?1+.35*(V/.5):1+.35*(1-(V-.5)/.5);g.scale.setScalar(ee),V<1?requestAnimationFrame(H):g.scale.setScalar(1)}requestAnimationFrame(H)}let it=400,Xe=280,Ft=.45,dt=160,R=280,b=350,K=500,Me=600,xe=!1,be=new F,Ye=new F,Re=new F,Oe=new F;function nt(x=!1){let g=null;if(ot==="playing"&&Fe.length>0){let G=Fe[Ie];g=D.find(z=>z.id===G&&z.hp>0)}if(g||(g=D.find(G=>G.player===oe&&G.hp>0)),!g)return;let A=a.position.distanceTo(c);if(A<.1&&(A=o),h.copy(a.position).sub(c).normalize(),h.lengthSq()<.01&&h.copy(l).normalize(),Re.copy(me(g.x,g.y)),Oe.copy(Re).add(h.clone().multiplyScalar(A)),x||xe){c.copy(Re),a.position.copy(Oe),a.lookAt(c),on();return}xe=!0,be.copy(c),Ye.copy(a.position);let C=performance.now(),k=0;En.shadowMap.enabled=!1;function H(G){k++,k%2===0&&on();let z=Math.min(1,(G-C)/it),V=z*(2-z);c.lerpVectors(be,Re,V),a.position.lerpVectors(Ye,Oe,V),a.lookAt(c),z<1?requestAnimationFrame(H):(En.shadowMap.enabled=!0,xe=!1)}requestAnimationFrame(H)}let at=0,oe=1,ot="draft",et="pvp",lt="balanced",$e=new Set(Za),De=0,Ke=null,At=new Set,Fe=[],Ie=0,pe=null,U=new Map,Ce=null;function Pe(x){if(!x||x.hp<=0)return;Ce=x.id;let g=document.getElementById("unit-preview-card"),A=document.getElementById("unit-preview-image"),C=document.getElementById("unit-preview-name"),k=document.getElementById("unit-preview-meta"),H=document.getElementById("unit-preview-stats");g.classList.remove("player-1","player-2"),g.classList.add(x.player===1?"player-1":"player-2"),g.classList.toggle("level-2",x.level>=2&&x.level<3),g.classList.toggle("level-3",x.level>=3),A.src=Dr[x.class]||"",A.alt=x.name,C.textContent=x.name,k.textContent=`Lv.${x.level} ${x.class} \u2014 Player ${x.player}`,H.innerHTML=[["HP",`${x.hp}/${x.maxHp}`],["MP",`${x.mp}/${x.maxMp}`],["STR",ce(x,"str")],["AGI",ce(x,"agi")],["VIT",ce(x,"vit")],["DEX",ce(x,"dex")],["LUK",ce(x,"luk")],["INT",ce(x,"int")]].map(([z,V])=>`<span class="stat-label">${z}</span><span class="stat-val${z==="HP"?" stat-val-hp":""}">${V}</span>`).join("");let G=x.maxHp>0&&x.hp/x.maxHp<.3;g.classList.toggle("low-hp",G),g.style.display="block"}function Qe(){Ce=null;let x=document.getElementById("unit-preview-card");x.classList.remove("low-hp","level-2","level-3"),x.style.display="none"}let Ge=!1,St=!1,Rt=!1,Ct=null,yt=!1,gt=!1,Wt=!1,Jt=[],Dn=new ii;n.add(Dn);let Yn=[],mi=!0,ai=0,Qi=0;function on(){mi=!0,ai=performance.now()}let Ii=new ii;n.add(Ii);let tr=[],Qa=_t,eo=.02,E=3368703,X=13382451;function j(x,g){let A=x/2,C=A-g,k=new Rr;k.moveTo(-A,-A),k.lineTo(A,-A),k.lineTo(A,A),k.lineTo(-A,A),k.lineTo(-A,-A);let H=new Ks;return H.moveTo(-C,-C),H.lineTo(C,-C),H.lineTo(C,C),H.lineTo(-C,C),H.lineTo(-C,-C),k.holes.push(H),new ka(k)}let ne=j(Qa,eo);function q(x=null){let g=D.filter(A=>A.hp>0&&A.id!==x).map(A=>`${A.id},${A.x},${A.y},${A.player}`).sort().join("|");if(!(q._lastSig===g&&q._lastExclude===x)){for(q._lastSig=g,q._lastExclude=x,tr.forEach(A=>A.dispose()),tr.length=0;Ii.children.length;){let A=Ii.children[0];Ii.remove(A)}D.filter(A=>A.hp>0&&A.id!==x).forEach(A=>{let C=A.x,k=A.y,G=(kn+e.height[k][C]*.35)/2+kn/2,z=C*_t-ie+_t/2,V=k*_t-he+_t/2,ee=G+.02,re=A.player===1?E:X,Ee=new an({color:re,side:hn}),ae=new ct(ne,Ee);ae.rotation.x=-Math.PI/2,ae.position.set(z,ee,V),Ii.add(ae),tr.push(Ee)}),on()}}let Le=1.15,qe={1:8102901,2:15628943},Be=(()=>{let x=new an({color:qe[1]}),g=new ct(new Ji(.1,.25,8),x);return g.rotation.x=Math.PI,g.visible=!1,n.add(g),g})();function st(){if(ot!=="playing"||Fe.length===0||Wt){Be.visible=!1,Be.removeFromParent(),n.add(Be);return}let x=Fe[Ie],g=D.find(C=>C.id===x);if(!g||g.hp<=0){Be.visible=!1,Be.removeFromParent(),n.add(Be);return}let A=Y.get(x);if(!A){Be.visible=!1;return}Be.removeFromParent(),A.add(Be),Be.position.set(0,Le,0),Be.material&&Be.material.color.setHex(qe[g.player]??qe[1]),Be.visible=!0}function vt(x){let g=[[0,1],[0,-1],[1,0],[-1,0]],A=[];for(let[C,k]of g){let H=x.x+C,G=x.y+k;!er(e,H,G)||D.some(V=>V.id!==x.id&&V.x===H&&V.y===G&&V.hp>0)||A.push(Math.atan2(C,k))}return A}function ut(x){if(Jt.length===0)return x;if(Jt.length===1)return Jt[0];let g=Jt[0],A=Math.abs(ft(x-g));for(let C=1;C<Jt.length;C++){let k=Math.abs(ft(x-Jt[C]));k<A&&(A=k,g=Jt[C])}return g}function ft(x){for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;return x}let jt=1.2,Xt=(()=>{let x=new ct(new Ji(.12,.35,8),new an({color:4500223}));return x.rotation.x=-Math.PI/2,x.visible=!1,n.add(x),x})();function un(x,g){if(!Wt||Fe.length===0||Jt.length===0)return;let A=Fe[Ie],C=D.find(Ee=>Ee.id===A),k=Y.get(A);if(!C||!k)return;Or(x,g),Di.setFromCamera(Ui,a);let H=Di.intersectObjects(W.children,!0);if(H.length===0)return;let G=null;for(let Ee of H){let ae=Ee.object;for(;ae&&(ae.userData.gx==null||ae.userData.gy==null);)ae=ae.parent;if(ae&&ae.userData.gx!=null){G=Ee.point;break}}if(!G)return;let z=me(C.x,C.y),V=G.x-z.x,ee=G.z-z.z;if(V*V+ee*ee<1e-6)return;let re=Math.atan2(V,ee);k.rotation.y=ut(re)}function oi(){if(Fe.length===0)return;let x=Fe[Ie],g=D.find(k=>k.id===x),A=Y.get(x);if(!g||!A)return;Jt=[[0,1],[0,-1],[1,0],[-1,0]].map(([k,H])=>Math.atan2(k,H)),Xt.removeFromParent(),A.add(Xt),Xt.position.set(0,jt,0),Xt.rotation.x=-Math.PI/2,Xt.rotation.y=0,Xt.rotation.z=Math.PI,Xt.visible=!0,A.rotation.y=Jt[0]}function Bt(){Xt.visible=!1,Xt.removeFromParent(),n.add(Xt)}let xt=(()=>{let x=$a,g=[1];for(let A=0;A<Math.floor((x-1)/2);A++)g.push(2,2,1,1);return x%2===1?g.push(2):(g.push(2,2),g.push(1)),g})();function Hn(){return xt[De]}function kt(){let x=Hn(),g=0;for(let A=0;A<De;A++)xt[A]===x&&g++;return g+1}function Kn(){ot="draft",De=0,$e=new Set(Za),Ke=null,At.clear(),sn(),ts(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function nr(){return D.filter(x=>x.hp>0).sort((x,g)=>{let A=ce(x,"agi"),C=ce(g,"agi");if(C!==A)return C-A;let k=ce(x,"dex");return ce(g,"dex")-k}).map(x=>x.id)}function es(){document.getElementById("draft-panel").style.display="none";let x=document.getElementById("draft-placement-card");x&&(x.style.display="none",x.innerHTML=""),sn();let g=document.getElementById("battle-start-overlay");g&&(g.classList.add("visible"),g.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let A=document.getElementById("draft-placement-card");for(A&&(A.style.display="none",A.innerHTML=""),ot="playing",at=0,Fe=nr(),Ie=0;Ie<Fe.length&&D.find(H=>H.id===Fe[Ie]).hp<=0;)Ie++;Ie>=Fe.length&&(Ie=0);let C=D.find(H=>H.id===Fe[Ie]);oe=C?C.player:1,yt=!1,gt=!1,pe=Fe[Ie],setTimeout(()=>{g&&(g.classList.remove("visible"),g.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",q(),It(),st(),nt(!0)},4e3)}function ts(){let x=document.getElementById("draft-panel"),g=document.getElementById("draft-title"),A=document.getElementById("draft-classes"),C=document.getElementById("draft-message"),k=document.getElementById("turn-player"),H=document.getElementById("draft-placement-card");if(Ke){x.style.display="none",k.textContent=`Draft: Player ${Hn()} \u2014 place ${Nt[Ke].name}`;let z=Hn();H.style.display="flex",H.classList.remove("player-1","player-2"),H.classList.add("player-"+z),H.style.left=z===1?"24px":"",H.style.right=z===2?"24px":"";let V=[...D.filter(Ee=>Ee.player===z).map(Ee=>Ee.class),Ke],ee=(Ee,ae)=>{let ge=Nt[Ee];return`
        <div class="draft-class-card${ae?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Dr[Ee]||""}" alt="${ge.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${ge.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${ge.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${ge.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${ge.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${ge.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${ge.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${ge.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${ge.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${ge.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${ge.range}</span>
            </div>
          </div>
        </div>
      `},re=3;if(V.length>re){H.classList.add("draft-placement-cols");let Ee=[];for(let ge=0;ge<V.length;ge+=re)Ee.push(V.slice(ge,ge+re));let ae=V.length-1;H.innerHTML=Ee.map((ge,Ue)=>{let Dt=Ue===Ee.length-1,Ut=ge.map((Pt,qt)=>{let rn=Ue*re+qt===ae;return ee(Pt,rn)}).join("");return`<div class="draft-placement-col${Dt?" draft-placement-col-current":""}">${Ut}</div>`}).join("")}else H.classList.remove("draft-placement-cols"),H.innerHTML=V.map((Ee,ae)=>{let ge=ae===V.length-1;return ee(Ee,ge)}).join("");et==="pvcpu"&&Hn()===2&&setTimeout(rr,500),et==="cvcpu"&&setTimeout(rr,500);return}H.style.display="none",H.innerHTML="",ot==="draft"&&(x.style.display="flex");let G=Hn();g.textContent=`Player ${G}: Pick a class (${kt()}/${$a})`,C.textContent="",A.innerHTML="",k.textContent=`Draft: Player ${G} \u2014 pick a class`,gx([...Za]).forEach(z=>{let V=$e.has(z),ee=Nt[z],re=document.createElement("button");re.type="button",re.className="draft-class-card"+(V?"":" draft-class-card-selected"),re.disabled=!V,re.innerHTML=`
          <img class="draft-class-card-image" src="${Dr[z]||""}" alt="${ee.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${ee.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${ee.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${ee.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${ee.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${ee.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${ee.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${ee.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${ee.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${ee.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${ee.range}</span>
            </div>
          </div>
        `,V&&re.addEventListener("click",()=>mn(z)),A.appendChild(re)}),et==="pvcpu"&&Hn()===2&&setTimeout(rr,500),et==="cvcpu"&&setTimeout(rr,500)}function mn(x){if(!$e.has(x)||Ke)return;Ke=x;let g=Hn(),A=new Set(D.map(H=>H.y*e.w+H.x)),C=_x(e,g,A),k=fu(e,C);At=new Set(k.map(H=>H.gy*e.w+H.gx)),wu(k),ts()}function gi(x,g){if(!Ke)return;let A=Hn(),C=g*e.w+x;if(!At.has(C))return;let k=Nt[Ke],H={id:se++,player:A,x,y:g,level:1,name:k.name,class:Ke,hairColor:(Ka[Ke]||Ka.knight).hair,hp:k.hp,maxHp:k.maxHp,mp:k.mp,maxMp:k.maxMp,str:k.str,agi:k.agi,vit:k.vit,dex:k.dex,luk:k.luk,int:k.int,range:k.range};D.push(H),ht(H);let G=Y.get(H.id);G&&(G.rotation.y=H.player===1?Math.PI:0),$e.delete(Ke),Ke=null,At.clear(),sn();let z=document.getElementById("draft-placement-card");if(z&&(z.style.display="none",z.innerHTML=""),De++,De>=2*$a){es();return}let V=Hn(),ee=kt(),re=document.getElementById("draft-panel"),Ee=document.getElementById("draft-title"),ae=document.getElementById("draft-message"),ge=document.getElementById("draft-classes"),Ue=document.getElementById("turn-player");re&&Ee&&ge&&Ue&&(re.style.display="flex",Ee.textContent=`Player ${V}: Pick a class (${ee}/${$a})`,ae&&(ae.textContent="Get ready\u2026"),ge.innerHTML="",Ue.textContent=`Draft: Player ${V} \u2014 pick a class`),setTimeout(ts,1500)}function It(){It._pending||(It._pending=!0,requestAnimationFrame(()=>{It._pending=!1,zn()}))}function zn(){let x=It._cache||(It._cache={}),g=x.turnEl||(x.turnEl=document.getElementById("turn-player")),A=x.menuLabel||(x.menuLabel=document.getElementById("menu-label")),C=x.turnMenu||(x.turnMenu=document.getElementById("turn-menu")),k=x.unitInfo||(x.unitInfo=document.getElementById("unit-info")),H=x.unitNameEl||(x.unitNameEl=document.getElementById("unit-name")),G=x.unitLevelClassEl||(x.unitLevelClassEl=document.getElementById("unit-level-class")),z=x.unitStatsEl||(x.unitStatsEl=document.getElementById("unit-stats")),V=x.unitClassImageEl||(x.unitClassImageEl=document.getElementById("unit-class-image"));if(ot==="playing"&&D.forEach(ae=>{if(ae.hp<=0)return;let ge=Y.get(ae.id);ge&&Z(ge,ae.maxHp>0&&ae.hp/ae.maxHp<bt)}),C.classList.remove("player-1","player-2"),C.classList.add(oe===1?"player-1":"player-2"),C.classList.toggle("level-2",!1),C.classList.toggle("level-3",!1),ot==="playing"&&Fe.length>0){let ae=Fe[Ie];D.find(Ue=>Ue.id===ae&&Ue.hp>0)&&(pe==null||!D.find(Ue=>Ue.id===pe&&Ue.hp>0))&&(pe=ae)}if(pe!=null){let ae=D.find(ge=>ge.id===pe);if(ae&&ae.hp>0){k.classList.remove("no-unit");let ge=ae.maxHp>0&&ae.hp/ae.maxHp<.25;C.classList.toggle("low-hp",ge),C.classList.toggle("level-2",ae.level>=2&&ae.level<3),C.classList.toggle("level-3",ae.level>=3),H.textContent=ae.name,G.textContent=`Lv.${ae.level} ${ae.class}`,V.src=Dr[ae.class]||"",V.alt=ae.name,z.innerHTML=[["HP",`${ae.hp}/${ae.maxHp}`],["MP",`${ae.mp}/${ae.maxMp}`],["STR",ce(ae,"str")],["AGI",ce(ae,"agi")],["VIT",ce(ae,"vit")],["DEX",ce(ae,"dex")],["LUK",ce(ae,"luk")],["INT",ce(ae,"int")]].map(([Ue,Dt])=>`<span>${Ue}</span><span class="stat-val${Ue==="HP"?" stat-val-hp":""}">${Dt}</span>`).join("")}else C.classList.remove("low-hp","level-2","level-3"),k.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",G.textContent="",z.textContent="",V.src="",V.alt=""}else C.classList.remove("low-hp","level-2","level-3"),k.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",G.textContent="",z.textContent="",V.src="",V.alt="";if(pe!=null)g.textContent=`Player ${oe} \u2014 Unit ${H.innerHTML} active`;else{let ae=Fe.length?D.find(ge=>ge.id===Fe[Ie]):null;g.textContent=ae?`${ae.name} (Player ${oe})`:`Player ${oe}`}A.textContent=`Player ${oe}`;let ee=x.btnAttack||(x.btnAttack=document.getElementById("btn-attack")),re=x.btnSkill||(x.btnSkill=document.getElementById("btn-skill")),Ee=x.btnEnd||(x.btnEnd=document.getElementById("btn-end"));if(et==="cvcpu"&&ot==="playing")ee.disabled=!0,re.disabled=!0,Ee&&(Ee.disabled=!0),g.textContent=`Player ${oe} (CPU)`;else if(Wt)ee.disabled=!0,re.disabled=!0,g.textContent="Click on map to choose facing direction";else if(ot==="playing"){ee.disabled=gt;let ae=Fe.length?Fe[Ie]:null,ge=ae?D.find(Ut=>Ut.id===ae&&Ut.hp>0):null,Ue=et!=="cvcpu"&&(et!=="pvcpu"||oe===1),Dt=Ue&&ge&&!gt?Nr(ge):[];re.disabled=gt||!Ue||Dt.length===0,Ee&&(Ee.disabled=!1)}if(ot==="playing"){let ae=Math.min(at+1,xs);g.textContent=(g.textContent||"")+` \u2014 Turn ${ae}/${xs}`;let ge=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left")),Ue=x.turnsLeftValueEl||(x.turnsLeftValueEl=document.getElementById("turns-left-value"));if(ge&&Ue){ge.style.display="";let Dt=Math.max(0,xs-at);Ue.textContent=String(Dt),ge.classList.toggle("turns-left-low",Dt<=10)}}else{let ae=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left"));ae&&(ae.style.display="none")}ot==="playing"&&so(oe)&&!Ge&&setTimeout(ln,700)}function Ht(){on(),Qe(),St=!1,Rt=!1,Ct=null,Wt=!1,Jt=[],Bt(),sn();let x=Fe.length;if(x===0)return;let g=Fe[Ie],A=D.find(V=>V.id===g);if(A&&A.tempDebuff&&A.tempDebuff.duration--,A&&A.tempDebuff&&A.tempDebuff.duration<=0&&(A.tempDebuff=void 0),A&&A.tempBuff&&A.tempBuff.duration--,A&&A.tempBuff&&A.tempBuff.duration<=0&&(A.tempBuff=void 0),A&&A.hp>0){let V=Math.ceil(ce(A,"int")*.15);A.mp=Math.min(A.maxMp,A.mp+V)}if(A&&A.hp>0){let V=A.x,ee=A.y;e.type[ee][V]===Je.CENTER&&A.level===1&&Kt(A);let re=A.player===1?Je.BASE_TOP:Je.BASE_BOTTOM;e.type[ee][V]===re&&A.level===2&&Kt(A)}if(at++,at>=xs){Ou();return}let C=(Ie+1)%x,k=0;for(;k<x;){let V=Fe[C],ee=D.find(re=>re.id===V);if(ee&&ee.hp>0)break;C=(C+1)%x,k++}Ie=C;for(let V=0;V<x;V++){let ee=Fe[Ie],re=D.find(ae=>ae.id===ee);if(!re||re.hp<=0)break;let Ee=re.tempDebuff&&re.tempDebuff.poison!=null?re.tempDebuff.poison:0;if(Ee<=0)break;if(re.hp=Math.max(0,re.hp-Ee),Vn(re.x,re.y,String(Ee),!1,"poison"),Ve(re),re.hp<=0){gn(re),C=(Ie+1)%x;let ae=0;for(;ae<x;){let ge=Fe[C],Ue=D.find(Dt=>Dt.id===ge);if(Ue&&Ue.hp>0)break;C=(C+1)%x,ae++}Ie=C;continue}break}let H=D.find(V=>V.id===Fe[Ie]);oe=H?H.player:1,yt=!1,gt=!1,pe=Fe[Ie];let G=Fe[Ie];Fe=nr();let z=Fe.indexOf(G);Ie=z>=0?z:0,It(),st(),nt()}document.getElementById("btn-attack").addEventListener("click",()=>{if(Ge||gt||ot!=="playing"||Fe.length===0)return;Qe();let x=Fe[Ie],g=D.find(k=>k.id===x);if(!g||g.hp<=0)return;let A=g.range!=null?g.range:1;pe=x,St=!0;let C=pu(e,g.x,g.y,A);U=new Map,C.forEach((k,H)=>{let G=H%e.w,z=Math.floor(H/e.w);_s(e,g.x,g.y,G,z)&&U.set(H,k)}),Au(U),It()}),document.getElementById("btn-skill").addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),Ge||gt)return;let g=Fe[Ie],A=g?D.find(z=>z.id===g&&z.hp>0):null;if(!A||A.player!==oe)return;let C=document.getElementById("skill-list-overlay"),k=document.getElementById("btn-skill");if(!k)return;if(C&&C.style.display==="block"){C.style.display="none";return}let H=Nr(A),G=k.getBoundingClientRect();C||(C=document.createElement("div"),C.id="skill-list-overlay",C.className="skill-list-overlay",C.setAttribute("aria-hidden","true"),document.body.appendChild(C)),C.style.left=`${G.left}px`,C.style.top=`${G.top-4}px`,C.style.transform="translateY(-100%)",C.style.right="auto",C.style.bottom="auto",C.style.display="none",H.length===0?C.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(C.innerHTML=H.map((z,V)=>`<button type="button" class="skill-option" data-skill-index="${V}" ${z.disabled?"disabled":""}>
          <span class="skill-name">${z.name}</span> <span class="skill-meta">${z.cost} MP \xB7 Lv.${z.level}</span><br/>
          <span class="skill-meta">${z.description}</span>
        </button>`).join(""),C.querySelectorAll(".skill-option").forEach((z,V)=>{z.addEventListener("click",ee=>{ee.preventDefault(),ee.stopPropagation();let re=H[V];if(Ct=re,C.style.display="none",C.setAttribute("aria-hidden","true"),re.target==="self"){if(A.mp<re.cost)return;A.mp-=re.cost,gt=!0,Ur(A,A,re,{showFloatingCombatText:Vn,handleUnitDeath:gn,updateUnitSlashVisibility:Ve,updateTurnUI:It},()=>{sn(),Rt=!1,Ct=null,vs=new Set,yt?Ht():It()}),It();return}if(re.target==="ally"&&ar(A,re,D).filter(ge=>ge.targetUnit&&ge.targetUnit.id!==A.id).length===0&&A.mp>=re.cost){A.mp-=re.cost,gt=!0,Ur(A,A,re,{showFloatingCombatText:Vn,handleUnitDeath:gn,updateUnitSlashVisibility:Ve,updateTurnUI:It},()=>{sn(),Rt=!1,Ct=null,vs=new Set,yt?Ht():It()}),It();return}Rt=!0,St=!1,Tu(A,re),It()})})),requestAnimationFrame(()=>{C.style.display="block",C.style.visibility="visible",C.setAttribute("aria-hidden","false")})}),document.addEventListener("click",x=>{let g=document.getElementById("skill-list-overlay"),A=document.getElementById("btn-skill"),C=document.querySelector(".skill-wrap");!g||g.style.display!=="block"||C&&C.contains(x.target)||g.contains(x.target)||(g.style.display="none",g.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(Ge||Wt||ot!=="playing"||Fe.length===0)return;let x=Fe[Ie],g=D.find(C=>C.id===x);if(!g||g.hp<=0)return;Wt=!0,pe=null,St=!1,U=new Map,sn(),oi(),st();let A=document.getElementById("turn-player");A.textContent="Click on map to choose facing direction",It()}),c.set(0,8,0),a.position.copy(c).add(l),a.lookAt(c);let ys=document.getElementById("mode-select-overlay"),ir=document.getElementById("mode-pvp"),ql=document.getElementById("mode-pvcpu"),to=document.getElementById("mode-cvcpu"),sr=document.getElementById("ai-draft-preference"),Yl=document.getElementById("mode-select-ai-draft");Yl&&(Yl.style.display=uu?"":"none"),sr&&(px.forEach(x=>{let g=document.createElement("option");g.value=x.value,g.textContent=x.label,sr.appendChild(g)}),sr.value=lt,sr.addEventListener("change",()=>{lt=sr.value}));let Li=new Audio;Li.loop=!0,Li.volume=.3,Li.preload="auto";let no=window.location.href.replace(/[^/]*$/,""),$l=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:no+(no.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Li.src=$l,Li.addEventListener("error",()=>{let x=no+"assets/music/tavern.mp3";x!==$l&&(Li.src=x)});function io(){Li.paused&&Li.play().catch(()=>{})}ys&&ir&&ql?(ir.addEventListener("click",()=>{io(),et="pvp",ys.classList.add("hidden"),Kn()}),ql.addEventListener("click",()=>{io(),et="pvcpu",ys.classList.add("hidden"),Kn()}),to&&(uu?to.addEventListener("click",()=>{io(),et="cvcpu",ys.classList.add("hidden"),Kn()}):to.style.display="none")):Kn();function so(x){return et==="pvcpu"&&x===2||et==="cvcpu"}function yu(){let x=Za.filter(H=>$e.has(H));if(x.length===0)return null;let g=lt||"balanced";if(g==="random")return x[Math.floor(Math.random()*x.length)];if(g==="custom")return mx.filter(G=>$e.has(G))[0]??x[0]??null;let A=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function C(H){let G=Nt[H];if(!G)return 1/0;let z=A.map(ee=>G[ee]??0),V=z.reduce((ee,re)=>ee+re,0)/z.length;return z.reduce((ee,re)=>ee+(re-V)**2,0)/z.length}return g==="tanky"?[...x].sort((G,z)=>{let V=Nt[G]?.hp??0,ee=Nt[z]?.hp??0;return ee!==V?ee-V:(Nt[z]?.vit??0)-(Nt[G]?.vit??0)})[0]??null:g==="aggressive"?[...x].sort((G,z)=>{let V=Nt[G]?.str??0,ee=Nt[z]?.str??0;return ee!==V?ee-V:(Nt[z]?.agi??0)-(Nt[G]?.agi??0)})[0]??null:g==="scout"?[...x].sort((G,z)=>{let V=Nt[G]?.agi??0,ee=Nt[z]?.agi??0;return ee!==V?ee-V:(Nt[z]?.dex??0)-(Nt[G]?.dex??0)})[0]??null:g==="ranged"?[...x].sort((G,z)=>{let V=Nt[G]?.range??0,ee=Nt[z]?.range??0;return ee!==V?ee-V:(Nt[z]?.dex??0)-(Nt[G]?.dex??0)})[0]??null:g==="caster"?[...x].sort((G,z)=>{let V=Nt[G]?.int??0,ee=Nt[z]?.int??0;return ee!==V?ee-V:(Nt[z]?.mp??0)-(Nt[G]?.mp??0)})[0]??null:[...x].sort((H,G)=>{let z=Nt[H]?.hp??0,V=Nt[G]?.hp??0;return V!==z?V-z:C(H)-C(G)})[0]??null}function rr(){if(ot!=="draft"||!so(Hn()))return;if(!Ke){let A=yu();A&&mn(A),setTimeout(rr,500);return}let x=Array.from(At).map(A=>({gx:A%e.w,gy:Math.floor(A/e.w)})),g=fu(e,x);if(g.length>0){let{gx:A,gy:C}=g[0];gi(A,C)}}function Zl(){let x=[];for(let g=0;g<e.h;g++)for(let A=0;A<e.w;A++)e.type[g][A]===Je.CENTER&&x.push({gx:A,gy:g});return x}function vu(x){let g=[],A=x===1?Je.BASE_TOP:Je.BASE_BOTTOM;for(let C=0;C<e.h;C++)for(let k=0;k<e.w;k++)e.type[C][k]===A&&g.push({gx:k,gy:C});return g}function Jn(x,g,A,C){return Math.abs(x-A)+Math.abs(g-C)}function Mu(x){let g=x.range!=null?x.range:1,A=[];for(let C of D){if(C.hp<=0||C.player===x.player)continue;let k=Jn(x.x,x.y,C.x,C.y);k<=g&&k>0&&_s(e,x.x,x.y,C.x,C.y)&&A.push({target:C,dist:k})}return A}function bu(x){let g=D.filter(A=>A.hp>0&&A.player===x.player&&A.id!==x.id);for(let A of g){let C=D.filter(k=>k.hp>0&&k.player!==x.player);for(let k of C){let H=k.range!=null?k.range:1,G=Jn(k.x,k.y,A.x,A.y);if(G<=H&&G>0&&_s(e,k.x,k.y,A.x,A.y))return!0}}return!1}function Qt(x,g,A,C){let k=x.x,H=x.y,G=ji(e,x.x,x.y,g,A,D,x);if(!G||G.length<=1){C&&C();return}pe=null,sn(),Ge=!0,q(x.id),on();let z=Y.get(x.id),V=1;function ee(){if(V>=G.length){x.x=G[G.length-1].x,x.y=G[G.length-1].y,Ge=!1,rt(z),q(),U=new Map,yt=!0,C&&C();return}let re=G[V-1],Ee=G[V],ae=me(re.x,re.y).clone(),ge=me(Ee.x,Ee.y).clone(),Ue=ge.x-ae.x,Dt=ge.z-ae.z;Ue*Ue+Dt*Dt>1e-6&&(z.rotation.y=Math.atan2(Ue,Dt));let Ut=performance.now(),Pt=0;function qt(cn){Pt++,Pt%2===0&&on();let rn=Math.min(1,(cn-Ut)/hu),Yt=(zt=>zt*zt*(3-2*zt))(rn);z.position.lerpVectors(ae,ge,Yt),ze(z,Yt),rn<1?requestAnimationFrame(qt):(V++,ee())}requestAnimationFrame(qt)}ee()}function Kl(x,g){let A=ce(g,"agi")*.7+ce(g,"luk")*.3,k=Math.random()*Math.max(.001,A)<=ce(x,"dex"),H=0;if(k){let Lt=ce(x,"str")*.7+ce(x,"dex")*.2+ce(x,"int")*.1-(ce(g,"vit")*.3+ce(g,"luk")*.2);H=Math.max(1,Math.floor(Lt))}gt=!0,pe=null,St=!1,sn(),console.log("[ATTACK]",`${x.name} (${x.class}, P${x.player})`,"\u2192",`${g.name} (${g.class}, P${g.player})`,k?`${H} dmg`:"MISS",`| ${g.name} HP ${g.hp} \u2192 ${Math.max(0,g.hp-H)}/${g.maxHp}`);let G=Y.get(x.id);if(!G||!G.userData.rightArm){k?(g.hp=Math.max(0,g.hp-H),Vn(g.x,g.y,String(H),!1),Ve(g),g.hp<=0&&gn(g)):Vn(g.x,g.y,"MISS",!0),setTimeout(yt?()=>Ht():()=>It(),400);return}let z=me(x.x,x.y).clone(),V=me(g.x,g.y).clone(),ee=z.clone().lerp(V,.35),re=V.x-z.x,Ee=V.z-z.z;if(re*re+Ee*Ee>1e-6&&(G.rotation.y=Math.atan2(re,Ee)),(x.range!=null?x.range:1)>2){let Te=function(tt){Se++,Se%2===0&&on();let je=tt-ye,ke=Math.min(1,je/R);if(Et.position.lerpVectors(de,ue,ke),!le&&ke>=1&&(le=!0,n.remove(Et),Lt.dispose(),Vt.dispose(),k?(g.hp=Math.max(0,g.hp-H),Vn(g.x,g.y,String(H),!1),g.hp<=0&&(ve=!0),Y.get(g.id)?_e=tt:ve&&(gn(g),ve=!1),Ve(g)):Vn(g.x,g.y,"MISS",!0)),_e!=null&&k){let We=Y.get(g.id);if(We){let vn=Math.min(1,(tt-_e)/dt),pt=1-vn;Ni.copy(yn).multiplyScalar(Tn*pt),We.position.copy(_n).add(Ni),vn>=1&&(We.position.copy(_n),_e=null,ve&&(gn(g),ve=!1))}else _e=null,ve&&(gn(g),ve=!1)}if(ke<1)requestAnimationFrame(Te);else{let We=_e==null;We&&ve&&(gn(g),ve=!1),We?(En.shadowMap.enabled=!0,setTimeout(yt?()=>Ht():()=>It(),400)):requestAnimationFrame(Te)}},Lt=new Ki(.035,.035,.4,6),Vt=new an({color:16763972}),Et=new ct(Lt,Vt);Et.position.copy(z),Et.position.y+=.6;let dn=V.clone().sub(z).normalize();Et.quaternion.setFromUnitVectors(new F(0,1,0),dn),n.add(Et);let _n=me(g.x,g.y).clone(),yn=V.clone().sub(z).normalize(),Tn=.4,le=!1,_e=null,ve=!1,de=Et.position.clone(),ue=V.clone();ue.y+=.6;let ye=performance.now(),Se=0;En.shadowMap.enabled=!1,requestAnimationFrame(Te);return}let Ue=!1,Dt=performance.now(),Ut=G.userData.rightArm,Pt=null,qt=!1,cn=me(g.x,g.y).clone(),rn=V.clone().sub(z).normalize(),xn=.4,Yt=0;function zt(Lt){Yt++,Yt%2===0&&on();let Vt=Lt-Dt,Et=Math.min(1,Vt/Xe),dn=Et<=.4?Et/.4:1,_n=Et>.4?(Et-.4)/.6:0;Et<=.4?G.position.lerpVectors(z,ee,dn):G.position.lerpVectors(ee,z,_n);let yn=Et<=.35?Et/.35:Et<=.7?(.7-Et)/.35:0;if(Ut.rotation.y=-yn*1.1,!Ue&&Et>=Ft&&(Ue=!0,k?(g.hp=Math.max(0,g.hp-H),Vn(g.x,g.y,String(H),!1),g.hp<=0&&(qt=!0),Ve(g),Y.get(g.id)?Pt=Lt:qt&&(gn(g),qt=!1)):Vn(g.x,g.y,"MISS",!0)),Pt!=null&&k){let Tn=Y.get(g.id);if(Tn){let le=Math.min(1,(Lt-Pt)/dt),_e=1-le;Ni.copy(rn).multiplyScalar(xn*_e),Tn.position.copy(cn).add(Ni),le>=1&&(Tn.position.copy(cn),Pt=null,qt&&(gn(g),qt=!1))}else Pt=null,qt&&(gn(g),qt=!1)}if(Et<1)requestAnimationFrame(zt);else{G.position.copy(z),Ut.rotation.y=0;let Tn=Pt==null;Tn&&qt&&(gn(g),qt=!1),Tn?(En.shadowMap.enabled=!0,setTimeout(yt?()=>Ht():()=>It(),400)):requestAnimationFrame(zt)}}En.shadowMap.enabled=!1,requestAnimationFrame(zt)}function Su(x,g){let A=me(x,g);A.y+=.4;let C=new ps(.1,12,12),k=new an({color:8930559,transparent:!0,opacity:.9}),H=new ct(C,k);H.position.copy(A),n.add(H);let G=performance.now(),z=0;function V(ee){z++,z%2===0&&on();let re=ee-G,Ee=Math.min(1,re/b),ae=Ee*(2-Ee);H.scale.setScalar(ae*4.5),k.opacity=.9*(1-Ee),Ee<1?requestAnimationFrame(V):(n.remove(H),C.dispose(),k.dispose())}requestAnimationFrame(V)}function Ur(x,g,A,C,k){if(A.target==="enemy"&&g==null){C.updateTurnUI&&C.updateTurnUI(),k&&k();return}let G=(A.range??0)>2&&g!=null&&(g.x!==x.x||g.y!==x.y),z=!G&&g!=null&&(g.x!==x.x||g.y!==x.y);if(!G&&!z){Ja(A.effectKey,x,g,C),C.updateTurnUI&&C.updateTurnUI(),k&&k();return}if(z){let tt=function(je){Te++,Te%2===0&&on();let ke=je-Se,We=Math.min(1,ke/Xe),vn=We<=.4?We/.4:1,pt=We>.4?(We-.4)/.6:0;We<=.4?Lt.position.lerpVectors(Vt,dn,vn):Lt.position.lerpVectors(dn,Vt,pt);let wt=We<=.35?We/.35:We<=.7?(.7-We)/.35:0;if(ve.rotation.y=-wt*1.1,!de&&We>=Ft&&(de=!0,Ja(A.effectKey,x,g,C),g.hp<=0&&(ye=!0),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g),Y.get(g.id)&&A.target!=="ally"?ue=je:ye&&(gn(g),ye=!1)),ue!=null){let $t=Y.get(g.id);if($t){let en=Math.min(1,(je-ue)/dt),Mn=1-en;Ni.copy(le).multiplyScalar(_e*Mn),$t.position.copy(Tn).add(Ni),en>=1&&($t.position.copy(Tn),ue=null,ye&&(gn(g),ye=!1))}else ue=null,ye&&(gn(g),ye=!1)}We<1?requestAnimationFrame(tt):(Lt.position.copy(Vt),ve.rotation.y=0,ue==null&&ye&&(gn(g),ye=!1),ue==null?(En.shadowMap.enabled=!0,C.updateTurnUI&&C.updateTurnUI(),k&&k()):requestAnimationFrame(tt))},Lt=Y.get(x.id);if(!Lt||!Lt.userData.rightArm){Ja(A.effectKey,x,g,C),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g),C.updateTurnUI&&C.updateTurnUI(),k&&k();return}let Vt=me(x.x,x.y).clone(),Et=me(g.x,g.y).clone(),dn=Vt.clone().lerp(Et,.35),_n=Et.x-Vt.x,yn=Et.z-Vt.z;_n*_n+yn*yn>1e-6&&(Lt.rotation.y=Math.atan2(_n,yn));let Tn=me(g.x,g.y).clone(),le=Et.clone().sub(Vt).normalize(),_e=.4,ve=Lt.userData.rightArm,de=!1,ue=null,ye=!1,Se=performance.now(),Te=0;En.shadowMap.enabled=!1,requestAnimationFrame(tt);return}let V=me(x.x,x.y).clone(),ee=me(g.x,g.y).clone(),re=new Ki(.035,.035,.4,6),Ee=new an({color:16763972}),ae=new ct(re,Ee);ae.position.copy(V),ae.position.y+=.6;let ge=ee.clone().sub(V).normalize();ae.quaternion.setFromUnitVectors(new F(0,1,0),ge),n.add(ae);let Ue=ae.position.clone(),Dt=ee.clone();Dt.y+=.6;let Ut=performance.now(),Pt=me(g.x,g.y).clone(),qt=ee.clone().sub(V).normalize(),cn=.4,rn=!1,xn=null,Yt=0;function zt(Lt){Yt++,Yt%2===0&&on();let Vt=Lt-Ut,Et=Math.min(1,Vt/R);if(ae.position.lerpVectors(Ue,Dt,Et),!rn&&Et>=1&&(rn=!0,n.remove(ae),re.dispose(),Ee.dispose(),A.type==="spell"&&Su(g.x,g.y),Ja(A.effectKey,x,g,C),Y.get(g.id)&&g.hp>0&&(xn=Lt),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g)),xn!=null){let dn=Y.get(g.id);if(dn){let _n=Math.min(1,(Lt-xn)/dt),yn=1-_n;Ni.copy(qt).multiplyScalar(cn*yn),dn.position.copy(Pt).add(Ni),_n>=1&&(dn.position.copy(Pt),xn=null)}else xn=null}Et<1?requestAnimationFrame(zt):xn==null?(En.shadowMap.enabled=!0,C.updateTurnUI&&C.updateTurnUI(),k&&k()):requestAnimationFrame(zt)}En.shadowMap.enabled=!1,requestAnimationFrame(zt)}function ln(){if(ot!=="playing"||!so(oe)||Ge||Fe.length===0)return;let x=Fe[Ie],g=D.find(le=>le.id===x);if(!g||g.hp<=0)return;let A=ja(e,g.x,g.y,ce(g,"agi"),D,g),C=[];A.forEach((le,_e)=>{if(le===0)return;let ve=_e%e.w,de=Math.floor(_e/e.w);D.some(ye=>ye.id!==g.id&&ye.x===ve&&ye.y===de&&ye.hp>0)||C.push({gx:ve,gy:de,dist:le})});let k=Mu(g),H=Zl(),G=vu(g.player),z=.25,V=.03,ee=g.maxHp>0&&g.hp/g.maxHp<z,re=g.maxHp>0&&g.hp/g.maxHp<V,Ee=g.level===2,ae=le=>D.some(_e=>_e.hp>0&&_e.x===le.gx&&_e.y===le.gy&&_e.id!==g.id),ge=H.filter(le=>!ae(le)),Ue=G.filter(le=>!ae(le)),Dt=Nr(g).filter(le=>!le.disabled&&g.mp>=le.cost&&le.target==="enemy"),Ut=Dt.length>0?Math.max(...Dt.map(le=>le.range||0)):0,Pt=Math.max(g.range!=null?g.range:1,Ut);function qt(le,_e){if(_e.length===0)return null;let ve=null,de=1/0;for(let ue of le){let ye=0;for(let Se of _e)ye+=Jn(ue.gx,ue.gy,Se.gx,Se.gy);ye<de&&(de=ye,ve=ue)}return ve}function cn(le,_e){if(_e.length===0||le.length===0)return null;let ve=null,de=1/0;for(let ue of le){let ye=Math.min(..._e.map(Se=>Jn(ue.gx,ue.gy,Se.gx,Se.gy)));ye<de&&(de=ye,ve=ue)}return ve}function rn(le,_e){let ve=Pt,de=[];for(let ue of D){if(ue.hp<=0||ue.player===g.player)continue;let ye=Jn(le,_e,ue.x,ue.y);ye<=ve&&ye>0&&_s(e,le,_e,ue.x,ue.y)&&de.push({target:ue,dist:ye})}return de}let xn=new Set(C.map(le=>le.gy*e.w+le.gx));function Yt(le,_e){if(!le||le.length<=1)return null;let ve=Math.min(_e,le.length-1);for(let de=ve;de>=1;de--){let ue=le[de],ye=ue.y*e.w+ue.x;if(xn.has(ye))return{gx:ue.x,gy:ue.y}}return null}function zt(le,_e){if(!le||le.length<=1)return null;let ve=Math.min(_e,le.length-1);for(let de=ve;de>=1;de--){let ue=le[de];if(!D.some(Se=>Se.id!==g.id&&Se.hp>0&&Se.x===ue.x&&Se.y===ue.y))return{gx:ue.x,gy:ue.y}}return null}function Lt(le){let _e=null,ve=null,de=1/0;for(let ue of le){let ye=ji(e,g.x,g.y,ue.gx,ue.gy,D,g);ye&&ye.length>1&&ye.length<de&&(de=ye.length,_e=ye,ve=ue)}return _e&&ve?{path:_e,target:ve}:null}function Vt(le){let _e=le??C;if(_e.length===0)return null;let ve=D.filter(ye=>ye.hp>0&&ye.player!==g.player);if(ve.length===0)return _e[0];let de=null,ue=-1;for(let ye of _e){let Se=Math.min(...ve.map(Te=>Jn(ye.gx,ye.gy,Te.x,Te.y)));Se>ue&&(ue=Se,de=ye)}return de}function Et(le){let _e=le??C;if(_e.length===0)return null;let ve=D.filter(Te=>Te.hp>0&&Te.player!==g.player),de=D.filter(Te=>Te.hp>0&&Te.player===g.player&&Te.id!==g.id);if(ve.length===0)return _e[0];let ue=g.maxHp>0&&g.hp/g.maxHp>=.6,ye=null,Se=-1/0;for(let Te of _e){let tt=Math.min(...ve.map(We=>Jn(Te.gx,Te.gy,We.x,We.y))),je=de.length>0?Math.min(...de.map(We=>Jn(Te.gx,Te.gy,We.x,We.y))):999,ke;ue?ke=je<tt?tt-1e3:tt:ke=tt-je,ke>Se&&(Se=ke,ye=Te)}return ye}function dn(){let le=Pt,_e=D.filter(ue=>ue.hp>0&&ue.player!==g.player);if(_e.length===0)return null;let ve=null,de=-1;for(let ue of C){let ye=Math.min(..._e.map(Te=>Jn(ue.gx,ue.gy,Te.x,Te.y)));_e.some(Te=>Jn(ue.gx,ue.gy,Te.x,Te.y)<=le)&&ye>de&&(de=ye,ve=ue)}return ve}if(gt){if(yt){Ht();return}if(xs-at<=20&&H.length>0){let Se=H.some(Te=>Te.gx===g.x&&Te.gy===g.y);if(Se&&C.length>0){let Te=new Set(H.map(ke=>ke.gy*e.w+ke.gx)),je=C.filter(ke=>Te.has(ke.gy*e.w+ke.gx)).filter(ke=>ke.gx!==g.x||ke.gy!==g.y);if(je.length>0){let ke=Vt(je);if(ke&&(ke.gx!==g.x||ke.gy!==g.y)){Qt(g,ke.gx,ke.gy,()=>setTimeout(Ht,400));return}}Ht();return}if(Se){Ht();return}if(C.length>0){let Te=ge.length>0?ge:H,tt=Lt(Te),je=tt?zt(tt.path,ce(g,"agi")):null;if(je&&(je.gx!==g.x||je.gy!==g.y)){Qt(g,je.gx,je.gy,()=>setTimeout(Ht,400));return}let ke=cn(C,Te);if(ke&&(ke.gx!==g.x||ke.gy!==g.y)){Qt(g,ke.gx,ke.gy,()=>setTimeout(Ht,400));return}}Ht();return}let _e=new Set(H.map(Se=>Se.gy*e.w+Se.gx)),ve=H.length>0?C.filter(Se=>_e.has(Se.gy*e.w+Se.gx)):null,de=ve!=null&&ve.length>0?ve:C,ue=D.filter(Se=>Se.hp>0&&Se.player===g.player&&Se.id!==g.id),ye=null;if(de.length>0&&ue.length>0&&(ye=Et(de),ye)){let Se=ji(e,g.x,g.y,ye.gx,ye.gy,D,g),Te=Se?Se.length-1:1/0;(!Se||Se.length<=1||Te>ce(g,"agi"))&&(ye=Vt(de))}if(!ye&&de.length>0&&(ye=Vt(de)),ye&&(ye.gx!==g.x||ye.gy!==g.y)){Qt(g,ye.gx,ye.gy,()=>setTimeout(Ht,400));return}Ht();return}if(re&&xs-at>20&&!yt&&C.length>0){let le=null,_e=1/0;for(let de of C){let ye=rn(de.gx,de.gy).filter(Se=>Se.target.maxHp>0&&Se.target.hp/Se.target.maxHp<z);if(ye.length>0){let Se=Math.min(...ye.map(Te=>Te.target.hp));Se<_e&&(_e=Se,le=de)}}if(le){let de=ji(e,g.x,g.y,le.gx,le.gy,D,g),ue=de?Yt(de,ce(g,"agi")):null;if(ue&&(ue.gx!==g.x||ue.gy!==g.y)){Qt(g,ue.gx,ue.gy,()=>setTimeout(ln,600));return}}let ve=Vt();if(ve&&(ve.gx!==g.x||ve.gy!==g.y)){Qt(g,ve.gx,ve.gy,()=>setTimeout(ln,600));return}Ht();return}if(!gt){let tt=function(pt){return ar(g,pt,D).filter($t=>$t.targetUnit!=null).map($t=>$t.targetUnit)},le=Nr(g),_e=g.maxHp>0?g.hp/g.maxHp:1,ve=.35,de=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","assault","powerShot","concoct"]),ue=new Set(["chakra","sacrifice"]),ye=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),Se=new Set(["freeze","impale","poison"]),Te=new Set(["dominate","weaken","cripple","hex","blind","raid"]),je={showFloatingCombatText:Vn,handleUnitDeath:gn,updateUnitSlashVisibility:Ve,updateTurnUI:It,world:e,units:D,updateUnitPosition(pt){let wt=Y.get(pt.id);wt&&wt.position.copy(me(pt.x,pt.y))}},ke=null,We=null;for(let pt of le)if(!pt.disabled&&de.has(pt.effectKey)){if(pt.effectKey==="feast"&&g.hp/g.maxHp>.7||pt.effectKey==="berserk"&&g.hp/g.maxHp<.25||pt.effectKey==="shuriken"&&k.length>0)continue;let wt=tt(pt);if(wt.length===0)continue;let $t=wt.filter(Qn=>Qn.maxHp>0&&Qn.hp/Qn.maxHp<ve),en=(Qn,yi)=>ce(Qn,"int")-ce(yi,"int")||Qn.hp-yi.hp,Mn=(Qn,yi)=>Qn.hp-yi.hp,jn=$t.length>0?pt.type==="spell"?$t.sort(en)[0]:$t.sort(Mn)[0]:pt.type==="spell"?wt.sort(en)[0]:wt.sort(Mn)[0];ke=pt,We=jn;break}if(!ke){for(let wt of le)if(!wt.disabled&&ue.has(wt.effectKey)){let en=ar(g,wt,D).filter(Mn=>Mn.targetUnit&&Mn.targetUnit.maxHp>0&&Mn.targetUnit.hp/Mn.targetUnit.maxHp<.5);if(en.length>0){let Mn=en.sort((jn,Qn)=>jn.targetUnit.hp-Qn.targetUnit.hp)[0].targetUnit;ke=wt,We=Mn;break}}}if(!ke&&(k.length>0||C.some(wt=>rn(wt.gx,wt.gy).length>0)))for(let wt of le){if(wt.disabled||wt.effectKey==="bloodlust"&&g.hp/g.maxHp>.8)continue;let $t=g.tempBuff&&g.tempBuff.duration>0;if(!(wt.effectKey==="mantra"&&$t)&&ye.has(wt.effectKey)){if(wt.target==="self"&&!$t){ke=wt,We=g;break}if(wt.target==="ally"){let Mn=ar(g,wt,D).filter(jn=>jn.targetUnit!=null).map(jn=>jn.targetUnit);if(Mn.length>0){let jn=Mn.filter(yi=>!yi.tempBuff||yi.tempBuff.duration<=0),Qn=(jn.length>0?jn:Mn).sort((yi,Fu)=>yi.hp-Fu.hp)[0];ke=wt,We=Qn;break}}}}let vn=k.some(pt=>pt.target.maxHp>0&&pt.target.hp/pt.target.maxHp<z);if(!ke&&!vn){for(let pt of le)if(!pt.disabled&&Te.has(pt.effectKey)){let $t=tt(pt).sort((en,Mn)=>en.hp-Mn.hp)[0];ke=pt,We=$t;break}}if(!ke&&!vn){for(let pt of le)if(!pt.disabled&&Se.has(pt.effectKey)){let $t=tt(pt).filter(en=>!en.tempDebuff||en.tempDebuff.duration<=0);if($t.length>0){let en=$t.sort((Mn,jn)=>Mn.hp-jn.hp)[0];ke=pt,We=en;break}}}if(ke&&We){g.mp-=ke.cost,gt=!0;let pt=ke.target==="self"?g:We;Ur(g,pt,ke,je,()=>setTimeout(ln,600));return}}if(bu(g)&&k.length>0){k.sort((_e,ve)=>_e.target.hp-ve.target.hp||_e.dist-ve.dist);let le=k[0].target;Kl(g,le);return}if(k.length>0){k.sort((_e,ve)=>_e.target.hp-ve.target.hp||_e.dist-ve.dist);let le=k[0].target;Kl(g,le);return}let _n=xs-at;if(_n<=20&&H.length>0&&!yt&&C.length>0&&!H.some(_e=>_e.gx===g.x&&_e.gy===g.y)){let _e=ge.length>0?ge:H,ve=Lt(_e),de=ve?ve.path:null,ue=(We,vn)=>Math.min(...H.map(pt=>Jn(We,vn,pt.gx,pt.gy))),ye=ue(g.x,g.y),Se=null,Te=-1,tt=z;for(let We of C){if(ue(We.gx,We.gy)>ye||rn(We.gx,We.gy).filter(en=>en.target.maxHp>0&&en.target.hp/en.target.maxHp<tt).length===0)continue;let wt=de?de.findIndex(en=>en.x===We.gx&&en.y===We.gy):-1,$t=wt>=0?wt:0;$t>Te&&(Te=$t,Se=We)}if(Se&&(Se.gx!==g.x||Se.gy!==g.y)){Qt(g,Se.gx,Se.gy,()=>setTimeout(ln,600));return}let je=ve?zt(ve.path,ce(g,"agi")):null;if(je&&(je.gx!==g.x||je.gy!==g.y)){Qt(g,je.gx,je.gy,()=>setTimeout(ln,600));return}let ke=cn(C,_e);if(ke&&(ke.gx!==g.x||ke.gy!==g.y)){Qt(g,ke.gx,ke.gy,()=>setTimeout(ln,600));return}}if(ee&&C.length>0&&!yt){let le=null,_e=1/0;for(let ve of C){let ue=rn(ve.gx,ve.gy).filter(ye=>ye.target.maxHp>0&&ye.target.hp/ye.target.maxHp<z);if(ue.length>0){let ye=Math.min(...ue.map(Se=>Se.target.hp));ye<_e&&(_e=ye,le=ve)}}if(le){let ve=ji(e,g.x,g.y,le.gx,le.gy,D,g),de=ve?Yt(ve,ce(g,"agi")):null;if(de&&(de.gx!==g.x||de.gy!==g.y)){Qt(g,de.gx,de.gy,()=>setTimeout(ln,600));return}}if(_n>20&&Ee&&G.length>0&&!G.some(de=>de.gx===g.x&&de.gy===g.y)){let de=Ue.length>0?Ue:G,ue=Lt(de);if(ue!=null&&ue.path.length<=5){let Se=zt(ue.path,ce(g,"agi"));if(Se&&(Se.gx!==g.x||Se.gy!==g.y)){Qt(g,Se.gx,Se.gy,()=>setTimeout(ln,600));return}let Te=cn(C,de);if(Te&&(Te.gx!==g.x||Te.gy!==g.y)){Qt(g,Te.gx,Te.gy,()=>setTimeout(ln,600));return}}}if(_n>20){let ve=Vt();if(ve&&Jn(g.x,g.y,ve.gx,ve.gy)>0){Qt(g,ve.gx,ve.gy,()=>setTimeout(ln,600));return}Ht();return}}if(_n<=10&&H.length>0&&!yt&&C.length>0&&!H.some(_e=>_e.gx===g.x&&_e.gy===g.y)){let _e=ge.length>0?ge:H,ve=Lt(_e),de=ve?zt(ve.path,ce(g,"agi")):null;if(de&&(de.gx!==g.x||de.gy!==g.y)){Qt(g,de.gx,de.gy,()=>setTimeout(ln,600));return}let ue=cn(C,_e);if(ue&&(ue.gx!==g.x||ue.gy!==g.y)){Qt(g,ue.gx,ue.gy,()=>setTimeout(ln,600));return}}if(g.level===1&&H.length>0&&!yt&&!H.some(_e=>_e.gx===g.x&&_e.gy===g.y)&&C.length>0){let _e=ge.length>0?ge:H,ve=Lt(_e),de=ve?zt(ve.path,ce(g,"agi")):null;if(de&&(de.gx!==g.x||de.gy!==g.y)){Qt(g,de.gx,de.gy,()=>setTimeout(ln,600));return}let ue=cn(C,_e);if(ue&&(ue.gx!==g.x||ue.gy!==g.y)){Qt(g,ue.gx,ue.gy,()=>setTimeout(ln,600));return}}if(Ee&&G.length>0&&!yt&&!G.some(_e=>_e.gx===g.x&&_e.gy===g.y)&&C.length>0){let ve=D.filter(je=>je.hp>0&&je.player!==g.player).filter(je=>je.maxHp>0&&je.hp/je.maxHp<z),de=null,ue=1/0;for(let je of C){let We=rn(je.gx,je.gy).find(vn=>ve.some(pt=>pt.id===vn.target.id));We&&We.target.hp<ue&&(ue=We.target.hp,de=je)}if(de){let je=ji(e,g.x,g.y,de.gx,de.gy,D,g),ke=je?Yt(je,ce(g,"agi")):null;if(ke&&(ke.gx!==g.x||ke.gy!==g.y)){Qt(g,ke.gx,ke.gy,()=>setTimeout(ln,600));return}}let ye=Ue.length>0?Ue:G,Se=Lt(ye),Te=Se?zt(Se.path,ce(g,"agi")):null;if(Te&&(Te.gx!==g.x||Te.gy!==g.y)){Qt(g,Te.gx,Te.gy,()=>setTimeout(ln,600));return}let tt=cn(C,ye);if(tt&&(tt.gx!==g.x||tt.gy!==g.y)){Qt(g,tt.gx,tt.gy,()=>setTimeout(ln,600));return}}let yn=D.filter(le=>le.hp>0&&le.player!==g.player);if(g.level>=2&&Pt>=2&&yn.length>0&&!yt&&C.length>0){let le=dn();if(le&&(le.gx!==g.x||le.gy!==g.y)){Qt(g,le.gx,le.gy,()=>setTimeout(ln,600));return}}if(yn.length>0&&!yt&&C.length>0){let _e=function(de,ue){let ye=null;for(let Se=-le;Se<=le;Se++)for(let Te=-le;Te<=le;Te++){if(Te===0&&Se===0||Math.abs(Te)+Math.abs(Se)>le)continue;let tt=de.x+Te,je=de.y+Se;if(tt<0||tt>=e.w||je<0||je>=e.h||!er(e,tt,je)||!_s(e,tt,je,de.x,de.y)||D.some(wt=>wt.hp>0&&wt.x===tt&&wt.y===je))continue;let We=ji(e,g.x,g.y,tt,je,D,g),vn=We?We.length-1:1/0;We&&We.length>1&&(!ue||vn<=ce(g,"agi"))&&(!ye||We.length<ye.length)&&(ye=We)}return ye},le=Pt,ve=[];for(let de of yn){let ue=_e(de,!0);ue&&ve.push({enemy:de,path:ue})}if(ve.length>0){let de=ve.filter(Te=>Te.enemy.maxHp>0&&Te.enemy.hp/Te.enemy.maxHp<z),ue=de.length>0?de:ve;de.length>0?ue.sort((Te,tt)=>Te.enemy.hp-tt.enemy.hp||Te.path.length-tt.path.length):ue.sort((Te,tt)=>Te.path.length-tt.path.length||Te.enemy.hp-tt.enemy.hp);let ye=ue[0],Se=Yt(ye.path,ce(g,"agi"));if(Se&&(Se.gx!==g.x||Se.gy!==g.y)){Qt(g,Se.gx,Se.gy,()=>setTimeout(ln,600));return}}if(ve.length===0){let de=null,ue=1/0;for(let ye of yn){let Se=_e(ye,!1);Se&&Se.length<ue&&(ue=Se.length,de=Se)}if(de){let ye=Yt(de,ce(g,"agi"));if(ye&&(ye.gx!==g.x||ye.gy!==g.y)){Qt(g,ye.gx,ye.gy,()=>setTimeout(ln,600));return}}}}Ht()}function sn(){for(Yn.length=0;Dn.children.length;){let x=Dn.children[0];Dn.remove(x),x.geometry!==or&&x.geometry!==lr&&x.geometry.dispose(),x.material.dispose()}on()}let vs=new Set;function Nr(x){return!x||!x.class?[]:du[x.class]?du[x.class].map(g=>({...g,disabled:g.disabled===!0||x.level<g.level||g.hpCost&&x.hp<g.hpCost||g.cost&&x.mp<g.cost})):[]}function ar(x,g,A){let C=[],k=(G,z,V,ee)=>Math.abs(G-V)+Math.abs(z-ee),H=g.range||0;if(g.target==="self")return C.push({gx:x.x,gy:x.y,targetUnit:null}),C;for(let G of A)G.hp<=0||k(x.x,x.y,G.x,G.y)>H||H>2&&!_s(e,x.x,x.y,G.x,G.y)||(g.target==="enemy"&&G.player!==x.player&&C.push({gx:G.x,gy:G.y,targetUnit:G}),g.target==="ally"&&G.player===x.player&&C.push({gx:G.x,gy:G.y,targetUnit:G}));return C}function Eu(x,g){let A=g.range||0;if(g.target==="self")return[{gx:x.x,gy:x.y}];let C=pu(e,x.x,x.y,A),k=[];return C.forEach((H,G)=>{let z=G%e.w,V=G/e.w|0;A>2&&!_s(e,x.x,x.y,z,V)||k.push({gx:z,gy:V})}),k}function Tu(x,g){let A=ar(x,g,D);vs=new Set(A.map(k=>`${k.gx},${k.gy}`));let C=g.target==="self"?A:Eu(x,g);sn(),C.forEach(({gx:k,gy:H})=>{let z=(kn+e.height[H][k]*.35)/2+kn/2,V=k*_t-ie+_t/2,ee=H*_t-he+_t/2,re=z+.01,Ee=new an({color:8926122,transparent:!0,opacity:.4,side:hn}),ae=new ct(or,Ee);ae.rotation.x=-Math.PI/2,ae.position.set(V,re,ee),Dn.add(ae),Yn.push(Ee);let ge=new an({color:11167436,transparent:!0,opacity:.7,side:hn}),Ue=new ct(lr,ge);Ue.rotation.x=-Math.PI/2,Ue.position.set(V,re+.01,ee),Ue.userData.gx=k,Ue.userData.gy=H,Dn.add(Ue),Yn.push(ge)})}let Jl=.82,jl=1.02,or=new Pi(jl,jl),lr=new Pi(Jl,Jl);function wu(x){sn(),x.forEach(({gx:g,gy:A})=>{let k=(kn+e.height[A][g]*.35)/2+kn/2,H=g*_t-ie+_t/2,G=A*_t-he+_t/2,z=k+.01,V=new an({color:2271812,transparent:!0,opacity:.4,side:hn}),ee=new ct(or,V);ee.rotation.x=-Math.PI/2,ee.position.set(H,z,G),Dn.add(ee),Yn.push(V);let re=new an({color:4508774,transparent:!0,opacity:.7,side:hn}),Ee=new ct(lr,re);Ee.rotation.x=-Math.PI/2,Ee.position.set(H,z+.01,G),Ee.userData.gx=g,Ee.userData.gy=A,Dn.add(Ee),Yn.push(re)}),on()}function ro(x){sn(),x.forEach((g,A)=>{if(g===0)return;let C=A%e.w,k=A/e.w|0,G=(kn+e.height[k][C]*.35)/2+kn/2,z=C*_t-ie+_t/2,V=k*_t-he+_t/2,ee=G+.01,re=new an({color:3381759,transparent:!0,opacity:.35,side:hn}),Ee=new ct(or,re);Ee.rotation.x=-Math.PI/2,Ee.position.set(z,ee,V),Dn.add(Ee),Yn.push(re);let ae=new an({color:6730751,transparent:!0,opacity:.65,side:hn}),ge=new ct(lr,ae);ge.rotation.x=-Math.PI/2,ge.position.set(z,ee+.01,V),Dn.add(ge),Yn.push(ae)}),on()}function Au(x){sn(),x.forEach((g,A)=>{if(g===0)return;let C=A%e.w,k=A/e.w|0,G=(kn+e.height[k][C]*.35)/2+kn/2,z=C*_t-ie+_t/2,V=k*_t-he+_t/2,ee=G+.01,re=new an({color:10035746,transparent:!0,opacity:.4,side:hn}),Ee=new ct(or,re);Ee.rotation.x=-Math.PI/2,Ee.position.set(z,ee,V),Dn.add(Ee),Yn.push(re);let ae=new an({color:13386820,transparent:!0,opacity:.7,side:hn}),ge=new ct(lr,ae);ge.rotation.x=-Math.PI/2,ge.position.set(z,ee+.01,V),Dn.add(ge),Yn.push(ae)}),on()}let Di=new Ga,Ui=new Ne;function Or(x,g){let A=t.getBoundingClientRect();return Ui.x=(x-A.left)/A.width*2-1,Ui.y=-((g-A.top)/A.height)*2+1,{x:Ui.x,y:Ui.y}}function Ru(x,g){if(Ge)return;Ui.x=x,Ui.y=g,Di.setFromCamera(Ui,a);let A=Di.intersectObjects(W.children,!0);if(A.length===0)return;let C=null;for(let z of A){let V=z.object;for(;V&&(V.userData.gx==null||V.userData.gy==null);)V=V.parent;if(V&&V.userData.gx!=null){C=V;break}}if(!C||C.userData.gx==null)return;let k=C.userData.gx,H=C.userData.gy;if(ot==="draft"&&Ke){let z=H*e.w+k;At.has(z)&&gi(k,H);return}if(ot!=="playing"||et==="cvcpu")return;if(Rt&&Ct){let z=Fe[Ie],V=D.find(ge=>ge.id===z&&ge.hp>0);if(V&&k===V.x&&H===V.y){Rt=!1,Ct=null,vs=new Set,sn(),yt?U=new Map:(U=ja(e,V.x,V.y,ce(V,"agi"),D,V),ro(U)),It();return}let ee=`${k},${H}`;if(!vs.has(ee))return;if(!V||V.mp<Ct.cost){Rt=!1,Ct=null,sn(),It();return}let re=D.find(ge=>ge.x===k&&ge.y===H&&ge.hp>0);if(Ct.target==="enemy"&&(!re||re.player===V.player)||Ct.target==="ally"&&re&&re.player!==V.player||Ct.target==="self"&&(k!==V.x||H!==V.y)||Ct.target==="enemy"&&!re)return;V.mp-=Ct.cost,gt=!0;let Ee={showFloatingCombatText:Vn,handleUnitDeath:gn,updateUnitSlashVisibility:Ve,updateTurnUI:It,world:e,units:D,updateUnitPosition(ge){let Ue=Y.get(ge.id);Ue&&Ue.position.copy(me(ge.x,ge.y))}},ae=Ct.target==="self"?V:re||null;Ur(V,ae,Ct,Ee,()=>{sn(),Rt=!1,Ct=null,vs=new Set,yt?Ht():It()});return}if(Wt){let z=Fe[Ie],V=D.find(re=>re.id===z),ee=Y.get(z);if(V&&ee&&Jt.length>0){let re=me(V.x,V.y),Ee=me(k,H),ae=Ee.x-re.x,ge=Ee.z-re.z,Ue=ae*ae+ge*ge>1e-6?Math.atan2(ae,ge):ee.rotation.y;ee.rotation.y=ut(Ue)}Ht();return}if(pe!=null&&St){let z=D.find(re=>re.id===pe);if(!z||z.player!==oe)return;let V=H*e.w+k,ee=D.find(re=>re.x===k&&re.y===H&&re.hp>0);if(ee&&ee.id===Fe[Ie]&&ee.player===oe){St=!1,pe=ee.id,yt?(sn(),U=new Map):(U=ja(e,ee.x,ee.y,ce(ee,"agi"),D,ee),ro(U)),It();return}if(!U.has(V)||U.get(V)===0)return;if(ee&&ee.player!==oe){let re=ce(ee,"agi")*.7+ce(ee,"luk")*.3;if(Math.random()*Math.max(.001,re)<=ce(z,"dex")){let ge=ce(z,"str")*.7+ce(z,"dex")*.1+ce(z,"int")*.07-(ce(ee,"vit")*.3+ce(ee,"luk")*.1),Ue=Math.max(1,Math.floor(ge));ee.hp=Math.max(0,ee.hp-Ue),Vn(ee.x,ee.y,String(Ue),!1),ee.hp<=0&&gn(ee),Ve(ee)}else Vn(ee.x,ee.y,"MISS",!0);gt=!0,pe=null,St=!1,sn(),yt?Ht():It()}return}let G=D.find(z=>z.x===k&&z.y===H&&z.hp>0);if(G){if(G.id===Fe[Ie]&&G.player===oe){Qe(),pe=G.id,St=!1,yt?(sn(),U=new Map):(U=ja(e,k,H,ce(G,"agi"),D,G),ro(U)),It();return}sn(),U=new Map,St=!1,Pe(G),It();return}if(Qe(),pe!=null){let ge=function(){if(ae>=re.length){z.x=re[re.length-1].x,z.y=re[re.length-1].y,Ge=!1,rt(Ee),q(),U=new Map,yt=!0,gt?Ht():It();return}let Ue=re[ae-1],Dt=re[ae],Ut=me(Ue.x,Ue.y).clone(),Pt=me(Dt.x,Dt.y).clone(),qt=Pt.x-Ut.x,cn=Pt.z-Ut.z;qt*qt+cn*cn>1e-6&&(Ee.rotation.y=Math.atan2(qt,cn));let rn=performance.now(),xn=0;function Yt(zt){xn++,xn%2===0&&on();let Lt=Math.min(1,(zt-rn)/hu),Et=(dn=>dn*dn*(3-2*dn))(Lt);Ee.position.lerpVectors(Ut,Pt,Et),ze(Ee,Et),Lt<1?requestAnimationFrame(Yt):(ae++,ge())}requestAnimationFrame(Yt)};if(St)return;let z=D.find(Ue=>Ue.id===pe);if(!z||z.player!==oe)return;let V=H*e.w+k;if(!U.has(V)||U.get(V)===0||D.some(Ue=>Ue.id!==z.id&&Ue.x===k&&Ue.y===H&&Ue.hp>0)||Ge||yt)return;let re=ji(e,z.x,z.y,k,H,D,z);if(!re||re.length<=1)return;pe=null,sn(),Ge=!0,q(z.id);let Ee=Y.get(z.id),ae=1;ge()}}function Ql(x){L.x=x.clientX,L.y=x.clientY,m=x.ctrlKey,p=Or(x.clientX,x.clientY),t.style.cursor=(x.ctrlKey,"grabbing")}function ao(x){return x.touches&&x.touches.length>0?{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}:x.changedTouches&&x.changedTouches.length>0?{clientX:x.changedTouches[0].clientX,clientY:x.changedTouches[0].clientY}:{clientX:x.clientX,clientY:x.clientY}}function ec(x){if(!x||x.length<2)return 0;let g=x[0],A=x[1];return Math.hypot(A.clientX-g.clientX,A.clientY-g.clientY)}function Cu(x){if(x.touches.length===2){B=ec(x.touches),p=null;return}if(x.touches.length!==1)return;B=null;let g=ao(x);Ql({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Pu(x){if(x.touches.length===2){x.preventDefault();let A=ec(x.touches);if(B!=null&&B>0){let C=A-B,k=a.position.distanceTo(c),H=Math.max($,Math.min(S,k-C*N));u.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(u.multiplyScalar(H)),a.lookAt(c),ai=performance.now()}B=A;return}if(B=null,x.touches.length!==1)return;x.preventDefault();let g=ao(x);tc({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Iu(x){if(x.touches.length<2&&(B=null),x.touches.length===2||x.changedTouches.length===0)return;let g=ao(x);oo({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function tc(x){if(Wt){un(x.clientX,x.clientY);return}if(p==null)return;let g=x.clientX-L.x,A=x.clientY-L.y;if(!_&&!v&&(Math.abs(g)>M||Math.abs(A)>M)&&(x.ctrlKey||m?v=!0:_=!0),v){I.copy(a.position).sub(c);let C=I.length();if(C<.001)return;let k=Math.atan2(I.x,I.z),H=Math.asin(Math.max(-1,Math.min(1,I.y/C)));k-=g*y,H+=A*y,H=Math.max(T,Math.min(O,H)),I.x=C*Math.cos(H)*Math.sin(k),I.y=C*Math.sin(H),I.z=C*Math.cos(H)*Math.cos(k),a.position.copy(c).add(I),a.lookAt(c),L.x=x.clientX,L.y=x.clientY,ai=performance.now()}else if(_){let C=Or(x.clientX,x.clientY);f.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,c.y,0)),Di.setFromCamera(new Ne(p.x,p.y),a),Di.ray.intersectPlane(f,d);let k=d.clone();Di.setFromCamera(new Ne(C.x,C.y),a),Di.ray.intersectPlane(f,d);let H=k.sub(d);c.add(H),a.position.add(H),a.lookAt(c),p={x:C.x,y:C.y},ai=performance.now()}}function oo(x){if(p!=null&&!_&&!v){let g=Or(x.clientX,x.clientY);Ru(g.x,g.y)}p=null,_=!1,v=!1,m=!1,t.style.cursor="grab"}function Lu(x){x.preventDefault();let g=a.position.distanceTo(c),A=Math.max($,Math.min(S,g+x.deltaY*w));u.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(u.multiplyScalar(A)),a.lookAt(c),ai=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",Ql),t.addEventListener("mousemove",tc),t.addEventListener("mouseup",oo),t.addEventListener("mouseleave",oo),t.addEventListener("touchstart",Cu,{passive:!0}),t.addEventListener("touchmove",Pu,{passive:!1}),t.addEventListener("touchend",Iu,{passive:!0}),t.addEventListener("wheel",Lu,{passive:!1});function nc(){let x=t.clientWidth,g=t.clientHeight;a.aspect=x/g,a.updateProjectionMatrix(),En.setSize(x,g),En.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",nc);let En=new Tr({antialias:!1});En.setSize(t.clientWidth,t.clientHeight),En.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),En.shadowMap.enabled=!0,En.shadowMap.type=kl,t.appendChild(En.domElement),nc();let Fr=document.createElement("div");Fr.id="combat-text-layer",t.appendChild(Fr);let xi=new F,Ni=new F,Du=1400;function Vn(x,g,A,C,k){let H=document.createElement("div");H.className="combat-text-float "+(C?"miss":"damage")+(k?" "+k:""),H.textContent=A,H.style.position="absolute",Fr.appendChild(H);let G=k==="skill-name"?1.7:1.2,z=performance.now();function V(){xi.copy(me(x,g)),xi.y+=G,xi.project(a);let Ee=t.clientWidth,ae=t.clientHeight;H.style.left=(xi.x*.5+.5)*Ee+"px",H.style.top=(1-(xi.y*.5+.5))*ae+"px"}let ee=0;function re(){ee%2===0&&V(),ee++,performance.now()-z<Du?requestAnimationFrame(re):H.remove()}requestAnimationFrame(re)}let Uu=1500;function Nu(x,g){let A=document.createElement("div");A.className="combat-text-float "+(g||"levelup"),A.textContent="LEVEL UP!",A.style.position="absolute",Fr.appendChild(A);let C=performance.now(),k=0;function H(){xi.copy(me(x.x,x.y)),xi.y+=1.2,xi.project(a);let z=t.clientWidth,V=t.clientHeight;A.style.left=(xi.x*.5+.5)*z+"px",A.style.top=(1-(xi.y*.5+.5))*V+"px"}function G(){k%2===0&&H(),k++,performance.now()-C<Uu?requestAnimationFrame(G):A.remove()}requestAnimationFrame(G)}function gn(x){console.log("[DEATH]",`${x.name} (${x.class}, P${x.player})`,`at (${x.x},${x.y})`,`Lv.${x.level}`),Vn(x.x,x.y,"DEAD",!1);let g=Y.get(x.id);if(!g){q(),ic();return}let A=performance.now();function C(k){on();let H=k-A,G=Math.min(1,H/K),z=G*G;g.rotation.x=z*Math.PI*.5,G<1?requestAnimationFrame(C):(n.remove(g),Y.delete(x.id),q(),ic())}requestAnimationFrame(C)}function ic(){if(ot!=="playing")return;let x=D.some(A=>A.player===1&&A.hp>0),g=D.some(A=>A.player===2&&A.hp>0);x?g||lo(1):lo(2)}function Ou(){let x=Zl(),g=new Set(x.map(G=>G.gy*e.w+G.gx)),A=D.filter(G=>G.hp>0&&G.player===1&&g.has(G.y*e.w+G.x)).length,C=D.filter(G=>G.hp>0&&G.player===2&&g.has(G.y*e.w+G.x)).length,k=null,H="";if(A>C)k=1,H=`Time's up! Player 1 wins! (${A} vs ${C} units on center base)`;else if(C>A)k=2,H=`Time's up! Player 2 wins! (${C} vs ${A} units on center base)`;else{let G=D.filter(V=>V.hp>0&&V.player===1).reduce((V,ee)=>V+ee.hp,0),z=D.filter(V=>V.hp>0&&V.player===2).reduce((V,ee)=>V+ee.hp,0);G>z?(k=1,H=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${G} vs ${z})`):z>G?(k=2,H=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${z} vs ${G})`):H=`Draw! (equal units on center: ${A}, equal HP)`}lo(k,H)}function lo(x,g){ot="gameover",document.getElementById("turn-menu").style.display="none",Qe(),sn();let A=document.getElementById("game-over-overlay"),C=document.getElementById("game-over-title"),k=document.getElementById("game-over-cards");C.textContent=g??`Player ${x} wins!`;let H=D.filter(G=>G.player===(x??1));k.innerHTML=H.map(G=>{let z=G,V=G.level>=3?" level-3":G.level>=2?" level-2":"",ee=z.maxHp>0&&z.hp/z.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${V}${ee}">
          <img class="game-over-card-image" src="${Dr[G.class]||""}" alt="${z.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${z.name}</div>
            <div class="game-over-card-meta">Lv.${z.level} ${z.class} \u2014 HP ${z.hp}/${z.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${z.hp}/${z.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${z.mp}/${z.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${ce(z,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${ce(z,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${ce(z,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${ce(z,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${ce(z,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${ce(z,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${z.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),A.classList.add("visible")}function Ms(x=0){requestAnimationFrame(Ms),ai===0&&(ai=x);let g=x-ai>500,A=0;typeof Ms.frameCount=="number"&&(A=Ms.frameCount),Ms.frameCount=A+1;let C=()=>{if(mi){let k=.6+.4*Math.sin(x*.004);for(let H=0;H<Yn.length;H++){let G=H%2===0?.4:.7;Yn[H].opacity=G*k}En.render(n,a),mi=!1}};g?x-Qi>=100&&(Qi=x,mi=!0,C()):(Ms.frameCount%2===0&&(mi=!0),C())}Ms()}Sx();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
