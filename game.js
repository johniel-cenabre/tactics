var Th="160";var Dp=0,bu=1,Up=2;var af=1,wh=2,ps=3,Gs=0,_i=1,An=2;var Hs=0,$r=1,Su=2,Eu=3,Tu=4,Np=5,or=100,Op=101,Fp=102,wu=103,Au=104,Bp=200,kp=201,Hp=202,zp=203,Uc=204,Nc=205,Vp=206,Gp=207,Wp=208,Xp=209,qp=210,Yp=211,$p=212,Kp=213,Zp=214,Jp=0,jp=1,Qp=2,zo=3,em=4,tm=5,nm=6,im=7,of=0,sm=1,rm=2,zs=0,am=1,om=2,lm=3,cm=4,hm=5,um=6;var lf=300,Jr=301,jr=302,Oc=303,Fc=304,El=306,Oa=1e3,Ki=1001,Bc=1002,fi=1003,Ru=1004;var jl=1005;var Fi=1006,dm=1007;var Fa=1008;var Vs=1009,fm=1010,pm=1011,Ah=1012,cf=1013,Bs=1014,ks=1015,Ba=1016,hf=1017,uf=1018,cr=1020,mm=1021,Zi=1023,gm=1024,ym=1025,hr=1026,Qr=1027,xm=1028,df=1029,_m=1030,ff=1031,pf=1033,Ql=33776,ec=33777,tc=33778,nc=33779,Cu=35840,Pu=35841,Iu=35842,Lu=35843,mf=36196,Du=37492,Uu=37496,Nu=37808,Ou=37809,Fu=37810,Bu=37811,ku=37812,Hu=37813,zu=37814,Vu=37815,Gu=37816,Wu=37817,Xu=37818,qu=37819,Yu=37820,$u=37821,ic=36492,Ku=36494,Zu=36495,vm=36283,Ju=36284,ju=36285,Qu=36286;var Vo=2300,Go=2301,sc=2302,ed=2400,td=2401,nd=2402;var gf=3e3,ur=3001,Mm=3200,bm=3201,yf=0,Sm=1,Bi="",si="srgb",gs="srgb-linear",Rh="display-p3",Tl="display-p3-linear",Wo="linear",_n="srgb",Xo="rec709",qo="p3";var Ar=7680;var id=519,Em=512,Tm=513,wm=514,xf=515,Am=516,Rm=517,Cm=518,Pm=519,sd=35044;var rd="300 es",kc=1035,ms=2e3,Yo=2001,Ws=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rc=Math.PI/180,Hc=180/Math.PI;function sa(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]+"-"+li[e&255]+li[e>>8&255]+"-"+li[e>>16&15|64]+li[e>>24&255]+"-"+li[t&63|128]+li[t>>8&255]+"-"+li[t>>16&255]+li[t>>24&255]+li[n&255]+li[n>>8&255]+li[n>>16&255]+li[n>>24&255]).toLowerCase()}function hi(i,e,t){return Math.max(e,Math.min(t,i))}function Im(i,e){return(i%e+e)%e}function ac(i,e,t){return(1-t)*i+t*e}function ad(i){return(i&i-1)===0&&i!==0}function zc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ea(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class i{constructor(e,t,n,s,r,a,o,l,u){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u)}set(e,t,n,s,r,a,o,l,u){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],d=n[4],p=n[7],f=n[2],g=n[5],x=n[8],M=s[0],y=s[3],m=s[6],S=s[1],v=s[4],w=s[7],O=s[2],U=s[5],N=s[8];return r[0]=a*M+o*S+l*O,r[3]=a*y+o*v+l*U,r[6]=a*m+o*w+l*N,r[1]=u*M+d*S+p*O,r[4]=u*y+d*v+p*U,r[7]=u*m+d*w+p*N,r[2]=f*M+g*S+x*O,r[5]=f*y+g*v+x*U,r[8]=f*m+g*w+x*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return t*a*d-t*o*u-n*r*d+n*o*l+s*r*u-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=d*a-o*u,f=o*l-d*r,g=u*r-a*l,x=t*p+n*f+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=p*M,e[1]=(s*u-d*n)*M,e[2]=(o*n-s*a)*M,e[3]=f*M,e[4]=(d*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=g*M,e[7]=(n*l-u*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oc.makeScale(e,t)),this}rotate(e){return this.premultiply(oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oc=new Dt;function _f(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lm(){let i=$o("canvas");return i.style.display="block",i}var od={};function Ia(i){i in od||(od[i]=!0,console.warn(i))}var ld=new Dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cd=new Dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fo={[gs]:{transfer:Wo,primaries:Xo,toReference:i=>i,fromReference:i=>i},[si]:{transfer:_n,primaries:Xo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Tl]:{transfer:Wo,primaries:qo,toReference:i=>i.applyMatrix3(cd),fromReference:i=>i.applyMatrix3(ld)},[Rh]:{transfer:_n,primaries:qo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(cd),fromReference:i=>i.applyMatrix3(ld).convertLinearToSRGB()}},Dm=new Set([gs,Tl]),tn={enabled:!0,_workingColorSpace:gs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Dm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=fo[e].toReference,s=fo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return fo[i].primaries},getTransfer:function(i){return i===Bi?Wo:fo[i].transfer}};function Kr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rr,Ko=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rr===void 0&&(Rr=$o("canvas")),Rr.width=e.width,Rr.height=e.height;let n=Rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$o("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kr(t[n]/255)*255):t[n]=Kr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Um=0,Zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=sa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cc(s[a].image)):r.push(cc(s[a]))}else r=cc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nm=0,ki=class i extends Ws{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ki,s=Ki,r=Fi,a=Fa,o=Zi,l=Vs,u=i.DEFAULT_ANISOTROPY,d=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=sa(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ur?si:Bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oa:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oa:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===si?ur:gf}set encoding(e){Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ur?si:Bi}};ki.DEFAULT_IMAGE=null;ki.DEFAULT_MAPPING=lf;ki.DEFAULT_ANISOTROPY=1;var jn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,u=l[0],d=l[4],p=l[8],f=l[1],g=l[5],x=l[9],M=l[2],y=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+M)<.1&&Math.abs(x+y)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(u+1)/2,w=(g+1)/2,O=(m+1)/2,U=(d+f)/4,N=(p+M)/4,X=(x+y)/4;return v>w&&v>O?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=U/n,r=N/n):w>O?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=U/s,r=X/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=N/r,s=X/r),this.set(n,s,r,t),this}let S=Math.sqrt((y-x)*(y-x)+(p-M)*(p-M)+(f-d)*(f-d));return Math.abs(S)<.001&&(S=1),this.x=(y-x)/S,this.y=(p-M)/S,this.z=(f-d)/S,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vc=class extends Ws{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jn(0,0,e,t),this.scissorTest=!1,this.viewport=new jn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ia("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ur?si:Bi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ki(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ys=class extends Vc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jo=class extends ki{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fi,this.minFilter=fi,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gc=class extends ki{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fi,this.minFilter=fi,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],u=n[s+1],d=n[s+2],p=n[s+3],f=r[a+0],g=r[a+1],x=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=f,e[t+1]=g,e[t+2]=x,e[t+3]=M;return}if(p!==M||l!==f||u!==g||d!==x){let y=1-o,m=l*f+u*g+d*x+p*M,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let O=Math.sqrt(v),U=Math.atan2(O,m*S);y=Math.sin(y*U)/O,o=Math.sin(o*U)/O}let w=o*S;if(l=l*y+f*w,u=u*y+g*w,d=d*y+x*w,p=p*y+M*w,y===1-o){let O=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=O,u*=O,d*=O,p*=O}}e[t]=l,e[t+1]=u,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],u=n[s+2],d=n[s+3],p=r[a],f=r[a+1],g=r[a+2],x=r[a+3];return e[t]=o*x+d*p+l*g-u*f,e[t+1]=l*x+d*f+u*p-o*g,e[t+2]=u*x+d*g+o*f-l*p,e[t+3]=d*x-o*p-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),d=o(s/2),p=o(r/2),f=l(n/2),g=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*d*p+u*g*x,this._y=u*g*p-f*d*x,this._z=u*d*x+f*g*p,this._w=u*d*p-f*g*x;break;case"YXZ":this._x=f*d*p+u*g*x,this._y=u*g*p-f*d*x,this._z=u*d*x-f*g*p,this._w=u*d*p+f*g*x;break;case"ZXY":this._x=f*d*p-u*g*x,this._y=u*g*p+f*d*x,this._z=u*d*x+f*g*p,this._w=u*d*p-f*g*x;break;case"ZYX":this._x=f*d*p-u*g*x,this._y=u*g*p+f*d*x,this._z=u*d*x-f*g*p,this._w=u*d*p+f*g*x;break;case"YZX":this._x=f*d*p+u*g*x,this._y=u*g*p+f*d*x,this._z=u*d*x-f*g*p,this._w=u*d*p-f*g*x;break;case"XZY":this._x=f*d*p-u*g*x,this._y=u*g*p-f*d*x,this._z=u*d*x+f*g*p,this._w=u*d*p+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],u=t[2],d=t[6],p=t[10],f=n+o+p;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-u)*g,this._z=(a-s)*g}else if(n>o&&n>p){let g=2*Math.sqrt(1+n-o-p);this._w=(d-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+u)/g}else if(o>p){let g=2*Math.sqrt(1+o-n-p);this._w=(r-u)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+d)/g}else{let g=2*Math.sqrt(1+p-n-o);this._w=(a-s)/g,this._x=(r+u)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hi(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,u=t._z,d=t._w;return this._x=n*d+a*o+s*u-r*l,this._y=s*d+a*l+r*o-n*u,this._z=r*d+a*u+n*l-s*o,this._w=a*d-n*o-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let u=Math.sqrt(l),d=Math.atan2(u,o),p=Math.sin((1-t)*d)/u,f=Math.sin(t*d)/u;return this._w=a*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=r*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*s-o*n),d=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*u+a*p-o*d,this.y=n+l*d+o*u-r*p,this.z=s+l*p+r*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hc=new k,hd=new Xs,xs=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),mo.subVectors(this.max,Ta),Cr.subVectors(e.a,Ta),Pr.subVectors(e.b,Ta),Ir.subVectors(e.c,Ta),Ds.subVectors(Pr,Cr),Us.subVectors(Ir,Pr),nr.subVectors(Cr,Ir);let t=[0,-Ds.z,Ds.y,0,-Us.z,Us.y,0,-nr.z,nr.y,Ds.z,0,-Ds.x,Us.z,0,-Us.x,nr.z,0,-nr.x,-Ds.y,Ds.x,0,-Us.y,Us.x,0,-nr.y,nr.x,0];return!uc(t,Cr,Pr,Ir,mo)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,Cr,Pr,Ir,mo))?!1:(go.crossVectors(Ds,Us),t=[go.x,go.y,go.z],uc(t,Cr,Pr,Ir,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},cs=[new k,new k,new k,new k,new k,new k,new k,new k],Xi=new k,po=new xs,Cr=new k,Pr=new k,Ir=new k,Ds=new k,Us=new k,nr=new k,Ta=new k,mo=new k,go=new k,ir=new k;function uc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ir.fromArray(i,r);let o=s.x*Math.abs(ir.x)+s.y*Math.abs(ir.y)+s.z*Math.abs(ir.z),l=e.dot(ir),u=t.dot(ir),d=n.dot(ir);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}var Om=new xs,wa=new k,dc=new k,qs=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Om.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);let t=wa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(dc)),this.expandByPoint(wa.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hs=new k,fc=new k,yo=new k,Ns=new k,pc=new k,xo=new k,mc=new k,ka=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hs.copy(this.origin).addScaledVector(this.direction,t),hs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fc.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),Ns.copy(this.origin).sub(fc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(yo),o=Ns.dot(this.direction),l=-Ns.dot(yo),u=Ns.lengthSq(),d=Math.abs(1-a*a),p,f,g,x;if(d>0)if(p=a*l-o,f=a*o-l,x=r*d,p>=0)if(f>=-x)if(f<=x){let M=1/d;p*=M,f*=M,g=p*(p+a*f+2*o)+f*(a*p+f+2*l)+u}else f=r,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+u;else f=-r,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+u;else f<=-x?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-l),r),g=-p*p+f*(f+2*l)+u):f<=x?(p=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+u):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-l),r),g=-p*p+f*(f+2*l)+u);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),g=-p*p+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(fc).addScaledVector(yo,f),g}intersectSphere(e,t){hs.subVectors(e.center,this.origin);let n=hs.dot(this.direction),s=hs.dot(hs)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hs)!==null}intersectTriangle(e,t,n,s,r){pc.subVectors(t,e),xo.subVectors(n,e),mc.crossVectors(pc,xo);let a=this.direction.dot(mc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ns.subVectors(this.origin,e);let l=o*this.direction.dot(xo.crossVectors(Ns,xo));if(l<0)return null;let u=o*this.direction.dot(pc.cross(Ns));if(u<0||l+u>a)return null;let d=-o*Ns.dot(mc);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class i{constructor(e,t,n,s,r,a,o,l,u,d,p,f,g,x,M,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u,d,p,f,g,x,M,y)}set(e,t,n,s,r,a,o,l,u,d,p,f,g,x,M,y){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=u,m[6]=d,m[10]=p,m[14]=f,m[3]=g,m[7]=x,m[11]=M,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=a*d,g=a*p,x=o*d,M=o*p;t[0]=l*d,t[4]=-l*p,t[8]=u,t[1]=g+x*u,t[5]=f-M*u,t[9]=-o*l,t[2]=M-f*u,t[6]=x+g*u,t[10]=a*l}else if(e.order==="YXZ"){let f=l*d,g=l*p,x=u*d,M=u*p;t[0]=f+M*o,t[4]=x*o-g,t[8]=a*u,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=g*o-x,t[6]=M+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*d,g=l*p,x=u*d,M=u*p;t[0]=f-M*o,t[4]=-a*p,t[8]=x+g*o,t[1]=g+x*o,t[5]=a*d,t[9]=M-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*d,g=a*p,x=o*d,M=o*p;t[0]=l*d,t[4]=x*u-g,t[8]=f*u+M,t[1]=l*p,t[5]=M*u+f,t[9]=g*u-x,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,g=a*u,x=o*l,M=o*u;t[0]=l*d,t[4]=M-f*p,t[8]=x*p+g,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-u*d,t[6]=g*p+x,t[10]=f-M*p}else if(e.order==="XZY"){let f=a*l,g=a*u,x=o*l,M=o*u;t[0]=l*d,t[4]=-p,t[8]=u*d,t[1]=f*p+M,t[5]=a*d,t[9]=g*p-x,t[2]=x*p-g,t[6]=o*d,t[10]=M*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fm,e,Bm)}lookAt(e,t,n){let s=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Os.crossVectors(n,Ti),Os.lengthSq()===0&&(Math.abs(n.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Os.crossVectors(n,Ti)),Os.normalize(),_o.crossVectors(Ti,Os),s[0]=Os.x,s[4]=_o.x,s[8]=Ti.x,s[1]=Os.y,s[5]=_o.y,s[9]=Ti.y,s[2]=Os.z,s[6]=_o.z,s[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],d=n[1],p=n[5],f=n[9],g=n[13],x=n[2],M=n[6],y=n[10],m=n[14],S=n[3],v=n[7],w=n[11],O=n[15],U=s[0],N=s[4],X=s[8],E=s[12],A=s[1],q=s[5],ie=s[9],me=s[13],B=s[2],Z=s[6],te=s[10],K=s[14],V=s[3],Q=s[7],he=s[11],fe=s[15];return r[0]=a*U+o*A+l*B+u*V,r[4]=a*N+o*q+l*Z+u*Q,r[8]=a*X+o*ie+l*te+u*he,r[12]=a*E+o*me+l*K+u*fe,r[1]=d*U+p*A+f*B+g*V,r[5]=d*N+p*q+f*Z+g*Q,r[9]=d*X+p*ie+f*te+g*he,r[13]=d*E+p*me+f*K+g*fe,r[2]=x*U+M*A+y*B+m*V,r[6]=x*N+M*q+y*Z+m*Q,r[10]=x*X+M*ie+y*te+m*he,r[14]=x*E+M*me+y*K+m*fe,r[3]=S*U+v*A+w*B+O*V,r[7]=S*N+v*q+w*Z+O*Q,r[11]=S*X+v*ie+w*te+O*he,r[15]=S*E+v*me+w*K+O*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],p=e[6],f=e[10],g=e[14],x=e[3],M=e[7],y=e[11],m=e[15];return x*(+r*l*p-s*u*p-r*o*f+n*u*f+s*o*g-n*l*g)+M*(+t*l*g-t*u*f+r*a*f-s*a*g+s*u*d-r*l*d)+y*(+t*u*p-t*o*g-r*a*p+n*a*g+r*o*d-n*u*d)+m*(-s*o*d-t*l*p+t*o*f+s*a*p-n*a*f+n*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=e[9],f=e[10],g=e[11],x=e[12],M=e[13],y=e[14],m=e[15],S=p*y*u-M*f*u+M*l*g-o*y*g-p*l*m+o*f*m,v=x*f*u-d*y*u-x*l*g+a*y*g+d*l*m-a*f*m,w=d*M*u-x*p*u+x*o*g-a*M*g-d*o*m+a*p*m,O=x*p*l-d*M*l-x*o*f+a*M*f+d*o*y-a*p*y,U=t*S+n*v+s*w+r*O;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/U;return e[0]=S*N,e[1]=(M*f*r-p*y*r-M*s*g+n*y*g+p*s*m-n*f*m)*N,e[2]=(o*y*r-M*l*r+M*s*u-n*y*u-o*s*m+n*l*m)*N,e[3]=(p*l*r-o*f*r-p*s*u+n*f*u+o*s*g-n*l*g)*N,e[4]=v*N,e[5]=(d*y*r-x*f*r+x*s*g-t*y*g-d*s*m+t*f*m)*N,e[6]=(x*l*r-a*y*r-x*s*u+t*y*u+a*s*m-t*l*m)*N,e[7]=(a*f*r-d*l*r+d*s*u-t*f*u-a*s*g+t*l*g)*N,e[8]=w*N,e[9]=(x*p*r-d*M*r-x*n*g+t*M*g+d*n*m-t*p*m)*N,e[10]=(a*M*r-x*o*r+x*n*u-t*M*u-a*n*m+t*o*m)*N,e[11]=(d*o*r-a*p*r-d*n*u+t*p*u+a*n*g-t*o*g)*N,e[12]=O*N,e[13]=(d*M*s-x*p*s+x*n*f-t*M*f-d*n*y+t*p*y)*N,e[14]=(x*o*s-a*M*s-x*n*l+t*M*l+a*n*y-t*o*y)*N,e[15]=(a*p*s-d*o*s+d*n*l-t*p*l-a*n*f+t*o*f)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,u=r*a,d=r*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,d*o+n,d*l-s*a,0,u*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,u=r+r,d=a+a,p=o+o,f=r*u,g=r*d,x=r*p,M=a*d,y=a*p,m=o*p,S=l*u,v=l*d,w=l*p,O=n.x,U=n.y,N=n.z;return s[0]=(1-(M+m))*O,s[1]=(g+w)*O,s[2]=(x-v)*O,s[3]=0,s[4]=(g-w)*U,s[5]=(1-(f+m))*U,s[6]=(y+S)*U,s[7]=0,s[8]=(x+v)*N,s[9]=(y-S)*N,s[10]=(1-(f+M))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Lr.set(s[0],s[1],s[2]).length(),a=Lr.set(s[4],s[5],s[6]).length(),o=Lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qi.copy(this);let u=1/r,d=1/a,p=1/o;return qi.elements[0]*=u,qi.elements[1]*=u,qi.elements[2]*=u,qi.elements[4]*=d,qi.elements[5]*=d,qi.elements[6]*=d,qi.elements[8]*=p,qi.elements[9]*=p,qi.elements[10]*=p,t.setFromRotationMatrix(qi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ms){let l=this.elements,u=2*r/(t-e),d=2*r/(n-s),p=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(o===ms)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Yo)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ms){let l=this.elements,u=1/(t-e),d=1/(n-s),p=1/(a-r),f=(t+e)*u,g=(n+s)*d,x,M;if(o===ms)x=(a+r)*p,M=-2*p;else if(o===Yo)x=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Lr=new k,qi=new Cn,Fm=new k(0,0,0),Bm=new k(1,1,1),Os=new k,_o=new k,Ti=new k,ud=new Cn,dd=new Xs,jo=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],d=s[9],p=s[2],f=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(hi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-hi(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(hi(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-hi(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(hi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-hi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dd.setFromEuler(this),this.setFromQuaternion(dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jo.DEFAULT_ORDER="XYZ";var Ha=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},km=0,fd=new k,Dr=new Xs,us=new Cn,vo=new k,Aa=new k,Hm=new k,zm=new Xs,pd=new k(1,0,0),md=new k(0,1,0),gd=new k(0,0,1),Vm={type:"added"},Gm={type:"removed"},ri=class i extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new jo,n=new Xs,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Cn},normalMatrix:{value:new Dt}}),this.matrix=new Cn,this.matrixWorld=new Cn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(pd,e)}rotateY(e){return this.rotateOnAxis(md,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pd,e)}translateY(e){return this.translateOnAxis(md,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vo.copy(e):vo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(Aa,vo,this.up):us.lookAt(vo,Aa,this.up),this.quaternion.setFromRotationMatrix(us),s&&(us.extractRotation(s.matrixWorld),Dr.setFromRotationMatrix(us),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),us.multiply(e.parent.matrixWorld)),e.applyMatrix4(us),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,Hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let p=l[u];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),p=a(e.shapes),f=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let u in o){let d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ri.DEFAULT_UP=new k(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yi=new k,ds=new k,gc=new k,fs=new k,Ur=new k,Nr=new k,yd=new k,yc=new k,xc=new k,_c=new k,Mo=!1,Wr=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yi.subVectors(e,t),s.cross(Yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yi.subVectors(s,t),ds.subVectors(n,t),gc.subVectors(e,t);let a=Yi.dot(Yi),o=Yi.dot(ds),l=Yi.dot(gc),u=ds.dot(ds),d=ds.dot(gc),p=a*u-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,g=(u*l-o*d)*f,x=(a*d-o*l)*f;return r.set(1-g-x,x,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getUV(e,t,n,s,r,a,o,l){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,fs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fs.x),l.addScaledVector(a,fs.y),l.addScaledVector(o,fs.z),l)}static isFrontFacing(e,t,n,s){return Yi.subVectors(n,t),ds.subVectors(e,t),Yi.cross(ds).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),ds.subVectors(this.a,this.b),Yi.cross(ds).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ur.subVectors(s,n),Nr.subVectors(r,n),yc.subVectors(e,n);let l=Ur.dot(yc),u=Nr.dot(yc);if(l<=0&&u<=0)return t.copy(n);xc.subVectors(e,s);let d=Ur.dot(xc),p=Nr.dot(xc);if(d>=0&&p<=d)return t.copy(s);let f=l*p-d*u;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Ur,a);_c.subVectors(e,r);let g=Ur.dot(_c),x=Nr.dot(_c);if(x>=0&&g<=x)return t.copy(r);let M=g*u-l*x;if(M<=0&&u>=0&&x<=0)return o=u/(u-x),t.copy(n).addScaledVector(Nr,o);let y=d*x-g*p;if(y<=0&&p-d>=0&&g-x>=0)return yd.subVectors(r,s),o=(p-d)/(p-d+(g-x)),t.copy(s).addScaledVector(yd,o);let m=1/(y+M+f);return a=M*m,o=f*m,t.copy(n).addScaledVector(Ur,a).addScaledVector(Nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fs={h:0,s:0,l:0},bo={h:0,s:0,l:0};function vc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Mt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,tn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=tn.workingColorSpace){if(e=Im(e,1),t=hi(t,0,1),n=hi(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vc(a,r,e+1/3),this.g=vc(a,r,e),this.b=vc(a,r,e-1/3)}return tn.toWorkingColorSpace(this,s),this}setStyle(e,t=si){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){let n=vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=lc(e.r),this.g=lc(e.g),this.b=lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return tn.fromWorkingColorSpace(ci.copy(this),e),Math.round(hi(ci.r*255,0,255))*65536+Math.round(hi(ci.g*255,0,255))*256+Math.round(hi(ci.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tn.workingColorSpace){tn.fromWorkingColorSpace(ci.copy(this),t);let n=ci.r,s=ci.g,r=ci.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,u,d=(o+a)/2;if(o===a)l=0,u=0;else{let p=a-o;switch(u=d<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,t=tn.workingColorSpace){return tn.fromWorkingColorSpace(ci.copy(this),t),e.r=ci.r,e.g=ci.g,e.b=ci.b,e}getStyle(e=si){tn.fromWorkingColorSpace(ci.copy(this),e);let t=ci.r,n=ci.g,s=ci.b;return e!==si?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fs),this.setHSL(Fs.h+e,Fs.s+t,Fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fs),e.getHSL(bo);let n=ac(Fs.h,bo.h,t),s=ac(Fs.s,bo.s,t),r=ac(Fs.l,bo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ci=new Mt;Mt.NAMES=vf;var Wm=0,Ys=class extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=$r,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Nc,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(n.blending=this.blending),this.side!==Gs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uc&&(n.blendSrc=this.blendSrc),this.blendDst!==Nc&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==id&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pn=class extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Hn=new k,So=new Ve,mi=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ks,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix3(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ea(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ea(t,this.array)),t}setX(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ea(t,this.array)),t}setY(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ea(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ea(t,this.array)),t}setW(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),n=xi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),n=xi(n,this.array),s=xi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),n=xi(n,this.array),s=xi(s,this.array),r=xi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sd&&(e.usage=this.usage),e}};var Qo=class extends mi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var el=class extends mi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pn=class extends mi{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Xm=0,Oi=new Cn,Mc=new ri,Or=new k,wi=new xs,Ra=new xs,Jn=new k,gi=class i extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_f(e)?el:Qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,n){return Oi.makeTranslation(e,t,n),this.applyMatrix4(Oi),this}scale(e,t,n){return Oi.makeScale(e,t,n),this.applyMatrix4(Oi),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wi.setFromBufferAttribute(r),this.morphTargetsRelative?(Jn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Jn),Jn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Jn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Jn.addVectors(wi.min,Ra.min),wi.expandByPoint(Jn),Jn.addVectors(wi.max,Ra.max),wi.expandByPoint(Jn)):(wi.expandByPoint(Ra.min),wi.expandByPoint(Ra.max))}wi.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Jn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Jn.fromBufferAttribute(o,u),l&&(Or.fromBufferAttribute(e,u),Jn.add(Or)),s=Math.max(s,n.distanceToSquared(Jn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,u=[],d=[];for(let A=0;A<o;A++)u[A]=new k,d[A]=new k;let p=new k,f=new k,g=new k,x=new Ve,M=new Ve,y=new Ve,m=new k,S=new k;function v(A,q,ie){p.fromArray(s,A*3),f.fromArray(s,q*3),g.fromArray(s,ie*3),x.fromArray(a,A*2),M.fromArray(a,q*2),y.fromArray(a,ie*2),f.sub(p),g.sub(p),M.sub(x),y.sub(x);let me=1/(M.x*y.y-y.x*M.y);isFinite(me)&&(m.copy(f).multiplyScalar(y.y).addScaledVector(g,-M.y).multiplyScalar(me),S.copy(g).multiplyScalar(M.x).addScaledVector(f,-y.x).multiplyScalar(me),u[A].add(m),u[q].add(m),u[ie].add(m),d[A].add(S),d[q].add(S),d[ie].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let A=0,q=w.length;A<q;++A){let ie=w[A],me=ie.start,B=ie.count;for(let Z=me,te=me+B;Z<te;Z+=3)v(n[Z+0],n[Z+1],n[Z+2])}let O=new k,U=new k,N=new k,X=new k;function E(A){N.fromArray(r,A*3),X.copy(N);let q=u[A];O.copy(q),O.sub(N.multiplyScalar(N.dot(q))).normalize(),U.crossVectors(X,q);let me=U.dot(d[A])<0?-1:1;l[A*4]=O.x,l[A*4+1]=O.y,l[A*4+2]=O.z,l[A*4+3]=me}for(let A=0,q=w.length;A<q;++A){let ie=w[A],me=ie.start,B=ie.count;for(let Z=me,te=me+B;Z<te;Z+=3)E(n[Z+0]),E(n[Z+1]),E(n[Z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,u=new k,d=new k,p=new k;if(e)for(let f=0,g=e.count;f<g;f+=3){let x=e.getX(f+0),M=e.getX(f+1),y=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,y),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),o.add(d),l.add(d),u.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(y,u.x,u.y,u.z)}else for(let f=0,g=t.count;f<g;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jn.fromBufferAttribute(e,t),Jn.normalize(),e.setXYZ(t,Jn.x,Jn.y,Jn.z)}toNonIndexed(){function e(o,l){let u=o.array,d=o.itemSize,p=o.normalized,f=new u.constructor(l.length*d),g=0,x=0;for(let M=0,y=l.length;M<y;M++){o.isInterleavedBufferAttribute?g=l[M]*o.data.stride+o.offset:g=l[M]*d;for(let m=0;m<d;m++)f[x++]=u[g++]}return new mi(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],u=e(l,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let l=[],u=r[o];for(let d=0,p=u.length;d<p;d++){let f=u[d],g=e(f,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],d=[];for(let p=0,f=u.length;p<f;p++){let g=u[p];d.push(g.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let u in s){let d=s[u];this.setAttribute(u,d.clone(t))}let r=e.morphAttributes;for(let u in r){let d=[],p=r[u];for(let f=0,g=p.length;f<g;f++)d.push(p[f].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,d=a.length;u<d;u++){let p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xd=new Cn,sr=new ka,Eo=new qs,_d=new k,Fr=new k,Br=new k,kr=new k,bc=new k,To=new k,wo=new Ve,Ao=new Ve,Ro=new Ve,vd=new k,Md=new k,bd=new k,Co=new k,Po=new k,$e=class extends ri{constructor(e=new gi,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){To.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let d=o[l],p=r[l];d!==0&&(bc.fromBufferAttribute(p,e),a?To.addScaledVector(bc,d):To.addScaledVector(bc.sub(t),d))}t.add(To)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),sr.copy(e.ray).recast(e.near),!(Eo.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Eo,_d)===null||sr.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(xd.copy(r).invert(),sr.copy(e.ray).applyMatrix4(xd),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,f=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=f.length;x<M;x++){let y=f[x],m=a[y.materialIndex],S=Math.max(y.start,g.start),v=Math.min(o.count,Math.min(y.start+y.count,g.start+g.count));for(let w=S,O=v;w<O;w+=3){let U=o.getX(w),N=o.getX(w+1),X=o.getX(w+2);s=Io(this,m,e,n,u,d,p,U,N,X),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),M=Math.min(o.count,g.start+g.count);for(let y=x,m=M;y<m;y+=3){let S=o.getX(y),v=o.getX(y+1),w=o.getX(y+2);s=Io(this,a,e,n,u,d,p,S,v,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=f.length;x<M;x++){let y=f[x],m=a[y.materialIndex],S=Math.max(y.start,g.start),v=Math.min(l.count,Math.min(y.start+y.count,g.start+g.count));for(let w=S,O=v;w<O;w+=3){let U=w,N=w+1,X=w+2;s=Io(this,m,e,n,u,d,p,U,N,X),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let y=x,m=M;y<m;y+=3){let S=y,v=y+1,w=y+2;s=Io(this,a,e,n,u,d,p,S,v,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function qm(i,e,t,n,s,r,a,o){let l;if(e.side===_i?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Gs,o),l===null)return null;Po.copy(o),Po.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Po);return u<t.near||u>t.far?null:{distance:u,point:Po.clone(),object:i}}function Io(i,e,t,n,s,r,a,o,l,u){i.getVertexPosition(o,Fr),i.getVertexPosition(l,Br),i.getVertexPosition(u,kr);let d=qm(i,e,t,n,Fr,Br,kr,Co);if(d){s&&(wo.fromBufferAttribute(s,o),Ao.fromBufferAttribute(s,l),Ro.fromBufferAttribute(s,u),d.uv=Wr.getInterpolation(Co,Fr,Br,kr,wo,Ao,Ro,new Ve)),r&&(wo.fromBufferAttribute(r,o),Ao.fromBufferAttribute(r,l),Ro.fromBufferAttribute(r,u),d.uv1=Wr.getInterpolation(Co,Fr,Br,kr,wo,Ao,Ro,new Ve),d.uv2=d.uv1),a&&(vd.fromBufferAttribute(a,o),Md.fromBufferAttribute(a,l),bd.fromBufferAttribute(a,u),d.normal=Wr.getInterpolation(Co,Fr,Br,kr,vd,Md,bd,new k),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a:o,b:l,c:u,normal:new k,materialIndex:0};Wr.getNormal(Fr,Br,kr,p.normal),d.face=p}return d}var Wn=class i extends gi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],u=[],d=[],p=[],f=0,g=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(p,2));function x(M,y,m,S,v,w,O,U,N,X,E){let A=w/N,q=O/X,ie=w/2,me=O/2,B=U/2,Z=N+1,te=X+1,K=0,V=0,Q=new k;for(let he=0;he<te;he++){let fe=he*q-me;for(let Se=0;Se<Z;Se++){let ne=Se*A-ie;Q[M]=ne*S,Q[y]=fe*v,Q[m]=B,u.push(Q.x,Q.y,Q.z),Q[M]=0,Q[y]=0,Q[m]=U>0?1:-1,d.push(Q.x,Q.y,Q.z),p.push(Se/N),p.push(1-he/X),K+=1}}for(let he=0;he<X;he++)for(let fe=0;fe<N;fe++){let Se=f+fe+Z*he,ne=f+fe+Z*(he+1),de=f+(fe+1)+Z*(he+1),Ae=f+(fe+1)+Z*he;l.push(Se,ne,Ae),l.push(ne,de,Ae),V+=6}o.addGroup(g,V,E),g+=V,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ea(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function di(i){let e={};for(let t=0;t<i.length;t++){let n=ea(i[t]);for(let s in n)e[s]=n[s]}return e}function Ym(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mf(i){return i.getRenderTarget()===null?i.outputColorSpace:tn.workingColorSpace}var $m={clone:ea,merge:di},Km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_s=class extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Km,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=Ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},tl=class extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Cn,this.projectionMatrix=new Cn,this.projectionMatrixInverse=new Cn,this.coordinateSystem=ms}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=class extends tl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hc*2*Math.atan(Math.tan(rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hr=-90,zr=1,Wc=class extends ri{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pi(Hr,zr,e,t);s.layers=this.layers,this.add(s);let r=new pi(Hr,zr,e,t);r.layers=this.layers,this.add(r);let a=new pi(Hr,zr,e,t);a.layers=this.layers,this.add(a);let o=new pi(Hr,zr,e,t);o.layers=this.layers,this.add(o);let l=new pi(Hr,zr,e,t);l.layers=this.layers,this.add(l);let u=new pi(Hr,zr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let u of t)this.remove(u);if(e===ms)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,u,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(p,f,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},nl=class extends ki{constructor(e,t,n,s,r,a,o,l,u,d){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,n,s,r,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xc=class extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ia("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ur?si:Bi),this.texture=new nl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wn(5,5,5),r=new _s({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_i,blending:Hs});r.uniforms.tEquirect.value=t;let a=new $e(s,r),o=t.minFilter;return t.minFilter===Fa&&(t.minFilter=Fi),new Wc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Sc=new k,Jm=new k,jm=new Dt,$i=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Sc.subVectors(n,t).cross(Jm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Sc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jm.getNormalMatrix(e),s=this.coplanarPoint(Sc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new qs,Lo=new k,za=class{constructor(e=new $i,t=new $i,n=new $i,s=new $i,r=new $i,a=new $i){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ms){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],u=s[4],d=s[5],p=s[6],f=s[7],g=s[8],x=s[9],M=s[10],y=s[11],m=s[12],S=s[13],v=s[14],w=s[15];if(n[0].setComponents(l-r,f-u,y-g,w-m).normalize(),n[1].setComponents(l+r,f+u,y+g,w+m).normalize(),n[2].setComponents(l+a,f+d,y+x,w+S).normalize(),n[3].setComponents(l-a,f-d,y-x,w-S).normalize(),n[4].setComponents(l-o,f-p,y-M,w-v).normalize(),t===ms)n[5].setComponents(l+o,f+p,y+M,w+v).normalize();else if(t===Yo)n[5].setComponents(o,p,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Lo.x=s.normal.x>0?e.max.x:e.min.x,Lo.y=s.normal.y>0?e.max.y:e.min.y,Lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qm(i,e){let t=e.isWebGL2,n=new WeakMap;function s(u,d){let p=u.array,f=u.usage,g=p.byteLength,x=i.createBuffer();i.bindBuffer(d,x),i.bufferData(d,p,f),u.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:g}}function r(u,d,p){let f=d.array,g=d._updateRange,x=d.updateRanges;if(i.bindBuffer(p,u),g.count===-1&&x.length===0&&i.bufferSubData(p,0,f),x.length!==0){for(let M=0,y=x.length;M<y;M++){let m=x[M];t?i.bufferSubData(p,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):i.bufferSubData(p,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}d.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(p,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):i.bufferSubData(p,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let d=n.get(u);d&&(i.deleteBuffer(d.buffer),n.delete(u))}function l(u,d){if(u.isGLBufferAttribute){let f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);let p=n.get(u);if(p===void 0)n.set(u,s(u,d));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,u,d),p.version=u.version}}return{get:a,remove:o,update:l}}var ss=class i extends gi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),u=o+1,d=l+1,p=e/o,f=t/l,g=[],x=[],M=[],y=[];for(let m=0;m<d;m++){let S=m*f-a;for(let v=0;v<u;v++){let w=v*p-r;x.push(w,-S,0),M.push(0,0,1),y.push(v/o),y.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let v=S+u*m,w=S+u*(m+1),O=S+1+u*(m+1),U=S+1+u*m;g.push(v,w,U),g.push(w,O,U)}this.setIndex(g),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(M,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tg=`#ifdef USE_ALPHAHASH
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
#endif`,ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ag=`#ifdef USE_AOMAP
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
#endif`,og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lg=`#ifdef USE_BATCHING
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
#endif`,cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fg=`#ifdef USE_IRIDESCENCE
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
#endif`,pg=`#ifdef USE_BUMPMAP
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
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sg=`#define PI 3.141592653589793
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
} // validated`,Eg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tg=`vec3 transformedNormal = objectNormal;
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
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ig=`
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
}`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zg=`#ifdef USE_GRADIENTMAP
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
}`,Vg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
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
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,$g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jg=`PhysicalMaterial material;
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
#endif`,Qg=`struct PhysicalMaterial {
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
}`,e0=`
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,o0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h0=`#if defined( USE_POINTS_UV )
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
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
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
#endif`,m0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
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
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ey=`uniform sampler2D t2D;
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
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`#include <common>
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
}`,ay=`#if DEPTH_PACKING == 3200
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
}`,oy=`#define DISTANCE
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
}`,ly=`#define DISTANCE
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`uniform float scale;
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
}`,dy=`uniform vec3 diffuse;
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
}`,fy=`#include <common>
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#define LAMBERT
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
}`,gy=`#define LAMBERT
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
}`,yy=`#define MATCAP
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
}`,xy=`#define MATCAP
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
}`,_y=`#define NORMAL
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
}`,vy=`#define NORMAL
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
}`,My=`#define PHONG
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
}`,by=`#define PHONG
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
}`,Sy=`#define STANDARD
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
}`,Ey=`#define STANDARD
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
}`,Ty=`#define TOON
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
}`,wy=`#define TOON
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
}`,Ay=`uniform float size;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Py=`uniform vec3 color;
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
}`,Iy=`uniform float rotation;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:eg,alphahash_pars_fragment:tg,alphamap_fragment:ng,alphamap_pars_fragment:ig,alphatest_fragment:sg,alphatest_pars_fragment:rg,aomap_fragment:ag,aomap_pars_fragment:og,batching_pars_vertex:lg,batching_vertex:cg,begin_vertex:hg,beginnormal_vertex:ug,bsdfs:dg,iridescence_fragment:fg,bumpmap_pars_fragment:pg,clipping_planes_fragment:mg,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:yg,clipping_planes_vertex:xg,color_fragment:_g,color_pars_fragment:vg,color_pars_vertex:Mg,color_vertex:bg,common:Sg,cube_uv_reflection_fragment:Eg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:wg,displacementmap_vertex:Ag,emissivemap_fragment:Rg,emissivemap_pars_fragment:Cg,colorspace_fragment:Pg,colorspace_pars_fragment:Ig,envmap_fragment:Lg,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Ug,envmap_pars_vertex:Ng,envmap_physical_pars_fragment:Yg,envmap_vertex:Og,fog_vertex:Fg,fog_pars_vertex:Bg,fog_fragment:kg,fog_pars_fragment:Hg,gradientmap_pars_fragment:zg,lightmap_fragment:Vg,lightmap_pars_fragment:Gg,lights_lambert_fragment:Wg,lights_lambert_pars_fragment:Xg,lights_pars_begin:qg,lights_toon_fragment:$g,lights_toon_pars_fragment:Kg,lights_phong_fragment:Zg,lights_phong_pars_fragment:Jg,lights_physical_fragment:jg,lights_physical_pars_fragment:Qg,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:a0,map_fragment:o0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:h0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:d0,morphcolor_vertex:f0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:y0,normal_fragment_maps:x0,normal_pars_fragment:_0,normal_pars_vertex:v0,normal_vertex:M0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:w0,opaque_fragment:A0,packing:R0,premultiplied_alpha_fragment:C0,project_vertex:P0,dithering_fragment:I0,dithering_pars_fragment:L0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:O0,shadowmap_vertex:F0,shadowmask_pars_fragment:B0,skinbase_vertex:k0,skinning_pars_vertex:H0,skinning_vertex:z0,skinnormal_vertex:V0,specularmap_fragment:G0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:q0,transmission_fragment:Y0,transmission_pars_fragment:$0,uv_pars_fragment:K0,uv_pars_vertex:Z0,uv_vertex:J0,worldpos_vertex:j0,background_vert:Q0,background_frag:ey,backgroundCube_vert:ty,backgroundCube_frag:ny,cube_vert:iy,cube_frag:sy,depth_vert:ry,depth_frag:ay,distanceRGBA_vert:oy,distanceRGBA_frag:ly,equirect_vert:cy,equirect_frag:hy,linedashed_vert:uy,linedashed_frag:dy,meshbasic_vert:fy,meshbasic_frag:py,meshlambert_vert:my,meshlambert_frag:gy,meshmatcap_vert:yy,meshmatcap_frag:xy,meshnormal_vert:_y,meshnormal_frag:vy,meshphong_vert:My,meshphong_frag:by,meshphysical_vert:Sy,meshphysical_frag:Ey,meshtoon_vert:Ty,meshtoon_frag:wy,points_vert:Ay,points_frag:Ry,shadow_vert:Cy,shadow_frag:Py,sprite_vert:Iy,sprite_frag:Ly},De={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},is={basic:{uniforms:di([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:di([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:di([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:di([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:di([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:di([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:di([De.points,De.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:di([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:di([De.common,De.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:di([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:di([De.sprite,De.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:di([De.common,De.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:di([De.lights,De.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};is.physical={uniforms:di([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var Do={r:0,b:0,g:0};function Dy(i,e,t,n,s,r,a){let o=new Mt(0),l=r===!0?0:1,u,d,p=null,f=0,g=null;function x(y,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?M(o,l):v&&v.isColor&&(M(v,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===El)?(d===void 0&&(d=new $e(new Wn(1,1,1),new _s({name:"BackgroundCubeMaterial",uniforms:ea(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=tn.getTransfer(v.colorSpace)!==_n,(p!==v||f!==v.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,p=v,f=v.version,g=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new $e(new ss(2,2),new _s({name:"BackgroundMaterial",uniforms:ea(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=tn.getTransfer(v.colorSpace)!==_n,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||f!==v.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,p=v,f=v.version,g=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function M(y,m){y.getRGB(Do,Mf(i)),n.buffers.color.setClear(Do.r,Do.g,Do.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(y,m=1){o.set(y),l=m,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,M(o,l)},render:x}}function Uy(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=y(null),u=l,d=!1;function p(B,Z,te,K,V){let Q=!1;if(a){let he=M(K,te,Z);u!==he&&(u=he,g(u.object)),Q=m(B,K,te,V),Q&&S(B,K,te,V)}else{let he=Z.wireframe===!0;(u.geometry!==K.id||u.program!==te.id||u.wireframe!==he)&&(u.geometry=K.id,u.program=te.id,u.wireframe=he,Q=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Q||d)&&(d=!1,X(B,Z,te,K),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function g(B){return n.isWebGL2?i.bindVertexArray(B):r.bindVertexArrayOES(B)}function x(B){return n.isWebGL2?i.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function M(B,Z,te){let K=te.wireframe===!0,V=o[B.id];V===void 0&&(V={},o[B.id]=V);let Q=V[Z.id];Q===void 0&&(Q={},V[Z.id]=Q);let he=Q[K];return he===void 0&&(he=y(f()),Q[K]=he),he}function y(B){let Z=[],te=[],K=[];for(let V=0;V<s;V++)Z[V]=0,te[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:te,attributeDivisors:K,object:B,attributes:{},index:null}}function m(B,Z,te,K){let V=u.attributes,Q=Z.attributes,he=0,fe=te.getAttributes();for(let Se in fe)if(fe[Se].location>=0){let de=V[Se],Ae=Q[Se];if(Ae===void 0&&(Se==="instanceMatrix"&&B.instanceMatrix&&(Ae=B.instanceMatrix),Se==="instanceColor"&&B.instanceColor&&(Ae=B.instanceColor)),de===void 0||de.attribute!==Ae||Ae&&de.data!==Ae.data)return!0;he++}return u.attributesNum!==he||u.index!==K}function S(B,Z,te,K){let V={},Q=Z.attributes,he=0,fe=te.getAttributes();for(let Se in fe)if(fe[Se].location>=0){let de=Q[Se];de===void 0&&(Se==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),Se==="instanceColor"&&B.instanceColor&&(de=B.instanceColor));let Ae={};Ae.attribute=de,de&&de.data&&(Ae.data=de.data),V[Se]=Ae,he++}u.attributes=V,u.attributesNum=he,u.index=K}function v(){let B=u.newAttributes;for(let Z=0,te=B.length;Z<te;Z++)B[Z]=0}function w(B){O(B,0)}function O(B,Z){let te=u.newAttributes,K=u.enabledAttributes,V=u.attributeDivisors;te[B]=1,K[B]===0&&(i.enableVertexAttribArray(B),K[B]=1),V[B]!==Z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Z),V[B]=Z)}function U(){let B=u.newAttributes,Z=u.enabledAttributes;for(let te=0,K=Z.length;te<K;te++)Z[te]!==B[te]&&(i.disableVertexAttribArray(te),Z[te]=0)}function N(B,Z,te,K,V,Q,he){he===!0?i.vertexAttribIPointer(B,Z,te,V,Q):i.vertexAttribPointer(B,Z,te,K,V,Q)}function X(B,Z,te,K){if(n.isWebGL2===!1&&(B.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let V=K.attributes,Q=te.getAttributes(),he=Z.defaultAttributeValues;for(let fe in Q){let Se=Q[fe];if(Se.location>=0){let ne=V[fe];if(ne===void 0&&(fe==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),fe==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor)),ne!==void 0){let de=ne.normalized,Ae=ne.itemSize,Ue=t.get(ne);if(Ue===void 0)continue;let ze=Ue.buffer,mt=Ue.type,dt=Ue.bytesPerElement,je=n.isWebGL2===!0&&(mt===i.INT||mt===i.UNSIGNED_INT||ne.gpuType===cf);if(ne.isInterleavedBufferAttribute){let ve=ne.data,j=ve.stride,Fn=ne.offset;if(ve.isInstancedInterleavedBuffer){for(let ot=0;ot<Se.locationSize;ot++)O(Se.location+ot,ve.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ot=0;ot<Se.locationSize;ot++)w(Se.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let ot=0;ot<Se.locationSize;ot++)N(Se.location+ot,Ae/Se.locationSize,mt,de,j*dt,(Fn+Ae/Se.locationSize*ot)*dt,je)}else{if(ne.isInstancedBufferAttribute){for(let ve=0;ve<Se.locationSize;ve++)O(Se.location+ve,ne.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<Se.locationSize;ve++)w(Se.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let ve=0;ve<Se.locationSize;ve++)N(Se.location+ve,Ae/Se.locationSize,mt,de,Ae*dt,Ae/Se.locationSize*ve*dt,je)}}else if(he!==void 0){let de=he[fe];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(Se.location,de);break;case 3:i.vertexAttrib3fv(Se.location,de);break;case 4:i.vertexAttrib4fv(Se.location,de);break;default:i.vertexAttrib1fv(Se.location,de)}}}}U()}function E(){ie();for(let B in o){let Z=o[B];for(let te in Z){let K=Z[te];for(let V in K)x(K[V].object),delete K[V];delete Z[te]}delete o[B]}}function A(B){if(o[B.id]===void 0)return;let Z=o[B.id];for(let te in Z){let K=Z[te];for(let V in K)x(K[V].object),delete K[V];delete Z[te]}delete o[B.id]}function q(B){for(let Z in o){let te=o[Z];if(te[B.id]===void 0)continue;let K=te[B.id];for(let V in K)x(K[V].object),delete K[V];delete te[B.id]}}function ie(){me(),d=!0,u!==l&&(u=l,g(u.object))}function me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:ie,resetDefaultState:me,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:w,disableUnusedAttributes:U}}function Ny(i,e,t,n){let s=n.isWebGL2,r;function a(d){r=d}function o(d,p){i.drawArrays(r,d,p),t.update(p,r,1)}function l(d,p,f){if(f===0)return;let g,x;if(s)g=i,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](r,d,p,f),t.update(p,r,f)}function u(d,p,f){if(f===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<f;x++)this.render(d[x],p[x]);else{g.multiDrawArraysWEBGL(r,d,0,p,0,f);let x=0;for(let M=0;M<f;M++)x+=p[M];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function Oy(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let u=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=a||e.has("OES_texture_float"),O=v&&w,U=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:y,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:O,maxSamples:U}}function Fy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new $i,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let g=p.length!==0||f||n!==0||s;return s=f,n=p.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=d(p,f,0)},this.setState=function(p,f,g){let x=p.clippingPlanes,M=p.clipIntersection,y=p.clipShadows,m=i.get(p);if(!s||x===null||x.length===0||r&&!y)r?d(null):u();else{let S=r?0:n,v=S*4,w=m.clippingState||null;l.value=w,w=d(x,f,v,g);for(let O=0;O!==v;++O)w[O]=t[O];m.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,f,g,x){let M=p!==null?p.length:0,y=null;if(M!==0){if(y=l.value,x!==!0||y===null){let m=g+M*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(y===null||y.length<m)&&(y=new Float32Array(m));for(let v=0,w=g;v!==M;++v,w+=4)a.copy(p[v]).applyMatrix4(S,o),a.normal.toArray(y,w),y[w+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function By(i){let e=new WeakMap;function t(a,o){return o===Oc?a.mapping=Jr:o===Fc&&(a.mapping=jr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Oc||o===Fc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let u=new Xc(l.height/2);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",s),t(u.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var il=class extends tl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xr=4,Sd=[.125,.215,.35,.446,.526,.582],lr=20,Ec=new il,Ed=new Mt,Tc=null,wc=0,Ac=0,ar=(1+Math.sqrt(5))/2,Vr=1/ar,Td=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,ar,Vr),new k(0,ar,-Vr),new k(Vr,0,ar),new k(-Vr,0,ar),new k(ar,Vr,0),new k(-ar,Vr,0)],sl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Tc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,wc,Ac),e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Ba,format:Zi,colorSpace:gs,depthBuffer:!1},s=wd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ky(r)),this._blurMaterial=Hy(r,e,t)}return s}_compileMaterial(e){let t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,Ec)}_sceneToCubeUV(e,t,n,s){let o=new pi(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(Ed),d.toneMapping=zs,d.autoClear=!1;let g=new Pn({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1}),x=new $e(new Wn,g),M=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,M=!0):(g.color.copy(Ed),M=!0);for(let m=0;m<6;m++){let S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(u[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,u[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,u[m]));let v=this._cubeSize;Uo(s,S*v,m>2?v:0,v,v),d.setRenderTarget(s),M&&d.render(x,o),d.render(e,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Jr||e.mapping===jr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Uo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ec)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Td[(s-1)%Td.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,p=new $e(this._lodPlanes[s],u),f=u.uniforms,g=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*lr-1),M=r/x,y=isFinite(r)?1+Math.floor(d*M):lr;y>lr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${lr}`);let m=[],S=0;for(let N=0;N<lr;++N){let X=N/M,E=Math.exp(-X*X/2);m.push(E),N===0?S+=E:N<y&&(S+=2*E)}for(let N=0;N<m.length;N++)m[N]=m[N]/S;f.envMap.value=e.texture,f.samples.value=y,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-n;let w=this._sizeLods[s],O=3*w*(s>v-Xr?s-v+Xr:0),U=4*(this._cubeSize-w);Uo(t,O,U,3*w,2*w),l.setRenderTarget(t),l.render(p,Ec)}};function ky(i){let e=[],t=[],n=[],s=i,r=i-Xr+1+Sd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Xr?l=Sd[a-i+Xr-1]:a===0&&(l=0),n.push(l);let u=1/(o-2),d=-u,p=1+u,f=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,x=6,M=3,y=2,m=1,S=new Float32Array(M*x*g),v=new Float32Array(y*x*g),w=new Float32Array(m*x*g);for(let U=0;U<g;U++){let N=U%3*2/3-1,X=U>2?0:-1,E=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];S.set(E,M*x*U),v.set(f,y*x*U);let A=[U,U,U,U,U,U];w.set(A,m*x*U)}let O=new gi;O.setAttribute("position",new mi(S,M)),O.setAttribute("uv",new mi(v,y)),O.setAttribute("faceIndex",new mi(w,m)),e.push(O),s>Xr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wd(i,e,t){let n=new ys(i,e,t);return n.texture.mapping=El,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Hy(i,e,t){let n=new Float32Array(lr),s=new k(0,1,0);return new _s({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function Ad(){return new _s({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function Rd(){return new _s({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function Ch(){return`

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
	`}function zy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,u=l===Oc||l===Fc,d=l===Jr||l===jr;if(u||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new sl(i)),p=u?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{let p=o.image;if(u&&p&&p.height>0||d&&p&&s(p)){t===null&&(t=new sl(i));let f=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,u=6;for(let d=0;d<u;d++)o[d]!==void 0&&l++;return l===u}function r(o){let l=o.target;l.removeEventListener("dispose",r);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Vy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gy(i,e,t,n){let s={},r=new WeakMap;function a(p){let f=p.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let M=f.morphAttributes[x];for(let y=0,m=M.length;y<m;y++)e.remove(M[y])}f.removeEventListener("dispose",a),delete s[f.id];let g=r.get(f);g&&(e.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(p){let f=p.attributes;for(let x in f)e.update(f[x],i.ARRAY_BUFFER);let g=p.morphAttributes;for(let x in g){let M=g[x];for(let y=0,m=M.length;y<m;y++)e.update(M[y],i.ARRAY_BUFFER)}}function u(p){let f=[],g=p.index,x=p.attributes.position,M=0;if(g!==null){let S=g.array;M=g.version;for(let v=0,w=S.length;v<w;v+=3){let O=S[v+0],U=S[v+1],N=S[v+2];f.push(O,U,U,N,N,O)}}else if(x!==void 0){let S=x.array;M=x.version;for(let v=0,w=S.length/3-1;v<w;v+=3){let O=v+0,U=v+1,N=v+2;f.push(O,U,U,N,N,O)}}else return;let y=new(_f(f)?el:Qo)(f,1);y.version=M;let m=r.get(p);m&&e.remove(m),r.set(p,y)}function d(p){let f=r.get(p);if(f){let g=p.index;g!==null&&f.version<g.version&&u(p)}else u(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Wy(i,e,t,n){let s=n.isWebGL2,r;function a(g){r=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function d(g,x){i.drawElements(r,x,o,g*l),t.update(x,r,1)}function p(g,x,M){if(M===0)return;let y,m;if(s)y=i,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](r,x,o,g*l,M),t.update(x,r,M)}function f(g,x,M){if(M===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<M;m++)this.render(g[m]/l,x[m]);else{y.multiDrawElementsWEBGL(r,x,0,o,g,0,M);let m=0;for(let S=0;S<M;S++)m+=x[S];t.update(m,r,1)}}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=p,this.renderMultiDraw=f}function Xy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function qy(i,e){return i[0]-e[0]}function Yy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function $y(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new jn,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,d,p){let f=u.morphTargetInfluences;if(e.isWebGL2===!0){let g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0,M=r.get(d);if(M===void 0||M.count!==x){let B=function(){ie.dispose(),r.delete(d),d.removeEventListener("dispose",B)};M!==void 0&&M.texture.dispose();let S=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,O=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],N=d.morphAttributes.color||[],X=0;S===!0&&(X=1),v===!0&&(X=2),w===!0&&(X=3);let E=d.attributes.position.count*X,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let q=new Float32Array(E*A*4*x),ie=new Jo(q,E,A,x);ie.type=ks,ie.needsUpdate=!0;let me=X*4;for(let Z=0;Z<x;Z++){let te=O[Z],K=U[Z],V=N[Z],Q=E*A*4*Z;for(let he=0;he<te.count;he++){let fe=he*me;S===!0&&(a.fromBufferAttribute(te,he),q[Q+fe+0]=a.x,q[Q+fe+1]=a.y,q[Q+fe+2]=a.z,q[Q+fe+3]=0),v===!0&&(a.fromBufferAttribute(K,he),q[Q+fe+4]=a.x,q[Q+fe+5]=a.y,q[Q+fe+6]=a.z,q[Q+fe+7]=0),w===!0&&(a.fromBufferAttribute(V,he),q[Q+fe+8]=a.x,q[Q+fe+9]=a.y,q[Q+fe+10]=a.z,q[Q+fe+11]=V.itemSize===4?a.w:1)}}M={count:x,texture:ie,size:new Ve(E,A)},r.set(d,M),d.addEventListener("dispose",B)}let y=0;for(let S=0;S<f.length;S++)y+=f[S];let m=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(i,"morphTargetBaseInfluence",m),p.getUniforms().setValue(i,"morphTargetInfluences",f),p.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let g=f===void 0?0:f.length,x=n[d.id];if(x===void 0||x.length!==g){x=[];for(let v=0;v<g;v++)x[v]=[v,0];n[d.id]=x}for(let v=0;v<g;v++){let w=x[v];w[0]=v,w[1]=f[v]}x.sort(Yy);for(let v=0;v<8;v++)v<g&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(qy);let M=d.morphAttributes.position,y=d.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let w=o[v],O=w[0],U=w[1];O!==Number.MAX_SAFE_INTEGER&&U?(M&&d.getAttribute("morphTarget"+v)!==M[O]&&d.setAttribute("morphTarget"+v,M[O]),y&&d.getAttribute("morphNormal"+v)!==y[O]&&d.setAttribute("morphNormal"+v,y[O]),s[v]=U,m+=U):(M&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),y&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),s[v]=0)}let S=d.morphTargetsRelative?1:1-m;p.getUniforms().setValue(i,"morphTargetBaseInfluence",S),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Ky(i,e,t,n){let s=new WeakMap;function r(l){let u=n.render.frame,d=l.geometry,p=e.get(l,d);if(s.get(p)!==u&&(e.update(p),s.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return p}function a(){s=new WeakMap}function o(l){let u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}var rl=class extends ki{constructor(e,t,n,s,r,a,o,l,u,d){if(d=d!==void 0?d:hr,d!==hr&&d!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===hr&&(n=Bs),n===void 0&&d===Qr&&(n=cr),super(null,s,r,a,o,l,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:fi,this.minFilter=l!==void 0?l:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Sf=new ki,Ef=new rl(1,1);Ef.compareFunction=xf;var Tf=new Jo,wf=new Gc,Af=new nl,Cd=[],Pd=[],Id=new Float32Array(16),Ld=new Float32Array(9),Dd=new Float32Array(4);function ra(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cd[s];if(r===void 0&&(r=new Float32Array(s),Cd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wl(i,e){let t=Pd[e];t===void 0&&(t=new Int32Array(e),Pd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xn(t,e))return;i.uniform2fv(this.addr,e),qn(t,e)}}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xn(t,e))return;i.uniform3fv(this.addr,e),qn(t,e)}}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xn(t,e))return;i.uniform4fv(this.addr,e),qn(t,e)}}function ex(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qn(t,e)}else{if(Xn(t,n))return;Dd.set(n),i.uniformMatrix2fv(this.addr,!1,Dd),qn(t,n)}}function tx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qn(t,e)}else{if(Xn(t,n))return;Ld.set(n),i.uniformMatrix3fv(this.addr,!1,Ld),qn(t,n)}}function nx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qn(t,e)}else{if(Xn(t,n))return;Id.set(n),i.uniformMatrix4fv(this.addr,!1,Id),qn(t,n)}}function ix(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xn(t,e))return;i.uniform2iv(this.addr,e),qn(t,e)}}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xn(t,e))return;i.uniform3iv(this.addr,e),qn(t,e)}}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xn(t,e))return;i.uniform4iv(this.addr,e),qn(t,e)}}function ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xn(t,e))return;i.uniform2uiv(this.addr,e),qn(t,e)}}function cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xn(t,e))return;i.uniform3uiv(this.addr,e),qn(t,e)}}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xn(t,e))return;i.uniform4uiv(this.addr,e),qn(t,e)}}function ux(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Ef:Sf;t.setTexture2D(e||r,s)}function dx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wf,s)}function fx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Af,s)}function px(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tf,s)}function mx(i){switch(i){case 5126:return Zy;case 35664:return Jy;case 35665:return jy;case 35666:return Qy;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ax;case 5125:return ox;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(i,e){i.uniform1fv(this.addr,e)}function yx(i,e){let t=ra(e,this.size,2);i.uniform2fv(this.addr,t)}function xx(i,e){let t=ra(e,this.size,3);i.uniform3fv(this.addr,t)}function _x(i,e){let t=ra(e,this.size,4);i.uniform4fv(this.addr,t)}function vx(i,e){let t=ra(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mx(i,e){let t=ra(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bx(i,e){let t=ra(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sx(i,e){i.uniform1iv(this.addr,e)}function Ex(i,e){i.uniform2iv(this.addr,e)}function Tx(i,e){i.uniform3iv(this.addr,e)}function wx(i,e){i.uniform4iv(this.addr,e)}function Ax(i,e){i.uniform1uiv(this.addr,e)}function Rx(i,e){i.uniform2uiv(this.addr,e)}function Cx(i,e){i.uniform3uiv(this.addr,e)}function Px(i,e){i.uniform4uiv(this.addr,e)}function Ix(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);Xn(n,r)||(i.uniform1iv(this.addr,r),qn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Sf,r[a])}function Lx(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);Xn(n,r)||(i.uniform1iv(this.addr,r),qn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wf,r[a])}function Dx(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);Xn(n,r)||(i.uniform1iv(this.addr,r),qn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Af,r[a])}function Ux(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);Xn(n,r)||(i.uniform1iv(this.addr,r),qn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tf,r[a])}function Nx(i){switch(i){case 5126:return gx;case 35664:return yx;case 35665:return xx;case 35666:return _x;case 35674:return vx;case 35675:return Mx;case 35676:return bx;case 5124:case 35670:return Sx;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return wx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ux}}var qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mx(t.type)}},Yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nx(t.type)}},$c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function Ud(i,e){i.seq.push(e),i.map[e.id]=e}function Ox(i,e,t){let n=i.name,s=n.length;for(Rc.lastIndex=0;;){let r=Rc.exec(n),a=Rc.lastIndex,o=r[1],l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){Ud(t,u===void 0?new qc(o,i,e):new Yc(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new $c(o),Ud(t,p)),t=p}}}var Zr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ox(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Nd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Fx=37297,Bx=0;function kx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Hx(i){let e=tn.getPrimaries(tn.workingColorSpace),t=tn.getPrimaries(i),n;switch(e===t?n="":e===qo&&t===Xo?n="LinearDisplayP3ToLinearSRGB":e===Xo&&t===qo&&(n="LinearSRGBToLinearDisplayP3"),i){case gs:case Tl:return[n,"LinearTransferOETF"];case si:case Rh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Od(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+kx(i.getShaderSource(e),a)}else return s}function zx(i,e){let t=Hx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vx(i,e){let t;switch(e){case am:t="Linear";break;case om:t="Reinhard";break;case lm:t="OptimizedCineon";break;case cm:t="ACESFilmic";break;case um:t="AgX";break;case hm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qr).join(`
`)}function Wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qr).join(`
`)}function Xx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qr(i){return i!==""}function Fd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(i){return i.replace(Yx,Kx)}var $x=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kx(i,e){let t=Ct[e];if(t===void 0){let n=$x.get(e);if(n!==void 0)t=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kc(t)}var Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kd(i){return i.replace(Zx,Jx)}function Jx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===af?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ps&&(e="SHADOWMAP_TYPE_VSM"),e}function Qx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jr:case jr:e="ENVMAP_TYPE_CUBE";break;case El:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function t_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case of:e="ENVMAP_BLENDING_MULTIPLY";break;case sm:e="ENVMAP_BLENDING_MIX";break;case rm:e="ENVMAP_BLENDING_ADD";break}return e}function n_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function i_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=jx(t),u=Qx(t),d=e_(t),p=t_(t),f=n_(t),g=t.isWebGL2?"":Gx(t),x=Wx(t),M=Xx(r),y=s.createProgram(),m,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(qr).join(`
`),m.length>0&&(m+=`
`),S=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(qr).join(`
`),S.length>0&&(S+=`
`)):(m=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),S=[g,Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zs?"#define TONE_MAPPING":"",t.toneMapping!==zs?Ct.tonemapping_pars_fragment:"",t.toneMapping!==zs?Vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,zx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),a=Kc(a),a=Fd(a,t),a=Bd(a,t),o=Kc(o),o=Fd(o,t),o=Bd(o,t),a=kd(a),o=kd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let w=v+m+a,O=v+S+o,U=Nd(s,s.VERTEX_SHADER,w),N=Nd(s,s.FRAGMENT_SHADER,O);s.attachShader(y,U),s.attachShader(y,N),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function X(ie){if(i.debug.checkShaderErrors){let me=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(U).trim(),Z=s.getShaderInfoLog(N).trim(),te=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,U,N);else{let V=Od(s,U,"vertex"),Q=Od(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Program Info Log: `+me+`
`+V+`
`+Q)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(B===""||Z==="")&&(K=!1);K&&(ie.diagnostics={runnable:te,programLog:me,vertexShader:{log:B,prefix:m},fragmentShader:{log:Z,prefix:S}})}s.deleteShader(U),s.deleteShader(N),E=new Zr(s,y),A=qx(s,y)}let E;this.getUniforms=function(){return E===void 0&&X(this),E};let A;this.getAttributes=function(){return A===void 0&&X(this),A};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(y,Fx)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=N,this}var s_=0,Zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jc(e),t.set(e,n)),n}},Jc=class{constructor(e){this.id=s_++,this.code=e,this.usedTimes=0}};function r_(i,e,t,n,s,r,a){let o=new Ha,l=new Zc,u=[],d=s.isWebGL2,p=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return E===0?"uv":`uv${E}`}function y(E,A,q,ie,me){let B=ie.fog,Z=me.geometry,te=E.isMeshStandardMaterial?ie.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||te),V=K&&K.mapping===El?K.image.height:null,Q=x[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));let he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fe=he!==void 0?he.length:0,Se=0;Z.morphAttributes.position!==void 0&&(Se=1),Z.morphAttributes.normal!==void 0&&(Se=2),Z.morphAttributes.color!==void 0&&(Se=3);let ne,de,Ae,Ue;if(Q){let $n=is[Q];ne=$n.vertexShader,de=$n.fragmentShader}else ne=E.vertexShader,de=E.fragmentShader,l.update(E),Ae=l.getVertexShaderID(E),Ue=l.getFragmentShaderID(E);let ze=i.getRenderTarget(),mt=me.isInstancedMesh===!0,dt=me.isBatchedMesh===!0,je=!!E.map,ve=!!E.matcap,j=!!K,Fn=!!E.aoMap,ot=!!E.lightMap,yt=!!E.bumpMap,Ze=!!E.normalMap,Je=!!E.displacementMap,xt=!!E.emissiveMap,C=!!E.metalnessMap,T=!!E.roughnessMap,ee=E.anisotropy>0,Ee=E.clearcoat>0,ye=E.iridescence>0,re=E.sheen>0,Ge=E.transmission>0,Le=ee&&!!E.anisotropyMap,He=Ee&&!!E.clearcoatMap,Pe=Ee&&!!E.clearcoatNormalMap,St=Ee&&!!E.clearcoatRoughnessMap,be=ye&&!!E.iridescenceMap,Ut=ye&&!!E.iridescenceThicknessMap,Pt=re&&!!E.sheenColorMap,lt=re&&!!E.sheenRoughnessMap,st=!!E.specularMap,qe=!!E.specularColorMap,Tt=!!E.specularIntensityMap,Xt=Ge&&!!E.transmissionMap,Ht=Ge&&!!E.thicknessMap,Rt=!!E.gradientMap,Ie=!!E.alphaMap,H=E.alphaTest>0,Oe=!!E.alphaHash,Fe=!!E.extensions,ht=!!Z.attributes.uv1,ct=!!Z.attributes.uv2,Kt=!!Z.attributes.uv3,Zt=zs;return E.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(Zt=i.toneMapping),{isWebGL2:d,shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:ne,fragmentShader:de,defines:E.defines,customVertexShaderID:Ae,customFragmentShaderID:Ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:dt,instancing:mt,instancingColor:mt&&me.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:gs,map:je,matcap:ve,envMap:j,envMapMode:j&&K.mapping,envMapCubeUVHeight:V,aoMap:Fn,lightMap:ot,bumpMap:yt,normalMap:Ze,displacementMap:f&&Je,emissiveMap:xt,normalMapObjectSpace:Ze&&E.normalMapType===Sm,normalMapTangentSpace:Ze&&E.normalMapType===yf,metalnessMap:C,roughnessMap:T,anisotropy:ee,anisotropyMap:Le,clearcoat:Ee,clearcoatMap:He,clearcoatNormalMap:Pe,clearcoatRoughnessMap:St,iridescence:ye,iridescenceMap:be,iridescenceThicknessMap:Ut,sheen:re,sheenColorMap:Pt,sheenRoughnessMap:lt,specularMap:st,specularColorMap:qe,specularIntensityMap:Tt,transmission:Ge,transmissionMap:Xt,thicknessMap:Ht,gradientMap:Rt,opaque:E.transparent===!1&&E.blending===$r,alphaMap:Ie,alphaTest:H,alphaHash:Oe,combine:E.combine,mapUv:je&&M(E.map.channel),aoMapUv:Fn&&M(E.aoMap.channel),lightMapUv:ot&&M(E.lightMap.channel),bumpMapUv:yt&&M(E.bumpMap.channel),normalMapUv:Ze&&M(E.normalMap.channel),displacementMapUv:Je&&M(E.displacementMap.channel),emissiveMapUv:xt&&M(E.emissiveMap.channel),metalnessMapUv:C&&M(E.metalnessMap.channel),roughnessMapUv:T&&M(E.roughnessMap.channel),anisotropyMapUv:Le&&M(E.anisotropyMap.channel),clearcoatMapUv:He&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:lt&&M(E.sheenRoughnessMap.channel),specularMapUv:st&&M(E.specularMap.channel),specularColorMapUv:qe&&M(E.specularColorMap.channel),specularIntensityMapUv:Tt&&M(E.specularIntensityMap.channel),transmissionMapUv:Xt&&M(E.transmissionMap.channel),thicknessMapUv:Ht&&M(E.thicknessMap.channel),alphaMapUv:Ie&&M(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ze||ee),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:ht,vertexUv2s:ct,vertexUv3s:Kt,pointsUvs:me.isPoints===!0&&!!Z.attributes.uv&&(je||Ie),fog:!!B,useFog:E.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:me.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:je&&E.map.isVideoTexture===!0&&tn.getTransfer(E.map.colorSpace)===_n,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===An,flipSided:E.side===_i,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Fe&&E.extensions.derivatives===!0,extensionFragDepth:Fe&&E.extensions.fragDepth===!0,extensionDrawBuffers:Fe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Fe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function m(E){let A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(let q in E.defines)A.push(q),A.push(E.defines[q]);return E.isRawShaderMaterial===!1&&(S(A,E),v(A,E),A.push(i.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function S(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function v(E,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),E.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function w(E){let A=x[E.type],q;if(A){let ie=is[A];q=$m.clone(ie.uniforms)}else q=E.uniforms;return q}function O(E,A){let q;for(let ie=0,me=u.length;ie<me;ie++){let B=u[ie];if(B.cacheKey===A){q=B,++q.usedTimes;break}}return q===void 0&&(q=new i_(i,A,E,r),u.push(q)),q}function U(E){if(--E.usedTimes===0){let A=u.indexOf(E);u[A]=u[u.length-1],u.pop(),E.destroy()}}function N(E){l.remove(E)}function X(){l.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:O,releaseProgram:U,releaseShaderCache:N,programs:u,dispose:X}}function a_(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function o_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p,f,g,x,M,y){let m=i[e];return m===void 0?(m={id:p.id,object:p,geometry:f,material:g,groupOrder:x,renderOrder:p.renderOrder,z:M,group:y},i[e]=m):(m.id=p.id,m.object=p,m.geometry=f,m.material=g,m.groupOrder=x,m.renderOrder=p.renderOrder,m.z=M,m.group=y),e++,m}function o(p,f,g,x,M,y){let m=a(p,f,g,x,M,y);g.transmission>0?n.push(m):g.transparent===!0?s.push(m):t.push(m)}function l(p,f,g,x,M,y){let m=a(p,f,g,x,M,y);g.transmission>0?n.unshift(m):g.transparent===!0?s.unshift(m):t.unshift(m)}function u(p,f){t.length>1&&t.sort(p||o_),n.length>1&&n.sort(f||zd),s.length>1&&s.sort(f||zd)}function d(){for(let p=e,f=i.length;p<f;p++){let g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:u}}function l_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Vd,i.set(n,[a])):s>=r.length?(a=new Vd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function c_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Mt};break;case"SpotLight":t={position:new k,direction:new k,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function h_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var u_=0;function d_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function f_(i,e){let t=new c_,n=h_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new k);let r=new k,a=new Cn,o=new Cn;function l(d,p){let f=0,g=0,x=0;for(let ie=0;ie<9;ie++)s.probe[ie].set(0,0,0);let M=0,y=0,m=0,S=0,v=0,w=0,O=0,U=0,N=0,X=0,E=0;d.sort(d_);let A=p===!0?Math.PI:1;for(let ie=0,me=d.length;ie<me;ie++){let B=d[ie],Z=B.color,te=B.intensity,K=B.distance,V=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=Z.r*te*A,g+=Z.g*te*A,x+=Z.b*te*A;else if(B.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(B.sh.coefficients[Q],te);E++}else if(B.isDirectionalLight){let Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*A),B.castShadow){let he=B.shadow,fe=n.get(B);fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,s.directionalShadow[M]=fe,s.directionalShadowMap[M]=V,s.directionalShadowMatrix[M]=B.shadow.matrix,w++}s.directional[M]=Q,M++}else if(B.isSpotLight){let Q=t.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(Z).multiplyScalar(te*A),Q.distance=K,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,s.spot[m]=Q;let he=B.shadow;if(B.map&&(s.spotLightMap[N]=B.map,N++,he.updateMatrices(B),B.castShadow&&X++),s.spotLightMatrix[m]=he.matrix,B.castShadow){let fe=n.get(B);fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,s.spotShadow[m]=fe,s.spotShadowMap[m]=V,U++}m++}else if(B.isRectAreaLight){let Q=t.get(B);Q.color.copy(Z).multiplyScalar(te),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=Q,S++}else if(B.isPointLight){let Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity*A),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){let he=B.shadow,fe=n.get(B);fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,fe.shadowCameraNear=he.camera.near,fe.shadowCameraFar=he.camera.far,s.pointShadow[y]=fe,s.pointShadowMap[y]=V,s.pointShadowMatrix[y]=B.shadow.matrix,O++}s.point[y]=Q,y++}else if(B.isHemisphereLight){let Q=t.get(B);Q.skyColor.copy(B.color).multiplyScalar(te*A),Q.groundColor.copy(B.groundColor).multiplyScalar(te*A),s.hemi[v]=Q,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=g,s.ambient[2]=x;let q=s.hash;(q.directionalLength!==M||q.pointLength!==y||q.spotLength!==m||q.rectAreaLength!==S||q.hemiLength!==v||q.numDirectionalShadows!==w||q.numPointShadows!==O||q.numSpotShadows!==U||q.numSpotMaps!==N||q.numLightProbes!==E)&&(s.directional.length=M,s.spot.length=m,s.rectArea.length=S,s.point.length=y,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=U+N-X,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=E,q.directionalLength=M,q.pointLength=y,q.spotLength=m,q.rectAreaLength=S,q.hemiLength=v,q.numDirectionalShadows=w,q.numPointShadows=O,q.numSpotShadows=U,q.numSpotMaps=N,q.numLightProbes=E,s.version=u_++)}function u(d,p){let f=0,g=0,x=0,M=0,y=0,m=p.matrixWorldInverse;for(let S=0,v=d.length;S<v;S++){let w=d[S];if(w.isDirectionalLight){let O=s.directional[f];O.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(m),f++}else if(w.isSpotLight){let O=s.spot[x];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(m),O.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(m),x++}else if(w.isRectAreaLight){let O=s.rectArea[M];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),M++}else if(w.isPointLight){let O=s.point[g];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(m),g++}else if(w.isHemisphereLight){let O=s.hemi[y];O.direction.setFromMatrixPosition(w.matrixWorld),O.direction.transformDirection(m),y++}}}return{setup:l,setupView:u,state:s}}function Gd(i,e){let t=new f_(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(p){n.push(p)}function o(p){s.push(p)}function l(p){t.setup(n,p)}function u(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function p_(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Gd(i,e),t.set(r,[l])):a>=o.length?(l=new Gd(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var jc=class extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qc=class extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
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
}`;function y_(i,e,t){let n=new za,s=new Ve,r=new Ve,a=new jn,o=new jc({depthPacking:bm}),l=new Qc,u={},d=t.maxTextureSize,p={[Gs]:_i,[_i]:Gs,[An]:An},f=new _s({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let x=new gi;x.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new $e(x,f),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let m=this.type;this.render=function(U,N,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;let E=i.getRenderTarget(),A=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),ie=i.state;ie.setBlending(Hs),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);let me=m!==ps&&this.type===ps,B=m===ps&&this.type!==ps;for(let Z=0,te=U.length;Z<te;Z++){let K=U[Z],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Q=V.getFrameExtents();if(s.multiply(Q),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y)),V.map===null||me===!0||B===!0){let fe=this.type!==ps?{minFilter:fi,magFilter:fi}:{};V.map!==null&&V.map.dispose(),V.map=new ys(s.x,s.y,fe),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let he=V.getViewportCount();for(let fe=0;fe<he;fe++){let Se=V.getViewport(fe);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),ie.viewport(a),V.updateMatrices(K,fe),n=V.getFrustum(),w(N,X,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===ps&&S(V,X),V.needsUpdate=!1}m=this.type,y.needsUpdate=!1,i.setRenderTarget(E,A,q)};function S(U,N){let X=e.update(M);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,g.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ys(s.x,s.y)),f.uniforms.shadow_pass.value=U.map.texture,f.uniforms.resolution.value=U.mapSize,f.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(N,null,X,f,M,null),g.uniforms.shadow_pass.value=U.mapPass.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(N,null,X,g,M,null)}function v(U,N,X,E){let A=null,q=X.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(q!==void 0)A=q;else if(A=X.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let ie=A.uuid,me=N.uuid,B=u[ie];B===void 0&&(B={},u[ie]=B);let Z=B[me];Z===void 0&&(Z=A.clone(),B[me]=Z,N.addEventListener("dispose",O)),A=Z}if(A.visible=N.visible,A.wireframe=N.wireframe,E===ps?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:p[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,X.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let ie=i.properties.get(A);ie.light=X}return A}function w(U,N,X,E,A){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&A===ps)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,U.matrixWorld);let me=e.update(U),B=U.material;if(Array.isArray(B)){let Z=me.groups;for(let te=0,K=Z.length;te<K;te++){let V=Z[te],Q=B[V.materialIndex];if(Q&&Q.visible){let he=v(U,Q,E,A);U.onBeforeShadow(i,U,N,X,me,he,V),i.renderBufferDirect(X,null,me,he,U,V),U.onAfterShadow(i,U,N,X,me,he,V)}}}else if(B.visible){let Z=v(U,B,E,A);U.onBeforeShadow(i,U,N,X,me,Z,null),i.renderBufferDirect(X,null,me,Z,U,null),U.onAfterShadow(i,U,N,X,me,Z,null)}}let ie=U.children;for(let me=0,B=ie.length;me<B;me++)w(ie[me],N,X,E,A)}function O(U){U.target.removeEventListener("dispose",O);for(let X in u){let E=u[X],A=U.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function x_(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Oe=new jn,Fe=null,ht=new jn(0,0,0,0);return{setMask:function(ct){Fe!==ct&&!H&&(i.colorMask(ct,ct,ct,ct),Fe=ct)},setLocked:function(ct){H=ct},setClear:function(ct,Kt,Zt,Sn,$n){$n===!0&&(ct*=Sn,Kt*=Sn,Zt*=Sn),Oe.set(ct,Kt,Zt,Sn),ht.equals(Oe)===!1&&(i.clearColor(ct,Kt,Zt,Sn),ht.copy(Oe))},reset:function(){H=!1,Fe=null,ht.set(-1,0,0,0)}}}function r(){let H=!1,Oe=null,Fe=null,ht=null;return{setTest:function(ct){ct?dt(i.DEPTH_TEST):je(i.DEPTH_TEST)},setMask:function(ct){Oe!==ct&&!H&&(i.depthMask(ct),Oe=ct)},setFunc:function(ct){if(Fe!==ct){switch(ct){case Jp:i.depthFunc(i.NEVER);break;case jp:i.depthFunc(i.ALWAYS);break;case Qp:i.depthFunc(i.LESS);break;case zo:i.depthFunc(i.LEQUAL);break;case em:i.depthFunc(i.EQUAL);break;case tm:i.depthFunc(i.GEQUAL);break;case nm:i.depthFunc(i.GREATER);break;case im:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Fe=ct}},setLocked:function(ct){H=ct},setClear:function(ct){ht!==ct&&(i.clearDepth(ct),ht=ct)},reset:function(){H=!1,Oe=null,Fe=null,ht=null}}}function a(){let H=!1,Oe=null,Fe=null,ht=null,ct=null,Kt=null,Zt=null,Sn=null,$n=null;return{setTest:function(en){H||(en?dt(i.STENCIL_TEST):je(i.STENCIL_TEST))},setMask:function(en){Oe!==en&&!H&&(i.stencilMask(en),Oe=en)},setFunc:function(en,ei,Mi){(Fe!==en||ht!==ei||ct!==Mi)&&(i.stencilFunc(en,ei,Mi),Fe=en,ht=ei,ct=Mi)},setOp:function(en,ei,Mi){(Kt!==en||Zt!==ei||Sn!==Mi)&&(i.stencilOp(en,ei,Mi),Kt=en,Zt=ei,Sn=Mi)},setLocked:function(en){H=en},setClear:function(en){$n!==en&&(i.clearStencil(en),$n=en)},reset:function(){H=!1,Oe=null,Fe=null,ht=null,ct=null,Kt=null,Zt=null,Sn=null,$n=null}}}let o=new s,l=new r,u=new a,d=new WeakMap,p=new WeakMap,f={},g={},x=new WeakMap,M=[],y=null,m=!1,S=null,v=null,w=null,O=null,U=null,N=null,X=null,E=new Mt(0,0,0),A=0,q=!1,ie=null,me=null,B=null,Z=null,te=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(he)[1]),V=Q>=1):he.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),V=Q>=2);let fe=null,Se={},ne=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Ae=new jn().fromArray(ne),Ue=new jn().fromArray(de);function ze(H,Oe,Fe,ht){let ct=new Uint8Array(4),Kt=i.createTexture();i.bindTexture(H,Kt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<Fe;Zt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Oe,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(Oe+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return Kt}let mt={};mt[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(mt[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),dt(i.DEPTH_TEST),l.setFunc(zo),xt(!1),C(bu),dt(i.CULL_FACE),Ze(Hs);function dt(H){f[H]!==!0&&(i.enable(H),f[H]=!0)}function je(H){f[H]!==!1&&(i.disable(H),f[H]=!1)}function ve(H,Oe){return g[H]!==Oe?(i.bindFramebuffer(H,Oe),g[H]=Oe,n&&(H===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Oe),H===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Oe)),!0):!1}function j(H,Oe){let Fe=M,ht=!1;if(H)if(Fe=x.get(Oe),Fe===void 0&&(Fe=[],x.set(Oe,Fe)),H.isWebGLMultipleRenderTargets){let ct=H.texture;if(Fe.length!==ct.length||Fe[0]!==i.COLOR_ATTACHMENT0){for(let Kt=0,Zt=ct.length;Kt<Zt;Kt++)Fe[Kt]=i.COLOR_ATTACHMENT0+Kt;Fe.length=ct.length,ht=!0}}else Fe[0]!==i.COLOR_ATTACHMENT0&&(Fe[0]=i.COLOR_ATTACHMENT0,ht=!0);else Fe[0]!==i.BACK&&(Fe[0]=i.BACK,ht=!0);ht&&(t.isWebGL2?i.drawBuffers(Fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Fe))}function Fn(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let ot={[or]:i.FUNC_ADD,[Op]:i.FUNC_SUBTRACT,[Fp]:i.FUNC_REVERSE_SUBTRACT};if(n)ot[wu]=i.MIN,ot[Au]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(ot[wu]=H.MIN_EXT,ot[Au]=H.MAX_EXT)}let yt={[Bp]:i.ZERO,[kp]:i.ONE,[Hp]:i.SRC_COLOR,[Uc]:i.SRC_ALPHA,[qp]:i.SRC_ALPHA_SATURATE,[Wp]:i.DST_COLOR,[Vp]:i.DST_ALPHA,[zp]:i.ONE_MINUS_SRC_COLOR,[Nc]:i.ONE_MINUS_SRC_ALPHA,[Xp]:i.ONE_MINUS_DST_COLOR,[Gp]:i.ONE_MINUS_DST_ALPHA,[Yp]:i.CONSTANT_COLOR,[$p]:i.ONE_MINUS_CONSTANT_COLOR,[Kp]:i.CONSTANT_ALPHA,[Zp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(H,Oe,Fe,ht,ct,Kt,Zt,Sn,$n,en){if(H===Hs){m===!0&&(je(i.BLEND),m=!1);return}if(m===!1&&(dt(i.BLEND),m=!0),H!==Np){if(H!==S||en!==q){if((v!==or||U!==or)&&(i.blendEquation(i.FUNC_ADD),v=or,U=or),en)switch(H){case $r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Su:i.blendFunc(i.ONE,i.ONE);break;case Eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Su:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}w=null,O=null,N=null,X=null,E.set(0,0,0),A=0,S=H,q=en}return}ct=ct||Oe,Kt=Kt||Fe,Zt=Zt||ht,(Oe!==v||ct!==U)&&(i.blendEquationSeparate(ot[Oe],ot[ct]),v=Oe,U=ct),(Fe!==w||ht!==O||Kt!==N||Zt!==X)&&(i.blendFuncSeparate(yt[Fe],yt[ht],yt[Kt],yt[Zt]),w=Fe,O=ht,N=Kt,X=Zt),(Sn.equals(E)===!1||$n!==A)&&(i.blendColor(Sn.r,Sn.g,Sn.b,$n),E.copy(Sn),A=$n),S=H,q=!1}function Je(H,Oe){H.side===An?je(i.CULL_FACE):dt(i.CULL_FACE);let Fe=H.side===_i;Oe&&(Fe=!Fe),xt(Fe),H.blending===$r&&H.transparent===!1?Ze(Hs):Ze(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),o.setMask(H.colorWrite);let ht=H.stencilWrite;u.setTest(ht),ht&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ee(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):je(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(H){ie!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),ie=H)}function C(H){H!==Dp?(dt(i.CULL_FACE),H!==me&&(H===bu?i.cullFace(i.BACK):H===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):je(i.CULL_FACE),me=H}function T(H){H!==B&&(V&&i.lineWidth(H),B=H)}function ee(H,Oe,Fe){H?(dt(i.POLYGON_OFFSET_FILL),(Z!==Oe||te!==Fe)&&(i.polygonOffset(Oe,Fe),Z=Oe,te=Fe)):je(i.POLYGON_OFFSET_FILL)}function Ee(H){H?dt(i.SCISSOR_TEST):je(i.SCISSOR_TEST)}function ye(H){H===void 0&&(H=i.TEXTURE0+K-1),fe!==H&&(i.activeTexture(H),fe=H)}function re(H,Oe,Fe){Fe===void 0&&(fe===null?Fe=i.TEXTURE0+K-1:Fe=fe);let ht=Se[Fe];ht===void 0&&(ht={type:void 0,texture:void 0},Se[Fe]=ht),(ht.type!==H||ht.texture!==Oe)&&(fe!==Fe&&(i.activeTexture(Fe),fe=Fe),i.bindTexture(H,Oe||mt[H]),ht.type=H,ht.texture=Oe)}function Ge(){let H=Se[fe];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function st(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(H){Ae.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ae.copy(H))}function Xt(H){Ue.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Ue.copy(H))}function Ht(H,Oe){let Fe=p.get(Oe);Fe===void 0&&(Fe=new WeakMap,p.set(Oe,Fe));let ht=Fe.get(H);ht===void 0&&(ht=i.getUniformBlockIndex(Oe,H.name),Fe.set(H,ht))}function Rt(H,Oe){let ht=p.get(Oe).get(H);d.get(Oe)!==ht&&(i.uniformBlockBinding(Oe,ht,H.__bindingPointIndex),d.set(Oe,ht))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},fe=null,Se={},g={},x=new WeakMap,M=[],y=null,m=!1,S=null,v=null,w=null,O=null,U=null,N=null,X=null,E=new Mt(0,0,0),A=0,q=!1,ie=null,me=null,B=null,Z=null,te=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:dt,disable:je,bindFramebuffer:ve,drawBuffers:j,useProgram:Fn,setBlending:Ze,setMaterial:Je,setFlipSided:xt,setCullFace:C,setLineWidth:T,setPolygonOffset:ee,setScissorTest:Ee,activeTexture:ye,bindTexture:re,unbindTexture:Ge,compressedTexImage2D:Le,compressedTexImage3D:He,texImage2D:st,texImage3D:qe,updateUBOMapping:Ht,uniformBlockBinding:Rt,texStorage2D:Pt,texStorage3D:lt,texSubImage2D:Pe,texSubImage3D:St,compressedTexSubImage2D:be,compressedTexSubImage3D:Ut,scissor:Tt,viewport:Xt,reset:Ie}}function __(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap,p,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,T){return g?new OffscreenCanvas(C,T):$o("canvas")}function M(C,T,ee,Ee){let ye=1;if((C.width>Ee||C.height>Ee)&&(ye=Ee/Math.max(C.width,C.height)),ye<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let re=T?zc:Math.floor,Ge=re(ye*C.width),Le=re(ye*C.height);p===void 0&&(p=x(Ge,Le));let He=ee?x(Ge,Le):p;return He.width=Ge,He.height=Le,He.getContext("2d").drawImage(C,0,0,Ge,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ge+"x"+Le+")."),He}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return ad(C.width)&&ad(C.height)}function m(C){return o?!1:C.wrapS!==Ki||C.wrapT!==Ki||C.minFilter!==fi&&C.minFilter!==Fi}function S(C,T){return C.generateMipmaps&&T&&C.minFilter!==fi&&C.minFilter!==Fi}function v(C){i.generateMipmap(C)}function w(C,T,ee,Ee,ye=!1){if(o===!1)return T;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=T;if(T===i.RED&&(ee===i.FLOAT&&(re=i.R32F),ee===i.HALF_FLOAT&&(re=i.R16F),ee===i.UNSIGNED_BYTE&&(re=i.R8)),T===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(re=i.R8UI),ee===i.UNSIGNED_SHORT&&(re=i.R16UI),ee===i.UNSIGNED_INT&&(re=i.R32UI),ee===i.BYTE&&(re=i.R8I),ee===i.SHORT&&(re=i.R16I),ee===i.INT&&(re=i.R32I)),T===i.RG&&(ee===i.FLOAT&&(re=i.RG32F),ee===i.HALF_FLOAT&&(re=i.RG16F),ee===i.UNSIGNED_BYTE&&(re=i.RG8)),T===i.RGBA){let Ge=ye?Wo:tn.getTransfer(Ee);ee===i.FLOAT&&(re=i.RGBA32F),ee===i.HALF_FLOAT&&(re=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(re=Ge===_n?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function O(C,T,ee){return S(C,ee)===!0||C.isFramebufferTexture&&C.minFilter!==fi&&C.minFilter!==Fi?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function U(C){return C===fi||C===Ru||C===jl?i.NEAREST:i.LINEAR}function N(C){let T=C.target;T.removeEventListener("dispose",N),E(T),T.isVideoTexture&&d.delete(T)}function X(C){let T=C.target;T.removeEventListener("dispose",X),q(T)}function E(C){let T=n.get(C);if(T.__webglInit===void 0)return;let ee=C.source,Ee=f.get(ee);if(Ee){let ye=Ee[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&A(C),Object.keys(Ee).length===0&&f.delete(ee)}n.remove(C)}function A(C){let T=n.get(C);i.deleteTexture(T.__webglTexture);let ee=C.source,Ee=f.get(ee);delete Ee[T.__cacheKey],a.memory.textures--}function q(C){let T=C.texture,ee=n.get(C),Ee=n.get(T);if(Ee.__webglTexture!==void 0&&(i.deleteTexture(Ee.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(ee.__webglFramebuffer[ye]))for(let re=0;re<ee.__webglFramebuffer[ye].length;re++)i.deleteFramebuffer(ee.__webglFramebuffer[ye][re]);else i.deleteFramebuffer(ee.__webglFramebuffer[ye]);ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer[ye])}else{if(Array.isArray(ee.__webglFramebuffer))for(let ye=0;ye<ee.__webglFramebuffer.length;ye++)i.deleteFramebuffer(ee.__webglFramebuffer[ye]);else i.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let ye=0;ye<ee.__webglColorRenderbuffer.length;ye++)ee.__webglColorRenderbuffer[ye]&&i.deleteRenderbuffer(ee.__webglColorRenderbuffer[ye]);ee.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ye=0,re=T.length;ye<re;ye++){let Ge=n.get(T[ye]);Ge.__webglTexture&&(i.deleteTexture(Ge.__webglTexture),a.memory.textures--),n.remove(T[ye])}n.remove(T),n.remove(C)}let ie=0;function me(){ie=0}function B(){let C=ie;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),ie+=1,C}function Z(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function te(C,T){let ee=n.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.version>0&&ee.__version!==C.version){let Ee=C.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(ee,C,T);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+T)}function K(C,T){let ee=n.get(C);if(C.version>0&&ee.__version!==C.version){Ae(ee,C,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+T)}function V(C,T){let ee=n.get(C);if(C.version>0&&ee.__version!==C.version){Ae(ee,C,T);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+T)}function Q(C,T){let ee=n.get(C);if(C.version>0&&ee.__version!==C.version){Ue(ee,C,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+T)}let he={[Oa]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[Bc]:i.MIRRORED_REPEAT},fe={[fi]:i.NEAREST,[Ru]:i.NEAREST_MIPMAP_NEAREST,[jl]:i.NEAREST_MIPMAP_LINEAR,[Fi]:i.LINEAR,[dm]:i.LINEAR_MIPMAP_NEAREST,[Fa]:i.LINEAR_MIPMAP_LINEAR},Se={[Em]:i.NEVER,[Pm]:i.ALWAYS,[Tm]:i.LESS,[xf]:i.LEQUAL,[wm]:i.EQUAL,[Cm]:i.GEQUAL,[Am]:i.GREATER,[Rm]:i.NOTEQUAL};function ne(C,T,ee){if(ee?(i.texParameteri(C,i.TEXTURE_WRAP_S,he[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,he[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,he[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,fe[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,fe[T.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==Ki||T.wrapT!==Ki)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,U(T.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,U(T.minFilter)),T.minFilter!==fi&&T.minFilter!==Fi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Ee=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===fi||T.minFilter!==jl&&T.minFilter!==Fa||T.type===ks&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Ba&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(C,Ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function de(C,T){let ee=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",N));let Ee=T.source,ye=f.get(Ee);ye===void 0&&(ye={},f.set(Ee,ye));let re=Z(T);if(re!==C.__cacheKey){ye[re]===void 0&&(ye[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),ye[re].usedTimes++;let Ge=ye[C.__cacheKey];Ge!==void 0&&(ye[C.__cacheKey].usedTimes--,Ge.usedTimes===0&&A(T)),C.__cacheKey=re,C.__webglTexture=ye[re].texture}return ee}function Ae(C,T,ee){let Ee=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Ee=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Ee=i.TEXTURE_3D);let ye=de(C,T),re=T.source;t.bindTexture(Ee,C.__webglTexture,i.TEXTURE0+ee);let Ge=n.get(re);if(re.version!==Ge.__version||ye===!0){t.activeTexture(i.TEXTURE0+ee);let Le=tn.getPrimaries(tn.workingColorSpace),He=T.colorSpace===Bi?null:tn.getPrimaries(T.colorSpace),Pe=T.colorSpace===Bi||Le===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let St=m(T)&&y(T.image)===!1,be=M(T.image,St,!1,s.maxTextureSize);be=xt(T,be);let Ut=y(be)||o,Pt=r.convert(T.format,T.colorSpace),lt=r.convert(T.type),st=w(T.internalFormat,Pt,lt,T.colorSpace,T.isVideoTexture);ne(Ee,T,Ut);let qe,Tt=T.mipmaps,Xt=o&&T.isVideoTexture!==!0&&st!==mf,Ht=Ge.__version===void 0||ye===!0,Rt=O(T,be,Ut);if(T.isDepthTexture)st=i.DEPTH_COMPONENT,o?T.type===ks?st=i.DEPTH_COMPONENT32F:T.type===Bs?st=i.DEPTH_COMPONENT24:T.type===cr?st=i.DEPTH24_STENCIL8:st=i.DEPTH_COMPONENT16:T.type===ks&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===hr&&st===i.DEPTH_COMPONENT&&T.type!==Ah&&T.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Bs,lt=r.convert(T.type)),T.format===Qr&&st===i.DEPTH_COMPONENT&&(st=i.DEPTH_STENCIL,T.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=cr,lt=r.convert(T.type))),Ht&&(Xt?t.texStorage2D(i.TEXTURE_2D,1,st,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,st,be.width,be.height,0,Pt,lt,null));else if(T.isDataTexture)if(Tt.length>0&&Ut){Xt&&Ht&&t.texStorage2D(i.TEXTURE_2D,Rt,st,Tt[0].width,Tt[0].height);for(let Ie=0,H=Tt.length;Ie<H;Ie++)qe=Tt[Ie],Xt?t.texSubImage2D(i.TEXTURE_2D,Ie,0,0,qe.width,qe.height,Pt,lt,qe.data):t.texImage2D(i.TEXTURE_2D,Ie,st,qe.width,qe.height,0,Pt,lt,qe.data);T.generateMipmaps=!1}else Xt?(Ht&&t.texStorage2D(i.TEXTURE_2D,Rt,st,be.width,be.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,be.width,be.height,Pt,lt,be.data)):t.texImage2D(i.TEXTURE_2D,0,st,be.width,be.height,0,Pt,lt,be.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Xt&&Ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,st,Tt[0].width,Tt[0].height,be.depth);for(let Ie=0,H=Tt.length;Ie<H;Ie++)qe=Tt[Ie],T.format!==Zi?Pt!==null?Xt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ie,0,0,0,qe.width,qe.height,be.depth,Pt,qe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ie,st,qe.width,qe.height,be.depth,0,qe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ie,0,0,0,qe.width,qe.height,be.depth,Pt,lt,qe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ie,st,qe.width,qe.height,be.depth,0,Pt,lt,qe.data)}else{Xt&&Ht&&t.texStorage2D(i.TEXTURE_2D,Rt,st,Tt[0].width,Tt[0].height);for(let Ie=0,H=Tt.length;Ie<H;Ie++)qe=Tt[Ie],T.format!==Zi?Pt!==null?Xt?t.compressedTexSubImage2D(i.TEXTURE_2D,Ie,0,0,qe.width,qe.height,Pt,qe.data):t.compressedTexImage2D(i.TEXTURE_2D,Ie,st,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?t.texSubImage2D(i.TEXTURE_2D,Ie,0,0,qe.width,qe.height,Pt,lt,qe.data):t.texImage2D(i.TEXTURE_2D,Ie,st,qe.width,qe.height,0,Pt,lt,qe.data)}else if(T.isDataArrayTexture)Xt?(Ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,st,be.width,be.height,be.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Pt,lt,be.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,st,be.width,be.height,be.depth,0,Pt,lt,be.data);else if(T.isData3DTexture)Xt?(Ht&&t.texStorage3D(i.TEXTURE_3D,Rt,st,be.width,be.height,be.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Pt,lt,be.data)):t.texImage3D(i.TEXTURE_3D,0,st,be.width,be.height,be.depth,0,Pt,lt,be.data);else if(T.isFramebufferTexture){if(Ht)if(Xt)t.texStorage2D(i.TEXTURE_2D,Rt,st,be.width,be.height);else{let Ie=be.width,H=be.height;for(let Oe=0;Oe<Rt;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,st,Ie,H,0,Pt,lt,null),Ie>>=1,H>>=1}}else if(Tt.length>0&&Ut){Xt&&Ht&&t.texStorage2D(i.TEXTURE_2D,Rt,st,Tt[0].width,Tt[0].height);for(let Ie=0,H=Tt.length;Ie<H;Ie++)qe=Tt[Ie],Xt?t.texSubImage2D(i.TEXTURE_2D,Ie,0,0,Pt,lt,qe):t.texImage2D(i.TEXTURE_2D,Ie,st,Pt,lt,qe);T.generateMipmaps=!1}else Xt?(Ht&&t.texStorage2D(i.TEXTURE_2D,Rt,st,be.width,be.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,lt,be)):t.texImage2D(i.TEXTURE_2D,0,st,Pt,lt,be);S(T,Ut)&&v(Ee),Ge.__version=re.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Ue(C,T,ee){if(T.image.length!==6)return;let Ee=de(C,T),ye=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+ee);let re=n.get(ye);if(ye.version!==re.__version||Ee===!0){t.activeTexture(i.TEXTURE0+ee);let Ge=tn.getPrimaries(tn.workingColorSpace),Le=T.colorSpace===Bi?null:tn.getPrimaries(T.colorSpace),He=T.colorSpace===Bi||Ge===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Pe=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,be=[];for(let Ie=0;Ie<6;Ie++)!Pe&&!St?be[Ie]=M(T.image[Ie],!1,!0,s.maxCubemapSize):be[Ie]=St?T.image[Ie].image:T.image[Ie],be[Ie]=xt(T,be[Ie]);let Ut=be[0],Pt=y(Ut)||o,lt=r.convert(T.format,T.colorSpace),st=r.convert(T.type),qe=w(T.internalFormat,lt,st,T.colorSpace),Tt=o&&T.isVideoTexture!==!0,Xt=re.__version===void 0||Ee===!0,Ht=O(T,Ut,Pt);ne(i.TEXTURE_CUBE_MAP,T,Pt);let Rt;if(Pe){Tt&&Xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,qe,Ut.width,Ut.height);for(let Ie=0;Ie<6;Ie++){Rt=be[Ie].mipmaps;for(let H=0;H<Rt.length;H++){let Oe=Rt[H];T.format!==Zi?lt!==null?Tt?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H,0,0,Oe.width,Oe.height,lt,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H,qe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H,0,0,Oe.width,Oe.height,lt,st,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H,qe,Oe.width,Oe.height,0,lt,st,Oe.data)}}}else{Rt=T.mipmaps,Tt&&Xt&&(Rt.length>0&&Ht++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,qe,be[0].width,be[0].height));for(let Ie=0;Ie<6;Ie++)if(St){Tt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,be[Ie].width,be[Ie].height,lt,st,be[Ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,qe,be[Ie].width,be[Ie].height,0,lt,st,be[Ie].data);for(let H=0;H<Rt.length;H++){let Fe=Rt[H].image[Ie].image;Tt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H+1,0,0,Fe.width,Fe.height,lt,st,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H+1,qe,Fe.width,Fe.height,0,lt,st,Fe.data)}}else{Tt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,lt,st,be[Ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,qe,lt,st,be[Ie]);for(let H=0;H<Rt.length;H++){let Oe=Rt[H];Tt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H+1,0,0,lt,st,Oe.image[Ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H+1,qe,lt,st,Oe.image[Ie])}}}S(T,Pt)&&v(i.TEXTURE_CUBE_MAP),re.__version=ye.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ze(C,T,ee,Ee,ye,re){let Ge=r.convert(ee.format,ee.colorSpace),Le=r.convert(ee.type),He=w(ee.internalFormat,Ge,Le,ee.colorSpace);if(!n.get(T).__hasExternalTextures){let St=Math.max(1,T.width>>re),be=Math.max(1,T.height>>re);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,re,He,St,be,T.depth,0,Ge,Le,null):t.texImage2D(ye,re,He,St,be,0,Ge,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ze(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,ye,n.get(ee).__webglTexture,0,yt(T)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Ee,ye,n.get(ee).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(C,T,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let Ee=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ee||Ze(T)){let ye=T.depthTexture;ye&&ye.isDepthTexture&&(ye.type===ks?Ee=i.DEPTH_COMPONENT32F:ye.type===Bs&&(Ee=i.DEPTH_COMPONENT24));let re=yt(T);Ze(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Ee,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Ee,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,Ee,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){let Ee=yt(T);ee&&Ze(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,i.DEPTH24_STENCIL8,T.width,T.height):Ze(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let Ee=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ye=0;ye<Ee.length;ye++){let re=Ee[ye],Ge=r.convert(re.format,re.colorSpace),Le=r.convert(re.type),He=w(re.internalFormat,Ge,Le,re.colorSpace),Pe=yt(T);ee&&Ze(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,He,T.width,T.height):Ze(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,He,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,He,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),te(T.depthTexture,0);let Ee=n.get(T.depthTexture).__webglTexture,ye=yt(T);if(T.depthTexture.format===hr)Ze(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Ee,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Ee,0);else if(T.depthTexture.format===Qr)Ze(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Ee,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function je(C){let T=n.get(C),ee=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");dt(T.__webglFramebuffer,C)}else if(ee){T.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Ee]),T.__webglDepthbuffer[Ee]=i.createRenderbuffer(),mt(T.__webglDepthbuffer[Ee],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),mt(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(C,T,ee){let Ee=n.get(C);T!==void 0&&ze(Ee.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&je(C)}function j(C){let T=C.texture,ee=n.get(C),Ee=n.get(T);C.addEventListener("dispose",X),C.isWebGLMultipleRenderTargets!==!0&&(Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture()),Ee.__version=T.version,a.memory.textures++);let ye=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,Ge=y(C)||o;if(ye){ee.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(o&&T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[Le]=[];for(let He=0;He<T.mipmaps.length;He++)ee.__webglFramebuffer[Le][He]=i.createFramebuffer()}else ee.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Le=0;Le<T.mipmaps.length;Le++)ee.__webglFramebuffer[Le]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(re)if(s.drawBuffers){let Le=C.texture;for(let He=0,Pe=Le.length;He<Pe;He++){let St=n.get(Le[He]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Ze(C)===!1){let Le=re?T:[T];ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let He=0;He<Le.length;He++){let Pe=Le[He];ee.__webglColorRenderbuffer[He]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[He]);let St=r.convert(Pe.format,Pe.colorSpace),be=r.convert(Pe.type),Ut=w(Pe.internalFormat,St,be,Pe.colorSpace,C.isXRRenderTarget===!0),Pt=yt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Ut,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,ee.__webglColorRenderbuffer[He])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(ee.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ye){t.bindTexture(i.TEXTURE_CUBE_MAP,Ee.__webglTexture),ne(i.TEXTURE_CUBE_MAP,T,Ge);for(let Le=0;Le<6;Le++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)ze(ee.__webglFramebuffer[Le][He],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He);else ze(ee.__webglFramebuffer[Le],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);S(T,Ge)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){let Le=C.texture;for(let He=0,Pe=Le.length;He<Pe;He++){let St=Le[He],be=n.get(St);t.bindTexture(i.TEXTURE_2D,be.__webglTexture),ne(i.TEXTURE_2D,St,Ge),ze(ee.__webglFramebuffer,C,St,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,0),S(St,Ge)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Le=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Le,Ee.__webglTexture),ne(Le,T,Ge),o&&T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)ze(ee.__webglFramebuffer[He],C,T,i.COLOR_ATTACHMENT0,Le,He);else ze(ee.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,Le,0);S(T,Ge)&&v(Le),t.unbindTexture()}C.depthBuffer&&je(C)}function Fn(C){let T=y(C)||o,ee=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Ee=0,ye=ee.length;Ee<ye;Ee++){let re=ee[Ee];if(S(re,T)){let Ge=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Le=n.get(re).__webglTexture;t.bindTexture(Ge,Le),v(Ge),t.unbindTexture()}}}function ot(C){if(o&&C.samples>0&&Ze(C)===!1){let T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],ee=C.width,Ee=C.height,ye=i.COLOR_BUFFER_BIT,re=[],Ge=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(C),He=C.isWebGLMultipleRenderTargets===!0;if(He)for(let Pe=0;Pe<T.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){re.push(i.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&re.push(Ge);let St=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if(St===!1&&(C.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),He&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]),St===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ge])),He){let be=n.get(T[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,ee,Ee,0,0,ee,Ee,ye,i.NEAREST),u&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),He)for(let Pe=0;Pe<T.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]);let St=n.get(T[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,St,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}}function yt(C){return Math.min(s.maxSamples,C.samples)}function Ze(C){let T=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Je(C){let T=a.render.frame;d.get(C)!==T&&(d.set(C,T),C.update())}function xt(C,T){let ee=C.colorSpace,Ee=C.format,ye=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===kc||ee!==gs&&ee!==Bi&&(tn.getTransfer(ee)===_n?o===!1?e.has("EXT_sRGB")===!0&&Ee===Zi?(C.format=kc,C.minFilter=Fi,C.generateMipmaps=!1):T=Ko.sRGBToLinear(T):(Ee!==Zi||ye!==Vs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),T}this.allocateTextureUnit=B,this.resetTextureUnits=me,this.setTexture2D=te,this.setTexture2DArray=K,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=ve,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Fn,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Ze}function v_(i,e,t){let n=t.isWebGL2;function s(r,a=Bi){let o,l=tn.getTransfer(a);if(r===Vs)return i.UNSIGNED_BYTE;if(r===hf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===uf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===fm)return i.BYTE;if(r===pm)return i.SHORT;if(r===Ah)return i.UNSIGNED_SHORT;if(r===cf)return i.INT;if(r===Bs)return i.UNSIGNED_INT;if(r===ks)return i.FLOAT;if(r===Ba)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===mm)return i.ALPHA;if(r===Zi)return i.RGBA;if(r===gm)return i.LUMINANCE;if(r===ym)return i.LUMINANCE_ALPHA;if(r===hr)return i.DEPTH_COMPONENT;if(r===Qr)return i.DEPTH_STENCIL;if(r===kc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===xm)return i.RED;if(r===df)return i.RED_INTEGER;if(r===_m)return i.RG;if(r===ff)return i.RG_INTEGER;if(r===pf)return i.RGBA_INTEGER;if(r===Ql||r===ec||r===tc||r===nc)if(l===_n)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ql)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ql)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ec)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cu||r===Pu||r===Iu||r===Lu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Cu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Iu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Du||r===Uu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Du)return l===_n?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Uu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Nu||r===Ou||r===Fu||r===Bu||r===ku||r===Hu||r===zu||r===Vu||r===Gu||r===Wu||r===Xu||r===qu||r===Yu||r===$u)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Nu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ou)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ku)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yu)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$u)return l===_n?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ic||r===Ku||r===Zu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ic)return l===_n?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ku)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vm||r===Ju||r===ju||r===Qu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ic)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ju)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ju)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cr?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var eh=class extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ai=class extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}},M_={type:"move"},La=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let M of e.hand.values()){let y=t.getJointPose(M,n),m=this._getHandJoint(u,M);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=d.position.distanceTo(p.position),g=.02,x=.005;u.inputState.pinching&&f>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(M_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},th=class extends Ws{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,u=null,d=null,p=null,f=null,g=null,x=null,M=t.getContextAttributes(),y=null,m=null,S=[],v=[],w=new Ve,O=null,U=new pi;U.layers.enable(1),U.viewport=new jn;let N=new pi;N.layers.enable(2),N.viewport=new jn;let X=[U,N],E=new eh;E.layers.enable(1),E.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=S[ne];return de===void 0&&(de=new La,S[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=S[ne];return de===void 0&&(de=new La,S[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=S[ne];return de===void 0&&(de=new La,S[ne]=de),de.getHandSpace()};function ie(ne){let de=v.indexOf(ne.inputSource);if(de===-1)return;let Ae=S[de];Ae!==void 0&&(Ae.update(ne.inputSource,ne.frame,u||a),Ae.dispatchEvent({type:ne.type,data:ne.inputSource}))}function me(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",me),s.removeEventListener("inputsourceschange",B);for(let ne=0;ne<S.length;ne++){let de=v[ne];de!==null&&(v[ne]=null,S[ne].disconnect(de))}A=null,q=null,e.setRenderTarget(y),g=null,f=null,p=null,s=null,m=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(ne){u=ne},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",me),s.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let de={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new ys(g.framebufferWidth,g.framebufferHeight,{format:Zi,type:Vs,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let de=null,Ae=null,Ue=null;M.depth&&(Ue=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=M.stencil?Qr:hr,Ae=M.stencil?cr:Bs);let ze={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};p=new XRWebGLBinding(s,t),f=p.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new ys(f.textureWidth,f.textureHeight,{format:Zi,type:Vs,depthTexture:new rl(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});let mt=e.properties.get(m);mt.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(ne){for(let de=0;de<ne.removed.length;de++){let Ae=ne.removed[de],Ue=v.indexOf(Ae);Ue>=0&&(v[Ue]=null,S[Ue].disconnect(Ae))}for(let de=0;de<ne.added.length;de++){let Ae=ne.added[de],Ue=v.indexOf(Ae);if(Ue===-1){for(let mt=0;mt<S.length;mt++)if(mt>=v.length){v.push(Ae),Ue=mt;break}else if(v[mt]===null){v[mt]=Ae,Ue=mt;break}if(Ue===-1)break}let ze=S[Ue];ze&&ze.connect(Ae)}}let Z=new k,te=new k;function K(ne,de,Ae){Z.setFromMatrixPosition(de.matrixWorld),te.setFromMatrixPosition(Ae.matrixWorld);let Ue=Z.distanceTo(te),ze=de.projectionMatrix.elements,mt=Ae.projectionMatrix.elements,dt=ze[14]/(ze[10]-1),je=ze[14]/(ze[10]+1),ve=(ze[9]+1)/ze[5],j=(ze[9]-1)/ze[5],Fn=(ze[8]-1)/ze[0],ot=(mt[8]+1)/mt[0],yt=dt*Fn,Ze=dt*ot,Je=Ue/(-Fn+ot),xt=Je*-Fn;de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(xt),ne.translateZ(Je),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();let C=dt+Je,T=je+Je,ee=yt-xt,Ee=Ze+(Ue-xt),ye=ve*je/T*C,re=j*je/T*C;ne.projectionMatrix.makePerspective(ee,Ee,ye,re,C,T),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function V(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;E.near=N.near=U.near=ne.near,E.far=N.far=U.far=ne.far,(A!==E.near||q!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,q=E.far);let de=ne.parent,Ae=E.cameras;V(E,de);for(let Ue=0;Ue<Ae.length;Ue++)V(Ae[Ue],de);Ae.length===2?K(E,U,N):E.projectionMatrix.copy(U.projectionMatrix),Q(ne,E,de)};function Q(ne,de,Ae){Ae===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(Ae.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Hc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ne)};let he=null;function fe(ne,de){if(d=de.getViewerPose(u||a),x=de,d!==null){let Ae=d.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let Ue=!1;Ae.length!==E.cameras.length&&(E.cameras.length=0,Ue=!0);for(let ze=0;ze<Ae.length;ze++){let mt=Ae[ze],dt=null;if(g!==null)dt=g.getViewport(mt);else{let ve=p.getViewSubImage(f,mt);dt=ve.viewport,ze===0&&(e.setRenderTargetTextures(m,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(m))}let je=X[ze];je===void 0&&(je=new pi,je.layers.enable(ze),je.viewport=new jn,X[ze]=je),je.matrix.fromArray(mt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(mt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(dt.x,dt.y,dt.width,dt.height),ze===0&&(E.matrix.copy(je.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ue===!0&&E.cameras.push(je)}}for(let Ae=0;Ae<S.length;Ae++){let Ue=v[Ae],ze=S[Ae];Ue!==null&&ze!==void 0&&ze.update(Ue,de,u||a)}he&&he(ne,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),x=null}let Se=new bf;Se.setAnimationLoop(fe),this.setAnimationLoop=function(ne){he=ne},this.dispose=function(){}}};function b_(i,e){function t(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function n(y,m){m.color.getRGB(y.fogColor.value,Mf(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function s(y,m,S,v,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(y,m):m.isMeshToonMaterial?(r(y,m),p(y,m)):m.isMeshPhongMaterial?(r(y,m),d(y,m)):m.isMeshStandardMaterial?(r(y,m),f(y,m),m.isMeshPhysicalMaterial&&g(y,m,w)):m.isMeshMatcapMaterial?(r(y,m),x(y,m)):m.isMeshDepthMaterial?r(y,m):m.isMeshDistanceMaterial?(r(y,m),M(y,m)):m.isMeshNormalMaterial?r(y,m):m.isLineBasicMaterial?(a(y,m),m.isLineDashedMaterial&&o(y,m)):m.isPointsMaterial?l(y,m,S,v):m.isSpriteMaterial?u(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,t(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===_i&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,t(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===_i&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,t(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,t(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let S=e.get(m).envMap;if(S&&(y.envMap.value=S,y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap){y.lightMap.value=m.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,y.lightMapTransform)}m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,y.aoMapTransform))}function a(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform))}function o(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function l(y,m,S,v){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*S,y.scale.value=v*.5,m.map&&(y.map.value=m.map,t(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function u(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function d(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function p(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function f(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,y.roughnessMapTransform)),e.get(m).envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function g(y,m,S){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_i&&y.clearcoatNormalScale.value.negate())),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,m){m.matcap&&(y.matcap.value=m.matcap)}function M(y,m){let S=e.get(m).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S_(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let w=v.program;n.uniformBlockBinding(S,w)}function u(S,v){let w=s[S.id];w===void 0&&(x(S),w=d(S),s[S.id]=w,S.addEventListener("dispose",y));let O=v.program;n.updateUBOMapping(S,O);let U=e.render.frame;r[S.id]!==U&&(f(S),r[S.id]=U)}function d(S){let v=p();S.__bindingPointIndex=v;let w=i.createBuffer(),O=S.__size,U=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,O,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let v=s[S.id],w=S.uniforms,O=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let U=0,N=w.length;U<N;U++){let X=Array.isArray(w[U])?w[U]:[w[U]];for(let E=0,A=X.length;E<A;E++){let q=X[E];if(g(q,U,E,O)===!0){let ie=q.__offset,me=Array.isArray(q.value)?q.value:[q.value],B=0;for(let Z=0;Z<me.length;Z++){let te=me[Z],K=M(te);typeof te=="number"||typeof te=="boolean"?(q.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,ie+B,q.__data)):te.isMatrix3?(q.__data[0]=te.elements[0],q.__data[1]=te.elements[1],q.__data[2]=te.elements[2],q.__data[3]=0,q.__data[4]=te.elements[3],q.__data[5]=te.elements[4],q.__data[6]=te.elements[5],q.__data[7]=0,q.__data[8]=te.elements[6],q.__data[9]=te.elements[7],q.__data[10]=te.elements[8],q.__data[11]=0):(te.toArray(q.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ie,q.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(S,v,w,O){let U=S.value,N=v+"_"+w;if(O[N]===void 0)return typeof U=="number"||typeof U=="boolean"?O[N]=U:O[N]=U.clone(),!0;{let X=O[N];if(typeof U=="number"||typeof U=="boolean"){if(X!==U)return O[N]=U,!0}else if(X.equals(U)===!1)return X.copy(U),!0}return!1}function x(S){let v=S.uniforms,w=0,O=16;for(let N=0,X=v.length;N<X;N++){let E=Array.isArray(v[N])?v[N]:[v[N]];for(let A=0,q=E.length;A<q;A++){let ie=E[A],me=Array.isArray(ie.value)?ie.value:[ie.value];for(let B=0,Z=me.length;B<Z;B++){let te=me[B],K=M(te),V=w%O;V!==0&&O-V<K.boundary&&(w+=O-V),ie.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=w,w+=K.storage}}}let U=w%O;return U>0&&(w+=O-U),S.__size=w,S.__cache={},this}function M(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function y(S){let v=S.target;v.removeEventListener("dispose",y);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:u,dispose:m}}var Va=class{constructor(e={}){let{canvas:t=Lm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let g=new Uint32Array(4),x=new Int32Array(4),M=null,y=null,m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this._useLegacyLights=!1,this.toneMapping=zs,this.toneMappingExposure=1;let v=this,w=!1,O=0,U=0,N=null,X=-1,E=null,A=new jn,q=new jn,ie=null,me=new Mt(0),B=0,Z=t.width,te=t.height,K=1,V=null,Q=null,he=new jn(0,0,Z,te),fe=new jn(0,0,Z,te),Se=!1,ne=new za,de=!1,Ae=!1,Ue=null,ze=new Cn,mt=new Ve,dt=new k,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return N===null?K:1}let j=n;function Fn(R,G){for(let $=0;$<R.length;$++){let W=R[$],Y=t.getContext(W,G);if(Y!==null)return Y}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Th}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),j===null){let G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),j=Fn(G,R),j===null)throw Fn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ot,yt,Ze,Je,xt,C,T,ee,Ee,ye,re,Ge,Le,He,Pe,St,be,Ut,Pt,lt,st,qe,Tt,Xt;function Ht(){ot=new Vy(j),yt=new Oy(j,ot,e),ot.init(yt),qe=new v_(j,ot,yt),Ze=new x_(j,ot,yt),Je=new Xy(j),xt=new a_,C=new __(j,ot,Ze,xt,yt,qe,Je),T=new By(v),ee=new zy(v),Ee=new Qm(j,yt),Tt=new Uy(j,ot,Ee,yt),ye=new Gy(j,Ee,Je,Tt),re=new Ky(j,ye,Ee,Je),Pt=new $y(j,yt,C),St=new Fy(xt),Ge=new r_(v,T,ee,ot,yt,Tt,St),Le=new b_(v,xt),He=new l_,Pe=new p_(ot,yt),Ut=new Dy(v,T,ee,Ze,re,f,l),be=new y_(v,re,yt),Xt=new S_(j,Je,yt,Ze),lt=new Ny(j,ot,Je,yt),st=new Wy(j,ot,Je,yt),Je.programs=Ge.programs,v.capabilities=yt,v.extensions=ot,v.properties=xt,v.renderLists=He,v.shadowMap=be,v.state=Ze,v.info=Je}Ht();let Rt=new th(v,j);this.xr=Rt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(Z,te,!1))},this.getSize=function(R){return R.set(Z,te)},this.setSize=function(R,G,$=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,te=G,t.width=Math.floor(R*K),t.height=Math.floor(G*K),$===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(Z*K,te*K).floor()},this.setDrawingBufferSize=function(R,G,$){Z=R,te=G,K=$,t.width=Math.floor(R*$),t.height=Math.floor(G*$),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,G,$,W){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,G,$,W),Ze.viewport(A.copy(he).multiplyScalar(K).floor())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,G,$,W){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,G,$,W),Ze.scissor(q.copy(fe).multiplyScalar(K).floor())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){Ze.setScissorTest(Se=R)},this.setOpaqueSort=function(R){V=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(R=!0,G=!0,$=!0){let W=0;if(R){let Y=!1;if(N!==null){let Ne=N.texture.format;Y=Ne===pf||Ne===ff||Ne===df}if(Y){let Ne=N.texture.type,We=Ne===Vs||Ne===Bs||Ne===Ah||Ne===cr||Ne===hf||Ne===uf,et=Ut.getClearColor(),rt=Ut.getClearAlpha(),gt=et.r,Ke=et.g,_t=et.b;We?(g[0]=gt,g[1]=Ke,g[2]=_t,g[3]=rt,j.clearBufferuiv(j.COLOR,0,g)):(x[0]=gt,x[1]=Ke,x[2]=_t,x[3]=rt,j.clearBufferiv(j.COLOR,0,x))}else W|=j.COLOR_BUFFER_BIT}G&&(W|=j.DEPTH_BUFFER_BIT),$&&(W|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),He.dispose(),Pe.dispose(),xt.dispose(),T.dispose(),ee.dispose(),re.dispose(),Tt.dispose(),Xt.dispose(),Ge.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",$n),Rt.removeEventListener("sessionend",en),Ue&&(Ue.dispose(),Ue=null),ei.stop()};function Ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let R=Je.autoReset,G=be.enabled,$=be.autoUpdate,W=be.needsUpdate,Y=be.type;Ht(),Je.autoReset=R,be.enabled=G,be.autoUpdate=$,be.needsUpdate=W,be.type=Y}function Oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Fe(R){let G=R.target;G.removeEventListener("dispose",Fe),ht(G)}function ht(R){ct(R),xt.remove(R)}function ct(R){let G=xt.get(R).programs;G!==void 0&&(G.forEach(function($){Ge.releaseProgram($)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,$,W,Y,Ne){G===null&&(G=je);let We=Y.isMesh&&Y.matrixWorld.determinant()<0,et=yr(R,G,$,W,Y);Ze.setMaterial(W,We);let rt=$.index,gt=1;if(W.wireframe===!0){if(rt=ye.getWireframeAttribute($),rt===void 0)return;gt=2}let Ke=$.drawRange,_t=$.attributes.position,on=Ke.start*gt,Dn=(Ke.start+Ke.count)*gt;Ne!==null&&(on=Math.max(on,Ne.start*gt),Dn=Math.min(Dn,(Ne.start+Ne.count)*gt)),rt!==null?(on=Math.max(on,0),Dn=Math.min(Dn,rt.count)):_t!=null&&(on=Math.max(on,0),Dn=Math.min(Dn,_t.count));let Un=Dn-on;if(Un<0||Un===1/0)return;Tt.setup(Y,W,et,$,rt);let Vi,nn=lt;if(rt!==null&&(Vi=Ee.get(rt),nn=st,nn.setIndex(Vi)),Y.isMesh)W.wireframe===!0?(Ze.setLineWidth(W.wireframeLinewidth*ve()),nn.setMode(j.LINES)):nn.setMode(j.TRIANGLES);else if(Y.isLine){let ft=W.linewidth;ft===void 0&&(ft=1),Ze.setLineWidth(ft*ve()),Y.isLineSegments?nn.setMode(j.LINES):Y.isLineLoop?nn.setMode(j.LINE_LOOP):nn.setMode(j.LINE_STRIP)}else Y.isPoints?nn.setMode(j.POINTS):Y.isSprite&&nn.setMode(j.TRIANGLES);if(Y.isBatchedMesh)nn.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)nn.renderInstances(on,Un,Y.count);else if($.isInstancedBufferGeometry){let ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,xr=Math.min($.instanceCount,ft);nn.renderInstances(on,Un,xr)}else nn.render(on,Un)};function Kt(R,G,$){R.transparent===!0&&R.side===An&&R.forceSinglePass===!1?(R.side=_i,R.needsUpdate=!0,Ts(R,G,$),R.side=Gs,R.needsUpdate=!0,Ts(R,G,$),R.side=An):Ts(R,G,$)}this.compile=function(R,G,$=null){$===null&&($=R),y=Pe.get($),y.init(),S.push(y),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),R!==$&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights(v._useLegacyLights);let W=new Set;return R.traverse(function(Y){let Ne=Y.material;if(Ne)if(Array.isArray(Ne))for(let We=0;We<Ne.length;We++){let et=Ne[We];Kt(et,$,Y),W.add(et)}else Kt(Ne,$,Y),W.add(Ne)}),S.pop(),y=null,W},this.compileAsync=function(R,G,$=null){let W=this.compile(R,G,$);return new Promise(Y=>{function Ne(){if(W.forEach(function(We){xt.get(We).currentProgram.isReady()&&W.delete(We)}),W.size===0){Y(R);return}setTimeout(Ne,10)}ot.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Zt=null;function Sn(R){Zt&&Zt(R)}function $n(){ei.stop()}function en(){ei.start()}let ei=new bf;ei.setAnimationLoop(Sn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(R){Zt=R,Rt.setAnimationLoop(R),R===null?ei.stop():ei.start()},Rt.addEventListener("sessionstart",$n),Rt.addEventListener("sessionend",en),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(G),G=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,G,N),y=Pe.get(R,S.length),y.init(),S.push(y),ze.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ne.setFromProjectionMatrix(ze),Ae=this.localClippingEnabled,de=St.init(this.clippingPlanes,Ae),M=He.get(R,m.length),M.init(),m.push(M),Mi(R,G,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(V,Q),this.info.render.frame++,de===!0&&St.beginShadows();let $=y.state.shadowsArray;if(be.render($,R,G),de===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ut.render(M,R),y.setupLights(v._useLegacyLights),G.isArrayCamera){let W=G.cameras;for(let Y=0,Ne=W.length;Y<Ne;Y++){let We=W[Y];gr(M,R,We,We.viewport)}}else gr(M,R,G);N!==null&&(C.updateMultisampleRenderTarget(N),C.updateRenderTargetMipmap(N)),R.isScene===!0&&R.onAfterRender(v,R,G),Tt.resetDefaultState(),X=-1,E=null,S.pop(),S.length>0?y=S[S.length-1]:y=null,m.pop(),m.length>0?M=m[m.length-1]:M=null};function Mi(R,G,$,W){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ne.intersectsSprite(R)){W&&dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ze);let We=re.update(R),et=R.material;et.visible&&M.push(R,We,et,$,dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ne.intersectsObject(R))){let We=re.update(R),et=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),dt.copy(R.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),dt.copy(We.boundingSphere.center)),dt.applyMatrix4(R.matrixWorld).applyMatrix4(ze)),Array.isArray(et)){let rt=We.groups;for(let gt=0,Ke=rt.length;gt<Ke;gt++){let _t=rt[gt],on=et[_t.materialIndex];on&&on.visible&&M.push(R,We,on,$,dt.z,_t)}}else et.visible&&M.push(R,We,et,$,dt.z,null)}}let Ne=R.children;for(let We=0,et=Ne.length;We<et;We++)Mi(Ne[We],G,$,W)}function gr(R,G,$,W){let Y=R.opaque,Ne=R.transmissive,We=R.transparent;y.setupLightsView($),de===!0&&St.setGlobalState(v.clippingPlanes,$),Ne.length>0&&ja(Y,Ne,G,$),W&&Ze.viewport(A.copy(W)),Y.length>0&&Es(Y,G,$),Ne.length>0&&Es(Ne,G,$),We.length>0&&Es(We,G,$),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function ja(R,G,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let Ne=yt.isWebGL2;Ue===null&&(Ue=new ys(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")?Ba:Vs,minFilter:Fa,samples:Ne?4:0})),v.getDrawingBufferSize(mt),Ne?Ue.setSize(mt.x,mt.y):Ue.setSize(zc(mt.x),zc(mt.y));let We=v.getRenderTarget();v.setRenderTarget(Ue),v.getClearColor(me),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let et=v.toneMapping;v.toneMapping=zs,Es(R,$,W),C.updateMultisampleRenderTarget(Ue),C.updateRenderTargetMipmap(Ue);let rt=!1;for(let gt=0,Ke=G.length;gt<Ke;gt++){let _t=G[gt],on=_t.object,Dn=_t.geometry,Un=_t.material,Vi=_t.group;if(Un.side===An&&on.layers.test(W.layers)){let nn=Un.side;Un.side=_i,Un.needsUpdate=!0,Qa(on,$,W,Dn,Un,Vi),Un.side=nn,Un.needsUpdate=!0,rt=!0}}rt===!0&&(C.updateMultisampleRenderTarget(Ue),C.updateRenderTargetMipmap(Ue)),v.setRenderTarget(We),v.setClearColor(me,B),v.toneMapping=et}function Es(R,G,$){let W=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,Ne=R.length;Y<Ne;Y++){let We=R[Y],et=We.object,rt=We.geometry,gt=W===null?We.material:W,Ke=We.group;et.layers.test($.layers)&&Qa(et,G,$,rt,gt,Ke)}}function Qa(R,G,$,W,Y,Ne){R.onBeforeRender(v,G,$,W,Y,Ne),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,G,$,W,R,Ne),Y.transparent===!0&&Y.side===An&&Y.forceSinglePass===!1?(Y.side=_i,Y.needsUpdate=!0,v.renderBufferDirect($,G,W,Y,R,Ne),Y.side=Gs,Y.needsUpdate=!0,v.renderBufferDirect($,G,W,Y,R,Ne),Y.side=An):v.renderBufferDirect($,G,W,Y,R,Ne),R.onAfterRender(v,G,$,W,Y,Ne)}function Ts(R,G,$){G.isScene!==!0&&(G=je);let W=xt.get(R),Y=y.state.lights,Ne=y.state.shadowsArray,We=Y.state.version,et=Ge.getParameters(R,Y.state,Ne,G,$),rt=Ge.getProgramCacheKey(et),gt=W.programs;W.environment=R.isMeshStandardMaterial?G.environment:null,W.fog=G.fog,W.envMap=(R.isMeshStandardMaterial?ee:T).get(R.envMap||W.environment),gt===void 0&&(R.addEventListener("dispose",Fe),gt=new Map,W.programs=gt);let Ke=gt.get(rt);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===We)return ca(R,et),Ke}else et.uniforms=Ge.getUniforms(R),R.onBuild($,et,v),R.onBeforeCompile(et,v),Ke=Ge.acquireProgram(et,rt),gt.set(rt,Ke),W.uniforms=et.uniforms;let _t=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(_t.clippingPlanes=St.uniform),ca(R,et),W.needsLights=eo(R),W.lightsStateVersion=We,W.needsLights&&(_t.ambientLightColor.value=Y.state.ambient,_t.lightProbe.value=Y.state.probe,_t.directionalLights.value=Y.state.directional,_t.directionalLightShadows.value=Y.state.directionalShadow,_t.spotLights.value=Y.state.spot,_t.spotLightShadows.value=Y.state.spotShadow,_t.rectAreaLights.value=Y.state.rectArea,_t.ltc_1.value=Y.state.rectAreaLTC1,_t.ltc_2.value=Y.state.rectAreaLTC2,_t.pointLights.value=Y.state.point,_t.pointLightShadows.value=Y.state.pointShadow,_t.hemisphereLights.value=Y.state.hemi,_t.directionalShadowMap.value=Y.state.directionalShadowMap,_t.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,_t.spotShadowMap.value=Y.state.spotShadowMap,_t.spotLightMatrix.value=Y.state.spotLightMatrix,_t.spotLightMap.value=Y.state.spotLightMap,_t.pointShadowMap.value=Y.state.pointShadowMap,_t.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.currentProgram=Ke,W.uniformsList=null,Ke}function la(R){if(R.uniformsList===null){let G=R.currentProgram.getUniforms();R.uniformsList=Zr.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function ca(R,G){let $=xt.get(R);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function yr(R,G,$,W,Y){G.isScene!==!0&&(G=je),C.resetTextureUnits();let Ne=G.fog,We=W.isMeshStandardMaterial?G.environment:null,et=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:gs,rt=(W.isMeshStandardMaterial?ee:T).get(W.envMap||We),gt=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ke=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),_t=!!$.morphAttributes.position,on=!!$.morphAttributes.normal,Dn=!!$.morphAttributes.color,Un=zs;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Un=v.toneMapping);let Vi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,nn=Vi!==void 0?Vi.length:0,ft=xt.get(W),xr=y.state.lights;if(de===!0&&(Ae===!0||R!==E)){let at=R===E&&W.id===X;St.setState(W,R,at)}let sn=!1;W.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==xr.state.version||ft.outputColorSpace!==et||Y.isBatchedMesh&&ft.batching===!1||!Y.isBatchedMesh&&ft.batching===!0||Y.isInstancedMesh&&ft.instancing===!1||!Y.isInstancedMesh&&ft.instancing===!0||Y.isSkinnedMesh&&ft.skinning===!1||!Y.isSkinnedMesh&&ft.skinning===!0||Y.isInstancedMesh&&ft.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ft.instancingColor===!1&&Y.instanceColor!==null||ft.envMap!==rt||W.fog===!0&&ft.fog!==Ne||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==St.numPlanes||ft.numIntersection!==St.numIntersection)||ft.vertexAlphas!==gt||ft.vertexTangents!==Ke||ft.morphTargets!==_t||ft.morphNormals!==on||ft.morphColors!==Dn||ft.toneMapping!==Un||yt.isWebGL2===!0&&ft.morphTargetsCount!==nn)&&(sn=!0):(sn=!0,ft.__version=W.version);let Pi=ft.currentProgram;sn===!0&&(Pi=Ts(W,G,Y));let ti=!1,Ii=!1,Vn=!1,En=Pi.getUniforms(),bi=ft.uniforms;if(Ze.useProgram(Pi.program)&&(ti=!0,Ii=!0,Vn=!0),W.id!==X&&(X=W.id,Ii=!0),ti||E!==R){En.setValue(j,"projectionMatrix",R.projectionMatrix),En.setValue(j,"viewMatrix",R.matrixWorldInverse);let at=En.map.cameraPosition;at!==void 0&&at.setValue(j,dt.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&En.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&En.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Ii=!0,Vn=!0)}if(Y.isSkinnedMesh){En.setOptional(j,Y,"bindMatrix"),En.setOptional(j,Y,"bindMatrixInverse");let at=Y.skeleton;at&&(yt.floatVertexTextures?(at.boneTexture===null&&at.computeBoneTexture(),En.setValue(j,"boneTexture",at.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(En.setOptional(j,Y,"batchingTexture"),En.setValue(j,"batchingTexture",Y._matricesTexture,C));let it=$.morphAttributes;if((it.position!==void 0||it.normal!==void 0||it.color!==void 0&&yt.isWebGL2===!0)&&Pt.update(Y,$,Pi),(Ii||ft.receiveShadow!==Y.receiveShadow)&&(ft.receiveShadow=Y.receiveShadow,En.setValue(j,"receiveShadow",Y.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(bi.envMap.value=rt,bi.flipEnvMap.value=rt.isCubeTexture&&rt.isRenderTargetTexture===!1?-1:1),Ii&&(En.setValue(j,"toneMappingExposure",v.toneMappingExposure),ft.needsLights&&ha(bi,Vn),Ne&&W.fog===!0&&Le.refreshFogUniforms(bi,Ne),Le.refreshMaterialUniforms(bi,W,K,te,Ue),Zr.upload(j,la(ft),bi,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zr.upload(j,la(ft),bi,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&En.setValue(j,"center",Y.center),En.setValue(j,"modelViewMatrix",Y.modelViewMatrix),En.setValue(j,"normalMatrix",Y.normalMatrix),En.setValue(j,"modelMatrix",Y.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let at=W.uniformsGroups;for(let mn=0,In=at.length;mn<In;mn++)if(yt.isWebGL2){let ua=at[mn];Xt.update(ua,Pi),Xt.bind(ua,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function ha(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function eo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(R,G,$){xt.get(R.texture).__webglTexture=G,xt.get(R.depthTexture).__webglTexture=$;let W=xt.get(R);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=$===void 0,W.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){let $=xt.get(R);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,$=0){N=R,O=G,U=$;let W=!0,Y=null,Ne=!1,We=!1;if(R){let rt=xt.get(R);rt.__useDefaultFramebuffer!==void 0?(Ze.bindFramebuffer(j.FRAMEBUFFER,null),W=!1):rt.__webglFramebuffer===void 0?C.setupRenderTarget(R):rt.__hasExternalTextures&&C.rebindTextures(R,xt.get(R.texture).__webglTexture,xt.get(R.depthTexture).__webglTexture);let gt=R.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(We=!0);let Ke=xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[G])?Y=Ke[G][$]:Y=Ke[G],Ne=!0):yt.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?Y=xt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?Y=Ke[$]:Y=Ke,A.copy(R.viewport),q.copy(R.scissor),ie=R.scissorTest}else A.copy(he).multiplyScalar(K).floor(),q.copy(fe).multiplyScalar(K).floor(),ie=Se;if(Ze.bindFramebuffer(j.FRAMEBUFFER,Y)&&yt.drawBuffers&&W&&Ze.drawBuffers(R,Y),Ze.viewport(A),Ze.scissor(q),Ze.setScissorTest(ie),Ne){let rt=xt.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt.__webglTexture,$)}else if(We){let rt=xt.get(R.texture),gt=G||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,rt.__webglTexture,$||0,gt)}X=-1},this.readRenderTargetPixels=function(R,G,$,W,Y,Ne,We){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(et=et[We]),et){Ze.bindFramebuffer(j.FRAMEBUFFER,et);try{let rt=R.texture,gt=rt.format,Ke=rt.type;if(gt!==Zi&&qe.convert(gt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let _t=Ke===Ba&&(ot.has("EXT_color_buffer_half_float")||yt.isWebGL2&&ot.has("EXT_color_buffer_float"));if(Ke!==Vs&&qe.convert(Ke)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===ks&&(yt.isWebGL2||ot.has("OES_texture_float")||ot.has("WEBGL_color_buffer_float")))&&!_t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-W&&$>=0&&$<=R.height-Y&&j.readPixels(G,$,W,Y,qe.convert(gt),qe.convert(Ke),Ne)}finally{let rt=N!==null?xt.get(N).__webglFramebuffer:null;Ze.bindFramebuffer(j.FRAMEBUFFER,rt)}}},this.copyFramebufferToTexture=function(R,G,$=0){let W=Math.pow(2,-$),Y=Math.floor(G.image.width*W),Ne=Math.floor(G.image.height*W);C.setTexture2D(G,0),j.copyTexSubImage2D(j.TEXTURE_2D,$,0,0,R.x,R.y,Y,Ne),Ze.unbindTexture()},this.copyTextureToTexture=function(R,G,$,W=0){let Y=G.image.width,Ne=G.image.height,We=qe.convert($.format),et=qe.convert($.type);C.setTexture2D($,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment),G.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,W,R.x,R.y,Y,Ne,We,et,G.image.data):G.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,W,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,We,G.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,W,R.x,R.y,We,et,G.image),W===0&&$.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Ze.unbindTexture()},this.copyTextureToTexture3D=function(R,G,$,W,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ne=R.max.x-R.min.x+1,We=R.max.y-R.min.y+1,et=R.max.z-R.min.z+1,rt=qe.convert(W.format),gt=qe.convert(W.type),Ke;if(W.isData3DTexture)C.setTexture3D(W,0),Ke=j.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)C.setTexture2DArray(W,0),Ke=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,W.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,W.unpackAlignment);let _t=j.getParameter(j.UNPACK_ROW_LENGTH),on=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Dn=j.getParameter(j.UNPACK_SKIP_PIXELS),Un=j.getParameter(j.UNPACK_SKIP_ROWS),Vi=j.getParameter(j.UNPACK_SKIP_IMAGES),nn=$.isCompressedTexture?$.mipmaps[Y]:$.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,nn.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,nn.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,R.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,R.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,R.min.z),$.isDataTexture||$.isData3DTexture?j.texSubImage3D(Ke,Y,G.x,G.y,G.z,Ne,We,et,rt,gt,nn.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ke,Y,G.x,G.y,G.z,Ne,We,et,rt,nn.data)):j.texSubImage3D(Ke,Y,G.x,G.y,G.z,Ne,We,et,rt,gt,nn),j.pixelStorei(j.UNPACK_ROW_LENGTH,_t),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,on),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Dn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Un),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Vi),Y===0&&W.generateMipmaps&&j.generateMipmap(Ke),Ze.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),Ze.unbindTexture()},this.resetState=function(){O=0,U=0,N=null,Ze.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ms}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Rh?"display-p3":"srgb",t.unpackColorSpace=tn.workingColorSpace===Tl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===si?ur:gf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ur?si:gs}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},nh=class extends Va{};nh.prototype.isWebGL1Renderer=!0;var al=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ol=class extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var ll=class extends mi{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gr=new Cn,Wd=new Cn,No=[],Xd=new xs,E_=new Cn,Ca=new $e,Pa=new qs,cl=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ll(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,E_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),Xd.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union(Xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),Pa.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(n),e.ray.intersectsSphere(Pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gr),Wd.multiplyMatrices(n,Gr),Ca.matrixWorld=Wd,Ca.raycast(e,No);for(let a=0,o=No.length;a<o;a++){let l=No[a];l.instanceId=r,l.object=this,t.push(l)}No.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ll(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ga=class extends Ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qd=new k,Yd=new k,$d=new Cn,Cc=new ka,Oo=new qs,ih=class extends ri{constructor(e=new gi,t=new Ga){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qd.fromBufferAttribute(t,s-1),Yd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qd.distanceTo(Yd);e.setAttribute("lineDistance",new pn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,e.ray.intersectsSphere(Oo)===!1)return;$d.copy(s).invert(),Cc.copy(e.ray).applyMatrix4($d);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new k,d=new k,p=new k,f=new k,g=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){let m=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let v=m,w=S-1;v<w;v+=g){let O=x.getX(v),U=x.getX(v+1);if(u.fromBufferAttribute(y,O),d.fromBufferAttribute(y,U),Cc.distanceSqToSegment(u,d,f,p)>l)continue;f.applyMatrix4(this.matrixWorld);let X=e.ray.origin.distanceTo(f);X<e.near||X>e.far||t.push({distance:X,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),S=Math.min(y.count,a.start+a.count);for(let v=m,w=S-1;v<w;v+=g){if(u.fromBufferAttribute(y,v),d.fromBufferAttribute(y,v+1),Cc.distanceSqToSegment(u,d,f,p)>l)continue;f.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Kd=new k,Zd=new k,hl=class extends ih{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kd.fromBufferAttribute(t,s),Zd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kd.distanceTo(Zd);e.setAttribute("lineDistance",new pn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ul=class extends ki{constructor(e,t,n,s,r,a,o,l,u){super(e,t,n,s,r,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,u;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),u=n[s]-a,u<0)o=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],f=n[s+1]-d,g=(a-d)/f;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ve:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new k,s=[],r=[],a=[],o=new k,l=new Cn;for(let g=0;g<=e;g++){let x=g/e;s[g]=this.getTangentAt(x,new k)}r[0]=new k,a[0]=new k;let u=Number.MAX_VALUE,d=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=u&&(u=d,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),f<=u&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(hi(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(o,x))}a[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(hi(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(g=-g);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],g*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wa=class extends Hi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Ve,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,g=u-this.aY;l=f*d-g*p+this.aX,u=f*p+g*d+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sh=class extends Wa{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ph(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,u){s(a,o,u*(o-r),u*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,u,d,p){let f=(a-r)/u-(o-r)/(u+d)+(o-a)/d,g=(o-a)/d-(l-a)/(d+p)+(l-o)/p;f*=d,g*=d,s(a,o,f,g)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Fo=new k,Pc=new Ph,Ic=new Ph,Lc=new Ph,rh=class extends Hi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let u,d;this.closed||o>0?u=s[(o-1)%r]:(Fo.subVectors(s[0],s[1]).add(s[0]),u=Fo);let p=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(u.distanceToSquared(p),g),M=Math.pow(p.distanceToSquared(f),g),y=Math.pow(f.distanceToSquared(d),g);M<1e-4&&(M=1),x<1e-4&&(x=M),y<1e-4&&(y=M),Pc.initNonuniformCatmullRom(u.x,p.x,f.x,d.x,x,M,y),Ic.initNonuniformCatmullRom(u.y,p.y,f.y,d.y,x,M,y),Lc.initNonuniformCatmullRom(u.z,p.z,f.z,d.z,x,M,y)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(u.x,p.x,f.x,d.x,this.tension),Ic.initCatmullRom(u.y,p.y,f.y,d.y,this.tension),Lc.initCatmullRom(u.z,p.z,f.z,d.z,this.tension));return n.set(Pc.calc(l),Ic.calc(l),Lc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function T_(i,e){let t=1-i;return t*t*e}function w_(i,e){return 2*(1-i)*i*e}function A_(i,e){return i*i*e}function Da(i,e,t,n){return T_(i,e)+w_(i,t)+A_(i,n)}function R_(i,e){let t=1-i;return t*t*t*e}function C_(i,e){let t=1-i;return 3*t*t*i*e}function P_(i,e){return 3*(1-i)*i*i*e}function I_(i,e){return i*i*i*e}function Ua(i,e,t,n,s){return R_(i,e)+C_(i,t)+P_(i,n)+I_(i,s)}var dl=class extends Hi{constructor(e=new Ve,t=new Ve,n=new Ve,s=new Ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ve){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ua(e,s.x,r.x,a.x,o.x),Ua(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ah=class extends Hi{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ua(e,s.x,r.x,a.x,o.x),Ua(e,s.y,r.y,a.y,o.y),Ua(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fl=class extends Hi{constructor(e=new Ve,t=new Ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oh=class extends Hi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pl=class extends Hi{constructor(e=new Ve,t=new Ve,n=new Ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ve){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Da(e,s.x,r.x,a.x),Da(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lh=class extends Hi{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Da(e,s.x,r.x,a.x),Da(e,s.y,r.y,a.y),Da(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ve){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],u=s[a],d=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Jd(o,l.x,u.x,d.x,p.x),Jd(o,l.y,u.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ve().fromArray(s))}return this}},jd=Object.freeze({__proto__:null,ArcCurve:sh,CatmullRomCurve3:rh,CubicBezierCurve:dl,CubicBezierCurve3:ah,EllipseCurve:Wa,LineCurve:fl,LineCurve3:oh,QuadraticBezierCurve:pl,QuadraticBezierCurve3:lh,SplineCurve:ml}),ch=class extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),u=l===0?0:1-a/l;return o.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let u=0;u<l.length;u++){let d=l[u];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new jd[s.type]().fromJSON(s))}return this}},ta=class extends ch{constructor(e){super(),this.type="Path",this.currentPoint=new Ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new fl(this.currentPoint.clone(),new Ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new pl(this.currentPoint.clone(),new Ve(e,t),new Ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new dl(this.currentPoint.clone(),new Ve(e,t),new Ve(n,s),new Ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ml(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+u,t+d,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let u=new Wa(e,t,n,s,r,a,o,l);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var $s=class i extends gi{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let u=this;s=Math.floor(s),r=Math.floor(r);let d=[],p=[],f=[],g=[],x=0,M=[],y=n/2,m=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(f,3)),this.setAttribute("uv",new pn(g,2));function S(){let w=new k,O=new k,U=0,N=(t-e)/n;for(let X=0;X<=r;X++){let E=[],A=X/r,q=A*(t-e)+e;for(let ie=0;ie<=s;ie++){let me=ie/s,B=me*l+o,Z=Math.sin(B),te=Math.cos(B);O.x=q*Z,O.y=-A*n+y,O.z=q*te,p.push(O.x,O.y,O.z),w.set(Z,N,te).normalize(),f.push(w.x,w.y,w.z),g.push(me,1-A),E.push(x++)}M.push(E)}for(let X=0;X<s;X++)for(let E=0;E<r;E++){let A=M[E][X],q=M[E+1][X],ie=M[E+1][X+1],me=M[E][X+1];d.push(A,q,me),d.push(q,ie,me),U+=6}u.addGroup(m,U,0),m+=U}function v(w){let O=x,U=new Ve,N=new k,X=0,E=w===!0?e:t,A=w===!0?1:-1;for(let ie=1;ie<=s;ie++)p.push(0,y*A,0),f.push(0,A,0),g.push(.5,.5),x++;let q=x;for(let ie=0;ie<=s;ie++){let B=ie/s*l+o,Z=Math.cos(B),te=Math.sin(B);N.x=E*te,N.y=y*A,N.z=E*Z,p.push(N.x,N.y,N.z),f.push(0,A,0),U.x=Z*.5+.5,U.y=te*.5*A+.5,g.push(U.x,U.y),x++}for(let ie=0;ie<s;ie++){let me=O+ie,B=q+ie;w===!0?d.push(B,B+1,me):d.push(B+1,B,me),X+=3}u.addGroup(m,X,w===!0?1:2),m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ri=class i extends $s{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gl=class i extends gi{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),u(n),d(),this.setAttribute("position",new pn(r,3)),this.setAttribute("normal",new pn(r.slice(),3)),this.setAttribute("uv",new pn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new k,w=new k,O=new k;for(let U=0;U<t.length;U+=3)g(t[U+0],v),g(t[U+1],w),g(t[U+2],O),l(v,w,O,S)}function l(S,v,w,O){let U=O+1,N=[];for(let X=0;X<=U;X++){N[X]=[];let E=S.clone().lerp(w,X/U),A=v.clone().lerp(w,X/U),q=U-X;for(let ie=0;ie<=q;ie++)ie===0&&X===U?N[X][ie]=E:N[X][ie]=E.clone().lerp(A,ie/q)}for(let X=0;X<U;X++)for(let E=0;E<2*(U-X)-1;E++){let A=Math.floor(E/2);E%2===0?(f(N[X][A+1]),f(N[X+1][A]),f(N[X][A])):(f(N[X][A+1]),f(N[X+1][A+1]),f(N[X+1][A]))}}function u(S){let v=new k;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(S),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function d(){let S=new k;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let w=y(S)/2/Math.PI+.5,O=m(S)/Math.PI+.5;a.push(w,1-O)}x(),p()}function p(){for(let S=0;S<a.length;S+=6){let v=a[S+0],w=a[S+2],O=a[S+4],U=Math.max(v,w,O),N=Math.min(v,w,O);U>.9&&N<.1&&(v<.2&&(a[S+0]+=1),w<.2&&(a[S+2]+=1),O<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function g(S,v){let w=S*3;v.x=e[w+0],v.y=e[w+1],v.z=e[w+2]}function x(){let S=new k,v=new k,w=new k,O=new k,U=new Ve,N=new Ve,X=new Ve;for(let E=0,A=0;E<r.length;E+=9,A+=6){S.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),w.set(r[E+6],r[E+7],r[E+8]),U.set(a[A+0],a[A+1]),N.set(a[A+2],a[A+3]),X.set(a[A+4],a[A+5]),O.copy(S).add(v).add(w).divideScalar(3);let q=y(O);M(U,A+0,S,q),M(N,A+2,v,q),M(X,A+4,w,q)}}function M(S,v,w,O){O<0&&S.x===1&&(a[v]=S.x-1),w.x===0&&w.z===0&&(a[v]=O/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},yl=class i extends gl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var na=class extends ta{constructor(e){super(e),this.uuid=sa(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ta().fromJSON(s))}return this}},L_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Rf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,u,d,p,f,g;if(n&&(r=F_(i,e,r,t)),i.length>80*t){o=u=i[0],l=d=i[1];for(let x=t;x<s;x+=t)p=i[x],f=i[x+1],p<o&&(o=p),f<l&&(l=f),p>u&&(u=p),f>d&&(d=f);g=Math.max(u-o,d-l),g=g!==0?32767/g:0}return Xa(r,a,t,o,l,g,0),a}};function Rf(i,e,t,n,s){let r,a;if(s===$_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Qd(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Qd(r,i[r],i[r+1],a);return a&&Al(a,a.next)&&(Ya(a),a=a.next),a}function dr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Al(t,t.next)||Rn(t.prev,t,t.next)===0)){if(Ya(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&V_(i,n,s,r);let o=i,l,u;for(;i.prev!==i.next;){if(l=i.prev,u=i.next,r?U_(i,n,s,r):D_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(u.i/t|0),Ya(i),i=u.next,o=u.next;continue}if(i=u,i===o){a?a===1?(i=N_(dr(i),e,t),Xa(i,e,t,n,s,r,2)):a===2&&O_(i,e,t,n,s,r):Xa(dr(i),e,t,n,s,r,1);break}}}function D_(i){let e=i.prev,t=i,n=i.next;if(Rn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,u=n.y,d=s<r?s<a?s:a:r<a?r:a,p=o<l?o<u?o:u:l<u?l:u,f=s>r?s>a?s:a:r>a?r:a,g=o>l?o>u?o:u:l>u?l:u,x=n.next;for(;x!==e;){if(x.x>=d&&x.x<=f&&x.y>=p&&x.y<=g&&Yr(s,o,r,l,a,u,x.x,x.y)&&Rn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function U_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Rn(s,r,a)>=0)return!1;let o=s.x,l=r.x,u=a.x,d=s.y,p=r.y,f=a.y,g=o<l?o<u?o:u:l<u?l:u,x=d<p?d<f?d:f:p<f?p:f,M=o>l?o>u?o:u:l>u?l:u,y=d>p?d>f?d:f:p>f?p:f,m=hh(g,x,e,t,n),S=hh(M,y,e,t,n),v=i.prevZ,w=i.nextZ;for(;v&&v.z>=m&&w&&w.z<=S;){if(v.x>=g&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Yr(o,d,l,p,u,f,v.x,v.y)&&Rn(v.prev,v,v.next)>=0||(v=v.prevZ,w.x>=g&&w.x<=M&&w.y>=x&&w.y<=y&&w!==s&&w!==a&&Yr(o,d,l,p,u,f,w.x,w.y)&&Rn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;v&&v.z>=m;){if(v.x>=g&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Yr(o,d,l,p,u,f,v.x,v.y)&&Rn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;w&&w.z<=S;){if(w.x>=g&&w.x<=M&&w.y>=x&&w.y<=y&&w!==s&&w!==a&&Yr(o,d,l,p,u,f,w.x,w.y)&&Rn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function N_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Al(s,r)&&Cf(s,n,n.next,r)&&qa(s,r)&&qa(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ya(n),Ya(n.next),n=i=r),n=n.next}while(n!==i);return dr(n)}function O_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&X_(a,o)){let l=Pf(a,o);a=dr(a,a.next),l=dr(l,l.next),Xa(a,e,t,n,s,r,0),Xa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function F_(i,e,t,n){let s=[],r,a,o,l,u;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,u=Rf(i,o,l,n,!1),u===u.next&&(u.steiner=!0),s.push(W_(u));for(s.sort(B_),r=0;r<s.length;r++)t=k_(s[r],t);return t}function B_(i,e){return i.x-e.x}function k_(i,e){let t=H_(i,e);if(!t)return e;let n=Pf(t,i);return dr(n,n.next),dr(t,t.next)}function H_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,u=s.y,d=1/0,p;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Yr(a<u?r:n,a,l,u,a<u?n:r,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(r-t.x),qa(t,i)&&(p<d||p===d&&(t.x>s.x||t.x===s.x&&z_(s,t)))&&(s=t,d=p)),t=t.next;while(t!==o);return s}function z_(i,e){return Rn(i.prev,i,e.prev)<0&&Rn(e.next,i,i.next)<0}function V_(i,e,t,n){let s=i;do s.z===0&&(s.z=hh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,G_(s)}function G_(i){let e,t,n,s,r,a,o,l,u=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<u&&(o++,n=n.nextZ,!!n);e++);for(l=u;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,u*=2}while(a>1);return i}function hh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function W_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Yr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function X_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!q_(i,e)&&(qa(i,e)&&qa(e,i)&&Y_(i,e)&&(Rn(i.prev,i,e.prev)||Rn(i,e.prev,e))||Al(i,e)&&Rn(i.prev,i,i.next)>0&&Rn(e.prev,e,e.next)>0)}function Rn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Al(i,e){return i.x===e.x&&i.y===e.y}function Cf(i,e,t,n){let s=ko(Rn(i,e,t)),r=ko(Rn(i,e,n)),a=ko(Rn(t,n,i)),o=ko(Rn(t,n,e));return!!(s!==r&&a!==o||s===0&&Bo(i,t,e)||r===0&&Bo(i,n,e)||a===0&&Bo(t,i,n)||o===0&&Bo(t,e,n))}function Bo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ko(i){return i>0?1:i<0?-1:0}function q_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Cf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function qa(i,e){return Rn(i.prev,i,i.next)<0?Rn(i,e,i.next)>=0&&Rn(i,i.prev,e)>=0:Rn(i,e,i.prev)<0||Rn(i,i.next,e)<0}function Y_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Pf(i,e){let t=new uh(i.i,i.x,i.y),n=new uh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Qd(i,e,t,n){let s=new uh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Na=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ef(e),tf(n,e);let a=e.length;t.forEach(ef);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,tf(n,t[l]);let o=L_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ef(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function tf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var xl=class i extends gl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var $a=class i extends gi{constructor(e=new na([new Ve(0,.5),new Ve(-.5,-.5),new Ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let d=0;d<e.length;d++)u(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new pn(s,3)),this.setAttribute("normal",new pn(r,3)),this.setAttribute("uv",new pn(a,2));function u(d){let p=s.length/3,f=d.extractPoints(t),g=f.shape,x=f.holes;Na.isClockWise(g)===!1&&(g=g.reverse());for(let y=0,m=x.length;y<m;y++){let S=x[y];Na.isClockWise(S)===!0&&(x[y]=S.reverse())}let M=Na.triangulateShape(g,x);for(let y=0,m=x.length;y<m;y++){let S=x[y];g=g.concat(S)}for(let y=0,m=g.length;y<m;y++){let S=g[y];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let y=0,m=M.length;y<m;y++){let S=M[y],v=S[0]+p,w=S[1]+p,O=S[2]+p;n.push(v,w,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return K_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function K_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var rs=class i extends gi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),u=0,d=[],p=new k,f=new k,g=[],x=[],M=[],y=[];for(let m=0;m<=n;m++){let S=[],v=m/n,w=0;m===0&&a===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let O=0;O<=t;O++){let U=O/t;p.x=-e*Math.cos(s+U*r)*Math.sin(a+v*o),p.y=e*Math.cos(a+v*o),p.z=e*Math.sin(s+U*r)*Math.sin(a+v*o),x.push(p.x,p.y,p.z),f.copy(p).normalize(),M.push(f.x,f.y,f.z),y.push(U+w,1-v),S.push(u++)}d.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){let v=d[m][S+1],w=d[m][S],O=d[m+1][S],U=d[m+1][S+1];(m!==0||a>0)&&g.push(v,w,U),(m!==n-1||l<Math.PI)&&g.push(w,O,U)}this.setIndex(g),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(M,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _l=class i extends gi{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],u=[],d=new k,p=new k,f=new k;for(let g=0;g<=n;g++)for(let x=0;x<=s;x++){let M=x/s*r,y=g/n*Math.PI*2;p.x=(e+t*Math.cos(y))*Math.cos(M),p.y=(e+t*Math.cos(y))*Math.sin(M),p.z=t*Math.sin(y),o.push(p.x,p.y,p.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),f.subVectors(p,d).normalize(),l.push(f.x,f.y,f.z),u.push(x/s),u.push(g/n)}for(let g=1;g<=n;g++)for(let x=1;x<=s;x++){let M=(s+1)*g+x-1,y=(s+1)*(g-1)+x-1,m=(s+1)*(g-1)+x,S=(s+1)*g+x;a.push(M,y,S),a.push(y,m,S)}this.setIndex(a),this.setAttribute("position",new pn(o,3)),this.setAttribute("normal",new pn(l,3)),this.setAttribute("uv",new pn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Yn=class extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yf,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ho(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Z_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ia=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dh=class extends ia{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ed,endingEnd:ed}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case td:r=e,o=2*t-n;break;case nd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case td:a=e,l=2*n-t;break;case nd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let u=(n-t)*.5,d=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,g=this._weightNext,x=(n-t)/(s-t),M=x*x,y=M*x,m=-f*y+2*f*M-f*x,S=(1+f)*y+(-1.5-2*f)*M+(-.5+f)*x+1,v=(-1-g)*y+(1.5+g)*M+.5*x,w=g*y-g*M;for(let O=0;O!==o;++O)r[O]=m*a[d+O]+S*a[u+O]+v*a[l+O]+w*a[p+O];return r}},fh=class extends ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=(n-t)/(s-t),p=1-d;for(let f=0;f!==o;++f)r[f]=a[u+f]*p+a[l+f]*d;return r}},ph=class extends ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ji=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ho(t,this.TimeBufferType),this.values=Ho(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ho(e.times,Array),values:Ho(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vo:t=this.InterpolantFactoryMethodDiscrete;break;case Go:t=this.InterpolantFactoryMethodLinear;break;case sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vo;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Z_(s))for(let o=0,l=s.length;o!==l;++o){let u=s[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,u=e[o],d=e[o+1];if(u!==d&&(o!==1||u!==e[0]))if(s)l=!0;else{let p=o*n,f=p-n,g=p+n;for(let x=0;x!==n;++x){let M=t[p+x];if(M!==t[f+x]||M!==t[g+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,f=a*n;for(let g=0;g!==n;++g)t[f+g]=t[p+g]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,u=0;u!==n;++u)t[l+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ji.prototype.TimeBufferType=Float32Array;Ji.prototype.ValueBufferType=Float32Array;Ji.prototype.DefaultInterpolation=Go;var fr=class extends Ji{};fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Vo;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var mh=class extends Ji{};mh.prototype.ValueTypeName="color";var gh=class extends Ji{};gh.prototype.ValueTypeName="number";var yh=class extends ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),u=e*o;for(let d=u+o;u!==d;u+=4)Xs.slerpFlat(r,0,a,u-o,a,u,l);return r}},Ka=class extends Ji{InterpolantFactoryMethodLinear(e){return new yh(this.times,this.values,this.getValueSize(),e)}};Ka.prototype.ValueTypeName="quaternion";Ka.prototype.DefaultInterpolation=Go;Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var pr=class extends Ji{};pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Vo;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends Ji{};xh.prototype.ValueTypeName="vector";var _h=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return u.push(d,p),this},this.removeHandler=function(d){let p=u.indexOf(d);return p!==-1&&u.splice(p,2),this},this.getHandler=function(d){for(let p=0,f=u.length;p<f;p+=2){let g=u[p],x=u[p+1];if(g.global&&(g.lastIndex=0),g.test(d))return x}return null}}},J_=new _h,vh=class{constructor(e){this.manager=e!==void 0?e:J_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};vh.DEFAULT_MATERIAL_NAME="__DEFAULT";var vl=class extends ri{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Dc=new Cn,nf=new k,sf=new k,Mh=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new jn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),Dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var bh=class extends Mh{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ml=class extends vl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ri.DEFAULT_UP),this.updateMatrix(),this.target=new ri,this.shadow=new bh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},bl=class extends vl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ih="\\[\\]\\.:\\/",j_=new RegExp("["+Ih+"]","g"),Lh="[^"+Ih+"]",Q_="[^"+Ih.replace("\\.","")+"]",ev=/((?:WC+[\/:])*)/.source.replace("WC",Lh),tv=/(WCOD+)?/.source.replace("WCOD",Q_),nv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),iv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),sv=new RegExp("^"+ev+tv+nv+iv+"$"),rv=["material","materials","bones","map"],Sh=class{constructor(e,t,n){let s=n||bn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(j_,"")}static parseTrackName(e){let t=sv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bn.Composite=Sh;bn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bn.prototype.GetterByBindingType=[bn.prototype._getValue_direct,bn.prototype._getValue_array,bn.prototype._getValue_arrayElement,bn.prototype._getValue_toArray];bn.prototype.SetterByBindingTypeAndVersioning=[[bn.prototype._setValue_direct,bn.prototype._setValue_direct_setNeedsUpdate,bn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_array,bn.prototype._setValue_array_setNeedsUpdate,bn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_arrayElement,bn.prototype._setValue_arrayElement_setNeedsUpdate,bn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_fromArray,bn.prototype._setValue_fromArray_setNeedsUpdate,bn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wv=new Float32Array(1);var Sl=class{constructor(e,t,n=0,s=1/0){this.ray=new ka(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Eh(e,this,n,t),n.sort(rf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Eh(e[s],this,n,t);return n.sort(rf),n}};function rf(i,e){return i.distance-e.distance}function Eh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Eh(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);var Dh=35,Uh=25,Nh=.29,bt=.95,Qn=.35,vs=200,Ci=7,Ks=300,bs=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function ov(i){let e=typeof i=="string"?lv(i):i>>>0;return function(){e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t=(t^t>>>7)>>>0,t/4294967296}}function lv(i){let e=0;for(let t=0;t<i.length;t++)e=Math.imul(31,e)+i.charCodeAt(t),e=e>>>0;return e}var cv=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],Ff=[],hv={tank:["knight","berserker","werewolf","ghoul","barbarian"],melee:["samurai","assassin","ninja","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist","oracle"],ranged:["ranger","amazon","hunter","alchemist","cannibal"],caster:["mage","witch","vampire","necromancer","shaman"]},Za={tank:2,melee:2,support:1,ranged:1,caster:1},Oh={};for(let[i,e]of Object.entries(hv))for(let t of e)Oh[t]=i;function uv(i){let e=Math.max(1,i),t=Object.keys(Za),n=t.reduce((l,u)=>l+(Za[u]??0),0),s={},r=0;for(let l of t){let u=Math.floor(e*(Za[l]??0)/n);s[l]=u,r+=u}let a=e-r,o=[...t].sort((l,u)=>s[l]!==s[u]?s[l]-s[u]:(Za[u]??0)-(Za[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var Qe={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},vi=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist","vampire","necromancer","barbarian","cannibal","shaman","oracle","amazon"];Ff=[...vi];function dv(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var zn={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:14,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:4,agi:3,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:24,maxHp:24,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:23,maxHp:23,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:8},assassin:{name:"Assassin",gender:"female",hp:20,maxHp:20,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:1,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:21,maxHp:21,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:8,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:6,maxMp:6,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:6,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:25,maxHp:25,mp:8,maxMp:8,str:13,agi:8,vit:12,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:10,dex:5,luk:8,int:11,range:5},vampire:{name:"Vampire",gender:"female",hp:18,maxHp:18,mp:16,maxMp:16,str:11,agi:12,vit:3,dex:4,luk:3,int:12,range:1},necromancer:{name:"Necromancer",gender:"male",hp:20,maxHp:20,mp:20,maxMp:20,str:5,agi:4,vit:7,dex:3,luk:11,int:15,range:1},barbarian:{name:"Barbarian",gender:"male",hp:31,maxHp:31,mp:4,maxMp:4,str:16,agi:4,vit:15,dex:6,luk:3,int:2,range:1},cannibal:{name:"Cannibal",gender:"male",hp:22,maxHp:22,mp:7,maxMp:7,str:6,agi:11,vit:2,dex:13,luk:9,int:7,range:4},shaman:{name:"Shaman",gender:"female",hp:16,maxHp:16,mp:21,maxMp:21,str:4,agi:3,vit:3,dex:3,luk:16,int:16,range:4},oracle:{name:"Oracle",gender:"female",hp:19,maxHp:19,mp:19,maxMp:19,str:6,agi:7,vit:4,dex:10,luk:14,int:10,range:1},amazon:{name:"Amazon",gender:"female",hp:23,maxHp:23,mp:5,maxMp:5,str:12,agi:9,vit:11,dex:7,luk:4,int:3,range:3}},fv=["hp","maxHp","mp","str","agi","vit","dex","luk","int"],Bf={};for(let i of vi){let e=zn[i];if(!e)continue;let t=fv.map(s=>e[s]??0),n=t.reduce((s,r)=>s+r,0)/t.length;Bf[i]=t.reduce((s,r)=>s+(r-n)**2,0)/t.length}var Zs={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331},vampire:{primary:16704468,secondary:16704468,hair:1250066,cape:1250066,apron:1250066},necromancer:{primary:405028,secondary:405028,hair:7434350,cape:405028,belt:11372065},barbarian:{primary:11497041,secondary:6045747,hair:6045747,belt:11098894,skin:11497041},cannibal:{primary:11497041,secondary:8421504,hair:6045747,cape:16753920,belt:16753920,skin:11497041},shaman:{primary:3224389,secondary:4349324,hair:32896,cape:5152741,horns:16775930},oracle:{primary:16775930,secondary:16775930,hair:6045747,cape:16777215,belt:15712004,horns:15712004},amazon:{primary:11497041,secondary:11497041,hair:0,cape:331790,belt:0,horns:0,skin:11497041,apron:331790}},aa={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp",vampire:"https://files.idyllic.app/files/static/2567599?width=256&optimizer=image",necromancer:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k",barbarian:"https://image.lexica.art/full_jpg/dd171d51-f518-4ae9-949b-23f5d7a157be",cannibal:"https://i.pinimg.com/736x/de/57/d1/de57d1e7aa4dd2d8f052d48b06831cbd.jpg",shaman:"https://w0.peakpx.com/wallpaper/350/203/HD-wallpaper-guy-shaman-skull-horns-anime-art-green-thumbnail.jpg",oracle:"https://images.stockcake.com/public/a/3/d/a3d08448-237f-4c23-8660-43b615c9e3c9_large/desert-oracle-enchantress-stockcake.jpg",amazon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnWAK4nkfgm8v-Ab35e3lkKOPOGTJzprr1w&s"},as=vi.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function pv(i,e,t){if(!bs)return;let n=i?.class;if(i?.summonedBy!=null&&Array.isArray(t)){let r=t.find(a=>a.id===i.summonedBy);r?.class&&(n=r.class)}if(vi.includes(n)&&as[n]&&as[n].kills++,e?.summonedBy!=null)return;let s=e?.class;vi.includes(s)&&as[s]&&as[s].deaths++}function mv(i,e){if(!bs)return;for(let n of i)!n||!as[n.class]||(as[n.class].battles++,e!=null&&(n.player===e?as[n.class].wins++:as[n.class].losses++));let t=vi.map(n=>{let s=as[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var oa={knight:[{name:"Brave",description:"Gain +1 STR and +1 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:7,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:2,target:"enemy",range:6,level:2,effectKey:"manaDrain",type:"spell"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:5,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:5,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex",type:"spell"},{name:"Drain",description:"Deal INT-based damage to HP and MP and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:1,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement",type:"spell"}],exorcist:[{name:"Sanctuary",description:"Gain +1 ALL stats for both ally and self for 3 turns.",cost:5,target:"ally",range:4,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}],vampire:[{name:"Gaze",description:"Reduce target's AGI and VIT by 1 for 3 turns",cost:5,target:"enemy",range:4,level:2,effectKey:"gaze",type:"spell"},{name:"Blood Suck",description:"Absorb enemy HP based on your MP",cost:7,target:"enemy",range:1,level:3,effectKey:"bloodSuck"}],necromancer:[{name:"Debilitate",description:"Steal target's 2 HP and 2 VIT for 2 turns",cost:5,target:"enemy",range:5,level:1,effectKey:"debilitate",type:"spell"},{name:"Reanimate",description:"Resurrect dead unit to your control",cost:10,target:"self",range:0,level:2,effectKey:"reanimate"}],barbarian:[{name:"War Cry",description:"Gain +3 VIT for -1 HP for 2 turns",cost:2,hpCost:1,target:"self",range:0,level:1,effectKey:"warCry"},{name:"Bash",description:"Reduce target's AGI to 0 for 2 turns",cost:5,target:"enemy",range:1,level:3,effectKey:"bash"}],cannibal:[{name:"Gnaw",description:"Deal STR based damage to heal self",cost:3,target:"enemy",range:1,level:2,effectKey:"gnaw"},{name:"Infect",description:"Poison enemy for 3 turns",cost:4,target:"enemy",range:6,level:3,effectKey:"infect"}],shaman:[{name:"Curse",description:"Steal 1 ALL stats for 2 turns",cost:5,target:"enemy",range:6,level:1,effectKey:"curse",type:"spell"},{name:"Vodoo",description:"Deal INT+LUK-based damage to one enemy",cost:8,hpCost:3,target:"enemy",range:6,level:2,effectKey:"vodoo",type:"spell"}],oracle:[{name:"Foresight",description:"Gain +1 INT and +1 DEX for 2 turns",cost:5,target:"ally",range:6,level:1,effectKey:"foresight"},{name:"Overheal",description:"Heal ally for 2 turns",cost:8,target:"ally",range:6,level:2,effectKey:"overheal"}],amazon:[{name:"Skewer",description:"Deal DEX-based damage to AGI for 2 turns ",cost:5,target:"enemy",range:5,level:2,effectKey:"skewer"},{name:"Rapid",description:"Double attack for 1 turn",cost:6,target:"self",range:0,level:3,effectKey:"rapid"}]};function Me(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function zi(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0,r=String(t);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}var gv={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"},If=new Map;function yv(i){let e=If.get(i);return e!==void 0||(e=gv[i]??i.replace(/([A-Z])/g," $1").replace(/^./,t=>t.toUpperCase()).trim(),If.set(i,e)),e}function Ja(i,e,t,n){let s=e,r=t,a=yv(i);n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,a,!1,"skill-name");let o=a,l=r?`${r.name} (${r.class}, P${r.player})`:"self",u=null,d=(f,g,x,M)=>{if(x)f.hp=Math.min(f.maxHp,f.hp+g),n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,`+${g}`,!1,"heal");else{let y=f===s,m=!0;if(!y&&!M){let S=Me(f,"agi")*.7+Me(f,"luk")*.3;m=Math.random()*Math.max(.001,S)<=Me(s,"dex")}return m?(f.hp=Math.max(0,f.hp-g),f!==s&&(u=g),n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,String(g),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(f),f.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(f,s)):n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,"MISS",!0),m}},p=(f,g,x,M)=>{n.showFloatingCombatText&&n.showFloatingCombatText(f,g,x,!1,M?"buff":"debuff")};switch(i){case"brave":s.tempBuff={str:1,vit:1,duration:3},p(s.x,s.y,"+1 STR, +1 VIT",!0);break;case"dominate":{if(!r)break;let f=2,g=1;r.str=Math.max(1,(r.str||0)-f),s.str=(s.str||0)+f,r.vit=Math.max(1,(r.vit||0)-g),s.vit=(s.vit||0)+g,p(r.x,r.y,`-${f} STR and -${g} VIT`,!1),p(s.x,s.y,`+${f} STR and +${g} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let f=Math.max(1,Math.ceil(Me(s,"int")-(Me(r,"int")*.7+Me(r,"luk")*.2)));d(r,f,!1,!0)}break;case"manaDrain":if(r){let f=Math.max(1,Math.floor(Me(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-f),s.mp=(s.mp||0)+f,p(r.x,r.y,`-${f} MP`,!1),p(s.x,s.y,`+${f} MP`,!0)}break;case"mantra":if(r){let f=Math.max(1,Math.floor(Me(s,"int")*.3));s.tempBuff={int:f,duration:3},p(s.x,s.y,`+${f} LUK`,!0),r.tempBuff={luk:f,duration:3},p(r.x,r.y,`+${f} LUK`,!0)}break;case"chakra":{if(d(s,Math.max(1,Math.floor(Me(s,"int")*.3+Me(s,"luk")*.15)),!0),!r)break;d(r,Math.max(1,Math.floor(Me(s,"int")*.3+Me(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let f=1;r.vit=Math.max(1,(r.vit||0)-f),s.vit=(s.vit||0)+f,p(r.x,r.y,`-${f} VIT`,!1),p(s.x,s.y,`+${f} VIT`,!0)}break;case"feast":{if(!r)break;let f=Math.max(1,Math.floor(Me(s,"str")*.7-(Me(r,"vit")*.3+Me(r,"luk")*.2)));d(r,f,!1)&&d(s,f,!0)}break;case"impale":{if(!r)break;let f=2;r.tempDebuff={agi:f,duration:3},p(r.x,r.y,`-${f} AGI`,!1)}break;case"pierce":{if(!r)break;let f=Math.max(1,Math.floor(Me(s,"str")*.6));d(r,f,!1)}break;case"focus":s.tempBuff={dex:3,duration:3},p(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let f=Math.max(1,Math.floor(Me(s,"dex")*.7-(Me(r,"vit")*.3+Me(r,"luk")*.2)));d(r,f,!1)}break;case"cripple":{if(!r)break;let f=1;r.agi=Math.max(1,(r.agi||0)-f),s.agi=(s.agi||0)+f,p(r.x,r.y,`-${f} AGI`,!1),p(s.x,s.y,`+${f} AGI`,!0)}break;case"execute":if(r){let f=Math.max(1,Math.floor(Me(s,"agi")*.8-(Me(r,"vit")*.3+Me(r,"luk")*.2)));d(r,f,!1)}break;case"berserk":r&&(d(r,Math.max(1,Math.floor(Me(s,"str")*.8-Me(r,"vit")*.3+Me(r,"luk")*.2)),!1),d(s,3,!1));break;case"bloodlust":{let f=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff={str:f,vit:f,duration:2},p(s.x,s.y,`+${f} STR, +${f} VIT`,!0)}break;case"hex":{if(!r)break;let f=1;r.int=Math.max(1,(r.int||0)-f),s.int=(s.int||0)+f,p(r.x,r.y,`-${f} INT`,!1),p(s.x,s.y,`+${f} INT`,!0)}break;case"drain":{if(!r)break;let f=Math.max(1,Math.ceil(Me(s,"int")*.6-(Me(r,"int")*.4+Me(r,"luk")*.2))),g=Math.max(1,Math.ceil(Me(s,"int")*.2-(Me(r,"int")*.4+Me(r,"luk")*.2)));d(r,f,!1,!0),d(s,g,!0),p(r.x,r.y,`-${g} MP`,!1),p(s.x,s.y,`+${g} MP`,!0)}break;case"blind":{if(!r)break;let f=1;r.dex=Math.max(1,(r.dex||0)-f),s.dex=(s.dex||0)+f,p(r.x,r.y,`-${f} DEX`,!1),p(s.x,s.y,`+${f} DEX`,!0)}break;case"shuriken":{if(!r)break;let f=Math.max(1,Math.floor(Me(s,"dex")*.7-(Me(r,"vit")*.3+Me(r,"luk")*.2)));d(r,f,!1)}break;case"iaido":s.tempBuff={str:1,dex:1,duration:3},p(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let f=Math.max(1,Math.floor(Me(s,"str")*.4+Me(s,"dex")*.4-(Me(r,"vit")*.3+Me(r,"luk")*.2)));d(r,f,!1)}break;case"bite":{if(!r)break;let f=Math.max(1,Math.floor(Me(s,"str")*.7+Me(s,"agi")*.1-(Me(r,"vit")*.3+Me(r,"luk")*.2)));d(r,f,!1)}break;case"howl":s.tempBuff={str:2,agi:2,duration:3},p(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let f=Math.max(1,Math.floor(Me(s,"int")*.5));d(r,f,!0),d(s,3,!1)}break;case"judgement":{if(!r)break;let f=Math.max(1,Math.floor(s.maxHp-s.hp-(Me(r,"int")*.2+Me(r,"luk")*.1)));d(r,f,!1,!0)}break;case"sanctuary":s.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},r.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),p(s.x,s.y,"+1 ALL STATS",!0),p(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let f=Math.max(1,Math.floor(r.maxHp-r.hp-(Me(r,"int")*.2+Me(r,"luk")*.1)));d(r,f,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,p(r.x,r.y,"-2 LUK",!1),p(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let f=Math.max(1,Math.floor(Me(s,"luk")*.8-(Me(r,"vit")*.3+Me(r,"luk")*.2)));d(r,f,!1)}break;case"windWalk":s.tempBuff={agi:3,duration:3},p(s.x,s.y,"+3 AGI",!0);break;case"powerShot":{if(!r)break;let f=Math.max(1,Math.floor(Me(s,"dex")*.6-(Me(r,"vit")*.3+Me(r,"luk")*.2)));if(d(r,f,!1)&&n.world&&n.units&&n.updateUnitPosition){let x=Math.max(1,Math.floor(f*.2)),M=vv(n.world,n.units,s,r,x),y=r.x,m=r.y;r.x=M.newGx,r.y=M.newGy,n.updateUnitTileIndex&&n.updateUnitTileIndex(r,y,m),M.collisionDamage>0?(console.log("[KNOCKBACK]",`${M.collisionDamage} dmg to ${r.name}`),n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),d(r,M.collisionDamage,!1),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)):n.animateKnockback?n.animateKnockback(r,y,m,M.newGx,M.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r))}}break;case"forge":s.tempBuff={str:2,duration:3},r.tempBuff={str:2,duration:3},p(s.x,s.y,"+2 STR",!0),p(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff={str:3,vit:3,duration:3},r.tempBuff={str:3,vit:3,duration:3},p(s.x,s.y,"+3 STR, +3 VIT",!0),p(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let f=Math.max(1,Math.floor(Me(r,"luk")*.3));r.tempDebuff={poison:f,duration:3},p(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let f=Math.max(1,Math.floor(Me(s,"int")*.8-(Me(r,"int")*.4+Me(r,"luk")*.2)));d(r,f,!1,!0);let g=Math.max(1,Math.floor(f*.5));s.luk=Math.max(1,(s.luk||0)+g),p(s.x,s.y,`+${g} LUK`,!0)}break;case"gaze":{if(!r)break;let f=1;r.tempDebuff={agi:f,vit:f,duration:4},p(r.x,r.y,`-${f} AGI, -${f} VIT`,!1)}break;case"bloodSuck":{if(!r)break;let f=Math.max(1,Math.floor(s.mp*.6+Me(s,"int")*.6-(r.hp*.2+Me(r,"luk")*.1)));d(r,f,!1,!0)&&d(s,f,!0)}break;case"debilitate":{if(!r)break;let f=2;r.tempDebuff={hp:f,maxHp:f,vit:f,duration:3},s.tempBuff={hp:f,maxHp:f,vit:f,duration:3},p(r.x,r.y,`-${f} HP, -${f} VIT`,!1),p(s.x,s.y,`+${f} HP, +${f} VIT`,!0)}break;case"reanimate":{if(!n.units||!n.reanimateDeadUnit)break;let f=n.units,g=null,x=-1,M=null,y=-1,m=!1;for(let v=0;v<f.length;v++){let w=f[v];if(w.hp>0)continue;let O=w.deathOrder??0;O>=x&&(x=O,g=w),w.player===s.player&&(m=!0,O>=y&&(y=O,M=w))}let S=m?M:g;S&&n.reanimateDeadUnit(s,S)}break;case"warCry":s.tempBuff={vit:3,duration:3},p(s.x,s.y,"+3 VIT",!0);break;case"bash":{if(!r)break;let f=r.agi;r.tempDebuff={agi:f,duration:3},p(r.x,r.y,`-${f} AGI`,!1)}break;case"gnaw":{let f=Math.max(1,Math.floor(Me(s,"str")-(Me(r,"vit")*.3+Me(r,"luk")*.2)));d(r,f,!1,!0),d(s,f,!0)}break;case"infect":{let f=Math.max(1,Math.floor(Me(r,"luk")*.3));r.tempDebuff={poison:f,duration:4},p(r.x,r.y,"Poisoned for 3 turns",!1)}break;case"curse":r.tempDebuff={hp:1,maxHp:1,mp:1,maxMp:1,luk:1,int:1,str:1,vit:1,agi:1,dex:1,duration:3},s.tempBuff={hp:1,maxHp:1,luk:1,int:1,str:1,vit:1,agi:1,dex:1,duration:3},p(r.x,r.y,"-1 ALL STATS",!1),p(s.x,s.y,"+1 ALL STATS",!0);break;case"vodoo":{let f=Math.max(1,Math.floor((Me(s,"int")+Me(s,"luk"))*.8)-(Me(r,"int")+Me(r,"luk")*.4));d(r,f,!1,!0)}break;case"foresight":{if(s.tempBuff={int:1,dex:1,duration:3},p(s.x,s.y,"+1 INT, +1 DEX",!0),!r)break;r.tempBuff={int:1,dex:1,duration:3},p(r.x,r.y,"+1 INT, +1 DEX",!0)}break;case"overheal":{let f=Math.max(1,Math.floor(Me(s,"int")*.3+Me(s,"luk")*.1));if(s.tempBuff={heal:f,duration:3},p(s.x,s.y,"Auto heal for 2 turns",!0),!r)break;r.tempDebuff={heal:f,duration:3},p(r.x,r.y,"Auto heal for 2 turns",!0)}break;case"skewer":{let f=Math.max(1,Math.floor(Me(s,"dex")*.8-(Me(r,"vit")*.3+Me(r,"luk")*.2)));r.tempDebuff={agi:f,duration:3},p(r.x,r.y,`-${f} AGI`,!1)}break;case"rapid":s.tempBuff={doubleAttack:!0,duration:2},p(s.x,s.y,"Double attack for 1 turn",!0);break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",o,"\u2192",l,`| MP ${s.mp}`,u!=null?`| ${u} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function Lf(i){let e=Dh,t=Uh,n=Array.from({length:t},()=>Array(e).fill(!1)),s=Array.from({length:t},()=>Array(e).fill(0)),r=Array.from({length:t},()=>Array(e).fill(Qe.GRASS)),a=i!=null?ov(i):()=>Math.random(),o=Math.floor(e/2),l=Math.floor(t/2),u=o,d=0,p=o,f=t-1,g=2,x=3;function M(K,V,Q,he){let fe=he;for(let Se=V;Se<=Q;Se++)if(!(Se<0||Se>=t))for(let ne=-g;ne<=g;ne++){let de=fe+ne;de<0||de>=e||(n[Se][de]=!0,r[Se][de]=K,s[Se][de]=1)}}M(Qe.BASE_TOP,d,d+x-1,u),M(Qe.BASE_BOTTOM,f-x+1,f,p),M(Qe.CENTER,l-1,l+1,o);let y=new Set,m=(K,V)=>Math.abs(K-o)<=2&&Math.abs(V-l)<=1,S=(K,V)=>{K<0||K>=e||V<0||V>=t||m(K,V)||y.add(V*e+K)},v=Math.floor(e/2),w=Math.floor(t/2),O=Math.min(e,t)*Nh,U=Math.max(60,(t+e)*2);for(let K=0;K<2;K++){let V=K===0?v-O:v+O,Q=K===0?Math.PI/2:-Math.PI/2,he=K===0?Math.PI*3/2:Math.PI/2;for(let fe=0;fe<=U;fe++){let Se=fe/U,ne=Q+Se*(he-Q),de=V+O*Math.cos(ne),Ae=w+O*Math.sin(ne),Ue=Math.round(de),ze=Math.round(Ae);S(Ue,ze),S(Ue+1,ze),S(Ue-1,ze),S(Ue,ze+1),S(Ue,ze-1)}}let N=[[0,1],[0,-1],[1,0],[-1,0]];for(let K=0;K<1;K++){let V=[];y.forEach(Q=>{let he=Q%e,fe=Q/e|0;for(let[Se,ne]of N){let de=he+Se,Ae=fe+ne;if(de<0||de>=e||Ae<0||Ae>=t)continue;let Ue=Ae*e+de;y.has(Ue)||V.push(Ue)}}),V.forEach(Q=>y.add(Q))}y.forEach(K=>{let V=K%e,Q=K/e|0;r[Q][V]===Qe.BASE_TOP||r[Q][V]===Qe.BASE_BOTTOM||r[Q][V]===Qe.CENTER||(n[Q][V]=!0,r[Q][V]=Qe.PATH,s[Q][V]=1)});let X=Math.round(v-O*1.6),E=Math.round(v+O*1.6),A=Math.round(v-O),q=Math.round(v+O),ie=1;for(let K=l-ie;K<=l+ie;K++)if(!(K<0||K>=t))for(let V=X;V<=E;V++)V<0||V>=e||(n[K][V]=!0,r[K][V]!==Qe.CENTER&&r[K][V]!==Qe.BASE_TOP&&r[K][V]!==Qe.BASE_BOTTOM&&(r[K][V]=Qe.PATH),s[K][V]=Math.max(s[K][V],1));function me(K,V,Q,he){let fe=Math.max(1,Math.min(K,V)),Se=Math.min(t-2,Math.max(K,V)),ne=Math.max(1,Math.min(Q,he)),de=Math.min(e-2,Math.max(Q,he));for(let Ae=fe;Ae<=Se;Ae++)for(let Ue=ne;Ue<=de;Ue++)r[Ae][Ue]===Qe.BASE_TOP||r[Ae][Ue]===Qe.BASE_BOTTOM||r[Ae][Ue]===Qe.CENTER||(n[Ae][Ue]=!0,r[Ae][Ue]=Qe.PATH,s[Ae][Ue]=1)}let B=3,Z=3;me(d,d+B-1,A,u-1),me(d,d+B-1,u+1,q),me(f-Z+1,f,A,p-1),me(f-Z+1,f,p+1,q),M(Qe.BASE_TOP,d,d+x-1,u),M(Qe.BASE_BOTTOM,f-x+1,f,p),M(Qe.CENTER,l-1,l+1,o);for(let K=0;K<t;K++)for(let V=0;V<e;V++){if(n[K][V]||r[K][V]===Qe.BASE_TOP||r[K][V]===Qe.BASE_BOTTOM||r[K][V]===Qe.CENTER)continue;let Q=Math.abs(V-u)<=4&&Math.abs(K-d)<=3,he=Math.abs(V-p)<=4&&Math.abs(K-f)<=3,fe=Q||he,Se=a();Se<.55&&!fe?(r[K][V]=Qe.TREE,s[K][V]=1+Math.floor(a()*2)):Se<.75||fe&&Se<.5?(r[K][V]=Qe.WATER,s[K][V]=0):(r[K][V]=Qe.ROCK,s[K][V]=1+Math.floor(a()*2))}let te=[];for(let K=0;K<t;K++)for(let V=0;V<e;V++)r[K][V]===Qe.CENTER&&te.push({gx:V,gy:K});return{w:e,h:t,path:n,height:s,type:r,topBaseX:u,topBaseY:d,botBaseX:p,botBaseY:f,centerTiles:te}}function xv(i,e,t){let n=e===1?Qe.BASE_BOTTOM:Qe.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function _v(i){if(i.centerTiles&&i.centerTiles.length>0)return i.centerTiles;let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===Qe.CENTER&&e.push({gx:n,gy:t});return e}function Df(i,e){let t=_v(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function Ss(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===Qe.TREE||n===Qe.WATER||n===Qe.ROCK)}function vv(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,u=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,d=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(u===0&&d===0)return{newGx:r,newGy:a,collisionDamage:0};let p=0;for(let f=0;f<s;f++){let g=r+u,x=a+d,M=g<0||g>=i.w||x<0||x>=i.h,y=!Ss(i,g,x),m=e.some(S=>S.hp>0&&S.id!==n.id&&S.x===g&&S.y===x);if(M||y||m){let S=Math.max(1,p*3+Math.ceil((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:S}}r=g,a=x,p++}return{newGx:r,newGy:a,collisionDamage:0}}function Mv(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,u=Math.abs(o-r),d=Math.abs(l-a),p=r<o?1:-1,f=a<l?1:-1,g=u-d;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*g;x>-d&&(g-=d,r+=p),x<u&&(g+=u,a+=f)}return s}function Ms(i,e,t,n,s){let r=Mv(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!Ss(i,o.x,o.y))return!1}return!0}function Rl(i,e,t,n,s,r){let a=(g,x)=>x*i.w+g,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],u=0,d=[[0,1],[0,-1],[1,0],[-1,0]],p=s!=null&&r!=null,f=p?new Set(s.filter(g=>g.hp>0&&g.player!==r.player).map(g=>g.y*i.w+g.x)):null;for(;u<l.length;){let{x:g,y:x,d:M}=l[u++];if(!(M>=n))for(let[y,m]of d){let S=g+y,v=x+m;if(!Ss(i,S,v)||p&&f.has(a(S,v)))continue;let w=a(S,v);if(o.has(w))continue;let O=M+1;o.set(w,O),l.push({x:S,y:v,d:O})}}return o}function Uf(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let u=o;u<=l;u++)for(let d=r;d<=a;d++){let p=Math.abs(d-e)+Math.abs(u-t);p>=1&&p<=n&&s.set(u*i.w+d,p)}return s}function mr(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(x,M)=>M*i.w+x,l=new Set(r.filter(x=>x.hp>0&&x.player!==a.player).map(x=>x.y*i.w+x.x)),u=new Map,d=[{x:e,y:t}],p=0;u.set(o(e,t),null);let f=[[0,1],[0,-1],[1,0],[-1,0]];function g(x,M){return Ss(i,x,M)?!l.has(o(x,M)):!1}for(;p<d.length;){let{x,y:M}=d[p++];if(x===n&&M===s){let y=[],m={x:n,y:s};for(;m;)y.unshift(m),m=u.get(o(m.x,m.y));return y}for(let[y,m]of f){let S=x+y,v=M+m,w=o(S,v);u.has(w)||g(S,v)&&(u.set(w,{x,y:M}),d.push({x:S,y:v}))}}return null}function bv(i,e,t,n,s,r){if(!n||n.length===0)return null;let a=(M,y)=>y*i.w+M,o=a(e,t),l=new Set;for(let M=0;M<n.length;M++){let y=n[M];y&&y.gx!=null&&y.gy!=null&&l.add(a(y.gx,y.gy))}if(l.size===0)return null;if(l.has(o))return{path:[{x:e,y:t}],target:{gx:e,gy:t}};let u=new Set(s.filter(M=>M.hp>0&&M.player!==r.player).map(M=>M.y*i.w+M.x)),d=new Map,p=[{x:e,y:t}],f=0;d.set(o,null);let g=[[0,1],[0,-1],[1,0],[-1,0]];function x(M,y){return Ss(i,M,y)?!u.has(a(M,y)):!1}for(;f<p.length;){let{x:M,y}=p[f++],m=a(M,y);if(l.has(m)){let S=[],v={x:M,y};for(;v;)S.unshift(v),v=d.get(a(v.x,v.y));return{path:S,target:{gx:M,gy:y}}}for(let S=0;S<g.length;S++){let v=g[S][0],w=g[S][1],O=M+v,U=y+w,N=a(O,U);d.has(N)||x(O,U)&&(d.set(N,{x:M,y}),p.push({x:O,y:U}))}}return null}var Nf={[Qe.PATH]:2976557,[Qe.GRASS]:2968109,[Qe.TREE]:1719578,[Qe.WATER]:1989278,[Qe.ROCK]:4872778,[Qe.BASE_TOP]:8014410,[Qe.BASE_BOTTOM]:4872826,[Qe.CENTER]:13940810};function Fh(i){return i.w*bt/2}function Bh(i){return i.h*bt/2}function kf(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new ul(e);return r.wrapS=r.wrapT=Oa,r.repeat.set(4,4),r.needsUpdate=!0,r}function Of(i){let e=new Ai,t=Fh(i),n=Bh(i),s=new Wn(bt,Qn,bt),r=kf(64),a=.88,o=.02,l=[];function u(S,v,w,O,U){let N=new Yn({color:3828266,roughness:.9});N.bumpMap=r,N.bumpScale=.12;for(let X=0;X<O;X++){let E=.08+Math.random()*U,A=.03+Math.random()*.03,q=new $e(new $s(A*.5,A,E,6),N);q.position.set(S+(Math.random()-.5)*.5,w+E/2,v+(Math.random()-.5)*.5),q.rotation.x=(Math.random()-.5)*.2,q.rotation.z=(Math.random()-.5)*.2,q.castShadow=!0,e.add(q)}}let d=.12;function p(S,v,w,O,U,N){let X=w+.02,E=[[S-d,X,v-d],[S+d,X,v+d],[S-d,X,v+d],[S+d,X,v-d],[S-d+.06,X,v-d+.06],[S+d-.06,X,v+d-.06],[S-d+.06,X,v+d-.06],[S+d-.06,X,v-d+.06]],A=new Float32Array(E.length*3);E.forEach((B,Z)=>{A[Z*3]=B[0],A[Z*3+1]=B[1],A[Z*3+2]=B[2]});let q=new gi;q.setAttribute("position",new mi(A,3)),q.computeBoundingSphere();let ie=new Ga({color:855309,linewidth:1}),me=new hl(q,ie);me.userData={gx:U,gy:N},O.add(me)}let f=i.w*i.h,g=new Yn({color:16777215,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),x=new cl(s,g,f);x.userData.tileGridGround=!0,x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1;let M=new ri,y=new Mt,m=0;for(let S=0;S<i.h;S++)for(let v=0;v<i.w;v++){let w=i.type[S][v],O=i.height[S][v],U=Nf[w],N=Qn+O*.35,X=(U>>16&255)/255,E=(U>>8&255)/255,A=(U&255)/255,q=X,ie=E,me=A;if(w===Qe.PATH||w===Qe.TREE||w===Qe.ROCK){let V=Math.random()*.45;q=X*(1-V)+.42*V,ie=E*(1-V)+.26*V,me=A*(1-V)+.14*V}(w===Qe.TREE||w===Qe.ROCK)&&(q*=.5,ie*=.5,me*=.5);let B=1+(Math.random()-.5)*.12;y.setRGB(Math.min(1,q*B),Math.min(1,ie*B),Math.min(1,me*B)),x.setColorAt(m,y),M.position.set(v*bt-t+bt/2,N/2,S*bt-n+bt/2),M.updateMatrix(),x.setMatrixAt(m,M.matrix),m++}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),e.add(x);for(let S=0;S<i.h;S++)for(let v=0;v<i.w;v++){let w=i.type[S][v],O=i.height[S][v],N=(Qn+O*.35)/2+Qn/2,X=v*bt-t+bt/2,E=S*bt-n+bt/2;if(w===Qe.TREE&&p(X,E,N,e,v,S),w===Qe.TREE){let A=new Ai;A.userData={gx:v,gy:S},A.position.set(X,N,E);let q=v===0||v===i.w-1||S===0||S===i.h-1,ie=q?.75+Math.random()*.35:.5+Math.random()*.2,me=new Mt(4007959),B=()=>1+(Math.random()-.5)*.4;me.r=Math.min(1,Math.max(0,me.r*B())),me.g=Math.min(1,Math.max(0,me.g*B())),me.b=Math.min(1,Math.max(0,me.b*B()));let Z=.85+Math.random()*.2,te=new Yn({color:me,roughness:Z});te.bumpMap=r,te.bumpScale=.1+Math.random()*.12;let K=new $e(new $s(.12,.14,ie,8),te);K.position.set(0,ie/2,0),K.castShadow=!0,K.raycast=function(){},A.add(K);let V=r.clone();V.repeat.set(3,3);let Q=new Mt(2972205),he=()=>1+(Math.random()-.5)*.44;Q.r=Math.min(1,Math.max(0,Q.r*he())),Q.g=Math.min(1,Math.max(0,Q.g*he())),Q.b=Math.min(1,Math.max(0,Q.b*he()));let fe=.78+Math.random()*.24,Se=new Yn({color:Q,roughness:fe});Se.bumpMap=V,Se.bumpScale=.16+Math.random()*.14;let ne=q?.52:.45,de=q?1.05:.9,Ae=.12,Ue=de*.5,ze=de*.45,mt=de*.4,dt=new $e(new Ri(ne,Ue,8),Se);dt.position.set(0,ie+Ue/2,0),dt.castShadow=!0,dt.raycast=function(){},A.add(dt);let je=new $e(new Ri(ne*.75,ze,8),Se);je.position.set(0,ie+Ue-Ae+ze/2,0),je.castShadow=!0,je.raycast=function(){},A.add(je);let ve=new $e(new Ri(ne*.5,mt,8),Se);ve.position.set(0,ie+Ue-Ae+ze-Ae+mt/2,0),ve.castShadow=!0,ve.raycast=function(){},A.add(ve),e.add(A),l.push(A)}else if(w===Qe.WATER){let A=Nf[Qe.WATER],q=(A>>16&255)/255,ie=(A>>8&255)/255,me=(A&255)/255,B=1+(Math.random()-.5)*.12,Z=new Yn({color:new Mt().setRGB(Math.min(1,q*B),Math.min(1,ie*B),Math.min(1,me*B)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),te=new $e(new ss(bt,bt),Z);te.rotation.x=-Math.PI/2,te.position.set(X,N+.02,E),te.receiveShadow=!0,te.userData={gx:v,gy:S},e.add(te)}else if(w===Qe.ROCK){let A=new Yn({color:6974058,roughness:.9});A.bumpMap=r,A.bumpScale=.2;let q=(Z,te,K)=>{let V=new $e(new yl(Z,0),A);V.position.set(X+te,N+Z-.2,E+K),V.rotation.set(Math.random(),Math.random(),Math.random()),V.castShadow=!0,V.userData={gx:v,gy:S},e.add(V)},ie=.32+Math.random()*.14,me=.2+Math.random()*.12,B=.12+Math.random()*.12;q(ie,(Math.random()-.5)*.15,(Math.random()-.5)*.15),q(me,(Math.random()-.5)*.25,(Math.random()-.5)*.25),q(B,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function Sv(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=Lf(),t=document.getElementById("canvas-wrap"),n=new ol;n.background=new Mt(1711652),n.fog=new al(1711652,30,90);let s=e.w*bt/2,r=e.h*bt/2,a=new pi(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,u=new k(12,38,16).normalize().multiplyScalar(o),d=new k,p=new k,f=new $i(new k(0,1,0),0),g=new k,x=new k,M=!1,y=!1,m=!0,S=!1,v=null,w=5,O=.004,U=-Math.PI*.4,N=Math.PI*.4,X=new k,E={x:0,y:0},A=!1,q=1,ie=40,me=.005,B=.15,Z=1,te=null,K=new bl(16777215,.45);n.add(K);let V=new Ml(16774630,1.1);V.position.set(30,50,20),V.castShadow=!0,V.shadow.mapSize.width=2048,V.shadow.mapSize.height=2048,V.shadow.camera.near=1,V.shadow.camera.far=120,V.shadow.camera.left=-50,V.shadow.camera.right=50,V.shadow.camera.top=50,V.shadow.camera.bottom=-50,n.add(V);let Q=Of(e);n.add(Q);let he=new Map,fe=new Ai;n.add(fe);let Se={30:!1,20:!1,10:!1},ne=["red","yellow","purple","blue","green"],de={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943},Ae=.92;function Ue(h,c,_){let P=(Qn+e.height[_][c]*.35)/2+Qn/2,I=new ss(Ae,Ae),D=new Pn({color:h,transparent:!0,opacity:.45,side:An}),F=new $e(I,D);return F.rotation.x=-Math.PI/2,F.position.set(c*bt-Le+bt/2,P+.01,_*bt-He+bt/2),F}function ze(h){let c=new xl(.22,0),_=new Yn({color:h,metalness:.3,roughness:.4}),b=new $e(c,_);return b.rotation.x=Math.PI/4,b.castShadow=!0,b.receiveShadow=!0,b}function mt(){let h=Math.floor(e.h/2),c=[];for(let _=0;_<e.w;_++){let b=h;if(e.type[b][_]!==Qe.PATH||ee(_,b)!=null)continue;let I=b*e.w+_;he.has(I)||c.push({gx:_,gy:b})}return c}function dt(h){let c=mt();if(c.length===0)return;let _=c[Math.floor(Math.random()*c.length)],b=ne[Math.floor(Math.random()*ne.length)],P=_.gy*e.w+_.gx,I=de[b],D=Pe(_.gx,_.gy);D.y+=.35;let F=ze(I);F.position.copy(D),fe.add(F);let L=Ue(I,_.gx,_.gy);fe.add(L),he.set(P,{type:b,mesh:F,glowMesh:L}),console.log("[POWERUP]",`turnsLeft: ${h}, type: ${b}, gx: ${_.gx}, gy: ${_.gy}`)}function je(h){let c=h.y*e.w+h.x,_=he.get(c);if(!_)return;let b=_.mesh;if(fe.remove(b),b.geometry.dispose(),b.material){let P=b.material;P.dispose&&P.dispose()}_.glowMesh&&(fe.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose()),he.delete(c),_.type==="green"?(h.hp=Math.min(h.maxHp,h.hp+6),oi(h.x,h.y,"+6 HP",!1,"buff")):(_.type==="red"?h.tempBuff={str:4,duration:3}:_.type==="yellow"?h.tempBuff={agi:4,duration:3}:_.type==="purple"?h.tempBuff={int:4,duration:3}:_.type==="blue"&&(h.tempBuff={dex:4,duration:3}),oi(h.x,h.y,`+4 ${_.type==="red"?"STR":_.type==="yellow"?"AGI":_.type==="purple"?"INT":"DEX"}`,!1,"buff")),ht(h,()=>Ht(h))}let ve=[],j=0,Fn=new Map;function ot(){Fn.clear()}function yt(h){Fn.set(h.id,h)}function Ze(h){Fn.delete(h)}function Je(h){return Fn.get(h)}let xt=new Map;function C(){xt.clear()}function T(h,c,_){if(c!=null&&_!=null){let b=_*e.w+c;xt.get(b)===h&&xt.delete(b)}h.hp>0&&xt.set(h.y*e.w+h.x,h)}function ee(h,c){let _=c*e.w+h,b=xt.get(_);return!b||b.hp<=0||b.x!==h||b.y!==c?null:b}let Ee=1,ye=0,re=new Map,Ge=kf(64),Le=Fh(e),He=Bh(e);function Pe(h,c){let b=(Qn+e.height[c][h]*.35)/2+Qn/2;return new k(h*bt-Le+bt/2,b,c*bt-He+bt/2)}function St(h,c){h==="short"&&(Dh=27,Uh=15,Nh=.35,vs=100),n.remove(Q),Q.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(P=>P.dispose())}),re.forEach(_=>{n.remove(_),_.traverse(b=>{b.geometry&&b.geometry.dispose(),b.material&&(Array.isArray(b.material)?b.material:[b.material]).forEach(I=>I.dispose())})}),re.clear(),ve.length=0,ot(),C(),Ee=1,ye=0,j=0,he.forEach(_=>{fe.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(fe.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),he.clear(),Se={30:!1,20:!1,10:!1},e=Lf(typeof c<"u"?c:void 0),Le=Fh(e),He=Bh(e),Q=Of(e),n.add(Q)}function be(){re.forEach(h=>{n.remove(h),h.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&(Array.isArray(c.material)?c.material:[c.material]).forEach(b=>b.dispose())})}),re.clear(),ve.length=0,ot(),C(),Ee=1,ye=0,j=0}function Ut(h,c){let _=(h>>16&255)/255,b=(h>>8&255)/255,P=(h&255)/255,I=1+(Math.random()-.5)*c;return new Mt(Math.min(1,_*I),Math.min(1,b*I),Math.min(1,P*I))}let Pt=.62;function lt(h,c){c=c??Pt;let _=h instanceof Mt?h:new Mt(h);return new Mt(Math.max(0,_.r*c),Math.max(0,_.g*c),Math.max(0,_.b*c))}function st(h,c,_){let b=Zs[c]||Zs.knight,P=lt(Ut(b.primary,.08)),I=lt(Ut(b.secondary,.08)),D=zn[c]&&zn[c].gender||"male",F=_??4006676,L=lt(Ut(b.skin!=null?b.skin:15250592,.06)),oe=lt(Ut(F,.08)),J=()=>(Math.random()-.5)*.08,se=()=>(Math.random()-.5)*.04,z=new Yn({color:P,metalness:Math.max(0,.25+se()),roughness:Math.max(.3,Math.min(1,.5+J()))});z.bumpMap=Ge,z.bumpScale=.1;let le=new Yn({color:I,metalness:Math.max(0,.2+se()),roughness:Math.max(.3,Math.min(1,.55+J()))});le.bumpMap=Ge,le.bumpScale=.1;let we=new Yn({color:P,metalness:Math.max(0,.25+se()),roughness:Math.max(.3,Math.min(1,.5+J()))});we.bumpMap=Ge,we.bumpScale=.1;let Te=new Yn({color:L,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+J()))});Te.bumpMap=Ge,Te.bumpScale=.05;let Xe=new Ai,ke=.28,Ce=.08,Ye=.08,tt=new $e(new Wn(Ce,ke,Ye),le);tt.position.set(-.06,ke/2,0),tt.castShadow=!0,Xe.add(tt);let Bt=new $e(new Wn(Ce,ke,Ye),le);Bt.position.set(.06,ke/2,0),Bt.castShadow=!0,Xe.add(Bt);let It=.28,At=.2,Yt=.12,Vt=new $e(new Wn(At,It,Yt),z);Vt.position.set(0,ke+It/2,0),Vt.castShadow=!0,Xe.add(Vt);let Ln=.06,cn=.22,pt=.06,kt=new $e(new Wn(Ln,cn,pt),we);kt.position.set(-(At/2+Ln/2),ke+It-.08,0),kt.castShadow=!0,Xe.add(kt);let $t=new $e(new Wn(Ln,cn,pt),we);if($t.position.set(At/2+Ln/2,ke+It-.08,0),$t.castShadow=!0,Xe.add($t),b.cape!=null){let nt=At*1.95,ut=nt*.6,un=ke+It*.28,Qt=new na;Qt.moveTo(-ut/2,un/2),Qt.lineTo(ut/2,un/2),Qt.lineTo(nt/2,-un/2),Qt.lineTo(-nt/2,-un/2),Qt.closePath();let vn=new $a(Qt),dn=new Yn({color:lt(Ut(b.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+J())),side:An});dn.bumpMap=Ge,dn.bumpScale=.12;let ae=new $e(vn,dn);ae.position.set(0,ke+It-un/2+.05,-Yt/2-.02),ae.rotation.y=Math.PI,ae.castShadow=!0,Xe.add(ae);let xe=.055,pe=ke+It+.02,ue=.02,ge=At/2+Ln*.5,Re=new $e(new rs(xe,10,8,0,Math.PI*2,0,Math.PI*.55),dn.clone());Re.position.set(-ge,pe,ue),Re.rotation.x=-Math.PI*.35,Re.rotation.z=Math.PI*.5,Re.scale.set(1.2,.85,1.1),Re.castShadow=!0,Xe.add(Re);let ce=new $e(new rs(xe,10,8,0,Math.PI*2,0,Math.PI*.55),dn.clone());ce.position.set(ge,pe,ue),ce.rotation.x=-Math.PI*.35,ce.rotation.z=-Math.PI*.5,ce.scale.set(1.2,.85,1.1),ce.castShadow=!0,Xe.add(ce)}if(b.belt!=null){let nt=new Yn({color:lt(Ut(b.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+J()))});nt.bumpMap=Ge,nt.bumpScale=.1;let ut=.022,un=.04,Qt=new $e(new Wn(At+.04,ut,Yt+un),nt);Qt.position.set(0,ke+.04,0),Qt.castShadow=!0,Xe.add(Qt)}if(b.apron!=null){let nt=new Yn({color:lt(Ut(b.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+J())),side:An});nt.bumpMap=Ge,nt.bumpScale=.12;let ut=At*.95,un=ke*.85,Qt=new $e(new ss(ut,un),nt),vn=ke+.2;Qt.position.set(0,vn-un/2,Yt/2+.02),Qt.castShadow=!0,Xe.add(Qt);let dn=ke+It+.02,ae=At/2+Ln*.2,xe=.018,pe=.008,ue=dn-vn,ge=new $e(new Wn(xe,ue,pe),nt.clone());ge.position.set(-ae,(vn+dn)/2,Yt/2+.015),ge.castShadow=!0,Xe.add(ge);let Re=new $e(new Wn(xe,ue,pe),nt.clone());Re.position.set(ae,(vn+dn)/2,Yt/2+.015),Re.castShadow=!0,Xe.add(Re)}let Be=.1,wt=new $e(new rs(Be,12,10),Te);wt.position.set(0,ke+It+Be,0),wt.castShadow=!0,Xe.add(wt);let jt=new Pn({color:1710638}),Tn=new $e(new Wn(.032,.004,.004),jt);Tn.position.set(-.032,.028,Be*.92),wt.add(Tn);let hn=new $e(new Wn(.032,.004,.004),jt);hn.position.set(.032,.028,Be*.92),wt.add(hn);let Kn=new Pn({color:2957087}),an=new $e(new Wn(.045,.012,.008),Kn);an.position.set(0,-.028,Be*.92),wt.add(an);let wn=new Yn({color:oe,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+J()))});wn.bumpMap=Ge,wn.bumpScale=.15;let Ei=nt=>{let ut=Be*.32,un=Be*.22,Qt=new $e(new Ri(un*.9,ut,5),wn);Qt.position.set(-Be*.25,Be*.22,Be*.72),Qt.rotation.x=.35,Qt.rotation.z=.12,Qt.castShadow=!0,nt.add(Qt);let vn=new $e(new Ri(un,ut,5),wn);vn.position.set(Be*.28,Be*.18,Be*.68),vn.rotation.x=.28,vn.rotation.z=-.1,vn.castShadow=!0,nt.add(vn);let dn=new $e(new Ri(un*.7,ut*.9,5),wn);dn.position.set(0,Be*.28,Be*.78),dn.rotation.x=.4,dn.castShadow=!0,nt.add(dn)};if(D==="female"){let nt=new $e(new rs(Be*.92,12,10,0,Math.PI*2,0,Math.PI*.52),wn);nt.position.set(0,Be*.28,-Be*.18),nt.rotation.y=.06,nt.rotation.x=-.04,nt.castShadow=!0,wt.add(nt);let ut=new $e(new Wn(Be*1.15,Be*2.2,Be*.55),wn);ut.position.set(0,-Be*.6,-Be*.95),ut.rotation.z=.03,ut.castShadow=!0,wt.add(ut),Ei(wt)}else{let nt=new $e(new rs(Be*.9,12,10,0,Math.PI*2,0,Math.PI*.5),wn);nt.position.set(0,Be*.4,-Be*.12),nt.rotation.y=.08,nt.rotation.x=-.05,nt.rotation.z=.04,nt.castShadow=!0,wt.add(nt);let ut=new $e(new rs(Be*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),wn);ut.position.set(0,Be*.1,-Be*.05),ut.rotation.y=.1,ut.castShadow=!0,wt.add(ut),Ei(wt)}if(b.horns!=null){let nt=new Yn({color:lt(Ut(b.horns,.08)),metalness:Math.max(0,.12+se()),roughness:Math.max(.4,Math.min(1,.62+J()))});nt.bumpMap=Ge,nt.bumpScale=.1;let ut=Be*1.12,un=Be*.22,Qt=new _l(ut,un,8,28),vn=new $e(Qt,nt);vn.rotation.x=Math.PI/2,vn.position.y=Be*.42,vn.castShadow=!0,wt.add(vn);let dn=Be*.48,ae=Be*2.55,xe=new $e(new Ri(dn,ae,8),nt.clone());xe.position.set(-Be*1.02,Be*.18,Be*.02),xe.rotation.set(-.42,-.32,.58),xe.castShadow=!0,wt.add(xe);let pe=new $e(new Ri(dn,ae,8),nt.clone());pe.position.set(Be*1.02,Be*.18,Be*.02),pe.rotation.set(-.42,.32,-.58),pe.castShadow=!0,wt.add(pe)}return Xe.userData.leftLeg=tt,Xe.userData.rightLeg=Bt,Xe.userData.leftArm=kt,Xe.userData.rightArm=$t,Xe}function qe(h,c){let _=h.userData;if(!_.leftLeg)return;let b=c*Math.PI*2,P=.35,I=.28;_.leftLeg.rotation.x=Math.sin(b)*P,_.rightLeg.rotation.x=Math.sin(b+Math.PI)*P,_.leftArm.rotation.y=Math.sin(b+Math.PI)*I,_.rightArm.rotation.y=Math.sin(b)*I}function Tt(h){let c=h.userData;c.leftLeg&&(c.leftLeg.rotation.x=0,c.rightLeg.rotation.x=0,c.leftArm.rotation.y=0,c.rightArm.rotation.y=0)}function Xt(h){let c=st(h.player,h.class,h.hairColor);c.position.copy(Pe(h.x,h.y)),c.castShadow=!0,c.userData.unitId=h.id;let _=.28,b=.28,P=.12,I=.18,D=.04,F=new ss(I,D),L=new Pn({color:6037528,side:An,depthTest:!0,depthWrite:!1}),oe=new $e(F,L);oe.position.set(0,_+b/2,P/2+.02),oe.rotation.x=-Math.PI/2,oe.rotation.z=Math.PI/4,oe.visible=h.maxHp>0&&h.hp<h.maxHp&&h.hp>0,c.add(oe),c.userData.slashMark=oe,n.add(c),re.set(h.id,c),H(c,h.maxHp>0&&h.hp/h.maxHp<.35)}function Ht(h){let c=re.get(h.id);!c||!c.userData.slashMark||(c.userData.slashMark.visible=h.maxHp>0&&h.hp<h.maxHp&&h.hp>0)}function Rt(h){h.traverse(_=>{if(!_.isMesh||!_.material)return;let b=_.material;if(b.color){let P=b.color.r,I=b.color.g,D=b.color.b,F=.2126*P+.7152*I+.0722*D,L=Math.max(0,Math.min(1,F*.55));b.color.setRGB(L,L,L)}})}let Ie=.35;function H(h,c){if(h)if(c){h.rotation.x=.35,h.scale.setScalar(.96);let _=h.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=.2,_.rightArm.rotation.y=.2),h.traverse(b=>{b.isMesh&&b.material&&b.material.color&&(b.userData.originalColor||(b.userData.originalColor=b.material.color.clone()),b.material.color.copy(b.userData.originalColor).multiplyScalar(.82))})}else{h.rotation.x=0,h.scale.setScalar(1);let _=h.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=0,_.rightArm.rotation.y=0),h.traverse(b=>{b.isMesh&&b.material&&b.userData.originalColor&&b.material.color.copy(b.userData.originalColor)})}}function Oe(h){if(h.level>=3)return;let c=h.maxHp>0?h.hp/h.maxHp:1;h.level+=1;let _=P=>Math.max(1,Math.ceil(P*1.1)),b=P=>Math.max(1,Math.ceil(P*1.1));h.maxHp=_(h.maxHp),h.maxMp=_(h.maxMp),h.hp=Math.max(1,Math.min(h.maxHp,Math.ceil(c*h.maxHp))),h.mp=Math.max(1,Math.min(h.maxMp,Math.ceil(c*h.maxMp))),h.str=b(h.str),h.agi=b(h.agi),h.vit=b(h.vit),h.dex=b(h.dex),h.luk=b(h.luk),h.int=b(h.int),h.range>2&&(h.range=b(h.range)),console.log("[LEVEL UP]",`${h.name} (${h.class}, P${h.player})`,`\u2192 Lv.${h.level}`,`| HP ${h.hp}/${h.maxHp} MP ${h.mp}/${h.maxMp} STR ${h.str} VIT ${h.vit}`),Fe(h)}function Fe(h){let c=re.get(h.id),_=h.level===3?"levelup level3":h.level===2?"levelup level2":"levelup";if(Cp(h,_),!c)return;let b=performance.now(),P=0;function I(D){P++,P%2===0&&zt();let F=D-b,L=Math.min(1,F/Mi),oe=L<.5?1+.35*(L/.5):1+.35*(1-(L-.5)/.5);c.scale.setScalar(oe),L<1?requestAnimationFrame(I):c.scale.setScalar(1)}requestAnimationFrame(I)}function ht(h,c){let _=re.get(h.id);if(!_){c&&c();return}let b=performance.now(),P=0;function I(D){P++,P%2===0&&zt();let F=D-b,L=Math.min(1,F/Mi),oe=L<.5?1+.35*(L/.5):1+.35*(1-(L-.5)/.5);_.scale.setScalar(oe),L<1?requestAnimationFrame(I):(_.scale.setScalar(1),c&&c())}requestAnimationFrame(I)}let ct=400,Kt=280,Zt=.45,Sn=160,$n=280,en=350,ei=500,Mi=600,gr=400,ja=280,Es=.2,Qa=.18,Ts=!1,la=new k,ca=new k,yr=new k,ha=new k;function eo(h=!1){m=!0;let c=null;if($==="playing"&&it.length>0){let D=it[at],F=Je(D);c=F&&F.hp>0?F:null}if(c||(c=ve.find(D=>D.player===G&&D.hp>0)),!c)return;let _=a.position.distanceTo(d);if(_<.1&&(_=o),p.copy(a.position).sub(d).normalize(),p.lengthSq()<.01&&p.copy(u).normalize(),yr.copy(Pe(c.x,c.y)),ha.copy(yr).add(p.clone().multiplyScalar(_)),h||Ts){d.copy(yr),a.position.copy(ha),a.lookAt(d),zt();return}Ts=!0,la.copy(d),ca.copy(a.position);let b=performance.now(),P=0;ii.shadowMap.enabled=!1;function I(D){P++,P%2===0&&zt();let F=Math.min(1,(D-b)/ct),L=F*(2-F);d.lerpVectors(la,yr,L),a.position.lerpVectors(ca,ha,L),a.lookAt(d),F<1?requestAnimationFrame(I):(ii.shadowMap.enabled=!0,Ts=!1)}requestAnimationFrame(I)}let R=0,G=1,$="draft",W="pvp",Y=1,Ne={1:"",2:""},We=null,et=null,rt=null,gt="long";function Ke(h){return W==="online"&&Ne[h]?Ne[h]:"Player "+h}let _t=1,on=0,Dn=null;async function Un(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{Dn=await navigator.wakeLock.request("screen"),Dn.addEventListener("release",()=>{Dn=null})}catch{Dn=null}}function Vi(){Dn&&(Dn.release().catch(()=>{}),Dn=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&W==="cvcpu"&&$==="playing"&&Un()});let nn="balanced",ft=new Set(vi),xr=[...vi],sn=0,Pi={1:0,2:0},ti=null,Ii=null,Vn=null,En=new Set,bi=[],it=[],at=0,mn=null,In=new Map,ua=null;function Hf(h){if(!h||h.hp<=0)return;ua=h.id;let c=document.getElementById("unit-preview-card"),_=document.getElementById("unit-preview-image"),b=document.getElementById("unit-preview-name"),P=document.getElementById("unit-preview-meta"),I=document.getElementById("unit-preview-stats");c.classList.remove("player-1","player-2"),c.classList.add(h.player===1?"player-1":"player-2"),c.classList.toggle("level-2",h.level>=2&&h.level<3),c.classList.toggle("level-3",h.level>=3),_.src=aa[h.class]||"",_.alt=h.name,b.textContent=h.name,P.textContent=`Lv.${h.level} ${h.class} \u2014 ${Ke(h.player)}`;let D=[["HP",`${h.hp}/${h.maxHp}`,"stat-val-hp"],["MP",`${h.mp}/${h.maxMp}`,""],["STR",zi(h,"str"),""],["AGI",zi(h,"agi"),""],["VIT",zi(h,"vit"),""],["DEX",zi(h,"dex"),""],["LUK",zi(h,"luk"),""],["INT",zi(h,"int"),""]];h.tempDebuff&&h.tempDebuff.poison!=null&&D.push(["Poison",`${h.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),h.tempBuff&&h.tempBuff.heal!=null&&D.push(["Regen",`${h.tempBuff.heal} HP/turn`,"stat-val-buff"]),I.innerHTML=D.map(([L,oe,J])=>{let se=J?` ${J}`:"";return`<span class="stat-label">${L}</span><span class="stat-val${se}">${oe}</span>`}).join("");let F=h.maxHp>0&&h.hp/h.maxHp<.3;c.classList.toggle("low-hp",F),c.style.display="block"}function da(){ua=null;let h=document.getElementById("unit-preview-card");h.classList.remove("low-hp","level-2","level-3"),h.style.display="none"}let ln=!1,ji=!1,ws=!1,ni=null,gn=!1,ai=!1,As=!1,Li=[],Di=new Ai;n.add(Di);let Gi=[],fa=!0,Rs=0,kh=0;function zt(){fa=!0,Rs=performance.now()}let pa=new Ai;n.add(pa);let Cl=[],zf=bt,Vf=.02,Gf=3368703,Wf=13382451;function Xf(h,c){let _=h/2,b=_-c,P=new na;P.moveTo(-_,-_),P.lineTo(_,-_),P.lineTo(_,_),P.lineTo(-_,_),P.lineTo(-_,-_);let I=new ta;return I.moveTo(-b,-b),I.lineTo(b,-b),I.lineTo(b,b),I.lineTo(-b,b),I.lineTo(-b,-b),P.holes.push(I),new $a(P)}let qf=Xf(zf,Vf);function Ui(h=null){let c=ve.filter(_=>_.hp>0&&_.id!==h).map(_=>`${_.id},${_.x},${_.y},${_.player}`).sort().join("|");if(!(Ui._lastSig===c&&Ui._lastExclude===h)){for(Ui._lastSig=c,Ui._lastExclude=h,Cl.forEach(_=>_.dispose()),Cl.length=0;pa.children.length;){let _=pa.children[0];pa.remove(_)}ve.filter(_=>_.hp>0&&_.id!==h).forEach(_=>{let b=_.x,P=_.y,D=(Qn+e.height[P][b]*.35)/2+Qn/2,F=b*bt-Le+bt/2,L=P*bt-He+bt/2,oe=D+.02,J=_.player===1?Gf:Wf,se=new Pn({color:J,side:An}),z=new $e(qf,se);z.rotation.x=-Math.PI/2,z.position.set(F,oe,L),pa.add(z),Cl.push(se)}),zt()}}let Yf=1.15,Pl={1:8102901,2:15628943},Si=(()=>{let h=new Pn({color:Pl[1]}),c=new $e(new Ri(.1,.25,8),h);return c.rotation.x=Math.PI,c.visible=!1,n.add(c),c})();function Il(){if($!=="playing"||it.length===0||As){Si.visible=!1,Si.removeFromParent(),n.add(Si);return}let h=it[at],c=Je(h);if(!c||c.hp<=0){Si.visible=!1,Si.removeFromParent(),n.add(Si);return}let _=re.get(h);if(!_){Si.visible=!1;return}Si.removeFromParent(),_.add(Si),Si.position.set(0,Yf,0),Si.material&&Si.material.color.setHex(Pl[c.player]??Pl[1]),Si.visible=!0}function Ev(h){let c=[[0,1],[0,-1],[1,0],[-1,0]],_=[];for(let[b,P]of c){let I=h.x+b,D=h.y+P;!Ss(e,I,D)||ve.some(L=>L.id!==h.id&&L.x===I&&L.y===D&&L.hp>0)||_.push(Math.atan2(b,P))}return _}function Hh(h){if(Li.length===0)return h;if(Li.length===1)return Li[0];let c=Li[0],_=Math.abs(zh(h-c));for(let b=1;b<Li.length;b++){let P=Math.abs(zh(h-Li[b]));P<_&&(_=P,c=Li[b])}return c}function zh(h){for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;return h}let $f=1.2,Qi=(()=>{let h=new $e(new Ri(.12,.35,8),new Pn({color:4500223}));return h.rotation.x=-Math.PI/2,h.visible=!1,n.add(h),h})();function Kf(h,c){if(!As||it.length===0||Li.length===0)return;let _=it[at],b=Je(_),P=re.get(_);if(!b||!P)return;ho(h,c),Ps.setFromCamera(Is,a);let I=Ps.intersectObjects(Q.children,!0);if(I.length===0)return;let D=null;for(let se of I)if(fu(se)){D=se.point;break}if(!D)return;let F=Pe(b.x,b.y),L=D.x-F.x,oe=D.z-F.z;if(L*L+oe*oe<1e-6)return;let J=Math.atan2(L,oe);P.rotation.y=Hh(J)}function Zf(){if(it.length===0)return;let h=it[at],c=Je(h),_=re.get(h);if(!c||!_)return;Li=[[0,1],[0,-1],[1,0],[-1,0]].map(([P,I])=>Math.atan2(P,I)),Qi.removeFromParent(),_.add(Qi),Qi.position.set(0,$f,0),Qi.rotation.x=-Math.PI/2,Qi.rotation.y=0,Qi.rotation.z=Math.PI,Qi.visible=!0,_.rotation.y=Li[0]}function Jf(){Qi.visible=!1,Qi.removeFromParent(),n.add(Qi)}let Ll=[];(function(){let c=Ci,_=[1];for(let b=0;b<Math.floor((c-1)/2);b++)_.push(2,2,1,1);c%2===1?_.push(2):(_.push(2,2),_.push(1)),Ll=_})();function Wi(){return Ll[sn]}function Vh(){let h=Wi();return Pi[h]+1}function ma(){ye=0,j=0,he.forEach(_=>{fe.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(fe.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),he.clear(),Se={30:!1,20:!1,10:!1};let h=Ci,c=[1];for(let _=0;_<Math.floor((h-1)/2);_++)c.push(2,2,1,1);h%2===1?c.push(2):(c.push(2,2),c.push(1)),Ll=c,$="draft",sn=0,Pi[1]=0,Pi[2]=0,ft=new Set(vi),xr=dv([...vi]),ti=null,Ii=null,Vn=null,En.clear(),bi=[],Nn(),Ul(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function Dl(){return ve.filter(h=>h.hp>0).sort((h,c)=>{let _=Me(h,"agi"),b=Me(c,"agi");if(b!==_)return b-_;let P=Me(h,"dex");return Me(c,"dex")-P}).map(h=>h.id)}function jf(h){let c=new Set(ve.filter(J=>J.hp>0).map(J=>J.y*e.w+J.x)),_=(J,se)=>c.has(se*e.w+J),b=(J,se)=>J>=0&&J<e.w&&se>=0&&se<e.h,P=(J,se)=>b(J,se)&&Ss(e,J,se)&&!_(J,se),I=re.get(h.id),D=I!=null?I.rotation.y:h.player===1?Math.PI:0,F=h.x-Math.round(Math.cos(D)),L=h.y+Math.round(Math.sin(D));if(P(F,L))return{gx:F,gy:L};let oe=[[0,1],[0,-1],[1,0],[-1,0]];for(let[J,se]of oe){let z=h.x+J,le=h.y+se;if(P(z,le))return{gx:z,gy:le}}return null}function Qf(h,c,_,b){let P=b?.position&&b.position.gx!=null&&b.position.gy!=null?{gx:b.position.gx,gy:b.position.gy}:jf(h);if(!P)return null;let I=c.class&&vi.includes(c.class)?c.class:"knight",D=c.hairColor!=null?c.hairColor:(Zs[I]||Zs.knight).hair,F={id:Ee++,player:h.player,x:P.gx,y:P.gy,level:c.level!=null?c.level:1,name:c.name!=null?c.name:"Summoned",class:I,hairColor:D,hp:c.hp!=null?c.hp:10,maxHp:c.maxHp!=null?c.maxHp:10,mp:c.mp!=null?c.mp:5,maxMp:c.maxMp!=null?c.maxMp:5,str:c.str!=null?c.str:5,agi:c.agi!=null?c.agi:5,vit:c.vit!=null?c.vit:5,dex:c.dex!=null?c.dex:5,luk:c.luk!=null?c.luk:5,int:c.int!=null?c.int:5,range:c.range!=null?c.range:1,summonedBy:h.id};_!=null&&Array.isArray(_)&&_.length>0&&(F.summonedSkills=_),ve.push(F),yt(F),T(F,null,null),Xt(F);let L=re.get(F.id);if(L&&b?.useGrayscaleAppearance&&Rt(L),L){let we=function(Te){le++,le%2===0&&zt();let Xe=Te-z;if(Xe<gr){let Ce=Xe/gr,Ye=1-(1-Ce)*(1-Ce),tt=Es+(1-Es)*Ye;L.scale.setScalar(tt),requestAnimationFrame(we);return}let ke=Xe-gr;if(ke<ja){let Ce=ke/ja,Ye=Math.sin(Ce*Math.PI);L.position.y=se.y+Qa*Ye,requestAnimationFrame(we);return}L.scale.setScalar(1),L.position.y=se.y,zt()},J=re.get(h.id);L.rotation.y=J!=null?J.rotation.y:h.player===1?Math.PI:0,L.scale.setScalar(Es);let se=Pe(F.x,F.y),z=performance.now(),le=0;requestAnimationFrame(we)}let oe=$==="playing"&&it.length>0&&at>=0&&at<it.length?it[at]:null;if(it=Dl(),oe!=null){let J=it.indexOf(oe);J>=0&&(at=J)}return Ui(),typeof Nt=="function"&&Nt(),zt(),F}function ga(h,c){let _=ve.indexOf(c);if(_===-1)return null;Ze(c.id),ve.splice(_,1),j=Math.max(0,j-1);let b=re.get(c.id);b&&(n.remove(b),re.delete(c.id));let P=c.class&&vi.includes(c.class)?c.class:"knight",I=c.hairColor!=null?c.hairColor:(Zs[P]||Zs.knight).hair,D=Xe=>Math.max(1,Math.floor((Xe||0)*6/7)),F=D(c.maxHp),L=D(c.maxMp),oe={name:"Reanimated "+c.name,class:P,hairColor:I,level:c.level,hp:D(c.maxHp),maxHp:F,mp:D(c.maxMp),maxMp:L,str:D(c.str),agi:D(c.agi),vit:D(c.vit),dex:D(c.dex),luk:D(c.luk),int:D(c.int),range:c.range},J=c.summonedSkills&&c.summonedSkills.length>0?c.summonedSkills.slice():(oa[P]||[]).slice(),se=new Set(ve.filter(Xe=>Xe.hp>0).map(Xe=>Xe.y*e.w+Xe.x)),z=c.x,le=c.y,we=Ss(e,z,le)&&!se.has(le*e.w+z),Te={useGrayscaleAppearance:!0};return we&&(Te.position={gx:z,gy:le}),Qf(h,oe,J,Te)}function ep(){document.getElementById("draft-panel").style.display="none";let h=document.getElementById("draft-placement-card");h&&(h.style.display="none",h.innerHTML=""),Nn();let c=document.getElementById("battle-start-overlay");c&&(c.classList.add("visible"),c.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");for(_&&(_.style.display="none",_.innerHTML=""),$="playing",R=0,it=Dl(),at=0;at<it.length;){let I=Je(it[at]);if(I&&I.hp>0)break;at++}at>=it.length&&(at=0);let b=Je(it[at]);G=b?b.player:1,gn=!1,ai=!1,mn=it[at],setTimeout(()=>{c&&(c.classList.remove("visible"),c.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",Ui(),Nt(),Il(),eo(!0),W==="cvcpu"&&Un()},4e3)}function Ul(){let h=document.getElementById("draft-panel"),c=document.getElementById("draft-title"),_=document.getElementById("draft-classes"),b=document.getElementById("draft-message"),P=document.getElementById("turn-player"),I=document.getElementById("draft-placement-card");if(ti){h.style.display="none",P.textContent=`Draft: ${Ke(Wi())} \u2014 place ${zn[ti].name}`;let oe=Wi();I.style.display="flex",I.classList.remove("player-1","player-2"),I.classList.add("player-"+oe),I.style.left=oe===1?"24px":"",I.style.right=oe===2?"24px":"";let J=[...ve.filter(le=>le.player===oe).map(le=>le.class),ti],se=(le,we)=>{let Te=zn[le];return`
        <div class="draft-class-card${we?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${aa[le]||""}" alt="${Te.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${Te.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${Te.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${Te.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${Te.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${Te.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${Te.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${Te.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${Te.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${Te.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${Te.range}</span>
            </div>
          </div>
        </div>
      `},z=3;if(J.length>z){I.classList.add("draft-placement-cols");let le=[];for(let Te=0;Te<J.length;Te+=z)le.push(J.slice(Te,Te+z));let we=J.length-1;I.innerHTML=le.map((Te,Xe)=>{let ke=Xe===le.length-1,Ce=Te.map((Ye,tt)=>{let It=Xe*z+tt===we;return se(Ye,It)}).join("");return`<div class="draft-placement-col${ke?" draft-placement-col-current":""}">${Ce}</div>`}).join("")}else I.classList.remove("draft-placement-cols"),I.innerHTML=J.map((le,we)=>{let Te=we===J.length-1;return se(le,Te)}).join("");W==="pvcpu"&&Wi()===2&&setTimeout(va,500),W==="cvcpu"&&setTimeout(va,500);return}I.style.display="none",I.innerHTML="",$==="draft"&&(h.style.display="flex");let D=document.getElementById("draft-detail");D&&(D.style.display="");let F=Wi();if(W!=="online"||F===Y){let Xe=function(){let ke=Ii;if(!ke||!zn[ke]){oe&&(oe.style.display=""),J&&(J.style.display="none"),se&&(se.style.display="none"),Te&&(Te.style.display="none");return}let Ce=zn[ke],Ye=oa[ke]||[];oe&&(oe.style.display="none"),J&&(J.src=aa[ke]||"",J.alt=Ce.name,J.style.display="block"),se&&(se.style.display="block"),z&&(z.textContent=Ce.name),le&&(le.innerHTML=[["HP",Ce.hp],["MP",Ce.mp],["STR",Ce.str],["AGI",Ce.agi],["VIT",Ce.vit],["DEX",Ce.dex],["LUK",Ce.luk],["INT",Ce.int],["Range",Ce.range]].map(([Bt,It])=>`<span class="draft-stat-label">${Bt}</span><span class="draft-stat-value">${It}</span>`).join("")),we&&(we.innerHTML=Ye.length?Ye.map(Bt=>`<div class="draft-detail-skill"><span class="draft-detail-skill-name">${Bt.name}</span><span class="draft-detail-skill-desc">${Bt.description||""}</span></div>`).join(""):'<div class="draft-detail-skill">No skills</div>'),Te&&(Te.style.display="block",Te.disabled=!ft.has(ke),Te.onclick=()=>{let Bt=Ii;Bt&&ft.has(Bt)&&Nl(Bt)});let tt=ke?_.querySelector(`button.draft-class-card[data-class-key="${ke}"]`):null;Vn!==tt&&(Vn&&Vn.classList.remove("draft-class-card-selected"),Vn=tt,Vn&&Vn.classList.add("draft-class-card-selected"))};c.textContent=`${Ke(F)}: Pick a class (${Vh()}/${Ci})`,b.textContent="",Vn=null,_.innerHTML="",P.textContent=`Draft: ${Ke(F)} \u2014 pick a class`;let oe=document.getElementById("draft-detail-placeholder"),J=document.getElementById("draft-detail-image"),se=document.getElementById("draft-detail-content"),z=document.getElementById("draft-detail-name"),le=document.getElementById("draft-detail-stats"),we=document.getElementById("draft-detail-skills"),Te=document.getElementById("draft-select-btn");xr.forEach(ke=>{let Ce=ft.has(ke),Ye=zn[ke],tt=document.createElement("button");tt.type="button",tt.dataset.classKey=ke,tt.className="draft-class-card"+(Ce?"":" draft-class-card-unavailable")+(Ii===ke?" draft-class-card-selected":""),tt.disabled=!Ce,tt.innerHTML=`
          <img class="draft-class-card-image" src="${aa[ke]||""}" alt="${Ye.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${Ye.name}</div>
          </div>
        `,Ce&&tt.addEventListener("click",()=>{Ii=ke,Vn&&Vn!==tt&&Vn.classList.remove("draft-class-card-selected"),Vn=tt,tt.classList.add("draft-class-card-selected"),Xe()}),Ii===ke&&(Vn=tt),_.appendChild(tt)}),Xe()}else{c.textContent=`${Ke(F)} is picking a class`,b.textContent="",Vn=null,_.innerHTML="",P.textContent=`Draft: ${Ke(F)} \u2014 pick a class`;let oe=document.getElementById("draft-detail-placeholder"),J=document.getElementById("draft-detail-image"),se=document.getElementById("draft-detail-content"),z=document.getElementById("draft-select-btn");oe&&(oe.style.display=""),J&&(J.style.display="none"),se&&(se.style.display="none"),z&&(z.style.display="none")}W==="pvcpu"&&Wi()===2&&setTimeout(va,500),W==="cvcpu"&&setTimeout(va,500)}function Nl(h){if(!ft.has(h)||ti)return;ti=h;let c=Wi(),_=new Set(ve.map(I=>I.y*e.w+I.x)),b=xv(e,c,_),P=Df(e,b);bi=P,En=new Set(P.map(I=>I.gy*e.w+I.gx)),vp(P),Ul(),W==="online"&&c===Y&&typeof rn=="function"&&rn({type:"draftPick",classKey:h})}function Ol(h,c){if(!ti)return;let _=Wi(),b=c*e.w+h;if(!En.has(b))return;let P=zn[ti],I={id:Ee++,player:_,x:h,y:c,level:1,name:P.name,class:ti,hairColor:(Zs[ti]||Zs.knight).hair,hp:P.hp,maxHp:P.maxHp,mp:P.mp,maxMp:P.maxMp,str:P.str,agi:P.agi,vit:P.vit,dex:P.dex,luk:P.luk,int:P.int,range:P.range};ve.push(I),yt(I),T(I,null,null),Xt(I);let D=re.get(I.id);D&&(D.rotation.y=I.player===1?Math.PI:0),ft.delete(ti),ti=null,En.clear(),bi=[],Nn(),W==="online"&&_===Y&&typeof rn=="function"&&rn({type:"draftPlace",gx:h,gy:c});let F=document.getElementById("draft-placement-card");if(F&&(F.style.display="none",F.innerHTML=""),Pi[_]++,sn++,sn>=2*Ci){ep();return}let L=Wi(),oe=Vh(),J=document.getElementById("draft-panel"),se=document.getElementById("draft-title"),z=document.getElementById("draft-message"),le=document.getElementById("draft-detail"),we=document.getElementById("draft-classes"),Te=document.getElementById("turn-player"),Xe=W!=="online"||L===Y;J&&se&&we&&Te&&(J.style.display="flex",se.textContent=Xe?`${Ke(L)}: Pick a class (${oe}/${Ci})`:`${Ke(L)} is picking a class`,z&&(z.textContent=Xe?"Get ready\u2026":""),Vn=null,we.innerHTML="",Te.textContent=`Draft: ${Ke(L)} \u2014 pick a class`),le&&(le.style.display="none"),setTimeout(Ul,1500)}function Nt(){Nt._pending||(Nt._pending=!0,requestAnimationFrame(()=>{Nt._pending=!1,tp()}))}function tp(){let h=Nt._cache||(Nt._cache={}),c=h.turnEl||(h.turnEl=document.getElementById("turn-player")),_=h.menuLabel||(h.menuLabel=document.getElementById("menu-label")),b=h.turnMenu||(h.turnMenu=document.getElementById("turn-menu")),P=h.unitInfo||(h.unitInfo=document.getElementById("unit-info")),I=h.unitNameEl||(h.unitNameEl=document.getElementById("unit-name")),D=h.unitLevelClassEl||(h.unitLevelClassEl=document.getElementById("unit-level-class")),F=h.unitStatsEl||(h.unitStatsEl=document.getElementById("unit-stats")),L=h.unitClassImageEl||(h.unitClassImageEl=document.getElementById("unit-class-image"));if($==="playing"&&ve.forEach(z=>{if(z.hp<=0)return;let le=re.get(z.id);le&&H(le,z.maxHp>0&&z.hp/z.maxHp<Ie)}),b.classList.remove("player-1","player-2"),b.classList.add(G===1?"player-1":"player-2"),b.classList.toggle("level-2",!1),b.classList.toggle("level-3",!1),$==="playing"&&it.length>0){let z=it[at],le=Je(z),we=le&&le.hp>0?le:null;if(W==="online"&&we&&we.player!==Y)mn=null;else if(we){let Te=mn!=null?Je(mn):null;(mn==null||!Te||Te.hp<=0)&&(mn=z)}}if(mn!=null){let z=Je(mn);if(z&&z.hp>0){P.classList.remove("no-unit");let le=z.maxHp>0&&z.hp/z.maxHp<.25;b.classList.toggle("low-hp",le),b.classList.toggle("level-2",z.level>=2&&z.level<3),b.classList.toggle("level-3",z.level>=3),I.textContent=z.name,D.textContent=`Lv.${z.level} ${z.class}`,L.src=aa[z.class]||"",L.alt=z.name;let we=[["HP",`${z.hp}/${z.maxHp}`,"stat-val-hp"],["MP",`${z.mp}/${z.maxMp}`,""],["STR",zi(z,"str"),""],["AGI",zi(z,"agi"),""],["VIT",zi(z,"vit"),""],["DEX",zi(z,"dex"),""],["LUK",zi(z,"luk"),""],["INT",zi(z,"int"),""]];z.tempDebuff&&z.tempDebuff.poison!=null&&we.push(["Poison",`${z.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),z.tempBuff&&z.tempBuff.heal!=null&&we.push(["Regen",`${z.tempBuff.heal} HP/turn`,"stat-val-buff"]),F.innerHTML=we.map(([Te,Xe,ke])=>{let Ce=ke?` ${ke}`:"";return`<span>${Te}</span><span class="stat-val${Ce}">${Xe}</span>`}).join("")}else b.classList.remove("low-hp","level-2","level-3"),P.classList.add("no-unit"),I.textContent="\u2014 Select a unit \u2014",D.textContent="",F.textContent="",L.src="",L.alt=""}else b.classList.remove("low-hp","level-2","level-3"),P.classList.add("no-unit"),I.textContent="\u2014 Select a unit \u2014",D.textContent="",F.textContent="",L.src="",L.alt="";if(mn!=null)c.textContent=`${Ke(G)} \u2014 Unit ${I.innerHTML} active`;else{let z=it.length?Je(it[at]):null;c.textContent=z?`${z.name} (${Ke(G)})`:Ke(G)}_.textContent=Ke(G);let oe=h.btnAttack||(h.btnAttack=document.getElementById("btn-attack")),J=h.btnSkill||(h.btnSkill=document.getElementById("btn-skill")),se=h.btnEnd||(h.btnEnd=document.getElementById("btn-end"));if(W==="cvcpu"&&$==="playing")oe.disabled=!0,J.disabled=!0,se&&(se.disabled=!0),c.textContent=`${Ke(G)} (CPU)`;else if(As)oe.disabled=!0,J.disabled=!0,c.textContent="Click on map to choose facing direction";else if($==="playing"){oe.disabled=ai;let z=it.length?it[at]:null,le=z?Je(z):null,we=le&&le.hp>0?le:null,Te=W!=="cvcpu"&&(W!=="pvcpu"||G===1)&&(W!=="online"||G===Y),Xe=Te&&we&&!ai?Xl(we):[];J.disabled=ai||!Te||Xe.length===0,se&&(se.disabled=W==="online"&&G!==Y)}if($==="playing"){let z=Math.min(R+1,vs);c.textContent=(c.textContent||"")+` \u2014 Turn ${z}/${vs}`;let le=h.turnsLeftEl||(h.turnsLeftEl=document.getElementById("turns-left")),we=h.turnsLeftValueEl||(h.turnsLeftValueEl=document.getElementById("turns-left-value"));if(le&&we){le.style.display="";let Te=Math.max(0,vs-R);we.textContent=String(Te),le.classList.toggle("turns-left-low",Te<=10),(Te===30||Te===20||Te===10)&&(Se[Te]||(dt(Te),Se[Te]=!0))}}else{let z=h.turnsLeftEl||(h.turnsLeftEl=document.getElementById("turns-left"));z&&(z.style.display="none")}$==="playing"&&Wl(G)&&!ln&&setTimeout(yn,700)}function Jt(){if(W==="online"&&G===Y&&typeof er=="function"){let se=it[at],z=re.get(se),le=z?.rotation.y;er({type:"endTurn",unitId:se,facingAngle:le})}zt(),da(),ji=!1,ws=!1,ni=null,As=!1,Li=[],Jf(),Nn();let h=it.length;if(h===0)return;let c=it[at],_=Je(c);if(_&&_.tempDebuff&&_.tempDebuff.duration--,_&&_.tempDebuff&&_.tempDebuff.duration<=0&&(_.tempDebuff=void 0),_&&_.tempBuff&&_.tempBuff.duration--,_&&_.tempBuff&&_.tempBuff.duration<=0&&(_.tempBuff=void 0),_&&_.hp>0){let se=Math.ceil(Me(_,"int")*.15);_.mp=Math.min(_.maxMp,_.mp+se)}if(_&&_.hp>0){let se=_.x,z=_.y;e.type[z][se]===Qe.CENTER&&_.level===1&&Oe(_);let le=_.player===1?Qe.BASE_TOP:Qe.BASE_BOTTOM;e.type[z][se]===le&&_.level===2&&Oe(_)}if(R++,R>=vs){Pp();return}let b=(at+1)%h,P=0;for(;P<h;){let se=it[b],z=Je(se);if(z&&z.hp>0)break;b=(b+1)%h,P++}let I=b===0;at=b;let D=["poison"],F=it[at],L=Je(F);for(let se=0;se<h&&!(!L||L.hp<=0);se++){let z=L.tempDebuff||{},le=D.find(Te=>!isNaN(z[Te])),we=z[le]||0;if(we<=0)break;if(console.log("[DEBUFF]",`${le}: ${we} to ${L.name}`),L.hp=Math.max(0,L.hp-we),oi(L.x,L.y,String(we),!1,le),Ht(L),L.hp<=0){On(L),b=(at+1)%h;let Te=0;for(;Te<h;){let Xe=it[b],ke=Je(Xe);if(ke&&ke.hp>0)break;b=(b+1)%h,Te++}at=b;continue}break}let oe=it[at],J=Je(oe);if(J&&J.hp>0){let se=J.tempBuff,z=se&&se.heal!=null&&!isNaN(se.heal)?Number(se.heal):0;if(z>0){let le=J.hp;J.hp=Math.min(J.maxHp,J.hp+z);let we=J.hp-le;we>0&&(console.log("[BUFF]",`heal: ${we} to ${J.name}`),oi(J.x,J.y,`+${we}`,!1,"heal"),Ht(J))}}G=J&&J.hp>0?J.player:1,gn=!1,ai=!1,mn=it[at],I&&(it=Dl(),at=0),Nt(),Il(),eo()}document.getElementById("btn-attack").addEventListener("click",()=>{if(ln||ai||$!=="playing"||it.length===0)return;if(W==="online"){let P=it[at],I=Je(P);if(!I||I.player!==Y)return}da();let h=it[at],c=Je(h);if(!c||c.hp<=0)return;let _=c.range!=null?c.range:1;mn=h,ji=!0;let b=Uf(e,c.x,c.y,_);In=new Map,b.forEach((P,I)=>{let D=I%e.w,F=Math.floor(I/e.w);Ms(e,c.x,c.y,D,F)&&In.set(I,P)}),Mp(In),Nt()}),document.getElementById("btn-skill").addEventListener("click",h=>{if(h.preventDefault(),h.stopPropagation(),ln||ai)return;let c=it[at],_=c?Je(c):null,b=_&&_.hp>0?_:null;if(!b||b.player!==G||W==="online"&&b.player!==Y)return;let P=document.getElementById("skill-list-overlay"),I=document.getElementById("btn-skill");if(!I)return;if(P&&P.style.display==="block"){P.style.display="none";return}let D=Xl(b),F=I.getBoundingClientRect();P||(P=document.createElement("div"),P.id="skill-list-overlay",P.className="skill-list-overlay",P.setAttribute("aria-hidden","true"),document.body.appendChild(P)),P.style.left=`${F.left}px`,P.style.top=`${F.top-4}px`,P.style.transform="translateY(-100%)",P.style.right="auto",P.style.bottom="auto",P.style.display="none",D.length===0?P.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(P.innerHTML=D.map((L,oe)=>`<button type="button" class="skill-option" data-skill-index="${oe}" ${L.disabled?"disabled":""}>
          <span class="skill-name">${L.name}</span> <span class="skill-meta">${L.cost} MP \xB7 Lv.${L.level}</span><br/>
          <span class="skill-meta">${L.description}</span>
        </button>`).join(""),P.querySelectorAll(".skill-option").forEach((L,oe)=>{L.addEventListener("click",J=>{J.preventDefault(),J.stopPropagation();let se=D[oe];if(ni=se,P.style.display="none",P.setAttribute("aria-hidden","true"),se.target==="self"){if(b.mp<se.cost)return;b.mp-=se.cost,ai=!0;let z={showFloatingCombatText:oi,handleUnitDeath:On,updateUnitSlashVisibility:Ht,updateTurnUI:Nt,units:ve,reanimateDeadUnit:ga};W==="online"&&b.player===Y&&typeof rn=="function"&&(rn({type:"requestRender"}),er({type:"skill",unitId:b.id,targetId:b.id,effectKey:se.effectKey})),lo(b,b,se,z,()=>{Nn(),ws=!1,ni=null,ls=new Set,gn&&b.hp>0?Jt():Nt()}),Nt();return}if(se.target==="ally"&&co(b,se,ve).filter(we=>we.targetUnit&&we.targetUnit.id!==b.id).length===0&&b.mp>=se.cost){b.mp-=se.cost,ai=!0;let we={showFloatingCombatText:oi,handleUnitDeath:On,updateUnitSlashVisibility:Ht,updateTurnUI:Nt,units:ve,reanimateDeadUnit:ga};W==="online"&&b.player===Y&&typeof rn=="function"&&(rn({type:"requestRender"}),er({type:"skill",unitId:b.id,targetId:b.id,effectKey:se.effectKey})),lo(b,b,se,we,()=>{Nn(),ws=!1,ni=null,ls=new Set,gn&&b.hp>0?Jt():Nt()}),Nt();return}ws=!0,ji=!1,_p(b,se),Nt()})})),requestAnimationFrame(()=>{P.style.display="block",P.style.visibility="visible",P.setAttribute("aria-hidden","false")})}),document.addEventListener("click",h=>{let c=document.getElementById("skill-list-overlay"),_=document.getElementById("btn-skill"),b=document.querySelector(".skill-wrap");!c||c.style.display!=="block"||b&&b.contains(h.target)||c.contains(h.target)||(c.style.display="none",c.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(ln||As||$!=="playing"||it.length===0)return;let h=it[at],c=Je(h);if(!c||c.hp<=0||W==="online"&&c.player!==Y)return;As=!0,mn=null,ji=!1,In=new Map,Nn(),Zf(),Il();let _=document.getElementById("turn-player");_.textContent="Click on map to choose facing direction",Nt()}),d.set(0,8,0),a.position.copy(d).add(u),a.lookAt(d);let _r=document.getElementById("mode-select-overlay"),Gh=document.getElementById("mode-carousel-track"),Wh=document.getElementById("mode-carousel-prev"),Xh=document.getElementById("mode-carousel-next"),to=document.getElementById("mode-carousel-dots"),os=document.getElementById("mode-play-btn"),qh=document.getElementById("mode-settings-pvp"),Yh=document.getElementById("mode-settings-pvp-map"),$h=document.getElementById("mode-settings-pvp-num-units"),Kh=document.getElementById("mode-settings-pvp-none"),Zh=document.getElementById("mode-settings-options"),no=document.getElementById("pvp-map-mode"),ya=document.getElementById("pvp-num-units"),xa=document.getElementById("ai-draft-preference"),np=document.getElementById("cvcpu-num-games"),io=document.getElementById("cvcpu-num-units"),Jh=document.getElementById("cvcpu-grid-w"),jh=document.getElementById("cvcpu-grid-h"),Qh=document.getElementById("cvcpu-center-plaza"),eu=document.getElementById("cvcpu-max-turns"),vr=document.getElementById("move-speed"),Mr=document.getElementById("draft-picks-per-player"),Js=document.getElementById("online-connect-overlay"),Ni=document.getElementById("online-player-name"),js=document.getElementById("online-create-section"),br=document.getElementById("online-join-section"),Sr=document.getElementById("online-offer-text"),so=document.getElementById("online-reply-text"),ro=document.getElementById("online-paste-offer"),_a=document.getElementById("online-join-answer-section"),Er=document.getElementById("online-answer-text"),Fl=document.getElementById("online-error"),tu=document.getElementById("online-waiting-msg"),es=bs?["pvp","pvcpu","cvcpu","online","story"]:["pvp","pvcpu","online","story"],Bl=es.length-1,Bn=0;function kl(){return Bn===Bl}function ip(){return es[Bn]==="online"}function ao(h){Bn=Math.max(0,Math.min(h,Bl)),Gh&&(Gh.style.transform=`translateX(-${Bn*100}%)`),to&&to.querySelectorAll(".mode-dot").forEach((_,b)=>{_.classList.toggle("active",b===Bn),_.setAttribute("aria-selected",b===Bn)}),qh&&(qh.style.display=Bn===0||Bn===1||kl()||es[Bn]==="online"?"":"none"),Yh&&(Yh.style.display=Bn===0||Bn===1||es[Bn]==="online"?"":"none"),$h&&($h.style.display=es[Bn]==="pvp"?"":"none"),es[Bn]==="pvp"&&ya&&(ya.style.width="11em",ya.value=String(Math.max(1,Math.min(20,Ci)))),Kh&&(Kh.style.display=kl()?"":"none"),Zh&&(Zh.style.display=bs&&es[Bn]==="cvcpu"?"":"none"),bs&&es[Bn]==="cvcpu"&&io&&(io.value=String(Math.max(1,Math.min(20,Ci))));let c=os?.querySelector(".mode-play-text");os&&c&&(kl()?(os.disabled=!0,c.textContent="Coming Soon"):(os.disabled=!1,c.textContent=ip()?"Connect":"Play game"))}if(to)for(let h=0;h<=Bl;h++){let c=document.createElement("button");c.type="button",c.className="mode-dot"+(h===0?" active":""),c.setAttribute("role","tab"),c.setAttribute("aria-label",`Mode ${h+1}`),c.setAttribute("aria-selected",h===0),c.addEventListener("click",()=>ao(h)),to.appendChild(c)}if(Wh&&Wh.addEventListener("click",()=>ao(Bn-1)),Xh&&Xh.addEventListener("click",()=>ao(Bn+1)),_r&&!bs){let h=_r.querySelector('.mode-slide[data-mode="cvcpu"]');h&&h.parentNode&&h.parentNode.removeChild(h)}if(ao(0),vr&&(vr.value=String(Ks),vr.addEventListener("input",()=>{let h=parseInt(vr.value,10);!Number.isNaN(h)&&h>=0&&(Ks=h)}),vr.addEventListener("change",()=>{let h=parseInt(vr.value,10);!Number.isNaN(h)&&h>=0&&(Ks=h)})),Mr&&(Mr.value=String(Ci),Mr.addEventListener("input",()=>{let h=parseInt(Mr.value,10);!Number.isNaN(h)&&h>=1&&(Ci=h)}),Mr.addEventListener("change",()=>{let h=parseInt(Mr.value,10);!Number.isNaN(h)&&h>=1&&(Ci=h)})),xa&&(cv.forEach(h=>{let c=document.createElement("option");c.value=h.value,c.textContent=h.label,xa.appendChild(c)}),xa.value=nn,xa.addEventListener("change",()=>{nn=xa.value})),Js){let h=document.getElementById("online-btn-create"),c=document.getElementById("online-btn-join"),_=document.getElementById("online-btn-copy-offer"),b=document.getElementById("online-btn-connect"),P=document.getElementById("online-btn-join-connect"),I=document.getElementById("online-btn-copy-answer");h&&h.addEventListener("click",async()=>{let D=Ni&&Ni.value.trim()||"Player 1";if(!D){ui("Enter your name");return}ui("");try{gt=no&&no.value||"long",rt=(Date.now()^Math.random()*4294967295)>>>0,St(gt,rt);let F=await ap(D,rt,gt);Sr&&(Sr.value=F),js&&(js.style.display="flex",js.style.alignItems="flex-start"),br&&(br.style.display="none")}catch(F){ui(F.message||"Failed to create game")}}),_&&Sr&&_.addEventListener("click",()=>{Sr.select(),document.execCommand("copy")}),b&&so&&b.addEventListener("click",async()=>{let D=so.value.trim();if(!D){ui("Paste your friend's reply");return}ui("");try{await lp(D)}catch(F){ui(F.message||"Failed to connect")}}),c&&c.addEventListener("click",()=>{if(!(Ni&&Ni.value.trim()||"Player 2")){ui("Enter your name");return}ui(""),js&&(js.style.display="none"),br&&(br.style.display="flex")}),P&&ro&&P.addEventListener("click",async()=>{let D=ro.value.trim();if(!D){ui("Paste the host's code");return}ui("");try{Y=2,Ne[2]=Ni&&Ni.value.trim()||"Player 2";let F=await op(Ne[2],D);Er&&(Er.value=F),_a&&(_a.style.display="flex",_a.style.alignItems="flex-start")}catch(F){ui(F.message||"Failed to join")}}),I&&Er&&I.addEventListener("click",()=>{Er.select(),document.execCommand("copy")})}let Cs=new Audio;Cs.loop=!0,Cs.volume=.3,Cs.preload="auto";let Hl=window.location.href.replace(/[^/]*$/,""),nu=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:Hl+(Hl.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Cs.src=nu,Cs.addEventListener("error",()=>{let h=Hl+"assets/music/tavern.mp3";h!==nu&&(Cs.src=h)});function sp(){Cs.paused&&Cs.play().catch(()=>{})}function ui(h){Fl&&(Fl.textContent=h||"",Fl.style.display=h?"block":"none")}function iu(){Js&&(Js.style.display="none",Js.setAttribute("aria-hidden","true"))}function rp(){ui(""),Y=1,Ne={1:"",2:""},Js&&(Js.style.display="flex",Js.setAttribute("aria-hidden","false")),Ni&&(Ni.value=""),js&&(js.style.display="none"),br&&(br.style.display="none"),Sr&&(Sr.value=""),so&&(so.value=""),ro&&(ro.value=""),Er&&(Er.value=""),_a&&(_a.style.display="none"),tu&&(tu.style.display="block")}function su(h){return new Promise(c=>{if(h.iceGatheringState==="complete"){c();return}let _=()=>{h.iceGatheringState==="complete"&&(h.removeEventListener("icegatheringstatechange",_),c())};h.addEventListener("icegatheringstatechange",_)})}async function ap(h,c,_){We&&(We.close(),We=null,et=null);let b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),P=[];b.addEventListener("icecandidate",F=>{F.candidate&&P.push(F.candidate)});let I=b.createDataChannel("game-sync",{ordered:!0});et=I,We=b,I.addEventListener("open",()=>au(I,!0));let D=await b.createOffer();return await b.setLocalDescription(D),await su(b),JSON.stringify({type:"offer",sdp:b.localDescription.sdp,candidates:P,playerName:h||"Player 1"})}async function op(h,c){let _=JSON.parse(c),b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),P=[];if(b.addEventListener("icecandidate",D=>{D.candidate&&P.push(D.candidate)}),b.addEventListener("datachannel",D=>{et=D.channel,We=b,au(et,!1)}),await b.setRemoteDescription(new RTCSessionDescription({type:"offer",sdp:_.sdp})),_.candidates&&_.candidates.length)for(let D of _.candidates)await b.addIceCandidate(new RTCIceCandidate(D));let I=await b.createAnswer();return await b.setLocalDescription(I),await su(b),JSON.stringify({type:"answer",sdp:b.localDescription.sdp,candidates:P,playerName:h||"Player 2"})}async function lp(h){let c=JSON.parse(h);if(!We){ui("Create a game first, then paste your friend's reply.");return}let _=We.signalingState;if(_!=="stable"){if(_!=="have-local-offer"){ui("Wrong step: create a game first and send the code, then paste the reply.");return}if(await We.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:c.sdp})),c.candidates&&c.candidates.length)for(let b of c.candidates)await We.addIceCandidate(new RTCIceCandidate(b))}}let ru=0,Qs=0,zl=[],Vl=!1,oo=[];function Tr(){Qs=Math.max(0,Qs-1),Qs===0&&Gl()}function Gl(){for(;Qs===0&&zl.length>0;){let h=zl.shift();if(h.type==="move"){up(h.unitId,h.toGx,h.toGy);return}if(h.type==="attack"){h.strikes&&Array.isArray(h.strikes)&&h.strikes.length>0?ou(h.unitId,h.targetId,void 0,void 0,h.strikes):ou(h.unitId,h.targetId,h.hit,h.damage);return}if(h.type==="skill"){dp(h);return}if(h.type==="endTurn"){if(h.unitId!=null&&h.facingAngle!=null){let c=re.get(h.unitId);c&&(c.rotation.y=h.facingAngle)}Jt();return}if(h.type==="unitDeath"){let c=Je(h.unitId),_=h.killerId!=null?Je(h.killerId):null;c&&(c.hp=0,On(c,_,{skipSync:!0})),Gl();return}}}function au(h,c){if(h.binaryType="arraybuffer",h.addEventListener("message",I=>{try{let D=JSON.parse(I.data);if(D.seq!=null&&D.seq<=ru)return;D.seq!=null&&(ru=D.seq),cp(D,c)}catch(D){console.warn("Online message parse error",D)}}),h.addEventListener("close",()=>{W==="online"&&ui("Connection lost.")}),!c){let I=Ne[2]||Ni&&Ni.value.trim()||"Player 2";rn({type:"joined",playerName:I});return}let _=Ni&&Ni.value.trim()||"Player 1",b=rt??(Date.now()^Math.random()*4294967295)>>>0,P=gt||"long";Ne[1]=_,rn({type:"start",mapSeed:b,mapMode:P,playerName:_}),iu(),ma()}function cp(h,c){if(h.type==="start"){Ne[1]=h.playerName||"Player 1",rt=h.mapSeed,gt=h.mapMode||"long",St(gt,rt),iu(),ma();return}if(h.type==="joined"){Ne[2]=h.playerName||"Player 2";return}if($==="draft"){h.type==="draftPick"?Nl(h.classKey):h.type==="draftPlace"&&Ol(h.gx,h.gy);return}$==="playing"&&(h.type==="move"||h.type==="attack"||h.type==="skill"||h.type==="endTurn"||h.type==="unitDeath"?(zl.push(h),Gl()):h.type==="requestRender"&&zt())}function rn(h){if(et&&et.readyState==="open"){let c=(typeof rn.seq<"u"?rn.seq:0)+1;rn.seq=c,et.send(JSON.stringify({...h,seq:c}))}}function er(h){if(W==="online"&&Vl&&(h.type==="attack"||h.type==="skill"||h.type==="endTurn")){oo.push(h);return}rn(h)}function hp(){for(let h=0;h<oo.length;h++)rn(oo[h]);oo.length=0}function up(h,c,_){let b=Je(h);!b||b.hp<=0||(Qs++,Gt(b,c,_,()=>{zt(),Nt(),Tr()}))}function ou(h,c,_,b,P){let I=Je(h),D=Je(c);if(!I||!D||D.hp<=0)return;Qs++;let F=()=>{zt(),Nt(),Tr()};P&&P.length>0?Ma(I,D,void 0,void 0,F,P):Ma(I,D,_,b,F)}function dp(h){let c=Je(h.unitId),_=h.targetId!=null?Je(h.targetId):null;if(c)if(Qs++,h.effectKey&&c.mp>=(oa[c.class]||[]).find(b=>b.effectKey===h.effectKey)?.cost){let b=(oa[c.class]||[]).find(P=>P.effectKey===h.effectKey);if(b){c.mp-=b.cost;let P={showFloatingCombatText:oi,handleUnitDeath:On,updateUnitSlashVisibility:Ht,updateTurnUI:Nt,tryCollectPowerup:je,world:e,units:ve,reanimateDeadUnit:ga,updateUnitTileIndex:T,updateUnitPosition(F){let L=re.get(F.id);L&&L.position.copy(Pe(F.x,F.y))},animateKnockback(F,L,oe,J,se,z){let le=re.get(F.id);if(!le){z&&z();return}let we=Pe(L,oe).clone(),Te=Pe(J,se).clone(),Xe=performance.now(),ke=0;function Ce(Ye){ke++,ke%2===0&&zt();let tt=Math.min(1,(Ye-Xe)/Ks),Bt=It=>It*It*(3-2*It);le.position.lerpVectors(we,Te,Bt(tt)),tt<1?requestAnimationFrame(Ce):(le.position.copy(Te),z&&z())}requestAnimationFrame(Ce)}};Ja(h.effectKey,c,_,P),_&&Ht(_);let D=b.target==="self"||b.target==="ally"?b.target==="self"?c:_:null;D?ht(D,()=>{zt(),Nt(),Tr()}):(zt(),setTimeout(()=>{zt(),Nt(),Tr()},400))}else zt(),setTimeout(()=>{zt(),Nt(),Tr()},400)}else zt(),setTimeout(()=>{zt(),Nt(),Tr()},400)}function fp(){if(es[Bn]==="story")return;let h=es[Bn];if(sp(),W=h,h==="online"){_r&&_r.classList.add("hidden"),rp();return}if(h==="pvp"||h==="pvcpu"){let c=no&&no.value||"long";St(c),h==="pvp"&&ya&&(Ci=Math.max(1,Math.min(20,parseInt(ya.value,10)||7)))}else h==="cvcpu"&&(bs&&Jh&&jh&&Qh&&(Dh=Math.max(5,Math.min(50,parseInt(Jh.value,10)||21)),Uh=Math.max(5,Math.min(50,parseInt(jh.value,10)||11)),Nh=Math.max(.1,Math.min(.9,parseFloat(Qh.value)||.29))),bs&&eu&&(vs=Math.max(10,Math.min(999,parseInt(eu.value,10)||200))),St("long"));h==="cvcpu"&&(_t=Math.max(1,parseInt(np?.value,10)||1),on=0,io&&(Ci=Math.max(1,Math.min(20,parseInt(io.value,10)||7)))),_r&&_r.classList.add("hidden"),ma()}os?os.addEventListener("click",h=>{if(os.disabled)return;let c=os.querySelector(".mode-play-ripple");if(c){let _=os.getBoundingClientRect();c.style.left=h.clientX-_.left+"px",c.style.top=h.clientY-_.top+"px",c.style.width=c.style.height="20px",c.style.marginLeft=c.style.marginTop="-10px",c.classList.remove("ripple"),c.offsetHeight,c.classList.add("ripple"),setTimeout(()=>c.classList.remove("ripple"),500)}fp()}):ma();function Wl(h){return W==="pvcpu"&&h===2||W==="cvcpu"}function pp(){let h=vi.filter(z=>ft.has(z));if(h.length===0)return null;let c=nn||"balanced";if(c==="random")return h[Math.floor(Math.random()*h.length)];if(c==="custom")return Ff.filter(le=>ft.has(le))[0]??h[0]??null;function _(z,le){let we=h[0],Te=z(we),Xe=le(we);for(let ke=1;ke<h.length;ke++){let Ce=h[ke],Ye=z(Ce),tt=le(Ce);(Ye>Te||Ye===Te&&tt>Xe)&&(we=Ce,Te=Ye,Xe=tt)}return we}if(c==="tanky")return _(z=>zn[z]?.hp??0,z=>zn[z]?.vit??0);if(c==="aggressive")return _(z=>zn[z]?.str??0,z=>zn[z]?.agi??0);if(c==="scout")return _(z=>zn[z]?.agi??0,z=>zn[z]?.dex??0);if(c==="ranged")return _(z=>zn[z]?.range??0,z=>zn[z]?.dex??0);if(c==="caster")return _(z=>zn[z]?.int??0,z=>zn[z]?.mp??0);let b=Wi(),I=uv(Ci),D={tank:0,melee:0,support:0,ranged:0,caster:0};for(let z=0;z<ve.length;z++){let le=ve[z];if(le.player!==b)continue;let we=Oh[le.class];we&&D[we]++}let F=z=>Math.max(0,(I[z]??0)-(D[z]??0)),L=z=>{let le=Oh[z],we=le!=null?F(le):0,Te=zn[z]?.hp??0,Xe=-(Bf[z]??1/0);return{def:we,hp:Te,negVar:Xe}},oe=(z,le)=>z.def!==le.def?z.def>le.def:z.hp!==le.hp?z.hp>le.hp:z.negVar>le.negVar,J=h[0],se=L(J);for(let z=1;z<h.length;z++){let le=L(h[z]);oe(le,se)&&(J=h[z],se=le)}return J}function va(){if($!=="draft"||!Wl(Wi()))return;if(!ti){let c=pp();c&&Nl(c),setTimeout(va,500);return}let h=bi.length>0?bi:Df(e,Array.from(En,c=>({gx:c%e.w,gy:c/e.w|0})));if(h.length>0){let{gx:c,gy:_}=h[0];Ol(c,_)}}function lu(){if(e.centerTiles&&e.centerTiles.length>0)return e.centerTiles;let h=[];for(let c=0;c<e.h;c++)for(let _=0;_<e.w;_++)e.type[c][_]===Qe.CENTER&&h.push({gx:_,gy:c});return h}function mp(h){let c=[],_=h===1?Qe.BASE_TOP:Qe.BASE_BOTTOM;for(let b=0;b<e.h;b++)for(let P=0;P<e.w;P++)e.type[b][P]===_&&c.push({gx:P,gy:b});return c}function yi(h,c,_,b){return Math.abs(h-_)+Math.abs(c-b)}function gp(h){let c=h.range!=null?h.range:1,_=[];for(let b of ve){if(b.hp<=0||b.player===h.player)continue;let P=yi(h.x,h.y,b.x,b.y);P<=c&&P>0&&Ms(e,h.x,h.y,b.x,b.y)&&_.push({target:b,dist:P})}return _}function yp(h,c,_){let b=_??ve.filter(I=>I.hp>0&&I.player===h.player&&I.id!==h.id),P=c??ve.filter(I=>I.hp>0&&I.player!==h.player);for(let I of b)for(let D of P){let F=D.range!=null?D.range:1,L=yi(D.x,D.y,I.x,I.y);if(L<=F&&L>0&&Ms(e,D.x,D.y,I.x,I.y))return!0}return!1}function Gt(h,c,_,b){let P=h.x,I=h.y,D=mr(e,h.x,h.y,c,_,ve,h);if(!D||D.length<=1){b&&b();return}mn=null,Nn(),ln=!0,m=!0,Ui(h.id),zt();let F=re.get(h.id),L=1;function oe(){if(L>=D.length){let Ye=h.x,tt=h.y;h.x=D[D.length-1].x,h.y=D[D.length-1].y,T(h,Ye,tt),je(h),ln=!1,Tt(F),Ui(),In=new Map,gn=!0,W==="online"&&h.player===Y&&typeof rn=="function"&&rn({type:"move",unitId:h.id,toGx:h.x,toGy:h.y}),b&&b();return}let J=D[L-1],se=D[L],z=Pe(J.x,J.y).clone(),le=Pe(se.x,se.y).clone(),we=le.x-z.x,Te=le.z-z.z;we*we+Te*Te>1e-6&&(F.rotation.y=Math.atan2(we,Te));let Xe=performance.now(),ke=0;function Ce(Ye){ke++,ke%2===0&&zt();let tt=Math.min(1,(Ye-Xe)/Ks),It=(At=>At*At*(3-2*At))(tt);if(F.position.lerpVectors(z,le,It),qe(F,It),m){let At=a.position.distanceTo(d),Yt=At<.1?o:At;p.copy(a.position).sub(d).normalize(),p.lengthSq()<.01&&p.copy(u).normalize(),d.lerp(F.position,l),a.position.copy(d).add(p.clone().multiplyScalar(Yt)),a.lookAt(d)}tt<1?requestAnimationFrame(Ce):(L++,oe())}requestAnimationFrame(Ce)}oe()}function cu(h,c){let _=Me(c,"agi")*.7+Me(c,"luk")*.3,P=Math.random()*Math.max(.001,_)<=Me(h,"dex"),I=0;if(P){let D=Me(h,"str")*.7+Me(h,"dex")*.2+Me(h,"int")*.1-(Me(c,"vit")*.3+Me(c,"luk")*.2);I=Math.max(1,Math.floor(D))}return{isHit:P,damage:I}}function Ma(h,c,_,b,P,I){let D,F;if(Array.isArray(I)&&I.length>0)F=!0,D=I.map(Ce=>{let Ye=Ce.isHit!==void 0?Ce.isHit:Ce.hit;return{isHit:!!Ye,damage:Ye&&Ce.damage!=null&&Ce.damage>0?Ce.damage:0}});else if(_!==void 0){F=!0;let Ce=!!_,Ye=Ce&&b!=null&&b>0?b:0;D=[{isHit:Ce,damage:Ye}]}else F=!1,W==="online"&&h.player===Y&&typeof rn=="function"&&rn({type:"requestRender"}),D=[cu(h,c)],h.tempBuff&&h.tempBuff.doubleAttack===!0&&c.hp>0&&D.push(cu(h,c));if(ai=!0,mn=null,ji=!1,Nn(),!F&&W==="online"&&h.player===Y&&typeof er=="function"){let Ce=D.map(Ye=>({hit:Ye.isHit,damage:Ye.isHit?Ye.damage:void 0}));er({type:"attack",unitId:h.id,targetId:c.id,strikes:Ce,hit:D[0].isHit,damage:D[0].isHit?D[0].damage:void 0})}if(!F){let Ce=c.hp;D.forEach((Ye,tt)=>{let Bt=Ye.isHit?Math.max(0,Ce-Ye.damage):Ce;console.log("[ATTACK]",`${h.name} (${h.class}, P${h.player})`,"\u2192",`${c.name} (${c.class}, P${c.player})`,`strike ${tt+1}/${D.length}:`,Ye.isHit?`${Ye.damage} dmg`:"MISS",`| ${c.name} HP ${Ce} \u2192 ${Bt}/${c.maxHp}`),Ce=Bt})}let L=re.get(h.id);function oe(){ii.shadowMap.enabled=!0,ln=!1,P&&setTimeout(()=>P(),0),F||(gn&&h.hp>0?setTimeout(()=>Jt(),400):setTimeout(()=>Nt(),400))}if(!L||!L.userData.rightArm){let Ye=function(){if(Ce>=D.length||c.hp<=0){setTimeout(()=>{ln=!1,P&&P(),F||(gn&&h.hp>0?Jt():Nt())},400);return}let tt=D[Ce];Ce++,tt.isHit?(c.hp=Math.max(0,c.hp-tt.damage),oi(c.x,c.y,String(tt.damage),!1),Ht(c),c.hp<=0&&On(c,h)):oi(c.x,c.y,"MISS",!0),Ce<D.length&&c.hp>0?setTimeout(Ye,400):setTimeout(()=>{ln=!1,P&&P(),F||(gn&&h.hp>0?Jt():Nt())},400)};ln=!0;let Ce=0;Ye();return}let J=Pe(h.x,h.y).clone(),se=Pe(c.x,c.y).clone(),z=J.clone().lerp(se,.35),le=se.x-J.x,we=se.z-J.z;if(le*le+we*we>1e-6&&(L.rotation.y=Math.atan2(le,we)),(h.range!=null?h.range:1)>2){let It=function(At){if(At>=D.length||c.hp<=0){Ce&&(Ce.rotation.y=0),oe();return}let Yt=D[At].isHit,Vt=D[At].damage,Ln=new $s(.035,.035,.4,6),cn=new Pn({color:16763972}),pt=new $e(Ln,cn);pt.position.copy(J),pt.position.y+=.6;let kt=se.clone().sub(J).normalize();pt.quaternion.setFromUnitVectors(new k(0,1,0),kt),n.add(pt);let $t=!1,Be=null,wt=!1,jt=pt.position.clone(),Tn=se.clone();Tn.y+=.6;let hn=performance.now(),Kn=0;function an(wn){Kn++,Kn%2===0&&zt();let Ei=wn-hn,nt=Math.min(1,Ei/$n);if(pt.position.lerpVectors(jt,Tn,nt),Ce){let ut=Math.sin(nt*Math.PI)*1.1;Ce.rotation.y=-ut}if(!$t&&nt>=1&&($t=!0,n.remove(pt),Ln.dispose(),cn.dispose(),Yt?(c.hp=Math.max(0,c.hp-Vt),oi(c.x,c.y,String(Vt),!1),c.hp<=0&&(wt=!0),re.get(c.id)?Be=wn:wt&&(On(c,h),wt=!1),Ht(c)):oi(c.x,c.y,"MISS",!0)),Be!=null&&Yt){let ut=re.get(c.id);if(ut){let un=Math.min(1,(wn-Be)/Sn),Qt=1-un;Ls.copy(tt).multiplyScalar(Bt*Qt),ut.position.copy(Ye).add(Ls),un>=1&&(ut.position.copy(Ye),Be=null,wt&&(On(c,h),wt=!1))}else Be=null,wt&&(On(c,h),wt=!1)}if(nt<1)requestAnimationFrame(an);else{Ce&&(Ce.rotation.y=0);let ut=Be==null;ut&&wt&&(On(c,h),wt=!1),ut?At+1<D.length&&c.hp>0?It(At+1):oe():requestAnimationFrame(an)}}requestAnimationFrame(an)},Ce=L.userData.rightArm,Ye=Pe(c.x,c.y).clone(),tt=se.clone().sub(J).normalize(),Bt=.4;ln=!0,ii.shadowMap.enabled=!1,It(0);return}function ke(Ce){if(Ce>=D.length||c.hp<=0){L.position.copy(J),L.userData.rightArm&&(L.userData.rightArm.rotation.y=0),oe();return}let Ye=D[Ce].isHit,tt=D[Ce].damage,Bt=!1,It=performance.now(),At=L.userData.rightArm,Yt=null,Vt=!1,Ln=Pe(c.x,c.y).clone(),cn=se.clone().sub(J).normalize(),pt=.4,kt=0;function $t(Be){kt++,kt%2===0&&zt();let wt=Be-It,jt=Math.min(1,wt/Kt),Tn=jt<=.4?jt/.4:1,hn=jt>.4?(jt-.4)/.6:0;jt<=.4?L.position.lerpVectors(J,z,Tn):L.position.lerpVectors(z,J,hn);let Kn=jt<=.35?jt/.35:jt<=.7?(.7-jt)/.35:0;if(At.rotation.y=-Kn*1.1,!Bt&&jt>=Zt&&(Bt=!0,Ye?(c.hp=Math.max(0,c.hp-tt),oi(c.x,c.y,String(tt),!1),c.hp<=0&&(Vt=!0),Ht(c),re.get(c.id)?Yt=Be:Vt&&(On(c,h),Vt=!1)):oi(c.x,c.y,"MISS",!0)),Yt!=null&&Ye){let an=re.get(c.id);if(an){let wn=Math.min(1,(Be-Yt)/Sn),Ei=1-wn;Ls.copy(cn).multiplyScalar(pt*Ei),an.position.copy(Ln).add(Ls),wn>=1&&(an.position.copy(Ln),Yt=null,Vt&&(On(c,h),Vt=!1))}else Yt=null,Vt&&(On(c,h),Vt=!1)}if(jt<1)requestAnimationFrame($t);else{L.position.copy(J),At.rotation.y=0;let an=Yt==null;an&&Vt&&(On(c,h),Vt=!1),an?Ce+1<D.length&&c.hp>0?ke(Ce+1):oe():requestAnimationFrame($t)}}requestAnimationFrame($t)}ln=!0,ii.shadowMap.enabled=!1,ke(0)}function xp(h,c){let _=Pe(h,c);_.y+=.4;let b=new rs(.1,12,12),P=new Pn({color:8930559,transparent:!0,opacity:.9}),I=new $e(b,P);I.position.copy(_),n.add(I);let D=performance.now(),F=0;function L(oe){F++,F%2===0&&zt();let J=oe-D,se=Math.min(1,J/en),z=se*(2-se);I.scale.setScalar(z*7.5),P.opacity=.9*(1-se),se<1?requestAnimationFrame(L):(n.remove(I),b.dispose(),P.dispose())}requestAnimationFrame(L)}function lo(h,c,_,b,P){if(_.target==="enemy"&&c==null){setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}let D=(_.range??0)>2&&c!=null&&(c.x!==h.x||c.y!==h.y),F=!D&&c!=null&&(c.x!==h.x||c.y!==h.y);if(!D&&!F){ln=!0,Ja(_.effectKey,h,c,b);let kt=_.target==="self"||_.target==="ally",$t=_.target==="self"?h:c;kt&&$t?ht($t,()=>{setTimeout(()=>{ln=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)}):setTimeout(()=>{ln=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}if(F){let dn=function(ae){vn++,vn%2===0&&zt();let xe=ae-Qt,pe=Math.min(1,xe/Kt),ue=pe<=.4?pe/.4:1,ge=pe>.4?(pe-.4)/.6:0;pe<=.4?kt.position.lerpVectors($t,wt,ue):kt.position.lerpVectors(wt,$t,ge);let Re=pe<=.35?pe/.35:pe<=.7?(.7-pe)/.35:0;if(wn.rotation.y=-Re*1.1,!Ei&&pe>=Zt&&(Ei=!0,Ja(_.effectKey,h,c,un),c.hp<=0&&(ut=!0),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(c),re.get(c.id)&&_.target!=="ally"?nt=ae:ut&&(On(c,h),ut=!1)),nt!=null){let ce=re.get(c.id);if(ce){let _e=Math.min(1,(ae-nt)/Sn),Ot=1-_e;Ls.copy(Kn).multiplyScalar(an*Ot),ce.position.copy(hn).add(Ls),_e>=1&&(ce.position.copy(hn),nt=null,ut&&(On(c,h),ut=!1))}else nt=null,ut&&(On(c,h),ut=!1)}pe<1?requestAnimationFrame(dn):(kt.position.copy($t),wn.rotation.y=0,nt==null&&ut&&(On(c,h),ut=!1),nt==null?(ii.shadowMap.enabled=!0,ln=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)):requestAnimationFrame(dn))},kt=re.get(h.id);if(!kt||!kt.userData.rightArm){ln=!0,Ja(_.effectKey,h,c,b),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(c),setTimeout(()=>{ln=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}ln=!0;let $t=Pe(h.x,h.y).clone(),Be=Pe(c.x,c.y).clone(),wt=$t.clone().lerp(Be,.35),jt=Be.x-$t.x,Tn=Be.z-$t.z;jt*jt+Tn*Tn>1e-6&&(kt.rotation.y=Math.atan2(jt,Tn));let hn=Pe(c.x,c.y).clone(),Kn=Be.clone().sub($t).normalize(),an=.4,wn=kt.userData.rightArm,Ei=!1,nt=null,ut=!1,un={...b,handleUnitDeath:void 0},Qt=performance.now(),vn=0;ii.shadowMap.enabled=!1,requestAnimationFrame(dn);return}let L=Pe(h.x,h.y).clone(),oe=Pe(c.x,c.y).clone(),J=new $s(.035,.035,.4,6),se=new Pn({color:16763972}),z=new $e(J,se);z.position.copy(L),z.position.y+=.6;let le=oe.clone().sub(L).normalize();z.quaternion.setFromUnitVectors(new k(0,1,0),le),n.add(z),ln=!0;let we=re.get(h.id),Te=we&&we.userData.rightArm?we.userData.rightArm:null;if(we){let kt=oe.x-L.x,$t=oe.z-L.z;kt*kt+$t*$t>1e-6&&(we.rotation.y=Math.atan2(kt,$t))}let Xe=z.position.clone(),ke=oe.clone();ke.y+=.6;let Ce=performance.now(),Ye=Pe(c.x,c.y).clone(),tt=oe.clone().sub(L).normalize(),Bt=.4,It=!1,At=null,Yt=0,Vt=null,Ln=_.effectKey==="powerShot"?{...b,animateKnockback(kt,$t,Be,wt,jt,Tn){Vt={targ:kt,fromGx:$t,fromGy:Be,toGx:wt,toGy:jt,knockbackOnDone:Tn}}}:b;function cn(){ii.shadowMap.enabled=!0,ln=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)}function pt(kt){Yt++,Yt%2===0&&zt();let $t=kt-Ce,Be=Math.min(1,$t/$n);if(z.position.lerpVectors(Xe,ke,Be),Te){let wt=Math.sin(Be*Math.PI)*1.1;Te.rotation.y=-wt}if(!It&&Be>=1&&(It=!0,n.remove(z),J.dispose(),se.dispose(),_.type==="spell"&&xp(c.x,c.y),Ja(_.effectKey,h,c,Ln),re.get(c.id)&&c.hp>0&&(At=kt),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(c)),At!=null){let wt=re.get(c.id);if(wt){let jt=Math.min(1,(kt-At)/Sn),Tn=1-jt;if(Ls.copy(tt).multiplyScalar(Bt*Tn),wt.position.copy(Ye).add(Ls),jt>=1&&(wt.position.copy(Ye),At=null,Vt)){let{targ:hn,fromGx:Kn,fromGy:an,toGx:wn,toGy:Ei,knockbackOnDone:nt}=Vt;Vt=null,b.animateKnockback?b.animateKnockback(hn,Kn,an,wn,Ei,()=>{nt&&nt(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(hn),cn()}):cn();return}}else if(At=null,Vt){Vt=null,cn();return}}if(Be<1)requestAnimationFrame(pt);else if(Te&&(Te.rotation.y=0),At==null)if(Vt){let{targ:wt,fromGx:jt,fromGy:Tn,toGx:hn,toGy:Kn,knockbackOnDone:an}=Vt;Vt=null,b.animateKnockback?b.animateKnockback(wt,jt,Tn,hn,Kn,()=>{an&&an(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(wt),cn()}):cn()}else cn();else requestAnimationFrame(pt)}ii.shadowMap.enabled=!1,requestAnimationFrame(pt)}function yn(){if($!=="playing"||!Wl(G)||ln||it.length===0)return;let h=it[at],c=Je(h);if(!c||c.hp<=0){setTimeout(()=>Jt(),0);return}let _=Me(c,"agi"),b=Rl(e,c.x,c.y,_,ve,c),P=new Set(ve.filter(ae=>ae.hp>0&&ae.id!==c.id).map(ae=>ae.y*e.w+ae.x)),I=[];b.forEach((ae,xe)=>{ae!==0&&(P.has(xe)||I.push({gx:xe%e.w,gy:Math.floor(xe/e.w),dist:ae}))});let D=gp(c),F=lu(),L=mp(c.player),oe=.25,J=.03,se=c.maxHp>0&&c.hp/c.maxHp<oe,z=c.maxHp>0&&c.hp/c.maxHp<J,le=c.level===2,we=F.filter(ae=>!P.has(ae.gy*e.w+ae.gx)),Te=L.filter(ae=>!P.has(ae.gy*e.w+ae.gx)),Xe=new Set(F.map(ae=>ae.gy*e.w+ae.gx)),ke=we.length>0?we:F,Ce=Te.length>0?Te:L,Ye=ke.length>0?Kn(ke):null,tt=Ce.length>0?Kn(Ce):null,Bt=Xl(c),It=c.tempBuff&&c.tempBuff.doubleAttack===!0,At=It?[]:Bt.filter(ae=>!ae.disabled&&c.mp>=ae.cost&&ae.target==="enemy"),Yt=At.length>0?Math.max(...At.map(ae=>ae.range||0)):0,Vt=Math.max(c.range!=null?c.range:1,Yt),Ln=c.level>=2&&Vt>=2,cn=It?!1:Ln,pt=ve.filter(ae=>ae.hp>0&&ae.player!==c.player),kt=ve.filter(ae=>ae.hp>0&&ae.player===c.player&&ae.id!==c.id);function $t(ae,xe){if(xe.length===0)return null;let pe=null,ue=1/0;for(let ge of ae){let Re=0;for(let ce of xe)Re+=yi(ge.gx,ge.gy,ce.gx,ce.gy);Re<ue&&(ue=Re,pe=ge)}return pe}function Be(ae,xe){if(xe.length===0||ae.length===0)return null;let pe=null,ue=1/0;for(let ge of ae){let Re=1/0;for(let ce=0;ce<xe.length;ce++){let _e=xe[ce],Ot=yi(ge.gx,ge.gy,_e.gx,_e.gy);Ot<Re&&(Re=Ot)}Re<ue&&(ue=Re,pe=ge)}return pe}function wt(ae,xe){let pe=Vt,ue=[];for(let ge=0;ge<pt.length;ge++){let Re=pt[ge],ce=yi(ae,xe,Re.x,Re.y);ce<=pe&&ce>0&&Ms(e,ae,xe,Re.x,Re.y)&&ue.push({target:Re,dist:ce})}return ue}let jt=new Set(I.map(ae=>ae.gy*e.w+ae.gx));function Tn(ae,xe){if(!ae||ae.length<=1)return null;let pe=Math.min(xe,ae.length-1);for(let ue=pe;ue>=1;ue--){let ge=ae[ue],Re=ge.y*e.w+ge.x;if(jt.has(Re))return{gx:ge.x,gy:ge.y}}return null}function hn(ae,xe){if(!ae||ae.length<=1)return null;let pe=Math.min(xe,ae.length-1);for(let ue=pe;ue>=1;ue--){let ge=ae[ue];if(!P.has(ge.y*e.w+ge.x))return{gx:ge.x,gy:ge.y}}return null}function Kn(ae){let xe=bv(e,c.x,c.y,ae,ve,c);return!xe||xe.path.length<=1?null:xe}function an(ae){let xe=ae??I;if(xe.length===0)return null;if(pt.length===0)return xe[0];let pe=null,ue=-1;for(let ge of xe){let Re=1/0;for(let ce=0;ce<pt.length;ce++){let _e=pt[ce],Ot=yi(ge.gx,ge.gy,_e.x,_e.y);Ot<Re&&(Re=Ot)}Re>ue&&(ue=Re,pe=ge)}return pe}function wn(ae){let xe=ae??I;if(xe.length===0)return null;if(pt.length===0)return xe[0];let pe=c.maxHp>0&&c.hp/c.maxHp>=.6,ue=null,ge=-1/0;for(let Re of xe){let ce=1/0;for(let Lt=0;Lt<pt.length;Lt++){let Wt=yi(Re.gx,Re.gy,pt[Lt].x,pt[Lt].y);Wt<ce&&(ce=Wt)}let _e=999;if(kt.length>0){_e=1/0;for(let Lt=0;Lt<kt.length;Lt++){let Wt=yi(Re.gx,Re.gy,kt[Lt].x,kt[Lt].y);Wt<_e&&(_e=Wt)}}let Ot;pe?Ot=_e<ce?ce-1e3:ce:Ot=ce-_e,Ot>ge&&(ge=Ot,ue=Re)}return ue}function Ei(){let ae=Vt;if(pt.length===0)return null;let xe=null,pe=-1;for(let ue of I){let ge=1/0;for(let ce=0;ce<pt.length;ce++){let _e=yi(ue.gx,ue.gy,pt[ce].x,pt[ce].y);_e<ge&&(ge=_e)}let Re=!1;for(let ce=0;ce<pt.length;ce++){let _e=pt[ce],Ot=yi(ue.gx,ue.gy,_e.x,_e.y);if(!(Ot<=0||Ot>ae)&&Ms(e,ue.gx,ue.gy,_e.x,_e.y)){Re=!0;break}}Re&&ge>pe&&(pe=ge,xe=ue)}return xe}function nt(ae){if(ai||pt.length===0||gn||I.length===0)return!1;let xe=new Set;for(let ce=0;ce<ve.length;ce++){let _e=ve[ce];_e.hp>0&&xe.add(_e.y*e.w+_e.x)}function pe(ce,_e){let Ot=null,Lt=ae;for(let Wt=-Lt;Wt<=Lt;Wt++)for(let Et=-Lt;Et<=Lt;Et++){if(Et===0&&Wt===0||Math.abs(Et)+Math.abs(Wt)>Lt)continue;let xn=ce.x+Et,Gn=ce.y+Wt;if(xn<0||xn>=e.w||Gn<0||Gn>=e.h||!Ss(e,xn,Gn)||!Ms(e,xn,Gn,ce.x,ce.y)||xe.has(Gn*e.w+xn))continue;let vt=mr(e,c.x,c.y,xn,Gn,ve,c),Ft=vt?vt.length-1:1/0;vt&&vt.length>1&&(!_e||Ft<=_)&&(!Ot||vt.length<Ot.length)&&(Ot=vt)}return Ot}let ue=[];for(let ce of pt){let _e=pe(ce,!0);_e&&ue.push({enemy:ce,path:_e})}if(ue.length>0){let ce=ue.filter(Wt=>Wt.enemy.maxHp>0&&Wt.enemy.hp/Wt.enemy.maxHp<oe),_e=ce.length>0?ce:ue;ce.length>0?_e.sort((Wt,Et)=>Wt.enemy.hp-Et.enemy.hp||Wt.path.length-Et.path.length):_e.sort((Wt,Et)=>Wt.path.length-Et.path.length||Wt.enemy.hp-Et.enemy.hp);let Ot=_e[0],Lt=Tn(Ot.path,_);if(Lt&&(Lt.gx!==c.x||Lt.gy!==c.y))return Gt(c,Lt.gx,Lt.gy,()=>setTimeout(yn,600)),!0}let ge=null,Re=1/0;for(let ce of pt){let _e=pe(ce,!1);_e&&_e.length<Re&&(Re=_e.length,ge=_e)}if(ge){let ce=Tn(ge,_);if(ce&&(ce.gx!==c.x||ce.gy!==c.y))return Gt(c,ce.gx,ce.gy,()=>setTimeout(yn,600)),!0}return!1}let ut=new Map,un=[];for(let ae of I){let xe=ae.gy*e.w+ae.gx;un.length=0;for(let pe=0;pe<pt.length;pe++){let ue=pt[pe],ge=yi(ae.gx,ae.gy,ue.x,ue.y);ge<=Vt&&ge>0&&Ms(e,ae.gx,ae.gy,ue.x,ue.y)&&un.push({target:ue,dist:ge})}ut.set(xe,un.length>0?un.slice():[])}let Qt=D.some(ae=>ae.target.maxHp>0&&ae.target.hp/ae.target.maxHp<oe),vn=Qt||I.some(ae=>(ut.get(ae.gy*e.w+ae.gx)||[]).some(pe=>pe.target.maxHp>0&&pe.target.hp/pe.target.maxHp<oe));if(ai){if(gn){setTimeout(()=>Jt(),400);return}if(cn&&pt.length>0&&he.size>0&&I.length>0){let ge=[];he.forEach((ce,_e)=>{ge.push({gx:_e%e.w,gy:Math.floor(_e/e.w)})});let Re=Kn(ge);if(Re){let ce=hn(Re.path,_);if(ce&&(ce.gx!==c.x||ce.gy!==c.y)){Gt(c,ce.gx,ce.gy,()=>setTimeout(Jt,400));return}let _e=Be(I,ge);if(_e&&(_e.gx!==c.x||_e.gy!==c.y)){Gt(c,_e.gx,_e.gy,()=>setTimeout(Jt,400));return}}}if(vs-R<=20&&F.length>0){let ge=F.some(Re=>Re.gx===c.x&&Re.gy===c.y);if(ge&&I.length>0){let ce=I.filter(_e=>Xe.has(_e.gy*e.w+_e.gx)).filter(_e=>_e.gx!==c.x||_e.gy!==c.y);if(ce.length>0){let _e=an(ce);if(_e&&(_e.gx!==c.x||_e.gy!==c.y)){Gt(c,_e.gx,_e.gy,()=>setTimeout(Jt,400));return}}setTimeout(()=>Jt(),400);return}if(ge){setTimeout(()=>Jt(),400);return}if(I.length>0){let Re=Ye,ce=Re?hn(Re.path,_):null;if(ce&&(ce.gx!==c.x||ce.gy!==c.y)){Gt(c,ce.gx,ce.gy,()=>setTimeout(Jt,400));return}let _e=Be(I,ke);if(_e&&(_e.gx!==c.x||_e.gy!==c.y)){Gt(c,_e.gx,_e.gy,()=>setTimeout(Jt,400));return}}setTimeout(()=>Jt(),400);return}if(!se&&I.length>0){if(le&&L.length>0&&!L.some(Re=>Re.gx===c.x&&Re.gy===c.y)){let Re=tt,ce=Re?hn(Re.path,_):null;if(ce&&(ce.gx!==c.x||ce.gy!==c.y)){Gt(c,ce.gx,ce.gy,()=>setTimeout(Jt,400));return}let _e=Be(I,Ce);if(_e&&(_e.gx!==c.x||_e.gy!==c.y)){Gt(c,_e.gx,_e.gy,()=>setTimeout(Jt,400));return}}if(F.length>0&&!F.some(Re=>Re.gx===c.x&&Re.gy===c.y)){let Re=Ye,ce=Re?hn(Re.path,_):null;if(ce&&(ce.gx!==c.x||ce.gy!==c.y)){Gt(c,ce.gx,ce.gy,()=>setTimeout(Jt,400));return}let _e=Be(I,ke);if(_e&&(_e.gx!==c.x||_e.gy!==c.y)){Gt(c,_e.gx,_e.gy,()=>setTimeout(Jt,400));return}}}let xe=F.length>0?I.filter(ge=>Xe.has(ge.gy*e.w+ge.gx)):null,pe=xe!=null&&xe.length>0?xe:I,ue=null;if(pe.length>0&&kt.length>0&&(ue=wn(pe),ue)){let ge=mr(e,c.x,c.y,ue.gx,ue.gy,ve,c),Re=ge?ge.length-1:1/0;(!ge||ge.length<=1||Re>_)&&(ue=an(pe))}if(!ue&&pe.length>0&&(ue=an(pe)),ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>setTimeout(Jt,400));return}setTimeout(()=>Jt(),400);return}if(z&&vs-R>20&&!gn&&I.length>0){let ae=null,xe=1/0;for(let ue of I){let Re=(ut.get(ue.gy*e.w+ue.gx)||[]).filter(ce=>ce.target.maxHp>0&&ce.target.hp/ce.target.maxHp<oe);if(Re.length>0){let ce=Math.min(...Re.map(_e=>_e.target.hp));ce<xe&&(xe=ce,ae=ue)}}if(ae){let ue=mr(e,c.x,c.y,ae.gx,ae.gy,ve,c),ge=ue?Tn(ue,_):null;if(ge&&(ge.gx!==c.x||ge.gy!==c.y)){Gt(c,ge.gx,ge.gy,()=>setTimeout(yn,600));return}}let pe=an();if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>setTimeout(yn,600));return}setTimeout(()=>Jt(),400);return}if(!ai&&!It){let Lt=function(vt){return co(c,vt,ve).filter(qt=>qt.targetUnit!=null).map(qt=>qt.targetUnit)},ae=Bt,xe=c.maxHp>0?c.hp/c.maxHp:1,pe=.35,ue=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct","bloodSuck","gnaw","vodoo","skewer"]),ge=new Set(["chakra","sacrifice"]),Re=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify","warCry","foresight","overheal","rapid"]),ce=new Set(["impale","poison","gaze","debilitate","bash","infect","curse"]),_e=new Set(["dominate","manaDrain","weaken","cripple","hex","blind","raid"]),Ot=new Set(["reanimate"]),Wt={showFloatingCombatText:oi,handleUnitDeath:On,updateUnitSlashVisibility:Ht,updateTurnUI:Nt,tryCollectPowerup:je,world:e,units:ve,reanimateDeadUnit:ga,updateUnitTileIndex:T,updateUnitPosition(vt){let Ft=re.get(vt.id);Ft&&Ft.position.copy(Pe(vt.x,vt.y))},animateKnockback(vt,Ft,qt,Mn,Zn,fn){let kn=re.get(vt.id);if(!kn){fn&&fn();return}let ns=Pe(Ft,qt).clone(),tr=Pe(Mn,Zn).clone(),Zl=performance.now(),_u=0;function vu(Ip){_u++,_u%2===0&&zt();let Mu=Math.min(1,(Ip-Zl)/Ks),Lp=Jl=>Jl*Jl*(3-2*Jl);kn.position.lerpVectors(ns,tr,Lp(Mu)),Mu<1?requestAnimationFrame(vu):(kn.position.copy(tr),fn&&fn())}requestAnimationFrame(vu)}},Et=null,xn=null,Gn=Qt||!gn&&vn;if(!Gn){for(let Ft of ae)if(!(Ft.disabled||c.mp<Ft.cost)&&ge.has(Ft.effectKey)){let Mn=co(c,Ft,ve).filter(Zn=>Zn.targetUnit&&Zn.targetUnit.maxHp>0&&Zn.targetUnit.hp/Zn.targetUnit.maxHp<.5);if(Mn.length>0){let Zn=Mn.sort((fn,kn)=>fn.targetUnit.hp-kn.targetUnit.hp)[0].targetUnit;Et=Ft,xn=Zn;break}}}if(!Et&&!Gn){let vt=ve.filter(Ft=>Ft.hp<=0);for(let Ft of ae)if(!(Ft.disabled||c.mp<Ft.cost)&&!(Ft.effectKey==="reanimate"&&!vt.length)&&Ot.has(Ft.effectKey)){Et=Ft,xn=c;break}}if(!Et&&!Gn&&(D.length>0||I.some(Ft=>(ut.get(Ft.gy*e.w+Ft.gx)||[]).length>0))){let Ft=ae.filter(qt=>!qt.disabled&&Re.has(qt.effectKey)).sort((qt,Mn)=>(Mn.level||1)-(qt.level||1));for(let qt of Ft){let Mn=c.tempBuff&&c.tempBuff.duration>0;if(qt.target==="self"){if(qt.effectKey==="bloodlust"&&c.hp/c.maxHp>.8)continue;if(!Mn){Et=qt,xn=c;break}}if(qt.target==="ally"){if(qt.effectKey==="overheal"&&c.hp/c.maxHp>.7)continue;let fn=co(c,qt,ve).filter(kn=>kn.targetUnit!=null).map(kn=>kn.targetUnit);if(fn.length>0){let kn=fn.filter(tr=>!tr.tempBuff||tr.tempBuff.duration<=0),ns=(kn.length>0?kn:fn).sort((tr,Zl)=>tr.hp-Zl.hp)[0];if(ns.tempBuff&&ns.tempBuff.duration>0||qt.effectKey==="overheal"&&ns.hp/ns.maxHp>.7)continue;Et=qt,xn=ns;break}}}}if(!Et){for(let vt of ae)if(!(vt.disabled||c.mp<vt.cost)&&ue.has(vt.effectKey)){if(vt.effectKey==="feast"&&c.hp/c.maxHp>.7||vt.effectKey==="warCry"&&c.hp/c.maxHp<.3||vt.effectKey==="berserk"&&c.hp/c.maxHp<.25||vt.effectKey==="shuriken"&&D.length>0||vt.effectKey==="judgement"&&c.hp/c.maxHp>.7)continue;let Ft=Lt(vt);if(Ft.length===0)continue;let qt=Ft.filter(fn=>fn.maxHp>0&&fn.hp/fn.maxHp<pe),Mn=qt.length>0?qt:Ft,Zn=vt.type==="spell"?Mn.reduce((fn,kn)=>{if(!fn)return kn;let ns=Me(kn,"int")-Me(fn,"int");return ns<0||ns===0&&kn.hp<fn.hp?kn:fn},null):Mn.reduce((fn,kn)=>!fn||kn.hp<fn.hp?kn:fn,null);Et=vt,xn=Zn;break}}if(!Et&&!Gn){for(let vt of ae)if(!(vt.disabled||c.mp<vt.cost)&&_e.has(vt.effectKey)){let Ft=Lt(vt),qt=Ft.length>0?Ft.reduce((Mn,Zn)=>!Mn||Zn.hp<Mn.hp?Zn:Mn,null):null;Et=vt,xn=qt;break}}if(!Et&&!Gn){for(let vt of ae)if(!(vt.disabled||c.mp<vt.cost)&&ce.has(vt.effectKey)){let qt=Lt(vt).filter(Mn=>!Mn.tempDebuff||Mn.tempDebuff.duration<=0);if(qt.length>0){let Mn=qt.reduce((Zn,fn)=>!Zn||fn.hp<Zn.hp?fn:Zn,null);Et=vt,xn=Mn;break}}}if(Et&&xn){c.mp-=Et.cost,ai=!0;let vt=Et.target==="self"?c:xn;lo(c,vt,Et,Wt,()=>setTimeout(yn,600));return}}if(yp(c,pt,kt)&&D.length>0){D.sort((xe,pe)=>xe.target.hp-pe.target.hp||xe.dist-pe.dist);let ae=D[0].target;Ma(c,ae);return}if(D.length>0){D.sort((xe,pe)=>xe.target.hp-pe.target.hp||xe.dist-pe.dist);let ae=D[0].target;Ma(c,ae);return}if(It&&nt(c.range!=null?c.range:1))return;if(!gn&&!vn&&he.size>0&&I.length>0){let ae=[];he.forEach((pe,ue)=>{ae.push({gx:ue%e.w,gy:Math.floor(ue/e.w)})});let xe=Kn(ae);if(xe){let pe=hn(xe.path,_);if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>setTimeout(yn,600));return}let ue=Be(I,ae);if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>setTimeout(yn,600));return}}}let dn=vs-R;if(dn<=20&&F.length>0&&!gn&&I.length>0&&!F.some(xe=>xe.gx===c.x&&xe.gy===c.y)){let xe=Ye,pe=xe?xe.path:null,ue=F.length>0?Math.min(...F.map(Et=>yi(c.x,c.y,Et.gx,Et.gy))):1/0,ge=new Map,Re=new Map;for(let Et of I){let xn=Et.gy*e.w+Et.gx;ge.set(xn,F.length>0?Math.min(...F.map(Gn=>yi(Et.gx,Et.gy,Gn.gx,Gn.gy))):1/0),Re.set(xn,pe?pe.findIndex(Gn=>Gn.x===Et.gx&&Gn.y===Et.gy):-1)}let ce=null,_e=-1,Ot=oe;for(let Et of I){let xn=Et.gy*e.w+Et.gx;if(ge.get(xn)>ue||(ut.get(xn)||[]).filter(Mn=>Mn.target.maxHp>0&&Mn.target.hp/Mn.target.maxHp<Ot).length===0)continue;let Ft=Re.get(xn),qt=Ft>=0?Ft:0;qt>_e&&(_e=qt,ce=Et)}if(ce&&(ce.gx!==c.x||ce.gy!==c.y)){Gt(c,ce.gx,ce.gy,()=>setTimeout(yn,600));return}let Lt=xe?hn(xe.path,_):null;if(Lt&&(Lt.gx!==c.x||Lt.gy!==c.y)){Gt(c,Lt.gx,Lt.gy,()=>setTimeout(yn,600));return}let Wt=Be(I,ke);if(Wt&&(Wt.gx!==c.x||Wt.gy!==c.y)){Gt(c,Wt.gx,Wt.gy,()=>setTimeout(yn,600));return}}if(se&&I.length>0&&!gn){let ae=null,xe=1/0;for(let pe of I){let ge=(ut.get(pe.gy*e.w+pe.gx)||[]).filter(Re=>Re.target.maxHp>0&&Re.target.hp/Re.target.maxHp<oe);if(ge.length>0){let Re=Math.min(...ge.map(ce=>ce.target.hp));Re<xe&&(xe=Re,ae=pe)}}if(ae){let pe=mr(e,c.x,c.y,ae.gx,ae.gy,ve,c),ue=pe?Tn(pe,_):null;if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>setTimeout(yn,600));return}}if(dn>20&&le&&L.length>0&&!L.some(ue=>ue.gx===c.x&&ue.gy===c.y)){let ue=Te.length>0?Te:L,ge=tt;if(ge!=null&&ge.path.length<=5){let ce=hn(ge.path,_);if(ce&&(ce.gx!==c.x||ce.gy!==c.y)){Gt(c,ce.gx,ce.gy,()=>setTimeout(yn,600));return}let _e=Be(I,ue);if(_e&&(_e.gx!==c.x||_e.gy!==c.y)){Gt(c,_e.gx,_e.gy,()=>setTimeout(yn,600));return}}}if(dn>20){let pe=an();if(pe&&yi(c.x,c.y,pe.gx,pe.gy)>0){Gt(c,pe.gx,pe.gy,()=>setTimeout(yn,600));return}setTimeout(()=>Jt(),400);return}}if(dn<=10&&F.length>0&&!gn&&I.length>0&&!F.some(xe=>xe.gx===c.x&&xe.gy===c.y)){let xe=we.length>0?we:F,pe=Ye,ue=pe?hn(pe.path,_):null;if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>setTimeout(yn,600));return}let ge=Be(I,xe);if(ge&&(ge.gx!==c.x||ge.gy!==c.y)){Gt(c,ge.gx,ge.gy,()=>setTimeout(yn,600));return}}if(c.level===1&&F.length>0&&!gn&&!F.some(xe=>xe.gx===c.x&&xe.gy===c.y)&&I.length>0){let xe=we.length>0?we:F,pe=Ye,ue=pe?hn(pe.path,_):null;if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>setTimeout(yn,600));return}let ge=Be(I,xe);if(ge&&(ge.gx!==c.x||ge.gy!==c.y)){Gt(c,ge.gx,ge.gy,()=>setTimeout(yn,600));return}}if(le&&L.length>0&&!gn&&!L.some(xe=>xe.gx===c.x&&xe.gy===c.y)&&I.length>0){let xe=pt.filter(Ot=>Ot.maxHp>0&&Ot.hp/Ot.maxHp<oe),pe=null,ue=1/0;for(let Ot of I){let Wt=(ut.get(Ot.gy*e.w+Ot.gx)||[]).find(Et=>xe.some(xn=>xn.id===Et.target.id));Wt&&Wt.target.hp<ue&&(ue=Wt.target.hp,pe=Ot)}if(pe){let Ot=mr(e,c.x,c.y,pe.gx,pe.gy,ve,c),Lt=Ot?Tn(Ot,_):null;if(Lt&&(Lt.gx!==c.x||Lt.gy!==c.y)){Gt(c,Lt.gx,Lt.gy,()=>setTimeout(yn,600));return}}let ge=Te.length>0?Te:L,Re=tt,ce=Re?hn(Re.path,_):null;if(ce&&(ce.gx!==c.x||ce.gy!==c.y)){Gt(c,ce.gx,ce.gy,()=>setTimeout(yn,600));return}let _e=Be(I,ge);if(_e&&(_e.gx!==c.x||_e.gy!==c.y)){Gt(c,_e.gx,_e.gy,()=>setTimeout(yn,600));return}}if(cn&&pt.length>0&&!gn&&I.length>0){if(!vn&&he.size>0){let xe=[];he.forEach((ue,ge)=>{xe.push({gx:ge%e.w,gy:Math.floor(ge/e.w)})});let pe=Kn(xe);if(pe){let ue=hn(pe.path,_);if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>setTimeout(yn,600));return}let ge=Be(I,xe);if(ge&&(ge.gx!==c.x||ge.gy!==c.y)){Gt(c,ge.gx,ge.gy,()=>setTimeout(yn,600));return}}}let ae=Ei();if(ae&&(ae.gx!==c.x||ae.gy!==c.y)){Gt(c,ae.gx,ae.gy,()=>setTimeout(yn,600));return}}!It&&nt(Vt)||setTimeout(()=>Jt(),400)}function Nn(){for(Gi.length=0;Di.children.length;){let h=Di.children[0];Di.remove(h),h.geometry!==ba&&h.geometry!==Sa&&h.geometry.dispose(),h.material.dispose()}zt()}let ls=new Set;function Xl(h){return h?(h.summonedSkills&&h.summonedSkills.length>0?h.summonedSkills:h.class&&oa[h.class]?oa[h.class]:[]).map(_=>({..._,disabled:_.disabled===!0||h.level<(_.level||1)||_.hpCost&&h.hp<_.hpCost||_.cost!=null&&h.mp<_.cost||_.effectKey==="reanimate"&&j<=0})):[]}function co(h,c,_){let b=[],P=c.range||0,I=h.x,D=h.y;if(c.target==="self")return b.push({gx:I,gy:D,targetUnit:null}),b;for(let F of _)if(!(F.hp<=0||Math.abs(I-F.x)+Math.abs(D-F.y)>P)){if(c.target==="enemy"){if(F.player===h.player)continue}else if(c.target==="ally"&&F.player!==h.player)continue;P>=2&&!Ms(e,I,D,F.x,F.y)||b.push({gx:F.x,gy:F.y,targetUnit:F})}return b}function hu(h,c,_){let b=c.range||0;if(c.target==="self"){_(h.x,h.y);return}Uf(e,h.x,h.y,b).forEach((I,D)=>{let F=D%e.w,L=D/e.w|0;b>=2&&!Ms(e,h.x,h.y,F,L)||_(F,L)})}function Tv(h,c){let _=[];return hu(h,c,(b,P)=>_.push({gx:b,gy:P})),_}function _p(h,c){let _=[];c.target==="self"?(ls=new Set([`${h.x},${h.y}`]),_.push({gx:h.x,gy:h.y})):(ls=new Set,hu(h,c,(b,P)=>{_.push({gx:b,gy:P});let I=ee(b,P);I&&(c.target==="enemy"&&I.player!==h.player&&ls.add(`${b},${P}`),c.target==="ally"&&I.player===h.player&&ls.add(`${b},${P}`))})),Nn(),_.forEach(({gx:b,gy:P})=>{let D=(Qn+e.height[P][b]*.35)/2+Qn/2,F=b*bt-Le+bt/2,L=P*bt-He+bt/2,oe=D+.01,J=new Pn({color:8926122,transparent:!0,opacity:.4,side:An}),se=new $e(ba,J);se.rotation.x=-Math.PI/2,se.position.set(F,oe,L),Di.add(se),Gi.push(J);let z=new Pn({color:11167436,transparent:!0,opacity:.7,side:An}),le=new $e(Sa,z);le.rotation.x=-Math.PI/2,le.position.set(F,oe+.01,L),le.userData.gx=b,le.userData.gy=P,Di.add(le),Gi.push(z)})}let uu=.82,du=1.02,ba=new ss(du,du),Sa=new ss(uu,uu);function vp(h){Nn(),h.forEach(({gx:c,gy:_})=>{let P=(Qn+e.height[_][c]*.35)/2+Qn/2,I=c*bt-Le+bt/2,D=_*bt-He+bt/2,F=P+.01,L=new Pn({color:2271812,transparent:!0,opacity:.4,side:An}),oe=new $e(ba,L);oe.rotation.x=-Math.PI/2,oe.position.set(I,F,D),Di.add(oe),Gi.push(L);let J=new Pn({color:4508774,transparent:!0,opacity:.7,side:An}),se=new $e(Sa,J);se.rotation.x=-Math.PI/2,se.position.set(I,F+.01,D),se.userData.gx=c,se.userData.gy=_,Di.add(se),Gi.push(J)}),zt()}function ql(h){Nn(),h.forEach((c,_)=>{if(c===0)return;let b=_%e.w,P=_/e.w|0,D=(Qn+e.height[P][b]*.35)/2+Qn/2,F=b*bt-Le+bt/2,L=P*bt-He+bt/2,oe=D+.01,J=new Pn({color:3381759,transparent:!0,opacity:.35,side:An}),se=new $e(ba,J);se.rotation.x=-Math.PI/2,se.position.set(F,oe,L),Di.add(se),Gi.push(J);let z=new Pn({color:6730751,transparent:!0,opacity:.65,side:An}),le=new $e(Sa,z);le.rotation.x=-Math.PI/2,le.position.set(F,oe+.01,L),Di.add(le),Gi.push(z)}),zt()}function Mp(h){Nn(),h.forEach((c,_)=>{if(c===0)return;let b=_%e.w,P=_/e.w|0,D=(Qn+e.height[P][b]*.35)/2+Qn/2,F=b*bt-Le+bt/2,L=P*bt-He+bt/2,oe=D+.01,J=new Pn({color:10035746,transparent:!0,opacity:.4,side:An}),se=new $e(ba,J);se.rotation.x=-Math.PI/2,se.position.set(F,oe,L),Di.add(se),Gi.push(J);let z=new Pn({color:13386820,transparent:!0,opacity:.7,side:An}),le=new $e(Sa,z);le.rotation.x=-Math.PI/2,le.position.set(F,oe+.01,L),Di.add(le),Gi.push(z)}),zt()}let Ps=new Sl,Is=new Ve;function fu(h){let c=h.object;if(c.isInstancedMesh&&c.userData.tileGridGround){let b=h.instanceId;return b==null||b<0?null:{gx:b%e.w,gy:b/e.w|0}}let _=c;for(;_&&(_.userData.gx==null||_.userData.gy==null);)_=_.parent;return _&&_.userData.gx!=null?{gx:_.userData.gx,gy:_.userData.gy}:null}function ho(h,c){let _=t.getBoundingClientRect();return Is.x=(h-_.left)/_.width*2-1,Is.y=-((c-_.top)/_.height)*2+1,{x:Is.x,y:Is.y}}function bp(h,c){if(ln)return;Is.x=h,Is.y=c,Ps.setFromCamera(Is,a);let _=Ps.intersectObjects(Q.children,!0);if(_.length===0)return;let b,P;for(let D of _){let F=fu(D);if(F){b=F.gx,P=F.gy;break}}if(b==null||P==null)return;if($==="draft"&&ti){let D=P*e.w+b;En.has(D)&&Ol(b,P);return}if($!=="playing"||W==="cvcpu")return;if(ws&&ni){let D=it[at],F=Je(D),L=F&&F.hp>0?F:null;if(L&&b===L.x&&P===L.y){ws=!1,ni=null,ls=new Set,Nn(),gn?In=new Map:(In=Rl(e,L.x,L.y,Me(L,"agi"),ve,L),ql(In)),Nt();return}let oe=`${b},${P}`;if(!ls.has(oe))return;if(!L||L.mp<ni.cost){ws=!1,ni=null,Nn(),Nt();return}let J=ee(b,P);if(ni.target==="enemy"&&(!J||J.player===L.player)||ni.target==="ally"&&J&&J.player!==L.player||ni.target==="self"&&(b!==L.x||P!==L.y)||ni.target==="enemy"&&!J)return;L.mp-=ni.cost,ai=!0;let se={showFloatingCombatText:oi,handleUnitDeath:On,updateUnitSlashVisibility:Ht,updateTurnUI:Nt,tryCollectPowerup:je,world:e,units:ve,reanimateDeadUnit:ga,updateUnitTileIndex:T,updateUnitPosition(le){let we=re.get(le.id);we&&we.position.copy(Pe(le.x,le.y))},animateKnockback(le,we,Te,Xe,ke,Ce){let Ye=re.get(le.id);if(!Ye){Ce&&Ce();return}let tt=Pe(we,Te).clone(),Bt=Pe(Xe,ke).clone(),It=performance.now(),At=0;function Yt(Vt){At++,At%2===0&&zt();let Ln=Math.min(1,(Vt-It)/Ks),cn=pt=>pt*pt*(3-2*pt);Ye.position.lerpVectors(tt,Bt,cn(Ln)),Ln<1?requestAnimationFrame(Yt):(Ye.position.copy(Bt),Ce&&Ce())}requestAnimationFrame(Yt)}},z=ni.target==="self"?L:J||null;W==="online"&&L.player===Y&&typeof rn=="function"&&(rn({type:"requestRender"}),er({type:"skill",unitId:L.id,targetId:z?z.id:void 0,effectKey:ni.effectKey})),lo(L,z,ni,se,()=>{Nn(),ws=!1,ni=null,ls=new Set,gn&&L.hp>0?Jt():Nt()});return}if(As){let D=it[at],F=Je(D);if(W==="online"&&F&&F.player!==Y)return;let L=re.get(D);if(F&&L&&Li.length>0){let oe=Pe(F.x,F.y),J=Pe(b,P),se=J.x-oe.x,z=J.z-oe.z,le=se*se+z*z>1e-6?Math.atan2(se,z):L.rotation.y;L.rotation.y=Hh(le)}setTimeout(()=>Jt(),400);return}if(mn!=null&&ji){let D=Je(mn);if(!D||D.player!==G||W==="online"&&D.player!==Y)return;let F=P*e.w+b,L=ee(b,P);if(L&&L.id===it[at]&&L.player===G&&(W!=="online"||L.player===Y)){ji=!1,mn=L.id,gn?(Nn(),In=new Map):(In=Rl(e,L.x,L.y,Me(L,"agi"),ve,L),ql(In)),Nt();return}if(!In.has(F)||In.get(F)===0)return;L&&L.player!==G&&Ma(D,L);return}let I=ee(b,P);if(I){if(I.id===it[at]&&I.player===G&&(W!=="online"||I.player===Y)){da(),mn=I.id,ji=!1,gn?(Nn(),In=new Map):(In=Rl(e,b,P,Me(I,"agi"),ve,I),ql(In)),Nt();return}Nn(),In=new Map,ji=!1,Hf(I),Nt();return}if(da(),mn!=null){let le=function(){if(z>=J.length){let At=D.x,Yt=D.y;D.x=J[J.length-1].x,D.y=J[J.length-1].y,T(D,At,Yt),je(D),ln=!1,Tt(se),Ui(),In=new Map,gn=!0,W==="online"&&D.player===Y&&typeof rn=="function"&&(rn({type:"move",unitId:D.id,toGx:D.x,toGy:D.y}),Vl=!1,hp()),ai&&D.hp>0?setTimeout(()=>Jt(),400):setTimeout(()=>Nt(),400);return}let we=J[z-1],Te=J[z],Xe=Pe(we.x,we.y).clone(),ke=Pe(Te.x,Te.y).clone(),Ce=ke.x-Xe.x,Ye=ke.z-Xe.z;Ce*Ce+Ye*Ye>1e-6&&(se.rotation.y=Math.atan2(Ce,Ye));let tt=performance.now(),Bt=0;function It(At){Bt++,Bt%2===0&&zt();let Yt=Math.min(1,(At-tt)/Ks),Ln=(cn=>cn*cn*(3-2*cn))(Yt);if(se.position.lerpVectors(Xe,ke,Ln),qe(se,Ln),m){let cn=a.position.distanceTo(d),pt=cn<.1?o:cn;p.copy(a.position).sub(d).normalize(),p.lengthSq()<.01&&p.copy(u).normalize(),d.lerp(se.position,l),a.position.copy(d).add(p.clone().multiplyScalar(pt)),a.lookAt(d)}Yt<1?requestAnimationFrame(It):(z++,le())}requestAnimationFrame(It)};if(ji)return;let D=Je(mn);if(!D||D.player!==G||W==="online"&&D.player!==Y)return;let F=P*e.w+b;if(!In.has(F)||In.get(F)===0)return;let L=ee(b,P);if(L!=null&&L.id!==D.id||ln||gn)return;let J=mr(e,D.x,D.y,b,P,ve,D);if(!J||J.length<=1)return;W==="online"&&D.player===Y&&typeof rn=="function"&&(rn({type:"requestRender"}),Vl=!0),mn=null,Nn(),ln=!0,m=!0,Ui(D.id);let se=re.get(D.id),z=1;le()}}function pu(h){E.x=h.clientX,E.y=h.clientY,A=h.isTouch===!0,S=h.ctrlKey,v=ho(h.clientX,h.clientY),t.style.cursor=(h.ctrlKey,"grabbing")}function Yl(h){return h.touches&&h.touches.length>0?{clientX:h.touches[0].clientX,clientY:h.touches[0].clientY}:h.changedTouches&&h.changedTouches.length>0?{clientX:h.changedTouches[0].clientX,clientY:h.changedTouches[0].clientY}:{clientX:h.clientX,clientY:h.clientY}}function mu(h){if(!h||h.length<2)return 0;let c=h[0],_=h[1];return Math.hypot(_.clientX-c.clientX,_.clientY-c.clientY)}function Sp(h){if(h.touches.length===2){te=mu(h.touches),v=null;return}if(h.touches.length!==1)return;te=null;let c=Yl(h);pu({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1,isTouch:!0})}function Ep(h){if(h.touches.length===2){h.preventDefault();let _=mu(h.touches);if(te!=null&&te>0){let b=_-te,P=a.position.distanceTo(d),I=Math.max(q,Math.min(ie,P-b*B));x.copy(d).sub(a.position).normalize(),a.position.copy(d).sub(x.multiplyScalar(I)),a.lookAt(d),Rs=performance.now()}te=_;return}if(te=null,h.touches.length!==1)return;h.preventDefault();let c=Yl(h);gu({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1})}function Tp(h){if(h.touches.length<2&&(te=null),h.touches.length===2||h.changedTouches.length===0)return;A=!1;let c=Yl(h);$l({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1})}function gu(h){if(As){Kf(h.clientX,h.clientY);return}if(v==null)return;let c=h.clientX-E.x,_=h.clientY-E.y;if(!M&&!y&&(Math.abs(c)>w||Math.abs(_)>w)&&(h.ctrlKey||S?(y=!0,m=!1):(M=!0,m=!1)),y){X.copy(a.position).sub(d);let b=X.length();if(b<.001)return;let P=Math.atan2(X.x,X.z),I=Math.asin(Math.max(-1,Math.min(1,X.y/b)));P-=c*O,I+=_*O,I=Math.max(U,Math.min(N,I)),X.x=b*Math.cos(I)*Math.sin(P),X.y=b*Math.sin(I),X.z=b*Math.cos(I)*Math.cos(P),a.position.copy(d).add(X),a.lookAt(d),E.x=h.clientX,E.y=h.clientY,Rs=performance.now()}else if(M){let b=ho(h.clientX,h.clientY);f.setFromNormalAndCoplanarPoint(new k(0,1,0),new k(0,d.y,0)),Ps.setFromCamera(new Ve(v.x,v.y),a),Ps.ray.intersectPlane(f,g);let P=g.clone();Ps.setFromCamera(new Ve(b.x,b.y),a),Ps.ray.intersectPlane(f,g);let I=P.sub(g);A&&I.multiplyScalar(Z),d.add(I),a.position.add(I),a.lookAt(d),v={x:b.x,y:b.y},Rs=performance.now()}}function $l(h){if(v!=null&&!M&&!y){let c=ho(h.clientX,h.clientY);bp(c.x,c.y)}v=null,M=!1,y=!1,S=!1,t.style.cursor="grab"}function wp(h){h.preventDefault();let c=a.position.distanceTo(d),_=Math.max(q,Math.min(ie,c+h.deltaY*me));x.copy(d).sub(a.position).normalize(),a.position.copy(d).sub(x.multiplyScalar(_)),a.lookAt(d),Rs=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",pu),t.addEventListener("mousemove",gu),t.addEventListener("mouseup",$l),t.addEventListener("mouseleave",$l),t.addEventListener("touchstart",Sp,{passive:!0}),t.addEventListener("touchmove",Ep,{passive:!1}),t.addEventListener("touchend",Tp,{passive:!0}),t.addEventListener("wheel",wp,{passive:!1});function yu(){let h=t.clientWidth,c=t.clientHeight;a.aspect=h/c,a.updateProjectionMatrix(),ii.setSize(h,c),ii.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",yu);let ii=new Va({antialias:!1});ii.setSize(t.clientWidth,t.clientHeight),ii.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),ii.shadowMap.enabled=!0,ii.shadowMap.type=wh,t.appendChild(ii.domElement),yu();let uo=document.createElement("div");uo.id="combat-text-layer",t.appendChild(uo);let ts=new k,Ls=new k,Ap=1400;function oi(h,c,_,b,P){let I=document.createElement("div");I.className="combat-text-float "+(b?"miss":"damage")+(P?" "+P:""),I.textContent=_,I.style.position="absolute",uo.appendChild(I);let D=P==="skill-name"?1.7:1.2,F=performance.now();function L(){ts.copy(Pe(h,c)),ts.y+=D,ts.project(a);let se=t.clientWidth,z=t.clientHeight;I.style.left=(ts.x*.5+.5)*se+"px",I.style.top=(1-(ts.y*.5+.5))*z+"px"}let oe=0;function J(){oe%2===0&&L(),oe++,performance.now()-F<Ap?requestAnimationFrame(J):I.remove()}requestAnimationFrame(J)}let Rp=1500;function Cp(h,c){let _=document.createElement("div");_.className="combat-text-float "+(c||"levelup"),_.textContent="LEVEL UP!",_.style.position="absolute",uo.appendChild(_);let b=performance.now(),P=0;function I(){ts.copy(Pe(h.x,h.y)),ts.y+=1.2,ts.project(a);let F=t.clientWidth,L=t.clientHeight;_.style.left=(ts.x*.5+.5)*F+"px",_.style.top=(1-(ts.y*.5+.5))*L+"px"}function D(){P%2===0&&I(),P++,performance.now()-b<Rp?requestAnimationFrame(D):_.remove()}requestAnimationFrame(D)}function On(h,c,_){if(T(h,h.x,h.y),j++,h.deathOrder=++ye,W==="online"&&typeof rn=="function"&&!(_&&_.skipSync)&&rn({type:"unitDeath",unitId:h.id,killerId:c?.id}),pv(c,h,ve),console.log("[DEATH]",`${h.name} (${h.class}, P${h.player})`,`at (${h.x},${h.y})`,`Lv.${h.level}`),oi(h.x,h.y,"DEAD",!1),ve.filter(F=>F.summonedBy===h.id&&F.hp>0).map(F=>F.id).forEach(F=>{let L=Je(F);L&&(L.hp=0,On(L,null,{skipSync:!0}))}),$==="playing"&&it.length>0&&h.id===it[at]){let F=h.id;queueMicrotask(()=>{if($!=="playing"||it.length===0||it[at]!==F)return;let L=Je(F);L&&L.hp>0||Jt()})}let P=re.get(h.id);if(!P){Ui(),xu();return}let I=performance.now();function D(F){zt();let L=F-I,oe=Math.min(1,L/ei),J=oe*oe;P.rotation.x=J*Math.PI*.5,oe<1?requestAnimationFrame(D):(n.remove(P),re.delete(h.id),Ui(),xu())}requestAnimationFrame(D)}function xu(){if($!=="playing")return;let h=ve.some(_=>_.player===1&&_.hp>0&&!_.summonedBy),c=ve.some(_=>_.player===2&&_.hp>0&&!_.summonedBy);h?c||Kl(1):Kl(2)}function Pp(){let h=lu(),c=new Set(h.map(D=>D.gy*e.w+D.gx)),_=ve.filter(D=>D.hp>0&&D.player===1&&!D.summonedBy&&c.has(D.y*e.w+D.x)).length,b=ve.filter(D=>D.hp>0&&D.player===2&&!D.summonedBy&&c.has(D.y*e.w+D.x)).length,P=null,I="";if(_>b)P=1,I=`Time's up! ${Ke(1)} wins! (${_} vs ${b} units on center base)`;else if(b>_)P=2,I=`Time's up! ${Ke(2)} wins! (${b} vs ${_} units on center base)`;else{let D=ve.filter(L=>L.hp>0&&L.player===1&&!L.summonedBy).reduce((L,oe)=>L+oe.hp,0),F=ve.filter(L=>L.hp>0&&L.player===2&&!L.summonedBy).reduce((L,oe)=>L+oe.hp,0);D>F?(P=1,I=`Time's up! Draw on center \u2014 ${Ke(1)} wins on total HP (${D} vs ${F})`):F>D?(P=2,I=`Time's up! Draw on center \u2014 ${Ke(2)} wins on total HP (${F} vs ${D})`):I=`Draw! (equal units on center: ${_}, equal HP)`}Kl(P,I)}function Kl(h,c){Vi(),mv(ve,h),$="gameover",document.getElementById("turn-menu").style.display="none",da(),Nn();let _=document.getElementById("game-over-overlay"),b=document.getElementById("game-over-title"),P=document.getElementById("game-over-cards"),I=document.getElementById("game-over-class-record");I&&(I.style.display="none",I.innerHTML=""),b.textContent=c??`${Ke(h)} wins!`;let D=ve.filter(F=>F.player===(h??1));if(P.innerHTML=D.map(F=>{let L=F,oe=F.level>=3?" level-3":F.level>=2?" level-2":"",J=L.maxHp>0&&L.hp/L.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${oe}${J}">
          <img class="game-over-card-image" src="${aa[F.class]||""}" alt="${L.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${L.name}</div>
            <div class="game-over-card-meta">Lv.${L.level} ${L.class} \u2014 HP ${L.hp}/${L.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${L.hp}/${L.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${L.mp}/${L.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${Me(L,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${Me(L,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${Me(L,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${Me(L,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${Me(L,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${Me(L,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${L.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),_.classList.add("visible"),W==="cvcpu"){if(on++,I&&bs&&on>=_t){let F=vi.map(L=>{let oe=as[L],J=oe.wins+oe.losses||1,se=oe.wins+oe.losses>0?(oe.wins/J*100).toFixed(1)+"%":"\u2014",z=oe.wins+oe.losses>0?(oe.losses/J*100).toFixed(1)+"%":"\u2014";return{class:L,battles:oe.battles,kills:oe.kills,deaths:oe.deaths,wins:oe.wins,losses:oe.losses,winRate:se,lossRate:z}});I.innerHTML=`
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
              ${F.map(L=>`
                <tr>
                  <td class="class-name">${L.class}</td>
                  <td>${L.battles}</td>
                  <td>${L.kills}</td>
                  <td>${L.deaths}</td>
                  <td>${L.wins}</td>
                  <td>${L.losses}</td>
                  <td>${L.winRate}</td>
                  <td>${L.lossRate}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `,I.style.display="block"}on<_t&&setTimeout(()=>{_.classList.remove("visible"),be(),ma()},2e3)}}function wr(h=0){requestAnimationFrame(wr),Rs===0&&(Rs=h);let c=h-Rs>500;wr.frameCount=(typeof wr.frameCount=="number"?wr.frameCount:0)+1;let _=()=>{if(fa){let b=.6+.4*Math.sin(h*.004);for(let P=0;P<Gi.length;P++){let I=P%2===0?.4:.7;Gi[P].opacity=I*b}ii.render(n,a),fa=!1}};c?h-kh>=100&&(kh=h,fa=!0,_()):(wr.frameCount%2===0&&(fa=!0),_())}wr()}Sv();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
