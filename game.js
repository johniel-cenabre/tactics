var Ah="160";var zp=0,Tu=1,Vp=2;var cd=1,Rh=2,ys=3,qs=0,bi=1,Ln=2;var Gs=0,Jr=1,wu=2,Au=3,Ru=4,Gp=5,cr=100,Wp=101,Xp=102,Cu=103,Pu=104,qp=200,Yp=201,$p=202,Kp=203,Bc=204,Oc=205,Zp=206,Jp=207,jp=208,Qp=209,em=210,tm=211,nm=212,im=213,sm=214,rm=0,am=1,om=2,Xo=3,lm=4,cm=5,hm=6,um=7,hd=0,fm=1,dm=2,Ws=0,pm=1,mm=2,gm=3,ym=4,xm=5,_m=6;var ud=300,ea=301,ta=302,Fc=303,kc=304,wl=306,Fa=1e3,Ji=1001,Hc=1002,gi=1003,Iu=1004;var ec=1005;var Fi=1006,vm=1007;var ka=1008;var Xs=1009,Mm=1010,bm=1011,Ch=1012,fd=1013,zs=1014,Vs=1015,Ha=1016,dd=1017,pd=1018,ur=1020,Sm=1021,ji=1023,Em=1024,Tm=1025,fr=1026,na=1027,wm=1028,md=1029,Am=1030,gd=1031,yd=1033,tc=33776,nc=33777,ic=33778,sc=33779,Lu=35840,Du=35841,Uu=35842,Nu=35843,xd=36196,Bu=37492,Ou=37496,Fu=37808,ku=37809,Hu=37810,zu=37811,Vu=37812,Gu=37813,Wu=37814,Xu=37815,qu=37816,Yu=37817,$u=37818,Ku=37819,Zu=37820,Ju=37821,rc=36492,ju=36494,Qu=36495,Rm=36283,ef=36284,tf=36285,nf=36286;var qo=2300,Yo=2301,ac=2302,sf=2400,rf=2401,af=2402;var _d=3e3,dr=3001,Cm=3200,Pm=3201,vd=0,Im=1,ki="",oi="srgb",_s="srgb-linear",Ph="display-p3",Al="display-p3-linear",$o="linear",vn="srgb",Ko="rec709",Zo="p3";var Pr=7680;var of=519,Lm=512,Dm=513,Um=514,Md=515,Nm=516,Bm=517,Om=518,Fm=519,lf=35044;var cf="300 es",zc=1035,xs=2e3,Jo=2001,Ys=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ui=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var oc=Math.PI/180,Vc=180/Math.PI;function la(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ui[i&255]+ui[i>>8&255]+ui[i>>16&255]+ui[i>>24&255]+"-"+ui[e&255]+ui[e>>8&255]+"-"+ui[e>>16&15|64]+ui[e>>24&255]+"-"+ui[t&63|128]+ui[t>>8&255]+"-"+ui[t>>16&255]+ui[t>>24&255]+ui[n&255]+ui[n>>8&255]+ui[n>>16&255]+ui[n>>24&255]).toLowerCase()}function di(i,e,t){return Math.max(e,Math.min(t,i))}function km(i,e){return(i%e+e)%e}function lc(i,e,t){return(1-t)*i+t*e}function hf(i){return(i&i-1)===0&&i!==0}function Gc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(di(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(e,t,n,s,r,a,o,l,d){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,d)}set(e,t,n,s,r,a,o,l,d){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],d=n[1],h=n[4],p=n[7],u=n[2],m=n[5],x=n[8],M=s[0],y=s[3],g=s[6],S=s[1],v=s[4],A=s[7],O=s[2],D=s[5],N=s[8];return r[0]=a*M+o*S+l*O,r[3]=a*y+o*v+l*D,r[6]=a*g+o*A+l*N,r[1]=d*M+h*S+p*O,r[4]=d*y+h*v+p*D,r[7]=d*g+h*A+p*N,r[2]=u*M+m*S+x*O,r[5]=u*y+m*v+x*D,r[8]=u*g+m*A+x*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8];return t*a*h-t*o*d-n*r*h+n*o*l+s*r*d-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8],p=h*a-o*d,u=o*l-h*r,m=d*r-a*l,x=t*p+n*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=p*M,e[1]=(s*d-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=m*M,e[7]=(n*l-d*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),d=Math.sin(r);return this.set(n*l,n*d,-n*(l*a+d*o)+a+e,-s*d,s*l,-s*(-d*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(cc.makeScale(e,t)),this}rotate(e){return this.premultiply(cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cc=new Bt;function bd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hm(){let i=jo("canvas");return i.style.display="block",i}var uf={};function Da(i){i in uf||(uf[i]=!0,console.warn(i))}var ff=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),df=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[_s]:{transfer:$o,primaries:Ko,toReference:i=>i,fromReference:i=>i},[oi]:{transfer:vn,primaries:Ko,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Al]:{transfer:$o,primaries:Zo,toReference:i=>i.applyMatrix3(df),fromReference:i=>i.applyMatrix3(ff)},[Ph]:{transfer:vn,primaries:Zo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(df),fromReference:i=>i.applyMatrix3(ff).convertLinearToSRGB()}},zm=new Set([_s,Al]),cn={enabled:!0,_workingColorSpace:_s,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!zm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=yo[e].toReference,s=yo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return yo[i].primaries},getTransfer:function(i){return i===ki?$o:yo[i].transfer}};function jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ir,Qo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ir===void 0&&(Ir=jo("canvas")),Ir.width=e.width,Ir.height=e.height;let n=Ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=jo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jr(t[n]/255)*255):t[n]=jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vm=0,el=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=la(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(uc(s[a].image)):r.push(uc(s[a]))}else r=uc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gm=0,Hi=class i extends Ys{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ji,s=Ji,r=Fi,a=ka,o=ji,l=Xs,d=i.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=la(),this.name="",this.source=new el(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===dr?oi:ki),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===oi?dr:_d}set encoding(e){Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===dr?oi:ki}};Hi.DEFAULT_IMAGE=null;Hi.DEFAULT_MAPPING=ud;Hi.DEFAULT_ANISOTROPY=1;var ei=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,d=l[0],h=l[4],p=l[8],u=l[1],m=l[5],x=l[9],M=l[2],y=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+M)<.1&&Math.abs(x+y)<.1&&Math.abs(d+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(d+1)/2,A=(m+1)/2,O=(g+1)/2,D=(h+u)/4,N=(p+M)/4,Q=(x+y)/4;return v>A&&v>O?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=D/n,r=N/n):A>O?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=D/s,r=Q/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=N/r,s=Q/r),this.set(n,s,r,t),this}let S=Math.sqrt((y-x)*(y-x)+(p-M)*(p-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(y-x)/S,this.y=(p-M)/S,this.z=(u-h)/S,this.w=Math.acos((d+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wc=class extends Ys{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ei(0,0,e,t),this.scissorTest=!1,this.viewport=new ei(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Da("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===dr?oi:ki),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Hi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new el(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vs=class extends Wc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},tl=class extends Hi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xc=class extends Hi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var as=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],d=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],m=r[a+1],x=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=d,e[t+2]=h,e[t+3]=p;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=x,e[t+3]=M;return}if(p!==M||l!==u||d!==m||h!==x){let y=1-o,g=l*u+d*m+h*x+p*M,S=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let O=Math.sqrt(v),D=Math.atan2(O,g*S);y=Math.sin(y*D)/O,o=Math.sin(o*D)/O}let A=o*S;if(l=l*y+u*A,d=d*y+m*A,h=h*y+x*A,p=p*y+M*A,y===1-o){let O=1/Math.sqrt(l*l+d*d+h*h+p*p);l*=O,d*=O,h*=O,p*=O}}e[t]=l,e[t+1]=d,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],d=n[s+2],h=n[s+3],p=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*p+l*m-d*u,e[t+1]=l*x+h*u+d*p-o*m,e[t+2]=d*x+h*m+o*u-l*p,e[t+3]=h*x-o*p-l*u-d*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,d=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*p+d*m*x,this._y=d*m*p-u*h*x,this._z=d*h*x+u*m*p,this._w=d*h*p-u*m*x;break;case"YXZ":this._x=u*h*p+d*m*x,this._y=d*m*p-u*h*x,this._z=d*h*x-u*m*p,this._w=d*h*p+u*m*x;break;case"ZXY":this._x=u*h*p-d*m*x,this._y=d*m*p+u*h*x,this._z=d*h*x+u*m*p,this._w=d*h*p-u*m*x;break;case"ZYX":this._x=u*h*p-d*m*x,this._y=d*m*p+u*h*x,this._z=d*h*x-u*m*p,this._w=d*h*p+u*m*x;break;case"YZX":this._x=u*h*p+d*m*x,this._y=d*m*p+u*h*x,this._z=d*h*x-u*m*p,this._w=d*h*p-u*m*x;break;case"XZY":this._x=u*h*p-d*m*x,this._y=d*m*p-u*h*x,this._z=d*h*x+u*m*p,this._w=d*h*p+u*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],d=t[2],h=t[6],p=t[10],u=n+o+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-d)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+d)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-d)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+d)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(di(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,d=t._z,h=t._w;return this._x=n*h+a*o+s*d-r*l,this._y=s*h+a*l+r*o-n*d,this._z=r*h+a*d+n*l-s*o,this._w=a*h-n*o-s*l-r*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let d=Math.sqrt(l),h=Math.atan2(d,o),p=Math.sin((1-t)*h)/d,u=Math.sin(t*h)/d;return this._w=a*p+this._w*u,this._x=n*p+this._x*u,this._y=s*p+this._y*u,this._z=r*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,d=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*d+a*p-o*h,this.y=n+l*h+o*d-r*p,this.z=s+l*p+r*h-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(di(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fc=new F,pf=new as,Ms=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yi):Yi.fromBufferAttribute(r,a),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),_o.subVectors(this.max,Aa),Lr.subVectors(e.a,Aa),Dr.subVectors(e.b,Aa),Ur.subVectors(e.c,Aa),Bs.subVectors(Dr,Lr),Os.subVectors(Ur,Dr),sr.subVectors(Lr,Ur);let t=[0,-Bs.z,Bs.y,0,-Os.z,Os.y,0,-sr.z,sr.y,Bs.z,0,-Bs.x,Os.z,0,-Os.x,sr.z,0,-sr.x,-Bs.y,Bs.x,0,-Os.y,Os.x,0,-sr.y,sr.x,0];return!dc(t,Lr,Dr,Ur,_o)||(t=[1,0,0,0,1,0,0,0,1],!dc(t,Lr,Dr,Ur,_o))?!1:(vo.crossVectors(Bs,Os),t=[vo.x,vo.y,vo.z],dc(t,Lr,Dr,Ur,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fs=[new F,new F,new F,new F,new F,new F,new F,new F],Yi=new F,xo=new Ms,Lr=new F,Dr=new F,Ur=new F,Bs=new F,Os=new F,sr=new F,Aa=new F,_o=new F,vo=new F,rr=new F;function dc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rr.fromArray(i,r);let o=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),l=e.dot(rr),d=t.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(l,d,h),Math.min(l,d,h))>o)return!1}return!0}var Wm=new Ms,Ra=new F,pc=new F,$s=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);let t=Ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ra,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(pc)),this.expandByPoint(Ra.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ds=new F,mc=new F,Mo=new F,Fs=new F,gc=new F,bo=new F,yc=new F,za=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ds)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ds.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ds.copy(this.origin).addScaledVector(this.direction,t),ds.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){mc.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),Fs.copy(this.origin).sub(mc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Mo),o=Fs.dot(this.direction),l=-Fs.dot(Mo),d=Fs.lengthSq(),h=Math.abs(1-a*a),p,u,m,x;if(h>0)if(p=a*l-o,u=a*o-l,x=r*h,p>=0)if(u>=-x)if(u<=x){let M=1/h;p*=M,u*=M,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+d}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+d;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+d;else u<=-x?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+d):u<=x?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+d):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+d);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(mc).addScaledVector(Mo,u),m}intersectSphere(e,t){ds.subVectors(e.center,this.origin);let n=ds.dot(this.direction),s=ds.dot(ds)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,d=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return d>=0?(n=(e.min.x-u.x)*d,s=(e.max.x-u.x)*d):(n=(e.max.x-u.x)*d,s=(e.min.x-u.x)*d),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ds)!==null}intersectTriangle(e,t,n,s,r){gc.subVectors(t,e),bo.subVectors(n,e),yc.crossVectors(gc,bo);let a=this.direction.dot(yc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fs.subVectors(this.origin,e);let l=o*this.direction.dot(bo.crossVectors(Fs,bo));if(l<0)return null;let d=o*this.direction.dot(gc.cross(Fs));if(d<0||l+d>a)return null;let h=-o*Fs.dot(yc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class i{constructor(e,t,n,s,r,a,o,l,d,h,p,u,m,x,M,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,d,h,p,u,m,x,M,y)}set(e,t,n,s,r,a,o,l,d,h,p,u,m,x,M,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=d,g[6]=h,g[10]=p,g[14]=u,g[3]=m,g[7]=x,g[11]=M,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),a=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),d=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*p,x=o*h,M=o*p;t[0]=l*h,t[4]=-l*p,t[8]=d,t[1]=m+x*d,t[5]=u-M*d,t[9]=-o*l,t[2]=M-u*d,t[6]=x+m*d,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,m=l*p,x=d*h,M=d*p;t[0]=u+M*o,t[4]=x*o-m,t[8]=a*d,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,m=l*p,x=d*h,M=d*p;t[0]=u-M*o,t[4]=-a*p,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*d,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,m=a*p,x=o*h,M=o*p;t[0]=l*h,t[4]=x*d-m,t[8]=u*d+M,t[1]=l*p,t[5]=M*d+u,t[9]=m*d-x,t[2]=-d,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,m=a*d,x=o*l,M=o*d;t[0]=l*h,t[4]=M-u*p,t[8]=x*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-d*h,t[6]=m*p+x,t[10]=u-M*p}else if(e.order==="XZY"){let u=a*l,m=a*d,x=o*l,M=o*d;t[0]=l*h,t[4]=-p,t[8]=d*h,t[1]=u*p+M,t[5]=a*h,t[9]=m*p-x,t[2]=x*p-m,t[6]=o*h,t[10]=M*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xm,e,qm)}lookAt(e,t,n){let s=this.elements;return Ai.subVectors(e,t),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),ks.crossVectors(n,Ai),ks.lengthSq()===0&&(Math.abs(n.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),ks.crossVectors(n,Ai)),ks.normalize(),So.crossVectors(Ai,ks),s[0]=ks.x,s[4]=So.x,s[8]=Ai.x,s[1]=ks.y,s[5]=So.y,s[9]=Ai.y,s[2]=ks.z,s[6]=So.z,s[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],d=n[12],h=n[1],p=n[5],u=n[9],m=n[13],x=n[2],M=n[6],y=n[10],g=n[14],S=n[3],v=n[7],A=n[11],O=n[15],D=s[0],N=s[4],Q=s[8],T=s[12],C=s[1],te=s[5],X=s[9],re=s[13],B=s[2],K=s[6],se=s[10],q=s[14],V=s[3],Z=s[7],ce=s[11],ue=s[15];return r[0]=a*D+o*C+l*B+d*V,r[4]=a*N+o*te+l*K+d*Z,r[8]=a*Q+o*X+l*se+d*ce,r[12]=a*T+o*re+l*q+d*ue,r[1]=h*D+p*C+u*B+m*V,r[5]=h*N+p*te+u*K+m*Z,r[9]=h*Q+p*X+u*se+m*ce,r[13]=h*T+p*re+u*q+m*ue,r[2]=x*D+M*C+y*B+g*V,r[6]=x*N+M*te+y*K+g*Z,r[10]=x*Q+M*X+y*se+g*ce,r[14]=x*T+M*re+y*q+g*ue,r[3]=S*D+v*C+A*B+O*V,r[7]=S*N+v*te+A*K+O*Z,r[11]=S*Q+v*X+A*se+O*ce,r[15]=S*T+v*re+A*q+O*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],d=e[13],h=e[2],p=e[6],u=e[10],m=e[14],x=e[3],M=e[7],y=e[11],g=e[15];return x*(+r*l*p-s*d*p-r*o*u+n*d*u+s*o*m-n*l*m)+M*(+t*l*m-t*d*u+r*a*u-s*a*m+s*d*h-r*l*h)+y*(+t*d*p-t*o*m-r*a*p+n*a*m+r*o*h-n*d*h)+g*(-s*o*h-t*l*p+t*o*u+s*a*p-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],d=e[7],h=e[8],p=e[9],u=e[10],m=e[11],x=e[12],M=e[13],y=e[14],g=e[15],S=p*y*d-M*u*d+M*l*m-o*y*m-p*l*g+o*u*g,v=x*u*d-h*y*d-x*l*m+a*y*m+h*l*g-a*u*g,A=h*M*d-x*p*d+x*o*m-a*M*m-h*o*g+a*p*g,O=x*p*l-h*M*l-x*o*u+a*M*u+h*o*y-a*p*y,D=t*S+n*v+s*A+r*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/D;return e[0]=S*N,e[1]=(M*u*r-p*y*r-M*s*m+n*y*m+p*s*g-n*u*g)*N,e[2]=(o*y*r-M*l*r+M*s*d-n*y*d-o*s*g+n*l*g)*N,e[3]=(p*l*r-o*u*r-p*s*d+n*u*d+o*s*m-n*l*m)*N,e[4]=v*N,e[5]=(h*y*r-x*u*r+x*s*m-t*y*m-h*s*g+t*u*g)*N,e[6]=(x*l*r-a*y*r-x*s*d+t*y*d+a*s*g-t*l*g)*N,e[7]=(a*u*r-h*l*r+h*s*d-t*u*d-a*s*m+t*l*m)*N,e[8]=A*N,e[9]=(x*p*r-h*M*r-x*n*m+t*M*m+h*n*g-t*p*g)*N,e[10]=(a*M*r-x*o*r+x*n*d-t*M*d-a*n*g+t*o*g)*N,e[11]=(h*o*r-a*p*r-h*n*d+t*p*d+a*n*m-t*o*m)*N,e[12]=O*N,e[13]=(h*M*s-x*p*s+x*n*u-t*M*u-h*n*y+t*p*y)*N,e[14]=(x*o*s-a*M*s-x*n*l+t*M*l+a*n*y-t*o*y)*N,e[15]=(a*p*s-h*o*s+h*n*l-t*p*l-a*n*u+t*o*u)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,d=r*a,h=r*o;return this.set(d*a+n,d*o-s*l,d*l+s*o,0,d*o+s*l,h*o+n,h*l-s*a,0,d*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,d=r+r,h=a+a,p=o+o,u=r*d,m=r*h,x=r*p,M=a*h,y=a*p,g=o*p,S=l*d,v=l*h,A=l*p,O=n.x,D=n.y,N=n.z;return s[0]=(1-(M+g))*O,s[1]=(m+A)*O,s[2]=(x-v)*O,s[3]=0,s[4]=(m-A)*D,s[5]=(1-(u+g))*D,s[6]=(y+S)*D,s[7]=0,s[8]=(x+v)*N,s[9]=(y-S)*N,s[10]=(1-(u+M))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Nr.set(s[0],s[1],s[2]).length(),a=Nr.set(s[4],s[5],s[6]).length(),o=Nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$i.copy(this);let d=1/r,h=1/a,p=1/o;return $i.elements[0]*=d,$i.elements[1]*=d,$i.elements[2]*=d,$i.elements[4]*=h,$i.elements[5]*=h,$i.elements[6]*=h,$i.elements[8]*=p,$i.elements[9]*=p,$i.elements[10]*=p,t.setFromRotationMatrix($i),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=xs){let l=this.elements,d=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),u=(n+s)/(n-s),m,x;if(o===xs)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Jo)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=xs){let l=this.elements,d=1/(t-e),h=1/(n-s),p=1/(a-r),u=(t+e)*d,m=(n+s)*h,x,M;if(o===xs)x=(a+r)*p,M=-2*p;else if(o===Jo)x=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Nr=new F,$i=new Mn,Xm=new F(0,0,0),qm=new F(1,1,1),ks=new F,So=new F,Ai=new F,mf=new Mn,gf=new as,ia=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],d=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(di(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-di(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(di(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-di(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(di(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-di(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ia.DEFAULT_ORDER="XYZ";var Va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ym=0,yf=new F,Br=new as,ps=new Mn,Eo=new F,Ca=new F,$m=new F,Km=new as,xf=new F(1,0,0),_f=new F(0,1,0),vf=new F(0,0,1),Zm={type:"added"},Jm={type:"removed"},li=class i extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new ia,n=new as,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mn},normalMatrix:{value:new Bt}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(xf,e)}rotateY(e){return this.rotateOnAxis(_f,e)}rotateZ(e){return this.rotateOnAxis(vf,e)}translateOnAxis(e,t){return yf.copy(e).applyQuaternion(this.quaternion),this.position.add(yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xf,e)}translateY(e){return this.translateOnAxis(_f,e)}translateZ(e){return this.translateOnAxis(vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eo.copy(e):Eo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(Ca,Eo,this.up):ps.lookAt(Eo,Ca,this.up),this.quaternion.setFromRotationMatrix(ps),s&&(ps.extractRotation(s.matrixWorld),Br.setFromRotationMatrix(ps),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(ps),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,$m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,Km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let d=0,h=l.length;d<h;d++){let p=l[d];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,d=this.material.length;l<d;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),d=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let d in o){let h=o[d];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};li.DEFAULT_UP=new F(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ki=new F,ms=new F,xc=new F,gs=new F,Or=new F,Fr=new F,Mf=new F,_c=new F,vc=new F,Mc=new F,To=!1,Yr=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ki.subVectors(e,t),s.cross(Ki);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ki.subVectors(s,t),ms.subVectors(n,t),xc.subVectors(e,t);let a=Ki.dot(Ki),o=Ki.dot(ms),l=Ki.dot(xc),d=ms.dot(ms),h=ms.dot(xc),p=a*d-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(d*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getUV(e,t,n,s,r,a,o,l){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gs.x),l.addScaledVector(a,gs.y),l.addScaledVector(o,gs.z),l)}static isFrontFacing(e,t,n,s){return Ki.subVectors(n,t),ms.subVectors(e,t),Ki.cross(ms).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Ki.cross(ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Or.subVectors(s,n),Fr.subVectors(r,n),_c.subVectors(e,n);let l=Or.dot(_c),d=Fr.dot(_c);if(l<=0&&d<=0)return t.copy(n);vc.subVectors(e,s);let h=Or.dot(vc),p=Fr.dot(vc);if(h>=0&&p<=h)return t.copy(s);let u=l*p-h*d;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Or,a);Mc.subVectors(e,r);let m=Or.dot(Mc),x=Fr.dot(Mc);if(x>=0&&m<=x)return t.copy(r);let M=m*d-l*x;if(M<=0&&d>=0&&x<=0)return o=d/(d-x),t.copy(n).addScaledVector(Fr,o);let y=h*x-m*p;if(y<=0&&p-h>=0&&m-x>=0)return Mf.subVectors(r,s),o=(p-h)/(p-h+(m-x)),t.copy(s).addScaledVector(Mf,o);let g=1/(y+M+u);return a=M*g,o=u*g,t.copy(n).addScaledVector(Or,a).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hs={h:0,s:0,l:0},wo={h:0,s:0,l:0};function bc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var wt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=cn.workingColorSpace){return this.r=e,this.g=t,this.b=n,cn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=cn.workingColorSpace){if(e=km(e,1),t=di(t,0,1),n=di(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=bc(a,r,e+1/3),this.g=bc(a,r,e),this.b=bc(a,r,e-1/3)}return cn.toWorkingColorSpace(this,s),this}setStyle(e,t=oi){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){let n=Sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=hc(e.r),this.g=hc(e.g),this.b=hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return cn.fromWorkingColorSpace(fi.copy(this),e),Math.round(di(fi.r*255,0,255))*65536+Math.round(di(fi.g*255,0,255))*256+Math.round(di(fi.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=cn.workingColorSpace){cn.fromWorkingColorSpace(fi.copy(this),t);let n=fi.r,s=fi.g,r=fi.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,d,h=(o+a)/2;if(o===a)l=0,d=0;else{let p=a-o;switch(d=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=d,e.l=h,e}getRGB(e,t=cn.workingColorSpace){return cn.fromWorkingColorSpace(fi.copy(this),t),e.r=fi.r,e.g=fi.g,e.b=fi.b,e}getStyle(e=oi){cn.fromWorkingColorSpace(fi.copy(this),e);let t=fi.r,n=fi.g,s=fi.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hs),this.setHSL(Hs.h+e,Hs.s+t,Hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hs),e.getHSL(wo);let n=lc(Hs.h,wo.h,t),s=lc(Hs.s,wo.s,t),r=lc(Hs.l,wo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fi=new wt;wt.NAMES=Sd;var jm=0,Ks=class extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=la(),this.name="",this.type="Material",this.blending=Jr,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=Oc,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(n.blending=this.blending),this.side!==qs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bc&&(n.blendSrc=this.blendSrc),this.blendDst!==Oc&&(n.blendDst=this.blendDst),this.blendEquation!==cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==of&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Un=class extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gn=new F,Ao=new Xe,ti=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix3(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wa(t,this.array)),t}setX(e,t){return this.normalized&&(t=vi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wa(t,this.array)),t}setY(e,t){return this.normalized&&(t=vi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wa(t,this.array)),t}setW(e,t){return this.normalized&&(t=vi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vi(t,this.array),n=vi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vi(t,this.array),n=vi(n,this.array),s=vi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vi(t,this.array),n=vi(n,this.array),s=vi(s,this.array),r=vi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lf&&(e.usage=this.usage),e}};var nl=class extends ti{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var il=class extends ti{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dn=class extends ti{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Qm=0,Oi=new Mn,Sc=new li,kr=new F,Ri=new Ms,Pa=new Ms,Qn=new F,ci=class i extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)?il:nl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,n){return Oi.makeTranslation(e,t,n),this.applyMatrix4(Oi),this}scale(e,t,n){return Oi.makeScale(e,t,n),this.applyMatrix4(Oi),this}lookAt(e){return Sc.lookAt(e),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Qn.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Qn),Qn.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Qn)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Qn.addVectors(Ri.min,Pa.min),Ri.expandByPoint(Qn),Qn.addVectors(Ri.max,Pa.max),Ri.expandByPoint(Qn)):(Ri.expandByPoint(Pa.min),Ri.expandByPoint(Pa.max))}Ri.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Qn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)Qn.fromBufferAttribute(o,d),l&&(kr.fromBufferAttribute(e,d),Qn.add(kr)),s=Math.max(s,n.distanceToSquared(Qn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,d=[],h=[];for(let C=0;C<o;C++)d[C]=new F,h[C]=new F;let p=new F,u=new F,m=new F,x=new Xe,M=new Xe,y=new Xe,g=new F,S=new F;function v(C,te,X){p.fromArray(s,C*3),u.fromArray(s,te*3),m.fromArray(s,X*3),x.fromArray(a,C*2),M.fromArray(a,te*2),y.fromArray(a,X*2),u.sub(p),m.sub(p),M.sub(x),y.sub(x);let re=1/(M.x*y.y-y.x*M.y);isFinite(re)&&(g.copy(u).multiplyScalar(y.y).addScaledVector(m,-M.y).multiplyScalar(re),S.copy(m).multiplyScalar(M.x).addScaledVector(u,-y.x).multiplyScalar(re),d[C].add(g),d[te].add(g),d[X].add(g),h[C].add(S),h[te].add(S),h[X].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let C=0,te=A.length;C<te;++C){let X=A[C],re=X.start,B=X.count;for(let K=re,se=re+B;K<se;K+=3)v(n[K+0],n[K+1],n[K+2])}let O=new F,D=new F,N=new F,Q=new F;function T(C){N.fromArray(r,C*3),Q.copy(N);let te=d[C];O.copy(te),O.sub(N.multiplyScalar(N.dot(te))).normalize(),D.crossVectors(Q,te);let re=D.dot(h[C])<0?-1:1;l[C*4]=O.x,l[C*4+1]=O.y,l[C*4+2]=O.z,l[C*4+3]=re}for(let C=0,te=A.length;C<te;++C){let X=A[C],re=X.start,B=X.count;for(let K=re,se=re+B;K<se;K+=3)T(n[K+0]),T(n[K+1]),T(n[K+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,d=new F,h=new F,p=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){let x=e.getX(u+0),M=e.getX(u+1),y=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,y),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),o.add(h),l.add(h),d.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qn.fromBufferAttribute(e,t),Qn.normalize(),e.setXYZ(t,Qn.x,Qn.y,Qn.z)}toNonIndexed(){function e(o,l){let d=o.array,h=o.itemSize,p=o.normalized,u=new d.constructor(l.length*h),m=0,x=0;for(let M=0,y=l.length;M<y;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let g=0;g<h;g++)u[x++]=d[m++]}return new ti(u,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],d=e(l,n);t.setAttribute(o,d)}let r=this.morphAttributes;for(let o in r){let l=[],d=r[o];for(let h=0,p=d.length;h<p;h++){let u=d[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let d=a[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let d=n[l];e.data.attributes[l]=d.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let d=this.morphAttributes[l],h=[];for(let p=0,u=d.length;p<u;p++){let m=d[p];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let d in s){let h=s[d];this.setAttribute(d,h.clone(t))}let r=e.morphAttributes;for(let d in r){let h=[],p=r[d];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let d=0,h=a.length;d<h;d++){let p=a[d];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bf=new Mn,ar=new za,Ro=new $s,Sf=new F,Hr=new F,zr=new F,Vr=new F,Ec=new F,Co=new F,Po=new Xe,Io=new Xe,Lo=new Xe,Ef=new F,Tf=new F,wf=new F,Do=new F,Uo=new F,$e=class extends li{constructor(e=new ci,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Co.set(0,0,0);for(let l=0,d=r.length;l<d;l++){let h=o[l],p=r[l];h!==0&&(Ec.fromBufferAttribute(p,e),a?Co.addScaledVector(Ec,h):Co.addScaledVector(Ec.sub(t),h))}t.add(Co)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),ar.copy(e.ray).recast(e.near),!(Ro.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ro,Sf)===null||ar.origin.distanceToSquared(Sf)>(e.far-e.near)**2))&&(bf.copy(r).invert(),ar.copy(e.ray).applyMatrix4(bf),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let y=u[x],g=a[y.materialIndex],S=Math.max(y.start,m.start),v=Math.min(o.count,Math.min(y.start+y.count,m.start+m.count));for(let A=S,O=v;A<O;A+=3){let D=o.getX(A),N=o.getX(A+1),Q=o.getX(A+2);s=No(this,g,e,n,d,h,p,D,N,Q),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let y=x,g=M;y<g;y+=3){let S=o.getX(y),v=o.getX(y+1),A=o.getX(y+2);s=No(this,a,e,n,d,h,p,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let y=u[x],g=a[y.materialIndex],S=Math.max(y.start,m.start),v=Math.min(l.count,Math.min(y.start+y.count,m.start+m.count));for(let A=S,O=v;A<O;A+=3){let D=A,N=A+1,Q=A+2;s=No(this,g,e,n,d,h,p,D,N,Q),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let y=x,g=M;y<g;y+=3){let S=y,v=y+1,A=y+2;s=No(this,a,e,n,d,h,p,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function eg(i,e,t,n,s,r,a,o){let l;if(e.side===bi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===qs,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(i.matrixWorld);let d=t.ray.origin.distanceTo(Uo);return d<t.near||d>t.far?null:{distance:d,point:Uo.clone(),object:i}}function No(i,e,t,n,s,r,a,o,l,d){i.getVertexPosition(o,Hr),i.getVertexPosition(l,zr),i.getVertexPosition(d,Vr);let h=eg(i,e,t,n,Hr,zr,Vr,Do);if(h){s&&(Po.fromBufferAttribute(s,o),Io.fromBufferAttribute(s,l),Lo.fromBufferAttribute(s,d),h.uv=Yr.getInterpolation(Do,Hr,zr,Vr,Po,Io,Lo,new Xe)),r&&(Po.fromBufferAttribute(r,o),Io.fromBufferAttribute(r,l),Lo.fromBufferAttribute(r,d),h.uv1=Yr.getInterpolation(Do,Hr,zr,Vr,Po,Io,Lo,new Xe),h.uv2=h.uv1),a&&(Ef.fromBufferAttribute(a,o),Tf.fromBufferAttribute(a,l),wf.fromBufferAttribute(a,d),h.normal=Yr.getInterpolation(Do,Hr,zr,Vr,Ef,Tf,wf,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c:d,normal:new F,materialIndex:0};Yr.getNormal(Hr,zr,Vr,p.normal),h.face=p}return h}var $n=class i extends ci{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],d=[],h=[],p=[],u=0,m=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dn(d,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(p,2));function x(M,y,g,S,v,A,O,D,N,Q,T){let C=A/N,te=O/Q,X=A/2,re=O/2,B=D/2,K=N+1,se=Q+1,q=0,V=0,Z=new F;for(let ce=0;ce<se;ce++){let ue=ce*te-re;for(let be=0;be<K;be++){let ne=be*C-X;Z[M]=ne*S,Z[y]=ue*v,Z[g]=B,d.push(Z.x,Z.y,Z.z),Z[M]=0,Z[y]=0,Z[g]=D>0?1:-1,h.push(Z.x,Z.y,Z.z),p.push(be/N),p.push(1-ce/Q),q+=1}}for(let ce=0;ce<Q;ce++)for(let ue=0;ue<N;ue++){let be=u+ue+K*ce,ne=u+ue+K*(ce+1),fe=u+(ue+1)+K*(ce+1),Ae=u+(ue+1)+K*ce;l.push(be,ne,Ae),l.push(ne,fe,Ae),V+=6}o.addGroup(m,V,T),m+=V,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function sa(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mi(i){let e={};for(let t=0;t<i.length;t++){let n=sa(i[t]);for(let s in n)e[s]=n[s]}return e}function tg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ed(i){return i.getRenderTarget()===null?i.outputColorSpace:cn.workingColorSpace}var ng={clone:sa,merge:mi},ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bs=class extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ig,this.fragmentShader=sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=tg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},sl=class extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=xs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=class extends sl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vc*2*Math.atan(Math.tan(oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,d=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/d,s*=a.width/l,n*=a.height/d}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gr=-90,Wr=1,qc=class extends li{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yi(Gr,Wr,e,t);s.layers=this.layers,this.add(s);let r=new yi(Gr,Wr,e,t);r.layers=this.layers,this.add(r);let a=new yi(Gr,Wr,e,t);a.layers=this.layers,this.add(a);let o=new yi(Gr,Wr,e,t);o.layers=this.layers,this.add(o);let l=new yi(Gr,Wr,e,t);l.layers=this.layers,this.add(l);let d=new yi(Gr,Wr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let d of t)this.remove(d);if(e===xs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,d,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,d),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(p,u,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},rl=class extends Hi{constructor(e,t,n,s,r,a,o,l,d,h){e=e!==void 0?e:[],t=t!==void 0?t:ea,super(e,t,n,s,r,a,o,l,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yc=class extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Da("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===dr?oi:ki),this.texture=new rl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new bs({name:"CubemapFromEquirect",uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bi,blending:Gs});r.uniforms.tEquirect.value=t;let a=new $e(s,r),o=t.minFilter;return t.minFilter===ka&&(t.minFilter=Fi),new qc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Tc=new F,rg=new F,ag=new Bt,Zi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Tc.subVectors(n,t).cross(rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Tc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ag.getNormalMatrix(e),s=this.coplanarPoint(Tc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},or=new $s,Bo=new F,Ga=class{constructor(e=new Zi,t=new Zi,n=new Zi,s=new Zi,r=new Zi,a=new Zi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xs){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],d=s[4],h=s[5],p=s[6],u=s[7],m=s[8],x=s[9],M=s[10],y=s[11],g=s[12],S=s[13],v=s[14],A=s[15];if(n[0].setComponents(l-r,u-d,y-m,A-g).normalize(),n[1].setComponents(l+r,u+d,y+m,A+g).normalize(),n[2].setComponents(l+a,u+h,y+x,A+S).normalize(),n[3].setComponents(l-a,u-h,y-x,A-S).normalize(),n[4].setComponents(l-o,u-p,y-M,A-v).normalize(),t===xs)n[5].setComponents(l+o,u+p,y+M,A+v).normalize();else if(t===Jo)n[5].setComponents(o,p,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Bo.x=s.normal.x>0?e.max.x:e.min.x,Bo.y=s.normal.y>0?e.max.y:e.min.y,Bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Td(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function og(i,e){let t=e.isWebGL2,n=new WeakMap;function s(d,h){let p=d.array,u=d.usage,m=p.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,p,u),d.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(p instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,h,p){let u=h.array,m=h._updateRange,x=h.updateRanges;if(i.bindBuffer(p,d),m.count===-1&&x.length===0&&i.bufferSubData(p,0,u),x.length!==0){for(let M=0,y=x.length;M<y;M++){let g=x[M];t?i.bufferSubData(p,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count):i.bufferSubData(p,g.start*u.BYTES_PER_ELEMENT,u.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(p,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):i.bufferSubData(p,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);let h=n.get(d);h&&(i.deleteBuffer(h.buffer),n.delete(d))}function l(d,h){if(d.isGLBufferAttribute){let u=n.get(d);(!u||u.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);let p=n.get(d);if(p===void 0)n.set(d,s(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:a,remove:o,update:l}}var os=class i extends ci{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),d=o+1,h=l+1,p=e/o,u=t/l,m=[],x=[],M=[],y=[];for(let g=0;g<h;g++){let S=g*u-a;for(let v=0;v<d;v++){let A=v*p-r;x.push(A,-S,0),M.push(0,0,1),y.push(v/o),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){let v=S+d*g,A=S+d*(g+1),O=S+1+d*(g+1),D=S+1+d*g;m.push(v,A,D),m.push(A,O,D)}this.setIndex(m),this.setAttribute("position",new dn(x,3)),this.setAttribute("normal",new dn(M,3)),this.setAttribute("uv",new dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
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
#endif`,hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
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
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
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
#endif`,yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
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
#endif`,bg=`#ifdef USE_BUMPMAP
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ig=`#define PI 3.141592653589793
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
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",kg=`
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
}`,Hg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
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
}`,Zg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
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
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
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
#endif`,o0=`struct PhysicalMaterial {
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
}`,l0=`
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x0=`#if defined( USE_POINTS_UV )
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
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b0=`#ifdef USE_MORPHNORMALS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
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
#endif`,I0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q0=`float getShadowMask() {
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
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,J0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ey=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ty=`#ifdef USE_TRANSMISSION
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
#endif`,ny=`#ifdef USE_TRANSMISSION
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ly=`uniform sampler2D t2D;
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`#include <common>
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
}`,py=`#if DEPTH_PACKING == 3200
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
}`,my=`#define DISTANCE
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
}`,gy=`#define DISTANCE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`uniform float scale;
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
}`,vy=`uniform vec3 diffuse;
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
}`,My=`#include <common>
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
}`,by=`uniform vec3 diffuse;
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
}`,Sy=`#define LAMBERT
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
}`,Ey=`#define LAMBERT
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
}`,Ty=`#define MATCAP
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
}`,wy=`#define MATCAP
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
}`,Ay=`#define NORMAL
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
}`,Ry=`#define NORMAL
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
}`,Cy=`#define PHONG
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
}`,Py=`#define PHONG
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
}`,Iy=`#define STANDARD
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
}`,Ly=`#define STANDARD
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
}`,Dy=`#define TOON
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
}`,Uy=`#define TOON
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
}`,Ny=`uniform float size;
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
}`,By=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,Fy=`uniform vec3 color;
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
}`,ky=`uniform float rotation;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:lg,alphahash_pars_fragment:cg,alphamap_fragment:hg,alphamap_pars_fragment:ug,alphatest_fragment:fg,alphatest_pars_fragment:dg,aomap_fragment:pg,aomap_pars_fragment:mg,batching_pars_vertex:gg,batching_vertex:yg,begin_vertex:xg,beginnormal_vertex:_g,bsdfs:vg,iridescence_fragment:Mg,bumpmap_pars_fragment:bg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:Eg,clipping_planes_pars_vertex:Tg,clipping_planes_vertex:wg,color_fragment:Ag,color_pars_fragment:Rg,color_pars_vertex:Cg,color_vertex:Pg,common:Ig,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Ug,displacementmap_vertex:Ng,emissivemap_fragment:Bg,emissivemap_pars_fragment:Og,colorspace_fragment:Fg,colorspace_pars_fragment:kg,envmap_fragment:Hg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Vg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:t0,envmap_vertex:Wg,fog_vertex:Xg,fog_pars_vertex:qg,fog_fragment:Yg,fog_pars_fragment:$g,gradientmap_pars_fragment:Kg,lightmap_fragment:Zg,lightmap_pars_fragment:Jg,lights_lambert_fragment:jg,lights_lambert_pars_fragment:Qg,lights_pars_begin:e0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:s0,lights_phong_pars_fragment:r0,lights_physical_fragment:a0,lights_physical_pars_fragment:o0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:h0,logdepthbuf_fragment:u0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:y0,map_particle_pars_fragment:x0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:v0,morphcolor_vertex:M0,morphnormal_vertex:b0,morphtarget_pars_vertex:S0,morphtarget_vertex:E0,normal_fragment_begin:T0,normal_fragment_maps:w0,normal_pars_fragment:A0,normal_pars_vertex:R0,normal_vertex:C0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:I0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:D0,iridescence_pars_fragment:U0,opaque_fragment:N0,packing:B0,premultiplied_alpha_fragment:O0,project_vertex:F0,dithering_fragment:k0,dithering_pars_fragment:H0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:W0,shadowmap_vertex:X0,shadowmask_pars_fragment:q0,skinbase_vertex:Y0,skinning_pars_vertex:$0,skinning_vertex:K0,skinnormal_vertex:Z0,specularmap_fragment:J0,specularmap_pars_fragment:j0,tonemapping_fragment:Q0,tonemapping_pars_fragment:ey,transmission_fragment:ty,transmission_pars_fragment:ny,uv_pars_fragment:iy,uv_pars_vertex:sy,uv_vertex:ry,worldpos_vertex:ay,background_vert:oy,background_frag:ly,backgroundCube_vert:cy,backgroundCube_frag:hy,cube_vert:uy,cube_frag:fy,depth_vert:dy,depth_frag:py,distanceRGBA_vert:my,distanceRGBA_frag:gy,equirect_vert:yy,equirect_frag:xy,linedashed_vert:_y,linedashed_frag:vy,meshbasic_vert:My,meshbasic_frag:by,meshlambert_vert:Sy,meshlambert_frag:Ey,meshmatcap_vert:Ty,meshmatcap_frag:wy,meshnormal_vert:Ay,meshnormal_frag:Ry,meshphong_vert:Cy,meshphong_frag:Py,meshphysical_vert:Iy,meshphysical_frag:Ly,meshtoon_vert:Dy,meshtoon_frag:Uy,points_vert:Ny,points_frag:By,shadow_vert:Oy,shadow_frag:Fy,sprite_vert:ky,sprite_frag:Hy},De={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},rs={basic:{uniforms:mi([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:mi([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new wt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:mi([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:mi([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:mi([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new wt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:mi([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:mi([De.points,De.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:mi([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:mi([De.common,De.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:mi([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:mi([De.sprite,De.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:mi([De.common,De.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:mi([De.lights,De.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};rs.physical={uniforms:mi([rs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var Oo={r:0,b:0,g:0};function zy(i,e,t,n,s,r,a){let o=new wt(0),l=r===!0?0:1,d,h,p=null,u=0,m=null;function x(y,g){let S=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?M(o,l):v&&v.isColor&&(M(v,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===wl)?(h===void 0&&(h=new $e(new $n(1,1,1),new bs({name:"BackgroundCubeMaterial",uniforms:sa(rs.backgroundCube.uniforms),vertexShader:rs.backgroundCube.vertexShader,fragmentShader:rs.backgroundCube.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=cn.getTransfer(v.colorSpace)!==vn,(p!==v||u!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=v,u=v.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(d===void 0&&(d=new $e(new os(2,2),new bs({name:"BackgroundMaterial",uniforms:sa(rs.background.uniforms),vertexShader:rs.background.vertexShader,fragmentShader:rs.background.fragmentShader,side:qs,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=v,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=cn.getTransfer(v.colorSpace)!==vn,v.matrixAutoUpdate===!0&&v.updateMatrix(),d.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||u!==v.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=v,u=v.version,m=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null))}function M(y,g){y.getRGB(Oo,Ed(i)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(y,g=1){o.set(y),l=g,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,M(o,l)},render:x}}function Vy(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=y(null),d=l,h=!1;function p(B,K,se,q,V){let Z=!1;if(a){let ce=M(q,se,K);d!==ce&&(d=ce,m(d.object)),Z=g(B,q,se,V),Z&&S(B,q,se,V)}else{let ce=K.wireframe===!0;(d.geometry!==q.id||d.program!==se.id||d.wireframe!==ce)&&(d.geometry=q.id,d.program=se.id,d.wireframe=ce,Z=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,Q(B,K,se,q),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(B){return n.isWebGL2?i.bindVertexArray(B):r.bindVertexArrayOES(B)}function x(B){return n.isWebGL2?i.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function M(B,K,se){let q=se.wireframe===!0,V=o[B.id];V===void 0&&(V={},o[B.id]=V);let Z=V[K.id];Z===void 0&&(Z={},V[K.id]=Z);let ce=Z[q];return ce===void 0&&(ce=y(u()),Z[q]=ce),ce}function y(B){let K=[],se=[],q=[];for(let V=0;V<s;V++)K[V]=0,se[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:se,attributeDivisors:q,object:B,attributes:{},index:null}}function g(B,K,se,q){let V=d.attributes,Z=K.attributes,ce=0,ue=se.getAttributes();for(let be in ue)if(ue[be].location>=0){let fe=V[be],Ae=Z[be];if(Ae===void 0&&(be==="instanceMatrix"&&B.instanceMatrix&&(Ae=B.instanceMatrix),be==="instanceColor"&&B.instanceColor&&(Ae=B.instanceColor)),fe===void 0||fe.attribute!==Ae||Ae&&fe.data!==Ae.data)return!0;ce++}return d.attributesNum!==ce||d.index!==q}function S(B,K,se,q){let V={},Z=K.attributes,ce=0,ue=se.getAttributes();for(let be in ue)if(ue[be].location>=0){let fe=Z[be];fe===void 0&&(be==="instanceMatrix"&&B.instanceMatrix&&(fe=B.instanceMatrix),be==="instanceColor"&&B.instanceColor&&(fe=B.instanceColor));let Ae={};Ae.attribute=fe,fe&&fe.data&&(Ae.data=fe.data),V[be]=Ae,ce++}d.attributes=V,d.attributesNum=ce,d.index=q}function v(){let B=d.newAttributes;for(let K=0,se=B.length;K<se;K++)B[K]=0}function A(B){O(B,0)}function O(B,K){let se=d.newAttributes,q=d.enabledAttributes,V=d.attributeDivisors;se[B]=1,q[B]===0&&(i.enableVertexAttribArray(B),q[B]=1),V[B]!==K&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,K),V[B]=K)}function D(){let B=d.newAttributes,K=d.enabledAttributes;for(let se=0,q=K.length;se<q;se++)K[se]!==B[se]&&(i.disableVertexAttribArray(se),K[se]=0)}function N(B,K,se,q,V,Z,ce){ce===!0?i.vertexAttribIPointer(B,K,se,V,Z):i.vertexAttribPointer(B,K,se,q,V,Z)}function Q(B,K,se,q){if(n.isWebGL2===!1&&(B.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let V=q.attributes,Z=se.getAttributes(),ce=K.defaultAttributeValues;for(let ue in Z){let be=Z[ue];if(be.location>=0){let ne=V[ue];if(ne===void 0&&(ue==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),ue==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor)),ne!==void 0){let fe=ne.normalized,Ae=ne.itemSize,Ce=t.get(ne);if(Ce===void 0)continue;let Oe=Ce.buffer,yt=Ce.type,lt=Ce.bytesPerElement,et=n.isWebGL2===!0&&(yt===i.INT||yt===i.UNSIGNED_INT||ne.gpuType===fd);if(ne.isInterleavedBufferAttribute){let Se=ne.data,J=Se.stride,Xt=ne.offset;if(Se.isInstancedInterleavedBuffer){for(let Ze=0;Ze<be.locationSize;Ze++)O(be.location+Ze,Se.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ze=0;Ze<be.locationSize;Ze++)A(be.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Ze=0;Ze<be.locationSize;Ze++)N(be.location+Ze,Ae/be.locationSize,yt,fe,J*lt,(Xt+Ae/be.locationSize*Ze)*lt,et)}else{if(ne.isInstancedBufferAttribute){for(let Se=0;Se<be.locationSize;Se++)O(be.location+Se,ne.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<be.locationSize;Se++)A(be.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Se=0;Se<be.locationSize;Se++)N(be.location+Se,Ae/be.locationSize,yt,fe,Ae*lt,Ae/be.locationSize*Se*lt,et)}}else if(ce!==void 0){let fe=ce[ue];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(be.location,fe);break;case 3:i.vertexAttrib3fv(be.location,fe);break;case 4:i.vertexAttrib4fv(be.location,fe);break;default:i.vertexAttrib1fv(be.location,fe)}}}}D()}function T(){X();for(let B in o){let K=o[B];for(let se in K){let q=K[se];for(let V in q)x(q[V].object),delete q[V];delete K[se]}delete o[B]}}function C(B){if(o[B.id]===void 0)return;let K=o[B.id];for(let se in K){let q=K[se];for(let V in q)x(q[V].object),delete q[V];delete K[se]}delete o[B.id]}function te(B){for(let K in o){let se=o[K];if(se[B.id]===void 0)continue;let q=se[B.id];for(let V in q)x(q[V].object),delete q[V];delete se[B.id]}}function X(){re(),h=!0,d!==l&&(d=l,m(d.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:X,resetDefaultState:re,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:te,initAttributes:v,enableAttribute:A,disableUnusedAttributes:D}}function Gy(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,p){i.drawArrays(r,h,p),t.update(p,r,1)}function l(h,p,u){if(u===0)return;let m,x;if(s)m=i,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](r,h,p,u),t.update(p,r,u)}function d(h,p,u){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<u;x++)this.render(h[x],p[x]);else{m.multiDrawArraysWEBGL(r,h,0,p,0,u);let x=0;for(let M=0;M<u;M++)x+=p[M];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=d}function Wy(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let d=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,A=a||e.has("OES_texture_float"),O=v&&A,D=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:d,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:O,maxSamples:D}}function Xy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Zi,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,m){let x=p.clippingPlanes,M=p.clipIntersection,y=p.clipShadows,g=i.get(p);if(!s||x===null||x.length===0||r&&!y)r?h(null):d();else{let S=r?0:n,v=S*4,A=g.clippingState||null;l.value=A,A=h(x,u,v,m);for(let O=0;O!==v;++O)A[O]=t[O];g.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,m,x){let M=p!==null?p.length:0,y=null;if(M!==0){if(y=l.value,x!==!0||y===null){let g=m+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(y===null||y.length<g)&&(y=new Float32Array(g));for(let v=0,A=m;v!==M;++v,A+=4)a.copy(p[v]).applyMatrix4(S,o),a.normal.toArray(y,A),y[A+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function qy(i){let e=new WeakMap;function t(a,o){return o===Fc?a.mapping=ea:o===kc&&(a.mapping=ta),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fc||o===kc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let d=new Yc(l.height/2);return d.fromEquirectangularTexture(i,a),e.set(a,d),a.addEventListener("dispose",s),t(d.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var al=class extends sl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$r=4,Af=[.125,.215,.35,.446,.526,.582],hr=20,wc=new al,Rf=new wt,Ac=null,Rc=0,Cc=0,lr=(1+Math.sqrt(5))/2,Xr=1/lr,Cf=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,lr,Xr),new F(0,lr,-Xr),new F(Xr,0,lr),new F(-Xr,0,lr),new F(lr,Xr,0),new F(-lr,Xr,0)],ol=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ac,Rc,Cc),e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Ha,format:ji,colorSpace:_s,depthBuffer:!1},s=Pf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yy(r)),this._blurMaterial=$y(r,e,t)}return s}_compileMaterial(e){let t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,wc)}_sceneToCubeUV(e,t,n,s){let o=new yi(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,u=h.toneMapping;h.getClearColor(Rf),h.toneMapping=Ws,h.autoClear=!1;let m=new Un({name:"PMREM.Background",side:bi,depthWrite:!1,depthTest:!1}),x=new $e(new $n,m),M=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,M=!0):(m.color.copy(Rf),M=!0);for(let g=0;g<6;g++){let S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(d[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,d[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,d[g]));let v=this._cubeSize;Fo(s,S*v,g>2?v:0,v,v),h.setRenderTarget(s),M&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=p,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ea||e.mapping===ta;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,wc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cf[(s-1)%Cf.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new $e(this._lodPlanes[s],d),u=d.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*hr-1),M=r/x,y=isFinite(r)?1+Math.floor(h*M):hr;y>hr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${hr}`);let g=[],S=0;for(let N=0;N<hr;++N){let Q=N/M,T=Math.exp(-Q*Q/2);g.push(T),N===0?S+=T:N<y&&(S+=2*T)}for(let N=0;N<g.length;N++)g[N]=g[N]/S;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=x,u.mipInt.value=v-n;let A=this._sizeLods[s],O=3*A*(s>v-$r?s-v+$r:0),D=4*(this._cubeSize-A);Fo(t,O,D,3*A,2*A),l.setRenderTarget(t),l.render(p,wc)}};function Yy(i){let e=[],t=[],n=[],s=i,r=i-$r+1+Af.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-$r?l=Af[a-i+$r-1]:a===0&&(l=0),n.push(l);let d=1/(o-2),h=-d,p=1+d,u=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,x=6,M=3,y=2,g=1,S=new Float32Array(M*x*m),v=new Float32Array(y*x*m),A=new Float32Array(g*x*m);for(let D=0;D<m;D++){let N=D%3*2/3-1,Q=D>2?0:-1,T=[N,Q,0,N+2/3,Q,0,N+2/3,Q+1,0,N,Q,0,N+2/3,Q+1,0,N,Q+1,0];S.set(T,M*x*D),v.set(u,y*x*D);let C=[D,D,D,D,D,D];A.set(C,g*x*D)}let O=new ci;O.setAttribute("position",new ti(S,M)),O.setAttribute("uv",new ti(v,y)),O.setAttribute("faceIndex",new ti(A,g)),e.push(O),s>$r&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pf(i,e,t){let n=new vs(i,e,t);return n.texture.mapping=wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $y(i,e,t){let n=new Float32Array(hr),s=new F(0,1,0);return new bs({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function If(){return new bs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function Lf(){return new bs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function Ih(){return`

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
	`}function Ky(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,d=l===Fc||l===kc,h=l===ea||l===ta;if(d||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new ol(i)),p=d?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{let p=o.image;if(d&&p&&p.height>0||h&&p&&s(p)){t===null&&(t=new ol(i));let u=d?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,d=6;for(let h=0;h<d;h++)o[h]!==void 0&&l++;return l===d}function r(o){let l=o.target;l.removeEventListener("dispose",r);let d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jy(i,e,t,n){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);for(let x in u.morphAttributes){let M=u.morphAttributes[x];for(let y=0,g=M.length;y<g;y++)e.remove(M[y])}u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(p){let u=p.attributes;for(let x in u)e.update(u[x],i.ARRAY_BUFFER);let m=p.morphAttributes;for(let x in m){let M=m[x];for(let y=0,g=M.length;y<g;y++)e.update(M[y],i.ARRAY_BUFFER)}}function d(p){let u=[],m=p.index,x=p.attributes.position,M=0;if(m!==null){let S=m.array;M=m.version;for(let v=0,A=S.length;v<A;v+=3){let O=S[v+0],D=S[v+1],N=S[v+2];u.push(O,D,D,N,N,O)}}else if(x!==void 0){let S=x.array;M=x.version;for(let v=0,A=S.length/3-1;v<A;v+=3){let O=v+0,D=v+1,N=v+2;u.push(O,D,D,N,N,O)}}else return;let y=new(bd(u)?il:nl)(u,1);y.version=M;let g=r.get(p);g&&e.remove(g),r.set(p,y)}function h(p){let u=r.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&d(p)}else d(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function jy(i,e,t,n){let s=n.isWebGL2,r;function a(m){r=m}let o,l;function d(m){o=m.type,l=m.bytesPerElement}function h(m,x){i.drawElements(r,x,o,m*l),t.update(x,r,1)}function p(m,x,M){if(M===0)return;let y,g;if(s)y=i,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](r,x,o,m*l,M),t.update(x,r,M)}function u(m,x,M){if(M===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<M;g++)this.render(m[g]/l,x[g]);else{y.multiDrawElementsWEBGL(r,x,0,o,m,0,M);let g=0;for(let S=0;S<M;S++)g+=x[S];t.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=u}function Qy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ex(i,e){return i[0]-e[0]}function tx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function nx(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new ei,o=[];for(let d=0;d<8;d++)o[d]=[d,0];function l(d,h,p){let u=d.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=m!==void 0?m.length:0,M=r.get(h);if(M===void 0||M.count!==x){let B=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",B)};M!==void 0&&M.texture.dispose();let S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],Q=0;S===!0&&(Q=1),v===!0&&(Q=2),A===!0&&(Q=3);let T=h.attributes.position.count*Q,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let te=new Float32Array(T*C*4*x),X=new tl(te,T,C,x);X.type=Vs,X.needsUpdate=!0;let re=Q*4;for(let K=0;K<x;K++){let se=O[K],q=D[K],V=N[K],Z=T*C*4*K;for(let ce=0;ce<se.count;ce++){let ue=ce*re;S===!0&&(a.fromBufferAttribute(se,ce),te[Z+ue+0]=a.x,te[Z+ue+1]=a.y,te[Z+ue+2]=a.z,te[Z+ue+3]=0),v===!0&&(a.fromBufferAttribute(q,ce),te[Z+ue+4]=a.x,te[Z+ue+5]=a.y,te[Z+ue+6]=a.z,te[Z+ue+7]=0),A===!0&&(a.fromBufferAttribute(V,ce),te[Z+ue+8]=a.x,te[Z+ue+9]=a.y,te[Z+ue+10]=a.z,te[Z+ue+11]=V.itemSize===4?a.w:1)}}M={count:x,texture:X,size:new Xe(T,C)},r.set(h,M),h.addEventListener("dispose",B)}let y=0;for(let S=0;S<u.length;S++)y+=u[S];let g=h.morphTargetsRelative?1:1-y;p.getUniforms().setValue(i,"morphTargetBaseInfluence",g),p.getUniforms().setValue(i,"morphTargetInfluences",u),p.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let m=u===void 0?0:u.length,x=n[h.id];if(x===void 0||x.length!==m){x=[];for(let v=0;v<m;v++)x[v]=[v,0];n[h.id]=x}for(let v=0;v<m;v++){let A=x[v];A[0]=v,A[1]=u[v]}x.sort(tx);for(let v=0;v<8;v++)v<m&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(ex);let M=h.morphAttributes.position,y=h.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let A=o[v],O=A[0],D=A[1];O!==Number.MAX_SAFE_INTEGER&&D?(M&&h.getAttribute("morphTarget"+v)!==M[O]&&h.setAttribute("morphTarget"+v,M[O]),y&&h.getAttribute("morphNormal"+v)!==y[O]&&h.setAttribute("morphNormal"+v,y[O]),s[v]=D,g+=D):(M&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),y&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let S=h.morphTargetsRelative?1:1-g;p.getUniforms().setValue(i,"morphTargetBaseInfluence",S),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function ix(i,e,t,n){let s=new WeakMap;function r(l){let d=n.render.frame,h=l.geometry,p=e.get(l,h);if(s.get(p)!==d&&(e.update(p),s.set(p,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==d&&(u.update(),s.set(u,d))}return p}function a(){s=new WeakMap}function o(l){let d=l.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:a}}var ll=class extends Hi{constructor(e,t,n,s,r,a,o,l,d,h){if(h=h!==void 0?h:fr,h!==fr&&h!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fr&&(n=zs),n===void 0&&h===na&&(n=ur),super(null,s,r,a,o,l,h,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:gi,this.minFilter=l!==void 0?l:gi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wd=new Hi,Ad=new ll(1,1);Ad.compareFunction=Md;var Rd=new tl,Cd=new Xc,Pd=new rl,Df=[],Uf=[],Nf=new Float32Array(16),Bf=new Float32Array(9),Of=new Float32Array(4);function ca(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Df[s];if(r===void 0&&(r=new Float32Array(s),Df[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Kn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rl(i,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kn(t,e))return;i.uniform2fv(this.addr,e),Zn(t,e)}}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kn(t,e))return;i.uniform3fv(this.addr,e),Zn(t,e)}}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kn(t,e))return;i.uniform4fv(this.addr,e),Zn(t,e)}}function lx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zn(t,e)}else{if(Kn(t,n))return;Of.set(n),i.uniformMatrix2fv(this.addr,!1,Of),Zn(t,n)}}function cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zn(t,e)}else{if(Kn(t,n))return;Bf.set(n),i.uniformMatrix3fv(this.addr,!1,Bf),Zn(t,n)}}function hx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zn(t,e)}else{if(Kn(t,n))return;Nf.set(n),i.uniformMatrix4fv(this.addr,!1,Nf),Zn(t,n)}}function ux(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kn(t,e))return;i.uniform2iv(this.addr,e),Zn(t,e)}}function dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kn(t,e))return;i.uniform3iv(this.addr,e),Zn(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kn(t,e))return;i.uniform4iv(this.addr,e),Zn(t,e)}}function mx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kn(t,e))return;i.uniform2uiv(this.addr,e),Zn(t,e)}}function yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kn(t,e))return;i.uniform3uiv(this.addr,e),Zn(t,e)}}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kn(t,e))return;i.uniform4uiv(this.addr,e),Zn(t,e)}}function _x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Ad:wd;t.setTexture2D(e||r,s)}function vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cd,s)}function Mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pd,s)}function bx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rd,s)}function Sx(i){switch(i){case 5126:return sx;case 35664:return rx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return fx;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return yx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return bx}}function Ex(i,e){i.uniform1fv(this.addr,e)}function Tx(i,e){let t=ca(e,this.size,2);i.uniform2fv(this.addr,t)}function wx(i,e){let t=ca(e,this.size,3);i.uniform3fv(this.addr,t)}function Ax(i,e){let t=ca(e,this.size,4);i.uniform4fv(this.addr,t)}function Rx(i,e){let t=ca(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cx(i,e){let t=ca(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Px(i,e){let t=ca(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ix(i,e){i.uniform1iv(this.addr,e)}function Lx(i,e){i.uniform2iv(this.addr,e)}function Dx(i,e){i.uniform3iv(this.addr,e)}function Ux(i,e){i.uniform4iv(this.addr,e)}function Nx(i,e){i.uniform1uiv(this.addr,e)}function Bx(i,e){i.uniform2uiv(this.addr,e)}function Ox(i,e){i.uniform3uiv(this.addr,e)}function Fx(i,e){i.uniform4uiv(this.addr,e)}function kx(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);Kn(n,r)||(i.uniform1iv(this.addr,r),Zn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||wd,r[a])}function Hx(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);Kn(n,r)||(i.uniform1iv(this.addr,r),Zn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cd,r[a])}function zx(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);Kn(n,r)||(i.uniform1iv(this.addr,r),Zn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pd,r[a])}function Vx(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);Kn(n,r)||(i.uniform1iv(this.addr,r),Zn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rd,r[a])}function Gx(i){switch(i){case 5126:return Ex;case 35664:return Tx;case 35665:return wx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Ix;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Ux;case 5125:return Nx;case 36294:return Bx;case 36295:return Ox;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Vx}}var $c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sx(t.type)}},Kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gx(t.type)}},Zc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Pc=/(\w+)(\])?(\[|\.)?/g;function Ff(i,e){i.seq.push(e),i.map[e.id]=e}function Wx(i,e,t){let n=i.name,s=n.length;for(Pc.lastIndex=0;;){let r=Pc.exec(n),a=Pc.lastIndex,o=r[1],l=r[2]==="]",d=r[3];if(l&&(o=o|0),d===void 0||d==="["&&a+2===s){Ff(t,d===void 0?new $c(o,i,e):new Kc(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Zc(o),Ff(t,p)),t=p}}}var Qr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Wx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function kf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Xx=37297,qx=0;function Yx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function $x(i){let e=cn.getPrimaries(cn.workingColorSpace),t=cn.getPrimaries(i),n;switch(e===t?n="":e===Zo&&t===Ko?n="LinearDisplayP3ToLinearSRGB":e===Ko&&t===Zo&&(n="LinearSRGBToLinearDisplayP3"),i){case _s:case Al:return[n,"LinearTransferOETF"];case oi:case Ph:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Yx(i.getShaderSource(e),a)}else return s}function Kx(i,e){let t=$x(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Zx(i,e){let t;switch(e){case pm:t="Linear";break;case mm:t="Reinhard";break;case gm:t="OptimizedCineon";break;case ym:t="ACESFilmic";break;case _m:t="AgX";break;case xm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Kr).join(`
`)}function jx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Kr).join(`
`)}function Qx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function e_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Kr(i){return i!==""}function zf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(t_,i_)}var n_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function i_(i,e){let t=Dt[e];if(t===void 0){let n=n_.get(e);if(n!==void 0)t=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jc(t)}var s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(i){return i.replace(s_,r_)}function r_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ys&&(e="SHADOWMAP_TYPE_VSM"),e}function o_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function c_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case fm:e="ENVMAP_BLENDING_MIX";break;case dm:e="ENVMAP_BLENDING_ADD";break}return e}function h_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function u_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=a_(t),d=o_(t),h=l_(t),p=c_(t),u=h_(t),m=t.isWebGL2?"":Jx(t),x=jx(t),M=Qx(r),y=s.createProgram(),g,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Kr).join(`
`),g.length>0&&(g+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Kr).join(`
`),S.length>0&&(S+=`
`)):(g=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),S=[m,Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ws?"#define TONE_MAPPING":"",t.toneMapping!==Ws?Dt.tonemapping_pars_fragment:"",t.toneMapping!==Ws?Zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Kx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Jc(a),a=zf(a,t),a=Vf(a,t),o=Jc(o),o=zf(o,t),o=Vf(o,t),a=Gf(a),o=Gf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let A=v+g+a,O=v+S+o,D=kf(s,s.VERTEX_SHADER,A),N=kf(s,s.FRAGMENT_SHADER,O);s.attachShader(y,D),s.attachShader(y,N),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function Q(X){if(i.debug.checkShaderErrors){let re=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(D).trim(),K=s.getShaderInfoLog(N).trim(),se=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,D,N);else{let V=Hf(s,D,"vertex"),Z=Hf(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+V+`
`+Z)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(B===""||K==="")&&(q=!1);q&&(X.diagnostics={runnable:se,programLog:re,vertexShader:{log:B,prefix:g},fragmentShader:{log:K,prefix:S}})}s.deleteShader(D),s.deleteShader(N),T=new Qr(s,y),C=e_(s,y)}let T;this.getUniforms=function(){return T===void 0&&Q(this),T};let C;this.getAttributes=function(){return C===void 0&&Q(this),C};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=s.getProgramParameter(y,Xx)),te},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=N,this}var f_=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qc(e),t.set(e,n)),n}},Qc=class{constructor(e){this.id=f_++,this.code=e,this.usedTimes=0}};function d_(i,e,t,n,s,r,a){let o=new Va,l=new jc,d=[],h=s.isWebGL2,p=s.logarithmicDepthBuffer,u=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return T===0?"uv":`uv${T}`}function y(T,C,te,X,re){let B=X.fog,K=re.geometry,se=T.isMeshStandardMaterial?X.environment:null,q=(T.isMeshStandardMaterial?t:e).get(T.envMap||se),V=q&&q.mapping===wl?q.image.height:null,Z=x[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ue=ce!==void 0?ce.length:0,be=0;K.morphAttributes.position!==void 0&&(be=1),K.morphAttributes.normal!==void 0&&(be=2),K.morphAttributes.color!==void 0&&(be=3);let ne,fe,Ae,Ce;if(Z){let jn=rs[Z];ne=jn.vertexShader,fe=jn.fragmentShader}else ne=T.vertexShader,fe=T.fragmentShader,l.update(T),Ae=l.getVertexShaderID(T),Ce=l.getFragmentShaderID(T);let Oe=i.getRenderTarget(),yt=re.isInstancedMesh===!0,lt=re.isBatchedMesh===!0,et=!!T.map,Se=!!T.matcap,J=!!q,Xt=!!T.aoMap,Ze=!!T.lightMap,Qe=!!T.bumpMap,Ge=!!T.normalMap,He=!!T.displacementMap,ft=!!T.emissiveMap,R=!!T.metalnessMap,E=!!T.roughnessMap,j=T.anisotropy>0,xe=T.clearcoat>0,_e=T.iridescence>0,oe=T.sheen>0,Ve=T.transmission>0,Pe=j&&!!T.anisotropyMap,Fe=xe&&!!T.clearcoatMap,Ie=xe&&!!T.clearcoatNormalMap,Tt=xe&&!!T.clearcoatRoughnessMap,Ee=_e&&!!T.iridescenceMap,Ot=_e&&!!T.iridescenceThicknessMap,Ut=oe&&!!T.sheenColorMap,dt=oe&&!!T.sheenRoughnessMap,ct=!!T.specularMap,Ye=!!T.specularColorMap,At=!!T.specularIntensityMap,Kt=Ve&&!!T.transmissionMap,kt=Ve&&!!T.thicknessMap,It=!!T.gradientMap,Le=!!T.alphaMap,H=T.alphaTest>0,Ne=!!T.alphaHash,Be=!!T.extensions,gt=!!K.attributes.uv1,pt=!!K.attributes.uv2,en=!!K.attributes.uv3,tn=Ws;return T.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(tn=i.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:fe,defines:T.defines,customVertexShaderID:Ae,customFragmentShaderID:Ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:lt,instancing:yt,instancingColor:yt&&re.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:_s,map:et,matcap:Se,envMap:J,envMapMode:J&&q.mapping,envMapCubeUVHeight:V,aoMap:Xt,lightMap:Ze,bumpMap:Qe,normalMap:Ge,displacementMap:u&&He,emissiveMap:ft,normalMapObjectSpace:Ge&&T.normalMapType===Im,normalMapTangentSpace:Ge&&T.normalMapType===vd,metalnessMap:R,roughnessMap:E,anisotropy:j,anisotropyMap:Pe,clearcoat:xe,clearcoatMap:Fe,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Tt,iridescence:_e,iridescenceMap:Ee,iridescenceThicknessMap:Ot,sheen:oe,sheenColorMap:Ut,sheenRoughnessMap:dt,specularMap:ct,specularColorMap:Ye,specularIntensityMap:At,transmission:Ve,transmissionMap:Kt,thicknessMap:kt,gradientMap:It,opaque:T.transparent===!1&&T.blending===Jr,alphaMap:Le,alphaTest:H,alphaHash:Ne,combine:T.combine,mapUv:et&&M(T.map.channel),aoMapUv:Xt&&M(T.aoMap.channel),lightMapUv:Ze&&M(T.lightMap.channel),bumpMapUv:Qe&&M(T.bumpMap.channel),normalMapUv:Ge&&M(T.normalMap.channel),displacementMapUv:He&&M(T.displacementMap.channel),emissiveMapUv:ft&&M(T.emissiveMap.channel),metalnessMapUv:R&&M(T.metalnessMap.channel),roughnessMapUv:E&&M(T.roughnessMap.channel),anisotropyMapUv:Pe&&M(T.anisotropyMap.channel),clearcoatMapUv:Fe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:dt&&M(T.sheenRoughnessMap.channel),specularMapUv:ct&&M(T.specularMap.channel),specularColorMapUv:Ye&&M(T.specularColorMap.channel),specularIntensityMapUv:At&&M(T.specularIntensityMap.channel),transmissionMapUv:Kt&&M(T.transmissionMap.channel),thicknessMapUv:kt&&M(T.thicknessMap.channel),alphaMapUv:Le&&M(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ge||j),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:gt,vertexUv2s:pt,vertexUv3s:en,pointsUvs:re.isPoints===!0&&!!K.attributes.uv&&(et||Le),fog:!!B,useFog:T.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:re.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:be,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&te.length>0,shadowMapType:i.shadowMap.type,toneMapping:tn,useLegacyLights:i._useLegacyLights,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&cn.getTransfer(T.map.colorSpace)===vn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ln,flipSided:T.side===bi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Be&&T.extensions.derivatives===!0,extensionFragDepth:Be&&T.extensions.fragDepth===!0,extensionDrawBuffers:Be&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Be&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Be&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){let C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(let te in T.defines)C.push(te),C.push(T.defines[te]);return T.isRawShaderMaterial===!1&&(S(C,T),v(C,T),C.push(i.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function S(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function v(T,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),T.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function A(T){let C=x[T.type],te;if(C){let X=rs[C];te=ng.clone(X.uniforms)}else te=T.uniforms;return te}function O(T,C){let te;for(let X=0,re=d.length;X<re;X++){let B=d[X];if(B.cacheKey===C){te=B,++te.usedTimes;break}}return te===void 0&&(te=new u_(i,C,T,r),d.push(te)),te}function D(T){if(--T.usedTimes===0){let C=d.indexOf(T);d[C]=d[d.length-1],d.pop(),T.destroy()}}function N(T){l.remove(T)}function Q(){l.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:O,releaseProgram:D,releaseShaderCache:N,programs:d,dispose:Q}}function p_(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function m_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p,u,m,x,M,y){let g=i[e];return g===void 0?(g={id:p.id,object:p,geometry:u,material:m,groupOrder:x,renderOrder:p.renderOrder,z:M,group:y},i[e]=g):(g.id=p.id,g.object=p,g.geometry=u,g.material=m,g.groupOrder=x,g.renderOrder=p.renderOrder,g.z=M,g.group=y),e++,g}function o(p,u,m,x,M,y){let g=a(p,u,m,x,M,y);m.transmission>0?n.push(g):m.transparent===!0?s.push(g):t.push(g)}function l(p,u,m,x,M,y){let g=a(p,u,m,x,M,y);m.transmission>0?n.unshift(g):m.transparent===!0?s.unshift(g):t.unshift(g)}function d(p,u){t.length>1&&t.sort(p||m_),n.length>1&&n.sort(u||Xf),s.length>1&&s.sort(u||Xf)}function h(){for(let p=e,u=i.length;p<u;p++){let m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:d}}function g_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new qf,i.set(n,[a])):s>=r.length?(a=new qf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function y_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new wt};break;case"SpotLight":t={position:new F,direction:new F,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function x_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var __=0;function v_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function M_(i,e){let t=new y_,n=x_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new Mn,o=new Mn;function l(h,p){let u=0,m=0,x=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let M=0,y=0,g=0,S=0,v=0,A=0,O=0,D=0,N=0,Q=0,T=0;h.sort(v_);let C=p===!0?Math.PI:1;for(let X=0,re=h.length;X<re;X++){let B=h[X],K=B.color,se=B.intensity,q=B.distance,V=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=K.r*se*C,m+=K.g*se*C,x+=K.b*se*C;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(B.sh.coefficients[Z],se);T++}else if(B.isDirectionalLight){let Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){let ce=B.shadow,ue=n.get(B);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,s.directionalShadow[M]=ue,s.directionalShadowMap[M]=V,s.directionalShadowMatrix[M]=B.shadow.matrix,A++}s.directional[M]=Z,M++}else if(B.isSpotLight){let Z=t.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(K).multiplyScalar(se*C),Z.distance=q,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,s.spot[g]=Z;let ce=B.shadow;if(B.map&&(s.spotLightMap[N]=B.map,N++,ce.updateMatrices(B),B.castShadow&&Q++),s.spotLightMatrix[g]=ce.matrix,B.castShadow){let ue=n.get(B);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,s.spotShadow[g]=ue,s.spotShadowMap[g]=V,D++}g++}else if(B.isRectAreaLight){let Z=t.get(B);Z.color.copy(K).multiplyScalar(se),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=Z,S++}else if(B.isPointLight){let Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*C),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){let ce=B.shadow,ue=n.get(B);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,ue.shadowCameraNear=ce.camera.near,ue.shadowCameraFar=ce.camera.far,s.pointShadow[y]=ue,s.pointShadowMap[y]=V,s.pointShadowMatrix[y]=B.shadow.matrix,O++}s.point[y]=Z,y++}else if(B.isHemisphereLight){let Z=t.get(B);Z.skyColor.copy(B.color).multiplyScalar(se*C),Z.groundColor.copy(B.groundColor).multiplyScalar(se*C),s.hemi[v]=Z,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=m,s.ambient[2]=x;let te=s.hash;(te.directionalLength!==M||te.pointLength!==y||te.spotLength!==g||te.rectAreaLength!==S||te.hemiLength!==v||te.numDirectionalShadows!==A||te.numPointShadows!==O||te.numSpotShadows!==D||te.numSpotMaps!==N||te.numLightProbes!==T)&&(s.directional.length=M,s.spot.length=g,s.rectArea.length=S,s.point.length=y,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+N-Q,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=Q,s.numLightProbes=T,te.directionalLength=M,te.pointLength=y,te.spotLength=g,te.rectAreaLength=S,te.hemiLength=v,te.numDirectionalShadows=A,te.numPointShadows=O,te.numSpotShadows=D,te.numSpotMaps=N,te.numLightProbes=T,s.version=__++)}function d(h,p){let u=0,m=0,x=0,M=0,y=0,g=p.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){let A=h[S];if(A.isDirectionalLight){let O=s.directional[u];O.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(g),u++}else if(A.isSpotLight){let O=s.spot[x];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(g),O.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(g),x++}else if(A.isRectAreaLight){let O=s.rectArea[M];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(g),o.identity(),a.copy(A.matrixWorld),a.premultiply(g),o.extractRotation(a),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){let O=s.point[m];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(g),m++}else if(A.isHemisphereLight){let O=s.hemi[y];O.direction.setFromMatrixPosition(A.matrixWorld),O.direction.transformDirection(g),y++}}}return{setup:l,setupView:d,state:s}}function Yf(i,e){let t=new M_(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(p){n.push(p)}function o(p){s.push(p)}function l(p){t.setup(n,p)}function d(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o}}function b_(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Yf(i,e),t.set(r,[l])):a>=o.length?(l=new Yf(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var eh=class extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},th=class extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
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
}`;function T_(i,e,t){let n=new Ga,s=new Xe,r=new Xe,a=new ei,o=new eh({depthPacking:Pm}),l=new th,d={},h=t.maxTextureSize,p={[qs]:bi,[bi]:qs,[Ln]:Ln},u=new bs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:S_,fragmentShader:E_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new ci;x.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new $e(x,u),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cd;let g=this.type;this.render=function(D,N,Q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;let T=i.getRenderTarget(),C=i.getActiveCubeFace(),te=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Gs),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let re=g!==ys&&this.type===ys,B=g===ys&&this.type!==ys;for(let K=0,se=D.length;K<se;K++){let q=D[K],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Z=V.getFrameExtents();if(s.multiply(Z),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,V.mapSize.y=r.y)),V.map===null||re===!0||B===!0){let ue=this.type!==ys?{minFilter:gi,magFilter:gi}:{};V.map!==null&&V.map.dispose(),V.map=new vs(s.x,s.y,ue),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ce=V.getViewportCount();for(let ue=0;ue<ce;ue++){let be=V.getViewport(ue);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),X.viewport(a),V.updateMatrices(q,ue),n=V.getFrustum(),A(N,Q,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===ys&&S(V,Q),V.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(T,C,te)};function S(D,N){let Q=e.update(M);u.defines.VSM_SAMPLES!==D.blurSamples&&(u.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new vs(s.x,s.y)),u.uniforms.shadow_pass.value=D.map.texture,u.uniforms.resolution.value=D.mapSize,u.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(N,null,Q,u,M,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(N,null,Q,m,M,null)}function v(D,N,Q,T){let C=null,te=Q.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(te!==void 0)C=te;else if(C=Q.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let X=C.uuid,re=N.uuid,B=d[X];B===void 0&&(B={},d[X]=B);let K=B[re];K===void 0&&(K=C.clone(),B[re]=K,N.addEventListener("dispose",O)),C=K}if(C.visible=N.visible,C.wireframe=N.wireframe,T===ys?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:p[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,Q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let X=i.properties.get(C);X.light=Q}return C}function A(D,N,Q,T,C){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===ys)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld);let re=e.update(D),B=D.material;if(Array.isArray(B)){let K=re.groups;for(let se=0,q=K.length;se<q;se++){let V=K[se],Z=B[V.materialIndex];if(Z&&Z.visible){let ce=v(D,Z,T,C);D.onBeforeShadow(i,D,N,Q,re,ce,V),i.renderBufferDirect(Q,null,re,ce,D,V),D.onAfterShadow(i,D,N,Q,re,ce,V)}}}else if(B.visible){let K=v(D,B,T,C);D.onBeforeShadow(i,D,N,Q,re,K,null),i.renderBufferDirect(Q,null,re,K,D,null),D.onAfterShadow(i,D,N,Q,re,K,null)}}let X=D.children;for(let re=0,B=X.length;re<B;re++)A(X[re],N,Q,T,C)}function O(D){D.target.removeEventListener("dispose",O);for(let Q in d){let T=d[Q],C=D.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function w_(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Ne=new ei,Be=null,gt=new ei(0,0,0,0);return{setMask:function(pt){Be!==pt&&!H&&(i.colorMask(pt,pt,pt,pt),Be=pt)},setLocked:function(pt){H=pt},setClear:function(pt,en,tn,Tn,jn){jn===!0&&(pt*=Tn,en*=Tn,tn*=Tn),Ne.set(pt,en,tn,Tn),gt.equals(Ne)===!1&&(i.clearColor(pt,en,tn,Tn),gt.copy(Ne))},reset:function(){H=!1,Be=null,gt.set(-1,0,0,0)}}}function r(){let H=!1,Ne=null,Be=null,gt=null;return{setTest:function(pt){pt?lt(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(pt){Ne!==pt&&!H&&(i.depthMask(pt),Ne=pt)},setFunc:function(pt){if(Be!==pt){switch(pt){case rm:i.depthFunc(i.NEVER);break;case am:i.depthFunc(i.ALWAYS);break;case om:i.depthFunc(i.LESS);break;case Xo:i.depthFunc(i.LEQUAL);break;case lm:i.depthFunc(i.EQUAL);break;case cm:i.depthFunc(i.GEQUAL);break;case hm:i.depthFunc(i.GREATER);break;case um:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Be=pt}},setLocked:function(pt){H=pt},setClear:function(pt){gt!==pt&&(i.clearDepth(pt),gt=pt)},reset:function(){H=!1,Ne=null,Be=null,gt=null}}}function a(){let H=!1,Ne=null,Be=null,gt=null,pt=null,en=null,tn=null,Tn=null,jn=null;return{setTest:function(an){H||(an?lt(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(an){Ne!==an&&!H&&(i.stencilMask(an),Ne=an)},setFunc:function(an,ni,Ei){(Be!==an||gt!==ni||pt!==Ei)&&(i.stencilFunc(an,ni,Ei),Be=an,gt=ni,pt=Ei)},setOp:function(an,ni,Ei){(en!==an||tn!==ni||Tn!==Ei)&&(i.stencilOp(an,ni,Ei),en=an,tn=ni,Tn=Ei)},setLocked:function(an){H=an},setClear:function(an){jn!==an&&(i.clearStencil(an),jn=an)},reset:function(){H=!1,Ne=null,Be=null,gt=null,pt=null,en=null,tn=null,Tn=null,jn=null}}}let o=new s,l=new r,d=new a,h=new WeakMap,p=new WeakMap,u={},m={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,O=null,D=null,N=null,Q=null,T=new wt(0,0,0),C=0,te=!1,X=null,re=null,B=null,K=null,se=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Z=0,ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ce)[1]),V=Z>=1):ce.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),V=Z>=2);let ue=null,be={},ne=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Ae=new ei().fromArray(ne),Ce=new ei().fromArray(fe);function Oe(H,Ne,Be,gt){let pt=new Uint8Array(4),en=i.createTexture();i.bindTexture(H,en),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tn=0;tn<Be;tn++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ne,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(Ne+tn,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return en}let yt={};yt[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(yt[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),d.setClear(0),lt(i.DEPTH_TEST),l.setFunc(Xo),ft(!1),R(Tu),lt(i.CULL_FACE),Ge(Gs);function lt(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function et(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Se(H,Ne){return m[H]!==Ne?(i.bindFramebuffer(H,Ne),m[H]=Ne,n&&(H===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ne),H===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ne)),!0):!1}function J(H,Ne){let Be=M,gt=!1;if(H)if(Be=x.get(Ne),Be===void 0&&(Be=[],x.set(Ne,Be)),H.isWebGLMultipleRenderTargets){let pt=H.texture;if(Be.length!==pt.length||Be[0]!==i.COLOR_ATTACHMENT0){for(let en=0,tn=pt.length;en<tn;en++)Be[en]=i.COLOR_ATTACHMENT0+en;Be.length=pt.length,gt=!0}}else Be[0]!==i.COLOR_ATTACHMENT0&&(Be[0]=i.COLOR_ATTACHMENT0,gt=!0);else Be[0]!==i.BACK&&(Be[0]=i.BACK,gt=!0);gt&&(t.isWebGL2?i.drawBuffers(Be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Be))}function Xt(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let Ze={[cr]:i.FUNC_ADD,[Wp]:i.FUNC_SUBTRACT,[Xp]:i.FUNC_REVERSE_SUBTRACT};if(n)Ze[Cu]=i.MIN,Ze[Pu]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(Ze[Cu]=H.MIN_EXT,Ze[Pu]=H.MAX_EXT)}let Qe={[qp]:i.ZERO,[Yp]:i.ONE,[$p]:i.SRC_COLOR,[Bc]:i.SRC_ALPHA,[em]:i.SRC_ALPHA_SATURATE,[jp]:i.DST_COLOR,[Zp]:i.DST_ALPHA,[Kp]:i.ONE_MINUS_SRC_COLOR,[Oc]:i.ONE_MINUS_SRC_ALPHA,[Qp]:i.ONE_MINUS_DST_COLOR,[Jp]:i.ONE_MINUS_DST_ALPHA,[tm]:i.CONSTANT_COLOR,[nm]:i.ONE_MINUS_CONSTANT_COLOR,[im]:i.CONSTANT_ALPHA,[sm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(H,Ne,Be,gt,pt,en,tn,Tn,jn,an){if(H===Gs){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(lt(i.BLEND),g=!0),H!==Gp){if(H!==S||an!==te){if((v!==cr||D!==cr)&&(i.blendEquation(i.FUNC_ADD),v=cr,D=cr),an)switch(H){case Jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wu:i.blendFunc(i.ONE,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ru:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ru:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,O=null,N=null,Q=null,T.set(0,0,0),C=0,S=H,te=an}return}pt=pt||Ne,en=en||Be,tn=tn||gt,(Ne!==v||pt!==D)&&(i.blendEquationSeparate(Ze[Ne],Ze[pt]),v=Ne,D=pt),(Be!==A||gt!==O||en!==N||tn!==Q)&&(i.blendFuncSeparate(Qe[Be],Qe[gt],Qe[en],Qe[tn]),A=Be,O=gt,N=en,Q=tn),(Tn.equals(T)===!1||jn!==C)&&(i.blendColor(Tn.r,Tn.g,Tn.b,jn),T.copy(Tn),C=jn),S=H,te=!1}function He(H,Ne){H.side===Ln?et(i.CULL_FACE):lt(i.CULL_FACE);let Be=H.side===bi;Ne&&(Be=!Be),ft(Be),H.blending===Jr&&H.transparent===!1?Ge(Gs):Ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),o.setMask(H.colorWrite);let gt=H.stencilWrite;d.setTest(gt),gt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),j(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(H){X!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),X=H)}function R(H){H!==zp?(lt(i.CULL_FACE),H!==re&&(H===Tu?i.cullFace(i.BACK):H===Vp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),re=H}function E(H){H!==B&&(V&&i.lineWidth(H),B=H)}function j(H,Ne,Be){H?(lt(i.POLYGON_OFFSET_FILL),(K!==Ne||se!==Be)&&(i.polygonOffset(Ne,Be),K=Ne,se=Be)):et(i.POLYGON_OFFSET_FILL)}function xe(H){H?lt(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function _e(H){H===void 0&&(H=i.TEXTURE0+q-1),ue!==H&&(i.activeTexture(H),ue=H)}function oe(H,Ne,Be){Be===void 0&&(ue===null?Be=i.TEXTURE0+q-1:Be=ue);let gt=be[Be];gt===void 0&&(gt={type:void 0,texture:void 0},be[Be]=gt),(gt.type!==H||gt.texture!==Ne)&&(ue!==Be&&(i.activeTexture(Be),ue=Be),i.bindTexture(H,Ne||yt[H]),gt.type=H,gt.texture=Ne)}function Ve(){let H=be[ue];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function At(H){Ae.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ae.copy(H))}function Kt(H){Ce.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Ce.copy(H))}function kt(H,Ne){let Be=p.get(Ne);Be===void 0&&(Be=new WeakMap,p.set(Ne,Be));let gt=Be.get(H);gt===void 0&&(gt=i.getUniformBlockIndex(Ne,H.name),Be.set(H,gt))}function It(H,Ne){let gt=p.get(Ne).get(H);h.get(Ne)!==gt&&(i.uniformBlockBinding(Ne,gt,H.__bindingPointIndex),h.set(Ne,gt))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ue=null,be={},m={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,O=null,D=null,N=null,Q=null,T=new wt(0,0,0),C=0,te=!1,X=null,re=null,B=null,K=null,se=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),d.reset()}return{buffers:{color:o,depth:l,stencil:d},enable:lt,disable:et,bindFramebuffer:Se,drawBuffers:J,useProgram:Xt,setBlending:Ge,setMaterial:He,setFlipSided:ft,setCullFace:R,setLineWidth:E,setPolygonOffset:j,setScissorTest:xe,activeTexture:_e,bindTexture:oe,unbindTexture:Ve,compressedTexImage2D:Pe,compressedTexImage3D:Fe,texImage2D:ct,texImage3D:Ye,updateUBOMapping:kt,uniformBlockBinding:It,texStorage2D:Ut,texStorage3D:dt,texSubImage2D:Ie,texSubImage3D:Tt,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ot,scissor:At,viewport:Kt,reset:Le}}function A_(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,p,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return m?new OffscreenCanvas(R,E):jo("canvas")}function M(R,E,j,xe){let _e=1;if((R.width>xe||R.height>xe)&&(_e=xe/Math.max(R.width,R.height)),_e<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let oe=E?Gc:Math.floor,Ve=oe(_e*R.width),Pe=oe(_e*R.height);p===void 0&&(p=x(Ve,Pe));let Fe=j?x(Ve,Pe):p;return Fe.width=Ve,Fe.height=Pe,Fe.getContext("2d").drawImage(R,0,0,Ve,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ve+"x"+Pe+")."),Fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return hf(R.width)&&hf(R.height)}function g(R){return o?!1:R.wrapS!==Ji||R.wrapT!==Ji||R.minFilter!==gi&&R.minFilter!==Fi}function S(R,E){return R.generateMipmaps&&E&&R.minFilter!==gi&&R.minFilter!==Fi}function v(R){i.generateMipmap(R)}function A(R,E,j,xe,_e=!1){if(o===!1)return E;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=E;if(E===i.RED&&(j===i.FLOAT&&(oe=i.R32F),j===i.HALF_FLOAT&&(oe=i.R16F),j===i.UNSIGNED_BYTE&&(oe=i.R8)),E===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(oe=i.R8UI),j===i.UNSIGNED_SHORT&&(oe=i.R16UI),j===i.UNSIGNED_INT&&(oe=i.R32UI),j===i.BYTE&&(oe=i.R8I),j===i.SHORT&&(oe=i.R16I),j===i.INT&&(oe=i.R32I)),E===i.RG&&(j===i.FLOAT&&(oe=i.RG32F),j===i.HALF_FLOAT&&(oe=i.RG16F),j===i.UNSIGNED_BYTE&&(oe=i.RG8)),E===i.RGBA){let Ve=_e?$o:cn.getTransfer(xe);j===i.FLOAT&&(oe=i.RGBA32F),j===i.HALF_FLOAT&&(oe=i.RGBA16F),j===i.UNSIGNED_BYTE&&(oe=Ve===vn?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function O(R,E,j){return S(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==gi&&R.minFilter!==Fi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function D(R){return R===gi||R===Iu||R===ec?i.NEAREST:i.LINEAR}function N(R){let E=R.target;E.removeEventListener("dispose",N),T(E),E.isVideoTexture&&h.delete(E)}function Q(R){let E=R.target;E.removeEventListener("dispose",Q),te(E)}function T(R){let E=n.get(R);if(E.__webglInit===void 0)return;let j=R.source,xe=u.get(j);if(xe){let _e=xe[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(R),Object.keys(xe).length===0&&u.delete(j)}n.remove(R)}function C(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let j=R.source,xe=u.get(j);delete xe[E.__cacheKey],a.memory.textures--}function te(R){let E=R.texture,j=n.get(R),xe=n.get(E);if(xe.__webglTexture!==void 0&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(j.__webglFramebuffer[_e]))for(let oe=0;oe<j.__webglFramebuffer[_e].length;oe++)i.deleteFramebuffer(j.__webglFramebuffer[_e][oe]);else i.deleteFramebuffer(j.__webglFramebuffer[_e]);j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer[_e])}else{if(Array.isArray(j.__webglFramebuffer))for(let _e=0;_e<j.__webglFramebuffer.length;_e++)i.deleteFramebuffer(j.__webglFramebuffer[_e]);else i.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&i.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let _e=0;_e<j.__webglColorRenderbuffer.length;_e++)j.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(j.__webglColorRenderbuffer[_e]);j.__webglDepthRenderbuffer&&i.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let _e=0,oe=E.length;_e<oe;_e++){let Ve=n.get(E[_e]);Ve.__webglTexture&&(i.deleteTexture(Ve.__webglTexture),a.memory.textures--),n.remove(E[_e])}n.remove(E),n.remove(R)}let X=0;function re(){X=0}function B(){let R=X;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),X+=1,R}function K(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function se(R,E){let j=n.get(R);if(R.isVideoTexture&&He(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){let xe=R.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(j,R,E);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+E)}function q(R,E){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Ae(j,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+E)}function V(R,E){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Ae(j,R,E);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+E)}function Z(R,E){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Ce(j,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+E)}let ce={[Fa]:i.REPEAT,[Ji]:i.CLAMP_TO_EDGE,[Hc]:i.MIRRORED_REPEAT},ue={[gi]:i.NEAREST,[Iu]:i.NEAREST_MIPMAP_NEAREST,[ec]:i.NEAREST_MIPMAP_LINEAR,[Fi]:i.LINEAR,[vm]:i.LINEAR_MIPMAP_NEAREST,[ka]:i.LINEAR_MIPMAP_LINEAR},be={[Lm]:i.NEVER,[Fm]:i.ALWAYS,[Dm]:i.LESS,[Md]:i.LEQUAL,[Um]:i.EQUAL,[Om]:i.GEQUAL,[Nm]:i.GREATER,[Bm]:i.NOTEQUAL};function ne(R,E,j){if(j?(i.texParameteri(R,i.TEXTURE_WRAP_S,ce[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ce[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ce[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ue[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ue[E.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Ji||E.wrapT!==Ji)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,D(E.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,D(E.minFilter)),E.minFilter!==gi&&E.minFilter!==Fi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===gi||E.minFilter!==ec&&E.minFilter!==ka||E.type===Vs&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ha&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(R,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function fe(R,E){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",N));let xe=E.source,_e=u.get(xe);_e===void 0&&(_e={},u.set(xe,_e));let oe=K(E);if(oe!==R.__cacheKey){_e[oe]===void 0&&(_e[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),_e[oe].usedTimes++;let Ve=_e[R.__cacheKey];Ve!==void 0&&(_e[R.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(E)),R.__cacheKey=oe,R.__webglTexture=_e[oe].texture}return j}function Ae(R,E,j){let xe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=i.TEXTURE_3D);let _e=fe(R,E),oe=E.source;t.bindTexture(xe,R.__webglTexture,i.TEXTURE0+j);let Ve=n.get(oe);if(oe.version!==Ve.__version||_e===!0){t.activeTexture(i.TEXTURE0+j);let Pe=cn.getPrimaries(cn.workingColorSpace),Fe=E.colorSpace===ki?null:cn.getPrimaries(E.colorSpace),Ie=E.colorSpace===ki||Pe===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Tt=g(E)&&y(E.image)===!1,Ee=M(E.image,Tt,!1,s.maxTextureSize);Ee=ft(E,Ee);let Ot=y(Ee)||o,Ut=r.convert(E.format,E.colorSpace),dt=r.convert(E.type),ct=A(E.internalFormat,Ut,dt,E.colorSpace,E.isVideoTexture);ne(xe,E,Ot);let Ye,At=E.mipmaps,Kt=o&&E.isVideoTexture!==!0&&ct!==xd,kt=Ve.__version===void 0||_e===!0,It=O(E,Ee,Ot);if(E.isDepthTexture)ct=i.DEPTH_COMPONENT,o?E.type===Vs?ct=i.DEPTH_COMPONENT32F:E.type===zs?ct=i.DEPTH_COMPONENT24:E.type===ur?ct=i.DEPTH24_STENCIL8:ct=i.DEPTH_COMPONENT16:E.type===Vs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===fr&&ct===i.DEPTH_COMPONENT&&E.type!==Ch&&E.type!==zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=zs,dt=r.convert(E.type)),E.format===na&&ct===i.DEPTH_COMPONENT&&(ct=i.DEPTH_STENCIL,E.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ur,dt=r.convert(E.type))),kt&&(Kt?t.texStorage2D(i.TEXTURE_2D,1,ct,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,ct,Ee.width,Ee.height,0,Ut,dt,null));else if(E.isDataTexture)if(At.length>0&&Ot){Kt&&kt&&t.texStorage2D(i.TEXTURE_2D,It,ct,At[0].width,At[0].height);for(let Le=0,H=At.length;Le<H;Le++)Ye=At[Le],Kt?t.texSubImage2D(i.TEXTURE_2D,Le,0,0,Ye.width,Ye.height,Ut,dt,Ye.data):t.texImage2D(i.TEXTURE_2D,Le,ct,Ye.width,Ye.height,0,Ut,dt,Ye.data);E.generateMipmaps=!1}else Kt?(kt&&t.texStorage2D(i.TEXTURE_2D,It,ct,Ee.width,Ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ut,dt,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,ct,Ee.width,Ee.height,0,Ut,dt,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Kt&&kt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,It,ct,At[0].width,At[0].height,Ee.depth);for(let Le=0,H=At.length;Le<H;Le++)Ye=At[Le],E.format!==ji?Ut!==null?Kt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,Ye.width,Ye.height,Ee.depth,Ut,Ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Le,ct,Ye.width,Ye.height,Ee.depth,0,Ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,Ye.width,Ye.height,Ee.depth,Ut,dt,Ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Le,ct,Ye.width,Ye.height,Ee.depth,0,Ut,dt,Ye.data)}else{Kt&&kt&&t.texStorage2D(i.TEXTURE_2D,It,ct,At[0].width,At[0].height);for(let Le=0,H=At.length;Le<H;Le++)Ye=At[Le],E.format!==ji?Ut!==null?Kt?t.compressedTexSubImage2D(i.TEXTURE_2D,Le,0,0,Ye.width,Ye.height,Ut,Ye.data):t.compressedTexImage2D(i.TEXTURE_2D,Le,ct,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?t.texSubImage2D(i.TEXTURE_2D,Le,0,0,Ye.width,Ye.height,Ut,dt,Ye.data):t.texImage2D(i.TEXTURE_2D,Le,ct,Ye.width,Ye.height,0,Ut,dt,Ye.data)}else if(E.isDataArrayTexture)Kt?(kt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,It,ct,Ee.width,Ee.height,Ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ut,dt,Ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,Ee.width,Ee.height,Ee.depth,0,Ut,dt,Ee.data);else if(E.isData3DTexture)Kt?(kt&&t.texStorage3D(i.TEXTURE_3D,It,ct,Ee.width,Ee.height,Ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ut,dt,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,ct,Ee.width,Ee.height,Ee.depth,0,Ut,dt,Ee.data);else if(E.isFramebufferTexture){if(kt)if(Kt)t.texStorage2D(i.TEXTURE_2D,It,ct,Ee.width,Ee.height);else{let Le=Ee.width,H=Ee.height;for(let Ne=0;Ne<It;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,ct,Le,H,0,Ut,dt,null),Le>>=1,H>>=1}}else if(At.length>0&&Ot){Kt&&kt&&t.texStorage2D(i.TEXTURE_2D,It,ct,At[0].width,At[0].height);for(let Le=0,H=At.length;Le<H;Le++)Ye=At[Le],Kt?t.texSubImage2D(i.TEXTURE_2D,Le,0,0,Ut,dt,Ye):t.texImage2D(i.TEXTURE_2D,Le,ct,Ut,dt,Ye);E.generateMipmaps=!1}else Kt?(kt&&t.texStorage2D(i.TEXTURE_2D,It,ct,Ee.width,Ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,dt,Ee)):t.texImage2D(i.TEXTURE_2D,0,ct,Ut,dt,Ee);S(E,Ot)&&v(xe),Ve.__version=oe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ce(R,E,j){if(E.image.length!==6)return;let xe=fe(R,E),_e=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+j);let oe=n.get(_e);if(_e.version!==oe.__version||xe===!0){t.activeTexture(i.TEXTURE0+j);let Ve=cn.getPrimaries(cn.workingColorSpace),Pe=E.colorSpace===ki?null:cn.getPrimaries(E.colorSpace),Fe=E.colorSpace===ki||Ve===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let Le=0;Le<6;Le++)!Ie&&!Tt?Ee[Le]=M(E.image[Le],!1,!0,s.maxCubemapSize):Ee[Le]=Tt?E.image[Le].image:E.image[Le],Ee[Le]=ft(E,Ee[Le]);let Ot=Ee[0],Ut=y(Ot)||o,dt=r.convert(E.format,E.colorSpace),ct=r.convert(E.type),Ye=A(E.internalFormat,dt,ct,E.colorSpace),At=o&&E.isVideoTexture!==!0,Kt=oe.__version===void 0||xe===!0,kt=O(E,Ot,Ut);ne(i.TEXTURE_CUBE_MAP,E,Ut);let It;if(Ie){At&&Kt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,kt,Ye,Ot.width,Ot.height);for(let Le=0;Le<6;Le++){It=Ee[Le].mipmaps;for(let H=0;H<It.length;H++){let Ne=It[H];E.format!==ji?dt!==null?At?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H,0,0,Ne.width,Ne.height,dt,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H,Ye,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H,0,0,Ne.width,Ne.height,dt,ct,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H,Ye,Ne.width,Ne.height,0,dt,ct,Ne.data)}}}else{It=E.mipmaps,At&&Kt&&(It.length>0&&kt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,kt,Ye,Ee[0].width,Ee[0].height));for(let Le=0;Le<6;Le++)if(Tt){At?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Ee[Le].width,Ee[Le].height,dt,ct,Ee[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ye,Ee[Le].width,Ee[Le].height,0,dt,ct,Ee[Le].data);for(let H=0;H<It.length;H++){let Be=It[H].image[Le].image;At?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H+1,0,0,Be.width,Be.height,dt,ct,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H+1,Ye,Be.width,Be.height,0,dt,ct,Be.data)}}else{At?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,dt,ct,Ee[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ye,dt,ct,Ee[Le]);for(let H=0;H<It.length;H++){let Ne=It[H];At?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H+1,0,0,dt,ct,Ne.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,H+1,Ye,dt,ct,Ne.image[Le])}}}S(E,Ut)&&v(i.TEXTURE_CUBE_MAP),oe.__version=_e.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Oe(R,E,j,xe,_e,oe){let Ve=r.convert(j.format,j.colorSpace),Pe=r.convert(j.type),Fe=A(j.internalFormat,Ve,Pe,j.colorSpace);if(!n.get(E).__hasExternalTextures){let Tt=Math.max(1,E.width>>oe),Ee=Math.max(1,E.height>>oe);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,oe,Fe,Tt,Ee,E.depth,0,Ve,Pe,null):t.texImage2D(_e,oe,Fe,Tt,Ee,0,Ve,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ge(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,_e,n.get(j).__webglTexture,0,Qe(E)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,_e,n.get(j).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(R,E,j){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let xe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(j||Ge(E)){let _e=E.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Vs?xe=i.DEPTH_COMPONENT32F:_e.type===zs&&(xe=i.DEPTH_COMPONENT24));let oe=Qe(E);Ge(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,xe,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,xe,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,xe,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){let xe=Qe(E);j&&Ge(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,E.width,E.height):Ge(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let xe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let _e=0;_e<xe.length;_e++){let oe=xe[_e],Ve=r.convert(oe.format,oe.colorSpace),Pe=r.convert(oe.type),Fe=A(oe.internalFormat,Ve,Pe,oe.colorSpace),Ie=Qe(E);j&&Ge(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Fe,E.width,E.height):Ge(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Fe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Fe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se(E.depthTexture,0);let xe=n.get(E.depthTexture).__webglTexture,_e=Qe(E);if(E.depthTexture.format===fr)Ge(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(E.depthTexture.format===na)Ge(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function et(R){let E=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");lt(E.__webglFramebuffer,R)}else if(j){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]=i.createRenderbuffer(),yt(E.__webglDepthbuffer[xe],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),yt(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(R,E,j){let xe=n.get(R);E!==void 0&&Oe(xe.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&et(R)}function J(R){let E=R.texture,j=n.get(R),xe=n.get(E);R.addEventListener("dispose",Q),R.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=E.version,a.memory.textures++);let _e=R.isWebGLCubeRenderTarget===!0,oe=R.isWebGLMultipleRenderTargets===!0,Ve=y(R)||o;if(_e){j.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Pe]=[];for(let Fe=0;Fe<E.mipmaps.length;Fe++)j.__webglFramebuffer[Pe][Fe]=i.createFramebuffer()}else j.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)j.__webglFramebuffer[Pe]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(oe)if(s.drawBuffers){let Pe=R.texture;for(let Fe=0,Ie=Pe.length;Fe<Ie;Fe++){let Tt=n.get(Pe[Fe]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ge(R)===!1){let Pe=oe?E:[E];j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Fe=0;Fe<Pe.length;Fe++){let Ie=Pe[Fe];j.__webglColorRenderbuffer[Fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Fe]);let Tt=r.convert(Ie.format,Ie.colorSpace),Ee=r.convert(Ie.type),Ot=A(Ie.internalFormat,Tt,Ee,Ie.colorSpace,R.isXRRenderTarget===!0),Ut=Qe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Ot,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,j.__webglColorRenderbuffer[Fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),ne(i.TEXTURE_CUBE_MAP,E,Ve);for(let Pe=0;Pe<6;Pe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)Oe(j.__webglFramebuffer[Pe][Fe],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Fe);else Oe(j.__webglFramebuffer[Pe],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);S(E,Ve)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let Pe=R.texture;for(let Fe=0,Ie=Pe.length;Fe<Ie;Fe++){let Tt=Pe[Fe],Ee=n.get(Tt);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),ne(i.TEXTURE_2D,Tt,Ve),Oe(j.__webglFramebuffer,R,Tt,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,0),S(Tt,Ve)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?Pe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,xe.__webglTexture),ne(Pe,E,Ve),o&&E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)Oe(j.__webglFramebuffer[Fe],R,E,i.COLOR_ATTACHMENT0,Pe,Fe);else Oe(j.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,Pe,0);S(E,Ve)&&v(Pe),t.unbindTexture()}R.depthBuffer&&et(R)}function Xt(R){let E=y(R)||o,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let xe=0,_e=j.length;xe<_e;xe++){let oe=j[xe];if(S(oe,E)){let Ve=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(oe).__webglTexture;t.bindTexture(Ve,Pe),v(Ve),t.unbindTexture()}}}function Ze(R){if(o&&R.samples>0&&Ge(R)===!1){let E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,xe=R.height,_e=i.COLOR_BUFFER_BIT,oe=[],Ve=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(R),Fe=R.isWebGLMultipleRenderTargets===!0;if(Fe)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){oe.push(i.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&oe.push(Ve);let Tt=Pe.__ignoreDepthValues!==void 0?Pe.__ignoreDepthValues:!1;if(Tt===!1&&(R.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]),Tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ve])),Fe){let Ee=n.get(E[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,j,xe,0,0,j,xe,_e,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Fe)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);let Tt=n.get(E[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}}function Qe(R){return Math.min(s.maxSamples,R.samples)}function Ge(R){let E=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function He(R){let E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function ft(R,E){let j=R.colorSpace,xe=R.format,_e=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===zc||j!==_s&&j!==ki&&(cn.getTransfer(j)===vn?o===!1?e.has("EXT_sRGB")===!0&&xe===ji?(R.format=zc,R.minFilter=Fi,R.generateMipmaps=!1):E=Qo.sRGBToLinear(E):(xe!==ji||_e!==Xs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}this.allocateTextureUnit=B,this.resetTextureUnits=re,this.setTexture2D=se,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Se,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Ge}function R_(i,e,t){let n=t.isWebGL2;function s(r,a=ki){let o,l=cn.getTransfer(a);if(r===Xs)return i.UNSIGNED_BYTE;if(r===dd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===pd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Mm)return i.BYTE;if(r===bm)return i.SHORT;if(r===Ch)return i.UNSIGNED_SHORT;if(r===fd)return i.INT;if(r===zs)return i.UNSIGNED_INT;if(r===Vs)return i.FLOAT;if(r===Ha)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Sm)return i.ALPHA;if(r===ji)return i.RGBA;if(r===Em)return i.LUMINANCE;if(r===Tm)return i.LUMINANCE_ALPHA;if(r===fr)return i.DEPTH_COMPONENT;if(r===na)return i.DEPTH_STENCIL;if(r===zc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===wm)return i.RED;if(r===md)return i.RED_INTEGER;if(r===Am)return i.RG;if(r===gd)return i.RG_INTEGER;if(r===yd)return i.RGBA_INTEGER;if(r===tc||r===nc||r===ic||r===sc)if(l===vn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===tc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===tc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ic)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lu||r===Du||r===Uu||r===Nu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Lu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Du)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bu||r===Ou)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Bu)return l===vn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ou)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fu||r===ku||r===Hu||r===zu||r===Vu||r===Gu||r===Wu||r===Xu||r===qu||r===Yu||r===$u||r===Ku||r===Zu||r===Ju)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Fu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ku)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$u)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ku)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zu)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ju)return l===vn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rc||r===ju||r===Qu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===rc)return l===vn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ju)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rm||r===ef||r===tf||r===nf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===rc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ef)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ur?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var nh=class extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Mi=class extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}},C_={type:"move"},Ua=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(let M of e.hand.values()){let y=t.getJointPose(M,n),g=this._getHandJoint(d,M);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let h=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,x=.005;d.inputState.pinching&&u>m+x?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=m-x&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(C_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ih=class extends Ys{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,d=null,h=null,p=null,u=null,m=null,x=null,M=t.getContextAttributes(),y=null,g=null,S=[],v=[],A=new Xe,O=null,D=new yi;D.layers.enable(1),D.viewport=new ei;let N=new yi;N.layers.enable(2),N.viewport=new ei;let Q=[D,N],T=new nh;T.layers.enable(1),T.layers.enable(2);let C=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=S[ne];return fe===void 0&&(fe=new Ua,S[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=S[ne];return fe===void 0&&(fe=new Ua,S[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=S[ne];return fe===void 0&&(fe=new Ua,S[ne]=fe),fe.getHandSpace()};function X(ne){let fe=v.indexOf(ne.inputSource);if(fe===-1)return;let Ae=S[fe];Ae!==void 0&&(Ae.update(ne.inputSource,ne.frame,d||a),Ae.dispatchEvent({type:ne.type,data:ne.inputSource}))}function re(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",B);for(let ne=0;ne<S.length;ne++){let fe=v[ne];fe!==null&&(v[ne]=null,S[ne].disconnect(fe))}C=null,te=null,e.setRenderTarget(y),m=null,u=null,p=null,s=null,g=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",re),s.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let fe={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new vs(m.framebufferWidth,m.framebufferHeight,{format:ji,type:Xs,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let fe=null,Ae=null,Ce=null;M.depth&&(Ce=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?na:fr,Ae=M.stencil?ur:zs);let Oe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};p=new XRWebGLBinding(s,t),u=p.createProjectionLayer(Oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),g=new vs(u.textureWidth,u.textureHeight,{format:ji,type:Xs,depthTexture:new ll(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});let yt=e.properties.get(g);yt.__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),d=null,a=await s.requestReferenceSpace(o),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(ne){for(let fe=0;fe<ne.removed.length;fe++){let Ae=ne.removed[fe],Ce=v.indexOf(Ae);Ce>=0&&(v[Ce]=null,S[Ce].disconnect(Ae))}for(let fe=0;fe<ne.added.length;fe++){let Ae=ne.added[fe],Ce=v.indexOf(Ae);if(Ce===-1){for(let yt=0;yt<S.length;yt++)if(yt>=v.length){v.push(Ae),Ce=yt;break}else if(v[yt]===null){v[yt]=Ae,Ce=yt;break}if(Ce===-1)break}let Oe=S[Ce];Oe&&Oe.connect(Ae)}}let K=new F,se=new F;function q(ne,fe,Ae){K.setFromMatrixPosition(fe.matrixWorld),se.setFromMatrixPosition(Ae.matrixWorld);let Ce=K.distanceTo(se),Oe=fe.projectionMatrix.elements,yt=Ae.projectionMatrix.elements,lt=Oe[14]/(Oe[10]-1),et=Oe[14]/(Oe[10]+1),Se=(Oe[9]+1)/Oe[5],J=(Oe[9]-1)/Oe[5],Xt=(Oe[8]-1)/Oe[0],Ze=(yt[8]+1)/yt[0],Qe=lt*Xt,Ge=lt*Ze,He=Ce/(-Xt+Ze),ft=He*-Xt;fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ft),ne.translateZ(He),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();let R=lt+He,E=et+He,j=Qe-ft,xe=Ge+(Ce-ft),_e=Se*et/E*R,oe=J*et/E*R;ne.projectionMatrix.makePerspective(j,xe,_e,oe,R,E),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function V(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;T.near=N.near=D.near=ne.near,T.far=N.far=D.far=ne.far,(C!==T.near||te!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,te=T.far);let fe=ne.parent,Ae=T.cameras;V(T,fe);for(let Ce=0;Ce<Ae.length;Ce++)V(Ae[Ce],fe);Ae.length===2?q(T,D,N):T.projectionMatrix.copy(D.projectionMatrix),Z(ne,T,fe)};function Z(ne,fe,Ae){Ae===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(Ae.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Vc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(ne){l=ne,u!==null&&(u.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)};let ce=null;function ue(ne,fe){if(h=fe.getViewerPose(d||a),x=fe,h!==null){let Ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let Ce=!1;Ae.length!==T.cameras.length&&(T.cameras.length=0,Ce=!0);for(let Oe=0;Oe<Ae.length;Oe++){let yt=Ae[Oe],lt=null;if(m!==null)lt=m.getViewport(yt);else{let Se=p.getViewSubImage(u,yt);lt=Se.viewport,Oe===0&&(e.setRenderTargetTextures(g,Se.colorTexture,u.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(g))}let et=Q[Oe];et===void 0&&(et=new yi,et.layers.enable(Oe),et.viewport=new ei,Q[Oe]=et),et.matrix.fromArray(yt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(yt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(lt.x,lt.y,lt.width,lt.height),Oe===0&&(T.matrix.copy(et.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ce===!0&&T.cameras.push(et)}}for(let Ae=0;Ae<S.length;Ae++){let Ce=v[Ae],Oe=S[Ae];Ce!==null&&Oe!==void 0&&Oe.update(Ce,fe,d||a)}ce&&ce(ne,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),x=null}let be=new Td;be.setAnimationLoop(ue),this.setAnimationLoop=function(ne){ce=ne},this.dispose=function(){}}};function P_(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,Ed(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,S,v,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(y,g):g.isMeshToonMaterial?(r(y,g),p(y,g)):g.isMeshPhongMaterial?(r(y,g),h(y,g)):g.isMeshStandardMaterial?(r(y,g),u(y,g),g.isMeshPhysicalMaterial&&m(y,g,A)):g.isMeshMatcapMaterial?(r(y,g),x(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),M(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(a(y,g),g.isLineDashedMaterial&&o(y,g)):g.isPointsMaterial?l(y,g,S,v):g.isSpriteMaterial?d(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===bi&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===bi&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let S=e.get(g).envMap;if(S&&(y.envMap.value=S,y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function a(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function o(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function l(y,g,S,v){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*S,y.scale.value=v*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function h(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function p(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function u(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function m(y,g,S){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bi&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,g){g.matcap&&(y.matcap.value=g.matcap)}function M(y,g){let S=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I_(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let A=v.program;n.uniformBlockBinding(S,A)}function d(S,v){let A=s[S.id];A===void 0&&(x(S),A=h(S),s[S.id]=A,S.addEventListener("dispose",y));let O=v.program;n.updateUBOMapping(S,O);let D=e.render.frame;r[S.id]!==D&&(u(S),r[S.id]=D)}function h(S){let v=p();S.__bindingPointIndex=v;let A=i.createBuffer(),O=S.__size,D=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,O,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let v=s[S.id],A=S.uniforms,O=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let D=0,N=A.length;D<N;D++){let Q=Array.isArray(A[D])?A[D]:[A[D]];for(let T=0,C=Q.length;T<C;T++){let te=Q[T];if(m(te,D,T,O)===!0){let X=te.__offset,re=Array.isArray(te.value)?te.value:[te.value],B=0;for(let K=0;K<re.length;K++){let se=re[K],q=M(se);typeof se=="number"||typeof se=="boolean"?(te.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,X+B,te.__data)):se.isMatrix3?(te.__data[0]=se.elements[0],te.__data[1]=se.elements[1],te.__data[2]=se.elements[2],te.__data[3]=0,te.__data[4]=se.elements[3],te.__data[5]=se.elements[4],te.__data[6]=se.elements[5],te.__data[7]=0,te.__data[8]=se.elements[6],te.__data[9]=se.elements[7],te.__data[10]=se.elements[8],te.__data[11]=0):(se.toArray(te.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,te.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,v,A,O){let D=S.value,N=v+"_"+A;if(O[N]===void 0)return typeof D=="number"||typeof D=="boolean"?O[N]=D:O[N]=D.clone(),!0;{let Q=O[N];if(typeof D=="number"||typeof D=="boolean"){if(Q!==D)return O[N]=D,!0}else if(Q.equals(D)===!1)return Q.copy(D),!0}return!1}function x(S){let v=S.uniforms,A=0,O=16;for(let N=0,Q=v.length;N<Q;N++){let T=Array.isArray(v[N])?v[N]:[v[N]];for(let C=0,te=T.length;C<te;C++){let X=T[C],re=Array.isArray(X.value)?X.value:[X.value];for(let B=0,K=re.length;B<K;B++){let se=re[B],q=M(se),V=A%O;V!==0&&O-V<q.boundary&&(A+=O-V),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=q.storage}}}let D=A%O;return D>0&&(A+=O-D),S.__size=A,S.__cache={},this}function M(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function y(S){let v=S.target;v.removeEventListener("dispose",y);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:d,dispose:g}}var Wa=class{constructor(e={}){let{canvas:t=Hm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let m=new Uint32Array(4),x=new Int32Array(4),M=null,y=null,g=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this._useLegacyLights=!1,this.toneMapping=Ws,this.toneMappingExposure=1;let v=this,A=!1,O=0,D=0,N=null,Q=-1,T=null,C=new ei,te=new ei,X=null,re=new wt(0),B=0,K=t.width,se=t.height,q=1,V=null,Z=null,ce=new ei(0,0,K,se),ue=new ei(0,0,K,se),be=!1,ne=new Ga,fe=!1,Ae=!1,Ce=null,Oe=new Mn,yt=new Xe,lt=new F,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return N===null?q:1}let J=n;function Xt(w,G){for(let $=0;$<w.length;$++){let W=w[$],Y=t.getContext(W,G);if(Y!==null)return Y}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ah}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),J===null){let G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),J=Xt(G,w),J===null)throw Xt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ze,Qe,Ge,He,ft,R,E,j,xe,_e,oe,Ve,Pe,Fe,Ie,Tt,Ee,Ot,Ut,dt,ct,Ye,At,Kt;function kt(){Ze=new Zy(J),Qe=new Wy(J,Ze,e),Ze.init(Qe),Ye=new R_(J,Ze,Qe),Ge=new w_(J,Ze,Qe),He=new Qy(J),ft=new p_,R=new A_(J,Ze,Ge,ft,Qe,Ye,He),E=new qy(v),j=new Ky(v),xe=new og(J,Qe),At=new Vy(J,Ze,xe,Qe),_e=new Jy(J,xe,He,At),oe=new ix(J,_e,xe,He),Ut=new nx(J,Qe,R),Tt=new Xy(ft),Ve=new d_(v,E,j,Ze,Qe,At,Tt),Pe=new P_(v,ft),Fe=new g_,Ie=new b_(Ze,Qe),Ot=new zy(v,E,j,Ge,oe,u,l),Ee=new T_(v,oe,Qe),Kt=new I_(J,He,Qe,Ge),dt=new Gy(J,Ze,He,Qe),ct=new jy(J,Ze,He,Qe),He.programs=Ve.programs,v.capabilities=Qe,v.extensions=Ze,v.properties=ft,v.renderLists=Fe,v.shadowMap=Ee,v.state=Ge,v.info=He}kt();let It=new ih(v,J);this.xr=It,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let w=Ze.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ze.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(K,se,!1))},this.getSize=function(w){return w.set(K,se)},this.setSize=function(w,G,$=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,se=G,t.width=Math.floor(w*q),t.height=Math.floor(G*q),$===!0&&(t.style.width=w+"px",t.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(K*q,se*q).floor()},this.setDrawingBufferSize=function(w,G,$){K=w,se=G,q=$,t.width=Math.floor(w*$),t.height=Math.floor(G*$),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,G,$,W){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,G,$,W),Ge.viewport(C.copy(ce).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,G,$,W){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,G,$,W),Ge.scissor(te.copy(ue).multiplyScalar(q).floor())},this.getScissorTest=function(){return be},this.setScissorTest=function(w){Ge.setScissorTest(be=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(w=!0,G=!0,$=!0){let W=0;if(w){let Y=!1;if(N!==null){let Ue=N.texture.format;Y=Ue===yd||Ue===gd||Ue===md}if(Y){let Ue=N.texture.type,qe=Ue===Xs||Ue===zs||Ue===Ch||Ue===ur||Ue===dd||Ue===pd,it=Ot.getClearColor(),ht=Ot.getClearAlpha(),Mt=it.r,Je=it.g,bt=it.b;qe?(m[0]=Mt,m[1]=Je,m[2]=bt,m[3]=ht,J.clearBufferuiv(J.COLOR,0,m)):(x[0]=Mt,x[1]=Je,x[2]=bt,x[3]=ht,J.clearBufferiv(J.COLOR,0,x))}else W|=J.COLOR_BUFFER_BIT}G&&(W|=J.DEPTH_BUFFER_BIT),$&&(W|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),Ie.dispose(),ft.dispose(),E.dispose(),j.dispose(),oe.dispose(),At.dispose(),Kt.dispose(),Ve.dispose(),It.dispose(),It.removeEventListener("sessionstart",jn),It.removeEventListener("sessionend",an),Ce&&(Ce.dispose(),Ce=null),ni.stop()};function Le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=He.autoReset,G=Ee.enabled,$=Ee.autoUpdate,W=Ee.needsUpdate,Y=Ee.type;kt(),He.autoReset=w,Ee.enabled=G,Ee.autoUpdate=$,Ee.needsUpdate=W,Ee.type=Y}function Ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Be(w){let G=w.target;G.removeEventListener("dispose",Be),gt(G)}function gt(w){pt(w),ft.remove(w)}function pt(w){let G=ft.get(w).programs;G!==void 0&&(G.forEach(function($){Ve.releaseProgram($)}),w.isShaderMaterial&&Ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,$,W,Y,Ue){G===null&&(G=et);let qe=Y.isMesh&&Y.matrixWorld.determinant()<0,it=_r(w,G,$,W,Y);Ge.setMaterial(W,qe);let ht=$.index,Mt=1;if(W.wireframe===!0){if(ht=_e.getWireframeAttribute($),ht===void 0)return;Mt=2}let Je=$.drawRange,bt=$.attributes.position,pn=Je.start*Mt,Bn=(Je.start+Je.count)*Mt;Ue!==null&&(pn=Math.max(pn,Ue.start*Mt),Bn=Math.min(Bn,(Ue.start+Ue.count)*Mt)),ht!==null?(pn=Math.max(pn,0),Bn=Math.min(Bn,ht.count)):bt!=null&&(pn=Math.max(pn,0),Bn=Math.min(Bn,bt.count));let On=Bn-pn;if(On<0||On===1/0)return;At.setup(Y,W,it,$,ht);let Gi,hn=dt;if(ht!==null&&(Gi=xe.get(ht),hn=ct,hn.setIndex(Gi)),Y.isMesh)W.wireframe===!0?(Ge.setLineWidth(W.wireframeLinewidth*Se()),hn.setMode(J.LINES)):hn.setMode(J.TRIANGLES);else if(Y.isLine){let _t=W.linewidth;_t===void 0&&(_t=1),Ge.setLineWidth(_t*Se()),Y.isLineSegments?hn.setMode(J.LINES):Y.isLineLoop?hn.setMode(J.LINE_LOOP):hn.setMode(J.LINE_STRIP)}else Y.isPoints?hn.setMode(J.POINTS):Y.isSprite&&hn.setMode(J.TRIANGLES);if(Y.isBatchedMesh)hn.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)hn.renderInstances(pn,On,Y.count);else if($.isInstancedBufferGeometry){let _t=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,vr=Math.min($.instanceCount,_t);hn.renderInstances(pn,On,vr)}else hn.render(pn,On)};function en(w,G,$){w.transparent===!0&&w.side===Ln&&w.forceSinglePass===!1?(w.side=bi,w.needsUpdate=!0,Rs(w,G,$),w.side=qs,w.needsUpdate=!0,Rs(w,G,$),w.side=Ln):Rs(w,G,$)}this.compile=function(w,G,$=null){$===null&&($=w),y=Ie.get($),y.init(),S.push(y),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),w!==$&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights(v._useLegacyLights);let W=new Set;return w.traverse(function(Y){let Ue=Y.material;if(Ue)if(Array.isArray(Ue))for(let qe=0;qe<Ue.length;qe++){let it=Ue[qe];en(it,$,Y),W.add(it)}else en(Ue,$,Y),W.add(Ue)}),S.pop(),y=null,W},this.compileAsync=function(w,G,$=null){let W=this.compile(w,G,$);return new Promise(Y=>{function Ue(){if(W.forEach(function(qe){ft.get(qe).currentProgram.isReady()&&W.delete(qe)}),W.size===0){Y(w);return}setTimeout(Ue,10)}Ze.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let tn=null;function Tn(w){tn&&tn(w)}function jn(){ni.stop()}function an(){ni.start()}let ni=new Td;ni.setAnimationLoop(Tn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(w){tn=w,It.setAnimationLoop(w),w===null?ni.stop():ni.start()},It.addEventListener("sessionstart",jn),It.addEventListener("sessionend",an),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(G),G=It.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,G,N),y=Ie.get(w,S.length),y.init(),S.push(y),Oe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ne.setFromProjectionMatrix(Oe),Ae=this.localClippingEnabled,fe=Tt.init(this.clippingPlanes,Ae),M=Fe.get(w,g.length),M.init(),g.push(M),Ei(w,G,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(V,Z),this.info.render.frame++,fe===!0&&Tt.beginShadows();let $=y.state.shadowsArray;if(Ee.render($,w,G),fe===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ot.render(M,w),y.setupLights(v._useLegacyLights),G.isArrayCamera){let W=G.cameras;for(let Y=0,Ue=W.length;Y<Ue;Y++){let qe=W[Y];xr(M,w,qe,qe.viewport)}}else xr(M,w,G);N!==null&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(v,w,G),At.resetDefaultState(),Q=-1,T=null,S.pop(),S.length>0?y=S[S.length-1]:y=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function Ei(w,G,$,W){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ne.intersectsSprite(w)){W&&lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Oe);let qe=oe.update(w),it=w.material;it.visible&&M.push(w,qe,it,$,lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ne.intersectsObject(w))){let qe=oe.update(w),it=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),lt.copy(w.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),lt.copy(qe.boundingSphere.center)),lt.applyMatrix4(w.matrixWorld).applyMatrix4(Oe)),Array.isArray(it)){let ht=qe.groups;for(let Mt=0,Je=ht.length;Mt<Je;Mt++){let bt=ht[Mt],pn=it[bt.materialIndex];pn&&pn.visible&&M.push(w,qe,pn,$,lt.z,bt)}}else it.visible&&M.push(w,qe,it,$,lt.z,null)}}let Ue=w.children;for(let qe=0,it=Ue.length;qe<it;qe++)Ei(Ue[qe],G,$,W)}function xr(w,G,$,W){let Y=w.opaque,Ue=w.transmissive,qe=w.transparent;y.setupLightsView($),fe===!0&&Tt.setGlobalState(v.clippingPlanes,$),Ue.length>0&&no(Y,Ue,G,$),W&&Ge.viewport(C.copy(W)),Y.length>0&&As(Y,G,$),Ue.length>0&&As(Ue,G,$),qe.length>0&&As(qe,G,$),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function no(w,G,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let Ue=Qe.isWebGL2;Ce===null&&(Ce=new vs(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")?Ha:Xs,minFilter:ka,samples:Ue?4:0})),v.getDrawingBufferSize(yt),Ue?Ce.setSize(yt.x,yt.y):Ce.setSize(Gc(yt.x),Gc(yt.y));let qe=v.getRenderTarget();v.setRenderTarget(Ce),v.getClearColor(re),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let it=v.toneMapping;v.toneMapping=Ws,As(w,$,W),R.updateMultisampleRenderTarget(Ce),R.updateRenderTargetMipmap(Ce);let ht=!1;for(let Mt=0,Je=G.length;Mt<Je;Mt++){let bt=G[Mt],pn=bt.object,Bn=bt.geometry,On=bt.material,Gi=bt.group;if(On.side===Ln&&pn.layers.test(W.layers)){let hn=On.side;On.side=bi,On.needsUpdate=!0,io(pn,$,W,Bn,On,Gi),On.side=hn,On.needsUpdate=!0,ht=!0}}ht===!0&&(R.updateMultisampleRenderTarget(Ce),R.updateRenderTargetMipmap(Ce)),v.setRenderTarget(qe),v.setClearColor(re,B),v.toneMapping=it}function As(w,G,$){let W=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,Ue=w.length;Y<Ue;Y++){let qe=w[Y],it=qe.object,ht=qe.geometry,Mt=W===null?qe.material:W,Je=qe.group;it.layers.test($.layers)&&io(it,G,$,ht,Mt,Je)}}function io(w,G,$,W,Y,Ue){w.onBeforeRender(v,G,$,W,Y,Ue),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(v,G,$,W,w,Ue),Y.transparent===!0&&Y.side===Ln&&Y.forceSinglePass===!1?(Y.side=bi,Y.needsUpdate=!0,v.renderBufferDirect($,G,W,Y,w,Ue),Y.side=qs,Y.needsUpdate=!0,v.renderBufferDirect($,G,W,Y,w,Ue),Y.side=Ln):v.renderBufferDirect($,G,W,Y,w,Ue),w.onAfterRender(v,G,$,W,Y,Ue)}function Rs(w,G,$){G.isScene!==!0&&(G=et);let W=ft.get(w),Y=y.state.lights,Ue=y.state.shadowsArray,qe=Y.state.version,it=Ve.getParameters(w,Y.state,Ue,G,$),ht=Ve.getProgramCacheKey(it),Mt=W.programs;W.environment=w.isMeshStandardMaterial?G.environment:null,W.fog=G.fog,W.envMap=(w.isMeshStandardMaterial?j:E).get(w.envMap||W.environment),Mt===void 0&&(w.addEventListener("dispose",Be),Mt=new Map,W.programs=Mt);let Je=Mt.get(ht);if(Je!==void 0){if(W.currentProgram===Je&&W.lightsStateVersion===qe)return da(w,it),Je}else it.uniforms=Ve.getUniforms(w),w.onBuild($,it,v),w.onBeforeCompile(it,v),Je=Ve.acquireProgram(it,ht),Mt.set(ht,Je),W.uniforms=it.uniforms;let bt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=Tt.uniform),da(w,it),W.needsLights=so(w),W.lightsStateVersion=qe,W.needsLights&&(bt.ambientLightColor.value=Y.state.ambient,bt.lightProbe.value=Y.state.probe,bt.directionalLights.value=Y.state.directional,bt.directionalLightShadows.value=Y.state.directionalShadow,bt.spotLights.value=Y.state.spot,bt.spotLightShadows.value=Y.state.spotShadow,bt.rectAreaLights.value=Y.state.rectArea,bt.ltc_1.value=Y.state.rectAreaLTC1,bt.ltc_2.value=Y.state.rectAreaLTC2,bt.pointLights.value=Y.state.point,bt.pointLightShadows.value=Y.state.pointShadow,bt.hemisphereLights.value=Y.state.hemi,bt.directionalShadowMap.value=Y.state.directionalShadowMap,bt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,bt.spotShadowMap.value=Y.state.spotShadowMap,bt.spotLightMatrix.value=Y.state.spotLightMatrix,bt.spotLightMap.value=Y.state.spotLightMap,bt.pointShadowMap.value=Y.state.pointShadowMap,bt.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.currentProgram=Je,W.uniformsList=null,Je}function fa(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=Qr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function da(w,G){let $=ft.get(w);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function _r(w,G,$,W,Y){G.isScene!==!0&&(G=et),R.resetTextureUnits();let Ue=G.fog,qe=W.isMeshStandardMaterial?G.environment:null,it=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:_s,ht=(W.isMeshStandardMaterial?j:E).get(W.envMap||qe),Mt=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Je=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),bt=!!$.morphAttributes.position,pn=!!$.morphAttributes.normal,Bn=!!$.morphAttributes.color,On=Ws;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(On=v.toneMapping);let Gi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,hn=Gi!==void 0?Gi.length:0,_t=ft.get(W),vr=y.state.lights;if(fe===!0&&(Ae===!0||w!==T)){let ut=w===T&&W.id===Q;Tt.setState(W,w,ut)}let un=!1;W.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==vr.state.version||_t.outputColorSpace!==it||Y.isBatchedMesh&&_t.batching===!1||!Y.isBatchedMesh&&_t.batching===!0||Y.isInstancedMesh&&_t.instancing===!1||!Y.isInstancedMesh&&_t.instancing===!0||Y.isSkinnedMesh&&_t.skinning===!1||!Y.isSkinnedMesh&&_t.skinning===!0||Y.isInstancedMesh&&_t.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&_t.instancingColor===!1&&Y.instanceColor!==null||_t.envMap!==ht||W.fog===!0&&_t.fog!==Ue||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==Tt.numPlanes||_t.numIntersection!==Tt.numIntersection)||_t.vertexAlphas!==Mt||_t.vertexTangents!==Je||_t.morphTargets!==bt||_t.morphNormals!==pn||_t.morphColors!==Bn||_t.toneMapping!==On||Qe.isWebGL2===!0&&_t.morphTargetsCount!==hn)&&(un=!0):(un=!0,_t.__version=W.version);let Ii=_t.currentProgram;un===!0&&(Ii=Rs(W,G,Y));let ii=!1,Li=!1,qn=!1,wn=Ii.getUniforms(),Ti=_t.uniforms;if(Ge.useProgram(Ii.program)&&(ii=!0,Li=!0,qn=!0),W.id!==Q&&(Q=W.id,Li=!0),ii||T!==w){wn.setValue(J,"projectionMatrix",w.projectionMatrix),wn.setValue(J,"viewMatrix",w.matrixWorldInverse);let ut=wn.map.cameraPosition;ut!==void 0&&ut.setValue(J,lt.setFromMatrixPosition(w.matrixWorld)),Qe.logarithmicDepthBuffer&&wn.setValue(J,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wn.setValue(J,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Li=!0,qn=!0)}if(Y.isSkinnedMesh){wn.setOptional(J,Y,"bindMatrix"),wn.setOptional(J,Y,"bindMatrixInverse");let ut=Y.skeleton;ut&&(Qe.floatVertexTextures?(ut.boneTexture===null&&ut.computeBoneTexture(),wn.setValue(J,"boneTexture",ut.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(wn.setOptional(J,Y,"batchingTexture"),wn.setValue(J,"batchingTexture",Y._matricesTexture,R));let ot=$.morphAttributes;if((ot.position!==void 0||ot.normal!==void 0||ot.color!==void 0&&Qe.isWebGL2===!0)&&Ut.update(Y,$,Ii),(Li||_t.receiveShadow!==Y.receiveShadow)&&(_t.receiveShadow=Y.receiveShadow,wn.setValue(J,"receiveShadow",Y.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ti.envMap.value=ht,Ti.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),Li&&(wn.setValue(J,"toneMappingExposure",v.toneMappingExposure),_t.needsLights&&pa(Ti,qn),Ue&&W.fog===!0&&Pe.refreshFogUniforms(Ti,Ue),Pe.refreshMaterialUniforms(Ti,W,q,se,Ce),Qr.upload(J,fa(_t),Ti,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qr.upload(J,fa(_t),Ti,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wn.setValue(J,"center",Y.center),wn.setValue(J,"modelViewMatrix",Y.modelViewMatrix),wn.setValue(J,"normalMatrix",Y.normalMatrix),wn.setValue(J,"modelMatrix",Y.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let ut=W.uniformsGroups;for(let Wi=0,An=ut.length;Wi<An;Wi++)if(Qe.isWebGL2){let Rn=ut[Wi];Kt.update(Rn,Ii),Kt.bind(Rn,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function pa(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function so(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,G,$){ft.get(w.texture).__webglTexture=G,ft.get(w.depthTexture).__webglTexture=$;let W=ft.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=$===void 0,W.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,G){let $=ft.get(w);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,$=0){N=w,O=G,D=$;let W=!0,Y=null,Ue=!1,qe=!1;if(w){let ht=ft.get(w);ht.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(J.FRAMEBUFFER,null),W=!1):ht.__webglFramebuffer===void 0?R.setupRenderTarget(w):ht.__hasExternalTextures&&R.rebindTextures(w,ft.get(w.texture).__webglTexture,ft.get(w.depthTexture).__webglTexture);let Mt=w.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(qe=!0);let Je=ft.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?Y=Je[G][$]:Y=Je[G],Ue=!0):Qe.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?Y=ft.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[$]:Y=Je,C.copy(w.viewport),te.copy(w.scissor),X=w.scissorTest}else C.copy(ce).multiplyScalar(q).floor(),te.copy(ue).multiplyScalar(q).floor(),X=be;if(Ge.bindFramebuffer(J.FRAMEBUFFER,Y)&&Qe.drawBuffers&&W&&Ge.drawBuffers(w,Y),Ge.viewport(C),Ge.scissor(te),Ge.setScissorTest(X),Ue){let ht=ft.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+G,ht.__webglTexture,$)}else if(qe){let ht=ft.get(w.texture),Mt=G||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,ht.__webglTexture,$||0,Mt)}Q=-1},this.readRenderTargetPixels=function(w,G,$,W,Y,Ue,qe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qe!==void 0&&(it=it[qe]),it){Ge.bindFramebuffer(J.FRAMEBUFFER,it);try{let ht=w.texture,Mt=ht.format,Je=ht.type;if(Mt!==ji&&Ye.convert(Mt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let bt=Je===Ha&&(Ze.has("EXT_color_buffer_half_float")||Qe.isWebGL2&&Ze.has("EXT_color_buffer_float"));if(Je!==Xs&&Ye.convert(Je)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===Vs&&(Qe.isWebGL2||Ze.has("OES_texture_float")||Ze.has("WEBGL_color_buffer_float")))&&!bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-W&&$>=0&&$<=w.height-Y&&J.readPixels(G,$,W,Y,Ye.convert(Mt),Ye.convert(Je),Ue)}finally{let ht=N!==null?ft.get(N).__webglFramebuffer:null;Ge.bindFramebuffer(J.FRAMEBUFFER,ht)}}},this.copyFramebufferToTexture=function(w,G,$=0){let W=Math.pow(2,-$),Y=Math.floor(G.image.width*W),Ue=Math.floor(G.image.height*W);R.setTexture2D(G,0),J.copyTexSubImage2D(J.TEXTURE_2D,$,0,0,w.x,w.y,Y,Ue),Ge.unbindTexture()},this.copyTextureToTexture=function(w,G,$,W=0){let Y=G.image.width,Ue=G.image.height,qe=Ye.convert($.format),it=Ye.convert($.type);R.setTexture2D($,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,$.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,$.unpackAlignment),G.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,W,w.x,w.y,Y,Ue,qe,it,G.image.data):G.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,W,w.x,w.y,G.mipmaps[0].width,G.mipmaps[0].height,qe,G.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,W,w.x,w.y,qe,it,G.image),W===0&&$.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(w,G,$,W,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ue=w.max.x-w.min.x+1,qe=w.max.y-w.min.y+1,it=w.max.z-w.min.z+1,ht=Ye.convert(W.format),Mt=Ye.convert(W.type),Je;if(W.isData3DTexture)R.setTexture3D(W,0),Je=J.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),Je=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,W.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,W.unpackAlignment);let bt=J.getParameter(J.UNPACK_ROW_LENGTH),pn=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Bn=J.getParameter(J.UNPACK_SKIP_PIXELS),On=J.getParameter(J.UNPACK_SKIP_ROWS),Gi=J.getParameter(J.UNPACK_SKIP_IMAGES),hn=$.isCompressedTexture?$.mipmaps[Y]:$.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,hn.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,hn.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,w.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,w.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,w.min.z),$.isDataTexture||$.isData3DTexture?J.texSubImage3D(Je,Y,G.x,G.y,G.z,Ue,qe,it,ht,Mt,hn.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Je,Y,G.x,G.y,G.z,Ue,qe,it,ht,hn.data)):J.texSubImage3D(Je,Y,G.x,G.y,G.z,Ue,qe,it,ht,Mt,hn),J.pixelStorei(J.UNPACK_ROW_LENGTH,bt),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,pn),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Bn),J.pixelStorei(J.UNPACK_SKIP_ROWS,On),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Gi),Y===0&&W.generateMipmaps&&J.generateMipmap(Je),Ge.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Ge.unbindTexture()},this.resetState=function(){O=0,D=0,N=null,Ge.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ph?"display-p3":"srgb",t.unpackColorSpace=cn.workingColorSpace===Al?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===oi?dr:_d}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===dr?oi:_s}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},sh=class extends Wa{};sh.prototype.isWebGL1Renderer=!0;var cl=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hl=class extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Xa=class extends ti{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qr=new Mn,$f=new Mn,ko=[],Kf=new Ms,L_=new Mn,Ia=new $e,La=new $s,ul=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,L_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ms),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),Kf.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(Kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $s),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),La.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qr),$f.multiplyMatrices(n,qr),Ia.matrixWorld=$f,Ia.raycast(e,ko);for(let a=0,o=ko.length;a<o;a++){let l=ko[a];l.instanceId=r,l.object=this,t.push(l)}ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var qa=class extends Ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zf=new F,Jf=new F,jf=new Mn,Ic=new za,Ho=new $s,rh=class extends li{constructor(e=new ci,t=new qa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Zf.fromBufferAttribute(t,s-1),Jf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zf.distanceTo(Jf);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;jf.copy(s).invert(),Ic.copy(e.ray).applyMatrix4(jf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=new F,h=new F,p=new F,u=new F,m=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){let g=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=m){let O=x.getX(v),D=x.getX(v+1);if(d.fromBufferAttribute(y,O),h.fromBufferAttribute(y,D),Ic.distanceSqToSegment(d,h,u,p)>l)continue;u.applyMatrix4(this.matrixWorld);let Q=e.ray.origin.distanceTo(u);Q<e.near||Q>e.far||t.push({distance:Q,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,a.start),S=Math.min(y.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=m){if(d.fromBufferAttribute(y,v),h.fromBufferAttribute(y,v+1),Ic.distanceSqToSegment(d,h,u,p)>l)continue;u.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(u);D<e.near||D>e.far||t.push({distance:D,point:p.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Qf=new F,ed=new F,fl=class extends rh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Qf.fromBufferAttribute(t,s),ed.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qf.distanceTo(ed);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var dl=class extends Hi{constructor(e,t,n,s,r,a,o,l,d){super(e,t,n,s,r,a,o,l,d),this.isCanvasTexture=!0,this.needsUpdate=!0}},zi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,d;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),d=n[s]-a,d<0)o=s+1;else if(d>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(a-h)/u;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Xe:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new Mn;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new F)}r[0]=new F,a[0]=new F;let d=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=d&&(d=h,n.set(1,0,0)),p<=d&&(d=p,n.set(0,1,0)),u<=d&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(di(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,x))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(di(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ya=class extends zi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Xe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),d=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,m=d-this.aY;l=u*h-m*p+this.aX,d=u*p+m*h+this.aY}return n.set(l,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ah=class extends Ya{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Lh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,d){s(a,o,d*(o-r),d*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,d,h,p){let u=(a-r)/d-(o-r)/(d+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,m*=h,s(a,o,u,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var zo=new F,Lc=new Lh,Dc=new Lh,Uc=new Lh,oh=class extends zi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let d,h;this.closed||o>0?d=s[(o-1)%r]:(zo.subVectors(s[0],s[1]).add(s[0]),d=zo);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(d.distanceToSquared(p),m),M=Math.pow(p.distanceToSquared(u),m),y=Math.pow(u.distanceToSquared(h),m);M<1e-4&&(M=1),x<1e-4&&(x=M),y<1e-4&&(y=M),Lc.initNonuniformCatmullRom(d.x,p.x,u.x,h.x,x,M,y),Dc.initNonuniformCatmullRom(d.y,p.y,u.y,h.y,x,M,y),Uc.initNonuniformCatmullRom(d.z,p.z,u.z,h.z,x,M,y)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(d.x,p.x,u.x,h.x,this.tension),Dc.initCatmullRom(d.y,p.y,u.y,h.y,this.tension),Uc.initCatmullRom(d.z,p.z,u.z,h.z,this.tension));return n.set(Lc.calc(l),Dc.calc(l),Uc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function td(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function D_(i,e){let t=1-i;return t*t*e}function U_(i,e){return 2*(1-i)*i*e}function N_(i,e){return i*i*e}function Na(i,e,t,n){return D_(i,e)+U_(i,t)+N_(i,n)}function B_(i,e){let t=1-i;return t*t*t*e}function O_(i,e){let t=1-i;return 3*t*t*i*e}function F_(i,e){return 3*(1-i)*i*i*e}function k_(i,e){return i*i*i*e}function Ba(i,e,t,n,s){return B_(i,e)+O_(i,t)+F_(i,n)+k_(i,s)}var pl=class extends zi{constructor(e=new Xe,t=new Xe,n=new Xe,s=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Xe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ba(e,s.x,r.x,a.x,o.x),Ba(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lh=class extends zi{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ba(e,s.x,r.x,a.x,o.x),Ba(e,s.y,r.y,a.y,o.y),Ba(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ml=class extends zi{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ch=class extends zi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends zi{constructor(e=new Xe,t=new Xe,n=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Xe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Na(e,s.x,r.x,a.x),Na(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hh=class extends zi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Na(e,s.x,r.x,a.x),Na(e,s.y,r.y,a.y),Na(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],d=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(td(o,l.x,d.x,h.x,p.x),td(o,l.y,d.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Xe().fromArray(s))}return this}},nd=Object.freeze({__proto__:null,ArcCurve:ah,CatmullRomCurve3:oh,CubicBezierCurve:pl,CubicBezierCurve3:lh,EllipseCurve:Ya,LineCurve:ml,LineCurve3:ch,QuadraticBezierCurve:gl,QuadraticBezierCurve3:hh,SplineCurve:yl}),uh=class extends zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),d=l===0?0:1-a/l;return o.getPointAt(d,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let d=0;d<l.length;d++){let h=l[d];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new nd[s.type]().fromJSON(s))}return this}},ra=class extends uh{constructor(e){super(),this.type="Path",this.currentPoint=new Xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ml(this.currentPoint.clone(),new Xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new gl(this.currentPoint.clone(),new Xe(e,t),new Xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new pl(this.currentPoint.clone(),new Xe(e,t),new Xe(n,s),new Xe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new yl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let d=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+d,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let d=new Ya(e,t,n,s,r,a,o,l);if(this.curves.length>0){let p=d.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(d);let h=d.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Zs=class i extends ci{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let d=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],m=[],x=0,M=[],y=n/2,g=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(m,2));function S(){let A=new F,O=new F,D=0,N=(t-e)/n;for(let Q=0;Q<=r;Q++){let T=[],C=Q/r,te=C*(t-e)+e;for(let X=0;X<=s;X++){let re=X/s,B=re*l+o,K=Math.sin(B),se=Math.cos(B);O.x=te*K,O.y=-C*n+y,O.z=te*se,p.push(O.x,O.y,O.z),A.set(K,N,se).normalize(),u.push(A.x,A.y,A.z),m.push(re,1-C),T.push(x++)}M.push(T)}for(let Q=0;Q<s;Q++)for(let T=0;T<r;T++){let C=M[T][Q],te=M[T+1][Q],X=M[T+1][Q+1],re=M[T][Q+1];h.push(C,te,re),h.push(te,X,re),D+=6}d.addGroup(g,D,0),g+=D}function v(A){let O=x,D=new Xe,N=new F,Q=0,T=A===!0?e:t,C=A===!0?1:-1;for(let X=1;X<=s;X++)p.push(0,y*C,0),u.push(0,C,0),m.push(.5,.5),x++;let te=x;for(let X=0;X<=s;X++){let B=X/s*l+o,K=Math.cos(B),se=Math.sin(B);N.x=T*se,N.y=y*C,N.z=T*K,p.push(N.x,N.y,N.z),u.push(0,C,0),D.x=K*.5+.5,D.y=se*.5*C+.5,m.push(D.x,D.y),x++}for(let X=0;X<s;X++){let re=O+X,B=te+X;A===!0?h.push(B,B+1,re):h.push(B+1,B,re),Q+=3}d.addGroup(g,Q,A===!0?1:2),g+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ci=class i extends Zs{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xl=class i extends ci{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),d(n),h(),this.setAttribute("position",new dn(r,3)),this.setAttribute("normal",new dn(r.slice(),3)),this.setAttribute("uv",new dn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new F,A=new F,O=new F;for(let D=0;D<t.length;D+=3)m(t[D+0],v),m(t[D+1],A),m(t[D+2],O),l(v,A,O,S)}function l(S,v,A,O){let D=O+1,N=[];for(let Q=0;Q<=D;Q++){N[Q]=[];let T=S.clone().lerp(A,Q/D),C=v.clone().lerp(A,Q/D),te=D-Q;for(let X=0;X<=te;X++)X===0&&Q===D?N[Q][X]=T:N[Q][X]=T.clone().lerp(C,X/te)}for(let Q=0;Q<D;Q++)for(let T=0;T<2*(D-Q)-1;T++){let C=Math.floor(T/2);T%2===0?(u(N[Q][C+1]),u(N[Q+1][C]),u(N[Q][C])):(u(N[Q][C+1]),u(N[Q+1][C+1]),u(N[Q+1][C]))}}function d(S){let v=new F;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(S),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function h(){let S=new F;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let A=y(S)/2/Math.PI+.5,O=g(S)/Math.PI+.5;a.push(A,1-O)}x(),p()}function p(){for(let S=0;S<a.length;S+=6){let v=a[S+0],A=a[S+2],O=a[S+4],D=Math.max(v,A,O),N=Math.min(v,A,O);D>.9&&N<.1&&(v<.2&&(a[S+0]+=1),A<.2&&(a[S+2]+=1),O<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function m(S,v){let A=S*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function x(){let S=new F,v=new F,A=new F,O=new F,D=new Xe,N=new Xe,Q=new Xe;for(let T=0,C=0;T<r.length;T+=9,C+=6){S.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),A.set(r[T+6],r[T+7],r[T+8]),D.set(a[C+0],a[C+1]),N.set(a[C+2],a[C+3]),Q.set(a[C+4],a[C+5]),O.copy(S).add(v).add(A).divideScalar(3);let te=y(O);M(D,C+0,S,te),M(N,C+2,v,te),M(Q,C+4,A,te)}}function M(S,v,A,O){O<0&&S.x===1&&(a[v]=S.x-1),A.x===0&&A.z===0&&(a[v]=O/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},_l=class i extends xl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var aa=class extends ra{constructor(e){super(e),this.uuid=la(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ra().fromJSON(s))}return this}},H_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Id(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,d,h,p,u,m;if(n&&(r=X_(i,e,r,t)),i.length>80*t){o=d=i[0],l=h=i[1];for(let x=t;x<s;x+=t)p=i[x],u=i[x+1],p<o&&(o=p),u<l&&(l=u),p>d&&(d=p),u>h&&(h=u);m=Math.max(d-o,h-l),m=m!==0?32767/m:0}return $a(r,a,t,o,l,m,0),a}};function Id(i,e,t,n,s){let r,a;if(s===nv(i,e,t,n)>0)for(r=e;r<t;r+=n)a=id(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=id(r,i[r],i[r+1],a);return a&&Cl(a,a.next)&&(Za(a),a=a.next),a}function pr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cl(t,t.next)||Dn(t.prev,t,t.next)===0)){if(Za(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $a(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Z_(i,n,s,r);let o=i,l,d;for(;i.prev!==i.next;){if(l=i.prev,d=i.next,r?V_(i,n,s,r):z_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(d.i/t|0),Za(i),i=d.next,o=d.next;continue}if(i=d,i===o){a?a===1?(i=G_(pr(i),e,t),$a(i,e,t,n,s,r,2)):a===2&&W_(i,e,t,n,s,r):$a(pr(i),e,t,n,s,r,1);break}}}function z_(i){let e=i.prev,t=i,n=i.next;if(Dn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,d=n.y,h=s<r?s<a?s:a:r<a?r:a,p=o<l?o<d?o:d:l<d?l:d,u=s>r?s>a?s:a:r>a?r:a,m=o>l?o>d?o:d:l>d?l:d,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=p&&x.y<=m&&Zr(s,o,r,l,a,d,x.x,x.y)&&Dn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function V_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dn(s,r,a)>=0)return!1;let o=s.x,l=r.x,d=a.x,h=s.y,p=r.y,u=a.y,m=o<l?o<d?o:d:l<d?l:d,x=h<p?h<u?h:u:p<u?p:u,M=o>l?o>d?o:d:l>d?l:d,y=h>p?h>u?h:u:p>u?p:u,g=fh(m,x,e,t,n),S=fh(M,y,e,t,n),v=i.prevZ,A=i.nextZ;for(;v&&v.z>=g&&A&&A.z<=S;){if(v.x>=m&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Zr(o,h,l,p,d,u,v.x,v.y)&&Dn(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=m&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Zr(o,h,l,p,d,u,A.x,A.y)&&Dn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=g;){if(v.x>=m&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Zr(o,h,l,p,d,u,v.x,v.y)&&Dn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=S;){if(A.x>=m&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Zr(o,h,l,p,d,u,A.x,A.y)&&Dn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function G_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Cl(s,r)&&Ld(s,n,n.next,r)&&Ka(s,r)&&Ka(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Za(n),Za(n.next),n=i=r),n=n.next}while(n!==i);return pr(n)}function W_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Q_(a,o)){let l=Dd(a,o);a=pr(a,a.next),l=pr(l,l.next),$a(a,e,t,n,s,r,0),$a(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function X_(i,e,t,n){let s=[],r,a,o,l,d;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,d=Id(i,o,l,n,!1),d===d.next&&(d.steiner=!0),s.push(j_(d));for(s.sort(q_),r=0;r<s.length;r++)t=Y_(s[r],t);return t}function q_(i,e){return i.x-e.x}function Y_(i,e){let t=$_(i,e);if(!t)return e;let n=Dd(t,i);return pr(n,n.next),pr(t,t.next)}function $_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,d=s.y,h=1/0,p;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Zr(a<d?r:n,a,l,d,a<d?n:r,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(r-t.x),Ka(t,i)&&(p<h||p===h&&(t.x>s.x||t.x===s.x&&K_(s,t)))&&(s=t,h=p)),t=t.next;while(t!==o);return s}function K_(i,e){return Dn(i.prev,i,e.prev)<0&&Dn(e.next,i,i.next)<0}function Z_(i,e,t,n){let s=i;do s.z===0&&(s.z=fh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,J_(s)}function J_(i){let e,t,n,s,r,a,o,l,d=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<d&&(o++,n=n.nextZ,!!n);e++);for(l=d;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,d*=2}while(a>1);return i}function fh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function j_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Zr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Q_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ev(i,e)&&(Ka(i,e)&&Ka(e,i)&&tv(i,e)&&(Dn(i.prev,i,e.prev)||Dn(i,e.prev,e))||Cl(i,e)&&Dn(i.prev,i,i.next)>0&&Dn(e.prev,e,e.next)>0)}function Dn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cl(i,e){return i.x===e.x&&i.y===e.y}function Ld(i,e,t,n){let s=Go(Dn(i,e,t)),r=Go(Dn(i,e,n)),a=Go(Dn(t,n,i)),o=Go(Dn(t,n,e));return!!(s!==r&&a!==o||s===0&&Vo(i,t,e)||r===0&&Vo(i,n,e)||a===0&&Vo(t,i,n)||o===0&&Vo(t,e,n))}function Vo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Go(i){return i>0?1:i<0?-1:0}function ev(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ld(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ka(i,e){return Dn(i.prev,i,i.next)<0?Dn(i,e,i.next)>=0&&Dn(i,i.prev,e)>=0:Dn(i,e,i.prev)<0||Dn(i,i.next,e)<0}function tv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Dd(i,e){let t=new dh(i.i,i.x,i.y),n=new dh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function id(i,e,t,n){let s=new dh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Za(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nv(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Oa=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];sd(e),rd(n,e);let a=e.length;t.forEach(sd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,rd(n,t[l]);let o=H_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function sd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function rd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var vl=class i extends xl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ja=class i extends ci{constructor(e=new aa([new Xe(0,.5),new Xe(-.5,-.5),new Xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)d(e);else for(let h=0;h<e.length;h++)d(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new dn(s,3)),this.setAttribute("normal",new dn(r,3)),this.setAttribute("uv",new dn(a,2));function d(h){let p=s.length/3,u=h.extractPoints(t),m=u.shape,x=u.holes;Oa.isClockWise(m)===!1&&(m=m.reverse());for(let y=0,g=x.length;y<g;y++){let S=x[y];Oa.isClockWise(S)===!0&&(x[y]=S.reverse())}let M=Oa.triangulateShape(m,x);for(let y=0,g=x.length;y<g;y++){let S=x[y];m=m.concat(S)}for(let y=0,g=m.length;y<g;y++){let S=m[y];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let y=0,g=M.length;y<g;y++){let S=M[y],v=S[0]+p,A=S[1]+p,O=S[2]+p;n.push(v,A,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return iv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function iv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ls=class i extends ci{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),d=0,h=[],p=new F,u=new F,m=[],x=[],M=[],y=[];for(let g=0;g<=n;g++){let S=[],v=g/n,A=0;g===0&&a===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let O=0;O<=t;O++){let D=O/t;p.x=-e*Math.cos(s+D*r)*Math.sin(a+v*o),p.y=e*Math.cos(a+v*o),p.z=e*Math.sin(s+D*r)*Math.sin(a+v*o),x.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),y.push(D+A,1-v),S.push(d++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let v=h[g][S+1],A=h[g][S],O=h[g+1][S],D=h[g+1][S+1];(g!==0||a>0)&&m.push(v,A,D),(g!==n-1||l<Math.PI)&&m.push(A,O,D)}this.setIndex(m),this.setAttribute("position",new dn(x,3)),this.setAttribute("normal",new dn(M,3)),this.setAttribute("uv",new dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ml=class i extends ci{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],d=[],h=new F,p=new F,u=new F;for(let m=0;m<=n;m++)for(let x=0;x<=s;x++){let M=x/s*r,y=m/n*Math.PI*2;p.x=(e+t*Math.cos(y))*Math.cos(M),p.y=(e+t*Math.cos(y))*Math.sin(M),p.z=t*Math.sin(y),o.push(p.x,p.y,p.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),u.subVectors(p,h).normalize(),l.push(u.x,u.y,u.z),d.push(x/s),d.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=s;x++){let M=(s+1)*m+x-1,y=(s+1)*(m-1)+x-1,g=(s+1)*(m-1)+x,S=(s+1)*m+x;a.push(M,y,S),a.push(y,g,S)}this.setIndex(a),this.setAttribute("position",new dn(o,3)),this.setAttribute("normal",new dn(l,3)),this.setAttribute("uv",new dn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Wn=class extends Ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Wo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var oa=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ph=class extends oa{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sf,endingEnd:sf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rf:r=e,o=2*t-n;break;case af:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rf:a=e,l=2*n-t;break;case af:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let d=(n-t)*.5,h=this.valueSize;this._weightPrev=d/(t-o),this._weightNext=d/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,d=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),M=x*x,y=M*x,g=-u*y+2*u*M-u*x,S=(1+u)*y+(-1.5-2*u)*M+(-.5+u)*x+1,v=(-1-m)*y+(1.5+m)*M+.5*x,A=m*y-m*M;for(let O=0;O!==o;++O)r[O]=g*a[h+O]+S*a[d+O]+v*a[l+O]+A*a[p+O];return r}},mh=class extends oa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,d=l-o,h=(n-t)/(s-t),p=1-h;for(let u=0;u!==o;++u)r[u]=a[d+u]*p+a[l+u]*h;return r}},gh=class extends oa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ph(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qo:t=this.InterpolantFactoryMethodDiscrete;break;case Yo:t=this.InterpolantFactoryMethodLinear;break;case ac:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qo;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&sv(s))for(let o=0,l=s.length;o!==l;++o){let d=s[o];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,d),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ac,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,d=e[o],h=e[o+1];if(d!==h&&(o!==1||d!==e[0]))if(s)l=!0;else{let p=o*n,u=p-n,m=p+n;for(let x=0;x!==n;++x){let M=t[p+x];if(M!==t[u+x]||M!==t[m+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[p+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,d=0;d!==n;++d)t[l+d]=t[o+d];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qi.prototype.TimeBufferType=Float32Array;Qi.prototype.ValueBufferType=Float32Array;Qi.prototype.DefaultInterpolation=Yo;var mr=class extends Qi{};mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=qo;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var yh=class extends Qi{};yh.prototype.ValueTypeName="color";var xh=class extends Qi{};xh.prototype.ValueTypeName="number";var _h=class extends oa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),d=e*o;for(let h=d+o;d!==h;d+=4)as.slerpFlat(r,0,a,d-o,a,d,l);return r}},ja=class extends Qi{InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}};ja.prototype.ValueTypeName="quaternion";ja.prototype.DefaultInterpolation=Yo;ja.prototype.InterpolantFactoryMethodSmooth=void 0;var gr=class extends Qi{};gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=qo;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends Qi{};vh.prototype.ValueTypeName="vector";var Mh=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return d.push(h,p),this},this.removeHandler=function(h){let p=d.indexOf(h);return p!==-1&&d.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=d.length;p<u;p+=2){let m=d[p],x=d[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},rv=new Mh,bh=class{constructor(e){this.manager=e!==void 0?e:rv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bh.DEFAULT_MATERIAL_NAME="__DEFAULT";var bl=class extends li{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Nc=new Mn,ad=new F,od=new F,Sh=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ei(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),Nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Eh=class extends Sh{constructor(){super(new al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sl=class extends bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(li.DEFAULT_UP),this.updateMatrix(),this.target=new li,this.shadow=new Eh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},El=class extends bl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Dh="\\[\\]\\.:\\/",av=new RegExp("["+Dh+"]","g"),Uh="[^"+Dh+"]",ov="[^"+Dh.replace("\\.","")+"]",lv=/((?:WC+[\/:])*)/.source.replace("WC",Uh),cv=/(WCOD+)?/.source.replace("WCOD",ov),hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uh),uv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uh),fv=new RegExp("^"+lv+cv+hv+uv+"$"),dv=["material","materials","bones","map"],Th=class{constructor(e,t,n){let s=n||En.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},En=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(av,"")}static parseTrackName(e){let t=fv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);dv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===d){d=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}let a=e[s];if(a===void 0){let d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};En.Composite=Th;En.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};En.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};En.prototype.GetterByBindingType=[En.prototype._getValue_direct,En.prototype._getValue_array,En.prototype._getValue_arrayElement,En.prototype._getValue_toArray];En.prototype.SetterByBindingTypeAndVersioning=[[En.prototype._setValue_direct,En.prototype._setValue_direct_setNeedsUpdate,En.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[En.prototype._setValue_array,En.prototype._setValue_array_setNeedsUpdate,En.prototype._setValue_array_setMatrixWorldNeedsUpdate],[En.prototype._setValue_arrayElement,En.prototype._setValue_arrayElement_setNeedsUpdate,En.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[En.prototype._setValue_fromArray,En.prototype._setValue_fromArray_setNeedsUpdate,En.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ov=new Float32Array(1);var Tl=class{constructor(e,t,n=0,s=1/0){this.ray=new za(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return wh(e,this,n,t),n.sort(ld),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)wh(e[s],this,n,t);return n.sort(ld),n}};function ld(i,e){return i.distance-e.distance}function wh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)wh(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);function Qa(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ci,d=0;for(let h=0;h<i.length;++h){let p=i[h],u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in p.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(p.attributes[m]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in p.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(p.morphAttributes[m])}if(e){let m;if(t)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(d,m,h),d+=m}}if(t){let h=0,p=[];for(let u=0;u<i.length;++u){let m=i[u].index;for(let x=0;x<m.count;++x)p.push(m.getX(x)+h);h+=i[u].attributes.position.count}l.setIndex(p)}for(let h in r){let p=Ud(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<p;++u){let m=[];for(let M=0;M<a[h].length;++M)m.push(a[h][M][u]);let x=Ud(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Ud(i){let e,t,n,s=-1,r=0;for(let d=0;d<i.length;++d){let h=i[d];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let d=0;d<i.length;++d)a.set(i[d].array,o),o+=i[d].array.length;let l=new ti(a,t,n);return s!==void 0&&(l.gpuType=s),l}var Nh=35,Bh=25,Oh=.29,tt=.95,Jn=.35,Ss=200,Pi=7,Js=300,Ts=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function mv(i){let e=typeof i=="string"?gv(i):i>>>0;return function(){e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t=(t^t>>>7)>>>0,t/4294967296}}function gv(i){let e=0;for(let t=0;t<i.length;t++)e=Math.imul(31,e)+i.charCodeAt(t),e=e>>>0;return e}var yv=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],Vd=[],xv={tank:["knight","berserker","werewolf","ghoul","barbarian"],melee:["samurai","assassin","ninja","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist","oracle"],ranged:["ranger","amazon","hunter","alchemist","cannibal"],caster:["mage","witch","vampire","necromancer","shaman"]},eo={tank:2,melee:2,support:1,ranged:1,caster:1},Fh={};for(let[i,e]of Object.entries(xv))for(let t of e)Fh[t]=i;function _v(i){let e=Math.max(1,i),t=Object.keys(eo),n=t.reduce((l,d)=>l+(eo[d]??0),0),s={},r=0;for(let l of t){let d=Math.floor(e*(eo[l]??0)/n);s[l]=d,r+=d}let a=e-r,o=[...t].sort((l,d)=>s[l]!==s[d]?s[l]-s[d]:(eo[d]??0)-(eo[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var nt={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Si=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist","vampire","necromancer","barbarian","cannibal","shaman","oracle","amazon"];Vd=[...Si];function vv(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Xn={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:14,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:16,maxHp:16,mp:22,maxMp:22,str:3,agi:3,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:24,maxHp:24,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:23,maxHp:23,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:8},assassin:{name:"Assassin",gender:"female",hp:20,maxHp:20,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:1,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:21,maxHp:21,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:12,agi:8,vit:16,dex:8,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:6,maxMp:6,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:6,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:25,maxHp:25,mp:8,maxMp:8,str:13,agi:8,vit:12,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:10,dex:5,luk:8,int:11,range:5},vampire:{name:"Vampire",gender:"female",hp:18,maxHp:18,mp:16,maxMp:16,str:10,agi:12,vit:3,dex:4,luk:3,int:12,range:1},necromancer:{name:"Necromancer",gender:"male",hp:20,maxHp:20,mp:20,maxMp:20,str:4,agi:4,vit:7,dex:3,luk:11,int:15,range:1},barbarian:{name:"Barbarian",gender:"male",hp:40,maxHp:40,mp:4,maxMp:4,str:16,agi:4,vit:15,dex:6,luk:3,int:2,range:1},cannibal:{name:"Cannibal",gender:"male",hp:22,maxHp:22,mp:7,maxMp:7,str:6,agi:11,vit:2,dex:13,luk:9,int:7,range:4},shaman:{name:"Shaman",gender:"female",hp:17,maxHp:17,mp:21,maxMp:21,str:4,agi:3,vit:3,dex:3,luk:16,int:16,range:4},oracle:{name:"Oracle",gender:"female",hp:19,maxHp:19,mp:19,maxMp:19,str:5,agi:7,vit:4,dex:10,luk:14,int:10,range:3},amazon:{name:"Amazon",gender:"female",hp:23,maxHp:23,mp:5,maxMp:5,str:11,agi:9,vit:11,dex:7,luk:4,int:3,range:3}},Mv=["hp","maxHp","mp","str","agi","vit","dex","luk","int"],Gd={};for(let i of Si){let e=Xn[i];if(!e)continue;let t=Mv.map(s=>e[s]??0),n=t.reduce((s,r)=>s+r,0)/t.length;Gd[i]=t.reduce((s,r)=>s+(r-n)**2,0)/t.length}var js={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331},vampire:{primary:16704468,secondary:16704468,hair:1250066,cape:1250066,apron:1250066},necromancer:{primary:405028,secondary:405028,hair:7434350,cape:405028,belt:11372065},barbarian:{primary:11497041,secondary:6045747,hair:6045747,belt:11098894,skin:11497041},cannibal:{primary:11497041,secondary:8421504,hair:6045747,cape:16753920,belt:16753920,skin:11497041},shaman:{primary:3224389,secondary:4349324,hair:32896,cape:5152741,horns:16775930},oracle:{primary:16775930,secondary:16775930,hair:6045747,cape:16777215,belt:15712004,horns:15712004},amazon:{primary:11497041,secondary:11497041,hair:0,cape:331790,belt:0,horns:0,skin:11497041,apron:331790}},ha={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp",vampire:"https://files.idyllic.app/files/static/2567599?width=256&optimizer=image",necromancer:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k",barbarian:"https://image.lexica.art/full_jpg/dd171d51-f518-4ae9-949b-23f5d7a157be",cannibal:"https://i.pinimg.com/736x/de/57/d1/de57d1e7aa4dd2d8f052d48b06831cbd.jpg",shaman:"https://w0.peakpx.com/wallpaper/350/203/HD-wallpaper-guy-shaman-skull-horns-anime-art-green-thumbnail.jpg",oracle:"https://images.stockcake.com/public/a/3/d/a3d08448-237f-4c23-8660-43b615c9e3c9_large/desert-oracle-enchantress-stockcake.jpg",amazon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnWAK4nkfgm8v-Ab35e3lkKOPOGTJzprr1w&s"},cs=Si.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function bv(i,e){if(!i||i.summonedBy==null||!Array.isArray(e))return i;let t=e.find(n=>n.id===i.summonedBy);return t??i}function Sv(i,e,t){if(!Ts)return;let s=bv(i,t)?.class;if(Si.includes(s)&&cs[s]&&cs[s].kills++,e?.summonedBy!=null)return;let r=e?.class;Si.includes(r)&&cs[r]&&cs[r].deaths++}function Ev(i,e){if(!Ts)return;for(let n of i)!n||!cs[n.class]||(cs[n.class].battles++,e!=null&&(n.player===e?cs[n.class].wins++:cs[n.class].losses++));let t=Si.map(n=>{let s=cs[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var ua={knight:[{name:"Brave",description:"Gain +1 STR and +1 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:6,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:3,target:"enemy",range:6,level:2,effectKey:"manaDrain",type:"spell"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:3,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:6,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:4,level:1,effectKey:"hex",type:"spell"},{name:"Drain",description:"Deal INT-based damage to HP and MP and heal self.",cost:8,target:"enemy",range:4,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:1,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement",type:"spell"}],exorcist:[{name:"Sanctuary",description:"Gain +1 ALL stats for both ally and self for 3 turns.",cost:4,target:"ally",range:4,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:4,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}],vampire:[{name:"Gaze",description:"Steal AGI and VIT by 1 for 3 turns",cost:5,target:"enemy",range:4,level:1,effectKey:"gaze",type:"spell"},{name:"Blood Suck",description:"Absorb enemy HP based on your MP",cost:7,target:"enemy",range:1,level:3,effectKey:"bloodSuck"}],necromancer:[{name:"Debilitate",description:"Steal target's 3 HP and 3 VIT for 2 turns",cost:5,target:"enemy",range:5,level:1,effectKey:"debilitate",type:"spell"},{name:"Reanimate",description:"Resurrect dead unit to your control",cost:12,target:"self",range:0,level:2,effectKey:"reanimate"}],barbarian:[{name:"War Cry",description:"Gain VIT and LUK based on lost HP",cost:2,target:"self",range:0,level:1,effectKey:"warCry"},{name:"Bash",description:"Reduce target's AGI to 0 for 2 turns",cost:4,target:"enemy",range:1,level:2,effectKey:"bash"}],cannibal:[{name:"Gnaw",description:"Deal STR based damage to heal self",cost:3,target:"enemy",range:1,level:2,effectKey:"gnaw"},{name:"Infect",description:"Poison enemy for 3 turns",cost:4,target:"enemy",range:6,level:3,effectKey:"infect"}],shaman:[{name:"Vodoo",description:"Mirror damage for 2 turns",cost:4,target:"enemy",range:5,level:1,effectKey:"vodoo",type:"spell"},{name:"Malediction",description:"Deal INT+LUK-based damage to ALL stats for 2 turns",cost:6,target:"enemy",range:6,level:2,effectKey:"malediction",type:"spell"}],oracle:[{name:"Foresight",description:"Gain INT and DEX based on INT for 2 turns",cost:4,target:"ally",range:6,level:1,effectKey:"foresight"},{name:"Overheal",description:"Heal ally for 2 turns",cost:7,target:"ally",range:6,level:2,effectKey:"overheal"}],amazon:[{name:"Skewer",description:"Deal DEX-based damage to AGI for 2 turns ",cost:4,target:"enemy",range:3,level:2,effectKey:"skewer"},{name:"Rapid",description:"Double attack for 1 turn",cost:6,target:"self",range:0,level:3,effectKey:"rapid"}]};function ve(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function Vi(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0,r=String(t);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}var Tv={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"},Nd=new Map;function wv(i){let e=Nd.get(i);return e!==void 0||(e=Tv[i]??i.replace(/([A-Z])/g," $1").replace(/^./,t=>t.toUpperCase()).trim(),Nd.set(i,e)),e}function Wd(i,e,t){if(!i||e<=0)return;let n=t&&t.units;if(!n||!n.length)return;let s=i.tempBuff;if(!s||s.vodoo==null||s.duration!=null&&s.duration<=0)return;let r=i.id;for(let a=0;a<n.length;a++){let o=n[a];if(!(!o||o.hp<=0||o.id===r)&&s.vodoo===o.id){let l=t.handleUnitDeath||t.vodooMirrorDeath;o.hp=Math.max(0,o.hp-e),console.log("[DEBUFF]",`vodoo: ${e} to ${o.name}`),t.showFloatingCombatText&&t.showFloatingCombatText(o.x,o.y,String(e),!1,"vodoo"),t.updateUnitSlashVisibility&&t.updateUnitSlashVisibility(o),o.hp<=0&&l&&l(o,i);break}}}function to(i,e,t,n){let s=e,r=t,a=wv(i);n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,a,!1,"skill-name");let o=a,l=r?`${r.name} (${r.class}, P${r.player})`:"self",d=null,h=(u,m,x,M)=>{if(x)u.hp=Math.min(u.maxHp,u.hp+m),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${m}`,!1,"heal");else{let y=u===s,g=!0;if(!y&&!M){let S=ve(u,"agi")*.7+ve(u,"luk")*.3;g=Math.random()*Math.max(.001,S)<=ve(s,"dex")}return g?(u.hp=Math.max(0,u.hp-m),u!==s&&(d=m),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(m),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),Wd(u,m,n),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u,s)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),g}},p=(u,m,x,M)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,m,x,!1,M?"buff":"debuff")};switch(i){case"brave":s.tempBuff={str:1,vit:1,duration:3},p(s.x,s.y,"+1 STR, +1 VIT",!0);break;case"dominate":{if(!r)break;let u=2,m=1;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,r.vit=Math.max(1,(r.vit||0)-m),s.vit=(s.vit||0)+m,p(r.x,r.y,`-${u} STR and -${m} VIT`,!1),p(s.x,s.y,`+${u} STR and +${m} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(ve(s,"int")*.9-(ve(r,"int")*.4+ve(r,"luk")*.3)));h(r,u,!1,!0)}break;case"manaDrain":if(r){let u=Math.max(1,Math.floor(ve(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-u),s.mp=(s.mp||0)+u,p(r.x,r.y,`-${u} MP`,!1),p(s.x,s.y,`+${u} MP`,!0)}break;case"mantra":if(r){let u=Math.max(1,Math.ceil(ve(s,"int")*.3));s.tempBuff={int:u,duration:3},p(s.x,s.y,`+${u} LUK`,!0),r.tempBuff={luk:u,duration:3},p(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(h(s,Math.max(1,Math.floor(ve(s,"int")*.3+ve(s,"luk")*.15)),!0),!r)break;h(r,Math.max(1,Math.floor(ve(s,"int")*.3+ve(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,p(r.x,r.y,`-${u} VIT`,!1),p(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"str")*.8-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)&&h(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff={agi:u,duration:3},p(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"str")*.6));h(r,u,!1)}break;case"focus":s.tempBuff={dex:3,duration:3},p(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"dex")*.8-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,p(r.x,r.y,`-${u} AGI`,!1),p(s.x,s.y,`+${u} AGI`,!0)}break;case"execute":if(r){let u=Math.max(1,Math.floor(ve(s,"agi")*.8-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"berserk":r&&(h(r,Math.max(1,Math.floor(ve(s,"str")*.8-ve(r,"vit")*.3+ve(r,"luk")*.2)),!1),h(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff={str:u,vit:u,duration:2},p(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,p(r.x,r.y,`-${u} INT`,!1),p(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(ve(s,"int")*.6-(ve(r,"int")*.4+ve(r,"luk")*.3))),m=Math.max(1,Math.ceil(ve(s,"int")*.3-(ve(r,"int")*.4+ve(r,"luk")*.3)));h(r,u,!1,!0),h(s,u+m,!0),r.mp=Math.max(1,(r.mp||0)-m),p(s.x,s.y,`+${u} HP and +${m} MP`,!0),p(r.x,r.y,`-${u} HP and -${m} MP`,!1)}break;case"blind":{if(!r)break;let u=1;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,p(r.x,r.y,`-${u} DEX`,!1),p(s.x,s.y,`+${u} DEX`,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.ceil(ve(s,"dex")*.7-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"iaido":s.tempBuff={str:1,dex:1,duration:3},p(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"str")*.4+ve(s,"dex")*.4-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"str")*.7+ve(s,"agi")*.1-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"howl":s.tempBuff={str:2,agi:2,duration:3},p(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let u=Math.max(1,Math.floor(ve(s,"int")*.5));h(r,u,!0),h(s,3,!1)}break;case"judgement":{if(!r)break;let u=Math.max(1,Math.floor(s.maxHp-s.hp-(ve(r,"int")*.2+ve(r,"luk")*.1)));h(r,u,!1,!0)}break;case"sanctuary":s.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},r.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),p(s.x,s.y,"+1 ALL STATS",!0),p(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let u=Math.max(1,Math.floor((r.maxHp-r.hp)*1.3-(ve(r,"int")*.2+ve(r,"luk")*.1)));h(r,u,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,p(r.x,r.y,"-2 LUK",!1),p(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"luk")*.8-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1)}break;case"windWalk":s.tempBuff={agi:3,duration:3},p(s.x,s.y,"+3 AGI",!0);break;case"powerShot":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"dex")*.6-(ve(r,"vit")*.3+ve(r,"luk")*.2)));if(h(r,u,!1)&&n.world&&n.units&&n.updateUnitPosition){let x=Math.max(1,Math.floor(u*.2)),M=Cv(n.world,n.units,s,r,x),y=r.x,g=r.y;r.x=M.newGx,r.y=M.newGy,n.updateUnitTileIndex&&n.updateUnitTileIndex(r,y,g),M.collisionDamage>0?(console.log("[KNOCKBACK]",`${M.collisionDamage} dmg to ${r.name}`),n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),h(r,M.collisionDamage,!1),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)):n.animateKnockback?n.animateKnockback(r,y,g,M.newGx,M.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r))}}break;case"forge":s.tempBuff={str:2,duration:3},r.tempBuff={str:2,duration:3},p(s.x,s.y,"+2 STR",!0),p(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff={str:3,vit:3,duration:3},r.tempBuff={str:3,vit:3,duration:3},p(s.x,s.y,"+3 STR, +3 VIT",!0),p(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let u=Math.max(1,Math.floor(ve(r,"luk")*.4-ve(r,"luk")*.2));r.tempDebuff={poison:u,duration:3},p(r.x,r.y,`${u} poison for 2 turns`,!1)}break;case"concoct":{if(!r)break;let u=Math.max(1,Math.floor(ve(s,"int")*.8-(ve(r,"int")*.4+ve(r,"luk")*.2)));h(r,u,!1,!0);let m=Math.max(1,Math.floor(u*.5));s.luk=Math.max(1,(s.luk||0)+m),p(s.x,s.y,`+${m} LUK`,!0)}break;case"gaze":{if(!r)break;let u=1;r.tempDebuff={agi:u,vit:u,duration:4},s.tempBuff={agi:u,vit:u,duration:4},p(r.x,r.y,`-${u} AGI, -${u} VIT`,!1),p(s.x,s.y,`+${u} AGI, +${u} VIT`,!0)}break;case"bloodSuck":{if(!r)break;let u=Math.max(1,Math.floor(s.mp*.6+ve(s,"int")*.6-(r.hp*.3+ve(r,"luk")*.1)));h(r,u,!1,!0)&&h(s,u,!0)}break;case"debilitate":{if(!r)break;let u=3;r.tempDebuff={hp:u,maxHp:u,vit:u,duration:3},s.tempBuff={hp:u,maxHp:u,vit:u,duration:3},p(r.x,r.y,`-${u} HP, -${u} VIT`,!1),p(s.x,s.y,`+${u} HP, +${u} VIT`,!0)}break;case"reanimate":{if(!n.units||!n.reanimateDeadUnit)break;let u=n.units,m=null,x=-1,M=null,y=-1,g=!1;for(let v=0;v<u.length;v++){let A=u[v];if(A.hp>0||A.isReanimated)continue;let O=A.deathOrder??0;O>=x&&(x=O,m=A),A.player===s.player&&(g=!0,O>=y&&(y=O,M=A))}let S=g?M:m;S&&n.reanimateDeadUnit(s,S)}break;case"warCry":{let u=Math.max(2,Math.ceil((s.maxHp-s.hp)*.1));s.tempBuff={vit:u,luk:u,duration:3},p(s.x,s.y,`+${u} VIT, +${u} LUK`,!0)}break;case"bash":{if(!r)break;let u=r.agi;r.tempDebuff={agi:u,duration:3},p(r.x,r.y,`-${u} AGI`,!1)}break;case"gnaw":{let u=Math.max(1,Math.floor(ve(s,"str")-(ve(r,"vit")*.3+ve(r,"luk")*.2)));h(r,u,!1,!0),h(s,u,!0)}break;case"infect":{let u=Math.max(1,Math.ceil(ve(s,"luk")*.4-ve(r,"luk")*.1));r.tempDebuff={poison:u,duration:4},p(r.x,r.y,`${u} poison for 3 turns`,!1)}break;case"vodoo":{if(!r)break;s.tempBuff={vodoo:r.id,duration:3},p(r.x,r.y,"Vodoo for 2 turns",!1)}break;case"malediction":{if(!r)break;let u=Math.max(1,Math.ceil(ve(s,"int")*.4+ve(s,"luk")*.3-(ve(r,"int")*.3+ve(r,"luk")*.2))),m=Math.max(1,Math.ceil(u*.3));r.tempDebuff={luk:m,int:m,str:m,vit:m,agi:m,dex:m,duration:3},h(r,u,!1,!0),p(r.x,r.y,`-${m} ALL STATS`,!1)}break;case"foresight":{let u=Math.max(2,Math.floor(ve(s,"int")*.2));if(s.tempBuff={int:u,dex:u,mp:u,maxMp:u,duration:3},p(s.x,s.y,`+${u} INT, +${u} DEX, +${u} MP`,!0),!r)break;r.tempBuff={int:u,dex:u,mp:u,maxMp:u,duration:3},p(r.x,r.y,`+${u} INT, +${u} DEX, +${u} MP`,!0)}break;case"overheal":{let u=Math.max(1,Math.floor(ve(s,"int")*.3+ve(s,"luk")*.2));if(s.tempBuff={heal:u,duration:3},p(s.x,s.y,"Auto heal for 2 turns",!0),!r)break;r.tempDebuff={heal:u,duration:3},p(r.x,r.y,"Auto heal for 2 turns",!0)}break;case"skewer":{let u=Math.max(1,Math.ceil(ve(s,"dex")*.8-(ve(r,"vit")*.3+ve(r,"luk")*.2)));r.tempDebuff={agi:u,duration:3},p(r.x,r.y,`-${u} AGI`,!1)}break;case"rapid":s.tempBuff={doubleAttack:!0,duration:2},p(s.x,s.y,"Double attack for 1 turn",!0);break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",o,"\u2192",l,`| MP ${s.mp}`,d!=null?`| ${d} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function Bd(i){let e=Nh,t=Bh,n=Array.from({length:t},()=>Array(e).fill(!1)),s=Array.from({length:t},()=>Array(e).fill(0)),r=Array.from({length:t},()=>Array(e).fill(nt.GRASS)),a=i!=null?mv(i):()=>Math.random(),o=Math.floor(e/2),l=Math.floor(t/2),d=o,h=0,p=o,u=t-1,m=2,x=3;function M(q,V,Z,ce){let ue=ce;for(let be=V;be<=Z;be++)if(!(be<0||be>=t))for(let ne=-m;ne<=m;ne++){let fe=ue+ne;fe<0||fe>=e||(n[be][fe]=!0,r[be][fe]=q,s[be][fe]=1)}}M(nt.BASE_TOP,h,h+x-1,d),M(nt.BASE_BOTTOM,u-x+1,u,p),M(nt.CENTER,l-1,l+1,o);let y=new Set,g=(q,V)=>Math.abs(q-o)<=2&&Math.abs(V-l)<=1,S=(q,V)=>{q<0||q>=e||V<0||V>=t||g(q,V)||y.add(V*e+q)},v=Math.floor(e/2),A=Math.floor(t/2),O=Math.min(e,t)*Oh,D=Math.max(60,(t+e)*2);for(let q=0;q<2;q++){let V=q===0?v-O:v+O,Z=q===0?Math.PI/2:-Math.PI/2,ce=q===0?Math.PI*3/2:Math.PI/2;for(let ue=0;ue<=D;ue++){let be=ue/D,ne=Z+be*(ce-Z),fe=V+O*Math.cos(ne),Ae=A+O*Math.sin(ne),Ce=Math.round(fe),Oe=Math.round(Ae);S(Ce,Oe),S(Ce+1,Oe),S(Ce-1,Oe),S(Ce,Oe+1),S(Ce,Oe-1)}}let N=[[0,1],[0,-1],[1,0],[-1,0]];for(let q=0;q<1;q++){let V=[];y.forEach(Z=>{let ce=Z%e,ue=Z/e|0;for(let[be,ne]of N){let fe=ce+be,Ae=ue+ne;if(fe<0||fe>=e||Ae<0||Ae>=t)continue;let Ce=Ae*e+fe;y.has(Ce)||V.push(Ce)}}),V.forEach(Z=>y.add(Z))}y.forEach(q=>{let V=q%e,Z=q/e|0;r[Z][V]===nt.BASE_TOP||r[Z][V]===nt.BASE_BOTTOM||r[Z][V]===nt.CENTER||(n[Z][V]=!0,r[Z][V]=nt.PATH,s[Z][V]=1)});let Q=Math.round(v-O*1.6),T=Math.round(v+O*1.6),C=Math.round(v-O),te=Math.round(v+O),X=1;for(let q=l-X;q<=l+X;q++)if(!(q<0||q>=t))for(let V=Q;V<=T;V++)V<0||V>=e||(n[q][V]=!0,r[q][V]!==nt.CENTER&&r[q][V]!==nt.BASE_TOP&&r[q][V]!==nt.BASE_BOTTOM&&(r[q][V]=nt.PATH),s[q][V]=Math.max(s[q][V],1));function re(q,V,Z,ce){let ue=Math.max(1,Math.min(q,V)),be=Math.min(t-2,Math.max(q,V)),ne=Math.max(1,Math.min(Z,ce)),fe=Math.min(e-2,Math.max(Z,ce));for(let Ae=ue;Ae<=be;Ae++)for(let Ce=ne;Ce<=fe;Ce++)r[Ae][Ce]===nt.BASE_TOP||r[Ae][Ce]===nt.BASE_BOTTOM||r[Ae][Ce]===nt.CENTER||(n[Ae][Ce]=!0,r[Ae][Ce]=nt.PATH,s[Ae][Ce]=1)}let B=3,K=3;re(h,h+B-1,C,d-1),re(h,h+B-1,d+1,te),re(u-K+1,u,C,p-1),re(u-K+1,u,p+1,te),M(nt.BASE_TOP,h,h+x-1,d),M(nt.BASE_BOTTOM,u-x+1,u,p),M(nt.CENTER,l-1,l+1,o);for(let q=0;q<t;q++)for(let V=0;V<e;V++){if(n[q][V]||r[q][V]===nt.BASE_TOP||r[q][V]===nt.BASE_BOTTOM||r[q][V]===nt.CENTER)continue;let Z=Math.abs(V-d)<=4&&Math.abs(q-h)<=3,ce=Math.abs(V-p)<=4&&Math.abs(q-u)<=3,ue=Z||ce,be=a();be<.55&&!ue?(r[q][V]=nt.TREE,s[q][V]=1+Math.floor(a()*2)):be<.75||ue&&be<.5?(r[q][V]=nt.WATER,s[q][V]=0):(r[q][V]=nt.ROCK,s[q][V]=1+Math.floor(a()*2))}let se=[];for(let q=0;q<t;q++)for(let V=0;V<e;V++)r[q][V]===nt.CENTER&&se.push({gx:V,gy:q});return{w:e,h:t,path:n,height:s,type:r,topBaseX:d,topBaseY:h,botBaseX:p,botBaseY:u,centerTiles:se}}function Av(i,e,t){let n=e===1?nt.BASE_BOTTOM:nt.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function Rv(i){if(i.centerTiles&&i.centerTiles.length>0)return i.centerTiles;let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===nt.CENTER&&e.push({gx:n,gy:t});return e}function Od(i,e){let t=Rv(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function ws(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===nt.TREE||n===nt.WATER||n===nt.ROCK)}function Cv(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,d=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(d===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let p=0;for(let u=0;u<s;u++){let m=r+d,x=a+h,M=m<0||m>=i.w||x<0||x>=i.h,y=!ws(i,m,x),g=e.some(S=>S.hp>0&&S.id!==n.id&&S.x===m&&S.y===x);if(M||y||g){let S=Math.max(1,p*3+Math.ceil((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:S}}r=m,a=x,p++}return{newGx:r,newGy:a,collisionDamage:0}}function Pv(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,d=Math.abs(o-r),h=Math.abs(l-a),p=r<o?1:-1,u=a<l?1:-1,m=d-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*m;x>-h&&(m-=h,r+=p),x<d&&(m+=d,a+=u)}return s}function Es(i,e,t,n,s){let r=Pv(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!ws(i,o.x,o.y))return!1}return!0}var Xd=4;function qd(i){if(!i||!i.tempDebuff)return!1;let e=i.tempDebuff;return!(e.agi==null||!(e.agi>0)||e.duration!=null&&e.duration<=0)}function Pl(i,e,t,n,s,r){r&&qd(r)?n=Math.max(0,n):n=Math.max(Xd,n);let a=(m,x)=>x*i.w+m,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],d=0,h=[[0,1],[0,-1],[1,0],[-1,0]],p=s!=null&&r!=null,u=p?new Set(s.filter(m=>m.hp>0&&m.player!==r.player).map(m=>m.y*i.w+m.x)):null;for(;d<l.length;){let{x:m,y:x,d:M}=l[d++];if(!(M>=n))for(let[y,g]of h){let S=m+y,v=x+g;if(!ws(i,S,v)||p&&u.has(a(S,v)))continue;let A=a(S,v);if(o.has(A))continue;let O=M+1;o.set(A,O),l.push({x:S,y:v,d:O})}}return o}function Fd(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let d=o;d<=l;d++)for(let h=r;h<=a;h++){let p=Math.abs(h-e)+Math.abs(d-t);p>=1&&p<=n&&s.set(d*i.w+h,p)}return s}function yr(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(x,M)=>M*i.w+x,l=new Set(r.filter(x=>x.hp>0&&x.player!==a.player).map(x=>x.y*i.w+x.x)),d=new Map,h=[{x:e,y:t}],p=0;d.set(o(e,t),null);let u=[[0,1],[0,-1],[1,0],[-1,0]];function m(x,M){return ws(i,x,M)?!l.has(o(x,M)):!1}for(;p<h.length;){let{x,y:M}=h[p++];if(x===n&&M===s){let y=[],g={x:n,y:s};for(;g;)y.unshift(g),g=d.get(o(g.x,g.y));return y}for(let[y,g]of u){let S=x+y,v=M+g,A=o(S,v);d.has(A)||m(S,v)&&(d.set(A,{x,y:M}),h.push({x:S,y:v}))}}return null}function Iv(i,e,t,n,s,r){if(!n||n.length===0)return null;let a=(M,y)=>y*i.w+M,o=a(e,t),l=new Set;for(let M=0;M<n.length;M++){let y=n[M];y&&y.gx!=null&&y.gy!=null&&l.add(a(y.gx,y.gy))}if(l.size===0)return null;if(l.has(o))return{path:[{x:e,y:t}],target:{gx:e,gy:t}};let d=new Set(s.filter(M=>M.hp>0&&M.player!==r.player).map(M=>M.y*i.w+M.x)),h=new Map,p=[{x:e,y:t}],u=0;h.set(o,null);let m=[[0,1],[0,-1],[1,0],[-1,0]];function x(M,y){return ws(i,M,y)?!d.has(a(M,y)):!1}for(;u<p.length;){let{x:M,y}=p[u++],g=a(M,y);if(l.has(g)){let S=[],v={x:M,y};for(;v;)S.unshift(v),v=h.get(a(v.x,v.y));return{path:S,target:{gx:M,gy:y}}}for(let S=0;S<m.length;S++){let v=m[S][0],A=m[S][1],O=M+v,D=y+A,N=a(O,D);h.has(N)||x(O,D)&&(h.set(N,{x:M,y}),p.push({x:O,y:D}))}}return null}function Lv(i){return{hw:i.w*tt/2,hh:i.h*tt/2}}function Dv(i,e){let{hw:t,hh:n}=Lv(i),s=Math.floor((e.x+t)/tt),r=Math.floor((e.z+n)/tt);return s<0||s>=i.w||r<0||r>=i.h?null:{gx:s,gy:r}}function kd(i,e,t,n){let s=i.getAttribute("position");if(!s)return;let r=s.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a[o*3]=e,a[o*3+1]=t,a[o*3+2]=n;i.setAttribute("color",new ti(a,3))}var Hd={[nt.PATH]:2976557,[nt.GRASS]:2968109,[nt.TREE]:1719578,[nt.WATER]:1989278,[nt.ROCK]:4872778,[nt.BASE_TOP]:8014410,[nt.BASE_BOTTOM]:4872826,[nt.CENTER]:13940810};function kh(i){return i.w*tt/2}function Hh(i){return i.h*tt/2}function Yd(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new dl(e);return r.wrapS=r.wrapT=Fa,r.repeat.set(4,4),r.needsUpdate=!0,r}function zd(i){let e=new Mi,t=kh(i),n=Hh(i),s=new $n(tt,Jn,tt),r=Yd(64),a=.88,o=.02,l=[];e.userData.swayingFoliage=[];function d(X,re,B,K,se){let q=new Wn({color:3828266,roughness:.9});q.bumpMap=r,q.bumpScale=.12;for(let V=0;V<K;V++){let Z=.08+Math.random()*se,ce=.03+Math.random()*.03,ue=new $e(new Zs(ce*.5,ce,Z,6),q);ue.position.set(X+(Math.random()-.5)*.5,B+Z/2,re+(Math.random()-.5)*.5),ue.rotation.x=(Math.random()-.5)*.2,ue.rotation.z=(Math.random()-.5)*.2,ue.castShadow=!0,e.add(ue)}}let h=.12;function p(X,re,B){let K=B+.02,se=[[X-h,K,re-h],[X+h,K,re+h],[X-h,K,re+h],[X+h,K,re-h],[X-h+.06,K,re-h+.06],[X+h-.06,K,re+h-.06],[X-h+.06,K,re+h-.06],[X+h-.06,K,re-h+.06]],q=new Float32Array(se.length*3);for(let Z=0;Z<se.length;Z++)q[Z*3]=se[Z][0],q[Z*3+1]=se[Z][1],q[Z*3+2]=se[Z][2];let V=new ci;return V.setAttribute("position",new ti(q,3)),V}let u=0;for(let X=0;X<i.h;X++)for(let re=0;re<i.w;re++)i.path[X][re]&&u++;let m=new Wn({color:16777215,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),x=new ul(s,m,u);x.userData.tileGridGround=!0,x.userData.insideTileGx=new Uint16Array(u),x.userData.insideTileGy=new Uint16Array(u),x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1;let M=[],y=[],g=[],S=[],v=new li,A=new wt,O=new Mn,D=new as,N=new ia,Q=new F,T=new F(1,1,1),C=0;for(let X=0;X<i.h;X++)for(let re=0;re<i.w;re++){let B=i.type[X][re],K=i.height[X][re],se=Hd[B],q=Jn+K*.35,V=q/2+Jn/2,Z=re*tt-t+tt/2,ce=X*tt-n+tt/2,ue=(se>>16&255)/255,be=(se>>8&255)/255,ne=(se&255)/255,fe=ue,Ae=be,Ce=ne;if(B===nt.PATH||B===nt.TREE||B===nt.ROCK){let Qe=Math.random()*.45;fe=ue*(1-Qe)+.42*Qe,Ae=be*(1-Qe)+.26*Qe,Ce=ne*(1-Qe)+.14*Qe}(B===nt.TREE||B===nt.ROCK)&&(fe*=.5,Ae*=.5,Ce*=.5);let Oe=1+(Math.random()-.5)*.12,yt=Math.min(1,fe*Oe),lt=Math.min(1,Ae*Oe),et=Math.min(1,Ce*Oe);if(i.path[X][re])x.userData.insideTileGx[C]=re,x.userData.insideTileGy[C]=X,A.setRGB(yt,lt,et),x.setColorAt(C,A),v.position.set(re*tt-t+tt/2,q/2,X*tt-n+tt/2),v.updateMatrix(),x.setMatrixAt(C,v.matrix),C++;else{let J=s.clone();if(v.position.set(re*tt-t+tt/2,q/2,X*tt-n+tt/2),v.updateMatrix(),J.applyMatrix4(v.matrix),kd(J,yt,lt,et),M.push(J),B===nt.TREE)S.push(p(Z,ce,V));else if(B===nt.WATER){let Xt=Hd[nt.WATER],Ze=(Xt>>16&255)/255,Qe=(Xt>>8&255)/255,Ge=(Xt&255)/255,He=1+(Math.random()-.5)*.12,ft=Math.min(1,Ze*He),R=Math.min(1,Qe*He),E=Math.min(1,Ge*He),j=new os(tt,tt);j.rotateX(-Math.PI/2),v.position.set(Z,V+.02,ce),v.rotation.set(0,0,0),v.scale.set(1,1,1),v.updateMatrix(),j.applyMatrix4(v.matrix),kd(j,ft,R,E),y.push(j)}else if(B===nt.ROCK){let Xt=(Ze,Qe,Ge)=>{let He=new _l(Ze,0),ft=Math.random()*Math.PI*2,R=Math.random()*Math.PI*2,E=Math.random()*Math.PI*2;N.set(ft,R,E),D.setFromEuler(N),Q.set(Z+Qe,V+Ze-.2,ce+Ge),O.compose(Q,D,T),He.applyMatrix4(O),g.push(He)};Xt(.32+Math.random()*.14,(Math.random()-.5)*.15,(Math.random()-.5)*.15),Xt(.2+Math.random()*.12,(Math.random()-.5)*.25,(Math.random()-.5)*.25),Xt(.12+Math.random()*.12,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),e.add(x);function te(X){for(let re=0;re<X.length;re++)X[re].dispose()}if(M.length>0){let X=Qa(M);if(te(M),X){let re=new Wn({color:16777215,vertexColors:!0,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),B=new $e(X,re);B.receiveShadow=!0,B.castShadow=!0,B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}if(S.length>0){let X=Qa(S);if(te(S),X){let re=new qa({color:855309,linewidth:1}),B=new fl(X,re);B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}if(g.length>0){let X=Qa(g);if(te(g),X){let re=new Wn({color:6974058,roughness:.9});re.bumpMap=r,re.bumpScale=.2;let B=new $e(X,re);B.castShadow=!0,B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}if(y.length>0){let X=Qa(y);if(te(y),X){let re=new Wn({color:16777215,vertexColors:!0,roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),B=new $e(X,re);B.receiveShadow=!0,B.frustumCulled=!1,B.userData.mergedOutsidePick=!0,e.add(B)}}for(let X=0;X<i.h;X++)for(let re=0;re<i.w;re++){if(i.path[X][re])continue;let B=i.type[X][re],K=i.height[X][re],q=(Jn+K*.35)/2+Jn/2,V=re*tt-t+tt/2,Z=X*tt-n+tt/2;if(B===nt.TREE){let ce=new Mi;ce.userData={gx:re,gy:X},ce.position.set(V,q,Z);let ue=re===0||re===i.w-1||X===0||X===i.h-1,be=ue?.75+Math.random()*.35:.5+Math.random()*.2,ne=new wt(4007959),fe=()=>1+(Math.random()-.5)*.4;ne.r=Math.min(1,Math.max(0,ne.r*fe())),ne.g=Math.min(1,Math.max(0,ne.g*fe())),ne.b=Math.min(1,Math.max(0,ne.b*fe()));let Ae=.85+Math.random()*.2,Ce=new Wn({color:ne,roughness:Ae});Ce.bumpMap=r,Ce.bumpScale=.1+Math.random()*.12;let Oe=new $e(new Zs(.12,.14,be,8),Ce);Oe.position.set(0,be/2,0),Oe.castShadow=!0,Oe.raycast=function(){},ce.add(Oe);let yt=r.clone();yt.repeat.set(3,3);let lt=new wt(2972205),et=()=>1+(Math.random()-.5)*.44;lt.r=Math.min(1,Math.max(0,lt.r*et())),lt.g=Math.min(1,Math.max(0,lt.g*et())),lt.b=Math.min(1,Math.max(0,lt.b*et()));let Se=.78+Math.random()*.24,J=new Wn({color:lt,roughness:Se});J.bumpMap=yt,J.bumpScale=.16+Math.random()*.14;let Xt=ue?.52:.45,Ze=ue?1.05:.9,Qe=.12,Ge=Ze*.5,He=Ze*.45,ft=Ze*.4,R=new Mi;R.position.set(0,be,0);let E=new $e(new Ci(Xt,Ge,8),J);E.position.set(0,Ge/2,0),E.castShadow=!0,E.raycast=function(){},R.add(E);let j=new $e(new Ci(Xt*.75,He,8),J);j.position.set(0,Ge-Qe+He/2,0),j.castShadow=!0,j.raycast=function(){},R.add(j);let xe=new $e(new Ci(Xt*.5,ft,8),J);xe.position.set(0,Ge-Qe+He-Qe+ft/2,0),xe.castShadow=!0,xe.raycast=function(){},R.add(xe),ce.add(R);let _e=(i.w-1)*.5,oe=(i.h-1)*.5,Ve=Math.max(3.5,Math.min(i.w,i.h)*.24);(re-_e)**2+(X-oe)**2<=Ve*Ve&&Math.random()<2/3&&e.userData.swayingFoliage.push({group:R,phase:Math.random()*Math.PI*2}),e.add(ce),l.push(ce)}}return e.userData.treeGroups=l,e}function Uv(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=Bd(),t=document.getElementById("canvas-wrap"),n=new hl;n.background=new wt(1711652),n.fog=new cl(1711652,30,90);let s=e.w*tt/2,r=e.h*tt/2,a=new yi(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,d=new F(12,38,16).normalize().multiplyScalar(o),h=new F,p=new F,u=new Zi(new F(0,1,0),0),m=new F,x=new F,M=!1,y=!1,g=!0,S=!1,v=null,A=5,O=.004,D=-Math.PI*.4,N=Math.PI*.4,Q=new F,T={x:0,y:0},C=!1,te=1,X=40,re=.005,B=.15,K=1,se=null,q=new El(16777215,.45);n.add(q);let V=new Sl(16774630,1.1);V.position.set(30,50,20),V.castShadow=!0,V.shadow.mapSize.width=2048,V.shadow.mapSize.height=2048,V.shadow.camera.near=1,V.shadow.camera.far=120,V.shadow.camera.left=-50,V.shadow.camera.right=50,V.shadow.camera.top=50,V.shadow.camera.bottom=-50,n.add(V);let Z=zd(e);n.add(Z);let ce=new Map,ue=new Mi;n.add(ue);let be={30:!1,20:!1,10:!1},ne=["red","yellow","purple","blue","green"],fe={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943},Ae=.92;function Ce(f,c,_){let P=(Jn+e.height[_][c]*.35)/2+Jn/2,U=new os(Ae,Ae),I=new Un({color:f,transparent:!0,opacity:.45,side:Ln}),z=new $e(U,I);return z.rotation.x=-Math.PI/2,z.position.set(c*tt-Pe+tt/2,P+.01,_*tt-Fe+tt/2),z}function Oe(f){let c=new vl(.22,0),_=new Wn({color:f,metalness:.3,roughness:.4}),b=new $e(c,_);return b.rotation.x=Math.PI/4,b.castShadow=!0,b.receiveShadow=!0,b}function yt(){let f=Math.floor(e.h/2),c=[];for(let _=0;_<e.w;_++){let b=f;if(e.type[b][_]!==nt.PATH||j(_,b)!=null)continue;let U=b*e.w+_;ce.has(U)||c.push({gx:_,gy:b})}return c}function lt(f){let c=yt();if(c.length===0)return;let _=c[Math.floor(Math.random()*c.length)],b=ne[Math.floor(Math.random()*ne.length)],P=_.gy*e.w+_.gx,U=fe[b],I=Ie(_.gx,_.gy);I.y+=.35;let z=Oe(U);z.position.copy(I),ue.add(z);let L=Ce(U,_.gx,_.gy);ue.add(L),ce.set(P,{type:b,mesh:z,glowMesh:L}),console.log("[POWERUP]",`turnsLeft: ${f}, type: ${b}, gx: ${_.gx}, gy: ${_.gy}`)}function et(f){let c=f.y*e.w+f.x,_=ce.get(c);if(!_)return;let b=_.mesh;if(ue.remove(b),b.geometry.dispose(),b.material){let P=b.material;P.dispose&&P.dispose()}_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose()),ce.delete(c),_.type==="green"?(f.hp=Math.min(f.maxHp,f.hp+6),ai(f.x,f.y,"+6 HP",!1,"buff")):(_.type==="red"?f.tempBuff={str:4,duration:3}:_.type==="yellow"?f.tempBuff={agi:4,duration:3}:_.type==="purple"?f.tempBuff={int:4,duration:3}:_.type==="blue"&&(f.tempBuff={dex:4,duration:3}),ai(f.x,f.y,`+4 ${_.type==="red"?"STR":_.type==="yellow"?"AGI":_.type==="purple"?"INT":"DEX"}`,!1,"buff")),gt(f,()=>kt(f))}let Se=[],J=0,Xt=new Map;function Ze(){Xt.clear()}function Qe(f){Xt.set(f.id,f)}function Ge(f){Xt.delete(f)}function He(f){return Xt.get(f)}let ft=new Map;function R(){ft.clear()}function E(f,c,_){if(c!=null&&_!=null){let b=_*e.w+c;ft.get(b)===f&&ft.delete(b)}f.hp>0&&ft.set(f.y*e.w+f.x,f)}function j(f,c){let _=c*e.w+f,b=ft.get(_);return!b||b.hp<=0||b.x!==f||b.y!==c?null:b}let xe=1,_e=0,oe=new Map,Ve=Yd(64),Pe=kh(e),Fe=Hh(e);function Ie(f,c){let b=(Jn+e.height[c][f]*.35)/2+Jn/2;return new F(f*tt-Pe+tt/2,b,c*tt-Fe+tt/2)}function Tt(f,c){f==="short"&&(Nh=27,Bh=15,Oh=.35,Ss=100),n.remove(Z),Z.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(P=>P.dispose())}),oe.forEach(_=>{n.remove(_),_.traverse(b=>{b.geometry&&b.geometry.dispose(),b.material&&(Array.isArray(b.material)?b.material:[b.material]).forEach(U=>U.dispose())})}),oe.clear(),Se.length=0,Ze(),R(),xe=1,_e=0,J=0,ce.forEach(_=>{ue.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),ce.clear(),be={30:!1,20:!1,10:!1},e=Bd(typeof c<"u"?c:void 0),Pe=kh(e),Fe=Hh(e),Z=zd(e),n.add(Z)}function Ee(){oe.forEach(f=>{n.remove(f),f.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&(Array.isArray(c.material)?c.material:[c.material]).forEach(b=>b.dispose())})}),oe.clear(),Se.length=0,Ze(),R(),xe=1,_e=0,J=0}function Ot(f,c){let _=(f>>16&255)/255,b=(f>>8&255)/255,P=(f&255)/255,U=1+(Math.random()-.5)*c;return new wt(Math.min(1,_*U),Math.min(1,b*U),Math.min(1,P*U))}let Ut=.62;function dt(f,c){c=c??Ut;let _=f instanceof wt?f:new wt(f);return new wt(Math.max(0,_.r*c),Math.max(0,_.g*c),Math.max(0,_.b*c))}function ct(f,c,_){let b=js[c]||js.knight,P=dt(Ot(b.primary,.08)),U=dt(Ot(b.secondary,.08)),I=Xn[c]&&Xn[c].gender||"male",z=_??4006676,L=dt(Ot(b.skin!=null?b.skin:15250592,.06)),ee=dt(Ot(z,.08)),ie=()=>(Math.random()-.5)*.08,ae=()=>(Math.random()-.5)*.04,k=new Wn({color:P,metalness:Math.max(0,.25+ae()),roughness:Math.max(.3,Math.min(1,.5+ie()))});k.bumpMap=Ve,k.bumpScale=.1;let le=new Wn({color:U,metalness:Math.max(0,.2+ae()),roughness:Math.max(.3,Math.min(1,.55+ie()))});le.bumpMap=Ve,le.bumpScale=.1;let we=new Wn({color:P,metalness:Math.max(0,.25+ae()),roughness:Math.max(.3,Math.min(1,.5+ie()))});we.bumpMap=Ve,we.bumpScale=.1;let ye=new Wn({color:L,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+ie()))});ye.bumpMap=Ve,ye.bumpScale=.05;let We=new Mi,ke=.28,st=.08,Pt=.08,mt=new $e(new $n(st,ke,Pt),le);mt.position.set(-.06,ke/2,0),mt.castShadow=!0,We.add(mt);let ze=new $e(new $n(st,ke,Pt),le);ze.position.set(.06,ke/2,0),ze.castShadow=!0,We.add(ze);let rt=.28,xt=.2,Zt=.12,Pn=new $e(new $n(xt,rt,Zt),k);Pn.position.set(0,ke+rt/2,0),Pn.castShadow=!0,We.add(Pn);let sn=.06,Jt=.22,rn=.06,at=new $e(new $n(sn,Jt,rn),we);at.position.set(-(xt/2+sn/2),ke+rt-.08,0),at.castShadow=!0,We.add(at);let zt=new $e(new $n(sn,Jt,rn),we);if(zt.position.set(xt/2+sn/2,ke+rt-.08,0),zt.castShadow=!0,We.add(zt),b.cape!=null){let je=xt*1.95,Ct=je*.6,jt=ke+rt*.28,Wt=new aa;Wt.moveTo(-Ct/2,jt/2),Wt.lineTo(Ct/2,jt/2),Wt.lineTo(je/2,-jt/2),Wt.lineTo(-je/2,-jt/2),Wt.closePath();let Yt=new Ja(Wt),ln=new Wn({color:dt(Ot(b.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+ie())),side:Ln});ln.bumpMap=Ve,ln.bumpScale=.12;let Hn=new $e(Yt,ln);Hn.position.set(0,ke+rt-jt/2+.05,-Zt/2-.02),Hn.rotation.y=Math.PI,Hn.castShadow=!0,We.add(Hn);let he=.055,ge=ke+rt+.02,Te=.02,de=xt/2+sn*.5,me=new $e(new ls(he,10,8,0,Math.PI*2,0,Math.PI*.55),ln.clone());me.position.set(-de,ge,Te),me.rotation.x=-Math.PI*.35,me.rotation.z=Math.PI*.5,me.scale.set(1.2,.85,1.1),me.castShadow=!0,We.add(me);let Re=new $e(new ls(he,10,8,0,Math.PI*2,0,Math.PI*.55),ln.clone());Re.position.set(de,ge,Te),Re.rotation.x=-Math.PI*.35,Re.rotation.z=-Math.PI*.5,Re.scale.set(1.2,.85,1.1),Re.castShadow=!0,We.add(Re)}if(b.belt!=null){let je=new Wn({color:dt(Ot(b.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+ie()))});je.bumpMap=Ve,je.bumpScale=.1;let Ct=.022,jt=.04,Wt=new $e(new $n(xt+.04,Ct,Zt+jt),je);Wt.position.set(0,ke+.04,0),Wt.castShadow=!0,We.add(Wt)}if(b.apron!=null){let je=new Wn({color:dt(Ot(b.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+ie())),side:Ln});je.bumpMap=Ve,je.bumpScale=.12;let Ct=xt*.95,jt=ke*.85,Wt=new $e(new os(Ct,jt),je),Yt=ke+.2;Wt.position.set(0,Yt-jt/2,Zt/2+.02),Wt.castShadow=!0,We.add(Wt);let ln=ke+rt+.02,Hn=xt/2+sn*.2,he=.018,ge=.008,Te=ln-Yt,de=new $e(new $n(he,Te,ge),je.clone());de.position.set(-Hn,(Yt+ln)/2,Zt/2+.015),de.castShadow=!0,We.add(de);let me=new $e(new $n(he,Te,ge),je.clone());me.position.set(Hn,(Yt+ln)/2,Zt/2+.015),me.castShadow=!0,We.add(me)}let Ke=.1,vt=new $e(new ls(Ke,12,10),ye);vt.position.set(0,ke+rt+Ke,0),vt.castShadow=!0,We.add(vt);let kn=new Un({color:1710638}),_n=new $e(new $n(.032,.004,.004),kn);_n.position.set(-.032,.028,Ke*.92),vt.add(_n);let on=new $e(new $n(.032,.004,.004),kn);on.position.set(.032,.028,Ke*.92),vt.add(on);let qt=new Un({color:2957087}),Vn=new $e(new $n(.045,.012,.008),qt);Vn.position.set(0,-.028,Ke*.92),vt.add(Vn);let bn=new Wn({color:ee,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+ie()))});bn.bumpMap=Ve,bn.bumpScale=.15;let _i=je=>{let Ct=Ke*.32,jt=Ke*.22,Wt=new $e(new Ci(jt*.9,Ct,5),bn);Wt.position.set(-Ke*.25,Ke*.22,Ke*.72),Wt.rotation.x=.35,Wt.rotation.z=.12,Wt.castShadow=!0,je.add(Wt);let Yt=new $e(new Ci(jt,Ct,5),bn);Yt.position.set(Ke*.28,Ke*.18,Ke*.68),Yt.rotation.x=.28,Yt.rotation.z=-.1,Yt.castShadow=!0,je.add(Yt);let ln=new $e(new Ci(jt*.7,Ct*.9,5),bn);ln.position.set(0,Ke*.28,Ke*.78),ln.rotation.x=.4,ln.castShadow=!0,je.add(ln)};if(I==="female"){let je=new $e(new ls(Ke*.92,12,10,0,Math.PI*2,0,Math.PI*.52),bn);je.position.set(0,Ke*.28,-Ke*.18),je.rotation.y=.06,je.rotation.x=-.04,je.castShadow=!0,vt.add(je);let Ct=new $e(new $n(Ke*1.15,Ke*2.2,Ke*.55),bn);Ct.position.set(0,-Ke*.6,-Ke*.95),Ct.rotation.z=.03,Ct.castShadow=!0,vt.add(Ct),_i(vt)}else{let je=new $e(new ls(Ke*.9,12,10,0,Math.PI*2,0,Math.PI*.5),bn);je.position.set(0,Ke*.4,-Ke*.12),je.rotation.y=.08,je.rotation.x=-.05,je.rotation.z=.04,je.castShadow=!0,vt.add(je);let Ct=new $e(new ls(Ke*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),bn);Ct.position.set(0,Ke*.1,-Ke*.05),Ct.rotation.y=.1,Ct.castShadow=!0,vt.add(Ct),_i(vt)}if(b.horns!=null){let je=new Wn({color:dt(Ot(b.horns,.08)),metalness:Math.max(0,.12+ae()),roughness:Math.max(.4,Math.min(1,.62+ie()))});je.bumpMap=Ve,je.bumpScale=.1;let Ct=Ke*1.12,jt=Ke*.22,Wt=new Ml(Ct,jt,8,28),Yt=new $e(Wt,je);Yt.rotation.x=Math.PI/2,Yt.position.y=Ke*.42,Yt.castShadow=!0,vt.add(Yt);let ln=Ke*.48,Hn=Ke*2.55,he=new $e(new Ci(ln,Hn,8),je.clone());he.position.set(-Ke*1.02,Ke*.18,Ke*.02),he.rotation.set(-.42,-.32,.58),he.castShadow=!0,vt.add(he);let ge=new $e(new Ci(ln,Hn,8),je.clone());ge.position.set(Ke*1.02,Ke*.18,Ke*.02),ge.rotation.set(-.42,.32,-.58),ge.castShadow=!0,vt.add(ge)}return We.userData.leftLeg=mt,We.userData.rightLeg=ze,We.userData.leftArm=at,We.userData.rightArm=zt,We}function Ye(f,c){let _=f.userData;if(!_.leftLeg)return;let b=c*Math.PI*2,P=.35,U=.28;_.leftLeg.rotation.x=Math.sin(b)*P,_.rightLeg.rotation.x=Math.sin(b+Math.PI)*P,_.leftArm.rotation.y=Math.sin(b+Math.PI)*U,_.rightArm.rotation.y=Math.sin(b)*U}function At(f){let c=f.userData;c.leftLeg&&(c.leftLeg.rotation.x=0,c.rightLeg.rotation.x=0,c.leftArm.rotation.y=0,c.rightArm.rotation.y=0)}function Kt(f){let c=ct(f.player,f.class,f.hairColor);c.position.copy(Ie(f.x,f.y)),c.castShadow=!0,c.userData.unitId=f.id;let _=.28,b=.28,P=.12,U=.18,I=.04,z=new os(U,I),L=new Un({color:6037528,side:Ln,depthTest:!0,depthWrite:!1}),ee=new $e(z,L);ee.position.set(0,_+b/2,P/2+.02),ee.rotation.x=-Math.PI/2,ee.rotation.z=Math.PI/4,ee.visible=f.maxHp>0&&f.hp<f.maxHp&&f.hp>0,c.add(ee),c.userData.slashMark=ee,n.add(c),oe.set(f.id,c),H(c,f.maxHp>0&&f.hp/f.maxHp<.35)}function kt(f){let c=oe.get(f.id);!c||!c.userData.slashMark||(c.userData.slashMark.visible=f.maxHp>0&&f.hp<f.maxHp&&f.hp>0)}function It(f){f.traverse(_=>{if(!_.isMesh||!_.material)return;let b=_.material;if(b.color){let P=b.color.r,U=b.color.g,I=b.color.b,z=.2126*P+.7152*U+.0722*I,L=Math.max(0,Math.min(1,z*.55));b.color.setRGB(L,L,L)}})}let Le=.35;function H(f,c){if(f)if(c){f.rotation.x=.35,f.scale.setScalar(.96);let _=f.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=.2,_.rightArm.rotation.y=.2),f.traverse(b=>{b.isMesh&&b.material&&b.material.color&&(b.userData.originalColor||(b.userData.originalColor=b.material.color.clone()),b.material.color.copy(b.userData.originalColor).multiplyScalar(.82))})}else{f.rotation.x=0,f.scale.setScalar(1);let _=f.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=0,_.rightArm.rotation.y=0),f.traverse(b=>{b.isMesh&&b.material&&b.userData.originalColor&&b.material.color.copy(b.userData.originalColor)})}}function Ne(f){if(f.level>=3)return;let c=f.maxHp>0?f.hp/f.maxHp:1;f.level+=1;let _=P=>Math.max(1,Math.ceil(P*1.1)),b=P=>Math.max(1,Math.ceil(P*1.1));f.maxHp=_(f.maxHp),f.maxMp=_(f.maxMp),f.hp=Math.max(1,Math.min(f.maxHp,Math.ceil(c*f.maxHp))),f.mp=Math.max(1,Math.min(f.maxMp,Math.ceil(c*f.maxMp))),f.str=b(f.str),f.agi=b(f.agi),f.vit=b(f.vit),f.dex=b(f.dex),f.luk=b(f.luk),f.int=b(f.int),f.range>3&&(f.range=b(f.range)),console.log("[LEVEL UP]",`${f.name} (${f.class}, P${f.player})`,`\u2192 Lv.${f.level}`,`| HP ${f.hp}/${f.maxHp} MP ${f.mp}/${f.maxMp} STR ${f.str} VIT ${f.vit}`),Be(f)}function Be(f){let c=oe.get(f.id),_=f.level===3?"levelup level3":f.level===2?"levelup level2":"levelup";if(Op(f,_),!c)return;let b=performance.now(),P=0;function U(I){P++,P%2===0&&Ht();let z=I-b,L=Math.min(1,z/Ei),ee=L<.5?1+.35*(L/.5):1+.35*(1-(L-.5)/.5);c.scale.setScalar(ee),L<1?requestAnimationFrame(U):c.scale.setScalar(1)}requestAnimationFrame(U)}function gt(f,c){let _=oe.get(f.id);if(!_){c&&c();return}let b=performance.now(),P=0;function U(I){P++,P%2===0&&Ht();let z=I-b,L=Math.min(1,z/Ei),ee=L<.5?1+.35*(L/.5):1+.35*(1-(L-.5)/.5);_.scale.setScalar(ee),L<1?requestAnimationFrame(U):(_.scale.setScalar(1),c&&c())}requestAnimationFrame(U)}let pt=400,en=280,tn=.45,Tn=160,jn=280,an=350,ni=500,Ei=600,xr=400,no=280,As=.2,io=.18,Rs=!1,fa=new F,da=new F,_r=new F,pa=new F;function so(f=!1){g=!0;let c=null;if($==="playing"&&ot.length>0){let I=ot[ut],z=He(I);c=z&&z.hp>0?z:null}if(c||(c=Se.find(I=>I.player===G&&I.hp>0)),!c)return;let _=a.position.distanceTo(h);if(_<.1&&(_=o),p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(d).normalize(),_r.copy(Ie(c.x,c.y)),pa.copy(_r).add(p.clone().multiplyScalar(_)),f||Rs){h.copy(_r),a.position.copy(pa),a.lookAt(h),Ht();return}Rs=!0,fa.copy(h),da.copy(a.position);let b=performance.now(),P=0;ri.shadowMap.enabled=!1;function U(I){P++,P%2===0&&Ht();let z=Math.min(1,(I-b)/pt),L=z*(2-z);h.lerpVectors(fa,_r,L),a.position.lerpVectors(da,pa,L),a.lookAt(h),z<1?requestAnimationFrame(U):(ri.shadowMap.enabled=!0,Rs=!1)}requestAnimationFrame(U)}let w=0,G=1,$="draft",W="pvp",Y=1,Ue={1:"",2:""},qe=null,it=null,ht=null,Mt="long";function Je(f){return W==="online"&&Ue[f]?Ue[f]:"Player "+f}let bt=1,pn=0,Bn=null;async function On(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{Bn=await navigator.wakeLock.request("screen"),Bn.addEventListener("release",()=>{Bn=null})}catch{Bn=null}}function Gi(){Bn&&(Bn.release().catch(()=>{}),Bn=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&W==="cvcpu"&&$==="playing"&&On()});let hn="balanced",_t=new Set(Si),vr=[...Si],un=0,Ii={1:0,2:0},ii=null,Li=null,qn=null,wn=new Set,Ti=[],ot=[],ut=0,Wi=null,An=null,Rn=new Map,zh=null;function $d(f){if(!f||f.hp<=0)return;zh=f.id;let c=document.getElementById("unit-preview-card"),_=document.getElementById("unit-preview-image"),b=document.getElementById("unit-preview-name"),P=document.getElementById("unit-preview-meta"),U=document.getElementById("unit-preview-stats");c.classList.remove("player-1","player-2"),c.classList.add(f.player===1?"player-1":"player-2"),c.classList.toggle("level-2",f.level>=2&&f.level<3),c.classList.toggle("level-3",f.level>=3),_.src=ha[f.class]||"",_.alt=f.name,b.textContent=f.name,P.textContent=`Lv.${f.level} ${f.class} \u2014 ${Je(f.player)}`;let I=[["HP",`${f.hp}/${f.maxHp}`,"stat-val-hp"],["MP",`${f.mp}/${f.maxMp}`,""],["STR",Vi(f,"str"),""],["AGI",Vi(f,"agi"),""],["VIT",Vi(f,"vit"),""],["DEX",Vi(f,"dex"),""],["LUK",Vi(f,"luk"),""],["INT",Vi(f,"int"),""]];f.tempDebuff&&f.tempDebuff.poison!=null&&I.push(["Poison",`${f.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),f.tempBuff&&f.tempBuff.heal!=null&&I.push(["Regen",`${f.tempBuff.heal} HP/turn`,"stat-val-buff"]),U.innerHTML=I.map(([L,ee,ie])=>{let ae=ie?` ${ie}`:"";return`<span class="stat-label">${L}</span><span class="stat-val${ae}">${ee}</span>`}).join("");let z=f.maxHp>0&&f.hp/f.maxHp<.3;c.classList.toggle("low-hp",z),c.style.display="block"}function ma(){zh=null;let f=document.getElementById("unit-preview-card");f.classList.remove("low-hp","level-2","level-3"),f.style.display="none"}let mn=!1,es=!1,Cs=!1,si=null,yn=!1,hi=!1,Ps=!1,Di=[],Ui=new Mi;n.add(Ui);let Xi=[],Mr=!0,Is=0,Vh=0;function Ht(){Mr=!0,Is=performance.now()}let ga=new Mi;n.add(ga);let Il=[],Kd=tt,Zd=.02,Jd=3368703,jd=13382451;function Qd(f,c){let _=f/2,b=_-c,P=new aa;P.moveTo(-_,-_),P.lineTo(_,-_),P.lineTo(_,_),P.lineTo(-_,_),P.lineTo(-_,-_);let U=new ra;return U.moveTo(-b,-b),U.lineTo(b,-b),U.lineTo(b,b),U.lineTo(-b,b),U.lineTo(-b,-b),P.holes.push(U),new Ja(P)}let ep=Qd(Kd,Zd);function Ni(f=null){let c=Se.filter(_=>_.hp>0&&_.id!==f).map(_=>`${_.id},${_.x},${_.y},${_.player}`).sort().join("|");if(!(Ni._lastSig===c&&Ni._lastExclude===f)){for(Ni._lastSig=c,Ni._lastExclude=f,Il.forEach(_=>_.dispose()),Il.length=0;ga.children.length;){let _=ga.children[0];ga.remove(_)}Se.filter(_=>_.hp>0&&_.id!==f).forEach(_=>{let b=_.x,P=_.y,I=(Jn+e.height[P][b]*.35)/2+Jn/2,z=b*tt-Pe+tt/2,L=P*tt-Fe+tt/2,ee=I+.02,ie=_.player===1?Jd:jd,ae=new Un({color:ie,side:Ln}),k=new $e(ep,ae);k.rotation.x=-Math.PI/2,k.position.set(z,ee,L),ga.add(k),Il.push(ae)}),Ht()}}let tp=1.15,Ll={1:8102901,2:15628943},wi=(()=>{let f=new Un({color:Ll[1]}),c=new $e(new Ci(.1,.25,8),f);return c.rotation.x=Math.PI,c.visible=!1,n.add(c),c})();function Dl(){if($!=="playing"||ot.length===0||Ps){wi.visible=!1,wi.removeFromParent(),n.add(wi);return}let f=ot[ut],c=He(f);if(!c||c.hp<=0){wi.visible=!1,wi.removeFromParent(),n.add(wi);return}let _=oe.get(f);if(!_){wi.visible=!1;return}wi.removeFromParent(),_.add(wi),wi.position.set(0,tp,0),wi.material&&wi.material.color.setHex(Ll[c.player]??Ll[1]),wi.visible=!0}function Nv(f){let c=[[0,1],[0,-1],[1,0],[-1,0]],_=[];for(let[b,P]of c){let U=f.x+b,I=f.y+P;!ws(e,U,I)||Se.some(L=>L.id!==f.id&&L.x===U&&L.y===I&&L.hp>0)||_.push(Math.atan2(b,P))}return _}function Gh(f){if(Di.length===0)return f;if(Di.length===1)return Di[0];let c=Di[0],_=Math.abs(Wh(f-c));for(let b=1;b<Di.length;b++){let P=Math.abs(Wh(f-Di[b]));P<_&&(_=P,c=Di[b])}return c}function Wh(f){for(;f>Math.PI;)f-=2*Math.PI;for(;f<-Math.PI;)f+=2*Math.PI;return f}let np=1.2,ts=(()=>{let f=new $e(new Ci(.12,.35,8),new Un({color:4500223}));return f.rotation.x=-Math.PI/2,f.visible=!1,n.add(f),f})();function ip(f,c){if(!Ps||ot.length===0||Di.length===0)return;let _=ot[ut],b=He(_),P=oe.get(_);if(!b||!P)return;mo(f,c),Ds.setFromCamera(Us,a);let U=Ds.intersectObjects(Z.children,!0);if(U.length===0)return;let I=null;for(let ae of U)if(gu(ae)){I=ae.point;break}if(!I)return;let z=Ie(b.x,b.y),L=I.x-z.x,ee=I.z-z.z;if(L*L+ee*ee<1e-6)return;let ie=Math.atan2(L,ee);P.rotation.y=Gh(ie)}function sp(){if(ot.length===0)return;let f=ot[ut],c=He(f),_=oe.get(f);if(!c||!_)return;Di=[[0,1],[0,-1],[1,0],[-1,0]].map(([P,U])=>Math.atan2(P,U)),ts.removeFromParent(),_.add(ts),ts.position.set(0,np,0),ts.rotation.x=-Math.PI/2,ts.rotation.y=0,ts.rotation.z=Math.PI,ts.visible=!0,_.rotation.y=Di[0]}function rp(){ts.visible=!1,ts.removeFromParent(),n.add(ts)}let Ul=[];(function(){let c=Pi,_=[1];for(let b=0;b<Math.floor((c-1)/2);b++)_.push(2,2,1,1);c%2===1?_.push(2):(_.push(2,2),_.push(1)),Ul=_})();function qi(){return Ul[un]}function Xh(){let f=qi();return Ii[f]+1}function ya(){_e=0,J=0,ce.forEach(_=>{ue.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),ce.clear(),be={30:!1,20:!1,10:!1};let f=Pi,c=[1];for(let _=0;_<Math.floor((f-1)/2);_++)c.push(2,2,1,1);f%2===1?c.push(2):(c.push(2,2),c.push(1)),Ul=c,$="draft",un=0,Ii[1]=0,Ii[2]=0,_t=new Set(Si),vr=vv([...Si]),ii=null,Li=null,qn=null,wn.clear(),Ti=[],Fn(),Bl(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function Nl(){return Se.filter(f=>f.hp>0).sort((f,c)=>{let _=ve(f,"agi"),b=ve(c,"agi");if(b!==_)return b-_;let P=ve(f,"dex");return ve(c,"dex")-P}).map(f=>f.id)}function ap(f){let c=new Set(Se.filter(ie=>ie.hp>0).map(ie=>ie.y*e.w+ie.x)),_=(ie,ae)=>c.has(ae*e.w+ie),b=(ie,ae)=>ie>=0&&ie<e.w&&ae>=0&&ae<e.h,P=(ie,ae)=>b(ie,ae)&&ws(e,ie,ae)&&!_(ie,ae),U=oe.get(f.id),I=U!=null?U.rotation.y:f.player===1?Math.PI:0,z=f.x-Math.round(Math.cos(I)),L=f.y+Math.round(Math.sin(I));if(P(z,L))return{gx:z,gy:L};let ee=[[0,1],[0,-1],[1,0],[-1,0]];for(let[ie,ae]of ee){let k=f.x+ie,le=f.y+ae;if(P(k,le))return{gx:k,gy:le}}return null}function op(f,c,_,b){let P=b?.position&&b.position.gx!=null&&b.position.gy!=null?{gx:b.position.gx,gy:b.position.gy}:ap(f);if(!P)return null;let U=c.class&&Si.includes(c.class)?c.class:"knight",I=c.hairColor!=null?c.hairColor:(js[U]||js.knight).hair,z=b?.ownerPlayer!=null?b.ownerPlayer:f.player,L={id:xe++,player:z,x:P.gx,y:P.gy,level:c.level!=null?c.level:1,name:c.name!=null?c.name:"Summoned",class:U,hairColor:I,hp:c.hp!=null?c.hp:10,maxHp:c.maxHp!=null?c.maxHp:10,mp:c.mp!=null?c.mp:5,maxMp:c.maxMp!=null?c.maxMp:5,str:c.str!=null?c.str:5,agi:c.agi!=null?c.agi:5,vit:c.vit!=null?c.vit:5,dex:c.dex!=null?c.dex:5,luk:c.luk!=null?c.luk:5,int:c.int!=null?c.int:5,range:c.range!=null?c.range:1};b?.omitSummonedBy||(L.summonedBy=f.id),_!=null&&Array.isArray(_)&&_.length>0&&(L.summonedSkills=_),Se.push(L),Qe(L),E(L,null,null),Kt(L);let ee=oe.get(L.id);if(ee&&b?.useGrayscaleAppearance&&It(ee),ee){let ye=function(We){we++,we%2===0&&Ht();let ke=We-le;if(ke<xr){let Pt=ke/xr,mt=1-(1-Pt)*(1-Pt),ze=As+(1-As)*mt;ee.scale.setScalar(ze),requestAnimationFrame(ye);return}let st=ke-xr;if(st<no){let Pt=st/no,mt=Math.sin(Pt*Math.PI);ee.position.y=k.y+io*mt,requestAnimationFrame(ye);return}ee.scale.setScalar(1),ee.position.y=k.y,Ht()},ae=oe.get(f.id);ee.rotation.y=b?.ownerPlayer!=null?z===1?Math.PI:0:ae!=null?ae.rotation.y:f.player===1?Math.PI:0,ee.scale.setScalar(As);let k=Ie(L.x,L.y),le=performance.now(),we=0;requestAnimationFrame(ye)}let ie=$==="playing"&&ot.length>0&&ut>=0&&ut<ot.length?ot[ut]:null;if(ot=Nl(),ie!=null){let ae=ot.indexOf(ie);ae>=0&&(ut=ae)}return Ni(),typeof Rt=="function"&&Rt(),Ht(),L}function xa(f,c){let _=Se.indexOf(c);if(_===-1)return null;Ge(c.id),Se.splice(_,1),J=Math.max(0,J-1);let b=oe.get(c.id);b&&(n.remove(b),oe.delete(c.id));let P=c.class&&Si.includes(c.class)?c.class:"knight",U=c.hairColor!=null?c.hairColor:(js[P]||js.knight).hair,I=ye=>Math.max(1,Math.floor((ye||0)*6/7)),z={name:"Reanimated "+c.name,class:P,hairColor:U,level:c.level,hp:I(c.maxHp),maxHp:I(c.maxHp),mp:I(c.maxMp),maxMp:I(c.maxMp),str:I(c.str),agi:I(c.agi),vit:I(c.vit),dex:I(c.dex),luk:I(c.luk),int:I(c.int),range:c.range},L=c.summonedSkills&&c.summonedSkills.length>0?c.summonedSkills.slice():(ua[P]||[]).slice(),ee=new Set(Se.filter(ye=>ye.hp>0).map(ye=>ye.y*e.w+ye.x)),ie=c.x,ae=c.y,k=ws(e,ie,ae)&&!ee.has(ae*e.w+ie),le={useGrayscaleAppearance:!0,ownerPlayer:f.player,omitSummonedBy:!0};k&&(le.position={gx:ie,gy:ae});let we=op(f,z,L,le);return we&&(we.isReanimated=!0),we}function lp(){document.getElementById("draft-panel").style.display="none";let f=document.getElementById("draft-placement-card");f&&(f.style.display="none",f.innerHTML=""),Fn();let c=document.getElementById("battle-start-overlay");c&&(c.classList.add("visible"),c.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");for(_&&(_.style.display="none",_.innerHTML=""),$="playing",w=0,ot=Nl(),ut=0;ut<ot.length;){let U=He(ot[ut]);if(U&&U.hp>0)break;ut++}ut>=ot.length&&(ut=0);let b=He(ot[ut]);G=b?b.player:1,yn=!1,hi=!1,An=ot[ut],setTimeout(()=>{c&&(c.classList.remove("visible"),c.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",Ni(),Rt(),Dl(),so(!0),W==="cvcpu"&&On()},4e3)}function Bl(){let f=document.getElementById("draft-panel"),c=document.getElementById("draft-title"),_=document.getElementById("draft-classes"),b=document.getElementById("draft-message"),P=document.getElementById("turn-player"),U=document.getElementById("draft-placement-card");if(ii){f.style.display="none",P.textContent=`Draft: ${Je(qi())} \u2014 place ${Xn[ii].name}`;let ee=qi();U.style.display="flex",U.classList.remove("player-1","player-2"),U.classList.add("player-"+ee),U.style.left=ee===1?"24px":"",U.style.right=ee===2?"24px":"";let ie=[...Se.filter(le=>le.player===ee).map(le=>le.class),ii],ae=(le,we)=>{let ye=Xn[le];return`
        <div class="draft-class-card${we?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${ha[le]||""}" alt="${ye.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${ye.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${ye.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${ye.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${ye.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${ye.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${ye.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${ye.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${ye.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${ye.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${ye.range}</span>
            </div>
          </div>
        </div>
      `},k=3;if(ie.length>k){U.classList.add("draft-placement-cols");let le=[];for(let ye=0;ye<ie.length;ye+=k)le.push(ie.slice(ye,ye+k));let we=ie.length-1;U.innerHTML=le.map((ye,We)=>{let ke=We===le.length-1,st=ye.map((Pt,mt)=>{let rt=We*k+mt===we;return ae(Pt,rt)}).join("");return`<div class="draft-placement-col${ke?" draft-placement-col-current":""}">${st}</div>`}).join("")}else U.classList.remove("draft-placement-cols"),U.innerHTML=ie.map((le,we)=>{let ye=we===ie.length-1;return ae(le,ye)}).join("");W==="pvcpu"&&qi()===2&&setTimeout(ba,500),W==="cvcpu"&&setTimeout(ba,500);return}U.style.display="none",U.innerHTML="",$==="draft"&&(f.style.display="flex");let I=document.getElementById("draft-detail");I&&(I.style.display="");let z=qi();if(W!=="online"||z===Y){let We=function(){let ke=Li;if(!ke||!Xn[ke]){ee&&(ee.style.display=""),ie&&(ie.style.display="none"),ae&&(ae.style.display="none"),ye&&(ye.style.display="none");return}let st=Xn[ke],Pt=ua[ke]||[];ee&&(ee.style.display="none"),ie&&(ie.src=ha[ke]||"",ie.alt=st.name,ie.style.display="block"),ae&&(ae.style.display="block"),k&&(k.textContent=st.name),le&&(le.innerHTML=[["HP",st.hp],["MP",st.mp],["STR",st.str],["AGI",st.agi],["VIT",st.vit],["DEX",st.dex],["LUK",st.luk],["INT",st.int],["Range",st.range]].map(([ze,rt])=>`<span class="draft-stat-label">${ze}</span><span class="draft-stat-value">${rt}</span>`).join("")),we&&(we.innerHTML=Pt.length?Pt.map(ze=>`<div class="draft-detail-skill"><span class="draft-detail-skill-name">${ze.name}</span><span class="draft-detail-skill-desc">${ze.description||""}</span></div>`).join(""):'<div class="draft-detail-skill">No skills</div>'),ye&&(ye.style.display="block",ye.disabled=!_t.has(ke),ye.onclick=()=>{let ze=Li;ze&&_t.has(ze)&&Ol(ze)});let mt=ke?_.querySelector(`button.draft-class-card[data-class-key="${ke}"]`):null;qn!==mt&&(qn&&qn.classList.remove("draft-class-card-selected"),qn=mt,qn&&qn.classList.add("draft-class-card-selected"))};c.textContent=`${Je(z)}: Pick a class (${Xh()}/${Pi})`,b.textContent="",qn=null,_.innerHTML="",P.textContent=`Draft: ${Je(z)} \u2014 pick a class`;let ee=document.getElementById("draft-detail-placeholder"),ie=document.getElementById("draft-detail-image"),ae=document.getElementById("draft-detail-content"),k=document.getElementById("draft-detail-name"),le=document.getElementById("draft-detail-stats"),we=document.getElementById("draft-detail-skills"),ye=document.getElementById("draft-select-btn");vr.forEach(ke=>{let st=_t.has(ke),Pt=Xn[ke],mt=document.createElement("button");mt.type="button",mt.dataset.classKey=ke,mt.className="draft-class-card"+(st?"":" draft-class-card-unavailable")+(Li===ke?" draft-class-card-selected":""),mt.disabled=!st,mt.innerHTML=`
          <img class="draft-class-card-image" src="${ha[ke]||""}" alt="${Pt.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${Pt.name}</div>
          </div>
        `,st&&mt.addEventListener("click",()=>{Li=ke,qn&&qn!==mt&&qn.classList.remove("draft-class-card-selected"),qn=mt,mt.classList.add("draft-class-card-selected"),We()}),Li===ke&&(qn=mt),_.appendChild(mt)}),We()}else{c.textContent=`${Je(z)} is picking a class`,b.textContent="",qn=null,_.innerHTML="",P.textContent=`Draft: ${Je(z)} \u2014 pick a class`;let ee=document.getElementById("draft-detail-placeholder"),ie=document.getElementById("draft-detail-image"),ae=document.getElementById("draft-detail-content"),k=document.getElementById("draft-select-btn");ee&&(ee.style.display=""),ie&&(ie.style.display="none"),ae&&(ae.style.display="none"),k&&(k.style.display="none")}W==="pvcpu"&&qi()===2&&setTimeout(ba,500),W==="cvcpu"&&setTimeout(ba,500)}function Ol(f){if(!_t.has(f)||ii)return;ii=f;let c=qi(),_=new Set(Se.map(U=>U.y*e.w+U.x)),b=Av(e,c,_),P=Od(e,b);Ti=P,wn=new Set(P.map(U=>U.gy*e.w+U.gx)),Rp(P),Bl(),W==="online"&&c===Y&&typeof fn=="function"&&fn({type:"draftPick",classKey:f})}function Fl(f,c){if(!ii)return;let _=qi(),b=c*e.w+f;if(!wn.has(b))return;let P=Xn[ii],U={id:xe++,player:_,x:f,y:c,level:1,name:P.name,class:ii,hairColor:(js[ii]||js.knight).hair,hp:P.hp,maxHp:P.maxHp,mp:P.mp,maxMp:P.maxMp,str:P.str,agi:P.agi,vit:P.vit,dex:P.dex,luk:P.luk,int:P.int,range:P.range};Se.push(U),Qe(U),E(U,null,null),Kt(U);let I=oe.get(U.id);I&&(I.rotation.y=U.player===1?Math.PI:0),_t.delete(ii),ii=null,wn.clear(),Ti=[],Fn(),W==="online"&&_===Y&&typeof fn=="function"&&fn({type:"draftPlace",gx:f,gy:c});let z=document.getElementById("draft-placement-card");if(z&&(z.style.display="none",z.innerHTML=""),Ii[_]++,un++,un>=2*Pi){lp();return}let L=qi(),ee=Xh(),ie=document.getElementById("draft-panel"),ae=document.getElementById("draft-title"),k=document.getElementById("draft-message"),le=document.getElementById("draft-detail"),we=document.getElementById("draft-classes"),ye=document.getElementById("turn-player"),We=W!=="online"||L===Y;ie&&ae&&we&&ye&&(ie.style.display="flex",ae.textContent=We?`${Je(L)}: Pick a class (${ee}/${Pi})`:`${Je(L)} is picking a class`,k&&(k.textContent=We?"Get ready\u2026":""),qn=null,we.innerHTML="",ye.textContent=`Draft: ${Je(L)} \u2014 pick a class`),le&&(le.style.display="none"),setTimeout(Bl,1500)}function Rt(){Rt._pending||(Rt._pending=!0,requestAnimationFrame(()=>{Rt._pending=!1,cp()}))}function cp(){let f=Rt._cache||(Rt._cache={}),c=f.turnEl||(f.turnEl=document.getElementById("turn-player")),_=f.menuLabel||(f.menuLabel=document.getElementById("menu-label")),b=f.turnMenu||(f.turnMenu=document.getElementById("turn-menu")),P=f.unitInfo||(f.unitInfo=document.getElementById("unit-info")),U=f.unitNameEl||(f.unitNameEl=document.getElementById("unit-name")),I=f.unitLevelClassEl||(f.unitLevelClassEl=document.getElementById("unit-level-class")),z=f.unitStatsEl||(f.unitStatsEl=document.getElementById("unit-stats")),L=f.unitClassImageEl||(f.unitClassImageEl=document.getElementById("unit-class-image"));if($==="playing"&&Se.forEach(k=>{if(k.hp<=0)return;let le=oe.get(k.id);le&&H(le,k.maxHp>0&&k.hp/k.maxHp<Le)}),b.classList.remove("player-1","player-2"),b.classList.add(G===1?"player-1":"player-2"),b.classList.toggle("level-2",!1),b.classList.toggle("level-3",!1),$==="playing"&&ot.length>0){let k=ot[ut],le=He(k),we=le&&le.hp>0?le:null;if(W==="online"&&we&&we.player!==Y)An=null;else if(we){let ye=An!=null?He(An):null;(An==null||!ye||ye.hp<=0)&&(An=k)}}if(An!=null){let k=He(An);if(k&&k.hp>0){P.classList.remove("no-unit");let le=k.maxHp>0&&k.hp/k.maxHp<.25;b.classList.toggle("low-hp",le),b.classList.toggle("level-2",k.level>=2&&k.level<3),b.classList.toggle("level-3",k.level>=3),U.textContent=k.name,I.textContent=`Lv.${k.level} ${k.class}`,L.src=ha[k.class]||"",L.alt=k.name;let we=[["HP",`${k.hp}/${k.maxHp}`,"stat-val-hp"],["MP",`${k.mp}/${k.maxMp}`,""],["STR",Vi(k,"str"),""],["AGI",Vi(k,"agi"),""],["VIT",Vi(k,"vit"),""],["DEX",Vi(k,"dex"),""],["LUK",Vi(k,"luk"),""],["INT",Vi(k,"int"),""]];k.tempDebuff&&k.tempDebuff.poison!=null&&we.push(["Poison",`${k.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),k.tempBuff&&k.tempBuff.heal!=null&&we.push(["Regen",`${k.tempBuff.heal} HP/turn`,"stat-val-buff"]),z.innerHTML=we.map(([ye,We,ke])=>{let st=ke?` ${ke}`:"";return`<span>${ye}</span><span class="stat-val${st}">${We}</span>`}).join("")}else b.classList.remove("low-hp","level-2","level-3"),P.classList.add("no-unit"),U.textContent="\u2014 Select a unit \u2014",I.textContent="",z.textContent="",L.src="",L.alt=""}else b.classList.remove("low-hp","level-2","level-3"),P.classList.add("no-unit"),U.textContent="\u2014 Select a unit \u2014",I.textContent="",z.textContent="",L.src="",L.alt="";if(An!=null)c.textContent=`${Je(G)} \u2014 Unit ${U.innerHTML} active`;else{let k=ot.length?He(ot[ut]):null;c.textContent=k?`${k.name} (${Je(G)})`:Je(G)}_.textContent=Je(G);let ee=f.btnAttack||(f.btnAttack=document.getElementById("btn-attack")),ie=f.btnSkill||(f.btnSkill=document.getElementById("btn-skill")),ae=f.btnEnd||(f.btnEnd=document.getElementById("btn-end"));if(W==="cvcpu"&&$==="playing")ee.disabled=!0,ie.disabled=!0,ae&&(ae.disabled=!0),c.textContent=`${Je(G)} (CPU)`;else if(Ps)ee.disabled=!0,ie.disabled=!0,c.textContent="Click on map to choose facing direction";else if($==="playing"){ee.disabled=hi;let k=ot.length?ot[ut]:null,le=k?He(k):null,we=le&&le.hp>0?le:null,ye=W!=="cvcpu"&&(W!=="pvcpu"||G===1)&&(W!=="online"||G===Y),We=ye&&we&&!hi?Yl(we):[];ie.disabled=hi||!ye||We.length===0,ae&&(ae.disabled=W==="online"&&G!==Y)}if($==="playing"){let k=Math.min(w+1,Ss);c.textContent=(c.textContent||"")+` \u2014 Turn ${k}/${Ss}`;let le=f.turnsLeftEl||(f.turnsLeftEl=document.getElementById("turns-left")),we=f.turnsLeftValueEl||(f.turnsLeftValueEl=document.getElementById("turns-left-value"));if(le&&we){le.style.display="";let ye=Math.max(0,Ss-w);we.textContent=String(ye),le.classList.toggle("turns-left-low",ye<=10),(ye===30||ye===20||ye===10)&&(be[ye]||(lt(ye),be[ye]=!0))}}else{let k=f.turnsLeftEl||(f.turnsLeftEl=document.getElementById("turns-left"));k&&(k.style.display="none")}$==="playing"&&ql(G)&&!mn?(Wi!=null&&clearTimeout(Wi),Wi=setTimeout(()=>{Wi=null,xn()},700)):Wi!=null&&(clearTimeout(Wi),Wi=null)}function nn(){if(W==="online"&&G===Y&&typeof nr=="function"){let k=ot[ut],le=oe.get(k),we=le?.rotation.y;nr({type:"endTurn",unitId:k,facingAngle:we})}Ht(),ma(),es=!1,Cs=!1,si=null,Ps=!1,Di=[],rp(),Fn();let f=ot.length;if(f===0)return;let c=ot[ut],_=He(c);if(_&&_.tempDebuff&&_.tempDebuff.duration--,_&&_.tempDebuff&&_.tempDebuff.duration<=0&&(_.tempDebuff=void 0),_&&_.tempBuff&&_.tempBuff.duration--,_&&_.tempBuff&&_.tempBuff.duration<=0&&(_.tempBuff=void 0),_&&_.hp>0){let k=Math.ceil(ve(_,"int")*.15);_.mp=Math.min(_.maxMp,_.mp+k)}if(_&&_.hp>0){let k=_.x,le=_.y;e.type[le][k]===nt.CENTER&&_.level===1&&Ne(_);let we=_.player===1?nt.BASE_TOP:nt.BASE_BOTTOM;e.type[le][k]===we&&_.level===2&&Ne(_)}if(w++,w>=Ss){Fp();return}let b=ut,P=(b+1)%f,U=0;for(;U<f;){let k=ot[P],le=He(k);if(le&&le.hp>0)break;P=(P+1)%f,U++}let I=f>0&&P<=b;ut=P;let z=["poison"],L=ot[ut],ee=He(L);for(let k=0;k<f&&!(!ee||ee.hp<=0);k++){let le=ee.tempDebuff||{},we=z.find(We=>!isNaN(le[We])),ye=le[we]||0;if(ye<=0)break;if(console.log("[DEBUFF]",`${we}: ${ye} to ${ee.name}`),ee.hp=Math.max(0,ee.hp-ye),ai(ee.x,ee.y,String(ye),!1,we),kt(ee),ee.hp<=0){Cn(ee),P=(ut+1)%f;let We=0;for(;We<f;){let ke=ot[P],st=He(ke);if(st&&st.hp>0)break;P=(P+1)%f,We++}ut=P;continue}break}let ie=ot[ut],ae=He(ie);if(ae&&ae.hp>0){let k=ae.tempBuff,le=k&&k.heal!=null&&!isNaN(k.heal)?Number(k.heal):0;if(le>0){let we=ae.hp;ae.hp=Math.min(ae.maxHp,ae.hp+le);let ye=ae.hp-we;ye>0&&(console.log("[BUFF]",`heal: ${ye} to ${ae.name}`),ai(ae.x,ae.y,`+${ye}`,!1,"heal"),kt(ae))}}G=ae&&ae.hp>0?ae.player:1,yn=!1,hi=!1,An=ot[ut],I&&(ot=Nl(),ut=0),Rt(),Dl(),so()}document.getElementById("btn-attack").addEventListener("click",()=>{if(mn||hi||$!=="playing"||ot.length===0)return;if(W==="online"){let P=ot[ut],U=He(P);if(!U||U.player!==Y)return}ma();let f=ot[ut],c=He(f);if(!c||c.hp<=0)return;let _=c.range!=null?c.range:1;An=f,es=!0;let b=Fd(e,c.x,c.y,_);Rn=new Map,b.forEach((P,U)=>{let I=U%e.w,z=Math.floor(U/e.w);Es(e,c.x,c.y,I,z)&&Rn.set(U,P)}),Cp(Rn),Rt()}),document.getElementById("btn-skill").addEventListener("click",f=>{if(f.preventDefault(),f.stopPropagation(),mn||hi)return;let c=ot[ut],_=c?He(c):null,b=_&&_.hp>0?_:null;if(!b||b.player!==G||W==="online"&&b.player!==Y)return;let P=document.getElementById("skill-list-overlay"),U=document.getElementById("btn-skill");if(!U)return;if(P&&P.style.display==="block"){P.style.display="none";return}let I=Yl(b),z=U.getBoundingClientRect();P||(P=document.createElement("div"),P.id="skill-list-overlay",P.className="skill-list-overlay",P.setAttribute("aria-hidden","true"),document.body.appendChild(P)),P.style.left=`${z.left}px`,P.style.top=`${z.top-4}px`,P.style.transform="translateY(-100%)",P.style.right="auto",P.style.bottom="auto",P.style.display="none",I.length===0?P.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(P.innerHTML=I.map((L,ee)=>`<button type="button" class="skill-option" data-skill-index="${ee}" ${L.disabled?"disabled":""}>
          <span class="skill-name">${L.name}</span> <span class="skill-meta">${L.cost} MP \xB7 Lv.${L.level}</span><br/>
          <span class="skill-meta">${L.description}</span>
        </button>`).join(""),P.querySelectorAll(".skill-option").forEach((L,ee)=>{L.addEventListener("click",ie=>{ie.preventDefault(),ie.stopPropagation();let ae=I[ee];if(si=ae,P.style.display="none",P.setAttribute("aria-hidden","true"),ae.target==="self"){if(b.mp<ae.cost)return;b.mp-=ae.cost,hi=!0;let k={showFloatingCombatText:ai,handleUnitDeath:Cn,updateUnitSlashVisibility:kt,updateTurnUI:Rt,units:Se,reanimateDeadUnit:xa};W==="online"&&b.player===Y&&typeof fn=="function"&&(fn({type:"requestRender"}),nr({type:"skill",unitId:b.id,targetId:b.id,effectKey:ae.effectKey})),fo(b,b,ae,k,()=>{Fn(),Cs=!1,si=null,us=new Set,b.hp<=0?Rt():yn&&b.hp>0?nn():Rt()}),Rt();return}if(ae.target==="ally"&&po(b,ae,Se).filter(we=>we.targetUnit&&we.targetUnit.id!==b.id).length===0&&b.mp>=ae.cost){b.mp-=ae.cost,hi=!0;let we={showFloatingCombatText:ai,handleUnitDeath:Cn,updateUnitSlashVisibility:kt,updateTurnUI:Rt,units:Se,reanimateDeadUnit:xa};W==="online"&&b.player===Y&&typeof fn=="function"&&(fn({type:"requestRender"}),nr({type:"skill",unitId:b.id,targetId:b.id,effectKey:ae.effectKey})),fo(b,b,ae,we,()=>{Fn(),Cs=!1,si=null,us=new Set,b.hp<=0?Rt():yn&&b.hp>0?nn():Rt()}),Rt();return}Cs=!0,es=!1,Ap(b,ae),Rt()})})),requestAnimationFrame(()=>{P.style.display="block",P.style.visibility="visible",P.setAttribute("aria-hidden","false")})}),document.addEventListener("click",f=>{let c=document.getElementById("skill-list-overlay"),_=document.getElementById("btn-skill"),b=document.querySelector(".skill-wrap");!c||c.style.display!=="block"||b&&b.contains(f.target)||c.contains(f.target)||(c.style.display="none",c.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(mn||Ps||$!=="playing"||ot.length===0)return;let f=ot[ut],c=He(f);if(!c||c.hp<=0||W==="online"&&c.player!==Y)return;Ps=!0,An=null,es=!1,Rn=new Map,Fn(),sp(),Dl();let _=document.getElementById("turn-player");_.textContent="Click on map to choose facing direction",Rt()}),h.set(0,8,0),a.position.copy(h).add(d),a.lookAt(h);let br=document.getElementById("mode-select-overlay"),qh=document.getElementById("mode-carousel-track"),Yh=document.getElementById("mode-carousel-prev"),$h=document.getElementById("mode-carousel-next"),ro=document.getElementById("mode-carousel-dots"),hs=document.getElementById("mode-play-btn"),Kh=document.getElementById("mode-settings-pvp"),Zh=document.getElementById("mode-settings-pvp-map"),Jh=document.getElementById("mode-settings-pvp-num-units"),jh=document.getElementById("mode-settings-pvp-none"),Qh=document.getElementById("mode-settings-options"),ao=document.getElementById("pvp-map-mode"),_a=document.getElementById("pvp-num-units"),va=document.getElementById("ai-draft-preference"),hp=document.getElementById("cvcpu-num-games"),oo=document.getElementById("cvcpu-num-units"),eu=document.getElementById("cvcpu-grid-w"),tu=document.getElementById("cvcpu-grid-h"),nu=document.getElementById("cvcpu-center-plaza"),iu=document.getElementById("cvcpu-max-turns"),Sr=document.getElementById("move-speed"),Er=document.getElementById("draft-picks-per-player"),Qs=document.getElementById("online-connect-overlay"),Bi=document.getElementById("online-player-name"),er=document.getElementById("online-create-section"),Tr=document.getElementById("online-join-section"),wr=document.getElementById("online-offer-text"),lo=document.getElementById("online-reply-text"),co=document.getElementById("online-paste-offer"),Ma=document.getElementById("online-join-answer-section"),Ar=document.getElementById("online-answer-text"),kl=document.getElementById("online-error"),su=document.getElementById("online-waiting-msg"),ns=Ts?["pvp","pvcpu","cvcpu","online","story"]:["pvp","pvcpu","online","story"],Hl=ns.length-1,zn=0;function zl(){return zn===Hl}function up(){return ns[zn]==="online"}function ho(f){zn=Math.max(0,Math.min(f,Hl)),qh&&(qh.style.transform=`translateX(-${zn*100}%)`),ro&&ro.querySelectorAll(".mode-dot").forEach((_,b)=>{_.classList.toggle("active",b===zn),_.setAttribute("aria-selected",b===zn)}),Kh&&(Kh.style.display=zn===0||zn===1||zl()||ns[zn]==="online"?"":"none"),Zh&&(Zh.style.display=zn===0||zn===1||ns[zn]==="online"?"":"none"),Jh&&(Jh.style.display=ns[zn]==="pvp"?"":"none"),ns[zn]==="pvp"&&_a&&(_a.style.width="11em",_a.value=String(Math.max(1,Math.min(20,Pi)))),jh&&(jh.style.display=zl()?"":"none"),Qh&&(Qh.style.display=Ts&&ns[zn]==="cvcpu"?"":"none"),Ts&&ns[zn]==="cvcpu"&&oo&&(oo.value=String(Math.max(1,Math.min(20,Pi))));let c=hs?.querySelector(".mode-play-text");hs&&c&&(zl()?(hs.disabled=!0,c.textContent="Coming Soon"):(hs.disabled=!1,c.textContent=up()?"Connect":"Play game"))}if(ro)for(let f=0;f<=Hl;f++){let c=document.createElement("button");c.type="button",c.className="mode-dot"+(f===0?" active":""),c.setAttribute("role","tab"),c.setAttribute("aria-label",`Mode ${f+1}`),c.setAttribute("aria-selected",f===0),c.addEventListener("click",()=>ho(f)),ro.appendChild(c)}if(Yh&&Yh.addEventListener("click",()=>ho(zn-1)),$h&&$h.addEventListener("click",()=>ho(zn+1)),br&&!Ts){let f=br.querySelector('.mode-slide[data-mode="cvcpu"]');f&&f.parentNode&&f.parentNode.removeChild(f)}if(ho(0),Sr&&(Sr.value=String(Js),Sr.addEventListener("input",()=>{let f=parseInt(Sr.value,10);!Number.isNaN(f)&&f>=0&&(Js=f)}),Sr.addEventListener("change",()=>{let f=parseInt(Sr.value,10);!Number.isNaN(f)&&f>=0&&(Js=f)})),Er&&(Er.value=String(Pi),Er.addEventListener("input",()=>{let f=parseInt(Er.value,10);!Number.isNaN(f)&&f>=1&&(Pi=f)}),Er.addEventListener("change",()=>{let f=parseInt(Er.value,10);!Number.isNaN(f)&&f>=1&&(Pi=f)})),va&&(yv.forEach(f=>{let c=document.createElement("option");c.value=f.value,c.textContent=f.label,va.appendChild(c)}),va.value=hn,va.addEventListener("change",()=>{hn=va.value})),Qs){let f=document.getElementById("online-btn-create"),c=document.getElementById("online-btn-join"),_=document.getElementById("online-btn-copy-offer"),b=document.getElementById("online-btn-connect"),P=document.getElementById("online-btn-join-connect"),U=document.getElementById("online-btn-copy-answer");f&&f.addEventListener("click",async()=>{let I=Bi&&Bi.value.trim()||"Player 1";if(!I){pi("Enter your name");return}pi("");try{Mt=ao&&ao.value||"long",ht=(Date.now()^Math.random()*4294967295)>>>0,Tt(Mt,ht);let z=await pp(I,ht,Mt);wr&&(wr.value=z),er&&(er.style.display="flex",er.style.alignItems="flex-start"),Tr&&(Tr.style.display="none")}catch(z){pi(z.message||"Failed to create game")}}),_&&wr&&_.addEventListener("click",()=>{wr.select(),document.execCommand("copy")}),b&&lo&&b.addEventListener("click",async()=>{let I=lo.value.trim();if(!I){pi("Paste your friend's reply");return}pi("");try{await gp(I)}catch(z){pi(z.message||"Failed to connect")}}),c&&c.addEventListener("click",()=>{if(!(Bi&&Bi.value.trim()||"Player 2")){pi("Enter your name");return}pi(""),er&&(er.style.display="none"),Tr&&(Tr.style.display="flex")}),P&&co&&P.addEventListener("click",async()=>{let I=co.value.trim();if(!I){pi("Paste the host's code");return}pi("");try{Y=2,Ue[2]=Bi&&Bi.value.trim()||"Player 2";let z=await mp(Ue[2],I);Ar&&(Ar.value=z),Ma&&(Ma.style.display="flex",Ma.style.alignItems="flex-start")}catch(z){pi(z.message||"Failed to join")}}),U&&Ar&&U.addEventListener("click",()=>{Ar.select(),document.execCommand("copy")})}let Ls=new Audio;Ls.loop=!0,Ls.volume=.3,Ls.preload="auto";let Vl=window.location.href.replace(/[^/]*$/,""),ru=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:Vl+(Vl.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Ls.src=ru,Ls.addEventListener("error",()=>{let f=Vl+"assets/music/tavern.mp3";f!==ru&&(Ls.src=f)});function fp(){Ls.paused&&Ls.play().catch(()=>{})}function pi(f){kl&&(kl.textContent=f||"",kl.style.display=f?"block":"none")}function au(){Qs&&(Qs.style.display="none",Qs.setAttribute("aria-hidden","true"))}function dp(){pi(""),Y=1,Ue={1:"",2:""},Qs&&(Qs.style.display="flex",Qs.setAttribute("aria-hidden","false")),Bi&&(Bi.value=""),er&&(er.style.display="none"),Tr&&(Tr.style.display="none"),wr&&(wr.value=""),lo&&(lo.value=""),co&&(co.value=""),Ar&&(Ar.value=""),Ma&&(Ma.style.display="none"),su&&(su.style.display="block")}function ou(f){return new Promise(c=>{if(f.iceGatheringState==="complete"){c();return}let _=()=>{f.iceGatheringState==="complete"&&(f.removeEventListener("icegatheringstatechange",_),c())};f.addEventListener("icegatheringstatechange",_)})}async function pp(f,c,_){qe&&(qe.close(),qe=null,it=null);let b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),P=[];b.addEventListener("icecandidate",z=>{z.candidate&&P.push(z.candidate)});let U=b.createDataChannel("game-sync",{ordered:!0});it=U,qe=b,U.addEventListener("open",()=>cu(U,!0));let I=await b.createOffer();return await b.setLocalDescription(I),await ou(b),JSON.stringify({type:"offer",sdp:b.localDescription.sdp,candidates:P,playerName:f||"Player 1"})}async function mp(f,c){let _=JSON.parse(c),b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),P=[];if(b.addEventListener("icecandidate",I=>{I.candidate&&P.push(I.candidate)}),b.addEventListener("datachannel",I=>{it=I.channel,qe=b,cu(it,!1)}),await b.setRemoteDescription(new RTCSessionDescription({type:"offer",sdp:_.sdp})),_.candidates&&_.candidates.length)for(let I of _.candidates)await b.addIceCandidate(new RTCIceCandidate(I));let U=await b.createAnswer();return await b.setLocalDescription(U),await ou(b),JSON.stringify({type:"answer",sdp:b.localDescription.sdp,candidates:P,playerName:f||"Player 2"})}async function gp(f){let c=JSON.parse(f);if(!qe){pi("Create a game first, then paste your friend's reply.");return}let _=qe.signalingState;if(_!=="stable"){if(_!=="have-local-offer"){pi("Wrong step: create a game first and send the code, then paste the reply.");return}if(await qe.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:c.sdp})),c.candidates&&c.candidates.length)for(let b of c.candidates)await qe.addIceCandidate(new RTCIceCandidate(b))}}let lu=0,tr=0,Gl=[],Wl=!1,uo=[];function Rr(){tr=Math.max(0,tr-1),tr===0&&Xl()}function Xl(){for(;tr===0&&Gl.length>0;){let f=Gl.shift();if(f.type==="move"){_p(f.unitId,f.toGx,f.toGy);return}if(f.type==="attack"){f.strikes&&Array.isArray(f.strikes)&&f.strikes.length>0?hu(f.unitId,f.targetId,void 0,void 0,f.strikes):hu(f.unitId,f.targetId,f.hit,f.damage);return}if(f.type==="skill"){vp(f);return}if(f.type==="endTurn"){if(f.unitId!=null&&f.facingAngle!=null){let c=oe.get(f.unitId);c&&(c.rotation.y=f.facingAngle)}nn();return}if(f.type==="unitDeath"){let c=He(f.unitId),_=f.killerId!=null?He(f.killerId):null;c&&(c.hp=0,Cn(c,_,{skipSync:!0})),Xl();return}}}function cu(f,c){if(f.binaryType="arraybuffer",f.addEventListener("message",U=>{try{let I=JSON.parse(U.data);if(I.seq!=null&&I.seq<=lu)return;I.seq!=null&&(lu=I.seq),yp(I,c)}catch(I){console.warn("Online message parse error",I)}}),f.addEventListener("close",()=>{W==="online"&&pi("Connection lost.")}),!c){let U=Ue[2]||Bi&&Bi.value.trim()||"Player 2";fn({type:"joined",playerName:U});return}let _=Bi&&Bi.value.trim()||"Player 1",b=ht??(Date.now()^Math.random()*4294967295)>>>0,P=Mt||"long";Ue[1]=_,fn({type:"start",mapSeed:b,mapMode:P,playerName:_}),au(),ya()}function yp(f,c){if(f.type==="start"){Ue[1]=f.playerName||"Player 1",ht=f.mapSeed,Mt=f.mapMode||"long",Tt(Mt,ht),au(),ya();return}if(f.type==="joined"){Ue[2]=f.playerName||"Player 2";return}if($==="draft"){f.type==="draftPick"?Ol(f.classKey):f.type==="draftPlace"&&Fl(f.gx,f.gy);return}$==="playing"&&(f.type==="move"||f.type==="attack"||f.type==="skill"||f.type==="endTurn"||f.type==="unitDeath"?(Gl.push(f),Xl()):f.type==="requestRender"&&Ht())}function fn(f){if(it&&it.readyState==="open"){let c=(typeof fn.seq<"u"?fn.seq:0)+1;fn.seq=c,it.send(JSON.stringify({...f,seq:c}))}}function nr(f){if(W==="online"&&Wl&&(f.type==="attack"||f.type==="skill"||f.type==="endTurn")){uo.push(f);return}fn(f)}function xp(){for(let f=0;f<uo.length;f++)fn(uo[f]);uo.length=0}function _p(f,c,_){let b=He(f);!b||b.hp<=0||(tr++,Gt(b,c,_,()=>{Ht(),Rt(),Rr()}))}function hu(f,c,_,b,P){let U=He(f),I=He(c);if(!U||!I||I.hp<=0)return;tr++;let z=()=>{Ht(),Rt(),Rr()};P&&P.length>0?Sa(U,I,void 0,void 0,z,P):Sa(U,I,_,b,z)}function vp(f){let c=He(f.unitId),_=f.targetId!=null?He(f.targetId):null;if(c)if(tr++,f.effectKey&&c.mp>=(ua[c.class]||[]).find(b=>b.effectKey===f.effectKey)?.cost){let b=(ua[c.class]||[]).find(P=>P.effectKey===f.effectKey);if(b){c.mp-=b.cost;let P={showFloatingCombatText:ai,handleUnitDeath:Cn,updateUnitSlashVisibility:kt,updateTurnUI:Rt,tryCollectPowerup:et,world:e,units:Se,reanimateDeadUnit:xa,updateUnitTileIndex:E,updateUnitPosition(z){let L=oe.get(z.id);L&&L.position.copy(Ie(z.x,z.y))},animateKnockback(z,L,ee,ie,ae,k){let le=oe.get(z.id);if(!le){k&&k();return}let we=Ie(L,ee).clone(),ye=Ie(ie,ae).clone(),We=performance.now(),ke=0;function st(Pt){ke++,ke%2===0&&Ht();let mt=Math.min(1,(Pt-We)/Js),ze=rt=>rt*rt*(3-2*rt);le.position.lerpVectors(we,ye,ze(mt)),mt<1?requestAnimationFrame(st):(le.position.copy(ye),k&&k())}requestAnimationFrame(st)}};to(f.effectKey,c,_,P),_&&kt(_);let I=b.target==="self"||b.target==="ally"?b.target==="self"?c:_:null;I?gt(I,()=>{Ht(),Rt(),Rr()}):(Ht(),setTimeout(()=>{Ht(),Rt(),Rr()},400))}else Ht(),setTimeout(()=>{Ht(),Rt(),Rr()},400)}else Ht(),setTimeout(()=>{Ht(),Rt(),Rr()},400)}function Mp(){if(ns[zn]==="story")return;let f=ns[zn];if(fp(),W=f,f==="online"){br&&br.classList.add("hidden"),dp();return}if(f==="pvp"||f==="pvcpu"){let c=ao&&ao.value||"long";Tt(c),f==="pvp"&&_a&&(Pi=Math.max(1,Math.min(20,parseInt(_a.value,10)||7)))}else f==="cvcpu"&&(Ts&&eu&&tu&&nu&&(Nh=Math.max(5,Math.min(50,parseInt(eu.value,10)||21)),Bh=Math.max(5,Math.min(50,parseInt(tu.value,10)||11)),Oh=Math.max(.1,Math.min(.9,parseFloat(nu.value)||.29))),Ts&&iu&&(Ss=Math.max(10,Math.min(999,parseInt(iu.value,10)||200))),Tt("long"));f==="cvcpu"&&(bt=Math.max(1,parseInt(hp?.value,10)||1),pn=0,oo&&(Pi=Math.max(1,Math.min(20,parseInt(oo.value,10)||7)))),br&&br.classList.add("hidden"),ya()}hs?hs.addEventListener("click",f=>{if(hs.disabled)return;let c=hs.querySelector(".mode-play-ripple");if(c){let _=hs.getBoundingClientRect();c.style.left=f.clientX-_.left+"px",c.style.top=f.clientY-_.top+"px",c.style.width=c.style.height="20px",c.style.marginLeft=c.style.marginTop="-10px",c.classList.remove("ripple"),c.offsetHeight,c.classList.add("ripple"),setTimeout(()=>c.classList.remove("ripple"),500)}Mp()}):ya();function ql(f){return W==="pvcpu"&&f===2||W==="cvcpu"}function bp(){let f=Si.filter(k=>_t.has(k));if(f.length===0)return null;let c=hn||"balanced";if(c==="random")return f[Math.floor(Math.random()*f.length)];if(c==="custom")return Vd.filter(le=>_t.has(le))[0]??f[0]??null;function _(k,le){let we=f[0],ye=k(we),We=le(we);for(let ke=1;ke<f.length;ke++){let st=f[ke],Pt=k(st),mt=le(st);(Pt>ye||Pt===ye&&mt>We)&&(we=st,ye=Pt,We=mt)}return we}if(c==="tanky")return _(k=>Xn[k]?.hp??0,k=>Xn[k]?.vit??0);if(c==="aggressive")return _(k=>Xn[k]?.str??0,k=>Xn[k]?.agi??0);if(c==="scout")return _(k=>Xn[k]?.agi??0,k=>Xn[k]?.dex??0);if(c==="ranged")return _(k=>Xn[k]?.range??0,k=>Xn[k]?.dex??0);if(c==="caster")return _(k=>Xn[k]?.int??0,k=>Xn[k]?.mp??0);let b=qi(),U=_v(Pi),I={tank:0,melee:0,support:0,ranged:0,caster:0};for(let k=0;k<Se.length;k++){let le=Se[k];if(le.player!==b)continue;let we=Fh[le.class];we&&I[we]++}let z=k=>Math.max(0,(U[k]??0)-(I[k]??0)),L=k=>{let le=Fh[k],we=le!=null?z(le):0,ye=Xn[k]?.hp??0,We=-(Gd[k]??1/0);return{def:we,hp:ye,negVar:We}},ee=(k,le)=>k.def!==le.def?k.def>le.def:k.hp!==le.hp?k.hp>le.hp:k.negVar>le.negVar,ie=f[0],ae=L(ie);for(let k=1;k<f.length;k++){let le=L(f[k]);ee(le,ae)&&(ie=f[k],ae=le)}return ie}function ba(){if($!=="draft"||!ql(qi()))return;if(!ii){let c=bp();c&&Ol(c),setTimeout(ba,500);return}let f=Ti.length>0?Ti:Od(e,Array.from(wn,c=>({gx:c%e.w,gy:c/e.w|0})));if(f.length>0){let{gx:c,gy:_}=f[0];Fl(c,_)}}function uu(){if(e.centerTiles&&e.centerTiles.length>0)return e.centerTiles;let f=[];for(let c=0;c<e.h;c++)for(let _=0;_<e.w;_++)e.type[c][_]===nt.CENTER&&f.push({gx:_,gy:c});return f}function Sp(f){let c=[],_=f===1?nt.BASE_TOP:nt.BASE_BOTTOM;for(let b=0;b<e.h;b++)for(let P=0;P<e.w;P++)e.type[b][P]===_&&c.push({gx:P,gy:b});return c}function xi(f,c,_,b){return Math.abs(f-_)+Math.abs(c-b)}function Ep(f){let c=f.range!=null?f.range:1,_=[];for(let b of Se){if(b.hp<=0||b.player===f.player)continue;let P=xi(f.x,f.y,b.x,b.y);P<=c&&P>0&&Es(e,f.x,f.y,b.x,b.y)&&_.push({target:b,dist:P})}return _}function Tp(f,c,_){let b=_??Se.filter(U=>U.hp>0&&U.player===f.player&&U.id!==f.id),P=c??Se.filter(U=>U.hp>0&&U.player!==f.player);for(let U of b)for(let I of P){let z=I.range!=null?I.range:1,L=xi(I.x,I.y,U.x,U.y);if(L<=z&&L>0&&Es(e,I.x,I.y,U.x,U.y))return!0}return!1}function Gt(f,c,_,b){let P=f.x,U=f.y,I=yr(e,f.x,f.y,c,_,Se,f);if(!I||I.length<=1){b&&b();return}An=null,Fn(),mn=!0,g=!0,Ni(f.id),Ht();let z=oe.get(f.id),L=1;function ee(){if(L>=I.length){let Pt=f.x,mt=f.y;f.x=I[I.length-1].x,f.y=I[I.length-1].y,E(f,Pt,mt),et(f),mn=!1,At(z),Ni(),Rn=new Map,yn=!0,W==="online"&&f.player===Y&&typeof fn=="function"&&fn({type:"move",unitId:f.id,toGx:f.x,toGy:f.y}),b&&b();return}let ie=I[L-1],ae=I[L],k=Ie(ie.x,ie.y).clone(),le=Ie(ae.x,ae.y).clone(),we=le.x-k.x,ye=le.z-k.z;we*we+ye*ye>1e-6&&(z.rotation.y=Math.atan2(we,ye));let We=performance.now(),ke=0;function st(Pt){ke++,ke%2===0&&Ht();let mt=Math.min(1,(Pt-We)/Js),rt=(xt=>xt*xt*(3-2*xt))(mt);if(z.position.lerpVectors(k,le,rt),Ye(z,rt),g){let xt=a.position.distanceTo(h),Zt=xt<.1?o:xt;p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(d).normalize(),h.lerp(z.position,l),a.position.copy(h).add(p.clone().multiplyScalar(Zt)),a.lookAt(h)}mt<1?requestAnimationFrame(st):(L++,ee())}requestAnimationFrame(st)}ee()}function fu(f,c){let _=ve(c,"agi")*.7+ve(c,"luk")*.3,P=Math.random()*Math.max(.001,_)<=ve(f,"dex"),U=0;if(P){let I=ve(f,"str")*.7+ve(f,"dex")*.2+ve(f,"int")*.1-(ve(c,"vit")*.3+ve(c,"luk")*.2);U=Math.max(1,Math.floor(I))}return{isHit:P,damage:U}}function Sa(f,c,_,b,P,U){let I={units:Se,showFloatingCombatText:ai,updateUnitSlashVisibility:kt,handleUnitDeath:Cn};function z(ze,rt){Wd(ze,rt,I)}let L,ee;if(Array.isArray(U)&&U.length>0)ee=!0,L=U.map(ze=>{let rt=ze.isHit!==void 0?ze.isHit:ze.hit;return{isHit:!!rt,damage:rt&&ze.damage!=null&&ze.damage>0?ze.damage:0}});else if(_!==void 0){ee=!0;let ze=!!_,rt=ze&&b!=null&&b>0?b:0;L=[{isHit:ze,damage:rt}]}else ee=!1,W==="online"&&f.player===Y&&typeof fn=="function"&&fn({type:"requestRender"}),L=[fu(f,c)],f.tempBuff&&f.tempBuff.doubleAttack===!0&&c.hp>0&&L.push(fu(f,c));if(hi=!0,An=null,es=!1,Fn(),!ee&&W==="online"&&f.player===Y&&typeof nr=="function"){let ze=L.map(rt=>({hit:rt.isHit,damage:rt.isHit?rt.damage:void 0}));nr({type:"attack",unitId:f.id,targetId:c.id,strikes:ze,hit:L[0].isHit,damage:L[0].isHit?L[0].damage:void 0})}if(!ee){let ze=c.hp;L.forEach((rt,xt)=>{let Zt=rt.isHit?Math.max(0,ze-rt.damage):ze;console.log("[ATTACK]",`${f.name} (${f.class}, P${f.player})`,"\u2192",`${c.name} (${c.class}, P${c.player})`,`strike ${xt+1}/${L.length}:`,rt.isHit?`${rt.damage} dmg`:"MISS",`| ${c.name} HP ${ze} \u2192 ${Zt}/${c.maxHp}`),ze=Zt})}let ie=oe.get(f.id);function ae(){if(!ee){if(f.hp<=0){setTimeout(()=>Rt(),400);return}yn&&f.hp>0?nn():setTimeout(()=>Rt(),400)}}function k(){ri.shadowMap.enabled=!0,mn=!1,P&&setTimeout(()=>P(),0),ae()}if(!ie||!ie.userData.rightArm){let rt=function(){if(ze>=L.length||c.hp<=0){setTimeout(()=>{mn=!1,P&&P(),ee||(f.hp<=0?Rt():yn&&f.hp>0?nn():Rt())},400);return}let xt=L[ze];ze++,xt.isHit?(c.hp=Math.max(0,c.hp-xt.damage),ai(c.x,c.y,String(xt.damage),!1),kt(c),z(c,xt.damage),c.hp<=0&&Cn(c,f)):ai(c.x,c.y,"MISS",!0),ze<L.length&&c.hp>0&&f.hp>0?setTimeout(rt,400):setTimeout(()=>{mn=!1,P&&P(),ee||(f.hp<=0?Rt():yn&&f.hp>0?nn():Rt())},400)};mn=!0;let ze=0;rt();return}let le=Ie(f.x,f.y).clone(),we=Ie(c.x,c.y).clone(),ye=le.clone().lerp(we,.35),We=we.x-le.x,ke=we.z-le.z;if(We*We+ke*ke>1e-6&&(ie.rotation.y=Math.atan2(We,ke)),(f.range!=null?f.range:1)>2){let Pn=function(sn){if(sn>=L.length||c.hp<=0||f.hp<=0){ze&&(ze.rotation.y=0),k();return}let Jt=L[sn].isHit,rn=L[sn].damage,at=new Zs(.035,.035,.4,6),zt=new Un({color:16763972}),Ke=new $e(at,zt);Ke.position.copy(le),Ke.position.y+=.6;let vt=we.clone().sub(le).normalize();Ke.quaternion.setFromUnitVectors(new F(0,1,0),vt),n.add(Ke);let kn=!1,_n=null,on=!1,qt=Ke.position.clone(),Vn=we.clone();Vn.y+=.6;let bn=performance.now(),_i=0;function je(Ct){_i++,_i%2===0&&Ht();let jt=Ct-bn,Wt=Math.min(1,jt/jn);if(Ke.position.lerpVectors(qt,Vn,Wt),ze){let Yt=Math.sin(Wt*Math.PI)*1.1;ze.rotation.y=-Yt}if(!kn&&Wt>=1&&(kn=!0,n.remove(Ke),at.dispose(),zt.dispose(),Jt?(c.hp=Math.max(0,c.hp-rn),ai(c.x,c.y,String(rn),!1),z(c,rn),c.hp<=0&&(on=!0),oe.get(c.id)?_n=Ct:on&&(Cn(c,f),on=!1),kt(c)):ai(c.x,c.y,"MISS",!0)),_n!=null&&Jt){let Yt=oe.get(c.id);if(Yt){let ln=Math.min(1,(Ct-_n)/Tn),Hn=1-ln;Ns.copy(xt).multiplyScalar(Zt*Hn),Yt.position.copy(rt).add(Ns),ln>=1&&(Yt.position.copy(rt),_n=null,on&&(Cn(c,f),on=!1))}else _n=null,on&&(Cn(c,f),on=!1)}if(Wt<1)requestAnimationFrame(je);else{ze&&(ze.rotation.y=0);let Yt=_n==null;Yt&&on&&(Cn(c,f),on=!1),Yt?sn+1<L.length&&c.hp>0&&f.hp>0?Pn(sn+1):k():requestAnimationFrame(je)}}requestAnimationFrame(je)},ze=ie.userData.rightArm,rt=Ie(c.x,c.y).clone(),xt=we.clone().sub(le).normalize(),Zt=.4;mn=!0,ri.shadowMap.enabled=!1,Pn(0);return}function mt(ze){if(ze>=L.length||c.hp<=0||f.hp<=0){ie.position.copy(le),ie.userData.rightArm&&(ie.userData.rightArm.rotation.y=0),k();return}let rt=L[ze].isHit,xt=L[ze].damage,Zt=!1,Pn=performance.now(),sn=ie.userData.rightArm,Jt=null,rn=!1,at=Ie(c.x,c.y).clone(),zt=we.clone().sub(le).normalize(),Ke=.4,vt=0;function kn(_n){vt++,vt%2===0&&Ht();let on=_n-Pn,qt=Math.min(1,on/en),Vn=qt<=.4?qt/.4:1,bn=qt>.4?(qt-.4)/.6:0;qt<=.4?ie.position.lerpVectors(le,ye,Vn):ie.position.lerpVectors(ye,le,bn);let _i=qt<=.35?qt/.35:qt<=.7?(.7-qt)/.35:0;if(sn.rotation.y=-_i*1.1,!Zt&&qt>=tn&&(Zt=!0,rt?(c.hp=Math.max(0,c.hp-xt),ai(c.x,c.y,String(xt),!1),z(c,xt),c.hp<=0&&(rn=!0),kt(c),oe.get(c.id)?Jt=_n:rn&&(Cn(c,f),rn=!1)):ai(c.x,c.y,"MISS",!0)),Jt!=null&&rt){let je=oe.get(c.id);if(je){let Ct=Math.min(1,(_n-Jt)/Tn),jt=1-Ct;Ns.copy(zt).multiplyScalar(Ke*jt),je.position.copy(at).add(Ns),Ct>=1&&(je.position.copy(at),Jt=null,rn&&(Cn(c,f),rn=!1))}else Jt=null,rn&&(Cn(c,f),rn=!1)}if(qt<1)requestAnimationFrame(kn);else{ie.position.copy(le),sn.rotation.y=0;let je=Jt==null;je&&rn&&(Cn(c,f),rn=!1),je?ze+1<L.length&&c.hp>0&&f.hp>0?mt(ze+1):k():requestAnimationFrame(kn)}}requestAnimationFrame(kn)}mn=!0,ri.shadowMap.enabled=!1,mt(0)}function wp(f,c){let _=Ie(f,c);_.y+=.4;let b=new ls(.1,12,12),P=new Un({color:8930559,transparent:!0,opacity:.9}),U=new $e(b,P);U.position.copy(_),n.add(U);let I=performance.now(),z=0;function L(ee){z++,z%2===0&&Ht();let ie=ee-I,ae=Math.min(1,ie/an),k=ae*(2-ae);U.scale.setScalar(k*7.5),P.opacity=.9*(1-ae),ae<1?requestAnimationFrame(L):(n.remove(U),b.dispose(),P.dispose())}requestAnimationFrame(L)}function fo(f,c,_,b,P){if(_.target==="enemy"&&c==null){setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}let I=(_.range??0)>2&&c!=null&&(c.x!==f.x||c.y!==f.y),z=!I&&c!=null&&(c.x!==f.x||c.y!==f.y);if(!I&&!z){mn=!0,to(_.effectKey,f,c,b);let at=_.target==="self"||_.target==="ally",zt=_.target==="self"?f:c;at&&zt?gt(zt,()=>{setTimeout(()=>{mn=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)}):setTimeout(()=>{mn=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}if(z){let ln=function(Hn){Yt++,Yt%2===0&&Ht();let he=Hn-Wt,ge=Math.min(1,he/en),Te=ge<=.4?ge/.4:1,de=ge>.4?(ge-.4)/.6:0;ge<=.4?at.position.lerpVectors(zt,vt,Te):at.position.lerpVectors(vt,zt,de);let me=ge<=.35?ge/.35:ge<=.7?(.7-ge)/.35:0;if(bn.rotation.y=-me*1.1,!_i&&ge>=tn&&(_i=!0,to(_.effectKey,f,c,jt),c.hp<=0&&(Ct=!0),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(c),oe.get(c.id)&&_.target!=="ally"?je=Hn:Ct&&(Cn(c,f),Ct=!1)),je!=null){let Re=oe.get(c.id);if(Re){let pe=Math.min(1,(Hn-je)/Tn),Me=1-pe;Ns.copy(qt).multiplyScalar(Vn*Me),Re.position.copy(on).add(Ns),pe>=1&&(Re.position.copy(on),je=null,Ct&&(Cn(c,f),Ct=!1))}else je=null,Ct&&(Cn(c,f),Ct=!1)}ge<1?requestAnimationFrame(ln):(at.position.copy(zt),bn.rotation.y=0,je==null&&Ct&&(Cn(c,f),Ct=!1),je==null?(ri.shadowMap.enabled=!0,mn=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)):requestAnimationFrame(ln))},at=oe.get(f.id);if(!at||!at.userData.rightArm){mn=!0,to(_.effectKey,f,c,b),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(c),setTimeout(()=>{mn=!1,b.updateTurnUI&&b.updateTurnUI(),P&&P()},400);return}mn=!0;let zt=Ie(f.x,f.y).clone(),Ke=Ie(c.x,c.y).clone(),vt=zt.clone().lerp(Ke,.35),kn=Ke.x-zt.x,_n=Ke.z-zt.z;kn*kn+_n*_n>1e-6&&(at.rotation.y=Math.atan2(kn,_n));let on=Ie(c.x,c.y).clone(),qt=Ke.clone().sub(zt).normalize(),Vn=.4,bn=at.userData.rightArm,_i=!1,je=null,Ct=!1,jt={...b,handleUnitDeath:void 0,vodooMirrorDeath:Cn},Wt=performance.now(),Yt=0;ri.shadowMap.enabled=!1,requestAnimationFrame(ln);return}let L=Ie(f.x,f.y).clone(),ee=Ie(c.x,c.y).clone(),ie=new Zs(.035,.035,.4,6),ae=new Un({color:16763972}),k=new $e(ie,ae);k.position.copy(L),k.position.y+=.6;let le=ee.clone().sub(L).normalize();k.quaternion.setFromUnitVectors(new F(0,1,0),le),n.add(k),mn=!0;let we=oe.get(f.id),ye=we&&we.userData.rightArm?we.userData.rightArm:null;if(we){let at=ee.x-L.x,zt=ee.z-L.z;at*at+zt*zt>1e-6&&(we.rotation.y=Math.atan2(at,zt))}let We=k.position.clone(),ke=ee.clone();ke.y+=.6;let st=performance.now(),Pt=Ie(c.x,c.y).clone(),mt=ee.clone().sub(L).normalize(),ze=.4,rt=!1,xt=null,Zt=0,Pn=null,sn=_.effectKey==="powerShot"?{...b,animateKnockback(at,zt,Ke,vt,kn,_n){Pn={targ:at,fromGx:zt,fromGy:Ke,toGx:vt,toGy:kn,knockbackOnDone:_n}}}:b;function Jt(){ri.shadowMap.enabled=!0,mn=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),P&&P()},400)}function rn(at){Zt++,Zt%2===0&&Ht();let zt=at-st,Ke=Math.min(1,zt/jn);if(k.position.lerpVectors(We,ke,Ke),ye){let vt=Math.sin(Ke*Math.PI)*1.1;ye.rotation.y=-vt}if(!rt&&Ke>=1&&(rt=!0,n.remove(k),ie.dispose(),ae.dispose(),_.type==="spell"&&wp(c.x,c.y),to(_.effectKey,f,c,sn),oe.get(c.id)&&c.hp>0&&(xt=at),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(c)),xt!=null){let vt=oe.get(c.id);if(vt){let kn=Math.min(1,(at-xt)/Tn),_n=1-kn;if(Ns.copy(mt).multiplyScalar(ze*_n),vt.position.copy(Pt).add(Ns),kn>=1&&(vt.position.copy(Pt),xt=null,Pn)){let{targ:on,fromGx:qt,fromGy:Vn,toGx:bn,toGy:_i,knockbackOnDone:je}=Pn;Pn=null,b.animateKnockback?b.animateKnockback(on,qt,Vn,bn,_i,()=>{je&&je(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(on),Jt()}):Jt();return}}else if(xt=null,Pn){Pn=null,Jt();return}}if(Ke<1)requestAnimationFrame(rn);else if(ye&&(ye.rotation.y=0),xt==null)if(Pn){let{targ:vt,fromGx:kn,fromGy:_n,toGx:on,toGy:qt,knockbackOnDone:Vn}=Pn;Pn=null,b.animateKnockback?b.animateKnockback(vt,kn,_n,on,qt,()=>{Vn&&Vn(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(vt),Jt()}):Jt()}else Jt();else requestAnimationFrame(rn)}ri.shadowMap.enabled=!1,requestAnimationFrame(rn)}function xn(){if($!=="playing"||!ql(G)||mn||ot.length===0)return;let f=ot[ut],c=He(f);if(!c||c.hp<=0){nn();return}let _=ve(c,"agi"),b=qd(c)?Math.max(0,_):Math.max(Xd,_),P=Pl(e,c.x,c.y,b,Se,c),U=new Set(Se.filter(he=>he.hp>0&&he.id!==c.id).map(he=>he.y*e.w+he.x)),I=[];P.forEach((he,ge)=>{he!==0&&(U.has(ge)||I.push({gx:ge%e.w,gy:Math.floor(ge/e.w),dist:he}))});let z=Ep(c),L=uu(),ee=Sp(c.player),ie=.25,ae=.03,k=c.maxHp>0&&c.hp/c.maxHp<ie,le=c.maxHp>0&&c.hp/c.maxHp<ae,we=c.level===2,ye=L.filter(he=>!U.has(he.gy*e.w+he.gx)),We=ee.filter(he=>!U.has(he.gy*e.w+he.gx)),ke=new Set(L.map(he=>he.gy*e.w+he.gx)),st=ye.length>0?ye:L,Pt=We.length>0?We:ee,mt=st.length>0?Vn(st):null,ze=Pt.length>0?Vn(Pt):null,rt=Yl(c),xt=c.tempBuff&&c.tempBuff.doubleAttack===!0,Zt=xt?[]:rt.filter(he=>!he.disabled&&c.mp>=he.cost&&he.target==="enemy"),Pn=Zt.length>0?Math.max(...Zt.map(he=>he.range||0)):0,sn=Math.max(c.range!=null?c.range:1,Pn),Jt=c.level>=2&&sn>=2,rn=xt?!1:Jt,at=Se.filter(he=>he.hp>0&&he.player!==c.player),zt=Se.filter(he=>he.hp>0&&he.player===c.player&&he.id!==c.id);function Ke(he,ge){if(ge.length===0)return null;let Te=null,de=1/0;for(let me of he){let Re=0;for(let pe of ge)Re+=xi(me.gx,me.gy,pe.gx,pe.gy);Re<de&&(de=Re,Te=me)}return Te}function vt(he,ge){if(ge.length===0||he.length===0)return null;let Te=null,de=1/0;for(let me of he){let Re=1/0;for(let pe=0;pe<ge.length;pe++){let Me=ge[pe],Vt=xi(me.gx,me.gy,Me.gx,Me.gy);Vt<Re&&(Re=Vt)}Re<de&&(de=Re,Te=me)}return Te}function kn(he,ge){let Te=sn,de=[];for(let me=0;me<at.length;me++){let Re=at[me],pe=xi(he,ge,Re.x,Re.y);pe<=Te&&pe>0&&Es(e,he,ge,Re.x,Re.y)&&de.push({target:Re,dist:pe})}return de}let _n=new Set(I.map(he=>he.gy*e.w+he.gx));function on(he,ge){if(!he||he.length<=1)return null;let Te=Math.min(ge,he.length-1);for(let de=Te;de>=1;de--){let me=he[de],Re=me.y*e.w+me.x;if(_n.has(Re))return{gx:me.x,gy:me.y}}return null}function qt(he,ge){if(!he||he.length<=1)return null;let Te=Math.min(ge,he.length-1);for(let de=Te;de>=1;de--){let me=he[de];if(!U.has(me.y*e.w+me.x))return{gx:me.x,gy:me.y}}return null}function Vn(he){let ge=Iv(e,c.x,c.y,he,Se,c);return!ge||ge.path.length<=1?null:ge}function bn(he){let ge=he??I;if(ge.length===0)return null;if(at.length===0)return ge[0];let Te=null,de=-1;for(let me of ge){let Re=1/0;for(let pe=0;pe<at.length;pe++){let Me=at[pe],Vt=xi(me.gx,me.gy,Me.x,Me.y);Vt<Re&&(Re=Vt)}Re>de&&(de=Re,Te=me)}return Te}function _i(he){let ge=he??I;if(ge.length===0)return null;if(at.length===0)return ge[0];let Te=c.maxHp>0&&c.hp/c.maxHp>=.6,de=null,me=-1/0;for(let Re of ge){let pe=1/0;for(let Lt=0;Lt<at.length;Lt++){let $t=xi(Re.gx,Re.gy,at[Lt].x,at[Lt].y);$t<pe&&(pe=$t)}let Me=999;if(zt.length>0){Me=1/0;for(let Lt=0;Lt<zt.length;Lt++){let $t=xi(Re.gx,Re.gy,zt[Lt].x,zt[Lt].y);$t<Me&&(Me=$t)}}let Vt;Te?Vt=Me<pe?pe-1e3:pe:Vt=pe-Me,Vt>me&&(me=Vt,de=Re)}return de}function je(){let he=sn;if(at.length===0)return null;let ge=null,Te=-1;for(let de of I){let me=1/0;for(let pe=0;pe<at.length;pe++){let Me=xi(de.gx,de.gy,at[pe].x,at[pe].y);Me<me&&(me=Me)}let Re=!1;for(let pe=0;pe<at.length;pe++){let Me=at[pe],Vt=xi(de.gx,de.gy,Me.x,Me.y);if(!(Vt<=0||Vt>he)&&Es(e,de.gx,de.gy,Me.x,Me.y)){Re=!0;break}}Re&&me>Te&&(Te=me,ge=de)}return ge}function Ct(he){if(hi||at.length===0||yn||I.length===0)return!1;let ge=new Set;for(let pe=0;pe<Se.length;pe++){let Me=Se[pe];Me.hp>0&&ge.add(Me.y*e.w+Me.x)}function Te(pe,Me){let Vt=null,Lt=he;for(let $t=-Lt;$t<=Lt;$t++)for(let St=-Lt;St<=Lt;St++){if(St===0&&$t===0||Math.abs(St)+Math.abs($t)>Lt)continue;let gn=pe.x+St,Yn=pe.y+$t;if(gn<0||gn>=e.w||Yn<0||Yn>=e.h||!ws(e,gn,Yn)||!Es(e,gn,Yn,pe.x,pe.y)||ge.has(Yn*e.w+gn))continue;let Et=yr(e,c.x,c.y,gn,Yn,Se,c),Nt=Et?Et.length-1:1/0;Et&&Et.length>1&&(!Me||Nt<=b)&&(!Vt||Et.length<Vt.length)&&(Vt=Et)}return Vt}let de=[];for(let pe of at){let Me=Te(pe,!0);Me&&de.push({enemy:pe,path:Me})}if(de.length>0){let pe=de.filter($t=>$t.enemy.maxHp>0&&$t.enemy.hp/$t.enemy.maxHp<ie),Me=pe.length>0?pe:de;pe.length>0?Me.sort(($t,St)=>$t.enemy.hp-St.enemy.hp||$t.path.length-St.path.length):Me.sort(($t,St)=>$t.path.length-St.path.length||$t.enemy.hp-St.enemy.hp);let Vt=Me[0],Lt=on(Vt.path,b);if(Lt&&(Lt.gx!==c.x||Lt.gy!==c.y))return Gt(c,Lt.gx,Lt.gy,()=>setTimeout(xn,600)),!0}let me=null,Re=1/0;for(let pe of at){let Me=Te(pe,!1);Me&&Me.length<Re&&(Re=Me.length,me=Me)}if(me){let pe=on(me,b);if(pe&&(pe.gx!==c.x||pe.gy!==c.y))return Gt(c,pe.gx,pe.gy,()=>setTimeout(xn,600)),!0}return!1}let jt=new Map,Wt=[];for(let he of I){let ge=he.gy*e.w+he.gx;Wt.length=0;for(let Te=0;Te<at.length;Te++){let de=at[Te],me=xi(he.gx,he.gy,de.x,de.y);me<=sn&&me>0&&Es(e,he.gx,he.gy,de.x,de.y)&&Wt.push({target:de,dist:me})}jt.set(ge,Wt.length>0?Wt.slice():[])}let Yt=z.some(he=>he.target.maxHp>0&&he.target.hp/he.target.maxHp<ie),ln=Yt||I.some(he=>(jt.get(he.gy*e.w+he.gx)||[]).some(Te=>Te.target.maxHp>0&&Te.target.hp/Te.target.maxHp<ie));if(hi){if(yn){nn();return}if(rn&&at.length>0&&ce.size>0&&I.length>0){let me=[];ce.forEach((pe,Me)=>{me.push({gx:Me%e.w,gy:Math.floor(Me/e.w)})});let Re=Vn(me);if(Re){let pe=qt(Re.path,b);if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>nn());return}let Me=vt(I,me);if(Me&&(Me.gx!==c.x||Me.gy!==c.y)){Gt(c,Me.gx,Me.gy,()=>nn());return}}}if(Ss-w<=20&&L.length>0){let me=L.some(Re=>Re.gx===c.x&&Re.gy===c.y);if(me&&I.length>0){let pe=I.filter(Me=>ke.has(Me.gy*e.w+Me.gx)).filter(Me=>Me.gx!==c.x||Me.gy!==c.y);if(pe.length>0){let Me=bn(pe);if(Me&&(Me.gx!==c.x||Me.gy!==c.y)){Gt(c,Me.gx,Me.gy,()=>nn());return}}nn();return}if(me){nn();return}if(I.length>0){let Re=mt,pe=Re?qt(Re.path,b):null;if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>nn());return}let Me=vt(I,st);if(Me&&(Me.gx!==c.x||Me.gy!==c.y)){Gt(c,Me.gx,Me.gy,()=>nn());return}}nn();return}if(!k&&I.length>0){if(we&&ee.length>0&&!ee.some(Re=>Re.gx===c.x&&Re.gy===c.y)){let Re=ze,pe=Re?qt(Re.path,b):null;if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>nn());return}let Me=vt(I,Pt);if(Me&&(Me.gx!==c.x||Me.gy!==c.y)){Gt(c,Me.gx,Me.gy,()=>nn());return}}if(L.length>0&&!L.some(Re=>Re.gx===c.x&&Re.gy===c.y)){let Re=mt,pe=Re?qt(Re.path,b):null;if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>nn());return}let Me=vt(I,st);if(Me&&(Me.gx!==c.x||Me.gy!==c.y)){Gt(c,Me.gx,Me.gy,()=>nn());return}}}let ge=L.length>0?I.filter(me=>ke.has(me.gy*e.w+me.gx)):null,Te=ge!=null&&ge.length>0?ge:I,de=null;if(Te.length>0&&zt.length>0&&(de=_i(Te),de)){let me=yr(e,c.x,c.y,de.gx,de.gy,Se,c),Re=me?me.length-1:1/0;(!me||me.length<=1||Re>b)&&(de=bn(Te))}if(!de&&Te.length>0&&(de=bn(Te)),de&&(de.gx!==c.x||de.gy!==c.y)){Gt(c,de.gx,de.gy,()=>nn());return}nn();return}if(le&&Ss-w>20&&!yn&&I.length>0){let he=null,ge=1/0;for(let de of I){let Re=(jt.get(de.gy*e.w+de.gx)||[]).filter(pe=>pe.target.maxHp>0&&pe.target.hp/pe.target.maxHp<ie);if(Re.length>0){let pe=Math.min(...Re.map(Me=>Me.target.hp));pe<ge&&(ge=pe,he=de)}}if(he){let de=yr(e,c.x,c.y,he.gx,he.gy,Se,c),me=de?on(de,b):null;if(me&&(me.gx!==c.x||me.gy!==c.y)){Gt(c,me.gx,me.gy,()=>setTimeout(xn,600));return}}let Te=bn();if(Te&&(Te.gx!==c.x||Te.gy!==c.y)){Gt(c,Te.gx,Te.gy,()=>setTimeout(xn,600));return}nn();return}if(!hi&&!xt){let Lt=function(Et){return po(c,Et,Se).filter(Ft=>Ft.targetUnit!=null).map(Ft=>Ft.targetUnit)},he=rt,ge=c.maxHp>0?c.hp/c.maxHp:1,Te=.35,de=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct","bloodSuck","gnaw","malediction","skewer"]),me=new Set(["chakra","sacrifice"]),Re=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify","warCry","foresight","overheal","rapid","vodoo"]),pe=new Set(["impale","poison","gaze","debilitate","bash","infect"]),Me=new Set(["dominate","manaDrain","weaken","cripple","hex","blind","raid"]),Vt=new Set(["reanimate"]),$t={showFloatingCombatText:ai,handleUnitDeath:Cn,updateUnitSlashVisibility:kt,updateTurnUI:Rt,tryCollectPowerup:et,world:e,units:Se,reanimateDeadUnit:xa,updateUnitTileIndex:E,updateUnitPosition(Et){let Nt=oe.get(Et.id);Nt&&Nt.position.copy(Ie(Et.x,Et.y))},animateKnockback(Et,Nt,Ft,Sn,In,Qt){let Nn=oe.get(Et.id);if(!Nn){Qt&&Qt();return}let ss=Ie(Nt,Ft).clone(),ir=Ie(Sn,In).clone(),jl=performance.now(),bu=0;function Su(kp){bu++,bu%2===0&&Ht();let Eu=Math.min(1,(kp-jl)/Js),Hp=Ql=>Ql*Ql*(3-2*Ql);Nn.position.lerpVectors(ss,ir,Hp(Eu)),Eu<1?requestAnimationFrame(Su):(Nn.position.copy(ir),Qt&&Qt())}requestAnimationFrame(Su)}},St=null,gn=null,Yn=Yt||!yn&&ln;if(!Yn){for(let Nt of he)if(!(Nt.disabled||c.mp<Nt.cost)&&me.has(Nt.effectKey)){let Sn=po(c,Nt,Se).filter(In=>In.targetUnit&&In.targetUnit.maxHp>0&&In.targetUnit.hp/In.targetUnit.maxHp<.5);if(Sn.length>0){let In=Sn.sort((Qt,Nn)=>Qt.targetUnit.hp-Nn.targetUnit.hp)[0].targetUnit;St=Nt,gn=In;break}}}if(!St&&!Yn){let Et=Se.filter(Nt=>Nt.hp<=0&&!Nt.isReanimated);for(let Nt of he)if(!(Nt.disabled||c.mp<Nt.cost)&&!(Nt.effectKey==="reanimate"&&!Et.length)&&Vt.has(Nt.effectKey)){St=Nt,gn=c;break}}if(!St&&!Yn&&(z.length>0||I.some(Nt=>(jt.get(Nt.gy*e.w+Nt.gx)||[]).length>0))){let Nt=he.filter(Ft=>!Ft.disabled&&Re.has(Ft.effectKey)).sort((Ft,Sn)=>(Sn.level||1)-(Ft.level||1));for(let Ft of Nt){let Sn=c.tempBuff&&c.tempBuff.duration>0;if(Ft.target==="self"){if(Ft.effectKey==="bloodlust"&&c.hp/c.maxHp>.8)continue;if(!Sn){St=Ft,gn=c;break}}if(Ft.target==="ally"){if(Ft.effectKey==="overheal"&&c.hp/c.maxHp>.7)continue;let Qt=po(c,Ft,Se).filter(Nn=>Nn.targetUnit!=null).map(Nn=>Nn.targetUnit);if(Qt.length>0){let Nn=Qt.filter(ir=>!ir.tempBuff||ir.tempBuff.duration<=0),ss=(Nn.length>0?Nn:Qt).sort((ir,jl)=>ir.hp-jl.hp)[0];if(ss.tempBuff&&ss.tempBuff.duration>0||Ft.effectKey==="overheal"&&ss.hp/ss.maxHp>.7)continue;St=Ft,gn=ss;break}}if(Ft.target==="enemy"){let In=Lt(Ft);if(Ft.effectKey==="vodoo"&&c.tempBuff&&c.tempBuff.vodoo&&(In=In.filter(Qt=>Qt.id!==c.tempBuff.vodoo)),In.length>0){St=Ft,gn=In.sort((Qt,Nn)=>Qt.hp-Nn.hp)[0];break}}}}if(!St){for(let Et of he)if(!(Et.disabled||c.mp<Et.cost)&&de.has(Et.effectKey)){if(Et.effectKey==="feast"&&c.hp/c.maxHp>.7||Et.effectKey==="warCry"&&c.hp/c.maxHp<.3||Et.effectKey==="berserk"&&c.hp/c.maxHp<.25||Et.effectKey==="shuriken"&&z.length>0||Et.effectKey==="judgement"&&c.hp/c.maxHp>.7)continue;let Nt=Lt(Et);if(Nt.length===0)continue;let Ft=Nt.filter(Qt=>Qt.maxHp>0&&Qt.hp/Qt.maxHp<Te),Sn=Ft.length>0?Ft:Nt,In=Et.type==="spell"?Sn.reduce((Qt,Nn)=>{if(!Qt)return Nn;let ss=ve(Nn,"int")-ve(Qt,"int");return ss<0||ss===0&&Nn.hp<Qt.hp?Nn:Qt},null):Sn.reduce((Qt,Nn)=>!Qt||Nn.hp<Qt.hp?Nn:Qt,null);St=Et,gn=In;break}}if(!St&&!Yn){for(let Et of he)if(!(Et.disabled||c.mp<Et.cost)&&Me.has(Et.effectKey)){let Nt=Lt(Et);if(Nt.length===0)continue;let Ft=Nt.reduce((Sn,In)=>!Sn||In.hp<Sn.hp?In:Sn,null);if(!Ft)continue;St=Et,gn=Ft;break}}if(!St&&!Yn){for(let Et of he)if(!(Et.disabled||c.mp<Et.cost)&&pe.has(Et.effectKey)){let Ft=Lt(Et).filter(Sn=>!Sn.tempDebuff||Sn.tempDebuff.duration<=0);if(Ft.length>0){let Sn=Ft.reduce((In,Qt)=>!In||Qt.hp<In.hp?Qt:In,null);St=Et,gn=Sn;break}}}if(St&&gn){c.mp-=St.cost,hi=!0;let Et=St.target==="self"?c:gn;fo(c,Et,St,$t,()=>setTimeout(xn,600));return}}if(Tp(c,at,zt)&&z.length>0){z.sort((ge,Te)=>ge.target.hp-Te.target.hp||ge.dist-Te.dist);let he=z[0].target;Sa(c,he);return}if(z.length>0){z.sort((ge,Te)=>ge.target.hp-Te.target.hp||ge.dist-Te.dist);let he=z[0].target;Sa(c,he);return}if(xt&&Ct(c.range!=null?c.range:1))return;if(!yn&&!ln&&ce.size>0&&I.length>0){let he=[];ce.forEach((Te,de)=>{he.push({gx:de%e.w,gy:Math.floor(de/e.w)})});let ge=Vn(he);if(ge){let Te=qt(ge.path,b);if(Te&&(Te.gx!==c.x||Te.gy!==c.y)){Gt(c,Te.gx,Te.gy,()=>setTimeout(xn,600));return}let de=vt(I,he);if(de&&(de.gx!==c.x||de.gy!==c.y)){Gt(c,de.gx,de.gy,()=>setTimeout(xn,600));return}}}let Hn=Ss-w;if(Hn<=20&&L.length>0&&!yn&&I.length>0&&!L.some(ge=>ge.gx===c.x&&ge.gy===c.y)){let ge=mt,Te=ge?ge.path:null,de=L.length>0?Math.min(...L.map(St=>xi(c.x,c.y,St.gx,St.gy))):1/0,me=new Map,Re=new Map;for(let St of I){let gn=St.gy*e.w+St.gx;me.set(gn,L.length>0?Math.min(...L.map(Yn=>xi(St.gx,St.gy,Yn.gx,Yn.gy))):1/0),Re.set(gn,Te?Te.findIndex(Yn=>Yn.x===St.gx&&Yn.y===St.gy):-1)}let pe=null,Me=-1,Vt=ie;for(let St of I){let gn=St.gy*e.w+St.gx;if(me.get(gn)>de||(jt.get(gn)||[]).filter(Sn=>Sn.target.maxHp>0&&Sn.target.hp/Sn.target.maxHp<Vt).length===0)continue;let Nt=Re.get(gn),Ft=Nt>=0?Nt:0;Ft>Me&&(Me=Ft,pe=St)}if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>setTimeout(xn,600));return}let Lt=ge?qt(ge.path,b):null;if(Lt&&(Lt.gx!==c.x||Lt.gy!==c.y)){Gt(c,Lt.gx,Lt.gy,()=>setTimeout(xn,600));return}let $t=vt(I,st);if($t&&($t.gx!==c.x||$t.gy!==c.y)){Gt(c,$t.gx,$t.gy,()=>setTimeout(xn,600));return}}if(k&&I.length>0&&!yn){let he=null,ge=1/0;for(let Te of I){let me=(jt.get(Te.gy*e.w+Te.gx)||[]).filter(Re=>Re.target.maxHp>0&&Re.target.hp/Re.target.maxHp<ie);if(me.length>0){let Re=Math.min(...me.map(pe=>pe.target.hp));Re<ge&&(ge=Re,he=Te)}}if(he){let Te=yr(e,c.x,c.y,he.gx,he.gy,Se,c),de=Te?on(Te,b):null;if(de&&(de.gx!==c.x||de.gy!==c.y)){Gt(c,de.gx,de.gy,()=>setTimeout(xn,600));return}}if(Hn>20&&we&&ee.length>0&&!ee.some(de=>de.gx===c.x&&de.gy===c.y)){let de=We.length>0?We:ee,me=ze;if(me!=null&&me.path.length<=5){let pe=qt(me.path,b);if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>setTimeout(xn,600));return}let Me=vt(I,de);if(Me&&(Me.gx!==c.x||Me.gy!==c.y)){Gt(c,Me.gx,Me.gy,()=>setTimeout(xn,600));return}}}if(Hn>20){let Te=bn();if(Te&&xi(c.x,c.y,Te.gx,Te.gy)>0){Gt(c,Te.gx,Te.gy,()=>setTimeout(xn,600));return}nn();return}}if(Hn<=10&&L.length>0&&!yn&&I.length>0&&!L.some(ge=>ge.gx===c.x&&ge.gy===c.y)){let ge=ye.length>0?ye:L,Te=mt,de=Te?qt(Te.path,b):null;if(de&&(de.gx!==c.x||de.gy!==c.y)){Gt(c,de.gx,de.gy,()=>setTimeout(xn,600));return}let me=vt(I,ge);if(me&&(me.gx!==c.x||me.gy!==c.y)){Gt(c,me.gx,me.gy,()=>setTimeout(xn,600));return}}if(c.level===1&&L.length>0&&!yn&&!L.some(ge=>ge.gx===c.x&&ge.gy===c.y)&&I.length>0){let ge=ye.length>0?ye:L,Te=mt,de=Te?qt(Te.path,b):null;if(de&&(de.gx!==c.x||de.gy!==c.y)){Gt(c,de.gx,de.gy,()=>setTimeout(xn,600));return}let me=vt(I,ge);if(me&&(me.gx!==c.x||me.gy!==c.y)){Gt(c,me.gx,me.gy,()=>setTimeout(xn,600));return}}if(we&&ee.length>0&&!yn&&!ee.some(ge=>ge.gx===c.x&&ge.gy===c.y)&&I.length>0){let ge=at.filter(Vt=>Vt.maxHp>0&&Vt.hp/Vt.maxHp<ie),Te=null,de=1/0;for(let Vt of I){let $t=(jt.get(Vt.gy*e.w+Vt.gx)||[]).find(St=>ge.some(gn=>gn.id===St.target.id));$t&&$t.target.hp<de&&(de=$t.target.hp,Te=Vt)}if(Te){let Vt=yr(e,c.x,c.y,Te.gx,Te.gy,Se,c),Lt=Vt?on(Vt,b):null;if(Lt&&(Lt.gx!==c.x||Lt.gy!==c.y)){Gt(c,Lt.gx,Lt.gy,()=>setTimeout(xn,600));return}}let me=We.length>0?We:ee,Re=ze,pe=Re?qt(Re.path,b):null;if(pe&&(pe.gx!==c.x||pe.gy!==c.y)){Gt(c,pe.gx,pe.gy,()=>setTimeout(xn,600));return}let Me=vt(I,me);if(Me&&(Me.gx!==c.x||Me.gy!==c.y)){Gt(c,Me.gx,Me.gy,()=>setTimeout(xn,600));return}}if(rn&&at.length>0&&!yn&&I.length>0){if(!ln&&ce.size>0){let ge=[];ce.forEach((de,me)=>{ge.push({gx:me%e.w,gy:Math.floor(me/e.w)})});let Te=Vn(ge);if(Te){let de=qt(Te.path,b);if(de&&(de.gx!==c.x||de.gy!==c.y)){Gt(c,de.gx,de.gy,()=>setTimeout(xn,600));return}let me=vt(I,ge);if(me&&(me.gx!==c.x||me.gy!==c.y)){Gt(c,me.gx,me.gy,()=>setTimeout(xn,600));return}}}let he=je();if(he&&(he.gx!==c.x||he.gy!==c.y)){Gt(c,he.gx,he.gy,()=>setTimeout(xn,600));return}}!xt&&Ct(sn)||nn()}function Fn(){for(Xi.length=0;Ui.children.length;){let f=Ui.children[0];Ui.remove(f),f.geometry!==Ea&&f.geometry!==Ta&&f.geometry.dispose(),f.material.dispose()}Ht()}let us=new Set;function Yl(f){return f?(f.summonedSkills&&f.summonedSkills.length>0?f.summonedSkills:f.class&&ua[f.class]?ua[f.class]:[]).map(_=>({..._,disabled:_.disabled===!0||f.level<(_.level||1)||_.hpCost&&f.hp<_.hpCost||_.cost!=null&&f.mp<_.cost||_.effectKey==="reanimate"&&J<=0})):[]}function po(f,c,_){let b=[],P=c.range||0,U=f.x,I=f.y;if(c.target==="self")return b.push({gx:U,gy:I,targetUnit:null}),b;for(let z of _)if(!(z.hp<=0||Math.abs(U-z.x)+Math.abs(I-z.y)>P)){if(c.target==="enemy"){if(z.player===f.player)continue}else if(c.target==="ally"&&z.player!==f.player)continue;P>=2&&!Es(e,U,I,z.x,z.y)||b.push({gx:z.x,gy:z.y,targetUnit:z})}return b}function du(f,c,_){let b=c.range||0;if(c.target==="self"){_(f.x,f.y);return}Fd(e,f.x,f.y,b).forEach((U,I)=>{let z=I%e.w,L=I/e.w|0;b>=2&&!Es(e,f.x,f.y,z,L)||_(z,L)})}function Bv(f,c){let _=[];return du(f,c,(b,P)=>_.push({gx:b,gy:P})),_}function Ap(f,c){let _=[];c.target==="self"?(us=new Set([`${f.x},${f.y}`]),_.push({gx:f.x,gy:f.y})):(us=new Set,du(f,c,(b,P)=>{_.push({gx:b,gy:P});let U=j(b,P);U&&(c.target==="enemy"&&U.player!==f.player&&us.add(`${b},${P}`),c.target==="ally"&&U.player===f.player&&us.add(`${b},${P}`))})),Fn(),_.forEach(({gx:b,gy:P})=>{let I=(Jn+e.height[P][b]*.35)/2+Jn/2,z=b*tt-Pe+tt/2,L=P*tt-Fe+tt/2,ee=I+.01,ie=new Un({color:8926122,transparent:!0,opacity:.4,side:Ln}),ae=new $e(Ea,ie);ae.rotation.x=-Math.PI/2,ae.position.set(z,ee,L),Ui.add(ae),Xi.push(ie);let k=new Un({color:11167436,transparent:!0,opacity:.7,side:Ln}),le=new $e(Ta,k);le.rotation.x=-Math.PI/2,le.position.set(z,ee+.01,L),le.userData.gx=b,le.userData.gy=P,Ui.add(le),Xi.push(k)})}let pu=.82,mu=1.02,Ea=new os(mu,mu),Ta=new os(pu,pu);function Rp(f){Fn(),f.forEach(({gx:c,gy:_})=>{let P=(Jn+e.height[_][c]*.35)/2+Jn/2,U=c*tt-Pe+tt/2,I=_*tt-Fe+tt/2,z=P+.01,L=new Un({color:2271812,transparent:!0,opacity:.4,side:Ln}),ee=new $e(Ea,L);ee.rotation.x=-Math.PI/2,ee.position.set(U,z,I),Ui.add(ee),Xi.push(L);let ie=new Un({color:4508774,transparent:!0,opacity:.7,side:Ln}),ae=new $e(Ta,ie);ae.rotation.x=-Math.PI/2,ae.position.set(U,z+.01,I),ae.userData.gx=c,ae.userData.gy=_,Ui.add(ae),Xi.push(ie)}),Ht()}function $l(f){Fn(),f.forEach((c,_)=>{if(c===0)return;let b=_%e.w,P=_/e.w|0,I=(Jn+e.height[P][b]*.35)/2+Jn/2,z=b*tt-Pe+tt/2,L=P*tt-Fe+tt/2,ee=I+.01,ie=new Un({color:3381759,transparent:!0,opacity:.35,side:Ln}),ae=new $e(Ea,ie);ae.rotation.x=-Math.PI/2,ae.position.set(z,ee,L),Ui.add(ae),Xi.push(ie);let k=new Un({color:6730751,transparent:!0,opacity:.65,side:Ln}),le=new $e(Ta,k);le.rotation.x=-Math.PI/2,le.position.set(z,ee+.01,L),Ui.add(le),Xi.push(k)}),Ht()}function Cp(f){Fn(),f.forEach((c,_)=>{if(c===0)return;let b=_%e.w,P=_/e.w|0,I=(Jn+e.height[P][b]*.35)/2+Jn/2,z=b*tt-Pe+tt/2,L=P*tt-Fe+tt/2,ee=I+.01,ie=new Un({color:10035746,transparent:!0,opacity:.4,side:Ln}),ae=new $e(Ea,ie);ae.rotation.x=-Math.PI/2,ae.position.set(z,ee,L),Ui.add(ae),Xi.push(ie);let k=new Un({color:13386820,transparent:!0,opacity:.7,side:Ln}),le=new $e(Ta,k);le.rotation.x=-Math.PI/2,le.position.set(z,ee+.01,L),Ui.add(le),Xi.push(k)}),Ht()}let Ds=new Tl,Us=new Xe;function gu(f){let c=f.object;if(c.isInstancedMesh&&c.userData.tileGridGround){let b=f.instanceId;if(b==null||b<0)return null;let P=c.userData.insideTileGx,U=c.userData.insideTileGy;return P&&U&&b<P.length?{gx:P[b],gy:U[b]}:null}if(c.userData.mergedOutsidePick)return Dv(e,f.point);let _=c;for(;_&&(_.userData.gx==null||_.userData.gy==null);)_=_.parent;return _&&_.userData.gx!=null?{gx:_.userData.gx,gy:_.userData.gy}:null}function mo(f,c){let _=t.getBoundingClientRect();return Us.x=(f-_.left)/_.width*2-1,Us.y=-((c-_.top)/_.height)*2+1,{x:Us.x,y:Us.y}}function Pp(f,c){if(mn)return;Us.x=f,Us.y=c,Ds.setFromCamera(Us,a);let _=Ds.intersectObjects(Z.children,!0);if(_.length===0)return;let b,P;for(let I of _){let z=gu(I);if(z){b=z.gx,P=z.gy;break}}if(b==null||P==null)return;if($==="draft"&&ii){let I=P*e.w+b;wn.has(I)&&Fl(b,P);return}if($!=="playing"||W==="cvcpu")return;if(Cs&&si){let I=ot[ut],z=He(I),L=z&&z.hp>0?z:null;if(L&&b===L.x&&P===L.y){Cs=!1,si=null,us=new Set,Fn(),yn?Rn=new Map:(Rn=Pl(e,L.x,L.y,ve(L,"agi"),Se,L),$l(Rn)),Rt();return}let ee=`${b},${P}`;if(!us.has(ee))return;if(!L||L.mp<si.cost){Cs=!1,si=null,Fn(),Rt();return}let ie=j(b,P);if(si.target==="enemy"&&(!ie||ie.player===L.player)||si.target==="ally"&&ie&&ie.player!==L.player||si.target==="self"&&(b!==L.x||P!==L.y)||si.target==="enemy"&&!ie)return;L.mp-=si.cost,hi=!0;let ae={showFloatingCombatText:ai,handleUnitDeath:Cn,updateUnitSlashVisibility:kt,updateTurnUI:Rt,tryCollectPowerup:et,world:e,units:Se,reanimateDeadUnit:xa,updateUnitTileIndex:E,updateUnitPosition(le){let we=oe.get(le.id);we&&we.position.copy(Ie(le.x,le.y))},animateKnockback(le,we,ye,We,ke,st){let Pt=oe.get(le.id);if(!Pt){st&&st();return}let mt=Ie(we,ye).clone(),ze=Ie(We,ke).clone(),rt=performance.now(),xt=0;function Zt(Pn){xt++,xt%2===0&&Ht();let sn=Math.min(1,(Pn-rt)/Js),Jt=rn=>rn*rn*(3-2*rn);Pt.position.lerpVectors(mt,ze,Jt(sn)),sn<1?requestAnimationFrame(Zt):(Pt.position.copy(ze),st&&st())}requestAnimationFrame(Zt)}},k=si.target==="self"?L:ie||null;W==="online"&&L.player===Y&&typeof fn=="function"&&(fn({type:"requestRender"}),nr({type:"skill",unitId:L.id,targetId:k?k.id:void 0,effectKey:si.effectKey})),fo(L,k,si,ae,()=>{Fn(),Cs=!1,si=null,us=new Set,L.hp<=0?Rt():yn&&L.hp>0?nn():Rt()});return}if(Ps){let I=ot[ut],z=He(I);if(W==="online"&&z&&z.player!==Y)return;let L=oe.get(I);if(z&&L&&Di.length>0){let ee=Ie(z.x,z.y),ie=Ie(b,P),ae=ie.x-ee.x,k=ie.z-ee.z,le=ae*ae+k*k>1e-6?Math.atan2(ae,k):L.rotation.y;L.rotation.y=Gh(le)}nn();return}if(An!=null&&es){let I=He(An);if(!I||I.player!==G||W==="online"&&I.player!==Y)return;let z=P*e.w+b,L=j(b,P);if(L&&L.id===ot[ut]&&L.player===G&&(W!=="online"||L.player===Y)){es=!1,An=L.id,yn?(Fn(),Rn=new Map):(Rn=Pl(e,L.x,L.y,ve(L,"agi"),Se,L),$l(Rn)),Rt();return}if(!Rn.has(z)||Rn.get(z)===0)return;L&&L.player!==G&&Sa(I,L);return}let U=j(b,P);if(U){if(U.id===ot[ut]&&U.player===G&&(W!=="online"||U.player===Y)){ma(),An=U.id,es=!1,yn?(Fn(),Rn=new Map):(Rn=Pl(e,b,P,ve(U,"agi"),Se,U),$l(Rn)),Rt();return}Fn(),Rn=new Map,es=!1,$d(U),Rt();return}if(ma(),An!=null){let le=function(){if(k>=ie.length){let xt=I.x,Zt=I.y;I.x=ie[ie.length-1].x,I.y=ie[ie.length-1].y,E(I,xt,Zt),et(I),mn=!1,At(ae),Ni(),Rn=new Map,yn=!0,W==="online"&&I.player===Y&&typeof fn=="function"&&(fn({type:"move",unitId:I.id,toGx:I.x,toGy:I.y}),Wl=!1,xp()),hi&&I.hp>0?nn():setTimeout(()=>Rt(),400);return}let we=ie[k-1],ye=ie[k],We=Ie(we.x,we.y).clone(),ke=Ie(ye.x,ye.y).clone(),st=ke.x-We.x,Pt=ke.z-We.z;st*st+Pt*Pt>1e-6&&(ae.rotation.y=Math.atan2(st,Pt));let mt=performance.now(),ze=0;function rt(xt){ze++,ze%2===0&&Ht();let Zt=Math.min(1,(xt-mt)/Js),sn=(Jt=>Jt*Jt*(3-2*Jt))(Zt);if(ae.position.lerpVectors(We,ke,sn),Ye(ae,sn),g){let Jt=a.position.distanceTo(h),rn=Jt<.1?o:Jt;p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(d).normalize(),h.lerp(ae.position,l),a.position.copy(h).add(p.clone().multiplyScalar(rn)),a.lookAt(h)}Zt<1?requestAnimationFrame(rt):(k++,le())}requestAnimationFrame(rt)};if(es)return;let I=He(An);if(!I||I.player!==G||W==="online"&&I.player!==Y)return;let z=P*e.w+b;if(!Rn.has(z)||Rn.get(z)===0)return;let L=j(b,P);if(L!=null&&L.id!==I.id||mn||yn)return;let ie=yr(e,I.x,I.y,b,P,Se,I);if(!ie||ie.length<=1)return;W==="online"&&I.player===Y&&typeof fn=="function"&&(fn({type:"requestRender"}),Wl=!0),An=null,Fn(),mn=!0,g=!0,Ni(I.id);let ae=oe.get(I.id),k=1;le()}}function yu(f){T.x=f.clientX,T.y=f.clientY,C=f.isTouch===!0,S=f.ctrlKey,v=mo(f.clientX,f.clientY),t.style.cursor=(f.ctrlKey,"grabbing")}function Kl(f){return f.touches&&f.touches.length>0?{clientX:f.touches[0].clientX,clientY:f.touches[0].clientY}:f.changedTouches&&f.changedTouches.length>0?{clientX:f.changedTouches[0].clientX,clientY:f.changedTouches[0].clientY}:{clientX:f.clientX,clientY:f.clientY}}function xu(f){if(!f||f.length<2)return 0;let c=f[0],_=f[1];return Math.hypot(_.clientX-c.clientX,_.clientY-c.clientY)}function Ip(f){if(f.touches.length===2){se=xu(f.touches),v=null;return}if(f.touches.length!==1)return;se=null;let c=Kl(f);yu({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1,isTouch:!0})}function Lp(f){if(f.touches.length===2){f.preventDefault();let _=xu(f.touches);if(se!=null&&se>0){let b=_-se,P=a.position.distanceTo(h),U=Math.max(te,Math.min(X,P-b*B));x.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(x.multiplyScalar(U)),a.lookAt(h),Is=performance.now()}se=_;return}if(se=null,f.touches.length!==1)return;f.preventDefault();let c=Kl(f);_u({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1})}function Dp(f){if(f.touches.length<2&&(se=null),f.touches.length===2||f.changedTouches.length===0)return;C=!1;let c=Kl(f);Zl({clientX:c.clientX,clientY:c.clientY,ctrlKey:!1})}function _u(f){if(Ps){ip(f.clientX,f.clientY);return}if(v==null)return;let c=f.clientX-T.x,_=f.clientY-T.y;if(!M&&!y&&(Math.abs(c)>A||Math.abs(_)>A)&&(f.ctrlKey||S?(y=!0,g=!1):(M=!0,g=!1)),y){Q.copy(a.position).sub(h);let b=Q.length();if(b<.001)return;let P=Math.atan2(Q.x,Q.z),U=Math.asin(Math.max(-1,Math.min(1,Q.y/b)));P-=c*O,U+=_*O,U=Math.max(D,Math.min(N,U)),Q.x=b*Math.cos(U)*Math.sin(P),Q.y=b*Math.sin(U),Q.z=b*Math.cos(U)*Math.cos(P),a.position.copy(h).add(Q),a.lookAt(h),T.x=f.clientX,T.y=f.clientY,Is=performance.now()}else if(M){let b=mo(f.clientX,f.clientY);u.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,h.y,0)),Ds.setFromCamera(new Xe(v.x,v.y),a),Ds.ray.intersectPlane(u,m);let P=m.clone();Ds.setFromCamera(new Xe(b.x,b.y),a),Ds.ray.intersectPlane(u,m);let U=P.sub(m);C&&U.multiplyScalar(K),h.add(U),a.position.add(U),a.lookAt(h),v={x:b.x,y:b.y},Is=performance.now()}}function Zl(f){if(v!=null&&!M&&!y){let c=mo(f.clientX,f.clientY);Pp(c.x,c.y)}v=null,M=!1,y=!1,S=!1,t.style.cursor="grab"}function Up(f){f.preventDefault();let c=a.position.distanceTo(h),_=Math.max(te,Math.min(X,c+f.deltaY*re));x.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(x.multiplyScalar(_)),a.lookAt(h),Is=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",yu),t.addEventListener("mousemove",_u),t.addEventListener("mouseup",Zl),t.addEventListener("mouseleave",Zl),t.addEventListener("touchstart",Ip,{passive:!0}),t.addEventListener("touchmove",Lp,{passive:!1}),t.addEventListener("touchend",Dp,{passive:!0}),t.addEventListener("wheel",Up,{passive:!1});function vu(){let f=t.clientWidth,c=t.clientHeight;a.aspect=f/c,a.updateProjectionMatrix(),ri.setSize(f,c),ri.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",vu);let ri=new Wa({antialias:!1});ri.setSize(t.clientWidth,t.clientHeight),ri.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),ri.shadowMap.enabled=!0,ri.shadowMap.type=Rh,t.appendChild(ri.domElement),vu();let go=document.createElement("div");go.id="combat-text-layer",t.appendChild(go);let is=new F,Ns=new F,Np=1400;function ai(f,c,_,b,P){let U=document.createElement("div");U.className="combat-text-float "+(b?"miss":"damage")+(P?" "+P:""),U.textContent=_,U.style.position="absolute",go.appendChild(U);let I=P==="skill-name"?1.7:1.2,z=performance.now();function L(){is.copy(Ie(f,c)),is.y+=I,is.project(a);let ae=t.clientWidth,k=t.clientHeight;U.style.left=(is.x*.5+.5)*ae+"px",U.style.top=(1-(is.y*.5+.5))*k+"px"}let ee=0;function ie(){ee%2===0&&L(),ee++,performance.now()-z<Np?requestAnimationFrame(ie):U.remove()}requestAnimationFrame(ie)}let Bp=1500;function Op(f,c){let _=document.createElement("div");_.className="combat-text-float "+(c||"levelup"),_.textContent="LEVEL UP!",_.style.position="absolute",go.appendChild(_);let b=performance.now(),P=0;function U(){is.copy(Ie(f.x,f.y)),is.y+=1.2,is.project(a);let z=t.clientWidth,L=t.clientHeight;_.style.left=(is.x*.5+.5)*z+"px",_.style.top=(1-(is.y*.5+.5))*L+"px"}function I(){P%2===0&&U(),P++,performance.now()-b<Bp?requestAnimationFrame(I):_.remove()}requestAnimationFrame(I)}function Cn(f,c,_){if(E(f,f.x,f.y),f.isReanimated||J++,f.deathOrder=++_e,W==="online"&&typeof fn=="function"&&!(_&&_.skipSync)&&fn({type:"unitDeath",unitId:f.id,killerId:c?.id}),Sv(c,f,Se),console.log("[DEATH]",`${f.name} (${f.class}, P${f.player})`,`at (${f.x},${f.y})`,`Lv.${f.level}`),ai(f.x,f.y,"DEAD",!1),Se.filter(z=>z.summonedBy===f.id&&z.hp>0).map(z=>z.id).forEach(z=>{let L=He(z);L&&(L.hp=0,Cn(L,null,{skipSync:!0}))}),$==="playing"&&ot.length>0&&f.id===ot[ut]){let z=f.id;queueMicrotask(()=>{if($!=="playing"||ot.length===0||ot[ut]!==z)return;let L=He(z);L&&L.hp>0||nn()})}let P=oe.get(f.id);if(!P){Ni(),Mu();return}let U=performance.now();function I(z){Ht();let L=z-U,ee=Math.min(1,L/ni),ie=ee*ee;P.rotation.x=ie*Math.PI*.5,ee<1?requestAnimationFrame(I):(n.remove(P),oe.delete(f.id),Ni(),Mu())}requestAnimationFrame(I)}function Mu(){if($!=="playing")return;let f=Se.some(_=>_.player===1&&_.hp>0&&!_.summonedBy),c=Se.some(_=>_.player===2&&_.hp>0&&!_.summonedBy);f?c||Jl(1):Jl(2)}function Fp(){let f=uu(),c=new Set(f.map(I=>I.gy*e.w+I.gx)),_=Se.filter(I=>I.hp>0&&I.player===1&&!I.summonedBy&&c.has(I.y*e.w+I.x)).length,b=Se.filter(I=>I.hp>0&&I.player===2&&!I.summonedBy&&c.has(I.y*e.w+I.x)).length,P=null,U="";if(_>b)P=1,U=`Time's up! ${Je(1)} wins! (${_} vs ${b} units on center base)`;else if(b>_)P=2,U=`Time's up! ${Je(2)} wins! (${b} vs ${_} units on center base)`;else{let I=Se.filter(L=>L.hp>0&&L.player===1&&!L.summonedBy).reduce((L,ee)=>L+ee.hp,0),z=Se.filter(L=>L.hp>0&&L.player===2&&!L.summonedBy).reduce((L,ee)=>L+ee.hp,0);I>z?(P=1,U=`Time's up! Draw on center \u2014 ${Je(1)} wins on total HP (${I} vs ${z})`):z>I?(P=2,U=`Time's up! Draw on center \u2014 ${Je(2)} wins on total HP (${z} vs ${I})`):U=`Draw! (equal units on center: ${_}, equal HP)`}Jl(P,U)}function Jl(f,c){Gi(),Ev(Se,f),$="gameover",document.getElementById("turn-menu").style.display="none",ma(),Fn();let _=document.getElementById("game-over-overlay"),b=document.getElementById("game-over-title"),P=document.getElementById("game-over-cards"),U=document.getElementById("game-over-class-record");U&&(U.style.display="none",U.innerHTML=""),b.textContent=c??`${Je(f)} wins!`;let I=Se.filter(z=>z.player===(f??1));if(P.innerHTML=I.map(z=>{let L=z,ee=z.level>=3?" level-3":z.level>=2?" level-2":"",ie=L.maxHp>0&&L.hp/L.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${ee}${ie}">
          <img class="game-over-card-image" src="${ha[z.class]||""}" alt="${L.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
      `}).join(""),_.classList.add("visible"),W==="cvcpu"){if(pn++,U&&Ts&&pn>=bt){let z=Si.map(L=>{let ee=cs[L],ie=ee.wins+ee.losses||1,ae=ee.wins+ee.losses>0?(ee.wins/ie*100).toFixed(1)+"%":"\u2014",k=ee.wins+ee.losses>0?(ee.losses/ie*100).toFixed(1)+"%":"\u2014";return{class:L,battles:ee.battles,kills:ee.kills,deaths:ee.deaths,wins:ee.wins,losses:ee.losses,winRate:ae,lossRate:k}});U.innerHTML=`
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
              ${z.map(L=>`
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
        `,U.style.display="block"}pn<bt&&setTimeout(()=>{_.classList.remove("visible"),Ee(),ya()},2e3)}}function Cr(f=0){requestAnimationFrame(Cr);let c=Z.userData&&Z.userData.swayingFoliage;if(c&&c.length>0){let P=f*.0017;for(let U=0;U<c.length;U++){let{group:I,phase:z}=c[U];I.rotation.z=Math.sin(P+z)*.14,I.rotation.x=Math.sin(P*.79+z*1.55)*.09,I.rotation.y=Math.sin(P*.62+z*.9)*.055}Mr=!0}Is===0&&(Is=f);let _=f-Is>500;Cr.frameCount=(typeof Cr.frameCount=="number"?Cr.frameCount:0)+1;let b=()=>{if(Mr){let P=.6+.4*Math.sin(f*.004);for(let U=0;U<Xi.length;U++){let I=U%2===0?.4:.7;Xi[U].opacity=I*P}ri.render(n,a),Mr=!1}};_?f-Vh>=100&&(Vh=f,Mr=!0,b()):(Cr.frameCount%2===0&&(Mr=!0),b())}Cr()}Uv();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
