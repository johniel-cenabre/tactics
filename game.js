var Jl="160";var rd=0,Sc=1,ad=2;var su=1,jl=2,Li=3,es=0,Qn=1,pn=2;var Ji=0,Qs=1,Ec=2,Tc=3,wc=4,od=5,fs=100,ld=101,cd=102,Ac=103,Rc=104,hd=200,ud=201,dd=202,fd=203,rl=204,al=205,pd=206,md=207,gd=208,xd=209,yd=210,_d=211,vd=212,Md=213,bd=214,Sd=0,Ed=1,Td=2,wa=3,wd=4,Ad=5,Rd=6,Cd=7,ru=0,Pd=1,Id=2,ji=0,Ld=1,Dd=2,Ud=3,Nd=4,Od=5,Fd=6;var au=300,nr=301,ir=302,ol=303,ll=304,so=306,Cr=1e3,yi=1001,cl=1002,Xn=1003,Cc=1004;var So=1005;var li=1006,Bd=1007;var Pr=1008;var Qi=1009,kd=1010,Hd=1011,Ql=1012,ou=1013,Zi=1014,Ki=1015,Ir=1016,lu=1017,cu=1018,ms=1020,zd=1021,_i=1023,Vd=1024,Gd=1025,gs=1026,sr=1027,Wd=1028,hu=1029,Xd=1030,uu=1031,du=1033,Eo=33776,To=33777,wo=33778,Ao=33779,Pc=35840,Ic=35841,Lc=35842,Dc=35843,fu=36196,Uc=37492,Nc=37496,Oc=37808,Fc=37809,Bc=37810,kc=37811,Hc=37812,zc=37813,Vc=37814,Gc=37815,Wc=37816,Xc=37817,qc=37818,Yc=37819,$c=37820,Zc=37821,Ro=36492,Kc=36494,Jc=36495,qd=36283,jc=36284,Qc=36285,eh=36286;var Aa=2300,Ra=2301,Co=2302,th=2400,nh=2401,ih=2402;var pu=3e3,xs=3001,Yd=3200,$d=3201,mu=0,Zd=1,ci="",Bn="srgb",Ui="srgb-linear",ec="display-p3",ro="display-p3-linear",Ca="linear",en="srgb",Pa="rec709",Ia="p3";var Ds=7680;var sh=519,Kd=512,Jd=513,jd=514,gu=515,Qd=516,ef=517,tf=518,nf=519,rh=35044;var ah="300 es",hl=1035,Di=2e3,La=2001,ts=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Po=Math.PI/180,ul=180/Math.PI;function hr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function Vn(i,e,t){return Math.max(e,Math.min(t,i))}function sf(i,e){return(i%e+e)%e}function Io(i,e,t){return(1-t)*i+t*e}function oh(i){return(i&i-1)===0&&i!==0}function dl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _r(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ke=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ct=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],y=n[8],v=s[0],g=s[3],p=s[6],M=s[1],_=s[4],T=s[7],U=s[2],I=s[5],L=s[8];return r[0]=a*v+o*M+l*U,r[3]=a*g+o*_+l*I,r[6]=a*p+o*T+l*L,r[1]=c*v+h*M+f*U,r[4]=c*g+h*_+f*I,r[7]=c*p+h*T+f*L,r[2]=d*v+u*M+y*U,r[5]=d*g+u*_+y*I,r[8]=d*p+u*T+y*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,y=t*f+n*d+s*u;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=u*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lo=new Ct;function xu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rf(){let i=Da("canvas");return i.style.display="block",i}var lh={};function Er(i){i in lh||(lh[i]=!0,console.warn(i))}var ch=new Ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hh=new Ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qr={[Ui]:{transfer:Ca,primaries:Pa,toReference:i=>i,fromReference:i=>i},[Bn]:{transfer:en,primaries:Pa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ro]:{transfer:Ca,primaries:Ia,toReference:i=>i.applyMatrix3(hh),fromReference:i=>i.applyMatrix3(ch)},[ec]:{transfer:en,primaries:Ia,toReference:i=>i.convertSRGBToLinear().applyMatrix3(hh),fromReference:i=>i.applyMatrix3(ch).convertLinearToSRGB()}},af=new Set([Ui,ro]),zt={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!af.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Qr[e].toReference,s=Qr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Qr[i].primaries},getTransfer:function(i){return i===ci?Ca:Qr[i].transfer}};function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Do(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,Ua=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=Da("canvas")),Us.width=e.width,Us.height=e.height;let n=Us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Da("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=er(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},of=0,Na=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=hr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uo(s[a].image)):r.push(Uo(s[a]))}else r=Uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lf=0,ui=class i extends ts{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=yi,s=yi,r=li,a=Pr,o=_i,l=Qi,c=i.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=hr(),this.name="",this.source=new Na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===xs?Bn:ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bn?xs:pu}set encoding(e){Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xs?Bn:ci}};ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=au;ui.DEFAULT_ANISOTROPY=1;var On=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],y=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(y+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,T=(u+1)/2,U=(p+1)/2,I=(h+d)/4,L=(f+v)/4,q=(y+g)/4;return _>T&&_>U?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=I/n,r=L/n):T>U?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=I/s,r=q/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=L/r,s=q/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-y)*(g-y)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-y)/M,this.y=(f-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+u+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fl=class extends ts{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new On(0,0,e,t),this.scissorTest=!1,this.viewport=new On(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xs?Bn:ci),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ui(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Na(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oa=class extends ui{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pl=class extends ui{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ns=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],y=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=u,e[t+2]=y,e[t+3]=v;return}if(f!==v||l!==d||c!==u||h!==y){let g=1-o,p=l*d+c*u+h*y+f*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let U=Math.sqrt(_),I=Math.atan2(U,p*M);g=Math.sin(g*I)/U,o=Math.sin(o*I)/U}let T=o*M;if(l=l*g+d*T,c=c*g+u*T,h=h*g+y*T,f=f*g+v*T,g===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=U,c*=U,h*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],y=r[a+3];return e[t]=o*y+h*f+l*u-c*d,e[t+1]=l*y+h*d+c*f-o*u,e[t+2]=c*y+h*u+o*d-l*f,e[t+3]=h*y-o*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),u=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f-d*u*y;break;case"YXZ":this._x=d*h*f+c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f+d*u*y;break;case"ZXY":this._x=d*h*f-c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f-d*u*y;break;case"ZYX":this._x=d*h*f-c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f+d*u*y;break;case"YZX":this._x=d*h*f+c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f-d*u*y;break;case"XZY":this._x=d*h*f-c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f+d*u*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},No=new F,uh=new ns,ys=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pi):pi.fromBufferAttribute(r,a),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),ta.subVectors(this.max,vr),Ns.subVectors(e.a,vr),Os.subVectors(e.b,vr),Fs.subVectors(e.c,vr),Wi.subVectors(Os,Ns),Xi.subVectors(Fs,Os),ls.subVectors(Ns,Fs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ls.z,ls.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ls.z,0,-ls.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ls.y,ls.x,0];return!Oo(t,Ns,Os,Fs,ta)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,Ns,Os,Fs,ta))?!1:(na.crossVectors(Wi,Xi),t=[na.x,na.y,na.z],Oo(t,Ns,Os,Fs,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ai=[new F,new F,new F,new F,new F,new F,new F,new F],pi=new F,ea=new ys,Ns=new F,Os=new F,Fs=new F,Wi=new F,Xi=new F,ls=new F,vr=new F,ta=new F,na=new F,cs=new F;function Oo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){cs.fromArray(i,r);let o=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var cf=new ys,Mr=new F,Fo=new F,rr=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Fo)),this.expandByPoint(Mr.copy(e.center).sub(Fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ri=new F,Bo=new F,ia=new F,qi=new F,ko=new F,sa=new F,Ho=new F,Lr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bo.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Bo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ia),o=qi.dot(this.direction),l=-qi.dot(ia),c=qi.lengthSq(),h=Math.abs(1-a*a),f,d,u,y;if(h>0)if(f=a*l-o,d=a*o-l,y=r*h,f>=0)if(d>=-y)if(d<=y){let v=1/h;f*=v,d*=v,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-y?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=y?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Bo).addScaledVector(ia,d),u}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){ko.subVectors(t,e),sa.subVectors(n,e),Ho.crossVectors(ko,sa);let a=this.direction.dot(Ho),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);let l=o*this.direction.dot(sa.crossVectors(qi,sa));if(l<0)return null;let c=o*this.direction.dot(ko.cross(qi));if(c<0||l+c>a)return null;let h=-o*qi.dot(Ho);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bn=class i{constructor(e,t,n,s,r,a,o,l,c,h,f,d,u,y,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,d,u,y,v,g)}set(e,t,n,s,r,a,o,l,c,h,f,d,u,y,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=y,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*f,y=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+y*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=y+u*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,y=c*h,v=c*f;t[0]=d+v*o,t[4]=y*o-u,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-y,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,y=c*h,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=y+u*o,t[1]=u+y*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,u=a*f,y=o*h,v=o*f;t[0]=l*h,t[4]=y*c-u,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=u*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,u=a*c,y=o*l,v=o*c;t[0]=l*h,t[4]=v-d*f,t[8]=y*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*f+y,t[10]=d-v*f}else if(e.order==="XZY"){let d=a*l,u=a*c,y=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=a*h,t[9]=u*f-y,t[2]=y*f-u,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hf,e,uf)}lookAt(e,t,n){let s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Yi.crossVectors(n,si),Yi.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Yi.crossVectors(n,si)),Yi.normalize(),ra.crossVectors(si,Yi),s[0]=Yi.x,s[4]=ra.x,s[8]=si.x,s[1]=Yi.y,s[5]=ra.y,s[9]=si.y,s[2]=Yi.z,s[6]=ra.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],y=n[2],v=n[6],g=n[10],p=n[14],M=n[3],_=n[7],T=n[11],U=n[15],I=s[0],L=s[4],q=s[8],S=s[12],R=s[1],D=s[5],k=s[9],te=s[13],P=s[2],G=s[6],$=s[10],ae=s[14],N=s[3],se=s[7],Z=s[11],ue=s[15];return r[0]=a*I+o*R+l*P+c*N,r[4]=a*L+o*D+l*G+c*se,r[8]=a*q+o*k+l*$+c*Z,r[12]=a*S+o*te+l*ae+c*ue,r[1]=h*I+f*R+d*P+u*N,r[5]=h*L+f*D+d*G+u*se,r[9]=h*q+f*k+d*$+u*Z,r[13]=h*S+f*te+d*ae+u*ue,r[2]=y*I+v*R+g*P+p*N,r[6]=y*L+v*D+g*G+p*se,r[10]=y*q+v*k+g*$+p*Z,r[14]=y*S+v*te+g*ae+p*ue,r[3]=M*I+_*R+T*P+U*N,r[7]=M*L+_*D+T*G+U*se,r[11]=M*q+_*k+T*$+U*Z,r[15]=M*S+_*te+T*ae+U*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],y=e[3],v=e[7],g=e[11],p=e[15];return y*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*u-n*l*u)+v*(+t*l*u-t*c*d+r*a*d-s*a*u+s*c*h-r*l*h)+g*(+t*c*f-t*o*u-r*a*f+n*a*u+r*o*h-n*c*h)+p*(-s*o*h-t*l*f+t*o*d+s*a*f-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],y=e[12],v=e[13],g=e[14],p=e[15],M=f*g*c-v*d*c+v*l*u-o*g*u-f*l*p+o*d*p,_=y*d*c-h*g*c-y*l*u+a*g*u+h*l*p-a*d*p,T=h*v*c-y*f*c+y*o*u-a*v*u-h*o*p+a*f*p,U=y*f*l-h*v*l-y*o*d+a*v*d+h*o*g-a*f*g,I=t*M+n*_+s*T+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=M*L,e[1]=(v*d*r-f*g*r-v*s*u+n*g*u+f*s*p-n*d*p)*L,e[2]=(o*g*r-v*l*r+v*s*c-n*g*c-o*s*p+n*l*p)*L,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*u-n*l*u)*L,e[4]=_*L,e[5]=(h*g*r-y*d*r+y*s*u-t*g*u-h*s*p+t*d*p)*L,e[6]=(y*l*r-a*g*r-y*s*c+t*g*c+a*s*p-t*l*p)*L,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*u+t*l*u)*L,e[8]=T*L,e[9]=(y*f*r-h*v*r-y*n*u+t*v*u+h*n*p-t*f*p)*L,e[10]=(a*v*r-y*o*r+y*n*c-t*v*c-a*n*p+t*o*p)*L,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*u-t*o*u)*L,e[12]=U*L,e[13]=(h*v*s-y*f*s+y*n*d-t*v*d-h*n*g+t*f*g)*L,e[14]=(y*o*s-a*v*s-y*n*l+t*v*l+a*n*g-t*o*g)*L,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,y=r*f,v=a*h,g=a*f,p=o*f,M=l*c,_=l*h,T=l*f,U=n.x,I=n.y,L=n.z;return s[0]=(1-(v+p))*U,s[1]=(u+T)*U,s[2]=(y-_)*U,s[3]=0,s[4]=(u-T)*I,s[5]=(1-(d+p))*I,s[6]=(g+M)*I,s[7]=0,s[8]=(y+_)*L,s[9]=(g-M)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Bs.set(s[0],s[1],s[2]).length(),a=Bs.set(s[4],s[5],s[6]).length(),o=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);let c=1/r,h=1/a,f=1/o;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=f,mi.elements[9]*=f,mi.elements[10]*=f,t.setFromRotationMatrix(mi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Di){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),u,y;if(o===Di)u=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===La)u=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Di){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(a-r),d=(t+e)*c,u=(n+s)*h,y,v;if(o===Di)y=(a+r)*f,v=-2*f;else if(o===La)y=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new F,mi=new bn,hf=new F(0,0,0),uf=new F(1,1,1),Yi=new F,ra=new F,si=new F,dh=new bn,fh=new ns,Fa=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fa.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},df=0,ph=new F,ks=new ns,Ci=new bn,aa=new F,br=new F,ff=new F,pf=new ns,mh=new F(1,0,0),gh=new F(0,1,0),xh=new F(0,0,1),mf={type:"added"},gf={type:"removed"},Yn=class i extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Fa,n=new ns,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bn},normalMatrix:{value:new Ct}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(xh,e)}translateOnAxis(e,t){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(br,aa,this.up):Ci.lookAt(aa,br,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Ci),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Yn.DEFAULT_UP=new F(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new F,Pi=new F,zo=new F,Ii=new F,Hs=new F,zs=new F,yh=new F,Vo=new F,Go=new F,Wo=new F,oa=!1,Zs=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gi.subVectors(e,t),s.cross(gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gi.subVectors(s,t),Pi.subVectors(n,t),zo.subVectors(e,t);let a=gi.dot(gi),o=gi.dot(Pi),l=gi.dot(zo),c=Pi.dot(Pi),h=Pi.dot(zo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,y=(a*h-o*l)*d;return r.set(1-u-y,y,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,t,n,s,r,a,o,l){return oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oa=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(a,Ii.y),l.addScaledVector(o,Ii.z),l)}static isFrontFacing(e,t,n,s){return gi.subVectors(n,t),Pi.subVectors(e,t),gi.cross(Pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),gi.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oa=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Hs.subVectors(s,n),zs.subVectors(r,n),Vo.subVectors(e,n);let l=Hs.dot(Vo),c=zs.dot(Vo);if(l<=0&&c<=0)return t.copy(n);Go.subVectors(e,s);let h=Hs.dot(Go),f=zs.dot(Go);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Hs,a);Wo.subVectors(e,r);let u=Hs.dot(Wo),y=zs.dot(Wo);if(y>=0&&u<=y)return t.copy(r);let v=u*c-l*y;if(v<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(zs,o);let g=h*y-u*f;if(g<=0&&f-h>=0&&u-y>=0)return yh.subVectors(r,s),o=(f-h)/(f-h+(u-y)),t.copy(s).addScaledVector(yh,o);let p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Hs,a).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},la={h:0,s:0,l:0};function Xo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=zt.workingColorSpace){if(e=sf(e,1),t=Vn(t,0,1),n=Vn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xo(a,r,e+1/3),this.g=Xo(a,r,e),this.b=Xo(a,r,e-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(e,t=Bn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bn){let n=yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return zt.fromWorkingColorSpace(zn.copy(this),e),Math.round(Vn(zn.r*255,0,255))*65536+Math.round(Vn(zn.g*255,0,255))*256+Math.round(Vn(zn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(zn.copy(this),t);let n=zn.r,s=zn.g,r=zn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Bn){zt.fromWorkingColorSpace(zn.copy(this),e);let t=zn.r,n=zn.g,s=zn.b;return e!==Bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(la);let n=Io($i.h,la.h,t),s=Io($i.s,la.s,t),r=Io($i.l,la.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new xt;xt.NAMES=yu;var xf=0,is=class extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Qs,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=al,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mn=class extends is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mn=new F,ca=new ke,ei=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_r(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_r(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_r(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_r(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array),s=jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array),s=jn(s,this.array),r=jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}};var Ba=class extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ka=class extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var cn=class extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}};var yf=0,oi=new bn,qo=new Yn,Vs=new F,ri=new ys,Sr=new ys,Nn=new F,ti=class i extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xu(e)?ka:Ba)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nn.addVectors(ri.min,Sr.min),ri.expandByPoint(Nn),Nn.addVectors(ri.max,Sr.max),ri.expandByPoint(Nn)):(ri.expandByPoint(Sr.min),ri.expandByPoint(Sr.max))}ri.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nn.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),Nn.add(Vs)),s=Math.max(s,n.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new F,h[R]=new F;let f=new F,d=new F,u=new F,y=new ke,v=new ke,g=new ke,p=new F,M=new F;function _(R,D,k){f.fromArray(s,R*3),d.fromArray(s,D*3),u.fromArray(s,k*3),y.fromArray(a,R*2),v.fromArray(a,D*2),g.fromArray(a,k*2),d.sub(f),u.sub(f),v.sub(y),g.sub(y);let te=1/(v.x*g.y-g.x*v.y);isFinite(te)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(u,-v.y).multiplyScalar(te),M.copy(u).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(te),c[R].add(p),c[D].add(p),c[k].add(p),h[R].add(M),h[D].add(M),h[k].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let R=0,D=T.length;R<D;++R){let k=T[R],te=k.start,P=k.count;for(let G=te,$=te+P;G<$;G+=3)_(n[G+0],n[G+1],n[G+2])}let U=new F,I=new F,L=new F,q=new F;function S(R){L.fromArray(r,R*3),q.copy(L);let D=c[R];U.copy(D),U.sub(L.multiplyScalar(L.dot(D))).normalize(),I.crossVectors(q,D);let te=I.dot(h[R])<0?-1:1;l[R*4]=U.x,l[R*4+1]=U.y,l[R*4+2]=U.z,l[R*4+3]=te}for(let R=0,D=T.length;R<D;++R){let k=T[R],te=k.start,P=k.count;for(let G=te,$=te+P;G<$;G+=3)S(n[G+0]),S(n[G+1]),S(n[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let d=0,u=e.count;d<u;d+=3){let y=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,y=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let p=0;p<h;p++)d[y++]=c[u++]}return new ei(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_h=new bn,hs=new Lr,ha=new rr,vh=new F,Gs=new F,Ws=new F,Xs=new F,Yo=new F,ua=new F,da=new ke,fa=new ke,pa=new ke,Mh=new F,bh=new F,Sh=new F,ma=new F,ga=new F,Je=class extends Yn{constructor(e=new ti,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Yo.fromBufferAttribute(f,e),a?ua.addScaledVector(Yo,h):ua.addScaledVector(Yo.sub(t),h))}t.add(ua)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(ha.containsPoint(hs.origin)===!1&&(hs.intersectSphere(ha,vh)===null||hs.origin.distanceToSquared(vh)>(e.far-e.near)**2))&&(_h.copy(r).invert(),hs.copy(e.ray).applyMatrix4(_h),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],p=a[g.materialIndex],M=Math.max(g.start,u.start),_=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let T=M,U=_;T<U;T+=3){let I=o.getX(T),L=o.getX(T+1),q=o.getX(T+2);s=xa(this,p,e,n,c,h,f,I,L,q),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let g=y,p=v;g<p;g+=3){let M=o.getX(g),_=o.getX(g+1),T=o.getX(g+2);s=xa(this,a,e,n,c,h,f,M,_,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],p=a[g.materialIndex],M=Math.max(g.start,u.start),_=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let T=M,U=_;T<U;T+=3){let I=T,L=T+1,q=T+2;s=xa(this,p,e,n,c,h,f,I,L,q),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let g=y,p=v;g<p;g+=3){let M=g,_=g+1,T=g+2;s=xa(this,a,e,n,c,h,f,M,_,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function _f(i,e,t,n,s,r,a,o){let l;if(e.side===Qn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===es,o),l===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ga);return c<t.near||c>t.far?null:{distance:c,point:ga.clone(),object:i}}function xa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Gs),i.getVertexPosition(l,Ws),i.getVertexPosition(c,Xs);let h=_f(i,e,t,n,Gs,Ws,Xs,ma);if(h){s&&(da.fromBufferAttribute(s,o),fa.fromBufferAttribute(s,l),pa.fromBufferAttribute(s,c),h.uv=Zs.getInterpolation(ma,Gs,Ws,Xs,da,fa,pa,new ke)),r&&(da.fromBufferAttribute(r,o),fa.fromBufferAttribute(r,l),pa.fromBufferAttribute(r,c),h.uv1=Zs.getInterpolation(ma,Gs,Ws,Xs,da,fa,pa,new ke),h.uv2=h.uv1),a&&(Mh.fromBufferAttribute(a,o),bh.fromBufferAttribute(a,l),Sh.fromBufferAttribute(a,c),h.normal=Zs.getInterpolation(ma,Gs,Ws,Xs,Mh,bh,Sh,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};Zs.getNormal(Gs,Ws,Xs,f.normal),h.face=f}return h}var wn=class i extends ti{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(f,2));function y(v,g,p,M,_,T,U,I,L,q,S){let R=T/L,D=U/q,k=T/2,te=U/2,P=I/2,G=L+1,$=q+1,ae=0,N=0,se=new F;for(let Z=0;Z<$;Z++){let ue=Z*D-te;for(let Pe=0;Pe<G;Pe++){let ie=Pe*R-k;se[v]=ie*M,se[g]=ue*_,se[p]=P,c.push(se.x,se.y,se.z),se[v]=0,se[g]=0,se[p]=I>0?1:-1,h.push(se.x,se.y,se.z),f.push(Pe/L),f.push(1-Z/q),ae+=1}}for(let Z=0;Z<q;Z++)for(let ue=0;ue<L;ue++){let Pe=d+ue+G*Z,ie=d+ue+G*(Z+1),oe=d+(ue+1)+G*(Z+1),De=d+(ue+1)+G*Z;l.push(Pe,ie,De),l.push(ie,oe,De),N+=6}o.addGroup(u,N,S),u+=N,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wn(i){let e={};for(let t=0;t<i.length;t++){let n=ar(i[t]);for(let s in n)e[s]=n[s]}return e}function vf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _u(i){return i.getRenderTarget()===null?i.outputColorSpace:zt.workingColorSpace}var Mf={clone:ar,merge:Wn},bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oi=class extends is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ha=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=class extends Ha{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Po*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qs=-90,Ys=1,ml=class extends Yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qn(qs,Ys,e,t);s.layers=this.layers,this.add(s);let r=new qn(qs,Ys,e,t);r.layers=this.layers,this.add(r);let a=new qn(qs,Ys,e,t);a.layers=this.layers,this.add(a);let o=new qn(qs,Ys,e,t);o.layers=this.layers,this.add(o);let l=new qn(qs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new qn(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},za=class extends ui{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:nr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gl=class extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===xs?Bn:ci),this.texture=new za(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new Oi({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qn,blending:Ji});r.uniforms.tEquirect.value=t;let a=new Je(s,r),o=t.minFilter;return t.minFilter===Pr&&(t.minFilter=li),new ml(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},$o=new F,Ef=new F,Tf=new Ct,xi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$o.subVectors(n,t).cross(Ef.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tf.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new rr,ya=new F,Ur=class{constructor(e=new xi,t=new xi,n=new xi,s=new xi,r=new xi,a=new xi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],u=s[8],y=s[9],v=s[10],g=s[11],p=s[12],M=s[13],_=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,g-u,T-p).normalize(),n[1].setComponents(l+r,d+c,g+u,T+p).normalize(),n[2].setComponents(l+a,d+h,g+y,T+M).normalize(),n[3].setComponents(l-a,d-h,g-y,T-M).normalize(),n[4].setComponents(l-o,d-f,g-v,T-_).normalize(),t===Di)n[5].setComponents(l+o,d+f,g+v,T+_).normalize();else if(t===La)n[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ya.x=s.normal.x>0?e.max.x:e.min.x,ya.y=s.normal.y>0?e.max.y:e.min.y,ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function vu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,d=c.usage,u=f.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,f){let d=h.array,u=h._updateRange,y=h.updateRanges;if(i.bindBuffer(f,c),u.count===-1&&y.length===0&&i.bufferSubData(f,0,d),y.length!==0){for(let v=0,g=y.length;v<g;v++){let p=y[v];t?i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}var Fi=class i extends ti{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,u=[],y=[],v=[],g=[];for(let p=0;p<h;p++){let M=p*d-a;for(let _=0;_<c;_++){let T=_*f-r;y.push(T,-M,0),v.push(0,0,1),g.push(_/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let _=M+c*p,T=M+c*(p+1),U=M+1+c*(p+1),I=M+1+c*p;u.push(_,T,I),u.push(T,U,I)}this.setIndex(u),this.setAttribute("position",new cn(y,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
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
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
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
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kf=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`
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
}`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
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
}`,mp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
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
#endif`,wp=`struct PhysicalMaterial {
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
}`,Ap=`
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fp=`#if defined( USE_POINTS_UV )
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
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,um=`float getShadowMask() {
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
}`,dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
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
}`,Dm=`#if DEPTH_PACKING == 3200
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
}`,Um=`#define DISTANCE
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
}`,Nm=`#define DISTANCE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
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
}`,km=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,Vm=`#define LAMBERT
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
}`,Gm=`#define LAMBERT
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define MATCAP
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,$m=`#define PHONG
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
}`,Zm=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,Qm=`#define TOON
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
}`,eg=`uniform float size;
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:Af,alphahash_pars_fragment:Rf,alphamap_fragment:Cf,alphamap_pars_fragment:Pf,alphatest_fragment:If,alphatest_pars_fragment:Lf,aomap_fragment:Df,aomap_pars_fragment:Uf,batching_pars_vertex:Nf,batching_vertex:Of,begin_vertex:Ff,beginnormal_vertex:Bf,bsdfs:kf,iridescence_fragment:Hf,bumpmap_pars_fragment:zf,clipping_planes_fragment:Vf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:Yf,color_pars_vertex:$f,color_vertex:Zf,common:Kf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:ep,emissivemap_fragment:tp,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:rp,envmap_common_pars_fragment:ap,envmap_pars_fragment:op,envmap_pars_vertex:lp,envmap_physical_pars_fragment:vp,envmap_vertex:cp,fog_vertex:hp,fog_pars_vertex:up,fog_fragment:dp,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_fragment:mp,lightmap_pars_fragment:gp,lights_lambert_fragment:xp,lights_lambert_pars_fragment:yp,lights_pars_begin:_p,lights_toon_fragment:Mp,lights_toon_pars_fragment:bp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Ep,lights_physical_fragment:Tp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ap,lights_fragment_maps:Rp,lights_fragment_end:Cp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Lp,logdepthbuf_vertex:Dp,map_fragment:Up,map_pars_fragment:Np,map_particle_fragment:Op,map_particle_pars_fragment:Fp,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:kp,morphcolor_vertex:Hp,morphnormal_vertex:zp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Gp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:qp,normal_pars_vertex:Yp,normal_vertex:$p,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:Qp,opaque_fragment:em,packing:tm,premultiplied_alpha_fragment:nm,project_vertex:im,dithering_fragment:sm,dithering_pars_fragment:rm,roughnessmap_fragment:am,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:cm,shadowmap_vertex:hm,shadowmask_pars_fragment:um,skinbase_vertex:dm,skinning_pars_vertex:fm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:xm,tonemapping_fragment:ym,tonemapping_pars_fragment:_m,transmission_fragment:vm,transmission_pars_fragment:Mm,uv_pars_fragment:bm,uv_pars_vertex:Sm,uv_vertex:Em,worldpos_vertex:Tm,background_vert:wm,background_frag:Am,backgroundCube_vert:Rm,backgroundCube_frag:Cm,cube_vert:Pm,cube_frag:Im,depth_vert:Lm,depth_frag:Dm,distanceRGBA_vert:Um,distanceRGBA_frag:Nm,equirect_vert:Om,equirect_frag:Fm,linedashed_vert:Bm,linedashed_frag:km,meshbasic_vert:Hm,meshbasic_frag:zm,meshlambert_vert:Vm,meshlambert_frag:Gm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:$m,meshphong_frag:Zm,meshphysical_vert:Km,meshphysical_frag:Jm,meshtoon_vert:jm,meshtoon_frag:Qm,points_vert:eg,points_frag:tg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},Le={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Ei={basic:{uniforms:Wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Wn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Wn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Wn([Le.points,Le.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Wn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Wn([Le.common,Le.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Wn([Le.sprite,Le.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:Wn([Le.common,Le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:Wn([Le.lights,Le.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ei.physical={uniforms:Wn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var _a={r:0,b:0,g:0};function ag(i,e,t,n,s,r,a){let o=new xt(0),l=r===!0?0:1,c,h,f=null,d=0,u=null;function y(g,p){let M=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===so)?(h===void 0&&(h=new Je(new wn(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:ar(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=zt.getTransfer(_.colorSpace)!==en,(f!==_||d!==_.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,d=_.version,u=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Je(new Fi(2,2),new Oi({name:"BackgroundMaterial",uniforms:ar(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=zt.getTransfer(_.colorSpace)!==en,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,p){g.getRGB(_a,_u(i)),n.buffers.color.setClear(_a.r,_a.g,_a.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:y}}function og(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,h=!1;function f(P,G,$,ae,N){let se=!1;if(a){let Z=v(ae,$,G);c!==Z&&(c=Z,u(c.object)),se=p(P,ae,$,N),se&&M(P,ae,$,N)}else{let Z=G.wireframe===!0;(c.geometry!==ae.id||c.program!==$.id||c.wireframe!==Z)&&(c.geometry=ae.id,c.program=$.id,c.wireframe=Z,se=!0)}N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(se||h)&&(h=!1,q(P,G,$,ae),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function y(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,G,$){let ae=$.wireframe===!0,N=o[P.id];N===void 0&&(N={},o[P.id]=N);let se=N[G.id];se===void 0&&(se={},N[G.id]=se);let Z=se[ae];return Z===void 0&&(Z=g(d()),se[ae]=Z),Z}function g(P){let G=[],$=[],ae=[];for(let N=0;N<s;N++)G[N]=0,$[N]=0,ae[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:ae,object:P,attributes:{},index:null}}function p(P,G,$,ae){let N=c.attributes,se=G.attributes,Z=0,ue=$.getAttributes();for(let Pe in ue)if(ue[Pe].location>=0){let oe=N[Pe],De=se[Pe];if(De===void 0&&(Pe==="instanceMatrix"&&P.instanceMatrix&&(De=P.instanceMatrix),Pe==="instanceColor"&&P.instanceColor&&(De=P.instanceColor)),oe===void 0||oe.attribute!==De||De&&oe.data!==De.data)return!0;Z++}return c.attributesNum!==Z||c.index!==ae}function M(P,G,$,ae){let N={},se=G.attributes,Z=0,ue=$.getAttributes();for(let Pe in ue)if(ue[Pe].location>=0){let oe=se[Pe];oe===void 0&&(Pe==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),Pe==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));let De={};De.attribute=oe,oe&&oe.data&&(De.data=oe.data),N[Pe]=De,Z++}c.attributes=N,c.attributesNum=Z,c.index=ae}function _(){let P=c.newAttributes;for(let G=0,$=P.length;G<$;G++)P[G]=0}function T(P){U(P,0)}function U(P,G){let $=c.newAttributes,ae=c.enabledAttributes,N=c.attributeDivisors;$[P]=1,ae[P]===0&&(i.enableVertexAttribArray(P),ae[P]=1),N[P]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),N[P]=G)}function I(){let P=c.newAttributes,G=c.enabledAttributes;for(let $=0,ae=G.length;$<ae;$++)G[$]!==P[$]&&(i.disableVertexAttribArray($),G[$]=0)}function L(P,G,$,ae,N,se,Z){Z===!0?i.vertexAttribIPointer(P,G,$,N,se):i.vertexAttribPointer(P,G,$,ae,N,se)}function q(P,G,$,ae){if(n.isWebGL2===!1&&(P.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let N=ae.attributes,se=$.getAttributes(),Z=G.defaultAttributeValues;for(let ue in se){let Pe=se[ue];if(Pe.location>=0){let ie=N[ue];if(ie===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),ie!==void 0){let oe=ie.normalized,De=ie.itemSize,Xe=t.get(ie);if(Xe===void 0)continue;let Be=Xe.buffer,ht=Xe.type,ut=Xe.bytesPerElement,Qe=n.isWebGL2===!0&&(ht===i.INT||ht===i.UNSIGNED_INT||ie.gpuType===ou);if(ie.isInterleavedBufferAttribute){let At=ie.data,Y=At.stride,hn=ie.offset;if(At.isInstancedInterleavedBuffer){for(let Ze=0;Ze<Pe.locationSize;Ze++)U(Pe.location+Ze,At.meshPerAttribute);P.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Ze=0;Ze<Pe.locationSize;Ze++)T(Pe.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Ze=0;Ze<Pe.locationSize;Ze++)L(Pe.location+Ze,De/Pe.locationSize,ht,oe,Y*ut,(hn+De/Pe.locationSize*Ze)*ut,Qe)}else{if(ie.isInstancedBufferAttribute){for(let At=0;At<Pe.locationSize;At++)U(Pe.location+At,ie.meshPerAttribute);P.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let At=0;At<Pe.locationSize;At++)T(Pe.location+At);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let At=0;At<Pe.locationSize;At++)L(Pe.location+At,De/Pe.locationSize,ht,oe,De*ut,De/Pe.locationSize*At*ut,Qe)}}else if(Z!==void 0){let oe=Z[ue];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(Pe.location,oe);break;case 3:i.vertexAttrib3fv(Pe.location,oe);break;case 4:i.vertexAttrib4fv(Pe.location,oe);break;default:i.vertexAttrib1fv(Pe.location,oe)}}}}I()}function S(){k();for(let P in o){let G=o[P];for(let $ in G){let ae=G[$];for(let N in ae)y(ae[N].object),delete ae[N];delete G[$]}delete o[P]}}function R(P){if(o[P.id]===void 0)return;let G=o[P.id];for(let $ in G){let ae=G[$];for(let N in ae)y(ae[N].object),delete ae[N];delete G[$]}delete o[P.id]}function D(P){for(let G in o){let $=o[G];if($[P.id]===void 0)continue;let ae=$[P.id];for(let N in ae)y(ae[N].object),delete ae[N];delete $[P.id]}}function k(){te(),h=!0,c!==l&&(c=l,u(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:k,resetDefaultState:te,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:T,disableUnusedAttributes:I}}function lg(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,d){if(d===0)return;let u,y;if(s)u=i,y="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[y](r,h,f,d),t.update(f,r,d)}function c(h,f,d){if(d===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let y=0;y<d;y++)this.render(h[y],f[y]);else{u.multiDrawArraysWEBGL(r,h,0,f,0,d);let y=0;for(let v=0;v<d;v++)y+=f[v];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function cg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,T=a||e.has("OES_texture_float"),U=_&&T,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:U,maxSamples:I}}function hg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new xi,o=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let y=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||y===null||y.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,_=M*4,T=p.clippingState||null;l.value=T,T=h(y,d,_,u);for(let U=0;U!==_;++U)T[U]=t[U];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,y){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,y!==!0||g===null){let p=u+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,T=u;_!==v;++_,T+=4)a.copy(f[_]).applyMatrix4(M,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function ug(i){let e=new WeakMap;function t(a,o){return o===ol?a.mapping=nr:o===ll&&(a.mapping=ir),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ol||o===ll)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new gl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Va=class extends Ha{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ks=4,Eh=[.125,.215,.35,.446,.526,.582],ps=20,Zo=new Va,Th=new xt,Ko=null,Jo=0,jo=0,ds=(1+Math.sqrt(5))/2,$s=1/ds,wh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ds,$s),new F(0,ds,-$s),new F($s,0,ds),new F(-$s,0,ds),new F(ds,$s,0),new F(-ds,$s,0)],Ga=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Jo,jo),e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:Ir,format:_i,colorSpace:Ui,depthBuffer:!1},s=Ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=fg(r,e,t)}return s}_compileMaterial(e){let t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,n,s){let o=new qn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Th),h.toneMapping=ji,h.autoClear=!1;let u=new mn({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),y=new Je(new wn,u),v=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,v=!0):(u.color.copy(Th),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;va(s,M*_,p>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===nr||e.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Zo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wh[(s-1)%wh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Je(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ps-1),v=r/y,g=isFinite(r)?1+Math.floor(h*v):ps;g>ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ps}`);let p=[],M=0;for(let L=0;L<ps;++L){let q=L/v,S=Math.exp(-q*q/2);p.push(S),L===0?M+=S:L<g&&(M+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-n;let T=this._sizeLods[s],U=3*T*(s>_-Ks?s-_+Ks:0),I=4*(this._cubeSize-T);va(t,U,I,3*T,2*T),l.setRenderTarget(t),l.render(f,Zo)}};function dg(i){let e=[],t=[],n=[],s=i,r=i-Ks+1+Eh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ks?l=Eh[a-i+Ks-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,y=6,v=3,g=2,p=1,M=new Float32Array(v*y*u),_=new Float32Array(g*y*u),T=new Float32Array(p*y*u);for(let I=0;I<u;I++){let L=I%3*2/3-1,q=I>2?0:-1,S=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];M.set(S,v*y*I),_.set(d,g*y*I);let R=[I,I,I,I,I,I];T.set(R,p*y*I)}let U=new ti;U.setAttribute("position",new ei(M,v)),U.setAttribute("uv",new ei(_,g)),U.setAttribute("faceIndex",new ei(T,p)),e.push(U),s>Ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ah(i,e,t){let n=new Ni(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function fg(i,e,t){let n=new Float32Array(ps),s=new F(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Rh(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Ch(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}function pg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ol||l===ll,h=l===nr||l===ir;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ga(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Ga(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function mg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gg(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);for(let y in d.morphAttributes){let v=d.morphAttributes[y];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let y in d)e.update(d[y],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let y in u){let v=u[y];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,y=f.attributes.position,v=0;if(u!==null){let M=u.array;v=u.version;for(let _=0,T=M.length;_<T;_+=3){let U=M[_+0],I=M[_+1],L=M[_+2];d.push(U,I,I,L,L,U)}}else if(y!==void 0){let M=y.array;v=y.version;for(let _=0,T=M.length/3-1;_<T;_+=3){let U=_+0,I=_+1,L=_+2;d.push(U,I,I,L,L,U)}}else return;let g=new(xu(d)?ka:Ba)(d,1);g.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function xg(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,y){i.drawElements(r,y,o,u*l),t.update(y,r,1)}function f(u,y,v){if(v===0)return;let g,p;if(s)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,y,o,u*l,v),t.update(y,r,v)}function d(u,y,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(u[p]/l,y[p]);else{g.multiDrawElementsWEBGL(r,y,0,o,u,0,v);let p=0;for(let M=0;M<v;M++)p+=y[M];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function yg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,e){return i[0]-e[0]}function vg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Mg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new On,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=u!==void 0?u.length:0,v=r.get(h);if(v===void 0||v.count!==y){let P=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],q=0;M===!0&&(q=1),_===!0&&(q=2),T===!0&&(q=3);let S=h.attributes.position.count*q,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let D=new Float32Array(S*R*4*y),k=new Oa(D,S,R,y);k.type=Ki,k.needsUpdate=!0;let te=q*4;for(let G=0;G<y;G++){let $=U[G],ae=I[G],N=L[G],se=S*R*4*G;for(let Z=0;Z<$.count;Z++){let ue=Z*te;M===!0&&(a.fromBufferAttribute($,Z),D[se+ue+0]=a.x,D[se+ue+1]=a.y,D[se+ue+2]=a.z,D[se+ue+3]=0),_===!0&&(a.fromBufferAttribute(ae,Z),D[se+ue+4]=a.x,D[se+ue+5]=a.y,D[se+ue+6]=a.z,D[se+ue+7]=0),T===!0&&(a.fromBufferAttribute(N,Z),D[se+ue+8]=a.x,D[se+ue+9]=a.y,D[se+ue+10]=a.z,D[se+ue+11]=N.itemSize===4?a.w:1)}}v={count:y,texture:k,size:new ke(S,R)},r.set(h,v),h.addEventListener("dispose",P)}let g=0;for(let M=0;M<d.length;M++)g+=d[M];let p=h.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let u=d===void 0?0:d.length,y=n[h.id];if(y===void 0||y.length!==u){y=[];for(let _=0;_<u;_++)y[_]=[_,0];n[h.id]=y}for(let _=0;_<u;_++){let T=y[_];T[0]=_,T[1]=d[_]}y.sort(vg);for(let _=0;_<8;_++)_<u&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(_g);let v=h.morphAttributes.position,g=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let T=o[_],U=T[0],I=T[1];U!==Number.MAX_SAFE_INTEGER&&I?(v&&h.getAttribute("morphTarget"+_)!==v[U]&&h.setAttribute("morphTarget"+_,v[U]),g&&h.getAttribute("morphNormal"+_)!==g[U]&&h.setAttribute("morphNormal"+_,g[U]),s[_]=I,p+=I):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function bg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Wa=class extends ui{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:gs,h!==gs&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gs&&(n=Zi),n===void 0&&h===sr&&(n=ms),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xn,this.minFilter=l!==void 0?l:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mu=new ui,bu=new Wa(1,1);bu.compareFunction=gu;var Su=new Oa,Eu=new pl,Tu=new za,Ph=[],Ih=[],Lh=new Float32Array(16),Dh=new Float32Array(9),Uh=new Float32Array(4);function ur(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ph[s];if(r===void 0&&(r=new Float32Array(s),Ph[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function An(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ao(i,e){let t=Ih[e];t===void 0&&(t=new Int32Array(e),Ih[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2fv(this.addr,e),Rn(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(An(t,e))return;i.uniform3fv(this.addr,e),Rn(t,e)}}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4fv(this.addr,e),Rn(t,e)}}function Ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,n))return;Uh.set(n),i.uniformMatrix2fv(this.addr,!1,Uh),Rn(t,n)}}function Rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,n))return;Dh.set(n),i.uniformMatrix3fv(this.addr,!1,Dh),Rn(t,n)}}function Cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,n))return;Lh.set(n),i.uniformMatrix4fv(this.addr,!1,Lh),Rn(t,n)}}function Pg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2iv(this.addr,e),Rn(t,e)}}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;i.uniform3iv(this.addr,e),Rn(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4iv(this.addr,e),Rn(t,e)}}function Ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2uiv(this.addr,e),Rn(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;i.uniform3uiv(this.addr,e),Rn(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4uiv(this.addr,e),Rn(t,e)}}function Bg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?bu:Mu;t.setTexture2D(e||r,s)}function kg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Eu,s)}function Hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tu,s)}function zg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Su,s)}function Vg(i){switch(i){case 5126:return Sg;case 35664:return Eg;case 35665:return Tg;case 35666:return wg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Ng;case 36295:return Og;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return zg}}function Gg(i,e){i.uniform1fv(this.addr,e)}function Wg(i,e){let t=ur(e,this.size,2);i.uniform2fv(this.addr,t)}function Xg(i,e){let t=ur(e,this.size,3);i.uniform3fv(this.addr,t)}function qg(i,e){let t=ur(e,this.size,4);i.uniform4fv(this.addr,t)}function Yg(i,e){let t=ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $g(i,e){let t=ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zg(i,e){let t=ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Kg(i,e){i.uniform1iv(this.addr,e)}function Jg(i,e){i.uniform2iv(this.addr,e)}function jg(i,e){i.uniform3iv(this.addr,e)}function Qg(i,e){i.uniform4iv(this.addr,e)}function e0(i,e){i.uniform1uiv(this.addr,e)}function t0(i,e){i.uniform2uiv(this.addr,e)}function n0(i,e){i.uniform3uiv(this.addr,e)}function i0(i,e){i.uniform4uiv(this.addr,e)}function s0(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Mu,r[a])}function r0(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Eu,r[a])}function a0(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Tu,r[a])}function o0(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Su,r[a])}function l0(i){switch(i){case 5126:return Gg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return $g;case 35676:return Zg;case 5124:case 35670:return Kg;case 35667:case 35671:return Jg;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}var xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vg(t.type)}},yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l0(t.type)}},_l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Qo=/(\w+)(\])?(\[|\.)?/g;function Nh(i,e){i.seq.push(e),i.map[e.id]=e}function c0(i,e,t){let n=i.name,s=n.length;for(Qo.lastIndex=0;;){let r=Qo.exec(n),a=Qo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nh(t,c===void 0?new xl(o,i,e):new yl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new _l(o),Nh(t,f)),t=f}}}var tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);c0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Oh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var h0=37297,u0=0;function d0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function f0(i){let e=zt.getPrimaries(zt.workingColorSpace),t=zt.getPrimaries(i),n;switch(e===t?n="":e===Ia&&t===Pa?n="LinearDisplayP3ToLinearSRGB":e===Pa&&t===Ia&&(n="LinearSRGBToLinearDisplayP3"),i){case Ui:case ro:return[n,"LinearTransferOETF"];case Bn:case ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Fh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+d0(i.getShaderSource(e),a)}else return s}function p0(i,e){let t=f0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function m0(i,e){let t;switch(e){case Ld:t="Linear";break;case Dd:t="Reinhard";break;case Ud:t="OptimizedCineon";break;case Nd:t="ACESFilmic";break;case Fd:t="AgX";break;case Od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function g0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function x0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Js).join(`
`)}function y0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Js(i){return i!==""}function Bh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var v0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(v0,b0)}var M0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function b0(i,e){let t=wt[e];if(t===void 0){let n=M0.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vl(t)}var S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(i){return i.replace(S0,E0)}function E0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===su?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function w0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function R0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ru:e="ENVMAP_BLENDING_MULTIPLY";break;case Pd:e="ENVMAP_BLENDING_MIX";break;case Id:e="ENVMAP_BLENDING_ADD";break}return e}function C0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function P0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=T0(t),c=w0(t),h=A0(t),f=R0(t),d=C0(t),u=t.isWebGL2?"":g0(t),y=x0(t),v=y0(r),g=s.createProgram(),p,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Js).join(`
`),p.length>0&&(p+=`
`),M=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Js).join(`
`),M.length>0&&(M+=`
`)):(p=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),M=[u,zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?wt.tonemapping_pars_fragment:"",t.toneMapping!==ji?m0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,p0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),a=vl(a),a=Bh(a,t),a=kh(a,t),o=vl(o),o=Bh(o,t),o=kh(o,t),a=Hh(a),o=Hh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=_+p+a,U=_+M+o,I=Oh(s,s.VERTEX_SHADER,T),L=Oh(s,s.FRAGMENT_SHADER,U);s.attachShader(g,I),s.attachShader(g,L),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function q(k){if(i.debug.checkShaderErrors){let te=s.getProgramInfoLog(g).trim(),P=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(L).trim(),$=!0,ae=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,I,L);else{let N=Fh(s,I,"vertex"),se=Fh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+N+`
`+se)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(P===""||G==="")&&(ae=!1);ae&&(k.diagnostics={runnable:$,programLog:te,vertexShader:{log:P,prefix:p},fragmentShader:{log:G,prefix:M}})}s.deleteShader(I),s.deleteShader(L),S=new tr(s,g),R=_0(s,g)}let S;this.getUniforms=function(){return S===void 0&&q(this),S};let R;this.getAttributes=function(){return R===void 0&&q(this),R};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,h0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=L,this}var I0=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bl(e),t.set(e,n)),n}},bl=class{constructor(e){this.id=I0++,this.code=e,this.usedTimes=0}};function L0(i,e,t,n,s,r,a){let o=new Dr,l=new Ml,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function g(S,R,D,k,te){let P=k.fog,G=te.geometry,$=S.isMeshStandardMaterial?k.environment:null,ae=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),N=ae&&ae.mapping===so?ae.image.height:null,se=y[S.type];S.precision!==null&&(u=s.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=Z!==void 0?Z.length:0,Pe=0;G.morphAttributes.position!==void 0&&(Pe=1),G.morphAttributes.normal!==void 0&&(Pe=2),G.morphAttributes.color!==void 0&&(Pe=3);let ie,oe,De,Xe;if(se){let Cn=Ei[se];ie=Cn.vertexShader,oe=Cn.fragmentShader}else ie=S.vertexShader,oe=S.fragmentShader,l.update(S),De=l.getVertexShaderID(S),Xe=l.getFragmentShaderID(S);let Be=i.getRenderTarget(),ht=te.isInstancedMesh===!0,ut=te.isBatchedMesh===!0,Qe=!!S.map,At=!!S.matcap,Y=!!ae,hn=!!S.aoMap,Ze=!!S.lightMap,st=!!S.bumpMap,$e=!!S.normalMap,Yt=!!S.displacementMap,vt=!!S.emissiveMap,C=!!S.metalnessMap,b=!!S.roughnessMap,Q=S.anisotropy>0,be=S.clearcoat>0,xe=S.iridescence>0,Ee=S.sheen>0,qe=S.transmission>0,Ue=Q&&!!S.anisotropyMap,ze=be&&!!S.clearcoatMap,it=be&&!!S.clearcoatNormalMap,yt=be&&!!S.clearcoatRoughnessMap,me=xe&&!!S.iridescenceMap,Pt=xe&&!!S.iridescenceThicknessMap,je=Ee&&!!S.sheenColorMap,Ve=Ee&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,He=!!S.specularColorMap,pt=!!S.specularIntensityMap,It=qe&&!!S.transmissionMap,$t=qe&&!!S.thicknessMap,Tt=!!S.gradientMap,Ce=!!S.alphaMap,O=S.alphaTest>0,Ie=!!S.alphaHash,Re=!!S.extensions,tt=!!G.attributes.uv1,Te=!!G.attributes.uv2,Ye=!!G.attributes.uv3,dt=ji;return S.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(dt=i.toneMapping),{isWebGL2:h,shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:ie,fragmentShader:oe,defines:S.defines,customVertexShaderID:De,customFragmentShaderID:Xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:ut,instancing:ht,instancingColor:ht&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:Ui,map:Qe,matcap:At,envMap:Y,envMapMode:Y&&ae.mapping,envMapCubeUVHeight:N,aoMap:hn,lightMap:Ze,bumpMap:st,normalMap:$e,displacementMap:d&&Yt,emissiveMap:vt,normalMapObjectSpace:$e&&S.normalMapType===Zd,normalMapTangentSpace:$e&&S.normalMapType===mu,metalnessMap:C,roughnessMap:b,anisotropy:Q,anisotropyMap:Ue,clearcoat:be,clearcoatMap:ze,clearcoatNormalMap:it,clearcoatRoughnessMap:yt,iridescence:xe,iridescenceMap:me,iridescenceThicknessMap:Pt,sheen:Ee,sheenColorMap:je,sheenRoughnessMap:Ve,specularMap:Fe,specularColorMap:He,specularIntensityMap:pt,transmission:qe,transmissionMap:It,thicknessMap:$t,gradientMap:Tt,opaque:S.transparent===!1&&S.blending===Qs,alphaMap:Ce,alphaTest:O,alphaHash:Ie,combine:S.combine,mapUv:Qe&&v(S.map.channel),aoMapUv:hn&&v(S.aoMap.channel),lightMapUv:Ze&&v(S.lightMap.channel),bumpMapUv:st&&v(S.bumpMap.channel),normalMapUv:$e&&v(S.normalMap.channel),displacementMapUv:Yt&&v(S.displacementMap.channel),emissiveMapUv:vt&&v(S.emissiveMap.channel),metalnessMapUv:C&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:Ue&&v(S.anisotropyMap.channel),clearcoatMapUv:ze&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:je&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&v(S.sheenRoughnessMap.channel),specularMapUv:Fe&&v(S.specularMap.channel),specularColorMapUv:He&&v(S.specularColorMap.channel),specularIntensityMapUv:pt&&v(S.specularIntensityMap.channel),transmissionMapUv:It&&v(S.transmissionMap.channel),thicknessMapUv:$t&&v(S.thicknessMap.channel),alphaMapUv:Ce&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&($e||Q),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:tt,vertexUv2s:Te,vertexUv3s:Ye,pointsUvs:te.isPoints===!0&&!!G.attributes.uv&&(Qe||Ce),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Pe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Qe&&S.map.isVideoTexture===!0&&zt.getTransfer(S.map.colorSpace)===en,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pn,flipSided:S.side===Qn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Re&&S.extensions.derivatives===!0,extensionFragDepth:Re&&S.extensions.fragDepth===!0,extensionDrawBuffers:Re&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)R.push(D),R.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(M(R,S),_(R,S),R.push(i.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function M(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function _(S,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function T(S){let R=y[S.type],D;if(R){let k=Ei[R];D=Mf.clone(k.uniforms)}else D=S.uniforms;return D}function U(S,R){let D;for(let k=0,te=c.length;k<te;k++){let P=c[k];if(P.cacheKey===R){D=P,++D.usedTimes;break}}return D===void 0&&(D=new P0(i,R,S,r),c.push(D)),D}function I(S){if(--S.usedTimes===0){let R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function q(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:U,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:q}}function D0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function U0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,u,y,v,g){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:y,renderOrder:f.renderOrder,z:v,group:g},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=y,p.renderOrder=f.renderOrder,p.z=v,p.group=g),e++,p}function o(f,d,u,y,v,g){let p=a(f,d,u,y,v,g);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):t.push(p)}function l(f,d,u,y,v,g){let p=a(f,d,u,y,v,g);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||U0),n.length>1&&n.sort(d||Vh),s.length>1&&s.sort(d||Vh)}function h(){for(let f=e,d=i.length;f<d;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function N0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Gh,i.set(n,[a])):s>=r.length?(a=new Gh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function O0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new xt};break;case"SpotLight":t={position:new F,direction:new F,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function F0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var B0=0;function k0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function H0(i,e){let t=new O0,n=F0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new bn,o=new bn;function l(h,f){let d=0,u=0,y=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let v=0,g=0,p=0,M=0,_=0,T=0,U=0,I=0,L=0,q=0,S=0;h.sort(k0);let R=f===!0?Math.PI:1;for(let k=0,te=h.length;k<te;k++){let P=h[k],G=P.color,$=P.intensity,ae=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=G.r*$*R,u+=G.g*$*R,y+=G.b*$*R;else if(P.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(P.sh.coefficients[se],$);S++}else if(P.isDirectionalLight){let se=t.get(P);if(se.color.copy(P.color).multiplyScalar(P.intensity*R),P.castShadow){let Z=P.shadow,ue=n.get(P);ue.shadowBias=Z.bias,ue.shadowNormalBias=Z.normalBias,ue.shadowRadius=Z.radius,ue.shadowMapSize=Z.mapSize,s.directionalShadow[v]=ue,s.directionalShadowMap[v]=N,s.directionalShadowMatrix[v]=P.shadow.matrix,T++}s.directional[v]=se,v++}else if(P.isSpotLight){let se=t.get(P);se.position.setFromMatrixPosition(P.matrixWorld),se.color.copy(G).multiplyScalar($*R),se.distance=ae,se.coneCos=Math.cos(P.angle),se.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),se.decay=P.decay,s.spot[p]=se;let Z=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,Z.updateMatrices(P),P.castShadow&&q++),s.spotLightMatrix[p]=Z.matrix,P.castShadow){let ue=n.get(P);ue.shadowBias=Z.bias,ue.shadowNormalBias=Z.normalBias,ue.shadowRadius=Z.radius,ue.shadowMapSize=Z.mapSize,s.spotShadow[p]=ue,s.spotShadowMap[p]=N,I++}p++}else if(P.isRectAreaLight){let se=t.get(P);se.color.copy(G).multiplyScalar($),se.halfWidth.set(P.width*.5,0,0),se.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=se,M++}else if(P.isPointLight){let se=t.get(P);if(se.color.copy(P.color).multiplyScalar(P.intensity*R),se.distance=P.distance,se.decay=P.decay,P.castShadow){let Z=P.shadow,ue=n.get(P);ue.shadowBias=Z.bias,ue.shadowNormalBias=Z.normalBias,ue.shadowRadius=Z.radius,ue.shadowMapSize=Z.mapSize,ue.shadowCameraNear=Z.camera.near,ue.shadowCameraFar=Z.camera.far,s.pointShadow[g]=ue,s.pointShadowMap[g]=N,s.pointShadowMatrix[g]=P.shadow.matrix,U++}s.point[g]=se,g++}else if(P.isHemisphereLight){let se=t.get(P);se.skyColor.copy(P.color).multiplyScalar($*R),se.groundColor.copy(P.groundColor).multiplyScalar($*R),s.hemi[_]=se,_++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=u,s.ambient[2]=y;let D=s.hash;(D.directionalLength!==v||D.pointLength!==g||D.spotLength!==p||D.rectAreaLength!==M||D.hemiLength!==_||D.numDirectionalShadows!==T||D.numPointShadows!==U||D.numSpotShadows!==I||D.numSpotMaps!==L||D.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=M,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=I+L-q,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=S,D.directionalLength=v,D.pointLength=g,D.spotLength=p,D.rectAreaLength=M,D.hemiLength=_,D.numDirectionalShadows=T,D.numPointShadows=U,D.numSpotShadows=I,D.numSpotMaps=L,D.numLightProbes=S,s.version=B0++)}function c(h,f){let d=0,u=0,y=0,v=0,g=0,p=f.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let T=h[M];if(T.isDirectionalLight){let U=s.directional[d];U.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),d++}else if(T.isSpotLight){let U=s.spot[y];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(p),U.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),y++}else if(T.isRectAreaLight){let U=s.rectArea[v];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),U.halfWidth.set(T.width*.5,0,0),U.halfHeight.set(0,T.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let U=s.point[u];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){let U=s.hemi[g];U.direction.setFromMatrixPosition(T.matrixWorld),U.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:s}}function Wh(i,e){let t=new H0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function z0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Wh(i,e),t.set(r,[l])):a>=o.length?(l=new Wh(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Sl=class extends is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},El=class extends is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},V0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G0=`uniform sampler2D shadow_pass;
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
}`;function W0(i,e,t){let n=new Ur,s=new ke,r=new ke,a=new On,o=new Sl({depthPacking:$d}),l=new El,c={},h=t.maxTextureSize,f={[es]:Qn,[Qn]:es,[pn]:pn},d=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:V0,fragmentShader:G0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let y=new ti;y.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Je(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let p=this.type;this.render=function(I,L,q){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let S=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ji),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let te=p!==Li&&this.type===Li,P=p===Li&&this.type!==Li;for(let G=0,$=I.length;G<$;G++){let ae=I[G],N=ae.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let se=N.getFrameExtents();if(s.multiply(se),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,N.mapSize.y=r.y)),N.map===null||te===!0||P===!0){let ue=this.type!==Li?{minFilter:Xn,magFilter:Xn}:{};N.map!==null&&N.map.dispose(),N.map=new Ni(s.x,s.y,ue),N.map.texture.name=ae.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let Z=N.getViewportCount();for(let ue=0;ue<Z;ue++){let Pe=N.getViewport(ue);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),k.viewport(a),N.updateMatrices(ae,ue),n=N.getFrustum(),T(L,q,N.camera,ae,this.type)}N.isPointLightShadow!==!0&&this.type===Li&&M(N,q),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,R,D)};function M(I,L){let q=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ni(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,q,d,v,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,q,u,v,null)}function _(I,L,q,S){let R=null,D=q.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)R=D;else if(R=q.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let k=R.uuid,te=L.uuid,P=c[k];P===void 0&&(P={},c[k]=P);let G=P[te];G===void 0&&(G=R.clone(),P[te]=G,L.addEventListener("dispose",U)),R=G}if(R.visible=L.visible,R.wireframe=L.wireframe,S===Li?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:f[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let k=i.properties.get(R);k.light=q}return R}function T(I,L,q,S,R){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Li)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld);let te=e.update(I),P=I.material;if(Array.isArray(P)){let G=te.groups;for(let $=0,ae=G.length;$<ae;$++){let N=G[$],se=P[N.materialIndex];if(se&&se.visible){let Z=_(I,se,S,R);I.onBeforeShadow(i,I,L,q,te,Z,N),i.renderBufferDirect(q,null,te,Z,I,N),I.onAfterShadow(i,I,L,q,te,Z,N)}}}else if(P.visible){let G=_(I,P,S,R);I.onBeforeShadow(i,I,L,q,te,G,null),i.renderBufferDirect(q,null,te,G,I,null),I.onAfterShadow(i,I,L,q,te,G,null)}}let k=I.children;for(let te=0,P=k.length;te<P;te++)T(k[te],L,q,S,R)}function U(I){I.target.removeEventListener("dispose",U);for(let q in c){let S=c[q],R=I.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function X0(i,e,t){let n=t.isWebGL2;function s(){let O=!1,Ie=new On,Re=null,tt=new On(0,0,0,0);return{setMask:function(Te){Re!==Te&&!O&&(i.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){O=Te},setClear:function(Te,Ye,dt,Rt,Cn){Cn===!0&&(Te*=Rt,Ye*=Rt,dt*=Rt),Ie.set(Te,Ye,dt,Rt),tt.equals(Ie)===!1&&(i.clearColor(Te,Ye,dt,Rt),tt.copy(Ie))},reset:function(){O=!1,Re=null,tt.set(-1,0,0,0)}}}function r(){let O=!1,Ie=null,Re=null,tt=null;return{setTest:function(Te){Te?ut(i.DEPTH_TEST):Qe(i.DEPTH_TEST)},setMask:function(Te){Ie!==Te&&!O&&(i.depthMask(Te),Ie=Te)},setFunc:function(Te){if(Re!==Te){switch(Te){case Sd:i.depthFunc(i.NEVER);break;case Ed:i.depthFunc(i.ALWAYS);break;case Td:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case wd:i.depthFunc(i.EQUAL);break;case Ad:i.depthFunc(i.GEQUAL);break;case Rd:i.depthFunc(i.GREATER);break;case Cd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=Te}},setLocked:function(Te){O=Te},setClear:function(Te){tt!==Te&&(i.clearDepth(Te),tt=Te)},reset:function(){O=!1,Ie=null,Re=null,tt=null}}}function a(){let O=!1,Ie=null,Re=null,tt=null,Te=null,Ye=null,dt=null,Rt=null,Cn=null;return{setTest:function(Ht){O||(Ht?ut(i.STENCIL_TEST):Qe(i.STENCIL_TEST))},setMask:function(Ht){Ie!==Ht&&!O&&(i.stencilMask(Ht),Ie=Ht)},setFunc:function(Ht,gn,un){(Re!==Ht||tt!==gn||Te!==un)&&(i.stencilFunc(Ht,gn,un),Re=Ht,tt=gn,Te=un)},setOp:function(Ht,gn,un){(Ye!==Ht||dt!==gn||Rt!==un)&&(i.stencilOp(Ht,gn,un),Ye=Ht,dt=gn,Rt=un)},setLocked:function(Ht){O=Ht},setClear:function(Ht){Cn!==Ht&&(i.clearStencil(Ht),Cn=Ht)},reset:function(){O=!1,Ie=null,Re=null,tt=null,Te=null,Ye=null,dt=null,Rt=null,Cn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,f=new WeakMap,d={},u={},y=new WeakMap,v=[],g=null,p=!1,M=null,_=null,T=null,U=null,I=null,L=null,q=null,S=new xt(0,0,0),R=0,D=!1,k=null,te=null,P=null,G=null,$=null,ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,se=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Z)[1]),N=se>=1):Z.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),N=se>=2);let ue=null,Pe={},ie=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),De=new On().fromArray(ie),Xe=new On().fromArray(oe);function Be(O,Ie,Re,tt){let Te=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(O,Ye),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<Re;dt++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ie,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(Ie+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return Ye}let ht={};ht[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ut(i.DEPTH_TEST),l.setFunc(wa),vt(!1),C(Sc),ut(i.CULL_FACE),$e(Ji);function ut(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function Qe(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function At(O,Ie){return u[O]!==Ie?(i.bindFramebuffer(O,Ie),u[O]=Ie,n&&(O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ie),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ie)),!0):!1}function Y(O,Ie){let Re=v,tt=!1;if(O)if(Re=y.get(Ie),Re===void 0&&(Re=[],y.set(Ie,Re)),O.isWebGLMultipleRenderTargets){let Te=O.texture;if(Re.length!==Te.length||Re[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,dt=Te.length;Ye<dt;Ye++)Re[Ye]=i.COLOR_ATTACHMENT0+Ye;Re.length=Te.length,tt=!0}}else Re[0]!==i.COLOR_ATTACHMENT0&&(Re[0]=i.COLOR_ATTACHMENT0,tt=!0);else Re[0]!==i.BACK&&(Re[0]=i.BACK,tt=!0);tt&&(t.isWebGL2?i.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function hn(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let Ze={[fs]:i.FUNC_ADD,[ld]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};if(n)Ze[Ac]=i.MIN,Ze[Rc]=i.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(Ze[Ac]=O.MIN_EXT,Ze[Rc]=O.MAX_EXT)}let st={[hd]:i.ZERO,[ud]:i.ONE,[dd]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[yd]:i.SRC_ALPHA_SATURATE,[gd]:i.DST_COLOR,[pd]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA,[_d]:i.CONSTANT_COLOR,[vd]:i.ONE_MINUS_CONSTANT_COLOR,[Md]:i.CONSTANT_ALPHA,[bd]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(O,Ie,Re,tt,Te,Ye,dt,Rt,Cn,Ht){if(O===Ji){p===!0&&(Qe(i.BLEND),p=!1);return}if(p===!1&&(ut(i.BLEND),p=!0),O!==od){if(O!==M||Ht!==D){if((_!==fs||I!==fs)&&(i.blendEquation(i.FUNC_ADD),_=fs,I=fs),Ht)switch(O){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,U=null,L=null,q=null,S.set(0,0,0),R=0,M=O,D=Ht}return}Te=Te||Ie,Ye=Ye||Re,dt=dt||tt,(Ie!==_||Te!==I)&&(i.blendEquationSeparate(Ze[Ie],Ze[Te]),_=Ie,I=Te),(Re!==T||tt!==U||Ye!==L||dt!==q)&&(i.blendFuncSeparate(st[Re],st[tt],st[Ye],st[dt]),T=Re,U=tt,L=Ye,q=dt),(Rt.equals(S)===!1||Cn!==R)&&(i.blendColor(Rt.r,Rt.g,Rt.b,Cn),S.copy(Rt),R=Cn),M=O,D=!1}function Yt(O,Ie){O.side===pn?Qe(i.CULL_FACE):ut(i.CULL_FACE);let Re=O.side===Qn;Ie&&(Re=!Re),vt(Re),O.blending===Qs&&O.transparent===!1?$e(Ji):$e(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);let tt=O.stencilWrite;c.setTest(tt),tt&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Q(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(O){k!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),k=O)}function C(O){O!==rd?(ut(i.CULL_FACE),O!==te&&(O===Sc?i.cullFace(i.BACK):O===ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Qe(i.CULL_FACE),te=O}function b(O){O!==P&&(N&&i.lineWidth(O),P=O)}function Q(O,Ie,Re){O?(ut(i.POLYGON_OFFSET_FILL),(G!==Ie||$!==Re)&&(i.polygonOffset(Ie,Re),G=Ie,$=Re)):Qe(i.POLYGON_OFFSET_FILL)}function be(O){O?ut(i.SCISSOR_TEST):Qe(i.SCISSOR_TEST)}function xe(O){O===void 0&&(O=i.TEXTURE0+ae-1),ue!==O&&(i.activeTexture(O),ue=O)}function Ee(O,Ie,Re){Re===void 0&&(ue===null?Re=i.TEXTURE0+ae-1:Re=ue);let tt=Pe[Re];tt===void 0&&(tt={type:void 0,texture:void 0},Pe[Re]=tt),(tt.type!==O||tt.texture!==Ie)&&(ue!==Re&&(i.activeTexture(Re),ue=Re),i.bindTexture(O,Ie||ht[O]),tt.type=O,tt.texture=Ie)}function qe(){let O=Pe[ue];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ve(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(O){De.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),De.copy(O))}function It(O){Xe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Xe.copy(O))}function $t(O,Ie){let Re=f.get(Ie);Re===void 0&&(Re=new WeakMap,f.set(Ie,Re));let tt=Re.get(O);tt===void 0&&(tt=i.getUniformBlockIndex(Ie,O.name),Re.set(O,tt))}function Tt(O,Ie){let tt=f.get(Ie).get(O);h.get(Ie)!==tt&&(i.uniformBlockBinding(Ie,tt,O.__bindingPointIndex),h.set(Ie,tt))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ue=null,Pe={},u={},y=new WeakMap,v=[],g=null,p=!1,M=null,_=null,T=null,U=null,I=null,L=null,q=null,S=new xt(0,0,0),R=0,D=!1,k=null,te=null,P=null,G=null,$=null,De.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ut,disable:Qe,bindFramebuffer:At,drawBuffers:Y,useProgram:hn,setBlending:$e,setMaterial:Yt,setFlipSided:vt,setCullFace:C,setLineWidth:b,setPolygonOffset:Q,setScissorTest:be,activeTexture:xe,bindTexture:Ee,unbindTexture:qe,compressedTexImage2D:Ue,compressedTexImage3D:ze,texImage2D:Fe,texImage3D:He,updateUBOMapping:$t,uniformBlockBinding:Tt,texStorage2D:je,texStorage3D:Ve,texSubImage2D:it,texSubImage3D:yt,compressedTexSubImage2D:me,compressedTexSubImage3D:Pt,scissor:pt,viewport:It,reset:Ce}}function q0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return u?new OffscreenCanvas(C,b):Da("canvas")}function v(C,b,Q,be){let xe=1;if((C.width>be||C.height>be)&&(xe=be/Math.max(C.width,C.height)),xe<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Ee=b?dl:Math.floor,qe=Ee(xe*C.width),Ue=Ee(xe*C.height);f===void 0&&(f=y(qe,Ue));let ze=Q?y(qe,Ue):f;return ze.width=qe,ze.height=Ue,ze.getContext("2d").drawImage(C,0,0,qe,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+qe+"x"+Ue+")."),ze}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return oh(C.width)&&oh(C.height)}function p(C){return o?!1:C.wrapS!==yi||C.wrapT!==yi||C.minFilter!==Xn&&C.minFilter!==li}function M(C,b){return C.generateMipmaps&&b&&C.minFilter!==Xn&&C.minFilter!==li}function _(C){i.generateMipmap(C)}function T(C,b,Q,be,xe=!1){if(o===!1)return b;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ee=b;if(b===i.RED&&(Q===i.FLOAT&&(Ee=i.R32F),Q===i.HALF_FLOAT&&(Ee=i.R16F),Q===i.UNSIGNED_BYTE&&(Ee=i.R8)),b===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(Ee=i.R8UI),Q===i.UNSIGNED_SHORT&&(Ee=i.R16UI),Q===i.UNSIGNED_INT&&(Ee=i.R32UI),Q===i.BYTE&&(Ee=i.R8I),Q===i.SHORT&&(Ee=i.R16I),Q===i.INT&&(Ee=i.R32I)),b===i.RG&&(Q===i.FLOAT&&(Ee=i.RG32F),Q===i.HALF_FLOAT&&(Ee=i.RG16F),Q===i.UNSIGNED_BYTE&&(Ee=i.RG8)),b===i.RGBA){let qe=xe?Ca:zt.getTransfer(be);Q===i.FLOAT&&(Ee=i.RGBA32F),Q===i.HALF_FLOAT&&(Ee=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(Ee=qe===en?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(Ee=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(Ee=i.RGB5_A1)}return(Ee===i.R16F||Ee===i.R32F||Ee===i.RG16F||Ee===i.RG32F||Ee===i.RGBA16F||Ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function U(C,b,Q){return M(C,Q)===!0||C.isFramebufferTexture&&C.minFilter!==Xn&&C.minFilter!==li?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function I(C){return C===Xn||C===Cc||C===So?i.NEAREST:i.LINEAR}function L(C){let b=C.target;b.removeEventListener("dispose",L),S(b),b.isVideoTexture&&h.delete(b)}function q(C){let b=C.target;b.removeEventListener("dispose",q),D(b)}function S(C){let b=n.get(C);if(b.__webglInit===void 0)return;let Q=C.source,be=d.get(Q);if(be){let xe=be[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&R(C),Object.keys(be).length===0&&d.delete(Q)}n.remove(C)}function R(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let Q=C.source,be=d.get(Q);delete be[b.__cacheKey],a.memory.textures--}function D(C){let b=C.texture,Q=n.get(C),be=n.get(b);if(be.__webglTexture!==void 0&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(Q.__webglFramebuffer[xe]))for(let Ee=0;Ee<Q.__webglFramebuffer[xe].length;Ee++)i.deleteFramebuffer(Q.__webglFramebuffer[xe][Ee]);else i.deleteFramebuffer(Q.__webglFramebuffer[xe]);Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer[xe])}else{if(Array.isArray(Q.__webglFramebuffer))for(let xe=0;xe<Q.__webglFramebuffer.length;xe++)i.deleteFramebuffer(Q.__webglFramebuffer[xe]);else i.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let xe=0;xe<Q.__webglColorRenderbuffer.length;xe++)Q.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(Q.__webglColorRenderbuffer[xe]);Q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let xe=0,Ee=b.length;xe<Ee;xe++){let qe=n.get(b[xe]);qe.__webglTexture&&(i.deleteTexture(qe.__webglTexture),a.memory.textures--),n.remove(b[xe])}n.remove(b),n.remove(C)}let k=0;function te(){k=0}function P(){let C=k;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function G(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function $(C,b){let Q=n.get(C);if(C.isVideoTexture&&Yt(C),C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){let be=C.image;if(be===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(Q,C,b);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+b)}function ae(C,b){let Q=n.get(C);if(C.version>0&&Q.__version!==C.version){De(Q,C,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+b)}function N(C,b){let Q=n.get(C);if(C.version>0&&Q.__version!==C.version){De(Q,C,b);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+b)}function se(C,b){let Q=n.get(C);if(C.version>0&&Q.__version!==C.version){Xe(Q,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+b)}let Z={[Cr]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},ue={[Xn]:i.NEAREST,[Cc]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[li]:i.LINEAR,[Bd]:i.LINEAR_MIPMAP_NEAREST,[Pr]:i.LINEAR_MIPMAP_LINEAR},Pe={[Kd]:i.NEVER,[nf]:i.ALWAYS,[Jd]:i.LESS,[gu]:i.LEQUAL,[jd]:i.EQUAL,[tf]:i.GEQUAL,[Qd]:i.GREATER,[ef]:i.NOTEQUAL};function ie(C,b,Q){if(Q?(i.texParameteri(C,i.TEXTURE_WRAP_S,Z[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Z[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Z[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[b.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==yi||b.wrapT!==yi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,I(b.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==Xn&&b.minFilter!==li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let be=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Xn||b.minFilter!==So&&b.minFilter!==Pr||b.type===Ki&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Ir&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(C,be.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function oe(C,b){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",L));let be=b.source,xe=d.get(be);xe===void 0&&(xe={},d.set(be,xe));let Ee=G(b);if(Ee!==C.__cacheKey){xe[Ee]===void 0&&(xe[Ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),xe[Ee].usedTimes++;let qe=xe[C.__cacheKey];qe!==void 0&&(xe[C.__cacheKey].usedTimes--,qe.usedTimes===0&&R(b)),C.__cacheKey=Ee,C.__webglTexture=xe[Ee].texture}return Q}function De(C,b,Q){let be=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(be=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(be=i.TEXTURE_3D);let xe=oe(C,b),Ee=b.source;t.bindTexture(be,C.__webglTexture,i.TEXTURE0+Q);let qe=n.get(Ee);if(Ee.version!==qe.__version||xe===!0){t.activeTexture(i.TEXTURE0+Q);let Ue=zt.getPrimaries(zt.workingColorSpace),ze=b.colorSpace===ci?null:zt.getPrimaries(b.colorSpace),it=b.colorSpace===ci||Ue===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let yt=p(b)&&g(b.image)===!1,me=v(b.image,yt,!1,s.maxTextureSize);me=vt(b,me);let Pt=g(me)||o,je=r.convert(b.format,b.colorSpace),Ve=r.convert(b.type),Fe=T(b.internalFormat,je,Ve,b.colorSpace,b.isVideoTexture);ie(be,b,Pt);let He,pt=b.mipmaps,It=o&&b.isVideoTexture!==!0&&Fe!==fu,$t=qe.__version===void 0||xe===!0,Tt=U(b,me,Pt);if(b.isDepthTexture)Fe=i.DEPTH_COMPONENT,o?b.type===Ki?Fe=i.DEPTH_COMPONENT32F:b.type===Zi?Fe=i.DEPTH_COMPONENT24:b.type===ms?Fe=i.DEPTH24_STENCIL8:Fe=i.DEPTH_COMPONENT16:b.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===gs&&Fe===i.DEPTH_COMPONENT&&b.type!==Ql&&b.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Zi,Ve=r.convert(b.type)),b.format===sr&&Fe===i.DEPTH_COMPONENT&&(Fe=i.DEPTH_STENCIL,b.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ms,Ve=r.convert(b.type))),$t&&(It?t.texStorage2D(i.TEXTURE_2D,1,Fe,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Fe,me.width,me.height,0,je,Ve,null));else if(b.isDataTexture)if(pt.length>0&&Pt){It&&$t&&t.texStorage2D(i.TEXTURE_2D,Tt,Fe,pt[0].width,pt[0].height);for(let Ce=0,O=pt.length;Ce<O;Ce++)He=pt[Ce],It?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,He.width,He.height,je,Ve,He.data):t.texImage2D(i.TEXTURE_2D,Ce,Fe,He.width,He.height,0,je,Ve,He.data);b.generateMipmaps=!1}else It?($t&&t.texStorage2D(i.TEXTURE_2D,Tt,Fe,me.width,me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,je,Ve,me.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,me.width,me.height,0,je,Ve,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){It&&$t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Fe,pt[0].width,pt[0].height,me.depth);for(let Ce=0,O=pt.length;Ce<O;Ce++)He=pt[Ce],b.format!==_i?je!==null?It?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,He.width,He.height,me.depth,je,He.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ce,Fe,He.width,He.height,me.depth,0,He.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,He.width,He.height,me.depth,je,Ve,He.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ce,Fe,He.width,He.height,me.depth,0,je,Ve,He.data)}else{It&&$t&&t.texStorage2D(i.TEXTURE_2D,Tt,Fe,pt[0].width,pt[0].height);for(let Ce=0,O=pt.length;Ce<O;Ce++)He=pt[Ce],b.format!==_i?je!==null?It?t.compressedTexSubImage2D(i.TEXTURE_2D,Ce,0,0,He.width,He.height,je,He.data):t.compressedTexImage2D(i.TEXTURE_2D,Ce,Fe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,He.width,He.height,je,Ve,He.data):t.texImage2D(i.TEXTURE_2D,Ce,Fe,He.width,He.height,0,je,Ve,He.data)}else if(b.isDataArrayTexture)It?($t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Fe,me.width,me.height,me.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,je,Ve,me.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,me.width,me.height,me.depth,0,je,Ve,me.data);else if(b.isData3DTexture)It?($t&&t.texStorage3D(i.TEXTURE_3D,Tt,Fe,me.width,me.height,me.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,je,Ve,me.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,me.width,me.height,me.depth,0,je,Ve,me.data);else if(b.isFramebufferTexture){if($t)if(It)t.texStorage2D(i.TEXTURE_2D,Tt,Fe,me.width,me.height);else{let Ce=me.width,O=me.height;for(let Ie=0;Ie<Tt;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Fe,Ce,O,0,je,Ve,null),Ce>>=1,O>>=1}}else if(pt.length>0&&Pt){It&&$t&&t.texStorage2D(i.TEXTURE_2D,Tt,Fe,pt[0].width,pt[0].height);for(let Ce=0,O=pt.length;Ce<O;Ce++)He=pt[Ce],It?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,je,Ve,He):t.texImage2D(i.TEXTURE_2D,Ce,Fe,je,Ve,He);b.generateMipmaps=!1}else It?($t&&t.texStorage2D(i.TEXTURE_2D,Tt,Fe,me.width,me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,Ve,me)):t.texImage2D(i.TEXTURE_2D,0,Fe,je,Ve,me);M(b,Pt)&&_(be),qe.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Xe(C,b,Q){if(b.image.length!==6)return;let be=oe(C,b),xe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Q);let Ee=n.get(xe);if(xe.version!==Ee.__version||be===!0){t.activeTexture(i.TEXTURE0+Q);let qe=zt.getPrimaries(zt.workingColorSpace),Ue=b.colorSpace===ci?null:zt.getPrimaries(b.colorSpace),ze=b.colorSpace===ci||qe===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let it=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,me=[];for(let Ce=0;Ce<6;Ce++)!it&&!yt?me[Ce]=v(b.image[Ce],!1,!0,s.maxCubemapSize):me[Ce]=yt?b.image[Ce].image:b.image[Ce],me[Ce]=vt(b,me[Ce]);let Pt=me[0],je=g(Pt)||o,Ve=r.convert(b.format,b.colorSpace),Fe=r.convert(b.type),He=T(b.internalFormat,Ve,Fe,b.colorSpace),pt=o&&b.isVideoTexture!==!0,It=Ee.__version===void 0||be===!0,$t=U(b,Pt,je);ie(i.TEXTURE_CUBE_MAP,b,je);let Tt;if(it){pt&&It&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$t,He,Pt.width,Pt.height);for(let Ce=0;Ce<6;Ce++){Tt=me[Ce].mipmaps;for(let O=0;O<Tt.length;O++){let Ie=Tt[O];b.format!==_i?Ve!==null?pt?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O,0,0,Ie.width,Ie.height,Ve,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O,He,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O,0,0,Ie.width,Ie.height,Ve,Fe,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O,He,Ie.width,Ie.height,0,Ve,Fe,Ie.data)}}}else{Tt=b.mipmaps,pt&&It&&(Tt.length>0&&$t++,t.texStorage2D(i.TEXTURE_CUBE_MAP,$t,He,me[0].width,me[0].height));for(let Ce=0;Ce<6;Ce++)if(yt){pt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,me[Ce].width,me[Ce].height,Ve,Fe,me[Ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,He,me[Ce].width,me[Ce].height,0,Ve,Fe,me[Ce].data);for(let O=0;O<Tt.length;O++){let Re=Tt[O].image[Ce].image;pt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O+1,0,0,Re.width,Re.height,Ve,Fe,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O+1,He,Re.width,Re.height,0,Ve,Fe,Re.data)}}else{pt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Ve,Fe,me[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,He,Ve,Fe,me[Ce]);for(let O=0;O<Tt.length;O++){let Ie=Tt[O];pt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O+1,0,0,Ve,Fe,Ie.image[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O+1,He,Ve,Fe,Ie.image[Ce])}}}M(b,je)&&_(i.TEXTURE_CUBE_MAP),Ee.__version=xe.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Be(C,b,Q,be,xe,Ee){let qe=r.convert(Q.format,Q.colorSpace),Ue=r.convert(Q.type),ze=T(Q.internalFormat,qe,Ue,Q.colorSpace);if(!n.get(b).__hasExternalTextures){let yt=Math.max(1,b.width>>Ee),me=Math.max(1,b.height>>Ee);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,Ee,ze,yt,me,b.depth,0,qe,Ue,null):t.texImage2D(xe,Ee,ze,yt,me,0,qe,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),$e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,xe,n.get(Q).__webglTexture,0,st(b)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,be,xe,n.get(Q).__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,b,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let be=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Q||$e(b)){let xe=b.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Ki?be=i.DEPTH_COMPONENT32F:xe.type===Zi&&(be=i.DEPTH_COMPONENT24));let Ee=st(b);$e(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,be,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,be,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,be,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){let be=st(b);Q&&$e(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,i.DEPTH24_STENCIL8,b.width,b.height):$e(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let be=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let xe=0;xe<be.length;xe++){let Ee=be[xe],qe=r.convert(Ee.format,Ee.colorSpace),Ue=r.convert(Ee.type),ze=T(Ee.internalFormat,qe,Ue,Ee.colorSpace),it=st(b);Q&&$e(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,ze,b.width,b.height):$e(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,ze,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ze,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let be=n.get(b.depthTexture).__webglTexture,xe=st(b);if(b.depthTexture.format===gs)$e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,be,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,be,0);else if(b.depthTexture.format===sr)$e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,be,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function Qe(C){let b=n.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");ut(b.__webglFramebuffer,C)}else if(Q){b.__webglDepthbuffer=[];for(let be=0;be<6;be++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[be]),b.__webglDepthbuffer[be]=i.createRenderbuffer(),ht(b.__webglDepthbuffer[be],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),ht(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function At(C,b,Q){let be=n.get(C);b!==void 0&&Be(be.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&Qe(C)}function Y(C){let b=C.texture,Q=n.get(C),be=n.get(b);C.addEventListener("dispose",q),C.isWebGLMultipleRenderTargets!==!0&&(be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture()),be.__version=b.version,a.memory.textures++);let xe=C.isWebGLCubeRenderTarget===!0,Ee=C.isWebGLMultipleRenderTargets===!0,qe=g(C)||o;if(xe){Q.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(o&&b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[Ue]=[];for(let ze=0;ze<b.mipmaps.length;ze++)Q.__webglFramebuffer[Ue][ze]=i.createFramebuffer()}else Q.__webglFramebuffer[Ue]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)Q.__webglFramebuffer[Ue]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Ee)if(s.drawBuffers){let Ue=C.texture;for(let ze=0,it=Ue.length;ze<it;ze++){let yt=n.get(Ue[ze]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&$e(C)===!1){let Ue=Ee?b:[b];Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ze=0;ze<Ue.length;ze++){let it=Ue[ze];Q.__webglColorRenderbuffer[ze]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ze]);let yt=r.convert(it.format,it.colorSpace),me=r.convert(it.type),Pt=T(it.internalFormat,yt,me,it.colorSpace,C.isXRRenderTarget===!0),je=st(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Pt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ze])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(Q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,be.__webglTexture),ie(i.TEXTURE_CUBE_MAP,b,qe);for(let Ue=0;Ue<6;Ue++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let ze=0;ze<b.mipmaps.length;ze++)Be(Q.__webglFramebuffer[Ue][ze],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,ze);else Be(Q.__webglFramebuffer[Ue],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);M(b,qe)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){let Ue=C.texture;for(let ze=0,it=Ue.length;ze<it;ze++){let yt=Ue[ze],me=n.get(yt);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),ie(i.TEXTURE_2D,yt,qe),Be(Q.__webglFramebuffer,C,yt,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,0),M(yt,qe)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ue=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Ue=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ue,be.__webglTexture),ie(Ue,b,qe),o&&b.mipmaps&&b.mipmaps.length>0)for(let ze=0;ze<b.mipmaps.length;ze++)Be(Q.__webglFramebuffer[ze],C,b,i.COLOR_ATTACHMENT0,Ue,ze);else Be(Q.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,Ue,0);M(b,qe)&&_(Ue),t.unbindTexture()}C.depthBuffer&&Qe(C)}function hn(C){let b=g(C)||o,Q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let be=0,xe=Q.length;be<xe;be++){let Ee=Q[be];if(M(Ee,b)){let qe=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(Ee).__webglTexture;t.bindTexture(qe,Ue),_(qe),t.unbindTexture()}}}function Ze(C){if(o&&C.samples>0&&$e(C)===!1){let b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Q=C.width,be=C.height,xe=i.COLOR_BUFFER_BIT,Ee=[],qe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(C),ze=C.isWebGLMultipleRenderTargets===!0;if(ze)for(let it=0;it<b.length;it++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let it=0;it<b.length;it++){Ee.push(i.COLOR_ATTACHMENT0+it),C.depthBuffer&&Ee.push(qe);let yt=Ue.__ignoreDepthValues!==void 0?Ue.__ignoreDepthValues:!1;if(yt===!1&&(C.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),ze&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[it]),yt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[qe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[qe])),ze){let me=n.get(b[it]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,Q,be,0,0,Q,be,xe,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ze)for(let it=0;it<b.length;it++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[it]);let yt=n.get(b[it]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,yt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}}function st(C){return Math.min(s.maxSamples,C.samples)}function $e(C){let b=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Yt(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function vt(C,b){let Q=C.colorSpace,be=C.format,xe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===hl||Q!==Ui&&Q!==ci&&(zt.getTransfer(Q)===en?o===!1?e.has("EXT_sRGB")===!0&&be===_i?(C.format=hl,C.minFilter=li,C.generateMipmaps=!1):b=Ua.sRGBToLinear(b):(be!==_i||xe!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),b}this.allocateTextureUnit=P,this.resetTextureUnits=te,this.setTexture2D=$,this.setTexture2DArray=ae,this.setTexture3D=N,this.setTextureCube=se,this.rebindTextures=At,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=hn,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=$e}function Y0(i,e,t){let n=t.isWebGL2;function s(r,a=ci){let o,l=zt.getTransfer(a);if(r===Qi)return i.UNSIGNED_BYTE;if(r===lu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===cu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===kd)return i.BYTE;if(r===Hd)return i.SHORT;if(r===Ql)return i.UNSIGNED_SHORT;if(r===ou)return i.INT;if(r===Zi)return i.UNSIGNED_INT;if(r===Ki)return i.FLOAT;if(r===Ir)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===zd)return i.ALPHA;if(r===_i)return i.RGBA;if(r===Vd)return i.LUMINANCE;if(r===Gd)return i.LUMINANCE_ALPHA;if(r===gs)return i.DEPTH_COMPONENT;if(r===sr)return i.DEPTH_STENCIL;if(r===hl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Wd)return i.RED;if(r===hu)return i.RED_INTEGER;if(r===Xd)return i.RG;if(r===uu)return i.RG_INTEGER;if(r===du)return i.RGBA_INTEGER;if(r===Eo||r===To||r===wo||r===Ao)if(l===en)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Eo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Eo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===To)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ao)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pc||r===Ic||r===Lc||r===Dc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Pc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ic)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Uc||r===Nc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Uc)return l===en?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Nc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Oc||r===Fc||r===Bc||r===kc||r===Hc||r===zc||r===Vc||r===Gc||r===Wc||r===Xc||r===qc||r===Yc||r===$c||r===Zc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Oc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$c)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zc)return l===en?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ro||r===Kc||r===Jc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ro)return l===en?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qd||r===jc||r===Qc||r===eh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ro)return o.COMPRESSED_RED_RGTC1_EXT;if(r===jc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===eh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ms?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Tl=class extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hi=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},$0={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,y=.005;c.inputState.pinching&&d>u+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wl=class extends ts{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,y=null,v=t.getContextAttributes(),g=null,p=null,M=[],_=[],T=new ke,U=null,I=new qn;I.layers.enable(1),I.viewport=new On;let L=new qn;L.layers.enable(2),L.viewport=new On;let q=[I,L],S=new Tl;S.layers.enable(1),S.layers.enable(2);let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let oe=M[ie];return oe===void 0&&(oe=new Tr,M[ie]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ie){let oe=M[ie];return oe===void 0&&(oe=new Tr,M[ie]=oe),oe.getGripSpace()},this.getHand=function(ie){let oe=M[ie];return oe===void 0&&(oe=new Tr,M[ie]=oe),oe.getHandSpace()};function k(ie){let oe=_.indexOf(ie.inputSource);if(oe===-1)return;let De=M[oe];De!==void 0&&(De.update(ie.inputSource,ie.frame,c||a),De.dispatchEvent({type:ie.type,data:ie.inputSource}))}function te(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",P);for(let ie=0;ie<M.length;ie++){let oe=_[ie];oe!==null&&(_[ie]=null,M[ie].disconnect(oe))}R=null,D=null,e.setRenderTarget(g),u=null,d=null,f=null,s=null,p=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",te),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let oe={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new Ni(u.framebufferWidth,u.framebufferHeight,{format:_i,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let oe=null,De=null,Xe=null;v.depth&&(Xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=v.stencil?sr:gs,De=v.stencil?ms:Zi);let Be={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Ni(d.textureWidth,d.textureHeight,{format:_i,type:Qi,depthTexture:new Wa(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let ht=e.properties.get(p);ht.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(ie){for(let oe=0;oe<ie.removed.length;oe++){let De=ie.removed[oe],Xe=_.indexOf(De);Xe>=0&&(_[Xe]=null,M[Xe].disconnect(De))}for(let oe=0;oe<ie.added.length;oe++){let De=ie.added[oe],Xe=_.indexOf(De);if(Xe===-1){for(let ht=0;ht<M.length;ht++)if(ht>=_.length){_.push(De),Xe=ht;break}else if(_[ht]===null){_[ht]=De,Xe=ht;break}if(Xe===-1)break}let Be=M[Xe];Be&&Be.connect(De)}}let G=new F,$=new F;function ae(ie,oe,De){G.setFromMatrixPosition(oe.matrixWorld),$.setFromMatrixPosition(De.matrixWorld);let Xe=G.distanceTo($),Be=oe.projectionMatrix.elements,ht=De.projectionMatrix.elements,ut=Be[14]/(Be[10]-1),Qe=Be[14]/(Be[10]+1),At=(Be[9]+1)/Be[5],Y=(Be[9]-1)/Be[5],hn=(Be[8]-1)/Be[0],Ze=(ht[8]+1)/ht[0],st=ut*hn,$e=ut*Ze,Yt=Xe/(-hn+Ze),vt=Yt*-hn;oe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(vt),ie.translateZ(Yt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();let C=ut+Yt,b=Qe+Yt,Q=st-vt,be=$e+(Xe-vt),xe=At*Qe/b*C,Ee=Y*Qe/b*C;ie.projectionMatrix.makePerspective(Q,be,xe,Ee,C,b),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}function N(ie,oe){oe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(oe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;S.near=L.near=I.near=ie.near,S.far=L.far=I.far=ie.far,(R!==S.near||D!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,D=S.far);let oe=ie.parent,De=S.cameras;N(S,oe);for(let Xe=0;Xe<De.length;Xe++)N(De[Xe],oe);De.length===2?ae(S,I,L):S.projectionMatrix.copy(I.projectionMatrix),se(ie,S,oe)};function se(ie,oe,De){De===null?ie.matrix.copy(oe.matrixWorld):(ie.matrix.copy(De.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(oe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ul*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ie)};let Z=null;function ue(ie,oe){if(h=oe.getViewerPose(c||a),y=oe,h!==null){let De=h.views;u!==null&&(e.setRenderTargetFramebuffer(p,u.framebuffer),e.setRenderTarget(p));let Xe=!1;De.length!==S.cameras.length&&(S.cameras.length=0,Xe=!0);for(let Be=0;Be<De.length;Be++){let ht=De[Be],ut=null;if(u!==null)ut=u.getViewport(ht);else{let At=f.getViewSubImage(d,ht);ut=At.viewport,Be===0&&(e.setRenderTargetTextures(p,At.colorTexture,d.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(p))}let Qe=q[Be];Qe===void 0&&(Qe=new qn,Qe.layers.enable(Be),Qe.viewport=new On,q[Be]=Qe),Qe.matrix.fromArray(ht.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ht.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(ut.x,ut.y,ut.width,ut.height),Be===0&&(S.matrix.copy(Qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Xe===!0&&S.cameras.push(Qe)}}for(let De=0;De<M.length;De++){let Xe=_[De],Be=M[De];Xe!==null&&Be!==void 0&&Be.update(Xe,oe,c||a)}Z&&Z(ie,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),y=null}let Pe=new vu;Pe.setAnimationLoop(ue),this.setAnimationLoop=function(ie){Z=ie},this.dispose=function(){}}};function Z0(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,_u(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,_,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&u(g,p,T)):p.isMeshMatcapMaterial?(r(g,p),y(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function K0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let T=_.program;n.uniformBlockBinding(M,T)}function c(M,_){let T=s[M.id];T===void 0&&(y(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",g));let U=_.program;n.updateUBOMapping(M,U);let I=e.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function h(M){let _=f();M.__bindingPointIndex=_;let T=i.createBuffer(),U=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],T=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let I=0,L=T.length;I<L;I++){let q=Array.isArray(T[I])?T[I]:[T[I]];for(let S=0,R=q.length;S<R;S++){let D=q[S];if(u(D,I,S,U)===!0){let k=D.__offset,te=Array.isArray(D.value)?D.value:[D.value],P=0;for(let G=0;G<te.length;G++){let $=te[G],ae=v($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,k+P,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,P),P+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,_,T,U){let I=M.value,L=_+"_"+T;if(U[L]===void 0)return typeof I=="number"||typeof I=="boolean"?U[L]=I:U[L]=I.clone(),!0;{let q=U[L];if(typeof I=="number"||typeof I=="boolean"){if(q!==I)return U[L]=I,!0}else if(q.equals(I)===!1)return q.copy(I),!0}return!1}function y(M){let _=M.uniforms,T=0,U=16;for(let L=0,q=_.length;L<q;L++){let S=Array.isArray(_[L])?_[L]:[_[L]];for(let R=0,D=S.length;R<D;R++){let k=S[R],te=Array.isArray(k.value)?k.value:[k.value];for(let P=0,G=te.length;P<G;P++){let $=te[P],ae=v($),N=T%U;N!==0&&U-N<ae.boundary&&(T+=U-N),k.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=ae.storage}}}let I=T%U;return I>0&&(T+=U-I),M.__size=T,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let T=a.indexOf(_.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Nr=class{constructor(e={}){let{canvas:t=rf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let u=new Uint32Array(4),y=new Int32Array(4),v=null,g=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this._useLegacyLights=!1,this.toneMapping=ji,this.toneMappingExposure=1;let _=this,T=!1,U=0,I=0,L=null,q=-1,S=null,R=new On,D=new On,k=null,te=new xt(0),P=0,G=t.width,$=t.height,ae=1,N=null,se=null,Z=new On(0,0,G,$),ue=new On(0,0,G,$),Pe=!1,ie=new Ur,oe=!1,De=!1,Xe=null,Be=new bn,ht=new ke,ut=new F,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function At(){return L===null?ae:1}let Y=n;function hn(E,W){for(let X=0;X<E.length;X++){let ne=E[X],K=t.getContext(ne,W);if(K!==null)return K}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),Y===null){let W=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&W.shift(),Y=hn(W,E),Y===null)throw hn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ze,st,$e,Yt,vt,C,b,Q,be,xe,Ee,qe,Ue,ze,it,yt,me,Pt,je,Ve,Fe,He,pt,It;function $t(){Ze=new mg(Y),st=new cg(Y,Ze,e),Ze.init(st),He=new Y0(Y,Ze,st),$e=new X0(Y,Ze,st),Yt=new yg(Y),vt=new D0,C=new q0(Y,Ze,$e,vt,st,He,Yt),b=new ug(_),Q=new pg(_),be=new wf(Y,st),pt=new og(Y,Ze,be,st),xe=new gg(Y,be,Yt,pt),Ee=new bg(Y,xe,be,Yt),je=new Mg(Y,st,C),yt=new hg(vt),qe=new L0(_,b,Q,Ze,st,pt,yt),Ue=new Z0(_,vt),ze=new N0,it=new z0(Ze,st),Pt=new ag(_,b,Q,$e,Ee,d,l),me=new W0(_,Ee,st),It=new K0(Y,Yt,st,$e),Ve=new lg(Y,Ze,Yt,st),Fe=new xg(Y,Ze,Yt,st),Yt.programs=qe.programs,_.capabilities=st,_.extensions=Ze,_.properties=vt,_.renderLists=ze,_.shadowMap=me,_.state=$e,_.info=Yt}$t();let Tt=new wl(_,Y);this.xr=Tt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(G,$,!1))},this.getSize=function(E){return E.set(G,$)},this.setSize=function(E,W,X=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,$=W,t.width=Math.floor(E*ae),t.height=Math.floor(W*ae),X===!0&&(t.style.width=E+"px",t.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(G*ae,$*ae).floor()},this.setDrawingBufferSize=function(E,W,X){G=E,$=W,ae=X,t.width=Math.floor(E*X),t.height=Math.floor(W*X),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,W,X,ne){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,W,X,ne),$e.viewport(R.copy(Z).multiplyScalar(ae).floor())},this.getScissor=function(E){return E.copy(ue)},this.setScissor=function(E,W,X,ne){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,W,X,ne),$e.scissor(D.copy(ue).multiplyScalar(ae).floor())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(E){$e.setScissorTest(Pe=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(E=!0,W=!0,X=!0){let ne=0;if(E){let K=!1;if(L!==null){let Oe=L.texture.format;K=Oe===du||Oe===uu||Oe===hu}if(K){let Oe=L.texture.type,Ke=Oe===Qi||Oe===Zi||Oe===Ql||Oe===ms||Oe===lu||Oe===cu,rt=Pt.getClearColor(),ft=Pt.getClearAlpha(),Mt=rt.r,mt=rt.g,nt=rt.b;Ke?(u[0]=Mt,u[1]=mt,u[2]=nt,u[3]=ft,Y.clearBufferuiv(Y.COLOR,0,u)):(y[0]=Mt,y[1]=mt,y[2]=nt,y[3]=ft,Y.clearBufferiv(Y.COLOR,0,y))}else ne|=Y.COLOR_BUFFER_BIT}W&&(ne|=Y.DEPTH_BUFFER_BIT),X&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ze.dispose(),it.dispose(),vt.dispose(),b.dispose(),Q.dispose(),Ee.dispose(),pt.dispose(),It.dispose(),qe.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Cn),Tt.removeEventListener("sessionend",Ht),Xe&&(Xe.dispose(),Xe=null),gn.stop()};function Ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Yt.autoReset,W=me.enabled,X=me.autoUpdate,ne=me.needsUpdate,K=me.type;$t(),Yt.autoReset=E,me.enabled=W,me.autoUpdate=X,me.needsUpdate=ne,me.type=K}function Ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Re(E){let W=E.target;W.removeEventListener("dispose",Re),tt(W)}function tt(E){Te(E),vt.remove(E)}function Te(E){let W=vt.get(E).programs;W!==void 0&&(W.forEach(function(X){qe.releaseProgram(X)}),E.isShaderMaterial&&qe.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,X,ne,K,Oe){W===null&&(W=Qe);let Ke=K.isMesh&&K.matrixWorld.determinant()<0,rt=Kn(E,W,X,ne,K);$e.setMaterial(ne,Ke);let ft=X.index,Mt=1;if(ne.wireframe===!0){if(ft=xe.getWireframeAttribute(X),ft===void 0)return;Mt=2}let mt=X.drawRange,nt=X.attributes.position,an=mt.start*Mt,Fn=(mt.start+mt.count)*Mt;Oe!==null&&(an=Math.max(an,Oe.start*Mt),Fn=Math.min(Fn,(Oe.start+Oe.count)*Mt)),ft!==null?(an=Math.max(an,0),Fn=Math.min(Fn,ft.count)):nt!=null&&(an=Math.max(an,0),Fn=Math.min(Fn,nt.count));let Ut=Fn-an;if(Ut<0||Ut===1/0)return;pt.setup(K,ne,rt,X,ft);let ii,tn=Ve;if(ft!==null&&(ii=be.get(ft),tn=Fe,tn.setIndex(ii)),K.isMesh)ne.wireframe===!0?($e.setLineWidth(ne.wireframeLinewidth*At()),tn.setMode(Y.LINES)):tn.setMode(Y.TRIANGLES);else if(K.isLine){let bt=ne.linewidth;bt===void 0&&(bt=1),$e.setLineWidth(bt*At()),K.isLineSegments?tn.setMode(Y.LINES):K.isLineLoop?tn.setMode(Y.LINE_LOOP):tn.setMode(Y.LINE_STRIP)}else K.isPoints?tn.setMode(Y.POINTS):K.isSprite&&tn.setMode(Y.TRIANGLES);if(K.isBatchedMesh)tn.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)tn.renderInstances(an,Ut,K.count);else if(X.isInstancedBufferGeometry){let bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ts=Math.min(X.instanceCount,bt);tn.renderInstances(an,Ut,Ts)}else tn.render(an,Ut)};function Ye(E,W,X){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=Qn,E.needsUpdate=!0,yn(E,W,X),E.side=es,E.needsUpdate=!0,yn(E,W,X),E.side=pn):yn(E,W,X)}this.compile=function(E,W,X=null){X===null&&(X=E),g=it.get(X),g.init(),M.push(g),X.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),E!==X&&E.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights(_._useLegacyLights);let ne=new Set;return E.traverse(function(K){let Oe=K.material;if(Oe)if(Array.isArray(Oe))for(let Ke=0;Ke<Oe.length;Ke++){let rt=Oe[Ke];Ye(rt,X,K),ne.add(rt)}else Ye(Oe,X,K),ne.add(Oe)}),M.pop(),g=null,ne},this.compileAsync=function(E,W,X=null){let ne=this.compile(E,W,X);return new Promise(K=>{function Oe(){if(ne.forEach(function(Ke){vt.get(Ke).currentProgram.isReady()&&ne.delete(Ke)}),ne.size===0){K(E);return}setTimeout(Oe,10)}Ze.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let dt=null;function Rt(E){dt&&dt(E)}function Cn(){gn.stop()}function Ht(){gn.start()}let gn=new vu;gn.setAnimationLoop(Rt),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(E){dt=E,Tt.setAnimationLoop(E),E===null?gn.stop():gn.start()},Tt.addEventListener("sessionstart",Cn),Tt.addEventListener("sessionend",Ht),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(W),W=Tt.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,W,L),g=it.get(E,M.length),g.init(),M.push(g),Be.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ie.setFromProjectionMatrix(Be),De=this.localClippingEnabled,oe=yt.init(this.clippingPlanes,De),v=ze.get(E,p.length),v.init(),p.push(v),un(E,W,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(N,se),this.info.render.frame++,oe===!0&&yt.beginShadows();let X=g.state.shadowsArray;if(me.render(X,E,W),oe===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Pt.render(v,E),g.setupLights(_._useLegacyLights),W.isArrayCamera){let ne=W.cameras;for(let K=0,Oe=ne.length;K<Oe;K++){let Ke=ne[K];Zn(v,E,Ke,Ke.viewport)}}else Zn(v,E,W);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(_,E,W),pt.resetDefaultState(),q=-1,S=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function un(E,W,X,ne){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){ne&&ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Be);let Ke=Ee.update(E),rt=E.material;rt.visible&&v.push(E,Ke,rt,X,ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ie.intersectsObject(E))){let Ke=Ee.update(E),rt=E.material;if(ne&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ut.copy(E.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),ut.copy(Ke.boundingSphere.center)),ut.applyMatrix4(E.matrixWorld).applyMatrix4(Be)),Array.isArray(rt)){let ft=Ke.groups;for(let Mt=0,mt=ft.length;Mt<mt;Mt++){let nt=ft[Mt],an=rt[nt.materialIndex];an&&an.visible&&v.push(E,Ke,an,X,ut.z,nt)}}else rt.visible&&v.push(E,Ke,rt,X,ut.z,null)}}let Oe=E.children;for(let Ke=0,rt=Oe.length;Ke<rt;Ke++)un(Oe[Ke],W,X,ne)}function Zn(E,W,X,ne){let K=E.opaque,Oe=E.transmissive,Ke=E.transparent;g.setupLightsView(X),oe===!0&&yt.setGlobalState(_.clippingPlanes,X),Oe.length>0&&bi(K,Oe,W,X),ne&&$e.viewport(R.copy(ne)),K.length>0&&xn(K,W,X),Oe.length>0&&xn(Oe,W,X),Ke.length>0&&xn(Ke,W,X),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function bi(E,W,X,ne){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let Oe=st.isWebGL2;Xe===null&&(Xe=new Ni(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")?Ir:Qi,minFilter:Pr,samples:Oe?4:0})),_.getDrawingBufferSize(ht),Oe?Xe.setSize(ht.x,ht.y):Xe.setSize(dl(ht.x),dl(ht.y));let Ke=_.getRenderTarget();_.setRenderTarget(Xe),_.getClearColor(te),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let rt=_.toneMapping;_.toneMapping=ji,xn(E,X,ne),C.updateMultisampleRenderTarget(Xe),C.updateRenderTargetMipmap(Xe);let ft=!1;for(let Mt=0,mt=W.length;Mt<mt;Mt++){let nt=W[Mt],an=nt.object,Fn=nt.geometry,Ut=nt.material,ii=nt.group;if(Ut.side===pn&&an.layers.test(ne.layers)){let tn=Ut.side;Ut.side=Qn,Ut.needsUpdate=!0,Vt(an,X,ne,Fn,Ut,ii),Ut.side=tn,Ut.needsUpdate=!0,ft=!0}}ft===!0&&(C.updateMultisampleRenderTarget(Xe),C.updateRenderTargetMipmap(Xe)),_.setRenderTarget(Ke),_.setClearColor(te,P),_.toneMapping=rt}function xn(E,W,X){let ne=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Oe=E.length;K<Oe;K++){let Ke=E[K],rt=Ke.object,ft=Ke.geometry,Mt=ne===null?Ke.material:ne,mt=Ke.group;rt.layers.test(X.layers)&&Vt(rt,W,X,ft,Mt,mt)}}function Vt(E,W,X,ne,K,Oe){E.onBeforeRender(_,W,X,ne,K,Oe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(_,W,X,ne,E,Oe),K.transparent===!0&&K.side===pn&&K.forceSinglePass===!1?(K.side=Qn,K.needsUpdate=!0,_.renderBufferDirect(X,W,ne,K,E,Oe),K.side=es,K.needsUpdate=!0,_.renderBufferDirect(X,W,ne,K,E,Oe),K.side=pn):_.renderBufferDirect(X,W,ne,K,E,Oe),E.onAfterRender(_,W,X,ne,K,Oe)}function yn(E,W,X){W.isScene!==!0&&(W=Qe);let ne=vt.get(E),K=g.state.lights,Oe=g.state.shadowsArray,Ke=K.state.version,rt=qe.getParameters(E,K.state,Oe,W,X),ft=qe.getProgramCacheKey(rt),Mt=ne.programs;ne.environment=E.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(E.isMeshStandardMaterial?Q:b).get(E.envMap||ne.environment),Mt===void 0&&(E.addEventListener("dispose",Re),Mt=new Map,ne.programs=Mt);let mt=Mt.get(ft);if(mt!==void 0){if(ne.currentProgram===mt&&ne.lightsStateVersion===Ke)return Gn(E,rt),mt}else rt.uniforms=qe.getUniforms(E),E.onBuild(X,rt,_),E.onBeforeCompile(rt,_),mt=qe.acquireProgram(rt,ft),Mt.set(ft,mt),ne.uniforms=rt.uniforms;let nt=ne.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(nt.clippingPlanes=yt.uniform),Gn(E,rt),ne.needsLights=as(E),ne.lightsStateVersion=Ke,ne.needsLights&&(nt.ambientLightColor.value=K.state.ambient,nt.lightProbe.value=K.state.probe,nt.directionalLights.value=K.state.directional,nt.directionalLightShadows.value=K.state.directionalShadow,nt.spotLights.value=K.state.spot,nt.spotLightShadows.value=K.state.spotShadow,nt.rectAreaLights.value=K.state.rectArea,nt.ltc_1.value=K.state.rectAreaLTC1,nt.ltc_2.value=K.state.rectAreaLTC2,nt.pointLights.value=K.state.point,nt.pointLightShadows.value=K.state.pointShadow,nt.hemisphereLights.value=K.state.hemi,nt.directionalShadowMap.value=K.state.directionalShadowMap,nt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,nt.spotShadowMap.value=K.state.spotShadowMap,nt.spotLightMatrix.value=K.state.spotLightMatrix,nt.spotLightMap.value=K.state.spotLightMap,nt.pointShadowMap.value=K.state.pointShadowMap,nt.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=mt,ne.uniformsList=null,mt}function fi(E){if(E.uniformsList===null){let W=E.currentProgram.getUniforms();E.uniformsList=tr.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function Gn(E,W){let X=vt.get(E);X.outputColorSpace=W.outputColorSpace,X.batching=W.batching,X.instancing=W.instancing,X.instancingColor=W.instancingColor,X.skinning=W.skinning,X.morphTargets=W.morphTargets,X.morphNormals=W.morphNormals,X.morphColors=W.morphColors,X.morphTargetsCount=W.morphTargetsCount,X.numClippingPlanes=W.numClippingPlanes,X.numIntersection=W.numClipIntersection,X.vertexAlphas=W.vertexAlphas,X.vertexTangents=W.vertexTangents,X.toneMapping=W.toneMapping}function Kn(E,W,X,ne,K){W.isScene!==!0&&(W=Qe),C.resetTextureUnits();let Oe=W.fog,Ke=ne.isMeshStandardMaterial?W.environment:null,rt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ui,ft=(ne.isMeshStandardMaterial?Q:b).get(ne.envMap||Ke),Mt=ne.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,mt=!!X.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),nt=!!X.morphAttributes.position,an=!!X.morphAttributes.normal,Fn=!!X.morphAttributes.color,Ut=ji;ne.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ut=_.toneMapping);let ii=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tn=ii!==void 0?ii.length:0,bt=vt.get(ne),Ts=g.state.lights;if(oe===!0&&(De===!0||E!==S)){let In=E===S&&ne.id===q;yt.setState(ne,E,In)}let nn=!1;ne.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ts.state.version||bt.outputColorSpace!==rt||K.isBatchedMesh&&bt.batching===!1||!K.isBatchedMesh&&bt.batching===!0||K.isInstancedMesh&&bt.instancing===!1||!K.isInstancedMesh&&bt.instancing===!0||K.isSkinnedMesh&&bt.skinning===!1||!K.isSkinnedMesh&&bt.skinning===!0||K.isInstancedMesh&&bt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&bt.instancingColor===!1&&K.instanceColor!==null||bt.envMap!==ft||ne.fog===!0&&bt.fog!==Oe||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==yt.numPlanes||bt.numIntersection!==yt.numIntersection)||bt.vertexAlphas!==Mt||bt.vertexTangents!==mt||bt.morphTargets!==nt||bt.morphNormals!==an||bt.morphColors!==Fn||bt.toneMapping!==Ut||st.isWebGL2===!0&&bt.morphTargetsCount!==tn)&&(nn=!0):(nn=!0,bt.__version=ne.version);let Pn=bt.currentProgram;nn===!0&&(Pn=yn(ne,W,K));let qr=!1,os=!1,fr=!1,_n=Pn.getUniforms(),Sn=bt.uniforms;if($e.useProgram(Pn.program)&&(qr=!0,os=!0,fr=!0),ne.id!==q&&(q=ne.id,os=!0),qr||S!==E){_n.setValue(Y,"projectionMatrix",E.projectionMatrix),_n.setValue(Y,"viewMatrix",E.matrixWorldInverse);let In=_n.map.cameraPosition;In!==void 0&&In.setValue(Y,ut.setFromMatrixPosition(E.matrixWorld)),st.logarithmicDepthBuffer&&_n.setValue(Y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&_n.setValue(Y,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,os=!0,fr=!0)}if(K.isSkinnedMesh){_n.setOptional(Y,K,"bindMatrix"),_n.setOptional(Y,K,"bindMatrixInverse");let In=K.skeleton;In&&(st.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),_n.setValue(Y,"boneTexture",In.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(_n.setOptional(Y,K,"batchingTexture"),_n.setValue(Y,"batchingTexture",K._matricesTexture,C));let ws=X.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0&&st.isWebGL2===!0)&&je.update(K,X,Pn),(os||bt.receiveShadow!==K.receiveShadow)&&(bt.receiveShadow=K.receiveShadow,_n.setValue(Y,"receiveShadow",K.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Sn.envMap.value=ft,Sn.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),os&&(_n.setValue(Y,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&ni(Sn,fr),Oe&&ne.fog===!0&&Ue.refreshFogUniforms(Sn,Oe),Ue.refreshMaterialUniforms(Sn,ne,ae,$,Xe),tr.upload(Y,fi(bt),Sn,C)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(tr.upload(Y,fi(bt),Sn,C),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&_n.setValue(Y,"center",K.center),_n.setValue(Y,"modelViewMatrix",K.modelViewMatrix),_n.setValue(Y,"normalMatrix",K.normalMatrix),_n.setValue(Y,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let In=ne.uniformsGroups;for(let As=0,fo=In.length;As<fo;As++)if(st.isWebGL2){let Rs=In[As];It.update(Rs,Pn),It.bind(Rs,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function ni(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function as(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,W,X){vt.get(E.texture).__webglTexture=W,vt.get(E.depthTexture).__webglTexture=X;let ne=vt.get(E);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=X===void 0,ne.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,W){let X=vt.get(E);X.__webglFramebuffer=W,X.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,X=0){L=E,U=W,I=X;let ne=!0,K=null,Oe=!1,Ke=!1;if(E){let ft=vt.get(E);ft.__useDefaultFramebuffer!==void 0?($e.bindFramebuffer(Y.FRAMEBUFFER,null),ne=!1):ft.__webglFramebuffer===void 0?C.setupRenderTarget(E):ft.__hasExternalTextures&&C.rebindTextures(E,vt.get(E.texture).__webglTexture,vt.get(E.depthTexture).__webglTexture);let Mt=E.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(Ke=!0);let mt=vt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(mt[W])?K=mt[W][X]:K=mt[W],Oe=!0):st.isWebGL2&&E.samples>0&&C.useMultisampledRTT(E)===!1?K=vt.get(E).__webglMultisampledFramebuffer:Array.isArray(mt)?K=mt[X]:K=mt,R.copy(E.viewport),D.copy(E.scissor),k=E.scissorTest}else R.copy(Z).multiplyScalar(ae).floor(),D.copy(ue).multiplyScalar(ae).floor(),k=Pe;if($e.bindFramebuffer(Y.FRAMEBUFFER,K)&&st.drawBuffers&&ne&&$e.drawBuffers(E,K),$e.viewport(R),$e.scissor(D),$e.setScissorTest(k),Oe){let ft=vt.get(E.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,ft.__webglTexture,X)}else if(Ke){let ft=vt.get(E.texture),Mt=W||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ft.__webglTexture,X||0,Mt)}q=-1},this.readRenderTargetPixels=function(E,W,X,ne,K,Oe,Ke){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ke!==void 0&&(rt=rt[Ke]),rt){$e.bindFramebuffer(Y.FRAMEBUFFER,rt);try{let ft=E.texture,Mt=ft.format,mt=ft.type;if(Mt!==_i&&He.convert(Mt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let nt=mt===Ir&&(Ze.has("EXT_color_buffer_half_float")||st.isWebGL2&&Ze.has("EXT_color_buffer_float"));if(mt!==Qi&&He.convert(mt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(mt===Ki&&(st.isWebGL2||Ze.has("OES_texture_float")||Ze.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-ne&&X>=0&&X<=E.height-K&&Y.readPixels(W,X,ne,K,He.convert(Mt),He.convert(mt),Oe)}finally{let ft=L!==null?vt.get(L).__webglFramebuffer:null;$e.bindFramebuffer(Y.FRAMEBUFFER,ft)}}},this.copyFramebufferToTexture=function(E,W,X=0){let ne=Math.pow(2,-X),K=Math.floor(W.image.width*ne),Oe=Math.floor(W.image.height*ne);C.setTexture2D(W,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,X,0,0,E.x,E.y,K,Oe),$e.unbindTexture()},this.copyTextureToTexture=function(E,W,X,ne=0){let K=W.image.width,Oe=W.image.height,Ke=He.convert(X.format),rt=He.convert(X.type);C.setTexture2D(X,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,X.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,X.unpackAlignment),W.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,ne,E.x,E.y,K,Oe,Ke,rt,W.image.data):W.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,ne,E.x,E.y,W.mipmaps[0].width,W.mipmaps[0].height,Ke,W.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,ne,E.x,E.y,Ke,rt,W.image),ne===0&&X.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(E,W,X,ne,K=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Oe=E.max.x-E.min.x+1,Ke=E.max.y-E.min.y+1,rt=E.max.z-E.min.z+1,ft=He.convert(ne.format),Mt=He.convert(ne.type),mt;if(ne.isData3DTexture)C.setTexture3D(ne,0),mt=Y.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)C.setTexture2DArray(ne,0),mt=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ne.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,ne.unpackAlignment);let nt=Y.getParameter(Y.UNPACK_ROW_LENGTH),an=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Fn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Ut=Y.getParameter(Y.UNPACK_SKIP_ROWS),ii=Y.getParameter(Y.UNPACK_SKIP_IMAGES),tn=X.isCompressedTexture?X.mipmaps[K]:X.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,tn.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,tn.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,E.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,E.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,E.min.z),X.isDataTexture||X.isData3DTexture?Y.texSubImage3D(mt,K,W.x,W.y,W.z,Oe,Ke,rt,ft,Mt,tn.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(mt,K,W.x,W.y,W.z,Oe,Ke,rt,ft,tn.data)):Y.texSubImage3D(mt,K,W.x,W.y,W.z,Oe,Ke,rt,ft,Mt,tn),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,nt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,an),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Fn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Ut),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ii),K===0&&ne.generateMipmaps&&Y.generateMipmap(mt),$e.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),$e.unbindTexture()},this.resetState=function(){U=0,I=0,L=null,$e.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ec?"display-p3":"srgb",t.unpackColorSpace=zt.workingColorSpace===ro?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bn?xs:pu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xs?Bn:Ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Al=class extends Nr{};Al.prototype.isWebGL1Renderer=!0;var Xa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qa=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Or=class extends is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xh=new F,qh=new F,Yh=new bn,el=new Lr,Ma=new rr,Rl=class extends Yn{constructor(e=new ti,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xh.fromBufferAttribute(t,s-1),qh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xh.distanceTo(qh);e.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,e.ray.intersectsSphere(Ma)===!1)return;Yh.copy(s).invert(),el.copy(e.ray).applyMatrix4(Yh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,h=new F,f=new F,d=new F,u=this.isLineSegments?2:1,y=n.index,g=n.attributes.position;if(y!==null){let p=Math.max(0,a.start),M=Math.min(y.count,a.start+a.count);for(let _=p,T=M-1;_<T;_+=u){let U=y.getX(_),I=y.getX(_+1);if(c.fromBufferAttribute(g,U),h.fromBufferAttribute(g,I),el.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let q=e.ray.origin.distanceTo(d);q<e.near||q>e.far||t.push({distance:q,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let _=p,T=M-1;_<T;_+=u){if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),el.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},$h=new F,Zh=new F,Ya=class extends Rl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$h.fromBufferAttribute(t,s),Zh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$h.distanceTo(Zh);e.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $a=class extends ui{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ke:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new bn;for(let u=0;u<=e;u++){let y=u/e;s[u]=this.getTangentAt(y,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(Vn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,y))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Vn(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],u*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fr=class extends di{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ke,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cl=class extends Fr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ba=new F,tl=new nc,nl=new nc,il=new nc,Pl=class extends di{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ba.subVectors(s[0],s[1]).add(s[0]),c=ba);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ba.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ba),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),tl.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,y,v,g),nl.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,y,v,g),il.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,y,v,g)}else this.curveType==="catmullrom"&&(tl.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),nl.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),il.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(tl.calc(l),nl.calc(l),il.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Kh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function J0(i,e){let t=1-i;return t*t*e}function j0(i,e){return 2*(1-i)*i*e}function Q0(i,e){return i*i*e}function wr(i,e,t,n){return J0(i,e)+j0(i,t)+Q0(i,n)}function ex(i,e){let t=1-i;return t*t*t*e}function tx(i,e){let t=1-i;return 3*t*t*i*e}function nx(i,e){return 3*(1-i)*i*i*e}function ix(i,e){return i*i*i*e}function Ar(i,e,t,n,s){return ex(i,e)+tx(i,t)+nx(i,n)+ix(i,s)}var Za=class extends di{constructor(e=new ke,t=new ke,n=new ke,s=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ke){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(e,s.x,r.x,a.x,o.x),Ar(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Il=class extends di{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(e,s.x,r.x,a.x,o.x),Ar(e,s.y,r.y,a.y,o.y),Ar(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ka=class extends di{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends di{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends di{constructor(e=new ke,t=new ke,n=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ke){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(wr(e,s.x,r.x,a.x),wr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dl=class extends di{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(wr(e,s.x,r.x,a.x),wr(e,s.y,r.y,a.y),wr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Kh(o,l.x,c.x,h.x,f.x),Kh(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ke().fromArray(s))}return this}},Jh=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Pl,CubicBezierCurve:Za,CubicBezierCurve3:Il,EllipseCurve:Fr,LineCurve:Ka,LineCurve3:Ll,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:Dl,SplineCurve:ja}),Ul=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Jh[s.type]().fromJSON(s))}return this}},or=class extends Ul{constructor(e){super(),this.type="Path",this.currentPoint=new ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ka(this.currentPoint.clone(),new ke(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ja(this.currentPoint.clone(),new ke(e,t),new ke(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Za(this.currentPoint.clone(),new ke(e,t),new ke(n,s),new ke(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ja(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Fr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ss=class i extends ti{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],y=0,v=[],g=n/2,p=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new cn(f,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(u,2));function M(){let T=new F,U=new F,I=0,L=(t-e)/n;for(let q=0;q<=r;q++){let S=[],R=q/r,D=R*(t-e)+e;for(let k=0;k<=s;k++){let te=k/s,P=te*l+o,G=Math.sin(P),$=Math.cos(P);U.x=D*G,U.y=-R*n+g,U.z=D*$,f.push(U.x,U.y,U.z),T.set(G,L,$).normalize(),d.push(T.x,T.y,T.z),u.push(te,1-R),S.push(y++)}v.push(S)}for(let q=0;q<s;q++)for(let S=0;S<r;S++){let R=v[S][q],D=v[S+1][q],k=v[S+1][q+1],te=v[S][q+1];h.push(R,D,te),h.push(D,k,te),I+=6}c.addGroup(p,I,0),p+=I}function _(T){let U=y,I=new ke,L=new F,q=0,S=T===!0?e:t,R=T===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,g*R,0),d.push(0,R,0),u.push(.5,.5),y++;let D=y;for(let k=0;k<=s;k++){let P=k/s*l+o,G=Math.cos(P),$=Math.sin(P);L.x=S*$,L.y=g*R,L.z=S*G,f.push(L.x,L.y,L.z),d.push(0,R,0),I.x=G*.5+.5,I.y=$*.5*R+.5,u.push(I.x,I.y),y++}for(let k=0;k<s;k++){let te=U+k,P=D+k;T===!0?h.push(P,P+1,te):h.push(P+1,P,te),q+=3}c.addGroup(p,q,T===!0?1:2),p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vi=class i extends ss{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nl=class i extends ti{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new cn(r,3)),this.setAttribute("normal",new cn(r.slice(),3)),this.setAttribute("uv",new cn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new F,T=new F,U=new F;for(let I=0;I<t.length;I+=3)u(t[I+0],_),u(t[I+1],T),u(t[I+2],U),l(_,T,U,M)}function l(M,_,T,U){let I=U+1,L=[];for(let q=0;q<=I;q++){L[q]=[];let S=M.clone().lerp(T,q/I),R=_.clone().lerp(T,q/I),D=I-q;for(let k=0;k<=D;k++)k===0&&q===I?L[q][k]=S:L[q][k]=S.clone().lerp(R,k/D)}for(let q=0;q<I;q++)for(let S=0;S<2*(I-q)-1;S++){let R=Math.floor(S/2);S%2===0?(d(L[q][R+1]),d(L[q+1][R]),d(L[q][R])):(d(L[q][R+1]),d(L[q+1][R+1]),d(L[q+1][R]))}}function c(M){let _=new F;for(let T=0;T<r.length;T+=3)_.x=r[T+0],_.y=r[T+1],_.z=r[T+2],_.normalize().multiplyScalar(M),r[T+0]=_.x,r[T+1]=_.y,r[T+2]=_.z}function h(){let M=new F;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let T=g(M)/2/Math.PI+.5,U=p(M)/Math.PI+.5;a.push(T,1-U)}y(),f()}function f(){for(let M=0;M<a.length;M+=6){let _=a[M+0],T=a[M+2],U=a[M+4],I=Math.max(_,T,U),L=Math.min(_,T,U);I>.9&&L<.1&&(_<.2&&(a[M+0]+=1),T<.2&&(a[M+2]+=1),U<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function u(M,_){let T=M*3;_.x=e[T+0],_.y=e[T+1],_.z=e[T+2]}function y(){let M=new F,_=new F,T=new F,U=new F,I=new ke,L=new ke,q=new ke;for(let S=0,R=0;S<r.length;S+=9,R+=6){M.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),T.set(r[S+6],r[S+7],r[S+8]),I.set(a[R+0],a[R+1]),L.set(a[R+2],a[R+3]),q.set(a[R+4],a[R+5]),U.copy(M).add(_).add(T).divideScalar(3);let D=g(U);v(I,R+0,M,D),v(L,R+2,_,D),v(q,R+4,T,D)}}function v(M,_,T,U){U<0&&M.x===1&&(a[_]=M.x-1),T.x===0&&T.z===0&&(a[_]=U/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Qa=class i extends Nl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var lr=class extends or{constructor(e){super(e),this.uuid=hr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new or().fromJSON(s))}return this}},sx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=wu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,d,u;if(n&&(r=cx(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let y=t;y<s;y+=t)f=i[y],d=i[y+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return Br(r,a,t,o,l,u,0),a}};function wu(i,e,t,n,s){let r,a;if(s===vx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=jh(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=jh(r,i[r],i[r+1],a);return a&&oo(a,a.next)&&(Hr(a),a=a.next),a}function _s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(oo(t,t.next)||ln(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Br(i,e,t,n,s,r,a){if(!i)return;!a&&r&&px(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?ax(i,n,s,r):rx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Hr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ox(_s(i),e,t),Br(i,e,t,n,s,r,2)):a===2&&lx(i,e,t,n,s,r):Br(_s(i),e,t,n,s,r,1);break}}}function rx(i){let e=i.prev,t=i,n=i.next;if(ln(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=d&&y.y>=f&&y.y<=u&&js(s,o,r,l,a,c,y.x,y.y)&&ln(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function ax(i,e,t,n){let s=i.prev,r=i,a=i.next;if(ln(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,u=o<l?o<c?o:c:l<c?l:c,y=h<f?h<d?h:d:f<d?f:d,v=o>l?o>c?o:c:l>c?l:c,g=h>f?h>d?h:d:f>d?f:d,p=Ol(u,y,e,t,n),M=Ol(v,g,e,t,n),_=i.prevZ,T=i.nextZ;for(;_&&_.z>=p&&T&&T.z<=M;){if(_.x>=u&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&js(o,h,l,f,c,d,_.x,_.y)&&ln(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=u&&T.x<=v&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&js(o,h,l,f,c,d,T.x,T.y)&&ln(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=p;){if(_.x>=u&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&js(o,h,l,f,c,d,_.x,_.y)&&ln(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=M;){if(T.x>=u&&T.x<=v&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&js(o,h,l,f,c,d,T.x,T.y)&&ln(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function ox(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!oo(s,r)&&Au(s,n,n.next,r)&&kr(s,r)&&kr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Hr(n),Hr(n.next),n=i=r),n=n.next}while(n!==i);return _s(n)}function lx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xx(a,o)){let l=Ru(a,o);a=_s(a,a.next),l=_s(l,l.next),Br(a,e,t,n,s,r,0),Br(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cx(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=wu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(gx(c));for(s.sort(hx),r=0;r<s.length;r++)t=ux(s[r],t);return t}function hx(i,e){return i.x-e.x}function ux(i,e){let t=dx(i,e);if(!t)return e;let n=Ru(t,i);return _s(n,n.next),_s(t,t.next)}function dx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&js(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),kr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&fx(s,t)))&&(s=t,h=f)),t=t.next;while(t!==o);return s}function fx(i,e){return ln(i.prev,i,e.prev)<0&&ln(e.next,i,i.next)<0}function px(i,e,t,n){let s=i;do s.z===0&&(s.z=Ol(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mx(s)}function mx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Ol(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function js(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function xx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yx(i,e)&&(kr(i,e)&&kr(e,i)&&_x(i,e)&&(ln(i.prev,i,e.prev)||ln(i,e.prev,e))||oo(i,e)&&ln(i.prev,i,i.next)>0&&ln(e.prev,e,e.next)>0)}function ln(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function oo(i,e){return i.x===e.x&&i.y===e.y}function Au(i,e,t,n){let s=Ea(ln(i,e,t)),r=Ea(ln(i,e,n)),a=Ea(ln(t,n,i)),o=Ea(ln(t,n,e));return!!(s!==r&&a!==o||s===0&&Sa(i,t,e)||r===0&&Sa(i,n,e)||a===0&&Sa(t,i,n)||o===0&&Sa(t,e,n))}function Sa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ea(i){return i>0?1:i<0?-1:0}function yx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Au(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function kr(i,e){return ln(i.prev,i,i.next)<0?ln(i,e,i.next)>=0&&ln(i,i.prev,e)>=0:ln(i,e,i.prev)<0||ln(i,i.next,e)<0}function _x(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ru(i,e){let t=new Fl(i.i,i.x,i.y),n=new Fl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jh(i,e,t,n){let s=new Fl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Rr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Qh(e),eu(n,e);let a=e.length;t.forEach(Qh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,eu(n,t[l]);let o=sx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Qh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function eu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var zr=class i extends ti{constructor(e=new lr([new ke(0,.5),new ke(-.5,-.5),new ke(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new cn(s,3)),this.setAttribute("normal",new cn(r,3)),this.setAttribute("uv",new cn(a,2));function c(h){let f=s.length/3,d=h.extractPoints(t),u=d.shape,y=d.holes;Rr.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,p=y.length;g<p;g++){let M=y[g];Rr.isClockWise(M)===!0&&(y[g]=M.reverse())}let v=Rr.triangulateShape(u,y);for(let g=0,p=y.length;g<p;g++){let M=y[g];u=u.concat(M)}for(let g=0,p=u.length;g<p;g++){let M=u[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,p=v.length;g<p;g++){let M=v[g],_=M[0]+f,T=M[1]+f,U=M[2]+f;n.push(_,T,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Mx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Mx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ti=class i extends ti{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new F,d=new F,u=[],y=[],v=[],g=[];for(let p=0;p<=n;p++){let M=[],_=p/n,T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let U=0;U<=t;U++){let I=U/t;f.x=-e*Math.cos(s+I*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+I*r)*Math.sin(a+_*o),y.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(I+T,1-_),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let _=h[p][M+1],T=h[p][M],U=h[p+1][M],I=h[p+1][M+1];(p!==0||a>0)&&u.push(_,T,I),(p!==n-1||l<Math.PI)&&u.push(T,U,I)}this.setIndex(u),this.setAttribute("position",new cn(y,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var kn=class extends is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mu,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ta(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function bx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var cr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bl=class extends cr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nh:r=e,o=2*t-n;break;case ih:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nh:a=e,l=2*n-t;break;case ih:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,y=(n-t)/(s-t),v=y*y,g=v*y,p=-d*g+2*d*v-d*y,M=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*y+1,_=(-1-u)*g+(1.5+u)*v+.5*y,T=u*g-u*v;for(let U=0;U!==o;++U)r[U]=p*a[h+U]+M*a[c+U]+_*a[l+U]+T*a[f+U];return r}},kl=class extends cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Hl=class extends cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ta(t,this.TimeBufferType),this.values=Ta(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ta(e.times,Array),values:Ta(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Aa:t=this.InterpolantFactoryMethodDiscrete;break;case Ra:t=this.InterpolantFactoryMethodLinear;break;case Co:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return Co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&bx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Co,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,u=f+n;for(let y=0;y!==n;++y){let v=t[f+y];if(v!==t[d+y]||v!==t[u+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=Ra;var vs=class extends Mi{};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Aa;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Mi{};zl.prototype.ValueTypeName="color";var Vl=class extends Mi{};Vl.prototype.ValueTypeName="number";var Gl=class extends cr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ns.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vr=class extends Mi{InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.DefaultInterpolation=Ra;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends Mi{};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Aa;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends Mi{};Wl.prototype.ValueTypeName="vector";var Xl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],y=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return y}return null}}},Sx=new Xl,ql=class{constructor(e){this.manager=e!==void 0?e:Sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var eo=class extends Yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var sl=new bn,tu=new F,nu=new F,Yl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new bn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new On(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(tu),nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nu),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var $l=class extends Yl{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new $l}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},no=class extends eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ic="\\[\\]\\.:\\/",Ex=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",Tx="[^"+ic.replace("\\.","")+"]",wx=/((?:WC+[\/:])*)/.source.replace("WC",sc),Ax=/(WCOD+)?/.source.replace("WCOD",Tx),Rx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),Cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),Px=new RegExp("^"+wx+Ax+Rx+Cx+"$"),Ix=["material","materials","bones","map"],Zl=class{constructor(e,t,n){let s=n||rn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ex,"")}static parseTrackName(e){let t=Px.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ix.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rn.Composite=Zl;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $x=new Float32Array(1);var io=class{constructor(e,t,n=0,s=1/0){this.ray=new Lr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Kl(e,this,n,t),n.sort(iu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Kl(e[s],this,n,t);return n.sort(iu),n}};function iu(i,e){return i.distance-e.distance}function Kl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Kl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);var Dx=35,Ux=25,Et=.95,$n=.35,bs=200,Bi=7,Ss=300,Xr=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),Nx=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],Ox=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch","paladin","exorcist","bandit","ranger","blacksmith","alchemist"],lo={tank:["knight","berserker","werewolf","ghoul"],melee:["assassin","ninja","samurai","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["hunter","ranger","alchemist"],caster:["mage","witch"]},Gr={tank:2,melee:2,support:1,ranged:1,caster:1};function Fx(i){let e=Math.max(1,i),t=Object.keys(Gr),n=t.reduce((l,c)=>l+(Gr[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(Gr[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(Gr[c]??0)-(Gr[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var et={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},ki=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist"];function Bx(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var kt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:4,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5}},co={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331}},Wr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp"},wi=ki.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function kx(i,e){Xr&&(ki.includes(i)&&wi[i]&&wi[i].kills++,ki.includes(e)&&wi[e]&&wi[e].deaths++)}function Hx(i,e){if(!Xr)return;for(let n of i)!n||!wi[n.class]||(wi[n.class].battles++,e!=null&&(n.player===e?wi[n.class].wins++:wi[n.class].losses++));let t=ki.map(n=>{let s=wi[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var Cu={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:8,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 3 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 3 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:3,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:7,target:"enemy",range:1,level:2,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 2 turns.",cost:6,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:7,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:6,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage to one enemy and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}]};function ce(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function ho(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,f=(u,y,v,g)=>{if(v)u.hp=Math.min(u.maxHp,u.hp+y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${y}`,!1,"heal");else{let p=u===s,M=!0;if(!p&&!g){let _=ce(u,"agi")*.7+ce(u,"luk")*.3;M=Math.random()*Math.max(.001,_)<=ce(s,"dex")}return M?(u.hp=Math.max(0,u.hp-y),u!==s&&(h=y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(y),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u,s)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),M}},d=(u,y,v,g)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,y,v,!1,g?"buff":"debuff")};switch(i){case"brave":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let u=2;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,d(r.x,r.y,`-${u} STR`,!1),d(s.x,s.y,`+${u} STR`,!0)}break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(ce(s,"int")-(ce(r,"int")*.7+ce(r,"luk")*.2)));f(r,u,!1,!0)}break;case"manaDrain":if(r){let u=Math.max(1,Math.floor(ce(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-u),s.mp=(s.mp||0)+u,d(r.x,r.y,`-${u} MP`,!1),d(s.x,s.y,`+${u} MP`,!0)}break;case"mantra":if(r){let u=Math.max(1,Math.floor(ce(s,"int")*.3));if(s.tempBuff=s.tempBuff||{},s.tempBuff.int=u,s.tempBuff.duration=3,d(s.x,s.y,`+${u} LUK`,!0),!r)break;r.tempBuff=r.tempBuff||{},r.tempBuff.luk=u,r.tempBuff.duration=3,d(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(f(s,Math.max(1,Math.floor(ce(s,"int")*.3+ce(s,"luk")*.2)),!0),!r)break;f(r,Math.max(1,Math.floor(ce(s,"int")*.3+ce(r,"luk")*.2)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,d(r.x,r.y,`-${u} VIT`,!1),d(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)&&f(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=u,r.tempDebuff.duration=4,d(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.6));f(r,u,!1)}break;case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"dex")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,d(r.x,r.y,`-${u} AGI`,!1),d(s.x,s.y,`+${u} AGI`,!0)}break;case"execute":if(r){let u=Math.max(1,Math.floor(ce(s,"agi")*.8-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"berserk":r&&(f(r,Math.max(1,Math.floor(ce(s,"str")*.8-ce(r,"vit")*.3+ce(r,"luk")*.2)),!1),f(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=u,s.tempBuff.vit=u,s.tempBuff.duration=2,d(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,d(r.x,r.y,`-${u} INT`,!1),d(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(ce(s,"int")*.6-(ce(r,"int")*.4+ce(r,"luk")*.2)));f(r,u,!1,!0),f(s,u,!0)}break;case"blind":{if(!r)break;let u=1;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,d(r.x,r.y,`-${u} DEX`,!1),d(s.x,s.y,`+${u} DEX`,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"dex")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=4,d(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.4+ce(s,"dex")*.4-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"str")*.7+ce(s,"agi")*.1-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=4,d(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let u=Math.max(1,Math.floor(ce(s,"int")*.4));f(r,u,!0),f(s,3,!1)}break;case"judgement":{if(!r)break;let u=Math.max(1,Math.floor(s.maxHp-s.hp-(ce(r,"int")*.3+ce(r,"luk")*.2+ce(r,"vit")*.1)));f(r,u,!1,!0)}break;case"sanctuary":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.vit=1,s.tempBuff.dex=1,s.tempBuff.agi=1,s.tempBuff.int=1,s.tempBuff.luk=1,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=1,r.tempBuff.vit=1,r.tempBuff.dex=1,r.tempBuff.agi=1,r.tempBuff.int=1,r.tempBuff.luk=1,r.tempBuff.duration=3,d(s.x,s.y,"+1 ALL STATS",!0),d(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let u=Math.max(1,Math.floor(r.maxHp-r.hp-(ce(r,"int")*.4+ce(r,"luk")*.2)));f(r,u,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,d(r.x,r.y,"-2 LUK",!1),d(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"luk")*.7-(ce(r,"vit")*.3+ce(r,"luk")*.2)));f(r,u,!1)}break;case"windWalk":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=1,s.tempBuff.agi=3,s.tempBuff.duration=3,d(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"dex")*.6-(ce(r,"vit")*.3+ce(r,"luk")*.2)));if(f(r,u,!1)&&n.world&&n.units&&n.updateUnitPosition){let v=Math.max(1,Math.floor(u*.2)),g=Wx(n.world,n.units,s,r,v),p=r.x,M=r.y;r.x=g.newGx,r.y=g.newGy,g.collisionDamage>0?(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),f(r,g.collisionDamage,!1)):n.animateKnockback?n.animateKnockback(r,p,M,g.newGx,g.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r))}}break;case"forge":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=2,r.tempBuff.duration=3,d(s.x,s.y,"+2 STR",!0),d(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff=s.tempBuff||{},s.tempBuff.str=3,s.tempBuff.vit=3,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=3,r.tempBuff.vit=3,r.tempBuff.duration=3,d(s.x,s.y,"+3 STR, +3 VIT",!0),d(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let u=Math.max(1,Math.floor(ce(r,"luk")*.2));r.tempDebuff=r.tempDebuff||{},r.tempDebuff.poison=u,r.tempDebuff.duration=3,d(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let u=Math.max(1,Math.floor(ce(s,"int")*.8-(ce(r,"int")*.4+ce(r,"luk")*.2)));f(r,u,!1,!0);let y=Math.max(1,Math.floor(u*.5));s.luk=Math.max(1,(s.luk||0)+y),d(s.x,s.y,`+${y} LUK`,!0)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function zx(){let i=Dx,e=Ux,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill(et.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=e-1;for(let D=-1;D<=1;D++)for(let k=-2;k<=2;k++){let te=r+k,P=o+D;te>=0&&te<i&&P>=0&&P<e&&(t[P][te]=!0,s[P][te]=et.BASE_TOP,n[P][te]=1)}for(let D=-1;D<=1;D++)for(let k=-2;k<=2;k++){let te=a+k,P=l+D;te>=0&&te<i&&P>=0&&P<e&&(t[P][te]=!0,s[P][te]=et.BASE_BOTTOM,n[P][te]=1)}let c=Math.floor(i/2),h=Math.floor(e/2);for(let D=-1;D<=1;D++)for(let k=-2;k<=2;k++){let te=c+k,P=h+D;te>=0&&te<i&&P>=0&&P<e&&(t[P][te]=!0,s[P][te]=et.CENTER,n[P][te]=1)}let f=new Set,d=(D,k)=>Math.abs(D-c)<=2&&Math.abs(k-h)<=1,u=(D,k)=>{D<0||D>=i||k<0||k>=e||d(D,k)||f.add(k*i+D)},y=Math.floor(i/2),v=Math.floor(e/2),g=Math.min(i,e)*.29,p=Math.max(60,(e+i)*2);for(let D=0;D<2;D++){let k=D===0?y-g:y+g,te=D===0?Math.PI/2:-Math.PI/2,P=D===0?Math.PI*3/2:Math.PI/2;for(let G=0;G<=p;G++){let $=G/p,ae=te+$*(P-te),N=k+g*Math.cos(ae),se=v+g*Math.sin(ae),Z=Math.round(N),ue=Math.round(se);u(Z,ue),u(Z+1,ue),u(Z-1,ue),u(Z,ue+1),u(Z,ue-1)}}let M=[[0,1],[0,-1],[1,0],[-1,0]];for(let D=0;D<1;D++){let k=[];f.forEach(te=>{let P=te%i,G=te/i|0;for(let[$,ae]of M){let N=P+$,se=G+ae;if(N<0||N>=i||se<0||se>=e)continue;let Z=se*i+N;f.has(Z)||k.push(Z)}}),k.forEach(te=>f.add(te))}f.forEach(D=>{let k=D%i,te=D/i|0;s[te][k]===et.BASE_TOP||s[te][k]===et.BASE_BOTTOM||s[te][k]===et.CENTER||(t[te][k]=!0,s[te][k]=et.PATH,n[te][k]=1)});let _=Math.round(y-g*1.6),T=Math.round(y+g*1.6),U=Math.round(y-g),I=Math.round(y+g),L=1;for(let D=h-L;D<=h+L;D++)if(!(D<0||D>=e))for(let k=_;k<=T;k++)k<0||k>=i||(t[D][k]=!0,s[D][k]!==et.CENTER&&s[D][k]!==et.BASE_TOP&&s[D][k]!==et.BASE_BOTTOM&&(s[D][k]=et.PATH),n[D][k]=Math.max(n[D][k],1));function q(D,k,te,P){let G=Math.max(1,Math.min(D,k)),$=Math.min(e-2,Math.max(D,k)),ae=Math.max(1,Math.min(te,P)),N=Math.min(i-2,Math.max(te,P));for(let se=G;se<=$;se++)for(let Z=ae;Z<=N;Z++)s[se][Z]===et.BASE_TOP||s[se][Z]===et.BASE_BOTTOM||s[se][Z]===et.CENTER||(t[se][Z]=!0,s[se][Z]=et.PATH,n[se][Z]=1)}let S=3,R=3;q(o,o+S-1,U,r-1),q(o,o+S-1,r+1,I),q(l-R+1,l,U,a-1),q(l-R+1,l,a+1,I);for(let D=-1;D<=2;D++)for(let k=-2;k<=2;k++){let te=r+k,P=o+D;te>=0&&te<i&&P>=0&&P<e&&(t[P][te]=!0,s[P][te]=et.BASE_TOP,n[P][te]=1)}for(let D=-2;D<=1;D++)for(let k=-2;k<=2;k++){let te=a+k,P=l+D;te>=0&&te<i&&P>=0&&P<e&&(t[P][te]=!0,s[P][te]=et.BASE_BOTTOM,n[P][te]=1)}for(let D=0;D<e;D++)for(let k=0;k<i;k++){if(t[D][k]||s[D][k]===et.BASE_TOP||s[D][k]===et.BASE_BOTTOM||s[D][k]===et.CENTER)continue;let te=Math.abs(k-r)<=4&&Math.abs(D-o)<=3,P=Math.abs(k-a)<=4&&Math.abs(D-l)<=3,G=te||P,$=Math.random();$<.55&&!G?(s[D][k]=et.TREE,n[D][k]=1+Math.floor(Math.random()*2)):$<.75||G&&$<.5?(s[D][k]=et.WATER,n[D][k]=0):(s[D][k]=et.ROCK,n[D][k]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function Vx(i,e,t){let n=e===1?et.BASE_BOTTOM:et.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function Gx(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===et.CENTER&&e.push({gx:n,gy:t});return e}function Pu(i,e){let t=Gx(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function dr(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===et.TREE||n===et.WATER||n===et.ROCK)}function Wx(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let f=0;for(let d=0;d<s;d++){let u=r+c,y=a+h,v=u<0||u>=i.w||y<0||y>=i.h,g=!dr(i,u,y),p=e.some(M=>M.hp>0&&M.id!==n.id&&M.x===u&&M.y===y);if(v||g||p){let M=Math.max(1,f*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:M}}r=u,a=y,f++}return{newGx:r,newGy:a,collisionDamage:0}}function Xx(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),f=r<o?1:-1,d=a<l?1:-1,u=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let y=2*u;y>-h&&(u-=h,r+=f),y<c&&(u+=c,a+=d)}return s}function Es(i,e,t,n,s){let r=Xx(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!dr(i,o.x,o.y))return!1}return!0}function uo(i,e,t,n,s,r){let a=(f,d)=>d*i.w+f,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null;for(;l.length;){let{x:f,y:d,d:u}=l.shift();if(!(u>=n))for(let[y,v]of c){let g=f+y,p=d+v;if(!dr(i,g,p))continue;if(h){let T=s.find(U=>U.hp>0&&U.x===g&&U.y===p);if(T&&T.player!==r.player)continue}let M=a(g,p);if(o.has(M))continue;let _=u+1;o.set(M,_),l.push({x:g,y:p,d:_})}}return o}function Iu(i,e,t,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-e)+Math.abs(r-t);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function rs(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(d,u)=>u*i.w+d,l=new Map,c=[{x:e,y:t}];l.set(o(e,t),null);let h=[[0,1],[0,-1],[1,0],[-1,0]];function f(d,u){if(!dr(i,d,u))return!1;let y=r.find(v=>v.hp>0&&v.x===d&&v.y===u);return y?y.id===a.id||y.player===a.player:!0}for(;c.length;){let{x:d,y:u}=c.shift();if(d===n&&u===s){let y=[],v={x:n,y:s};for(;v;)y.unshift(v),v=l.get(o(v.x,v.y));return y}for(let[y,v]of h){let g=d+y,p=u+v,M=o(g,p);l.has(M)||f(g,p)&&(l.set(M,{x:d,y:u}),c.push({x:g,y:p}))}}return null}var Lu={[et.PATH]:2976557,[et.GRASS]:2968109,[et.TREE]:1719578,[et.WATER]:1989278,[et.ROCK]:4872778,[et.BASE_TOP]:8014410,[et.BASE_BOTTOM]:4872826,[et.CENTER]:13940810};function Du(i){return i.w*Et/2}function Uu(i){return i.h*Et/2}function Nu(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new $a(e);return r.wrapS=r.wrapT=Cr,r.repeat.set(4,4),r.needsUpdate=!0,r}function qx(i){let e=new hi,t=Du(i),n=Uu(i),s=new wn(Et,$n,Et),r=Nu(64),a=.88,o=.02,l=[];function c(d,u,y,v,g){let p=new kn({color:3828266,roughness:.9});p.bumpMap=r,p.bumpScale=.12;for(let M=0;M<v;M++){let _=.08+Math.random()*g,T=.03+Math.random()*.03,U=new Je(new ss(T*.5,T,_,6),p);U.position.set(d+(Math.random()-.5)*.5,y+_/2,u+(Math.random()-.5)*.5),U.rotation.x=(Math.random()-.5)*.2,U.rotation.z=(Math.random()-.5)*.2,U.castShadow=!0,e.add(U)}}let h=.12;function f(d,u,y,v){let g=y+.02,p=[[d-h,g,u-h],[d+h,g,u+h],[d-h,g,u+h],[d+h,g,u-h],[d-h+.06,g,u-h+.06],[d+h-.06,g,u+h-.06],[d-h+.06,g,u+h-.06],[d+h-.06,g,u-h+.06]],M=new Float32Array(p.length*3);p.forEach((I,L)=>{M[L*3]=I[0],M[L*3+1]=I[1],M[L*3+2]=I[2]});let _=new ti;_.setAttribute("position",new ei(M,3)),_.computeBoundingSphere();let T=new Or({color:855309,linewidth:1}),U=new Ya(_,T);v.add(U)}for(let d=0;d<i.h;d++)for(let u=0;u<i.w;u++){let y=i.type[d][u],v=i.height[d][u],g=Lu[y],p=$n+v*.35,M=p/2+$n/2,_=new kn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),T=(g>>16&255)/255,U=(g>>8&255)/255,I=(g&255)/255,L=T,q=U,S=I;if(y===et.PATH||y===et.TREE||y===et.ROCK){let ae=Math.random()*.45;L=T*(1-ae)+.42*ae,q=U*(1-ae)+.26*ae,S=I*(1-ae)+.14*ae}(y===et.TREE||y===et.ROCK)&&(L*=.5,q*=.5,S*=.5);let R=1+(Math.random()-.5)*.12;_.color.setRGB(Math.min(1,L*R),Math.min(1,q*R),Math.min(1,S*R)),_.bumpMap=r,_.bumpScale=.12;let D=new Je(s,_);D.position.set(u*Et-t+Et/2,p/2,d*Et-n+Et/2),D.castShadow=!0,D.receiveShadow=!0,D.userData={gx:u,gy:d,type:y},e.add(D);let k=u*Et-t+Et/2,te=d*Et-n+Et/2;if(y===et.TREE&&f(k,te,M,e),y===et.TREE){let P=new hi;P.position.set(k,M,te);let G=u===0||u===i.w-1||d===0||d===i.h-1,$=G?.75+Math.random()*.35:.5+Math.random()*.2,ae=new xt(4007959),N=()=>1+(Math.random()-.5)*.4;ae.r=Math.min(1,Math.max(0,ae.r*N())),ae.g=Math.min(1,Math.max(0,ae.g*N())),ae.b=Math.min(1,Math.max(0,ae.b*N()));let se=.85+Math.random()*.2,Z=new kn({color:ae,roughness:se});Z.bumpMap=r,Z.bumpScale=.1+Math.random()*.12;let ue=new Je(new ss(.12,.14,$,8),Z);ue.position.set(0,$/2,0),ue.castShadow=!0,ue.raycast=function(){},P.add(ue);let Pe=r.clone();Pe.repeat.set(3,3);let ie=new xt(2972205),oe=()=>1+(Math.random()-.5)*.44;ie.r=Math.min(1,Math.max(0,ie.r*oe())),ie.g=Math.min(1,Math.max(0,ie.g*oe())),ie.b=Math.min(1,Math.max(0,ie.b*oe()));let De=.78+Math.random()*.24,Xe=new kn({color:ie,roughness:De});Xe.bumpMap=Pe,Xe.bumpScale=.16+Math.random()*.14;let Be=G?.52:.45,ht=G?1.05:.9,ut=.12,Qe=ht*.5,At=ht*.45,Y=ht*.4,hn=new Je(new vi(Be,Qe,8),Xe);hn.position.set(0,$+Qe/2,0),hn.castShadow=!0,hn.raycast=function(){},P.add(hn);let Ze=new Je(new vi(Be*.75,At,8),Xe);Ze.position.set(0,$+Qe-ut+At/2,0),Ze.castShadow=!0,Ze.raycast=function(){},P.add(Ze);let st=new Je(new vi(Be*.5,Y,8),Xe);st.position.set(0,$+Qe-ut+At-ut+Y/2,0),st.castShadow=!0,st.raycast=function(){},P.add(st),e.add(P),l.push(P)}else if(y===et.WATER){let P=Lu[et.WATER],G=(P>>16&255)/255,$=(P>>8&255)/255,ae=(P&255)/255,N=1+(Math.random()-.5)*.12,se=new kn({color:new xt().setRGB(Math.min(1,G*N),Math.min(1,$*N),Math.min(1,ae*N)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),Z=new Je(new Fi(Et,Et),se);Z.rotation.x=-Math.PI/2,Z.position.set(k,M+.02,te),Z.receiveShadow=!0,e.add(Z)}else if(y===et.ROCK){let P=new kn({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let G=(se,Z,ue)=>{let Pe=new Je(new Qa(se,0),P);Pe.position.set(k+Z,M+se-.2,te+ue),Pe.rotation.set(Math.random(),Math.random(),Math.random()),Pe.castShadow=!0,e.add(Pe)},$=.32+Math.random()*.14,ae=.2+Math.random()*.12,N=.12+Math.random()*.12;G($,(Math.random()-.5)*.15,(Math.random()-.5)*.15),G(ae,(Math.random()-.5)*.25,(Math.random()-.5)*.25),G(N,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function Yx(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=zx(),t=document.getElementById("canvas-wrap"),n=new qa;n.background=new xt(1711652),n.fog=new Xa(1711652,30,90);let s=e.w*Et/2,r=e.h*Et/2,a=new qn(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,c=new F(12,38,16).normalize().multiplyScalar(o),h=new F,f=new F,d=new xi(new F(0,1,0),0),u=new F,y=new F,v=!1,g=!1,p=!0,M=!1,_=null,T=5,U=.004,I=-Math.PI*.4,L=Math.PI*.4,q=new F,S={x:0,y:0},R=1,D=40,k=.005,te=.15,P=null,G=new no(16777215,.45);n.add(G);let $=new to(16774630,1.1);$.position.set(30,50,20),$.castShadow=!0,$.shadow.mapSize.width=2048,$.shadow.mapSize.height=2048,$.shadow.camera.near=1,$.shadow.camera.far=120,$.shadow.camera.left=-50,$.shadow.camera.right=50,$.shadow.camera.top=50,$.shadow.camera.bottom=-50,n.add($);let ae=qx(e);n.add(ae);let N=[],se=1,Z=new Map,ue=Nu(64),Pe=Du(e),ie=Uu(e);function oe(x,m){let A=($n+e.height[m][x]*.35)/2+$n/2;return new F(x*Et-Pe+Et/2,A,m*Et-ie+Et/2)}function De(x,m){let w=(x>>16&255)/255,A=(x>>8&255)/255,B=(x&255)/255,H=1+(Math.random()-.5)*m;return new xt(Math.min(1,w*H),Math.min(1,A*H),Math.min(1,B*H))}let Xe=.62;function Be(x,m){m=m??Xe;let w=x instanceof xt?x:new xt(x);return new xt(Math.max(0,w.r*m),Math.max(0,w.g*m),Math.max(0,w.b*m))}function ht(x,m,w){let A=co[m]||co.knight,B=Be(De(A.primary,.08)),H=Be(De(A.secondary,.08)),J=kt[m]&&kt[m].gender||"male",V=w??4006676,z=Be(De(A.skin!=null?A.skin:15250592,.06)),j=Be(De(V,.08)),he=()=>(Math.random()-.5)*.08,Se=()=>(Math.random()-.5)*.04,ee=new kn({color:B,metalness:Math.max(0,.25+Se()),roughness:Math.max(.3,Math.min(1,.5+he()))});ee.bumpMap=ue,ee.bumpScale=.1;let re=new kn({color:H,metalness:Math.max(0,.2+Se()),roughness:Math.max(.3,Math.min(1,.55+he()))});re.bumpMap=ue,re.bumpScale=.1;let _e=new kn({color:B,metalness:Math.max(0,.25+Se()),roughness:Math.max(.3,Math.min(1,.5+he()))});_e.bumpMap=ue,_e.bumpScale=.1;let at=new kn({color:z,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+he()))});at.bumpMap=ue,at.bumpScale=.05;let We=new hi,ct=.28,Nt=.08,Ot=.08,Kt=new Je(new wn(Nt,ct,Ot),re);Kt.position.set(-.06,ct/2,0),Kt.castShadow=!0,We.add(Kt);let fn=new Je(new wn(Nt,ct,Ot),re);fn.position.set(.06,ct/2,0),fn.castShadow=!0,We.add(fn);let Bt=.28,Lt=.2,gt=.12,Wt=new Je(new wn(Lt,Bt,gt),ee);Wt.position.set(0,ct+Bt/2,0),Wt.castShadow=!0,We.add(Wt);let _t=.06,Jt=.22,jt=.06,Tn=new Je(new wn(_t,Jt,jt),_e);Tn.position.set(-(Lt/2+_t/2),ct+Bt-.08,0),Tn.castShadow=!0,We.add(Tn);let Dn=new Je(new wn(_t,Jt,jt),_e);if(Dn.position.set(Lt/2+_t/2,ct+Bt-.08,0),Dn.castShadow=!0,We.add(Dn),A.cape!=null){let Ae=Lt*1.95,Me=Ae*.6,Ne=ct+Bt*.28,Dt=new lr;Dt.moveTo(-Me/2,Ne/2),Dt.lineTo(Me/2,Ne/2),Dt.lineTo(Ae/2,-Ne/2),Dt.lineTo(-Ae/2,-Ne/2),Dt.closePath();let qt=new zr(Dt),Ge=new kn({color:Be(De(A.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+he())),side:pn});Ge.bumpMap=ue,Ge.bumpScale=.12;let lt=new Je(qt,Ge);lt.position.set(0,ct+Bt-Ne/2+.05,-gt/2-.02),lt.rotation.y=Math.PI,lt.castShadow=!0,We.add(lt);let St=.055,on=ct+Bt+.02,Qt=.02,sn=Lt/2+_t*.5,Xt=new Je(new Ti(St,10,8,0,Math.PI*2,0,Math.PI*.55),Ge.clone());Xt.position.set(-sn,on,Qt),Xt.rotation.x=-Math.PI*.35,Xt.rotation.z=Math.PI*.5,Xt.scale.set(1.2,.85,1.1),Xt.castShadow=!0,We.add(Xt);let Un=new Je(new Ti(St,10,8,0,Math.PI*2,0,Math.PI*.55),Ge.clone());Un.position.set(sn,on,Qt),Un.rotation.x=-Math.PI*.35,Un.rotation.z=-Math.PI*.5,Un.scale.set(1.2,.85,1.1),Un.castShadow=!0,We.add(Un)}if(A.belt!=null){let Ae=new kn({color:Be(De(A.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+he()))});Ae.bumpMap=ue,Ae.bumpScale=.1;let Me=.022,Ne=.04,Dt=new Je(new wn(Lt+.04,Me,gt+Ne),Ae);Dt.position.set(0,ct+.04,0),Dt.castShadow=!0,We.add(Dt)}if(A.apron!=null){let Ae=new kn({color:Be(De(A.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+he())),side:pn});Ae.bumpMap=ue,Ae.bumpScale=.12;let Me=Lt*.95,Ne=ct*.85,Dt=new Je(new Fi(Me,Ne),Ae),qt=ct+.2;Dt.position.set(0,qt-Ne/2,gt/2+.02),Dt.castShadow=!0,We.add(Dt);let Ge=ct+Bt+.02,lt=Lt/2+_t*.2,St=.018,on=.008,Qt=Ge-qt,sn=new Je(new wn(St,Qt,on),Ae.clone());sn.position.set(-lt,(qt+Ge)/2,gt/2+.015),sn.castShadow=!0,We.add(sn);let Xt=new Je(new wn(St,Qt,on),Ae.clone());Xt.position.set(lt,(qt+Ge)/2,gt/2+.015),Xt.castShadow=!0,We.add(Xt)}let le=.1,pe=new Je(new Ti(le,12,10),at);pe.position.set(0,ct+Bt+le,0),pe.castShadow=!0,We.add(pe);let ve=new mn({color:1710638}),fe=new Je(new wn(.032,.004,.004),ve);fe.position.set(-.032,.028,le*.92),pe.add(fe);let de=new Je(new wn(.032,.004,.004),ve);de.position.set(.032,.028,le*.92),pe.add(de);let ge=new mn({color:2957087}),we=new Je(new wn(.045,.012,.008),ge);we.position.set(0,-.028,le*.92),pe.add(we);let ye=new kn({color:j,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+he()))});ye.bumpMap=ue,ye.bumpScale=.15;let ot=Ae=>{let Me=le*.32,Ne=le*.22,Dt=new Je(new vi(Ne*.9,Me,5),ye);Dt.position.set(-le*.25,le*.22,le*.72),Dt.rotation.x=.35,Dt.rotation.z=.12,Dt.castShadow=!0,Ae.add(Dt);let qt=new Je(new vi(Ne,Me,5),ye);qt.position.set(le*.28,le*.18,le*.68),qt.rotation.x=.28,qt.rotation.z=-.1,qt.castShadow=!0,Ae.add(qt);let Ge=new Je(new vi(Ne*.7,Me*.9,5),ye);Ge.position.set(0,le*.28,le*.78),Ge.rotation.x=.4,Ge.castShadow=!0,Ae.add(Ge)};if(J==="female"){let Ae=new Je(new Ti(le*.92,12,10,0,Math.PI*2,0,Math.PI*.52),ye);Ae.position.set(0,le*.28,-le*.18),Ae.rotation.y=.06,Ae.rotation.x=-.04,Ae.castShadow=!0,pe.add(Ae);let Me=new Je(new wn(le*1.15,le*2.2,le*.55),ye);Me.position.set(0,-le*.6,-le*.95),Me.rotation.z=.03,Me.castShadow=!0,pe.add(Me),ot(pe)}else{let Ae=new Je(new Ti(le*.9,12,10,0,Math.PI*2,0,Math.PI*.5),ye);Ae.position.set(0,le*.4,-le*.12),Ae.rotation.y=.08,Ae.rotation.x=-.05,Ae.rotation.z=.04,Ae.castShadow=!0,pe.add(Ae);let Me=new Je(new Ti(le*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),ye);Me.position.set(0,le*.1,-le*.05),Me.rotation.y=.1,Me.castShadow=!0,pe.add(Me),ot(pe)}return We.userData.leftLeg=Kt,We.userData.rightLeg=fn,We.userData.leftArm=Tn,We.userData.rightArm=Dn,We}function ut(x,m){let w=x.userData;if(!w.leftLeg)return;let A=m*Math.PI*2,B=.35,H=.28;w.leftLeg.rotation.x=Math.sin(A)*B,w.rightLeg.rotation.x=Math.sin(A+Math.PI)*B,w.leftArm.rotation.y=Math.sin(A+Math.PI)*H,w.rightArm.rotation.y=Math.sin(A)*H}function Qe(x){let m=x.userData;m.leftLeg&&(m.leftLeg.rotation.x=0,m.rightLeg.rotation.x=0,m.leftArm.rotation.y=0,m.rightArm.rotation.y=0)}function At(x){let m=ht(x.player,x.class,x.hairColor);m.position.copy(oe(x.x,x.y)),m.castShadow=!0,m.userData.unitId=x.id;let w=.28,A=.28,B=.12,H=.18,J=.04,V=new Fi(H,J),z=new mn({color:6037528,side:pn,depthTest:!0,depthWrite:!1}),j=new Je(V,z);j.position.set(0,w+A/2,B/2+.02),j.rotation.x=-Math.PI/2,j.rotation.z=Math.PI/4,j.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0,m.add(j),m.userData.slashMark=j,n.add(m),Z.set(x.id,m),Ze(m,x.maxHp>0&&x.hp/x.maxHp<.35)}function Y(x){let m=Z.get(x.id);!m||!m.userData.slashMark||(m.userData.slashMark.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0)}let hn=.35;function Ze(x,m){if(x)if(m){x.rotation.x=.35,x.scale.setScalar(.96);let w=x.userData;w&&w.leftArm&&w.rightArm&&(w.leftArm.rotation.y=.2,w.rightArm.rotation.y=.2),x.traverse(A=>{A.isMesh&&A.material&&A.material.color&&(A.userData.originalColor||(A.userData.originalColor=A.material.color.clone()),A.material.color.copy(A.userData.originalColor).multiplyScalar(.82))})}else{x.rotation.x=0,x.scale.setScalar(1);let w=x.userData;w&&w.leftArm&&w.rightArm&&(w.leftArm.rotation.y=0,w.rightArm.rotation.y=0),x.traverse(A=>{A.isMesh&&A.material&&A.userData.originalColor&&A.material.color.copy(A.userData.originalColor)})}}function st(x){if(x.level>=3)return;let m=x.maxHp>0?x.hp/x.maxHp:1;x.level+=1;let w=B=>Math.max(1,Math.ceil(B*1.1)),A=B=>Math.max(1,Math.ceil(B*1.1));x.maxHp=w(x.maxHp),x.maxMp=w(x.maxMp),x.hp=Math.max(1,Math.min(x.maxHp,Math.ceil(m*x.maxHp))),x.mp=Math.max(1,Math.min(x.maxMp,Math.ceil(m*x.maxMp))),x.str=A(x.str),x.agi=A(x.agi),x.vit=A(x.vit),x.dex=A(x.dex),x.luk=A(x.luk),x.int=A(x.int),x.range>2&&(x.range=A(x.range)),console.log("[LEVEL UP]",`${x.name} (${x.class}, P${x.player})`,`\u2192 Lv.${x.level}`,`| HP ${x.hp}/${x.maxHp} MP ${x.mp}/${x.maxMp} STR ${x.str} VIT ${x.vit}`),$e(x)}function $e(x){let m=Z.get(x.id),w=x.level===3?"levelup level3":x.level===2?"levelup level2":"levelup";if(ed(x,w),!m)return;let A=performance.now(),B=0;function H(J){B++,B%2===0&&X();let V=J-A,z=Math.min(1,V/Ee),j=z<.5?1+.35*(z/.5):1+.35*(1-(z-.5)/.5);m.scale.setScalar(j),z<1?requestAnimationFrame(H):m.scale.setScalar(1)}requestAnimationFrame(H)}let Yt=400,vt=280,C=.45,b=160,Q=280,be=350,xe=500,Ee=600,qe=!1,Ue=new F,ze=new F,it=new F,yt=new F;function me(x=!1){p=!0;let m=null;if(Ve==="playing"&&Te.length>0){let J=Te[Ye];m=N.find(V=>V.id===J&&V.hp>0)}if(m||(m=N.find(J=>J.player===je&&J.hp>0)),!m)return;let w=a.position.distanceTo(h);if(w<.1&&(w=o),f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),it.copy(oe(m.x,m.y)),yt.copy(it).add(f.clone().multiplyScalar(w)),x||qe){h.copy(it),a.position.copy(yt),a.lookAt(h),X();return}qe=!0,Ue.copy(h),ze.copy(a.position);let A=performance.now(),B=0;Ln.shadowMap.enabled=!1;function H(J){B++,B%2===0&&X();let V=Math.min(1,(J-A)/Yt),z=V*(2-V);h.lerpVectors(Ue,it,z),a.position.lerpVectors(ze,yt,z),a.lookAt(h),V<1?requestAnimationFrame(H):(Ln.shadowMap.enabled=!0,qe=!1)}requestAnimationFrame(H)}let Pt=0,je=1,Ve="draft",Fe="pvp",He=1,pt=0,It=null;async function $t(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{It=await navigator.wakeLock.request("screen"),It.addEventListener("release",()=>{It=null})}catch{It=null}}function Tt(){It&&(It.release().catch(()=>{}),It=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Fe==="cvcpu"&&Ve==="playing"&&$t()});let Ce="balanced",O=new Set(ki),Ie=0,Re=null,tt=new Set,Te=[],Ye=0,dt=null,Rt=new Map,Cn=null;function Ht(x){if(!x||x.hp<=0)return;Cn=x.id;let m=document.getElementById("unit-preview-card"),w=document.getElementById("unit-preview-image"),A=document.getElementById("unit-preview-name"),B=document.getElementById("unit-preview-meta"),H=document.getElementById("unit-preview-stats");m.classList.remove("player-1","player-2"),m.classList.add(x.player===1?"player-1":"player-2"),m.classList.toggle("level-2",x.level>=2&&x.level<3),m.classList.toggle("level-3",x.level>=3),w.src=Wr[x.class]||"",w.alt=x.name,A.textContent=x.name,B.textContent=`Lv.${x.level} ${x.class} \u2014 Player ${x.player}`,H.innerHTML=[["HP",`${x.hp}/${x.maxHp}`],["MP",`${x.mp}/${x.maxMp}`],["STR",ce(x,"str")],["AGI",ce(x,"agi")],["VIT",ce(x,"vit")],["DEX",ce(x,"dex")],["LUK",ce(x,"luk")],["INT",ce(x,"int")]].map(([V,z])=>`<span class="stat-label">${V}</span><span class="stat-val${V==="HP"?" stat-val-hp":""}">${z}</span>`).join("");let J=x.maxHp>0&&x.hp/x.maxHp<.3;m.classList.toggle("low-hp",J),m.style.display="block"}function gn(){Cn=null;let x=document.getElementById("unit-preview-card");x.classList.remove("low-hp","level-2","level-3"),x.style.display="none"}let un=!1,Zn=!1,bi=!1,xn=null,Vt=!1,yn=!1,fi=!1,Gn=[],Kn=new hi;n.add(Kn);let ni=[],as=!0,E=0,W=0;function X(){as=!0,E=performance.now()}let ne=new hi;n.add(ne);let K=[],Oe=Et,Ke=.02,rt=3368703,ft=13382451;function Mt(x,m){let w=x/2,A=w-m,B=new lr;B.moveTo(-w,-w),B.lineTo(w,-w),B.lineTo(w,w),B.lineTo(-w,w),B.lineTo(-w,-w);let H=new or;return H.moveTo(-A,-A),H.lineTo(A,-A),H.lineTo(A,A),H.lineTo(-A,A),H.lineTo(-A,-A),B.holes.push(H),new zr(B)}let mt=Mt(Oe,Ke);function nt(x=null){let m=N.filter(w=>w.hp>0&&w.id!==x).map(w=>`${w.id},${w.x},${w.y},${w.player}`).sort().join("|");if(!(nt._lastSig===m&&nt._lastExclude===x)){for(nt._lastSig=m,nt._lastExclude=x,K.forEach(w=>w.dispose()),K.length=0;ne.children.length;){let w=ne.children[0];ne.remove(w)}N.filter(w=>w.hp>0&&w.id!==x).forEach(w=>{let A=w.x,B=w.y,J=($n+e.height[B][A]*.35)/2+$n/2,V=A*Et-Pe+Et/2,z=B*Et-ie+Et/2,j=J+.02,he=w.player===1?rt:ft,Se=new mn({color:he,side:pn}),ee=new Je(mt,Se);ee.rotation.x=-Math.PI/2,ee.position.set(V,j,z),ne.add(ee),K.push(Se)}),X()}}let an=1.15,Fn={1:8102901,2:15628943},Ut=(()=>{let x=new mn({color:Fn[1]}),m=new Je(new vi(.1,.25,8),x);return m.rotation.x=Math.PI,m.visible=!1,n.add(m),m})();function ii(){if(Ve!=="playing"||Te.length===0||fi){Ut.visible=!1,Ut.removeFromParent(),n.add(Ut);return}let x=Te[Ye],m=N.find(A=>A.id===x);if(!m||m.hp<=0){Ut.visible=!1,Ut.removeFromParent(),n.add(Ut);return}let w=Z.get(x);if(!w){Ut.visible=!1;return}Ut.removeFromParent(),w.add(Ut),Ut.position.set(0,an,0),Ut.material&&Ut.material.color.setHex(Fn[m.player]??Fn[1]),Ut.visible=!0}function tn(x){let m=[[0,1],[0,-1],[1,0],[-1,0]],w=[];for(let[A,B]of m){let H=x.x+A,J=x.y+B;!dr(e,H,J)||N.some(z=>z.id!==x.id&&z.x===H&&z.y===J&&z.hp>0)||w.push(Math.atan2(A,B))}return w}function bt(x){if(Gn.length===0)return x;if(Gn.length===1)return Gn[0];let m=Gn[0],w=Math.abs(Ts(x-m));for(let A=1;A<Gn.length;A++){let B=Math.abs(Ts(x-Gn[A]));B<w&&(w=B,m=Gn[A])}return m}function Ts(x){for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;return x}let nn=1.2,Pn=(()=>{let x=new Je(new vi(.12,.35,8),new mn({color:4500223}));return x.rotation.x=-Math.PI/2,x.visible=!1,n.add(x),x})();function qr(x,m){if(!fi||Te.length===0||Gn.length===0)return;let w=Te[Ye],A=N.find(Se=>Se.id===w),B=Z.get(w);if(!A||!B)return;Kr(x,m),zi.setFromCamera(Vi,a);let H=zi.intersectObjects(ae.children,!0);if(H.length===0)return;let J=null;for(let Se of H){let ee=Se.object;for(;ee&&(ee.userData.gx==null||ee.userData.gy==null);)ee=ee.parent;if(ee&&ee.userData.gx!=null){J=Se.point;break}}if(!J)return;let V=oe(A.x,A.y),z=J.x-V.x,j=J.z-V.z;if(z*z+j*j<1e-6)return;let he=Math.atan2(z,j);B.rotation.y=bt(he)}function os(){if(Te.length===0)return;let x=Te[Ye],m=N.find(B=>B.id===x),w=Z.get(x);if(!m||!w)return;Gn=[[0,1],[0,-1],[1,0],[-1,0]].map(([B,H])=>Math.atan2(B,H)),Pn.removeFromParent(),w.add(Pn),Pn.position.set(0,nn,0),Pn.rotation.x=-Math.PI/2,Pn.rotation.y=0,Pn.rotation.z=Math.PI,Pn.visible=!0,w.rotation.y=Gn[0]}function fr(){Pn.visible=!1,Pn.removeFromParent(),n.add(Pn)}let _n=[];(function(){let m=Bi,w=[1];for(let A=0;A<Math.floor((m-1)/2);A++)w.push(2,2,1,1);m%2===1?w.push(2):(w.push(2,2),w.push(1)),_n=w})();function Sn(){return _n[Ie]}function ws(){let x=Sn(),m=0;for(let w=0;w<Ie;w++)_n[w]===x&&m++;return m+1}function In(){let x=Bi,m=[1];for(let w=0;w<Math.floor((x-1)/2);w++)m.push(2,2,1,1);x%2===1?m.push(2):(m.push(2,2),m.push(1)),_n=m,Ve="draft",Ie=0,O=new Set(ki),Re=null,tt.clear(),dn(),Rs(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function As(){return N.filter(x=>x.hp>0).sort((x,m)=>{let w=ce(x,"agi"),A=ce(m,"agi");if(A!==w)return A-w;let B=ce(x,"dex");return ce(m,"dex")-B}).map(x=>x.id)}function fo(){document.getElementById("draft-panel").style.display="none";let x=document.getElementById("draft-placement-card");x&&(x.style.display="none",x.innerHTML=""),dn();let m=document.getElementById("battle-start-overlay");m&&(m.classList.add("visible"),m.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let w=document.getElementById("draft-placement-card");for(w&&(w.style.display="none",w.innerHTML=""),Ve="playing",Pt=0,Te=As(),Ye=0;Ye<Te.length&&N.find(H=>H.id===Te[Ye]).hp<=0;)Ye++;Ye>=Te.length&&(Ye=0);let A=N.find(H=>H.id===Te[Ye]);je=A?A.player:1,Vt=!1,yn=!1,dt=Te[Ye],setTimeout(()=>{m&&(m.classList.remove("visible"),m.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",nt(),Ft(),ii(),me(!0),Fe==="cvcpu"&&$t()},4e3)}function Rs(){let x=document.getElementById("draft-panel"),m=document.getElementById("draft-title"),w=document.getElementById("draft-classes"),A=document.getElementById("draft-message"),B=document.getElementById("turn-player"),H=document.getElementById("draft-placement-card");if(Re){x.style.display="none",B.textContent=`Draft: Player ${Sn()} \u2014 place ${kt[Re].name}`;let V=Sn();H.style.display="flex",H.classList.remove("player-1","player-2"),H.classList.add("player-"+V),H.style.left=V===1?"24px":"",H.style.right=V===2?"24px":"";let z=[...N.filter(Se=>Se.player===V).map(Se=>Se.class),Re],j=(Se,ee)=>{let re=kt[Se];return`
        <div class="draft-class-card${ee?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Wr[Se]||""}" alt="${re.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
        </div>
      `},he=3;if(z.length>he){H.classList.add("draft-placement-cols");let Se=[];for(let re=0;re<z.length;re+=he)Se.push(z.slice(re,re+he));let ee=z.length-1;H.innerHTML=Se.map((re,_e)=>{let at=_e===Se.length-1,We=re.map((ct,Nt)=>{let Kt=_e*he+Nt===ee;return j(ct,Kt)}).join("");return`<div class="draft-placement-col${at?" draft-placement-col-current":""}">${We}</div>`}).join("")}else H.classList.remove("draft-placement-cols"),H.innerHTML=z.map((Se,ee)=>{let re=ee===z.length-1;return j(Se,re)}).join("");Fe==="pvcpu"&&Sn()===2&&setTimeout(mr,500),Fe==="cvcpu"&&setTimeout(mr,500);return}H.style.display="none",H.innerHTML="",Ve==="draft"&&(x.style.display="flex");let J=Sn();m.textContent=`Player ${J}: Pick a class (${ws()}/${Bi})`,A.textContent="",w.innerHTML="",B.textContent=`Draft: Player ${J} \u2014 pick a class`,Bx([...ki]).forEach(V=>{let z=O.has(V),j=kt[V],he=document.createElement("button");he.type="button",he.className="draft-class-card"+(z?"":" draft-class-card-selected"),he.disabled=!z,he.innerHTML=`
          <img class="draft-class-card-image" src="${Wr[V]||""}" alt="${j.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${j.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${j.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${j.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${j.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${j.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${j.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${j.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${j.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${j.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${j.range}</span>
            </div>
          </div>
        `,z&&he.addEventListener("click",()=>rc(V)),w.appendChild(he)}),Fe==="pvcpu"&&Sn()===2&&setTimeout(mr,500),Fe==="cvcpu"&&setTimeout(mr,500)}function rc(x){if(!O.has(x)||Re)return;Re=x;let m=Sn(),w=new Set(N.map(H=>H.y*e.w+H.x)),A=Vx(e,m,w),B=Pu(e,A);tt=new Set(B.map(H=>H.gy*e.w+H.gx)),Xu(B),Rs()}function ac(x,m){if(!Re)return;let w=Sn(),A=m*e.w+x;if(!tt.has(A))return;let B=kt[Re],H={id:se++,player:w,x,y:m,level:1,name:B.name,class:Re,hairColor:(co[Re]||co.knight).hair,hp:B.hp,maxHp:B.maxHp,mp:B.mp,maxMp:B.maxMp,str:B.str,agi:B.agi,vit:B.vit,dex:B.dex,luk:B.luk,int:B.int,range:B.range};N.push(H),At(H);let J=Z.get(H.id);J&&(J.rotation.y=H.player===1?Math.PI:0),O.delete(Re),Re=null,tt.clear(),dn();let V=document.getElementById("draft-placement-card");if(V&&(V.style.display="none",V.innerHTML=""),Ie++,Ie>=2*Bi){fo();return}let z=Sn(),j=ws(),he=document.getElementById("draft-panel"),Se=document.getElementById("draft-title"),ee=document.getElementById("draft-message"),re=document.getElementById("draft-classes"),_e=document.getElementById("turn-player");he&&Se&&re&&_e&&(he.style.display="flex",Se.textContent=`Player ${z}: Pick a class (${j}/${Bi})`,ee&&(ee.textContent="Get ready\u2026"),re.innerHTML="",_e.textContent=`Draft: Player ${z} \u2014 pick a class`),setTimeout(Rs,1500)}function Ft(){Ft._pending||(Ft._pending=!0,requestAnimationFrame(()=>{Ft._pending=!1,Ou()}))}function Ou(){let x=Ft._cache||(Ft._cache={}),m=x.turnEl||(x.turnEl=document.getElementById("turn-player")),w=x.menuLabel||(x.menuLabel=document.getElementById("menu-label")),A=x.turnMenu||(x.turnMenu=document.getElementById("turn-menu")),B=x.unitInfo||(x.unitInfo=document.getElementById("unit-info")),H=x.unitNameEl||(x.unitNameEl=document.getElementById("unit-name")),J=x.unitLevelClassEl||(x.unitLevelClassEl=document.getElementById("unit-level-class")),V=x.unitStatsEl||(x.unitStatsEl=document.getElementById("unit-stats")),z=x.unitClassImageEl||(x.unitClassImageEl=document.getElementById("unit-class-image"));if(Ve==="playing"&&N.forEach(ee=>{if(ee.hp<=0)return;let re=Z.get(ee.id);re&&Ze(re,ee.maxHp>0&&ee.hp/ee.maxHp<hn)}),A.classList.remove("player-1","player-2"),A.classList.add(je===1?"player-1":"player-2"),A.classList.toggle("level-2",!1),A.classList.toggle("level-3",!1),Ve==="playing"&&Te.length>0){let ee=Te[Ye];N.find(_e=>_e.id===ee&&_e.hp>0)&&(dt==null||!N.find(_e=>_e.id===dt&&_e.hp>0))&&(dt=ee)}if(dt!=null){let ee=N.find(re=>re.id===dt);if(ee&&ee.hp>0){B.classList.remove("no-unit");let re=ee.maxHp>0&&ee.hp/ee.maxHp<.25;A.classList.toggle("low-hp",re),A.classList.toggle("level-2",ee.level>=2&&ee.level<3),A.classList.toggle("level-3",ee.level>=3),H.textContent=ee.name,J.textContent=`Lv.${ee.level} ${ee.class}`,z.src=Wr[ee.class]||"",z.alt=ee.name,V.innerHTML=[["HP",`${ee.hp}/${ee.maxHp}`],["MP",`${ee.mp}/${ee.maxMp}`],["STR",ce(ee,"str")],["AGI",ce(ee,"agi")],["VIT",ce(ee,"vit")],["DEX",ce(ee,"dex")],["LUK",ce(ee,"luk")],["INT",ce(ee,"int")]].map(([_e,at])=>`<span>${_e}</span><span class="stat-val${_e==="HP"?" stat-val-hp":""}">${at}</span>`).join("")}else A.classList.remove("low-hp","level-2","level-3"),B.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",J.textContent="",V.textContent="",z.src="",z.alt=""}else A.classList.remove("low-hp","level-2","level-3"),B.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",J.textContent="",V.textContent="",z.src="",z.alt="";if(dt!=null)m.textContent=`Player ${je} \u2014 Unit ${H.innerHTML} active`;else{let ee=Te.length?N.find(re=>re.id===Te[Ye]):null;m.textContent=ee?`${ee.name} (Player ${je})`:`Player ${je}`}w.textContent=`Player ${je}`;let j=x.btnAttack||(x.btnAttack=document.getElementById("btn-attack")),he=x.btnSkill||(x.btnSkill=document.getElementById("btn-skill")),Se=x.btnEnd||(x.btnEnd=document.getElementById("btn-end"));if(Fe==="cvcpu"&&Ve==="playing")j.disabled=!0,he.disabled=!0,Se&&(Se.disabled=!0),m.textContent=`Player ${je} (CPU)`;else if(fi)j.disabled=!0,he.disabled=!0,m.textContent="Click on map to choose facing direction";else if(Ve==="playing"){j.disabled=yn;let ee=Te.length?Te[Ye]:null,re=ee?N.find(We=>We.id===ee&&We.hp>0):null,_e=Fe!=="cvcpu"&&(Fe!=="pvcpu"||je===1),at=_e&&re&&!yn?Zr(re):[];he.disabled=yn||!_e||at.length===0,Se&&(Se.disabled=!1)}if(Ve==="playing"){let ee=Math.min(Pt+1,bs);m.textContent=(m.textContent||"")+` \u2014 Turn ${ee}/${bs}`;let re=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left")),_e=x.turnsLeftValueEl||(x.turnsLeftValueEl=document.getElementById("turns-left-value"));if(re&&_e){re.style.display="";let at=Math.max(0,bs-Pt);_e.textContent=String(at),re.classList.toggle("turns-left-low",at<=10)}}else{let ee=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left"));ee&&(ee.style.display="none")}Ve==="playing"&&xo(je)&&!un&&setTimeout(vn,700)}function Zt(){X(),gn(),Zn=!1,bi=!1,xn=null,fi=!1,Gn=[],fr(),dn();let x=Te.length;if(x===0)return;let m=Te[Ye],w=N.find(V=>V.id===m);if(w&&w.tempDebuff&&w.tempDebuff.duration--,w&&w.tempDebuff&&w.tempDebuff.duration<=0&&(w.tempDebuff=void 0),w&&w.tempBuff&&w.tempBuff.duration--,w&&w.tempBuff&&w.tempBuff.duration<=0&&(w.tempBuff=void 0),w&&w.hp>0){let V=Math.ceil(ce(w,"int")*.15);w.mp=Math.min(w.maxMp,w.mp+V)}if(w&&w.hp>0){let V=w.x,z=w.y;e.type[z][V]===et.CENTER&&w.level===1&&st(w);let j=w.player===1?et.BASE_TOP:et.BASE_BOTTOM;e.type[z][V]===j&&w.level===2&&st(w)}if(Pt++,Pt>=bs){td();return}let A=(Ye+1)%x,B=0;for(;B<x;){let V=Te[A],z=N.find(j=>j.id===V);if(z&&z.hp>0)break;A=(A+1)%x,B++}let H=A===0;Ye=A;for(let V=0;V<x;V++){let z=Te[Ye],j=N.find(Se=>Se.id===z);if(!j||j.hp<=0)break;let he=j.tempDebuff&&j.tempDebuff.poison!=null?j.tempDebuff.poison:0;if(he<=0)break;if(j.hp=Math.max(0,j.hp-he),Jn(j.x,j.y,String(he),!1,"poison"),Y(j),j.hp<=0){En(j),A=(Ye+1)%x;let Se=0;for(;Se<x;){let ee=Te[A],re=N.find(_e=>_e.id===ee);if(re&&re.hp>0)break;A=(A+1)%x,Se++}Ye=A;continue}break}let J=N.find(V=>V.id===Te[Ye]);je=J?J.player:1,Vt=!1,yn=!1,dt=Te[Ye],H&&(Te=As(),Ye=0),Ft(),ii(),me()}document.getElementById("btn-attack").addEventListener("click",()=>{if(un||yn||Ve!=="playing"||Te.length===0)return;gn();let x=Te[Ye],m=N.find(B=>B.id===x);if(!m||m.hp<=0)return;let w=m.range!=null?m.range:1;dt=x,Zn=!0;let A=Iu(e,m.x,m.y,w);Rt=new Map,A.forEach((B,H)=>{let J=H%e.w,V=Math.floor(H/e.w);Es(e,m.x,m.y,J,V)&&Rt.set(H,B)}),qu(Rt),Ft()}),document.getElementById("btn-skill").addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),un||yn)return;let m=Te[Ye],w=m?N.find(V=>V.id===m&&V.hp>0):null;if(!w||w.player!==je)return;let A=document.getElementById("skill-list-overlay"),B=document.getElementById("btn-skill");if(!B)return;if(A&&A.style.display==="block"){A.style.display="none";return}let H=Zr(w),J=B.getBoundingClientRect();A||(A=document.createElement("div"),A.id="skill-list-overlay",A.className="skill-list-overlay",A.setAttribute("aria-hidden","true"),document.body.appendChild(A)),A.style.left=`${J.left}px`,A.style.top=`${J.top-4}px`,A.style.transform="translateY(-100%)",A.style.right="auto",A.style.bottom="auto",A.style.display="none",H.length===0?A.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(A.innerHTML=H.map((V,z)=>`<button type="button" class="skill-option" data-skill-index="${z}" ${V.disabled?"disabled":""}>
          <span class="skill-name">${V.name}</span> <span class="skill-meta">${V.cost} MP \xB7 Lv.${V.level}</span><br/>
          <span class="skill-meta">${V.description}</span>
        </button>`).join(""),A.querySelectorAll(".skill-option").forEach((V,z)=>{V.addEventListener("click",j=>{j.preventDefault(),j.stopPropagation();let he=H[z];if(xn=he,A.style.display="none",A.setAttribute("aria-hidden","true"),he.target==="self"){if(w.mp<he.cost)return;w.mp-=he.cost,yn=!0,$r(w,w,he,{showFloatingCombatText:Jn,handleUnitDeath:En,updateUnitSlashVisibility:Y,updateTurnUI:Ft},()=>{dn(),bi=!1,xn=null,Is=new Set,Vt?Zt():Ft()}),Ft();return}if(he.target==="ally"&&gr(w,he,N).filter(re=>re.targetUnit&&re.targetUnit.id!==w.id).length===0&&w.mp>=he.cost){w.mp-=he.cost,yn=!0,$r(w,w,he,{showFloatingCombatText:Jn,handleUnitDeath:En,updateUnitSlashVisibility:Y,updateTurnUI:Ft},()=>{dn(),bi=!1,xn=null,Is=new Set,Vt?Zt():Ft()}),Ft();return}bi=!0,Zn=!1,Wu(w,he),Ft()})})),requestAnimationFrame(()=>{A.style.display="block",A.style.visibility="visible",A.setAttribute("aria-hidden","false")})}),document.addEventListener("click",x=>{let m=document.getElementById("skill-list-overlay"),w=document.getElementById("btn-skill"),A=document.querySelector(".skill-wrap");!m||m.style.display!=="block"||A&&A.contains(x.target)||m.contains(x.target)||(m.style.display="none",m.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(un||fi||Ve!=="playing"||Te.length===0)return;let x=Te[Ye],m=N.find(A=>A.id===x);if(!m||m.hp<=0)return;fi=!0,dt=null,Zn=!1,Rt=new Map,dn(),os(),ii();let w=document.getElementById("turn-player");w.textContent="Click on map to choose facing direction",Ft()}),h.set(0,8,0),a.position.copy(h).add(c),a.lookAt(h);let Yr=document.getElementById("mode-select-overlay"),oc=document.getElementById("mode-pvp"),lc=document.getElementById("mode-pvcpu"),po=document.getElementById("mode-cvcpu"),pr=document.getElementById("ai-draft-preference"),cc=document.getElementById("mode-select-options");cc&&(cc.style.display=Xr?"":"none");let Fu=document.getElementById("cvcpu-num-games"),Cs=document.getElementById("move-speed");Cs&&(Cs.value=String(Ss),Cs.addEventListener("input",()=>{let x=parseInt(Cs.value,10);!Number.isNaN(x)&&x>=0&&(Ss=x)}),Cs.addEventListener("change",()=>{let x=parseInt(Cs.value,10);!Number.isNaN(x)&&x>=0&&(Ss=x)}));let Ps=document.getElementById("draft-picks-per-player");Ps&&(Ps.value=String(Bi),Ps.addEventListener("input",()=>{let x=parseInt(Ps.value,10);!Number.isNaN(x)&&x>=1&&(Bi=x)}),Ps.addEventListener("change",()=>{let x=parseInt(Ps.value,10);!Number.isNaN(x)&&x>=1&&(Bi=x)})),pr&&(Nx.forEach(x=>{let m=document.createElement("option");m.value=x.value,m.textContent=x.label,pr.appendChild(m)}),pr.value=Ce,pr.addEventListener("change",()=>{Ce=pr.value}));let Hi=new Audio;Hi.loop=!0,Hi.volume=.3,Hi.preload="auto";let mo=window.location.href.replace(/[^/]*$/,""),hc=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:mo+(mo.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Hi.src=hc,Hi.addEventListener("error",()=>{let x=mo+"assets/music/tavern.mp3";x!==hc&&(Hi.src=x)});function go(){Hi.paused&&Hi.play().catch(()=>{})}Yr&&oc&&lc?(oc.addEventListener("click",()=>{go(),Fe="pvp",Yr.classList.add("hidden"),In()}),lc.addEventListener("click",()=>{go(),Fe="pvcpu",Yr.classList.add("hidden"),In()}),po&&(Xr?po.addEventListener("click",()=>{go(),Fe="cvcpu",He=Math.max(1,parseInt(Fu?.value,10)||1),pt=0,Yr.classList.add("hidden"),In()}):po.style.display="none")):In();function xo(x){return Fe==="pvcpu"&&x===2||Fe==="cvcpu"}function Bu(){let x=ki.filter(ee=>O.has(ee));if(x.length===0)return null;let m=Ce||"balanced";if(m==="random")return x[Math.floor(Math.random()*x.length)];if(m==="custom")return Ox.filter(re=>O.has(re))[0]??x[0]??null;let w=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function A(ee){let re=kt[ee];if(!re)return 1/0;let _e=w.map(We=>re[We]??0),at=_e.reduce((We,ct)=>We+ct,0)/_e.length;return _e.reduce((We,ct)=>We+(ct-at)**2,0)/_e.length}if(m==="tanky")return[...x].sort((re,_e)=>{let at=kt[re]?.hp??0,We=kt[_e]?.hp??0;return We!==at?We-at:(kt[_e]?.vit??0)-(kt[re]?.vit??0)})[0]??null;if(m==="aggressive")return[...x].sort((re,_e)=>{let at=kt[re]?.str??0,We=kt[_e]?.str??0;return We!==at?We-at:(kt[_e]?.agi??0)-(kt[re]?.agi??0)})[0]??null;if(m==="scout")return[...x].sort((re,_e)=>{let at=kt[re]?.agi??0,We=kt[_e]?.agi??0;return We!==at?We-at:(kt[_e]?.dex??0)-(kt[re]?.dex??0)})[0]??null;if(m==="ranged")return[...x].sort((re,_e)=>{let at=kt[re]?.range??0,We=kt[_e]?.range??0;return We!==at?We-at:(kt[_e]?.dex??0)-(kt[re]?.dex??0)})[0]??null;if(m==="caster")return[...x].sort((re,_e)=>{let at=kt[re]?.int??0,We=kt[_e]?.int??0;return We!==at?We-at:(kt[_e]?.mp??0)-(kt[re]?.mp??0)})[0]??null;let B=Sn(),J=Fx(Bi),V=N.filter(ee=>ee.player===B).map(ee=>ee.class),z={};for(let ee of Object.keys(lo))z[ee]=0;for(let ee of V)for(let re of Object.keys(lo))if(lo[re].includes(ee)){z[re]++;break}let j=ee=>Math.max(0,(J[ee]??0)-(z[ee]??0)),he=ee=>{for(let[re,_e]of Object.entries(lo))if(_e.includes(ee))return re;return null};return[...x].sort((ee,re)=>{let _e=he(ee),at=he(re),We=_e!=null?j(_e):0,ct=at!=null?j(at):0;if(ct!==We)return ct-We;let Nt=kt[ee]?.hp??0,Ot=kt[re]?.hp??0;return Ot!==Nt?Ot-Nt:A(ee)-A(re)})[0]??null}function mr(){if(Ve!=="draft"||!xo(Sn()))return;if(!Re){let w=Bu();w&&rc(w),setTimeout(mr,500);return}let x=Array.from(tt).map(w=>({gx:w%e.w,gy:Math.floor(w/e.w)})),m=Pu(e,x);if(m.length>0){let{gx:w,gy:A}=m[0];ac(w,A)}}function uc(){let x=[];for(let m=0;m<e.h;m++)for(let w=0;w<e.w;w++)e.type[m][w]===et.CENTER&&x.push({gx:w,gy:m});return x}function ku(x){let m=[],w=x===1?et.BASE_TOP:et.BASE_BOTTOM;for(let A=0;A<e.h;A++)for(let B=0;B<e.w;B++)e.type[A][B]===w&&m.push({gx:B,gy:A});return m}function ai(x,m,w,A){return Math.abs(x-w)+Math.abs(m-A)}function Hu(x){let m=x.range!=null?x.range:1,w=[];for(let A of N){if(A.hp<=0||A.player===x.player)continue;let B=ai(x.x,x.y,A.x,A.y);B<=m&&B>0&&Es(e,x.x,x.y,A.x,A.y)&&w.push({target:A,dist:B})}return w}function zu(x){let m=N.filter(w=>w.hp>0&&w.player===x.player&&w.id!==x.id);for(let w of m){let A=N.filter(B=>B.hp>0&&B.player!==x.player);for(let B of A){let H=B.range!=null?B.range:1,J=ai(B.x,B.y,w.x,w.y);if(J<=H&&J>0&&Es(e,B.x,B.y,w.x,w.y))return!0}}return!1}function Gt(x,m,w,A){let B=x.x,H=x.y,J=rs(e,x.x,x.y,m,w,N,x);if(!J||J.length<=1){A&&A();return}dt=null,dn(),un=!0,p=!0,nt(x.id),X();let V=Z.get(x.id),z=1;function j(){if(z>=J.length){x.x=J[J.length-1].x,x.y=J[J.length-1].y,un=!1,Qe(V),nt(),Rt=new Map,Vt=!0,A&&A();return}let he=J[z-1],Se=J[z],ee=oe(he.x,he.y).clone(),re=oe(Se.x,Se.y).clone(),_e=re.x-ee.x,at=re.z-ee.z;_e*_e+at*at>1e-6&&(V.rotation.y=Math.atan2(_e,at));let We=performance.now(),ct=0;function Nt(Ot){ct++,ct%2===0&&X();let Kt=Math.min(1,(Ot-We)/Ss),Bt=(Lt=>Lt*Lt*(3-2*Lt))(Kt);if(V.position.lerpVectors(ee,re,Bt),ut(V,Bt),p){let Lt=a.position.distanceTo(h),gt=Lt<.1?o:Lt;f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),h.lerp(V.position,l),a.position.copy(h).add(f.clone().multiplyScalar(gt)),a.lookAt(h)}Kt<1?requestAnimationFrame(Nt):(z++,j())}requestAnimationFrame(Nt)}j()}function dc(x,m){let w=ce(m,"agi")*.7+ce(m,"luk")*.3,B=Math.random()*Math.max(.001,w)<=ce(x,"dex"),H=0;if(B){let gt=ce(x,"str")*.7+ce(x,"dex")*.2+ce(x,"int")*.1-(ce(m,"vit")*.3+ce(m,"luk")*.2);H=Math.max(1,Math.floor(gt))}yn=!0,dt=null,Zn=!1,dn(),console.log("[ATTACK]",`${x.name} (${x.class}, P${x.player})`,"\u2192",`${m.name} (${m.class}, P${m.player})`,B?`${H} dmg`:"MISS",`| ${m.name} HP ${m.hp} \u2192 ${Math.max(0,m.hp-H)}/${m.maxHp}`);let J=Z.get(x.id);if(!J||!J.userData.rightArm){B?(m.hp=Math.max(0,m.hp-H),Jn(m.x,m.y,String(H),!1),Y(m),m.hp<=0&&En(m,x)):Jn(m.x,m.y,"MISS",!0),setTimeout(Vt?()=>Zt():()=>Ft(),400);return}let V=oe(x.x,x.y).clone(),z=oe(m.x,m.y).clone(),j=V.clone().lerp(z,.35),he=z.x-V.x,Se=z.z-V.z;if(he*he+Se*Se>1e-6&&(J.rotation.y=Math.atan2(he,Se)),(x.range!=null?x.range:1)>2){let ye=function(ot){we++,we%2===0&&X();let Ae=ot-ge,Me=Math.min(1,Ae/Q);if(_t.position.lerpVectors(fe,de,Me),!le&&Me>=1&&(le=!0,n.remove(_t),gt.dispose(),Wt.dispose(),B?(m.hp=Math.max(0,m.hp-H),Jn(m.x,m.y,String(H),!1),m.hp<=0&&(ve=!0),Z.get(m.id)?pe=ot:ve&&(En(m,x),ve=!1),Y(m)):Jn(m.x,m.y,"MISS",!0)),pe!=null&&B){let Ne=Z.get(m.id);if(Ne){let Dt=Math.min(1,(ot-pe)/b),qt=1-Dt;Gi.copy(Tn).multiplyScalar(Dn*qt),Ne.position.copy(jt).add(Gi),Dt>=1&&(Ne.position.copy(jt),pe=null,ve&&(En(m,x),ve=!1))}else pe=null,ve&&(En(m,x),ve=!1)}if(Me<1)requestAnimationFrame(ye);else{let Ne=pe==null;Ne&&ve&&(En(m,x),ve=!1),Ne?(Ln.shadowMap.enabled=!0,setTimeout(Vt?()=>Zt():()=>Ft(),400)):requestAnimationFrame(ye)}},gt=new ss(.035,.035,.4,6),Wt=new mn({color:16763972}),_t=new Je(gt,Wt);_t.position.copy(V),_t.position.y+=.6;let Jt=z.clone().sub(V).normalize();_t.quaternion.setFromUnitVectors(new F(0,1,0),Jt),n.add(_t);let jt=oe(m.x,m.y).clone(),Tn=z.clone().sub(V).normalize(),Dn=.4,le=!1,pe=null,ve=!1,fe=_t.position.clone(),de=z.clone();de.y+=.6;let ge=performance.now(),we=0;Ln.shadowMap.enabled=!1,requestAnimationFrame(ye);return}let _e=!1,at=performance.now(),We=J.userData.rightArm,ct=null,Nt=!1,Ot=oe(m.x,m.y).clone(),Kt=z.clone().sub(V).normalize(),fn=.4,Bt=0;function Lt(gt){Bt++,Bt%2===0&&X();let Wt=gt-at,_t=Math.min(1,Wt/vt),Jt=_t<=.4?_t/.4:1,jt=_t>.4?(_t-.4)/.6:0;_t<=.4?J.position.lerpVectors(V,j,Jt):J.position.lerpVectors(j,V,jt);let Tn=_t<=.35?_t/.35:_t<=.7?(.7-_t)/.35:0;if(We.rotation.y=-Tn*1.1,!_e&&_t>=C&&(_e=!0,B?(m.hp=Math.max(0,m.hp-H),Jn(m.x,m.y,String(H),!1),m.hp<=0&&(Nt=!0),Y(m),Z.get(m.id)?ct=gt:Nt&&(En(m,x),Nt=!1)):Jn(m.x,m.y,"MISS",!0)),ct!=null&&B){let Dn=Z.get(m.id);if(Dn){let le=Math.min(1,(gt-ct)/b),pe=1-le;Gi.copy(Kt).multiplyScalar(fn*pe),Dn.position.copy(Ot).add(Gi),le>=1&&(Dn.position.copy(Ot),ct=null,Nt&&(En(m,x),Nt=!1))}else ct=null,Nt&&(En(m,x),Nt=!1)}if(_t<1)requestAnimationFrame(Lt);else{J.position.copy(V),We.rotation.y=0;let Dn=ct==null;Dn&&Nt&&(En(m,x),Nt=!1),Dn?(Ln.shadowMap.enabled=!0,setTimeout(Vt?()=>Zt():()=>Ft(),400)):requestAnimationFrame(Lt)}}Ln.shadowMap.enabled=!1,requestAnimationFrame(Lt)}function Vu(x,m){let w=oe(x,m);w.y+=.4;let A=new Ti(.1,12,12),B=new mn({color:8930559,transparent:!0,opacity:.9}),H=new Je(A,B);H.position.copy(w),n.add(H);let J=performance.now(),V=0;function z(j){V++,V%2===0&&X();let he=j-J,Se=Math.min(1,he/be),ee=Se*(2-Se);H.scale.setScalar(ee*4.5),B.opacity=.9*(1-Se),Se<1?requestAnimationFrame(z):(n.remove(H),A.dispose(),B.dispose())}requestAnimationFrame(z)}function $r(x,m,w,A,B){if(w.target==="enemy"&&m==null){A.updateTurnUI&&A.updateTurnUI(),B&&B();return}let J=(w.range??0)>2&&m!=null&&(m.x!==x.x||m.y!==x.y),V=!J&&m!=null&&(m.x!==x.x||m.y!==x.y);if(!J&&!V){ho(w.effectKey,x,m,A),A.updateTurnUI&&A.updateTurnUI(),B&&B();return}if(V){let ot=function(Ae){ye++,ye%2===0&&X();let Me=Ae-we,Ne=Math.min(1,Me/vt),Dt=Ne<=.4?Ne/.4:1,qt=Ne>.4?(Ne-.4)/.6:0;Ne<=.4?gt.position.lerpVectors(Wt,Jt,Dt):gt.position.lerpVectors(Jt,Wt,qt);let Ge=Ne<=.35?Ne/.35:Ne<=.7?(.7-Ne)/.35:0;if(ve.rotation.y=-Ge*1.1,!fe&&Ne>=C&&(fe=!0,ho(w.effectKey,x,m,A),m.hp<=0&&(ge=!0),A.updateUnitSlashVisibility&&A.updateUnitSlashVisibility(m),Z.get(m.id)&&w.target!=="ally"?de=Ae:ge&&(En(m,x),ge=!1)),de!=null){let lt=Z.get(m.id);if(lt){let St=Math.min(1,(Ae-de)/b),on=1-St;Gi.copy(le).multiplyScalar(pe*on),lt.position.copy(Dn).add(Gi),St>=1&&(lt.position.copy(Dn),de=null,ge&&(En(m,x),ge=!1))}else de=null,ge&&(En(m,x),ge=!1)}Ne<1?requestAnimationFrame(ot):(gt.position.copy(Wt),ve.rotation.y=0,de==null&&ge&&(En(m,x),ge=!1),de==null?(Ln.shadowMap.enabled=!0,A.updateTurnUI&&A.updateTurnUI(),B&&B()):requestAnimationFrame(ot))},gt=Z.get(x.id);if(!gt||!gt.userData.rightArm){ho(w.effectKey,x,m,A),A.updateUnitSlashVisibility&&A.updateUnitSlashVisibility(m),A.updateTurnUI&&A.updateTurnUI(),B&&B();return}let Wt=oe(x.x,x.y).clone(),_t=oe(m.x,m.y).clone(),Jt=Wt.clone().lerp(_t,.35),jt=_t.x-Wt.x,Tn=_t.z-Wt.z;jt*jt+Tn*Tn>1e-6&&(gt.rotation.y=Math.atan2(jt,Tn));let Dn=oe(m.x,m.y).clone(),le=_t.clone().sub(Wt).normalize(),pe=.4,ve=gt.userData.rightArm,fe=!1,de=null,ge=!1,we=performance.now(),ye=0;Ln.shadowMap.enabled=!1,requestAnimationFrame(ot);return}let z=oe(x.x,x.y).clone(),j=oe(m.x,m.y).clone(),he=new ss(.035,.035,.4,6),Se=new mn({color:16763972}),ee=new Je(he,Se);ee.position.copy(z),ee.position.y+=.6;let re=j.clone().sub(z).normalize();ee.quaternion.setFromUnitVectors(new F(0,1,0),re),n.add(ee);let _e=ee.position.clone(),at=j.clone();at.y+=.6;let We=performance.now(),ct=oe(m.x,m.y).clone(),Nt=j.clone().sub(z).normalize(),Ot=.4,Kt=!1,fn=null,Bt=0;function Lt(gt){Bt++,Bt%2===0&&X();let Wt=gt-We,_t=Math.min(1,Wt/Q);if(ee.position.lerpVectors(_e,at,_t),!Kt&&_t>=1&&(Kt=!0,n.remove(ee),he.dispose(),Se.dispose(),w.type==="spell"&&Vu(m.x,m.y),ho(w.effectKey,x,m,A),Z.get(m.id)&&m.hp>0&&(fn=gt),A.updateUnitSlashVisibility&&A.updateUnitSlashVisibility(m)),fn!=null){let Jt=Z.get(m.id);if(Jt){let jt=Math.min(1,(gt-fn)/b),Tn=1-jt;Gi.copy(Nt).multiplyScalar(Ot*Tn),Jt.position.copy(ct).add(Gi),jt>=1&&(Jt.position.copy(ct),fn=null)}else fn=null}_t<1?requestAnimationFrame(Lt):fn==null?(Ln.shadowMap.enabled=!0,A.updateTurnUI&&A.updateTurnUI(),B&&B()):requestAnimationFrame(Lt)}Ln.shadowMap.enabled=!1,requestAnimationFrame(Lt)}function vn(){if(Ve!=="playing"||!xo(je)||un||Te.length===0)return;let x=Te[Ye],m=N.find(le=>le.id===x);if(!m||m.hp<=0)return;let w=uo(e,m.x,m.y,ce(m,"agi"),N,m),A=[];w.forEach((le,pe)=>{if(le===0)return;let ve=pe%e.w,fe=Math.floor(pe/e.w);N.some(ge=>ge.id!==m.id&&ge.x===ve&&ge.y===fe&&ge.hp>0)||A.push({gx:ve,gy:fe,dist:le})});let B=Hu(m),H=uc(),J=ku(m.player),V=.25,z=.03,j=m.maxHp>0&&m.hp/m.maxHp<V,he=m.maxHp>0&&m.hp/m.maxHp<z,Se=m.level===2,ee=le=>N.some(pe=>pe.hp>0&&pe.x===le.gx&&pe.y===le.gy&&pe.id!==m.id),re=H.filter(le=>!ee(le)),_e=J.filter(le=>!ee(le)),at=Zr(m).filter(le=>!le.disabled&&m.mp>=le.cost&&le.target==="enemy"),We=at.length>0?Math.max(...at.map(le=>le.range||0)):0,ct=Math.max(m.range!=null?m.range:1,We);function Nt(le,pe){if(pe.length===0)return null;let ve=null,fe=1/0;for(let de of le){let ge=0;for(let we of pe)ge+=ai(de.gx,de.gy,we.gx,we.gy);ge<fe&&(fe=ge,ve=de)}return ve}function Ot(le,pe){if(pe.length===0||le.length===0)return null;let ve=null,fe=1/0;for(let de of le){let ge=Math.min(...pe.map(we=>ai(de.gx,de.gy,we.gx,we.gy)));ge<fe&&(fe=ge,ve=de)}return ve}function Kt(le,pe){let ve=ct,fe=[];for(let de of N){if(de.hp<=0||de.player===m.player)continue;let ge=ai(le,pe,de.x,de.y);ge<=ve&&ge>0&&Es(e,le,pe,de.x,de.y)&&fe.push({target:de,dist:ge})}return fe}let fn=new Set(A.map(le=>le.gy*e.w+le.gx));function Bt(le,pe){if(!le||le.length<=1)return null;let ve=Math.min(pe,le.length-1);for(let fe=ve;fe>=1;fe--){let de=le[fe],ge=de.y*e.w+de.x;if(fn.has(ge))return{gx:de.x,gy:de.y}}return null}function Lt(le,pe){if(!le||le.length<=1)return null;let ve=Math.min(pe,le.length-1);for(let fe=ve;fe>=1;fe--){let de=le[fe];if(!N.some(we=>we.id!==m.id&&we.hp>0&&we.x===de.x&&we.y===de.y))return{gx:de.x,gy:de.y}}return null}function gt(le){let pe=null,ve=null,fe=1/0;for(let de of le){let ge=rs(e,m.x,m.y,de.gx,de.gy,N,m);ge&&ge.length>1&&ge.length<fe&&(fe=ge.length,pe=ge,ve=de)}return pe&&ve?{path:pe,target:ve}:null}function Wt(le){let pe=le??A;if(pe.length===0)return null;let ve=N.filter(ge=>ge.hp>0&&ge.player!==m.player);if(ve.length===0)return pe[0];let fe=null,de=-1;for(let ge of pe){let we=Math.min(...ve.map(ye=>ai(ge.gx,ge.gy,ye.x,ye.y)));we>de&&(de=we,fe=ge)}return fe}function _t(le){let pe=le??A;if(pe.length===0)return null;let ve=N.filter(ye=>ye.hp>0&&ye.player!==m.player),fe=N.filter(ye=>ye.hp>0&&ye.player===m.player&&ye.id!==m.id);if(ve.length===0)return pe[0];let de=m.maxHp>0&&m.hp/m.maxHp>=.6,ge=null,we=-1/0;for(let ye of pe){let ot=Math.min(...ve.map(Ne=>ai(ye.gx,ye.gy,Ne.x,Ne.y))),Ae=fe.length>0?Math.min(...fe.map(Ne=>ai(ye.gx,ye.gy,Ne.x,Ne.y))):999,Me;de?Me=Ae<ot?ot-1e3:ot:Me=ot-Ae,Me>we&&(we=Me,ge=ye)}return ge}function Jt(){let le=ct,pe=N.filter(de=>de.hp>0&&de.player!==m.player);if(pe.length===0)return null;let ve=null,fe=-1;for(let de of A){let ge=Math.min(...pe.map(ye=>ai(de.gx,de.gy,ye.x,ye.y)));pe.some(ye=>ai(de.gx,de.gy,ye.x,ye.y)<=le)&&ge>fe&&(fe=ge,ve=de)}return ve}if(yn){if(Vt){Zt();return}if(bs-Pt<=20&&H.length>0){let we=H.some(ye=>ye.gx===m.x&&ye.gy===m.y);if(we&&A.length>0){let ye=new Set(H.map(Me=>Me.gy*e.w+Me.gx)),Ae=A.filter(Me=>ye.has(Me.gy*e.w+Me.gx)).filter(Me=>Me.gx!==m.x||Me.gy!==m.y);if(Ae.length>0){let Me=Wt(Ae);if(Me&&(Me.gx!==m.x||Me.gy!==m.y)){Gt(m,Me.gx,Me.gy,()=>setTimeout(Zt,400));return}}Zt();return}if(we){Zt();return}if(A.length>0){let ye=re.length>0?re:H,ot=gt(ye),Ae=ot?Lt(ot.path,ce(m,"agi")):null;if(Ae&&(Ae.gx!==m.x||Ae.gy!==m.y)){Gt(m,Ae.gx,Ae.gy,()=>setTimeout(Zt,400));return}let Me=Ot(A,ye);if(Me&&(Me.gx!==m.x||Me.gy!==m.y)){Gt(m,Me.gx,Me.gy,()=>setTimeout(Zt,400));return}}Zt();return}if(!j&&A.length>0){if(H.length>0&&!H.some(ye=>ye.gx===m.x&&ye.gy===m.y)){let ye=re.length>0?re:H,ot=gt(ye),Ae=ot?Lt(ot.path,ce(m,"agi")):null;if(Ae&&(Ae.gx!==m.x||Ae.gy!==m.y)){Gt(m,Ae.gx,Ae.gy,()=>setTimeout(Zt,400));return}let Me=Ot(A,ye);if(Me&&(Me.gx!==m.x||Me.gy!==m.y)){Gt(m,Me.gx,Me.gy,()=>setTimeout(Zt,400));return}}if(Se&&J.length>0&&!J.some(ye=>ye.gx===m.x&&ye.gy===m.y)){let ye=_e.length>0?_e:J,ot=gt(ye),Ae=ot?Lt(ot.path,ce(m,"agi")):null;if(Ae&&(Ae.gx!==m.x||Ae.gy!==m.y)){Gt(m,Ae.gx,Ae.gy,()=>setTimeout(Zt,400));return}let Me=Ot(A,ye);if(Me&&(Me.gx!==m.x||Me.gy!==m.y)){Gt(m,Me.gx,Me.gy,()=>setTimeout(Zt,400));return}}}let pe=new Set(H.map(we=>we.gy*e.w+we.gx)),ve=H.length>0?A.filter(we=>pe.has(we.gy*e.w+we.gx)):null,fe=ve!=null&&ve.length>0?ve:A,de=N.filter(we=>we.hp>0&&we.player===m.player&&we.id!==m.id),ge=null;if(fe.length>0&&de.length>0&&(ge=_t(fe),ge)){let we=rs(e,m.x,m.y,ge.gx,ge.gy,N,m),ye=we?we.length-1:1/0;(!we||we.length<=1||ye>ce(m,"agi"))&&(ge=Wt(fe))}if(!ge&&fe.length>0&&(ge=Wt(fe)),ge&&(ge.gx!==m.x||ge.gy!==m.y)){Gt(m,ge.gx,ge.gy,()=>setTimeout(Zt,400));return}Zt();return}if(he&&bs-Pt>20&&!Vt&&A.length>0){let le=null,pe=1/0;for(let fe of A){let ge=Kt(fe.gx,fe.gy).filter(we=>we.target.maxHp>0&&we.target.hp/we.target.maxHp<V);if(ge.length>0){let we=Math.min(...ge.map(ye=>ye.target.hp));we<pe&&(pe=we,le=fe)}}if(le){let fe=rs(e,m.x,m.y,le.gx,le.gy,N,m),de=fe?Bt(fe,ce(m,"agi")):null;if(de&&(de.gx!==m.x||de.gy!==m.y)){Gt(m,de.gx,de.gy,()=>setTimeout(vn,600));return}}let ve=Wt();if(ve&&(ve.gx!==m.x||ve.gy!==m.y)){Gt(m,ve.gx,ve.gy,()=>setTimeout(vn,600));return}Zt();return}if(!yn){let ot=function(Ge){return gr(m,Ge,N).filter(St=>St.targetUnit!=null).map(St=>St.targetUnit)},le=Zr(m),pe=m.maxHp>0?m.hp/m.maxHp:1,ve=.35,fe=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct"]),de=new Set(["chakra","sacrifice"]),ge=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),we=new Set(["manaDrain","impale","poison"]),ye=new Set(["dominate","weaken","cripple","hex","blind","raid"]),Ae={showFloatingCombatText:Jn,handleUnitDeath:En,updateUnitSlashVisibility:Y,updateTurnUI:Ft,world:e,units:N,updateUnitPosition(Ge){let lt=Z.get(Ge.id);lt&&lt.position.copy(oe(Ge.x,Ge.y))},animateKnockback(Ge,lt,St,on,Qt,sn){let Xt=Z.get(Ge.id);if(!Xt){sn&&sn();return}let Un=oe(lt,St).clone(),jr=oe(on,Qt).clone(),nd=performance.now(),vc=0;function Mc(id){vc++,vc%2===0&&X();let bc=Math.min(1,(id-nd)/Ss),sd=bo=>bo*bo*(3-2*bo);Xt.position.lerpVectors(Un,jr,sd(bc)),bc<1?requestAnimationFrame(Mc):(Xt.position.copy(jr),sn&&sn())}requestAnimationFrame(Mc)}},Me=null,Ne=null,Dt=B.some(Ge=>Ge.target.maxHp>0&&Ge.target.hp/Ge.target.maxHp<V),qt=Dt||A.some(Ge=>Kt(Ge.gx,Ge.gy).some(St=>St.target.maxHp>0&&St.target.hp/St.target.maxHp<V));if(!qt){for(let lt of le)if(!lt.disabled&&de.has(lt.effectKey)){let on=gr(m,lt,N).filter(Qt=>Qt.targetUnit&&Qt.targetUnit.maxHp>0&&Qt.targetUnit.hp/Qt.targetUnit.maxHp<.5);if(on.length>0){let Qt=on.sort((sn,Xt)=>sn.targetUnit.hp-Xt.targetUnit.hp)[0].targetUnit;Me=lt,Ne=Qt;break}}}if(!Me&&!qt&&(B.length>0||A.some(lt=>Kt(lt.gx,lt.gy).length>0)))for(let lt of le){if(lt.disabled)continue;let St=m.tempBuff&&m.tempBuff.duration>0;if(ge.has(lt.effectKey)){if(lt.target==="self"){if(lt.effectKey==="bloodlust"&&m.hp/m.maxHp>.8)continue;if(!St){Me=lt,Ne=m;break}}if(lt.target==="ally"){if(lt.effectKey==="forge"&&St||lt.effectKey==="fortify"&&St||lt.effectKey==="mantra"&&St||lt.effectKey==="sanctuary"&&St)continue;let Qt=gr(m,lt,N).filter(sn=>sn.targetUnit!=null).map(sn=>sn.targetUnit);if(Qt.length>0){let sn=Qt.filter(Un=>!Un.tempBuff||Un.tempBuff.duration<=0),Xt=(sn.length>0?sn:Qt).sort((Un,jr)=>Un.hp-jr.hp)[0];Me=lt,Ne=Xt;break}}}}if(!Me){for(let Ge of le)if(!Ge.disabled&&fe.has(Ge.effectKey)){if(Ge.effectKey==="feast"&&m.hp/m.maxHp>.7||Ge.effectKey==="berserk"&&m.hp/m.maxHp<.25||Ge.effectKey==="shuriken"&&B.length>0||Ge.effectKey==="judgement"&&m.hp/m.maxHp>.7)continue;let lt=ot(Ge);if(lt.length===0)continue;let St=lt.filter(Xt=>Xt.maxHp>0&&Xt.hp/Xt.maxHp<ve),on=(Xt,Un)=>ce(Xt,"int")-ce(Un,"int")||Xt.hp-Un.hp,Qt=(Xt,Un)=>Xt.hp-Un.hp,sn=St.length>0?Ge.type==="spell"?St.sort(on)[0]:St.sort(Qt)[0]:Ge.type==="spell"?lt.sort(on)[0]:lt.sort(Qt)[0];Me=Ge,Ne=sn;break}}if(!Me&&!Dt){for(let Ge of le)if(!Ge.disabled&&ye.has(Ge.effectKey)){let St=ot(Ge).sort((on,Qt)=>on.hp-Qt.hp)[0];Me=Ge,Ne=St;break}}if(!Me&&!Dt){for(let Ge of le)if(!Ge.disabled&&we.has(Ge.effectKey)){let St=ot(Ge).filter(on=>!on.tempDebuff||on.tempDebuff.duration<=0);if(St.length>0){let on=St.sort((Qt,sn)=>Qt.hp-sn.hp)[0];Me=Ge,Ne=on;break}}}if(Me&&Ne){m.mp-=Me.cost,yn=!0;let Ge=Me.target==="self"?m:Ne;$r(m,Ge,Me,Ae,()=>setTimeout(vn,600));return}}if(zu(m)&&B.length>0){B.sort((pe,ve)=>pe.target.hp-ve.target.hp||pe.dist-ve.dist);let le=B[0].target;dc(m,le);return}if(B.length>0){B.sort((pe,ve)=>pe.target.hp-ve.target.hp||pe.dist-ve.dist);let le=B[0].target;dc(m,le);return}let jt=bs-Pt;if(jt<=20&&H.length>0&&!Vt&&A.length>0&&!H.some(pe=>pe.gx===m.x&&pe.gy===m.y)){let pe=re.length>0?re:H,ve=gt(pe),fe=ve?ve.path:null,de=(Ne,Dt)=>Math.min(...H.map(qt=>ai(Ne,Dt,qt.gx,qt.gy))),ge=de(m.x,m.y),we=null,ye=-1,ot=V;for(let Ne of A){if(de(Ne.gx,Ne.gy)>ge||Kt(Ne.gx,Ne.gy).filter(St=>St.target.maxHp>0&&St.target.hp/St.target.maxHp<ot).length===0)continue;let Ge=fe?fe.findIndex(St=>St.x===Ne.gx&&St.y===Ne.gy):-1,lt=Ge>=0?Ge:0;lt>ye&&(ye=lt,we=Ne)}if(we&&(we.gx!==m.x||we.gy!==m.y)){Gt(m,we.gx,we.gy,()=>setTimeout(vn,600));return}let Ae=ve?Lt(ve.path,ce(m,"agi")):null;if(Ae&&(Ae.gx!==m.x||Ae.gy!==m.y)){Gt(m,Ae.gx,Ae.gy,()=>setTimeout(vn,600));return}let Me=Ot(A,pe);if(Me&&(Me.gx!==m.x||Me.gy!==m.y)){Gt(m,Me.gx,Me.gy,()=>setTimeout(vn,600));return}}if(j&&A.length>0&&!Vt){let le=null,pe=1/0;for(let ve of A){let de=Kt(ve.gx,ve.gy).filter(ge=>ge.target.maxHp>0&&ge.target.hp/ge.target.maxHp<V);if(de.length>0){let ge=Math.min(...de.map(we=>we.target.hp));ge<pe&&(pe=ge,le=ve)}}if(le){let ve=rs(e,m.x,m.y,le.gx,le.gy,N,m),fe=ve?Bt(ve,ce(m,"agi")):null;if(fe&&(fe.gx!==m.x||fe.gy!==m.y)){Gt(m,fe.gx,fe.gy,()=>setTimeout(vn,600));return}}if(jt>20&&Se&&J.length>0&&!J.some(fe=>fe.gx===m.x&&fe.gy===m.y)){let fe=_e.length>0?_e:J,de=gt(fe);if(de!=null&&de.path.length<=5){let we=Lt(de.path,ce(m,"agi"));if(we&&(we.gx!==m.x||we.gy!==m.y)){Gt(m,we.gx,we.gy,()=>setTimeout(vn,600));return}let ye=Ot(A,fe);if(ye&&(ye.gx!==m.x||ye.gy!==m.y)){Gt(m,ye.gx,ye.gy,()=>setTimeout(vn,600));return}}}if(jt>20){let ve=Wt();if(ve&&ai(m.x,m.y,ve.gx,ve.gy)>0){Gt(m,ve.gx,ve.gy,()=>setTimeout(vn,600));return}Zt();return}}if(jt<=10&&H.length>0&&!Vt&&A.length>0&&!H.some(pe=>pe.gx===m.x&&pe.gy===m.y)){let pe=re.length>0?re:H,ve=gt(pe),fe=ve?Lt(ve.path,ce(m,"agi")):null;if(fe&&(fe.gx!==m.x||fe.gy!==m.y)){Gt(m,fe.gx,fe.gy,()=>setTimeout(vn,600));return}let de=Ot(A,pe);if(de&&(de.gx!==m.x||de.gy!==m.y)){Gt(m,de.gx,de.gy,()=>setTimeout(vn,600));return}}if(m.level===1&&H.length>0&&!Vt&&!H.some(pe=>pe.gx===m.x&&pe.gy===m.y)&&A.length>0){let pe=re.length>0?re:H,ve=gt(pe),fe=ve?Lt(ve.path,ce(m,"agi")):null;if(fe&&(fe.gx!==m.x||fe.gy!==m.y)){Gt(m,fe.gx,fe.gy,()=>setTimeout(vn,600));return}let de=Ot(A,pe);if(de&&(de.gx!==m.x||de.gy!==m.y)){Gt(m,de.gx,de.gy,()=>setTimeout(vn,600));return}}if(Se&&J.length>0&&!Vt&&!J.some(pe=>pe.gx===m.x&&pe.gy===m.y)&&A.length>0){let ve=N.filter(Ae=>Ae.hp>0&&Ae.player!==m.player).filter(Ae=>Ae.maxHp>0&&Ae.hp/Ae.maxHp<V),fe=null,de=1/0;for(let Ae of A){let Ne=Kt(Ae.gx,Ae.gy).find(Dt=>ve.some(qt=>qt.id===Dt.target.id));Ne&&Ne.target.hp<de&&(de=Ne.target.hp,fe=Ae)}if(fe){let Ae=rs(e,m.x,m.y,fe.gx,fe.gy,N,m),Me=Ae?Bt(Ae,ce(m,"agi")):null;if(Me&&(Me.gx!==m.x||Me.gy!==m.y)){Gt(m,Me.gx,Me.gy,()=>setTimeout(vn,600));return}}let ge=_e.length>0?_e:J,we=gt(ge),ye=we?Lt(we.path,ce(m,"agi")):null;if(ye&&(ye.gx!==m.x||ye.gy!==m.y)){Gt(m,ye.gx,ye.gy,()=>setTimeout(vn,600));return}let ot=Ot(A,ge);if(ot&&(ot.gx!==m.x||ot.gy!==m.y)){Gt(m,ot.gx,ot.gy,()=>setTimeout(vn,600));return}}let Tn=N.filter(le=>le.hp>0&&le.player!==m.player);if(m.level>=2&&ct>=2&&Tn.length>0&&!Vt&&A.length>0){let le=Jt();if(le&&(le.gx!==m.x||le.gy!==m.y)){Gt(m,le.gx,le.gy,()=>setTimeout(vn,600));return}}if(Tn.length>0&&!Vt&&A.length>0){let pe=function(fe,de){let ge=null;for(let we=-le;we<=le;we++)for(let ye=-le;ye<=le;ye++){if(ye===0&&we===0||Math.abs(ye)+Math.abs(we)>le)continue;let ot=fe.x+ye,Ae=fe.y+we;if(ot<0||ot>=e.w||Ae<0||Ae>=e.h||!dr(e,ot,Ae)||!Es(e,ot,Ae,fe.x,fe.y)||N.some(Ge=>Ge.hp>0&&Ge.x===ot&&Ge.y===Ae))continue;let Ne=rs(e,m.x,m.y,ot,Ae,N,m),Dt=Ne?Ne.length-1:1/0;Ne&&Ne.length>1&&(!de||Dt<=ce(m,"agi"))&&(!ge||Ne.length<ge.length)&&(ge=Ne)}return ge},le=ct,ve=[];for(let fe of Tn){let de=pe(fe,!0);de&&ve.push({enemy:fe,path:de})}if(ve.length>0){let fe=ve.filter(ye=>ye.enemy.maxHp>0&&ye.enemy.hp/ye.enemy.maxHp<V),de=fe.length>0?fe:ve;fe.length>0?de.sort((ye,ot)=>ye.enemy.hp-ot.enemy.hp||ye.path.length-ot.path.length):de.sort((ye,ot)=>ye.path.length-ot.path.length||ye.enemy.hp-ot.enemy.hp);let ge=de[0],we=Bt(ge.path,ce(m,"agi"));if(we&&(we.gx!==m.x||we.gy!==m.y)){Gt(m,we.gx,we.gy,()=>setTimeout(vn,600));return}}if(ve.length===0){let fe=null,de=1/0;for(let ge of Tn){let we=pe(ge,!1);we&&we.length<de&&(de=we.length,fe=we)}if(fe){let ge=Bt(fe,ce(m,"agi"));if(ge&&(ge.gx!==m.x||ge.gy!==m.y)){Gt(m,ge.gx,ge.gy,()=>setTimeout(vn,600));return}}}}Zt()}function dn(){for(ni.length=0;Kn.children.length;){let x=Kn.children[0];Kn.remove(x),x.geometry!==xr&&x.geometry!==yr&&x.geometry.dispose(),x.material.dispose()}X()}let Is=new Set;function Zr(x){return!x||!x.class?[]:Cu[x.class]?Cu[x.class].map(m=>({...m,disabled:m.disabled===!0||x.level<m.level||m.hpCost&&x.hp<m.hpCost||m.cost&&x.mp<m.cost})):[]}function gr(x,m,w){let A=[],B=(J,V,z,j)=>Math.abs(J-z)+Math.abs(V-j),H=m.range||0;if(m.target==="self")return A.push({gx:x.x,gy:x.y,targetUnit:null}),A;for(let J of w)J.hp<=0||B(x.x,x.y,J.x,J.y)>H||H>2&&!Es(e,x.x,x.y,J.x,J.y)||(m.target==="enemy"&&J.player!==x.player&&A.push({gx:J.x,gy:J.y,targetUnit:J}),m.target==="ally"&&J.player===x.player&&A.push({gx:J.x,gy:J.y,targetUnit:J}));return A}function Gu(x,m){let w=m.range||0;if(m.target==="self")return[{gx:x.x,gy:x.y}];let A=Iu(e,x.x,x.y,w),B=[];return A.forEach((H,J)=>{let V=J%e.w,z=J/e.w|0;w>2&&!Es(e,x.x,x.y,V,z)||B.push({gx:V,gy:z})}),B}function Wu(x,m){let w=gr(x,m,N);Is=new Set(w.map(B=>`${B.gx},${B.gy}`));let A=m.target==="self"?w:Gu(x,m);dn(),A.forEach(({gx:B,gy:H})=>{let V=($n+e.height[H][B]*.35)/2+$n/2,z=B*Et-Pe+Et/2,j=H*Et-ie+Et/2,he=V+.01,Se=new mn({color:8926122,transparent:!0,opacity:.4,side:pn}),ee=new Je(xr,Se);ee.rotation.x=-Math.PI/2,ee.position.set(z,he,j),Kn.add(ee),ni.push(Se);let re=new mn({color:11167436,transparent:!0,opacity:.7,side:pn}),_e=new Je(yr,re);_e.rotation.x=-Math.PI/2,_e.position.set(z,he+.01,j),_e.userData.gx=B,_e.userData.gy=H,Kn.add(_e),ni.push(re)})}let fc=.82,pc=1.02,xr=new Fi(pc,pc),yr=new Fi(fc,fc);function Xu(x){dn(),x.forEach(({gx:m,gy:w})=>{let B=($n+e.height[w][m]*.35)/2+$n/2,H=m*Et-Pe+Et/2,J=w*Et-ie+Et/2,V=B+.01,z=new mn({color:2271812,transparent:!0,opacity:.4,side:pn}),j=new Je(xr,z);j.rotation.x=-Math.PI/2,j.position.set(H,V,J),Kn.add(j),ni.push(z);let he=new mn({color:4508774,transparent:!0,opacity:.7,side:pn}),Se=new Je(yr,he);Se.rotation.x=-Math.PI/2,Se.position.set(H,V+.01,J),Se.userData.gx=m,Se.userData.gy=w,Kn.add(Se),ni.push(he)}),X()}function yo(x){dn(),x.forEach((m,w)=>{if(m===0)return;let A=w%e.w,B=w/e.w|0,J=($n+e.height[B][A]*.35)/2+$n/2,V=A*Et-Pe+Et/2,z=B*Et-ie+Et/2,j=J+.01,he=new mn({color:3381759,transparent:!0,opacity:.35,side:pn}),Se=new Je(xr,he);Se.rotation.x=-Math.PI/2,Se.position.set(V,j,z),Kn.add(Se),ni.push(he);let ee=new mn({color:6730751,transparent:!0,opacity:.65,side:pn}),re=new Je(yr,ee);re.rotation.x=-Math.PI/2,re.position.set(V,j+.01,z),Kn.add(re),ni.push(ee)}),X()}function qu(x){dn(),x.forEach((m,w)=>{if(m===0)return;let A=w%e.w,B=w/e.w|0,J=($n+e.height[B][A]*.35)/2+$n/2,V=A*Et-Pe+Et/2,z=B*Et-ie+Et/2,j=J+.01,he=new mn({color:10035746,transparent:!0,opacity:.4,side:pn}),Se=new Je(xr,he);Se.rotation.x=-Math.PI/2,Se.position.set(V,j,z),Kn.add(Se),ni.push(he);let ee=new mn({color:13386820,transparent:!0,opacity:.7,side:pn}),re=new Je(yr,ee);re.rotation.x=-Math.PI/2,re.position.set(V,j+.01,z),Kn.add(re),ni.push(ee)}),X()}let zi=new io,Vi=new ke;function Kr(x,m){let w=t.getBoundingClientRect();return Vi.x=(x-w.left)/w.width*2-1,Vi.y=-((m-w.top)/w.height)*2+1,{x:Vi.x,y:Vi.y}}function Yu(x,m){if(un)return;Vi.x=x,Vi.y=m,zi.setFromCamera(Vi,a);let w=zi.intersectObjects(ae.children,!0);if(w.length===0)return;let A=null;for(let V of w){let z=V.object;for(;z&&(z.userData.gx==null||z.userData.gy==null);)z=z.parent;if(z&&z.userData.gx!=null){A=z;break}}if(!A||A.userData.gx==null)return;let B=A.userData.gx,H=A.userData.gy;if(Ve==="draft"&&Re){let V=H*e.w+B;tt.has(V)&&ac(B,H);return}if(Ve!=="playing"||Fe==="cvcpu")return;if(bi&&xn){let V=Te[Ye],z=N.find(re=>re.id===V&&re.hp>0);if(z&&B===z.x&&H===z.y){bi=!1,xn=null,Is=new Set,dn(),Vt?Rt=new Map:(Rt=uo(e,z.x,z.y,ce(z,"agi"),N,z),yo(Rt)),Ft();return}let j=`${B},${H}`;if(!Is.has(j))return;if(!z||z.mp<xn.cost){bi=!1,xn=null,dn(),Ft();return}let he=N.find(re=>re.x===B&&re.y===H&&re.hp>0);if(xn.target==="enemy"&&(!he||he.player===z.player)||xn.target==="ally"&&he&&he.player!==z.player||xn.target==="self"&&(B!==z.x||H!==z.y)||xn.target==="enemy"&&!he)return;z.mp-=xn.cost,yn=!0;let Se={showFloatingCombatText:Jn,handleUnitDeath:En,updateUnitSlashVisibility:Y,updateTurnUI:Ft,world:e,units:N,updateUnitPosition(re){let _e=Z.get(re.id);_e&&_e.position.copy(oe(re.x,re.y))},animateKnockback(re,_e,at,We,ct,Nt){let Ot=Z.get(re.id);if(!Ot){Nt&&Nt();return}let Kt=oe(_e,at).clone(),fn=oe(We,ct).clone(),Bt=performance.now(),Lt=0;function gt(Wt){Lt++,Lt%2===0&&X();let _t=Math.min(1,(Wt-Bt)/Ss),Jt=jt=>jt*jt*(3-2*jt);Ot.position.lerpVectors(Kt,fn,Jt(_t)),_t<1?requestAnimationFrame(gt):(Ot.position.copy(fn),Nt&&Nt())}requestAnimationFrame(gt)}},ee=xn.target==="self"?z:he||null;$r(z,ee,xn,Se,()=>{dn(),bi=!1,xn=null,Is=new Set,Vt?Zt():Ft()});return}if(fi){let V=Te[Ye],z=N.find(he=>he.id===V),j=Z.get(V);if(z&&j&&Gn.length>0){let he=oe(z.x,z.y),Se=oe(B,H),ee=Se.x-he.x,re=Se.z-he.z,_e=ee*ee+re*re>1e-6?Math.atan2(ee,re):j.rotation.y;j.rotation.y=bt(_e)}Zt();return}if(dt!=null&&Zn){let V=N.find(he=>he.id===dt);if(!V||V.player!==je)return;let z=H*e.w+B,j=N.find(he=>he.x===B&&he.y===H&&he.hp>0);if(j&&j.id===Te[Ye]&&j.player===je){Zn=!1,dt=j.id,Vt?(dn(),Rt=new Map):(Rt=uo(e,j.x,j.y,ce(j,"agi"),N,j),yo(Rt)),Ft();return}if(!Rt.has(z)||Rt.get(z)===0)return;if(j&&j.player!==je){let he=ce(j,"agi")*.7+ce(j,"luk")*.3;if(Math.random()*Math.max(.001,he)<=ce(V,"dex")){let re=ce(V,"str")*.7+ce(V,"dex")*.1+ce(V,"int")*.07-(ce(j,"vit")*.3+ce(j,"luk")*.1),_e=Math.max(1,Math.floor(re));j.hp=Math.max(0,j.hp-_e),Jn(j.x,j.y,String(_e),!1),j.hp<=0&&En(j,V),Y(j)}else Jn(j.x,j.y,"MISS",!0);yn=!0,dt=null,Zn=!1,dn(),Vt?Zt():Ft()}return}let J=N.find(V=>V.x===B&&V.y===H&&V.hp>0);if(J){if(J.id===Te[Ye]&&J.player===je){gn(),dt=J.id,Zn=!1,Vt?(dn(),Rt=new Map):(Rt=uo(e,B,H,ce(J,"agi"),N,J),yo(Rt)),Ft();return}dn(),Rt=new Map,Zn=!1,Ht(J),Ft();return}if(gn(),dt!=null){let re=function(){if(ee>=he.length){V.x=he[he.length-1].x,V.y=he[he.length-1].y,un=!1,Qe(Se),nt(),Rt=new Map,Vt=!0,yn?Zt():Ft();return}let _e=he[ee-1],at=he[ee],We=oe(_e.x,_e.y).clone(),ct=oe(at.x,at.y).clone(),Nt=ct.x-We.x,Ot=ct.z-We.z;Nt*Nt+Ot*Ot>1e-6&&(Se.rotation.y=Math.atan2(Nt,Ot));let Kt=performance.now(),fn=0;function Bt(Lt){fn++,fn%2===0&&X();let gt=Math.min(1,(Lt-Kt)/Ss),_t=(Jt=>Jt*Jt*(3-2*Jt))(gt);if(Se.position.lerpVectors(We,ct,_t),ut(Se,_t),p){let Jt=a.position.distanceTo(h),jt=Jt<.1?o:Jt;f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),h.lerp(Se.position,l),a.position.copy(h).add(f.clone().multiplyScalar(jt)),a.lookAt(h)}gt<1?requestAnimationFrame(Bt):(ee++,re())}requestAnimationFrame(Bt)};if(Zn)return;let V=N.find(_e=>_e.id===dt);if(!V||V.player!==je)return;let z=H*e.w+B;if(!Rt.has(z)||Rt.get(z)===0||N.some(_e=>_e.id!==V.id&&_e.x===B&&_e.y===H&&_e.hp>0)||un||Vt)return;let he=rs(e,V.x,V.y,B,H,N,V);if(!he||he.length<=1)return;dt=null,dn(),un=!0,p=!0,nt(V.id);let Se=Z.get(V.id),ee=1;re()}}function mc(x){S.x=x.clientX,S.y=x.clientY,M=x.ctrlKey,_=Kr(x.clientX,x.clientY),t.style.cursor=(x.ctrlKey,"grabbing")}function _o(x){return x.touches&&x.touches.length>0?{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}:x.changedTouches&&x.changedTouches.length>0?{clientX:x.changedTouches[0].clientX,clientY:x.changedTouches[0].clientY}:{clientX:x.clientX,clientY:x.clientY}}function gc(x){if(!x||x.length<2)return 0;let m=x[0],w=x[1];return Math.hypot(w.clientX-m.clientX,w.clientY-m.clientY)}function $u(x){if(x.touches.length===2){P=gc(x.touches),_=null;return}if(x.touches.length!==1)return;P=null;let m=_o(x);mc({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function Zu(x){if(x.touches.length===2){x.preventDefault();let w=gc(x.touches);if(P!=null&&P>0){let A=w-P,B=a.position.distanceTo(h),H=Math.max(R,Math.min(D,B-A*te));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(H)),a.lookAt(h),E=performance.now()}P=w;return}if(P=null,x.touches.length!==1)return;x.preventDefault();let m=_o(x);xc({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function Ku(x){if(x.touches.length<2&&(P=null),x.touches.length===2||x.changedTouches.length===0)return;let m=_o(x);vo({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function xc(x){if(fi){qr(x.clientX,x.clientY);return}if(_==null)return;let m=x.clientX-S.x,w=x.clientY-S.y;if(!v&&!g&&(Math.abs(m)>T||Math.abs(w)>T)&&(x.ctrlKey||M?(g=!0,p=!1):(v=!0,p=!1)),g){q.copy(a.position).sub(h);let A=q.length();if(A<.001)return;let B=Math.atan2(q.x,q.z),H=Math.asin(Math.max(-1,Math.min(1,q.y/A)));B-=m*U,H+=w*U,H=Math.max(I,Math.min(L,H)),q.x=A*Math.cos(H)*Math.sin(B),q.y=A*Math.sin(H),q.z=A*Math.cos(H)*Math.cos(B),a.position.copy(h).add(q),a.lookAt(h),S.x=x.clientX,S.y=x.clientY,E=performance.now()}else if(v){let A=Kr(x.clientX,x.clientY);d.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,h.y,0)),zi.setFromCamera(new ke(_.x,_.y),a),zi.ray.intersectPlane(d,u);let B=u.clone();zi.setFromCamera(new ke(A.x,A.y),a),zi.ray.intersectPlane(d,u);let H=B.sub(u);h.add(H),a.position.add(H),a.lookAt(h),_={x:A.x,y:A.y},E=performance.now()}}function vo(x){if(_!=null&&!v&&!g){let m=Kr(x.clientX,x.clientY);Yu(m.x,m.y)}_=null,v=!1,g=!1,M=!1,t.style.cursor="grab"}function Ju(x){x.preventDefault();let m=a.position.distanceTo(h),w=Math.max(R,Math.min(D,m+x.deltaY*k));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(w)),a.lookAt(h),E=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",mc),t.addEventListener("mousemove",xc),t.addEventListener("mouseup",vo),t.addEventListener("mouseleave",vo),t.addEventListener("touchstart",$u,{passive:!0}),t.addEventListener("touchmove",Zu,{passive:!1}),t.addEventListener("touchend",Ku,{passive:!0}),t.addEventListener("wheel",Ju,{passive:!1});function yc(){let x=t.clientWidth,m=t.clientHeight;a.aspect=x/m,a.updateProjectionMatrix(),Ln.setSize(x,m),Ln.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",yc);let Ln=new Nr({antialias:!1});Ln.setSize(t.clientWidth,t.clientHeight),Ln.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Ln.shadowMap.enabled=!0,Ln.shadowMap.type=jl,t.appendChild(Ln.domElement),yc();let Jr=document.createElement("div");Jr.id="combat-text-layer",t.appendChild(Jr);let Si=new F,Gi=new F,ju=1400;function Jn(x,m,w,A,B){let H=document.createElement("div");H.className="combat-text-float "+(A?"miss":"damage")+(B?" "+B:""),H.textContent=w,H.style.position="absolute",Jr.appendChild(H);let J=B==="skill-name"?1.7:1.2,V=performance.now();function z(){Si.copy(oe(x,m)),Si.y+=J,Si.project(a);let Se=t.clientWidth,ee=t.clientHeight;H.style.left=(Si.x*.5+.5)*Se+"px",H.style.top=(1-(Si.y*.5+.5))*ee+"px"}let j=0;function he(){j%2===0&&z(),j++,performance.now()-V<ju?requestAnimationFrame(he):H.remove()}requestAnimationFrame(he)}let Qu=1500;function ed(x,m){let w=document.createElement("div");w.className="combat-text-float "+(m||"levelup"),w.textContent="LEVEL UP!",w.style.position="absolute",Jr.appendChild(w);let A=performance.now(),B=0;function H(){Si.copy(oe(x.x,x.y)),Si.y+=1.2,Si.project(a);let V=t.clientWidth,z=t.clientHeight;w.style.left=(Si.x*.5+.5)*V+"px",w.style.top=(1-(Si.y*.5+.5))*z+"px"}function J(){B%2===0&&H(),B++,performance.now()-A<Qu?requestAnimationFrame(J):w.remove()}requestAnimationFrame(J)}function En(x,m){kx(m?.class,x.class),console.log("[DEATH]",`${x.name} (${x.class}, P${x.player})`,`at (${x.x},${x.y})`,`Lv.${x.level}`),Jn(x.x,x.y,"DEAD",!1);let w=Z.get(x.id);if(!w){nt(),_c();return}let A=performance.now();function B(H){X();let J=H-A,V=Math.min(1,J/xe),z=V*V;w.rotation.x=z*Math.PI*.5,V<1?requestAnimationFrame(B):(n.remove(w),Z.delete(x.id),nt(),_c())}requestAnimationFrame(B)}function _c(){if(Ve!=="playing")return;let x=N.some(w=>w.player===1&&w.hp>0),m=N.some(w=>w.player===2&&w.hp>0);x?m||Mo(1):Mo(2)}function td(){let x=uc(),m=new Set(x.map(J=>J.gy*e.w+J.gx)),w=N.filter(J=>J.hp>0&&J.player===1&&m.has(J.y*e.w+J.x)).length,A=N.filter(J=>J.hp>0&&J.player===2&&m.has(J.y*e.w+J.x)).length,B=null,H="";if(w>A)B=1,H=`Time's up! Player 1 wins! (${w} vs ${A} units on center base)`;else if(A>w)B=2,H=`Time's up! Player 2 wins! (${A} vs ${w} units on center base)`;else{let J=N.filter(z=>z.hp>0&&z.player===1).reduce((z,j)=>z+j.hp,0),V=N.filter(z=>z.hp>0&&z.player===2).reduce((z,j)=>z+j.hp,0);J>V?(B=1,H=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${J} vs ${V})`):V>J?(B=2,H=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${V} vs ${J})`):H=`Draw! (equal units on center: ${w}, equal HP)`}Mo(B,H)}function Mo(x,m){Tt(),Hx(N,x),Ve="gameover",document.getElementById("turn-menu").style.display="none",gn(),dn();let w=document.getElementById("game-over-overlay"),A=document.getElementById("game-over-title"),B=document.getElementById("game-over-cards"),H=document.getElementById("game-over-class-record");H&&(H.style.display="none",H.innerHTML=""),A.textContent=m??`Player ${x} wins!`;let J=N.filter(V=>V.player===(x??1));if(B.innerHTML=J.map(V=>{let z=V,j=V.level>=3?" level-3":V.level>=2?" level-2":"",he=z.maxHp>0&&z.hp/z.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${j}${he}">
          <img class="game-over-card-image" src="${Wr[V.class]||""}" alt="${z.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
      `}).join(""),w.classList.add("visible"),Fe==="cvcpu"&&Xr){if(pt++,H&&pt>=He){let V=ki.map(z=>{let j=wi[z],he=j.wins+j.losses||1,Se=j.wins+j.losses>0?(j.wins/he*100).toFixed(1)+"%":"\u2014",ee=j.wins+j.losses>0?(j.losses/he*100).toFixed(1)+"%":"\u2014";return{class:z,battles:j.battles,kills:j.kills,deaths:j.deaths,wins:j.wins,losses:j.losses,winRate:Se,lossRate:ee}});H.innerHTML=`
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Battles</th>
                <th>Kills</th>
                <th>Deaths</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Win%</th>
                <th>Loss%</th>
              </tr>
            </thead>
            <tbody>
              ${V.map(z=>`
                <tr>
                  <td class="class-name">${z.class}</td>
                  <td>${z.battles}</td>
                  <td>${z.kills}</td>
                  <td>${z.deaths}</td>
                  <td>${z.wins}</td>
                  <td>${z.losses}</td>
                  <td>${z.winRate}</td>
                  <td>${z.lossRate}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `,H.style.display="block"}pt<He&&setTimeout(()=>{w.classList.remove("visible"),In()},2e3)}}function Ls(x=0){requestAnimationFrame(Ls),E===0&&(E=x);let m=x-E>500,w=0;typeof Ls.frameCount=="number"&&(w=Ls.frameCount),Ls.frameCount=w+1;let A=()=>{if(as){let B=.6+.4*Math.sin(x*.004);for(let H=0;H<ni.length;H++){let J=H%2===0?.4:.7;ni[H].opacity=J*B}Ln.render(n,a),as=!1}};m?x-W>=100&&(W=x,as=!0,A()):(Ls.frameCount%2===0&&(as=!0),A())}Ls()}Yx();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
