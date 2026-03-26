var ih="160";var ip=0,Kh=1,sp=2;var Pd=1,sh=2,cs=3,Ds=0,ui=1,An=2;var Ps=0,Fr=1,Zh=2,Jh=3,jh=4,rp=5,js=100,ap=101,op=102,Qh=103,eu=104,lp=200,cp=201,hp=202,up=203,dc=204,fc=205,dp=206,fp=207,pp=208,mp=209,gp=210,yp=211,xp=212,_p=213,vp=214,Mp=0,bp=1,Sp=2,Mo=3,Ep=4,Tp=5,wp=6,Ap=7,Id=0,Rp=1,Cp=2,Is=0,Pp=1,Ip=2,Lp=3,Dp=4,Up=5,Np=6;var Ld=300,zr=301,Vr=302,pc=303,mc=304,tl=306,va=1e3,Wi=1001,gc=1002,ai=1003,tu=1004;var Pl=1005;var Di=1006,Op=1007;var Ma=1008;var Ls=1009,Bp=1010,Fp=1011,rh=1012,Dd=1013,Rs=1014,Cs=1015,ba=1016,Ud=1017,Nd=1018,er=1020,kp=1021,Xi=1023,Hp=1024,zp=1025,tr=1026,Gr=1027,Vp=1028,Od=1029,Gp=1030,Bd=1031,Fd=1033,Il=33776,Ll=33777,Dl=33778,Ul=33779,nu=35840,iu=35841,su=35842,ru=35843,kd=36196,au=37492,ou=37496,lu=37808,cu=37809,hu=37810,uu=37811,du=37812,fu=37813,pu=37814,mu=37815,gu=37816,yu=37817,xu=37818,_u=37819,vu=37820,Mu=37821,Nl=36492,bu=36494,Su=36495,Wp=36283,Eu=36284,Tu=36285,wu=36286;var bo=2300,So=2301,Ol=2302,Au=2400,Ru=2401,Cu=2402;var Hd=3e3,nr=3001,Xp=3200,qp=3201,zd=0,Yp=1,Ui="",Jn="srgb",us="srgb-linear",ah="display-p3",nl="display-p3-linear",Eo="linear",xn="srgb",To="rec709",wo="p3";var xr=7680;var Pu=519,$p=512,Kp=513,Zp=514,Vd=515,Jp=516,jp=517,Qp=518,em=519,Iu=35044;var Lu="300 es",yc=1035,hs=2e3,Ao=2001,Us=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Bl=Math.PI/180,xc=180/Math.PI;function Kr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]).toLowerCase()}function ni(i,e,t){return Math.max(e,Math.min(t,i))}function tm(i,e){return(i%e+e)%e}function Fl(i,e,t){return(1-t)*i+t*e}function Du(i){return(i&i-1)===0&&i!==0}function _c(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ha(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ni(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],p=n[2],f=n[5],x=n[8],b=s[0],y=s[3],g=s[6],S=s[1],v=s[4],A=s[7],B=s[2],D=s[5],U=s[8];return r[0]=a*b+o*S+l*B,r[3]=a*y+o*v+l*D,r[6]=a*g+o*A+l*U,r[1]=c*b+u*S+m*B,r[4]=c*y+u*v+m*D,r[7]=c*g+u*A+m*U,r[2]=p*b+f*S+x*B,r[5]=p*y+f*v+x*D,r[8]=p*g+f*A+x*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=u*a-o*c,p=o*l-u*r,f=c*r-a*l,x=t*m+n*p+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=m*b,e[1]=(s*c-u*n)*b,e[2]=(o*n-s*a)*b,e[3]=p*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kl=new Nt;function Gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nm(){let i=Ro("canvas");return i.style.display="block",i}var Uu={};function ma(i){i in Uu||(Uu[i]=!0,console.warn(i))}var Nu=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ou=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ya={[us]:{transfer:Eo,primaries:To,toReference:i=>i,fromReference:i=>i},[Jn]:{transfer:xn,primaries:To,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[nl]:{transfer:Eo,primaries:wo,toReference:i=>i.applyMatrix3(Ou),fromReference:i=>i.applyMatrix3(Nu)},[ah]:{transfer:xn,primaries:wo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ou),fromReference:i=>i.applyMatrix3(Nu).convertLinearToSRGB()}},im=new Set([us,nl]),on={enabled:!0,_workingColorSpace:us,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!im.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ya[e].toReference,s=Ya[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ya[i].primaries},getTransfer:function(i){return i===Ui?Eo:Ya[i].transfer}};function kr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _r,Co=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=Ro("canvas")),_r.width=e.width,_r.height=e.height;let n=_r.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ro("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kr(t[n]/255)*255):t[n]=kr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sm=0,Po=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Kr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zl(s[a].image)):r.push(zl(s[a]))}else r=zl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rm=0,Ni=class i extends Us{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wi,s=Wi,r=Di,a=Ma,o=Xi,l=Ls,c=i.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Kr(),this.name="",this.source=new Po(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===nr?Jn:Ui),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Jn?nr:Hd}set encoding(e){ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===nr?Jn:Ui}};Ni.DEFAULT_IMAGE=null;Ni.DEFAULT_MAPPING=Ld;Ni.DEFAULT_ANISOTROPY=1;var Kn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],m=l[8],p=l[1],f=l[5],x=l[9],b=l[2],y=l[6],g=l[10];if(Math.abs(u-p)<.01&&Math.abs(m-b)<.01&&Math.abs(x-y)<.01){if(Math.abs(u+p)<.1&&Math.abs(m+b)<.1&&Math.abs(x+y)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,A=(f+1)/2,B=(g+1)/2,D=(u+p)/4,U=(m+b)/4,$=(x+y)/4;return v>A&&v>B?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=D/n,r=U/n):A>B?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=D/s,r=$/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=U/r,s=$/r),this.set(n,s,r,t),this}let S=Math.sqrt((y-x)*(y-x)+(m-b)*(m-b)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(y-x)/S,this.y=(m-b)/S,this.z=(p-u)/S,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vc=class extends Us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kn(0,0,e,t),this.scissorTest=!1,this.viewport=new Kn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(ma("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===nr?Jn:Ui),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ni(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Po(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ds=class extends vc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Io=class extends Ni{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ai,this.minFilter=ai,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mc=class extends Ni{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ai,this.minFilter=ai,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ns=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],m=n[s+3],p=r[a+0],f=r[a+1],x=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=x,e[t+3]=b;return}if(m!==b||l!==p||c!==f||u!==x){let y=1-o,g=l*p+c*f+u*x+m*b,S=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let B=Math.sqrt(v),D=Math.atan2(B,g*S);y=Math.sin(y*D)/B,o=Math.sin(o*D)/B}let A=o*S;if(l=l*y+p*A,c=c*y+f*A,u=u*y+x*A,m=m*y+b*A,y===1-o){let B=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=B,c*=B,u*=B,m*=B}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],m=r[a],p=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+u*m+l*f-c*p,e[t+1]=l*x+u*p+c*m-o*f,e[t+2]=c*x+u*f+o*p-l*m,e[t+3]=u*x-o*m-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),m=o(r/2),p=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=p*u*m+c*f*x,this._y=c*f*m-p*u*x,this._z=c*u*x+p*f*m,this._w=c*u*m-p*f*x;break;case"YXZ":this._x=p*u*m+c*f*x,this._y=c*f*m-p*u*x,this._z=c*u*x-p*f*m,this._w=c*u*m+p*f*x;break;case"ZXY":this._x=p*u*m-c*f*x,this._y=c*f*m+p*u*x,this._z=c*u*x+p*f*m,this._w=c*u*m-p*f*x;break;case"ZYX":this._x=p*u*m-c*f*x,this._y=c*f*m+p*u*x,this._z=c*u*x-p*f*m,this._w=c*u*m+p*f*x;break;case"YZX":this._x=p*u*m+c*f*x,this._y=c*f*m+p*u*x,this._z=c*u*x-p*f*m,this._w=c*u*m-p*f*x;break;case"XZY":this._x=p*u*m-c*f*x,this._y=c*f*m-p*u*x,this._z=c*u*x+p*f*m,this._w=c*u*m+p*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],m=t[10],p=n+o+m;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>m){let f=2*Math.sqrt(1+n-o-m);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>m){let f=2*Math.sqrt(1+o-n-m);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+m-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ni(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),m=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*m+this._w*p,this._x=n*m+this._x*p,this._y=s*m+this._y*p,this._z=r*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*u,this.y=n+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ni(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vl=new k,Bu=new Ns,ir=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hi):Hi.fromBufferAttribute(r,a),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$a.copy(n.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Ka.subVectors(this.max,ua),vr.subVectors(e.a,ua),Mr.subVectors(e.b,ua),br.subVectors(e.c,ua),Ss.subVectors(Mr,vr),Es.subVectors(br,Mr),Ys.subVectors(vr,br);let t=[0,-Ss.z,Ss.y,0,-Es.z,Es.y,0,-Ys.z,Ys.y,Ss.z,0,-Ss.x,Es.z,0,-Es.x,Ys.z,0,-Ys.x,-Ss.y,Ss.x,0,-Es.y,Es.x,0,-Ys.y,Ys.x,0];return!Gl(t,vr,Mr,br,Ka)||(t=[1,0,0,0,1,0,0,0,1],!Gl(t,vr,Mr,br,Ka))?!1:(Za.crossVectors(Ss,Es),t=[Za.x,Za.y,Za.z],Gl(t,vr,Mr,br,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ss=[new k,new k,new k,new k,new k,new k,new k,new k],Hi=new k,$a=new ir,vr=new k,Mr=new k,br=new k,Ss=new k,Es=new k,Ys=new k,ua=new k,Ka=new k,Za=new k,$s=new k;function Gl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$s.fromArray(i,r);let o=s.x*Math.abs($s.x)+s.y*Math.abs($s.y)+s.z*Math.abs($s.z),l=e.dot($s),c=t.dot($s),u=n.dot($s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var am=new ir,da=new k,Wl=new k,Wr=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):am.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);let t=da.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(da,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Wl)),this.expandByPoint(da.copy(e.center).sub(Wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},rs=new k,Xl=new k,Ja=new k,Ts=new k,ql=new k,ja=new k,Yl=new k,Sa=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.origin).addScaledVector(this.direction,t),rs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xl.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Ts.copy(this.origin).sub(Xl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ja),o=Ts.dot(this.direction),l=-Ts.dot(Ja),c=Ts.lengthSq(),u=Math.abs(1-a*a),m,p,f,x;if(u>0)if(m=a*l-o,p=a*o-l,x=r*u,m>=0)if(p>=-x)if(p<=x){let b=1/u;m*=b,p*=b,f=m*(m+a*p+2*o)+p*(a*m+p+2*l)+c}else p=r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;else p=-r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;else p<=-x?(m=Math.max(0,-(-a*r+o)),p=m>0?-r:Math.min(Math.max(-r,-l),r),f=-m*m+p*(p+2*l)+c):p<=x?(m=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(m=Math.max(0,-(a*r+o)),p=m>0?r:Math.min(Math.max(-r,-l),r),f=-m*m+p*(p+2*l)+c);else p=a>0?-r:r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Xl).addScaledVector(Ja,p),f}intersectSphere(e,t){rs.subVectors(e.center,this.origin);let n=rs.dot(this.direction),s=rs.dot(rs)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-p.z)*m,l=(e.max.z-p.z)*m):(o=(e.max.z-p.z)*m,l=(e.min.z-p.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,n,s,r){ql.subVectors(t,e),ja.subVectors(n,e),Yl.crossVectors(ql,ja);let a=this.direction.dot(Yl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ts.subVectors(this.origin,e);let l=o*this.direction.dot(ja.crossVectors(Ts,ja));if(l<0)return null;let c=o*this.direction.dot(ql.cross(Ts));if(c<0||l+c>a)return null;let u=-o*Ts.dot(Yl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kn=class i{constructor(e,t,n,s,r,a,o,l,c,u,m,p,f,x,b,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,m,p,f,x,b,y)}set(e,t,n,s,r,a,o,l,c,u,m,p,f,x,b,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=m,g[14]=p,g[3]=f,g[7]=x,g[11]=b,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Sr.setFromMatrixColumn(e,0).length(),r=1/Sr.setFromMatrixColumn(e,1).length(),a=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let p=a*u,f=a*m,x=o*u,b=o*m;t[0]=l*u,t[4]=-l*m,t[8]=c,t[1]=f+x*c,t[5]=p-b*c,t[9]=-o*l,t[2]=b-p*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,f=l*m,x=c*u,b=c*m;t[0]=p+b*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*m,t[5]=a*u,t[9]=-o,t[2]=f*o-x,t[6]=b+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,f=l*m,x=c*u,b=c*m;t[0]=p-b*o,t[4]=-a*m,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*u,t[9]=b-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,f=a*m,x=o*u,b=o*m;t[0]=l*u,t[4]=x*c-f,t[8]=p*c+b,t[1]=l*m,t[5]=b*c+p,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,f=a*c,x=o*l,b=o*c;t[0]=l*u,t[4]=b-p*m,t[8]=x*m+f,t[1]=m,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*m+x,t[10]=p-b*m}else if(e.order==="XZY"){let p=a*l,f=a*c,x=o*l,b=o*c;t[0]=l*u,t[4]=-m,t[8]=c*u,t[1]=p*m+b,t[5]=a*u,t[9]=f*m-x,t[2]=x*m-f,t[6]=o*u,t[10]=b*m+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(om,e,lm)}lookAt(e,t,n){let s=this.elements;return Mi.subVectors(e,t),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),ws.crossVectors(n,Mi),ws.lengthSq()===0&&(Math.abs(n.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),ws.crossVectors(n,Mi)),ws.normalize(),Qa.crossVectors(Mi,ws),s[0]=ws.x,s[4]=Qa.x,s[8]=Mi.x,s[1]=ws.y,s[5]=Qa.y,s[9]=Mi.y,s[2]=ws.z,s[6]=Qa.z,s[10]=Mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],p=n[9],f=n[13],x=n[2],b=n[6],y=n[10],g=n[14],S=n[3],v=n[7],A=n[11],B=n[15],D=s[0],U=s[4],$=s[8],T=s[12],R=s[1],K=s[5],ce=s[9],Me=s[13],F=s[2],Y=s[6],z=s[10],G=s[14],Z=s[3],ae=s[7],le=s[11],ue=s[15];return r[0]=a*D+o*R+l*F+c*Z,r[4]=a*U+o*K+l*Y+c*ae,r[8]=a*$+o*ce+l*z+c*le,r[12]=a*T+o*Me+l*G+c*ue,r[1]=u*D+m*R+p*F+f*Z,r[5]=u*U+m*K+p*Y+f*ae,r[9]=u*$+m*ce+p*z+f*le,r[13]=u*T+m*Me+p*G+f*ue,r[2]=x*D+b*R+y*F+g*Z,r[6]=x*U+b*K+y*Y+g*ae,r[10]=x*$+b*ce+y*z+g*le,r[14]=x*T+b*Me+y*G+g*ue,r[3]=S*D+v*R+A*F+B*Z,r[7]=S*U+v*K+A*Y+B*ae,r[11]=S*$+v*ce+A*z+B*le,r[15]=S*T+v*Me+A*G+B*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],m=e[6],p=e[10],f=e[14],x=e[3],b=e[7],y=e[11],g=e[15];return x*(+r*l*m-s*c*m-r*o*p+n*c*p+s*o*f-n*l*f)+b*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*u-r*l*u)+y*(+t*c*m-t*o*f-r*a*m+n*a*f+r*o*u-n*c*u)+g*(-s*o*u-t*l*m+t*o*p+s*a*m-n*a*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=e[9],p=e[10],f=e[11],x=e[12],b=e[13],y=e[14],g=e[15],S=m*y*c-b*p*c+b*l*f-o*y*f-m*l*g+o*p*g,v=x*p*c-u*y*c-x*l*f+a*y*f+u*l*g-a*p*g,A=u*b*c-x*m*c+x*o*f-a*b*f-u*o*g+a*m*g,B=x*m*l-u*b*l-x*o*p+a*b*p+u*o*y-a*m*y,D=t*S+n*v+s*A+r*B;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/D;return e[0]=S*U,e[1]=(b*p*r-m*y*r-b*s*f+n*y*f+m*s*g-n*p*g)*U,e[2]=(o*y*r-b*l*r+b*s*c-n*y*c-o*s*g+n*l*g)*U,e[3]=(m*l*r-o*p*r-m*s*c+n*p*c+o*s*f-n*l*f)*U,e[4]=v*U,e[5]=(u*y*r-x*p*r+x*s*f-t*y*f-u*s*g+t*p*g)*U,e[6]=(x*l*r-a*y*r-x*s*c+t*y*c+a*s*g-t*l*g)*U,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*f+t*l*f)*U,e[8]=A*U,e[9]=(x*m*r-u*b*r-x*n*f+t*b*f+u*n*g-t*m*g)*U,e[10]=(a*b*r-x*o*r+x*n*c-t*b*c-a*n*g+t*o*g)*U,e[11]=(u*o*r-a*m*r-u*n*c+t*m*c+a*n*f-t*o*f)*U,e[12]=B*U,e[13]=(u*b*s-x*m*s+x*n*p-t*b*p-u*n*y+t*m*y)*U,e[14]=(x*o*s-a*b*s-x*n*l+t*b*l+a*n*y-t*o*y)*U,e[15]=(a*m*s-u*o*s+u*n*l-t*m*l-a*n*p+t*o*p)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,m=o+o,p=r*c,f=r*u,x=r*m,b=a*u,y=a*m,g=o*m,S=l*c,v=l*u,A=l*m,B=n.x,D=n.y,U=n.z;return s[0]=(1-(b+g))*B,s[1]=(f+A)*B,s[2]=(x-v)*B,s[3]=0,s[4]=(f-A)*D,s[5]=(1-(p+g))*D,s[6]=(y+S)*D,s[7]=0,s[8]=(x+v)*U,s[9]=(y-S)*U,s[10]=(1-(p+b))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Sr.set(s[0],s[1],s[2]).length(),a=Sr.set(s[4],s[5],s[6]).length(),o=Sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zi.copy(this);let c=1/r,u=1/a,m=1/o;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=u,zi.elements[5]*=u,zi.elements[6]*=u,zi.elements[8]*=m,zi.elements[9]*=m,zi.elements[10]*=m,t.setFromRotationMatrix(zi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=hs){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),m=(t+e)/(t-e),p=(n+s)/(n-s),f,x;if(o===hs)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ao)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hs){let l=this.elements,c=1/(t-e),u=1/(n-s),m=1/(a-r),p=(t+e)*c,f=(n+s)*u,x,b;if(o===hs)x=(a+r)*m,b=-2*m;else if(o===Ao)x=r*m,b=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=b,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Sr=new k,zi=new kn,om=new k(0,0,0),lm=new k(1,1,1),ws=new k,Qa=new k,Mi=new k,Fu=new kn,ku=new Ns,Lo=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ni(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ni(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(ni(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ni(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ni(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ni(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Lo.DEFAULT_ORDER="XYZ";var Ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cm=0,Hu=new k,Er=new Ns,as=new kn,eo=new k,fa=new k,hm=new k,um=new Ns,zu=new k(1,0,0),Vu=new k(0,1,0),Gu=new k(0,0,1),dm={type:"added"},fm={type:"removed"},li=class i extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Lo,n=new Ns,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new kn},normalMatrix:{value:new Nt}}),this.matrix=new kn,this.matrixWorld=new kn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(as.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?as.lookAt(fa,eo,this.up):as.lookAt(eo,fa,this.up),this.quaternion.setFromRotationMatrix(as),s&&(as.extractRotation(s.matrixWorld),Er.setFromRotationMatrix(as),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),as.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),as.multiply(e.parent.matrixWorld)),e.applyMatrix4(as),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),m=a(e.shapes),p=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};li.DEFAULT_UP=new k(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vi=new k,os=new k,$l=new k,ls=new k,Tr=new k,wr=new k,Wu=new k,Kl=new k,Zl=new k,Jl=new k,to=!1,Ur=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vi.subVectors(e,t),s.cross(Vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vi.subVectors(s,t),os.subVectors(n,t),$l.subVectors(e,t);let a=Vi.dot(Vi),o=Vi.dot(os),l=Vi.dot($l),c=os.dot(os),u=os.dot($l),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let p=1/m,f=(c*l-o*u)*p,x=(a*u-o*l)*p;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getUV(e,t,n,s,r,a,o,l){return to===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),to=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ls.x),l.addScaledVector(a,ls.y),l.addScaledVector(o,ls.z),l)}static isFrontFacing(e,t,n,s){return Vi.subVectors(n,t),os.subVectors(e,t),Vi.cross(os).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),os.subVectors(this.a,this.b),Vi.cross(os).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return to===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),to=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Tr.subVectors(s,n),wr.subVectors(r,n),Kl.subVectors(e,n);let l=Tr.dot(Kl),c=wr.dot(Kl);if(l<=0&&c<=0)return t.copy(n);Zl.subVectors(e,s);let u=Tr.dot(Zl),m=wr.dot(Zl);if(u>=0&&m<=u)return t.copy(s);let p=l*m-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Tr,a);Jl.subVectors(e,r);let f=Tr.dot(Jl),x=wr.dot(Jl);if(x>=0&&f<=x)return t.copy(r);let b=f*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(wr,o);let y=u*x-f*m;if(y<=0&&m-u>=0&&f-x>=0)return Wu.subVectors(r,s),o=(m-u)/(m-u+(f-x)),t.copy(s).addScaledVector(Wu,o);let g=1/(y+b+p);return a=b*g,o=p*g,t.copy(n).addScaledVector(Tr,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},no={h:0,s:0,l:0};function jl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=on.workingColorSpace){return this.r=e,this.g=t,this.b=n,on.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=on.workingColorSpace){if(e=tm(e,1),t=ni(t,0,1),n=ni(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=jl(a,r,e+1/3),this.g=jl(a,r,e),this.b=jl(a,r,e-1/3)}return on.toWorkingColorSpace(this,s),this}setStyle(e,t=Jn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){let n=Wd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=Hl(e.r),this.g=Hl(e.g),this.b=Hl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return on.fromWorkingColorSpace(ti.copy(this),e),Math.round(ni(ti.r*255,0,255))*65536+Math.round(ni(ti.g*255,0,255))*256+Math.round(ni(ti.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=on.workingColorSpace){on.fromWorkingColorSpace(ti.copy(this),t);let n=ti.r,s=ti.g,r=ti.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=on.workingColorSpace){return on.fromWorkingColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=Jn){on.fromWorkingColorSpace(ti.copy(this),e);let t=ti.r,n=ti.g,s=ti.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(As),this.setHSL(As.h+e,As.s+t,As.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(As),e.getHSL(no);let n=Fl(As.h,no.h,t),s=Fl(As.s,no.s,t),r=Fl(As.l,no.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ti=new xt;xt.NAMES=Wd;var pm=0,Os=class extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=Fr,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==Ds&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==js&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pn=class extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Fn=new k,io=new He,di=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Iu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix3(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ha(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array),s=hi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array),s=hi(s,this.array),r=hi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iu&&(e.usage=this.usage),e}};var Do=class extends di{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Uo=class extends di{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Cn=class extends di{constructor(e,t,n){super(new Float32Array(e),t,n)}};var mm=0,Li=new kn,Ql=new li,Ar=new k,bi=new ir,pa=new ir,$n=new k,fi=class i extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?Uo:Do)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,n){return Li.makeTranslation(e,t,n),this.applyMatrix4(Li),this}scale(e,t,n){return Li.makeScale(e,t,n),this.applyMatrix4(Li),this}lookAt(e){return Ql.lookAt(e),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];bi.setFromBufferAttribute(r),this.morphTargetsRelative?($n.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint($n),$n.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint($n)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];pa.setFromBufferAttribute(o),this.morphTargetsRelative?($n.addVectors(bi.min,pa.min),bi.expandByPoint($n),$n.addVectors(bi.max,pa.max),bi.expandByPoint($n)):(bi.expandByPoint(pa.min),bi.expandByPoint(pa.max))}bi.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$n.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($n));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$n.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(e,c),$n.add(Ar)),s=Math.max(s,n.distanceToSquared($n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new k,u[R]=new k;let m=new k,p=new k,f=new k,x=new He,b=new He,y=new He,g=new k,S=new k;function v(R,K,ce){m.fromArray(s,R*3),p.fromArray(s,K*3),f.fromArray(s,ce*3),x.fromArray(a,R*2),b.fromArray(a,K*2),y.fromArray(a,ce*2),p.sub(m),f.sub(m),b.sub(x),y.sub(x);let Me=1/(b.x*y.y-y.x*b.y);isFinite(Me)&&(g.copy(p).multiplyScalar(y.y).addScaledVector(f,-b.y).multiplyScalar(Me),S.copy(f).multiplyScalar(b.x).addScaledVector(p,-y.x).multiplyScalar(Me),c[R].add(g),c[K].add(g),c[ce].add(g),u[R].add(S),u[K].add(S),u[ce].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let R=0,K=A.length;R<K;++R){let ce=A[R],Me=ce.start,F=ce.count;for(let Y=Me,z=Me+F;Y<z;Y+=3)v(n[Y+0],n[Y+1],n[Y+2])}let B=new k,D=new k,U=new k,$=new k;function T(R){U.fromArray(r,R*3),$.copy(U);let K=c[R];B.copy(K),B.sub(U.multiplyScalar(U.dot(K))).normalize(),D.crossVectors($,K);let Me=D.dot(u[R])<0?-1:1;l[R*4]=B.x,l[R*4+1]=B.y,l[R*4+2]=B.z,l[R*4+3]=Me}for(let R=0,K=A.length;R<K;++R){let ce=A[R],Me=ce.start,F=ce.count;for(let Y=Me,z=Me+F;Y<z;Y+=3)T(n[Y+0]),T(n[Y+1]),T(n[Y+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,m=new k;if(e)for(let p=0,f=e.count;p<f;p+=3){let x=e.getX(p+0),b=e.getX(p+1),y=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,y),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,y),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$n.fromBufferAttribute(e,t),$n.normalize(),e.setXYZ(t,$n.x,$n.y,$n.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,m=o.normalized,p=new c.constructor(l.length*u),f=0,x=0;for(let b=0,y=l.length;b<y;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*u;for(let g=0;g<u;g++)p[x++]=c[f++]}return new di(p,u,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){let p=c[u],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,p=c.length;m<p;m++){let f=c[m];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],m=r[c];for(let p=0,f=m.length;p<f;p++)u.push(m[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xu=new kn,Ks=new Sa,so=new Wr,qu=new k,Rr=new k,Cr=new k,Pr=new k,ec=new k,ro=new k,ao=new He,oo=new He,lo=new He,Yu=new k,$u=new k,Ku=new k,co=new k,ho=new k,Ye=class extends li{constructor(e=new fi,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],m=r[l];u!==0&&(ec.fromBufferAttribute(m,e),a?ro.addScaledVector(ec,u):ro.addScaledVector(ec.sub(t),u))}t.add(ro)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),Ks.copy(e.ray).recast(e.near),!(so.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(so,qu)===null||Ks.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(Xu.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&Ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=p.length;x<b;x++){let y=p[x],g=a[y.materialIndex],S=Math.max(y.start,f.start),v=Math.min(o.count,Math.min(y.start+y.count,f.start+f.count));for(let A=S,B=v;A<B;A+=3){let D=o.getX(A),U=o.getX(A+1),$=o.getX(A+2);s=uo(this,g,e,n,c,u,m,D,U,$),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let y=x,g=b;y<g;y+=3){let S=o.getX(y),v=o.getX(y+1),A=o.getX(y+2);s=uo(this,a,e,n,c,u,m,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,b=p.length;x<b;x++){let y=p[x],g=a[y.materialIndex],S=Math.max(y.start,f.start),v=Math.min(l.count,Math.min(y.start+y.count,f.start+f.count));for(let A=S,B=v;A<B;A+=3){let D=A,U=A+1,$=A+2;s=uo(this,g,e,n,c,u,m,D,U,$),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let y=x,g=b;y<g;y+=3){let S=y,v=y+1,A=y+2;s=uo(this,a,e,n,c,u,m,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function gm(i,e,t,n,s,r,a,o){let l;if(e.side===ui?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ds,o),l===null)return null;ho.copy(o),ho.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:i}}function uo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Rr),i.getVertexPosition(l,Cr),i.getVertexPosition(c,Pr);let u=gm(i,e,t,n,Rr,Cr,Pr,co);if(u){s&&(ao.fromBufferAttribute(s,o),oo.fromBufferAttribute(s,l),lo.fromBufferAttribute(s,c),u.uv=Ur.getInterpolation(co,Rr,Cr,Pr,ao,oo,lo,new He)),r&&(ao.fromBufferAttribute(r,o),oo.fromBufferAttribute(r,l),lo.fromBufferAttribute(r,c),u.uv1=Ur.getInterpolation(co,Rr,Cr,Pr,ao,oo,lo,new He),u.uv2=u.uv1),a&&(Yu.fromBufferAttribute(a,o),$u.fromBufferAttribute(a,l),Ku.fromBufferAttribute(a,c),u.normal=Ur.getInterpolation(co,Rr,Cr,Pr,Yu,$u,Ku,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let m={a:o,b:l,c,normal:new k,materialIndex:0};Ur.getNormal(Rr,Cr,Pr,m.normal),u.face=m}return u}var Vn=class i extends fi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],m=[],p=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(u,3)),this.setAttribute("uv",new Cn(m,2));function x(b,y,g,S,v,A,B,D,U,$,T){let R=A/U,K=B/$,ce=A/2,Me=B/2,F=D/2,Y=U+1,z=$+1,G=0,Z=0,ae=new k;for(let le=0;le<z;le++){let ue=le*K-Me;for(let Ae=0;Ae<Y;Ae++){let j=Ae*R-ce;ae[b]=j*S,ae[y]=ue*v,ae[g]=F,c.push(ae.x,ae.y,ae.z),ae[b]=0,ae[y]=0,ae[g]=D>0?1:-1,u.push(ae.x,ae.y,ae.z),m.push(Ae/U),m.push(1-le/$),G+=1}}for(let le=0;le<$;le++)for(let ue=0;ue<U;ue++){let Ae=p+ue+Y*le,j=p+ue+Y*(le+1),de=p+(ue+1)+Y*(le+1),Te=p+(ue+1)+Y*le;l.push(Ae,j,Te),l.push(j,de,Te),Z+=6}o.addGroup(f,Z,T),f+=Z,p+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ri(i){let e={};for(let t=0;t<i.length;t++){let n=Xr(i[t]);for(let s in n)e[s]=n[s]}return e}function ym(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xd(i){return i.getRenderTarget()===null?i.outputColorSpace:on.workingColorSpace}var xm={clone:Xr,merge:ri},_m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fs=class extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},No=class extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kn,this.projectionMatrix=new kn,this.projectionMatrixInverse=new kn,this.coordinateSystem=hs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=class extends No{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ir=-90,Lr=1,bc=class extends li{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new oi(Ir,Lr,e,t);s.layers=this.layers,this.add(s);let r=new oi(Ir,Lr,e,t);r.layers=this.layers,this.add(r);let a=new oi(Ir,Lr,e,t);a.layers=this.layers,this.add(a);let o=new oi(Ir,Lr,e,t);o.layers=this.layers,this.add(o);let l=new oi(Ir,Lr,e,t);l.layers=this.layers,this.add(l);let c=new oi(Ir,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===hs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(m,p,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Oo=class extends Ni{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sc=class extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ma("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===nr?Jn:Ui),this.texture=new Oo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vn(5,5,5),r=new fs({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ui,blending:Ps});r.uniforms.tEquirect.value=t;let a=new Ye(s,r),o=t.minFilter;return t.minFilter===Ma&&(t.minFilter=Di),new bc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},tc=new k,Mm=new k,bm=new Nt,Gi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tc.subVectors(n,t).cross(Mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(tc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bm.getNormalMatrix(e),s=this.coplanarPoint(tc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zs=new Wr,fo=new k,Ta=class{constructor(e=new Gi,t=new Gi,n=new Gi,s=new Gi,r=new Gi,a=new Gi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hs){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],m=s[6],p=s[7],f=s[8],x=s[9],b=s[10],y=s[11],g=s[12],S=s[13],v=s[14],A=s[15];if(n[0].setComponents(l-r,p-c,y-f,A-g).normalize(),n[1].setComponents(l+r,p+c,y+f,A+g).normalize(),n[2].setComponents(l+a,p+u,y+x,A+S).normalize(),n[3].setComponents(l-a,p-u,y-x,A-S).normalize(),n[4].setComponents(l-o,p-m,y-b,A-v).normalize(),t===hs)n[5].setComponents(l+o,p+m,y+b,A+v).normalize();else if(t===Ao)n[5].setComponents(o,m,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){return Zs.center.set(0,0,0),Zs.radius=.7071067811865476,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fo.x=s.normal.x>0?e.max.x:e.min.x,fo.y=s.normal.y>0?e.max.y:e.min.y,fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sm(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,u){let m=c.array,p=c.usage,f=m.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,m,p),c.onUploadCallback();let b;if(m instanceof Float32Array)b=i.FLOAT;else if(m instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)b=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=i.SHORT;else if(m instanceof Uint32Array)b=i.UNSIGNED_INT;else if(m instanceof Int32Array)b=i.INT;else if(m instanceof Int8Array)b=i.BYTE;else if(m instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,m){let p=u.array,f=u._updateRange,x=u.updateRanges;if(i.bindBuffer(m,c),f.count===-1&&x.length===0&&i.bufferSubData(m,0,p),x.length!==0){for(let b=0,y=x.length;b<y;b++){let g=x[b];t?i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count):i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p.subarray(g.start,g.start+g.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(m,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(m,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let m=n.get(c);if(m===void 0)n.set(c,s(c,u));else if(m.version<c.version){if(m.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,c,u),m.version=c.version}}return{get:a,remove:o,update:l}}var ji=class i extends fi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,m=e/o,p=t/l,f=[],x=[],b=[],y=[];for(let g=0;g<u;g++){let S=g*p-a;for(let v=0;v<c;v++){let A=v*m-r;x.push(A,-S,0),b.push(0,0,1),y.push(v/o),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){let v=S+c*g,A=S+c*(g+1),B=S+1+c*(g+1),D=S+1+c*g;f.push(v,A,D),f.push(A,B,D)}this.setIndex(f),this.setAttribute("position",new Cn(x,3)),this.setAttribute("normal",new Cn(b,3)),this.setAttribute("uv",new Cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
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
#endif`,wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
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
#endif`,Im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lm=`#ifdef USE_BATCHING
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
#endif`,Dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Fm=`#ifdef USE_BUMPMAP
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ym=`#define PI 3.141592653589793
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
} // validated`,$m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Km=`vec3 transformedNormal = objectNormal;
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
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",tg=`
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
}`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ug=`#ifdef USE_GRADIENTMAP
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
}`,dg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
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
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
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
#endif`,Sg=`struct PhysicalMaterial {
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
}`,Eg=`
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ug=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Hg=`#ifdef USE_MORPHTARGETS
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
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qg=`#ifdef USE_NORMALMAP
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
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l0=`float getShadowMask() {
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
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
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
}`,P0=`#if DEPTH_PACKING == 3200
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
}`,I0=`#define DISTANCE
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
}`,L0=`#define DISTANCE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,F0=`uniform vec3 diffuse;
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
}`,k0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,V0=`#define MATCAP
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
}`,G0=`#define NORMAL
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
}`,W0=`#define NORMAL
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
}`,X0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,Y0=`#define STANDARD
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
}`,$0=`#define STANDARD
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
}`,K0=`#define TOON
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
}`,Z0=`#define TOON
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
}`,J0=`uniform float size;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,ey=`uniform vec3 color;
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
}`,ty=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,Lt={alphahash_fragment:Em,alphahash_pars_fragment:Tm,alphamap_fragment:wm,alphamap_pars_fragment:Am,alphatest_fragment:Rm,alphatest_pars_fragment:Cm,aomap_fragment:Pm,aomap_pars_fragment:Im,batching_pars_vertex:Lm,batching_vertex:Dm,begin_vertex:Um,beginnormal_vertex:Nm,bsdfs:Om,iridescence_fragment:Bm,bumpmap_pars_fragment:Fm,clipping_planes_fragment:km,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:Vm,color_fragment:Gm,color_pars_fragment:Wm,color_pars_vertex:Xm,color_vertex:qm,common:Ym,cube_uv_reflection_fragment:$m,defaultnormal_vertex:Km,displacementmap_pars_vertex:Zm,displacementmap_vertex:Jm,emissivemap_fragment:jm,emissivemap_pars_fragment:Qm,colorspace_fragment:eg,colorspace_pars_fragment:tg,envmap_fragment:ng,envmap_common_pars_fragment:ig,envmap_pars_fragment:sg,envmap_pars_vertex:rg,envmap_physical_pars_fragment:yg,envmap_vertex:ag,fog_vertex:og,fog_pars_vertex:lg,fog_fragment:cg,fog_pars_fragment:hg,gradientmap_pars_fragment:ug,lightmap_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:xg,lights_toon_pars_fragment:_g,lights_phong_fragment:vg,lights_phong_pars_fragment:Mg,lights_physical_fragment:bg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Eg,lights_fragment_maps:Tg,lights_fragment_end:wg,logdepthbuf_fragment:Ag,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Cg,logdepthbuf_vertex:Pg,map_fragment:Ig,map_pars_fragment:Lg,map_particle_fragment:Dg,map_particle_pars_fragment:Ug,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Og,morphcolor_vertex:Bg,morphnormal_vertex:Fg,morphtarget_pars_vertex:kg,morphtarget_vertex:Hg,normal_fragment_begin:zg,normal_fragment_maps:Vg,normal_pars_fragment:Gg,normal_pars_vertex:Wg,normal_vertex:Xg,normalmap_pars_fragment:qg,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:$g,clearcoat_pars_fragment:Kg,iridescence_pars_fragment:Zg,opaque_fragment:Jg,packing:jg,premultiplied_alpha_fragment:Qg,project_vertex:e0,dithering_fragment:t0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:a0,shadowmap_vertex:o0,shadowmask_pars_fragment:l0,skinbase_vertex:c0,skinning_pars_vertex:h0,skinning_vertex:u0,skinnormal_vertex:d0,specularmap_fragment:f0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:y0,transmission_pars_fragment:x0,uv_pars_fragment:_0,uv_pars_vertex:v0,uv_vertex:M0,worldpos_vertex:b0,background_vert:S0,background_frag:E0,backgroundCube_vert:T0,backgroundCube_frag:w0,cube_vert:A0,cube_frag:R0,depth_vert:C0,depth_frag:P0,distanceRGBA_vert:I0,distanceRGBA_frag:L0,equirect_vert:D0,equirect_frag:U0,linedashed_vert:N0,linedashed_frag:O0,meshbasic_vert:B0,meshbasic_frag:F0,meshlambert_vert:k0,meshlambert_frag:H0,meshmatcap_vert:z0,meshmatcap_frag:V0,meshnormal_vert:G0,meshnormal_frag:W0,meshphong_vert:X0,meshphong_frag:q0,meshphysical_vert:Y0,meshphysical_frag:$0,meshtoon_vert:K0,meshtoon_frag:Z0,points_vert:J0,points_frag:j0,shadow_vert:Q0,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},Le={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ji={basic:{uniforms:ri([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:ri([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:ri([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:ri([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:ri([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:ri([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:ri([Le.points,Le.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:ri([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:ri([Le.common,Le.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:ri([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:ri([Le.sprite,Le.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:ri([Le.common,Le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:ri([Le.lights,Le.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Ji.physical={uniforms:ri([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};var po={r:0,b:0,g:0};function iy(i,e,t,n,s,r,a){let o=new xt(0),l=r===!0?0:1,c,u,m=null,p=0,f=null;function x(y,g){let S=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?b(o,l):v&&v.isColor&&(b(v,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===tl)?(u===void 0&&(u=new Ye(new Vn(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:Xr(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=on.getTransfer(v.colorSpace)!==xn,(m!==v||p!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,m=v,p=v.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ye(new ji(2,2),new fs({name:"BackgroundMaterial",uniforms:Xr(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=on.getTransfer(v.colorSpace)!==xn,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(m!==v||p!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,m=v,p=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function b(y,g){y.getRGB(po,Xd(i)),n.buffers.color.setClear(po.r,po.g,po.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(y,g=1){o.set(y),l=g,b(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,b(o,l)},render:x}}function sy(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=y(null),c=l,u=!1;function m(F,Y,z,G,Z){let ae=!1;if(a){let le=b(G,z,Y);c!==le&&(c=le,f(c.object)),ae=g(F,G,z,Z),ae&&S(F,G,z,Z)}else{let le=Y.wireframe===!0;(c.geometry!==G.id||c.program!==z.id||c.wireframe!==le)&&(c.geometry=G.id,c.program=z.id,c.wireframe=le,ae=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,$(F,Y,z,G),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function x(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function b(F,Y,z){let G=z.wireframe===!0,Z=o[F.id];Z===void 0&&(Z={},o[F.id]=Z);let ae=Z[Y.id];ae===void 0&&(ae={},Z[Y.id]=ae);let le=ae[G];return le===void 0&&(le=y(p()),ae[G]=le),le}function y(F){let Y=[],z=[],G=[];for(let Z=0;Z<s;Z++)Y[Z]=0,z[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:z,attributeDivisors:G,object:F,attributes:{},index:null}}function g(F,Y,z,G){let Z=c.attributes,ae=Y.attributes,le=0,ue=z.getAttributes();for(let Ae in ue)if(ue[Ae].location>=0){let de=Z[Ae],Te=ae[Ae];if(Te===void 0&&(Ae==="instanceMatrix"&&F.instanceMatrix&&(Te=F.instanceMatrix),Ae==="instanceColor"&&F.instanceColor&&(Te=F.instanceColor)),de===void 0||de.attribute!==Te||Te&&de.data!==Te.data)return!0;le++}return c.attributesNum!==le||c.index!==G}function S(F,Y,z,G){let Z={},ae=Y.attributes,le=0,ue=z.getAttributes();for(let Ae in ue)if(ue[Ae].location>=0){let de=ae[Ae];de===void 0&&(Ae==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),Ae==="instanceColor"&&F.instanceColor&&(de=F.instanceColor));let Te={};Te.attribute=de,de&&de.data&&(Te.data=de.data),Z[Ae]=Te,le++}c.attributes=Z,c.attributesNum=le,c.index=G}function v(){let F=c.newAttributes;for(let Y=0,z=F.length;Y<z;Y++)F[Y]=0}function A(F){B(F,0)}function B(F,Y){let z=c.newAttributes,G=c.enabledAttributes,Z=c.attributeDivisors;z[F]=1,G[F]===0&&(i.enableVertexAttribArray(F),G[F]=1),Z[F]!==Y&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Y),Z[F]=Y)}function D(){let F=c.newAttributes,Y=c.enabledAttributes;for(let z=0,G=Y.length;z<G;z++)Y[z]!==F[z]&&(i.disableVertexAttribArray(z),Y[z]=0)}function U(F,Y,z,G,Z,ae,le){le===!0?i.vertexAttribIPointer(F,Y,z,Z,ae):i.vertexAttribPointer(F,Y,z,G,Z,ae)}function $(F,Y,z,G){if(n.isWebGL2===!1&&(F.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let Z=G.attributes,ae=z.getAttributes(),le=Y.defaultAttributeValues;for(let ue in ae){let Ae=ae[ue];if(Ae.location>=0){let j=Z[ue];if(j===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){let de=j.normalized,Te=j.itemSize,ke=t.get(j);if(ke===void 0)continue;let We=ke.buffer,ht=ke.type,dt=ke.bytesPerElement,Ke=n.isWebGL2===!0&&(ht===i.INT||ht===i.UNSIGNED_INT||j.gpuType===Dd);if(j.isInterleavedBufferAttribute){let oe=j.data,J=oe.stride,pn=j.offset;if(oe.isInstancedInterleavedBuffer){for(let ve=0;ve<Ae.locationSize;ve++)B(Ae.location+ve,oe.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<Ae.locationSize;ve++)A(Ae.location+ve);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ve=0;ve<Ae.locationSize;ve++)U(Ae.location+ve,Te/Ae.locationSize,ht,de,J*dt,(pn+Te/Ae.locationSize*ve)*dt,Ke)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<Ae.locationSize;oe++)B(Ae.location+oe,j.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<Ae.locationSize;oe++)A(Ae.location+oe);i.bindBuffer(i.ARRAY_BUFFER,We);for(let oe=0;oe<Ae.locationSize;oe++)U(Ae.location+oe,Te/Ae.locationSize,ht,de,Te*dt,Te/Ae.locationSize*oe*dt,Ke)}}else if(le!==void 0){let de=le[ue];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(Ae.location,de);break;case 3:i.vertexAttrib3fv(Ae.location,de);break;case 4:i.vertexAttrib4fv(Ae.location,de);break;default:i.vertexAttrib1fv(Ae.location,de)}}}}D()}function T(){ce();for(let F in o){let Y=o[F];for(let z in Y){let G=Y[z];for(let Z in G)x(G[Z].object),delete G[Z];delete Y[z]}delete o[F]}}function R(F){if(o[F.id]===void 0)return;let Y=o[F.id];for(let z in Y){let G=Y[z];for(let Z in G)x(G[Z].object),delete G[Z];delete Y[z]}delete o[F.id]}function K(F){for(let Y in o){let z=o[Y];if(z[F.id]===void 0)continue;let G=z[F.id];for(let Z in G)x(G[Z].object),delete G[Z];delete z[F.id]}}function ce(){Me(),u=!0,c!==l&&(c=l,f(c.object))}function Me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:ce,resetDefaultState:Me,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:K,initAttributes:v,enableAttribute:A,disableUnusedAttributes:D}}function ry(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,m){i.drawArrays(r,u,m),t.update(m,r,1)}function l(u,m,p){if(p===0)return;let f,x;if(s)f=i,x="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[x](r,u,m,p),t.update(m,r,p)}function c(u,m,p){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<p;x++)this.render(u[x],m[x]);else{f.multiDrawArraysWEBGL(r,u,0,m,0,p);let x=0;for(let b=0;b<p;b++)x+=m[b];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ay(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,A=a||e.has("OES_texture_float"),B=v&&A,D=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:m,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:x,maxAttributes:b,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:B,maxSamples:D}}function oy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Gi,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){let f=m.length!==0||p||n!==0||s;return s=p,n=m.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,p){t=u(m,p,0)},this.setState=function(m,p,f){let x=m.clippingPlanes,b=m.clipIntersection,y=m.clipShadows,g=i.get(m);if(!s||x===null||x.length===0||r&&!y)r?u(null):c();else{let S=r?0:n,v=S*4,A=g.clippingState||null;l.value=A,A=u(x,p,v,f);for(let B=0;B!==v;++B)A[B]=t[B];g.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(m,p,f,x){let b=m!==null?m.length:0,y=null;if(b!==0){if(y=l.value,x!==!0||y===null){let g=f+b*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(y===null||y.length<g)&&(y=new Float32Array(g));for(let v=0,A=f;v!==b;++v,A+=4)a.copy(m[v]).applyMatrix4(S,o),a.normal.toArray(y,A),y[A+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function ly(i){let e=new WeakMap;function t(a,o){return o===pc?a.mapping=zr:o===mc&&(a.mapping=Vr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===pc||o===mc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Sc(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Bo=class extends No{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nr=4,Zu=[.125,.215,.35,.446,.526,.582],Qs=20,nc=new Bo,Ju=new xt,ic=null,sc=0,rc=0,Js=(1+Math.sqrt(5))/2,Dr=1/Js,ju=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Js,Dr),new k(0,Js,-Dr),new k(Dr,0,Js),new k(-Dr,0,Js),new k(Js,Dr,0),new k(-Js,Dr,0)],Fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,sc,rc),e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:ba,format:Xi,colorSpace:us,depthBuffer:!1},s=Qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cy(r)),this._blurMaterial=hy(r,e,t)}return s}_compileMaterial(e){let t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,nc)}_sceneToCubeUV(e,t,n,s){let o=new oi(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,m=u.autoClear,p=u.toneMapping;u.getClearColor(Ju),u.toneMapping=Is,u.autoClear=!1;let f=new Pn({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1}),x=new Ye(new Vn,f),b=!1,y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,b=!0):(f.color.copy(Ju),b=!0);for(let g=0;g<6;g++){let S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let v=this._cubeSize;mo(s,S*v,g>2?v:0,v,v),u.setRenderTarget(s),b&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=m,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===zr||e.mapping===Vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;mo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,nc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ju[(s-1)%ju.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,m=new Ye(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qs-1),b=r/x,y=isFinite(r)?1+Math.floor(u*b):Qs;y>Qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Qs}`);let g=[],S=0;for(let U=0;U<Qs;++U){let $=U/b,T=Math.exp(-$*$/2);g.push(T),U===0?S+=T:U<y&&(S+=2*T)}for(let U=0;U<g.length;U++)g[U]=g[U]/S;p.envMap.value=e.texture,p.samples.value=y,p.weights.value=g,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-n;let A=this._sizeLods[s],B=3*A*(s>v-Nr?s-v+Nr:0),D=4*(this._cubeSize-A);mo(t,B,D,3*A,2*A),l.setRenderTarget(t),l.render(m,nc)}};function cy(i){let e=[],t=[],n=[],s=i,r=i-Nr+1+Zu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Nr?l=Zu[a-i+Nr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,m=1+c,p=[u,u,m,u,m,m,u,u,m,m,u,m],f=6,x=6,b=3,y=2,g=1,S=new Float32Array(b*x*f),v=new Float32Array(y*x*f),A=new Float32Array(g*x*f);for(let D=0;D<f;D++){let U=D%3*2/3-1,$=D>2?0:-1,T=[U,$,0,U+2/3,$,0,U+2/3,$+1,0,U,$,0,U+2/3,$+1,0,U,$+1,0];S.set(T,b*x*D),v.set(p,y*x*D);let R=[D,D,D,D,D,D];A.set(R,g*x*D)}let B=new fi;B.setAttribute("position",new di(S,b)),B.setAttribute("uv",new di(v,y)),B.setAttribute("faceIndex",new di(A,g)),e.push(B),s>Nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qu(i,e,t){let n=new ds(i,e,t);return n.texture.mapping=tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function hy(i,e,t){let n=new Float32Array(Qs),s=new k(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oh(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function ed(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function td(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function oh(){return`

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
	`}function uy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===pc||l===mc,u=l===zr||l===Vr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let m=e.get(o);return t===null&&(t=new Fo(i)),m=c?t.fromEquirectangular(o,m):t.fromCubemap(o,m),e.set(o,m),m.texture}else{if(e.has(o))return e.get(o).texture;{let m=o.image;if(c&&m&&m.height>0||u&&m&&s(m)){t===null&&(t=new Fo(i));let p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fy(i,e,t,n){let s={},r=new WeakMap;function a(m){let p=m.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let b=p.morphAttributes[x];for(let y=0,g=b.length;y<g;y++)e.remove(b[y])}p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(m,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(m){let p=m.attributes;for(let x in p)e.update(p[x],i.ARRAY_BUFFER);let f=m.morphAttributes;for(let x in f){let b=f[x];for(let y=0,g=b.length;y<g;y++)e.update(b[y],i.ARRAY_BUFFER)}}function c(m){let p=[],f=m.index,x=m.attributes.position,b=0;if(f!==null){let S=f.array;b=f.version;for(let v=0,A=S.length;v<A;v+=3){let B=S[v+0],D=S[v+1],U=S[v+2];p.push(B,D,D,U,U,B)}}else if(x!==void 0){let S=x.array;b=x.version;for(let v=0,A=S.length/3-1;v<A;v+=3){let B=v+0,D=v+1,U=v+2;p.push(B,D,D,U,U,B)}}else return;let y=new(Gd(p)?Uo:Do)(p,1);y.version=b;let g=r.get(m);g&&e.remove(g),r.set(m,y)}function u(m){let p=r.get(m);if(p){let f=m.index;f!==null&&p.version<f.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:u}}function py(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,x){i.drawElements(r,x,o,f*l),t.update(x,r,1)}function m(f,x,b){if(b===0)return;let y,g;if(s)y=i,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](r,x,o,f*l,b),t.update(x,r,b)}function p(f,x,b){if(b===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<b;g++)this.render(f[g]/l,x[g]);else{y.multiDrawElementsWEBGL(r,x,0,o,f,0,b);let g=0;for(let S=0;S<b;S++)g+=x[S];t.update(g,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=m,this.renderMultiDraw=p}function my(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gy(i,e){return i[0]-e[0]}function yy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function xy(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Kn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,m){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=f!==void 0?f.length:0,b=r.get(u);if(b===void 0||b.count!==x){let F=function(){ce.dispose(),r.delete(u),u.removeEventListener("dispose",F)};b!==void 0&&b.texture.dispose();let S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,B=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],U=u.morphAttributes.color||[],$=0;S===!0&&($=1),v===!0&&($=2),A===!0&&($=3);let T=u.attributes.position.count*$,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let K=new Float32Array(T*R*4*x),ce=new Io(K,T,R,x);ce.type=Cs,ce.needsUpdate=!0;let Me=$*4;for(let Y=0;Y<x;Y++){let z=B[Y],G=D[Y],Z=U[Y],ae=T*R*4*Y;for(let le=0;le<z.count;le++){let ue=le*Me;S===!0&&(a.fromBufferAttribute(z,le),K[ae+ue+0]=a.x,K[ae+ue+1]=a.y,K[ae+ue+2]=a.z,K[ae+ue+3]=0),v===!0&&(a.fromBufferAttribute(G,le),K[ae+ue+4]=a.x,K[ae+ue+5]=a.y,K[ae+ue+6]=a.z,K[ae+ue+7]=0),A===!0&&(a.fromBufferAttribute(Z,le),K[ae+ue+8]=a.x,K[ae+ue+9]=a.y,K[ae+ue+10]=a.z,K[ae+ue+11]=Z.itemSize===4?a.w:1)}}b={count:x,texture:ce,size:new He(T,R)},r.set(u,b),u.addEventListener("dispose",F)}let y=0;for(let S=0;S<p.length;S++)y+=p[S];let g=u.morphTargetsRelative?1:1-y;m.getUniforms().setValue(i,"morphTargetBaseInfluence",g),m.getUniforms().setValue(i,"morphTargetInfluences",p),m.getUniforms().setValue(i,"morphTargetsTexture",b.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",b.size)}else{let f=p===void 0?0:p.length,x=n[u.id];if(x===void 0||x.length!==f){x=[];for(let v=0;v<f;v++)x[v]=[v,0];n[u.id]=x}for(let v=0;v<f;v++){let A=x[v];A[0]=v,A[1]=p[v]}x.sort(yy);for(let v=0;v<8;v++)v<f&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(gy);let b=u.morphAttributes.position,y=u.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let A=o[v],B=A[0],D=A[1];B!==Number.MAX_SAFE_INTEGER&&D?(b&&u.getAttribute("morphTarget"+v)!==b[B]&&u.setAttribute("morphTarget"+v,b[B]),y&&u.getAttribute("morphNormal"+v)!==y[B]&&u.setAttribute("morphNormal"+v,y[B]),s[v]=D,g+=D):(b&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),y&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let S=u.morphTargetsRelative?1:1-g;m.getUniforms().setValue(i,"morphTargetBaseInfluence",S),m.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function _y(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,m=e.get(l,u);if(s.get(m)!==c&&(e.update(m),s.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return m}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var ko=class extends Ni{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:tr,u!==tr&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===tr&&(n=Rs),n===void 0&&u===Gr&&(n=er),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yd=new Ni,$d=new ko(1,1);$d.compareFunction=Vd;var Kd=new Io,Zd=new Mc,Jd=new Oo,nd=[],id=[],sd=new Float32Array(16),rd=new Float32Array(9),ad=new Float32Array(4);function Zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=nd[s];if(r===void 0&&(r=new Float32Array(s),nd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function il(i,e){let t=id[e];t===void 0&&(t=new Int32Array(e),id[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gn(t,e))return;i.uniform2fv(this.addr,e),Wn(t,e)}}function by(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gn(t,e))return;i.uniform3fv(this.addr,e),Wn(t,e)}}function Sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gn(t,e))return;i.uniform4fv(this.addr,e),Wn(t,e)}}function Ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wn(t,e)}else{if(Gn(t,n))return;ad.set(n),i.uniformMatrix2fv(this.addr,!1,ad),Wn(t,n)}}function Ty(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wn(t,e)}else{if(Gn(t,n))return;rd.set(n),i.uniformMatrix3fv(this.addr,!1,rd),Wn(t,n)}}function wy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wn(t,e)}else{if(Gn(t,n))return;sd.set(n),i.uniformMatrix4fv(this.addr,!1,sd),Wn(t,n)}}function Ay(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gn(t,e))return;i.uniform2iv(this.addr,e),Wn(t,e)}}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gn(t,e))return;i.uniform3iv(this.addr,e),Wn(t,e)}}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gn(t,e))return;i.uniform4iv(this.addr,e),Wn(t,e)}}function Iy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gn(t,e))return;i.uniform2uiv(this.addr,e),Wn(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gn(t,e))return;i.uniform3uiv(this.addr,e),Wn(t,e)}}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gn(t,e))return;i.uniform4uiv(this.addr,e),Wn(t,e)}}function Ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?$d:Yd;t.setTexture2D(e||r,s)}function Oy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zd,s)}function By(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jd,s)}function Fy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kd,s)}function ky(i){switch(i){case 5126:return vy;case 35664:return My;case 35665:return by;case 35666:return Sy;case 35674:return Ey;case 35675:return Ty;case 35676:return wy;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return Iy;case 36294:return Ly;case 36295:return Dy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return Fy}}function Hy(i,e){i.uniform1fv(this.addr,e)}function zy(i,e){let t=Zr(e,this.size,2);i.uniform2fv(this.addr,t)}function Vy(i,e){let t=Zr(e,this.size,3);i.uniform3fv(this.addr,t)}function Gy(i,e){let t=Zr(e,this.size,4);i.uniform4fv(this.addr,t)}function Wy(i,e){let t=Zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xy(i,e){let t=Zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qy(i,e){let t=Zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yy(i,e){i.uniform1iv(this.addr,e)}function $y(i,e){i.uniform2iv(this.addr,e)}function Ky(i,e){i.uniform3iv(this.addr,e)}function Zy(i,e){i.uniform4iv(this.addr,e)}function Jy(i,e){i.uniform1uiv(this.addr,e)}function jy(i,e){i.uniform2uiv(this.addr,e)}function Qy(i,e){i.uniform3uiv(this.addr,e)}function ex(i,e){i.uniform4uiv(this.addr,e)}function tx(i,e,t){let n=this.cache,s=e.length,r=il(t,s);Gn(n,r)||(i.uniform1iv(this.addr,r),Wn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Yd,r[a])}function nx(i,e,t){let n=this.cache,s=e.length,r=il(t,s);Gn(n,r)||(i.uniform1iv(this.addr,r),Wn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zd,r[a])}function ix(i,e,t){let n=this.cache,s=e.length,r=il(t,s);Gn(n,r)||(i.uniform1iv(this.addr,r),Wn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Jd,r[a])}function sx(i,e,t){let n=this.cache,s=e.length,r=il(t,s);Gn(n,r)||(i.uniform1iv(this.addr,r),Wn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Kd,r[a])}function rx(i){switch(i){case 5126:return Hy;case 35664:return zy;case 35665:return Vy;case 35666:return Gy;case 35674:return Wy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return $y;case 35668:case 35672:return Ky;case 35669:case 35673:return Zy;case 5125:return Jy;case 36294:return jy;case 36295:return Qy;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}var Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ky(t.type)}},Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rx(t.type)}},wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ac=/(\w+)(\])?(\[|\.)?/g;function od(i,e){i.seq.push(e),i.map[e.id]=e}function ax(i,e,t){let n=i.name,s=n.length;for(ac.lastIndex=0;;){let r=ac.exec(n),a=ac.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){od(t,c===void 0?new Ec(o,i,e):new Tc(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new wc(o),od(t,m)),t=m}}}var Hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ax(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ld(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ox=37297,lx=0;function cx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function hx(i){let e=on.getPrimaries(on.workingColorSpace),t=on.getPrimaries(i),n;switch(e===t?n="":e===wo&&t===To?n="LinearDisplayP3ToLinearSRGB":e===To&&t===wo&&(n="LinearSRGBToLinearDisplayP3"),i){case us:case nl:return[n,"LinearTransferOETF"];case Jn:case ah:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function cd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+cx(i.getShaderSource(e),a)}else return s}function ux(i,e){let t=hx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dx(i,e){let t;switch(e){case Pp:t="Linear";break;case Ip:t="Reinhard";break;case Lp:t="OptimizedCineon";break;case Dp:t="ACESFilmic";break;case Np:t="AgX";break;case Up:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Or).join(`
`)}function mx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Or(i){return i!==""}function hd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ud(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(yx,_x)}var xx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _x(i,e){let t=Lt[e];if(t===void 0){let n=xx.get(e);if(n!==void 0)t=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}var vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(i){return i.replace(vx,Mx)}function Mx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cs&&(e="SHADOWMAP_TYPE_VSM"),e}function Sx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zr:case Vr:e="ENVMAP_TYPE_CUBE";break;case tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ex(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vr:e="ENVMAP_MODE_REFRACTION";break}return e}function Tx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Id:e="ENVMAP_BLENDING_MULTIPLY";break;case Rp:e="ENVMAP_BLENDING_MIX";break;case Cp:e="ENVMAP_BLENDING_ADD";break}return e}function wx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ax(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=bx(t),c=Sx(t),u=Ex(t),m=Tx(t),p=wx(t),f=t.isWebGL2?"":fx(t),x=px(t),b=mx(r),y=s.createProgram(),g,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Or).join(`
`),g.length>0&&(g+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Or).join(`
`),S.length>0&&(S+=`
`)):(g=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),S=[f,fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Is?"#define TONE_MAPPING":"",t.toneMapping!==Is?Lt.tonemapping_pars_fragment:"",t.toneMapping!==Is?dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,ux("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=Ac(a),a=hd(a,t),a=ud(a,t),o=Ac(o),o=hd(o,t),o=ud(o,t),a=dd(a),o=dd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let A=v+g+a,B=v+S+o,D=ld(s,s.VERTEX_SHADER,A),U=ld(s,s.FRAGMENT_SHADER,B);s.attachShader(y,D),s.attachShader(y,U),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function $(ce){if(i.debug.checkShaderErrors){let Me=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(U).trim(),z=!0,G=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,D,U);else{let Z=cd(s,D,"vertex"),ae=cd(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Program Info Log: `+Me+`
`+Z+`
`+ae)}else Me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Me):(F===""||Y==="")&&(G=!1);G&&(ce.diagnostics={runnable:z,programLog:Me,vertexShader:{log:F,prefix:g},fragmentShader:{log:Y,prefix:S}})}s.deleteShader(D),s.deleteShader(U),T=new Hr(s,y),R=gx(s,y)}let T;this.getUniforms=function(){return T===void 0&&$(this),T};let R;this.getAttributes=function(){return R===void 0&&$(this),R};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=s.getProgramParameter(y,ox)),K},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=U,this}var Rx=0,Rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cc(e),t.set(e,n)),n}},Cc=class{constructor(e){this.id=Rx++,this.code=e,this.usedTimes=0}};function Cx(i,e,t,n,s,r,a){let o=new Ea,l=new Rc,c=[],u=s.isWebGL2,m=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return T===0?"uv":`uv${T}`}function y(T,R,K,ce,Me){let F=ce.fog,Y=Me.geometry,z=T.isMeshStandardMaterial?ce.environment:null,G=(T.isMeshStandardMaterial?t:e).get(T.envMap||z),Z=G&&G.mapping===tl?G.image.height:null,ae=x[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ue=le!==void 0?le.length:0,Ae=0;Y.morphAttributes.position!==void 0&&(Ae=1),Y.morphAttributes.normal!==void 0&&(Ae=2),Y.morphAttributes.color!==void 0&&(Ae=3);let j,de,Te,ke;if(ae){let Xn=Ji[ae];j=Xn.vertexShader,de=Xn.fragmentShader}else j=T.vertexShader,de=T.fragmentShader,l.update(T),Te=l.getVertexShaderID(T),ke=l.getFragmentShaderID(T);let We=i.getRenderTarget(),ht=Me.isInstancedMesh===!0,dt=Me.isBatchedMesh===!0,Ke=!!T.map,oe=!!T.matcap,J=!!G,pn=!!T.aoMap,ve=!!T.lightMap,je=!!T.bumpMap,ze=!!T.normalMap,Gt=!!T.displacementMap,Oe=!!T.emissiveMap,C=!!T.metalnessMap,E=!!T.roughnessMap,Q=T.anisotropy>0,Ee=T.clearcoat>0,_e=T.iridescence>0,we=T.sheen>0,$e=T.transmission>0,Ne=Q&&!!T.anisotropyMap,Ve=Ee&&!!T.clearcoatMap,Xe=Ee&&!!T.clearcoatNormalMap,Tt=Ee&&!!T.clearcoatRoughnessMap,be=_e&&!!T.iridescenceMap,qt=_e&&!!T.iridescenceThicknessMap,Pt=we&&!!T.sheenColorMap,ft=we&&!!T.sheenRoughnessMap,et=!!T.specularMap,Ge=!!T.specularColorMap,_t=!!T.specularIntensityMap,Wt=$e&&!!T.transmissionMap,ln=$e&&!!T.thicknessMap,wt=!!T.gradientMap,Ie=!!T.alphaMap,H=T.alphaTest>0,Ue=!!T.alphaHash,De=!!T.extensions,at=!!Y.attributes.uv1,nt=!!Y.attributes.uv2,nn=!!Y.attributes.uv3,jt=Is;return T.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(jt=i.toneMapping),{isWebGL2:u,shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:j,fragmentShader:de,defines:T.defines,customVertexShaderID:Te,customFragmentShaderID:ke,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:dt,instancing:ht,instancingColor:ht&&Me.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:We===null?i.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:us,map:Ke,matcap:oe,envMap:J,envMapMode:J&&G.mapping,envMapCubeUVHeight:Z,aoMap:pn,lightMap:ve,bumpMap:je,normalMap:ze,displacementMap:p&&Gt,emissiveMap:Oe,normalMapObjectSpace:ze&&T.normalMapType===Yp,normalMapTangentSpace:ze&&T.normalMapType===zd,metalnessMap:C,roughnessMap:E,anisotropy:Q,anisotropyMap:Ne,clearcoat:Ee,clearcoatMap:Ve,clearcoatNormalMap:Xe,clearcoatRoughnessMap:Tt,iridescence:_e,iridescenceMap:be,iridescenceThicknessMap:qt,sheen:we,sheenColorMap:Pt,sheenRoughnessMap:ft,specularMap:et,specularColorMap:Ge,specularIntensityMap:_t,transmission:$e,transmissionMap:Wt,thicknessMap:ln,gradientMap:wt,opaque:T.transparent===!1&&T.blending===Fr,alphaMap:Ie,alphaTest:H,alphaHash:Ue,combine:T.combine,mapUv:Ke&&b(T.map.channel),aoMapUv:pn&&b(T.aoMap.channel),lightMapUv:ve&&b(T.lightMap.channel),bumpMapUv:je&&b(T.bumpMap.channel),normalMapUv:ze&&b(T.normalMap.channel),displacementMapUv:Gt&&b(T.displacementMap.channel),emissiveMapUv:Oe&&b(T.emissiveMap.channel),metalnessMapUv:C&&b(T.metalnessMap.channel),roughnessMapUv:E&&b(T.roughnessMap.channel),anisotropyMapUv:Ne&&b(T.anisotropyMap.channel),clearcoatMapUv:Ve&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:ft&&b(T.sheenRoughnessMap.channel),specularMapUv:et&&b(T.specularMap.channel),specularColorMapUv:Ge&&b(T.specularColorMap.channel),specularIntensityMapUv:_t&&b(T.specularIntensityMap.channel),transmissionMapUv:Wt&&b(T.transmissionMap.channel),thicknessMapUv:ln&&b(T.thicknessMap.channel),alphaMapUv:Ie&&b(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ze||Q),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:at,vertexUv2s:nt,vertexUv3s:nn,pointsUvs:Me.isPoints===!0&&!!Y.attributes.uv&&(Ke||Ie),fog:!!F,useFog:T.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:Me.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ke&&T.map.isVideoTexture===!0&&on.getTransfer(T.map.colorSpace)===xn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===An,flipSided:T.side===ui,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:De&&T.extensions.derivatives===!0,extensionFragDepth:De&&T.extensions.fragDepth===!0,extensionDrawBuffers:De&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){let R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(let K in T.defines)R.push(K),R.push(T.defines[K]);return T.isRawShaderMaterial===!1&&(S(R,T),v(R,T),R.push(i.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function S(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function v(T,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),T.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function A(T){let R=x[T.type],K;if(R){let ce=Ji[R];K=xm.clone(ce.uniforms)}else K=T.uniforms;return K}function B(T,R){let K;for(let ce=0,Me=c.length;ce<Me;ce++){let F=c[ce];if(F.cacheKey===R){K=F,++K.usedTimes;break}}return K===void 0&&(K=new Ax(i,R,T,r),c.push(K)),K}function D(T){if(--T.usedTimes===0){let R=c.indexOf(T);c[R]=c[c.length-1],c.pop(),T.destroy()}}function U(T){l.remove(T)}function $(){l.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:B,releaseProgram:D,releaseShaderCache:U,programs:c,dispose:$}}function Px(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ix(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function md(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(m,p,f,x,b,y){let g=i[e];return g===void 0?(g={id:m.id,object:m,geometry:p,material:f,groupOrder:x,renderOrder:m.renderOrder,z:b,group:y},i[e]=g):(g.id=m.id,g.object=m,g.geometry=p,g.material=f,g.groupOrder=x,g.renderOrder=m.renderOrder,g.z=b,g.group=y),e++,g}function o(m,p,f,x,b,y){let g=a(m,p,f,x,b,y);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(m,p,f,x,b,y){let g=a(m,p,f,x,b,y);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(m,p){t.length>1&&t.sort(m||Ix),n.length>1&&n.sort(p||pd),s.length>1&&s.sort(p||pd)}function u(){for(let m=e,p=i.length;m<p;m++){let f=i[m];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Lx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new md,i.set(n,[a])):s>=r.length?(a=new md,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new xt};break;case"SpotLight":t={position:new k,direction:new k,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Ux(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Nx=0;function Ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bx(i,e){let t=new Dx,n=Ux(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new k);let r=new k,a=new kn,o=new kn;function l(u,m){let p=0,f=0,x=0;for(let ce=0;ce<9;ce++)s.probe[ce].set(0,0,0);let b=0,y=0,g=0,S=0,v=0,A=0,B=0,D=0,U=0,$=0,T=0;u.sort(Ox);let R=m===!0?Math.PI:1;for(let ce=0,Me=u.length;ce<Me;ce++){let F=u[ce],Y=F.color,z=F.intensity,G=F.distance,Z=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=Y.r*z*R,f+=Y.g*z*R,x+=Y.b*z*R;else if(F.isLightProbe){for(let ae=0;ae<9;ae++)s.probe[ae].addScaledVector(F.sh.coefficients[ae],z);T++}else if(F.isDirectionalLight){let ae=t.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){let le=F.shadow,ue=n.get(F);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,s.directionalShadow[b]=ue,s.directionalShadowMap[b]=Z,s.directionalShadowMatrix[b]=F.shadow.matrix,A++}s.directional[b]=ae,b++}else if(F.isSpotLight){let ae=t.get(F);ae.position.setFromMatrixPosition(F.matrixWorld),ae.color.copy(Y).multiplyScalar(z*R),ae.distance=G,ae.coneCos=Math.cos(F.angle),ae.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ae.decay=F.decay,s.spot[g]=ae;let le=F.shadow;if(F.map&&(s.spotLightMap[U]=F.map,U++,le.updateMatrices(F),F.castShadow&&$++),s.spotLightMatrix[g]=le.matrix,F.castShadow){let ue=n.get(F);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,s.spotShadow[g]=ue,s.spotShadowMap[g]=Z,D++}g++}else if(F.isRectAreaLight){let ae=t.get(F);ae.color.copy(Y).multiplyScalar(z),ae.halfWidth.set(F.width*.5,0,0),ae.halfHeight.set(0,F.height*.5,0),s.rectArea[S]=ae,S++}else if(F.isPointLight){let ae=t.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity*R),ae.distance=F.distance,ae.decay=F.decay,F.castShadow){let le=F.shadow,ue=n.get(F);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,ue.shadowCameraNear=le.camera.near,ue.shadowCameraFar=le.camera.far,s.pointShadow[y]=ue,s.pointShadowMap[y]=Z,s.pointShadowMatrix[y]=F.shadow.matrix,B++}s.point[y]=ae,y++}else if(F.isHemisphereLight){let ae=t.get(F);ae.skyColor.copy(F.color).multiplyScalar(z*R),ae.groundColor.copy(F.groundColor).multiplyScalar(z*R),s.hemi[v]=ae,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=f,s.ambient[2]=x;let K=s.hash;(K.directionalLength!==b||K.pointLength!==y||K.spotLength!==g||K.rectAreaLength!==S||K.hemiLength!==v||K.numDirectionalShadows!==A||K.numPointShadows!==B||K.numSpotShadows!==D||K.numSpotMaps!==U||K.numLightProbes!==T)&&(s.directional.length=b,s.spot.length=g,s.rectArea.length=S,s.point.length=y,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=D+U-$,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=$,s.numLightProbes=T,K.directionalLength=b,K.pointLength=y,K.spotLength=g,K.rectAreaLength=S,K.hemiLength=v,K.numDirectionalShadows=A,K.numPointShadows=B,K.numSpotShadows=D,K.numSpotMaps=U,K.numLightProbes=T,s.version=Nx++)}function c(u,m){let p=0,f=0,x=0,b=0,y=0,g=m.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){let A=u[S];if(A.isDirectionalLight){let B=s.directional[p];B.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(g),p++}else if(A.isSpotLight){let B=s.spot[x];B.position.setFromMatrixPosition(A.matrixWorld),B.position.applyMatrix4(g),B.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(g),x++}else if(A.isRectAreaLight){let B=s.rectArea[b];B.position.setFromMatrixPosition(A.matrixWorld),B.position.applyMatrix4(g),o.identity(),a.copy(A.matrixWorld),a.premultiply(g),o.extractRotation(a),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),B.halfWidth.applyMatrix4(o),B.halfHeight.applyMatrix4(o),b++}else if(A.isPointLight){let B=s.point[f];B.position.setFromMatrixPosition(A.matrixWorld),B.position.applyMatrix4(g),f++}else if(A.isHemisphereLight){let B=s.hemi[y];B.direction.setFromMatrixPosition(A.matrixWorld),B.direction.transformDirection(g),y++}}}return{setup:l,setupView:c,state:s}}function gd(i,e){let t=new Bx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(m){n.push(m)}function o(m){s.push(m)}function l(m){t.setup(n,m)}function c(m){t.setupView(n,m)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Fx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new gd(i,e),t.set(r,[l])):a>=o.length?(l=new gd(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Pc=class extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ic=class extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`;function zx(i,e,t){let n=new Ta,s=new He,r=new He,a=new Kn,o=new Pc({depthPacking:qp}),l=new Ic,c={},u=t.maxTextureSize,m={[Ds]:ui,[ui]:Ds,[An]:An},p=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:kx,fragmentShader:Hx}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let x=new fi;x.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ye(x,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let g=this.type;this.render=function(D,U,$){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;let T=i.getRenderTarget(),R=i.getActiveCubeFace(),K=i.getActiveMipmapLevel(),ce=i.state;ce.setBlending(Ps),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);let Me=g!==cs&&this.type===cs,F=g===cs&&this.type!==cs;for(let Y=0,z=D.length;Y<z;Y++){let G=D[Y],Z=G.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ae=Z.getFrameExtents();if(s.multiply(ae),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ae.x),s.x=r.x*ae.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ae.y),s.y=r.y*ae.y,Z.mapSize.y=r.y)),Z.map===null||Me===!0||F===!0){let ue=this.type!==cs?{minFilter:ai,magFilter:ai}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ds(s.x,s.y,ue),Z.map.texture.name=G.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let le=Z.getViewportCount();for(let ue=0;ue<le;ue++){let Ae=Z.getViewport(ue);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),ce.viewport(a),Z.updateMatrices(G,ue),n=Z.getFrustum(),A(U,$,Z.camera,G,this.type)}Z.isPointLightShadow!==!0&&this.type===cs&&S(Z,$),Z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(T,R,K)};function S(D,U){let $=e.update(b);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ds(s.x,s.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(U,null,$,p,b,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(U,null,$,f,b,null)}function v(D,U,$,T){let R=null,K=$.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(K!==void 0)R=K;else if(R=$.isPointLight===!0?l:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let ce=R.uuid,Me=U.uuid,F=c[ce];F===void 0&&(F={},c[ce]=F);let Y=F[Me];Y===void 0&&(Y=R.clone(),F[Me]=Y,U.addEventListener("dispose",B)),R=Y}if(R.visible=U.visible,R.wireframe=U.wireframe,T===cs?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:m[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,$.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let ce=i.properties.get(R);ce.light=$}return R}function A(D,U,$,T,R){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===cs)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,D.matrixWorld);let Me=e.update(D),F=D.material;if(Array.isArray(F)){let Y=Me.groups;for(let z=0,G=Y.length;z<G;z++){let Z=Y[z],ae=F[Z.materialIndex];if(ae&&ae.visible){let le=v(D,ae,T,R);D.onBeforeShadow(i,D,U,$,Me,le,Z),i.renderBufferDirect($,null,Me,le,D,Z),D.onAfterShadow(i,D,U,$,Me,le,Z)}}}else if(F.visible){let Y=v(D,F,T,R);D.onBeforeShadow(i,D,U,$,Me,Y,null),i.renderBufferDirect($,null,Me,Y,D,null),D.onAfterShadow(i,D,U,$,Me,Y,null)}}let ce=D.children;for(let Me=0,F=ce.length;Me<F;Me++)A(ce[Me],U,$,T,R)}function B(D){D.target.removeEventListener("dispose",B);for(let $ in c){let T=c[$],R=D.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Vx(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Ue=new Kn,De=null,at=new Kn(0,0,0,0);return{setMask:function(nt){De!==nt&&!H&&(i.colorMask(nt,nt,nt,nt),De=nt)},setLocked:function(nt){H=nt},setClear:function(nt,nn,jt,Ln,Xn){Xn===!0&&(nt*=Ln,nn*=Ln,jt*=Ln),Ue.set(nt,nn,jt,Ln),at.equals(Ue)===!1&&(i.clearColor(nt,nn,jt,Ln),at.copy(Ue))},reset:function(){H=!1,De=null,at.set(-1,0,0,0)}}}function r(){let H=!1,Ue=null,De=null,at=null;return{setTest:function(nt){nt?dt(i.DEPTH_TEST):Ke(i.DEPTH_TEST)},setMask:function(nt){Ue!==nt&&!H&&(i.depthMask(nt),Ue=nt)},setFunc:function(nt){if(De!==nt){switch(nt){case Mp:i.depthFunc(i.NEVER);break;case bp:i.depthFunc(i.ALWAYS);break;case Sp:i.depthFunc(i.LESS);break;case Mo:i.depthFunc(i.LEQUAL);break;case Ep:i.depthFunc(i.EQUAL);break;case Tp:i.depthFunc(i.GEQUAL);break;case wp:i.depthFunc(i.GREATER);break;case Ap:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=nt}},setLocked:function(nt){H=nt},setClear:function(nt){at!==nt&&(i.clearDepth(nt),at=nt)},reset:function(){H=!1,Ue=null,De=null,at=null}}}function a(){let H=!1,Ue=null,De=null,at=null,nt=null,nn=null,jt=null,Ln=null,Xn=null;return{setTest:function(Yt){H||(Yt?dt(i.STENCIL_TEST):Ke(i.STENCIL_TEST))},setMask:function(Yt){Ue!==Yt&&!H&&(i.stencilMask(Yt),Ue=Yt)},setFunc:function(Yt,Hn,pi){(De!==Yt||at!==Hn||nt!==pi)&&(i.stencilFunc(Yt,Hn,pi),De=Yt,at=Hn,nt=pi)},setOp:function(Yt,Hn,pi){(nn!==Yt||jt!==Hn||Ln!==pi)&&(i.stencilOp(Yt,Hn,pi),nn=Yt,jt=Hn,Ln=pi)},setLocked:function(Yt){H=Yt},setClear:function(Yt){Xn!==Yt&&(i.clearStencil(Yt),Xn=Yt)},reset:function(){H=!1,Ue=null,De=null,at=null,nt=null,nn=null,jt=null,Ln=null,Xn=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,m=new WeakMap,p={},f={},x=new WeakMap,b=[],y=null,g=!1,S=null,v=null,A=null,B=null,D=null,U=null,$=null,T=new xt(0,0,0),R=0,K=!1,ce=null,Me=null,F=null,Y=null,z=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ae=0,le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(le)[1]),Z=ae>=1):le.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),Z=ae>=2);let ue=null,Ae={},j=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Te=new Kn().fromArray(j),ke=new Kn().fromArray(de);function We(H,Ue,De,at){let nt=new Uint8Array(4),nn=i.createTexture();i.bindTexture(H,nn),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<De;jt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ue,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(Ue+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return nn}let ht={};ht[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),dt(i.DEPTH_TEST),l.setFunc(Mo),Oe(!1),C(Kh),dt(i.CULL_FACE),ze(Ps);function dt(H){p[H]!==!0&&(i.enable(H),p[H]=!0)}function Ke(H){p[H]!==!1&&(i.disable(H),p[H]=!1)}function oe(H,Ue){return f[H]!==Ue?(i.bindFramebuffer(H,Ue),f[H]=Ue,n&&(H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ue),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ue)),!0):!1}function J(H,Ue){let De=b,at=!1;if(H)if(De=x.get(Ue),De===void 0&&(De=[],x.set(Ue,De)),H.isWebGLMultipleRenderTargets){let nt=H.texture;if(De.length!==nt.length||De[0]!==i.COLOR_ATTACHMENT0){for(let nn=0,jt=nt.length;nn<jt;nn++)De[nn]=i.COLOR_ATTACHMENT0+nn;De.length=nt.length,at=!0}}else De[0]!==i.COLOR_ATTACHMENT0&&(De[0]=i.COLOR_ATTACHMENT0,at=!0);else De[0]!==i.BACK&&(De[0]=i.BACK,at=!0);at&&(t.isWebGL2?i.drawBuffers(De):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(De))}function pn(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let ve={[js]:i.FUNC_ADD,[ap]:i.FUNC_SUBTRACT,[op]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[Qh]=i.MIN,ve[eu]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(ve[Qh]=H.MIN_EXT,ve[eu]=H.MAX_EXT)}let je={[lp]:i.ZERO,[cp]:i.ONE,[hp]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[gp]:i.SRC_ALPHA_SATURATE,[pp]:i.DST_COLOR,[dp]:i.DST_ALPHA,[up]:i.ONE_MINUS_SRC_COLOR,[fc]:i.ONE_MINUS_SRC_ALPHA,[mp]:i.ONE_MINUS_DST_COLOR,[fp]:i.ONE_MINUS_DST_ALPHA,[yp]:i.CONSTANT_COLOR,[xp]:i.ONE_MINUS_CONSTANT_COLOR,[_p]:i.CONSTANT_ALPHA,[vp]:i.ONE_MINUS_CONSTANT_ALPHA};function ze(H,Ue,De,at,nt,nn,jt,Ln,Xn,Yt){if(H===Ps){g===!0&&(Ke(i.BLEND),g=!1);return}if(g===!1&&(dt(i.BLEND),g=!0),H!==rp){if(H!==S||Yt!==K){if((v!==js||D!==js)&&(i.blendEquation(i.FUNC_ADD),v=js,D=js),Yt)switch(H){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zh:i.blendFunc(i.ONE,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,B=null,U=null,$=null,T.set(0,0,0),R=0,S=H,K=Yt}return}nt=nt||Ue,nn=nn||De,jt=jt||at,(Ue!==v||nt!==D)&&(i.blendEquationSeparate(ve[Ue],ve[nt]),v=Ue,D=nt),(De!==A||at!==B||nn!==U||jt!==$)&&(i.blendFuncSeparate(je[De],je[at],je[nn],je[jt]),A=De,B=at,U=nn,$=jt),(Ln.equals(T)===!1||Xn!==R)&&(i.blendColor(Ln.r,Ln.g,Ln.b,Xn),T.copy(Ln),R=Xn),S=H,K=!1}function Gt(H,Ue){H.side===An?Ke(i.CULL_FACE):dt(i.CULL_FACE);let De=H.side===ui;Ue&&(De=!De),Oe(De),H.blending===Fr&&H.transparent===!1?ze(Ps):ze(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),o.setMask(H.colorWrite);let at=H.stencilWrite;c.setTest(at),at&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Q(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(H){ce!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),ce=H)}function C(H){H!==ip?(dt(i.CULL_FACE),H!==Me&&(H===Kh?i.cullFace(i.BACK):H===sp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ke(i.CULL_FACE),Me=H}function E(H){H!==F&&(Z&&i.lineWidth(H),F=H)}function Q(H,Ue,De){H?(dt(i.POLYGON_OFFSET_FILL),(Y!==Ue||z!==De)&&(i.polygonOffset(Ue,De),Y=Ue,z=De)):Ke(i.POLYGON_OFFSET_FILL)}function Ee(H){H?dt(i.SCISSOR_TEST):Ke(i.SCISSOR_TEST)}function _e(H){H===void 0&&(H=i.TEXTURE0+G-1),ue!==H&&(i.activeTexture(H),ue=H)}function we(H,Ue,De){De===void 0&&(ue===null?De=i.TEXTURE0+G-1:De=ue);let at=Ae[De];at===void 0&&(at={type:void 0,texture:void 0},Ae[De]=at),(at.type!==H||at.texture!==Ue)&&(ue!==De&&(i.activeTexture(De),ue=De),i.bindTexture(H,Ue||ht[H]),at.type=H,at.texture=Ue)}function $e(){let H=Ae[ue];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(H){Te.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Te.copy(H))}function Wt(H){ke.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),ke.copy(H))}function ln(H,Ue){let De=m.get(Ue);De===void 0&&(De=new WeakMap,m.set(Ue,De));let at=De.get(H);at===void 0&&(at=i.getUniformBlockIndex(Ue,H.name),De.set(H,at))}function wt(H,Ue){let at=m.get(Ue).get(H);u.get(Ue)!==at&&(i.uniformBlockBinding(Ue,at,H.__bindingPointIndex),u.set(Ue,at))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ue=null,Ae={},f={},x=new WeakMap,b=[],y=null,g=!1,S=null,v=null,A=null,B=null,D=null,U=null,$=null,T=new xt(0,0,0),R=0,K=!1,ce=null,Me=null,F=null,Y=null,z=null,Te.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:dt,disable:Ke,bindFramebuffer:oe,drawBuffers:J,useProgram:pn,setBlending:ze,setMaterial:Gt,setFlipSided:Oe,setCullFace:C,setLineWidth:E,setPolygonOffset:Q,setScissorTest:Ee,activeTexture:_e,bindTexture:we,unbindTexture:$e,compressedTexImage2D:Ne,compressedTexImage3D:Ve,texImage2D:et,texImage3D:Ge,updateUBOMapping:ln,uniformBlockBinding:wt,texStorage2D:Pt,texStorage3D:ft,texSubImage2D:Xe,texSubImage3D:Tt,compressedTexSubImage2D:be,compressedTexSubImage3D:qt,scissor:_t,viewport:Wt,reset:Ie}}function Gx(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,m,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return f?new OffscreenCanvas(C,E):Ro("canvas")}function b(C,E,Q,Ee){let _e=1;if((C.width>Ee||C.height>Ee)&&(_e=Ee/Math.max(C.width,C.height)),_e<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let we=E?_c:Math.floor,$e=we(_e*C.width),Ne=we(_e*C.height);m===void 0&&(m=x($e,Ne));let Ve=Q?x($e,Ne):m;return Ve.width=$e,Ve.height=Ne,Ve.getContext("2d").drawImage(C,0,0,$e,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+$e+"x"+Ne+")."),Ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Du(C.width)&&Du(C.height)}function g(C){return o?!1:C.wrapS!==Wi||C.wrapT!==Wi||C.minFilter!==ai&&C.minFilter!==Di}function S(C,E){return C.generateMipmaps&&E&&C.minFilter!==ai&&C.minFilter!==Di}function v(C){i.generateMipmap(C)}function A(C,E,Q,Ee,_e=!1){if(o===!1)return E;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let we=E;if(E===i.RED&&(Q===i.FLOAT&&(we=i.R32F),Q===i.HALF_FLOAT&&(we=i.R16F),Q===i.UNSIGNED_BYTE&&(we=i.R8)),E===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(we=i.R8UI),Q===i.UNSIGNED_SHORT&&(we=i.R16UI),Q===i.UNSIGNED_INT&&(we=i.R32UI),Q===i.BYTE&&(we=i.R8I),Q===i.SHORT&&(we=i.R16I),Q===i.INT&&(we=i.R32I)),E===i.RG&&(Q===i.FLOAT&&(we=i.RG32F),Q===i.HALF_FLOAT&&(we=i.RG16F),Q===i.UNSIGNED_BYTE&&(we=i.RG8)),E===i.RGBA){let $e=_e?Eo:on.getTransfer(Ee);Q===i.FLOAT&&(we=i.RGBA32F),Q===i.HALF_FLOAT&&(we=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(we=$e===xn?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(we=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(we=i.RGB5_A1)}return(we===i.R16F||we===i.R32F||we===i.RG16F||we===i.RG32F||we===i.RGBA16F||we===i.RGBA32F)&&e.get("EXT_color_buffer_float"),we}function B(C,E,Q){return S(C,Q)===!0||C.isFramebufferTexture&&C.minFilter!==ai&&C.minFilter!==Di?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function D(C){return C===ai||C===tu||C===Pl?i.NEAREST:i.LINEAR}function U(C){let E=C.target;E.removeEventListener("dispose",U),T(E),E.isVideoTexture&&u.delete(E)}function $(C){let E=C.target;E.removeEventListener("dispose",$),K(E)}function T(C){let E=n.get(C);if(E.__webglInit===void 0)return;let Q=C.source,Ee=p.get(Q);if(Ee){let _e=Ee[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&R(C),Object.keys(Ee).length===0&&p.delete(Q)}n.remove(C)}function R(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let Q=C.source,Ee=p.get(Q);delete Ee[E.__cacheKey],a.memory.textures--}function K(C){let E=C.texture,Q=n.get(C),Ee=n.get(E);if(Ee.__webglTexture!==void 0&&(i.deleteTexture(Ee.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(Q.__webglFramebuffer[_e]))for(let we=0;we<Q.__webglFramebuffer[_e].length;we++)i.deleteFramebuffer(Q.__webglFramebuffer[_e][we]);else i.deleteFramebuffer(Q.__webglFramebuffer[_e]);Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer[_e])}else{if(Array.isArray(Q.__webglFramebuffer))for(let _e=0;_e<Q.__webglFramebuffer.length;_e++)i.deleteFramebuffer(Q.__webglFramebuffer[_e]);else i.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let _e=0;_e<Q.__webglColorRenderbuffer.length;_e++)Q.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(Q.__webglColorRenderbuffer[_e]);Q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let _e=0,we=E.length;_e<we;_e++){let $e=n.get(E[_e]);$e.__webglTexture&&(i.deleteTexture($e.__webglTexture),a.memory.textures--),n.remove(E[_e])}n.remove(E),n.remove(C)}let ce=0;function Me(){ce=0}function F(){let C=ce;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),ce+=1,C}function Y(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function z(C,E){let Q=n.get(C);if(C.isVideoTexture&&Gt(C),C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){let Ee=C.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Q,C,E);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+E)}function G(C,E){let Q=n.get(C);if(C.version>0&&Q.__version!==C.version){Te(Q,C,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+E)}function Z(C,E){let Q=n.get(C);if(C.version>0&&Q.__version!==C.version){Te(Q,C,E);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+E)}function ae(C,E){let Q=n.get(C);if(C.version>0&&Q.__version!==C.version){ke(Q,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+E)}let le={[va]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[gc]:i.MIRRORED_REPEAT},ue={[ai]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[Pl]:i.NEAREST_MIPMAP_LINEAR,[Di]:i.LINEAR,[Op]:i.LINEAR_MIPMAP_NEAREST,[Ma]:i.LINEAR_MIPMAP_LINEAR},Ae={[$p]:i.NEVER,[em]:i.ALWAYS,[Kp]:i.LESS,[Vd]:i.LEQUAL,[Zp]:i.EQUAL,[Qp]:i.GEQUAL,[Jp]:i.GREATER,[jp]:i.NOTEQUAL};function j(C,E,Q){if(Q?(i.texParameteri(C,i.TEXTURE_WRAP_S,le[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,le[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,le[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[E.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Wi||E.wrapT!==Wi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,D(E.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,D(E.minFilter)),E.minFilter!==ai&&E.minFilter!==Di&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Ee=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===ai||E.minFilter!==Pl&&E.minFilter!==Ma||E.type===Cs&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ba&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(C,Ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function de(C,E){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",U));let Ee=E.source,_e=p.get(Ee);_e===void 0&&(_e={},p.set(Ee,_e));let we=Y(E);if(we!==C.__cacheKey){_e[we]===void 0&&(_e[we]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),_e[we].usedTimes++;let $e=_e[C.__cacheKey];$e!==void 0&&(_e[C.__cacheKey].usedTimes--,$e.usedTimes===0&&R(E)),C.__cacheKey=we,C.__webglTexture=_e[we].texture}return Q}function Te(C,E,Q){let Ee=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Ee=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Ee=i.TEXTURE_3D);let _e=de(C,E),we=E.source;t.bindTexture(Ee,C.__webglTexture,i.TEXTURE0+Q);let $e=n.get(we);if(we.version!==$e.__version||_e===!0){t.activeTexture(i.TEXTURE0+Q);let Ne=on.getPrimaries(on.workingColorSpace),Ve=E.colorSpace===Ui?null:on.getPrimaries(E.colorSpace),Xe=E.colorSpace===Ui||Ne===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Tt=g(E)&&y(E.image)===!1,be=b(E.image,Tt,!1,s.maxTextureSize);be=Oe(E,be);let qt=y(be)||o,Pt=r.convert(E.format,E.colorSpace),ft=r.convert(E.type),et=A(E.internalFormat,Pt,ft,E.colorSpace,E.isVideoTexture);j(Ee,E,qt);let Ge,_t=E.mipmaps,Wt=o&&E.isVideoTexture!==!0&&et!==kd,ln=$e.__version===void 0||_e===!0,wt=B(E,be,qt);if(E.isDepthTexture)et=i.DEPTH_COMPONENT,o?E.type===Cs?et=i.DEPTH_COMPONENT32F:E.type===Rs?et=i.DEPTH_COMPONENT24:E.type===er?et=i.DEPTH24_STENCIL8:et=i.DEPTH_COMPONENT16:E.type===Cs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===tr&&et===i.DEPTH_COMPONENT&&E.type!==rh&&E.type!==Rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Rs,ft=r.convert(E.type)),E.format===Gr&&et===i.DEPTH_COMPONENT&&(et=i.DEPTH_STENCIL,E.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=er,ft=r.convert(E.type))),ln&&(Wt?t.texStorage2D(i.TEXTURE_2D,1,et,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,et,be.width,be.height,0,Pt,ft,null));else if(E.isDataTexture)if(_t.length>0&&qt){Wt&&ln&&t.texStorage2D(i.TEXTURE_2D,wt,et,_t[0].width,_t[0].height);for(let Ie=0,H=_t.length;Ie<H;Ie++)Ge=_t[Ie],Wt?t.texSubImage2D(i.TEXTURE_2D,Ie,0,0,Ge.width,Ge.height,Pt,ft,Ge.data):t.texImage2D(i.TEXTURE_2D,Ie,et,Ge.width,Ge.height,0,Pt,ft,Ge.data);E.generateMipmaps=!1}else Wt?(ln&&t.texStorage2D(i.TEXTURE_2D,wt,et,be.width,be.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,be.width,be.height,Pt,ft,be.data)):t.texImage2D(i.TEXTURE_2D,0,et,be.width,be.height,0,Pt,ft,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Wt&&ln&&t.texStorage3D(i.TEXTURE_2D_ARRAY,wt,et,_t[0].width,_t[0].height,be.depth);for(let Ie=0,H=_t.length;Ie<H;Ie++)Ge=_t[Ie],E.format!==Xi?Pt!==null?Wt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ie,0,0,0,Ge.width,Ge.height,be.depth,Pt,Ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ie,et,Ge.width,Ge.height,be.depth,0,Ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ie,0,0,0,Ge.width,Ge.height,be.depth,Pt,ft,Ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ie,et,Ge.width,Ge.height,be.depth,0,Pt,ft,Ge.data)}else{Wt&&ln&&t.texStorage2D(i.TEXTURE_2D,wt,et,_t[0].width,_t[0].height);for(let Ie=0,H=_t.length;Ie<H;Ie++)Ge=_t[Ie],E.format!==Xi?Pt!==null?Wt?t.compressedTexSubImage2D(i.TEXTURE_2D,Ie,0,0,Ge.width,Ge.height,Pt,Ge.data):t.compressedTexImage2D(i.TEXTURE_2D,Ie,et,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?t.texSubImage2D(i.TEXTURE_2D,Ie,0,0,Ge.width,Ge.height,Pt,ft,Ge.data):t.texImage2D(i.TEXTURE_2D,Ie,et,Ge.width,Ge.height,0,Pt,ft,Ge.data)}else if(E.isDataArrayTexture)Wt?(ln&&t.texStorage3D(i.TEXTURE_2D_ARRAY,wt,et,be.width,be.height,be.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Pt,ft,be.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,et,be.width,be.height,be.depth,0,Pt,ft,be.data);else if(E.isData3DTexture)Wt?(ln&&t.texStorage3D(i.TEXTURE_3D,wt,et,be.width,be.height,be.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Pt,ft,be.data)):t.texImage3D(i.TEXTURE_3D,0,et,be.width,be.height,be.depth,0,Pt,ft,be.data);else if(E.isFramebufferTexture){if(ln)if(Wt)t.texStorage2D(i.TEXTURE_2D,wt,et,be.width,be.height);else{let Ie=be.width,H=be.height;for(let Ue=0;Ue<wt;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,et,Ie,H,0,Pt,ft,null),Ie>>=1,H>>=1}}else if(_t.length>0&&qt){Wt&&ln&&t.texStorage2D(i.TEXTURE_2D,wt,et,_t[0].width,_t[0].height);for(let Ie=0,H=_t.length;Ie<H;Ie++)Ge=_t[Ie],Wt?t.texSubImage2D(i.TEXTURE_2D,Ie,0,0,Pt,ft,Ge):t.texImage2D(i.TEXTURE_2D,Ie,et,Pt,ft,Ge);E.generateMipmaps=!1}else Wt?(ln&&t.texStorage2D(i.TEXTURE_2D,wt,et,be.width,be.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,ft,be)):t.texImage2D(i.TEXTURE_2D,0,et,Pt,ft,be);S(E,qt)&&v(Ee),$e.__version=we.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ke(C,E,Q){if(E.image.length!==6)return;let Ee=de(C,E),_e=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Q);let we=n.get(_e);if(_e.version!==we.__version||Ee===!0){t.activeTexture(i.TEXTURE0+Q);let $e=on.getPrimaries(on.workingColorSpace),Ne=E.colorSpace===Ui?null:on.getPrimaries(E.colorSpace),Ve=E.colorSpace===Ui||$e===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Xe=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,be=[];for(let Ie=0;Ie<6;Ie++)!Xe&&!Tt?be[Ie]=b(E.image[Ie],!1,!0,s.maxCubemapSize):be[Ie]=Tt?E.image[Ie].image:E.image[Ie],be[Ie]=Oe(E,be[Ie]);let qt=be[0],Pt=y(qt)||o,ft=r.convert(E.format,E.colorSpace),et=r.convert(E.type),Ge=A(E.internalFormat,ft,et,E.colorSpace),_t=o&&E.isVideoTexture!==!0,Wt=we.__version===void 0||Ee===!0,ln=B(E,qt,Pt);j(i.TEXTURE_CUBE_MAP,E,Pt);let wt;if(Xe){_t&&Wt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ln,Ge,qt.width,qt.height);for(let Ie=0;Ie<6;Ie++){wt=be[Ie].mipmaps;for(let H=0;H<wt.length;H++){let Ue=wt[H];E.format!==Xi?ft!==null?_t?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H,0,0,Ue.width,Ue.height,ft,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H,Ge,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H,0,0,Ue.width,Ue.height,ft,et,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H,Ge,Ue.width,Ue.height,0,ft,et,Ue.data)}}}else{wt=E.mipmaps,_t&&Wt&&(wt.length>0&&ln++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ln,Ge,be[0].width,be[0].height));for(let Ie=0;Ie<6;Ie++)if(Tt){_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,be[Ie].width,be[Ie].height,ft,et,be[Ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ge,be[Ie].width,be[Ie].height,0,ft,et,be[Ie].data);for(let H=0;H<wt.length;H++){let De=wt[H].image[Ie].image;_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H+1,0,0,De.width,De.height,ft,et,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H+1,Ge,De.width,De.height,0,ft,et,De.data)}}else{_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,ft,et,be[Ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ge,ft,et,be[Ie]);for(let H=0;H<wt.length;H++){let Ue=wt[H];_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H+1,0,0,ft,et,Ue.image[Ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,H+1,Ge,ft,et,Ue.image[Ie])}}}S(E,Pt)&&v(i.TEXTURE_CUBE_MAP),we.__version=_e.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function We(C,E,Q,Ee,_e,we){let $e=r.convert(Q.format,Q.colorSpace),Ne=r.convert(Q.type),Ve=A(Q.internalFormat,$e,Ne,Q.colorSpace);if(!n.get(E).__hasExternalTextures){let Tt=Math.max(1,E.width>>we),be=Math.max(1,E.height>>we);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,we,Ve,Tt,be,E.depth,0,$e,Ne,null):t.texImage2D(_e,we,Ve,Tt,be,0,$e,Ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ze(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,_e,n.get(Q).__webglTexture,0,je(E)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Ee,_e,n.get(Q).__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,E,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let Ee=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Q||ze(E)){let _e=E.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Cs?Ee=i.DEPTH_COMPONENT32F:_e.type===Rs&&(Ee=i.DEPTH_COMPONENT24));let we=je(E);ze(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Ee,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Ee,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,Ee,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let Ee=je(E);Q&&ze(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,i.DEPTH24_STENCIL8,E.width,E.height):ze(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let Ee=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let _e=0;_e<Ee.length;_e++){let we=Ee[_e],$e=r.convert(we.format,we.colorSpace),Ne=r.convert(we.type),Ve=A(we.internalFormat,$e,Ne,we.colorSpace),Xe=je(E);Q&&ze(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ve,E.width,E.height):ze(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,Ve,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);let Ee=n.get(E.depthTexture).__webglTexture,_e=je(E);if(E.depthTexture.format===tr)ze(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Ee,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Ee,0);else if(E.depthTexture.format===Gr)ze(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Ee,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Ke(C){let E=n.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");dt(E.__webglFramebuffer,C)}else if(Q){E.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Ee]),E.__webglDepthbuffer[Ee]=i.createRenderbuffer(),ht(E.__webglDepthbuffer[Ee],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),ht(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(C,E,Q){let Ee=n.get(C);E!==void 0&&We(Ee.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&Ke(C)}function J(C){let E=C.texture,Q=n.get(C),Ee=n.get(E);C.addEventListener("dispose",$),C.isWebGLMultipleRenderTargets!==!0&&(Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture()),Ee.__version=E.version,a.memory.textures++);let _e=C.isWebGLCubeRenderTarget===!0,we=C.isWebGLMultipleRenderTargets===!0,$e=y(C)||o;if(_e){Q.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(o&&E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Ne]=[];for(let Ve=0;Ve<E.mipmaps.length;Ve++)Q.__webglFramebuffer[Ne][Ve]=i.createFramebuffer()}else Q.__webglFramebuffer[Ne]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)Q.__webglFramebuffer[Ne]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(we)if(s.drawBuffers){let Ne=C.texture;for(let Ve=0,Xe=Ne.length;Ve<Xe;Ve++){let Tt=n.get(Ne[Ve]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&ze(C)===!1){let Ne=we?E:[E];Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ve=0;Ve<Ne.length;Ve++){let Xe=Ne[Ve];Q.__webglColorRenderbuffer[Ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ve]);let Tt=r.convert(Xe.format,Xe.colorSpace),be=r.convert(Xe.type),qt=A(Xe.internalFormat,Tt,be,Xe.colorSpace,C.isXRRenderTarget===!0),Pt=je(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,qt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(Q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,Ee.__webglTexture),j(i.TEXTURE_CUBE_MAP,E,$e);for(let Ne=0;Ne<6;Ne++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)We(Q.__webglFramebuffer[Ne][Ve],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ve);else We(Q.__webglFramebuffer[Ne],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);S(E,$e)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){let Ne=C.texture;for(let Ve=0,Xe=Ne.length;Ve<Xe;Ve++){let Tt=Ne[Ve],be=n.get(Tt);t.bindTexture(i.TEXTURE_2D,be.__webglTexture),j(i.TEXTURE_2D,Tt,$e),We(Q.__webglFramebuffer,C,Tt,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,0),S(Tt,$e)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ne=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,Ee.__webglTexture),j(Ne,E,$e),o&&E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)We(Q.__webglFramebuffer[Ve],C,E,i.COLOR_ATTACHMENT0,Ne,Ve);else We(Q.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,Ne,0);S(E,$e)&&v(Ne),t.unbindTexture()}C.depthBuffer&&Ke(C)}function pn(C){let E=y(C)||o,Q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Ee=0,_e=Q.length;Ee<_e;Ee++){let we=Q[Ee];if(S(we,E)){let $e=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ne=n.get(we).__webglTexture;t.bindTexture($e,Ne),v($e),t.unbindTexture()}}}function ve(C){if(o&&C.samples>0&&ze(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Q=C.width,Ee=C.height,_e=i.COLOR_BUFFER_BIT,we=[],$e=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(C),Ve=C.isWebGLMultipleRenderTargets===!0;if(Ve)for(let Xe=0;Xe<E.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Xe=0;Xe<E.length;Xe++){we.push(i.COLOR_ATTACHMENT0+Xe),C.depthBuffer&&we.push($e);let Tt=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(Tt===!1&&(C.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Ve&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Xe]),Tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[$e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[$e])),Ve){let be=n.get(E[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,Q,Ee,0,0,Q,Ee,_e,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ve)for(let Xe=0;Xe<E.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Xe]);let Tt=n.get(E[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,Tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function je(C){return Math.min(s.maxSamples,C.samples)}function ze(C){let E=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Gt(C){let E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function Oe(C,E){let Q=C.colorSpace,Ee=C.format,_e=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===yc||Q!==us&&Q!==Ui&&(on.getTransfer(Q)===xn?o===!1?e.has("EXT_sRGB")===!0&&Ee===Xi?(C.format=yc,C.minFilter=Di,C.generateMipmaps=!1):E=Co.sRGBToLinear(E):(Ee!==Xi||_e!==Ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}this.allocateTextureUnit=F,this.resetTextureUnits=Me,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=ae,this.rebindTextures=oe,this.setupRenderTarget=J,this.updateRenderTargetMipmap=pn,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=We,this.useMultisampledRTT=ze}function Wx(i,e,t){let n=t.isWebGL2;function s(r,a=Ui){let o,l=on.getTransfer(a);if(r===Ls)return i.UNSIGNED_BYTE;if(r===Ud)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Nd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Bp)return i.BYTE;if(r===Fp)return i.SHORT;if(r===rh)return i.UNSIGNED_SHORT;if(r===Dd)return i.INT;if(r===Rs)return i.UNSIGNED_INT;if(r===Cs)return i.FLOAT;if(r===ba)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===kp)return i.ALPHA;if(r===Xi)return i.RGBA;if(r===Hp)return i.LUMINANCE;if(r===zp)return i.LUMINANCE_ALPHA;if(r===tr)return i.DEPTH_COMPONENT;if(r===Gr)return i.DEPTH_STENCIL;if(r===yc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Vp)return i.RED;if(r===Od)return i.RED_INTEGER;if(r===Gp)return i.RG;if(r===Bd)return i.RG_INTEGER;if(r===Fd)return i.RGBA_INTEGER;if(r===Il||r===Ll||r===Dl||r===Ul)if(l===xn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Il)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ul)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Il)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ul)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nu||r===iu||r===su||r===ru)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===nu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===iu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===su)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ru)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===au||r===ou)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===au)return l===xn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ou)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===lu||r===cu||r===hu||r===uu||r===du||r===fu||r===pu||r===mu||r===gu||r===yu||r===xu||r===_u||r===vu||r===Mu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===lu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===du)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_u)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mu)return l===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl||r===bu||r===Su)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Nl)return l===xn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Su)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wp||r===Eu||r===Tu||r===wu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Nl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Eu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===er?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Lc=class extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Si=class extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xx={type:"move"},ga=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let y=t.getJointPose(b,n),g=this._getHandJoint(c,b);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],p=u.position.distanceTo(m.position),f=.02,x=.005;c.inputState.pinching&&p>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dc=class extends Us{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,p=null,f=null,x=null,b=t.getContextAttributes(),y=null,g=null,S=[],v=[],A=new He,B=null,D=new oi;D.layers.enable(1),D.viewport=new Kn;let U=new oi;U.layers.enable(2),U.viewport=new Kn;let $=[D,U],T=new Lc;T.layers.enable(1),T.layers.enable(2);let R=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=S[j];return de===void 0&&(de=new ga,S[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=S[j];return de===void 0&&(de=new ga,S[j]=de),de.getGripSpace()},this.getHand=function(j){let de=S[j];return de===void 0&&(de=new ga,S[j]=de),de.getHandSpace()};function ce(j){let de=v.indexOf(j.inputSource);if(de===-1)return;let Te=S[de];Te!==void 0&&(Te.update(j.inputSource,j.frame,c||a),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function Me(){s.removeEventListener("select",ce),s.removeEventListener("selectstart",ce),s.removeEventListener("selectend",ce),s.removeEventListener("squeeze",ce),s.removeEventListener("squeezestart",ce),s.removeEventListener("squeezeend",ce),s.removeEventListener("end",Me),s.removeEventListener("inputsourceschange",F);for(let j=0;j<S.length;j++){let de=v[j];de!==null&&(v[j]=null,S[j].disconnect(de))}R=null,K=null,e.setRenderTarget(y),f=null,p=null,m=null,s=null,g=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ce),s.addEventListener("selectstart",ce),s.addEventListener("selectend",ce),s.addEventListener("squeeze",ce),s.addEventListener("squeezestart",ce),s.addEventListener("squeezeend",ce),s.addEventListener("end",Me),s.addEventListener("inputsourceschange",F),b.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let de={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new ds(f.framebufferWidth,f.framebufferHeight,{format:Xi,type:Ls,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let de=null,Te=null,ke=null;b.depth&&(ke=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?Gr:tr,Te=b.stencil?er:Rs);let We={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};m=new XRWebGLBinding(s,t),p=m.createProjectionLayer(We),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),g=new ds(p.textureWidth,p.textureHeight,{format:Xi,type:Ls,depthTexture:new ko(p.textureWidth,p.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let ht=e.properties.get(g);ht.__ignoreDepthValues=p.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(j){for(let de=0;de<j.removed.length;de++){let Te=j.removed[de],ke=v.indexOf(Te);ke>=0&&(v[ke]=null,S[ke].disconnect(Te))}for(let de=0;de<j.added.length;de++){let Te=j.added[de],ke=v.indexOf(Te);if(ke===-1){for(let ht=0;ht<S.length;ht++)if(ht>=v.length){v.push(Te),ke=ht;break}else if(v[ht]===null){v[ht]=Te,ke=ht;break}if(ke===-1)break}let We=S[ke];We&&We.connect(Te)}}let Y=new k,z=new k;function G(j,de,Te){Y.setFromMatrixPosition(de.matrixWorld),z.setFromMatrixPosition(Te.matrixWorld);let ke=Y.distanceTo(z),We=de.projectionMatrix.elements,ht=Te.projectionMatrix.elements,dt=We[14]/(We[10]-1),Ke=We[14]/(We[10]+1),oe=(We[9]+1)/We[5],J=(We[9]-1)/We[5],pn=(We[8]-1)/We[0],ve=(ht[8]+1)/ht[0],je=dt*pn,ze=dt*ve,Gt=ke/(-pn+ve),Oe=Gt*-pn;de.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Oe),j.translateZ(Gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let C=dt+Gt,E=Ke+Gt,Q=je-Oe,Ee=ze+(ke-Oe),_e=oe*Ke/E*C,we=J*Ke/E*C;j.projectionMatrix.makePerspective(Q,Ee,_e,we,C,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Z(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;T.near=U.near=D.near=j.near,T.far=U.far=D.far=j.far,(R!==T.near||K!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,K=T.far);let de=j.parent,Te=T.cameras;Z(T,de);for(let ke=0;ke<Te.length;ke++)Z(Te[ke],de);Te.length===2?G(T,D,U):T.projectionMatrix.copy(D.projectionMatrix),ae(j,T,de)};function ae(j,de,Te){Te===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=xc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(j){l=j,p!==null&&(p.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let le=null;function ue(j,de){if(u=de.getViewerPose(c||a),x=de,u!==null){let Te=u.views;f!==null&&(e.setRenderTargetFramebuffer(g,f.framebuffer),e.setRenderTarget(g));let ke=!1;Te.length!==T.cameras.length&&(T.cameras.length=0,ke=!0);for(let We=0;We<Te.length;We++){let ht=Te[We],dt=null;if(f!==null)dt=f.getViewport(ht);else{let oe=m.getViewSubImage(p,ht);dt=oe.viewport,We===0&&(e.setRenderTargetTextures(g,oe.colorTexture,p.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(g))}let Ke=$[We];Ke===void 0&&(Ke=new oi,Ke.layers.enable(We),Ke.viewport=new Kn,$[We]=Ke),Ke.matrix.fromArray(ht.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ht.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(dt.x,dt.y,dt.width,dt.height),We===0&&(T.matrix.copy(Ke.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ke===!0&&T.cameras.push(Ke)}}for(let Te=0;Te<S.length;Te++){let ke=v[Te],We=S[Te];ke!==null&&We!==void 0&&We.update(ke,de,c||a)}le&&le(j,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),x=null}let Ae=new qd;Ae.setAnimationLoop(ue),this.setAnimationLoop=function(j){le=j},this.dispose=function(){}}};function qx(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,Xd(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,S,v,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(y,g):g.isMeshToonMaterial?(r(y,g),m(y,g)):g.isMeshPhongMaterial?(r(y,g),u(y,g)):g.isMeshStandardMaterial?(r(y,g),p(y,g),g.isMeshPhysicalMaterial&&f(y,g,A)):g.isMeshMatcapMaterial?(r(y,g),x(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),b(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(a(y,g),g.isLineDashedMaterial&&o(y,g)):g.isPointsMaterial?l(y,g,S,v):g.isSpriteMaterial?c(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===ui&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===ui&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let S=e.get(g).envMap;if(S&&(y.envMap.value=S,y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function a(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function o(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function l(y,g,S,v){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*S,y.scale.value=v*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function u(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function p(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function f(y,g,S){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ui&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,g){g.matcap&&(y.matcap.value=g.matcap)}function b(y,g){let S=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let A=v.program;n.uniformBlockBinding(S,A)}function c(S,v){let A=s[S.id];A===void 0&&(x(S),A=u(S),s[S.id]=A,S.addEventListener("dispose",y));let B=v.program;n.updateUBOMapping(S,B);let D=e.render.frame;r[S.id]!==D&&(p(S),r[S.id]=D)}function u(S){let v=m();S.__bindingPointIndex=v;let A=i.createBuffer(),B=S.__size,D=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,B,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function m(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let v=s[S.id],A=S.uniforms,B=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let D=0,U=A.length;D<U;D++){let $=Array.isArray(A[D])?A[D]:[A[D]];for(let T=0,R=$.length;T<R;T++){let K=$[T];if(f(K,D,T,B)===!0){let ce=K.__offset,Me=Array.isArray(K.value)?K.value:[K.value],F=0;for(let Y=0;Y<Me.length;Y++){let z=Me[Y],G=b(z);typeof z=="number"||typeof z=="boolean"?(K.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,ce+F,K.__data)):z.isMatrix3?(K.__data[0]=z.elements[0],K.__data[1]=z.elements[1],K.__data[2]=z.elements[2],K.__data[3]=0,K.__data[4]=z.elements[3],K.__data[5]=z.elements[4],K.__data[6]=z.elements[5],K.__data[7]=0,K.__data[8]=z.elements[6],K.__data[9]=z.elements[7],K.__data[10]=z.elements[8],K.__data[11]=0):(z.toArray(K.__data,F),F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ce,K.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,v,A,B){let D=S.value,U=v+"_"+A;if(B[U]===void 0)return typeof D=="number"||typeof D=="boolean"?B[U]=D:B[U]=D.clone(),!0;{let $=B[U];if(typeof D=="number"||typeof D=="boolean"){if($!==D)return B[U]=D,!0}else if($.equals(D)===!1)return $.copy(D),!0}return!1}function x(S){let v=S.uniforms,A=0,B=16;for(let U=0,$=v.length;U<$;U++){let T=Array.isArray(v[U])?v[U]:[v[U]];for(let R=0,K=T.length;R<K;R++){let ce=T[R],Me=Array.isArray(ce.value)?ce.value:[ce.value];for(let F=0,Y=Me.length;F<Y;F++){let z=Me[F],G=b(z),Z=A%B;Z!==0&&B-Z<G.boundary&&(A+=B-Z),ce.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=A,A+=G.storage}}}let D=A%B;return D>0&&(A+=B-D),S.__size=A,S.__cache={},this}function b(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function y(S){let v=S.target;v.removeEventListener("dispose",y);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}var wa=class{constructor(e={}){let{canvas:t=nm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let f=new Uint32Array(4),x=new Int32Array(4),b=null,y=null,g=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this._useLegacyLights=!1,this.toneMapping=Is,this.toneMappingExposure=1;let v=this,A=!1,B=0,D=0,U=null,$=-1,T=null,R=new Kn,K=new Kn,ce=null,Me=new xt(0),F=0,Y=t.width,z=t.height,G=1,Z=null,ae=null,le=new Kn(0,0,Y,z),ue=new Kn(0,0,Y,z),Ae=!1,j=new Ta,de=!1,Te=!1,ke=null,We=new kn,ht=new He,dt=new k,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return U===null?G:1}let J=n;function pn(w,X){for(let ee=0;ee<w.length;ee++){let ie=w[ee],te=t.getContext(ie,X);if(te!==null)return te}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ih}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),J===null){let X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),J=pn(X,w),J===null)throw pn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ve,je,ze,Gt,Oe,C,E,Q,Ee,_e,we,$e,Ne,Ve,Xe,Tt,be,qt,Pt,ft,et,Ge,_t,Wt;function ln(){ve=new dy(J),je=new ay(J,ve,e),ve.init(je),Ge=new Wx(J,ve,je),ze=new Vx(J,ve,je),Gt=new my(J),Oe=new Px,C=new Gx(J,ve,ze,Oe,je,Ge,Gt),E=new ly(v),Q=new uy(v),Ee=new Sm(J,je),_t=new sy(J,ve,Ee,je),_e=new fy(J,Ee,Gt,_t),we=new _y(J,_e,Ee,Gt),Pt=new xy(J,je,C),Tt=new oy(Oe),$e=new Cx(v,E,Q,ve,je,_t,Tt),Ne=new qx(v,Oe),Ve=new Lx,Xe=new Fx(ve,je),qt=new iy(v,E,Q,ze,we,p,l),be=new zx(v,we,je),Wt=new Yx(J,Gt,je,ze),ft=new ry(J,ve,Gt,je),et=new py(J,ve,Gt,je),Gt.programs=$e.programs,v.capabilities=je,v.extensions=ve,v.properties=Oe,v.renderLists=Ve,v.shadowMap=be,v.state=ze,v.info=Gt}ln();let wt=new Dc(v,J);this.xr=wt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let w=ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(Y,z,!1))},this.getSize=function(w){return w.set(Y,z)},this.setSize=function(w,X,ee=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,z=X,t.width=Math.floor(w*G),t.height=Math.floor(X*G),ee===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(Y*G,z*G).floor()},this.setDrawingBufferSize=function(w,X,ee){Y=w,z=X,G=ee,t.width=Math.floor(w*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,X,ee,ie){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,X,ee,ie),ze.viewport(R.copy(le).multiplyScalar(G).floor())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,X,ee,ie){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,X,ee,ie),ze.scissor(K.copy(ue).multiplyScalar(G).floor())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){ze.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(w=!0,X=!0,ee=!0){let ie=0;if(w){let te=!1;if(U!==null){let Fe=U.texture.format;te=Fe===Fd||Fe===Bd||Fe===Od}if(te){let Fe=U.texture.type,qe=Fe===Ls||Fe===Rs||Fe===rh||Fe===er||Fe===Ud||Fe===Nd,Ze=qt.getClearColor(),ot=qt.getClearAlpha(),mt=Ze.r,Je=Ze.g,ut=Ze.b;qe?(f[0]=mt,f[1]=Je,f[2]=ut,f[3]=ot,J.clearBufferuiv(J.COLOR,0,f)):(x[0]=mt,x[1]=Je,x[2]=ut,x[3]=ot,J.clearBufferiv(J.COLOR,0,x))}else ie|=J.COLOR_BUFFER_BIT}X&&(ie|=J.DEPTH_BUFFER_BIT),ee&&(ie|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Ve.dispose(),Xe.dispose(),Oe.dispose(),E.dispose(),Q.dispose(),we.dispose(),_t.dispose(),Wt.dispose(),$e.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Xn),wt.removeEventListener("sessionend",Yt),ke&&(ke.dispose(),ke=null),Hn.stop()};function Ie(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Gt.autoReset,X=be.enabled,ee=be.autoUpdate,ie=be.needsUpdate,te=be.type;ln(),Gt.autoReset=w,be.enabled=X,be.autoUpdate=ee,be.needsUpdate=ie,be.type=te}function Ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){let X=w.target;X.removeEventListener("dispose",De),at(X)}function at(w){nt(w),Oe.remove(w)}function nt(w){let X=Oe.get(w).programs;X!==void 0&&(X.forEach(function(ee){$e.releaseProgram(ee)}),w.isShaderMaterial&&$e.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,ee,ie,te,Fe){X===null&&(X=Ke);let qe=te.isMesh&&te.matrixWorld.determinant()<0,Ze=ts(w,X,ee,ie,te);ze.setMaterial(ie,qe);let ot=ee.index,mt=1;if(ie.wireframe===!0){if(ot=_e.getWireframeAttribute(ee),ot===void 0)return;mt=2}let Je=ee.drawRange,ut=ee.attributes.position,sn=Je.start*mt,tt=(Je.start+Je.count)*mt;Fe!==null&&(sn=Math.max(sn,Fe.start*mt),tt=Math.min(tt,(Fe.start+Fe.count)*mt)),ot!==null?(sn=Math.max(sn,0),tt=Math.min(tt,ot.count)):ut!=null&&(sn=Math.max(sn,0),tt=Math.min(tt,ut.count));let st=tt-sn;if(st<0||st===1/0)return;_t.setup(te,ie,Ze,ee,ot);let Qt,yt=ft;if(ot!==null&&(Qt=Ee.get(ot),yt=et,yt.setIndex(Qt)),te.isMesh)ie.wireframe===!0?(ze.setLineWidth(ie.wireframeLinewidth*oe()),yt.setMode(J.LINES)):yt.setMode(J.TRIANGLES);else if(te.isLine){let At=ie.linewidth;At===void 0&&(At=1),ze.setLineWidth(At*oe()),te.isLineSegments?yt.setMode(J.LINES):te.isLineLoop?yt.setMode(J.LINE_LOOP):yt.setMode(J.LINE_STRIP)}else te.isPoints?yt.setMode(J.POINTS):te.isSprite&&yt.setMode(J.TRIANGLES);if(te.isBatchedMesh)yt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)yt.renderInstances(sn,st,te.count);else if(ee.isInstancedBufferGeometry){let At=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Qr=Math.min(ee.instanceCount,At);yt.renderInstances(sn,st,Qr)}else yt.render(sn,st)};function nn(w,X,ee){w.transparent===!0&&w.side===An&&w.forceSinglePass===!1?(w.side=ui,w.needsUpdate=!0,$t(w,X,ee),w.side=Ds,w.needsUpdate=!0,$t(w,X,ee),w.side=An):$t(w,X,ee)}this.compile=function(w,X,ee=null){ee===null&&(ee=w),y=Xe.get(ee),y.init(),S.push(y),ee.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),w!==ee&&w.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),y.setupLights(v._useLegacyLights);let ie=new Set;return w.traverse(function(te){let Fe=te.material;if(Fe)if(Array.isArray(Fe))for(let qe=0;qe<Fe.length;qe++){let Ze=Fe[qe];nn(Ze,ee,te),ie.add(Ze)}else nn(Fe,ee,te),ie.add(Fe)}),S.pop(),y=null,ie},this.compileAsync=function(w,X,ee=null){let ie=this.compile(w,X,ee);return new Promise(te=>{function Fe(){if(ie.forEach(function(qe){Oe.get(qe).currentProgram.isReady()&&ie.delete(qe)}),ie.size===0){te(w);return}setTimeout(Fe,10)}ve.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let jt=null;function Ln(w){jt&&jt(w)}function Xn(){Hn.stop()}function Yt(){Hn.start()}let Hn=new qd;Hn.setAnimationLoop(Ln),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(w){jt=w,wt.setAnimationLoop(w),w===null?Hn.stop():Hn.start()},wt.addEventListener("sessionstart",Xn),wt.addEventListener("sessionend",Yt),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(X),X=wt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,X,U),y=Xe.get(w,S.length),y.init(),S.push(y),We.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(We),Te=this.localClippingEnabled,de=Tt.init(this.clippingPlanes,Te),b=Ve.get(w,g.length),b.init(),g.push(b),pi(w,X,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(Z,ae),this.info.render.frame++,de===!0&&Tt.beginShadows();let ee=y.state.shadowsArray;if(be.render(ee,w,X),de===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(b,w),y.setupLights(v._useLegacyLights),X.isArrayCamera){let ie=X.cameras;for(let te=0,Fe=ie.length;te<Fe;te++){let qe=ie[te];Fi(b,w,qe,qe.viewport)}}else Fi(b,w,X);U!==null&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(v,w,X),_t.resetDefaultState(),$=-1,T=null,S.pop(),S.length>0?y=S[S.length-1]:y=null,g.pop(),g.length>0?b=g[g.length-1]:b=null};function pi(w,X,ee,ie){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){ie&&dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(We);let qe=we.update(w),Ze=w.material;Ze.visible&&b.push(w,qe,Ze,ee,dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){let qe=we.update(w),Ze=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),dt.copy(w.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),dt.copy(qe.boundingSphere.center)),dt.applyMatrix4(w.matrixWorld).applyMatrix4(We)),Array.isArray(Ze)){let ot=qe.groups;for(let mt=0,Je=ot.length;mt<Je;mt++){let ut=ot[mt],sn=Ze[ut.materialIndex];sn&&sn.visible&&b.push(w,qe,sn,ee,dt.z,ut)}}else Ze.visible&&b.push(w,qe,Ze,ee,dt.z,null)}}let Fe=w.children;for(let qe=0,Ze=Fe.length;qe<Ze;qe++)pi(Fe[qe],X,ee,ie)}function Fi(w,X,ee,ie){let te=w.opaque,Fe=w.transmissive,qe=w.transparent;y.setupLightsView(ee),de===!0&&Tt.setGlobalState(v.clippingPlanes,ee),Fe.length>0&&bn(te,Fe,X,ee),ie&&ze.viewport(R.copy(ie)),te.length>0&&cn(te,X,ee),Fe.length>0&&cn(Fe,X,ee),qe.length>0&&cn(qe,X,ee),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function bn(w,X,ee,ie){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;let Fe=je.isWebGL2;ke===null&&(ke=new ds(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?ba:Ls,minFilter:Ma,samples:Fe?4:0})),v.getDrawingBufferSize(ht),Fe?ke.setSize(ht.x,ht.y):ke.setSize(_c(ht.x),_c(ht.y));let qe=v.getRenderTarget();v.setRenderTarget(ke),v.getClearColor(Me),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();let Ze=v.toneMapping;v.toneMapping=Is,cn(w,ee,ie),C.updateMultisampleRenderTarget(ke),C.updateRenderTargetMipmap(ke);let ot=!1;for(let mt=0,Je=X.length;mt<Je;mt++){let ut=X[mt],sn=ut.object,tt=ut.geometry,st=ut.material,Qt=ut.group;if(st.side===An&&sn.layers.test(ie.layers)){let yt=st.side;st.side=ui,st.needsUpdate=!0,pt(sn,ee,ie,tt,st,Qt),st.side=yt,st.needsUpdate=!0,ot=!0}}ot===!0&&(C.updateMultisampleRenderTarget(ke),C.updateRenderTargetMipmap(ke)),v.setRenderTarget(qe),v.setClearColor(Me,F),v.toneMapping=Ze}function cn(w,X,ee){let ie=X.isScene===!0?X.overrideMaterial:null;for(let te=0,Fe=w.length;te<Fe;te++){let qe=w[te],Ze=qe.object,ot=qe.geometry,mt=ie===null?qe.material:ie,Je=qe.group;Ze.layers.test(ee.layers)&&pt(Ze,X,ee,ot,mt,Je)}}function pt(w,X,ee,ie,te,Fe){w.onBeforeRender(v,X,ee,ie,te,Fe),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(v,X,ee,ie,w,Fe),te.transparent===!0&&te.side===An&&te.forceSinglePass===!1?(te.side=ui,te.needsUpdate=!0,v.renderBufferDirect(ee,X,ie,te,w,Fe),te.side=Ds,te.needsUpdate=!0,v.renderBufferDirect(ee,X,ie,te,w,Fe),te.side=An):v.renderBufferDirect(ee,X,ie,te,w,Fe),w.onAfterRender(v,X,ee,ie,te,Fe)}function $t(w,X,ee){X.isScene!==!0&&(X=Ke);let ie=Oe.get(w),te=y.state.lights,Fe=y.state.shadowsArray,qe=te.state.version,Ze=$e.getParameters(w,te.state,Fe,X,ee),ot=$e.getProgramCacheKey(Ze),mt=ie.programs;ie.environment=w.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(w.isMeshStandardMaterial?Q:E).get(w.envMap||ie.environment),mt===void 0&&(w.addEventListener("dispose",De),mt=new Map,ie.programs=mt);let Je=mt.get(ot);if(Je!==void 0){if(ie.currentProgram===Je&&ie.lightsStateVersion===qe)return Ai(w,Ze),Je}else Ze.uniforms=$e.getUniforms(w),w.onBuild(ee,Ze,v),w.onBeforeCompile(Ze,v),Je=$e.acquireProgram(Ze,ot),mt.set(ot,Je),ie.uniforms=Ze.uniforms;let ut=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ut.clippingPlanes=Tt.uniform),Ai(w,Ze),ie.needsLights=gs(w),ie.lightsStateVersion=qe,ie.needsLights&&(ut.ambientLightColor.value=te.state.ambient,ut.lightProbe.value=te.state.probe,ut.directionalLights.value=te.state.directional,ut.directionalLightShadows.value=te.state.directionalShadow,ut.spotLights.value=te.state.spot,ut.spotLightShadows.value=te.state.spotShadow,ut.rectAreaLights.value=te.state.rectArea,ut.ltc_1.value=te.state.rectAreaLTC1,ut.ltc_2.value=te.state.rectAreaLTC2,ut.pointLights.value=te.state.point,ut.pointLightShadows.value=te.state.pointShadow,ut.hemisphereLights.value=te.state.hemi,ut.directionalShadowMap.value=te.state.directionalShadowMap,ut.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ut.spotShadowMap.value=te.state.spotShadowMap,ut.spotLightMatrix.value=te.state.spotLightMatrix,ut.spotLightMap.value=te.state.spotLightMap,ut.pointShadowMap.value=te.state.pointShadowMap,ut.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.currentProgram=Je,ie.uniformsList=null,Je}function wi(w){if(w.uniformsList===null){let X=w.currentProgram.getUniforms();w.uniformsList=Hr.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Ai(w,X){let ee=Oe.get(w);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function ts(w,X,ee,ie,te){X.isScene!==!0&&(X=Ke),C.resetTextureUnits();let Fe=X.fog,qe=ie.isMeshStandardMaterial?X.environment:null,Ze=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:us,ot=(ie.isMeshStandardMaterial?Q:E).get(ie.envMap||qe),mt=ie.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ut=!!ee.morphAttributes.position,sn=!!ee.morphAttributes.normal,tt=!!ee.morphAttributes.color,st=Is;ie.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(st=v.toneMapping);let Qt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,yt=Qt!==void 0?Qt.length:0,At=Oe.get(ie),Qr=y.state.lights;if(de===!0&&(Te===!0||w!==T)){let mn=w===T&&ie.id===$;Tt.setState(ie,w,mn)}let rn=!1;ie.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Qr.state.version||At.outputColorSpace!==Ze||te.isBatchedMesh&&At.batching===!1||!te.isBatchedMesh&&At.batching===!0||te.isInstancedMesh&&At.instancing===!1||!te.isInstancedMesh&&At.instancing===!0||te.isSkinnedMesh&&At.skinning===!1||!te.isSkinnedMesh&&At.skinning===!0||te.isInstancedMesh&&At.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&At.instancingColor===!1&&te.instanceColor!==null||At.envMap!==ot||ie.fog===!0&&At.fog!==Fe||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Tt.numPlanes||At.numIntersection!==Tt.numIntersection)||At.vertexAlphas!==mt||At.vertexTangents!==Je||At.morphTargets!==ut||At.morphNormals!==sn||At.morphColors!==tt||At.toneMapping!==st||je.isWebGL2===!0&&At.morphTargetsCount!==yt)&&(rn=!0):(rn=!0,At.__version=ie.version);let kt=At.currentProgram;rn===!0&&(kt=$t(ie,X,te));let mi=!1,ci=!1,Dn=!1,St=kt.getUniforms(),Sn=At.uniforms;if(ze.useProgram(kt.program)&&(mi=!0,ci=!0,Dn=!0),ie.id!==$&&($=ie.id,ci=!0),mi||T!==w){St.setValue(J,"projectionMatrix",w.projectionMatrix),St.setValue(J,"viewMatrix",w.matrixWorldInverse);let mn=St.map.cameraPosition;mn!==void 0&&mn.setValue(J,dt.setFromMatrixPosition(w.matrixWorld)),je.logarithmicDepthBuffer&&St.setValue(J,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&St.setValue(J,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,ci=!0,Dn=!0)}if(te.isSkinnedMesh){St.setOptional(J,te,"bindMatrix"),St.setOptional(J,te,"bindMatrixInverse");let mn=te.skeleton;mn&&(je.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),St.setValue(J,"boneTexture",mn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}te.isBatchedMesh&&(St.setOptional(J,te,"batchingTexture"),St.setValue(J,"batchingTexture",te._matricesTexture,C));let Ri=ee.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0&&je.isWebGL2===!0)&&Pt.update(te,ee,kt),(ci||At.receiveShadow!==te.receiveShadow)&&(At.receiveShadow=te.receiveShadow,St.setValue(J,"receiveShadow",te.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Sn.envMap.value=ot,Sn.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1),ci&&(St.setValue(J,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&ns(Sn,Dn),Fe&&ie.fog===!0&&Ne.refreshFogUniforms(Sn,Fe),Ne.refreshMaterialUniforms(Sn,ie,G,z,ke),Hr.upload(J,wi(At),Sn,C)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Hr.upload(J,wi(At),Sn,C),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&St.setValue(J,"center",te.center),St.setValue(J,"modelViewMatrix",te.modelViewMatrix),St.setValue(J,"normalMatrix",te.normalMatrix),St.setValue(J,"modelMatrix",te.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let mn=ie.uniformsGroups;for(let Qn=0,gi=mn.length;Qn<gi;Qn++)if(je.isWebGL2){let ys=mn[Qn];Wt.update(ys,kt),Wt.bind(ys,kt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kt}function ns(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function gs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,X,ee){Oe.get(w.texture).__webglTexture=X,Oe.get(w.depthTexture).__webglTexture=ee;let ie=Oe.get(w);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=ee===void 0,ie.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,X){let ee=Oe.get(w);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,ee=0){U=w,B=X,D=ee;let ie=!0,te=null,Fe=!1,qe=!1;if(w){let ot=Oe.get(w);ot.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(J.FRAMEBUFFER,null),ie=!1):ot.__webglFramebuffer===void 0?C.setupRenderTarget(w):ot.__hasExternalTextures&&C.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);let mt=w.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(qe=!0);let Je=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?te=Je[X][ee]:te=Je[X],Fe=!0):je.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?te=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?te=Je[ee]:te=Je,R.copy(w.viewport),K.copy(w.scissor),ce=w.scissorTest}else R.copy(le).multiplyScalar(G).floor(),K.copy(ue).multiplyScalar(G).floor(),ce=Ae;if(ze.bindFramebuffer(J.FRAMEBUFFER,te)&&je.drawBuffers&&ie&&ze.drawBuffers(w,te),ze.viewport(R),ze.scissor(K),ze.setScissorTest(ce),Fe){let ot=Oe.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot.__webglTexture,ee)}else if(qe){let ot=Oe.get(w.texture),mt=X||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,ot.__webglTexture,ee||0,mt)}$=-1},this.readRenderTargetPixels=function(w,X,ee,ie,te,Fe,qe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qe!==void 0&&(Ze=Ze[qe]),Ze){ze.bindFramebuffer(J.FRAMEBUFFER,Ze);try{let ot=w.texture,mt=ot.format,Je=ot.type;if(mt!==Xi&&Ge.convert(mt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ut=Je===ba&&(ve.has("EXT_color_buffer_half_float")||je.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Je!==Ls&&Ge.convert(Je)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===Cs&&(je.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-ie&&ee>=0&&ee<=w.height-te&&J.readPixels(X,ee,ie,te,Ge.convert(mt),Ge.convert(Je),Fe)}finally{let ot=U!==null?Oe.get(U).__webglFramebuffer:null;ze.bindFramebuffer(J.FRAMEBUFFER,ot)}}},this.copyFramebufferToTexture=function(w,X,ee=0){let ie=Math.pow(2,-ee),te=Math.floor(X.image.width*ie),Fe=Math.floor(X.image.height*ie);C.setTexture2D(X,0),J.copyTexSubImage2D(J.TEXTURE_2D,ee,0,0,w.x,w.y,te,Fe),ze.unbindTexture()},this.copyTextureToTexture=function(w,X,ee,ie=0){let te=X.image.width,Fe=X.image.height,qe=Ge.convert(ee.format),Ze=Ge.convert(ee.type);C.setTexture2D(ee,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ee.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ee.unpackAlignment),X.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,ie,w.x,w.y,te,Fe,qe,Ze,X.image.data):X.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,ie,w.x,w.y,X.mipmaps[0].width,X.mipmaps[0].height,qe,X.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,ie,w.x,w.y,qe,Ze,X.image),ie===0&&ee.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(w,X,ee,ie,te=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Fe=w.max.x-w.min.x+1,qe=w.max.y-w.min.y+1,Ze=w.max.z-w.min.z+1,ot=Ge.convert(ie.format),mt=Ge.convert(ie.type),Je;if(ie.isData3DTexture)C.setTexture3D(ie,0),Je=J.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)C.setTexture2DArray(ie,0),Je=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ie.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ie.unpackAlignment);let ut=J.getParameter(J.UNPACK_ROW_LENGTH),sn=J.getParameter(J.UNPACK_IMAGE_HEIGHT),tt=J.getParameter(J.UNPACK_SKIP_PIXELS),st=J.getParameter(J.UNPACK_SKIP_ROWS),Qt=J.getParameter(J.UNPACK_SKIP_IMAGES),yt=ee.isCompressedTexture?ee.mipmaps[te]:ee.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,yt.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,yt.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,w.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,w.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,w.min.z),ee.isDataTexture||ee.isData3DTexture?J.texSubImage3D(Je,te,X.x,X.y,X.z,Fe,qe,Ze,ot,mt,yt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Je,te,X.x,X.y,X.z,Fe,qe,Ze,ot,yt.data)):J.texSubImage3D(Je,te,X.x,X.y,X.z,Fe,qe,Ze,ot,mt,yt),J.pixelStorei(J.UNPACK_ROW_LENGTH,ut),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,sn),J.pixelStorei(J.UNPACK_SKIP_PIXELS,tt),J.pixelStorei(J.UNPACK_SKIP_ROWS,st),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Qt),te===0&&ie.generateMipmaps&&J.generateMipmap(Je),ze.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),ze.unbindTexture()},this.resetState=function(){B=0,D=0,U=null,ze.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ah?"display-p3":"srgb",t.unpackColorSpace=on.workingColorSpace===nl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Jn?nr:Hd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===nr?Jn:us}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Uc=class extends wa{};Uc.prototype.isWebGL1Renderer=!0;var Ho=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zo=class extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Aa=class extends Os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yd=new k,xd=new k,_d=new kn,oc=new Sa,go=new Wr,Nc=class extends li{constructor(e=new fi,t=new Aa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)yd.fromBufferAttribute(t,s-1),xd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=yd.distanceTo(xd);e.setAttribute("lineDistance",new Cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;_d.copy(s).invert(),oc.copy(e.ray).applyMatrix4(_d);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,u=new k,m=new k,p=new k,f=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){let g=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=f){let B=x.getX(v),D=x.getX(v+1);if(c.fromBufferAttribute(y,B),u.fromBufferAttribute(y,D),oc.distanceSqToSegment(c,u,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let $=e.ray.origin.distanceTo(p);$<e.near||$>e.far||t.push({distance:$,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,a.start),S=Math.min(y.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=f){if(c.fromBufferAttribute(y,v),u.fromBufferAttribute(y,v+1),oc.distanceSqToSegment(c,u,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(p);D<e.near||D>e.far||t.push({distance:D,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},vd=new k,Md=new k,Vo=class extends Nc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vd.fromBufferAttribute(t,s),Md.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vd.distanceTo(Md);e.setAttribute("lineDistance",new Cn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Go=class extends Ni{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,f=(a-u)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new He:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new k,s=[],r=[],a=[],o=new k,l=new kn;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),m=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ni(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ni(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ra=class extends Oi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new He,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*u-f*m+this.aX,c=p*m+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oc=class extends Ra{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,m){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+m)+(l-o)/m;p*=u,f*=u,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var yo=new k,lc=new lh,cc=new lh,hc=new lh,Bc=class extends Oi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(yo.subVectors(s[0],s[1]).add(s[0]),c=yo);let m=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=yo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(m),f),b=Math.pow(m.distanceToSquared(p),f),y=Math.pow(p.distanceToSquared(u),f);b<1e-4&&(b=1),x<1e-4&&(x=b),y<1e-4&&(y=b),lc.initNonuniformCatmullRom(c.x,m.x,p.x,u.x,x,b,y),cc.initNonuniformCatmullRom(c.y,m.y,p.y,u.y,x,b,y),hc.initNonuniformCatmullRom(c.z,m.z,p.z,u.z,x,b,y)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(c.x,m.x,p.x,u.x,this.tension),cc.initCatmullRom(c.y,m.y,p.y,u.y,this.tension),hc.initCatmullRom(c.z,m.z,p.z,u.z,this.tension));return n.set(lc.calc(l),cc.calc(l),hc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function $x(i,e){let t=1-i;return t*t*e}function Kx(i,e){return 2*(1-i)*i*e}function Zx(i,e){return i*i*e}function ya(i,e,t,n){return $x(i,e)+Kx(i,t)+Zx(i,n)}function Jx(i,e){let t=1-i;return t*t*t*e}function jx(i,e){let t=1-i;return 3*t*t*i*e}function Qx(i,e){return 3*(1-i)*i*i*e}function e_(i,e){return i*i*i*e}function xa(i,e,t,n,s){return Jx(i,e)+jx(i,t)+Qx(i,n)+e_(i,s)}var Wo=class extends Oi{constructor(e=new He,t=new He,n=new He,s=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xa(e,s.x,r.x,a.x,o.x),xa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fc=class extends Oi{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xa(e,s.x,r.x,a.x,o.x),xa(e,s.y,r.y,a.y,o.y),xa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xo=class extends Oi{constructor(e=new He,t=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new He){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new He){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends Oi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends Oi{constructor(e=new He,t=new He,n=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hc=class extends Oi{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y),ya(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yo=class extends Oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(bd(o,l.x,c.x,u.x,m.x),bd(o,l.y,c.y,u.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new He().fromArray(s))}return this}},Sd=Object.freeze({__proto__:null,ArcCurve:Oc,CatmullRomCurve3:Bc,CubicBezierCurve:Wo,CubicBezierCurve3:Fc,EllipseCurve:Ra,LineCurve:Xo,LineCurve3:kc,QuadraticBezierCurve:qo,QuadraticBezierCurve3:Hc,SplineCurve:Yo}),zc=class extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Sd[s.type]().fromJSON(s))}return this}},qr=class extends zc{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xo(this.currentPoint.clone(),new He(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new qo(this.currentPoint.clone(),new He(e,t),new He(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Wo(this.currentPoint.clone(),new He(e,t),new He(n,s),new He(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Yo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ra(e,t,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Bs=class i extends fi{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],m=[],p=[],f=[],x=0,b=[],y=n/2,g=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Cn(m,3)),this.setAttribute("normal",new Cn(p,3)),this.setAttribute("uv",new Cn(f,2));function S(){let A=new k,B=new k,D=0,U=(t-e)/n;for(let $=0;$<=r;$++){let T=[],R=$/r,K=R*(t-e)+e;for(let ce=0;ce<=s;ce++){let Me=ce/s,F=Me*l+o,Y=Math.sin(F),z=Math.cos(F);B.x=K*Y,B.y=-R*n+y,B.z=K*z,m.push(B.x,B.y,B.z),A.set(Y,U,z).normalize(),p.push(A.x,A.y,A.z),f.push(Me,1-R),T.push(x++)}b.push(T)}for(let $=0;$<s;$++)for(let T=0;T<r;T++){let R=b[T][$],K=b[T+1][$],ce=b[T+1][$+1],Me=b[T][$+1];u.push(R,K,Me),u.push(K,ce,Me),D+=6}c.addGroup(g,D,0),g+=D}function v(A){let B=x,D=new He,U=new k,$=0,T=A===!0?e:t,R=A===!0?1:-1;for(let ce=1;ce<=s;ce++)m.push(0,y*R,0),p.push(0,R,0),f.push(.5,.5),x++;let K=x;for(let ce=0;ce<=s;ce++){let F=ce/s*l+o,Y=Math.cos(F),z=Math.sin(F);U.x=T*z,U.y=y*R,U.z=T*Y,m.push(U.x,U.y,U.z),p.push(0,R,0),D.x=Y*.5+.5,D.y=z*.5*R+.5,f.push(D.x,D.y),x++}for(let ce=0;ce<s;ce++){let Me=B+ce,F=K+ce;A===!0?u.push(F,F+1,Me):u.push(F+1,F,Me),$+=3}c.addGroup(g,$,A===!0?1:2),g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qi=class i extends Bs{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$o=class i extends fi{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Cn(r,3)),this.setAttribute("normal",new Cn(r.slice(),3)),this.setAttribute("uv",new Cn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new k,A=new k,B=new k;for(let D=0;D<t.length;D+=3)f(t[D+0],v),f(t[D+1],A),f(t[D+2],B),l(v,A,B,S)}function l(S,v,A,B){let D=B+1,U=[];for(let $=0;$<=D;$++){U[$]=[];let T=S.clone().lerp(A,$/D),R=v.clone().lerp(A,$/D),K=D-$;for(let ce=0;ce<=K;ce++)ce===0&&$===D?U[$][ce]=T:U[$][ce]=T.clone().lerp(R,ce/K)}for(let $=0;$<D;$++)for(let T=0;T<2*(D-$)-1;T++){let R=Math.floor(T/2);T%2===0?(p(U[$][R+1]),p(U[$+1][R]),p(U[$][R])):(p(U[$][R+1]),p(U[$+1][R+1]),p(U[$+1][R]))}}function c(S){let v=new k;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(S),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function u(){let S=new k;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let A=y(S)/2/Math.PI+.5,B=g(S)/Math.PI+.5;a.push(A,1-B)}x(),m()}function m(){for(let S=0;S<a.length;S+=6){let v=a[S+0],A=a[S+2],B=a[S+4],D=Math.max(v,A,B),U=Math.min(v,A,B);D>.9&&U<.1&&(v<.2&&(a[S+0]+=1),A<.2&&(a[S+2]+=1),B<.2&&(a[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function f(S,v){let A=S*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function x(){let S=new k,v=new k,A=new k,B=new k,D=new He,U=new He,$=new He;for(let T=0,R=0;T<r.length;T+=9,R+=6){S.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),A.set(r[T+6],r[T+7],r[T+8]),D.set(a[R+0],a[R+1]),U.set(a[R+2],a[R+3]),$.set(a[R+4],a[R+5]),B.copy(S).add(v).add(A).divideScalar(3);let K=y(B);b(D,R+0,S,K),b(U,R+2,v,K),b($,R+4,A,K)}}function b(S,v,A,B){B<0&&S.x===1&&(a[v]=S.x-1),A.x===0&&A.z===0&&(a[v]=B/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Ko=class i extends $o{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Yr=class extends qr{constructor(e){super(e),this.uuid=Kr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new qr().fromJSON(s))}return this}},t_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=jd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,m,p,f;if(n&&(r=a_(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let x=t;x<s;x+=t)m=i[x],p=i[x+1],m<o&&(o=m),p<l&&(l=p),m>c&&(c=m),p>u&&(u=p);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Ca(r,a,t,o,l,f,0),a}};function jd(i,e,t,n,s){let r,a;if(s===y_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Ed(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Ed(r,i[r],i[r+1],a);return a&&sl(a,a.next)&&(Ia(a),a=a.next),a}function sr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(sl(t,t.next)||Rn(t.prev,t,t.next)===0)){if(Ia(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ca(i,e,t,n,s,r,a){if(!i)return;!a&&r&&u_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?i_(i,n,s,r):n_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ia(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=s_(sr(i),e,t),Ca(i,e,t,n,s,r,2)):a===2&&r_(i,e,t,n,s,r):Ca(sr(i),e,t,n,s,r,1);break}}}function n_(i){let e=i.prev,t=i,n=i.next;if(Rn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,m=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=p&&x.y>=m&&x.y<=f&&Br(s,o,r,l,a,c,x.x,x.y)&&Rn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function i_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Rn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,m=r.y,p=a.y,f=o<l?o<c?o:c:l<c?l:c,x=u<m?u<p?u:p:m<p?m:p,b=o>l?o>c?o:c:l>c?l:c,y=u>m?u>p?u:p:m>p?m:p,g=Vc(f,x,e,t,n),S=Vc(b,y,e,t,n),v=i.prevZ,A=i.nextZ;for(;v&&v.z>=g&&A&&A.z<=S;){if(v.x>=f&&v.x<=b&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Br(o,u,l,m,c,p,v.x,v.y)&&Rn(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=f&&A.x<=b&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Br(o,u,l,m,c,p,A.x,A.y)&&Rn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=b&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Br(o,u,l,m,c,p,v.x,v.y)&&Rn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=S;){if(A.x>=f&&A.x<=b&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Br(o,u,l,m,c,p,A.x,A.y)&&Rn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function s_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!sl(s,r)&&Qd(s,n,n.next,r)&&Pa(s,r)&&Pa(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ia(n),Ia(n.next),n=i=r),n=n.next}while(n!==i);return sr(n)}function r_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&p_(a,o)){let l=ef(a,o);a=sr(a,a.next),l=sr(l,l.next),Ca(a,e,t,n,s,r,0),Ca(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function a_(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=jd(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(f_(c));for(s.sort(o_),r=0;r<s.length;r++)t=l_(s[r],t);return t}function o_(i,e){return i.x-e.x}function l_(i,e){let t=c_(i,e);if(!t)return e;let n=ef(t,i);return sr(n,n.next),sr(t,t.next)}function c_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,m;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Br(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(m=Math.abs(a-t.y)/(r-t.x),Pa(t,i)&&(m<u||m===u&&(t.x>s.x||t.x===s.x&&h_(s,t)))&&(s=t,u=m)),t=t.next;while(t!==o);return s}function h_(i,e){return Rn(i.prev,i,e.prev)<0&&Rn(e.next,i,i.next)<0}function u_(i,e,t,n){let s=i;do s.z===0&&(s.z=Vc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,d_(s)}function d_(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Vc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function f_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Br(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function p_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!m_(i,e)&&(Pa(i,e)&&Pa(e,i)&&g_(i,e)&&(Rn(i.prev,i,e.prev)||Rn(i,e.prev,e))||sl(i,e)&&Rn(i.prev,i,i.next)>0&&Rn(e.prev,e,e.next)>0)}function Rn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function sl(i,e){return i.x===e.x&&i.y===e.y}function Qd(i,e,t,n){let s=_o(Rn(i,e,t)),r=_o(Rn(i,e,n)),a=_o(Rn(t,n,i)),o=_o(Rn(t,n,e));return!!(s!==r&&a!==o||s===0&&xo(i,t,e)||r===0&&xo(i,n,e)||a===0&&xo(t,i,n)||o===0&&xo(t,e,n))}function xo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _o(i){return i>0?1:i<0?-1:0}function m_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Qd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Pa(i,e){return Rn(i.prev,i,i.next)<0?Rn(i,e,i.next)>=0&&Rn(i,i.prev,e)>=0:Rn(i,e,i.prev)<0||Rn(i,i.next,e)<0}function g_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ef(i,e){let t=new Gc(i.i,i.x,i.y),n=new Gc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ed(i,e,t,n){let s=new Gc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ia(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function y_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var _a=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Td(e),wd(n,e);let a=e.length;t.forEach(Td);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,wd(n,t[l]);let o=t_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Td(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Zo=class i extends $o{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var La=class i extends fi{constructor(e=new Yr([new He(0,.5),new He(-.5,-.5),new He(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Cn(s,3)),this.setAttribute("normal",new Cn(r,3)),this.setAttribute("uv",new Cn(a,2));function c(u){let m=s.length/3,p=u.extractPoints(t),f=p.shape,x=p.holes;_a.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,g=x.length;y<g;y++){let S=x[y];_a.isClockWise(S)===!0&&(x[y]=S.reverse())}let b=_a.triangulateShape(f,x);for(let y=0,g=x.length;y<g;y++){let S=x[y];f=f.concat(S)}for(let y=0,g=f.length;y<g;y++){let S=f[y];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let y=0,g=b.length;y<g;y++){let S=b[y],v=S[0]+m,A=S[1]+m,B=S[2]+m;n.push(v,A,B),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return x_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function x_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Qi=class i extends fi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],m=new k,p=new k,f=[],x=[],b=[],y=[];for(let g=0;g<=n;g++){let S=[],v=g/n,A=0;g===0&&a===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let B=0;B<=t;B++){let D=B/t;m.x=-e*Math.cos(s+D*r)*Math.sin(a+v*o),m.y=e*Math.cos(a+v*o),m.z=e*Math.sin(s+D*r)*Math.sin(a+v*o),x.push(m.x,m.y,m.z),p.copy(m).normalize(),b.push(p.x,p.y,p.z),y.push(D+A,1-v),S.push(c++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let v=u[g][S+1],A=u[g][S],B=u[g+1][S],D=u[g+1][S+1];(g!==0||a>0)&&f.push(v,A,D),(g!==n-1||l<Math.PI)&&f.push(A,B,D)}this.setIndex(f),this.setAttribute("position",new Cn(x,3)),this.setAttribute("normal",new Cn(b,3)),this.setAttribute("uv",new Cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zn=class extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function vo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function __(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $r=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wc=class extends $r{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Au,endingEnd:Au}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ru:r=e,o=2*t-n;break;case Cu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ru:a=e,l=2*n-t;break;case Cu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,p=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),b=x*x,y=b*x,g=-p*y+2*p*b-p*x,S=(1+p)*y+(-1.5-2*p)*b+(-.5+p)*x+1,v=(-1-f)*y+(1.5+f)*b+.5*x,A=f*y-f*b;for(let B=0;B!==o;++B)r[B]=g*a[u+B]+S*a[c+B]+v*a[l+B]+A*a[m+B];return r}},Xc=class extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),m=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*m+a[l+p]*u;return r}},qc=class extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vo(t,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vo(e.times,Array),values:vo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bo:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case Ol:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return Ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&__(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ol,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,p=m-n,f=m+n;for(let x=0;x!==n;++x){let b=t[m+x];if(b!==t[p+x]||b!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[m+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Yi.prototype.TimeBufferType=Float32Array;Yi.prototype.ValueBufferType=Float32Array;Yi.prototype.DefaultInterpolation=So;var rr=class extends Yi{};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=bo;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends Yi{};Yc.prototype.ValueTypeName="color";var $c=class extends Yi{};$c.prototype.ValueTypeName="number";var Kc=class extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Ns.slerpFlat(r,0,a,c-o,a,c,l);return r}},Da=class extends Yi{InterpolantFactoryMethodLinear(e){return new Kc(this.times,this.values,this.getValueSize(),e)}};Da.prototype.ValueTypeName="quaternion";Da.prototype.DefaultInterpolation=So;Da.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends Yi{};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=bo;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends Yi{};Zc.prototype.ValueTypeName="vector";var Jc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,p=c.length;m<p;m+=2){let f=c[m],x=c[m+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null}}},v_=new Jc,jc=class{constructor(e){this.manager=e!==void 0?e:v_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jo=class extends li{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var uc=new kn,Ad=new k,Rd=new k,Qc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new kn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Kn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ad),Rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rd),t.updateMatrixWorld(),uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var eh=class extends Qc{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jo=class extends Jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(li.DEFAULT_UP),this.updateMatrix(),this.target=new li,this.shadow=new eh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qo=class extends Jo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ch="\\[\\]\\.:\\/",M_=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",b_="[^"+ch.replace("\\.","")+"]",S_=/((?:WC+[\/:])*)/.source.replace("WC",hh),E_=/(WCOD+)?/.source.replace("WCOD",b_),T_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),w_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),A_=new RegExp("^"+S_+E_+T_+w_+"$"),R_=["material","materials","bones","map"],th=class{constructor(e,t,n){let s=n||Mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(M_,"")}static parseTrackName(e){let t=A_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);R_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mn.Composite=th;Mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mn.prototype.GetterByBindingType=[Mn.prototype._getValue_direct,Mn.prototype._getValue_array,Mn.prototype._getValue_arrayElement,Mn.prototype._getValue_toArray];Mn.prototype.SetterByBindingTypeAndVersioning=[[Mn.prototype._setValue_direct,Mn.prototype._setValue_direct_setNeedsUpdate,Mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_array,Mn.prototype._setValue_array_setNeedsUpdate,Mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_arrayElement,Mn.prototype._setValue_arrayElement_setNeedsUpdate,Mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_fromArray,Mn.prototype._setValue_fromArray_setNeedsUpdate,Mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G_=new Float32Array(1);var el=class{constructor(e,t,n=0,s=1/0){this.ray=new Sa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return nh(e,this,n,t),n.sort(Cd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)nh(e[s],this,n,t);return n.sort(Cd),n}};function Cd(i,e){return i.distance-e.distance}function nh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)nh(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);var uh=35,dh=25,fh=.29,gt=.95,jn=.35,ps=200,Ei=7,Fs=300,ms=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function P_(i){let e=typeof i=="string"?I_(i):i>>>0;return function(){e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t=(t^t>>>7)>>>0,t/4294967296}}function I_(i){let e=0;for(let t=0;t<i.length;t++)e=Math.imul(31,e)+i.charCodeAt(t),e=e>>>0;return e}var L_=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],of=[],rl={tank:["knight","berserker","werewolf","ghoul"],melee:["samurai","assassin","ninja","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["ranger","hunter","alchemist"],caster:["mage","witch","vampire","necromancer"]},Ua={tank:2,melee:2,support:1,ranged:1,caster:1};function D_(i){let e=Math.max(1,i),t=Object.keys(Ua),n=t.reduce((l,c)=>l+(Ua[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(Ua[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(Ua[c]??0)-(Ua[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var Qe={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Ti=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist","vampire","necromancer"];of=[...Ti];function U_(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Jt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:8},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:6,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:11,range:5},vampire:{name:"Vampire",gender:"female",hp:18,maxHp:18,mp:16,maxMp:16,str:11,agi:12,vit:3,dex:4,luk:3,int:12,range:1},necromancer:{name:"Necromancer",gender:"male",hp:20,maxHp:20,mp:20,maxMp:20,str:5,agi:4,vit:7,dex:3,luk:11,int:15,range:1}},ks={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331},vampire:{primary:16704468,secondary:16704468,hair:1250066,cape:1250066,apron:1250066},necromancer:{primary:405028,secondary:405028,hair:7434350,cape:405028,belt:11372065}},Jr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp",vampire:"https://files.idyllic.app/files/static/2567599?width=256&optimizer=image",necromancer:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k"},es=Ti.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function N_(i,e){ms&&(Ti.includes(i)&&es[i]&&es[i].kills++,Ti.includes(e)&&es[e]&&es[e].deaths++)}function O_(i,e){if(!ms)return;for(let n of i)!n||!es[n.class]||(es[n.class].battles++,e!=null&&(n.player===e?es[n.class].wins++:es[n.class].losses++));let t=Ti.map(n=>{let s=es[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var jr={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:7,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain",type:"spell"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:5,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:5,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex",type:"spell"},{name:"Drain",description:"Deal INT-based damage to HP and MP and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement",type:"spell"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 3 turns.",cost:5,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}],vampire:[{name:"Gaze",description:"Reduce target's AGI and VIT by 1 for 3 turns",cost:5,target:"enemy",range:4,level:2,effectKey:"gaze",type:"spell"},{name:"Blood Suck",description:"Absorb enemy HP based on your MP",cost:7,target:"enemy",range:1,level:3,effectKey:"bloodSuck"}],necromancer:[{name:"Debilitate",description:"Steal target's 2 HP and 2 VIT for 2 turns",cost:5,target:"enemy",range:5,level:1,effectKey:"debilitate",type:"spell"},{name:"Reanimate",description:"Resurrect dead unit to your control",cost:10,target:"self",range:0,level:2,effectKey:"reanimate"}]};function Pe(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function Bi(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0,r=String(t);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}function Na(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,f=>f.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,f=>f.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",u=null,m=(f,x,b,y)=>{if(b)f.hp=Math.min(f.maxHp,f.hp+x),n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,`+${x}`,!1,"heal");else{let g=f===s,S=!0;if(!g&&!y){let v=Pe(f,"agi")*.7+Pe(f,"luk")*.3;S=Math.random()*Math.max(.001,v)<=Pe(s,"dex")}return S?(f.hp=Math.max(0,f.hp-x),f!==s&&(u=x),n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,String(x),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(f),f.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(f,s)):n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,"MISS",!0),S}},p=(f,x,b,y)=>{n.showFloatingCombatText&&n.showFloatingCombatText(f,x,b,!1,y?"buff":"debuff")};switch(i){case"brave":s.tempBuff={vit:3,duration:3},p(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let f=2,x=1;r.str=Math.max(1,(r.str||0)-f),s.str=(s.str||0)+f,r.vit=Math.max(1,(r.vit||0)-x),s.vit=(s.vit||0)+x,p(r.x,r.y,`-${f} STR and -${x} VIT`,!1),p(s.x,s.y,`+${f} STR and +${x} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let f=Math.max(1,Math.ceil(Pe(s,"int")-(Pe(r,"int")*.7+Pe(r,"luk")*.2)));m(r,f,!1,!0)}break;case"manaDrain":if(r){let f=Math.max(1,Math.floor(Pe(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-f),s.mp=(s.mp||0)+f,p(r.x,r.y,`-${f} MP`,!1),p(s.x,s.y,`+${f} MP`,!0)}break;case"mantra":if(r){let f=Math.max(1,Math.floor(Pe(s,"int")*.3));s.tempBuff={int:f,duration:3},p(s.x,s.y,`+${f} LUK`,!0),r.tempBuff={luk:f,duration:3},p(r.x,r.y,`+${f} LUK`,!0)}break;case"chakra":{if(m(s,Math.max(1,Math.floor(Pe(s,"int")*.3+Pe(s,"luk")*.15)),!0),!r)break;m(r,Math.max(1,Math.floor(Pe(s,"int")*.3+Pe(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let f=1;r.vit=Math.max(1,(r.vit||0)-f),s.vit=(s.vit||0)+f,p(r.x,r.y,`-${f} VIT`,!1),p(s.x,s.y,`+${f} VIT`,!0)}break;case"feast":{if(!r)break;let f=Math.max(1,Math.floor(Pe(s,"str")*.7-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));m(r,f,!1)&&m(s,f,!0)}break;case"impale":{if(!r)break;let f=2;r.tempDebuff={agi:f,duration:3},p(r.x,r.y,`-${f} AGI`,!1)}break;case"pierce":{if(!r)break;let f=Math.max(1,Math.floor(Pe(s,"str")*.6));m(r,f,!1)}break;case"focus":s.tempBuff={dex:3,duration:3},p(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let f=Math.max(1,Math.floor(Pe(s,"dex")*.7-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));m(r,f,!1)}break;case"cripple":{if(!r)break;let f=1;r.agi=Math.max(1,(r.agi||0)-f),s.agi=(s.agi||0)+f,p(r.x,r.y,`-${f} AGI`,!1),p(s.x,s.y,`+${f} AGI`,!0)}break;case"execute":if(r){let f=Math.max(1,Math.floor(Pe(s,"agi")*.8-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));m(r,f,!1)}break;case"berserk":r&&(m(r,Math.max(1,Math.floor(Pe(s,"str")*.8-Pe(r,"vit")*.3+Pe(r,"luk")*.2)),!1),m(s,3,!1));break;case"bloodlust":{let f=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff={str:f,vit:f,duration:2},p(s.x,s.y,`+${f} STR, +${f} VIT`,!0)}break;case"hex":{if(!r)break;let f=1;r.int=Math.max(1,(r.int||0)-f),s.int=(s.int||0)+f,p(r.x,r.y,`-${f} INT`,!1),p(s.x,s.y,`+${f} INT`,!0)}break;case"drain":{if(!r)break;let f=Math.max(1,Math.ceil(Pe(s,"int")*.6-(Pe(r,"int")*.4+Pe(r,"luk")*.2))),x=Math.max(1,Math.ceil(Pe(s,"int")*.2-(Pe(r,"int")*.4+Pe(r,"luk")*.2)));m(r,f,!1,!0),m(s,x,!0),p(r.x,r.y,`-${x} MP`,!1),p(s.x,s.y,`+${x} MP`,!0)}break;case"blind":{if(!r)break;let f=1;r.dex=Math.max(1,(r.dex||0)-f),s.dex=(s.dex||0)+f,p(r.x,r.y,`-${f} DEX`,!1),p(s.x,s.y,`+${f} DEX`,!0)}break;case"shuriken":{if(!r)break;let f=Math.max(1,Math.floor(Pe(s,"dex")*.7-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));m(r,f,!1)}break;case"iaido":s.tempBuff={str:1,dex:1,duration:3},p(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let f=Math.max(1,Math.floor(Pe(s,"str")*.4+Pe(s,"dex")*.4-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));m(r,f,!1)}break;case"bite":{if(!r)break;let f=Math.max(1,Math.floor(Pe(s,"str")*.7+Pe(s,"agi")*.1-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));m(r,f,!1)}break;case"howl":s.tempBuff={str:2,agi:2,duration:3},p(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let f=Math.max(1,Math.floor(Pe(s,"int")*.5));m(r,f,!0),m(s,3,!1)}break;case"judgement":{if(!r)break;let f=Math.max(1,Math.floor(s.maxHp-s.hp-(Pe(r,"int")*.2+Pe(r,"luk")*.1)));m(r,f,!1,!0)}break;case"sanctuary":s.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},r.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),p(s.x,s.y,"+1 ALL STATS",!0),p(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let f=Math.max(1,Math.floor(r.maxHp-r.hp-(Pe(r,"int")*.2+Pe(r,"luk")*.1)));m(r,f,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,p(r.x,r.y,"-2 LUK",!1),p(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let f=Math.max(1,Math.floor(Pe(s,"luk")*.8-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));m(r,f,!1)}break;case"windWalk":s.tempBuff={agi:3,duration:3},p(s.x,s.y,"+3 AGI",!0);break;case"powerShot":{if(!r)break;let f=Math.max(1,Math.floor(Pe(s,"dex")*.6-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));if(m(r,f,!1)&&n.world&&n.units&&n.updateUnitPosition){let b=Math.max(1,Math.floor(f*.2)),y=k_(n.world,n.units,s,r,b),g=r.x,S=r.y;r.x=y.newGx,r.y=y.newGy,y.collisionDamage>0?(console.log("[KNOCKBACK]",`${y.collisionDamage} dmg to ${r.name}`),n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),m(r,y.collisionDamage,!1),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)):n.animateKnockback?n.animateKnockback(r,g,S,y.newGx,y.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r))}}break;case"forge":s.tempBuff={str:2,duration:3},r.tempBuff={str:2,duration:3},p(s.x,s.y,"+2 STR",!0),p(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff={str:3,vit:3,duration:3},r.tempBuff={str:3,vit:3,duration:3},p(s.x,s.y,"+3 STR, +3 VIT",!0),p(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let f=Math.max(1,Math.floor(Pe(r,"luk")*.3));r.tempDebuff={poison:f,duration:3},p(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let f=Math.max(1,Math.floor(Pe(s,"int")*.8-(Pe(r,"int")*.4+Pe(r,"luk")*.2)));m(r,f,!1,!0);let x=Math.max(1,Math.floor(f*.5));s.luk=Math.max(1,(s.luk||0)+x),p(s.x,s.y,`+${x} LUK`,!0)}break;case"gaze":{if(!r)break;let f=1;r.tempDebuff={agi:f,vit:f,duration:4},p(r.x,r.y,`-${f} AGI, -${f} VIT`,!1)}break;case"bloodSuck":{if(!r)break;let f=Math.max(1,Math.floor(s.mp*.6+Pe(s,"int")*.6-(r.hp*.2+Pe(r,"luk")*.1)));m(r,f,!1,!0)&&m(s,f,!0)}break;case"debilitate":{if(!r)break;let f=2;r.tempDebuff={hp:f,vit:f,duration:3},s.tempBuff={hp:f,vit:f,duration:3},p(r.x,r.y,`-${f} HP, -${f} VIT`,!1),p(s.x,s.y,`+${f} HP, +${f} VIT`,!0)}break;case"reanimate":{if(!n.units||!n.reanimateDeadUnit)break;let f=n.units.filter(g=>g.hp<=0);if(f.length===0)break;let x=f.filter(g=>g.player===s.player),y=(x.length>0?x:f).reduce((g,S)=>{let v=g.deathOrder??0;return(S.deathOrder??0)>=v?S:g});n.reanimateDeadUnit(s,y)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,u!=null?`| ${u} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function tf(i){let e=uh,t=dh,n=Array.from({length:t},()=>Array(e).fill(!1)),s=Array.from({length:t},()=>Array(e).fill(0)),r=Array.from({length:t},()=>Array(e).fill(Qe.GRASS)),a=i!=null?P_(i):()=>Math.random(),o=Math.floor(e/2),l=Math.floor(t/2),c=o,u=0,m=o,p=t-1,f=2,x=3;function b(z,G,Z,ae){let le=ae;for(let ue=G;ue<=Z;ue++)if(!(ue<0||ue>=t))for(let Ae=-f;Ae<=f;Ae++){let j=le+Ae;j<0||j>=e||(n[ue][j]=!0,r[ue][j]=z,s[ue][j]=1)}}b(Qe.BASE_TOP,u,u+x-1,c),b(Qe.BASE_BOTTOM,p-x+1,p,m),b(Qe.CENTER,l-1,l+1,o);let y=new Set,g=(z,G)=>Math.abs(z-o)<=2&&Math.abs(G-l)<=1,S=(z,G)=>{z<0||z>=e||G<0||G>=t||g(z,G)||y.add(G*e+z)},v=Math.floor(e/2),A=Math.floor(t/2),B=Math.min(e,t)*fh,D=Math.max(60,(t+e)*2);for(let z=0;z<2;z++){let G=z===0?v-B:v+B,Z=z===0?Math.PI/2:-Math.PI/2,ae=z===0?Math.PI*3/2:Math.PI/2;for(let le=0;le<=D;le++){let ue=le/D,Ae=Z+ue*(ae-Z),j=G+B*Math.cos(Ae),de=A+B*Math.sin(Ae),Te=Math.round(j),ke=Math.round(de);S(Te,ke),S(Te+1,ke),S(Te-1,ke),S(Te,ke+1),S(Te,ke-1)}}let U=[[0,1],[0,-1],[1,0],[-1,0]];for(let z=0;z<1;z++){let G=[];y.forEach(Z=>{let ae=Z%e,le=Z/e|0;for(let[ue,Ae]of U){let j=ae+ue,de=le+Ae;if(j<0||j>=e||de<0||de>=t)continue;let Te=de*e+j;y.has(Te)||G.push(Te)}}),G.forEach(Z=>y.add(Z))}y.forEach(z=>{let G=z%e,Z=z/e|0;r[Z][G]===Qe.BASE_TOP||r[Z][G]===Qe.BASE_BOTTOM||r[Z][G]===Qe.CENTER||(n[Z][G]=!0,r[Z][G]=Qe.PATH,s[Z][G]=1)});let $=Math.round(v-B*1.6),T=Math.round(v+B*1.6),R=Math.round(v-B),K=Math.round(v+B),ce=1;for(let z=l-ce;z<=l+ce;z++)if(!(z<0||z>=t))for(let G=$;G<=T;G++)G<0||G>=e||(n[z][G]=!0,r[z][G]!==Qe.CENTER&&r[z][G]!==Qe.BASE_TOP&&r[z][G]!==Qe.BASE_BOTTOM&&(r[z][G]=Qe.PATH),s[z][G]=Math.max(s[z][G],1));function Me(z,G,Z,ae){let le=Math.max(1,Math.min(z,G)),ue=Math.min(t-2,Math.max(z,G)),Ae=Math.max(1,Math.min(Z,ae)),j=Math.min(e-2,Math.max(Z,ae));for(let de=le;de<=ue;de++)for(let Te=Ae;Te<=j;Te++)r[de][Te]===Qe.BASE_TOP||r[de][Te]===Qe.BASE_BOTTOM||r[de][Te]===Qe.CENTER||(n[de][Te]=!0,r[de][Te]=Qe.PATH,s[de][Te]=1)}let F=3,Y=3;Me(u,u+F-1,R,c-1),Me(u,u+F-1,c+1,K),Me(p-Y+1,p,R,m-1),Me(p-Y+1,p,m+1,K),b(Qe.BASE_TOP,u,u+x-1,c),b(Qe.BASE_BOTTOM,p-x+1,p,m),b(Qe.CENTER,l-1,l+1,o);for(let z=0;z<t;z++)for(let G=0;G<e;G++){if(n[z][G]||r[z][G]===Qe.BASE_TOP||r[z][G]===Qe.BASE_BOTTOM||r[z][G]===Qe.CENTER)continue;let Z=Math.abs(G-c)<=4&&Math.abs(z-u)<=3,ae=Math.abs(G-m)<=4&&Math.abs(z-p)<=3,le=Z||ae,ue=a();ue<.55&&!le?(r[z][G]=Qe.TREE,s[z][G]=1+Math.floor(a()*2)):ue<.75||le&&ue<.5?(r[z][G]=Qe.WATER,s[z][G]=0):(r[z][G]=Qe.ROCK,s[z][G]=1+Math.floor(a()*2))}return{w:e,h:t,path:n,height:s,type:r,topBaseX:c,topBaseY:u,botBaseX:m,botBaseY:p}}function B_(i,e,t){let n=e===1?Qe.BASE_BOTTOM:Qe.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function F_(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===Qe.CENTER&&e.push({gx:n,gy:t});return e}function nf(i,e){let t=F_(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function zs(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===Qe.TREE||n===Qe.WATER||n===Qe.ROCK)}function k_(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,u=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&u===0)return{newGx:r,newGy:a,collisionDamage:0};let m=0;for(let p=0;p<s;p++){let f=r+c,x=a+u,b=f<0||f>=i.w||x<0||x>=i.h,y=!zs(i,f,x),g=e.some(S=>S.hp>0&&S.id!==n.id&&S.x===f&&S.y===x);if(b||y||g){let S=Math.max(1,m*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:S}}r=f,a=x,m++}return{newGx:r,newGy:a,collisionDamage:0}}function H_(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),u=Math.abs(l-a),m=r<o?1:-1,p=a<l?1:-1,f=c-u;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*f;x>-u&&(f-=u,r+=m),x<c&&(f+=c,a+=p)}return s}function or(i,e,t,n,s){let r=H_(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!zs(i,o.x,o.y))return!1}return!0}function al(i,e,t,n,s,r){let a=(p,f)=>f*i.w+p,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],u=s!=null&&r!=null,m=u?new Set(s.filter(p=>p.hp>0&&p.player!==r.player).map(p=>p.y*i.w+p.x)):null;for(;l.length;){let{x:p,y:f,d:x}=l.shift();if(!(x>=n))for(let[b,y]of c){let g=p+b,S=f+y;if(!zs(i,g,S)||u&&m.has(a(g,S)))continue;let v=a(g,S);if(o.has(v))continue;let A=x+1;o.set(v,A),l.push({x:g,y:S,d:A})}}return o}function sf(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let c=o;c<=l;c++)for(let u=r;u<=a;u++){let m=Math.abs(u-e)+Math.abs(c-t);m>=1&&m<=n&&s.set(c*i.w+u,m)}return s}function Hs(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(f,x)=>x*i.w+f,l=new Set(r.filter(f=>f.hp>0&&f.player!==a.player).map(f=>f.y*i.w+f.x)),c=new Map,u=[{x:e,y:t}];c.set(o(e,t),null);let m=[[0,1],[0,-1],[1,0],[-1,0]];function p(f,x){return zs(i,f,x)?!l.has(o(f,x)):!1}for(;u.length;){let{x:f,y:x}=u.shift();if(f===n&&x===s){let b=[],y={x:n,y:s};for(;y;)b.unshift(y),y=c.get(o(y.x,y.y));return b}for(let[b,y]of m){let g=f+b,S=x+y,v=o(g,S);c.has(v)||p(g,S)&&(c.set(v,{x:f,y:x}),u.push({x:g,y:S}))}}return null}var rf={[Qe.PATH]:2976557,[Qe.GRASS]:2968109,[Qe.TREE]:1719578,[Qe.WATER]:1989278,[Qe.ROCK]:4872778,[Qe.BASE_TOP]:8014410,[Qe.BASE_BOTTOM]:4872826,[Qe.CENTER]:13940810};function ph(i){return i.w*gt/2}function mh(i){return i.h*gt/2}function lf(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new Go(e);return r.wrapS=r.wrapT=va,r.repeat.set(4,4),r.needsUpdate=!0,r}function af(i){let e=new Si,t=ph(i),n=mh(i),s=new Vn(gt,jn,gt),r=lf(64),a=.88,o=.02,l=[];function c(p,f,x,b,y){let g=new Zn({color:3828266,roughness:.9});g.bumpMap=r,g.bumpScale=.12;for(let S=0;S<b;S++){let v=.08+Math.random()*y,A=.03+Math.random()*.03,B=new Ye(new Bs(A*.5,A,v,6),g);B.position.set(p+(Math.random()-.5)*.5,x+v/2,f+(Math.random()-.5)*.5),B.rotation.x=(Math.random()-.5)*.2,B.rotation.z=(Math.random()-.5)*.2,B.castShadow=!0,e.add(B)}}let u=.12;function m(p,f,x,b){let y=x+.02,g=[[p-u,y,f-u],[p+u,y,f+u],[p-u,y,f+u],[p+u,y,f-u],[p-u+.06,y,f-u+.06],[p+u-.06,y,f+u-.06],[p-u+.06,y,f+u-.06],[p+u-.06,y,f-u+.06]],S=new Float32Array(g.length*3);g.forEach((D,U)=>{S[U*3]=D[0],S[U*3+1]=D[1],S[U*3+2]=D[2]});let v=new fi;v.setAttribute("position",new di(S,3)),v.computeBoundingSphere();let A=new Aa({color:855309,linewidth:1}),B=new Vo(v,A);b.add(B)}for(let p=0;p<i.h;p++)for(let f=0;f<i.w;f++){let x=i.type[p][f],b=i.height[p][f],y=rf[x],g=jn+b*.35,S=g/2+jn/2,v=new Zn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),A=(y>>16&255)/255,B=(y>>8&255)/255,D=(y&255)/255,U=A,$=B,T=D;if(x===Qe.PATH||x===Qe.TREE||x===Qe.ROCK){let G=Math.random()*.45;U=A*(1-G)+.42*G,$=B*(1-G)+.26*G,T=D*(1-G)+.14*G}(x===Qe.TREE||x===Qe.ROCK)&&(U*=.5,$*=.5,T*=.5);let R=1+(Math.random()-.5)*.12;v.color.setRGB(Math.min(1,U*R),Math.min(1,$*R),Math.min(1,T*R)),v.bumpMap=r,v.bumpScale=.12;let K=new Ye(s,v);K.position.set(f*gt-t+gt/2,g/2,p*gt-n+gt/2),K.castShadow=!0,K.receiveShadow=!0,K.userData={gx:f,gy:p,type:x},e.add(K);let ce=f*gt-t+gt/2,Me=p*gt-n+gt/2;if(x===Qe.TREE&&m(ce,Me,S,e),x===Qe.TREE){let F=new Si;F.position.set(ce,S,Me);let Y=f===0||f===i.w-1||p===0||p===i.h-1,z=Y?.75+Math.random()*.35:.5+Math.random()*.2,G=new xt(4007959),Z=()=>1+(Math.random()-.5)*.4;G.r=Math.min(1,Math.max(0,G.r*Z())),G.g=Math.min(1,Math.max(0,G.g*Z())),G.b=Math.min(1,Math.max(0,G.b*Z()));let ae=.85+Math.random()*.2,le=new Zn({color:G,roughness:ae});le.bumpMap=r,le.bumpScale=.1+Math.random()*.12;let ue=new Ye(new Bs(.12,.14,z,8),le);ue.position.set(0,z/2,0),ue.castShadow=!0,ue.raycast=function(){},F.add(ue);let Ae=r.clone();Ae.repeat.set(3,3);let j=new xt(2972205),de=()=>1+(Math.random()-.5)*.44;j.r=Math.min(1,Math.max(0,j.r*de())),j.g=Math.min(1,Math.max(0,j.g*de())),j.b=Math.min(1,Math.max(0,j.b*de()));let Te=.78+Math.random()*.24,ke=new Zn({color:j,roughness:Te});ke.bumpMap=Ae,ke.bumpScale=.16+Math.random()*.14;let We=Y?.52:.45,ht=Y?1.05:.9,dt=.12,Ke=ht*.5,oe=ht*.45,J=ht*.4,pn=new Ye(new qi(We,Ke,8),ke);pn.position.set(0,z+Ke/2,0),pn.castShadow=!0,pn.raycast=function(){},F.add(pn);let ve=new Ye(new qi(We*.75,oe,8),ke);ve.position.set(0,z+Ke-dt+oe/2,0),ve.castShadow=!0,ve.raycast=function(){},F.add(ve);let je=new Ye(new qi(We*.5,J,8),ke);je.position.set(0,z+Ke-dt+oe-dt+J/2,0),je.castShadow=!0,je.raycast=function(){},F.add(je),e.add(F),l.push(F)}else if(x===Qe.WATER){let F=rf[Qe.WATER],Y=(F>>16&255)/255,z=(F>>8&255)/255,G=(F&255)/255,Z=1+(Math.random()-.5)*.12,ae=new Zn({color:new xt().setRGB(Math.min(1,Y*Z),Math.min(1,z*Z),Math.min(1,G*Z)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),le=new Ye(new ji(gt,gt),ae);le.rotation.x=-Math.PI/2,le.position.set(ce,S+.02,Me),le.receiveShadow=!0,e.add(le)}else if(x===Qe.ROCK){let F=new Zn({color:6974058,roughness:.9});F.bumpMap=r,F.bumpScale=.2;let Y=(ae,le,ue)=>{let Ae=new Ye(new Ko(ae,0),F);Ae.position.set(ce+le,S+ae-.2,Me+ue),Ae.rotation.set(Math.random(),Math.random(),Math.random()),Ae.castShadow=!0,e.add(Ae)},z=.32+Math.random()*.14,G=.2+Math.random()*.12,Z=.12+Math.random()*.12;Y(z,(Math.random()-.5)*.15,(Math.random()-.5)*.15),Y(G,(Math.random()-.5)*.25,(Math.random()-.5)*.25),Y(Z,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function z_(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=tf(),t=document.getElementById("canvas-wrap"),n=new zo;n.background=new xt(1711652),n.fog=new Ho(1711652,30,90);let s=e.w*gt/2,r=e.h*gt/2,a=new oi(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,c=new k(12,38,16).normalize().multiplyScalar(o),u=new k,m=new k,p=new Gi(new k(0,1,0),0),f=new k,x=new k,b=!1,y=!1,g=!0,S=!1,v=null,A=5,B=.004,D=-Math.PI*.4,U=Math.PI*.4,$=new k,T={x:0,y:0},R=!1,K=1,ce=40,Me=.005,F=.15,Y=1,z=null,G=new Qo(16777215,.45);n.add(G);let Z=new jo(16774630,1.1);Z.position.set(30,50,20),Z.castShadow=!0,Z.shadow.mapSize.width=2048,Z.shadow.mapSize.height=2048,Z.shadow.camera.near=1,Z.shadow.camera.far=120,Z.shadow.camera.left=-50,Z.shadow.camera.right=50,Z.shadow.camera.top=50,Z.shadow.camera.bottom=-50,n.add(Z);let ae=af(e);n.add(ae);let le=new Map,ue=new Si;n.add(ue);let Ae={30:!1,20:!1,10:!1},j=["red","yellow","purple","blue","green"],de={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943},Te=.92;function ke(d,h,_){let I=(jn+e.height[_][h]*.35)/2+jn/2,P=new ji(Te,Te),O=new Pn({color:d,transparent:!0,opacity:.45,side:An}),N=new Ye(P,O);return N.rotation.x=-Math.PI/2,N.position.set(h*gt-ze+gt/2,I+.01,_*gt-Gt+gt/2),N}function We(d){let h=new Zo(.22,0),_=new Zn({color:d,metalness:.3,roughness:.4}),M=new Ye(h,_);return M.rotation.x=Math.PI/4,M.castShadow=!0,M.receiveShadow=!0,M}function ht(){let d=Math.floor(e.h/2),h=[];for(let _=0;_<e.w;_++){let M=d;if(e.type[M][_]!==Qe.PATH||oe.some(O=>O.hp>0&&O.x===_&&O.y===M))continue;let P=M*e.w+_;le.has(P)||h.push({gx:_,gy:M})}return h}function dt(d){let h=ht();if(h.length===0)return;let _=h[Math.floor(Math.random()*h.length)],M=j[Math.floor(Math.random()*j.length)],I=_.gy*e.w+_.gx,P=de[M],O=Oe(_.gx,_.gy);O.y+=.35;let N=We(P);N.position.copy(O),ue.add(N);let L=ke(P,_.gx,_.gy);ue.add(L),le.set(I,{type:M,mesh:N,glowMesh:L}),console.log("[POWERUP]",`turnsLeft: ${d}, type: ${M}, gx: ${_.gx}, gy: ${_.gy}`)}function Ke(d){let h=d.y*e.w+d.x,_=le.get(h);if(!_)return;let M=_.mesh;if(ue.remove(M),M.geometry.dispose(),M.material){let I=M.material;I.dispose&&I.dispose()}_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose()),le.delete(h),_.type==="green"?(d.hp=Math.min(d.maxHp,d.hp+6),si(d.x,d.y,"+6 HP",!1,"buff")):(_.type==="red"?d.tempBuff={str:4,duration:3}:_.type==="yellow"?d.tempBuff={agi:4,duration:3}:_.type==="purple"?d.tempBuff={int:4,duration:3}:_.type==="blue"&&(d.tempBuff={dex:4,duration:3}),si(d.x,d.y,`+4 ${_.type==="red"?"STR":_.type==="yellow"?"AGI":_.type==="purple"?"INT":"DEX"}`,!1,"buff")),et(d,()=>Xe(d))}let oe=[],J=1,pn=0,ve=new Map,je=lf(64),ze=ph(e),Gt=mh(e);function Oe(d,h){let M=(jn+e.height[h][d]*.35)/2+jn/2;return new k(d*gt-ze+gt/2,M,h*gt-Gt+gt/2)}function C(d,h){d==="short"&&(uh=27,dh=15,fh=.35,ps=100),n.remove(ae),ae.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(I=>I.dispose())}),ve.forEach(_=>{n.remove(_),_.traverse(M=>{M.geometry&&M.geometry.dispose(),M.material&&(Array.isArray(M.material)?M.material:[M.material]).forEach(P=>P.dispose())})}),ve.clear(),oe.length=0,J=1,pn=0,le.forEach(_=>{ue.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),le.clear(),Ae={30:!1,20:!1,10:!1},e=tf(typeof h<"u"?h:void 0),ze=ph(e),Gt=mh(e),ae=af(e),n.add(ae)}function E(){ve.forEach(d=>{n.remove(d),d.traverse(h=>{h.geometry&&h.geometry.dispose(),h.material&&(Array.isArray(h.material)?h.material:[h.material]).forEach(M=>M.dispose())})}),ve.clear(),oe.length=0,J=1,pn=0}function Q(d,h){let _=(d>>16&255)/255,M=(d>>8&255)/255,I=(d&255)/255,P=1+(Math.random()-.5)*h;return new xt(Math.min(1,_*P),Math.min(1,M*P),Math.min(1,I*P))}let Ee=.62;function _e(d,h){h=h??Ee;let _=d instanceof xt?d:new xt(d);return new xt(Math.max(0,_.r*h),Math.max(0,_.g*h),Math.max(0,_.b*h))}function we(d,h,_){let M=ks[h]||ks.knight,I=_e(Q(M.primary,.08)),P=_e(Q(M.secondary,.08)),O=Jt[h]&&Jt[h].gender||"male",N=_??4006676,L=_e(Q(M.skin!=null?M.skin:15250592,.06)),W=_e(Q(N,.08)),q=()=>(Math.random()-.5)*.08,fe=()=>(Math.random()-.5)*.04,V=new Zn({color:I,metalness:Math.max(0,.25+fe()),roughness:Math.max(.3,Math.min(1,.5+q()))});V.bumpMap=je,V.bumpScale=.1;let se=new Zn({color:P,metalness:Math.max(0,.2+fe()),roughness:Math.max(.3,Math.min(1,.55+q()))});se.bumpMap=je,se.bumpScale=.1;let ye=new Zn({color:I,metalness:Math.max(0,.25+fe()),roughness:Math.max(.3,Math.min(1,.5+q()))});ye.bumpMap=je,ye.bumpScale=.1;let xe=new Zn({color:L,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+q()))});xe.bumpMap=je,xe.bumpScale=.05;let Re=new Si,Be=.28,it=.08,vt=.08,rt=new Ye(new Vn(it,Be,vt),se);rt.position.set(-.06,Be/2,0),rt.castShadow=!0,Re.add(rt);let _n=new Ye(new Vn(it,Be,vt),se);_n.position.set(.06,Be/2,0),_n.castShadow=!0,Re.add(_n);let Kt=.28,Zt=.2,yn=.12,En=new Ye(new Vn(Zt,Kt,yn),V);En.position.set(0,Be+Kt/2,0),En.castShadow=!0,Re.add(En);let Ut=.06,tn=.22,Ft=.06,It=new Ye(new Vn(Ut,tn,Ft),ye);It.position.set(-(Zt/2+Ut/2),Be+Kt-.08,0),It.castShadow=!0,Re.add(It);let Xt=new Ye(new Vn(Ut,tn,Ft),ye);if(Xt.position.set(Zt/2+Ut/2,Be+Kt-.08,0),Xt.castShadow=!0,Re.add(Xt),M.cape!=null){let ct=Zt*1.95,Dt=ct*.6,re=Be+Kt*.28,ge=new Yr;ge.moveTo(-Dt/2,re/2),ge.lineTo(Dt/2,re/2),ge.lineTo(ct/2,-re/2),ge.lineTo(-ct/2,-re/2),ge.closePath();let pe=new La(ge),ne=new Zn({color:_e(Q(M.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+q())),side:An});ne.bumpMap=je,ne.bumpScale=.12;let he=new Ye(pe,ne);he.position.set(0,Be+Kt-re/2+.05,-yn/2-.02),he.rotation.y=Math.PI,he.castShadow=!0,Re.add(he);let Se=.055,me=Be+Kt+.02,Ce=.02,Rt=Zt/2+Ut*.5,bt=new Ye(new Qi(Se,10,8,0,Math.PI*2,0,Math.PI*.55),ne.clone());bt.position.set(-Rt,me,Ce),bt.rotation.x=-Math.PI*.35,bt.rotation.z=Math.PI*.5,bt.scale.set(1.2,.85,1.1),bt.castShadow=!0,Re.add(bt);let vn=new Ye(new Qi(Se,10,8,0,Math.PI*2,0,Math.PI*.55),ne.clone());vn.position.set(Rt,me,Ce),vn.rotation.x=-Math.PI*.35,vn.rotation.z=-Math.PI*.5,vn.scale.set(1.2,.85,1.1),vn.castShadow=!0,Re.add(vn)}if(M.belt!=null){let ct=new Zn({color:_e(Q(M.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+q()))});ct.bumpMap=je,ct.bumpScale=.1;let Dt=.022,re=.04,ge=new Ye(new Vn(Zt+.04,Dt,yn+re),ct);ge.position.set(0,Be+.04,0),ge.castShadow=!0,Re.add(ge)}if(M.apron!=null){let ct=new Zn({color:_e(Q(M.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+q())),side:An});ct.bumpMap=je,ct.bumpScale=.12;let Dt=Zt*.95,re=Be*.85,ge=new Ye(new ji(Dt,re),ct),pe=Be+.2;ge.position.set(0,pe-re/2,yn/2+.02),ge.castShadow=!0,Re.add(ge);let ne=Be+Kt+.02,he=Zt/2+Ut*.2,Se=.018,me=.008,Ce=ne-pe,Rt=new Ye(new Vn(Se,Ce,me),ct.clone());Rt.position.set(-he,(pe+ne)/2,yn/2+.015),Rt.castShadow=!0,Re.add(Rt);let bt=new Ye(new Vn(Se,Ce,me),ct.clone());bt.position.set(he,(pe+ne)/2,yn/2+.015),bt.castShadow=!0,Re.add(bt)}let lt=.1,Mt=new Ye(new Qi(lt,12,10),xe);Mt.position.set(0,Be+Kt+lt,0),Mt.castShadow=!0,Re.add(Mt);let en=new Pn({color:1710638}),Tn=new Ye(new Vn(.032,.004,.004),en);Tn.position.set(-.032,.028,lt*.92),Mt.add(Tn);let wn=new Ye(new Vn(.032,.004,.004),en);wn.position.set(.032,.028,lt*.92),Mt.add(wn);let zn=new Pn({color:2957087}),_i=new Ye(new Vn(.045,.012,.008),zn);_i.position.set(0,-.028,lt*.92),Mt.add(_i);let dn=new Zn({color:W,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+q()))});dn.bumpMap=je,dn.bumpScale=.15;let Ii=ct=>{let Dt=lt*.32,re=lt*.22,ge=new Ye(new qi(re*.9,Dt,5),dn);ge.position.set(-lt*.25,lt*.22,lt*.72),ge.rotation.x=.35,ge.rotation.z=.12,ge.castShadow=!0,ct.add(ge);let pe=new Ye(new qi(re,Dt,5),dn);pe.position.set(lt*.28,lt*.18,lt*.68),pe.rotation.x=.28,pe.rotation.z=-.1,pe.castShadow=!0,ct.add(pe);let ne=new Ye(new qi(re*.7,Dt*.9,5),dn);ne.position.set(0,lt*.28,lt*.78),ne.rotation.x=.4,ne.castShadow=!0,ct.add(ne)};if(O==="female"){let ct=new Ye(new Qi(lt*.92,12,10,0,Math.PI*2,0,Math.PI*.52),dn);ct.position.set(0,lt*.28,-lt*.18),ct.rotation.y=.06,ct.rotation.x=-.04,ct.castShadow=!0,Mt.add(ct);let Dt=new Ye(new Vn(lt*1.15,lt*2.2,lt*.55),dn);Dt.position.set(0,-lt*.6,-lt*.95),Dt.rotation.z=.03,Dt.castShadow=!0,Mt.add(Dt),Ii(Mt)}else{let ct=new Ye(new Qi(lt*.9,12,10,0,Math.PI*2,0,Math.PI*.5),dn);ct.position.set(0,lt*.4,-lt*.12),ct.rotation.y=.08,ct.rotation.x=-.05,ct.rotation.z=.04,ct.castShadow=!0,Mt.add(ct);let Dt=new Ye(new Qi(lt*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),dn);Dt.position.set(0,lt*.1,-lt*.05),Dt.rotation.y=.1,Dt.castShadow=!0,Mt.add(Dt),Ii(Mt)}return Re.userData.leftLeg=rt,Re.userData.rightLeg=_n,Re.userData.leftArm=It,Re.userData.rightArm=Xt,Re}function $e(d,h){let _=d.userData;if(!_.leftLeg)return;let M=h*Math.PI*2,I=.35,P=.28;_.leftLeg.rotation.x=Math.sin(M)*I,_.rightLeg.rotation.x=Math.sin(M+Math.PI)*I,_.leftArm.rotation.y=Math.sin(M+Math.PI)*P,_.rightArm.rotation.y=Math.sin(M)*P}function Ne(d){let h=d.userData;h.leftLeg&&(h.leftLeg.rotation.x=0,h.rightLeg.rotation.x=0,h.leftArm.rotation.y=0,h.rightArm.rotation.y=0)}function Ve(d){let h=we(d.player,d.class,d.hairColor);h.position.copy(Oe(d.x,d.y)),h.castShadow=!0,h.userData.unitId=d.id;let _=.28,M=.28,I=.12,P=.18,O=.04,N=new ji(P,O),L=new Pn({color:6037528,side:An,depthTest:!0,depthWrite:!1}),W=new Ye(N,L);W.position.set(0,_+M/2,I/2+.02),W.rotation.x=-Math.PI/2,W.rotation.z=Math.PI/4,W.visible=d.maxHp>0&&d.hp<d.maxHp&&d.hp>0,h.add(W),h.userData.slashMark=W,n.add(h),ve.set(d.id,h),qt(h,d.maxHp>0&&d.hp/d.maxHp<.35)}function Xe(d){let h=ve.get(d.id);!h||!h.userData.slashMark||(h.userData.slashMark.visible=d.maxHp>0&&d.hp<d.maxHp&&d.hp>0)}function Tt(d){d.traverse(_=>{if(!_.isMesh||!_.material)return;let M=_.material;if(M.color){let I=M.color.r,P=M.color.g,O=M.color.b,N=.2126*I+.7152*P+.0722*O,L=Math.max(0,Math.min(1,N*.55));M.color.setRGB(L,L,L)}})}let be=.35;function qt(d,h){if(d)if(h){d.rotation.x=.35,d.scale.setScalar(.96);let _=d.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=.2,_.rightArm.rotation.y=.2),d.traverse(M=>{M.isMesh&&M.material&&M.material.color&&(M.userData.originalColor||(M.userData.originalColor=M.material.color.clone()),M.material.color.copy(M.userData.originalColor).multiplyScalar(.82))})}else{d.rotation.x=0,d.scale.setScalar(1);let _=d.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=0,_.rightArm.rotation.y=0),d.traverse(M=>{M.isMesh&&M.material&&M.userData.originalColor&&M.material.color.copy(M.userData.originalColor)})}}function Pt(d){if(d.level>=3)return;let h=d.maxHp>0?d.hp/d.maxHp:1;d.level+=1;let _=I=>Math.max(1,Math.ceil(I*1.1)),M=I=>Math.max(1,Math.ceil(I*1.1));d.maxHp=_(d.maxHp),d.maxMp=_(d.maxMp),d.hp=Math.max(1,Math.min(d.maxHp,Math.ceil(h*d.maxHp))),d.mp=Math.max(1,Math.min(d.maxMp,Math.ceil(h*d.maxMp))),d.str=M(d.str),d.agi=M(d.agi),d.vit=M(d.vit),d.dex=M(d.dex),d.luk=M(d.luk),d.int=M(d.int),d.range>2&&(d.range=M(d.range)),console.log("[LEVEL UP]",`${d.name} (${d.class}, P${d.player})`,`\u2192 Lv.${d.level}`,`| HP ${d.hp}/${d.maxHp} MP ${d.mp}/${d.maxMp} STR ${d.str} VIT ${d.vit}`),ft(d)}function ft(d){let h=ve.get(d.id),_=d.level===3?"levelup level3":d.level===2?"levelup level2":"levelup";if(Qf(d,_),!h)return;let M=performance.now(),I=0;function P(O){I++,I%2===0&&Bt();let N=O-M,L=Math.min(1,N/Ue),W=L<.5?1+.35*(L/.5):1+.35*(1-(L-.5)/.5);h.scale.setScalar(W),L<1?requestAnimationFrame(P):h.scale.setScalar(1)}requestAnimationFrame(P)}function et(d,h){let _=ve.get(d.id);if(!_){h&&h();return}let M=performance.now(),I=0;function P(O){I++,I%2===0&&Bt();let N=O-M,L=Math.min(1,N/Ue),W=L<.5?1+.35*(L/.5):1+.35*(1-(L-.5)/.5);_.scale.setScalar(W),L<1?requestAnimationFrame(P):(_.scale.setScalar(1),h&&h())}requestAnimationFrame(P)}let Ge=400,_t=280,Wt=.45,ln=160,wt=280,Ie=350,H=500,Ue=600,De=400,at=280,nt=.2,nn=.18,jt=!1,Ln=new k,Xn=new k,Yt=new k,Hn=new k;function pi(d=!1){g=!0;let h=null;if(cn==="playing"&&tt.length>0){let O=tt[st];h=oe.find(N=>N.id===O&&N.hp>0)}if(h||(h=oe.find(O=>O.player===bn&&O.hp>0)),!h)return;let _=a.position.distanceTo(u);if(_<.1&&(_=o),m.copy(a.position).sub(u).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),Yt.copy(Oe(h.x,h.y)),Hn.copy(Yt).add(m.clone().multiplyScalar(_)),d||jt){u.copy(Yt),a.position.copy(Hn),a.lookAt(u),Bt();return}jt=!0,Ln.copy(u),Xn.copy(a.position);let M=performance.now(),I=0;qn.shadowMap.enabled=!1;function P(O){I++,I%2===0&&Bt();let N=Math.min(1,(O-M)/Ge),L=N*(2-N);u.lerpVectors(Ln,Yt,L),a.position.lerpVectors(Xn,Hn,L),a.lookAt(u),N<1?requestAnimationFrame(P):(qn.shadowMap.enabled=!0,jt=!1)}requestAnimationFrame(P)}let Fi=0,bn=1,cn="draft",pt="pvp",$t=1,wi={1:"",2:""},Ai=null,ts=null,ns=null,gs="long";function w(d){return pt==="online"&&wi[d]?wi[d]:"Player "+d}let X=1,ee=0,ie=null;async function te(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{ie=await navigator.wakeLock.request("screen"),ie.addEventListener("release",()=>{ie=null})}catch{ie=null}}function Fe(){ie&&(ie.release().catch(()=>{}),ie=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&pt==="cvcpu"&&cn==="playing"&&te()});let qe="balanced",Ze=new Set(Ti),ot=[...Ti],mt=0,Je=null,ut=null,sn=new Set,tt=[],st=0,Qt=null,yt=new Map,At=null;function Qr(d){if(!d||d.hp<=0)return;At=d.id;let h=document.getElementById("unit-preview-card"),_=document.getElementById("unit-preview-image"),M=document.getElementById("unit-preview-name"),I=document.getElementById("unit-preview-meta"),P=document.getElementById("unit-preview-stats");h.classList.remove("player-1","player-2"),h.classList.add(d.player===1?"player-1":"player-2"),h.classList.toggle("level-2",d.level>=2&&d.level<3),h.classList.toggle("level-3",d.level>=3),_.src=Jr[d.class]||"",_.alt=d.name,M.textContent=d.name,I.textContent=`Lv.${d.level} ${d.class} \u2014 ${w(d.player)}`;let O=[["HP",`${d.hp}/${d.maxHp}`,"stat-val-hp"],["MP",`${d.mp}/${d.maxMp}`,""],["STR",Bi(d,"str"),""],["AGI",Bi(d,"agi"),""],["VIT",Bi(d,"vit"),""],["DEX",Bi(d,"dex"),""],["LUK",Bi(d,"luk"),""],["INT",Bi(d,"int"),""]];d.tempDebuff&&d.tempDebuff.poison!=null&&O.push(["Poison",`${d.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),P.innerHTML=O.map(([L,W,q])=>{let fe=q?` ${q}`:"";return`<span class="stat-label">${L}</span><span class="stat-val${fe}">${W}</span>`}).join("");let N=d.maxHp>0&&d.hp/d.maxHp<.3;h.classList.toggle("low-hp",N),h.style.display="block"}function rn(){At=null;let d=document.getElementById("unit-preview-card");d.classList.remove("low-hp","level-2","level-3"),d.style.display="none"}let kt=!1,mi=!1,ci=!1,Dn=null,St=!1,Sn=!1,Ri=!1,mn=[],Qn=new Si;n.add(Qn);let gi=[],ys=!0,xs=0,gh=0;function Bt(){ys=!0,xs=performance.now()}let ea=new Si;n.add(ea);let ol=[],cf=gt,hf=.02,uf=3368703,df=13382451;function ff(d,h){let _=d/2,M=_-h,I=new Yr;I.moveTo(-_,-_),I.lineTo(_,-_),I.lineTo(_,_),I.lineTo(-_,_),I.lineTo(-_,-_);let P=new qr;return P.moveTo(-M,-M),P.lineTo(M,-M),P.lineTo(M,M),P.lineTo(-M,M),P.lineTo(-M,-M),I.holes.push(P),new La(I)}let pf=ff(cf,hf);function Ci(d=null){let h=oe.filter(_=>_.hp>0&&_.id!==d).map(_=>`${_.id},${_.x},${_.y},${_.player}`).sort().join("|");if(!(Ci._lastSig===h&&Ci._lastExclude===d)){for(Ci._lastSig=h,Ci._lastExclude=d,ol.forEach(_=>_.dispose()),ol.length=0;ea.children.length;){let _=ea.children[0];ea.remove(_)}oe.filter(_=>_.hp>0&&_.id!==d).forEach(_=>{let M=_.x,I=_.y,O=(jn+e.height[I][M]*.35)/2+jn/2,N=M*gt-ze+gt/2,L=I*gt-Gt+gt/2,W=O+.02,q=_.player===1?uf:df,fe=new Pn({color:q,side:An}),V=new Ye(pf,fe);V.rotation.x=-Math.PI/2,V.position.set(N,W,L),ea.add(V),ol.push(fe)}),Bt()}}let mf=1.15,ll={1:8102901,2:15628943},yi=(()=>{let d=new Pn({color:ll[1]}),h=new Ye(new qi(.1,.25,8),d);return h.rotation.x=Math.PI,h.visible=!1,n.add(h),h})();function cl(){if(cn!=="playing"||tt.length===0||Ri){yi.visible=!1,yi.removeFromParent(),n.add(yi);return}let d=tt[st],h=oe.find(M=>M.id===d);if(!h||h.hp<=0){yi.visible=!1,yi.removeFromParent(),n.add(yi);return}let _=ve.get(d);if(!_){yi.visible=!1;return}yi.removeFromParent(),_.add(yi),yi.position.set(0,mf,0),yi.material&&yi.material.color.setHex(ll[h.player]??ll[1]),yi.visible=!0}function V_(d){let h=[[0,1],[0,-1],[1,0],[-1,0]],_=[];for(let[M,I]of h){let P=d.x+M,O=d.y+I;!zs(e,P,O)||oe.some(L=>L.id!==d.id&&L.x===P&&L.y===O&&L.hp>0)||_.push(Math.atan2(M,I))}return _}function yh(d){if(mn.length===0)return d;if(mn.length===1)return mn[0];let h=mn[0],_=Math.abs(xh(d-h));for(let M=1;M<mn.length;M++){let I=Math.abs(xh(d-mn[M]));I<_&&(_=I,h=mn[M])}return h}function xh(d){for(;d>Math.PI;)d-=2*Math.PI;for(;d<-Math.PI;)d+=2*Math.PI;return d}let gf=1.2,$i=(()=>{let d=new Ye(new qi(.12,.35,8),new Pn({color:4500223}));return d.rotation.x=-Math.PI/2,d.visible=!1,n.add(d),d})();function yf(d,h){if(!Ri||tt.length===0||mn.length===0)return;let _=tt[st],M=oe.find(fe=>fe.id===_),I=ve.get(_);if(!M||!I)return;Xa(d,h),vs.setFromCamera(Ms,a);let P=vs.intersectObjects(ae.children,!0);if(P.length===0)return;let O=null;for(let fe of P){let V=fe.object;for(;V&&(V.userData.gx==null||V.userData.gy==null);)V=V.parent;if(V&&V.userData.gx!=null){O=fe.point;break}}if(!O)return;let N=Oe(M.x,M.y),L=O.x-N.x,W=O.z-N.z;if(L*L+W*W<1e-6)return;let q=Math.atan2(L,W);I.rotation.y=yh(q)}function xf(){if(tt.length===0)return;let d=tt[st],h=oe.find(I=>I.id===d),_=ve.get(d);if(!h||!_)return;mn=[[0,1],[0,-1],[1,0],[-1,0]].map(([I,P])=>Math.atan2(I,P)),$i.removeFromParent(),_.add($i),$i.position.set(0,gf,0),$i.rotation.x=-Math.PI/2,$i.rotation.y=0,$i.rotation.z=Math.PI,$i.visible=!0,_.rotation.y=mn[0]}function _f(){$i.visible=!1,$i.removeFromParent(),n.add($i)}let Oa=[];(function(){let h=Ei,_=[1];for(let M=0;M<Math.floor((h-1)/2);M++)_.push(2,2,1,1);h%2===1?_.push(2):(_.push(2,2),_.push(1)),Oa=_})();function ki(){return Oa[mt]}function _h(){let d=ki(),h=0;for(let _=0;_<mt;_++)Oa[_]===d&&h++;return h+1}function ta(){pn=0,le.forEach(_=>{ue.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),le.clear(),Ae={30:!1,20:!1,10:!1};let d=Ei,h=[1];for(let _=0;_<Math.floor((d-1)/2);_++)h.push(2,2,1,1);d%2===1?h.push(2):(h.push(2,2),h.push(1)),Oa=h,cn="draft",mt=0,Ze=new Set(Ti),ot=U_([...Ti]),Je=null,ut=null,sn.clear(),Un(),ul(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function hl(){return oe.filter(d=>d.hp>0).sort((d,h)=>{let _=Pe(d,"agi"),M=Pe(h,"agi");if(M!==_)return M-_;let I=Pe(d,"dex");return Pe(h,"dex")-I}).map(d=>d.id)}function vf(d){let h=new Set(oe.filter(q=>q.hp>0).map(q=>q.y*e.w+q.x)),_=(q,fe)=>h.has(fe*e.w+q),M=(q,fe)=>q>=0&&q<e.w&&fe>=0&&fe<e.h,I=(q,fe)=>M(q,fe)&&zs(e,q,fe)&&!_(q,fe),P=ve.get(d.id),O=P!=null?P.rotation.y:d.player===1?Math.PI:0,N=d.x-Math.round(Math.cos(O)),L=d.y+Math.round(Math.sin(O));if(I(N,L))return{gx:N,gy:L};let W=[[0,1],[0,-1],[1,0],[-1,0]];for(let[q,fe]of W){let V=d.x+q,se=d.y+fe;if(I(V,se))return{gx:V,gy:se}}return null}function Mf(d,h,_,M){let I=M?.position&&M.position.gx!=null&&M.position.gy!=null?{gx:M.position.gx,gy:M.position.gy}:vf(d);if(!I)return null;let P=h.class&&Ti.includes(h.class)?h.class:"knight",O=h.hairColor!=null?h.hairColor:(ks[P]||ks.knight).hair,N={id:J++,player:d.player,x:I.gx,y:I.gy,level:h.level!=null?h.level:1,name:h.name!=null?h.name:"Summoned",class:P,hairColor:O,hp:h.hp!=null?h.hp:10,maxHp:h.maxHp!=null?h.maxHp:10,mp:h.mp!=null?h.mp:5,maxMp:h.maxMp!=null?h.maxMp:5,str:h.str!=null?h.str:5,agi:h.agi!=null?h.agi:5,vit:h.vit!=null?h.vit:5,dex:h.dex!=null?h.dex:5,luk:h.luk!=null?h.luk:5,int:h.int!=null?h.int:5,range:h.range!=null?h.range:1,summonedBy:d.id};_!=null&&Array.isArray(_)&&_.length>0&&(N.summonedSkills=_),oe.push(N),Ve(N);let L=ve.get(N.id);if(L&&M?.useGrayscaleAppearance&&Tt(L),L){let se=function(ye){V++,V%2===0&&Bt();let xe=ye-fe;if(xe<De){let Be=xe/De,it=1-(1-Be)*(1-Be),vt=nt+(1-nt)*it;L.scale.setScalar(vt),requestAnimationFrame(se);return}let Re=xe-De;if(Re<at){let Be=Re/at,it=Math.sin(Be*Math.PI);L.position.y=q.y+nn*it,requestAnimationFrame(se);return}L.scale.setScalar(1),L.position.y=q.y,Bt()},W=ve.get(d.id);L.rotation.y=W!=null?W.rotation.y:d.player===1?Math.PI:0,L.scale.setScalar(nt);let q=Oe(N.x,N.y),fe=performance.now(),V=0;requestAnimationFrame(se)}return tt=hl(),Ci(),typeof Ot=="function"&&Ot(),Bt(),N}function na(d,h){let _=oe.indexOf(h);if(_===-1)return null;oe.splice(_,1);let M=ve.get(h.id);M&&(n.remove(M),ve.delete(h.id));let I=h.class&&Ti.includes(h.class)?h.class:"knight",P=h.hairColor!=null?h.hairColor:(ks[I]||ks.knight).hair,O=Re=>Math.max(1,Math.floor((Re||0)*6/7)),N=O(h.maxHp),L=O(h.maxMp),W={name:"Reanimated "+h.name,class:I,hairColor:P,level:h.level,hp:N,maxHp:N,mp:L,maxMp:L,str:O(h.str),agi:O(h.agi),vit:O(h.vit),dex:O(h.dex),luk:O(h.luk),int:O(h.int),range:h.range},q=h.summonedSkills&&h.summonedSkills.length>0?h.summonedSkills.slice():(jr[I]||[]).slice(),fe=new Set(oe.filter(Re=>Re.hp>0).map(Re=>Re.y*e.w+Re.x)),V=h.x,se=h.y,ye=zs(e,V,se)&&!fe.has(se*e.w+V),xe={useGrayscaleAppearance:!0};return ye&&(xe.position={gx:V,gy:se}),Mf(d,W,q,xe)}function bf(){document.getElementById("draft-panel").style.display="none";let d=document.getElementById("draft-placement-card");d&&(d.style.display="none",d.innerHTML=""),Un();let h=document.getElementById("battle-start-overlay");h&&(h.classList.add("visible"),h.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");for(_&&(_.style.display="none",_.innerHTML=""),cn="playing",Fi=0,tt=hl(),st=0;st<tt.length&&oe.find(P=>P.id===tt[st]).hp<=0;)st++;st>=tt.length&&(st=0);let M=oe.find(P=>P.id===tt[st]);bn=M?M.player:1,St=!1,Sn=!1,Qt=tt[st],setTimeout(()=>{h&&(h.classList.remove("visible"),h.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",Ci(),Ot(),cl(),pi(!0),pt==="cvcpu"&&te()},4e3)}function ul(){let d=document.getElementById("draft-panel"),h=document.getElementById("draft-title"),_=document.getElementById("draft-classes"),M=document.getElementById("draft-message"),I=document.getElementById("turn-player"),P=document.getElementById("draft-placement-card");if(Je){d.style.display="none",I.textContent=`Draft: ${w(ki())} \u2014 place ${Jt[Je].name}`;let W=ki();P.style.display="flex",P.classList.remove("player-1","player-2"),P.classList.add("player-"+W),P.style.left=W===1?"24px":"",P.style.right=W===2?"24px":"";let q=[...oe.filter(se=>se.player===W).map(se=>se.class),Je],fe=(se,ye)=>{let xe=Jt[se];return`
        <div class="draft-class-card${ye?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Jr[se]||""}" alt="${xe.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
      `},V=3;if(q.length>V){P.classList.add("draft-placement-cols");let se=[];for(let xe=0;xe<q.length;xe+=V)se.push(q.slice(xe,xe+V));let ye=q.length-1;P.innerHTML=se.map((xe,Re)=>{let Be=Re===se.length-1,it=xe.map((vt,rt)=>{let Kt=Re*V+rt===ye;return fe(vt,Kt)}).join("");return`<div class="draft-placement-col${Be?" draft-placement-col-current":""}">${it}</div>`}).join("")}else P.classList.remove("draft-placement-cols"),P.innerHTML=q.map((se,ye)=>{let xe=ye===q.length-1;return fe(se,xe)}).join("");pt==="pvcpu"&&ki()===2&&setTimeout(aa,500),pt==="cvcpu"&&setTimeout(aa,500);return}P.style.display="none",P.innerHTML="",cn==="draft"&&(d.style.display="flex");let O=document.getElementById("draft-detail");O&&(O.style.display="");let N=ki();if(pt!=="online"||N===$t){let Re=function(){let Be=ut;if(!Be||!Jt[Be]){W&&(W.style.display=""),q&&(q.style.display="none"),fe&&(fe.style.display="none"),xe&&(xe.style.display="none");return}let it=Jt[Be],vt=jr[Be]||[];W&&(W.style.display="none"),q&&(q.src=Jr[Be]||"",q.alt=it.name,q.style.display="block"),fe&&(fe.style.display="block"),V&&(V.textContent=it.name),se&&(se.innerHTML=[["HP",it.hp],["MP",it.mp],["STR",it.str],["AGI",it.agi],["VIT",it.vit],["DEX",it.dex],["LUK",it.luk],["INT",it.int],["Range",it.range]].map(([rt,_n])=>`<span class="draft-stat-label">${rt}</span><span class="draft-stat-value">${_n}</span>`).join("")),ye&&(ye.innerHTML=vt.length?vt.map(rt=>`<div class="draft-detail-skill"><span class="draft-detail-skill-name">${rt.name}</span><span class="draft-detail-skill-desc">${rt.description||""}</span></div>`).join(""):'<div class="draft-detail-skill">No skills</div>'),xe&&(xe.style.display="block",xe.disabled=!Ze.has(Be),xe.onclick=()=>{let rt=ut;rt&&Ze.has(rt)&&dl(rt)}),_.querySelectorAll(".draft-class-card").forEach(rt=>{rt.classList.toggle("draft-class-card-selected",rt.dataset.classKey===Be)})};h.textContent=`${w(N)}: Pick a class (${_h()}/${Ei})`,M.textContent="",_.innerHTML="",I.textContent=`Draft: ${w(N)} \u2014 pick a class`;let W=document.getElementById("draft-detail-placeholder"),q=document.getElementById("draft-detail-image"),fe=document.getElementById("draft-detail-content"),V=document.getElementById("draft-detail-name"),se=document.getElementById("draft-detail-stats"),ye=document.getElementById("draft-detail-skills"),xe=document.getElementById("draft-select-btn");ot.forEach(Be=>{let it=Ze.has(Be),vt=Jt[Be],rt=document.createElement("button");rt.type="button",rt.dataset.classKey=Be,rt.className="draft-class-card"+(it?"":" draft-class-card-unavailable")+(ut===Be?" draft-class-card-selected":""),rt.disabled=!it,rt.innerHTML=`
          <img class="draft-class-card-image" src="${Jr[Be]||""}" alt="${vt.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${vt.name}</div>
          </div>
        `,it&&rt.addEventListener("click",()=>{ut=Be,Re()}),_.appendChild(rt)}),Re()}else{h.textContent=`${w(N)} is picking a class`,M.textContent="",_.innerHTML="",I.textContent=`Draft: ${w(N)} \u2014 pick a class`;let W=document.getElementById("draft-detail-placeholder"),q=document.getElementById("draft-detail-image"),fe=document.getElementById("draft-detail-content"),V=document.getElementById("draft-select-btn");W&&(W.style.display=""),q&&(q.style.display="none"),fe&&(fe.style.display="none"),V&&(V.style.display="none")}pt==="pvcpu"&&ki()===2&&setTimeout(aa,500),pt==="cvcpu"&&setTimeout(aa,500)}function dl(d){if(!Ze.has(d)||Je)return;Je=d;let h=ki(),_=new Set(oe.map(P=>P.y*e.w+P.x)),M=B_(e,h,_),I=nf(e,M);sn=new Set(I.map(P=>P.gy*e.w+P.gx)),Wf(I),ul(),pt==="online"&&h===$t&&typeof un=="function"&&un({type:"draftPick",classKey:d})}function fl(d,h){if(!Je)return;let _=ki(),M=h*e.w+d;if(!sn.has(M))return;let I=Jt[Je],P={id:J++,player:_,x:d,y:h,level:1,name:I.name,class:Je,hairColor:(ks[Je]||ks.knight).hair,hp:I.hp,maxHp:I.maxHp,mp:I.mp,maxMp:I.maxMp,str:I.str,agi:I.agi,vit:I.vit,dex:I.dex,luk:I.luk,int:I.int,range:I.range};oe.push(P),Ve(P);let O=ve.get(P.id);O&&(O.rotation.y=P.player===1?Math.PI:0),Ze.delete(Je),Je=null,sn.clear(),Un(),pt==="online"&&_===$t&&typeof un=="function"&&un({type:"draftPlace",gx:d,gy:h});let N=document.getElementById("draft-placement-card");if(N&&(N.style.display="none",N.innerHTML=""),mt++,mt>=2*Ei){bf();return}let L=ki(),W=_h(),q=document.getElementById("draft-panel"),fe=document.getElementById("draft-title"),V=document.getElementById("draft-message"),se=document.getElementById("draft-detail"),ye=document.getElementById("draft-classes"),xe=document.getElementById("turn-player"),Re=pt!=="online"||L===$t;q&&fe&&ye&&xe&&(q.style.display="flex",fe.textContent=Re?`${w(L)}: Pick a class (${W}/${Ei})`:`${w(L)} is picking a class`,V&&(V.textContent=Re?"Get ready\u2026":""),ye.innerHTML="",xe.textContent=`Draft: ${w(L)} \u2014 pick a class`),se&&(se.style.display="none"),setTimeout(ul,1500)}function Ot(){Ot._pending||(Ot._pending=!0,requestAnimationFrame(()=>{Ot._pending=!1,Sf()}))}function Sf(){let d=Ot._cache||(Ot._cache={}),h=d.turnEl||(d.turnEl=document.getElementById("turn-player")),_=d.menuLabel||(d.menuLabel=document.getElementById("menu-label")),M=d.turnMenu||(d.turnMenu=document.getElementById("turn-menu")),I=d.unitInfo||(d.unitInfo=document.getElementById("unit-info")),P=d.unitNameEl||(d.unitNameEl=document.getElementById("unit-name")),O=d.unitLevelClassEl||(d.unitLevelClassEl=document.getElementById("unit-level-class")),N=d.unitStatsEl||(d.unitStatsEl=document.getElementById("unit-stats")),L=d.unitClassImageEl||(d.unitClassImageEl=document.getElementById("unit-class-image"));if(cn==="playing"&&oe.forEach(V=>{if(V.hp<=0)return;let se=ve.get(V.id);se&&qt(se,V.maxHp>0&&V.hp/V.maxHp<be)}),M.classList.remove("player-1","player-2"),M.classList.add(bn===1?"player-1":"player-2"),M.classList.toggle("level-2",!1),M.classList.toggle("level-3",!1),cn==="playing"&&tt.length>0){let V=tt[st],se=oe.find(ye=>ye.id===V&&ye.hp>0);pt==="online"&&se&&se.player!==$t?Qt=null:se&&(Qt==null||!oe.find(ye=>ye.id===Qt&&ye.hp>0))&&(Qt=V)}if(Qt!=null){let V=oe.find(se=>se.id===Qt);if(V&&V.hp>0){I.classList.remove("no-unit");let se=V.maxHp>0&&V.hp/V.maxHp<.25;M.classList.toggle("low-hp",se),M.classList.toggle("level-2",V.level>=2&&V.level<3),M.classList.toggle("level-3",V.level>=3),P.textContent=V.name,O.textContent=`Lv.${V.level} ${V.class}`,L.src=Jr[V.class]||"",L.alt=V.name;let ye=[["HP",`${V.hp}/${V.maxHp}`,"stat-val-hp"],["MP",`${V.mp}/${V.maxMp}`,""],["STR",Bi(V,"str"),""],["AGI",Bi(V,"agi"),""],["VIT",Bi(V,"vit"),""],["DEX",Bi(V,"dex"),""],["LUK",Bi(V,"luk"),""],["INT",Bi(V,"int"),""]];V.tempDebuff&&V.tempDebuff.poison!=null&&ye.push(["Poison",`${V.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),N.innerHTML=ye.map(([xe,Re,Be])=>{let it=Be?` ${Be}`:"";return`<span>${xe}</span><span class="stat-val${it}">${Re}</span>`}).join("")}else M.classList.remove("low-hp","level-2","level-3"),I.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",O.textContent="",N.textContent="",L.src="",L.alt=""}else M.classList.remove("low-hp","level-2","level-3"),I.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",O.textContent="",N.textContent="",L.src="",L.alt="";if(Qt!=null)h.textContent=`${w(bn)} \u2014 Unit ${P.innerHTML} active`;else{let V=tt.length?oe.find(se=>se.id===tt[st]):null;h.textContent=V?`${V.name} (${w(bn)})`:w(bn)}_.textContent=w(bn);let W=d.btnAttack||(d.btnAttack=document.getElementById("btn-attack")),q=d.btnSkill||(d.btnSkill=document.getElementById("btn-skill")),fe=d.btnEnd||(d.btnEnd=document.getElementById("btn-end"));if(pt==="cvcpu"&&cn==="playing")W.disabled=!0,q.disabled=!0,fe&&(fe.disabled=!0),h.textContent=`${w(bn)} (CPU)`;else if(Ri)W.disabled=!0,q.disabled=!0,h.textContent="Click on map to choose facing direction";else if(cn==="playing"){W.disabled=Sn;let V=tt.length?tt[st]:null,se=V?oe.find(Re=>Re.id===V&&Re.hp>0):null,ye=pt!=="cvcpu"&&(pt!=="pvcpu"||bn===1)&&(pt!=="online"||bn===$t),xe=ye&&se&&!Sn?Sl(se):[];q.disabled=Sn||!ye||xe.length===0,fe&&(fe.disabled=pt==="online"&&bn!==$t)}if(cn==="playing"){let V=Math.min(Fi+1,ps);h.textContent=(h.textContent||"")+` \u2014 Turn ${V}/${ps}`;let se=d.turnsLeftEl||(d.turnsLeftEl=document.getElementById("turns-left")),ye=d.turnsLeftValueEl||(d.turnsLeftValueEl=document.getElementById("turns-left-value"));if(se&&ye){se.style.display="";let xe=Math.max(0,ps-Fi);ye.textContent=String(xe),se.classList.toggle("turns-left-low",xe<=10),(xe===30||xe===20||xe===10)&&(Ae[xe]||(dt(xe),Ae[xe]=!0))}}else{let V=d.turnsLeftEl||(d.turnsLeftEl=document.getElementById("turns-left"));V&&(V.style.display="none")}cn==="playing"&&bl(bn)&&!kt&&setTimeout(gn,700)}function hn(){if(pt==="online"&&bn===$t&&typeof Xs=="function"){let W=tt[st],q=ve.get(W),fe=q?.rotation.y;Xs({type:"endTurn",unitId:W,facingAngle:fe})}Bt(),rn(),mi=!1,ci=!1,Dn=null,Ri=!1,mn=[],_f(),Un();let d=tt.length;if(d===0)return;let h=tt[st],_=oe.find(W=>W.id===h);if(_&&_.tempDebuff&&_.tempDebuff.duration--,_&&_.tempDebuff&&_.tempDebuff.duration<=0&&(_.tempDebuff=void 0),_&&_.tempBuff&&_.tempBuff.duration--,_&&_.tempBuff&&_.tempBuff.duration<=0&&(_.tempBuff=void 0),_&&_.hp>0){let W=Math.ceil(Pe(_,"int")*.15);_.mp=Math.min(_.maxMp,_.mp+W)}if(_&&_.hp>0){let W=_.x,q=_.y;e.type[q][W]===Qe.CENTER&&_.level===1&&Pt(_);let fe=_.player===1?Qe.BASE_TOP:Qe.BASE_BOTTOM;e.type[q][W]===fe&&_.level===2&&Pt(_)}if(Fi++,Fi>=ps){ep();return}let M=(st+1)%d,I=0;for(;I<d;){let W=tt[M],q=oe.find(fe=>fe.id===W);if(q&&q.hp>0)break;M=(M+1)%d,I++}let P=M===0;st=M;let O=["poison"],N=tt[st],L=oe.find(W=>W.id===N);for(let W=0;W<d&&!(!L||L.hp<=0);W++){let q=L.tempDebuff||{},fe=O.find(se=>!isNaN(q[se])),V=q[fe]||0;if(V<=0)break;if(console.log("[DEBUFF]",`${fe}: ${V} to ${L.name}`),L.hp=Math.max(0,L.hp-V),si(L.x,L.y,String(V),!1,fe),Xe(L),L.hp<=0){Nn(L),M=(st+1)%d;let se=0;for(;se<d;){let ye=tt[M],xe=oe.find(Re=>Re.id===ye);if(xe&&xe.hp>0)break;M=(M+1)%d,se++}st=M;continue}break}bn=L?L.player:1,St=!1,Sn=!1,Qt=tt[st],P&&(tt=hl(),st=0),Ot(),cl(),pi()}document.getElementById("btn-attack").addEventListener("click",()=>{if(kt||Sn||cn!=="playing"||tt.length===0)return;if(pt==="online"){let I=tt[st],P=oe.find(O=>O.id===I);if(!P||P.player!==$t)return}rn();let d=tt[st],h=oe.find(I=>I.id===d);if(!h||h.hp<=0)return;let _=h.range!=null?h.range:1;Qt=d,mi=!0;let M=sf(e,h.x,h.y,_);yt=new Map,M.forEach((I,P)=>{let O=P%e.w,N=Math.floor(P/e.w);or(e,h.x,h.y,O,N)&&yt.set(P,I)}),Xf(yt),Ot()}),document.getElementById("btn-skill").addEventListener("click",d=>{if(d.preventDefault(),d.stopPropagation(),kt||Sn)return;let h=tt[st],_=h?oe.find(N=>N.id===h&&N.hp>0):null;if(!_||_.player!==bn||pt==="online"&&_.player!==$t)return;let M=document.getElementById("skill-list-overlay"),I=document.getElementById("btn-skill");if(!I)return;if(M&&M.style.display==="block"){M.style.display="none";return}let P=Sl(_),O=I.getBoundingClientRect();M||(M=document.createElement("div"),M.id="skill-list-overlay",M.className="skill-list-overlay",M.setAttribute("aria-hidden","true"),document.body.appendChild(M)),M.style.left=`${O.left}px`,M.style.top=`${O.top-4}px`,M.style.transform="translateY(-100%)",M.style.right="auto",M.style.bottom="auto",M.style.display="none",P.length===0?M.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(M.innerHTML=P.map((N,L)=>`<button type="button" class="skill-option" data-skill-index="${L}" ${N.disabled?"disabled":""}>
          <span class="skill-name">${N.name}</span> <span class="skill-meta">${N.cost} MP \xB7 Lv.${N.level}</span><br/>
          <span class="skill-meta">${N.description}</span>
        </button>`).join(""),M.querySelectorAll(".skill-option").forEach((N,L)=>{N.addEventListener("click",W=>{W.preventDefault(),W.stopPropagation();let q=P[L];if(Dn=q,M.style.display="none",M.setAttribute("aria-hidden","true"),q.target==="self"){if(_.mp<q.cost)return;_.mp-=q.cost,Sn=!0;let fe={showFloatingCombatText:si,handleUnitDeath:Nn,updateUnitSlashVisibility:Xe,updateTurnUI:Ot,units:oe,reanimateDeadUnit:na};pt==="online"&&_.player===$t&&typeof un=="function"&&(un({type:"requestRender"}),Xs({type:"skill",unitId:_.id,targetId:_.id,effectKey:q.effectKey})),Wa(_,_,q,fe,()=>{Un(),ci=!1,Dn=null,mr=new Set,St?hn():Ot()}),Ot();return}if(q.target==="ally"&&oa(_,q,oe).filter(se=>se.targetUnit&&se.targetUnit.id!==_.id).length===0&&_.mp>=q.cost){_.mp-=q.cost,Sn=!0;let se={showFloatingCombatText:si,handleUnitDeath:Nn,updateUnitSlashVisibility:Xe,updateTurnUI:Ot,units:oe,reanimateDeadUnit:na};pt==="online"&&_.player===$t&&typeof un=="function"&&(un({type:"requestRender"}),Xs({type:"skill",unitId:_.id,targetId:_.id,effectKey:q.effectKey})),Wa(_,_,q,se,()=>{Un(),ci=!1,Dn=null,mr=new Set,St?hn():Ot()}),Ot();return}ci=!0,mi=!1,Gf(_,q),Ot()})})),requestAnimationFrame(()=>{M.style.display="block",M.style.visibility="visible",M.setAttribute("aria-hidden","false")})}),document.addEventListener("click",d=>{let h=document.getElementById("skill-list-overlay"),_=document.getElementById("btn-skill"),M=document.querySelector(".skill-wrap");!h||h.style.display!=="block"||M&&M.contains(d.target)||h.contains(d.target)||(h.style.display="none",h.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(kt||Ri||cn!=="playing"||tt.length===0)return;let d=tt[st],h=oe.find(M=>M.id===d);if(!h||h.hp<=0||pt==="online"&&h.player!==$t)return;Ri=!0,Qt=null,mi=!1,yt=new Map,Un(),xf(),cl();let _=document.getElementById("turn-player");_.textContent="Click on map to choose facing direction",Ot()}),u.set(0,8,0),a.position.copy(u).add(c),a.lookAt(u);let lr=document.getElementById("mode-select-overlay"),vh=document.getElementById("mode-carousel-track"),Mh=document.getElementById("mode-carousel-prev"),bh=document.getElementById("mode-carousel-next"),Ba=document.getElementById("mode-carousel-dots"),is=document.getElementById("mode-play-btn"),Sh=document.getElementById("mode-settings-pvp"),Eh=document.getElementById("mode-settings-pvp-map"),Th=document.getElementById("mode-settings-pvp-num-units"),wh=document.getElementById("mode-settings-pvp-none"),Ah=document.getElementById("mode-settings-options"),Fa=document.getElementById("pvp-map-mode"),ia=document.getElementById("pvp-num-units"),sa=document.getElementById("ai-draft-preference"),Ef=document.getElementById("cvcpu-num-games"),ka=document.getElementById("cvcpu-num-units"),Rh=document.getElementById("cvcpu-grid-w"),Ch=document.getElementById("cvcpu-grid-h"),Ph=document.getElementById("cvcpu-center-plaza"),Ih=document.getElementById("cvcpu-max-turns"),cr=document.getElementById("move-speed"),hr=document.getElementById("draft-picks-per-player"),Vs=document.getElementById("online-connect-overlay"),Pi=document.getElementById("online-player-name"),Gs=document.getElementById("online-create-section"),ur=document.getElementById("online-join-section"),dr=document.getElementById("online-offer-text"),Ha=document.getElementById("online-reply-text"),za=document.getElementById("online-paste-offer"),ra=document.getElementById("online-join-answer-section"),fr=document.getElementById("online-answer-text"),pl=document.getElementById("online-error"),Lh=document.getElementById("online-waiting-msg"),Ki=ms?["pvp","pvcpu","cvcpu","online","story"]:["pvp","pvcpu","online","story"],ml=Ki.length-1,On=0;function gl(){return On===ml}function Tf(){return Ki[On]==="online"}function Va(d){On=Math.max(0,Math.min(d,ml)),vh&&(vh.style.transform=`translateX(-${On*100}%)`),Ba&&Ba.querySelectorAll(".mode-dot").forEach((_,M)=>{_.classList.toggle("active",M===On),_.setAttribute("aria-selected",M===On)}),Sh&&(Sh.style.display=On===0||On===1||gl()||Ki[On]==="online"?"":"none"),Eh&&(Eh.style.display=On===0||On===1||Ki[On]==="online"?"":"none"),Th&&(Th.style.display=Ki[On]==="pvp"?"":"none"),Ki[On]==="pvp"&&ia&&(ia.style.width="11em",ia.value=String(Math.max(1,Math.min(20,Ei)))),wh&&(wh.style.display=gl()?"":"none"),Ah&&(Ah.style.display=ms&&Ki[On]==="cvcpu"?"":"none"),ms&&Ki[On]==="cvcpu"&&ka&&(ka.value=String(Math.max(1,Math.min(20,Ei))));let h=is?.querySelector(".mode-play-text");is&&h&&(gl()?(is.disabled=!0,h.textContent="Coming Soon"):(is.disabled=!1,h.textContent=Tf()?"Connect":"Play game"))}if(Ba)for(let d=0;d<=ml;d++){let h=document.createElement("button");h.type="button",h.className="mode-dot"+(d===0?" active":""),h.setAttribute("role","tab"),h.setAttribute("aria-label",`Mode ${d+1}`),h.setAttribute("aria-selected",d===0),h.addEventListener("click",()=>Va(d)),Ba.appendChild(h)}if(Mh&&Mh.addEventListener("click",()=>Va(On-1)),bh&&bh.addEventListener("click",()=>Va(On+1)),lr&&!ms){let d=lr.querySelector('.mode-slide[data-mode="cvcpu"]');d&&d.parentNode&&d.parentNode.removeChild(d)}if(Va(0),cr&&(cr.value=String(Fs),cr.addEventListener("input",()=>{let d=parseInt(cr.value,10);!Number.isNaN(d)&&d>=0&&(Fs=d)}),cr.addEventListener("change",()=>{let d=parseInt(cr.value,10);!Number.isNaN(d)&&d>=0&&(Fs=d)})),hr&&(hr.value=String(Ei),hr.addEventListener("input",()=>{let d=parseInt(hr.value,10);!Number.isNaN(d)&&d>=1&&(Ei=d)}),hr.addEventListener("change",()=>{let d=parseInt(hr.value,10);!Number.isNaN(d)&&d>=1&&(Ei=d)})),sa&&(L_.forEach(d=>{let h=document.createElement("option");h.value=d.value,h.textContent=d.label,sa.appendChild(h)}),sa.value=qe,sa.addEventListener("change",()=>{qe=sa.value})),Vs){let d=document.getElementById("online-btn-create"),h=document.getElementById("online-btn-join"),_=document.getElementById("online-btn-copy-offer"),M=document.getElementById("online-btn-connect"),I=document.getElementById("online-btn-join-connect"),P=document.getElementById("online-btn-copy-answer");d&&d.addEventListener("click",async()=>{let O=Pi&&Pi.value.trim()||"Player 1";if(!O){ii("Enter your name");return}ii("");try{gs=Fa&&Fa.value||"long",ns=(Date.now()^Math.random()*4294967295)>>>0,C(gs,ns);let N=await Rf(O,ns,gs);dr&&(dr.value=N),Gs&&(Gs.style.display="flex",Gs.style.alignItems="flex-start"),ur&&(ur.style.display="none")}catch(N){ii(N.message||"Failed to create game")}}),_&&dr&&_.addEventListener("click",()=>{dr.select(),document.execCommand("copy")}),M&&Ha&&M.addEventListener("click",async()=>{let O=Ha.value.trim();if(!O){ii("Paste your friend's reply");return}ii("");try{await Pf(O)}catch(N){ii(N.message||"Failed to connect")}}),h&&h.addEventListener("click",()=>{if(!(Pi&&Pi.value.trim()||"Player 2")){ii("Enter your name");return}ii(""),Gs&&(Gs.style.display="none"),ur&&(ur.style.display="flex")}),I&&za&&I.addEventListener("click",async()=>{let O=za.value.trim();if(!O){ii("Paste the host's code");return}ii("");try{$t=2,wi[2]=Pi&&Pi.value.trim()||"Player 2";let N=await Cf(wi[2],O);fr&&(fr.value=N),ra&&(ra.style.display="flex",ra.style.alignItems="flex-start")}catch(N){ii(N.message||"Failed to join")}}),P&&fr&&P.addEventListener("click",()=>{fr.select(),document.execCommand("copy")})}let _s=new Audio;_s.loop=!0,_s.volume=.3,_s.preload="auto";let yl=window.location.href.replace(/[^/]*$/,""),Dh=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:yl+(yl.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");_s.src=Dh,_s.addEventListener("error",()=>{let d=yl+"assets/music/tavern.mp3";d!==Dh&&(_s.src=d)});function wf(){_s.paused&&_s.play().catch(()=>{})}function ii(d){pl&&(pl.textContent=d||"",pl.style.display=d?"block":"none")}function Uh(){Vs&&(Vs.style.display="none",Vs.setAttribute("aria-hidden","true"))}function Af(){ii(""),$t=1,wi={1:"",2:""},Vs&&(Vs.style.display="flex",Vs.setAttribute("aria-hidden","false")),Pi&&(Pi.value=""),Gs&&(Gs.style.display="none"),ur&&(ur.style.display="none"),dr&&(dr.value=""),Ha&&(Ha.value=""),za&&(za.value=""),fr&&(fr.value=""),ra&&(ra.style.display="none"),Lh&&(Lh.style.display="block")}function Nh(d){return new Promise(h=>{if(d.iceGatheringState==="complete"){h();return}let _=()=>{d.iceGatheringState==="complete"&&(d.removeEventListener("icegatheringstatechange",_),h())};d.addEventListener("icegatheringstatechange",_)})}async function Rf(d,h,_){Ai&&(Ai.close(),Ai=null,ts=null);let M=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),I=[];M.addEventListener("icecandidate",N=>{N.candidate&&I.push(N.candidate)});let P=M.createDataChannel("game-sync",{ordered:!0});ts=P,Ai=M,P.addEventListener("open",()=>Bh(P,!0));let O=await M.createOffer();return await M.setLocalDescription(O),await Nh(M),JSON.stringify({type:"offer",sdp:M.localDescription.sdp,candidates:I,playerName:d||"Player 1"})}async function Cf(d,h){let _=JSON.parse(h),M=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),I=[];if(M.addEventListener("icecandidate",O=>{O.candidate&&I.push(O.candidate)}),M.addEventListener("datachannel",O=>{ts=O.channel,Ai=M,Bh(ts,!1)}),await M.setRemoteDescription(new RTCSessionDescription({type:"offer",sdp:_.sdp})),_.candidates&&_.candidates.length)for(let O of _.candidates)await M.addIceCandidate(new RTCIceCandidate(O));let P=await M.createAnswer();return await M.setLocalDescription(P),await Nh(M),JSON.stringify({type:"answer",sdp:M.localDescription.sdp,candidates:I,playerName:d||"Player 2"})}async function Pf(d){let h=JSON.parse(d);if(!Ai){ii("Create a game first, then paste your friend's reply.");return}let _=Ai.signalingState;if(_!=="stable"){if(_!=="have-local-offer"){ii("Wrong step: create a game first and send the code, then paste the reply.");return}if(await Ai.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:h.sdp})),h.candidates&&h.candidates.length)for(let M of h.candidates)await Ai.addIceCandidate(new RTCIceCandidate(M))}}let Oh=0,Ws=0,xl=[],_l=!1,vl=[];function pr(){Ws=Math.max(0,Ws-1),Ws===0&&Ml()}function Ml(){for(;Ws===0&&xl.length>0;){let d=xl.shift();if(d.type==="move"){Df(d.unitId,d.toGx,d.toGy);return}if(d.type==="attack"){Uf(d.unitId,d.targetId,d.hit,d.damage);return}if(d.type==="skill"){Nf(d);return}if(d.type==="endTurn"){if(d.unitId!=null&&d.facingAngle!=null){let h=ve.get(d.unitId);h&&(h.rotation.y=d.facingAngle)}hn();return}if(d.type==="unitDeath"){let h=oe.find(M=>M.id===d.unitId),_=d.killerId!=null?oe.find(M=>M.id===d.killerId):null;h&&(h.hp=0,Nn(h,_,{skipSync:!0})),Ml();return}}}function Bh(d,h){if(d.binaryType="arraybuffer",d.addEventListener("message",P=>{try{let O=JSON.parse(P.data);if(O.seq!=null&&O.seq<=Oh)return;O.seq!=null&&(Oh=O.seq),If(O,h)}catch(O){console.warn("Online message parse error",O)}}),d.addEventListener("close",()=>{pt==="online"&&ii("Connection lost.")}),!h){let P=wi[2]||Pi&&Pi.value.trim()||"Player 2";un({type:"joined",playerName:P});return}let _=Pi&&Pi.value.trim()||"Player 1",M=ns??(Date.now()^Math.random()*4294967295)>>>0,I=gs||"long";wi[1]=_,un({type:"start",mapSeed:M,mapMode:I,playerName:_}),Uh(),ta()}function If(d,h){if(d.type==="start"){wi[1]=d.playerName||"Player 1",ns=d.mapSeed,gs=d.mapMode||"long",C(gs,ns),Uh(),ta();return}if(d.type==="joined"){wi[2]=d.playerName||"Player 2";return}if(cn==="draft"){d.type==="draftPick"?dl(d.classKey):d.type==="draftPlace"&&fl(d.gx,d.gy);return}cn==="playing"&&(d.type==="move"||d.type==="attack"||d.type==="skill"||d.type==="endTurn"||d.type==="unitDeath"?(xl.push(d),Ml()):d.type==="requestRender"&&Bt())}function un(d){if(ts&&ts.readyState==="open"){let h=(typeof un.seq<"u"?un.seq:0)+1;un.seq=h,ts.send(JSON.stringify({...d,seq:h}))}}function Xs(d){if(pt==="online"&&_l&&(d.type==="attack"||d.type==="skill"||d.type==="endTurn")){vl.push(d);return}un(d)}function Lf(){for(;vl.length>0;){let d=vl.shift();un(d)}}function Df(d,h,_){let M=oe.find(I=>I.id===d);!M||M.hp<=0||(Ws++,Ht(M,h,_,()=>{Bt(),Ot(),pr()}))}function Uf(d,h,_,M){let I=oe.find(O=>O.id===d),P=oe.find(O=>O.id===h);!I||!P||P.hp<=0||(Ws++,Ga(I,P,_,M,()=>{Bt(),Ot(),pr()}))}function Nf(d){let h=oe.find(M=>M.id===d.unitId),_=d.targetId!=null?oe.find(M=>M.id===d.targetId):null;if(h)if(Ws++,d.effectKey&&h.mp>=(jr[h.class]||[]).find(M=>M.effectKey===d.effectKey)?.cost){let M=(jr[h.class]||[]).find(I=>I.effectKey===d.effectKey);if(M){h.mp-=M.cost;let I={showFloatingCombatText:si,handleUnitDeath:Nn,updateUnitSlashVisibility:Xe,updateTurnUI:Ot,tryCollectPowerup:Ke,world:e,units:oe,reanimateDeadUnit:na,updateUnitPosition(N){let L=ve.get(N.id);L&&L.position.copy(Oe(N.x,N.y))},animateKnockback(N,L,W,q,fe,V){let se=ve.get(N.id);if(!se){V&&V();return}let ye=Oe(L,W).clone(),xe=Oe(q,fe).clone(),Re=performance.now(),Be=0;function it(vt){Be++,Be%2===0&&Bt();let rt=Math.min(1,(vt-Re)/Fs),_n=Kt=>Kt*Kt*(3-2*Kt);se.position.lerpVectors(ye,xe,_n(rt)),rt<1?requestAnimationFrame(it):(se.position.copy(xe),V&&V())}requestAnimationFrame(it)}};Na(d.effectKey,h,_,I),_&&Xe(_);let O=M.target==="self"||M.target==="ally"?M.target==="self"?h:_:null;O?et(O,()=>{Bt(),Ot(),pr()}):(Bt(),setTimeout(()=>{Bt(),Ot(),pr()},400))}else Bt(),setTimeout(()=>{Bt(),Ot(),pr()},400)}else Bt(),setTimeout(()=>{Bt(),Ot(),pr()},400)}function Of(){if(Ki[On]==="story")return;let d=Ki[On];if(wf(),pt=d,d==="online"){lr&&lr.classList.add("hidden"),Af();return}if(d==="pvp"||d==="pvcpu"){let h=Fa&&Fa.value||"long";C(h),d==="pvp"&&ia&&(Ei=Math.max(1,Math.min(20,parseInt(ia.value,10)||7)))}else d==="cvcpu"&&(ms&&Rh&&Ch&&Ph&&(uh=Math.max(5,Math.min(50,parseInt(Rh.value,10)||21)),dh=Math.max(5,Math.min(50,parseInt(Ch.value,10)||11)),fh=Math.max(.1,Math.min(.9,parseFloat(Ph.value)||.29))),ms&&Ih&&(ps=Math.max(10,Math.min(999,parseInt(Ih.value,10)||200))),C("long"));d==="cvcpu"&&(X=Math.max(1,parseInt(Ef?.value,10)||1),ee=0,ka&&(Ei=Math.max(1,Math.min(20,parseInt(ka.value,10)||7)))),lr&&lr.classList.add("hidden"),ta()}is?is.addEventListener("click",d=>{if(is.disabled)return;let h=is.querySelector(".mode-play-ripple");if(h){let _=is.getBoundingClientRect();h.style.left=d.clientX-_.left+"px",h.style.top=d.clientY-_.top+"px",h.style.width=h.style.height="20px",h.style.marginLeft=h.style.marginTop="-10px",h.classList.remove("ripple"),h.offsetHeight,h.classList.add("ripple"),setTimeout(()=>h.classList.remove("ripple"),500)}Of()}):ta();function bl(d){return pt==="pvcpu"&&d===2||pt==="cvcpu"}function Bf(){let d=Ti.filter(V=>Ze.has(V));if(d.length===0)return null;let h=qe||"balanced";if(h==="random")return d[Math.floor(Math.random()*d.length)];if(h==="custom")return of.filter(se=>Ze.has(se))[0]??d[0]??null;let _=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function M(V){let se=Jt[V];if(!se)return 1/0;let ye=_.map(Re=>se[Re]??0),xe=ye.reduce((Re,Be)=>Re+Be,0)/ye.length;return ye.reduce((Re,Be)=>Re+(Be-xe)**2,0)/ye.length}if(h==="tanky")return[...d].sort((se,ye)=>{let xe=Jt[se]?.hp??0,Re=Jt[ye]?.hp??0;return Re!==xe?Re-xe:(Jt[ye]?.vit??0)-(Jt[se]?.vit??0)})[0]??null;if(h==="aggressive")return[...d].sort((se,ye)=>{let xe=Jt[se]?.str??0,Re=Jt[ye]?.str??0;return Re!==xe?Re-xe:(Jt[ye]?.agi??0)-(Jt[se]?.agi??0)})[0]??null;if(h==="scout")return[...d].sort((se,ye)=>{let xe=Jt[se]?.agi??0,Re=Jt[ye]?.agi??0;return Re!==xe?Re-xe:(Jt[ye]?.dex??0)-(Jt[se]?.dex??0)})[0]??null;if(h==="ranged")return[...d].sort((se,ye)=>{let xe=Jt[se]?.range??0,Re=Jt[ye]?.range??0;return Re!==xe?Re-xe:(Jt[ye]?.dex??0)-(Jt[se]?.dex??0)})[0]??null;if(h==="caster")return[...d].sort((se,ye)=>{let xe=Jt[se]?.int??0,Re=Jt[ye]?.int??0;return Re!==xe?Re-xe:(Jt[ye]?.mp??0)-(Jt[se]?.mp??0)})[0]??null;let I=ki(),O=D_(Ei),N=oe.filter(V=>V.player===I).map(V=>V.class),L={};for(let V of Object.keys(rl))L[V]=0;for(let V of N)for(let se of Object.keys(rl))if(rl[se].includes(V)){L[se]++;break}let W=V=>Math.max(0,(O[V]??0)-(L[V]??0)),q=V=>{for(let[se,ye]of Object.entries(rl))if(ye.includes(V))return se;return null};return[...d].sort((V,se)=>{let ye=q(V),xe=q(se),Re=ye!=null?W(ye):0,Be=xe!=null?W(xe):0;if(Be!==Re)return Be-Re;let it=Jt[V]?.hp??0,vt=Jt[se]?.hp??0;return vt!==it?vt-it:M(V)-M(se)})[0]??null}function aa(){if(cn!=="draft"||!bl(ki()))return;if(!Je){let _=Bf();_&&dl(_),setTimeout(aa,500);return}let d=Array.from(sn).map(_=>({gx:_%e.w,gy:Math.floor(_/e.w)})),h=nf(e,d);if(h.length>0){let{gx:_,gy:M}=h[0];fl(_,M)}}function Fh(){let d=[];for(let h=0;h<e.h;h++)for(let _=0;_<e.w;_++)e.type[h][_]===Qe.CENTER&&d.push({gx:_,gy:h});return d}function Ff(d){let h=[],_=d===1?Qe.BASE_TOP:Qe.BASE_BOTTOM;for(let M=0;M<e.h;M++)for(let I=0;I<e.w;I++)e.type[M][I]===_&&h.push({gx:I,gy:M});return h}function xi(d,h,_,M){return Math.abs(d-_)+Math.abs(h-M)}function kf(d){let h=d.range!=null?d.range:1,_=[];for(let M of oe){if(M.hp<=0||M.player===d.player)continue;let I=xi(d.x,d.y,M.x,M.y);I<=h&&I>0&&or(e,d.x,d.y,M.x,M.y)&&_.push({target:M,dist:I})}return _}function Hf(d,h,_){let M=_??oe.filter(P=>P.hp>0&&P.player===d.player&&P.id!==d.id),I=h??oe.filter(P=>P.hp>0&&P.player!==d.player);for(let P of M)for(let O of I){let N=O.range!=null?O.range:1,L=xi(O.x,O.y,P.x,P.y);if(L<=N&&L>0&&or(e,O.x,O.y,P.x,P.y))return!0}return!1}function Ht(d,h,_,M){let I=d.x,P=d.y,O=Hs(e,d.x,d.y,h,_,oe,d);if(!O||O.length<=1){M&&M();return}Qt=null,Un(),kt=!0,g=!0,Ci(d.id),Bt();let N=ve.get(d.id),L=1;function W(){if(L>=O.length){d.x=O[O.length-1].x,d.y=O[O.length-1].y,Ke(d),kt=!1,Ne(N),Ci(),yt=new Map,St=!0,pt==="online"&&d.player===$t&&typeof un=="function"&&un({type:"move",unitId:d.id,toGx:d.x,toGy:d.y}),M&&M();return}let q=O[L-1],fe=O[L],V=Oe(q.x,q.y).clone(),se=Oe(fe.x,fe.y).clone(),ye=se.x-V.x,xe=se.z-V.z;ye*ye+xe*xe>1e-6&&(N.rotation.y=Math.atan2(ye,xe));let Re=performance.now(),Be=0;function it(vt){Be++,Be%2===0&&Bt();let rt=Math.min(1,(vt-Re)/Fs),Kt=(Zt=>Zt*Zt*(3-2*Zt))(rt);if(N.position.lerpVectors(V,se,Kt),$e(N,Kt),g){let Zt=a.position.distanceTo(u),yn=Zt<.1?o:Zt;m.copy(a.position).sub(u).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),u.lerp(N.position,l),a.position.copy(u).add(m.clone().multiplyScalar(yn)),a.lookAt(u)}rt<1?requestAnimationFrame(it):(L++,W())}requestAnimationFrame(it)}W()}function Ga(d,h,_,M,I){let P=_!==void 0,O,N=0;if(P)O=_,N=M!=null&&M>0?M:0;else{pt==="online"&&d.player===$t&&typeof un=="function"&&un({type:"requestRender"});let Ut=Pe(h,"agi")*.7+Pe(h,"luk")*.3;if(O=Math.random()*Math.max(.001,Ut)<=Pe(d,"dex"),O){let Ft=Pe(d,"str")*.7+Pe(d,"dex")*.2+Pe(d,"int")*.1-(Pe(h,"vit")*.3+Pe(h,"luk")*.2);N=Math.max(1,Math.floor(Ft))}}Sn=!0,Qt=null,mi=!1,Un(),!P&&pt==="online"&&d.player===$t&&typeof Xs=="function"&&Xs({type:"attack",unitId:d.id,targetId:h.id,hit:O,damage:O?N:void 0}),P||console.log("[ATTACK]",`${d.name} (${d.class}, P${d.player})`,"\u2192",`${h.name} (${h.class}, P${h.player})`,O?`${N} dmg`:"MISS",`| ${h.name} HP ${h.hp} \u2192 ${Math.max(0,h.hp-N)}/${h.maxHp}`);let L=ve.get(d.id);if(!L||!L.userData.rightArm){kt=!0,O?(h.hp=Math.max(0,h.hp-N),si(h.x,h.y,String(N),!1),Xe(h),h.hp<=0&&Nn(h,d)):si(h.x,h.y,"MISS",!0),setTimeout(()=>{kt=!1,I&&I(),P||(St?hn():Ot())},400);return}let W=Oe(d.x,d.y).clone(),q=Oe(h.x,h.y).clone(),fe=W.clone().lerp(q,.35),V=q.x-W.x,se=q.z-W.z;if(V*V+se*se>1e-6&&(L.rotation.y=Math.atan2(V,se)),(d.range!=null?d.range:1)>2){let Dt=function(re){ct++,ct%2===0&&Bt();let ge=re-Ii,pe=Math.min(1,ge/wt);if(Ft.position.lerpVectors(_i,dn,pe),Xt){let ne=Math.sin(pe*Math.PI)*1.1;Xt.rotation.y=-ne}if(!Tn&&pe>=1&&(Tn=!0,n.remove(Ft),Ut.dispose(),tn.dispose(),O?(h.hp=Math.max(0,h.hp-N),si(h.x,h.y,String(N),!1),h.hp<=0&&(zn=!0),ve.get(h.id)?wn=re:zn&&(Nn(h,d),zn=!1),Xe(h)):si(h.x,h.y,"MISS",!0)),wn!=null&&O){let ne=ve.get(h.id);if(ne){let he=Math.min(1,(re-wn)/ln),Se=1-he;bs.copy(Mt).multiplyScalar(en*Se),ne.position.copy(lt).add(bs),he>=1&&(ne.position.copy(lt),wn=null,zn&&(Nn(h,d),zn=!1))}else wn=null,zn&&(Nn(h,d),zn=!1)}if(pe<1)requestAnimationFrame(Dt);else{Xt&&(Xt.rotation.y=0);let ne=wn==null;ne&&zn&&(Nn(h,d),zn=!1),ne?(qn.shadowMap.enabled=!0,kt=!1,I&&setTimeout(()=>I(),0),P||setTimeout(St?()=>hn():()=>Ot(),400)):requestAnimationFrame(Dt)}},Ut=new Bs(.035,.035,.4,6),tn=new Pn({color:16763972}),Ft=new Ye(Ut,tn);Ft.position.copy(W),Ft.position.y+=.6;let It=q.clone().sub(W).normalize();Ft.quaternion.setFromUnitVectors(new k(0,1,0),It),n.add(Ft),kt=!0;let Xt=L.userData.rightArm,lt=Oe(h.x,h.y).clone(),Mt=q.clone().sub(W).normalize(),en=.4,Tn=!1,wn=null,zn=!1,_i=Ft.position.clone(),dn=q.clone();dn.y+=.6;let Ii=performance.now(),ct=0;qn.shadowMap.enabled=!1,requestAnimationFrame(Dt);return}let Re=!1,Be=performance.now(),it=L.userData.rightArm,vt=null,rt=!1,_n=Oe(h.x,h.y).clone(),Kt=q.clone().sub(W).normalize(),Zt=.4,yn=0;function En(Ut){yn++,yn%2===0&&Bt();let tn=Ut-Be,Ft=Math.min(1,tn/_t),It=Ft<=.4?Ft/.4:1,Xt=Ft>.4?(Ft-.4)/.6:0;Ft<=.4?L.position.lerpVectors(W,fe,It):L.position.lerpVectors(fe,W,Xt);let lt=Ft<=.35?Ft/.35:Ft<=.7?(.7-Ft)/.35:0;if(it.rotation.y=-lt*1.1,!Re&&Ft>=Wt&&(Re=!0,O?(h.hp=Math.max(0,h.hp-N),si(h.x,h.y,String(N),!1),h.hp<=0&&(rt=!0),Xe(h),ve.get(h.id)?vt=Ut:rt&&(Nn(h,d),rt=!1)):si(h.x,h.y,"MISS",!0)),vt!=null&&O){let Mt=ve.get(h.id);if(Mt){let en=Math.min(1,(Ut-vt)/ln),Tn=1-en;bs.copy(Kt).multiplyScalar(Zt*Tn),Mt.position.copy(_n).add(bs),en>=1&&(Mt.position.copy(_n),vt=null,rt&&(Nn(h,d),rt=!1))}else vt=null,rt&&(Nn(h,d),rt=!1)}if(Ft<1)requestAnimationFrame(En);else{L.position.copy(W),it.rotation.y=0;let Mt=vt==null;Mt&&rt&&(Nn(h,d),rt=!1),Mt?(qn.shadowMap.enabled=!0,kt=!1,I&&setTimeout(()=>I(),0),P||setTimeout(St?()=>hn():()=>Ot(),400)):requestAnimationFrame(En)}}kt=!0,qn.shadowMap.enabled=!1,requestAnimationFrame(En)}function zf(d,h){let _=Oe(d,h);_.y+=.4;let M=new Qi(.1,12,12),I=new Pn({color:8930559,transparent:!0,opacity:.9}),P=new Ye(M,I);P.position.copy(_),n.add(P);let O=performance.now(),N=0;function L(W){N++,N%2===0&&Bt();let q=W-O,fe=Math.min(1,q/Ie),V=fe*(2-fe);P.scale.setScalar(V*7.5),I.opacity=.9*(1-fe),fe<1?requestAnimationFrame(L):(n.remove(P),M.dispose(),I.dispose())}requestAnimationFrame(L)}function Wa(d,h,_,M,I){if(_.target==="enemy"&&h==null){setTimeout(()=>{M.updateTurnUI&&M.updateTurnUI(),I&&I()},400);return}let O=(_.range??0)>2&&h!=null&&(h.x!==d.x||h.y!==d.y),N=!O&&h!=null&&(h.x!==d.x||h.y!==d.y);if(!O&&!N){kt=!0,Na(_.effectKey,d,h,M);let It=_.target==="self"||_.target==="ally",Xt=_.target==="self"?d:h;It&&Xt?et(Xt,()=>{setTimeout(()=>{kt=!1,M.updateTurnUI&&M.updateTurnUI(),I&&I()},400)}):setTimeout(()=>{kt=!1,M.updateTurnUI&&M.updateTurnUI(),I&&I()},400);return}if(N){let ne=function(he){pe++,pe%2===0&&Bt();let Se=he-ge,me=Math.min(1,Se/_t),Ce=me<=.4?me/.4:1,Rt=me>.4?(me-.4)/.6:0;me<=.4?It.position.lerpVectors(Xt,Mt,Ce):It.position.lerpVectors(Mt,Xt,Rt);let bt=me<=.35?me/.35:me<=.7?(.7-me)/.35:0;if(dn.rotation.y=-bt*1.1,!Ii&&me>=Wt&&(Ii=!0,Na(_.effectKey,d,h,re),h.hp<=0&&(Dt=!0),M.updateUnitSlashVisibility&&M.updateUnitSlashVisibility(h),ve.get(h.id)&&_.target!=="ally"?ct=he:Dt&&(Nn(h,d),Dt=!1)),ct!=null){let vn=ve.get(h.id);if(vn){let Et=Math.min(1,(he-ct)/ln),In=1-Et;bs.copy(zn).multiplyScalar(_i*In),vn.position.copy(wn).add(bs),Et>=1&&(vn.position.copy(wn),ct=null,Dt&&(Nn(h,d),Dt=!1))}else ct=null,Dt&&(Nn(h,d),Dt=!1)}me<1?requestAnimationFrame(ne):(It.position.copy(Xt),dn.rotation.y=0,ct==null&&Dt&&(Nn(h,d),Dt=!1),ct==null?(qn.shadowMap.enabled=!0,kt=!1,setTimeout(()=>{M.updateTurnUI&&M.updateTurnUI(),I&&I()},400)):requestAnimationFrame(ne))},It=ve.get(d.id);if(!It||!It.userData.rightArm){kt=!0,Na(_.effectKey,d,h,M),M.updateUnitSlashVisibility&&M.updateUnitSlashVisibility(h),setTimeout(()=>{kt=!1,M.updateTurnUI&&M.updateTurnUI(),I&&I()},400);return}kt=!0;let Xt=Oe(d.x,d.y).clone(),lt=Oe(h.x,h.y).clone(),Mt=Xt.clone().lerp(lt,.35),en=lt.x-Xt.x,Tn=lt.z-Xt.z;en*en+Tn*Tn>1e-6&&(It.rotation.y=Math.atan2(en,Tn));let wn=Oe(h.x,h.y).clone(),zn=lt.clone().sub(Xt).normalize(),_i=.4,dn=It.userData.rightArm,Ii=!1,ct=null,Dt=!1,re={...M,handleUnitDeath:void 0},ge=performance.now(),pe=0;qn.shadowMap.enabled=!1,requestAnimationFrame(ne);return}let L=Oe(d.x,d.y).clone(),W=Oe(h.x,h.y).clone(),q=new Bs(.035,.035,.4,6),fe=new Pn({color:16763972}),V=new Ye(q,fe);V.position.copy(L),V.position.y+=.6;let se=W.clone().sub(L).normalize();V.quaternion.setFromUnitVectors(new k(0,1,0),se),n.add(V),kt=!0;let ye=ve.get(d.id),xe=ye&&ye.userData.rightArm?ye.userData.rightArm:null;if(ye){let It=W.x-L.x,Xt=W.z-L.z;It*It+Xt*Xt>1e-6&&(ye.rotation.y=Math.atan2(It,Xt))}let Re=V.position.clone(),Be=W.clone();Be.y+=.6;let it=performance.now(),vt=Oe(h.x,h.y).clone(),rt=W.clone().sub(L).normalize(),_n=.4,Kt=!1,Zt=null,yn=0,En=null,Ut=_.effectKey==="powerShot"?{...M,animateKnockback(It,Xt,lt,Mt,en,Tn){En={targ:It,fromGx:Xt,fromGy:lt,toGx:Mt,toGy:en,knockbackOnDone:Tn}}}:M;function tn(){qn.shadowMap.enabled=!0,kt=!1,setTimeout(()=>{M.updateTurnUI&&M.updateTurnUI(),I&&I()},400)}function Ft(It){yn++,yn%2===0&&Bt();let Xt=It-it,lt=Math.min(1,Xt/wt);if(V.position.lerpVectors(Re,Be,lt),xe){let Mt=Math.sin(lt*Math.PI)*1.1;xe.rotation.y=-Mt}if(!Kt&&lt>=1&&(Kt=!0,n.remove(V),q.dispose(),fe.dispose(),_.type==="spell"&&zf(h.x,h.y),Na(_.effectKey,d,h,Ut),ve.get(h.id)&&h.hp>0&&(Zt=It),M.updateUnitSlashVisibility&&M.updateUnitSlashVisibility(h)),Zt!=null){let Mt=ve.get(h.id);if(Mt){let en=Math.min(1,(It-Zt)/ln),Tn=1-en;if(bs.copy(rt).multiplyScalar(_n*Tn),Mt.position.copy(vt).add(bs),en>=1&&(Mt.position.copy(vt),Zt=null,En)){let{targ:wn,fromGx:zn,fromGy:_i,toGx:dn,toGy:Ii,knockbackOnDone:ct}=En;En=null,M.animateKnockback?M.animateKnockback(wn,zn,_i,dn,Ii,()=>{ct&&ct(),M.updateUnitSlashVisibility&&M.updateUnitSlashVisibility(wn),tn()}):tn();return}}else if(Zt=null,En){En=null,tn();return}}if(lt<1)requestAnimationFrame(Ft);else if(xe&&(xe.rotation.y=0),Zt==null)if(En){let{targ:Mt,fromGx:en,fromGy:Tn,toGx:wn,toGy:zn,knockbackOnDone:_i}=En;En=null,M.animateKnockback?M.animateKnockback(Mt,en,Tn,wn,zn,()=>{_i&&_i(),M.updateUnitSlashVisibility&&M.updateUnitSlashVisibility(Mt),tn()}):tn()}else tn();else requestAnimationFrame(Ft)}qn.shadowMap.enabled=!1,requestAnimationFrame(Ft)}function gn(){if(cn!=="playing"||!bl(bn)||kt||tt.length===0)return;let d=tt[st],h=oe.find(re=>re.id===d);if(!h||h.hp<=0)return;let _=Pe(h,"agi"),M=al(e,h.x,h.y,_,oe,h),I=new Set(oe.filter(re=>re.hp>0&&re.id!==h.id).map(re=>re.y*e.w+re.x)),P=[];M.forEach((re,ge)=>{re!==0&&(I.has(ge)||P.push({gx:ge%e.w,gy:Math.floor(ge/e.w),dist:re}))});let O=kf(h),N=Fh(),L=Ff(h.player),W=.25,q=.03,fe=h.maxHp>0&&h.hp/h.maxHp<W,V=h.maxHp>0&&h.hp/h.maxHp<q,se=h.level===2,ye=N.filter(re=>!I.has(re.gy*e.w+re.gx)),xe=L.filter(re=>!I.has(re.gy*e.w+re.gx)),Re=new Set(N.map(re=>re.gy*e.w+re.gx)),Be=ye.length>0?ye:N,it=xe.length>0?xe:L,vt=Be.length>0?Tn(Be):null,rt=it.length>0?Tn(it):null,_n=Sl(h),Kt=_n.filter(re=>!re.disabled&&h.mp>=re.cost&&re.target==="enemy"),Zt=Kt.length>0?Math.max(...Kt.map(re=>re.range||0)):0,yn=Math.max(h.range!=null?h.range:1,Zt),En=h.level>=2&&yn>=2,Ut=oe.filter(re=>re.hp>0&&re.player!==h.player),tn=oe.filter(re=>re.hp>0&&re.player===h.player&&re.id!==h.id);function Ft(re,ge){if(ge.length===0)return null;let pe=null,ne=1/0;for(let he of re){let Se=0;for(let me of ge)Se+=xi(he.gx,he.gy,me.gx,me.gy);Se<ne&&(ne=Se,pe=he)}return pe}function It(re,ge){if(ge.length===0||re.length===0)return null;let pe=null,ne=1/0;for(let he of re){let Se=Math.min(...ge.map(me=>xi(he.gx,he.gy,me.gx,me.gy)));Se<ne&&(ne=Se,pe=he)}return pe}function Xt(re,ge){let pe=yn,ne=[];for(let he of oe){if(he.hp<=0||he.player===h.player)continue;let Se=xi(re,ge,he.x,he.y);Se<=pe&&Se>0&&or(e,re,ge,he.x,he.y)&&ne.push({target:he,dist:Se})}return ne}let lt=new Set(P.map(re=>re.gy*e.w+re.gx));function Mt(re,ge){if(!re||re.length<=1)return null;let pe=Math.min(ge,re.length-1);for(let ne=pe;ne>=1;ne--){let he=re[ne],Se=he.y*e.w+he.x;if(lt.has(Se))return{gx:he.x,gy:he.y}}return null}function en(re,ge){if(!re||re.length<=1)return null;let pe=Math.min(ge,re.length-1);for(let ne=pe;ne>=1;ne--){let he=re[ne];if(!I.has(he.y*e.w+he.x))return{gx:he.x,gy:he.y}}return null}function Tn(re){let ge=null,pe=null,ne=1/0;for(let he of re){let Se=Hs(e,h.x,h.y,he.gx,he.gy,oe,h);Se&&Se.length>1&&Se.length<ne&&(ne=Se.length,ge=Se,pe=he)}return ge&&pe?{path:ge,target:pe}:null}function wn(re){let ge=re??P;if(ge.length===0)return null;if(Ut.length===0)return ge[0];let pe=null,ne=-1;for(let he of ge){let Se=Math.min(...Ut.map(me=>xi(he.gx,he.gy,me.x,me.y)));Se>ne&&(ne=Se,pe=he)}return pe}function zn(re){let ge=re??P;if(ge.length===0)return null;if(Ut.length===0)return ge[0];let pe=h.maxHp>0&&h.hp/h.maxHp>=.6,ne=null,he=-1/0;for(let Se of ge){let me=Math.min(...Ut.map(bt=>xi(Se.gx,Se.gy,bt.x,bt.y))),Ce=tn.length>0?Math.min(...tn.map(bt=>xi(Se.gx,Se.gy,bt.x,bt.y))):999,Rt;pe?Rt=Ce<me?me-1e3:me:Rt=me-Ce,Rt>he&&(he=Rt,ne=Se)}return ne}function _i(){let re=yn;if(Ut.length===0)return null;let ge=null,pe=-1;for(let ne of P){let he=Math.min(...Ut.map(me=>xi(ne.gx,ne.gy,me.x,me.y)));Ut.some(me=>xi(ne.gx,ne.gy,me.x,me.y)<=re)&&he>pe&&(pe=he,ge=ne)}return ge}let dn=new Map;for(let re of P){let ge=re.gy*e.w+re.gx;dn.has(ge)||dn.set(ge,Xt(re.gx,re.gy))}let Ii=O.some(re=>re.target.maxHp>0&&re.target.hp/re.target.maxHp<W),ct=Ii||P.some(re=>(dn.get(re.gy*e.w+re.gx)||[]).some(pe=>pe.target.maxHp>0&&pe.target.hp/pe.target.maxHp<W));if(Sn){if(St){setTimeout(()=>hn(),400);return}if(En&&Ut.length>0&&le.size>0&&P.length>0){let he=[];le.forEach((me,Ce)=>{he.push({gx:Ce%e.w,gy:Math.floor(Ce/e.w)})});let Se=Tn(he);if(Se){let me=en(Se.path,_);if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(hn,400));return}let Ce=It(P,he);if(Ce&&(Ce.gx!==h.x||Ce.gy!==h.y)){Ht(h,Ce.gx,Ce.gy,()=>setTimeout(hn,400));return}}}if(ps-Fi<=20&&N.length>0){let he=N.some(Se=>Se.gx===h.x&&Se.gy===h.y);if(he&&P.length>0){let me=P.filter(Ce=>Re.has(Ce.gy*e.w+Ce.gx)).filter(Ce=>Ce.gx!==h.x||Ce.gy!==h.y);if(me.length>0){let Ce=wn(me);if(Ce&&(Ce.gx!==h.x||Ce.gy!==h.y)){Ht(h,Ce.gx,Ce.gy,()=>setTimeout(hn,400));return}}setTimeout(()=>hn(),400);return}if(he){setTimeout(()=>hn(),400);return}if(P.length>0){let Se=vt,me=Se?en(Se.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(hn,400));return}let Ce=It(P,Be);if(Ce&&(Ce.gx!==h.x||Ce.gy!==h.y)){Ht(h,Ce.gx,Ce.gy,()=>setTimeout(hn,400));return}}setTimeout(()=>hn(),400);return}if(!fe&&P.length>0){if(se&&L.length>0&&!L.some(Se=>Se.gx===h.x&&Se.gy===h.y)){let Se=rt,me=Se?en(Se.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(hn,400));return}let Ce=It(P,it);if(Ce&&(Ce.gx!==h.x||Ce.gy!==h.y)){Ht(h,Ce.gx,Ce.gy,()=>setTimeout(hn,400));return}}if(N.length>0&&!N.some(Se=>Se.gx===h.x&&Se.gy===h.y)){let Se=vt,me=Se?en(Se.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(hn,400));return}let Ce=It(P,Be);if(Ce&&(Ce.gx!==h.x||Ce.gy!==h.y)){Ht(h,Ce.gx,Ce.gy,()=>setTimeout(hn,400));return}}}let ge=N.length>0?P.filter(he=>Re.has(he.gy*e.w+he.gx)):null,pe=ge!=null&&ge.length>0?ge:P,ne=null;if(pe.length>0&&tn.length>0&&(ne=zn(pe),ne)){let he=Hs(e,h.x,h.y,ne.gx,ne.gy,oe,h),Se=he?he.length-1:1/0;(!he||he.length<=1||Se>_)&&(ne=wn(pe))}if(!ne&&pe.length>0&&(ne=wn(pe)),ne&&(ne.gx!==h.x||ne.gy!==h.y)){Ht(h,ne.gx,ne.gy,()=>setTimeout(hn,400));return}setTimeout(()=>hn(),400);return}if(V&&ps-Fi>20&&!St&&P.length>0){let re=null,ge=1/0;for(let ne of P){let Se=(dn.get(ne.gy*e.w+ne.gx)||[]).filter(me=>me.target.maxHp>0&&me.target.hp/me.target.maxHp<W);if(Se.length>0){let me=Math.min(...Se.map(Ce=>Ce.target.hp));me<ge&&(ge=me,re=ne)}}if(re){let ne=Hs(e,h.x,h.y,re.gx,re.gy,oe,h),he=ne?Mt(ne,_):null;if(he&&(he.gx!==h.x||he.gy!==h.y)){Ht(h,he.gx,he.gy,()=>setTimeout(gn,600));return}}let pe=wn();if(pe&&(pe.gx!==h.x||pe.gy!==h.y)){Ht(h,pe.gx,pe.gy,()=>setTimeout(gn,600));return}setTimeout(()=>hn(),400);return}if(!Sn){let bt=function(Ct){return oa(h,Ct,oe).filter(Vt=>Vt.targetUnit!=null).map(Vt=>Vt.targetUnit)},re=_n,ge=h.maxHp>0?h.hp/h.maxHp:1,pe=.35,ne=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct","bloodSuck"]),he=new Set(["chakra","sacrifice"]),Se=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),me=new Set(["impale","poison","gaze","debilitate"]),Ce=new Set(["dominate","manaDrain","weaken","cripple","hex","blind","raid"]),Rt=new Set(["reanimate"]),vn={showFloatingCombatText:si,handleUnitDeath:Nn,updateUnitSlashVisibility:Xe,updateTurnUI:Ot,tryCollectPowerup:Ke,world:e,units:oe,reanimateDeadUnit:na,updateUnitPosition(Ct){let zt=ve.get(Ct.id);zt&&zt.position.copy(Oe(Ct.x,Ct.y))},animateKnockback(Ct,zt,Vt,an,Yn,fn){let Bn=ve.get(Ct.id);if(!Bn){fn&&fn();return}let yr=Oe(zt,Vt).clone(),qs=Oe(an,Yn).clone(),Rl=performance.now(),qh=0;function Yh(tp){qh++,qh%2===0&&Bt();let $h=Math.min(1,(tp-Rl)/Fs),np=Cl=>Cl*Cl*(3-2*Cl);Bn.position.lerpVectors(yr,qs,np($h)),$h<1?requestAnimationFrame(Yh):(Bn.position.copy(qs),fn&&fn())}requestAnimationFrame(Yh)}},Et=null,In=null,vi=Ii||!St&&ct;if(!vi){for(let zt of re)if(!(zt.disabled||h.mp<zt.cost)&&he.has(zt.effectKey)){let an=oa(h,zt,oe).filter(Yn=>Yn.targetUnit&&Yn.targetUnit.maxHp>0&&Yn.targetUnit.hp/Yn.targetUnit.maxHp<.5);if(an.length>0){let Yn=an.sort((fn,Bn)=>fn.targetUnit.hp-Bn.targetUnit.hp)[0].targetUnit;Et=zt,In=Yn;break}}}if(!Et&&!vi){let Ct=oe.filter(zt=>zt.hp<=0);for(let zt of re)if(!(zt.disabled||h.mp<zt.cost)&&Rt.has(zt.effectKey)&&Ct.length>0){Et=zt,In=h;break}}if(!Et&&!vi&&(O.length>0||P.some(zt=>(dn.get(zt.gy*e.w+zt.gx)||[]).length>0))){let zt=re.filter(Vt=>!Vt.disabled&&Se.has(Vt.effectKey)).sort((Vt,an)=>(an.level||1)-(Vt.level||1));for(let Vt of zt){let an=h.tempBuff&&h.tempBuff.duration>0;if(Vt.target==="self"){if(Vt.effectKey==="bloodlust"&&h.hp/h.maxHp>.8)continue;if(!an){Et=Vt,In=h;break}}if(Vt.target==="ally"){if(Vt.effectKey==="forge"&&an||Vt.effectKey==="fortify"&&an||Vt.effectKey==="mantra"&&an||Vt.effectKey==="sanctuary"&&an)continue;let fn=oa(h,Vt,oe).filter(Bn=>Bn.targetUnit!=null).map(Bn=>Bn.targetUnit);if(fn.length>0){let Bn=fn.filter(qs=>!qs.tempBuff||qs.tempBuff.duration<=0),yr=(Bn.length>0?Bn:fn).sort((qs,Rl)=>qs.hp-Rl.hp)[0];Et=Vt,In=yr;break}}}}if(!Et){for(let Ct of re)if(!(Ct.disabled||h.mp<Ct.cost)&&ne.has(Ct.effectKey)){if(Ct.effectKey==="feast"&&h.hp/h.maxHp>.7||Ct.effectKey==="berserk"&&h.hp/h.maxHp<.25||Ct.effectKey==="shuriken"&&O.length>0||Ct.effectKey==="judgement"&&h.hp/h.maxHp>.7)continue;let zt=bt(Ct);if(zt.length===0)continue;let Vt=zt.filter(fn=>fn.maxHp>0&&fn.hp/fn.maxHp<pe),an=Vt.length>0?Vt:zt,Yn=Ct.type==="spell"?an.reduce((fn,Bn)=>{if(!fn)return Bn;let yr=Pe(Bn,"int")-Pe(fn,"int");return yr<0||yr===0&&Bn.hp<fn.hp?Bn:fn},null):an.reduce((fn,Bn)=>!fn||Bn.hp<fn.hp?Bn:fn,null);Et=Ct,In=Yn;break}}if(!Et&&!vi){for(let Ct of re)if(!(Ct.disabled||h.mp<Ct.cost)&&Ce.has(Ct.effectKey)){let zt=bt(Ct),Vt=zt.length>0?zt.reduce((an,Yn)=>!an||Yn.hp<an.hp?Yn:an,null):null;Et=Ct,In=Vt;break}}if(!Et&&!vi){for(let Ct of re)if(!(Ct.disabled||h.mp<Ct.cost)&&me.has(Ct.effectKey)){let Vt=bt(Ct).filter(an=>!an.tempDebuff||an.tempDebuff.duration<=0);if(Vt.length>0){let an=Vt.reduce((Yn,fn)=>!Yn||fn.hp<Yn.hp?fn:Yn,null);Et=Ct,In=an;break}}}if(Et&&In){h.mp-=Et.cost,Sn=!0;let Ct=Et.target==="self"?h:In;Wa(h,Ct,Et,vn,()=>setTimeout(gn,600));return}}if(Hf(h,Ut,tn)&&O.length>0){O.sort((ge,pe)=>ge.target.hp-pe.target.hp||ge.dist-pe.dist);let re=O[0].target;Ga(h,re);return}if(O.length>0){O.sort((ge,pe)=>ge.target.hp-pe.target.hp||ge.dist-pe.dist);let re=O[0].target;Ga(h,re);return}if(!St&&!ct&&le.size>0&&P.length>0){let re=[];le.forEach((pe,ne)=>{re.push({gx:ne%e.w,gy:Math.floor(ne/e.w)})});let ge=Tn(re);if(ge){let pe=en(ge.path,_);if(pe&&(pe.gx!==h.x||pe.gy!==h.y)){Ht(h,pe.gx,pe.gy,()=>setTimeout(gn,600));return}let ne=It(P,re);if(ne&&(ne.gx!==h.x||ne.gy!==h.y)){Ht(h,ne.gx,ne.gy,()=>setTimeout(gn,600));return}}}let Dt=ps-Fi;if(Dt<=20&&N.length>0&&!St&&P.length>0&&!N.some(ge=>ge.gx===h.x&&ge.gy===h.y)){let ge=vt,pe=ge?ge.path:null,ne=N.length>0?Math.min(...N.map(Et=>xi(h.x,h.y,Et.gx,Et.gy))):1/0,he=new Map,Se=new Map;for(let Et of P){let In=Et.gy*e.w+Et.gx;he.set(In,N.length>0?Math.min(...N.map(vi=>xi(Et.gx,Et.gy,vi.gx,vi.gy))):1/0),Se.set(In,pe?pe.findIndex(vi=>vi.x===Et.gx&&vi.y===Et.gy):-1)}let me=null,Ce=-1,Rt=W;for(let Et of P){let In=Et.gy*e.w+Et.gx;if(he.get(In)>ne||(dn.get(In)||[]).filter(an=>an.target.maxHp>0&&an.target.hp/an.target.maxHp<Rt).length===0)continue;let zt=Se.get(In),Vt=zt>=0?zt:0;Vt>Ce&&(Ce=Vt,me=Et)}if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(gn,600));return}let bt=ge?en(ge.path,_):null;if(bt&&(bt.gx!==h.x||bt.gy!==h.y)){Ht(h,bt.gx,bt.gy,()=>setTimeout(gn,600));return}let vn=It(P,Be);if(vn&&(vn.gx!==h.x||vn.gy!==h.y)){Ht(h,vn.gx,vn.gy,()=>setTimeout(gn,600));return}}if(fe&&P.length>0&&!St){let re=null,ge=1/0;for(let pe of P){let he=(dn.get(pe.gy*e.w+pe.gx)||[]).filter(Se=>Se.target.maxHp>0&&Se.target.hp/Se.target.maxHp<W);if(he.length>0){let Se=Math.min(...he.map(me=>me.target.hp));Se<ge&&(ge=Se,re=pe)}}if(re){let pe=Hs(e,h.x,h.y,re.gx,re.gy,oe,h),ne=pe?Mt(pe,_):null;if(ne&&(ne.gx!==h.x||ne.gy!==h.y)){Ht(h,ne.gx,ne.gy,()=>setTimeout(gn,600));return}}if(Dt>20&&se&&L.length>0&&!L.some(ne=>ne.gx===h.x&&ne.gy===h.y)){let ne=xe.length>0?xe:L,he=rt;if(he!=null&&he.path.length<=5){let me=en(he.path,_);if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(gn,600));return}let Ce=It(P,ne);if(Ce&&(Ce.gx!==h.x||Ce.gy!==h.y)){Ht(h,Ce.gx,Ce.gy,()=>setTimeout(gn,600));return}}}if(Dt>20){let pe=wn();if(pe&&xi(h.x,h.y,pe.gx,pe.gy)>0){Ht(h,pe.gx,pe.gy,()=>setTimeout(gn,600));return}setTimeout(()=>hn(),400);return}}if(Dt<=10&&N.length>0&&!St&&P.length>0&&!N.some(ge=>ge.gx===h.x&&ge.gy===h.y)){let ge=ye.length>0?ye:N,pe=vt,ne=pe?en(pe.path,_):null;if(ne&&(ne.gx!==h.x||ne.gy!==h.y)){Ht(h,ne.gx,ne.gy,()=>setTimeout(gn,600));return}let he=It(P,ge);if(he&&(he.gx!==h.x||he.gy!==h.y)){Ht(h,he.gx,he.gy,()=>setTimeout(gn,600));return}}if(h.level===1&&N.length>0&&!St&&!N.some(ge=>ge.gx===h.x&&ge.gy===h.y)&&P.length>0){let ge=ye.length>0?ye:N,pe=vt,ne=pe?en(pe.path,_):null;if(ne&&(ne.gx!==h.x||ne.gy!==h.y)){Ht(h,ne.gx,ne.gy,()=>setTimeout(gn,600));return}let he=It(P,ge);if(he&&(he.gx!==h.x||he.gy!==h.y)){Ht(h,he.gx,he.gy,()=>setTimeout(gn,600));return}}if(se&&L.length>0&&!St&&!L.some(ge=>ge.gx===h.x&&ge.gy===h.y)&&P.length>0){let ge=Ut.filter(Rt=>Rt.maxHp>0&&Rt.hp/Rt.maxHp<W),pe=null,ne=1/0;for(let Rt of P){let vn=(dn.get(Rt.gy*e.w+Rt.gx)||[]).find(Et=>ge.some(In=>In.id===Et.target.id));vn&&vn.target.hp<ne&&(ne=vn.target.hp,pe=Rt)}if(pe){let Rt=Hs(e,h.x,h.y,pe.gx,pe.gy,oe,h),bt=Rt?Mt(Rt,_):null;if(bt&&(bt.gx!==h.x||bt.gy!==h.y)){Ht(h,bt.gx,bt.gy,()=>setTimeout(gn,600));return}}let he=xe.length>0?xe:L,Se=rt,me=Se?en(Se.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(gn,600));return}let Ce=It(P,he);if(Ce&&(Ce.gx!==h.x||Ce.gy!==h.y)){Ht(h,Ce.gx,Ce.gy,()=>setTimeout(gn,600));return}}if(En&&Ut.length>0&&!St&&P.length>0){if(!ct&&le.size>0){let ge=[];le.forEach((ne,he)=>{ge.push({gx:he%e.w,gy:Math.floor(he/e.w)})});let pe=Tn(ge);if(pe){let ne=en(pe.path,_);if(ne&&(ne.gx!==h.x||ne.gy!==h.y)){Ht(h,ne.gx,ne.gy,()=>setTimeout(gn,600));return}let he=It(P,ge);if(he&&(he.gx!==h.x||he.gy!==h.y)){Ht(h,he.gx,he.gy,()=>setTimeout(gn,600));return}}}let re=_i();if(re&&(re.gx!==h.x||re.gy!==h.y)){Ht(h,re.gx,re.gy,()=>setTimeout(gn,600));return}}if(Ut.length>0&&!St&&P.length>0){let ge=function(ne,he){let Se=null;for(let me=-re;me<=re;me++)for(let Ce=-re;Ce<=re;Ce++){if(Ce===0&&me===0||Math.abs(Ce)+Math.abs(me)>re)continue;let Rt=ne.x+Ce,bt=ne.y+me;if(Rt<0||Rt>=e.w||bt<0||bt>=e.h||!zs(e,Rt,bt)||!or(e,Rt,bt,ne.x,ne.y)||oe.some(Ct=>Ct.hp>0&&Ct.x===Rt&&Ct.y===bt))continue;let Et=Hs(e,h.x,h.y,Rt,bt,oe,h),In=Et?Et.length-1:1/0;Et&&Et.length>1&&(!he||In<=_)&&(!Se||Et.length<Se.length)&&(Se=Et)}return Se},re=yn,pe=[];for(let ne of Ut){let he=ge(ne,!0);he&&pe.push({enemy:ne,path:he})}if(pe.length>0){let ne=pe.filter(Ce=>Ce.enemy.maxHp>0&&Ce.enemy.hp/Ce.enemy.maxHp<W),he=ne.length>0?ne:pe;ne.length>0?he.sort((Ce,Rt)=>Ce.enemy.hp-Rt.enemy.hp||Ce.path.length-Rt.path.length):he.sort((Ce,Rt)=>Ce.path.length-Rt.path.length||Ce.enemy.hp-Rt.enemy.hp);let Se=he[0],me=Mt(Se.path,_);if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(gn,600));return}}if(pe.length===0){let ne=null,he=1/0;for(let Se of Ut){let me=ge(Se,!1);me&&me.length<he&&(he=me.length,ne=me)}if(ne){let Se=Mt(ne,_);if(Se&&(Se.gx!==h.x||Se.gy!==h.y)){Ht(h,Se.gx,Se.gy,()=>setTimeout(gn,600));return}}}}setTimeout(()=>hn(),400)}function Un(){for(gi.length=0;Qn.children.length;){let d=Qn.children[0];Qn.remove(d),d.geometry!==la&&d.geometry!==ca&&d.geometry.dispose(),d.material.dispose()}Bt()}let mr=new Set;function Sl(d){if(!d)return[];let h=d.summonedSkills&&d.summonedSkills.length>0?d.summonedSkills:d.class&&jr[d.class]?jr[d.class]:[],_=oe.some(M=>M.hp<=0);return h.map(M=>({...M,disabled:M.disabled===!0||d.level<(M.level||1)||M.hpCost&&d.hp<M.hpCost||M.cost!=null&&d.mp<M.cost||M.effectKey==="reanimate"&&!_}))}function oa(d,h,_){let M=[],I=(O,N,L,W)=>Math.abs(O-L)+Math.abs(N-W),P=h.range||0;if(h.target==="self")return M.push({gx:d.x,gy:d.y,targetUnit:null}),M;for(let O of _)O.hp<=0||I(d.x,d.y,O.x,O.y)>P||P>=2&&!or(e,d.x,d.y,O.x,O.y)||(h.target==="enemy"&&O.player!==d.player&&M.push({gx:O.x,gy:O.y,targetUnit:O}),h.target==="ally"&&O.player===d.player&&M.push({gx:O.x,gy:O.y,targetUnit:O}));return M}function Vf(d,h){let _=h.range||0;if(h.target==="self")return[{gx:d.x,gy:d.y}];let M=sf(e,d.x,d.y,_),I=[];return M.forEach((P,O)=>{let N=O%e.w,L=O/e.w|0;_>=2&&!or(e,d.x,d.y,N,L)||I.push({gx:N,gy:L})}),I}function Gf(d,h){let _=oa(d,h,oe);mr=new Set(_.map(I=>`${I.gx},${I.gy}`));let M=h.target==="self"?_:Vf(d,h);Un(),M.forEach(({gx:I,gy:P})=>{let N=(jn+e.height[P][I]*.35)/2+jn/2,L=I*gt-ze+gt/2,W=P*gt-Gt+gt/2,q=N+.01,fe=new Pn({color:8926122,transparent:!0,opacity:.4,side:An}),V=new Ye(la,fe);V.rotation.x=-Math.PI/2,V.position.set(L,q,W),Qn.add(V),gi.push(fe);let se=new Pn({color:11167436,transparent:!0,opacity:.7,side:An}),ye=new Ye(ca,se);ye.rotation.x=-Math.PI/2,ye.position.set(L,q+.01,W),ye.userData.gx=I,ye.userData.gy=P,Qn.add(ye),gi.push(se)})}let kh=.82,Hh=1.02,la=new ji(Hh,Hh),ca=new ji(kh,kh);function Wf(d){Un(),d.forEach(({gx:h,gy:_})=>{let I=(jn+e.height[_][h]*.35)/2+jn/2,P=h*gt-ze+gt/2,O=_*gt-Gt+gt/2,N=I+.01,L=new Pn({color:2271812,transparent:!0,opacity:.4,side:An}),W=new Ye(la,L);W.rotation.x=-Math.PI/2,W.position.set(P,N,O),Qn.add(W),gi.push(L);let q=new Pn({color:4508774,transparent:!0,opacity:.7,side:An}),fe=new Ye(ca,q);fe.rotation.x=-Math.PI/2,fe.position.set(P,N+.01,O),fe.userData.gx=h,fe.userData.gy=_,Qn.add(fe),gi.push(q)}),Bt()}function El(d){Un(),d.forEach((h,_)=>{if(h===0)return;let M=_%e.w,I=_/e.w|0,O=(jn+e.height[I][M]*.35)/2+jn/2,N=M*gt-ze+gt/2,L=I*gt-Gt+gt/2,W=O+.01,q=new Pn({color:3381759,transparent:!0,opacity:.35,side:An}),fe=new Ye(la,q);fe.rotation.x=-Math.PI/2,fe.position.set(N,W,L),Qn.add(fe),gi.push(q);let V=new Pn({color:6730751,transparent:!0,opacity:.65,side:An}),se=new Ye(ca,V);se.rotation.x=-Math.PI/2,se.position.set(N,W+.01,L),Qn.add(se),gi.push(V)}),Bt()}function Xf(d){Un(),d.forEach((h,_)=>{if(h===0)return;let M=_%e.w,I=_/e.w|0,O=(jn+e.height[I][M]*.35)/2+jn/2,N=M*gt-ze+gt/2,L=I*gt-Gt+gt/2,W=O+.01,q=new Pn({color:10035746,transparent:!0,opacity:.4,side:An}),fe=new Ye(la,q);fe.rotation.x=-Math.PI/2,fe.position.set(N,W,L),Qn.add(fe),gi.push(q);let V=new Pn({color:13386820,transparent:!0,opacity:.7,side:An}),se=new Ye(ca,V);se.rotation.x=-Math.PI/2,se.position.set(N,W+.01,L),Qn.add(se),gi.push(V)}),Bt()}let vs=new el,Ms=new He;function Xa(d,h){let _=t.getBoundingClientRect();return Ms.x=(d-_.left)/_.width*2-1,Ms.y=-((h-_.top)/_.height)*2+1,{x:Ms.x,y:Ms.y}}function qf(d,h){if(kt)return;Ms.x=d,Ms.y=h,vs.setFromCamera(Ms,a);let _=vs.intersectObjects(ae.children,!0);if(_.length===0)return;let M=null;for(let N of _){let L=N.object;for(;L&&(L.userData.gx==null||L.userData.gy==null);)L=L.parent;if(L&&L.userData.gx!=null){M=L;break}}if(!M||M.userData.gx==null)return;let I=M.userData.gx,P=M.userData.gy;if(cn==="draft"&&Je){let N=P*e.w+I;sn.has(N)&&fl(I,P);return}if(cn!=="playing"||pt==="cvcpu")return;if(ci&&Dn){let N=tt[st],L=oe.find(se=>se.id===N&&se.hp>0);if(L&&I===L.x&&P===L.y){ci=!1,Dn=null,mr=new Set,Un(),St?yt=new Map:(yt=al(e,L.x,L.y,Pe(L,"agi"),oe,L),El(yt)),Ot();return}let W=`${I},${P}`;if(!mr.has(W))return;if(!L||L.mp<Dn.cost){ci=!1,Dn=null,Un(),Ot();return}let q=oe.find(se=>se.x===I&&se.y===P&&se.hp>0);if(Dn.target==="enemy"&&(!q||q.player===L.player)||Dn.target==="ally"&&q&&q.player!==L.player||Dn.target==="self"&&(I!==L.x||P!==L.y)||Dn.target==="enemy"&&!q)return;L.mp-=Dn.cost,Sn=!0;let fe={showFloatingCombatText:si,handleUnitDeath:Nn,updateUnitSlashVisibility:Xe,updateTurnUI:Ot,tryCollectPowerup:Ke,world:e,units:oe,reanimateDeadUnit:na,updateUnitPosition(se){let ye=ve.get(se.id);ye&&ye.position.copy(Oe(se.x,se.y))},animateKnockback(se,ye,xe,Re,Be,it){let vt=ve.get(se.id);if(!vt){it&&it();return}let rt=Oe(ye,xe).clone(),_n=Oe(Re,Be).clone(),Kt=performance.now(),Zt=0;function yn(En){Zt++,Zt%2===0&&Bt();let Ut=Math.min(1,(En-Kt)/Fs),tn=Ft=>Ft*Ft*(3-2*Ft);vt.position.lerpVectors(rt,_n,tn(Ut)),Ut<1?requestAnimationFrame(yn):(vt.position.copy(_n),it&&it())}requestAnimationFrame(yn)}},V=Dn.target==="self"?L:q||null;pt==="online"&&L.player===$t&&typeof un=="function"&&(un({type:"requestRender"}),Xs({type:"skill",unitId:L.id,targetId:V?V.id:void 0,effectKey:Dn.effectKey})),Wa(L,V,Dn,fe,()=>{Un(),ci=!1,Dn=null,mr=new Set,St?hn():Ot()});return}if(Ri){let N=tt[st],L=oe.find(q=>q.id===N);if(pt==="online"&&L&&L.player!==$t)return;let W=ve.get(N);if(L&&W&&mn.length>0){let q=Oe(L.x,L.y),fe=Oe(I,P),V=fe.x-q.x,se=fe.z-q.z,ye=V*V+se*se>1e-6?Math.atan2(V,se):W.rotation.y;W.rotation.y=yh(ye)}setTimeout(()=>hn(),400);return}if(Qt!=null&&mi){let N=oe.find(q=>q.id===Qt);if(!N||N.player!==bn||pt==="online"&&N.player!==$t)return;let L=P*e.w+I,W=oe.find(q=>q.x===I&&q.y===P&&q.hp>0);if(W&&W.id===tt[st]&&W.player===bn&&(pt!=="online"||W.player===$t)){mi=!1,Qt=W.id,St?(Un(),yt=new Map):(yt=al(e,W.x,W.y,Pe(W,"agi"),oe,W),El(yt)),Ot();return}if(!yt.has(L)||yt.get(L)===0)return;W&&W.player!==bn&&Ga(N,W);return}let O=oe.find(N=>N.x===I&&N.y===P&&N.hp>0);if(O){if(O.id===tt[st]&&O.player===bn&&(pt!=="online"||O.player===$t)){rn(),Qt=O.id,mi=!1,St?(Un(),yt=new Map):(yt=al(e,I,P,Pe(O,"agi"),oe,O),El(yt)),Ot();return}Un(),yt=new Map,mi=!1,Qr(O),Ot();return}if(rn(),Qt!=null){let se=function(){if(V>=q.length){N.x=q[q.length-1].x,N.y=q[q.length-1].y,Ke(N),kt=!1,Ne(fe),Ci(),yt=new Map,St=!0,pt==="online"&&N.player===$t&&typeof un=="function"&&(un({type:"move",unitId:N.id,toGx:N.x,toGy:N.y}),_l=!1,Lf()),setTimeout(Sn?()=>hn():()=>Ot(),400);return}let ye=q[V-1],xe=q[V],Re=Oe(ye.x,ye.y).clone(),Be=Oe(xe.x,xe.y).clone(),it=Be.x-Re.x,vt=Be.z-Re.z;it*it+vt*vt>1e-6&&(fe.rotation.y=Math.atan2(it,vt));let rt=performance.now(),_n=0;function Kt(Zt){_n++,_n%2===0&&Bt();let yn=Math.min(1,(Zt-rt)/Fs),Ut=(tn=>tn*tn*(3-2*tn))(yn);if(fe.position.lerpVectors(Re,Be,Ut),$e(fe,Ut),g){let tn=a.position.distanceTo(u),Ft=tn<.1?o:tn;m.copy(a.position).sub(u).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),u.lerp(fe.position,l),a.position.copy(u).add(m.clone().multiplyScalar(Ft)),a.lookAt(u)}yn<1?requestAnimationFrame(Kt):(V++,se())}requestAnimationFrame(Kt)};if(mi)return;let N=oe.find(ye=>ye.id===Qt);if(!N||N.player!==bn||pt==="online"&&N.player!==$t)return;let L=P*e.w+I;if(!yt.has(L)||yt.get(L)===0||oe.some(ye=>ye.id!==N.id&&ye.x===I&&ye.y===P&&ye.hp>0)||kt||St)return;let q=Hs(e,N.x,N.y,I,P,oe,N);if(!q||q.length<=1)return;pt==="online"&&N.player===$t&&typeof un=="function"&&(un({type:"requestRender"}),_l=!0),Qt=null,Un(),kt=!0,g=!0,Ci(N.id);let fe=ve.get(N.id),V=1;se()}}function zh(d){T.x=d.clientX,T.y=d.clientY,R=d.isTouch===!0,S=d.ctrlKey,v=Xa(d.clientX,d.clientY),t.style.cursor=(d.ctrlKey,"grabbing")}function Tl(d){return d.touches&&d.touches.length>0?{clientX:d.touches[0].clientX,clientY:d.touches[0].clientY}:d.changedTouches&&d.changedTouches.length>0?{clientX:d.changedTouches[0].clientX,clientY:d.changedTouches[0].clientY}:{clientX:d.clientX,clientY:d.clientY}}function Vh(d){if(!d||d.length<2)return 0;let h=d[0],_=d[1];return Math.hypot(_.clientX-h.clientX,_.clientY-h.clientY)}function Yf(d){if(d.touches.length===2){z=Vh(d.touches),v=null;return}if(d.touches.length!==1)return;z=null;let h=Tl(d);zh({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1,isTouch:!0})}function $f(d){if(d.touches.length===2){d.preventDefault();let _=Vh(d.touches);if(z!=null&&z>0){let M=_-z,I=a.position.distanceTo(u),P=Math.max(K,Math.min(ce,I-M*F));x.copy(u).sub(a.position).normalize(),a.position.copy(u).sub(x.multiplyScalar(P)),a.lookAt(u),xs=performance.now()}z=_;return}if(z=null,d.touches.length!==1)return;d.preventDefault();let h=Tl(d);Gh({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1})}function Kf(d){if(d.touches.length<2&&(z=null),d.touches.length===2||d.changedTouches.length===0)return;R=!1;let h=Tl(d);wl({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1})}function Gh(d){if(Ri){yf(d.clientX,d.clientY);return}if(v==null)return;let h=d.clientX-T.x,_=d.clientY-T.y;if(!b&&!y&&(Math.abs(h)>A||Math.abs(_)>A)&&(d.ctrlKey||S?(y=!0,g=!1):(b=!0,g=!1)),y){$.copy(a.position).sub(u);let M=$.length();if(M<.001)return;let I=Math.atan2($.x,$.z),P=Math.asin(Math.max(-1,Math.min(1,$.y/M)));I-=h*B,P+=_*B,P=Math.max(D,Math.min(U,P)),$.x=M*Math.cos(P)*Math.sin(I),$.y=M*Math.sin(P),$.z=M*Math.cos(P)*Math.cos(I),a.position.copy(u).add($),a.lookAt(u),T.x=d.clientX,T.y=d.clientY,xs=performance.now()}else if(b){let M=Xa(d.clientX,d.clientY);p.setFromNormalAndCoplanarPoint(new k(0,1,0),new k(0,u.y,0)),vs.setFromCamera(new He(v.x,v.y),a),vs.ray.intersectPlane(p,f);let I=f.clone();vs.setFromCamera(new He(M.x,M.y),a),vs.ray.intersectPlane(p,f);let P=I.sub(f);R&&P.multiplyScalar(Y),u.add(P),a.position.add(P),a.lookAt(u),v={x:M.x,y:M.y},xs=performance.now()}}function wl(d){if(v!=null&&!b&&!y){let h=Xa(d.clientX,d.clientY);qf(h.x,h.y)}v=null,b=!1,y=!1,S=!1,t.style.cursor="grab"}function Zf(d){d.preventDefault();let h=a.position.distanceTo(u),_=Math.max(K,Math.min(ce,h+d.deltaY*Me));x.copy(u).sub(a.position).normalize(),a.position.copy(u).sub(x.multiplyScalar(_)),a.lookAt(u),xs=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",zh),t.addEventListener("mousemove",Gh),t.addEventListener("mouseup",wl),t.addEventListener("mouseleave",wl),t.addEventListener("touchstart",Yf,{passive:!0}),t.addEventListener("touchmove",$f,{passive:!1}),t.addEventListener("touchend",Kf,{passive:!0}),t.addEventListener("wheel",Zf,{passive:!1});function Wh(){let d=t.clientWidth,h=t.clientHeight;a.aspect=d/h,a.updateProjectionMatrix(),qn.setSize(d,h),qn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",Wh);let qn=new wa({antialias:!1});qn.setSize(t.clientWidth,t.clientHeight),qn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),qn.shadowMap.enabled=!0,qn.shadowMap.type=sh,t.appendChild(qn.domElement),Wh();let qa=document.createElement("div");qa.id="combat-text-layer",t.appendChild(qa);let Zi=new k,bs=new k,Jf=1400;function si(d,h,_,M,I){let P=document.createElement("div");P.className="combat-text-float "+(M?"miss":"damage")+(I?" "+I:""),P.textContent=_,P.style.position="absolute",qa.appendChild(P);let O=I==="skill-name"?1.7:1.2,N=performance.now();function L(){Zi.copy(Oe(d,h)),Zi.y+=O,Zi.project(a);let fe=t.clientWidth,V=t.clientHeight;P.style.left=(Zi.x*.5+.5)*fe+"px",P.style.top=(1-(Zi.y*.5+.5))*V+"px"}let W=0;function q(){W%2===0&&L(),W++,performance.now()-N<Jf?requestAnimationFrame(q):P.remove()}requestAnimationFrame(q)}let jf=1500;function Qf(d,h){let _=document.createElement("div");_.className="combat-text-float "+(h||"levelup"),_.textContent="LEVEL UP!",_.style.position="absolute",qa.appendChild(_);let M=performance.now(),I=0;function P(){Zi.copy(Oe(d.x,d.y)),Zi.y+=1.2,Zi.project(a);let N=t.clientWidth,L=t.clientHeight;_.style.left=(Zi.x*.5+.5)*N+"px",_.style.top=(1-(Zi.y*.5+.5))*L+"px"}function O(){I%2===0&&P(),I++,performance.now()-M<jf?requestAnimationFrame(O):_.remove()}requestAnimationFrame(O)}function Nn(d,h,_){d.deathOrder=++pn,pt==="online"&&typeof un=="function"&&!(_&&_.skipSync)&&un({type:"unitDeath",unitId:d.id,killerId:h?.id}),N_(h?.class,d.class),console.log("[DEATH]",`${d.name} (${d.class}, P${d.player})`,`at (${d.x},${d.y})`,`Lv.${d.level}`),si(d.x,d.y,"DEAD",!1),oe.filter(N=>N.summonedBy===d.id&&N.hp>0).map(N=>N.id).forEach(N=>{let L=oe.find(W=>W.id===N);L&&(L.hp=0,Nn(L,null,{skipSync:!0}))});let I=ve.get(d.id);if(!I){Ci(),Xh();return}let P=performance.now();function O(N){Bt();let L=N-P,W=Math.min(1,L/H),q=W*W;I.rotation.x=q*Math.PI*.5,W<1?requestAnimationFrame(O):(n.remove(I),ve.delete(d.id),Ci(),Xh())}requestAnimationFrame(O)}function Xh(){if(cn!=="playing")return;let d=oe.some(_=>_.player===1&&_.hp>0&&!_.summonedBy),h=oe.some(_=>_.player===2&&_.hp>0&&!_.summonedBy);d?h||Al(1):Al(2)}function ep(){let d=Fh(),h=new Set(d.map(O=>O.gy*e.w+O.gx)),_=oe.filter(O=>O.hp>0&&O.player===1&&!O.summonedBy&&h.has(O.y*e.w+O.x)).length,M=oe.filter(O=>O.hp>0&&O.player===2&&!O.summonedBy&&h.has(O.y*e.w+O.x)).length,I=null,P="";if(_>M)I=1,P=`Time's up! ${w(1)} wins! (${_} vs ${M} units on center base)`;else if(M>_)I=2,P=`Time's up! ${w(2)} wins! (${M} vs ${_} units on center base)`;else{let O=oe.filter(L=>L.hp>0&&L.player===1&&!L.summonedBy).reduce((L,W)=>L+W.hp,0),N=oe.filter(L=>L.hp>0&&L.player===2&&!L.summonedBy).reduce((L,W)=>L+W.hp,0);O>N?(I=1,P=`Time's up! Draw on center \u2014 ${w(1)} wins on total HP (${O} vs ${N})`):N>O?(I=2,P=`Time's up! Draw on center \u2014 ${w(2)} wins on total HP (${N} vs ${O})`):P=`Draw! (equal units on center: ${_}, equal HP)`}Al(I,P)}function Al(d,h){Fe(),O_(oe,d),cn="gameover",document.getElementById("turn-menu").style.display="none",rn(),Un();let _=document.getElementById("game-over-overlay"),M=document.getElementById("game-over-title"),I=document.getElementById("game-over-cards"),P=document.getElementById("game-over-class-record");P&&(P.style.display="none",P.innerHTML=""),M.textContent=h??`${w(d)} wins!`;let O=oe.filter(N=>N.player===(d??1));if(I.innerHTML=O.map(N=>{let L=N,W=N.level>=3?" level-3":N.level>=2?" level-2":"",q=L.maxHp>0&&L.hp/L.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${W}${q}">
          <img class="game-over-card-image" src="${Jr[N.class]||""}" alt="${L.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${L.name}</div>
            <div class="game-over-card-meta">Lv.${L.level} ${L.class} \u2014 HP ${L.hp}/${L.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${L.hp}/${L.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${L.mp}/${L.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${Pe(L,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${Pe(L,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${Pe(L,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${Pe(L,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${Pe(L,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${Pe(L,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${L.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),_.classList.add("visible"),pt==="cvcpu"){if(ee++,P&&ms&&ee>=X){let N=Ti.map(L=>{let W=es[L],q=W.wins+W.losses||1,fe=W.wins+W.losses>0?(W.wins/q*100).toFixed(1)+"%":"\u2014",V=W.wins+W.losses>0?(W.losses/q*100).toFixed(1)+"%":"\u2014";return{class:L,battles:W.battles,kills:W.kills,deaths:W.deaths,wins:W.wins,losses:W.losses,winRate:fe,lossRate:V}});P.innerHTML=`
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
              ${N.map(L=>`
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
        `,P.style.display="block"}ee<X&&setTimeout(()=>{_.classList.remove("visible"),E(),ta()},2e3)}}function gr(d=0){requestAnimationFrame(gr),xs===0&&(xs=d);let h=d-xs>500;gr.frameCount=(typeof gr.frameCount=="number"?gr.frameCount:0)+1;let _=()=>{if(ys){let M=.6+.4*Math.sin(d*.004);for(let I=0;I<gi.length;I++){let P=I%2===0?.4:.7;gi[I].opacity=P*M}qn.render(n,a),ys=!1}};h?d-gh>=100&&(gh=d,ys=!0,_()):(gr.frameCount%2===0&&(ys=!0),_())}gr()}z_();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
