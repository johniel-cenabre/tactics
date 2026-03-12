var Yl="160";var Qu=0,xc=1,ed=2;var jh=1,$l=2,Li=3,Qi=0,Qn=1,dn=2;var Ki=0,qs=1,yc=2,_c=3,vc=4,td=5,ds=100,nd=101,id=102,Mc=103,bc=104,sd=200,rd=201,ad=202,od=203,tl=204,nl=205,ld=206,cd=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,xd=0,yd=1,_d=2,Ma=3,vd=4,Md=5,bd=6,Sd=7,Qh=0,Ed=1,Td=2,Ji=0,wd=1,Ad=2,Rd=3,Cd=4,Pd=5,Id=6;var eu=300,Zs=301,Ks=302,il=303,sl=304,Qa=306,br=1e3,yi=1001,rl=1002,Wn=1003,Sc=1004;var _o=1005;var li=1006,Ld=1007;var Sr=1008;var ji=1009,Dd=1010,Ud=1011,Zl=1012,tu=1013,$i=1014,Zi=1015,Er=1016,nu=1017,iu=1018,ps=1020,Nd=1021,_i=1023,Od=1024,Fd=1025,ms=1026,Js=1027,Bd=1028,su=1029,kd=1030,ru=1031,au=1033,vo=33776,Mo=33777,bo=33778,So=33779,Ec=35840,Tc=35841,wc=35842,Ac=35843,ou=36196,Rc=37492,Cc=37496,Pc=37808,Ic=37809,Lc=37810,Dc=37811,Uc=37812,Nc=37813,Oc=37814,Fc=37815,Bc=37816,kc=37817,Hc=37818,zc=37819,Vc=37820,Gc=37821,Eo=36492,Wc=36494,Xc=36495,Hd=36283,qc=36284,Yc=36285,$c=36286;var ba=2300,Sa=2301,To=2302,Zc=2400,Kc=2401,Jc=2402;var lu=3e3,gs=3001,zd=3200,Vd=3201,cu=0,Gd=1,ci="",On="srgb",Ui="srgb-linear",Kl="display-p3",eo="display-p3-linear",Ea="linear",tn="srgb",Ta="rec709",wa="p3";var ws=7680;var jc=519,Wd=512,Xd=513,qd=514,hu=515,Yd=516,$d=517,Zd=518,Kd=519,Qc=35044;var eh="300 es",al=1035,Di=2e3,Aa=2001,es=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wo=Math.PI/180,ol=180/Math.PI;function ir(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function Hn(i,e,t){return Math.max(e,Math.min(t,i))}function Jd(i,e){return(i%e+e)%e}function Ao(i,e,t){return(1-t)*i+t*e}function th(i){return(i&i-1)===0&&i!==0}function ll(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ze=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],y=n[8],v=s[0],g=s[3],p=s[6],M=s[1],_=s[4],T=s[7],U=s[2],I=s[5],L=s[8];return r[0]=a*v+o*M+l*U,r[3]=a*g+o*_+l*I,r[6]=a*p+o*T+l*L,r[1]=c*v+h*M+f*U,r[4]=c*g+h*_+f*I,r[7]=c*p+h*T+f*L,r[2]=d*v+u*M+y*U,r[5]=d*g+u*_+y*I,r[8]=d*p+u*T+y*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,y=t*f+n*d+s*u;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=u*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ro=new Rt;function uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jd(){let i=Ra("canvas");return i.style.display="block",i}var nh={};function xr(i){i in nh||(nh[i]=!0,console.warn(i))}var ih=new Rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sh=new Rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[Ui]:{transfer:Ea,primaries:Ta,toReference:i=>i,fromReference:i=>i},[On]:{transfer:tn,primaries:Ta,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[eo]:{transfer:Ea,primaries:wa,toReference:i=>i.applyMatrix3(sh),fromReference:i=>i.applyMatrix3(ih)},[Kl]:{transfer:tn,primaries:wa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(sh),fromReference:i=>i.applyMatrix3(ih).convertLinearToSRGB()}},Qd=new Set([Ui,eo]),Ht={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=$r[e].toReference,s=$r[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return $r[i].primaries},getTransfer:function(i){return i===ci?Ea:$r[i].transfer}};function Ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,Ca=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Ra("canvas")),As.width=e.width,As.height=e.height;let n=As.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ra("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ys(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ys(t[n]/255)*255):t[n]=Ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ef=0,Pa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Po(s[a].image)):r.push(Po(s[a]))}else r=Po(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ca.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tf=0,ui=class i extends es{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=yi,s=yi,r=li,a=Sr,o=_i,l=ji,c=i.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=ir(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===gs?On:ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===On?gs:lu}set encoding(e){xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gs?On:ci}};ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=eu;ui.DEFAULT_ANISOTROPY=1;var Dn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],y=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(y+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,T=(u+1)/2,U=(p+1)/2,I=(h+d)/4,L=(f+v)/4,W=(y+g)/4;return _>T&&_>U?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=I/n,r=L/n):T>U?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=I/s,r=W/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=L/r,s=W/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-y)*(g-y)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-y)/M,this.y=(f-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+u+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cl=class extends es{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dn(0,0,e,t),this.scissorTest=!1,this.viewport=new Dn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gs?On:ci),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ui(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ia=class extends ui{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hl=class extends ui{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],y=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=u,e[t+2]=y,e[t+3]=v;return}if(f!==v||l!==d||c!==u||h!==y){let g=1-o,p=l*d+c*u+h*y+f*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let U=Math.sqrt(_),I=Math.atan2(U,p*M);g=Math.sin(g*I)/U,o=Math.sin(o*I)/U}let T=o*M;if(l=l*g+d*T,c=c*g+u*T,h=h*g+y*T,f=f*g+v*T,g===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=U,c*=U,h*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],y=r[a+3];return e[t]=o*y+h*f+l*u-c*d,e[t+1]=l*y+h*d+c*f-o*u,e[t+2]=c*y+h*u+o*d-l*f,e[t+3]=h*y-o*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),u=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f-d*u*y;break;case"YXZ":this._x=d*h*f+c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f+d*u*y;break;case"ZXY":this._x=d*h*f-c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f-d*u*y;break;case"ZYX":this._x=d*h*f-c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f+d*u*y;break;case"YZX":this._x=d*h*f+c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f-d*u*y;break;case"XZY":this._x=d*h*f-c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f+d*u*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Hn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Io.copy(this).projectOnVector(e),this.sub(Io)}reflect(e){return this.sub(Io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Io=new F,rh=new ts,xs=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pi):pi.fromBufferAttribute(r,a),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Kr.subVectors(this.max,fr),Rs.subVectors(e.a,fr),Cs.subVectors(e.b,fr),Ps.subVectors(e.c,fr),Gi.subVectors(Cs,Rs),Wi.subVectors(Ps,Cs),os.subVectors(Rs,Ps);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-os.z,os.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,os.z,0,-os.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-os.y,os.x,0];return!Lo(t,Rs,Cs,Ps,Kr)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Rs,Cs,Ps,Kr))?!1:(Jr.crossVectors(Gi,Wi),t=[Jr.x,Jr.y,Jr.z],Lo(t,Rs,Cs,Ps,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ai=[new F,new F,new F,new F,new F,new F,new F,new F],pi=new F,Zr=new xs,Rs=new F,Cs=new F,Ps=new F,Gi=new F,Wi=new F,os=new F,fr=new F,Kr=new F,Jr=new F,ls=new F;function Lo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ls.fromArray(i,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nf=new xs,pr=new F,Do=new F,js=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):nf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Do)),this.expandByPoint(pr.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ri=new F,Uo=new F,jr=new F,Xi=new F,No=new F,Qr=new F,Oo=new F,Tr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Uo.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Uo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(jr),o=Xi.dot(this.direction),l=-Xi.dot(jr),c=Xi.lengthSq(),h=Math.abs(1-a*a),f,d,u,y;if(h>0)if(f=a*l-o,d=a*o-l,y=r*h,f>=0)if(d>=-y)if(d<=y){let v=1/h;f*=v,d*=v,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-y?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=y?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Uo).addScaledVector(jr,d),u}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){No.subVectors(t,e),Qr.subVectors(n,e),Oo.crossVectors(No,Qr);let a=this.direction.dot(Oo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);let l=o*this.direction.dot(Qr.crossVectors(Xi,Qr));if(l<0)return null;let c=o*this.direction.dot(No.cross(Xi));if(c<0||l+c>a)return null;let h=-o*Xi.dot(Oo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_n=class i{constructor(e,t,n,s,r,a,o,l,c,h,f,d,u,y,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,d,u,y,v,g)}set(e,t,n,s,r,a,o,l,c,h,f,d,u,y,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=y,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*f,y=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+y*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=y+u*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,y=c*h,v=c*f;t[0]=d+v*o,t[4]=y*o-u,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-y,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,y=c*h,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=y+u*o,t[1]=u+y*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,u=a*f,y=o*h,v=o*f;t[0]=l*h,t[4]=y*c-u,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=u*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,u=a*c,y=o*l,v=o*c;t[0]=l*h,t[4]=v-d*f,t[8]=y*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*f+y,t[10]=d-v*f}else if(e.order==="XZY"){let d=a*l,u=a*c,y=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=a*h,t[9]=u*f-y,t[2]=y*f-u,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sf,e,rf)}lookAt(e,t,n){let s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),qi.crossVectors(n,ni),qi.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),qi.crossVectors(n,ni)),qi.normalize(),ea.crossVectors(ni,qi),s[0]=qi.x,s[4]=ea.x,s[8]=ni.x,s[1]=qi.y,s[5]=ea.y,s[9]=ni.y,s[2]=qi.z,s[6]=ea.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],y=n[2],v=n[6],g=n[10],p=n[14],M=n[3],_=n[7],T=n[11],U=n[15],I=s[0],L=s[4],W=s[8],S=s[12],A=s[1],D=s[5],k=s[9],Q=s[13],P=s[2],G=s[6],$=s[10],ae=s[14],O=s[3],ie=s[7],Z=s[11],ue=s[15];return r[0]=a*I+o*A+l*P+c*O,r[4]=a*L+o*D+l*G+c*ie,r[8]=a*W+o*k+l*$+c*Z,r[12]=a*S+o*Q+l*ae+c*ue,r[1]=h*I+f*A+d*P+u*O,r[5]=h*L+f*D+d*G+u*ie,r[9]=h*W+f*k+d*$+u*Z,r[13]=h*S+f*Q+d*ae+u*ue,r[2]=y*I+v*A+g*P+p*O,r[6]=y*L+v*D+g*G+p*ie,r[10]=y*W+v*k+g*$+p*Z,r[14]=y*S+v*Q+g*ae+p*ue,r[3]=M*I+_*A+T*P+U*O,r[7]=M*L+_*D+T*G+U*ie,r[11]=M*W+_*k+T*$+U*Z,r[15]=M*S+_*Q+T*ae+U*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],y=e[3],v=e[7],g=e[11],p=e[15];return y*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*u-n*l*u)+v*(+t*l*u-t*c*d+r*a*d-s*a*u+s*c*h-r*l*h)+g*(+t*c*f-t*o*u-r*a*f+n*a*u+r*o*h-n*c*h)+p*(-s*o*h-t*l*f+t*o*d+s*a*f-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],y=e[12],v=e[13],g=e[14],p=e[15],M=f*g*c-v*d*c+v*l*u-o*g*u-f*l*p+o*d*p,_=y*d*c-h*g*c-y*l*u+a*g*u+h*l*p-a*d*p,T=h*v*c-y*f*c+y*o*u-a*v*u-h*o*p+a*f*p,U=y*f*l-h*v*l-y*o*d+a*v*d+h*o*g-a*f*g,I=t*M+n*_+s*T+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=M*L,e[1]=(v*d*r-f*g*r-v*s*u+n*g*u+f*s*p-n*d*p)*L,e[2]=(o*g*r-v*l*r+v*s*c-n*g*c-o*s*p+n*l*p)*L,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*u-n*l*u)*L,e[4]=_*L,e[5]=(h*g*r-y*d*r+y*s*u-t*g*u-h*s*p+t*d*p)*L,e[6]=(y*l*r-a*g*r-y*s*c+t*g*c+a*s*p-t*l*p)*L,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*u+t*l*u)*L,e[8]=T*L,e[9]=(y*f*r-h*v*r-y*n*u+t*v*u+h*n*p-t*f*p)*L,e[10]=(a*v*r-y*o*r+y*n*c-t*v*c-a*n*p+t*o*p)*L,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*u-t*o*u)*L,e[12]=U*L,e[13]=(h*v*s-y*f*s+y*n*d-t*v*d-h*n*g+t*f*g)*L,e[14]=(y*o*s-a*v*s-y*n*l+t*v*l+a*n*g-t*o*g)*L,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,y=r*f,v=a*h,g=a*f,p=o*f,M=l*c,_=l*h,T=l*f,U=n.x,I=n.y,L=n.z;return s[0]=(1-(v+p))*U,s[1]=(u+T)*U,s[2]=(y-_)*U,s[3]=0,s[4]=(u-T)*I,s[5]=(1-(d+p))*I,s[6]=(g+M)*I,s[7]=0,s[8]=(y+_)*L,s[9]=(g-M)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Is.set(s[0],s[1],s[2]).length(),a=Is.set(s[4],s[5],s[6]).length(),o=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);let c=1/r,h=1/a,f=1/o;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=f,mi.elements[9]*=f,mi.elements[10]*=f,t.setFromRotationMatrix(mi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Di){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),u,y;if(o===Di)u=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Aa)u=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Di){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(a-r),d=(t+e)*c,u=(n+s)*h,y,v;if(o===Di)y=(a+r)*f,v=-2*f;else if(o===Aa)y=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Is=new F,mi=new _n,sf=new F(0,0,0),rf=new F(1,1,1),qi=new F,ea=new F,ni=new F,ah=new _n,oh=new ts,La=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Hn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};La.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},af=0,lh=new F,Ls=new ts,Ci=new _n,ta=new F,mr=new F,of=new F,lf=new ts,ch=new F(1,0,0),hh=new F(0,1,0),uh=new F(0,0,1),cf={type:"added"},hf={type:"removed"},qn=class i extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new La,n=new ts,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _n},normalMatrix:{value:new Rt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(mr,ta,this.up):Ci.lookAt(ta,mr,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};qn.DEFAULT_UP=new F(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new F,Pi=new F,Fo=new F,Ii=new F,Ds=new F,Us=new F,dh=new F,Bo=new F,ko=new F,Ho=new F,na=!1,Vs=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gi.subVectors(e,t),s.cross(gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gi.subVectors(s,t),Pi.subVectors(n,t),Fo.subVectors(e,t);let a=gi.dot(gi),o=gi.dot(Pi),l=gi.dot(Fo),c=Pi.dot(Pi),h=Pi.dot(Fo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,y=(a*h-o*l)*d;return r.set(1-u-y,y,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,t,n,s,r,a,o,l){return na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),na=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(a,Ii.y),l.addScaledVector(o,Ii.z),l)}static isFrontFacing(e,t,n,s){return gi.subVectors(n,t),Pi.subVectors(e,t),gi.cross(Pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),gi.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),na=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ds.subVectors(s,n),Us.subVectors(r,n),Bo.subVectors(e,n);let l=Ds.dot(Bo),c=Us.dot(Bo);if(l<=0&&c<=0)return t.copy(n);ko.subVectors(e,s);let h=Ds.dot(ko),f=Us.dot(ko);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ds,a);Ho.subVectors(e,r);let u=Ds.dot(Ho),y=Us.dot(Ho);if(y>=0&&u<=y)return t.copy(r);let v=u*c-l*y;if(v<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(Us,o);let g=h*y-u*f;if(g<=0&&f-h>=0&&u-y>=0)return dh.subVectors(r,s),o=(f-h)/(f-h+(u-y)),t.copy(s).addScaledVector(dh,o);let p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ds,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ia={h:0,s:0,l:0};function zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ht.workingColorSpace){if(e=Jd(e,1),t=Hn(t,0,1),n=Hn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zo(a,r,e+1/3),this.g=zo(a,r,e),this.b=zo(a,r,e-1/3)}return Ht.toWorkingColorSpace(this,s),this}setStyle(e,t=On){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){let n=du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Ht.fromWorkingColorSpace(kn.copy(this),e),Math.round(Hn(kn.r*255,0,255))*65536+Math.round(Hn(kn.g*255,0,255))*256+Math.round(Hn(kn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(kn.copy(this),t);let n=kn.r,s=kn.g,r=kn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=On){Ht.fromWorkingColorSpace(kn.copy(this),e);let t=kn.r,n=kn.g,s=kn.b;return e!==On?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(ia);let n=Ao(Yi.h,ia.h,t),s=Ao(Yi.s,ia.s,t),r=Ao(Yi.l,ia.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new xt;xt.NAMES=du;var uf=0,ns=class extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=qs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=nl,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tl&&(n.blendSrc=this.blendSrc),this.blendDst!==nl&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ma&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fn=class extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yn=new F,sa=new ze,ei=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array),s=jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array),s=jn(s,this.array),r=jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}};var Da=class extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ua=class extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ln=class extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}};var df=0,oi=new _n,Vo=new qn,Ns=new F,ii=new xs,gr=new xs,Ln=new F,ti=class i extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uu(e)?Ua:Da)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ln.addVectors(ii.min,gr.min),ii.expandByPoint(Ln),Ln.addVectors(ii.max,gr.max),ii.expandByPoint(Ln)):(ii.expandByPoint(gr.min),ii.expandByPoint(gr.max))}ii.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ln.fromBufferAttribute(o,c),l&&(Ns.fromBufferAttribute(e,c),Ln.add(Ns)),s=Math.max(s,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new F,h[A]=new F;let f=new F,d=new F,u=new F,y=new ze,v=new ze,g=new ze,p=new F,M=new F;function _(A,D,k){f.fromArray(s,A*3),d.fromArray(s,D*3),u.fromArray(s,k*3),y.fromArray(a,A*2),v.fromArray(a,D*2),g.fromArray(a,k*2),d.sub(f),u.sub(f),v.sub(y),g.sub(y);let Q=1/(v.x*g.y-g.x*v.y);isFinite(Q)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(u,-v.y).multiplyScalar(Q),M.copy(u).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(Q),c[A].add(p),c[D].add(p),c[k].add(p),h[A].add(M),h[D].add(M),h[k].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let A=0,D=T.length;A<D;++A){let k=T[A],Q=k.start,P=k.count;for(let G=Q,$=Q+P;G<$;G+=3)_(n[G+0],n[G+1],n[G+2])}let U=new F,I=new F,L=new F,W=new F;function S(A){L.fromArray(r,A*3),W.copy(L);let D=c[A];U.copy(D),U.sub(L.multiplyScalar(L.dot(D))).normalize(),I.crossVectors(W,D);let Q=I.dot(h[A])<0?-1:1;l[A*4]=U.x,l[A*4+1]=U.y,l[A*4+2]=U.z,l[A*4+3]=Q}for(let A=0,D=T.length;A<D;++A){let k=T[A],Q=k.start,P=k.count;for(let G=Q,$=Q+P;G<$;G+=3)S(n[G+0]),S(n[G+1]),S(n[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let d=0,u=e.count;d<u;d+=3){let y=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,y=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let p=0;p<h;p++)d[y++]=c[u++]}return new ei(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new _n,cs=new Tr,ra=new js,ph=new F,Os=new F,Fs=new F,Bs=new F,Go=new F,aa=new F,oa=new ze,la=new ze,ca=new ze,mh=new F,gh=new F,xh=new F,ha=new F,ua=new F,Je=class extends qn{constructor(e=new ti,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Go.fromBufferAttribute(f,e),a?aa.addScaledVector(Go,h):aa.addScaledVector(Go.sub(t),h))}t.add(aa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(ra.containsPoint(cs.origin)===!1&&(cs.intersectSphere(ra,ph)===null||cs.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(fh.copy(r).invert(),cs.copy(e.ray).applyMatrix4(fh),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],p=a[g.materialIndex],M=Math.max(g.start,u.start),_=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let T=M,U=_;T<U;T+=3){let I=o.getX(T),L=o.getX(T+1),W=o.getX(T+2);s=da(this,p,e,n,c,h,f,I,L,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let g=y,p=v;g<p;g+=3){let M=o.getX(g),_=o.getX(g+1),T=o.getX(g+2);s=da(this,a,e,n,c,h,f,M,_,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],p=a[g.materialIndex],M=Math.max(g.start,u.start),_=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let T=M,U=_;T<U;T+=3){let I=T,L=T+1,W=T+2;s=da(this,p,e,n,c,h,f,I,L,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let g=y,p=v;g<p;g+=3){let M=g,_=g+1,T=g+2;s=da(this,a,e,n,c,h,f,M,_,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ff(i,e,t,n,s,r,a,o){let l;if(e.side===Qn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Qi,o),l===null)return null;ua.copy(o),ua.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ua);return c<t.near||c>t.far?null:{distance:c,point:ua.clone(),object:i}}function da(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Os),i.getVertexPosition(l,Fs),i.getVertexPosition(c,Bs);let h=ff(i,e,t,n,Os,Fs,Bs,ha);if(h){s&&(oa.fromBufferAttribute(s,o),la.fromBufferAttribute(s,l),ca.fromBufferAttribute(s,c),h.uv=Vs.getInterpolation(ha,Os,Fs,Bs,oa,la,ca,new ze)),r&&(oa.fromBufferAttribute(r,o),la.fromBufferAttribute(r,l),ca.fromBufferAttribute(r,c),h.uv1=Vs.getInterpolation(ha,Os,Fs,Bs,oa,la,ca,new ze),h.uv2=h.uv1),a&&(mh.fromBufferAttribute(a,o),gh.fromBufferAttribute(a,l),xh.fromBufferAttribute(a,c),h.normal=Vs.getInterpolation(ha,Os,Fs,Bs,mh,gh,xh,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};Vs.getNormal(Os,Fs,Bs,f.normal),h.face=f}return h}var wn=class i extends ti{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(f,2));function y(v,g,p,M,_,T,U,I,L,W,S){let A=T/L,D=U/W,k=T/2,Q=U/2,P=I/2,G=L+1,$=W+1,ae=0,O=0,ie=new F;for(let Z=0;Z<$;Z++){let ue=Z*D-Q;for(let Ce=0;Ce<G;Ce++){let te=Ce*A-k;ie[v]=te*M,ie[g]=ue*_,ie[p]=P,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[g]=0,ie[p]=I>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(Ce/L),f.push(1-Z/W),ae+=1}}for(let Z=0;Z<W;Z++)for(let ue=0;ue<L;ue++){let Ce=d+ue+G*Z,te=d+ue+G*(Z+1),oe=d+(ue+1)+G*(Z+1),De=d+(ue+1)+G*Z;l.push(Ce,te,De),l.push(te,oe,De),O+=6}o.addGroup(u,O,S),u+=O,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gn(i){let e={};for(let t=0;t<i.length;t++){let n=Qs(i[t]);for(let s in n)e[s]=n[s]}return e}function pf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fu(i){return i.getRenderTarget()===null?i.outputColorSpace:Ht.workingColorSpace}var mf={clone:Qs,merge:Gn},gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oi=class extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Na=class extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=class extends Na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Hs=1,ul=class extends qn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xn(ks,Hs,e,t);s.layers=this.layers,this.add(s);let r=new Xn(ks,Hs,e,t);r.layers=this.layers,this.add(r);let a=new Xn(ks,Hs,e,t);a.layers=this.layers,this.add(a);let o=new Xn(ks,Hs,e,t);o.layers=this.layers,this.add(o);let l=new Xn(ks,Hs,e,t);l.layers=this.layers,this.add(l);let c=new Xn(ks,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Oa=class extends ui{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dl=class extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===gs?On:ci),this.texture=new Oa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new Oi({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qn,blending:Ki});r.uniforms.tEquirect.value=t;let a=new Je(s,r),o=t.minFilter;return t.minFilter===Sr&&(t.minFilter=li),new ul(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Wo=new F,yf=new F,_f=new Rt,xi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wo.subVectors(n,t).cross(yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_f.getNormalMatrix(e),s=this.coplanarPoint(Wo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new js,fa=new F,Ar=class{constructor(e=new xi,t=new xi,n=new xi,s=new xi,r=new xi,a=new xi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],u=s[8],y=s[9],v=s[10],g=s[11],p=s[12],M=s[13],_=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,g-u,T-p).normalize(),n[1].setComponents(l+r,d+c,g+u,T+p).normalize(),n[2].setComponents(l+a,d+h,g+y,T+M).normalize(),n[3].setComponents(l-a,d-h,g-y,T-M).normalize(),n[4].setComponents(l-o,d-f,g-v,T-_).normalize(),t===Di)n[5].setComponents(l+o,d+f,g+v,T+_).normalize();else if(t===Aa)n[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fa.x=s.normal.x>0?e.max.x:e.min.x,fa.y=s.normal.y>0?e.max.y:e.min.y,fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function vf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,d=c.usage,u=f.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,f){let d=h.array,u=h._updateRange,y=h.updateRanges;if(i.bindBuffer(f,c),u.count===-1&&y.length===0&&i.bufferSubData(f,0,d),y.length!==0){for(let v=0,g=y.length;v<g;v++){let p=y[v];t?i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}var Fi=class i extends ti{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,u=[],y=[],v=[],g=[];for(let p=0;p<h;p++){let M=p*d-a;for(let _=0;_<c;_++){let T=_*f-r;y.push(T,-M,0),v.push(0,0,1),g.push(_/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let _=M+c*p,T=M+c*(p+1),U=M+1+c*(p+1),I=M+1+c*p;u.push(_,T,I),u.push(T,U,I)}this.setIndex(u),this.setAttribute("position",new ln(y,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bf=`#ifdef USE_ALPHAHASH
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
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
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
#endif`,Rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf=`#ifdef USE_BATCHING
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
#endif`,Pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,If=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
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
#endif`,Nf=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wf=`#define PI 3.141592653589793
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
} // validated`,Xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qf=`vec3 transformedNormal = objectNormal;
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
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`
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
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
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
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
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
#endif`,vp=`struct PhysicalMaterial {
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
}`,Mp=`
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ip=`#if defined( USE_POINTS_UV )
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
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
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
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rm=`float getShadowMask() {
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
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,Fm=`#define LAMBERT
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
}`,Bm=`#define MATCAP
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
}`,km=`#define MATCAP
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
}`,Hm=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define STANDARD
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
}`,qm=`#define TOON
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
}`,Ym=`#define TOON
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
}`,$m=`uniform float size;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,Jm=`uniform vec3 color;
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
}`,jm=`uniform float rotation;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:Mf,alphahash_pars_fragment:bf,alphamap_fragment:Sf,alphamap_pars_fragment:Ef,alphatest_fragment:Tf,alphatest_pars_fragment:wf,aomap_fragment:Af,aomap_pars_fragment:Rf,batching_pars_vertex:Cf,batching_vertex:Pf,begin_vertex:If,beginnormal_vertex:Lf,bsdfs:Df,iridescence_fragment:Uf,bumpmap_pars_fragment:Nf,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:Bf,clipping_planes_vertex:kf,color_fragment:Hf,color_pars_fragment:zf,color_pars_vertex:Vf,color_vertex:Gf,common:Wf,cube_uv_reflection_fragment:Xf,defaultnormal_vertex:qf,displacementmap_pars_vertex:Yf,displacementmap_vertex:$f,emissivemap_fragment:Zf,emissivemap_pars_fragment:Kf,colorspace_fragment:Jf,colorspace_pars_fragment:jf,envmap_fragment:Qf,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:np,envmap_physical_pars_fragment:pp,envmap_vertex:ip,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_fragment:cp,lightmap_pars_fragment:hp,lights_lambert_fragment:up,lights_lambert_pars_fragment:dp,lights_pars_begin:fp,lights_toon_fragment:mp,lights_toon_pars_fragment:gp,lights_phong_fragment:xp,lights_phong_pars_fragment:yp,lights_physical_fragment:_p,lights_physical_pars_fragment:vp,lights_fragment_begin:Mp,lights_fragment_maps:bp,lights_fragment_end:Sp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:Tp,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Ap,map_fragment:Rp,map_pars_fragment:Cp,map_particle_fragment:Pp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Dp,morphcolor_vertex:Up,morphnormal_vertex:Np,morphtarget_pars_vertex:Op,morphtarget_vertex:Fp,normal_fragment_begin:Bp,normal_fragment_maps:kp,normal_pars_fragment:Hp,normal_pars_vertex:zp,normal_vertex:Vp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Yp,opaque_fragment:$p,packing:Zp,premultiplied_alpha_fragment:Kp,project_vertex:Jp,dithering_fragment:jp,dithering_pars_fragment:Qp,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:sm,shadowmask_pars_fragment:rm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:dm,tonemapping_pars_fragment:fm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:xm,uv_vertex:ym,worldpos_vertex:_m,background_vert:vm,background_frag:Mm,backgroundCube_vert:bm,backgroundCube_frag:Sm,cube_vert:Em,cube_frag:Tm,depth_vert:wm,depth_frag:Am,distanceRGBA_vert:Rm,distanceRGBA_frag:Cm,equirect_vert:Pm,equirect_frag:Im,linedashed_vert:Lm,linedashed_frag:Dm,meshbasic_vert:Um,meshbasic_frag:Nm,meshlambert_vert:Om,meshlambert_frag:Fm,meshmatcap_vert:Bm,meshmatcap_frag:km,meshnormal_vert:Hm,meshnormal_frag:zm,meshphong_vert:Vm,meshphong_frag:Gm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:qm,meshtoon_frag:Ym,points_vert:$m,points_frag:Zm,shadow_vert:Km,shadow_frag:Jm,sprite_vert:jm,sprite_frag:Qm},Le={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Ei={basic:{uniforms:Gn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Gn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Gn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Gn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Gn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Gn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Gn([Le.points,Le.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Gn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Gn([Le.common,Le.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Gn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Gn([Le.sprite,Le.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Gn([Le.common,Le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Gn([Le.lights,Le.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Ei.physical={uniforms:Gn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};var pa={r:0,b:0,g:0};function eg(i,e,t,n,s,r,a){let o=new xt(0),l=r===!0?0:1,c,h,f=null,d=0,u=null;function y(g,p){let M=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Qa)?(h===void 0&&(h=new Je(new wn(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Qs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ht.getTransfer(_.colorSpace)!==tn,(f!==_||d!==_.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,d=_.version,u=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Je(new Fi(2,2),new Oi({name:"BackgroundMaterial",uniforms:Qs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(_.colorSpace)!==tn,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,p){g.getRGB(pa,fu(i)),n.buffers.color.setClear(pa.r,pa.g,pa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:y}}function tg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,h=!1;function f(P,G,$,ae,O){let ie=!1;if(a){let Z=v(ae,$,G);c!==Z&&(c=Z,u(c.object)),ie=p(P,ae,$,O),ie&&M(P,ae,$,O)}else{let Z=G.wireframe===!0;(c.geometry!==ae.id||c.program!==$.id||c.wireframe!==Z)&&(c.geometry=ae.id,c.program=$.id,c.wireframe=Z,ie=!0)}O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(ie||h)&&(h=!1,W(P,G,$,ae),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function y(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,G,$){let ae=$.wireframe===!0,O=o[P.id];O===void 0&&(O={},o[P.id]=O);let ie=O[G.id];ie===void 0&&(ie={},O[G.id]=ie);let Z=ie[ae];return Z===void 0&&(Z=g(d()),ie[ae]=Z),Z}function g(P){let G=[],$=[],ae=[];for(let O=0;O<s;O++)G[O]=0,$[O]=0,ae[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:ae,object:P,attributes:{},index:null}}function p(P,G,$,ae){let O=c.attributes,ie=G.attributes,Z=0,ue=$.getAttributes();for(let Ce in ue)if(ue[Ce].location>=0){let oe=O[Ce],De=ie[Ce];if(De===void 0&&(Ce==="instanceMatrix"&&P.instanceMatrix&&(De=P.instanceMatrix),Ce==="instanceColor"&&P.instanceColor&&(De=P.instanceColor)),oe===void 0||oe.attribute!==De||De&&oe.data!==De.data)return!0;Z++}return c.attributesNum!==Z||c.index!==ae}function M(P,G,$,ae){let O={},ie=G.attributes,Z=0,ue=$.getAttributes();for(let Ce in ue)if(ue[Ce].location>=0){let oe=ie[Ce];oe===void 0&&(Ce==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),Ce==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));let De={};De.attribute=oe,oe&&oe.data&&(De.data=oe.data),O[Ce]=De,Z++}c.attributes=O,c.attributesNum=Z,c.index=ae}function _(){let P=c.newAttributes;for(let G=0,$=P.length;G<$;G++)P[G]=0}function T(P){U(P,0)}function U(P,G){let $=c.newAttributes,ae=c.enabledAttributes,O=c.attributeDivisors;$[P]=1,ae[P]===0&&(i.enableVertexAttribArray(P),ae[P]=1),O[P]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),O[P]=G)}function I(){let P=c.newAttributes,G=c.enabledAttributes;for(let $=0,ae=G.length;$<ae;$++)G[$]!==P[$]&&(i.disableVertexAttribArray($),G[$]=0)}function L(P,G,$,ae,O,ie,Z){Z===!0?i.vertexAttribIPointer(P,G,$,O,ie):i.vertexAttribPointer(P,G,$,ae,O,ie)}function W(P,G,$,ae){if(n.isWebGL2===!1&&(P.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let O=ae.attributes,ie=$.getAttributes(),Z=G.defaultAttributeValues;for(let ue in ie){let Ce=ie[ue];if(Ce.location>=0){let te=O[ue];if(te===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){let oe=te.normalized,De=te.itemSize,qe=t.get(te);if(qe===void 0)continue;let He=qe.buffer,ct=qe.type,ht=qe.bytesPerElement,Qe=n.isWebGL2===!0&&(ct===i.INT||ct===i.UNSIGNED_INT||te.gpuType===tu);if(te.isInterleavedBufferAttribute){let wt=te.data,X=wt.stride,cn=te.offset;if(wt.isInstancedInterleavedBuffer){for(let Ze=0;Ze<Ce.locationSize;Ze++)U(Ce.location+Ze,wt.meshPerAttribute);P.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Ze=0;Ze<Ce.locationSize;Ze++)T(Ce.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Ze=0;Ze<Ce.locationSize;Ze++)L(Ce.location+Ze,De/Ce.locationSize,ct,oe,X*ht,(cn+De/Ce.locationSize*Ze)*ht,Qe)}else{if(te.isInstancedBufferAttribute){for(let wt=0;wt<Ce.locationSize;wt++)U(Ce.location+wt,te.meshPerAttribute);P.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let wt=0;wt<Ce.locationSize;wt++)T(Ce.location+wt);i.bindBuffer(i.ARRAY_BUFFER,He);for(let wt=0;wt<Ce.locationSize;wt++)L(Ce.location+wt,De/Ce.locationSize,ct,oe,De*ht,De/Ce.locationSize*wt*ht,Qe)}}else if(Z!==void 0){let oe=Z[ue];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(Ce.location,oe);break;case 3:i.vertexAttrib3fv(Ce.location,oe);break;case 4:i.vertexAttrib4fv(Ce.location,oe);break;default:i.vertexAttrib1fv(Ce.location,oe)}}}}I()}function S(){k();for(let P in o){let G=o[P];for(let $ in G){let ae=G[$];for(let O in ae)y(ae[O].object),delete ae[O];delete G[$]}delete o[P]}}function A(P){if(o[P.id]===void 0)return;let G=o[P.id];for(let $ in G){let ae=G[$];for(let O in ae)y(ae[O].object),delete ae[O];delete G[$]}delete o[P.id]}function D(P){for(let G in o){let $=o[G];if($[P.id]===void 0)continue;let ae=$[P.id];for(let O in ae)y(ae[O].object),delete ae[O];delete $[P.id]}}function k(){Q(),h=!0,c!==l&&(c=l,u(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:k,resetDefaultState:Q,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:T,disableUnusedAttributes:I}}function ng(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,d){if(d===0)return;let u,y;if(s)u=i,y="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[y](r,h,f,d),t.update(f,r,d)}function c(h,f,d){if(d===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let y=0;y<d;y++)this.render(h[y],f[y]);else{u.multiDrawArraysWEBGL(r,h,0,f,0,d);let y=0;for(let v=0;v<d;v++)y+=f[v];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ig(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,T=a||e.has("OES_texture_float"),U=_&&T,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:U,maxSamples:I}}function sg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new xi,o=new Rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let y=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||y===null||y.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,_=M*4,T=p.clippingState||null;l.value=T,T=h(y,d,_,u);for(let U=0;U!==_;++U)T[U]=t[U];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,y){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,y!==!0||g===null){let p=u+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,T=u;_!==v;++_,T+=4)a.copy(f[_]).applyMatrix4(M,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function rg(i){let e=new WeakMap;function t(a,o){return o===il?a.mapping=Zs:o===sl&&(a.mapping=Ks),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===il||o===sl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new dl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Fa=class extends Na{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gs=4,yh=[.125,.215,.35,.446,.526,.582],fs=20,Xo=new Fa,_h=new xt,qo=null,Yo=0,$o=0,us=(1+Math.sqrt(5))/2,zs=1/us,vh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,us,zs),new F(0,us,-zs),new F(zs,0,us),new F(-zs,0,us),new F(us,zs,0),new F(-us,zs,0)],Ba=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qo,Yo,$o),e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:Er,format:_i,colorSpace:Ui,depthBuffer:!1},s=Mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(r)),this._blurMaterial=og(r,e,t)}return s}_compileMaterial(e){let t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,n,s){let o=new Xn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(_h),h.toneMapping=Ji,h.autoClear=!1;let u=new fn({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),y=new Je(new wn,u),v=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,v=!0):(u.color.copy(_h),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;ma(s,M*_,p>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zs||e.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Xo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vh[(s-1)%vh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Je(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*fs-1),v=r/y,g=isFinite(r)?1+Math.floor(h*v):fs;g>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);let p=[],M=0;for(let L=0;L<fs;++L){let W=L/v,S=Math.exp(-W*W/2);p.push(S),L===0?M+=S:L<g&&(M+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-n;let T=this._sizeLods[s],U=3*T*(s>_-Gs?s-_+Gs:0),I=4*(this._cubeSize-T);ma(t,U,I,3*T,2*T),l.setRenderTarget(t),l.render(f,Xo)}};function ag(i){let e=[],t=[],n=[],s=i,r=i-Gs+1+yh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Gs?l=yh[a-i+Gs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,y=6,v=3,g=2,p=1,M=new Float32Array(v*y*u),_=new Float32Array(g*y*u),T=new Float32Array(p*y*u);for(let I=0;I<u;I++){let L=I%3*2/3-1,W=I>2?0:-1,S=[L,W,0,L+2/3,W,0,L+2/3,W+1,0,L,W,0,L+2/3,W+1,0,L,W+1,0];M.set(S,v*y*I),_.set(d,g*y*I);let A=[I,I,I,I,I,I];T.set(A,p*y*I)}let U=new ti;U.setAttribute("position",new ei(M,v)),U.setAttribute("uv",new ei(_,g)),U.setAttribute("faceIndex",new ei(T,p)),e.push(U),s>Gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mh(i,e,t){let n=new Ni(i,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function og(i,e,t){let n=new Float32Array(fs),s=new F(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function bh(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Sh(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function lg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===il||l===sl,h=l===Zs||l===Ks;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ba(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Ba(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hg(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);for(let y in d.morphAttributes){let v=d.morphAttributes[y];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let y in d)e.update(d[y],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let y in u){let v=u[y];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,y=f.attributes.position,v=0;if(u!==null){let M=u.array;v=u.version;for(let _=0,T=M.length;_<T;_+=3){let U=M[_+0],I=M[_+1],L=M[_+2];d.push(U,I,I,L,L,U)}}else if(y!==void 0){let M=y.array;v=y.version;for(let _=0,T=M.length/3-1;_<T;_+=3){let U=_+0,I=_+1,L=_+2;d.push(U,I,I,L,L,U)}}else return;let g=new(uu(d)?Ua:Da)(d,1);g.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function ug(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,y){i.drawElements(r,y,o,u*l),t.update(y,r,1)}function f(u,y,v){if(v===0)return;let g,p;if(s)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,y,o,u*l,v),t.update(y,r,v)}function d(u,y,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(u[p]/l,y[p]);else{g.multiDrawElementsWEBGL(r,y,0,o,u,0,v);let p=0;for(let M=0;M<v;M++)p+=y[M];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function dg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function fg(i,e){return i[0]-e[0]}function pg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function mg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Dn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=u!==void 0?u.length:0,v=r.get(h);if(v===void 0||v.count!==y){let P=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],W=0;M===!0&&(W=1),_===!0&&(W=2),T===!0&&(W=3);let S=h.attributes.position.count*W,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let D=new Float32Array(S*A*4*y),k=new Ia(D,S,A,y);k.type=Zi,k.needsUpdate=!0;let Q=W*4;for(let G=0;G<y;G++){let $=U[G],ae=I[G],O=L[G],ie=S*A*4*G;for(let Z=0;Z<$.count;Z++){let ue=Z*Q;M===!0&&(a.fromBufferAttribute($,Z),D[ie+ue+0]=a.x,D[ie+ue+1]=a.y,D[ie+ue+2]=a.z,D[ie+ue+3]=0),_===!0&&(a.fromBufferAttribute(ae,Z),D[ie+ue+4]=a.x,D[ie+ue+5]=a.y,D[ie+ue+6]=a.z,D[ie+ue+7]=0),T===!0&&(a.fromBufferAttribute(O,Z),D[ie+ue+8]=a.x,D[ie+ue+9]=a.y,D[ie+ue+10]=a.z,D[ie+ue+11]=O.itemSize===4?a.w:1)}}v={count:y,texture:k,size:new ze(S,A)},r.set(h,v),h.addEventListener("dispose",P)}let g=0;for(let M=0;M<d.length;M++)g+=d[M];let p=h.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let u=d===void 0?0:d.length,y=n[h.id];if(y===void 0||y.length!==u){y=[];for(let _=0;_<u;_++)y[_]=[_,0];n[h.id]=y}for(let _=0;_<u;_++){let T=y[_];T[0]=_,T[1]=d[_]}y.sort(pg);for(let _=0;_<8;_++)_<u&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(fg);let v=h.morphAttributes.position,g=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let T=o[_],U=T[0],I=T[1];U!==Number.MAX_SAFE_INTEGER&&I?(v&&h.getAttribute("morphTarget"+_)!==v[U]&&h.setAttribute("morphTarget"+_,v[U]),g&&h.getAttribute("morphNormal"+_)!==g[U]&&h.setAttribute("morphNormal"+_,g[U]),s[_]=I,p+=I):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function gg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var ka=class extends ui{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:ms,h!==ms&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ms&&(n=$i),n===void 0&&h===Js&&(n=ps),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mu=new ui,gu=new ka(1,1);gu.compareFunction=hu;var xu=new Ia,yu=new hl,_u=new Oa,Eh=[],Th=[],wh=new Float32Array(16),Ah=new Float32Array(9),Rh=new Float32Array(4);function sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function An(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function to(i,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2fv(this.addr,e),Rn(t,e)}}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(An(t,e))return;i.uniform3fv(this.addr,e),Rn(t,e)}}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4fv(this.addr,e),Rn(t,e)}}function Mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,n))return;Rh.set(n),i.uniformMatrix2fv(this.addr,!1,Rh),Rn(t,n)}}function bg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),Rn(t,n)}}function Sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,n))return;wh.set(n),i.uniformMatrix4fv(this.addr,!1,wh),Rn(t,n)}}function Eg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2iv(this.addr,e),Rn(t,e)}}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;i.uniform3iv(this.addr,e),Rn(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4iv(this.addr,e),Rn(t,e)}}function Rg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2uiv(this.addr,e),Rn(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;i.uniform3uiv(this.addr,e),Rn(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4uiv(this.addr,e),Rn(t,e)}}function Lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?gu:mu;t.setTexture2D(e||r,s)}function Dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yu,s)}function Ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_u,s)}function Ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xu,s)}function Og(i){switch(i){case 5126:return xg;case 35664:return yg;case 35665:return _g;case 35666:return vg;case 35674:return Mg;case 35675:return bg;case 35676:return Sg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return wg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}function Fg(i,e){i.uniform1fv(this.addr,e)}function Bg(i,e){let t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function kg(i,e){let t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function Hg(i,e){let t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function zg(i,e){let t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vg(i,e){let t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gg(i,e){let t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wg(i,e){i.uniform1iv(this.addr,e)}function Xg(i,e){i.uniform2iv(this.addr,e)}function qg(i,e){i.uniform3iv(this.addr,e)}function Yg(i,e){i.uniform4iv(this.addr,e)}function $g(i,e){i.uniform1uiv(this.addr,e)}function Zg(i,e){i.uniform2uiv(this.addr,e)}function Kg(i,e){i.uniform3uiv(this.addr,e)}function Jg(i,e){i.uniform4uiv(this.addr,e)}function jg(i,e,t){let n=this.cache,s=e.length,r=to(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||mu,r[a])}function Qg(i,e,t){let n=this.cache,s=e.length,r=to(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||yu,r[a])}function e0(i,e,t){let n=this.cache,s=e.length,r=to(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_u,r[a])}function t0(i,e,t){let n=this.cache,s=e.length,r=to(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xu,r[a])}function n0(i){switch(i){case 5126:return Fg;case 35664:return Bg;case 35665:return kg;case 35666:return Hg;case 35674:return zg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return $g;case 36294:return Zg;case 36295:return Kg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}var fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Og(t.type)}},pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n0(t.type)}},ml=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Zo=/(\w+)(\])?(\[|\.)?/g;function Ch(i,e){i.seq.push(e),i.map[e.id]=e}function i0(i,e,t){let n=i.name,s=n.length;for(Zo.lastIndex=0;;){let r=Zo.exec(n),a=Zo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ch(t,c===void 0?new fl(o,i,e):new pl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new ml(o),Ch(t,f)),t=f}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);i0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ph(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var s0=37297,r0=0;function a0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function o0(i){let e=Ht.getPrimaries(Ht.workingColorSpace),t=Ht.getPrimaries(i),n;switch(e===t?n="":e===wa&&t===Ta?n="LinearDisplayP3ToLinearSRGB":e===Ta&&t===wa&&(n="LinearSRGBToLinearDisplayP3"),i){case Ui:case eo:return[n,"LinearTransferOETF"];case On:case Kl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ih(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+a0(i.getShaderSource(e),a)}else return s}function l0(i,e){let t=o0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function c0(i,e){let t;switch(e){case wd:t="Linear";break;case Ad:t="Reinhard";break;case Rd:t="OptimizedCineon";break;case Cd:t="ACESFilmic";break;case Id:t="AgX";break;case Pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function h0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function u0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ws).join(`
`)}function d0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ws(i){return i!==""}function Lh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(p0,g0)}var m0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function g0(i,e){let t=Tt[e];if(t===void 0){let n=m0.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}var x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(i){return i.replace(x0,y0)}function y0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function v0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zs:case Ks:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function b0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case Ed:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function S0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function E0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=_0(t),c=v0(t),h=M0(t),f=b0(t),d=S0(t),u=t.isWebGL2?"":h0(t),y=u0(t),v=d0(r),g=s.createProgram(),p,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ws).join(`
`),p.length>0&&(p+=`
`),M=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ws).join(`
`),M.length>0&&(M+=`
`)):(p=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),M=[u,Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?c0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,l0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=gl(a),a=Lh(a,t),a=Dh(a,t),o=gl(o),o=Lh(o,t),o=Dh(o,t),a=Uh(a),o=Uh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=_+p+a,U=_+M+o,I=Ph(s,s.VERTEX_SHADER,T),L=Ph(s,s.FRAGMENT_SHADER,U);s.attachShader(g,I),s.attachShader(g,L),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function W(k){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(g).trim(),P=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(L).trim(),$=!0,ae=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,I,L);else{let O=Ih(s,I,"vertex"),ie=Ih(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+O+`
`+ie)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||G==="")&&(ae=!1);ae&&(k.diagnostics={runnable:$,programLog:Q,vertexShader:{log:P,prefix:p},fragmentShader:{log:G,prefix:M}})}s.deleteShader(I),s.deleteShader(L),S=new $s(s,g),A=f0(s,g)}let S;this.getUniforms=function(){return S===void 0&&W(this),S};let A;this.getAttributes=function(){return A===void 0&&W(this),A};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,s0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=L,this}var T0=0,xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yl(e),t.set(e,n)),n}},yl=class{constructor(e){this.id=T0++,this.code=e,this.usedTimes=0}};function w0(i,e,t,n,s,r,a){let o=new wr,l=new xl,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function g(S,A,D,k,Q){let P=k.fog,G=Q.geometry,$=S.isMeshStandardMaterial?k.environment:null,ae=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),O=ae&&ae.mapping===Qa?ae.image.height:null,ie=y[S.type];S.precision!==null&&(u=s.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=Z!==void 0?Z.length:0,Ce=0;G.morphAttributes.position!==void 0&&(Ce=1),G.morphAttributes.normal!==void 0&&(Ce=2),G.morphAttributes.color!==void 0&&(Ce=3);let te,oe,De,qe;if(ie){let pn=Ei[ie];te=pn.vertexShader,oe=pn.fragmentShader}else te=S.vertexShader,oe=S.fragmentShader,l.update(S),De=l.getVertexShaderID(S),qe=l.getFragmentShaderID(S);let He=i.getRenderTarget(),ct=Q.isInstancedMesh===!0,ht=Q.isBatchedMesh===!0,Qe=!!S.map,wt=!!S.matcap,X=!!ae,cn=!!S.aoMap,Ze=!!S.lightMap,it=!!S.bumpMap,$e=!!S.normalMap,Zt=!!S.displacementMap,Mt=!!S.emissiveMap,C=!!S.metalnessMap,b=!!S.roughnessMap,K=S.anisotropy>0,Se=S.clearcoat>0,ye=S.iridescence>0,Ee=S.sheen>0,Ye=S.transmission>0,Ue=K&&!!S.anisotropyMap,Ve=Se&&!!S.clearcoatMap,tt=Se&&!!S.clearcoatNormalMap,yt=Se&&!!S.clearcoatRoughnessMap,ge=ye&&!!S.iridescenceMap,Ct=ye&&!!S.iridescenceThicknessMap,je=Ee&&!!S.sheenColorMap,Ge=Ee&&!!S.sheenRoughnessMap,ke=!!S.specularMap,Fe=!!S.specularColorMap,_t=!!S.specularIntensityMap,Ut=Ye&&!!S.transmissionMap,Xt=Ye&&!!S.thicknessMap,ft=!!S.gradientMap,Re=!!S.alphaMap,N=S.alphaTest>0,Pe=!!S.alphaHash,he=!!S.extensions,Ie=!!G.attributes.uv1,Oe=!!G.attributes.uv2,ut=!!G.attributes.uv3,Ot=Ji;return S.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(Ot=i.toneMapping),{isWebGL2:h,shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:oe,defines:S.defines,customVertexShaderID:De,customFragmentShaderID:qe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:ht,instancing:ct,instancingColor:ct&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Ui,map:Qe,matcap:wt,envMap:X,envMapMode:X&&ae.mapping,envMapCubeUVHeight:O,aoMap:cn,lightMap:Ze,bumpMap:it,normalMap:$e,displacementMap:d&&Zt,emissiveMap:Mt,normalMapObjectSpace:$e&&S.normalMapType===Gd,normalMapTangentSpace:$e&&S.normalMapType===cu,metalnessMap:C,roughnessMap:b,anisotropy:K,anisotropyMap:Ue,clearcoat:Se,clearcoatMap:Ve,clearcoatNormalMap:tt,clearcoatRoughnessMap:yt,iridescence:ye,iridescenceMap:ge,iridescenceThicknessMap:Ct,sheen:Ee,sheenColorMap:je,sheenRoughnessMap:Ge,specularMap:ke,specularColorMap:Fe,specularIntensityMap:_t,transmission:Ye,transmissionMap:Ut,thicknessMap:Xt,gradientMap:ft,opaque:S.transparent===!1&&S.blending===qs,alphaMap:Re,alphaTest:N,alphaHash:Pe,combine:S.combine,mapUv:Qe&&v(S.map.channel),aoMapUv:cn&&v(S.aoMap.channel),lightMapUv:Ze&&v(S.lightMap.channel),bumpMapUv:it&&v(S.bumpMap.channel),normalMapUv:$e&&v(S.normalMap.channel),displacementMapUv:Zt&&v(S.displacementMap.channel),emissiveMapUv:Mt&&v(S.emissiveMap.channel),metalnessMapUv:C&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:Ue&&v(S.anisotropyMap.channel),clearcoatMapUv:Ve&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:tt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:je&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&v(S.sheenRoughnessMap.channel),specularMapUv:ke&&v(S.specularMap.channel),specularColorMapUv:Fe&&v(S.specularColorMap.channel),specularIntensityMapUv:_t&&v(S.specularIntensityMap.channel),transmissionMapUv:Ut&&v(S.transmissionMap.channel),thicknessMapUv:Xt&&v(S.thicknessMap.channel),alphaMapUv:Re&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&($e||K),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Oe,vertexUv3s:ut,pointsUvs:Q.isPoints===!0&&!!G.attributes.uv&&(Qe||Re),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ce,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Qe&&S.map.isVideoTexture===!0&&Ht.getTransfer(S.map.colorSpace)===tn,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===Qn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)A.push(D),A.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(M(A,S),_(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function M(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function T(S){let A=y[S.type],D;if(A){let k=Ei[A];D=mf.clone(k.uniforms)}else D=S.uniforms;return D}function U(S,A){let D;for(let k=0,Q=c.length;k<Q;k++){let P=c[k];if(P.cacheKey===A){D=P,++D.usedTimes;break}}return D===void 0&&(D=new E0(i,A,S,r),c.push(D)),D}function I(S){if(--S.usedTimes===0){let A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function W(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:U,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:W}}function A0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function R0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,u,y,v,g){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:y,renderOrder:f.renderOrder,z:v,group:g},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=y,p.renderOrder=f.renderOrder,p.z=v,p.group=g),e++,p}function o(f,d,u,y,v,g){let p=a(f,d,u,y,v,g);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):t.push(p)}function l(f,d,u,y,v,g){let p=a(f,d,u,y,v,g);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||R0),n.length>1&&n.sort(d||Oh),s.length>1&&s.sort(d||Oh)}function h(){for(let f=e,d=i.length;f<d;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function C0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Fh,i.set(n,[a])):s>=r.length?(a=new Fh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function P0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new xt};break;case"SpotLight":t={position:new F,direction:new F,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function I0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var L0=0;function D0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function U0(i,e){let t=new P0,n=I0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new _n,o=new _n;function l(h,f){let d=0,u=0,y=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let v=0,g=0,p=0,M=0,_=0,T=0,U=0,I=0,L=0,W=0,S=0;h.sort(D0);let A=f===!0?Math.PI:1;for(let k=0,Q=h.length;k<Q;k++){let P=h[k],G=P.color,$=P.intensity,ae=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=G.r*$*A,u+=G.g*$*A,y+=G.b*$*A;else if(P.isLightProbe){for(let ie=0;ie<9;ie++)s.probe[ie].addScaledVector(P.sh.coefficients[ie],$);S++}else if(P.isDirectionalLight){let ie=t.get(P);if(ie.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){let Z=P.shadow,ue=n.get(P);ue.shadowBias=Z.bias,ue.shadowNormalBias=Z.normalBias,ue.shadowRadius=Z.radius,ue.shadowMapSize=Z.mapSize,s.directionalShadow[v]=ue,s.directionalShadowMap[v]=O,s.directionalShadowMatrix[v]=P.shadow.matrix,T++}s.directional[v]=ie,v++}else if(P.isSpotLight){let ie=t.get(P);ie.position.setFromMatrixPosition(P.matrixWorld),ie.color.copy(G).multiplyScalar($*A),ie.distance=ae,ie.coneCos=Math.cos(P.angle),ie.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ie.decay=P.decay,s.spot[p]=ie;let Z=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,Z.updateMatrices(P),P.castShadow&&W++),s.spotLightMatrix[p]=Z.matrix,P.castShadow){let ue=n.get(P);ue.shadowBias=Z.bias,ue.shadowNormalBias=Z.normalBias,ue.shadowRadius=Z.radius,ue.shadowMapSize=Z.mapSize,s.spotShadow[p]=ue,s.spotShadowMap[p]=O,I++}p++}else if(P.isRectAreaLight){let ie=t.get(P);ie.color.copy(G).multiplyScalar($),ie.halfWidth.set(P.width*.5,0,0),ie.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=ie,M++}else if(P.isPointLight){let ie=t.get(P);if(ie.color.copy(P.color).multiplyScalar(P.intensity*A),ie.distance=P.distance,ie.decay=P.decay,P.castShadow){let Z=P.shadow,ue=n.get(P);ue.shadowBias=Z.bias,ue.shadowNormalBias=Z.normalBias,ue.shadowRadius=Z.radius,ue.shadowMapSize=Z.mapSize,ue.shadowCameraNear=Z.camera.near,ue.shadowCameraFar=Z.camera.far,s.pointShadow[g]=ue,s.pointShadowMap[g]=O,s.pointShadowMatrix[g]=P.shadow.matrix,U++}s.point[g]=ie,g++}else if(P.isHemisphereLight){let ie=t.get(P);ie.skyColor.copy(P.color).multiplyScalar($*A),ie.groundColor.copy(P.groundColor).multiplyScalar($*A),s.hemi[_]=ie,_++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=u,s.ambient[2]=y;let D=s.hash;(D.directionalLength!==v||D.pointLength!==g||D.spotLength!==p||D.rectAreaLength!==M||D.hemiLength!==_||D.numDirectionalShadows!==T||D.numPointShadows!==U||D.numSpotShadows!==I||D.numSpotMaps!==L||D.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=M,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=I+L-W,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=S,D.directionalLength=v,D.pointLength=g,D.spotLength=p,D.rectAreaLength=M,D.hemiLength=_,D.numDirectionalShadows=T,D.numPointShadows=U,D.numSpotShadows=I,D.numSpotMaps=L,D.numLightProbes=S,s.version=L0++)}function c(h,f){let d=0,u=0,y=0,v=0,g=0,p=f.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let T=h[M];if(T.isDirectionalLight){let U=s.directional[d];U.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),d++}else if(T.isSpotLight){let U=s.spot[y];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(p),U.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),y++}else if(T.isRectAreaLight){let U=s.rectArea[v];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),U.halfWidth.set(T.width*.5,0,0),U.halfHeight.set(0,T.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let U=s.point[u];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){let U=s.hemi[g];U.direction.setFromMatrixPosition(T.matrixWorld),U.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:s}}function Bh(i,e){let t=new U0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function N0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Bh(i,e),t.set(r,[l])):a>=o.length?(l=new Bh(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var _l=class extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vl=class extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},O0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
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
}`;function B0(i,e,t){let n=new Ar,s=new ze,r=new ze,a=new Dn,o=new _l({depthPacking:Vd}),l=new vl,c={},h=t.maxTextureSize,f={[Qi]:Qn,[Qn]:Qi,[dn]:dn},d=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:O0,fragmentShader:F0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let y=new ti;y.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Je(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let p=this.type;this.render=function(I,L,W){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let S=i.getRenderTarget(),A=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ki),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let Q=p!==Li&&this.type===Li,P=p===Li&&this.type!==Li;for(let G=0,$=I.length;G<$;G++){let ae=I[G],O=ae.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let ie=O.getFrameExtents();if(s.multiply(ie),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,O.mapSize.y=r.y)),O.map===null||Q===!0||P===!0){let ue=this.type!==Li?{minFilter:Wn,magFilter:Wn}:{};O.map!==null&&O.map.dispose(),O.map=new Ni(s.x,s.y,ue),O.map.texture.name=ae.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let Z=O.getViewportCount();for(let ue=0;ue<Z;ue++){let Ce=O.getViewport(ue);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),k.viewport(a),O.updateMatrices(ae,ue),n=O.getFrustum(),T(L,W,O.camera,ae,this.type)}O.isPointLightShadow!==!0&&this.type===Li&&M(O,W),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,A,D)};function M(I,L){let W=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ni(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,W,d,v,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,W,u,v,null)}function _(I,L,W,S){let A=null,D=W.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)A=D;else if(A=W.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let k=A.uuid,Q=L.uuid,P=c[k];P===void 0&&(P={},c[k]=P);let G=P[Q];G===void 0&&(G=A.clone(),P[Q]=G,L.addEventListener("dispose",U)),A=G}if(A.visible=L.visible,A.wireframe=L.wireframe,S===Li?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:f[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,W.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let k=i.properties.get(A);k.light=W}return A}function T(I,L,W,S,A){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===Li)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld);let Q=e.update(I),P=I.material;if(Array.isArray(P)){let G=Q.groups;for(let $=0,ae=G.length;$<ae;$++){let O=G[$],ie=P[O.materialIndex];if(ie&&ie.visible){let Z=_(I,ie,S,A);I.onBeforeShadow(i,I,L,W,Q,Z,O),i.renderBufferDirect(W,null,Q,Z,I,O),I.onAfterShadow(i,I,L,W,Q,Z,O)}}}else if(P.visible){let G=_(I,P,S,A);I.onBeforeShadow(i,I,L,W,Q,G,null),i.renderBufferDirect(W,null,Q,G,I,null),I.onAfterShadow(i,I,L,W,Q,G,null)}}let k=I.children;for(let Q=0,P=k.length;Q<P;Q++)T(k[Q],L,W,S,A)}function U(I){I.target.removeEventListener("dispose",U);for(let W in c){let S=c[W],A=I.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function k0(i,e,t){let n=t.isWebGL2;function s(){let N=!1,Pe=new Dn,he=null,Ie=new Dn(0,0,0,0);return{setMask:function(Oe){he!==Oe&&!N&&(i.colorMask(Oe,Oe,Oe,Oe),he=Oe)},setLocked:function(Oe){N=Oe},setClear:function(Oe,ut,Ot,xn,pn){pn===!0&&(Oe*=xn,ut*=xn,Ot*=xn),Pe.set(Oe,ut,Ot,xn),Ie.equals(Pe)===!1&&(i.clearColor(Oe,ut,Ot,xn),Ie.copy(Pe))},reset:function(){N=!1,he=null,Ie.set(-1,0,0,0)}}}function r(){let N=!1,Pe=null,he=null,Ie=null;return{setTest:function(Oe){Oe?ht(i.DEPTH_TEST):Qe(i.DEPTH_TEST)},setMask:function(Oe){Pe!==Oe&&!N&&(i.depthMask(Oe),Pe=Oe)},setFunc:function(Oe){if(he!==Oe){switch(Oe){case xd:i.depthFunc(i.NEVER);break;case yd:i.depthFunc(i.ALWAYS);break;case _d:i.depthFunc(i.LESS);break;case Ma:i.depthFunc(i.LEQUAL);break;case vd:i.depthFunc(i.EQUAL);break;case Md:i.depthFunc(i.GEQUAL);break;case bd:i.depthFunc(i.GREATER);break;case Sd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Oe}},setLocked:function(Oe){N=Oe},setClear:function(Oe){Ie!==Oe&&(i.clearDepth(Oe),Ie=Oe)},reset:function(){N=!1,Pe=null,he=null,Ie=null}}}function a(){let N=!1,Pe=null,he=null,Ie=null,Oe=null,ut=null,Ot=null,xn=null,pn=null;return{setTest:function(At){N||(At?ht(i.STENCIL_TEST):Qe(i.STENCIL_TEST))},setMask:function(At){Pe!==At&&!N&&(i.stencilMask(At),Pe=At)},setFunc:function(At,zt,vn){(he!==At||Ie!==zt||Oe!==vn)&&(i.stencilFunc(At,zt,vn),he=At,Ie=zt,Oe=vn)},setOp:function(At,zt,vn){(ut!==At||Ot!==zt||xn!==vn)&&(i.stencilOp(At,zt,vn),ut=At,Ot=zt,xn=vn)},setLocked:function(At){N=At},setClear:function(At){pn!==At&&(i.clearStencil(At),pn=At)},reset:function(){N=!1,Pe=null,he=null,Ie=null,Oe=null,ut=null,Ot=null,xn=null,pn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,f=new WeakMap,d={},u={},y=new WeakMap,v=[],g=null,p=!1,M=null,_=null,T=null,U=null,I=null,L=null,W=null,S=new xt(0,0,0),A=0,D=!1,k=null,Q=null,P=null,G=null,$=null,ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,ie=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=ie>=1):Z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=ie>=2);let ue=null,Ce={},te=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),De=new Dn().fromArray(te),qe=new Dn().fromArray(oe);function He(N,Pe,he,Ie){let Oe=new Uint8Array(4),ut=i.createTexture();i.bindTexture(N,ut),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<he;Ot++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(Pe,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Pe+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return ut}let ct={};ct[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ct[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ht(i.DEPTH_TEST),l.setFunc(Ma),Mt(!1),C(xc),ht(i.CULL_FACE),$e(Ki);function ht(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function Qe(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function wt(N,Pe){return u[N]!==Pe?(i.bindFramebuffer(N,Pe),u[N]=Pe,n&&(N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Pe),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Pe)),!0):!1}function X(N,Pe){let he=v,Ie=!1;if(N)if(he=y.get(Pe),he===void 0&&(he=[],y.set(Pe,he)),N.isWebGLMultipleRenderTargets){let Oe=N.texture;if(he.length!==Oe.length||he[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ot=Oe.length;ut<Ot;ut++)he[ut]=i.COLOR_ATTACHMENT0+ut;he.length=Oe.length,Ie=!0}}else he[0]!==i.COLOR_ATTACHMENT0&&(he[0]=i.COLOR_ATTACHMENT0,Ie=!0);else he[0]!==i.BACK&&(he[0]=i.BACK,Ie=!0);Ie&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function cn(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let Ze={[ds]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};if(n)Ze[Mc]=i.MIN,Ze[bc]=i.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(Ze[Mc]=N.MIN_EXT,Ze[bc]=N.MAX_EXT)}let it={[sd]:i.ZERO,[rd]:i.ONE,[ad]:i.SRC_COLOR,[tl]:i.SRC_ALPHA,[dd]:i.SRC_ALPHA_SATURATE,[hd]:i.DST_COLOR,[ld]:i.DST_ALPHA,[od]:i.ONE_MINUS_SRC_COLOR,[nl]:i.ONE_MINUS_SRC_ALPHA,[ud]:i.ONE_MINUS_DST_COLOR,[cd]:i.ONE_MINUS_DST_ALPHA,[fd]:i.CONSTANT_COLOR,[pd]:i.ONE_MINUS_CONSTANT_COLOR,[md]:i.CONSTANT_ALPHA,[gd]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(N,Pe,he,Ie,Oe,ut,Ot,xn,pn,At){if(N===Ki){p===!0&&(Qe(i.BLEND),p=!1);return}if(p===!1&&(ht(i.BLEND),p=!0),N!==td){if(N!==M||At!==D){if((_!==ds||I!==ds)&&(i.blendEquation(i.FUNC_ADD),_=ds,I=ds),At)switch(N){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yc:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,U=null,L=null,W=null,S.set(0,0,0),A=0,M=N,D=At}return}Oe=Oe||Pe,ut=ut||he,Ot=Ot||Ie,(Pe!==_||Oe!==I)&&(i.blendEquationSeparate(Ze[Pe],Ze[Oe]),_=Pe,I=Oe),(he!==T||Ie!==U||ut!==L||Ot!==W)&&(i.blendFuncSeparate(it[he],it[Ie],it[ut],it[Ot]),T=he,U=Ie,L=ut,W=Ot),(xn.equals(S)===!1||pn!==A)&&(i.blendColor(xn.r,xn.g,xn.b,pn),S.copy(xn),A=pn),M=N,D=!1}function Zt(N,Pe){N.side===dn?Qe(i.CULL_FACE):ht(i.CULL_FACE);let he=N.side===Qn;Pe&&(he=!he),Mt(he),N.blending===qs&&N.transparent===!1?$e(Ki):$e(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);let Ie=N.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),K(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(N){k!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),k=N)}function C(N){N!==Qu?(ht(i.CULL_FACE),N!==Q&&(N===xc?i.cullFace(i.BACK):N===ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Qe(i.CULL_FACE),Q=N}function b(N){N!==P&&(O&&i.lineWidth(N),P=N)}function K(N,Pe,he){N?(ht(i.POLYGON_OFFSET_FILL),(G!==Pe||$!==he)&&(i.polygonOffset(Pe,he),G=Pe,$=he)):Qe(i.POLYGON_OFFSET_FILL)}function Se(N){N?ht(i.SCISSOR_TEST):Qe(i.SCISSOR_TEST)}function ye(N){N===void 0&&(N=i.TEXTURE0+ae-1),ue!==N&&(i.activeTexture(N),ue=N)}function Ee(N,Pe,he){he===void 0&&(ue===null?he=i.TEXTURE0+ae-1:he=ue);let Ie=Ce[he];Ie===void 0&&(Ie={type:void 0,texture:void 0},Ce[he]=Ie),(Ie.type!==N||Ie.texture!==Pe)&&(ue!==he&&(i.activeTexture(he),ue=he),i.bindTexture(N,Pe||ct[N]),Ie.type=N,Ie.texture=Pe)}function Ye(){let N=Ce[ue];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(N){De.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),De.copy(N))}function Ut(N){qe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),qe.copy(N))}function Xt(N,Pe){let he=f.get(Pe);he===void 0&&(he=new WeakMap,f.set(Pe,he));let Ie=he.get(N);Ie===void 0&&(Ie=i.getUniformBlockIndex(Pe,N.name),he.set(N,Ie))}function ft(N,Pe){let Ie=f.get(Pe).get(N);h.get(Pe)!==Ie&&(i.uniformBlockBinding(Pe,Ie,N.__bindingPointIndex),h.set(Pe,Ie))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ue=null,Ce={},u={},y=new WeakMap,v=[],g=null,p=!1,M=null,_=null,T=null,U=null,I=null,L=null,W=null,S=new xt(0,0,0),A=0,D=!1,k=null,Q=null,P=null,G=null,$=null,De.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ht,disable:Qe,bindFramebuffer:wt,drawBuffers:X,useProgram:cn,setBlending:$e,setMaterial:Zt,setFlipSided:Mt,setCullFace:C,setLineWidth:b,setPolygonOffset:K,setScissorTest:Se,activeTexture:ye,bindTexture:Ee,unbindTexture:Ye,compressedTexImage2D:Ue,compressedTexImage3D:Ve,texImage2D:ke,texImage3D:Fe,updateUBOMapping:Xt,uniformBlockBinding:ft,texStorage2D:je,texStorage3D:Ge,texSubImage2D:tt,texSubImage3D:yt,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ct,scissor:_t,viewport:Ut,reset:Re}}function H0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return u?new OffscreenCanvas(C,b):Ra("canvas")}function v(C,b,K,Se){let ye=1;if((C.width>Se||C.height>Se)&&(ye=Se/Math.max(C.width,C.height)),ye<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Ee=b?ll:Math.floor,Ye=Ee(ye*C.width),Ue=Ee(ye*C.height);f===void 0&&(f=y(Ye,Ue));let Ve=K?y(Ye,Ue):f;return Ve.width=Ye,Ve.height=Ue,Ve.getContext("2d").drawImage(C,0,0,Ye,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ye+"x"+Ue+")."),Ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return th(C.width)&&th(C.height)}function p(C){return o?!1:C.wrapS!==yi||C.wrapT!==yi||C.minFilter!==Wn&&C.minFilter!==li}function M(C,b){return C.generateMipmaps&&b&&C.minFilter!==Wn&&C.minFilter!==li}function _(C){i.generateMipmap(C)}function T(C,b,K,Se,ye=!1){if(o===!1)return b;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ee=b;if(b===i.RED&&(K===i.FLOAT&&(Ee=i.R32F),K===i.HALF_FLOAT&&(Ee=i.R16F),K===i.UNSIGNED_BYTE&&(Ee=i.R8)),b===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(Ee=i.R8UI),K===i.UNSIGNED_SHORT&&(Ee=i.R16UI),K===i.UNSIGNED_INT&&(Ee=i.R32UI),K===i.BYTE&&(Ee=i.R8I),K===i.SHORT&&(Ee=i.R16I),K===i.INT&&(Ee=i.R32I)),b===i.RG&&(K===i.FLOAT&&(Ee=i.RG32F),K===i.HALF_FLOAT&&(Ee=i.RG16F),K===i.UNSIGNED_BYTE&&(Ee=i.RG8)),b===i.RGBA){let Ye=ye?Ea:Ht.getTransfer(Se);K===i.FLOAT&&(Ee=i.RGBA32F),K===i.HALF_FLOAT&&(Ee=i.RGBA16F),K===i.UNSIGNED_BYTE&&(Ee=Ye===tn?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(Ee=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(Ee=i.RGB5_A1)}return(Ee===i.R16F||Ee===i.R32F||Ee===i.RG16F||Ee===i.RG32F||Ee===i.RGBA16F||Ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function U(C,b,K){return M(C,K)===!0||C.isFramebufferTexture&&C.minFilter!==Wn&&C.minFilter!==li?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function I(C){return C===Wn||C===Sc||C===_o?i.NEAREST:i.LINEAR}function L(C){let b=C.target;b.removeEventListener("dispose",L),S(b),b.isVideoTexture&&h.delete(b)}function W(C){let b=C.target;b.removeEventListener("dispose",W),D(b)}function S(C){let b=n.get(C);if(b.__webglInit===void 0)return;let K=C.source,Se=d.get(K);if(Se){let ye=Se[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&A(C),Object.keys(Se).length===0&&d.delete(K)}n.remove(C)}function A(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let K=C.source,Se=d.get(K);delete Se[b.__cacheKey],a.memory.textures--}function D(C){let b=C.texture,K=n.get(C),Se=n.get(b);if(Se.__webglTexture!==void 0&&(i.deleteTexture(Se.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(K.__webglFramebuffer[ye]))for(let Ee=0;Ee<K.__webglFramebuffer[ye].length;Ee++)i.deleteFramebuffer(K.__webglFramebuffer[ye][Ee]);else i.deleteFramebuffer(K.__webglFramebuffer[ye]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[ye])}else{if(Array.isArray(K.__webglFramebuffer))for(let ye=0;ye<K.__webglFramebuffer.length;ye++)i.deleteFramebuffer(K.__webglFramebuffer[ye]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ye=0;ye<K.__webglColorRenderbuffer.length;ye++)K.__webglColorRenderbuffer[ye]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[ye]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ye=0,Ee=b.length;ye<Ee;ye++){let Ye=n.get(b[ye]);Ye.__webglTexture&&(i.deleteTexture(Ye.__webglTexture),a.memory.textures--),n.remove(b[ye])}n.remove(b),n.remove(C)}let k=0;function Q(){k=0}function P(){let C=k;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function G(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function $(C,b){let K=n.get(C);if(C.isVideoTexture&&Zt(C),C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){let Se=C.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(K,C,b);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+b)}function ae(C,b){let K=n.get(C);if(C.version>0&&K.__version!==C.version){De(K,C,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+b)}function O(C,b){let K=n.get(C);if(C.version>0&&K.__version!==C.version){De(K,C,b);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+b)}function ie(C,b){let K=n.get(C);if(C.version>0&&K.__version!==C.version){qe(K,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+b)}let Z={[br]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[rl]:i.MIRRORED_REPEAT},ue={[Wn]:i.NEAREST,[Sc]:i.NEAREST_MIPMAP_NEAREST,[_o]:i.NEAREST_MIPMAP_LINEAR,[li]:i.LINEAR,[Ld]:i.LINEAR_MIPMAP_NEAREST,[Sr]:i.LINEAR_MIPMAP_LINEAR},Ce={[Wd]:i.NEVER,[Kd]:i.ALWAYS,[Xd]:i.LESS,[hu]:i.LEQUAL,[qd]:i.EQUAL,[Zd]:i.GEQUAL,[Yd]:i.GREATER,[$d]:i.NOTEQUAL};function te(C,b,K){if(K?(i.texParameteri(C,i.TEXTURE_WRAP_S,Z[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Z[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Z[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[b.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==yi||b.wrapT!==yi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,I(b.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==Wn&&b.minFilter!==li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Se=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Wn||b.minFilter!==_o&&b.minFilter!==Sr||b.type===Zi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(C,Se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function oe(C,b){let K=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",L));let Se=b.source,ye=d.get(Se);ye===void 0&&(ye={},d.set(Se,ye));let Ee=G(b);if(Ee!==C.__cacheKey){ye[Ee]===void 0&&(ye[Ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ye[Ee].usedTimes++;let Ye=ye[C.__cacheKey];Ye!==void 0&&(ye[C.__cacheKey].usedTimes--,Ye.usedTimes===0&&A(b)),C.__cacheKey=Ee,C.__webglTexture=ye[Ee].texture}return K}function De(C,b,K){let Se=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Se=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Se=i.TEXTURE_3D);let ye=oe(C,b),Ee=b.source;t.bindTexture(Se,C.__webglTexture,i.TEXTURE0+K);let Ye=n.get(Ee);if(Ee.version!==Ye.__version||ye===!0){t.activeTexture(i.TEXTURE0+K);let Ue=Ht.getPrimaries(Ht.workingColorSpace),Ve=b.colorSpace===ci?null:Ht.getPrimaries(b.colorSpace),tt=b.colorSpace===ci||Ue===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let yt=p(b)&&g(b.image)===!1,ge=v(b.image,yt,!1,s.maxTextureSize);ge=Mt(b,ge);let Ct=g(ge)||o,je=r.convert(b.format,b.colorSpace),Ge=r.convert(b.type),ke=T(b.internalFormat,je,Ge,b.colorSpace,b.isVideoTexture);te(Se,b,Ct);let Fe,_t=b.mipmaps,Ut=o&&b.isVideoTexture!==!0&&ke!==ou,Xt=Ye.__version===void 0||ye===!0,ft=U(b,ge,Ct);if(b.isDepthTexture)ke=i.DEPTH_COMPONENT,o?b.type===Zi?ke=i.DEPTH_COMPONENT32F:b.type===$i?ke=i.DEPTH_COMPONENT24:b.type===ps?ke=i.DEPTH24_STENCIL8:ke=i.DEPTH_COMPONENT16:b.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ms&&ke===i.DEPTH_COMPONENT&&b.type!==Zl&&b.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=$i,Ge=r.convert(b.type)),b.format===Js&&ke===i.DEPTH_COMPONENT&&(ke=i.DEPTH_STENCIL,b.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ps,Ge=r.convert(b.type))),Xt&&(Ut?t.texStorage2D(i.TEXTURE_2D,1,ke,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,ke,ge.width,ge.height,0,je,Ge,null));else if(b.isDataTexture)if(_t.length>0&&Ct){Ut&&Xt&&t.texStorage2D(i.TEXTURE_2D,ft,ke,_t[0].width,_t[0].height);for(let Re=0,N=_t.length;Re<N;Re++)Fe=_t[Re],Ut?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,Fe.width,Fe.height,je,Ge,Fe.data):t.texImage2D(i.TEXTURE_2D,Re,ke,Fe.width,Fe.height,0,je,Ge,Fe.data);b.generateMipmaps=!1}else Ut?(Xt&&t.texStorage2D(i.TEXTURE_2D,ft,ke,ge.width,ge.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,je,Ge,ge.data)):t.texImage2D(i.TEXTURE_2D,0,ke,ge.width,ge.height,0,je,Ge,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ut&&Xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ft,ke,_t[0].width,_t[0].height,ge.depth);for(let Re=0,N=_t.length;Re<N;Re++)Fe=_t[Re],b.format!==_i?je!==null?Ut?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,Fe.width,Fe.height,ge.depth,je,Fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Re,ke,Fe.width,Fe.height,ge.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,Fe.width,Fe.height,ge.depth,je,Ge,Fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Re,ke,Fe.width,Fe.height,ge.depth,0,je,Ge,Fe.data)}else{Ut&&Xt&&t.texStorage2D(i.TEXTURE_2D,ft,ke,_t[0].width,_t[0].height);for(let Re=0,N=_t.length;Re<N;Re++)Fe=_t[Re],b.format!==_i?je!==null?Ut?t.compressedTexSubImage2D(i.TEXTURE_2D,Re,0,0,Fe.width,Fe.height,je,Fe.data):t.compressedTexImage2D(i.TEXTURE_2D,Re,ke,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,Fe.width,Fe.height,je,Ge,Fe.data):t.texImage2D(i.TEXTURE_2D,Re,ke,Fe.width,Fe.height,0,je,Ge,Fe.data)}else if(b.isDataArrayTexture)Ut?(Xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ft,ke,ge.width,ge.height,ge.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,je,Ge,ge.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,ge.width,ge.height,ge.depth,0,je,Ge,ge.data);else if(b.isData3DTexture)Ut?(Xt&&t.texStorage3D(i.TEXTURE_3D,ft,ke,ge.width,ge.height,ge.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,je,Ge,ge.data)):t.texImage3D(i.TEXTURE_3D,0,ke,ge.width,ge.height,ge.depth,0,je,Ge,ge.data);else if(b.isFramebufferTexture){if(Xt)if(Ut)t.texStorage2D(i.TEXTURE_2D,ft,ke,ge.width,ge.height);else{let Re=ge.width,N=ge.height;for(let Pe=0;Pe<ft;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,ke,Re,N,0,je,Ge,null),Re>>=1,N>>=1}}else if(_t.length>0&&Ct){Ut&&Xt&&t.texStorage2D(i.TEXTURE_2D,ft,ke,_t[0].width,_t[0].height);for(let Re=0,N=_t.length;Re<N;Re++)Fe=_t[Re],Ut?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,je,Ge,Fe):t.texImage2D(i.TEXTURE_2D,Re,ke,je,Ge,Fe);b.generateMipmaps=!1}else Ut?(Xt&&t.texStorage2D(i.TEXTURE_2D,ft,ke,ge.width,ge.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,Ge,ge)):t.texImage2D(i.TEXTURE_2D,0,ke,je,Ge,ge);M(b,Ct)&&_(Se),Ye.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function qe(C,b,K){if(b.image.length!==6)return;let Se=oe(C,b),ye=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+K);let Ee=n.get(ye);if(ye.version!==Ee.__version||Se===!0){t.activeTexture(i.TEXTURE0+K);let Ye=Ht.getPrimaries(Ht.workingColorSpace),Ue=b.colorSpace===ci?null:Ht.getPrimaries(b.colorSpace),Ve=b.colorSpace===ci||Ye===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let tt=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let Re=0;Re<6;Re++)!tt&&!yt?ge[Re]=v(b.image[Re],!1,!0,s.maxCubemapSize):ge[Re]=yt?b.image[Re].image:b.image[Re],ge[Re]=Mt(b,ge[Re]);let Ct=ge[0],je=g(Ct)||o,Ge=r.convert(b.format,b.colorSpace),ke=r.convert(b.type),Fe=T(b.internalFormat,Ge,ke,b.colorSpace),_t=o&&b.isVideoTexture!==!0,Ut=Ee.__version===void 0||Se===!0,Xt=U(b,Ct,je);te(i.TEXTURE_CUBE_MAP,b,je);let ft;if(tt){_t&&Ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,Fe,Ct.width,Ct.height);for(let Re=0;Re<6;Re++){ft=ge[Re].mipmaps;for(let N=0;N<ft.length;N++){let Pe=ft[N];b.format!==_i?Ge!==null?_t?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,N,0,0,Pe.width,Pe.height,Ge,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,N,Fe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,N,0,0,Pe.width,Pe.height,Ge,ke,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,N,Fe,Pe.width,Pe.height,0,Ge,ke,Pe.data)}}}else{ft=b.mipmaps,_t&&Ut&&(ft.length>0&&Xt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,Fe,ge[0].width,ge[0].height));for(let Re=0;Re<6;Re++)if(yt){_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ge[Re].width,ge[Re].height,Ge,ke,ge[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Fe,ge[Re].width,ge[Re].height,0,Ge,ke,ge[Re].data);for(let N=0;N<ft.length;N++){let he=ft[N].image[Re].image;_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,N+1,0,0,he.width,he.height,Ge,ke,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,N+1,Fe,he.width,he.height,0,Ge,ke,he.data)}}else{_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Ge,ke,ge[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Fe,Ge,ke,ge[Re]);for(let N=0;N<ft.length;N++){let Pe=ft[N];_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,N+1,0,0,Ge,ke,Pe.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,N+1,Fe,Ge,ke,Pe.image[Re])}}}M(b,je)&&_(i.TEXTURE_CUBE_MAP),Ee.__version=ye.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function He(C,b,K,Se,ye,Ee){let Ye=r.convert(K.format,K.colorSpace),Ue=r.convert(K.type),Ve=T(K.internalFormat,Ye,Ue,K.colorSpace);if(!n.get(b).__hasExternalTextures){let yt=Math.max(1,b.width>>Ee),ge=Math.max(1,b.height>>Ee);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ee,Ve,yt,ge,b.depth,0,Ye,Ue,null):t.texImage2D(ye,Ee,Ve,yt,ge,0,Ye,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),$e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,ye,n.get(K).__webglTexture,0,it(b)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Se,ye,n.get(K).__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(C,b,K){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let Se=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||$e(b)){let ye=b.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Zi?Se=i.DEPTH_COMPONENT32F:ye.type===$i&&(Se=i.DEPTH_COMPONENT24));let Ee=it(b);$e(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Se,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Se,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,Se,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){let Se=it(b);K&&$e(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,i.DEPTH24_STENCIL8,b.width,b.height):$e(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let Se=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ye=0;ye<Se.length;ye++){let Ee=Se[ye],Ye=r.convert(Ee.format,Ee.colorSpace),Ue=r.convert(Ee.type),Ve=T(Ee.internalFormat,Ye,Ue,Ee.colorSpace),tt=it(b);K&&$e(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Ve,b.width,b.height):$e(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,Ve,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let Se=n.get(b.depthTexture).__webglTexture,ye=it(b);if(b.depthTexture.format===ms)$e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0);else if(b.depthTexture.format===Js)$e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function Qe(C){let b=n.get(C),K=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ht(b.__webglFramebuffer,C)}else if(K){b.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Se]),b.__webglDepthbuffer[Se]=i.createRenderbuffer(),ct(b.__webglDepthbuffer[Se],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),ct(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(C,b,K){let Se=n.get(C);b!==void 0&&He(Se.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Qe(C)}function X(C){let b=C.texture,K=n.get(C),Se=n.get(b);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture()),Se.__version=b.version,a.memory.textures++);let ye=C.isWebGLCubeRenderTarget===!0,Ee=C.isWebGLMultipleRenderTargets===!0,Ye=g(C)||o;if(ye){K.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(o&&b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Ue]=[];for(let Ve=0;Ve<b.mipmaps.length;Ve++)K.__webglFramebuffer[Ue][Ve]=i.createFramebuffer()}else K.__webglFramebuffer[Ue]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)K.__webglFramebuffer[Ue]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Ee)if(s.drawBuffers){let Ue=C.texture;for(let Ve=0,tt=Ue.length;Ve<tt;Ve++){let yt=n.get(Ue[Ve]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&$e(C)===!1){let Ue=Ee?b:[b];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ve=0;Ve<Ue.length;Ve++){let tt=Ue[Ve];K.__webglColorRenderbuffer[Ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Ve]);let yt=r.convert(tt.format,tt.colorSpace),ge=r.convert(tt.type),Ct=T(tt.internalFormat,yt,ge,tt.colorSpace,C.isXRRenderTarget===!0),je=it(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Ct,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,K.__webglColorRenderbuffer[Ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(K.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ye){t.bindTexture(i.TEXTURE_CUBE_MAP,Se.__webglTexture),te(i.TEXTURE_CUBE_MAP,b,Ye);for(let Ue=0;Ue<6;Ue++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)He(K.__webglFramebuffer[Ue][Ve],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ve);else He(K.__webglFramebuffer[Ue],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);M(b,Ye)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){let Ue=C.texture;for(let Ve=0,tt=Ue.length;Ve<tt;Ve++){let yt=Ue[Ve],ge=n.get(yt);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),te(i.TEXTURE_2D,yt,Ye),He(K.__webglFramebuffer,C,yt,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,0),M(yt,Ye)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ue=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Ue=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ue,Se.__webglTexture),te(Ue,b,Ye),o&&b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)He(K.__webglFramebuffer[Ve],C,b,i.COLOR_ATTACHMENT0,Ue,Ve);else He(K.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,Ue,0);M(b,Ye)&&_(Ue),t.unbindTexture()}C.depthBuffer&&Qe(C)}function cn(C){let b=g(C)||o,K=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Se=0,ye=K.length;Se<ye;Se++){let Ee=K[Se];if(M(Ee,b)){let Ye=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(Ee).__webglTexture;t.bindTexture(Ye,Ue),_(Ye),t.unbindTexture()}}}function Ze(C){if(o&&C.samples>0&&$e(C)===!1){let b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],K=C.width,Se=C.height,ye=i.COLOR_BUFFER_BIT,Ee=[],Ye=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(C),Ve=C.isWebGLMultipleRenderTargets===!0;if(Ve)for(let tt=0;tt<b.length;tt++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let tt=0;tt<b.length;tt++){Ee.push(i.COLOR_ATTACHMENT0+tt),C.depthBuffer&&Ee.push(Ye);let yt=Ue.__ignoreDepthValues!==void 0?Ue.__ignoreDepthValues:!1;if(yt===!1&&(C.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),Ve&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[tt]),yt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ye])),Ve){let ge=n.get(b[tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,K,Se,0,0,K,Se,ye,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ve)for(let tt=0;tt<b.length;tt++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[tt]);let yt=n.get(b[tt]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.TEXTURE_2D,yt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}}function it(C){return Math.min(s.maxSamples,C.samples)}function $e(C){let b=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Zt(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Mt(C,b){let K=C.colorSpace,Se=C.format,ye=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===al||K!==Ui&&K!==ci&&(Ht.getTransfer(K)===tn?o===!1?e.has("EXT_sRGB")===!0&&Se===_i?(C.format=al,C.minFilter=li,C.generateMipmaps=!1):b=Ca.sRGBToLinear(b):(Se!==_i||ye!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.setTexture2D=$,this.setTexture2DArray=ae,this.setTexture3D=O,this.setTextureCube=ie,this.rebindTextures=wt,this.setupRenderTarget=X,this.updateRenderTargetMipmap=cn,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=He,this.useMultisampledRTT=$e}function z0(i,e,t){let n=t.isWebGL2;function s(r,a=ci){let o,l=Ht.getTransfer(a);if(r===ji)return i.UNSIGNED_BYTE;if(r===nu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===iu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Dd)return i.BYTE;if(r===Ud)return i.SHORT;if(r===Zl)return i.UNSIGNED_SHORT;if(r===tu)return i.INT;if(r===$i)return i.UNSIGNED_INT;if(r===Zi)return i.FLOAT;if(r===Er)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Nd)return i.ALPHA;if(r===_i)return i.RGBA;if(r===Od)return i.LUMINANCE;if(r===Fd)return i.LUMINANCE_ALPHA;if(r===ms)return i.DEPTH_COMPONENT;if(r===Js)return i.DEPTH_STENCIL;if(r===al)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bd)return i.RED;if(r===su)return i.RED_INTEGER;if(r===kd)return i.RG;if(r===ru)return i.RG_INTEGER;if(r===au)return i.RGBA_INTEGER;if(r===vo||r===Mo||r===bo||r===So)if(l===tn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===vo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===vo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===So)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ec||r===Tc||r===wc||r===Ac)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ec)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ac)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ou)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rc||r===Cc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Rc)return l===tn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Cc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pc||r===Ic||r===Lc||r===Dc||r===Uc||r===Nc||r===Oc||r===Fc||r===Bc||r===kc||r===Hc||r===zc||r===Vc||r===Gc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Pc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ic)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gc)return l===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eo||r===Wc||r===Xc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Eo)return l===tn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hd||r===qc||r===Yc||r===$c)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Eo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===qc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$c)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ps?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ml=class extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hi=class extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}},V0={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,y=.005;c.inputState.pinching&&d>u+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(V0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bl=class extends es{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,y=null,v=t.getContextAttributes(),g=null,p=null,M=[],_=[],T=new ze,U=null,I=new Xn;I.layers.enable(1),I.viewport=new Dn;let L=new Xn;L.layers.enable(2),L.viewport=new Dn;let W=[I,L],S=new Ml;S.layers.enable(1),S.layers.enable(2);let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=M[te];return oe===void 0&&(oe=new yr,M[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=M[te];return oe===void 0&&(oe=new yr,M[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=M[te];return oe===void 0&&(oe=new yr,M[te]=oe),oe.getHandSpace()};function k(te){let oe=_.indexOf(te.inputSource);if(oe===-1)return;let De=M[oe];De!==void 0&&(De.update(te.inputSource,te.frame,c||a),De.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",P);for(let te=0;te<M.length;te++){let oe=_[te];oe!==null&&(_[te]=null,M[te].disconnect(oe))}A=null,D=null,e.setRenderTarget(g),u=null,d=null,f=null,s=null,p=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let oe={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new Ni(u.framebufferWidth,u.framebufferHeight,{format:_i,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let oe=null,De=null,qe=null;v.depth&&(qe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=v.stencil?Js:ms,De=v.stencil?ps:$i);let He={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Ni(d.textureWidth,d.textureHeight,{format:_i,type:ji,depthTexture:new ka(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let ct=e.properties.get(p);ct.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(te){for(let oe=0;oe<te.removed.length;oe++){let De=te.removed[oe],qe=_.indexOf(De);qe>=0&&(_[qe]=null,M[qe].disconnect(De))}for(let oe=0;oe<te.added.length;oe++){let De=te.added[oe],qe=_.indexOf(De);if(qe===-1){for(let ct=0;ct<M.length;ct++)if(ct>=_.length){_.push(De),qe=ct;break}else if(_[ct]===null){_[ct]=De,qe=ct;break}if(qe===-1)break}let He=M[qe];He&&He.connect(De)}}let G=new F,$=new F;function ae(te,oe,De){G.setFromMatrixPosition(oe.matrixWorld),$.setFromMatrixPosition(De.matrixWorld);let qe=G.distanceTo($),He=oe.projectionMatrix.elements,ct=De.projectionMatrix.elements,ht=He[14]/(He[10]-1),Qe=He[14]/(He[10]+1),wt=(He[9]+1)/He[5],X=(He[9]-1)/He[5],cn=(He[8]-1)/He[0],Ze=(ct[8]+1)/ct[0],it=ht*cn,$e=ht*Ze,Zt=qe/(-cn+Ze),Mt=Zt*-cn;oe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Mt),te.translateZ(Zt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let C=ht+Zt,b=Qe+Zt,K=it-Mt,Se=$e+(qe-Mt),ye=wt*Qe/b*C,Ee=X*Qe/b*C;te.projectionMatrix.makePerspective(K,Se,ye,Ee,C,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function O(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;S.near=L.near=I.near=te.near,S.far=L.far=I.far=te.far,(A!==S.near||D!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,D=S.far);let oe=te.parent,De=S.cameras;O(S,oe);for(let qe=0;qe<De.length;qe++)O(De[qe],oe);De.length===2?ae(S,I,L):S.projectionMatrix.copy(I.projectionMatrix),ie(te,S,oe)};function ie(te,oe,De){De===null?te.matrix.copy(oe.matrixWorld):(te.matrix.copy(De.matrixWorld),te.matrix.invert(),te.matrix.multiply(oe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ol*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)};let Z=null;function ue(te,oe){if(h=oe.getViewerPose(c||a),y=oe,h!==null){let De=h.views;u!==null&&(e.setRenderTargetFramebuffer(p,u.framebuffer),e.setRenderTarget(p));let qe=!1;De.length!==S.cameras.length&&(S.cameras.length=0,qe=!0);for(let He=0;He<De.length;He++){let ct=De[He],ht=null;if(u!==null)ht=u.getViewport(ct);else{let wt=f.getViewSubImage(d,ct);ht=wt.viewport,He===0&&(e.setRenderTargetTextures(p,wt.colorTexture,d.ignoreDepthValues?void 0:wt.depthStencilTexture),e.setRenderTarget(p))}let Qe=W[He];Qe===void 0&&(Qe=new Xn,Qe.layers.enable(He),Qe.viewport=new Dn,W[He]=Qe),Qe.matrix.fromArray(ct.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ct.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(ht.x,ht.y,ht.width,ht.height),He===0&&(S.matrix.copy(Qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),qe===!0&&S.cameras.push(Qe)}}for(let De=0;De<M.length;De++){let qe=_[De],He=M[De];qe!==null&&He!==void 0&&He.update(qe,oe,c||a)}Z&&Z(te,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),y=null}let Ce=new pu;Ce.setAnimationLoop(ue),this.setAnimationLoop=function(te){Z=te},this.dispose=function(){}}};function G0(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,fu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,_,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&u(g,p,T)):p.isMeshMatcapMaterial?(r(g,p),y(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let T=_.program;n.uniformBlockBinding(M,T)}function c(M,_){let T=s[M.id];T===void 0&&(y(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",g));let U=_.program;n.updateUBOMapping(M,U);let I=e.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function h(M){let _=f();M.__bindingPointIndex=_;let T=i.createBuffer(),U=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],T=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let I=0,L=T.length;I<L;I++){let W=Array.isArray(T[I])?T[I]:[T[I]];for(let S=0,A=W.length;S<A;S++){let D=W[S];if(u(D,I,S,U)===!0){let k=D.__offset,Q=Array.isArray(D.value)?D.value:[D.value],P=0;for(let G=0;G<Q.length;G++){let $=Q[G],ae=v($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,k+P,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,P),P+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,_,T,U){let I=M.value,L=_+"_"+T;if(U[L]===void 0)return typeof I=="number"||typeof I=="boolean"?U[L]=I:U[L]=I.clone(),!0;{let W=U[L];if(typeof I=="number"||typeof I=="boolean"){if(W!==I)return U[L]=I,!0}else if(W.equals(I)===!1)return W.copy(I),!0}return!1}function y(M){let _=M.uniforms,T=0,U=16;for(let L=0,W=_.length;L<W;L++){let S=Array.isArray(_[L])?_[L]:[_[L]];for(let A=0,D=S.length;A<D;A++){let k=S[A],Q=Array.isArray(k.value)?k.value:[k.value];for(let P=0,G=Q.length;P<G;P++){let $=Q[P],ae=v($),O=T%U;O!==0&&U-O<ae.boundary&&(T+=U-O),k.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=ae.storage}}}let I=T%U;return I>0&&(T+=U-I),M.__size=T,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let T=a.indexOf(_.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Rr=class{constructor(e={}){let{canvas:t=jd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let u=new Uint32Array(4),y=new Int32Array(4),v=null,g=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;let _=this,T=!1,U=0,I=0,L=null,W=-1,S=null,A=new Dn,D=new Dn,k=null,Q=new xt(0),P=0,G=t.width,$=t.height,ae=1,O=null,ie=null,Z=new Dn(0,0,G,$),ue=new Dn(0,0,G,$),Ce=!1,te=new Ar,oe=!1,De=!1,qe=null,He=new _n,ct=new ze,ht=new F,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return L===null?ae:1}let X=n;function cn(E,V){for(let J=0;J<E.length;J++){let ne=E[J],j=t.getContext(ne,V);if(j!==null)return j}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),X===null){let V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),X=cn(V,E),X===null)throw cn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ze,it,$e,Zt,Mt,C,b,K,Se,ye,Ee,Ye,Ue,Ve,tt,yt,ge,Ct,je,Ge,ke,Fe,_t,Ut;function Xt(){Ze=new cg(X),it=new ig(X,Ze,e),Ze.init(it),Fe=new z0(X,Ze,it),$e=new k0(X,Ze,it),Zt=new dg(X),Mt=new A0,C=new H0(X,Ze,$e,Mt,it,Fe,Zt),b=new rg(_),K=new lg(_),Se=new vf(X,it),_t=new tg(X,Ze,Se,it),ye=new hg(X,Se,Zt,_t),Ee=new gg(X,ye,Se,Zt),je=new mg(X,it,C),yt=new sg(Mt),Ye=new w0(_,b,K,Ze,it,_t,yt),Ue=new G0(_,Mt),Ve=new C0,tt=new N0(Ze,it),Ct=new eg(_,b,K,$e,Ee,d,l),ge=new B0(_,Ee,it),Ut=new W0(X,Zt,it,$e),Ge=new ng(X,Ze,Zt,it),ke=new ug(X,Ze,Zt,it),Zt.programs=Ye.programs,_.capabilities=it,_.extensions=Ze,_.properties=Mt,_.renderLists=Ve,_.shadowMap=ge,_.state=$e,_.info=Zt}Xt();let ft=new bl(_,X);this.xr=ft,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(G,$,!1))},this.getSize=function(E){return E.set(G,$)},this.setSize=function(E,V,J=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,$=V,t.width=Math.floor(E*ae),t.height=Math.floor(V*ae),J===!0&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(G*ae,$*ae).floor()},this.setDrawingBufferSize=function(E,V,J){G=E,$=V,ae=J,t.width=Math.floor(E*J),t.height=Math.floor(V*J),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,V,J,ne){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,V,J,ne),$e.viewport(A.copy(Z).multiplyScalar(ae).floor())},this.getScissor=function(E){return E.copy(ue)},this.setScissor=function(E,V,J,ne){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,V,J,ne),$e.scissor(D.copy(ue).multiplyScalar(ae).floor())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(E){$e.setScissorTest(Ce=E)},this.setOpaqueSort=function(E){O=E},this.setTransparentSort=function(E){ie=E},this.getClearColor=function(E){return E.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(E=!0,V=!0,J=!0){let ne=0;if(E){let j=!1;if(L!==null){let Be=L.texture.format;j=Be===au||Be===ru||Be===su}if(j){let Be=L.texture.type,Ke=Be===ji||Be===$i||Be===Zl||Be===ps||Be===nu||Be===iu,st=Ct.getClearColor(),dt=Ct.getClearAlpha(),nt=st.r,mt=st.g,pt=st.b;Ke?(u[0]=nt,u[1]=mt,u[2]=pt,u[3]=dt,X.clearBufferuiv(X.COLOR,0,u)):(y[0]=nt,y[1]=mt,y[2]=pt,y[3]=dt,X.clearBufferiv(X.COLOR,0,y))}else ne|=X.COLOR_BUFFER_BIT}V&&(ne|=X.DEPTH_BUFFER_BIT),J&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ve.dispose(),tt.dispose(),Mt.dispose(),b.dispose(),K.dispose(),Ee.dispose(),_t.dispose(),Ut.dispose(),Ye.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",pn),ft.removeEventListener("sessionend",At),qe&&(qe.dispose(),qe=null),zt.stop()};function Re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Zt.autoReset,V=ge.enabled,J=ge.autoUpdate,ne=ge.needsUpdate,j=ge.type;Xt(),Zt.autoReset=E,ge.enabled=V,ge.autoUpdate=J,ge.needsUpdate=ne,ge.type=j}function Pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function he(E){let V=E.target;V.removeEventListener("dispose",he),Ie(V)}function Ie(E){Oe(E),Mt.remove(E)}function Oe(E){let V=Mt.get(E).programs;V!==void 0&&(V.forEach(function(J){Ye.releaseProgram(J)}),E.isShaderMaterial&&Ye.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,J,ne,j,Be){V===null&&(V=Qe);let Ke=j.isMesh&&j.matrixWorld.determinant()<0,st=rs(E,V,J,ne,j);$e.setMaterial(ne,Ke);let dt=J.index,nt=1;if(ne.wireframe===!0){if(dt=ye.getWireframeAttribute(J),dt===void 0)return;nt=2}let mt=J.drawRange,pt=J.attributes.position,Lt=mt.start*nt,Nn=(mt.start+mt.count)*nt;Be!==null&&(Lt=Math.max(Lt,Be.start*nt),Nn=Math.min(Nn,(Be.start+Be.count)*nt)),dt!==null?(Lt=Math.max(Lt,0),Nn=Math.min(Nn,dt.count)):pt!=null&&(Lt=Math.max(Lt,0),Nn=Math.min(Nn,pt.count));let bn=Nn-Lt;if(bn<0||bn===1/0)return;_t.setup(j,ne,st,J,dt);let si,Yt=Ge;if(dt!==null&&(si=Se.get(dt),Yt=ke,Yt.setIndex(si)),j.isMesh)ne.wireframe===!0?($e.setLineWidth(ne.wireframeLinewidth*wt()),Yt.setMode(X.LINES)):Yt.setMode(X.TRIANGLES);else if(j.isLine){let Et=ne.linewidth;Et===void 0&&(Et=1),$e.setLineWidth(Et*wt()),j.isLineSegments?Yt.setMode(X.LINES):j.isLineLoop?Yt.setMode(X.LINE_LOOP):Yt.setMode(X.LINE_STRIP)}else j.isPoints?Yt.setMode(X.POINTS):j.isSprite&&Yt.setMode(X.TRIANGLES);if(j.isBatchedMesh)Yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Yt.renderInstances(Lt,bn,j.count);else if(J.isInstancedBufferGeometry){let Et=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Zn=Math.min(J.instanceCount,Et);Yt.renderInstances(Lt,bn,Zn)}else Yt.render(Lt,bn)};function ut(E,V,J){E.transparent===!0&&E.side===dn&&E.forceSinglePass===!1?(E.side=Qn,E.needsUpdate=!0,Un(E,V,J),E.side=Qi,E.needsUpdate=!0,Un(E,V,J),E.side=dn):Un(E,V,J)}this.compile=function(E,V,J=null){J===null&&(J=E),g=tt.get(J),g.init(),M.push(g),J.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),E!==J&&E.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights(_._useLegacyLights);let ne=new Set;return E.traverse(function(j){let Be=j.material;if(Be)if(Array.isArray(Be))for(let Ke=0;Ke<Be.length;Ke++){let st=Be[Ke];ut(st,J,j),ne.add(st)}else ut(Be,J,j),ne.add(Be)}),M.pop(),g=null,ne},this.compileAsync=function(E,V,J=null){let ne=this.compile(E,V,J);return new Promise(j=>{function Be(){if(ne.forEach(function(Ke){Mt.get(Ke).currentProgram.isReady()&&ne.delete(Ke)}),ne.size===0){j(E);return}setTimeout(Be,10)}Ze.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Ot=null;function xn(E){Ot&&Ot(E)}function pn(){zt.stop()}function At(){zt.start()}let zt=new pu;zt.setAnimationLoop(xn),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(E){Ot=E,ft.setAnimationLoop(E),E===null?zt.stop():zt.start()},ft.addEventListener("sessionstart",pn),ft.addEventListener("sessionend",At),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(V),V=ft.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,V,L),g=tt.get(E,M.length),g.init(),M.push(g),He.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(He),De=this.localClippingEnabled,oe=yt.init(this.clippingPlanes,De),v=Ve.get(E,p.length),v.init(),p.push(v),vn(E,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(O,ie),this.info.render.frame++,oe===!0&&yt.beginShadows();let J=g.state.shadowsArray;if(ge.render(J,E,V),oe===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ct.render(v,E),g.setupLights(_._useLegacyLights),V.isArrayCamera){let ne=V.cameras;for(let j=0,Be=ne.length;j<Be;j++){let Ke=ne[j];Mn(v,E,Ke,Ke.viewport)}}else Mn(v,E,V);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(_,E,V),_t.resetDefaultState(),W=-1,S=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function vn(E,V,J,ne){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){ne&&ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(He);let Ke=Ee.update(E),st=E.material;st.visible&&v.push(E,Ke,st,J,ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){let Ke=Ee.update(E),st=E.material;if(ne&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ht.copy(E.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),ht.copy(Ke.boundingSphere.center)),ht.applyMatrix4(E.matrixWorld).applyMatrix4(He)),Array.isArray(st)){let dt=Ke.groups;for(let nt=0,mt=dt.length;nt<mt;nt++){let pt=dt[nt],Lt=st[pt.materialIndex];Lt&&Lt.visible&&v.push(E,Ke,Lt,J,ht.z,pt)}}else st.visible&&v.push(E,Ke,st,J,ht.z,null)}}let Be=E.children;for(let Ke=0,st=Be.length;Ke<st;Ke++)vn(Be[Ke],V,J,ne)}function Mn(E,V,J,ne){let j=E.opaque,Be=E.transmissive,Ke=E.transparent;g.setupLightsView(J),oe===!0&&yt.setGlobalState(_.clippingPlanes,J),Be.length>0&&qt(j,Be,V,J),ne&&$e.viewport(A.copy(ne)),j.length>0&&mn(j,V,J),Be.length>0&&mn(Be,V,J),Ke.length>0&&mn(Ke,V,J),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function qt(E,V,J,ne){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Be=it.isWebGL2;qe===null&&(qe=new Ni(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")?Er:ji,minFilter:Sr,samples:Be?4:0})),_.getDrawingBufferSize(ct),Be?qe.setSize(ct.x,ct.y):qe.setSize(ll(ct.x),ll(ct.y));let Ke=_.getRenderTarget();_.setRenderTarget(qe),_.getClearColor(Q),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let st=_.toneMapping;_.toneMapping=Ji,mn(E,J,ne),C.updateMultisampleRenderTarget(qe),C.updateRenderTargetMipmap(qe);let dt=!1;for(let nt=0,mt=V.length;nt<mt;nt++){let pt=V[nt],Lt=pt.object,Nn=pt.geometry,bn=pt.material,si=pt.group;if(bn.side===dn&&Lt.layers.test(ne.layers)){let Yt=bn.side;bn.side=Qn,bn.needsUpdate=!0,fi(Lt,J,ne,Nn,bn,si),bn.side=Yt,bn.needsUpdate=!0,dt=!0}}dt===!0&&(C.updateMultisampleRenderTarget(qe),C.updateRenderTargetMipmap(qe)),_.setRenderTarget(Ke),_.setClearColor(Q,P),_.toneMapping=st}function mn(E,V,J){let ne=V.isScene===!0?V.overrideMaterial:null;for(let j=0,Be=E.length;j<Be;j++){let Ke=E[j],st=Ke.object,dt=Ke.geometry,nt=ne===null?Ke.material:ne,mt=Ke.group;st.layers.test(J.layers)&&fi(st,V,J,dt,nt,mt)}}function fi(E,V,J,ne,j,Be){E.onBeforeRender(_,V,J,ne,j,Be),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(_,V,J,ne,E,Be),j.transparent===!0&&j.side===dn&&j.forceSinglePass===!1?(j.side=Qn,j.needsUpdate=!0,_.renderBufferDirect(J,V,ne,j,E,Be),j.side=Qi,j.needsUpdate=!0,_.renderBufferDirect(J,V,ne,j,E,Be),j.side=dn):_.renderBufferDirect(J,V,ne,j,E,Be),E.onAfterRender(_,V,J,ne,j,Be)}function Un(E,V,J){V.isScene!==!0&&(V=Qe);let ne=Mt.get(E),j=g.state.lights,Be=g.state.shadowsArray,Ke=j.state.version,st=Ye.getParameters(E,j.state,Be,V,J),dt=Ye.getProgramCacheKey(st),nt=ne.programs;ne.environment=E.isMeshStandardMaterial?V.environment:null,ne.fog=V.fog,ne.envMap=(E.isMeshStandardMaterial?K:b).get(E.envMap||ne.environment),nt===void 0&&(E.addEventListener("dispose",he),nt=new Map,ne.programs=nt);let mt=nt.get(dt);if(mt!==void 0){if(ne.currentProgram===mt&&ne.lightsStateVersion===Ke)return $n(E,st),mt}else st.uniforms=Ye.getUniforms(E),E.onBuild(J,st,_),E.onBeforeCompile(st,_),mt=Ye.acquireProgram(st,dt),nt.set(dt,mt),ne.uniforms=st.uniforms;let pt=ne.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(pt.clippingPlanes=yt.uniform),$n(E,st),ne.needsLights=kr(E),ne.lightsStateVersion=Ke,ne.needsLights&&(pt.ambientLightColor.value=j.state.ambient,pt.lightProbe.value=j.state.probe,pt.directionalLights.value=j.state.directional,pt.directionalLightShadows.value=j.state.directionalShadow,pt.spotLights.value=j.state.spot,pt.spotLightShadows.value=j.state.spotShadow,pt.rectAreaLights.value=j.state.rectArea,pt.ltc_1.value=j.state.rectAreaLTC1,pt.ltc_2.value=j.state.rectAreaLTC2,pt.pointLights.value=j.state.point,pt.pointLightShadows.value=j.state.pointShadow,pt.hemisphereLights.value=j.state.hemi,pt.directionalShadowMap.value=j.state.directionalShadowMap,pt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,pt.spotShadowMap.value=j.state.spotShadowMap,pt.spotLightMatrix.value=j.state.spotLightMatrix,pt.spotLightMap.value=j.state.spotLightMap,pt.pointShadowMap.value=j.state.pointShadowMap,pt.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=mt,ne.uniformsList=null,mt}function zn(E){if(E.uniformsList===null){let V=E.currentProgram.getUniforms();E.uniformsList=$s.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function $n(E,V){let J=Mt.get(E);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function rs(E,V,J,ne,j){V.isScene!==!0&&(V=Qe),C.resetTextureUnits();let Be=V.fog,Ke=ne.isMeshStandardMaterial?V.environment:null,st=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ui,dt=(ne.isMeshStandardMaterial?K:b).get(ne.envMap||Ke),nt=ne.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,mt=!!J.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),pt=!!J.morphAttributes.position,Lt=!!J.morphAttributes.normal,Nn=!!J.morphAttributes.color,bn=Ji;ne.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(bn=_.toneMapping);let si=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Yt=si!==void 0?si.length:0,Et=Mt.get(ne),Zn=g.state.lights;if(oe===!0&&(De===!0||E!==S)){let Kn=E===S&&ne.id===W;yt.setState(ne,E,Kn)}let nn=!1;ne.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Zn.state.version||Et.outputColorSpace!==st||j.isBatchedMesh&&Et.batching===!1||!j.isBatchedMesh&&Et.batching===!0||j.isInstancedMesh&&Et.instancing===!1||!j.isInstancedMesh&&Et.instancing===!0||j.isSkinnedMesh&&Et.skinning===!1||!j.isSkinnedMesh&&Et.skinning===!0||j.isInstancedMesh&&Et.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Et.instancingColor===!1&&j.instanceColor!==null||Et.envMap!==dt||ne.fog===!0&&Et.fog!==Be||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==yt.numPlanes||Et.numIntersection!==yt.numIntersection)||Et.vertexAlphas!==nt||Et.vertexTangents!==mt||Et.morphTargets!==pt||Et.morphNormals!==Lt||Et.morphColors!==Nn||Et.toneMapping!==bn||it.isWebGL2===!0&&Et.morphTargetsCount!==Yt)&&(nn=!0):(nn=!0,Et.__version=ne.version);let wi=Et.currentProgram;nn===!0&&(wi=Un(ne,V,j));let Hr=!1,Bi=!1,Vn=!1,Sn=wi.getUniforms(),ri=Et.uniforms;if($e.useProgram(wi.program)&&(Hr=!0,Bi=!0,Vn=!0),ne.id!==W&&(W=ne.id,Bi=!0),Hr||S!==E){Sn.setValue(X,"projectionMatrix",E.projectionMatrix),Sn.setValue(X,"viewMatrix",E.matrixWorldInverse);let Kn=Sn.map.cameraPosition;Kn!==void 0&&Kn.setValue(X,ht.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&Sn.setValue(X,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Sn.setValue(X,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Bi=!0,Vn=!0)}if(j.isSkinnedMesh){Sn.setOptional(X,j,"bindMatrix"),Sn.setOptional(X,j,"bindMatrixInverse");let Kn=j.skeleton;Kn&&(it.floatVertexTextures?(Kn.boneTexture===null&&Kn.computeBoneTexture(),Sn.setValue(X,"boneTexture",Kn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Sn.setOptional(X,j,"batchingTexture"),Sn.setValue(X,"batchingTexture",j._matricesTexture,C));let Ss=J.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0&&it.isWebGL2===!0)&&je.update(j,J,wi),(Bi||Et.receiveShadow!==j.receiveShadow)&&(Et.receiveShadow=j.receiveShadow,Sn.setValue(X,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ri.envMap.value=dt,ri.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),Bi&&(Sn.setValue(X,"toneMappingExposure",_.toneMappingExposure),Et.needsLights&&bi(ri,Vn),Be&&ne.fog===!0&&Ue.refreshFogUniforms(ri,Be),Ue.refreshMaterialUniforms(ri,ne,ae,$,qe),$s.upload(X,zn(Et),ri,C)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&($s.upload(X,zn(Et),ri,C),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Sn.setValue(X,"center",j.center),Sn.setValue(X,"modelViewMatrix",j.modelViewMatrix),Sn.setValue(X,"normalMatrix",j.normalMatrix),Sn.setValue(X,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let Kn=ne.uniformsGroups;for(let as=0,zr=Kn.length;as<zr;as++)if(it.isWebGL2){let ar=Kn[as];Ut.update(ar,wi),Ut.bind(ar,wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wi}function bi(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function kr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,V,J){Mt.get(E.texture).__webglTexture=V,Mt.get(E.depthTexture).__webglTexture=J;let ne=Mt.get(E);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=J===void 0,ne.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,V){let J=Mt.get(E);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,J=0){L=E,U=V,I=J;let ne=!0,j=null,Be=!1,Ke=!1;if(E){let dt=Mt.get(E);dt.__useDefaultFramebuffer!==void 0?($e.bindFramebuffer(X.FRAMEBUFFER,null),ne=!1):dt.__webglFramebuffer===void 0?C.setupRenderTarget(E):dt.__hasExternalTextures&&C.rebindTextures(E,Mt.get(E.texture).__webglTexture,Mt.get(E.depthTexture).__webglTexture);let nt=E.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ke=!0);let mt=Mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(mt[V])?j=mt[V][J]:j=mt[V],Be=!0):it.isWebGL2&&E.samples>0&&C.useMultisampledRTT(E)===!1?j=Mt.get(E).__webglMultisampledFramebuffer:Array.isArray(mt)?j=mt[J]:j=mt,A.copy(E.viewport),D.copy(E.scissor),k=E.scissorTest}else A.copy(Z).multiplyScalar(ae).floor(),D.copy(ue).multiplyScalar(ae).floor(),k=Ce;if($e.bindFramebuffer(X.FRAMEBUFFER,j)&&it.drawBuffers&&ne&&$e.drawBuffers(E,j),$e.viewport(A),$e.scissor(D),$e.setScissorTest(k),Be){let dt=Mt.get(E.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,dt.__webglTexture,J)}else if(Ke){let dt=Mt.get(E.texture),nt=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,dt.__webglTexture,J||0,nt)}W=-1},this.readRenderTargetPixels=function(E,V,J,ne,j,Be,Ke){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ke!==void 0&&(st=st[Ke]),st){$e.bindFramebuffer(X.FRAMEBUFFER,st);try{let dt=E.texture,nt=dt.format,mt=dt.type;if(nt!==_i&&Fe.convert(nt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let pt=mt===Er&&(Ze.has("EXT_color_buffer_half_float")||it.isWebGL2&&Ze.has("EXT_color_buffer_float"));if(mt!==ji&&Fe.convert(mt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(mt===Zi&&(it.isWebGL2||Ze.has("OES_texture_float")||Ze.has("WEBGL_color_buffer_float")))&&!pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-ne&&J>=0&&J<=E.height-j&&X.readPixels(V,J,ne,j,Fe.convert(nt),Fe.convert(mt),Be)}finally{let dt=L!==null?Mt.get(L).__webglFramebuffer:null;$e.bindFramebuffer(X.FRAMEBUFFER,dt)}}},this.copyFramebufferToTexture=function(E,V,J=0){let ne=Math.pow(2,-J),j=Math.floor(V.image.width*ne),Be=Math.floor(V.image.height*ne);C.setTexture2D(V,0),X.copyTexSubImage2D(X.TEXTURE_2D,J,0,0,E.x,E.y,j,Be),$e.unbindTexture()},this.copyTextureToTexture=function(E,V,J,ne=0){let j=V.image.width,Be=V.image.height,Ke=Fe.convert(J.format),st=Fe.convert(J.type);C.setTexture2D(J,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ne,E.x,E.y,j,Be,Ke,st,V.image.data):V.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ne,E.x,E.y,V.mipmaps[0].width,V.mipmaps[0].height,Ke,V.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,ne,E.x,E.y,Ke,st,V.image),ne===0&&J.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(E,V,J,ne,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Be=E.max.x-E.min.x+1,Ke=E.max.y-E.min.y+1,st=E.max.z-E.min.z+1,dt=Fe.convert(ne.format),nt=Fe.convert(ne.type),mt;if(ne.isData3DTexture)C.setTexture3D(ne,0),mt=X.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)C.setTexture2DArray(ne,0),mt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ne.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ne.unpackAlignment);let pt=X.getParameter(X.UNPACK_ROW_LENGTH),Lt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Nn=X.getParameter(X.UNPACK_SKIP_PIXELS),bn=X.getParameter(X.UNPACK_SKIP_ROWS),si=X.getParameter(X.UNPACK_SKIP_IMAGES),Yt=J.isCompressedTexture?J.mipmaps[j]:J.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Yt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Yt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,E.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,E.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,E.min.z),J.isDataTexture||J.isData3DTexture?X.texSubImage3D(mt,j,V.x,V.y,V.z,Be,Ke,st,dt,nt,Yt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(mt,j,V.x,V.y,V.z,Be,Ke,st,dt,Yt.data)):X.texSubImage3D(mt,j,V.x,V.y,V.z,Be,Ke,st,dt,nt,Yt),X.pixelStorei(X.UNPACK_ROW_LENGTH,pt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Lt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Nn),X.pixelStorei(X.UNPACK_SKIP_ROWS,bn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,si),j===0&&ne.generateMipmaps&&X.generateMipmap(mt),$e.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),$e.unbindTexture()},this.resetState=function(){U=0,I=0,L=null,$e.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Kl?"display-p3":"srgb",t.unpackColorSpace=Ht.workingColorSpace===eo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===On?gs:lu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gs?On:Ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Sl=class extends Rr{};Sl.prototype.isWebGL1Renderer=!0;var Ha=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},za=class extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Cr=class extends ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},kh=new F,Hh=new F,zh=new _n,Ko=new Tr,ga=new js,El=class extends qn{constructor(e=new ti,t=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)kh.fromBufferAttribute(t,s-1),Hh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=kh.distanceTo(Hh);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;zh.copy(s).invert(),Ko.copy(e.ray).applyMatrix4(zh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,h=new F,f=new F,d=new F,u=this.isLineSegments?2:1,y=n.index,g=n.attributes.position;if(y!==null){let p=Math.max(0,a.start),M=Math.min(y.count,a.start+a.count);for(let _=p,T=M-1;_<T;_+=u){let U=y.getX(_),I=y.getX(_+1);if(c.fromBufferAttribute(g,U),h.fromBufferAttribute(g,I),Ko.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let W=e.ray.origin.distanceTo(d);W<e.near||W>e.far||t.push({distance:W,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let _=p,T=M-1;_<T;_+=u){if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),Ko.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Vh=new F,Gh=new F,Va=class extends El{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vh.fromBufferAttribute(t,s),Gh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vh.distanceTo(Gh);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ga=class extends ui{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ze:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new _n;for(let u=0;u<=e;u++){let y=u/e;s[u]=this.getTangentAt(y,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(Hn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,y))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Hn(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],u*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Pr=class extends di{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ze,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tl=class extends Pr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var xa=new F,Jo=new jl,jo=new jl,Qo=new jl,wl=class extends di{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(xa.subVectors(s[0],s[1]).add(s[0]),c=xa);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xa),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),Jo.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,y,v,g),jo.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,y,v,g),Qo.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,y,v,g)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),jo.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Qo.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Jo.calc(l),jo.calc(l),Qo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function X0(i,e){let t=1-i;return t*t*e}function q0(i,e){return 2*(1-i)*i*e}function Y0(i,e){return i*i*e}function _r(i,e,t,n){return X0(i,e)+q0(i,t)+Y0(i,n)}function $0(i,e){let t=1-i;return t*t*t*e}function Z0(i,e){let t=1-i;return 3*t*t*i*e}function K0(i,e){return 3*(1-i)*i*i*e}function J0(i,e){return i*i*i*e}function vr(i,e,t,n,s){return $0(i,e)+Z0(i,t)+K0(i,n)+J0(i,s)}var Wa=class extends di{constructor(e=new ze,t=new ze,n=new ze,s=new ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ze){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(e,s.x,r.x,a.x,o.x),vr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Al=class extends di{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(e,s.x,r.x,a.x,o.x),vr(e,s.y,r.y,a.y,o.y),vr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xa=class extends di{constructor(e=new ze,t=new ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends di{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends di{constructor(e=new ze,t=new ze,n=new ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ze){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cl=class extends di{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y),_r(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Wh(o,l.x,c.x,h.x,f.x),Wh(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ze().fromArray(s))}return this}},Xh=Object.freeze({__proto__:null,ArcCurve:Tl,CatmullRomCurve3:wl,CubicBezierCurve:Wa,CubicBezierCurve3:Al,EllipseCurve:Pr,LineCurve:Xa,LineCurve3:Rl,QuadraticBezierCurve:qa,QuadraticBezierCurve3:Cl,SplineCurve:Ya}),Pl=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xh[s.type]().fromJSON(s))}return this}},er=class extends Pl{constructor(e){super(),this.type="Path",this.currentPoint=new ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xa(this.currentPoint.clone(),new ze(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new qa(this.currentPoint.clone(),new ze(e,t),new ze(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Wa(this.currentPoint.clone(),new ze(e,t),new ze(n,s),new ze(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ya(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Pr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var is=class i extends ti{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],y=0,v=[],g=n/2,p=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ln(f,3)),this.setAttribute("normal",new ln(d,3)),this.setAttribute("uv",new ln(u,2));function M(){let T=new F,U=new F,I=0,L=(t-e)/n;for(let W=0;W<=r;W++){let S=[],A=W/r,D=A*(t-e)+e;for(let k=0;k<=s;k++){let Q=k/s,P=Q*l+o,G=Math.sin(P),$=Math.cos(P);U.x=D*G,U.y=-A*n+g,U.z=D*$,f.push(U.x,U.y,U.z),T.set(G,L,$).normalize(),d.push(T.x,T.y,T.z),u.push(Q,1-A),S.push(y++)}v.push(S)}for(let W=0;W<s;W++)for(let S=0;S<r;S++){let A=v[S][W],D=v[S+1][W],k=v[S+1][W+1],Q=v[S][W+1];h.push(A,D,Q),h.push(D,k,Q),I+=6}c.addGroup(p,I,0),p+=I}function _(T){let U=y,I=new ze,L=new F,W=0,S=T===!0?e:t,A=T===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,g*A,0),d.push(0,A,0),u.push(.5,.5),y++;let D=y;for(let k=0;k<=s;k++){let P=k/s*l+o,G=Math.cos(P),$=Math.sin(P);L.x=S*$,L.y=g*A,L.z=S*G,f.push(L.x,L.y,L.z),d.push(0,A,0),I.x=G*.5+.5,I.y=$*.5*A+.5,u.push(I.x,I.y),y++}for(let k=0;k<s;k++){let Q=U+k,P=D+k;T===!0?h.push(P,P+1,Q):h.push(P+1,P,Q),W+=3}c.addGroup(p,W,T===!0?1:2),p+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vi=class i extends is{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Il=class i extends ti{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ln(r,3)),this.setAttribute("normal",new ln(r.slice(),3)),this.setAttribute("uv",new ln(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new F,T=new F,U=new F;for(let I=0;I<t.length;I+=3)u(t[I+0],_),u(t[I+1],T),u(t[I+2],U),l(_,T,U,M)}function l(M,_,T,U){let I=U+1,L=[];for(let W=0;W<=I;W++){L[W]=[];let S=M.clone().lerp(T,W/I),A=_.clone().lerp(T,W/I),D=I-W;for(let k=0;k<=D;k++)k===0&&W===I?L[W][k]=S:L[W][k]=S.clone().lerp(A,k/D)}for(let W=0;W<I;W++)for(let S=0;S<2*(I-W)-1;S++){let A=Math.floor(S/2);S%2===0?(d(L[W][A+1]),d(L[W+1][A]),d(L[W][A])):(d(L[W][A+1]),d(L[W+1][A+1]),d(L[W+1][A]))}}function c(M){let _=new F;for(let T=0;T<r.length;T+=3)_.x=r[T+0],_.y=r[T+1],_.z=r[T+2],_.normalize().multiplyScalar(M),r[T+0]=_.x,r[T+1]=_.y,r[T+2]=_.z}function h(){let M=new F;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let T=g(M)/2/Math.PI+.5,U=p(M)/Math.PI+.5;a.push(T,1-U)}y(),f()}function f(){for(let M=0;M<a.length;M+=6){let _=a[M+0],T=a[M+2],U=a[M+4],I=Math.max(_,T,U),L=Math.min(_,T,U);I>.9&&L<.1&&(_<.2&&(a[M+0]+=1),T<.2&&(a[M+2]+=1),U<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function u(M,_){let T=M*3;_.x=e[T+0],_.y=e[T+1],_.z=e[T+2]}function y(){let M=new F,_=new F,T=new F,U=new F,I=new ze,L=new ze,W=new ze;for(let S=0,A=0;S<r.length;S+=9,A+=6){M.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),T.set(r[S+6],r[S+7],r[S+8]),I.set(a[A+0],a[A+1]),L.set(a[A+2],a[A+3]),W.set(a[A+4],a[A+5]),U.copy(M).add(_).add(T).divideScalar(3);let D=g(U);v(I,A+0,M,D),v(L,A+2,_,D),v(W,A+4,T,D)}}function v(M,_,T,U){U<0&&M.x===1&&(a[_]=M.x-1),T.x===0&&T.z===0&&(a[_]=U/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},$a=class i extends Il{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var tr=class extends er{constructor(e){super(e),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new er().fromJSON(s))}return this}},j0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=vu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,d,u;if(n&&(r=ix(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let y=t;y<s;y+=t)f=i[y],d=i[y+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return Ir(r,a,t,o,l,u,0),a}};function vu(i,e,t,n,s){let r,a;if(s===px(i,e,t,n)>0)for(r=e;r<t;r+=n)a=qh(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=qh(r,i[r],i[r+1],a);return a&&no(a,a.next)&&(Dr(a),a=a.next),a}function ys(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(no(t,t.next)||on(t.prev,t,t.next)===0)){if(Dr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ir(i,e,t,n,s,r,a){if(!i)return;!a&&r&&lx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?ex(i,n,s,r):Q0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Dr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=tx(ys(i),e,t),Ir(i,e,t,n,s,r,2)):a===2&&nx(i,e,t,n,s,r):Ir(ys(i),e,t,n,s,r,1);break}}}function Q0(i){let e=i.prev,t=i,n=i.next;if(on(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=d&&y.y>=f&&y.y<=u&&Xs(s,o,r,l,a,c,y.x,y.y)&&on(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function ex(i,e,t,n){let s=i.prev,r=i,a=i.next;if(on(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,u=o<l?o<c?o:c:l<c?l:c,y=h<f?h<d?h:d:f<d?f:d,v=o>l?o>c?o:c:l>c?l:c,g=h>f?h>d?h:d:f>d?f:d,p=Ll(u,y,e,t,n),M=Ll(v,g,e,t,n),_=i.prevZ,T=i.nextZ;for(;_&&_.z>=p&&T&&T.z<=M;){if(_.x>=u&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&Xs(o,h,l,f,c,d,_.x,_.y)&&on(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=u&&T.x<=v&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&Xs(o,h,l,f,c,d,T.x,T.y)&&on(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=p;){if(_.x>=u&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&Xs(o,h,l,f,c,d,_.x,_.y)&&on(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=M;){if(T.x>=u&&T.x<=v&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&Xs(o,h,l,f,c,d,T.x,T.y)&&on(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function tx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!no(s,r)&&Mu(s,n,n.next,r)&&Lr(s,r)&&Lr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Dr(n),Dr(n.next),n=i=r),n=n.next}while(n!==i);return ys(n)}function nx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ux(a,o)){let l=bu(a,o);a=ys(a,a.next),l=ys(l,l.next),Ir(a,e,t,n,s,r,0),Ir(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ix(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=vu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(hx(c));for(s.sort(sx),r=0;r<s.length;r++)t=rx(s[r],t);return t}function sx(i,e){return i.x-e.x}function rx(i,e){let t=ax(i,e);if(!t)return e;let n=bu(t,i);return ys(n,n.next),ys(t,t.next)}function ax(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Xs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),Lr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&ox(s,t)))&&(s=t,h=f)),t=t.next;while(t!==o);return s}function ox(i,e){return on(i.prev,i,e.prev)<0&&on(e.next,i,i.next)<0}function lx(i,e,t,n){let s=i;do s.z===0&&(s.z=Ll(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cx(s)}function cx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Ll(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function hx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ux(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!dx(i,e)&&(Lr(i,e)&&Lr(e,i)&&fx(i,e)&&(on(i.prev,i,e.prev)||on(i,e.prev,e))||no(i,e)&&on(i.prev,i,i.next)>0&&on(e.prev,e,e.next)>0)}function on(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function no(i,e){return i.x===e.x&&i.y===e.y}function Mu(i,e,t,n){let s=_a(on(i,e,t)),r=_a(on(i,e,n)),a=_a(on(t,n,i)),o=_a(on(t,n,e));return!!(s!==r&&a!==o||s===0&&ya(i,t,e)||r===0&&ya(i,n,e)||a===0&&ya(t,i,n)||o===0&&ya(t,e,n))}function ya(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _a(i){return i>0?1:i<0?-1:0}function dx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Lr(i,e){return on(i.prev,i,i.next)<0?on(i,e,i.next)>=0&&on(i,i.prev,e)>=0:on(i,e,i.prev)<0||on(i,i.next,e)<0}function fx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bu(i,e){let t=new Dl(i.i,i.x,i.y),n=new Dl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function qh(i,e,t,n){let s=new Dl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function px(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Mr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Yh(e),$h(n,e);let a=e.length;t.forEach(Yh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,$h(n,t[l]);let o=j0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Yh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $h(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ur=class i extends ti{constructor(e=new tr([new ze(0,.5),new ze(-.5,-.5),new ze(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ln(s,3)),this.setAttribute("normal",new ln(r,3)),this.setAttribute("uv",new ln(a,2));function c(h){let f=s.length/3,d=h.extractPoints(t),u=d.shape,y=d.holes;Mr.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,p=y.length;g<p;g++){let M=y[g];Mr.isClockWise(M)===!0&&(y[g]=M.reverse())}let v=Mr.triangulateShape(u,y);for(let g=0,p=y.length;g<p;g++){let M=y[g];u=u.concat(M)}for(let g=0,p=u.length;g<p;g++){let M=u[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,p=v.length;g<p;g++){let M=v[g],_=M[0]+f,T=M[1]+f,U=M[2]+f;n.push(_,T,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return mx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function mx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ti=class i extends ti{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new F,d=new F,u=[],y=[],v=[],g=[];for(let p=0;p<=n;p++){let M=[],_=p/n,T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let U=0;U<=t;U++){let I=U/t;f.x=-e*Math.cos(s+I*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+I*r)*Math.sin(a+_*o),y.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(I+T,1-_),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let _=h[p][M+1],T=h[p][M],U=h[p+1][M],I=h[p+1][M+1];(p!==0||a>0)&&u.push(_,T,I),(p!==n-1||l<Math.PI)&&u.push(T,U,I)}this.setIndex(u),this.setAttribute("position",new ln(y,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fn=class extends ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var nr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ul=class extends nr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kc:r=e,o=2*t-n;break;case Jc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:a=e,l=2*n-t;break;case Jc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,y=(n-t)/(s-t),v=y*y,g=v*y,p=-d*g+2*d*v-d*y,M=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*y+1,_=(-1-u)*g+(1.5+u)*v+.5*y,T=u*g-u*v;for(let U=0;U!==o;++U)r[U]=p*a[h+U]+M*a[c+U]+_*a[l+U]+T*a[f+U];return r}},Nl=class extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Ol=class extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ul(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case Sa:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return To}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&gx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===To,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,u=f+n;for(let y=0;y!==n;++y){let v=t[f+y];if(v!==t[d+y]||v!==t[u+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=Sa;var _s=class extends Mi{};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=ba;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends Mi{};Fl.prototype.ValueTypeName="color";var Bl=class extends Mi{};Bl.prototype.ValueTypeName="number";var kl=class extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ts.slerpFlat(r,0,a,c-o,a,c,l);return r}},Nr=class extends Mi{InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.DefaultInterpolation=Sa;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Mi{};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=ba;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Mi{};Hl.prototype.ValueTypeName="vector";var zl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],y=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return y}return null}}},xx=new zl,Vl=class{constructor(e){this.manager=e!==void 0?e:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Za=class extends qn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var el=new _n,Zh=new F,Kh=new F,Gl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(el)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Wl=class extends Gl{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ka=class extends Za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new Wl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ja=class extends Za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ql="\\[\\]\\.:\\/",yx=new RegExp("["+Ql+"]","g"),ec="[^"+Ql+"]",_x="[^"+Ql.replace("\\.","")+"]",vx=/((?:WC+[\/:])*)/.source.replace("WC",ec),Mx=/(WCOD+)?/.source.replace("WCOD",_x),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),Sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),Ex=new RegExp("^"+vx+Mx+bx+Sx+"$"),Tx=["material","materials","bones","map"],Xl=class{constructor(e,t,n){let s=n||rn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yx,"")}static parseTrackName(e){let t=Ex.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rn.Composite=Xl;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hx=new Float32Array(1);var ja=class{constructor(e,t,n=0,s=1/0){this.ray=new Tr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ql(e,this,n,t),n.sort(Jh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ql(e[s],this,n,t);return n.sort(Jh),n}};function Jh(i,e){return i.distance-e.distance}function ql(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)ql(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);var Ax=35,Rx=25,St=.95,Yn=.35,Or=7,Ms=200,io=300,Su=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),Cx=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],Px=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch","paladin","exorcist","bandit","ranger","blacksmith","alchemist"],so={tank:["knight","berserker","werewolf","ghoul"],melee:["assassin","ninja","samurai","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["hunter","ranger","alchemist"],caster:["mage","witch"]},Fr={tank:2,melee:2,support:1,ranged:1,caster:1};function Ix(i){let e=Math.max(1,i),t=Object.keys(Fr),n=t.reduce((l,c)=>l+(Fr[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(Fr[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(Fr[c]??0)-(Fr[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var et={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},ro=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist"];function Lx(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var kt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:20,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:4,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5}},ao={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331}},Br={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp"},Eu={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:8,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 3 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 3 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:3,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:7,target:"enemy",range:1,level:2,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 2 turns.",cost:6,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:7,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:6,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage to one enemy and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}]};function ce(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function oo(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,f=(u,y,v,g)=>{if(v)u.hp=Math.min(u.maxHp,u.hp+y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${y}`,!1,"heal");else{let p=u===s,M=!0;if(!p&&!g){let _=ce(u,"agi")*.7+ce(u,"luk")*.3;M=Math.random()*Math.max(.001,_)<=ce(s,"dex")}return M?(u.hp=Math.max(0,u.hp-y),u!==s&&(h=y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(y),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),M}},d=(u,y,v,g)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,y,v,!1,g?"buff":"debuff")};switch(i){case"brave":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let u=2;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,d(r.x,r.y,`-${u} STR`,!1),d(s.x,s.y,`+${u} STR`,!0)}break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(ce(s,"int")-(ce(r,"int")*.7+ce(r,"luk")*.2)));f(r,u,!1,!0)}break;case"manaDrain":if(r){let u=Math.max(1,Math.floor(ce(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-u),s.mp=(s.mp||0)+u,d(r.x,r.y,`-${u} MP`,!1),d(s.x,s.y,`+${u} MP`,!0)}break;case"mantra":if(r){let u=Math.max(1,Math.floor(ce(s,"int")*.3));if(s.tempBuff=s.tempBuff||{},s.tempBuff.int=u,s.tempBuff.duration=3,d(s.x,s.y,`+${u} LUK`,!0),!r)break;r.tempBuff=r.tempBuff||{},r.tempBuff.luk=u,r.tempBuff.duration=3,d(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(f(s,Math.max(1,Math.floor(ce(s,"int")*.3+ce(s,"luk")*.2)),!0),!r)break;f(r,Math.max(1,Math.floor(ce(s,"int")*.3+ce(r,"luk")*.2)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,d(r.x,r.y,`-${u} VIT`,!1),d(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)&&f(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=u,r.tempDebuff.duration=4,d(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.6));f(r,u,!1)}break;case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"dex")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,d(r.x,r.y,`-${u} AGI`,!1),d(s.x,s.y,`+${u} AGI`,!0)}break;case"execute":if(r){let u=Math.max(1,Math.floor(ce(s,"agi")*.8-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"berserk":r&&(f(r,Math.max(1,Math.floor(ce(s,"str")*.8-ce(r,"vit")*.3+ce(r,"luk")*.2)),!1),f(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=u,s.tempBuff.vit=u,s.tempBuff.duration=2,d(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,d(r.x,r.y,`-${u} INT`,!1),d(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(ce(s,"int")*.6-(ce(r,"int")*.4+ce(r,"luk")*.2)));f(r,u,!1,!0),f(s,u,!0)}break;case"blind":{if(!r)break;let u=1;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,d(r.x,r.y,`-${u} DEX`,!1),d(s.x,s.y,`+${u} DEX`,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"dex")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=4,d(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.4+ce(s,"dex")*.4-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.7+ce(s,"agi")*.1-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=4,d(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let u=Math.max(1,Math.floor(ce(s,"int")*.4));f(r,u,!0),f(s,3,!1)}break;case"judgement":{if(!r)break;let u=Math.max(1,Math.floor(s.maxHp-s.hp-(ce(r,"int")*.3+ce(r,"luk")*.2+ce(r,"vit")*.1)));f(r,u,!1,!0)}break;case"sanctuary":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.vit=1,s.tempBuff.dex=1,s.tempBuff.agi=1,s.tempBuff.int=1,s.tempBuff.luk=1,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=1,r.tempBuff.vit=1,r.tempBuff.dex=1,r.tempBuff.agi=1,r.tempBuff.int=1,r.tempBuff.luk=1,r.tempBuff.duration=3,d(s.x,s.y,"+1 ALL STATS",!0),d(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let u=Math.max(1,Math.floor(r.maxHp-r.hp-(ce(r,"int")*.4+ce(r,"luk")*.2)));f(r,u,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,d(r.x,r.y,"-2 LUK",!1),d(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"luk")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"windWalk":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=1,s.tempBuff.agi=3,s.tempBuff.duration=3,d(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"dex")*.6-(ce(r,"vit")*.3+ce(r,"luk")*.2)));if(f(r,u,!1)&&n.world&&n.units&&n.updateUnitPosition){let v=Math.max(1,Math.floor(u*.2)),g=Ox(n.world,n.units,s,r,v),p=r.x,M=r.y;r.x=g.newGx,r.y=g.newGy,g.collisionDamage>0?(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),f(r,g.collisionDamage,!1)):n.animateKnockback?n.animateKnockback(r,p,M,g.newGx,g.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r))}}break;case"forge":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=2,r.tempBuff.duration=3,d(s.x,s.y,"+2 STR",!0),d(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff=s.tempBuff||{},s.tempBuff.str=3,s.tempBuff.vit=3,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=3,r.tempBuff.vit=3,r.tempBuff.duration=3,d(s.x,s.y,"+3 STR, +3 VIT",!0),d(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let u=Math.max(1,Math.floor(ce(r,"luk")*.2));r.tempDebuff=r.tempDebuff||{},r.tempDebuff.poison=u,r.tempDebuff.duration=3,d(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"int")*.8-(ce(r,"int")*.4+ce(r,"luk")*.2)));f(r,u,!1,!0);let y=Math.max(1,Math.floor(u*.5));s.luk=Math.max(1,(s.luk||0)+y),d(s.x,s.y,`+${y} LUK`,!0)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function Dx(){let i=Ax,e=Rx,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill(et.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=e-1;for(let D=-1;D<=1;D++)for(let k=-2;k<=2;k++){let Q=r+k,P=o+D;Q>=0&&Q<i&&P>=0&&P<e&&(t[P][Q]=!0,s[P][Q]=et.BASE_TOP,n[P][Q]=1)}for(let D=-1;D<=1;D++)for(let k=-2;k<=2;k++){let Q=a+k,P=l+D;Q>=0&&Q<i&&P>=0&&P<e&&(t[P][Q]=!0,s[P][Q]=et.BASE_BOTTOM,n[P][Q]=1)}let c=Math.floor(i/2),h=Math.floor(e/2);for(let D=-1;D<=1;D++)for(let k=-2;k<=2;k++){let Q=c+k,P=h+D;Q>=0&&Q<i&&P>=0&&P<e&&(t[P][Q]=!0,s[P][Q]=et.CENTER,n[P][Q]=1)}let f=new Set,d=(D,k)=>Math.abs(D-c)<=2&&Math.abs(k-h)<=1,u=(D,k)=>{D<0||D>=i||k<0||k>=e||d(D,k)||f.add(k*i+D)},y=Math.floor(i/2),v=Math.floor(e/2),g=Math.min(i,e)*.29,p=Math.max(60,(e+i)*2);for(let D=0;D<2;D++){let k=D===0?y-g:y+g,Q=D===0?Math.PI/2:-Math.PI/2,P=D===0?Math.PI*3/2:Math.PI/2;for(let G=0;G<=p;G++){let $=G/p,ae=Q+$*(P-Q),O=k+g*Math.cos(ae),ie=v+g*Math.sin(ae),Z=Math.round(O),ue=Math.round(ie);u(Z,ue),u(Z+1,ue),u(Z-1,ue),u(Z,ue+1),u(Z,ue-1)}}let M=[[0,1],[0,-1],[1,0],[-1,0]];for(let D=0;D<1;D++){let k=[];f.forEach(Q=>{let P=Q%i,G=Q/i|0;for(let[$,ae]of M){let O=P+$,ie=G+ae;if(O<0||O>=i||ie<0||ie>=e)continue;let Z=ie*i+O;f.has(Z)||k.push(Z)}}),k.forEach(Q=>f.add(Q))}f.forEach(D=>{let k=D%i,Q=D/i|0;s[Q][k]===et.BASE_TOP||s[Q][k]===et.BASE_BOTTOM||s[Q][k]===et.CENTER||(t[Q][k]=!0,s[Q][k]=et.PATH,n[Q][k]=1)});let _=Math.round(y-g*1.6),T=Math.round(y+g*1.6),U=Math.round(y-g),I=Math.round(y+g),L=1;for(let D=h-L;D<=h+L;D++)if(!(D<0||D>=e))for(let k=_;k<=T;k++)k<0||k>=i||(t[D][k]=!0,s[D][k]!==et.CENTER&&s[D][k]!==et.BASE_TOP&&s[D][k]!==et.BASE_BOTTOM&&(s[D][k]=et.PATH),n[D][k]=Math.max(n[D][k],1));function W(D,k,Q,P){let G=Math.max(1,Math.min(D,k)),$=Math.min(e-2,Math.max(D,k)),ae=Math.max(1,Math.min(Q,P)),O=Math.min(i-2,Math.max(Q,P));for(let ie=G;ie<=$;ie++)for(let Z=ae;Z<=O;Z++)s[ie][Z]===et.BASE_TOP||s[ie][Z]===et.BASE_BOTTOM||s[ie][Z]===et.CENTER||(t[ie][Z]=!0,s[ie][Z]=et.PATH,n[ie][Z]=1)}let S=3,A=3;W(o,o+S-1,U,r-1),W(o,o+S-1,r+1,I),W(l-A+1,l,U,a-1),W(l-A+1,l,a+1,I);for(let D=-1;D<=2;D++)for(let k=-2;k<=2;k++){let Q=r+k,P=o+D;Q>=0&&Q<i&&P>=0&&P<e&&(t[P][Q]=!0,s[P][Q]=et.BASE_TOP,n[P][Q]=1)}for(let D=-2;D<=1;D++)for(let k=-2;k<=2;k++){let Q=a+k,P=l+D;Q>=0&&Q<i&&P>=0&&P<e&&(t[P][Q]=!0,s[P][Q]=et.BASE_BOTTOM,n[P][Q]=1)}for(let D=0;D<e;D++)for(let k=0;k<i;k++){if(t[D][k]||s[D][k]===et.BASE_TOP||s[D][k]===et.BASE_BOTTOM||s[D][k]===et.CENTER)continue;let Q=Math.abs(k-r)<=4&&Math.abs(D-o)<=3,P=Math.abs(k-a)<=4&&Math.abs(D-l)<=3,G=Q||P,$=Math.random();$<.55&&!G?(s[D][k]=et.TREE,n[D][k]=1+Math.floor(Math.random()*2)):$<.75||G&&$<.5?(s[D][k]=et.WATER,n[D][k]=0):(s[D][k]=et.ROCK,n[D][k]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function Ux(i,e,t){let n=e===1?et.BASE_BOTTOM:et.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function Nx(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===et.CENTER&&e.push({gx:n,gy:t});return e}function Tu(i,e){let t=Nx(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function rr(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===et.TREE||n===et.WATER||n===et.ROCK)}function Ox(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let f=0;for(let d=0;d<s;d++){let u=r+c,y=a+h,v=u<0||u>=i.w||y<0||y>=i.h,g=!rr(i,u,y),p=e.some(M=>M.hp>0&&M.id!==n.id&&M.x===u&&M.y===y);if(v||g||p){let M=Math.max(1,f*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:M}}r=u,a=y,f++}return{newGx:r,newGy:a,collisionDamage:0}}function Fx(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),f=r<o?1:-1,d=a<l?1:-1,u=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let y=2*u;y>-h&&(u-=h,r+=f),y<c&&(u+=c,a+=d)}return s}function bs(i,e,t,n,s){let r=Fx(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!rr(i,o.x,o.y))return!1}return!0}function lo(i,e,t,n,s,r){let a=(f,d)=>d*i.w+f,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null;for(;l.length;){let{x:f,y:d,d:u}=l.shift();if(!(u>=n))for(let[y,v]of c){let g=f+y,p=d+v;if(!rr(i,g,p))continue;if(h){let T=s.find(U=>U.hp>0&&U.x===g&&U.y===p);if(T&&T.player!==r.player)continue}let M=a(g,p);if(o.has(M))continue;let _=u+1;o.set(M,_),l.push({x:g,y:p,d:_})}}return o}function wu(i,e,t,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-e)+Math.abs(r-t);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function ss(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(d,u)=>u*i.w+d,l=new Map,c=[{x:e,y:t}];l.set(o(e,t),null);let h=[[0,1],[0,-1],[1,0],[-1,0]];function f(d,u){if(!rr(i,d,u))return!1;let y=r.find(v=>v.hp>0&&v.x===d&&v.y===u);return y?y.id===a.id||y.player===a.player:!0}for(;c.length;){let{x:d,y:u}=c.shift();if(d===n&&u===s){let y=[],v={x:n,y:s};for(;v;)y.unshift(v),v=l.get(o(v.x,v.y));return y}for(let[y,v]of h){let g=d+y,p=u+v,M=o(g,p);l.has(M)||f(g,p)&&(l.set(M,{x:d,y:u}),c.push({x:g,y:p}))}}return null}var Au={[et.PATH]:2976557,[et.GRASS]:2968109,[et.TREE]:1719578,[et.WATER]:1989278,[et.ROCK]:4872778,[et.BASE_TOP]:8014410,[et.BASE_BOTTOM]:4872826,[et.CENTER]:13940810};function Ru(i){return i.w*St/2}function Cu(i){return i.h*St/2}function Pu(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new Ga(e);return r.wrapS=r.wrapT=br,r.repeat.set(4,4),r.needsUpdate=!0,r}function Bx(i){let e=new hi,t=Ru(i),n=Cu(i),s=new wn(St,Yn,St),r=Pu(64),a=.88,o=.02,l=[];function c(d,u,y,v,g){let p=new Fn({color:3828266,roughness:.9});p.bumpMap=r,p.bumpScale=.12;for(let M=0;M<v;M++){let _=.08+Math.random()*g,T=.03+Math.random()*.03,U=new Je(new is(T*.5,T,_,6),p);U.position.set(d+(Math.random()-.5)*.5,y+_/2,u+(Math.random()-.5)*.5),U.rotation.x=(Math.random()-.5)*.2,U.rotation.z=(Math.random()-.5)*.2,U.castShadow=!0,e.add(U)}}let h=.12;function f(d,u,y,v){let g=y+.02,p=[[d-h,g,u-h],[d+h,g,u+h],[d-h,g,u+h],[d+h,g,u-h],[d-h+.06,g,u-h+.06],[d+h-.06,g,u+h-.06],[d-h+.06,g,u+h-.06],[d+h-.06,g,u-h+.06]],M=new Float32Array(p.length*3);p.forEach((I,L)=>{M[L*3]=I[0],M[L*3+1]=I[1],M[L*3+2]=I[2]});let _=new ti;_.setAttribute("position",new ei(M,3)),_.computeBoundingSphere();let T=new Cr({color:855309,linewidth:1}),U=new Va(_,T);v.add(U)}for(let d=0;d<i.h;d++)for(let u=0;u<i.w;u++){let y=i.type[d][u],v=i.height[d][u],g=Au[y],p=Yn+v*.35,M=p/2+Yn/2,_=new Fn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),T=(g>>16&255)/255,U=(g>>8&255)/255,I=(g&255)/255,L=T,W=U,S=I;if(y===et.PATH||y===et.TREE||y===et.ROCK){let ae=Math.random()*.45;L=T*(1-ae)+.42*ae,W=U*(1-ae)+.26*ae,S=I*(1-ae)+.14*ae}(y===et.TREE||y===et.ROCK)&&(L*=.5,W*=.5,S*=.5);let A=1+(Math.random()-.5)*.12;_.color.setRGB(Math.min(1,L*A),Math.min(1,W*A),Math.min(1,S*A)),_.bumpMap=r,_.bumpScale=.12;let D=new Je(s,_);D.position.set(u*St-t+St/2,p/2,d*St-n+St/2),D.castShadow=!0,D.receiveShadow=!0,D.userData={gx:u,gy:d,type:y},e.add(D);let k=u*St-t+St/2,Q=d*St-n+St/2;if(y===et.TREE&&f(k,Q,M,e),y===et.TREE){let P=new hi;P.position.set(k,M,Q);let G=u===0||u===i.w-1||d===0||d===i.h-1,$=G?.75+Math.random()*.35:.5+Math.random()*.2,ae=new xt(4007959),O=()=>1+(Math.random()-.5)*.4;ae.r=Math.min(1,Math.max(0,ae.r*O())),ae.g=Math.min(1,Math.max(0,ae.g*O())),ae.b=Math.min(1,Math.max(0,ae.b*O()));let ie=.85+Math.random()*.2,Z=new Fn({color:ae,roughness:ie});Z.bumpMap=r,Z.bumpScale=.1+Math.random()*.12;let ue=new Je(new is(.12,.14,$,8),Z);ue.position.set(0,$/2,0),ue.castShadow=!0,ue.raycast=function(){},P.add(ue);let Ce=r.clone();Ce.repeat.set(3,3);let te=new xt(2972205),oe=()=>1+(Math.random()-.5)*.44;te.r=Math.min(1,Math.max(0,te.r*oe())),te.g=Math.min(1,Math.max(0,te.g*oe())),te.b=Math.min(1,Math.max(0,te.b*oe()));let De=.78+Math.random()*.24,qe=new Fn({color:te,roughness:De});qe.bumpMap=Ce,qe.bumpScale=.16+Math.random()*.14;let He=G?.52:.45,ct=G?1.05:.9,ht=.12,Qe=ct*.5,wt=ct*.45,X=ct*.4,cn=new Je(new vi(He,Qe,8),qe);cn.position.set(0,$+Qe/2,0),cn.castShadow=!0,cn.raycast=function(){},P.add(cn);let Ze=new Je(new vi(He*.75,wt,8),qe);Ze.position.set(0,$+Qe-ht+wt/2,0),Ze.castShadow=!0,Ze.raycast=function(){},P.add(Ze);let it=new Je(new vi(He*.5,X,8),qe);it.position.set(0,$+Qe-ht+wt-ht+X/2,0),it.castShadow=!0,it.raycast=function(){},P.add(it),e.add(P),l.push(P)}else if(y===et.WATER){let P=Au[et.WATER],G=(P>>16&255)/255,$=(P>>8&255)/255,ae=(P&255)/255,O=1+(Math.random()-.5)*.12,ie=new Fn({color:new xt().setRGB(Math.min(1,G*O),Math.min(1,$*O),Math.min(1,ae*O)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),Z=new Je(new Fi(St,St),ie);Z.rotation.x=-Math.PI/2,Z.position.set(k,M+.02,Q),Z.receiveShadow=!0,e.add(Z)}else if(y===et.ROCK){let P=new Fn({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let G=(ie,Z,ue)=>{let Ce=new Je(new $a(ie,0),P);Ce.position.set(k+Z,M+ie-.2,Q+ue),Ce.rotation.set(Math.random(),Math.random(),Math.random()),Ce.castShadow=!0,e.add(Ce)},$=.32+Math.random()*.14,ae=.2+Math.random()*.12,O=.12+Math.random()*.12;G($,(Math.random()-.5)*.15,(Math.random()-.5)*.15),G(ae,(Math.random()-.5)*.25,(Math.random()-.5)*.25),G(O,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function kx(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=Dx(),t=document.getElementById("canvas-wrap"),n=new za;n.background=new xt(1711652),n.fog=new Ha(1711652,30,90);let s=e.w*St/2,r=e.h*St/2,a=new Xn(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,c=new F(12,38,16).normalize().multiplyScalar(o),h=new F,f=new F,d=new xi(new F(0,1,0),0),u=new F,y=new F,v=!1,g=!1,p=!0,M=!1,_=null,T=5,U=.004,I=-Math.PI*.4,L=Math.PI*.4,W=new F,S={x:0,y:0},A=1,D=40,k=.005,Q=.15,P=null,G=new Ja(16777215,.45);n.add(G);let $=new Ka(16774630,1.1);$.position.set(30,50,20),$.castShadow=!0,$.shadow.mapSize.width=2048,$.shadow.mapSize.height=2048,$.shadow.camera.near=1,$.shadow.camera.far=120,$.shadow.camera.left=-50,$.shadow.camera.right=50,$.shadow.camera.top=50,$.shadow.camera.bottom=-50,n.add($);let ae=Bx(e);n.add(ae);let O=[],ie=1,Z=new Map,ue=Pu(64),Ce=Ru(e),te=Cu(e);function oe(x,m){let w=(Yn+e.height[m][x]*.35)/2+Yn/2;return new F(x*St-Ce+St/2,w,m*St-te+St/2)}function De(x,m){let R=(x>>16&255)/255,w=(x>>8&255)/255,B=(x&255)/255,H=1+(Math.random()-.5)*m;return new xt(Math.min(1,R*H),Math.min(1,w*H),Math.min(1,B*H))}let qe=.62;function He(x,m){m=m??qe;let R=x instanceof xt?x:new xt(x);return new xt(Math.max(0,R.r*m),Math.max(0,R.g*m),Math.max(0,R.b*m))}function ct(x,m,R){let w=ao[m]||ao.knight,B=He(De(w.primary,.08)),H=He(De(w.secondary,.08)),q=kt[m]&&kt[m].gender||"male",z=R??4006676,Y=He(De(w.skin!=null?w.skin:15250592,.06)),re=He(De(z,.08)),de=()=>(Math.random()-.5)*.08,Te=()=>(Math.random()-.5)*.04,ee=new Fn({color:B,metalness:Math.max(0,.25+Te()),roughness:Math.max(.3,Math.min(1,.5+de()))});ee.bumpMap=ue,ee.bumpScale=.1;let se=new Fn({color:H,metalness:Math.max(0,.2+Te()),roughness:Math.max(.3,Math.min(1,.55+de()))});se.bumpMap=ue,se.bumpScale=.1;let ve=new Fn({color:B,metalness:Math.max(0,.25+Te()),roughness:Math.max(.3,Math.min(1,.5+de()))});ve.bumpMap=ue,ve.bumpScale=.1;let rt=new Fn({color:Y,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+de()))});rt.bumpMap=ue,rt.bumpScale=.05;let Xe=new hi,lt=.28,Dt=.08,Nt=.08,Jt=new Je(new wn(Dt,lt,Nt),se);Jt.position.set(-.06,lt/2,0),Jt.castShadow=!0,Xe.add(Jt);let un=new Je(new wn(Dt,lt,Nt),se);un.position.set(.06,lt/2,0),un.castShadow=!0,Xe.add(un);let Bt=.28,Pt=.2,gt=.12,Gt=new Je(new wn(Pt,Bt,gt),ee);Gt.position.set(0,lt+Bt/2,0),Gt.castShadow=!0,Xe.add(Gt);let vt=.06,jt=.22,Qt=.06,Tn=new Je(new wn(vt,jt,Qt),ve);Tn.position.set(-(Pt/2+vt/2),lt+Bt-.08,0),Tn.castShadow=!0,Xe.add(Tn);let Pn=new Je(new wn(vt,jt,Qt),ve);if(Pn.position.set(Pt/2+vt/2,lt+Bt-.08,0),Pn.castShadow=!0,Xe.add(Pn),w.cape!=null){let Ae=Pt*1.95,be=Ae*.6,Ne=lt+Bt*.28,It=new tr;It.moveTo(-be/2,Ne/2),It.lineTo(be/2,Ne/2),It.lineTo(Ae/2,-Ne/2),It.lineTo(-Ae/2,-Ne/2),It.closePath();let $t=new Ur(It),We=new Fn({color:He(De(w.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+de())),side:dn});We.bumpMap=ue,We.bumpScale=.12;let ot=new Je($t,We);ot.position.set(0,lt+Bt-Ne/2+.05,-gt/2-.02),ot.rotation.y=Math.PI,ot.castShadow=!0,Xe.add(ot);let bt=.055,an=lt+Bt+.02,en=.02,sn=Pt/2+vt*.5,Wt=new Je(new Ti(bt,10,8,0,Math.PI*2,0,Math.PI*.55),We.clone());Wt.position.set(-sn,an,en),Wt.rotation.x=-Math.PI*.35,Wt.rotation.z=Math.PI*.5,Wt.scale.set(1.2,.85,1.1),Wt.castShadow=!0,Xe.add(Wt);let In=new Je(new Ti(bt,10,8,0,Math.PI*2,0,Math.PI*.55),We.clone());In.position.set(sn,an,en),In.rotation.x=-Math.PI*.35,In.rotation.z=-Math.PI*.5,In.scale.set(1.2,.85,1.1),In.castShadow=!0,Xe.add(In)}if(w.belt!=null){let Ae=new Fn({color:He(De(w.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+de()))});Ae.bumpMap=ue,Ae.bumpScale=.1;let be=.022,Ne=.04,It=new Je(new wn(Pt+.04,be,gt+Ne),Ae);It.position.set(0,lt+.04,0),It.castShadow=!0,Xe.add(It)}if(w.apron!=null){let Ae=new Fn({color:He(De(w.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+de())),side:dn});Ae.bumpMap=ue,Ae.bumpScale=.12;let be=Pt*.95,Ne=lt*.85,It=new Je(new Fi(be,Ne),Ae),$t=lt+.2;It.position.set(0,$t-Ne/2,gt/2+.02),It.castShadow=!0,Xe.add(It);let We=lt+Bt+.02,ot=Pt/2+vt*.2,bt=.018,an=.008,en=We-$t,sn=new Je(new wn(bt,en,an),Ae.clone());sn.position.set(-ot,($t+We)/2,gt/2+.015),sn.castShadow=!0,Xe.add(sn);let Wt=new Je(new wn(bt,en,an),Ae.clone());Wt.position.set(ot,($t+We)/2,gt/2+.015),Wt.castShadow=!0,Xe.add(Wt)}let le=.1,me=new Je(new Ti(le,12,10),rt);me.position.set(0,lt+Bt+le,0),me.castShadow=!0,Xe.add(me);let Me=new fn({color:1710638}),pe=new Je(new wn(.032,.004,.004),Me);pe.position.set(-.032,.028,le*.92),me.add(pe);let fe=new Je(new wn(.032,.004,.004),Me);fe.position.set(.032,.028,le*.92),me.add(fe);let xe=new fn({color:2957087}),we=new Je(new wn(.045,.012,.008),xe);we.position.set(0,-.028,le*.92),me.add(we);let _e=new Fn({color:re,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+de()))});_e.bumpMap=ue,_e.bumpScale=.15;let at=Ae=>{let be=le*.32,Ne=le*.22,It=new Je(new vi(Ne*.9,be,5),_e);It.position.set(-le*.25,le*.22,le*.72),It.rotation.x=.35,It.rotation.z=.12,It.castShadow=!0,Ae.add(It);let $t=new Je(new vi(Ne,be,5),_e);$t.position.set(le*.28,le*.18,le*.68),$t.rotation.x=.28,$t.rotation.z=-.1,$t.castShadow=!0,Ae.add($t);let We=new Je(new vi(Ne*.7,be*.9,5),_e);We.position.set(0,le*.28,le*.78),We.rotation.x=.4,We.castShadow=!0,Ae.add(We)};if(q==="female"){let Ae=new Je(new Ti(le*.92,12,10,0,Math.PI*2,0,Math.PI*.52),_e);Ae.position.set(0,le*.28,-le*.18),Ae.rotation.y=.06,Ae.rotation.x=-.04,Ae.castShadow=!0,me.add(Ae);let be=new Je(new wn(le*1.15,le*2.2,le*.55),_e);be.position.set(0,-le*.6,-le*.95),be.rotation.z=.03,be.castShadow=!0,me.add(be),at(me)}else{let Ae=new Je(new Ti(le*.9,12,10,0,Math.PI*2,0,Math.PI*.5),_e);Ae.position.set(0,le*.4,-le*.12),Ae.rotation.y=.08,Ae.rotation.x=-.05,Ae.rotation.z=.04,Ae.castShadow=!0,me.add(Ae);let be=new Je(new Ti(le*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),_e);be.position.set(0,le*.1,-le*.05),be.rotation.y=.1,be.castShadow=!0,me.add(be),at(me)}return Xe.userData.leftLeg=Jt,Xe.userData.rightLeg=un,Xe.userData.leftArm=Tn,Xe.userData.rightArm=Pn,Xe}function ht(x,m){let R=x.userData;if(!R.leftLeg)return;let w=m*Math.PI*2,B=.35,H=.28;R.leftLeg.rotation.x=Math.sin(w)*B,R.rightLeg.rotation.x=Math.sin(w+Math.PI)*B,R.leftArm.rotation.y=Math.sin(w+Math.PI)*H,R.rightArm.rotation.y=Math.sin(w)*H}function Qe(x){let m=x.userData;m.leftLeg&&(m.leftLeg.rotation.x=0,m.rightLeg.rotation.x=0,m.leftArm.rotation.y=0,m.rightArm.rotation.y=0)}function wt(x){let m=ct(x.player,x.class,x.hairColor);m.position.copy(oe(x.x,x.y)),m.castShadow=!0,m.userData.unitId=x.id;let R=.28,w=.28,B=.12,H=.18,q=.04,z=new Fi(H,q),Y=new fn({color:6037528,side:dn,depthTest:!0,depthWrite:!1}),re=new Je(z,Y);re.position.set(0,R+w/2,B/2+.02),re.rotation.x=-Math.PI/2,re.rotation.z=Math.PI/4,re.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0,m.add(re),m.userData.slashMark=re,n.add(m),Z.set(x.id,m),Ze(m,x.maxHp>0&&x.hp/x.maxHp<.35)}function X(x){let m=Z.get(x.id);!m||!m.userData.slashMark||(m.userData.slashMark.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0)}let cn=.35;function Ze(x,m){if(x)if(m){x.rotation.x=.35,x.scale.setScalar(.96);let R=x.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=.2,R.rightArm.rotation.y=.2),x.traverse(w=>{w.isMesh&&w.material&&w.material.color&&(w.userData.originalColor||(w.userData.originalColor=w.material.color.clone()),w.material.color.copy(w.userData.originalColor).multiplyScalar(.82))})}else{x.rotation.x=0,x.scale.setScalar(1);let R=x.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=0,R.rightArm.rotation.y=0),x.traverse(w=>{w.isMesh&&w.material&&w.userData.originalColor&&w.material.color.copy(w.userData.originalColor)})}}function it(x){if(x.level>=3)return;let m=x.maxHp>0?x.hp/x.maxHp:1;x.level+=1;let R=B=>Math.max(1,Math.ceil(B*1.1)),w=B=>Math.max(1,Math.ceil(B*1.1));x.maxHp=R(x.maxHp),x.maxMp=R(x.maxMp),x.hp=Math.max(1,Math.min(x.maxHp,Math.ceil(m*x.maxHp))),x.mp=Math.max(1,Math.min(x.maxMp,Math.ceil(m*x.maxMp))),x.str=w(x.str),x.agi=w(x.agi),x.vit=w(x.vit),x.dex=w(x.dex),x.luk=w(x.luk),x.int=w(x.int),x.range>2&&(x.range=w(x.range)),console.log("[LEVEL UP]",`${x.name} (${x.class}, P${x.player})`,`\u2192 Lv.${x.level}`,`| HP ${x.hp}/${x.maxHp} MP ${x.mp}/${x.maxMp} STR ${x.str} VIT ${x.vit}`),$e(x)}function $e(x){let m=Z.get(x.id),R=x.level===3?"levelup level3":x.level===2?"levelup level2":"levelup";if($u(x,R),!m)return;let w=performance.now(),B=0;function H(q){B++,B%2===0&&E();let z=q-w,Y=Math.min(1,z/Ee),re=Y<.5?1+.35*(Y/.5):1+.35*(1-(Y-.5)/.5);m.scale.setScalar(re),Y<1?requestAnimationFrame(H):m.scale.setScalar(1)}requestAnimationFrame(H)}let Zt=400,Mt=280,C=.45,b=160,K=280,Se=350,ye=500,Ee=600,Ye=!1,Ue=new F,Ve=new F,tt=new F,yt=new F;function ge(x=!1){p=!0;let m=null;if(Ge==="playing"&&he.length>0){let q=he[Ie];m=O.find(z=>z.id===q&&z.hp>0)}if(m||(m=O.find(q=>q.player===je&&q.hp>0)),!m)return;let R=a.position.distanceTo(h);if(R<.1&&(R=o),f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),tt.copy(oe(m.x,m.y)),yt.copy(tt).add(f.clone().multiplyScalar(R)),x||Ye){h.copy(tt),a.position.copy(yt),a.lookAt(h),E();return}Ye=!0,Ue.copy(h),Ve.copy(a.position);let w=performance.now(),B=0;Cn.shadowMap.enabled=!1;function H(q){B++,B%2===0&&E();let z=Math.min(1,(q-w)/Zt),Y=z*(2-z);h.lerpVectors(Ue,tt,Y),a.position.lerpVectors(Ve,yt,Y),a.lookAt(h),z<1?requestAnimationFrame(H):(Cn.shadowMap.enabled=!0,Ye=!1)}requestAnimationFrame(H)}let Ct=0,je=1,Ge="draft",ke="pvp",Fe=null;async function _t(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{Fe=await navigator.wakeLock.request("screen"),Fe.addEventListener("release",()=>{Fe=null})}catch{Fe=null}}function Ut(){Fe&&(Fe.release().catch(()=>{}),Fe=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&ke==="cvcpu"&&Ge==="playing"&&_t()});let Xt="balanced",ft=new Set(ro),Re=0,N=null,Pe=new Set,he=[],Ie=0,Oe=null,ut=new Map,Ot=null;function xn(x){if(!x||x.hp<=0)return;Ot=x.id;let m=document.getElementById("unit-preview-card"),R=document.getElementById("unit-preview-image"),w=document.getElementById("unit-preview-name"),B=document.getElementById("unit-preview-meta"),H=document.getElementById("unit-preview-stats");m.classList.remove("player-1","player-2"),m.classList.add(x.player===1?"player-1":"player-2"),m.classList.toggle("level-2",x.level>=2&&x.level<3),m.classList.toggle("level-3",x.level>=3),R.src=Br[x.class]||"",R.alt=x.name,w.textContent=x.name,B.textContent=`Lv.${x.level} ${x.class} \u2014 Player ${x.player}`,H.innerHTML=[["HP",`${x.hp}/${x.maxHp}`],["MP",`${x.mp}/${x.maxMp}`],["STR",ce(x,"str")],["AGI",ce(x,"agi")],["VIT",ce(x,"vit")],["DEX",ce(x,"dex")],["LUK",ce(x,"luk")],["INT",ce(x,"int")]].map(([z,Y])=>`<span class="stat-label">${z}</span><span class="stat-val${z==="HP"?" stat-val-hp":""}">${Y}</span>`).join("");let q=x.maxHp>0&&x.hp/x.maxHp<.3;m.classList.toggle("low-hp",q),m.style.display="block"}function pn(){Ot=null;let x=document.getElementById("unit-preview-card");x.classList.remove("low-hp","level-2","level-3"),x.style.display="none"}let At=!1,zt=!1,vn=!1,Mn=null,qt=!1,mn=!1,fi=!1,Un=[],zn=new hi;n.add(zn);let $n=[],rs=!0,bi=0,kr=0;function E(){rs=!0,bi=performance.now()}let V=new hi;n.add(V);let J=[],ne=St,j=.02,Be=3368703,Ke=13382451;function st(x,m){let R=x/2,w=R-m,B=new tr;B.moveTo(-R,-R),B.lineTo(R,-R),B.lineTo(R,R),B.lineTo(-R,R),B.lineTo(-R,-R);let H=new er;return H.moveTo(-w,-w),H.lineTo(w,-w),H.lineTo(w,w),H.lineTo(-w,w),H.lineTo(-w,-w),B.holes.push(H),new Ur(B)}let dt=st(ne,j);function nt(x=null){let m=O.filter(R=>R.hp>0&&R.id!==x).map(R=>`${R.id},${R.x},${R.y},${R.player}`).sort().join("|");if(!(nt._lastSig===m&&nt._lastExclude===x)){for(nt._lastSig=m,nt._lastExclude=x,J.forEach(R=>R.dispose()),J.length=0;V.children.length;){let R=V.children[0];V.remove(R)}O.filter(R=>R.hp>0&&R.id!==x).forEach(R=>{let w=R.x,B=R.y,q=(Yn+e.height[B][w]*.35)/2+Yn/2,z=w*St-Ce+St/2,Y=B*St-te+St/2,re=q+.02,de=R.player===1?Be:Ke,Te=new fn({color:de,side:dn}),ee=new Je(dt,Te);ee.rotation.x=-Math.PI/2,ee.position.set(z,re,Y),V.add(ee),J.push(Te)}),E()}}let mt=1.15,pt={1:8102901,2:15628943},Lt=(()=>{let x=new fn({color:pt[1]}),m=new Je(new vi(.1,.25,8),x);return m.rotation.x=Math.PI,m.visible=!1,n.add(m),m})();function Nn(){if(Ge!=="playing"||he.length===0||fi){Lt.visible=!1,Lt.removeFromParent(),n.add(Lt);return}let x=he[Ie],m=O.find(w=>w.id===x);if(!m||m.hp<=0){Lt.visible=!1,Lt.removeFromParent(),n.add(Lt);return}let R=Z.get(x);if(!R){Lt.visible=!1;return}Lt.removeFromParent(),R.add(Lt),Lt.position.set(0,mt,0),Lt.material&&Lt.material.color.setHex(pt[m.player]??pt[1]),Lt.visible=!0}function bn(x){let m=[[0,1],[0,-1],[1,0],[-1,0]],R=[];for(let[w,B]of m){let H=x.x+w,q=x.y+B;!rr(e,H,q)||O.some(Y=>Y.id!==x.id&&Y.x===H&&Y.y===q&&Y.hp>0)||R.push(Math.atan2(w,B))}return R}function si(x){if(Un.length===0)return x;if(Un.length===1)return Un[0];let m=Un[0],R=Math.abs(Yt(x-m));for(let w=1;w<Un.length;w++){let B=Math.abs(Yt(x-Un[w]));B<R&&(R=B,m=Un[w])}return m}function Yt(x){for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;return x}let Et=1.2,Zn=(()=>{let x=new Je(new vi(.12,.35,8),new fn({color:4500223}));return x.rotation.x=-Math.PI/2,x.visible=!1,n.add(x),x})();function nn(x,m){if(!fi||he.length===0||Un.length===0)return;let R=he[Ie],w=O.find(Te=>Te.id===R),B=Z.get(R);if(!w||!B)return;Xr(x,m),Hi.setFromCamera(zi,a);let H=Hi.intersectObjects(ae.children,!0);if(H.length===0)return;let q=null;for(let Te of H){let ee=Te.object;for(;ee&&(ee.userData.gx==null||ee.userData.gy==null);)ee=ee.parent;if(ee&&ee.userData.gx!=null){q=Te.point;break}}if(!q)return;let z=oe(w.x,w.y),Y=q.x-z.x,re=q.z-z.z;if(Y*Y+re*re<1e-6)return;let de=Math.atan2(Y,re);B.rotation.y=si(de)}function wi(){if(he.length===0)return;let x=he[Ie],m=O.find(B=>B.id===x),R=Z.get(x);if(!m||!R)return;Un=[[0,1],[0,-1],[1,0],[-1,0]].map(([B,H])=>Math.atan2(B,H)),Zn.removeFromParent(),R.add(Zn),Zn.position.set(0,Et,0),Zn.rotation.x=-Math.PI/2,Zn.rotation.y=0,Zn.rotation.z=Math.PI,Zn.visible=!0,R.rotation.y=Un[0]}function Hr(){Zn.visible=!1,Zn.removeFromParent(),n.add(Zn)}let Bi=(()=>{let x=Or,m=[1];for(let R=0;R<Math.floor((x-1)/2);R++)m.push(2,2,1,1);return x%2===1?m.push(2):(m.push(2,2),m.push(1)),m})();function Vn(){return Bi[Re]}function Sn(){let x=Vn(),m=0;for(let R=0;R<Re;R++)Bi[R]===x&&m++;return m+1}function ri(){Ge="draft",Re=0,ft=new Set(ro),N=null,Pe.clear(),hn(),as(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function Ss(){return O.filter(x=>x.hp>0).sort((x,m)=>{let R=ce(x,"agi"),w=ce(m,"agi");if(w!==R)return w-R;let B=ce(x,"dex");return ce(m,"dex")-B}).map(x=>x.id)}function Kn(){document.getElementById("draft-panel").style.display="none";let x=document.getElementById("draft-placement-card");x&&(x.style.display="none",x.innerHTML=""),hn();let m=document.getElementById("battle-start-overlay");m&&(m.classList.add("visible"),m.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let R=document.getElementById("draft-placement-card");for(R&&(R.style.display="none",R.innerHTML=""),Ge="playing",Ct=0,he=Ss(),Ie=0;Ie<he.length&&O.find(H=>H.id===he[Ie]).hp<=0;)Ie++;Ie>=he.length&&(Ie=0);let w=O.find(H=>H.id===he[Ie]);je=w?w.player:1,qt=!1,mn=!1,Oe=he[Ie],setTimeout(()=>{m&&(m.classList.remove("visible"),m.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",nt(),Ft(),Nn(),ge(!0),ke==="cvcpu"&&_t()},4e3)}function as(){let x=document.getElementById("draft-panel"),m=document.getElementById("draft-title"),R=document.getElementById("draft-classes"),w=document.getElementById("draft-message"),B=document.getElementById("turn-player"),H=document.getElementById("draft-placement-card");if(N){x.style.display="none",B.textContent=`Draft: Player ${Vn()} \u2014 place ${kt[N].name}`;let z=Vn();H.style.display="flex",H.classList.remove("player-1","player-2"),H.classList.add("player-"+z),H.style.left=z===1?"24px":"",H.style.right=z===2?"24px":"";let Y=[...O.filter(Te=>Te.player===z).map(Te=>Te.class),N],re=(Te,ee)=>{let se=kt[Te];return`
        <div class="draft-class-card${ee?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Br[Te]||""}" alt="${se.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${se.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${se.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${se.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${se.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${se.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${se.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${se.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${se.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${se.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${se.range}</span>
            </div>
          </div>
        </div>
      `},de=3;if(Y.length>de){H.classList.add("draft-placement-cols");let Te=[];for(let se=0;se<Y.length;se+=de)Te.push(Y.slice(se,se+de));let ee=Y.length-1;H.innerHTML=Te.map((se,ve)=>{let rt=ve===Te.length-1,Xe=se.map((lt,Dt)=>{let Jt=ve*de+Dt===ee;return re(lt,Jt)}).join("");return`<div class="draft-placement-col${rt?" draft-placement-col-current":""}">${Xe}</div>`}).join("")}else H.classList.remove("draft-placement-cols"),H.innerHTML=Y.map((Te,ee)=>{let se=ee===Y.length-1;return re(Te,se)}).join("");ke==="pvcpu"&&Vn()===2&&setTimeout(lr,500),ke==="cvcpu"&&setTimeout(lr,500);return}H.style.display="none",H.innerHTML="",Ge==="draft"&&(x.style.display="flex");let q=Vn();m.textContent=`Player ${q}: Pick a class (${Sn()}/${Or})`,w.textContent="",R.innerHTML="",B.textContent=`Draft: Player ${q} \u2014 pick a class`,Lx([...ro]).forEach(z=>{let Y=ft.has(z),re=kt[z],de=document.createElement("button");de.type="button",de.className="draft-class-card"+(Y?"":" draft-class-card-selected"),de.disabled=!Y,de.innerHTML=`
          <img class="draft-class-card-image" src="${Br[z]||""}" alt="${re.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${re.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${re.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${re.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${re.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${re.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${re.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${re.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${re.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${re.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${re.range}</span>
            </div>
          </div>
        `,Y&&de.addEventListener("click",()=>zr(z)),R.appendChild(de)}),ke==="pvcpu"&&Vn()===2&&setTimeout(lr,500),ke==="cvcpu"&&setTimeout(lr,500)}function zr(x){if(!ft.has(x)||N)return;N=x;let m=Vn(),R=new Set(O.map(H=>H.y*e.w+H.x)),w=Ux(e,m,R),B=Tu(e,w);Pe=new Set(B.map(H=>H.gy*e.w+H.gx)),ku(B),as()}function ar(x,m){if(!N)return;let R=Vn(),w=m*e.w+x;if(!Pe.has(w))return;let B=kt[N],H={id:ie++,player:R,x,y:m,level:1,name:B.name,class:N,hairColor:(ao[N]||ao.knight).hair,hp:B.hp,maxHp:B.maxHp,mp:B.mp,maxMp:B.maxMp,str:B.str,agi:B.agi,vit:B.vit,dex:B.dex,luk:B.luk,int:B.int,range:B.range};O.push(H),wt(H);let q=Z.get(H.id);q&&(q.rotation.y=H.player===1?Math.PI:0),ft.delete(N),N=null,Pe.clear(),hn();let z=document.getElementById("draft-placement-card");if(z&&(z.style.display="none",z.innerHTML=""),Re++,Re>=2*Or){Kn();return}let Y=Vn(),re=Sn(),de=document.getElementById("draft-panel"),Te=document.getElementById("draft-title"),ee=document.getElementById("draft-message"),se=document.getElementById("draft-classes"),ve=document.getElementById("turn-player");de&&Te&&se&&ve&&(de.style.display="flex",Te.textContent=`Player ${Y}: Pick a class (${re}/${Or})`,ee&&(ee.textContent="Get ready\u2026"),se.innerHTML="",ve.textContent=`Draft: Player ${Y} \u2014 pick a class`),setTimeout(as,1500)}function Ft(){Ft._pending||(Ft._pending=!0,requestAnimationFrame(()=>{Ft._pending=!1,Iu()}))}function Iu(){let x=Ft._cache||(Ft._cache={}),m=x.turnEl||(x.turnEl=document.getElementById("turn-player")),R=x.menuLabel||(x.menuLabel=document.getElementById("menu-label")),w=x.turnMenu||(x.turnMenu=document.getElementById("turn-menu")),B=x.unitInfo||(x.unitInfo=document.getElementById("unit-info")),H=x.unitNameEl||(x.unitNameEl=document.getElementById("unit-name")),q=x.unitLevelClassEl||(x.unitLevelClassEl=document.getElementById("unit-level-class")),z=x.unitStatsEl||(x.unitStatsEl=document.getElementById("unit-stats")),Y=x.unitClassImageEl||(x.unitClassImageEl=document.getElementById("unit-class-image"));if(Ge==="playing"&&O.forEach(ee=>{if(ee.hp<=0)return;let se=Z.get(ee.id);se&&Ze(se,ee.maxHp>0&&ee.hp/ee.maxHp<cn)}),w.classList.remove("player-1","player-2"),w.classList.add(je===1?"player-1":"player-2"),w.classList.toggle("level-2",!1),w.classList.toggle("level-3",!1),Ge==="playing"&&he.length>0){let ee=he[Ie];O.find(ve=>ve.id===ee&&ve.hp>0)&&(Oe==null||!O.find(ve=>ve.id===Oe&&ve.hp>0))&&(Oe=ee)}if(Oe!=null){let ee=O.find(se=>se.id===Oe);if(ee&&ee.hp>0){B.classList.remove("no-unit");let se=ee.maxHp>0&&ee.hp/ee.maxHp<.25;w.classList.toggle("low-hp",se),w.classList.toggle("level-2",ee.level>=2&&ee.level<3),w.classList.toggle("level-3",ee.level>=3),H.textContent=ee.name,q.textContent=`Lv.${ee.level} ${ee.class}`,Y.src=Br[ee.class]||"",Y.alt=ee.name,z.innerHTML=[["HP",`${ee.hp}/${ee.maxHp}`],["MP",`${ee.mp}/${ee.maxMp}`],["STR",ce(ee,"str")],["AGI",ce(ee,"agi")],["VIT",ce(ee,"vit")],["DEX",ce(ee,"dex")],["LUK",ce(ee,"luk")],["INT",ce(ee,"int")]].map(([ve,rt])=>`<span>${ve}</span><span class="stat-val${ve==="HP"?" stat-val-hp":""}">${rt}</span>`).join("")}else w.classList.remove("low-hp","level-2","level-3"),B.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",q.textContent="",z.textContent="",Y.src="",Y.alt=""}else w.classList.remove("low-hp","level-2","level-3"),B.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",q.textContent="",z.textContent="",Y.src="",Y.alt="";if(Oe!=null)m.textContent=`Player ${je} \u2014 Unit ${H.innerHTML} active`;else{let ee=he.length?O.find(se=>se.id===he[Ie]):null;m.textContent=ee?`${ee.name} (Player ${je})`:`Player ${je}`}R.textContent=`Player ${je}`;let re=x.btnAttack||(x.btnAttack=document.getElementById("btn-attack")),de=x.btnSkill||(x.btnSkill=document.getElementById("btn-skill")),Te=x.btnEnd||(x.btnEnd=document.getElementById("btn-end"));if(ke==="cvcpu"&&Ge==="playing")re.disabled=!0,de.disabled=!0,Te&&(Te.disabled=!0),m.textContent=`Player ${je} (CPU)`;else if(fi)re.disabled=!0,de.disabled=!0,m.textContent="Click on map to choose facing direction";else if(Ge==="playing"){re.disabled=mn;let ee=he.length?he[Ie]:null,se=ee?O.find(Xe=>Xe.id===ee&&Xe.hp>0):null,ve=ke!=="cvcpu"&&(ke!=="pvcpu"||je===1),rt=ve&&se&&!mn?Wr(se):[];de.disabled=mn||!ve||rt.length===0,Te&&(Te.disabled=!1)}if(Ge==="playing"){let ee=Math.min(Ct+1,Ms);m.textContent=(m.textContent||"")+` \u2014 Turn ${ee}/${Ms}`;let se=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left")),ve=x.turnsLeftValueEl||(x.turnsLeftValueEl=document.getElementById("turns-left-value"));if(se&&ve){se.style.display="";let rt=Math.max(0,Ms-Ct);ve.textContent=String(rt),se.classList.toggle("turns-left-low",rt<=10)}}else{let ee=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left"));ee&&(ee.style.display="none")}Ge==="playing"&&fo(je)&&!At&&setTimeout(gn,700)}function Kt(){E(),pn(),zt=!1,vn=!1,Mn=null,fi=!1,Un=[],Hr(),hn();let x=he.length;if(x===0)return;let m=he[Ie],R=O.find(z=>z.id===m);if(R&&R.tempDebuff&&R.tempDebuff.duration--,R&&R.tempDebuff&&R.tempDebuff.duration<=0&&(R.tempDebuff=void 0),R&&R.tempBuff&&R.tempBuff.duration--,R&&R.tempBuff&&R.tempBuff.duration<=0&&(R.tempBuff=void 0),R&&R.hp>0){let z=Math.ceil(ce(R,"int")*.15);R.mp=Math.min(R.maxMp,R.mp+z)}if(R&&R.hp>0){let z=R.x,Y=R.y;e.type[Y][z]===et.CENTER&&R.level===1&&it(R);let re=R.player===1?et.BASE_TOP:et.BASE_BOTTOM;e.type[Y][z]===re&&R.level===2&&it(R)}if(Ct++,Ct>=Ms){Zu();return}let w=(Ie+1)%x,B=0;for(;B<x;){let z=he[w],Y=O.find(re=>re.id===z);if(Y&&Y.hp>0)break;w=(w+1)%x,B++}let H=w===0;Ie=w;for(let z=0;z<x;z++){let Y=he[Ie],re=O.find(Te=>Te.id===Y);if(!re||re.hp<=0)break;let de=re.tempDebuff&&re.tempDebuff.poison!=null?re.tempDebuff.poison:0;if(de<=0)break;if(re.hp=Math.max(0,re.hp-de),Jn(re.x,re.y,String(de),!1,"poison"),X(re),re.hp<=0){En(re),w=(Ie+1)%x;let Te=0;for(;Te<x;){let ee=he[w],se=O.find(ve=>ve.id===ee);if(se&&se.hp>0)break;w=(w+1)%x,Te++}Ie=w;continue}break}let q=O.find(z=>z.id===he[Ie]);je=q?q.player:1,qt=!1,mn=!1,Oe=he[Ie],H&&(he=Ss(),Ie=0),Ft(),Nn(),ge()}document.getElementById("btn-attack").addEventListener("click",()=>{if(At||mn||Ge!=="playing"||he.length===0)return;pn();let x=he[Ie],m=O.find(B=>B.id===x);if(!m||m.hp<=0)return;let R=m.range!=null?m.range:1;Oe=x,zt=!0;let w=wu(e,m.x,m.y,R);ut=new Map,w.forEach((B,H)=>{let q=H%e.w,z=Math.floor(H/e.w);bs(e,m.x,m.y,q,z)&&ut.set(H,B)}),Hu(ut),Ft()}),document.getElementById("btn-skill").addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),At||mn)return;let m=he[Ie],R=m?O.find(z=>z.id===m&&z.hp>0):null;if(!R||R.player!==je)return;let w=document.getElementById("skill-list-overlay"),B=document.getElementById("btn-skill");if(!B)return;if(w&&w.style.display==="block"){w.style.display="none";return}let H=Wr(R),q=B.getBoundingClientRect();w||(w=document.createElement("div"),w.id="skill-list-overlay",w.className="skill-list-overlay",w.setAttribute("aria-hidden","true"),document.body.appendChild(w)),w.style.left=`${q.left}px`,w.style.top=`${q.top-4}px`,w.style.transform="translateY(-100%)",w.style.right="auto",w.style.bottom="auto",w.style.display="none",H.length===0?w.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(w.innerHTML=H.map((z,Y)=>`<button type="button" class="skill-option" data-skill-index="${Y}" ${z.disabled?"disabled":""}>
          <span class="skill-name">${z.name}</span> <span class="skill-meta">${z.cost} MP \xB7 Lv.${z.level}</span><br/>
          <span class="skill-meta">${z.description}</span>
        </button>`).join(""),w.querySelectorAll(".skill-option").forEach((z,Y)=>{z.addEventListener("click",re=>{re.preventDefault(),re.stopPropagation();let de=H[Y];if(Mn=de,w.style.display="none",w.setAttribute("aria-hidden","true"),de.target==="self"){if(R.mp<de.cost)return;R.mp-=de.cost,mn=!0,Gr(R,R,de,{showFloatingCombatText:Jn,handleUnitDeath:En,updateUnitSlashVisibility:X,updateTurnUI:Ft},()=>{hn(),vn=!1,Mn=null,Es=new Set,qt?Kt():Ft()}),Ft();return}if(de.target==="ally"&&cr(R,de,O).filter(se=>se.targetUnit&&se.targetUnit.id!==R.id).length===0&&R.mp>=de.cost){R.mp-=de.cost,mn=!0,Gr(R,R,de,{showFloatingCombatText:Jn,handleUnitDeath:En,updateUnitSlashVisibility:X,updateTurnUI:Ft},()=>{hn(),vn=!1,Mn=null,Es=new Set,qt?Kt():Ft()}),Ft();return}vn=!0,zt=!1,Bu(R,de),Ft()})})),requestAnimationFrame(()=>{w.style.display="block",w.style.visibility="visible",w.setAttribute("aria-hidden","false")})}),document.addEventListener("click",x=>{let m=document.getElementById("skill-list-overlay"),R=document.getElementById("btn-skill"),w=document.querySelector(".skill-wrap");!m||m.style.display!=="block"||w&&w.contains(x.target)||m.contains(x.target)||(m.style.display="none",m.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(At||fi||Ge!=="playing"||he.length===0)return;let x=he[Ie],m=O.find(w=>w.id===x);if(!m||m.hp<=0)return;fi=!0,Oe=null,zt=!1,ut=new Map,hn(),wi(),Nn();let R=document.getElementById("turn-player");R.textContent="Click on map to choose facing direction",Ft()}),h.set(0,8,0),a.position.copy(h).add(c),a.lookAt(h);let Vr=document.getElementById("mode-select-overlay"),tc=document.getElementById("mode-pvp"),nc=document.getElementById("mode-pvcpu"),co=document.getElementById("mode-cvcpu"),or=document.getElementById("ai-draft-preference"),ic=document.getElementById("mode-select-ai-draft");ic&&(ic.style.display=Su?"":"none"),or&&(Cx.forEach(x=>{let m=document.createElement("option");m.value=x.value,m.textContent=x.label,or.appendChild(m)}),or.value=Xt,or.addEventListener("change",()=>{Xt=or.value}));let ki=new Audio;ki.loop=!0,ki.volume=.3,ki.preload="auto";let ho=window.location.href.replace(/[^/]*$/,""),sc=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:ho+(ho.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");ki.src=sc,ki.addEventListener("error",()=>{let x=ho+"assets/music/tavern.mp3";x!==sc&&(ki.src=x)});function uo(){ki.paused&&ki.play().catch(()=>{})}Vr&&tc&&nc?(tc.addEventListener("click",()=>{uo(),ke="pvp",Vr.classList.add("hidden"),ri()}),nc.addEventListener("click",()=>{uo(),ke="pvcpu",Vr.classList.add("hidden"),ri()}),co&&(Su?co.addEventListener("click",()=>{uo(),ke="cvcpu",Vr.classList.add("hidden"),ri()}):co.style.display="none")):ri();function fo(x){return ke==="pvcpu"&&x===2||ke==="cvcpu"}function Lu(){let x=ro.filter(ee=>ft.has(ee));if(x.length===0)return null;let m=Xt||"balanced";if(m==="random")return x[Math.floor(Math.random()*x.length)];if(m==="custom")return Px.filter(se=>ft.has(se))[0]??x[0]??null;let R=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function w(ee){let se=kt[ee];if(!se)return 1/0;let ve=R.map(Xe=>se[Xe]??0),rt=ve.reduce((Xe,lt)=>Xe+lt,0)/ve.length;return ve.reduce((Xe,lt)=>Xe+(lt-rt)**2,0)/ve.length}if(m==="tanky")return[...x].sort((se,ve)=>{let rt=kt[se]?.hp??0,Xe=kt[ve]?.hp??0;return Xe!==rt?Xe-rt:(kt[ve]?.vit??0)-(kt[se]?.vit??0)})[0]??null;if(m==="aggressive")return[...x].sort((se,ve)=>{let rt=kt[se]?.str??0,Xe=kt[ve]?.str??0;return Xe!==rt?Xe-rt:(kt[ve]?.agi??0)-(kt[se]?.agi??0)})[0]??null;if(m==="scout")return[...x].sort((se,ve)=>{let rt=kt[se]?.agi??0,Xe=kt[ve]?.agi??0;return Xe!==rt?Xe-rt:(kt[ve]?.dex??0)-(kt[se]?.dex??0)})[0]??null;if(m==="ranged")return[...x].sort((se,ve)=>{let rt=kt[se]?.range??0,Xe=kt[ve]?.range??0;return Xe!==rt?Xe-rt:(kt[ve]?.dex??0)-(kt[se]?.dex??0)})[0]??null;if(m==="caster")return[...x].sort((se,ve)=>{let rt=kt[se]?.int??0,Xe=kt[ve]?.int??0;return Xe!==rt?Xe-rt:(kt[ve]?.mp??0)-(kt[se]?.mp??0)})[0]??null;let B=Vn(),q=Ix(Or),z=O.filter(ee=>ee.player===B).map(ee=>ee.class),Y={};for(let ee of Object.keys(so))Y[ee]=0;for(let ee of z)for(let se of Object.keys(so))if(so[se].includes(ee)){Y[se]++;break}let re=ee=>Math.max(0,(q[ee]??0)-(Y[ee]??0)),de=ee=>{for(let[se,ve]of Object.entries(so))if(ve.includes(ee))return se;return null};return[...x].sort((ee,se)=>{let ve=de(ee),rt=de(se),Xe=ve!=null?re(ve):0,lt=rt!=null?re(rt):0;if(lt!==Xe)return lt-Xe;let Dt=kt[ee]?.hp??0,Nt=kt[se]?.hp??0;return Nt!==Dt?Nt-Dt:w(ee)-w(se)})[0]??null}function lr(){if(Ge!=="draft"||!fo(Vn()))return;if(!N){let R=Lu();R&&zr(R),setTimeout(lr,500);return}let x=Array.from(Pe).map(R=>({gx:R%e.w,gy:Math.floor(R/e.w)})),m=Tu(e,x);if(m.length>0){let{gx:R,gy:w}=m[0];ar(R,w)}}function rc(){let x=[];for(let m=0;m<e.h;m++)for(let R=0;R<e.w;R++)e.type[m][R]===et.CENTER&&x.push({gx:R,gy:m});return x}function Du(x){let m=[],R=x===1?et.BASE_TOP:et.BASE_BOTTOM;for(let w=0;w<e.h;w++)for(let B=0;B<e.w;B++)e.type[w][B]===R&&m.push({gx:B,gy:w});return m}function ai(x,m,R,w){return Math.abs(x-R)+Math.abs(m-w)}function Uu(x){let m=x.range!=null?x.range:1,R=[];for(let w of O){if(w.hp<=0||w.player===x.player)continue;let B=ai(x.x,x.y,w.x,w.y);B<=m&&B>0&&bs(e,x.x,x.y,w.x,w.y)&&R.push({target:w,dist:B})}return R}function Nu(x){let m=O.filter(R=>R.hp>0&&R.player===x.player&&R.id!==x.id);for(let R of m){let w=O.filter(B=>B.hp>0&&B.player!==x.player);for(let B of w){let H=B.range!=null?B.range:1,q=ai(B.x,B.y,R.x,R.y);if(q<=H&&q>0&&bs(e,B.x,B.y,R.x,R.y))return!0}}return!1}function Vt(x,m,R,w){let B=x.x,H=x.y,q=ss(e,x.x,x.y,m,R,O,x);if(!q||q.length<=1){w&&w();return}Oe=null,hn(),At=!0,p=!0,nt(x.id),E();let z=Z.get(x.id),Y=1;function re(){if(Y>=q.length){x.x=q[q.length-1].x,x.y=q[q.length-1].y,At=!1,Qe(z),nt(),ut=new Map,qt=!0,w&&w();return}let de=q[Y-1],Te=q[Y],ee=oe(de.x,de.y).clone(),se=oe(Te.x,Te.y).clone(),ve=se.x-ee.x,rt=se.z-ee.z;ve*ve+rt*rt>1e-6&&(z.rotation.y=Math.atan2(ve,rt));let Xe=performance.now(),lt=0;function Dt(Nt){lt++,lt%2===0&&E();let Jt=Math.min(1,(Nt-Xe)/io),Bt=(Pt=>Pt*Pt*(3-2*Pt))(Jt);if(z.position.lerpVectors(ee,se,Bt),ht(z,Bt),p){let Pt=a.position.distanceTo(h),gt=Pt<.1?o:Pt;f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),h.lerp(z.position,l),a.position.copy(h).add(f.clone().multiplyScalar(gt)),a.lookAt(h)}Jt<1?requestAnimationFrame(Dt):(Y++,re())}requestAnimationFrame(Dt)}re()}function ac(x,m){let R=ce(m,"agi")*.7+ce(m,"luk")*.3,B=Math.random()*Math.max(.001,R)<=ce(x,"dex"),H=0;if(B){let gt=ce(x,"str")*.7+ce(x,"dex")*.2+ce(x,"int")*.1-(ce(m,"vit")*.3+ce(m,"luk")*.2);H=Math.max(1,Math.floor(gt))}mn=!0,Oe=null,zt=!1,hn(),console.log("[ATTACK]",`${x.name} (${x.class}, P${x.player})`,"\u2192",`${m.name} (${m.class}, P${m.player})`,B?`${H} dmg`:"MISS",`| ${m.name} HP ${m.hp} \u2192 ${Math.max(0,m.hp-H)}/${m.maxHp}`);let q=Z.get(x.id);if(!q||!q.userData.rightArm){B?(m.hp=Math.max(0,m.hp-H),Jn(m.x,m.y,String(H),!1),X(m),m.hp<=0&&En(m)):Jn(m.x,m.y,"MISS",!0),setTimeout(qt?()=>Kt():()=>Ft(),400);return}let z=oe(x.x,x.y).clone(),Y=oe(m.x,m.y).clone(),re=z.clone().lerp(Y,.35),de=Y.x-z.x,Te=Y.z-z.z;if(de*de+Te*Te>1e-6&&(q.rotation.y=Math.atan2(de,Te)),(x.range!=null?x.range:1)>2){let _e=function(at){we++,we%2===0&&E();let Ae=at-xe,be=Math.min(1,Ae/K);if(vt.position.lerpVectors(pe,fe,be),!le&&be>=1&&(le=!0,n.remove(vt),gt.dispose(),Gt.dispose(),B?(m.hp=Math.max(0,m.hp-H),Jn(m.x,m.y,String(H),!1),m.hp<=0&&(Me=!0),Z.get(m.id)?me=at:Me&&(En(m),Me=!1),X(m)):Jn(m.x,m.y,"MISS",!0)),me!=null&&B){let Ne=Z.get(m.id);if(Ne){let It=Math.min(1,(at-me)/b),$t=1-It;Vi.copy(Tn).multiplyScalar(Pn*$t),Ne.position.copy(Qt).add(Vi),It>=1&&(Ne.position.copy(Qt),me=null,Me&&(En(m),Me=!1))}else me=null,Me&&(En(m),Me=!1)}if(be<1)requestAnimationFrame(_e);else{let Ne=me==null;Ne&&Me&&(En(m),Me=!1),Ne?(Cn.shadowMap.enabled=!0,setTimeout(qt?()=>Kt():()=>Ft(),400)):requestAnimationFrame(_e)}},gt=new is(.035,.035,.4,6),Gt=new fn({color:16763972}),vt=new Je(gt,Gt);vt.position.copy(z),vt.position.y+=.6;let jt=Y.clone().sub(z).normalize();vt.quaternion.setFromUnitVectors(new F(0,1,0),jt),n.add(vt);let Qt=oe(m.x,m.y).clone(),Tn=Y.clone().sub(z).normalize(),Pn=.4,le=!1,me=null,Me=!1,pe=vt.position.clone(),fe=Y.clone();fe.y+=.6;let xe=performance.now(),we=0;Cn.shadowMap.enabled=!1,requestAnimationFrame(_e);return}let ve=!1,rt=performance.now(),Xe=q.userData.rightArm,lt=null,Dt=!1,Nt=oe(m.x,m.y).clone(),Jt=Y.clone().sub(z).normalize(),un=.4,Bt=0;function Pt(gt){Bt++,Bt%2===0&&E();let Gt=gt-rt,vt=Math.min(1,Gt/Mt),jt=vt<=.4?vt/.4:1,Qt=vt>.4?(vt-.4)/.6:0;vt<=.4?q.position.lerpVectors(z,re,jt):q.position.lerpVectors(re,z,Qt);let Tn=vt<=.35?vt/.35:vt<=.7?(.7-vt)/.35:0;if(Xe.rotation.y=-Tn*1.1,!ve&&vt>=C&&(ve=!0,B?(m.hp=Math.max(0,m.hp-H),Jn(m.x,m.y,String(H),!1),m.hp<=0&&(Dt=!0),X(m),Z.get(m.id)?lt=gt:Dt&&(En(m),Dt=!1)):Jn(m.x,m.y,"MISS",!0)),lt!=null&&B){let Pn=Z.get(m.id);if(Pn){let le=Math.min(1,(gt-lt)/b),me=1-le;Vi.copy(Jt).multiplyScalar(un*me),Pn.position.copy(Nt).add(Vi),le>=1&&(Pn.position.copy(Nt),lt=null,Dt&&(En(m),Dt=!1))}else lt=null,Dt&&(En(m),Dt=!1)}if(vt<1)requestAnimationFrame(Pt);else{q.position.copy(z),Xe.rotation.y=0;let Pn=lt==null;Pn&&Dt&&(En(m),Dt=!1),Pn?(Cn.shadowMap.enabled=!0,setTimeout(qt?()=>Kt():()=>Ft(),400)):requestAnimationFrame(Pt)}}Cn.shadowMap.enabled=!1,requestAnimationFrame(Pt)}function Ou(x,m){let R=oe(x,m);R.y+=.4;let w=new Ti(.1,12,12),B=new fn({color:8930559,transparent:!0,opacity:.9}),H=new Je(w,B);H.position.copy(R),n.add(H);let q=performance.now(),z=0;function Y(re){z++,z%2===0&&E();let de=re-q,Te=Math.min(1,de/Se),ee=Te*(2-Te);H.scale.setScalar(ee*4.5),B.opacity=.9*(1-Te),Te<1?requestAnimationFrame(Y):(n.remove(H),w.dispose(),B.dispose())}requestAnimationFrame(Y)}function Gr(x,m,R,w,B){if(R.target==="enemy"&&m==null){w.updateTurnUI&&w.updateTurnUI(),B&&B();return}let q=(R.range??0)>2&&m!=null&&(m.x!==x.x||m.y!==x.y),z=!q&&m!=null&&(m.x!==x.x||m.y!==x.y);if(!q&&!z){oo(R.effectKey,x,m,w),w.updateTurnUI&&w.updateTurnUI(),B&&B();return}if(z){let at=function(Ae){_e++,_e%2===0&&E();let be=Ae-we,Ne=Math.min(1,be/Mt),It=Ne<=.4?Ne/.4:1,$t=Ne>.4?(Ne-.4)/.6:0;Ne<=.4?gt.position.lerpVectors(Gt,jt,It):gt.position.lerpVectors(jt,Gt,$t);let We=Ne<=.35?Ne/.35:Ne<=.7?(.7-Ne)/.35:0;if(Me.rotation.y=-We*1.1,!pe&&Ne>=C&&(pe=!0,oo(R.effectKey,x,m,w),m.hp<=0&&(xe=!0),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m),Z.get(m.id)&&R.target!=="ally"?fe=Ae:xe&&(En(m),xe=!1)),fe!=null){let ot=Z.get(m.id);if(ot){let bt=Math.min(1,(Ae-fe)/b),an=1-bt;Vi.copy(le).multiplyScalar(me*an),ot.position.copy(Pn).add(Vi),bt>=1&&(ot.position.copy(Pn),fe=null,xe&&(En(m),xe=!1))}else fe=null,xe&&(En(m),xe=!1)}Ne<1?requestAnimationFrame(at):(gt.position.copy(Gt),Me.rotation.y=0,fe==null&&xe&&(En(m),xe=!1),fe==null?(Cn.shadowMap.enabled=!0,w.updateTurnUI&&w.updateTurnUI(),B&&B()):requestAnimationFrame(at))},gt=Z.get(x.id);if(!gt||!gt.userData.rightArm){oo(R.effectKey,x,m,w),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m),w.updateTurnUI&&w.updateTurnUI(),B&&B();return}let Gt=oe(x.x,x.y).clone(),vt=oe(m.x,m.y).clone(),jt=Gt.clone().lerp(vt,.35),Qt=vt.x-Gt.x,Tn=vt.z-Gt.z;Qt*Qt+Tn*Tn>1e-6&&(gt.rotation.y=Math.atan2(Qt,Tn));let Pn=oe(m.x,m.y).clone(),le=vt.clone().sub(Gt).normalize(),me=.4,Me=gt.userData.rightArm,pe=!1,fe=null,xe=!1,we=performance.now(),_e=0;Cn.shadowMap.enabled=!1,requestAnimationFrame(at);return}let Y=oe(x.x,x.y).clone(),re=oe(m.x,m.y).clone(),de=new is(.035,.035,.4,6),Te=new fn({color:16763972}),ee=new Je(de,Te);ee.position.copy(Y),ee.position.y+=.6;let se=re.clone().sub(Y).normalize();ee.quaternion.setFromUnitVectors(new F(0,1,0),se),n.add(ee);let ve=ee.position.clone(),rt=re.clone();rt.y+=.6;let Xe=performance.now(),lt=oe(m.x,m.y).clone(),Dt=re.clone().sub(Y).normalize(),Nt=.4,Jt=!1,un=null,Bt=0;function Pt(gt){Bt++,Bt%2===0&&E();let Gt=gt-Xe,vt=Math.min(1,Gt/K);if(ee.position.lerpVectors(ve,rt,vt),!Jt&&vt>=1&&(Jt=!0,n.remove(ee),de.dispose(),Te.dispose(),R.type==="spell"&&Ou(m.x,m.y),oo(R.effectKey,x,m,w),Z.get(m.id)&&m.hp>0&&(un=gt),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m)),un!=null){let jt=Z.get(m.id);if(jt){let Qt=Math.min(1,(gt-un)/b),Tn=1-Qt;Vi.copy(Dt).multiplyScalar(Nt*Tn),jt.position.copy(lt).add(Vi),Qt>=1&&(jt.position.copy(lt),un=null)}else un=null}vt<1?requestAnimationFrame(Pt):un==null?(Cn.shadowMap.enabled=!0,w.updateTurnUI&&w.updateTurnUI(),B&&B()):requestAnimationFrame(Pt)}Cn.shadowMap.enabled=!1,requestAnimationFrame(Pt)}function gn(){if(Ge!=="playing"||!fo(je)||At||he.length===0)return;let x=he[Ie],m=O.find(le=>le.id===x);if(!m||m.hp<=0)return;let R=lo(e,m.x,m.y,ce(m,"agi"),O,m),w=[];R.forEach((le,me)=>{if(le===0)return;let Me=me%e.w,pe=Math.floor(me/e.w);O.some(xe=>xe.id!==m.id&&xe.x===Me&&xe.y===pe&&xe.hp>0)||w.push({gx:Me,gy:pe,dist:le})});let B=Uu(m),H=rc(),q=Du(m.player),z=.25,Y=.03,re=m.maxHp>0&&m.hp/m.maxHp<z,de=m.maxHp>0&&m.hp/m.maxHp<Y,Te=m.level===2,ee=le=>O.some(me=>me.hp>0&&me.x===le.gx&&me.y===le.gy&&me.id!==m.id),se=H.filter(le=>!ee(le)),ve=q.filter(le=>!ee(le)),rt=Wr(m).filter(le=>!le.disabled&&m.mp>=le.cost&&le.target==="enemy"),Xe=rt.length>0?Math.max(...rt.map(le=>le.range||0)):0,lt=Math.max(m.range!=null?m.range:1,Xe);function Dt(le,me){if(me.length===0)return null;let Me=null,pe=1/0;for(let fe of le){let xe=0;for(let we of me)xe+=ai(fe.gx,fe.gy,we.gx,we.gy);xe<pe&&(pe=xe,Me=fe)}return Me}function Nt(le,me){if(me.length===0||le.length===0)return null;let Me=null,pe=1/0;for(let fe of le){let xe=Math.min(...me.map(we=>ai(fe.gx,fe.gy,we.gx,we.gy)));xe<pe&&(pe=xe,Me=fe)}return Me}function Jt(le,me){let Me=lt,pe=[];for(let fe of O){if(fe.hp<=0||fe.player===m.player)continue;let xe=ai(le,me,fe.x,fe.y);xe<=Me&&xe>0&&bs(e,le,me,fe.x,fe.y)&&pe.push({target:fe,dist:xe})}return pe}let un=new Set(w.map(le=>le.gy*e.w+le.gx));function Bt(le,me){if(!le||le.length<=1)return null;let Me=Math.min(me,le.length-1);for(let pe=Me;pe>=1;pe--){let fe=le[pe],xe=fe.y*e.w+fe.x;if(un.has(xe))return{gx:fe.x,gy:fe.y}}return null}function Pt(le,me){if(!le||le.length<=1)return null;let Me=Math.min(me,le.length-1);for(let pe=Me;pe>=1;pe--){let fe=le[pe];if(!O.some(we=>we.id!==m.id&&we.hp>0&&we.x===fe.x&&we.y===fe.y))return{gx:fe.x,gy:fe.y}}return null}function gt(le){let me=null,Me=null,pe=1/0;for(let fe of le){let xe=ss(e,m.x,m.y,fe.gx,fe.gy,O,m);xe&&xe.length>1&&xe.length<pe&&(pe=xe.length,me=xe,Me=fe)}return me&&Me?{path:me,target:Me}:null}function Gt(le){let me=le??w;if(me.length===0)return null;let Me=O.filter(xe=>xe.hp>0&&xe.player!==m.player);if(Me.length===0)return me[0];let pe=null,fe=-1;for(let xe of me){let we=Math.min(...Me.map(_e=>ai(xe.gx,xe.gy,_e.x,_e.y)));we>fe&&(fe=we,pe=xe)}return pe}function vt(le){let me=le??w;if(me.length===0)return null;let Me=O.filter(_e=>_e.hp>0&&_e.player!==m.player),pe=O.filter(_e=>_e.hp>0&&_e.player===m.player&&_e.id!==m.id);if(Me.length===0)return me[0];let fe=m.maxHp>0&&m.hp/m.maxHp>=.6,xe=null,we=-1/0;for(let _e of me){let at=Math.min(...Me.map(Ne=>ai(_e.gx,_e.gy,Ne.x,Ne.y))),Ae=pe.length>0?Math.min(...pe.map(Ne=>ai(_e.gx,_e.gy,Ne.x,Ne.y))):999,be;fe?be=Ae<at?at-1e3:at:be=at-Ae,be>we&&(we=be,xe=_e)}return xe}function jt(){let le=lt,me=O.filter(fe=>fe.hp>0&&fe.player!==m.player);if(me.length===0)return null;let Me=null,pe=-1;for(let fe of w){let xe=Math.min(...me.map(_e=>ai(fe.gx,fe.gy,_e.x,_e.y)));me.some(_e=>ai(fe.gx,fe.gy,_e.x,_e.y)<=le)&&xe>pe&&(pe=xe,Me=fe)}return Me}if(mn){if(qt){Kt();return}if(Ms-Ct<=20&&H.length>0){let we=H.some(_e=>_e.gx===m.x&&_e.gy===m.y);if(we&&w.length>0){let _e=new Set(H.map(be=>be.gy*e.w+be.gx)),Ae=w.filter(be=>_e.has(be.gy*e.w+be.gx)).filter(be=>be.gx!==m.x||be.gy!==m.y);if(Ae.length>0){let be=Gt(Ae);if(be&&(be.gx!==m.x||be.gy!==m.y)){Vt(m,be.gx,be.gy,()=>setTimeout(Kt,400));return}}Kt();return}if(we){Kt();return}if(w.length>0){let _e=se.length>0?se:H,at=gt(_e),Ae=at?Pt(at.path,ce(m,"agi")):null;if(Ae&&(Ae.gx!==m.x||Ae.gy!==m.y)){Vt(m,Ae.gx,Ae.gy,()=>setTimeout(Kt,400));return}let be=Nt(w,_e);if(be&&(be.gx!==m.x||be.gy!==m.y)){Vt(m,be.gx,be.gy,()=>setTimeout(Kt,400));return}}Kt();return}if(!re&&w.length>0){if(H.length>0&&!H.some(_e=>_e.gx===m.x&&_e.gy===m.y)){let _e=se.length>0?se:H,at=gt(_e),Ae=at?Pt(at.path,ce(m,"agi")):null;if(Ae&&(Ae.gx!==m.x||Ae.gy!==m.y)){Vt(m,Ae.gx,Ae.gy,()=>setTimeout(Kt,400));return}let be=Nt(w,_e);if(be&&(be.gx!==m.x||be.gy!==m.y)){Vt(m,be.gx,be.gy,()=>setTimeout(Kt,400));return}}if(Te&&q.length>0&&!q.some(_e=>_e.gx===m.x&&_e.gy===m.y)){let _e=ve.length>0?ve:q,at=gt(_e),Ae=at?Pt(at.path,ce(m,"agi")):null;if(Ae&&(Ae.gx!==m.x||Ae.gy!==m.y)){Vt(m,Ae.gx,Ae.gy,()=>setTimeout(Kt,400));return}let be=Nt(w,_e);if(be&&(be.gx!==m.x||be.gy!==m.y)){Vt(m,be.gx,be.gy,()=>setTimeout(Kt,400));return}}}let me=new Set(H.map(we=>we.gy*e.w+we.gx)),Me=H.length>0?w.filter(we=>me.has(we.gy*e.w+we.gx)):null,pe=Me!=null&&Me.length>0?Me:w,fe=O.filter(we=>we.hp>0&&we.player===m.player&&we.id!==m.id),xe=null;if(pe.length>0&&fe.length>0&&(xe=vt(pe),xe)){let we=ss(e,m.x,m.y,xe.gx,xe.gy,O,m),_e=we?we.length-1:1/0;(!we||we.length<=1||_e>ce(m,"agi"))&&(xe=Gt(pe))}if(!xe&&pe.length>0&&(xe=Gt(pe)),xe&&(xe.gx!==m.x||xe.gy!==m.y)){Vt(m,xe.gx,xe.gy,()=>setTimeout(Kt,400));return}Kt();return}if(de&&Ms-Ct>20&&!qt&&w.length>0){let le=null,me=1/0;for(let pe of w){let xe=Jt(pe.gx,pe.gy).filter(we=>we.target.maxHp>0&&we.target.hp/we.target.maxHp<z);if(xe.length>0){let we=Math.min(...xe.map(_e=>_e.target.hp));we<me&&(me=we,le=pe)}}if(le){let pe=ss(e,m.x,m.y,le.gx,le.gy,O,m),fe=pe?Bt(pe,ce(m,"agi")):null;if(fe&&(fe.gx!==m.x||fe.gy!==m.y)){Vt(m,fe.gx,fe.gy,()=>setTimeout(gn,600));return}}let Me=Gt();if(Me&&(Me.gx!==m.x||Me.gy!==m.y)){Vt(m,Me.gx,Me.gy,()=>setTimeout(gn,600));return}Kt();return}if(!mn){let at=function(We){return cr(m,We,O).filter(bt=>bt.targetUnit!=null).map(bt=>bt.targetUnit)},le=Wr(m),me=m.maxHp>0?m.hp/m.maxHp:1,Me=.35,pe=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct"]),fe=new Set(["chakra","sacrifice"]),xe=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),we=new Set(["manaDrain","impale","poison"]),_e=new Set(["dominate","weaken","cripple","hex","blind","raid"]),Ae={showFloatingCombatText:Jn,handleUnitDeath:En,updateUnitSlashVisibility:X,updateTurnUI:Ft,world:e,units:O,updateUnitPosition(We){let ot=Z.get(We.id);ot&&ot.position.copy(oe(We.x,We.y))},animateKnockback(We,ot,bt,an,en,sn){let Wt=Z.get(We.id);if(!Wt){sn&&sn();return}let In=oe(ot,bt).clone(),Yr=oe(an,en).clone(),Ku=performance.now(),pc=0;function mc(Ju){pc++,pc%2===0&&E();let gc=Math.min(1,(Ju-Ku)/io),ju=yo=>yo*yo*(3-2*yo);Wt.position.lerpVectors(In,Yr,ju(gc)),gc<1?requestAnimationFrame(mc):(Wt.position.copy(Yr),sn&&sn())}requestAnimationFrame(mc)}},be=null,Ne=null,It=B.some(We=>We.target.maxHp>0&&We.target.hp/We.target.maxHp<z),$t=It||w.some(We=>Jt(We.gx,We.gy).some(bt=>bt.target.maxHp>0&&bt.target.hp/bt.target.maxHp<z));if(!$t){for(let ot of le)if(!ot.disabled&&fe.has(ot.effectKey)){let an=cr(m,ot,O).filter(en=>en.targetUnit&&en.targetUnit.maxHp>0&&en.targetUnit.hp/en.targetUnit.maxHp<.5);if(an.length>0){let en=an.sort((sn,Wt)=>sn.targetUnit.hp-Wt.targetUnit.hp)[0].targetUnit;be=ot,Ne=en;break}}}if(!be&&!$t&&(B.length>0||w.some(ot=>Jt(ot.gx,ot.gy).length>0)))for(let ot of le){if(ot.disabled)continue;let bt=m.tempBuff&&m.tempBuff.duration>0;if(xe.has(ot.effectKey)){if(ot.target==="self"){if(ot.effectKey==="bloodlust"&&m.hp/m.maxHp>.8)continue;if(!bt){be=ot,Ne=m;break}}if(ot.target==="ally"){if(ot.effectKey==="forge"&&bt||ot.effectKey==="fortify"&&bt||ot.effectKey==="mantra"&&bt||ot.effectKey==="sanctuary"&&bt)continue;let en=cr(m,ot,O).filter(sn=>sn.targetUnit!=null).map(sn=>sn.targetUnit);if(en.length>0){let sn=en.filter(In=>!In.tempBuff||In.tempBuff.duration<=0),Wt=(sn.length>0?sn:en).sort((In,Yr)=>In.hp-Yr.hp)[0];be=ot,Ne=Wt;break}}}}if(!be){for(let We of le)if(!We.disabled&&pe.has(We.effectKey)){if(We.effectKey==="feast"&&m.hp/m.maxHp>.7||We.effectKey==="berserk"&&m.hp/m.maxHp<.25||We.effectKey==="shuriken"&&B.length>0||We.effectKey==="judgement"&&m.hp/m.maxHp>.7)continue;let ot=at(We);if(ot.length===0)continue;let bt=ot.filter(Wt=>Wt.maxHp>0&&Wt.hp/Wt.maxHp<Me),an=(Wt,In)=>ce(Wt,"int")-ce(In,"int")||Wt.hp-In.hp,en=(Wt,In)=>Wt.hp-In.hp,sn=bt.length>0?We.type==="spell"?bt.sort(an)[0]:bt.sort(en)[0]:We.type==="spell"?ot.sort(an)[0]:ot.sort(en)[0];be=We,Ne=sn;break}}if(!be&&!It){for(let We of le)if(!We.disabled&&_e.has(We.effectKey)){let bt=at(We).sort((an,en)=>an.hp-en.hp)[0];be=We,Ne=bt;break}}if(!be&&!It){for(let We of le)if(!We.disabled&&we.has(We.effectKey)){let bt=at(We).filter(an=>!an.tempDebuff||an.tempDebuff.duration<=0);if(bt.length>0){let an=bt.sort((en,sn)=>en.hp-sn.hp)[0];be=We,Ne=an;break}}}if(be&&Ne){m.mp-=be.cost,mn=!0;let We=be.target==="self"?m:Ne;Gr(m,We,be,Ae,()=>setTimeout(gn,600));return}}if(Nu(m)&&B.length>0){B.sort((me,Me)=>me.target.hp-Me.target.hp||me.dist-Me.dist);let le=B[0].target;ac(m,le);return}if(B.length>0){B.sort((me,Me)=>me.target.hp-Me.target.hp||me.dist-Me.dist);let le=B[0].target;ac(m,le);return}let Qt=Ms-Ct;if(Qt<=20&&H.length>0&&!qt&&w.length>0&&!H.some(me=>me.gx===m.x&&me.gy===m.y)){let me=se.length>0?se:H,Me=gt(me),pe=Me?Me.path:null,fe=(Ne,It)=>Math.min(...H.map($t=>ai(Ne,It,$t.gx,$t.gy))),xe=fe(m.x,m.y),we=null,_e=-1,at=z;for(let Ne of w){if(fe(Ne.gx,Ne.gy)>xe||Jt(Ne.gx,Ne.gy).filter(bt=>bt.target.maxHp>0&&bt.target.hp/bt.target.maxHp<at).length===0)continue;let We=pe?pe.findIndex(bt=>bt.x===Ne.gx&&bt.y===Ne.gy):-1,ot=We>=0?We:0;ot>_e&&(_e=ot,we=Ne)}if(we&&(we.gx!==m.x||we.gy!==m.y)){Vt(m,we.gx,we.gy,()=>setTimeout(gn,600));return}let Ae=Me?Pt(Me.path,ce(m,"agi")):null;if(Ae&&(Ae.gx!==m.x||Ae.gy!==m.y)){Vt(m,Ae.gx,Ae.gy,()=>setTimeout(gn,600));return}let be=Nt(w,me);if(be&&(be.gx!==m.x||be.gy!==m.y)){Vt(m,be.gx,be.gy,()=>setTimeout(gn,600));return}}if(re&&w.length>0&&!qt){let le=null,me=1/0;for(let Me of w){let fe=Jt(Me.gx,Me.gy).filter(xe=>xe.target.maxHp>0&&xe.target.hp/xe.target.maxHp<z);if(fe.length>0){let xe=Math.min(...fe.map(we=>we.target.hp));xe<me&&(me=xe,le=Me)}}if(le){let Me=ss(e,m.x,m.y,le.gx,le.gy,O,m),pe=Me?Bt(Me,ce(m,"agi")):null;if(pe&&(pe.gx!==m.x||pe.gy!==m.y)){Vt(m,pe.gx,pe.gy,()=>setTimeout(gn,600));return}}if(Qt>20&&Te&&q.length>0&&!q.some(pe=>pe.gx===m.x&&pe.gy===m.y)){let pe=ve.length>0?ve:q,fe=gt(pe);if(fe!=null&&fe.path.length<=5){let we=Pt(fe.path,ce(m,"agi"));if(we&&(we.gx!==m.x||we.gy!==m.y)){Vt(m,we.gx,we.gy,()=>setTimeout(gn,600));return}let _e=Nt(w,pe);if(_e&&(_e.gx!==m.x||_e.gy!==m.y)){Vt(m,_e.gx,_e.gy,()=>setTimeout(gn,600));return}}}if(Qt>20){let Me=Gt();if(Me&&ai(m.x,m.y,Me.gx,Me.gy)>0){Vt(m,Me.gx,Me.gy,()=>setTimeout(gn,600));return}Kt();return}}if(Qt<=10&&H.length>0&&!qt&&w.length>0&&!H.some(me=>me.gx===m.x&&me.gy===m.y)){let me=se.length>0?se:H,Me=gt(me),pe=Me?Pt(Me.path,ce(m,"agi")):null;if(pe&&(pe.gx!==m.x||pe.gy!==m.y)){Vt(m,pe.gx,pe.gy,()=>setTimeout(gn,600));return}let fe=Nt(w,me);if(fe&&(fe.gx!==m.x||fe.gy!==m.y)){Vt(m,fe.gx,fe.gy,()=>setTimeout(gn,600));return}}if(m.level===1&&H.length>0&&!qt&&!H.some(me=>me.gx===m.x&&me.gy===m.y)&&w.length>0){let me=se.length>0?se:H,Me=gt(me),pe=Me?Pt(Me.path,ce(m,"agi")):null;if(pe&&(pe.gx!==m.x||pe.gy!==m.y)){Vt(m,pe.gx,pe.gy,()=>setTimeout(gn,600));return}let fe=Nt(w,me);if(fe&&(fe.gx!==m.x||fe.gy!==m.y)){Vt(m,fe.gx,fe.gy,()=>setTimeout(gn,600));return}}if(Te&&q.length>0&&!qt&&!q.some(me=>me.gx===m.x&&me.gy===m.y)&&w.length>0){let Me=O.filter(Ae=>Ae.hp>0&&Ae.player!==m.player).filter(Ae=>Ae.maxHp>0&&Ae.hp/Ae.maxHp<z),pe=null,fe=1/0;for(let Ae of w){let Ne=Jt(Ae.gx,Ae.gy).find(It=>Me.some($t=>$t.id===It.target.id));Ne&&Ne.target.hp<fe&&(fe=Ne.target.hp,pe=Ae)}if(pe){let Ae=ss(e,m.x,m.y,pe.gx,pe.gy,O,m),be=Ae?Bt(Ae,ce(m,"agi")):null;if(be&&(be.gx!==m.x||be.gy!==m.y)){Vt(m,be.gx,be.gy,()=>setTimeout(gn,600));return}}let xe=ve.length>0?ve:q,we=gt(xe),_e=we?Pt(we.path,ce(m,"agi")):null;if(_e&&(_e.gx!==m.x||_e.gy!==m.y)){Vt(m,_e.gx,_e.gy,()=>setTimeout(gn,600));return}let at=Nt(w,xe);if(at&&(at.gx!==m.x||at.gy!==m.y)){Vt(m,at.gx,at.gy,()=>setTimeout(gn,600));return}}let Tn=O.filter(le=>le.hp>0&&le.player!==m.player);if(m.level>=2&&lt>=2&&Tn.length>0&&!qt&&w.length>0){let le=jt();if(le&&(le.gx!==m.x||le.gy!==m.y)){Vt(m,le.gx,le.gy,()=>setTimeout(gn,600));return}}if(Tn.length>0&&!qt&&w.length>0){let me=function(pe,fe){let xe=null;for(let we=-le;we<=le;we++)for(let _e=-le;_e<=le;_e++){if(_e===0&&we===0||Math.abs(_e)+Math.abs(we)>le)continue;let at=pe.x+_e,Ae=pe.y+we;if(at<0||at>=e.w||Ae<0||Ae>=e.h||!rr(e,at,Ae)||!bs(e,at,Ae,pe.x,pe.y)||O.some(We=>We.hp>0&&We.x===at&&We.y===Ae))continue;let Ne=ss(e,m.x,m.y,at,Ae,O,m),It=Ne?Ne.length-1:1/0;Ne&&Ne.length>1&&(!fe||It<=ce(m,"agi"))&&(!xe||Ne.length<xe.length)&&(xe=Ne)}return xe},le=lt,Me=[];for(let pe of Tn){let fe=me(pe,!0);fe&&Me.push({enemy:pe,path:fe})}if(Me.length>0){let pe=Me.filter(_e=>_e.enemy.maxHp>0&&_e.enemy.hp/_e.enemy.maxHp<z),fe=pe.length>0?pe:Me;pe.length>0?fe.sort((_e,at)=>_e.enemy.hp-at.enemy.hp||_e.path.length-at.path.length):fe.sort((_e,at)=>_e.path.length-at.path.length||_e.enemy.hp-at.enemy.hp);let xe=fe[0],we=Bt(xe.path,ce(m,"agi"));if(we&&(we.gx!==m.x||we.gy!==m.y)){Vt(m,we.gx,we.gy,()=>setTimeout(gn,600));return}}if(Me.length===0){let pe=null,fe=1/0;for(let xe of Tn){let we=me(xe,!1);we&&we.length<fe&&(fe=we.length,pe=we)}if(pe){let xe=Bt(pe,ce(m,"agi"));if(xe&&(xe.gx!==m.x||xe.gy!==m.y)){Vt(m,xe.gx,xe.gy,()=>setTimeout(gn,600));return}}}}Kt()}function hn(){for($n.length=0;zn.children.length;){let x=zn.children[0];zn.remove(x),x.geometry!==hr&&x.geometry!==ur&&x.geometry.dispose(),x.material.dispose()}E()}let Es=new Set;function Wr(x){return!x||!x.class?[]:Eu[x.class]?Eu[x.class].map(m=>({...m,disabled:m.disabled===!0||x.level<m.level||m.hpCost&&x.hp<m.hpCost||m.cost&&x.mp<m.cost})):[]}function cr(x,m,R){let w=[],B=(q,z,Y,re)=>Math.abs(q-Y)+Math.abs(z-re),H=m.range||0;if(m.target==="self")return w.push({gx:x.x,gy:x.y,targetUnit:null}),w;for(let q of R)q.hp<=0||B(x.x,x.y,q.x,q.y)>H||H>2&&!bs(e,x.x,x.y,q.x,q.y)||(m.target==="enemy"&&q.player!==x.player&&w.push({gx:q.x,gy:q.y,targetUnit:q}),m.target==="ally"&&q.player===x.player&&w.push({gx:q.x,gy:q.y,targetUnit:q}));return w}function Fu(x,m){let R=m.range||0;if(m.target==="self")return[{gx:x.x,gy:x.y}];let w=wu(e,x.x,x.y,R),B=[];return w.forEach((H,q)=>{let z=q%e.w,Y=q/e.w|0;R>2&&!bs(e,x.x,x.y,z,Y)||B.push({gx:z,gy:Y})}),B}function Bu(x,m){let R=cr(x,m,O);Es=new Set(R.map(B=>`${B.gx},${B.gy}`));let w=m.target==="self"?R:Fu(x,m);hn(),w.forEach(({gx:B,gy:H})=>{let z=(Yn+e.height[H][B]*.35)/2+Yn/2,Y=B*St-Ce+St/2,re=H*St-te+St/2,de=z+.01,Te=new fn({color:8926122,transparent:!0,opacity:.4,side:dn}),ee=new Je(hr,Te);ee.rotation.x=-Math.PI/2,ee.position.set(Y,de,re),zn.add(ee),$n.push(Te);let se=new fn({color:11167436,transparent:!0,opacity:.7,side:dn}),ve=new Je(ur,se);ve.rotation.x=-Math.PI/2,ve.position.set(Y,de+.01,re),ve.userData.gx=B,ve.userData.gy=H,zn.add(ve),$n.push(se)})}let oc=.82,lc=1.02,hr=new Fi(lc,lc),ur=new Fi(oc,oc);function ku(x){hn(),x.forEach(({gx:m,gy:R})=>{let B=(Yn+e.height[R][m]*.35)/2+Yn/2,H=m*St-Ce+St/2,q=R*St-te+St/2,z=B+.01,Y=new fn({color:2271812,transparent:!0,opacity:.4,side:dn}),re=new Je(hr,Y);re.rotation.x=-Math.PI/2,re.position.set(H,z,q),zn.add(re),$n.push(Y);let de=new fn({color:4508774,transparent:!0,opacity:.7,side:dn}),Te=new Je(ur,de);Te.rotation.x=-Math.PI/2,Te.position.set(H,z+.01,q),Te.userData.gx=m,Te.userData.gy=R,zn.add(Te),$n.push(de)}),E()}function po(x){hn(),x.forEach((m,R)=>{if(m===0)return;let w=R%e.w,B=R/e.w|0,q=(Yn+e.height[B][w]*.35)/2+Yn/2,z=w*St-Ce+St/2,Y=B*St-te+St/2,re=q+.01,de=new fn({color:3381759,transparent:!0,opacity:.35,side:dn}),Te=new Je(hr,de);Te.rotation.x=-Math.PI/2,Te.position.set(z,re,Y),zn.add(Te),$n.push(de);let ee=new fn({color:6730751,transparent:!0,opacity:.65,side:dn}),se=new Je(ur,ee);se.rotation.x=-Math.PI/2,se.position.set(z,re+.01,Y),zn.add(se),$n.push(ee)}),E()}function Hu(x){hn(),x.forEach((m,R)=>{if(m===0)return;let w=R%e.w,B=R/e.w|0,q=(Yn+e.height[B][w]*.35)/2+Yn/2,z=w*St-Ce+St/2,Y=B*St-te+St/2,re=q+.01,de=new fn({color:10035746,transparent:!0,opacity:.4,side:dn}),Te=new Je(hr,de);Te.rotation.x=-Math.PI/2,Te.position.set(z,re,Y),zn.add(Te),$n.push(de);let ee=new fn({color:13386820,transparent:!0,opacity:.7,side:dn}),se=new Je(ur,ee);se.rotation.x=-Math.PI/2,se.position.set(z,re+.01,Y),zn.add(se),$n.push(ee)}),E()}let Hi=new ja,zi=new ze;function Xr(x,m){let R=t.getBoundingClientRect();return zi.x=(x-R.left)/R.width*2-1,zi.y=-((m-R.top)/R.height)*2+1,{x:zi.x,y:zi.y}}function zu(x,m){if(At)return;zi.x=x,zi.y=m,Hi.setFromCamera(zi,a);let R=Hi.intersectObjects(ae.children,!0);if(R.length===0)return;let w=null;for(let z of R){let Y=z.object;for(;Y&&(Y.userData.gx==null||Y.userData.gy==null);)Y=Y.parent;if(Y&&Y.userData.gx!=null){w=Y;break}}if(!w||w.userData.gx==null)return;let B=w.userData.gx,H=w.userData.gy;if(Ge==="draft"&&N){let z=H*e.w+B;Pe.has(z)&&ar(B,H);return}if(Ge!=="playing"||ke==="cvcpu")return;if(vn&&Mn){let z=he[Ie],Y=O.find(se=>se.id===z&&se.hp>0);if(Y&&B===Y.x&&H===Y.y){vn=!1,Mn=null,Es=new Set,hn(),qt?ut=new Map:(ut=lo(e,Y.x,Y.y,ce(Y,"agi"),O,Y),po(ut)),Ft();return}let re=`${B},${H}`;if(!Es.has(re))return;if(!Y||Y.mp<Mn.cost){vn=!1,Mn=null,hn(),Ft();return}let de=O.find(se=>se.x===B&&se.y===H&&se.hp>0);if(Mn.target==="enemy"&&(!de||de.player===Y.player)||Mn.target==="ally"&&de&&de.player!==Y.player||Mn.target==="self"&&(B!==Y.x||H!==Y.y)||Mn.target==="enemy"&&!de)return;Y.mp-=Mn.cost,mn=!0;let Te={showFloatingCombatText:Jn,handleUnitDeath:En,updateUnitSlashVisibility:X,updateTurnUI:Ft,world:e,units:O,updateUnitPosition(se){let ve=Z.get(se.id);ve&&ve.position.copy(oe(se.x,se.y))},animateKnockback(se,ve,rt,Xe,lt,Dt){let Nt=Z.get(se.id);if(!Nt){Dt&&Dt();return}let Jt=oe(ve,rt).clone(),un=oe(Xe,lt).clone(),Bt=performance.now(),Pt=0;function gt(Gt){Pt++,Pt%2===0&&E();let vt=Math.min(1,(Gt-Bt)/io),jt=Qt=>Qt*Qt*(3-2*Qt);Nt.position.lerpVectors(Jt,un,jt(vt)),vt<1?requestAnimationFrame(gt):(Nt.position.copy(un),Dt&&Dt())}requestAnimationFrame(gt)}},ee=Mn.target==="self"?Y:de||null;Gr(Y,ee,Mn,Te,()=>{hn(),vn=!1,Mn=null,Es=new Set,qt?Kt():Ft()});return}if(fi){let z=he[Ie],Y=O.find(de=>de.id===z),re=Z.get(z);if(Y&&re&&Un.length>0){let de=oe(Y.x,Y.y),Te=oe(B,H),ee=Te.x-de.x,se=Te.z-de.z,ve=ee*ee+se*se>1e-6?Math.atan2(ee,se):re.rotation.y;re.rotation.y=si(ve)}Kt();return}if(Oe!=null&&zt){let z=O.find(de=>de.id===Oe);if(!z||z.player!==je)return;let Y=H*e.w+B,re=O.find(de=>de.x===B&&de.y===H&&de.hp>0);if(re&&re.id===he[Ie]&&re.player===je){zt=!1,Oe=re.id,qt?(hn(),ut=new Map):(ut=lo(e,re.x,re.y,ce(re,"agi"),O,re),po(ut)),Ft();return}if(!ut.has(Y)||ut.get(Y)===0)return;if(re&&re.player!==je){let de=ce(re,"agi")*.7+ce(re,"luk")*.3;if(Math.random()*Math.max(.001,de)<=ce(z,"dex")){let se=ce(z,"str")*.7+ce(z,"dex")*.1+ce(z,"int")*.07-(ce(re,"vit")*.3+ce(re,"luk")*.1),ve=Math.max(1,Math.floor(se));re.hp=Math.max(0,re.hp-ve),Jn(re.x,re.y,String(ve),!1),re.hp<=0&&En(re),X(re)}else Jn(re.x,re.y,"MISS",!0);mn=!0,Oe=null,zt=!1,hn(),qt?Kt():Ft()}return}let q=O.find(z=>z.x===B&&z.y===H&&z.hp>0);if(q){if(q.id===he[Ie]&&q.player===je){pn(),Oe=q.id,zt=!1,qt?(hn(),ut=new Map):(ut=lo(e,B,H,ce(q,"agi"),O,q),po(ut)),Ft();return}hn(),ut=new Map,zt=!1,xn(q),Ft();return}if(pn(),Oe!=null){let se=function(){if(ee>=de.length){z.x=de[de.length-1].x,z.y=de[de.length-1].y,At=!1,Qe(Te),nt(),ut=new Map,qt=!0,mn?Kt():Ft();return}let ve=de[ee-1],rt=de[ee],Xe=oe(ve.x,ve.y).clone(),lt=oe(rt.x,rt.y).clone(),Dt=lt.x-Xe.x,Nt=lt.z-Xe.z;Dt*Dt+Nt*Nt>1e-6&&(Te.rotation.y=Math.atan2(Dt,Nt));let Jt=performance.now(),un=0;function Bt(Pt){un++,un%2===0&&E();let gt=Math.min(1,(Pt-Jt)/io),vt=(jt=>jt*jt*(3-2*jt))(gt);if(Te.position.lerpVectors(Xe,lt,vt),ht(Te,vt),p){let jt=a.position.distanceTo(h),Qt=jt<.1?o:jt;f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),h.lerp(Te.position,l),a.position.copy(h).add(f.clone().multiplyScalar(Qt)),a.lookAt(h)}gt<1?requestAnimationFrame(Bt):(ee++,se())}requestAnimationFrame(Bt)};if(zt)return;let z=O.find(ve=>ve.id===Oe);if(!z||z.player!==je)return;let Y=H*e.w+B;if(!ut.has(Y)||ut.get(Y)===0||O.some(ve=>ve.id!==z.id&&ve.x===B&&ve.y===H&&ve.hp>0)||At||qt)return;let de=ss(e,z.x,z.y,B,H,O,z);if(!de||de.length<=1)return;Oe=null,hn(),At=!0,p=!0,nt(z.id);let Te=Z.get(z.id),ee=1;se()}}function cc(x){S.x=x.clientX,S.y=x.clientY,M=x.ctrlKey,_=Xr(x.clientX,x.clientY),t.style.cursor=(x.ctrlKey,"grabbing")}function mo(x){return x.touches&&x.touches.length>0?{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}:x.changedTouches&&x.changedTouches.length>0?{clientX:x.changedTouches[0].clientX,clientY:x.changedTouches[0].clientY}:{clientX:x.clientX,clientY:x.clientY}}function hc(x){if(!x||x.length<2)return 0;let m=x[0],R=x[1];return Math.hypot(R.clientX-m.clientX,R.clientY-m.clientY)}function Vu(x){if(x.touches.length===2){P=hc(x.touches),_=null;return}if(x.touches.length!==1)return;P=null;let m=mo(x);cc({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function Gu(x){if(x.touches.length===2){x.preventDefault();let R=hc(x.touches);if(P!=null&&P>0){let w=R-P,B=a.position.distanceTo(h),H=Math.max(A,Math.min(D,B-w*Q));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(H)),a.lookAt(h),bi=performance.now()}P=R;return}if(P=null,x.touches.length!==1)return;x.preventDefault();let m=mo(x);uc({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function Wu(x){if(x.touches.length<2&&(P=null),x.touches.length===2||x.changedTouches.length===0)return;let m=mo(x);go({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function uc(x){if(fi){nn(x.clientX,x.clientY);return}if(_==null)return;let m=x.clientX-S.x,R=x.clientY-S.y;if(!v&&!g&&(Math.abs(m)>T||Math.abs(R)>T)&&(x.ctrlKey||M?(g=!0,p=!1):(v=!0,p=!1)),g){W.copy(a.position).sub(h);let w=W.length();if(w<.001)return;let B=Math.atan2(W.x,W.z),H=Math.asin(Math.max(-1,Math.min(1,W.y/w)));B-=m*U,H+=R*U,H=Math.max(I,Math.min(L,H)),W.x=w*Math.cos(H)*Math.sin(B),W.y=w*Math.sin(H),W.z=w*Math.cos(H)*Math.cos(B),a.position.copy(h).add(W),a.lookAt(h),S.x=x.clientX,S.y=x.clientY,bi=performance.now()}else if(v){let w=Xr(x.clientX,x.clientY);d.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,h.y,0)),Hi.setFromCamera(new ze(_.x,_.y),a),Hi.ray.intersectPlane(d,u);let B=u.clone();Hi.setFromCamera(new ze(w.x,w.y),a),Hi.ray.intersectPlane(d,u);let H=B.sub(u);h.add(H),a.position.add(H),a.lookAt(h),_={x:w.x,y:w.y},bi=performance.now()}}function go(x){if(_!=null&&!v&&!g){let m=Xr(x.clientX,x.clientY);zu(m.x,m.y)}_=null,v=!1,g=!1,M=!1,t.style.cursor="grab"}function Xu(x){x.preventDefault();let m=a.position.distanceTo(h),R=Math.max(A,Math.min(D,m+x.deltaY*k));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(R)),a.lookAt(h),bi=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",cc),t.addEventListener("mousemove",uc),t.addEventListener("mouseup",go),t.addEventListener("mouseleave",go),t.addEventListener("touchstart",Vu,{passive:!0}),t.addEventListener("touchmove",Gu,{passive:!1}),t.addEventListener("touchend",Wu,{passive:!0}),t.addEventListener("wheel",Xu,{passive:!1});function dc(){let x=t.clientWidth,m=t.clientHeight;a.aspect=x/m,a.updateProjectionMatrix(),Cn.setSize(x,m),Cn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",dc);let Cn=new Rr({antialias:!1});Cn.setSize(t.clientWidth,t.clientHeight),Cn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Cn.shadowMap.enabled=!0,Cn.shadowMap.type=$l,t.appendChild(Cn.domElement),dc();let qr=document.createElement("div");qr.id="combat-text-layer",t.appendChild(qr);let Si=new F,Vi=new F,qu=1400;function Jn(x,m,R,w,B){let H=document.createElement("div");H.className="combat-text-float "+(w?"miss":"damage")+(B?" "+B:""),H.textContent=R,H.style.position="absolute",qr.appendChild(H);let q=B==="skill-name"?1.7:1.2,z=performance.now();function Y(){Si.copy(oe(x,m)),Si.y+=q,Si.project(a);let Te=t.clientWidth,ee=t.clientHeight;H.style.left=(Si.x*.5+.5)*Te+"px",H.style.top=(1-(Si.y*.5+.5))*ee+"px"}let re=0;function de(){re%2===0&&Y(),re++,performance.now()-z<qu?requestAnimationFrame(de):H.remove()}requestAnimationFrame(de)}let Yu=1500;function $u(x,m){let R=document.createElement("div");R.className="combat-text-float "+(m||"levelup"),R.textContent="LEVEL UP!",R.style.position="absolute",qr.appendChild(R);let w=performance.now(),B=0;function H(){Si.copy(oe(x.x,x.y)),Si.y+=1.2,Si.project(a);let z=t.clientWidth,Y=t.clientHeight;R.style.left=(Si.x*.5+.5)*z+"px",R.style.top=(1-(Si.y*.5+.5))*Y+"px"}function q(){B%2===0&&H(),B++,performance.now()-w<Yu?requestAnimationFrame(q):R.remove()}requestAnimationFrame(q)}function En(x){console.log("[DEATH]",`${x.name} (${x.class}, P${x.player})`,`at (${x.x},${x.y})`,`Lv.${x.level}`),Jn(x.x,x.y,"DEAD",!1);let m=Z.get(x.id);if(!m){nt(),fc();return}let R=performance.now();function w(B){E();let H=B-R,q=Math.min(1,H/ye),z=q*q;m.rotation.x=z*Math.PI*.5,q<1?requestAnimationFrame(w):(n.remove(m),Z.delete(x.id),nt(),fc())}requestAnimationFrame(w)}function fc(){if(Ge!=="playing")return;let x=O.some(R=>R.player===1&&R.hp>0),m=O.some(R=>R.player===2&&R.hp>0);x?m||xo(1):xo(2)}function Zu(){let x=rc(),m=new Set(x.map(q=>q.gy*e.w+q.gx)),R=O.filter(q=>q.hp>0&&q.player===1&&m.has(q.y*e.w+q.x)).length,w=O.filter(q=>q.hp>0&&q.player===2&&m.has(q.y*e.w+q.x)).length,B=null,H="";if(R>w)B=1,H=`Time's up! Player 1 wins! (${R} vs ${w} units on center base)`;else if(w>R)B=2,H=`Time's up! Player 2 wins! (${w} vs ${R} units on center base)`;else{let q=O.filter(Y=>Y.hp>0&&Y.player===1).reduce((Y,re)=>Y+re.hp,0),z=O.filter(Y=>Y.hp>0&&Y.player===2).reduce((Y,re)=>Y+re.hp,0);q>z?(B=1,H=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${q} vs ${z})`):z>q?(B=2,H=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${z} vs ${q})`):H=`Draw! (equal units on center: ${R}, equal HP)`}xo(B,H)}function xo(x,m){Ut(),Ge="gameover",document.getElementById("turn-menu").style.display="none",pn(),hn();let R=document.getElementById("game-over-overlay"),w=document.getElementById("game-over-title"),B=document.getElementById("game-over-cards");w.textContent=m??`Player ${x} wins!`;let H=O.filter(q=>q.player===(x??1));B.innerHTML=H.map(q=>{let z=q,Y=q.level>=3?" level-3":q.level>=2?" level-2":"",re=z.maxHp>0&&z.hp/z.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${Y}${re}">
          <img class="game-over-card-image" src="${Br[q.class]||""}" alt="${z.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
      `}).join(""),R.classList.add("visible")}function Ts(x=0){requestAnimationFrame(Ts),bi===0&&(bi=x);let m=x-bi>500,R=0;typeof Ts.frameCount=="number"&&(R=Ts.frameCount),Ts.frameCount=R+1;let w=()=>{if(rs){let B=.6+.4*Math.sin(x*.004);for(let H=0;H<$n.length;H++){let q=H%2===0?.4:.7;$n[H].opacity=q*B}Cn.render(n,a),rs=!1}};m?x-kr>=100&&(kr=x,rs=!0,w()):(Ts.frameCount%2===0&&(rs=!0),w())}Ts()}kx();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
