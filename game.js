var wh="160";var Bp=0,Su=1,Op=2;var od=1,Ah=2,ms=3,Ws=0,vi=1,Cn=2;var zs=0,Kr=1,Eu=2,Tu=3,wu=4,Fp=5,or=100,kp=101,Hp=102,Au=103,Ru=104,zp=200,Vp=201,Gp=202,Wp=203,Nc=204,Bc=205,Xp=206,qp=207,Yp=208,$p=209,Kp=210,Zp=211,Jp=212,jp=213,Qp=214,em=0,tm=1,nm=2,Wo=3,im=4,sm=5,rm=6,am=7,ld=0,om=1,lm=2,Vs=0,cm=1,hm=2,um=3,fm=4,dm=5,pm=6;var cd=300,jr=301,Qr=302,Oc=303,Fc=304,Tl=306,Oa=1e3,Ki=1001,kc=1002,mi=1003,Cu=1004;var Ql=1005;var Oi=1006,mm=1007;var Fa=1008;var Gs=1009,gm=1010,ym=1011,Rh=1012,hd=1013,ks=1014,Hs=1015,ka=1016,ud=1017,fd=1018,cr=1020,xm=1021,Zi=1023,_m=1024,vm=1025,hr=1026,ea=1027,Mm=1028,dd=1029,bm=1030,pd=1031,md=1033,ec=33776,tc=33777,nc=33778,ic=33779,Pu=35840,Iu=35841,Lu=35842,Du=35843,gd=36196,Uu=37492,Nu=37496,Bu=37808,Ou=37809,Fu=37810,ku=37811,Hu=37812,zu=37813,Vu=37814,Gu=37815,Wu=37816,Xu=37817,qu=37818,Yu=37819,$u=37820,Ku=37821,sc=36492,Zu=36494,Ju=36495,Sm=36283,ju=36284,Qu=36285,ef=36286;var Xo=2300,qo=2301,rc=2302,tf=2400,nf=2401,sf=2402;var yd=3e3,ur=3001,Em=3200,Tm=3201,xd=0,wm=1,Fi="",ri="srgb",ys="srgb-linear",Ch="display-p3",wl="display-p3-linear",Yo="linear",vn="srgb",$o="rec709",Ko="p3";var Rr=7680;var rf=519,Am=512,Rm=513,Cm=514,_d=515,Pm=516,Im=517,Lm=518,Dm=519,af=35044;var of="300 es",Hc=1035,gs=2e3,Zo=2001,Xs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ac=Math.PI/180,zc=180/Math.PI;function aa(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hi[i&255]+hi[i>>8&255]+hi[i>>16&255]+hi[i>>24&255]+"-"+hi[e&255]+hi[e>>8&255]+"-"+hi[e>>16&15|64]+hi[e>>24&255]+"-"+hi[t&63|128]+hi[t>>8&255]+"-"+hi[t>>16&255]+hi[t>>24&255]+hi[n&255]+hi[n>>8&255]+hi[n>>16&255]+hi[n>>24&255]).toLowerCase()}function fi(i,e,t){return Math.max(e,Math.min(t,i))}function Um(i,e){return(i%e+e)%e}function oc(i,e,t){return(1-t)*i+t*e}function lf(i){return(i&i-1)===0&&i!==0}function Vc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ta(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(fi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class i{constructor(e,t,n,s,r,a,o,l,u){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u)}set(e,t,n,s,r,a,o,l,u){let c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],c=n[4],p=n[7],d=n[2],m=n[5],x=n[8],M=s[0],y=s[3],g=s[6],S=s[1],v=s[4],A=s[7],O=s[2],U=s[5],N=s[8];return r[0]=a*M+o*S+l*O,r[3]=a*y+o*v+l*U,r[6]=a*g+o*A+l*N,r[1]=u*M+c*S+p*O,r[4]=u*y+c*v+p*U,r[7]=u*g+c*A+p*N,r[2]=d*M+m*S+x*O,r[5]=d*y+m*v+x*U,r[8]=d*g+m*A+x*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-n*r*c+n*o*l+s*r*u-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],p=c*a-o*u,d=o*l-c*r,m=u*r-a*l,x=t*p+n*d+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=p*M,e[1]=(s*u-c*n)*M,e[2]=(o*n-s*a)*M,e[3]=d*M,e[4]=(c*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=m*M,e[7]=(n*l-u*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lc.makeScale(e,t)),this}rotate(e){return this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lc=new Dt;function vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nm(){let i=Jo("canvas");return i.style.display="block",i}var cf={};function La(i){i in cf||(cf[i]=!0,console.warn(i))}var hf=new Dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uf=new Dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),go={[ys]:{transfer:Yo,primaries:$o,toReference:i=>i,fromReference:i=>i},[ri]:{transfer:vn,primaries:$o,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[wl]:{transfer:Yo,primaries:Ko,toReference:i=>i.applyMatrix3(uf),fromReference:i=>i.applyMatrix3(hf)},[Ch]:{transfer:vn,primaries:Ko,toReference:i=>i.convertSRGBToLinear().applyMatrix3(uf),fromReference:i=>i.applyMatrix3(hf).convertLinearToSRGB()}},Bm=new Set([ys,wl]),nn={enabled:!0,_workingColorSpace:ys,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Bm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=go[e].toReference,s=go[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return go[i].primaries},getTransfer:function(i){return i===Fi?Yo:go[i].transfer}};function Zr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cr,jo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cr===void 0&&(Cr=Jo("canvas")),Cr.width=e.width,Cr.height=e.height;let n=Cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zr(t[n]/255)*255):t[n]=Zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Om=0,Qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=aa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hc(s[a].image)):r.push(hc(s[a]))}else r=hc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fm=0,ki=class i extends Xs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ki,s=Ki,r=Oi,a=Fa,o=Zi,l=Gs,u=i.DEFAULT_ANISOTROPY,c=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=aa(),this.name="",this.source=new Qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(La("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ur?ri:Fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oa:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oa:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return La("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ri?ur:yd}set encoding(e){La("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ur?ri:Fi}};ki.DEFAULT_IMAGE=null;ki.DEFAULT_MAPPING=cd;ki.DEFAULT_ANISOTROPY=1;var Qn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,u=l[0],c=l[4],p=l[8],d=l[1],m=l[5],x=l[9],M=l[2],y=l[6],g=l[10];if(Math.abs(c-d)<.01&&Math.abs(p-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(c+d)<.1&&Math.abs(p+M)<.1&&Math.abs(x+y)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(u+1)/2,A=(m+1)/2,O=(g+1)/2,U=(c+d)/4,N=(p+M)/4,ee=(x+y)/4;return v>A&&v>O?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=U/n,r=N/n):A>O?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=U/s,r=ee/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=N/r,s=ee/r),this.set(n,s,r,t),this}let S=Math.sqrt((y-x)*(y-x)+(p-M)*(p-M)+(d-c)*(d-c));return Math.abs(S)<.001&&(S=1),this.x=(y-x)/S,this.y=(p-M)/S,this.z=(d-c)/S,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gc=class extends Xs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qn(0,0,e,t),this.scissorTest=!1,this.viewport=new Qn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(La("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ur?ri:Fi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ki(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xs=class extends Gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},el=class extends ki{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mi,this.minFilter=mi,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wc=class extends ki{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mi,this.minFilter=mi,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ss=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],u=n[s+1],c=n[s+2],p=n[s+3],d=r[a+0],m=r[a+1],x=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=p;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=M;return}if(p!==M||l!==d||u!==m||c!==x){let y=1-o,g=l*d+u*m+c*x+p*M,S=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let O=Math.sqrt(v),U=Math.atan2(O,g*S);y=Math.sin(y*U)/O,o=Math.sin(o*U)/O}let A=o*S;if(l=l*y+d*A,u=u*y+m*A,c=c*y+x*A,p=p*y+M*A,y===1-o){let O=1/Math.sqrt(l*l+u*u+c*c+p*p);l*=O,u*=O,c*=O,p*=O}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],u=n[s+2],c=n[s+3],p=r[a],d=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+c*p+l*m-u*d,e[t+1]=l*x+c*d+u*p-o*m,e[t+2]=u*x+c*m+o*d-l*p,e[t+3]=c*x-o*p-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),c=o(s/2),p=o(r/2),d=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*c*p+u*m*x,this._y=u*m*p-d*c*x,this._z=u*c*x+d*m*p,this._w=u*c*p-d*m*x;break;case"YXZ":this._x=d*c*p+u*m*x,this._y=u*m*p-d*c*x,this._z=u*c*x-d*m*p,this._w=u*c*p+d*m*x;break;case"ZXY":this._x=d*c*p-u*m*x,this._y=u*m*p+d*c*x,this._z=u*c*x+d*m*p,this._w=u*c*p-d*m*x;break;case"ZYX":this._x=d*c*p-u*m*x,this._y=u*m*p+d*c*x,this._z=u*c*x-d*m*p,this._w=u*c*p+d*m*x;break;case"YZX":this._x=d*c*p+u*m*x,this._y=u*m*p+d*c*x,this._z=u*c*x-d*m*p,this._w=u*c*p-d*m*x;break;case"XZY":this._x=d*c*p-u*m*x,this._y=u*m*p-d*c*x,this._z=u*c*x+d*m*p,this._w=u*c*p+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],p=t[10],d=n+o+p;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-u)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(c-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+u)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-u)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+c)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fi(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+a*o+s*u-r*l,this._y=s*c+a*l+r*o-n*u,this._z=r*c+a*u+n*l-s*o,this._w=a*c-n*o-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let u=Math.sqrt(l),c=Math.atan2(u,o),p=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*p+this._w*d,this._x=n*p+this._x*d,this._y=s*p+this._y*d,this._z=r*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ff.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*s-o*n),c=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*u+a*p-o*c,this.y=n+l*c+o*u-r*p,this.z=s+l*p+r*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(fi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uc=new k,ff=new ss,_s=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),xo.subVectors(this.max,wa),Pr.subVectors(e.a,wa),Ir.subVectors(e.b,wa),Lr.subVectors(e.c,wa),Us.subVectors(Ir,Pr),Ns.subVectors(Lr,Ir),nr.subVectors(Pr,Lr);let t=[0,-Us.z,Us.y,0,-Ns.z,Ns.y,0,-nr.z,nr.y,Us.z,0,-Us.x,Ns.z,0,-Ns.x,nr.z,0,-nr.x,-Us.y,Us.x,0,-Ns.y,Ns.x,0,-nr.y,nr.x,0];return!fc(t,Pr,Ir,Lr,xo)||(t=[1,0,0,0,1,0,0,0,1],!fc(t,Pr,Ir,Lr,xo))?!1:(_o.crossVectors(Us,Ns),t=[_o.x,_o.y,_o.z],fc(t,Pr,Ir,Lr,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hs=[new k,new k,new k,new k,new k,new k,new k,new k],Xi=new k,yo=new _s,Pr=new k,Ir=new k,Lr=new k,Us=new k,Ns=new k,nr=new k,wa=new k,xo=new k,_o=new k,ir=new k;function fc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ir.fromArray(i,r);let o=s.x*Math.abs(ir.x)+s.y*Math.abs(ir.y)+s.z*Math.abs(ir.z),l=e.dot(ir),u=t.dot(ir),c=n.dot(ir);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}var km=new _s,Aa=new k,dc=new k,qs=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):km.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Aa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(dc)),this.expandByPoint(Aa.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},us=new k,pc=new k,vo=new k,Bs=new k,mc=new k,Mo=new k,gc=new k,Ha=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,us)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=us.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(us.copy(this.origin).addScaledVector(this.direction,t),us.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pc.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),Bs.copy(this.origin).sub(pc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(vo),o=Bs.dot(this.direction),l=-Bs.dot(vo),u=Bs.lengthSq(),c=Math.abs(1-a*a),p,d,m,x;if(c>0)if(p=a*l-o,d=a*o-l,x=r*c,p>=0)if(d>=-x)if(d<=x){let M=1/c;p*=M,d*=M,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+u}else d=r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+u;else d=-r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+u;else d<=-x?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+d*(d+2*l)+u):d<=x?(p=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+u):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+d*(d+2*l)+u);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(pc).addScaledVector(vo,d),m}intersectSphere(e,t){us.subVectors(e.center,this.origin);let n=us.dot(this.direction),s=us.dot(us)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,u=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,us)!==null}intersectTriangle(e,t,n,s,r){mc.subVectors(t,e),Mo.subVectors(n,e),gc.crossVectors(mc,Mo);let a=this.direction.dot(gc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bs.subVectors(this.origin,e);let l=o*this.direction.dot(Mo.crossVectors(Bs,Mo));if(l<0)return null;let u=o*this.direction.dot(mc.cross(Bs));if(u<0||l+u>a)return null;let c=-o*Bs.dot(gc);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class i{constructor(e,t,n,s,r,a,o,l,u,c,p,d,m,x,M,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u,c,p,d,m,x,M,y)}set(e,t,n,s,r,a,o,l,u,c,p,d,m,x,M,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=u,g[6]=c,g[10]=p,g[14]=d,g[3]=m,g[7]=x,g[11]=M,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Dr.setFromMatrixColumn(e,0).length(),r=1/Dr.setFromMatrixColumn(e,1).length(),a=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let d=a*c,m=a*p,x=o*c,M=o*p;t[0]=l*c,t[4]=-l*p,t[8]=u,t[1]=m+x*u,t[5]=d-M*u,t[9]=-o*l,t[2]=M-d*u,t[6]=x+m*u,t[10]=a*l}else if(e.order==="YXZ"){let d=l*c,m=l*p,x=u*c,M=u*p;t[0]=d+M*o,t[4]=x*o-m,t[8]=a*u,t[1]=a*p,t[5]=a*c,t[9]=-o,t[2]=m*o-x,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*c,m=l*p,x=u*c,M=u*p;t[0]=d-M*o,t[4]=-a*p,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*c,t[9]=M-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*c,m=a*p,x=o*c,M=o*p;t[0]=l*c,t[4]=x*u-m,t[8]=d*u+M,t[1]=l*p,t[5]=M*u+d,t[9]=m*u-x,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*u,x=o*l,M=o*u;t[0]=l*c,t[4]=M-d*p,t[8]=x*p+m,t[1]=p,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=m*p+x,t[10]=d-M*p}else if(e.order==="XZY"){let d=a*l,m=a*u,x=o*l,M=o*u;t[0]=l*c,t[4]=-p,t[8]=u*c,t[1]=d*p+M,t[5]=a*c,t[9]=m*p-x,t[2]=x*p-m,t[6]=o*c,t[10]=M*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,zm)}lookAt(e,t,n){let s=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Os.crossVectors(n,wi),Os.lengthSq()===0&&(Math.abs(n.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Os.crossVectors(n,wi)),Os.normalize(),bo.crossVectors(wi,Os),s[0]=Os.x,s[4]=bo.x,s[8]=wi.x,s[1]=Os.y,s[5]=bo.y,s[9]=wi.y,s[2]=Os.z,s[6]=bo.z,s[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],c=n[1],p=n[5],d=n[9],m=n[13],x=n[2],M=n[6],y=n[10],g=n[14],S=n[3],v=n[7],A=n[11],O=n[15],U=s[0],N=s[4],ee=s[8],T=s[12],C=s[1],te=s[5],X=s[9],se=s[13],B=s[2],K=s[6],ie=s[10],q=s[14],V=s[3],Z=s[7],oe=s[11],fe=s[15];return r[0]=a*U+o*C+l*B+u*V,r[4]=a*N+o*te+l*K+u*Z,r[8]=a*ee+o*X+l*ie+u*oe,r[12]=a*T+o*se+l*q+u*fe,r[1]=c*U+p*C+d*B+m*V,r[5]=c*N+p*te+d*K+m*Z,r[9]=c*ee+p*X+d*ie+m*oe,r[13]=c*T+p*se+d*q+m*fe,r[2]=x*U+M*C+y*B+g*V,r[6]=x*N+M*te+y*K+g*Z,r[10]=x*ee+M*X+y*ie+g*oe,r[14]=x*T+M*se+y*q+g*fe,r[3]=S*U+v*C+A*B+O*V,r[7]=S*N+v*te+A*K+O*Z,r[11]=S*ee+v*X+A*ie+O*oe,r[15]=S*T+v*se+A*q+O*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],p=e[6],d=e[10],m=e[14],x=e[3],M=e[7],y=e[11],g=e[15];return x*(+r*l*p-s*u*p-r*o*d+n*u*d+s*o*m-n*l*m)+M*(+t*l*m-t*u*d+r*a*d-s*a*m+s*u*c-r*l*c)+y*(+t*u*p-t*o*m-r*a*p+n*a*m+r*o*c-n*u*c)+g*(-s*o*c-t*l*p+t*o*d+s*a*p-n*a*d+n*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],p=e[9],d=e[10],m=e[11],x=e[12],M=e[13],y=e[14],g=e[15],S=p*y*u-M*d*u+M*l*m-o*y*m-p*l*g+o*d*g,v=x*d*u-c*y*u-x*l*m+a*y*m+c*l*g-a*d*g,A=c*M*u-x*p*u+x*o*m-a*M*m-c*o*g+a*p*g,O=x*p*l-c*M*l-x*o*d+a*M*d+c*o*y-a*p*y,U=t*S+n*v+s*A+r*O;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/U;return e[0]=S*N,e[1]=(M*d*r-p*y*r-M*s*m+n*y*m+p*s*g-n*d*g)*N,e[2]=(o*y*r-M*l*r+M*s*u-n*y*u-o*s*g+n*l*g)*N,e[3]=(p*l*r-o*d*r-p*s*u+n*d*u+o*s*m-n*l*m)*N,e[4]=v*N,e[5]=(c*y*r-x*d*r+x*s*m-t*y*m-c*s*g+t*d*g)*N,e[6]=(x*l*r-a*y*r-x*s*u+t*y*u+a*s*g-t*l*g)*N,e[7]=(a*d*r-c*l*r+c*s*u-t*d*u-a*s*m+t*l*m)*N,e[8]=A*N,e[9]=(x*p*r-c*M*r-x*n*m+t*M*m+c*n*g-t*p*g)*N,e[10]=(a*M*r-x*o*r+x*n*u-t*M*u-a*n*g+t*o*g)*N,e[11]=(c*o*r-a*p*r-c*n*u+t*p*u+a*n*m-t*o*m)*N,e[12]=O*N,e[13]=(c*M*s-x*p*s+x*n*d-t*M*d-c*n*y+t*p*y)*N,e[14]=(x*o*s-a*M*s-x*n*l+t*M*l+a*n*y-t*o*y)*N,e[15]=(a*p*s-c*o*s+c*n*l-t*p*l-a*n*d+t*o*d)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,u=r*a,c=r*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,c*o+n,c*l-s*a,0,u*l-s*o,c*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,u=r+r,c=a+a,p=o+o,d=r*u,m=r*c,x=r*p,M=a*c,y=a*p,g=o*p,S=l*u,v=l*c,A=l*p,O=n.x,U=n.y,N=n.z;return s[0]=(1-(M+g))*O,s[1]=(m+A)*O,s[2]=(x-v)*O,s[3]=0,s[4]=(m-A)*U,s[5]=(1-(d+g))*U,s[6]=(y+S)*U,s[7]=0,s[8]=(x+v)*N,s[9]=(y-S)*N,s[10]=(1-(d+M))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Dr.set(s[0],s[1],s[2]).length(),a=Dr.set(s[4],s[5],s[6]).length(),o=Dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qi.copy(this);let u=1/r,c=1/a,p=1/o;return qi.elements[0]*=u,qi.elements[1]*=u,qi.elements[2]*=u,qi.elements[4]*=c,qi.elements[5]*=c,qi.elements[6]*=c,qi.elements[8]*=p,qi.elements[9]*=p,qi.elements[10]*=p,t.setFromRotationMatrix(qi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=gs){let l=this.elements,u=2*r/(t-e),c=2*r/(n-s),p=(t+e)/(t-e),d=(n+s)/(n-s),m,x;if(o===gs)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Zo)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gs){let l=this.elements,u=1/(t-e),c=1/(n-s),p=1/(a-r),d=(t+e)*u,m=(n+s)*c,x,M;if(o===gs)x=(a+r)*p,M=-2*p;else if(o===Zo)x=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Dr=new k,qi=new Mn,Hm=new k(0,0,0),zm=new k(1,1,1),Os=new k,bo=new k,wi=new k,df=new Mn,pf=new ss,ta=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],c=s[9],p=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(fi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-fi(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(fi(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fi(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(fi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-fi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pf.setFromEuler(this),this.setFromQuaternion(pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ta.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vm=0,mf=new k,Ur=new ss,fs=new Mn,So=new k,Ra=new k,Gm=new k,Wm=new ss,gf=new k(1,0,0),yf=new k(0,1,0),xf=new k(0,0,1),Xm={type:"added"},qm={type:"removed"},ai=class i extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new ta,n=new ss,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mn},normalMatrix:{value:new Dt}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(gf,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gf,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?So.copy(e):So.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(Ra,So,this.up):fs.lookAt(So,Ra,this.up),this.quaternion.setFromRotationMatrix(fs),s&&(fs.extractRotation(s.matrixWorld),Ur.setFromRotationMatrix(fs),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fs.multiply(e.parent.matrixWorld)),e.applyMatrix4(fs),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,Gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,Wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let p=l[u];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let u in o){let c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ai.DEFAULT_UP=new k(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yi=new k,ds=new k,yc=new k,ps=new k,Nr=new k,Br=new k,_f=new k,xc=new k,_c=new k,vc=new k,Eo=!1,Xr=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yi.subVectors(e,t),s.cross(Yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yi.subVectors(s,t),ds.subVectors(n,t),yc.subVectors(e,t);let a=Yi.dot(Yi),o=Yi.dot(ds),l=Yi.dot(yc),u=ds.dot(ds),c=ds.dot(yc),p=a*u-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,m=(u*l-o*c)*d,x=(a*c-o*l)*d;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ps)===null?!1:ps.x>=0&&ps.y>=0&&ps.x+ps.y<=1}static getUV(e,t,n,s,r,a,o,l){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ps)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ps.x),l.addScaledVector(a,ps.y),l.addScaledVector(o,ps.z),l)}static isFrontFacing(e,t,n,s){return Yi.subVectors(n,t),ds.subVectors(e,t),Yi.cross(ds).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),ds.subVectors(this.a,this.b),Yi.cross(ds).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Nr.subVectors(s,n),Br.subVectors(r,n),xc.subVectors(e,n);let l=Nr.dot(xc),u=Br.dot(xc);if(l<=0&&u<=0)return t.copy(n);_c.subVectors(e,s);let c=Nr.dot(_c),p=Br.dot(_c);if(c>=0&&p<=c)return t.copy(s);let d=l*p-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(Nr,a);vc.subVectors(e,r);let m=Nr.dot(vc),x=Br.dot(vc);if(x>=0&&m<=x)return t.copy(r);let M=m*u-l*x;if(M<=0&&u>=0&&x<=0)return o=u/(u-x),t.copy(n).addScaledVector(Br,o);let y=c*x-m*p;if(y<=0&&p-c>=0&&m-x>=0)return _f.subVectors(r,s),o=(p-c)/(p-c+(m-x)),t.copy(s).addScaledVector(_f,o);let g=1/(y+M+d);return a=M*g,o=d*g,t.copy(n).addScaledVector(Nr,a).addScaledVector(Br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fs={h:0,s:0,l:0},To={h:0,s:0,l:0};function Mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nn.workingColorSpace){return this.r=e,this.g=t,this.b=n,nn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nn.workingColorSpace){if(e=Um(e,1),t=fi(t,0,1),n=fi(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Mc(a,r,e+1/3),this.g=Mc(a,r,e),this.b=Mc(a,r,e-1/3)}return nn.toWorkingColorSpace(this,s),this}setStyle(e,t=ri){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){let n=Md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}copyLinearToSRGB(e){return this.r=cc(e.r),this.g=cc(e.g),this.b=cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return nn.fromWorkingColorSpace(ui.copy(this),e),Math.round(fi(ui.r*255,0,255))*65536+Math.round(fi(ui.g*255,0,255))*256+Math.round(fi(ui.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nn.workingColorSpace){nn.fromWorkingColorSpace(ui.copy(this),t);let n=ui.r,s=ui.g,r=ui.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,u,c=(o+a)/2;if(o===a)l=0,u=0;else{let p=a-o;switch(u=c<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=nn.workingColorSpace){return nn.fromWorkingColorSpace(ui.copy(this),t),e.r=ui.r,e.g=ui.g,e.b=ui.b,e}getStyle(e=ri){nn.fromWorkingColorSpace(ui.copy(this),e);let t=ui.r,n=ui.g,s=ui.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fs),this.setHSL(Fs.h+e,Fs.s+t,Fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fs),e.getHSL(To);let n=oc(Fs.h,To.h,t),s=oc(Fs.s,To.s,t),r=oc(Fs.l,To.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ui=new Et;Et.NAMES=Md;var Ym=0,Ys=class extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=Kr,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Bc,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(n.blending=this.blending),this.side!==Ws&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nc&&(n.blendSrc=this.blendSrc),this.blendDst!==Bc&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},In=class extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Hn=new k,wo=new Xe,ei=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=af,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix3(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ta(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),n=xi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),n=xi(n,this.array),s=xi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),n=xi(n,this.array),s=xi(s,this.array),r=xi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==af&&(e.usage=this.usage),e}};var tl=class extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var nl=class extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ln=class extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}};var $m=0,Bi=new Mn,bc=new ai,Or=new k,Ai=new _s,Ca=new _s,jn=new k,oi=class i extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?nl:tl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,t,n){return Bi.makeTranslation(e,t,n),this.applyMatrix4(Bi),this}scale(e,t,n){return Bi.makeScale(e,t,n),this.applyMatrix4(Bi),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ai.setFromBufferAttribute(r),this.morphTargetsRelative?(jn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(jn),jn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(jn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?(jn.addVectors(Ai.min,Ca.min),Ai.expandByPoint(jn),jn.addVectors(Ai.max,Ca.max),Ai.expandByPoint(jn)):(Ai.expandByPoint(Ca.min),Ai.expandByPoint(Ca.max))}Ai.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)jn.fromBufferAttribute(o,u),l&&(Or.fromBufferAttribute(e,u),jn.add(Or)),s=Math.max(s,n.distanceToSquared(jn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,u=[],c=[];for(let C=0;C<o;C++)u[C]=new k,c[C]=new k;let p=new k,d=new k,m=new k,x=new Xe,M=new Xe,y=new Xe,g=new k,S=new k;function v(C,te,X){p.fromArray(s,C*3),d.fromArray(s,te*3),m.fromArray(s,X*3),x.fromArray(a,C*2),M.fromArray(a,te*2),y.fromArray(a,X*2),d.sub(p),m.sub(p),M.sub(x),y.sub(x);let se=1/(M.x*y.y-y.x*M.y);isFinite(se)&&(g.copy(d).multiplyScalar(y.y).addScaledVector(m,-M.y).multiplyScalar(se),S.copy(m).multiplyScalar(M.x).addScaledVector(d,-y.x).multiplyScalar(se),u[C].add(g),u[te].add(g),u[X].add(g),c[C].add(S),c[te].add(S),c[X].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let C=0,te=A.length;C<te;++C){let X=A[C],se=X.start,B=X.count;for(let K=se,ie=se+B;K<ie;K+=3)v(n[K+0],n[K+1],n[K+2])}let O=new k,U=new k,N=new k,ee=new k;function T(C){N.fromArray(r,C*3),ee.copy(N);let te=u[C];O.copy(te),O.sub(N.multiplyScalar(N.dot(te))).normalize(),U.crossVectors(ee,te);let se=U.dot(c[C])<0?-1:1;l[C*4]=O.x,l[C*4+1]=O.y,l[C*4+2]=O.z,l[C*4+3]=se}for(let C=0,te=A.length;C<te;++C){let X=A[C],se=X.start,B=X.count;for(let K=se,ie=se+B;K<ie;K+=3)T(n[K+0]),T(n[K+1]),T(n[K+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,u=new k,c=new k,p=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){let x=e.getX(d+0),M=e.getX(d+1),y=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,y),c.subVectors(a,r),p.subVectors(s,r),c.cross(p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),o.add(c),l.add(c),u.add(c),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(y,u.x,u.y,u.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),p.subVectors(s,r),c.cross(p),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jn.fromBufferAttribute(e,t),jn.normalize(),e.setXYZ(t,jn.x,jn.y,jn.z)}toNonIndexed(){function e(o,l){let u=o.array,c=o.itemSize,p=o.normalized,d=new u.constructor(l.length*c),m=0,x=0;for(let M=0,y=l.length;M<y;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*c;for(let g=0;g<c;g++)d[x++]=u[m++]}return new ei(d,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],u=e(l,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let l=[],u=r[o];for(let c=0,p=u.length;c<p;c++){let d=u[c],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let p=0,d=u.length;p<d;p++){let m=u[p];c.push(m.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let u in s){let c=s[u];this.setAttribute(u,c.clone(t))}let r=e.morphAttributes;for(let u in r){let c=[],p=r[u];for(let d=0,m=p.length;d<m;d++)c.push(p[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,c=a.length;u<c;u++){let p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vf=new Mn,sr=new Ha,Ao=new qs,Mf=new k,Fr=new k,kr=new k,Hr=new k,Sc=new k,Ro=new k,Co=new Xe,Po=new Xe,Io=new Xe,bf=new k,Sf=new k,Ef=new k,Lo=new k,Do=new k,Ze=class extends ai{constructor(e=new oi,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ro.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let c=o[l],p=r[l];c!==0&&(Sc.fromBufferAttribute(p,e),a?Ro.addScaledVector(Sc,c):Ro.addScaledVector(Sc.sub(t),c))}t.add(Ro)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),sr.copy(e.ray).recast(e.near),!(Ao.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Ao,Mf)===null||sr.origin.distanceToSquared(Mf)>(e.far-e.near)**2))&&(vf.copy(r).invert(),sr.copy(e.ray).applyMatrix4(vf),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,p=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){let y=d[x],g=a[y.materialIndex],S=Math.max(y.start,m.start),v=Math.min(o.count,Math.min(y.start+y.count,m.start+m.count));for(let A=S,O=v;A<O;A+=3){let U=o.getX(A),N=o.getX(A+1),ee=o.getX(A+2);s=Uo(this,g,e,n,u,c,p,U,N,ee),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let y=x,g=M;y<g;y+=3){let S=o.getX(y),v=o.getX(y+1),A=o.getX(y+2);s=Uo(this,a,e,n,u,c,p,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){let y=d[x],g=a[y.materialIndex],S=Math.max(y.start,m.start),v=Math.min(l.count,Math.min(y.start+y.count,m.start+m.count));for(let A=S,O=v;A<O;A+=3){let U=A,N=A+1,ee=A+2;s=Uo(this,g,e,n,u,c,p,U,N,ee),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let y=x,g=M;y<g;y+=3){let S=y,v=y+1,A=y+2;s=Uo(this,a,e,n,u,c,p,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function Km(i,e,t,n,s,r,a,o){let l;if(e.side===vi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ws,o),l===null)return null;Do.copy(o),Do.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Do);return u<t.near||u>t.far?null:{distance:u,point:Do.clone(),object:i}}function Uo(i,e,t,n,s,r,a,o,l,u){i.getVertexPosition(o,Fr),i.getVertexPosition(l,kr),i.getVertexPosition(u,Hr);let c=Km(i,e,t,n,Fr,kr,Hr,Lo);if(c){s&&(Co.fromBufferAttribute(s,o),Po.fromBufferAttribute(s,l),Io.fromBufferAttribute(s,u),c.uv=Xr.getInterpolation(Lo,Fr,kr,Hr,Co,Po,Io,new Xe)),r&&(Co.fromBufferAttribute(r,o),Po.fromBufferAttribute(r,l),Io.fromBufferAttribute(r,u),c.uv1=Xr.getInterpolation(Lo,Fr,kr,Hr,Co,Po,Io,new Xe),c.uv2=c.uv1),a&&(bf.fromBufferAttribute(a,o),Sf.fromBufferAttribute(a,l),Ef.fromBufferAttribute(a,u),c.normal=Xr.getInterpolation(Lo,Fr,kr,Hr,bf,Sf,Ef,new k),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let p={a:o,b:l,c:u,normal:new k,materialIndex:0};Xr.getNormal(Fr,kr,Hr,p.normal),c.face=p}return c}var Xn=class i extends oi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],u=[],c=[],p=[],d=0,m=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(u,3)),this.setAttribute("normal",new ln(c,3)),this.setAttribute("uv",new ln(p,2));function x(M,y,g,S,v,A,O,U,N,ee,T){let C=A/N,te=O/ee,X=A/2,se=O/2,B=U/2,K=N+1,ie=ee+1,q=0,V=0,Z=new k;for(let oe=0;oe<ie;oe++){let fe=oe*te-se;for(let be=0;be<K;be++){let ne=be*C-X;Z[M]=ne*S,Z[y]=fe*v,Z[g]=B,u.push(Z.x,Z.y,Z.z),Z[M]=0,Z[y]=0,Z[g]=U>0?1:-1,c.push(Z.x,Z.y,Z.z),p.push(be/N),p.push(1-oe/ee),q+=1}}for(let oe=0;oe<ee;oe++)for(let fe=0;fe<N;fe++){let be=d+fe+K*oe,ne=d+fe+K*(oe+1),de=d+(fe+1)+K*(oe+1),Te=d+(fe+1)+K*oe;l.push(be,ne,Te),l.push(ne,de,Te),V+=6}o.addGroup(m,V,T),m+=V,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function na(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pi(i){let e={};for(let t=0;t<i.length;t++){let n=na(i[t]);for(let s in n)e[s]=n[s]}return e}function Zm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bd(i){return i.getRenderTarget()===null?i.outputColorSpace:nn.workingColorSpace}var Jm={clone:na,merge:pi},jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vs=class extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jm,this.fragmentShader=Qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=Zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},il=class extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=gs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=class extends il{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zc*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ac*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zr=-90,Vr=1,Xc=class extends ai{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gi(zr,Vr,e,t);s.layers=this.layers,this.add(s);let r=new gi(zr,Vr,e,t);r.layers=this.layers,this.add(r);let a=new gi(zr,Vr,e,t);a.layers=this.layers,this.add(a);let o=new gi(zr,Vr,e,t);o.layers=this.layers,this.add(o);let l=new gi(zr,Vr,e,t);l.layers=this.layers,this.add(l);let u=new gi(zr,Vr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let u of t)this.remove(u);if(e===gs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,u,c]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,c),e.setRenderTarget(p,d,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},sl=class extends ki{constructor(e,t,n,s,r,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,n,s,r,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qc=class extends xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(La("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ur?ri:Fi),this.texture=new sl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new vs({name:"CubemapFromEquirect",uniforms:na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vi,blending:zs});r.uniforms.tEquirect.value=t;let a=new Ze(s,r),o=t.minFilter;return t.minFilter===Fa&&(t.minFilter=Oi),new Xc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ec=new k,eg=new k,tg=new Dt,$i=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ec.subVectors(n,t).cross(eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ec),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tg.getNormalMatrix(e),s=this.coplanarPoint(Ec).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new qs,No=new k,Va=class{constructor(e=new $i,t=new $i,n=new $i,s=new $i,r=new $i,a=new $i){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gs){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],u=s[4],c=s[5],p=s[6],d=s[7],m=s[8],x=s[9],M=s[10],y=s[11],g=s[12],S=s[13],v=s[14],A=s[15];if(n[0].setComponents(l-r,d-u,y-m,A-g).normalize(),n[1].setComponents(l+r,d+u,y+m,A+g).normalize(),n[2].setComponents(l+a,d+c,y+x,A+S).normalize(),n[3].setComponents(l-a,d-c,y-x,A-S).normalize(),n[4].setComponents(l-o,d-p,y-M,A-v).normalize(),t===gs)n[5].setComponents(l+o,d+p,y+M,A+v).normalize();else if(t===Zo)n[5].setComponents(o,p,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(No.x=s.normal.x>0?e.max.x:e.min.x,No.y=s.normal.y>0?e.max.y:e.min.y,No.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ng(i,e){let t=e.isWebGL2,n=new WeakMap;function s(u,c){let p=u.array,d=u.usage,m=p.byteLength,x=i.createBuffer();i.bindBuffer(c,x),i.bufferData(c,p,d),u.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:m}}function r(u,c,p){let d=c.array,m=c._updateRange,x=c.updateRanges;if(i.bindBuffer(p,u),m.count===-1&&x.length===0&&i.bufferSubData(p,0,d),x.length!==0){for(let M=0,y=x.length;M<y;M++){let g=x[M];t?i.bufferSubData(p,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count):i.bufferSubData(p,g.start*d.BYTES_PER_ELEMENT,d.subarray(g.start,g.start+g.count))}c.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);let c=n.get(u);c&&(i.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){let d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);let p=n.get(u);if(p===void 0)n.set(u,s(u,c));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,u,c),p.version=u.version}}return{get:a,remove:o,update:l}}var rs=class i extends oi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),u=o+1,c=l+1,p=e/o,d=t/l,m=[],x=[],M=[],y=[];for(let g=0;g<c;g++){let S=g*d-a;for(let v=0;v<u;v++){let A=v*p-r;x.push(A,-S,0),M.push(0,0,1),y.push(v/o),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){let v=S+u*g,A=S+u*(g+1),O=S+1+u*(g+1),U=S+1+u*g;m.push(v,A,U),m.push(A,O,U)}this.setIndex(m),this.setAttribute("position",new ln(x,3)),this.setAttribute("normal",new ln(M,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sg=`#ifdef USE_ALPHAHASH
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
#endif`,rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cg=`#ifdef USE_AOMAP
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
#endif`,hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ug=`#ifdef USE_BATCHING
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
#endif`,fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gg=`#ifdef USE_IRIDESCENCE
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
#endif`,yg=`#ifdef USE_BUMPMAP
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wg=`#define PI 3.141592653589793
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
} // validated`,Ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rg=`vec3 transformedNormal = objectNormal;
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
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`
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
}`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wg=`#ifdef USE_GRADIENTMAP
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
}`,Xg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
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
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t0=`PhysicalMaterial material;
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
#endif`,n0=`struct PhysicalMaterial {
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
}`,i0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
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
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,_0=`#ifdef USE_MORPHTARGETS
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
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,w0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z0=`float getShadowMask() {
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
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iy=`uniform sampler2D t2D;
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`#include <common>
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
}`,cy=`#if DEPTH_PACKING == 3200
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
}`,hy=`#define DISTANCE
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
}`,uy=`#define DISTANCE
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`uniform float scale;
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,yy=`uniform vec3 diffuse;
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
}`,xy=`#define LAMBERT
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
}`,_y=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,My=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,Sy=`#define NORMAL
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
}`,Ey=`#define PHONG
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
}`,Ty=`#define PHONG
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
}`,wy=`#define STANDARD
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
}`,Ay=`#define STANDARD
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
}`,Ry=`#define TOON
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
}`,Cy=`#define TOON
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
}`,Py=`uniform float size;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Dy=`uniform vec3 color;
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
}`,Uy=`uniform float rotation;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:ig,alphahash_pars_fragment:sg,alphamap_fragment:rg,alphamap_pars_fragment:ag,alphatest_fragment:og,alphatest_pars_fragment:lg,aomap_fragment:cg,aomap_pars_fragment:hg,batching_pars_vertex:ug,batching_vertex:fg,begin_vertex:dg,beginnormal_vertex:pg,bsdfs:mg,iridescence_fragment:gg,bumpmap_pars_fragment:yg,clipping_planes_fragment:xg,clipping_planes_pars_fragment:_g,clipping_planes_pars_vertex:vg,clipping_planes_vertex:Mg,color_fragment:bg,color_pars_fragment:Sg,color_pars_vertex:Eg,color_vertex:Tg,common:wg,cube_uv_reflection_fragment:Ag,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Cg,displacementmap_vertex:Pg,emissivemap_fragment:Ig,emissivemap_pars_fragment:Lg,colorspace_fragment:Dg,colorspace_pars_fragment:Ug,envmap_fragment:Ng,envmap_common_pars_fragment:Bg,envmap_pars_fragment:Og,envmap_pars_vertex:Fg,envmap_physical_pars_fragment:Zg,envmap_vertex:kg,fog_vertex:Hg,fog_pars_vertex:zg,fog_fragment:Vg,fog_pars_fragment:Gg,gradientmap_pars_fragment:Wg,lightmap_fragment:Xg,lightmap_pars_fragment:qg,lights_lambert_fragment:Yg,lights_lambert_pars_fragment:$g,lights_pars_begin:Kg,lights_toon_fragment:Jg,lights_toon_pars_fragment:jg,lights_phong_fragment:Qg,lights_phong_pars_fragment:e0,lights_physical_fragment:t0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:s0,lights_fragment_end:r0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:h0,map_pars_fragment:u0,map_particle_fragment:f0,map_particle_pars_fragment:d0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphcolor_vertex:g0,morphnormal_vertex:y0,morphtarget_pars_vertex:x0,morphtarget_vertex:_0,normal_fragment_begin:v0,normal_fragment_maps:M0,normal_pars_fragment:b0,normal_pars_vertex:S0,normal_vertex:E0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:w0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:C0,opaque_fragment:P0,packing:I0,premultiplied_alpha_fragment:L0,project_vertex:D0,dithering_fragment:U0,dithering_pars_fragment:N0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:k0,shadowmap_vertex:H0,shadowmask_pars_fragment:z0,skinbase_vertex:V0,skinning_pars_vertex:G0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:$0,tonemapping_pars_fragment:K0,transmission_fragment:Z0,transmission_pars_fragment:J0,uv_pars_fragment:j0,uv_pars_vertex:Q0,uv_vertex:ey,worldpos_vertex:ty,background_vert:ny,background_frag:iy,backgroundCube_vert:sy,backgroundCube_frag:ry,cube_vert:ay,cube_frag:oy,depth_vert:ly,depth_frag:cy,distanceRGBA_vert:hy,distanceRGBA_frag:uy,equirect_vert:fy,equirect_frag:dy,linedashed_vert:py,linedashed_frag:my,meshbasic_vert:gy,meshbasic_frag:yy,meshlambert_vert:xy,meshlambert_frag:_y,meshmatcap_vert:vy,meshmatcap_frag:My,meshnormal_vert:by,meshnormal_frag:Sy,meshphong_vert:Ey,meshphong_frag:Ty,meshphysical_vert:wy,meshphysical_frag:Ay,meshtoon_vert:Ry,meshtoon_frag:Cy,points_vert:Py,points_frag:Iy,shadow_vert:Ly,shadow_frag:Dy,sprite_vert:Uy,sprite_frag:Ny},Ue={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},is={basic:{uniforms:pi([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:pi([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:pi([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:pi([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:pi([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:pi([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:pi([Ue.points,Ue.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:pi([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:pi([Ue.common,Ue.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:pi([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:pi([Ue.sprite,Ue.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:pi([Ue.common,Ue.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:pi([Ue.lights,Ue.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};is.physical={uniforms:pi([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var Bo={r:0,b:0,g:0};function By(i,e,t,n,s,r,a){let o=new Et(0),l=r===!0?0:1,u,c,p=null,d=0,m=null;function x(y,g){let S=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?M(o,l):v&&v.isColor&&(M(v,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Tl)?(c===void 0&&(c=new Ze(new Xn(1,1,1),new vs({name:"BackgroundCubeMaterial",uniforms:na(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(O,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=nn.getTransfer(v.colorSpace)!==vn,(p!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Ze(new rs(2,2),new vs({name:"BackgroundMaterial",uniforms:na(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=nn.getTransfer(v.colorSpace)!==vn,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||d!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=v,d=v.version,m=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function M(y,g){y.getRGB(Bo,bd(i)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(y,g=1){o.set(y),l=g,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,M(o,l)},render:x}}function Oy(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=y(null),u=l,c=!1;function p(B,K,ie,q,V){let Z=!1;if(a){let oe=M(q,ie,K);u!==oe&&(u=oe,m(u.object)),Z=g(B,q,ie,V),Z&&S(B,q,ie,V)}else{let oe=K.wireframe===!0;(u.geometry!==q.id||u.program!==ie.id||u.wireframe!==oe)&&(u.geometry=q.id,u.program=ie.id,u.wireframe=oe,Z=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,ee(B,K,ie,q),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(B){return n.isWebGL2?i.bindVertexArray(B):r.bindVertexArrayOES(B)}function x(B){return n.isWebGL2?i.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function M(B,K,ie){let q=ie.wireframe===!0,V=o[B.id];V===void 0&&(V={},o[B.id]=V);let Z=V[K.id];Z===void 0&&(Z={},V[K.id]=Z);let oe=Z[q];return oe===void 0&&(oe=y(d()),Z[q]=oe),oe}function y(B){let K=[],ie=[],q=[];for(let V=0;V<s;V++)K[V]=0,ie[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ie,attributeDivisors:q,object:B,attributes:{},index:null}}function g(B,K,ie,q){let V=u.attributes,Z=K.attributes,oe=0,fe=ie.getAttributes();for(let be in fe)if(fe[be].location>=0){let de=V[be],Te=Z[be];if(Te===void 0&&(be==="instanceMatrix"&&B.instanceMatrix&&(Te=B.instanceMatrix),be==="instanceColor"&&B.instanceColor&&(Te=B.instanceColor)),de===void 0||de.attribute!==Te||Te&&de.data!==Te.data)return!0;oe++}return u.attributesNum!==oe||u.index!==q}function S(B,K,ie,q){let V={},Z=K.attributes,oe=0,fe=ie.getAttributes();for(let be in fe)if(fe[be].location>=0){let de=Z[be];de===void 0&&(be==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),be==="instanceColor"&&B.instanceColor&&(de=B.instanceColor));let Te={};Te.attribute=de,de&&de.data&&(Te.data=de.data),V[be]=Te,oe++}u.attributes=V,u.attributesNum=oe,u.index=q}function v(){let B=u.newAttributes;for(let K=0,ie=B.length;K<ie;K++)B[K]=0}function A(B){O(B,0)}function O(B,K){let ie=u.newAttributes,q=u.enabledAttributes,V=u.attributeDivisors;ie[B]=1,q[B]===0&&(i.enableVertexAttribArray(B),q[B]=1),V[B]!==K&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,K),V[B]=K)}function U(){let B=u.newAttributes,K=u.enabledAttributes;for(let ie=0,q=K.length;ie<q;ie++)K[ie]!==B[ie]&&(i.disableVertexAttribArray(ie),K[ie]=0)}function N(B,K,ie,q,V,Z,oe){oe===!0?i.vertexAttribIPointer(B,K,ie,V,Z):i.vertexAttribPointer(B,K,ie,q,V,Z)}function ee(B,K,ie,q){if(n.isWebGL2===!1&&(B.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let V=q.attributes,Z=ie.getAttributes(),oe=K.defaultAttributeValues;for(let fe in Z){let be=Z[fe];if(be.location>=0){let ne=V[fe];if(ne===void 0&&(fe==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),fe==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor)),ne!==void 0){let de=ne.normalized,Te=ne.itemSize,Pe=t.get(ne);if(Pe===void 0)continue;let He=Pe.buffer,gt=Pe.type,ot=Pe.bytesPerElement,et=n.isWebGL2===!0&&(gt===i.INT||gt===i.UNSIGNED_INT||ne.gpuType===hd);if(ne.isInterleavedBufferAttribute){let Ee=ne.data,J=Ee.stride,Wt=ne.offset;if(Ee.isInstancedInterleavedBuffer){for(let Je=0;Je<be.locationSize;Je++)O(be.location+Je,Ee.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Je=0;Je<be.locationSize;Je++)A(be.location+Je);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Je=0;Je<be.locationSize;Je++)N(be.location+Je,Te/be.locationSize,gt,de,J*ot,(Wt+Te/be.locationSize*Je)*ot,et)}else{if(ne.isInstancedBufferAttribute){for(let Ee=0;Ee<be.locationSize;Ee++)O(be.location+Ee,ne.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ee=0;Ee<be.locationSize;Ee++)A(be.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Ee=0;Ee<be.locationSize;Ee++)N(be.location+Ee,Te/be.locationSize,gt,de,Te*ot,Te/be.locationSize*Ee*ot,et)}}else if(oe!==void 0){let de=oe[fe];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(be.location,de);break;case 3:i.vertexAttrib3fv(be.location,de);break;case 4:i.vertexAttrib4fv(be.location,de);break;default:i.vertexAttrib1fv(be.location,de)}}}}U()}function T(){X();for(let B in o){let K=o[B];for(let ie in K){let q=K[ie];for(let V in q)x(q[V].object),delete q[V];delete K[ie]}delete o[B]}}function C(B){if(o[B.id]===void 0)return;let K=o[B.id];for(let ie in K){let q=K[ie];for(let V in q)x(q[V].object),delete q[V];delete K[ie]}delete o[B.id]}function te(B){for(let K in o){let ie=o[K];if(ie[B.id]===void 0)continue;let q=ie[B.id];for(let V in q)x(q[V].object),delete q[V];delete ie[B.id]}}function X(){se(),c=!0,u!==l&&(u=l,m(u.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:X,resetDefaultState:se,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:te,initAttributes:v,enableAttribute:A,disableUnusedAttributes:U}}function Fy(i,e,t,n){let s=n.isWebGL2,r;function a(c){r=c}function o(c,p){i.drawArrays(r,c,p),t.update(p,r,1)}function l(c,p,d){if(d===0)return;let m,x;if(s)m=i,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](r,c,p,d),t.update(p,r,d)}function u(c,p,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<d;x++)this.render(c[x],p[x]);else{m.multiDrawArraysWEBGL(r,c,0,p,0,d);let x=0;for(let M=0;M<d;M++)x+=p[M];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function ky(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,A=a||e.has("OES_texture_float"),O=v&&A,U=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:p,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:O,maxSamples:U}}function Hy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new $i,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let m=p.length!==0||d||n!==0||s;return s=d,n=p.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=c(p,d,0)},this.setState=function(p,d,m){let x=p.clippingPlanes,M=p.clipIntersection,y=p.clipShadows,g=i.get(p);if(!s||x===null||x.length===0||r&&!y)r?c(null):u();else{let S=r?0:n,v=S*4,A=g.clippingState||null;l.value=A,A=c(x,d,v,m);for(let O=0;O!==v;++O)A[O]=t[O];g.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(p,d,m,x){let M=p!==null?p.length:0,y=null;if(M!==0){if(y=l.value,x!==!0||y===null){let g=m+M*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(y===null||y.length<g)&&(y=new Float32Array(g));for(let v=0,A=m;v!==M;++v,A+=4)a.copy(p[v]).applyMatrix4(S,o),a.normal.toArray(y,A),y[A+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function zy(i){let e=new WeakMap;function t(a,o){return o===Oc?a.mapping=jr:o===Fc&&(a.mapping=Qr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Oc||o===Fc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let u=new qc(l.height/2);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",s),t(u.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var rl=class extends il{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qr=4,Tf=[.125,.215,.35,.446,.526,.582],lr=20,Tc=new rl,wf=new Et,wc=null,Ac=0,Rc=0,ar=(1+Math.sqrt(5))/2,Gr=1/ar,Af=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,ar,Gr),new k(0,ar,-Gr),new k(Gr,0,ar),new k(-Gr,0,ar),new k(ar,Gr,0),new k(-ar,Gr,0)],al=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wc,Ac,Rc),e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:ka,format:Zi,colorSpace:ys,depthBuffer:!1},s=Rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vy(r)),this._blurMaterial=Gy(r,e,t)}return s}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,Tc)}_sceneToCubeUV(e,t,n,s){let o=new gi(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,p=c.autoClear,d=c.toneMapping;c.getClearColor(wf),c.toneMapping=Vs,c.autoClear=!1;let m=new In({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1}),x=new Ze(new Xn,m),M=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,M=!0):(m.color.copy(wf),M=!0);for(let g=0;g<6;g++){let S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(u[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,u[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,u[g]));let v=this._cubeSize;Oo(s,S*v,g>2?v:0,v,v),c.setRenderTarget(s),M&&c.render(x,o),c.render(e,o)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=d,c.autoClear=p,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===jr||e.mapping===Qr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Tc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Af[(s-1)%Af.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,p=new Ze(this._lodPlanes[s],u),d=u.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*lr-1),M=r/x,y=isFinite(r)?1+Math.floor(c*M):lr;y>lr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${lr}`);let g=[],S=0;for(let N=0;N<lr;++N){let ee=N/M,T=Math.exp(-ee*ee/2);g.push(T),N===0?S+=T:N<y&&(S+=2*T)}for(let N=0;N<g.length;N++)g[N]=g[N]/S;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-n;let A=this._sizeLods[s],O=3*A*(s>v-qr?s-v+qr:0),U=4*(this._cubeSize-A);Oo(t,O,U,3*A,2*A),l.setRenderTarget(t),l.render(p,Tc)}};function Vy(i){let e=[],t=[],n=[],s=i,r=i-qr+1+Tf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-qr?l=Tf[a-i+qr-1]:a===0&&(l=0),n.push(l);let u=1/(o-2),c=-u,p=1+u,d=[c,c,p,c,p,p,c,c,p,p,c,p],m=6,x=6,M=3,y=2,g=1,S=new Float32Array(M*x*m),v=new Float32Array(y*x*m),A=new Float32Array(g*x*m);for(let U=0;U<m;U++){let N=U%3*2/3-1,ee=U>2?0:-1,T=[N,ee,0,N+2/3,ee,0,N+2/3,ee+1,0,N,ee,0,N+2/3,ee+1,0,N,ee+1,0];S.set(T,M*x*U),v.set(d,y*x*U);let C=[U,U,U,U,U,U];A.set(C,g*x*U)}let O=new oi;O.setAttribute("position",new ei(S,M)),O.setAttribute("uv",new ei(v,y)),O.setAttribute("faceIndex",new ei(A,g)),e.push(O),s>qr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rf(i,e,t){let n=new xs(i,e,t);return n.texture.mapping=Tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gy(i,e,t){let n=new Float32Array(lr),s=new k(0,1,0);return new vs({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Cf(){return new vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Pf(){return new vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Ph(){return`

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
	`}function Wy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,u=l===Oc||l===Fc,c=l===jr||l===Qr;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new al(i)),p=u?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{let p=o.image;if(u&&p&&p.height>0||c&&p&&s(p)){t===null&&(t=new al(i));let d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function r(o){let l=o.target;l.removeEventListener("dispose",r);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Xy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qy(i,e,t,n){let s={},r=new WeakMap;function a(p){let d=p.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let M=d.morphAttributes[x];for(let y=0,g=M.length;y<g;y++)e.remove(M[y])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(p){let d=p.attributes;for(let x in d)e.update(d[x],i.ARRAY_BUFFER);let m=p.morphAttributes;for(let x in m){let M=m[x];for(let y=0,g=M.length;y<g;y++)e.update(M[y],i.ARRAY_BUFFER)}}function u(p){let d=[],m=p.index,x=p.attributes.position,M=0;if(m!==null){let S=m.array;M=m.version;for(let v=0,A=S.length;v<A;v+=3){let O=S[v+0],U=S[v+1],N=S[v+2];d.push(O,U,U,N,N,O)}}else if(x!==void 0){let S=x.array;M=x.version;for(let v=0,A=S.length/3-1;v<A;v+=3){let O=v+0,U=v+1,N=v+2;d.push(O,U,U,N,N,O)}}else return;let y=new(vd(d)?nl:tl)(d,1);y.version=M;let g=r.get(p);g&&e.remove(g),r.set(p,y)}function c(p){let d=r.get(p);if(d){let m=p.index;m!==null&&d.version<m.version&&u(p)}else u(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:c}}function Yy(i,e,t,n){let s=n.isWebGL2,r;function a(m){r=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function c(m,x){i.drawElements(r,x,o,m*l),t.update(x,r,1)}function p(m,x,M){if(M===0)return;let y,g;if(s)y=i,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](r,x,o,m*l,M),t.update(x,r,M)}function d(m,x,M){if(M===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<M;g++)this.render(m[g]/l,x[g]);else{y.multiDrawElementsWEBGL(r,x,0,o,m,0,M);let g=0;for(let S=0;S<M;S++)g+=x[S];t.update(g,r,1)}}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=p,this.renderMultiDraw=d}function $y(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ky(i,e){return i[0]-e[0]}function Zy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Jy(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Qn,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,p){let d=u.morphTargetInfluences;if(e.isWebGL2===!0){let m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=m!==void 0?m.length:0,M=r.get(c);if(M===void 0||M.count!==x){let B=function(){X.dispose(),r.delete(c),c.removeEventListener("dispose",B)};M!==void 0&&M.texture.dispose();let S=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,O=c.morphAttributes.position||[],U=c.morphAttributes.normal||[],N=c.morphAttributes.color||[],ee=0;S===!0&&(ee=1),v===!0&&(ee=2),A===!0&&(ee=3);let T=c.attributes.position.count*ee,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let te=new Float32Array(T*C*4*x),X=new el(te,T,C,x);X.type=Hs,X.needsUpdate=!0;let se=ee*4;for(let K=0;K<x;K++){let ie=O[K],q=U[K],V=N[K],Z=T*C*4*K;for(let oe=0;oe<ie.count;oe++){let fe=oe*se;S===!0&&(a.fromBufferAttribute(ie,oe),te[Z+fe+0]=a.x,te[Z+fe+1]=a.y,te[Z+fe+2]=a.z,te[Z+fe+3]=0),v===!0&&(a.fromBufferAttribute(q,oe),te[Z+fe+4]=a.x,te[Z+fe+5]=a.y,te[Z+fe+6]=a.z,te[Z+fe+7]=0),A===!0&&(a.fromBufferAttribute(V,oe),te[Z+fe+8]=a.x,te[Z+fe+9]=a.y,te[Z+fe+10]=a.z,te[Z+fe+11]=V.itemSize===4?a.w:1)}}M={count:x,texture:X,size:new Xe(T,C)},r.set(c,M),c.addEventListener("dispose",B)}let y=0;for(let S=0;S<d.length;S++)y+=d[S];let g=c.morphTargetsRelative?1:1-y;p.getUniforms().setValue(i,"morphTargetBaseInfluence",g),p.getUniforms().setValue(i,"morphTargetInfluences",d),p.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let m=d===void 0?0:d.length,x=n[c.id];if(x===void 0||x.length!==m){x=[];for(let v=0;v<m;v++)x[v]=[v,0];n[c.id]=x}for(let v=0;v<m;v++){let A=x[v];A[0]=v,A[1]=d[v]}x.sort(Zy);for(let v=0;v<8;v++)v<m&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Ky);let M=c.morphAttributes.position,y=c.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let A=o[v],O=A[0],U=A[1];O!==Number.MAX_SAFE_INTEGER&&U?(M&&c.getAttribute("morphTarget"+v)!==M[O]&&c.setAttribute("morphTarget"+v,M[O]),y&&c.getAttribute("morphNormal"+v)!==y[O]&&c.setAttribute("morphNormal"+v,y[O]),s[v]=U,g+=U):(M&&c.hasAttribute("morphTarget"+v)===!0&&c.deleteAttribute("morphTarget"+v),y&&c.hasAttribute("morphNormal"+v)===!0&&c.deleteAttribute("morphNormal"+v),s[v]=0)}let S=c.morphTargetsRelative?1:1-g;p.getUniforms().setValue(i,"morphTargetBaseInfluence",S),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function jy(i,e,t,n){let s=new WeakMap;function r(l){let u=n.render.frame,c=l.geometry,p=e.get(l,c);if(s.get(p)!==u&&(e.update(p),s.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return p}function a(){s=new WeakMap}function o(l){let u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}var ol=class extends ki{constructor(e,t,n,s,r,a,o,l,u,c){if(c=c!==void 0?c:hr,c!==hr&&c!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===hr&&(n=ks),n===void 0&&c===ea&&(n=cr),super(null,s,r,a,o,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mi,this.minFilter=l!==void 0?l:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ed=new ki,Td=new ol(1,1);Td.compareFunction=_d;var wd=new el,Ad=new Wc,Rd=new sl,If=[],Lf=[],Df=new Float32Array(16),Uf=new Float32Array(9),Nf=new Float32Array(4);function oa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=If[s];if(r===void 0&&(r=new Float32Array(s),If[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Al(i,e){let t=Lf[e];t===void 0&&(t=new Int32Array(e),Lf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;i.uniform2fv(this.addr,e),Yn(t,e)}}function tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qn(t,e))return;i.uniform3fv(this.addr,e),Yn(t,e)}}function nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;i.uniform4fv(this.addr,e),Yn(t,e)}}function ix(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yn(t,e)}else{if(qn(t,n))return;Nf.set(n),i.uniformMatrix2fv(this.addr,!1,Nf),Yn(t,n)}}function sx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yn(t,e)}else{if(qn(t,n))return;Uf.set(n),i.uniformMatrix3fv(this.addr,!1,Uf),Yn(t,n)}}function rx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yn(t,e)}else{if(qn(t,n))return;Df.set(n),i.uniformMatrix4fv(this.addr,!1,Df),Yn(t,n)}}function ax(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;i.uniform2iv(this.addr,e),Yn(t,e)}}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qn(t,e))return;i.uniform3iv(this.addr,e),Yn(t,e)}}function cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;i.uniform4iv(this.addr,e),Yn(t,e)}}function hx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;i.uniform2uiv(this.addr,e),Yn(t,e)}}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qn(t,e))return;i.uniform3uiv(this.addr,e),Yn(t,e)}}function dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;i.uniform4uiv(this.addr,e),Yn(t,e)}}function px(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Td:Ed;t.setTexture2D(e||r,s)}function mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ad,s)}function gx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Rd,s)}function yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wd,s)}function xx(i){switch(i){case 5126:return Qy;case 35664:return ex;case 35665:return tx;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ax;case 35667:case 35671:return ox;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return ux;case 36295:return fx;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return yx}}function _x(i,e){i.uniform1fv(this.addr,e)}function vx(i,e){let t=oa(e,this.size,2);i.uniform2fv(this.addr,t)}function Mx(i,e){let t=oa(e,this.size,3);i.uniform3fv(this.addr,t)}function bx(i,e){let t=oa(e,this.size,4);i.uniform4fv(this.addr,t)}function Sx(i,e){let t=oa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ex(i,e){let t=oa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tx(i,e){let t=oa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wx(i,e){i.uniform1iv(this.addr,e)}function Ax(i,e){i.uniform2iv(this.addr,e)}function Rx(i,e){i.uniform3iv(this.addr,e)}function Cx(i,e){i.uniform4iv(this.addr,e)}function Px(i,e){i.uniform1uiv(this.addr,e)}function Ix(i,e){i.uniform2uiv(this.addr,e)}function Lx(i,e){i.uniform3uiv(this.addr,e)}function Dx(i,e){i.uniform4uiv(this.addr,e)}function Ux(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ed,r[a])}function Nx(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ad,r[a])}function Bx(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Rd,r[a])}function Ox(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wd,r[a])}function Fx(i){switch(i){case 5126:return _x;case 35664:return vx;case 35665:return Mx;case 35666:return bx;case 35674:return Sx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return wx;case 35667:case 35671:return Ax;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Px;case 36294:return Ix;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return Ox}}var Yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xx(t.type)}},$c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fx(t.type)}},Kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function Bf(i,e){i.seq.push(e),i.map[e.id]=e}function kx(i,e,t){let n=i.name,s=n.length;for(Cc.lastIndex=0;;){let r=Cc.exec(n),a=Cc.lastIndex,o=r[1],l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){Bf(t,u===void 0?new Yc(o,i,e):new $c(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Kc(o),Bf(t,p)),t=p}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);kx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Of(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Hx=37297,zx=0;function Vx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Gx(i){let e=nn.getPrimaries(nn.workingColorSpace),t=nn.getPrimaries(i),n;switch(e===t?n="":e===Ko&&t===$o?n="LinearDisplayP3ToLinearSRGB":e===$o&&t===Ko&&(n="LinearSRGBToLinearDisplayP3"),i){case ys:case wl:return[n,"LinearTransferOETF"];case ri:case Ch:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ff(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Vx(i.getShaderSource(e),a)}else return s}function Wx(i,e){let t=Gx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xx(i,e){let t;switch(e){case cm:t="Linear";break;case hm:t="Reinhard";break;case um:t="OptimizedCineon";break;case fm:t="ACESFilmic";break;case pm:t="AgX";break;case dm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yr).join(`
`)}function Yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Yr).join(`
`)}function $x(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Yr(i){return i!==""}function kf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(Zx,jx)}var Jx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jx(i,e){let t=Ct[e];if(t===void 0){let n=Jx.get(e);if(n!==void 0)t=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zc(t)}var Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(i){return i.replace(Qx,e_)}function e_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===od?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ms&&(e="SHADOWMAP_TYPE_VSM"),e}function n_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function s_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ld:e="ENVMAP_BLENDING_MULTIPLY";break;case om:e="ENVMAP_BLENDING_MIX";break;case lm:e="ENVMAP_BLENDING_ADD";break}return e}function r_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function a_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=t_(t),u=n_(t),c=i_(t),p=s_(t),d=r_(t),m=t.isWebGL2?"":qx(t),x=Yx(t),M=$x(r),y=s.createProgram(),g,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yr).join(`
`),g.length>0&&(g+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yr).join(`
`),S.length>0&&(S+=`
`)):(g=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),S=[m,Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vs?"#define TONE_MAPPING":"",t.toneMapping!==Vs?Ct.tonemapping_pars_fragment:"",t.toneMapping!==Vs?Xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,Wx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Zc(a),a=kf(a,t),a=Hf(a,t),o=Zc(o),o=kf(o,t),o=Hf(o,t),a=zf(a),o=zf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===of?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let A=v+g+a,O=v+S+o,U=Of(s,s.VERTEX_SHADER,A),N=Of(s,s.FRAGMENT_SHADER,O);s.attachShader(y,U),s.attachShader(y,N),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function ee(X){if(i.debug.checkShaderErrors){let se=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(U).trim(),K=s.getShaderInfoLog(N).trim(),ie=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,U,N);else{let V=Ff(s,U,"vertex"),Z=Ff(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+V+`
`+Z)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(B===""||K==="")&&(q=!1);q&&(X.diagnostics={runnable:ie,programLog:se,vertexShader:{log:B,prefix:g},fragmentShader:{log:K,prefix:S}})}s.deleteShader(U),s.deleteShader(N),T=new Jr(s,y),C=Kx(s,y)}let T;this.getUniforms=function(){return T===void 0&&ee(this),T};let C;this.getAttributes=function(){return C===void 0&&ee(this),C};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=s.getProgramParameter(y,Hx)),te},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=N,this}var o_=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jc(e),t.set(e,n)),n}},jc=class{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}};function l_(i,e,t,n,s,r,a){let o=new za,l=new Jc,u=[],c=s.isWebGL2,p=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return T===0?"uv":`uv${T}`}function y(T,C,te,X,se){let B=X.fog,K=se.geometry,ie=T.isMeshStandardMaterial?X.environment:null,q=(T.isMeshStandardMaterial?t:e).get(T.envMap||ie),V=q&&q.mapping===Tl?q.image.height:null,Z=x[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let oe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,fe=oe!==void 0?oe.length:0,be=0;K.morphAttributes.position!==void 0&&(be=1),K.morphAttributes.normal!==void 0&&(be=2),K.morphAttributes.color!==void 0&&(be=3);let ne,de,Te,Pe;if(Z){let Kn=is[Z];ne=Kn.vertexShader,de=Kn.fragmentShader}else ne=T.vertexShader,de=T.fragmentShader,l.update(T),Te=l.getVertexShaderID(T),Pe=l.getFragmentShaderID(T);let He=i.getRenderTarget(),gt=se.isInstancedMesh===!0,ot=se.isBatchedMesh===!0,et=!!T.map,Ee=!!T.matcap,J=!!q,Wt=!!T.aoMap,Je=!!T.lightMap,Qe=!!T.bumpMap,We=!!T.normalMap,Ve=!!T.displacementMap,ut=!!T.emissiveMap,R=!!T.metalnessMap,E=!!T.roughnessMap,j=T.anisotropy>0,ye=T.clearcoat>0,xe=T.iridescence>0,ae=T.sheen>0,Ge=T.transmission>0,Ie=j&&!!T.anisotropyMap,ze=ye&&!!T.clearcoatMap,Le=ye&&!!T.clearcoatNormalMap,bt=ye&&!!T.clearcoatRoughnessMap,Se=xe&&!!T.iridescenceMap,Ut=xe&&!!T.iridescenceThicknessMap,Pt=ae&&!!T.sheenColorMap,ft=ae&&!!T.sheenRoughnessMap,lt=!!T.specularMap,$e=!!T.specularColorMap,Tt=!!T.specularIntensityMap,qt=Ge&&!!T.transmissionMap,Ht=Ge&&!!T.thicknessMap,Rt=!!T.gradientMap,De=!!T.alphaMap,H=T.alphaTest>0,Be=!!T.alphaHash,Oe=!!T.extensions,pt=!!K.attributes.uv1,dt=!!K.attributes.uv2,Zt=!!K.attributes.uv3,Jt=Vs;return T.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(Jt=i.toneMapping),{isWebGL2:c,shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:de,defines:T.defines,customVertexShaderID:Te,customFragmentShaderID:Pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ot,instancing:gt,instancingColor:gt&&se.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:ys,map:et,matcap:Ee,envMap:J,envMapMode:J&&q.mapping,envMapCubeUVHeight:V,aoMap:Wt,lightMap:Je,bumpMap:Qe,normalMap:We,displacementMap:d&&Ve,emissiveMap:ut,normalMapObjectSpace:We&&T.normalMapType===wm,normalMapTangentSpace:We&&T.normalMapType===xd,metalnessMap:R,roughnessMap:E,anisotropy:j,anisotropyMap:Ie,clearcoat:ye,clearcoatMap:ze,clearcoatNormalMap:Le,clearcoatRoughnessMap:bt,iridescence:xe,iridescenceMap:Se,iridescenceThicknessMap:Ut,sheen:ae,sheenColorMap:Pt,sheenRoughnessMap:ft,specularMap:lt,specularColorMap:$e,specularIntensityMap:Tt,transmission:Ge,transmissionMap:qt,thicknessMap:Ht,gradientMap:Rt,opaque:T.transparent===!1&&T.blending===Kr,alphaMap:De,alphaTest:H,alphaHash:Be,combine:T.combine,mapUv:et&&M(T.map.channel),aoMapUv:Wt&&M(T.aoMap.channel),lightMapUv:Je&&M(T.lightMap.channel),bumpMapUv:Qe&&M(T.bumpMap.channel),normalMapUv:We&&M(T.normalMap.channel),displacementMapUv:Ve&&M(T.displacementMap.channel),emissiveMapUv:ut&&M(T.emissiveMap.channel),metalnessMapUv:R&&M(T.metalnessMap.channel),roughnessMapUv:E&&M(T.roughnessMap.channel),anisotropyMapUv:Ie&&M(T.anisotropyMap.channel),clearcoatMapUv:ze&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Le&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ft&&M(T.sheenRoughnessMap.channel),specularMapUv:lt&&M(T.specularMap.channel),specularColorMapUv:$e&&M(T.specularColorMap.channel),specularIntensityMapUv:Tt&&M(T.specularIntensityMap.channel),transmissionMapUv:qt&&M(T.transmissionMap.channel),thicknessMapUv:Ht&&M(T.thicknessMap.channel),alphaMapUv:De&&M(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(We||j),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:pt,vertexUv2s:dt,vertexUv3s:Zt,pointsUvs:se.isPoints===!0&&!!K.attributes.uv&&(et||De),fog:!!B,useFog:T.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:se.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:be,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&te.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&nn.getTransfer(T.map.colorSpace)===vn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Cn,flipSided:T.side===vi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Oe&&T.extensions.derivatives===!0,extensionFragDepth:Oe&&T.extensions.fragDepth===!0,extensionDrawBuffers:Oe&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Oe&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){let C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(let te in T.defines)C.push(te),C.push(T.defines[te]);return T.isRawShaderMaterial===!1&&(S(C,T),v(C,T),C.push(i.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function S(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function v(T,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),T.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function A(T){let C=x[T.type],te;if(C){let X=is[C];te=Jm.clone(X.uniforms)}else te=T.uniforms;return te}function O(T,C){let te;for(let X=0,se=u.length;X<se;X++){let B=u[X];if(B.cacheKey===C){te=B,++te.usedTimes;break}}return te===void 0&&(te=new a_(i,C,T,r),u.push(te)),te}function U(T){if(--T.usedTimes===0){let C=u.indexOf(T);u[C]=u[u.length-1],u.pop(),T.destroy()}}function N(T){l.remove(T)}function ee(){l.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:O,releaseProgram:U,releaseShaderCache:N,programs:u,dispose:ee}}function c_(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function h_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p,d,m,x,M,y){let g=i[e];return g===void 0?(g={id:p.id,object:p,geometry:d,material:m,groupOrder:x,renderOrder:p.renderOrder,z:M,group:y},i[e]=g):(g.id=p.id,g.object=p,g.geometry=d,g.material=m,g.groupOrder=x,g.renderOrder=p.renderOrder,g.z=M,g.group=y),e++,g}function o(p,d,m,x,M,y){let g=a(p,d,m,x,M,y);m.transmission>0?n.push(g):m.transparent===!0?s.push(g):t.push(g)}function l(p,d,m,x,M,y){let g=a(p,d,m,x,M,y);m.transmission>0?n.unshift(g):m.transparent===!0?s.unshift(g):t.unshift(g)}function u(p,d){t.length>1&&t.sort(p||h_),n.length>1&&n.sort(d||Gf),s.length>1&&s.sort(d||Gf)}function c(){for(let p=e,d=i.length;p<d;p++){let m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:c,sort:u}}function u_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Wf,i.set(n,[a])):s>=r.length?(a=new Wf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function f_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Et};break;case"SpotLight":t={position:new k,direction:new k,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function d_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var p_=0;function m_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function g_(i,e){let t=new f_,n=d_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new k);let r=new k,a=new Mn,o=new Mn;function l(c,p){let d=0,m=0,x=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let M=0,y=0,g=0,S=0,v=0,A=0,O=0,U=0,N=0,ee=0,T=0;c.sort(m_);let C=p===!0?Math.PI:1;for(let X=0,se=c.length;X<se;X++){let B=c[X],K=B.color,ie=B.intensity,q=B.distance,V=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=K.r*ie*C,m+=K.g*ie*C,x+=K.b*ie*C;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(B.sh.coefficients[Z],ie);T++}else if(B.isDirectionalLight){let Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){let oe=B.shadow,fe=n.get(B);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,s.directionalShadow[M]=fe,s.directionalShadowMap[M]=V,s.directionalShadowMatrix[M]=B.shadow.matrix,A++}s.directional[M]=Z,M++}else if(B.isSpotLight){let Z=t.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(K).multiplyScalar(ie*C),Z.distance=q,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,s.spot[g]=Z;let oe=B.shadow;if(B.map&&(s.spotLightMap[N]=B.map,N++,oe.updateMatrices(B),B.castShadow&&ee++),s.spotLightMatrix[g]=oe.matrix,B.castShadow){let fe=n.get(B);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,s.spotShadow[g]=fe,s.spotShadowMap[g]=V,U++}g++}else if(B.isRectAreaLight){let Z=t.get(B);Z.color.copy(K).multiplyScalar(ie),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=Z,S++}else if(B.isPointLight){let Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*C),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){let oe=B.shadow,fe=n.get(B);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,fe.shadowCameraNear=oe.camera.near,fe.shadowCameraFar=oe.camera.far,s.pointShadow[y]=fe,s.pointShadowMap[y]=V,s.pointShadowMatrix[y]=B.shadow.matrix,O++}s.point[y]=Z,y++}else if(B.isHemisphereLight){let Z=t.get(B);Z.skyColor.copy(B.color).multiplyScalar(ie*C),Z.groundColor.copy(B.groundColor).multiplyScalar(ie*C),s.hemi[v]=Z,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=x;let te=s.hash;(te.directionalLength!==M||te.pointLength!==y||te.spotLength!==g||te.rectAreaLength!==S||te.hemiLength!==v||te.numDirectionalShadows!==A||te.numPointShadows!==O||te.numSpotShadows!==U||te.numSpotMaps!==N||te.numLightProbes!==T)&&(s.directional.length=M,s.spot.length=g,s.rectArea.length=S,s.point.length=y,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=U+N-ee,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=ee,s.numLightProbes=T,te.directionalLength=M,te.pointLength=y,te.spotLength=g,te.rectAreaLength=S,te.hemiLength=v,te.numDirectionalShadows=A,te.numPointShadows=O,te.numSpotShadows=U,te.numSpotMaps=N,te.numLightProbes=T,s.version=p_++)}function u(c,p){let d=0,m=0,x=0,M=0,y=0,g=p.matrixWorldInverse;for(let S=0,v=c.length;S<v;S++){let A=c[S];if(A.isDirectionalLight){let O=s.directional[d];O.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(g),d++}else if(A.isSpotLight){let O=s.spot[x];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(g),O.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(g),x++}else if(A.isRectAreaLight){let O=s.rectArea[M];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(g),o.identity(),a.copy(A.matrixWorld),a.premultiply(g),o.extractRotation(a),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){let O=s.point[m];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(g),m++}else if(A.isHemisphereLight){let O=s.hemi[y];O.direction.setFromMatrixPosition(A.matrixWorld),O.direction.transformDirection(g),y++}}}return{setup:l,setupView:u,state:s}}function Xf(i,e){let t=new g_(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(p){n.push(p)}function o(p){s.push(p)}function l(p){t.setup(n,p)}function u(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function y_(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Xf(i,e),t.set(r,[l])):a>=o.length?(l=new Xf(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Qc=class extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},eh=class extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
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
}`;function v_(i,e,t){let n=new Va,s=new Xe,r=new Xe,a=new Qn,o=new Qc({depthPacking:Tm}),l=new eh,u={},c=t.maxTextureSize,p={[Ws]:vi,[vi]:Ws,[Cn]:Cn},d=new vs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:x_,fragmentShader:__}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let x=new oi;x.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ze(x,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=od;let g=this.type;this.render=function(U,N,ee){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;let T=i.getRenderTarget(),C=i.getActiveCubeFace(),te=i.getActiveMipmapLevel(),X=i.state;X.setBlending(zs),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let se=g!==ms&&this.type===ms,B=g===ms&&this.type!==ms;for(let K=0,ie=U.length;K<ie;K++){let q=U[K],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Z=V.getFrameExtents();if(s.multiply(Z),r.copy(V.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/Z.x),s.x=r.x*Z.x,V.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/Z.y),s.y=r.y*Z.y,V.mapSize.y=r.y)),V.map===null||se===!0||B===!0){let fe=this.type!==ms?{minFilter:mi,magFilter:mi}:{};V.map!==null&&V.map.dispose(),V.map=new xs(s.x,s.y,fe),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let oe=V.getViewportCount();for(let fe=0;fe<oe;fe++){let be=V.getViewport(fe);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),X.viewport(a),V.updateMatrices(q,fe),n=V.getFrustum(),A(N,ee,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===ms&&S(V,ee),V.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(T,C,te)};function S(U,N){let ee=e.update(M);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,m.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new xs(s.x,s.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(N,null,ee,d,M,null),m.uniforms.shadow_pass.value=U.mapPass.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(N,null,ee,m,M,null)}function v(U,N,ee,T){let C=null,te=ee.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(te!==void 0)C=te;else if(C=ee.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let X=C.uuid,se=N.uuid,B=u[X];B===void 0&&(B={},u[X]=B);let K=B[se];K===void 0&&(K=C.clone(),B[se]=K,N.addEventListener("dispose",O)),C=K}if(C.visible=N.visible,C.wireframe=N.wireframe,T===ms?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:p[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,ee.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let X=i.properties.get(C);X.light=ee}return C}function A(U,N,ee,T,C){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===ms)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,U.matrixWorld);let se=e.update(U),B=U.material;if(Array.isArray(B)){let K=se.groups;for(let ie=0,q=K.length;ie<q;ie++){let V=K[ie],Z=B[V.materialIndex];if(Z&&Z.visible){let oe=v(U,Z,T,C);U.onBeforeShadow(i,U,N,ee,se,oe,V),i.renderBufferDirect(ee,null,se,oe,U,V),U.onAfterShadow(i,U,N,ee,se,oe,V)}}}else if(B.visible){let K=v(U,B,T,C);U.onBeforeShadow(i,U,N,ee,se,K,null),i.renderBufferDirect(ee,null,se,K,U,null),U.onAfterShadow(i,U,N,ee,se,K,null)}}let X=U.children;for(let se=0,B=X.length;se<B;se++)A(X[se],N,ee,T,C)}function O(U){U.target.removeEventListener("dispose",O);for(let ee in u){let T=u[ee],C=U.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function M_(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Be=new Qn,Oe=null,pt=new Qn(0,0,0,0);return{setMask:function(dt){Oe!==dt&&!H&&(i.colorMask(dt,dt,dt,dt),Oe=dt)},setLocked:function(dt){H=dt},setClear:function(dt,Zt,Jt,Tn,Kn){Kn===!0&&(dt*=Tn,Zt*=Tn,Jt*=Tn),Be.set(dt,Zt,Jt,Tn),pt.equals(Be)===!1&&(i.clearColor(dt,Zt,Jt,Tn),pt.copy(Be))},reset:function(){H=!1,Oe=null,pt.set(-1,0,0,0)}}}function r(){let H=!1,Be=null,Oe=null,pt=null;return{setTest:function(dt){dt?ot(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(dt){Be!==dt&&!H&&(i.depthMask(dt),Be=dt)},setFunc:function(dt){if(Oe!==dt){switch(dt){case em:i.depthFunc(i.NEVER);break;case tm:i.depthFunc(i.ALWAYS);break;case nm:i.depthFunc(i.LESS);break;case Wo:i.depthFunc(i.LEQUAL);break;case im:i.depthFunc(i.EQUAL);break;case sm:i.depthFunc(i.GEQUAL);break;case rm:i.depthFunc(i.GREATER);break;case am:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Oe=dt}},setLocked:function(dt){H=dt},setClear:function(dt){pt!==dt&&(i.clearDepth(dt),pt=dt)},reset:function(){H=!1,Be=null,Oe=null,pt=null}}}function a(){let H=!1,Be=null,Oe=null,pt=null,dt=null,Zt=null,Jt=null,Tn=null,Kn=null;return{setTest:function(tn){H||(tn?ot(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(tn){Be!==tn&&!H&&(i.stencilMask(tn),Be=tn)},setFunc:function(tn,ti,bi){(Oe!==tn||pt!==ti||dt!==bi)&&(i.stencilFunc(tn,ti,bi),Oe=tn,pt=ti,dt=bi)},setOp:function(tn,ti,bi){(Zt!==tn||Jt!==ti||Tn!==bi)&&(i.stencilOp(tn,ti,bi),Zt=tn,Jt=ti,Tn=bi)},setLocked:function(tn){H=tn},setClear:function(tn){Kn!==tn&&(i.clearStencil(tn),Kn=tn)},reset:function(){H=!1,Be=null,Oe=null,pt=null,dt=null,Zt=null,Jt=null,Tn=null,Kn=null}}}let o=new s,l=new r,u=new a,c=new WeakMap,p=new WeakMap,d={},m={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,O=null,U=null,N=null,ee=null,T=new Et(0,0,0),C=0,te=!1,X=null,se=null,B=null,K=null,ie=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Z=0,oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(oe)[1]),V=Z>=1):oe.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),V=Z>=2);let fe=null,be={},ne=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Te=new Qn().fromArray(ne),Pe=new Qn().fromArray(de);function He(H,Be,Oe,pt){let dt=new Uint8Array(4),Zt=i.createTexture();i.bindTexture(H,Zt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<Oe;Jt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Be,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(Be+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return Zt}let gt={};gt[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(gt[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ot(i.DEPTH_TEST),l.setFunc(Wo),ut(!1),R(Su),ot(i.CULL_FACE),We(zs);function ot(H){d[H]!==!0&&(i.enable(H),d[H]=!0)}function et(H){d[H]!==!1&&(i.disable(H),d[H]=!1)}function Ee(H,Be){return m[H]!==Be?(i.bindFramebuffer(H,Be),m[H]=Be,n&&(H===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Be),H===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Be)),!0):!1}function J(H,Be){let Oe=M,pt=!1;if(H)if(Oe=x.get(Be),Oe===void 0&&(Oe=[],x.set(Be,Oe)),H.isWebGLMultipleRenderTargets){let dt=H.texture;if(Oe.length!==dt.length||Oe[0]!==i.COLOR_ATTACHMENT0){for(let Zt=0,Jt=dt.length;Zt<Jt;Zt++)Oe[Zt]=i.COLOR_ATTACHMENT0+Zt;Oe.length=dt.length,pt=!0}}else Oe[0]!==i.COLOR_ATTACHMENT0&&(Oe[0]=i.COLOR_ATTACHMENT0,pt=!0);else Oe[0]!==i.BACK&&(Oe[0]=i.BACK,pt=!0);pt&&(t.isWebGL2?i.drawBuffers(Oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Oe))}function Wt(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let Je={[or]:i.FUNC_ADD,[kp]:i.FUNC_SUBTRACT,[Hp]:i.FUNC_REVERSE_SUBTRACT};if(n)Je[Au]=i.MIN,Je[Ru]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(Je[Au]=H.MIN_EXT,Je[Ru]=H.MAX_EXT)}let Qe={[zp]:i.ZERO,[Vp]:i.ONE,[Gp]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[Kp]:i.SRC_ALPHA_SATURATE,[Yp]:i.DST_COLOR,[Xp]:i.DST_ALPHA,[Wp]:i.ONE_MINUS_SRC_COLOR,[Bc]:i.ONE_MINUS_SRC_ALPHA,[$p]:i.ONE_MINUS_DST_COLOR,[qp]:i.ONE_MINUS_DST_ALPHA,[Zp]:i.CONSTANT_COLOR,[Jp]:i.ONE_MINUS_CONSTANT_COLOR,[jp]:i.CONSTANT_ALPHA,[Qp]:i.ONE_MINUS_CONSTANT_ALPHA};function We(H,Be,Oe,pt,dt,Zt,Jt,Tn,Kn,tn){if(H===zs){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),H!==Fp){if(H!==S||tn!==te){if((v!==or||U!==or)&&(i.blendEquation(i.FUNC_ADD),v=or,U=or),tn)switch(H){case Kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eu:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,O=null,N=null,ee=null,T.set(0,0,0),C=0,S=H,te=tn}return}dt=dt||Be,Zt=Zt||Oe,Jt=Jt||pt,(Be!==v||dt!==U)&&(i.blendEquationSeparate(Je[Be],Je[dt]),v=Be,U=dt),(Oe!==A||pt!==O||Zt!==N||Jt!==ee)&&(i.blendFuncSeparate(Qe[Oe],Qe[pt],Qe[Zt],Qe[Jt]),A=Oe,O=pt,N=Zt,ee=Jt),(Tn.equals(T)===!1||Kn!==C)&&(i.blendColor(Tn.r,Tn.g,Tn.b,Kn),T.copy(Tn),C=Kn),S=H,te=!1}function Ve(H,Be){H.side===Cn?et(i.CULL_FACE):ot(i.CULL_FACE);let Oe=H.side===vi;Be&&(Oe=!Oe),ut(Oe),H.blending===Kr&&H.transparent===!1?We(zs):We(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),o.setMask(H.colorWrite);let pt=H.stencilWrite;u.setTest(pt),pt&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),j(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(H){X!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),X=H)}function R(H){H!==Bp?(ot(i.CULL_FACE),H!==se&&(H===Su?i.cullFace(i.BACK):H===Op?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),se=H}function E(H){H!==B&&(V&&i.lineWidth(H),B=H)}function j(H,Be,Oe){H?(ot(i.POLYGON_OFFSET_FILL),(K!==Be||ie!==Oe)&&(i.polygonOffset(Be,Oe),K=Be,ie=Oe)):et(i.POLYGON_OFFSET_FILL)}function ye(H){H?ot(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function xe(H){H===void 0&&(H=i.TEXTURE0+q-1),fe!==H&&(i.activeTexture(H),fe=H)}function ae(H,Be,Oe){Oe===void 0&&(fe===null?Oe=i.TEXTURE0+q-1:Oe=fe);let pt=be[Oe];pt===void 0&&(pt={type:void 0,texture:void 0},be[Oe]=pt),(pt.type!==H||pt.texture!==Be)&&(fe!==Oe&&(i.activeTexture(Oe),fe=Oe),i.bindTexture(H,Be||gt[H]),pt.type=H,pt.texture=Be)}function Ge(){let H=be[fe];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(H){Te.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Te.copy(H))}function qt(H){Pe.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Pe.copy(H))}function Ht(H,Be){let Oe=p.get(Be);Oe===void 0&&(Oe=new WeakMap,p.set(Be,Oe));let pt=Oe.get(H);pt===void 0&&(pt=i.getUniformBlockIndex(Be,H.name),Oe.set(H,pt))}function Rt(H,Be){let pt=p.get(Be).get(H);c.get(Be)!==pt&&(i.uniformBlockBinding(Be,pt,H.__bindingPointIndex),c.set(Be,pt))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},fe=null,be={},m={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,O=null,U=null,N=null,ee=null,T=new Et(0,0,0),C=0,te=!1,X=null,se=null,B=null,K=null,ie=null,Te.set(0,0,i.canvas.width,i.canvas.height),Pe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:ot,disable:et,bindFramebuffer:Ee,drawBuffers:J,useProgram:Wt,setBlending:We,setMaterial:Ve,setFlipSided:ut,setCullFace:R,setLineWidth:E,setPolygonOffset:j,setScissorTest:ye,activeTexture:xe,bindTexture:ae,unbindTexture:Ge,compressedTexImage2D:Ie,compressedTexImage3D:ze,texImage2D:lt,texImage3D:$e,updateUBOMapping:Ht,uniformBlockBinding:Rt,texStorage2D:Pt,texStorage3D:ft,texSubImage2D:Le,texSubImage3D:bt,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ut,scissor:Tt,viewport:qt,reset:De}}function b_(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,p,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return m?new OffscreenCanvas(R,E):Jo("canvas")}function M(R,E,j,ye){let xe=1;if((R.width>ye||R.height>ye)&&(xe=ye/Math.max(R.width,R.height)),xe<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let ae=E?Vc:Math.floor,Ge=ae(xe*R.width),Ie=ae(xe*R.height);p===void 0&&(p=x(Ge,Ie));let ze=j?x(Ge,Ie):p;return ze.width=Ge,ze.height=Ie,ze.getContext("2d").drawImage(R,0,0,Ge,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ge+"x"+Ie+")."),ze}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return lf(R.width)&&lf(R.height)}function g(R){return o?!1:R.wrapS!==Ki||R.wrapT!==Ki||R.minFilter!==mi&&R.minFilter!==Oi}function S(R,E){return R.generateMipmaps&&E&&R.minFilter!==mi&&R.minFilter!==Oi}function v(R){i.generateMipmap(R)}function A(R,E,j,ye,xe=!1){if(o===!1)return E;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=E;if(E===i.RED&&(j===i.FLOAT&&(ae=i.R32F),j===i.HALF_FLOAT&&(ae=i.R16F),j===i.UNSIGNED_BYTE&&(ae=i.R8)),E===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ae=i.R8UI),j===i.UNSIGNED_SHORT&&(ae=i.R16UI),j===i.UNSIGNED_INT&&(ae=i.R32UI),j===i.BYTE&&(ae=i.R8I),j===i.SHORT&&(ae=i.R16I),j===i.INT&&(ae=i.R32I)),E===i.RG&&(j===i.FLOAT&&(ae=i.RG32F),j===i.HALF_FLOAT&&(ae=i.RG16F),j===i.UNSIGNED_BYTE&&(ae=i.RG8)),E===i.RGBA){let Ge=xe?Yo:nn.getTransfer(ye);j===i.FLOAT&&(ae=i.RGBA32F),j===i.HALF_FLOAT&&(ae=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ae=Ge===vn?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function O(R,E,j){return S(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==mi&&R.minFilter!==Oi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function U(R){return R===mi||R===Cu||R===Ql?i.NEAREST:i.LINEAR}function N(R){let E=R.target;E.removeEventListener("dispose",N),T(E),E.isVideoTexture&&c.delete(E)}function ee(R){let E=R.target;E.removeEventListener("dispose",ee),te(E)}function T(R){let E=n.get(R);if(E.__webglInit===void 0)return;let j=R.source,ye=d.get(j);if(ye){let xe=ye[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(R),Object.keys(ye).length===0&&d.delete(j)}n.remove(R)}function C(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let j=R.source,ye=d.get(j);delete ye[E.__cacheKey],a.memory.textures--}function te(R){let E=R.texture,j=n.get(R),ye=n.get(E);if(ye.__webglTexture!==void 0&&(i.deleteTexture(ye.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(j.__webglFramebuffer[xe]))for(let ae=0;ae<j.__webglFramebuffer[xe].length;ae++)i.deleteFramebuffer(j.__webglFramebuffer[xe][ae]);else i.deleteFramebuffer(j.__webglFramebuffer[xe]);j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer[xe])}else{if(Array.isArray(j.__webglFramebuffer))for(let xe=0;xe<j.__webglFramebuffer.length;xe++)i.deleteFramebuffer(j.__webglFramebuffer[xe]);else i.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&i.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let xe=0;xe<j.__webglColorRenderbuffer.length;xe++)j.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(j.__webglColorRenderbuffer[xe]);j.__webglDepthRenderbuffer&&i.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let xe=0,ae=E.length;xe<ae;xe++){let Ge=n.get(E[xe]);Ge.__webglTexture&&(i.deleteTexture(Ge.__webglTexture),a.memory.textures--),n.remove(E[xe])}n.remove(E),n.remove(R)}let X=0;function se(){X=0}function B(){let R=X;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),X+=1,R}function K(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function ie(R,E){let j=n.get(R);if(R.isVideoTexture&&Ve(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){let ye=R.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(j,R,E);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+E)}function q(R,E){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Te(j,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+E)}function V(R,E){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Te(j,R,E);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+E)}function Z(R,E){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Pe(j,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+E)}let oe={[Oa]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[kc]:i.MIRRORED_REPEAT},fe={[mi]:i.NEAREST,[Cu]:i.NEAREST_MIPMAP_NEAREST,[Ql]:i.NEAREST_MIPMAP_LINEAR,[Oi]:i.LINEAR,[mm]:i.LINEAR_MIPMAP_NEAREST,[Fa]:i.LINEAR_MIPMAP_LINEAR},be={[Am]:i.NEVER,[Dm]:i.ALWAYS,[Rm]:i.LESS,[_d]:i.LEQUAL,[Cm]:i.EQUAL,[Lm]:i.GEQUAL,[Pm]:i.GREATER,[Im]:i.NOTEQUAL};function ne(R,E,j){if(j?(i.texParameteri(R,i.TEXTURE_WRAP_S,oe[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,oe[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,oe[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,fe[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,fe[E.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Ki||E.wrapT!==Ki)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,U(E.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,U(E.minFilter)),E.minFilter!==mi&&E.minFilter!==Oi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ye=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===mi||E.minFilter!==Ql&&E.minFilter!==Fa||E.type===Hs&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ka&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(R,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function de(R,E){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",N));let ye=E.source,xe=d.get(ye);xe===void 0&&(xe={},d.set(ye,xe));let ae=K(E);if(ae!==R.__cacheKey){xe[ae]===void 0&&(xe[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),xe[ae].usedTimes++;let Ge=xe[R.__cacheKey];Ge!==void 0&&(xe[R.__cacheKey].usedTimes--,Ge.usedTimes===0&&C(E)),R.__cacheKey=ae,R.__webglTexture=xe[ae].texture}return j}function Te(R,E,j){let ye=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ye=i.TEXTURE_3D);let xe=de(R,E),ae=E.source;t.bindTexture(ye,R.__webglTexture,i.TEXTURE0+j);let Ge=n.get(ae);if(ae.version!==Ge.__version||xe===!0){t.activeTexture(i.TEXTURE0+j);let Ie=nn.getPrimaries(nn.workingColorSpace),ze=E.colorSpace===Fi?null:nn.getPrimaries(E.colorSpace),Le=E.colorSpace===Fi||Ie===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let bt=g(E)&&y(E.image)===!1,Se=M(E.image,bt,!1,s.maxTextureSize);Se=ut(E,Se);let Ut=y(Se)||o,Pt=r.convert(E.format,E.colorSpace),ft=r.convert(E.type),lt=A(E.internalFormat,Pt,ft,E.colorSpace,E.isVideoTexture);ne(ye,E,Ut);let $e,Tt=E.mipmaps,qt=o&&E.isVideoTexture!==!0&&lt!==gd,Ht=Ge.__version===void 0||xe===!0,Rt=O(E,Se,Ut);if(E.isDepthTexture)lt=i.DEPTH_COMPONENT,o?E.type===Hs?lt=i.DEPTH_COMPONENT32F:E.type===ks?lt=i.DEPTH_COMPONENT24:E.type===cr?lt=i.DEPTH24_STENCIL8:lt=i.DEPTH_COMPONENT16:E.type===Hs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===hr&&lt===i.DEPTH_COMPONENT&&E.type!==Rh&&E.type!==ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ks,ft=r.convert(E.type)),E.format===ea&&lt===i.DEPTH_COMPONENT&&(lt=i.DEPTH_STENCIL,E.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=cr,ft=r.convert(E.type))),Ht&&(qt?t.texStorage2D(i.TEXTURE_2D,1,lt,Se.width,Se.height):t.texImage2D(i.TEXTURE_2D,0,lt,Se.width,Se.height,0,Pt,ft,null));else if(E.isDataTexture)if(Tt.length>0&&Ut){qt&&Ht&&t.texStorage2D(i.TEXTURE_2D,Rt,lt,Tt[0].width,Tt[0].height);for(let De=0,H=Tt.length;De<H;De++)$e=Tt[De],qt?t.texSubImage2D(i.TEXTURE_2D,De,0,0,$e.width,$e.height,Pt,ft,$e.data):t.texImage2D(i.TEXTURE_2D,De,lt,$e.width,$e.height,0,Pt,ft,$e.data);E.generateMipmaps=!1}else qt?(Ht&&t.texStorage2D(i.TEXTURE_2D,Rt,lt,Se.width,Se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se.width,Se.height,Pt,ft,Se.data)):t.texImage2D(i.TEXTURE_2D,0,lt,Se.width,Se.height,0,Pt,ft,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qt&&Ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,lt,Tt[0].width,Tt[0].height,Se.depth);for(let De=0,H=Tt.length;De<H;De++)$e=Tt[De],E.format!==Zi?Pt!==null?qt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,De,0,0,0,$e.width,$e.height,Se.depth,Pt,$e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,De,lt,$e.width,$e.height,Se.depth,0,$e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,De,0,0,0,$e.width,$e.height,Se.depth,Pt,ft,$e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,De,lt,$e.width,$e.height,Se.depth,0,Pt,ft,$e.data)}else{qt&&Ht&&t.texStorage2D(i.TEXTURE_2D,Rt,lt,Tt[0].width,Tt[0].height);for(let De=0,H=Tt.length;De<H;De++)$e=Tt[De],E.format!==Zi?Pt!==null?qt?t.compressedTexSubImage2D(i.TEXTURE_2D,De,0,0,$e.width,$e.height,Pt,$e.data):t.compressedTexImage2D(i.TEXTURE_2D,De,lt,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?t.texSubImage2D(i.TEXTURE_2D,De,0,0,$e.width,$e.height,Pt,ft,$e.data):t.texImage2D(i.TEXTURE_2D,De,lt,$e.width,$e.height,0,Pt,ft,$e.data)}else if(E.isDataArrayTexture)qt?(Ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,lt,Se.width,Se.height,Se.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Pt,ft,Se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,Se.width,Se.height,Se.depth,0,Pt,ft,Se.data);else if(E.isData3DTexture)qt?(Ht&&t.texStorage3D(i.TEXTURE_3D,Rt,lt,Se.width,Se.height,Se.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Pt,ft,Se.data)):t.texImage3D(i.TEXTURE_3D,0,lt,Se.width,Se.height,Se.depth,0,Pt,ft,Se.data);else if(E.isFramebufferTexture){if(Ht)if(qt)t.texStorage2D(i.TEXTURE_2D,Rt,lt,Se.width,Se.height);else{let De=Se.width,H=Se.height;for(let Be=0;Be<Rt;Be++)t.texImage2D(i.TEXTURE_2D,Be,lt,De,H,0,Pt,ft,null),De>>=1,H>>=1}}else if(Tt.length>0&&Ut){qt&&Ht&&t.texStorage2D(i.TEXTURE_2D,Rt,lt,Tt[0].width,Tt[0].height);for(let De=0,H=Tt.length;De<H;De++)$e=Tt[De],qt?t.texSubImage2D(i.TEXTURE_2D,De,0,0,Pt,ft,$e):t.texImage2D(i.TEXTURE_2D,De,lt,Pt,ft,$e);E.generateMipmaps=!1}else qt?(Ht&&t.texStorage2D(i.TEXTURE_2D,Rt,lt,Se.width,Se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,ft,Se)):t.texImage2D(i.TEXTURE_2D,0,lt,Pt,ft,Se);S(E,Ut)&&v(ye),Ge.__version=ae.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Pe(R,E,j){if(E.image.length!==6)return;let ye=de(R,E),xe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+j);let ae=n.get(xe);if(xe.version!==ae.__version||ye===!0){t.activeTexture(i.TEXTURE0+j);let Ge=nn.getPrimaries(nn.workingColorSpace),Ie=E.colorSpace===Fi?null:nn.getPrimaries(E.colorSpace),ze=E.colorSpace===Fi||Ge===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Le=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let De=0;De<6;De++)!Le&&!bt?Se[De]=M(E.image[De],!1,!0,s.maxCubemapSize):Se[De]=bt?E.image[De].image:E.image[De],Se[De]=ut(E,Se[De]);let Ut=Se[0],Pt=y(Ut)||o,ft=r.convert(E.format,E.colorSpace),lt=r.convert(E.type),$e=A(E.internalFormat,ft,lt,E.colorSpace),Tt=o&&E.isVideoTexture!==!0,qt=ae.__version===void 0||ye===!0,Ht=O(E,Ut,Pt);ne(i.TEXTURE_CUBE_MAP,E,Pt);let Rt;if(Le){Tt&&qt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,$e,Ut.width,Ut.height);for(let De=0;De<6;De++){Rt=Se[De].mipmaps;for(let H=0;H<Rt.length;H++){let Be=Rt[H];E.format!==Zi?ft!==null?Tt?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,H,0,0,Be.width,Be.height,ft,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,H,$e,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,H,0,0,Be.width,Be.height,ft,lt,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,H,$e,Be.width,Be.height,0,ft,lt,Be.data)}}}else{Rt=E.mipmaps,Tt&&qt&&(Rt.length>0&&Ht++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,$e,Se[0].width,Se[0].height));for(let De=0;De<6;De++)if(bt){Tt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,Se[De].width,Se[De].height,ft,lt,Se[De].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,$e,Se[De].width,Se[De].height,0,ft,lt,Se[De].data);for(let H=0;H<Rt.length;H++){let Oe=Rt[H].image[De].image;Tt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,H+1,0,0,Oe.width,Oe.height,ft,lt,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,H+1,$e,Oe.width,Oe.height,0,ft,lt,Oe.data)}}else{Tt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,ft,lt,Se[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,$e,ft,lt,Se[De]);for(let H=0;H<Rt.length;H++){let Be=Rt[H];Tt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,H+1,0,0,ft,lt,Be.image[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,H+1,$e,ft,lt,Be.image[De])}}}S(E,Pt)&&v(i.TEXTURE_CUBE_MAP),ae.__version=xe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function He(R,E,j,ye,xe,ae){let Ge=r.convert(j.format,j.colorSpace),Ie=r.convert(j.type),ze=A(j.internalFormat,Ge,Ie,j.colorSpace);if(!n.get(E).__hasExternalTextures){let bt=Math.max(1,E.width>>ae),Se=Math.max(1,E.height>>ae);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,ae,ze,bt,Se,E.depth,0,Ge,Ie,null):t.texImage2D(xe,ae,ze,bt,Se,0,Ge,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),We(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,xe,n.get(j).__webglTexture,0,Qe(E)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,xe,n.get(j).__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(R,E,j){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ye=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(j||We(E)){let xe=E.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Hs?ye=i.DEPTH_COMPONENT32F:xe.type===ks&&(ye=i.DEPTH_COMPONENT24));let ae=Qe(E);We(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,ye,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ye,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ye,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){let ye=Qe(E);j&&We(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,E.width,E.height):We(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let ye=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let xe=0;xe<ye.length;xe++){let ae=ye[xe],Ge=r.convert(ae.format,ae.colorSpace),Ie=r.convert(ae.type),ze=A(ae.internalFormat,Ge,Ie,ae.colorSpace),Le=Qe(E);j&&We(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ze,E.width,E.height):We(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,ze,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ze,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie(E.depthTexture,0);let ye=n.get(E.depthTexture).__webglTexture,xe=Qe(E);if(E.depthTexture.format===hr)We(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(E.depthTexture.format===ea)We(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function et(R){let E=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ot(E.__webglFramebuffer,R)}else if(j){E.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ye]),E.__webglDepthbuffer[ye]=i.createRenderbuffer(),gt(E.__webglDepthbuffer[ye],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),gt(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(R,E,j){let ye=n.get(R);E!==void 0&&He(ye.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&et(R)}function J(R){let E=R.texture,j=n.get(R),ye=n.get(E);R.addEventListener("dispose",ee),R.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=E.version,a.memory.textures++);let xe=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,Ge=y(R)||o;if(xe){j.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Ie]=[];for(let ze=0;ze<E.mipmaps.length;ze++)j.__webglFramebuffer[Ie][ze]=i.createFramebuffer()}else j.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)j.__webglFramebuffer[Ie]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(ae)if(s.drawBuffers){let Ie=R.texture;for(let ze=0,Le=Ie.length;ze<Le;ze++){let bt=n.get(Ie[ze]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&We(R)===!1){let Ie=ae?E:[E];j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ze=0;ze<Ie.length;ze++){let Le=Ie[ze];j.__webglColorRenderbuffer[ze]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[ze]);let bt=r.convert(Le.format,Le.colorSpace),Se=r.convert(Le.type),Ut=A(Le.internalFormat,bt,Se,Le.colorSpace,R.isXRRenderTarget===!0),Pt=Qe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Ut,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,j.__webglColorRenderbuffer[ze])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),ne(i.TEXTURE_CUBE_MAP,E,Ge);for(let Ie=0;Ie<6;Ie++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)He(j.__webglFramebuffer[Ie][ze],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ze);else He(j.__webglFramebuffer[Ie],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);S(E,Ge)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){let Ie=R.texture;for(let ze=0,Le=Ie.length;ze<Le;ze++){let bt=Ie[ze],Se=n.get(bt);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),ne(i.TEXTURE_2D,bt,Ge),He(j.__webglFramebuffer,R,bt,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,0),S(bt,Ge)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?Ie=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ie,ye.__webglTexture),ne(Ie,E,Ge),o&&E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)He(j.__webglFramebuffer[ze],R,E,i.COLOR_ATTACHMENT0,Ie,ze);else He(j.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,Ie,0);S(E,Ge)&&v(Ie),t.unbindTexture()}R.depthBuffer&&et(R)}function Wt(R){let E=y(R)||o,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ye=0,xe=j.length;ye<xe;ye++){let ae=j[ye];if(S(ae,E)){let Ge=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(ae).__webglTexture;t.bindTexture(Ge,Ie),v(Ge),t.unbindTexture()}}}function Je(R){if(o&&R.samples>0&&We(R)===!1){let E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,ye=R.height,xe=i.COLOR_BUFFER_BIT,ae=[],Ge=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(R),ze=R.isWebGLMultipleRenderTargets===!0;if(ze)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){ae.push(i.COLOR_ATTACHMENT0+Le),R.depthBuffer&&ae.push(Ge);let bt=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(bt===!1&&(R.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),ze&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]),bt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ge])),ze){let Se=n.get(E[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,j,ye,0,0,j,ye,xe,i.NEAREST),u&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ze)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);let bt=n.get(E[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,bt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function Qe(R){return Math.min(s.maxSamples,R.samples)}function We(R){let E=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ve(R){let E=a.render.frame;c.get(R)!==E&&(c.set(R,E),R.update())}function ut(R,E){let j=R.colorSpace,ye=R.format,xe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Hc||j!==ys&&j!==Fi&&(nn.getTransfer(j)===vn?o===!1?e.has("EXT_sRGB")===!0&&ye===Zi?(R.format=Hc,R.minFilter=Oi,R.generateMipmaps=!1):E=jo.sRGBToLinear(E):(ye!==Zi||xe!==Gs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}this.allocateTextureUnit=B,this.resetTextureUnits=se,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Ee,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=He,this.useMultisampledRTT=We}function S_(i,e,t){let n=t.isWebGL2;function s(r,a=Fi){let o,l=nn.getTransfer(a);if(r===Gs)return i.UNSIGNED_BYTE;if(r===ud)return i.UNSIGNED_SHORT_4_4_4_4;if(r===fd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===gm)return i.BYTE;if(r===ym)return i.SHORT;if(r===Rh)return i.UNSIGNED_SHORT;if(r===hd)return i.INT;if(r===ks)return i.UNSIGNED_INT;if(r===Hs)return i.FLOAT;if(r===ka)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===xm)return i.ALPHA;if(r===Zi)return i.RGBA;if(r===_m)return i.LUMINANCE;if(r===vm)return i.LUMINANCE_ALPHA;if(r===hr)return i.DEPTH_COMPONENT;if(r===ea)return i.DEPTH_STENCIL;if(r===Hc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Mm)return i.RED;if(r===dd)return i.RED_INTEGER;if(r===bm)return i.RG;if(r===pd)return i.RG_INTEGER;if(r===md)return i.RGBA_INTEGER;if(r===ec||r===tc||r===nc||r===ic)if(l===vn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ec)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ec)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ic)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pu||r===Iu||r===Lu||r===Du)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Pu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Iu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Du)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Uu||r===Nu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Uu)return l===vn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Nu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bu||r===Ou||r===Fu||r===ku||r===Hu||r===zu||r===Vu||r===Gu||r===Wu||r===Xu||r===qu||r===Yu||r===$u||r===Ku)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Bu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ou)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ku)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$u)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ku)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sc||r===Zu||r===Ju)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===sc)return l===vn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ju)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sm||r===ju||r===Qu||r===ef)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===sc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ju)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ef)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cr?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var th=class extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},_i=class extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}},E_={type:"move"},Da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let M of e.hand.values()){let y=t.getJointPose(M,n),g=this._getHandJoint(u,M);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let c=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=c.position.distanceTo(p.position),m=.02,x=.005;u.inputState.pinching&&d>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nh=class extends Xs{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,u=null,c=null,p=null,d=null,m=null,x=null,M=t.getContextAttributes(),y=null,g=null,S=[],v=[],A=new Xe,O=null,U=new gi;U.layers.enable(1),U.viewport=new Qn;let N=new gi;N.layers.enable(2),N.viewport=new Qn;let ee=[U,N],T=new th;T.layers.enable(1),T.layers.enable(2);let C=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=S[ne];return de===void 0&&(de=new Da,S[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=S[ne];return de===void 0&&(de=new Da,S[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=S[ne];return de===void 0&&(de=new Da,S[ne]=de),de.getHandSpace()};function X(ne){let de=v.indexOf(ne.inputSource);if(de===-1)return;let Te=S[de];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,u||a),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function se(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",B);for(let ne=0;ne<S.length;ne++){let de=v[ne];de!==null&&(v[ne]=null,S[ne].disconnect(de))}C=null,te=null,e.setRenderTarget(y),m=null,d=null,p=null,s=null,g=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(ne){u=ne},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",se),s.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let de={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new xs(m.framebufferWidth,m.framebufferHeight,{format:Zi,type:Gs,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let de=null,Te=null,Pe=null;M.depth&&(Pe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=M.stencil?ea:hr,Te=M.stencil?cr:ks);let He={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};p=new XRWebGLBinding(s,t),d=p.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new xs(d.textureWidth,d.textureHeight,{format:Zi,type:Gs,depthTexture:new ol(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});let gt=e.properties.get(g);gt.__ignoreDepthValues=d.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(ne){for(let de=0;de<ne.removed.length;de++){let Te=ne.removed[de],Pe=v.indexOf(Te);Pe>=0&&(v[Pe]=null,S[Pe].disconnect(Te))}for(let de=0;de<ne.added.length;de++){let Te=ne.added[de],Pe=v.indexOf(Te);if(Pe===-1){for(let gt=0;gt<S.length;gt++)if(gt>=v.length){v.push(Te),Pe=gt;break}else if(v[gt]===null){v[gt]=Te,Pe=gt;break}if(Pe===-1)break}let He=S[Pe];He&&He.connect(Te)}}let K=new k,ie=new k;function q(ne,de,Te){K.setFromMatrixPosition(de.matrixWorld),ie.setFromMatrixPosition(Te.matrixWorld);let Pe=K.distanceTo(ie),He=de.projectionMatrix.elements,gt=Te.projectionMatrix.elements,ot=He[14]/(He[10]-1),et=He[14]/(He[10]+1),Ee=(He[9]+1)/He[5],J=(He[9]-1)/He[5],Wt=(He[8]-1)/He[0],Je=(gt[8]+1)/gt[0],Qe=ot*Wt,We=ot*Je,Ve=Pe/(-Wt+Je),ut=Ve*-Wt;de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ut),ne.translateZ(Ve),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();let R=ot+Ve,E=et+Ve,j=Qe-ut,ye=We+(Pe-ut),xe=Ee*et/E*R,ae=J*et/E*R;ne.projectionMatrix.makePerspective(j,ye,xe,ae,R,E),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function V(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;T.near=N.near=U.near=ne.near,T.far=N.far=U.far=ne.far,(C!==T.near||te!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,te=T.far);let de=ne.parent,Te=T.cameras;V(T,de);for(let Pe=0;Pe<Te.length;Pe++)V(Te[Pe],de);Te.length===2?q(T,U,N):T.projectionMatrix.copy(U.projectionMatrix),Z(ne,T,de)};function Z(ne,de,Te){Te===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=zc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)};let oe=null;function fe(ne,de){if(c=de.getViewerPose(u||a),x=de,c!==null){let Te=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let Pe=!1;Te.length!==T.cameras.length&&(T.cameras.length=0,Pe=!0);for(let He=0;He<Te.length;He++){let gt=Te[He],ot=null;if(m!==null)ot=m.getViewport(gt);else{let Ee=p.getViewSubImage(d,gt);ot=Ee.viewport,He===0&&(e.setRenderTargetTextures(g,Ee.colorTexture,d.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(g))}let et=ee[He];et===void 0&&(et=new gi,et.layers.enable(He),et.viewport=new Qn,ee[He]=et),et.matrix.fromArray(gt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(gt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ot.x,ot.y,ot.width,ot.height),He===0&&(T.matrix.copy(et.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Pe===!0&&T.cameras.push(et)}}for(let Te=0;Te<S.length;Te++){let Pe=v[Te],He=S[Te];Pe!==null&&He!==void 0&&He.update(Pe,de,u||a)}oe&&oe(ne,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),x=null}let be=new Sd;be.setAnimationLoop(fe),this.setAnimationLoop=function(ne){oe=ne},this.dispose=function(){}}};function T_(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,bd(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,S,v,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(y,g):g.isMeshToonMaterial?(r(y,g),p(y,g)):g.isMeshPhongMaterial?(r(y,g),c(y,g)):g.isMeshStandardMaterial?(r(y,g),d(y,g),g.isMeshPhysicalMaterial&&m(y,g,A)):g.isMeshMatcapMaterial?(r(y,g),x(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),M(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(a(y,g),g.isLineDashedMaterial&&o(y,g)):g.isPointsMaterial?l(y,g,S,v):g.isSpriteMaterial?u(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===vi&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===vi&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let S=e.get(g).envMap;if(S&&(y.envMap.value=S,y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function a(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function o(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function l(y,g,S,v){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*S,y.scale.value=v*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function c(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function p(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function d(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function m(y,g,S){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vi&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,g){g.matcap&&(y.matcap.value=g.matcap)}function M(y,g){let S=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w_(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let A=v.program;n.uniformBlockBinding(S,A)}function u(S,v){let A=s[S.id];A===void 0&&(x(S),A=c(S),s[S.id]=A,S.addEventListener("dispose",y));let O=v.program;n.updateUBOMapping(S,O);let U=e.render.frame;r[S.id]!==U&&(d(S),r[S.id]=U)}function c(S){let v=p();S.__bindingPointIndex=v;let A=i.createBuffer(),O=S.__size,U=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,O,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let v=s[S.id],A=S.uniforms,O=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let U=0,N=A.length;U<N;U++){let ee=Array.isArray(A[U])?A[U]:[A[U]];for(let T=0,C=ee.length;T<C;T++){let te=ee[T];if(m(te,U,T,O)===!0){let X=te.__offset,se=Array.isArray(te.value)?te.value:[te.value],B=0;for(let K=0;K<se.length;K++){let ie=se[K],q=M(ie);typeof ie=="number"||typeof ie=="boolean"?(te.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,X+B,te.__data)):ie.isMatrix3?(te.__data[0]=ie.elements[0],te.__data[1]=ie.elements[1],te.__data[2]=ie.elements[2],te.__data[3]=0,te.__data[4]=ie.elements[3],te.__data[5]=ie.elements[4],te.__data[6]=ie.elements[5],te.__data[7]=0,te.__data[8]=ie.elements[6],te.__data[9]=ie.elements[7],te.__data[10]=ie.elements[8],te.__data[11]=0):(ie.toArray(te.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,te.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,v,A,O){let U=S.value,N=v+"_"+A;if(O[N]===void 0)return typeof U=="number"||typeof U=="boolean"?O[N]=U:O[N]=U.clone(),!0;{let ee=O[N];if(typeof U=="number"||typeof U=="boolean"){if(ee!==U)return O[N]=U,!0}else if(ee.equals(U)===!1)return ee.copy(U),!0}return!1}function x(S){let v=S.uniforms,A=0,O=16;for(let N=0,ee=v.length;N<ee;N++){let T=Array.isArray(v[N])?v[N]:[v[N]];for(let C=0,te=T.length;C<te;C++){let X=T[C],se=Array.isArray(X.value)?X.value:[X.value];for(let B=0,K=se.length;B<K;B++){let ie=se[B],q=M(ie),V=A%O;V!==0&&O-V<q.boundary&&(A+=O-V),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=q.storage}}}let U=A%O;return U>0&&(A+=O-U),S.__size=A,S.__cache={},this}function M(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function y(S){let v=S.target;v.removeEventListener("dispose",y);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:u,dispose:g}}var Ga=class{constructor(e={}){let{canvas:t=Nm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),x=new Int32Array(4),M=null,y=null,g=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this._useLegacyLights=!1,this.toneMapping=Vs,this.toneMappingExposure=1;let v=this,A=!1,O=0,U=0,N=null,ee=-1,T=null,C=new Qn,te=new Qn,X=null,se=new Et(0),B=0,K=t.width,ie=t.height,q=1,V=null,Z=null,oe=new Qn(0,0,K,ie),fe=new Qn(0,0,K,ie),be=!1,ne=new Va,de=!1,Te=!1,Pe=null,He=new Mn,gt=new Xe,ot=new k,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return N===null?q:1}let J=n;function Wt(w,G){for(let $=0;$<w.length;$++){let W=w[$],Y=t.getContext(W,G);if(Y!==null)return Y}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wh}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Be,!1),J===null){let G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),J=Wt(G,w),J===null)throw Wt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Je,Qe,We,Ve,ut,R,E,j,ye,xe,ae,Ge,Ie,ze,Le,bt,Se,Ut,Pt,ft,lt,$e,Tt,qt;function Ht(){Je=new Xy(J),Qe=new ky(J,Je,e),Je.init(Qe),$e=new S_(J,Je,Qe),We=new M_(J,Je,Qe),Ve=new $y(J),ut=new c_,R=new b_(J,Je,We,ut,Qe,$e,Ve),E=new zy(v),j=new Wy(v),ye=new ng(J,Qe),Tt=new Oy(J,Je,ye,Qe),xe=new qy(J,ye,Ve,Tt),ae=new jy(J,xe,ye,Ve),Pt=new Jy(J,Qe,R),bt=new Hy(ut),Ge=new l_(v,E,j,Je,Qe,Tt,bt),Ie=new T_(v,ut),ze=new u_,Le=new y_(Je,Qe),Ut=new By(v,E,j,We,ae,d,l),Se=new v_(v,ae,Qe),qt=new w_(J,Ve,Qe,We),ft=new Fy(J,Je,Ve,Qe),lt=new Yy(J,Je,Ve,Qe),Ve.programs=Ge.programs,v.capabilities=Qe,v.extensions=Je,v.properties=ut,v.renderLists=ze,v.shadowMap=Se,v.state=We,v.info=Ve}Ht();let Rt=new nh(v,J);this.xr=Rt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let w=Je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(K,ie,!1))},this.getSize=function(w){return w.set(K,ie)},this.setSize=function(w,G,$=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,ie=G,t.width=Math.floor(w*q),t.height=Math.floor(G*q),$===!0&&(t.style.width=w+"px",t.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(K*q,ie*q).floor()},this.setDrawingBufferSize=function(w,G,$){K=w,ie=G,q=$,t.width=Math.floor(w*$),t.height=Math.floor(G*$),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,G,$,W){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,G,$,W),We.viewport(C.copy(oe).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(fe)},this.setScissor=function(w,G,$,W){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,G,$,W),We.scissor(te.copy(fe).multiplyScalar(q).floor())},this.getScissorTest=function(){return be},this.setScissorTest=function(w){We.setScissorTest(be=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(w=!0,G=!0,$=!0){let W=0;if(w){let Y=!1;if(N!==null){let Ne=N.texture.format;Y=Ne===md||Ne===pd||Ne===dd}if(Y){let Ne=N.texture.type,qe=Ne===Gs||Ne===ks||Ne===Rh||Ne===cr||Ne===ud||Ne===fd,it=Ut.getClearColor(),ct=Ut.getClearAlpha(),_t=it.r,je=it.g,vt=it.b;qe?(m[0]=_t,m[1]=je,m[2]=vt,m[3]=ct,J.clearBufferuiv(J.COLOR,0,m)):(x[0]=_t,x[1]=je,x[2]=vt,x[3]=ct,J.clearBufferiv(J.COLOR,0,x))}else W|=J.COLOR_BUFFER_BIT}G&&(W|=J.DEPTH_BUFFER_BIT),$&&(W|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),ze.dispose(),Le.dispose(),ut.dispose(),E.dispose(),j.dispose(),ae.dispose(),Tt.dispose(),qt.dispose(),Ge.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Kn),Rt.removeEventListener("sessionend",tn),Pe&&(Pe.dispose(),Pe=null),ti.stop()};function De(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Ve.autoReset,G=Se.enabled,$=Se.autoUpdate,W=Se.needsUpdate,Y=Se.type;Ht(),Ve.autoReset=w,Se.enabled=G,Se.autoUpdate=$,Se.needsUpdate=W,Se.type=Y}function Be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Oe(w){let G=w.target;G.removeEventListener("dispose",Oe),pt(G)}function pt(w){dt(w),ut.remove(w)}function dt(w){let G=ut.get(w).programs;G!==void 0&&(G.forEach(function($){Ge.releaseProgram($)}),w.isShaderMaterial&&Ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,$,W,Y,Ne){G===null&&(G=et);let qe=Y.isMesh&&Y.matrixWorld.determinant()<0,it=yr(w,G,$,W,Y);We.setMaterial(W,qe);let ct=$.index,_t=1;if(W.wireframe===!0){if(ct=xe.getWireframeAttribute($),ct===void 0)return;_t=2}let je=$.drawRange,vt=$.attributes.position,cn=je.start*_t,Un=(je.start+je.count)*_t;Ne!==null&&(cn=Math.max(cn,Ne.start*_t),Un=Math.min(Un,(Ne.start+Ne.count)*_t)),ct!==null?(cn=Math.max(cn,0),Un=Math.min(Un,ct.count)):vt!=null&&(cn=Math.max(cn,0),Un=Math.min(Un,vt.count));let Nn=Un-cn;if(Nn<0||Nn===1/0)return;Tt.setup(Y,W,it,$,ct);let Vi,sn=ft;if(ct!==null&&(Vi=ye.get(ct),sn=lt,sn.setIndex(Vi)),Y.isMesh)W.wireframe===!0?(We.setLineWidth(W.wireframeLinewidth*Ee()),sn.setMode(J.LINES)):sn.setMode(J.TRIANGLES);else if(Y.isLine){let yt=W.linewidth;yt===void 0&&(yt=1),We.setLineWidth(yt*Ee()),Y.isLineSegments?sn.setMode(J.LINES):Y.isLineLoop?sn.setMode(J.LINE_LOOP):sn.setMode(J.LINE_STRIP)}else Y.isPoints?sn.setMode(J.POINTS):Y.isSprite&&sn.setMode(J.TRIANGLES);if(Y.isBatchedMesh)sn.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)sn.renderInstances(cn,Nn,Y.count);else if($.isInstancedBufferGeometry){let yt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,xr=Math.min($.instanceCount,yt);sn.renderInstances(cn,Nn,xr)}else sn.render(cn,Nn)};function Zt(w,G,$){w.transparent===!0&&w.side===Cn&&w.forceSinglePass===!1?(w.side=vi,w.needsUpdate=!0,ws(w,G,$),w.side=Ws,w.needsUpdate=!0,ws(w,G,$),w.side=Cn):ws(w,G,$)}this.compile=function(w,G,$=null){$===null&&($=w),y=Le.get($),y.init(),S.push(y),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),w!==$&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights(v._useLegacyLights);let W=new Set;return w.traverse(function(Y){let Ne=Y.material;if(Ne)if(Array.isArray(Ne))for(let qe=0;qe<Ne.length;qe++){let it=Ne[qe];Zt(it,$,Y),W.add(it)}else Zt(Ne,$,Y),W.add(Ne)}),S.pop(),y=null,W},this.compileAsync=function(w,G,$=null){let W=this.compile(w,G,$);return new Promise(Y=>{function Ne(){if(W.forEach(function(qe){ut.get(qe).currentProgram.isReady()&&W.delete(qe)}),W.size===0){Y(w);return}setTimeout(Ne,10)}Je.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Jt=null;function Tn(w){Jt&&Jt(w)}function Kn(){ti.stop()}function tn(){ti.start()}let ti=new Sd;ti.setAnimationLoop(Tn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(w){Jt=w,Rt.setAnimationLoop(w),w===null?ti.stop():ti.start()},Rt.addEventListener("sessionstart",Kn),Rt.addEventListener("sessionend",tn),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(G),G=Rt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,G,N),y=Le.get(w,S.length),y.init(),S.push(y),He.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ne.setFromProjectionMatrix(He),Te=this.localClippingEnabled,de=bt.init(this.clippingPlanes,Te),M=ze.get(w,g.length),M.init(),g.push(M),bi(w,G,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(V,Z),this.info.render.frame++,de===!0&&bt.beginShadows();let $=y.state.shadowsArray;if(Se.render($,w,G),de===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ut.render(M,w),y.setupLights(v._useLegacyLights),G.isArrayCamera){let W=G.cameras;for(let Y=0,Ne=W.length;Y<Ne;Y++){let qe=W[Y];gr(M,w,qe,qe.viewport)}}else gr(M,w,G);N!==null&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(v,w,G),Tt.resetDefaultState(),ee=-1,T=null,S.pop(),S.length>0?y=S[S.length-1]:y=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function bi(w,G,$,W){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ne.intersectsSprite(w)){W&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(He);let qe=ae.update(w),it=w.material;it.visible&&M.push(w,qe,it,$,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ne.intersectsObject(w))){let qe=ae.update(w),it=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),ot.copy(qe.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(He)),Array.isArray(it)){let ct=qe.groups;for(let _t=0,je=ct.length;_t<je;_t++){let vt=ct[_t],cn=it[vt.materialIndex];cn&&cn.visible&&M.push(w,qe,cn,$,ot.z,vt)}}else it.visible&&M.push(w,qe,it,$,ot.z,null)}}let Ne=w.children;for(let qe=0,it=Ne.length;qe<it;qe++)bi(Ne[qe],G,$,W)}function gr(w,G,$,W){let Y=w.opaque,Ne=w.transmissive,qe=w.transparent;y.setupLightsView($),de===!0&&bt.setGlobalState(v.clippingPlanes,$),Ne.length>0&&to(Y,Ne,G,$),W&&We.viewport(C.copy(W)),Y.length>0&&Ts(Y,G,$),Ne.length>0&&Ts(Ne,G,$),qe.length>0&&Ts(qe,G,$),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function to(w,G,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let Ne=Qe.isWebGL2;Pe===null&&(Pe=new xs(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")?ka:Gs,minFilter:Fa,samples:Ne?4:0})),v.getDrawingBufferSize(gt),Ne?Pe.setSize(gt.x,gt.y):Pe.setSize(Vc(gt.x),Vc(gt.y));let qe=v.getRenderTarget();v.setRenderTarget(Pe),v.getClearColor(se),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let it=v.toneMapping;v.toneMapping=Vs,Ts(w,$,W),R.updateMultisampleRenderTarget(Pe),R.updateRenderTargetMipmap(Pe);let ct=!1;for(let _t=0,je=G.length;_t<je;_t++){let vt=G[_t],cn=vt.object,Un=vt.geometry,Nn=vt.material,Vi=vt.group;if(Nn.side===Cn&&cn.layers.test(W.layers)){let sn=Nn.side;Nn.side=vi,Nn.needsUpdate=!0,no(cn,$,W,Un,Nn,Vi),Nn.side=sn,Nn.needsUpdate=!0,ct=!0}}ct===!0&&(R.updateMultisampleRenderTarget(Pe),R.updateRenderTargetMipmap(Pe)),v.setRenderTarget(qe),v.setClearColor(se,B),v.toneMapping=it}function Ts(w,G,$){let W=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,Ne=w.length;Y<Ne;Y++){let qe=w[Y],it=qe.object,ct=qe.geometry,_t=W===null?qe.material:W,je=qe.group;it.layers.test($.layers)&&no(it,G,$,ct,_t,je)}}function no(w,G,$,W,Y,Ne){w.onBeforeRender(v,G,$,W,Y,Ne),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(v,G,$,W,w,Ne),Y.transparent===!0&&Y.side===Cn&&Y.forceSinglePass===!1?(Y.side=vi,Y.needsUpdate=!0,v.renderBufferDirect($,G,W,Y,w,Ne),Y.side=Ws,Y.needsUpdate=!0,v.renderBufferDirect($,G,W,Y,w,Ne),Y.side=Cn):v.renderBufferDirect($,G,W,Y,w,Ne),w.onAfterRender(v,G,$,W,Y,Ne)}function ws(w,G,$){G.isScene!==!0&&(G=et);let W=ut.get(w),Y=y.state.lights,Ne=y.state.shadowsArray,qe=Y.state.version,it=Ge.getParameters(w,Y.state,Ne,G,$),ct=Ge.getProgramCacheKey(it),_t=W.programs;W.environment=w.isMeshStandardMaterial?G.environment:null,W.fog=G.fog,W.envMap=(w.isMeshStandardMaterial?j:E).get(w.envMap||W.environment),_t===void 0&&(w.addEventListener("dispose",Oe),_t=new Map,W.programs=_t);let je=_t.get(ct);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===qe)return ua(w,it),je}else it.uniforms=Ge.getUniforms(w),w.onBuild($,it,v),w.onBeforeCompile(it,v),je=Ge.acquireProgram(it,ct),_t.set(ct,je),W.uniforms=it.uniforms;let vt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(vt.clippingPlanes=bt.uniform),ua(w,it),W.needsLights=io(w),W.lightsStateVersion=qe,W.needsLights&&(vt.ambientLightColor.value=Y.state.ambient,vt.lightProbe.value=Y.state.probe,vt.directionalLights.value=Y.state.directional,vt.directionalLightShadows.value=Y.state.directionalShadow,vt.spotLights.value=Y.state.spot,vt.spotLightShadows.value=Y.state.spotShadow,vt.rectAreaLights.value=Y.state.rectArea,vt.ltc_1.value=Y.state.rectAreaLTC1,vt.ltc_2.value=Y.state.rectAreaLTC2,vt.pointLights.value=Y.state.point,vt.pointLightShadows.value=Y.state.pointShadow,vt.hemisphereLights.value=Y.state.hemi,vt.directionalShadowMap.value=Y.state.directionalShadowMap,vt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,vt.spotShadowMap.value=Y.state.spotShadowMap,vt.spotLightMatrix.value=Y.state.spotLightMatrix,vt.spotLightMap.value=Y.state.spotLightMap,vt.pointShadowMap.value=Y.state.pointShadowMap,vt.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.currentProgram=je,W.uniformsList=null,je}function ha(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=Jr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function ua(w,G){let $=ut.get(w);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function yr(w,G,$,W,Y){G.isScene!==!0&&(G=et),R.resetTextureUnits();let Ne=G.fog,qe=W.isMeshStandardMaterial?G.environment:null,it=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ys,ct=(W.isMeshStandardMaterial?j:E).get(W.envMap||qe),_t=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,je=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),vt=!!$.morphAttributes.position,cn=!!$.morphAttributes.normal,Un=!!$.morphAttributes.color,Nn=Vs;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Nn=v.toneMapping);let Vi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,sn=Vi!==void 0?Vi.length:0,yt=ut.get(W),xr=y.state.lights;if(de===!0&&(Te===!0||w!==T)){let ht=w===T&&W.id===ee;bt.setState(W,w,ht)}let rn=!1;W.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==xr.state.version||yt.outputColorSpace!==it||Y.isBatchedMesh&&yt.batching===!1||!Y.isBatchedMesh&&yt.batching===!0||Y.isInstancedMesh&&yt.instancing===!1||!Y.isInstancedMesh&&yt.instancing===!0||Y.isSkinnedMesh&&yt.skinning===!1||!Y.isSkinnedMesh&&yt.skinning===!0||Y.isInstancedMesh&&yt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&yt.instancingColor===!1&&Y.instanceColor!==null||yt.envMap!==ct||W.fog===!0&&yt.fog!==Ne||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==bt.numPlanes||yt.numIntersection!==bt.numIntersection)||yt.vertexAlphas!==_t||yt.vertexTangents!==je||yt.morphTargets!==vt||yt.morphNormals!==cn||yt.morphColors!==Un||yt.toneMapping!==Nn||Qe.isWebGL2===!0&&yt.morphTargetsCount!==sn)&&(rn=!0):(rn=!0,yt.__version=W.version);let Pi=yt.currentProgram;rn===!0&&(Pi=ws(W,G,Y));let ni=!1,Ii=!1,Gn=!1,wn=Pi.getUniforms(),Si=yt.uniforms;if(We.useProgram(Pi.program)&&(ni=!0,Ii=!0,Gn=!0),W.id!==ee&&(ee=W.id,Ii=!0),ni||T!==w){wn.setValue(J,"projectionMatrix",w.projectionMatrix),wn.setValue(J,"viewMatrix",w.matrixWorldInverse);let ht=wn.map.cameraPosition;ht!==void 0&&ht.setValue(J,ot.setFromMatrixPosition(w.matrixWorld)),Qe.logarithmicDepthBuffer&&wn.setValue(J,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wn.setValue(J,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Ii=!0,Gn=!0)}if(Y.isSkinnedMesh){wn.setOptional(J,Y,"bindMatrix"),wn.setOptional(J,Y,"bindMatrixInverse");let ht=Y.skeleton;ht&&(Qe.floatVertexTextures?(ht.boneTexture===null&&ht.computeBoneTexture(),wn.setValue(J,"boneTexture",ht.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(wn.setOptional(J,Y,"batchingTexture"),wn.setValue(J,"batchingTexture",Y._matricesTexture,R));let at=$.morphAttributes;if((at.position!==void 0||at.normal!==void 0||at.color!==void 0&&Qe.isWebGL2===!0)&&Pt.update(Y,$,Pi),(Ii||yt.receiveShadow!==Y.receiveShadow)&&(yt.receiveShadow=Y.receiveShadow,wn.setValue(J,"receiveShadow",Y.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Si.envMap.value=ct,Si.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),Ii&&(wn.setValue(J,"toneMappingExposure",v.toneMappingExposure),yt.needsLights&&fa(Si,Gn),Ne&&W.fog===!0&&Ie.refreshFogUniforms(Si,Ne),Ie.refreshMaterialUniforms(Si,W,q,ie,Pe),Jr.upload(J,ha(yt),Si,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Jr.upload(J,ha(yt),Si,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wn.setValue(J,"center",Y.center),wn.setValue(J,"modelViewMatrix",Y.modelViewMatrix),wn.setValue(J,"normalMatrix",Y.normalMatrix),wn.setValue(J,"modelMatrix",Y.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let ht=W.uniformsGroups;for(let gn=0,Ln=ht.length;gn<Ln;gn++)if(Qe.isWebGL2){let da=ht[gn];qt.update(da,Pi),qt.bind(da,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function fa(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function io(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,G,$){ut.get(w.texture).__webglTexture=G,ut.get(w.depthTexture).__webglTexture=$;let W=ut.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=$===void 0,W.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,G){let $=ut.get(w);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,$=0){N=w,O=G,U=$;let W=!0,Y=null,Ne=!1,qe=!1;if(w){let ct=ut.get(w);ct.__useDefaultFramebuffer!==void 0?(We.bindFramebuffer(J.FRAMEBUFFER,null),W=!1):ct.__webglFramebuffer===void 0?R.setupRenderTarget(w):ct.__hasExternalTextures&&R.rebindTextures(w,ut.get(w.texture).__webglTexture,ut.get(w.depthTexture).__webglTexture);let _t=w.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(qe=!0);let je=ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[G])?Y=je[G][$]:Y=je[G],Ne=!0):Qe.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?Y=ut.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?Y=je[$]:Y=je,C.copy(w.viewport),te.copy(w.scissor),X=w.scissorTest}else C.copy(oe).multiplyScalar(q).floor(),te.copy(fe).multiplyScalar(q).floor(),X=be;if(We.bindFramebuffer(J.FRAMEBUFFER,Y)&&Qe.drawBuffers&&W&&We.drawBuffers(w,Y),We.viewport(C),We.scissor(te),We.setScissorTest(X),Ne){let ct=ut.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+G,ct.__webglTexture,$)}else if(qe){let ct=ut.get(w.texture),_t=G||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,ct.__webglTexture,$||0,_t)}ee=-1},this.readRenderTargetPixels=function(w,G,$,W,Y,Ne,qe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qe!==void 0&&(it=it[qe]),it){We.bindFramebuffer(J.FRAMEBUFFER,it);try{let ct=w.texture,_t=ct.format,je=ct.type;if(_t!==Zi&&$e.convert(_t)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let vt=je===ka&&(Je.has("EXT_color_buffer_half_float")||Qe.isWebGL2&&Je.has("EXT_color_buffer_float"));if(je!==Gs&&$e.convert(je)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Hs&&(Qe.isWebGL2||Je.has("OES_texture_float")||Je.has("WEBGL_color_buffer_float")))&&!vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-W&&$>=0&&$<=w.height-Y&&J.readPixels(G,$,W,Y,$e.convert(_t),$e.convert(je),Ne)}finally{let ct=N!==null?ut.get(N).__webglFramebuffer:null;We.bindFramebuffer(J.FRAMEBUFFER,ct)}}},this.copyFramebufferToTexture=function(w,G,$=0){let W=Math.pow(2,-$),Y=Math.floor(G.image.width*W),Ne=Math.floor(G.image.height*W);R.setTexture2D(G,0),J.copyTexSubImage2D(J.TEXTURE_2D,$,0,0,w.x,w.y,Y,Ne),We.unbindTexture()},this.copyTextureToTexture=function(w,G,$,W=0){let Y=G.image.width,Ne=G.image.height,qe=$e.convert($.format),it=$e.convert($.type);R.setTexture2D($,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,$.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,$.unpackAlignment),G.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,W,w.x,w.y,Y,Ne,qe,it,G.image.data):G.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,W,w.x,w.y,G.mipmaps[0].width,G.mipmaps[0].height,qe,G.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,W,w.x,w.y,qe,it,G.image),W===0&&$.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),We.unbindTexture()},this.copyTextureToTexture3D=function(w,G,$,W,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ne=w.max.x-w.min.x+1,qe=w.max.y-w.min.y+1,it=w.max.z-w.min.z+1,ct=$e.convert(W.format),_t=$e.convert(W.type),je;if(W.isData3DTexture)R.setTexture3D(W,0),je=J.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),je=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,W.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,W.unpackAlignment);let vt=J.getParameter(J.UNPACK_ROW_LENGTH),cn=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Un=J.getParameter(J.UNPACK_SKIP_PIXELS),Nn=J.getParameter(J.UNPACK_SKIP_ROWS),Vi=J.getParameter(J.UNPACK_SKIP_IMAGES),sn=$.isCompressedTexture?$.mipmaps[Y]:$.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,sn.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,sn.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,w.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,w.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,w.min.z),$.isDataTexture||$.isData3DTexture?J.texSubImage3D(je,Y,G.x,G.y,G.z,Ne,qe,it,ct,_t,sn.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(je,Y,G.x,G.y,G.z,Ne,qe,it,ct,sn.data)):J.texSubImage3D(je,Y,G.x,G.y,G.z,Ne,qe,it,ct,_t,sn),J.pixelStorei(J.UNPACK_ROW_LENGTH,vt),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,cn),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Un),J.pixelStorei(J.UNPACK_SKIP_ROWS,Nn),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Vi),Y===0&&W.generateMipmaps&&J.generateMipmap(je),We.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),We.unbindTexture()},this.resetState=function(){O=0,U=0,N=null,We.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ch?"display-p3":"srgb",t.unpackColorSpace=nn.workingColorSpace===wl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ri?ur:yd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ur?ri:ys}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ih=class extends Ga{};ih.prototype.isWebGL1Renderer=!0;var ll=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cl=class extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Wa=class extends ei{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wr=new Mn,qf=new Mn,Fo=[],Yf=new _s,A_=new Mn,Pa=new Ze,Ia=new qs,hl=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,A_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _s),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),Yf.copy(e.boundingBox).applyMatrix4(Wr),this.boundingBox.union(Yf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),Ia.copy(e.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(Ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(n),e.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wr),qf.multiplyMatrices(n,Wr),Pa.matrixWorld=qf,Pa.raycast(e,Fo);for(let a=0,o=Fo.length;a<o;a++){let l=Fo[a];l.instanceId=r,l.object=this,t.push(l)}Fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Xa=class extends Ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$f=new k,Kf=new k,Zf=new Mn,Pc=new Ha,ko=new qs,sh=class extends ai{constructor(e=new oi,t=new Xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$f.fromBufferAttribute(t,s-1),Kf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$f.distanceTo(Kf);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;Zf.copy(s).invert(),Pc.copy(e.ray).applyMatrix4(Zf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new k,c=new k,p=new k,d=new k,m=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){let g=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=m){let O=x.getX(v),U=x.getX(v+1);if(u.fromBufferAttribute(y,O),c.fromBufferAttribute(y,U),Pc.distanceSqToSegment(u,c,d,p)>l)continue;d.applyMatrix4(this.matrixWorld);let ee=e.ray.origin.distanceTo(d);ee<e.near||ee>e.far||t.push({distance:ee,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,a.start),S=Math.min(y.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=m){if(u.fromBufferAttribute(y,v),c.fromBufferAttribute(y,v+1),Pc.distanceSqToSegment(u,c,d,p)>l)continue;d.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Jf=new k,jf=new k,ul=class extends sh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Jf.fromBufferAttribute(t,s),jf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jf.distanceTo(jf);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fl=class extends ki{constructor(e,t,n,s,r,a,o,l,u){super(e,t,n,s,r,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,u;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),u=n[s]-a,u<0)o=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let c=n[s],d=n[s+1]-c,m=(a-c)/d;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Xe:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new k,s=[],r=[],a=[],o=new k,l=new Mn;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new k)}r[0]=new k,a[0]=new k;let u=Number.MAX_VALUE,c=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=u&&(u=c,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),d<=u&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(fi(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,x))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(fi(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qa=class extends Hi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Xe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,m=u-this.aY;l=d*c-m*p+this.aX,u=d*p+m*c+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rh=class extends qa{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ih(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,u){s(a,o,u*(o-r),u*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,u,c,p){let d=(a-r)/u-(o-r)/(u+c)+(o-a)/c,m=(o-a)/c-(l-a)/(c+p)+(l-o)/p;d*=c,m*=c,s(a,o,d,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ho=new k,Ic=new Ih,Lc=new Ih,Dc=new Ih,ah=class extends Hi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let u,c;this.closed||o>0?u=s[(o-1)%r]:(Ho.subVectors(s[0],s[1]).add(s[0]),u=Ho);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?c=s[(o+2)%r]:(Ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Ho),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(u.distanceToSquared(p),m),M=Math.pow(p.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(c),m);M<1e-4&&(M=1),x<1e-4&&(x=M),y<1e-4&&(y=M),Ic.initNonuniformCatmullRom(u.x,p.x,d.x,c.x,x,M,y),Lc.initNonuniformCatmullRom(u.y,p.y,d.y,c.y,x,M,y),Dc.initNonuniformCatmullRom(u.z,p.z,d.z,c.z,x,M,y)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(u.x,p.x,d.x,c.x,this.tension),Lc.initCatmullRom(u.y,p.y,d.y,c.y,this.tension),Dc.initCatmullRom(u.z,p.z,d.z,c.z,this.tension));return n.set(Ic.calc(l),Lc.calc(l),Dc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function R_(i,e){let t=1-i;return t*t*e}function C_(i,e){return 2*(1-i)*i*e}function P_(i,e){return i*i*e}function Ua(i,e,t,n){return R_(i,e)+C_(i,t)+P_(i,n)}function I_(i,e){let t=1-i;return t*t*t*e}function L_(i,e){let t=1-i;return 3*t*t*i*e}function D_(i,e){return 3*(1-i)*i*i*e}function U_(i,e){return i*i*i*e}function Na(i,e,t,n,s){return I_(i,e)+L_(i,t)+D_(i,n)+U_(i,s)}var dl=class extends Hi{constructor(e=new Xe,t=new Xe,n=new Xe,s=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Xe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oh=class extends Hi{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y),Na(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends Hi{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lh=class extends Hi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends Hi{constructor(e=new Xe,t=new Xe,n=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Xe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ua(e,s.x,r.x,a.x),Ua(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ch=class extends Hi{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ua(e,s.x,r.x,a.x),Ua(e,s.y,r.y,a.y),Ua(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],u=s[a],c=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Qf(o,l.x,u.x,c.x,p.x),Qf(o,l.y,u.y,c.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Xe().fromArray(s))}return this}},ed=Object.freeze({__proto__:null,ArcCurve:rh,CatmullRomCurve3:ah,CubicBezierCurve:dl,CubicBezierCurve3:oh,EllipseCurve:qa,LineCurve:pl,LineCurve3:lh,QuadraticBezierCurve:ml,QuadraticBezierCurve3:ch,SplineCurve:gl}),hh=class extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ed[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),u=l===0?0:1-a/l;return o.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let u=0;u<l.length;u++){let c=l[u];n&&n.equals(c)||(t.push(c),n=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ed[s.type]().fromJSON(s))}return this}},ia=class extends hh{constructor(e){super(),this.type="Path",this.currentPoint=new Xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new pl(this.currentPoint.clone(),new Xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ml(this.currentPoint.clone(),new Xe(e,t),new Xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new dl(this.currentPoint.clone(),new Xe(e,t),new Xe(n,s),new Xe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new gl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let u=new qa(e,t,n,s,r,a,o,l);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var $s=class i extends oi{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let u=this;s=Math.floor(s),r=Math.floor(r);let c=[],p=[],d=[],m=[],x=0,M=[],y=n/2,g=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new ln(p,3)),this.setAttribute("normal",new ln(d,3)),this.setAttribute("uv",new ln(m,2));function S(){let A=new k,O=new k,U=0,N=(t-e)/n;for(let ee=0;ee<=r;ee++){let T=[],C=ee/r,te=C*(t-e)+e;for(let X=0;X<=s;X++){let se=X/s,B=se*l+o,K=Math.sin(B),ie=Math.cos(B);O.x=te*K,O.y=-C*n+y,O.z=te*ie,p.push(O.x,O.y,O.z),A.set(K,N,ie).normalize(),d.push(A.x,A.y,A.z),m.push(se,1-C),T.push(x++)}M.push(T)}for(let ee=0;ee<s;ee++)for(let T=0;T<r;T++){let C=M[T][ee],te=M[T+1][ee],X=M[T+1][ee+1],se=M[T][ee+1];c.push(C,te,se),c.push(te,X,se),U+=6}u.addGroup(g,U,0),g+=U}function v(A){let O=x,U=new Xe,N=new k,ee=0,T=A===!0?e:t,C=A===!0?1:-1;for(let X=1;X<=s;X++)p.push(0,y*C,0),d.push(0,C,0),m.push(.5,.5),x++;let te=x;for(let X=0;X<=s;X++){let B=X/s*l+o,K=Math.cos(B),ie=Math.sin(B);N.x=T*ie,N.y=y*C,N.z=T*K,p.push(N.x,N.y,N.z),d.push(0,C,0),U.x=K*.5+.5,U.y=ie*.5*C+.5,m.push(U.x,U.y),x++}for(let X=0;X<s;X++){let se=O+X,B=te+X;A===!0?c.push(B,B+1,se):c.push(B+1,B,se),ee+=3}u.addGroup(g,ee,A===!0?1:2),g+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ri=class i extends $s{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yl=class i extends oi{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),u(n),c(),this.setAttribute("position",new ln(r,3)),this.setAttribute("normal",new ln(r.slice(),3)),this.setAttribute("uv",new ln(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new k,A=new k,O=new k;for(let U=0;U<t.length;U+=3)m(t[U+0],v),m(t[U+1],A),m(t[U+2],O),l(v,A,O,S)}function l(S,v,A,O){let U=O+1,N=[];for(let ee=0;ee<=U;ee++){N[ee]=[];let T=S.clone().lerp(A,ee/U),C=v.clone().lerp(A,ee/U),te=U-ee;for(let X=0;X<=te;X++)X===0&&ee===U?N[ee][X]=T:N[ee][X]=T.clone().lerp(C,X/te)}for(let ee=0;ee<U;ee++)for(let T=0;T<2*(U-ee)-1;T++){let C=Math.floor(T/2);T%2===0?(d(N[ee][C+1]),d(N[ee+1][C]),d(N[ee][C])):(d(N[ee][C+1]),d(N[ee+1][C+1]),d(N[ee+1][C]))}}function u(S){let v=new k;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(S),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function c(){let S=new k;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let A=y(S)/2/Math.PI+.5,O=g(S)/Math.PI+.5;a.push(A,1-O)}x(),p()}function p(){for(let S=0;S<a.length;S+=6){let v=a[S+0],A=a[S+2],O=a[S+4],U=Math.max(v,A,O),N=Math.min(v,A,O);U>.9&&N<.1&&(v<.2&&(a[S+0]+=1),A<.2&&(a[S+2]+=1),O<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,v){let A=S*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function x(){let S=new k,v=new k,A=new k,O=new k,U=new Xe,N=new Xe,ee=new Xe;for(let T=0,C=0;T<r.length;T+=9,C+=6){S.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),A.set(r[T+6],r[T+7],r[T+8]),U.set(a[C+0],a[C+1]),N.set(a[C+2],a[C+3]),ee.set(a[C+4],a[C+5]),O.copy(S).add(v).add(A).divideScalar(3);let te=y(O);M(U,C+0,S,te),M(N,C+2,v,te),M(ee,C+4,A,te)}}function M(S,v,A,O){O<0&&S.x===1&&(a[v]=S.x-1),A.x===0&&A.z===0&&(a[v]=O/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},xl=class i extends yl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var sa=class extends ia{constructor(e){super(e),this.uuid=aa(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ia().fromJSON(s))}return this}},N_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Cd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,u,c,p,d,m;if(n&&(r=H_(i,e,r,t)),i.length>80*t){o=u=i[0],l=c=i[1];for(let x=t;x<s;x+=t)p=i[x],d=i[x+1],p<o&&(o=p),d<l&&(l=d),p>u&&(u=p),d>c&&(c=d);m=Math.max(u-o,c-l),m=m!==0?32767/m:0}return Ya(r,a,t,o,l,m,0),a}};function Cd(i,e,t,n,s){let r,a;if(s===J_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=td(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=td(r,i[r],i[r+1],a);return a&&Rl(a,a.next)&&(Ka(a),a=a.next),a}function fr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Rl(t,t.next)||Pn(t.prev,t,t.next)===0)){if(Ka(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ya(i,e,t,n,s,r,a){if(!i)return;!a&&r&&X_(i,n,s,r);let o=i,l,u;for(;i.prev!==i.next;){if(l=i.prev,u=i.next,r?O_(i,n,s,r):B_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(u.i/t|0),Ka(i),i=u.next,o=u.next;continue}if(i=u,i===o){a?a===1?(i=F_(fr(i),e,t),Ya(i,e,t,n,s,r,2)):a===2&&k_(i,e,t,n,s,r):Ya(fr(i),e,t,n,s,r,1);break}}}function B_(i){let e=i.prev,t=i,n=i.next;if(Pn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,u=n.y,c=s<r?s<a?s:a:r<a?r:a,p=o<l?o<u?o:u:l<u?l:u,d=s>r?s>a?s:a:r>a?r:a,m=o>l?o>u?o:u:l>u?l:u,x=n.next;for(;x!==e;){if(x.x>=c&&x.x<=d&&x.y>=p&&x.y<=m&&$r(s,o,r,l,a,u,x.x,x.y)&&Pn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function O_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Pn(s,r,a)>=0)return!1;let o=s.x,l=r.x,u=a.x,c=s.y,p=r.y,d=a.y,m=o<l?o<u?o:u:l<u?l:u,x=c<p?c<d?c:d:p<d?p:d,M=o>l?o>u?o:u:l>u?l:u,y=c>p?c>d?c:d:p>d?p:d,g=uh(m,x,e,t,n),S=uh(M,y,e,t,n),v=i.prevZ,A=i.nextZ;for(;v&&v.z>=g&&A&&A.z<=S;){if(v.x>=m&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&$r(o,c,l,p,u,d,v.x,v.y)&&Pn(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=m&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&$r(o,c,l,p,u,d,A.x,A.y)&&Pn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=g;){if(v.x>=m&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&$r(o,c,l,p,u,d,v.x,v.y)&&Pn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=S;){if(A.x>=m&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&$r(o,c,l,p,u,d,A.x,A.y)&&Pn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function F_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Rl(s,r)&&Pd(s,n,n.next,r)&&$a(s,r)&&$a(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ka(n),Ka(n.next),n=i=r),n=n.next}while(n!==i);return fr(n)}function k_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$_(a,o)){let l=Id(a,o);a=fr(a,a.next),l=fr(l,l.next),Ya(a,e,t,n,s,r,0),Ya(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function H_(i,e,t,n){let s=[],r,a,o,l,u;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,u=Cd(i,o,l,n,!1),u===u.next&&(u.steiner=!0),s.push(Y_(u));for(s.sort(z_),r=0;r<s.length;r++)t=V_(s[r],t);return t}function z_(i,e){return i.x-e.x}function V_(i,e){let t=G_(i,e);if(!t)return e;let n=Id(t,i);return fr(n,n.next),fr(t,t.next)}function G_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,u=s.y,c=1/0,p;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&$r(a<u?r:n,a,l,u,a<u?n:r,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(r-t.x),$a(t,i)&&(p<c||p===c&&(t.x>s.x||t.x===s.x&&W_(s,t)))&&(s=t,c=p)),t=t.next;while(t!==o);return s}function W_(i,e){return Pn(i.prev,i,e.prev)<0&&Pn(e.next,i,i.next)<0}function X_(i,e,t,n){let s=i;do s.z===0&&(s.z=uh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,q_(s)}function q_(i){let e,t,n,s,r,a,o,l,u=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<u&&(o++,n=n.nextZ,!!n);e++);for(l=u;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,u*=2}while(a>1);return i}function uh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Y_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $r(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function $_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!K_(i,e)&&($a(i,e)&&$a(e,i)&&Z_(i,e)&&(Pn(i.prev,i,e.prev)||Pn(i,e.prev,e))||Rl(i,e)&&Pn(i.prev,i,i.next)>0&&Pn(e.prev,e,e.next)>0)}function Pn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Rl(i,e){return i.x===e.x&&i.y===e.y}function Pd(i,e,t,n){let s=Vo(Pn(i,e,t)),r=Vo(Pn(i,e,n)),a=Vo(Pn(t,n,i)),o=Vo(Pn(t,n,e));return!!(s!==r&&a!==o||s===0&&zo(i,t,e)||r===0&&zo(i,n,e)||a===0&&zo(t,i,n)||o===0&&zo(t,e,n))}function zo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Vo(i){return i>0?1:i<0?-1:0}function K_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $a(i,e){return Pn(i.prev,i,i.next)<0?Pn(i,e,i.next)>=0&&Pn(i,i.prev,e)>=0:Pn(i,e,i.prev)<0||Pn(i,i.next,e)<0}function Z_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Id(i,e){let t=new fh(i.i,i.x,i.y),n=new fh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function td(i,e,t,n){let s=new fh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ka(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ba=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];nd(e),id(n,e);let a=e.length;t.forEach(nd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,id(n,t[l]);let o=N_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function nd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function id(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _l=class i extends yl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Za=class i extends oi{constructor(e=new sa([new Xe(0,.5),new Xe(-.5,-.5),new Xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ln(s,3)),this.setAttribute("normal",new ln(r,3)),this.setAttribute("uv",new ln(a,2));function u(c){let p=s.length/3,d=c.extractPoints(t),m=d.shape,x=d.holes;Ba.isClockWise(m)===!1&&(m=m.reverse());for(let y=0,g=x.length;y<g;y++){let S=x[y];Ba.isClockWise(S)===!0&&(x[y]=S.reverse())}let M=Ba.triangulateShape(m,x);for(let y=0,g=x.length;y<g;y++){let S=x[y];m=m.concat(S)}for(let y=0,g=m.length;y<g;y++){let S=m[y];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let y=0,g=M.length;y<g;y++){let S=M[y],v=S[0]+p,A=S[1]+p,O=S[2]+p;n.push(v,A,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return j_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function j_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var as=class i extends oi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),u=0,c=[],p=new k,d=new k,m=[],x=[],M=[],y=[];for(let g=0;g<=n;g++){let S=[],v=g/n,A=0;g===0&&a===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let O=0;O<=t;O++){let U=O/t;p.x=-e*Math.cos(s+U*r)*Math.sin(a+v*o),p.y=e*Math.cos(a+v*o),p.z=e*Math.sin(s+U*r)*Math.sin(a+v*o),x.push(p.x,p.y,p.z),d.copy(p).normalize(),M.push(d.x,d.y,d.z),y.push(U+A,1-v),S.push(u++)}c.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let v=c[g][S+1],A=c[g][S],O=c[g+1][S],U=c[g+1][S+1];(g!==0||a>0)&&m.push(v,A,U),(g!==n-1||l<Math.PI)&&m.push(A,O,U)}this.setIndex(m),this.setAttribute("position",new ln(x,3)),this.setAttribute("normal",new ln(M,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vl=class i extends oi{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],u=[],c=new k,p=new k,d=new k;for(let m=0;m<=n;m++)for(let x=0;x<=s;x++){let M=x/s*r,y=m/n*Math.PI*2;p.x=(e+t*Math.cos(y))*Math.cos(M),p.y=(e+t*Math.cos(y))*Math.sin(M),p.z=t*Math.sin(y),o.push(p.x,p.y,p.z),c.x=e*Math.cos(M),c.y=e*Math.sin(M),d.subVectors(p,c).normalize(),l.push(d.x,d.y,d.z),u.push(x/s),u.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=s;x++){let M=(s+1)*m+x-1,y=(s+1)*(m-1)+x-1,g=(s+1)*(m-1)+x,S=(s+1)*m+x;a.push(M,y,S),a.push(y,g,S)}this.setIndex(a),this.setAttribute("position",new ln(o,3)),this.setAttribute("normal",new ln(l,3)),this.setAttribute("uv",new ln(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var zn=class extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Go(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Q_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ra=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dh=class extends ra{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tf,endingEnd:tf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nf:r=e,o=2*t-n;break;case sf:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nf:a=e,l=2*n-t;break;case sf:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let u=(n-t)*.5,c=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(l-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),M=x*x,y=M*x,g=-d*y+2*d*M-d*x,S=(1+d)*y+(-1.5-2*d)*M+(-.5+d)*x+1,v=(-1-m)*y+(1.5+m)*M+.5*x,A=m*y-m*M;for(let O=0;O!==o;++O)r[O]=g*a[c+O]+S*a[u+O]+v*a[l+O]+A*a[p+O];return r}},ph=class extends ra{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=(n-t)/(s-t),p=1-c;for(let d=0;d!==o;++d)r[d]=a[u+d]*p+a[l+d]*c;return r}},mh=class extends ra{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ji=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Go(t,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Go(e.times,Array),values:Go(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xo:t=this.InterpolantFactoryMethodDiscrete;break;case qo:t=this.InterpolantFactoryMethodLinear;break;case rc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Q_(s))for(let o=0,l=s.length;o!==l;++o){let u=s[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,u=e[o],c=e[o+1];if(u!==c&&(o!==1||u!==e[0]))if(s)l=!0;else{let p=o*n,d=p-n,m=p+n;for(let x=0;x!==n;++x){let M=t[p+x];if(M!==t[d+x]||M!==t[m+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[p+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,u=0;u!==n;++u)t[l+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ji.prototype.TimeBufferType=Float32Array;Ji.prototype.ValueBufferType=Float32Array;Ji.prototype.DefaultInterpolation=qo;var dr=class extends Ji{};dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Xo;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends Ji{};gh.prototype.ValueTypeName="color";var yh=class extends Ji{};yh.prototype.ValueTypeName="number";var xh=class extends ra{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),u=e*o;for(let c=u+o;u!==c;u+=4)ss.slerpFlat(r,0,a,u-o,a,u,l);return r}},Ja=class extends Ji{InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}};Ja.prototype.ValueTypeName="quaternion";Ja.prototype.DefaultInterpolation=qo;Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var pr=class extends Ji{};pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Xo;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var _h=class extends Ji{};_h.prototype.ValueTypeName="vector";var vh=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,p){return u.push(c,p),this},this.removeHandler=function(c){let p=u.indexOf(c);return p!==-1&&u.splice(p,2),this},this.getHandler=function(c){for(let p=0,d=u.length;p<d;p+=2){let m=u[p],x=u[p+1];if(m.global&&(m.lastIndex=0),m.test(c))return x}return null}}},ev=new vh,Mh=class{constructor(e){this.manager=e!==void 0?e:ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Mh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ml=class extends ai{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Uc=new Mn,sd=new k,rd=new k,bh=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Qn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(sd),rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rd),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Sh=class extends bh{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bl=class extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ai.DEFAULT_UP),this.updateMatrix(),this.target=new ai,this.shadow=new Sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Sl=class extends Ml{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Lh="\\[\\]\\.:\\/",tv=new RegExp("["+Lh+"]","g"),Dh="[^"+Lh+"]",nv="[^"+Lh.replace("\\.","")+"]",iv=/((?:WC+[\/:])*)/.source.replace("WC",Dh),sv=/(WCOD+)?/.source.replace("WCOD",nv),rv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),ov=new RegExp("^"+iv+sv+rv+av+"$"),lv=["material","materials","bones","map"],Eh=class{constructor(e,t,n){let s=n||En.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},En=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tv,"")}static parseTrackName(e){let t=ov.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};En.Composite=Eh;En.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};En.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};En.prototype.GetterByBindingType=[En.prototype._getValue_direct,En.prototype._getValue_array,En.prototype._getValue_arrayElement,En.prototype._getValue_toArray];En.prototype.SetterByBindingTypeAndVersioning=[[En.prototype._setValue_direct,En.prototype._setValue_direct_setNeedsUpdate,En.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[En.prototype._setValue_array,En.prototype._setValue_array_setNeedsUpdate,En.prototype._setValue_array_setMatrixWorldNeedsUpdate],[En.prototype._setValue_arrayElement,En.prototype._setValue_arrayElement_setNeedsUpdate,En.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[En.prototype._setValue_fromArray,En.prototype._setValue_fromArray_setNeedsUpdate,En.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iv=new Float32Array(1);var El=class{constructor(e,t,n=0,s=1/0){this.ray=new Ha(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Th(e,this,n,t),n.sort(ad),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Th(e[s],this,n,t);return n.sort(ad),n}};function ad(i,e){return i.distance-e.distance}function Th(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Th(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);function ja(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new oi,u=0;for(let c=0;c<i.length;++c){let p=i[c],d=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in p.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(p.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in p.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(p.morphAttributes[m])}if(e){let m;if(t)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,m,c),u+=m}}if(t){let c=0,p=[];for(let d=0;d<i.length;++d){let m=i[d].index;for(let x=0;x<m.count;++x)p.push(m.getX(x)+c);c+=i[d].attributes.position.count}l.setIndex(p)}for(let c in r){let p=Ld(r[c]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,p)}for(let c in a){let p=a[c][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<p;++d){let m=[];for(let M=0;M<a[c].length;++M)m.push(a[c][M][d]);let x=Ld(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(x)}}return l}function Ld(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let c=i[u];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.array.length}let a=new e(r),o=0;for(let u=0;u<i.length;++u)a.set(i[u].array,o),o+=i[u].array.length;let l=new ei(a,t,n);return s!==void 0&&(l.gpuType=s),l}var Uh=35,Nh=25,Bh=.29,tt=.95,$n=.35,Ms=200,Ci=7,Ks=300,Ss=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function hv(i){let e=typeof i=="string"?uv(i):i>>>0;return function(){e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t=(t^t>>>7)>>>0,t/4294967296}}function uv(i){let e=0;for(let t=0;t<i.length;t++)e=Math.imul(31,e)+i.charCodeAt(t),e=e>>>0;return e}var fv=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],Hd=[],dv={tank:["knight","berserker","werewolf","ghoul","barbarian"],melee:["samurai","assassin","ninja","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist","oracle"],ranged:["ranger","amazon","hunter","alchemist","cannibal"],caster:["mage","witch","vampire","necromancer","shaman"]},Qa={tank:2,melee:2,support:1,ranged:1,caster:1},Oh={};for(let[i,e]of Object.entries(dv))for(let t of e)Oh[t]=i;function pv(i){let e=Math.max(1,i),t=Object.keys(Qa),n=t.reduce((l,u)=>l+(Qa[u]??0),0),s={},r=0;for(let l of t){let u=Math.floor(e*(Qa[l]??0)/n);s[l]=u,r+=u}let a=e-r,o=[...t].sort((l,u)=>s[l]!==s[u]?s[l]-s[u]:(Qa[u]??0)-(Qa[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var nt={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Mi=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist","vampire","necromancer","barbarian","cannibal","shaman","oracle","amazon"];Hd=[...Mi];function mv(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Vn={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:14,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:4,agi:3,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:24,maxHp:24,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:23,maxHp:23,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:8},assassin:{name:"Assassin",gender:"female",hp:20,maxHp:20,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:1,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:21,maxHp:21,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:8,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:6,maxMp:6,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:6,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:25,maxHp:25,mp:8,maxMp:8,str:13,agi:8,vit:12,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:10,dex:5,luk:8,int:11,range:5},vampire:{name:"Vampire",gender:"female",hp:18,maxHp:18,mp:16,maxMp:16,str:11,agi:12,vit:3,dex:4,luk:3,int:12,range:1},necromancer:{name:"Necromancer",gender:"male",hp:20,maxHp:20,mp:20,maxMp:20,str:5,agi:4,vit:7,dex:3,luk:11,int:15,range:1},barbarian:{name:"Barbarian",gender:"male",hp:31,maxHp:31,mp:4,maxMp:4,str:16,agi:4,vit:15,dex:6,luk:3,int:2,range:1},cannibal:{name:"Cannibal",gender:"male",hp:22,maxHp:22,mp:7,maxMp:7,str:6,agi:11,vit:2,dex:13,luk:9,int:7,range:4},shaman:{name:"Shaman",gender:"female",hp:16,maxHp:16,mp:21,maxMp:21,str:4,agi:3,vit:3,dex:3,luk:16,int:16,range:4},oracle:{name:"Oracle",gender:"female",hp:19,maxHp:19,mp:19,maxMp:19,str:6,agi:7,vit:4,dex:10,luk:14,int:10,range:1},amazon:{name:"Amazon",gender:"female",hp:23,maxHp:23,mp:5,maxMp:5,str:12,agi:9,vit:11,dex:7,luk:4,int:3,range:3}},gv=["hp","maxHp","mp","str","agi","vit","dex","luk","int"],zd={};for(let i of Mi){let e=Vn[i];if(!e)continue;let t=gv.map(s=>e[s]??0),n=t.reduce((s,r)=>s+r,0)/t.length;zd[i]=t.reduce((s,r)=>s+(r-n)**2,0)/t.length}var Zs={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331},vampire:{primary:16704468,secondary:16704468,hair:1250066,cape:1250066,apron:1250066},necromancer:{primary:405028,secondary:405028,hair:7434350,cape:405028,belt:11372065},barbarian:{primary:11497041,secondary:6045747,hair:6045747,belt:11098894,skin:11497041},cannibal:{primary:11497041,secondary:8421504,hair:6045747,cape:16753920,belt:16753920,skin:11497041},shaman:{primary:3224389,secondary:4349324,hair:32896,cape:5152741,horns:16775930},oracle:{primary:16775930,secondary:16775930,hair:6045747,cape:16777215,belt:15712004,horns:15712004},amazon:{primary:11497041,secondary:11497041,hair:0,cape:331790,belt:0,horns:0,skin:11497041,apron:331790}},la={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp",vampire:"https://files.idyllic.app/files/static/2567599?width=256&optimizer=image",necromancer:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k",barbarian:"https://image.lexica.art/full_jpg/dd171d51-f518-4ae9-949b-23f5d7a157be",cannibal:"https://i.pinimg.com/736x/de/57/d1/de57d1e7aa4dd2d8f052d48b06831cbd.jpg",shaman:"https://w0.peakpx.com/wallpaper/350/203/HD-wallpaper-guy-shaman-skull-horns-anime-art-green-thumbnail.jpg",oracle:"https://images.stockcake.com/public/a/3/d/a3d08448-237f-4c23-8660-43b615c9e3c9_large/desert-oracle-enchantress-stockcake.jpg",amazon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnWAK4nkfgm8v-Ab35e3lkKOPOGTJzprr1w&s"},os=Mi.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function yv(i,e,t){if(!Ss)return;let n=i?.class;if(i?.summonedBy!=null&&Array.isArray(t)){let r=t.find(a=>a.id===i.summonedBy);r?.class&&(n=r.class)}if(Mi.includes(n)&&os[n]&&os[n].kills++,e?.summonedBy!=null)return;let s=e?.class;Mi.includes(s)&&os[s]&&os[s].deaths++}function xv(i,e){if(!Ss)return;for(let n of i)!n||!os[n.class]||(os[n.class].battles++,e!=null&&(n.player===e?os[n.class].wins++:os[n.class].losses++));let t=Mi.map(n=>{let s=os[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var ca={knight:[{name:"Brave",description:"Gain +1 STR and +1 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:7,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:2,target:"enemy",range:6,level:2,effectKey:"manaDrain",type:"spell"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:5,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:5,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex",type:"spell"},{name:"Drain",description:"Deal INT-based damage to HP and MP and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:1,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement",type:"spell"}],exorcist:[{name:"Sanctuary",description:"Gain +1 ALL stats for both ally and self for 3 turns.",cost:5,target:"ally",range:4,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}],vampire:[{name:"Gaze",description:"Reduce target's AGI and VIT by 1 for 3 turns",cost:5,target:"enemy",range:4,level:2,effectKey:"gaze",type:"spell"},{name:"Blood Suck",description:"Absorb enemy HP based on your MP",cost:7,target:"enemy",range:1,level:3,effectKey:"bloodSuck"}],necromancer:[{name:"Debilitate",description:"Steal target's 2 HP and 2 VIT for 2 turns",cost:5,target:"enemy",range:5,level:1,effectKey:"debilitate",type:"spell"},{name:"Reanimate",description:"Resurrect dead unit to your control",cost:10,target:"self",range:0,level:2,effectKey:"reanimate"}],barbarian:[{name:"War Cry",description:"Gain +3 VIT for -1 HP for 2 turns",cost:2,hpCost:1,target:"self",range:0,level:1,effectKey:"warCry"},{name:"Bash",description:"Reduce target's AGI to 0 for 2 turns",cost:5,target:"enemy",range:1,level:3,effectKey:"bash"}],cannibal:[{name:"Gnaw",description:"Deal STR based damage to heal self",cost:3,target:"enemy",range:1,level:2,effectKey:"gnaw"},{name:"Infect",description:"Poison enemy for 3 turns",cost:4,target:"enemy",range:6,level:3,effectKey:"infect"}],shaman:[{name:"Curse",description:"Steal 1 ALL stats for 2 turns",cost:5,target:"enemy",range:6,level:1,effectKey:"curse",type:"spell"},{name:"Vodoo",description:"Deal INT+LUK-based damage to one enemy",cost:8,hpCost:3,target:"enemy",range:6,level:2,effectKey:"vodoo",type:"spell"}],oracle:[{name:"Foresight",description:"Gain +1 INT and +1 DEX for 2 turns",cost:5,target:"ally",range:6,level:1,effectKey:"foresight"},{name:"Overheal",description:"Heal ally for 2 turns",cost:8,target:"ally",range:6,level:2,effectKey:"overheal"}],amazon:[{name:"Skewer",description:"Deal DEX-based damage to AGI for 2 turns ",cost:5,target:"enemy",range:5,level:2,effectKey:"skewer"},{name:"Rapid",description:"Double attack for 1 turn",cost:6,target:"self",range:0,level:3,effectKey:"rapid"}]};function Me(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function zi(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0,r=String(t);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}var _v={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"},Dd=new Map;function vv(i){let e=Dd.get(i);return e!==void 0||(e=_v[i]??i.replace(/([A-Z])/g," $1").replace(/^./,t=>t.toUpperCase()).trim(),Dd.set(i,e)),e}function eo(i,e,t,n){let s=e,r=t,a=vv(i);n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,a,!1,"skill-name");let o=a,l=r?`${r.name} (${r.class}, P${r.player})`:"self",u=null,c=(d,m,x,M)=>{if(x)d.hp=Math.min(d.maxHp,d.hp+m),n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,`+${m}`,!1,"heal");else{let y=d===s,g=!0;if(!y&&!M){let S=Me(d,"agi")*.7+Me(d,"luk")*.3;g=Math.random()*Math.max(.001,S)<=Me(s,"dex")}return g?(d.hp=Math.max(0,d.hp-m),d!==s&&(u=m),n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,String(m),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(d),d.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(d,s)):n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,"MISS",!0),g}},p=(d,m,x,M)=>{n.showFloatingCombatText&&n.showFloatingCombatText(d,m,x,!1,M?"buff":"debuff")};switch(i){case"brave":s.tempBuff={str:1,vit:1,duration:3},p(s.x,s.y,"+1 STR, +1 VIT",!0);break;case"dominate":{if(!r)break;let d=2,m=1;r.str=Math.max(1,(r.str||0)-d),s.str=(s.str||0)+d,r.vit=Math.max(1,(r.vit||0)-m),s.vit=(s.vit||0)+m,p(r.x,r.y,`-${d} STR and -${m} VIT`,!1),p(s.x,s.y,`+${d} STR and +${m} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let d=Math.max(1,Math.ceil(Me(s,"int")-(Me(r,"int")*.7+Me(r,"luk")*.2)));c(r,d,!1,!0)}break;case"manaDrain":if(r){let d=Math.max(1,Math.floor(Me(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-d),s.mp=(s.mp||0)+d,p(r.x,r.y,`-${d} MP`,!1),p(s.x,s.y,`+${d} MP`,!0)}break;case"mantra":if(r){let d=Math.max(1,Math.floor(Me(s,"int")*.3));s.tempBuff={int:d,duration:3},p(s.x,s.y,`+${d} LUK`,!0),r.tempBuff={luk:d,duration:3},p(r.x,r.y,`+${d} LUK`,!0)}break;case"chakra":{if(c(s,Math.max(1,Math.floor(Me(s,"int")*.3+Me(s,"luk")*.15)),!0),!r)break;c(r,Math.max(1,Math.floor(Me(s,"int")*.3+Me(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let d=1;r.vit=Math.max(1,(r.vit||0)-d),s.vit=(s.vit||0)+d,p(r.x,r.y,`-${d} VIT`,!1),p(s.x,s.y,`+${d} VIT`,!0)}break;case"feast":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"str")*.7-(Me(r,"vit")*.3+Me(r,"luk")*.2)));c(r,d,!1)&&c(s,d,!0)}break;case"impale":{if(!r)break;let d=2;r.tempDebuff={agi:d,duration:3},p(r.x,r.y,`-${d} AGI`,!1)}break;case"pierce":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"str")*.6));c(r,d,!1)}break;case"focus":s.tempBuff={dex:3,duration:3},p(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"dex")*.7-(Me(r,"vit")*.3+Me(r,"luk")*.2)));c(r,d,!1)}break;case"cripple":{if(!r)break;let d=1;r.agi=Math.max(1,(r.agi||0)-d),s.agi=(s.agi||0)+d,p(r.x,r.y,`-${d} AGI`,!1),p(s.x,s.y,`+${d} AGI`,!0)}break;case"execute":if(r){let d=Math.max(1,Math.floor(Me(s,"agi")*.8-(Me(r,"vit")*.3+Me(r,"luk")*.2)));c(r,d,!1)}break;case"berserk":r&&(c(r,Math.max(1,Math.floor(Me(s,"str")*.8-Me(r,"vit")*.3+Me(r,"luk")*.2)),!1),c(s,3,!1));break;case"bloodlust":{let d=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff={str:d,vit:d,duration:2},p(s.x,s.y,`+${d} STR, +${d} VIT`,!0)}break;case"hex":{if(!r)break;let d=1;r.int=Math.max(1,(r.int||0)-d),s.int=(s.int||0)+d,p(r.x,r.y,`-${d} INT`,!1),p(s.x,s.y,`+${d} INT`,!0)}break;case"drain":{if(!r)break;let d=Math.max(1,Math.ceil(Me(s,"int")*.6-(Me(r,"int")*.4+Me(r,"luk")*.2))),m=Math.max(1,Math.ceil(Me(s,"int")*.2-(Me(r,"int")*.4+Me(r,"luk")*.2)));c(r,d,!1,!0),c(s,m,!0),p(r.x,r.y,`-${m} MP`,!1),p(s.x,s.y,`+${m} MP`,!0)}break;case"blind":{if(!r)break;let d=1;r.dex=Math.max(1,(r.dex||0)-d),s.dex=(s.dex||0)+d,p(r.x,r.y,`-${d} DEX`,!1),p(s.x,s.y,`+${d} DEX`,!0)}break;case"shuriken":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"dex")*.7-(Me(r,"vit")*.3+Me(r,"luk")*.2)));c(r,d,!1)}break;case"iaido":s.tempBuff={str:1,dex:1,duration:3},p(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"str")*.4+Me(s,"dex")*.4-(Me(r,"vit")*.3+Me(r,"luk")*.2)));c(r,d,!1)}break;case"bite":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"str")*.7+Me(s,"agi")*.1-(Me(r,"vit")*.3+Me(r,"luk")*.2)));c(r,d,!1)}break;case"howl":s.tempBuff={str:2,agi:2,duration:3},p(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let d=Math.max(1,Math.floor(Me(s,"int")*.5));c(r,d,!0),c(s,3,!1)}break;case"judgement":{if(!r)break;let d=Math.max(1,Math.floor(s.maxHp-s.hp-(Me(r,"int")*.2+Me(r,"luk")*.1)));c(r,d,!1,!0)}break;case"sanctuary":s.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},r.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),p(s.x,s.y,"+1 ALL STATS",!0),p(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let d=Math.max(1,Math.floor(r.maxHp-r.hp-(Me(r,"int")*.2+Me(r,"luk")*.1)));c(r,d,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,p(r.x,r.y,"-2 LUK",!1),p(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"luk")*.8-(Me(r,"vit")*.3+Me(r,"luk")*.2)));c(r,d,!1)}break;case"windWalk":s.tempBuff={agi:3,duration:3},p(s.x,s.y,"+3 AGI",!0);break;case"powerShot":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"dex")*.6-(Me(r,"vit")*.3+Me(r,"luk")*.2)));if(c(r,d,!1)&&n.world&&n.units&&n.updateUnitPosition){let x=Math.max(1,Math.floor(d*.2)),M=Sv(n.world,n.units,s,r,x),y=r.x,g=r.y;r.x=M.newGx,r.y=M.newGy,n.updateUnitTileIndex&&n.updateUnitTileIndex(r,y,g),M.collisionDamage>0?(console.log("[KNOCKBACK]",`${M.collisionDamage} dmg to ${r.name}`),n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),c(r,M.collisionDamage,!1),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)):n.animateKnockback?n.animateKnockback(r,y,g,M.newGx,M.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r))}}break;case"forge":s.tempBuff={str:2,duration:3},r.tempBuff={str:2,duration:3},p(s.x,s.y,"+2 STR",!0),p(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff={str:3,vit:3,duration:3},r.tempBuff={str:3,vit:3,duration:3},p(s.x,s.y,"+3 STR, +3 VIT",!0),p(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let d=Math.max(1,Math.floor(Me(r,"luk")*.3));r.tempDebuff={poison:d,duration:3},p(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"int")*.8-(Me(r,"int")*.4+Me(r,"luk")*.2)));c(r,d,!1,!0);let m=Math.max(1,Math.floor(d*.5));s.luk=Math.max(1,(s.luk||0)+m),p(s.x,s.y,`+${m} LUK`,!0)}break;case"gaze":{if(!r)break;let d=1;r.tempDebuff={agi:d,vit:d,duration:4},p(r.x,r.y,`-${d} AGI, -${d} VIT`,!1)}break;case"bloodSuck":{if(!r)break;let d=Math.max(1,Math.floor(s.mp*.6+Me(s,"int")*.6-(r.hp*.2+Me(r,"luk")*.1)));c(r,d,!1,!0)&&c(s,d,!0)}break;case"debilitate":{if(!r)break;let d=2;r.tempDebuff={hp:d,maxHp:d,vit:d,duration:3},s.tempBuff={hp:d,maxHp:d,vit:d,duration:3},p(r.x,r.y,`-${d} HP, -${d} VIT`,!1),p(s.x,s.y,`+${d} HP, +${d} VIT`,!0)}break;case"reanimate":{if(!n.units||!n.reanimateDeadUnit)break;let d=n.units,m=null,x=-1,M=null,y=-1,g=!1;for(let v=0;v<d.length;v++){let A=d[v];if(A.hp>0)continue;let O=A.deathOrder??0;O>=x&&(x=O,m=A),A.player===s.player&&(g=!0,O>=y&&(y=O,M=A))}let S=g?M:m;S&&n.reanimateDeadUnit(s,S)}break;case"warCry":s.tempBuff={vit:3,duration:3},p(s.x,s.y,"+3 VIT",!0);break;case"bash":{if(!r)break;let d=r.agi;r.tempDebuff={agi:d,duration:3},p(r.x,r.y,`-${d} AGI`,!1)}break;case"gnaw":{let d=Math.max(1,Math.floor(Me(s,"str")-(Me(r,"vit")*.3+Me(r,"luk")*.2)));c(r,d,!1,!0),c(s,d,!0)}break;case"infect":{let d=Math.max(1,Math.floor(Me(r,"luk")*.3));r.tempDebuff={poison:d,duration:4},p(r.x,r.y,"Poisoned for 3 turns",!1)}break;case"curse":r.tempDebuff={hp:1,maxHp:1,mp:1,maxMp:1,luk:1,int:1,str:1,vit:1,agi:1,dex:1,duration:3},s.tempBuff={hp:1,maxHp:1,luk:1,int:1,str:1,vit:1,agi:1,dex:1,duration:3},p(r.x,r.y,"-1 ALL STATS",!1),p(s.x,s.y,"+1 ALL STATS",!0);break;case"vodoo":{let d=Math.max(1,Math.floor((Me(s,"int")+Me(s,"luk"))*.8)-(Me(r,"int")+Me(r,"luk")*.4));c(r,d,!1,!0)}break;case"foresight":{if(s.tempBuff={int:1,dex:1,duration:3},p(s.x,s.y,"+1 INT, +1 DEX",!0),!r)break;r.tempBuff={int:1,dex:1,duration:3},p(r.x,r.y,"+1 INT, +1 DEX",!0)}break;case"overheal":{let d=Math.max(1,Math.floor(Me(s,"int")*.3+Me(s,"luk")*.1));if(s.tempBuff={heal:d,duration:3},p(s.x,s.y,"Auto heal for 2 turns",!0),!r)break;r.tempDebuff={heal:d,duration:3},p(r.x,r.y,"Auto heal for 2 turns",!0)}break;case"skewer":{let d=Math.max(1,Math.floor(Me(s,"dex")*.8-(Me(r,"vit")*.3+Me(r,"luk")*.2)));r.tempDebuff={agi:d,duration:3},p(r.x,r.y,`-${d} AGI`,!1)}break;case"rapid":s.tempBuff={doubleAttack:!0,duration:2},p(s.x,s.y,"Double attack for 1 turn",!0);break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",o,"\u2192",l,`| MP ${s.mp}`,u!=null?`| ${u} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function Ud(i){let e=Uh,t=Nh,n=Array.from({length:t},()=>Array(e).fill(!1)),s=Array.from({length:t},()=>Array(e).fill(0)),r=Array.from({length:t},()=>Array(e).fill(nt.GRASS)),a=i!=null?hv(i):()=>Math.random(),o=Math.floor(e/2),l=Math.floor(t/2),u=o,c=0,p=o,d=t-1,m=2,x=3;function M(q,V,Z,oe){let fe=oe;for(let be=V;be<=Z;be++)if(!(be<0||be>=t))for(let ne=-m;ne<=m;ne++){let de=fe+ne;de<0||de>=e||(n[be][de]=!0,r[be][de]=q,s[be][de]=1)}}M(nt.BASE_TOP,c,c+x-1,u),M(nt.BASE_BOTTOM,d-x+1,d,p),M(nt.CENTER,l-1,l+1,o);let y=new Set,g=(q,V)=>Math.abs(q-o)<=2&&Math.abs(V-l)<=1,S=(q,V)=>{q<0||q>=e||V<0||V>=t||g(q,V)||y.add(V*e+q)},v=Math.floor(e/2),A=Math.floor(t/2),O=Math.min(e,t)*Bh,U=Math.max(60,(t+e)*2);for(let q=0;q<2;q++){let V=q===0?v-O:v+O,Z=q===0?Math.PI/2:-Math.PI/2,oe=q===0?Math.PI*3/2:Math.PI/2;for(let fe=0;fe<=U;fe++){let be=fe/U,ne=Z+be*(oe-Z),de=V+O*Math.cos(ne),Te=A+O*Math.sin(ne),Pe=Math.round(de),He=Math.round(Te);S(Pe,He),S(Pe+1,He),S(Pe-1,He),S(Pe,He+1),S(Pe,He-1)}}let N=[[0,1],[0,-1],[1,0],[-1,0]];for(let q=0;q<1;q++){let V=[];y.forEach(Z=>{let oe=Z%e,fe=Z/e|0;for(let[be,ne]of N){let de=oe+be,Te=fe+ne;if(de<0||de>=e||Te<0||Te>=t)continue;let Pe=Te*e+de;y.has(Pe)||V.push(Pe)}}),V.forEach(Z=>y.add(Z))}y.forEach(q=>{let V=q%e,Z=q/e|0;r[Z][V]===nt.BASE_TOP||r[Z][V]===nt.BASE_BOTTOM||r[Z][V]===nt.CENTER||(n[Z][V]=!0,r[Z][V]=nt.PATH,s[Z][V]=1)});let ee=Math.round(v-O*1.6),T=Math.round(v+O*1.6),C=Math.round(v-O),te=Math.round(v+O),X=1;for(let q=l-X;q<=l+X;q++)if(!(q<0||q>=t))for(let V=ee;V<=T;V++)V<0||V>=e||(n[q][V]=!0,r[q][V]!==nt.CENTER&&r[q][V]!==nt.BASE_TOP&&r[q][V]!==nt.BASE_BOTTOM&&(r[q][V]=nt.PATH),s[q][V]=Math.max(s[q][V],1));function se(q,V,Z,oe){let fe=Math.max(1,Math.min(q,V)),be=Math.min(t-2,Math.max(q,V)),ne=Math.max(1,Math.min(Z,oe)),de=Math.min(e-2,Math.max(Z,oe));for(let Te=fe;Te<=be;Te++)for(let Pe=ne;Pe<=de;Pe++)r[Te][Pe]===nt.BASE_TOP||r[Te][Pe]===nt.BASE_BOTTOM||r[Te][Pe]===nt.CENTER||(n[Te][Pe]=!0,r[Te][Pe]=nt.PATH,s[Te][Pe]=1)}let B=3,K=3;se(c,c+B-1,C,u-1),se(c,c+B-1,u+1,te),se(d-K+1,d,C,p-1),se(d-K+1,d,p+1,te),M(nt.BASE_TOP,c,c+x-1,u),M(nt.BASE_BOTTOM,d-x+1,d,p),M(nt.CENTER,l-1,l+1,o);for(let q=0;q<t;q++)for(let V=0;V<e;V++){if(n[q][V]||r[q][V]===nt.BASE_TOP||r[q][V]===nt.BASE_BOTTOM||r[q][V]===nt.CENTER)continue;let Z=Math.abs(V-u)<=4&&Math.abs(q-c)<=3,oe=Math.abs(V-p)<=4&&Math.abs(q-d)<=3,fe=Z||oe,be=a();be<.55&&!fe?(r[q][V]=nt.TREE,s[q][V]=1+Math.floor(a()*2)):be<.75||fe&&be<.5?(r[q][V]=nt.WATER,s[q][V]=0):(r[q][V]=nt.ROCK,s[q][V]=1+Math.floor(a()*2))}let ie=[];for(let q=0;q<t;q++)for(let V=0;V<e;V++)r[q][V]===nt.CENTER&&ie.push({gx:V,gy:q});return{w:e,h:t,path:n,height:s,type:r,topBaseX:u,topBaseY:c,botBaseX:p,botBaseY:d,centerTiles:ie}}function Mv(i,e,t){let n=e===1?nt.BASE_BOTTOM:nt.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function bv(i){if(i.centerTiles&&i.centerTiles.length>0)return i.centerTiles;let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===nt.CENTER&&e.push({gx:n,gy:t});return e}function Nd(i,e){let t=bv(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function Es(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===nt.TREE||n===nt.WATER||n===nt.ROCK)}function Sv(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,u=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,c=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(u===0&&c===0)return{newGx:r,newGy:a,collisionDamage:0};let p=0;for(let d=0;d<s;d++){let m=r+u,x=a+c,M=m<0||m>=i.w||x<0||x>=i.h,y=!Es(i,m,x),g=e.some(S=>S.hp>0&&S.id!==n.id&&S.x===m&&S.y===x);if(M||y||g){let S=Math.max(1,p*3+Math.ceil((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:S}}r=m,a=x,p++}return{newGx:r,newGy:a,collisionDamage:0}}function Ev(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,u=Math.abs(o-r),c=Math.abs(l-a),p=r<o?1:-1,d=a<l?1:-1,m=u-c;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*m;x>-c&&(m-=c,r+=p),x<u&&(m+=u,a+=d)}return s}function bs(i,e,t,n,s){let r=Ev(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!Es(i,o.x,o.y))return!1}return!0}function Cl(i,e,t,n,s,r){let a=(m,x)=>x*i.w+m,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],u=0,c=[[0,1],[0,-1],[1,0],[-1,0]],p=s!=null&&r!=null,d=p?new Set(s.filter(m=>m.hp>0&&m.player!==r.player).map(m=>m.y*i.w+m.x)):null;for(;u<l.length;){let{x:m,y:x,d:M}=l[u++];if(!(M>=n))for(let[y,g]of c){let S=m+y,v=x+g;if(!Es(i,S,v)||p&&d.has(a(S,v)))continue;let A=a(S,v);if(o.has(A))continue;let O=M+1;o.set(A,O),l.push({x:S,y:v,d:O})}}return o}function Bd(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let u=o;u<=l;u++)for(let c=r;c<=a;c++){let p=Math.abs(c-e)+Math.abs(u-t);p>=1&&p<=n&&s.set(u*i.w+c,p)}return s}function mr(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(x,M)=>M*i.w+x,l=new Set(r.filter(x=>x.hp>0&&x.player!==a.player).map(x=>x.y*i.w+x.x)),u=new Map,c=[{x:e,y:t}],p=0;u.set(o(e,t),null);let d=[[0,1],[0,-1],[1,0],[-1,0]];function m(x,M){return Es(i,x,M)?!l.has(o(x,M)):!1}for(;p<c.length;){let{x,y:M}=c[p++];if(x===n&&M===s){let y=[],g={x:n,y:s};for(;g;)y.unshift(g),g=u.get(o(g.x,g.y));return y}for(let[y,g]of d){let S=x+y,v=M+g,A=o(S,v);u.has(A)||m(S,v)&&(u.set(A,{x,y:M}),c.push({x:S,y:v}))}}return null}function Tv(i,e,t,n,s,r){if(!n||n.length===0)return null;let a=(M,y)=>y*i.w+M,o=a(e,t),l=new Set;for(let M=0;M<n.length;M++){let y=n[M];y&&y.gx!=null&&y.gy!=null&&l.add(a(y.gx,y.gy))}if(l.size===0)return null;if(l.has(o))return{path:[{x:e,y:t}],target:{gx:e,gy:t}};let u=new Set(s.filter(M=>M.hp>0&&M.player!==r.player).map(M=>M.y*i.w+M.x)),c=new Map,p=[{x:e,y:t}],d=0;c.set(o,null);let m=[[0,1],[0,-1],[1,0],[-1,0]];function x(M,y){return Es(i,M,y)?!u.has(a(M,y)):!1}for(;d<p.length;){let{x:M,y}=p[d++],g=a(M,y);if(l.has(g)){let S=[],v={x:M,y};for(;v;)S.unshift(v),v=c.get(a(v.x,v.y));return{path:S,target:{gx:M,gy:y}}}for(let S=0;S<m.length;S++){let v=m[S][0],A=m[S][1],O=M+v,U=y+A,N=a(O,U);c.has(N)||x(O,U)&&(c.set(N,{x:M,y}),p.push({x:O,y:U}))}}return null}function wv(i){return{hw:i.w*tt/2,hh:i.h*tt/2}}function Av(i,e){let{hw:t,hh:n}=wv(i),s=Math.floor((e.x+t)/tt),r=Math.floor((e.z+n)/tt);return s<0||s>=i.w||r<0||r>=i.h?null:{gx:s,gy:r}}function Od(i,e,t,n){let s=i.getAttribute("position");if(!s)return;let r=s.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a[o*3]=e,a[o*3+1]=t,a[o*3+2]=n;i.setAttribute("color",new ei(a,3))}var Fd={[nt.PATH]:2976557,[nt.GRASS]:2968109,[nt.TREE]:1719578,[nt.WATER]:1989278,[nt.ROCK]:4872778,[nt.BASE_TOP]:8014410,[nt.BASE_BOTTOM]:4872826,[nt.CENTER]:13940810};function Fh(i){return i.w*tt/2}function kh(i){return i.h*tt/2}function Vd(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new fl(e);return r.wrapS=r.wrapT=Oa,r.repeat.set(4,4),r.needsUpdate=!0,r}function kd(i){let e=new _i,t=Fh(i),n=kh(i),s=new Xn(tt,$n,tt),r=Vd(64),a=.88,o=.02,l=[];e.userData.swayingFoliage=[];function u(X,se,B,K,ie){let q=new zn({color:3828266,roughness:.9});q.bumpMap=r,q.bumpScale=.12;for(let V=0;V<K;V++){let Z=.08+Math.random()*ie,oe=.03+Math.random()*.03,fe=new Ze(new $s(oe*.5,oe,Z,6),q);fe.position.set(X+(Math.random()-.5)*.5,B+Z/2,se+(Math.random()-.5)*.5),fe.rotation.x=(Math.random()-.5)*.2,fe.rotation.z=(Math.random()-.5)*.2,fe.castShadow=!0,e.add(fe)}}let c=.12;function p(X,se,B){let K=B+.02,ie=[[X-c,K,se-c],[X+c,K,se+c],[X-c,K,se+c],[X+c,K,se-c],[X-c+.06,K,se-c+.06],[X+c-.06,K,se+c-.06],[X-c+.06,K,se+c-.06],[X+c-.06,K,se-c+.06]],q=new Float32Array(ie.length*3);for(let Z=0;Z<ie.length;Z++)q[Z*3]=ie[Z][0],q[Z*3+1]=ie[Z][1],q[Z*3+2]=ie[Z][2];let V=new oi;return V.setAttribute("position",new ei(q,3)),V}let d=0;for(let X=0;X<i.h;X++)for(let se=0;se<i.w;se++)i.path[X][se]&&d++;let m=new zn({color:16777215,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),x=new hl(s,m,d);x.userData.tileGridGround=!0,x.userData.insideTileGx=new Uint16Array(d),x.userData.insideTileGy=new Uint16Array(d),x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1;let M=[],y=[],g=[],S=[],v=new ai,A=new Et,O=new Mn,U=new ss,N=new ta,ee=new k,T=new k(1,1,1),C=0;for(let X=0;X<i.h;X++)for(let se=0;se<i.w;se++){let B=i.type[X][se],K=i.height[X][se],ie=Fd[B],q=$n+K*.35,V=q/2+$n/2,Z=se*tt-t+tt/2,oe=X*tt-n+tt/2,fe=(ie>>16&255)/255,be=(ie>>8&255)/255,ne=(ie&255)/255,de=fe,Te=be,Pe=ne;if(B===nt.PATH||B===nt.TREE||B===nt.ROCK){let Qe=Math.random()*.45;de=fe*(1-Qe)+.42*Qe,Te=be*(1-Qe)+.26*Qe,Pe=ne*(1-Qe)+.14*Qe}(B===nt.TREE||B===nt.ROCK)&&(de*=.5,Te*=.5,Pe*=.5);let He=1+(Math.random()-.5)*.12,gt=Math.min(1,de*He),ot=Math.min(1,Te*He),et=Math.min(1,Pe*He);if(i.path[X][se])x.userData.insideTileGx[C]=se,x.userData.insideTileGy[C]=X,A.setRGB(gt,ot,et),x.setColorAt(C,A),v.position.set(se*tt-t+tt/2,q/2,X*tt-n+tt/2),v.updateMatrix(),x.setMatrixAt(C,v.matrix),C++;else{let J=s.clone();if(v.position.set(se*tt-t+tt/2,q/2,X*tt-n+tt/2),v.updateMatrix(),J.applyMatrix4(v.matrix),Od(J,gt,ot,et),M.push(J),B===nt.TREE)S.push(p(Z,oe,V));else if(B===nt.WATER){let Wt=Fd[nt.WATER],Je=(Wt>>16&255)/255,Qe=(Wt>>8&255)/255,We=(Wt&255)/255,Ve=1+(Math.random()-.5)*.12,ut=Math.min(1,Je*Ve),R=Math.min(1,Qe*Ve),E=Math.min(1,We*Ve),j=new rs(tt,tt);j.rotateX(-Math.PI/2),v.position.set(Z,V+.02,oe),v.rotation.set(0,0,0),v.scale.set(1,1,1),v.updateMatrix(),j.applyMatrix4(v.matrix),Od(j,ut,R,E),y.push(j)}else if(B===nt.ROCK){let Wt=(Je,Qe,We)=>{let Ve=new xl(Je,0),ut=Math.random()*Math.PI*2,R=Math.random()*Math.PI*2,E=Math.random()*Math.PI*2;N.set(ut,R,E),U.setFromEuler(N),ee.set(Z+Qe,V+Je-.2,oe+We),O.compose(ee,U,T),Ve.applyMatrix4(O),g.push(Ve)};Wt(.32+Math.random()*.14,(Math.random()-.5)*.15,(Math.random()-.5)*.15),Wt(.2+Math.random()*.12,(Math.random()-.5)*.25,(Math.random()-.5)*.25),Wt(.12+Math.random()*.12,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),e.add(x);function te(X){for(let se=0;se<X.length;se++)X[se].dispose()}if(M.length>0){let X=ja(M);if(te(M),X){let se=new zn({color:16777215,vertexColors:!0,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),B=new Ze(X,se);B.receiveShadow=!0,B.castShadow=!0,B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}if(S.length>0){let X=ja(S);if(te(S),X){let se=new Xa({color:855309,linewidth:1}),B=new ul(X,se);B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}if(g.length>0){let X=ja(g);if(te(g),X){let se=new zn({color:6974058,roughness:.9});se.bumpMap=r,se.bumpScale=.2;let B=new Ze(X,se);B.castShadow=!0,B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}if(y.length>0){let X=ja(y);if(te(y),X){let se=new zn({color:16777215,vertexColors:!0,roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),B=new Ze(X,se);B.receiveShadow=!0,B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}for(let X=0;X<i.h;X++)for(let se=0;se<i.w;se++){if(i.path[X][se])continue;let B=i.type[X][se],K=i.height[X][se],q=($n+K*.35)/2+$n/2,V=se*tt-t+tt/2,Z=X*tt-n+tt/2;if(B===nt.TREE){let oe=new _i;oe.userData={gx:se,gy:X},oe.position.set(V,q,Z);let fe=se===0||se===i.w-1||X===0||X===i.h-1,be=fe?.75+Math.random()*.35:.5+Math.random()*.2,ne=new Et(4007959),de=()=>1+(Math.random()-.5)*.4;ne.r=Math.min(1,Math.max(0,ne.r*de())),ne.g=Math.min(1,Math.max(0,ne.g*de())),ne.b=Math.min(1,Math.max(0,ne.b*de()));let Te=.85+Math.random()*.2,Pe=new zn({color:ne,roughness:Te});Pe.bumpMap=r,Pe.bumpScale=.1+Math.random()*.12;let He=new Ze(new $s(.12,.14,be,8),Pe);He.position.set(0,be/2,0),He.castShadow=!0,He.raycast=function(){},oe.add(He);let gt=r.clone();gt.repeat.set(3,3);let ot=new Et(2972205),et=()=>1+(Math.random()-.5)*.44;ot.r=Math.min(1,Math.max(0,ot.r*et())),ot.g=Math.min(1,Math.max(0,ot.g*et())),ot.b=Math.min(1,Math.max(0,ot.b*et()));let Ee=.78+Math.random()*.24,J=new zn({color:ot,roughness:Ee});J.bumpMap=gt,J.bumpScale=.16+Math.random()*.14;let Wt=fe?.52:.45,Je=fe?1.05:.9,Qe=.12,We=Je*.5,Ve=Je*.45,ut=Je*.4,R=new _i;R.position.set(0,be,0);let E=new Ze(new Ri(Wt,We,8),J);E.position.set(0,We/2,0),E.castShadow=!0,E.raycast=function(){},R.add(E);let j=new Ze(new Ri(Wt*.75,Ve,8),J);j.position.set(0,We-Qe+Ve/2,0),j.castShadow=!0,j.raycast=function(){},R.add(j);let ye=new Ze(new Ri(Wt*.5,ut,8),J);ye.position.set(0,We-Qe+Ve-Qe+ut/2,0),ye.castShadow=!0,ye.raycast=function(){},R.add(ye),oe.add(R);let xe=(i.w-1)*.5,ae=(i.h-1)*.5,Ge=Math.max(3.5,Math.min(i.w,i.h)*.24);(se-xe)**2+(X-ae)**2<=Ge*Ge&&Math.random()<2/3&&e.userData.swayingFoliage.push({group:R,phase:Math.random()*Math.PI*2}),e.add(oe),l.push(oe)}}return e.userData.treeGroups=l,e}function Rv(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=Ud(),t=document.getElementById("canvas-wrap"),n=new cl;n.background=new Et(1711652),n.fog=new ll(1711652,30,90);let s=e.w*tt/2,r=e.h*tt/2,a=new gi(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,u=new k(12,38,16).normalize().multiplyScalar(o),c=new k,p=new k,d=new $i(new k(0,1,0),0),m=new k,x=new k,M=!1,y=!1,g=!0,S=!1,v=null,A=5,O=.004,U=-Math.PI*.4,N=Math.PI*.4,ee=new k,T={x:0,y:0},C=!1,te=1,X=40,se=.005,B=.15,K=1,ie=null,q=new Sl(16777215,.45);n.add(q);let V=new bl(16774630,1.1);V.position.set(30,50,20),V.castShadow=!0,V.shadow.mapSize.width=2048,V.shadow.mapSize.height=2048,V.shadow.camera.near=1,V.shadow.camera.far=120,V.shadow.camera.left=-50,V.shadow.camera.right=50,V.shadow.camera.top=50,V.shadow.camera.bottom=-50,n.add(V);let Z=kd(e);n.add(Z);let oe=new Map,fe=new _i;n.add(fe);let be={30:!1,20:!1,10:!1},ne=["red","yellow","purple","blue","green"],de={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943},Te=.92;function Pe(f,h,_){let P=($n+e.height[_][h]*.35)/2+$n/2,I=new rs(Te,Te),L=new In({color:f,transparent:!0,opacity:.45,side:Cn}),F=new Ze(I,L);return F.rotation.x=-Math.PI/2,F.position.set(h*tt-Ie+tt/2,P+.01,_*tt-ze+tt/2),F}function He(f){let h=new _l(.22,0),_=new zn({color:f,metalness:.3,roughness:.4}),b=new Ze(h,_);return b.rotation.x=Math.PI/4,b.castShadow=!0,b.receiveShadow=!0,b}function gt(){let f=Math.floor(e.h/2),h=[];for(let _=0;_<e.w;_++){let b=f;if(e.type[b][_]!==nt.PATH||j(_,b)!=null)continue;let I=b*e.w+_;oe.has(I)||h.push({gx:_,gy:b})}return h}function ot(f){let h=gt();if(h.length===0)return;let _=h[Math.floor(Math.random()*h.length)],b=ne[Math.floor(Math.random()*ne.length)],P=_.gy*e.w+_.gx,I=de[b],L=Le(_.gx,_.gy);L.y+=.35;let F=He(I);F.position.copy(L),fe.add(F);let D=Pe(I,_.gx,_.gy);fe.add(D),oe.set(P,{type:b,mesh:F,glowMesh:D}),console.log("[POWERUP]",`turnsLeft: ${f}, type: ${b}, gx: ${_.gx}, gy: ${_.gy}`)}function et(f){let h=f.y*e.w+f.x,_=oe.get(h);if(!_)return;let b=_.mesh;if(fe.remove(b),b.geometry.dispose(),b.material){let P=b.material;P.dispose&&P.dispose()}_.glowMesh&&(fe.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose()),oe.delete(h),_.type==="green"?(f.hp=Math.min(f.maxHp,f.hp+6),ci(f.x,f.y,"+6 HP",!1,"buff")):(_.type==="red"?f.tempBuff={str:4,duration:3}:_.type==="yellow"?f.tempBuff={agi:4,duration:3}:_.type==="purple"?f.tempBuff={int:4,duration:3}:_.type==="blue"&&(f.tempBuff={dex:4,duration:3}),ci(f.x,f.y,`+4 ${_.type==="red"?"STR":_.type==="yellow"?"AGI":_.type==="purple"?"INT":"DEX"}`,!1,"buff")),pt(f,()=>Ht(f))}let Ee=[],J=0,Wt=new Map;function Je(){Wt.clear()}function Qe(f){Wt.set(f.id,f)}function We(f){Wt.delete(f)}function Ve(f){return Wt.get(f)}let ut=new Map;function R(){ut.clear()}function E(f,h,_){if(h!=null&&_!=null){let b=_*e.w+h;ut.get(b)===f&&ut.delete(b)}f.hp>0&&ut.set(f.y*e.w+f.x,f)}function j(f,h){let _=h*e.w+f,b=ut.get(_);return!b||b.hp<=0||b.x!==f||b.y!==h?null:b}let ye=1,xe=0,ae=new Map,Ge=Vd(64),Ie=Fh(e),ze=kh(e);function Le(f,h){let b=($n+e.height[h][f]*.35)/2+$n/2;return new k(f*tt-Ie+tt/2,b,h*tt-ze+tt/2)}function bt(f,h){f==="short"&&(Uh=27,Nh=15,Bh=.35,Ms=100),n.remove(Z),Z.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(P=>P.dispose())}),ae.forEach(_=>{n.remove(_),_.traverse(b=>{b.geometry&&b.geometry.dispose(),b.material&&(Array.isArray(b.material)?b.material:[b.material]).forEach(I=>I.dispose())})}),ae.clear(),Ee.length=0,Je(),R(),ye=1,xe=0,J=0,oe.forEach(_=>{fe.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(fe.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),oe.clear(),be={30:!1,20:!1,10:!1},e=Ud(typeof h<"u"?h:void 0),Ie=Fh(e),ze=kh(e),Z=kd(e),n.add(Z)}function Se(){ae.forEach(f=>{n.remove(f),f.traverse(h=>{h.geometry&&h.geometry.dispose(),h.material&&(Array.isArray(h.material)?h.material:[h.material]).forEach(b=>b.dispose())})}),ae.clear(),Ee.length=0,Je(),R(),ye=1,xe=0,J=0}function Ut(f,h){let _=(f>>16&255)/255,b=(f>>8&255)/255,P=(f&255)/255,I=1+(Math.random()-.5)*h;return new Et(Math.min(1,_*I),Math.min(1,b*I),Math.min(1,P*I))}let Pt=.62;function ft(f,h){h=h??Pt;let _=f instanceof Et?f:new Et(f);return new Et(Math.max(0,_.r*h),Math.max(0,_.g*h),Math.max(0,_.b*h))}function lt(f,h,_){let b=Zs[h]||Zs.knight,P=ft(Ut(b.primary,.08)),I=ft(Ut(b.secondary,.08)),L=Vn[h]&&Vn[h].gender||"male",F=_??4006676,D=ft(Ut(b.skin!=null?b.skin:15250592,.06)),ce=ft(Ut(F,.08)),Q=()=>(Math.random()-.5)*.08,re=()=>(Math.random()-.5)*.04,z=new zn({color:P,metalness:Math.max(0,.25+re()),roughness:Math.max(.3,Math.min(1,.5+Q()))});z.bumpMap=Ge,z.bumpScale=.1;let he=new zn({color:I,metalness:Math.max(0,.2+re()),roughness:Math.max(.3,Math.min(1,.55+Q()))});he.bumpMap=Ge,he.bumpScale=.1;let Ae=new zn({color:P,metalness:Math.max(0,.25+re()),roughness:Math.max(.3,Math.min(1,.5+Q()))});Ae.bumpMap=Ge,Ae.bumpScale=.1;let we=new zn({color:D,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+Q()))});we.bumpMap=Ge,we.bumpScale=.05;let Ye=new _i,ke=.28,Ce=.08,Ke=.08,st=new Ze(new Xn(Ce,ke,Ke),he);st.position.set(-.06,ke/2,0),st.castShadow=!0,Ye.add(st);let Ft=new Ze(new Xn(Ce,ke,Ke),he);Ft.position.set(.06,ke/2,0),Ft.castShadow=!0,Ye.add(Ft);let It=.28,At=.2,$t=.12,Vt=new Ze(new Xn(At,It,$t),z);Vt.position.set(0,ke+It/2,0),Vt.castShadow=!0,Ye.add(Vt);let Dn=.06,un=.22,xt=.06,kt=new Ze(new Xn(Dn,un,xt),Ae);kt.position.set(-(At/2+Dn/2),ke+It-.08,0),kt.castShadow=!0,Ye.add(kt);let Kt=new Ze(new Xn(Dn,un,xt),Ae);if(Kt.position.set(At/2+Dn/2,ke+It-.08,0),Kt.castShadow=!0,Ye.add(Kt),b.cape!=null){let rt=At*1.95,mt=rt*.6,dn=ke+It*.28,en=new sa;en.moveTo(-mt/2,dn/2),en.lineTo(mt/2,dn/2),en.lineTo(rt/2,-dn/2),en.lineTo(-rt/2,-dn/2),en.closePath();let bn=new Za(en),pn=new zn({color:ft(Ut(b.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+Q())),side:Cn});pn.bumpMap=Ge,pn.bumpScale=.12;let le=new Ze(bn,pn);le.position.set(0,ke+It-dn/2+.05,-$t/2-.02),le.rotation.y=Math.PI,le.castShadow=!0,Ye.add(le);let _e=.055,me=ke+It+.02,pe=.02,ge=At/2+Dn*.5,Re=new Ze(new as(_e,10,8,0,Math.PI*2,0,Math.PI*.55),pn.clone());Re.position.set(-ge,me,pe),Re.rotation.x=-Math.PI*.35,Re.rotation.z=Math.PI*.5,Re.scale.set(1.2,.85,1.1),Re.castShadow=!0,Ye.add(Re);let ue=new Ze(new as(_e,10,8,0,Math.PI*2,0,Math.PI*.55),pn.clone());ue.position.set(ge,me,pe),ue.rotation.x=-Math.PI*.35,ue.rotation.z=-Math.PI*.5,ue.scale.set(1.2,.85,1.1),ue.castShadow=!0,Ye.add(ue)}if(b.belt!=null){let rt=new zn({color:ft(Ut(b.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+Q()))});rt.bumpMap=Ge,rt.bumpScale=.1;let mt=.022,dn=.04,en=new Ze(new Xn(At+.04,mt,$t+dn),rt);en.position.set(0,ke+.04,0),en.castShadow=!0,Ye.add(en)}if(b.apron!=null){let rt=new zn({color:ft(Ut(b.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+Q())),side:Cn});rt.bumpMap=Ge,rt.bumpScale=.12;let mt=At*.95,dn=ke*.85,en=new Ze(new rs(mt,dn),rt),bn=ke+.2;en.position.set(0,bn-dn/2,$t/2+.02),en.castShadow=!0,Ye.add(en);let pn=ke+It+.02,le=At/2+Dn*.2,_e=.018,me=.008,pe=pn-bn,ge=new Ze(new Xn(_e,pe,me),rt.clone());ge.position.set(-le,(bn+pn)/2,$t/2+.015),ge.castShadow=!0,Ye.add(ge);let Re=new Ze(new Xn(_e,pe,me),rt.clone());Re.position.set(le,(bn+pn)/2,$t/2+.015),Re.castShadow=!0,Ye.add(Re)}let Fe=.1,wt=new Ze(new as(Fe,12,10),we);wt.position.set(0,ke+It+Fe,0),wt.castShadow=!0,Ye.add(wt);let Qt=new In({color:1710638}),An=new Ze(new Xn(.032,.004,.004),Qt);An.position.set(-.032,.028,Fe*.92),wt.add(An);let fn=new Ze(new Xn(.032,.004,.004),Qt);fn.position.set(.032,.028,Fe*.92),wt.add(fn);let Zn=new In({color:2957087}),on=new Ze(new Xn(.045,.012,.008),Zn);on.position.set(0,-.028,Fe*.92),wt.add(on);let Rn=new zn({color:ce,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+Q()))});Rn.bumpMap=Ge,Rn.bumpScale=.15;let Ti=rt=>{let mt=Fe*.32,dn=Fe*.22,en=new Ze(new Ri(dn*.9,mt,5),Rn);en.position.set(-Fe*.25,Fe*.22,Fe*.72),en.rotation.x=.35,en.rotation.z=.12,en.castShadow=!0,rt.add(en);let bn=new Ze(new Ri(dn,mt,5),Rn);bn.position.set(Fe*.28,Fe*.18,Fe*.68),bn.rotation.x=.28,bn.rotation.z=-.1,bn.castShadow=!0,rt.add(bn);let pn=new Ze(new Ri(dn*.7,mt*.9,5),Rn);pn.position.set(0,Fe*.28,Fe*.78),pn.rotation.x=.4,pn.castShadow=!0,rt.add(pn)};if(L==="female"){let rt=new Ze(new as(Fe*.92,12,10,0,Math.PI*2,0,Math.PI*.52),Rn);rt.position.set(0,Fe*.28,-Fe*.18),rt.rotation.y=.06,rt.rotation.x=-.04,rt.castShadow=!0,wt.add(rt);let mt=new Ze(new Xn(Fe*1.15,Fe*2.2,Fe*.55),Rn);mt.position.set(0,-Fe*.6,-Fe*.95),mt.rotation.z=.03,mt.castShadow=!0,wt.add(mt),Ti(wt)}else{let rt=new Ze(new as(Fe*.9,12,10,0,Math.PI*2,0,Math.PI*.5),Rn);rt.position.set(0,Fe*.4,-Fe*.12),rt.rotation.y=.08,rt.rotation.x=-.05,rt.rotation.z=.04,rt.castShadow=!0,wt.add(rt);let mt=new Ze(new as(Fe*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),Rn);mt.position.set(0,Fe*.1,-Fe*.05),mt.rotation.y=.1,mt.castShadow=!0,wt.add(mt),Ti(wt)}if(b.horns!=null){let rt=new zn({color:ft(Ut(b.horns,.08)),metalness:Math.max(0,.12+re()),roughness:Math.max(.4,Math.min(1,.62+Q()))});rt.bumpMap=Ge,rt.bumpScale=.1;let mt=Fe*1.12,dn=Fe*.22,en=new vl(mt,dn,8,28),bn=new Ze(en,rt);bn.rotation.x=Math.PI/2,bn.position.y=Fe*.42,bn.castShadow=!0,wt.add(bn);let pn=Fe*.48,le=Fe*2.55,_e=new Ze(new Ri(pn,le,8),rt.clone());_e.position.set(-Fe*1.02,Fe*.18,Fe*.02),_e.rotation.set(-.42,-.32,.58),_e.castShadow=!0,wt.add(_e);let me=new Ze(new Ri(pn,le,8),rt.clone());me.position.set(Fe*1.02,Fe*.18,Fe*.02),me.rotation.set(-.42,.32,-.58),me.castShadow=!0,wt.add(me)}return Ye.userData.leftLeg=st,Ye.userData.rightLeg=Ft,Ye.userData.leftArm=kt,Ye.userData.rightArm=Kt,Ye}function $e(f,h){let _=f.userData;if(!_.leftLeg)return;let b=h*Math.PI*2,P=.35,I=.28;_.leftLeg.rotation.x=Math.sin(b)*P,_.rightLeg.rotation.x=Math.sin(b+Math.PI)*P,_.leftArm.rotation.y=Math.sin(b+Math.PI)*I,_.rightArm.rotation.y=Math.sin(b)*I}function Tt(f){let h=f.userData;h.leftLeg&&(h.leftLeg.rotation.x=0,h.rightLeg.rotation.x=0,h.leftArm.rotation.y=0,h.rightArm.rotation.y=0)}function qt(f){let h=lt(f.player,f.class,f.hairColor);h.position.copy(Le(f.x,f.y)),h.castShadow=!0,h.userData.unitId=f.id;let _=.28,b=.28,P=.12,I=.18,L=.04,F=new rs(I,L),D=new In({color:6037528,side:Cn,depthTest:!0,depthWrite:!1}),ce=new Ze(F,D);ce.position.set(0,_+b/2,P/2+.02),ce.rotation.x=-Math.PI/2,ce.rotation.z=Math.PI/4,ce.visible=f.maxHp>0&&f.hp<f.maxHp&&f.hp>0,h.add(ce),h.userData.slashMark=ce,n.add(h),ae.set(f.id,h),H(h,f.maxHp>0&&f.hp/f.maxHp<.35)}function Ht(f){let h=ae.get(f.id);!h||!h.userData.slashMark||(h.userData.slashMark.visible=f.maxHp>0&&f.hp<f.maxHp&&f.hp>0)}function Rt(f){f.traverse(_=>{if(!_.isMesh||!_.material)return;let b=_.material;if(b.color){let P=b.color.r,I=b.color.g,L=b.color.b,F=.2126*P+.7152*I+.0722*L,D=Math.max(0,Math.min(1,F*.55));b.color.setRGB(D,D,D)}})}let De=.35;function H(f,h){if(f)if(h){f.rotation.x=.35,f.scale.setScalar(.96);let _=f.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=.2,_.rightArm.rotation.y=.2),f.traverse(b=>{b.isMesh&&b.material&&b.material.color&&(b.userData.originalColor||(b.userData.originalColor=b.material.color.clone()),b.material.color.copy(b.userData.originalColor).multiplyScalar(.82))})}else{f.rotation.x=0,f.scale.setScalar(1);let _=f.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=0,_.rightArm.rotation.y=0),f.traverse(b=>{b.isMesh&&b.material&&b.userData.originalColor&&b.material.color.copy(b.userData.originalColor)})}}function Be(f){if(f.level>=3)return;let h=f.maxHp>0?f.hp/f.maxHp:1;f.level+=1;let _=P=>Math.max(1,Math.ceil(P*1.1)),b=P=>Math.max(1,Math.ceil(P*1.1));f.maxHp=_(f.maxHp),f.maxMp=_(f.maxMp),f.hp=Math.max(1,Math.min(f.maxHp,Math.ceil(h*f.maxHp))),f.mp=Math.max(1,Math.min(f.maxMp,Math.ceil(h*f.maxMp))),f.str=b(f.str),f.agi=b(f.agi),f.vit=b(f.vit),f.dex=b(f.dex),f.luk=b(f.luk),f.int=b(f.int),f.range>2&&(f.range=b(f.range)),console.log("[LEVEL UP]",`${f.name} (${f.class}, P${f.player})`,`\u2192 Lv.${f.level}`,`| HP ${f.hp}/${f.maxHp} MP ${f.mp}/${f.maxMp} STR ${f.str} VIT ${f.vit}`),Oe(f)}function Oe(f){let h=ae.get(f.id),_=f.level===3?"levelup level3":f.level===2?"levelup level2":"levelup";if(Lp(f,_),!h)return;let b=performance.now(),P=0;function I(L){P++,P%2===0&&zt();let F=L-b,D=Math.min(1,F/bi),ce=D<.5?1+.35*(D/.5):1+.35*(1-(D-.5)/.5);h.scale.setScalar(ce),D<1?requestAnimationFrame(I):h.scale.setScalar(1)}requestAnimationFrame(I)}function pt(f,h){let _=ae.get(f.id);if(!_){h&&h();return}let b=performance.now(),P=0;function I(L){P++,P%2===0&&zt();let F=L-b,D=Math.min(1,F/bi),ce=D<.5?1+.35*(D/.5):1+.35*(1-(D-.5)/.5);_.scale.setScalar(ce),D<1?requestAnimationFrame(I):(_.scale.setScalar(1),h&&h())}requestAnimationFrame(I)}let dt=400,Zt=280,Jt=.45,Tn=160,Kn=280,tn=350,ti=500,bi=600,gr=400,to=280,Ts=.2,no=.18,ws=!1,ha=new k,ua=new k,yr=new k,fa=new k;function io(f=!1){g=!0;let h=null;if($==="playing"&&at.length>0){let L=at[ht],F=Ve(L);h=F&&F.hp>0?F:null}if(h||(h=Ee.find(L=>L.player===G&&L.hp>0)),!h)return;let _=a.position.distanceTo(c);if(_<.1&&(_=o),p.copy(a.position).sub(c).normalize(),p.lengthSq()<.01&&p.copy(u).normalize(),yr.copy(Le(h.x,h.y)),fa.copy(yr).add(p.clone().multiplyScalar(_)),f||ws){c.copy(yr),a.position.copy(fa),a.lookAt(c),zt();return}ws=!0,ha.copy(c),ua.copy(a.position);let b=performance.now(),P=0;si.shadowMap.enabled=!1;function I(L){P++,P%2===0&&zt();let F=Math.min(1,(L-b)/dt),D=F*(2-F);c.lerpVectors(ha,yr,D),a.position.lerpVectors(ua,fa,D),a.lookAt(c),F<1?requestAnimationFrame(I):(si.shadowMap.enabled=!0,ws=!1)}requestAnimationFrame(I)}let w=0,G=1,$="draft",W="pvp",Y=1,Ne={1:"",2:""},qe=null,it=null,ct=null,_t="long";function je(f){return W==="online"&&Ne[f]?Ne[f]:"Player "+f}let vt=1,cn=0,Un=null;async function Nn(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{Un=await navigator.wakeLock.request("screen"),Un.addEventListener("release",()=>{Un=null})}catch{Un=null}}function Vi(){Un&&(Un.release().catch(()=>{}),Un=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&W==="cvcpu"&&$==="playing"&&Nn()});let sn="balanced",yt=new Set(Mi),xr=[...Mi],rn=0,Pi={1:0,2:0},ni=null,Ii=null,Gn=null,wn=new Set,Si=[],at=[],ht=0,gn=null,Ln=new Map,da=null;function Gd(f){if(!f||f.hp<=0)return;da=f.id;let h=document.getElementById("unit-preview-card"),_=document.getElementById("unit-preview-image"),b=document.getElementById("unit-preview-name"),P=document.getElementById("unit-preview-meta"),I=document.getElementById("unit-preview-stats");h.classList.remove("player-1","player-2"),h.classList.add(f.player===1?"player-1":"player-2"),h.classList.toggle("level-2",f.level>=2&&f.level<3),h.classList.toggle("level-3",f.level>=3),_.src=la[f.class]||"",_.alt=f.name,b.textContent=f.name,P.textContent=`Lv.${f.level} ${f.class} \u2014 ${je(f.player)}`;let L=[["HP",`${f.hp}/${f.maxHp}`,"stat-val-hp"],["MP",`${f.mp}/${f.maxMp}`,""],["STR",zi(f,"str"),""],["AGI",zi(f,"agi"),""],["VIT",zi(f,"vit"),""],["DEX",zi(f,"dex"),""],["LUK",zi(f,"luk"),""],["INT",zi(f,"int"),""]];f.tempDebuff&&f.tempDebuff.poison!=null&&L.push(["Poison",`${f.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),f.tempBuff&&f.tempBuff.heal!=null&&L.push(["Regen",`${f.tempBuff.heal} HP/turn`,"stat-val-buff"]),I.innerHTML=L.map(([D,ce,Q])=>{let re=Q?` ${Q}`:"";return`<span class="stat-label">${D}</span><span class="stat-val${re}">${ce}</span>`}).join("");let F=f.maxHp>0&&f.hp/f.maxHp<.3;h.classList.toggle("low-hp",F),h.style.display="block"}function pa(){da=null;let f=document.getElementById("unit-preview-card");f.classList.remove("low-hp","level-2","level-3"),f.style.display="none"}let hn=!1,ji=!1,As=!1,ii=null,yn=!1,li=!1,Rs=!1,Li=[],Di=new _i;n.add(Di);let Gi=[],_r=!0,Cs=0,Hh=0;function zt(){_r=!0,Cs=performance.now()}let ma=new _i;n.add(ma);let Pl=[],Wd=tt,Xd=.02,qd=3368703,Yd=13382451;function $d(f,h){let _=f/2,b=_-h,P=new sa;P.moveTo(-_,-_),P.lineTo(_,-_),P.lineTo(_,_),P.lineTo(-_,_),P.lineTo(-_,-_);let I=new ia;return I.moveTo(-b,-b),I.lineTo(b,-b),I.lineTo(b,b),I.lineTo(-b,b),I.lineTo(-b,-b),P.holes.push(I),new Za(P)}let Kd=$d(Wd,Xd);function Ui(f=null){let h=Ee.filter(_=>_.hp>0&&_.id!==f).map(_=>`${_.id},${_.x},${_.y},${_.player}`).sort().join("|");if(!(Ui._lastSig===h&&Ui._lastExclude===f)){for(Ui._lastSig=h,Ui._lastExclude=f,Pl.forEach(_=>_.dispose()),Pl.length=0;ma.children.length;){let _=ma.children[0];ma.remove(_)}Ee.filter(_=>_.hp>0&&_.id!==f).forEach(_=>{let b=_.x,P=_.y,L=($n+e.height[P][b]*.35)/2+$n/2,F=b*tt-Ie+tt/2,D=P*tt-ze+tt/2,ce=L+.02,Q=_.player===1?qd:Yd,re=new In({color:Q,side:Cn}),z=new Ze(Kd,re);z.rotation.x=-Math.PI/2,z.position.set(F,ce,D),ma.add(z),Pl.push(re)}),zt()}}let Zd=1.15,Il={1:8102901,2:15628943},Ei=(()=>{let f=new In({color:Il[1]}),h=new Ze(new Ri(.1,.25,8),f);return h.rotation.x=Math.PI,h.visible=!1,n.add(h),h})();function Ll(){if($!=="playing"||at.length===0||Rs){Ei.visible=!1,Ei.removeFromParent(),n.add(Ei);return}let f=at[ht],h=Ve(f);if(!h||h.hp<=0){Ei.visible=!1,Ei.removeFromParent(),n.add(Ei);return}let _=ae.get(f);if(!_){Ei.visible=!1;return}Ei.removeFromParent(),_.add(Ei),Ei.position.set(0,Zd,0),Ei.material&&Ei.material.color.setHex(Il[h.player]??Il[1]),Ei.visible=!0}function Cv(f){let h=[[0,1],[0,-1],[1,0],[-1,0]],_=[];for(let[b,P]of h){let I=f.x+b,L=f.y+P;!Es(e,I,L)||Ee.some(D=>D.id!==f.id&&D.x===I&&D.y===L&&D.hp>0)||_.push(Math.atan2(b,P))}return _}function zh(f){if(Li.length===0)return f;if(Li.length===1)return Li[0];let h=Li[0],_=Math.abs(Vh(f-h));for(let b=1;b<Li.length;b++){let P=Math.abs(Vh(f-Li[b]));P<_&&(_=P,h=Li[b])}return h}function Vh(f){for(;f>Math.PI;)f-=2*Math.PI;for(;f<-Math.PI;)f+=2*Math.PI;return f}let Jd=1.2,Qi=(()=>{let f=new Ze(new Ri(.12,.35,8),new In({color:4500223}));return f.rotation.x=-Math.PI/2,f.visible=!1,n.add(f),f})();function jd(f,h){if(!Rs||at.length===0||Li.length===0)return;let _=at[ht],b=Ve(_),P=ae.get(_);if(!b||!P)return;po(f,h),Is.setFromCamera(Ls,a);let I=Is.intersectObjects(Z.children,!0);if(I.length===0)return;let L=null;for(let re of I)if(pu(re)){L=re.point;break}if(!L)return;let F=Le(b.x,b.y),D=L.x-F.x,ce=L.z-F.z;if(D*D+ce*ce<1e-6)return;let Q=Math.atan2(D,ce);P.rotation.y=zh(Q)}function Qd(){if(at.length===0)return;let f=at[ht],h=Ve(f),_=ae.get(f);if(!h||!_)return;Li=[[0,1],[0,-1],[1,0],[-1,0]].map(([P,I])=>Math.atan2(P,I)),Qi.removeFromParent(),_.add(Qi),Qi.position.set(0,Jd,0),Qi.rotation.x=-Math.PI/2,Qi.rotation.y=0,Qi.rotation.z=Math.PI,Qi.visible=!0,_.rotation.y=Li[0]}function ep(){Qi.visible=!1,Qi.removeFromParent(),n.add(Qi)}let Dl=[];(function(){let h=Ci,_=[1];for(let b=0;b<Math.floor((h-1)/2);b++)_.push(2,2,1,1);h%2===1?_.push(2):(_.push(2,2),_.push(1)),Dl=_})();function Wi(){return Dl[rn]}function Gh(){let f=Wi();return Pi[f]+1}function ga(){xe=0,J=0,oe.forEach(_=>{fe.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(fe.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),oe.clear(),be={30:!1,20:!1,10:!1};let f=Ci,h=[1];for(let _=0;_<Math.floor((f-1)/2);_++)h.push(2,2,1,1);f%2===1?h.push(2):(h.push(2,2),h.push(1)),Dl=h,$="draft",rn=0,Pi[1]=0,Pi[2]=0,yt=new Set(Mi),xr=mv([...Mi]),ni=null,Ii=null,Gn=null,wn.clear(),Si=[],Bn(),Nl(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function Ul(){return Ee.filter(f=>f.hp>0).sort((f,h)=>{let _=Me(f,"agi"),b=Me(h,"agi");if(b!==_)return b-_;let P=Me(f,"dex");return Me(h,"dex")-P}).map(f=>f.id)}function tp(f){let h=new Set(Ee.filter(Q=>Q.hp>0).map(Q=>Q.y*e.w+Q.x)),_=(Q,re)=>h.has(re*e.w+Q),b=(Q,re)=>Q>=0&&Q<e.w&&re>=0&&re<e.h,P=(Q,re)=>b(Q,re)&&Es(e,Q,re)&&!_(Q,re),I=ae.get(f.id),L=I!=null?I.rotation.y:f.player===1?Math.PI:0,F=f.x-Math.round(Math.cos(L)),D=f.y+Math.round(Math.sin(L));if(P(F,D))return{gx:F,gy:D};let ce=[[0,1],[0,-1],[1,0],[-1,0]];for(let[Q,re]of ce){let z=f.x+Q,he=f.y+re;if(P(z,he))return{gx:z,gy:he}}return null}function np(f,h,_,b){let P=b?.position&&b.position.gx!=null&&b.position.gy!=null?{gx:b.position.gx,gy:b.position.gy}:tp(f);if(!P)return null;let I=h.class&&Mi.includes(h.class)?h.class:"knight",L=h.hairColor!=null?h.hairColor:(Zs[I]||Zs.knight).hair,F={id:ye++,player:f.player,x:P.gx,y:P.gy,level:h.level!=null?h.level:1,name:h.name!=null?h.name:"Summoned",class:I,hairColor:L,hp:h.hp!=null?h.hp:10,maxHp:h.maxHp!=null?h.maxHp:10,mp:h.mp!=null?h.mp:5,maxMp:h.maxMp!=null?h.maxMp:5,str:h.str!=null?h.str:5,agi:h.agi!=null?h.agi:5,vit:h.vit!=null?h.vit:5,dex:h.dex!=null?h.dex:5,luk:h.luk!=null?h.luk:5,int:h.int!=null?h.int:5,range:h.range!=null?h.range:1,summonedBy:f.id};_!=null&&Array.isArray(_)&&_.length>0&&(F.summonedSkills=_),Ee.push(F),Qe(F),E(F,null,null),qt(F);let D=ae.get(F.id);if(D&&b?.useGrayscaleAppearance&&Rt(D),D){let Ae=function(we){he++,he%2===0&&zt();let Ye=we-z;if(Ye<gr){let Ce=Ye/gr,Ke=1-(1-Ce)*(1-Ce),st=Ts+(1-Ts)*Ke;D.scale.setScalar(st),requestAnimationFrame(Ae);return}let ke=Ye-gr;if(ke<to){let Ce=ke/to,Ke=Math.sin(Ce*Math.PI);D.position.y=re.y+no*Ke,requestAnimationFrame(Ae);return}D.scale.setScalar(1),D.position.y=re.y,zt()},Q=ae.get(f.id);D.rotation.y=Q!=null?Q.rotation.y:f.player===1?Math.PI:0,D.scale.setScalar(Ts);let re=Le(F.x,F.y),z=performance.now(),he=0;requestAnimationFrame(Ae)}let ce=$==="playing"&&at.length>0&&ht>=0&&ht<at.length?at[ht]:null;if(at=Ul(),ce!=null){let Q=at.indexOf(ce);Q>=0&&(ht=Q)}return Ui(),typeof Nt=="function"&&Nt(),zt(),F}function ya(f,h){let _=Ee.indexOf(h);if(_===-1)return null;We(h.id),Ee.splice(_,1),J=Math.max(0,J-1);let b=ae.get(h.id);b&&(n.remove(b),ae.delete(h.id));let P=h.class&&Mi.includes(h.class)?h.class:"knight",I=h.hairColor!=null?h.hairColor:(Zs[P]||Zs.knight).hair,L=Ye=>Math.max(1,Math.floor((Ye||0)*6/7)),F=L(h.maxHp),D=L(h.maxMp),ce={name:"Reanimated "+h.name,class:P,hairColor:I,level:h.level,hp:L(h.maxHp),maxHp:F,mp:L(h.maxMp),maxMp:D,str:L(h.str),agi:L(h.agi),vit:L(h.vit),dex:L(h.dex),luk:L(h.luk),int:L(h.int),range:h.range},Q=h.summonedSkills&&h.summonedSkills.length>0?h.summonedSkills.slice():(ca[P]||[]).slice(),re=new Set(Ee.filter(Ye=>Ye.hp>0).map(Ye=>Ye.y*e.w+Ye.x)),z=h.x,he=h.y,Ae=Es(e,z,he)&&!re.has(he*e.w+z),we={useGrayscaleAppearance:!0};return Ae&&(we.position={gx:z,gy:he}),np(f,ce,Q,we)}function ip(){document.getElementById("draft-panel").style.display="none";let f=document.getElementById("draft-placement-card");f&&(f.style.display="none",f.innerHTML=""),Bn();let h=document.getElementById("battle-start-overlay");h&&(h.classList.add("visible"),h.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");for(_&&(_.style.display="none",_.innerHTML=""),$="playing",w=0,at=Ul(),ht=0;ht<at.length;){let I=Ve(at[ht]);if(I&&I.hp>0)break;ht++}ht>=at.length&&(ht=0);let b=Ve(at[ht]);G=b?b.player:1,yn=!1,li=!1,gn=at[ht],setTimeout(()=>{h&&(h.classList.remove("visible"),h.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",Ui(),Nt(),Ll(),io(!0),W==="cvcpu"&&Nn()},4e3)}function Nl(){let f=document.getElementById("draft-panel"),h=document.getElementById("draft-title"),_=document.getElementById("draft-classes"),b=document.getElementById("draft-message"),P=document.getElementById("turn-player"),I=document.getElementById("draft-placement-card");if(ni){f.style.display="none",P.textContent=`Draft: ${je(Wi())} \u2014 place ${Vn[ni].name}`;let ce=Wi();I.style.display="flex",I.classList.remove("player-1","player-2"),I.classList.add("player-"+ce),I.style.left=ce===1?"24px":"",I.style.right=ce===2?"24px":"";let Q=[...Ee.filter(he=>he.player===ce).map(he=>he.class),ni],re=(he,Ae)=>{let we=Vn[he];return`
        <div class="draft-class-card${Ae?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${la[he]||""}" alt="${we.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${we.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${we.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${we.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${we.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${we.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${we.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${we.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${we.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${we.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${we.range}</span>
            </div>
          </div>
        </div>
      `},z=3;if(Q.length>z){I.classList.add("draft-placement-cols");let he=[];for(let we=0;we<Q.length;we+=z)he.push(Q.slice(we,we+z));let Ae=Q.length-1;I.innerHTML=he.map((we,Ye)=>{let ke=Ye===he.length-1,Ce=we.map((Ke,st)=>{let It=Ye*z+st===Ae;return re(Ke,It)}).join("");return`<div class="draft-placement-col${ke?" draft-placement-col-current":""}">${Ce}</div>`}).join("")}else I.classList.remove("draft-placement-cols"),I.innerHTML=Q.map((he,Ae)=>{let we=Ae===Q.length-1;return re(he,we)}).join("");W==="pvcpu"&&Wi()===2&&setTimeout(Ma,500),W==="cvcpu"&&setTimeout(Ma,500);return}I.style.display="none",I.innerHTML="",$==="draft"&&(f.style.display="flex");let L=document.getElementById("draft-detail");L&&(L.style.display="");let F=Wi();if(W!=="online"||F===Y){let Ye=function(){let ke=Ii;if(!ke||!Vn[ke]){ce&&(ce.style.display=""),Q&&(Q.style.display="none"),re&&(re.style.display="none"),we&&(we.style.display="none");return}let Ce=Vn[ke],Ke=ca[ke]||[];ce&&(ce.style.display="none"),Q&&(Q.src=la[ke]||"",Q.alt=Ce.name,Q.style.display="block"),re&&(re.style.display="block"),z&&(z.textContent=Ce.name),he&&(he.innerHTML=[["HP",Ce.hp],["MP",Ce.mp],["STR",Ce.str],["AGI",Ce.agi],["VIT",Ce.vit],["DEX",Ce.dex],["LUK",Ce.luk],["INT",Ce.int],["Range",Ce.range]].map(([Ft,It])=>`<span class="draft-stat-label">${Ft}</span><span class="draft-stat-value">${It}</span>`).join("")),Ae&&(Ae.innerHTML=Ke.length?Ke.map(Ft=>`<div class="draft-detail-skill"><span class="draft-detail-skill-name">${Ft.name}</span><span class="draft-detail-skill-desc">${Ft.description||""}</span></div>`).join(""):'<div class="draft-detail-skill">No skills</div>'),we&&(we.style.display="block",we.disabled=!yt.has(ke),we.onclick=()=>{let Ft=Ii;Ft&&yt.has(Ft)&&Bl(Ft)});let st=ke?_.querySelector(`button.draft-class-card[data-class-key="${ke}"]`):null;Gn!==st&&(Gn&&Gn.classList.remove("draft-class-card-selected"),Gn=st,Gn&&Gn.classList.add("draft-class-card-selected"))};h.textContent=`${je(F)}: Pick a class (${Gh()}/${Ci})`,b.textContent="",Gn=null,_.innerHTML="",P.textContent=`Draft: ${je(F)} \u2014 pick a class`;let ce=document.getElementById("draft-detail-placeholder"),Q=document.getElementById("draft-detail-image"),re=document.getElementById("draft-detail-content"),z=document.getElementById("draft-detail-name"),he=document.getElementById("draft-detail-stats"),Ae=document.getElementById("draft-detail-skills"),we=document.getElementById("draft-select-btn");xr.forEach(ke=>{let Ce=yt.has(ke),Ke=Vn[ke],st=document.createElement("button");st.type="button",st.dataset.classKey=ke,st.className="draft-class-card"+(Ce?"":" draft-class-card-unavailable")+(Ii===ke?" draft-class-card-selected":""),st.disabled=!Ce,st.innerHTML=`
          <img class="draft-class-card-image" src="${la[ke]||""}" alt="${Ke.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${Ke.name}</div>
          </div>
        `,Ce&&st.addEventListener("click",()=>{Ii=ke,Gn&&Gn!==st&&Gn.classList.remove("draft-class-card-selected"),Gn=st,st.classList.add("draft-class-card-selected"),Ye()}),Ii===ke&&(Gn=st),_.appendChild(st)}),Ye()}else{h.textContent=`${je(F)} is picking a class`,b.textContent="",Gn=null,_.innerHTML="",P.textContent=`Draft: ${je(F)} \u2014 pick a class`;let ce=document.getElementById("draft-detail-placeholder"),Q=document.getElementById("draft-detail-image"),re=document.getElementById("draft-detail-content"),z=document.getElementById("draft-select-btn");ce&&(ce.style.display=""),Q&&(Q.style.display="none"),re&&(re.style.display="none"),z&&(z.style.display="none")}W==="pvcpu"&&Wi()===2&&setTimeout(Ma,500),W==="cvcpu"&&setTimeout(Ma,500)}function Bl(f){if(!yt.has(f)||ni)return;ni=f;let h=Wi(),_=new Set(Ee.map(I=>I.y*e.w+I.x)),b=Mv(e,h,_),P=Nd(e,b);Si=P,wn=new Set(P.map(I=>I.gy*e.w+I.gx)),Sp(P),Nl(),W==="online"&&h===Y&&typeof an=="function"&&an({type:"draftPick",classKey:f})}function Ol(f,h){if(!ni)return;let _=Wi(),b=h*e.w+f;if(!wn.has(b))return;let P=Vn[ni],I={id:ye++,player:_,x:f,y:h,level:1,name:P.name,class:ni,hairColor:(Zs[ni]||Zs.knight).hair,hp:P.hp,maxHp:P.maxHp,mp:P.mp,maxMp:P.maxMp,str:P.str,agi:P.agi,vit:P.vit,dex:P.dex,luk:P.luk,int:P.int,range:P.range};Ee.push(I),Qe(I),E(I,null,null),qt(I);let L=ae.get(I.id);L&&(L.rotation.y=I.player===1?Math.PI:0),yt.delete(ni),ni=null,wn.clear(),Si=[],Bn(),W==="online"&&_===Y&&typeof an=="function"&&an({type:"draftPlace",gx:f,gy:h});let F=document.getElementById("draft-placement-card");if(F&&(F.style.display="none",F.innerHTML=""),Pi[_]++,rn++,rn>=2*Ci){ip();return}let D=Wi(),ce=Gh(),Q=document.getElementById("draft-panel"),re=document.getElementById("draft-title"),z=document.getElementById("draft-message"),he=document.getElementById("draft-detail"),Ae=document.getElementById("draft-classes"),we=document.getElementById("turn-player"),Ye=W!=="online"||D===Y;Q&&re&&Ae&&we&&(Q.style.display="flex",re.textContent=Ye?`${je(D)}: Pick a class (${ce}/${Ci})`:`${je(D)} is picking a class`,z&&(z.textContent=Ye?"Get ready\u2026":""),Gn=null,Ae.innerHTML="",we.textContent=`Draft: ${je(D)} \u2014 pick a class`),he&&(he.style.display="none"),setTimeout(Nl,1500)}function Nt(){Nt._pending||(Nt._pending=!0,requestAnimationFrame(()=>{Nt._pending=!1,sp()}))}function sp(){let f=Nt._cache||(Nt._cache={}),h=f.turnEl||(f.turnEl=document.getElementById("turn-player")),_=f.menuLabel||(f.menuLabel=document.getElementById("menu-label")),b=f.turnMenu||(f.turnMenu=document.getElementById("turn-menu")),P=f.unitInfo||(f.unitInfo=document.getElementById("unit-info")),I=f.unitNameEl||(f.unitNameEl=document.getElementById("unit-name")),L=f.unitLevelClassEl||(f.unitLevelClassEl=document.getElementById("unit-level-class")),F=f.unitStatsEl||(f.unitStatsEl=document.getElementById("unit-stats")),D=f.unitClassImageEl||(f.unitClassImageEl=document.getElementById("unit-class-image"));if($==="playing"&&Ee.forEach(z=>{if(z.hp<=0)return;let he=ae.get(z.id);he&&H(he,z.maxHp>0&&z.hp/z.maxHp<De)}),b.classList.remove("player-1","player-2"),b.classList.add(G===1?"player-1":"player-2"),b.classList.toggle("level-2",!1),b.classList.toggle("level-3",!1),$==="playing"&&at.length>0){let z=at[ht],he=Ve(z),Ae=he&&he.hp>0?he:null;if(W==="online"&&Ae&&Ae.player!==Y)gn=null;else if(Ae){let we=gn!=null?Ve(gn):null;(gn==null||!we||we.hp<=0)&&(gn=z)}}if(gn!=null){let z=Ve(gn);if(z&&z.hp>0){P.classList.remove("no-unit");let he=z.maxHp>0&&z.hp/z.maxHp<.25;b.classList.toggle("low-hp",he),b.classList.toggle("level-2",z.level>=2&&z.level<3),b.classList.toggle("level-3",z.level>=3),I.textContent=z.name,L.textContent=`Lv.${z.level} ${z.class}`,D.src=la[z.class]||"",D.alt=z.name;let Ae=[["HP",`${z.hp}/${z.maxHp}`,"stat-val-hp"],["MP",`${z.mp}/${z.maxMp}`,""],["STR",zi(z,"str"),""],["AGI",zi(z,"agi"),""],["VIT",zi(z,"vit"),""],["DEX",zi(z,"dex"),""],["LUK",zi(z,"luk"),""],["INT",zi(z,"int"),""]];z.tempDebuff&&z.tempDebuff.poison!=null&&Ae.push(["Poison",`${z.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),z.tempBuff&&z.tempBuff.heal!=null&&Ae.push(["Regen",`${z.tempBuff.heal} HP/turn`,"stat-val-buff"]),F.innerHTML=Ae.map(([we,Ye,ke])=>{let Ce=ke?` ${ke}`:"";return`<span>${we}</span><span class="stat-val${Ce}">${Ye}</span>`}).join("")}else b.classList.remove("low-hp","level-2","level-3"),P.classList.add("no-unit"),I.textContent="\u2014 Select a unit \u2014",L.textContent="",F.textContent="",D.src="",D.alt=""}else b.classList.remove("low-hp","level-2","level-3"),P.classList.add("no-unit"),I.textContent="\u2014 Select a unit \u2014",L.textContent="",F.textContent="",D.src="",D.alt="";if(gn!=null)h.textContent=`${je(G)} \u2014 Unit ${I.innerHTML} active`;else{let z=at.length?Ve(at[ht]):null;h.textContent=z?`${z.name} (${je(G)})`:je(G)}_.textContent=je(G);let ce=f.btnAttack||(f.btnAttack=document.getElementById("btn-attack")),Q=f.btnSkill||(f.btnSkill=document.getElementById("btn-skill")),re=f.btnEnd||(f.btnEnd=document.getElementById("btn-end"));if(W==="cvcpu"&&$==="playing")ce.disabled=!0,Q.disabled=!0,re&&(re.disabled=!0),h.textContent=`${je(G)} (CPU)`;else if(Rs)ce.disabled=!0,Q.disabled=!0,h.textContent="Click on map to choose facing direction";else if($==="playing"){ce.disabled=li;let z=at.length?at[ht]:null,he=z?Ve(z):null,Ae=he&&he.hp>0?he:null,we=W!=="cvcpu"&&(W!=="pvcpu"||G===1)&&(W!=="online"||G===Y),Ye=we&&Ae&&!li?ql(Ae):[];Q.disabled=li||!we||Ye.length===0,re&&(re.disabled=W==="online"&&G!==Y)}if($==="playing"){let z=Math.min(w+1,Ms);h.textContent=(h.textContent||"")+` \u2014 Turn ${z}/${Ms}`;let he=f.turnsLeftEl||(f.turnsLeftEl=document.getElementById("turns-left")),Ae=f.turnsLeftValueEl||(f.turnsLeftValueEl=document.getElementById("turns-left-value"));if(he&&Ae){he.style.display="";let we=Math.max(0,Ms-w);Ae.textContent=String(we),he.classList.toggle("turns-left-low",we<=10),(we===30||we===20||we===10)&&(be[we]||(ot(we),be[we]=!0))}}else{let z=f.turnsLeftEl||(f.turnsLeftEl=document.getElementById("turns-left"));z&&(z.style.display="none")}$==="playing"&&Xl(G)&&!hn&&setTimeout(xn,700)}function jt(){if(W==="online"&&G===Y&&typeof er=="function"){let re=at[ht],z=ae.get(re),he=z?.rotation.y;er({type:"endTurn",unitId:re,facingAngle:he})}zt(),pa(),ji=!1,As=!1,ii=null,Rs=!1,Li=[],ep(),Bn();let f=at.length;if(f===0)return;let h=at[ht],_=Ve(h);if(_&&_.tempDebuff&&_.tempDebuff.duration--,_&&_.tempDebuff&&_.tempDebuff.duration<=0&&(_.tempDebuff=void 0),_&&_.tempBuff&&_.tempBuff.duration--,_&&_.tempBuff&&_.tempBuff.duration<=0&&(_.tempBuff=void 0),_&&_.hp>0){let re=Math.ceil(Me(_,"int")*.15);_.mp=Math.min(_.maxMp,_.mp+re)}if(_&&_.hp>0){let re=_.x,z=_.y;e.type[z][re]===nt.CENTER&&_.level===1&&Be(_);let he=_.player===1?nt.BASE_TOP:nt.BASE_BOTTOM;e.type[z][re]===he&&_.level===2&&Be(_)}if(w++,w>=Ms){Dp();return}let b=(ht+1)%f,P=0;for(;P<f;){let re=at[b],z=Ve(re);if(z&&z.hp>0)break;b=(b+1)%f,P++}let I=b===0;ht=b;let L=["poison"],F=at[ht],D=Ve(F);for(let re=0;re<f&&!(!D||D.hp<=0);re++){let z=D.tempDebuff||{},he=L.find(we=>!isNaN(z[we])),Ae=z[he]||0;if(Ae<=0)break;if(console.log("[DEBUFF]",`${he}: ${Ae} to ${D.name}`),D.hp=Math.max(0,D.hp-Ae),ci(D.x,D.y,String(Ae),!1,he),Ht(D),D.hp<=0){On(D),b=(ht+1)%f;let we=0;for(;we<f;){let Ye=at[b],ke=Ve(Ye);if(ke&&ke.hp>0)break;b=(b+1)%f,we++}ht=b;continue}break}let ce=at[ht],Q=Ve(ce);if(Q&&Q.hp>0){let re=Q.tempBuff,z=re&&re.heal!=null&&!isNaN(re.heal)?Number(re.heal):0;if(z>0){let he=Q.hp;Q.hp=Math.min(Q.maxHp,Q.hp+z);let Ae=Q.hp-he;Ae>0&&(console.log("[BUFF]",`heal: ${Ae} to ${Q.name}`),ci(Q.x,Q.y,`+${Ae}`,!1,"heal"),Ht(Q))}}G=Q&&Q.hp>0?Q.player:1,yn=!1,li=!1,gn=at[ht],I&&(at=Ul(),ht=0),Nt(),Ll(),io()}document.getElementById("btn-attack").addEventListener("click",()=>{if(hn||li||$!=="playing"||at.length===0)return;if(W==="online"){let P=at[ht],I=Ve(P);if(!I||I.player!==Y)return}pa();let f=at[ht],h=Ve(f);if(!h||h.hp<=0)return;let _=h.range!=null?h.range:1;gn=f,ji=!0;let b=Bd(e,h.x,h.y,_);Ln=new Map,b.forEach((P,I)=>{let L=I%e.w,F=Math.floor(I/e.w);bs(e,h.x,h.y,L,F)&&Ln.set(I,P)}),Ep(Ln),Nt()}),document.getElementById("btn-skill").addEventListener("click",f=>{if(f.preventDefault(),f.stopPropagation(),hn||li)return;let h=at[ht],_=h?Ve(h):null,b=_&&_.hp>0?_:null;if(!b||b.player!==G||W==="online"&&b.player!==Y)return;let P=document.getElementById("skill-list-overlay"),I=document.getElementById("btn-skill");if(!I)return;if(P&&P.style.display==="block"){P.style.display="none";return}let L=ql(b),F=I.getBoundingClientRect();P||(P=document.createElement("div"),P.id="skill-list-overlay",P.className="skill-list-overlay",P.setAttribute("aria-hidden","true"),document.body.appendChild(P)),P.style.left=`${F.left}px`,P.style.top=`${F.top-4}px`,P.style.transform="translateY(-100%)",P.style.right="auto",P.style.bottom="auto",P.style.display="none",L.length===0?P.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(P.innerHTML=L.map((D,ce)=>`<button type="button" class="skill-option" data-skill-index="${ce}" ${D.disabled?"disabled":""}>
          <span class="skill-name">${D.name}</span> <span class="skill-meta">${D.cost} MP \xB7 Lv.${D.level}</span><br/>
          <span class="skill-meta">${D.description}</span>
        </button>`).join(""),P.querySelectorAll(".skill-option").forEach((D,ce)=>{D.addEventListener("click",Q=>{Q.preventDefault(),Q.stopPropagation();let re=L[ce];if(ii=re,P.style.display="none",P.setAttribute("aria-hidden","true"),re.target==="self"){if(b.mp<re.cost)return;b.mp-=re.cost,li=!0;let z={showFloatingCombatText:ci,handleUnitDeath:On,updateUnitSlashVisibility:Ht,updateTurnUI:Nt,units:Ee,reanimateDeadUnit:ya};W==="online"&&b.player===Y&&typeof an=="function"&&(an({type:"requestRender"}),er({type:"skill",unitId:b.id,targetId:b.id,effectKey:re.effectKey})),uo(b,b,re,z,()=>{Bn(),As=!1,ii=null,cs=new Set,yn&&b.hp>0?jt():Nt()}),Nt();return}if(re.target==="ally"&&fo(b,re,Ee).filter(Ae=>Ae.targetUnit&&Ae.targetUnit.id!==b.id).length===0&&b.mp>=re.cost){b.mp-=re.cost,li=!0;let Ae={showFloatingCombatText:ci,handleUnitDeath:On,updateUnitSlashVisibility:Ht,updateTurnUI:Nt,units:Ee,reanimateDeadUnit:ya};W==="online"&&b.player===Y&&typeof an=="function"&&(an({type:"requestRender"}),er({type:"skill",unitId:b.id,targetId:b.id,effectKey:re.effectKey})),uo(b,b,re,Ae,()=>{Bn(),As=!1,ii=null,cs=new Set,yn&&b.hp>0?jt():Nt()}),Nt();return}As=!0,ji=!1,bp(b,re),Nt()})})),requestAnimationFrame(()=>{P.style.display="block",P.style.visibility="visible",P.setAttribute("aria-hidden","false")})}),document.addEventListener("click",f=>{let h=document.getElementById("skill-list-overlay"),_=document.getElementById("btn-skill"),b=document.querySelector(".skill-wrap");!h||h.style.display!=="block"||b&&b.contains(f.target)||h.contains(f.target)||(h.style.display="none",h.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(hn||Rs||$!=="playing"||at.length===0)return;let f=at[ht],h=Ve(f);if(!h||h.hp<=0||W==="online"&&h.player!==Y)return;Rs=!0,gn=null,ji=!1,Ln=new Map,Bn(),Qd(),Ll();let _=document.getElementById("turn-player");_.textContent="Click on map to choose facing direction",Nt()}),c.set(0,8,0),a.position.copy(c).add(u),a.lookAt(c);let vr=document.getElementById("mode-select-overlay"),Wh=document.getElementById("mode-carousel-track"),Xh=document.getElementById("mode-carousel-prev"),qh=document.getElementById("mode-carousel-next"),so=document.getElementById("mode-carousel-dots"),ls=document.getElementById("mode-play-btn"),Yh=document.getElementById("mode-settings-pvp"),$h=document.getElementById("mode-settings-pvp-map"),Kh=document.getElementById("mode-settings-pvp-num-units"),Zh=document.getElementById("mode-settings-pvp-none"),Jh=document.getElementById("mode-settings-options"),ro=document.getElementById("pvp-map-mode"),xa=document.getElementById("pvp-num-units"),_a=document.getElementById("ai-draft-preference"),rp=document.getElementById("cvcpu-num-games"),ao=document.getElementById("cvcpu-num-units"),jh=document.getElementById("cvcpu-grid-w"),Qh=document.getElementById("cvcpu-grid-h"),eu=document.getElementById("cvcpu-center-plaza"),tu=document.getElementById("cvcpu-max-turns"),Mr=document.getElementById("move-speed"),br=document.getElementById("draft-picks-per-player"),Js=document.getElementById("online-connect-overlay"),Ni=document.getElementById("online-player-name"),js=document.getElementById("online-create-section"),Sr=document.getElementById("online-join-section"),Er=document.getElementById("online-offer-text"),oo=document.getElementById("online-reply-text"),lo=document.getElementById("online-paste-offer"),va=document.getElementById("online-join-answer-section"),Tr=document.getElementById("online-answer-text"),Fl=document.getElementById("online-error"),nu=document.getElementById("online-waiting-msg"),es=Ss?["pvp","pvcpu","cvcpu","online","story"]:["pvp","pvcpu","online","story"],kl=es.length-1,Fn=0;function Hl(){return Fn===kl}function ap(){return es[Fn]==="online"}function co(f){Fn=Math.max(0,Math.min(f,kl)),Wh&&(Wh.style.transform=`translateX(-${Fn*100}%)`),so&&so.querySelectorAll(".mode-dot").forEach((_,b)=>{_.classList.toggle("active",b===Fn),_.setAttribute("aria-selected",b===Fn)}),Yh&&(Yh.style.display=Fn===0||Fn===1||Hl()||es[Fn]==="online"?"":"none"),$h&&($h.style.display=Fn===0||Fn===1||es[Fn]==="online"?"":"none"),Kh&&(Kh.style.display=es[Fn]==="pvp"?"":"none"),es[Fn]==="pvp"&&xa&&(xa.style.width="11em",xa.value=String(Math.max(1,Math.min(20,Ci)))),Zh&&(Zh.style.display=Hl()?"":"none"),Jh&&(Jh.style.display=Ss&&es[Fn]==="cvcpu"?"":"none"),Ss&&es[Fn]==="cvcpu"&&ao&&(ao.value=String(Math.max(1,Math.min(20,Ci))));let h=ls?.querySelector(".mode-play-text");ls&&h&&(Hl()?(ls.disabled=!0,h.textContent="Coming Soon"):(ls.disabled=!1,h.textContent=ap()?"Connect":"Play game"))}if(so)for(let f=0;f<=kl;f++){let h=document.createElement("button");h.type="button",h.className="mode-dot"+(f===0?" active":""),h.setAttribute("role","tab"),h.setAttribute("aria-label",`Mode ${f+1}`),h.setAttribute("aria-selected",f===0),h.addEventListener("click",()=>co(f)),so.appendChild(h)}if(Xh&&Xh.addEventListener("click",()=>co(Fn-1)),qh&&qh.addEventListener("click",()=>co(Fn+1)),vr&&!Ss){let f=vr.querySelector('.mode-slide[data-mode="cvcpu"]');f&&f.parentNode&&f.parentNode.removeChild(f)}if(co(0),Mr&&(Mr.value=String(Ks),Mr.addEventListener("input",()=>{let f=parseInt(Mr.value,10);!Number.isNaN(f)&&f>=0&&(Ks=f)}),Mr.addEventListener("change",()=>{let f=parseInt(Mr.value,10);!Number.isNaN(f)&&f>=0&&(Ks=f)})),br&&(br.value=String(Ci),br.addEventListener("input",()=>{let f=parseInt(br.value,10);!Number.isNaN(f)&&f>=1&&(Ci=f)}),br.addEventListener("change",()=>{let f=parseInt(br.value,10);!Number.isNaN(f)&&f>=1&&(Ci=f)})),_a&&(fv.forEach(f=>{let h=document.createElement("option");h.value=f.value,h.textContent=f.label,_a.appendChild(h)}),_a.value=sn,_a.addEventListener("change",()=>{sn=_a.value})),Js){let f=document.getElementById("online-btn-create"),h=document.getElementById("online-btn-join"),_=document.getElementById("online-btn-copy-offer"),b=document.getElementById("online-btn-connect"),P=document.getElementById("online-btn-join-connect"),I=document.getElementById("online-btn-copy-answer");f&&f.addEventListener("click",async()=>{let L=Ni&&Ni.value.trim()||"Player 1";if(!L){di("Enter your name");return}di("");try{_t=ro&&ro.value||"long",ct=(Date.now()^Math.random()*4294967295)>>>0,bt(_t,ct);let F=await cp(L,ct,_t);Er&&(Er.value=F),js&&(js.style.display="flex",js.style.alignItems="flex-start"),Sr&&(Sr.style.display="none")}catch(F){di(F.message||"Failed to create game")}}),_&&Er&&_.addEventListener("click",()=>{Er.select(),document.execCommand("copy")}),b&&oo&&b.addEventListener("click",async()=>{let L=oo.value.trim();if(!L){di("Paste your friend's reply");return}di("");try{await up(L)}catch(F){di(F.message||"Failed to connect")}}),h&&h.addEventListener("click",()=>{if(!(Ni&&Ni.value.trim()||"Player 2")){di("Enter your name");return}di(""),js&&(js.style.display="none"),Sr&&(Sr.style.display="flex")}),P&&lo&&P.addEventListener("click",async()=>{let L=lo.value.trim();if(!L){di("Paste the host's code");return}di("");try{Y=2,Ne[2]=Ni&&Ni.value.trim()||"Player 2";let F=await hp(Ne[2],L);Tr&&(Tr.value=F),va&&(va.style.display="flex",va.style.alignItems="flex-start")}catch(F){di(F.message||"Failed to join")}}),I&&Tr&&I.addEventListener("click",()=>{Tr.select(),document.execCommand("copy")})}let Ps=new Audio;Ps.loop=!0,Ps.volume=.3,Ps.preload="auto";let zl=window.location.href.replace(/[^/]*$/,""),iu=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:zl+(zl.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Ps.src=iu,Ps.addEventListener("error",()=>{let f=zl+"assets/music/tavern.mp3";f!==iu&&(Ps.src=f)});function op(){Ps.paused&&Ps.play().catch(()=>{})}function di(f){Fl&&(Fl.textContent=f||"",Fl.style.display=f?"block":"none")}function su(){Js&&(Js.style.display="none",Js.setAttribute("aria-hidden","true"))}function lp(){di(""),Y=1,Ne={1:"",2:""},Js&&(Js.style.display="flex",Js.setAttribute("aria-hidden","false")),Ni&&(Ni.value=""),js&&(js.style.display="none"),Sr&&(Sr.style.display="none"),Er&&(Er.value=""),oo&&(oo.value=""),lo&&(lo.value=""),Tr&&(Tr.value=""),va&&(va.style.display="none"),nu&&(nu.style.display="block")}function ru(f){return new Promise(h=>{if(f.iceGatheringState==="complete"){h();return}let _=()=>{f.iceGatheringState==="complete"&&(f.removeEventListener("icegatheringstatechange",_),h())};f.addEventListener("icegatheringstatechange",_)})}async function cp(f,h,_){qe&&(qe.close(),qe=null,it=null);let b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),P=[];b.addEventListener("icecandidate",F=>{F.candidate&&P.push(F.candidate)});let I=b.createDataChannel("game-sync",{ordered:!0});it=I,qe=b,I.addEventListener("open",()=>ou(I,!0));let L=await b.createOffer();return await b.setLocalDescription(L),await ru(b),JSON.stringify({type:"offer",sdp:b.localDescription.sdp,candidates:P,playerName:f||"Player 1"})}async function hp(f,h){let _=JSON.parse(h),b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),P=[];if(b.addEventListener("icecandidate",L=>{L.candidate&&P.push(L.candidate)}),b.addEventListener("datachannel",L=>{it=L.channel,qe=b,ou(it,!1)}),await b.setRemoteDescription(new RTCSessionDescription({type:"offer",sdp:_.sdp})),_.candidates&&_.candidates.length)for(let L of _.candidates)await b.addIceCandidate(new RTCIceCandidate(L));let I=await b.createAnswer();return await b.setLocalDescription(I),await ru(b),JSON.stringify({type:"answer",sdp:b.localDescription.sdp,candidates:P,playerName:f||"Player 2"})}async function up(f){let h=JSON.parse(f);if(!qe){di("Create a game first, then paste your friend's reply.");return}let _=qe.signalingState;if(_!=="stable"){if(_!=="have-local-offer"){di("Wrong step: create a game first and send the code, then paste the reply.");return}if(await qe.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:h.sdp})),h.candidates&&h.candidates.length)for(let b of h.candidates)await qe.addIceCandidate(new RTCIceCandidate(b))}}let au=0,Qs=0,Vl=[],Gl=!1,ho=[];function wr(){Qs=Math.max(0,Qs-1),Qs===0&&Wl()}function Wl(){for(;Qs===0&&Vl.length>0;){let f=Vl.shift();if(f.type==="move"){pp(f.unitId,f.toGx,f.toGy);return}if(f.type==="attack"){f.strikes&&Array.isArray(f.strikes)&&f.strikes.length>0?lu(f.unitId,f.targetId,void 0,void 0,f.strikes):lu(f.unitId,f.targetId,f.hit,f.damage);return}if(f.type==="skill"){mp(f);return}if(f.type==="endTurn"){if(f.unitId!=null&&f.facingAngle!=null){let h=ae.get(f.unitId);h&&(h.rotation.y=f.facingAngle)}jt();return}if(f.type==="unitDeath"){let h=Ve(f.unitId),_=f.killerId!=null?Ve(f.killerId):null;h&&(h.hp=0,On(h,_,{skipSync:!0})),Wl();return}}}function ou(f,h){if(f.binaryType="arraybuffer",f.addEventListener("message",I=>{try{let L=JSON.parse(I.data);if(L.seq!=null&&L.seq<=au)return;L.seq!=null&&(au=L.seq),fp(L,h)}catch(L){console.warn("Online message parse error",L)}}),f.addEventListener("close",()=>{W==="online"&&di("Connection lost.")}),!h){let I=Ne[2]||Ni&&Ni.value.trim()||"Player 2";an({type:"joined",playerName:I});return}let _=Ni&&Ni.value.trim()||"Player 1",b=ct??(Date.now()^Math.random()*4294967295)>>>0,P=_t||"long";Ne[1]=_,an({type:"start",mapSeed:b,mapMode:P,playerName:_}),su(),ga()}function fp(f,h){if(f.type==="start"){Ne[1]=f.playerName||"Player 1",ct=f.mapSeed,_t=f.mapMode||"long",bt(_t,ct),su(),ga();return}if(f.type==="joined"){Ne[2]=f.playerName||"Player 2";return}if($==="draft"){f.type==="draftPick"?Bl(f.classKey):f.type==="draftPlace"&&Ol(f.gx,f.gy);return}$==="playing"&&(f.type==="move"||f.type==="attack"||f.type==="skill"||f.type==="endTurn"||f.type==="unitDeath"?(Vl.push(f),Wl()):f.type==="requestRender"&&zt())}function an(f){if(it&&it.readyState==="open"){let h=(typeof an.seq<"u"?an.seq:0)+1;an.seq=h,it.send(JSON.stringify({...f,seq:h}))}}function er(f){if(W==="online"&&Gl&&(f.type==="attack"||f.type==="skill"||f.type==="endTurn")){ho.push(f);return}an(f)}function dp(){for(let f=0;f<ho.length;f++)an(ho[f]);ho.length=0}function pp(f,h,_){let b=Ve(f);!b||b.hp<=0||(Qs++,Gt(b,h,_,()=>{zt(),Nt(),wr()}))}function lu(f,h,_,b,P){let I=Ve(f),L=Ve(h);if(!I||!L||L.hp<=0)return;Qs++;let F=()=>{zt(),Nt(),wr()};P&&P.length>0?ba(I,L,void 0,void 0,F,P):ba(I,L,_,b,F)}function mp(f){let h=Ve(f.unitId),_=f.targetId!=null?Ve(f.targetId):null;if(h)if(Qs++,f.effectKey&&h.mp>=(ca[h.class]||[]).find(b=>b.effectKey===f.effectKey)?.cost){let b=(ca[h.class]||[]).find(P=>P.effectKey===f.effectKey);if(b){h.mp-=b.cost;let P={showFloatingCombatText:ci,handleUnitDeath:On,updateUnitSlashVisibility:Ht,updateTurnUI:Nt,tryCollectPowerup:et,world:e,units:Ee,reanimateDeadUnit:ya,updateUnitTileIndex:E,updateUnitPosition(F){let D=ae.get(F.id);D&&D.position.copy(Le(F.x,F.y))},animateKnockback(F,D,ce,Q,re,z){let he=ae.get(F.id);if(!he){z&&z();return}let Ae=Le(D,ce).clone(),we=Le(Q,re).clone(),Ye=performance.now(),ke=0;function Ce(Ke){ke++,ke%2===0&&zt();let st=Math.min(1,(Ke-Ye)/Ks),Ft=It=>It*It*(3-2*It);he.position.lerpVectors(Ae,we,Ft(st)),st<1?requestAnimationFrame(Ce):(he.position.copy(we),z&&z())}requestAnimationFrame(Ce)}};eo(f.effectKey,h,_,P),_&&Ht(_);let L=b.target==="self"||b.target==="ally"?b.target==="self"?h:_:null;L?pt(L,()=>{zt(),Nt(),wr()}):(zt(),setTimeout(()=>{zt(),Nt(),wr()},400))}else zt(),setTimeout(()=>{zt(),Nt(),wr()},400)}else zt(),setTimeout(()=>{zt(),Nt(),wr()},400)}function gp(){if(es[Fn]==="story")return;let f=es[Fn];if(op(),W=f,f==="online"){vr&&vr.classList.add("hidden"),lp();return}if(f==="pvp"||f==="pvcpu"){let h=ro&&ro.value||"long";bt(h),f==="pvp"&&xa&&(Ci=Math.max(1,Math.min(20,parseInt(xa.value,10)||7)))}else f==="cvcpu"&&(Ss&&jh&&Qh&&eu&&(Uh=Math.max(5,Math.min(50,parseInt(jh.value,10)||21)),Nh=Math.max(5,Math.min(50,parseInt(Qh.value,10)||11)),Bh=Math.max(.1,Math.min(.9,parseFloat(eu.value)||.29))),Ss&&tu&&(Ms=Math.max(10,Math.min(999,parseInt(tu.value,10)||200))),bt("long"));f==="cvcpu"&&(vt=Math.max(1,parseInt(rp?.value,10)||1),cn=0,ao&&(Ci=Math.max(1,Math.min(20,parseInt(ao.value,10)||7)))),vr&&vr.classList.add("hidden"),ga()}ls?ls.addEventListener("click",f=>{if(ls.disabled)return;let h=ls.querySelector(".mode-play-ripple");if(h){let _=ls.getBoundingClientRect();h.style.left=f.clientX-_.left+"px",h.style.top=f.clientY-_.top+"px",h.style.width=h.style.height="20px",h.style.marginLeft=h.style.marginTop="-10px",h.classList.remove("ripple"),h.offsetHeight,h.classList.add("ripple"),setTimeout(()=>h.classList.remove("ripple"),500)}gp()}):ga();function Xl(f){return W==="pvcpu"&&f===2||W==="cvcpu"}function yp(){let f=Mi.filter(z=>yt.has(z));if(f.length===0)return null;let h=sn||"balanced";if(h==="random")return f[Math.floor(Math.random()*f.length)];if(h==="custom")return Hd.filter(he=>yt.has(he))[0]??f[0]??null;function _(z,he){let Ae=f[0],we=z(Ae),Ye=he(Ae);for(let ke=1;ke<f.length;ke++){let Ce=f[ke],Ke=z(Ce),st=he(Ce);(Ke>we||Ke===we&&st>Ye)&&(Ae=Ce,we=Ke,Ye=st)}return Ae}if(h==="tanky")return _(z=>Vn[z]?.hp??0,z=>Vn[z]?.vit??0);if(h==="aggressive")return _(z=>Vn[z]?.str??0,z=>Vn[z]?.agi??0);if(h==="scout")return _(z=>Vn[z]?.agi??0,z=>Vn[z]?.dex??0);if(h==="ranged")return _(z=>Vn[z]?.range??0,z=>Vn[z]?.dex??0);if(h==="caster")return _(z=>Vn[z]?.int??0,z=>Vn[z]?.mp??0);let b=Wi(),I=pv(Ci),L={tank:0,melee:0,support:0,ranged:0,caster:0};for(let z=0;z<Ee.length;z++){let he=Ee[z];if(he.player!==b)continue;let Ae=Oh[he.class];Ae&&L[Ae]++}let F=z=>Math.max(0,(I[z]??0)-(L[z]??0)),D=z=>{let he=Oh[z],Ae=he!=null?F(he):0,we=Vn[z]?.hp??0,Ye=-(zd[z]??1/0);return{def:Ae,hp:we,negVar:Ye}},ce=(z,he)=>z.def!==he.def?z.def>he.def:z.hp!==he.hp?z.hp>he.hp:z.negVar>he.negVar,Q=f[0],re=D(Q);for(let z=1;z<f.length;z++){let he=D(f[z]);ce(he,re)&&(Q=f[z],re=he)}return Q}function Ma(){if($!=="draft"||!Xl(Wi()))return;if(!ni){let h=yp();h&&Bl(h),setTimeout(Ma,500);return}let f=Si.length>0?Si:Nd(e,Array.from(wn,h=>({gx:h%e.w,gy:h/e.w|0})));if(f.length>0){let{gx:h,gy:_}=f[0];Ol(h,_)}}function cu(){if(e.centerTiles&&e.centerTiles.length>0)return e.centerTiles;let f=[];for(let h=0;h<e.h;h++)for(let _=0;_<e.w;_++)e.type[h][_]===nt.CENTER&&f.push({gx:_,gy:h});return f}function xp(f){let h=[],_=f===1?nt.BASE_TOP:nt.BASE_BOTTOM;for(let b=0;b<e.h;b++)for(let P=0;P<e.w;P++)e.type[b][P]===_&&h.push({gx:P,gy:b});return h}function yi(f,h,_,b){return Math.abs(f-_)+Math.abs(h-b)}function _p(f){let h=f.range!=null?f.range:1,_=[];for(let b of Ee){if(b.hp<=0||b.player===f.player)continue;let P=yi(f.x,f.y,b.x,b.y);P<=h&&P>0&&bs(e,f.x,f.y,b.x,b.y)&&_.push({target:b,dist:P})}return _}function vp(f,h,_){let b=_??Ee.filter(I=>I.hp>0&&I.player===f.player&&I.id!==f.id),P=h??Ee.filter(I=>I.hp>0&&I.player!==f.player);for(let I of b)for(let L of P){let F=L.range!=null?L.range:1,D=yi(L.x,L.y,I.x,I.y);if(D<=F&&D>0&&bs(e,L.x,L.y,I.x,I.y))return!0}return!1}function Gt(f,h,_,b){let P=f.x,I=f.y,L=mr(e,f.x,f.y,h,_,Ee,f);if(!L||L.length<=1){b&&b();return}gn=null,Bn(),hn=!0,g=!0,Ui(f.id),zt();let F=ae.get(f.id),D=1;function ce(){if(D>=L.length){let Ke=f.x,st=f.y;f.x=L[L.length-1].x,f.y=L[L.length-1].y,E(f,Ke,st),et(f),hn=!1,Tt(F),Ui(),Ln=new Map,yn=!0,W==="online"&&f.player===Y&&typeof an=="function"&&an({type:"move",unitId:f.id,toGx:f.x,toGy:f.y}),b&&b();return}let Q=L[D-1],re=L[D],z=Le(Q.x,Q.y).clone(),he=Le(re.x,re.y).clone(),Ae=he.x-z.x,we=he.z-z.z;Ae*Ae+we*we>1e-6&&(F.rotation.y=Math.atan2(Ae,we));let Ye=performance.now(),ke=0;function Ce(Ke){ke++,ke%2===0&&zt();let st=Math.min(1,(Ke-Ye)/Ks),It=(At=>At*At*(3-2*At))(st);if(F.position.lerpVectors(z,he,It),$e(F,It),g){let At=a.position.distanceTo(c),$t=At<.1?o:At;p.copy(a.position).sub(c).normalize(),p.lengthSq()<.01&&p.copy(u).normalize(),c.lerp(F.position,l),a.position.copy(c).add(p.clone().multiplyScalar($t)),a.lookAt(c)}st<1?requestAnimationFrame(Ce):(D++,ce())}requestAnimationFrame(Ce)}ce()}function hu(f,h){let _=Me(h,"agi")*.7+Me(h,"luk")*.3,P=Math.random()*Math.max(.001,_)<=Me(f,"dex"),I=0;if(P){let L=Me(f,"str")*.7+Me(f,"dex")*.2+Me(f,"int")*.1-(Me(h,"vit")*.3+Me(h,"luk")*.2);I=Math.max(1,Math.floor(L))}return{isHit:P,damage:I}}function ba(f,h,_,b,P,I){let L,F;if(Array.isArray(I)&&I.length>0)F=!0,L=I.map(Ce=>{let Ke=Ce.isHit!==void 0?Ce.isHit:Ce.hit;return{isHit:!!Ke,damage:Ke&&Ce.damage!=null&&Ce.damage>0?Ce.damage:0}});else if(_!==void 0){F=!0;let Ce=!!_,Ke=Ce&&b!=null&&b>0?b:0;L=[{isHit:Ce,damage:Ke}]}else F=!1,W==="online"&&f.player===Y&&typeof an=="function"&&an({type:"requestRender"}),L=[hu(f,h)],f.tempBuff&&f.tempBuff.doubleAttack===!0&&h.hp>0&&L.push(hu(f,h));if(li=!0,gn=null,ji=!1,Bn(),!F&&W==="online"&&f.player===Y&&typeof er=="function"){let Ce=L.map(Ke=>({hit:Ke.isHit,damage:Ke.isHit?Ke.damage:void 0}));er({type:"attack",unitId:f.id,targetId:h.id,strikes:Ce,hit:L[0].isHit,damage:L[0].isHit?L[0].damage:void 0})}if(!F){let Ce=h.hp;L.forEach((Ke,st)=>{let Ft=Ke.isHit?Math.max(0,Ce-Ke.damage):Ce;console.log("[ATTACK]",`${f.name} (${f.class}, P${f.player})`,"\u2192",`${h.name} (${h.class}, P${h.player})`,`strike ${st+1}/${L.length}:`,Ke.isHit?`${Ke.damage} dmg`:"MISS",`| ${h.name} HP ${Ce} \u2192 ${Ft}/${h.maxHp}`),Ce=Ft})}let D=ae.get(f.id);function ce(){si.shadowMap.enabled=!0,hn=!1,P&&setTimeout(()=>P(),0),F||(yn&&f.hp>0?setTimeout(()=>jt(),400):setTimeout(()=>Nt(),400))}if(!D||!D.userData.rightArm){let Ke=function(){if(Ce>=L.length||h.hp<=0){setTimeout(()=>{hn=!1,P&&P(),F||(yn&&f.hp>0?jt():Nt())},400);return}let st=L[Ce];Ce++,st.isHit?(h.hp=Math.max(0,h.hp-st.damage),ci(h.x,h.y,String(st.damage),!1),Ht(h),h.hp<=0&&On(h,f)):ci(h.x,h.y,"MISS",!0),Ce<L.length&&h.hp>0?setTimeout(Ke,400):setTimeout(()=>{hn=!1,P&&P(),F||(yn&&f.hp>0?jt():Nt())},400)};hn=!0;let Ce=0;Ke();return}let Q=Le(f.x,f.y).clone(),re=Le(h.x,h.y).clone(),z=Q.clone().lerp(re,.35),he=re.x-Q.x,Ae=re.z-Q.z;if(he*he+Ae*Ae>1e-6&&(D.rotation.y=Math.atan2(he,Ae)),(f.range!=null?f.range:1)>2){let It=function(At){if(At>=L.length||h.hp<=0){Ce&&(Ce.rotation.y=0),ce();return}let $t=L[At].isHit,Vt=L[At].damage,Dn=new $s(.035,.035,.4,6),un=new In({color:16763972}),xt=new Ze(Dn,un);xt.position.copy(Q),xt.position.y+=.6;let kt=re.clone().sub(Q).normalize();xt.quaternion.setFromUnitVectors(new k(0,1,0),kt),n.add(xt);let Kt=!1,Fe=null,wt=!1,Qt=xt.position.clone(),An=re.clone();An.y+=.6;let fn=performance.now(),Zn=0;function on(Rn){Zn++,Zn%2===0&&zt();let Ti=Rn-fn,rt=Math.min(1,Ti/Kn);if(xt.position.lerpVectors(Qt,An,rt),Ce){let mt=Math.sin(rt*Math.PI)*1.1;Ce.rotation.y=-mt}if(!Kt&&rt>=1&&(Kt=!0,n.remove(xt),Dn.dispose(),un.dispose(),$t?(h.hp=Math.max(0,h.hp-Vt),ci(h.x,h.y,String(Vt),!1),h.hp<=0&&(wt=!0),ae.get(h.id)?Fe=Rn:wt&&(On(h,f),wt=!1),Ht(h)):ci(h.x,h.y,"MISS",!0)),Fe!=null&&$t){let mt=ae.get(h.id);if(mt){let dn=Math.min(1,(Rn-Fe)/Tn),en=1-dn;Ds.copy(st).multiplyScalar(Ft*en),mt.position.copy(Ke).add(Ds),dn>=1&&(mt.position.copy(Ke),Fe=null,wt&&(On(h,f),wt=!1))}else Fe=null,wt&&(On(h,f),wt=!1)}if(rt<1)requestAnimationFrame(on);else{Ce&&(Ce.rotation.y=0);let mt=Fe==null;mt&&wt&&(On(h,f),wt=!1),mt?At+1<L.length&&h.hp>0?It(At+1):ce():requestAnimationFrame(on)}}requestAnimationFrame(on)},Ce=D.userData.rightArm,Ke=Le(h.x,h.y).clone(),st=re.clone().sub(Q).normalize(),Ft=.4;hn=!0,si.shadowMap.enabled=!1,It(0);return}function ke(Ce){if(Ce>=L.length||h.hp<=0){D.position.copy(Q),D.userData.rightArm&&(D.userData.rightArm.rotation.y=0),ce();return}let Ke=L[Ce].isHit,st=L[Ce].damage,Ft=!1,It=performance.now(),At=D.userData.rightArm,$t=null,Vt=!1,Dn=Le(h.x,h.y).clone(),un=re.clone().sub(Q).normalize(),xt=.4,kt=0;function Kt(Fe){kt++,kt%2===0&&zt();let wt=Fe-It,Qt=Math.min(1,wt/Zt),An=Qt<=.4?Qt/.4:1,fn=Qt>.4?(Qt-.4)/.6:0;Qt<=.4?D.position.lerpVectors(Q,z,An):D.position.lerpVectors(z,Q,fn);let Zn=Qt<=.35?Qt/.35:Qt<=.7?(.7-Qt)/.35:0;if(At.rotation.y=-Zn*1.1,!Ft&&Qt>=Jt&&(Ft=!0,Ke?(h.hp=Math.max(0,h.hp-st),ci(h.x,h.y,String(st),!1),h.hp<=0&&(Vt=!0),Ht(h),ae.get(h.id)?$t=Fe:Vt&&(On(h,f),Vt=!1)):ci(h.x,h.y,"MISS",!0)),$t!=null&&Ke){let on=ae.get(h.id);if(on){let Rn=Math.min(1,(Fe-$t)/Tn),Ti=1-Rn;Ds.copy(un).multiplyScalar(xt*Ti),on.position.copy(Dn).add(Ds),Rn>=1&&(on.position.copy(Dn),$t=null,Vt&&(On(h,f),Vt=!1))}else $t=null,Vt&&(On(h,f),Vt=!1)}if(Qt<1)requestAnimationFrame(Kt);else{D.position.copy(Q),At.rotation.y=0;let on=$t==null;on&&Vt&&(On(h,f),Vt=!1),on?Ce+1<L.length&&h.hp>0?ke(Ce+1):ce():requestAnimationFrame(Kt)}}requestAnimationFrame(Kt)}hn=!0,si.shadowMap.enabled=!1,ke(0)}function Mp(f,h){let _=Le(f,h);_.y+=.4;let b=new as(.1,12,12),P=new In({color:8930559,transparent:!0,opacity:.9}),I=new Ze(b,P);I.position.copy(_),n.add(I);let L=performance.now(),F=0;function D(ce){F++,F%2===0&&zt();let Q=ce-L,re=Math.min(1,Q/tn),z=re*(2-re);I.scale.setScalar(z*7.5),P.opacity=.9*(1-re),re<1?requestAnimationFrame(D):(n.remove(I),b.dispose(),P.dispose())}requestAnimationFrame(D)}function uo(f,h,_,b,P){if(_.target==="enemy"&&h==null){setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}let L=(_.range??0)>2&&h!=null&&(h.x!==f.x||h.y!==f.y),F=!L&&h!=null&&(h.x!==f.x||h.y!==f.y);if(!L&&!F){hn=!0,eo(_.effectKey,f,h,b);let kt=_.target==="self"||_.target==="ally",Kt=_.target==="self"?f:h;kt&&Kt?pt(Kt,()=>{setTimeout(()=>{hn=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)}):setTimeout(()=>{hn=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}if(F){let pn=function(le){bn++,bn%2===0&&zt();let _e=le-en,me=Math.min(1,_e/Zt),pe=me<=.4?me/.4:1,ge=me>.4?(me-.4)/.6:0;me<=.4?kt.position.lerpVectors(Kt,wt,pe):kt.position.lerpVectors(wt,Kt,ge);let Re=me<=.35?me/.35:me<=.7?(.7-me)/.35:0;if(Rn.rotation.y=-Re*1.1,!Ti&&me>=Jt&&(Ti=!0,eo(_.effectKey,f,h,dn),h.hp<=0&&(mt=!0),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(h),ae.get(h.id)&&_.target!=="ally"?rt=le:mt&&(On(h,f),mt=!1)),rt!=null){let ue=ae.get(h.id);if(ue){let ve=Math.min(1,(le-rt)/Tn),Bt=1-ve;Ds.copy(Zn).multiplyScalar(on*Bt),ue.position.copy(fn).add(Ds),ve>=1&&(ue.position.copy(fn),rt=null,mt&&(On(h,f),mt=!1))}else rt=null,mt&&(On(h,f),mt=!1)}me<1?requestAnimationFrame(pn):(kt.position.copy(Kt),Rn.rotation.y=0,rt==null&&mt&&(On(h,f),mt=!1),rt==null?(si.shadowMap.enabled=!0,hn=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)):requestAnimationFrame(pn))},kt=ae.get(f.id);if(!kt||!kt.userData.rightArm){hn=!0,eo(_.effectKey,f,h,b),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(h),setTimeout(()=>{hn=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}hn=!0;let Kt=Le(f.x,f.y).clone(),Fe=Le(h.x,h.y).clone(),wt=Kt.clone().lerp(Fe,.35),Qt=Fe.x-Kt.x,An=Fe.z-Kt.z;Qt*Qt+An*An>1e-6&&(kt.rotation.y=Math.atan2(Qt,An));let fn=Le(h.x,h.y).clone(),Zn=Fe.clone().sub(Kt).normalize(),on=.4,Rn=kt.userData.rightArm,Ti=!1,rt=null,mt=!1,dn={...b,handleUnitDeath:void 0},en=performance.now(),bn=0;si.shadowMap.enabled=!1,requestAnimationFrame(pn);return}let D=Le(f.x,f.y).clone(),ce=Le(h.x,h.y).clone(),Q=new $s(.035,.035,.4,6),re=new In({color:16763972}),z=new Ze(Q,re);z.position.copy(D),z.position.y+=.6;let he=ce.clone().sub(D).normalize();z.quaternion.setFromUnitVectors(new k(0,1,0),he),n.add(z),hn=!0;let Ae=ae.get(f.id),we=Ae&&Ae.userData.rightArm?Ae.userData.rightArm:null;if(Ae){let kt=ce.x-D.x,Kt=ce.z-D.z;kt*kt+Kt*Kt>1e-6&&(Ae.rotation.y=Math.atan2(kt,Kt))}let Ye=z.position.clone(),ke=ce.clone();ke.y+=.6;let Ce=performance.now(),Ke=Le(h.x,h.y).clone(),st=ce.clone().sub(D).normalize(),Ft=.4,It=!1,At=null,$t=0,Vt=null,Dn=_.effectKey==="powerShot"?{...b,animateKnockback(kt,Kt,Fe,wt,Qt,An){Vt={targ:kt,fromGx:Kt,fromGy:Fe,toGx:wt,toGy:Qt,knockbackOnDone:An}}}:b;function un(){si.shadowMap.enabled=!0,hn=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)}function xt(kt){$t++,$t%2===0&&zt();let Kt=kt-Ce,Fe=Math.min(1,Kt/Kn);if(z.position.lerpVectors(Ye,ke,Fe),we){let wt=Math.sin(Fe*Math.PI)*1.1;we.rotation.y=-wt}if(!It&&Fe>=1&&(It=!0,n.remove(z),Q.dispose(),re.dispose(),_.type==="spell"&&Mp(h.x,h.y),eo(_.effectKey,f,h,Dn),ae.get(h.id)&&h.hp>0&&(At=kt),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(h)),At!=null){let wt=ae.get(h.id);if(wt){let Qt=Math.min(1,(kt-At)/Tn),An=1-Qt;if(Ds.copy(st).multiplyScalar(Ft*An),wt.position.copy(Ke).add(Ds),Qt>=1&&(wt.position.copy(Ke),At=null,Vt)){let{targ:fn,fromGx:Zn,fromGy:on,toGx:Rn,toGy:Ti,knockbackOnDone:rt}=Vt;Vt=null,b.animateKnockback?b.animateKnockback(fn,Zn,on,Rn,Ti,()=>{rt&&rt(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(fn),un()}):un();return}}else if(At=null,Vt){Vt=null,un();return}}if(Fe<1)requestAnimationFrame(xt);else if(we&&(we.rotation.y=0),At==null)if(Vt){let{targ:wt,fromGx:Qt,fromGy:An,toGx:fn,toGy:Zn,knockbackOnDone:on}=Vt;Vt=null,b.animateKnockback?b.animateKnockback(wt,Qt,An,fn,Zn,()=>{on&&on(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(wt),un()}):un()}else un();else requestAnimationFrame(xt)}si.shadowMap.enabled=!1,requestAnimationFrame(xt)}function xn(){if($!=="playing"||!Xl(G)||hn||at.length===0)return;let f=at[ht],h=Ve(f);if(!h||h.hp<=0){setTimeout(()=>jt(),0);return}let _=Me(h,"agi"),b=Cl(e,h.x,h.y,_,Ee,h),P=new Set(Ee.filter(le=>le.hp>0&&le.id!==h.id).map(le=>le.y*e.w+le.x)),I=[];b.forEach((le,_e)=>{le!==0&&(P.has(_e)||I.push({gx:_e%e.w,gy:Math.floor(_e/e.w),dist:le}))});let L=_p(h),F=cu(),D=xp(h.player),ce=.25,Q=.03,re=h.maxHp>0&&h.hp/h.maxHp<ce,z=h.maxHp>0&&h.hp/h.maxHp<Q,he=h.level===2,Ae=F.filter(le=>!P.has(le.gy*e.w+le.gx)),we=D.filter(le=>!P.has(le.gy*e.w+le.gx)),Ye=new Set(F.map(le=>le.gy*e.w+le.gx)),ke=Ae.length>0?Ae:F,Ce=we.length>0?we:D,Ke=ke.length>0?Zn(ke):null,st=Ce.length>0?Zn(Ce):null,Ft=ql(h),It=h.tempBuff&&h.tempBuff.doubleAttack===!0,At=It?[]:Ft.filter(le=>!le.disabled&&h.mp>=le.cost&&le.target==="enemy"),$t=At.length>0?Math.max(...At.map(le=>le.range||0)):0,Vt=Math.max(h.range!=null?h.range:1,$t),Dn=h.level>=2&&Vt>=2,un=It?!1:Dn,xt=Ee.filter(le=>le.hp>0&&le.player!==h.player),kt=Ee.filter(le=>le.hp>0&&le.player===h.player&&le.id!==h.id);function Kt(le,_e){if(_e.length===0)return null;let me=null,pe=1/0;for(let ge of le){let Re=0;for(let ue of _e)Re+=yi(ge.gx,ge.gy,ue.gx,ue.gy);Re<pe&&(pe=Re,me=ge)}return me}function Fe(le,_e){if(_e.length===0||le.length===0)return null;let me=null,pe=1/0;for(let ge of le){let Re=1/0;for(let ue=0;ue<_e.length;ue++){let ve=_e[ue],Bt=yi(ge.gx,ge.gy,ve.gx,ve.gy);Bt<Re&&(Re=Bt)}Re<pe&&(pe=Re,me=ge)}return me}function wt(le,_e){let me=Vt,pe=[];for(let ge=0;ge<xt.length;ge++){let Re=xt[ge],ue=yi(le,_e,Re.x,Re.y);ue<=me&&ue>0&&bs(e,le,_e,Re.x,Re.y)&&pe.push({target:Re,dist:ue})}return pe}let Qt=new Set(I.map(le=>le.gy*e.w+le.gx));function An(le,_e){if(!le||le.length<=1)return null;let me=Math.min(_e,le.length-1);for(let pe=me;pe>=1;pe--){let ge=le[pe],Re=ge.y*e.w+ge.x;if(Qt.has(Re))return{gx:ge.x,gy:ge.y}}return null}function fn(le,_e){if(!le||le.length<=1)return null;let me=Math.min(_e,le.length-1);for(let pe=me;pe>=1;pe--){let ge=le[pe];if(!P.has(ge.y*e.w+ge.x))return{gx:ge.x,gy:ge.y}}return null}function Zn(le){let _e=Tv(e,h.x,h.y,le,Ee,h);return!_e||_e.path.length<=1?null:_e}function on(le){let _e=le??I;if(_e.length===0)return null;if(xt.length===0)return _e[0];let me=null,pe=-1;for(let ge of _e){let Re=1/0;for(let ue=0;ue<xt.length;ue++){let ve=xt[ue],Bt=yi(ge.gx,ge.gy,ve.x,ve.y);Bt<Re&&(Re=Bt)}Re>pe&&(pe=Re,me=ge)}return me}function Rn(le){let _e=le??I;if(_e.length===0)return null;if(xt.length===0)return _e[0];let me=h.maxHp>0&&h.hp/h.maxHp>=.6,pe=null,ge=-1/0;for(let Re of _e){let ue=1/0;for(let Lt=0;Lt<xt.length;Lt++){let Xt=yi(Re.gx,Re.gy,xt[Lt].x,xt[Lt].y);Xt<ue&&(ue=Xt)}let ve=999;if(kt.length>0){ve=1/0;for(let Lt=0;Lt<kt.length;Lt++){let Xt=yi(Re.gx,Re.gy,kt[Lt].x,kt[Lt].y);Xt<ve&&(ve=Xt)}}let Bt;me?Bt=ve<ue?ue-1e3:ue:Bt=ue-ve,Bt>ge&&(ge=Bt,pe=Re)}return pe}function Ti(){let le=Vt;if(xt.length===0)return null;let _e=null,me=-1;for(let pe of I){let ge=1/0;for(let ue=0;ue<xt.length;ue++){let ve=yi(pe.gx,pe.gy,xt[ue].x,xt[ue].y);ve<ge&&(ge=ve)}let Re=!1;for(let ue=0;ue<xt.length;ue++){let ve=xt[ue],Bt=yi(pe.gx,pe.gy,ve.x,ve.y);if(!(Bt<=0||Bt>le)&&bs(e,pe.gx,pe.gy,ve.x,ve.y)){Re=!0;break}}Re&&ge>me&&(me=ge,_e=pe)}return _e}function rt(le){if(li||xt.length===0||yn||I.length===0)return!1;let _e=new Set;for(let ue=0;ue<Ee.length;ue++){let ve=Ee[ue];ve.hp>0&&_e.add(ve.y*e.w+ve.x)}function me(ue,ve){let Bt=null,Lt=le;for(let Xt=-Lt;Xt<=Lt;Xt++)for(let St=-Lt;St<=Lt;St++){if(St===0&&Xt===0||Math.abs(St)+Math.abs(Xt)>Lt)continue;let _n=ue.x+St,Wn=ue.y+Xt;if(_n<0||_n>=e.w||Wn<0||Wn>=e.h||!Es(e,_n,Wn)||!bs(e,_n,Wn,ue.x,ue.y)||_e.has(Wn*e.w+_n))continue;let Mt=mr(e,h.x,h.y,_n,Wn,Ee,h),Ot=Mt?Mt.length-1:1/0;Mt&&Mt.length>1&&(!ve||Ot<=_)&&(!Bt||Mt.length<Bt.length)&&(Bt=Mt)}return Bt}let pe=[];for(let ue of xt){let ve=me(ue,!0);ve&&pe.push({enemy:ue,path:ve})}if(pe.length>0){let ue=pe.filter(Xt=>Xt.enemy.maxHp>0&&Xt.enemy.hp/Xt.enemy.maxHp<ce),ve=ue.length>0?ue:pe;ue.length>0?ve.sort((Xt,St)=>Xt.enemy.hp-St.enemy.hp||Xt.path.length-St.path.length):ve.sort((Xt,St)=>Xt.path.length-St.path.length||Xt.enemy.hp-St.enemy.hp);let Bt=ve[0],Lt=An(Bt.path,_);if(Lt&&(Lt.gx!==h.x||Lt.gy!==h.y))return Gt(h,Lt.gx,Lt.gy,()=>setTimeout(xn,600)),!0}let ge=null,Re=1/0;for(let ue of xt){let ve=me(ue,!1);ve&&ve.length<Re&&(Re=ve.length,ge=ve)}if(ge){let ue=An(ge,_);if(ue&&(ue.gx!==h.x||ue.gy!==h.y))return Gt(h,ue.gx,ue.gy,()=>setTimeout(xn,600)),!0}return!1}let mt=new Map,dn=[];for(let le of I){let _e=le.gy*e.w+le.gx;dn.length=0;for(let me=0;me<xt.length;me++){let pe=xt[me],ge=yi(le.gx,le.gy,pe.x,pe.y);ge<=Vt&&ge>0&&bs(e,le.gx,le.gy,pe.x,pe.y)&&dn.push({target:pe,dist:ge})}mt.set(_e,dn.length>0?dn.slice():[])}let en=L.some(le=>le.target.maxHp>0&&le.target.hp/le.target.maxHp<ce),bn=en||I.some(le=>(mt.get(le.gy*e.w+le.gx)||[]).some(me=>me.target.maxHp>0&&me.target.hp/me.target.maxHp<ce));if(li){if(yn){setTimeout(()=>jt(),400);return}if(un&&xt.length>0&&oe.size>0&&I.length>0){let ge=[];oe.forEach((ue,ve)=>{ge.push({gx:ve%e.w,gy:Math.floor(ve/e.w)})});let Re=Zn(ge);if(Re){let ue=fn(Re.path,_);if(ue&&(ue.gx!==h.x||ue.gy!==h.y)){Gt(h,ue.gx,ue.gy,()=>setTimeout(jt,400));return}let ve=Fe(I,ge);if(ve&&(ve.gx!==h.x||ve.gy!==h.y)){Gt(h,ve.gx,ve.gy,()=>setTimeout(jt,400));return}}}if(Ms-w<=20&&F.length>0){let ge=F.some(Re=>Re.gx===h.x&&Re.gy===h.y);if(ge&&I.length>0){let ue=I.filter(ve=>Ye.has(ve.gy*e.w+ve.gx)).filter(ve=>ve.gx!==h.x||ve.gy!==h.y);if(ue.length>0){let ve=on(ue);if(ve&&(ve.gx!==h.x||ve.gy!==h.y)){Gt(h,ve.gx,ve.gy,()=>setTimeout(jt,400));return}}setTimeout(()=>jt(),400);return}if(ge){setTimeout(()=>jt(),400);return}if(I.length>0){let Re=Ke,ue=Re?fn(Re.path,_):null;if(ue&&(ue.gx!==h.x||ue.gy!==h.y)){Gt(h,ue.gx,ue.gy,()=>setTimeout(jt,400));return}let ve=Fe(I,ke);if(ve&&(ve.gx!==h.x||ve.gy!==h.y)){Gt(h,ve.gx,ve.gy,()=>setTimeout(jt,400));return}}setTimeout(()=>jt(),400);return}if(!re&&I.length>0){if(he&&D.length>0&&!D.some(Re=>Re.gx===h.x&&Re.gy===h.y)){let Re=st,ue=Re?fn(Re.path,_):null;if(ue&&(ue.gx!==h.x||ue.gy!==h.y)){Gt(h,ue.gx,ue.gy,()=>setTimeout(jt,400));return}let ve=Fe(I,Ce);if(ve&&(ve.gx!==h.x||ve.gy!==h.y)){Gt(h,ve.gx,ve.gy,()=>setTimeout(jt,400));return}}if(F.length>0&&!F.some(Re=>Re.gx===h.x&&Re.gy===h.y)){let Re=Ke,ue=Re?fn(Re.path,_):null;if(ue&&(ue.gx!==h.x||ue.gy!==h.y)){Gt(h,ue.gx,ue.gy,()=>setTimeout(jt,400));return}let ve=Fe(I,ke);if(ve&&(ve.gx!==h.x||ve.gy!==h.y)){Gt(h,ve.gx,ve.gy,()=>setTimeout(jt,400));return}}}let _e=F.length>0?I.filter(ge=>Ye.has(ge.gy*e.w+ge.gx)):null,me=_e!=null&&_e.length>0?_e:I,pe=null;if(me.length>0&&kt.length>0&&(pe=Rn(me),pe)){let ge=mr(e,h.x,h.y,pe.gx,pe.gy,Ee,h),Re=ge?ge.length-1:1/0;(!ge||ge.length<=1||Re>_)&&(pe=on(me))}if(!pe&&me.length>0&&(pe=on(me)),pe&&(pe.gx!==h.x||pe.gy!==h.y)){Gt(h,pe.gx,pe.gy,()=>setTimeout(jt,400));return}setTimeout(()=>jt(),400);return}if(z&&Ms-w>20&&!yn&&I.length>0){let le=null,_e=1/0;for(let pe of I){let Re=(mt.get(pe.gy*e.w+pe.gx)||[]).filter(ue=>ue.target.maxHp>0&&ue.target.hp/ue.target.maxHp<ce);if(Re.length>0){let ue=Math.min(...Re.map(ve=>ve.target.hp));ue<_e&&(_e=ue,le=pe)}}if(le){let pe=mr(e,h.x,h.y,le.gx,le.gy,Ee,h),ge=pe?An(pe,_):null;if(ge&&(ge.gx!==h.x||ge.gy!==h.y)){Gt(h,ge.gx,ge.gy,()=>setTimeout(xn,600));return}}let me=on();if(me&&(me.gx!==h.x||me.gy!==h.y)){Gt(h,me.gx,me.gy,()=>setTimeout(xn,600));return}setTimeout(()=>jt(),400);return}if(!li&&!It){let Lt=function(Mt){return fo(h,Mt,Ee).filter(Yt=>Yt.targetUnit!=null).map(Yt=>Yt.targetUnit)},le=Ft,_e=h.maxHp>0?h.hp/h.maxHp:1,me=.35,pe=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct","bloodSuck","gnaw","vodoo","skewer"]),ge=new Set(["chakra","sacrifice"]),Re=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify","warCry","foresight","overheal","rapid"]),ue=new Set(["impale","poison","gaze","debilitate","bash","infect","curse"]),ve=new Set(["dominate","manaDrain","weaken","cripple","hex","blind","raid"]),Bt=new Set(["reanimate"]),Xt={showFloatingCombatText:ci,handleUnitDeath:On,updateUnitSlashVisibility:Ht,updateTurnUI:Nt,tryCollectPowerup:et,world:e,units:Ee,reanimateDeadUnit:ya,updateUnitTileIndex:E,updateUnitPosition(Mt){let Ot=ae.get(Mt.id);Ot&&Ot.position.copy(Le(Mt.x,Mt.y))},animateKnockback(Mt,Ot,Yt,Sn,Jn,mn){let kn=ae.get(Mt.id);if(!kn){mn&&mn();return}let ns=Le(Ot,Yt).clone(),tr=Le(Sn,Jn).clone(),Jl=performance.now(),vu=0;function Mu(Up){vu++,vu%2===0&&zt();let bu=Math.min(1,(Up-Jl)/Ks),Np=jl=>jl*jl*(3-2*jl);kn.position.lerpVectors(ns,tr,Np(bu)),bu<1?requestAnimationFrame(Mu):(kn.position.copy(tr),mn&&mn())}requestAnimationFrame(Mu)}},St=null,_n=null,Wn=en||!yn&&bn;if(!Wn){for(let Ot of le)if(!(Ot.disabled||h.mp<Ot.cost)&&ge.has(Ot.effectKey)){let Sn=fo(h,Ot,Ee).filter(Jn=>Jn.targetUnit&&Jn.targetUnit.maxHp>0&&Jn.targetUnit.hp/Jn.targetUnit.maxHp<.5);if(Sn.length>0){let Jn=Sn.sort((mn,kn)=>mn.targetUnit.hp-kn.targetUnit.hp)[0].targetUnit;St=Ot,_n=Jn;break}}}if(!St&&!Wn){let Mt=Ee.filter(Ot=>Ot.hp<=0);for(let Ot of le)if(!(Ot.disabled||h.mp<Ot.cost)&&!(Ot.effectKey==="reanimate"&&!Mt.length)&&Bt.has(Ot.effectKey)){St=Ot,_n=h;break}}if(!St&&!Wn&&(L.length>0||I.some(Ot=>(mt.get(Ot.gy*e.w+Ot.gx)||[]).length>0))){let Ot=le.filter(Yt=>!Yt.disabled&&Re.has(Yt.effectKey)).sort((Yt,Sn)=>(Sn.level||1)-(Yt.level||1));for(let Yt of Ot){let Sn=h.tempBuff&&h.tempBuff.duration>0;if(Yt.target==="self"){if(Yt.effectKey==="bloodlust"&&h.hp/h.maxHp>.8)continue;if(!Sn){St=Yt,_n=h;break}}if(Yt.target==="ally"){if(Yt.effectKey==="overheal"&&h.hp/h.maxHp>.7)continue;let mn=fo(h,Yt,Ee).filter(kn=>kn.targetUnit!=null).map(kn=>kn.targetUnit);if(mn.length>0){let kn=mn.filter(tr=>!tr.tempBuff||tr.tempBuff.duration<=0),ns=(kn.length>0?kn:mn).sort((tr,Jl)=>tr.hp-Jl.hp)[0];if(ns.tempBuff&&ns.tempBuff.duration>0||Yt.effectKey==="overheal"&&ns.hp/ns.maxHp>.7)continue;St=Yt,_n=ns;break}}}}if(!St){for(let Mt of le)if(!(Mt.disabled||h.mp<Mt.cost)&&pe.has(Mt.effectKey)){if(Mt.effectKey==="feast"&&h.hp/h.maxHp>.7||Mt.effectKey==="warCry"&&h.hp/h.maxHp<.3||Mt.effectKey==="berserk"&&h.hp/h.maxHp<.25||Mt.effectKey==="shuriken"&&L.length>0||Mt.effectKey==="judgement"&&h.hp/h.maxHp>.7)continue;let Ot=Lt(Mt);if(Ot.length===0)continue;let Yt=Ot.filter(mn=>mn.maxHp>0&&mn.hp/mn.maxHp<me),Sn=Yt.length>0?Yt:Ot,Jn=Mt.type==="spell"?Sn.reduce((mn,kn)=>{if(!mn)return kn;let ns=Me(kn,"int")-Me(mn,"int");return ns<0||ns===0&&kn.hp<mn.hp?kn:mn},null):Sn.reduce((mn,kn)=>!mn||kn.hp<mn.hp?kn:mn,null);St=Mt,_n=Jn;break}}if(!St&&!Wn){for(let Mt of le)if(!(Mt.disabled||h.mp<Mt.cost)&&ve.has(Mt.effectKey)){let Ot=Lt(Mt),Yt=Ot.length>0?Ot.reduce((Sn,Jn)=>!Sn||Jn.hp<Sn.hp?Jn:Sn,null):null;St=Mt,_n=Yt;break}}if(!St&&!Wn){for(let Mt of le)if(!(Mt.disabled||h.mp<Mt.cost)&&ue.has(Mt.effectKey)){let Yt=Lt(Mt).filter(Sn=>!Sn.tempDebuff||Sn.tempDebuff.duration<=0);if(Yt.length>0){let Sn=Yt.reduce((Jn,mn)=>!Jn||mn.hp<Jn.hp?mn:Jn,null);St=Mt,_n=Sn;break}}}if(St&&_n){h.mp-=St.cost,li=!0;let Mt=St.target==="self"?h:_n;uo(h,Mt,St,Xt,()=>setTimeout(xn,600));return}}if(vp(h,xt,kt)&&L.length>0){L.sort((_e,me)=>_e.target.hp-me.target.hp||_e.dist-me.dist);let le=L[0].target;ba(h,le);return}if(L.length>0){L.sort((_e,me)=>_e.target.hp-me.target.hp||_e.dist-me.dist);let le=L[0].target;ba(h,le);return}if(It&&rt(h.range!=null?h.range:1))return;if(!yn&&!bn&&oe.size>0&&I.length>0){let le=[];oe.forEach((me,pe)=>{le.push({gx:pe%e.w,gy:Math.floor(pe/e.w)})});let _e=Zn(le);if(_e){let me=fn(_e.path,_);if(me&&(me.gx!==h.x||me.gy!==h.y)){Gt(h,me.gx,me.gy,()=>setTimeout(xn,600));return}let pe=Fe(I,le);if(pe&&(pe.gx!==h.x||pe.gy!==h.y)){Gt(h,pe.gx,pe.gy,()=>setTimeout(xn,600));return}}}let pn=Ms-w;if(pn<=20&&F.length>0&&!yn&&I.length>0&&!F.some(_e=>_e.gx===h.x&&_e.gy===h.y)){let _e=Ke,me=_e?_e.path:null,pe=F.length>0?Math.min(...F.map(St=>yi(h.x,h.y,St.gx,St.gy))):1/0,ge=new Map,Re=new Map;for(let St of I){let _n=St.gy*e.w+St.gx;ge.set(_n,F.length>0?Math.min(...F.map(Wn=>yi(St.gx,St.gy,Wn.gx,Wn.gy))):1/0),Re.set(_n,me?me.findIndex(Wn=>Wn.x===St.gx&&Wn.y===St.gy):-1)}let ue=null,ve=-1,Bt=ce;for(let St of I){let _n=St.gy*e.w+St.gx;if(ge.get(_n)>pe||(mt.get(_n)||[]).filter(Sn=>Sn.target.maxHp>0&&Sn.target.hp/Sn.target.maxHp<Bt).length===0)continue;let Ot=Re.get(_n),Yt=Ot>=0?Ot:0;Yt>ve&&(ve=Yt,ue=St)}if(ue&&(ue.gx!==h.x||ue.gy!==h.y)){Gt(h,ue.gx,ue.gy,()=>setTimeout(xn,600));return}let Lt=_e?fn(_e.path,_):null;if(Lt&&(Lt.gx!==h.x||Lt.gy!==h.y)){Gt(h,Lt.gx,Lt.gy,()=>setTimeout(xn,600));return}let Xt=Fe(I,ke);if(Xt&&(Xt.gx!==h.x||Xt.gy!==h.y)){Gt(h,Xt.gx,Xt.gy,()=>setTimeout(xn,600));return}}if(re&&I.length>0&&!yn){let le=null,_e=1/0;for(let me of I){let ge=(mt.get(me.gy*e.w+me.gx)||[]).filter(Re=>Re.target.maxHp>0&&Re.target.hp/Re.target.maxHp<ce);if(ge.length>0){let Re=Math.min(...ge.map(ue=>ue.target.hp));Re<_e&&(_e=Re,le=me)}}if(le){let me=mr(e,h.x,h.y,le.gx,le.gy,Ee,h),pe=me?An(me,_):null;if(pe&&(pe.gx!==h.x||pe.gy!==h.y)){Gt(h,pe.gx,pe.gy,()=>setTimeout(xn,600));return}}if(pn>20&&he&&D.length>0&&!D.some(pe=>pe.gx===h.x&&pe.gy===h.y)){let pe=we.length>0?we:D,ge=st;if(ge!=null&&ge.path.length<=5){let ue=fn(ge.path,_);if(ue&&(ue.gx!==h.x||ue.gy!==h.y)){Gt(h,ue.gx,ue.gy,()=>setTimeout(xn,600));return}let ve=Fe(I,pe);if(ve&&(ve.gx!==h.x||ve.gy!==h.y)){Gt(h,ve.gx,ve.gy,()=>setTimeout(xn,600));return}}}if(pn>20){let me=on();if(me&&yi(h.x,h.y,me.gx,me.gy)>0){Gt(h,me.gx,me.gy,()=>setTimeout(xn,600));return}setTimeout(()=>jt(),400);return}}if(pn<=10&&F.length>0&&!yn&&I.length>0&&!F.some(_e=>_e.gx===h.x&&_e.gy===h.y)){let _e=Ae.length>0?Ae:F,me=Ke,pe=me?fn(me.path,_):null;if(pe&&(pe.gx!==h.x||pe.gy!==h.y)){Gt(h,pe.gx,pe.gy,()=>setTimeout(xn,600));return}let ge=Fe(I,_e);if(ge&&(ge.gx!==h.x||ge.gy!==h.y)){Gt(h,ge.gx,ge.gy,()=>setTimeout(xn,600));return}}if(h.level===1&&F.length>0&&!yn&&!F.some(_e=>_e.gx===h.x&&_e.gy===h.y)&&I.length>0){let _e=Ae.length>0?Ae:F,me=Ke,pe=me?fn(me.path,_):null;if(pe&&(pe.gx!==h.x||pe.gy!==h.y)){Gt(h,pe.gx,pe.gy,()=>setTimeout(xn,600));return}let ge=Fe(I,_e);if(ge&&(ge.gx!==h.x||ge.gy!==h.y)){Gt(h,ge.gx,ge.gy,()=>setTimeout(xn,600));return}}if(he&&D.length>0&&!yn&&!D.some(_e=>_e.gx===h.x&&_e.gy===h.y)&&I.length>0){let _e=xt.filter(Bt=>Bt.maxHp>0&&Bt.hp/Bt.maxHp<ce),me=null,pe=1/0;for(let Bt of I){let Xt=(mt.get(Bt.gy*e.w+Bt.gx)||[]).find(St=>_e.some(_n=>_n.id===St.target.id));Xt&&Xt.target.hp<pe&&(pe=Xt.target.hp,me=Bt)}if(me){let Bt=mr(e,h.x,h.y,me.gx,me.gy,Ee,h),Lt=Bt?An(Bt,_):null;if(Lt&&(Lt.gx!==h.x||Lt.gy!==h.y)){Gt(h,Lt.gx,Lt.gy,()=>setTimeout(xn,600));return}}let ge=we.length>0?we:D,Re=st,ue=Re?fn(Re.path,_):null;if(ue&&(ue.gx!==h.x||ue.gy!==h.y)){Gt(h,ue.gx,ue.gy,()=>setTimeout(xn,600));return}let ve=Fe(I,ge);if(ve&&(ve.gx!==h.x||ve.gy!==h.y)){Gt(h,ve.gx,ve.gy,()=>setTimeout(xn,600));return}}if(un&&xt.length>0&&!yn&&I.length>0){if(!bn&&oe.size>0){let _e=[];oe.forEach((pe,ge)=>{_e.push({gx:ge%e.w,gy:Math.floor(ge/e.w)})});let me=Zn(_e);if(me){let pe=fn(me.path,_);if(pe&&(pe.gx!==h.x||pe.gy!==h.y)){Gt(h,pe.gx,pe.gy,()=>setTimeout(xn,600));return}let ge=Fe(I,_e);if(ge&&(ge.gx!==h.x||ge.gy!==h.y)){Gt(h,ge.gx,ge.gy,()=>setTimeout(xn,600));return}}}let le=Ti();if(le&&(le.gx!==h.x||le.gy!==h.y)){Gt(h,le.gx,le.gy,()=>setTimeout(xn,600));return}}!It&&rt(Vt)||setTimeout(()=>jt(),400)}function Bn(){for(Gi.length=0;Di.children.length;){let f=Di.children[0];Di.remove(f),f.geometry!==Sa&&f.geometry!==Ea&&f.geometry.dispose(),f.material.dispose()}zt()}let cs=new Set;function ql(f){return f?(f.summonedSkills&&f.summonedSkills.length>0?f.summonedSkills:f.class&&ca[f.class]?ca[f.class]:[]).map(_=>({..._,disabled:_.disabled===!0||f.level<(_.level||1)||_.hpCost&&f.hp<_.hpCost||_.cost!=null&&f.mp<_.cost||_.effectKey==="reanimate"&&J<=0})):[]}function fo(f,h,_){let b=[],P=h.range||0,I=f.x,L=f.y;if(h.target==="self")return b.push({gx:I,gy:L,targetUnit:null}),b;for(let F of _)if(!(F.hp<=0||Math.abs(I-F.x)+Math.abs(L-F.y)>P)){if(h.target==="enemy"){if(F.player===f.player)continue}else if(h.target==="ally"&&F.player!==f.player)continue;P>=2&&!bs(e,I,L,F.x,F.y)||b.push({gx:F.x,gy:F.y,targetUnit:F})}return b}function uu(f,h,_){let b=h.range||0;if(h.target==="self"){_(f.x,f.y);return}Bd(e,f.x,f.y,b).forEach((I,L)=>{let F=L%e.w,D=L/e.w|0;b>=2&&!bs(e,f.x,f.y,F,D)||_(F,D)})}function Pv(f,h){let _=[];return uu(f,h,(b,P)=>_.push({gx:b,gy:P})),_}function bp(f,h){let _=[];h.target==="self"?(cs=new Set([`${f.x},${f.y}`]),_.push({gx:f.x,gy:f.y})):(cs=new Set,uu(f,h,(b,P)=>{_.push({gx:b,gy:P});let I=j(b,P);I&&(h.target==="enemy"&&I.player!==f.player&&cs.add(`${b},${P}`),h.target==="ally"&&I.player===f.player&&cs.add(`${b},${P}`))})),Bn(),_.forEach(({gx:b,gy:P})=>{let L=($n+e.height[P][b]*.35)/2+$n/2,F=b*tt-Ie+tt/2,D=P*tt-ze+tt/2,ce=L+.01,Q=new In({color:8926122,transparent:!0,opacity:.4,side:Cn}),re=new Ze(Sa,Q);re.rotation.x=-Math.PI/2,re.position.set(F,ce,D),Di.add(re),Gi.push(Q);let z=new In({color:11167436,transparent:!0,opacity:.7,side:Cn}),he=new Ze(Ea,z);he.rotation.x=-Math.PI/2,he.position.set(F,ce+.01,D),he.userData.gx=b,he.userData.gy=P,Di.add(he),Gi.push(z)})}let fu=.82,du=1.02,Sa=new rs(du,du),Ea=new rs(fu,fu);function Sp(f){Bn(),f.forEach(({gx:h,gy:_})=>{let P=($n+e.height[_][h]*.35)/2+$n/2,I=h*tt-Ie+tt/2,L=_*tt-ze+tt/2,F=P+.01,D=new In({color:2271812,transparent:!0,opacity:.4,side:Cn}),ce=new Ze(Sa,D);ce.rotation.x=-Math.PI/2,ce.position.set(I,F,L),Di.add(ce),Gi.push(D);let Q=new In({color:4508774,transparent:!0,opacity:.7,side:Cn}),re=new Ze(Ea,Q);re.rotation.x=-Math.PI/2,re.position.set(I,F+.01,L),re.userData.gx=h,re.userData.gy=_,Di.add(re),Gi.push(Q)}),zt()}function Yl(f){Bn(),f.forEach((h,_)=>{if(h===0)return;let b=_%e.w,P=_/e.w|0,L=($n+e.height[P][b]*.35)/2+$n/2,F=b*tt-Ie+tt/2,D=P*tt-ze+tt/2,ce=L+.01,Q=new In({color:3381759,transparent:!0,opacity:.35,side:Cn}),re=new Ze(Sa,Q);re.rotation.x=-Math.PI/2,re.position.set(F,ce,D),Di.add(re),Gi.push(Q);let z=new In({color:6730751,transparent:!0,opacity:.65,side:Cn}),he=new Ze(Ea,z);he.rotation.x=-Math.PI/2,he.position.set(F,ce+.01,D),Di.add(he),Gi.push(z)}),zt()}function Ep(f){Bn(),f.forEach((h,_)=>{if(h===0)return;let b=_%e.w,P=_/e.w|0,L=($n+e.height[P][b]*.35)/2+$n/2,F=b*tt-Ie+tt/2,D=P*tt-ze+tt/2,ce=L+.01,Q=new In({color:10035746,transparent:!0,opacity:.4,side:Cn}),re=new Ze(Sa,Q);re.rotation.x=-Math.PI/2,re.position.set(F,ce,D),Di.add(re),Gi.push(Q);let z=new In({color:13386820,transparent:!0,opacity:.7,side:Cn}),he=new Ze(Ea,z);he.rotation.x=-Math.PI/2,he.position.set(F,ce+.01,D),Di.add(he),Gi.push(z)}),zt()}let Is=new El,Ls=new Xe;function pu(f){let h=f.object;if(h.isInstancedMesh&&h.userData.tileGridGround){let b=f.instanceId;if(b==null||b<0)return null;let P=h.userData.insideTileGx,I=h.userData.insideTileGy;return P&&I&&b<P.length?{gx:P[b],gy:I[b]}:null}if(h.userData.mergedOutsidePick)return Av(e,f.point);let _=h;for(;_&&(_.userData.gx==null||_.userData.gy==null);)_=_.parent;return _&&_.userData.gx!=null?{gx:_.userData.gx,gy:_.userData.gy}:null}function po(f,h){let _=t.getBoundingClientRect();return Ls.x=(f-_.left)/_.width*2-1,Ls.y=-((h-_.top)/_.height)*2+1,{x:Ls.x,y:Ls.y}}function Tp(f,h){if(hn)return;Ls.x=f,Ls.y=h,Is.setFromCamera(Ls,a);let _=Is.intersectObjects(Z.children,!0);if(_.length===0)return;let b,P;for(let L of _){let F=pu(L);if(F){b=F.gx,P=F.gy;break}}if(b==null||P==null)return;if($==="draft"&&ni){let L=P*e.w+b;wn.has(L)&&Ol(b,P);return}if($!=="playing"||W==="cvcpu")return;if(As&&ii){let L=at[ht],F=Ve(L),D=F&&F.hp>0?F:null;if(D&&b===D.x&&P===D.y){As=!1,ii=null,cs=new Set,Bn(),yn?Ln=new Map:(Ln=Cl(e,D.x,D.y,Me(D,"agi"),Ee,D),Yl(Ln)),Nt();return}let ce=`${b},${P}`;if(!cs.has(ce))return;if(!D||D.mp<ii.cost){As=!1,ii=null,Bn(),Nt();return}let Q=j(b,P);if(ii.target==="enemy"&&(!Q||Q.player===D.player)||ii.target==="ally"&&Q&&Q.player!==D.player||ii.target==="self"&&(b!==D.x||P!==D.y)||ii.target==="enemy"&&!Q)return;D.mp-=ii.cost,li=!0;let re={showFloatingCombatText:ci,handleUnitDeath:On,updateUnitSlashVisibility:Ht,updateTurnUI:Nt,tryCollectPowerup:et,world:e,units:Ee,reanimateDeadUnit:ya,updateUnitTileIndex:E,updateUnitPosition(he){let Ae=ae.get(he.id);Ae&&Ae.position.copy(Le(he.x,he.y))},animateKnockback(he,Ae,we,Ye,ke,Ce){let Ke=ae.get(he.id);if(!Ke){Ce&&Ce();return}let st=Le(Ae,we).clone(),Ft=Le(Ye,ke).clone(),It=performance.now(),At=0;function $t(Vt){At++,At%2===0&&zt();let Dn=Math.min(1,(Vt-It)/Ks),un=xt=>xt*xt*(3-2*xt);Ke.position.lerpVectors(st,Ft,un(Dn)),Dn<1?requestAnimationFrame($t):(Ke.position.copy(Ft),Ce&&Ce())}requestAnimationFrame($t)}},z=ii.target==="self"?D:Q||null;W==="online"&&D.player===Y&&typeof an=="function"&&(an({type:"requestRender"}),er({type:"skill",unitId:D.id,targetId:z?z.id:void 0,effectKey:ii.effectKey})),uo(D,z,ii,re,()=>{Bn(),As=!1,ii=null,cs=new Set,yn&&D.hp>0?jt():Nt()});return}if(Rs){let L=at[ht],F=Ve(L);if(W==="online"&&F&&F.player!==Y)return;let D=ae.get(L);if(F&&D&&Li.length>0){let ce=Le(F.x,F.y),Q=Le(b,P),re=Q.x-ce.x,z=Q.z-ce.z,he=re*re+z*z>1e-6?Math.atan2(re,z):D.rotation.y;D.rotation.y=zh(he)}setTimeout(()=>jt(),400);return}if(gn!=null&&ji){let L=Ve(gn);if(!L||L.player!==G||W==="online"&&L.player!==Y)return;let F=P*e.w+b,D=j(b,P);if(D&&D.id===at[ht]&&D.player===G&&(W!=="online"||D.player===Y)){ji=!1,gn=D.id,yn?(Bn(),Ln=new Map):(Ln=Cl(e,D.x,D.y,Me(D,"agi"),Ee,D),Yl(Ln)),Nt();return}if(!Ln.has(F)||Ln.get(F)===0)return;D&&D.player!==G&&ba(L,D);return}let I=j(b,P);if(I){if(I.id===at[ht]&&I.player===G&&(W!=="online"||I.player===Y)){pa(),gn=I.id,ji=!1,yn?(Bn(),Ln=new Map):(Ln=Cl(e,b,P,Me(I,"agi"),Ee,I),Yl(Ln)),Nt();return}Bn(),Ln=new Map,ji=!1,Gd(I),Nt();return}if(pa(),gn!=null){let he=function(){if(z>=Q.length){let At=L.x,$t=L.y;L.x=Q[Q.length-1].x,L.y=Q[Q.length-1].y,E(L,At,$t),et(L),hn=!1,Tt(re),Ui(),Ln=new Map,yn=!0,W==="online"&&L.player===Y&&typeof an=="function"&&(an({type:"move",unitId:L.id,toGx:L.x,toGy:L.y}),Gl=!1,dp()),li&&L.hp>0?setTimeout(()=>jt(),400):setTimeout(()=>Nt(),400);return}let Ae=Q[z-1],we=Q[z],Ye=Le(Ae.x,Ae.y).clone(),ke=Le(we.x,we.y).clone(),Ce=ke.x-Ye.x,Ke=ke.z-Ye.z;Ce*Ce+Ke*Ke>1e-6&&(re.rotation.y=Math.atan2(Ce,Ke));let st=performance.now(),Ft=0;function It(At){Ft++,Ft%2===0&&zt();let $t=Math.min(1,(At-st)/Ks),Dn=(un=>un*un*(3-2*un))($t);if(re.position.lerpVectors(Ye,ke,Dn),$e(re,Dn),g){let un=a.position.distanceTo(c),xt=un<.1?o:un;p.copy(a.position).sub(c).normalize(),p.lengthSq()<.01&&p.copy(u).normalize(),c.lerp(re.position,l),a.position.copy(c).add(p.clone().multiplyScalar(xt)),a.lookAt(c)}$t<1?requestAnimationFrame(It):(z++,he())}requestAnimationFrame(It)};if(ji)return;let L=Ve(gn);if(!L||L.player!==G||W==="online"&&L.player!==Y)return;let F=P*e.w+b;if(!Ln.has(F)||Ln.get(F)===0)return;let D=j(b,P);if(D!=null&&D.id!==L.id||hn||yn)return;let Q=mr(e,L.x,L.y,b,P,Ee,L);if(!Q||Q.length<=1)return;W==="online"&&L.player===Y&&typeof an=="function"&&(an({type:"requestRender"}),Gl=!0),gn=null,Bn(),hn=!0,g=!0,Ui(L.id);let re=ae.get(L.id),z=1;he()}}function mu(f){T.x=f.clientX,T.y=f.clientY,C=f.isTouch===!0,S=f.ctrlKey,v=po(f.clientX,f.clientY),t.style.cursor=(f.ctrlKey,"grabbing")}function $l(f){return f.touches&&f.touches.length>0?{clientX:f.touches[0].clientX,clientY:f.touches[0].clientY}:f.changedTouches&&f.changedTouches.length>0?{clientX:f.changedTouches[0].clientX,clientY:f.changedTouches[0].clientY}:{clientX:f.clientX,clientY:f.clientY}}function gu(f){if(!f||f.length<2)return 0;let h=f[0],_=f[1];return Math.hypot(_.clientX-h.clientX,_.clientY-h.clientY)}function wp(f){if(f.touches.length===2){ie=gu(f.touches),v=null;return}if(f.touches.length!==1)return;ie=null;let h=$l(f);mu({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1,isTouch:!0})}function Ap(f){if(f.touches.length===2){f.preventDefault();let _=gu(f.touches);if(ie!=null&&ie>0){let b=_-ie,P=a.position.distanceTo(c),I=Math.max(te,Math.min(X,P-b*B));x.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(x.multiplyScalar(I)),a.lookAt(c),Cs=performance.now()}ie=_;return}if(ie=null,f.touches.length!==1)return;f.preventDefault();let h=$l(f);yu({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1})}function Rp(f){if(f.touches.length<2&&(ie=null),f.touches.length===2||f.changedTouches.length===0)return;C=!1;let h=$l(f);Kl({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1})}function yu(f){if(Rs){jd(f.clientX,f.clientY);return}if(v==null)return;let h=f.clientX-T.x,_=f.clientY-T.y;if(!M&&!y&&(Math.abs(h)>A||Math.abs(_)>A)&&(f.ctrlKey||S?(y=!0,g=!1):(M=!0,g=!1)),y){ee.copy(a.position).sub(c);let b=ee.length();if(b<.001)return;let P=Math.atan2(ee.x,ee.z),I=Math.asin(Math.max(-1,Math.min(1,ee.y/b)));P-=h*O,I+=_*O,I=Math.max(U,Math.min(N,I)),ee.x=b*Math.cos(I)*Math.sin(P),ee.y=b*Math.sin(I),ee.z=b*Math.cos(I)*Math.cos(P),a.position.copy(c).add(ee),a.lookAt(c),T.x=f.clientX,T.y=f.clientY,Cs=performance.now()}else if(M){let b=po(f.clientX,f.clientY);d.setFromNormalAndCoplanarPoint(new k(0,1,0),new k(0,c.y,0)),Is.setFromCamera(new Xe(v.x,v.y),a),Is.ray.intersectPlane(d,m);let P=m.clone();Is.setFromCamera(new Xe(b.x,b.y),a),Is.ray.intersectPlane(d,m);let I=P.sub(m);C&&I.multiplyScalar(K),c.add(I),a.position.add(I),a.lookAt(c),v={x:b.x,y:b.y},Cs=performance.now()}}function Kl(f){if(v!=null&&!M&&!y){let h=po(f.clientX,f.clientY);Tp(h.x,h.y)}v=null,M=!1,y=!1,S=!1,t.style.cursor="grab"}function Cp(f){f.preventDefault();let h=a.position.distanceTo(c),_=Math.max(te,Math.min(X,h+f.deltaY*se));x.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(x.multiplyScalar(_)),a.lookAt(c),Cs=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",mu),t.addEventListener("mousemove",yu),t.addEventListener("mouseup",Kl),t.addEventListener("mouseleave",Kl),t.addEventListener("touchstart",wp,{passive:!0}),t.addEventListener("touchmove",Ap,{passive:!1}),t.addEventListener("touchend",Rp,{passive:!0}),t.addEventListener("wheel",Cp,{passive:!1});function xu(){let f=t.clientWidth,h=t.clientHeight;a.aspect=f/h,a.updateProjectionMatrix(),si.setSize(f,h),si.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",xu);let si=new Ga({antialias:!1});si.setSize(t.clientWidth,t.clientHeight),si.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),si.shadowMap.enabled=!0,si.shadowMap.type=Ah,t.appendChild(si.domElement),xu();let mo=document.createElement("div");mo.id="combat-text-layer",t.appendChild(mo);let ts=new k,Ds=new k,Pp=1400;function ci(f,h,_,b,P){let I=document.createElement("div");I.className="combat-text-float "+(b?"miss":"damage")+(P?" "+P:""),I.textContent=_,I.style.position="absolute",mo.appendChild(I);let L=P==="skill-name"?1.7:1.2,F=performance.now();function D(){ts.copy(Le(f,h)),ts.y+=L,ts.project(a);let re=t.clientWidth,z=t.clientHeight;I.style.left=(ts.x*.5+.5)*re+"px",I.style.top=(1-(ts.y*.5+.5))*z+"px"}let ce=0;function Q(){ce%2===0&&D(),ce++,performance.now()-F<Pp?requestAnimationFrame(Q):I.remove()}requestAnimationFrame(Q)}let Ip=1500;function Lp(f,h){let _=document.createElement("div");_.className="combat-text-float "+(h||"levelup"),_.textContent="LEVEL UP!",_.style.position="absolute",mo.appendChild(_);let b=performance.now(),P=0;function I(){ts.copy(Le(f.x,f.y)),ts.y+=1.2,ts.project(a);let F=t.clientWidth,D=t.clientHeight;_.style.left=(ts.x*.5+.5)*F+"px",_.style.top=(1-(ts.y*.5+.5))*D+"px"}function L(){P%2===0&&I(),P++,performance.now()-b<Ip?requestAnimationFrame(L):_.remove()}requestAnimationFrame(L)}function On(f,h,_){if(E(f,f.x,f.y),J++,f.deathOrder=++xe,W==="online"&&typeof an=="function"&&!(_&&_.skipSync)&&an({type:"unitDeath",unitId:f.id,killerId:h?.id}),yv(h,f,Ee),console.log("[DEATH]",`${f.name} (${f.class}, P${f.player})`,`at (${f.x},${f.y})`,`Lv.${f.level}`),ci(f.x,f.y,"DEAD",!1),Ee.filter(F=>F.summonedBy===f.id&&F.hp>0).map(F=>F.id).forEach(F=>{let D=Ve(F);D&&(D.hp=0,On(D,null,{skipSync:!0}))}),$==="playing"&&at.length>0&&f.id===at[ht]){let F=f.id;queueMicrotask(()=>{if($!=="playing"||at.length===0||at[ht]!==F)return;let D=Ve(F);D&&D.hp>0||jt()})}let P=ae.get(f.id);if(!P){Ui(),_u();return}let I=performance.now();function L(F){zt();let D=F-I,ce=Math.min(1,D/ti),Q=ce*ce;P.rotation.x=Q*Math.PI*.5,ce<1?requestAnimationFrame(L):(n.remove(P),ae.delete(f.id),Ui(),_u())}requestAnimationFrame(L)}function _u(){if($!=="playing")return;let f=Ee.some(_=>_.player===1&&_.hp>0&&!_.summonedBy),h=Ee.some(_=>_.player===2&&_.hp>0&&!_.summonedBy);f?h||Zl(1):Zl(2)}function Dp(){let f=cu(),h=new Set(f.map(L=>L.gy*e.w+L.gx)),_=Ee.filter(L=>L.hp>0&&L.player===1&&!L.summonedBy&&h.has(L.y*e.w+L.x)).length,b=Ee.filter(L=>L.hp>0&&L.player===2&&!L.summonedBy&&h.has(L.y*e.w+L.x)).length,P=null,I="";if(_>b)P=1,I=`Time's up! ${je(1)} wins! (${_} vs ${b} units on center base)`;else if(b>_)P=2,I=`Time's up! ${je(2)} wins! (${b} vs ${_} units on center base)`;else{let L=Ee.filter(D=>D.hp>0&&D.player===1&&!D.summonedBy).reduce((D,ce)=>D+ce.hp,0),F=Ee.filter(D=>D.hp>0&&D.player===2&&!D.summonedBy).reduce((D,ce)=>D+ce.hp,0);L>F?(P=1,I=`Time's up! Draw on center \u2014 ${je(1)} wins on total HP (${L} vs ${F})`):F>L?(P=2,I=`Time's up! Draw on center \u2014 ${je(2)} wins on total HP (${F} vs ${L})`):I=`Draw! (equal units on center: ${_}, equal HP)`}Zl(P,I)}function Zl(f,h){Vi(),xv(Ee,f),$="gameover",document.getElementById("turn-menu").style.display="none",pa(),Bn();let _=document.getElementById("game-over-overlay"),b=document.getElementById("game-over-title"),P=document.getElementById("game-over-cards"),I=document.getElementById("game-over-class-record");I&&(I.style.display="none",I.innerHTML=""),b.textContent=h??`${je(f)} wins!`;let L=Ee.filter(F=>F.player===(f??1));if(P.innerHTML=L.map(F=>{let D=F,ce=F.level>=3?" level-3":F.level>=2?" level-2":"",Q=D.maxHp>0&&D.hp/D.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${ce}${Q}">
          <img class="game-over-card-image" src="${la[F.class]||""}" alt="${D.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${D.name}</div>
            <div class="game-over-card-meta">Lv.${D.level} ${D.class} \u2014 HP ${D.hp}/${D.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${D.hp}/${D.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${D.mp}/${D.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${Me(D,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${Me(D,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${Me(D,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${Me(D,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${Me(D,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${Me(D,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${D.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),_.classList.add("visible"),W==="cvcpu"){if(cn++,I&&Ss&&cn>=vt){let F=Mi.map(D=>{let ce=os[D],Q=ce.wins+ce.losses||1,re=ce.wins+ce.losses>0?(ce.wins/Q*100).toFixed(1)+"%":"\u2014",z=ce.wins+ce.losses>0?(ce.losses/Q*100).toFixed(1)+"%":"\u2014";return{class:D,battles:ce.battles,kills:ce.kills,deaths:ce.deaths,wins:ce.wins,losses:ce.losses,winRate:re,lossRate:z}});I.innerHTML=`
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
              ${F.map(D=>`
                <tr>
                  <td class="class-name">${D.class}</td>
                  <td>${D.battles}</td>
                  <td>${D.kills}</td>
                  <td>${D.deaths}</td>
                  <td>${D.wins}</td>
                  <td>${D.losses}</td>
                  <td>${D.winRate}</td>
                  <td>${D.lossRate}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `,I.style.display="block"}cn<vt&&setTimeout(()=>{_.classList.remove("visible"),Se(),ga()},2e3)}}function Ar(f=0){requestAnimationFrame(Ar);let h=Z.userData&&Z.userData.swayingFoliage;if(h&&h.length>0){let P=f*.0017;for(let I=0;I<h.length;I++){let{group:L,phase:F}=h[I];L.rotation.z=Math.sin(P+F)*.14,L.rotation.x=Math.sin(P*.79+F*1.55)*.09,L.rotation.y=Math.sin(P*.62+F*.9)*.055}_r=!0}Cs===0&&(Cs=f);let _=f-Cs>500;Ar.frameCount=(typeof Ar.frameCount=="number"?Ar.frameCount:0)+1;let b=()=>{if(_r){let P=.6+.4*Math.sin(f*.004);for(let I=0;I<Gi.length;I++){let L=I%2===0?.4:.7;Gi[I].opacity=L*P}si.render(n,a),_r=!1}};_?f-Hh>=100&&(Hh=f,_r=!0,b()):(Ar.frameCount%2===0&&(_r=!0),b())}Ar()}Rv();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
