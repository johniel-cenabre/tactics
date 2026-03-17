var nh="160";var np=0,$h=1,ip=2;var Cd=1,ih=2,hs=3,Ls=0,mi=1,An=2;var Cs=0,Br=1,Kh=2,Zh=3,Jh=4,sp=5,Js=100,rp=101,ap=102,jh=103,Qh=104,op=200,lp=201,cp=202,hp=203,uc=204,dc=205,up=206,dp=207,fp=208,pp=209,mp=210,gp=211,yp=212,xp=213,_p=214,vp=0,Mp=1,bp=2,vo=3,Sp=4,Ep=5,Tp=6,wp=7,Pd=0,Ap=1,Rp=2,Ps=0,Cp=1,Pp=2,Ip=3,Lp=4,Dp=5,Up=6;var Id=300,zr=301,Vr=302,fc=303,pc=304,el=306,xa=1e3,Wi=1001,mc=1002,hi=1003,eu=1004;var Cl=1005;var Li=1006,Np=1007;var _a=1008;var Is=1009,Op=1010,Fp=1011,sh=1012,Ld=1013,As=1014,Rs=1015,va=1016,Dd=1017,Ud=1018,Qs=1020,Bp=1021,Xi=1023,kp=1024,Hp=1025,er=1026,Gr=1027,zp=1028,Nd=1029,Vp=1030,Od=1031,Fd=1033,Pl=33776,Il=33777,Ll=33778,Dl=33779,tu=35840,nu=35841,iu=35842,su=35843,Bd=36196,ru=37492,au=37496,ou=37808,lu=37809,cu=37810,hu=37811,uu=37812,du=37813,fu=37814,pu=37815,mu=37816,gu=37817,yu=37818,xu=37819,_u=37820,vu=37821,Ul=36492,Mu=36494,bu=36495,Gp=36283,Su=36284,Eu=36285,Tu=36286;var Mo=2300,bo=2301,Nl=2302,wu=2400,Au=2401,Ru=2402;var kd=3e3,tr=3001,Wp=3200,Xp=3201,Hd=0,qp=1,Di="",Qn="srgb",ds="srgb-linear",rh="display-p3",tl="display-p3-linear",So="linear",yn="srgb",Eo="rec709",To="p3";var xr=7680;var Cu=519,Yp=512,$p=513,Kp=514,zd=515,Zp=516,Jp=517,jp=518,Qp=519,Pu=35044;var Iu="300 es",gc=1035,us=2e3,wo=2001,Ds=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ol=Math.PI/180,yc=180/Math.PI;function Kr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]+"-"+ii[e&255]+ii[e>>8&255]+"-"+ii[e>>16&15|64]+ii[e>>24&255]+"-"+ii[t&63|128]+ii[t>>8&255]+"-"+ii[t>>16&255]+ii[t>>24&255]+ii[n&255]+ii[n>>8&255]+ii[n>>16&255]+ii[n>>24&255]).toLowerCase()}function ri(i,e,t){return Math.max(e,Math.min(t,i))}function em(i,e){return(i%e+e)%e}function Fl(i,e,t){return(1-t)*i+t*e}function Lu(i){return(i&i-1)===0&&i!==0}function xc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function la(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ke=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ri(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],p=n[2],f=n[5],x=n[8],M=s[0],y=s[3],g=s[6],S=s[1],v=s[4],A=s[7],F=s[2],D=s[5],U=s[8];return r[0]=a*M+o*S+l*F,r[3]=a*y+o*v+l*D,r[6]=a*g+o*A+l*U,r[1]=c*M+u*S+m*F,r[4]=c*y+u*v+m*D,r[7]=c*g+u*A+m*U,r[2]=p*M+f*S+x*F,r[5]=p*y+f*v+x*D,r[8]=p*g+f*A+x*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=u*a-o*c,p=o*l-u*r,f=c*r-a*l,x=t*m+n*p+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=m*M,e[1]=(s*c-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=p*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bl.makeScale(e,t)),this}rotate(e){return this.premultiply(Bl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bl=new Ft;function Vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tm(){let i=Ao("canvas");return i.style.display="block",i}var Du={};function fa(i){i in Du||(Du[i]=!0,console.warn(i))}var Uu=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nu=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qa={[ds]:{transfer:So,primaries:Eo,toReference:i=>i,fromReference:i=>i},[Qn]:{transfer:yn,primaries:Eo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[tl]:{transfer:So,primaries:To,toReference:i=>i.applyMatrix3(Nu),fromReference:i=>i.applyMatrix3(Uu)},[rh]:{transfer:yn,primaries:To,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nu),fromReference:i=>i.applyMatrix3(Uu).convertLinearToSRGB()}},nm=new Set([ds,tl]),on={enabled:!0,_workingColorSpace:ds,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=qa[e].toReference,s=qa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return qa[i].primaries},getTransfer:function(i){return i===Di?So:qa[i].transfer}};function kr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _r,Ro=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=Ao("canvas")),_r.width=e.width,_r.height=e.height;let n=_r.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ao("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kr(t[n]/255)*255):t[n]=kr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},im=0,Co=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Kr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hl(s[a].image)):r.push(Hl(s[a]))}else r=Hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sm=0,Ui=class i extends Ds{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wi,s=Wi,r=Li,a=_a,o=Xi,l=Is,c=i.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Kr(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===tr?Qn:Di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qn?tr:kd}set encoding(e){fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===tr?Qn:Di}};Ui.DEFAULT_IMAGE=null;Ui.DEFAULT_MAPPING=Id;Ui.DEFAULT_ANISOTROPY=1;var Jn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],m=l[8],p=l[1],f=l[5],x=l[9],M=l[2],y=l[6],g=l[10];if(Math.abs(u-p)<.01&&Math.abs(m-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(u+p)<.1&&Math.abs(m+M)<.1&&Math.abs(x+y)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,A=(f+1)/2,F=(g+1)/2,D=(u+p)/4,U=(m+M)/4,$=(x+y)/4;return v>A&&v>F?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=D/n,r=U/n):A>F?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=D/s,r=$/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=U/r,s=$/r),this.set(n,s,r,t),this}let S=Math.sqrt((y-x)*(y-x)+(m-M)*(m-M)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(y-x)/S,this.y=(m-M)/S,this.z=(p-u)/S,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends Ds{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Jn(0,0,e,t),this.scissorTest=!1,this.viewport=new Jn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(fa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===tr?Qn:Di),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ui(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fs=class extends _c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Po=class extends Ui{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vc=class extends Ui{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],m=n[s+3],p=r[a+0],f=r[a+1],x=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=x,e[t+3]=M;return}if(m!==M||l!==p||c!==f||u!==x){let y=1-o,g=l*p+c*f+u*x+m*M,S=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let F=Math.sqrt(v),D=Math.atan2(F,g*S);y=Math.sin(y*D)/F,o=Math.sin(o*D)/F}let A=o*S;if(l=l*y+p*A,c=c*y+f*A,u=u*y+x*A,m=m*y+M*A,y===1-o){let F=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=F,c*=F,u*=F,m*=F}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],m=r[a],p=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+u*m+l*f-c*p,e[t+1]=l*x+u*p+c*m-o*f,e[t+2]=c*x+u*f+o*p-l*m,e[t+3]=u*x-o*m-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),m=o(r/2),p=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=p*u*m+c*f*x,this._y=c*f*m-p*u*x,this._z=c*u*x+p*f*m,this._w=c*u*m-p*f*x;break;case"YXZ":this._x=p*u*m+c*f*x,this._y=c*f*m-p*u*x,this._z=c*u*x-p*f*m,this._w=c*u*m+p*f*x;break;case"ZXY":this._x=p*u*m-c*f*x,this._y=c*f*m+p*u*x,this._z=c*u*x+p*f*m,this._w=c*u*m-p*f*x;break;case"ZYX":this._x=p*u*m-c*f*x,this._y=c*f*m+p*u*x,this._z=c*u*x-p*f*m,this._w=c*u*m+p*f*x;break;case"YZX":this._x=p*u*m+c*f*x,this._y=c*f*m+p*u*x,this._z=c*u*x-p*f*m,this._w=c*u*m-p*f*x;break;case"XZY":this._x=p*u*m-c*f*x,this._y=c*f*m-p*u*x,this._z=c*u*x+p*f*m,this._w=c*u*m+p*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],m=t[10],p=n+o+m;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>m){let f=2*Math.sqrt(1+n-o-m);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>m){let f=2*Math.sqrt(1+o-n-m);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+m-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ri(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),m=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*m+this._w*p,this._x=n*m+this._x*p,this._y=s*m+this._y*p,this._z=r*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*u,this.y=n+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ri(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new k,Ou=new Us,nr=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hi):Hi.fromBufferAttribute(r,a),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ya.copy(n.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),$a.subVectors(this.max,ca),vr.subVectors(e.a,ca),Mr.subVectors(e.b,ca),br.subVectors(e.c,ca),bs.subVectors(Mr,vr),Ss.subVectors(br,Mr),qs.subVectors(vr,br);let t=[0,-bs.z,bs.y,0,-Ss.z,Ss.y,0,-qs.z,qs.y,bs.z,0,-bs.x,Ss.z,0,-Ss.x,qs.z,0,-qs.x,-bs.y,bs.x,0,-Ss.y,Ss.x,0,-qs.y,qs.x,0];return!Vl(t,vr,Mr,br,$a)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,vr,Mr,br,$a))?!1:(Ka.crossVectors(bs,Ss),t=[Ka.x,Ka.y,Ka.z],Vl(t,vr,Mr,br,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},rs=[new k,new k,new k,new k,new k,new k,new k,new k],Hi=new k,Ya=new nr,vr=new k,Mr=new k,br=new k,bs=new k,Ss=new k,qs=new k,ca=new k,$a=new k,Ka=new k,Ys=new k;function Vl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ys.fromArray(i,r);let o=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),l=e.dot(Ys),c=t.dot(Ys),u=n.dot(Ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var rm=new nr,ha=new k,Gl=new k,Wr=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);let t=ha.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ha,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Gl)),this.expandByPoint(ha.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},as=new k,Wl=new k,Za=new k,Es=new k,Xl=new k,Ja=new k,ql=new k,Ma=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wl.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Es.copy(this.origin).sub(Wl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Za),o=Es.dot(this.direction),l=-Es.dot(Za),c=Es.lengthSq(),u=Math.abs(1-a*a),m,p,f,x;if(u>0)if(m=a*l-o,p=a*o-l,x=r*u,m>=0)if(p>=-x)if(p<=x){let M=1/u;m*=M,p*=M,f=m*(m+a*p+2*o)+p*(a*m+p+2*l)+c}else p=r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;else p=-r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;else p<=-x?(m=Math.max(0,-(-a*r+o)),p=m>0?-r:Math.min(Math.max(-r,-l),r),f=-m*m+p*(p+2*l)+c):p<=x?(m=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(m=Math.max(0,-(a*r+o)),p=m>0?r:Math.min(Math.max(-r,-l),r),f=-m*m+p*(p+2*l)+c);else p=a>0?-r:r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Wl).addScaledVector(Za,p),f}intersectSphere(e,t){as.subVectors(e.center,this.origin);let n=as.dot(this.direction),s=as.dot(as)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-p.z)*m,l=(e.max.z-p.z)*m):(o=(e.max.z-p.z)*m,l=(e.min.z-p.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,n,s,r){Xl.subVectors(t,e),Ja.subVectors(n,e),ql.crossVectors(Xl,Ja);let a=this.direction.dot(ql),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Es.subVectors(this.origin,e);let l=o*this.direction.dot(Ja.crossVectors(Es,Ja));if(l<0)return null;let c=o*this.direction.dot(Xl.cross(Es));if(c<0||l+c>a)return null;let u=-o*Es.dot(ql);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class i{constructor(e,t,n,s,r,a,o,l,c,u,m,p,f,x,M,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,m,p,f,x,M,y)}set(e,t,n,s,r,a,o,l,c,u,m,p,f,x,M,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=m,g[14]=p,g[3]=f,g[7]=x,g[11]=M,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Sr.setFromMatrixColumn(e,0).length(),r=1/Sr.setFromMatrixColumn(e,1).length(),a=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let p=a*u,f=a*m,x=o*u,M=o*m;t[0]=l*u,t[4]=-l*m,t[8]=c,t[1]=f+x*c,t[5]=p-M*c,t[9]=-o*l,t[2]=M-p*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,f=l*m,x=c*u,M=c*m;t[0]=p+M*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*m,t[5]=a*u,t[9]=-o,t[2]=f*o-x,t[6]=M+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,f=l*m,x=c*u,M=c*m;t[0]=p-M*o,t[4]=-a*m,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*u,t[9]=M-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,f=a*m,x=o*u,M=o*m;t[0]=l*u,t[4]=x*c-f,t[8]=p*c+M,t[1]=l*m,t[5]=M*c+p,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,f=a*c,x=o*l,M=o*c;t[0]=l*u,t[4]=M-p*m,t[8]=x*m+f,t[1]=m,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*m+x,t[10]=p-M*m}else if(e.order==="XZY"){let p=a*l,f=a*c,x=o*l,M=o*c;t[0]=l*u,t[4]=-m,t[8]=c*u,t[1]=p*m+M,t[5]=a*u,t[9]=f*m-x,t[2]=x*m-f,t[6]=o*u,t[10]=M*m+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(am,e,om)}lookAt(e,t,n){let s=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Ts.crossVectors(n,bi),Ts.lengthSq()===0&&(Math.abs(n.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Ts.crossVectors(n,bi)),Ts.normalize(),ja.crossVectors(bi,Ts),s[0]=Ts.x,s[4]=ja.x,s[8]=bi.x,s[1]=Ts.y,s[5]=ja.y,s[9]=bi.y,s[2]=Ts.z,s[6]=ja.z,s[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],p=n[9],f=n[13],x=n[2],M=n[6],y=n[10],g=n[14],S=n[3],v=n[7],A=n[11],F=n[15],D=s[0],U=s[4],$=s[8],T=s[12],R=s[1],K=s[5],ce=s[9],Me=s[13],B=s[2],Y=s[6],z=s[10],V=s[14],Z=s[3],ae=s[7],oe=s[11],ue=s[15];return r[0]=a*D+o*R+l*B+c*Z,r[4]=a*U+o*K+l*Y+c*ae,r[8]=a*$+o*ce+l*z+c*oe,r[12]=a*T+o*Me+l*V+c*ue,r[1]=u*D+m*R+p*B+f*Z,r[5]=u*U+m*K+p*Y+f*ae,r[9]=u*$+m*ce+p*z+f*oe,r[13]=u*T+m*Me+p*V+f*ue,r[2]=x*D+M*R+y*B+g*Z,r[6]=x*U+M*K+y*Y+g*ae,r[10]=x*$+M*ce+y*z+g*oe,r[14]=x*T+M*Me+y*V+g*ue,r[3]=S*D+v*R+A*B+F*Z,r[7]=S*U+v*K+A*Y+F*ae,r[11]=S*$+v*ce+A*z+F*oe,r[15]=S*T+v*Me+A*V+F*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],m=e[6],p=e[10],f=e[14],x=e[3],M=e[7],y=e[11],g=e[15];return x*(+r*l*m-s*c*m-r*o*p+n*c*p+s*o*f-n*l*f)+M*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*u-r*l*u)+y*(+t*c*m-t*o*f-r*a*m+n*a*f+r*o*u-n*c*u)+g*(-s*o*u-t*l*m+t*o*p+s*a*m-n*a*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=e[9],p=e[10],f=e[11],x=e[12],M=e[13],y=e[14],g=e[15],S=m*y*c-M*p*c+M*l*f-o*y*f-m*l*g+o*p*g,v=x*p*c-u*y*c-x*l*f+a*y*f+u*l*g-a*p*g,A=u*M*c-x*m*c+x*o*f-a*M*f-u*o*g+a*m*g,F=x*m*l-u*M*l-x*o*p+a*M*p+u*o*y-a*m*y,D=t*S+n*v+s*A+r*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/D;return e[0]=S*U,e[1]=(M*p*r-m*y*r-M*s*f+n*y*f+m*s*g-n*p*g)*U,e[2]=(o*y*r-M*l*r+M*s*c-n*y*c-o*s*g+n*l*g)*U,e[3]=(m*l*r-o*p*r-m*s*c+n*p*c+o*s*f-n*l*f)*U,e[4]=v*U,e[5]=(u*y*r-x*p*r+x*s*f-t*y*f-u*s*g+t*p*g)*U,e[6]=(x*l*r-a*y*r-x*s*c+t*y*c+a*s*g-t*l*g)*U,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*f+t*l*f)*U,e[8]=A*U,e[9]=(x*m*r-u*M*r-x*n*f+t*M*f+u*n*g-t*m*g)*U,e[10]=(a*M*r-x*o*r+x*n*c-t*M*c-a*n*g+t*o*g)*U,e[11]=(u*o*r-a*m*r-u*n*c+t*m*c+a*n*f-t*o*f)*U,e[12]=F*U,e[13]=(u*M*s-x*m*s+x*n*p-t*M*p-u*n*y+t*m*y)*U,e[14]=(x*o*s-a*M*s-x*n*l+t*M*l+a*n*y-t*o*y)*U,e[15]=(a*m*s-u*o*s+u*n*l-t*m*l-a*n*p+t*o*p)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,m=o+o,p=r*c,f=r*u,x=r*m,M=a*u,y=a*m,g=o*m,S=l*c,v=l*u,A=l*m,F=n.x,D=n.y,U=n.z;return s[0]=(1-(M+g))*F,s[1]=(f+A)*F,s[2]=(x-v)*F,s[3]=0,s[4]=(f-A)*D,s[5]=(1-(p+g))*D,s[6]=(y+S)*D,s[7]=0,s[8]=(x+v)*U,s[9]=(y-S)*U,s[10]=(1-(p+M))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Sr.set(s[0],s[1],s[2]).length(),a=Sr.set(s[4],s[5],s[6]).length(),o=Sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zi.copy(this);let c=1/r,u=1/a,m=1/o;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=u,zi.elements[5]*=u,zi.elements[6]*=u,zi.elements[8]*=m,zi.elements[9]*=m,zi.elements[10]*=m,t.setFromRotationMatrix(zi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=us){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),m=(t+e)/(t-e),p=(n+s)/(n-s),f,x;if(o===us)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===wo)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=us){let l=this.elements,c=1/(t-e),u=1/(n-s),m=1/(a-r),p=(t+e)*c,f=(n+s)*u,x,M;if(o===us)x=(a+r)*m,M=-2*m;else if(o===wo)x=r*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Sr=new k,zi=new Hn,am=new k(0,0,0),om=new k(1,1,1),Ts=new k,ja=new k,bi=new k,Fu=new Hn,Bu=new Us,Io=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ri(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ri(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(ri(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ri(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ri(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ri(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Io.DEFAULT_ORDER="XYZ";var ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lm=0,ku=new k,Er=new Us,os=new Hn,Qa=new k,ua=new k,cm=new k,hm=new Us,Hu=new k(1,0,0),zu=new k(0,1,0),Vu=new k(0,0,1),um={type:"added"},dm={type:"removed"},di=class i extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Io,n=new Us,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Hn},normalMatrix:{value:new Ft}}),this.matrix=new Hn,this.matrixWorld=new Hn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Vu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qa.copy(e):Qa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(ua,Qa,this.up):os.lookAt(Qa,ua,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Er.setFromRotationMatrix(os),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(um)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,cm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,hm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),m=a(e.shapes),p=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};di.DEFAULT_UP=new k(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vi=new k,ls=new k,Yl=new k,cs=new k,Tr=new k,wr=new k,Gu=new k,$l=new k,Kl=new k,Zl=new k,eo=!1,Ur=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vi.subVectors(e,t),s.cross(Vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vi.subVectors(s,t),ls.subVectors(n,t),Yl.subVectors(e,t);let a=Vi.dot(Vi),o=Vi.dot(ls),l=Vi.dot(Yl),c=ls.dot(ls),u=ls.dot(Yl),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let p=1/m,f=(c*l-o*u)*p,x=(a*u-o*l)*p;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getUV(e,t,n,s,r,a,o,l){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cs.x),l.addScaledVector(a,cs.y),l.addScaledVector(o,cs.z),l)}static isFrontFacing(e,t,n,s){return Vi.subVectors(n,t),ls.subVectors(e,t),Vi.cross(ls).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),Vi.cross(ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Tr.subVectors(s,n),wr.subVectors(r,n),$l.subVectors(e,n);let l=Tr.dot($l),c=wr.dot($l);if(l<=0&&c<=0)return t.copy(n);Kl.subVectors(e,s);let u=Tr.dot(Kl),m=wr.dot(Kl);if(u>=0&&m<=u)return t.copy(s);let p=l*m-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Tr,a);Zl.subVectors(e,r);let f=Tr.dot(Zl),x=wr.dot(Zl);if(x>=0&&f<=x)return t.copy(r);let M=f*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(wr,o);let y=u*x-f*m;if(y<=0&&m-u>=0&&f-x>=0)return Gu.subVectors(r,s),o=(m-u)/(m-u+(f-x)),t.copy(s).addScaledVector(Gu,o);let g=1/(y+M+p);return a=M*g,o=p*g,t.copy(n).addScaledVector(Tr,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},to={h:0,s:0,l:0};function Jl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var vt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=on.workingColorSpace){return this.r=e,this.g=t,this.b=n,on.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=on.workingColorSpace){if(e=em(e,1),t=ri(t,0,1),n=ri(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Jl(a,r,e+1/3),this.g=Jl(a,r,e),this.b=Jl(a,r,e-1/3)}return on.toWorkingColorSpace(this,s),this}setStyle(e,t=Qn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){let n=Gd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=kl(e.r),this.g=kl(e.g),this.b=kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return on.fromWorkingColorSpace(si.copy(this),e),Math.round(ri(si.r*255,0,255))*65536+Math.round(ri(si.g*255,0,255))*256+Math.round(ri(si.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=on.workingColorSpace){on.fromWorkingColorSpace(si.copy(this),t);let n=si.r,s=si.g,r=si.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=on.workingColorSpace){return on.fromWorkingColorSpace(si.copy(this),t),e.r=si.r,e.g=si.g,e.b=si.b,e}getStyle(e=Qn){on.fromWorkingColorSpace(si.copy(this),e);let t=si.r,n=si.g,s=si.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ws),this.setHSL(ws.h+e,ws.s+t,ws.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ws),e.getHSL(to);let n=Fl(ws.h,to.h,t),s=Fl(ws.s,to.s,t),r=Fl(ws.l,to.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},si=new vt;vt.NAMES=Gd;var fm=0,Ns=class extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=Br,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.side!==Ls&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==Js&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pn=class extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kn=new k,no=new ke,gi=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix3(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=la(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=la(t,this.array)),t}setX(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=la(t,this.array)),t}setY(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=la(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=la(t,this.array)),t}setW(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),n=pi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),n=pi(n,this.array),s=pi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),n=pi(n,this.array),s=pi(s,this.array),r=pi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pu&&(e.usage=this.usage),e}};var Lo=class extends gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Do=class extends gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Cn=class extends gi{constructor(e,t,n){super(new Float32Array(e),t,n)}};var pm=0,Ii=new Hn,jl=new di,Ar=new k,Si=new nr,da=new nr,Zn=new k,yi=class i extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?Do:Lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,n){return Ii.makeTranslation(e,t,n),this.applyMatrix4(Ii),this}scale(e,t,n){return Ii.makeScale(e,t,n),this.applyMatrix4(Ii),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(Zn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Zn),Zn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Zn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];da.setFromBufferAttribute(o),this.morphTargetsRelative?(Zn.addVectors(Si.min,da.min),Si.expandByPoint(Zn),Zn.addVectors(Si.max,da.max),Si.expandByPoint(Zn)):(Si.expandByPoint(da.min),Si.expandByPoint(da.max))}Si.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Zn.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(e,c),Zn.add(Ar)),s=Math.max(s,n.distanceToSquared(Zn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new k,u[R]=new k;let m=new k,p=new k,f=new k,x=new ke,M=new ke,y=new ke,g=new k,S=new k;function v(R,K,ce){m.fromArray(s,R*3),p.fromArray(s,K*3),f.fromArray(s,ce*3),x.fromArray(a,R*2),M.fromArray(a,K*2),y.fromArray(a,ce*2),p.sub(m),f.sub(m),M.sub(x),y.sub(x);let Me=1/(M.x*y.y-y.x*M.y);isFinite(Me)&&(g.copy(p).multiplyScalar(y.y).addScaledVector(f,-M.y).multiplyScalar(Me),S.copy(f).multiplyScalar(M.x).addScaledVector(p,-y.x).multiplyScalar(Me),c[R].add(g),c[K].add(g),c[ce].add(g),u[R].add(S),u[K].add(S),u[ce].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let R=0,K=A.length;R<K;++R){let ce=A[R],Me=ce.start,B=ce.count;for(let Y=Me,z=Me+B;Y<z;Y+=3)v(n[Y+0],n[Y+1],n[Y+2])}let F=new k,D=new k,U=new k,$=new k;function T(R){U.fromArray(r,R*3),$.copy(U);let K=c[R];F.copy(K),F.sub(U.multiplyScalar(U.dot(K))).normalize(),D.crossVectors($,K);let Me=D.dot(u[R])<0?-1:1;l[R*4]=F.x,l[R*4+1]=F.y,l[R*4+2]=F.z,l[R*4+3]=Me}for(let R=0,K=A.length;R<K;++R){let ce=A[R],Me=ce.start,B=ce.count;for(let Y=Me,z=Me+B;Y<z;Y+=3)T(n[Y+0]),T(n[Y+1]),T(n[Y+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,m=new k;if(e)for(let p=0,f=e.count;p<f;p+=3){let x=e.getX(p+0),M=e.getX(p+1),y=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,y),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,y),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zn.fromBufferAttribute(e,t),Zn.normalize(),e.setXYZ(t,Zn.x,Zn.y,Zn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,m=o.normalized,p=new c.constructor(l.length*u),f=0,x=0;for(let M=0,y=l.length;M<y;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*u;for(let g=0;g<u;g++)p[x++]=c[f++]}return new gi(p,u,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){let p=c[u],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,p=c.length;m<p;m++){let f=c[m];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],m=r[c];for(let p=0,f=m.length;p<f;p++)u.push(m[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wu=new Hn,$s=new Ma,io=new Wr,Xu=new k,Rr=new k,Cr=new k,Pr=new k,Ql=new k,so=new k,ro=new ke,ao=new ke,oo=new ke,qu=new k,Yu=new k,$u=new k,lo=new k,co=new k,Ye=class extends di{constructor(e=new yi,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],m=r[l];u!==0&&(Ql.fromBufferAttribute(m,e),a?so.addScaledVector(Ql,u):so.addScaledVector(Ql.sub(t),u))}t.add(so)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),$s.copy(e.ray).recast(e.near),!(io.containsPoint($s.origin)===!1&&($s.intersectSphere(io,Xu)===null||$s.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(r).invert(),$s.copy(e.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&$s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=p.length;x<M;x++){let y=p[x],g=a[y.materialIndex],S=Math.max(y.start,f.start),v=Math.min(o.count,Math.min(y.start+y.count,f.start+f.count));for(let A=S,F=v;A<F;A+=3){let D=o.getX(A),U=o.getX(A+1),$=o.getX(A+2);s=ho(this,g,e,n,c,u,m,D,U,$),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let y=x,g=M;y<g;y+=3){let S=o.getX(y),v=o.getX(y+1),A=o.getX(y+2);s=ho(this,a,e,n,c,u,m,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=p.length;x<M;x++){let y=p[x],g=a[y.materialIndex],S=Math.max(y.start,f.start),v=Math.min(l.count,Math.min(y.start+y.count,f.start+f.count));for(let A=S,F=v;A<F;A+=3){let D=A,U=A+1,$=A+2;s=ho(this,g,e,n,c,u,m,D,U,$),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let y=x,g=M;y<g;y+=3){let S=y,v=y+1,A=y+2;s=ho(this,a,e,n,c,u,m,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function mm(i,e,t,n,s,r,a,o){let l;if(e.side===mi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ls,o),l===null)return null;co.copy(o),co.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:i}}function ho(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Rr),i.getVertexPosition(l,Cr),i.getVertexPosition(c,Pr);let u=mm(i,e,t,n,Rr,Cr,Pr,lo);if(u){s&&(ro.fromBufferAttribute(s,o),ao.fromBufferAttribute(s,l),oo.fromBufferAttribute(s,c),u.uv=Ur.getInterpolation(lo,Rr,Cr,Pr,ro,ao,oo,new ke)),r&&(ro.fromBufferAttribute(r,o),ao.fromBufferAttribute(r,l),oo.fromBufferAttribute(r,c),u.uv1=Ur.getInterpolation(lo,Rr,Cr,Pr,ro,ao,oo,new ke),u.uv2=u.uv1),a&&(qu.fromBufferAttribute(a,o),Yu.fromBufferAttribute(a,l),$u.fromBufferAttribute(a,c),u.normal=Ur.getInterpolation(lo,Rr,Cr,Pr,qu,Yu,$u,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let m={a:o,b:l,c,normal:new k,materialIndex:0};Ur.getNormal(Rr,Cr,Pr,m.normal),u.face=m}return u}var Gn=class i extends yi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],m=[],p=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(u,3)),this.setAttribute("uv",new Cn(m,2));function x(M,y,g,S,v,A,F,D,U,$,T){let R=A/U,K=F/$,ce=A/2,Me=F/2,B=D/2,Y=U+1,z=$+1,V=0,Z=0,ae=new k;for(let oe=0;oe<z;oe++){let ue=oe*K-Me;for(let we=0;we<Y;we++){let j=we*R-ce;ae[M]=j*S,ae[y]=ue*v,ae[g]=B,c.push(ae.x,ae.y,ae.z),ae[M]=0,ae[y]=0,ae[g]=D>0?1:-1,u.push(ae.x,ae.y,ae.z),m.push(we/U),m.push(1-oe/$),V+=1}}for(let oe=0;oe<$;oe++)for(let ue=0;ue<U;ue++){let we=p+ue+Y*oe,j=p+ue+Y*(oe+1),de=p+(ue+1)+Y*(oe+1),Te=p+(ue+1)+Y*oe;l.push(we,j,Te),l.push(j,de,Te),Z+=6}o.addGroup(f,Z,T),f+=Z,p+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ci(i){let e={};for(let t=0;t<i.length;t++){let n=Xr(i[t]);for(let s in n)e[s]=n[s]}return e}function gm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wd(i){return i.getRenderTarget()===null?i.outputColorSpace:on.workingColorSpace}var ym={clone:Xr,merge:ci},xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ps=class extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xm,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Uo=class extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Hn,this.projectionMatrix=new Hn,this.projectionMatrixInverse=new Hn,this.coordinateSystem=us}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=class extends Uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ol*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ir=-90,Lr=1,Mc=class extends di{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ui(Ir,Lr,e,t);s.layers=this.layers,this.add(s);let r=new ui(Ir,Lr,e,t);r.layers=this.layers,this.add(r);let a=new ui(Ir,Lr,e,t);a.layers=this.layers,this.add(a);let o=new ui(Ir,Lr,e,t);o.layers=this.layers,this.add(o);let l=new ui(Ir,Lr,e,t);l.layers=this.layers,this.add(l);let c=new ui(Ir,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===us)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(m,p,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},No=class extends Ui{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bc=class extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(fa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===tr?Qn:Di),this.texture=new No(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new ps({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mi,blending:Cs});r.uniforms.tEquirect.value=t;let a=new Ye(s,r),o=t.minFilter;return t.minFilter===_a&&(t.minFilter=Li),new Mc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ec=new k,vm=new k,Mm=new Ft,Gi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ec.subVectors(n,t).cross(vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ec),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mm.getNormalMatrix(e),s=this.coplanarPoint(ec).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ks=new Wr,uo=new k,Sa=class{constructor(e=new Gi,t=new Gi,n=new Gi,s=new Gi,r=new Gi,a=new Gi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=us){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],m=s[6],p=s[7],f=s[8],x=s[9],M=s[10],y=s[11],g=s[12],S=s[13],v=s[14],A=s[15];if(n[0].setComponents(l-r,p-c,y-f,A-g).normalize(),n[1].setComponents(l+r,p+c,y+f,A+g).normalize(),n[2].setComponents(l+a,p+u,y+x,A+S).normalize(),n[3].setComponents(l-a,p-u,y-x,A-S).normalize(),n[4].setComponents(l-o,p-m,y-M,A-v).normalize(),t===us)n[5].setComponents(l+o,p+m,y+M,A+v).normalize();else if(t===wo)n[5].setComponents(o,m,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){return Ks.center.set(0,0,0),Ks.radius=.7071067811865476,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bm(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,u){let m=c.array,p=c.usage,f=m.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,m,p),c.onUploadCallback();let M;if(m instanceof Float32Array)M=i.FLOAT;else if(m instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=i.SHORT;else if(m instanceof Uint32Array)M=i.UNSIGNED_INT;else if(m instanceof Int32Array)M=i.INT;else if(m instanceof Int8Array)M=i.BYTE;else if(m instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,m){let p=u.array,f=u._updateRange,x=u.updateRanges;if(i.bindBuffer(m,c),f.count===-1&&x.length===0&&i.bufferSubData(m,0,p),x.length!==0){for(let M=0,y=x.length;M<y;M++){let g=x[M];t?i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count):i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p.subarray(g.start,g.start+g.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(m,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(m,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let m=n.get(c);if(m===void 0)n.set(c,s(c,u));else if(m.version<c.version){if(m.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,c,u),m.version=c.version}}return{get:a,remove:o,update:l}}var Qi=class i extends yi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,m=e/o,p=t/l,f=[],x=[],M=[],y=[];for(let g=0;g<u;g++){let S=g*p-a;for(let v=0;v<c;v++){let A=v*m-r;x.push(A,-S,0),M.push(0,0,1),y.push(v/o),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){let v=S+c*g,A=S+c*(g+1),F=S+1+c*(g+1),D=S+1+c*g;f.push(v,A,D),f.push(A,F,D)}this.setIndex(f),this.setAttribute("position",new Cn(x,3)),this.setAttribute("normal",new Cn(M,3)),this.setAttribute("uv",new Cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
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
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Im=`#ifdef USE_BATCHING
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
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Om=`#ifdef USE_IRIDESCENCE
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qm=`#define PI 3.141592653589793
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
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$m=`vec3 transformedNormal = objectNormal;
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
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`
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
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
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
}`,ug=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mg=`uniform bool receiveShadow;
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
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
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
#endif`,bg=`struct PhysicalMaterial {
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
}`,Sg=`
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dg=`#if defined( USE_POINTS_UV )
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
#endif`,Ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
#endif`,Bg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xg=`#ifdef USE_NORMALMAP
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
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o0=`float getShadowMask() {
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
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,d0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`#include <common>
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
}`,C0=`#if DEPTH_PACKING == 3200
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
}`,P0=`#define DISTANCE
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
}`,I0=`#define DISTANCE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,N0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,B0=`#define LAMBERT
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
}`,k0=`#define LAMBERT
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
}`,H0=`#define MATCAP
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
}`,z0=`#define MATCAP
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
}`,V0=`#define NORMAL
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
}`,G0=`#define NORMAL
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
}`,W0=`#define PHONG
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
}`,X0=`#define PHONG
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
}`,q0=`#define STANDARD
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
}`,Y0=`#define STANDARD
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
}`,$0=`#define TOON
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
}`,K0=`#define TOON
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
}`,Z0=`uniform float size;
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
}`,J0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,Q0=`uniform vec3 color;
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
}`,ey=`uniform float rotation;
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
}`,ty=`uniform vec3 diffuse;
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
}`,Lt={alphahash_fragment:Sm,alphahash_pars_fragment:Em,alphamap_fragment:Tm,alphamap_pars_fragment:wm,alphatest_fragment:Am,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Pm,batching_pars_vertex:Im,batching_vertex:Lm,begin_vertex:Dm,beginnormal_vertex:Um,bsdfs:Nm,iridescence_fragment:Om,bumpmap_pars_fragment:Fm,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:km,clipping_planes_pars_vertex:Hm,clipping_planes_vertex:zm,color_fragment:Vm,color_pars_fragment:Gm,color_pars_vertex:Wm,color_vertex:Xm,common:qm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:$m,displacementmap_pars_vertex:Km,displacementmap_vertex:Zm,emissivemap_fragment:Jm,emissivemap_pars_fragment:jm,colorspace_fragment:Qm,colorspace_pars_fragment:eg,envmap_fragment:tg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:sg,envmap_physical_pars_fragment:gg,envmap_vertex:rg,fog_vertex:ag,fog_pars_vertex:og,fog_fragment:lg,fog_pars_fragment:cg,gradientmap_pars_fragment:hg,lightmap_fragment:ug,lightmap_pars_fragment:dg,lights_lambert_fragment:fg,lights_lambert_pars_fragment:pg,lights_pars_begin:mg,lights_toon_fragment:yg,lights_toon_pars_fragment:xg,lights_phong_fragment:_g,lights_phong_pars_fragment:vg,lights_physical_fragment:Mg,lights_physical_pars_fragment:bg,lights_fragment_begin:Sg,lights_fragment_maps:Eg,lights_fragment_end:Tg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Cg,map_fragment:Pg,map_pars_fragment:Ig,map_particle_fragment:Lg,map_particle_pars_fragment:Dg,metalnessmap_fragment:Ug,metalnessmap_pars_fragment:Ng,morphcolor_vertex:Og,morphnormal_vertex:Fg,morphtarget_pars_vertex:Bg,morphtarget_vertex:kg,normal_fragment_begin:Hg,normal_fragment_maps:zg,normal_pars_fragment:Vg,normal_pars_vertex:Gg,normal_vertex:Wg,normalmap_pars_fragment:Xg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Kg,opaque_fragment:Zg,packing:Jg,premultiplied_alpha_fragment:jg,project_vertex:Qg,dithering_fragment:e0,dithering_pars_fragment:t0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:r0,shadowmap_vertex:a0,shadowmask_pars_fragment:o0,skinbase_vertex:l0,skinning_pars_vertex:c0,skinning_vertex:h0,skinnormal_vertex:u0,specularmap_fragment:d0,specularmap_pars_fragment:f0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:y0,uv_pars_fragment:x0,uv_pars_vertex:_0,uv_vertex:v0,worldpos_vertex:M0,background_vert:b0,background_frag:S0,backgroundCube_vert:E0,backgroundCube_frag:T0,cube_vert:w0,cube_frag:A0,depth_vert:R0,depth_frag:C0,distanceRGBA_vert:P0,distanceRGBA_frag:I0,equirect_vert:L0,equirect_frag:D0,linedashed_vert:U0,linedashed_frag:N0,meshbasic_vert:O0,meshbasic_frag:F0,meshlambert_vert:B0,meshlambert_frag:k0,meshmatcap_vert:H0,meshmatcap_frag:z0,meshnormal_vert:V0,meshnormal_frag:G0,meshphong_vert:W0,meshphong_frag:X0,meshphysical_vert:q0,meshphysical_frag:Y0,meshtoon_vert:$0,meshtoon_frag:K0,points_vert:Z0,points_frag:J0,shadow_vert:j0,shadow_frag:Q0,sprite_vert:ey,sprite_frag:ty},Ie={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},ji={basic:{uniforms:ci([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:ci([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:ci([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:ci([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:ci([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:ci([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:ci([Ie.points,Ie.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:ci([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:ci([Ie.common,Ie.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:ci([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:ci([Ie.sprite,Ie.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:ci([Ie.common,Ie.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:ci([Ie.lights,Ie.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};ji.physical={uniforms:ci([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};var fo={r:0,b:0,g:0};function ny(i,e,t,n,s,r,a){let o=new vt(0),l=r===!0?0:1,c,u,m=null,p=0,f=null;function x(y,g){let S=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?M(o,l):v&&v.isColor&&(M(v,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===el)?(u===void 0&&(u=new Ye(new Gn(1,1,1),new ps({name:"BackgroundCubeMaterial",uniforms:Xr(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=on.getTransfer(v.colorSpace)!==yn,(m!==v||p!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,m=v,p=v.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ye(new Qi(2,2),new ps({name:"BackgroundMaterial",uniforms:Xr(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=on.getTransfer(v.colorSpace)!==yn,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(m!==v||p!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,m=v,p=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function M(y,g){y.getRGB(fo,Wd(i)),n.buffers.color.setClear(fo.r,fo.g,fo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(y,g=1){o.set(y),l=g,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,M(o,l)},render:x}}function iy(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=y(null),c=l,u=!1;function m(B,Y,z,V,Z){let ae=!1;if(a){let oe=M(V,z,Y);c!==oe&&(c=oe,f(c.object)),ae=g(B,V,z,Z),ae&&S(B,V,z,Z)}else{let oe=Y.wireframe===!0;(c.geometry!==V.id||c.program!==z.id||c.wireframe!==oe)&&(c.geometry=V.id,c.program=z.id,c.wireframe=oe,ae=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,$(B,Y,z,V),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(B){return n.isWebGL2?i.bindVertexArray(B):r.bindVertexArrayOES(B)}function x(B){return n.isWebGL2?i.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function M(B,Y,z){let V=z.wireframe===!0,Z=o[B.id];Z===void 0&&(Z={},o[B.id]=Z);let ae=Z[Y.id];ae===void 0&&(ae={},Z[Y.id]=ae);let oe=ae[V];return oe===void 0&&(oe=y(p()),ae[V]=oe),oe}function y(B){let Y=[],z=[],V=[];for(let Z=0;Z<s;Z++)Y[Z]=0,z[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:z,attributeDivisors:V,object:B,attributes:{},index:null}}function g(B,Y,z,V){let Z=c.attributes,ae=Y.attributes,oe=0,ue=z.getAttributes();for(let we in ue)if(ue[we].location>=0){let de=Z[we],Te=ae[we];if(Te===void 0&&(we==="instanceMatrix"&&B.instanceMatrix&&(Te=B.instanceMatrix),we==="instanceColor"&&B.instanceColor&&(Te=B.instanceColor)),de===void 0||de.attribute!==Te||Te&&de.data!==Te.data)return!0;oe++}return c.attributesNum!==oe||c.index!==V}function S(B,Y,z,V){let Z={},ae=Y.attributes,oe=0,ue=z.getAttributes();for(let we in ue)if(ue[we].location>=0){let de=ae[we];de===void 0&&(we==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),we==="instanceColor"&&B.instanceColor&&(de=B.instanceColor));let Te={};Te.attribute=de,de&&de.data&&(Te.data=de.data),Z[we]=Te,oe++}c.attributes=Z,c.attributesNum=oe,c.index=V}function v(){let B=c.newAttributes;for(let Y=0,z=B.length;Y<z;Y++)B[Y]=0}function A(B){F(B,0)}function F(B,Y){let z=c.newAttributes,V=c.enabledAttributes,Z=c.attributeDivisors;z[B]=1,V[B]===0&&(i.enableVertexAttribArray(B),V[B]=1),Z[B]!==Y&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Y),Z[B]=Y)}function D(){let B=c.newAttributes,Y=c.enabledAttributes;for(let z=0,V=Y.length;z<V;z++)Y[z]!==B[z]&&(i.disableVertexAttribArray(z),Y[z]=0)}function U(B,Y,z,V,Z,ae,oe){oe===!0?i.vertexAttribIPointer(B,Y,z,Z,ae):i.vertexAttribPointer(B,Y,z,V,Z,ae)}function $(B,Y,z,V){if(n.isWebGL2===!1&&(B.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let Z=V.attributes,ae=z.getAttributes(),oe=Y.defaultAttributeValues;for(let ue in ae){let we=ae[ue];if(we.location>=0){let j=Z[ue];if(j===void 0&&(ue==="instanceMatrix"&&B.instanceMatrix&&(j=B.instanceMatrix),ue==="instanceColor"&&B.instanceColor&&(j=B.instanceColor)),j!==void 0){let de=j.normalized,Te=j.itemSize,Be=t.get(j);if(Be===void 0)continue;let qe=Be.buffer,ft=Be.type,yt=Be.bytesPerElement,Ke=n.isWebGL2===!0&&(ft===i.INT||ft===i.UNSIGNED_INT||j.gpuType===Ld);if(j.isInterleavedBufferAttribute){let le=j.data,J=le.stride,Ge=j.offset;if(le.isInstancedInterleavedBuffer){for(let We=0;We<we.locationSize;We++)F(we.location+We,le.meshPerAttribute);B.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let We=0;We<we.locationSize;We++)A(we.location+We);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let We=0;We<we.locationSize;We++)U(we.location+We,Te/we.locationSize,ft,de,J*yt,(Ge+Te/we.locationSize*We)*yt,Ke)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<we.locationSize;le++)F(we.location+le,j.meshPerAttribute);B.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<we.locationSize;le++)A(we.location+le);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let le=0;le<we.locationSize;le++)U(we.location+le,Te/we.locationSize,ft,de,Te*yt,Te/we.locationSize*le*yt,Ke)}}else if(oe!==void 0){let de=oe[ue];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(we.location,de);break;case 3:i.vertexAttrib3fv(we.location,de);break;case 4:i.vertexAttrib4fv(we.location,de);break;default:i.vertexAttrib1fv(we.location,de)}}}}D()}function T(){ce();for(let B in o){let Y=o[B];for(let z in Y){let V=Y[z];for(let Z in V)x(V[Z].object),delete V[Z];delete Y[z]}delete o[B]}}function R(B){if(o[B.id]===void 0)return;let Y=o[B.id];for(let z in Y){let V=Y[z];for(let Z in V)x(V[Z].object),delete V[Z];delete Y[z]}delete o[B.id]}function K(B){for(let Y in o){let z=o[Y];if(z[B.id]===void 0)continue;let V=z[B.id];for(let Z in V)x(V[Z].object),delete V[Z];delete z[B.id]}}function ce(){Me(),u=!0,c!==l&&(c=l,f(c.object))}function Me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:ce,resetDefaultState:Me,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:K,initAttributes:v,enableAttribute:A,disableUnusedAttributes:D}}function sy(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,m){i.drawArrays(r,u,m),t.update(m,r,1)}function l(u,m,p){if(p===0)return;let f,x;if(s)f=i,x="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[x](r,u,m,p),t.update(m,r,p)}function c(u,m,p){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<p;x++)this.render(u[x],m[x]);else{f.multiDrawArraysWEBGL(r,u,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=m[M];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ry(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,A=a||e.has("OES_texture_float"),F=v&&A,D=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:m,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:F,maxSamples:D}}function ay(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Gi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){let f=m.length!==0||p||n!==0||s;return s=p,n=m.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,p){t=u(m,p,0)},this.setState=function(m,p,f){let x=m.clippingPlanes,M=m.clipIntersection,y=m.clipShadows,g=i.get(m);if(!s||x===null||x.length===0||r&&!y)r?u(null):c();else{let S=r?0:n,v=S*4,A=g.clippingState||null;l.value=A,A=u(x,p,v,f);for(let F=0;F!==v;++F)A[F]=t[F];g.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(m,p,f,x){let M=m!==null?m.length:0,y=null;if(M!==0){if(y=l.value,x!==!0||y===null){let g=f+M*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(y===null||y.length<g)&&(y=new Float32Array(g));for(let v=0,A=f;v!==M;++v,A+=4)a.copy(m[v]).applyMatrix4(S,o),a.normal.toArray(y,A),y[A+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function oy(i){let e=new WeakMap;function t(a,o){return o===fc?a.mapping=zr:o===pc&&(a.mapping=Vr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===fc||o===pc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new bc(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Oo=class extends Uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nr=4,Ku=[.125,.215,.35,.446,.526,.582],js=20,tc=new Oo,Zu=new vt,nc=null,ic=0,sc=0,Zs=(1+Math.sqrt(5))/2,Dr=1/Zs,Ju=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Zs,Dr),new k(0,Zs,-Dr),new k(Dr,0,Zs),new k(-Dr,0,Zs),new k(Zs,Dr,0),new k(-Zs,Dr,0)],Fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nc,ic,sc),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:va,format:Xi,colorSpace:ds,depthBuffer:!1},s=ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(r)),this._blurMaterial=cy(r,e,t)}return s}_compileMaterial(e){let t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,tc)}_sceneToCubeUV(e,t,n,s){let o=new ui(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,m=u.autoClear,p=u.toneMapping;u.getClearColor(Zu),u.toneMapping=Ps,u.autoClear=!1;let f=new Pn({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1}),x=new Ye(new Gn,f),M=!1,y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,M=!0):(f.color.copy(Zu),M=!0);for(let g=0;g<6;g++){let S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let v=this._cubeSize;po(s,S*v,g>2?v:0,v,v),u.setRenderTarget(s),M&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=m,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===zr||e.mapping===Vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,tc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ju[(s-1)%Ju.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,m=new Ye(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*js-1),M=r/x,y=isFinite(r)?1+Math.floor(u*M):js;y>js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${js}`);let g=[],S=0;for(let U=0;U<js;++U){let $=U/M,T=Math.exp(-$*$/2);g.push(T),U===0?S+=T:U<y&&(S+=2*T)}for(let U=0;U<g.length;U++)g[U]=g[U]/S;p.envMap.value=e.texture,p.samples.value=y,p.weights.value=g,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-n;let A=this._sizeLods[s],F=3*A*(s>v-Nr?s-v+Nr:0),D=4*(this._cubeSize-A);po(t,F,D,3*A,2*A),l.setRenderTarget(t),l.render(m,tc)}};function ly(i){let e=[],t=[],n=[],s=i,r=i-Nr+1+Ku.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Nr?l=Ku[a-i+Nr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,m=1+c,p=[u,u,m,u,m,m,u,u,m,m,u,m],f=6,x=6,M=3,y=2,g=1,S=new Float32Array(M*x*f),v=new Float32Array(y*x*f),A=new Float32Array(g*x*f);for(let D=0;D<f;D++){let U=D%3*2/3-1,$=D>2?0:-1,T=[U,$,0,U+2/3,$,0,U+2/3,$+1,0,U,$,0,U+2/3,$+1,0,U,$+1,0];S.set(T,M*x*D),v.set(p,y*x*D);let R=[D,D,D,D,D,D];A.set(R,g*x*D)}let F=new yi;F.setAttribute("position",new gi(S,M)),F.setAttribute("uv",new gi(v,y)),F.setAttribute("faceIndex",new gi(A,g)),e.push(F),s>Nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ju(i,e,t){let n=new fs(i,e,t);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cy(i,e,t){let n=new Float32Array(js),s=new k(0,1,0);return new ps({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Qu(){return new ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function ed(){return new ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}function hy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===fc||l===pc,u=l===zr||l===Vr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let m=e.get(o);return t===null&&(t=new Fo(i)),m=c?t.fromEquirectangular(o,m):t.fromCubemap(o,m),e.set(o,m),m.texture}else{if(e.has(o))return e.get(o).texture;{let m=o.image;if(c&&m&&m.height>0||u&&m&&s(m)){t===null&&(t=new Fo(i));let p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function uy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dy(i,e,t,n){let s={},r=new WeakMap;function a(m){let p=m.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let M=p.morphAttributes[x];for(let y=0,g=M.length;y<g;y++)e.remove(M[y])}p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(m,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(m){let p=m.attributes;for(let x in p)e.update(p[x],i.ARRAY_BUFFER);let f=m.morphAttributes;for(let x in f){let M=f[x];for(let y=0,g=M.length;y<g;y++)e.update(M[y],i.ARRAY_BUFFER)}}function c(m){let p=[],f=m.index,x=m.attributes.position,M=0;if(f!==null){let S=f.array;M=f.version;for(let v=0,A=S.length;v<A;v+=3){let F=S[v+0],D=S[v+1],U=S[v+2];p.push(F,D,D,U,U,F)}}else if(x!==void 0){let S=x.array;M=x.version;for(let v=0,A=S.length/3-1;v<A;v+=3){let F=v+0,D=v+1,U=v+2;p.push(F,D,D,U,U,F)}}else return;let y=new(Vd(p)?Do:Lo)(p,1);y.version=M;let g=r.get(m);g&&e.remove(g),r.set(m,y)}function u(m){let p=r.get(m);if(p){let f=m.index;f!==null&&p.version<f.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:u}}function fy(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,x){i.drawElements(r,x,o,f*l),t.update(x,r,1)}function m(f,x,M){if(M===0)return;let y,g;if(s)y=i,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](r,x,o,f*l,M),t.update(x,r,M)}function p(f,x,M){if(M===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<M;g++)this.render(f[g]/l,x[g]);else{y.multiDrawElementsWEBGL(r,x,0,o,f,0,M);let g=0;for(let S=0;S<M;S++)g+=x[S];t.update(g,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=m,this.renderMultiDraw=p}function py(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function my(i,e){return i[0]-e[0]}function gy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function yy(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Jn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,m){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=f!==void 0?f.length:0,M=r.get(u);if(M===void 0||M.count!==x){let B=function(){ce.dispose(),r.delete(u),u.removeEventListener("dispose",B)};M!==void 0&&M.texture.dispose();let S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],U=u.morphAttributes.color||[],$=0;S===!0&&($=1),v===!0&&($=2),A===!0&&($=3);let T=u.attributes.position.count*$,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let K=new Float32Array(T*R*4*x),ce=new Po(K,T,R,x);ce.type=Rs,ce.needsUpdate=!0;let Me=$*4;for(let Y=0;Y<x;Y++){let z=F[Y],V=D[Y],Z=U[Y],ae=T*R*4*Y;for(let oe=0;oe<z.count;oe++){let ue=oe*Me;S===!0&&(a.fromBufferAttribute(z,oe),K[ae+ue+0]=a.x,K[ae+ue+1]=a.y,K[ae+ue+2]=a.z,K[ae+ue+3]=0),v===!0&&(a.fromBufferAttribute(V,oe),K[ae+ue+4]=a.x,K[ae+ue+5]=a.y,K[ae+ue+6]=a.z,K[ae+ue+7]=0),A===!0&&(a.fromBufferAttribute(Z,oe),K[ae+ue+8]=a.x,K[ae+ue+9]=a.y,K[ae+ue+10]=a.z,K[ae+ue+11]=Z.itemSize===4?a.w:1)}}M={count:x,texture:ce,size:new ke(T,R)},r.set(u,M),u.addEventListener("dispose",B)}let y=0;for(let S=0;S<p.length;S++)y+=p[S];let g=u.morphTargetsRelative?1:1-y;m.getUniforms().setValue(i,"morphTargetBaseInfluence",g),m.getUniforms().setValue(i,"morphTargetInfluences",p),m.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let f=p===void 0?0:p.length,x=n[u.id];if(x===void 0||x.length!==f){x=[];for(let v=0;v<f;v++)x[v]=[v,0];n[u.id]=x}for(let v=0;v<f;v++){let A=x[v];A[0]=v,A[1]=p[v]}x.sort(gy);for(let v=0;v<8;v++)v<f&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(my);let M=u.morphAttributes.position,y=u.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let A=o[v],F=A[0],D=A[1];F!==Number.MAX_SAFE_INTEGER&&D?(M&&u.getAttribute("morphTarget"+v)!==M[F]&&u.setAttribute("morphTarget"+v,M[F]),y&&u.getAttribute("morphNormal"+v)!==y[F]&&u.setAttribute("morphNormal"+v,y[F]),s[v]=D,g+=D):(M&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),y&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let S=u.morphTargetsRelative?1:1-g;m.getUniforms().setValue(i,"morphTargetBaseInfluence",S),m.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function xy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,m=e.get(l,u);if(s.get(m)!==c&&(e.update(m),s.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return m}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Bo=class extends Ui{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:er,u!==er&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===er&&(n=As),n===void 0&&u===Gr&&(n=Qs),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},qd=new Ui,Yd=new Bo(1,1);Yd.compareFunction=zd;var $d=new Po,Kd=new vc,Zd=new No,td=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function Zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Wn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nl(i,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _y(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;i.uniform2fv(this.addr,e),Xn(t,e)}}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wn(t,e))return;i.uniform3fv(this.addr,e),Xn(t,e)}}function by(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;i.uniform4fv(this.addr,e),Xn(t,e)}}function Sy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xn(t,e)}else{if(Wn(t,n))return;rd.set(n),i.uniformMatrix2fv(this.addr,!1,rd),Xn(t,n)}}function Ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xn(t,e)}else{if(Wn(t,n))return;sd.set(n),i.uniformMatrix3fv(this.addr,!1,sd),Xn(t,n)}}function Ty(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xn(t,e)}else{if(Wn(t,n))return;id.set(n),i.uniformMatrix4fv(this.addr,!1,id),Xn(t,n)}}function wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;i.uniform2iv(this.addr,e),Xn(t,e)}}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wn(t,e))return;i.uniform3iv(this.addr,e),Xn(t,e)}}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;i.uniform4iv(this.addr,e),Xn(t,e)}}function Py(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;i.uniform2uiv(this.addr,e),Xn(t,e)}}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wn(t,e))return;i.uniform3uiv(this.addr,e),Xn(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;i.uniform4uiv(this.addr,e),Xn(t,e)}}function Uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Yd:qd;t.setTexture2D(e||r,s)}function Ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kd,s)}function Oy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zd,s)}function Fy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$d,s)}function By(i){switch(i){case 5126:return _y;case 35664:return vy;case 35665:return My;case 35666:return by;case 35674:return Sy;case 35675:return Ey;case 35676:return Ty;case 5124:case 35670:return wy;case 35667:case 35671:return Ay;case 35668:case 35672:return Ry;case 35669:case 35673:return Cy;case 5125:return Py;case 36294:return Iy;case 36295:return Ly;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Oy;case 36289:case 36303:case 36311:case 36292:return Fy}}function ky(i,e){i.uniform1fv(this.addr,e)}function Hy(i,e){let t=Zr(e,this.size,2);i.uniform2fv(this.addr,t)}function zy(i,e){let t=Zr(e,this.size,3);i.uniform3fv(this.addr,t)}function Vy(i,e){let t=Zr(e,this.size,4);i.uniform4fv(this.addr,t)}function Gy(i,e){let t=Zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wy(i,e){let t=Zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xy(i,e){let t=Zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qy(i,e){i.uniform1iv(this.addr,e)}function Yy(i,e){i.uniform2iv(this.addr,e)}function $y(i,e){i.uniform3iv(this.addr,e)}function Ky(i,e){i.uniform4iv(this.addr,e)}function Zy(i,e){i.uniform1uiv(this.addr,e)}function Jy(i,e){i.uniform2uiv(this.addr,e)}function jy(i,e){i.uniform3uiv(this.addr,e)}function Qy(i,e){i.uniform4uiv(this.addr,e)}function ex(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);Wn(n,r)||(i.uniform1iv(this.addr,r),Xn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||qd,r[a])}function tx(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);Wn(n,r)||(i.uniform1iv(this.addr,r),Xn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Kd,r[a])}function nx(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);Wn(n,r)||(i.uniform1iv(this.addr,r),Xn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Zd,r[a])}function ix(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);Wn(n,r)||(i.uniform1iv(this.addr,r),Xn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$d,r[a])}function sx(i){switch(i){case 5126:return ky;case 35664:return Hy;case 35665:return zy;case 35666:return Vy;case 35674:return Gy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return qy;case 35667:case 35671:return Yy;case 35668:case 35672:return $y;case 35669:case 35673:return Ky;case 5125:return Zy;case 36294:return Jy;case 36295:return jy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}var Sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=By(t.type)}},Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sx(t.type)}},Tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},rc=/(\w+)(\])?(\[|\.)?/g;function ad(i,e){i.seq.push(e),i.map[e.id]=e}function rx(i,e,t){let n=i.name,s=n.length;for(rc.lastIndex=0;;){let r=rc.exec(n),a=rc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ad(t,c===void 0?new Sc(o,i,e):new Ec(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new Tc(o),ad(t,m)),t=m}}}var Hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);rx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ax=37297,ox=0;function lx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function cx(i){let e=on.getPrimaries(on.workingColorSpace),t=on.getPrimaries(i),n;switch(e===t?n="":e===To&&t===Eo?n="LinearDisplayP3ToLinearSRGB":e===Eo&&t===To&&(n="LinearSRGBToLinearDisplayP3"),i){case ds:case tl:return[n,"LinearTransferOETF"];case Qn:case rh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ld(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+lx(i.getShaderSource(e),a)}else return s}function hx(i,e){let t=cx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ux(i,e){let t;switch(e){case Cp:t="Linear";break;case Pp:t="Reinhard";break;case Ip:t="OptimizedCineon";break;case Lp:t="ACESFilmic";break;case Up:t="AgX";break;case Dp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function fx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Or).join(`
`)}function px(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Or(i){return i!==""}function cd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(gx,xx)}var yx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xx(i,e){let t=Lt[e];if(t===void 0){let n=yx.get(e);if(n!==void 0)t=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wc(t)}var _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(_x,vx)}function vx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ih?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hs&&(e="SHADOWMAP_TYPE_VSM"),e}function bx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zr:case Vr:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ex(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pd:e="ENVMAP_BLENDING_MULTIPLY";break;case Ap:e="ENVMAP_BLENDING_MIX";break;case Rp:e="ENVMAP_BLENDING_ADD";break}return e}function Tx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function wx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Mx(t),c=bx(t),u=Sx(t),m=Ex(t),p=Tx(t),f=t.isWebGL2?"":dx(t),x=fx(t),M=px(r),y=s.createProgram(),g,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Or).join(`
`),g.length>0&&(g+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Or).join(`
`),S.length>0&&(S+=`
`)):(g=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),S=[f,dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ps?"#define TONE_MAPPING":"",t.toneMapping!==Ps?Lt.tonemapping_pars_fragment:"",t.toneMapping!==Ps?ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,hx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=wc(a),a=cd(a,t),a=hd(a,t),o=wc(o),o=cd(o,t),o=hd(o,t),a=ud(a),o=ud(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let A=v+g+a,F=v+S+o,D=od(s,s.VERTEX_SHADER,A),U=od(s,s.FRAGMENT_SHADER,F);s.attachShader(y,D),s.attachShader(y,U),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function $(ce){if(i.debug.checkShaderErrors){let Me=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(U).trim(),z=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,D,U);else{let Z=ld(s,D,"vertex"),ae=ld(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Program Info Log: `+Me+`
`+Z+`
`+ae)}else Me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Me):(B===""||Y==="")&&(V=!1);V&&(ce.diagnostics={runnable:z,programLog:Me,vertexShader:{log:B,prefix:g},fragmentShader:{log:Y,prefix:S}})}s.deleteShader(D),s.deleteShader(U),T=new Hr(s,y),R=mx(s,y)}let T;this.getUniforms=function(){return T===void 0&&$(this),T};let R;this.getAttributes=function(){return R===void 0&&$(this),R};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=s.getProgramParameter(y,ax)),K},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ox++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=U,this}var Ax=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rc(e),t.set(e,n)),n}},Rc=class{constructor(e){this.id=Ax++,this.code=e,this.usedTimes=0}};function Rx(i,e,t,n,s,r,a){let o=new ba,l=new Ac,c=[],u=s.isWebGL2,m=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return T===0?"uv":`uv${T}`}function y(T,R,K,ce,Me){let B=ce.fog,Y=Me.geometry,z=T.isMeshStandardMaterial?ce.environment:null,V=(T.isMeshStandardMaterial?t:e).get(T.envMap||z),Z=V&&V.mapping===el?V.image.height:null,ae=x[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ue=oe!==void 0?oe.length:0,we=0;Y.morphAttributes.position!==void 0&&(we=1),Y.morphAttributes.normal!==void 0&&(we=2),Y.morphAttributes.color!==void 0&&(we=3);let j,de,Te,Be;if(ae){let On=ji[ae];j=On.vertexShader,de=On.fragmentShader}else j=T.vertexShader,de=T.fragmentShader,l.update(T),Te=l.getVertexShaderID(T),Be=l.getFragmentShaderID(T);let qe=i.getRenderTarget(),ft=Me.isInstancedMesh===!0,yt=Me.isBatchedMesh===!0,Ke=!!T.map,le=!!T.matcap,J=!!V,Ge=!!T.aoMap,We=!!T.lightMap,Je=!!T.bumpMap,He=!!T.normalMap,Ze=!!T.displacementMap,_t=!!T.emissiveMap,C=!!T.metalnessMap,E=!!T.roughnessMap,ne=T.anisotropy>0,_e=T.clearcoat>0,Se=T.iridescence>0,Ee=T.sheen>0,$e=T.transmission>0,Ue=ne&&!!T.anisotropyMap,Ne=_e&&!!T.clearcoatMap,ot=_e&&!!T.clearcoatNormalMap,wt=_e&&!!T.clearcoatRoughnessMap,ve=Se&&!!T.iridescenceMap,Yt=Se&&!!T.iridescenceThicknessMap,Dt=Ee&&!!T.sheenColorMap,pt=Ee&&!!T.sheenRoughnessMap,et=!!T.specularMap,ze=!!T.specularColorMap,Mt=!!T.specularIntensityMap,zt=$e&&!!T.transmissionMap,fn=$e&&!!T.thicknessMap,Ct=!!T.gradientMap,Ce=!!T.alphaMap,H=T.alphaTest>0,Le=!!T.alphaHash,De=!!T.extensions,at=!!Y.attributes.uv1,it=!!Y.attributes.uv2,Jt=!!Y.attributes.uv3,tn=Ps;return T.toneMapped&&(qe===null||qe.isXRRenderTarget===!0)&&(tn=i.toneMapping),{isWebGL2:u,shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:j,fragmentShader:de,defines:T.defines,customVertexShaderID:Te,customFragmentShaderID:Be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:yt,instancing:ft,instancingColor:ft&&Me.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:qe===null?i.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:ds,map:Ke,matcap:le,envMap:J,envMapMode:J&&V.mapping,envMapCubeUVHeight:Z,aoMap:Ge,lightMap:We,bumpMap:Je,normalMap:He,displacementMap:p&&Ze,emissiveMap:_t,normalMapObjectSpace:He&&T.normalMapType===qp,normalMapTangentSpace:He&&T.normalMapType===Hd,metalnessMap:C,roughnessMap:E,anisotropy:ne,anisotropyMap:Ue,clearcoat:_e,clearcoatMap:Ne,clearcoatNormalMap:ot,clearcoatRoughnessMap:wt,iridescence:Se,iridescenceMap:ve,iridescenceThicknessMap:Yt,sheen:Ee,sheenColorMap:Dt,sheenRoughnessMap:pt,specularMap:et,specularColorMap:ze,specularIntensityMap:Mt,transmission:$e,transmissionMap:zt,thicknessMap:fn,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===Br,alphaMap:Ce,alphaTest:H,alphaHash:Le,combine:T.combine,mapUv:Ke&&M(T.map.channel),aoMapUv:Ge&&M(T.aoMap.channel),lightMapUv:We&&M(T.lightMap.channel),bumpMapUv:Je&&M(T.bumpMap.channel),normalMapUv:He&&M(T.normalMap.channel),displacementMapUv:Ze&&M(T.displacementMap.channel),emissiveMapUv:_t&&M(T.emissiveMap.channel),metalnessMapUv:C&&M(T.metalnessMap.channel),roughnessMapUv:E&&M(T.roughnessMap.channel),anisotropyMapUv:Ue&&M(T.anisotropyMap.channel),clearcoatMapUv:Ne&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:pt&&M(T.sheenRoughnessMap.channel),specularMapUv:et&&M(T.specularMap.channel),specularColorMapUv:ze&&M(T.specularColorMap.channel),specularIntensityMapUv:Mt&&M(T.specularIntensityMap.channel),transmissionMapUv:zt&&M(T.transmissionMap.channel),thicknessMapUv:fn&&M(T.thicknessMap.channel),alphaMapUv:Ce&&M(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(He||ne),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:at,vertexUv2s:it,vertexUv3s:Jt,pointsUvs:Me.isPoints===!0&&!!Y.attributes.uv&&(Ke||Ce),fog:!!B,useFog:T.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:Me.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:we,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:tn,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ke&&T.map.isVideoTexture===!0&&on.getTransfer(T.map.colorSpace)===yn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===An,flipSided:T.side===mi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:De&&T.extensions.derivatives===!0,extensionFragDepth:De&&T.extensions.fragDepth===!0,extensionDrawBuffers:De&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){let R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(let K in T.defines)R.push(K),R.push(T.defines[K]);return T.isRawShaderMaterial===!1&&(S(R,T),v(R,T),R.push(i.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function S(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function v(T,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),T.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function A(T){let R=x[T.type],K;if(R){let ce=ji[R];K=ym.clone(ce.uniforms)}else K=T.uniforms;return K}function F(T,R){let K;for(let ce=0,Me=c.length;ce<Me;ce++){let B=c[ce];if(B.cacheKey===R){K=B,++K.usedTimes;break}}return K===void 0&&(K=new wx(i,R,T,r),c.push(K)),K}function D(T){if(--T.usedTimes===0){let R=c.indexOf(T);c[R]=c[c.length-1],c.pop(),T.destroy()}}function U(T){l.remove(T)}function $(){l.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:F,releaseProgram:D,releaseShaderCache:U,programs:c,dispose:$}}function Cx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Px(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(m,p,f,x,M,y){let g=i[e];return g===void 0?(g={id:m.id,object:m,geometry:p,material:f,groupOrder:x,renderOrder:m.renderOrder,z:M,group:y},i[e]=g):(g.id=m.id,g.object=m,g.geometry=p,g.material=f,g.groupOrder=x,g.renderOrder=m.renderOrder,g.z=M,g.group=y),e++,g}function o(m,p,f,x,M,y){let g=a(m,p,f,x,M,y);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(m,p,f,x,M,y){let g=a(m,p,f,x,M,y);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(m,p){t.length>1&&t.sort(m||Px),n.length>1&&n.sort(p||fd),s.length>1&&s.sort(p||fd)}function u(){for(let m=e,p=i.length;m<p;m++){let f=i[m];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Ix(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new pd,i.set(n,[a])):s>=r.length?(a=new pd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new vt};break;case"SpotLight":t={position:new k,direction:new k,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Dx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ux=0;function Nx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ox(i,e){let t=new Lx,n=Dx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new k);let r=new k,a=new Hn,o=new Hn;function l(u,m){let p=0,f=0,x=0;for(let ce=0;ce<9;ce++)s.probe[ce].set(0,0,0);let M=0,y=0,g=0,S=0,v=0,A=0,F=0,D=0,U=0,$=0,T=0;u.sort(Nx);let R=m===!0?Math.PI:1;for(let ce=0,Me=u.length;ce<Me;ce++){let B=u[ce],Y=B.color,z=B.intensity,V=B.distance,Z=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=Y.r*z*R,f+=Y.g*z*R,x+=Y.b*z*R;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)s.probe[ae].addScaledVector(B.sh.coefficients[ae],z);T++}else if(B.isDirectionalLight){let ae=t.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity*R),B.castShadow){let oe=B.shadow,ue=n.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,s.directionalShadow[M]=ue,s.directionalShadowMap[M]=Z,s.directionalShadowMatrix[M]=B.shadow.matrix,A++}s.directional[M]=ae,M++}else if(B.isSpotLight){let ae=t.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy(Y).multiplyScalar(z*R),ae.distance=V,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,s.spot[g]=ae;let oe=B.shadow;if(B.map&&(s.spotLightMap[U]=B.map,U++,oe.updateMatrices(B),B.castShadow&&$++),s.spotLightMatrix[g]=oe.matrix,B.castShadow){let ue=n.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,s.spotShadow[g]=ue,s.spotShadowMap[g]=Z,D++}g++}else if(B.isRectAreaLight){let ae=t.get(B);ae.color.copy(Y).multiplyScalar(z),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=ae,S++}else if(B.isPointLight){let ae=t.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity*R),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){let oe=B.shadow,ue=n.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,ue.shadowCameraNear=oe.camera.near,ue.shadowCameraFar=oe.camera.far,s.pointShadow[y]=ue,s.pointShadowMap[y]=Z,s.pointShadowMatrix[y]=B.shadow.matrix,F++}s.point[y]=ae,y++}else if(B.isHemisphereLight){let ae=t.get(B);ae.skyColor.copy(B.color).multiplyScalar(z*R),ae.groundColor.copy(B.groundColor).multiplyScalar(z*R),s.hemi[v]=ae,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=f,s.ambient[2]=x;let K=s.hash;(K.directionalLength!==M||K.pointLength!==y||K.spotLength!==g||K.rectAreaLength!==S||K.hemiLength!==v||K.numDirectionalShadows!==A||K.numPointShadows!==F||K.numSpotShadows!==D||K.numSpotMaps!==U||K.numLightProbes!==T)&&(s.directional.length=M,s.spot.length=g,s.rectArea.length=S,s.point.length=y,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=D+U-$,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=$,s.numLightProbes=T,K.directionalLength=M,K.pointLength=y,K.spotLength=g,K.rectAreaLength=S,K.hemiLength=v,K.numDirectionalShadows=A,K.numPointShadows=F,K.numSpotShadows=D,K.numSpotMaps=U,K.numLightProbes=T,s.version=Ux++)}function c(u,m){let p=0,f=0,x=0,M=0,y=0,g=m.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){let A=u[S];if(A.isDirectionalLight){let F=s.directional[p];F.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(g),p++}else if(A.isSpotLight){let F=s.spot[x];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),F.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(g),x++}else if(A.isRectAreaLight){let F=s.rectArea[M];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),o.identity(),a.copy(A.matrixWorld),a.premultiply(g),o.extractRotation(a),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),F.halfWidth.applyMatrix4(o),F.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){let F=s.point[f];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),f++}else if(A.isHemisphereLight){let F=s.hemi[y];F.direction.setFromMatrixPosition(A.matrixWorld),F.direction.transformDirection(g),y++}}}return{setup:l,setupView:c,state:s}}function md(i,e){let t=new Ox(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(m){n.push(m)}function o(m){s.push(m)}function l(m){t.setup(n,m)}function c(m){t.setupView(n,m)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Fx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new md(i,e),t.set(r,[l])):a>=o.length?(l=new md(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Cc=class extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kx=`uniform sampler2D shadow_pass;
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
}`;function Hx(i,e,t){let n=new Sa,s=new ke,r=new ke,a=new Jn,o=new Cc({depthPacking:Xp}),l=new Pc,c={},u=t.maxTextureSize,m={[Ls]:mi,[mi]:Ls,[An]:An},p=new ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Bx,fragmentShader:kx}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let x=new yi;x.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ye(x,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let g=this.type;this.render=function(D,U,$){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;let T=i.getRenderTarget(),R=i.getActiveCubeFace(),K=i.getActiveMipmapLevel(),ce=i.state;ce.setBlending(Cs),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);let Me=g!==hs&&this.type===hs,B=g===hs&&this.type!==hs;for(let Y=0,z=D.length;Y<z;Y++){let V=D[Y],Z=V.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ae=Z.getFrameExtents();if(s.multiply(ae),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ae.x),s.x=r.x*ae.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ae.y),s.y=r.y*ae.y,Z.mapSize.y=r.y)),Z.map===null||Me===!0||B===!0){let ue=this.type!==hs?{minFilter:hi,magFilter:hi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new fs(s.x,s.y,ue),Z.map.texture.name=V.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let oe=Z.getViewportCount();for(let ue=0;ue<oe;ue++){let we=Z.getViewport(ue);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),ce.viewport(a),Z.updateMatrices(V,ue),n=Z.getFrustum(),A(U,$,Z.camera,V,this.type)}Z.isPointLightShadow!==!0&&this.type===hs&&S(Z,$),Z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(T,R,K)};function S(D,U){let $=e.update(M);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new fs(s.x,s.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(U,null,$,p,M,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(U,null,$,f,M,null)}function v(D,U,$,T){let R=null,K=$.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(K!==void 0)R=K;else if(R=$.isPointLight===!0?l:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let ce=R.uuid,Me=U.uuid,B=c[ce];B===void 0&&(B={},c[ce]=B);let Y=B[Me];Y===void 0&&(Y=R.clone(),B[Me]=Y,U.addEventListener("dispose",F)),R=Y}if(R.visible=U.visible,R.wireframe=U.wireframe,T===hs?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:m[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,$.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let ce=i.properties.get(R);ce.light=$}return R}function A(D,U,$,T,R){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===hs)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,D.matrixWorld);let Me=e.update(D),B=D.material;if(Array.isArray(B)){let Y=Me.groups;for(let z=0,V=Y.length;z<V;z++){let Z=Y[z],ae=B[Z.materialIndex];if(ae&&ae.visible){let oe=v(D,ae,T,R);D.onBeforeShadow(i,D,U,$,Me,oe,Z),i.renderBufferDirect($,null,Me,oe,D,Z),D.onAfterShadow(i,D,U,$,Me,oe,Z)}}}else if(B.visible){let Y=v(D,B,T,R);D.onBeforeShadow(i,D,U,$,Me,Y,null),i.renderBufferDirect($,null,Me,Y,D,null),D.onAfterShadow(i,D,U,$,Me,Y,null)}}let ce=D.children;for(let Me=0,B=ce.length;Me<B;Me++)A(ce[Me],U,$,T,R)}function F(D){D.target.removeEventListener("dispose",F);for(let $ in c){let T=c[$],R=D.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function zx(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Le=new Jn,De=null,at=new Jn(0,0,0,0);return{setMask:function(it){De!==it&&!H&&(i.colorMask(it,it,it,it),De=it)},setLocked:function(it){H=it},setClear:function(it,Jt,tn,Ln,On){On===!0&&(it*=Ln,Jt*=Ln,tn*=Ln),Le.set(it,Jt,tn,Ln),at.equals(Le)===!1&&(i.clearColor(it,Jt,tn,Ln),at.copy(Le))},reset:function(){H=!1,De=null,at.set(-1,0,0,0)}}}function r(){let H=!1,Le=null,De=null,at=null;return{setTest:function(it){it?yt(i.DEPTH_TEST):Ke(i.DEPTH_TEST)},setMask:function(it){Le!==it&&!H&&(i.depthMask(it),Le=it)},setFunc:function(it){if(De!==it){switch(it){case vp:i.depthFunc(i.NEVER);break;case Mp:i.depthFunc(i.ALWAYS);break;case bp:i.depthFunc(i.LESS);break;case vo:i.depthFunc(i.LEQUAL);break;case Sp:i.depthFunc(i.EQUAL);break;case Ep:i.depthFunc(i.GEQUAL);break;case Tp:i.depthFunc(i.GREATER);break;case wp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=it}},setLocked:function(it){H=it},setClear:function(it){at!==it&&(i.clearDepth(it),at=it)},reset:function(){H=!1,Le=null,De=null,at=null}}}function a(){let H=!1,Le=null,De=null,at=null,it=null,Jt=null,tn=null,Ln=null,On=null;return{setTest:function(jt){H||(jt?yt(i.STENCIL_TEST):Ke(i.STENCIL_TEST))},setMask:function(jt){Le!==jt&&!H&&(i.stencilMask(jt),Le=jt)},setFunc:function(jt,qn,zn){(De!==jt||at!==qn||it!==zn)&&(i.stencilFunc(jt,qn,zn),De=jt,at=qn,it=zn)},setOp:function(jt,qn,zn){(Jt!==jt||tn!==qn||Ln!==zn)&&(i.stencilOp(jt,qn,zn),Jt=jt,tn=qn,Ln=zn)},setLocked:function(jt){H=jt},setClear:function(jt){On!==jt&&(i.clearStencil(jt),On=jt)},reset:function(){H=!1,Le=null,De=null,at=null,it=null,Jt=null,tn=null,Ln=null,On=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,m=new WeakMap,p={},f={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,F=null,D=null,U=null,$=null,T=new vt(0,0,0),R=0,K=!1,ce=null,Me=null,B=null,Y=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ae=0,oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(oe)[1]),Z=ae>=1):oe.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),Z=ae>=2);let ue=null,we={},j=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Te=new Jn().fromArray(j),Be=new Jn().fromArray(de);function qe(H,Le,De,at){let it=new Uint8Array(4),Jt=i.createTexture();i.bindTexture(H,Jt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tn=0;tn<De;tn++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Le,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(Le+tn,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return Jt}let ft={};ft[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ft[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),yt(i.DEPTH_TEST),l.setFunc(vo),_t(!1),C($h),yt(i.CULL_FACE),He(Cs);function yt(H){p[H]!==!0&&(i.enable(H),p[H]=!0)}function Ke(H){p[H]!==!1&&(i.disable(H),p[H]=!1)}function le(H,Le){return f[H]!==Le?(i.bindFramebuffer(H,Le),f[H]=Le,n&&(H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Le),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Le)),!0):!1}function J(H,Le){let De=M,at=!1;if(H)if(De=x.get(Le),De===void 0&&(De=[],x.set(Le,De)),H.isWebGLMultipleRenderTargets){let it=H.texture;if(De.length!==it.length||De[0]!==i.COLOR_ATTACHMENT0){for(let Jt=0,tn=it.length;Jt<tn;Jt++)De[Jt]=i.COLOR_ATTACHMENT0+Jt;De.length=it.length,at=!0}}else De[0]!==i.COLOR_ATTACHMENT0&&(De[0]=i.COLOR_ATTACHMENT0,at=!0);else De[0]!==i.BACK&&(De[0]=i.BACK,at=!0);at&&(t.isWebGL2?i.drawBuffers(De):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(De))}function Ge(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let We={[Js]:i.FUNC_ADD,[rp]:i.FUNC_SUBTRACT,[ap]:i.FUNC_REVERSE_SUBTRACT};if(n)We[jh]=i.MIN,We[Qh]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(We[jh]=H.MIN_EXT,We[Qh]=H.MAX_EXT)}let Je={[op]:i.ZERO,[lp]:i.ONE,[cp]:i.SRC_COLOR,[uc]:i.SRC_ALPHA,[mp]:i.SRC_ALPHA_SATURATE,[fp]:i.DST_COLOR,[up]:i.DST_ALPHA,[hp]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[pp]:i.ONE_MINUS_DST_COLOR,[dp]:i.ONE_MINUS_DST_ALPHA,[gp]:i.CONSTANT_COLOR,[yp]:i.ONE_MINUS_CONSTANT_COLOR,[xp]:i.CONSTANT_ALPHA,[_p]:i.ONE_MINUS_CONSTANT_ALPHA};function He(H,Le,De,at,it,Jt,tn,Ln,On,jt){if(H===Cs){g===!0&&(Ke(i.BLEND),g=!1);return}if(g===!1&&(yt(i.BLEND),g=!0),H!==sp){if(H!==S||jt!==K){if((v!==Js||D!==Js)&&(i.blendEquation(i.FUNC_ADD),v=Js,D=Js),jt)switch(H){case Br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kh:i.blendFunc(i.ONE,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,F=null,U=null,$=null,T.set(0,0,0),R=0,S=H,K=jt}return}it=it||Le,Jt=Jt||De,tn=tn||at,(Le!==v||it!==D)&&(i.blendEquationSeparate(We[Le],We[it]),v=Le,D=it),(De!==A||at!==F||Jt!==U||tn!==$)&&(i.blendFuncSeparate(Je[De],Je[at],Je[Jt],Je[tn]),A=De,F=at,U=Jt,$=tn),(Ln.equals(T)===!1||On!==R)&&(i.blendColor(Ln.r,Ln.g,Ln.b,On),T.copy(Ln),R=On),S=H,K=!1}function Ze(H,Le){H.side===An?Ke(i.CULL_FACE):yt(i.CULL_FACE);let De=H.side===mi;Le&&(De=!De),_t(De),H.blending===Br&&H.transparent===!1?He(Cs):He(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),o.setMask(H.colorWrite);let at=H.stencilWrite;c.setTest(at),at&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ne(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(H){ce!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),ce=H)}function C(H){H!==np?(yt(i.CULL_FACE),H!==Me&&(H===$h?i.cullFace(i.BACK):H===ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ke(i.CULL_FACE),Me=H}function E(H){H!==B&&(Z&&i.lineWidth(H),B=H)}function ne(H,Le,De){H?(yt(i.POLYGON_OFFSET_FILL),(Y!==Le||z!==De)&&(i.polygonOffset(Le,De),Y=Le,z=De)):Ke(i.POLYGON_OFFSET_FILL)}function _e(H){H?yt(i.SCISSOR_TEST):Ke(i.SCISSOR_TEST)}function Se(H){H===void 0&&(H=i.TEXTURE0+V-1),ue!==H&&(i.activeTexture(H),ue=H)}function Ee(H,Le,De){De===void 0&&(ue===null?De=i.TEXTURE0+V-1:De=ue);let at=we[De];at===void 0&&(at={type:void 0,texture:void 0},we[De]=at),(at.type!==H||at.texture!==Le)&&(ue!==De&&(i.activeTexture(De),ue=De),i.bindTexture(H,Le||ft[H]),at.type=H,at.texture=Le)}function $e(){let H=we[ue];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Dt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(H){Te.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Te.copy(H))}function zt(H){Be.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Be.copy(H))}function fn(H,Le){let De=m.get(Le);De===void 0&&(De=new WeakMap,m.set(Le,De));let at=De.get(H);at===void 0&&(at=i.getUniformBlockIndex(Le,H.name),De.set(H,at))}function Ct(H,Le){let at=m.get(Le).get(H);u.get(Le)!==at&&(i.uniformBlockBinding(Le,at,H.__bindingPointIndex),u.set(Le,at))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ue=null,we={},f={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,F=null,D=null,U=null,$=null,T=new vt(0,0,0),R=0,K=!1,ce=null,Me=null,B=null,Y=null,z=null,Te.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:yt,disable:Ke,bindFramebuffer:le,drawBuffers:J,useProgram:Ge,setBlending:He,setMaterial:Ze,setFlipSided:_t,setCullFace:C,setLineWidth:E,setPolygonOffset:ne,setScissorTest:_e,activeTexture:Se,bindTexture:Ee,unbindTexture:$e,compressedTexImage2D:Ue,compressedTexImage3D:Ne,texImage2D:et,texImage3D:ze,updateUBOMapping:fn,uniformBlockBinding:Ct,texStorage2D:Dt,texStorage3D:pt,texSubImage2D:ot,texSubImage3D:wt,compressedTexSubImage2D:ve,compressedTexSubImage3D:Yt,scissor:Mt,viewport:zt,reset:Ce}}function Vx(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,m,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return f?new OffscreenCanvas(C,E):Ao("canvas")}function M(C,E,ne,_e){let Se=1;if((C.width>_e||C.height>_e)&&(Se=_e/Math.max(C.width,C.height)),Se<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Ee=E?xc:Math.floor,$e=Ee(Se*C.width),Ue=Ee(Se*C.height);m===void 0&&(m=x($e,Ue));let Ne=ne?x($e,Ue):m;return Ne.width=$e,Ne.height=Ue,Ne.getContext("2d").drawImage(C,0,0,$e,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+$e+"x"+Ue+")."),Ne}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Lu(C.width)&&Lu(C.height)}function g(C){return o?!1:C.wrapS!==Wi||C.wrapT!==Wi||C.minFilter!==hi&&C.minFilter!==Li}function S(C,E){return C.generateMipmaps&&E&&C.minFilter!==hi&&C.minFilter!==Li}function v(C){i.generateMipmap(C)}function A(C,E,ne,_e,Se=!1){if(o===!1)return E;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ee=E;if(E===i.RED&&(ne===i.FLOAT&&(Ee=i.R32F),ne===i.HALF_FLOAT&&(Ee=i.R16F),ne===i.UNSIGNED_BYTE&&(Ee=i.R8)),E===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(Ee=i.R8UI),ne===i.UNSIGNED_SHORT&&(Ee=i.R16UI),ne===i.UNSIGNED_INT&&(Ee=i.R32UI),ne===i.BYTE&&(Ee=i.R8I),ne===i.SHORT&&(Ee=i.R16I),ne===i.INT&&(Ee=i.R32I)),E===i.RG&&(ne===i.FLOAT&&(Ee=i.RG32F),ne===i.HALF_FLOAT&&(Ee=i.RG16F),ne===i.UNSIGNED_BYTE&&(Ee=i.RG8)),E===i.RGBA){let $e=Se?So:on.getTransfer(_e);ne===i.FLOAT&&(Ee=i.RGBA32F),ne===i.HALF_FLOAT&&(Ee=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(Ee=$e===yn?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT_4_4_4_4&&(Ee=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(Ee=i.RGB5_A1)}return(Ee===i.R16F||Ee===i.R32F||Ee===i.RG16F||Ee===i.RG32F||Ee===i.RGBA16F||Ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function F(C,E,ne){return S(C,ne)===!0||C.isFramebufferTexture&&C.minFilter!==hi&&C.minFilter!==Li?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function D(C){return C===hi||C===eu||C===Cl?i.NEAREST:i.LINEAR}function U(C){let E=C.target;E.removeEventListener("dispose",U),T(E),E.isVideoTexture&&u.delete(E)}function $(C){let E=C.target;E.removeEventListener("dispose",$),K(E)}function T(C){let E=n.get(C);if(E.__webglInit===void 0)return;let ne=C.source,_e=p.get(ne);if(_e){let Se=_e[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&R(C),Object.keys(_e).length===0&&p.delete(ne)}n.remove(C)}function R(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let ne=C.source,_e=p.get(ne);delete _e[E.__cacheKey],a.memory.textures--}function K(C){let E=C.texture,ne=n.get(C),_e=n.get(E);if(_e.__webglTexture!==void 0&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(ne.__webglFramebuffer[Se]))for(let Ee=0;Ee<ne.__webglFramebuffer[Se].length;Ee++)i.deleteFramebuffer(ne.__webglFramebuffer[Se][Ee]);else i.deleteFramebuffer(ne.__webglFramebuffer[Se]);ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer[Se])}else{if(Array.isArray(ne.__webglFramebuffer))for(let Se=0;Se<ne.__webglFramebuffer.length;Se++)i.deleteFramebuffer(ne.__webglFramebuffer[Se]);else i.deleteFramebuffer(ne.__webglFramebuffer);if(ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let Se=0;Se<ne.__webglColorRenderbuffer.length;Se++)ne.__webglColorRenderbuffer[Se]&&i.deleteRenderbuffer(ne.__webglColorRenderbuffer[Se]);ne.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Se=0,Ee=E.length;Se<Ee;Se++){let $e=n.get(E[Se]);$e.__webglTexture&&(i.deleteTexture($e.__webglTexture),a.memory.textures--),n.remove(E[Se])}n.remove(E),n.remove(C)}let ce=0;function Me(){ce=0}function B(){let C=ce;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),ce+=1,C}function Y(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function z(C,E){let ne=n.get(C);if(C.isVideoTexture&&Ze(C),C.isRenderTargetTexture===!1&&C.version>0&&ne.__version!==C.version){let _e=C.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(ne,C,E);return}}t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+E)}function V(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){Te(ne,C,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+E)}function Z(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){Te(ne,C,E);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+E)}function ae(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){Be(ne,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+E)}let oe={[xa]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[mc]:i.MIRRORED_REPEAT},ue={[hi]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[Cl]:i.NEAREST_MIPMAP_LINEAR,[Li]:i.LINEAR,[Np]:i.LINEAR_MIPMAP_NEAREST,[_a]:i.LINEAR_MIPMAP_LINEAR},we={[Yp]:i.NEVER,[Qp]:i.ALWAYS,[$p]:i.LESS,[zd]:i.LEQUAL,[Kp]:i.EQUAL,[jp]:i.GEQUAL,[Zp]:i.GREATER,[Jp]:i.NOTEQUAL};function j(C,E,ne){if(ne?(i.texParameteri(C,i.TEXTURE_WRAP_S,oe[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,oe[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,oe[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[E.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Wi||E.wrapT!==Wi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,D(E.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,D(E.minFilter)),E.minFilter!==hi&&E.minFilter!==Li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let _e=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===hi||E.minFilter!==Cl&&E.minFilter!==_a||E.type===Rs&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===va&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(C,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function de(C,E){let ne=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",U));let _e=E.source,Se=p.get(_e);Se===void 0&&(Se={},p.set(_e,Se));let Ee=Y(E);if(Ee!==C.__cacheKey){Se[Ee]===void 0&&(Se[Ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ne=!0),Se[Ee].usedTimes++;let $e=Se[C.__cacheKey];$e!==void 0&&(Se[C.__cacheKey].usedTimes--,$e.usedTimes===0&&R(E)),C.__cacheKey=Ee,C.__webglTexture=Se[Ee].texture}return ne}function Te(C,E,ne){let _e=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=i.TEXTURE_3D);let Se=de(C,E),Ee=E.source;t.bindTexture(_e,C.__webglTexture,i.TEXTURE0+ne);let $e=n.get(Ee);if(Ee.version!==$e.__version||Se===!0){t.activeTexture(i.TEXTURE0+ne);let Ue=on.getPrimaries(on.workingColorSpace),Ne=E.colorSpace===Di?null:on.getPrimaries(E.colorSpace),ot=E.colorSpace===Di||Ue===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let wt=g(E)&&y(E.image)===!1,ve=M(E.image,wt,!1,s.maxTextureSize);ve=_t(E,ve);let Yt=y(ve)||o,Dt=r.convert(E.format,E.colorSpace),pt=r.convert(E.type),et=A(E.internalFormat,Dt,pt,E.colorSpace,E.isVideoTexture);j(_e,E,Yt);let ze,Mt=E.mipmaps,zt=o&&E.isVideoTexture!==!0&&et!==Bd,fn=$e.__version===void 0||Se===!0,Ct=F(E,ve,Yt);if(E.isDepthTexture)et=i.DEPTH_COMPONENT,o?E.type===Rs?et=i.DEPTH_COMPONENT32F:E.type===As?et=i.DEPTH_COMPONENT24:E.type===Qs?et=i.DEPTH24_STENCIL8:et=i.DEPTH_COMPONENT16:E.type===Rs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===er&&et===i.DEPTH_COMPONENT&&E.type!==sh&&E.type!==As&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=As,pt=r.convert(E.type)),E.format===Gr&&et===i.DEPTH_COMPONENT&&(et=i.DEPTH_STENCIL,E.type!==Qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Qs,pt=r.convert(E.type))),fn&&(zt?t.texStorage2D(i.TEXTURE_2D,1,et,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,et,ve.width,ve.height,0,Dt,pt,null));else if(E.isDataTexture)if(Mt.length>0&&Yt){zt&&fn&&t.texStorage2D(i.TEXTURE_2D,Ct,et,Mt[0].width,Mt[0].height);for(let Ce=0,H=Mt.length;Ce<H;Ce++)ze=Mt[Ce],zt?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,ze.width,ze.height,Dt,pt,ze.data):t.texImage2D(i.TEXTURE_2D,Ce,et,ze.width,ze.height,0,Dt,pt,ze.data);E.generateMipmaps=!1}else zt?(fn&&t.texStorage2D(i.TEXTURE_2D,Ct,et,ve.width,ve.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve.width,ve.height,Dt,pt,ve.data)):t.texImage2D(i.TEXTURE_2D,0,et,ve.width,ve.height,0,Dt,pt,ve.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){zt&&fn&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,et,Mt[0].width,Mt[0].height,ve.depth);for(let Ce=0,H=Mt.length;Ce<H;Ce++)ze=Mt[Ce],E.format!==Xi?Dt!==null?zt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,ze.width,ze.height,ve.depth,Dt,ze.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ce,et,ze.width,ze.height,ve.depth,0,ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,ze.width,ze.height,ve.depth,Dt,pt,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ce,et,ze.width,ze.height,ve.depth,0,Dt,pt,ze.data)}else{zt&&fn&&t.texStorage2D(i.TEXTURE_2D,Ct,et,Mt[0].width,Mt[0].height);for(let Ce=0,H=Mt.length;Ce<H;Ce++)ze=Mt[Ce],E.format!==Xi?Dt!==null?zt?t.compressedTexSubImage2D(i.TEXTURE_2D,Ce,0,0,ze.width,ze.height,Dt,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,Ce,et,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,ze.width,ze.height,Dt,pt,ze.data):t.texImage2D(i.TEXTURE_2D,Ce,et,ze.width,ze.height,0,Dt,pt,ze.data)}else if(E.isDataArrayTexture)zt?(fn&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,et,ve.width,ve.height,ve.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Dt,pt,ve.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,et,ve.width,ve.height,ve.depth,0,Dt,pt,ve.data);else if(E.isData3DTexture)zt?(fn&&t.texStorage3D(i.TEXTURE_3D,Ct,et,ve.width,ve.height,ve.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Dt,pt,ve.data)):t.texImage3D(i.TEXTURE_3D,0,et,ve.width,ve.height,ve.depth,0,Dt,pt,ve.data);else if(E.isFramebufferTexture){if(fn)if(zt)t.texStorage2D(i.TEXTURE_2D,Ct,et,ve.width,ve.height);else{let Ce=ve.width,H=ve.height;for(let Le=0;Le<Ct;Le++)t.texImage2D(i.TEXTURE_2D,Le,et,Ce,H,0,Dt,pt,null),Ce>>=1,H>>=1}}else if(Mt.length>0&&Yt){zt&&fn&&t.texStorage2D(i.TEXTURE_2D,Ct,et,Mt[0].width,Mt[0].height);for(let Ce=0,H=Mt.length;Ce<H;Ce++)ze=Mt[Ce],zt?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Dt,pt,ze):t.texImage2D(i.TEXTURE_2D,Ce,et,Dt,pt,ze);E.generateMipmaps=!1}else zt?(fn&&t.texStorage2D(i.TEXTURE_2D,Ct,et,ve.width,ve.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,pt,ve)):t.texImage2D(i.TEXTURE_2D,0,et,Dt,pt,ve);S(E,Yt)&&v(_e),$e.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Be(C,E,ne){if(E.image.length!==6)return;let _e=de(C,E),Se=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+ne);let Ee=n.get(Se);if(Se.version!==Ee.__version||_e===!0){t.activeTexture(i.TEXTURE0+ne);let $e=on.getPrimaries(on.workingColorSpace),Ue=E.colorSpace===Di?null:on.getPrimaries(E.colorSpace),Ne=E.colorSpace===Di||$e===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ot=E.isCompressedTexture||E.image[0].isCompressedTexture,wt=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let Ce=0;Ce<6;Ce++)!ot&&!wt?ve[Ce]=M(E.image[Ce],!1,!0,s.maxCubemapSize):ve[Ce]=wt?E.image[Ce].image:E.image[Ce],ve[Ce]=_t(E,ve[Ce]);let Yt=ve[0],Dt=y(Yt)||o,pt=r.convert(E.format,E.colorSpace),et=r.convert(E.type),ze=A(E.internalFormat,pt,et,E.colorSpace),Mt=o&&E.isVideoTexture!==!0,zt=Ee.__version===void 0||_e===!0,fn=F(E,Yt,Dt);j(i.TEXTURE_CUBE_MAP,E,Dt);let Ct;if(ot){Mt&&zt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fn,ze,Yt.width,Yt.height);for(let Ce=0;Ce<6;Ce++){Ct=ve[Ce].mipmaps;for(let H=0;H<Ct.length;H++){let Le=Ct[H];E.format!==Xi?pt!==null?Mt?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H,0,0,Le.width,Le.height,pt,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H,ze,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H,0,0,Le.width,Le.height,pt,et,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H,ze,Le.width,Le.height,0,pt,et,Le.data)}}}else{Ct=E.mipmaps,Mt&&zt&&(Ct.length>0&&fn++,t.texStorage2D(i.TEXTURE_CUBE_MAP,fn,ze,ve[0].width,ve[0].height));for(let Ce=0;Ce<6;Ce++)if(wt){Mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,ve[Ce].width,ve[Ce].height,pt,et,ve[Ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ze,ve[Ce].width,ve[Ce].height,0,pt,et,ve[Ce].data);for(let H=0;H<Ct.length;H++){let De=Ct[H].image[Ce].image;Mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H+1,0,0,De.width,De.height,pt,et,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H+1,ze,De.width,De.height,0,pt,et,De.data)}}else{Mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,pt,et,ve[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ze,pt,et,ve[Ce]);for(let H=0;H<Ct.length;H++){let Le=Ct[H];Mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H+1,0,0,pt,et,Le.image[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,H+1,ze,pt,et,Le.image[Ce])}}}S(E,Dt)&&v(i.TEXTURE_CUBE_MAP),Ee.__version=Se.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function qe(C,E,ne,_e,Se,Ee){let $e=r.convert(ne.format,ne.colorSpace),Ue=r.convert(ne.type),Ne=A(ne.internalFormat,$e,Ue,ne.colorSpace);if(!n.get(E).__hasExternalTextures){let wt=Math.max(1,E.width>>Ee),ve=Math.max(1,E.height>>Ee);Se===i.TEXTURE_3D||Se===i.TEXTURE_2D_ARRAY?t.texImage3D(Se,Ee,Ne,wt,ve,E.depth,0,$e,Ue,null):t.texImage2D(Se,Ee,Ne,wt,ve,0,$e,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),He(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,Se,n.get(ne).__webglTexture,0,Je(E)):(Se===i.TEXTURE_2D||Se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_e,Se,n.get(ne).__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(C,E,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let _e=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ne||He(E)){let Se=E.depthTexture;Se&&Se.isDepthTexture&&(Se.type===Rs?_e=i.DEPTH_COMPONENT32F:Se.type===As&&(_e=i.DEPTH_COMPONENT24));let Ee=Je(E);He(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,_e,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,_e,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,_e,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let _e=Je(E);ne&&He(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,i.DEPTH24_STENCIL8,E.width,E.height):He(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let _e=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Se=0;Se<_e.length;Se++){let Ee=_e[Se],$e=r.convert(Ee.format,Ee.colorSpace),Ue=r.convert(Ee.type),Ne=A(Ee.internalFormat,$e,Ue,Ee.colorSpace),ot=Je(E);ne&&He(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Ne,E.width,E.height):He(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Ne,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);let _e=n.get(E.depthTexture).__webglTexture,Se=Je(E);if(E.depthTexture.format===er)He(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(E.depthTexture.format===Gr)He(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ke(C){let E=n.get(C),ne=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");yt(E.__webglFramebuffer,C)}else if(ne){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]=i.createRenderbuffer(),ft(E.__webglDepthbuffer[_e],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),ft(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(C,E,ne){let _e=n.get(C);E!==void 0&&qe(_e.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&Ke(C)}function J(C){let E=C.texture,ne=n.get(C),_e=n.get(E);C.addEventListener("dispose",$),C.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture()),_e.__version=E.version,a.memory.textures++);let Se=C.isWebGLCubeRenderTarget===!0,Ee=C.isWebGLMultipleRenderTargets===!0,$e=y(C)||o;if(Se){ne.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(o&&E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer[Ue]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)ne.__webglFramebuffer[Ue][Ne]=i.createFramebuffer()}else ne.__webglFramebuffer[Ue]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)ne.__webglFramebuffer[Ue]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if(Ee)if(s.drawBuffers){let Ue=C.texture;for(let Ne=0,ot=Ue.length;Ne<ot;Ne++){let wt=n.get(Ue[Ne]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&He(C)===!1){let Ue=Ee?E:[E];ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Ue.length;Ne++){let ot=Ue[Ne];ne.__webglColorRenderbuffer[Ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ne]);let wt=r.convert(ot.format,ot.colorSpace),ve=r.convert(ot.type),Yt=A(ot.internalFormat,wt,ve,ot.colorSpace,C.isXRRenderTarget===!0),Dt=Je(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(ne.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Se){t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),j(i.TEXTURE_CUBE_MAP,E,$e);for(let Ue=0;Ue<6;Ue++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)qe(ne.__webglFramebuffer[Ue][Ne],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ne);else qe(ne.__webglFramebuffer[Ue],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(E,$e)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){let Ue=C.texture;for(let Ne=0,ot=Ue.length;Ne<ot;Ne++){let wt=Ue[Ne],ve=n.get(wt);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),j(i.TEXTURE_2D,wt,$e),qe(ne.__webglFramebuffer,C,wt,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,0),S(wt,$e)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ue=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Ue=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ue,_e.__webglTexture),j(Ue,E,$e),o&&E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)qe(ne.__webglFramebuffer[Ne],C,E,i.COLOR_ATTACHMENT0,Ue,Ne);else qe(ne.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,Ue,0);S(E,$e)&&v(Ue),t.unbindTexture()}C.depthBuffer&&Ke(C)}function Ge(C){let E=y(C)||o,ne=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let _e=0,Se=ne.length;_e<Se;_e++){let Ee=ne[_e];if(S(Ee,E)){let $e=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(Ee).__webglTexture;t.bindTexture($e,Ue),v($e),t.unbindTexture()}}}function We(C){if(o&&C.samples>0&&He(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],ne=C.width,_e=C.height,Se=i.COLOR_BUFFER_BIT,Ee=[],$e=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(C),Ne=C.isWebGLMultipleRenderTargets===!0;if(Ne)for(let ot=0;ot<E.length;ot++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ot=0;ot<E.length;ot++){Ee.push(i.COLOR_ATTACHMENT0+ot),C.depthBuffer&&Ee.push($e);let wt=Ue.__ignoreDepthValues!==void 0?Ue.__ignoreDepthValues:!1;if(wt===!1&&(C.depthBuffer&&(Se|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Se|=i.STENCIL_BUFFER_BIT)),Ne&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[ot]),wt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[$e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[$e])),Ne){let ve=n.get(E[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,ne,_e,0,0,ne,_e,Se,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ne)for(let ot=0;ot<E.length;ot++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[ot]);let wt=n.get(E[ot]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,wt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}}function Je(C){return Math.min(s.maxSamples,C.samples)}function He(C){let E=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ze(C){let E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function _t(C,E){let ne=C.colorSpace,_e=C.format,Se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===gc||ne!==ds&&ne!==Di&&(on.getTransfer(ne)===yn?o===!1?e.has("EXT_sRGB")===!0&&_e===Xi?(C.format=gc,C.minFilter=Li,C.generateMipmaps=!1):E=Ro.sRGBToLinear(E):(_e!==Xi||Se!==Is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),E}this.allocateTextureUnit=B,this.resetTextureUnits=Me,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=ae,this.rebindTextures=le,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=He}function Gx(i,e,t){let n=t.isWebGL2;function s(r,a=Di){let o,l=on.getTransfer(a);if(r===Is)return i.UNSIGNED_BYTE;if(r===Dd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ud)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Op)return i.BYTE;if(r===Fp)return i.SHORT;if(r===sh)return i.UNSIGNED_SHORT;if(r===Ld)return i.INT;if(r===As)return i.UNSIGNED_INT;if(r===Rs)return i.FLOAT;if(r===va)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Bp)return i.ALPHA;if(r===Xi)return i.RGBA;if(r===kp)return i.LUMINANCE;if(r===Hp)return i.LUMINANCE_ALPHA;if(r===er)return i.DEPTH_COMPONENT;if(r===Gr)return i.DEPTH_STENCIL;if(r===gc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===zp)return i.RED;if(r===Nd)return i.RED_INTEGER;if(r===Vp)return i.RG;if(r===Od)return i.RG_INTEGER;if(r===Fd)return i.RGBA_INTEGER;if(r===Pl||r===Il||r===Ll||r===Dl)if(l===yn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Pl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Pl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tu||r===nu||r===iu||r===su)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===tu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===iu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===su)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ru||r===au)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ru)return l===yn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===au)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ou||r===lu||r===cu||r===hu||r===uu||r===du||r===fu||r===pu||r===mu||r===gu||r===yu||r===xu||r===_u||r===vu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ou)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lu)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cu)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hu)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uu)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===du)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fu)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pu)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mu)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gu)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yu)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xu)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_u)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vu)return l===yn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ul||r===Mu||r===bu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ul)return l===yn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gp||r===Su||r===Eu||r===Tu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ul)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Su)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Eu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ic=class extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ei=class extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wx={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let y=t.getJointPose(M,n),g=this._getHandJoint(c,M);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],p=u.position.distanceTo(m.position),f=.02,x=.005;c.inputState.pinching&&p>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Lc=class extends Ds{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,p=null,f=null,x=null,M=t.getContextAttributes(),y=null,g=null,S=[],v=[],A=new ke,F=null,D=new ui;D.layers.enable(1),D.viewport=new Jn;let U=new ui;U.layers.enable(2),U.viewport=new Jn;let $=[D,U],T=new Ic;T.layers.enable(1),T.layers.enable(2);let R=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=S[j];return de===void 0&&(de=new pa,S[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=S[j];return de===void 0&&(de=new pa,S[j]=de),de.getGripSpace()},this.getHand=function(j){let de=S[j];return de===void 0&&(de=new pa,S[j]=de),de.getHandSpace()};function ce(j){let de=v.indexOf(j.inputSource);if(de===-1)return;let Te=S[de];Te!==void 0&&(Te.update(j.inputSource,j.frame,c||a),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function Me(){s.removeEventListener("select",ce),s.removeEventListener("selectstart",ce),s.removeEventListener("selectend",ce),s.removeEventListener("squeeze",ce),s.removeEventListener("squeezestart",ce),s.removeEventListener("squeezeend",ce),s.removeEventListener("end",Me),s.removeEventListener("inputsourceschange",B);for(let j=0;j<S.length;j++){let de=v[j];de!==null&&(v[j]=null,S[j].disconnect(de))}R=null,K=null,e.setRenderTarget(y),f=null,p=null,m=null,s=null,g=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ce),s.addEventListener("selectstart",ce),s.addEventListener("selectend",ce),s.addEventListener("squeeze",ce),s.addEventListener("squeezestart",ce),s.addEventListener("squeezeend",ce),s.addEventListener("end",Me),s.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let de={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new fs(f.framebufferWidth,f.framebufferHeight,{format:Xi,type:Is,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let de=null,Te=null,Be=null;M.depth&&(Be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=M.stencil?Gr:er,Te=M.stencil?Qs:As);let qe={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};m=new XRWebGLBinding(s,t),p=m.createProjectionLayer(qe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),g=new fs(p.textureWidth,p.textureHeight,{format:Xi,type:Is,depthTexture:new Bo(p.textureWidth,p.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});let ft=e.properties.get(g);ft.__ignoreDepthValues=p.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(j){for(let de=0;de<j.removed.length;de++){let Te=j.removed[de],Be=v.indexOf(Te);Be>=0&&(v[Be]=null,S[Be].disconnect(Te))}for(let de=0;de<j.added.length;de++){let Te=j.added[de],Be=v.indexOf(Te);if(Be===-1){for(let ft=0;ft<S.length;ft++)if(ft>=v.length){v.push(Te),Be=ft;break}else if(v[ft]===null){v[ft]=Te,Be=ft;break}if(Be===-1)break}let qe=S[Be];qe&&qe.connect(Te)}}let Y=new k,z=new k;function V(j,de,Te){Y.setFromMatrixPosition(de.matrixWorld),z.setFromMatrixPosition(Te.matrixWorld);let Be=Y.distanceTo(z),qe=de.projectionMatrix.elements,ft=Te.projectionMatrix.elements,yt=qe[14]/(qe[10]-1),Ke=qe[14]/(qe[10]+1),le=(qe[9]+1)/qe[5],J=(qe[9]-1)/qe[5],Ge=(qe[8]-1)/qe[0],We=(ft[8]+1)/ft[0],Je=yt*Ge,He=yt*We,Ze=Be/(-Ge+We),_t=Ze*-Ge;de.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_t),j.translateZ(Ze),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let C=yt+Ze,E=Ke+Ze,ne=Je-_t,_e=He+(Be-_t),Se=le*Ke/E*C,Ee=J*Ke/E*C;j.projectionMatrix.makePerspective(ne,_e,Se,Ee,C,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Z(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;T.near=U.near=D.near=j.near,T.far=U.far=D.far=j.far,(R!==T.near||K!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,K=T.far);let de=j.parent,Te=T.cameras;Z(T,de);for(let Be=0;Be<Te.length;Be++)Z(Te[Be],de);Te.length===2?V(T,D,U):T.projectionMatrix.copy(D.projectionMatrix),ae(j,T,de)};function ae(j,de,Te){Te===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=yc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(j){l=j,p!==null&&(p.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let oe=null;function ue(j,de){if(u=de.getViewerPose(c||a),x=de,u!==null){let Te=u.views;f!==null&&(e.setRenderTargetFramebuffer(g,f.framebuffer),e.setRenderTarget(g));let Be=!1;Te.length!==T.cameras.length&&(T.cameras.length=0,Be=!0);for(let qe=0;qe<Te.length;qe++){let ft=Te[qe],yt=null;if(f!==null)yt=f.getViewport(ft);else{let le=m.getViewSubImage(p,ft);yt=le.viewport,qe===0&&(e.setRenderTargetTextures(g,le.colorTexture,p.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(g))}let Ke=$[qe];Ke===void 0&&(Ke=new ui,Ke.layers.enable(qe),Ke.viewport=new Jn,$[qe]=Ke),Ke.matrix.fromArray(ft.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ft.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(yt.x,yt.y,yt.width,yt.height),qe===0&&(T.matrix.copy(Ke.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Be===!0&&T.cameras.push(Ke)}}for(let Te=0;Te<S.length;Te++){let Be=v[Te],qe=S[Te];Be!==null&&qe!==void 0&&qe.update(Be,de,c||a)}oe&&oe(j,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),x=null}let we=new Xd;we.setAnimationLoop(ue),this.setAnimationLoop=function(j){oe=j},this.dispose=function(){}}};function Xx(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,Wd(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,S,v,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(y,g):g.isMeshToonMaterial?(r(y,g),m(y,g)):g.isMeshPhongMaterial?(r(y,g),u(y,g)):g.isMeshStandardMaterial?(r(y,g),p(y,g),g.isMeshPhysicalMaterial&&f(y,g,A)):g.isMeshMatcapMaterial?(r(y,g),x(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),M(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(a(y,g),g.isLineDashedMaterial&&o(y,g)):g.isPointsMaterial?l(y,g,S,v):g.isSpriteMaterial?c(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===mi&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===mi&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let S=e.get(g).envMap;if(S&&(y.envMap.value=S,y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function a(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function o(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function l(y,g,S,v){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*S,y.scale.value=v*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function u(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function p(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function f(y,g,S){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mi&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,g){g.matcap&&(y.matcap.value=g.matcap)}function M(y,g){let S=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let A=v.program;n.uniformBlockBinding(S,A)}function c(S,v){let A=s[S.id];A===void 0&&(x(S),A=u(S),s[S.id]=A,S.addEventListener("dispose",y));let F=v.program;n.updateUBOMapping(S,F);let D=e.render.frame;r[S.id]!==D&&(p(S),r[S.id]=D)}function u(S){let v=m();S.__bindingPointIndex=v;let A=i.createBuffer(),F=S.__size,D=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,F,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function m(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let v=s[S.id],A=S.uniforms,F=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let D=0,U=A.length;D<U;D++){let $=Array.isArray(A[D])?A[D]:[A[D]];for(let T=0,R=$.length;T<R;T++){let K=$[T];if(f(K,D,T,F)===!0){let ce=K.__offset,Me=Array.isArray(K.value)?K.value:[K.value],B=0;for(let Y=0;Y<Me.length;Y++){let z=Me[Y],V=M(z);typeof z=="number"||typeof z=="boolean"?(K.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,ce+B,K.__data)):z.isMatrix3?(K.__data[0]=z.elements[0],K.__data[1]=z.elements[1],K.__data[2]=z.elements[2],K.__data[3]=0,K.__data[4]=z.elements[3],K.__data[5]=z.elements[4],K.__data[6]=z.elements[5],K.__data[7]=0,K.__data[8]=z.elements[6],K.__data[9]=z.elements[7],K.__data[10]=z.elements[8],K.__data[11]=0):(z.toArray(K.__data,B),B+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ce,K.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,v,A,F){let D=S.value,U=v+"_"+A;if(F[U]===void 0)return typeof D=="number"||typeof D=="boolean"?F[U]=D:F[U]=D.clone(),!0;{let $=F[U];if(typeof D=="number"||typeof D=="boolean"){if($!==D)return F[U]=D,!0}else if($.equals(D)===!1)return $.copy(D),!0}return!1}function x(S){let v=S.uniforms,A=0,F=16;for(let U=0,$=v.length;U<$;U++){let T=Array.isArray(v[U])?v[U]:[v[U]];for(let R=0,K=T.length;R<K;R++){let ce=T[R],Me=Array.isArray(ce.value)?ce.value:[ce.value];for(let B=0,Y=Me.length;B<Y;B++){let z=Me[B],V=M(z),Z=A%F;Z!==0&&F-Z<V.boundary&&(A+=F-Z),ce.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=A,A+=V.storage}}}let D=A%F;return D>0&&(A+=F-D),S.__size=A,S.__cache={},this}function M(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function y(S){let v=S.target;v.removeEventListener("dispose",y);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Ea=class{constructor(e={}){let{canvas:t=tm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let f=new Uint32Array(4),x=new Int32Array(4),M=null,y=null,g=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this._useLegacyLights=!1,this.toneMapping=Ps,this.toneMappingExposure=1;let v=this,A=!1,F=0,D=0,U=null,$=-1,T=null,R=new Jn,K=new Jn,ce=null,Me=new vt(0),B=0,Y=t.width,z=t.height,V=1,Z=null,ae=null,oe=new Jn(0,0,Y,z),ue=new Jn(0,0,Y,z),we=!1,j=new Sa,de=!1,Te=!1,Be=null,qe=new Hn,ft=new ke,yt=new k,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return U===null?V:1}let J=n;function Ge(w,W){for(let Q=0;Q<w.length;Q++){let re=w[Q],ee=t.getContext(re,W);if(ee!==null)return ee}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nh}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Le,!1),J===null){let W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),J=Ge(W,w),J===null)throw Ge(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let We,Je,He,Ze,_t,C,E,ne,_e,Se,Ee,$e,Ue,Ne,ot,wt,ve,Yt,Dt,pt,et,ze,Mt,zt;function fn(){We=new uy(J),Je=new ry(J,We,e),We.init(Je),ze=new Gx(J,We,Je),He=new zx(J,We,Je),Ze=new py(J),_t=new Cx,C=new Vx(J,We,He,_t,Je,ze,Ze),E=new oy(v),ne=new hy(v),_e=new bm(J,Je),Mt=new iy(J,We,_e,Je),Se=new dy(J,_e,Ze,Mt),Ee=new xy(J,Se,_e,Ze),Dt=new yy(J,Je,C),wt=new ay(_t),$e=new Rx(v,E,ne,We,Je,Mt,wt),Ue=new Xx(v,_t),Ne=new Ix,ot=new Fx(We,Je),Yt=new ny(v,E,ne,He,Ee,p,l),ve=new Hx(v,Ee,Je),zt=new qx(J,Ze,Je,He),pt=new sy(J,We,Ze,Je),et=new fy(J,We,Ze,Je),Ze.programs=$e.programs,v.capabilities=Je,v.extensions=We,v.properties=_t,v.renderLists=Ne,v.shadowMap=ve,v.state=He,v.info=Ze}fn();let Ct=new Lc(v,J);this.xr=Ct,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let w=We.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=We.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(Y,z,!1))},this.getSize=function(w){return w.set(Y,z)},this.setSize=function(w,W,Q=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,z=W,t.width=Math.floor(w*V),t.height=Math.floor(W*V),Q===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(Y*V,z*V).floor()},this.setDrawingBufferSize=function(w,W,Q){Y=w,z=W,V=Q,t.width=Math.floor(w*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,W,Q,re){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,W,Q,re),He.viewport(R.copy(oe).multiplyScalar(V).floor())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,W,Q,re){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,W,Q,re),He.scissor(K.copy(ue).multiplyScalar(V).floor())},this.getScissorTest=function(){return we},this.setScissorTest=function(w){He.setScissorTest(we=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(w=!0,W=!0,Q=!0){let re=0;if(w){let ee=!1;if(U!==null){let Oe=U.texture.format;ee=Oe===Fd||Oe===Od||Oe===Nd}if(ee){let Oe=U.texture.type,Ve=Oe===Is||Oe===As||Oe===sh||Oe===Qs||Oe===Dd||Oe===Ud,st=Yt.getClearColor(),rt=Yt.getClearAlpha(),Qe=st.r,ct=st.g,ht=st.b;Ve?(f[0]=Qe,f[1]=ct,f[2]=ht,f[3]=rt,J.clearBufferuiv(J.COLOR,0,f)):(x[0]=Qe,x[1]=ct,x[2]=ht,x[3]=rt,J.clearBufferiv(J.COLOR,0,x))}else re|=J.COLOR_BUFFER_BIT}W&&(re|=J.DEPTH_BUFFER_BIT),Q&&(re|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ne.dispose(),ot.dispose(),_t.dispose(),E.dispose(),ne.dispose(),Ee.dispose(),Mt.dispose(),zt.dispose(),$e.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",On),Ct.removeEventListener("sessionend",jt),Be&&(Be.dispose(),Be=null),qn.stop()};function Ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Ze.autoReset,W=ve.enabled,Q=ve.autoUpdate,re=ve.needsUpdate,ee=ve.type;fn(),Ze.autoReset=w,ve.enabled=W,ve.autoUpdate=Q,ve.needsUpdate=re,ve.type=ee}function Le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){let W=w.target;W.removeEventListener("dispose",De),at(W)}function at(w){it(w),_t.remove(w)}function it(w){let W=_t.get(w).programs;W!==void 0&&(W.forEach(function(Q){$e.releaseProgram(Q)}),w.isShaderMaterial&&$e.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Q,re,ee,Oe){W===null&&(W=Ke);let Ve=ee.isMesh&&ee.matrixWorld.determinant()<0,st=ns(w,W,Q,re,ee);He.setMaterial(re,Ve);let rt=Q.index,Qe=1;if(re.wireframe===!0){if(rt=Se.getWireframeAttribute(Q),rt===void 0)return;Qe=2}let ct=Q.drawRange,ht=Q.attributes.position,Xe=ct.start*Qe,gt=(ct.start+ct.count)*Qe;Oe!==null&&(Xe=Math.max(Xe,Oe.start*Qe),gt=Math.min(gt,(Oe.start+Oe.count)*Qe)),rt!==null?(Xe=Math.max(Xe,0),gt=Math.min(gt,rt.count)):ht!=null&&(Xe=Math.max(Xe,0),gt=Math.min(gt,ht.count));let Ut=gt-Xe;if(Ut<0||Ut===1/0)return;Mt.setup(ee,re,st,Q,rt);let Qt,hn=pt;if(rt!==null&&(Qt=_e.get(rt),hn=et,hn.setIndex(Qt)),ee.isMesh)re.wireframe===!0?(He.setLineWidth(re.wireframeLinewidth*le()),hn.setMode(J.LINES)):hn.setMode(J.TRIANGLES);else if(ee.isLine){let Pt=re.linewidth;Pt===void 0&&(Pt=1),He.setLineWidth(Pt*le()),ee.isLineSegments?hn.setMode(J.LINES):ee.isLineLoop?hn.setMode(J.LINE_LOOP):hn.setMode(J.LINE_STRIP)}else ee.isPoints?hn.setMode(J.POINTS):ee.isSprite&&hn.setMode(J.TRIANGLES);if(ee.isBatchedMesh)hn.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)hn.renderInstances(Xe,Ut,ee.count);else if(Q.isInstancedBufferGeometry){let Pt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,is=Math.min(Q.instanceCount,Pt);hn.renderInstances(Xe,Ut,is)}else hn.render(Xe,Ut)};function Jt(w,W,Q){w.transparent===!0&&w.side===An&&w.forceSinglePass===!1?(w.side=mi,w.needsUpdate=!0,fi(w,W,Q),w.side=Ls,w.needsUpdate=!0,fi(w,W,Q),w.side=An):fi(w,W,Q)}this.compile=function(w,W,Q=null){Q===null&&(Q=w),y=ot.get(Q),y.init(),S.push(y),Q.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(y.pushLight(ee),ee.castShadow&&y.pushShadow(ee))}),w!==Q&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(y.pushLight(ee),ee.castShadow&&y.pushShadow(ee))}),y.setupLights(v._useLegacyLights);let re=new Set;return w.traverse(function(ee){let Oe=ee.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){let st=Oe[Ve];Jt(st,Q,ee),re.add(st)}else Jt(Oe,Q,ee),re.add(Oe)}),S.pop(),y=null,re},this.compileAsync=function(w,W,Q=null){let re=this.compile(w,W,Q);return new Promise(ee=>{function Oe(){if(re.forEach(function(Ve){_t.get(Ve).currentProgram.isReady()&&re.delete(Ve)}),re.size===0){ee(w);return}setTimeout(Oe,10)}We.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let tn=null;function Ln(w){tn&&tn(w)}function On(){qn.stop()}function jt(){qn.start()}let qn=new Xd;qn.setAnimationLoop(Ln),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(w){tn=w,Ct.setAnimationLoop(w),w===null?qn.stop():qn.start()},Ct.addEventListener("sessionstart",On),Ct.addEventListener("sessionend",jt),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(W),W=Ct.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,W,U),y=ot.get(w,S.length),y.init(),S.push(y),qe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),j.setFromProjectionMatrix(qe),Te=this.localClippingEnabled,de=wt.init(this.clippingPlanes,Te),M=Ne.get(w,g.length),M.init(),g.push(M),zn(w,W,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(Z,ae),this.info.render.frame++,de===!0&&wt.beginShadows();let Q=y.state.shadowsArray;if(ve.render(Q,w,W),de===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(M,w),y.setupLights(v._useLegacyLights),W.isArrayCamera){let re=W.cameras;for(let ee=0,Oe=re.length;ee<Oe;ee++){let Ve=re[ee];xn(M,w,Ve,Ve.viewport)}}else xn(M,w,W);U!==null&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(v,w,W),Mt.resetDefaultState(),$=-1,T=null,S.pop(),S.length>0?y=S[S.length-1]:y=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function zn(w,W,Q,re){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){re&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(qe);let Ve=Ee.update(w),st=w.material;st.visible&&M.push(w,Ve,st,Q,yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){let Ve=Ee.update(w),st=w.material;if(re&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),yt.copy(Ve.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4(qe)),Array.isArray(st)){let rt=Ve.groups;for(let Qe=0,ct=rt.length;Qe<ct;Qe++){let ht=rt[Qe],Xe=st[ht.materialIndex];Xe&&Xe.visible&&M.push(w,Ve,Xe,Q,yt.z,ht)}}else st.visible&&M.push(w,Ve,st,Q,yt.z,null)}}let Oe=w.children;for(let Ve=0,st=Oe.length;Ve<st;Ve++)zn(Oe[Ve],W,Q,re)}function xn(w,W,Q,re){let ee=w.opaque,Oe=w.transmissive,Ve=w.transparent;y.setupLightsView(Q),de===!0&&wt.setGlobalState(v.clippingPlanes,Q),Oe.length>0&&_n(ee,Oe,W,Q),re&&He.viewport(R.copy(re)),ee.length>0&&mt(ee,W,Q),Oe.length>0&&mt(Oe,W,Q),Ve.length>0&&mt(Ve,W,Q),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function _n(w,W,Q,re){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Oe=Je.isWebGL2;Be===null&&(Be=new fs(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?va:Is,minFilter:_a,samples:Oe?4:0})),v.getDrawingBufferSize(ft),Oe?Be.setSize(ft.x,ft.y):Be.setSize(xc(ft.x),xc(ft.y));let Ve=v.getRenderTarget();v.setRenderTarget(Be),v.getClearColor(Me),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let st=v.toneMapping;v.toneMapping=Ps,mt(w,Q,re),C.updateMultisampleRenderTarget(Be),C.updateRenderTargetMipmap(Be);let rt=!1;for(let Qe=0,ct=W.length;Qe<ct;Qe++){let ht=W[Qe],Xe=ht.object,gt=ht.geometry,Ut=ht.material,Qt=ht.group;if(Ut.side===An&&Xe.layers.test(re.layers)){let hn=Ut.side;Ut.side=mi,Ut.needsUpdate=!0,nn(Xe,Q,re,gt,Ut,Qt),Ut.side=hn,Ut.needsUpdate=!0,rt=!0}}rt===!0&&(C.updateMultisampleRenderTarget(Be),C.updateRenderTargetMipmap(Be)),v.setRenderTarget(Ve),v.setClearColor(Me,B),v.toneMapping=st}function mt(w,W,Q){let re=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,Oe=w.length;ee<Oe;ee++){let Ve=w[ee],st=Ve.object,rt=Ve.geometry,Qe=re===null?Ve.material:re,ct=Ve.group;st.layers.test(Q.layers)&&nn(st,W,Q,rt,Qe,ct)}}function nn(w,W,Q,re,ee,Oe){w.onBeforeRender(v,W,Q,re,ee,Oe),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(v,W,Q,re,w,Oe),ee.transparent===!0&&ee.side===An&&ee.forceSinglePass===!1?(ee.side=mi,ee.needsUpdate=!0,v.renderBufferDirect(Q,W,re,ee,w,Oe),ee.side=Ls,ee.needsUpdate=!0,v.renderBufferDirect(Q,W,re,ee,w,Oe),ee.side=An):v.renderBufferDirect(Q,W,re,ee,w,Oe),w.onAfterRender(v,W,Q,re,ee,Oe)}function fi(w,W,Q){W.isScene!==!0&&(W=Ke);let re=_t.get(w),ee=y.state.lights,Oe=y.state.shadowsArray,Ve=ee.state.version,st=$e.getParameters(w,ee.state,Oe,W,Q),rt=$e.getProgramCacheKey(st),Qe=re.programs;re.environment=w.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(w.isMeshStandardMaterial?ne:E).get(w.envMap||re.environment),Qe===void 0&&(w.addEventListener("dispose",De),Qe=new Map,re.programs=Qe);let ct=Qe.get(rt);if(ct!==void 0){if(re.currentProgram===ct&&re.lightsStateVersion===Ve)return $i(w,st),ct}else st.uniforms=$e.getUniforms(w),w.onBuild(Q,st,v),w.onBeforeCompile(st,v),ct=$e.acquireProgram(st,rt),Qe.set(rt,ct),re.uniforms=st.uniforms;let ht=re.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ht.clippingPlanes=wt.uniform),$i(w,st),re.needsLights=Dn(w),re.lightsStateVersion=Ve,re.needsLights&&(ht.ambientLightColor.value=ee.state.ambient,ht.lightProbe.value=ee.state.probe,ht.directionalLights.value=ee.state.directional,ht.directionalLightShadows.value=ee.state.directionalShadow,ht.spotLights.value=ee.state.spot,ht.spotLightShadows.value=ee.state.spotShadow,ht.rectAreaLights.value=ee.state.rectArea,ht.ltc_1.value=ee.state.rectAreaLTC1,ht.ltc_2.value=ee.state.rectAreaLTC2,ht.pointLights.value=ee.state.point,ht.pointLightShadows.value=ee.state.pointShadow,ht.hemisphereLights.value=ee.state.hemi,ht.directionalShadowMap.value=ee.state.directionalShadowMap,ht.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ht.spotShadowMap.value=ee.state.spotShadowMap,ht.spotLightMatrix.value=ee.state.spotLightMatrix,ht.spotLightMap.value=ee.state.spotLightMap,ht.pointShadowMap.value=ee.state.pointShadowMap,ht.pointShadowMatrix.value=ee.state.pointShadowMatrix),re.currentProgram=ct,re.uniformsList=null,ct}function Ai(w){if(w.uniformsList===null){let W=w.currentProgram.getUniforms();w.uniformsList=Hr.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function $i(w,W){let Q=_t.get(w);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function ns(w,W,Q,re,ee){W.isScene!==!0&&(W=Ke),C.resetTextureUnits();let Oe=W.fog,Ve=re.isMeshStandardMaterial?W.environment:null,st=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ds,rt=(re.isMeshStandardMaterial?ne:E).get(re.envMap||Ve),Qe=re.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ct=!!Q.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),ht=!!Q.morphAttributes.position,Xe=!!Q.morphAttributes.normal,gt=!!Q.morphAttributes.color,Ut=Ps;re.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ut=v.toneMapping);let Qt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,hn=Qt!==void 0?Qt.length:0,Pt=_t.get(re),is=y.state.lights;if(de===!0&&(Te===!0||w!==T)){let pn=w===T&&re.id===$;wt.setState(re,w,pn)}let lt=!1;re.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==is.state.version||Pt.outputColorSpace!==st||ee.isBatchedMesh&&Pt.batching===!1||!ee.isBatchedMesh&&Pt.batching===!0||ee.isInstancedMesh&&Pt.instancing===!1||!ee.isInstancedMesh&&Pt.instancing===!0||ee.isSkinnedMesh&&Pt.skinning===!1||!ee.isSkinnedMesh&&Pt.skinning===!0||ee.isInstancedMesh&&Pt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Pt.instancingColor===!1&&ee.instanceColor!==null||Pt.envMap!==rt||re.fog===!0&&Pt.fog!==Oe||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==wt.numPlanes||Pt.numIntersection!==wt.numIntersection)||Pt.vertexAlphas!==Qe||Pt.vertexTangents!==ct||Pt.morphTargets!==ht||Pt.morphNormals!==Xe||Pt.morphColors!==gt||Pt.toneMapping!==Ut||Je.isWebGL2===!0&&Pt.morphTargetsCount!==hn)&&(lt=!0):(lt=!0,Pt.__version=re.version);let Yn=Pt.currentProgram;lt===!0&&(Yn=fi(re,W,ee));let Fi=!1,Sn=!1,sn=!1,Xt=Yn.getUniforms(),ti=Pt.uniforms;if(He.useProgram(Yn.program)&&(Fi=!0,Sn=!0,sn=!0),re.id!==$&&($=re.id,Sn=!0),Fi||T!==w){Xt.setValue(J,"projectionMatrix",w.projectionMatrix),Xt.setValue(J,"viewMatrix",w.matrixWorldInverse);let pn=Xt.map.cameraPosition;pn!==void 0&&pn.setValue(J,yt.setFromMatrixPosition(w.matrixWorld)),Je.logarithmicDepthBuffer&&Xt.setValue(J,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Xt.setValue(J,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Sn=!0,sn=!0)}if(ee.isSkinnedMesh){Xt.setOptional(J,ee,"bindMatrix"),Xt.setOptional(J,ee,"bindMatrixInverse");let pn=ee.skeleton;pn&&(Je.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Xt.setValue(J,"boneTexture",pn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(Xt.setOptional(J,ee,"batchingTexture"),Xt.setValue(J,"batchingTexture",ee._matricesTexture,C));let ni=Q.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0&&Je.isWebGL2===!0)&&Dt.update(ee,Q,Yn),(Sn||Pt.receiveShadow!==ee.receiveShadow)&&(Pt.receiveShadow=ee.receiveShadow,Xt.setValue(J,"receiveShadow",ee.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(ti.envMap.value=rt,ti.flipEnvMap.value=rt.isCubeTexture&&rt.isRenderTargetTexture===!1?-1:1),Sn&&(Xt.setValue(J,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&ys(ti,sn),Oe&&re.fog===!0&&Ue.refreshFogUniforms(ti,Oe),Ue.refreshMaterialUniforms(ti,re,V,z,Be),Hr.upload(J,Ai(Pt),ti,C)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Hr.upload(J,Ai(Pt),ti,C),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Xt.setValue(J,"center",ee.center),Xt.setValue(J,"modelViewMatrix",ee.modelViewMatrix),Xt.setValue(J,"normalMatrix",ee.normalMatrix),Xt.setValue(J,"modelMatrix",ee.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){let pn=re.uniformsGroups;for(let ai=0,Hs=pn.length;ai<Hs;ai++)if(Je.isWebGL2){let Bi=pn[ai];zt.update(Bi,Yn),zt.bind(Bi,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function ys(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Dn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,W,Q){_t.get(w.texture).__webglTexture=W,_t.get(w.depthTexture).__webglTexture=Q;let re=_t.get(w);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=Q===void 0,re.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,W){let Q=_t.get(w);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,Q=0){U=w,F=W,D=Q;let re=!0,ee=null,Oe=!1,Ve=!1;if(w){let rt=_t.get(w);rt.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(J.FRAMEBUFFER,null),re=!1):rt.__webglFramebuffer===void 0?C.setupRenderTarget(w):rt.__hasExternalTextures&&C.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);let Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ve=!0);let ct=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ct[W])?ee=ct[W][Q]:ee=ct[W],Oe=!0):Je.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?ee=_t.get(w).__webglMultisampledFramebuffer:Array.isArray(ct)?ee=ct[Q]:ee=ct,R.copy(w.viewport),K.copy(w.scissor),ce=w.scissorTest}else R.copy(oe).multiplyScalar(V).floor(),K.copy(ue).multiplyScalar(V).floor(),ce=we;if(He.bindFramebuffer(J.FRAMEBUFFER,ee)&&Je.drawBuffers&&re&&He.drawBuffers(w,ee),He.viewport(R),He.scissor(K),He.setScissorTest(ce),Oe){let rt=_t.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W,rt.__webglTexture,Q)}else if(Ve){let rt=_t.get(w.texture),Qe=W||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,rt.__webglTexture,Q||0,Qe)}$=-1},this.readRenderTargetPixels=function(w,W,Q,re,ee,Oe,Ve){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(st=st[Ve]),st){He.bindFramebuffer(J.FRAMEBUFFER,st);try{let rt=w.texture,Qe=rt.format,ct=rt.type;if(Qe!==Xi&&ze.convert(Qe)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ht=ct===va&&(We.has("EXT_color_buffer_half_float")||Je.isWebGL2&&We.has("EXT_color_buffer_float"));if(ct!==Is&&ze.convert(ct)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ct===Rs&&(Je.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-re&&Q>=0&&Q<=w.height-ee&&J.readPixels(W,Q,re,ee,ze.convert(Qe),ze.convert(ct),Oe)}finally{let rt=U!==null?_t.get(U).__webglFramebuffer:null;He.bindFramebuffer(J.FRAMEBUFFER,rt)}}},this.copyFramebufferToTexture=function(w,W,Q=0){let re=Math.pow(2,-Q),ee=Math.floor(W.image.width*re),Oe=Math.floor(W.image.height*re);C.setTexture2D(W,0),J.copyTexSubImage2D(J.TEXTURE_2D,Q,0,0,w.x,w.y,ee,Oe),He.unbindTexture()},this.copyTextureToTexture=function(w,W,Q,re=0){let ee=W.image.width,Oe=W.image.height,Ve=ze.convert(Q.format),st=ze.convert(Q.type);C.setTexture2D(Q,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,Q.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,Q.unpackAlignment),W.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,re,w.x,w.y,ee,Oe,Ve,st,W.image.data):W.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,re,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,Ve,W.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,re,w.x,w.y,Ve,st,W.image),re===0&&Q.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Q,re,ee=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Oe=w.max.x-w.min.x+1,Ve=w.max.y-w.min.y+1,st=w.max.z-w.min.z+1,rt=ze.convert(re.format),Qe=ze.convert(re.type),ct;if(re.isData3DTexture)C.setTexture3D(re,0),ct=J.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)C.setTexture2DArray(re,0),ct=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,re.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,re.unpackAlignment);let ht=J.getParameter(J.UNPACK_ROW_LENGTH),Xe=J.getParameter(J.UNPACK_IMAGE_HEIGHT),gt=J.getParameter(J.UNPACK_SKIP_PIXELS),Ut=J.getParameter(J.UNPACK_SKIP_ROWS),Qt=J.getParameter(J.UNPACK_SKIP_IMAGES),hn=Q.isCompressedTexture?Q.mipmaps[ee]:Q.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,hn.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,hn.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,w.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,w.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,w.min.z),Q.isDataTexture||Q.isData3DTexture?J.texSubImage3D(ct,ee,W.x,W.y,W.z,Oe,Ve,st,rt,Qe,hn.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(ct,ee,W.x,W.y,W.z,Oe,Ve,st,rt,hn.data)):J.texSubImage3D(ct,ee,W.x,W.y,W.z,Oe,Ve,st,rt,Qe,hn),J.pixelStorei(J.UNPACK_ROW_LENGTH,ht),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Xe),J.pixelStorei(J.UNPACK_SKIP_PIXELS,gt),J.pixelStorei(J.UNPACK_SKIP_ROWS,Ut),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Qt),ee===0&&re.generateMipmaps&&J.generateMipmap(ct),He.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),He.unbindTexture()},this.resetState=function(){F=0,D=0,U=null,He.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return us}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===rh?"display-p3":"srgb",t.unpackColorSpace=on.workingColorSpace===tl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qn?tr:kd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===tr?Qn:ds}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Dc=class extends Ea{};Dc.prototype.isWebGL1Renderer=!0;var ko=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new vt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ho=class extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ta=class extends Ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gd=new k,yd=new k,xd=new Hn,ac=new Ma,mo=new Wr,Uc=class extends di{constructor(e=new yi,t=new Ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)gd.fromBufferAttribute(t,s-1),yd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=gd.distanceTo(yd);e.setAttribute("lineDistance",new Cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;xd.copy(s).invert(),ac.copy(e.ray).applyMatrix4(xd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,u=new k,m=new k,p=new k,f=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){let g=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=f){let F=x.getX(v),D=x.getX(v+1);if(c.fromBufferAttribute(y,F),u.fromBufferAttribute(y,D),ac.distanceSqToSegment(c,u,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let $=e.ray.origin.distanceTo(p);$<e.near||$>e.far||t.push({distance:$,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,a.start),S=Math.min(y.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=f){if(c.fromBufferAttribute(y,v),u.fromBufferAttribute(y,v+1),ac.distanceSqToSegment(c,u,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(p);D<e.near||D>e.far||t.push({distance:D,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},_d=new k,vd=new k,zo=class extends Uc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_d.fromBufferAttribute(t,s),vd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_d.distanceTo(vd);e.setAttribute("lineDistance",new Cn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vo=class extends Ui{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,f=(a-u)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ke:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new k,s=[],r=[],a=[],o=new k,l=new Hn;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),m=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ri(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ri(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},wa=class extends Ni{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ke,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*u-f*m+this.aX,c=p*m+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Nc=class extends wa{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function oh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,m){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+m)+(l-o)/m;p*=u,f*=u,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var go=new k,oc=new oh,lc=new oh,cc=new oh,Oc=class extends Ni{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(go.subVectors(s[0],s[1]).add(s[0]),c=go);let m=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(go.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=go),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(m),f),M=Math.pow(m.distanceToSquared(p),f),y=Math.pow(p.distanceToSquared(u),f);M<1e-4&&(M=1),x<1e-4&&(x=M),y<1e-4&&(y=M),oc.initNonuniformCatmullRom(c.x,m.x,p.x,u.x,x,M,y),lc.initNonuniformCatmullRom(c.y,m.y,p.y,u.y,x,M,y),cc.initNonuniformCatmullRom(c.z,m.z,p.z,u.z,x,M,y)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(c.x,m.x,p.x,u.x,this.tension),lc.initCatmullRom(c.y,m.y,p.y,u.y,this.tension),cc.initCatmullRom(c.z,m.z,p.z,u.z,this.tension));return n.set(oc.calc(l),lc.calc(l),cc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Md(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Yx(i,e){let t=1-i;return t*t*e}function $x(i,e){return 2*(1-i)*i*e}function Kx(i,e){return i*i*e}function ma(i,e,t,n){return Yx(i,e)+$x(i,t)+Kx(i,n)}function Zx(i,e){let t=1-i;return t*t*t*e}function Jx(i,e){let t=1-i;return 3*t*t*i*e}function jx(i,e){return 3*(1-i)*i*i*e}function Qx(i,e){return i*i*i*e}function ga(i,e,t,n,s){return Zx(i,e)+Jx(i,t)+jx(i,n)+Qx(i,s)}var Go=class extends Ni{constructor(e=new ke,t=new ke,n=new ke,s=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ke){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,s.x,r.x,a.x,o.x),ga(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fc=class extends Ni{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,s.x,r.x,a.x,o.x),ga(e,s.y,r.y,a.y,o.y),ga(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends Ni{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bc=class extends Ni{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends Ni{constructor(e=new ke,t=new ke,n=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ke){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ma(e,s.x,r.x,a.x),ma(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends Ni{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ma(e,s.x,r.x,a.x),ma(e,s.y,r.y,a.y),ma(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends Ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(Md(o,l.x,c.x,u.x,m.x),Md(o,l.y,c.y,u.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ke().fromArray(s))}return this}},bd=Object.freeze({__proto__:null,ArcCurve:Nc,CatmullRomCurve3:Oc,CubicBezierCurve:Go,CubicBezierCurve3:Fc,EllipseCurve:wa,LineCurve:Wo,LineCurve3:Bc,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:kc,SplineCurve:qo}),Hc=class extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new bd[s.type]().fromJSON(s))}return this}},qr=class extends Hc{constructor(e){super(),this.type="Path",this.currentPoint=new ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wo(this.currentPoint.clone(),new ke(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Xo(this.currentPoint.clone(),new ke(e,t),new ke(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Go(this.currentPoint.clone(),new ke(e,t),new ke(n,s),new ke(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new wa(e,t,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Os=class i extends yi{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],m=[],p=[],f=[],x=0,M=[],y=n/2,g=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Cn(m,3)),this.setAttribute("normal",new Cn(p,3)),this.setAttribute("uv",new Cn(f,2));function S(){let A=new k,F=new k,D=0,U=(t-e)/n;for(let $=0;$<=r;$++){let T=[],R=$/r,K=R*(t-e)+e;for(let ce=0;ce<=s;ce++){let Me=ce/s,B=Me*l+o,Y=Math.sin(B),z=Math.cos(B);F.x=K*Y,F.y=-R*n+y,F.z=K*z,m.push(F.x,F.y,F.z),A.set(Y,U,z).normalize(),p.push(A.x,A.y,A.z),f.push(Me,1-R),T.push(x++)}M.push(T)}for(let $=0;$<s;$++)for(let T=0;T<r;T++){let R=M[T][$],K=M[T+1][$],ce=M[T+1][$+1],Me=M[T][$+1];u.push(R,K,Me),u.push(K,ce,Me),D+=6}c.addGroup(g,D,0),g+=D}function v(A){let F=x,D=new ke,U=new k,$=0,T=A===!0?e:t,R=A===!0?1:-1;for(let ce=1;ce<=s;ce++)m.push(0,y*R,0),p.push(0,R,0),f.push(.5,.5),x++;let K=x;for(let ce=0;ce<=s;ce++){let B=ce/s*l+o,Y=Math.cos(B),z=Math.sin(B);U.x=T*z,U.y=y*R,U.z=T*Y,m.push(U.x,U.y,U.z),p.push(0,R,0),D.x=Y*.5+.5,D.y=z*.5*R+.5,f.push(D.x,D.y),x++}for(let ce=0;ce<s;ce++){let Me=F+ce,B=K+ce;A===!0?u.push(B,B+1,Me):u.push(B+1,B,Me),$+=3}c.addGroup(g,$,A===!0?1:2),g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qi=class i extends Os{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yo=class i extends yi{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Cn(r,3)),this.setAttribute("normal",new Cn(r.slice(),3)),this.setAttribute("uv",new Cn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new k,A=new k,F=new k;for(let D=0;D<t.length;D+=3)f(t[D+0],v),f(t[D+1],A),f(t[D+2],F),l(v,A,F,S)}function l(S,v,A,F){let D=F+1,U=[];for(let $=0;$<=D;$++){U[$]=[];let T=S.clone().lerp(A,$/D),R=v.clone().lerp(A,$/D),K=D-$;for(let ce=0;ce<=K;ce++)ce===0&&$===D?U[$][ce]=T:U[$][ce]=T.clone().lerp(R,ce/K)}for(let $=0;$<D;$++)for(let T=0;T<2*(D-$)-1;T++){let R=Math.floor(T/2);T%2===0?(p(U[$][R+1]),p(U[$+1][R]),p(U[$][R])):(p(U[$][R+1]),p(U[$+1][R+1]),p(U[$+1][R]))}}function c(S){let v=new k;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(S),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function u(){let S=new k;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let A=y(S)/2/Math.PI+.5,F=g(S)/Math.PI+.5;a.push(A,1-F)}x(),m()}function m(){for(let S=0;S<a.length;S+=6){let v=a[S+0],A=a[S+2],F=a[S+4],D=Math.max(v,A,F),U=Math.min(v,A,F);D>.9&&U<.1&&(v<.2&&(a[S+0]+=1),A<.2&&(a[S+2]+=1),F<.2&&(a[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function f(S,v){let A=S*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function x(){let S=new k,v=new k,A=new k,F=new k,D=new ke,U=new ke,$=new ke;for(let T=0,R=0;T<r.length;T+=9,R+=6){S.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),A.set(r[T+6],r[T+7],r[T+8]),D.set(a[R+0],a[R+1]),U.set(a[R+2],a[R+3]),$.set(a[R+4],a[R+5]),F.copy(S).add(v).add(A).divideScalar(3);let K=y(F);M(D,R+0,S,K),M(U,R+2,v,K),M($,R+4,A,K)}}function M(S,v,A,F){F<0&&S.x===1&&(a[v]=S.x-1),A.x===0&&A.z===0&&(a[v]=F/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},$o=class i extends Yo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Yr=class extends qr{constructor(e){super(e),this.uuid=Kr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new qr().fromJSON(s))}return this}},e_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Jd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,m,p,f;if(n&&(r=r_(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let x=t;x<s;x+=t)m=i[x],p=i[x+1],m<o&&(o=m),p<l&&(l=p),m>c&&(c=m),p>u&&(u=p);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Aa(r,a,t,o,l,f,0),a}};function Jd(i,e,t,n,s){let r,a;if(s===g_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Sd(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Sd(r,i[r],i[r+1],a);return a&&il(a,a.next)&&(Ca(a),a=a.next),a}function ir(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(il(t,t.next)||Rn(t.prev,t,t.next)===0)){if(Ca(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Aa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&h_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?n_(i,n,s,r):t_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ca(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=i_(ir(i),e,t),Aa(i,e,t,n,s,r,2)):a===2&&s_(i,e,t,n,s,r):Aa(ir(i),e,t,n,s,r,1);break}}}function t_(i){let e=i.prev,t=i,n=i.next;if(Rn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,m=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=p&&x.y>=m&&x.y<=f&&Fr(s,o,r,l,a,c,x.x,x.y)&&Rn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function n_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Rn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,m=r.y,p=a.y,f=o<l?o<c?o:c:l<c?l:c,x=u<m?u<p?u:p:m<p?m:p,M=o>l?o>c?o:c:l>c?l:c,y=u>m?u>p?u:p:m>p?m:p,g=zc(f,x,e,t,n),S=zc(M,y,e,t,n),v=i.prevZ,A=i.nextZ;for(;v&&v.z>=g&&A&&A.z<=S;){if(v.x>=f&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Fr(o,u,l,m,c,p,v.x,v.y)&&Rn(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=f&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Fr(o,u,l,m,c,p,A.x,A.y)&&Rn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Fr(o,u,l,m,c,p,v.x,v.y)&&Rn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=S;){if(A.x>=f&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Fr(o,u,l,m,c,p,A.x,A.y)&&Rn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function i_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!il(s,r)&&jd(s,n,n.next,r)&&Ra(s,r)&&Ra(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ca(n),Ca(n.next),n=i=r),n=n.next}while(n!==i);return ir(n)}function s_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&f_(a,o)){let l=Qd(a,o);a=ir(a,a.next),l=ir(l,l.next),Aa(a,e,t,n,s,r,0),Aa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function r_(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Jd(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(d_(c));for(s.sort(a_),r=0;r<s.length;r++)t=o_(s[r],t);return t}function a_(i,e){return i.x-e.x}function o_(i,e){let t=l_(i,e);if(!t)return e;let n=Qd(t,i);return ir(n,n.next),ir(t,t.next)}function l_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,m;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Fr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(m=Math.abs(a-t.y)/(r-t.x),Ra(t,i)&&(m<u||m===u&&(t.x>s.x||t.x===s.x&&c_(s,t)))&&(s=t,u=m)),t=t.next;while(t!==o);return s}function c_(i,e){return Rn(i.prev,i,e.prev)<0&&Rn(e.next,i,i.next)<0}function h_(i,e,t,n){let s=i;do s.z===0&&(s.z=zc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,u_(s)}function u_(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function zc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function d_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function f_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!p_(i,e)&&(Ra(i,e)&&Ra(e,i)&&m_(i,e)&&(Rn(i.prev,i,e.prev)||Rn(i,e.prev,e))||il(i,e)&&Rn(i.prev,i,i.next)>0&&Rn(e.prev,e,e.next)>0)}function Rn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function il(i,e){return i.x===e.x&&i.y===e.y}function jd(i,e,t,n){let s=xo(Rn(i,e,t)),r=xo(Rn(i,e,n)),a=xo(Rn(t,n,i)),o=xo(Rn(t,n,e));return!!(s!==r&&a!==o||s===0&&yo(i,t,e)||r===0&&yo(i,n,e)||a===0&&yo(t,i,n)||o===0&&yo(t,e,n))}function yo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xo(i){return i>0?1:i<0?-1:0}function p_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ra(i,e){return Rn(i.prev,i,i.next)<0?Rn(i,e,i.next)>=0&&Rn(i,i.prev,e)>=0:Rn(i,e,i.prev)<0||Rn(i,i.next,e)<0}function m_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qd(i,e){let t=new Vc(i.i,i.x,i.y),n=new Vc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sd(i,e,t,n){let s=new Vc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ca(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function g_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ya=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ed(e),Td(n,e);let a=e.length;t.forEach(Ed);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Td(n,t[l]);let o=e_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ed(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Td(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ko=class i extends Yo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Pa=class i extends yi{constructor(e=new Yr([new ke(0,.5),new ke(-.5,-.5),new ke(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Cn(s,3)),this.setAttribute("normal",new Cn(r,3)),this.setAttribute("uv",new Cn(a,2));function c(u){let m=s.length/3,p=u.extractPoints(t),f=p.shape,x=p.holes;ya.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,g=x.length;y<g;y++){let S=x[y];ya.isClockWise(S)===!0&&(x[y]=S.reverse())}let M=ya.triangulateShape(f,x);for(let y=0,g=x.length;y<g;y++){let S=x[y];f=f.concat(S)}for(let y=0,g=f.length;y<g;y++){let S=f[y];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let y=0,g=M.length;y<g;y++){let S=M[y],v=S[0]+m,A=S[1]+m,F=S[2]+m;n.push(v,A,F),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return y_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function y_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var es=class i extends yi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],m=new k,p=new k,f=[],x=[],M=[],y=[];for(let g=0;g<=n;g++){let S=[],v=g/n,A=0;g===0&&a===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let F=0;F<=t;F++){let D=F/t;m.x=-e*Math.cos(s+D*r)*Math.sin(a+v*o),m.y=e*Math.cos(a+v*o),m.z=e*Math.sin(s+D*r)*Math.sin(a+v*o),x.push(m.x,m.y,m.z),p.copy(m).normalize(),M.push(p.x,p.y,p.z),y.push(D+A,1-v),S.push(c++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let v=u[g][S+1],A=u[g][S],F=u[g+1][S],D=u[g+1][S+1];(g!==0||a>0)&&f.push(v,A,D),(g!==n-1||l<Math.PI)&&f.push(A,F,D)}this.setIndex(f),this.setAttribute("position",new Cn(x,3)),this.setAttribute("normal",new Cn(M,3)),this.setAttribute("uv",new Cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jn=class extends Ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hd,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function _o(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function x_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $r=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gc=class extends $r{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Au:r=e,o=2*t-n;break;case Ru:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Au:a=e,l=2*n-t;break;case Ru:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,p=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),M=x*x,y=M*x,g=-p*y+2*p*M-p*x,S=(1+p)*y+(-1.5-2*p)*M+(-.5+p)*x+1,v=(-1-f)*y+(1.5+f)*M+.5*x,A=f*y-f*M;for(let F=0;F!==o;++F)r[F]=g*a[u+F]+S*a[c+F]+v*a[l+F]+A*a[m+F];return r}},Wc=class extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),m=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*m+a[l+p]*u;return r}},Xc=class extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case bo:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&x_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,p=m-n,f=m+n;for(let x=0;x!==n;++x){let M=t[m+x];if(M!==t[p+x]||M!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[m+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Yi.prototype.TimeBufferType=Float32Array;Yi.prototype.ValueBufferType=Float32Array;Yi.prototype.DefaultInterpolation=bo;var sr=class extends Yi{};sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Mo;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends Yi{};qc.prototype.ValueTypeName="color";var Yc=class extends Yi{};Yc.prototype.ValueTypeName="number";var $c=class extends $r{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Us.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ia=class extends Yi{InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.DefaultInterpolation=bo;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var rr=class extends Yi{};rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Mo;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends Yi{};Kc.prototype.ValueTypeName="vector";var Zc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,p=c.length;m<p;m+=2){let f=c[m],x=c[m+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null}}},__=new Zc,Jc=class{constructor(e){this.manager=e!==void 0?e:__,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zo=class extends di{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var hc=new Hn,wd=new k,Ad=new k,jc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Jn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;wd.setFromMatrixPosition(e.matrixWorld),t.position.copy(wd),Ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ad),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Qc=class extends jc{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jo=class extends Zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(di.DEFAULT_UP),this.updateMatrix(),this.target=new di,this.shadow=new Qc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jo=class extends Zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var lh="\\[\\]\\.:\\/",v_=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",M_="[^"+lh.replace("\\.","")+"]",b_=/((?:WC+[\/:])*)/.source.replace("WC",ch),S_=/(WCOD+)?/.source.replace("WCOD",M_),E_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),T_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),w_=new RegExp("^"+b_+S_+E_+T_+"$"),A_=["material","materials","bones","map"],eh=class{constructor(e,t,n){let s=n||bn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v_,"")}static parseTrackName(e){let t=w_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);A_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bn.Composite=eh;bn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bn.prototype.GetterByBindingType=[bn.prototype._getValue_direct,bn.prototype._getValue_array,bn.prototype._getValue_arrayElement,bn.prototype._getValue_toArray];bn.prototype.SetterByBindingTypeAndVersioning=[[bn.prototype._setValue_direct,bn.prototype._setValue_direct_setNeedsUpdate,bn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_array,bn.prototype._setValue_array_setNeedsUpdate,bn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_arrayElement,bn.prototype._setValue_arrayElement_setNeedsUpdate,bn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_fromArray,bn.prototype._setValue_fromArray_setNeedsUpdate,bn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V_=new Float32Array(1);var Qo=class{constructor(e,t,n=0,s=1/0){this.ray=new Ma(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return th(e,this,n,t),n.sort(Rd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)th(e[s],this,n,t);return n.sort(Rd),n}};function Rd(i,e){return i.distance-e.distance}function th(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)th(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);var hh=35,uh=25,dh=.29,xt=.95,ei=.35,ms=200,Ti=7,Fs=300,gs=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function C_(i){let e=typeof i=="string"?P_(i):i>>>0;return function(){e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t=(t^t>>>7)>>>0,t/4294967296}}function P_(i){let e=0;for(let t=0;t<i.length;t++)e=Math.imul(31,e)+i.charCodeAt(t),e=e>>>0;return e}var I_=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],af=[],sl={tank:["knight","berserker","werewolf","ghoul"],melee:["samurai","assassin","ninja","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["ranger","hunter","alchemist"],caster:["mage","witch","vampire","necromancer"]},La={tank:2,melee:2,support:1,ranged:1,caster:1};function L_(i){let e=Math.max(1,i),t=Object.keys(La),n=t.reduce((l,c)=>l+(La[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(La[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(La[c]??0)-(La[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var je={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},wi=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist","vampire","necromancer"];af=[...wi];function D_(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Zt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:6,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5},vampire:{name:"Vampire",gender:"female",hp:18,maxHp:18,mp:15,maxMp:15,str:11,agi:12,vit:3,dex:4,luk:3,int:9,range:1},necromancer:{name:"Necromancer",gender:"male",hp:20,maxHp:20,mp:19,maxMp:19,str:5,agi:4,vit:7,dex:3,luk:11,int:15,range:1}},Bs={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331},vampire:{primary:16704468,secondary:16704468,hair:1250066,cape:1250066,apron:1250066},necromancer:{primary:405028,secondary:405028,hair:7434350,cape:405028,belt:11372065}},Jr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp",vampire:"https://files.idyllic.app/files/static/2567599?width=256&optimizer=image",necromancer:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k"},ts=wi.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function U_(i,e){gs&&(wi.includes(i)&&ts[i]&&ts[i].kills++,wi.includes(e)&&ts[e]&&ts[e].deaths++)}function N_(i,e){if(!gs)return;for(let n of i)!n||!ts[n.class]||(ts[n.class].battles++,e!=null&&(n.player===e?ts[n.class].wins++:ts[n.class].losses++));let t=wi.map(n=>{let s=ts[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var jr={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:7,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain",type:"spell"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:5,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:5,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex",type:"spell"},{name:"Drain",description:"Deal INT-based damage to HP and MP and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement",type:"spell"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 3 turns.",cost:5,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}],vampire:[{name:"Gaze",description:"Reduce target's AGI and VIT by 1 for 3 turns",cost:5,target:"enemy",range:4,level:2,effectKey:"gaze",type:"spell"},{name:"Blood Suck",description:"Absorb enemy HP based on your MP",cost:7,target:"enemy",range:1,level:3,effectKey:"bloodSuck"}],necromancer:[{name:"Debilitate",description:"Reduce target's HP and VIT by 2 for 2 turns",cost:5,target:"enemy",range:5,level:1,effectKey:"debilitate",type:"spell"},{name:"Reanimate",description:"Resurrect dead unit to your control",cost:10,target:"self",range:0,level:2,effectKey:"reanimate"}]};function Re(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function Oi(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0,r=String(t);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}function Da(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,f=>f.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,f=>f.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",u=null,m=(f,x,M,y)=>{if(M)f.hp=Math.min(f.maxHp,f.hp+x),n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,`+${x}`,!1,"heal");else{let g=f===s,S=!0;if(!g&&!y){let v=Re(f,"agi")*.7+Re(f,"luk")*.3;S=Math.random()*Math.max(.001,v)<=Re(s,"dex")}return S?(f.hp=Math.max(0,f.hp-x),f!==s&&(u=x),n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,String(x),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(f),f.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(f,s)):n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,"MISS",!0),S}},p=(f,x,M,y)=>{n.showFloatingCombatText&&n.showFloatingCombatText(f,x,M,!1,y?"buff":"debuff")};switch(i){case"brave":s.tempBuff={vit:3,duration:3},p(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let f=2,x=1;r.str=Math.max(1,(r.str||0)-f),s.str=(s.str||0)+f,r.vit=Math.max(1,(r.vit||0)-x),s.vit=(s.vit||0)+x,p(r.x,r.y,`-${f} STR and -${x} VIT`,!1),p(s.x,s.y,`+${f} STR and +${x} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let f=Math.max(1,Math.ceil(Re(s,"int")-(Re(r,"int")*.7+Re(r,"luk")*.2)));m(r,f,!1,!0)}break;case"manaDrain":if(r){let f=Math.max(1,Math.floor(Re(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-f),s.mp=(s.mp||0)+f,p(r.x,r.y,`-${f} MP`,!1),p(s.x,s.y,`+${f} MP`,!0)}break;case"mantra":if(r){let f=Math.max(1,Math.floor(Re(s,"int")*.3));s.tempBuff={int:f,duration:3},p(s.x,s.y,`+${f} LUK`,!0),r.tempBuff={luk:f,duration:3},p(r.x,r.y,`+${f} LUK`,!0)}break;case"chakra":{if(m(s,Math.max(1,Math.floor(Re(s,"int")*.3+Re(s,"luk")*.15)),!0),!r)break;m(r,Math.max(1,Math.floor(Re(s,"int")*.3+Re(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let f=1;r.vit=Math.max(1,(r.vit||0)-f),s.vit=(s.vit||0)+f,p(r.x,r.y,`-${f} VIT`,!1),p(s.x,s.y,`+${f} VIT`,!0)}break;case"feast":{if(!r)break;let f=Math.max(1,Math.floor(Re(s,"str")*.7-(Re(r,"vit")*.3+Re(r,"luk")*.2)));m(r,f,!1)&&m(s,f,!0)}break;case"impale":{if(!r)break;let f=2;r.tempDebuff={agi:f,duration:3},p(r.x,r.y,`-${f} AGI`,!1)}break;case"pierce":{if(!r)break;let f=Math.max(1,Math.floor(Re(s,"str")*.6));m(r,f,!1)}break;case"focus":s.tempBuff={dex:3,duration:3},p(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let f=Math.max(1,Math.floor(Re(s,"dex")*.7-(Re(r,"vit")*.3+Re(r,"luk")*.2)));m(r,f,!1)}break;case"cripple":{if(!r)break;let f=1;r.agi=Math.max(1,(r.agi||0)-f),s.agi=(s.agi||0)+f,p(r.x,r.y,`-${f} AGI`,!1),p(s.x,s.y,`+${f} AGI`,!0)}break;case"execute":if(r){let f=Math.max(1,Math.floor(Re(s,"agi")*.8-(Re(r,"vit")*.3+Re(r,"luk")*.2)));m(r,f,!1)}break;case"berserk":r&&(m(r,Math.max(1,Math.floor(Re(s,"str")*.8-Re(r,"vit")*.3+Re(r,"luk")*.2)),!1),m(s,3,!1));break;case"bloodlust":{let f=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff={str:f,vit:f,duration:2},p(s.x,s.y,`+${f} STR, +${f} VIT`,!0)}break;case"hex":{if(!r)break;let f=1;r.int=Math.max(1,(r.int||0)-f),s.int=(s.int||0)+f,p(r.x,r.y,`-${f} INT`,!1),p(s.x,s.y,`+${f} INT`,!0)}break;case"drain":{if(!r)break;let f=Math.max(1,Math.ceil(Re(s,"int")*.6-(Re(r,"int")*.4+Re(r,"luk")*.2))),x=Math.max(1,Math.ceil(Re(s,"int")*.2-(Re(r,"int")*.4+Re(r,"luk")*.2)));m(r,f,!1,!0),m(s,x,!0),p(r.x,r.y,`-${x} MP`,!1),p(s.x,s.y,`+${x} MP`,!0)}break;case"blind":{if(!r)break;let f=1;r.dex=Math.max(1,(r.dex||0)-f),s.dex=(s.dex||0)+f,p(r.x,r.y,`-${f} DEX`,!1),p(s.x,s.y,`+${f} DEX`,!0)}break;case"shuriken":{if(!r)break;let f=Math.max(1,Math.floor(Re(s,"dex")*.7-(Re(r,"vit")*.3+Re(r,"luk")*.2)));m(r,f,!1)}break;case"iaido":s.tempBuff={str:1,dex:1,duration:3},p(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let f=Math.max(1,Math.floor(Re(s,"str")*.4+Re(s,"dex")*.4-(Re(r,"vit")*.3+Re(r,"luk")*.2)));m(r,f,!1)}break;case"bite":{if(!r)break;let f=Math.max(1,Math.floor(Re(s,"str")*.7+Re(s,"agi")*.1-(Re(r,"vit")*.3+Re(r,"luk")*.2)));m(r,f,!1)}break;case"howl":s.tempBuff={str:2,agi:2,duration:3},p(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let f=Math.max(1,Math.floor(Re(s,"int")*.5));m(r,f,!0),m(s,3,!1)}break;case"judgement":{if(!r)break;let f=Math.max(1,Math.floor(s.maxHp-s.hp-(Re(r,"int")*.2+Re(r,"luk")*.1)));m(r,f,!1,!0)}break;case"sanctuary":s.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},r.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),p(s.x,s.y,"+1 ALL STATS",!0),p(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let f=Math.max(1,Math.floor(r.maxHp-r.hp-(Re(r,"int")*.2+Re(r,"luk")*.1)));m(r,f,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,p(r.x,r.y,"-2 LUK",!1),p(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let f=Math.max(1,Math.floor(Re(s,"luk")*.8-(Re(r,"vit")*.3+Re(r,"luk")*.2)));m(r,f,!1)}break;case"windWalk":s.tempBuff={dex:1,agi:3,duration:3},p(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let f=Math.max(1,Math.floor(Re(s,"dex")*.6-(Re(r,"vit")*.3+Re(r,"luk")*.2)));if(m(r,f,!1)&&n.world&&n.units&&n.updateUnitPosition){let M=Math.max(1,Math.floor(f*.2)),y=B_(n.world,n.units,s,r,M),g=r.x,S=r.y;r.x=y.newGx,r.y=y.newGy,y.collisionDamage>0?(console.log("[KNOCKBACK]",`${y.collisionDamage} dmg to ${r.name}`),n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),m(r,y.collisionDamage,!1),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)):n.animateKnockback?n.animateKnockback(r,g,S,y.newGx,y.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r))}}break;case"forge":s.tempBuff={str:2,duration:3},r.tempBuff={str:2,duration:3},p(s.x,s.y,"+2 STR",!0),p(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff={str:3,vit:3,duration:3},r.tempBuff={str:3,vit:3,duration:3},p(s.x,s.y,"+3 STR, +3 VIT",!0),p(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let f=Math.max(1,Math.floor(Re(r,"luk")*.3));r.tempDebuff={poison:f,duration:3},p(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let f=Math.max(1,Math.floor(Re(s,"int")*.8-(Re(r,"int")*.4+Re(r,"luk")*.2)));m(r,f,!1,!0);let x=Math.max(1,Math.floor(f*.5));s.luk=Math.max(1,(s.luk||0)+x),p(s.x,s.y,`+${x} LUK`,!0)}break;case"gaze":{if(!r)break;let f=1;r.tempDebuff={agi:f,vit:f,duration:4},p(r.x,r.y,`-${f} AGI, -${f} VIT`,!1)}break;case"bloodSuck":{if(!r)break;let f=Math.max(1,Math.floor(s.mp*.6+Re(s,"int")*.6-(r.hp*.2+Re(r,"luk")*.1)));m(r,f,!1,!0)&&m(s,f,!0),p(r.x,r.y,`-${f} HP`,!1),p(s.x,s.y,`+${f} HP`,!0)}break;case"debilitate":{if(!r)break;let f=2;r.tempDebuff={hp:f,vit:f,duration:3},p(r.x,r.y,`-${f} HP, -${f} VIT`,!1)}break;case"reanimate":{if(!n.units||!n.reanimateDeadUnit)break;let f=n.units.filter(y=>y.hp<=0);if(f.length===0)break;let x=f.filter(y=>y.player===s.player),M=x.length>0?x.reduce((y,g)=>{let S=Math.abs(y.x-s.x)+Math.abs(y.y-s.y);return Math.abs(g.x-s.x)+Math.abs(g.y-s.y)<S?g:y}):f.reduce((y,g)=>{let S=Math.abs(y.x-s.x)+Math.abs(y.y-s.y);return Math.abs(g.x-s.x)+Math.abs(g.y-s.y)<S?g:y});n.reanimateDeadUnit(s,M)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,u!=null?`| ${u} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function ef(i){let e=hh,t=uh,n=Array.from({length:t},()=>Array(e).fill(!1)),s=Array.from({length:t},()=>Array(e).fill(0)),r=Array.from({length:t},()=>Array(e).fill(je.GRASS)),a=i!=null?C_(i):()=>Math.random(),o=Math.floor(e/2),l=Math.floor(t/2),c=o,u=0,m=o,p=t-1,f=2,x=3;function M(z,V,Z,ae){let oe=ae;for(let ue=V;ue<=Z;ue++)if(!(ue<0||ue>=t))for(let we=-f;we<=f;we++){let j=oe+we;j<0||j>=e||(n[ue][j]=!0,r[ue][j]=z,s[ue][j]=1)}}M(je.BASE_TOP,u,u+x-1,c),M(je.BASE_BOTTOM,p-x+1,p,m),M(je.CENTER,l-1,l+1,o);let y=new Set,g=(z,V)=>Math.abs(z-o)<=2&&Math.abs(V-l)<=1,S=(z,V)=>{z<0||z>=e||V<0||V>=t||g(z,V)||y.add(V*e+z)},v=Math.floor(e/2),A=Math.floor(t/2),F=Math.min(e,t)*dh,D=Math.max(60,(t+e)*2);for(let z=0;z<2;z++){let V=z===0?v-F:v+F,Z=z===0?Math.PI/2:-Math.PI/2,ae=z===0?Math.PI*3/2:Math.PI/2;for(let oe=0;oe<=D;oe++){let ue=oe/D,we=Z+ue*(ae-Z),j=V+F*Math.cos(we),de=A+F*Math.sin(we),Te=Math.round(j),Be=Math.round(de);S(Te,Be),S(Te+1,Be),S(Te-1,Be),S(Te,Be+1),S(Te,Be-1)}}let U=[[0,1],[0,-1],[1,0],[-1,0]];for(let z=0;z<1;z++){let V=[];y.forEach(Z=>{let ae=Z%e,oe=Z/e|0;for(let[ue,we]of U){let j=ae+ue,de=oe+we;if(j<0||j>=e||de<0||de>=t)continue;let Te=de*e+j;y.has(Te)||V.push(Te)}}),V.forEach(Z=>y.add(Z))}y.forEach(z=>{let V=z%e,Z=z/e|0;r[Z][V]===je.BASE_TOP||r[Z][V]===je.BASE_BOTTOM||r[Z][V]===je.CENTER||(n[Z][V]=!0,r[Z][V]=je.PATH,s[Z][V]=1)});let $=Math.round(v-F*1.6),T=Math.round(v+F*1.6),R=Math.round(v-F),K=Math.round(v+F),ce=1;for(let z=l-ce;z<=l+ce;z++)if(!(z<0||z>=t))for(let V=$;V<=T;V++)V<0||V>=e||(n[z][V]=!0,r[z][V]!==je.CENTER&&r[z][V]!==je.BASE_TOP&&r[z][V]!==je.BASE_BOTTOM&&(r[z][V]=je.PATH),s[z][V]=Math.max(s[z][V],1));function Me(z,V,Z,ae){let oe=Math.max(1,Math.min(z,V)),ue=Math.min(t-2,Math.max(z,V)),we=Math.max(1,Math.min(Z,ae)),j=Math.min(e-2,Math.max(Z,ae));for(let de=oe;de<=ue;de++)for(let Te=we;Te<=j;Te++)r[de][Te]===je.BASE_TOP||r[de][Te]===je.BASE_BOTTOM||r[de][Te]===je.CENTER||(n[de][Te]=!0,r[de][Te]=je.PATH,s[de][Te]=1)}let B=3,Y=3;Me(u,u+B-1,R,c-1),Me(u,u+B-1,c+1,K),Me(p-Y+1,p,R,m-1),Me(p-Y+1,p,m+1,K),M(je.BASE_TOP,u,u+x-1,c),M(je.BASE_BOTTOM,p-x+1,p,m),M(je.CENTER,l-1,l+1,o);for(let z=0;z<t;z++)for(let V=0;V<e;V++){if(n[z][V]||r[z][V]===je.BASE_TOP||r[z][V]===je.BASE_BOTTOM||r[z][V]===je.CENTER)continue;let Z=Math.abs(V-c)<=4&&Math.abs(z-u)<=3,ae=Math.abs(V-m)<=4&&Math.abs(z-p)<=3,oe=Z||ae,ue=a();ue<.55&&!oe?(r[z][V]=je.TREE,s[z][V]=1+Math.floor(a()*2)):ue<.75||oe&&ue<.5?(r[z][V]=je.WATER,s[z][V]=0):(r[z][V]=je.ROCK,s[z][V]=1+Math.floor(a()*2))}return{w:e,h:t,path:n,height:s,type:r,topBaseX:c,topBaseY:u,botBaseX:m,botBaseY:p}}function O_(i,e,t){let n=e===1?je.BASE_BOTTOM:je.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function F_(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===je.CENTER&&e.push({gx:n,gy:t});return e}function tf(i,e){let t=F_(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function or(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===je.TREE||n===je.WATER||n===je.ROCK)}function B_(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,u=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&u===0)return{newGx:r,newGy:a,collisionDamage:0};let m=0;for(let p=0;p<s;p++){let f=r+c,x=a+u,M=f<0||f>=i.w||x<0||x>=i.h,y=!or(i,f,x),g=e.some(S=>S.hp>0&&S.id!==n.id&&S.x===f&&S.y===x);if(M||y||g){let S=Math.max(1,m*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:S}}r=f,a=x,m++}return{newGx:r,newGy:a,collisionDamage:0}}function k_(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),u=Math.abs(l-a),m=r<o?1:-1,p=a<l?1:-1,f=c-u;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*f;x>-u&&(f-=u,r+=m),x<c&&(f+=c,a+=p)}return s}function ar(i,e,t,n,s){let r=k_(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!or(i,o.x,o.y))return!1}return!0}function rl(i,e,t,n,s,r){let a=(p,f)=>f*i.w+p,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],u=s!=null&&r!=null,m=u?new Set(s.filter(p=>p.hp>0&&p.player!==r.player).map(p=>p.y*i.w+p.x)):null;for(;l.length;){let{x:p,y:f,d:x}=l.shift();if(!(x>=n))for(let[M,y]of c){let g=p+M,S=f+y;if(!or(i,g,S)||u&&m.has(a(g,S)))continue;let v=a(g,S);if(o.has(v))continue;let A=x+1;o.set(v,A),l.push({x:g,y:S,d:A})}}return o}function nf(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let c=o;c<=l;c++)for(let u=r;u<=a;u++){let m=Math.abs(u-e)+Math.abs(c-t);m>=1&&m<=n&&s.set(c*i.w+u,m)}return s}function ks(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(f,x)=>x*i.w+f,l=new Set(r.filter(f=>f.hp>0&&f.player!==a.player).map(f=>f.y*i.w+f.x)),c=new Map,u=[{x:e,y:t}];c.set(o(e,t),null);let m=[[0,1],[0,-1],[1,0],[-1,0]];function p(f,x){return or(i,f,x)?!l.has(o(f,x)):!1}for(;u.length;){let{x:f,y:x}=u.shift();if(f===n&&x===s){let M=[],y={x:n,y:s};for(;y;)M.unshift(y),y=c.get(o(y.x,y.y));return M}for(let[M,y]of m){let g=f+M,S=x+y,v=o(g,S);c.has(v)||p(g,S)&&(c.set(v,{x:f,y:x}),u.push({x:g,y:S}))}}return null}var sf={[je.PATH]:2976557,[je.GRASS]:2968109,[je.TREE]:1719578,[je.WATER]:1989278,[je.ROCK]:4872778,[je.BASE_TOP]:8014410,[je.BASE_BOTTOM]:4872826,[je.CENTER]:13940810};function fh(i){return i.w*xt/2}function ph(i){return i.h*xt/2}function of(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new Vo(e);return r.wrapS=r.wrapT=xa,r.repeat.set(4,4),r.needsUpdate=!0,r}function rf(i){let e=new Ei,t=fh(i),n=ph(i),s=new Gn(xt,ei,xt),r=of(64),a=.88,o=.02,l=[];function c(p,f,x,M,y){let g=new jn({color:3828266,roughness:.9});g.bumpMap=r,g.bumpScale=.12;for(let S=0;S<M;S++){let v=.08+Math.random()*y,A=.03+Math.random()*.03,F=new Ye(new Os(A*.5,A,v,6),g);F.position.set(p+(Math.random()-.5)*.5,x+v/2,f+(Math.random()-.5)*.5),F.rotation.x=(Math.random()-.5)*.2,F.rotation.z=(Math.random()-.5)*.2,F.castShadow=!0,e.add(F)}}let u=.12;function m(p,f,x,M){let y=x+.02,g=[[p-u,y,f-u],[p+u,y,f+u],[p-u,y,f+u],[p+u,y,f-u],[p-u+.06,y,f-u+.06],[p+u-.06,y,f+u-.06],[p-u+.06,y,f+u-.06],[p+u-.06,y,f-u+.06]],S=new Float32Array(g.length*3);g.forEach((D,U)=>{S[U*3]=D[0],S[U*3+1]=D[1],S[U*3+2]=D[2]});let v=new yi;v.setAttribute("position",new gi(S,3)),v.computeBoundingSphere();let A=new Ta({color:855309,linewidth:1}),F=new zo(v,A);M.add(F)}for(let p=0;p<i.h;p++)for(let f=0;f<i.w;f++){let x=i.type[p][f],M=i.height[p][f],y=sf[x],g=ei+M*.35,S=g/2+ei/2,v=new jn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),A=(y>>16&255)/255,F=(y>>8&255)/255,D=(y&255)/255,U=A,$=F,T=D;if(x===je.PATH||x===je.TREE||x===je.ROCK){let V=Math.random()*.45;U=A*(1-V)+.42*V,$=F*(1-V)+.26*V,T=D*(1-V)+.14*V}(x===je.TREE||x===je.ROCK)&&(U*=.5,$*=.5,T*=.5);let R=1+(Math.random()-.5)*.12;v.color.setRGB(Math.min(1,U*R),Math.min(1,$*R),Math.min(1,T*R)),v.bumpMap=r,v.bumpScale=.12;let K=new Ye(s,v);K.position.set(f*xt-t+xt/2,g/2,p*xt-n+xt/2),K.castShadow=!0,K.receiveShadow=!0,K.userData={gx:f,gy:p,type:x},e.add(K);let ce=f*xt-t+xt/2,Me=p*xt-n+xt/2;if(x===je.TREE&&m(ce,Me,S,e),x===je.TREE){let B=new Ei;B.position.set(ce,S,Me);let Y=f===0||f===i.w-1||p===0||p===i.h-1,z=Y?.75+Math.random()*.35:.5+Math.random()*.2,V=new vt(4007959),Z=()=>1+(Math.random()-.5)*.4;V.r=Math.min(1,Math.max(0,V.r*Z())),V.g=Math.min(1,Math.max(0,V.g*Z())),V.b=Math.min(1,Math.max(0,V.b*Z()));let ae=.85+Math.random()*.2,oe=new jn({color:V,roughness:ae});oe.bumpMap=r,oe.bumpScale=.1+Math.random()*.12;let ue=new Ye(new Os(.12,.14,z,8),oe);ue.position.set(0,z/2,0),ue.castShadow=!0,ue.raycast=function(){},B.add(ue);let we=r.clone();we.repeat.set(3,3);let j=new vt(2972205),de=()=>1+(Math.random()-.5)*.44;j.r=Math.min(1,Math.max(0,j.r*de())),j.g=Math.min(1,Math.max(0,j.g*de())),j.b=Math.min(1,Math.max(0,j.b*de()));let Te=.78+Math.random()*.24,Be=new jn({color:j,roughness:Te});Be.bumpMap=we,Be.bumpScale=.16+Math.random()*.14;let qe=Y?.52:.45,ft=Y?1.05:.9,yt=.12,Ke=ft*.5,le=ft*.45,J=ft*.4,Ge=new Ye(new qi(qe,Ke,8),Be);Ge.position.set(0,z+Ke/2,0),Ge.castShadow=!0,Ge.raycast=function(){},B.add(Ge);let We=new Ye(new qi(qe*.75,le,8),Be);We.position.set(0,z+Ke-yt+le/2,0),We.castShadow=!0,We.raycast=function(){},B.add(We);let Je=new Ye(new qi(qe*.5,J,8),Be);Je.position.set(0,z+Ke-yt+le-yt+J/2,0),Je.castShadow=!0,Je.raycast=function(){},B.add(Je),e.add(B),l.push(B)}else if(x===je.WATER){let B=sf[je.WATER],Y=(B>>16&255)/255,z=(B>>8&255)/255,V=(B&255)/255,Z=1+(Math.random()-.5)*.12,ae=new jn({color:new vt().setRGB(Math.min(1,Y*Z),Math.min(1,z*Z),Math.min(1,V*Z)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),oe=new Ye(new Qi(xt,xt),ae);oe.rotation.x=-Math.PI/2,oe.position.set(ce,S+.02,Me),oe.receiveShadow=!0,e.add(oe)}else if(x===je.ROCK){let B=new jn({color:6974058,roughness:.9});B.bumpMap=r,B.bumpScale=.2;let Y=(ae,oe,ue)=>{let we=new Ye(new $o(ae,0),B);we.position.set(ce+oe,S+ae-.2,Me+ue),we.rotation.set(Math.random(),Math.random(),Math.random()),we.castShadow=!0,e.add(we)},z=.32+Math.random()*.14,V=.2+Math.random()*.12,Z=.12+Math.random()*.12;Y(z,(Math.random()-.5)*.15,(Math.random()-.5)*.15),Y(V,(Math.random()-.5)*.25,(Math.random()-.5)*.25),Y(Z,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function H_(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=ef(),t=document.getElementById("canvas-wrap"),n=new Ho;n.background=new vt(1711652),n.fog=new ko(1711652,30,90);let s=e.w*xt/2,r=e.h*xt/2,a=new ui(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,c=new k(12,38,16).normalize().multiplyScalar(o),u=new k,m=new k,p=new Gi(new k(0,1,0),0),f=new k,x=new k,M=!1,y=!1,g=!0,S=!1,v=null,A=5,F=.004,D=-Math.PI*.4,U=Math.PI*.4,$=new k,T={x:0,y:0},R=!1,K=1,ce=40,Me=.005,B=.15,Y=1,z=null,V=new jo(16777215,.45);n.add(V);let Z=new Jo(16774630,1.1);Z.position.set(30,50,20),Z.castShadow=!0,Z.shadow.mapSize.width=2048,Z.shadow.mapSize.height=2048,Z.shadow.camera.near=1,Z.shadow.camera.far=120,Z.shadow.camera.left=-50,Z.shadow.camera.right=50,Z.shadow.camera.top=50,Z.shadow.camera.bottom=-50,n.add(Z);let ae=rf(e);n.add(ae);let oe=new Map,ue=new Ei;n.add(ue);let we={30:!1,20:!1,10:!1},j=["red","yellow","purple","blue","green"],de={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943},Te=.92;function Be(d,h,_){let I=(ei+e.height[_][h]*.35)/2+ei/2,P=new Qi(Te,Te),O=new Pn({color:d,transparent:!0,opacity:.45,side:An}),N=new Ye(P,O);return N.rotation.x=-Math.PI/2,N.position.set(h*xt-Je+xt/2,I+.01,_*xt-He+xt/2),N}function qe(d){let h=new Ko(.22,0),_=new jn({color:d,metalness:.3,roughness:.4}),b=new Ye(h,_);return b.rotation.x=Math.PI/4,b.castShadow=!0,b.receiveShadow=!0,b}function ft(){let d=Math.floor(e.h/2),h=[];for(let _=0;_<e.w;_++){let b=d;if(e.type[b][_]!==je.PATH||le.some(O=>O.hp>0&&O.x===_&&O.y===b))continue;let P=b*e.w+_;oe.has(P)||h.push({gx:_,gy:b})}return h}function yt(d){let h=ft();if(h.length===0)return;let _=h[Math.floor(Math.random()*h.length)],b=j[Math.floor(Math.random()*j.length)],I=_.gy*e.w+_.gx,P=de[b],O=Ze(_.gx,_.gy);O.y+=.35;let N=qe(P);N.position.copy(O),ue.add(N);let L=Be(P,_.gx,_.gy);ue.add(L),oe.set(I,{type:b,mesh:N,glowMesh:L}),console.log("[POWERUP]",`turnsLeft: ${d}, type: ${b}, gx: ${_.gx}, gy: ${_.gy}`)}function Ke(d){let h=d.y*e.w+d.x,_=oe.get(h);if(!_)return;let b=_.mesh;if(ue.remove(b),b.geometry.dispose(),b.material){let I=b.material;I.dispose&&I.dispose()}_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose()),oe.delete(h),_.type==="green"?(d.hp=Math.min(d.maxHp,d.hp+6),li(d.x,d.y,"+6 HP",!1,"buff")):(_.type==="red"?d.tempBuff={str:4,duration:3}:_.type==="yellow"?d.tempBuff={agi:4,duration:3}:_.type==="purple"?d.tempBuff={int:4,duration:3}:_.type==="blue"&&(d.tempBuff={dex:4,duration:3}),li(d.x,d.y,`+4 ${_.type==="red"?"STR":_.type==="yellow"?"AGI":_.type==="purple"?"INT":"DEX"}`,!1,"buff")),pt(d,()=>Ne(d))}let le=[],J=1,Ge=new Map,We=of(64),Je=fh(e),He=ph(e);function Ze(d,h){let b=(ei+e.height[h][d]*.35)/2+ei/2;return new k(d*xt-Je+xt/2,b,h*xt-He+xt/2)}function _t(d,h){d==="short"&&(hh=27,uh=15,dh=.35,ms=100),n.remove(ae),ae.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(I=>I.dispose())}),Ge.forEach(_=>{n.remove(_),_.traverse(b=>{b.geometry&&b.geometry.dispose(),b.material&&(Array.isArray(b.material)?b.material:[b.material]).forEach(P=>P.dispose())})}),Ge.clear(),le.length=0,J=1,oe.forEach(_=>{ue.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),oe.clear(),we={30:!1,20:!1,10:!1},e=ef(typeof h<"u"?h:void 0),Je=fh(e),He=ph(e),ae=rf(e),n.add(ae)}function C(){Ge.forEach(d=>{n.remove(d),d.traverse(h=>{h.geometry&&h.geometry.dispose(),h.material&&(Array.isArray(h.material)?h.material:[h.material]).forEach(b=>b.dispose())})}),Ge.clear(),le.length=0,J=1}function E(d,h){let _=(d>>16&255)/255,b=(d>>8&255)/255,I=(d&255)/255,P=1+(Math.random()-.5)*h;return new vt(Math.min(1,_*P),Math.min(1,b*P),Math.min(1,I*P))}let ne=.62;function _e(d,h){h=h??ne;let _=d instanceof vt?d:new vt(d);return new vt(Math.max(0,_.r*h),Math.max(0,_.g*h),Math.max(0,_.b*h))}function Se(d,h,_){let b=Bs[h]||Bs.knight,I=_e(E(b.primary,.08)),P=_e(E(b.secondary,.08)),O=Zt[h]&&Zt[h].gender||"male",N=_??4006676,L=_e(E(b.skin!=null?b.skin:15250592,.06)),X=_e(E(N,.08)),q=()=>(Math.random()-.5)*.08,fe=()=>(Math.random()-.5)*.04,G=new jn({color:I,metalness:Math.max(0,.25+fe()),roughness:Math.max(.3,Math.min(1,.5+q()))});G.bumpMap=We,G.bumpScale=.1;let ie=new jn({color:P,metalness:Math.max(0,.2+fe()),roughness:Math.max(.3,Math.min(1,.55+q()))});ie.bumpMap=We,ie.bumpScale=.1;let ye=new jn({color:I,metalness:Math.max(0,.25+fe()),roughness:Math.max(.3,Math.min(1,.5+q()))});ye.bumpMap=We,ye.bumpScale=.1;let xe=new jn({color:L,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+q()))});xe.bumpMap=We,xe.bumpScale=.05;let Pe=new Ei,Fe=.28,tt=.08,bt=.08,nt=new Ye(new Gn(tt,Fe,bt),ie);nt.position.set(-.06,Fe/2,0),nt.castShadow=!0,Pe.add(nt);let vn=new Ye(new Gn(tt,Fe,bt),ie);vn.position.set(.06,Fe/2,0),vn.castShadow=!0,Pe.add(vn);let $t=.28,Kt=.2,gn=.12,En=new Ye(new Gn(Kt,$t,gn),G);En.position.set(0,Fe+$t/2,0),En.castShadow=!0,Pe.add(En);let Ot=.06,rn=.22,Ht=.06,It=new Ye(new Gn(Ot,rn,Ht),ye);It.position.set(-(Kt/2+Ot/2),Fe+$t-.08,0),It.castShadow=!0,Pe.add(It);let qt=new Ye(new Gn(Ot,rn,Ht),ye);if(qt.position.set(Kt/2+Ot/2,Fe+$t-.08,0),qt.castShadow=!0,Pe.add(qt),b.cape!=null){let dt=Kt*1.95,Nt=dt*.6,se=Fe+$t*.28,ge=new Yr;ge.moveTo(-Nt/2,se/2),ge.lineTo(Nt/2,se/2),ge.lineTo(dt/2,-se/2),ge.lineTo(-dt/2,-se/2),ge.closePath();let pe=new Pa(ge),te=new jn({color:_e(E(b.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+q())),side:An});te.bumpMap=We,te.bumpScale=.12;let he=new Ye(pe,te);he.position.set(0,Fe+$t-se/2+.05,-gn/2-.02),he.rotation.y=Math.PI,he.castShadow=!0,Pe.add(he);let be=.055,me=Fe+$t+.02,Ae=.02,At=Kt/2+Ot*.5,Et=new Ye(new es(be,10,8,0,Math.PI*2,0,Math.PI*.55),te.clone());Et.position.set(-At,me,Ae),Et.rotation.x=-Math.PI*.35,Et.rotation.z=Math.PI*.5,Et.scale.set(1.2,.85,1.1),Et.castShadow=!0,Pe.add(Et);let Mn=new Ye(new es(be,10,8,0,Math.PI*2,0,Math.PI*.55),te.clone());Mn.position.set(At,me,Ae),Mn.rotation.x=-Math.PI*.35,Mn.rotation.z=-Math.PI*.5,Mn.scale.set(1.2,.85,1.1),Mn.castShadow=!0,Pe.add(Mn)}if(b.belt!=null){let dt=new jn({color:_e(E(b.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+q()))});dt.bumpMap=We,dt.bumpScale=.1;let Nt=.022,se=.04,ge=new Ye(new Gn(Kt+.04,Nt,gn+se),dt);ge.position.set(0,Fe+.04,0),ge.castShadow=!0,Pe.add(ge)}if(b.apron!=null){let dt=new jn({color:_e(E(b.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+q())),side:An});dt.bumpMap=We,dt.bumpScale=.12;let Nt=Kt*.95,se=Fe*.85,ge=new Ye(new Qi(Nt,se),dt),pe=Fe+.2;ge.position.set(0,pe-se/2,gn/2+.02),ge.castShadow=!0,Pe.add(ge);let te=Fe+$t+.02,he=Kt/2+Ot*.2,be=.018,me=.008,Ae=te-pe,At=new Ye(new Gn(be,Ae,me),dt.clone());At.position.set(-he,(pe+te)/2,gn/2+.015),At.castShadow=!0,Pe.add(At);let Et=new Ye(new Gn(be,Ae,me),dt.clone());Et.position.set(he,(pe+te)/2,gn/2+.015),Et.castShadow=!0,Pe.add(Et)}let ut=.1,St=new Ye(new es(ut,12,10),xe);St.position.set(0,Fe+$t+ut,0),St.castShadow=!0,Pe.add(St);let en=new Pn({color:1710638}),Tn=new Ye(new Gn(.032,.004,.004),en);Tn.position.set(-.032,.028,ut*.92),St.add(Tn);let wn=new Ye(new Gn(.032,.004,.004),en);wn.position.set(.032,.028,ut*.92),St.add(wn);let Vn=new Pn({color:2957087}),vi=new Ye(new Gn(.045,.012,.008),Vn);vi.position.set(0,-.028,ut*.92),St.add(vi);let un=new jn({color:X,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+q()))});un.bumpMap=We,un.bumpScale=.15;let Pi=dt=>{let Nt=ut*.32,se=ut*.22,ge=new Ye(new qi(se*.9,Nt,5),un);ge.position.set(-ut*.25,ut*.22,ut*.72),ge.rotation.x=.35,ge.rotation.z=.12,ge.castShadow=!0,dt.add(ge);let pe=new Ye(new qi(se,Nt,5),un);pe.position.set(ut*.28,ut*.18,ut*.68),pe.rotation.x=.28,pe.rotation.z=-.1,pe.castShadow=!0,dt.add(pe);let te=new Ye(new qi(se*.7,Nt*.9,5),un);te.position.set(0,ut*.28,ut*.78),te.rotation.x=.4,te.castShadow=!0,dt.add(te)};if(O==="female"){let dt=new Ye(new es(ut*.92,12,10,0,Math.PI*2,0,Math.PI*.52),un);dt.position.set(0,ut*.28,-ut*.18),dt.rotation.y=.06,dt.rotation.x=-.04,dt.castShadow=!0,St.add(dt);let Nt=new Ye(new Gn(ut*1.15,ut*2.2,ut*.55),un);Nt.position.set(0,-ut*.6,-ut*.95),Nt.rotation.z=.03,Nt.castShadow=!0,St.add(Nt),Pi(St)}else{let dt=new Ye(new es(ut*.9,12,10,0,Math.PI*2,0,Math.PI*.5),un);dt.position.set(0,ut*.4,-ut*.12),dt.rotation.y=.08,dt.rotation.x=-.05,dt.rotation.z=.04,dt.castShadow=!0,St.add(dt);let Nt=new Ye(new es(ut*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),un);Nt.position.set(0,ut*.1,-ut*.05),Nt.rotation.y=.1,Nt.castShadow=!0,St.add(Nt),Pi(St)}return Pe.userData.leftLeg=nt,Pe.userData.rightLeg=vn,Pe.userData.leftArm=It,Pe.userData.rightArm=qt,Pe}function Ee(d,h){let _=d.userData;if(!_.leftLeg)return;let b=h*Math.PI*2,I=.35,P=.28;_.leftLeg.rotation.x=Math.sin(b)*I,_.rightLeg.rotation.x=Math.sin(b+Math.PI)*I,_.leftArm.rotation.y=Math.sin(b+Math.PI)*P,_.rightArm.rotation.y=Math.sin(b)*P}function $e(d){let h=d.userData;h.leftLeg&&(h.leftLeg.rotation.x=0,h.rightLeg.rotation.x=0,h.leftArm.rotation.y=0,h.rightArm.rotation.y=0)}function Ue(d){let h=Se(d.player,d.class,d.hairColor);h.position.copy(Ze(d.x,d.y)),h.castShadow=!0,h.userData.unitId=d.id;let _=.28,b=.28,I=.12,P=.18,O=.04,N=new Qi(P,O),L=new Pn({color:6037528,side:An,depthTest:!0,depthWrite:!1}),X=new Ye(N,L);X.position.set(0,_+b/2,I/2+.02),X.rotation.x=-Math.PI/2,X.rotation.z=Math.PI/4,X.visible=d.maxHp>0&&d.hp<d.maxHp&&d.hp>0,h.add(X),h.userData.slashMark=X,n.add(h),Ge.set(d.id,h),ve(h,d.maxHp>0&&d.hp/d.maxHp<.35)}function Ne(d){let h=Ge.get(d.id);!h||!h.userData.slashMark||(h.userData.slashMark.visible=d.maxHp>0&&d.hp<d.maxHp&&d.hp>0)}function ot(d){d.traverse(_=>{if(!_.isMesh||!_.material)return;let b=_.material;if(b.color){let I=b.color.r,P=b.color.g,O=b.color.b,N=.2126*I+.7152*P+.0722*O,L=Math.max(0,Math.min(1,N*.55));b.color.setRGB(L,L,L)}})}let wt=.35;function ve(d,h){if(d)if(h){d.rotation.x=.35,d.scale.setScalar(.96);let _=d.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=.2,_.rightArm.rotation.y=.2),d.traverse(b=>{b.isMesh&&b.material&&b.material.color&&(b.userData.originalColor||(b.userData.originalColor=b.material.color.clone()),b.material.color.copy(b.userData.originalColor).multiplyScalar(.82))})}else{d.rotation.x=0,d.scale.setScalar(1);let _=d.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=0,_.rightArm.rotation.y=0),d.traverse(b=>{b.isMesh&&b.material&&b.userData.originalColor&&b.material.color.copy(b.userData.originalColor)})}}function Yt(d){if(d.level>=3)return;let h=d.maxHp>0?d.hp/d.maxHp:1;d.level+=1;let _=I=>Math.max(1,Math.ceil(I*1.1)),b=I=>Math.max(1,Math.ceil(I*1.1));d.maxHp=_(d.maxHp),d.maxMp=_(d.maxMp),d.hp=Math.max(1,Math.min(d.maxHp,Math.ceil(h*d.maxHp))),d.mp=Math.max(1,Math.min(d.maxMp,Math.ceil(h*d.maxMp))),d.str=b(d.str),d.agi=b(d.agi),d.vit=b(d.vit),d.dex=b(d.dex),d.luk=b(d.luk),d.int=b(d.int),d.range>2&&(d.range=b(d.range)),console.log("[LEVEL UP]",`${d.name} (${d.class}, P${d.player})`,`\u2192 Lv.${d.level}`,`| HP ${d.hp}/${d.maxHp} MP ${d.mp}/${d.maxMp} STR ${d.str} VIT ${d.vit}`),Dt(d)}function Dt(d){let h=Ge.get(d.id),_=d.level===3?"levelup level3":d.level===2?"levelup level2":"levelup";if(jf(d,_),!h)return;let b=performance.now(),I=0;function P(O){I++,I%2===0&&kt();let N=O-b,L=Math.min(1,N/H),X=L<.5?1+.35*(L/.5):1+.35*(1-(L-.5)/.5);h.scale.setScalar(X),L<1?requestAnimationFrame(P):h.scale.setScalar(1)}requestAnimationFrame(P)}function pt(d,h){let _=Ge.get(d.id);if(!_){h&&h();return}let b=performance.now(),I=0;function P(O){I++,I%2===0&&kt();let N=O-b,L=Math.min(1,N/H),X=L<.5?1+.35*(L/.5):1+.35*(1-(L-.5)/.5);_.scale.setScalar(X),L<1?requestAnimationFrame(P):(_.scale.setScalar(1),h&&h())}requestAnimationFrame(P)}let et=400,ze=280,Mt=.45,zt=160,fn=280,Ct=350,Ce=500,H=600,Le=400,De=280,at=.2,it=.18,Jt=!1,tn=new k,Ln=new k,On=new k,jt=new k;function qn(d=!1){g=!0;let h=null;if(_n==="playing"&&Xe.length>0){let O=Xe[gt];h=le.find(N=>N.id===O&&N.hp>0)}if(h||(h=le.find(O=>O.player===xn&&O.hp>0)),!h)return;let _=a.position.distanceTo(u);if(_<.1&&(_=o),m.copy(a.position).sub(u).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),On.copy(Ze(h.x,h.y)),jt.copy(On).add(m.clone().multiplyScalar(_)),d||Jt){u.copy(On),a.position.copy(jt),a.lookAt(u),kt();return}Jt=!0,tn.copy(u),Ln.copy(a.position);let b=performance.now(),I=0;$n.shadowMap.enabled=!1;function P(O){I++,I%2===0&&kt();let N=Math.min(1,(O-b)/et),L=N*(2-N);u.lerpVectors(tn,On,L),a.position.lerpVectors(Ln,jt,L),a.lookAt(u),N<1?requestAnimationFrame(P):($n.shadowMap.enabled=!0,Jt=!1)}requestAnimationFrame(P)}let zn=0,xn=1,_n="draft",mt="pvp",nn=1,fi={1:"",2:""},Ai=null,$i=null,ns=null,ys="long";function Dn(d){return mt==="online"&&fi[d]?fi[d]:"Player "+d}let w=1,W=0,Q=null;async function re(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{Q=await navigator.wakeLock.request("screen"),Q.addEventListener("release",()=>{Q=null})}catch{Q=null}}function ee(){Q&&(Q.release().catch(()=>{}),Q=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&mt==="cvcpu"&&_n==="playing"&&re()});let Oe="balanced",Ve=new Set(wi),st=[...wi],rt=0,Qe=null,ct=null,ht=new Set,Xe=[],gt=0,Ut=null,Qt=new Map,hn=null;function Pt(d){if(!d||d.hp<=0)return;hn=d.id;let h=document.getElementById("unit-preview-card"),_=document.getElementById("unit-preview-image"),b=document.getElementById("unit-preview-name"),I=document.getElementById("unit-preview-meta"),P=document.getElementById("unit-preview-stats");h.classList.remove("player-1","player-2"),h.classList.add(d.player===1?"player-1":"player-2"),h.classList.toggle("level-2",d.level>=2&&d.level<3),h.classList.toggle("level-3",d.level>=3),_.src=Jr[d.class]||"",_.alt=d.name,b.textContent=d.name,I.textContent=`Lv.${d.level} ${d.class} \u2014 ${Dn(d.player)}`;let O=[["HP",`${d.hp}/${d.maxHp}`,"stat-val-hp"],["MP",`${d.mp}/${d.maxMp}`,""],["STR",Oi(d,"str"),""],["AGI",Oi(d,"agi"),""],["VIT",Oi(d,"vit"),""],["DEX",Oi(d,"dex"),""],["LUK",Oi(d,"luk"),""],["INT",Oi(d,"int"),""]];d.tempDebuff&&d.tempDebuff.poison!=null&&O.push(["Poison",`${d.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),P.innerHTML=O.map(([L,X,q])=>{let fe=q?` ${q}`:"";return`<span class="stat-label">${L}</span><span class="stat-val${fe}">${X}</span>`}).join("");let N=d.maxHp>0&&d.hp/d.maxHp<.3;h.classList.toggle("low-hp",N),h.style.display="block"}function is(){hn=null;let d=document.getElementById("unit-preview-card");d.classList.remove("low-hp","level-2","level-3"),d.style.display="none"}let lt=!1,Yn=!1,Fi=!1,Sn=null,sn=!1,Xt=!1,ti=!1,ni=[],pn=new Ei;n.add(pn);let ai=[],Hs=!0,Bi=0,mh=0;function kt(){Hs=!0,Bi=performance.now()}let Qr=new Ei;n.add(Qr);let al=[],lf=xt,cf=.02,hf=3368703,uf=13382451;function df(d,h){let _=d/2,b=_-h,I=new Yr;I.moveTo(-_,-_),I.lineTo(_,-_),I.lineTo(_,_),I.lineTo(-_,_),I.lineTo(-_,-_);let P=new qr;return P.moveTo(-b,-b),P.lineTo(b,-b),P.lineTo(b,b),P.lineTo(-b,b),P.lineTo(-b,-b),I.holes.push(P),new Pa(I)}let ff=df(lf,cf);function Ri(d=null){let h=le.filter(_=>_.hp>0&&_.id!==d).map(_=>`${_.id},${_.x},${_.y},${_.player}`).sort().join("|");if(!(Ri._lastSig===h&&Ri._lastExclude===d)){for(Ri._lastSig=h,Ri._lastExclude=d,al.forEach(_=>_.dispose()),al.length=0;Qr.children.length;){let _=Qr.children[0];Qr.remove(_)}le.filter(_=>_.hp>0&&_.id!==d).forEach(_=>{let b=_.x,I=_.y,O=(ei+e.height[I][b]*.35)/2+ei/2,N=b*xt-Je+xt/2,L=I*xt-He+xt/2,X=O+.02,q=_.player===1?hf:uf,fe=new Pn({color:q,side:An}),G=new Ye(ff,fe);G.rotation.x=-Math.PI/2,G.position.set(N,X,L),Qr.add(G),al.push(fe)}),kt()}}let pf=1.15,ol={1:8102901,2:15628943},xi=(()=>{let d=new Pn({color:ol[1]}),h=new Ye(new qi(.1,.25,8),d);return h.rotation.x=Math.PI,h.visible=!1,n.add(h),h})();function ll(){if(_n!=="playing"||Xe.length===0||ti){xi.visible=!1,xi.removeFromParent(),n.add(xi);return}let d=Xe[gt],h=le.find(b=>b.id===d);if(!h||h.hp<=0){xi.visible=!1,xi.removeFromParent(),n.add(xi);return}let _=Ge.get(d);if(!_){xi.visible=!1;return}xi.removeFromParent(),_.add(xi),xi.position.set(0,pf,0),xi.material&&xi.material.color.setHex(ol[h.player]??ol[1]),xi.visible=!0}function z_(d){let h=[[0,1],[0,-1],[1,0],[-1,0]],_=[];for(let[b,I]of h){let P=d.x+b,O=d.y+I;!or(e,P,O)||le.some(L=>L.id!==d.id&&L.x===P&&L.y===O&&L.hp>0)||_.push(Math.atan2(b,I))}return _}function gh(d){if(ni.length===0)return d;if(ni.length===1)return ni[0];let h=ni[0],_=Math.abs(yh(d-h));for(let b=1;b<ni.length;b++){let I=Math.abs(yh(d-ni[b]));I<_&&(_=I,h=ni[b])}return h}function yh(d){for(;d>Math.PI;)d-=2*Math.PI;for(;d<-Math.PI;)d+=2*Math.PI;return d}let mf=1.2,Ki=(()=>{let d=new Ye(new qi(.12,.35,8),new Pn({color:4500223}));return d.rotation.x=-Math.PI/2,d.visible=!1,n.add(d),d})();function gf(d,h){if(!ti||Xe.length===0||ni.length===0)return;let _=Xe[gt],b=le.find(fe=>fe.id===_),I=Ge.get(_);if(!b||!I)return;Wa(d,h),_s.setFromCamera(vs,a);let P=_s.intersectObjects(ae.children,!0);if(P.length===0)return;let O=null;for(let fe of P){let G=fe.object;for(;G&&(G.userData.gx==null||G.userData.gy==null);)G=G.parent;if(G&&G.userData.gx!=null){O=fe.point;break}}if(!O)return;let N=Ze(b.x,b.y),L=O.x-N.x,X=O.z-N.z;if(L*L+X*X<1e-6)return;let q=Math.atan2(L,X);I.rotation.y=gh(q)}function yf(){if(Xe.length===0)return;let d=Xe[gt],h=le.find(I=>I.id===d),_=Ge.get(d);if(!h||!_)return;ni=[[0,1],[0,-1],[1,0],[-1,0]].map(([I,P])=>Math.atan2(I,P)),Ki.removeFromParent(),_.add(Ki),Ki.position.set(0,mf,0),Ki.rotation.x=-Math.PI/2,Ki.rotation.y=0,Ki.rotation.z=Math.PI,Ki.visible=!0,_.rotation.y=ni[0]}function xf(){Ki.visible=!1,Ki.removeFromParent(),n.add(Ki)}let Ua=[];(function(){let h=Ti,_=[1];for(let b=0;b<Math.floor((h-1)/2);b++)_.push(2,2,1,1);h%2===1?_.push(2):(_.push(2,2),_.push(1)),Ua=_})();function ki(){return Ua[rt]}function xh(){let d=ki(),h=0;for(let _=0;_<rt;_++)Ua[_]===d&&h++;return h+1}function ea(){oe.forEach(_=>{ue.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),oe.clear(),we={30:!1,20:!1,10:!1};let d=Ti,h=[1];for(let _=0;_<Math.floor((d-1)/2);_++)h.push(2,2,1,1);d%2===1?h.push(2):(h.push(2,2),h.push(1)),Ua=h,_n="draft",rt=0,Ve=new Set(wi),st=D_([...wi]),Qe=null,ct=null,ht.clear(),Un(),hl(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function cl(){return le.filter(d=>d.hp>0).sort((d,h)=>{let _=Re(d,"agi"),b=Re(h,"agi");if(b!==_)return b-_;let I=Re(d,"dex");return Re(h,"dex")-I}).map(d=>d.id)}function _f(d){let h=new Set(le.filter(q=>q.hp>0).map(q=>q.y*e.w+q.x)),_=(q,fe)=>h.has(fe*e.w+q),b=(q,fe)=>q>=0&&q<e.w&&fe>=0&&fe<e.h,I=(q,fe)=>b(q,fe)&&or(e,q,fe)&&!_(q,fe),P=Ge.get(d.id),O=P!=null?P.rotation.y:d.player===1?Math.PI:0,N=d.x-Math.round(Math.cos(O)),L=d.y+Math.round(Math.sin(O));if(I(N,L))return{gx:N,gy:L};let X=[[0,1],[0,-1],[1,0],[-1,0]];for(let[q,fe]of X){let G=d.x+q,ie=d.y+fe;if(I(G,ie))return{gx:G,gy:ie}}return null}function vf(d,h,_,b){let I=b?.position&&b.position.gx!=null&&b.position.gy!=null?{gx:b.position.gx,gy:b.position.gy}:_f(d);if(!I)return null;let P=h.class&&wi.includes(h.class)?h.class:"knight",O=h.hairColor!=null?h.hairColor:(Bs[P]||Bs.knight).hair,N={id:J++,player:d.player,x:I.gx,y:I.gy,level:h.level!=null?h.level:1,name:h.name!=null?h.name:"Summoned",class:P,hairColor:O,hp:h.hp!=null?h.hp:10,maxHp:h.maxHp!=null?h.maxHp:10,mp:h.mp!=null?h.mp:5,maxMp:h.maxMp!=null?h.maxMp:5,str:h.str!=null?h.str:5,agi:h.agi!=null?h.agi:5,vit:h.vit!=null?h.vit:5,dex:h.dex!=null?h.dex:5,luk:h.luk!=null?h.luk:5,int:h.int!=null?h.int:5,range:h.range!=null?h.range:1,summonedBy:d.id};_!=null&&Array.isArray(_)&&_.length>0&&(N.summonedSkills=_),le.push(N),Ue(N);let L=Ge.get(N.id);if(L&&b?.useGrayscaleAppearance&&ot(L),L){let ie=function(ye){G++,G%2===0&&kt();let xe=ye-fe;if(xe<Le){let Fe=xe/Le,tt=1-(1-Fe)*(1-Fe),bt=at+(1-at)*tt;L.scale.setScalar(bt),requestAnimationFrame(ie);return}let Pe=xe-Le;if(Pe<De){let Fe=Pe/De,tt=Math.sin(Fe*Math.PI);L.position.y=q.y+it*tt,requestAnimationFrame(ie);return}L.scale.setScalar(1),L.position.y=q.y,kt()},X=Ge.get(d.id);L.rotation.y=X!=null?X.rotation.y:d.player===1?Math.PI:0,L.scale.setScalar(at);let q=Ze(N.x,N.y),fe=performance.now(),G=0;requestAnimationFrame(ie)}return Xe=cl(),Ri(),typeof Bt=="function"&&Bt(),kt(),N}function Na(d,h){let _=le.indexOf(h);if(_===-1)return null;le.splice(_,1);let b=Ge.get(h.id);b&&(n.remove(b),Ge.delete(h.id));let I=h.class&&wi.includes(h.class)?h.class:"knight",P=h.hairColor!=null?h.hairColor:(Bs[I]||Bs.knight).hair,O=fe=>Math.max(1,Math.floor((fe||0)*6/7)),N=O(h.maxHp),L=O(h.maxMp),X={name:"Reanimated "+h.name,class:I,hairColor:P,level:h.level,hp:N,maxHp:N,mp:L,maxMp:L,str:O(h.str),agi:O(h.agi),vit:O(h.vit),dex:O(h.dex),luk:O(h.luk),int:O(h.int),range:h.range},q=h.summonedSkills&&h.summonedSkills.length>0?h.summonedSkills.slice():(jr[I]||[]).slice();return vf(d,X,q,{position:{gx:h.x,gy:h.y},useGrayscaleAppearance:!0})}function Mf(){document.getElementById("draft-panel").style.display="none";let d=document.getElementById("draft-placement-card");d&&(d.style.display="none",d.innerHTML=""),Un();let h=document.getElementById("battle-start-overlay");h&&(h.classList.add("visible"),h.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");for(_&&(_.style.display="none",_.innerHTML=""),_n="playing",zn=0,Xe=cl(),gt=0;gt<Xe.length&&le.find(P=>P.id===Xe[gt]).hp<=0;)gt++;gt>=Xe.length&&(gt=0);let b=le.find(P=>P.id===Xe[gt]);xn=b?b.player:1,sn=!1,Xt=!1,Ut=Xe[gt],setTimeout(()=>{h&&(h.classList.remove("visible"),h.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",Ri(),Bt(),ll(),qn(!0),mt==="cvcpu"&&re()},4e3)}function hl(){let d=document.getElementById("draft-panel"),h=document.getElementById("draft-title"),_=document.getElementById("draft-classes"),b=document.getElementById("draft-message"),I=document.getElementById("turn-player"),P=document.getElementById("draft-placement-card");if(Qe){d.style.display="none",I.textContent=`Draft: ${Dn(ki())} \u2014 place ${Zt[Qe].name}`;let X=ki();P.style.display="flex",P.classList.remove("player-1","player-2"),P.classList.add("player-"+X),P.style.left=X===1?"24px":"",P.style.right=X===2?"24px":"";let q=[...le.filter(ie=>ie.player===X).map(ie=>ie.class),Qe],fe=(ie,ye)=>{let xe=Zt[ie];return`
        <div class="draft-class-card${ye?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Jr[ie]||""}" alt="${xe.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
      `},G=3;if(q.length>G){P.classList.add("draft-placement-cols");let ie=[];for(let xe=0;xe<q.length;xe+=G)ie.push(q.slice(xe,xe+G));let ye=q.length-1;P.innerHTML=ie.map((xe,Pe)=>{let Fe=Pe===ie.length-1,tt=xe.map((bt,nt)=>{let $t=Pe*G+nt===ye;return fe(bt,$t)}).join("");return`<div class="draft-placement-col${Fe?" draft-placement-col-current":""}">${tt}</div>`}).join("")}else P.classList.remove("draft-placement-cols"),P.innerHTML=q.map((ie,ye)=>{let xe=ye===q.length-1;return fe(ie,xe)}).join("");mt==="pvcpu"&&ki()===2&&setTimeout(sa,500),mt==="cvcpu"&&setTimeout(sa,500);return}P.style.display="none",P.innerHTML="",_n==="draft"&&(d.style.display="flex");let O=document.getElementById("draft-detail");O&&(O.style.display="");let N=ki();if(mt!=="online"||N===nn){let Pe=function(){let Fe=ct;if(!Fe||!Zt[Fe]){X&&(X.style.display=""),q&&(q.style.display="none"),fe&&(fe.style.display="none"),xe&&(xe.style.display="none");return}let tt=Zt[Fe],bt=jr[Fe]||[];X&&(X.style.display="none"),q&&(q.src=Jr[Fe]||"",q.alt=tt.name,q.style.display="block"),fe&&(fe.style.display="block"),G&&(G.textContent=tt.name),ie&&(ie.innerHTML=[["HP",tt.hp],["MP",tt.mp],["STR",tt.str],["AGI",tt.agi],["VIT",tt.vit],["DEX",tt.dex],["LUK",tt.luk],["INT",tt.int],["Range",tt.range]].map(([nt,vn])=>`<span class="draft-stat-label">${nt}</span><span class="draft-stat-value">${vn}</span>`).join("")),ye&&(ye.innerHTML=bt.length?bt.map(nt=>`<div class="draft-detail-skill"><span class="draft-detail-skill-name">${nt.name}</span><span class="draft-detail-skill-desc">${nt.description||""}</span></div>`).join(""):'<div class="draft-detail-skill">No skills</div>'),xe&&(xe.style.display="block",xe.disabled=!Ve.has(Fe),xe.onclick=()=>{let nt=ct;nt&&Ve.has(nt)&&ul(nt)}),_.querySelectorAll(".draft-class-card").forEach(nt=>{nt.classList.toggle("draft-class-card-selected",nt.dataset.classKey===Fe)})};h.textContent=`${Dn(N)}: Pick a class (${xh()}/${Ti})`,b.textContent="",_.innerHTML="",I.textContent=`Draft: ${Dn(N)} \u2014 pick a class`;let X=document.getElementById("draft-detail-placeholder"),q=document.getElementById("draft-detail-image"),fe=document.getElementById("draft-detail-content"),G=document.getElementById("draft-detail-name"),ie=document.getElementById("draft-detail-stats"),ye=document.getElementById("draft-detail-skills"),xe=document.getElementById("draft-select-btn");st.forEach(Fe=>{let tt=Ve.has(Fe),bt=Zt[Fe],nt=document.createElement("button");nt.type="button",nt.dataset.classKey=Fe,nt.className="draft-class-card"+(tt?"":" draft-class-card-unavailable")+(ct===Fe?" draft-class-card-selected":""),nt.disabled=!tt,nt.innerHTML=`
          <img class="draft-class-card-image" src="${Jr[Fe]||""}" alt="${bt.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${bt.name}</div>
          </div>
        `,tt&&nt.addEventListener("click",()=>{ct=Fe,Pe()}),_.appendChild(nt)}),Pe()}else{h.textContent=`${Dn(N)} is picking a class`,b.textContent="",_.innerHTML="",I.textContent=`Draft: ${Dn(N)} \u2014 pick a class`;let X=document.getElementById("draft-detail-placeholder"),q=document.getElementById("draft-detail-image"),fe=document.getElementById("draft-detail-content"),G=document.getElementById("draft-select-btn");X&&(X.style.display=""),q&&(q.style.display="none"),fe&&(fe.style.display="none"),G&&(G.style.display="none")}mt==="pvcpu"&&ki()===2&&setTimeout(sa,500),mt==="cvcpu"&&setTimeout(sa,500)}function ul(d){if(!Ve.has(d)||Qe)return;Qe=d;let h=ki(),_=new Set(le.map(P=>P.y*e.w+P.x)),b=O_(e,h,_),I=tf(e,b);ht=new Set(I.map(P=>P.gy*e.w+P.gx)),Gf(I),hl(),mt==="online"&&h===nn&&typeof cn=="function"&&cn({type:"draftPick",classKey:d})}function dl(d,h){if(!Qe)return;let _=ki(),b=h*e.w+d;if(!ht.has(b))return;let I=Zt[Qe],P={id:J++,player:_,x:d,y:h,level:1,name:I.name,class:Qe,hairColor:(Bs[Qe]||Bs.knight).hair,hp:I.hp,maxHp:I.maxHp,mp:I.mp,maxMp:I.maxMp,str:I.str,agi:I.agi,vit:I.vit,dex:I.dex,luk:I.luk,int:I.int,range:I.range};le.push(P),Ue(P);let O=Ge.get(P.id);O&&(O.rotation.y=P.player===1?Math.PI:0),Ve.delete(Qe),Qe=null,ht.clear(),Un(),mt==="online"&&_===nn&&typeof cn=="function"&&cn({type:"draftPlace",gx:d,gy:h});let N=document.getElementById("draft-placement-card");if(N&&(N.style.display="none",N.innerHTML=""),rt++,rt>=2*Ti){Mf();return}let L=ki(),X=xh(),q=document.getElementById("draft-panel"),fe=document.getElementById("draft-title"),G=document.getElementById("draft-message"),ie=document.getElementById("draft-detail"),ye=document.getElementById("draft-classes"),xe=document.getElementById("turn-player"),Pe=mt!=="online"||L===nn;q&&fe&&ye&&xe&&(q.style.display="flex",fe.textContent=Pe?`${Dn(L)}: Pick a class (${X}/${Ti})`:`${Dn(L)} is picking a class`,G&&(G.textContent=Pe?"Get ready\u2026":""),ye.innerHTML="",xe.textContent=`Draft: ${Dn(L)} \u2014 pick a class`),ie&&(ie.style.display="none"),setTimeout(hl,1500)}function Bt(){Bt._pending||(Bt._pending=!0,requestAnimationFrame(()=>{Bt._pending=!1,bf()}))}function bf(){let d=Bt._cache||(Bt._cache={}),h=d.turnEl||(d.turnEl=document.getElementById("turn-player")),_=d.menuLabel||(d.menuLabel=document.getElementById("menu-label")),b=d.turnMenu||(d.turnMenu=document.getElementById("turn-menu")),I=d.unitInfo||(d.unitInfo=document.getElementById("unit-info")),P=d.unitNameEl||(d.unitNameEl=document.getElementById("unit-name")),O=d.unitLevelClassEl||(d.unitLevelClassEl=document.getElementById("unit-level-class")),N=d.unitStatsEl||(d.unitStatsEl=document.getElementById("unit-stats")),L=d.unitClassImageEl||(d.unitClassImageEl=document.getElementById("unit-class-image"));if(_n==="playing"&&le.forEach(G=>{if(G.hp<=0)return;let ie=Ge.get(G.id);ie&&ve(ie,G.maxHp>0&&G.hp/G.maxHp<wt)}),b.classList.remove("player-1","player-2"),b.classList.add(xn===1?"player-1":"player-2"),b.classList.toggle("level-2",!1),b.classList.toggle("level-3",!1),_n==="playing"&&Xe.length>0){let G=Xe[gt],ie=le.find(ye=>ye.id===G&&ye.hp>0);mt==="online"&&ie&&ie.player!==nn?Ut=null:ie&&(Ut==null||!le.find(ye=>ye.id===Ut&&ye.hp>0))&&(Ut=G)}if(Ut!=null){let G=le.find(ie=>ie.id===Ut);if(G&&G.hp>0){I.classList.remove("no-unit");let ie=G.maxHp>0&&G.hp/G.maxHp<.25;b.classList.toggle("low-hp",ie),b.classList.toggle("level-2",G.level>=2&&G.level<3),b.classList.toggle("level-3",G.level>=3),P.textContent=G.name,O.textContent=`Lv.${G.level} ${G.class}`,L.src=Jr[G.class]||"",L.alt=G.name;let ye=[["HP",`${G.hp}/${G.maxHp}`,"stat-val-hp"],["MP",`${G.mp}/${G.maxMp}`,""],["STR",Oi(G,"str"),""],["AGI",Oi(G,"agi"),""],["VIT",Oi(G,"vit"),""],["DEX",Oi(G,"dex"),""],["LUK",Oi(G,"luk"),""],["INT",Oi(G,"int"),""]];G.tempDebuff&&G.tempDebuff.poison!=null&&ye.push(["Poison",`${G.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),N.innerHTML=ye.map(([xe,Pe,Fe])=>{let tt=Fe?` ${Fe}`:"";return`<span>${xe}</span><span class="stat-val${tt}">${Pe}</span>`}).join("")}else b.classList.remove("low-hp","level-2","level-3"),I.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",O.textContent="",N.textContent="",L.src="",L.alt=""}else b.classList.remove("low-hp","level-2","level-3"),I.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",O.textContent="",N.textContent="",L.src="",L.alt="";if(Ut!=null)h.textContent=`${Dn(xn)} \u2014 Unit ${P.innerHTML} active`;else{let G=Xe.length?le.find(ie=>ie.id===Xe[gt]):null;h.textContent=G?`${G.name} (${Dn(xn)})`:Dn(xn)}_.textContent=Dn(xn);let X=d.btnAttack||(d.btnAttack=document.getElementById("btn-attack")),q=d.btnSkill||(d.btnSkill=document.getElementById("btn-skill")),fe=d.btnEnd||(d.btnEnd=document.getElementById("btn-end"));if(mt==="cvcpu"&&_n==="playing")X.disabled=!0,q.disabled=!0,fe&&(fe.disabled=!0),h.textContent=`${Dn(xn)} (CPU)`;else if(ti)X.disabled=!0,q.disabled=!0,h.textContent="Click on map to choose facing direction";else if(_n==="playing"){X.disabled=Xt;let G=Xe.length?Xe[gt]:null,ie=G?le.find(Pe=>Pe.id===G&&Pe.hp>0):null,ye=mt!=="cvcpu"&&(mt!=="pvcpu"||xn===1)&&(mt!=="online"||xn===nn),xe=ye&&ie&&!Xt?bl(ie):[];q.disabled=Xt||!ye||xe.length===0,fe&&(fe.disabled=mt==="online"&&xn!==nn)}if(_n==="playing"){let G=Math.min(zn+1,ms);h.textContent=(h.textContent||"")+` \u2014 Turn ${G}/${ms}`;let ie=d.turnsLeftEl||(d.turnsLeftEl=document.getElementById("turns-left")),ye=d.turnsLeftValueEl||(d.turnsLeftValueEl=document.getElementById("turns-left-value"));if(ie&&ye){ie.style.display="";let xe=Math.max(0,ms-zn);ye.textContent=String(xe),ie.classList.toggle("turns-left-low",xe<=10),(xe===30||xe===20||xe===10)&&(we[xe]||(yt(xe),we[xe]=!0))}}else{let G=d.turnsLeftEl||(d.turnsLeftEl=document.getElementById("turns-left"));G&&(G.style.display="none")}_n==="playing"&&Ml(xn)&&!lt&&setTimeout(mn,700)}function ln(){if(mt==="online"&&xn===nn&&typeof Ws=="function"){let X=Xe[gt],q=Ge.get(X),fe=q?.rotation.y;Ws({type:"endTurn",unitId:X,facingAngle:fe})}kt(),is(),Yn=!1,Fi=!1,Sn=null,ti=!1,ni=[],xf(),Un();let d=Xe.length;if(d===0)return;let h=Xe[gt],_=le.find(X=>X.id===h);if(_&&_.tempDebuff&&_.tempDebuff.duration--,_&&_.tempDebuff&&_.tempDebuff.duration<=0&&(_.tempDebuff=void 0),_&&_.tempBuff&&_.tempBuff.duration--,_&&_.tempBuff&&_.tempBuff.duration<=0&&(_.tempBuff=void 0),_&&_.hp>0){let X=Math.ceil(Re(_,"int")*.15);_.mp=Math.min(_.maxMp,_.mp+X)}if(_&&_.hp>0){let X=_.x,q=_.y;e.type[q][X]===je.CENTER&&_.level===1&&Yt(_);let fe=_.player===1?je.BASE_TOP:je.BASE_BOTTOM;e.type[q][X]===fe&&_.level===2&&Yt(_)}if(zn++,zn>=ms){Qf();return}let b=(gt+1)%d,I=0;for(;I<d;){let X=Xe[b],q=le.find(fe=>fe.id===X);if(q&&q.hp>0)break;b=(b+1)%d,I++}let P=b===0;gt=b;let O=["poison"],N=Xe[gt],L=le.find(X=>X.id===N);for(let X=0;X<d&&!(!L||L.hp<=0);X++){let q=L.tempDebuff||{},fe=O.find(ie=>!isNaN(q[ie])),G=q[fe]||0;if(G<=0)break;if(console.log("[DEBUFF]",`${fe}: ${G} to ${L.name}`),L.hp=Math.max(0,L.hp-G),li(L.x,L.y,String(G),!1,fe),Ne(L),L.hp<=0){Nn(L),b=(gt+1)%d;let ie=0;for(;ie<d;){let ye=Xe[b],xe=le.find(Pe=>Pe.id===ye);if(xe&&xe.hp>0)break;b=(b+1)%d,ie++}gt=b;continue}break}xn=L?L.player:1,sn=!1,Xt=!1,Ut=Xe[gt],P&&(Xe=cl(),gt=0),Bt(),ll(),qn()}document.getElementById("btn-attack").addEventListener("click",()=>{if(lt||Xt||_n!=="playing"||Xe.length===0)return;if(mt==="online"){let I=Xe[gt],P=le.find(O=>O.id===I);if(!P||P.player!==nn)return}is();let d=Xe[gt],h=le.find(I=>I.id===d);if(!h||h.hp<=0)return;let _=h.range!=null?h.range:1;Ut=d,Yn=!0;let b=nf(e,h.x,h.y,_);Qt=new Map,b.forEach((I,P)=>{let O=P%e.w,N=Math.floor(P/e.w);ar(e,h.x,h.y,O,N)&&Qt.set(P,I)}),Wf(Qt),Bt()}),document.getElementById("btn-skill").addEventListener("click",d=>{if(d.preventDefault(),d.stopPropagation(),lt||Xt)return;let h=Xe[gt],_=h?le.find(N=>N.id===h&&N.hp>0):null;if(!_||_.player!==xn||mt==="online"&&_.player!==nn)return;let b=document.getElementById("skill-list-overlay"),I=document.getElementById("btn-skill");if(!I)return;if(b&&b.style.display==="block"){b.style.display="none";return}let P=bl(_),O=I.getBoundingClientRect();b||(b=document.createElement("div"),b.id="skill-list-overlay",b.className="skill-list-overlay",b.setAttribute("aria-hidden","true"),document.body.appendChild(b)),b.style.left=`${O.left}px`,b.style.top=`${O.top-4}px`,b.style.transform="translateY(-100%)",b.style.right="auto",b.style.bottom="auto",b.style.display="none",P.length===0?b.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(b.innerHTML=P.map((N,L)=>`<button type="button" class="skill-option" data-skill-index="${L}" ${N.disabled?"disabled":""}>
          <span class="skill-name">${N.name}</span> <span class="skill-meta">${N.cost} MP \xB7 Lv.${N.level}</span><br/>
          <span class="skill-meta">${N.description}</span>
        </button>`).join(""),b.querySelectorAll(".skill-option").forEach((N,L)=>{N.addEventListener("click",X=>{X.preventDefault(),X.stopPropagation();let q=P[L];if(Sn=q,b.style.display="none",b.setAttribute("aria-hidden","true"),q.target==="self"){if(_.mp<q.cost)return;_.mp-=q.cost,Xt=!0;let fe={showFloatingCombatText:li,handleUnitDeath:Nn,updateUnitSlashVisibility:Ne,updateTurnUI:Bt,units:le,reanimateDeadUnit:Na};mt==="online"&&_.player===nn&&typeof cn=="function"&&(cn({type:"requestRender"}),Ws({type:"skill",unitId:_.id,targetId:_.id,effectKey:q.effectKey})),Ga(_,_,q,fe,()=>{Un(),Fi=!1,Sn=null,mr=new Set,sn?ln():Bt()}),Bt();return}if(q.target==="ally"&&ra(_,q,le).filter(ie=>ie.targetUnit&&ie.targetUnit.id!==_.id).length===0&&_.mp>=q.cost){_.mp-=q.cost,Xt=!0;let ie={showFloatingCombatText:li,handleUnitDeath:Nn,updateUnitSlashVisibility:Ne,updateTurnUI:Bt,units:le,reanimateDeadUnit:Na};mt==="online"&&_.player===nn&&typeof cn=="function"&&(cn({type:"requestRender"}),Ws({type:"skill",unitId:_.id,targetId:_.id,effectKey:q.effectKey})),Ga(_,_,q,ie,()=>{Un(),Fi=!1,Sn=null,mr=new Set,sn?ln():Bt()}),Bt();return}Fi=!0,Yn=!1,Vf(_,q),Bt()})})),requestAnimationFrame(()=>{b.style.display="block",b.style.visibility="visible",b.setAttribute("aria-hidden","false")})}),document.addEventListener("click",d=>{let h=document.getElementById("skill-list-overlay"),_=document.getElementById("btn-skill"),b=document.querySelector(".skill-wrap");!h||h.style.display!=="block"||b&&b.contains(d.target)||h.contains(d.target)||(h.style.display="none",h.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(lt||ti||_n!=="playing"||Xe.length===0)return;let d=Xe[gt],h=le.find(b=>b.id===d);if(!h||h.hp<=0||mt==="online"&&h.player!==nn)return;ti=!0,Ut=null,Yn=!1,Qt=new Map,Un(),yf(),ll();let _=document.getElementById("turn-player");_.textContent="Click on map to choose facing direction",Bt()}),u.set(0,8,0),a.position.copy(u).add(c),a.lookAt(u);let lr=document.getElementById("mode-select-overlay"),_h=document.getElementById("mode-carousel-track"),vh=document.getElementById("mode-carousel-prev"),Mh=document.getElementById("mode-carousel-next"),Oa=document.getElementById("mode-carousel-dots"),ss=document.getElementById("mode-play-btn"),bh=document.getElementById("mode-settings-pvp"),Sh=document.getElementById("mode-settings-pvp-map"),Eh=document.getElementById("mode-settings-pvp-num-units"),Th=document.getElementById("mode-settings-pvp-none"),wh=document.getElementById("mode-settings-options"),Fa=document.getElementById("pvp-map-mode"),ta=document.getElementById("pvp-num-units"),na=document.getElementById("ai-draft-preference"),Sf=document.getElementById("cvcpu-num-games"),Ba=document.getElementById("cvcpu-num-units"),Ah=document.getElementById("cvcpu-grid-w"),Rh=document.getElementById("cvcpu-grid-h"),Ch=document.getElementById("cvcpu-center-plaza"),Ph=document.getElementById("cvcpu-max-turns"),cr=document.getElementById("move-speed"),hr=document.getElementById("draft-picks-per-player"),zs=document.getElementById("online-connect-overlay"),Ci=document.getElementById("online-player-name"),Vs=document.getElementById("online-create-section"),ur=document.getElementById("online-join-section"),dr=document.getElementById("online-offer-text"),ka=document.getElementById("online-reply-text"),Ha=document.getElementById("online-paste-offer"),ia=document.getElementById("online-join-answer-section"),fr=document.getElementById("online-answer-text"),fl=document.getElementById("online-error"),Ih=document.getElementById("online-waiting-msg"),Zi=gs?["pvp","pvcpu","cvcpu","online","story"]:["pvp","pvcpu","online","story"],pl=Zi.length-1,Fn=0;function ml(){return Fn===pl}function Ef(){return Zi[Fn]==="online"}function za(d){Fn=Math.max(0,Math.min(d,pl)),_h&&(_h.style.transform=`translateX(-${Fn*100}%)`),Oa&&Oa.querySelectorAll(".mode-dot").forEach((_,b)=>{_.classList.toggle("active",b===Fn),_.setAttribute("aria-selected",b===Fn)}),bh&&(bh.style.display=Fn===0||Fn===1||ml()||Zi[Fn]==="online"?"":"none"),Sh&&(Sh.style.display=Fn===0||Fn===1||Zi[Fn]==="online"?"":"none"),Eh&&(Eh.style.display=Zi[Fn]==="pvp"?"":"none"),Zi[Fn]==="pvp"&&ta&&(ta.style.width="11em",ta.value=String(Math.max(1,Math.min(20,Ti)))),Th&&(Th.style.display=ml()?"":"none"),wh&&(wh.style.display=gs&&Zi[Fn]==="cvcpu"?"":"none"),gs&&Zi[Fn]==="cvcpu"&&Ba&&(Ba.value=String(Math.max(1,Math.min(20,Ti))));let h=ss?.querySelector(".mode-play-text");ss&&h&&(ml()?(ss.disabled=!0,h.textContent="Coming Soon"):(ss.disabled=!1,h.textContent=Ef()?"Connect":"Play game"))}if(Oa)for(let d=0;d<=pl;d++){let h=document.createElement("button");h.type="button",h.className="mode-dot"+(d===0?" active":""),h.setAttribute("role","tab"),h.setAttribute("aria-label",`Mode ${d+1}`),h.setAttribute("aria-selected",d===0),h.addEventListener("click",()=>za(d)),Oa.appendChild(h)}if(vh&&vh.addEventListener("click",()=>za(Fn-1)),Mh&&Mh.addEventListener("click",()=>za(Fn+1)),lr&&!gs){let d=lr.querySelector('.mode-slide[data-mode="cvcpu"]');d&&d.parentNode&&d.parentNode.removeChild(d)}if(za(0),cr&&(cr.value=String(Fs),cr.addEventListener("input",()=>{let d=parseInt(cr.value,10);!Number.isNaN(d)&&d>=0&&(Fs=d)}),cr.addEventListener("change",()=>{let d=parseInt(cr.value,10);!Number.isNaN(d)&&d>=0&&(Fs=d)})),hr&&(hr.value=String(Ti),hr.addEventListener("input",()=>{let d=parseInt(hr.value,10);!Number.isNaN(d)&&d>=1&&(Ti=d)}),hr.addEventListener("change",()=>{let d=parseInt(hr.value,10);!Number.isNaN(d)&&d>=1&&(Ti=d)})),na&&(I_.forEach(d=>{let h=document.createElement("option");h.value=d.value,h.textContent=d.label,na.appendChild(h)}),na.value=Oe,na.addEventListener("change",()=>{Oe=na.value})),zs){let d=document.getElementById("online-btn-create"),h=document.getElementById("online-btn-join"),_=document.getElementById("online-btn-copy-offer"),b=document.getElementById("online-btn-connect"),I=document.getElementById("online-btn-join-connect"),P=document.getElementById("online-btn-copy-answer");d&&d.addEventListener("click",async()=>{let O=Ci&&Ci.value.trim()||"Player 1";if(!O){oi("Enter your name");return}oi("");try{ys=Fa&&Fa.value||"long",ns=(Date.now()^Math.random()*4294967295)>>>0,_t(ys,ns);let N=await Af(O,ns,ys);dr&&(dr.value=N),Vs&&(Vs.style.display="flex",Vs.style.alignItems="flex-start"),ur&&(ur.style.display="none")}catch(N){oi(N.message||"Failed to create game")}}),_&&dr&&_.addEventListener("click",()=>{dr.select(),document.execCommand("copy")}),b&&ka&&b.addEventListener("click",async()=>{let O=ka.value.trim();if(!O){oi("Paste your friend's reply");return}oi("");try{await Cf(O)}catch(N){oi(N.message||"Failed to connect")}}),h&&h.addEventListener("click",()=>{if(!(Ci&&Ci.value.trim()||"Player 2")){oi("Enter your name");return}oi(""),Vs&&(Vs.style.display="none"),ur&&(ur.style.display="flex")}),I&&Ha&&I.addEventListener("click",async()=>{let O=Ha.value.trim();if(!O){oi("Paste the host's code");return}oi("");try{nn=2,fi[2]=Ci&&Ci.value.trim()||"Player 2";let N=await Rf(fi[2],O);fr&&(fr.value=N),ia&&(ia.style.display="flex",ia.style.alignItems="flex-start")}catch(N){oi(N.message||"Failed to join")}}),P&&fr&&P.addEventListener("click",()=>{fr.select(),document.execCommand("copy")})}let xs=new Audio;xs.loop=!0,xs.volume=.3,xs.preload="auto";let gl=window.location.href.replace(/[^/]*$/,""),Lh=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:gl+(gl.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");xs.src=Lh,xs.addEventListener("error",()=>{let d=gl+"assets/music/tavern.mp3";d!==Lh&&(xs.src=d)});function Tf(){xs.paused&&xs.play().catch(()=>{})}function oi(d){fl&&(fl.textContent=d||"",fl.style.display=d?"block":"none")}function Dh(){zs&&(zs.style.display="none",zs.setAttribute("aria-hidden","true"))}function wf(){oi(""),nn=1,fi={1:"",2:""},zs&&(zs.style.display="flex",zs.setAttribute("aria-hidden","false")),Ci&&(Ci.value=""),Vs&&(Vs.style.display="none"),ur&&(ur.style.display="none"),dr&&(dr.value=""),ka&&(ka.value=""),Ha&&(Ha.value=""),fr&&(fr.value=""),ia&&(ia.style.display="none"),Ih&&(Ih.style.display="block")}function Uh(d){return new Promise(h=>{if(d.iceGatheringState==="complete"){h();return}let _=()=>{d.iceGatheringState==="complete"&&(d.removeEventListener("icegatheringstatechange",_),h())};d.addEventListener("icegatheringstatechange",_)})}async function Af(d,h,_){Ai&&(Ai.close(),Ai=null,$i=null);let b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),I=[];b.addEventListener("icecandidate",N=>{N.candidate&&I.push(N.candidate)});let P=b.createDataChannel("game-sync",{ordered:!0});$i=P,Ai=b,P.addEventListener("open",()=>Oh(P,!0));let O=await b.createOffer();return await b.setLocalDescription(O),await Uh(b),JSON.stringify({type:"offer",sdp:b.localDescription.sdp,candidates:I,playerName:d||"Player 1"})}async function Rf(d,h){let _=JSON.parse(h),b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),I=[];if(b.addEventListener("icecandidate",O=>{O.candidate&&I.push(O.candidate)}),b.addEventListener("datachannel",O=>{$i=O.channel,Ai=b,Oh($i,!1)}),await b.setRemoteDescription(new RTCSessionDescription({type:"offer",sdp:_.sdp})),_.candidates&&_.candidates.length)for(let O of _.candidates)await b.addIceCandidate(new RTCIceCandidate(O));let P=await b.createAnswer();return await b.setLocalDescription(P),await Uh(b),JSON.stringify({type:"answer",sdp:b.localDescription.sdp,candidates:I,playerName:d||"Player 2"})}async function Cf(d){let h=JSON.parse(d);if(!Ai){oi("Create a game first, then paste your friend's reply.");return}let _=Ai.signalingState;if(_!=="stable"){if(_!=="have-local-offer"){oi("Wrong step: create a game first and send the code, then paste the reply.");return}if(await Ai.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:h.sdp})),h.candidates&&h.candidates.length)for(let b of h.candidates)await Ai.addIceCandidate(new RTCIceCandidate(b))}}let Nh=0,Gs=0,yl=[],xl=!1,_l=[];function pr(){Gs=Math.max(0,Gs-1),Gs===0&&vl()}function vl(){for(;Gs===0&&yl.length>0;){let d=yl.shift();if(d.type==="move"){Lf(d.unitId,d.toGx,d.toGy);return}if(d.type==="attack"){Df(d.unitId,d.targetId,d.hit,d.damage);return}if(d.type==="skill"){Uf(d);return}if(d.type==="endTurn"){if(d.unitId!=null&&d.facingAngle!=null){let h=Ge.get(d.unitId);h&&(h.rotation.y=d.facingAngle)}ln();return}if(d.type==="unitDeath"){let h=le.find(b=>b.id===d.unitId),_=d.killerId!=null?le.find(b=>b.id===d.killerId):null;h&&(h.hp=0,Nn(h,_,{skipSync:!0})),vl();return}}}function Oh(d,h){if(d.binaryType="arraybuffer",d.addEventListener("message",P=>{try{let O=JSON.parse(P.data);if(O.seq!=null&&O.seq<=Nh)return;O.seq!=null&&(Nh=O.seq),Pf(O,h)}catch(O){console.warn("Online message parse error",O)}}),d.addEventListener("close",()=>{mt==="online"&&oi("Connection lost.")}),!h){let P=fi[2]||Ci&&Ci.value.trim()||"Player 2";cn({type:"joined",playerName:P});return}let _=Ci&&Ci.value.trim()||"Player 1",b=ns??(Date.now()^Math.random()*4294967295)>>>0,I=ys||"long";fi[1]=_,cn({type:"start",mapSeed:b,mapMode:I,playerName:_}),Dh(),ea()}function Pf(d,h){if(d.type==="start"){fi[1]=d.playerName||"Player 1",ns=d.mapSeed,ys=d.mapMode||"long",_t(ys,ns),Dh(),ea();return}if(d.type==="joined"){fi[2]=d.playerName||"Player 2";return}if(_n==="draft"){d.type==="draftPick"?ul(d.classKey):d.type==="draftPlace"&&dl(d.gx,d.gy);return}_n==="playing"&&(d.type==="move"||d.type==="attack"||d.type==="skill"||d.type==="endTurn"||d.type==="unitDeath"?(yl.push(d),vl()):d.type==="requestRender"&&kt())}function cn(d){if($i&&$i.readyState==="open"){let h=(typeof cn.seq<"u"?cn.seq:0)+1;cn.seq=h,$i.send(JSON.stringify({...d,seq:h}))}}function Ws(d){if(mt==="online"&&xl&&(d.type==="attack"||d.type==="skill"||d.type==="endTurn")){_l.push(d);return}cn(d)}function If(){for(;_l.length>0;){let d=_l.shift();cn(d)}}function Lf(d,h,_){let b=le.find(I=>I.id===d);!b||b.hp<=0||(Gs++,Vt(b,h,_,()=>{kt(),Bt(),pr()}))}function Df(d,h,_,b){let I=le.find(O=>O.id===d),P=le.find(O=>O.id===h);!I||!P||P.hp<=0||(Gs++,Va(I,P,_,b,()=>{kt(),Bt(),pr()}))}function Uf(d){let h=le.find(b=>b.id===d.unitId),_=d.targetId!=null?le.find(b=>b.id===d.targetId):null;if(h)if(Gs++,d.effectKey&&h.mp>=(jr[h.class]||[]).find(b=>b.effectKey===d.effectKey)?.cost){let b=(jr[h.class]||[]).find(I=>I.effectKey===d.effectKey);if(b){h.mp-=b.cost;let I={showFloatingCombatText:li,handleUnitDeath:Nn,updateUnitSlashVisibility:Ne,updateTurnUI:Bt,tryCollectPowerup:Ke,world:e,units:le,reanimateDeadUnit:Na,updateUnitPosition(N){let L=Ge.get(N.id);L&&L.position.copy(Ze(N.x,N.y))},animateKnockback(N,L,X,q,fe,G){let ie=Ge.get(N.id);if(!ie){G&&G();return}let ye=Ze(L,X).clone(),xe=Ze(q,fe).clone(),Pe=performance.now(),Fe=0;function tt(bt){Fe++,Fe%2===0&&kt();let nt=Math.min(1,(bt-Pe)/Fs),vn=$t=>$t*$t*(3-2*$t);ie.position.lerpVectors(ye,xe,vn(nt)),nt<1?requestAnimationFrame(tt):(ie.position.copy(xe),G&&G())}requestAnimationFrame(tt)}};Da(d.effectKey,h,_,I),_&&Ne(_);let O=b.target==="self"||b.target==="ally"?b.target==="self"?h:_:null;O?pt(O,()=>{kt(),Bt(),pr()}):(kt(),setTimeout(()=>{kt(),Bt(),pr()},400))}else kt(),setTimeout(()=>{kt(),Bt(),pr()},400)}else kt(),setTimeout(()=>{kt(),Bt(),pr()},400)}function Nf(){if(Zi[Fn]==="story")return;let d=Zi[Fn];if(Tf(),mt=d,d==="online"){lr&&lr.classList.add("hidden"),wf();return}if(d==="pvp"||d==="pvcpu"){let h=Fa&&Fa.value||"long";_t(h),d==="pvp"&&ta&&(Ti=Math.max(1,Math.min(20,parseInt(ta.value,10)||7)))}else d==="cvcpu"&&(gs&&Ah&&Rh&&Ch&&(hh=Math.max(5,Math.min(50,parseInt(Ah.value,10)||21)),uh=Math.max(5,Math.min(50,parseInt(Rh.value,10)||11)),dh=Math.max(.1,Math.min(.9,parseFloat(Ch.value)||.29))),gs&&Ph&&(ms=Math.max(10,Math.min(999,parseInt(Ph.value,10)||200))),_t("long"));d==="cvcpu"&&(w=Math.max(1,parseInt(Sf?.value,10)||1),W=0,Ba&&(Ti=Math.max(1,Math.min(20,parseInt(Ba.value,10)||7)))),lr&&lr.classList.add("hidden"),ea()}ss?ss.addEventListener("click",d=>{if(ss.disabled)return;let h=ss.querySelector(".mode-play-ripple");if(h){let _=ss.getBoundingClientRect();h.style.left=d.clientX-_.left+"px",h.style.top=d.clientY-_.top+"px",h.style.width=h.style.height="20px",h.style.marginLeft=h.style.marginTop="-10px",h.classList.remove("ripple"),h.offsetHeight,h.classList.add("ripple"),setTimeout(()=>h.classList.remove("ripple"),500)}Nf()}):ea();function Ml(d){return mt==="pvcpu"&&d===2||mt==="cvcpu"}function Of(){let d=wi.filter(G=>Ve.has(G));if(d.length===0)return null;let h=Oe||"balanced";if(h==="random")return d[Math.floor(Math.random()*d.length)];if(h==="custom")return af.filter(ie=>Ve.has(ie))[0]??d[0]??null;let _=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function b(G){let ie=Zt[G];if(!ie)return 1/0;let ye=_.map(Pe=>ie[Pe]??0),xe=ye.reduce((Pe,Fe)=>Pe+Fe,0)/ye.length;return ye.reduce((Pe,Fe)=>Pe+(Fe-xe)**2,0)/ye.length}if(h==="tanky")return[...d].sort((ie,ye)=>{let xe=Zt[ie]?.hp??0,Pe=Zt[ye]?.hp??0;return Pe!==xe?Pe-xe:(Zt[ye]?.vit??0)-(Zt[ie]?.vit??0)})[0]??null;if(h==="aggressive")return[...d].sort((ie,ye)=>{let xe=Zt[ie]?.str??0,Pe=Zt[ye]?.str??0;return Pe!==xe?Pe-xe:(Zt[ye]?.agi??0)-(Zt[ie]?.agi??0)})[0]??null;if(h==="scout")return[...d].sort((ie,ye)=>{let xe=Zt[ie]?.agi??0,Pe=Zt[ye]?.agi??0;return Pe!==xe?Pe-xe:(Zt[ye]?.dex??0)-(Zt[ie]?.dex??0)})[0]??null;if(h==="ranged")return[...d].sort((ie,ye)=>{let xe=Zt[ie]?.range??0,Pe=Zt[ye]?.range??0;return Pe!==xe?Pe-xe:(Zt[ye]?.dex??0)-(Zt[ie]?.dex??0)})[0]??null;if(h==="caster")return[...d].sort((ie,ye)=>{let xe=Zt[ie]?.int??0,Pe=Zt[ye]?.int??0;return Pe!==xe?Pe-xe:(Zt[ye]?.mp??0)-(Zt[ie]?.mp??0)})[0]??null;let I=ki(),O=L_(Ti),N=le.filter(G=>G.player===I).map(G=>G.class),L={};for(let G of Object.keys(sl))L[G]=0;for(let G of N)for(let ie of Object.keys(sl))if(sl[ie].includes(G)){L[ie]++;break}let X=G=>Math.max(0,(O[G]??0)-(L[G]??0)),q=G=>{for(let[ie,ye]of Object.entries(sl))if(ye.includes(G))return ie;return null};return[...d].sort((G,ie)=>{let ye=q(G),xe=q(ie),Pe=ye!=null?X(ye):0,Fe=xe!=null?X(xe):0;if(Fe!==Pe)return Fe-Pe;let tt=Zt[G]?.hp??0,bt=Zt[ie]?.hp??0;return bt!==tt?bt-tt:b(G)-b(ie)})[0]??null}function sa(){if(_n!=="draft"||!Ml(ki()))return;if(!Qe){let _=Of();_&&ul(_),setTimeout(sa,500);return}let d=Array.from(ht).map(_=>({gx:_%e.w,gy:Math.floor(_/e.w)})),h=tf(e,d);if(h.length>0){let{gx:_,gy:b}=h[0];dl(_,b)}}function Fh(){let d=[];for(let h=0;h<e.h;h++)for(let _=0;_<e.w;_++)e.type[h][_]===je.CENTER&&d.push({gx:_,gy:h});return d}function Ff(d){let h=[],_=d===1?je.BASE_TOP:je.BASE_BOTTOM;for(let b=0;b<e.h;b++)for(let I=0;I<e.w;I++)e.type[b][I]===_&&h.push({gx:I,gy:b});return h}function _i(d,h,_,b){return Math.abs(d-_)+Math.abs(h-b)}function Bf(d){let h=d.range!=null?d.range:1,_=[];for(let b of le){if(b.hp<=0||b.player===d.player)continue;let I=_i(d.x,d.y,b.x,b.y);I<=h&&I>0&&ar(e,d.x,d.y,b.x,b.y)&&_.push({target:b,dist:I})}return _}function kf(d,h,_){let b=_??le.filter(P=>P.hp>0&&P.player===d.player&&P.id!==d.id),I=h??le.filter(P=>P.hp>0&&P.player!==d.player);for(let P of b)for(let O of I){let N=O.range!=null?O.range:1,L=_i(O.x,O.y,P.x,P.y);if(L<=N&&L>0&&ar(e,O.x,O.y,P.x,P.y))return!0}return!1}function Vt(d,h,_,b){let I=d.x,P=d.y,O=ks(e,d.x,d.y,h,_,le,d);if(!O||O.length<=1){b&&b();return}Ut=null,Un(),lt=!0,g=!0,Ri(d.id),kt();let N=Ge.get(d.id),L=1;function X(){if(L>=O.length){d.x=O[O.length-1].x,d.y=O[O.length-1].y,Ke(d),lt=!1,$e(N),Ri(),Qt=new Map,sn=!0,mt==="online"&&d.player===nn&&typeof cn=="function"&&cn({type:"move",unitId:d.id,toGx:d.x,toGy:d.y}),b&&b();return}let q=O[L-1],fe=O[L],G=Ze(q.x,q.y).clone(),ie=Ze(fe.x,fe.y).clone(),ye=ie.x-G.x,xe=ie.z-G.z;ye*ye+xe*xe>1e-6&&(N.rotation.y=Math.atan2(ye,xe));let Pe=performance.now(),Fe=0;function tt(bt){Fe++,Fe%2===0&&kt();let nt=Math.min(1,(bt-Pe)/Fs),$t=(Kt=>Kt*Kt*(3-2*Kt))(nt);if(N.position.lerpVectors(G,ie,$t),Ee(N,$t),g){let Kt=a.position.distanceTo(u),gn=Kt<.1?o:Kt;m.copy(a.position).sub(u).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),u.lerp(N.position,l),a.position.copy(u).add(m.clone().multiplyScalar(gn)),a.lookAt(u)}nt<1?requestAnimationFrame(tt):(L++,X())}requestAnimationFrame(tt)}X()}function Va(d,h,_,b,I){let P=_!==void 0,O,N=0;if(P)O=_,N=b!=null&&b>0?b:0;else{mt==="online"&&d.player===nn&&typeof cn=="function"&&cn({type:"requestRender"});let Ot=Re(h,"agi")*.7+Re(h,"luk")*.3;if(O=Math.random()*Math.max(.001,Ot)<=Re(d,"dex"),O){let Ht=Re(d,"str")*.7+Re(d,"dex")*.2+Re(d,"int")*.1-(Re(h,"vit")*.3+Re(h,"luk")*.2);N=Math.max(1,Math.floor(Ht))}}Xt=!0,Ut=null,Yn=!1,Un(),!P&&mt==="online"&&d.player===nn&&typeof Ws=="function"&&Ws({type:"attack",unitId:d.id,targetId:h.id,hit:O,damage:O?N:void 0}),P||console.log("[ATTACK]",`${d.name} (${d.class}, P${d.player})`,"\u2192",`${h.name} (${h.class}, P${h.player})`,O?`${N} dmg`:"MISS",`| ${h.name} HP ${h.hp} \u2192 ${Math.max(0,h.hp-N)}/${h.maxHp}`);let L=Ge.get(d.id);if(!L||!L.userData.rightArm){lt=!0,O?(h.hp=Math.max(0,h.hp-N),li(h.x,h.y,String(N),!1),Ne(h),h.hp<=0&&Nn(h,d)):li(h.x,h.y,"MISS",!0),setTimeout(()=>{lt=!1,I&&I(),P||(sn?ln():Bt())},400);return}let X=Ze(d.x,d.y).clone(),q=Ze(h.x,h.y).clone(),fe=X.clone().lerp(q,.35),G=q.x-X.x,ie=q.z-X.z;if(G*G+ie*ie>1e-6&&(L.rotation.y=Math.atan2(G,ie)),(d.range!=null?d.range:1)>2){let Nt=function(se){dt++,dt%2===0&&kt();let ge=se-Pi,pe=Math.min(1,ge/fn);if(Ht.position.lerpVectors(vi,un,pe),qt){let te=Math.sin(pe*Math.PI)*1.1;qt.rotation.y=-te}if(!Tn&&pe>=1&&(Tn=!0,n.remove(Ht),Ot.dispose(),rn.dispose(),O?(h.hp=Math.max(0,h.hp-N),li(h.x,h.y,String(N),!1),h.hp<=0&&(Vn=!0),Ge.get(h.id)?wn=se:Vn&&(Nn(h,d),Vn=!1),Ne(h)):li(h.x,h.y,"MISS",!0)),wn!=null&&O){let te=Ge.get(h.id);if(te){let he=Math.min(1,(se-wn)/zt),be=1-he;Ms.copy(St).multiplyScalar(en*be),te.position.copy(ut).add(Ms),he>=1&&(te.position.copy(ut),wn=null,Vn&&(Nn(h,d),Vn=!1))}else wn=null,Vn&&(Nn(h,d),Vn=!1)}if(pe<1)requestAnimationFrame(Nt);else{qt&&(qt.rotation.y=0);let te=wn==null;te&&Vn&&(Nn(h,d),Vn=!1),te?($n.shadowMap.enabled=!0,lt=!1,I&&setTimeout(()=>I(),0),P||setTimeout(sn?()=>ln():()=>Bt(),400)):requestAnimationFrame(Nt)}},Ot=new Os(.035,.035,.4,6),rn=new Pn({color:16763972}),Ht=new Ye(Ot,rn);Ht.position.copy(X),Ht.position.y+=.6;let It=q.clone().sub(X).normalize();Ht.quaternion.setFromUnitVectors(new k(0,1,0),It),n.add(Ht),lt=!0;let qt=L.userData.rightArm,ut=Ze(h.x,h.y).clone(),St=q.clone().sub(X).normalize(),en=.4,Tn=!1,wn=null,Vn=!1,vi=Ht.position.clone(),un=q.clone();un.y+=.6;let Pi=performance.now(),dt=0;$n.shadowMap.enabled=!1,requestAnimationFrame(Nt);return}let Pe=!1,Fe=performance.now(),tt=L.userData.rightArm,bt=null,nt=!1,vn=Ze(h.x,h.y).clone(),$t=q.clone().sub(X).normalize(),Kt=.4,gn=0;function En(Ot){gn++,gn%2===0&&kt();let rn=Ot-Fe,Ht=Math.min(1,rn/ze),It=Ht<=.4?Ht/.4:1,qt=Ht>.4?(Ht-.4)/.6:0;Ht<=.4?L.position.lerpVectors(X,fe,It):L.position.lerpVectors(fe,X,qt);let ut=Ht<=.35?Ht/.35:Ht<=.7?(.7-Ht)/.35:0;if(tt.rotation.y=-ut*1.1,!Pe&&Ht>=Mt&&(Pe=!0,O?(h.hp=Math.max(0,h.hp-N),li(h.x,h.y,String(N),!1),h.hp<=0&&(nt=!0),Ne(h),Ge.get(h.id)?bt=Ot:nt&&(Nn(h,d),nt=!1)):li(h.x,h.y,"MISS",!0)),bt!=null&&O){let St=Ge.get(h.id);if(St){let en=Math.min(1,(Ot-bt)/zt),Tn=1-en;Ms.copy($t).multiplyScalar(Kt*Tn),St.position.copy(vn).add(Ms),en>=1&&(St.position.copy(vn),bt=null,nt&&(Nn(h,d),nt=!1))}else bt=null,nt&&(Nn(h,d),nt=!1)}if(Ht<1)requestAnimationFrame(En);else{L.position.copy(X),tt.rotation.y=0;let St=bt==null;St&&nt&&(Nn(h,d),nt=!1),St?($n.shadowMap.enabled=!0,lt=!1,I&&setTimeout(()=>I(),0),P||setTimeout(sn?()=>ln():()=>Bt(),400)):requestAnimationFrame(En)}}lt=!0,$n.shadowMap.enabled=!1,requestAnimationFrame(En)}function Hf(d,h){let _=Ze(d,h);_.y+=.4;let b=new es(.1,12,12),I=new Pn({color:8930559,transparent:!0,opacity:.9}),P=new Ye(b,I);P.position.copy(_),n.add(P);let O=performance.now(),N=0;function L(X){N++,N%2===0&&kt();let q=X-O,fe=Math.min(1,q/Ct),G=fe*(2-fe);P.scale.setScalar(G*7.5),I.opacity=.9*(1-fe),fe<1?requestAnimationFrame(L):(n.remove(P),b.dispose(),I.dispose())}requestAnimationFrame(L)}function Ga(d,h,_,b,I){if(_.target==="enemy"&&h==null){setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),I&&I()},400);return}let O=(_.range??0)>2&&h!=null&&(h.x!==d.x||h.y!==d.y),N=!O&&h!=null&&(h.x!==d.x||h.y!==d.y);if(!O&&!N){lt=!0,Da(_.effectKey,d,h,b);let It=_.target==="self"||_.target==="ally",qt=_.target==="self"?d:h;It&&qt?pt(qt,()=>{setTimeout(()=>{lt=!1,b.updateTurnUI&&b.updateTurnUI(),I&&I()},400)}):setTimeout(()=>{lt=!1,b.updateTurnUI&&b.updateTurnUI(),I&&I()},400);return}if(N){let te=function(he){pe++,pe%2===0&&kt();let be=he-ge,me=Math.min(1,be/ze),Ae=me<=.4?me/.4:1,At=me>.4?(me-.4)/.6:0;me<=.4?It.position.lerpVectors(qt,St,Ae):It.position.lerpVectors(St,qt,At);let Et=me<=.35?me/.35:me<=.7?(.7-me)/.35:0;if(un.rotation.y=-Et*1.1,!Pi&&me>=Mt&&(Pi=!0,Da(_.effectKey,d,h,se),h.hp<=0&&(Nt=!0),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(h),Ge.get(h.id)&&_.target!=="ally"?dt=he:Nt&&(Nn(h,d),Nt=!1)),dt!=null){let Mn=Ge.get(h.id);if(Mn){let Tt=Math.min(1,(he-dt)/zt),In=1-Tt;Ms.copy(Vn).multiplyScalar(vi*In),Mn.position.copy(wn).add(Ms),Tt>=1&&(Mn.position.copy(wn),dt=null,Nt&&(Nn(h,d),Nt=!1))}else dt=null,Nt&&(Nn(h,d),Nt=!1)}me<1?requestAnimationFrame(te):(It.position.copy(qt),un.rotation.y=0,dt==null&&Nt&&(Nn(h,d),Nt=!1),dt==null?($n.shadowMap.enabled=!0,lt=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),I&&I()},400)):requestAnimationFrame(te))},It=Ge.get(d.id);if(!It||!It.userData.rightArm){lt=!0,Da(_.effectKey,d,h,b),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(h),setTimeout(()=>{lt=!1,b.updateTurnUI&&b.updateTurnUI(),I&&I()},400);return}lt=!0;let qt=Ze(d.x,d.y).clone(),ut=Ze(h.x,h.y).clone(),St=qt.clone().lerp(ut,.35),en=ut.x-qt.x,Tn=ut.z-qt.z;en*en+Tn*Tn>1e-6&&(It.rotation.y=Math.atan2(en,Tn));let wn=Ze(h.x,h.y).clone(),Vn=ut.clone().sub(qt).normalize(),vi=.4,un=It.userData.rightArm,Pi=!1,dt=null,Nt=!1,se={...b,handleUnitDeath:void 0},ge=performance.now(),pe=0;$n.shadowMap.enabled=!1,requestAnimationFrame(te);return}let L=Ze(d.x,d.y).clone(),X=Ze(h.x,h.y).clone(),q=new Os(.035,.035,.4,6),fe=new Pn({color:16763972}),G=new Ye(q,fe);G.position.copy(L),G.position.y+=.6;let ie=X.clone().sub(L).normalize();G.quaternion.setFromUnitVectors(new k(0,1,0),ie),n.add(G),lt=!0;let ye=Ge.get(d.id),xe=ye&&ye.userData.rightArm?ye.userData.rightArm:null;if(ye){let It=X.x-L.x,qt=X.z-L.z;It*It+qt*qt>1e-6&&(ye.rotation.y=Math.atan2(It,qt))}let Pe=G.position.clone(),Fe=X.clone();Fe.y+=.6;let tt=performance.now(),bt=Ze(h.x,h.y).clone(),nt=X.clone().sub(L).normalize(),vn=.4,$t=!1,Kt=null,gn=0,En=null,Ot=_.effectKey==="powerShot"?{...b,animateKnockback(It,qt,ut,St,en,Tn){En={targ:It,fromGx:qt,fromGy:ut,toGx:St,toGy:en,knockbackOnDone:Tn}}}:b;function rn(){$n.shadowMap.enabled=!0,lt=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),I&&I()},400)}function Ht(It){gn++,gn%2===0&&kt();let qt=It-tt,ut=Math.min(1,qt/fn);if(G.position.lerpVectors(Pe,Fe,ut),xe){let St=Math.sin(ut*Math.PI)*1.1;xe.rotation.y=-St}if(!$t&&ut>=1&&($t=!0,n.remove(G),q.dispose(),fe.dispose(),_.type==="spell"&&Hf(h.x,h.y),Da(_.effectKey,d,h,Ot),Ge.get(h.id)&&h.hp>0&&(Kt=It),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(h)),Kt!=null){let St=Ge.get(h.id);if(St){let en=Math.min(1,(It-Kt)/zt),Tn=1-en;if(Ms.copy(nt).multiplyScalar(vn*Tn),St.position.copy(bt).add(Ms),en>=1&&(St.position.copy(bt),Kt=null,En)){let{targ:wn,fromGx:Vn,fromGy:vi,toGx:un,toGy:Pi,knockbackOnDone:dt}=En;En=null,b.animateKnockback?b.animateKnockback(wn,Vn,vi,un,Pi,()=>{dt&&dt(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(wn),rn()}):rn();return}}else if(Kt=null,En){En=null,rn();return}}if(ut<1)requestAnimationFrame(Ht);else if(xe&&(xe.rotation.y=0),Kt==null)if(En){let{targ:St,fromGx:en,fromGy:Tn,toGx:wn,toGy:Vn,knockbackOnDone:vi}=En;En=null,b.animateKnockback?b.animateKnockback(St,en,Tn,wn,Vn,()=>{vi&&vi(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(St),rn()}):rn()}else rn();else requestAnimationFrame(Ht)}$n.shadowMap.enabled=!1,requestAnimationFrame(Ht)}function mn(){if(_n!=="playing"||!Ml(xn)||lt||Xe.length===0)return;let d=Xe[gt],h=le.find(se=>se.id===d);if(!h||h.hp<=0)return;let _=Re(h,"agi"),b=rl(e,h.x,h.y,_,le,h),I=new Set(le.filter(se=>se.hp>0&&se.id!==h.id).map(se=>se.y*e.w+se.x)),P=[];b.forEach((se,ge)=>{se!==0&&(I.has(ge)||P.push({gx:ge%e.w,gy:Math.floor(ge/e.w),dist:se}))});let O=Bf(h),N=Fh(),L=Ff(h.player),X=.25,q=.03,fe=h.maxHp>0&&h.hp/h.maxHp<X,G=h.maxHp>0&&h.hp/h.maxHp<q,ie=h.level===2,ye=N.filter(se=>!I.has(se.gy*e.w+se.gx)),xe=L.filter(se=>!I.has(se.gy*e.w+se.gx)),Pe=new Set(N.map(se=>se.gy*e.w+se.gx)),Fe=ye.length>0?ye:N,tt=xe.length>0?xe:L,bt=Fe.length>0?Tn(Fe):null,nt=tt.length>0?Tn(tt):null,vn=bl(h),$t=vn.filter(se=>!se.disabled&&h.mp>=se.cost&&se.target==="enemy"),Kt=$t.length>0?Math.max(...$t.map(se=>se.range||0)):0,gn=Math.max(h.range!=null?h.range:1,Kt),En=h.level>=2&&gn>=2,Ot=le.filter(se=>se.hp>0&&se.player!==h.player),rn=le.filter(se=>se.hp>0&&se.player===h.player&&se.id!==h.id);function Ht(se,ge){if(ge.length===0)return null;let pe=null,te=1/0;for(let he of se){let be=0;for(let me of ge)be+=_i(he.gx,he.gy,me.gx,me.gy);be<te&&(te=be,pe=he)}return pe}function It(se,ge){if(ge.length===0||se.length===0)return null;let pe=null,te=1/0;for(let he of se){let be=Math.min(...ge.map(me=>_i(he.gx,he.gy,me.gx,me.gy)));be<te&&(te=be,pe=he)}return pe}function qt(se,ge){let pe=gn,te=[];for(let he of le){if(he.hp<=0||he.player===h.player)continue;let be=_i(se,ge,he.x,he.y);be<=pe&&be>0&&ar(e,se,ge,he.x,he.y)&&te.push({target:he,dist:be})}return te}let ut=new Set(P.map(se=>se.gy*e.w+se.gx));function St(se,ge){if(!se||se.length<=1)return null;let pe=Math.min(ge,se.length-1);for(let te=pe;te>=1;te--){let he=se[te],be=he.y*e.w+he.x;if(ut.has(be))return{gx:he.x,gy:he.y}}return null}function en(se,ge){if(!se||se.length<=1)return null;let pe=Math.min(ge,se.length-1);for(let te=pe;te>=1;te--){let he=se[te];if(!I.has(he.y*e.w+he.x))return{gx:he.x,gy:he.y}}return null}function Tn(se){let ge=null,pe=null,te=1/0;for(let he of se){let be=ks(e,h.x,h.y,he.gx,he.gy,le,h);be&&be.length>1&&be.length<te&&(te=be.length,ge=be,pe=he)}return ge&&pe?{path:ge,target:pe}:null}function wn(se){let ge=se??P;if(ge.length===0)return null;if(Ot.length===0)return ge[0];let pe=null,te=-1;for(let he of ge){let be=Math.min(...Ot.map(me=>_i(he.gx,he.gy,me.x,me.y)));be>te&&(te=be,pe=he)}return pe}function Vn(se){let ge=se??P;if(ge.length===0)return null;if(Ot.length===0)return ge[0];let pe=h.maxHp>0&&h.hp/h.maxHp>=.6,te=null,he=-1/0;for(let be of ge){let me=Math.min(...Ot.map(Et=>_i(be.gx,be.gy,Et.x,Et.y))),Ae=rn.length>0?Math.min(...rn.map(Et=>_i(be.gx,be.gy,Et.x,Et.y))):999,At;pe?At=Ae<me?me-1e3:me:At=me-Ae,At>he&&(he=At,te=be)}return te}function vi(){let se=gn;if(Ot.length===0)return null;let ge=null,pe=-1;for(let te of P){let he=Math.min(...Ot.map(me=>_i(te.gx,te.gy,me.x,me.y)));Ot.some(me=>_i(te.gx,te.gy,me.x,me.y)<=se)&&he>pe&&(pe=he,ge=te)}return ge}let un=new Map;for(let se of P){let ge=se.gy*e.w+se.gx;un.has(ge)||un.set(ge,qt(se.gx,se.gy))}let Pi=O.some(se=>se.target.maxHp>0&&se.target.hp/se.target.maxHp<X),dt=Pi||P.some(se=>(un.get(se.gy*e.w+se.gx)||[]).some(pe=>pe.target.maxHp>0&&pe.target.hp/pe.target.maxHp<X));if(Xt){if(sn){setTimeout(()=>ln(),400);return}if(En&&Ot.length>0&&oe.size>0&&P.length>0){let he=[];oe.forEach((me,Ae)=>{he.push({gx:Ae%e.w,gy:Math.floor(Ae/e.w)})});let be=Tn(he);if(be){let me=en(be.path,_);if(me&&(me.gx!==h.x||me.gy!==h.y)){Vt(h,me.gx,me.gy,()=>setTimeout(ln,400));return}let Ae=It(P,he);if(Ae&&(Ae.gx!==h.x||Ae.gy!==h.y)){Vt(h,Ae.gx,Ae.gy,()=>setTimeout(ln,400));return}}}if(ms-zn<=20&&N.length>0){let he=N.some(be=>be.gx===h.x&&be.gy===h.y);if(he&&P.length>0){let me=P.filter(Ae=>Pe.has(Ae.gy*e.w+Ae.gx)).filter(Ae=>Ae.gx!==h.x||Ae.gy!==h.y);if(me.length>0){let Ae=wn(me);if(Ae&&(Ae.gx!==h.x||Ae.gy!==h.y)){Vt(h,Ae.gx,Ae.gy,()=>setTimeout(ln,400));return}}setTimeout(()=>ln(),400);return}if(he){setTimeout(()=>ln(),400);return}if(P.length>0){let be=bt,me=be?en(be.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Vt(h,me.gx,me.gy,()=>setTimeout(ln,400));return}let Ae=It(P,Fe);if(Ae&&(Ae.gx!==h.x||Ae.gy!==h.y)){Vt(h,Ae.gx,Ae.gy,()=>setTimeout(ln,400));return}}setTimeout(()=>ln(),400);return}if(!fe&&P.length>0){if(ie&&L.length>0&&!L.some(be=>be.gx===h.x&&be.gy===h.y)){let be=nt,me=be?en(be.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Vt(h,me.gx,me.gy,()=>setTimeout(ln,400));return}let Ae=It(P,tt);if(Ae&&(Ae.gx!==h.x||Ae.gy!==h.y)){Vt(h,Ae.gx,Ae.gy,()=>setTimeout(ln,400));return}}if(N.length>0&&!N.some(be=>be.gx===h.x&&be.gy===h.y)){let be=bt,me=be?en(be.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Vt(h,me.gx,me.gy,()=>setTimeout(ln,400));return}let Ae=It(P,Fe);if(Ae&&(Ae.gx!==h.x||Ae.gy!==h.y)){Vt(h,Ae.gx,Ae.gy,()=>setTimeout(ln,400));return}}}let ge=N.length>0?P.filter(he=>Pe.has(he.gy*e.w+he.gx)):null,pe=ge!=null&&ge.length>0?ge:P,te=null;if(pe.length>0&&rn.length>0&&(te=Vn(pe),te)){let he=ks(e,h.x,h.y,te.gx,te.gy,le,h),be=he?he.length-1:1/0;(!he||he.length<=1||be>_)&&(te=wn(pe))}if(!te&&pe.length>0&&(te=wn(pe)),te&&(te.gx!==h.x||te.gy!==h.y)){Vt(h,te.gx,te.gy,()=>setTimeout(ln,400));return}setTimeout(()=>ln(),400);return}if(G&&ms-zn>20&&!sn&&P.length>0){let se=null,ge=1/0;for(let te of P){let be=(un.get(te.gy*e.w+te.gx)||[]).filter(me=>me.target.maxHp>0&&me.target.hp/me.target.maxHp<X);if(be.length>0){let me=Math.min(...be.map(Ae=>Ae.target.hp));me<ge&&(ge=me,se=te)}}if(se){let te=ks(e,h.x,h.y,se.gx,se.gy,le,h),he=te?St(te,_):null;if(he&&(he.gx!==h.x||he.gy!==h.y)){Vt(h,he.gx,he.gy,()=>setTimeout(mn,600));return}}let pe=wn();if(pe&&(pe.gx!==h.x||pe.gy!==h.y)){Vt(h,pe.gx,pe.gy,()=>setTimeout(mn,600));return}setTimeout(()=>ln(),400);return}if(!Xt){let Et=function(Rt){return ra(h,Rt,le).filter(Wt=>Wt.targetUnit!=null).map(Wt=>Wt.targetUnit)},se=vn,ge=h.maxHp>0?h.hp/h.maxHp:1,pe=.35,te=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct","bloodSuck"]),he=new Set(["chakra","sacrifice"]),be=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),me=new Set(["impale","poison","gaze","debilitate"]),Ae=new Set(["dominate","manaDrain","weaken","cripple","hex","blind","raid"]),At=new Set(["reanimate"]),Mn={showFloatingCombatText:li,handleUnitDeath:Nn,updateUnitSlashVisibility:Ne,updateTurnUI:Bt,tryCollectPowerup:Ke,world:e,units:le,updateUnitPosition(Rt){let Gt=Ge.get(Rt.id);Gt&&Gt.position.copy(Ze(Rt.x,Rt.y))},animateKnockback(Rt,Gt,Wt,an,Kn,dn){let Bn=Ge.get(Rt.id);if(!Bn){dn&&dn();return}let yr=Ze(Gt,Wt).clone(),Xs=Ze(an,Kn).clone(),Al=performance.now(),Xh=0;function qh(ep){Xh++,Xh%2===0&&kt();let Yh=Math.min(1,(ep-Al)/Fs),tp=Rl=>Rl*Rl*(3-2*Rl);Bn.position.lerpVectors(yr,Xs,tp(Yh)),Yh<1?requestAnimationFrame(qh):(Bn.position.copy(Xs),dn&&dn())}requestAnimationFrame(qh)}},Tt=null,In=null,Mi=Pi||!sn&&dt;if(!Mi){for(let Gt of se)if(!(Gt.disabled||h.mp<Gt.cost)&&he.has(Gt.effectKey)){let an=ra(h,Gt,le).filter(Kn=>Kn.targetUnit&&Kn.targetUnit.maxHp>0&&Kn.targetUnit.hp/Kn.targetUnit.maxHp<.5);if(an.length>0){let Kn=an.sort((dn,Bn)=>dn.targetUnit.hp-Bn.targetUnit.hp)[0].targetUnit;Tt=Gt,In=Kn;break}}}if(!Tt&&!Mi){let Rt=le.filter(Gt=>Gt.hp<=0);for(let Gt of se)if(!(Gt.disabled||h.mp<Gt.cost)&&At.has(Gt.effectKey)&&Rt.length>0){Tt=Gt,In=h;break}}if(!Tt&&!Mi&&(O.length>0||P.some(Gt=>(un.get(Gt.gy*e.w+Gt.gx)||[]).length>0))){let Gt=se.filter(Wt=>!Wt.disabled&&be.has(Wt.effectKey)).sort((Wt,an)=>(an.level||1)-(Wt.level||1));for(let Wt of Gt){let an=h.tempBuff&&h.tempBuff.duration>0;if(Wt.target==="self"){if(Wt.effectKey==="bloodlust"&&h.hp/h.maxHp>.8)continue;if(!an){Tt=Wt,In=h;break}}if(Wt.target==="ally"){if(Wt.effectKey==="forge"&&an||Wt.effectKey==="fortify"&&an||Wt.effectKey==="mantra"&&an||Wt.effectKey==="sanctuary"&&an)continue;let dn=ra(h,Wt,le).filter(Bn=>Bn.targetUnit!=null).map(Bn=>Bn.targetUnit);if(dn.length>0){let Bn=dn.filter(Xs=>!Xs.tempBuff||Xs.tempBuff.duration<=0),yr=(Bn.length>0?Bn:dn).sort((Xs,Al)=>Xs.hp-Al.hp)[0];Tt=Wt,In=yr;break}}}}if(!Tt){for(let Rt of se)if(!(Rt.disabled||h.mp<Rt.cost)&&te.has(Rt.effectKey)){if(Rt.effectKey==="feast"&&h.hp/h.maxHp>.7||Rt.effectKey==="berserk"&&h.hp/h.maxHp<.25||Rt.effectKey==="shuriken"&&O.length>0||Rt.effectKey==="judgement"&&h.hp/h.maxHp>.7)continue;let Gt=Et(Rt);if(Gt.length===0)continue;let Wt=Gt.filter(dn=>dn.maxHp>0&&dn.hp/dn.maxHp<pe),an=Wt.length>0?Wt:Gt,Kn=Rt.type==="spell"?an.reduce((dn,Bn)=>{if(!dn)return Bn;let yr=Re(Bn,"int")-Re(dn,"int");return yr<0||yr===0&&Bn.hp<dn.hp?Bn:dn},null):an.reduce((dn,Bn)=>!dn||Bn.hp<dn.hp?Bn:dn,null);Tt=Rt,In=Kn;break}}if(!Tt&&!Mi){for(let Rt of se)if(!(Rt.disabled||h.mp<Rt.cost)&&Ae.has(Rt.effectKey)){let Gt=Et(Rt),Wt=Gt.length>0?Gt.reduce((an,Kn)=>!an||Kn.hp<an.hp?Kn:an,null):null;Tt=Rt,In=Wt;break}}if(!Tt&&!Mi){for(let Rt of se)if(!(Rt.disabled||h.mp<Rt.cost)&&me.has(Rt.effectKey)){let Wt=Et(Rt).filter(an=>!an.tempDebuff||an.tempDebuff.duration<=0);if(Wt.length>0){let an=Wt.reduce((Kn,dn)=>!Kn||dn.hp<Kn.hp?dn:Kn,null);Tt=Rt,In=an;break}}}if(Tt&&In){h.mp-=Tt.cost,Xt=!0;let Rt=Tt.target==="self"?h:In;Ga(h,Rt,Tt,Mn,()=>setTimeout(mn,600));return}}if(kf(h,Ot,rn)&&O.length>0){O.sort((ge,pe)=>ge.target.hp-pe.target.hp||ge.dist-pe.dist);let se=O[0].target;Va(h,se);return}if(O.length>0){O.sort((ge,pe)=>ge.target.hp-pe.target.hp||ge.dist-pe.dist);let se=O[0].target;Va(h,se);return}if(!sn&&!dt&&oe.size>0&&P.length>0){let se=[];oe.forEach((pe,te)=>{se.push({gx:te%e.w,gy:Math.floor(te/e.w)})});let ge=Tn(se);if(ge){let pe=en(ge.path,_);if(pe&&(pe.gx!==h.x||pe.gy!==h.y)){Vt(h,pe.gx,pe.gy,()=>setTimeout(mn,600));return}let te=It(P,se);if(te&&(te.gx!==h.x||te.gy!==h.y)){Vt(h,te.gx,te.gy,()=>setTimeout(mn,600));return}}}let Nt=ms-zn;if(Nt<=20&&N.length>0&&!sn&&P.length>0&&!N.some(ge=>ge.gx===h.x&&ge.gy===h.y)){let ge=bt,pe=ge?ge.path:null,te=N.length>0?Math.min(...N.map(Tt=>_i(h.x,h.y,Tt.gx,Tt.gy))):1/0,he=new Map,be=new Map;for(let Tt of P){let In=Tt.gy*e.w+Tt.gx;he.set(In,N.length>0?Math.min(...N.map(Mi=>_i(Tt.gx,Tt.gy,Mi.gx,Mi.gy))):1/0),be.set(In,pe?pe.findIndex(Mi=>Mi.x===Tt.gx&&Mi.y===Tt.gy):-1)}let me=null,Ae=-1,At=X;for(let Tt of P){let In=Tt.gy*e.w+Tt.gx;if(he.get(In)>te||(un.get(In)||[]).filter(an=>an.target.maxHp>0&&an.target.hp/an.target.maxHp<At).length===0)continue;let Gt=be.get(In),Wt=Gt>=0?Gt:0;Wt>Ae&&(Ae=Wt,me=Tt)}if(me&&(me.gx!==h.x||me.gy!==h.y)){Vt(h,me.gx,me.gy,()=>setTimeout(mn,600));return}let Et=ge?en(ge.path,_):null;if(Et&&(Et.gx!==h.x||Et.gy!==h.y)){Vt(h,Et.gx,Et.gy,()=>setTimeout(mn,600));return}let Mn=It(P,Fe);if(Mn&&(Mn.gx!==h.x||Mn.gy!==h.y)){Vt(h,Mn.gx,Mn.gy,()=>setTimeout(mn,600));return}}if(fe&&P.length>0&&!sn){let se=null,ge=1/0;for(let pe of P){let he=(un.get(pe.gy*e.w+pe.gx)||[]).filter(be=>be.target.maxHp>0&&be.target.hp/be.target.maxHp<X);if(he.length>0){let be=Math.min(...he.map(me=>me.target.hp));be<ge&&(ge=be,se=pe)}}if(se){let pe=ks(e,h.x,h.y,se.gx,se.gy,le,h),te=pe?St(pe,_):null;if(te&&(te.gx!==h.x||te.gy!==h.y)){Vt(h,te.gx,te.gy,()=>setTimeout(mn,600));return}}if(Nt>20&&ie&&L.length>0&&!L.some(te=>te.gx===h.x&&te.gy===h.y)){let te=xe.length>0?xe:L,he=nt;if(he!=null&&he.path.length<=5){let me=en(he.path,_);if(me&&(me.gx!==h.x||me.gy!==h.y)){Vt(h,me.gx,me.gy,()=>setTimeout(mn,600));return}let Ae=It(P,te);if(Ae&&(Ae.gx!==h.x||Ae.gy!==h.y)){Vt(h,Ae.gx,Ae.gy,()=>setTimeout(mn,600));return}}}if(Nt>20){let pe=wn();if(pe&&_i(h.x,h.y,pe.gx,pe.gy)>0){Vt(h,pe.gx,pe.gy,()=>setTimeout(mn,600));return}setTimeout(()=>ln(),400);return}}if(Nt<=10&&N.length>0&&!sn&&P.length>0&&!N.some(ge=>ge.gx===h.x&&ge.gy===h.y)){let ge=ye.length>0?ye:N,pe=bt,te=pe?en(pe.path,_):null;if(te&&(te.gx!==h.x||te.gy!==h.y)){Vt(h,te.gx,te.gy,()=>setTimeout(mn,600));return}let he=It(P,ge);if(he&&(he.gx!==h.x||he.gy!==h.y)){Vt(h,he.gx,he.gy,()=>setTimeout(mn,600));return}}if(h.level===1&&N.length>0&&!sn&&!N.some(ge=>ge.gx===h.x&&ge.gy===h.y)&&P.length>0){let ge=ye.length>0?ye:N,pe=bt,te=pe?en(pe.path,_):null;if(te&&(te.gx!==h.x||te.gy!==h.y)){Vt(h,te.gx,te.gy,()=>setTimeout(mn,600));return}let he=It(P,ge);if(he&&(he.gx!==h.x||he.gy!==h.y)){Vt(h,he.gx,he.gy,()=>setTimeout(mn,600));return}}if(ie&&L.length>0&&!sn&&!L.some(ge=>ge.gx===h.x&&ge.gy===h.y)&&P.length>0){let ge=Ot.filter(At=>At.maxHp>0&&At.hp/At.maxHp<X),pe=null,te=1/0;for(let At of P){let Mn=(un.get(At.gy*e.w+At.gx)||[]).find(Tt=>ge.some(In=>In.id===Tt.target.id));Mn&&Mn.target.hp<te&&(te=Mn.target.hp,pe=At)}if(pe){let At=ks(e,h.x,h.y,pe.gx,pe.gy,le,h),Et=At?St(At,_):null;if(Et&&(Et.gx!==h.x||Et.gy!==h.y)){Vt(h,Et.gx,Et.gy,()=>setTimeout(mn,600));return}}let he=xe.length>0?xe:L,be=nt,me=be?en(be.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Vt(h,me.gx,me.gy,()=>setTimeout(mn,600));return}let Ae=It(P,he);if(Ae&&(Ae.gx!==h.x||Ae.gy!==h.y)){Vt(h,Ae.gx,Ae.gy,()=>setTimeout(mn,600));return}}if(En&&Ot.length>0&&!sn&&P.length>0){if(!dt&&oe.size>0){let ge=[];oe.forEach((te,he)=>{ge.push({gx:he%e.w,gy:Math.floor(he/e.w)})});let pe=Tn(ge);if(pe){let te=en(pe.path,_);if(te&&(te.gx!==h.x||te.gy!==h.y)){Vt(h,te.gx,te.gy,()=>setTimeout(mn,600));return}let he=It(P,ge);if(he&&(he.gx!==h.x||he.gy!==h.y)){Vt(h,he.gx,he.gy,()=>setTimeout(mn,600));return}}}let se=vi();if(se&&(se.gx!==h.x||se.gy!==h.y)){Vt(h,se.gx,se.gy,()=>setTimeout(mn,600));return}}if(Ot.length>0&&!sn&&P.length>0){let ge=function(te,he){let be=null;for(let me=-se;me<=se;me++)for(let Ae=-se;Ae<=se;Ae++){if(Ae===0&&me===0||Math.abs(Ae)+Math.abs(me)>se)continue;let At=te.x+Ae,Et=te.y+me;if(At<0||At>=e.w||Et<0||Et>=e.h||!or(e,At,Et)||!ar(e,At,Et,te.x,te.y)||le.some(Rt=>Rt.hp>0&&Rt.x===At&&Rt.y===Et))continue;let Tt=ks(e,h.x,h.y,At,Et,le,h),In=Tt?Tt.length-1:1/0;Tt&&Tt.length>1&&(!he||In<=_)&&(!be||Tt.length<be.length)&&(be=Tt)}return be},se=gn,pe=[];for(let te of Ot){let he=ge(te,!0);he&&pe.push({enemy:te,path:he})}if(pe.length>0){let te=pe.filter(Ae=>Ae.enemy.maxHp>0&&Ae.enemy.hp/Ae.enemy.maxHp<X),he=te.length>0?te:pe;te.length>0?he.sort((Ae,At)=>Ae.enemy.hp-At.enemy.hp||Ae.path.length-At.path.length):he.sort((Ae,At)=>Ae.path.length-At.path.length||Ae.enemy.hp-At.enemy.hp);let be=he[0],me=St(be.path,_);if(me&&(me.gx!==h.x||me.gy!==h.y)){Vt(h,me.gx,me.gy,()=>setTimeout(mn,600));return}}if(pe.length===0){let te=null,he=1/0;for(let be of Ot){let me=ge(be,!1);me&&me.length<he&&(he=me.length,te=me)}if(te){let be=St(te,_);if(be&&(be.gx!==h.x||be.gy!==h.y)){Vt(h,be.gx,be.gy,()=>setTimeout(mn,600));return}}}}setTimeout(()=>ln(),400)}function Un(){for(ai.length=0;pn.children.length;){let d=pn.children[0];pn.remove(d),d.geometry!==aa&&d.geometry!==oa&&d.geometry.dispose(),d.material.dispose()}kt()}let mr=new Set;function bl(d){return d?(d.summonedSkills&&d.summonedSkills.length>0?d.summonedSkills:d.class&&jr[d.class]?jr[d.class]:[]).map(_=>({..._,disabled:_.disabled===!0||d.level<(_.level||1)||_.hpCost&&d.hp<_.hpCost||_.cost!=null&&d.mp<_.cost})):[]}function ra(d,h,_){let b=[],I=(O,N,L,X)=>Math.abs(O-L)+Math.abs(N-X),P=h.range||0;if(h.target==="self")return b.push({gx:d.x,gy:d.y,targetUnit:null}),b;for(let O of _)O.hp<=0||I(d.x,d.y,O.x,O.y)>P||P>=2&&!ar(e,d.x,d.y,O.x,O.y)||(h.target==="enemy"&&O.player!==d.player&&b.push({gx:O.x,gy:O.y,targetUnit:O}),h.target==="ally"&&O.player===d.player&&b.push({gx:O.x,gy:O.y,targetUnit:O}));return b}function zf(d,h){let _=h.range||0;if(h.target==="self")return[{gx:d.x,gy:d.y}];let b=nf(e,d.x,d.y,_),I=[];return b.forEach((P,O)=>{let N=O%e.w,L=O/e.w|0;_>=2&&!ar(e,d.x,d.y,N,L)||I.push({gx:N,gy:L})}),I}function Vf(d,h){let _=ra(d,h,le);mr=new Set(_.map(I=>`${I.gx},${I.gy}`));let b=h.target==="self"?_:zf(d,h);Un(),b.forEach(({gx:I,gy:P})=>{let N=(ei+e.height[P][I]*.35)/2+ei/2,L=I*xt-Je+xt/2,X=P*xt-He+xt/2,q=N+.01,fe=new Pn({color:8926122,transparent:!0,opacity:.4,side:An}),G=new Ye(aa,fe);G.rotation.x=-Math.PI/2,G.position.set(L,q,X),pn.add(G),ai.push(fe);let ie=new Pn({color:11167436,transparent:!0,opacity:.7,side:An}),ye=new Ye(oa,ie);ye.rotation.x=-Math.PI/2,ye.position.set(L,q+.01,X),ye.userData.gx=I,ye.userData.gy=P,pn.add(ye),ai.push(ie)})}let Bh=.82,kh=1.02,aa=new Qi(kh,kh),oa=new Qi(Bh,Bh);function Gf(d){Un(),d.forEach(({gx:h,gy:_})=>{let I=(ei+e.height[_][h]*.35)/2+ei/2,P=h*xt-Je+xt/2,O=_*xt-He+xt/2,N=I+.01,L=new Pn({color:2271812,transparent:!0,opacity:.4,side:An}),X=new Ye(aa,L);X.rotation.x=-Math.PI/2,X.position.set(P,N,O),pn.add(X),ai.push(L);let q=new Pn({color:4508774,transparent:!0,opacity:.7,side:An}),fe=new Ye(oa,q);fe.rotation.x=-Math.PI/2,fe.position.set(P,N+.01,O),fe.userData.gx=h,fe.userData.gy=_,pn.add(fe),ai.push(q)}),kt()}function Sl(d){Un(),d.forEach((h,_)=>{if(h===0)return;let b=_%e.w,I=_/e.w|0,O=(ei+e.height[I][b]*.35)/2+ei/2,N=b*xt-Je+xt/2,L=I*xt-He+xt/2,X=O+.01,q=new Pn({color:3381759,transparent:!0,opacity:.35,side:An}),fe=new Ye(aa,q);fe.rotation.x=-Math.PI/2,fe.position.set(N,X,L),pn.add(fe),ai.push(q);let G=new Pn({color:6730751,transparent:!0,opacity:.65,side:An}),ie=new Ye(oa,G);ie.rotation.x=-Math.PI/2,ie.position.set(N,X+.01,L),pn.add(ie),ai.push(G)}),kt()}function Wf(d){Un(),d.forEach((h,_)=>{if(h===0)return;let b=_%e.w,I=_/e.w|0,O=(ei+e.height[I][b]*.35)/2+ei/2,N=b*xt-Je+xt/2,L=I*xt-He+xt/2,X=O+.01,q=new Pn({color:10035746,transparent:!0,opacity:.4,side:An}),fe=new Ye(aa,q);fe.rotation.x=-Math.PI/2,fe.position.set(N,X,L),pn.add(fe),ai.push(q);let G=new Pn({color:13386820,transparent:!0,opacity:.7,side:An}),ie=new Ye(oa,G);ie.rotation.x=-Math.PI/2,ie.position.set(N,X+.01,L),pn.add(ie),ai.push(G)}),kt()}let _s=new Qo,vs=new ke;function Wa(d,h){let _=t.getBoundingClientRect();return vs.x=(d-_.left)/_.width*2-1,vs.y=-((h-_.top)/_.height)*2+1,{x:vs.x,y:vs.y}}function Xf(d,h){if(lt)return;vs.x=d,vs.y=h,_s.setFromCamera(vs,a);let _=_s.intersectObjects(ae.children,!0);if(_.length===0)return;let b=null;for(let N of _){let L=N.object;for(;L&&(L.userData.gx==null||L.userData.gy==null);)L=L.parent;if(L&&L.userData.gx!=null){b=L;break}}if(!b||b.userData.gx==null)return;let I=b.userData.gx,P=b.userData.gy;if(_n==="draft"&&Qe){let N=P*e.w+I;ht.has(N)&&dl(I,P);return}if(_n!=="playing"||mt==="cvcpu")return;if(Fi&&Sn){let N=Xe[gt],L=le.find(ie=>ie.id===N&&ie.hp>0);if(L&&I===L.x&&P===L.y){Fi=!1,Sn=null,mr=new Set,Un(),sn?Qt=new Map:(Qt=rl(e,L.x,L.y,Re(L,"agi"),le,L),Sl(Qt)),Bt();return}let X=`${I},${P}`;if(!mr.has(X))return;if(!L||L.mp<Sn.cost){Fi=!1,Sn=null,Un(),Bt();return}let q=le.find(ie=>ie.x===I&&ie.y===P&&ie.hp>0);if(Sn.target==="enemy"&&(!q||q.player===L.player)||Sn.target==="ally"&&q&&q.player!==L.player||Sn.target==="self"&&(I!==L.x||P!==L.y)||Sn.target==="enemy"&&!q)return;L.mp-=Sn.cost,Xt=!0;let fe={showFloatingCombatText:li,handleUnitDeath:Nn,updateUnitSlashVisibility:Ne,updateTurnUI:Bt,tryCollectPowerup:Ke,world:e,units:le,reanimateDeadUnit:Na,updateUnitPosition(ie){let ye=Ge.get(ie.id);ye&&ye.position.copy(Ze(ie.x,ie.y))},animateKnockback(ie,ye,xe,Pe,Fe,tt){let bt=Ge.get(ie.id);if(!bt){tt&&tt();return}let nt=Ze(ye,xe).clone(),vn=Ze(Pe,Fe).clone(),$t=performance.now(),Kt=0;function gn(En){Kt++,Kt%2===0&&kt();let Ot=Math.min(1,(En-$t)/Fs),rn=Ht=>Ht*Ht*(3-2*Ht);bt.position.lerpVectors(nt,vn,rn(Ot)),Ot<1?requestAnimationFrame(gn):(bt.position.copy(vn),tt&&tt())}requestAnimationFrame(gn)}},G=Sn.target==="self"?L:q||null;mt==="online"&&L.player===nn&&typeof cn=="function"&&(cn({type:"requestRender"}),Ws({type:"skill",unitId:L.id,targetId:G?G.id:void 0,effectKey:Sn.effectKey})),Ga(L,G,Sn,fe,()=>{Un(),Fi=!1,Sn=null,mr=new Set,sn?ln():Bt()});return}if(ti){let N=Xe[gt],L=le.find(q=>q.id===N);if(mt==="online"&&L&&L.player!==nn)return;let X=Ge.get(N);if(L&&X&&ni.length>0){let q=Ze(L.x,L.y),fe=Ze(I,P),G=fe.x-q.x,ie=fe.z-q.z,ye=G*G+ie*ie>1e-6?Math.atan2(G,ie):X.rotation.y;X.rotation.y=gh(ye)}setTimeout(()=>ln(),400);return}if(Ut!=null&&Yn){let N=le.find(q=>q.id===Ut);if(!N||N.player!==xn||mt==="online"&&N.player!==nn)return;let L=P*e.w+I,X=le.find(q=>q.x===I&&q.y===P&&q.hp>0);if(X&&X.id===Xe[gt]&&X.player===xn&&(mt!=="online"||X.player===nn)){Yn=!1,Ut=X.id,sn?(Un(),Qt=new Map):(Qt=rl(e,X.x,X.y,Re(X,"agi"),le,X),Sl(Qt)),Bt();return}if(!Qt.has(L)||Qt.get(L)===0)return;X&&X.player!==xn&&Va(N,X);return}let O=le.find(N=>N.x===I&&N.y===P&&N.hp>0);if(O){if(O.id===Xe[gt]&&O.player===xn&&(mt!=="online"||O.player===nn)){is(),Ut=O.id,Yn=!1,sn?(Un(),Qt=new Map):(Qt=rl(e,I,P,Re(O,"agi"),le,O),Sl(Qt)),Bt();return}Un(),Qt=new Map,Yn=!1,Pt(O),Bt();return}if(is(),Ut!=null){let ie=function(){if(G>=q.length){N.x=q[q.length-1].x,N.y=q[q.length-1].y,Ke(N),lt=!1,$e(fe),Ri(),Qt=new Map,sn=!0,mt==="online"&&N.player===nn&&typeof cn=="function"&&(cn({type:"move",unitId:N.id,toGx:N.x,toGy:N.y}),xl=!1,If()),setTimeout(Xt?()=>ln():()=>Bt(),400);return}let ye=q[G-1],xe=q[G],Pe=Ze(ye.x,ye.y).clone(),Fe=Ze(xe.x,xe.y).clone(),tt=Fe.x-Pe.x,bt=Fe.z-Pe.z;tt*tt+bt*bt>1e-6&&(fe.rotation.y=Math.atan2(tt,bt));let nt=performance.now(),vn=0;function $t(Kt){vn++,vn%2===0&&kt();let gn=Math.min(1,(Kt-nt)/Fs),Ot=(rn=>rn*rn*(3-2*rn))(gn);if(fe.position.lerpVectors(Pe,Fe,Ot),Ee(fe,Ot),g){let rn=a.position.distanceTo(u),Ht=rn<.1?o:rn;m.copy(a.position).sub(u).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),u.lerp(fe.position,l),a.position.copy(u).add(m.clone().multiplyScalar(Ht)),a.lookAt(u)}gn<1?requestAnimationFrame($t):(G++,ie())}requestAnimationFrame($t)};if(Yn)return;let N=le.find(ye=>ye.id===Ut);if(!N||N.player!==xn||mt==="online"&&N.player!==nn)return;let L=P*e.w+I;if(!Qt.has(L)||Qt.get(L)===0||le.some(ye=>ye.id!==N.id&&ye.x===I&&ye.y===P&&ye.hp>0)||lt||sn)return;let q=ks(e,N.x,N.y,I,P,le,N);if(!q||q.length<=1)return;mt==="online"&&N.player===nn&&typeof cn=="function"&&(cn({type:"requestRender"}),xl=!0),Ut=null,Un(),lt=!0,g=!0,Ri(N.id);let fe=Ge.get(N.id),G=1;ie()}}function Hh(d){T.x=d.clientX,T.y=d.clientY,R=d.isTouch===!0,S=d.ctrlKey,v=Wa(d.clientX,d.clientY),t.style.cursor=(d.ctrlKey,"grabbing")}function El(d){return d.touches&&d.touches.length>0?{clientX:d.touches[0].clientX,clientY:d.touches[0].clientY}:d.changedTouches&&d.changedTouches.length>0?{clientX:d.changedTouches[0].clientX,clientY:d.changedTouches[0].clientY}:{clientX:d.clientX,clientY:d.clientY}}function zh(d){if(!d||d.length<2)return 0;let h=d[0],_=d[1];return Math.hypot(_.clientX-h.clientX,_.clientY-h.clientY)}function qf(d){if(d.touches.length===2){z=zh(d.touches),v=null;return}if(d.touches.length!==1)return;z=null;let h=El(d);Hh({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1,isTouch:!0})}function Yf(d){if(d.touches.length===2){d.preventDefault();let _=zh(d.touches);if(z!=null&&z>0){let b=_-z,I=a.position.distanceTo(u),P=Math.max(K,Math.min(ce,I-b*B));x.copy(u).sub(a.position).normalize(),a.position.copy(u).sub(x.multiplyScalar(P)),a.lookAt(u),Bi=performance.now()}z=_;return}if(z=null,d.touches.length!==1)return;d.preventDefault();let h=El(d);Vh({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1})}function $f(d){if(d.touches.length<2&&(z=null),d.touches.length===2||d.changedTouches.length===0)return;R=!1;let h=El(d);Tl({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1})}function Vh(d){if(ti){gf(d.clientX,d.clientY);return}if(v==null)return;let h=d.clientX-T.x,_=d.clientY-T.y;if(!M&&!y&&(Math.abs(h)>A||Math.abs(_)>A)&&(d.ctrlKey||S?(y=!0,g=!1):(M=!0,g=!1)),y){$.copy(a.position).sub(u);let b=$.length();if(b<.001)return;let I=Math.atan2($.x,$.z),P=Math.asin(Math.max(-1,Math.min(1,$.y/b)));I-=h*F,P+=_*F,P=Math.max(D,Math.min(U,P)),$.x=b*Math.cos(P)*Math.sin(I),$.y=b*Math.sin(P),$.z=b*Math.cos(P)*Math.cos(I),a.position.copy(u).add($),a.lookAt(u),T.x=d.clientX,T.y=d.clientY,Bi=performance.now()}else if(M){let b=Wa(d.clientX,d.clientY);p.setFromNormalAndCoplanarPoint(new k(0,1,0),new k(0,u.y,0)),_s.setFromCamera(new ke(v.x,v.y),a),_s.ray.intersectPlane(p,f);let I=f.clone();_s.setFromCamera(new ke(b.x,b.y),a),_s.ray.intersectPlane(p,f);let P=I.sub(f);R&&P.multiplyScalar(Y),u.add(P),a.position.add(P),a.lookAt(u),v={x:b.x,y:b.y},Bi=performance.now()}}function Tl(d){if(v!=null&&!M&&!y){let h=Wa(d.clientX,d.clientY);Xf(h.x,h.y)}v=null,M=!1,y=!1,S=!1,t.style.cursor="grab"}function Kf(d){d.preventDefault();let h=a.position.distanceTo(u),_=Math.max(K,Math.min(ce,h+d.deltaY*Me));x.copy(u).sub(a.position).normalize(),a.position.copy(u).sub(x.multiplyScalar(_)),a.lookAt(u),Bi=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",Hh),t.addEventListener("mousemove",Vh),t.addEventListener("mouseup",Tl),t.addEventListener("mouseleave",Tl),t.addEventListener("touchstart",qf,{passive:!0}),t.addEventListener("touchmove",Yf,{passive:!1}),t.addEventListener("touchend",$f,{passive:!0}),t.addEventListener("wheel",Kf,{passive:!1});function Gh(){let d=t.clientWidth,h=t.clientHeight;a.aspect=d/h,a.updateProjectionMatrix(),$n.setSize(d,h),$n.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",Gh);let $n=new Ea({antialias:!1});$n.setSize(t.clientWidth,t.clientHeight),$n.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),$n.shadowMap.enabled=!0,$n.shadowMap.type=ih,t.appendChild($n.domElement),Gh();let Xa=document.createElement("div");Xa.id="combat-text-layer",t.appendChild(Xa);let Ji=new k,Ms=new k,Zf=1400;function li(d,h,_,b,I){let P=document.createElement("div");P.className="combat-text-float "+(b?"miss":"damage")+(I?" "+I:""),P.textContent=_,P.style.position="absolute",Xa.appendChild(P);let O=I==="skill-name"?1.7:1.2,N=performance.now();function L(){Ji.copy(Ze(d,h)),Ji.y+=O,Ji.project(a);let fe=t.clientWidth,G=t.clientHeight;P.style.left=(Ji.x*.5+.5)*fe+"px",P.style.top=(1-(Ji.y*.5+.5))*G+"px"}let X=0;function q(){X%2===0&&L(),X++,performance.now()-N<Zf?requestAnimationFrame(q):P.remove()}requestAnimationFrame(q)}let Jf=1500;function jf(d,h){let _=document.createElement("div");_.className="combat-text-float "+(h||"levelup"),_.textContent="LEVEL UP!",_.style.position="absolute",Xa.appendChild(_);let b=performance.now(),I=0;function P(){Ji.copy(Ze(d.x,d.y)),Ji.y+=1.2,Ji.project(a);let N=t.clientWidth,L=t.clientHeight;_.style.left=(Ji.x*.5+.5)*N+"px",_.style.top=(1-(Ji.y*.5+.5))*L+"px"}function O(){I%2===0&&P(),I++,performance.now()-b<Jf?requestAnimationFrame(O):_.remove()}requestAnimationFrame(O)}function Nn(d,h,_){mt==="online"&&typeof cn=="function"&&!(_&&_.skipSync)&&cn({type:"unitDeath",unitId:d.id,killerId:h?.id}),U_(h?.class,d.class),console.log("[DEATH]",`${d.name} (${d.class}, P${d.player})`,`at (${d.x},${d.y})`,`Lv.${d.level}`),li(d.x,d.y,"DEAD",!1),le.filter(N=>N.summonedBy===d.id&&N.hp>0).map(N=>N.id).forEach(N=>{let L=le.find(X=>X.id===N);L&&(L.hp=0,Nn(L,null,{skipSync:!0}))});let I=Ge.get(d.id);if(!I){Ri(),Wh();return}let P=performance.now();function O(N){kt();let L=N-P,X=Math.min(1,L/Ce),q=X*X;I.rotation.x=q*Math.PI*.5,X<1?requestAnimationFrame(O):(n.remove(I),Ge.delete(d.id),Ri(),Wh())}requestAnimationFrame(O)}function Wh(){if(_n!=="playing")return;let d=le.some(_=>_.player===1&&_.hp>0&&!_.summonedBy),h=le.some(_=>_.player===2&&_.hp>0&&!_.summonedBy);d?h||wl(1):wl(2)}function Qf(){let d=Fh(),h=new Set(d.map(O=>O.gy*e.w+O.gx)),_=le.filter(O=>O.hp>0&&O.player===1&&!O.summonedBy&&h.has(O.y*e.w+O.x)).length,b=le.filter(O=>O.hp>0&&O.player===2&&!O.summonedBy&&h.has(O.y*e.w+O.x)).length,I=null,P="";if(_>b)I=1,P=`Time's up! ${Dn(1)} wins! (${_} vs ${b} units on center base)`;else if(b>_)I=2,P=`Time's up! ${Dn(2)} wins! (${b} vs ${_} units on center base)`;else{let O=le.filter(L=>L.hp>0&&L.player===1&&!L.summonedBy).reduce((L,X)=>L+X.hp,0),N=le.filter(L=>L.hp>0&&L.player===2&&!L.summonedBy).reduce((L,X)=>L+X.hp,0);O>N?(I=1,P=`Time's up! Draw on center \u2014 ${Dn(1)} wins on total HP (${O} vs ${N})`):N>O?(I=2,P=`Time's up! Draw on center \u2014 ${Dn(2)} wins on total HP (${N} vs ${O})`):P=`Draw! (equal units on center: ${_}, equal HP)`}wl(I,P)}function wl(d,h){ee(),N_(le,d),_n="gameover",document.getElementById("turn-menu").style.display="none",is(),Un();let _=document.getElementById("game-over-overlay"),b=document.getElementById("game-over-title"),I=document.getElementById("game-over-cards"),P=document.getElementById("game-over-class-record");P&&(P.style.display="none",P.innerHTML=""),b.textContent=h??`${Dn(d)} wins!`;let O=le.filter(N=>N.player===(d??1));if(I.innerHTML=O.map(N=>{let L=N,X=N.level>=3?" level-3":N.level>=2?" level-2":"",q=L.maxHp>0&&L.hp/L.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${X}${q}">
          <img class="game-over-card-image" src="${Jr[N.class]||""}" alt="${L.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${L.name}</div>
            <div class="game-over-card-meta">Lv.${L.level} ${L.class} \u2014 HP ${L.hp}/${L.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${L.hp}/${L.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${L.mp}/${L.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${Re(L,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${Re(L,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${Re(L,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${Re(L,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${Re(L,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${Re(L,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${L.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),_.classList.add("visible"),mt==="cvcpu"){if(W++,P&&gs&&W>=w){let N=wi.map(L=>{let X=ts[L],q=X.wins+X.losses||1,fe=X.wins+X.losses>0?(X.wins/q*100).toFixed(1)+"%":"\u2014",G=X.wins+X.losses>0?(X.losses/q*100).toFixed(1)+"%":"\u2014";return{class:L,battles:X.battles,kills:X.kills,deaths:X.deaths,wins:X.wins,losses:X.losses,winRate:fe,lossRate:G}});P.innerHTML=`
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
        `,P.style.display="block"}W<w&&setTimeout(()=>{_.classList.remove("visible"),C(),ea()},2e3)}}function gr(d=0){requestAnimationFrame(gr),Bi===0&&(Bi=d);let h=d-Bi>500;gr.frameCount=(typeof gr.frameCount=="number"?gr.frameCount:0)+1;let _=()=>{if(Hs){let b=.6+.4*Math.sin(d*.004);for(let I=0;I<ai.length;I++){let P=I%2===0?.4:.7;ai[I].opacity=P*b}$n.render(n,a),Hs=!1}};h?d-mh>=100&&(mh=d,Hs=!0,_()):(gr.frameCount%2===0&&(Hs=!0),_())}gr()}H_();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
