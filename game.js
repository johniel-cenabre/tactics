var wh="160";var kp=0,Eu=1,Hp=2;var ld=1,Ah=2,gs=3,Xs=0,Mi=1,In=2;var Vs=0,Zr=1,Tu=2,wu=3,Au=4,zp=5,lr=100,Vp=101,Gp=102,Ru=103,Cu=104,Wp=200,Xp=201,qp=202,Yp=203,Nc=204,Bc=205,$p=206,Kp=207,Zp=208,Jp=209,jp=210,Qp=211,em=212,tm=213,nm=214,im=0,sm=1,rm=2,Wo=3,am=4,om=5,lm=6,cm=7,cd=0,hm=1,um=2,Gs=0,fm=1,dm=2,pm=3,mm=4,gm=5,ym=6;var hd=300,Qr=301,ea=302,Oc=303,Fc=304,Tl=306,Oa=1e3,Zi=1001,kc=1002,mi=1003,Pu=1004;var Ql=1005;var Oi=1006,xm=1007;var Fa=1008;var Ws=1009,_m=1010,vm=1011,Rh=1012,ud=1013,Hs=1014,zs=1015,ka=1016,fd=1017,dd=1018,hr=1020,Mm=1021,Ji=1023,bm=1024,Sm=1025,ur=1026,ta=1027,Em=1028,pd=1029,Tm=1030,md=1031,gd=1033,ec=33776,tc=33777,nc=33778,ic=33779,Iu=35840,Lu=35841,Du=35842,Uu=35843,yd=36196,Nu=37492,Bu=37496,Ou=37808,Fu=37809,ku=37810,Hu=37811,zu=37812,Vu=37813,Gu=37814,Wu=37815,Xu=37816,qu=37817,Yu=37818,$u=37819,Ku=37820,Zu=37821,sc=36492,Ju=36494,ju=36495,wm=36283,Qu=36284,ef=36285,tf=36286;var Xo=2300,qo=2301,rc=2302,nf=2400,sf=2401,rf=2402;var xd=3e3,fr=3001,Am=3200,Rm=3201,_d=0,Cm=1,Fi="",ai="srgb",xs="srgb-linear",Ch="display-p3",wl="display-p3-linear",Yo="linear",Mn="srgb",$o="rec709",Ko="p3";var Cr=7680;var af=519,Pm=512,Im=513,Lm=514,vd=515,Dm=516,Um=517,Nm=518,Bm=519,of=35044;var lf="300 es",Hc=1035,ys=2e3,Zo=2001,qs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ac=Math.PI/180,zc=180/Math.PI;function oa(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hi[i&255]+hi[i>>8&255]+hi[i>>16&255]+hi[i>>24&255]+"-"+hi[e&255]+hi[e>>8&255]+"-"+hi[e>>16&15|64]+hi[e>>24&255]+"-"+hi[t&63|128]+hi[t>>8&255]+"-"+hi[t>>16&255]+hi[t>>24&255]+hi[n&255]+hi[n>>8&255]+hi[n>>16&255]+hi[n>>24&255]).toLowerCase()}function fi(i,e,t){return Math.max(e,Math.min(t,i))}function Om(i,e){return(i%e+e)%e}function oc(i,e,t){return(1-t)*i+t*e}function cf(i){return(i&i-1)===0&&i!==0}function Vc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ta(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(fi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class i{constructor(e,t,n,s,r,a,o,l,d){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,d)}set(e,t,n,s,r,a,o,l,d){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],d=n[1],h=n[4],p=n[7],u=n[2],m=n[5],x=n[8],M=s[0],y=s[3],g=s[6],S=s[1],v=s[4],A=s[7],O=s[2],D=s[5],N=s[8];return r[0]=a*M+o*S+l*O,r[3]=a*y+o*v+l*D,r[6]=a*g+o*A+l*N,r[1]=d*M+h*S+p*O,r[4]=d*y+h*v+p*D,r[7]=d*g+h*A+p*N,r[2]=u*M+m*S+x*O,r[5]=u*y+m*v+x*D,r[8]=u*g+m*A+x*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8];return t*a*h-t*o*d-n*r*h+n*o*l+s*r*d-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8],p=h*a-o*d,u=o*l-h*r,m=d*r-a*l,x=t*p+n*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=p*M,e[1]=(s*d-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=m*M,e[7]=(n*l-d*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),d=Math.sin(r);return this.set(n*l,n*d,-n*(l*a+d*o)+a+e,-s*d,s*l,-s*(-d*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lc.makeScale(e,t)),this}rotate(e){return this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lc=new Ut;function Md(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fm(){let i=Jo("canvas");return i.style.display="block",i}var hf={};function La(i){i in hf||(hf[i]=!0,console.warn(i))}var uf=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ff=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),go={[xs]:{transfer:Yo,primaries:$o,toReference:i=>i,fromReference:i=>i},[ai]:{transfer:Mn,primaries:$o,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[wl]:{transfer:Yo,primaries:Ko,toReference:i=>i.applyMatrix3(ff),fromReference:i=>i.applyMatrix3(uf)},[Ch]:{transfer:Mn,primaries:Ko,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ff),fromReference:i=>i.applyMatrix3(uf).convertLinearToSRGB()}},km=new Set([xs,wl]),on={enabled:!0,_workingColorSpace:xs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!km.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=go[e].toReference,s=go[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return go[i].primaries},getTransfer:function(i){return i===Fi?Yo:go[i].transfer}};function Jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pr,jo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=Jo("canvas")),Pr.width=e.width,Pr.height=e.height;let n=Pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jr(t[n]/255)*255):t[n]=Jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hm=0,Qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=oa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hc(s[a].image)):r.push(hc(s[a]))}else r=hc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zm=0,ki=class i extends qs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zi,s=Zi,r=Oi,a=Fa,o=Ji,l=Ws,d=i.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=oa(),this.name="",this.source=new Qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(La("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===fr?ai:Fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oa:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oa:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return La("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ai?fr:xd}set encoding(e){La("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fr?ai:Fi}};ki.DEFAULT_IMAGE=null;ki.DEFAULT_MAPPING=hd;ki.DEFAULT_ANISOTROPY=1;var Qn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,d=l[0],h=l[4],p=l[8],u=l[1],m=l[5],x=l[9],M=l[2],y=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+M)<.1&&Math.abs(x+y)<.1&&Math.abs(d+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(d+1)/2,A=(m+1)/2,O=(g+1)/2,D=(h+u)/4,N=(p+M)/4,Q=(x+y)/4;return v>A&&v>O?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=D/n,r=N/n):A>O?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=D/s,r=Q/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=N/r,s=Q/r),this.set(n,s,r,t),this}let S=Math.sqrt((y-x)*(y-x)+(p-M)*(p-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(y-x)/S,this.y=(p-M)/S,this.z=(u-h)/S,this.w=Math.acos((d+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gc=class extends qs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qn(0,0,e,t),this.scissorTest=!1,this.viewport=new Qn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(La("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fr?ai:Fi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ki(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_s=class extends Gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},el=class extends ki{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mi,this.minFilter=mi,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wc=class extends ki{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mi,this.minFilter=mi,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rs=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],d=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],m=r[a+1],x=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=d,e[t+2]=h,e[t+3]=p;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=x,e[t+3]=M;return}if(p!==M||l!==u||d!==m||h!==x){let y=1-o,g=l*u+d*m+h*x+p*M,S=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let O=Math.sqrt(v),D=Math.atan2(O,g*S);y=Math.sin(y*D)/O,o=Math.sin(o*D)/O}let A=o*S;if(l=l*y+u*A,d=d*y+m*A,h=h*y+x*A,p=p*y+M*A,y===1-o){let O=1/Math.sqrt(l*l+d*d+h*h+p*p);l*=O,d*=O,h*=O,p*=O}}e[t]=l,e[t+1]=d,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],d=n[s+2],h=n[s+3],p=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*p+l*m-d*u,e[t+1]=l*x+h*u+d*p-o*m,e[t+2]=d*x+h*m+o*u-l*p,e[t+3]=h*x-o*p-l*u-d*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,d=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*p+d*m*x,this._y=d*m*p-u*h*x,this._z=d*h*x+u*m*p,this._w=d*h*p-u*m*x;break;case"YXZ":this._x=u*h*p+d*m*x,this._y=d*m*p-u*h*x,this._z=d*h*x-u*m*p,this._w=d*h*p+u*m*x;break;case"ZXY":this._x=u*h*p-d*m*x,this._y=d*m*p+u*h*x,this._z=d*h*x+u*m*p,this._w=d*h*p-u*m*x;break;case"ZYX":this._x=u*h*p-d*m*x,this._y=d*m*p+u*h*x,this._z=d*h*x-u*m*p,this._w=d*h*p+u*m*x;break;case"YZX":this._x=u*h*p+d*m*x,this._y=d*m*p+u*h*x,this._z=d*h*x-u*m*p,this._w=d*h*p-u*m*x;break;case"XZY":this._x=u*h*p-d*m*x,this._y=d*m*p-u*h*x,this._z=d*h*x+u*m*p,this._w=d*h*p+u*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],d=t[2],h=t[6],p=t[10],u=n+o+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-d)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+d)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-d)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+d)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fi(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,d=t._z,h=t._w;return this._x=n*h+a*o+s*d-r*l,this._y=s*h+a*l+r*o-n*d,this._z=r*h+a*d+n*l-s*o,this._w=a*h-n*o-s*l-r*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let d=Math.sqrt(l),h=Math.atan2(d,o),p=Math.sin((1-t)*h)/d,u=Math.sin(t*h)/d;return this._w=a*p+this._w*u,this._x=n*p+this._x*u,this._y=s*p+this._y*u,this._z=r*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(df.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,d=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*d+a*p-o*h,this.y=n+l*h+o*d-r*p,this.z=s+l*p+r*h-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(fi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uc=new F,df=new rs,vs=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qi):qi.fromBufferAttribute(r,a),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),xo.subVectors(this.max,wa),Ir.subVectors(e.a,wa),Lr.subVectors(e.b,wa),Dr.subVectors(e.c,wa),Ns.subVectors(Lr,Ir),Bs.subVectors(Dr,Lr),ir.subVectors(Ir,Dr);let t=[0,-Ns.z,Ns.y,0,-Bs.z,Bs.y,0,-ir.z,ir.y,Ns.z,0,-Ns.x,Bs.z,0,-Bs.x,ir.z,0,-ir.x,-Ns.y,Ns.x,0,-Bs.y,Bs.x,0,-ir.y,ir.x,0];return!fc(t,Ir,Lr,Dr,xo)||(t=[1,0,0,0,1,0,0,0,1],!fc(t,Ir,Lr,Dr,xo))?!1:(_o.crossVectors(Ns,Bs),t=[_o.x,_o.y,_o.z],fc(t,Ir,Lr,Dr,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(us),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},us=[new F,new F,new F,new F,new F,new F,new F,new F],qi=new F,yo=new vs,Ir=new F,Lr=new F,Dr=new F,Ns=new F,Bs=new F,ir=new F,wa=new F,xo=new F,_o=new F,sr=new F;function fc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){sr.fromArray(i,r);let o=s.x*Math.abs(sr.x)+s.y*Math.abs(sr.y)+s.z*Math.abs(sr.z),l=e.dot(sr),d=t.dot(sr),h=n.dot(sr);if(Math.max(-Math.max(l,d,h),Math.min(l,d,h))>o)return!1}return!0}var Vm=new vs,Aa=new F,dc=new F,Ys=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Aa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(dc)),this.expandByPoint(Aa.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fs=new F,pc=new F,vo=new F,Os=new F,mc=new F,Mo=new F,gc=new F,Ha=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fs.copy(this.origin).addScaledVector(this.direction,t),fs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pc.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),Os.copy(this.origin).sub(pc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(vo),o=Os.dot(this.direction),l=-Os.dot(vo),d=Os.lengthSq(),h=Math.abs(1-a*a),p,u,m,x;if(h>0)if(p=a*l-o,u=a*o-l,x=r*h,p>=0)if(u>=-x)if(u<=x){let M=1/h;p*=M,u*=M,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+d}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+d;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+d;else u<=-x?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+d):u<=x?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+d):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+d);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(pc).addScaledVector(vo,u),m}intersectSphere(e,t){fs.subVectors(e.center,this.origin);let n=fs.dot(this.direction),s=fs.dot(fs)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,d=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return d>=0?(n=(e.min.x-u.x)*d,s=(e.max.x-u.x)*d):(n=(e.max.x-u.x)*d,s=(e.min.x-u.x)*d),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fs)!==null}intersectTriangle(e,t,n,s,r){mc.subVectors(t,e),Mo.subVectors(n,e),gc.crossVectors(mc,Mo);let a=this.direction.dot(gc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Os.subVectors(this.origin,e);let l=o*this.direction.dot(Mo.crossVectors(Os,Mo));if(l<0)return null;let d=o*this.direction.dot(mc.cross(Os));if(d<0||l+d>a)return null;let h=-o*Os.dot(gc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bn=class i{constructor(e,t,n,s,r,a,o,l,d,h,p,u,m,x,M,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,d,h,p,u,m,x,M,y)}set(e,t,n,s,r,a,o,l,d,h,p,u,m,x,M,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=d,g[6]=h,g[10]=p,g[14]=u,g[3]=m,g[7]=x,g[11]=M,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ur.setFromMatrixColumn(e,0).length(),r=1/Ur.setFromMatrixColumn(e,1).length(),a=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),d=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*p,x=o*h,M=o*p;t[0]=l*h,t[4]=-l*p,t[8]=d,t[1]=m+x*d,t[5]=u-M*d,t[9]=-o*l,t[2]=M-u*d,t[6]=x+m*d,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,m=l*p,x=d*h,M=d*p;t[0]=u+M*o,t[4]=x*o-m,t[8]=a*d,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,m=l*p,x=d*h,M=d*p;t[0]=u-M*o,t[4]=-a*p,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*d,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,m=a*p,x=o*h,M=o*p;t[0]=l*h,t[4]=x*d-m,t[8]=u*d+M,t[1]=l*p,t[5]=M*d+u,t[9]=m*d-x,t[2]=-d,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,m=a*d,x=o*l,M=o*d;t[0]=l*h,t[4]=M-u*p,t[8]=x*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-d*h,t[6]=m*p+x,t[10]=u-M*p}else if(e.order==="XZY"){let u=a*l,m=a*d,x=o*l,M=o*d;t[0]=l*h,t[4]=-p,t[8]=d*h,t[1]=u*p+M,t[5]=a*h,t[9]=m*p-x,t[2]=x*p-m,t[6]=o*h,t[10]=M*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gm,e,Wm)}lookAt(e,t,n){let s=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Fs.crossVectors(n,wi),Fs.lengthSq()===0&&(Math.abs(n.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Fs.crossVectors(n,wi)),Fs.normalize(),bo.crossVectors(wi,Fs),s[0]=Fs.x,s[4]=bo.x,s[8]=wi.x,s[1]=Fs.y,s[5]=bo.y,s[9]=wi.y,s[2]=Fs.z,s[6]=bo.z,s[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],d=n[12],h=n[1],p=n[5],u=n[9],m=n[13],x=n[2],M=n[6],y=n[10],g=n[14],S=n[3],v=n[7],A=n[11],O=n[15],D=s[0],N=s[4],Q=s[8],T=s[12],C=s[1],ee=s[5],X=s[9],se=s[13],B=s[2],K=s[6],ie=s[10],q=s[14],V=s[3],Z=s[7],ce=s[11],fe=s[15];return r[0]=a*D+o*C+l*B+d*V,r[4]=a*N+o*ee+l*K+d*Z,r[8]=a*Q+o*X+l*ie+d*ce,r[12]=a*T+o*se+l*q+d*fe,r[1]=h*D+p*C+u*B+m*V,r[5]=h*N+p*ee+u*K+m*Z,r[9]=h*Q+p*X+u*ie+m*ce,r[13]=h*T+p*se+u*q+m*fe,r[2]=x*D+M*C+y*B+g*V,r[6]=x*N+M*ee+y*K+g*Z,r[10]=x*Q+M*X+y*ie+g*ce,r[14]=x*T+M*se+y*q+g*fe,r[3]=S*D+v*C+A*B+O*V,r[7]=S*N+v*ee+A*K+O*Z,r[11]=S*Q+v*X+A*ie+O*ce,r[15]=S*T+v*se+A*q+O*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],d=e[13],h=e[2],p=e[6],u=e[10],m=e[14],x=e[3],M=e[7],y=e[11],g=e[15];return x*(+r*l*p-s*d*p-r*o*u+n*d*u+s*o*m-n*l*m)+M*(+t*l*m-t*d*u+r*a*u-s*a*m+s*d*h-r*l*h)+y*(+t*d*p-t*o*m-r*a*p+n*a*m+r*o*h-n*d*h)+g*(-s*o*h-t*l*p+t*o*u+s*a*p-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8],p=e[9],u=e[10],m=e[11],x=e[12],M=e[13],y=e[14],g=e[15],S=p*y*d-M*u*d+M*l*m-o*y*m-p*l*g+o*u*g,v=x*u*d-h*y*d-x*l*m+a*y*m+h*l*g-a*u*g,A=h*M*d-x*p*d+x*o*m-a*M*m-h*o*g+a*p*g,O=x*p*l-h*M*l-x*o*u+a*M*u+h*o*y-a*p*y,D=t*S+n*v+s*A+r*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/D;return e[0]=S*N,e[1]=(M*u*r-p*y*r-M*s*m+n*y*m+p*s*g-n*u*g)*N,e[2]=(o*y*r-M*l*r+M*s*d-n*y*d-o*s*g+n*l*g)*N,e[3]=(p*l*r-o*u*r-p*s*d+n*u*d+o*s*m-n*l*m)*N,e[4]=v*N,e[5]=(h*y*r-x*u*r+x*s*m-t*y*m-h*s*g+t*u*g)*N,e[6]=(x*l*r-a*y*r-x*s*d+t*y*d+a*s*g-t*l*g)*N,e[7]=(a*u*r-h*l*r+h*s*d-t*u*d-a*s*m+t*l*m)*N,e[8]=A*N,e[9]=(x*p*r-h*M*r-x*n*m+t*M*m+h*n*g-t*p*g)*N,e[10]=(a*M*r-x*o*r+x*n*d-t*M*d-a*n*g+t*o*g)*N,e[11]=(h*o*r-a*p*r-h*n*d+t*p*d+a*n*m-t*o*m)*N,e[12]=O*N,e[13]=(h*M*s-x*p*s+x*n*u-t*M*u-h*n*y+t*p*y)*N,e[14]=(x*o*s-a*M*s-x*n*l+t*M*l+a*n*y-t*o*y)*N,e[15]=(a*p*s-h*o*s+h*n*l-t*p*l-a*n*u+t*o*u)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,d=r*a,h=r*o;return this.set(d*a+n,d*o-s*l,d*l+s*o,0,d*o+s*l,h*o+n,h*l-s*a,0,d*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,d=r+r,h=a+a,p=o+o,u=r*d,m=r*h,x=r*p,M=a*h,y=a*p,g=o*p,S=l*d,v=l*h,A=l*p,O=n.x,D=n.y,N=n.z;return s[0]=(1-(M+g))*O,s[1]=(m+A)*O,s[2]=(x-v)*O,s[3]=0,s[4]=(m-A)*D,s[5]=(1-(u+g))*D,s[6]=(y+S)*D,s[7]=0,s[8]=(x+v)*N,s[9]=(y-S)*N,s[10]=(1-(u+M))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ur.set(s[0],s[1],s[2]).length(),a=Ur.set(s[4],s[5],s[6]).length(),o=Ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yi.copy(this);let d=1/r,h=1/a,p=1/o;return Yi.elements[0]*=d,Yi.elements[1]*=d,Yi.elements[2]*=d,Yi.elements[4]*=h,Yi.elements[5]*=h,Yi.elements[6]*=h,Yi.elements[8]*=p,Yi.elements[9]*=p,Yi.elements[10]*=p,t.setFromRotationMatrix(Yi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ys){let l=this.elements,d=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),u=(n+s)/(n-s),m,x;if(o===ys)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Zo)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ys){let l=this.elements,d=1/(t-e),h=1/(n-s),p=1/(a-r),u=(t+e)*d,m=(n+s)*h,x,M;if(o===ys)x=(a+r)*p,M=-2*p;else if(o===Zo)x=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ur=new F,Yi=new bn,Gm=new F(0,0,0),Wm=new F(1,1,1),Fs=new F,bo=new F,wi=new F,pf=new bn,mf=new rs,na=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],d=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(fi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-fi(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(fi(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fi(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(fi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-fi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mf.setFromEuler(this),this.setFromQuaternion(mf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};na.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xm=0,gf=new F,Nr=new rs,ds=new bn,So=new F,Ra=new F,qm=new F,Ym=new rs,yf=new F(1,0,0),xf=new F(0,1,0),_f=new F(0,0,1),$m={type:"added"},Km={type:"removed"},oi=class i extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new na,n=new rs,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bn},normalMatrix:{value:new Ut}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(yf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(_f,e)}translateOnAxis(e,t){return gf.copy(e).applyQuaternion(this.quaternion),this.position.add(gf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(_f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?So.copy(e):So.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(Ra,So,this.up):ds.lookAt(So,Ra,this.up),this.quaternion.setFromRotationMatrix(ds),s&&(ds.extractRotation(s.matrixWorld),Nr.setFromRotationMatrix(ds),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($m)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Km)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ds.multiply(e.parent.matrixWorld)),e.applyMatrix4(ds),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let d=0,h=l.length;d<h;d++){let p=l[d];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,d=this.material.length;l<d;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),d=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let d in o){let h=o[d];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};oi.DEFAULT_UP=new F(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $i=new F,ps=new F,yc=new F,ms=new F,Br=new F,Or=new F,vf=new F,xc=new F,_c=new F,vc=new F,Eo=!1,qr=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$i.subVectors(e,t),s.cross($i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$i.subVectors(s,t),ps.subVectors(n,t),yc.subVectors(e,t);let a=$i.dot($i),o=$i.dot(ps),l=$i.dot(yc),d=ps.dot(ps),h=ps.dot(yc),p=a*d-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(d*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ms)===null?!1:ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getUV(e,t,n,s,r,a,o,l){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ms)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ms.x),l.addScaledVector(a,ms.y),l.addScaledVector(o,ms.z),l)}static isFrontFacing(e,t,n,s){return $i.subVectors(n,t),ps.subVectors(e,t),$i.cross(ps).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),ps.subVectors(this.a,this.b),$i.cross(ps).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Br.subVectors(s,n),Or.subVectors(r,n),xc.subVectors(e,n);let l=Br.dot(xc),d=Or.dot(xc);if(l<=0&&d<=0)return t.copy(n);_c.subVectors(e,s);let h=Br.dot(_c),p=Or.dot(_c);if(h>=0&&p<=h)return t.copy(s);let u=l*p-h*d;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Br,a);vc.subVectors(e,r);let m=Br.dot(vc),x=Or.dot(vc);if(x>=0&&m<=x)return t.copy(r);let M=m*d-l*x;if(M<=0&&d>=0&&x<=0)return o=d/(d-x),t.copy(n).addScaledVector(Or,o);let y=h*x-m*p;if(y<=0&&p-h>=0&&m-x>=0)return vf.subVectors(r,s),o=(p-h)/(p-h+(m-x)),t.copy(s).addScaledVector(vf,o);let g=1/(y+M+u);return a=M*g,o=u*g,t.copy(n).addScaledVector(Br,a).addScaledVector(Or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ks={h:0,s:0,l:0},To={h:0,s:0,l:0};function Mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var wt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=on.workingColorSpace){return this.r=e,this.g=t,this.b=n,on.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=on.workingColorSpace){if(e=Om(e,1),t=fi(t,0,1),n=fi(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Mc(a,r,e+1/3),this.g=Mc(a,r,e),this.b=Mc(a,r,e-1/3)}return on.toWorkingColorSpace(this,s),this}setStyle(e,t=ai){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){let n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=cc(e.r),this.g=cc(e.g),this.b=cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return on.fromWorkingColorSpace(ui.copy(this),e),Math.round(fi(ui.r*255,0,255))*65536+Math.round(fi(ui.g*255,0,255))*256+Math.round(fi(ui.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=on.workingColorSpace){on.fromWorkingColorSpace(ui.copy(this),t);let n=ui.r,s=ui.g,r=ui.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,d,h=(o+a)/2;if(o===a)l=0,d=0;else{let p=a-o;switch(d=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=d,e.l=h,e}getRGB(e,t=on.workingColorSpace){return on.fromWorkingColorSpace(ui.copy(this),t),e.r=ui.r,e.g=ui.g,e.b=ui.b,e}getStyle(e=ai){on.fromWorkingColorSpace(ui.copy(this),e);let t=ui.r,n=ui.g,s=ui.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ks),this.setHSL(ks.h+e,ks.s+t,ks.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ks),e.getHSL(To);let n=oc(ks.h,To.h,t),s=oc(ks.s,To.s,t),r=oc(ks.l,To.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ui=new wt;wt.NAMES=bd;var Zm=0,$s=class extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=Zr,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Bc,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(n.blending=this.blending),this.side!==Xs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nc&&(n.blendSrc=this.blendSrc),this.blendDst!==Bc&&(n.blendDst=this.blendDst),this.blendEquation!==lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==af&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Dn=class extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vn=new F,wo=new qe,ei=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=of,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix3(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ta(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_i(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=_i(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=_i(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_i(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=_i(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_i(t,this.array),n=_i(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_i(t,this.array),n=_i(n,this.array),s=_i(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_i(t,this.array),n=_i(n,this.array),s=_i(s,this.array),r=_i(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==of&&(e.usage=this.usage),e}};var tl=class extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var nl=class extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pn=class extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Jm=0,Bi=new bn,bc=new oi,Fr=new F,Ai=new vs,Ca=new vs,jn=new F,li=class i extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Md(e)?nl:tl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,t,n){return Bi.makeTranslation(e,t,n),this.applyMatrix4(Bi),this}scale(e,t,n){return Bi.makeScale(e,t,n),this.applyMatrix4(Bi),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ai.setFromBufferAttribute(r),this.morphTargetsRelative?(jn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(jn),jn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(jn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?(jn.addVectors(Ai.min,Ca.min),Ai.expandByPoint(jn),jn.addVectors(Ai.max,Ca.max),Ai.expandByPoint(jn)):(Ai.expandByPoint(Ca.min),Ai.expandByPoint(Ca.max))}Ai.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)jn.fromBufferAttribute(o,d),l&&(Fr.fromBufferAttribute(e,d),jn.add(Fr)),s=Math.max(s,n.distanceToSquared(jn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,d=[],h=[];for(let C=0;C<o;C++)d[C]=new F,h[C]=new F;let p=new F,u=new F,m=new F,x=new qe,M=new qe,y=new qe,g=new F,S=new F;function v(C,ee,X){p.fromArray(s,C*3),u.fromArray(s,ee*3),m.fromArray(s,X*3),x.fromArray(a,C*2),M.fromArray(a,ee*2),y.fromArray(a,X*2),u.sub(p),m.sub(p),M.sub(x),y.sub(x);let se=1/(M.x*y.y-y.x*M.y);isFinite(se)&&(g.copy(u).multiplyScalar(y.y).addScaledVector(m,-M.y).multiplyScalar(se),S.copy(m).multiplyScalar(M.x).addScaledVector(u,-y.x).multiplyScalar(se),d[C].add(g),d[ee].add(g),d[X].add(g),h[C].add(S),h[ee].add(S),h[X].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let C=0,ee=A.length;C<ee;++C){let X=A[C],se=X.start,B=X.count;for(let K=se,ie=se+B;K<ie;K+=3)v(n[K+0],n[K+1],n[K+2])}let O=new F,D=new F,N=new F,Q=new F;function T(C){N.fromArray(r,C*3),Q.copy(N);let ee=d[C];O.copy(ee),O.sub(N.multiplyScalar(N.dot(ee))).normalize(),D.crossVectors(Q,ee);let se=D.dot(h[C])<0?-1:1;l[C*4]=O.x,l[C*4+1]=O.y,l[C*4+2]=O.z,l[C*4+3]=se}for(let C=0,ee=A.length;C<ee;++C){let X=A[C],se=X.start,B=X.count;for(let K=se,ie=se+B;K<ie;K+=3)T(n[K+0]),T(n[K+1]),T(n[K+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,d=new F,h=new F,p=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){let x=e.getX(u+0),M=e.getX(u+1),y=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,y),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),o.add(h),l.add(h),d.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jn.fromBufferAttribute(e,t),jn.normalize(),e.setXYZ(t,jn.x,jn.y,jn.z)}toNonIndexed(){function e(o,l){let d=o.array,h=o.itemSize,p=o.normalized,u=new d.constructor(l.length*h),m=0,x=0;for(let M=0,y=l.length;M<y;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let g=0;g<h;g++)u[x++]=d[m++]}return new ei(u,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],d=e(l,n);t.setAttribute(o,d)}let r=this.morphAttributes;for(let o in r){let l=[],d=r[o];for(let h=0,p=d.length;h<p;h++){let u=d[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let d=a[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let d=n[l];e.data.attributes[l]=d.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let d=this.morphAttributes[l],h=[];for(let p=0,u=d.length;p<u;p++){let m=d[p];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let d in s){let h=s[d];this.setAttribute(d,h.clone(t))}let r=e.morphAttributes;for(let d in r){let h=[],p=r[d];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let d=0,h=a.length;d<h;d++){let p=a[d];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mf=new bn,rr=new Ha,Ao=new Ys,bf=new F,kr=new F,Hr=new F,zr=new F,Sc=new F,Ro=new F,Co=new qe,Po=new qe,Io=new qe,Sf=new F,Ef=new F,Tf=new F,Lo=new F,Do=new F,Ke=class extends oi{constructor(e=new li,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ro.set(0,0,0);for(let l=0,d=r.length;l<d;l++){let h=o[l],p=r[l];h!==0&&(Sc.fromBufferAttribute(p,e),a?Ro.addScaledVector(Sc,h):Ro.addScaledVector(Sc.sub(t),h))}t.add(Ro)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),rr.copy(e.ray).recast(e.near),!(Ao.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Ao,bf)===null||rr.origin.distanceToSquared(bf)>(e.far-e.near)**2))&&(Mf.copy(r).invert(),rr.copy(e.ray).applyMatrix4(Mf),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let y=u[x],g=a[y.materialIndex],S=Math.max(y.start,m.start),v=Math.min(o.count,Math.min(y.start+y.count,m.start+m.count));for(let A=S,O=v;A<O;A+=3){let D=o.getX(A),N=o.getX(A+1),Q=o.getX(A+2);s=Uo(this,g,e,n,d,h,p,D,N,Q),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let y=x,g=M;y<g;y+=3){let S=o.getX(y),v=o.getX(y+1),A=o.getX(y+2);s=Uo(this,a,e,n,d,h,p,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let y=u[x],g=a[y.materialIndex],S=Math.max(y.start,m.start),v=Math.min(l.count,Math.min(y.start+y.count,m.start+m.count));for(let A=S,O=v;A<O;A+=3){let D=A,N=A+1,Q=A+2;s=Uo(this,g,e,n,d,h,p,D,N,Q),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let y=x,g=M;y<g;y+=3){let S=y,v=y+1,A=y+2;s=Uo(this,a,e,n,d,h,p,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function jm(i,e,t,n,s,r,a,o){let l;if(e.side===Mi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Xs,o),l===null)return null;Do.copy(o),Do.applyMatrix4(i.matrixWorld);let d=t.ray.origin.distanceTo(Do);return d<t.near||d>t.far?null:{distance:d,point:Do.clone(),object:i}}function Uo(i,e,t,n,s,r,a,o,l,d){i.getVertexPosition(o,kr),i.getVertexPosition(l,Hr),i.getVertexPosition(d,zr);let h=jm(i,e,t,n,kr,Hr,zr,Lo);if(h){s&&(Co.fromBufferAttribute(s,o),Po.fromBufferAttribute(s,l),Io.fromBufferAttribute(s,d),h.uv=qr.getInterpolation(Lo,kr,Hr,zr,Co,Po,Io,new qe)),r&&(Co.fromBufferAttribute(r,o),Po.fromBufferAttribute(r,l),Io.fromBufferAttribute(r,d),h.uv1=qr.getInterpolation(Lo,kr,Hr,zr,Co,Po,Io,new qe),h.uv2=h.uv1),a&&(Sf.fromBufferAttribute(a,o),Ef.fromBufferAttribute(a,l),Tf.fromBufferAttribute(a,d),h.normal=qr.getInterpolation(Lo,kr,Hr,zr,Sf,Ef,Tf,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c:d,normal:new F,materialIndex:0};qr.getNormal(kr,Hr,zr,p.normal),h.face=p}return h}var Yn=class i extends li{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],d=[],h=[],p=[],u=0,m=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(p,2));function x(M,y,g,S,v,A,O,D,N,Q,T){let C=A/N,ee=O/Q,X=A/2,se=O/2,B=D/2,K=N+1,ie=Q+1,q=0,V=0,Z=new F;for(let ce=0;ce<ie;ce++){let fe=ce*ee-se;for(let Se=0;Se<K;Se++){let te=Se*C-X;Z[M]=te*S,Z[y]=fe*v,Z[g]=B,d.push(Z.x,Z.y,Z.z),Z[M]=0,Z[y]=0,Z[g]=D>0?1:-1,h.push(Z.x,Z.y,Z.z),p.push(Se/N),p.push(1-ce/Q),q+=1}}for(let ce=0;ce<Q;ce++)for(let fe=0;fe<N;fe++){let Se=u+fe+K*ce,te=u+fe+K*(ce+1),de=u+(fe+1)+K*(ce+1),Ae=u+(fe+1)+K*ce;l.push(Se,te,Ae),l.push(te,de,Ae),V+=6}o.addGroup(m,V,T),m+=V,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ia(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pi(i){let e={};for(let t=0;t<i.length;t++){let n=ia(i[t]);for(let s in n)e[s]=n[s]}return e}function Qm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sd(i){return i.getRenderTarget()===null?i.outputColorSpace:on.workingColorSpace}var eg={clone:ia,merge:pi},tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ms=class extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},il=class extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=ys}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=class extends il{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zc*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ac*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,d=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/d,s*=a.width/l,n*=a.height/d}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vr=-90,Gr=1,Xc=class extends oi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gi(Vr,Gr,e,t);s.layers=this.layers,this.add(s);let r=new gi(Vr,Gr,e,t);r.layers=this.layers,this.add(r);let a=new gi(Vr,Gr,e,t);a.layers=this.layers,this.add(a);let o=new gi(Vr,Gr,e,t);o.layers=this.layers,this.add(o);let l=new gi(Vr,Gr,e,t);l.layers=this.layers,this.add(l);let d=new gi(Vr,Gr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let d of t)this.remove(d);if(e===ys)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,d,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,d),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(p,u,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},sl=class extends ki{constructor(e,t,n,s,r,a,o,l,d,h){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,n,s,r,a,o,l,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qc=class extends _s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(La("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fr?ai:Fi),this.texture=new sl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yn(5,5,5),r=new Ms({name:"CubemapFromEquirect",uniforms:ia(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mi,blending:Vs});r.uniforms.tEquirect.value=t;let a=new Ke(s,r),o=t.minFilter;return t.minFilter===Fa&&(t.minFilter=Oi),new Xc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ec=new F,ig=new F,sg=new Ut,Ki=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ec.subVectors(n,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ec),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sg.getNormalMatrix(e),s=this.coplanarPoint(Ec).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ar=new Ys,No=new F,Va=class{constructor(e=new Ki,t=new Ki,n=new Ki,s=new Ki,r=new Ki,a=new Ki){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ys){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],d=s[4],h=s[5],p=s[6],u=s[7],m=s[8],x=s[9],M=s[10],y=s[11],g=s[12],S=s[13],v=s[14],A=s[15];if(n[0].setComponents(l-r,u-d,y-m,A-g).normalize(),n[1].setComponents(l+r,u+d,y+m,A+g).normalize(),n[2].setComponents(l+a,u+h,y+x,A+S).normalize(),n[3].setComponents(l-a,u-h,y-x,A-S).normalize(),n[4].setComponents(l-o,u-p,y-M,A-v).normalize(),t===ys)n[5].setComponents(l+o,u+p,y+M,A+v).normalize();else if(t===Zo)n[5].setComponents(o,p,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(No.x=s.normal.x>0?e.max.x:e.min.x,No.y=s.normal.y>0?e.max.y:e.min.y,No.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ed(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rg(i,e){let t=e.isWebGL2,n=new WeakMap;function s(d,h){let p=d.array,u=d.usage,m=p.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,p,u),d.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(p instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,h,p){let u=h.array,m=h._updateRange,x=h.updateRanges;if(i.bindBuffer(p,d),m.count===-1&&x.length===0&&i.bufferSubData(p,0,u),x.length!==0){for(let M=0,y=x.length;M<y;M++){let g=x[M];t?i.bufferSubData(p,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count):i.bufferSubData(p,g.start*u.BYTES_PER_ELEMENT,u.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(p,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):i.bufferSubData(p,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);let h=n.get(d);h&&(i.deleteBuffer(h.buffer),n.delete(d))}function l(d,h){if(d.isGLBufferAttribute){let u=n.get(d);(!u||u.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);let p=n.get(d);if(p===void 0)n.set(d,s(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:a,remove:o,update:l}}var as=class i extends li{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),d=o+1,h=l+1,p=e/o,u=t/l,m=[],x=[],M=[],y=[];for(let g=0;g<h;g++){let S=g*u-a;for(let v=0;v<d;v++){let A=v*p-r;x.push(A,-S,0),M.push(0,0,1),y.push(v/o),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){let v=S+d*g,A=S+d*(g+1),O=S+1+d*(g+1),D=S+1+d*g;m.push(v,A,D),m.push(A,O,D)}this.setIndex(m),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(M,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,og=`#ifdef USE_ALPHAHASH
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
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
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
#endif`,dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
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
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_g=`#ifdef USE_IRIDESCENCE
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
#endif`,vg=`#ifdef USE_BUMPMAP
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cg=`#define PI 3.141592653589793
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
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ig=`vec3 transformedNormal = objectNormal;
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
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`
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
}`,Fg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
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
}`,$g=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
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
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,r0=`struct PhysicalMaterial {
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
}`,a0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,d0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g0=`#if defined( USE_POINTS_UV )
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
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
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
#endif`,M0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,ey=`#ifdef USE_TRANSMISSION
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ay=`uniform sampler2D t2D;
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`#include <common>
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
}`,fy=`#if DEPTH_PACKING == 3200
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
}`,dy=`#define DISTANCE
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
}`,py=`#define DISTANCE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`uniform float scale;
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
}`,xy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,vy=`uniform vec3 diffuse;
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
}`,My=`#define LAMBERT
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
}`,by=`#define LAMBERT
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
}`,Sy=`#define MATCAP
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
}`,Ey=`#define MATCAP
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
}`,Ty=`#define NORMAL
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
}`,wy=`#define NORMAL
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
}`,Ay=`#define PHONG
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
}`,Ry=`#define PHONG
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
}`,Cy=`#define STANDARD
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
}`,Py=`#define STANDARD
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
}`,Iy=`#define TOON
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
}`,Ly=`#define TOON
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
}`,Dy=`uniform float size;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,By=`uniform vec3 color;
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
}`,Oy=`uniform float rotation;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Lt={alphahash_fragment:ag,alphahash_pars_fragment:og,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:hg,alphatest_pars_fragment:ug,aomap_fragment:fg,aomap_pars_fragment:dg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:yg,bsdfs:xg,iridescence_fragment:_g,bumpmap_pars_fragment:vg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:bg,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:Eg,color_fragment:Tg,color_pars_fragment:wg,color_pars_vertex:Ag,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Lg,displacementmap_vertex:Dg,emissivemap_fragment:Ug,emissivemap_pars_fragment:Ng,colorspace_fragment:Bg,colorspace_pars_fragment:Og,envmap_fragment:Fg,envmap_common_pars_fragment:kg,envmap_pars_fragment:Hg,envmap_pars_vertex:zg,envmap_physical_pars_fragment:Qg,envmap_vertex:Vg,fog_vertex:Gg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:qg,gradientmap_pars_fragment:Yg,lightmap_fragment:$g,lightmap_pars_fragment:Kg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:jg,lights_toon_fragment:e0,lights_toon_pars_fragment:t0,lights_phong_fragment:n0,lights_phong_pars_fragment:i0,lights_physical_fragment:s0,lights_physical_pars_fragment:r0,lights_fragment_begin:a0,lights_fragment_maps:o0,lights_fragment_end:l0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:f0,map_fragment:d0,map_pars_fragment:p0,map_particle_fragment:m0,map_particle_pars_fragment:g0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:x0,morphcolor_vertex:_0,morphnormal_vertex:v0,morphtarget_pars_vertex:M0,morphtarget_vertex:b0,normal_fragment_begin:S0,normal_fragment_maps:E0,normal_pars_fragment:T0,normal_pars_vertex:w0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:L0,opaque_fragment:D0,packing:U0,premultiplied_alpha_fragment:N0,project_vertex:B0,dithering_fragment:O0,dithering_pars_fragment:F0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:V0,shadowmap_vertex:G0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:Y0,skinnormal_vertex:$0,specularmap_fragment:K0,specularmap_pars_fragment:Z0,tonemapping_fragment:J0,tonemapping_pars_fragment:j0,transmission_fragment:Q0,transmission_pars_fragment:ey,uv_pars_fragment:ty,uv_pars_vertex:ny,uv_vertex:iy,worldpos_vertex:sy,background_vert:ry,background_frag:ay,backgroundCube_vert:oy,backgroundCube_frag:ly,cube_vert:cy,cube_frag:hy,depth_vert:uy,depth_frag:fy,distanceRGBA_vert:dy,distanceRGBA_frag:py,equirect_vert:my,equirect_frag:gy,linedashed_vert:yy,linedashed_frag:xy,meshbasic_vert:_y,meshbasic_frag:vy,meshlambert_vert:My,meshlambert_frag:by,meshmatcap_vert:Sy,meshmatcap_frag:Ey,meshnormal_vert:Ty,meshnormal_frag:wy,meshphong_vert:Ay,meshphong_frag:Ry,meshphysical_vert:Cy,meshphysical_frag:Py,meshtoon_vert:Iy,meshtoon_frag:Ly,points_vert:Dy,points_frag:Uy,shadow_vert:Ny,shadow_frag:By,sprite_vert:Oy,sprite_frag:Fy},De={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},ss={basic:{uniforms:pi([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:pi([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new wt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:pi([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:pi([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:pi([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new wt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:pi([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:pi([De.points,De.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:pi([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:pi([De.common,De.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:pi([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:pi([De.sprite,De.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:pi([De.common,De.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:pi([De.lights,De.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};ss.physical={uniforms:pi([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};var Bo={r:0,b:0,g:0};function ky(i,e,t,n,s,r,a){let o=new wt(0),l=r===!0?0:1,d,h,p=null,u=0,m=null;function x(y,g){let S=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?M(o,l):v&&v.isColor&&(M(v,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Tl)?(h===void 0&&(h=new Ke(new Yn(1,1,1),new Ms({name:"BackgroundCubeMaterial",uniforms:ia(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=on.getTransfer(v.colorSpace)!==Mn,(p!==v||u!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=v,u=v.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(d===void 0&&(d=new Ke(new as(2,2),new Ms({name:"BackgroundMaterial",uniforms:ia(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=v,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=on.getTransfer(v.colorSpace)!==Mn,v.matrixAutoUpdate===!0&&v.updateMatrix(),d.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||u!==v.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=v,u=v.version,m=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null))}function M(y,g){y.getRGB(Bo,Sd(i)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(y,g=1){o.set(y),l=g,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,M(o,l)},render:x}}function Hy(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=y(null),d=l,h=!1;function p(B,K,ie,q,V){let Z=!1;if(a){let ce=M(q,ie,K);d!==ce&&(d=ce,m(d.object)),Z=g(B,q,ie,V),Z&&S(B,q,ie,V)}else{let ce=K.wireframe===!0;(d.geometry!==q.id||d.program!==ie.id||d.wireframe!==ce)&&(d.geometry=q.id,d.program=ie.id,d.wireframe=ce,Z=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,Q(B,K,ie,q),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(B){return n.isWebGL2?i.bindVertexArray(B):r.bindVertexArrayOES(B)}function x(B){return n.isWebGL2?i.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function M(B,K,ie){let q=ie.wireframe===!0,V=o[B.id];V===void 0&&(V={},o[B.id]=V);let Z=V[K.id];Z===void 0&&(Z={},V[K.id]=Z);let ce=Z[q];return ce===void 0&&(ce=y(u()),Z[q]=ce),ce}function y(B){let K=[],ie=[],q=[];for(let V=0;V<s;V++)K[V]=0,ie[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ie,attributeDivisors:q,object:B,attributes:{},index:null}}function g(B,K,ie,q){let V=d.attributes,Z=K.attributes,ce=0,fe=ie.getAttributes();for(let Se in fe)if(fe[Se].location>=0){let de=V[Se],Ae=Z[Se];if(Ae===void 0&&(Se==="instanceMatrix"&&B.instanceMatrix&&(Ae=B.instanceMatrix),Se==="instanceColor"&&B.instanceColor&&(Ae=B.instanceColor)),de===void 0||de.attribute!==Ae||Ae&&de.data!==Ae.data)return!0;ce++}return d.attributesNum!==ce||d.index!==q}function S(B,K,ie,q){let V={},Z=K.attributes,ce=0,fe=ie.getAttributes();for(let Se in fe)if(fe[Se].location>=0){let de=Z[Se];de===void 0&&(Se==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),Se==="instanceColor"&&B.instanceColor&&(de=B.instanceColor));let Ae={};Ae.attribute=de,de&&de.data&&(Ae.data=de.data),V[Se]=Ae,ce++}d.attributes=V,d.attributesNum=ce,d.index=q}function v(){let B=d.newAttributes;for(let K=0,ie=B.length;K<ie;K++)B[K]=0}function A(B){O(B,0)}function O(B,K){let ie=d.newAttributes,q=d.enabledAttributes,V=d.attributeDivisors;ie[B]=1,q[B]===0&&(i.enableVertexAttribArray(B),q[B]=1),V[B]!==K&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,K),V[B]=K)}function D(){let B=d.newAttributes,K=d.enabledAttributes;for(let ie=0,q=K.length;ie<q;ie++)K[ie]!==B[ie]&&(i.disableVertexAttribArray(ie),K[ie]=0)}function N(B,K,ie,q,V,Z,ce){ce===!0?i.vertexAttribIPointer(B,K,ie,V,Z):i.vertexAttribPointer(B,K,ie,q,V,Z)}function Q(B,K,ie,q){if(n.isWebGL2===!1&&(B.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let V=q.attributes,Z=ie.getAttributes(),ce=K.defaultAttributeValues;for(let fe in Z){let Se=Z[fe];if(Se.location>=0){let te=V[fe];if(te===void 0&&(fe==="instanceMatrix"&&B.instanceMatrix&&(te=B.instanceMatrix),fe==="instanceColor"&&B.instanceColor&&(te=B.instanceColor)),te!==void 0){let de=te.normalized,Ae=te.itemSize,Ce=t.get(te);if(Ce===void 0)continue;let ke=Ce.buffer,gt=Ce.type,ot=Ce.bytesPerElement,et=n.isWebGL2===!0&&(gt===i.INT||gt===i.UNSIGNED_INT||te.gpuType===ud);if(te.isInterleavedBufferAttribute){let Ee=te.data,J=Ee.stride,qt=te.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ze=0;Ze<Se.locationSize;Ze++)O(Se.location+Ze,Ee.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ze=0;Ze<Se.locationSize;Ze++)A(Se.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Ze=0;Ze<Se.locationSize;Ze++)N(Se.location+Ze,Ae/Se.locationSize,gt,de,J*ot,(qt+Ae/Se.locationSize*Ze)*ot,et)}else{if(te.isInstancedBufferAttribute){for(let Ee=0;Ee<Se.locationSize;Ee++)O(Se.location+Ee,te.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ee=0;Ee<Se.locationSize;Ee++)A(Se.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Ee=0;Ee<Se.locationSize;Ee++)N(Se.location+Ee,Ae/Se.locationSize,gt,de,Ae*ot,Ae/Se.locationSize*Ee*ot,et)}}else if(ce!==void 0){let de=ce[fe];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(Se.location,de);break;case 3:i.vertexAttrib3fv(Se.location,de);break;case 4:i.vertexAttrib4fv(Se.location,de);break;default:i.vertexAttrib1fv(Se.location,de)}}}}D()}function T(){X();for(let B in o){let K=o[B];for(let ie in K){let q=K[ie];for(let V in q)x(q[V].object),delete q[V];delete K[ie]}delete o[B]}}function C(B){if(o[B.id]===void 0)return;let K=o[B.id];for(let ie in K){let q=K[ie];for(let V in q)x(q[V].object),delete q[V];delete K[ie]}delete o[B.id]}function ee(B){for(let K in o){let ie=o[K];if(ie[B.id]===void 0)continue;let q=ie[B.id];for(let V in q)x(q[V].object),delete q[V];delete ie[B.id]}}function X(){se(),h=!0,d!==l&&(d=l,m(d.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:X,resetDefaultState:se,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:ee,initAttributes:v,enableAttribute:A,disableUnusedAttributes:D}}function zy(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,p){i.drawArrays(r,h,p),t.update(p,r,1)}function l(h,p,u){if(u===0)return;let m,x;if(s)m=i,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](r,h,p,u),t.update(p,r,u)}function d(h,p,u){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<u;x++)this.render(h[x],p[x]);else{m.multiDrawArraysWEBGL(r,h,0,p,0,u);let x=0;for(let M=0;M<u;M++)x+=p[M];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=d}function Vy(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let d=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,A=a||e.has("OES_texture_float"),O=v&&A,D=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:d,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:O,maxSamples:D}}function Gy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ki,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,m){let x=p.clippingPlanes,M=p.clipIntersection,y=p.clipShadows,g=i.get(p);if(!s||x===null||x.length===0||r&&!y)r?h(null):d();else{let S=r?0:n,v=S*4,A=g.clippingState||null;l.value=A,A=h(x,u,v,m);for(let O=0;O!==v;++O)A[O]=t[O];g.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,m,x){let M=p!==null?p.length:0,y=null;if(M!==0){if(y=l.value,x!==!0||y===null){let g=m+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(y===null||y.length<g)&&(y=new Float32Array(g));for(let v=0,A=m;v!==M;++v,A+=4)a.copy(p[v]).applyMatrix4(S,o),a.normal.toArray(y,A),y[A+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function Wy(i){let e=new WeakMap;function t(a,o){return o===Oc?a.mapping=Qr:o===Fc&&(a.mapping=ea),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Oc||o===Fc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let d=new qc(l.height/2);return d.fromEquirectangularTexture(i,a),e.set(a,d),a.addEventListener("dispose",s),t(d.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var rl=class extends il{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yr=4,wf=[.125,.215,.35,.446,.526,.582],cr=20,Tc=new rl,Af=new wt,wc=null,Ac=0,Rc=0,or=(1+Math.sqrt(5))/2,Wr=1/or,Rf=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,or,Wr),new F(0,or,-Wr),new F(Wr,0,or),new F(-Wr,0,or),new F(or,Wr,0),new F(-or,Wr,0)],al=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wc,Ac,Rc),e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:ka,format:Ji,colorSpace:xs,depthBuffer:!1},s=Cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xy(r)),this._blurMaterial=qy(r,e,t)}return s}_compileMaterial(e){let t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,Tc)}_sceneToCubeUV(e,t,n,s){let o=new gi(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,u=h.toneMapping;h.getClearColor(Af),h.toneMapping=Gs,h.autoClear=!1;let m=new Dn({name:"PMREM.Background",side:Mi,depthWrite:!1,depthTest:!1}),x=new Ke(new Yn,m),M=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,M=!0):(m.color.copy(Af),M=!0);for(let g=0;g<6;g++){let S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(d[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,d[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,d[g]));let v=this._cubeSize;Oo(s,S*v,g>2?v:0,v,v),h.setRenderTarget(s),M&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=p,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Qr||e.mapping===ea;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Tc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rf[(s-1)%Rf.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new Ke(this._lodPlanes[s],d),u=d.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cr-1),M=r/x,y=isFinite(r)?1+Math.floor(h*M):cr;y>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${cr}`);let g=[],S=0;for(let N=0;N<cr;++N){let Q=N/M,T=Math.exp(-Q*Q/2);g.push(T),N===0?S+=T:N<y&&(S+=2*T)}for(let N=0;N<g.length;N++)g[N]=g[N]/S;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=x,u.mipInt.value=v-n;let A=this._sizeLods[s],O=3*A*(s>v-Yr?s-v+Yr:0),D=4*(this._cubeSize-A);Oo(t,O,D,3*A,2*A),l.setRenderTarget(t),l.render(p,Tc)}};function Xy(i){let e=[],t=[],n=[],s=i,r=i-Yr+1+wf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Yr?l=wf[a-i+Yr-1]:a===0&&(l=0),n.push(l);let d=1/(o-2),h=-d,p=1+d,u=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,x=6,M=3,y=2,g=1,S=new Float32Array(M*x*m),v=new Float32Array(y*x*m),A=new Float32Array(g*x*m);for(let D=0;D<m;D++){let N=D%3*2/3-1,Q=D>2?0:-1,T=[N,Q,0,N+2/3,Q,0,N+2/3,Q+1,0,N,Q,0,N+2/3,Q+1,0,N,Q+1,0];S.set(T,M*x*D),v.set(u,y*x*D);let C=[D,D,D,D,D,D];A.set(C,g*x*D)}let O=new li;O.setAttribute("position",new ei(S,M)),O.setAttribute("uv",new ei(v,y)),O.setAttribute("faceIndex",new ei(A,g)),e.push(O),s>Yr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cf(i,e,t){let n=new _s(i,e,t);return n.texture.mapping=Tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qy(i,e,t){let n=new Float32Array(cr),s=new F(0,1,0);return new Ms({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function Pf(){return new Ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function If(){return new Ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function Ph(){return`

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
	`}function Yy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,d=l===Oc||l===Fc,h=l===Qr||l===ea;if(d||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new al(i)),p=d?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{let p=o.image;if(d&&p&&p.height>0||h&&p&&s(p)){t===null&&(t=new al(i));let u=d?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,d=6;for(let h=0;h<d;h++)o[h]!==void 0&&l++;return l===d}function r(o){let l=o.target;l.removeEventListener("dispose",r);let d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $y(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ky(i,e,t,n){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);for(let x in u.morphAttributes){let M=u.morphAttributes[x];for(let y=0,g=M.length;y<g;y++)e.remove(M[y])}u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(p){let u=p.attributes;for(let x in u)e.update(u[x],i.ARRAY_BUFFER);let m=p.morphAttributes;for(let x in m){let M=m[x];for(let y=0,g=M.length;y<g;y++)e.update(M[y],i.ARRAY_BUFFER)}}function d(p){let u=[],m=p.index,x=p.attributes.position,M=0;if(m!==null){let S=m.array;M=m.version;for(let v=0,A=S.length;v<A;v+=3){let O=S[v+0],D=S[v+1],N=S[v+2];u.push(O,D,D,N,N,O)}}else if(x!==void 0){let S=x.array;M=x.version;for(let v=0,A=S.length/3-1;v<A;v+=3){let O=v+0,D=v+1,N=v+2;u.push(O,D,D,N,N,O)}}else return;let y=new(Md(u)?nl:tl)(u,1);y.version=M;let g=r.get(p);g&&e.remove(g),r.set(p,y)}function h(p){let u=r.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&d(p)}else d(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Zy(i,e,t,n){let s=n.isWebGL2,r;function a(m){r=m}let o,l;function d(m){o=m.type,l=m.bytesPerElement}function h(m,x){i.drawElements(r,x,o,m*l),t.update(x,r,1)}function p(m,x,M){if(M===0)return;let y,g;if(s)y=i,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](r,x,o,m*l,M),t.update(x,r,M)}function u(m,x,M){if(M===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<M;g++)this.render(m[g]/l,x[g]);else{y.multiDrawElementsWEBGL(r,x,0,o,m,0,M);let g=0;for(let S=0;S<M;S++)g+=x[S];t.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=u}function Jy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jy(i,e){return i[0]-e[0]}function Qy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ex(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Qn,o=[];for(let d=0;d<8;d++)o[d]=[d,0];function l(d,h,p){let u=d.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=m!==void 0?m.length:0,M=r.get(h);if(M===void 0||M.count!==x){let B=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",B)};M!==void 0&&M.texture.dispose();let S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],Q=0;S===!0&&(Q=1),v===!0&&(Q=2),A===!0&&(Q=3);let T=h.attributes.position.count*Q,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let ee=new Float32Array(T*C*4*x),X=new el(ee,T,C,x);X.type=zs,X.needsUpdate=!0;let se=Q*4;for(let K=0;K<x;K++){let ie=O[K],q=D[K],V=N[K],Z=T*C*4*K;for(let ce=0;ce<ie.count;ce++){let fe=ce*se;S===!0&&(a.fromBufferAttribute(ie,ce),ee[Z+fe+0]=a.x,ee[Z+fe+1]=a.y,ee[Z+fe+2]=a.z,ee[Z+fe+3]=0),v===!0&&(a.fromBufferAttribute(q,ce),ee[Z+fe+4]=a.x,ee[Z+fe+5]=a.y,ee[Z+fe+6]=a.z,ee[Z+fe+7]=0),A===!0&&(a.fromBufferAttribute(V,ce),ee[Z+fe+8]=a.x,ee[Z+fe+9]=a.y,ee[Z+fe+10]=a.z,ee[Z+fe+11]=V.itemSize===4?a.w:1)}}M={count:x,texture:X,size:new qe(T,C)},r.set(h,M),h.addEventListener("dispose",B)}let y=0;for(let S=0;S<u.length;S++)y+=u[S];let g=h.morphTargetsRelative?1:1-y;p.getUniforms().setValue(i,"morphTargetBaseInfluence",g),p.getUniforms().setValue(i,"morphTargetInfluences",u),p.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let m=u===void 0?0:u.length,x=n[h.id];if(x===void 0||x.length!==m){x=[];for(let v=0;v<m;v++)x[v]=[v,0];n[h.id]=x}for(let v=0;v<m;v++){let A=x[v];A[0]=v,A[1]=u[v]}x.sort(Qy);for(let v=0;v<8;v++)v<m&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(jy);let M=h.morphAttributes.position,y=h.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let A=o[v],O=A[0],D=A[1];O!==Number.MAX_SAFE_INTEGER&&D?(M&&h.getAttribute("morphTarget"+v)!==M[O]&&h.setAttribute("morphTarget"+v,M[O]),y&&h.getAttribute("morphNormal"+v)!==y[O]&&h.setAttribute("morphNormal"+v,y[O]),s[v]=D,g+=D):(M&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),y&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let S=h.morphTargetsRelative?1:1-g;p.getUniforms().setValue(i,"morphTargetBaseInfluence",S),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function tx(i,e,t,n){let s=new WeakMap;function r(l){let d=n.render.frame,h=l.geometry,p=e.get(l,h);if(s.get(p)!==d&&(e.update(p),s.set(p,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==d&&(u.update(),s.set(u,d))}return p}function a(){s=new WeakMap}function o(l){let d=l.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:a}}var ol=class extends ki{constructor(e,t,n,s,r,a,o,l,d,h){if(h=h!==void 0?h:ur,h!==ur&&h!==ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ur&&(n=Hs),n===void 0&&h===ta&&(n=hr),super(null,s,r,a,o,l,h,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mi,this.minFilter=l!==void 0?l:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Td=new ki,wd=new ol(1,1);wd.compareFunction=vd;var Ad=new el,Rd=new Wc,Cd=new sl,Lf=[],Df=[],Uf=new Float32Array(16),Nf=new Float32Array(9),Bf=new Float32Array(4);function la(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Lf[s];if(r===void 0&&(r=new Float32Array(s),Lf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function $n(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Al(i,e){let t=Df[e];t===void 0&&(t=new Int32Array(e),Df[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($n(t,e))return;i.uniform2fv(this.addr,e),Kn(t,e)}}function sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($n(t,e))return;i.uniform3fv(this.addr,e),Kn(t,e)}}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($n(t,e))return;i.uniform4fv(this.addr,e),Kn(t,e)}}function ax(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($n(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kn(t,e)}else{if($n(t,n))return;Bf.set(n),i.uniformMatrix2fv(this.addr,!1,Bf),Kn(t,n)}}function ox(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($n(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kn(t,e)}else{if($n(t,n))return;Nf.set(n),i.uniformMatrix3fv(this.addr,!1,Nf),Kn(t,n)}}function lx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($n(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kn(t,e)}else{if($n(t,n))return;Uf.set(n),i.uniformMatrix4fv(this.addr,!1,Uf),Kn(t,n)}}function cx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($n(t,e))return;i.uniform2iv(this.addr,e),Kn(t,e)}}function ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($n(t,e))return;i.uniform3iv(this.addr,e),Kn(t,e)}}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($n(t,e))return;i.uniform4iv(this.addr,e),Kn(t,e)}}function dx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($n(t,e))return;i.uniform2uiv(this.addr,e),Kn(t,e)}}function mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($n(t,e))return;i.uniform3uiv(this.addr,e),Kn(t,e)}}function gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($n(t,e))return;i.uniform4uiv(this.addr,e),Kn(t,e)}}function yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?wd:Td;t.setTexture2D(e||r,s)}function xx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rd,s)}function _x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cd,s)}function vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ad,s)}function Mx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ax;case 35675:return ox;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return fx;case 5125:return dx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return vx}}function bx(i,e){i.uniform1fv(this.addr,e)}function Sx(i,e){let t=la(e,this.size,2);i.uniform2fv(this.addr,t)}function Ex(i,e){let t=la(e,this.size,3);i.uniform3fv(this.addr,t)}function Tx(i,e){let t=la(e,this.size,4);i.uniform4fv(this.addr,t)}function wx(i,e){let t=la(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ax(i,e){let t=la(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rx(i,e){let t=la(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cx(i,e){i.uniform1iv(this.addr,e)}function Px(i,e){i.uniform2iv(this.addr,e)}function Ix(i,e){i.uniform3iv(this.addr,e)}function Lx(i,e){i.uniform4iv(this.addr,e)}function Dx(i,e){i.uniform1uiv(this.addr,e)}function Ux(i,e){i.uniform2uiv(this.addr,e)}function Nx(i,e){i.uniform3uiv(this.addr,e)}function Bx(i,e){i.uniform4uiv(this.addr,e)}function Ox(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);$n(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Td,r[a])}function Fx(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);$n(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Rd,r[a])}function kx(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);$n(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Cd,r[a])}function Hx(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);$n(n,r)||(i.uniform1iv(this.addr,r),Kn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ad,r[a])}function zx(i){switch(i){case 5126:return bx;case 35664:return Sx;case 35665:return Ex;case 35666:return Tx;case 35674:return wx;case 35675:return Ax;case 35676:return Rx;case 5124:case 35670:return Cx;case 35667:case 35671:return Px;case 35668:case 35672:return Ix;case 35669:case 35673:return Lx;case 5125:return Dx;case 36294:return Ux;case 36295:return Nx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Hx}}var Yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mx(t.type)}},$c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zx(t.type)}},Kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function Of(i,e){i.seq.push(e),i.map[e.id]=e}function Vx(i,e,t){let n=i.name,s=n.length;for(Cc.lastIndex=0;;){let r=Cc.exec(n),a=Cc.lastIndex,o=r[1],l=r[2]==="]",d=r[3];if(l&&(o=o|0),d===void 0||d==="["&&a+2===s){Of(t,d===void 0?new Yc(o,i,e):new $c(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Kc(o),Of(t,p)),t=p}}}var jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Vx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ff(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Gx=37297,Wx=0;function Xx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function qx(i){let e=on.getPrimaries(on.workingColorSpace),t=on.getPrimaries(i),n;switch(e===t?n="":e===Ko&&t===$o?n="LinearDisplayP3ToLinearSRGB":e===$o&&t===Ko&&(n="LinearSRGBToLinearDisplayP3"),i){case xs:case wl:return[n,"LinearTransferOETF"];case ai:case Ch:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Xx(i.getShaderSource(e),a)}else return s}function Yx(i,e){let t=qx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $x(i,e){let t;switch(e){case fm:t="Linear";break;case dm:t="Reinhard";break;case pm:t="OptimizedCineon";break;case mm:t="ACESFilmic";break;case ym:t="AgX";break;case gm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}function Zx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($r).join(`
`)}function Jx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $r(i){return i!==""}function Hf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(Qx,t_)}var e_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function t_(i,e){let t=Lt[e];if(t===void 0){let n=e_.get(e);if(n!==void 0)t=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zc(t)}var n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(i){return i.replace(n_,i_)}function i_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gs&&(e="SHADOWMAP_TYPE_VSM"),e}function r_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qr:case ea:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ea:e="ENVMAP_MODE_REFRACTION";break}return e}function o_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cd:e="ENVMAP_BLENDING_MULTIPLY";break;case hm:e="ENVMAP_BLENDING_MIX";break;case um:e="ENVMAP_BLENDING_ADD";break}return e}function l_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function c_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=s_(t),d=r_(t),h=a_(t),p=o_(t),u=l_(t),m=t.isWebGL2?"":Kx(t),x=Zx(t),M=Jx(r),y=s.createProgram(),g,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter($r).join(`
`),g.length>0&&(g+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter($r).join(`
`),S.length>0&&(S+=`
`)):(g=[Gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),S=[m,Gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gs?"#define TONE_MAPPING":"",t.toneMapping!==Gs?Lt.tonemapping_pars_fragment:"",t.toneMapping!==Gs?$x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,Yx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),a=Zc(a),a=Hf(a,t),a=zf(a,t),o=Zc(o),o=Hf(o,t),o=zf(o,t),a=Vf(a),o=Vf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let A=v+g+a,O=v+S+o,D=Ff(s,s.VERTEX_SHADER,A),N=Ff(s,s.FRAGMENT_SHADER,O);s.attachShader(y,D),s.attachShader(y,N),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function Q(X){if(i.debug.checkShaderErrors){let se=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(D).trim(),K=s.getShaderInfoLog(N).trim(),ie=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,D,N);else{let V=kf(s,D,"vertex"),Z=kf(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+V+`
`+Z)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(B===""||K==="")&&(q=!1);q&&(X.diagnostics={runnable:ie,programLog:se,vertexShader:{log:B,prefix:g},fragmentShader:{log:K,prefix:S}})}s.deleteShader(D),s.deleteShader(N),T=new jr(s,y),C=jx(s,y)}let T;this.getUniforms=function(){return T===void 0&&Q(this),T};let C;this.getAttributes=function(){return C===void 0&&Q(this),C};let ee=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=s.getProgramParameter(y,Gx)),ee},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=N,this}var h_=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jc(e),t.set(e,n)),n}},jc=class{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}};function u_(i,e,t,n,s,r,a){let o=new za,l=new Jc,d=[],h=s.isWebGL2,p=s.logarithmicDepthBuffer,u=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return T===0?"uv":`uv${T}`}function y(T,C,ee,X,se){let B=X.fog,K=se.geometry,ie=T.isMeshStandardMaterial?X.environment:null,q=(T.isMeshStandardMaterial?t:e).get(T.envMap||ie),V=q&&q.mapping===Tl?q.image.height:null,Z=x[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,fe=ce!==void 0?ce.length:0,Se=0;K.morphAttributes.position!==void 0&&(Se=1),K.morphAttributes.normal!==void 0&&(Se=2),K.morphAttributes.color!==void 0&&(Se=3);let te,de,Ae,Ce;if(Z){let Jn=ss[Z];te=Jn.vertexShader,de=Jn.fragmentShader}else te=T.vertexShader,de=T.fragmentShader,l.update(T),Ae=l.getVertexShaderID(T),Ce=l.getFragmentShaderID(T);let ke=i.getRenderTarget(),gt=se.isInstancedMesh===!0,ot=se.isBatchedMesh===!0,et=!!T.map,Ee=!!T.matcap,J=!!q,qt=!!T.aoMap,Ze=!!T.lightMap,Qe=!!T.bumpMap,Xe=!!T.normalMap,ze=!!T.displacementMap,ut=!!T.emissiveMap,R=!!T.metalnessMap,E=!!T.roughnessMap,j=T.anisotropy>0,ye=T.clearcoat>0,xe=T.iridescence>0,le=T.sheen>0,Ge=T.transmission>0,Pe=j&&!!T.anisotropyMap,He=ye&&!!T.clearcoatMap,Ie=ye&&!!T.clearcoatNormalMap,Tt=ye&&!!T.clearcoatRoughnessMap,Te=xe&&!!T.iridescenceMap,Nt=xe&&!!T.iridescenceThicknessMap,Dt=le&&!!T.sheenColorMap,ft=le&&!!T.sheenRoughnessMap,lt=!!T.specularMap,$e=!!T.specularColorMap,At=!!T.specularIntensityMap,$t=Ge&&!!T.transmissionMap,Ht=Ge&&!!T.thicknessMap,Pt=!!T.gradientMap,Le=!!T.alphaMap,z=T.alphaTest>0,Ne=!!T.alphaHash,Be=!!T.extensions,mt=!!K.attributes.uv1,dt=!!K.attributes.uv2,jt=!!K.attributes.uv3,Qt=Gs;return T.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(Qt=i.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:te,fragmentShader:de,defines:T.defines,customVertexShaderID:Ae,customFragmentShaderID:Ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ot,instancing:gt,instancingColor:gt&&se.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ke===null?i.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:xs,map:et,matcap:Ee,envMap:J,envMapMode:J&&q.mapping,envMapCubeUVHeight:V,aoMap:qt,lightMap:Ze,bumpMap:Qe,normalMap:Xe,displacementMap:u&&ze,emissiveMap:ut,normalMapObjectSpace:Xe&&T.normalMapType===Cm,normalMapTangentSpace:Xe&&T.normalMapType===_d,metalnessMap:R,roughnessMap:E,anisotropy:j,anisotropyMap:Pe,clearcoat:ye,clearcoatMap:He,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Tt,iridescence:xe,iridescenceMap:Te,iridescenceThicknessMap:Nt,sheen:le,sheenColorMap:Dt,sheenRoughnessMap:ft,specularMap:lt,specularColorMap:$e,specularIntensityMap:At,transmission:Ge,transmissionMap:$t,thicknessMap:Ht,gradientMap:Pt,opaque:T.transparent===!1&&T.blending===Zr,alphaMap:Le,alphaTest:z,alphaHash:Ne,combine:T.combine,mapUv:et&&M(T.map.channel),aoMapUv:qt&&M(T.aoMap.channel),lightMapUv:Ze&&M(T.lightMap.channel),bumpMapUv:Qe&&M(T.bumpMap.channel),normalMapUv:Xe&&M(T.normalMap.channel),displacementMapUv:ze&&M(T.displacementMap.channel),emissiveMapUv:ut&&M(T.emissiveMap.channel),metalnessMapUv:R&&M(T.metalnessMap.channel),roughnessMapUv:E&&M(T.roughnessMap.channel),anisotropyMapUv:Pe&&M(T.anisotropyMap.channel),clearcoatMapUv:He&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ft&&M(T.sheenRoughnessMap.channel),specularMapUv:lt&&M(T.specularMap.channel),specularColorMapUv:$e&&M(T.specularColorMap.channel),specularIntensityMapUv:At&&M(T.specularIntensityMap.channel),transmissionMapUv:$t&&M(T.transmissionMap.channel),thicknessMapUv:Ht&&M(T.thicknessMap.channel),alphaMapUv:Le&&M(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Xe||j),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:mt,vertexUv2s:dt,vertexUv3s:jt,pointsUvs:se.isPoints===!0&&!!K.attributes.uv&&(et||Le),fog:!!B,useFog:T.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:se.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&ee.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&on.getTransfer(T.map.colorSpace)===Mn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===In,flipSided:T.side===Mi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Be&&T.extensions.derivatives===!0,extensionFragDepth:Be&&T.extensions.fragDepth===!0,extensionDrawBuffers:Be&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Be&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Be&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){let C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(let ee in T.defines)C.push(ee),C.push(T.defines[ee]);return T.isRawShaderMaterial===!1&&(S(C,T),v(C,T),C.push(i.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function S(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function v(T,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),T.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function A(T){let C=x[T.type],ee;if(C){let X=ss[C];ee=eg.clone(X.uniforms)}else ee=T.uniforms;return ee}function O(T,C){let ee;for(let X=0,se=d.length;X<se;X++){let B=d[X];if(B.cacheKey===C){ee=B,++ee.usedTimes;break}}return ee===void 0&&(ee=new c_(i,C,T,r),d.push(ee)),ee}function D(T){if(--T.usedTimes===0){let C=d.indexOf(T);d[C]=d[d.length-1],d.pop(),T.destroy()}}function N(T){l.remove(T)}function Q(){l.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:O,releaseProgram:D,releaseShaderCache:N,programs:d,dispose:Q}}function f_(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function d_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p,u,m,x,M,y){let g=i[e];return g===void 0?(g={id:p.id,object:p,geometry:u,material:m,groupOrder:x,renderOrder:p.renderOrder,z:M,group:y},i[e]=g):(g.id=p.id,g.object=p,g.geometry=u,g.material=m,g.groupOrder=x,g.renderOrder=p.renderOrder,g.z=M,g.group=y),e++,g}function o(p,u,m,x,M,y){let g=a(p,u,m,x,M,y);m.transmission>0?n.push(g):m.transparent===!0?s.push(g):t.push(g)}function l(p,u,m,x,M,y){let g=a(p,u,m,x,M,y);m.transmission>0?n.unshift(g):m.transparent===!0?s.unshift(g):t.unshift(g)}function d(p,u){t.length>1&&t.sort(p||d_),n.length>1&&n.sort(u||Wf),s.length>1&&s.sort(u||Wf)}function h(){for(let p=e,u=i.length;p<u;p++){let m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:d}}function p_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Xf,i.set(n,[a])):s>=r.length?(a=new Xf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function m_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new wt};break;case"SpotLight":t={position:new F,direction:new F,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function g_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var y_=0;function x_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function __(i,e){let t=new m_,n=g_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new bn,o=new bn;function l(h,p){let u=0,m=0,x=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let M=0,y=0,g=0,S=0,v=0,A=0,O=0,D=0,N=0,Q=0,T=0;h.sort(x_);let C=p===!0?Math.PI:1;for(let X=0,se=h.length;X<se;X++){let B=h[X],K=B.color,ie=B.intensity,q=B.distance,V=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=K.r*ie*C,m+=K.g*ie*C,x+=K.b*ie*C;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(B.sh.coefficients[Z],ie);T++}else if(B.isDirectionalLight){let Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){let ce=B.shadow,fe=n.get(B);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,s.directionalShadow[M]=fe,s.directionalShadowMap[M]=V,s.directionalShadowMatrix[M]=B.shadow.matrix,A++}s.directional[M]=Z,M++}else if(B.isSpotLight){let Z=t.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(K).multiplyScalar(ie*C),Z.distance=q,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,s.spot[g]=Z;let ce=B.shadow;if(B.map&&(s.spotLightMap[N]=B.map,N++,ce.updateMatrices(B),B.castShadow&&Q++),s.spotLightMatrix[g]=ce.matrix,B.castShadow){let fe=n.get(B);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,s.spotShadow[g]=fe,s.spotShadowMap[g]=V,D++}g++}else if(B.isRectAreaLight){let Z=t.get(B);Z.color.copy(K).multiplyScalar(ie),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=Z,S++}else if(B.isPointLight){let Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*C),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){let ce=B.shadow,fe=n.get(B);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,fe.shadowCameraNear=ce.camera.near,fe.shadowCameraFar=ce.camera.far,s.pointShadow[y]=fe,s.pointShadowMap[y]=V,s.pointShadowMatrix[y]=B.shadow.matrix,O++}s.point[y]=Z,y++}else if(B.isHemisphereLight){let Z=t.get(B);Z.skyColor.copy(B.color).multiplyScalar(ie*C),Z.groundColor.copy(B.groundColor).multiplyScalar(ie*C),s.hemi[v]=Z,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=m,s.ambient[2]=x;let ee=s.hash;(ee.directionalLength!==M||ee.pointLength!==y||ee.spotLength!==g||ee.rectAreaLength!==S||ee.hemiLength!==v||ee.numDirectionalShadows!==A||ee.numPointShadows!==O||ee.numSpotShadows!==D||ee.numSpotMaps!==N||ee.numLightProbes!==T)&&(s.directional.length=M,s.spot.length=g,s.rectArea.length=S,s.point.length=y,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+N-Q,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=Q,s.numLightProbes=T,ee.directionalLength=M,ee.pointLength=y,ee.spotLength=g,ee.rectAreaLength=S,ee.hemiLength=v,ee.numDirectionalShadows=A,ee.numPointShadows=O,ee.numSpotShadows=D,ee.numSpotMaps=N,ee.numLightProbes=T,s.version=y_++)}function d(h,p){let u=0,m=0,x=0,M=0,y=0,g=p.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){let A=h[S];if(A.isDirectionalLight){let O=s.directional[u];O.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(g),u++}else if(A.isSpotLight){let O=s.spot[x];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(g),O.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(g),x++}else if(A.isRectAreaLight){let O=s.rectArea[M];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(g),o.identity(),a.copy(A.matrixWorld),a.premultiply(g),o.extractRotation(a),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){let O=s.point[m];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(g),m++}else if(A.isHemisphereLight){let O=s.hemi[y];O.direction.setFromMatrixPosition(A.matrixWorld),O.direction.transformDirection(g),y++}}}return{setup:l,setupView:d,state:s}}function qf(i,e){let t=new __(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(p){n.push(p)}function o(p){s.push(p)}function l(p){t.setup(n,p)}function d(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o}}function v_(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new qf(i,e),t.set(r,[l])):a>=o.length?(l=new qf(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Qc=class extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},eh=class extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
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
}`;function S_(i,e,t){let n=new Va,s=new qe,r=new qe,a=new Qn,o=new Qc({depthPacking:Rm}),l=new eh,d={},h=t.maxTextureSize,p={[Xs]:Mi,[Mi]:Xs,[In]:In},u=new Ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:M_,fragmentShader:b_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new li;x.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ke(x,u),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let g=this.type;this.render=function(D,N,Q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;let T=i.getRenderTarget(),C=i.getActiveCubeFace(),ee=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Vs),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let se=g!==gs&&this.type===gs,B=g===gs&&this.type!==gs;for(let K=0,ie=D.length;K<ie;K++){let q=D[K],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Z=V.getFrameExtents();if(s.multiply(Z),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,V.mapSize.y=r.y)),V.map===null||se===!0||B===!0){let fe=this.type!==gs?{minFilter:mi,magFilter:mi}:{};V.map!==null&&V.map.dispose(),V.map=new _s(s.x,s.y,fe),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ce=V.getViewportCount();for(let fe=0;fe<ce;fe++){let Se=V.getViewport(fe);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),X.viewport(a),V.updateMatrices(q,fe),n=V.getFrustum(),A(N,Q,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===gs&&S(V,Q),V.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(T,C,ee)};function S(D,N){let Q=e.update(M);u.defines.VSM_SAMPLES!==D.blurSamples&&(u.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new _s(s.x,s.y)),u.uniforms.shadow_pass.value=D.map.texture,u.uniforms.resolution.value=D.mapSize,u.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(N,null,Q,u,M,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(N,null,Q,m,M,null)}function v(D,N,Q,T){let C=null,ee=Q.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(ee!==void 0)C=ee;else if(C=Q.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let X=C.uuid,se=N.uuid,B=d[X];B===void 0&&(B={},d[X]=B);let K=B[se];K===void 0&&(K=C.clone(),B[se]=K,N.addEventListener("dispose",O)),C=K}if(C.visible=N.visible,C.wireframe=N.wireframe,T===gs?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:p[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,Q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let X=i.properties.get(C);X.light=Q}return C}function A(D,N,Q,T,C){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===gs)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld);let se=e.update(D),B=D.material;if(Array.isArray(B)){let K=se.groups;for(let ie=0,q=K.length;ie<q;ie++){let V=K[ie],Z=B[V.materialIndex];if(Z&&Z.visible){let ce=v(D,Z,T,C);D.onBeforeShadow(i,D,N,Q,se,ce,V),i.renderBufferDirect(Q,null,se,ce,D,V),D.onAfterShadow(i,D,N,Q,se,ce,V)}}}else if(B.visible){let K=v(D,B,T,C);D.onBeforeShadow(i,D,N,Q,se,K,null),i.renderBufferDirect(Q,null,se,K,D,null),D.onAfterShadow(i,D,N,Q,se,K,null)}}let X=D.children;for(let se=0,B=X.length;se<B;se++)A(X[se],N,Q,T,C)}function O(D){D.target.removeEventListener("dispose",O);for(let Q in d){let T=d[Q],C=D.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function E_(i,e,t){let n=t.isWebGL2;function s(){let z=!1,Ne=new Qn,Be=null,mt=new Qn(0,0,0,0);return{setMask:function(dt){Be!==dt&&!z&&(i.colorMask(dt,dt,dt,dt),Be=dt)},setLocked:function(dt){z=dt},setClear:function(dt,jt,Qt,Tn,Jn){Jn===!0&&(dt*=Tn,jt*=Tn,Qt*=Tn),Ne.set(dt,jt,Qt,Tn),mt.equals(Ne)===!1&&(i.clearColor(dt,jt,Qt,Tn),mt.copy(Ne))},reset:function(){z=!1,Be=null,mt.set(-1,0,0,0)}}}function r(){let z=!1,Ne=null,Be=null,mt=null;return{setTest:function(dt){dt?ot(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(dt){Ne!==dt&&!z&&(i.depthMask(dt),Ne=dt)},setFunc:function(dt){if(Be!==dt){switch(dt){case im:i.depthFunc(i.NEVER);break;case sm:i.depthFunc(i.ALWAYS);break;case rm:i.depthFunc(i.LESS);break;case Wo:i.depthFunc(i.LEQUAL);break;case am:i.depthFunc(i.EQUAL);break;case om:i.depthFunc(i.GEQUAL);break;case lm:i.depthFunc(i.GREATER);break;case cm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Be=dt}},setLocked:function(dt){z=dt},setClear:function(dt){mt!==dt&&(i.clearDepth(dt),mt=dt)},reset:function(){z=!1,Ne=null,Be=null,mt=null}}}function a(){let z=!1,Ne=null,Be=null,mt=null,dt=null,jt=null,Qt=null,Tn=null,Jn=null;return{setTest:function(an){z||(an?ot(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(an){Ne!==an&&!z&&(i.stencilMask(an),Ne=an)},setFunc:function(an,ti,Si){(Be!==an||mt!==ti||dt!==Si)&&(i.stencilFunc(an,ti,Si),Be=an,mt=ti,dt=Si)},setOp:function(an,ti,Si){(jt!==an||Qt!==ti||Tn!==Si)&&(i.stencilOp(an,ti,Si),jt=an,Qt=ti,Tn=Si)},setLocked:function(an){z=an},setClear:function(an){Jn!==an&&(i.clearStencil(an),Jn=an)},reset:function(){z=!1,Ne=null,Be=null,mt=null,dt=null,jt=null,Qt=null,Tn=null,Jn=null}}}let o=new s,l=new r,d=new a,h=new WeakMap,p=new WeakMap,u={},m={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,O=null,D=null,N=null,Q=null,T=new wt(0,0,0),C=0,ee=!1,X=null,se=null,B=null,K=null,ie=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Z=0,ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ce)[1]),V=Z>=1):ce.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),V=Z>=2);let fe=null,Se={},te=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Ae=new Qn().fromArray(te),Ce=new Qn().fromArray(de);function ke(z,Ne,Be,mt){let dt=new Uint8Array(4),jt=i.createTexture();i.bindTexture(z,jt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<Be;Qt++)n&&(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ne,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(Ne+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return jt}let gt={};gt[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(gt[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),d.setClear(0),ot(i.DEPTH_TEST),l.setFunc(Wo),ut(!1),R(Eu),ot(i.CULL_FACE),Xe(Vs);function ot(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function et(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Ee(z,Ne){return m[z]!==Ne?(i.bindFramebuffer(z,Ne),m[z]=Ne,n&&(z===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ne),z===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ne)),!0):!1}function J(z,Ne){let Be=M,mt=!1;if(z)if(Be=x.get(Ne),Be===void 0&&(Be=[],x.set(Ne,Be)),z.isWebGLMultipleRenderTargets){let dt=z.texture;if(Be.length!==dt.length||Be[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,Qt=dt.length;jt<Qt;jt++)Be[jt]=i.COLOR_ATTACHMENT0+jt;Be.length=dt.length,mt=!0}}else Be[0]!==i.COLOR_ATTACHMENT0&&(Be[0]=i.COLOR_ATTACHMENT0,mt=!0);else Be[0]!==i.BACK&&(Be[0]=i.BACK,mt=!0);mt&&(t.isWebGL2?i.drawBuffers(Be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Be))}function qt(z){return y!==z?(i.useProgram(z),y=z,!0):!1}let Ze={[lr]:i.FUNC_ADD,[Vp]:i.FUNC_SUBTRACT,[Gp]:i.FUNC_REVERSE_SUBTRACT};if(n)Ze[Ru]=i.MIN,Ze[Cu]=i.MAX;else{let z=e.get("EXT_blend_minmax");z!==null&&(Ze[Ru]=z.MIN_EXT,Ze[Cu]=z.MAX_EXT)}let Qe={[Wp]:i.ZERO,[Xp]:i.ONE,[qp]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[jp]:i.SRC_ALPHA_SATURATE,[Zp]:i.DST_COLOR,[$p]:i.DST_ALPHA,[Yp]:i.ONE_MINUS_SRC_COLOR,[Bc]:i.ONE_MINUS_SRC_ALPHA,[Jp]:i.ONE_MINUS_DST_COLOR,[Kp]:i.ONE_MINUS_DST_ALPHA,[Qp]:i.CONSTANT_COLOR,[em]:i.ONE_MINUS_CONSTANT_COLOR,[tm]:i.CONSTANT_ALPHA,[nm]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(z,Ne,Be,mt,dt,jt,Qt,Tn,Jn,an){if(z===Vs){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),z!==zp){if(z!==S||an!==ee){if((v!==lr||D!==lr)&&(i.blendEquation(i.FUNC_ADD),v=lr,D=lr),an)switch(z){case Zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tu:i.blendFunc(i.ONE,i.ONE);break;case wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Au:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}A=null,O=null,N=null,Q=null,T.set(0,0,0),C=0,S=z,ee=an}return}dt=dt||Ne,jt=jt||Be,Qt=Qt||mt,(Ne!==v||dt!==D)&&(i.blendEquationSeparate(Ze[Ne],Ze[dt]),v=Ne,D=dt),(Be!==A||mt!==O||jt!==N||Qt!==Q)&&(i.blendFuncSeparate(Qe[Be],Qe[mt],Qe[jt],Qe[Qt]),A=Be,O=mt,N=jt,Q=Qt),(Tn.equals(T)===!1||Jn!==C)&&(i.blendColor(Tn.r,Tn.g,Tn.b,Jn),T.copy(Tn),C=Jn),S=z,ee=!1}function ze(z,Ne){z.side===In?et(i.CULL_FACE):ot(i.CULL_FACE);let Be=z.side===Mi;Ne&&(Be=!Be),ut(Be),z.blending===Zr&&z.transparent===!1?Xe(Vs):Xe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),o.setMask(z.colorWrite);let mt=z.stencilWrite;d.setTest(mt),mt&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),j(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(z){X!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),X=z)}function R(z){z!==kp?(ot(i.CULL_FACE),z!==se&&(z===Eu?i.cullFace(i.BACK):z===Hp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),se=z}function E(z){z!==B&&(V&&i.lineWidth(z),B=z)}function j(z,Ne,Be){z?(ot(i.POLYGON_OFFSET_FILL),(K!==Ne||ie!==Be)&&(i.polygonOffset(Ne,Be),K=Ne,ie=Be)):et(i.POLYGON_OFFSET_FILL)}function ye(z){z?ot(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function xe(z){z===void 0&&(z=i.TEXTURE0+q-1),fe!==z&&(i.activeTexture(z),fe=z)}function le(z,Ne,Be){Be===void 0&&(fe===null?Be=i.TEXTURE0+q-1:Be=fe);let mt=Se[Be];mt===void 0&&(mt={type:void 0,texture:void 0},Se[Be]=mt),(mt.type!==z||mt.texture!==Ne)&&(fe!==Be&&(i.activeTexture(Be),fe=Be),i.bindTexture(z,Ne||gt[z]),mt.type=z,mt.texture=Ne)}function Ge(){let z=Se[fe];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(z){Ae.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ae.copy(z))}function $t(z){Ce.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ce.copy(z))}function Ht(z,Ne){let Be=p.get(Ne);Be===void 0&&(Be=new WeakMap,p.set(Ne,Be));let mt=Be.get(z);mt===void 0&&(mt=i.getUniformBlockIndex(Ne,z.name),Be.set(z,mt))}function Pt(z,Ne){let mt=p.get(Ne).get(z);h.get(Ne)!==mt&&(i.uniformBlockBinding(Ne,mt,z.__bindingPointIndex),h.set(Ne,mt))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},fe=null,Se={},m={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,O=null,D=null,N=null,Q=null,T=new wt(0,0,0),C=0,ee=!1,X=null,se=null,B=null,K=null,ie=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),d.reset()}return{buffers:{color:o,depth:l,stencil:d},enable:ot,disable:et,bindFramebuffer:Ee,drawBuffers:J,useProgram:qt,setBlending:Xe,setMaterial:ze,setFlipSided:ut,setCullFace:R,setLineWidth:E,setPolygonOffset:j,setScissorTest:ye,activeTexture:xe,bindTexture:le,unbindTexture:Ge,compressedTexImage2D:Pe,compressedTexImage3D:He,texImage2D:lt,texImage3D:$e,updateUBOMapping:Ht,uniformBlockBinding:Pt,texStorage2D:Dt,texStorage3D:ft,texSubImage2D:Ie,texSubImage3D:Tt,compressedTexSubImage2D:Te,compressedTexSubImage3D:Nt,scissor:At,viewport:$t,reset:Le}}function T_(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,p,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return m?new OffscreenCanvas(R,E):Jo("canvas")}function M(R,E,j,ye){let xe=1;if((R.width>ye||R.height>ye)&&(xe=ye/Math.max(R.width,R.height)),xe<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let le=E?Vc:Math.floor,Ge=le(xe*R.width),Pe=le(xe*R.height);p===void 0&&(p=x(Ge,Pe));let He=j?x(Ge,Pe):p;return He.width=Ge,He.height=Pe,He.getContext("2d").drawImage(R,0,0,Ge,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ge+"x"+Pe+")."),He}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return cf(R.width)&&cf(R.height)}function g(R){return o?!1:R.wrapS!==Zi||R.wrapT!==Zi||R.minFilter!==mi&&R.minFilter!==Oi}function S(R,E){return R.generateMipmaps&&E&&R.minFilter!==mi&&R.minFilter!==Oi}function v(R){i.generateMipmap(R)}function A(R,E,j,ye,xe=!1){if(o===!1)return E;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=E;if(E===i.RED&&(j===i.FLOAT&&(le=i.R32F),j===i.HALF_FLOAT&&(le=i.R16F),j===i.UNSIGNED_BYTE&&(le=i.R8)),E===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(le=i.R8UI),j===i.UNSIGNED_SHORT&&(le=i.R16UI),j===i.UNSIGNED_INT&&(le=i.R32UI),j===i.BYTE&&(le=i.R8I),j===i.SHORT&&(le=i.R16I),j===i.INT&&(le=i.R32I)),E===i.RG&&(j===i.FLOAT&&(le=i.RG32F),j===i.HALF_FLOAT&&(le=i.RG16F),j===i.UNSIGNED_BYTE&&(le=i.RG8)),E===i.RGBA){let Ge=xe?Yo:on.getTransfer(ye);j===i.FLOAT&&(le=i.RGBA32F),j===i.HALF_FLOAT&&(le=i.RGBA16F),j===i.UNSIGNED_BYTE&&(le=Ge===Mn?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function O(R,E,j){return S(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==mi&&R.minFilter!==Oi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function D(R){return R===mi||R===Pu||R===Ql?i.NEAREST:i.LINEAR}function N(R){let E=R.target;E.removeEventListener("dispose",N),T(E),E.isVideoTexture&&h.delete(E)}function Q(R){let E=R.target;E.removeEventListener("dispose",Q),ee(E)}function T(R){let E=n.get(R);if(E.__webglInit===void 0)return;let j=R.source,ye=u.get(j);if(ye){let xe=ye[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(R),Object.keys(ye).length===0&&u.delete(j)}n.remove(R)}function C(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let j=R.source,ye=u.get(j);delete ye[E.__cacheKey],a.memory.textures--}function ee(R){let E=R.texture,j=n.get(R),ye=n.get(E);if(ye.__webglTexture!==void 0&&(i.deleteTexture(ye.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(j.__webglFramebuffer[xe]))for(let le=0;le<j.__webglFramebuffer[xe].length;le++)i.deleteFramebuffer(j.__webglFramebuffer[xe][le]);else i.deleteFramebuffer(j.__webglFramebuffer[xe]);j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer[xe])}else{if(Array.isArray(j.__webglFramebuffer))for(let xe=0;xe<j.__webglFramebuffer.length;xe++)i.deleteFramebuffer(j.__webglFramebuffer[xe]);else i.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&i.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let xe=0;xe<j.__webglColorRenderbuffer.length;xe++)j.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(j.__webglColorRenderbuffer[xe]);j.__webglDepthRenderbuffer&&i.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let xe=0,le=E.length;xe<le;xe++){let Ge=n.get(E[xe]);Ge.__webglTexture&&(i.deleteTexture(Ge.__webglTexture),a.memory.textures--),n.remove(E[xe])}n.remove(E),n.remove(R)}let X=0;function se(){X=0}function B(){let R=X;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),X+=1,R}function K(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function ie(R,E){let j=n.get(R);if(R.isVideoTexture&&ze(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){let ye=R.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(j,R,E);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+E)}function q(R,E){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Ae(j,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+E)}function V(R,E){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Ae(j,R,E);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+E)}function Z(R,E){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Ce(j,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+E)}let ce={[Oa]:i.REPEAT,[Zi]:i.CLAMP_TO_EDGE,[kc]:i.MIRRORED_REPEAT},fe={[mi]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[Ql]:i.NEAREST_MIPMAP_LINEAR,[Oi]:i.LINEAR,[xm]:i.LINEAR_MIPMAP_NEAREST,[Fa]:i.LINEAR_MIPMAP_LINEAR},Se={[Pm]:i.NEVER,[Bm]:i.ALWAYS,[Im]:i.LESS,[vd]:i.LEQUAL,[Lm]:i.EQUAL,[Nm]:i.GEQUAL,[Dm]:i.GREATER,[Um]:i.NOTEQUAL};function te(R,E,j){if(j?(i.texParameteri(R,i.TEXTURE_WRAP_S,ce[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ce[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ce[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,fe[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,fe[E.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Zi||E.wrapT!==Zi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,D(E.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,D(E.minFilter)),E.minFilter!==mi&&E.minFilter!==Oi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ye=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===mi||E.minFilter!==Ql&&E.minFilter!==Fa||E.type===zs&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ka&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(R,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function de(R,E){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",N));let ye=E.source,xe=u.get(ye);xe===void 0&&(xe={},u.set(ye,xe));let le=K(E);if(le!==R.__cacheKey){xe[le]===void 0&&(xe[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),xe[le].usedTimes++;let Ge=xe[R.__cacheKey];Ge!==void 0&&(xe[R.__cacheKey].usedTimes--,Ge.usedTimes===0&&C(E)),R.__cacheKey=le,R.__webglTexture=xe[le].texture}return j}function Ae(R,E,j){let ye=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ye=i.TEXTURE_3D);let xe=de(R,E),le=E.source;t.bindTexture(ye,R.__webglTexture,i.TEXTURE0+j);let Ge=n.get(le);if(le.version!==Ge.__version||xe===!0){t.activeTexture(i.TEXTURE0+j);let Pe=on.getPrimaries(on.workingColorSpace),He=E.colorSpace===Fi?null:on.getPrimaries(E.colorSpace),Ie=E.colorSpace===Fi||Pe===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Tt=g(E)&&y(E.image)===!1,Te=M(E.image,Tt,!1,s.maxTextureSize);Te=ut(E,Te);let Nt=y(Te)||o,Dt=r.convert(E.format,E.colorSpace),ft=r.convert(E.type),lt=A(E.internalFormat,Dt,ft,E.colorSpace,E.isVideoTexture);te(ye,E,Nt);let $e,At=E.mipmaps,$t=o&&E.isVideoTexture!==!0&&lt!==yd,Ht=Ge.__version===void 0||xe===!0,Pt=O(E,Te,Nt);if(E.isDepthTexture)lt=i.DEPTH_COMPONENT,o?E.type===zs?lt=i.DEPTH_COMPONENT32F:E.type===Hs?lt=i.DEPTH_COMPONENT24:E.type===hr?lt=i.DEPTH24_STENCIL8:lt=i.DEPTH_COMPONENT16:E.type===zs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ur&&lt===i.DEPTH_COMPONENT&&E.type!==Rh&&E.type!==Hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Hs,ft=r.convert(E.type)),E.format===ta&&lt===i.DEPTH_COMPONENT&&(lt=i.DEPTH_STENCIL,E.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=hr,ft=r.convert(E.type))),Ht&&($t?t.texStorage2D(i.TEXTURE_2D,1,lt,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,lt,Te.width,Te.height,0,Dt,ft,null));else if(E.isDataTexture)if(At.length>0&&Nt){$t&&Ht&&t.texStorage2D(i.TEXTURE_2D,Pt,lt,At[0].width,At[0].height);for(let Le=0,z=At.length;Le<z;Le++)$e=At[Le],$t?t.texSubImage2D(i.TEXTURE_2D,Le,0,0,$e.width,$e.height,Dt,ft,$e.data):t.texImage2D(i.TEXTURE_2D,Le,lt,$e.width,$e.height,0,Dt,ft,$e.data);E.generateMipmaps=!1}else $t?(Ht&&t.texStorage2D(i.TEXTURE_2D,Pt,lt,Te.width,Te.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,Dt,ft,Te.data)):t.texImage2D(i.TEXTURE_2D,0,lt,Te.width,Te.height,0,Dt,ft,Te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$t&&Ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,lt,At[0].width,At[0].height,Te.depth);for(let Le=0,z=At.length;Le<z;Le++)$e=At[Le],E.format!==Ji?Dt!==null?$t?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,$e.width,$e.height,Te.depth,Dt,$e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Le,lt,$e.width,$e.height,Te.depth,0,$e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,$e.width,$e.height,Te.depth,Dt,ft,$e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Le,lt,$e.width,$e.height,Te.depth,0,Dt,ft,$e.data)}else{$t&&Ht&&t.texStorage2D(i.TEXTURE_2D,Pt,lt,At[0].width,At[0].height);for(let Le=0,z=At.length;Le<z;Le++)$e=At[Le],E.format!==Ji?Dt!==null?$t?t.compressedTexSubImage2D(i.TEXTURE_2D,Le,0,0,$e.width,$e.height,Dt,$e.data):t.compressedTexImage2D(i.TEXTURE_2D,Le,lt,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?t.texSubImage2D(i.TEXTURE_2D,Le,0,0,$e.width,$e.height,Dt,ft,$e.data):t.texImage2D(i.TEXTURE_2D,Le,lt,$e.width,$e.height,0,Dt,ft,$e.data)}else if(E.isDataArrayTexture)$t?(Ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,lt,Te.width,Te.height,Te.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Dt,ft,Te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,Te.width,Te.height,Te.depth,0,Dt,ft,Te.data);else if(E.isData3DTexture)$t?(Ht&&t.texStorage3D(i.TEXTURE_3D,Pt,lt,Te.width,Te.height,Te.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Dt,ft,Te.data)):t.texImage3D(i.TEXTURE_3D,0,lt,Te.width,Te.height,Te.depth,0,Dt,ft,Te.data);else if(E.isFramebufferTexture){if(Ht)if($t)t.texStorage2D(i.TEXTURE_2D,Pt,lt,Te.width,Te.height);else{let Le=Te.width,z=Te.height;for(let Ne=0;Ne<Pt;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,lt,Le,z,0,Dt,ft,null),Le>>=1,z>>=1}}else if(At.length>0&&Nt){$t&&Ht&&t.texStorage2D(i.TEXTURE_2D,Pt,lt,At[0].width,At[0].height);for(let Le=0,z=At.length;Le<z;Le++)$e=At[Le],$t?t.texSubImage2D(i.TEXTURE_2D,Le,0,0,Dt,ft,$e):t.texImage2D(i.TEXTURE_2D,Le,lt,Dt,ft,$e);E.generateMipmaps=!1}else $t?(Ht&&t.texStorage2D(i.TEXTURE_2D,Pt,lt,Te.width,Te.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,ft,Te)):t.texImage2D(i.TEXTURE_2D,0,lt,Dt,ft,Te);S(E,Nt)&&v(ye),Ge.__version=le.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ce(R,E,j){if(E.image.length!==6)return;let ye=de(R,E),xe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+j);let le=n.get(xe);if(xe.version!==le.__version||ye===!0){t.activeTexture(i.TEXTURE0+j);let Ge=on.getPrimaries(on.workingColorSpace),Pe=E.colorSpace===Fi?null:on.getPrimaries(E.colorSpace),He=E.colorSpace===Fi||Ge===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let Le=0;Le<6;Le++)!Ie&&!Tt?Te[Le]=M(E.image[Le],!1,!0,s.maxCubemapSize):Te[Le]=Tt?E.image[Le].image:E.image[Le],Te[Le]=ut(E,Te[Le]);let Nt=Te[0],Dt=y(Nt)||o,ft=r.convert(E.format,E.colorSpace),lt=r.convert(E.type),$e=A(E.internalFormat,ft,lt,E.colorSpace),At=o&&E.isVideoTexture!==!0,$t=le.__version===void 0||ye===!0,Ht=O(E,Nt,Dt);te(i.TEXTURE_CUBE_MAP,E,Dt);let Pt;if(Ie){At&&$t&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,$e,Nt.width,Nt.height);for(let Le=0;Le<6;Le++){Pt=Te[Le].mipmaps;for(let z=0;z<Pt.length;z++){let Ne=Pt[z];E.format!==Ji?ft!==null?At?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,z,0,0,Ne.width,Ne.height,ft,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,z,$e,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,z,0,0,Ne.width,Ne.height,ft,lt,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,z,$e,Ne.width,Ne.height,0,ft,lt,Ne.data)}}}else{Pt=E.mipmaps,At&&$t&&(Pt.length>0&&Ht++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,$e,Te[0].width,Te[0].height));for(let Le=0;Le<6;Le++)if(Tt){At?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Te[Le].width,Te[Le].height,ft,lt,Te[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,$e,Te[Le].width,Te[Le].height,0,ft,lt,Te[Le].data);for(let z=0;z<Pt.length;z++){let Be=Pt[z].image[Le].image;At?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,z+1,0,0,Be.width,Be.height,ft,lt,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,z+1,$e,Be.width,Be.height,0,ft,lt,Be.data)}}else{At?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ft,lt,Te[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,$e,ft,lt,Te[Le]);for(let z=0;z<Pt.length;z++){let Ne=Pt[z];At?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,z+1,0,0,ft,lt,Ne.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,z+1,$e,ft,lt,Ne.image[Le])}}}S(E,Dt)&&v(i.TEXTURE_CUBE_MAP),le.__version=xe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ke(R,E,j,ye,xe,le){let Ge=r.convert(j.format,j.colorSpace),Pe=r.convert(j.type),He=A(j.internalFormat,Ge,Pe,j.colorSpace);if(!n.get(E).__hasExternalTextures){let Tt=Math.max(1,E.width>>le),Te=Math.max(1,E.height>>le);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,le,He,Tt,Te,E.depth,0,Ge,Pe,null):t.texImage2D(xe,le,He,Tt,Te,0,Ge,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Xe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,xe,n.get(j).__webglTexture,0,Qe(E)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,xe,n.get(j).__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(R,E,j){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ye=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(j||Xe(E)){let xe=E.depthTexture;xe&&xe.isDepthTexture&&(xe.type===zs?ye=i.DEPTH_COMPONENT32F:xe.type===Hs&&(ye=i.DEPTH_COMPONENT24));let le=Qe(E);Xe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,ye,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ye,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ye,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){let ye=Qe(E);j&&Xe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,E.width,E.height):Xe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let ye=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let xe=0;xe<ye.length;xe++){let le=ye[xe],Ge=r.convert(le.format,le.colorSpace),Pe=r.convert(le.type),He=A(le.internalFormat,Ge,Pe,le.colorSpace),Ie=Qe(E);j&&Xe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,He,E.width,E.height):Xe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,He,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,He,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie(E.depthTexture,0);let ye=n.get(E.depthTexture).__webglTexture,xe=Qe(E);if(E.depthTexture.format===ur)Xe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(E.depthTexture.format===ta)Xe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function et(R){let E=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ot(E.__webglFramebuffer,R)}else if(j){E.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ye]),E.__webglDepthbuffer[ye]=i.createRenderbuffer(),gt(E.__webglDepthbuffer[ye],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),gt(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(R,E,j){let ye=n.get(R);E!==void 0&&ke(ye.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&et(R)}function J(R){let E=R.texture,j=n.get(R),ye=n.get(E);R.addEventListener("dispose",Q),R.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=E.version,a.memory.textures++);let xe=R.isWebGLCubeRenderTarget===!0,le=R.isWebGLMultipleRenderTargets===!0,Ge=y(R)||o;if(xe){j.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Pe]=[];for(let He=0;He<E.mipmaps.length;He++)j.__webglFramebuffer[Pe][He]=i.createFramebuffer()}else j.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)j.__webglFramebuffer[Pe]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(le)if(s.drawBuffers){let Pe=R.texture;for(let He=0,Ie=Pe.length;He<Ie;He++){let Tt=n.get(Pe[He]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Xe(R)===!1){let Pe=le?E:[E];j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let He=0;He<Pe.length;He++){let Ie=Pe[He];j.__webglColorRenderbuffer[He]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[He]);let Tt=r.convert(Ie.format,Ie.colorSpace),Te=r.convert(Ie.type),Nt=A(Ie.internalFormat,Tt,Te,Ie.colorSpace,R.isXRRenderTarget===!0),Dt=Qe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Nt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,j.__webglColorRenderbuffer[He])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),te(i.TEXTURE_CUBE_MAP,E,Ge);for(let Pe=0;Pe<6;Pe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)ke(j.__webglFramebuffer[Pe][He],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,He);else ke(j.__webglFramebuffer[Pe],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);S(E,Ge)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){let Pe=R.texture;for(let He=0,Ie=Pe.length;He<Ie;He++){let Tt=Pe[He],Te=n.get(Tt);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),te(i.TEXTURE_2D,Tt,Ge),ke(j.__webglFramebuffer,R,Tt,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,0),S(Tt,Ge)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?Pe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,ye.__webglTexture),te(Pe,E,Ge),o&&E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)ke(j.__webglFramebuffer[He],R,E,i.COLOR_ATTACHMENT0,Pe,He);else ke(j.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,Pe,0);S(E,Ge)&&v(Pe),t.unbindTexture()}R.depthBuffer&&et(R)}function qt(R){let E=y(R)||o,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ye=0,xe=j.length;ye<xe;ye++){let le=j[ye];if(S(le,E)){let Ge=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(le).__webglTexture;t.bindTexture(Ge,Pe),v(Ge),t.unbindTexture()}}}function Ze(R){if(o&&R.samples>0&&Xe(R)===!1){let E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,ye=R.height,xe=i.COLOR_BUFFER_BIT,le=[],Ge=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(R),He=R.isWebGLMultipleRenderTargets===!0;if(He)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){le.push(i.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&le.push(Ge);let Tt=Pe.__ignoreDepthValues!==void 0?Pe.__ignoreDepthValues:!1;if(Tt===!1&&(R.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),He&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]),Tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ge])),He){let Te=n.get(E[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,j,ye,0,0,j,ye,xe,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),He)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);let Tt=n.get(E[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}}function Qe(R){return Math.min(s.maxSamples,R.samples)}function Xe(R){let E=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(R){let E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function ut(R,E){let j=R.colorSpace,ye=R.format,xe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Hc||j!==xs&&j!==Fi&&(on.getTransfer(j)===Mn?o===!1?e.has("EXT_sRGB")===!0&&ye===Ji?(R.format=Hc,R.minFilter=Oi,R.generateMipmaps=!1):E=jo.sRGBToLinear(E):(ye!==Ji||xe!==Ws)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}this.allocateTextureUnit=B,this.resetTextureUnits=se,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Ee,this.setupRenderTarget=J,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Xe}function w_(i,e,t){let n=t.isWebGL2;function s(r,a=Fi){let o,l=on.getTransfer(a);if(r===Ws)return i.UNSIGNED_BYTE;if(r===fd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===dd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===_m)return i.BYTE;if(r===vm)return i.SHORT;if(r===Rh)return i.UNSIGNED_SHORT;if(r===ud)return i.INT;if(r===Hs)return i.UNSIGNED_INT;if(r===zs)return i.FLOAT;if(r===ka)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Mm)return i.ALPHA;if(r===Ji)return i.RGBA;if(r===bm)return i.LUMINANCE;if(r===Sm)return i.LUMINANCE_ALPHA;if(r===ur)return i.DEPTH_COMPONENT;if(r===ta)return i.DEPTH_STENCIL;if(r===Hc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Em)return i.RED;if(r===pd)return i.RED_INTEGER;if(r===Tm)return i.RG;if(r===md)return i.RG_INTEGER;if(r===gd)return i.RGBA_INTEGER;if(r===ec||r===tc||r===nc||r===ic)if(l===Mn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ec)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ec)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ic)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Iu||r===Lu||r===Du||r===Uu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Iu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Du)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Uu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Nu||r===Bu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Nu)return l===Mn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Bu)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ou||r===Fu||r===ku||r===Hu||r===zu||r===Vu||r===Gu||r===Wu||r===Xu||r===qu||r===Yu||r===$u||r===Ku||r===Zu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ou)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fu)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ku)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hu)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zu)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vu)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gu)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wu)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xu)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qu)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yu)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$u)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ku)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zu)return l===Mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sc||r===Ju||r===ju)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===sc)return l===Mn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ju)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ju)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wm||r===Qu||r===ef||r===tf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===sc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Qu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ef)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===hr?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var th=class extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},vi=class extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}},A_={type:"move"},Da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(let M of e.hand.values()){let y=t.getJointPose(M,n),g=this._getHandJoint(d,M);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let h=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,x=.005;d.inputState.pinching&&u>m+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=m-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nh=class extends qs{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,d=null,h=null,p=null,u=null,m=null,x=null,M=t.getContextAttributes(),y=null,g=null,S=[],v=[],A=new qe,O=null,D=new gi;D.layers.enable(1),D.viewport=new Qn;let N=new gi;N.layers.enable(2),N.viewport=new Qn;let Q=[D,N],T=new th;T.layers.enable(1),T.layers.enable(2);let C=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=S[te];return de===void 0&&(de=new Da,S[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=S[te];return de===void 0&&(de=new Da,S[te]=de),de.getGripSpace()},this.getHand=function(te){let de=S[te];return de===void 0&&(de=new Da,S[te]=de),de.getHandSpace()};function X(te){let de=v.indexOf(te.inputSource);if(de===-1)return;let Ae=S[de];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,d||a),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function se(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",B);for(let te=0;te<S.length;te++){let de=v[te];de!==null&&(v[te]=null,S[te].disconnect(de))}C=null,ee=null,e.setRenderTarget(y),m=null,u=null,p=null,s=null,g=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(te){d=te},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",se),s.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let de={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new _s(m.framebufferWidth,m.framebufferHeight,{format:Ji,type:Ws,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let de=null,Ae=null,Ce=null;M.depth&&(Ce=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=M.stencil?ta:ur,Ae=M.stencil?hr:Hs);let ke={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};p=new XRWebGLBinding(s,t),u=p.createProjectionLayer(ke),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),g=new _s(u.textureWidth,u.textureHeight,{format:Ji,type:Ws,depthTexture:new ol(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});let gt=e.properties.get(g);gt.__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),d=null,a=await s.requestReferenceSpace(o),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(te){for(let de=0;de<te.removed.length;de++){let Ae=te.removed[de],Ce=v.indexOf(Ae);Ce>=0&&(v[Ce]=null,S[Ce].disconnect(Ae))}for(let de=0;de<te.added.length;de++){let Ae=te.added[de],Ce=v.indexOf(Ae);if(Ce===-1){for(let gt=0;gt<S.length;gt++)if(gt>=v.length){v.push(Ae),Ce=gt;break}else if(v[gt]===null){v[gt]=Ae,Ce=gt;break}if(Ce===-1)break}let ke=S[Ce];ke&&ke.connect(Ae)}}let K=new F,ie=new F;function q(te,de,Ae){K.setFromMatrixPosition(de.matrixWorld),ie.setFromMatrixPosition(Ae.matrixWorld);let Ce=K.distanceTo(ie),ke=de.projectionMatrix.elements,gt=Ae.projectionMatrix.elements,ot=ke[14]/(ke[10]-1),et=ke[14]/(ke[10]+1),Ee=(ke[9]+1)/ke[5],J=(ke[9]-1)/ke[5],qt=(ke[8]-1)/ke[0],Ze=(gt[8]+1)/gt[0],Qe=ot*qt,Xe=ot*Ze,ze=Ce/(-qt+Ze),ut=ze*-qt;de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ut),te.translateZ(ze),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let R=ot+ze,E=et+ze,j=Qe-ut,ye=Xe+(Ce-ut),xe=Ee*et/E*R,le=J*et/E*R;te.projectionMatrix.makePerspective(j,ye,xe,le,R,E),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function V(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;T.near=N.near=D.near=te.near,T.far=N.far=D.far=te.far,(C!==T.near||ee!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,ee=T.far);let de=te.parent,Ae=T.cameras;V(T,de);for(let Ce=0;Ce<Ae.length;Ce++)V(Ae[Ce],de);Ae.length===2?q(T,D,N):T.projectionMatrix.copy(D.projectionMatrix),Z(te,T,de)};function Z(te,de,Ae){Ae===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=zc*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(te){l=te,u!==null&&(u.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)};let ce=null;function fe(te,de){if(h=de.getViewerPose(d||a),x=de,h!==null){let Ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let Ce=!1;Ae.length!==T.cameras.length&&(T.cameras.length=0,Ce=!0);for(let ke=0;ke<Ae.length;ke++){let gt=Ae[ke],ot=null;if(m!==null)ot=m.getViewport(gt);else{let Ee=p.getViewSubImage(u,gt);ot=Ee.viewport,ke===0&&(e.setRenderTargetTextures(g,Ee.colorTexture,u.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(g))}let et=Q[ke];et===void 0&&(et=new gi,et.layers.enable(ke),et.viewport=new Qn,Q[ke]=et),et.matrix.fromArray(gt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(gt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ot.x,ot.y,ot.width,ot.height),ke===0&&(T.matrix.copy(et.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ce===!0&&T.cameras.push(et)}}for(let Ae=0;Ae<S.length;Ae++){let Ce=v[Ae],ke=S[Ae];Ce!==null&&ke!==void 0&&ke.update(Ce,de,d||a)}ce&&ce(te,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),x=null}let Se=new Ed;Se.setAnimationLoop(fe),this.setAnimationLoop=function(te){ce=te},this.dispose=function(){}}};function R_(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,Sd(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,S,v,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(y,g):g.isMeshToonMaterial?(r(y,g),p(y,g)):g.isMeshPhongMaterial?(r(y,g),h(y,g)):g.isMeshStandardMaterial?(r(y,g),u(y,g),g.isMeshPhysicalMaterial&&m(y,g,A)):g.isMeshMatcapMaterial?(r(y,g),x(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),M(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(a(y,g),g.isLineDashedMaterial&&o(y,g)):g.isPointsMaterial?l(y,g,S,v):g.isSpriteMaterial?d(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Mi&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Mi&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let S=e.get(g).envMap;if(S&&(y.envMap.value=S,y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function a(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function o(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function l(y,g,S,v){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*S,y.scale.value=v*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function h(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function p(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function u(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function m(y,g,S){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mi&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,g){g.matcap&&(y.matcap.value=g.matcap)}function M(y,g){let S=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C_(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let A=v.program;n.uniformBlockBinding(S,A)}function d(S,v){let A=s[S.id];A===void 0&&(x(S),A=h(S),s[S.id]=A,S.addEventListener("dispose",y));let O=v.program;n.updateUBOMapping(S,O);let D=e.render.frame;r[S.id]!==D&&(u(S),r[S.id]=D)}function h(S){let v=p();S.__bindingPointIndex=v;let A=i.createBuffer(),O=S.__size,D=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,O,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let v=s[S.id],A=S.uniforms,O=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let D=0,N=A.length;D<N;D++){let Q=Array.isArray(A[D])?A[D]:[A[D]];for(let T=0,C=Q.length;T<C;T++){let ee=Q[T];if(m(ee,D,T,O)===!0){let X=ee.__offset,se=Array.isArray(ee.value)?ee.value:[ee.value],B=0;for(let K=0;K<se.length;K++){let ie=se[K],q=M(ie);typeof ie=="number"||typeof ie=="boolean"?(ee.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,X+B,ee.__data)):ie.isMatrix3?(ee.__data[0]=ie.elements[0],ee.__data[1]=ie.elements[1],ee.__data[2]=ie.elements[2],ee.__data[3]=0,ee.__data[4]=ie.elements[3],ee.__data[5]=ie.elements[4],ee.__data[6]=ie.elements[5],ee.__data[7]=0,ee.__data[8]=ie.elements[6],ee.__data[9]=ie.elements[7],ee.__data[10]=ie.elements[8],ee.__data[11]=0):(ie.toArray(ee.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,ee.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,v,A,O){let D=S.value,N=v+"_"+A;if(O[N]===void 0)return typeof D=="number"||typeof D=="boolean"?O[N]=D:O[N]=D.clone(),!0;{let Q=O[N];if(typeof D=="number"||typeof D=="boolean"){if(Q!==D)return O[N]=D,!0}else if(Q.equals(D)===!1)return Q.copy(D),!0}return!1}function x(S){let v=S.uniforms,A=0,O=16;for(let N=0,Q=v.length;N<Q;N++){let T=Array.isArray(v[N])?v[N]:[v[N]];for(let C=0,ee=T.length;C<ee;C++){let X=T[C],se=Array.isArray(X.value)?X.value:[X.value];for(let B=0,K=se.length;B<K;B++){let ie=se[B],q=M(ie),V=A%O;V!==0&&O-V<q.boundary&&(A+=O-V),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=q.storage}}}let D=A%O;return D>0&&(A+=O-D),S.__size=A,S.__cache={},this}function M(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function y(S){let v=S.target;v.removeEventListener("dispose",y);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:d,dispose:g}}var Ga=class{constructor(e={}){let{canvas:t=Fm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let m=new Uint32Array(4),x=new Int32Array(4),M=null,y=null,g=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this._useLegacyLights=!1,this.toneMapping=Gs,this.toneMappingExposure=1;let v=this,A=!1,O=0,D=0,N=null,Q=-1,T=null,C=new Qn,ee=new Qn,X=null,se=new wt(0),B=0,K=t.width,ie=t.height,q=1,V=null,Z=null,ce=new Qn(0,0,K,ie),fe=new Qn(0,0,K,ie),Se=!1,te=new Va,de=!1,Ae=!1,Ce=null,ke=new bn,gt=new qe,ot=new F,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return N===null?q:1}let J=n;function qt(w,G){for(let $=0;$<w.length;$++){let W=w[$],Y=t.getContext(W,G);if(Y!==null)return Y}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wh}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),J===null){let G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),J=qt(G,w),J===null)throw qt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ze,Qe,Xe,ze,ut,R,E,j,ye,xe,le,Ge,Pe,He,Ie,Tt,Te,Nt,Dt,ft,lt,$e,At,$t;function Ht(){Ze=new $y(J),Qe=new Vy(J,Ze,e),Ze.init(Qe),$e=new w_(J,Ze,Qe),Xe=new E_(J,Ze,Qe),ze=new Jy(J),ut=new f_,R=new T_(J,Ze,Xe,ut,Qe,$e,ze),E=new Wy(v),j=new Yy(v),ye=new rg(J,Qe),At=new Hy(J,Ze,ye,Qe),xe=new Ky(J,ye,ze,At),le=new tx(J,xe,ye,ze),Dt=new ex(J,Qe,R),Tt=new Gy(ut),Ge=new u_(v,E,j,Ze,Qe,At,Tt),Pe=new R_(v,ut),He=new p_,Ie=new v_(Ze,Qe),Nt=new ky(v,E,j,Xe,le,u,l),Te=new S_(v,le,Qe),$t=new C_(J,ze,Qe,Xe),ft=new zy(J,Ze,ze,Qe),lt=new Zy(J,Ze,ze,Qe),ze.programs=Ge.programs,v.capabilities=Qe,v.extensions=Ze,v.properties=ut,v.renderLists=He,v.shadowMap=Te,v.state=Xe,v.info=ze}Ht();let Pt=new nh(v,J);this.xr=Pt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let w=Ze.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ze.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(K,ie,!1))},this.getSize=function(w){return w.set(K,ie)},this.setSize=function(w,G,$=!0){if(Pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,ie=G,t.width=Math.floor(w*q),t.height=Math.floor(G*q),$===!0&&(t.style.width=w+"px",t.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(K*q,ie*q).floor()},this.setDrawingBufferSize=function(w,G,$){K=w,ie=G,q=$,t.width=Math.floor(w*$),t.height=Math.floor(G*$),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,G,$,W){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,G,$,W),Xe.viewport(C.copy(ce).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(fe)},this.setScissor=function(w,G,$,W){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,G,$,W),Xe.scissor(ee.copy(fe).multiplyScalar(q).floor())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){Xe.setScissorTest(Se=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(w=!0,G=!0,$=!0){let W=0;if(w){let Y=!1;if(N!==null){let Ue=N.texture.format;Y=Ue===gd||Ue===md||Ue===pd}if(Y){let Ue=N.texture.type,Ye=Ue===Ws||Ue===Hs||Ue===Rh||Ue===hr||Ue===fd||Ue===dd,st=Nt.getClearColor(),ct=Nt.getClearAlpha(),vt=st.r,Je=st.g,Mt=st.b;Ye?(m[0]=vt,m[1]=Je,m[2]=Mt,m[3]=ct,J.clearBufferuiv(J.COLOR,0,m)):(x[0]=vt,x[1]=Je,x[2]=Mt,x[3]=ct,J.clearBufferiv(J.COLOR,0,x))}else W|=J.COLOR_BUFFER_BIT}G&&(W|=J.DEPTH_BUFFER_BIT),$&&(W|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),He.dispose(),Ie.dispose(),ut.dispose(),E.dispose(),j.dispose(),le.dispose(),At.dispose(),$t.dispose(),Ge.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Jn),Pt.removeEventListener("sessionend",an),Ce&&(Ce.dispose(),Ce=null),ti.stop()};function Le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=ze.autoReset,G=Te.enabled,$=Te.autoUpdate,W=Te.needsUpdate,Y=Te.type;Ht(),ze.autoReset=w,Te.enabled=G,Te.autoUpdate=$,Te.needsUpdate=W,Te.type=Y}function Ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Be(w){let G=w.target;G.removeEventListener("dispose",Be),mt(G)}function mt(w){dt(w),ut.remove(w)}function dt(w){let G=ut.get(w).programs;G!==void 0&&(G.forEach(function($){Ge.releaseProgram($)}),w.isShaderMaterial&&Ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,$,W,Y,Ue){G===null&&(G=et);let Ye=Y.isMesh&&Y.matrixWorld.determinant()<0,st=xr(w,G,$,W,Y);Xe.setMaterial(W,Ye);let ct=$.index,vt=1;if(W.wireframe===!0){if(ct=xe.getWireframeAttribute($),ct===void 0)return;vt=2}let Je=$.drawRange,Mt=$.attributes.position,mn=Je.start*vt,Bn=(Je.start+Je.count)*vt;Ue!==null&&(mn=Math.max(mn,Ue.start*vt),Bn=Math.min(Bn,(Ue.start+Ue.count)*vt)),ct!==null?(mn=Math.max(mn,0),Bn=Math.min(Bn,ct.count)):Mt!=null&&(mn=Math.max(mn,0),Bn=Math.min(Bn,Mt.count));let On=Bn-mn;if(On<0||On===1/0)return;At.setup(Y,W,st,$,ct);let Vi,ln=ft;if(ct!==null&&(Vi=ye.get(ct),ln=lt,ln.setIndex(Vi)),Y.isMesh)W.wireframe===!0?(Xe.setLineWidth(W.wireframeLinewidth*Ee()),ln.setMode(J.LINES)):ln.setMode(J.TRIANGLES);else if(Y.isLine){let xt=W.linewidth;xt===void 0&&(xt=1),Xe.setLineWidth(xt*Ee()),Y.isLineSegments?ln.setMode(J.LINES):Y.isLineLoop?ln.setMode(J.LINE_LOOP):ln.setMode(J.LINE_STRIP)}else Y.isPoints?ln.setMode(J.POINTS):Y.isSprite&&ln.setMode(J.TRIANGLES);if(Y.isBatchedMesh)ln.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ln.renderInstances(mn,On,Y.count);else if($.isInstancedBufferGeometry){let xt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,_r=Math.min($.instanceCount,xt);ln.renderInstances(mn,On,_r)}else ln.render(mn,On)};function jt(w,G,$){w.transparent===!0&&w.side===In&&w.forceSinglePass===!1?(w.side=Mi,w.needsUpdate=!0,As(w,G,$),w.side=Xs,w.needsUpdate=!0,As(w,G,$),w.side=In):As(w,G,$)}this.compile=function(w,G,$=null){$===null&&($=w),y=Ie.get($),y.init(),S.push(y),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),w!==$&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights(v._useLegacyLights);let W=new Set;return w.traverse(function(Y){let Ue=Y.material;if(Ue)if(Array.isArray(Ue))for(let Ye=0;Ye<Ue.length;Ye++){let st=Ue[Ye];jt(st,$,Y),W.add(st)}else jt(Ue,$,Y),W.add(Ue)}),S.pop(),y=null,W},this.compileAsync=function(w,G,$=null){let W=this.compile(w,G,$);return new Promise(Y=>{function Ue(){if(W.forEach(function(Ye){ut.get(Ye).currentProgram.isReady()&&W.delete(Ye)}),W.size===0){Y(w);return}setTimeout(Ue,10)}Ze.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Qt=null;function Tn(w){Qt&&Qt(w)}function Jn(){ti.stop()}function an(){ti.start()}let ti=new Ed;ti.setAnimationLoop(Tn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(w){Qt=w,Pt.setAnimationLoop(w),w===null?ti.stop():ti.start()},Pt.addEventListener("sessionstart",Jn),Pt.addEventListener("sessionend",an),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(G),G=Pt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,G,N),y=Ie.get(w,S.length),y.init(),S.push(y),ke.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),te.setFromProjectionMatrix(ke),Ae=this.localClippingEnabled,de=Tt.init(this.clippingPlanes,Ae),M=He.get(w,g.length),M.init(),g.push(M),Si(w,G,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(V,Z),this.info.render.frame++,de===!0&&Tt.beginShadows();let $=y.state.shadowsArray;if(Te.render($,w,G),de===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Nt.render(M,w),y.setupLights(v._useLegacyLights),G.isArrayCamera){let W=G.cameras;for(let Y=0,Ue=W.length;Y<Ue;Y++){let Ye=W[Y];yr(M,w,Ye,Ye.viewport)}}else yr(M,w,G);N!==null&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(v,w,G),At.resetDefaultState(),Q=-1,T=null,S.pop(),S.length>0?y=S[S.length-1]:y=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function Si(w,G,$,W){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){W&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ke);let Ye=le.update(w),st=w.material;st.visible&&M.push(w,Ye,st,$,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||te.intersectsObject(w))){let Ye=le.update(w),st=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),ot.copy(Ye.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(ke)),Array.isArray(st)){let ct=Ye.groups;for(let vt=0,Je=ct.length;vt<Je;vt++){let Mt=ct[vt],mn=st[Mt.materialIndex];mn&&mn.visible&&M.push(w,Ye,mn,$,ot.z,Mt)}}else st.visible&&M.push(w,Ye,st,$,ot.z,null)}}let Ue=w.children;for(let Ye=0,st=Ue.length;Ye<st;Ye++)Si(Ue[Ye],G,$,W)}function yr(w,G,$,W){let Y=w.opaque,Ue=w.transmissive,Ye=w.transparent;y.setupLightsView($),de===!0&&Tt.setGlobalState(v.clippingPlanes,$),Ue.length>0&&to(Y,Ue,G,$),W&&Xe.viewport(C.copy(W)),Y.length>0&&ws(Y,G,$),Ue.length>0&&ws(Ue,G,$),Ye.length>0&&ws(Ye,G,$),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function to(w,G,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let Ue=Qe.isWebGL2;Ce===null&&(Ce=new _s(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")?ka:Ws,minFilter:Fa,samples:Ue?4:0})),v.getDrawingBufferSize(gt),Ue?Ce.setSize(gt.x,gt.y):Ce.setSize(Vc(gt.x),Vc(gt.y));let Ye=v.getRenderTarget();v.setRenderTarget(Ce),v.getClearColor(se),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let st=v.toneMapping;v.toneMapping=Gs,ws(w,$,W),R.updateMultisampleRenderTarget(Ce),R.updateRenderTargetMipmap(Ce);let ct=!1;for(let vt=0,Je=G.length;vt<Je;vt++){let Mt=G[vt],mn=Mt.object,Bn=Mt.geometry,On=Mt.material,Vi=Mt.group;if(On.side===In&&mn.layers.test(W.layers)){let ln=On.side;On.side=Mi,On.needsUpdate=!0,no(mn,$,W,Bn,On,Vi),On.side=ln,On.needsUpdate=!0,ct=!0}}ct===!0&&(R.updateMultisampleRenderTarget(Ce),R.updateRenderTargetMipmap(Ce)),v.setRenderTarget(Ye),v.setClearColor(se,B),v.toneMapping=st}function ws(w,G,$){let W=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,Ue=w.length;Y<Ue;Y++){let Ye=w[Y],st=Ye.object,ct=Ye.geometry,vt=W===null?Ye.material:W,Je=Ye.group;st.layers.test($.layers)&&no(st,G,$,ct,vt,Je)}}function no(w,G,$,W,Y,Ue){w.onBeforeRender(v,G,$,W,Y,Ue),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(v,G,$,W,w,Ue),Y.transparent===!0&&Y.side===In&&Y.forceSinglePass===!1?(Y.side=Mi,Y.needsUpdate=!0,v.renderBufferDirect($,G,W,Y,w,Ue),Y.side=Xs,Y.needsUpdate=!0,v.renderBufferDirect($,G,W,Y,w,Ue),Y.side=In):v.renderBufferDirect($,G,W,Y,w,Ue),w.onAfterRender(v,G,$,W,Y,Ue)}function As(w,G,$){G.isScene!==!0&&(G=et);let W=ut.get(w),Y=y.state.lights,Ue=y.state.shadowsArray,Ye=Y.state.version,st=Ge.getParameters(w,Y.state,Ue,G,$),ct=Ge.getProgramCacheKey(st),vt=W.programs;W.environment=w.isMeshStandardMaterial?G.environment:null,W.fog=G.fog,W.envMap=(w.isMeshStandardMaterial?j:E).get(w.envMap||W.environment),vt===void 0&&(w.addEventListener("dispose",Be),vt=new Map,W.programs=vt);let Je=vt.get(ct);if(Je!==void 0){if(W.currentProgram===Je&&W.lightsStateVersion===Ye)return fa(w,st),Je}else st.uniforms=Ge.getUniforms(w),w.onBuild($,st,v),w.onBeforeCompile(st,v),Je=Ge.acquireProgram(st,ct),vt.set(ct,Je),W.uniforms=st.uniforms;let Mt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=Tt.uniform),fa(w,st),W.needsLights=io(w),W.lightsStateVersion=Ye,W.needsLights&&(Mt.ambientLightColor.value=Y.state.ambient,Mt.lightProbe.value=Y.state.probe,Mt.directionalLights.value=Y.state.directional,Mt.directionalLightShadows.value=Y.state.directionalShadow,Mt.spotLights.value=Y.state.spot,Mt.spotLightShadows.value=Y.state.spotShadow,Mt.rectAreaLights.value=Y.state.rectArea,Mt.ltc_1.value=Y.state.rectAreaLTC1,Mt.ltc_2.value=Y.state.rectAreaLTC2,Mt.pointLights.value=Y.state.point,Mt.pointLightShadows.value=Y.state.pointShadow,Mt.hemisphereLights.value=Y.state.hemi,Mt.directionalShadowMap.value=Y.state.directionalShadowMap,Mt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Mt.spotShadowMap.value=Y.state.spotShadowMap,Mt.spotLightMatrix.value=Y.state.spotLightMatrix,Mt.spotLightMap.value=Y.state.spotLightMap,Mt.pointShadowMap.value=Y.state.pointShadowMap,Mt.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.currentProgram=Je,W.uniformsList=null,Je}function ua(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=jr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function fa(w,G){let $=ut.get(w);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function xr(w,G,$,W,Y){G.isScene!==!0&&(G=et),R.resetTextureUnits();let Ue=G.fog,Ye=W.isMeshStandardMaterial?G.environment:null,st=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:xs,ct=(W.isMeshStandardMaterial?j:E).get(W.envMap||Ye),vt=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Je=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Mt=!!$.morphAttributes.position,mn=!!$.morphAttributes.normal,Bn=!!$.morphAttributes.color,On=Gs;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(On=v.toneMapping);let Vi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ln=Vi!==void 0?Vi.length:0,xt=ut.get(W),_r=y.state.lights;if(de===!0&&(Ae===!0||w!==T)){let ht=w===T&&W.id===Q;Tt.setState(W,w,ht)}let cn=!1;W.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==_r.state.version||xt.outputColorSpace!==st||Y.isBatchedMesh&&xt.batching===!1||!Y.isBatchedMesh&&xt.batching===!0||Y.isInstancedMesh&&xt.instancing===!1||!Y.isInstancedMesh&&xt.instancing===!0||Y.isSkinnedMesh&&xt.skinning===!1||!Y.isSkinnedMesh&&xt.skinning===!0||Y.isInstancedMesh&&xt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&xt.instancingColor===!1&&Y.instanceColor!==null||xt.envMap!==ct||W.fog===!0&&xt.fog!==Ue||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Tt.numPlanes||xt.numIntersection!==Tt.numIntersection)||xt.vertexAlphas!==vt||xt.vertexTangents!==Je||xt.morphTargets!==Mt||xt.morphNormals!==mn||xt.morphColors!==Bn||xt.toneMapping!==On||Qe.isWebGL2===!0&&xt.morphTargetsCount!==ln)&&(cn=!0):(cn=!0,xt.__version=W.version);let Pi=xt.currentProgram;cn===!0&&(Pi=As(W,G,Y));let ni=!1,Ii=!1,Xn=!1,wn=Pi.getUniforms(),Ei=xt.uniforms;if(Xe.useProgram(Pi.program)&&(ni=!0,Ii=!0,Xn=!0),W.id!==Q&&(Q=W.id,Ii=!0),ni||T!==w){wn.setValue(J,"projectionMatrix",w.projectionMatrix),wn.setValue(J,"viewMatrix",w.matrixWorldInverse);let ht=wn.map.cameraPosition;ht!==void 0&&ht.setValue(J,ot.setFromMatrixPosition(w.matrixWorld)),Qe.logarithmicDepthBuffer&&wn.setValue(J,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wn.setValue(J,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Ii=!0,Xn=!0)}if(Y.isSkinnedMesh){wn.setOptional(J,Y,"bindMatrix"),wn.setOptional(J,Y,"bindMatrixInverse");let ht=Y.skeleton;ht&&(Qe.floatVertexTextures?(ht.boneTexture===null&&ht.computeBoneTexture(),wn.setValue(J,"boneTexture",ht.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(wn.setOptional(J,Y,"batchingTexture"),wn.setValue(J,"batchingTexture",Y._matricesTexture,R));let rt=$.morphAttributes;if((rt.position!==void 0||rt.normal!==void 0||rt.color!==void 0&&Qe.isWebGL2===!0)&&Dt.update(Y,$,Pi),(Ii||xt.receiveShadow!==Y.receiveShadow)&&(xt.receiveShadow=Y.receiveShadow,wn.setValue(J,"receiveShadow",Y.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ei.envMap.value=ct,Ei.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),Ii&&(wn.setValue(J,"toneMappingExposure",v.toneMappingExposure),xt.needsLights&&da(Ei,Xn),Ue&&W.fog===!0&&Pe.refreshFogUniforms(Ei,Ue),Pe.refreshMaterialUniforms(Ei,W,q,ie,Ce),jr.upload(J,ua(xt),Ei,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(jr.upload(J,ua(xt),Ei,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wn.setValue(J,"center",Y.center),wn.setValue(J,"modelViewMatrix",Y.modelViewMatrix),wn.setValue(J,"normalMatrix",Y.normalMatrix),wn.setValue(J,"modelMatrix",Y.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let ht=W.uniformsGroups;for(let Gi=0,An=ht.length;Gi<An;Gi++)if(Qe.isWebGL2){let Rn=ht[Gi];$t.update(Rn,Pi),$t.bind(Rn,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function da(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function io(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,G,$){ut.get(w.texture).__webglTexture=G,ut.get(w.depthTexture).__webglTexture=$;let W=ut.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=$===void 0,W.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,G){let $=ut.get(w);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,$=0){N=w,O=G,D=$;let W=!0,Y=null,Ue=!1,Ye=!1;if(w){let ct=ut.get(w);ct.__useDefaultFramebuffer!==void 0?(Xe.bindFramebuffer(J.FRAMEBUFFER,null),W=!1):ct.__webglFramebuffer===void 0?R.setupRenderTarget(w):ct.__hasExternalTextures&&R.rebindTextures(w,ut.get(w.texture).__webglTexture,ut.get(w.depthTexture).__webglTexture);let vt=w.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(Ye=!0);let Je=ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?Y=Je[G][$]:Y=Je[G],Ue=!0):Qe.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?Y=ut.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[$]:Y=Je,C.copy(w.viewport),ee.copy(w.scissor),X=w.scissorTest}else C.copy(ce).multiplyScalar(q).floor(),ee.copy(fe).multiplyScalar(q).floor(),X=Se;if(Xe.bindFramebuffer(J.FRAMEBUFFER,Y)&&Qe.drawBuffers&&W&&Xe.drawBuffers(w,Y),Xe.viewport(C),Xe.scissor(ee),Xe.setScissorTest(X),Ue){let ct=ut.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+G,ct.__webglTexture,$)}else if(Ye){let ct=ut.get(w.texture),vt=G||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,ct.__webglTexture,$||0,vt)}Q=-1},this.readRenderTargetPixels=function(w,G,$,W,Y,Ue,Ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ye!==void 0&&(st=st[Ye]),st){Xe.bindFramebuffer(J.FRAMEBUFFER,st);try{let ct=w.texture,vt=ct.format,Je=ct.type;if(vt!==Ji&&$e.convert(vt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Mt=Je===ka&&(Ze.has("EXT_color_buffer_half_float")||Qe.isWebGL2&&Ze.has("EXT_color_buffer_float"));if(Je!==Ws&&$e.convert(Je)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===zs&&(Qe.isWebGL2||Ze.has("OES_texture_float")||Ze.has("WEBGL_color_buffer_float")))&&!Mt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-W&&$>=0&&$<=w.height-Y&&J.readPixels(G,$,W,Y,$e.convert(vt),$e.convert(Je),Ue)}finally{let ct=N!==null?ut.get(N).__webglFramebuffer:null;Xe.bindFramebuffer(J.FRAMEBUFFER,ct)}}},this.copyFramebufferToTexture=function(w,G,$=0){let W=Math.pow(2,-$),Y=Math.floor(G.image.width*W),Ue=Math.floor(G.image.height*W);R.setTexture2D(G,0),J.copyTexSubImage2D(J.TEXTURE_2D,$,0,0,w.x,w.y,Y,Ue),Xe.unbindTexture()},this.copyTextureToTexture=function(w,G,$,W=0){let Y=G.image.width,Ue=G.image.height,Ye=$e.convert($.format),st=$e.convert($.type);R.setTexture2D($,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,$.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,$.unpackAlignment),G.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,W,w.x,w.y,Y,Ue,Ye,st,G.image.data):G.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,W,w.x,w.y,G.mipmaps[0].width,G.mipmaps[0].height,Ye,G.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,W,w.x,w.y,Ye,st,G.image),W===0&&$.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(w,G,$,W,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ue=w.max.x-w.min.x+1,Ye=w.max.y-w.min.y+1,st=w.max.z-w.min.z+1,ct=$e.convert(W.format),vt=$e.convert(W.type),Je;if(W.isData3DTexture)R.setTexture3D(W,0),Je=J.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),Je=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,W.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,W.unpackAlignment);let Mt=J.getParameter(J.UNPACK_ROW_LENGTH),mn=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Bn=J.getParameter(J.UNPACK_SKIP_PIXELS),On=J.getParameter(J.UNPACK_SKIP_ROWS),Vi=J.getParameter(J.UNPACK_SKIP_IMAGES),ln=$.isCompressedTexture?$.mipmaps[Y]:$.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,ln.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,ln.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,w.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,w.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,w.min.z),$.isDataTexture||$.isData3DTexture?J.texSubImage3D(Je,Y,G.x,G.y,G.z,Ue,Ye,st,ct,vt,ln.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Je,Y,G.x,G.y,G.z,Ue,Ye,st,ct,ln.data)):J.texSubImage3D(Je,Y,G.x,G.y,G.z,Ue,Ye,st,ct,vt,ln),J.pixelStorei(J.UNPACK_ROW_LENGTH,Mt),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,mn),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Bn),J.pixelStorei(J.UNPACK_SKIP_ROWS,On),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Vi),Y===0&&W.generateMipmaps&&J.generateMipmap(Je),Xe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Xe.unbindTexture()},this.resetState=function(){O=0,D=0,N=null,Xe.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ys}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ch?"display-p3":"srgb",t.unpackColorSpace=on.workingColorSpace===wl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ai?fr:xd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fr?ai:xs}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ih=class extends Ga{};ih.prototype.isWebGL1Renderer=!0;var ll=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cl=class extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Wa=class extends ei{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xr=new bn,Yf=new bn,Fo=[],$f=new vs,P_=new bn,Pa=new Ke,Ia=new Ys,hl=class extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,P_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xr),$f.copy(e.boundingBox).applyMatrix4(Xr),this.boundingBox.union($f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ys),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xr),Ia.copy(e.boundingSphere).applyMatrix4(Xr),this.boundingSphere.union(Ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(n),e.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xr),Yf.multiplyMatrices(n,Xr),Pa.matrixWorld=Yf,Pa.raycast(e,Fo);for(let a=0,o=Fo.length;a<o;a++){let l=Fo[a];l.instanceId=r,l.object=this,t.push(l)}Fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Xa=class extends $s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kf=new F,Zf=new F,Jf=new bn,Pc=new Ha,ko=new Ys,sh=class extends oi{constructor(e=new li,t=new Xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Kf.fromBufferAttribute(t,s-1),Zf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Kf.distanceTo(Zf);e.setAttribute("lineDistance",new pn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;Jf.copy(s).invert(),Pc.copy(e.ray).applyMatrix4(Jf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=new F,h=new F,p=new F,u=new F,m=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){let g=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=m){let O=x.getX(v),D=x.getX(v+1);if(d.fromBufferAttribute(y,O),h.fromBufferAttribute(y,D),Pc.distanceSqToSegment(d,h,u,p)>l)continue;u.applyMatrix4(this.matrixWorld);let Q=e.ray.origin.distanceTo(u);Q<e.near||Q>e.far||t.push({distance:Q,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,a.start),S=Math.min(y.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=m){if(d.fromBufferAttribute(y,v),h.fromBufferAttribute(y,v+1),Pc.distanceSqToSegment(d,h,u,p)>l)continue;u.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(u);D<e.near||D>e.far||t.push({distance:D,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},jf=new F,Qf=new F,ul=class extends sh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)jf.fromBufferAttribute(t,s),Qf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jf.distanceTo(Qf);e.setAttribute("lineDistance",new pn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fl=class extends ki{constructor(e,t,n,s,r,a,o,l,d){super(e,t,n,s,r,a,o,l,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,d;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),d=n[s]-a,d<0)o=s+1;else if(d>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(a-h)/u;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new qe:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new bn;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new F)}r[0]=new F,a[0]=new F;let d=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=d&&(d=h,n.set(1,0,0)),p<=d&&(d=p,n.set(0,1,0)),u<=d&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(fi(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,x))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(fi(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qa=class extends Hi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new qe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),d=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,m=d-this.aY;l=u*h-m*p+this.aX,d=u*p+m*h+this.aY}return n.set(l,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rh=class extends qa{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ih(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,d){s(a,o,d*(o-r),d*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,d,h,p){let u=(a-r)/d-(o-r)/(d+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,m*=h,s(a,o,u,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ho=new F,Ic=new Ih,Lc=new Ih,Dc=new Ih,ah=class extends Hi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let d,h;this.closed||o>0?d=s[(o-1)%r]:(Ho.subVectors(s[0],s[1]).add(s[0]),d=Ho);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ho),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(d.distanceToSquared(p),m),M=Math.pow(p.distanceToSquared(u),m),y=Math.pow(u.distanceToSquared(h),m);M<1e-4&&(M=1),x<1e-4&&(x=M),y<1e-4&&(y=M),Ic.initNonuniformCatmullRom(d.x,p.x,u.x,h.x,x,M,y),Lc.initNonuniformCatmullRom(d.y,p.y,u.y,h.y,x,M,y),Dc.initNonuniformCatmullRom(d.z,p.z,u.z,h.z,x,M,y)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(d.x,p.x,u.x,h.x,this.tension),Lc.initCatmullRom(d.y,p.y,u.y,h.y,this.tension),Dc.initCatmullRom(d.z,p.z,u.z,h.z,this.tension));return n.set(Ic.calc(l),Lc.calc(l),Dc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ed(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function I_(i,e){let t=1-i;return t*t*e}function L_(i,e){return 2*(1-i)*i*e}function D_(i,e){return i*i*e}function Ua(i,e,t,n){return I_(i,e)+L_(i,t)+D_(i,n)}function U_(i,e){let t=1-i;return t*t*t*e}function N_(i,e){let t=1-i;return 3*t*t*i*e}function B_(i,e){return 3*(1-i)*i*i*e}function O_(i,e){return i*i*i*e}function Na(i,e,t,n,s){return U_(i,e)+N_(i,t)+B_(i,n)+O_(i,s)}var dl=class extends Hi{constructor(e=new qe,t=new qe,n=new qe,s=new qe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new qe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oh=class extends Hi{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y),Na(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends Hi{constructor(e=new qe,t=new qe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new qe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new qe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lh=class extends Hi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends Hi{constructor(e=new qe,t=new qe,n=new qe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new qe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ua(e,s.x,r.x,a.x),Ua(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ch=class extends Hi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ua(e,s.x,r.x,a.x),Ua(e,s.y,r.y,a.y),Ua(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new qe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],d=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(ed(o,l.x,d.x,h.x,p.x),ed(o,l.y,d.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new qe().fromArray(s))}return this}},td=Object.freeze({__proto__:null,ArcCurve:rh,CatmullRomCurve3:ah,CubicBezierCurve:dl,CubicBezierCurve3:oh,EllipseCurve:qa,LineCurve:pl,LineCurve3:lh,QuadraticBezierCurve:ml,QuadraticBezierCurve3:ch,SplineCurve:gl}),hh=class extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new td[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),d=l===0?0:1-a/l;return o.getPointAt(d,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let d=0;d<l.length;d++){let h=l[d];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new td[s.type]().fromJSON(s))}return this}},sa=class extends hh{constructor(e){super(),this.type="Path",this.currentPoint=new qe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new pl(this.currentPoint.clone(),new qe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ml(this.currentPoint.clone(),new qe(e,t),new qe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new dl(this.currentPoint.clone(),new qe(e,t),new qe(n,s),new qe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new gl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let d=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+d,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let d=new qa(e,t,n,s,r,a,o,l);if(this.curves.length>0){let p=d.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(d);let h=d.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Ks=class i extends li{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let d=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],m=[],x=0,M=[],y=n/2,g=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(m,2));function S(){let A=new F,O=new F,D=0,N=(t-e)/n;for(let Q=0;Q<=r;Q++){let T=[],C=Q/r,ee=C*(t-e)+e;for(let X=0;X<=s;X++){let se=X/s,B=se*l+o,K=Math.sin(B),ie=Math.cos(B);O.x=ee*K,O.y=-C*n+y,O.z=ee*ie,p.push(O.x,O.y,O.z),A.set(K,N,ie).normalize(),u.push(A.x,A.y,A.z),m.push(se,1-C),T.push(x++)}M.push(T)}for(let Q=0;Q<s;Q++)for(let T=0;T<r;T++){let C=M[T][Q],ee=M[T+1][Q],X=M[T+1][Q+1],se=M[T][Q+1];h.push(C,ee,se),h.push(ee,X,se),D+=6}d.addGroup(g,D,0),g+=D}function v(A){let O=x,D=new qe,N=new F,Q=0,T=A===!0?e:t,C=A===!0?1:-1;for(let X=1;X<=s;X++)p.push(0,y*C,0),u.push(0,C,0),m.push(.5,.5),x++;let ee=x;for(let X=0;X<=s;X++){let B=X/s*l+o,K=Math.cos(B),ie=Math.sin(B);N.x=T*ie,N.y=y*C,N.z=T*K,p.push(N.x,N.y,N.z),u.push(0,C,0),D.x=K*.5+.5,D.y=ie*.5*C+.5,m.push(D.x,D.y),x++}for(let X=0;X<s;X++){let se=O+X,B=ee+X;A===!0?h.push(B,B+1,se):h.push(B+1,B,se),Q+=3}d.addGroup(g,Q,A===!0?1:2),g+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ri=class i extends Ks{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yl=class i extends li{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),d(n),h(),this.setAttribute("position",new pn(r,3)),this.setAttribute("normal",new pn(r.slice(),3)),this.setAttribute("uv",new pn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new F,A=new F,O=new F;for(let D=0;D<t.length;D+=3)m(t[D+0],v),m(t[D+1],A),m(t[D+2],O),l(v,A,O,S)}function l(S,v,A,O){let D=O+1,N=[];for(let Q=0;Q<=D;Q++){N[Q]=[];let T=S.clone().lerp(A,Q/D),C=v.clone().lerp(A,Q/D),ee=D-Q;for(let X=0;X<=ee;X++)X===0&&Q===D?N[Q][X]=T:N[Q][X]=T.clone().lerp(C,X/ee)}for(let Q=0;Q<D;Q++)for(let T=0;T<2*(D-Q)-1;T++){let C=Math.floor(T/2);T%2===0?(u(N[Q][C+1]),u(N[Q+1][C]),u(N[Q][C])):(u(N[Q][C+1]),u(N[Q+1][C+1]),u(N[Q+1][C]))}}function d(S){let v=new F;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(S),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function h(){let S=new F;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let A=y(S)/2/Math.PI+.5,O=g(S)/Math.PI+.5;a.push(A,1-O)}x(),p()}function p(){for(let S=0;S<a.length;S+=6){let v=a[S+0],A=a[S+2],O=a[S+4],D=Math.max(v,A,O),N=Math.min(v,A,O);D>.9&&N<.1&&(v<.2&&(a[S+0]+=1),A<.2&&(a[S+2]+=1),O<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function m(S,v){let A=S*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function x(){let S=new F,v=new F,A=new F,O=new F,D=new qe,N=new qe,Q=new qe;for(let T=0,C=0;T<r.length;T+=9,C+=6){S.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),A.set(r[T+6],r[T+7],r[T+8]),D.set(a[C+0],a[C+1]),N.set(a[C+2],a[C+3]),Q.set(a[C+4],a[C+5]),O.copy(S).add(v).add(A).divideScalar(3);let ee=y(O);M(D,C+0,S,ee),M(N,C+2,v,ee),M(Q,C+4,A,ee)}}function M(S,v,A,O){O<0&&S.x===1&&(a[v]=S.x-1),A.x===0&&A.z===0&&(a[v]=O/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},xl=class i extends yl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ra=class extends sa{constructor(e){super(e),this.uuid=oa(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new sa().fromJSON(s))}return this}},F_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Pd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,d,h,p,u,m;if(n&&(r=G_(i,e,r,t)),i.length>80*t){o=d=i[0],l=h=i[1];for(let x=t;x<s;x+=t)p=i[x],u=i[x+1],p<o&&(o=p),u<l&&(l=u),p>d&&(d=p),u>h&&(h=u);m=Math.max(d-o,h-l),m=m!==0?32767/m:0}return Ya(r,a,t,o,l,m,0),a}};function Pd(i,e,t,n,s){let r,a;if(s===ev(i,e,t,n)>0)for(r=e;r<t;r+=n)a=nd(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=nd(r,i[r],i[r+1],a);return a&&Rl(a,a.next)&&(Ka(a),a=a.next),a}function dr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Rl(t,t.next)||Ln(t.prev,t,t.next)===0)){if(Ka(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ya(i,e,t,n,s,r,a){if(!i)return;!a&&r&&$_(i,n,s,r);let o=i,l,d;for(;i.prev!==i.next;){if(l=i.prev,d=i.next,r?H_(i,n,s,r):k_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(d.i/t|0),Ka(i),i=d.next,o=d.next;continue}if(i=d,i===o){a?a===1?(i=z_(dr(i),e,t),Ya(i,e,t,n,s,r,2)):a===2&&V_(i,e,t,n,s,r):Ya(dr(i),e,t,n,s,r,1);break}}}function k_(i){let e=i.prev,t=i,n=i.next;if(Ln(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,d=n.y,h=s<r?s<a?s:a:r<a?r:a,p=o<l?o<d?o:d:l<d?l:d,u=s>r?s>a?s:a:r>a?r:a,m=o>l?o>d?o:d:l>d?l:d,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=p&&x.y<=m&&Kr(s,o,r,l,a,d,x.x,x.y)&&Ln(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function H_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ln(s,r,a)>=0)return!1;let o=s.x,l=r.x,d=a.x,h=s.y,p=r.y,u=a.y,m=o<l?o<d?o:d:l<d?l:d,x=h<p?h<u?h:u:p<u?p:u,M=o>l?o>d?o:d:l>d?l:d,y=h>p?h>u?h:u:p>u?p:u,g=uh(m,x,e,t,n),S=uh(M,y,e,t,n),v=i.prevZ,A=i.nextZ;for(;v&&v.z>=g&&A&&A.z<=S;){if(v.x>=m&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Kr(o,h,l,p,d,u,v.x,v.y)&&Ln(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=m&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Kr(o,h,l,p,d,u,A.x,A.y)&&Ln(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=g;){if(v.x>=m&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Kr(o,h,l,p,d,u,v.x,v.y)&&Ln(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=S;){if(A.x>=m&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Kr(o,h,l,p,d,u,A.x,A.y)&&Ln(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function z_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Rl(s,r)&&Id(s,n,n.next,r)&&$a(s,r)&&$a(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ka(n),Ka(n.next),n=i=r),n=n.next}while(n!==i);return dr(n)}function V_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&J_(a,o)){let l=Ld(a,o);a=dr(a,a.next),l=dr(l,l.next),Ya(a,e,t,n,s,r,0),Ya(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function G_(i,e,t,n){let s=[],r,a,o,l,d;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,d=Pd(i,o,l,n,!1),d===d.next&&(d.steiner=!0),s.push(Z_(d));for(s.sort(W_),r=0;r<s.length;r++)t=X_(s[r],t);return t}function W_(i,e){return i.x-e.x}function X_(i,e){let t=q_(i,e);if(!t)return e;let n=Ld(t,i);return dr(n,n.next),dr(t,t.next)}function q_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,d=s.y,h=1/0,p;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Kr(a<d?r:n,a,l,d,a<d?n:r,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(r-t.x),$a(t,i)&&(p<h||p===h&&(t.x>s.x||t.x===s.x&&Y_(s,t)))&&(s=t,h=p)),t=t.next;while(t!==o);return s}function Y_(i,e){return Ln(i.prev,i,e.prev)<0&&Ln(e.next,i,i.next)<0}function $_(i,e,t,n){let s=i;do s.z===0&&(s.z=uh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,K_(s)}function K_(i){let e,t,n,s,r,a,o,l,d=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<d&&(o++,n=n.nextZ,!!n);e++);for(l=d;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,d*=2}while(a>1);return i}function uh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Z_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Kr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function J_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!j_(i,e)&&($a(i,e)&&$a(e,i)&&Q_(i,e)&&(Ln(i.prev,i,e.prev)||Ln(i,e.prev,e))||Rl(i,e)&&Ln(i.prev,i,i.next)>0&&Ln(e.prev,e,e.next)>0)}function Ln(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Rl(i,e){return i.x===e.x&&i.y===e.y}function Id(i,e,t,n){let s=Vo(Ln(i,e,t)),r=Vo(Ln(i,e,n)),a=Vo(Ln(t,n,i)),o=Vo(Ln(t,n,e));return!!(s!==r&&a!==o||s===0&&zo(i,t,e)||r===0&&zo(i,n,e)||a===0&&zo(t,i,n)||o===0&&zo(t,e,n))}function zo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Vo(i){return i>0?1:i<0?-1:0}function j_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Id(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $a(i,e){return Ln(i.prev,i,i.next)<0?Ln(i,e,i.next)>=0&&Ln(i,i.prev,e)>=0:Ln(i,e,i.prev)<0||Ln(i,i.next,e)<0}function Q_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ld(i,e){let t=new fh(i.i,i.x,i.y),n=new fh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function nd(i,e,t,n){let s=new fh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ka(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ev(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ba=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];id(e),sd(n,e);let a=e.length;t.forEach(id);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,sd(n,t[l]);let o=F_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function id(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function sd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _l=class i extends yl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Za=class i extends li{constructor(e=new ra([new qe(0,.5),new qe(-.5,-.5),new qe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)d(e);else for(let h=0;h<e.length;h++)d(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new pn(s,3)),this.setAttribute("normal",new pn(r,3)),this.setAttribute("uv",new pn(a,2));function d(h){let p=s.length/3,u=h.extractPoints(t),m=u.shape,x=u.holes;Ba.isClockWise(m)===!1&&(m=m.reverse());for(let y=0,g=x.length;y<g;y++){let S=x[y];Ba.isClockWise(S)===!0&&(x[y]=S.reverse())}let M=Ba.triangulateShape(m,x);for(let y=0,g=x.length;y<g;y++){let S=x[y];m=m.concat(S)}for(let y=0,g=m.length;y<g;y++){let S=m[y];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let y=0,g=M.length;y<g;y++){let S=M[y],v=S[0]+p,A=S[1]+p,O=S[2]+p;n.push(v,A,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return tv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function tv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var os=class i extends li{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),d=0,h=[],p=new F,u=new F,m=[],x=[],M=[],y=[];for(let g=0;g<=n;g++){let S=[],v=g/n,A=0;g===0&&a===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let O=0;O<=t;O++){let D=O/t;p.x=-e*Math.cos(s+D*r)*Math.sin(a+v*o),p.y=e*Math.cos(a+v*o),p.z=e*Math.sin(s+D*r)*Math.sin(a+v*o),x.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),y.push(D+A,1-v),S.push(d++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let v=h[g][S+1],A=h[g][S],O=h[g+1][S],D=h[g+1][S+1];(g!==0||a>0)&&m.push(v,A,D),(g!==n-1||l<Math.PI)&&m.push(A,O,D)}this.setIndex(m),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(M,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vl=class i extends li{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],d=[],h=new F,p=new F,u=new F;for(let m=0;m<=n;m++)for(let x=0;x<=s;x++){let M=x/s*r,y=m/n*Math.PI*2;p.x=(e+t*Math.cos(y))*Math.cos(M),p.y=(e+t*Math.cos(y))*Math.sin(M),p.z=t*Math.sin(y),o.push(p.x,p.y,p.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),u.subVectors(p,h).normalize(),l.push(u.x,u.y,u.z),d.push(x/s),d.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=s;x++){let M=(s+1)*m+x-1,y=(s+1)*(m-1)+x-1,g=(s+1)*(m-1)+x,S=(s+1)*m+x;a.push(M,y,S),a.push(y,g,S)}this.setIndex(a),this.setAttribute("position",new pn(o,3)),this.setAttribute("normal",new pn(l,3)),this.setAttribute("uv",new pn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Gn=class extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_d,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Go(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function nv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var aa=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dh=class extends aa{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nf,endingEnd:nf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sf:r=e,o=2*t-n;break;case rf:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sf:a=e,l=2*n-t;break;case rf:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let d=(n-t)*.5,h=this.valueSize;this._weightPrev=d/(t-o),this._weightNext=d/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,d=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),M=x*x,y=M*x,g=-u*y+2*u*M-u*x,S=(1+u)*y+(-1.5-2*u)*M+(-.5+u)*x+1,v=(-1-m)*y+(1.5+m)*M+.5*x,A=m*y-m*M;for(let O=0;O!==o;++O)r[O]=g*a[h+O]+S*a[d+O]+v*a[l+O]+A*a[p+O];return r}},ph=class extends aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,d=l-o,h=(n-t)/(s-t),p=1-h;for(let u=0;u!==o;++u)r[u]=a[d+u]*p+a[l+u]*h;return r}},mh=class extends aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ji=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Go(t,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Go(e.times,Array),values:Go(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xo:t=this.InterpolantFactoryMethodDiscrete;break;case qo:t=this.InterpolantFactoryMethodLinear;break;case rc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&nv(s))for(let o=0,l=s.length;o!==l;++o){let d=s[o];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,d),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,d=e[o],h=e[o+1];if(d!==h&&(o!==1||d!==e[0]))if(s)l=!0;else{let p=o*n,u=p-n,m=p+n;for(let x=0;x!==n;++x){let M=t[p+x];if(M!==t[u+x]||M!==t[m+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[p+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,d=0;d!==n;++d)t[l+d]=t[o+d];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ji.prototype.TimeBufferType=Float32Array;ji.prototype.ValueBufferType=Float32Array;ji.prototype.DefaultInterpolation=qo;var pr=class extends ji{};pr.prototype.ValueTypeName="bool";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Xo;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends ji{};gh.prototype.ValueTypeName="color";var yh=class extends ji{};yh.prototype.ValueTypeName="number";var xh=class extends aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),d=e*o;for(let h=d+o;d!==h;d+=4)rs.slerpFlat(r,0,a,d-o,a,d,l);return r}},Ja=class extends ji{InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}};Ja.prototype.ValueTypeName="quaternion";Ja.prototype.DefaultInterpolation=qo;Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends ji{};mr.prototype.ValueTypeName="string";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=Xo;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var _h=class extends ji{};_h.prototype.ValueTypeName="vector";var vh=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return d.push(h,p),this},this.removeHandler=function(h){let p=d.indexOf(h);return p!==-1&&d.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=d.length;p<u;p+=2){let m=d[p],x=d[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},iv=new vh,Mh=class{constructor(e){this.manager=e!==void 0?e:iv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Mh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ml=class extends oi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Uc=new bn,rd=new F,ad=new F,bh=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new bn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Qn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(rd),ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ad),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Sh=class extends bh{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bl=class extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oi.DEFAULT_UP),this.updateMatrix(),this.target=new oi,this.shadow=new Sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Sl=class extends Ml{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Lh="\\[\\]\\.:\\/",sv=new RegExp("["+Lh+"]","g"),Dh="[^"+Lh+"]",rv="[^"+Lh.replace("\\.","")+"]",av=/((?:WC+[\/:])*)/.source.replace("WC",Dh),ov=/(WCOD+)?/.source.replace("WCOD",rv),lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),cv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),hv=new RegExp("^"+av+ov+lv+cv+"$"),uv=["material","materials","bones","map"],Eh=class{constructor(e,t,n){let s=n||En.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},En=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sv,"")}static parseTrackName(e){let t=hv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);uv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===d){d=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}let a=e[s];if(a===void 0){let d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};En.Composite=Eh;En.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};En.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};En.prototype.GetterByBindingType=[En.prototype._getValue_direct,En.prototype._getValue_array,En.prototype._getValue_arrayElement,En.prototype._getValue_toArray];En.prototype.SetterByBindingTypeAndVersioning=[[En.prototype._setValue_direct,En.prototype._setValue_direct_setNeedsUpdate,En.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[En.prototype._setValue_array,En.prototype._setValue_array_setNeedsUpdate,En.prototype._setValue_array_setMatrixWorldNeedsUpdate],[En.prototype._setValue_arrayElement,En.prototype._setValue_arrayElement_setNeedsUpdate,En.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[En.prototype._setValue_fromArray,En.prototype._setValue_fromArray_setNeedsUpdate,En.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uv=new Float32Array(1);var El=class{constructor(e,t,n=0,s=1/0){this.ray=new Ha(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Th(e,this,n,t),n.sort(od),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Th(e[s],this,n,t);return n.sort(od),n}};function od(i,e){return i.distance-e.distance}function Th(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Th(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);function ja(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new li,d=0;for(let h=0;h<i.length;++h){let p=i[h],u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in p.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(p.attributes[m]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in p.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(p.morphAttributes[m])}if(e){let m;if(t)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(d,m,h),d+=m}}if(t){let h=0,p=[];for(let u=0;u<i.length;++u){let m=i[u].index;for(let x=0;x<m.count;++x)p.push(m.getX(x)+h);h+=i[u].attributes.position.count}l.setIndex(p)}for(let h in r){let p=Dd(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<p;++u){let m=[];for(let M=0;M<a[h].length;++M)m.push(a[h][M][u]);let x=Dd(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Dd(i){let e,t,n,s=-1,r=0;for(let d=0;d<i.length;++d){let h=i[d];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let d=0;d<i.length;++d)a.set(i[d].array,o),o+=i[d].array.length;let l=new ei(a,t,n);return s!==void 0&&(l.gpuType=s),l}var Uh=35,Nh=25,Bh=.29,nt=.95,Zn=.35,bs=200,Ci=7,Zs=300,Es=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function dv(i){let e=typeof i=="string"?pv(i):i>>>0;return function(){e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t=(t^t>>>7)>>>0,t/4294967296}}function pv(i){let e=0;for(let t=0;t<i.length;t++)e=Math.imul(31,e)+i.charCodeAt(t),e=e>>>0;return e}var mv=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],zd=[],gv={tank:["knight","berserker","werewolf","ghoul","barbarian"],melee:["samurai","assassin","ninja","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist","oracle"],ranged:["ranger","amazon","hunter","alchemist","cannibal"],caster:["mage","witch","vampire","necromancer","shaman"]},Qa={tank:2,melee:2,support:1,ranged:1,caster:1},Oh={};for(let[i,e]of Object.entries(gv))for(let t of e)Oh[t]=i;function yv(i){let e=Math.max(1,i),t=Object.keys(Qa),n=t.reduce((l,d)=>l+(Qa[d]??0),0),s={},r=0;for(let l of t){let d=Math.floor(e*(Qa[l]??0)/n);s[l]=d,r+=d}let a=e-r,o=[...t].sort((l,d)=>s[l]!==s[d]?s[l]-s[d]:(Qa[d]??0)-(Qa[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var it={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},bi=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist","vampire","necromancer","barbarian","cannibal","shaman","oracle","amazon"];zd=[...bi];function xv(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Wn={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:14,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:16,maxHp:16,mp:22,maxMp:22,str:4,agi:3,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:24,maxHp:24,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:23,maxHp:23,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:8},assassin:{name:"Assassin",gender:"female",hp:20,maxHp:20,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:1,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:21,maxHp:21,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:8,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:6,maxMp:6,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:6,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:25,maxHp:25,mp:8,maxMp:8,str:13,agi:8,vit:12,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:10,dex:5,luk:8,int:11,range:5},vampire:{name:"Vampire",gender:"female",hp:18,maxHp:18,mp:16,maxMp:16,str:11,agi:12,vit:3,dex:4,luk:3,int:12,range:1},necromancer:{name:"Necromancer",gender:"male",hp:20,maxHp:20,mp:20,maxMp:20,str:5,agi:4,vit:7,dex:3,luk:11,int:15,range:1},barbarian:{name:"Barbarian",gender:"male",hp:31,maxHp:31,mp:4,maxMp:4,str:16,agi:4,vit:15,dex:6,luk:3,int:2,range:1},cannibal:{name:"Cannibal",gender:"male",hp:22,maxHp:22,mp:7,maxMp:7,str:6,agi:11,vit:2,dex:13,luk:9,int:7,range:4},shaman:{name:"Shaman",gender:"female",hp:17,maxHp:17,mp:21,maxMp:21,str:4,agi:3,vit:3,dex:3,luk:16,int:16,range:4},oracle:{name:"Oracle",gender:"female",hp:19,maxHp:19,mp:19,maxMp:19,str:6,agi:7,vit:4,dex:10,luk:14,int:10,range:1},amazon:{name:"Amazon",gender:"female",hp:23,maxHp:23,mp:5,maxMp:5,str:12,agi:9,vit:11,dex:7,luk:4,int:3,range:3}},_v=["hp","maxHp","mp","str","agi","vit","dex","luk","int"],Vd={};for(let i of bi){let e=Wn[i];if(!e)continue;let t=_v.map(s=>e[s]??0),n=t.reduce((s,r)=>s+r,0)/t.length;Vd[i]=t.reduce((s,r)=>s+(r-n)**2,0)/t.length}var Js={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331},vampire:{primary:16704468,secondary:16704468,hair:1250066,cape:1250066,apron:1250066},necromancer:{primary:405028,secondary:405028,hair:7434350,cape:405028,belt:11372065},barbarian:{primary:11497041,secondary:6045747,hair:6045747,belt:11098894,skin:11497041},cannibal:{primary:11497041,secondary:8421504,hair:6045747,cape:16753920,belt:16753920,skin:11497041},shaman:{primary:3224389,secondary:4349324,hair:32896,cape:5152741,horns:16775930},oracle:{primary:16775930,secondary:16775930,hair:6045747,cape:16777215,belt:15712004,horns:15712004},amazon:{primary:11497041,secondary:11497041,hair:0,cape:331790,belt:0,horns:0,skin:11497041,apron:331790}},ca={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp",vampire:"https://files.idyllic.app/files/static/2567599?width=256&optimizer=image",necromancer:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k",barbarian:"https://image.lexica.art/full_jpg/dd171d51-f518-4ae9-949b-23f5d7a157be",cannibal:"https://i.pinimg.com/736x/de/57/d1/de57d1e7aa4dd2d8f052d48b06831cbd.jpg",shaman:"https://w0.peakpx.com/wallpaper/350/203/HD-wallpaper-guy-shaman-skull-horns-anime-art-green-thumbnail.jpg",oracle:"https://images.stockcake.com/public/a/3/d/a3d08448-237f-4c23-8660-43b615c9e3c9_large/desert-oracle-enchantress-stockcake.jpg",amazon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnWAK4nkfgm8v-Ab35e3lkKOPOGTJzprr1w&s"},ls=bi.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function vv(i,e,t){if(!Es)return;let n=i?.class;if(i?.summonedBy!=null&&Array.isArray(t)){let r=t.find(a=>a.id===i.summonedBy);r?.class&&(n=r.class)}if(bi.includes(n)&&ls[n]&&ls[n].kills++,e?.summonedBy!=null)return;let s=e?.class;bi.includes(s)&&ls[s]&&ls[s].deaths++}function Mv(i,e){if(!Es)return;for(let n of i)!n||!ls[n.class]||(ls[n.class].battles++,e!=null&&(n.player===e?ls[n.class].wins++:ls[n.class].losses++));let t=bi.map(n=>{let s=ls[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var ha={knight:[{name:"Brave",description:"Gain +1 STR and +1 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:6,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:3,target:"enemy",range:6,level:2,effectKey:"manaDrain",type:"spell"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:3,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:6,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:4,level:1,effectKey:"hex",type:"spell"},{name:"Drain",description:"Deal INT-based damage to HP and MP and heal self.",cost:8,target:"enemy",range:4,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:1,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement",type:"spell"}],exorcist:[{name:"Sanctuary",description:"Gain +1 ALL stats for both ally and self for 3 turns.",cost:4,target:"ally",range:4,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:4,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}],vampire:[{name:"Gaze",description:"Steal AGI and VIT by 1 for 3 turns",cost:5,target:"enemy",range:4,level:1,effectKey:"gaze",type:"spell"},{name:"Blood Suck",description:"Absorb enemy HP based on your MP",cost:7,target:"enemy",range:1,level:3,effectKey:"bloodSuck"}],necromancer:[{name:"Debilitate",description:"Steal target's 3 HP and 3 VIT for 2 turns",cost:5,target:"enemy",range:5,level:1,effectKey:"debilitate",type:"spell"},{name:"Reanimate",description:"Resurrect dead unit to your control",cost:10,target:"self",range:0,level:2,effectKey:"reanimate"}],barbarian:[{name:"War Cry",description:"Gain VIT and LUK based on lost HP",cost:2,target:"self",range:0,level:1,effectKey:"warCry"},{name:"Bash",description:"Reduce target's AGI to 0 for 2 turns",cost:5,target:"enemy",range:1,level:3,effectKey:"bash"}],cannibal:[{name:"Gnaw",description:"Deal STR based damage to heal self",cost:3,target:"enemy",range:1,level:2,effectKey:"gnaw"},{name:"Infect",description:"Poison enemy for 3 turns",cost:4,target:"enemy",range:6,level:3,effectKey:"infect"}],shaman:[{name:"Vodoo",description:"Mirror damage for 2 turns",cost:4,target:"enemy",range:5,level:1,effectKey:"vodoo",type:"spell"},{name:"Malediction",description:"Deal INT+LUK-based damage to ALL stats for 2 turns",cost:6,target:"enemy",range:6,level:2,effectKey:"malediction",type:"spell"}],oracle:[{name:"Foresight",description:"Gain INT and DEX based on INT for 2 turns",cost:4,target:"ally",range:6,level:1,effectKey:"foresight"},{name:"Overheal",description:"Heal ally for 2 turns",cost:7,target:"ally",range:6,level:2,effectKey:"overheal"}],amazon:[{name:"Skewer",description:"Deal DEX-based damage to AGI for 2 turns ",cost:4,target:"enemy",range:3,level:2,effectKey:"skewer"},{name:"Rapid",description:"Double attack for 1 turn",cost:6,target:"self",range:0,level:3,effectKey:"rapid"}]};function ve(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function zi(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0,r=String(t);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}var bv={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"},Ud=new Map;function Sv(i){let e=Ud.get(i);return e!==void 0||(e=bv[i]??i.replace(/([A-Z])/g," $1").replace(/^./,t=>t.toUpperCase()).trim(),Ud.set(i,e)),e}function Gd(i,e,t){if(!i||e<=0)return;let n=t&&t.units;if(!n||!n.length)return;let s=i.tempBuff;if(!s||s.vodoo==null||s.duration!=null&&s.duration<=0)return;let r=i.id;for(let a=0;a<n.length;a++){let o=n[a];if(!(!o||o.hp<=0||o.id===r)&&s.vodoo===o.id){let l=t.handleUnitDeath||t.vodooMirrorDeath;o.hp=Math.max(0,o.hp-e),console.log("[DEBUFF]",`vodoo: ${e} to ${o.name}`),t.showFloatingCombatText&&t.showFloatingCombatText(o.x,o.y,String(e),!1,"vodoo"),t.updateUnitSlashVisibility&&t.updateUnitSlashVisibility(o),o.hp<=0&&l&&l(o,i);break}}}function eo(i,e,t,n){let s=e,r=t,a=Sv(i);n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,a,!1,"skill-name");let o=a,l=r?`${r.name} (${r.class}, P${r.player})`:"self",d=null,h=(u,m,x,M)=>{if(x)u.hp=Math.min(u.maxHp,u.hp+m),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${m}`,!1,"heal");else{let y=u===s,g=!0;if(!y&&!M){let S=ve(u,"agi")*.7+ve(u,"luk")*.3;g=Math.random()*Math.max(.001,S)<=ve(s,"dex")}return g?(u.hp=Math.max(0,u.hp-m),u!==s&&(d=m),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(m),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),Gd(u,m,n),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u,s)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),g}},p=(u,m,x,M)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,m,x,!1,M?"buff":"debuff")};switch(i){case"brave":s.tempBuff={str:1,vit:1,duration:3},p(s.x,s.y,"+1 STR, +1 VIT",!0);break;case"dominate":{if(!r)break;let u=2,m=1;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,r.vit=Math.max(1,(r.vit||0)-m),s.vit=(s.vit||0)+m,p(r.x,r.y,`-${u} STR and -${m} VIT`,!1),p(s.x,s.y,`+${u} STR and +${m} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(ve(s,"int")*.9-(ve(r,"int")*.4+ve(r,"luk")*.3)));h(r,u,!1,!0)}break;case"manaDrain":if(r){let u=Math.max(1,Math.floor(ve(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-u),s.mp=(s.mp||0)+u,p(r.x,r.y,`-${u} MP`,!1),p(s.x,s.y,`+${u} MP`,!0)}break;case"mantra":if(r){let u=Math.max(1,Math.ceil(ve(s,"int")*.3));s.tempBuff={int:u,duration:3},p(s.x,s.y,`+${u} LUK`,!0),r.tempBuff={luk:u,duration:3},p(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(h(s,Math.max(1,Math.floor(ve(s,"int")*.3+ve(s,"luk")*.15)),!0),!r)break;h(r,Math.max(1,Math.floor(ve(s,"int")*.3+ve(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,p(r.x,r.y,`-${u} VIT`,!1),p(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"str")*.8-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)&&h(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff={agi:u,duration:3},p(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"str")*.6));h(r,u,!1)}break;case"focus":s.tempBuff={dex:3,duration:3},p(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"dex")*.8-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,p(r.x,r.y,`-${u} AGI`,!1),p(s.x,s.y,`+${u} AGI`,!0)}break;case"execute":if(r){let u=Math.max(1,Math.floor(ve(s,"agi")*.8-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"berserk":r&&(h(r,Math.max(1,Math.floor(ve(s,"str")*.8-ve(r,"vit")*.3+ve(r,"luk")*.2)),!1),h(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff={str:u,vit:u,duration:2},p(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,p(r.x,r.y,`-${u} INT`,!1),p(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(ve(s,"int")*.6-(ve(r,"int")*.4+ve(r,"luk")*.3))),m=Math.max(1,Math.ceil(ve(s,"int")*.3-(ve(r,"int")*.4+ve(r,"luk")*.3)));h(r,u,!1,!0),h(s,u+m,!0),r.mp=Math.max(1,(r.mp||0)-m),p(s.x,s.y,`+${u} HP and +${m} MP`,!0),p(r.x,r.y,`-${u} HP and -${m} MP`,!1)}break;case"blind":{if(!r)break;let u=1;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,p(r.x,r.y,`-${u} DEX`,!1),p(s.x,s.y,`+${u} DEX`,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"dex")*.7-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"iaido":s.tempBuff={str:1,dex:1,duration:3},p(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"str")*.4+ve(s,"dex")*.4-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"str")*.7+ve(s,"agi")*.1-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"howl":s.tempBuff={str:2,agi:2,duration:3},p(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let u=Math.max(1,Math.floor(ve(s,"int")*.5));h(r,u,!0),h(s,3,!1)}break;case"judgement":{if(!r)break;let u=Math.max(1,Math.floor(s.maxHp-s.hp-(ve(r,"int")*.2+ve(r,"luk")*.1)));h(r,u,!1,!0)}break;case"sanctuary":s.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},r.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),p(s.x,s.y,"+1 ALL STATS",!0),p(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let u=Math.max(1,Math.floor((r.maxHp-r.hp)*1.3-(ve(r,"int")*.2+ve(r,"luk")*.1)));h(r,u,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,p(r.x,r.y,"-2 LUK",!1),p(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"luk")*.8-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"windWalk":s.tempBuff={agi:3,duration:3},p(s.x,s.y,"+3 AGI",!0);break;case"powerShot":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"dex")*.6-(ve(r,"vit")*.3+ve(r,"luk")*.2)));if(h(r,u,!1)&&n.world&&n.units&&n.updateUnitPosition){let x=Math.max(1,Math.floor(u*.2)),M=wv(n.world,n.units,s,r,x),y=r.x,g=r.y;r.x=M.newGx,r.y=M.newGy,n.updateUnitTileIndex&&n.updateUnitTileIndex(r,y,g),M.collisionDamage>0?(console.log("[KNOCKBACK]",`${M.collisionDamage} dmg to ${r.name}`),n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),h(r,M.collisionDamage,!1),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)):n.animateKnockback?n.animateKnockback(r,y,g,M.newGx,M.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r))}}break;case"forge":s.tempBuff={str:2,duration:3},r.tempBuff={str:2,duration:3},p(s.x,s.y,"+2 STR",!0),p(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff={str:3,vit:3,duration:3},r.tempBuff={str:3,vit:3,duration:3},p(s.x,s.y,"+3 STR, +3 VIT",!0),p(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let u=Math.max(1,Math.floor(ve(r,"luk")*.4-ve(r,"luk")*.2));r.tempDebuff={poison:u,duration:3},p(r.x,r.y,`${u} poison for 2 turns`,!1)}break;case"concoct":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"int")*.8-(ve(r,"int")*.4+ve(r,"luk")*.2)));h(r,u,!1,!0);let m=Math.max(1,Math.floor(u*.5));s.luk=Math.max(1,(s.luk||0)+m),p(s.x,s.y,`+${m} LUK`,!0)}break;case"gaze":{if(!r)break;let u=1;r.tempDebuff={agi:u,vit:u,duration:4},s.tempBuff={agi:u,vit:u,duration:4},p(r.x,r.y,`-${u} AGI, -${u} VIT`,!1),p(s.x,s.y,`+${u} AGI, +${u} VIT`,!0)}break;case"bloodSuck":{if(!r)break;let u=Math.max(1,Math.floor(s.mp*.6+ve(s,"int")*.6-(r.hp*.3+ve(r,"luk")*.1)));h(r,u,!1,!0)&&h(s,u,!0)}break;case"debilitate":{if(!r)break;let u=3;r.tempDebuff={hp:u,maxHp:u,vit:u,duration:3},s.tempBuff={hp:u,maxHp:u,vit:u,duration:3},p(r.x,r.y,`-${u} HP, -${u} VIT`,!1),p(s.x,s.y,`+${u} HP, +${u} VIT`,!0)}break;case"reanimate":{if(!n.units||!n.reanimateDeadUnit)break;let u=n.units,m=null,x=-1,M=null,y=-1,g=!1;for(let v=0;v<u.length;v++){let A=u[v];if(A.hp>0)continue;let O=A.deathOrder??0;O>=x&&(x=O,m=A),A.player===s.player&&(g=!0,O>=y&&(y=O,M=A))}let S=g?M:m;S&&n.reanimateDeadUnit(s,S)}break;case"warCry":{let u=Math.max(2,Math.ceil((s.maxHp-s.hp)*.1));s.tempBuff={vit:u,luk:u,duration:3},p(s.x,s.y,`+${u} VIT, +${u} LUK`,!0)}break;case"bash":{if(!r)break;let u=r.agi;r.tempDebuff={agi:u,duration:3},p(r.x,r.y,`-${u} AGI`,!1)}break;case"gnaw":{let u=Math.max(1,Math.floor(ve(s,"str")-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1,!0),h(s,u,!0)}break;case"infect":{let u=Math.max(1,Math.ceil(ve(s,"luk")*.4-ve(r,"luk")*.1));r.tempDebuff={poison:u,duration:4},p(r.x,r.y,`${u} poison for 3 turns`,!1)}break;case"vodoo":{if(!r)break;s.tempBuff={vodoo:r.id,duration:3},p(r.x,r.y,"Vodoo for 2 turns",!1)}break;case"malediction":{if(!r)break;let u=Math.max(1,Math.ceil(ve(s,"int")*.4+ve(s,"luk")*.3-(ve(r,"int")*.3+ve(r,"luk")*.2))),m=Math.max(1,Math.ceil(u*.3));r.tempDebuff={luk:m,int:m,str:m,vit:m,agi:m,dex:m,duration:3},h(r,u,!1,!0),p(r.x,r.y,`-${m} ALL STATS`,!1)}break;case"foresight":{let u=Math.max(2,Math.floor(ve(s,"int")*.3));if(s.tempBuff={int:u,dex:u,duration:3},p(s.x,s.y,`+${u} INT, +${u} DEX`,!0),!r)break;r.tempBuff={int:u,dex:u,duration:3},p(r.x,r.y,`+${u} INT, +${u} DEX`,!0)}break;case"overheal":{let u=Math.max(1,Math.floor(ve(s,"int")*.3+ve(s,"luk")*.2));if(s.tempBuff={heal:u,duration:3},p(s.x,s.y,"Auto heal for 2 turns",!0),!r)break;r.tempDebuff={heal:u,duration:3},p(r.x,r.y,"Auto heal for 2 turns",!0)}break;case"skewer":{let u=Math.max(1,Math.ceil(ve(s,"dex")*.8-(ve(r,"vit")*.3+ve(r,"luk")*.2)));r.tempDebuff={agi:u,duration:3},p(r.x,r.y,`-${u} AGI`,!1)}break;case"rapid":s.tempBuff={doubleAttack:!0,duration:2},p(s.x,s.y,"Double attack for 1 turn",!0);break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",o,"\u2192",l,`| MP ${s.mp}`,d!=null?`| ${d} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function Nd(i){let e=Uh,t=Nh,n=Array.from({length:t},()=>Array(e).fill(!1)),s=Array.from({length:t},()=>Array(e).fill(0)),r=Array.from({length:t},()=>Array(e).fill(it.GRASS)),a=i!=null?dv(i):()=>Math.random(),o=Math.floor(e/2),l=Math.floor(t/2),d=o,h=0,p=o,u=t-1,m=2,x=3;function M(q,V,Z,ce){let fe=ce;for(let Se=V;Se<=Z;Se++)if(!(Se<0||Se>=t))for(let te=-m;te<=m;te++){let de=fe+te;de<0||de>=e||(n[Se][de]=!0,r[Se][de]=q,s[Se][de]=1)}}M(it.BASE_TOP,h,h+x-1,d),M(it.BASE_BOTTOM,u-x+1,u,p),M(it.CENTER,l-1,l+1,o);let y=new Set,g=(q,V)=>Math.abs(q-o)<=2&&Math.abs(V-l)<=1,S=(q,V)=>{q<0||q>=e||V<0||V>=t||g(q,V)||y.add(V*e+q)},v=Math.floor(e/2),A=Math.floor(t/2),O=Math.min(e,t)*Bh,D=Math.max(60,(t+e)*2);for(let q=0;q<2;q++){let V=q===0?v-O:v+O,Z=q===0?Math.PI/2:-Math.PI/2,ce=q===0?Math.PI*3/2:Math.PI/2;for(let fe=0;fe<=D;fe++){let Se=fe/D,te=Z+Se*(ce-Z),de=V+O*Math.cos(te),Ae=A+O*Math.sin(te),Ce=Math.round(de),ke=Math.round(Ae);S(Ce,ke),S(Ce+1,ke),S(Ce-1,ke),S(Ce,ke+1),S(Ce,ke-1)}}let N=[[0,1],[0,-1],[1,0],[-1,0]];for(let q=0;q<1;q++){let V=[];y.forEach(Z=>{let ce=Z%e,fe=Z/e|0;for(let[Se,te]of N){let de=ce+Se,Ae=fe+te;if(de<0||de>=e||Ae<0||Ae>=t)continue;let Ce=Ae*e+de;y.has(Ce)||V.push(Ce)}}),V.forEach(Z=>y.add(Z))}y.forEach(q=>{let V=q%e,Z=q/e|0;r[Z][V]===it.BASE_TOP||r[Z][V]===it.BASE_BOTTOM||r[Z][V]===it.CENTER||(n[Z][V]=!0,r[Z][V]=it.PATH,s[Z][V]=1)});let Q=Math.round(v-O*1.6),T=Math.round(v+O*1.6),C=Math.round(v-O),ee=Math.round(v+O),X=1;for(let q=l-X;q<=l+X;q++)if(!(q<0||q>=t))for(let V=Q;V<=T;V++)V<0||V>=e||(n[q][V]=!0,r[q][V]!==it.CENTER&&r[q][V]!==it.BASE_TOP&&r[q][V]!==it.BASE_BOTTOM&&(r[q][V]=it.PATH),s[q][V]=Math.max(s[q][V],1));function se(q,V,Z,ce){let fe=Math.max(1,Math.min(q,V)),Se=Math.min(t-2,Math.max(q,V)),te=Math.max(1,Math.min(Z,ce)),de=Math.min(e-2,Math.max(Z,ce));for(let Ae=fe;Ae<=Se;Ae++)for(let Ce=te;Ce<=de;Ce++)r[Ae][Ce]===it.BASE_TOP||r[Ae][Ce]===it.BASE_BOTTOM||r[Ae][Ce]===it.CENTER||(n[Ae][Ce]=!0,r[Ae][Ce]=it.PATH,s[Ae][Ce]=1)}let B=3,K=3;se(h,h+B-1,C,d-1),se(h,h+B-1,d+1,ee),se(u-K+1,u,C,p-1),se(u-K+1,u,p+1,ee),M(it.BASE_TOP,h,h+x-1,d),M(it.BASE_BOTTOM,u-x+1,u,p),M(it.CENTER,l-1,l+1,o);for(let q=0;q<t;q++)for(let V=0;V<e;V++){if(n[q][V]||r[q][V]===it.BASE_TOP||r[q][V]===it.BASE_BOTTOM||r[q][V]===it.CENTER)continue;let Z=Math.abs(V-d)<=4&&Math.abs(q-h)<=3,ce=Math.abs(V-p)<=4&&Math.abs(q-u)<=3,fe=Z||ce,Se=a();Se<.55&&!fe?(r[q][V]=it.TREE,s[q][V]=1+Math.floor(a()*2)):Se<.75||fe&&Se<.5?(r[q][V]=it.WATER,s[q][V]=0):(r[q][V]=it.ROCK,s[q][V]=1+Math.floor(a()*2))}let ie=[];for(let q=0;q<t;q++)for(let V=0;V<e;V++)r[q][V]===it.CENTER&&ie.push({gx:V,gy:q});return{w:e,h:t,path:n,height:s,type:r,topBaseX:d,topBaseY:h,botBaseX:p,botBaseY:u,centerTiles:ie}}function Ev(i,e,t){let n=e===1?it.BASE_BOTTOM:it.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function Tv(i){if(i.centerTiles&&i.centerTiles.length>0)return i.centerTiles;let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===it.CENTER&&e.push({gx:n,gy:t});return e}function Bd(i,e){let t=Tv(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function Ts(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===it.TREE||n===it.WATER||n===it.ROCK)}function wv(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,d=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(d===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let p=0;for(let u=0;u<s;u++){let m=r+d,x=a+h,M=m<0||m>=i.w||x<0||x>=i.h,y=!Ts(i,m,x),g=e.some(S=>S.hp>0&&S.id!==n.id&&S.x===m&&S.y===x);if(M||y||g){let S=Math.max(1,p*3+Math.ceil((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:S}}r=m,a=x,p++}return{newGx:r,newGy:a,collisionDamage:0}}function Av(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,d=Math.abs(o-r),h=Math.abs(l-a),p=r<o?1:-1,u=a<l?1:-1,m=d-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*m;x>-h&&(m-=h,r+=p),x<d&&(m+=d,a+=u)}return s}function Ss(i,e,t,n,s){let r=Av(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!Ts(i,o.x,o.y))return!1}return!0}var Wd=4;function Cl(i,e,t,n,s,r){n=Math.max(Wd,n);let a=(m,x)=>x*i.w+m,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],d=0,h=[[0,1],[0,-1],[1,0],[-1,0]],p=s!=null&&r!=null,u=p?new Set(s.filter(m=>m.hp>0&&m.player!==r.player).map(m=>m.y*i.w+m.x)):null;for(;d<l.length;){let{x:m,y:x,d:M}=l[d++];if(!(M>=n))for(let[y,g]of h){let S=m+y,v=x+g;if(!Ts(i,S,v)||p&&u.has(a(S,v)))continue;let A=a(S,v);if(o.has(A))continue;let O=M+1;o.set(A,O),l.push({x:S,y:v,d:O})}}return o}function Od(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let d=o;d<=l;d++)for(let h=r;h<=a;h++){let p=Math.abs(h-e)+Math.abs(d-t);p>=1&&p<=n&&s.set(d*i.w+h,p)}return s}function gr(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(x,M)=>M*i.w+x,l=new Set(r.filter(x=>x.hp>0&&x.player!==a.player).map(x=>x.y*i.w+x.x)),d=new Map,h=[{x:e,y:t}],p=0;d.set(o(e,t),null);let u=[[0,1],[0,-1],[1,0],[-1,0]];function m(x,M){return Ts(i,x,M)?!l.has(o(x,M)):!1}for(;p<h.length;){let{x,y:M}=h[p++];if(x===n&&M===s){let y=[],g={x:n,y:s};for(;g;)y.unshift(g),g=d.get(o(g.x,g.y));return y}for(let[y,g]of u){let S=x+y,v=M+g,A=o(S,v);d.has(A)||m(S,v)&&(d.set(A,{x,y:M}),h.push({x:S,y:v}))}}return null}function Rv(i,e,t,n,s,r){if(!n||n.length===0)return null;let a=(M,y)=>y*i.w+M,o=a(e,t),l=new Set;for(let M=0;M<n.length;M++){let y=n[M];y&&y.gx!=null&&y.gy!=null&&l.add(a(y.gx,y.gy))}if(l.size===0)return null;if(l.has(o))return{path:[{x:e,y:t}],target:{gx:e,gy:t}};let d=new Set(s.filter(M=>M.hp>0&&M.player!==r.player).map(M=>M.y*i.w+M.x)),h=new Map,p=[{x:e,y:t}],u=0;h.set(o,null);let m=[[0,1],[0,-1],[1,0],[-1,0]];function x(M,y){return Ts(i,M,y)?!d.has(a(M,y)):!1}for(;u<p.length;){let{x:M,y}=p[u++],g=a(M,y);if(l.has(g)){let S=[],v={x:M,y};for(;v;)S.unshift(v),v=h.get(a(v.x,v.y));return{path:S,target:{gx:M,gy:y}}}for(let S=0;S<m.length;S++){let v=m[S][0],A=m[S][1],O=M+v,D=y+A,N=a(O,D);h.has(N)||x(O,D)&&(h.set(N,{x:M,y}),p.push({x:O,y:D}))}}return null}function Cv(i){return{hw:i.w*nt/2,hh:i.h*nt/2}}function Pv(i,e){let{hw:t,hh:n}=Cv(i),s=Math.floor((e.x+t)/nt),r=Math.floor((e.z+n)/nt);return s<0||s>=i.w||r<0||r>=i.h?null:{gx:s,gy:r}}function Fd(i,e,t,n){let s=i.getAttribute("position");if(!s)return;let r=s.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a[o*3]=e,a[o*3+1]=t,a[o*3+2]=n;i.setAttribute("color",new ei(a,3))}var kd={[it.PATH]:2976557,[it.GRASS]:2968109,[it.TREE]:1719578,[it.WATER]:1989278,[it.ROCK]:4872778,[it.BASE_TOP]:8014410,[it.BASE_BOTTOM]:4872826,[it.CENTER]:13940810};function Fh(i){return i.w*nt/2}function kh(i){return i.h*nt/2}function Xd(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new fl(e);return r.wrapS=r.wrapT=Oa,r.repeat.set(4,4),r.needsUpdate=!0,r}function Hd(i){let e=new vi,t=Fh(i),n=kh(i),s=new Yn(nt,Zn,nt),r=Xd(64),a=.88,o=.02,l=[];e.userData.swayingFoliage=[];function d(X,se,B,K,ie){let q=new Gn({color:3828266,roughness:.9});q.bumpMap=r,q.bumpScale=.12;for(let V=0;V<K;V++){let Z=.08+Math.random()*ie,ce=.03+Math.random()*.03,fe=new Ke(new Ks(ce*.5,ce,Z,6),q);fe.position.set(X+(Math.random()-.5)*.5,B+Z/2,se+(Math.random()-.5)*.5),fe.rotation.x=(Math.random()-.5)*.2,fe.rotation.z=(Math.random()-.5)*.2,fe.castShadow=!0,e.add(fe)}}let h=.12;function p(X,se,B){let K=B+.02,ie=[[X-h,K,se-h],[X+h,K,se+h],[X-h,K,se+h],[X+h,K,se-h],[X-h+.06,K,se-h+.06],[X+h-.06,K,se+h-.06],[X-h+.06,K,se+h-.06],[X+h-.06,K,se-h+.06]],q=new Float32Array(ie.length*3);for(let Z=0;Z<ie.length;Z++)q[Z*3]=ie[Z][0],q[Z*3+1]=ie[Z][1],q[Z*3+2]=ie[Z][2];let V=new li;return V.setAttribute("position",new ei(q,3)),V}let u=0;for(let X=0;X<i.h;X++)for(let se=0;se<i.w;se++)i.path[X][se]&&u++;let m=new Gn({color:16777215,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),x=new hl(s,m,u);x.userData.tileGridGround=!0,x.userData.insideTileGx=new Uint16Array(u),x.userData.insideTileGy=new Uint16Array(u),x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1;let M=[],y=[],g=[],S=[],v=new oi,A=new wt,O=new bn,D=new rs,N=new na,Q=new F,T=new F(1,1,1),C=0;for(let X=0;X<i.h;X++)for(let se=0;se<i.w;se++){let B=i.type[X][se],K=i.height[X][se],ie=kd[B],q=Zn+K*.35,V=q/2+Zn/2,Z=se*nt-t+nt/2,ce=X*nt-n+nt/2,fe=(ie>>16&255)/255,Se=(ie>>8&255)/255,te=(ie&255)/255,de=fe,Ae=Se,Ce=te;if(B===it.PATH||B===it.TREE||B===it.ROCK){let Qe=Math.random()*.45;de=fe*(1-Qe)+.42*Qe,Ae=Se*(1-Qe)+.26*Qe,Ce=te*(1-Qe)+.14*Qe}(B===it.TREE||B===it.ROCK)&&(de*=.5,Ae*=.5,Ce*=.5);let ke=1+(Math.random()-.5)*.12,gt=Math.min(1,de*ke),ot=Math.min(1,Ae*ke),et=Math.min(1,Ce*ke);if(i.path[X][se])x.userData.insideTileGx[C]=se,x.userData.insideTileGy[C]=X,A.setRGB(gt,ot,et),x.setColorAt(C,A),v.position.set(se*nt-t+nt/2,q/2,X*nt-n+nt/2),v.updateMatrix(),x.setMatrixAt(C,v.matrix),C++;else{let J=s.clone();if(v.position.set(se*nt-t+nt/2,q/2,X*nt-n+nt/2),v.updateMatrix(),J.applyMatrix4(v.matrix),Fd(J,gt,ot,et),M.push(J),B===it.TREE)S.push(p(Z,ce,V));else if(B===it.WATER){let qt=kd[it.WATER],Ze=(qt>>16&255)/255,Qe=(qt>>8&255)/255,Xe=(qt&255)/255,ze=1+(Math.random()-.5)*.12,ut=Math.min(1,Ze*ze),R=Math.min(1,Qe*ze),E=Math.min(1,Xe*ze),j=new as(nt,nt);j.rotateX(-Math.PI/2),v.position.set(Z,V+.02,ce),v.rotation.set(0,0,0),v.scale.set(1,1,1),v.updateMatrix(),j.applyMatrix4(v.matrix),Fd(j,ut,R,E),y.push(j)}else if(B===it.ROCK){let qt=(Ze,Qe,Xe)=>{let ze=new xl(Ze,0),ut=Math.random()*Math.PI*2,R=Math.random()*Math.PI*2,E=Math.random()*Math.PI*2;N.set(ut,R,E),D.setFromEuler(N),Q.set(Z+Qe,V+Ze-.2,ce+Xe),O.compose(Q,D,T),ze.applyMatrix4(O),g.push(ze)};qt(.32+Math.random()*.14,(Math.random()-.5)*.15,(Math.random()-.5)*.15),qt(.2+Math.random()*.12,(Math.random()-.5)*.25,(Math.random()-.5)*.25),qt(.12+Math.random()*.12,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),e.add(x);function ee(X){for(let se=0;se<X.length;se++)X[se].dispose()}if(M.length>0){let X=ja(M);if(ee(M),X){let se=new Gn({color:16777215,vertexColors:!0,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),B=new Ke(X,se);B.receiveShadow=!0,B.castShadow=!0,B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}if(S.length>0){let X=ja(S);if(ee(S),X){let se=new Xa({color:855309,linewidth:1}),B=new ul(X,se);B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}if(g.length>0){let X=ja(g);if(ee(g),X){let se=new Gn({color:6974058,roughness:.9});se.bumpMap=r,se.bumpScale=.2;let B=new Ke(X,se);B.castShadow=!0,B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}if(y.length>0){let X=ja(y);if(ee(y),X){let se=new Gn({color:16777215,vertexColors:!0,roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),B=new Ke(X,se);B.receiveShadow=!0,B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}for(let X=0;X<i.h;X++)for(let se=0;se<i.w;se++){if(i.path[X][se])continue;let B=i.type[X][se],K=i.height[X][se],q=(Zn+K*.35)/2+Zn/2,V=se*nt-t+nt/2,Z=X*nt-n+nt/2;if(B===it.TREE){let ce=new vi;ce.userData={gx:se,gy:X},ce.position.set(V,q,Z);let fe=se===0||se===i.w-1||X===0||X===i.h-1,Se=fe?.75+Math.random()*.35:.5+Math.random()*.2,te=new wt(4007959),de=()=>1+(Math.random()-.5)*.4;te.r=Math.min(1,Math.max(0,te.r*de())),te.g=Math.min(1,Math.max(0,te.g*de())),te.b=Math.min(1,Math.max(0,te.b*de()));let Ae=.85+Math.random()*.2,Ce=new Gn({color:te,roughness:Ae});Ce.bumpMap=r,Ce.bumpScale=.1+Math.random()*.12;let ke=new Ke(new Ks(.12,.14,Se,8),Ce);ke.position.set(0,Se/2,0),ke.castShadow=!0,ke.raycast=function(){},ce.add(ke);let gt=r.clone();gt.repeat.set(3,3);let ot=new wt(2972205),et=()=>1+(Math.random()-.5)*.44;ot.r=Math.min(1,Math.max(0,ot.r*et())),ot.g=Math.min(1,Math.max(0,ot.g*et())),ot.b=Math.min(1,Math.max(0,ot.b*et()));let Ee=.78+Math.random()*.24,J=new Gn({color:ot,roughness:Ee});J.bumpMap=gt,J.bumpScale=.16+Math.random()*.14;let qt=fe?.52:.45,Ze=fe?1.05:.9,Qe=.12,Xe=Ze*.5,ze=Ze*.45,ut=Ze*.4,R=new vi;R.position.set(0,Se,0);let E=new Ke(new Ri(qt,Xe,8),J);E.position.set(0,Xe/2,0),E.castShadow=!0,E.raycast=function(){},R.add(E);let j=new Ke(new Ri(qt*.75,ze,8),J);j.position.set(0,Xe-Qe+ze/2,0),j.castShadow=!0,j.raycast=function(){},R.add(j);let ye=new Ke(new Ri(qt*.5,ut,8),J);ye.position.set(0,Xe-Qe+ze-Qe+ut/2,0),ye.castShadow=!0,ye.raycast=function(){},R.add(ye),ce.add(R);let xe=(i.w-1)*.5,le=(i.h-1)*.5,Ge=Math.max(3.5,Math.min(i.w,i.h)*.24);(se-xe)**2+(X-le)**2<=Ge*Ge&&Math.random()<2/3&&e.userData.swayingFoliage.push({group:R,phase:Math.random()*Math.PI*2}),e.add(ce),l.push(ce)}}return e.userData.treeGroups=l,e}function Iv(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=Nd(),t=document.getElementById("canvas-wrap"),n=new cl;n.background=new wt(1711652),n.fog=new ll(1711652,30,90);let s=e.w*nt/2,r=e.h*nt/2,a=new gi(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,d=new F(12,38,16).normalize().multiplyScalar(o),h=new F,p=new F,u=new Ki(new F(0,1,0),0),m=new F,x=new F,M=!1,y=!1,g=!0,S=!1,v=null,A=5,O=.004,D=-Math.PI*.4,N=Math.PI*.4,Q=new F,T={x:0,y:0},C=!1,ee=1,X=40,se=.005,B=.15,K=1,ie=null,q=new Sl(16777215,.45);n.add(q);let V=new bl(16774630,1.1);V.position.set(30,50,20),V.castShadow=!0,V.shadow.mapSize.width=2048,V.shadow.mapSize.height=2048,V.shadow.camera.near=1,V.shadow.camera.far=120,V.shadow.camera.left=-50,V.shadow.camera.right=50,V.shadow.camera.top=50,V.shadow.camera.bottom=-50,n.add(V);let Z=Hd(e);n.add(Z);let ce=new Map,fe=new vi;n.add(fe);let Se={30:!1,20:!1,10:!1},te=["red","yellow","purple","blue","green"],de={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943},Ae=.92;function Ce(f,c,_){let P=(Zn+e.height[_][c]*.35)/2+Zn/2,I=new as(Ae,Ae),U=new Dn({color:f,transparent:!0,opacity:.45,side:In}),k=new Ke(I,U);return k.rotation.x=-Math.PI/2,k.position.set(c*nt-Pe+nt/2,P+.01,_*nt-He+nt/2),k}function ke(f){let c=new _l(.22,0),_=new Gn({color:f,metalness:.3,roughness:.4}),b=new Ke(c,_);return b.rotation.x=Math.PI/4,b.castShadow=!0,b.receiveShadow=!0,b}function gt(){let f=Math.floor(e.h/2),c=[];for(let _=0;_<e.w;_++){let b=f;if(e.type[b][_]!==it.PATH||j(_,b)!=null)continue;let I=b*e.w+_;ce.has(I)||c.push({gx:_,gy:b})}return c}function ot(f){let c=gt();if(c.length===0)return;let _=c[Math.floor(Math.random()*c.length)],b=te[Math.floor(Math.random()*te.length)],P=_.gy*e.w+_.gx,I=de[b],U=Ie(_.gx,_.gy);U.y+=.35;let k=ke(I);k.position.copy(U),fe.add(k);let L=Ce(I,_.gx,_.gy);fe.add(L),ce.set(P,{type:b,mesh:k,glowMesh:L}),console.log("[POWERUP]",`turnsLeft: ${f}, type: ${b}, gx: ${_.gx}, gy: ${_.gy}`)}function et(f){let c=f.y*e.w+f.x,_=ce.get(c);if(!_)return;let b=_.mesh;if(fe.remove(b),b.geometry.dispose(),b.material){let P=b.material;P.dispose&&P.dispose()}_.glowMesh&&(fe.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose()),ce.delete(c),_.type==="green"?(f.hp=Math.min(f.maxHp,f.hp+6),ri(f.x,f.y,"+6 HP",!1,"buff")):(_.type==="red"?f.tempBuff={str:4,duration:3}:_.type==="yellow"?f.tempBuff={agi:4,duration:3}:_.type==="purple"?f.tempBuff={int:4,duration:3}:_.type==="blue"&&(f.tempBuff={dex:4,duration:3}),ri(f.x,f.y,`+4 ${_.type==="red"?"STR":_.type==="yellow"?"AGI":_.type==="purple"?"INT":"DEX"}`,!1,"buff")),mt(f,()=>Ht(f))}let Ee=[],J=0,qt=new Map;function Ze(){qt.clear()}function Qe(f){qt.set(f.id,f)}function Xe(f){qt.delete(f)}function ze(f){return qt.get(f)}let ut=new Map;function R(){ut.clear()}function E(f,c,_){if(c!=null&&_!=null){let b=_*e.w+c;ut.get(b)===f&&ut.delete(b)}f.hp>0&&ut.set(f.y*e.w+f.x,f)}function j(f,c){let _=c*e.w+f,b=ut.get(_);return!b||b.hp<=0||b.x!==f||b.y!==c?null:b}let ye=1,xe=0,le=new Map,Ge=Xd(64),Pe=Fh(e),He=kh(e);function Ie(f,c){let b=(Zn+e.height[c][f]*.35)/2+Zn/2;return new F(f*nt-Pe+nt/2,b,c*nt-He+nt/2)}function Tt(f,c){f==="short"&&(Uh=27,Nh=15,Bh=.35,bs=100),n.remove(Z),Z.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(P=>P.dispose())}),le.forEach(_=>{n.remove(_),_.traverse(b=>{b.geometry&&b.geometry.dispose(),b.material&&(Array.isArray(b.material)?b.material:[b.material]).forEach(I=>I.dispose())})}),le.clear(),Ee.length=0,Ze(),R(),ye=1,xe=0,J=0,ce.forEach(_=>{fe.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(fe.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),ce.clear(),Se={30:!1,20:!1,10:!1},e=Nd(typeof c<"u"?c:void 0),Pe=Fh(e),He=kh(e),Z=Hd(e),n.add(Z)}function Te(){le.forEach(f=>{n.remove(f),f.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&(Array.isArray(c.material)?c.material:[c.material]).forEach(b=>b.dispose())})}),le.clear(),Ee.length=0,Ze(),R(),ye=1,xe=0,J=0}function Nt(f,c){let _=(f>>16&255)/255,b=(f>>8&255)/255,P=(f&255)/255,I=1+(Math.random()-.5)*c;return new wt(Math.min(1,_*I),Math.min(1,b*I),Math.min(1,P*I))}let Dt=.62;function ft(f,c){c=c??Dt;let _=f instanceof wt?f:new wt(f);return new wt(Math.max(0,_.r*c),Math.max(0,_.g*c),Math.max(0,_.b*c))}function lt(f,c,_){let b=Js[c]||Js.knight,P=ft(Nt(b.primary,.08)),I=ft(Nt(b.secondary,.08)),U=Wn[c]&&Wn[c].gender||"male",k=_??4006676,L=ft(Nt(b.skin!=null?b.skin:15250592,.06)),ne=ft(Nt(k,.08)),re=()=>(Math.random()-.5)*.08,oe=()=>(Math.random()-.5)*.04,H=new Gn({color:P,metalness:Math.max(0,.25+oe()),roughness:Math.max(.3,Math.min(1,.5+re()))});H.bumpMap=Ge,H.bumpScale=.1;let ae=new Gn({color:I,metalness:Math.max(0,.2+oe()),roughness:Math.max(.3,Math.min(1,.55+re()))});ae.bumpMap=Ge,ae.bumpScale=.1;let we=new Gn({color:P,metalness:Math.max(0,.25+oe()),roughness:Math.max(.3,Math.min(1,.5+re()))});we.bumpMap=Ge,we.bumpScale=.1;let _e=new Gn({color:L,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+re()))});_e.bumpMap=Ge,_e.bumpScale=.05;let Ve=new vi,Fe=.28,at=.08,Ct=.08,yt=new Ke(new Yn(at,Fe,Ct),ae);yt.position.set(-.06,Fe/2,0),yt.castShadow=!0,Ve.add(yt);let We=new Ke(new Yn(at,Fe,Ct),ae);We.position.set(.06,Fe/2,0),We.castShadow=!0,Ve.add(We);let tt=.28,bt=.2,tn=.12,un=new Ke(new Yn(bt,tt,tn),H);un.position.set(0,Fe+tt/2,0),un.castShadow=!0,Ve.add(un);let vn=.06,Zt=.22,pt=.06,Bt=new Ke(new Yn(vn,Zt,pt),we);Bt.position.set(-(bt/2+vn/2),Fe+tt-.08,0),Bt.castShadow=!0,Ve.add(Bt);let nn=new Ke(new Yn(vn,Zt,pt),we);if(nn.position.set(bt/2+vn/2,Fe+tt-.08,0),nn.castShadow=!0,Ve.add(nn),b.cape!=null){let je=bt*1.95,_t=je*.6,dn=Fe+tt*.28,Kt=new ra;Kt.moveTo(-_t/2,dn/2),Kt.lineTo(_t/2,dn/2),Kt.lineTo(je/2,-dn/2),Kt.lineTo(-je/2,-dn/2),Kt.closePath();let Xt=new Za(Kt),rn=new Gn({color:ft(Nt(b.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+re())),side:In});rn.bumpMap=Ge,rn.bumpScale=.12;let he=new Ke(Xt,rn);he.position.set(0,Fe+tt-dn/2+.05,-tn/2-.02),he.rotation.y=Math.PI,he.castShadow=!0,Ve.add(he);let Me=.055,me=Fe+tt+.02,pe=.02,ge=bt/2+vn*.5,Re=new Ke(new os(Me,10,8,0,Math.PI*2,0,Math.PI*.55),rn.clone());Re.position.set(-ge,me,pe),Re.rotation.x=-Math.PI*.35,Re.rotation.z=Math.PI*.5,Re.scale.set(1.2,.85,1.1),Re.castShadow=!0,Ve.add(Re);let ue=new Ke(new os(Me,10,8,0,Math.PI*2,0,Math.PI*.55),rn.clone());ue.position.set(ge,me,pe),ue.rotation.x=-Math.PI*.35,ue.rotation.z=-Math.PI*.5,ue.scale.set(1.2,.85,1.1),ue.castShadow=!0,Ve.add(ue)}if(b.belt!=null){let je=new Gn({color:ft(Nt(b.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+re()))});je.bumpMap=Ge,je.bumpScale=.1;let _t=.022,dn=.04,Kt=new Ke(new Yn(bt+.04,_t,tn+dn),je);Kt.position.set(0,Fe+.04,0),Kt.castShadow=!0,Ve.add(Kt)}if(b.apron!=null){let je=new Gn({color:ft(Nt(b.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+re())),side:In});je.bumpMap=Ge,je.bumpScale=.12;let _t=bt*.95,dn=Fe*.85,Kt=new Ke(new as(_t,dn),je),Xt=Fe+.2;Kt.position.set(0,Xt-dn/2,tn/2+.02),Kt.castShadow=!0,Ve.add(Kt);let rn=Fe+tt+.02,he=bt/2+vn*.2,Me=.018,me=.008,pe=rn-Xt,ge=new Ke(new Yn(Me,pe,me),je.clone());ge.position.set(-he,(Xt+rn)/2,tn/2+.015),ge.castShadow=!0,Ve.add(ge);let Re=new Ke(new Yn(Me,pe,me),je.clone());Re.position.set(he,(Xt+rn)/2,tn/2+.015),Re.castShadow=!0,Ve.add(Re)}let Oe=.1,zt=new Ke(new os(Oe,12,10),_e);zt.position.set(0,Fe+tt+Oe,0),zt.castShadow=!0,Ve.add(zt);let Un=new Dn({color:1710638}),sn=new Ke(new Yn(.032,.004,.004),Un);sn.position.set(-.032,.028,Oe*.92),zt.add(sn);let Wt=new Ke(new Yn(.032,.004,.004),Un);Wt.position.set(.032,.028,Oe*.92),zt.add(Wt);let fn=new Dn({color:2957087}),Hn=new Ke(new Yn(.045,.012,.008),fn);Hn.position.set(0,-.028,Oe*.92),zt.add(Hn);let zn=new Gn({color:ne,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+re()))});zn.bumpMap=Ge,zn.bumpScale=.15;let xi=je=>{let _t=Oe*.32,dn=Oe*.22,Kt=new Ke(new Ri(dn*.9,_t,5),zn);Kt.position.set(-Oe*.25,Oe*.22,Oe*.72),Kt.rotation.x=.35,Kt.rotation.z=.12,Kt.castShadow=!0,je.add(Kt);let Xt=new Ke(new Ri(dn,_t,5),zn);Xt.position.set(Oe*.28,Oe*.18,Oe*.68),Xt.rotation.x=.28,Xt.rotation.z=-.1,Xt.castShadow=!0,je.add(Xt);let rn=new Ke(new Ri(dn*.7,_t*.9,5),zn);rn.position.set(0,Oe*.28,Oe*.78),rn.rotation.x=.4,rn.castShadow=!0,je.add(rn)};if(U==="female"){let je=new Ke(new os(Oe*.92,12,10,0,Math.PI*2,0,Math.PI*.52),zn);je.position.set(0,Oe*.28,-Oe*.18),je.rotation.y=.06,je.rotation.x=-.04,je.castShadow=!0,zt.add(je);let _t=new Ke(new Yn(Oe*1.15,Oe*2.2,Oe*.55),zn);_t.position.set(0,-Oe*.6,-Oe*.95),_t.rotation.z=.03,_t.castShadow=!0,zt.add(_t),xi(zt)}else{let je=new Ke(new os(Oe*.9,12,10,0,Math.PI*2,0,Math.PI*.5),zn);je.position.set(0,Oe*.4,-Oe*.12),je.rotation.y=.08,je.rotation.x=-.05,je.rotation.z=.04,je.castShadow=!0,zt.add(je);let _t=new Ke(new os(Oe*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),zn);_t.position.set(0,Oe*.1,-Oe*.05),_t.rotation.y=.1,_t.castShadow=!0,zt.add(_t),xi(zt)}if(b.horns!=null){let je=new Gn({color:ft(Nt(b.horns,.08)),metalness:Math.max(0,.12+oe()),roughness:Math.max(.4,Math.min(1,.62+re()))});je.bumpMap=Ge,je.bumpScale=.1;let _t=Oe*1.12,dn=Oe*.22,Kt=new vl(_t,dn,8,28),Xt=new Ke(Kt,je);Xt.rotation.x=Math.PI/2,Xt.position.y=Oe*.42,Xt.castShadow=!0,zt.add(Xt);let rn=Oe*.48,he=Oe*2.55,Me=new Ke(new Ri(rn,he,8),je.clone());Me.position.set(-Oe*1.02,Oe*.18,Oe*.02),Me.rotation.set(-.42,-.32,.58),Me.castShadow=!0,zt.add(Me);let me=new Ke(new Ri(rn,he,8),je.clone());me.position.set(Oe*1.02,Oe*.18,Oe*.02),me.rotation.set(-.42,.32,-.58),me.castShadow=!0,zt.add(me)}return Ve.userData.leftLeg=yt,Ve.userData.rightLeg=We,Ve.userData.leftArm=Bt,Ve.userData.rightArm=nn,Ve}function $e(f,c){let _=f.userData;if(!_.leftLeg)return;let b=c*Math.PI*2,P=.35,I=.28;_.leftLeg.rotation.x=Math.sin(b)*P,_.rightLeg.rotation.x=Math.sin(b+Math.PI)*P,_.leftArm.rotation.y=Math.sin(b+Math.PI)*I,_.rightArm.rotation.y=Math.sin(b)*I}function At(f){let c=f.userData;c.leftLeg&&(c.leftLeg.rotation.x=0,c.rightLeg.rotation.x=0,c.leftArm.rotation.y=0,c.rightArm.rotation.y=0)}function $t(f){let c=lt(f.player,f.class,f.hairColor);c.position.copy(Ie(f.x,f.y)),c.castShadow=!0,c.userData.unitId=f.id;let _=.28,b=.28,P=.12,I=.18,U=.04,k=new as(I,U),L=new Dn({color:6037528,side:In,depthTest:!0,depthWrite:!1}),ne=new Ke(k,L);ne.position.set(0,_+b/2,P/2+.02),ne.rotation.x=-Math.PI/2,ne.rotation.z=Math.PI/4,ne.visible=f.maxHp>0&&f.hp<f.maxHp&&f.hp>0,c.add(ne),c.userData.slashMark=ne,n.add(c),le.set(f.id,c),z(c,f.maxHp>0&&f.hp/f.maxHp<.35)}function Ht(f){let c=le.get(f.id);!c||!c.userData.slashMark||(c.userData.slashMark.visible=f.maxHp>0&&f.hp<f.maxHp&&f.hp>0)}function Pt(f){f.traverse(_=>{if(!_.isMesh||!_.material)return;let b=_.material;if(b.color){let P=b.color.r,I=b.color.g,U=b.color.b,k=.2126*P+.7152*I+.0722*U,L=Math.max(0,Math.min(1,k*.55));b.color.setRGB(L,L,L)}})}let Le=.35;function z(f,c){if(f)if(c){f.rotation.x=.35,f.scale.setScalar(.96);let _=f.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=.2,_.rightArm.rotation.y=.2),f.traverse(b=>{b.isMesh&&b.material&&b.material.color&&(b.userData.originalColor||(b.userData.originalColor=b.material.color.clone()),b.material.color.copy(b.userData.originalColor).multiplyScalar(.82))})}else{f.rotation.x=0,f.scale.setScalar(1);let _=f.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=0,_.rightArm.rotation.y=0),f.traverse(b=>{b.isMesh&&b.material&&b.userData.originalColor&&b.material.color.copy(b.userData.originalColor)})}}function Ne(f){if(f.level>=3)return;let c=f.maxHp>0?f.hp/f.maxHp:1;f.level+=1;let _=P=>Math.max(1,Math.ceil(P*1.1)),b=P=>Math.max(1,Math.ceil(P*1.1));f.maxHp=_(f.maxHp),f.maxMp=_(f.maxMp),f.hp=Math.max(1,Math.min(f.maxHp,Math.ceil(c*f.maxHp))),f.mp=Math.max(1,Math.min(f.maxMp,Math.ceil(c*f.maxMp))),f.str=b(f.str),f.agi=b(f.agi),f.vit=b(f.vit),f.dex=b(f.dex),f.luk=b(f.luk),f.int=b(f.int),f.range>3&&(f.range=b(f.range)),console.log("[LEVEL UP]",`${f.name} (${f.class}, P${f.player})`,`\u2192 Lv.${f.level}`,`| HP ${f.hp}/${f.maxHp} MP ${f.mp}/${f.maxMp} STR ${f.str} VIT ${f.vit}`),Be(f)}function Be(f){let c=le.get(f.id),_=f.level===3?"levelup level3":f.level===2?"levelup level2":"levelup";if(Np(f,_),!c)return;let b=performance.now(),P=0;function I(U){P++,P%2===0&&Vt();let k=U-b,L=Math.min(1,k/Si),ne=L<.5?1+.35*(L/.5):1+.35*(1-(L-.5)/.5);c.scale.setScalar(ne),L<1?requestAnimationFrame(I):c.scale.setScalar(1)}requestAnimationFrame(I)}function mt(f,c){let _=le.get(f.id);if(!_){c&&c();return}let b=performance.now(),P=0;function I(U){P++,P%2===0&&Vt();let k=U-b,L=Math.min(1,k/Si),ne=L<.5?1+.35*(L/.5):1+.35*(1-(L-.5)/.5);_.scale.setScalar(ne),L<1?requestAnimationFrame(I):(_.scale.setScalar(1),c&&c())}requestAnimationFrame(I)}let dt=400,jt=280,Qt=.45,Tn=160,Jn=280,an=350,ti=500,Si=600,yr=400,to=280,ws=.2,no=.18,As=!1,ua=new F,fa=new F,xr=new F,da=new F;function io(f=!1){g=!0;let c=null;if($==="playing"&&rt.length>0){let U=rt[ht],k=ze(U);c=k&&k.hp>0?k:null}if(c||(c=Ee.find(U=>U.player===G&&U.hp>0)),!c)return;let _=a.position.distanceTo(h);if(_<.1&&(_=o),p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(d).normalize(),xr.copy(Ie(c.x,c.y)),da.copy(xr).add(p.clone().multiplyScalar(_)),f||As){h.copy(xr),a.position.copy(da),a.lookAt(h),Vt();return}As=!0,ua.copy(h),fa.copy(a.position);let b=performance.now(),P=0;si.shadowMap.enabled=!1;function I(U){P++,P%2===0&&Vt();let k=Math.min(1,(U-b)/dt),L=k*(2-k);h.lerpVectors(ua,xr,L),a.position.lerpVectors(fa,da,L),a.lookAt(h),k<1?requestAnimationFrame(I):(si.shadowMap.enabled=!0,As=!1)}requestAnimationFrame(I)}let w=0,G=1,$="draft",W="pvp",Y=1,Ue={1:"",2:""},Ye=null,st=null,ct=null,vt="long";function Je(f){return W==="online"&&Ue[f]?Ue[f]:"Player "+f}let Mt=1,mn=0,Bn=null;async function On(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{Bn=await navigator.wakeLock.request("screen"),Bn.addEventListener("release",()=>{Bn=null})}catch{Bn=null}}function Vi(){Bn&&(Bn.release().catch(()=>{}),Bn=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&W==="cvcpu"&&$==="playing"&&On()});let ln="balanced",xt=new Set(bi),_r=[...bi],cn=0,Pi={1:0,2:0},ni=null,Ii=null,Xn=null,wn=new Set,Ei=[],rt=[],ht=0,Gi=null,An=null,Rn=new Map,Hh=null;function qd(f){if(!f||f.hp<=0)return;Hh=f.id;let c=document.getElementById("unit-preview-card"),_=document.getElementById("unit-preview-image"),b=document.getElementById("unit-preview-name"),P=document.getElementById("unit-preview-meta"),I=document.getElementById("unit-preview-stats");c.classList.remove("player-1","player-2"),c.classList.add(f.player===1?"player-1":"player-2"),c.classList.toggle("level-2",f.level>=2&&f.level<3),c.classList.toggle("level-3",f.level>=3),_.src=ca[f.class]||"",_.alt=f.name,b.textContent=f.name,P.textContent=`Lv.${f.level} ${f.class} \u2014 ${Je(f.player)}`;let U=[["HP",`${f.hp}/${f.maxHp}`,"stat-val-hp"],["MP",`${f.mp}/${f.maxMp}`,""],["STR",zi(f,"str"),""],["AGI",zi(f,"agi"),""],["VIT",zi(f,"vit"),""],["DEX",zi(f,"dex"),""],["LUK",zi(f,"luk"),""],["INT",zi(f,"int"),""]];f.tempDebuff&&f.tempDebuff.poison!=null&&U.push(["Poison",`${f.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),f.tempBuff&&f.tempBuff.heal!=null&&U.push(["Regen",`${f.tempBuff.heal} HP/turn`,"stat-val-buff"]),I.innerHTML=U.map(([L,ne,re])=>{let oe=re?` ${re}`:"";return`<span class="stat-label">${L}</span><span class="stat-val${oe}">${ne}</span>`}).join("");let k=f.maxHp>0&&f.hp/f.maxHp<.3;c.classList.toggle("low-hp",k),c.style.display="block"}function pa(){Hh=null;let f=document.getElementById("unit-preview-card");f.classList.remove("low-hp","level-2","level-3"),f.style.display="none"}let gn=!1,Qi=!1,Rs=!1,ii=null,xn=!1,ci=!1,Cs=!1,Li=[],Di=new vi;n.add(Di);let Wi=[],vr=!0,Ps=0,zh=0;function Vt(){vr=!0,Ps=performance.now()}let ma=new vi;n.add(ma);let Pl=[],Yd=nt,$d=.02,Kd=3368703,Zd=13382451;function Jd(f,c){let _=f/2,b=_-c,P=new ra;P.moveTo(-_,-_),P.lineTo(_,-_),P.lineTo(_,_),P.lineTo(-_,_),P.lineTo(-_,-_);let I=new sa;return I.moveTo(-b,-b),I.lineTo(b,-b),I.lineTo(b,b),I.lineTo(-b,b),I.lineTo(-b,-b),P.holes.push(I),new Za(P)}let jd=Jd(Yd,$d);function Ui(f=null){let c=Ee.filter(_=>_.hp>0&&_.id!==f).map(_=>`${_.id},${_.x},${_.y},${_.player}`).sort().join("|");if(!(Ui._lastSig===c&&Ui._lastExclude===f)){for(Ui._lastSig=c,Ui._lastExclude=f,Pl.forEach(_=>_.dispose()),Pl.length=0;ma.children.length;){let _=ma.children[0];ma.remove(_)}Ee.filter(_=>_.hp>0&&_.id!==f).forEach(_=>{let b=_.x,P=_.y,U=(Zn+e.height[P][b]*.35)/2+Zn/2,k=b*nt-Pe+nt/2,L=P*nt-He+nt/2,ne=U+.02,re=_.player===1?Kd:Zd,oe=new Dn({color:re,side:In}),H=new Ke(jd,oe);H.rotation.x=-Math.PI/2,H.position.set(k,ne,L),ma.add(H),Pl.push(oe)}),Vt()}}let Qd=1.15,Il={1:8102901,2:15628943},Ti=(()=>{let f=new Dn({color:Il[1]}),c=new Ke(new Ri(.1,.25,8),f);return c.rotation.x=Math.PI,c.visible=!1,n.add(c),c})();function Ll(){if($!=="playing"||rt.length===0||Cs){Ti.visible=!1,Ti.removeFromParent(),n.add(Ti);return}let f=rt[ht],c=ze(f);if(!c||c.hp<=0){Ti.visible=!1,Ti.removeFromParent(),n.add(Ti);return}let _=le.get(f);if(!_){Ti.visible=!1;return}Ti.removeFromParent(),_.add(Ti),Ti.position.set(0,Qd,0),Ti.material&&Ti.material.color.setHex(Il[c.player]??Il[1]),Ti.visible=!0}function Lv(f){let c=[[0,1],[0,-1],[1,0],[-1,0]],_=[];for(let[b,P]of c){let I=f.x+b,U=f.y+P;!Ts(e,I,U)||Ee.some(L=>L.id!==f.id&&L.x===I&&L.y===U&&L.hp>0)||_.push(Math.atan2(b,P))}return _}function Vh(f){if(Li.length===0)return f;if(Li.length===1)return Li[0];let c=Li[0],_=Math.abs(Gh(f-c));for(let b=1;b<Li.length;b++){let P=Math.abs(Gh(f-Li[b]));P<_&&(_=P,c=Li[b])}return c}function Gh(f){for(;f>Math.PI;)f-=2*Math.PI;for(;f<-Math.PI;)f+=2*Math.PI;return f}let ep=1.2,es=(()=>{let f=new Ke(new Ri(.12,.35,8),new Dn({color:4500223}));return f.rotation.x=-Math.PI/2,f.visible=!1,n.add(f),f})();function tp(f,c){if(!Cs||rt.length===0||Li.length===0)return;let _=rt[ht],b=ze(_),P=le.get(_);if(!b||!P)return;po(f,c),Ls.setFromCamera(Ds,a);let I=Ls.intersectObjects(Z.children,!0);if(I.length===0)return;let U=null;for(let oe of I)if(mu(oe)){U=oe.point;break}if(!U)return;let k=Ie(b.x,b.y),L=U.x-k.x,ne=U.z-k.z;if(L*L+ne*ne<1e-6)return;let re=Math.atan2(L,ne);P.rotation.y=Vh(re)}function np(){if(rt.length===0)return;let f=rt[ht],c=ze(f),_=le.get(f);if(!c||!_)return;Li=[[0,1],[0,-1],[1,0],[-1,0]].map(([P,I])=>Math.atan2(P,I)),es.removeFromParent(),_.add(es),es.position.set(0,ep,0),es.rotation.x=-Math.PI/2,es.rotation.y=0,es.rotation.z=Math.PI,es.visible=!0,_.rotation.y=Li[0]}function ip(){es.visible=!1,es.removeFromParent(),n.add(es)}let Dl=[];(function(){let c=Ci,_=[1];for(let b=0;b<Math.floor((c-1)/2);b++)_.push(2,2,1,1);c%2===1?_.push(2):(_.push(2,2),_.push(1)),Dl=_})();function Xi(){return Dl[cn]}function Wh(){let f=Xi();return Pi[f]+1}function ga(){xe=0,J=0,ce.forEach(_=>{fe.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(fe.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),ce.clear(),Se={30:!1,20:!1,10:!1};let f=Ci,c=[1];for(let _=0;_<Math.floor((f-1)/2);_++)c.push(2,2,1,1);f%2===1?c.push(2):(c.push(2,2),c.push(1)),Dl=c,$="draft",cn=0,Pi[1]=0,Pi[2]=0,xt=new Set(bi),_r=xv([...bi]),ni=null,Ii=null,Xn=null,wn.clear(),Ei=[],Fn(),Nl(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function Ul(){return Ee.filter(f=>f.hp>0).sort((f,c)=>{let _=ve(f,"agi"),b=ve(c,"agi");if(b!==_)return b-_;let P=ve(f,"dex");return ve(c,"dex")-P}).map(f=>f.id)}function sp(f){let c=new Set(Ee.filter(re=>re.hp>0).map(re=>re.y*e.w+re.x)),_=(re,oe)=>c.has(oe*e.w+re),b=(re,oe)=>re>=0&&re<e.w&&oe>=0&&oe<e.h,P=(re,oe)=>b(re,oe)&&Ts(e,re,oe)&&!_(re,oe),I=le.get(f.id),U=I!=null?I.rotation.y:f.player===1?Math.PI:0,k=f.x-Math.round(Math.cos(U)),L=f.y+Math.round(Math.sin(U));if(P(k,L))return{gx:k,gy:L};let ne=[[0,1],[0,-1],[1,0],[-1,0]];for(let[re,oe]of ne){let H=f.x+re,ae=f.y+oe;if(P(H,ae))return{gx:H,gy:ae}}return null}function rp(f,c,_,b){let P=b?.position&&b.position.gx!=null&&b.position.gy!=null?{gx:b.position.gx,gy:b.position.gy}:sp(f);if(!P)return null;let I=c.class&&bi.includes(c.class)?c.class:"knight",U=c.hairColor!=null?c.hairColor:(Js[I]||Js.knight).hair,k=b?.ownerPlayer!=null?b.ownerPlayer:f.player,L={id:ye++,player:k,x:P.gx,y:P.gy,level:c.level!=null?c.level:1,name:c.name!=null?c.name:"Summoned",class:I,hairColor:U,hp:c.hp!=null?c.hp:10,maxHp:c.maxHp!=null?c.maxHp:10,mp:c.mp!=null?c.mp:5,maxMp:c.maxMp!=null?c.maxMp:5,str:c.str!=null?c.str:5,agi:c.agi!=null?c.agi:5,vit:c.vit!=null?c.vit:5,dex:c.dex!=null?c.dex:5,luk:c.luk!=null?c.luk:5,int:c.int!=null?c.int:5,range:c.range!=null?c.range:1};b?.omitSummonedBy||(L.summonedBy=f.id),_!=null&&Array.isArray(_)&&_.length>0&&(L.summonedSkills=_),Ee.push(L),Qe(L),E(L,null,null),$t(L);let ne=le.get(L.id);if(ne&&b?.useGrayscaleAppearance&&Pt(ne),ne){let _e=function(Ve){we++,we%2===0&&Vt();let Fe=Ve-ae;if(Fe<yr){let Ct=Fe/yr,yt=1-(1-Ct)*(1-Ct),We=ws+(1-ws)*yt;ne.scale.setScalar(We),requestAnimationFrame(_e);return}let at=Fe-yr;if(at<to){let Ct=at/to,yt=Math.sin(Ct*Math.PI);ne.position.y=H.y+no*yt,requestAnimationFrame(_e);return}ne.scale.setScalar(1),ne.position.y=H.y,Vt()},oe=le.get(f.id);ne.rotation.y=b?.ownerPlayer!=null?k===1?Math.PI:0:oe!=null?oe.rotation.y:f.player===1?Math.PI:0,ne.scale.setScalar(ws);let H=Ie(L.x,L.y),ae=performance.now(),we=0;requestAnimationFrame(_e)}let re=$==="playing"&&rt.length>0&&ht>=0&&ht<rt.length?rt[ht]:null;if(rt=Ul(),re!=null){let oe=rt.indexOf(re);oe>=0&&(ht=oe)}return Ui(),typeof Rt=="function"&&Rt(),Vt(),L}function ya(f,c){let _=Ee.indexOf(c);if(_===-1)return null;Xe(c.id),Ee.splice(_,1),J=Math.max(0,J-1);let b=le.get(c.id);b&&(n.remove(b),le.delete(c.id));let P=c.class&&bi.includes(c.class)?c.class:"knight",I=c.hairColor!=null?c.hairColor:(Js[P]||Js.knight).hair,U=Ve=>Math.max(1,Math.floor((Ve||0)*6/7)),k=U(c.maxHp),L=U(c.maxMp),ne={name:"Reanimated "+c.name,class:P,hairColor:I,level:c.level,hp:U(c.maxHp),maxHp:k,mp:U(c.maxMp),maxMp:L,str:U(c.str),agi:U(c.agi),vit:U(c.vit),dex:U(c.dex),luk:U(c.luk),int:U(c.int),range:c.range},re=c.summonedSkills&&c.summonedSkills.length>0?c.summonedSkills.slice():(ha[P]||[]).slice(),oe=new Set(Ee.filter(Ve=>Ve.hp>0).map(Ve=>Ve.y*e.w+Ve.x)),H=c.x,ae=c.y,we=Ts(e,H,ae)&&!oe.has(ae*e.w+H),_e={useGrayscaleAppearance:!0,ownerPlayer:f.player,omitSummonedBy:!0};return we&&(_e.position={gx:H,gy:ae}),rp(f,ne,re,_e)}function ap(){document.getElementById("draft-panel").style.display="none";let f=document.getElementById("draft-placement-card");f&&(f.style.display="none",f.innerHTML=""),Fn();let c=document.getElementById("battle-start-overlay");c&&(c.classList.add("visible"),c.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");for(_&&(_.style.display="none",_.innerHTML=""),$="playing",w=0,rt=Ul(),ht=0;ht<rt.length;){let I=ze(rt[ht]);if(I&&I.hp>0)break;ht++}ht>=rt.length&&(ht=0);let b=ze(rt[ht]);G=b?b.player:1,xn=!1,ci=!1,An=rt[ht],setTimeout(()=>{c&&(c.classList.remove("visible"),c.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",Ui(),Rt(),Ll(),io(!0),W==="cvcpu"&&On()},4e3)}function Nl(){let f=document.getElementById("draft-panel"),c=document.getElementById("draft-title"),_=document.getElementById("draft-classes"),b=document.getElementById("draft-message"),P=document.getElementById("turn-player"),I=document.getElementById("draft-placement-card");if(ni){f.style.display="none",P.textContent=`Draft: ${Je(Xi())} \u2014 place ${Wn[ni].name}`;let ne=Xi();I.style.display="flex",I.classList.remove("player-1","player-2"),I.classList.add("player-"+ne),I.style.left=ne===1?"24px":"",I.style.right=ne===2?"24px":"";let re=[...Ee.filter(ae=>ae.player===ne).map(ae=>ae.class),ni],oe=(ae,we)=>{let _e=Wn[ae];return`
        <div class="draft-class-card${we?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${ca[ae]||""}" alt="${_e.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${_e.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${_e.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${_e.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${_e.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${_e.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${_e.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${_e.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${_e.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${_e.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${_e.range}</span>
            </div>
          </div>
        </div>
      `},H=3;if(re.length>H){I.classList.add("draft-placement-cols");let ae=[];for(let _e=0;_e<re.length;_e+=H)ae.push(re.slice(_e,_e+H));let we=re.length-1;I.innerHTML=ae.map((_e,Ve)=>{let Fe=Ve===ae.length-1,at=_e.map((Ct,yt)=>{let tt=Ve*H+yt===we;return oe(Ct,tt)}).join("");return`<div class="draft-placement-col${Fe?" draft-placement-col-current":""}">${at}</div>`}).join("")}else I.classList.remove("draft-placement-cols"),I.innerHTML=re.map((ae,we)=>{let _e=we===re.length-1;return oe(ae,_e)}).join("");W==="pvcpu"&&Xi()===2&&setTimeout(Ma,500),W==="cvcpu"&&setTimeout(Ma,500);return}I.style.display="none",I.innerHTML="",$==="draft"&&(f.style.display="flex");let U=document.getElementById("draft-detail");U&&(U.style.display="");let k=Xi();if(W!=="online"||k===Y){let Ve=function(){let Fe=Ii;if(!Fe||!Wn[Fe]){ne&&(ne.style.display=""),re&&(re.style.display="none"),oe&&(oe.style.display="none"),_e&&(_e.style.display="none");return}let at=Wn[Fe],Ct=ha[Fe]||[];ne&&(ne.style.display="none"),re&&(re.src=ca[Fe]||"",re.alt=at.name,re.style.display="block"),oe&&(oe.style.display="block"),H&&(H.textContent=at.name),ae&&(ae.innerHTML=[["HP",at.hp],["MP",at.mp],["STR",at.str],["AGI",at.agi],["VIT",at.vit],["DEX",at.dex],["LUK",at.luk],["INT",at.int],["Range",at.range]].map(([We,tt])=>`<span class="draft-stat-label">${We}</span><span class="draft-stat-value">${tt}</span>`).join("")),we&&(we.innerHTML=Ct.length?Ct.map(We=>`<div class="draft-detail-skill"><span class="draft-detail-skill-name">${We.name}</span><span class="draft-detail-skill-desc">${We.description||""}</span></div>`).join(""):'<div class="draft-detail-skill">No skills</div>'),_e&&(_e.style.display="block",_e.disabled=!xt.has(Fe),_e.onclick=()=>{let We=Ii;We&&xt.has(We)&&Bl(We)});let yt=Fe?_.querySelector(`button.draft-class-card[data-class-key="${Fe}"]`):null;Xn!==yt&&(Xn&&Xn.classList.remove("draft-class-card-selected"),Xn=yt,Xn&&Xn.classList.add("draft-class-card-selected"))};c.textContent=`${Je(k)}: Pick a class (${Wh()}/${Ci})`,b.textContent="",Xn=null,_.innerHTML="",P.textContent=`Draft: ${Je(k)} \u2014 pick a class`;let ne=document.getElementById("draft-detail-placeholder"),re=document.getElementById("draft-detail-image"),oe=document.getElementById("draft-detail-content"),H=document.getElementById("draft-detail-name"),ae=document.getElementById("draft-detail-stats"),we=document.getElementById("draft-detail-skills"),_e=document.getElementById("draft-select-btn");_r.forEach(Fe=>{let at=xt.has(Fe),Ct=Wn[Fe],yt=document.createElement("button");yt.type="button",yt.dataset.classKey=Fe,yt.className="draft-class-card"+(at?"":" draft-class-card-unavailable")+(Ii===Fe?" draft-class-card-selected":""),yt.disabled=!at,yt.innerHTML=`
          <img class="draft-class-card-image" src="${ca[Fe]||""}" alt="${Ct.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${Ct.name}</div>
          </div>
        `,at&&yt.addEventListener("click",()=>{Ii=Fe,Xn&&Xn!==yt&&Xn.classList.remove("draft-class-card-selected"),Xn=yt,yt.classList.add("draft-class-card-selected"),Ve()}),Ii===Fe&&(Xn=yt),_.appendChild(yt)}),Ve()}else{c.textContent=`${Je(k)} is picking a class`,b.textContent="",Xn=null,_.innerHTML="",P.textContent=`Draft: ${Je(k)} \u2014 pick a class`;let ne=document.getElementById("draft-detail-placeholder"),re=document.getElementById("draft-detail-image"),oe=document.getElementById("draft-detail-content"),H=document.getElementById("draft-select-btn");ne&&(ne.style.display=""),re&&(re.style.display="none"),oe&&(oe.style.display="none"),H&&(H.style.display="none")}W==="pvcpu"&&Xi()===2&&setTimeout(Ma,500),W==="cvcpu"&&setTimeout(Ma,500)}function Bl(f){if(!xt.has(f)||ni)return;ni=f;let c=Xi(),_=new Set(Ee.map(I=>I.y*e.w+I.x)),b=Ev(e,c,_),P=Bd(e,b);Ei=P,wn=new Set(P.map(I=>I.gy*e.w+I.gx)),wp(P),Nl(),W==="online"&&c===Y&&typeof hn=="function"&&hn({type:"draftPick",classKey:f})}function Ol(f,c){if(!ni)return;let _=Xi(),b=c*e.w+f;if(!wn.has(b))return;let P=Wn[ni],I={id:ye++,player:_,x:f,y:c,level:1,name:P.name,class:ni,hairColor:(Js[ni]||Js.knight).hair,hp:P.hp,maxHp:P.maxHp,mp:P.mp,maxMp:P.maxMp,str:P.str,agi:P.agi,vit:P.vit,dex:P.dex,luk:P.luk,int:P.int,range:P.range};Ee.push(I),Qe(I),E(I,null,null),$t(I);let U=le.get(I.id);U&&(U.rotation.y=I.player===1?Math.PI:0),xt.delete(ni),ni=null,wn.clear(),Ei=[],Fn(),W==="online"&&_===Y&&typeof hn=="function"&&hn({type:"draftPlace",gx:f,gy:c});let k=document.getElementById("draft-placement-card");if(k&&(k.style.display="none",k.innerHTML=""),Pi[_]++,cn++,cn>=2*Ci){ap();return}let L=Xi(),ne=Wh(),re=document.getElementById("draft-panel"),oe=document.getElementById("draft-title"),H=document.getElementById("draft-message"),ae=document.getElementById("draft-detail"),we=document.getElementById("draft-classes"),_e=document.getElementById("turn-player"),Ve=W!=="online"||L===Y;re&&oe&&we&&_e&&(re.style.display="flex",oe.textContent=Ve?`${Je(L)}: Pick a class (${ne}/${Ci})`:`${Je(L)} is picking a class`,H&&(H.textContent=Ve?"Get ready\u2026":""),Xn=null,we.innerHTML="",_e.textContent=`Draft: ${Je(L)} \u2014 pick a class`),ae&&(ae.style.display="none"),setTimeout(Nl,1500)}function Rt(){Rt._pending||(Rt._pending=!0,requestAnimationFrame(()=>{Rt._pending=!1,op()}))}function op(){let f=Rt._cache||(Rt._cache={}),c=f.turnEl||(f.turnEl=document.getElementById("turn-player")),_=f.menuLabel||(f.menuLabel=document.getElementById("menu-label")),b=f.turnMenu||(f.turnMenu=document.getElementById("turn-menu")),P=f.unitInfo||(f.unitInfo=document.getElementById("unit-info")),I=f.unitNameEl||(f.unitNameEl=document.getElementById("unit-name")),U=f.unitLevelClassEl||(f.unitLevelClassEl=document.getElementById("unit-level-class")),k=f.unitStatsEl||(f.unitStatsEl=document.getElementById("unit-stats")),L=f.unitClassImageEl||(f.unitClassImageEl=document.getElementById("unit-class-image"));if($==="playing"&&Ee.forEach(H=>{if(H.hp<=0)return;let ae=le.get(H.id);ae&&z(ae,H.maxHp>0&&H.hp/H.maxHp<Le)}),b.classList.remove("player-1","player-2"),b.classList.add(G===1?"player-1":"player-2"),b.classList.toggle("level-2",!1),b.classList.toggle("level-3",!1),$==="playing"&&rt.length>0){let H=rt[ht],ae=ze(H),we=ae&&ae.hp>0?ae:null;if(W==="online"&&we&&we.player!==Y)An=null;else if(we){let _e=An!=null?ze(An):null;(An==null||!_e||_e.hp<=0)&&(An=H)}}if(An!=null){let H=ze(An);if(H&&H.hp>0){P.classList.remove("no-unit");let ae=H.maxHp>0&&H.hp/H.maxHp<.25;b.classList.toggle("low-hp",ae),b.classList.toggle("level-2",H.level>=2&&H.level<3),b.classList.toggle("level-3",H.level>=3),I.textContent=H.name,U.textContent=`Lv.${H.level} ${H.class}`,L.src=ca[H.class]||"",L.alt=H.name;let we=[["HP",`${H.hp}/${H.maxHp}`,"stat-val-hp"],["MP",`${H.mp}/${H.maxMp}`,""],["STR",zi(H,"str"),""],["AGI",zi(H,"agi"),""],["VIT",zi(H,"vit"),""],["DEX",zi(H,"dex"),""],["LUK",zi(H,"luk"),""],["INT",zi(H,"int"),""]];H.tempDebuff&&H.tempDebuff.poison!=null&&we.push(["Poison",`${H.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),H.tempBuff&&H.tempBuff.heal!=null&&we.push(["Regen",`${H.tempBuff.heal} HP/turn`,"stat-val-buff"]),k.innerHTML=we.map(([_e,Ve,Fe])=>{let at=Fe?` ${Fe}`:"";return`<span>${_e}</span><span class="stat-val${at}">${Ve}</span>`}).join("")}else b.classList.remove("low-hp","level-2","level-3"),P.classList.add("no-unit"),I.textContent="\u2014 Select a unit \u2014",U.textContent="",k.textContent="",L.src="",L.alt=""}else b.classList.remove("low-hp","level-2","level-3"),P.classList.add("no-unit"),I.textContent="\u2014 Select a unit \u2014",U.textContent="",k.textContent="",L.src="",L.alt="";if(An!=null)c.textContent=`${Je(G)} \u2014 Unit ${I.innerHTML} active`;else{let H=rt.length?ze(rt[ht]):null;c.textContent=H?`${H.name} (${Je(G)})`:Je(G)}_.textContent=Je(G);let ne=f.btnAttack||(f.btnAttack=document.getElementById("btn-attack")),re=f.btnSkill||(f.btnSkill=document.getElementById("btn-skill")),oe=f.btnEnd||(f.btnEnd=document.getElementById("btn-end"));if(W==="cvcpu"&&$==="playing")ne.disabled=!0,re.disabled=!0,oe&&(oe.disabled=!0),c.textContent=`${Je(G)} (CPU)`;else if(Cs)ne.disabled=!0,re.disabled=!0,c.textContent="Click on map to choose facing direction";else if($==="playing"){ne.disabled=ci;let H=rt.length?rt[ht]:null,ae=H?ze(H):null,we=ae&&ae.hp>0?ae:null,_e=W!=="cvcpu"&&(W!=="pvcpu"||G===1)&&(W!=="online"||G===Y),Ve=_e&&we&&!ci?ql(we):[];re.disabled=ci||!_e||Ve.length===0,oe&&(oe.disabled=W==="online"&&G!==Y)}if($==="playing"){let H=Math.min(w+1,bs);c.textContent=(c.textContent||"")+` \u2014 Turn ${H}/${bs}`;let ae=f.turnsLeftEl||(f.turnsLeftEl=document.getElementById("turns-left")),we=f.turnsLeftValueEl||(f.turnsLeftValueEl=document.getElementById("turns-left-value"));if(ae&&we){ae.style.display="";let _e=Math.max(0,bs-w);we.textContent=String(_e),ae.classList.toggle("turns-left-low",_e<=10),(_e===30||_e===20||_e===10)&&(Se[_e]||(ot(_e),Se[_e]=!0))}}else{let H=f.turnsLeftEl||(f.turnsLeftEl=document.getElementById("turns-left"));H&&(H.style.display="none")}$==="playing"&&Xl(G)&&!gn?(Gi!=null&&clearTimeout(Gi),Gi=setTimeout(()=>{Gi=null,_n()},700)):Gi!=null&&(clearTimeout(Gi),Gi=null)}function en(){if(W==="online"&&G===Y&&typeof tr=="function"){let H=rt[ht],ae=le.get(H),we=ae?.rotation.y;tr({type:"endTurn",unitId:H,facingAngle:we})}Vt(),pa(),Qi=!1,Rs=!1,ii=null,Cs=!1,Li=[],ip(),Fn();let f=rt.length;if(f===0)return;let c=rt[ht],_=ze(c);if(_&&_.tempDebuff&&_.tempDebuff.duration--,_&&_.tempDebuff&&_.tempDebuff.duration<=0&&(_.tempDebuff=void 0),_&&_.tempBuff&&_.tempBuff.duration--,_&&_.tempBuff&&_.tempBuff.duration<=0&&(_.tempBuff=void 0),_&&_.hp>0){let H=Math.ceil(ve(_,"int")*.15);_.mp=Math.min(_.maxMp,_.mp+H)}if(_&&_.hp>0){let H=_.x,ae=_.y;e.type[ae][H]===it.CENTER&&_.level===1&&Ne(_);let we=_.player===1?it.BASE_TOP:it.BASE_BOTTOM;e.type[ae][H]===we&&_.level===2&&Ne(_)}if(w++,w>=bs){Bp();return}let b=ht,P=(b+1)%f,I=0;for(;I<f;){let H=rt[P],ae=ze(H);if(ae&&ae.hp>0)break;P=(P+1)%f,I++}let U=f>0&&P<=b;ht=P;let k=["poison"],L=rt[ht],ne=ze(L);for(let H=0;H<f&&!(!ne||ne.hp<=0);H++){let ae=ne.tempDebuff||{},we=k.find(Ve=>!isNaN(ae[Ve])),_e=ae[we]||0;if(_e<=0)break;if(console.log("[DEBUFF]",`${we}: ${_e} to ${ne.name}`),ne.hp=Math.max(0,ne.hp-_e),ri(ne.x,ne.y,String(_e),!1,we),Ht(ne),ne.hp<=0){Cn(ne),P=(ht+1)%f;let Ve=0;for(;Ve<f;){let Fe=rt[P],at=ze(Fe);if(at&&at.hp>0)break;P=(P+1)%f,Ve++}ht=P;continue}break}let re=rt[ht],oe=ze(re);if(oe&&oe.hp>0){let H=oe.tempBuff,ae=H&&H.heal!=null&&!isNaN(H.heal)?Number(H.heal):0;if(ae>0){let we=oe.hp;oe.hp=Math.min(oe.maxHp,oe.hp+ae);let _e=oe.hp-we;_e>0&&(console.log("[BUFF]",`heal: ${_e} to ${oe.name}`),ri(oe.x,oe.y,`+${_e}`,!1,"heal"),Ht(oe))}}G=oe&&oe.hp>0?oe.player:1,xn=!1,ci=!1,An=rt[ht],U&&(rt=Ul(),ht=0),Rt(),Ll(),io()}document.getElementById("btn-attack").addEventListener("click",()=>{if(gn||ci||$!=="playing"||rt.length===0)return;if(W==="online"){let P=rt[ht],I=ze(P);if(!I||I.player!==Y)return}pa();let f=rt[ht],c=ze(f);if(!c||c.hp<=0)return;let _=c.range!=null?c.range:1;An=f,Qi=!0;let b=Od(e,c.x,c.y,_);Rn=new Map,b.forEach((P,I)=>{let U=I%e.w,k=Math.floor(I/e.w);Ss(e,c.x,c.y,U,k)&&Rn.set(I,P)}),Ap(Rn),Rt()}),document.getElementById("btn-skill").addEventListener("click",f=>{if(f.preventDefault(),f.stopPropagation(),gn||ci)return;let c=rt[ht],_=c?ze(c):null,b=_&&_.hp>0?_:null;if(!b||b.player!==G||W==="online"&&b.player!==Y)return;let P=document.getElementById("skill-list-overlay"),I=document.getElementById("btn-skill");if(!I)return;if(P&&P.style.display==="block"){P.style.display="none";return}let U=ql(b),k=I.getBoundingClientRect();P||(P=document.createElement("div"),P.id="skill-list-overlay",P.className="skill-list-overlay",P.setAttribute("aria-hidden","true"),document.body.appendChild(P)),P.style.left=`${k.left}px`,P.style.top=`${k.top-4}px`,P.style.transform="translateY(-100%)",P.style.right="auto",P.style.bottom="auto",P.style.display="none",U.length===0?P.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(P.innerHTML=U.map((L,ne)=>`<button type="button" class="skill-option" data-skill-index="${ne}" ${L.disabled?"disabled":""}>
          <span class="skill-name">${L.name}</span> <span class="skill-meta">${L.cost} MP \xB7 Lv.${L.level}</span><br/>
          <span class="skill-meta">${L.description}</span>
        </button>`).join(""),P.querySelectorAll(".skill-option").forEach((L,ne)=>{L.addEventListener("click",re=>{re.preventDefault(),re.stopPropagation();let oe=U[ne];if(ii=oe,P.style.display="none",P.setAttribute("aria-hidden","true"),oe.target==="self"){if(b.mp<oe.cost)return;b.mp-=oe.cost,ci=!0;let H={showFloatingCombatText:ri,handleUnitDeath:Cn,updateUnitSlashVisibility:Ht,updateTurnUI:Rt,units:Ee,reanimateDeadUnit:ya};W==="online"&&b.player===Y&&typeof hn=="function"&&(hn({type:"requestRender"}),tr({type:"skill",unitId:b.id,targetId:b.id,effectKey:oe.effectKey})),uo(b,b,oe,H,()=>{Fn(),Rs=!1,ii=null,hs=new Set,b.hp<=0?Rt():xn&&b.hp>0?en():Rt()}),Rt();return}if(oe.target==="ally"&&fo(b,oe,Ee).filter(we=>we.targetUnit&&we.targetUnit.id!==b.id).length===0&&b.mp>=oe.cost){b.mp-=oe.cost,ci=!0;let we={showFloatingCombatText:ri,handleUnitDeath:Cn,updateUnitSlashVisibility:Ht,updateTurnUI:Rt,units:Ee,reanimateDeadUnit:ya};W==="online"&&b.player===Y&&typeof hn=="function"&&(hn({type:"requestRender"}),tr({type:"skill",unitId:b.id,targetId:b.id,effectKey:oe.effectKey})),uo(b,b,oe,we,()=>{Fn(),Rs=!1,ii=null,hs=new Set,b.hp<=0?Rt():xn&&b.hp>0?en():Rt()}),Rt();return}Rs=!0,Qi=!1,Tp(b,oe),Rt()})})),requestAnimationFrame(()=>{P.style.display="block",P.style.visibility="visible",P.setAttribute("aria-hidden","false")})}),document.addEventListener("click",f=>{let c=document.getElementById("skill-list-overlay"),_=document.getElementById("btn-skill"),b=document.querySelector(".skill-wrap");!c||c.style.display!=="block"||b&&b.contains(f.target)||c.contains(f.target)||(c.style.display="none",c.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(gn||Cs||$!=="playing"||rt.length===0)return;let f=rt[ht],c=ze(f);if(!c||c.hp<=0||W==="online"&&c.player!==Y)return;Cs=!0,An=null,Qi=!1,Rn=new Map,Fn(),np(),Ll();let _=document.getElementById("turn-player");_.textContent="Click on map to choose facing direction",Rt()}),h.set(0,8,0),a.position.copy(h).add(d),a.lookAt(h);let Mr=document.getElementById("mode-select-overlay"),Xh=document.getElementById("mode-carousel-track"),qh=document.getElementById("mode-carousel-prev"),Yh=document.getElementById("mode-carousel-next"),so=document.getElementById("mode-carousel-dots"),cs=document.getElementById("mode-play-btn"),$h=document.getElementById("mode-settings-pvp"),Kh=document.getElementById("mode-settings-pvp-map"),Zh=document.getElementById("mode-settings-pvp-num-units"),Jh=document.getElementById("mode-settings-pvp-none"),jh=document.getElementById("mode-settings-options"),ro=document.getElementById("pvp-map-mode"),xa=document.getElementById("pvp-num-units"),_a=document.getElementById("ai-draft-preference"),lp=document.getElementById("cvcpu-num-games"),ao=document.getElementById("cvcpu-num-units"),Qh=document.getElementById("cvcpu-grid-w"),eu=document.getElementById("cvcpu-grid-h"),tu=document.getElementById("cvcpu-center-plaza"),nu=document.getElementById("cvcpu-max-turns"),br=document.getElementById("move-speed"),Sr=document.getElementById("draft-picks-per-player"),js=document.getElementById("online-connect-overlay"),Ni=document.getElementById("online-player-name"),Qs=document.getElementById("online-create-section"),Er=document.getElementById("online-join-section"),Tr=document.getElementById("online-offer-text"),oo=document.getElementById("online-reply-text"),lo=document.getElementById("online-paste-offer"),va=document.getElementById("online-join-answer-section"),wr=document.getElementById("online-answer-text"),Fl=document.getElementById("online-error"),iu=document.getElementById("online-waiting-msg"),ts=Es?["pvp","pvcpu","cvcpu","online","story"]:["pvp","pvcpu","online","story"],kl=ts.length-1,kn=0;function Hl(){return kn===kl}function cp(){return ts[kn]==="online"}function co(f){kn=Math.max(0,Math.min(f,kl)),Xh&&(Xh.style.transform=`translateX(-${kn*100}%)`),so&&so.querySelectorAll(".mode-dot").forEach((_,b)=>{_.classList.toggle("active",b===kn),_.setAttribute("aria-selected",b===kn)}),$h&&($h.style.display=kn===0||kn===1||Hl()||ts[kn]==="online"?"":"none"),Kh&&(Kh.style.display=kn===0||kn===1||ts[kn]==="online"?"":"none"),Zh&&(Zh.style.display=ts[kn]==="pvp"?"":"none"),ts[kn]==="pvp"&&xa&&(xa.style.width="11em",xa.value=String(Math.max(1,Math.min(20,Ci)))),Jh&&(Jh.style.display=Hl()?"":"none"),jh&&(jh.style.display=Es&&ts[kn]==="cvcpu"?"":"none"),Es&&ts[kn]==="cvcpu"&&ao&&(ao.value=String(Math.max(1,Math.min(20,Ci))));let c=cs?.querySelector(".mode-play-text");cs&&c&&(Hl()?(cs.disabled=!0,c.textContent="Coming Soon"):(cs.disabled=!1,c.textContent=cp()?"Connect":"Play game"))}if(so)for(let f=0;f<=kl;f++){let c=document.createElement("button");c.type="button",c.className="mode-dot"+(f===0?" active":""),c.setAttribute("role","tab"),c.setAttribute("aria-label",`Mode ${f+1}`),c.setAttribute("aria-selected",f===0),c.addEventListener("click",()=>co(f)),so.appendChild(c)}if(qh&&qh.addEventListener("click",()=>co(kn-1)),Yh&&Yh.addEventListener("click",()=>co(kn+1)),Mr&&!Es){let f=Mr.querySelector('.mode-slide[data-mode="cvcpu"]');f&&f.parentNode&&f.parentNode.removeChild(f)}if(co(0),br&&(br.value=String(Zs),br.addEventListener("input",()=>{let f=parseInt(br.value,10);!Number.isNaN(f)&&f>=0&&(Zs=f)}),br.addEventListener("change",()=>{let f=parseInt(br.value,10);!Number.isNaN(f)&&f>=0&&(Zs=f)})),Sr&&(Sr.value=String(Ci),Sr.addEventListener("input",()=>{let f=parseInt(Sr.value,10);!Number.isNaN(f)&&f>=1&&(Ci=f)}),Sr.addEventListener("change",()=>{let f=parseInt(Sr.value,10);!Number.isNaN(f)&&f>=1&&(Ci=f)})),_a&&(mv.forEach(f=>{let c=document.createElement("option");c.value=f.value,c.textContent=f.label,_a.appendChild(c)}),_a.value=ln,_a.addEventListener("change",()=>{ln=_a.value})),js){let f=document.getElementById("online-btn-create"),c=document.getElementById("online-btn-join"),_=document.getElementById("online-btn-copy-offer"),b=document.getElementById("online-btn-connect"),P=document.getElementById("online-btn-join-connect"),I=document.getElementById("online-btn-copy-answer");f&&f.addEventListener("click",async()=>{let U=Ni&&Ni.value.trim()||"Player 1";if(!U){di("Enter your name");return}di("");try{vt=ro&&ro.value||"long",ct=(Date.now()^Math.random()*4294967295)>>>0,Tt(vt,ct);let k=await fp(U,ct,vt);Tr&&(Tr.value=k),Qs&&(Qs.style.display="flex",Qs.style.alignItems="flex-start"),Er&&(Er.style.display="none")}catch(k){di(k.message||"Failed to create game")}}),_&&Tr&&_.addEventListener("click",()=>{Tr.select(),document.execCommand("copy")}),b&&oo&&b.addEventListener("click",async()=>{let U=oo.value.trim();if(!U){di("Paste your friend's reply");return}di("");try{await pp(U)}catch(k){di(k.message||"Failed to connect")}}),c&&c.addEventListener("click",()=>{if(!(Ni&&Ni.value.trim()||"Player 2")){di("Enter your name");return}di(""),Qs&&(Qs.style.display="none"),Er&&(Er.style.display="flex")}),P&&lo&&P.addEventListener("click",async()=>{let U=lo.value.trim();if(!U){di("Paste the host's code");return}di("");try{Y=2,Ue[2]=Ni&&Ni.value.trim()||"Player 2";let k=await dp(Ue[2],U);wr&&(wr.value=k),va&&(va.style.display="flex",va.style.alignItems="flex-start")}catch(k){di(k.message||"Failed to join")}}),I&&wr&&I.addEventListener("click",()=>{wr.select(),document.execCommand("copy")})}let Is=new Audio;Is.loop=!0,Is.volume=.3,Is.preload="auto";let zl=window.location.href.replace(/[^/]*$/,""),su=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:zl+(zl.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Is.src=su,Is.addEventListener("error",()=>{let f=zl+"assets/music/tavern.mp3";f!==su&&(Is.src=f)});function hp(){Is.paused&&Is.play().catch(()=>{})}function di(f){Fl&&(Fl.textContent=f||"",Fl.style.display=f?"block":"none")}function ru(){js&&(js.style.display="none",js.setAttribute("aria-hidden","true"))}function up(){di(""),Y=1,Ue={1:"",2:""},js&&(js.style.display="flex",js.setAttribute("aria-hidden","false")),Ni&&(Ni.value=""),Qs&&(Qs.style.display="none"),Er&&(Er.style.display="none"),Tr&&(Tr.value=""),oo&&(oo.value=""),lo&&(lo.value=""),wr&&(wr.value=""),va&&(va.style.display="none"),iu&&(iu.style.display="block")}function au(f){return new Promise(c=>{if(f.iceGatheringState==="complete"){c();return}let _=()=>{f.iceGatheringState==="complete"&&(f.removeEventListener("icegatheringstatechange",_),c())};f.addEventListener("icegatheringstatechange",_)})}async function fp(f,c,_){Ye&&(Ye.close(),Ye=null,st=null);let b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),P=[];b.addEventListener("icecandidate",k=>{k.candidate&&P.push(k.candidate)});let I=b.createDataChannel("game-sync",{ordered:!0});st=I,Ye=b,I.addEventListener("open",()=>lu(I,!0));let U=await b.createOffer();return await b.setLocalDescription(U),await au(b),JSON.stringify({type:"offer",sdp:b.localDescription.sdp,candidates:P,playerName:f||"Player 1"})}async function dp(f,c){let _=JSON.parse(c),b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),P=[];if(b.addEventListener("icecandidate",U=>{U.candidate&&P.push(U.candidate)}),b.addEventListener("datachannel",U=>{st=U.channel,Ye=b,lu(st,!1)}),await b.setRemoteDescription(new RTCSessionDescription({type:"offer",sdp:_.sdp})),_.candidates&&_.candidates.length)for(let U of _.candidates)await b.addIceCandidate(new RTCIceCandidate(U));let I=await b.createAnswer();return await b.setLocalDescription(I),await au(b),JSON.stringify({type:"answer",sdp:b.localDescription.sdp,candidates:P,playerName:f||"Player 2"})}async function pp(f){let c=JSON.parse(f);if(!Ye){di("Create a game first, then paste your friend's reply.");return}let _=Ye.signalingState;if(_!=="stable"){if(_!=="have-local-offer"){di("Wrong step: create a game first and send the code, then paste the reply.");return}if(await Ye.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:c.sdp})),c.candidates&&c.candidates.length)for(let b of c.candidates)await Ye.addIceCandidate(new RTCIceCandidate(b))}}let ou=0,er=0,Vl=[],Gl=!1,ho=[];function Ar(){er=Math.max(0,er-1),er===0&&Wl()}function Wl(){for(;er===0&&Vl.length>0;){let f=Vl.shift();if(f.type==="move"){yp(f.unitId,f.toGx,f.toGy);return}if(f.type==="attack"){f.strikes&&Array.isArray(f.strikes)&&f.strikes.length>0?cu(f.unitId,f.targetId,void 0,void 0,f.strikes):cu(f.unitId,f.targetId,f.hit,f.damage);return}if(f.type==="skill"){xp(f);return}if(f.type==="endTurn"){if(f.unitId!=null&&f.facingAngle!=null){let c=le.get(f.unitId);c&&(c.rotation.y=f.facingAngle)}en();return}if(f.type==="unitDeath"){let c=ze(f.unitId),_=f.killerId!=null?ze(f.killerId):null;c&&(c.hp=0,Cn(c,_,{skipSync:!0})),Wl();return}}}function lu(f,c){if(f.binaryType="arraybuffer",f.addEventListener("message",I=>{try{let U=JSON.parse(I.data);if(U.seq!=null&&U.seq<=ou)return;U.seq!=null&&(ou=U.seq),mp(U,c)}catch(U){console.warn("Online message parse error",U)}}),f.addEventListener("close",()=>{W==="online"&&di("Connection lost.")}),!c){let I=Ue[2]||Ni&&Ni.value.trim()||"Player 2";hn({type:"joined",playerName:I});return}let _=Ni&&Ni.value.trim()||"Player 1",b=ct??(Date.now()^Math.random()*4294967295)>>>0,P=vt||"long";Ue[1]=_,hn({type:"start",mapSeed:b,mapMode:P,playerName:_}),ru(),ga()}function mp(f,c){if(f.type==="start"){Ue[1]=f.playerName||"Player 1",ct=f.mapSeed,vt=f.mapMode||"long",Tt(vt,ct),ru(),ga();return}if(f.type==="joined"){Ue[2]=f.playerName||"Player 2";return}if($==="draft"){f.type==="draftPick"?Bl(f.classKey):f.type==="draftPlace"&&Ol(f.gx,f.gy);return}$==="playing"&&(f.type==="move"||f.type==="attack"||f.type==="skill"||f.type==="endTurn"||f.type==="unitDeath"?(Vl.push(f),Wl()):f.type==="requestRender"&&Vt())}function hn(f){if(st&&st.readyState==="open"){let c=(typeof hn.seq<"u"?hn.seq:0)+1;hn.seq=c,st.send(JSON.stringify({...f,seq:c}))}}function tr(f){if(W==="online"&&Gl&&(f.type==="attack"||f.type==="skill"||f.type==="endTurn")){ho.push(f);return}hn(f)}function gp(){for(let f=0;f<ho.length;f++)hn(ho[f]);ho.length=0}function yp(f,c,_){let b=ze(f);!b||b.hp<=0||(er++,Gt(b,c,_,()=>{Vt(),Rt(),Ar()}))}function cu(f,c,_,b,P){let I=ze(f),U=ze(c);if(!I||!U||U.hp<=0)return;er++;let k=()=>{Vt(),Rt(),Ar()};P&&P.length>0?ba(I,U,void 0,void 0,k,P):ba(I,U,_,b,k)}function xp(f){let c=ze(f.unitId),_=f.targetId!=null?ze(f.targetId):null;if(c)if(er++,f.effectKey&&c.mp>=(ha[c.class]||[]).find(b=>b.effectKey===f.effectKey)?.cost){let b=(ha[c.class]||[]).find(P=>P.effectKey===f.effectKey);if(b){c.mp-=b.cost;let P={showFloatingCombatText:ri,handleUnitDeath:Cn,updateUnitSlashVisibility:Ht,updateTurnUI:Rt,tryCollectPowerup:et,world:e,units:Ee,reanimateDeadUnit:ya,updateUnitTileIndex:E,updateUnitPosition(k){let L=le.get(k.id);L&&L.position.copy(Ie(k.x,k.y))},animateKnockback(k,L,ne,re,oe,H){let ae=le.get(k.id);if(!ae){H&&H();return}let we=Ie(L,ne).clone(),_e=Ie(re,oe).clone(),Ve=performance.now(),Fe=0;function at(Ct){Fe++,Fe%2===0&&Vt();let yt=Math.min(1,(Ct-Ve)/Zs),We=tt=>tt*tt*(3-2*tt);ae.position.lerpVectors(we,_e,We(yt)),yt<1?requestAnimationFrame(at):(ae.position.copy(_e),H&&H())}requestAnimationFrame(at)}};eo(f.effectKey,c,_,P),_&&Ht(_);let U=b.target==="self"||b.target==="ally"?b.target==="self"?c:_:null;U?mt(U,()=>{Vt(),Rt(),Ar()}):(Vt(),setTimeout(()=>{Vt(),Rt(),Ar()},400))}else Vt(),setTimeout(()=>{Vt(),Rt(),Ar()},400)}else Vt(),setTimeout(()=>{Vt(),Rt(),Ar()},400)}function _p(){if(ts[kn]==="story")return;let f=ts[kn];if(hp(),W=f,f==="online"){Mr&&Mr.classList.add("hidden"),up();return}if(f==="pvp"||f==="pvcpu"){let c=ro&&ro.value||"long";Tt(c),f==="pvp"&&xa&&(Ci=Math.max(1,Math.min(20,parseInt(xa.value,10)||7)))}else f==="cvcpu"&&(Es&&Qh&&eu&&tu&&(Uh=Math.max(5,Math.min(50,parseInt(Qh.value,10)||21)),Nh=Math.max(5,Math.min(50,parseInt(eu.value,10)||11)),Bh=Math.max(.1,Math.min(.9,parseFloat(tu.value)||.29))),Es&&nu&&(bs=Math.max(10,Math.min(999,parseInt(nu.value,10)||200))),Tt("long"));f==="cvcpu"&&(Mt=Math.max(1,parseInt(lp?.value,10)||1),mn=0,ao&&(Ci=Math.max(1,Math.min(20,parseInt(ao.value,10)||7)))),Mr&&Mr.classList.add("hidden"),ga()}cs?cs.addEventListener("click",f=>{if(cs.disabled)return;let c=cs.querySelector(".mode-play-ripple");if(c){let _=cs.getBoundingClientRect();c.style.left=f.clientX-_.left+"px",c.style.top=f.clientY-_.top+"px",c.style.width=c.style.height="20px",c.style.marginLeft=c.style.marginTop="-10px",c.classList.remove("ripple"),c.offsetHeight,c.classList.add("ripple"),setTimeout(()=>c.classList.remove("ripple"),500)}_p()}):ga();function Xl(f){return W==="pvcpu"&&f===2||W==="cvcpu"}function vp(){let f=bi.filter(H=>xt.has(H));if(f.length===0)return null;let c=ln||"balanced";if(c==="random")return f[Math.floor(Math.random()*f.length)];if(c==="custom")return zd.filter(ae=>xt.has(ae))[0]??f[0]??null;function _(H,ae){let we=f[0],_e=H(we),Ve=ae(we);for(let Fe=1;Fe<f.length;Fe++){let at=f[Fe],Ct=H(at),yt=ae(at);(Ct>_e||Ct===_e&&yt>Ve)&&(we=at,_e=Ct,Ve=yt)}return we}if(c==="tanky")return _(H=>Wn[H]?.hp??0,H=>Wn[H]?.vit??0);if(c==="aggressive")return _(H=>Wn[H]?.str??0,H=>Wn[H]?.agi??0);if(c==="scout")return _(H=>Wn[H]?.agi??0,H=>Wn[H]?.dex??0);if(c==="ranged")return _(H=>Wn[H]?.range??0,H=>Wn[H]?.dex??0);if(c==="caster")return _(H=>Wn[H]?.int??0,H=>Wn[H]?.mp??0);let b=Xi(),I=yv(Ci),U={tank:0,melee:0,support:0,ranged:0,caster:0};for(let H=0;H<Ee.length;H++){let ae=Ee[H];if(ae.player!==b)continue;let we=Oh[ae.class];we&&U[we]++}let k=H=>Math.max(0,(I[H]??0)-(U[H]??0)),L=H=>{let ae=Oh[H],we=ae!=null?k(ae):0,_e=Wn[H]?.hp??0,Ve=-(Vd[H]??1/0);return{def:we,hp:_e,negVar:Ve}},ne=(H,ae)=>H.def!==ae.def?H.def>ae.def:H.hp!==ae.hp?H.hp>ae.hp:H.negVar>ae.negVar,re=f[0],oe=L(re);for(let H=1;H<f.length;H++){let ae=L(f[H]);ne(ae,oe)&&(re=f[H],oe=ae)}return re}function Ma(){if($!=="draft"||!Xl(Xi()))return;if(!ni){let c=vp();c&&Bl(c),setTimeout(Ma,500);return}let f=Ei.length>0?Ei:Bd(e,Array.from(wn,c=>({gx:c%e.w,gy:c/e.w|0})));if(f.length>0){let{gx:c,gy:_}=f[0];Ol(c,_)}}function hu(){if(e.centerTiles&&e.centerTiles.length>0)return e.centerTiles;let f=[];for(let c=0;c<e.h;c++)for(let _=0;_<e.w;_++)e.type[c][_]===it.CENTER&&f.push({gx:_,gy:c});return f}function Mp(f){let c=[],_=f===1?it.BASE_TOP:it.BASE_BOTTOM;for(let b=0;b<e.h;b++)for(let P=0;P<e.w;P++)e.type[b][P]===_&&c.push({gx:P,gy:b});return c}function yi(f,c,_,b){return Math.abs(f-_)+Math.abs(c-b)}function bp(f){let c=f.range!=null?f.range:1,_=[];for(let b of Ee){if(b.hp<=0||b.player===f.player)continue;let P=yi(f.x,f.y,b.x,b.y);P<=c&&P>0&&Ss(e,f.x,f.y,b.x,b.y)&&_.push({target:b,dist:P})}return _}function Sp(f,c,_){let b=_??Ee.filter(I=>I.hp>0&&I.player===f.player&&I.id!==f.id),P=c??Ee.filter(I=>I.hp>0&&I.player!==f.player);for(let I of b)for(let U of P){let k=U.range!=null?U.range:1,L=yi(U.x,U.y,I.x,I.y);if(L<=k&&L>0&&Ss(e,U.x,U.y,I.x,I.y))return!0}return!1}function Gt(f,c,_,b){let P=f.x,I=f.y,U=gr(e,f.x,f.y,c,_,Ee,f);if(!U||U.length<=1){b&&b();return}An=null,Fn(),gn=!0,g=!0,Ui(f.id),Vt();let k=le.get(f.id),L=1;function ne(){if(L>=U.length){let Ct=f.x,yt=f.y;f.x=U[U.length-1].x,f.y=U[U.length-1].y,E(f,Ct,yt),et(f),gn=!1,At(k),Ui(),Rn=new Map,xn=!0,W==="online"&&f.player===Y&&typeof hn=="function"&&hn({type:"move",unitId:f.id,toGx:f.x,toGy:f.y}),b&&b();return}let re=U[L-1],oe=U[L],H=Ie(re.x,re.y).clone(),ae=Ie(oe.x,oe.y).clone(),we=ae.x-H.x,_e=ae.z-H.z;we*we+_e*_e>1e-6&&(k.rotation.y=Math.atan2(we,_e));let Ve=performance.now(),Fe=0;function at(Ct){Fe++,Fe%2===0&&Vt();let yt=Math.min(1,(Ct-Ve)/Zs),tt=(bt=>bt*bt*(3-2*bt))(yt);if(k.position.lerpVectors(H,ae,tt),$e(k,tt),g){let bt=a.position.distanceTo(h),tn=bt<.1?o:bt;p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(d).normalize(),h.lerp(k.position,l),a.position.copy(h).add(p.clone().multiplyScalar(tn)),a.lookAt(h)}yt<1?requestAnimationFrame(at):(L++,ne())}requestAnimationFrame(at)}ne()}function uu(f,c){let _=ve(c,"agi")*.7+ve(c,"luk")*.3,P=Math.random()*Math.max(.001,_)<=ve(f,"dex"),I=0;if(P){let U=ve(f,"str")*.7+ve(f,"dex")*.2+ve(f,"int")*.1-(ve(c,"vit")*.3+ve(c,"luk")*.2);I=Math.max(1,Math.floor(U))}return{isHit:P,damage:I}}function ba(f,c,_,b,P,I){let U={units:Ee,showFloatingCombatText:ri,updateUnitSlashVisibility:Ht,handleUnitDeath:Cn};function k(We,tt){Gd(We,tt,U)}let L,ne;if(Array.isArray(I)&&I.length>0)ne=!0,L=I.map(We=>{let tt=We.isHit!==void 0?We.isHit:We.hit;return{isHit:!!tt,damage:tt&&We.damage!=null&&We.damage>0?We.damage:0}});else if(_!==void 0){ne=!0;let We=!!_,tt=We&&b!=null&&b>0?b:0;L=[{isHit:We,damage:tt}]}else ne=!1,W==="online"&&f.player===Y&&typeof hn=="function"&&hn({type:"requestRender"}),L=[uu(f,c)],f.tempBuff&&f.tempBuff.doubleAttack===!0&&c.hp>0&&L.push(uu(f,c));if(ci=!0,An=null,Qi=!1,Fn(),!ne&&W==="online"&&f.player===Y&&typeof tr=="function"){let We=L.map(tt=>({hit:tt.isHit,damage:tt.isHit?tt.damage:void 0}));tr({type:"attack",unitId:f.id,targetId:c.id,strikes:We,hit:L[0].isHit,damage:L[0].isHit?L[0].damage:void 0})}if(!ne){let We=c.hp;L.forEach((tt,bt)=>{let tn=tt.isHit?Math.max(0,We-tt.damage):We;console.log("[ATTACK]",`${f.name} (${f.class}, P${f.player})`,"\u2192",`${c.name} (${c.class}, P${c.player})`,`strike ${bt+1}/${L.length}:`,tt.isHit?`${tt.damage} dmg`:"MISS",`| ${c.name} HP ${We} \u2192 ${tn}/${c.maxHp}`),We=tn})}let re=le.get(f.id);function oe(){if(!ne){if(f.hp<=0){setTimeout(()=>Rt(),400);return}xn&&f.hp>0?en():setTimeout(()=>Rt(),400)}}function H(){si.shadowMap.enabled=!0,gn=!1,P&&setTimeout(()=>P(),0),oe()}if(!re||!re.userData.rightArm){let tt=function(){if(We>=L.length||c.hp<=0){setTimeout(()=>{gn=!1,P&&P(),ne||(f.hp<=0?Rt():xn&&f.hp>0?en():Rt())},400);return}let bt=L[We];We++,bt.isHit?(c.hp=Math.max(0,c.hp-bt.damage),ri(c.x,c.y,String(bt.damage),!1),Ht(c),k(c,bt.damage),c.hp<=0&&Cn(c,f)):ri(c.x,c.y,"MISS",!0),We<L.length&&c.hp>0&&f.hp>0?setTimeout(tt,400):setTimeout(()=>{gn=!1,P&&P(),ne||(f.hp<=0?Rt():xn&&f.hp>0?en():Rt())},400)};gn=!0;let We=0;tt();return}let ae=Ie(f.x,f.y).clone(),we=Ie(c.x,c.y).clone(),_e=ae.clone().lerp(we,.35),Ve=we.x-ae.x,Fe=we.z-ae.z;if(Ve*Ve+Fe*Fe>1e-6&&(re.rotation.y=Math.atan2(Ve,Fe)),(f.range!=null?f.range:1)>2){let un=function(vn){if(vn>=L.length||c.hp<=0||f.hp<=0){We&&(We.rotation.y=0),H();return}let Zt=L[vn].isHit,pt=L[vn].damage,Bt=new Ks(.035,.035,.4,6),nn=new Dn({color:16763972}),Oe=new Ke(Bt,nn);Oe.position.copy(ae),Oe.position.y+=.6;let zt=we.clone().sub(ae).normalize();Oe.quaternion.setFromUnitVectors(new F(0,1,0),zt),n.add(Oe);let Un=!1,sn=null,Wt=!1,fn=Oe.position.clone(),Hn=we.clone();Hn.y+=.6;let zn=performance.now(),xi=0;function je(_t){xi++,xi%2===0&&Vt();let dn=_t-zn,Kt=Math.min(1,dn/Jn);if(Oe.position.lerpVectors(fn,Hn,Kt),We){let Xt=Math.sin(Kt*Math.PI)*1.1;We.rotation.y=-Xt}if(!Un&&Kt>=1&&(Un=!0,n.remove(Oe),Bt.dispose(),nn.dispose(),Zt?(c.hp=Math.max(0,c.hp-pt),ri(c.x,c.y,String(pt),!1),k(c,pt),c.hp<=0&&(Wt=!0),le.get(c.id)?sn=_t:Wt&&(Cn(c,f),Wt=!1),Ht(c)):ri(c.x,c.y,"MISS",!0)),sn!=null&&Zt){let Xt=le.get(c.id);if(Xt){let rn=Math.min(1,(_t-sn)/Tn),he=1-rn;Us.copy(bt).multiplyScalar(tn*he),Xt.position.copy(tt).add(Us),rn>=1&&(Xt.position.copy(tt),sn=null,Wt&&(Cn(c,f),Wt=!1))}else sn=null,Wt&&(Cn(c,f),Wt=!1)}if(Kt<1)requestAnimationFrame(je);else{We&&(We.rotation.y=0);let Xt=sn==null;Xt&&Wt&&(Cn(c,f),Wt=!1),Xt?vn+1<L.length&&c.hp>0&&f.hp>0?un(vn+1):H():requestAnimationFrame(je)}}requestAnimationFrame(je)},We=re.userData.rightArm,tt=Ie(c.x,c.y).clone(),bt=we.clone().sub(ae).normalize(),tn=.4;gn=!0,si.shadowMap.enabled=!1,un(0);return}function yt(We){if(We>=L.length||c.hp<=0||f.hp<=0){re.position.copy(ae),re.userData.rightArm&&(re.userData.rightArm.rotation.y=0),H();return}let tt=L[We].isHit,bt=L[We].damage,tn=!1,un=performance.now(),vn=re.userData.rightArm,Zt=null,pt=!1,Bt=Ie(c.x,c.y).clone(),nn=we.clone().sub(ae).normalize(),Oe=.4,zt=0;function Un(sn){zt++,zt%2===0&&Vt();let Wt=sn-un,fn=Math.min(1,Wt/jt),Hn=fn<=.4?fn/.4:1,zn=fn>.4?(fn-.4)/.6:0;fn<=.4?re.position.lerpVectors(ae,_e,Hn):re.position.lerpVectors(_e,ae,zn);let xi=fn<=.35?fn/.35:fn<=.7?(.7-fn)/.35:0;if(vn.rotation.y=-xi*1.1,!tn&&fn>=Qt&&(tn=!0,tt?(c.hp=Math.max(0,c.hp-bt),ri(c.x,c.y,String(bt),!1),k(c,bt),c.hp<=0&&(pt=!0),Ht(c),le.get(c.id)?Zt=sn:pt&&(Cn(c,f),pt=!1)):ri(c.x,c.y,"MISS",!0)),Zt!=null&&tt){let je=le.get(c.id);if(je){let _t=Math.min(1,(sn-Zt)/Tn),dn=1-_t;Us.copy(nn).multiplyScalar(Oe*dn),je.position.copy(Bt).add(Us),_t>=1&&(je.position.copy(Bt),Zt=null,pt&&(Cn(c,f),pt=!1))}else Zt=null,pt&&(Cn(c,f),pt=!1)}if(fn<1)requestAnimationFrame(Un);else{re.position.copy(ae),vn.rotation.y=0;let je=Zt==null;je&&pt&&(Cn(c,f),pt=!1),je?We+1<L.length&&c.hp>0&&f.hp>0?yt(We+1):H():requestAnimationFrame(Un)}}requestAnimationFrame(Un)}gn=!0,si.shadowMap.enabled=!1,yt(0)}function Ep(f,c){let _=Ie(f,c);_.y+=.4;let b=new os(.1,12,12),P=new Dn({color:8930559,transparent:!0,opacity:.9}),I=new Ke(b,P);I.position.copy(_),n.add(I);let U=performance.now(),k=0;function L(ne){k++,k%2===0&&Vt();let re=ne-U,oe=Math.min(1,re/an),H=oe*(2-oe);I.scale.setScalar(H*7.5),P.opacity=.9*(1-oe),oe<1?requestAnimationFrame(L):(n.remove(I),b.dispose(),P.dispose())}requestAnimationFrame(L)}function uo(f,c,_,b,P){if(_.target==="enemy"&&c==null){setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}let U=(_.range??0)>2&&c!=null&&(c.x!==f.x||c.y!==f.y),k=!U&&c!=null&&(c.x!==f.x||c.y!==f.y);if(!U&&!k){gn=!0,eo(_.effectKey,f,c,b);let Bt=_.target==="self"||_.target==="ally",nn=_.target==="self"?f:c;Bt&&nn?mt(nn,()=>{setTimeout(()=>{gn=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)}):setTimeout(()=>{gn=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}if(k){let rn=function(he){Xt++,Xt%2===0&&Vt();let Me=he-Kt,me=Math.min(1,Me/jt),pe=me<=.4?me/.4:1,ge=me>.4?(me-.4)/.6:0;me<=.4?Bt.position.lerpVectors(nn,zt,pe):Bt.position.lerpVectors(zt,nn,ge);let Re=me<=.35?me/.35:me<=.7?(.7-me)/.35:0;if(zn.rotation.y=-Re*1.1,!xi&&me>=Qt&&(xi=!0,eo(_.effectKey,f,c,dn),c.hp<=0&&(_t=!0),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(c),le.get(c.id)&&_.target!=="ally"?je=he:_t&&(Cn(c,f),_t=!1)),je!=null){let ue=le.get(c.id);if(ue){let be=Math.min(1,(he-je)/Tn),Ot=1-be;Us.copy(fn).multiplyScalar(Hn*Ot),ue.position.copy(Wt).add(Us),be>=1&&(ue.position.copy(Wt),je=null,_t&&(Cn(c,f),_t=!1))}else je=null,_t&&(Cn(c,f),_t=!1)}me<1?requestAnimationFrame(rn):(Bt.position.copy(nn),zn.rotation.y=0,je==null&&_t&&(Cn(c,f),_t=!1),je==null?(si.shadowMap.enabled=!0,gn=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)):requestAnimationFrame(rn))},Bt=le.get(f.id);if(!Bt||!Bt.userData.rightArm){gn=!0,eo(_.effectKey,f,c,b),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(c),setTimeout(()=>{gn=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}gn=!0;let nn=Ie(f.x,f.y).clone(),Oe=Ie(c.x,c.y).clone(),zt=nn.clone().lerp(Oe,.35),Un=Oe.x-nn.x,sn=Oe.z-nn.z;Un*Un+sn*sn>1e-6&&(Bt.rotation.y=Math.atan2(Un,sn));let Wt=Ie(c.x,c.y).clone(),fn=Oe.clone().sub(nn).normalize(),Hn=.4,zn=Bt.userData.rightArm,xi=!1,je=null,_t=!1,dn={...b,handleUnitDeath:void 0,vodooMirrorDeath:Cn},Kt=performance.now(),Xt=0;si.shadowMap.enabled=!1,requestAnimationFrame(rn);return}let L=Ie(f.x,f.y).clone(),ne=Ie(c.x,c.y).clone(),re=new Ks(.035,.035,.4,6),oe=new Dn({color:16763972}),H=new Ke(re,oe);H.position.copy(L),H.position.y+=.6;let ae=ne.clone().sub(L).normalize();H.quaternion.setFromUnitVectors(new F(0,1,0),ae),n.add(H),gn=!0;let we=le.get(f.id),_e=we&&we.userData.rightArm?we.userData.rightArm:null;if(we){let Bt=ne.x-L.x,nn=ne.z-L.z;Bt*Bt+nn*nn>1e-6&&(we.rotation.y=Math.atan2(Bt,nn))}let Ve=H.position.clone(),Fe=ne.clone();Fe.y+=.6;let at=performance.now(),Ct=Ie(c.x,c.y).clone(),yt=ne.clone().sub(L).normalize(),We=.4,tt=!1,bt=null,tn=0,un=null,vn=_.effectKey==="powerShot"?{...b,animateKnockback(Bt,nn,Oe,zt,Un,sn){un={targ:Bt,fromGx:nn,fromGy:Oe,toGx:zt,toGy:Un,knockbackOnDone:sn}}}:b;function Zt(){si.shadowMap.enabled=!0,gn=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)}function pt(Bt){tn++,tn%2===0&&Vt();let nn=Bt-at,Oe=Math.min(1,nn/Jn);if(H.position.lerpVectors(Ve,Fe,Oe),_e){let zt=Math.sin(Oe*Math.PI)*1.1;_e.rotation.y=-zt}if(!tt&&Oe>=1&&(tt=!0,n.remove(H),re.dispose(),oe.dispose(),_.type==="spell"&&Ep(c.x,c.y),eo(_.effectKey,f,c,vn),le.get(c.id)&&c.hp>0&&(bt=Bt),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(c)),bt!=null){let zt=le.get(c.id);if(zt){let Un=Math.min(1,(Bt-bt)/Tn),sn=1-Un;if(Us.copy(yt).multiplyScalar(We*sn),zt.position.copy(Ct).add(Us),Un>=1&&(zt.position.copy(Ct),bt=null,un)){let{targ:Wt,fromGx:fn,fromGy:Hn,toGx:zn,toGy:xi,knockbackOnDone:je}=un;un=null,b.animateKnockback?b.animateKnockback(Wt,fn,Hn,zn,xi,()=>{je&&je(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(Wt),Zt()}):Zt();return}}else if(bt=null,un){un=null,Zt();return}}if(Oe<1)requestAnimationFrame(pt);else if(_e&&(_e.rotation.y=0),bt==null)if(un){let{targ:zt,fromGx:Un,fromGy:sn,toGx:Wt,toGy:fn,knockbackOnDone:Hn}=un;un=null,b.animateKnockback?b.animateKnockback(zt,Un,sn,Wt,fn,()=>{Hn&&Hn(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(zt),Zt()}):Zt()}else Zt();else requestAnimationFrame(pt)}si.shadowMap.enabled=!1,requestAnimationFrame(pt)}function _n(){if($!=="playing"||!Xl(G)||gn||rt.length===0)return;let f=rt[ht],c=ze(f);if(!c||c.hp<=0){en();return}let _=Math.max(Wd,ve(c,"agi")),b=Cl(e,c.x,c.y,_,Ee,c),P=new Set(Ee.filter(he=>he.hp>0&&he.id!==c.id).map(he=>he.y*e.w+he.x)),I=[];b.forEach((he,Me)=>{he!==0&&(P.has(Me)||I.push({gx:Me%e.w,gy:Math.floor(Me/e.w),dist:he}))});let U=bp(c),k=hu(),L=Mp(c.player),ne=.25,re=.03,oe=c.maxHp>0&&c.hp/c.maxHp<ne,H=c.maxHp>0&&c.hp/c.maxHp<re,ae=c.level===2,we=k.filter(he=>!P.has(he.gy*e.w+he.gx)),_e=L.filter(he=>!P.has(he.gy*e.w+he.gx)),Ve=new Set(k.map(he=>he.gy*e.w+he.gx)),Fe=we.length>0?we:k,at=_e.length>0?_e:L,Ct=Fe.length>0?fn(Fe):null,yt=at.length>0?fn(at):null,We=ql(c),tt=c.tempBuff&&c.tempBuff.doubleAttack===!0,bt=tt?[]:We.filter(he=>!he.disabled&&c.mp>=he.cost&&he.target==="enemy"),tn=bt.length>0?Math.max(...bt.map(he=>he.range||0)):0,un=Math.max(c.range!=null?c.range:1,tn),vn=c.level>=2&&un>=2,Zt=tt?!1:vn,pt=Ee.filter(he=>he.hp>0&&he.player!==c.player),Bt=Ee.filter(he=>he.hp>0&&he.player===c.player&&he.id!==c.id);function nn(he,Me){if(Me.length===0)return null;let me=null,pe=1/0;for(let ge of he){let Re=0;for(let ue of Me)Re+=yi(ge.gx,ge.gy,ue.gx,ue.gy);Re<pe&&(pe=Re,me=ge)}return me}function Oe(he,Me){if(Me.length===0||he.length===0)return null;let me=null,pe=1/0;for(let ge of he){let Re=1/0;for(let ue=0;ue<Me.length;ue++){let be=Me[ue],Ot=yi(ge.gx,ge.gy,be.gx,be.gy);Ot<Re&&(Re=Ot)}Re<pe&&(pe=Re,me=ge)}return me}function zt(he,Me){let me=un,pe=[];for(let ge=0;ge<pt.length;ge++){let Re=pt[ge],ue=yi(he,Me,Re.x,Re.y);ue<=me&&ue>0&&Ss(e,he,Me,Re.x,Re.y)&&pe.push({target:Re,dist:ue})}return pe}let Un=new Set(I.map(he=>he.gy*e.w+he.gx));function sn(he,Me){if(!he||he.length<=1)return null;let me=Math.min(Me,he.length-1);for(let pe=me;pe>=1;pe--){let ge=he[pe],Re=ge.y*e.w+ge.x;if(Un.has(Re))return{gx:ge.x,gy:ge.y}}return null}function Wt(he,Me){if(!he||he.length<=1)return null;let me=Math.min(Me,he.length-1);for(let pe=me;pe>=1;pe--){let ge=he[pe];if(!P.has(ge.y*e.w+ge.x))return{gx:ge.x,gy:ge.y}}return null}function fn(he){let Me=Rv(e,c.x,c.y,he,Ee,c);return!Me||Me.path.length<=1?null:Me}function Hn(he){let Me=he??I;if(Me.length===0)return null;if(pt.length===0)return Me[0];let me=null,pe=-1;for(let ge of Me){let Re=1/0;for(let ue=0;ue<pt.length;ue++){let be=pt[ue],Ot=yi(ge.gx,ge.gy,be.x,be.y);Ot<Re&&(Re=Ot)}Re>pe&&(pe=Re,me=ge)}return me}function zn(he){let Me=he??I;if(Me.length===0)return null;if(pt.length===0)return Me[0];let me=c.maxHp>0&&c.hp/c.maxHp>=.6,pe=null,ge=-1/0;for(let Re of Me){let ue=1/0;for(let It=0;It<pt.length;It++){let Yt=yi(Re.gx,Re.gy,pt[It].x,pt[It].y);Yt<ue&&(ue=Yt)}let be=999;if(Bt.length>0){be=1/0;for(let It=0;It<Bt.length;It++){let Yt=yi(Re.gx,Re.gy,Bt[It].x,Bt[It].y);Yt<be&&(be=Yt)}}let Ot;me?Ot=be<ue?ue-1e3:ue:Ot=ue-be,Ot>ge&&(ge=Ot,pe=Re)}return pe}function xi(){let he=un;if(pt.length===0)return null;let Me=null,me=-1;for(let pe of I){let ge=1/0;for(let ue=0;ue<pt.length;ue++){let be=yi(pe.gx,pe.gy,pt[ue].x,pt[ue].y);be<ge&&(ge=be)}let Re=!1;for(let ue=0;ue<pt.length;ue++){let be=pt[ue],Ot=yi(pe.gx,pe.gy,be.x,be.y);if(!(Ot<=0||Ot>he)&&Ss(e,pe.gx,pe.gy,be.x,be.y)){Re=!0;break}}Re&&ge>me&&(me=ge,Me=pe)}return Me}function je(he){if(ci||pt.length===0||xn||I.length===0)return!1;let Me=new Set;for(let ue=0;ue<Ee.length;ue++){let be=Ee[ue];be.hp>0&&Me.add(be.y*e.w+be.x)}function me(ue,be){let Ot=null,It=he;for(let Yt=-It;Yt<=It;Yt++)for(let St=-It;St<=It;St++){if(St===0&&Yt===0||Math.abs(St)+Math.abs(Yt)>It)continue;let yn=ue.x+St,qn=ue.y+Yt;if(yn<0||yn>=e.w||qn<0||qn>=e.h||!Ts(e,yn,qn)||!Ss(e,yn,qn,ue.x,ue.y)||Me.has(qn*e.w+yn))continue;let Et=gr(e,c.x,c.y,yn,qn,Ee,c),Ft=Et?Et.length-1:1/0;Et&&Et.length>1&&(!be||Ft<=_)&&(!Ot||Et.length<Ot.length)&&(Ot=Et)}return Ot}let pe=[];for(let ue of pt){let be=me(ue,!0);be&&pe.push({enemy:ue,path:be})}if(pe.length>0){let ue=pe.filter(Yt=>Yt.enemy.maxHp>0&&Yt.enemy.hp/Yt.enemy.maxHp<ne),be=ue.length>0?ue:pe;ue.length>0?be.sort((Yt,St)=>Yt.enemy.hp-St.enemy.hp||Yt.path.length-St.path.length):be.sort((Yt,St)=>Yt.path.length-St.path.length||Yt.enemy.hp-St.enemy.hp);let Ot=be[0],It=sn(Ot.path,_);if(It&&(It.gx!==c.x||It.gy!==c.y))return Gt(c,It.gx,It.gy,()=>setTimeout(_n,600)),!0}let ge=null,Re=1/0;for(let ue of pt){let be=me(ue,!1);be&&be.length<Re&&(Re=be.length,ge=be)}if(ge){let ue=sn(ge,_);if(ue&&(ue.gx!==c.x||ue.gy!==c.y))return Gt(c,ue.gx,ue.gy,()=>setTimeout(_n,600)),!0}return!1}let _t=new Map,dn=[];for(let he of I){let Me=he.gy*e.w+he.gx;dn.length=0;for(let me=0;me<pt.length;me++){let pe=pt[me],ge=yi(he.gx,he.gy,pe.x,pe.y);ge<=un&&ge>0&&Ss(e,he.gx,he.gy,pe.x,pe.y)&&dn.push({target:pe,dist:ge})}_t.set(Me,dn.length>0?dn.slice():[])}let Kt=U.some(he=>he.target.maxHp>0&&he.target.hp/he.target.maxHp<ne),Xt=Kt||I.some(he=>(_t.get(he.gy*e.w+he.gx)||[]).some(me=>me.target.maxHp>0&&me.target.hp/me.target.maxHp<ne));if(ci){if(xn){en();return}if(Zt&&pt.length>0&&ce.size>0&&I.length>0){let ge=[];ce.forEach((ue,be)=>{ge.push({gx:be%e.w,gy:Math.floor(be/e.w)})});let Re=fn(ge);if(Re){let ue=Wt(Re.path,_);if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>en());return}let be=Oe(I,ge);if(be&&(be.gx!==c.x||be.gy!==c.y)){Gt(c,be.gx,be.gy,()=>en());return}}}if(bs-w<=20&&k.length>0){let ge=k.some(Re=>Re.gx===c.x&&Re.gy===c.y);if(ge&&I.length>0){let ue=I.filter(be=>Ve.has(be.gy*e.w+be.gx)).filter(be=>be.gx!==c.x||be.gy!==c.y);if(ue.length>0){let be=Hn(ue);if(be&&(be.gx!==c.x||be.gy!==c.y)){Gt(c,be.gx,be.gy,()=>en());return}}en();return}if(ge){en();return}if(I.length>0){let Re=Ct,ue=Re?Wt(Re.path,_):null;if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>en());return}let be=Oe(I,Fe);if(be&&(be.gx!==c.x||be.gy!==c.y)){Gt(c,be.gx,be.gy,()=>en());return}}en();return}if(!oe&&I.length>0){if(ae&&L.length>0&&!L.some(Re=>Re.gx===c.x&&Re.gy===c.y)){let Re=yt,ue=Re?Wt(Re.path,_):null;if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>en());return}let be=Oe(I,at);if(be&&(be.gx!==c.x||be.gy!==c.y)){Gt(c,be.gx,be.gy,()=>en());return}}if(k.length>0&&!k.some(Re=>Re.gx===c.x&&Re.gy===c.y)){let Re=Ct,ue=Re?Wt(Re.path,_):null;if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>en());return}let be=Oe(I,Fe);if(be&&(be.gx!==c.x||be.gy!==c.y)){Gt(c,be.gx,be.gy,()=>en());return}}}let Me=k.length>0?I.filter(ge=>Ve.has(ge.gy*e.w+ge.gx)):null,me=Me!=null&&Me.length>0?Me:I,pe=null;if(me.length>0&&Bt.length>0&&(pe=zn(me),pe)){let ge=gr(e,c.x,c.y,pe.gx,pe.gy,Ee,c),Re=ge?ge.length-1:1/0;(!ge||ge.length<=1||Re>_)&&(pe=Hn(me))}if(!pe&&me.length>0&&(pe=Hn(me)),pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>en());return}en();return}if(H&&bs-w>20&&!xn&&I.length>0){let he=null,Me=1/0;for(let pe of I){let Re=(_t.get(pe.gy*e.w+pe.gx)||[]).filter(ue=>ue.target.maxHp>0&&ue.target.hp/ue.target.maxHp<ne);if(Re.length>0){let ue=Math.min(...Re.map(be=>be.target.hp));ue<Me&&(Me=ue,he=pe)}}if(he){let pe=gr(e,c.x,c.y,he.gx,he.gy,Ee,c),ge=pe?sn(pe,_):null;if(ge&&(ge.gx!==c.x||ge.gy!==c.y)){Gt(c,ge.gx,ge.gy,()=>setTimeout(_n,600));return}}let me=Hn();if(me&&(me.gx!==c.x||me.gy!==c.y)){Gt(c,me.gx,me.gy,()=>setTimeout(_n,600));return}en();return}if(!ci&&!tt){let It=function(Et){return fo(c,Et,Ee).filter(kt=>kt.targetUnit!=null).map(kt=>kt.targetUnit)},he=We,Me=c.maxHp>0?c.hp/c.maxHp:1,me=.35,pe=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct","bloodSuck","gnaw","malediction","skewer"]),ge=new Set(["chakra","sacrifice"]),Re=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify","warCry","foresight","overheal","rapid","vodoo"]),ue=new Set(["impale","poison","gaze","debilitate","bash","infect"]),be=new Set(["dominate","manaDrain","weaken","cripple","hex","blind","raid"]),Ot=new Set(["reanimate"]),Yt={showFloatingCombatText:ri,handleUnitDeath:Cn,updateUnitSlashVisibility:Ht,updateTurnUI:Rt,tryCollectPowerup:et,world:e,units:Ee,reanimateDeadUnit:ya,updateUnitTileIndex:E,updateUnitPosition(Et){let Ft=le.get(Et.id);Ft&&Ft.position.copy(Ie(Et.x,Et.y))},animateKnockback(Et,Ft,kt,Sn,Pn,Jt){let Nn=le.get(Et.id);if(!Nn){Jt&&Jt();return}let is=Ie(Ft,kt).clone(),nr=Ie(Sn,Pn).clone(),Jl=performance.now(),Mu=0;function bu(Op){Mu++,Mu%2===0&&Vt();let Su=Math.min(1,(Op-Jl)/Zs),Fp=jl=>jl*jl*(3-2*jl);Nn.position.lerpVectors(is,nr,Fp(Su)),Su<1?requestAnimationFrame(bu):(Nn.position.copy(nr),Jt&&Jt())}requestAnimationFrame(bu)}},St=null,yn=null,qn=Kt||!xn&&Xt;if(!qn){for(let Ft of he)if(!(Ft.disabled||c.mp<Ft.cost)&&ge.has(Ft.effectKey)){let Sn=fo(c,Ft,Ee).filter(Pn=>Pn.targetUnit&&Pn.targetUnit.maxHp>0&&Pn.targetUnit.hp/Pn.targetUnit.maxHp<.5);if(Sn.length>0){let Pn=Sn.sort((Jt,Nn)=>Jt.targetUnit.hp-Nn.targetUnit.hp)[0].targetUnit;St=Ft,yn=Pn;break}}}if(!St&&!qn){let Et=Ee.filter(Ft=>Ft.hp<=0);for(let Ft of he)if(!(Ft.disabled||c.mp<Ft.cost)&&!(Ft.effectKey==="reanimate"&&!Et.length)&&Ot.has(Ft.effectKey)){St=Ft,yn=c;break}}if(!St&&!qn&&(U.length>0||I.some(Ft=>(_t.get(Ft.gy*e.w+Ft.gx)||[]).length>0))){let Ft=he.filter(kt=>!kt.disabled&&Re.has(kt.effectKey)).sort((kt,Sn)=>(Sn.level||1)-(kt.level||1));for(let kt of Ft){let Sn=c.tempBuff&&c.tempBuff.duration>0;if(kt.target==="self"){if(kt.effectKey==="bloodlust"&&c.hp/c.maxHp>.8)continue;if(!Sn){St=kt,yn=c;break}}if(kt.target==="ally"){if(kt.effectKey==="overheal"&&c.hp/c.maxHp>.7)continue;let Jt=fo(c,kt,Ee).filter(Nn=>Nn.targetUnit!=null).map(Nn=>Nn.targetUnit);if(Jt.length>0){let Nn=Jt.filter(nr=>!nr.tempBuff||nr.tempBuff.duration<=0),is=(Nn.length>0?Nn:Jt).sort((nr,Jl)=>nr.hp-Jl.hp)[0];if(is.tempBuff&&is.tempBuff.duration>0||kt.effectKey==="overheal"&&is.hp/is.maxHp>.7)continue;St=kt,yn=is;break}}if(kt.target==="enemy"){let Pn=It(kt);if(kt.effectKey==="vodoo"&&c.tempBuff&&c.tempBuff.vodoo&&(Pn=Pn.filter(Jt=>Jt.id!==c.tempBuff.vodoo)),Pn.length>0){St=kt,yn=Pn.sort((Jt,Nn)=>Jt.hp-Nn.hp)[0];break}}}}if(!St){for(let Et of he)if(!(Et.disabled||c.mp<Et.cost)&&pe.has(Et.effectKey)){if(Et.effectKey==="feast"&&c.hp/c.maxHp>.7||Et.effectKey==="warCry"&&c.hp/c.maxHp<.3||Et.effectKey==="berserk"&&c.hp/c.maxHp<.25||Et.effectKey==="shuriken"&&U.length>0||Et.effectKey==="judgement"&&c.hp/c.maxHp>.7)continue;let Ft=It(Et);if(Ft.length===0)continue;let kt=Ft.filter(Jt=>Jt.maxHp>0&&Jt.hp/Jt.maxHp<me),Sn=kt.length>0?kt:Ft,Pn=Et.type==="spell"?Sn.reduce((Jt,Nn)=>{if(!Jt)return Nn;let is=ve(Nn,"int")-ve(Jt,"int");return is<0||is===0&&Nn.hp<Jt.hp?Nn:Jt},null):Sn.reduce((Jt,Nn)=>!Jt||Nn.hp<Jt.hp?Nn:Jt,null);St=Et,yn=Pn;break}}if(!St&&!qn){for(let Et of he)if(!(Et.disabled||c.mp<Et.cost)&&be.has(Et.effectKey)){let Ft=It(Et);if(Ft.length===0)continue;let kt=Ft.reduce((Sn,Pn)=>!Sn||Pn.hp<Sn.hp?Pn:Sn,null);if(!kt)continue;St=Et,yn=kt;break}}if(!St&&!qn){for(let Et of he)if(!(Et.disabled||c.mp<Et.cost)&&ue.has(Et.effectKey)){let kt=It(Et).filter(Sn=>!Sn.tempDebuff||Sn.tempDebuff.duration<=0);if(kt.length>0){let Sn=kt.reduce((Pn,Jt)=>!Pn||Jt.hp<Pn.hp?Jt:Pn,null);St=Et,yn=Sn;break}}}if(St&&yn){c.mp-=St.cost,ci=!0;let Et=St.target==="self"?c:yn;uo(c,Et,St,Yt,()=>setTimeout(_n,600));return}}if(Sp(c,pt,Bt)&&U.length>0){U.sort((Me,me)=>Me.target.hp-me.target.hp||Me.dist-me.dist);let he=U[0].target;ba(c,he);return}if(U.length>0){U.sort((Me,me)=>Me.target.hp-me.target.hp||Me.dist-me.dist);let he=U[0].target;ba(c,he);return}if(tt&&je(c.range!=null?c.range:1))return;if(!xn&&!Xt&&ce.size>0&&I.length>0){let he=[];ce.forEach((me,pe)=>{he.push({gx:pe%e.w,gy:Math.floor(pe/e.w)})});let Me=fn(he);if(Me){let me=Wt(Me.path,_);if(me&&(me.gx!==c.x||me.gy!==c.y)){Gt(c,me.gx,me.gy,()=>setTimeout(_n,600));return}let pe=Oe(I,he);if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>setTimeout(_n,600));return}}}let rn=bs-w;if(rn<=20&&k.length>0&&!xn&&I.length>0&&!k.some(Me=>Me.gx===c.x&&Me.gy===c.y)){let Me=Ct,me=Me?Me.path:null,pe=k.length>0?Math.min(...k.map(St=>yi(c.x,c.y,St.gx,St.gy))):1/0,ge=new Map,Re=new Map;for(let St of I){let yn=St.gy*e.w+St.gx;ge.set(yn,k.length>0?Math.min(...k.map(qn=>yi(St.gx,St.gy,qn.gx,qn.gy))):1/0),Re.set(yn,me?me.findIndex(qn=>qn.x===St.gx&&qn.y===St.gy):-1)}let ue=null,be=-1,Ot=ne;for(let St of I){let yn=St.gy*e.w+St.gx;if(ge.get(yn)>pe||(_t.get(yn)||[]).filter(Sn=>Sn.target.maxHp>0&&Sn.target.hp/Sn.target.maxHp<Ot).length===0)continue;let Ft=Re.get(yn),kt=Ft>=0?Ft:0;kt>be&&(be=kt,ue=St)}if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>setTimeout(_n,600));return}let It=Me?Wt(Me.path,_):null;if(It&&(It.gx!==c.x||It.gy!==c.y)){Gt(c,It.gx,It.gy,()=>setTimeout(_n,600));return}let Yt=Oe(I,Fe);if(Yt&&(Yt.gx!==c.x||Yt.gy!==c.y)){Gt(c,Yt.gx,Yt.gy,()=>setTimeout(_n,600));return}}if(oe&&I.length>0&&!xn){let he=null,Me=1/0;for(let me of I){let ge=(_t.get(me.gy*e.w+me.gx)||[]).filter(Re=>Re.target.maxHp>0&&Re.target.hp/Re.target.maxHp<ne);if(ge.length>0){let Re=Math.min(...ge.map(ue=>ue.target.hp));Re<Me&&(Me=Re,he=me)}}if(he){let me=gr(e,c.x,c.y,he.gx,he.gy,Ee,c),pe=me?sn(me,_):null;if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>setTimeout(_n,600));return}}if(rn>20&&ae&&L.length>0&&!L.some(pe=>pe.gx===c.x&&pe.gy===c.y)){let pe=_e.length>0?_e:L,ge=yt;if(ge!=null&&ge.path.length<=5){let ue=Wt(ge.path,_);if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>setTimeout(_n,600));return}let be=Oe(I,pe);if(be&&(be.gx!==c.x||be.gy!==c.y)){Gt(c,be.gx,be.gy,()=>setTimeout(_n,600));return}}}if(rn>20){let me=Hn();if(me&&yi(c.x,c.y,me.gx,me.gy)>0){Gt(c,me.gx,me.gy,()=>setTimeout(_n,600));return}en();return}}if(rn<=10&&k.length>0&&!xn&&I.length>0&&!k.some(Me=>Me.gx===c.x&&Me.gy===c.y)){let Me=we.length>0?we:k,me=Ct,pe=me?Wt(me.path,_):null;if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>setTimeout(_n,600));return}let ge=Oe(I,Me);if(ge&&(ge.gx!==c.x||ge.gy!==c.y)){Gt(c,ge.gx,ge.gy,()=>setTimeout(_n,600));return}}if(c.level===1&&k.length>0&&!xn&&!k.some(Me=>Me.gx===c.x&&Me.gy===c.y)&&I.length>0){let Me=we.length>0?we:k,me=Ct,pe=me?Wt(me.path,_):null;if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>setTimeout(_n,600));return}let ge=Oe(I,Me);if(ge&&(ge.gx!==c.x||ge.gy!==c.y)){Gt(c,ge.gx,ge.gy,()=>setTimeout(_n,600));return}}if(ae&&L.length>0&&!xn&&!L.some(Me=>Me.gx===c.x&&Me.gy===c.y)&&I.length>0){let Me=pt.filter(Ot=>Ot.maxHp>0&&Ot.hp/Ot.maxHp<ne),me=null,pe=1/0;for(let Ot of I){let Yt=(_t.get(Ot.gy*e.w+Ot.gx)||[]).find(St=>Me.some(yn=>yn.id===St.target.id));Yt&&Yt.target.hp<pe&&(pe=Yt.target.hp,me=Ot)}if(me){let Ot=gr(e,c.x,c.y,me.gx,me.gy,Ee,c),It=Ot?sn(Ot,_):null;if(It&&(It.gx!==c.x||It.gy!==c.y)){Gt(c,It.gx,It.gy,()=>setTimeout(_n,600));return}}let ge=_e.length>0?_e:L,Re=yt,ue=Re?Wt(Re.path,_):null;if(ue&&(ue.gx!==c.x||ue.gy!==c.y)){Gt(c,ue.gx,ue.gy,()=>setTimeout(_n,600));return}let be=Oe(I,ge);if(be&&(be.gx!==c.x||be.gy!==c.y)){Gt(c,be.gx,be.gy,()=>setTimeout(_n,600));return}}if(Zt&&pt.length>0&&!xn&&I.length>0){if(!Xt&&ce.size>0){let Me=[];ce.forEach((pe,ge)=>{Me.push({gx:ge%e.w,gy:Math.floor(ge/e.w)})});let me=fn(Me);if(me){let pe=Wt(me.path,_);if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>setTimeout(_n,600));return}let ge=Oe(I,Me);if(ge&&(ge.gx!==c.x||ge.gy!==c.y)){Gt(c,ge.gx,ge.gy,()=>setTimeout(_n,600));return}}}let he=xi();if(he&&(he.gx!==c.x||he.gy!==c.y)){Gt(c,he.gx,he.gy,()=>setTimeout(_n,600));return}}!tt&&je(un)||en()}function Fn(){for(Wi.length=0;Di.children.length;){let f=Di.children[0];Di.remove(f),f.geometry!==Sa&&f.geometry!==Ea&&f.geometry.dispose(),f.material.dispose()}Vt()}let hs=new Set;function ql(f){return f?(f.summonedSkills&&f.summonedSkills.length>0?f.summonedSkills:f.class&&ha[f.class]?ha[f.class]:[]).map(_=>({..._,disabled:_.disabled===!0||f.level<(_.level||1)||_.hpCost&&f.hp<_.hpCost||_.cost!=null&&f.mp<_.cost||_.effectKey==="reanimate"&&J<=0})):[]}function fo(f,c,_){let b=[],P=c.range||0,I=f.x,U=f.y;if(c.target==="self")return b.push({gx:I,gy:U,targetUnit:null}),b;for(let k of _)if(!(k.hp<=0||Math.abs(I-k.x)+Math.abs(U-k.y)>P)){if(c.target==="enemy"){if(k.player===f.player)continue}else if(c.target==="ally"&&k.player!==f.player)continue;P>=2&&!Ss(e,I,U,k.x,k.y)||b.push({gx:k.x,gy:k.y,targetUnit:k})}return b}function fu(f,c,_){let b=c.range||0;if(c.target==="self"){_(f.x,f.y);return}Od(e,f.x,f.y,b).forEach((I,U)=>{let k=U%e.w,L=U/e.w|0;b>=2&&!Ss(e,f.x,f.y,k,L)||_(k,L)})}function Dv(f,c){let _=[];return fu(f,c,(b,P)=>_.push({gx:b,gy:P})),_}function Tp(f,c){let _=[];c.target==="self"?(hs=new Set([`${f.x},${f.y}`]),_.push({gx:f.x,gy:f.y})):(hs=new Set,fu(f,c,(b,P)=>{_.push({gx:b,gy:P});let I=j(b,P);I&&(c.target==="enemy"&&I.player!==f.player&&hs.add(`${b},${P}`),c.target==="ally"&&I.player===f.player&&hs.add(`${b},${P}`))})),Fn(),_.forEach(({gx:b,gy:P})=>{let U=(Zn+e.height[P][b]*.35)/2+Zn/2,k=b*nt-Pe+nt/2,L=P*nt-He+nt/2,ne=U+.01,re=new Dn({color:8926122,transparent:!0,opacity:.4,side:In}),oe=new Ke(Sa,re);oe.rotation.x=-Math.PI/2,oe.position.set(k,ne,L),Di.add(oe),Wi.push(re);let H=new Dn({color:11167436,transparent:!0,opacity:.7,side:In}),ae=new Ke(Ea,H);ae.rotation.x=-Math.PI/2,ae.position.set(k,ne+.01,L),ae.userData.gx=b,ae.userData.gy=P,Di.add(ae),Wi.push(H)})}let du=.82,pu=1.02,Sa=new as(pu,pu),Ea=new as(du,du);function wp(f){Fn(),f.forEach(({gx:c,gy:_})=>{let P=(Zn+e.height[_][c]*.35)/2+Zn/2,I=c*nt-Pe+nt/2,U=_*nt-He+nt/2,k=P+.01,L=new Dn({color:2271812,transparent:!0,opacity:.4,side:In}),ne=new Ke(Sa,L);ne.rotation.x=-Math.PI/2,ne.position.set(I,k,U),Di.add(ne),Wi.push(L);let re=new Dn({color:4508774,transparent:!0,opacity:.7,side:In}),oe=new Ke(Ea,re);oe.rotation.x=-Math.PI/2,oe.position.set(I,k+.01,U),oe.userData.gx=c,oe.userData.gy=_,Di.add(oe),Wi.push(re)}),Vt()}function Yl(f){Fn(),f.forEach((c,_)=>{if(c===0)return;let b=_%e.w,P=_/e.w|0,U=(Zn+e.height[P][b]*.35)/2+Zn/2,k=b*nt-Pe+nt/2,L=P*nt-He+nt/2,ne=U+.01,re=new Dn({color:3381759,transparent:!0,opacity:.35,side:In}),oe=new Ke(Sa,re);oe.rotation.x=-Math.PI/2,oe.position.set(k,ne,L),Di.add(oe),Wi.push(re);let H=new Dn({color:6730751,transparent:!0,opacity:.65,side:In}),ae=new Ke(Ea,H);ae.rotation.x=-Math.PI/2,ae.position.set(k,ne+.01,L),Di.add(ae),Wi.push(H)}),Vt()}function Ap(f){Fn(),f.forEach((c,_)=>{if(c===0)return;let b=_%e.w,P=_/e.w|0,U=(Zn+e.height[P][b]*.35)/2+Zn/2,k=b*nt-Pe+nt/2,L=P*nt-He+nt/2,ne=U+.01,re=new Dn({color:10035746,transparent:!0,opacity:.4,side:In}),oe=new Ke(Sa,re);oe.rotation.x=-Math.PI/2,oe.position.set(k,ne,L),Di.add(oe),Wi.push(re);let H=new Dn({color:13386820,transparent:!0,opacity:.7,side:In}),ae=new Ke(Ea,H);ae.rotation.x=-Math.PI/2,ae.position.set(k,ne+.01,L),Di.add(ae),Wi.push(H)}),Vt()}let Ls=new El,Ds=new qe;function mu(f){let c=f.object;if(c.isInstancedMesh&&c.userData.tileGridGround){let b=f.instanceId;if(b==null||b<0)return null;let P=c.userData.insideTileGx,I=c.userData.insideTileGy;return P&&I&&b<P.length?{gx:P[b],gy:I[b]}:null}if(c.userData.mergedOutsidePick)return Pv(e,f.point);let _=c;for(;_&&(_.userData.gx==null||_.userData.gy==null);)_=_.parent;return _&&_.userData.gx!=null?{gx:_.userData.gx,gy:_.userData.gy}:null}function po(f,c){let _=t.getBoundingClientRect();return Ds.x=(f-_.left)/_.width*2-1,Ds.y=-((c-_.top)/_.height)*2+1,{x:Ds.x,y:Ds.y}}function Rp(f,c){if(gn)return;Ds.x=f,Ds.y=c,Ls.setFromCamera(Ds,a);let _=Ls.intersectObjects(Z.children,!0);if(_.length===0)return;let b,P;for(let U of _){let k=mu(U);if(k){b=k.gx,P=k.gy;break}}if(b==null||P==null)return;if($==="draft"&&ni){let U=P*e.w+b;wn.has(U)&&Ol(b,P);return}if($!=="playing"||W==="cvcpu")return;if(Rs&&ii){let U=rt[ht],k=ze(U),L=k&&k.hp>0?k:null;if(L&&b===L.x&&P===L.y){Rs=!1,ii=null,hs=new Set,Fn(),xn?Rn=new Map:(Rn=Cl(e,L.x,L.y,ve(L,"agi"),Ee,L),Yl(Rn)),Rt();return}let ne=`${b},${P}`;if(!hs.has(ne))return;if(!L||L.mp<ii.cost){Rs=!1,ii=null,Fn(),Rt();return}let re=j(b,P);if(ii.target==="enemy"&&(!re||re.player===L.player)||ii.target==="ally"&&re&&re.player!==L.player||ii.target==="self"&&(b!==L.x||P!==L.y)||ii.target==="enemy"&&!re)return;L.mp-=ii.cost,ci=!0;let oe={showFloatingCombatText:ri,handleUnitDeath:Cn,updateUnitSlashVisibility:Ht,updateTurnUI:Rt,tryCollectPowerup:et,world:e,units:Ee,reanimateDeadUnit:ya,updateUnitTileIndex:E,updateUnitPosition(ae){let we=le.get(ae.id);we&&we.position.copy(Ie(ae.x,ae.y))},animateKnockback(ae,we,_e,Ve,Fe,at){let Ct=le.get(ae.id);if(!Ct){at&&at();return}let yt=Ie(we,_e).clone(),We=Ie(Ve,Fe).clone(),tt=performance.now(),bt=0;function tn(un){bt++,bt%2===0&&Vt();let vn=Math.min(1,(un-tt)/Zs),Zt=pt=>pt*pt*(3-2*pt);Ct.position.lerpVectors(yt,We,Zt(vn)),vn<1?requestAnimationFrame(tn):(Ct.position.copy(We),at&&at())}requestAnimationFrame(tn)}},H=ii.target==="self"?L:re||null;W==="online"&&L.player===Y&&typeof hn=="function"&&(hn({type:"requestRender"}),tr({type:"skill",unitId:L.id,targetId:H?H.id:void 0,effectKey:ii.effectKey})),uo(L,H,ii,oe,()=>{Fn(),Rs=!1,ii=null,hs=new Set,L.hp<=0?Rt():xn&&L.hp>0?en():Rt()});return}if(Cs){let U=rt[ht],k=ze(U);if(W==="online"&&k&&k.player!==Y)return;let L=le.get(U);if(k&&L&&Li.length>0){let ne=Ie(k.x,k.y),re=Ie(b,P),oe=re.x-ne.x,H=re.z-ne.z,ae=oe*oe+H*H>1e-6?Math.atan2(oe,H):L.rotation.y;L.rotation.y=Vh(ae)}en();return}if(An!=null&&Qi){let U=ze(An);if(!U||U.player!==G||W==="online"&&U.player!==Y)return;let k=P*e.w+b,L=j(b,P);if(L&&L.id===rt[ht]&&L.player===G&&(W!=="online"||L.player===Y)){Qi=!1,An=L.id,xn?(Fn(),Rn=new Map):(Rn=Cl(e,L.x,L.y,ve(L,"agi"),Ee,L),Yl(Rn)),Rt();return}if(!Rn.has(k)||Rn.get(k)===0)return;L&&L.player!==G&&ba(U,L);return}let I=j(b,P);if(I){if(I.id===rt[ht]&&I.player===G&&(W!=="online"||I.player===Y)){pa(),An=I.id,Qi=!1,xn?(Fn(),Rn=new Map):(Rn=Cl(e,b,P,ve(I,"agi"),Ee,I),Yl(Rn)),Rt();return}Fn(),Rn=new Map,Qi=!1,qd(I),Rt();return}if(pa(),An!=null){let ae=function(){if(H>=re.length){let bt=U.x,tn=U.y;U.x=re[re.length-1].x,U.y=re[re.length-1].y,E(U,bt,tn),et(U),gn=!1,At(oe),Ui(),Rn=new Map,xn=!0,W==="online"&&U.player===Y&&typeof hn=="function"&&(hn({type:"move",unitId:U.id,toGx:U.x,toGy:U.y}),Gl=!1,gp()),ci&&U.hp>0?en():setTimeout(()=>Rt(),400);return}let we=re[H-1],_e=re[H],Ve=Ie(we.x,we.y).clone(),Fe=Ie(_e.x,_e.y).clone(),at=Fe.x-Ve.x,Ct=Fe.z-Ve.z;at*at+Ct*Ct>1e-6&&(oe.rotation.y=Math.atan2(at,Ct));let yt=performance.now(),We=0;function tt(bt){We++,We%2===0&&Vt();let tn=Math.min(1,(bt-yt)/Zs),vn=(Zt=>Zt*Zt*(3-2*Zt))(tn);if(oe.position.lerpVectors(Ve,Fe,vn),$e(oe,vn),g){let Zt=a.position.distanceTo(h),pt=Zt<.1?o:Zt;p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(d).normalize(),h.lerp(oe.position,l),a.position.copy(h).add(p.clone().multiplyScalar(pt)),a.lookAt(h)}tn<1?requestAnimationFrame(tt):(H++,ae())}requestAnimationFrame(tt)};if(Qi)return;let U=ze(An);if(!U||U.player!==G||W==="online"&&U.player!==Y)return;let k=P*e.w+b;if(!Rn.has(k)||Rn.get(k)===0)return;let L=j(b,P);if(L!=null&&L.id!==U.id||gn||xn)return;let re=gr(e,U.x,U.y,b,P,Ee,U);if(!re||re.length<=1)return;W==="online"&&U.player===Y&&typeof hn=="function"&&(hn({type:"requestRender"}),Gl=!0),An=null,Fn(),gn=!0,g=!0,Ui(U.id);let oe=le.get(U.id),H=1;ae()}}function gu(f){T.x=f.clientX,T.y=f.clientY,C=f.isTouch===!0,S=f.ctrlKey,v=po(f.clientX,f.clientY),t.style.cursor=(f.ctrlKey,"grabbing")}function $l(f){return f.touches&&f.touches.length>0?{clientX:f.touches[0].clientX,clientY:f.touches[0].clientY}:f.changedTouches&&f.changedTouches.length>0?{clientX:f.changedTouches[0].clientX,clientY:f.changedTouches[0].clientY}:{clientX:f.clientX,clientY:f.clientY}}function yu(f){if(!f||f.length<2)return 0;let c=f[0],_=f[1];return Math.hypot(_.clientX-c.clientX,_.clientY-c.clientY)}function Cp(f){if(f.touches.length===2){ie=yu(f.touches),v=null;return}if(f.touches.length!==1)return;ie=null;let c=$l(f);gu({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1,isTouch:!0})}function Pp(f){if(f.touches.length===2){f.preventDefault();let _=yu(f.touches);if(ie!=null&&ie>0){let b=_-ie,P=a.position.distanceTo(h),I=Math.max(ee,Math.min(X,P-b*B));x.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(x.multiplyScalar(I)),a.lookAt(h),Ps=performance.now()}ie=_;return}if(ie=null,f.touches.length!==1)return;f.preventDefault();let c=$l(f);xu({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1})}function Ip(f){if(f.touches.length<2&&(ie=null),f.touches.length===2||f.changedTouches.length===0)return;C=!1;let c=$l(f);Kl({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1})}function xu(f){if(Cs){tp(f.clientX,f.clientY);return}if(v==null)return;let c=f.clientX-T.x,_=f.clientY-T.y;if(!M&&!y&&(Math.abs(c)>A||Math.abs(_)>A)&&(f.ctrlKey||S?(y=!0,g=!1):(M=!0,g=!1)),y){Q.copy(a.position).sub(h);let b=Q.length();if(b<.001)return;let P=Math.atan2(Q.x,Q.z),I=Math.asin(Math.max(-1,Math.min(1,Q.y/b)));P-=c*O,I+=_*O,I=Math.max(D,Math.min(N,I)),Q.x=b*Math.cos(I)*Math.sin(P),Q.y=b*Math.sin(I),Q.z=b*Math.cos(I)*Math.cos(P),a.position.copy(h).add(Q),a.lookAt(h),T.x=f.clientX,T.y=f.clientY,Ps=performance.now()}else if(M){let b=po(f.clientX,f.clientY);u.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,h.y,0)),Ls.setFromCamera(new qe(v.x,v.y),a),Ls.ray.intersectPlane(u,m);let P=m.clone();Ls.setFromCamera(new qe(b.x,b.y),a),Ls.ray.intersectPlane(u,m);let I=P.sub(m);C&&I.multiplyScalar(K),h.add(I),a.position.add(I),a.lookAt(h),v={x:b.x,y:b.y},Ps=performance.now()}}function Kl(f){if(v!=null&&!M&&!y){let c=po(f.clientX,f.clientY);Rp(c.x,c.y)}v=null,M=!1,y=!1,S=!1,t.style.cursor="grab"}function Lp(f){f.preventDefault();let c=a.position.distanceTo(h),_=Math.max(ee,Math.min(X,c+f.deltaY*se));x.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(x.multiplyScalar(_)),a.lookAt(h),Ps=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",gu),t.addEventListener("mousemove",xu),t.addEventListener("mouseup",Kl),t.addEventListener("mouseleave",Kl),t.addEventListener("touchstart",Cp,{passive:!0}),t.addEventListener("touchmove",Pp,{passive:!1}),t.addEventListener("touchend",Ip,{passive:!0}),t.addEventListener("wheel",Lp,{passive:!1});function _u(){let f=t.clientWidth,c=t.clientHeight;a.aspect=f/c,a.updateProjectionMatrix(),si.setSize(f,c),si.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",_u);let si=new Ga({antialias:!1});si.setSize(t.clientWidth,t.clientHeight),si.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),si.shadowMap.enabled=!0,si.shadowMap.type=Ah,t.appendChild(si.domElement),_u();let mo=document.createElement("div");mo.id="combat-text-layer",t.appendChild(mo);let ns=new F,Us=new F,Dp=1400;function ri(f,c,_,b,P){let I=document.createElement("div");I.className="combat-text-float "+(b?"miss":"damage")+(P?" "+P:""),I.textContent=_,I.style.position="absolute",mo.appendChild(I);let U=P==="skill-name"?1.7:1.2,k=performance.now();function L(){ns.copy(Ie(f,c)),ns.y+=U,ns.project(a);let oe=t.clientWidth,H=t.clientHeight;I.style.left=(ns.x*.5+.5)*oe+"px",I.style.top=(1-(ns.y*.5+.5))*H+"px"}let ne=0;function re(){ne%2===0&&L(),ne++,performance.now()-k<Dp?requestAnimationFrame(re):I.remove()}requestAnimationFrame(re)}let Up=1500;function Np(f,c){let _=document.createElement("div");_.className="combat-text-float "+(c||"levelup"),_.textContent="LEVEL UP!",_.style.position="absolute",mo.appendChild(_);let b=performance.now(),P=0;function I(){ns.copy(Ie(f.x,f.y)),ns.y+=1.2,ns.project(a);let k=t.clientWidth,L=t.clientHeight;_.style.left=(ns.x*.5+.5)*k+"px",_.style.top=(1-(ns.y*.5+.5))*L+"px"}function U(){P%2===0&&I(),P++,performance.now()-b<Up?requestAnimationFrame(U):_.remove()}requestAnimationFrame(U)}function Cn(f,c,_){if(E(f,f.x,f.y),J++,f.deathOrder=++xe,W==="online"&&typeof hn=="function"&&!(_&&_.skipSync)&&hn({type:"unitDeath",unitId:f.id,killerId:c?.id}),vv(c,f,Ee),console.log("[DEATH]",`${f.name} (${f.class}, P${f.player})`,`at (${f.x},${f.y})`,`Lv.${f.level}`),ri(f.x,f.y,"DEAD",!1),Ee.filter(k=>k.summonedBy===f.id&&k.hp>0).map(k=>k.id).forEach(k=>{let L=ze(k);L&&(L.hp=0,Cn(L,null,{skipSync:!0}))}),$==="playing"&&rt.length>0&&f.id===rt[ht]){let k=f.id;queueMicrotask(()=>{if($!=="playing"||rt.length===0||rt[ht]!==k)return;let L=ze(k);L&&L.hp>0||en()})}let P=le.get(f.id);if(!P){Ui(),vu();return}let I=performance.now();function U(k){Vt();let L=k-I,ne=Math.min(1,L/ti),re=ne*ne;P.rotation.x=re*Math.PI*.5,ne<1?requestAnimationFrame(U):(n.remove(P),le.delete(f.id),Ui(),vu())}requestAnimationFrame(U)}function vu(){if($!=="playing")return;let f=Ee.some(_=>_.player===1&&_.hp>0&&!_.summonedBy),c=Ee.some(_=>_.player===2&&_.hp>0&&!_.summonedBy);f?c||Zl(1):Zl(2)}function Bp(){let f=hu(),c=new Set(f.map(U=>U.gy*e.w+U.gx)),_=Ee.filter(U=>U.hp>0&&U.player===1&&!U.summonedBy&&c.has(U.y*e.w+U.x)).length,b=Ee.filter(U=>U.hp>0&&U.player===2&&!U.summonedBy&&c.has(U.y*e.w+U.x)).length,P=null,I="";if(_>b)P=1,I=`Time's up! ${Je(1)} wins! (${_} vs ${b} units on center base)`;else if(b>_)P=2,I=`Time's up! ${Je(2)} wins! (${b} vs ${_} units on center base)`;else{let U=Ee.filter(L=>L.hp>0&&L.player===1&&!L.summonedBy).reduce((L,ne)=>L+ne.hp,0),k=Ee.filter(L=>L.hp>0&&L.player===2&&!L.summonedBy).reduce((L,ne)=>L+ne.hp,0);U>k?(P=1,I=`Time's up! Draw on center \u2014 ${Je(1)} wins on total HP (${U} vs ${k})`):k>U?(P=2,I=`Time's up! Draw on center \u2014 ${Je(2)} wins on total HP (${k} vs ${U})`):I=`Draw! (equal units on center: ${_}, equal HP)`}Zl(P,I)}function Zl(f,c){Vi(),Mv(Ee,f),$="gameover",document.getElementById("turn-menu").style.display="none",pa(),Fn();let _=document.getElementById("game-over-overlay"),b=document.getElementById("game-over-title"),P=document.getElementById("game-over-cards"),I=document.getElementById("game-over-class-record");I&&(I.style.display="none",I.innerHTML=""),b.textContent=c??`${Je(f)} wins!`;let U=Ee.filter(k=>k.player===(f??1));if(P.innerHTML=U.map(k=>{let L=k,ne=k.level>=3?" level-3":k.level>=2?" level-2":"",re=L.maxHp>0&&L.hp/L.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${ne}${re}">
          <img class="game-over-card-image" src="${ca[k.class]||""}" alt="${L.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${L.name}</div>
            <div class="game-over-card-meta">Lv.${L.level} ${L.class} \u2014 HP ${L.hp}/${L.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${L.hp}/${L.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${L.mp}/${L.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${ve(L,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${ve(L,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${ve(L,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${ve(L,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${ve(L,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${ve(L,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${L.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),_.classList.add("visible"),W==="cvcpu"){if(mn++,I&&Es&&mn>=Mt){let k=bi.map(L=>{let ne=ls[L],re=ne.wins+ne.losses||1,oe=ne.wins+ne.losses>0?(ne.wins/re*100).toFixed(1)+"%":"\u2014",H=ne.wins+ne.losses>0?(ne.losses/re*100).toFixed(1)+"%":"\u2014";return{class:L,battles:ne.battles,kills:ne.kills,deaths:ne.deaths,wins:ne.wins,losses:ne.losses,winRate:oe,lossRate:H}});I.innerHTML=`
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
              ${k.map(L=>`
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
        `,I.style.display="block"}mn<Mt&&setTimeout(()=>{_.classList.remove("visible"),Te(),ga()},2e3)}}function Rr(f=0){requestAnimationFrame(Rr);let c=Z.userData&&Z.userData.swayingFoliage;if(c&&c.length>0){let P=f*.0017;for(let I=0;I<c.length;I++){let{group:U,phase:k}=c[I];U.rotation.z=Math.sin(P+k)*.14,U.rotation.x=Math.sin(P*.79+k*1.55)*.09,U.rotation.y=Math.sin(P*.62+k*.9)*.055}vr=!0}Ps===0&&(Ps=f);let _=f-Ps>500;Rr.frameCount=(typeof Rr.frameCount=="number"?Rr.frameCount:0)+1;let b=()=>{if(vr){let P=.6+.4*Math.sin(f*.004);for(let I=0;I<Wi.length;I++){let U=I%2===0?.4:.7;Wi[I].opacity=U*P}si.render(n,a),vr=!1}};_?f-zh>=100&&(zh=f,vr=!0,b()):(Rr.frameCount%2===0&&(vr=!0),b())}Rr()}Iv();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
