var oh="160";var lp=0,tu=1,cp=2;var Od=1,lh=2,ds=3,Fs=0,gi=1,Ln=2;var Us=0,zr=1,nu=2,iu=3,su=4,hp=5,ir=100,up=101,dp=102,ru=103,au=104,fp=200,pp=201,mp=202,gp=203,gc=204,yc=205,yp=206,xp=207,_p=208,vp=209,Mp=210,bp=211,Sp=212,Ep=213,Tp=214,wp=0,Ap=1,Rp=2,Eo=3,Cp=4,Pp=5,Ip=6,Lp=7,Fd=0,Dp=1,Up=2,Ns=0,Np=1,Op=2,Fp=3,Bp=4,kp=5,Hp=6;var Bd=300,Wr=301,Xr=302,xc=303,_c=304,rl=306,Ea=1e3,$i=1001,vc=1002,hi=1003,ou=1004;var Ul=1005;var Fi=1006,zp=1007;var Ta=1008;var Os=1009,Vp=1010,Gp=1011,ch=1012,kd=1013,Ls=1014,Ds=1015,wa=1016,Hd=1017,zd=1018,rr=1020,Wp=1021,Ki=1023,Xp=1024,qp=1025,ar=1026,qr=1027,Yp=1028,Vd=1029,$p=1030,Gd=1031,Wd=1033,Nl=33776,Ol=33777,Fl=33778,Bl=33779,lu=35840,cu=35841,hu=35842,uu=35843,Xd=36196,du=37492,fu=37496,pu=37808,mu=37809,gu=37810,yu=37811,xu=37812,_u=37813,vu=37814,Mu=37815,bu=37816,Su=37817,Eu=37818,Tu=37819,wu=37820,Au=37821,kl=36492,Ru=36494,Cu=36495,Kp=36283,Pu=36284,Iu=36285,Lu=36286;var To=2300,wo=2301,Hl=2302,Du=2400,Uu=2401,Nu=2402;var qd=3e3,or=3001,Zp=3200,Jp=3201,Yd=0,jp=1,Bi="",ti="srgb",ps="srgb-linear",hh="display-p3",al="display-p3-linear",Ao="linear",En="srgb",Ro="rec709",Co="p3";var Mr=7680;var Ou=519,Qp=512,em=513,tm=514,$d=515,nm=516,im=517,sm=518,rm=519,Fu=35044;var Bu="300 es",Mc=1035,fs=2e3,Po=2001,Bs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zl=Math.PI/180,bc=180/Math.PI;function jr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ri[i&255]+ri[i>>8&255]+ri[i>>16&255]+ri[i>>24&255]+"-"+ri[e&255]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[t&63|128]+ri[t>>8&255]+"-"+ri[t>>16&255]+ri[t>>24&255]+ri[n&255]+ri[n>>8&255]+ri[n>>16&255]+ri[n>>24&255]).toLowerCase()}function oi(i,e,t){return Math.max(e,Math.min(t,i))}function am(i,e){return(i%e+e)%e}function Vl(i,e,t){return(1-t)*i+t*e}function ku(i){return(i&i-1)===0&&i!==0}function Sc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(oi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class i{constructor(e,t,n,s,r,a,o,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,h)}set(e,t,n,s,r,a,o,l,h){let f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],f=n[4],m=n[7],p=n[2],u=n[5],x=n[8],b=s[0],y=s[3],g=s[6],S=s[1],v=s[4],A=s[7],F=s[2],D=s[5],N=s[8];return r[0]=a*b+o*S+l*F,r[3]=a*y+o*v+l*D,r[6]=a*g+o*A+l*N,r[1]=h*b+f*S+m*F,r[4]=h*y+f*v+m*D,r[7]=h*g+f*A+m*N,r[2]=p*b+u*S+x*F,r[5]=p*y+u*v+x*D,r[8]=p*g+u*A+x*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],f=e[8];return t*a*f-t*o*h-n*r*f+n*o*l+s*r*h-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],f=e[8],m=f*a-o*h,p=o*l-f*r,u=h*r-a*l,x=t*m+n*p+s*u;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=m*b,e[1]=(s*h-f*n)*b,e[2]=(o*n-s*a)*b,e[3]=p*b,e[4]=(f*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=u*b,e[7]=(n*l-h*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-s*h,s*l,-s*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gl.makeScale(e,t)),this}rotate(e){return this.premultiply(Gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gl=new Dt;function Kd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function om(){let i=Io("canvas");return i.style.display="block",i}var Hu={};function _a(i){i in Hu||(Hu[i]=!0,console.warn(i))}var zu=new Dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vu=new Dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Za={[ps]:{transfer:Ao,primaries:Ro,toReference:i=>i,fromReference:i=>i},[ti]:{transfer:En,primaries:Ro,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[al]:{transfer:Ao,primaries:Co,toReference:i=>i.applyMatrix3(Vu),fromReference:i=>i.applyMatrix3(zu)},[hh]:{transfer:En,primaries:Co,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vu),fromReference:i=>i.applyMatrix3(zu).convertLinearToSRGB()}},lm=new Set([ps,al]),un={enabled:!0,_workingColorSpace:ps,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Za[e].toReference,s=Za[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Za[i].primaries},getTransfer:function(i){return i===Bi?Ao:Za[i].transfer}};function Vr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var br,Lo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=Io("canvas")),br.width=e.width,br.height=e.height;let n=br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Io("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vr(t[n]/255)*255):t[n]=Vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cm=0,Do=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=jr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xl(s[a].image)):r.push(Xl(s[a]))}else r=Xl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hm=0,ki=class i extends Bs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$i,s=$i,r=Fi,a=Ta,o=Ki,l=Os,h=i.DEFAULT_ANISOTROPY,f=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=jr(),this.name="",this.source=new Do(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(_a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===or?ti:Bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ti?or:qd}set encoding(e){_a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===or?ti:Bi}};ki.DEFAULT_IMAGE=null;ki.DEFAULT_MAPPING=Bd;ki.DEFAULT_ANISOTROPY=1;var Qn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,h=l[0],f=l[4],m=l[8],p=l[1],u=l[5],x=l[9],b=l[2],y=l[6],g=l[10];if(Math.abs(f-p)<.01&&Math.abs(m-b)<.01&&Math.abs(x-y)<.01){if(Math.abs(f+p)<.1&&Math.abs(m+b)<.1&&Math.abs(x+y)<.1&&Math.abs(h+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(h+1)/2,A=(u+1)/2,F=(g+1)/2,D=(f+p)/4,N=(m+b)/4,Y=(x+y)/4;return v>A&&v>F?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=D/n,r=N/n):A>F?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=D/s,r=Y/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=N/r,s=Y/r),this.set(n,s,r,t),this}let S=Math.sqrt((y-x)*(y-x)+(m-b)*(m-b)+(p-f)*(p-f));return Math.abs(S)<.001&&(S=1),this.x=(y-x)/S,this.y=(m-b)/S,this.z=(p-f)/S,this.w=Math.acos((h+u+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends Bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qn(0,0,e,t),this.scissorTest=!1,this.viewport=new Qn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(_a("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===or?ti:Bi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ki(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Do(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ms=class extends Ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Uo=class extends ki{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tc=class extends ki{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ks=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],h=n[s+1],f=n[s+2],m=n[s+3],p=r[a+0],u=r[a+1],x=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=f,e[t+3]=m;return}if(o===1){e[t+0]=p,e[t+1]=u,e[t+2]=x,e[t+3]=b;return}if(m!==b||l!==p||h!==u||f!==x){let y=1-o,g=l*p+h*u+f*x+m*b,S=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let F=Math.sqrt(v),D=Math.atan2(F,g*S);y=Math.sin(y*D)/F,o=Math.sin(o*D)/F}let A=o*S;if(l=l*y+p*A,h=h*y+u*A,f=f*y+x*A,m=m*y+b*A,y===1-o){let F=1/Math.sqrt(l*l+h*h+f*f+m*m);l*=F,h*=F,f*=F,m*=F}}e[t]=l,e[t+1]=h,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],h=n[s+2],f=n[s+3],m=r[a],p=r[a+1],u=r[a+2],x=r[a+3];return e[t]=o*x+f*m+l*u-h*p,e[t+1]=l*x+f*p+h*m-o*u,e[t+2]=h*x+f*u+o*p-l*m,e[t+3]=f*x-o*m-l*p-h*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),f=o(s/2),m=o(r/2),p=l(n/2),u=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=p*f*m+h*u*x,this._y=h*u*m-p*f*x,this._z=h*f*x+p*u*m,this._w=h*f*m-p*u*x;break;case"YXZ":this._x=p*f*m+h*u*x,this._y=h*u*m-p*f*x,this._z=h*f*x-p*u*m,this._w=h*f*m+p*u*x;break;case"ZXY":this._x=p*f*m-h*u*x,this._y=h*u*m+p*f*x,this._z=h*f*x+p*u*m,this._w=h*f*m-p*u*x;break;case"ZYX":this._x=p*f*m-h*u*x,this._y=h*u*m+p*f*x,this._z=h*f*x-p*u*m,this._w=h*f*m+p*u*x;break;case"YZX":this._x=p*f*m+h*u*x,this._y=h*u*m+p*f*x,this._z=h*f*x-p*u*m,this._w=h*f*m-p*u*x;break;case"XZY":this._x=p*f*m-h*u*x,this._y=h*u*m-p*f*x,this._z=h*f*x+p*u*m,this._w=h*f*m+p*u*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],f=t[6],m=t[10],p=n+o+m;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(f-l)*u,this._y=(r-h)*u,this._z=(a-s)*u}else if(n>o&&n>m){let u=2*Math.sqrt(1+n-o-m);this._w=(f-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+h)/u}else if(o>m){let u=2*Math.sqrt(1+o-n-m);this._w=(r-h)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+f)/u}else{let u=2*Math.sqrt(1+m-n-o);this._w=(a-s)/u,this._x=(r+h)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(oi(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,f=t._w;return this._x=n*f+a*o+s*h-r*l,this._y=s*f+a*l+r*o-n*h,this._z=r*f+a*h+n*l-s*o,this._w=a*f-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let h=Math.sqrt(l),f=Math.atan2(h,o),m=Math.sin((1-t)*f)/h,p=Math.sin(t*f)/h;return this._w=a*m+this._w*p,this._x=n*m+this._x*p,this._y=s*m+this._y*p,this._z=r*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*s-o*n),f=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*h+a*m-o*f,this.y=n+l*f+o*h-r*m,this.z=s+l*m+r*f-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(oi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ql=new B,Gu=new ks,lr=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wi):Wi.fromBufferAttribute(r,a),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ja.copy(n.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),ja.subVectors(this.max,ma),Sr.subVectors(e.a,ma),Er.subVectors(e.b,ma),Tr.subVectors(e.c,ma),As.subVectors(Er,Sr),Rs.subVectors(Tr,Er),js.subVectors(Sr,Tr);let t=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-js.z,js.y,As.z,0,-As.x,Rs.z,0,-Rs.x,js.z,0,-js.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-js.y,js.x,0];return!Yl(t,Sr,Er,Tr,ja)||(t=[1,0,0,0,1,0,0,0,1],!Yl(t,Sr,Er,Tr,ja))?!1:(Qa.crossVectors(As,Rs),t=[Qa.x,Qa.y,Qa.z],Yl(t,Sr,Er,Tr,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(os),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},os=[new B,new B,new B,new B,new B,new B,new B,new B],Wi=new B,Ja=new lr,Sr=new B,Er=new B,Tr=new B,As=new B,Rs=new B,js=new B,ma=new B,ja=new B,Qa=new B,Qs=new B;function Yl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qs.fromArray(i,r);let o=s.x*Math.abs(Qs.x)+s.y*Math.abs(Qs.y)+s.z*Math.abs(Qs.z),l=e.dot(Qs),h=t.dot(Qs),f=n.dot(Qs);if(Math.max(-Math.max(l,h,f),Math.min(l,h,f))>o)return!1}return!0}var um=new lr,ga=new B,$l=new B,Yr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):um.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ga,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add($l)),this.expandByPoint(ga.copy(e.center).sub($l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ls=new B,Kl=new B,eo=new B,Cs=new B,Zl=new B,to=new B,Jl=new B,Aa=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ls)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ls.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ls.copy(this.origin).addScaledVector(this.direction,t),ls.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Kl.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),Cs.copy(this.origin).sub(Kl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(eo),o=Cs.dot(this.direction),l=-Cs.dot(eo),h=Cs.lengthSq(),f=Math.abs(1-a*a),m,p,u,x;if(f>0)if(m=a*l-o,p=a*o-l,x=r*f,m>=0)if(p>=-x)if(p<=x){let b=1/f;m*=b,p*=b,u=m*(m+a*p+2*o)+p*(a*m+p+2*l)+h}else p=r,m=Math.max(0,-(a*p+o)),u=-m*m+p*(p+2*l)+h;else p=-r,m=Math.max(0,-(a*p+o)),u=-m*m+p*(p+2*l)+h;else p<=-x?(m=Math.max(0,-(-a*r+o)),p=m>0?-r:Math.min(Math.max(-r,-l),r),u=-m*m+p*(p+2*l)+h):p<=x?(m=0,p=Math.min(Math.max(-r,-l),r),u=p*(p+2*l)+h):(m=Math.max(0,-(a*r+o)),p=m>0?r:Math.min(Math.max(-r,-l),r),u=-m*m+p*(p+2*l)+h);else p=a>0?-r:r,m=Math.max(0,-(a*p+o)),u=-m*m+p*(p+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Kl).addScaledVector(eo,p),u}intersectSphere(e,t){ls.subVectors(e.center,this.origin);let n=ls.dot(this.direction),s=ls.dot(ls)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,h=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),f>=0?(r=(e.min.y-p.y)*f,a=(e.max.y-p.y)*f):(r=(e.max.y-p.y)*f,a=(e.min.y-p.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-p.z)*m,l=(e.max.z-p.z)*m):(o=(e.max.z-p.z)*m,l=(e.min.z-p.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ls)!==null}intersectTriangle(e,t,n,s,r){Zl.subVectors(t,e),to.subVectors(n,e),Jl.crossVectors(Zl,to);let a=this.direction.dot(Jl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cs.subVectors(this.origin,e);let l=o*this.direction.dot(to.crossVectors(Cs,to));if(l<0)return null;let h=o*this.direction.dot(Zl.cross(Cs));if(h<0||l+h>a)return null;let f=-o*Cs.dot(Jl);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gn=class i{constructor(e,t,n,s,r,a,o,l,h,f,m,p,u,x,b,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,h,f,m,p,u,x,b,y)}set(e,t,n,s,r,a,o,l,h,f,m,p,u,x,b,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=h,g[6]=f,g[10]=m,g[14]=p,g[3]=u,g[7]=x,g[11]=b,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/wr.setFromMatrixColumn(e,0).length(),r=1/wr.setFromMatrixColumn(e,1).length(),a=1/wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),f=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let p=a*f,u=a*m,x=o*f,b=o*m;t[0]=l*f,t[4]=-l*m,t[8]=h,t[1]=u+x*h,t[5]=p-b*h,t[9]=-o*l,t[2]=b-p*h,t[6]=x+u*h,t[10]=a*l}else if(e.order==="YXZ"){let p=l*f,u=l*m,x=h*f,b=h*m;t[0]=p+b*o,t[4]=x*o-u,t[8]=a*h,t[1]=a*m,t[5]=a*f,t[9]=-o,t[2]=u*o-x,t[6]=b+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*f,u=l*m,x=h*f,b=h*m;t[0]=p-b*o,t[4]=-a*m,t[8]=x+u*o,t[1]=u+x*o,t[5]=a*f,t[9]=b-p*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*f,u=a*m,x=o*f,b=o*m;t[0]=l*f,t[4]=x*h-u,t[8]=p*h+b,t[1]=l*m,t[5]=b*h+p,t[9]=u*h-x,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,u=a*h,x=o*l,b=o*h;t[0]=l*f,t[4]=b-p*m,t[8]=x*m+u,t[1]=m,t[5]=a*f,t[9]=-o*f,t[2]=-h*f,t[6]=u*m+x,t[10]=p-b*m}else if(e.order==="XZY"){let p=a*l,u=a*h,x=o*l,b=o*h;t[0]=l*f,t[4]=-m,t[8]=h*f,t[1]=p*m+b,t[5]=a*f,t[9]=u*m-x,t[2]=x*m-u,t[6]=o*f,t[10]=b*m+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,fm)}lookAt(e,t,n){let s=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ps.crossVectors(n,Ti),Ps.lengthSq()===0&&(Math.abs(n.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ps.crossVectors(n,Ti)),Ps.normalize(),no.crossVectors(Ti,Ps),s[0]=Ps.x,s[4]=no.x,s[8]=Ti.x,s[1]=Ps.y,s[5]=no.y,s[9]=Ti.y,s[2]=Ps.z,s[6]=no.z,s[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],f=n[1],m=n[5],p=n[9],u=n[13],x=n[2],b=n[6],y=n[10],g=n[14],S=n[3],v=n[7],A=n[11],F=n[15],D=s[0],N=s[4],Y=s[8],T=s[12],R=s[1],$=s[5],ce=s[9],Se=s[13],k=s[2],q=s[6],z=s[10],W=s[14],K=s[3],se=s[7],le=s[11],ue=s[15];return r[0]=a*D+o*R+l*k+h*K,r[4]=a*N+o*$+l*q+h*se,r[8]=a*Y+o*ce+l*z+h*le,r[12]=a*T+o*Se+l*W+h*ue,r[1]=f*D+m*R+p*k+u*K,r[5]=f*N+m*$+p*q+u*se,r[9]=f*Y+m*ce+p*z+u*le,r[13]=f*T+m*Se+p*W+u*ue,r[2]=x*D+b*R+y*k+g*K,r[6]=x*N+b*$+y*q+g*se,r[10]=x*Y+b*ce+y*z+g*le,r[14]=x*T+b*Se+y*W+g*ue,r[3]=S*D+v*R+A*k+F*K,r[7]=S*N+v*$+A*q+F*se,r[11]=S*Y+v*ce+A*z+F*le,r[15]=S*T+v*Se+A*W+F*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],f=e[2],m=e[6],p=e[10],u=e[14],x=e[3],b=e[7],y=e[11],g=e[15];return x*(+r*l*m-s*h*m-r*o*p+n*h*p+s*o*u-n*l*u)+b*(+t*l*u-t*h*p+r*a*p-s*a*u+s*h*f-r*l*f)+y*(+t*h*m-t*o*u-r*a*m+n*a*u+r*o*f-n*h*f)+g*(-s*o*f-t*l*m+t*o*p+s*a*m-n*a*p+n*l*f)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],f=e[8],m=e[9],p=e[10],u=e[11],x=e[12],b=e[13],y=e[14],g=e[15],S=m*y*h-b*p*h+b*l*u-o*y*u-m*l*g+o*p*g,v=x*p*h-f*y*h-x*l*u+a*y*u+f*l*g-a*p*g,A=f*b*h-x*m*h+x*o*u-a*b*u-f*o*g+a*m*g,F=x*m*l-f*b*l-x*o*p+a*b*p+f*o*y-a*m*y,D=t*S+n*v+s*A+r*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/D;return e[0]=S*N,e[1]=(b*p*r-m*y*r-b*s*u+n*y*u+m*s*g-n*p*g)*N,e[2]=(o*y*r-b*l*r+b*s*h-n*y*h-o*s*g+n*l*g)*N,e[3]=(m*l*r-o*p*r-m*s*h+n*p*h+o*s*u-n*l*u)*N,e[4]=v*N,e[5]=(f*y*r-x*p*r+x*s*u-t*y*u-f*s*g+t*p*g)*N,e[6]=(x*l*r-a*y*r-x*s*h+t*y*h+a*s*g-t*l*g)*N,e[7]=(a*p*r-f*l*r+f*s*h-t*p*h-a*s*u+t*l*u)*N,e[8]=A*N,e[9]=(x*m*r-f*b*r-x*n*u+t*b*u+f*n*g-t*m*g)*N,e[10]=(a*b*r-x*o*r+x*n*h-t*b*h-a*n*g+t*o*g)*N,e[11]=(f*o*r-a*m*r-f*n*h+t*m*h+a*n*u-t*o*u)*N,e[12]=F*N,e[13]=(f*b*s-x*m*s+x*n*p-t*b*p-f*n*y+t*m*y)*N,e[14]=(x*o*s-a*b*s-x*n*l+t*b*l+a*n*y-t*o*y)*N,e[15]=(a*m*s-f*o*s+f*n*l-t*m*l-a*n*p+t*o*p)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,h=r*a,f=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,f*o+n,f*l-s*a,0,h*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,f=a+a,m=o+o,p=r*h,u=r*f,x=r*m,b=a*f,y=a*m,g=o*m,S=l*h,v=l*f,A=l*m,F=n.x,D=n.y,N=n.z;return s[0]=(1-(b+g))*F,s[1]=(u+A)*F,s[2]=(x-v)*F,s[3]=0,s[4]=(u-A)*D,s[5]=(1-(p+g))*D,s[6]=(y+S)*D,s[7]=0,s[8]=(x+v)*N,s[9]=(y-S)*N,s[10]=(1-(p+b))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=wr.set(s[0],s[1],s[2]).length(),a=wr.set(s[4],s[5],s[6]).length(),o=wr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xi.copy(this);let h=1/r,f=1/a,m=1/o;return Xi.elements[0]*=h,Xi.elements[1]*=h,Xi.elements[2]*=h,Xi.elements[4]*=f,Xi.elements[5]*=f,Xi.elements[6]*=f,Xi.elements[8]*=m,Xi.elements[9]*=m,Xi.elements[10]*=m,t.setFromRotationMatrix(Xi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=fs){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),m=(t+e)/(t-e),p=(n+s)/(n-s),u,x;if(o===fs)u=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Po)u=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=fs){let l=this.elements,h=1/(t-e),f=1/(n-s),m=1/(a-r),p=(t+e)*h,u=(n+s)*f,x,b;if(o===fs)x=(a+r)*m,b=-2*m;else if(o===Po)x=r*m,b=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=b,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wr=new B,Xi=new Gn,dm=new B(0,0,0),fm=new B(1,1,1),Ps=new B,no=new B,Ti=new B,Wu=new Gn,Xu=new ks,No=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],f=s[9],m=s[2],p=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(oi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-oi(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(oi(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,u),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oi(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(oi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-oi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};No.DEFAULT_ORDER="XYZ";var Ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pm=0,qu=new B,Ar=new ks,cs=new Gn,io=new B,ya=new B,mm=new B,gm=new ks,Yu=new B(1,0,0),$u=new B(0,1,0),Ku=new B(0,0,1),ym={type:"added"},xm={type:"removed"},di=class i extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new No,n=new ks,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gn},normalMatrix:{value:new Dt}}),this.matrix=new Gn,this.matrixWorld=new Gn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(Yu,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(Ku,e)}translateOnAxis(e,t){return qu.copy(e).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yu,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(Ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?io.copy(e):io.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cs.lookAt(ya,io,this.up):cs.lookAt(io,ya,this.up),this.quaternion.setFromRotationMatrix(cs),s&&(cs.extractRotation(s.matrixWorld),Ar.setFromRotationMatrix(cs),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ym)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cs.multiply(e.parent.matrixWorld)),e.applyMatrix4(cs),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,f=l.length;h<f;h++){let m=l[h];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),f=a(e.images),m=a(e.shapes),p=a(e.skeletons),u=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let h in o){let f=o[h];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};di.DEFAULT_UP=new B(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qi=new B,hs=new B,jl=new B,us=new B,Rr=new B,Cr=new B,Zu=new B,Ql=new B,ec=new B,tc=new B,so=!1,Fr=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qi.subVectors(e,t),s.cross(qi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qi.subVectors(s,t),hs.subVectors(n,t),jl.subVectors(e,t);let a=qi.dot(qi),o=qi.dot(hs),l=qi.dot(jl),h=hs.dot(hs),f=hs.dot(jl),m=a*h-o*o;if(m===0)return r.set(0,0,0),null;let p=1/m,u=(h*l-o*f)*p,x=(a*f-o*l)*p;return r.set(1-u-x,x,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,us)===null?!1:us.x>=0&&us.y>=0&&us.x+us.y<=1}static getUV(e,t,n,s,r,a,o,l){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,us)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,us.x),l.addScaledVector(a,us.y),l.addScaledVector(o,us.z),l)}static isFrontFacing(e,t,n,s){return qi.subVectors(n,t),hs.subVectors(e,t),qi.cross(hs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),qi.cross(hs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Rr.subVectors(s,n),Cr.subVectors(r,n),Ql.subVectors(e,n);let l=Rr.dot(Ql),h=Cr.dot(Ql);if(l<=0&&h<=0)return t.copy(n);ec.subVectors(e,s);let f=Rr.dot(ec),m=Cr.dot(ec);if(f>=0&&m<=f)return t.copy(s);let p=l*m-f*h;if(p<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Rr,a);tc.subVectors(e,r);let u=Rr.dot(tc),x=Cr.dot(tc);if(x>=0&&u<=x)return t.copy(r);let b=u*h-l*x;if(b<=0&&h>=0&&x<=0)return o=h/(h-x),t.copy(n).addScaledVector(Cr,o);let y=f*x-u*m;if(y<=0&&m-f>=0&&u-x>=0)return Zu.subVectors(r,s),o=(m-f)/(m-f+(u-x)),t.copy(s).addScaledVector(Zu,o);let g=1/(y+b+p);return a=b*g,o=p*g,t.copy(n).addScaledVector(Rr,a).addScaledVector(Cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},ro={h:0,s:0,l:0};function nc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var bt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,un.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=un.workingColorSpace){return this.r=e,this.g=t,this.b=n,un.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=un.workingColorSpace){if(e=am(e,1),t=oi(t,0,1),n=oi(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=nc(a,r,e+1/3),this.g=nc(a,r,e),this.b=nc(a,r,e-1/3)}return un.toWorkingColorSpace(this,s),this}setStyle(e,t=ti){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){let n=Zd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}copyLinearToSRGB(e){return this.r=Wl(e.r),this.g=Wl(e.g),this.b=Wl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return un.fromWorkingColorSpace(ai.copy(this),e),Math.round(oi(ai.r*255,0,255))*65536+Math.round(oi(ai.g*255,0,255))*256+Math.round(oi(ai.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=un.workingColorSpace){un.fromWorkingColorSpace(ai.copy(this),t);let n=ai.r,s=ai.g,r=ai.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,h,f=(o+a)/2;if(o===a)l=0,h=0;else{let m=a-o;switch(h=f<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=h,e.l=f,e}getRGB(e,t=un.workingColorSpace){return un.fromWorkingColorSpace(ai.copy(this),t),e.r=ai.r,e.g=ai.g,e.b=ai.b,e}getStyle(e=ti){un.fromWorkingColorSpace(ai.copy(this),e);let t=ai.r,n=ai.g,s=ai.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+t,Is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Is),e.getHSL(ro);let n=Vl(Is.h,ro.h,t),s=Vl(Is.s,ro.s,t),r=Vl(Is.l,ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ai=new bt;bt.NAMES=Zd;var _m=0,Hs=class extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=zr,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=yc,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(n.blending=this.blending),this.side!==Fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gc&&(n.blendSrc=this.blendSrc),this.blendDst!==yc&&(n.blendDst=this.blendDst),this.blendEquation!==ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Un=class extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vn=new B,ao=new Ve,yi=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ds,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix3(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array),s=mi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array),s=mi(s,this.array),r=mi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),e}};var Oo=class extends yi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fo=class extends yi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xn=class extends yi{constructor(e,t,n){super(new Float32Array(e),t,n)}};var vm=0,Oi=new Gn,ic=new di,Pr=new B,wi=new lr,xa=new lr,jn=new B,fi=class i extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kd(e)?Fo:Oo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,n){return Oi.makeTranslation(e,t,n),this.applyMatrix4(Oi),this}scale(e,t,n){return Oi.makeScale(e,t,n),this.applyMatrix4(Oi),this}lookAt(e){return ic.lookAt(e),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wi.setFromBufferAttribute(r),this.morphTargetsRelative?(jn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(jn),jn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(jn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(jn.addVectors(wi.min,xa.min),wi.expandByPoint(jn),jn.addVectors(wi.max,xa.max),wi.expandByPoint(jn)):(wi.expandByPoint(xa.min),wi.expandByPoint(xa.max))}wi.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let h=0,f=o.count;h<f;h++)jn.fromBufferAttribute(o,h),l&&(Pr.fromBufferAttribute(e,h),jn.add(Pr)),s=Math.max(s,n.distanceToSquared(jn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,h=[],f=[];for(let R=0;R<o;R++)h[R]=new B,f[R]=new B;let m=new B,p=new B,u=new B,x=new Ve,b=new Ve,y=new Ve,g=new B,S=new B;function v(R,$,ce){m.fromArray(s,R*3),p.fromArray(s,$*3),u.fromArray(s,ce*3),x.fromArray(a,R*2),b.fromArray(a,$*2),y.fromArray(a,ce*2),p.sub(m),u.sub(m),b.sub(x),y.sub(x);let Se=1/(b.x*y.y-y.x*b.y);isFinite(Se)&&(g.copy(p).multiplyScalar(y.y).addScaledVector(u,-b.y).multiplyScalar(Se),S.copy(u).multiplyScalar(b.x).addScaledVector(p,-y.x).multiplyScalar(Se),h[R].add(g),h[$].add(g),h[ce].add(g),f[R].add(S),f[$].add(S),f[ce].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let R=0,$=A.length;R<$;++R){let ce=A[R],Se=ce.start,k=ce.count;for(let q=Se,z=Se+k;q<z;q+=3)v(n[q+0],n[q+1],n[q+2])}let F=new B,D=new B,N=new B,Y=new B;function T(R){N.fromArray(r,R*3),Y.copy(N);let $=h[R];F.copy($),F.sub(N.multiplyScalar(N.dot($))).normalize(),D.crossVectors(Y,$);let Se=D.dot(f[R])<0?-1:1;l[R*4]=F.x,l[R*4+1]=F.y,l[R*4+2]=F.z,l[R*4+3]=Se}for(let R=0,$=A.length;R<$;++R){let ce=A[R],Se=ce.start,k=ce.count;for(let q=Se,z=Se+k;q<z;q+=3)T(n[q+0]),T(n[q+1]),T(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,h=new B,f=new B,m=new B;if(e)for(let p=0,u=e.count;p<u;p+=3){let x=e.getX(p+0),b=e.getX(p+1),y=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,y),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),o.add(f),l.add(f),h.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let p=0,u=t.count;p<u;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),n.setXYZ(p+0,f.x,f.y,f.z),n.setXYZ(p+1,f.x,f.y,f.z),n.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jn.fromBufferAttribute(e,t),jn.normalize(),e.setXYZ(t,jn.x,jn.y,jn.z)}toNonIndexed(){function e(o,l){let h=o.array,f=o.itemSize,m=o.normalized,p=new h.constructor(l.length*f),u=0,x=0;for(let b=0,y=l.length;b<y;b++){o.isInterleavedBufferAttribute?u=l[b]*o.data.stride+o.offset:u=l[b]*f;for(let g=0;g<f;g++)p[x++]=h[u++]}return new yi(p,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=e(l,n);t.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let f=0,m=h.length;f<m;f++){let p=h[f],u=e(p,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let h=n[l];e.data.attributes[l]=h.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],f=[];for(let m=0,p=h.length;m<p;m++){let u=h[m];f.push(u.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let h in s){let f=s[h];this.setAttribute(h,f.clone(t))}let r=e.morphAttributes;for(let h in r){let f=[],m=r[h];for(let p=0,u=m.length;p<u;p++)f.push(m[p].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,f=a.length;h<f;h++){let m=a[h];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ju=new Gn,er=new Aa,oo=new Yr,ju=new B,Ir=new B,Lr=new B,Dr=new B,sc=new B,lo=new B,co=new Ve,ho=new Ve,uo=new Ve,Qu=new B,ed=new B,td=new B,fo=new B,po=new B,Ye=class extends di{constructor(e=new fi,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){lo.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let f=o[l],m=r[l];f!==0&&(sc.fromBufferAttribute(m,e),a?lo.addScaledVector(sc,f):lo.addScaledVector(sc.sub(t),f))}t.add(lo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),er.copy(e.ray).recast(e.near),!(oo.containsPoint(er.origin)===!1&&(er.intersectSphere(oo,ju)===null||er.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&(Ju.copy(r).invert(),er.copy(e.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,p=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=p.length;x<b;x++){let y=p[x],g=a[y.materialIndex],S=Math.max(y.start,u.start),v=Math.min(o.count,Math.min(y.start+y.count,u.start+u.count));for(let A=S,F=v;A<F;A+=3){let D=o.getX(A),N=o.getX(A+1),Y=o.getX(A+2);s=mo(this,g,e,n,h,f,m,D,N,Y),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,u.start),b=Math.min(o.count,u.start+u.count);for(let y=x,g=b;y<g;y+=3){let S=o.getX(y),v=o.getX(y+1),A=o.getX(y+2);s=mo(this,a,e,n,h,f,m,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,b=p.length;x<b;x++){let y=p[x],g=a[y.materialIndex],S=Math.max(y.start,u.start),v=Math.min(l.count,Math.min(y.start+y.count,u.start+u.count));for(let A=S,F=v;A<F;A+=3){let D=A,N=A+1,Y=A+2;s=mo(this,g,e,n,h,f,m,D,N,Y),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,u.start),b=Math.min(l.count,u.start+u.count);for(let y=x,g=b;y<g;y+=3){let S=y,v=y+1,A=y+2;s=mo(this,a,e,n,h,f,m,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function Mm(i,e,t,n,s,r,a,o){let l;if(e.side===gi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Fs,o),l===null)return null;po.copy(o),po.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(po);return h<t.near||h>t.far?null:{distance:h,point:po.clone(),object:i}}function mo(i,e,t,n,s,r,a,o,l,h){i.getVertexPosition(o,Ir),i.getVertexPosition(l,Lr),i.getVertexPosition(h,Dr);let f=Mm(i,e,t,n,Ir,Lr,Dr,fo);if(f){s&&(co.fromBufferAttribute(s,o),ho.fromBufferAttribute(s,l),uo.fromBufferAttribute(s,h),f.uv=Fr.getInterpolation(fo,Ir,Lr,Dr,co,ho,uo,new Ve)),r&&(co.fromBufferAttribute(r,o),ho.fromBufferAttribute(r,l),uo.fromBufferAttribute(r,h),f.uv1=Fr.getInterpolation(fo,Ir,Lr,Dr,co,ho,uo,new Ve),f.uv2=f.uv1),a&&(Qu.fromBufferAttribute(a,o),ed.fromBufferAttribute(a,l),td.fromBufferAttribute(a,h),f.normal=Fr.getInterpolation(fo,Ir,Lr,Dr,Qu,ed,td,new B),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let m={a:o,b:l,c:h,normal:new B,materialIndex:0};Fr.getNormal(Ir,Lr,Dr,m.normal),f.face=m}return f}var Xn=class i extends fi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],f=[],m=[],p=0,u=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xn(h,3)),this.setAttribute("normal",new xn(f,3)),this.setAttribute("uv",new xn(m,2));function x(b,y,g,S,v,A,F,D,N,Y,T){let R=A/N,$=F/Y,ce=A/2,Se=F/2,k=D/2,q=N+1,z=Y+1,W=0,K=0,se=new B;for(let le=0;le<z;le++){let ue=le*$-Se;for(let Re=0;Re<q;Re++){let j=Re*R-ce;se[b]=j*S,se[y]=ue*v,se[g]=k,h.push(se.x,se.y,se.z),se[b]=0,se[y]=0,se[g]=D>0?1:-1,f.push(se.x,se.y,se.z),m.push(Re/N),m.push(1-le/Y),W+=1}}for(let le=0;le<Y;le++)for(let ue=0;ue<N;ue++){let Re=p+ue+q*le,j=p+ue+q*(le+1),fe=p+(ue+1)+q*(le+1),we=p+(ue+1)+q*le;l.push(Re,j,we),l.push(j,fe,we),K+=6}o.addGroup(u,K,T),u+=K,p+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $r(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ci(i){let e={};for(let t=0;t<i.length;t++){let n=$r(i[t]);for(let s in n)e[s]=n[s]}return e}function bm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jd(i){return i.getRenderTarget()===null?i.outputColorSpace:un.workingColorSpace}var Sm={clone:$r,merge:ci},Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gs=class extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=bm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Bo=class extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gn,this.projectionMatrix=new Gn,this.projectionMatrixInverse=new Gn,this.coordinateSystem=fs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=class extends Bo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ur=-90,Nr=1,wc=class extends di{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ui(Ur,Nr,e,t);s.layers=this.layers,this.add(s);let r=new ui(Ur,Nr,e,t);r.layers=this.layers,this.add(r);let a=new ui(Ur,Nr,e,t);a.layers=this.layers,this.add(a);let o=new ui(Ur,Nr,e,t);o.layers=this.layers,this.add(o);let l=new ui(Ur,Nr,e,t);l.layers=this.layers,this.add(l);let h=new ui(Ur,Nr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let h of t)this.remove(h);if(e===fs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,f]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,f),e.setRenderTarget(m,p,u),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ko=class extends ki{constructor(e,t,n,s,r,a,o,l,h,f){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,n,s,r,a,o,l,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ac=class extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(_a("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===or?ti:Bi),this.texture=new ko(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new gs({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gi,blending:Us});r.uniforms.tEquirect.value=t;let a=new Ye(s,r),o=t.minFilter;return t.minFilter===Ta&&(t.minFilter=Fi),new wc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},rc=new B,wm=new B,Am=new Dt,Yi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=rc.subVectors(n,t).cross(wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(rc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Am.getNormalMatrix(e),s=this.coplanarPoint(rc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},tr=new Yr,go=new B,Ca=class{constructor(e=new Yi,t=new Yi,n=new Yi,s=new Yi,r=new Yi,a=new Yi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fs){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],f=s[5],m=s[6],p=s[7],u=s[8],x=s[9],b=s[10],y=s[11],g=s[12],S=s[13],v=s[14],A=s[15];if(n[0].setComponents(l-r,p-h,y-u,A-g).normalize(),n[1].setComponents(l+r,p+h,y+u,A+g).normalize(),n[2].setComponents(l+a,p+f,y+x,A+S).normalize(),n[3].setComponents(l-a,p-f,y-x,A-S).normalize(),n[4].setComponents(l-o,p-m,y-b,A-v).normalize(),t===fs)n[5].setComponents(l+o,p+m,y+b,A+v).normalize();else if(t===Po)n[5].setComponents(o,m,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rm(i,e){let t=e.isWebGL2,n=new WeakMap;function s(h,f){let m=h.array,p=h.usage,u=m.byteLength,x=i.createBuffer();i.bindBuffer(f,x),i.bufferData(f,m,p),h.onUploadCallback();let b;if(m instanceof Float32Array)b=i.FLOAT;else if(m instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)b=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=i.SHORT;else if(m instanceof Uint32Array)b=i.UNSIGNED_INT;else if(m instanceof Int32Array)b=i.INT;else if(m instanceof Int8Array)b=i.BYTE;else if(m instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:u}}function r(h,f,m){let p=f.array,u=f._updateRange,x=f.updateRanges;if(i.bindBuffer(m,h),u.count===-1&&x.length===0&&i.bufferSubData(m,0,p),x.length!==0){for(let b=0,y=x.length;b<y;b++){let g=x[b];t?i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count):i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p.subarray(g.start,g.start+g.count))}f.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(m,u.offset*p.BYTES_PER_ELEMENT,p,u.offset,u.count):i.bufferSubData(m,u.offset*p.BYTES_PER_ELEMENT,p.subarray(u.offset,u.offset+u.count)),u.count=-1),f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let f=n.get(h);f&&(i.deleteBuffer(f.buffer),n.delete(h))}function l(h,f){if(h.isGLBufferAttribute){let p=n.get(h);(!p||p.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let m=n.get(h);if(m===void 0)n.set(h,s(h,f));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,f),m.version=h.version}}return{get:a,remove:o,update:l}}var ts=class i extends fi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),h=o+1,f=l+1,m=e/o,p=t/l,u=[],x=[],b=[],y=[];for(let g=0;g<f;g++){let S=g*p-a;for(let v=0;v<h;v++){let A=v*m-r;x.push(A,-S,0),b.push(0,0,1),y.push(v/o),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){let v=S+h*g,A=S+h*(g+1),F=S+1+h*(g+1),D=S+1+h*g;u.push(v,A,D),u.push(A,F,D)}this.setIndex(u),this.setAttribute("position",new xn(x,3)),this.setAttribute("normal",new xn(b,3)),this.setAttribute("uv",new xn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pm=`#ifdef USE_ALPHAHASH
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
#endif`,Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
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
#endif`,Om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fm=`#ifdef USE_BATCHING
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
#endif`,Bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
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
#endif`,Gm=`#ifdef USE_BUMPMAP
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jm=`#define PI 3.141592653589793
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
} // validated`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eg=`vec3 transformedNormal = objectNormal;
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
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`
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
}`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mg=`uniform bool receiveShadow;
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
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
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
#endif`,Rg=`struct PhysicalMaterial {
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
}`,Cg=`
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ng=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kg=`#if defined( USE_POINTS_UV )
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
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
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
#endif`,Wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Xg=`#ifdef USE_MORPHTARGETS
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
#endif`,qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
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
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,O0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
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
}`,z0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,K0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,J0=`#define PHONG
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
}`,j0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ty=`#define TOON
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
}`,ny=`uniform float size;
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
}`,iy=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,ry=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
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
}`,oy=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:Cm,alphahash_pars_fragment:Pm,alphamap_fragment:Im,alphamap_pars_fragment:Lm,alphatest_fragment:Dm,alphatest_pars_fragment:Um,aomap_fragment:Nm,aomap_pars_fragment:Om,batching_pars_vertex:Fm,batching_vertex:Bm,begin_vertex:km,beginnormal_vertex:Hm,bsdfs:zm,iridescence_fragment:Vm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:Xm,clipping_planes_pars_vertex:qm,clipping_planes_vertex:Ym,color_fragment:$m,color_pars_fragment:Km,color_pars_vertex:Zm,color_vertex:Jm,common:jm,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:sg,colorspace_fragment:rg,colorspace_pars_fragment:ag,envmap_fragment:og,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:hg,envmap_physical_pars_fragment:bg,envmap_vertex:ug,fog_vertex:dg,fog_pars_vertex:fg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_fragment:yg,lightmap_pars_fragment:xg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:vg,lights_pars_begin:Mg,lights_toon_fragment:Sg,lights_toon_pars_fragment:Eg,lights_phong_fragment:Tg,lights_phong_pars_fragment:wg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Rg,lights_fragment_begin:Cg,lights_fragment_maps:Pg,lights_fragment_end:Ig,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Ng,map_fragment:Og,map_pars_fragment:Fg,map_particle_fragment:Bg,map_particle_pars_fragment:kg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:zg,morphcolor_vertex:Vg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Wg,morphtarget_vertex:Xg,normal_fragment_begin:qg,normal_fragment_maps:Yg,normal_pars_fragment:$g,normal_pars_vertex:Kg,normal_vertex:Zg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:Qg,clearcoat_pars_fragment:e0,iridescence_pars_fragment:t0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:a0,dithering_pars_fragment:o0,roughnessmap_fragment:l0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:u0,shadowmap_vertex:d0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:y0,specularmap_fragment:x0,specularmap_pars_fragment:_0,tonemapping_fragment:v0,tonemapping_pars_fragment:M0,transmission_fragment:b0,transmission_pars_fragment:S0,uv_pars_fragment:E0,uv_pars_vertex:T0,uv_vertex:w0,worldpos_vertex:A0,background_vert:R0,background_frag:C0,backgroundCube_vert:P0,backgroundCube_frag:I0,cube_vert:L0,cube_frag:D0,depth_vert:U0,depth_frag:N0,distanceRGBA_vert:O0,distanceRGBA_frag:F0,equirect_vert:B0,equirect_frag:k0,linedashed_vert:H0,linedashed_frag:z0,meshbasic_vert:V0,meshbasic_frag:G0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:q0,meshmatcap_frag:Y0,meshnormal_vert:$0,meshnormal_frag:K0,meshphong_vert:Z0,meshphong_frag:J0,meshphysical_vert:j0,meshphysical_frag:Q0,meshtoon_vert:ey,meshtoon_frag:ty,points_vert:ny,points_frag:iy,shadow_vert:sy,shadow_frag:ry,sprite_vert:ay,sprite_frag:oy},De={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},es={basic:{uniforms:ci([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:ci([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new bt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:ci([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:ci([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:ci([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new bt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:ci([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:ci([De.points,De.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:ci([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:ci([De.common,De.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:ci([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:ci([De.sprite,De.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:ci([De.common,De.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:ci([De.lights,De.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};es.physical={uniforms:ci([es.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};var yo={r:0,b:0,g:0};function ly(i,e,t,n,s,r,a){let o=new bt(0),l=r===!0?0:1,h,f,m=null,p=0,u=null;function x(y,g){let S=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?b(o,l):v&&v.isColor&&(b(v,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===rl)?(f===void 0&&(f=new Ye(new Xn(1,1,1),new gs({name:"BackgroundCubeMaterial",uniforms:$r(es.backgroundCube.uniforms),vertexShader:es.backgroundCube.vertexShader,fragmentShader:es.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(F,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=un.getTransfer(v.colorSpace)!==En,(m!==v||p!==v.version||u!==i.toneMapping)&&(f.material.needsUpdate=!0,m=v,p=v.version,u=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Ye(new ts(2,2),new gs({name:"BackgroundMaterial",uniforms:$r(es.background.uniforms),vertexShader:es.background.vertexShader,fragmentShader:es.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=un.getTransfer(v.colorSpace)!==En,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(m!==v||p!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,m=v,p=v.version,u=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function b(y,g){y.getRGB(yo,Jd(i)),n.buffers.color.setClear(yo.r,yo.g,yo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(y,g=1){o.set(y),l=g,b(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,b(o,l)},render:x}}function cy(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=y(null),h=l,f=!1;function m(k,q,z,W,K){let se=!1;if(a){let le=b(W,z,q);h!==le&&(h=le,u(h.object)),se=g(k,W,z,K),se&&S(k,W,z,K)}else{let le=q.wireframe===!0;(h.geometry!==W.id||h.program!==z.id||h.wireframe!==le)&&(h.geometry=W.id,h.program=z.id,h.wireframe=le,se=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(se||f)&&(f=!1,Y(k,q,z,W),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(k){return n.isWebGL2?i.bindVertexArray(k):r.bindVertexArrayOES(k)}function x(k){return n.isWebGL2?i.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function b(k,q,z){let W=z.wireframe===!0,K=o[k.id];K===void 0&&(K={},o[k.id]=K);let se=K[q.id];se===void 0&&(se={},K[q.id]=se);let le=se[W];return le===void 0&&(le=y(p()),se[W]=le),le}function y(k){let q=[],z=[],W=[];for(let K=0;K<s;K++)q[K]=0,z[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:z,attributeDivisors:W,object:k,attributes:{},index:null}}function g(k,q,z,W){let K=h.attributes,se=q.attributes,le=0,ue=z.getAttributes();for(let Re in ue)if(ue[Re].location>=0){let fe=K[Re],we=se[Re];if(we===void 0&&(Re==="instanceMatrix"&&k.instanceMatrix&&(we=k.instanceMatrix),Re==="instanceColor"&&k.instanceColor&&(we=k.instanceColor)),fe===void 0||fe.attribute!==we||we&&fe.data!==we.data)return!0;le++}return h.attributesNum!==le||h.index!==W}function S(k,q,z,W){let K={},se=q.attributes,le=0,ue=z.getAttributes();for(let Re in ue)if(ue[Re].location>=0){let fe=se[Re];fe===void 0&&(Re==="instanceMatrix"&&k.instanceMatrix&&(fe=k.instanceMatrix),Re==="instanceColor"&&k.instanceColor&&(fe=k.instanceColor));let we={};we.attribute=fe,fe&&fe.data&&(we.data=fe.data),K[Re]=we,le++}h.attributes=K,h.attributesNum=le,h.index=W}function v(){let k=h.newAttributes;for(let q=0,z=k.length;q<z;q++)k[q]=0}function A(k){F(k,0)}function F(k,q){let z=h.newAttributes,W=h.enabledAttributes,K=h.attributeDivisors;z[k]=1,W[k]===0&&(i.enableVertexAttribArray(k),W[k]=1),K[k]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,q),K[k]=q)}function D(){let k=h.newAttributes,q=h.enabledAttributes;for(let z=0,W=q.length;z<W;z++)q[z]!==k[z]&&(i.disableVertexAttribArray(z),q[z]=0)}function N(k,q,z,W,K,se,le){le===!0?i.vertexAttribIPointer(k,q,z,K,se):i.vertexAttribPointer(k,q,z,W,K,se)}function Y(k,q,z,W){if(n.isWebGL2===!1&&(k.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let K=W.attributes,se=z.getAttributes(),le=q.defaultAttributeValues;for(let ue in se){let Re=se[ue];if(Re.location>=0){let j=K[ue];if(j===void 0&&(ue==="instanceMatrix"&&k.instanceMatrix&&(j=k.instanceMatrix),ue==="instanceColor"&&k.instanceColor&&(j=k.instanceColor)),j!==void 0){let fe=j.normalized,we=j.itemSize,ze=t.get(j);if(ze===void 0)continue;let Ke=ze.buffer,dt=ze.type,pt=ze.bytesPerElement,et=n.isWebGL2===!0&&(dt===i.INT||dt===i.UNSIGNED_INT||j.gpuType===kd);if(j.isInterleavedBufferAttribute){let re=j.data,Z=re.stride,_n=j.offset;if(re.isInstancedInterleavedBuffer){for(let Me=0;Me<Re.locationSize;Me++)F(Re.location+Me,re.meshPerAttribute);k.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Me=0;Me<Re.locationSize;Me++)A(Re.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Me=0;Me<Re.locationSize;Me++)N(Re.location+Me,we/Re.locationSize,dt,fe,Z*pt,(_n+we/Re.locationSize*Me)*pt,et)}else{if(j.isInstancedBufferAttribute){for(let re=0;re<Re.locationSize;re++)F(Re.location+re,j.meshPerAttribute);k.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let re=0;re<Re.locationSize;re++)A(Re.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let re=0;re<Re.locationSize;re++)N(Re.location+re,we/Re.locationSize,dt,fe,we*pt,we/Re.locationSize*re*pt,et)}}else if(le!==void 0){let fe=le[ue];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(Re.location,fe);break;case 3:i.vertexAttrib3fv(Re.location,fe);break;case 4:i.vertexAttrib4fv(Re.location,fe);break;default:i.vertexAttrib1fv(Re.location,fe)}}}}D()}function T(){ce();for(let k in o){let q=o[k];for(let z in q){let W=q[z];for(let K in W)x(W[K].object),delete W[K];delete q[z]}delete o[k]}}function R(k){if(o[k.id]===void 0)return;let q=o[k.id];for(let z in q){let W=q[z];for(let K in W)x(W[K].object),delete W[K];delete q[z]}delete o[k.id]}function $(k){for(let q in o){let z=o[q];if(z[k.id]===void 0)continue;let W=z[k.id];for(let K in W)x(W[K].object),delete W[K];delete z[k.id]}}function ce(){Se(),f=!0,h!==l&&(h=l,u(h.object))}function Se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:ce,resetDefaultState:Se,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:A,disableUnusedAttributes:D}}function hy(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}function o(f,m){i.drawArrays(r,f,m),t.update(m,r,1)}function l(f,m,p){if(p===0)return;let u,x;if(s)u=i,x="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[x](r,f,m,p),t.update(m,r,p)}function h(f,m,p){if(p===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let x=0;x<p;x++)this.render(f[x],m[x]);else{u.multiDrawArraysWEBGL(r,f,0,m,0,p);let x=0;for(let b=0;b<p;b++)x+=m[b];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function uy(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let h=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,A=a||e.has("OES_texture_float"),F=v&&A,D=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:f,maxTextures:m,maxVertexTextures:p,maxTextureSize:u,maxCubemapSize:x,maxAttributes:b,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:F,maxSamples:D}}function dy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Yi,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){let u=m.length!==0||p||n!==0||s;return s=p,n=m.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,p){t=f(m,p,0)},this.setState=function(m,p,u){let x=m.clippingPlanes,b=m.clipIntersection,y=m.clipShadows,g=i.get(m);if(!s||x===null||x.length===0||r&&!y)r?f(null):h();else{let S=r?0:n,v=S*4,A=g.clippingState||null;l.value=A,A=f(x,p,v,u);for(let F=0;F!==v;++F)A[F]=t[F];g.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,p,u,x){let b=m!==null?m.length:0,y=null;if(b!==0){if(y=l.value,x!==!0||y===null){let g=u+b*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(y===null||y.length<g)&&(y=new Float32Array(g));for(let v=0,A=u;v!==b;++v,A+=4)a.copy(m[v]).applyMatrix4(S,o),a.normal.toArray(y,A),y[A+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function fy(i){let e=new WeakMap;function t(a,o){return o===xc?a.mapping=Wr:o===_c&&(a.mapping=Xr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===xc||o===_c)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let h=new Ac(l.height/2);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ho=class extends Bo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Br=4,nd=[.125,.215,.35,.446,.526,.582],sr=20,ac=new Ho,id=new bt,oc=null,lc=0,cc=0,nr=(1+Math.sqrt(5))/2,Or=1/nr,sd=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,nr,Or),new B(0,nr,-Or),new B(Or,0,nr),new B(-Or,0,nr),new B(nr,Or,0),new B(-nr,Or,0)],zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,lc,cc),e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:wa,format:Ki,colorSpace:ps,depthBuffer:!1},s=rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=py(r)),this._blurMaterial=my(r,e,t)}return s}_compileMaterial(e){let t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,ac)}_sceneToCubeUV(e,t,n,s){let o=new ui(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,p=f.toneMapping;f.getClearColor(id),f.toneMapping=Ns,f.autoClear=!1;let u=new Un({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1}),x=new Ye(new Xn,u),b=!1,y=e.background;y?y.isColor&&(u.color.copy(y),e.background=null,b=!0):(u.color.copy(id),b=!0);for(let g=0;g<6;g++){let S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(h[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,h[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,h[g]));let v=this._cubeSize;xo(s,S*v,g>2?v:0,v,v),f.setRenderTarget(s),b&&f.render(x,o),f.render(e,o)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=m,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Wr||e.mapping===Xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;xo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ac)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sd[(s-1)%sd.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,m=new Ye(this._lodPlanes[s],h),p=h.uniforms,u=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*sr-1),b=r/x,y=isFinite(r)?1+Math.floor(f*b):sr;y>sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${sr}`);let g=[],S=0;for(let N=0;N<sr;++N){let Y=N/b,T=Math.exp(-Y*Y/2);g.push(T),N===0?S+=T:N<y&&(S+=2*T)}for(let N=0;N<g.length;N++)g[N]=g[N]/S;p.envMap.value=e.texture,p.samples.value=y,p.weights.value=g,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-n;let A=this._sizeLods[s],F=3*A*(s>v-Br?s-v+Br:0),D=4*(this._cubeSize-A);xo(t,F,D,3*A,2*A),l.setRenderTarget(t),l.render(m,ac)}};function py(i){let e=[],t=[],n=[],s=i,r=i-Br+1+nd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Br?l=nd[a-i+Br-1]:a===0&&(l=0),n.push(l);let h=1/(o-2),f=-h,m=1+h,p=[f,f,m,f,m,m,f,f,m,m,f,m],u=6,x=6,b=3,y=2,g=1,S=new Float32Array(b*x*u),v=new Float32Array(y*x*u),A=new Float32Array(g*x*u);for(let D=0;D<u;D++){let N=D%3*2/3-1,Y=D>2?0:-1,T=[N,Y,0,N+2/3,Y,0,N+2/3,Y+1,0,N,Y,0,N+2/3,Y+1,0,N,Y+1,0];S.set(T,b*x*D),v.set(p,y*x*D);let R=[D,D,D,D,D,D];A.set(R,g*x*D)}let F=new fi;F.setAttribute("position",new yi(S,b)),F.setAttribute("uv",new yi(v,y)),F.setAttribute("faceIndex",new yi(A,g)),e.push(F),s>Br&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rd(i,e,t){let n=new ms(i,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function my(i,e,t){let n=new Float32Array(sr),s=new B(0,1,0);return new gs({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function ad(){return new gs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function od(){return new gs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function gy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,h=l===xc||l===_c,f=l===Wr||l===Xr;if(h||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let m=e.get(o);return t===null&&(t=new zo(i)),m=h?t.fromEquirectangular(o,m):t.fromCubemap(o,m),e.set(o,m),m.texture}else{if(e.has(o))return e.get(o).texture;{let m=o.image;if(h&&m&&m.height>0||f&&m&&s(m)){t===null&&(t=new zo(i));let p=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,h=6;for(let f=0;f<h;f++)o[f]!==void 0&&l++;return l===h}function r(o){let l=o.target;l.removeEventListener("dispose",r);let h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function yy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xy(i,e,t,n){let s={},r=new WeakMap;function a(m){let p=m.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let b=p.morphAttributes[x];for(let y=0,g=b.length;y<g;y++)e.remove(b[y])}p.removeEventListener("dispose",a),delete s[p.id];let u=r.get(p);u&&(e.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(m,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(m){let p=m.attributes;for(let x in p)e.update(p[x],i.ARRAY_BUFFER);let u=m.morphAttributes;for(let x in u){let b=u[x];for(let y=0,g=b.length;y<g;y++)e.update(b[y],i.ARRAY_BUFFER)}}function h(m){let p=[],u=m.index,x=m.attributes.position,b=0;if(u!==null){let S=u.array;b=u.version;for(let v=0,A=S.length;v<A;v+=3){let F=S[v+0],D=S[v+1],N=S[v+2];p.push(F,D,D,N,N,F)}}else if(x!==void 0){let S=x.array;b=x.version;for(let v=0,A=S.length/3-1;v<A;v+=3){let F=v+0,D=v+1,N=v+2;p.push(F,D,D,N,N,F)}}else return;let y=new(Kd(p)?Fo:Oo)(p,1);y.version=b;let g=r.get(m);g&&e.remove(g),r.set(m,y)}function f(m){let p=r.get(m);if(p){let u=m.index;u!==null&&p.version<u.version&&h(m)}else h(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:f}}function _y(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}let o,l;function h(u){o=u.type,l=u.bytesPerElement}function f(u,x){i.drawElements(r,x,o,u*l),t.update(x,r,1)}function m(u,x,b){if(b===0)return;let y,g;if(s)y=i,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](r,x,o,u*l,b),t.update(x,r,b)}function p(u,x,b){if(b===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<b;g++)this.render(u[g]/l,x[g]);else{y.multiDrawElementsWEBGL(r,x,0,o,u,0,b);let g=0;for(let S=0;S<b;S++)g+=x[S];t.update(g,r,1)}}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=m,this.renderMultiDraw=p}function vy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function My(i,e){return i[0]-e[0]}function by(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Sy(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Qn,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,f,m){let p=h.morphTargetInfluences;if(e.isWebGL2===!0){let u=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=u!==void 0?u.length:0,b=r.get(f);if(b===void 0||b.count!==x){let k=function(){ce.dispose(),r.delete(f),f.removeEventListener("dispose",k)};b!==void 0&&b.texture.dispose();let S=f.morphAttributes.position!==void 0,v=f.morphAttributes.normal!==void 0,A=f.morphAttributes.color!==void 0,F=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],N=f.morphAttributes.color||[],Y=0;S===!0&&(Y=1),v===!0&&(Y=2),A===!0&&(Y=3);let T=f.attributes.position.count*Y,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let $=new Float32Array(T*R*4*x),ce=new Uo($,T,R,x);ce.type=Ds,ce.needsUpdate=!0;let Se=Y*4;for(let q=0;q<x;q++){let z=F[q],W=D[q],K=N[q],se=T*R*4*q;for(let le=0;le<z.count;le++){let ue=le*Se;S===!0&&(a.fromBufferAttribute(z,le),$[se+ue+0]=a.x,$[se+ue+1]=a.y,$[se+ue+2]=a.z,$[se+ue+3]=0),v===!0&&(a.fromBufferAttribute(W,le),$[se+ue+4]=a.x,$[se+ue+5]=a.y,$[se+ue+6]=a.z,$[se+ue+7]=0),A===!0&&(a.fromBufferAttribute(K,le),$[se+ue+8]=a.x,$[se+ue+9]=a.y,$[se+ue+10]=a.z,$[se+ue+11]=K.itemSize===4?a.w:1)}}b={count:x,texture:ce,size:new Ve(T,R)},r.set(f,b),f.addEventListener("dispose",k)}let y=0;for(let S=0;S<p.length;S++)y+=p[S];let g=f.morphTargetsRelative?1:1-y;m.getUniforms().setValue(i,"morphTargetBaseInfluence",g),m.getUniforms().setValue(i,"morphTargetInfluences",p),m.getUniforms().setValue(i,"morphTargetsTexture",b.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",b.size)}else{let u=p===void 0?0:p.length,x=n[f.id];if(x===void 0||x.length!==u){x=[];for(let v=0;v<u;v++)x[v]=[v,0];n[f.id]=x}for(let v=0;v<u;v++){let A=x[v];A[0]=v,A[1]=p[v]}x.sort(by);for(let v=0;v<8;v++)v<u&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(My);let b=f.morphAttributes.position,y=f.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let A=o[v],F=A[0],D=A[1];F!==Number.MAX_SAFE_INTEGER&&D?(b&&f.getAttribute("morphTarget"+v)!==b[F]&&f.setAttribute("morphTarget"+v,b[F]),y&&f.getAttribute("morphNormal"+v)!==y[F]&&f.setAttribute("morphNormal"+v,y[F]),s[v]=D,g+=D):(b&&f.hasAttribute("morphTarget"+v)===!0&&f.deleteAttribute("morphTarget"+v),y&&f.hasAttribute("morphNormal"+v)===!0&&f.deleteAttribute("morphNormal"+v),s[v]=0)}let S=f.morphTargetsRelative?1:1-g;m.getUniforms().setValue(i,"morphTargetBaseInfluence",S),m.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Ey(i,e,t,n){let s=new WeakMap;function r(l){let h=n.render.frame,f=l.geometry,m=e.get(l,f);if(s.get(m)!==h&&(e.update(m),s.set(m,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return m}function a(){s=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}var Vo=class extends ki{constructor(e,t,n,s,r,a,o,l,h,f){if(f=f!==void 0?f:ar,f!==ar&&f!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ar&&(n=Ls),n===void 0&&f===qr&&(n=rr),super(null,s,r,a,o,l,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qd=new ki,ef=new Vo(1,1);ef.compareFunction=$d;var tf=new Uo,nf=new Tc,sf=new ko,ld=[],cd=[],hd=new Float32Array(16),ud=new Float32Array(9),dd=new Float32Array(4);function Qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ol(i,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;i.uniform2fv(this.addr,e),Yn(t,e)}}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qn(t,e))return;i.uniform3fv(this.addr,e),Yn(t,e)}}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;i.uniform4fv(this.addr,e),Yn(t,e)}}function Cy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yn(t,e)}else{if(qn(t,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),Yn(t,n)}}function Py(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yn(t,e)}else{if(qn(t,n))return;ud.set(n),i.uniformMatrix3fv(this.addr,!1,ud),Yn(t,n)}}function Iy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yn(t,e)}else{if(qn(t,n))return;hd.set(n),i.uniformMatrix4fv(this.addr,!1,hd),Yn(t,n)}}function Ly(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;i.uniform2iv(this.addr,e),Yn(t,e)}}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qn(t,e))return;i.uniform3iv(this.addr,e),Yn(t,e)}}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;i.uniform4iv(this.addr,e),Yn(t,e)}}function Oy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;i.uniform2uiv(this.addr,e),Yn(t,e)}}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qn(t,e))return;i.uniform3uiv(this.addr,e),Yn(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;i.uniform4uiv(this.addr,e),Yn(t,e)}}function Hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ef:Qd;t.setTexture2D(e||r,s)}function zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nf,s)}function Vy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sf,s)}function Gy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tf,s)}function Wy(i){switch(i){case 5126:return Ty;case 35664:return wy;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return Py;case 35676:return Iy;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Uy;case 35669:case 35673:return Ny;case 5125:return Oy;case 36294:return Fy;case 36295:return By;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Xy(i,e){i.uniform1fv(this.addr,e)}function qy(i,e){let t=Qr(e,this.size,2);i.uniform2fv(this.addr,t)}function Yy(i,e){let t=Qr(e,this.size,3);i.uniform3fv(this.addr,t)}function $y(i,e){let t=Qr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ky(i,e){let t=Qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zy(i,e){let t=Qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jy(i,e){let t=Qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jy(i,e){i.uniform1iv(this.addr,e)}function Qy(i,e){i.uniform2iv(this.addr,e)}function ex(i,e){i.uniform3iv(this.addr,e)}function tx(i,e){i.uniform4iv(this.addr,e)}function nx(i,e){i.uniform1uiv(this.addr,e)}function ix(i,e){i.uniform2uiv(this.addr,e)}function sx(i,e){i.uniform3uiv(this.addr,e)}function rx(i,e){i.uniform4uiv(this.addr,e)}function ax(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Qd,r[a])}function ox(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||nf,r[a])}function lx(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||sf,r[a])}function cx(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||tf,r[a])}function hx(i){switch(i){case 5126:return Xy;case 35664:return qy;case 35665:return Yy;case 35666:return $y;case 35674:return Ky;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return jy;case 35667:case 35671:return Qy;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}var Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wy(t.type)}},Cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hx(t.type)}},Pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},hc=/(\w+)(\])?(\[|\.)?/g;function fd(i,e){i.seq.push(e),i.map[e.id]=e}function ux(i,e,t){let n=i.name,s=n.length;for(hc.lastIndex=0;;){let r=hc.exec(n),a=hc.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){fd(t,h===void 0?new Rc(o,i,e):new Cc(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new Pc(o),fd(t,m)),t=m}}}var Gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ux(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function pd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var dx=37297,fx=0;function px(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function mx(i){let e=un.getPrimaries(un.workingColorSpace),t=un.getPrimaries(i),n;switch(e===t?n="":e===Co&&t===Ro?n="LinearDisplayP3ToLinearSRGB":e===Ro&&t===Co&&(n="LinearSRGBToLinearDisplayP3"),i){case ps:case al:return[n,"LinearTransferOETF"];case ti:case hh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function md(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+px(i.getShaderSource(e),a)}else return s}function gx(i,e){let t=mx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yx(i,e){let t;switch(e){case Np:t="Linear";break;case Op:t="Reinhard";break;case Fp:t="OptimizedCineon";break;case Bp:t="ACESFilmic";break;case Hp:t="AgX";break;case kp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function _x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(kr).join(`
`)}function vx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function kr(i){return i!==""}function gd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(bx,Ex)}var Sx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ex(i,e){let t=Pt[e];if(t===void 0){let n=Sx.get(e);if(n!==void 0)t=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}var Tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(i){return i.replace(Tx,wx)}function wx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _d(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ax(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Od?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ds&&(e="SHADOWMAP_TYPE_VSM"),e}function Rx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function Px(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fd:e="ENVMAP_BLENDING_MULTIPLY";break;case Dp:e="ENVMAP_BLENDING_MIX";break;case Up:e="ENVMAP_BLENDING_ADD";break}return e}function Ix(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Lx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ax(t),h=Rx(t),f=Cx(t),m=Px(t),p=Ix(t),u=t.isWebGL2?"":xx(t),x=_x(t),b=vx(r),y=s.createProgram(),g,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(kr).join(`
`),g.length>0&&(g+=`
`),S=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(kr).join(`
`),S.length>0&&(S+=`
`)):(g=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),S=[u,_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ns?"#define TONE_MAPPING":"",t.toneMapping!==Ns?Pt.tonemapping_pars_fragment:"",t.toneMapping!==Ns?yx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,gx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),a=Ic(a),a=gd(a,t),a=yd(a,t),o=Ic(o),o=gd(o,t),o=yd(o,t),a=xd(a),o=xd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let A=v+g+a,F=v+S+o,D=pd(s,s.VERTEX_SHADER,A),N=pd(s,s.FRAGMENT_SHADER,F);s.attachShader(y,D),s.attachShader(y,N),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function Y(ce){if(i.debug.checkShaderErrors){let Se=s.getProgramInfoLog(y).trim(),k=s.getShaderInfoLog(D).trim(),q=s.getShaderInfoLog(N).trim(),z=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,D,N);else{let K=md(s,D,"vertex"),se=md(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Program Info Log: `+Se+`
`+K+`
`+se)}else Se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Se):(k===""||q==="")&&(W=!1);W&&(ce.diagnostics={runnable:z,programLog:Se,vertexShader:{log:k,prefix:g},fragmentShader:{log:q,prefix:S}})}s.deleteShader(D),s.deleteShader(N),T=new Gr(s,y),R=Mx(s,y)}let T;this.getUniforms=function(){return T===void 0&&Y(this),T};let R;this.getAttributes=function(){return R===void 0&&Y(this),R};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=s.getProgramParameter(y,dx)),$},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=N,this}var Dx=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dc(e),t.set(e,n)),n}},Dc=class{constructor(e){this.id=Dx++,this.code=e,this.usedTimes=0}};function Ux(i,e,t,n,s,r,a){let o=new Ra,l=new Lc,h=[],f=s.isWebGL2,m=s.logarithmicDepthBuffer,p=s.vertexTextures,u=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return T===0?"uv":`uv${T}`}function y(T,R,$,ce,Se){let k=ce.fog,q=Se.geometry,z=T.isMeshStandardMaterial?ce.environment:null,W=(T.isMeshStandardMaterial?t:e).get(T.envMap||z),K=W&&W.mapping===rl?W.image.height:null,se=x[T.type];T.precision!==null&&(u=s.getMaxPrecision(T.precision),u!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",u,"instead."));let le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ue=le!==void 0?le.length:0,Re=0;q.morphAttributes.position!==void 0&&(Re=1),q.morphAttributes.normal!==void 0&&(Re=2),q.morphAttributes.color!==void 0&&(Re=3);let j,fe,we,ze;if(se){let Kn=es[se];j=Kn.vertexShader,fe=Kn.fragmentShader}else j=T.vertexShader,fe=T.fragmentShader,l.update(T),we=l.getVertexShaderID(T),ze=l.getFragmentShaderID(T);let Ke=i.getRenderTarget(),dt=Se.isInstancedMesh===!0,pt=Se.isBatchedMesh===!0,et=!!T.map,re=!!T.matcap,Z=!!W,_n=!!T.aoMap,Me=!!T.lightMap,tt=!!T.bumpMap,Ge=!!T.normalMap,Wt=!!T.displacementMap,Be=!!T.emissiveMap,C=!!T.metalnessMap,E=!!T.roughnessMap,J=T.anisotropy>0,Te=T.clearcoat>0,ye=T.iridescence>0,Ae=T.sheen>0,Qe=T.transmission>0,Fe=J&&!!T.anisotropyMap,We=Te&&!!T.clearcoatMap,Ze=Te&&!!T.clearcoatNormalMap,Tt=Te&&!!T.clearcoatRoughnessMap,Ee=ye&&!!T.iridescenceMap,Yt=ye&&!!T.iridescenceThicknessMap,Ct=Ae&&!!T.sheenColorMap,mt=Ae&&!!T.sheenRoughnessMap,rt=!!T.specularMap,qe=!!T.specularColorMap,St=!!T.specularIntensityMap,Xt=Qe&&!!T.transmissionMap,dn=Qe&&!!T.thicknessMap,wt=!!T.gradientMap,Le=!!T.alphaMap,H=T.alphaTest>0,Ne=!!T.alphaHash,Ue=!!T.extensions,ht=!!q.attributes.uv1,lt=!!q.attributes.uv2,ln=!!q.attributes.uv3,jt=Ns;return T.toneMapped&&(Ke===null||Ke.isXRRenderTarget===!0)&&(jt=i.toneMapping),{isWebGL2:f,shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:j,fragmentShader:fe,defines:T.defines,customVertexShaderID:we,customFragmentShaderID:ze,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:u,batching:pt,instancing:dt,instancingColor:dt&&Se.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ke===null?i.outputColorSpace:Ke.isXRRenderTarget===!0?Ke.texture.colorSpace:ps,map:et,matcap:re,envMap:Z,envMapMode:Z&&W.mapping,envMapCubeUVHeight:K,aoMap:_n,lightMap:Me,bumpMap:tt,normalMap:Ge,displacementMap:p&&Wt,emissiveMap:Be,normalMapObjectSpace:Ge&&T.normalMapType===jp,normalMapTangentSpace:Ge&&T.normalMapType===Yd,metalnessMap:C,roughnessMap:E,anisotropy:J,anisotropyMap:Fe,clearcoat:Te,clearcoatMap:We,clearcoatNormalMap:Ze,clearcoatRoughnessMap:Tt,iridescence:ye,iridescenceMap:Ee,iridescenceThicknessMap:Yt,sheen:Ae,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:rt,specularColorMap:qe,specularIntensityMap:St,transmission:Qe,transmissionMap:Xt,thicknessMap:dn,gradientMap:wt,opaque:T.transparent===!1&&T.blending===zr,alphaMap:Le,alphaTest:H,alphaHash:Ne,combine:T.combine,mapUv:et&&b(T.map.channel),aoMapUv:_n&&b(T.aoMap.channel),lightMapUv:Me&&b(T.lightMap.channel),bumpMapUv:tt&&b(T.bumpMap.channel),normalMapUv:Ge&&b(T.normalMap.channel),displacementMapUv:Wt&&b(T.displacementMap.channel),emissiveMapUv:Be&&b(T.emissiveMap.channel),metalnessMapUv:C&&b(T.metalnessMap.channel),roughnessMapUv:E&&b(T.roughnessMap.channel),anisotropyMapUv:Fe&&b(T.anisotropyMap.channel),clearcoatMapUv:We&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:mt&&b(T.sheenRoughnessMap.channel),specularMapUv:rt&&b(T.specularMap.channel),specularColorMapUv:qe&&b(T.specularColorMap.channel),specularIntensityMapUv:St&&b(T.specularIntensityMap.channel),transmissionMapUv:Xt&&b(T.transmissionMap.channel),thicknessMapUv:dn&&b(T.thicknessMap.channel),alphaMapUv:Le&&b(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ge||J),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:ht,vertexUv2s:lt,vertexUv3s:ln,pointsUvs:Se.isPoints===!0&&!!q.attributes.uv&&(et||Le),fog:!!k,useFog:T.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:Se.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&un.getTransfer(T.map.colorSpace)===En,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ln,flipSided:T.side===gi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Ue&&T.extensions.derivatives===!0,extensionFragDepth:Ue&&T.extensions.fragDepth===!0,extensionDrawBuffers:Ue&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ue&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){let R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(let $ in T.defines)R.push($),R.push(T.defines[$]);return T.isRawShaderMaterial===!1&&(S(R,T),v(R,T),R.push(i.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function S(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function v(T,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),T.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function A(T){let R=x[T.type],$;if(R){let ce=es[R];$=Sm.clone(ce.uniforms)}else $=T.uniforms;return $}function F(T,R){let $;for(let ce=0,Se=h.length;ce<Se;ce++){let k=h[ce];if(k.cacheKey===R){$=k,++$.usedTimes;break}}return $===void 0&&($=new Lx(i,R,T,r),h.push($)),$}function D(T){if(--T.usedTimes===0){let R=h.indexOf(T);h[R]=h[h.length-1],h.pop(),T.destroy()}}function N(T){l.remove(T)}function Y(){l.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:F,releaseProgram:D,releaseShaderCache:N,programs:h,dispose:Y}}function Nx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ox(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Md(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(m,p,u,x,b,y){let g=i[e];return g===void 0?(g={id:m.id,object:m,geometry:p,material:u,groupOrder:x,renderOrder:m.renderOrder,z:b,group:y},i[e]=g):(g.id=m.id,g.object=m,g.geometry=p,g.material=u,g.groupOrder=x,g.renderOrder=m.renderOrder,g.z=b,g.group=y),e++,g}function o(m,p,u,x,b,y){let g=a(m,p,u,x,b,y);u.transmission>0?n.push(g):u.transparent===!0?s.push(g):t.push(g)}function l(m,p,u,x,b,y){let g=a(m,p,u,x,b,y);u.transmission>0?n.unshift(g):u.transparent===!0?s.unshift(g):t.unshift(g)}function h(m,p){t.length>1&&t.sort(m||Ox),n.length>1&&n.sort(p||vd),s.length>1&&s.sort(p||vd)}function f(){for(let m=e,p=i.length;m<p;m++){let u=i[m];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:f,sort:h}}function Fx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Md,i.set(n,[a])):s>=r.length?(a=new Md,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new bt};break;case"SpotLight":t={position:new B,direction:new B,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function kx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Hx=0;function zx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vx(i,e){let t=new Bx,n=kx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)s.probe.push(new B);let r=new B,a=new Gn,o=new Gn;function l(f,m){let p=0,u=0,x=0;for(let ce=0;ce<9;ce++)s.probe[ce].set(0,0,0);let b=0,y=0,g=0,S=0,v=0,A=0,F=0,D=0,N=0,Y=0,T=0;f.sort(zx);let R=m===!0?Math.PI:1;for(let ce=0,Se=f.length;ce<Se;ce++){let k=f[ce],q=k.color,z=k.intensity,W=k.distance,K=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=q.r*z*R,u+=q.g*z*R,x+=q.b*z*R;else if(k.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(k.sh.coefficients[se],z);T++}else if(k.isDirectionalLight){let se=t.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity*R),k.castShadow){let le=k.shadow,ue=n.get(k);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,s.directionalShadow[b]=ue,s.directionalShadowMap[b]=K,s.directionalShadowMatrix[b]=k.shadow.matrix,A++}s.directional[b]=se,b++}else if(k.isSpotLight){let se=t.get(k);se.position.setFromMatrixPosition(k.matrixWorld),se.color.copy(q).multiplyScalar(z*R),se.distance=W,se.coneCos=Math.cos(k.angle),se.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),se.decay=k.decay,s.spot[g]=se;let le=k.shadow;if(k.map&&(s.spotLightMap[N]=k.map,N++,le.updateMatrices(k),k.castShadow&&Y++),s.spotLightMatrix[g]=le.matrix,k.castShadow){let ue=n.get(k);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,s.spotShadow[g]=ue,s.spotShadowMap[g]=K,D++}g++}else if(k.isRectAreaLight){let se=t.get(k);se.color.copy(q).multiplyScalar(z),se.halfWidth.set(k.width*.5,0,0),se.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=se,S++}else if(k.isPointLight){let se=t.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity*R),se.distance=k.distance,se.decay=k.decay,k.castShadow){let le=k.shadow,ue=n.get(k);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,ue.shadowCameraNear=le.camera.near,ue.shadowCameraFar=le.camera.far,s.pointShadow[y]=ue,s.pointShadowMap[y]=K,s.pointShadowMatrix[y]=k.shadow.matrix,F++}s.point[y]=se,y++}else if(k.isHemisphereLight){let se=t.get(k);se.skyColor.copy(k.color).multiplyScalar(z*R),se.groundColor.copy(k.groundColor).multiplyScalar(z*R),s.hemi[v]=se,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=u,s.ambient[2]=x;let $=s.hash;($.directionalLength!==b||$.pointLength!==y||$.spotLength!==g||$.rectAreaLength!==S||$.hemiLength!==v||$.numDirectionalShadows!==A||$.numPointShadows!==F||$.numSpotShadows!==D||$.numSpotMaps!==N||$.numLightProbes!==T)&&(s.directional.length=b,s.spot.length=g,s.rectArea.length=S,s.point.length=y,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=D+N-Y,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=T,$.directionalLength=b,$.pointLength=y,$.spotLength=g,$.rectAreaLength=S,$.hemiLength=v,$.numDirectionalShadows=A,$.numPointShadows=F,$.numSpotShadows=D,$.numSpotMaps=N,$.numLightProbes=T,s.version=Hx++)}function h(f,m){let p=0,u=0,x=0,b=0,y=0,g=m.matrixWorldInverse;for(let S=0,v=f.length;S<v;S++){let A=f[S];if(A.isDirectionalLight){let F=s.directional[p];F.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(g),p++}else if(A.isSpotLight){let F=s.spot[x];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),F.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(g),x++}else if(A.isRectAreaLight){let F=s.rectArea[b];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),o.identity(),a.copy(A.matrixWorld),a.premultiply(g),o.extractRotation(a),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),F.halfWidth.applyMatrix4(o),F.halfHeight.applyMatrix4(o),b++}else if(A.isPointLight){let F=s.point[u];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),u++}else if(A.isHemisphereLight){let F=s.hemi[y];F.direction.setFromMatrixPosition(A.matrixWorld),F.direction.transformDirection(g),y++}}}return{setup:l,setupView:h,state:s}}function bd(i,e){let t=new Vx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(m){n.push(m)}function o(m){s.push(m)}function l(m){t.setup(n,m)}function h(m){t.setupView(n,m)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function Gx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new bd(i,e),t.set(r,[l])):a>=o.length?(l=new bd(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Uc=class extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nc=class extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xx=`uniform sampler2D shadow_pass;
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
}`;function qx(i,e,t){let n=new Ca,s=new Ve,r=new Ve,a=new Qn,o=new Uc({depthPacking:Jp}),l=new Nc,h={},f=t.maxTextureSize,m={[Fs]:gi,[gi]:Fs,[Ln]:Ln},p=new gs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Wx,fragmentShader:Xx}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let x=new fi;x.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ye(x,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Od;let g=this.type;this.render=function(D,N,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;let T=i.getRenderTarget(),R=i.getActiveCubeFace(),$=i.getActiveMipmapLevel(),ce=i.state;ce.setBlending(Us),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);let Se=g!==ds&&this.type===ds,k=g===ds&&this.type!==ds;for(let q=0,z=D.length;q<z;q++){let W=D[q],K=W.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let se=K.getFrameExtents();if(s.multiply(se),r.copy(K.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/se.x),s.x=r.x*se.x,K.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/se.y),s.y=r.y*se.y,K.mapSize.y=r.y)),K.map===null||Se===!0||k===!0){let ue=this.type!==ds?{minFilter:hi,magFilter:hi}:{};K.map!==null&&K.map.dispose(),K.map=new ms(s.x,s.y,ue),K.map.texture.name=W.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let le=K.getViewportCount();for(let ue=0;ue<le;ue++){let Re=K.getViewport(ue);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),ce.viewport(a),K.updateMatrices(W,ue),n=K.getFrustum(),A(N,Y,K.camera,W,this.type)}K.isPointLightShadow!==!0&&this.type===ds&&S(K,Y),K.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(T,R,$)};function S(D,N){let Y=e.update(b);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,u.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ms(s.x,s.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(N,null,Y,p,b,null),u.uniforms.shadow_pass.value=D.mapPass.texture,u.uniforms.resolution.value=D.mapSize,u.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(N,null,Y,u,b,null)}function v(D,N,Y,T){let R=null,$=Y.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if($!==void 0)R=$;else if(R=Y.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let ce=R.uuid,Se=N.uuid,k=h[ce];k===void 0&&(k={},h[ce]=k);let q=k[Se];q===void 0&&(q=R.clone(),k[Se]=q,N.addEventListener("dispose",F)),R=q}if(R.visible=N.visible,R.wireframe=N.wireframe,T===ds?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:m[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let ce=i.properties.get(R);ce.light=Y}return R}function A(D,N,Y,T,R){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===ds)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,D.matrixWorld);let Se=e.update(D),k=D.material;if(Array.isArray(k)){let q=Se.groups;for(let z=0,W=q.length;z<W;z++){let K=q[z],se=k[K.materialIndex];if(se&&se.visible){let le=v(D,se,T,R);D.onBeforeShadow(i,D,N,Y,Se,le,K),i.renderBufferDirect(Y,null,Se,le,D,K),D.onAfterShadow(i,D,N,Y,Se,le,K)}}}else if(k.visible){let q=v(D,k,T,R);D.onBeforeShadow(i,D,N,Y,Se,q,null),i.renderBufferDirect(Y,null,Se,q,D,null),D.onAfterShadow(i,D,N,Y,Se,q,null)}}let ce=D.children;for(let Se=0,k=ce.length;Se<k;Se++)A(ce[Se],N,Y,T,R)}function F(D){D.target.removeEventListener("dispose",F);for(let Y in h){let T=h[Y],R=D.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Yx(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Ne=new Qn,Ue=null,ht=new Qn(0,0,0,0);return{setMask:function(lt){Ue!==lt&&!H&&(i.colorMask(lt,lt,lt,lt),Ue=lt)},setLocked:function(lt){H=lt},setClear:function(lt,ln,jt,On,Kn){Kn===!0&&(lt*=On,ln*=On,jt*=On),Ne.set(lt,ln,jt,On),ht.equals(Ne)===!1&&(i.clearColor(lt,ln,jt,On),ht.copy(Ne))},reset:function(){H=!1,Ue=null,ht.set(-1,0,0,0)}}}function r(){let H=!1,Ne=null,Ue=null,ht=null;return{setTest:function(lt){lt?pt(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(lt){Ne!==lt&&!H&&(i.depthMask(lt),Ne=lt)},setFunc:function(lt){if(Ue!==lt){switch(lt){case wp:i.depthFunc(i.NEVER);break;case Ap:i.depthFunc(i.ALWAYS);break;case Rp:i.depthFunc(i.LESS);break;case Eo:i.depthFunc(i.LEQUAL);break;case Cp:i.depthFunc(i.EQUAL);break;case Pp:i.depthFunc(i.GEQUAL);break;case Ip:i.depthFunc(i.GREATER);break;case Lp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=lt}},setLocked:function(lt){H=lt},setClear:function(lt){ht!==lt&&(i.clearDepth(lt),ht=lt)},reset:function(){H=!1,Ne=null,Ue=null,ht=null}}}function a(){let H=!1,Ne=null,Ue=null,ht=null,lt=null,ln=null,jt=null,On=null,Kn=null;return{setTest:function($t){H||($t?pt(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function($t){Ne!==$t&&!H&&(i.stencilMask($t),Ne=$t)},setFunc:function($t,Wn,xi){(Ue!==$t||ht!==Wn||lt!==xi)&&(i.stencilFunc($t,Wn,xi),Ue=$t,ht=Wn,lt=xi)},setOp:function($t,Wn,xi){(ln!==$t||jt!==Wn||On!==xi)&&(i.stencilOp($t,Wn,xi),ln=$t,jt=Wn,On=xi)},setLocked:function($t){H=$t},setClear:function($t){Kn!==$t&&(i.clearStencil($t),Kn=$t)},reset:function(){H=!1,Ne=null,Ue=null,ht=null,lt=null,ln=null,jt=null,On=null,Kn=null}}}let o=new s,l=new r,h=new a,f=new WeakMap,m=new WeakMap,p={},u={},x=new WeakMap,b=[],y=null,g=!1,S=null,v=null,A=null,F=null,D=null,N=null,Y=null,T=new bt(0,0,0),R=0,$=!1,ce=null,Se=null,k=null,q=null,z=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,se=0,le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(le)[1]),K=se>=1):le.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),K=se>=2);let ue=null,Re={},j=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),we=new Qn().fromArray(j),ze=new Qn().fromArray(fe);function Ke(H,Ne,Ue,ht){let lt=new Uint8Array(4),ln=i.createTexture();i.bindTexture(H,ln),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<Ue;jt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ne,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(Ne+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ln}let dt={};dt[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(dt[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),pt(i.DEPTH_TEST),l.setFunc(Eo),Be(!1),C(tu),pt(i.CULL_FACE),Ge(Us);function pt(H){p[H]!==!0&&(i.enable(H),p[H]=!0)}function et(H){p[H]!==!1&&(i.disable(H),p[H]=!1)}function re(H,Ne){return u[H]!==Ne?(i.bindFramebuffer(H,Ne),u[H]=Ne,n&&(H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ne),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ne)),!0):!1}function Z(H,Ne){let Ue=b,ht=!1;if(H)if(Ue=x.get(Ne),Ue===void 0&&(Ue=[],x.set(Ne,Ue)),H.isWebGLMultipleRenderTargets){let lt=H.texture;if(Ue.length!==lt.length||Ue[0]!==i.COLOR_ATTACHMENT0){for(let ln=0,jt=lt.length;ln<jt;ln++)Ue[ln]=i.COLOR_ATTACHMENT0+ln;Ue.length=lt.length,ht=!0}}else Ue[0]!==i.COLOR_ATTACHMENT0&&(Ue[0]=i.COLOR_ATTACHMENT0,ht=!0);else Ue[0]!==i.BACK&&(Ue[0]=i.BACK,ht=!0);ht&&(t.isWebGL2?i.drawBuffers(Ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ue))}function _n(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let Me={[ir]:i.FUNC_ADD,[up]:i.FUNC_SUBTRACT,[dp]:i.FUNC_REVERSE_SUBTRACT};if(n)Me[ru]=i.MIN,Me[au]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(Me[ru]=H.MIN_EXT,Me[au]=H.MAX_EXT)}let tt={[fp]:i.ZERO,[pp]:i.ONE,[mp]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[Mp]:i.SRC_ALPHA_SATURATE,[_p]:i.DST_COLOR,[yp]:i.DST_ALPHA,[gp]:i.ONE_MINUS_SRC_COLOR,[yc]:i.ONE_MINUS_SRC_ALPHA,[vp]:i.ONE_MINUS_DST_COLOR,[xp]:i.ONE_MINUS_DST_ALPHA,[bp]:i.CONSTANT_COLOR,[Sp]:i.ONE_MINUS_CONSTANT_COLOR,[Ep]:i.CONSTANT_ALPHA,[Tp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(H,Ne,Ue,ht,lt,ln,jt,On,Kn,$t){if(H===Us){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(pt(i.BLEND),g=!0),H!==hp){if(H!==S||$t!==$){if((v!==ir||D!==ir)&&(i.blendEquation(i.FUNC_ADD),v=ir,D=ir),$t)switch(H){case zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nu:i.blendFunc(i.ONE,i.ONE);break;case iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case su:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,F=null,N=null,Y=null,T.set(0,0,0),R=0,S=H,$=$t}return}lt=lt||Ne,ln=ln||Ue,jt=jt||ht,(Ne!==v||lt!==D)&&(i.blendEquationSeparate(Me[Ne],Me[lt]),v=Ne,D=lt),(Ue!==A||ht!==F||ln!==N||jt!==Y)&&(i.blendFuncSeparate(tt[Ue],tt[ht],tt[ln],tt[jt]),A=Ue,F=ht,N=ln,Y=jt),(On.equals(T)===!1||Kn!==R)&&(i.blendColor(On.r,On.g,On.b,Kn),T.copy(On),R=Kn),S=H,$=!1}function Wt(H,Ne){H.side===Ln?et(i.CULL_FACE):pt(i.CULL_FACE);let Ue=H.side===gi;Ne&&(Ue=!Ue),Be(Ue),H.blending===zr&&H.transparent===!1?Ge(Us):Ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),o.setMask(H.colorWrite);let ht=H.stencilWrite;h.setTest(ht),ht&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),J(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(H){ce!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),ce=H)}function C(H){H!==lp?(pt(i.CULL_FACE),H!==Se&&(H===tu?i.cullFace(i.BACK):H===cp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),Se=H}function E(H){H!==k&&(K&&i.lineWidth(H),k=H)}function J(H,Ne,Ue){H?(pt(i.POLYGON_OFFSET_FILL),(q!==Ne||z!==Ue)&&(i.polygonOffset(Ne,Ue),q=Ne,z=Ue)):et(i.POLYGON_OFFSET_FILL)}function Te(H){H?pt(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function ye(H){H===void 0&&(H=i.TEXTURE0+W-1),ue!==H&&(i.activeTexture(H),ue=H)}function Ae(H,Ne,Ue){Ue===void 0&&(ue===null?Ue=i.TEXTURE0+W-1:Ue=ue);let ht=Re[Ue];ht===void 0&&(ht={type:void 0,texture:void 0},Re[Ue]=ht),(ht.type!==H||ht.texture!==Ne)&&(ue!==Ue&&(i.activeTexture(Ue),ue=Ue),i.bindTexture(H,Ne||dt[H]),ht.type=H,ht.texture=Ne)}function Qe(){let H=Re[ue];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function rt(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(H){we.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),we.copy(H))}function Xt(H){ze.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),ze.copy(H))}function dn(H,Ne){let Ue=m.get(Ne);Ue===void 0&&(Ue=new WeakMap,m.set(Ne,Ue));let ht=Ue.get(H);ht===void 0&&(ht=i.getUniformBlockIndex(Ne,H.name),Ue.set(H,ht))}function wt(H,Ne){let ht=m.get(Ne).get(H);f.get(Ne)!==ht&&(i.uniformBlockBinding(Ne,ht,H.__bindingPointIndex),f.set(Ne,ht))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ue=null,Re={},u={},x=new WeakMap,b=[],y=null,g=!1,S=null,v=null,A=null,F=null,D=null,N=null,Y=null,T=new bt(0,0,0),R=0,$=!1,ce=null,Se=null,k=null,q=null,z=null,we.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:pt,disable:et,bindFramebuffer:re,drawBuffers:Z,useProgram:_n,setBlending:Ge,setMaterial:Wt,setFlipSided:Be,setCullFace:C,setLineWidth:E,setPolygonOffset:J,setScissorTest:Te,activeTexture:ye,bindTexture:Ae,unbindTexture:Qe,compressedTexImage2D:Fe,compressedTexImage3D:We,texImage2D:rt,texImage3D:qe,updateUBOMapping:dn,uniformBlockBinding:wt,texStorage2D:Ct,texStorage3D:mt,texSubImage2D:Ze,texSubImage3D:Tt,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Yt,scissor:St,viewport:Xt,reset:Le}}function $x(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap,m,p=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return u?new OffscreenCanvas(C,E):Io("canvas")}function b(C,E,J,Te){let ye=1;if((C.width>Te||C.height>Te)&&(ye=Te/Math.max(C.width,C.height)),ye<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Ae=E?Sc:Math.floor,Qe=Ae(ye*C.width),Fe=Ae(ye*C.height);m===void 0&&(m=x(Qe,Fe));let We=J?x(Qe,Fe):m;return We.width=Qe,We.height=Fe,We.getContext("2d").drawImage(C,0,0,Qe,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Qe+"x"+Fe+")."),We}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return ku(C.width)&&ku(C.height)}function g(C){return o?!1:C.wrapS!==$i||C.wrapT!==$i||C.minFilter!==hi&&C.minFilter!==Fi}function S(C,E){return C.generateMipmaps&&E&&C.minFilter!==hi&&C.minFilter!==Fi}function v(C){i.generateMipmap(C)}function A(C,E,J,Te,ye=!1){if(o===!1)return E;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ae=E;if(E===i.RED&&(J===i.FLOAT&&(Ae=i.R32F),J===i.HALF_FLOAT&&(Ae=i.R16F),J===i.UNSIGNED_BYTE&&(Ae=i.R8)),E===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(Ae=i.R8UI),J===i.UNSIGNED_SHORT&&(Ae=i.R16UI),J===i.UNSIGNED_INT&&(Ae=i.R32UI),J===i.BYTE&&(Ae=i.R8I),J===i.SHORT&&(Ae=i.R16I),J===i.INT&&(Ae=i.R32I)),E===i.RG&&(J===i.FLOAT&&(Ae=i.RG32F),J===i.HALF_FLOAT&&(Ae=i.RG16F),J===i.UNSIGNED_BYTE&&(Ae=i.RG8)),E===i.RGBA){let Qe=ye?Ao:un.getTransfer(Te);J===i.FLOAT&&(Ae=i.RGBA32F),J===i.HALF_FLOAT&&(Ae=i.RGBA16F),J===i.UNSIGNED_BYTE&&(Ae=Qe===En?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(Ae=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(Ae=i.RGB5_A1)}return(Ae===i.R16F||Ae===i.R32F||Ae===i.RG16F||Ae===i.RG32F||Ae===i.RGBA16F||Ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ae}function F(C,E,J){return S(C,J)===!0||C.isFramebufferTexture&&C.minFilter!==hi&&C.minFilter!==Fi?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function D(C){return C===hi||C===ou||C===Ul?i.NEAREST:i.LINEAR}function N(C){let E=C.target;E.removeEventListener("dispose",N),T(E),E.isVideoTexture&&f.delete(E)}function Y(C){let E=C.target;E.removeEventListener("dispose",Y),$(E)}function T(C){let E=n.get(C);if(E.__webglInit===void 0)return;let J=C.source,Te=p.get(J);if(Te){let ye=Te[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&R(C),Object.keys(Te).length===0&&p.delete(J)}n.remove(C)}function R(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let J=C.source,Te=p.get(J);delete Te[E.__cacheKey],a.memory.textures--}function $(C){let E=C.texture,J=n.get(C),Te=n.get(E);if(Te.__webglTexture!==void 0&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(J.__webglFramebuffer[ye]))for(let Ae=0;Ae<J.__webglFramebuffer[ye].length;Ae++)i.deleteFramebuffer(J.__webglFramebuffer[ye][Ae]);else i.deleteFramebuffer(J.__webglFramebuffer[ye]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[ye])}else{if(Array.isArray(J.__webglFramebuffer))for(let ye=0;ye<J.__webglFramebuffer.length;ye++)i.deleteFramebuffer(J.__webglFramebuffer[ye]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ye=0;ye<J.__webglColorRenderbuffer.length;ye++)J.__webglColorRenderbuffer[ye]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[ye]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ye=0,Ae=E.length;ye<Ae;ye++){let Qe=n.get(E[ye]);Qe.__webglTexture&&(i.deleteTexture(Qe.__webglTexture),a.memory.textures--),n.remove(E[ye])}n.remove(E),n.remove(C)}let ce=0;function Se(){ce=0}function k(){let C=ce;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),ce+=1,C}function q(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function z(C,E){let J=n.get(C);if(C.isVideoTexture&&Wt(C),C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){let Te=C.image;if(Te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(J,C,E);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+E)}function W(C,E){let J=n.get(C);if(C.version>0&&J.__version!==C.version){we(J,C,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+E)}function K(C,E){let J=n.get(C);if(C.version>0&&J.__version!==C.version){we(J,C,E);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+E)}function se(C,E){let J=n.get(C);if(C.version>0&&J.__version!==C.version){ze(J,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+E)}let le={[Ea]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[vc]:i.MIRRORED_REPEAT},ue={[hi]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[Ul]:i.NEAREST_MIPMAP_LINEAR,[Fi]:i.LINEAR,[zp]:i.LINEAR_MIPMAP_NEAREST,[Ta]:i.LINEAR_MIPMAP_LINEAR},Re={[Qp]:i.NEVER,[rm]:i.ALWAYS,[em]:i.LESS,[$d]:i.LEQUAL,[tm]:i.EQUAL,[sm]:i.GEQUAL,[nm]:i.GREATER,[im]:i.NOTEQUAL};function j(C,E,J){if(J?(i.texParameteri(C,i.TEXTURE_WRAP_S,le[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,le[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,le[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[E.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==$i||E.wrapT!==$i)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,D(E.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,D(E.minFilter)),E.minFilter!==hi&&E.minFilter!==Fi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===hi||E.minFilter!==Ul&&E.minFilter!==Ta||E.type===Ds&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===wa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(C,Te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function fe(C,E){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",N));let Te=E.source,ye=p.get(Te);ye===void 0&&(ye={},p.set(Te,ye));let Ae=q(E);if(Ae!==C.__cacheKey){ye[Ae]===void 0&&(ye[Ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ye[Ae].usedTimes++;let Qe=ye[C.__cacheKey];Qe!==void 0&&(ye[C.__cacheKey].usedTimes--,Qe.usedTimes===0&&R(E)),C.__cacheKey=Ae,C.__webglTexture=ye[Ae].texture}return J}function we(C,E,J){let Te=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Te=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Te=i.TEXTURE_3D);let ye=fe(C,E),Ae=E.source;t.bindTexture(Te,C.__webglTexture,i.TEXTURE0+J);let Qe=n.get(Ae);if(Ae.version!==Qe.__version||ye===!0){t.activeTexture(i.TEXTURE0+J);let Fe=un.getPrimaries(un.workingColorSpace),We=E.colorSpace===Bi?null:un.getPrimaries(E.colorSpace),Ze=E.colorSpace===Bi||Fe===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Tt=g(E)&&y(E.image)===!1,Ee=b(E.image,Tt,!1,s.maxTextureSize);Ee=Be(E,Ee);let Yt=y(Ee)||o,Ct=r.convert(E.format,E.colorSpace),mt=r.convert(E.type),rt=A(E.internalFormat,Ct,mt,E.colorSpace,E.isVideoTexture);j(Te,E,Yt);let qe,St=E.mipmaps,Xt=o&&E.isVideoTexture!==!0&&rt!==Xd,dn=Qe.__version===void 0||ye===!0,wt=F(E,Ee,Yt);if(E.isDepthTexture)rt=i.DEPTH_COMPONENT,o?E.type===Ds?rt=i.DEPTH_COMPONENT32F:E.type===Ls?rt=i.DEPTH_COMPONENT24:E.type===rr?rt=i.DEPTH24_STENCIL8:rt=i.DEPTH_COMPONENT16:E.type===Ds&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ar&&rt===i.DEPTH_COMPONENT&&E.type!==ch&&E.type!==Ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ls,mt=r.convert(E.type)),E.format===qr&&rt===i.DEPTH_COMPONENT&&(rt=i.DEPTH_STENCIL,E.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=rr,mt=r.convert(E.type))),dn&&(Xt?t.texStorage2D(i.TEXTURE_2D,1,rt,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Ct,mt,null));else if(E.isDataTexture)if(St.length>0&&Yt){Xt&&dn&&t.texStorage2D(i.TEXTURE_2D,wt,rt,St[0].width,St[0].height);for(let Le=0,H=St.length;Le<H;Le++)qe=St[Le],Xt?t.texSubImage2D(i.TEXTURE_2D,Le,0,0,qe.width,qe.height,Ct,mt,qe.data):t.texImage2D(i.TEXTURE_2D,Le,rt,qe.width,qe.height,0,Ct,mt,qe.data);E.generateMipmaps=!1}else Xt?(dn&&t.texStorage2D(i.TEXTURE_2D,wt,rt,Ee.width,Ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ct,mt,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Ct,mt,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xt&&dn&&t.texStorage3D(i.TEXTURE_2D_ARRAY,wt,rt,St[0].width,St[0].height,Ee.depth);for(let Le=0,H=St.length;Le<H;Le++)qe=St[Le],E.format!==Ki?Ct!==null?Xt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,qe.width,qe.height,Ee.depth,Ct,qe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Le,rt,qe.width,qe.height,Ee.depth,0,qe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,qe.width,qe.height,Ee.depth,Ct,mt,qe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Le,rt,qe.width,qe.height,Ee.depth,0,Ct,mt,qe.data)}else{Xt&&dn&&t.texStorage2D(i.TEXTURE_2D,wt,rt,St[0].width,St[0].height);for(let Le=0,H=St.length;Le<H;Le++)qe=St[Le],E.format!==Ki?Ct!==null?Xt?t.compressedTexSubImage2D(i.TEXTURE_2D,Le,0,0,qe.width,qe.height,Ct,qe.data):t.compressedTexImage2D(i.TEXTURE_2D,Le,rt,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?t.texSubImage2D(i.TEXTURE_2D,Le,0,0,qe.width,qe.height,Ct,mt,qe.data):t.texImage2D(i.TEXTURE_2D,Le,rt,qe.width,qe.height,0,Ct,mt,qe.data)}else if(E.isDataArrayTexture)Xt?(dn&&t.texStorage3D(i.TEXTURE_2D_ARRAY,wt,rt,Ee.width,Ee.height,Ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ct,mt,Ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,Ee.width,Ee.height,Ee.depth,0,Ct,mt,Ee.data);else if(E.isData3DTexture)Xt?(dn&&t.texStorage3D(i.TEXTURE_3D,wt,rt,Ee.width,Ee.height,Ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ct,mt,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,rt,Ee.width,Ee.height,Ee.depth,0,Ct,mt,Ee.data);else if(E.isFramebufferTexture){if(dn)if(Xt)t.texStorage2D(i.TEXTURE_2D,wt,rt,Ee.width,Ee.height);else{let Le=Ee.width,H=Ee.height;for(let Ne=0;Ne<wt;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,rt,Le,H,0,Ct,mt,null),Le>>=1,H>>=1}}else if(St.length>0&&Yt){Xt&&dn&&t.texStorage2D(i.TEXTURE_2D,wt,rt,St[0].width,St[0].height);for(let Le=0,H=St.length;Le<H;Le++)qe=St[Le],Xt?t.texSubImage2D(i.TEXTURE_2D,Le,0,0,Ct,mt,qe):t.texImage2D(i.TEXTURE_2D,Le,rt,Ct,mt,qe);E.generateMipmaps=!1}else Xt?(dn&&t.texStorage2D(i.TEXTURE_2D,wt,rt,Ee.width,Ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,mt,Ee)):t.texImage2D(i.TEXTURE_2D,0,rt,Ct,mt,Ee);S(E,Yt)&&v(Te),Qe.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ze(C,E,J){if(E.image.length!==6)return;let Te=fe(C,E),ye=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+J);let Ae=n.get(ye);if(ye.version!==Ae.__version||Te===!0){t.activeTexture(i.TEXTURE0+J);let Qe=un.getPrimaries(un.workingColorSpace),Fe=E.colorSpace===Bi?null:un.getPrimaries(E.colorSpace),We=E.colorSpace===Bi||Qe===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Ze=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let Le=0;Le<6;Le++)!Ze&&!Tt?Ee[Le]=b(E.image[Le],!1,!0,s.maxCubemapSize):Ee[Le]=Tt?E.image[Le].image:E.image[Le],Ee[Le]=Be(E,Ee[Le]);let Yt=Ee[0],Ct=y(Yt)||o,mt=r.convert(E.format,E.colorSpace),rt=r.convert(E.type),qe=A(E.internalFormat,mt,rt,E.colorSpace),St=o&&E.isVideoTexture!==!0,Xt=Ae.__version===void 0||Te===!0,dn=F(E,Yt,Ct);j(i.TEXTURE_CUBE_MAP,E,Ct);let wt;if(Ze){St&&Xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,dn,qe,Yt.width,Yt.height);for(let Le=0;Le<6;Le++){wt=Ee[Le].mipmaps;for(let H=0;H<wt.length;H++){let Ne=wt[H];E.format!==Ki?mt!==null?St?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H,0,0,Ne.width,Ne.height,mt,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H,qe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H,0,0,Ne.width,Ne.height,mt,rt,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H,qe,Ne.width,Ne.height,0,mt,rt,Ne.data)}}}else{wt=E.mipmaps,St&&Xt&&(wt.length>0&&dn++,t.texStorage2D(i.TEXTURE_CUBE_MAP,dn,qe,Ee[0].width,Ee[0].height));for(let Le=0;Le<6;Le++)if(Tt){St?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Ee[Le].width,Ee[Le].height,mt,rt,Ee[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,qe,Ee[Le].width,Ee[Le].height,0,mt,rt,Ee[Le].data);for(let H=0;H<wt.length;H++){let Ue=wt[H].image[Le].image;St?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H+1,0,0,Ue.width,Ue.height,mt,rt,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H+1,qe,Ue.width,Ue.height,0,mt,rt,Ue.data)}}else{St?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,mt,rt,Ee[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,qe,mt,rt,Ee[Le]);for(let H=0;H<wt.length;H++){let Ne=wt[H];St?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H+1,0,0,mt,rt,Ne.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H+1,qe,mt,rt,Ne.image[Le])}}}S(E,Ct)&&v(i.TEXTURE_CUBE_MAP),Ae.__version=ye.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ke(C,E,J,Te,ye,Ae){let Qe=r.convert(J.format,J.colorSpace),Fe=r.convert(J.type),We=A(J.internalFormat,Qe,Fe,J.colorSpace);if(!n.get(E).__hasExternalTextures){let Tt=Math.max(1,E.width>>Ae),Ee=Math.max(1,E.height>>Ae);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ae,We,Tt,Ee,E.depth,0,Qe,Fe,null):t.texImage2D(ye,Ae,We,Tt,Ee,0,Qe,Fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ge(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,ye,n.get(J).__webglTexture,0,tt(E)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Te,ye,n.get(J).__webglTexture,Ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(C,E,J){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let Te=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(J||Ge(E)){let ye=E.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Ds?Te=i.DEPTH_COMPONENT32F:ye.type===Ls&&(Te=i.DEPTH_COMPONENT24));let Ae=tt(E);Ge(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Te,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Te,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,Te,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let Te=tt(E);J&&Ge(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,i.DEPTH24_STENCIL8,E.width,E.height):Ge(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let Te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ye=0;ye<Te.length;ye++){let Ae=Te[ye],Qe=r.convert(Ae.format,Ae.colorSpace),Fe=r.convert(Ae.type),We=A(Ae.internalFormat,Qe,Fe,Ae.colorSpace),Ze=tt(E);J&&Ge(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,We,E.width,E.height):Ge(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,We,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,We,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);let Te=n.get(E.depthTexture).__webglTexture,ye=tt(E);if(E.depthTexture.format===ar)Ge(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Te,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Te,0);else if(E.depthTexture.format===qr)Ge(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Te,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function et(C){let E=n.get(C),J=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");pt(E.__webglFramebuffer,C)}else if(J){E.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Te]),E.__webglDepthbuffer[Te]=i.createRenderbuffer(),dt(E.__webglDepthbuffer[Te],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),dt(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(C,E,J){let Te=n.get(C);E!==void 0&&Ke(Te.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&et(C)}function Z(C){let E=C.texture,J=n.get(C),Te=n.get(E);C.addEventListener("dispose",Y),C.isWebGLMultipleRenderTargets!==!0&&(Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture()),Te.__version=E.version,a.memory.textures++);let ye=C.isWebGLCubeRenderTarget===!0,Ae=C.isWebGLMultipleRenderTargets===!0,Qe=y(C)||o;if(ye){J.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(o&&E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Fe]=[];for(let We=0;We<E.mipmaps.length;We++)J.__webglFramebuffer[Fe][We]=i.createFramebuffer()}else J.__webglFramebuffer[Fe]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Fe=0;Fe<E.mipmaps.length;Fe++)J.__webglFramebuffer[Fe]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ae)if(s.drawBuffers){let Fe=C.texture;for(let We=0,Ze=Fe.length;We<Ze;We++){let Tt=n.get(Fe[We]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Ge(C)===!1){let Fe=Ae?E:[E];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let We=0;We<Fe.length;We++){let Ze=Fe[We];J.__webglColorRenderbuffer[We]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[We]);let Tt=r.convert(Ze.format,Ze.colorSpace),Ee=r.convert(Ze.type),Yt=A(Ze.internalFormat,Tt,Ee,Ze.colorSpace,C.isXRRenderTarget===!0),Ct=tt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,J.__webglColorRenderbuffer[We])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(J.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ye){t.bindTexture(i.TEXTURE_CUBE_MAP,Te.__webglTexture),j(i.TEXTURE_CUBE_MAP,E,Qe);for(let Fe=0;Fe<6;Fe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)Ke(J.__webglFramebuffer[Fe][We],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,We);else Ke(J.__webglFramebuffer[Fe],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);S(E,Qe)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){let Fe=C.texture;for(let We=0,Ze=Fe.length;We<Ze;We++){let Tt=Fe[We],Ee=n.get(Tt);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),j(i.TEXTURE_2D,Tt,Qe),Ke(J.__webglFramebuffer,C,Tt,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,0),S(Tt,Qe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Fe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Fe,Te.__webglTexture),j(Fe,E,Qe),o&&E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)Ke(J.__webglFramebuffer[We],C,E,i.COLOR_ATTACHMENT0,Fe,We);else Ke(J.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,Fe,0);S(E,Qe)&&v(Fe),t.unbindTexture()}C.depthBuffer&&et(C)}function _n(C){let E=y(C)||o,J=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Te=0,ye=J.length;Te<ye;Te++){let Ae=J[Te];if(S(Ae,E)){let Qe=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Fe=n.get(Ae).__webglTexture;t.bindTexture(Qe,Fe),v(Qe),t.unbindTexture()}}}function Me(C){if(o&&C.samples>0&&Ge(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],J=C.width,Te=C.height,ye=i.COLOR_BUFFER_BIT,Ae=[],Qe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(C),We=C.isWebGLMultipleRenderTargets===!0;if(We)for(let Ze=0;Ze<E.length;Ze++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ze=0;Ze<E.length;Ze++){Ae.push(i.COLOR_ATTACHMENT0+Ze),C.depthBuffer&&Ae.push(Qe);let Tt=Fe.__ignoreDepthValues!==void 0?Fe.__ignoreDepthValues:!1;if(Tt===!1&&(C.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),We&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ze]),Tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Qe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Qe])),We){let Ee=n.get(E[Ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,J,Te,0,0,J,Te,ye,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),We)for(let Ze=0;Ze<E.length;Ze++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ze]);let Tt=n.get(E[Ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,Tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}}function tt(C){return Math.min(s.maxSamples,C.samples)}function Ge(C){let E=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Wt(C){let E=a.render.frame;f.get(C)!==E&&(f.set(C,E),C.update())}function Be(C,E){let J=C.colorSpace,Te=C.format,ye=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Mc||J!==ps&&J!==Bi&&(un.getTransfer(J)===En?o===!1?e.has("EXT_sRGB")===!0&&Te===Ki?(C.format=Mc,C.minFilter=Fi,C.generateMipmaps=!1):E=Lo.sRGBToLinear(E):(Te!==Ki||ye!==Os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}this.allocateTextureUnit=k,this.resetTextureUnits=Se,this.setTexture2D=z,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=se,this.rebindTextures=re,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=_n,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=Ge}function Kx(i,e,t){let n=t.isWebGL2;function s(r,a=Bi){let o,l=un.getTransfer(a);if(r===Os)return i.UNSIGNED_BYTE;if(r===Hd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===zd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Vp)return i.BYTE;if(r===Gp)return i.SHORT;if(r===ch)return i.UNSIGNED_SHORT;if(r===kd)return i.INT;if(r===Ls)return i.UNSIGNED_INT;if(r===Ds)return i.FLOAT;if(r===wa)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Wp)return i.ALPHA;if(r===Ki)return i.RGBA;if(r===Xp)return i.LUMINANCE;if(r===qp)return i.LUMINANCE_ALPHA;if(r===ar)return i.DEPTH_COMPONENT;if(r===qr)return i.DEPTH_STENCIL;if(r===Mc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Yp)return i.RED;if(r===Vd)return i.RED_INTEGER;if(r===$p)return i.RG;if(r===Gd)return i.RG_INTEGER;if(r===Wd)return i.RGBA_INTEGER;if(r===Nl||r===Ol||r===Fl||r===Bl)if(l===En)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Nl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ol)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Nl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ol)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lu||r===cu||r===hu||r===uu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===lu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===du||r===fu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===du)return l===En?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===fu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pu||r===mu||r===gu||r===yu||r===xu||r===_u||r===vu||r===Mu||r===bu||r===Su||r===Eu||r===Tu||r===wu||r===Au)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===pu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_u)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Su)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wu)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Au)return l===En?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kl||r===Ru||r===Cu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===kl)return l===En?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ru)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kp||r===Pu||r===Iu||r===Lu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===kl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Pu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Iu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rr?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Oc=class extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ai=class extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zx={type:"move"},va=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let b of e.hand.values()){let y=t.getJointPose(b,n),g=this._getHandJoint(h,b);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let f=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],p=f.position.distanceTo(m.position),u=.02,x=.005;h.inputState.pinching&&p>u+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=u-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fc=class extends Bs{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,f=null,m=null,p=null,u=null,x=null,b=t.getContextAttributes(),y=null,g=null,S=[],v=[],A=new Ve,F=null,D=new ui;D.layers.enable(1),D.viewport=new Qn;let N=new ui;N.layers.enable(2),N.viewport=new Qn;let Y=[D,N],T=new Oc;T.layers.enable(1),T.layers.enable(2);let R=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let fe=S[j];return fe===void 0&&(fe=new va,S[j]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(j){let fe=S[j];return fe===void 0&&(fe=new va,S[j]=fe),fe.getGripSpace()},this.getHand=function(j){let fe=S[j];return fe===void 0&&(fe=new va,S[j]=fe),fe.getHandSpace()};function ce(j){let fe=v.indexOf(j.inputSource);if(fe===-1)return;let we=S[fe];we!==void 0&&(we.update(j.inputSource,j.frame,h||a),we.dispatchEvent({type:j.type,data:j.inputSource}))}function Se(){s.removeEventListener("select",ce),s.removeEventListener("selectstart",ce),s.removeEventListener("selectend",ce),s.removeEventListener("squeeze",ce),s.removeEventListener("squeezestart",ce),s.removeEventListener("squeezeend",ce),s.removeEventListener("end",Se),s.removeEventListener("inputsourceschange",k);for(let j=0;j<S.length;j++){let fe=v[j];fe!==null&&(v[j]=null,S[j].disconnect(fe))}R=null,$=null,e.setRenderTarget(y),u=null,p=null,m=null,s=null,g=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ce),s.addEventListener("selectstart",ce),s.addEventListener("selectend",ce),s.addEventListener("squeeze",ce),s.addEventListener("squeezestart",ce),s.addEventListener("squeezeend",ce),s.addEventListener("end",Se),s.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let fe={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),g=new ms(u.framebufferWidth,u.framebufferHeight,{format:Ki,type:Os,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let fe=null,we=null,ze=null;b.depth&&(ze=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=b.stencil?qr:ar,we=b.stencil?rr:Ls);let Ke={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};m=new XRWebGLBinding(s,t),p=m.createProjectionLayer(Ke),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),g=new ms(p.textureWidth,p.textureHeight,{format:Ki,type:Os,depthTexture:new Vo(p.textureWidth,p.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let dt=e.properties.get(g);dt.__ignoreDepthValues=p.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(j){for(let fe=0;fe<j.removed.length;fe++){let we=j.removed[fe],ze=v.indexOf(we);ze>=0&&(v[ze]=null,S[ze].disconnect(we))}for(let fe=0;fe<j.added.length;fe++){let we=j.added[fe],ze=v.indexOf(we);if(ze===-1){for(let dt=0;dt<S.length;dt++)if(dt>=v.length){v.push(we),ze=dt;break}else if(v[dt]===null){v[dt]=we,ze=dt;break}if(ze===-1)break}let Ke=S[ze];Ke&&Ke.connect(we)}}let q=new B,z=new B;function W(j,fe,we){q.setFromMatrixPosition(fe.matrixWorld),z.setFromMatrixPosition(we.matrixWorld);let ze=q.distanceTo(z),Ke=fe.projectionMatrix.elements,dt=we.projectionMatrix.elements,pt=Ke[14]/(Ke[10]-1),et=Ke[14]/(Ke[10]+1),re=(Ke[9]+1)/Ke[5],Z=(Ke[9]-1)/Ke[5],_n=(Ke[8]-1)/Ke[0],Me=(dt[8]+1)/dt[0],tt=pt*_n,Ge=pt*Me,Wt=ze/(-_n+Me),Be=Wt*-_n;fe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Be),j.translateZ(Wt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let C=pt+Wt,E=et+Wt,J=tt-Be,Te=Ge+(ze-Be),ye=re*et/E*C,Ae=Z*et/E*C;j.projectionMatrix.makePerspective(J,Te,ye,Ae,C,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function K(j,fe){fe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(fe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;T.near=N.near=D.near=j.near,T.far=N.far=D.far=j.far,(R!==T.near||$!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,$=T.far);let fe=j.parent,we=T.cameras;K(T,fe);for(let ze=0;ze<we.length;ze++)K(we[ze],fe);we.length===2?W(T,D,N):T.projectionMatrix.copy(D.projectionMatrix),se(j,T,fe)};function se(j,fe,we){we===null?j.matrix.copy(fe.matrixWorld):(j.matrix.copy(we.matrixWorld),j.matrix.invert(),j.matrix.multiply(fe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=bc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&u===null))return l},this.setFoveation=function(j){l=j,p!==null&&(p.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)};let le=null;function ue(j,fe){if(f=fe.getViewerPose(h||a),x=fe,f!==null){let we=f.views;u!==null&&(e.setRenderTargetFramebuffer(g,u.framebuffer),e.setRenderTarget(g));let ze=!1;we.length!==T.cameras.length&&(T.cameras.length=0,ze=!0);for(let Ke=0;Ke<we.length;Ke++){let dt=we[Ke],pt=null;if(u!==null)pt=u.getViewport(dt);else{let re=m.getViewSubImage(p,dt);pt=re.viewport,Ke===0&&(e.setRenderTargetTextures(g,re.colorTexture,p.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(g))}let et=Y[Ke];et===void 0&&(et=new ui,et.layers.enable(Ke),et.viewport=new Qn,Y[Ke]=et),et.matrix.fromArray(dt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(dt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(pt.x,pt.y,pt.width,pt.height),Ke===0&&(T.matrix.copy(et.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ze===!0&&T.cameras.push(et)}}for(let we=0;we<S.length;we++){let ze=v[we],Ke=S[we];ze!==null&&Ke!==void 0&&Ke.update(ze,fe,h||a)}le&&le(j,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),x=null}let Re=new jd;Re.setAnimationLoop(ue),this.setAnimationLoop=function(j){le=j},this.dispose=function(){}}};function Jx(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,Jd(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,S,v,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(y,g):g.isMeshToonMaterial?(r(y,g),m(y,g)):g.isMeshPhongMaterial?(r(y,g),f(y,g)):g.isMeshStandardMaterial?(r(y,g),p(y,g),g.isMeshPhysicalMaterial&&u(y,g,A)):g.isMeshMatcapMaterial?(r(y,g),x(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),b(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(a(y,g),g.isLineDashedMaterial&&o(y,g)):g.isPointsMaterial?l(y,g,S,v):g.isSpriteMaterial?h(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===gi&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===gi&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let S=e.get(g).envMap;if(S&&(y.envMap.value=S,y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function a(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function o(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function l(y,g,S,v){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*S,y.scale.value=v*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function f(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function p(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function u(y,g,S){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gi&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,g){g.matcap&&(y.matcap.value=g.matcap)}function b(y,g){let S=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let A=v.program;n.uniformBlockBinding(S,A)}function h(S,v){let A=s[S.id];A===void 0&&(x(S),A=f(S),s[S.id]=A,S.addEventListener("dispose",y));let F=v.program;n.updateUBOMapping(S,F);let D=e.render.frame;r[S.id]!==D&&(p(S),r[S.id]=D)}function f(S){let v=m();S.__bindingPointIndex=v;let A=i.createBuffer(),F=S.__size,D=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,F,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function m(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let v=s[S.id],A=S.uniforms,F=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let D=0,N=A.length;D<N;D++){let Y=Array.isArray(A[D])?A[D]:[A[D]];for(let T=0,R=Y.length;T<R;T++){let $=Y[T];if(u($,D,T,F)===!0){let ce=$.__offset,Se=Array.isArray($.value)?$.value:[$.value],k=0;for(let q=0;q<Se.length;q++){let z=Se[q],W=b(z);typeof z=="number"||typeof z=="boolean"?($.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,ce+k,$.__data)):z.isMatrix3?($.__data[0]=z.elements[0],$.__data[1]=z.elements[1],$.__data[2]=z.elements[2],$.__data[3]=0,$.__data[4]=z.elements[3],$.__data[5]=z.elements[4],$.__data[6]=z.elements[5],$.__data[7]=0,$.__data[8]=z.elements[6],$.__data[9]=z.elements[7],$.__data[10]=z.elements[8],$.__data[11]=0):(z.toArray($.__data,k),k+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ce,$.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,v,A,F){let D=S.value,N=v+"_"+A;if(F[N]===void 0)return typeof D=="number"||typeof D=="boolean"?F[N]=D:F[N]=D.clone(),!0;{let Y=F[N];if(typeof D=="number"||typeof D=="boolean"){if(Y!==D)return F[N]=D,!0}else if(Y.equals(D)===!1)return Y.copy(D),!0}return!1}function x(S){let v=S.uniforms,A=0,F=16;for(let N=0,Y=v.length;N<Y;N++){let T=Array.isArray(v[N])?v[N]:[v[N]];for(let R=0,$=T.length;R<$;R++){let ce=T[R],Se=Array.isArray(ce.value)?ce.value:[ce.value];for(let k=0,q=Se.length;k<q;k++){let z=Se[k],W=b(z),K=A%F;K!==0&&F-K<W.boundary&&(A+=F-K),ce.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=A,A+=W.storage}}}let D=A%F;return D>0&&(A+=F-D),S.__size=A,S.__cache={},this}function b(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function y(S){let v=S.target;v.removeEventListener("dispose",y);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:h,dispose:g}}var Pa=class{constructor(e={}){let{canvas:t=om(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let u=new Uint32Array(4),x=new Int32Array(4),b=null,y=null,g=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this._useLegacyLights=!1,this.toneMapping=Ns,this.toneMappingExposure=1;let v=this,A=!1,F=0,D=0,N=null,Y=-1,T=null,R=new Qn,$=new Qn,ce=null,Se=new bt(0),k=0,q=t.width,z=t.height,W=1,K=null,se=null,le=new Qn(0,0,q,z),ue=new Qn(0,0,q,z),Re=!1,j=new Ca,fe=!1,we=!1,ze=null,Ke=new Gn,dt=new Ve,pt=new B,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return N===null?W:1}let Z=n;function _n(w,X){for(let te=0;te<w.length;te++){let ie=w[te],ne=t.getContext(ie,X);if(ne!==null)return ne}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oh}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),Z===null){let X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),Z=_n(X,w),Z===null)throw _n(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,tt,Ge,Wt,Be,C,E,J,Te,ye,Ae,Qe,Fe,We,Ze,Tt,Ee,Yt,Ct,mt,rt,qe,St,Xt;function dn(){Me=new yy(Z),tt=new uy(Z,Me,e),Me.init(tt),qe=new Kx(Z,Me,tt),Ge=new Yx(Z,Me,tt),Wt=new vy(Z),Be=new Nx,C=new $x(Z,Me,Ge,Be,tt,qe,Wt),E=new fy(v),J=new gy(v),Te=new Rm(Z,tt),St=new cy(Z,Me,Te,tt),ye=new xy(Z,Te,Wt,St),Ae=new Ey(Z,ye,Te,Wt),Ct=new Sy(Z,tt,C),Tt=new dy(Be),Qe=new Ux(v,E,J,Me,tt,St,Tt),Fe=new Jx(v,Be),We=new Fx,Ze=new Gx(Me,tt),Yt=new ly(v,E,J,Ge,Ae,p,l),Ee=new qx(v,Ae,tt),Xt=new jx(Z,Wt,tt,Ge),mt=new hy(Z,Me,Wt,tt),rt=new _y(Z,Me,Wt,tt),Wt.programs=Qe.programs,v.capabilities=tt,v.extensions=Me,v.properties=Be,v.renderLists=We,v.shadowMap=Ee,v.state=Ge,v.info=Wt}dn();let wt=new Fc(v,Z);this.xr=wt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(q,z,!1))},this.getSize=function(w){return w.set(q,z)},this.setSize=function(w,X,te=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,z=X,t.width=Math.floor(w*W),t.height=Math.floor(X*W),te===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(q*W,z*W).floor()},this.setDrawingBufferSize=function(w,X,te){q=w,z=X,W=te,t.width=Math.floor(w*te),t.height=Math.floor(X*te),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,X,te,ie){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,X,te,ie),Ge.viewport(R.copy(le).multiplyScalar(W).floor())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,X,te,ie){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,X,te,ie),Ge.scissor($.copy(ue).multiplyScalar(W).floor())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){Ge.setScissorTest(Re=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(w=!0,X=!0,te=!0){let ie=0;if(w){let ne=!1;if(N!==null){let He=N.texture.format;ne=He===Wd||He===Gd||He===Vd}if(ne){let He=N.texture.type,Je=He===Os||He===Ls||He===ch||He===rr||He===Hd||He===zd,nt=Yt.getClearColor(),ut=Yt.getClearAlpha(),yt=nt.r,it=nt.g,ft=nt.b;Je?(u[0]=yt,u[1]=it,u[2]=ft,u[3]=ut,Z.clearBufferuiv(Z.COLOR,0,u)):(x[0]=yt,x[1]=it,x[2]=ft,x[3]=ut,Z.clearBufferiv(Z.COLOR,0,x))}else ie|=Z.COLOR_BUFFER_BIT}X&&(ie|=Z.DEPTH_BUFFER_BIT),te&&(ie|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),We.dispose(),Ze.dispose(),Be.dispose(),E.dispose(),J.dispose(),Ae.dispose(),St.dispose(),Xt.dispose(),Qe.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Kn),wt.removeEventListener("sessionend",$t),ze&&(ze.dispose(),ze=null),Wn.stop()};function Le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Wt.autoReset,X=Ee.enabled,te=Ee.autoUpdate,ie=Ee.needsUpdate,ne=Ee.type;dn(),Wt.autoReset=w,Ee.enabled=X,Ee.autoUpdate=te,Ee.needsUpdate=ie,Ee.type=ne}function Ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ue(w){let X=w.target;X.removeEventListener("dispose",Ue),ht(X)}function ht(w){lt(w),Be.remove(w)}function lt(w){let X=Be.get(w).programs;X!==void 0&&(X.forEach(function(te){Qe.releaseProgram(te)}),w.isShaderMaterial&&Qe.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,te,ie,ne,He){X===null&&(X=et);let Je=ne.isMesh&&ne.matrixWorld.determinant()<0,nt=ss(w,X,te,ie,ne);Ge.setMaterial(ie,Je);let ut=te.index,yt=1;if(ie.wireframe===!0){if(ut=ye.getWireframeAttribute(te),ut===void 0)return;yt=2}let it=te.drawRange,ft=te.attributes.position,cn=it.start*yt,Xe=(it.start+it.count)*yt;He!==null&&(cn=Math.max(cn,He.start*yt),Xe=Math.min(Xe,(He.start+He.count)*yt)),ut!==null?(cn=Math.max(cn,0),Xe=Math.min(Xe,ut.count)):ft!=null&&(cn=Math.max(cn,0),Xe=Math.min(Xe,ft.count));let je=Xe-cn;if(je<0||je===1/0)return;St.setup(ne,ie,nt,te,ut);let en,vt=mt;if(ut!==null&&(en=Te.get(ut),vt=rt,vt.setIndex(en)),ne.isMesh)ie.wireframe===!0?(Ge.setLineWidth(ie.wireframeLinewidth*re()),vt.setMode(Z.LINES)):vt.setMode(Z.TRIANGLES);else if(ne.isLine){let At=ie.linewidth;At===void 0&&(At=1),Ge.setLineWidth(At*re()),ne.isLineSegments?vt.setMode(Z.LINES):ne.isLineLoop?vt.setMode(Z.LINE_LOOP):vt.setMode(Z.LINE_STRIP)}else ne.isPoints?vt.setMode(Z.POINTS):ne.isSprite&&vt.setMode(Z.TRIANGLES);if(ne.isBatchedMesh)vt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)vt.renderInstances(cn,je,ne.count);else if(te.isInstancedBufferGeometry){let At=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,na=Math.min(te.instanceCount,At);vt.renderInstances(cn,je,na)}else vt.render(cn,je)};function ln(w,X,te){w.transparent===!0&&w.side===Ln&&w.forceSinglePass===!1?(w.side=gi,w.needsUpdate=!0,Kt(w,X,te),w.side=Fs,w.needsUpdate=!0,Kt(w,X,te),w.side=Ln):Kt(w,X,te)}this.compile=function(w,X,te=null){te===null&&(te=w),y=Ze.get(te),y.init(),S.push(y),te.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),w!==te&&w.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),y.setupLights(v._useLegacyLights);let ie=new Set;return w.traverse(function(ne){let He=ne.material;if(He)if(Array.isArray(He))for(let Je=0;Je<He.length;Je++){let nt=He[Je];ln(nt,te,ne),ie.add(nt)}else ln(He,te,ne),ie.add(He)}),S.pop(),y=null,ie},this.compileAsync=function(w,X,te=null){let ie=this.compile(w,X,te);return new Promise(ne=>{function He(){if(ie.forEach(function(Je){Be.get(Je).currentProgram.isReady()&&ie.delete(Je)}),ie.size===0){ne(w);return}setTimeout(He,10)}Me.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let jt=null;function On(w){jt&&jt(w)}function Kn(){Wn.stop()}function $t(){Wn.start()}let Wn=new jd;Wn.setAnimationLoop(On),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(w){jt=w,wt.setAnimationLoop(w),w===null?Wn.stop():Wn.start()},wt.addEventListener("sessionstart",Kn),wt.addEventListener("sessionend",$t),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(X),X=wt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,X,N),y=Ze.get(w,S.length),y.init(),S.push(y),Ke.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(Ke),we=this.localClippingEnabled,fe=Tt.init(this.clippingPlanes,we),b=We.get(w,g.length),b.init(),g.push(b),xi(w,X,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(K,se),this.info.render.frame++,fe===!0&&Tt.beginShadows();let te=y.state.shadowsArray;if(Ee.render(te,w,X),fe===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(b,w),y.setupLights(v._useLegacyLights),X.isArrayCamera){let ie=X.cameras;for(let ne=0,He=ie.length;ne<He;ne++){let Je=ie[ne];Vi(b,w,Je,Je.viewport)}}else Vi(b,w,X);N!==null&&(C.updateMultisampleRenderTarget(N),C.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(v,w,X),St.resetDefaultState(),Y=-1,T=null,S.pop(),S.length>0?y=S[S.length-1]:y=null,g.pop(),g.length>0?b=g[g.length-1]:b=null};function xi(w,X,te,ie){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){ie&&pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ke);let Je=Ae.update(w),nt=w.material;nt.visible&&b.push(w,Je,nt,te,pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){let Je=Ae.update(w),nt=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pt.copy(w.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),pt.copy(Je.boundingSphere.center)),pt.applyMatrix4(w.matrixWorld).applyMatrix4(Ke)),Array.isArray(nt)){let ut=Je.groups;for(let yt=0,it=ut.length;yt<it;yt++){let ft=ut[yt],cn=nt[ft.materialIndex];cn&&cn.visible&&b.push(w,Je,cn,te,pt.z,ft)}}else nt.visible&&b.push(w,Je,nt,te,pt.z,null)}}let He=w.children;for(let Je=0,nt=He.length;Je<nt;Je++)xi(He[Je],X,te,ie)}function Vi(w,X,te,ie){let ne=w.opaque,He=w.transmissive,Je=w.transparent;y.setupLightsView(te),fe===!0&&Tt.setGlobalState(v.clippingPlanes,te),He.length>0&&Rn(ne,He,X,te),ie&&Ge.viewport(R.copy(ie)),ne.length>0&&Qt(ne,X,te),He.length>0&&Qt(He,X,te),Je.length>0&&Qt(Je,X,te),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Rn(w,X,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;let He=tt.isWebGL2;ze===null&&(ze=new ms(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?wa:Os,minFilter:Ta,samples:He?4:0})),v.getDrawingBufferSize(dt),He?ze.setSize(dt.x,dt.y):ze.setSize(Sc(dt.x),Sc(dt.y));let Je=v.getRenderTarget();v.setRenderTarget(ze),v.getClearColor(Se),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();let nt=v.toneMapping;v.toneMapping=Ns,Qt(w,te,ie),C.updateMultisampleRenderTarget(ze),C.updateRenderTargetMipmap(ze);let ut=!1;for(let yt=0,it=X.length;yt<it;yt++){let ft=X[yt],cn=ft.object,Xe=ft.geometry,je=ft.material,en=ft.group;if(je.side===Ln&&cn.layers.test(ie.layers)){let vt=je.side;je.side=gi,je.needsUpdate=!0,gt(cn,te,ie,Xe,je,en),je.side=vt,je.needsUpdate=!0,ut=!0}}ut===!0&&(C.updateMultisampleRenderTarget(ze),C.updateRenderTargetMipmap(ze)),v.setRenderTarget(Je),v.setClearColor(Se,k),v.toneMapping=nt}function Qt(w,X,te){let ie=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,He=w.length;ne<He;ne++){let Je=w[ne],nt=Je.object,ut=Je.geometry,yt=ie===null?Je.material:ie,it=Je.group;nt.layers.test(te.layers)&&gt(nt,X,te,ut,yt,it)}}function gt(w,X,te,ie,ne,He){w.onBeforeRender(v,X,te,ie,ne,He),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(v,X,te,ie,w,He),ne.transparent===!0&&ne.side===Ln&&ne.forceSinglePass===!1?(ne.side=gi,ne.needsUpdate=!0,v.renderBufferDirect(te,X,ie,ne,w,He),ne.side=Fs,ne.needsUpdate=!0,v.renderBufferDirect(te,X,ie,ne,w,He),ne.side=Ln):v.renderBufferDirect(te,X,ie,ne,w,He),w.onAfterRender(v,X,te,ie,ne,He)}function Kt(w,X,te){X.isScene!==!0&&(X=et);let ie=Be.get(w),ne=y.state.lights,He=y.state.shadowsArray,Je=ne.state.version,nt=Qe.getParameters(w,ne.state,He,X,te),ut=Qe.getProgramCacheKey(nt),yt=ie.programs;ie.environment=w.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(w.isMeshStandardMaterial?J:E).get(w.envMap||ie.environment),yt===void 0&&(w.addEventListener("dispose",Ue),yt=new Map,ie.programs=yt);let it=yt.get(ut);if(it!==void 0){if(ie.currentProgram===it&&ie.lightsStateVersion===Je)return Li(w,nt),it}else nt.uniforms=Qe.getUniforms(w),w.onBuild(te,nt,v),w.onBeforeCompile(nt,v),it=Qe.acquireProgram(nt,ut),yt.set(ut,it),ie.uniforms=nt.uniforms;let ft=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ft.clippingPlanes=Tt.uniform),Li(w,nt),ie.needsLights=_s(w),ie.lightsStateVersion=Je,ie.needsLights&&(ft.ambientLightColor.value=ne.state.ambient,ft.lightProbe.value=ne.state.probe,ft.directionalLights.value=ne.state.directional,ft.directionalLightShadows.value=ne.state.directionalShadow,ft.spotLights.value=ne.state.spot,ft.spotLightShadows.value=ne.state.spotShadow,ft.rectAreaLights.value=ne.state.rectArea,ft.ltc_1.value=ne.state.rectAreaLTC1,ft.ltc_2.value=ne.state.rectAreaLTC2,ft.pointLights.value=ne.state.point,ft.pointLightShadows.value=ne.state.pointShadow,ft.hemisphereLights.value=ne.state.hemi,ft.directionalShadowMap.value=ne.state.directionalShadowMap,ft.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ft.spotShadowMap.value=ne.state.spotShadowMap,ft.spotLightMatrix.value=ne.state.spotLightMatrix,ft.spotLightMap.value=ne.state.spotLightMap,ft.pointShadowMap.value=ne.state.pointShadowMap,ft.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.currentProgram=it,ie.uniformsList=null,it}function Ii(w){if(w.uniformsList===null){let X=w.currentProgram.getUniforms();w.uniformsList=Gr.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Li(w,X){let te=Be.get(w);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function ss(w,X,te,ie,ne){X.isScene!==!0&&(X=et),C.resetTextureUnits();let He=X.fog,Je=ie.isMeshStandardMaterial?X.environment:null,nt=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ps,ut=(ie.isMeshStandardMaterial?J:E).get(ie.envMap||Je),yt=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ft=!!te.morphAttributes.position,cn=!!te.morphAttributes.normal,Xe=!!te.morphAttributes.color,je=Ns;ie.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(je=v.toneMapping);let en=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,vt=en!==void 0?en.length:0,At=Be.get(ie),na=y.state.lights;if(fe===!0&&(we===!0||w!==T)){let vn=w===T&&ie.id===Y;Tt.setState(ie,w,vn)}let hn=!1;ie.version===At.__version?(At.needsLights&&At.lightsStateVersion!==na.state.version||At.outputColorSpace!==nt||ne.isBatchedMesh&&At.batching===!1||!ne.isBatchedMesh&&At.batching===!0||ne.isInstancedMesh&&At.instancing===!1||!ne.isInstancedMesh&&At.instancing===!0||ne.isSkinnedMesh&&At.skinning===!1||!ne.isSkinnedMesh&&At.skinning===!0||ne.isInstancedMesh&&At.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&At.instancingColor===!1&&ne.instanceColor!==null||At.envMap!==ut||ie.fog===!0&&At.fog!==He||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Tt.numPlanes||At.numIntersection!==Tt.numIntersection)||At.vertexAlphas!==yt||At.vertexTangents!==it||At.morphTargets!==ft||At.morphNormals!==cn||At.morphColors!==Xe||At.toneMapping!==je||tt.isWebGL2===!0&&At.morphTargetsCount!==vt)&&(hn=!0):(hn=!0,At.__version=ie.version);let kt=At.currentProgram;hn===!0&&(kt=Kt(ie,X,ne));let _i=!1,pi=!1,Fn=!1,Et=kt.getUniforms(),Tn=At.uniforms;if(Ge.useProgram(kt.program)&&(_i=!0,pi=!0,Fn=!0),ie.id!==Y&&(Y=ie.id,pi=!0),_i||T!==w){Et.setValue(Z,"projectionMatrix",w.projectionMatrix),Et.setValue(Z,"viewMatrix",w.matrixWorldInverse);let vn=Et.map.cameraPosition;vn!==void 0&&vn.setValue(Z,pt.setFromMatrixPosition(w.matrixWorld)),tt.logarithmicDepthBuffer&&Et.setValue(Z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Et.setValue(Z,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,pi=!0,Fn=!0)}if(ne.isSkinnedMesh){Et.setOptional(Z,ne,"bindMatrix"),Et.setOptional(Z,ne,"bindMatrixInverse");let vn=ne.skeleton;vn&&(tt.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Et.setValue(Z,"boneTexture",vn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(Et.setOptional(Z,ne,"batchingTexture"),Et.setValue(Z,"batchingTexture",ne._matricesTexture,C));let Di=te.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0&&tt.isWebGL2===!0)&&Ct.update(ne,te,kt),(pi||At.receiveShadow!==ne.receiveShadow)&&(At.receiveShadow=ne.receiveShadow,Et.setValue(Z,"receiveShadow",ne.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Tn.envMap.value=ut,Tn.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),pi&&(Et.setValue(Z,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&rs(Tn,Fn),He&&ie.fog===!0&&Fe.refreshFogUniforms(Tn,He),Fe.refreshMaterialUniforms(Tn,ie,W,z,ze),Gr.upload(Z,Ii(At),Tn,C)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Gr.upload(Z,Ii(At),Tn,C),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Et.setValue(Z,"center",ne.center),Et.setValue(Z,"modelViewMatrix",ne.modelViewMatrix),Et.setValue(Z,"normalMatrix",ne.normalMatrix),Et.setValue(Z,"modelMatrix",ne.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let vn=ie.uniformsGroups;for(let ii=0,vi=vn.length;ii<vi;ii++)if(tt.isWebGL2){let vs=vn[ii];Xt.update(vs,kt),Xt.bind(vs,kt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kt}function rs(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function _s(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,X,te){Be.get(w.texture).__webglTexture=X,Be.get(w.depthTexture).__webglTexture=te;let ie=Be.get(w);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,X){let te=Be.get(w);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,te=0){N=w,F=X,D=te;let ie=!0,ne=null,He=!1,Je=!1;if(w){let ut=Be.get(w);ut.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(Z.FRAMEBUFFER,null),ie=!1):ut.__webglFramebuffer===void 0?C.setupRenderTarget(w):ut.__hasExternalTextures&&C.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);let yt=w.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(Je=!0);let it=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(it[X])?ne=it[X][te]:ne=it[X],He=!0):tt.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?ne=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(it)?ne=it[te]:ne=it,R.copy(w.viewport),$.copy(w.scissor),ce=w.scissorTest}else R.copy(le).multiplyScalar(W).floor(),$.copy(ue).multiplyScalar(W).floor(),ce=Re;if(Ge.bindFramebuffer(Z.FRAMEBUFFER,ne)&&tt.drawBuffers&&ie&&Ge.drawBuffers(w,ne),Ge.viewport(R),Ge.scissor($),Ge.setScissorTest(ce),He){let ut=Be.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+X,ut.__webglTexture,te)}else if(Je){let ut=Be.get(w.texture),yt=X||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ut.__webglTexture,te||0,yt)}Y=-1},this.readRenderTargetPixels=function(w,X,te,ie,ne,He,Je){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Je!==void 0&&(nt=nt[Je]),nt){Ge.bindFramebuffer(Z.FRAMEBUFFER,nt);try{let ut=w.texture,yt=ut.format,it=ut.type;if(yt!==Ki&&qe.convert(yt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ft=it===wa&&(Me.has("EXT_color_buffer_half_float")||tt.isWebGL2&&Me.has("EXT_color_buffer_float"));if(it!==Os&&qe.convert(it)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Ds&&(tt.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-ie&&te>=0&&te<=w.height-ne&&Z.readPixels(X,te,ie,ne,qe.convert(yt),qe.convert(it),He)}finally{let ut=N!==null?Be.get(N).__webglFramebuffer:null;Ge.bindFramebuffer(Z.FRAMEBUFFER,ut)}}},this.copyFramebufferToTexture=function(w,X,te=0){let ie=Math.pow(2,-te),ne=Math.floor(X.image.width*ie),He=Math.floor(X.image.height*ie);C.setTexture2D(X,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,te,0,0,w.x,w.y,ne,He),Ge.unbindTexture()},this.copyTextureToTexture=function(w,X,te,ie=0){let ne=X.image.width,He=X.image.height,Je=qe.convert(te.format),nt=qe.convert(te.type);C.setTexture2D(te,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,te.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,te.unpackAlignment),X.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ie,w.x,w.y,ne,He,Je,nt,X.image.data):X.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ie,w.x,w.y,X.mipmaps[0].width,X.mipmaps[0].height,Je,X.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,ie,w.x,w.y,Je,nt,X.image),ie===0&&te.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(w,X,te,ie,ne=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let He=w.max.x-w.min.x+1,Je=w.max.y-w.min.y+1,nt=w.max.z-w.min.z+1,ut=qe.convert(ie.format),yt=qe.convert(ie.type),it;if(ie.isData3DTexture)C.setTexture3D(ie,0),it=Z.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)C.setTexture2DArray(ie,0),it=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ie.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ie.unpackAlignment);let ft=Z.getParameter(Z.UNPACK_ROW_LENGTH),cn=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Xe=Z.getParameter(Z.UNPACK_SKIP_PIXELS),je=Z.getParameter(Z.UNPACK_SKIP_ROWS),en=Z.getParameter(Z.UNPACK_SKIP_IMAGES),vt=te.isCompressedTexture?te.mipmaps[ne]:te.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,vt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,vt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,w.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,w.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,w.min.z),te.isDataTexture||te.isData3DTexture?Z.texSubImage3D(it,ne,X.x,X.y,X.z,He,Je,nt,ut,yt,vt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(it,ne,X.x,X.y,X.z,He,Je,nt,ut,vt.data)):Z.texSubImage3D(it,ne,X.x,X.y,X.z,He,Je,nt,ut,yt,vt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ft),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,cn),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Xe),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,je),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,en),ne===0&&ie.generateMipmaps&&Z.generateMipmap(it),Ge.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Ge.unbindTexture()},this.resetState=function(){F=0,D=0,N=null,Ge.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===hh?"display-p3":"srgb",t.unpackColorSpace=un.workingColorSpace===al?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ti?or:qd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===or?ti:ps}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Bc=class extends Pa{};Bc.prototype.isWebGL1Renderer=!0;var Go=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wo=class extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ia=class extends Hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sd=new B,Ed=new B,Td=new Gn,uc=new Aa,_o=new Yr,kc=class extends di{constructor(e=new fi,t=new Ia){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Sd.fromBufferAttribute(t,s-1),Ed.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Sd.distanceTo(Ed);e.setAttribute("lineDistance",new xn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Td.copy(s).invert(),uc.copy(e.ray).applyMatrix4(Td);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=new B,f=new B,m=new B,p=new B,u=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){let g=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=u){let F=x.getX(v),D=x.getX(v+1);if(h.fromBufferAttribute(y,F),f.fromBufferAttribute(y,D),uc.distanceSqToSegment(h,f,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let Y=e.ray.origin.distanceTo(p);Y<e.near||Y>e.far||t.push({distance:Y,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,a.start),S=Math.min(y.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=u){if(h.fromBufferAttribute(y,v),f.fromBufferAttribute(y,v+1),uc.distanceSqToSegment(h,f,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(p);D<e.near||D>e.far||t.push({distance:D,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},wd=new B,Ad=new B,Xo=class extends kc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wd.fromBufferAttribute(t,s),Ad.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wd.distanceTo(Ad);e.setAttribute("lineDistance",new xn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qo=class extends ki{constructor(e,t,n,s,r,a,o,l,h){super(e,t,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let f=n[s],p=n[s+1]-f,u=(a-f)/p;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ve:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new B,s=[],r=[],a=[],o=new B,l=new Gn;for(let u=0;u<=e;u++){let x=u/e;s[u]=this.getTangentAt(x,new B)}r[0]=new B,a[0]=new B;let h=Number.MAX_VALUE,f=Math.abs(s[0].x),m=Math.abs(s[0].y),p=Math.abs(s[0].z);f<=h&&(h=f,n.set(1,0,0)),m<=h&&(h=m,n.set(0,1,0)),p<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(oi(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,x))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(oi(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],u*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},La=class extends Hi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Ve,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=l-this.aX,u=h-this.aY;l=p*f-u*m+this.aX,h=p*m+u*f+this.aY}return n.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hc=class extends La{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function dh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,f,m){let p=(a-r)/h-(o-r)/(h+f)+(o-a)/f,u=(o-a)/f-(l-a)/(f+m)+(l-o)/m;p*=f,u*=f,s(a,o,p,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var vo=new B,dc=new dh,fc=new dh,pc=new dh,zc=class extends Hi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,f;this.closed||o>0?h=s[(o-1)%r]:(vo.subVectors(s[0],s[1]).add(s[0]),h=vo);let m=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?f=s[(o+2)%r]:(vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=vo),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,x=Math.pow(h.distanceToSquared(m),u),b=Math.pow(m.distanceToSquared(p),u),y=Math.pow(p.distanceToSquared(f),u);b<1e-4&&(b=1),x<1e-4&&(x=b),y<1e-4&&(y=b),dc.initNonuniformCatmullRom(h.x,m.x,p.x,f.x,x,b,y),fc.initNonuniformCatmullRom(h.y,m.y,p.y,f.y,x,b,y),pc.initNonuniformCatmullRom(h.z,m.z,p.z,f.z,x,b,y)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(h.x,m.x,p.x,f.x,this.tension),fc.initCatmullRom(h.y,m.y,p.y,f.y,this.tension),pc.initCatmullRom(h.z,m.z,p.z,f.z,this.tension));return n.set(dc.calc(l),fc.calc(l),pc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Qx(i,e){let t=1-i;return t*t*e}function e_(i,e){return 2*(1-i)*i*e}function t_(i,e){return i*i*e}function Ma(i,e,t,n){return Qx(i,e)+e_(i,t)+t_(i,n)}function n_(i,e){let t=1-i;return t*t*t*e}function i_(i,e){let t=1-i;return 3*t*t*i*e}function s_(i,e){return 3*(1-i)*i*i*e}function r_(i,e){return i*i*i*e}function ba(i,e,t,n,s){return n_(i,e)+i_(i,t)+s_(i,n)+r_(i,s)}var Yo=class extends Hi{constructor(e=new Ve,t=new Ve,n=new Ve,s=new Ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ve){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ba(e,s.x,r.x,a.x,o.x),ba(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vc=class extends Hi{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ba(e,s.x,r.x,a.x,o.x),ba(e,s.y,r.y,a.y,o.y),ba(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$o=class extends Hi{constructor(e=new Ve,t=new Ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends Hi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends Hi{constructor(e=new Ve,t=new Ve,n=new Ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ve){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ma(e,s.x,r.x,a.x),Ma(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wc=class extends Hi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ma(e,s.x,r.x,a.x),Ma(e,s.y,r.y,a.y),Ma(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zo=class extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ve){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],f=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(Rd(o,l.x,h.x,f.x,m.x),Rd(o,l.y,h.y,f.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ve().fromArray(s))}return this}},Cd=Object.freeze({__proto__:null,ArcCurve:Hc,CatmullRomCurve3:zc,CubicBezierCurve:Yo,CubicBezierCurve3:Vc,EllipseCurve:La,LineCurve:$o,LineCurve3:Gc,QuadraticBezierCurve:Ko,QuadraticBezierCurve3:Wc,SplineCurve:Zo}),Xc=class extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){let f=l[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Cd[s.type]().fromJSON(s))}return this}},Kr=class extends Xc{constructor(e){super(),this.type="Path",this.currentPoint=new Ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $o(this.currentPoint.clone(),new Ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ko(this.currentPoint.clone(),new Ve(e,t),new Ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Yo(this.currentPoint.clone(),new Ve(e,t),new Ve(n,s),new Ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Zo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let h=new La(e,t,n,s,r,a,o,l);if(this.curves.length>0){let m=h.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(h);let f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var zs=class i extends fi{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let f=[],m=[],p=[],u=[],x=0,b=[],y=n/2,g=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(p,3)),this.setAttribute("uv",new xn(u,2));function S(){let A=new B,F=new B,D=0,N=(t-e)/n;for(let Y=0;Y<=r;Y++){let T=[],R=Y/r,$=R*(t-e)+e;for(let ce=0;ce<=s;ce++){let Se=ce/s,k=Se*l+o,q=Math.sin(k),z=Math.cos(k);F.x=$*q,F.y=-R*n+y,F.z=$*z,m.push(F.x,F.y,F.z),A.set(q,N,z).normalize(),p.push(A.x,A.y,A.z),u.push(Se,1-R),T.push(x++)}b.push(T)}for(let Y=0;Y<s;Y++)for(let T=0;T<r;T++){let R=b[T][Y],$=b[T+1][Y],ce=b[T+1][Y+1],Se=b[T][Y+1];f.push(R,$,Se),f.push($,ce,Se),D+=6}h.addGroup(g,D,0),g+=D}function v(A){let F=x,D=new Ve,N=new B,Y=0,T=A===!0?e:t,R=A===!0?1:-1;for(let ce=1;ce<=s;ce++)m.push(0,y*R,0),p.push(0,R,0),u.push(.5,.5),x++;let $=x;for(let ce=0;ce<=s;ce++){let k=ce/s*l+o,q=Math.cos(k),z=Math.sin(k);N.x=T*z,N.y=y*R,N.z=T*q,m.push(N.x,N.y,N.z),p.push(0,R,0),D.x=q*.5+.5,D.y=z*.5*R+.5,u.push(D.x,D.y),x++}for(let ce=0;ce<s;ce++){let Se=F+ce,k=$+ce;A===!0?f.push(k,k+1,Se):f.push(k+1,k,Se),Y+=3}h.addGroup(g,Y,A===!0?1:2),g+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ri=class i extends zs{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jo=class i extends fi{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),h(n),f(),this.setAttribute("position",new xn(r,3)),this.setAttribute("normal",new xn(r.slice(),3)),this.setAttribute("uv",new xn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new B,A=new B,F=new B;for(let D=0;D<t.length;D+=3)u(t[D+0],v),u(t[D+1],A),u(t[D+2],F),l(v,A,F,S)}function l(S,v,A,F){let D=F+1,N=[];for(let Y=0;Y<=D;Y++){N[Y]=[];let T=S.clone().lerp(A,Y/D),R=v.clone().lerp(A,Y/D),$=D-Y;for(let ce=0;ce<=$;ce++)ce===0&&Y===D?N[Y][ce]=T:N[Y][ce]=T.clone().lerp(R,ce/$)}for(let Y=0;Y<D;Y++)for(let T=0;T<2*(D-Y)-1;T++){let R=Math.floor(T/2);T%2===0?(p(N[Y][R+1]),p(N[Y+1][R]),p(N[Y][R])):(p(N[Y][R+1]),p(N[Y+1][R+1]),p(N[Y+1][R]))}}function h(S){let v=new B;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(S),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function f(){let S=new B;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let A=y(S)/2/Math.PI+.5,F=g(S)/Math.PI+.5;a.push(A,1-F)}x(),m()}function m(){for(let S=0;S<a.length;S+=6){let v=a[S+0],A=a[S+2],F=a[S+4],D=Math.max(v,A,F),N=Math.min(v,A,F);D>.9&&N<.1&&(v<.2&&(a[S+0]+=1),A<.2&&(a[S+2]+=1),F<.2&&(a[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function u(S,v){let A=S*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function x(){let S=new B,v=new B,A=new B,F=new B,D=new Ve,N=new Ve,Y=new Ve;for(let T=0,R=0;T<r.length;T+=9,R+=6){S.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),A.set(r[T+6],r[T+7],r[T+8]),D.set(a[R+0],a[R+1]),N.set(a[R+2],a[R+3]),Y.set(a[R+4],a[R+5]),F.copy(S).add(v).add(A).divideScalar(3);let $=y(F);b(D,R+0,S,$),b(N,R+2,v,$),b(Y,R+4,A,$)}}function b(S,v,A,F){F<0&&S.x===1&&(a[v]=S.x-1),A.x===0&&A.z===0&&(a[v]=F/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},jo=class i extends Jo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Zr=class extends Kr{constructor(e){super(e),this.uuid=jr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Kr().fromJSON(s))}return this}},a_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=rf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h,f,m,p,u;if(n&&(r=u_(i,e,r,t)),i.length>80*t){o=h=i[0],l=f=i[1];for(let x=t;x<s;x+=t)m=i[x],p=i[x+1],m<o&&(o=m),p<l&&(l=p),m>h&&(h=m),p>f&&(f=p);u=Math.max(h-o,f-l),u=u!==0?32767/u:0}return Da(r,a,t,o,l,u,0),a}};function rf(i,e,t,n,s){let r,a;if(s===b_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Pd(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Pd(r,i[r],i[r+1],a);return a&&ll(a,a.next)&&(Na(a),a=a.next),a}function cr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ll(t,t.next)||Dn(t.prev,t,t.next)===0)){if(Na(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Da(i,e,t,n,s,r,a){if(!i)return;!a&&r&&g_(i,n,s,r);let o=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?l_(i,n,s,r):o_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),Na(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=c_(cr(i),e,t),Da(i,e,t,n,s,r,2)):a===2&&h_(i,e,t,n,s,r):Da(cr(i),e,t,n,s,r,1);break}}}function o_(i){let e=i.prev,t=i,n=i.next;if(Dn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,h=n.y,f=s<r?s<a?s:a:r<a?r:a,m=o<l?o<h?o:h:l<h?l:h,p=s>r?s>a?s:a:r>a?r:a,u=o>l?o>h?o:h:l>h?l:h,x=n.next;for(;x!==e;){if(x.x>=f&&x.x<=p&&x.y>=m&&x.y<=u&&Hr(s,o,r,l,a,h,x.x,x.y)&&Dn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function l_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dn(s,r,a)>=0)return!1;let o=s.x,l=r.x,h=a.x,f=s.y,m=r.y,p=a.y,u=o<l?o<h?o:h:l<h?l:h,x=f<m?f<p?f:p:m<p?m:p,b=o>l?o>h?o:h:l>h?l:h,y=f>m?f>p?f:p:m>p?m:p,g=qc(u,x,e,t,n),S=qc(b,y,e,t,n),v=i.prevZ,A=i.nextZ;for(;v&&v.z>=g&&A&&A.z<=S;){if(v.x>=u&&v.x<=b&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Hr(o,f,l,m,h,p,v.x,v.y)&&Dn(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=u&&A.x<=b&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Hr(o,f,l,m,h,p,A.x,A.y)&&Dn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=g;){if(v.x>=u&&v.x<=b&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Hr(o,f,l,m,h,p,v.x,v.y)&&Dn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=S;){if(A.x>=u&&A.x<=b&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Hr(o,f,l,m,h,p,A.x,A.y)&&Dn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function c_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!ll(s,r)&&af(s,n,n.next,r)&&Ua(s,r)&&Ua(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Na(n),Na(n.next),n=i=r),n=n.next}while(n!==i);return cr(n)}function h_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&__(a,o)){let l=of(a,o);a=cr(a,a.next),l=cr(l,l.next),Da(a,e,t,n,s,r,0),Da(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function u_(i,e,t,n){let s=[],r,a,o,l,h;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,h=rf(i,o,l,n,!1),h===h.next&&(h.steiner=!0),s.push(x_(h));for(s.sort(d_),r=0;r<s.length;r++)t=f_(s[r],t);return t}function d_(i,e){return i.x-e.x}function f_(i,e){let t=p_(i,e);if(!t)return e;let n=of(t,i);return cr(n,n.next),cr(t,t.next)}function p_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,h=s.y,f=1/0,m;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Hr(a<h?r:n,a,l,h,a<h?n:r,a,t.x,t.y)&&(m=Math.abs(a-t.y)/(r-t.x),Ua(t,i)&&(m<f||m===f&&(t.x>s.x||t.x===s.x&&m_(s,t)))&&(s=t,f=m)),t=t.next;while(t!==o);return s}function m_(i,e){return Dn(i.prev,i,e.prev)<0&&Dn(e.next,i,i.next)<0}function g_(i,e,t,n){let s=i;do s.z===0&&(s.z=qc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,y_(s)}function y_(i){let e,t,n,s,r,a,o,l,h=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<h&&(o++,n=n.nextZ,!!n);e++);for(l=h;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,h*=2}while(a>1);return i}function qc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function x_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Hr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function __(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!v_(i,e)&&(Ua(i,e)&&Ua(e,i)&&M_(i,e)&&(Dn(i.prev,i,e.prev)||Dn(i,e.prev,e))||ll(i,e)&&Dn(i.prev,i,i.next)>0&&Dn(e.prev,e,e.next)>0)}function Dn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ll(i,e){return i.x===e.x&&i.y===e.y}function af(i,e,t,n){let s=bo(Dn(i,e,t)),r=bo(Dn(i,e,n)),a=bo(Dn(t,n,i)),o=bo(Dn(t,n,e));return!!(s!==r&&a!==o||s===0&&Mo(i,t,e)||r===0&&Mo(i,n,e)||a===0&&Mo(t,i,n)||o===0&&Mo(t,e,n))}function Mo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function bo(i){return i>0?1:i<0?-1:0}function v_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&af(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ua(i,e){return Dn(i.prev,i,i.next)<0?Dn(i,e,i.next)>=0&&Dn(i,i.prev,e)>=0:Dn(i,e,i.prev)<0||Dn(i,i.next,e)<0}function M_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function of(i,e){let t=new Yc(i.i,i.x,i.y),n=new Yc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pd(i,e,t,n){let s=new Yc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Na(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function b_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Sa=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Id(e),Ld(n,e);let a=e.length;t.forEach(Id);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ld(n,t[l]);let o=a_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Id(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ld(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Qo=class i extends Jo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Oa=class i extends fi{constructor(e=new Zr([new Ve(0,.5),new Ve(-.5,-.5),new Ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(o,l,f),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new xn(s,3)),this.setAttribute("normal",new xn(r,3)),this.setAttribute("uv",new xn(a,2));function h(f){let m=s.length/3,p=f.extractPoints(t),u=p.shape,x=p.holes;Sa.isClockWise(u)===!1&&(u=u.reverse());for(let y=0,g=x.length;y<g;y++){let S=x[y];Sa.isClockWise(S)===!0&&(x[y]=S.reverse())}let b=Sa.triangulateShape(u,x);for(let y=0,g=x.length;y<g;y++){let S=x[y];u=u.concat(S)}for(let y=0,g=u.length;y<g;y++){let S=u[y];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let y=0,g=b.length;y<g;y++){let S=b[y],v=S[0]+m,A=S[1]+m,F=S[2]+m;n.push(v,A,F),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return S_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function S_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ns=class i extends fi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),h=0,f=[],m=new B,p=new B,u=[],x=[],b=[],y=[];for(let g=0;g<=n;g++){let S=[],v=g/n,A=0;g===0&&a===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let F=0;F<=t;F++){let D=F/t;m.x=-e*Math.cos(s+D*r)*Math.sin(a+v*o),m.y=e*Math.cos(a+v*o),m.z=e*Math.sin(s+D*r)*Math.sin(a+v*o),x.push(m.x,m.y,m.z),p.copy(m).normalize(),b.push(p.x,p.y,p.z),y.push(D+A,1-v),S.push(h++)}f.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let v=f[g][S+1],A=f[g][S],F=f[g+1][S],D=f[g+1][S+1];(g!==0||a>0)&&u.push(v,A,D),(g!==n-1||l<Math.PI)&&u.push(A,F,D)}this.setIndex(u),this.setAttribute("position",new xn(x,3)),this.setAttribute("normal",new xn(b,3)),this.setAttribute("uv",new xn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var el=class i extends fi{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],h=[],f=new B,m=new B,p=new B;for(let u=0;u<=n;u++)for(let x=0;x<=s;x++){let b=x/s*r,y=u/n*Math.PI*2;m.x=(e+t*Math.cos(y))*Math.cos(b),m.y=(e+t*Math.cos(y))*Math.sin(b),m.z=t*Math.sin(y),o.push(m.x,m.y,m.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),p.subVectors(m,f).normalize(),l.push(p.x,p.y,p.z),h.push(x/s),h.push(u/n)}for(let u=1;u<=n;u++)for(let x=1;x<=s;x++){let b=(s+1)*u+x-1,y=(s+1)*(u-1)+x-1,g=(s+1)*(u-1)+x,S=(s+1)*u+x;a.push(b,y,S),a.push(y,g,S)}this.setIndex(a),this.setAttribute("position",new xn(o,3)),this.setAttribute("normal",new xn(l,3)),this.setAttribute("uv",new xn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var $n=class extends Hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yd,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function So(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function E_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Jr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$c=class extends Jr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Du,endingEnd:Du}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uu:r=e,o=2*t-n;break;case Nu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uu:a=e,l=2*n-t;break;case Nu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,f=this._offsetPrev,m=this._offsetNext,p=this._weightPrev,u=this._weightNext,x=(n-t)/(s-t),b=x*x,y=b*x,g=-p*y+2*p*b-p*x,S=(1+p)*y+(-1.5-2*p)*b+(-.5+p)*x+1,v=(-1-u)*y+(1.5+u)*b+.5*x,A=u*y-u*b;for(let F=0;F!==o;++F)r[F]=g*a[f+F]+S*a[h+F]+v*a[l+F]+A*a[m+F];return r}},Kc=class extends Jr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,f=(n-t)/(s-t),m=1-f;for(let p=0;p!==o;++p)r[p]=a[h+p]*m+a[l+p]*f;return r}},Zc=class extends Jr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=So(t,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $c(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case To:t=this.InterpolantFactoryMethodDiscrete;break;case wo:t=this.InterpolantFactoryMethodLinear;break;case Hl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return To;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return Hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&E_(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Hl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=e[o],f=e[o+1];if(h!==f&&(o!==1||h!==e[0]))if(s)l=!0;else{let m=o*n,p=m-n,u=m+n;for(let x=0;x!==n;++x){let b=t[m+x];if(b!==t[p+x]||b!==t[u+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,p=a*n;for(let u=0;u!==n;++u)t[p+u]=t[m+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Zi.prototype.TimeBufferType=Float32Array;Zi.prototype.ValueBufferType=Float32Array;Zi.prototype.DefaultInterpolation=wo;var hr=class extends Zi{};hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=To;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends Zi{};Jc.prototype.ValueTypeName="color";var jc=class extends Zi{};jc.prototype.ValueTypeName="number";var Qc=class extends Jr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),h=e*o;for(let f=h+o;h!==f;h+=4)ks.slerpFlat(r,0,a,h-o,a,h,l);return r}},Fa=class extends Zi{InterpolantFactoryMethodLinear(e){return new Qc(this.times,this.values,this.getValueSize(),e)}};Fa.prototype.ValueTypeName="quaternion";Fa.prototype.DefaultInterpolation=wo;Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends Zi{};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=To;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var eh=class extends Zi{};eh.prototype.ValueTypeName="vector";var th=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,m){return h.push(f,m),this},this.removeHandler=function(f){let m=h.indexOf(f);return m!==-1&&h.splice(m,2),this},this.getHandler=function(f){for(let m=0,p=h.length;m<p;m+=2){let u=h[m],x=h[m+1];if(u.global&&(u.lastIndex=0),u.test(f))return x}return null}}},T_=new th,nh=class{constructor(e){this.manager=e!==void 0?e:T_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};nh.DEFAULT_MATERIAL_NAME="__DEFAULT";var tl=class extends di{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var mc=new Gn,Dd=new B,Ud=new B,ih=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Gn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Qn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dd),Ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ud),t.updateMatrixWorld(),mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var sh=class extends ih{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nl=class extends tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(di.DEFAULT_UP),this.updateMatrix(),this.target=new di,this.shadow=new sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},il=class extends tl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var fh="\\[\\]\\.:\\/",w_=new RegExp("["+fh+"]","g"),ph="[^"+fh+"]",A_="[^"+fh.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",ph),C_=/(WCOD+)?/.source.replace("WCOD",A_),P_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),I_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),L_=new RegExp("^"+R_+C_+P_+I_+"$"),D_=["material","materials","bones","map"],rh=class{constructor(e,t,n){let s=n||An.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},An=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(w_,"")}static parseTrackName(e){let t=L_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);D_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[s];if(a===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};An.Composite=rh;An.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};An.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};An.prototype.GetterByBindingType=[An.prototype._getValue_direct,An.prototype._getValue_array,An.prototype._getValue_arrayElement,An.prototype._getValue_toArray];An.prototype.SetterByBindingTypeAndVersioning=[[An.prototype._setValue_direct,An.prototype._setValue_direct_setNeedsUpdate,An.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[An.prototype._setValue_array,An.prototype._setValue_array_setNeedsUpdate,An.prototype._setValue_array_setMatrixWorldNeedsUpdate],[An.prototype._setValue_arrayElement,An.prototype._setValue_arrayElement_setNeedsUpdate,An.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[An.prototype._setValue_fromArray,An.prototype._setValue_fromArray_setNeedsUpdate,An.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $_=new Float32Array(1);var sl=class{constructor(e,t,n=0,s=1/0){this.ray=new Aa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ah(e,this,n,t),n.sort(Nd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ah(e[s],this,n,t);return n.sort(Nd),n}};function Nd(i,e){return i.distance-e.distance}function ah(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)ah(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);var mh=35,gh=25,yh=.29,_t=.95,ni=.35,ys=200,Ci=7,Vs=300,xs=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function N_(i){let e=typeof i=="string"?O_(i):i>>>0;return function(){e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t=(t^t>>>7)>>>0,t/4294967296}}function O_(i){let e=0;for(let t=0;t<i.length;t++)e=Math.imul(31,e)+i.charCodeAt(t),e=e>>>0;return e}var F_=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],ff=[],cl={tank:["knight","berserker","werewolf","ghoul","barbarian"],melee:["samurai","assassin","ninja","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist","oracle"],ranged:["ranger","amazon","hunter","alchemist","cannibal"],caster:["mage","witch","vampire","necromancer","shaman"]},Ba={tank:2,melee:2,support:1,ranged:1,caster:1};function B_(i){let e=Math.max(1,i),t=Object.keys(Ba),n=t.reduce((l,h)=>l+(Ba[h]??0),0),s={},r=0;for(let l of t){let h=Math.floor(e*(Ba[l]??0)/n);s[l]=h,r+=h}let a=e-r,o=[...t].sort((l,h)=>s[l]!==s[h]?s[l]-s[h]:(Ba[h]??0)-(Ba[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var st={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Pi=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist","vampire","necromancer","barbarian","cannibal","shaman","oracle","amazon"];ff=[...Pi];function k_(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Jt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:14,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:4,agi:3,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:24,maxHp:24,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:23,maxHp:23,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:8},assassin:{name:"Assassin",gender:"female",hp:20,maxHp:20,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:1,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:21,maxHp:21,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:8,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:6,maxMp:6,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:6,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:25,maxHp:25,mp:8,maxMp:8,str:13,agi:8,vit:12,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:10,dex:5,luk:8,int:11,range:5},vampire:{name:"Vampire",gender:"female",hp:18,maxHp:18,mp:16,maxMp:16,str:11,agi:12,vit:3,dex:4,luk:3,int:12,range:1},necromancer:{name:"Necromancer",gender:"male",hp:20,maxHp:20,mp:20,maxMp:20,str:5,agi:4,vit:7,dex:3,luk:11,int:15,range:1},barbarian:{name:"Barbarian",gender:"male",hp:31,maxHp:31,mp:4,maxMp:4,str:16,agi:4,vit:15,dex:6,luk:3,int:2,range:1},cannibal:{name:"Cannibal",gender:"male",hp:22,maxHp:22,mp:7,maxMp:7,str:6,agi:11,vit:2,dex:13,luk:9,int:7,range:4},shaman:{name:"Shaman",gender:"female",hp:16,maxHp:16,mp:21,maxMp:21,str:4,agi:3,vit:3,dex:3,luk:16,int:16,range:4},oracle:{name:"Oracle",gender:"female",hp:19,maxHp:19,mp:19,maxMp:19,str:6,agi:7,vit:4,dex:10,luk:14,int:10,range:1},amazon:{name:"Amazon",gender:"female",hp:23,maxHp:23,mp:5,maxMp:5,str:12,agi:9,vit:11,dex:7,luk:4,int:3,range:3}},Gs={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331},vampire:{primary:16704468,secondary:16704468,hair:1250066,cape:1250066,apron:1250066},necromancer:{primary:405028,secondary:405028,hair:7434350,cape:405028,belt:11372065},barbarian:{primary:11497041,secondary:6045747,hair:6045747,belt:11098894,skin:11497041},cannibal:{primary:11497041,secondary:8421504,hair:6045747,cape:16753920,belt:16753920,skin:11497041},shaman:{primary:3224389,secondary:4349324,hair:32896,cape:5152741,horns:16775930},oracle:{primary:16775930,secondary:16775930,hair:6045747,cape:16777215,belt:15712004,horns:15712004},amazon:{primary:11497041,secondary:11497041,hair:0,cape:331790,belt:0,horns:0,skin:11497041,apron:331790}},ea={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp",vampire:"https://files.idyllic.app/files/static/2567599?width=256&optimizer=image",necromancer:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k",barbarian:"https://image.lexica.art/full_jpg/dd171d51-f518-4ae9-949b-23f5d7a157be",cannibal:"https://i.pinimg.com/736x/de/57/d1/de57d1e7aa4dd2d8f052d48b06831cbd.jpg",shaman:"https://w0.peakpx.com/wallpaper/350/203/HD-wallpaper-guy-shaman-skull-horns-anime-art-green-thumbnail.jpg",oracle:"https://images.stockcake.com/public/a/3/d/a3d08448-237f-4c23-8660-43b615c9e3c9_large/desert-oracle-enchantress-stockcake.jpg",amazon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnWAK4nkfgm8v-Ab35e3lkKOPOGTJzprr1w&s"},is=Pi.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function H_(i,e,t){if(!xs)return;let n=i?.class;if(i?.summonedBy!=null&&Array.isArray(t)){let r=t.find(a=>a.id===i.summonedBy);r?.class&&(n=r.class)}if(Pi.includes(n)&&is[n]&&is[n].kills++,e?.summonedBy!=null)return;let s=e?.class;Pi.includes(s)&&is[s]&&is[s].deaths++}function z_(i,e){if(!xs)return;for(let n of i)!n||!is[n.class]||(is[n.class].battles++,e!=null&&(n.player===e?is[n.class].wins++:is[n.class].losses++));let t=Pi.map(n=>{let s=is[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var ta={knight:[{name:"Brave",description:"Gain +1 STR and +1 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:7,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:2,target:"enemy",range:6,level:2,effectKey:"manaDrain",type:"spell"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:5,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:5,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex",type:"spell"},{name:"Drain",description:"Deal INT-based damage to HP and MP and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:1,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement",type:"spell"}],exorcist:[{name:"Sanctuary",description:"Gain +1 ALL stats for both ally and self for 3 turns.",cost:5,target:"ally",range:4,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}],vampire:[{name:"Gaze",description:"Reduce target's AGI and VIT by 1 for 3 turns",cost:5,target:"enemy",range:4,level:2,effectKey:"gaze",type:"spell"},{name:"Blood Suck",description:"Absorb enemy HP based on your MP",cost:7,target:"enemy",range:1,level:3,effectKey:"bloodSuck"}],necromancer:[{name:"Debilitate",description:"Steal target's 2 HP and 2 VIT for 2 turns",cost:5,target:"enemy",range:5,level:1,effectKey:"debilitate",type:"spell"},{name:"Reanimate",description:"Resurrect dead unit to your control",cost:10,target:"self",range:0,level:2,effectKey:"reanimate"}],barbarian:[{name:"War Cry",description:"Gain +3 VIT for -1 HP for 2 turns",cost:2,hpCost:1,target:"self",range:0,level:1,effectKey:"warCry"},{name:"Bash",description:"Reduce target's AGI to 0 for 2 turns",cost:5,target:"enemy",range:1,level:3,effectKey:"bash"}],cannibal:[{name:"Gnaw",description:"Deal STR based damage to heal self",cost:3,target:"enemy",range:1,level:2,effectKey:"gnaw"},{name:"Infect",description:"Poison enemy for 3 turns",cost:4,target:"enemy",range:6,level:3,effectKey:"infect"}],shaman:[{name:"Curse",description:"Steal 1 ALL stats for 2 turns",cost:5,target:"enemy",range:6,level:1,effectKey:"curse",type:"spell"},{name:"Vodoo",description:"Deal INT+LUK-based damage to one enemy",cost:8,hpCost:3,target:"enemy",range:6,level:2,effectKey:"vodoo",type:"spell"}],oracle:[{name:"Foresight",description:"Gain +1 INT and +1 DEX for 2 turns",cost:5,target:"ally",range:6,level:1,effectKey:"foresight"},{name:"Overheal",description:"Heal ally for 2 turns",cost:8,target:"ally",range:6,level:2,effectKey:"overheal"}],amazon:[{name:"Skewer",description:"Deal DEX-based damage to HP and AGI for 2 turns ",cost:5,target:"enemy",range:5,level:2,effectKey:"skewer"},{name:"Rapid",description:"Double attack for 1 turn",cost:6,target:"self",range:0,level:3,effectKey:"rapid"}]};function be(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function zi(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0,r=String(t);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}function ka(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim(),h=r?`${r.name} (${r.class}, P${r.player})`:"self",f=null,m=(u,x,b,y)=>{if(b)u.hp=Math.min(u.maxHp,u.hp+x),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${x}`,!1,"heal");else{let g=u===s,S=!0;if(!g&&!y){let v=be(u,"agi")*.7+be(u,"luk")*.3;S=Math.random()*Math.max(.001,v)<=be(s,"dex")}return S?(u.hp=Math.max(0,u.hp-x),u!==s&&(f=x),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(x),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u,s)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),S}},p=(u,x,b,y)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,x,b,!1,y?"buff":"debuff")};switch(i){case"brave":s.tempBuff={str:1,vit:1,duration:3},p(s.x,s.y,"+1 STR, +1 VIT",!0);break;case"dominate":{if(!r)break;let u=2,x=1;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,r.vit=Math.max(1,(r.vit||0)-x),s.vit=(s.vit||0)+x,p(r.x,r.y,`-${u} STR and -${x} VIT`,!1),p(s.x,s.y,`+${u} STR and +${x} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(be(s,"int")-(be(r,"int")*.7+be(r,"luk")*.2)));m(r,u,!1,!0)}break;case"manaDrain":if(r){let u=Math.max(1,Math.floor(be(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-u),s.mp=(s.mp||0)+u,p(r.x,r.y,`-${u} MP`,!1),p(s.x,s.y,`+${u} MP`,!0)}break;case"mantra":if(r){let u=Math.max(1,Math.floor(be(s,"int")*.3));s.tempBuff={int:u,duration:3},p(s.x,s.y,`+${u} LUK`,!0),r.tempBuff={luk:u,duration:3},p(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(m(s,Math.max(1,Math.floor(be(s,"int")*.3+be(s,"luk")*.15)),!0),!r)break;m(r,Math.max(1,Math.floor(be(s,"int")*.3+be(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,p(r.x,r.y,`-${u} VIT`,!1),p(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(be(s,"str")*.7-(be(r,"vit")*.3+be(r,"luk")*.2)));m(r,u,!1)&&m(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff={agi:u,duration:3},p(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(be(s,"str")*.6));m(r,u,!1)}break;case"focus":s.tempBuff={dex:3,duration:3},p(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(be(s,"dex")*.7-(be(r,"vit")*.3+be(r,"luk")*.2)));m(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,p(r.x,r.y,`-${u} AGI`,!1),p(s.x,s.y,`+${u} AGI`,!0)}break;case"execute":if(r){let u=Math.max(1,Math.floor(be(s,"agi")*.8-(be(r,"vit")*.3+be(r,"luk")*.2)));m(r,u,!1)}break;case"berserk":r&&(m(r,Math.max(1,Math.floor(be(s,"str")*.8-be(r,"vit")*.3+be(r,"luk")*.2)),!1),m(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff={str:u,vit:u,duration:2},p(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,p(r.x,r.y,`-${u} INT`,!1),p(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(be(s,"int")*.6-(be(r,"int")*.4+be(r,"luk")*.2))),x=Math.max(1,Math.ceil(be(s,"int")*.2-(be(r,"int")*.4+be(r,"luk")*.2)));m(r,u,!1,!0),m(s,x,!0),p(r.x,r.y,`-${x} MP`,!1),p(s.x,s.y,`+${x} MP`,!0)}break;case"blind":{if(!r)break;let u=1;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,p(r.x,r.y,`-${u} DEX`,!1),p(s.x,s.y,`+${u} DEX`,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(be(s,"dex")*.7-(be(r,"vit")*.3+be(r,"luk")*.2)));m(r,u,!1)}break;case"iaido":s.tempBuff={str:1,dex:1,duration:3},p(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(be(s,"str")*.4+be(s,"dex")*.4-(be(r,"vit")*.3+be(r,"luk")*.2)));m(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(be(s,"str")*.7+be(s,"agi")*.1-(be(r,"vit")*.3+be(r,"luk")*.2)));m(r,u,!1)}break;case"howl":s.tempBuff={str:2,agi:2,duration:3},p(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let u=Math.max(1,Math.floor(be(s,"int")*.5));m(r,u,!0),m(s,3,!1)}break;case"judgement":{if(!r)break;let u=Math.max(1,Math.floor(s.maxHp-s.hp-(be(r,"int")*.2+be(r,"luk")*.1)));m(r,u,!1,!0)}break;case"sanctuary":s.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},r.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),p(s.x,s.y,"+1 ALL STATS",!0),p(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let u=Math.max(1,Math.floor(r.maxHp-r.hp-(be(r,"int")*.2+be(r,"luk")*.1)));m(r,u,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,p(r.x,r.y,"-2 LUK",!1),p(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let u=Math.max(1,Math.floor(be(s,"luk")*.8-(be(r,"vit")*.3+be(r,"luk")*.2)));m(r,u,!1)}break;case"windWalk":s.tempBuff={agi:3,duration:3},p(s.x,s.y,"+3 AGI",!0);break;case"powerShot":{if(!r)break;let u=Math.max(1,Math.floor(be(s,"dex")*.6-(be(r,"vit")*.3+be(r,"luk")*.2)));if(m(r,u,!1)&&n.world&&n.units&&n.updateUnitPosition){let b=Math.max(1,Math.floor(u*.2)),y=W_(n.world,n.units,s,r,b),g=r.x,S=r.y;r.x=y.newGx,r.y=y.newGy,y.collisionDamage>0?(console.log("[KNOCKBACK]",`${y.collisionDamage} dmg to ${r.name}`),n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),m(r,y.collisionDamage,!1),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)):n.animateKnockback?n.animateKnockback(r,g,S,y.newGx,y.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r))}}break;case"forge":s.tempBuff={str:2,duration:3},r.tempBuff={str:2,duration:3},p(s.x,s.y,"+2 STR",!0),p(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff={str:3,vit:3,duration:3},r.tempBuff={str:3,vit:3,duration:3},p(s.x,s.y,"+3 STR, +3 VIT",!0),p(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let u=Math.max(1,Math.floor(be(r,"luk")*.3));r.tempDebuff={poison:u,duration:3},p(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let u=Math.max(1,Math.floor(be(s,"int")*.8-(be(r,"int")*.4+be(r,"luk")*.2)));m(r,u,!1,!0);let x=Math.max(1,Math.floor(u*.5));s.luk=Math.max(1,(s.luk||0)+x),p(s.x,s.y,`+${x} LUK`,!0)}break;case"gaze":{if(!r)break;let u=1;r.tempDebuff={agi:u,vit:u,duration:4},p(r.x,r.y,`-${u} AGI, -${u} VIT`,!1)}break;case"bloodSuck":{if(!r)break;let u=Math.max(1,Math.floor(s.mp*.6+be(s,"int")*.6-(r.hp*.2+be(r,"luk")*.1)));m(r,u,!1,!0)&&m(s,u,!0)}break;case"debilitate":{if(!r)break;let u=2;r.tempDebuff={hp:u,maxHp:u,vit:u,duration:3},s.tempBuff={hp:u,maxHp:u,vit:u,duration:3},p(r.x,r.y,`-${u} HP, -${u} VIT`,!1),p(s.x,s.y,`+${u} HP, +${u} VIT`,!0)}break;case"reanimate":{if(!n.units||!n.reanimateDeadUnit)break;let u=n.units.filter(S=>S.hp<=0);if(u.length===0)break;let x=u.filter(S=>S.player===s.player),y=(x.length>0?x:u).reduce((S,v)=>{let A=S.deathOrder??0;return(v.deathOrder??0)>=A?v:S}),g=n.reanimateDeadUnit(s,y)}break;case"warCry":s.tempBuff={vit:3,duration:3},p(s.x,s.y,"+3 VIT",!0);break;case"bash":{if(!r)break;let u=r.agi;r.tempDebuff={agi:u,duration:3},p(r.x,r.y,`-${u} AGI`,!1)}break;case"gnaw":{let u=Math.max(1,Math.floor(be(s,"str")-(be(r,"vit")*.3+be(r,"luk")*.2)));m(r,u,!1,!0),m(s,u,!0)}break;case"infect":{let u=Math.max(1,Math.floor(be(r,"luk")*.3));r.tempDebuff={poison:u,duration:4},p(r.x,r.y,"Poisoned for 3 turns",!1)}break;case"curse":r.tempDebuff={hp:1,maxHp:1,mp:1,maxMp:1,luk:1,int:1,str:1,vit:1,agi:1,dex:1,duration:3},s.tempBuff={hp:1,maxHp:1,luk:1,int:1,str:1,vit:1,agi:1,dex:1,duration:3},p(r.x,r.y,"-1 ALL STATS",!1),p(s.x,s.y,"+1 ALL STATS",!0);break;case"vodoo":{let u=Math.max(1,Math.floor((be(s,"int")+be(s,"luk"))*.8)-(be(r,"int")+be(r,"luk")*.4));m(r,u,!1,!0)}break;case"foresight":{if(s.tempBuff={int:1,dex:1,duration:3},p(s.x,s.y,"+1 INT, +1 DEX",!0),!r)break;r.tempBuff={int:1,dex:1,duration:3},p(r.x,r.y,"+1 INT, +1 DEX",!0)}break;case"overheal":{let u=Math.max(1,Math.floor(be(s,"int")*.3+be(s,"luk")*.1));if(s.tempBuff={heal:u,duration:3},p(s.x,s.y,"Auto heal for 2 turns",!0),!r)break;r.tempDebuff={heal:u,duration:3},p(r.x,r.y,"Auto heal for 2 turns",!0)}break;case"skewer":{let u=Math.max(1,Math.floor(be(s,"dex")*.6-(be(r,"vit")*.3+be(r,"luk")*.2)));m(r,u,!1,!0),r.tempDebuff={agi:u,duration:3},p(r.x,r.y,`-${u} AGI`,!1)}break;case"rapid":s.tempBuff={doubleAttack:!0,duration:2},p(s.x,s.y,"Double attack for 1 turn",!0);break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",h,`| MP ${s.mp}`,f!=null?`| ${f} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function lf(i){let e=mh,t=gh,n=Array.from({length:t},()=>Array(e).fill(!1)),s=Array.from({length:t},()=>Array(e).fill(0)),r=Array.from({length:t},()=>Array(e).fill(st.GRASS)),a=i!=null?N_(i):()=>Math.random(),o=Math.floor(e/2),l=Math.floor(t/2),h=o,f=0,m=o,p=t-1,u=2,x=3;function b(z,W,K,se){let le=se;for(let ue=W;ue<=K;ue++)if(!(ue<0||ue>=t))for(let Re=-u;Re<=u;Re++){let j=le+Re;j<0||j>=e||(n[ue][j]=!0,r[ue][j]=z,s[ue][j]=1)}}b(st.BASE_TOP,f,f+x-1,h),b(st.BASE_BOTTOM,p-x+1,p,m),b(st.CENTER,l-1,l+1,o);let y=new Set,g=(z,W)=>Math.abs(z-o)<=2&&Math.abs(W-l)<=1,S=(z,W)=>{z<0||z>=e||W<0||W>=t||g(z,W)||y.add(W*e+z)},v=Math.floor(e/2),A=Math.floor(t/2),F=Math.min(e,t)*yh,D=Math.max(60,(t+e)*2);for(let z=0;z<2;z++){let W=z===0?v-F:v+F,K=z===0?Math.PI/2:-Math.PI/2,se=z===0?Math.PI*3/2:Math.PI/2;for(let le=0;le<=D;le++){let ue=le/D,Re=K+ue*(se-K),j=W+F*Math.cos(Re),fe=A+F*Math.sin(Re),we=Math.round(j),ze=Math.round(fe);S(we,ze),S(we+1,ze),S(we-1,ze),S(we,ze+1),S(we,ze-1)}}let N=[[0,1],[0,-1],[1,0],[-1,0]];for(let z=0;z<1;z++){let W=[];y.forEach(K=>{let se=K%e,le=K/e|0;for(let[ue,Re]of N){let j=se+ue,fe=le+Re;if(j<0||j>=e||fe<0||fe>=t)continue;let we=fe*e+j;y.has(we)||W.push(we)}}),W.forEach(K=>y.add(K))}y.forEach(z=>{let W=z%e,K=z/e|0;r[K][W]===st.BASE_TOP||r[K][W]===st.BASE_BOTTOM||r[K][W]===st.CENTER||(n[K][W]=!0,r[K][W]=st.PATH,s[K][W]=1)});let Y=Math.round(v-F*1.6),T=Math.round(v+F*1.6),R=Math.round(v-F),$=Math.round(v+F),ce=1;for(let z=l-ce;z<=l+ce;z++)if(!(z<0||z>=t))for(let W=Y;W<=T;W++)W<0||W>=e||(n[z][W]=!0,r[z][W]!==st.CENTER&&r[z][W]!==st.BASE_TOP&&r[z][W]!==st.BASE_BOTTOM&&(r[z][W]=st.PATH),s[z][W]=Math.max(s[z][W],1));function Se(z,W,K,se){let le=Math.max(1,Math.min(z,W)),ue=Math.min(t-2,Math.max(z,W)),Re=Math.max(1,Math.min(K,se)),j=Math.min(e-2,Math.max(K,se));for(let fe=le;fe<=ue;fe++)for(let we=Re;we<=j;we++)r[fe][we]===st.BASE_TOP||r[fe][we]===st.BASE_BOTTOM||r[fe][we]===st.CENTER||(n[fe][we]=!0,r[fe][we]=st.PATH,s[fe][we]=1)}let k=3,q=3;Se(f,f+k-1,R,h-1),Se(f,f+k-1,h+1,$),Se(p-q+1,p,R,m-1),Se(p-q+1,p,m+1,$),b(st.BASE_TOP,f,f+x-1,h),b(st.BASE_BOTTOM,p-x+1,p,m),b(st.CENTER,l-1,l+1,o);for(let z=0;z<t;z++)for(let W=0;W<e;W++){if(n[z][W]||r[z][W]===st.BASE_TOP||r[z][W]===st.BASE_BOTTOM||r[z][W]===st.CENTER)continue;let K=Math.abs(W-h)<=4&&Math.abs(z-f)<=3,se=Math.abs(W-m)<=4&&Math.abs(z-p)<=3,le=K||se,ue=a();ue<.55&&!le?(r[z][W]=st.TREE,s[z][W]=1+Math.floor(a()*2)):ue<.75||le&&ue<.5?(r[z][W]=st.WATER,s[z][W]=0):(r[z][W]=st.ROCK,s[z][W]=1+Math.floor(a()*2))}return{w:e,h:t,path:n,height:s,type:r,topBaseX:h,topBaseY:f,botBaseX:m,botBaseY:p}}function V_(i,e,t){let n=e===1?st.BASE_BOTTOM:st.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function G_(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===st.CENTER&&e.push({gx:n,gy:t});return e}function cf(i,e){let t=G_(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function qs(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===st.TREE||n===st.WATER||n===st.ROCK)}function W_(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,h=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,f=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(h===0&&f===0)return{newGx:r,newGy:a,collisionDamage:0};let m=0;for(let p=0;p<s;p++){let u=r+h,x=a+f,b=u<0||u>=i.w||x<0||x>=i.h,y=!qs(i,u,x),g=e.some(S=>S.hp>0&&S.id!==n.id&&S.x===u&&S.y===x);if(b||y||g){let S=Math.max(1,m*3+Math.ceil((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:S}}r=u,a=x,m++}return{newGx:r,newGy:a,collisionDamage:0}}function X_(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,h=Math.abs(o-r),f=Math.abs(l-a),m=r<o?1:-1,p=a<l?1:-1,u=h-f;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*u;x>-f&&(u-=f,r+=m),x<h&&(u+=h,a+=p)}return s}function Ws(i,e,t,n,s){let r=X_(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!qs(i,o.x,o.y))return!1}return!0}function hl(i,e,t,n,s,r){let a=(p,u)=>u*i.w+p,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],h=[[0,1],[0,-1],[1,0],[-1,0]],f=s!=null&&r!=null,m=f?new Set(s.filter(p=>p.hp>0&&p.player!==r.player).map(p=>p.y*i.w+p.x)):null;for(;l.length;){let{x:p,y:u,d:x}=l.shift();if(!(x>=n))for(let[b,y]of h){let g=p+b,S=u+y;if(!qs(i,g,S)||f&&m.has(a(g,S)))continue;let v=a(g,S);if(o.has(v))continue;let A=x+1;o.set(v,A),l.push({x:g,y:S,d:A})}}return o}function hf(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let h=o;h<=l;h++)for(let f=r;f<=a;f++){let m=Math.abs(f-e)+Math.abs(h-t);m>=1&&m<=n&&s.set(h*i.w+f,m)}return s}function Xs(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(u,x)=>x*i.w+u,l=new Set(r.filter(u=>u.hp>0&&u.player!==a.player).map(u=>u.y*i.w+u.x)),h=new Map,f=[{x:e,y:t}];h.set(o(e,t),null);let m=[[0,1],[0,-1],[1,0],[-1,0]];function p(u,x){return qs(i,u,x)?!l.has(o(u,x)):!1}for(;f.length;){let{x:u,y:x}=f.shift();if(u===n&&x===s){let b=[],y={x:n,y:s};for(;y;)b.unshift(y),y=h.get(o(y.x,y.y));return b}for(let[b,y]of m){let g=u+b,S=x+y,v=o(g,S);h.has(v)||p(g,S)&&(h.set(v,{x:u,y:x}),f.push({x:g,y:S}))}}return null}var uf={[st.PATH]:2976557,[st.GRASS]:2968109,[st.TREE]:1719578,[st.WATER]:1989278,[st.ROCK]:4872778,[st.BASE_TOP]:8014410,[st.BASE_BOTTOM]:4872826,[st.CENTER]:13940810};function xh(i){return i.w*_t/2}function _h(i){return i.h*_t/2}function pf(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new qo(e);return r.wrapS=r.wrapT=Ea,r.repeat.set(4,4),r.needsUpdate=!0,r}function df(i){let e=new Ai,t=xh(i),n=_h(i),s=new Xn(_t,ni,_t),r=pf(64),a=.88,o=.02,l=[];function h(p,u,x,b,y){let g=new $n({color:3828266,roughness:.9});g.bumpMap=r,g.bumpScale=.12;for(let S=0;S<b;S++){let v=.08+Math.random()*y,A=.03+Math.random()*.03,F=new Ye(new zs(A*.5,A,v,6),g);F.position.set(p+(Math.random()-.5)*.5,x+v/2,u+(Math.random()-.5)*.5),F.rotation.x=(Math.random()-.5)*.2,F.rotation.z=(Math.random()-.5)*.2,F.castShadow=!0,e.add(F)}}let f=.12;function m(p,u,x,b){let y=x+.02,g=[[p-f,y,u-f],[p+f,y,u+f],[p-f,y,u+f],[p+f,y,u-f],[p-f+.06,y,u-f+.06],[p+f-.06,y,u+f-.06],[p-f+.06,y,u+f-.06],[p+f-.06,y,u-f+.06]],S=new Float32Array(g.length*3);g.forEach((D,N)=>{S[N*3]=D[0],S[N*3+1]=D[1],S[N*3+2]=D[2]});let v=new fi;v.setAttribute("position",new yi(S,3)),v.computeBoundingSphere();let A=new Ia({color:855309,linewidth:1}),F=new Xo(v,A);b.add(F)}for(let p=0;p<i.h;p++)for(let u=0;u<i.w;u++){let x=i.type[p][u],b=i.height[p][u],y=uf[x],g=ni+b*.35,S=g/2+ni/2,v=new $n({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),A=(y>>16&255)/255,F=(y>>8&255)/255,D=(y&255)/255,N=A,Y=F,T=D;if(x===st.PATH||x===st.TREE||x===st.ROCK){let W=Math.random()*.45;N=A*(1-W)+.42*W,Y=F*(1-W)+.26*W,T=D*(1-W)+.14*W}(x===st.TREE||x===st.ROCK)&&(N*=.5,Y*=.5,T*=.5);let R=1+(Math.random()-.5)*.12;v.color.setRGB(Math.min(1,N*R),Math.min(1,Y*R),Math.min(1,T*R)),v.bumpMap=r,v.bumpScale=.12;let $=new Ye(s,v);$.position.set(u*_t-t+_t/2,g/2,p*_t-n+_t/2),$.castShadow=!0,$.receiveShadow=!0,$.userData={gx:u,gy:p,type:x},e.add($);let ce=u*_t-t+_t/2,Se=p*_t-n+_t/2;if(x===st.TREE&&m(ce,Se,S,e),x===st.TREE){let k=new Ai;k.position.set(ce,S,Se);let q=u===0||u===i.w-1||p===0||p===i.h-1,z=q?.75+Math.random()*.35:.5+Math.random()*.2,W=new bt(4007959),K=()=>1+(Math.random()-.5)*.4;W.r=Math.min(1,Math.max(0,W.r*K())),W.g=Math.min(1,Math.max(0,W.g*K())),W.b=Math.min(1,Math.max(0,W.b*K()));let se=.85+Math.random()*.2,le=new $n({color:W,roughness:se});le.bumpMap=r,le.bumpScale=.1+Math.random()*.12;let ue=new Ye(new zs(.12,.14,z,8),le);ue.position.set(0,z/2,0),ue.castShadow=!0,ue.raycast=function(){},k.add(ue);let Re=r.clone();Re.repeat.set(3,3);let j=new bt(2972205),fe=()=>1+(Math.random()-.5)*.44;j.r=Math.min(1,Math.max(0,j.r*fe())),j.g=Math.min(1,Math.max(0,j.g*fe())),j.b=Math.min(1,Math.max(0,j.b*fe()));let we=.78+Math.random()*.24,ze=new $n({color:j,roughness:we});ze.bumpMap=Re,ze.bumpScale=.16+Math.random()*.14;let Ke=q?.52:.45,dt=q?1.05:.9,pt=.12,et=dt*.5,re=dt*.45,Z=dt*.4,_n=new Ye(new Ri(Ke,et,8),ze);_n.position.set(0,z+et/2,0),_n.castShadow=!0,_n.raycast=function(){},k.add(_n);let Me=new Ye(new Ri(Ke*.75,re,8),ze);Me.position.set(0,z+et-pt+re/2,0),Me.castShadow=!0,Me.raycast=function(){},k.add(Me);let tt=new Ye(new Ri(Ke*.5,Z,8),ze);tt.position.set(0,z+et-pt+re-pt+Z/2,0),tt.castShadow=!0,tt.raycast=function(){},k.add(tt),e.add(k),l.push(k)}else if(x===st.WATER){let k=uf[st.WATER],q=(k>>16&255)/255,z=(k>>8&255)/255,W=(k&255)/255,K=1+(Math.random()-.5)*.12,se=new $n({color:new bt().setRGB(Math.min(1,q*K),Math.min(1,z*K),Math.min(1,W*K)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),le=new Ye(new ts(_t,_t),se);le.rotation.x=-Math.PI/2,le.position.set(ce,S+.02,Se),le.receiveShadow=!0,e.add(le)}else if(x===st.ROCK){let k=new $n({color:6974058,roughness:.9});k.bumpMap=r,k.bumpScale=.2;let q=(se,le,ue)=>{let Re=new Ye(new jo(se,0),k);Re.position.set(ce+le,S+se-.2,Se+ue),Re.rotation.set(Math.random(),Math.random(),Math.random()),Re.castShadow=!0,e.add(Re)},z=.32+Math.random()*.14,W=.2+Math.random()*.12,K=.12+Math.random()*.12;q(z,(Math.random()-.5)*.15,(Math.random()-.5)*.15),q(W,(Math.random()-.5)*.25,(Math.random()-.5)*.25),q(K,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function q_(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=lf(),t=document.getElementById("canvas-wrap"),n=new Wo;n.background=new bt(1711652),n.fog=new Go(1711652,30,90);let s=e.w*_t/2,r=e.h*_t/2,a=new ui(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,h=new B(12,38,16).normalize().multiplyScalar(o),f=new B,m=new B,p=new Yi(new B(0,1,0),0),u=new B,x=new B,b=!1,y=!1,g=!0,S=!1,v=null,A=5,F=.004,D=-Math.PI*.4,N=Math.PI*.4,Y=new B,T={x:0,y:0},R=!1,$=1,ce=40,Se=.005,k=.15,q=1,z=null,W=new il(16777215,.45);n.add(W);let K=new nl(16774630,1.1);K.position.set(30,50,20),K.castShadow=!0,K.shadow.mapSize.width=2048,K.shadow.mapSize.height=2048,K.shadow.camera.near=1,K.shadow.camera.far=120,K.shadow.camera.left=-50,K.shadow.camera.right=50,K.shadow.camera.top=50,K.shadow.camera.bottom=-50,n.add(K);let se=df(e);n.add(se);let le=new Map,ue=new Ai;n.add(ue);let Re={30:!1,20:!1,10:!1},j=["red","yellow","purple","blue","green"],fe={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943},we=.92;function ze(d,c,_){let L=(ni+e.height[_][c]*.35)/2+ni/2,P=new ts(we,we),U=new Un({color:d,transparent:!0,opacity:.45,side:Ln}),O=new Ye(P,U);return O.rotation.x=-Math.PI/2,O.position.set(c*_t-Ge+_t/2,L+.01,_*_t-Wt+_t/2),O}function Ke(d){let c=new Qo(.22,0),_=new $n({color:d,metalness:.3,roughness:.4}),M=new Ye(c,_);return M.rotation.x=Math.PI/4,M.castShadow=!0,M.receiveShadow=!0,M}function dt(){let d=Math.floor(e.h/2),c=[];for(let _=0;_<e.w;_++){let M=d;if(e.type[M][_]!==st.PATH||re.some(U=>U.hp>0&&U.x===_&&U.y===M))continue;let P=M*e.w+_;le.has(P)||c.push({gx:_,gy:M})}return c}function pt(d){let c=dt();if(c.length===0)return;let _=c[Math.floor(Math.random()*c.length)],M=j[Math.floor(Math.random()*j.length)],L=_.gy*e.w+_.gx,P=fe[M],U=Be(_.gx,_.gy);U.y+=.35;let O=Ke(P);O.position.copy(U),ue.add(O);let I=ze(P,_.gx,_.gy);ue.add(I),le.set(L,{type:M,mesh:O,glowMesh:I}),console.log("[POWERUP]",`turnsLeft: ${d}, type: ${M}, gx: ${_.gx}, gy: ${_.gy}`)}function et(d){let c=d.y*e.w+d.x,_=le.get(c);if(!_)return;let M=_.mesh;if(ue.remove(M),M.geometry.dispose(),M.material){let L=M.material;L.dispose&&L.dispose()}_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose()),le.delete(c),_.type==="green"?(d.hp=Math.min(d.maxHp,d.hp+6),si(d.x,d.y,"+6 HP",!1,"buff")):(_.type==="red"?d.tempBuff={str:4,duration:3}:_.type==="yellow"?d.tempBuff={agi:4,duration:3}:_.type==="purple"?d.tempBuff={int:4,duration:3}:_.type==="blue"&&(d.tempBuff={dex:4,duration:3}),si(d.x,d.y,`+4 ${_.type==="red"?"STR":_.type==="yellow"?"AGI":_.type==="purple"?"INT":"DEX"}`,!1,"buff")),rt(d,()=>Ze(d))}let re=[],Z=1,_n=0,Me=new Map,tt=pf(64),Ge=xh(e),Wt=_h(e);function Be(d,c){let M=(ni+e.height[c][d]*.35)/2+ni/2;return new B(d*_t-Ge+_t/2,M,c*_t-Wt+_t/2)}function C(d,c){d==="short"&&(mh=27,gh=15,yh=.35,ys=100),n.remove(se),se.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(L=>L.dispose())}),Me.forEach(_=>{n.remove(_),_.traverse(M=>{M.geometry&&M.geometry.dispose(),M.material&&(Array.isArray(M.material)?M.material:[M.material]).forEach(P=>P.dispose())})}),Me.clear(),re.length=0,Z=1,_n=0,le.forEach(_=>{ue.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),le.clear(),Re={30:!1,20:!1,10:!1},e=lf(typeof c<"u"?c:void 0),Ge=xh(e),Wt=_h(e),se=df(e),n.add(se)}function E(){Me.forEach(d=>{n.remove(d),d.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&(Array.isArray(c.material)?c.material:[c.material]).forEach(M=>M.dispose())})}),Me.clear(),re.length=0,Z=1,_n=0}function J(d,c){let _=(d>>16&255)/255,M=(d>>8&255)/255,L=(d&255)/255,P=1+(Math.random()-.5)*c;return new bt(Math.min(1,_*P),Math.min(1,M*P),Math.min(1,L*P))}let Te=.62;function ye(d,c){c=c??Te;let _=d instanceof bt?d:new bt(d);return new bt(Math.max(0,_.r*c),Math.max(0,_.g*c),Math.max(0,_.b*c))}function Ae(d,c,_){let M=Gs[c]||Gs.knight,L=ye(J(M.primary,.08)),P=ye(J(M.secondary,.08)),U=Jt[c]&&Jt[c].gender||"male",O=_??4006676,I=ye(J(M.skin!=null?M.skin:15250592,.06)),ee=ye(J(O,.08)),G=()=>(Math.random()-.5)*.08,oe=()=>(Math.random()-.5)*.04,V=new $n({color:L,metalness:Math.max(0,.25+oe()),roughness:Math.max(.3,Math.min(1,.5+G()))});V.bumpMap=tt,V.bumpScale=.1;let Q=new $n({color:P,metalness:Math.max(0,.2+oe()),roughness:Math.max(.3,Math.min(1,.55+G()))});Q.bumpMap=tt,Q.bumpScale=.1;let de=new $n({color:L,metalness:Math.max(0,.25+oe()),roughness:Math.max(.3,Math.min(1,.5+G()))});de.bumpMap=tt,de.bumpScale=.1;let xe=new $n({color:I,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+G()))});xe.bumpMap=tt,xe.bumpScale=.05;let Pe=new Ai,ke=.28,Ce=.08,$e=.08,at=new Ye(new Xn(Ce,ke,$e),Q);at.position.set(-.06,ke/2,0),at.castShadow=!0,Pe.add(at);let sn=new Ye(new Xn(Ce,ke,$e),Q);sn.position.set(.06,ke/2,0),sn.castShadow=!0,Pe.add(sn);let Nt=.28,It=.2,rn=.12,zt=new Ye(new Xn(It,Nt,rn),V);zt.position.set(0,ke+Nt/2,0),zt.castShadow=!0,Pe.add(zt);let Nn=.06,gn=.22,Ot=.06,Vt=new Ye(new Xn(Nn,gn,Ot),de);Vt.position.set(-(It/2+Nn/2),ke+Nt-.08,0),Vt.castShadow=!0,Pe.add(Vt);let Zt=new Ye(new Xn(Nn,gn,Ot),de);if(Zt.position.set(It/2+Nn/2,ke+Nt-.08,0),Zt.castShadow=!0,Pe.add(Zt),M.cape!=null){let ot=It*1.95,ct=ot*.6,wn=ke+Nt*.28,tn=new Zr;tn.moveTo(-ct/2,wn/2),tn.lineTo(ct/2,wn/2),tn.lineTo(ot/2,-wn/2),tn.lineTo(-ot/2,-wn/2),tn.closePath();let bn=new Oa(tn),ae=new $n({color:ye(J(M.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+G())),side:Ln});ae.bumpMap=tt,ae.bumpScale=.12;let _e=new Ye(bn,ae);_e.position.set(0,ke+Nt-wn/2+.05,-rn/2-.02),_e.rotation.y=Math.PI,_e.castShadow=!0,Pe.add(_e);let ge=.055,he=ke+Nt+.02,pe=.02,ve=It/2+Nn*.5,me=new Ye(new ns(ge,10,8,0,Math.PI*2,0,Math.PI*.55),ae.clone());me.position.set(-ve,he,pe),me.rotation.x=-Math.PI*.35,me.rotation.z=Math.PI*.5,me.scale.set(1.2,.85,1.1),me.castShadow=!0,Pe.add(me);let Ie=new Ye(new ns(ge,10,8,0,Math.PI*2,0,Math.PI*.55),ae.clone());Ie.position.set(ve,he,pe),Ie.rotation.x=-Math.PI*.35,Ie.rotation.z=-Math.PI*.5,Ie.scale.set(1.2,.85,1.1),Ie.castShadow=!0,Pe.add(Ie)}if(M.belt!=null){let ot=new $n({color:ye(J(M.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+G()))});ot.bumpMap=tt,ot.bumpScale=.1;let ct=.022,wn=.04,tn=new Ye(new Xn(It+.04,ct,rn+wn),ot);tn.position.set(0,ke+.04,0),tn.castShadow=!0,Pe.add(tn)}if(M.apron!=null){let ot=new $n({color:ye(J(M.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+G())),side:Ln});ot.bumpMap=tt,ot.bumpScale=.12;let ct=It*.95,wn=ke*.85,tn=new Ye(new ts(ct,wn),ot),bn=ke+.2;tn.position.set(0,bn-wn/2,rn/2+.02),tn.castShadow=!0,Pe.add(tn);let ae=ke+Nt+.02,_e=It/2+Nn*.2,ge=.018,he=.008,pe=ae-bn,ve=new Ye(new Xn(ge,pe,he),ot.clone());ve.position.set(-_e,(bn+ae)/2,rn/2+.015),ve.castShadow=!0,Pe.add(ve);let me=new Ye(new Xn(ge,pe,he),ot.clone());me.position.set(_e,(bn+ae)/2,rn/2+.015),me.castShadow=!0,Pe.add(me)}let Oe=.1,Mt=new Ye(new ns(Oe,12,10),xe);Mt.position.set(0,ke+Nt+Oe,0),Mt.castShadow=!0,Pe.add(Mt);let an=new Un({color:1710638}),Cn=new Ye(new Xn(.032,.004,.004),an);Cn.position.set(-.032,.028,Oe*.92),Mt.add(Cn);let yn=new Ye(new Xn(.032,.004,.004),an);yn.position.set(.032,.028,Oe*.92),Mt.add(yn);let Zn=new Un({color:2957087}),pn=new Ye(new Xn(.045,.012,.008),Zn);pn.position.set(0,-.028,Oe*.92),Mt.add(pn);let Pn=new $n({color:ee,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+G()))});Pn.bumpMap=tt,Pn.bumpScale=.15;let Si=ot=>{let ct=Oe*.32,wn=Oe*.22,tn=new Ye(new Ri(wn*.9,ct,5),Pn);tn.position.set(-Oe*.25,Oe*.22,Oe*.72),tn.rotation.x=.35,tn.rotation.z=.12,tn.castShadow=!0,ot.add(tn);let bn=new Ye(new Ri(wn,ct,5),Pn);bn.position.set(Oe*.28,Oe*.18,Oe*.68),bn.rotation.x=.28,bn.rotation.z=-.1,bn.castShadow=!0,ot.add(bn);let ae=new Ye(new Ri(wn*.7,ct*.9,5),Pn);ae.position.set(0,Oe*.28,Oe*.78),ae.rotation.x=.4,ae.castShadow=!0,ot.add(ae)};if(U==="female"){let ot=new Ye(new ns(Oe*.92,12,10,0,Math.PI*2,0,Math.PI*.52),Pn);ot.position.set(0,Oe*.28,-Oe*.18),ot.rotation.y=.06,ot.rotation.x=-.04,ot.castShadow=!0,Mt.add(ot);let ct=new Ye(new Xn(Oe*1.15,Oe*2.2,Oe*.55),Pn);ct.position.set(0,-Oe*.6,-Oe*.95),ct.rotation.z=.03,ct.castShadow=!0,Mt.add(ct),Si(Mt)}else{let ot=new Ye(new ns(Oe*.9,12,10,0,Math.PI*2,0,Math.PI*.5),Pn);ot.position.set(0,Oe*.4,-Oe*.12),ot.rotation.y=.08,ot.rotation.x=-.05,ot.rotation.z=.04,ot.castShadow=!0,Mt.add(ot);let ct=new Ye(new ns(Oe*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),Pn);ct.position.set(0,Oe*.1,-Oe*.05),ct.rotation.y=.1,ct.castShadow=!0,Mt.add(ct),Si(Mt)}if(M.horns!=null){let ot=new $n({color:ye(J(M.horns,.08)),metalness:Math.max(0,.12+oe()),roughness:Math.max(.4,Math.min(1,.62+G()))});ot.bumpMap=tt,ot.bumpScale=.1;let ct=Oe*1.12,wn=Oe*.22,tn=new el(ct,wn,8,28),bn=new Ye(tn,ot);bn.rotation.x=Math.PI/2,bn.position.y=Oe*.42,bn.castShadow=!0,Mt.add(bn);let ae=Oe*.48,_e=Oe*2.55,ge=new Ye(new Ri(ae,_e,8),ot.clone());ge.position.set(-Oe*1.02,Oe*.18,Oe*.02),ge.rotation.set(-.42,-.32,.58),ge.castShadow=!0,Mt.add(ge);let he=new Ye(new Ri(ae,_e,8),ot.clone());he.position.set(Oe*1.02,Oe*.18,Oe*.02),he.rotation.set(-.42,.32,-.58),he.castShadow=!0,Mt.add(he)}return Pe.userData.leftLeg=at,Pe.userData.rightLeg=sn,Pe.userData.leftArm=Vt,Pe.userData.rightArm=Zt,Pe}function Qe(d,c){let _=d.userData;if(!_.leftLeg)return;let M=c*Math.PI*2,L=.35,P=.28;_.leftLeg.rotation.x=Math.sin(M)*L,_.rightLeg.rotation.x=Math.sin(M+Math.PI)*L,_.leftArm.rotation.y=Math.sin(M+Math.PI)*P,_.rightArm.rotation.y=Math.sin(M)*P}function Fe(d){let c=d.userData;c.leftLeg&&(c.leftLeg.rotation.x=0,c.rightLeg.rotation.x=0,c.leftArm.rotation.y=0,c.rightArm.rotation.y=0)}function We(d){let c=Ae(d.player,d.class,d.hairColor);c.position.copy(Be(d.x,d.y)),c.castShadow=!0,c.userData.unitId=d.id;let _=.28,M=.28,L=.12,P=.18,U=.04,O=new ts(P,U),I=new Un({color:6037528,side:Ln,depthTest:!0,depthWrite:!1}),ee=new Ye(O,I);ee.position.set(0,_+M/2,L/2+.02),ee.rotation.x=-Math.PI/2,ee.rotation.z=Math.PI/4,ee.visible=d.maxHp>0&&d.hp<d.maxHp&&d.hp>0,c.add(ee),c.userData.slashMark=ee,n.add(c),Me.set(d.id,c),Yt(c,d.maxHp>0&&d.hp/d.maxHp<.35)}function Ze(d){let c=Me.get(d.id);!c||!c.userData.slashMark||(c.userData.slashMark.visible=d.maxHp>0&&d.hp<d.maxHp&&d.hp>0)}function Tt(d){d.traverse(_=>{if(!_.isMesh||!_.material)return;let M=_.material;if(M.color){let L=M.color.r,P=M.color.g,U=M.color.b,O=.2126*L+.7152*P+.0722*U,I=Math.max(0,Math.min(1,O*.55));M.color.setRGB(I,I,I)}})}let Ee=.35;function Yt(d,c){if(d)if(c){d.rotation.x=.35,d.scale.setScalar(.96);let _=d.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=.2,_.rightArm.rotation.y=.2),d.traverse(M=>{M.isMesh&&M.material&&M.material.color&&(M.userData.originalColor||(M.userData.originalColor=M.material.color.clone()),M.material.color.copy(M.userData.originalColor).multiplyScalar(.82))})}else{d.rotation.x=0,d.scale.setScalar(1);let _=d.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=0,_.rightArm.rotation.y=0),d.traverse(M=>{M.isMesh&&M.material&&M.userData.originalColor&&M.material.color.copy(M.userData.originalColor)})}}function Ct(d){if(d.level>=3)return;let c=d.maxHp>0?d.hp/d.maxHp:1;d.level+=1;let _=L=>Math.max(1,Math.ceil(L*1.1)),M=L=>Math.max(1,Math.ceil(L*1.1));d.maxHp=_(d.maxHp),d.maxMp=_(d.maxMp),d.hp=Math.max(1,Math.min(d.maxHp,Math.ceil(c*d.maxHp))),d.mp=Math.max(1,Math.min(d.maxMp,Math.ceil(c*d.maxMp))),d.str=M(d.str),d.agi=M(d.agi),d.vit=M(d.vit),d.dex=M(d.dex),d.luk=M(d.luk),d.int=M(d.int),d.range>2&&(d.range=M(d.range)),console.log("[LEVEL UP]",`${d.name} (${d.class}, P${d.player})`,`\u2192 Lv.${d.level}`,`| HP ${d.hp}/${d.maxHp} MP ${d.mp}/${d.maxMp} STR ${d.str} VIT ${d.vit}`),mt(d)}function mt(d){let c=Me.get(d.id),_=d.level===3?"levelup level3":d.level===2?"levelup level2":"levelup";if(sp(d,_),!c)return;let M=performance.now(),L=0;function P(U){L++,L%2===0&&Bt();let O=U-M,I=Math.min(1,O/Ne),ee=I<.5?1+.35*(I/.5):1+.35*(1-(I-.5)/.5);c.scale.setScalar(ee),I<1?requestAnimationFrame(P):c.scale.setScalar(1)}requestAnimationFrame(P)}function rt(d,c){let _=Me.get(d.id);if(!_){c&&c();return}let M=performance.now(),L=0;function P(U){L++,L%2===0&&Bt();let O=U-M,I=Math.min(1,O/Ne),ee=I<.5?1+.35*(I/.5):1+.35*(1-(I-.5)/.5);_.scale.setScalar(ee),I<1?requestAnimationFrame(P):(_.scale.setScalar(1),c&&c())}requestAnimationFrame(P)}let qe=400,St=280,Xt=.45,dn=160,wt=280,Le=350,H=500,Ne=600,Ue=400,ht=280,lt=.2,ln=.18,jt=!1,On=new B,Kn=new B,$t=new B,Wn=new B;function xi(d=!1){g=!0;let c=null;if(Qt==="playing"&&Xe.length>0){let U=Xe[je];c=re.find(O=>O.id===U&&O.hp>0)}if(c||(c=re.find(U=>U.player===Rn&&U.hp>0)),!c)return;let _=a.position.distanceTo(f);if(_<.1&&(_=o),m.copy(a.position).sub(f).normalize(),m.lengthSq()<.01&&m.copy(h).normalize(),$t.copy(Be(c.x,c.y)),Wn.copy($t).add(m.clone().multiplyScalar(_)),d||jt){f.copy($t),a.position.copy(Wn),a.lookAt(f),Bt();return}jt=!0,On.copy(f),Kn.copy(a.position);let M=performance.now(),L=0;ei.shadowMap.enabled=!1;function P(U){L++,L%2===0&&Bt();let O=Math.min(1,(U-M)/qe),I=O*(2-O);f.lerpVectors(On,$t,I),a.position.lerpVectors(Kn,Wn,I),a.lookAt(f),O<1?requestAnimationFrame(P):(ei.shadowMap.enabled=!0,jt=!1)}requestAnimationFrame(P)}let Vi=0,Rn=1,Qt="draft",gt="pvp",Kt=1,Ii={1:"",2:""},Li=null,ss=null,rs=null,_s="long";function w(d){return gt==="online"&&Ii[d]?Ii[d]:"Player "+d}let X=1,te=0,ie=null;async function ne(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{ie=await navigator.wakeLock.request("screen"),ie.addEventListener("release",()=>{ie=null})}catch{ie=null}}function He(){ie&&(ie.release().catch(()=>{}),ie=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&gt==="cvcpu"&&Qt==="playing"&&ne()});let Je="balanced",nt=new Set(Pi),ut=[...Pi],yt=0,it=null,ft=null,cn=new Set,Xe=[],je=0,en=null,vt=new Map,At=null;function na(d){if(!d||d.hp<=0)return;At=d.id;let c=document.getElementById("unit-preview-card"),_=document.getElementById("unit-preview-image"),M=document.getElementById("unit-preview-name"),L=document.getElementById("unit-preview-meta"),P=document.getElementById("unit-preview-stats");c.classList.remove("player-1","player-2"),c.classList.add(d.player===1?"player-1":"player-2"),c.classList.toggle("level-2",d.level>=2&&d.level<3),c.classList.toggle("level-3",d.level>=3),_.src=ea[d.class]||"",_.alt=d.name,M.textContent=d.name,L.textContent=`Lv.${d.level} ${d.class} \u2014 ${w(d.player)}`;let U=[["HP",`${d.hp}/${d.maxHp}`,"stat-val-hp"],["MP",`${d.mp}/${d.maxMp}`,""],["STR",zi(d,"str"),""],["AGI",zi(d,"agi"),""],["VIT",zi(d,"vit"),""],["DEX",zi(d,"dex"),""],["LUK",zi(d,"luk"),""],["INT",zi(d,"int"),""]];d.tempDebuff&&d.tempDebuff.poison!=null&&U.push(["Poison",`${d.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),d.tempBuff&&d.tempBuff.heal!=null&&U.push(["Regen",`${d.tempBuff.heal} HP/turn`,"stat-val-buff"]),P.innerHTML=U.map(([I,ee,G])=>{let oe=G?` ${G}`:"";return`<span class="stat-label">${I}</span><span class="stat-val${oe}">${ee}</span>`}).join("");let O=d.maxHp>0&&d.hp/d.maxHp<.3;c.classList.toggle("low-hp",O),c.style.display="block"}function hn(){At=null;let d=document.getElementById("unit-preview-card");d.classList.remove("low-hp","level-2","level-3"),d.style.display="none"}let kt=!1,_i=!1,pi=!1,Fn=null,Et=!1,Tn=!1,Di=!1,vn=[],ii=new Ai;n.add(ii);let vi=[],vs=!0,Ms=0,vh=0;function Bt(){vs=!0,Ms=performance.now()}let ia=new Ai;n.add(ia);let ul=[],mf=_t,gf=.02,yf=3368703,xf=13382451;function _f(d,c){let _=d/2,M=_-c,L=new Zr;L.moveTo(-_,-_),L.lineTo(_,-_),L.lineTo(_,_),L.lineTo(-_,_),L.lineTo(-_,-_);let P=new Kr;return P.moveTo(-M,-M),P.lineTo(M,-M),P.lineTo(M,M),P.lineTo(-M,M),P.lineTo(-M,-M),L.holes.push(P),new Oa(L)}let vf=_f(mf,gf);function Ui(d=null){let c=re.filter(_=>_.hp>0&&_.id!==d).map(_=>`${_.id},${_.x},${_.y},${_.player}`).sort().join("|");if(!(Ui._lastSig===c&&Ui._lastExclude===d)){for(Ui._lastSig=c,Ui._lastExclude=d,ul.forEach(_=>_.dispose()),ul.length=0;ia.children.length;){let _=ia.children[0];ia.remove(_)}re.filter(_=>_.hp>0&&_.id!==d).forEach(_=>{let M=_.x,L=_.y,U=(ni+e.height[L][M]*.35)/2+ni/2,O=M*_t-Ge+_t/2,I=L*_t-Wt+_t/2,ee=U+.02,G=_.player===1?yf:xf,oe=new Un({color:G,side:Ln}),V=new Ye(vf,oe);V.rotation.x=-Math.PI/2,V.position.set(O,ee,I),ia.add(V),ul.push(oe)}),Bt()}}let Mf=1.15,dl={1:8102901,2:15628943},Mi=(()=>{let d=new Un({color:dl[1]}),c=new Ye(new Ri(.1,.25,8),d);return c.rotation.x=Math.PI,c.visible=!1,n.add(c),c})();function fl(){if(Qt!=="playing"||Xe.length===0||Di){Mi.visible=!1,Mi.removeFromParent(),n.add(Mi);return}let d=Xe[je],c=re.find(M=>M.id===d);if(!c||c.hp<=0){Mi.visible=!1,Mi.removeFromParent(),n.add(Mi);return}let _=Me.get(d);if(!_){Mi.visible=!1;return}Mi.removeFromParent(),_.add(Mi),Mi.position.set(0,Mf,0),Mi.material&&Mi.material.color.setHex(dl[c.player]??dl[1]),Mi.visible=!0}function Y_(d){let c=[[0,1],[0,-1],[1,0],[-1,0]],_=[];for(let[M,L]of c){let P=d.x+M,U=d.y+L;!qs(e,P,U)||re.some(I=>I.id!==d.id&&I.x===P&&I.y===U&&I.hp>0)||_.push(Math.atan2(M,L))}return _}function Mh(d){if(vn.length===0)return d;if(vn.length===1)return vn[0];let c=vn[0],_=Math.abs(bh(d-c));for(let M=1;M<vn.length;M++){let L=Math.abs(bh(d-vn[M]));L<_&&(_=L,c=vn[M])}return c}function bh(d){for(;d>Math.PI;)d-=2*Math.PI;for(;d<-Math.PI;)d+=2*Math.PI;return d}let bf=1.2,Ji=(()=>{let d=new Ye(new Ri(.12,.35,8),new Un({color:4500223}));return d.rotation.x=-Math.PI/2,d.visible=!1,n.add(d),d})();function Sf(d,c){if(!Di||Xe.length===0||vn.length===0)return;let _=Xe[je],M=re.find(oe=>oe.id===_),L=Me.get(_);if(!M||!L)return;$a(d,c),Ss.setFromCamera(Es,a);let P=Ss.intersectObjects(se.children,!0);if(P.length===0)return;let U=null;for(let oe of P){let V=oe.object;for(;V&&(V.userData.gx==null||V.userData.gy==null);)V=V.parent;if(V&&V.userData.gx!=null){U=oe.point;break}}if(!U)return;let O=Be(M.x,M.y),I=U.x-O.x,ee=U.z-O.z;if(I*I+ee*ee<1e-6)return;let G=Math.atan2(I,ee);L.rotation.y=Mh(G)}function Ef(){if(Xe.length===0)return;let d=Xe[je],c=re.find(L=>L.id===d),_=Me.get(d);if(!c||!_)return;vn=[[0,1],[0,-1],[1,0],[-1,0]].map(([L,P])=>Math.atan2(L,P)),Ji.removeFromParent(),_.add(Ji),Ji.position.set(0,bf,0),Ji.rotation.x=-Math.PI/2,Ji.rotation.y=0,Ji.rotation.z=Math.PI,Ji.visible=!0,_.rotation.y=vn[0]}function Tf(){Ji.visible=!1,Ji.removeFromParent(),n.add(Ji)}let Ha=[];(function(){let c=Ci,_=[1];for(let M=0;M<Math.floor((c-1)/2);M++)_.push(2,2,1,1);c%2===1?_.push(2):(_.push(2,2),_.push(1)),Ha=_})();function Gi(){return Ha[yt]}function Sh(){let d=Gi(),c=0;for(let _=0;_<yt;_++)Ha[_]===d&&c++;return c+1}function sa(){_n=0,le.forEach(_=>{ue.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),le.clear(),Re={30:!1,20:!1,10:!1};let d=Ci,c=[1];for(let _=0;_<Math.floor((d-1)/2);_++)c.push(2,2,1,1);d%2===1?c.push(2):(c.push(2,2),c.push(1)),Ha=c,Qt="draft",yt=0,nt=new Set(Pi),ut=k_([...Pi]),it=null,ft=null,cn.clear(),Bn(),ml(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function pl(){return re.filter(d=>d.hp>0).sort((d,c)=>{let _=be(d,"agi"),M=be(c,"agi");if(M!==_)return M-_;let L=be(d,"dex");return be(c,"dex")-L}).map(d=>d.id)}function wf(d){let c=new Set(re.filter(G=>G.hp>0).map(G=>G.y*e.w+G.x)),_=(G,oe)=>c.has(oe*e.w+G),M=(G,oe)=>G>=0&&G<e.w&&oe>=0&&oe<e.h,L=(G,oe)=>M(G,oe)&&qs(e,G,oe)&&!_(G,oe),P=Me.get(d.id),U=P!=null?P.rotation.y:d.player===1?Math.PI:0,O=d.x-Math.round(Math.cos(U)),I=d.y+Math.round(Math.sin(U));if(L(O,I))return{gx:O,gy:I};let ee=[[0,1],[0,-1],[1,0],[-1,0]];for(let[G,oe]of ee){let V=d.x+G,Q=d.y+oe;if(L(V,Q))return{gx:V,gy:Q}}return null}function Af(d,c,_,M){let L=M?.position&&M.position.gx!=null&&M.position.gy!=null?{gx:M.position.gx,gy:M.position.gy}:wf(d);if(!L)return null;let P=c.class&&Pi.includes(c.class)?c.class:"knight",U=c.hairColor!=null?c.hairColor:(Gs[P]||Gs.knight).hair,O={id:Z++,player:d.player,x:L.gx,y:L.gy,level:c.level!=null?c.level:1,name:c.name!=null?c.name:"Summoned",class:P,hairColor:U,hp:c.hp!=null?c.hp:10,maxHp:c.maxHp!=null?c.maxHp:10,mp:c.mp!=null?c.mp:5,maxMp:c.maxMp!=null?c.maxMp:5,str:c.str!=null?c.str:5,agi:c.agi!=null?c.agi:5,vit:c.vit!=null?c.vit:5,dex:c.dex!=null?c.dex:5,luk:c.luk!=null?c.luk:5,int:c.int!=null?c.int:5,range:c.range!=null?c.range:1,summonedBy:d.id};_!=null&&Array.isArray(_)&&_.length>0&&(O.summonedSkills=_),re.push(O),We(O);let I=Me.get(O.id);if(I&&M?.useGrayscaleAppearance&&Tt(I),I){let de=function(xe){Q++,Q%2===0&&Bt();let Pe=xe-V;if(Pe<Ue){let Ce=Pe/Ue,$e=1-(1-Ce)*(1-Ce),at=lt+(1-lt)*$e;I.scale.setScalar(at),requestAnimationFrame(de);return}let ke=Pe-Ue;if(ke<ht){let Ce=ke/ht,$e=Math.sin(Ce*Math.PI);I.position.y=oe.y+ln*$e,requestAnimationFrame(de);return}I.scale.setScalar(1),I.position.y=oe.y,Bt()},G=Me.get(d.id);I.rotation.y=G!=null?G.rotation.y:d.player===1?Math.PI:0,I.scale.setScalar(lt);let oe=Be(O.x,O.y),V=performance.now(),Q=0;requestAnimationFrame(de)}let ee=Qt==="playing"&&Xe.length>0&&je>=0&&je<Xe.length?Xe[je]:null;if(Xe=pl(),ee!=null){let G=Xe.indexOf(ee);G>=0&&(je=G)}return Ui(),typeof Ut=="function"&&Ut(),Bt(),O}function ra(d,c){let _=re.indexOf(c);if(_===-1)return null;re.splice(_,1);let M=Me.get(c.id);M&&(n.remove(M),Me.delete(c.id));let L=c.class&&Pi.includes(c.class)?c.class:"knight",P=c.hairColor!=null?c.hairColor:(Gs[L]||Gs.knight).hair,U=Pe=>Math.max(1,Math.floor((Pe||0)*6/7)),O=U(c.maxHp),I=U(c.maxMp),ee={name:"Reanimated "+c.name,class:L,hairColor:P,level:c.level,hp:U(c.maxHp),maxHp:O,mp:U(c.maxMp),maxMp:I,str:U(c.str),agi:U(c.agi),vit:U(c.vit),dex:U(c.dex),luk:U(c.luk),int:U(c.int),range:c.range},G=c.summonedSkills&&c.summonedSkills.length>0?c.summonedSkills.slice():(ta[L]||[]).slice(),oe=new Set(re.filter(Pe=>Pe.hp>0).map(Pe=>Pe.y*e.w+Pe.x)),V=c.x,Q=c.y,de=qs(e,V,Q)&&!oe.has(Q*e.w+V),xe={useGrayscaleAppearance:!0};return de&&(xe.position={gx:V,gy:Q}),Af(d,ee,G,xe)}function Rf(){document.getElementById("draft-panel").style.display="none";let d=document.getElementById("draft-placement-card");d&&(d.style.display="none",d.innerHTML=""),Bn();let c=document.getElementById("battle-start-overlay");c&&(c.classList.add("visible"),c.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");for(_&&(_.style.display="none",_.innerHTML=""),Qt="playing",Vi=0,Xe=pl(),je=0;je<Xe.length&&re.find(P=>P.id===Xe[je]).hp<=0;)je++;je>=Xe.length&&(je=0);let M=re.find(P=>P.id===Xe[je]);Rn=M?M.player:1,Et=!1,Tn=!1,en=Xe[je],setTimeout(()=>{c&&(c.classList.remove("visible"),c.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",Ui(),Ut(),fl(),xi(!0),gt==="cvcpu"&&ne()},4e3)}function ml(){let d=document.getElementById("draft-panel"),c=document.getElementById("draft-title"),_=document.getElementById("draft-classes"),M=document.getElementById("draft-message"),L=document.getElementById("turn-player"),P=document.getElementById("draft-placement-card");if(it){d.style.display="none",L.textContent=`Draft: ${w(Gi())} \u2014 place ${Jt[it].name}`;let ee=Gi();P.style.display="flex",P.classList.remove("player-1","player-2"),P.classList.add("player-"+ee),P.style.left=ee===1?"24px":"",P.style.right=ee===2?"24px":"";let G=[...re.filter(Q=>Q.player===ee).map(Q=>Q.class),it],oe=(Q,de)=>{let xe=Jt[Q];return`
        <div class="draft-class-card${de?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${ea[Q]||""}" alt="${xe.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${xe.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${xe.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${xe.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${xe.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${xe.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${xe.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${xe.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${xe.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${xe.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${xe.range}</span>
            </div>
          </div>
        </div>
      `},V=3;if(G.length>V){P.classList.add("draft-placement-cols");let Q=[];for(let xe=0;xe<G.length;xe+=V)Q.push(G.slice(xe,xe+V));let de=G.length-1;P.innerHTML=Q.map((xe,Pe)=>{let ke=Pe===Q.length-1,Ce=xe.map(($e,at)=>{let Nt=Pe*V+at===de;return oe($e,Nt)}).join("");return`<div class="draft-placement-col${ke?" draft-placement-col-current":""}">${Ce}</div>`}).join("")}else P.classList.remove("draft-placement-cols"),P.innerHTML=G.map((Q,de)=>{let xe=de===G.length-1;return oe(Q,xe)}).join("");gt==="pvcpu"&&Gi()===2&&setTimeout(ca,500),gt==="cvcpu"&&setTimeout(ca,500);return}P.style.display="none",P.innerHTML="",Qt==="draft"&&(d.style.display="flex");let U=document.getElementById("draft-detail");U&&(U.style.display="");let O=Gi();if(gt!=="online"||O===Kt){let Pe=function(){let ke=ft;if(!ke||!Jt[ke]){ee&&(ee.style.display=""),G&&(G.style.display="none"),oe&&(oe.style.display="none"),xe&&(xe.style.display="none");return}let Ce=Jt[ke],$e=ta[ke]||[];ee&&(ee.style.display="none"),G&&(G.src=ea[ke]||"",G.alt=Ce.name,G.style.display="block"),oe&&(oe.style.display="block"),V&&(V.textContent=Ce.name),Q&&(Q.innerHTML=[["HP",Ce.hp],["MP",Ce.mp],["STR",Ce.str],["AGI",Ce.agi],["VIT",Ce.vit],["DEX",Ce.dex],["LUK",Ce.luk],["INT",Ce.int],["Range",Ce.range]].map(([at,sn])=>`<span class="draft-stat-label">${at}</span><span class="draft-stat-value">${sn}</span>`).join("")),de&&(de.innerHTML=$e.length?$e.map(at=>`<div class="draft-detail-skill"><span class="draft-detail-skill-name">${at.name}</span><span class="draft-detail-skill-desc">${at.description||""}</span></div>`).join(""):'<div class="draft-detail-skill">No skills</div>'),xe&&(xe.style.display="block",xe.disabled=!nt.has(ke),xe.onclick=()=>{let at=ft;at&&nt.has(at)&&gl(at)}),_.querySelectorAll(".draft-class-card").forEach(at=>{at.classList.toggle("draft-class-card-selected",at.dataset.classKey===ke)})};c.textContent=`${w(O)}: Pick a class (${Sh()}/${Ci})`,M.textContent="",_.innerHTML="",L.textContent=`Draft: ${w(O)} \u2014 pick a class`;let ee=document.getElementById("draft-detail-placeholder"),G=document.getElementById("draft-detail-image"),oe=document.getElementById("draft-detail-content"),V=document.getElementById("draft-detail-name"),Q=document.getElementById("draft-detail-stats"),de=document.getElementById("draft-detail-skills"),xe=document.getElementById("draft-select-btn");ut.forEach(ke=>{let Ce=nt.has(ke),$e=Jt[ke],at=document.createElement("button");at.type="button",at.dataset.classKey=ke,at.className="draft-class-card"+(Ce?"":" draft-class-card-unavailable")+(ft===ke?" draft-class-card-selected":""),at.disabled=!Ce,at.innerHTML=`
          <img class="draft-class-card-image" src="${ea[ke]||""}" alt="${$e.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${$e.name}</div>
          </div>
        `,Ce&&at.addEventListener("click",()=>{ft=ke,Pe()}),_.appendChild(at)}),Pe()}else{c.textContent=`${w(O)} is picking a class`,M.textContent="",_.innerHTML="",L.textContent=`Draft: ${w(O)} \u2014 pick a class`;let ee=document.getElementById("draft-detail-placeholder"),G=document.getElementById("draft-detail-image"),oe=document.getElementById("draft-detail-content"),V=document.getElementById("draft-select-btn");ee&&(ee.style.display=""),G&&(G.style.display="none"),oe&&(oe.style.display="none"),V&&(V.style.display="none")}gt==="pvcpu"&&Gi()===2&&setTimeout(ca,500),gt==="cvcpu"&&setTimeout(ca,500)}function gl(d){if(!nt.has(d)||it)return;it=d;let c=Gi(),_=new Set(re.map(P=>P.y*e.w+P.x)),M=V_(e,c,_),L=cf(e,M);cn=new Set(L.map(P=>P.gy*e.w+P.gx)),Kf(L),ml(),gt==="online"&&c===Kt&&typeof fn=="function"&&fn({type:"draftPick",classKey:d})}function yl(d,c){if(!it)return;let _=Gi(),M=c*e.w+d;if(!cn.has(M))return;let L=Jt[it],P={id:Z++,player:_,x:d,y:c,level:1,name:L.name,class:it,hairColor:(Gs[it]||Gs.knight).hair,hp:L.hp,maxHp:L.maxHp,mp:L.mp,maxMp:L.maxMp,str:L.str,agi:L.agi,vit:L.vit,dex:L.dex,luk:L.luk,int:L.int,range:L.range};re.push(P),We(P);let U=Me.get(P.id);U&&(U.rotation.y=P.player===1?Math.PI:0),nt.delete(it),it=null,cn.clear(),Bn(),gt==="online"&&_===Kt&&typeof fn=="function"&&fn({type:"draftPlace",gx:d,gy:c});let O=document.getElementById("draft-placement-card");if(O&&(O.style.display="none",O.innerHTML=""),yt++,yt>=2*Ci){Rf();return}let I=Gi(),ee=Sh(),G=document.getElementById("draft-panel"),oe=document.getElementById("draft-title"),V=document.getElementById("draft-message"),Q=document.getElementById("draft-detail"),de=document.getElementById("draft-classes"),xe=document.getElementById("turn-player"),Pe=gt!=="online"||I===Kt;G&&oe&&de&&xe&&(G.style.display="flex",oe.textContent=Pe?`${w(I)}: Pick a class (${ee}/${Ci})`:`${w(I)} is picking a class`,V&&(V.textContent=Pe?"Get ready\u2026":""),de.innerHTML="",xe.textContent=`Draft: ${w(I)} \u2014 pick a class`),Q&&(Q.style.display="none"),setTimeout(ml,1500)}function Ut(){Ut._pending||(Ut._pending=!0,requestAnimationFrame(()=>{Ut._pending=!1,Cf()}))}function Cf(){let d=Ut._cache||(Ut._cache={}),c=d.turnEl||(d.turnEl=document.getElementById("turn-player")),_=d.menuLabel||(d.menuLabel=document.getElementById("menu-label")),M=d.turnMenu||(d.turnMenu=document.getElementById("turn-menu")),L=d.unitInfo||(d.unitInfo=document.getElementById("unit-info")),P=d.unitNameEl||(d.unitNameEl=document.getElementById("unit-name")),U=d.unitLevelClassEl||(d.unitLevelClassEl=document.getElementById("unit-level-class")),O=d.unitStatsEl||(d.unitStatsEl=document.getElementById("unit-stats")),I=d.unitClassImageEl||(d.unitClassImageEl=document.getElementById("unit-class-image"));if(Qt==="playing"&&re.forEach(V=>{if(V.hp<=0)return;let Q=Me.get(V.id);Q&&Yt(Q,V.maxHp>0&&V.hp/V.maxHp<Ee)}),M.classList.remove("player-1","player-2"),M.classList.add(Rn===1?"player-1":"player-2"),M.classList.toggle("level-2",!1),M.classList.toggle("level-3",!1),Qt==="playing"&&Xe.length>0){let V=Xe[je],Q=re.find(de=>de.id===V&&de.hp>0);gt==="online"&&Q&&Q.player!==Kt?en=null:Q&&(en==null||!re.find(de=>de.id===en&&de.hp>0))&&(en=V)}if(en!=null){let V=re.find(Q=>Q.id===en);if(V&&V.hp>0){L.classList.remove("no-unit");let Q=V.maxHp>0&&V.hp/V.maxHp<.25;M.classList.toggle("low-hp",Q),M.classList.toggle("level-2",V.level>=2&&V.level<3),M.classList.toggle("level-3",V.level>=3),P.textContent=V.name,U.textContent=`Lv.${V.level} ${V.class}`,I.src=ea[V.class]||"",I.alt=V.name;let de=[["HP",`${V.hp}/${V.maxHp}`,"stat-val-hp"],["MP",`${V.mp}/${V.maxMp}`,""],["STR",zi(V,"str"),""],["AGI",zi(V,"agi"),""],["VIT",zi(V,"vit"),""],["DEX",zi(V,"dex"),""],["LUK",zi(V,"luk"),""],["INT",zi(V,"int"),""]];V.tempDebuff&&V.tempDebuff.poison!=null&&de.push(["Poison",`${V.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),V.tempBuff&&V.tempBuff.heal!=null&&de.push(["Regen",`${V.tempBuff.heal} HP/turn`,"stat-val-buff"]),O.innerHTML=de.map(([xe,Pe,ke])=>{let Ce=ke?` ${ke}`:"";return`<span>${xe}</span><span class="stat-val${Ce}">${Pe}</span>`}).join("")}else M.classList.remove("low-hp","level-2","level-3"),L.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",U.textContent="",O.textContent="",I.src="",I.alt=""}else M.classList.remove("low-hp","level-2","level-3"),L.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",U.textContent="",O.textContent="",I.src="",I.alt="";if(en!=null)c.textContent=`${w(Rn)} \u2014 Unit ${P.innerHTML} active`;else{let V=Xe.length?re.find(Q=>Q.id===Xe[je]):null;c.textContent=V?`${V.name} (${w(Rn)})`:w(Rn)}_.textContent=w(Rn);let ee=d.btnAttack||(d.btnAttack=document.getElementById("btn-attack")),G=d.btnSkill||(d.btnSkill=document.getElementById("btn-skill")),oe=d.btnEnd||(d.btnEnd=document.getElementById("btn-end"));if(gt==="cvcpu"&&Qt==="playing")ee.disabled=!0,G.disabled=!0,oe&&(oe.disabled=!0),c.textContent=`${w(Rn)} (CPU)`;else if(Di)ee.disabled=!0,G.disabled=!0,c.textContent="Click on map to choose facing direction";else if(Qt==="playing"){ee.disabled=Tn;let V=Xe.length?Xe[je]:null,Q=V?re.find(Pe=>Pe.id===V&&Pe.hp>0):null,de=gt!=="cvcpu"&&(gt!=="pvcpu"||Rn===1)&&(gt!=="online"||Rn===Kt),xe=de&&Q&&!Tn?Al(Q):[];G.disabled=Tn||!de||xe.length===0,oe&&(oe.disabled=gt==="online"&&Rn!==Kt)}if(Qt==="playing"){let V=Math.min(Vi+1,ys);c.textContent=(c.textContent||"")+` \u2014 Turn ${V}/${ys}`;let Q=d.turnsLeftEl||(d.turnsLeftEl=document.getElementById("turns-left")),de=d.turnsLeftValueEl||(d.turnsLeftValueEl=document.getElementById("turns-left-value"));if(Q&&de){Q.style.display="";let xe=Math.max(0,ys-Vi);de.textContent=String(xe),Q.classList.toggle("turns-left-low",xe<=10),(xe===30||xe===20||xe===10)&&(Re[xe]||(pt(xe),Re[xe]=!0))}}else{let V=d.turnsLeftEl||(d.turnsLeftEl=document.getElementById("turns-left"));V&&(V.style.display="none")}Qt==="playing"&&wl(Rn)&&!kt&&setTimeout(Mn,700)}function nn(){if(gt==="online"&&Rn===Kt&&typeof Zs=="function"){let oe=Xe[je],V=Me.get(oe),Q=V?.rotation.y;Zs({type:"endTurn",unitId:oe,facingAngle:Q})}Bt(),hn(),_i=!1,pi=!1,Fn=null,Di=!1,vn=[],Tf(),Bn();let d=Xe.length;if(d===0)return;let c=Xe[je],_=re.find(oe=>oe.id===c);if(_&&_.tempDebuff&&_.tempDebuff.duration--,_&&_.tempDebuff&&_.tempDebuff.duration<=0&&(_.tempDebuff=void 0),_&&_.tempBuff&&_.tempBuff.duration--,_&&_.tempBuff&&_.tempBuff.duration<=0&&(_.tempBuff=void 0),_&&_.hp>0){let oe=Math.ceil(be(_,"int")*.15);_.mp=Math.min(_.maxMp,_.mp+oe)}if(_&&_.hp>0){let oe=_.x,V=_.y;e.type[V][oe]===st.CENTER&&_.level===1&&Ct(_);let Q=_.player===1?st.BASE_TOP:st.BASE_BOTTOM;e.type[V][oe]===Q&&_.level===2&&Ct(_)}if(Vi++,Vi>=ys){rp();return}let M=(je+1)%d,L=0;for(;L<d;){let oe=Xe[M],V=re.find(Q=>Q.id===oe);if(V&&V.hp>0)break;M=(M+1)%d,L++}let P=M===0;je=M;let U=["poison"],O=Xe[je],I=re.find(oe=>oe.id===O);for(let oe=0;oe<d&&!(!I||I.hp<=0);oe++){let V=I.tempDebuff||{},Q=U.find(xe=>!isNaN(V[xe])),de=V[Q]||0;if(de<=0)break;if(console.log("[DEBUFF]",`${Q}: ${de} to ${I.name}`),I.hp=Math.max(0,I.hp-de),si(I.x,I.y,String(de),!1,Q),Ze(I),I.hp<=0){kn(I),M=(je+1)%d;let xe=0;for(;xe<d;){let Pe=Xe[M],ke=re.find(Ce=>Ce.id===Pe);if(ke&&ke.hp>0)break;M=(M+1)%d,xe++}je=M;continue}break}let ee=Xe[je],G=re.find(oe=>oe.id===ee);if(G&&G.hp>0){let oe=G.tempBuff,V=oe&&oe.heal!=null&&!isNaN(oe.heal)?Number(oe.heal):0;if(V>0){let Q=G.hp;G.hp=Math.min(G.maxHp,G.hp+V);let de=G.hp-Q;de>0&&(console.log("[BUFF]",`heal: ${de} to ${G.name}`),si(G.x,G.y,`+${de}`,!1,"heal"),Ze(G))}}Rn=G&&G.hp>0?G.player:1,Et=!1,Tn=!1,en=Xe[je],P&&(Xe=pl(),je=0),Ut(),fl(),xi()}document.getElementById("btn-attack").addEventListener("click",()=>{if(kt||Tn||Qt!=="playing"||Xe.length===0)return;if(gt==="online"){let L=Xe[je],P=re.find(U=>U.id===L);if(!P||P.player!==Kt)return}hn();let d=Xe[je],c=re.find(L=>L.id===d);if(!c||c.hp<=0)return;let _=c.range!=null?c.range:1;en=d,_i=!0;let M=hf(e,c.x,c.y,_);vt=new Map,M.forEach((L,P)=>{let U=P%e.w,O=Math.floor(P/e.w);Ws(e,c.x,c.y,U,O)&&vt.set(P,L)}),Zf(vt),Ut()}),document.getElementById("btn-skill").addEventListener("click",d=>{if(d.preventDefault(),d.stopPropagation(),kt||Tn)return;let c=Xe[je],_=c?re.find(O=>O.id===c&&O.hp>0):null;if(!_||_.player!==Rn||gt==="online"&&_.player!==Kt)return;let M=document.getElementById("skill-list-overlay"),L=document.getElementById("btn-skill");if(!L)return;if(M&&M.style.display==="block"){M.style.display="none";return}let P=Al(_),U=L.getBoundingClientRect();M||(M=document.createElement("div"),M.id="skill-list-overlay",M.className="skill-list-overlay",M.setAttribute("aria-hidden","true"),document.body.appendChild(M)),M.style.left=`${U.left}px`,M.style.top=`${U.top-4}px`,M.style.transform="translateY(-100%)",M.style.right="auto",M.style.bottom="auto",M.style.display="none",P.length===0?M.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(M.innerHTML=P.map((O,I)=>`<button type="button" class="skill-option" data-skill-index="${I}" ${O.disabled?"disabled":""}>
          <span class="skill-name">${O.name}</span> <span class="skill-meta">${O.cost} MP \xB7 Lv.${O.level}</span><br/>
          <span class="skill-meta">${O.description}</span>
        </button>`).join(""),M.querySelectorAll(".skill-option").forEach((O,I)=>{O.addEventListener("click",ee=>{ee.preventDefault(),ee.stopPropagation();let G=P[I];if(Fn=G,M.style.display="none",M.setAttribute("aria-hidden","true"),G.target==="self"){if(_.mp<G.cost)return;_.mp-=G.cost,Tn=!0;let oe={showFloatingCombatText:si,handleUnitDeath:kn,updateUnitSlashVisibility:Ze,updateTurnUI:Ut,units:re,reanimateDeadUnit:ra};gt==="online"&&_.player===Kt&&typeof fn=="function"&&(fn({type:"requestRender"}),Zs({type:"skill",unitId:_.id,targetId:_.id,effectKey:G.effectKey})),Ya(_,_,G,oe,()=>{Bn(),pi=!1,Fn=null,_r=new Set,Et&&_.hp>0?nn():Ut()}),Ut();return}if(G.target==="ally"&&ua(_,G,re).filter(Q=>Q.targetUnit&&Q.targetUnit.id!==_.id).length===0&&_.mp>=G.cost){_.mp-=G.cost,Tn=!0;let Q={showFloatingCombatText:si,handleUnitDeath:kn,updateUnitSlashVisibility:Ze,updateTurnUI:Ut,units:re,reanimateDeadUnit:ra};gt==="online"&&_.player===Kt&&typeof fn=="function"&&(fn({type:"requestRender"}),Zs({type:"skill",unitId:_.id,targetId:_.id,effectKey:G.effectKey})),Ya(_,_,G,Q,()=>{Bn(),pi=!1,Fn=null,_r=new Set,Et&&_.hp>0?nn():Ut()}),Ut();return}pi=!0,_i=!1,$f(_,G),Ut()})})),requestAnimationFrame(()=>{M.style.display="block",M.style.visibility="visible",M.setAttribute("aria-hidden","false")})}),document.addEventListener("click",d=>{let c=document.getElementById("skill-list-overlay"),_=document.getElementById("btn-skill"),M=document.querySelector(".skill-wrap");!c||c.style.display!=="block"||M&&M.contains(d.target)||c.contains(d.target)||(c.style.display="none",c.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(kt||Di||Qt!=="playing"||Xe.length===0)return;let d=Xe[je],c=re.find(M=>M.id===d);if(!c||c.hp<=0||gt==="online"&&c.player!==Kt)return;Di=!0,en=null,_i=!1,vt=new Map,Bn(),Ef(),fl();let _=document.getElementById("turn-player");_.textContent="Click on map to choose facing direction",Ut()}),f.set(0,8,0),a.position.copy(f).add(h),a.lookAt(f);let dr=document.getElementById("mode-select-overlay"),Eh=document.getElementById("mode-carousel-track"),Th=document.getElementById("mode-carousel-prev"),wh=document.getElementById("mode-carousel-next"),za=document.getElementById("mode-carousel-dots"),as=document.getElementById("mode-play-btn"),Ah=document.getElementById("mode-settings-pvp"),Rh=document.getElementById("mode-settings-pvp-map"),Ch=document.getElementById("mode-settings-pvp-num-units"),Ph=document.getElementById("mode-settings-pvp-none"),Ih=document.getElementById("mode-settings-options"),Va=document.getElementById("pvp-map-mode"),aa=document.getElementById("pvp-num-units"),oa=document.getElementById("ai-draft-preference"),Pf=document.getElementById("cvcpu-num-games"),Ga=document.getElementById("cvcpu-num-units"),Lh=document.getElementById("cvcpu-grid-w"),Dh=document.getElementById("cvcpu-grid-h"),Uh=document.getElementById("cvcpu-center-plaza"),Nh=document.getElementById("cvcpu-max-turns"),fr=document.getElementById("move-speed"),pr=document.getElementById("draft-picks-per-player"),Ys=document.getElementById("online-connect-overlay"),Ni=document.getElementById("online-player-name"),$s=document.getElementById("online-create-section"),mr=document.getElementById("online-join-section"),gr=document.getElementById("online-offer-text"),Wa=document.getElementById("online-reply-text"),Xa=document.getElementById("online-paste-offer"),la=document.getElementById("online-join-answer-section"),yr=document.getElementById("online-answer-text"),xl=document.getElementById("online-error"),Oh=document.getElementById("online-waiting-msg"),ji=xs?["pvp","pvcpu","cvcpu","online","story"]:["pvp","pvcpu","online","story"],_l=ji.length-1,Hn=0;function vl(){return Hn===_l}function If(){return ji[Hn]==="online"}function qa(d){Hn=Math.max(0,Math.min(d,_l)),Eh&&(Eh.style.transform=`translateX(-${Hn*100}%)`),za&&za.querySelectorAll(".mode-dot").forEach((_,M)=>{_.classList.toggle("active",M===Hn),_.setAttribute("aria-selected",M===Hn)}),Ah&&(Ah.style.display=Hn===0||Hn===1||vl()||ji[Hn]==="online"?"":"none"),Rh&&(Rh.style.display=Hn===0||Hn===1||ji[Hn]==="online"?"":"none"),Ch&&(Ch.style.display=ji[Hn]==="pvp"?"":"none"),ji[Hn]==="pvp"&&aa&&(aa.style.width="11em",aa.value=String(Math.max(1,Math.min(20,Ci)))),Ph&&(Ph.style.display=vl()?"":"none"),Ih&&(Ih.style.display=xs&&ji[Hn]==="cvcpu"?"":"none"),xs&&ji[Hn]==="cvcpu"&&Ga&&(Ga.value=String(Math.max(1,Math.min(20,Ci))));let c=as?.querySelector(".mode-play-text");as&&c&&(vl()?(as.disabled=!0,c.textContent="Coming Soon"):(as.disabled=!1,c.textContent=If()?"Connect":"Play game"))}if(za)for(let d=0;d<=_l;d++){let c=document.createElement("button");c.type="button",c.className="mode-dot"+(d===0?" active":""),c.setAttribute("role","tab"),c.setAttribute("aria-label",`Mode ${d+1}`),c.setAttribute("aria-selected",d===0),c.addEventListener("click",()=>qa(d)),za.appendChild(c)}if(Th&&Th.addEventListener("click",()=>qa(Hn-1)),wh&&wh.addEventListener("click",()=>qa(Hn+1)),dr&&!xs){let d=dr.querySelector('.mode-slide[data-mode="cvcpu"]');d&&d.parentNode&&d.parentNode.removeChild(d)}if(qa(0),fr&&(fr.value=String(Vs),fr.addEventListener("input",()=>{let d=parseInt(fr.value,10);!Number.isNaN(d)&&d>=0&&(Vs=d)}),fr.addEventListener("change",()=>{let d=parseInt(fr.value,10);!Number.isNaN(d)&&d>=0&&(Vs=d)})),pr&&(pr.value=String(Ci),pr.addEventListener("input",()=>{let d=parseInt(pr.value,10);!Number.isNaN(d)&&d>=1&&(Ci=d)}),pr.addEventListener("change",()=>{let d=parseInt(pr.value,10);!Number.isNaN(d)&&d>=1&&(Ci=d)})),oa&&(F_.forEach(d=>{let c=document.createElement("option");c.value=d.value,c.textContent=d.label,oa.appendChild(c)}),oa.value=Je,oa.addEventListener("change",()=>{Je=oa.value})),Ys){let d=document.getElementById("online-btn-create"),c=document.getElementById("online-btn-join"),_=document.getElementById("online-btn-copy-offer"),M=document.getElementById("online-btn-connect"),L=document.getElementById("online-btn-join-connect"),P=document.getElementById("online-btn-copy-answer");d&&d.addEventListener("click",async()=>{let U=Ni&&Ni.value.trim()||"Player 1";if(!U){li("Enter your name");return}li("");try{_s=Va&&Va.value||"long",rs=(Date.now()^Math.random()*4294967295)>>>0,C(_s,rs);let O=await Uf(U,rs,_s);gr&&(gr.value=O),$s&&($s.style.display="flex",$s.style.alignItems="flex-start"),mr&&(mr.style.display="none")}catch(O){li(O.message||"Failed to create game")}}),_&&gr&&_.addEventListener("click",()=>{gr.select(),document.execCommand("copy")}),M&&Wa&&M.addEventListener("click",async()=>{let U=Wa.value.trim();if(!U){li("Paste your friend's reply");return}li("");try{await Of(U)}catch(O){li(O.message||"Failed to connect")}}),c&&c.addEventListener("click",()=>{if(!(Ni&&Ni.value.trim()||"Player 2")){li("Enter your name");return}li(""),$s&&($s.style.display="none"),mr&&(mr.style.display="flex")}),L&&Xa&&L.addEventListener("click",async()=>{let U=Xa.value.trim();if(!U){li("Paste the host's code");return}li("");try{Kt=2,Ii[2]=Ni&&Ni.value.trim()||"Player 2";let O=await Nf(Ii[2],U);yr&&(yr.value=O),la&&(la.style.display="flex",la.style.alignItems="flex-start")}catch(O){li(O.message||"Failed to join")}}),P&&yr&&P.addEventListener("click",()=>{yr.select(),document.execCommand("copy")})}let bs=new Audio;bs.loop=!0,bs.volume=.3,bs.preload="auto";let Ml=window.location.href.replace(/[^/]*$/,""),Fh=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:Ml+(Ml.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");bs.src=Fh,bs.addEventListener("error",()=>{let d=Ml+"assets/music/tavern.mp3";d!==Fh&&(bs.src=d)});function Lf(){bs.paused&&bs.play().catch(()=>{})}function li(d){xl&&(xl.textContent=d||"",xl.style.display=d?"block":"none")}function Bh(){Ys&&(Ys.style.display="none",Ys.setAttribute("aria-hidden","true"))}function Df(){li(""),Kt=1,Ii={1:"",2:""},Ys&&(Ys.style.display="flex",Ys.setAttribute("aria-hidden","false")),Ni&&(Ni.value=""),$s&&($s.style.display="none"),mr&&(mr.style.display="none"),gr&&(gr.value=""),Wa&&(Wa.value=""),Xa&&(Xa.value=""),yr&&(yr.value=""),la&&(la.style.display="none"),Oh&&(Oh.style.display="block")}function kh(d){return new Promise(c=>{if(d.iceGatheringState==="complete"){c();return}let _=()=>{d.iceGatheringState==="complete"&&(d.removeEventListener("icegatheringstatechange",_),c())};d.addEventListener("icegatheringstatechange",_)})}async function Uf(d,c,_){Li&&(Li.close(),Li=null,ss=null);let M=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),L=[];M.addEventListener("icecandidate",O=>{O.candidate&&L.push(O.candidate)});let P=M.createDataChannel("game-sync",{ordered:!0});ss=P,Li=M,P.addEventListener("open",()=>zh(P,!0));let U=await M.createOffer();return await M.setLocalDescription(U),await kh(M),JSON.stringify({type:"offer",sdp:M.localDescription.sdp,candidates:L,playerName:d||"Player 1"})}async function Nf(d,c){let _=JSON.parse(c),M=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),L=[];if(M.addEventListener("icecandidate",U=>{U.candidate&&L.push(U.candidate)}),M.addEventListener("datachannel",U=>{ss=U.channel,Li=M,zh(ss,!1)}),await M.setRemoteDescription(new RTCSessionDescription({type:"offer",sdp:_.sdp})),_.candidates&&_.candidates.length)for(let U of _.candidates)await M.addIceCandidate(new RTCIceCandidate(U));let P=await M.createAnswer();return await M.setLocalDescription(P),await kh(M),JSON.stringify({type:"answer",sdp:M.localDescription.sdp,candidates:L,playerName:d||"Player 2"})}async function Of(d){let c=JSON.parse(d);if(!Li){li("Create a game first, then paste your friend's reply.");return}let _=Li.signalingState;if(_!=="stable"){if(_!=="have-local-offer"){li("Wrong step: create a game first and send the code, then paste the reply.");return}if(await Li.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:c.sdp})),c.candidates&&c.candidates.length)for(let M of c.candidates)await Li.addIceCandidate(new RTCIceCandidate(M))}}let Hh=0,Ks=0,bl=[],Sl=!1,El=[];function xr(){Ks=Math.max(0,Ks-1),Ks===0&&Tl()}function Tl(){for(;Ks===0&&bl.length>0;){let d=bl.shift();if(d.type==="move"){kf(d.unitId,d.toGx,d.toGy);return}if(d.type==="attack"){d.strikes&&Array.isArray(d.strikes)&&d.strikes.length>0?Vh(d.unitId,d.targetId,void 0,void 0,d.strikes):Vh(d.unitId,d.targetId,d.hit,d.damage);return}if(d.type==="skill"){Hf(d);return}if(d.type==="endTurn"){if(d.unitId!=null&&d.facingAngle!=null){let c=Me.get(d.unitId);c&&(c.rotation.y=d.facingAngle)}nn();return}if(d.type==="unitDeath"){let c=re.find(M=>M.id===d.unitId),_=d.killerId!=null?re.find(M=>M.id===d.killerId):null;c&&(c.hp=0,kn(c,_,{skipSync:!0})),Tl();return}}}function zh(d,c){if(d.binaryType="arraybuffer",d.addEventListener("message",P=>{try{let U=JSON.parse(P.data);if(U.seq!=null&&U.seq<=Hh)return;U.seq!=null&&(Hh=U.seq),Ff(U,c)}catch(U){console.warn("Online message parse error",U)}}),d.addEventListener("close",()=>{gt==="online"&&li("Connection lost.")}),!c){let P=Ii[2]||Ni&&Ni.value.trim()||"Player 2";fn({type:"joined",playerName:P});return}let _=Ni&&Ni.value.trim()||"Player 1",M=rs??(Date.now()^Math.random()*4294967295)>>>0,L=_s||"long";Ii[1]=_,fn({type:"start",mapSeed:M,mapMode:L,playerName:_}),Bh(),sa()}function Ff(d,c){if(d.type==="start"){Ii[1]=d.playerName||"Player 1",rs=d.mapSeed,_s=d.mapMode||"long",C(_s,rs),Bh(),sa();return}if(d.type==="joined"){Ii[2]=d.playerName||"Player 2";return}if(Qt==="draft"){d.type==="draftPick"?gl(d.classKey):d.type==="draftPlace"&&yl(d.gx,d.gy);return}Qt==="playing"&&(d.type==="move"||d.type==="attack"||d.type==="skill"||d.type==="endTurn"||d.type==="unitDeath"?(bl.push(d),Tl()):d.type==="requestRender"&&Bt())}function fn(d){if(ss&&ss.readyState==="open"){let c=(typeof fn.seq<"u"?fn.seq:0)+1;fn.seq=c,ss.send(JSON.stringify({...d,seq:c}))}}function Zs(d){if(gt==="online"&&Sl&&(d.type==="attack"||d.type==="skill"||d.type==="endTurn")){El.push(d);return}fn(d)}function Bf(){for(;El.length>0;){let d=El.shift();fn(d)}}function kf(d,c,_){let M=re.find(L=>L.id===d);!M||M.hp<=0||(Ks++,Ht(M,c,_,()=>{Bt(),Ut(),xr()}))}function Vh(d,c,_,M,L){let P=re.find(I=>I.id===d),U=re.find(I=>I.id===c);if(!P||!U||U.hp<=0)return;Ks++;let O=()=>{Bt(),Ut(),xr()};L&&L.length>0?ha(P,U,void 0,void 0,O,L):ha(P,U,_,M,O)}function Hf(d){let c=re.find(M=>M.id===d.unitId),_=d.targetId!=null?re.find(M=>M.id===d.targetId):null;if(c)if(Ks++,d.effectKey&&c.mp>=(ta[c.class]||[]).find(M=>M.effectKey===d.effectKey)?.cost){let M=(ta[c.class]||[]).find(L=>L.effectKey===d.effectKey);if(M){c.mp-=M.cost;let L={showFloatingCombatText:si,handleUnitDeath:kn,updateUnitSlashVisibility:Ze,updateTurnUI:Ut,tryCollectPowerup:et,world:e,units:re,reanimateDeadUnit:ra,updateUnitPosition(O){let I=Me.get(O.id);I&&I.position.copy(Be(O.x,O.y))},animateKnockback(O,I,ee,G,oe,V){let Q=Me.get(O.id);if(!Q){V&&V();return}let de=Be(I,ee).clone(),xe=Be(G,oe).clone(),Pe=performance.now(),ke=0;function Ce($e){ke++,ke%2===0&&Bt();let at=Math.min(1,($e-Pe)/Vs),sn=Nt=>Nt*Nt*(3-2*Nt);Q.position.lerpVectors(de,xe,sn(at)),at<1?requestAnimationFrame(Ce):(Q.position.copy(xe),V&&V())}requestAnimationFrame(Ce)}};ka(d.effectKey,c,_,L),_&&Ze(_);let U=M.target==="self"||M.target==="ally"?M.target==="self"?c:_:null;U?rt(U,()=>{Bt(),Ut(),xr()}):(Bt(),setTimeout(()=>{Bt(),Ut(),xr()},400))}else Bt(),setTimeout(()=>{Bt(),Ut(),xr()},400)}else Bt(),setTimeout(()=>{Bt(),Ut(),xr()},400)}function zf(){if(ji[Hn]==="story")return;let d=ji[Hn];if(Lf(),gt=d,d==="online"){dr&&dr.classList.add("hidden"),Df();return}if(d==="pvp"||d==="pvcpu"){let c=Va&&Va.value||"long";C(c),d==="pvp"&&aa&&(Ci=Math.max(1,Math.min(20,parseInt(aa.value,10)||7)))}else d==="cvcpu"&&(xs&&Lh&&Dh&&Uh&&(mh=Math.max(5,Math.min(50,parseInt(Lh.value,10)||21)),gh=Math.max(5,Math.min(50,parseInt(Dh.value,10)||11)),yh=Math.max(.1,Math.min(.9,parseFloat(Uh.value)||.29))),xs&&Nh&&(ys=Math.max(10,Math.min(999,parseInt(Nh.value,10)||200))),C("long"));d==="cvcpu"&&(X=Math.max(1,parseInt(Pf?.value,10)||1),te=0,Ga&&(Ci=Math.max(1,Math.min(20,parseInt(Ga.value,10)||7)))),dr&&dr.classList.add("hidden"),sa()}as?as.addEventListener("click",d=>{if(as.disabled)return;let c=as.querySelector(".mode-play-ripple");if(c){let _=as.getBoundingClientRect();c.style.left=d.clientX-_.left+"px",c.style.top=d.clientY-_.top+"px",c.style.width=c.style.height="20px",c.style.marginLeft=c.style.marginTop="-10px",c.classList.remove("ripple"),c.offsetHeight,c.classList.add("ripple"),setTimeout(()=>c.classList.remove("ripple"),500)}zf()}):sa();function wl(d){return gt==="pvcpu"&&d===2||gt==="cvcpu"}function Vf(){let d=Pi.filter(V=>nt.has(V));if(d.length===0)return null;let c=Je||"balanced";if(c==="random")return d[Math.floor(Math.random()*d.length)];if(c==="custom")return ff.filter(Q=>nt.has(Q))[0]??d[0]??null;let _=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function M(V){let Q=Jt[V];if(!Q)return 1/0;let de=_.map(Pe=>Q[Pe]??0),xe=de.reduce((Pe,ke)=>Pe+ke,0)/de.length;return de.reduce((Pe,ke)=>Pe+(ke-xe)**2,0)/de.length}if(c==="tanky")return[...d].sort((Q,de)=>{let xe=Jt[Q]?.hp??0,Pe=Jt[de]?.hp??0;return Pe!==xe?Pe-xe:(Jt[de]?.vit??0)-(Jt[Q]?.vit??0)})[0]??null;if(c==="aggressive")return[...d].sort((Q,de)=>{let xe=Jt[Q]?.str??0,Pe=Jt[de]?.str??0;return Pe!==xe?Pe-xe:(Jt[de]?.agi??0)-(Jt[Q]?.agi??0)})[0]??null;if(c==="scout")return[...d].sort((Q,de)=>{let xe=Jt[Q]?.agi??0,Pe=Jt[de]?.agi??0;return Pe!==xe?Pe-xe:(Jt[de]?.dex??0)-(Jt[Q]?.dex??0)})[0]??null;if(c==="ranged")return[...d].sort((Q,de)=>{let xe=Jt[Q]?.range??0,Pe=Jt[de]?.range??0;return Pe!==xe?Pe-xe:(Jt[de]?.dex??0)-(Jt[Q]?.dex??0)})[0]??null;if(c==="caster")return[...d].sort((Q,de)=>{let xe=Jt[Q]?.int??0,Pe=Jt[de]?.int??0;return Pe!==xe?Pe-xe:(Jt[de]?.mp??0)-(Jt[Q]?.mp??0)})[0]??null;let L=Gi(),U=B_(Ci),O=re.filter(V=>V.player===L).map(V=>V.class),I={};for(let V of Object.keys(cl))I[V]=0;for(let V of O)for(let Q of Object.keys(cl))if(cl[Q].includes(V)){I[Q]++;break}let ee=V=>Math.max(0,(U[V]??0)-(I[V]??0)),G=V=>{for(let[Q,de]of Object.entries(cl))if(de.includes(V))return Q;return null};return[...d].sort((V,Q)=>{let de=G(V),xe=G(Q),Pe=de!=null?ee(de):0,ke=xe!=null?ee(xe):0;if(ke!==Pe)return ke-Pe;let Ce=Jt[V]?.hp??0,$e=Jt[Q]?.hp??0;return $e!==Ce?$e-Ce:M(V)-M(Q)})[0]??null}function ca(){if(Qt!=="draft"||!wl(Gi()))return;if(!it){let _=Vf();_&&gl(_),setTimeout(ca,500);return}let d=Array.from(cn).map(_=>({gx:_%e.w,gy:Math.floor(_/e.w)})),c=cf(e,d);if(c.length>0){let{gx:_,gy:M}=c[0];yl(_,M)}}function Gh(){let d=[];for(let c=0;c<e.h;c++)for(let _=0;_<e.w;_++)e.type[c][_]===st.CENTER&&d.push({gx:_,gy:c});return d}function Gf(d){let c=[],_=d===1?st.BASE_TOP:st.BASE_BOTTOM;for(let M=0;M<e.h;M++)for(let L=0;L<e.w;L++)e.type[M][L]===_&&c.push({gx:L,gy:M});return c}function bi(d,c,_,M){return Math.abs(d-_)+Math.abs(c-M)}function Wf(d){let c=d.range!=null?d.range:1,_=[];for(let M of re){if(M.hp<=0||M.player===d.player)continue;let L=bi(d.x,d.y,M.x,M.y);L<=c&&L>0&&Ws(e,d.x,d.y,M.x,M.y)&&_.push({target:M,dist:L})}return _}function Xf(d,c,_){let M=_??re.filter(P=>P.hp>0&&P.player===d.player&&P.id!==d.id),L=c??re.filter(P=>P.hp>0&&P.player!==d.player);for(let P of M)for(let U of L){let O=U.range!=null?U.range:1,I=bi(U.x,U.y,P.x,P.y);if(I<=O&&I>0&&Ws(e,U.x,U.y,P.x,P.y))return!0}return!1}function Ht(d,c,_,M){let L=d.x,P=d.y,U=Xs(e,d.x,d.y,c,_,re,d);if(!U||U.length<=1){M&&M();return}en=null,Bn(),kt=!0,g=!0,Ui(d.id),Bt();let O=Me.get(d.id),I=1;function ee(){if(I>=U.length){d.x=U[U.length-1].x,d.y=U[U.length-1].y,et(d),kt=!1,Fe(O),Ui(),vt=new Map,Et=!0,gt==="online"&&d.player===Kt&&typeof fn=="function"&&fn({type:"move",unitId:d.id,toGx:d.x,toGy:d.y}),M&&M();return}let G=U[I-1],oe=U[I],V=Be(G.x,G.y).clone(),Q=Be(oe.x,oe.y).clone(),de=Q.x-V.x,xe=Q.z-V.z;de*de+xe*xe>1e-6&&(O.rotation.y=Math.atan2(de,xe));let Pe=performance.now(),ke=0;function Ce($e){ke++,ke%2===0&&Bt();let at=Math.min(1,($e-Pe)/Vs),Nt=(It=>It*It*(3-2*It))(at);if(O.position.lerpVectors(V,Q,Nt),Qe(O,Nt),g){let It=a.position.distanceTo(f),rn=It<.1?o:It;m.copy(a.position).sub(f).normalize(),m.lengthSq()<.01&&m.copy(h).normalize(),f.lerp(O.position,l),a.position.copy(f).add(m.clone().multiplyScalar(rn)),a.lookAt(f)}at<1?requestAnimationFrame(Ce):(I++,ee())}requestAnimationFrame(Ce)}ee()}function Wh(d,c){let _=be(c,"agi")*.7+be(c,"luk")*.3,L=Math.random()*Math.max(.001,_)<=be(d,"dex"),P=0;if(L){let U=be(d,"str")*.7+be(d,"dex")*.2+be(d,"int")*.1-(be(c,"vit")*.3+be(c,"luk")*.2);P=Math.max(1,Math.floor(U))}return{isHit:L,damage:P}}function ha(d,c,_,M,L,P){let U,O;if(Array.isArray(P)&&P.length>0)O=!0,U=P.map(Ce=>{let $e=Ce.isHit!==void 0?Ce.isHit:Ce.hit;return{isHit:!!$e,damage:$e&&Ce.damage!=null&&Ce.damage>0?Ce.damage:0}});else if(_!==void 0){O=!0;let Ce=!!_,$e=Ce&&M!=null&&M>0?M:0;U=[{isHit:Ce,damage:$e}]}else O=!1,gt==="online"&&d.player===Kt&&typeof fn=="function"&&fn({type:"requestRender"}),U=[Wh(d,c)],d.tempBuff&&d.tempBuff.doubleAttack===!0&&c.hp>0&&U.push(Wh(d,c));if(Tn=!0,en=null,_i=!1,Bn(),!O&&gt==="online"&&d.player===Kt&&typeof Zs=="function"){let Ce=U.map($e=>({hit:$e.isHit,damage:$e.isHit?$e.damage:void 0}));Zs({type:"attack",unitId:d.id,targetId:c.id,strikes:Ce,hit:U[0].isHit,damage:U[0].isHit?U[0].damage:void 0})}if(!O){let Ce=c.hp;U.forEach(($e,at)=>{let sn=$e.isHit?Math.max(0,Ce-$e.damage):Ce;console.log("[ATTACK]",`${d.name} (${d.class}, P${d.player})`,"\u2192",`${c.name} (${c.class}, P${c.player})`,`strike ${at+1}/${U.length}:`,$e.isHit?`${$e.damage} dmg`:"MISS",`| ${c.name} HP ${Ce} \u2192 ${sn}/${c.maxHp}`),Ce=sn})}let I=Me.get(d.id);function ee(){ei.shadowMap.enabled=!0,kt=!1,L&&setTimeout(()=>L(),0),O||(Et&&d.hp>0?setTimeout(()=>nn(),400):setTimeout(()=>Ut(),400))}if(!I||!I.userData.rightArm){let $e=function(){if(Ce>=U.length||c.hp<=0){setTimeout(()=>{kt=!1,L&&L(),O||(Et&&d.hp>0?nn():Ut())},400);return}let at=U[Ce];Ce++,at.isHit?(c.hp=Math.max(0,c.hp-at.damage),si(c.x,c.y,String(at.damage),!1),Ze(c),c.hp<=0&&kn(c,d)):si(c.x,c.y,"MISS",!0),Ce<U.length&&c.hp>0?setTimeout($e,400):setTimeout(()=>{kt=!1,L&&L(),O||(Et&&d.hp>0?nn():Ut())},400)};kt=!0;let Ce=0;$e();return}let G=Be(d.x,d.y).clone(),oe=Be(c.x,c.y).clone(),V=G.clone().lerp(oe,.35),Q=oe.x-G.x,de=oe.z-G.z;if(Q*Q+de*de>1e-6&&(I.rotation.y=Math.atan2(Q,de)),(d.range!=null?d.range:1)>2){let Nt=function(It){if(It>=U.length||c.hp<=0){Ce&&(Ce.rotation.y=0),ee();return}let rn=U[It].isHit,zt=U[It].damage,Nn=new zs(.035,.035,.4,6),gn=new Un({color:16763972}),Ot=new Ye(Nn,gn);Ot.position.copy(G),Ot.position.y+=.6;let Vt=oe.clone().sub(G).normalize();Ot.quaternion.setFromUnitVectors(new B(0,1,0),Vt),n.add(Ot);let Zt=!1,Oe=null,Mt=!1,an=Ot.position.clone(),Cn=oe.clone();Cn.y+=.6;let yn=performance.now(),Zn=0;function pn(Pn){Zn++,Zn%2===0&&Bt();let Si=Pn-yn,ot=Math.min(1,Si/wt);if(Ot.position.lerpVectors(an,Cn,ot),Ce){let ct=Math.sin(ot*Math.PI)*1.1;Ce.rotation.y=-ct}if(!Zt&&ot>=1&&(Zt=!0,n.remove(Ot),Nn.dispose(),gn.dispose(),rn?(c.hp=Math.max(0,c.hp-zt),si(c.x,c.y,String(zt),!1),c.hp<=0&&(Mt=!0),Me.get(c.id)?Oe=Pn:Mt&&(kn(c,d),Mt=!1),Ze(c)):si(c.x,c.y,"MISS",!0)),Oe!=null&&rn){let ct=Me.get(c.id);if(ct){let wn=Math.min(1,(Pn-Oe)/dn),tn=1-wn;Ts.copy(at).multiplyScalar(sn*tn),ct.position.copy($e).add(Ts),wn>=1&&(ct.position.copy($e),Oe=null,Mt&&(kn(c,d),Mt=!1))}else Oe=null,Mt&&(kn(c,d),Mt=!1)}if(ot<1)requestAnimationFrame(pn);else{Ce&&(Ce.rotation.y=0);let ct=Oe==null;ct&&Mt&&(kn(c,d),Mt=!1),ct?It+1<U.length&&c.hp>0?Nt(It+1):ee():requestAnimationFrame(pn)}}requestAnimationFrame(pn)},Ce=I.userData.rightArm,$e=Be(c.x,c.y).clone(),at=oe.clone().sub(G).normalize(),sn=.4;kt=!0,ei.shadowMap.enabled=!1,Nt(0);return}function ke(Ce){if(Ce>=U.length||c.hp<=0){I.position.copy(G),I.userData.rightArm&&(I.userData.rightArm.rotation.y=0),ee();return}let $e=U[Ce].isHit,at=U[Ce].damage,sn=!1,Nt=performance.now(),It=I.userData.rightArm,rn=null,zt=!1,Nn=Be(c.x,c.y).clone(),gn=oe.clone().sub(G).normalize(),Ot=.4,Vt=0;function Zt(Oe){Vt++,Vt%2===0&&Bt();let Mt=Oe-Nt,an=Math.min(1,Mt/St),Cn=an<=.4?an/.4:1,yn=an>.4?(an-.4)/.6:0;an<=.4?I.position.lerpVectors(G,V,Cn):I.position.lerpVectors(V,G,yn);let Zn=an<=.35?an/.35:an<=.7?(.7-an)/.35:0;if(It.rotation.y=-Zn*1.1,!sn&&an>=Xt&&(sn=!0,$e?(c.hp=Math.max(0,c.hp-at),si(c.x,c.y,String(at),!1),c.hp<=0&&(zt=!0),Ze(c),Me.get(c.id)?rn=Oe:zt&&(kn(c,d),zt=!1)):si(c.x,c.y,"MISS",!0)),rn!=null&&$e){let pn=Me.get(c.id);if(pn){let Pn=Math.min(1,(Oe-rn)/dn),Si=1-Pn;Ts.copy(gn).multiplyScalar(Ot*Si),pn.position.copy(Nn).add(Ts),Pn>=1&&(pn.position.copy(Nn),rn=null,zt&&(kn(c,d),zt=!1))}else rn=null,zt&&(kn(c,d),zt=!1)}if(an<1)requestAnimationFrame(Zt);else{I.position.copy(G),It.rotation.y=0;let pn=rn==null;pn&&zt&&(kn(c,d),zt=!1),pn?Ce+1<U.length&&c.hp>0?ke(Ce+1):ee():requestAnimationFrame(Zt)}}requestAnimationFrame(Zt)}kt=!0,ei.shadowMap.enabled=!1,ke(0)}function qf(d,c){let _=Be(d,c);_.y+=.4;let M=new ns(.1,12,12),L=new Un({color:8930559,transparent:!0,opacity:.9}),P=new Ye(M,L);P.position.copy(_),n.add(P);let U=performance.now(),O=0;function I(ee){O++,O%2===0&&Bt();let G=ee-U,oe=Math.min(1,G/Le),V=oe*(2-oe);P.scale.setScalar(V*7.5),L.opacity=.9*(1-oe),oe<1?requestAnimationFrame(I):(n.remove(P),M.dispose(),L.dispose())}requestAnimationFrame(I)}function Ya(d,c,_,M,L){if(_.target==="enemy"&&c==null){setTimeout(()=>{M.updateTurnUI&&M.updateTurnUI(),L&&L()},400);return}let U=(_.range??0)>2&&c!=null&&(c.x!==d.x||c.y!==d.y),O=!U&&c!=null&&(c.x!==d.x||c.y!==d.y);if(!U&&!O){kt=!0,ka(_.effectKey,d,c,M);let Vt=_.target==="self"||_.target==="ally",Zt=_.target==="self"?d:c;Vt&&Zt?rt(Zt,()=>{setTimeout(()=>{kt=!1,M.updateTurnUI&&M.updateTurnUI(),L&&L()},400)}):setTimeout(()=>{kt=!1,M.updateTurnUI&&M.updateTurnUI(),L&&L()},400);return}if(O){let ae=function(_e){bn++,bn%2===0&&Bt();let ge=_e-tn,he=Math.min(1,ge/St),pe=he<=.4?he/.4:1,ve=he>.4?(he-.4)/.6:0;he<=.4?Vt.position.lerpVectors(Zt,Mt,pe):Vt.position.lerpVectors(Mt,Zt,ve);let me=he<=.35?he/.35:he<=.7?(.7-he)/.35:0;if(Pn.rotation.y=-me*1.1,!Si&&he>=Xt&&(Si=!0,ka(_.effectKey,d,c,wn),c.hp<=0&&(ct=!0),M.updateUnitSlashVisibility&&M.updateUnitSlashVisibility(c),Me.get(c.id)&&_.target!=="ally"?ot=_e:ct&&(kn(c,d),ct=!1)),ot!=null){let Ie=Me.get(c.id);if(Ie){let Gt=Math.min(1,(_e-ot)/dn),Rt=1-Gt;Ts.copy(Zn).multiplyScalar(pn*Rt),Ie.position.copy(yn).add(Ts),Gt>=1&&(Ie.position.copy(yn),ot=null,ct&&(kn(c,d),ct=!1))}else ot=null,ct&&(kn(c,d),ct=!1)}he<1?requestAnimationFrame(ae):(Vt.position.copy(Zt),Pn.rotation.y=0,ot==null&&ct&&(kn(c,d),ct=!1),ot==null?(ei.shadowMap.enabled=!0,kt=!1,setTimeout(()=>{M.updateTurnUI&&M.updateTurnUI(),L&&L()},400)):requestAnimationFrame(ae))},Vt=Me.get(d.id);if(!Vt||!Vt.userData.rightArm){kt=!0,ka(_.effectKey,d,c,M),M.updateUnitSlashVisibility&&M.updateUnitSlashVisibility(c),setTimeout(()=>{kt=!1,M.updateTurnUI&&M.updateTurnUI(),L&&L()},400);return}kt=!0;let Zt=Be(d.x,d.y).clone(),Oe=Be(c.x,c.y).clone(),Mt=Zt.clone().lerp(Oe,.35),an=Oe.x-Zt.x,Cn=Oe.z-Zt.z;an*an+Cn*Cn>1e-6&&(Vt.rotation.y=Math.atan2(an,Cn));let yn=Be(c.x,c.y).clone(),Zn=Oe.clone().sub(Zt).normalize(),pn=.4,Pn=Vt.userData.rightArm,Si=!1,ot=null,ct=!1,wn={...M,handleUnitDeath:void 0},tn=performance.now(),bn=0;ei.shadowMap.enabled=!1,requestAnimationFrame(ae);return}let I=Be(d.x,d.y).clone(),ee=Be(c.x,c.y).clone(),G=new zs(.035,.035,.4,6),oe=new Un({color:16763972}),V=new Ye(G,oe);V.position.copy(I),V.position.y+=.6;let Q=ee.clone().sub(I).normalize();V.quaternion.setFromUnitVectors(new B(0,1,0),Q),n.add(V),kt=!0;let de=Me.get(d.id),xe=de&&de.userData.rightArm?de.userData.rightArm:null;if(de){let Vt=ee.x-I.x,Zt=ee.z-I.z;Vt*Vt+Zt*Zt>1e-6&&(de.rotation.y=Math.atan2(Vt,Zt))}let Pe=V.position.clone(),ke=ee.clone();ke.y+=.6;let Ce=performance.now(),$e=Be(c.x,c.y).clone(),at=ee.clone().sub(I).normalize(),sn=.4,Nt=!1,It=null,rn=0,zt=null,Nn=_.effectKey==="powerShot"?{...M,animateKnockback(Vt,Zt,Oe,Mt,an,Cn){zt={targ:Vt,fromGx:Zt,fromGy:Oe,toGx:Mt,toGy:an,knockbackOnDone:Cn}}}:M;function gn(){ei.shadowMap.enabled=!0,kt=!1,setTimeout(()=>{M.updateTurnUI&&M.updateTurnUI(),L&&L()},400)}function Ot(Vt){rn++,rn%2===0&&Bt();let Zt=Vt-Ce,Oe=Math.min(1,Zt/wt);if(V.position.lerpVectors(Pe,ke,Oe),xe){let Mt=Math.sin(Oe*Math.PI)*1.1;xe.rotation.y=-Mt}if(!Nt&&Oe>=1&&(Nt=!0,n.remove(V),G.dispose(),oe.dispose(),_.type==="spell"&&qf(c.x,c.y),ka(_.effectKey,d,c,Nn),Me.get(c.id)&&c.hp>0&&(It=Vt),M.updateUnitSlashVisibility&&M.updateUnitSlashVisibility(c)),It!=null){let Mt=Me.get(c.id);if(Mt){let an=Math.min(1,(Vt-It)/dn),Cn=1-an;if(Ts.copy(at).multiplyScalar(sn*Cn),Mt.position.copy($e).add(Ts),an>=1&&(Mt.position.copy($e),It=null,zt)){let{targ:yn,fromGx:Zn,fromGy:pn,toGx:Pn,toGy:Si,knockbackOnDone:ot}=zt;zt=null,M.animateKnockback?M.animateKnockback(yn,Zn,pn,Pn,Si,()=>{ot&&ot(),M.updateUnitSlashVisibility&&M.updateUnitSlashVisibility(yn),gn()}):gn();return}}else if(It=null,zt){zt=null,gn();return}}if(Oe<1)requestAnimationFrame(Ot);else if(xe&&(xe.rotation.y=0),It==null)if(zt){let{targ:Mt,fromGx:an,fromGy:Cn,toGx:yn,toGy:Zn,knockbackOnDone:pn}=zt;zt=null,M.animateKnockback?M.animateKnockback(Mt,an,Cn,yn,Zn,()=>{pn&&pn(),M.updateUnitSlashVisibility&&M.updateUnitSlashVisibility(Mt),gn()}):gn()}else gn();else requestAnimationFrame(Ot)}ei.shadowMap.enabled=!1,requestAnimationFrame(Ot)}function Mn(){if(Qt!=="playing"||!wl(Rn)||kt||Xe.length===0)return;let d=Xe[je],c=re.find(ae=>ae.id===d);if(!c||c.hp<=0){setTimeout(()=>nn(),0);return}let _=be(c,"agi"),M=hl(e,c.x,c.y,_,re,c),L=new Set(re.filter(ae=>ae.hp>0&&ae.id!==c.id).map(ae=>ae.y*e.w+ae.x)),P=[];M.forEach((ae,_e)=>{ae!==0&&(L.has(_e)||P.push({gx:_e%e.w,gy:Math.floor(_e/e.w),dist:ae}))});let U=Wf(c),O=Gh(),I=Gf(c.player),ee=.25,G=.03,oe=c.maxHp>0&&c.hp/c.maxHp<ee,V=c.maxHp>0&&c.hp/c.maxHp<G,Q=c.level===2,de=O.filter(ae=>!L.has(ae.gy*e.w+ae.gx)),xe=I.filter(ae=>!L.has(ae.gy*e.w+ae.gx)),Pe=new Set(O.map(ae=>ae.gy*e.w+ae.gx)),ke=de.length>0?de:O,Ce=xe.length>0?xe:I,$e=ke.length>0?Zn(ke):null,at=Ce.length>0?Zn(Ce):null,sn=Al(c),Nt=c.tempBuff&&c.tempBuff.doubleAttack===!0,It=Nt?[]:sn.filter(ae=>!ae.disabled&&c.mp>=ae.cost&&ae.target==="enemy"),rn=It.length>0?Math.max(...It.map(ae=>ae.range||0)):0,zt=Math.max(c.range!=null?c.range:1,rn),Nn=c.level>=2&&zt>=2,gn=Nt?!1:Nn,Ot=re.filter(ae=>ae.hp>0&&ae.player!==c.player),Vt=re.filter(ae=>ae.hp>0&&ae.player===c.player&&ae.id!==c.id);function Zt(ae,_e){if(_e.length===0)return null;let ge=null,he=1/0;for(let pe of ae){let ve=0;for(let me of _e)ve+=bi(pe.gx,pe.gy,me.gx,me.gy);ve<he&&(he=ve,ge=pe)}return ge}function Oe(ae,_e){if(_e.length===0||ae.length===0)return null;let ge=null,he=1/0;for(let pe of ae){let ve=Math.min(..._e.map(me=>bi(pe.gx,pe.gy,me.gx,me.gy)));ve<he&&(he=ve,ge=pe)}return ge}function Mt(ae,_e){let ge=zt,he=[];for(let pe of re){if(pe.hp<=0||pe.player===c.player)continue;let ve=bi(ae,_e,pe.x,pe.y);ve<=ge&&ve>0&&Ws(e,ae,_e,pe.x,pe.y)&&he.push({target:pe,dist:ve})}return he}let an=new Set(P.map(ae=>ae.gy*e.w+ae.gx));function Cn(ae,_e){if(!ae||ae.length<=1)return null;let ge=Math.min(_e,ae.length-1);for(let he=ge;he>=1;he--){let pe=ae[he],ve=pe.y*e.w+pe.x;if(an.has(ve))return{gx:pe.x,gy:pe.y}}return null}function yn(ae,_e){if(!ae||ae.length<=1)return null;let ge=Math.min(_e,ae.length-1);for(let he=ge;he>=1;he--){let pe=ae[he];if(!L.has(pe.y*e.w+pe.x))return{gx:pe.x,gy:pe.y}}return null}function Zn(ae){let _e=null,ge=null,he=1/0;for(let pe of ae){let ve=Xs(e,c.x,c.y,pe.gx,pe.gy,re,c);ve&&ve.length>1&&ve.length<he&&(he=ve.length,_e=ve,ge=pe)}return _e&&ge?{path:_e,target:ge}:null}function pn(ae){let _e=ae??P;if(_e.length===0)return null;if(Ot.length===0)return _e[0];let ge=null,he=-1;for(let pe of _e){let ve=Math.min(...Ot.map(me=>bi(pe.gx,pe.gy,me.x,me.y)));ve>he&&(he=ve,ge=pe)}return ge}function Pn(ae){let _e=ae??P;if(_e.length===0)return null;if(Ot.length===0)return _e[0];let ge=c.maxHp>0&&c.hp/c.maxHp>=.6,he=null,pe=-1/0;for(let ve of _e){let me=Math.min(...Ot.map(Rt=>bi(ve.gx,ve.gy,Rt.x,Rt.y))),Ie=Vt.length>0?Math.min(...Vt.map(Rt=>bi(ve.gx,ve.gy,Rt.x,Rt.y))):999,Gt;ge?Gt=Ie<me?me-1e3:me:Gt=me-Ie,Gt>pe&&(pe=Gt,he=ve)}return he}function Si(){let ae=zt;if(Ot.length===0)return null;let _e=null,ge=-1;for(let he of P){let pe=Math.min(...Ot.map(me=>bi(he.gx,he.gy,me.x,me.y)));Ot.some(me=>{let Ie=bi(he.gx,he.gy,me.x,me.y);return Ie<=0||Ie>ae?!1:Ws(e,he.gx,he.gy,me.x,me.y)})&&pe>ge&&(ge=pe,_e=he)}return _e}function ot(ae){if(Tn||Ot.length===0||Et||P.length===0)return!1;function _e(ve,me){let Ie=null,Gt=ae;for(let Rt=-Gt;Rt<=Gt;Rt++)for(let In=-Gt;In<=Gt;In++){if(In===0&&Rt===0||Math.abs(In)+Math.abs(Rt)>Gt)continue;let Lt=ve.x+In,Sn=ve.y+Rt;if(Lt<0||Lt>=e.w||Sn<0||Sn>=e.h||!qs(e,Lt,Sn)||!Ws(e,Lt,Sn,ve.x,ve.y)||re.some(on=>on.hp>0&&on.x===Lt&&on.y===Sn))continue;let xt=Xs(e,c.x,c.y,Lt,Sn,re,c),Ft=xt?xt.length-1:1/0;xt&&xt.length>1&&(!me||Ft<=_)&&(!Ie||xt.length<Ie.length)&&(Ie=xt)}return Ie}let ge=[];for(let ve of Ot){let me=_e(ve,!0);me&&ge.push({enemy:ve,path:me})}if(ge.length>0){let ve=ge.filter(Rt=>Rt.enemy.maxHp>0&&Rt.enemy.hp/Rt.enemy.maxHp<ee),me=ve.length>0?ve:ge;ve.length>0?me.sort((Rt,In)=>Rt.enemy.hp-In.enemy.hp||Rt.path.length-In.path.length):me.sort((Rt,In)=>Rt.path.length-In.path.length||Rt.enemy.hp-In.enemy.hp);let Ie=me[0],Gt=Cn(Ie.path,_);if(Gt&&(Gt.gx!==c.x||Gt.gy!==c.y))return Ht(c,Gt.gx,Gt.gy,()=>setTimeout(Mn,600)),!0}let he=null,pe=1/0;for(let ve of Ot){let me=_e(ve,!1);me&&me.length<pe&&(pe=me.length,he=me)}if(he){let ve=Cn(he,_);if(ve&&(ve.gx!==c.x||ve.gy!==c.y))return Ht(c,ve.gx,ve.gy,()=>setTimeout(Mn,600)),!0}return!1}let ct=new Map;for(let ae of P){let _e=ae.gy*e.w+ae.gx;ct.has(_e)||ct.set(_e,Mt(ae.gx,ae.gy))}let wn=U.some(ae=>ae.target.maxHp>0&&ae.target.hp/ae.target.maxHp<ee),tn=wn||P.some(ae=>(ct.get(ae.gy*e.w+ae.gx)||[]).some(ge=>ge.target.maxHp>0&&ge.target.hp/ge.target.maxHp<ee));if(Tn){if(Et){setTimeout(()=>nn(),400);return}if(gn&&Ot.length>0&&le.size>0&&P.length>0){let pe=[];le.forEach((me,Ie)=>{pe.push({gx:Ie%e.w,gy:Math.floor(Ie/e.w)})});let ve=Zn(pe);if(ve){let me=yn(ve.path,_);if(me&&(me.gx!==c.x||me.gy!==c.y)){Ht(c,me.gx,me.gy,()=>setTimeout(nn,400));return}let Ie=Oe(P,pe);if(Ie&&(Ie.gx!==c.x||Ie.gy!==c.y)){Ht(c,Ie.gx,Ie.gy,()=>setTimeout(nn,400));return}}}if(ys-Vi<=20&&O.length>0){let pe=O.some(ve=>ve.gx===c.x&&ve.gy===c.y);if(pe&&P.length>0){let me=P.filter(Ie=>Pe.has(Ie.gy*e.w+Ie.gx)).filter(Ie=>Ie.gx!==c.x||Ie.gy!==c.y);if(me.length>0){let Ie=pn(me);if(Ie&&(Ie.gx!==c.x||Ie.gy!==c.y)){Ht(c,Ie.gx,Ie.gy,()=>setTimeout(nn,400));return}}setTimeout(()=>nn(),400);return}if(pe){setTimeout(()=>nn(),400);return}if(P.length>0){let ve=$e,me=ve?yn(ve.path,_):null;if(me&&(me.gx!==c.x||me.gy!==c.y)){Ht(c,me.gx,me.gy,()=>setTimeout(nn,400));return}let Ie=Oe(P,ke);if(Ie&&(Ie.gx!==c.x||Ie.gy!==c.y)){Ht(c,Ie.gx,Ie.gy,()=>setTimeout(nn,400));return}}setTimeout(()=>nn(),400);return}if(!oe&&P.length>0){if(Q&&I.length>0&&!I.some(ve=>ve.gx===c.x&&ve.gy===c.y)){let ve=at,me=ve?yn(ve.path,_):null;if(me&&(me.gx!==c.x||me.gy!==c.y)){Ht(c,me.gx,me.gy,()=>setTimeout(nn,400));return}let Ie=Oe(P,Ce);if(Ie&&(Ie.gx!==c.x||Ie.gy!==c.y)){Ht(c,Ie.gx,Ie.gy,()=>setTimeout(nn,400));return}}if(O.length>0&&!O.some(ve=>ve.gx===c.x&&ve.gy===c.y)){let ve=$e,me=ve?yn(ve.path,_):null;if(me&&(me.gx!==c.x||me.gy!==c.y)){Ht(c,me.gx,me.gy,()=>setTimeout(nn,400));return}let Ie=Oe(P,ke);if(Ie&&(Ie.gx!==c.x||Ie.gy!==c.y)){Ht(c,Ie.gx,Ie.gy,()=>setTimeout(nn,400));return}}}let _e=O.length>0?P.filter(pe=>Pe.has(pe.gy*e.w+pe.gx)):null,ge=_e!=null&&_e.length>0?_e:P,he=null;if(ge.length>0&&Vt.length>0&&(he=Pn(ge),he)){let pe=Xs(e,c.x,c.y,he.gx,he.gy,re,c),ve=pe?pe.length-1:1/0;(!pe||pe.length<=1||ve>_)&&(he=pn(ge))}if(!he&&ge.length>0&&(he=pn(ge)),he&&(he.gx!==c.x||he.gy!==c.y)){Ht(c,he.gx,he.gy,()=>setTimeout(nn,400));return}setTimeout(()=>nn(),400);return}if(V&&ys-Vi>20&&!Et&&P.length>0){let ae=null,_e=1/0;for(let he of P){let ve=(ct.get(he.gy*e.w+he.gx)||[]).filter(me=>me.target.maxHp>0&&me.target.hp/me.target.maxHp<ee);if(ve.length>0){let me=Math.min(...ve.map(Ie=>Ie.target.hp));me<_e&&(_e=me,ae=he)}}if(ae){let he=Xs(e,c.x,c.y,ae.gx,ae.gy,re,c),pe=he?Cn(he,_):null;if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Ht(c,pe.gx,pe.gy,()=>setTimeout(Mn,600));return}}let ge=pn();if(ge&&(ge.gx!==c.x||ge.gy!==c.y)){Ht(c,ge.gx,ge.gy,()=>setTimeout(Mn,600));return}setTimeout(()=>nn(),400);return}if(!Tn&&!Nt){let Rt=function(xt){return ua(c,xt,re).filter(qt=>qt.targetUnit!=null).map(qt=>qt.targetUnit)},ae=sn,_e=c.maxHp>0?c.hp/c.maxHp:1,ge=.35,he=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct","bloodSuck","gnaw","vodoo","skewer"]),pe=new Set(["chakra","sacrifice"]),ve=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify","warCry","foresight","overheal","rapid"]),me=new Set(["impale","poison","gaze","debilitate","bash","infect","curse"]),Ie=new Set(["dominate","manaDrain","weaken","cripple","hex","blind","raid"]),Gt=new Set(["reanimate"]),In={showFloatingCombatText:si,handleUnitDeath:kn,updateUnitSlashVisibility:Ze,updateTurnUI:Ut,tryCollectPowerup:et,world:e,units:re,reanimateDeadUnit:ra,updateUnitPosition(xt){let Ft=Me.get(xt.id);Ft&&Ft.position.copy(Be(xt.x,xt.y))},animateKnockback(xt,Ft,qt,on,Jn,mn){let zn=Me.get(xt.id);if(!zn){mn&&mn();return}let ws=Be(Ft,qt).clone(),Js=Be(on,Jn).clone(),Ll=performance.now(),jh=0;function Qh(ap){jh++,jh%2===0&&Bt();let eu=Math.min(1,(ap-Ll)/Vs),op=Dl=>Dl*Dl*(3-2*Dl);zn.position.lerpVectors(ws,Js,op(eu)),eu<1?requestAnimationFrame(Qh):(zn.position.copy(Js),mn&&mn())}requestAnimationFrame(Qh)}},Lt=null,Sn=null,Ei=wn||!Et&&tn;if(!Ei){for(let Ft of ae)if(!(Ft.disabled||c.mp<Ft.cost)&&pe.has(Ft.effectKey)){let on=ua(c,Ft,re).filter(Jn=>Jn.targetUnit&&Jn.targetUnit.maxHp>0&&Jn.targetUnit.hp/Jn.targetUnit.maxHp<.5);if(on.length>0){let Jn=on.sort((mn,zn)=>mn.targetUnit.hp-zn.targetUnit.hp)[0].targetUnit;Lt=Ft,Sn=Jn;break}}}if(!Lt&&!Ei){let xt=re.filter(Ft=>Ft.hp<=0);for(let Ft of ae)if(!(Ft.disabled||c.mp<Ft.cost)&&!(Ft.effectKey==="reanimate"&&!xt.length)&&Gt.has(Ft.effectKey)){Lt=Ft,Sn=c;break}}if(!Lt&&!Ei&&(U.length>0||P.some(Ft=>(ct.get(Ft.gy*e.w+Ft.gx)||[]).length>0))){let Ft=ae.filter(qt=>!qt.disabled&&ve.has(qt.effectKey)).sort((qt,on)=>(on.level||1)-(qt.level||1));for(let qt of Ft){let on=c.tempBuff&&c.tempBuff.duration>0;if(qt.target==="self"){if(qt.effectKey==="bloodlust"&&c.hp/c.maxHp>.8)continue;if(!on){Lt=qt,Sn=c;break}}if(qt.target==="ally"){if(qt.effectKey==="overheal"&&c.hp/c.maxHp>.7)continue;let mn=ua(c,qt,re).filter(zn=>zn.targetUnit!=null).map(zn=>zn.targetUnit);if(mn.length>0){if(mn.length<2&&on)continue;let zn=mn.filter(Js=>!Js.tempBuff||Js.tempBuff.duration<=0),ws=(zn.length>0?zn:mn).sort((Js,Ll)=>Js.hp-Ll.hp)[0];if(qt.effectKey==="overheal"&&ws.hp/ws.maxHp>.7)continue;Lt=qt,Sn=ws;break}}}}if(!Lt){for(let xt of ae)if(!(xt.disabled||c.mp<xt.cost)&&he.has(xt.effectKey)){if(xt.effectKey==="feast"&&c.hp/c.maxHp>.7||xt.effectKey==="warCry"&&c.hp/c.maxHp<.3||xt.effectKey==="berserk"&&c.hp/c.maxHp<.25||xt.effectKey==="shuriken"&&U.length>0||xt.effectKey==="judgement"&&c.hp/c.maxHp>.7)continue;let Ft=Rt(xt);if(Ft.length===0)continue;let qt=Ft.filter(mn=>mn.maxHp>0&&mn.hp/mn.maxHp<ge),on=qt.length>0?qt:Ft,Jn=xt.type==="spell"?on.reduce((mn,zn)=>{if(!mn)return zn;let ws=be(zn,"int")-be(mn,"int");return ws<0||ws===0&&zn.hp<mn.hp?zn:mn},null):on.reduce((mn,zn)=>!mn||zn.hp<mn.hp?zn:mn,null);Lt=xt,Sn=Jn;break}}if(!Lt&&!Ei){for(let xt of ae)if(!(xt.disabled||c.mp<xt.cost)&&Ie.has(xt.effectKey)){let Ft=Rt(xt),qt=Ft.length>0?Ft.reduce((on,Jn)=>!on||Jn.hp<on.hp?Jn:on,null):null;Lt=xt,Sn=qt;break}}if(!Lt&&!Ei){for(let xt of ae)if(!(xt.disabled||c.mp<xt.cost)&&me.has(xt.effectKey)){let qt=Rt(xt).filter(on=>!on.tempDebuff||on.tempDebuff.duration<=0);if(qt.length>0){let on=qt.reduce((Jn,mn)=>!Jn||mn.hp<Jn.hp?mn:Jn,null);Lt=xt,Sn=on;break}}}if(Lt&&Sn){c.mp-=Lt.cost,Tn=!0;let xt=Lt.target==="self"?c:Sn;Ya(c,xt,Lt,In,()=>setTimeout(Mn,600));return}}if(Xf(c,Ot,Vt)&&U.length>0){U.sort((_e,ge)=>_e.target.hp-ge.target.hp||_e.dist-ge.dist);let ae=U[0].target;ha(c,ae);return}if(U.length>0){U.sort((_e,ge)=>_e.target.hp-ge.target.hp||_e.dist-ge.dist);let ae=U[0].target;ha(c,ae);return}if(Nt&&ot(c.range!=null?c.range:1))return;if(!Et&&!tn&&le.size>0&&P.length>0){let ae=[];le.forEach((ge,he)=>{ae.push({gx:he%e.w,gy:Math.floor(he/e.w)})});let _e=Zn(ae);if(_e){let ge=yn(_e.path,_);if(ge&&(ge.gx!==c.x||ge.gy!==c.y)){Ht(c,ge.gx,ge.gy,()=>setTimeout(Mn,600));return}let he=Oe(P,ae);if(he&&(he.gx!==c.x||he.gy!==c.y)){Ht(c,he.gx,he.gy,()=>setTimeout(Mn,600));return}}}let bn=ys-Vi;if(bn<=20&&O.length>0&&!Et&&P.length>0&&!O.some(_e=>_e.gx===c.x&&_e.gy===c.y)){let _e=$e,ge=_e?_e.path:null,he=O.length>0?Math.min(...O.map(Lt=>bi(c.x,c.y,Lt.gx,Lt.gy))):1/0,pe=new Map,ve=new Map;for(let Lt of P){let Sn=Lt.gy*e.w+Lt.gx;pe.set(Sn,O.length>0?Math.min(...O.map(Ei=>bi(Lt.gx,Lt.gy,Ei.gx,Ei.gy))):1/0),ve.set(Sn,ge?ge.findIndex(Ei=>Ei.x===Lt.gx&&Ei.y===Lt.gy):-1)}let me=null,Ie=-1,Gt=ee;for(let Lt of P){let Sn=Lt.gy*e.w+Lt.gx;if(pe.get(Sn)>he||(ct.get(Sn)||[]).filter(on=>on.target.maxHp>0&&on.target.hp/on.target.maxHp<Gt).length===0)continue;let Ft=ve.get(Sn),qt=Ft>=0?Ft:0;qt>Ie&&(Ie=qt,me=Lt)}if(me&&(me.gx!==c.x||me.gy!==c.y)){Ht(c,me.gx,me.gy,()=>setTimeout(Mn,600));return}let Rt=_e?yn(_e.path,_):null;if(Rt&&(Rt.gx!==c.x||Rt.gy!==c.y)){Ht(c,Rt.gx,Rt.gy,()=>setTimeout(Mn,600));return}let In=Oe(P,ke);if(In&&(In.gx!==c.x||In.gy!==c.y)){Ht(c,In.gx,In.gy,()=>setTimeout(Mn,600));return}}if(oe&&P.length>0&&!Et){let ae=null,_e=1/0;for(let ge of P){let pe=(ct.get(ge.gy*e.w+ge.gx)||[]).filter(ve=>ve.target.maxHp>0&&ve.target.hp/ve.target.maxHp<ee);if(pe.length>0){let ve=Math.min(...pe.map(me=>me.target.hp));ve<_e&&(_e=ve,ae=ge)}}if(ae){let ge=Xs(e,c.x,c.y,ae.gx,ae.gy,re,c),he=ge?Cn(ge,_):null;if(he&&(he.gx!==c.x||he.gy!==c.y)){Ht(c,he.gx,he.gy,()=>setTimeout(Mn,600));return}}if(bn>20&&Q&&I.length>0&&!I.some(he=>he.gx===c.x&&he.gy===c.y)){let he=xe.length>0?xe:I,pe=at;if(pe!=null&&pe.path.length<=5){let me=yn(pe.path,_);if(me&&(me.gx!==c.x||me.gy!==c.y)){Ht(c,me.gx,me.gy,()=>setTimeout(Mn,600));return}let Ie=Oe(P,he);if(Ie&&(Ie.gx!==c.x||Ie.gy!==c.y)){Ht(c,Ie.gx,Ie.gy,()=>setTimeout(Mn,600));return}}}if(bn>20){let ge=pn();if(ge&&bi(c.x,c.y,ge.gx,ge.gy)>0){Ht(c,ge.gx,ge.gy,()=>setTimeout(Mn,600));return}setTimeout(()=>nn(),400);return}}if(bn<=10&&O.length>0&&!Et&&P.length>0&&!O.some(_e=>_e.gx===c.x&&_e.gy===c.y)){let _e=de.length>0?de:O,ge=$e,he=ge?yn(ge.path,_):null;if(he&&(he.gx!==c.x||he.gy!==c.y)){Ht(c,he.gx,he.gy,()=>setTimeout(Mn,600));return}let pe=Oe(P,_e);if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Ht(c,pe.gx,pe.gy,()=>setTimeout(Mn,600));return}}if(c.level===1&&O.length>0&&!Et&&!O.some(_e=>_e.gx===c.x&&_e.gy===c.y)&&P.length>0){let _e=de.length>0?de:O,ge=$e,he=ge?yn(ge.path,_):null;if(he&&(he.gx!==c.x||he.gy!==c.y)){Ht(c,he.gx,he.gy,()=>setTimeout(Mn,600));return}let pe=Oe(P,_e);if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Ht(c,pe.gx,pe.gy,()=>setTimeout(Mn,600));return}}if(Q&&I.length>0&&!Et&&!I.some(_e=>_e.gx===c.x&&_e.gy===c.y)&&P.length>0){let _e=Ot.filter(Gt=>Gt.maxHp>0&&Gt.hp/Gt.maxHp<ee),ge=null,he=1/0;for(let Gt of P){let In=(ct.get(Gt.gy*e.w+Gt.gx)||[]).find(Lt=>_e.some(Sn=>Sn.id===Lt.target.id));In&&In.target.hp<he&&(he=In.target.hp,ge=Gt)}if(ge){let Gt=Xs(e,c.x,c.y,ge.gx,ge.gy,re,c),Rt=Gt?Cn(Gt,_):null;if(Rt&&(Rt.gx!==c.x||Rt.gy!==c.y)){Ht(c,Rt.gx,Rt.gy,()=>setTimeout(Mn,600));return}}let pe=xe.length>0?xe:I,ve=at,me=ve?yn(ve.path,_):null;if(me&&(me.gx!==c.x||me.gy!==c.y)){Ht(c,me.gx,me.gy,()=>setTimeout(Mn,600));return}let Ie=Oe(P,pe);if(Ie&&(Ie.gx!==c.x||Ie.gy!==c.y)){Ht(c,Ie.gx,Ie.gy,()=>setTimeout(Mn,600));return}}if(gn&&Ot.length>0&&!Et&&P.length>0){if(!tn&&le.size>0){let _e=[];le.forEach((he,pe)=>{_e.push({gx:pe%e.w,gy:Math.floor(pe/e.w)})});let ge=Zn(_e);if(ge){let he=yn(ge.path,_);if(he&&(he.gx!==c.x||he.gy!==c.y)){Ht(c,he.gx,he.gy,()=>setTimeout(Mn,600));return}let pe=Oe(P,_e);if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Ht(c,pe.gx,pe.gy,()=>setTimeout(Mn,600));return}}}let ae=Si();if(ae&&(ae.gx!==c.x||ae.gy!==c.y)){Ht(c,ae.gx,ae.gy,()=>setTimeout(Mn,600));return}}!Nt&&ot(zt)||setTimeout(()=>nn(),400)}function Bn(){for(vi.length=0;ii.children.length;){let d=ii.children[0];ii.remove(d),d.geometry!==da&&d.geometry!==fa&&d.geometry.dispose(),d.material.dispose()}Bt()}let _r=new Set;function Al(d){if(!d)return[];let c=d.summonedSkills&&d.summonedSkills.length>0?d.summonedSkills:d.class&&ta[d.class]?ta[d.class]:[],_=re.some(M=>M.hp<=0);return c.map(M=>({...M,disabled:M.disabled===!0||d.level<(M.level||1)||M.hpCost&&d.hp<M.hpCost||M.cost!=null&&d.mp<M.cost||M.effectKey==="reanimate"&&!_}))}function ua(d,c,_){let M=[],L=(U,O,I,ee)=>Math.abs(U-I)+Math.abs(O-ee),P=c.range||0;if(c.target==="self")return M.push({gx:d.x,gy:d.y,targetUnit:null}),M;for(let U of _)U.hp<=0||L(d.x,d.y,U.x,U.y)>P||P>=2&&!Ws(e,d.x,d.y,U.x,U.y)||(c.target==="enemy"&&U.player!==d.player&&M.push({gx:U.x,gy:U.y,targetUnit:U}),c.target==="ally"&&U.player===d.player&&M.push({gx:U.x,gy:U.y,targetUnit:U}));return M}function Yf(d,c){let _=c.range||0;if(c.target==="self")return[{gx:d.x,gy:d.y}];let M=hf(e,d.x,d.y,_),L=[];return M.forEach((P,U)=>{let O=U%e.w,I=U/e.w|0;_>=2&&!Ws(e,d.x,d.y,O,I)||L.push({gx:O,gy:I})}),L}function $f(d,c){let _=ua(d,c,re);_r=new Set(_.map(L=>`${L.gx},${L.gy}`));let M=c.target==="self"?_:Yf(d,c);Bn(),M.forEach(({gx:L,gy:P})=>{let O=(ni+e.height[P][L]*.35)/2+ni/2,I=L*_t-Ge+_t/2,ee=P*_t-Wt+_t/2,G=O+.01,oe=new Un({color:8926122,transparent:!0,opacity:.4,side:Ln}),V=new Ye(da,oe);V.rotation.x=-Math.PI/2,V.position.set(I,G,ee),ii.add(V),vi.push(oe);let Q=new Un({color:11167436,transparent:!0,opacity:.7,side:Ln}),de=new Ye(fa,Q);de.rotation.x=-Math.PI/2,de.position.set(I,G+.01,ee),de.userData.gx=L,de.userData.gy=P,ii.add(de),vi.push(Q)})}let Xh=.82,qh=1.02,da=new ts(qh,qh),fa=new ts(Xh,Xh);function Kf(d){Bn(),d.forEach(({gx:c,gy:_})=>{let L=(ni+e.height[_][c]*.35)/2+ni/2,P=c*_t-Ge+_t/2,U=_*_t-Wt+_t/2,O=L+.01,I=new Un({color:2271812,transparent:!0,opacity:.4,side:Ln}),ee=new Ye(da,I);ee.rotation.x=-Math.PI/2,ee.position.set(P,O,U),ii.add(ee),vi.push(I);let G=new Un({color:4508774,transparent:!0,opacity:.7,side:Ln}),oe=new Ye(fa,G);oe.rotation.x=-Math.PI/2,oe.position.set(P,O+.01,U),oe.userData.gx=c,oe.userData.gy=_,ii.add(oe),vi.push(G)}),Bt()}function Rl(d){Bn(),d.forEach((c,_)=>{if(c===0)return;let M=_%e.w,L=_/e.w|0,U=(ni+e.height[L][M]*.35)/2+ni/2,O=M*_t-Ge+_t/2,I=L*_t-Wt+_t/2,ee=U+.01,G=new Un({color:3381759,transparent:!0,opacity:.35,side:Ln}),oe=new Ye(da,G);oe.rotation.x=-Math.PI/2,oe.position.set(O,ee,I),ii.add(oe),vi.push(G);let V=new Un({color:6730751,transparent:!0,opacity:.65,side:Ln}),Q=new Ye(fa,V);Q.rotation.x=-Math.PI/2,Q.position.set(O,ee+.01,I),ii.add(Q),vi.push(V)}),Bt()}function Zf(d){Bn(),d.forEach((c,_)=>{if(c===0)return;let M=_%e.w,L=_/e.w|0,U=(ni+e.height[L][M]*.35)/2+ni/2,O=M*_t-Ge+_t/2,I=L*_t-Wt+_t/2,ee=U+.01,G=new Un({color:10035746,transparent:!0,opacity:.4,side:Ln}),oe=new Ye(da,G);oe.rotation.x=-Math.PI/2,oe.position.set(O,ee,I),ii.add(oe),vi.push(G);let V=new Un({color:13386820,transparent:!0,opacity:.7,side:Ln}),Q=new Ye(fa,V);Q.rotation.x=-Math.PI/2,Q.position.set(O,ee+.01,I),ii.add(Q),vi.push(V)}),Bt()}let Ss=new sl,Es=new Ve;function $a(d,c){let _=t.getBoundingClientRect();return Es.x=(d-_.left)/_.width*2-1,Es.y=-((c-_.top)/_.height)*2+1,{x:Es.x,y:Es.y}}function Jf(d,c){if(kt)return;Es.x=d,Es.y=c,Ss.setFromCamera(Es,a);let _=Ss.intersectObjects(se.children,!0);if(_.length===0)return;let M=null;for(let O of _){let I=O.object;for(;I&&(I.userData.gx==null||I.userData.gy==null);)I=I.parent;if(I&&I.userData.gx!=null){M=I;break}}if(!M||M.userData.gx==null)return;let L=M.userData.gx,P=M.userData.gy;if(Qt==="draft"&&it){let O=P*e.w+L;cn.has(O)&&yl(L,P);return}if(Qt!=="playing"||gt==="cvcpu")return;if(pi&&Fn){let O=Xe[je],I=re.find(Q=>Q.id===O&&Q.hp>0);if(I&&L===I.x&&P===I.y){pi=!1,Fn=null,_r=new Set,Bn(),Et?vt=new Map:(vt=hl(e,I.x,I.y,be(I,"agi"),re,I),Rl(vt)),Ut();return}let ee=`${L},${P}`;if(!_r.has(ee))return;if(!I||I.mp<Fn.cost){pi=!1,Fn=null,Bn(),Ut();return}let G=re.find(Q=>Q.x===L&&Q.y===P&&Q.hp>0);if(Fn.target==="enemy"&&(!G||G.player===I.player)||Fn.target==="ally"&&G&&G.player!==I.player||Fn.target==="self"&&(L!==I.x||P!==I.y)||Fn.target==="enemy"&&!G)return;I.mp-=Fn.cost,Tn=!0;let oe={showFloatingCombatText:si,handleUnitDeath:kn,updateUnitSlashVisibility:Ze,updateTurnUI:Ut,tryCollectPowerup:et,world:e,units:re,reanimateDeadUnit:ra,updateUnitPosition(Q){let de=Me.get(Q.id);de&&de.position.copy(Be(Q.x,Q.y))},animateKnockback(Q,de,xe,Pe,ke,Ce){let $e=Me.get(Q.id);if(!$e){Ce&&Ce();return}let at=Be(de,xe).clone(),sn=Be(Pe,ke).clone(),Nt=performance.now(),It=0;function rn(zt){It++,It%2===0&&Bt();let Nn=Math.min(1,(zt-Nt)/Vs),gn=Ot=>Ot*Ot*(3-2*Ot);$e.position.lerpVectors(at,sn,gn(Nn)),Nn<1?requestAnimationFrame(rn):($e.position.copy(sn),Ce&&Ce())}requestAnimationFrame(rn)}},V=Fn.target==="self"?I:G||null;gt==="online"&&I.player===Kt&&typeof fn=="function"&&(fn({type:"requestRender"}),Zs({type:"skill",unitId:I.id,targetId:V?V.id:void 0,effectKey:Fn.effectKey})),Ya(I,V,Fn,oe,()=>{Bn(),pi=!1,Fn=null,_r=new Set,Et&&I.hp>0?nn():Ut()});return}if(Di){let O=Xe[je],I=re.find(G=>G.id===O);if(gt==="online"&&I&&I.player!==Kt)return;let ee=Me.get(O);if(I&&ee&&vn.length>0){let G=Be(I.x,I.y),oe=Be(L,P),V=oe.x-G.x,Q=oe.z-G.z,de=V*V+Q*Q>1e-6?Math.atan2(V,Q):ee.rotation.y;ee.rotation.y=Mh(de)}setTimeout(()=>nn(),400);return}if(en!=null&&_i){let O=re.find(G=>G.id===en);if(!O||O.player!==Rn||gt==="online"&&O.player!==Kt)return;let I=P*e.w+L,ee=re.find(G=>G.x===L&&G.y===P&&G.hp>0);if(ee&&ee.id===Xe[je]&&ee.player===Rn&&(gt!=="online"||ee.player===Kt)){_i=!1,en=ee.id,Et?(Bn(),vt=new Map):(vt=hl(e,ee.x,ee.y,be(ee,"agi"),re,ee),Rl(vt)),Ut();return}if(!vt.has(I)||vt.get(I)===0)return;ee&&ee.player!==Rn&&ha(O,ee);return}let U=re.find(O=>O.x===L&&O.y===P&&O.hp>0);if(U){if(U.id===Xe[je]&&U.player===Rn&&(gt!=="online"||U.player===Kt)){hn(),en=U.id,_i=!1,Et?(Bn(),vt=new Map):(vt=hl(e,L,P,be(U,"agi"),re,U),Rl(vt)),Ut();return}Bn(),vt=new Map,_i=!1,na(U),Ut();return}if(hn(),en!=null){let Q=function(){if(V>=G.length){O.x=G[G.length-1].x,O.y=G[G.length-1].y,et(O),kt=!1,Fe(oe),Ui(),vt=new Map,Et=!0,gt==="online"&&O.player===Kt&&typeof fn=="function"&&(fn({type:"move",unitId:O.id,toGx:O.x,toGy:O.y}),Sl=!1,Bf()),Tn&&O.hp>0?setTimeout(()=>nn(),400):setTimeout(()=>Ut(),400);return}let de=G[V-1],xe=G[V],Pe=Be(de.x,de.y).clone(),ke=Be(xe.x,xe.y).clone(),Ce=ke.x-Pe.x,$e=ke.z-Pe.z;Ce*Ce+$e*$e>1e-6&&(oe.rotation.y=Math.atan2(Ce,$e));let at=performance.now(),sn=0;function Nt(It){sn++,sn%2===0&&Bt();let rn=Math.min(1,(It-at)/Vs),Nn=(gn=>gn*gn*(3-2*gn))(rn);if(oe.position.lerpVectors(Pe,ke,Nn),Qe(oe,Nn),g){let gn=a.position.distanceTo(f),Ot=gn<.1?o:gn;m.copy(a.position).sub(f).normalize(),m.lengthSq()<.01&&m.copy(h).normalize(),f.lerp(oe.position,l),a.position.copy(f).add(m.clone().multiplyScalar(Ot)),a.lookAt(f)}rn<1?requestAnimationFrame(Nt):(V++,Q())}requestAnimationFrame(Nt)};if(_i)return;let O=re.find(de=>de.id===en);if(!O||O.player!==Rn||gt==="online"&&O.player!==Kt)return;let I=P*e.w+L;if(!vt.has(I)||vt.get(I)===0||re.some(de=>de.id!==O.id&&de.x===L&&de.y===P&&de.hp>0)||kt||Et)return;let G=Xs(e,O.x,O.y,L,P,re,O);if(!G||G.length<=1)return;gt==="online"&&O.player===Kt&&typeof fn=="function"&&(fn({type:"requestRender"}),Sl=!0),en=null,Bn(),kt=!0,g=!0,Ui(O.id);let oe=Me.get(O.id),V=1;Q()}}function Yh(d){T.x=d.clientX,T.y=d.clientY,R=d.isTouch===!0,S=d.ctrlKey,v=$a(d.clientX,d.clientY),t.style.cursor=(d.ctrlKey,"grabbing")}function Cl(d){return d.touches&&d.touches.length>0?{clientX:d.touches[0].clientX,clientY:d.touches[0].clientY}:d.changedTouches&&d.changedTouches.length>0?{clientX:d.changedTouches[0].clientX,clientY:d.changedTouches[0].clientY}:{clientX:d.clientX,clientY:d.clientY}}function $h(d){if(!d||d.length<2)return 0;let c=d[0],_=d[1];return Math.hypot(_.clientX-c.clientX,_.clientY-c.clientY)}function jf(d){if(d.touches.length===2){z=$h(d.touches),v=null;return}if(d.touches.length!==1)return;z=null;let c=Cl(d);Yh({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1,isTouch:!0})}function Qf(d){if(d.touches.length===2){d.preventDefault();let _=$h(d.touches);if(z!=null&&z>0){let M=_-z,L=a.position.distanceTo(f),P=Math.max($,Math.min(ce,L-M*k));x.copy(f).sub(a.position).normalize(),a.position.copy(f).sub(x.multiplyScalar(P)),a.lookAt(f),Ms=performance.now()}z=_;return}if(z=null,d.touches.length!==1)return;d.preventDefault();let c=Cl(d);Kh({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1})}function ep(d){if(d.touches.length<2&&(z=null),d.touches.length===2||d.changedTouches.length===0)return;R=!1;let c=Cl(d);Pl({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1})}function Kh(d){if(Di){Sf(d.clientX,d.clientY);return}if(v==null)return;let c=d.clientX-T.x,_=d.clientY-T.y;if(!b&&!y&&(Math.abs(c)>A||Math.abs(_)>A)&&(d.ctrlKey||S?(y=!0,g=!1):(b=!0,g=!1)),y){Y.copy(a.position).sub(f);let M=Y.length();if(M<.001)return;let L=Math.atan2(Y.x,Y.z),P=Math.asin(Math.max(-1,Math.min(1,Y.y/M)));L-=c*F,P+=_*F,P=Math.max(D,Math.min(N,P)),Y.x=M*Math.cos(P)*Math.sin(L),Y.y=M*Math.sin(P),Y.z=M*Math.cos(P)*Math.cos(L),a.position.copy(f).add(Y),a.lookAt(f),T.x=d.clientX,T.y=d.clientY,Ms=performance.now()}else if(b){let M=$a(d.clientX,d.clientY);p.setFromNormalAndCoplanarPoint(new B(0,1,0),new B(0,f.y,0)),Ss.setFromCamera(new Ve(v.x,v.y),a),Ss.ray.intersectPlane(p,u);let L=u.clone();Ss.setFromCamera(new Ve(M.x,M.y),a),Ss.ray.intersectPlane(p,u);let P=L.sub(u);R&&P.multiplyScalar(q),f.add(P),a.position.add(P),a.lookAt(f),v={x:M.x,y:M.y},Ms=performance.now()}}function Pl(d){if(v!=null&&!b&&!y){let c=$a(d.clientX,d.clientY);Jf(c.x,c.y)}v=null,b=!1,y=!1,S=!1,t.style.cursor="grab"}function tp(d){d.preventDefault();let c=a.position.distanceTo(f),_=Math.max($,Math.min(ce,c+d.deltaY*Se));x.copy(f).sub(a.position).normalize(),a.position.copy(f).sub(x.multiplyScalar(_)),a.lookAt(f),Ms=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",Yh),t.addEventListener("mousemove",Kh),t.addEventListener("mouseup",Pl),t.addEventListener("mouseleave",Pl),t.addEventListener("touchstart",jf,{passive:!0}),t.addEventListener("touchmove",Qf,{passive:!1}),t.addEventListener("touchend",ep,{passive:!0}),t.addEventListener("wheel",tp,{passive:!1});function Zh(){let d=t.clientWidth,c=t.clientHeight;a.aspect=d/c,a.updateProjectionMatrix(),ei.setSize(d,c),ei.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",Zh);let ei=new Pa({antialias:!1});ei.setSize(t.clientWidth,t.clientHeight),ei.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),ei.shadowMap.enabled=!0,ei.shadowMap.type=lh,t.appendChild(ei.domElement),Zh();let Ka=document.createElement("div");Ka.id="combat-text-layer",t.appendChild(Ka);let Qi=new B,Ts=new B,np=1400;function si(d,c,_,M,L){let P=document.createElement("div");P.className="combat-text-float "+(M?"miss":"damage")+(L?" "+L:""),P.textContent=_,P.style.position="absolute",Ka.appendChild(P);let U=L==="skill-name"?1.7:1.2,O=performance.now();function I(){Qi.copy(Be(d,c)),Qi.y+=U,Qi.project(a);let oe=t.clientWidth,V=t.clientHeight;P.style.left=(Qi.x*.5+.5)*oe+"px",P.style.top=(1-(Qi.y*.5+.5))*V+"px"}let ee=0;function G(){ee%2===0&&I(),ee++,performance.now()-O<np?requestAnimationFrame(G):P.remove()}requestAnimationFrame(G)}let ip=1500;function sp(d,c){let _=document.createElement("div");_.className="combat-text-float "+(c||"levelup"),_.textContent="LEVEL UP!",_.style.position="absolute",Ka.appendChild(_);let M=performance.now(),L=0;function P(){Qi.copy(Be(d.x,d.y)),Qi.y+=1.2,Qi.project(a);let O=t.clientWidth,I=t.clientHeight;_.style.left=(Qi.x*.5+.5)*O+"px",_.style.top=(1-(Qi.y*.5+.5))*I+"px"}function U(){L%2===0&&P(),L++,performance.now()-M<ip?requestAnimationFrame(U):_.remove()}requestAnimationFrame(U)}function kn(d,c,_){if(d.deathOrder=++_n,gt==="online"&&typeof fn=="function"&&!(_&&_.skipSync)&&fn({type:"unitDeath",unitId:d.id,killerId:c?.id}),H_(c,d,re),console.log("[DEATH]",`${d.name} (${d.class}, P${d.player})`,`at (${d.x},${d.y})`,`Lv.${d.level}`),si(d.x,d.y,"DEAD",!1),re.filter(O=>O.summonedBy===d.id&&O.hp>0).map(O=>O.id).forEach(O=>{let I=re.find(ee=>ee.id===O);I&&(I.hp=0,kn(I,null,{skipSync:!0}))}),Qt==="playing"&&Xe.length>0&&d.id===Xe[je]){let O=d.id;queueMicrotask(()=>{if(Qt!=="playing"||Xe.length===0||Xe[je]!==O)return;let I=re.find(ee=>ee.id===O);I&&I.hp>0||nn()})}let L=Me.get(d.id);if(!L){Ui(),Jh();return}let P=performance.now();function U(O){Bt();let I=O-P,ee=Math.min(1,I/H),G=ee*ee;L.rotation.x=G*Math.PI*.5,ee<1?requestAnimationFrame(U):(n.remove(L),Me.delete(d.id),Ui(),Jh())}requestAnimationFrame(U)}function Jh(){if(Qt!=="playing")return;let d=re.some(_=>_.player===1&&_.hp>0&&!_.summonedBy),c=re.some(_=>_.player===2&&_.hp>0&&!_.summonedBy);d?c||Il(1):Il(2)}function rp(){let d=Gh(),c=new Set(d.map(U=>U.gy*e.w+U.gx)),_=re.filter(U=>U.hp>0&&U.player===1&&!U.summonedBy&&c.has(U.y*e.w+U.x)).length,M=re.filter(U=>U.hp>0&&U.player===2&&!U.summonedBy&&c.has(U.y*e.w+U.x)).length,L=null,P="";if(_>M)L=1,P=`Time's up! ${w(1)} wins! (${_} vs ${M} units on center base)`;else if(M>_)L=2,P=`Time's up! ${w(2)} wins! (${M} vs ${_} units on center base)`;else{let U=re.filter(I=>I.hp>0&&I.player===1&&!I.summonedBy).reduce((I,ee)=>I+ee.hp,0),O=re.filter(I=>I.hp>0&&I.player===2&&!I.summonedBy).reduce((I,ee)=>I+ee.hp,0);U>O?(L=1,P=`Time's up! Draw on center \u2014 ${w(1)} wins on total HP (${U} vs ${O})`):O>U?(L=2,P=`Time's up! Draw on center \u2014 ${w(2)} wins on total HP (${O} vs ${U})`):P=`Draw! (equal units on center: ${_}, equal HP)`}Il(L,P)}function Il(d,c){He(),z_(re,d),Qt="gameover",document.getElementById("turn-menu").style.display="none",hn(),Bn();let _=document.getElementById("game-over-overlay"),M=document.getElementById("game-over-title"),L=document.getElementById("game-over-cards"),P=document.getElementById("game-over-class-record");P&&(P.style.display="none",P.innerHTML=""),M.textContent=c??`${w(d)} wins!`;let U=re.filter(O=>O.player===(d??1));if(L.innerHTML=U.map(O=>{let I=O,ee=O.level>=3?" level-3":O.level>=2?" level-2":"",G=I.maxHp>0&&I.hp/I.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${ee}${G}">
          <img class="game-over-card-image" src="${ea[O.class]||""}" alt="${I.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${I.name}</div>
            <div class="game-over-card-meta">Lv.${I.level} ${I.class} \u2014 HP ${I.hp}/${I.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${I.hp}/${I.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${I.mp}/${I.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${be(I,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${be(I,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${be(I,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${be(I,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${be(I,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${be(I,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${I.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),_.classList.add("visible"),gt==="cvcpu"){if(te++,P&&xs&&te>=X){let O=Pi.map(I=>{let ee=is[I],G=ee.wins+ee.losses||1,oe=ee.wins+ee.losses>0?(ee.wins/G*100).toFixed(1)+"%":"\u2014",V=ee.wins+ee.losses>0?(ee.losses/G*100).toFixed(1)+"%":"\u2014";return{class:I,battles:ee.battles,kills:ee.kills,deaths:ee.deaths,wins:ee.wins,losses:ee.losses,winRate:oe,lossRate:V}});P.innerHTML=`
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
              ${O.map(I=>`
                <tr>
                  <td class="class-name">${I.class}</td>
                  <td>${I.battles}</td>
                  <td>${I.kills}</td>
                  <td>${I.deaths}</td>
                  <td>${I.wins}</td>
                  <td>${I.losses}</td>
                  <td>${I.winRate}</td>
                  <td>${I.lossRate}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `,P.style.display="block"}te<X&&setTimeout(()=>{_.classList.remove("visible"),E(),sa()},2e3)}}function vr(d=0){requestAnimationFrame(vr),Ms===0&&(Ms=d);let c=d-Ms>500;vr.frameCount=(typeof vr.frameCount=="number"?vr.frameCount:0)+1;let _=()=>{if(vs){let M=.6+.4*Math.sin(d*.004);for(let L=0;L<vi.length;L++){let P=L%2===0?.4:.7;vi[L].opacity=P*M}ei.render(n,a),vs=!1}};c?d-vh>=100&&(vh=d,vs=!0,_()):(vr.frameCount%2===0&&(vs=!0),_())}vr()}q_();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
