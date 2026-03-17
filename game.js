var nh="160";var tp=0,Yh=1,np=2;var Rd=1,ih=2,hs=3,Ls=0,mi=1,wn=2;var Cs=0,Fr=1,$h=2,Kh=3,Zh=4,ip=5,Zs=100,sp=101,rp=102,Jh=103,jh=104,ap=200,op=201,lp=202,cp=203,uc=204,dc=205,hp=206,up=207,dp=208,fp=209,pp=210,mp=211,gp=212,yp=213,xp=214,_p=0,vp=1,Mp=2,vo=3,bp=4,Sp=5,Ep=6,Tp=7,Cd=0,wp=1,Ap=2,Ps=0,Rp=1,Cp=2,Pp=3,Ip=4,Lp=5,Dp=6;var Pd=300,Hr=301,zr=302,fc=303,pc=304,el=306,xa=1e3,Gi=1001,mc=1002,hi=1003,Qh=1004;var Cl=1005;var Li=1006,Up=1007;var _a=1008;var Is=1009,Np=1010,Op=1011,sh=1012,Id=1013,As=1014,Rs=1015,va=1016,Ld=1017,Dd=1018,js=1020,Fp=1021,Wi=1023,Bp=1024,kp=1025,Qs=1026,Vr=1027,Hp=1028,Ud=1029,zp=1030,Nd=1031,Od=1033,Pl=33776,Il=33777,Ll=33778,Dl=33779,eu=35840,tu=35841,nu=35842,iu=35843,Fd=36196,su=37492,ru=37496,au=37808,ou=37809,lu=37810,cu=37811,hu=37812,uu=37813,du=37814,fu=37815,pu=37816,mu=37817,gu=37818,yu=37819,xu=37820,_u=37821,Ul=36492,vu=36494,Mu=36495,Vp=36283,bu=36284,Su=36285,Eu=36286;var Mo=2300,bo=2301,Nl=2302,Tu=2400,wu=2401,Au=2402;var Bd=3e3,er=3001,Gp=3200,Wp=3201,kd=0,Xp=1,Di="",ei="srgb",ds="srgb-linear",rh="display-p3",tl="display-p3-linear",So="linear",gn="srgb",Eo="rec709",To="p3";var yr=7680;var Ru=519,qp=512,Yp=513,$p=514,Hd=515,Kp=516,Zp=517,Jp=518,jp=519,Cu=35044;var Pu="300 es",gc=1035,us=2e3,wo=2001,Ds=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ol=Math.PI/180,yc=180/Math.PI;function $r(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[t&63|128]+si[t>>8&255]+"-"+si[t>>16&255]+si[t>>24&255]+si[n&255]+si[n>>8&255]+si[n>>16&255]+si[n>>24&255]).toLowerCase()}function ai(i,e,t){return Math.max(e,Math.min(t,i))}function Qp(i,e){return(i%e+e)%e}function Fl(i,e,t){return(1-t)*i+t*e}function Iu(i){return(i&i-1)===0&&i!==0}function xc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function la(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ai(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],p=n[2],f=n[5],x=n[8],M=s[0],y=s[3],g=s[6],S=s[1],v=s[4],A=s[7],F=s[2],D=s[5],N=s[8];return r[0]=a*M+o*S+l*F,r[3]=a*y+o*v+l*D,r[6]=a*g+o*A+l*N,r[1]=c*M+u*S+m*F,r[4]=c*y+u*v+m*D,r[7]=c*g+u*A+m*N,r[2]=p*M+f*S+x*F,r[5]=p*y+f*v+x*D,r[8]=p*g+f*A+x*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=u*a-o*c,p=o*l-u*r,f=c*r-a*l,x=t*m+n*p+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=m*M,e[1]=(s*c-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=p*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bl.makeScale(e,t)),this}rotate(e){return this.premultiply(Bl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bl=new Ut;function zd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function em(){let i=Ao("canvas");return i.style.display="block",i}var Lu={};function fa(i){i in Lu||(Lu[i]=!0,console.warn(i))}var Du=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uu=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qa={[ds]:{transfer:So,primaries:Eo,toReference:i=>i,fromReference:i=>i},[ei]:{transfer:gn,primaries:Eo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[tl]:{transfer:So,primaries:To,toReference:i=>i.applyMatrix3(Uu),fromReference:i=>i.applyMatrix3(Du)},[rh]:{transfer:gn,primaries:To,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Uu),fromReference:i=>i.applyMatrix3(Du).convertLinearToSRGB()}},tm=new Set([ds,tl]),an={enabled:!0,_workingColorSpace:ds,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=qa[e].toReference,s=qa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return qa[i].primaries},getTransfer:function(i){return i===Di?So:qa[i].transfer}};function Br(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xr,Ro=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=Ao("canvas")),xr.width=e.width,xr.height=e.height;let n=xr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ao("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Br(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Br(t[n]/255)*255):t[n]=Br(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nm=0,Co=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=$r(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hl(s[a].image)):r.push(Hl(s[a]))}else r=Hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var im=0,Ui=class i extends Ds{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=Li,a=_a,o=Wi,l=Is,c=i.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=$r(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===er?ei:Di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ei?er:Bd}set encoding(e){fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===er?ei:Di}};Ui.DEFAULT_IMAGE=null;Ui.DEFAULT_MAPPING=Pd;Ui.DEFAULT_ANISOTROPY=1;var jn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],m=l[8],p=l[1],f=l[5],x=l[9],M=l[2],y=l[6],g=l[10];if(Math.abs(u-p)<.01&&Math.abs(m-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(u+p)<.1&&Math.abs(m+M)<.1&&Math.abs(x+y)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,A=(f+1)/2,F=(g+1)/2,D=(u+p)/4,N=(m+M)/4,Y=(x+y)/4;return v>A&&v>F?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=D/n,r=N/n):A>F?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=D/s,r=Y/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=N/r,s=Y/r),this.set(n,s,r,t),this}let S=Math.sqrt((y-x)*(y-x)+(m-M)*(m-M)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(y-x)/S,this.y=(m-M)/S,this.z=(p-u)/S,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends Ds{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jn(0,0,e,t),this.scissorTest=!1,this.viewport=new jn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(fa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===er?ei:Di),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ui(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fs=class extends _c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Po=class extends Ui{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vc=class extends Ui{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],m=n[s+3],p=r[a+0],f=r[a+1],x=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=x,e[t+3]=M;return}if(m!==M||l!==p||c!==f||u!==x){let y=1-o,g=l*p+c*f+u*x+m*M,S=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let F=Math.sqrt(v),D=Math.atan2(F,g*S);y=Math.sin(y*D)/F,o=Math.sin(o*D)/F}let A=o*S;if(l=l*y+p*A,c=c*y+f*A,u=u*y+x*A,m=m*y+M*A,y===1-o){let F=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=F,c*=F,u*=F,m*=F}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],m=r[a],p=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+u*m+l*f-c*p,e[t+1]=l*x+u*p+c*m-o*f,e[t+2]=c*x+u*f+o*p-l*m,e[t+3]=u*x-o*m-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),m=o(r/2),p=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=p*u*m+c*f*x,this._y=c*f*m-p*u*x,this._z=c*u*x+p*f*m,this._w=c*u*m-p*f*x;break;case"YXZ":this._x=p*u*m+c*f*x,this._y=c*f*m-p*u*x,this._z=c*u*x-p*f*m,this._w=c*u*m+p*f*x;break;case"ZXY":this._x=p*u*m-c*f*x,this._y=c*f*m+p*u*x,this._z=c*u*x+p*f*m,this._w=c*u*m-p*f*x;break;case"ZYX":this._x=p*u*m-c*f*x,this._y=c*f*m+p*u*x,this._z=c*u*x-p*f*m,this._w=c*u*m+p*f*x;break;case"YZX":this._x=p*u*m+c*f*x,this._y=c*f*m+p*u*x,this._z=c*u*x-p*f*m,this._w=c*u*m-p*f*x;break;case"XZY":this._x=p*u*m-c*f*x,this._y=c*f*m-p*u*x,this._z=c*u*x+p*f*m,this._w=c*u*m+p*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],m=t[10],p=n+o+m;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>m){let f=2*Math.sqrt(1+n-o-m);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>m){let f=2*Math.sqrt(1+o-n-m);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+m-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ai(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),m=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*m+this._w*p,this._x=n*m+this._x*p,this._y=s*m+this._y*p,this._z=r*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*u,this.y=n+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ai(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new k,Nu=new Us,tr=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ki):ki.fromBufferAttribute(r,a),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ya.copy(n.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),$a.subVectors(this.max,ca),_r.subVectors(e.a,ca),vr.subVectors(e.b,ca),Mr.subVectors(e.c,ca),bs.subVectors(vr,_r),Ss.subVectors(Mr,vr),Xs.subVectors(_r,Mr);let t=[0,-bs.z,bs.y,0,-Ss.z,Ss.y,0,-Xs.z,Xs.y,bs.z,0,-bs.x,Ss.z,0,-Ss.x,Xs.z,0,-Xs.x,-bs.y,bs.x,0,-Ss.y,Ss.x,0,-Xs.y,Xs.x,0];return!Vl(t,_r,vr,Mr,$a)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,_r,vr,Mr,$a))?!1:(Ka.crossVectors(bs,Ss),t=[Ka.x,Ka.y,Ka.z],Vl(t,_r,vr,Mr,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},rs=[new k,new k,new k,new k,new k,new k,new k,new k],ki=new k,Ya=new tr,_r=new k,vr=new k,Mr=new k,bs=new k,Ss=new k,Xs=new k,ca=new k,$a=new k,Ka=new k,qs=new k;function Vl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qs.fromArray(i,r);let o=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),l=e.dot(qs),c=t.dot(qs),u=n.dot(qs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var sm=new tr,ha=new k,Gl=new k,Gr=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):sm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);let t=ha.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ha,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Gl)),this.expandByPoint(ha.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},as=new k,Wl=new k,Za=new k,Es=new k,Xl=new k,Ja=new k,ql=new k,Ma=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wl.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Es.copy(this.origin).sub(Wl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Za),o=Es.dot(this.direction),l=-Es.dot(Za),c=Es.lengthSq(),u=Math.abs(1-a*a),m,p,f,x;if(u>0)if(m=a*l-o,p=a*o-l,x=r*u,m>=0)if(p>=-x)if(p<=x){let M=1/u;m*=M,p*=M,f=m*(m+a*p+2*o)+p*(a*m+p+2*l)+c}else p=r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;else p=-r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;else p<=-x?(m=Math.max(0,-(-a*r+o)),p=m>0?-r:Math.min(Math.max(-r,-l),r),f=-m*m+p*(p+2*l)+c):p<=x?(m=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(m=Math.max(0,-(a*r+o)),p=m>0?r:Math.min(Math.max(-r,-l),r),f=-m*m+p*(p+2*l)+c);else p=a>0?-r:r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Wl).addScaledVector(Za,p),f}intersectSphere(e,t){as.subVectors(e.center,this.origin);let n=as.dot(this.direction),s=as.dot(as)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-p.z)*m,l=(e.max.z-p.z)*m):(o=(e.max.z-p.z)*m,l=(e.min.z-p.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,n,s,r){Xl.subVectors(t,e),Ja.subVectors(n,e),ql.crossVectors(Xl,Ja);let a=this.direction.dot(ql),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Es.subVectors(this.origin,e);let l=o*this.direction.dot(Ja.crossVectors(Es,Ja));if(l<0)return null;let c=o*this.direction.dot(Xl.cross(Es));if(c<0||l+c>a)return null;let u=-o*Es.dot(ql);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zn=class i{constructor(e,t,n,s,r,a,o,l,c,u,m,p,f,x,M,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,m,p,f,x,M,y)}set(e,t,n,s,r,a,o,l,c,u,m,p,f,x,M,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=m,g[14]=p,g[3]=f,g[7]=x,g[11]=M,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/br.setFromMatrixColumn(e,0).length(),r=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let p=a*u,f=a*m,x=o*u,M=o*m;t[0]=l*u,t[4]=-l*m,t[8]=c,t[1]=f+x*c,t[5]=p-M*c,t[9]=-o*l,t[2]=M-p*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,f=l*m,x=c*u,M=c*m;t[0]=p+M*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*m,t[5]=a*u,t[9]=-o,t[2]=f*o-x,t[6]=M+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,f=l*m,x=c*u,M=c*m;t[0]=p-M*o,t[4]=-a*m,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*u,t[9]=M-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,f=a*m,x=o*u,M=o*m;t[0]=l*u,t[4]=x*c-f,t[8]=p*c+M,t[1]=l*m,t[5]=M*c+p,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,f=a*c,x=o*l,M=o*c;t[0]=l*u,t[4]=M-p*m,t[8]=x*m+f,t[1]=m,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*m+x,t[10]=p-M*m}else if(e.order==="XZY"){let p=a*l,f=a*c,x=o*l,M=o*c;t[0]=l*u,t[4]=-m,t[8]=c*u,t[1]=p*m+M,t[5]=a*u,t[9]=f*m-x,t[2]=x*m-f,t[6]=o*u,t[10]=M*m+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rm,e,am)}lookAt(e,t,n){let s=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Ts.crossVectors(n,bi),Ts.lengthSq()===0&&(Math.abs(n.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Ts.crossVectors(n,bi)),Ts.normalize(),ja.crossVectors(bi,Ts),s[0]=Ts.x,s[4]=ja.x,s[8]=bi.x,s[1]=Ts.y,s[5]=ja.y,s[9]=bi.y,s[2]=Ts.z,s[6]=ja.z,s[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],p=n[9],f=n[13],x=n[2],M=n[6],y=n[10],g=n[14],S=n[3],v=n[7],A=n[11],F=n[15],D=s[0],N=s[4],Y=s[8],T=s[12],R=s[1],$=s[5],le=s[9],ve=s[13],B=s[2],q=s[6],z=s[10],G=s[14],K=s[3],re=s[7],oe=s[11],ue=s[15];return r[0]=a*D+o*R+l*B+c*K,r[4]=a*N+o*$+l*q+c*re,r[8]=a*Y+o*le+l*z+c*oe,r[12]=a*T+o*ve+l*G+c*ue,r[1]=u*D+m*R+p*B+f*K,r[5]=u*N+m*$+p*q+f*re,r[9]=u*Y+m*le+p*z+f*oe,r[13]=u*T+m*ve+p*G+f*ue,r[2]=x*D+M*R+y*B+g*K,r[6]=x*N+M*$+y*q+g*re,r[10]=x*Y+M*le+y*z+g*oe,r[14]=x*T+M*ve+y*G+g*ue,r[3]=S*D+v*R+A*B+F*K,r[7]=S*N+v*$+A*q+F*re,r[11]=S*Y+v*le+A*z+F*oe,r[15]=S*T+v*ve+A*G+F*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],m=e[6],p=e[10],f=e[14],x=e[3],M=e[7],y=e[11],g=e[15];return x*(+r*l*m-s*c*m-r*o*p+n*c*p+s*o*f-n*l*f)+M*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*u-r*l*u)+y*(+t*c*m-t*o*f-r*a*m+n*a*f+r*o*u-n*c*u)+g*(-s*o*u-t*l*m+t*o*p+s*a*m-n*a*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=e[9],p=e[10],f=e[11],x=e[12],M=e[13],y=e[14],g=e[15],S=m*y*c-M*p*c+M*l*f-o*y*f-m*l*g+o*p*g,v=x*p*c-u*y*c-x*l*f+a*y*f+u*l*g-a*p*g,A=u*M*c-x*m*c+x*o*f-a*M*f-u*o*g+a*m*g,F=x*m*l-u*M*l-x*o*p+a*M*p+u*o*y-a*m*y,D=t*S+n*v+s*A+r*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/D;return e[0]=S*N,e[1]=(M*p*r-m*y*r-M*s*f+n*y*f+m*s*g-n*p*g)*N,e[2]=(o*y*r-M*l*r+M*s*c-n*y*c-o*s*g+n*l*g)*N,e[3]=(m*l*r-o*p*r-m*s*c+n*p*c+o*s*f-n*l*f)*N,e[4]=v*N,e[5]=(u*y*r-x*p*r+x*s*f-t*y*f-u*s*g+t*p*g)*N,e[6]=(x*l*r-a*y*r-x*s*c+t*y*c+a*s*g-t*l*g)*N,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*f+t*l*f)*N,e[8]=A*N,e[9]=(x*m*r-u*M*r-x*n*f+t*M*f+u*n*g-t*m*g)*N,e[10]=(a*M*r-x*o*r+x*n*c-t*M*c-a*n*g+t*o*g)*N,e[11]=(u*o*r-a*m*r-u*n*c+t*m*c+a*n*f-t*o*f)*N,e[12]=F*N,e[13]=(u*M*s-x*m*s+x*n*p-t*M*p-u*n*y+t*m*y)*N,e[14]=(x*o*s-a*M*s-x*n*l+t*M*l+a*n*y-t*o*y)*N,e[15]=(a*m*s-u*o*s+u*n*l-t*m*l-a*n*p+t*o*p)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,m=o+o,p=r*c,f=r*u,x=r*m,M=a*u,y=a*m,g=o*m,S=l*c,v=l*u,A=l*m,F=n.x,D=n.y,N=n.z;return s[0]=(1-(M+g))*F,s[1]=(f+A)*F,s[2]=(x-v)*F,s[3]=0,s[4]=(f-A)*D,s[5]=(1-(p+g))*D,s[6]=(y+S)*D,s[7]=0,s[8]=(x+v)*N,s[9]=(y-S)*N,s[10]=(1-(p+M))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=br.set(s[0],s[1],s[2]).length(),a=br.set(s[4],s[5],s[6]).length(),o=br.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hi.copy(this);let c=1/r,u=1/a,m=1/o;return Hi.elements[0]*=c,Hi.elements[1]*=c,Hi.elements[2]*=c,Hi.elements[4]*=u,Hi.elements[5]*=u,Hi.elements[6]*=u,Hi.elements[8]*=m,Hi.elements[9]*=m,Hi.elements[10]*=m,t.setFromRotationMatrix(Hi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=us){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),m=(t+e)/(t-e),p=(n+s)/(n-s),f,x;if(o===us)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===wo)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=us){let l=this.elements,c=1/(t-e),u=1/(n-s),m=1/(a-r),p=(t+e)*c,f=(n+s)*u,x,M;if(o===us)x=(a+r)*m,M=-2*m;else if(o===wo)x=r*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},br=new k,Hi=new zn,rm=new k(0,0,0),am=new k(1,1,1),Ts=new k,ja=new k,bi=new k,Ou=new zn,Fu=new Us,Io=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ai(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ai(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(ai(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ai(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ai(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ai(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Io.DEFAULT_ORDER="XYZ";var ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},om=0,Bu=new k,Sr=new Us,os=new zn,Qa=new k,ua=new k,lm=new k,cm=new Us,ku=new k(1,0,0),Hu=new k(0,1,0),zu=new k(0,0,1),hm={type:"added"},um={type:"removed"},di=class i extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Io,n=new Us,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zn},normalMatrix:{value:new Ut}}),this.matrix=new zn,this.matrixWorld=new zn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qa.copy(e):Qa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(ua,Qa,this.up):os.lookAt(Qa,ua,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Sr.setFromRotationMatrix(os),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(um)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,cm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),m=a(e.shapes),p=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};di.DEFAULT_UP=new k(0,1,0);di.DEFAULT_MATRIX_AUTO_UPDATE=!0;di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zi=new k,ls=new k,Yl=new k,cs=new k,Er=new k,Tr=new k,Vu=new k,$l=new k,Kl=new k,Zl=new k,eo=!1,Dr=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zi.subVectors(e,t),s.cross(zi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zi.subVectors(s,t),ls.subVectors(n,t),Yl.subVectors(e,t);let a=zi.dot(zi),o=zi.dot(ls),l=zi.dot(Yl),c=ls.dot(ls),u=ls.dot(Yl),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let p=1/m,f=(c*l-o*u)*p,x=(a*u-o*l)*p;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getUV(e,t,n,s,r,a,o,l){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cs.x),l.addScaledVector(a,cs.y),l.addScaledVector(o,cs.z),l)}static isFrontFacing(e,t,n,s){return zi.subVectors(n,t),ls.subVectors(e,t),zi.cross(ls).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),zi.cross(ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Er.subVectors(s,n),Tr.subVectors(r,n),$l.subVectors(e,n);let l=Er.dot($l),c=Tr.dot($l);if(l<=0&&c<=0)return t.copy(n);Kl.subVectors(e,s);let u=Er.dot(Kl),m=Tr.dot(Kl);if(u>=0&&m<=u)return t.copy(s);let p=l*m-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Er,a);Zl.subVectors(e,r);let f=Er.dot(Zl),x=Tr.dot(Zl);if(x>=0&&f<=x)return t.copy(r);let M=f*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Tr,o);let y=u*x-f*m;if(y<=0&&m-u>=0&&f-x>=0)return Vu.subVectors(r,s),o=(m-u)/(m-u+(f-x)),t.copy(s).addScaledVector(Vu,o);let g=1/(y+M+p);return a=M*g,o=p*g,t.copy(n).addScaledVector(Er,a).addScaledVector(Tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},to={h:0,s:0,l:0};function Jl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=an.workingColorSpace){return this.r=e,this.g=t,this.b=n,an.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=an.workingColorSpace){if(e=Qp(e,1),t=ai(t,0,1),n=ai(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Jl(a,r,e+1/3),this.g=Jl(a,r,e),this.b=Jl(a,r,e-1/3)}return an.toWorkingColorSpace(this,s),this}setStyle(e,t=ei){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){let n=Vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}copyLinearToSRGB(e){return this.r=kl(e.r),this.g=kl(e.g),this.b=kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return an.fromWorkingColorSpace(ri.copy(this),e),Math.round(ai(ri.r*255,0,255))*65536+Math.round(ai(ri.g*255,0,255))*256+Math.round(ai(ri.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=an.workingColorSpace){an.fromWorkingColorSpace(ri.copy(this),t);let n=ri.r,s=ri.g,r=ri.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=an.workingColorSpace){return an.fromWorkingColorSpace(ri.copy(this),t),e.r=ri.r,e.g=ri.g,e.b=ri.b,e}getStyle(e=ei){an.fromWorkingColorSpace(ri.copy(this),e);let t=ri.r,n=ri.g,s=ri.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ws),this.setHSL(ws.h+e,ws.s+t,ws.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ws),e.getHSL(to);let n=Fl(ws.h,to.h,t),s=Fl(ws.s,to.s,t),r=Fl(ws.l,to.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new xt;xt.NAMES=Vd;var dm=0,Ns=class extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=Fr,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==Ls&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==Zs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Cn=class extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Hn=new k,no=new He,gi=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix3(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=la(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=la(t,this.array)),t}setX(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=la(t,this.array)),t}setY(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=la(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=la(t,this.array)),t}setW(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),n=pi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),n=pi(n,this.array),s=pi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),n=pi(n,this.array),s=pi(s,this.array),r=pi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}};var Lo=class extends gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Do=class extends gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Rn=class extends gi{constructor(e,t,n){super(new Float32Array(e),t,n)}};var fm=0,Ii=new zn,jl=new di,wr=new k,Si=new tr,da=new tr,Jn=new k,yi=class i extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?Do:Lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,n){return Ii.makeTranslation(e,t,n),this.applyMatrix4(Ii),this}scale(e,t,n){return Ii.makeScale(e,t,n),this.applyMatrix4(Ii),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(Jn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Jn),Jn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Jn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];da.setFromBufferAttribute(o),this.morphTargetsRelative?(Jn.addVectors(Si.min,da.min),Si.expandByPoint(Jn),Jn.addVectors(Si.max,da.max),Si.expandByPoint(Jn)):(Si.expandByPoint(da.min),Si.expandByPoint(da.max))}Si.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Jn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jn.fromBufferAttribute(o,c),l&&(wr.fromBufferAttribute(e,c),Jn.add(wr)),s=Math.max(s,n.distanceToSquared(Jn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new k,u[R]=new k;let m=new k,p=new k,f=new k,x=new He,M=new He,y=new He,g=new k,S=new k;function v(R,$,le){m.fromArray(s,R*3),p.fromArray(s,$*3),f.fromArray(s,le*3),x.fromArray(a,R*2),M.fromArray(a,$*2),y.fromArray(a,le*2),p.sub(m),f.sub(m),M.sub(x),y.sub(x);let ve=1/(M.x*y.y-y.x*M.y);isFinite(ve)&&(g.copy(p).multiplyScalar(y.y).addScaledVector(f,-M.y).multiplyScalar(ve),S.copy(f).multiplyScalar(M.x).addScaledVector(p,-y.x).multiplyScalar(ve),c[R].add(g),c[$].add(g),c[le].add(g),u[R].add(S),u[$].add(S),u[le].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let R=0,$=A.length;R<$;++R){let le=A[R],ve=le.start,B=le.count;for(let q=ve,z=ve+B;q<z;q+=3)v(n[q+0],n[q+1],n[q+2])}let F=new k,D=new k,N=new k,Y=new k;function T(R){N.fromArray(r,R*3),Y.copy(N);let $=c[R];F.copy($),F.sub(N.multiplyScalar(N.dot($))).normalize(),D.crossVectors(Y,$);let ve=D.dot(u[R])<0?-1:1;l[R*4]=F.x,l[R*4+1]=F.y,l[R*4+2]=F.z,l[R*4+3]=ve}for(let R=0,$=A.length;R<$;++R){let le=A[R],ve=le.start,B=le.count;for(let q=ve,z=ve+B;q<z;q+=3)T(n[q+0]),T(n[q+1]),T(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,m=new k;if(e)for(let p=0,f=e.count;p<f;p+=3){let x=e.getX(p+0),M=e.getX(p+1),y=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,y),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,y),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jn.fromBufferAttribute(e,t),Jn.normalize(),e.setXYZ(t,Jn.x,Jn.y,Jn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,m=o.normalized,p=new c.constructor(l.length*u),f=0,x=0;for(let M=0,y=l.length;M<y;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*u;for(let g=0;g<u;g++)p[x++]=c[f++]}return new gi(p,u,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){let p=c[u],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,p=c.length;m<p;m++){let f=c[m];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],m=r[c];for(let p=0,f=m.length;p<f;p++)u.push(m[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gu=new zn,Ys=new Ma,io=new Gr,Wu=new k,Ar=new k,Rr=new k,Cr=new k,Ql=new k,so=new k,ro=new He,ao=new He,oo=new He,Xu=new k,qu=new k,Yu=new k,lo=new k,co=new k,$e=class extends di{constructor(e=new yi,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],m=r[l];u!==0&&(Ql.fromBufferAttribute(m,e),a?so.addScaledVector(Ql,u):so.addScaledVector(Ql.sub(t),u))}t.add(so)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),Ys.copy(e.ray).recast(e.near),!(io.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(io,Wu)===null||Ys.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Gu.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&Ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=p.length;x<M;x++){let y=p[x],g=a[y.materialIndex],S=Math.max(y.start,f.start),v=Math.min(o.count,Math.min(y.start+y.count,f.start+f.count));for(let A=S,F=v;A<F;A+=3){let D=o.getX(A),N=o.getX(A+1),Y=o.getX(A+2);s=ho(this,g,e,n,c,u,m,D,N,Y),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let y=x,g=M;y<g;y+=3){let S=o.getX(y),v=o.getX(y+1),A=o.getX(y+2);s=ho(this,a,e,n,c,u,m,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=p.length;x<M;x++){let y=p[x],g=a[y.materialIndex],S=Math.max(y.start,f.start),v=Math.min(l.count,Math.min(y.start+y.count,f.start+f.count));for(let A=S,F=v;A<F;A+=3){let D=A,N=A+1,Y=A+2;s=ho(this,g,e,n,c,u,m,D,N,Y),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let y=x,g=M;y<g;y+=3){let S=y,v=y+1,A=y+2;s=ho(this,a,e,n,c,u,m,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function pm(i,e,t,n,s,r,a,o){let l;if(e.side===mi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ls,o),l===null)return null;co.copy(o),co.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:i}}function ho(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ar),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Cr);let u=pm(i,e,t,n,Ar,Rr,Cr,lo);if(u){s&&(ro.fromBufferAttribute(s,o),ao.fromBufferAttribute(s,l),oo.fromBufferAttribute(s,c),u.uv=Dr.getInterpolation(lo,Ar,Rr,Cr,ro,ao,oo,new He)),r&&(ro.fromBufferAttribute(r,o),ao.fromBufferAttribute(r,l),oo.fromBufferAttribute(r,c),u.uv1=Dr.getInterpolation(lo,Ar,Rr,Cr,ro,ao,oo,new He),u.uv2=u.uv1),a&&(Xu.fromBufferAttribute(a,o),qu.fromBufferAttribute(a,l),Yu.fromBufferAttribute(a,c),u.normal=Dr.getInterpolation(lo,Ar,Rr,Cr,Xu,qu,Yu,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let m={a:o,b:l,c,normal:new k,materialIndex:0};Dr.getNormal(Ar,Rr,Cr,m.normal),u.face=m}return u}var Xn=class i extends yi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],m=[],p=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(m,2));function x(M,y,g,S,v,A,F,D,N,Y,T){let R=A/N,$=F/Y,le=A/2,ve=F/2,B=D/2,q=N+1,z=Y+1,G=0,K=0,re=new k;for(let oe=0;oe<z;oe++){let ue=oe*$-ve;for(let Te=0;Te<q;Te++){let J=Te*R-le;re[M]=J*S,re[y]=ue*v,re[g]=B,c.push(re.x,re.y,re.z),re[M]=0,re[y]=0,re[g]=D>0?1:-1,u.push(re.x,re.y,re.z),m.push(Te/N),m.push(1-oe/Y),G+=1}}for(let oe=0;oe<Y;oe++)for(let ue=0;ue<N;ue++){let Te=p+ue+q*oe,J=p+ue+q*(oe+1),fe=p+(ue+1)+q*(oe+1),Ee=p+(ue+1)+q*oe;l.push(Te,J,Ee),l.push(J,fe,Ee),K+=6}o.addGroup(f,K,T),f+=K,p+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Wr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ci(i){let e={};for(let t=0;t<i.length;t++){let n=Wr(i[t]);for(let s in n)e[s]=n[s]}return e}function mm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gd(i){return i.getRenderTarget()===null?i.outputColorSpace:an.workingColorSpace}var gm={clone:Wr,merge:ci},ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ps=class extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Uo=class extends di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zn,this.projectionMatrix=new zn,this.projectionMatrixInverse=new zn,this.coordinateSystem=us}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=class extends Uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ol*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pr=-90,Ir=1,Mc=class extends di{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ui(Pr,Ir,e,t);s.layers=this.layers,this.add(s);let r=new ui(Pr,Ir,e,t);r.layers=this.layers,this.add(r);let a=new ui(Pr,Ir,e,t);a.layers=this.layers,this.add(a);let o=new ui(Pr,Ir,e,t);o.layers=this.layers,this.add(o);let l=new ui(Pr,Ir,e,t);l.layers=this.layers,this.add(l);let c=new ui(Pr,Ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===us)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(m,p,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},No=class extends Ui{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Hr,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bc=class extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(fa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===er?ei:Di),this.texture=new No(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new ps({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mi,blending:Cs});r.uniforms.tEquirect.value=t;let a=new $e(s,r),o=t.minFilter;return t.minFilter===_a&&(t.minFilter=Li),new Mc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ec=new k,_m=new k,vm=new Ut,Vi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ec.subVectors(n,t).cross(_m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ec),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vm.getNormalMatrix(e),s=this.coplanarPoint(ec).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$s=new Gr,uo=new k,Sa=class{constructor(e=new Vi,t=new Vi,n=new Vi,s=new Vi,r=new Vi,a=new Vi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=us){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],m=s[6],p=s[7],f=s[8],x=s[9],M=s[10],y=s[11],g=s[12],S=s[13],v=s[14],A=s[15];if(n[0].setComponents(l-r,p-c,y-f,A-g).normalize(),n[1].setComponents(l+r,p+c,y+f,A+g).normalize(),n[2].setComponents(l+a,p+u,y+x,A+S).normalize(),n[3].setComponents(l-a,p-u,y-x,A-S).normalize(),n[4].setComponents(l-o,p-m,y-M,A-v).normalize(),t===us)n[5].setComponents(l+o,p+m,y+M,A+v).normalize();else if(t===wo)n[5].setComponents(o,m,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){return $s.center.set(0,0,0),$s.radius=.7071067811865476,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mm(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,u){let m=c.array,p=c.usage,f=m.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,m,p),c.onUploadCallback();let M;if(m instanceof Float32Array)M=i.FLOAT;else if(m instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=i.SHORT;else if(m instanceof Uint32Array)M=i.UNSIGNED_INT;else if(m instanceof Int32Array)M=i.INT;else if(m instanceof Int8Array)M=i.BYTE;else if(m instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,m){let p=u.array,f=u._updateRange,x=u.updateRanges;if(i.bindBuffer(m,c),f.count===-1&&x.length===0&&i.bufferSubData(m,0,p),x.length!==0){for(let M=0,y=x.length;M<y;M++){let g=x[M];t?i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count):i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p.subarray(g.start,g.start+g.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(m,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(m,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let m=n.get(c);if(m===void 0)n.set(c,s(c,u));else if(m.version<c.version){if(m.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,c,u),m.version=c.version}}return{get:a,remove:o,update:l}}var Qi=class i extends yi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,m=e/o,p=t/l,f=[],x=[],M=[],y=[];for(let g=0;g<u;g++){let S=g*p-a;for(let v=0;v<c;v++){let A=v*m-r;x.push(A,-S,0),M.push(0,0,1),y.push(v/o),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){let v=S+c*g,A=S+c*(g+1),F=S+1+c*(g+1),D=S+1+c*g;f.push(v,A,D),f.push(A,F,D)}this.setIndex(f),this.setAttribute("position",new Rn(x,3)),this.setAttribute("normal",new Rn(M,3)),this.setAttribute("uv",new Rn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
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
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
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
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nm=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xm=`#define PI 3.141592653589793
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
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ym=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`
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
}`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cg=`#ifdef USE_GRADIENTMAP
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
}`,hg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
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
#endif`,Mg=`struct PhysicalMaterial {
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
}`,bg=`
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
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lg=`#if defined( USE_POINTS_UV )
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
#endif`,Dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Og=`#ifdef USE_MORPHNORMALS
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
#endif`,Fg=`#ifdef USE_MORPHTARGETS
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
#endif`,Bg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
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
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a0=`float getShadowMask() {
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
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,P0=`#define DISTANCE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`uniform float scale;
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
}`,U0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,O0=`uniform vec3 diffuse;
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
}`,F0=`#define LAMBERT
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
}`,B0=`#define LAMBERT
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
}`,k0=`#define MATCAP
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
}`,H0=`#define MATCAP
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
}`,z0=`#define NORMAL
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
}`,V0=`#define NORMAL
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
}`,G0=`#define PHONG
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
}`,W0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,q0=`#define STANDARD
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
}`,Y0=`#define TOON
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
}`,$0=`#define TOON
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
}`,K0=`uniform float size;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,j0=`uniform vec3 color;
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
}`,Q0=`uniform float rotation;
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
}`,ey=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:bm,alphahash_pars_fragment:Sm,alphamap_fragment:Em,alphamap_pars_fragment:Tm,alphatest_fragment:wm,alphatest_pars_fragment:Am,aomap_fragment:Rm,aomap_pars_fragment:Cm,batching_pars_vertex:Pm,batching_vertex:Im,begin_vertex:Lm,beginnormal_vertex:Dm,bsdfs:Um,iridescence_fragment:Nm,bumpmap_pars_fragment:Om,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:km,clipping_planes_vertex:Hm,color_fragment:zm,color_pars_fragment:Vm,color_pars_vertex:Gm,color_vertex:Wm,common:Xm,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:$m,displacementmap_vertex:Km,emissivemap_fragment:Zm,emissivemap_pars_fragment:Jm,colorspace_fragment:jm,colorspace_pars_fragment:Qm,envmap_fragment:eg,envmap_common_pars_fragment:tg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:mg,envmap_vertex:sg,fog_vertex:rg,fog_pars_vertex:ag,fog_fragment:og,fog_pars_fragment:lg,gradientmap_pars_fragment:cg,lightmap_fragment:hg,lightmap_pars_fragment:ug,lights_lambert_fragment:dg,lights_lambert_pars_fragment:fg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:yg,lights_phong_fragment:xg,lights_phong_pars_fragment:_g,lights_physical_fragment:vg,lights_physical_pars_fragment:Mg,lights_fragment_begin:bg,lights_fragment_maps:Sg,lights_fragment_end:Eg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:wg,logdepthbuf_pars_vertex:Ag,logdepthbuf_vertex:Rg,map_fragment:Cg,map_pars_fragment:Pg,map_particle_fragment:Ig,map_particle_pars_fragment:Lg,metalnessmap_fragment:Dg,metalnessmap_pars_fragment:Ug,morphcolor_vertex:Ng,morphnormal_vertex:Og,morphtarget_pars_vertex:Fg,morphtarget_vertex:Bg,normal_fragment_begin:kg,normal_fragment_maps:Hg,normal_pars_fragment:zg,normal_pars_vertex:Vg,normal_vertex:Gg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:$g,opaque_fragment:Kg,packing:Zg,premultiplied_alpha_fragment:Jg,project_vertex:jg,dithering_fragment:Qg,dithering_pars_fragment:e0,roughnessmap_fragment:t0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:s0,shadowmap_vertex:r0,shadowmask_pars_fragment:a0,skinbase_vertex:o0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:h0,specularmap_fragment:u0,specularmap_pars_fragment:d0,tonemapping_fragment:f0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:y0,uv_pars_vertex:x0,uv_vertex:_0,worldpos_vertex:v0,background_vert:M0,background_frag:b0,backgroundCube_vert:S0,backgroundCube_frag:E0,cube_vert:T0,cube_frag:w0,depth_vert:A0,depth_frag:R0,distanceRGBA_vert:C0,distanceRGBA_frag:P0,equirect_vert:I0,equirect_frag:L0,linedashed_vert:D0,linedashed_frag:U0,meshbasic_vert:N0,meshbasic_frag:O0,meshlambert_vert:F0,meshlambert_frag:B0,meshmatcap_vert:k0,meshmatcap_frag:H0,meshnormal_vert:z0,meshnormal_frag:V0,meshphong_vert:G0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:q0,meshtoon_vert:Y0,meshtoon_frag:$0,points_vert:K0,points_frag:Z0,shadow_vert:J0,shadow_frag:j0,sprite_vert:Q0,sprite_frag:ey},Ie={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},ji={basic:{uniforms:ci([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:ci([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:ci([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:ci([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:ci([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:ci([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:ci([Ie.points,Ie.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:ci([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:ci([Ie.common,Ie.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:ci([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:ci([Ie.sprite,Ie.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:ci([Ie.common,Ie.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:ci([Ie.lights,Ie.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};ji.physical={uniforms:ci([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var fo={r:0,b:0,g:0};function ty(i,e,t,n,s,r,a){let o=new xt(0),l=r===!0?0:1,c,u,m=null,p=0,f=null;function x(y,g){let S=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?M(o,l):v&&v.isColor&&(M(v,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===el)?(u===void 0&&(u=new $e(new Xn(1,1,1),new ps({name:"BackgroundCubeMaterial",uniforms:Wr(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=an.getTransfer(v.colorSpace)!==gn,(m!==v||p!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,m=v,p=v.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $e(new Qi(2,2),new ps({name:"BackgroundMaterial",uniforms:Wr(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=an.getTransfer(v.colorSpace)!==gn,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(m!==v||p!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,m=v,p=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function M(y,g){y.getRGB(fo,Gd(i)),n.buffers.color.setClear(fo.r,fo.g,fo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(y,g=1){o.set(y),l=g,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,M(o,l)},render:x}}function ny(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=y(null),c=l,u=!1;function m(B,q,z,G,K){let re=!1;if(a){let oe=M(G,z,q);c!==oe&&(c=oe,f(c.object)),re=g(B,G,z,K),re&&S(B,G,z,K)}else{let oe=q.wireframe===!0;(c.geometry!==G.id||c.program!==z.id||c.wireframe!==oe)&&(c.geometry=G.id,c.program=z.id,c.wireframe=oe,re=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,Y(B,q,z,G),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(B){return n.isWebGL2?i.bindVertexArray(B):r.bindVertexArrayOES(B)}function x(B){return n.isWebGL2?i.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function M(B,q,z){let G=z.wireframe===!0,K=o[B.id];K===void 0&&(K={},o[B.id]=K);let re=K[q.id];re===void 0&&(re={},K[q.id]=re);let oe=re[G];return oe===void 0&&(oe=y(p()),re[G]=oe),oe}function y(B){let q=[],z=[],G=[];for(let K=0;K<s;K++)q[K]=0,z[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:z,attributeDivisors:G,object:B,attributes:{},index:null}}function g(B,q,z,G){let K=c.attributes,re=q.attributes,oe=0,ue=z.getAttributes();for(let Te in ue)if(ue[Te].location>=0){let fe=K[Te],Ee=re[Te];if(Ee===void 0&&(Te==="instanceMatrix"&&B.instanceMatrix&&(Ee=B.instanceMatrix),Te==="instanceColor"&&B.instanceColor&&(Ee=B.instanceColor)),fe===void 0||fe.attribute!==Ee||Ee&&fe.data!==Ee.data)return!0;oe++}return c.attributesNum!==oe||c.index!==G}function S(B,q,z,G){let K={},re=q.attributes,oe=0,ue=z.getAttributes();for(let Te in ue)if(ue[Te].location>=0){let fe=re[Te];fe===void 0&&(Te==="instanceMatrix"&&B.instanceMatrix&&(fe=B.instanceMatrix),Te==="instanceColor"&&B.instanceColor&&(fe=B.instanceColor));let Ee={};Ee.attribute=fe,fe&&fe.data&&(Ee.data=fe.data),K[Te]=Ee,oe++}c.attributes=K,c.attributesNum=oe,c.index=G}function v(){let B=c.newAttributes;for(let q=0,z=B.length;q<z;q++)B[q]=0}function A(B){F(B,0)}function F(B,q){let z=c.newAttributes,G=c.enabledAttributes,K=c.attributeDivisors;z[B]=1,G[B]===0&&(i.enableVertexAttribArray(B),G[B]=1),K[B]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,q),K[B]=q)}function D(){let B=c.newAttributes,q=c.enabledAttributes;for(let z=0,G=q.length;z<G;z++)q[z]!==B[z]&&(i.disableVertexAttribArray(z),q[z]=0)}function N(B,q,z,G,K,re,oe){oe===!0?i.vertexAttribIPointer(B,q,z,K,re):i.vertexAttribPointer(B,q,z,G,K,re)}function Y(B,q,z,G){if(n.isWebGL2===!1&&(B.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let K=G.attributes,re=z.getAttributes(),oe=q.defaultAttributeValues;for(let ue in re){let Te=re[ue];if(Te.location>=0){let J=K[ue];if(J===void 0&&(ue==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),ue==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),J!==void 0){let fe=J.normalized,Ee=J.itemSize,ke=t.get(J);if(ke===void 0)continue;let qe=ke.buffer,ht=ke.type,ft=ke.bytesPerElement,Ze=n.isWebGL2===!0&&(ht===i.INT||ht===i.UNSIGNED_INT||J.gpuType===Id);if(J.isInterleavedBufferAttribute){let ae=J.data,Z=ae.stride,We=J.offset;if(ae.isInstancedInterleavedBuffer){for(let Xe=0;Xe<Te.locationSize;Xe++)F(Te.location+Xe,ae.meshPerAttribute);B.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Xe=0;Xe<Te.locationSize;Xe++)A(Te.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Xe=0;Xe<Te.locationSize;Xe++)N(Te.location+Xe,Ee/Te.locationSize,ht,fe,Z*ft,(We+Ee/Te.locationSize*Xe)*ft,Ze)}else{if(J.isInstancedBufferAttribute){for(let ae=0;ae<Te.locationSize;ae++)F(Te.location+ae,J.meshPerAttribute);B.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ae=0;ae<Te.locationSize;ae++)A(Te.location+ae);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ae=0;ae<Te.locationSize;ae++)N(Te.location+ae,Ee/Te.locationSize,ht,fe,Ee*ft,Ee/Te.locationSize*ae*ft,Ze)}}else if(oe!==void 0){let fe=oe[ue];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(Te.location,fe);break;case 3:i.vertexAttrib3fv(Te.location,fe);break;case 4:i.vertexAttrib4fv(Te.location,fe);break;default:i.vertexAttrib1fv(Te.location,fe)}}}}D()}function T(){le();for(let B in o){let q=o[B];for(let z in q){let G=q[z];for(let K in G)x(G[K].object),delete G[K];delete q[z]}delete o[B]}}function R(B){if(o[B.id]===void 0)return;let q=o[B.id];for(let z in q){let G=q[z];for(let K in G)x(G[K].object),delete G[K];delete q[z]}delete o[B.id]}function $(B){for(let q in o){let z=o[q];if(z[B.id]===void 0)continue;let G=z[B.id];for(let K in G)x(G[K].object),delete G[K];delete z[B.id]}}function le(){ve(),u=!0,c!==l&&(c=l,f(c.object))}function ve(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:le,resetDefaultState:ve,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:A,disableUnusedAttributes:D}}function iy(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,m){i.drawArrays(r,u,m),t.update(m,r,1)}function l(u,m,p){if(p===0)return;let f,x;if(s)f=i,x="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[x](r,u,m,p),t.update(m,r,p)}function c(u,m,p){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<p;x++)this.render(u[x],m[x]);else{f.multiDrawArraysWEBGL(r,u,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=m[M];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function sy(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,A=a||e.has("OES_texture_float"),F=v&&A,D=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:m,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:F,maxSamples:D}}function ry(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Vi,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){let f=m.length!==0||p||n!==0||s;return s=p,n=m.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,p){t=u(m,p,0)},this.setState=function(m,p,f){let x=m.clippingPlanes,M=m.clipIntersection,y=m.clipShadows,g=i.get(m);if(!s||x===null||x.length===0||r&&!y)r?u(null):c();else{let S=r?0:n,v=S*4,A=g.clippingState||null;l.value=A,A=u(x,p,v,f);for(let F=0;F!==v;++F)A[F]=t[F];g.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(m,p,f,x){let M=m!==null?m.length:0,y=null;if(M!==0){if(y=l.value,x!==!0||y===null){let g=f+M*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(y===null||y.length<g)&&(y=new Float32Array(g));for(let v=0,A=f;v!==M;++v,A+=4)a.copy(m[v]).applyMatrix4(S,o),a.normal.toArray(y,A),y[A+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function ay(i){let e=new WeakMap;function t(a,o){return o===fc?a.mapping=Hr:o===pc&&(a.mapping=zr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===fc||o===pc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new bc(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Oo=class extends Uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ur=4,$u=[.125,.215,.35,.446,.526,.582],Js=20,tc=new Oo,Ku=new xt,nc=null,ic=0,sc=0,Ks=(1+Math.sqrt(5))/2,Lr=1/Ks,Zu=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Ks,Lr),new k(0,Ks,-Lr),new k(Lr,0,Ks),new k(-Lr,0,Ks),new k(Ks,Lr,0),new k(-Ks,Lr,0)],Fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nc,ic,sc),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:va,format:Wi,colorSpace:ds,depthBuffer:!1},s=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oy(r)),this._blurMaterial=ly(r,e,t)}return s}_compileMaterial(e){let t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,tc)}_sceneToCubeUV(e,t,n,s){let o=new ui(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,m=u.autoClear,p=u.toneMapping;u.getClearColor(Ku),u.toneMapping=Ps,u.autoClear=!1;let f=new Cn({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1}),x=new $e(new Xn,f),M=!1,y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,M=!0):(f.color.copy(Ku),M=!0);for(let g=0;g<6;g++){let S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let v=this._cubeSize;po(s,S*v,g>2?v:0,v,v),u.setRenderTarget(s),M&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=m,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Hr||e.mapping===zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,tc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zu[(s-1)%Zu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,m=new $e(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Js-1),M=r/x,y=isFinite(r)?1+Math.floor(u*M):Js;y>Js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Js}`);let g=[],S=0;for(let N=0;N<Js;++N){let Y=N/M,T=Math.exp(-Y*Y/2);g.push(T),N===0?S+=T:N<y&&(S+=2*T)}for(let N=0;N<g.length;N++)g[N]=g[N]/S;p.envMap.value=e.texture,p.samples.value=y,p.weights.value=g,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-n;let A=this._sizeLods[s],F=3*A*(s>v-Ur?s-v+Ur:0),D=4*(this._cubeSize-A);po(t,F,D,3*A,2*A),l.setRenderTarget(t),l.render(m,tc)}};function oy(i){let e=[],t=[],n=[],s=i,r=i-Ur+1+$u.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ur?l=$u[a-i+Ur-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,m=1+c,p=[u,u,m,u,m,m,u,u,m,m,u,m],f=6,x=6,M=3,y=2,g=1,S=new Float32Array(M*x*f),v=new Float32Array(y*x*f),A=new Float32Array(g*x*f);for(let D=0;D<f;D++){let N=D%3*2/3-1,Y=D>2?0:-1,T=[N,Y,0,N+2/3,Y,0,N+2/3,Y+1,0,N,Y,0,N+2/3,Y+1,0,N,Y+1,0];S.set(T,M*x*D),v.set(p,y*x*D);let R=[D,D,D,D,D,D];A.set(R,g*x*D)}let F=new yi;F.setAttribute("position",new gi(S,M)),F.setAttribute("uv",new gi(v,y)),F.setAttribute("faceIndex",new gi(A,g)),e.push(F),s>Ur&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ju(i,e,t){let n=new fs(i,e,t);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ly(i,e,t){let n=new Float32Array(Js),s=new k(0,1,0);return new ps({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function ju(){return new ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Qu(){return new ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

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
	`}function cy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===fc||l===pc,u=l===Hr||l===zr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let m=e.get(o);return t===null&&(t=new Fo(i)),m=c?t.fromEquirectangular(o,m):t.fromCubemap(o,m),e.set(o,m),m.texture}else{if(e.has(o))return e.get(o).texture;{let m=o.image;if(c&&m&&m.height>0||u&&m&&s(m)){t===null&&(t=new Fo(i));let p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function hy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function uy(i,e,t,n){let s={},r=new WeakMap;function a(m){let p=m.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let M=p.morphAttributes[x];for(let y=0,g=M.length;y<g;y++)e.remove(M[y])}p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(m,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(m){let p=m.attributes;for(let x in p)e.update(p[x],i.ARRAY_BUFFER);let f=m.morphAttributes;for(let x in f){let M=f[x];for(let y=0,g=M.length;y<g;y++)e.update(M[y],i.ARRAY_BUFFER)}}function c(m){let p=[],f=m.index,x=m.attributes.position,M=0;if(f!==null){let S=f.array;M=f.version;for(let v=0,A=S.length;v<A;v+=3){let F=S[v+0],D=S[v+1],N=S[v+2];p.push(F,D,D,N,N,F)}}else if(x!==void 0){let S=x.array;M=x.version;for(let v=0,A=S.length/3-1;v<A;v+=3){let F=v+0,D=v+1,N=v+2;p.push(F,D,D,N,N,F)}}else return;let y=new(zd(p)?Do:Lo)(p,1);y.version=M;let g=r.get(m);g&&e.remove(g),r.set(m,y)}function u(m){let p=r.get(m);if(p){let f=m.index;f!==null&&p.version<f.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:u}}function dy(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,x){i.drawElements(r,x,o,f*l),t.update(x,r,1)}function m(f,x,M){if(M===0)return;let y,g;if(s)y=i,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](r,x,o,f*l,M),t.update(x,r,M)}function p(f,x,M){if(M===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<M;g++)this.render(f[g]/l,x[g]);else{y.multiDrawElementsWEBGL(r,x,0,o,f,0,M);let g=0;for(let S=0;S<M;S++)g+=x[S];t.update(g,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=m,this.renderMultiDraw=p}function fy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function py(i,e){return i[0]-e[0]}function my(i,e){return Math.abs(e[1])-Math.abs(i[1])}function gy(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new jn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,m){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=f!==void 0?f.length:0,M=r.get(u);if(M===void 0||M.count!==x){let B=function(){le.dispose(),r.delete(u),u.removeEventListener("dispose",B)};M!==void 0&&M.texture.dispose();let S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],N=u.morphAttributes.color||[],Y=0;S===!0&&(Y=1),v===!0&&(Y=2),A===!0&&(Y=3);let T=u.attributes.position.count*Y,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let $=new Float32Array(T*R*4*x),le=new Po($,T,R,x);le.type=Rs,le.needsUpdate=!0;let ve=Y*4;for(let q=0;q<x;q++){let z=F[q],G=D[q],K=N[q],re=T*R*4*q;for(let oe=0;oe<z.count;oe++){let ue=oe*ve;S===!0&&(a.fromBufferAttribute(z,oe),$[re+ue+0]=a.x,$[re+ue+1]=a.y,$[re+ue+2]=a.z,$[re+ue+3]=0),v===!0&&(a.fromBufferAttribute(G,oe),$[re+ue+4]=a.x,$[re+ue+5]=a.y,$[re+ue+6]=a.z,$[re+ue+7]=0),A===!0&&(a.fromBufferAttribute(K,oe),$[re+ue+8]=a.x,$[re+ue+9]=a.y,$[re+ue+10]=a.z,$[re+ue+11]=K.itemSize===4?a.w:1)}}M={count:x,texture:le,size:new He(T,R)},r.set(u,M),u.addEventListener("dispose",B)}let y=0;for(let S=0;S<p.length;S++)y+=p[S];let g=u.morphTargetsRelative?1:1-y;m.getUniforms().setValue(i,"morphTargetBaseInfluence",g),m.getUniforms().setValue(i,"morphTargetInfluences",p),m.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let f=p===void 0?0:p.length,x=n[u.id];if(x===void 0||x.length!==f){x=[];for(let v=0;v<f;v++)x[v]=[v,0];n[u.id]=x}for(let v=0;v<f;v++){let A=x[v];A[0]=v,A[1]=p[v]}x.sort(my);for(let v=0;v<8;v++)v<f&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(py);let M=u.morphAttributes.position,y=u.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let A=o[v],F=A[0],D=A[1];F!==Number.MAX_SAFE_INTEGER&&D?(M&&u.getAttribute("morphTarget"+v)!==M[F]&&u.setAttribute("morphTarget"+v,M[F]),y&&u.getAttribute("morphNormal"+v)!==y[F]&&u.setAttribute("morphNormal"+v,y[F]),s[v]=D,g+=D):(M&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),y&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let S=u.morphTargetsRelative?1:1-g;m.getUniforms().setValue(i,"morphTargetBaseInfluence",S),m.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function yy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,m=e.get(l,u);if(s.get(m)!==c&&(e.update(m),s.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return m}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Bo=class extends Ui{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:Qs,u!==Qs&&u!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qs&&(n=As),n===void 0&&u===Vr&&(n=js),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xd=new Ui,qd=new Bo(1,1);qd.compareFunction=Hd;var Yd=new Po,$d=new vc,Kd=new No,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function Kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ed[s];if(r===void 0&&(r=new Float32Array(s),ed[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nl(i,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;i.uniform2fv(this.addr,e),Yn(t,e)}}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qn(t,e))return;i.uniform3fv(this.addr,e),Yn(t,e)}}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;i.uniform4fv(this.addr,e),Yn(t,e)}}function by(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yn(t,e)}else{if(qn(t,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),Yn(t,n)}}function Sy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yn(t,e)}else{if(qn(t,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),Yn(t,n)}}function Ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yn(t,e)}else{if(qn(t,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),Yn(t,n)}}function Ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;i.uniform2iv(this.addr,e),Yn(t,e)}}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qn(t,e))return;i.uniform3iv(this.addr,e),Yn(t,e)}}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;i.uniform4iv(this.addr,e),Yn(t,e)}}function Cy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;i.uniform2uiv(this.addr,e),Yn(t,e)}}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qn(t,e))return;i.uniform3uiv(this.addr,e),Yn(t,e)}}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;i.uniform4uiv(this.addr,e),Yn(t,e)}}function Dy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?qd:Xd;t.setTexture2D(e||r,s)}function Uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$d,s)}function Ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kd,s)}function Oy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yd,s)}function Fy(i){switch(i){case 5126:return xy;case 35664:return _y;case 35665:return vy;case 35666:return My;case 35674:return by;case 35675:return Sy;case 35676:return Ey;case 5124:case 35670:return Ty;case 35667:case 35671:return wy;case 35668:case 35672:return Ay;case 35669:case 35673:return Ry;case 5125:return Cy;case 36294:return Py;case 36295:return Iy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Dy;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Oy}}function By(i,e){i.uniform1fv(this.addr,e)}function ky(i,e){let t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function Hy(i,e){let t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function zy(i,e){let t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function Vy(i,e){let t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Gy(i,e){let t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wy(i,e){let t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xy(i,e){i.uniform1iv(this.addr,e)}function qy(i,e){i.uniform2iv(this.addr,e)}function Yy(i,e){i.uniform3iv(this.addr,e)}function $y(i,e){i.uniform4iv(this.addr,e)}function Ky(i,e){i.uniform1uiv(this.addr,e)}function Zy(i,e){i.uniform2uiv(this.addr,e)}function Jy(i,e){i.uniform3uiv(this.addr,e)}function jy(i,e){i.uniform4uiv(this.addr,e)}function Qy(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Xd,r[a])}function ex(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$d,r[a])}function tx(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Kd,r[a])}function nx(i,e,t){let n=this.cache,s=e.length,r=nl(t,s);qn(n,r)||(i.uniform1iv(this.addr,r),Yn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yd,r[a])}function ix(i){switch(i){case 5126:return By;case 35664:return ky;case 35665:return Hy;case 35666:return zy;case 35674:return Vy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return $y;case 5125:return Ky;case 36294:return Zy;case 36295:return Jy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return nx}}var Sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fy(t.type)}},Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ix(t.type)}},Tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},rc=/(\w+)(\])?(\[|\.)?/g;function rd(i,e){i.seq.push(e),i.map[e.id]=e}function sx(i,e,t){let n=i.name,s=n.length;for(rc.lastIndex=0;;){let r=rc.exec(n),a=rc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rd(t,c===void 0?new Sc(o,i,e):new Ec(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new Tc(o),rd(t,m)),t=m}}}var kr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);sx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ad(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var rx=37297,ax=0;function ox(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function lx(i){let e=an.getPrimaries(an.workingColorSpace),t=an.getPrimaries(i),n;switch(e===t?n="":e===To&&t===Eo?n="LinearDisplayP3ToLinearSRGB":e===Eo&&t===To&&(n="LinearSRGBToLinearDisplayP3"),i){case ds:case tl:return[n,"LinearTransferOETF"];case ei:case rh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function od(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ox(i.getShaderSource(e),a)}else return s}function cx(i,e){let t=lx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hx(i,e){let t;switch(e){case Rp:t="Linear";break;case Cp:t="Reinhard";break;case Pp:t="OptimizedCineon";break;case Ip:t="ACESFilmic";break;case Dp:t="AgX";break;case Lp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ux(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nr).join(`
`)}function dx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Nr).join(`
`)}function fx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function px(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Nr(i){return i!==""}function ld(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(mx,yx)}var gx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yx(i,e){let t=Ct[e];if(t===void 0){let n=gx.get(e);if(n!==void 0)t=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wc(t)}var xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(i){return i.replace(xx,_x)}function _x(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ih?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hs&&(e="SHADOWMAP_TYPE_VSM"),e}function Mx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hr:case zr:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function Sx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cd:e="ENVMAP_BLENDING_MULTIPLY";break;case wp:e="ENVMAP_BLENDING_MIX";break;case Ap:e="ENVMAP_BLENDING_ADD";break}return e}function Ex(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Tx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=vx(t),c=Mx(t),u=bx(t),m=Sx(t),p=Ex(t),f=t.isWebGL2?"":ux(t),x=dx(t),M=fx(r),y=s.createProgram(),g,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Nr).join(`
`),g.length>0&&(g+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Nr).join(`
`),S.length>0&&(S+=`
`)):(g=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),S=[f,ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ps?"#define TONE_MAPPING":"",t.toneMapping!==Ps?Ct.tonemapping_pars_fragment:"",t.toneMapping!==Ps?hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,cx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),a=wc(a),a=ld(a,t),a=cd(a,t),o=wc(o),o=ld(o,t),o=cd(o,t),a=hd(a),o=hd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let A=v+g+a,F=v+S+o,D=ad(s,s.VERTEX_SHADER,A),N=ad(s,s.FRAGMENT_SHADER,F);s.attachShader(y,D),s.attachShader(y,N),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function Y(le){if(i.debug.checkShaderErrors){let ve=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(D).trim(),q=s.getShaderInfoLog(N).trim(),z=!0,G=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,D,N);else{let K=od(s,D,"vertex"),re=od(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Program Info Log: `+ve+`
`+K+`
`+re)}else ve!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ve):(B===""||q==="")&&(G=!1);G&&(le.diagnostics={runnable:z,programLog:ve,vertexShader:{log:B,prefix:g},fragmentShader:{log:q,prefix:S}})}s.deleteShader(D),s.deleteShader(N),T=new kr(s,y),R=px(s,y)}let T;this.getUniforms=function(){return T===void 0&&Y(this),T};let R;this.getAttributes=function(){return R===void 0&&Y(this),R};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=s.getProgramParameter(y,rx)),$},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ax++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=N,this}var wx=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rc(e),t.set(e,n)),n}},Rc=class{constructor(e){this.id=wx++,this.code=e,this.usedTimes=0}};function Ax(i,e,t,n,s,r,a){let o=new ba,l=new Ac,c=[],u=s.isWebGL2,m=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return T===0?"uv":`uv${T}`}function y(T,R,$,le,ve){let B=le.fog,q=ve.geometry,z=T.isMeshStandardMaterial?le.environment:null,G=(T.isMeshStandardMaterial?t:e).get(T.envMap||z),K=G&&G.mapping===el?G.image.height:null,re=x[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let oe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ue=oe!==void 0?oe.length:0,Te=0;q.morphAttributes.position!==void 0&&(Te=1),q.morphAttributes.normal!==void 0&&(Te=2),q.morphAttributes.color!==void 0&&(Te=3);let J,fe,Ee,ke;if(re){let Nn=ji[re];J=Nn.vertexShader,fe=Nn.fragmentShader}else J=T.vertexShader,fe=T.fragmentShader,l.update(T),Ee=l.getVertexShaderID(T),ke=l.getFragmentShaderID(T);let qe=i.getRenderTarget(),ht=ve.isInstancedMesh===!0,ft=ve.isBatchedMesh===!0,Ze=!!T.map,ae=!!T.matcap,Z=!!G,We=!!T.aoMap,Xe=!!T.lightMap,Qe=!!T.bumpMap,ze=!!T.normalMap,Je=!!T.displacementMap,gt=!!T.emissiveMap,C=!!T.metalnessMap,E=!!T.roughnessMap,ne=T.anisotropy>0,xe=T.clearcoat>0,be=T.iridescence>0,Se=T.sheen>0,Ke=T.transmission>0,Ue=ne&&!!T.anisotropyMap,Oe=xe&&!!T.clearcoatMap,at=xe&&!!T.clearcoatNormalMap,Et=xe&&!!T.clearcoatRoughnessMap,_e=be&&!!T.iridescenceMap,qt=be&&!!T.iridescenceThicknessMap,Pt=Se&&!!T.sheenColorMap,ut=Se&&!!T.sheenRoughnessMap,it=!!T.specularMap,Ve=!!T.specularColorMap,_t=!!T.specularIntensityMap,Bt=Ke&&!!T.transmissionMap,un=Ke&&!!T.thicknessMap,At=!!T.gradientMap,Pe=!!T.alphaMap,H=T.alphaTest>0,Le=!!T.alphaHash,De=!!T.extensions,rt=!!q.attributes.uv1,st=!!q.attributes.uv2,Zt=!!q.attributes.uv3,en=Ps;return T.toneMapped&&(qe===null||qe.isXRRenderTarget===!0)&&(en=i.toneMapping),{isWebGL2:u,shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:J,fragmentShader:fe,defines:T.defines,customVertexShaderID:Ee,customFragmentShaderID:ke,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:ft,instancing:ht,instancingColor:ht&&ve.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:qe===null?i.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:ds,map:Ze,matcap:ae,envMap:Z,envMapMode:Z&&G.mapping,envMapCubeUVHeight:K,aoMap:We,lightMap:Xe,bumpMap:Qe,normalMap:ze,displacementMap:p&&Je,emissiveMap:gt,normalMapObjectSpace:ze&&T.normalMapType===Xp,normalMapTangentSpace:ze&&T.normalMapType===kd,metalnessMap:C,roughnessMap:E,anisotropy:ne,anisotropyMap:Ue,clearcoat:xe,clearcoatMap:Oe,clearcoatNormalMap:at,clearcoatRoughnessMap:Et,iridescence:be,iridescenceMap:_e,iridescenceThicknessMap:qt,sheen:Se,sheenColorMap:Pt,sheenRoughnessMap:ut,specularMap:it,specularColorMap:Ve,specularIntensityMap:_t,transmission:Ke,transmissionMap:Bt,thicknessMap:un,gradientMap:At,opaque:T.transparent===!1&&T.blending===Fr,alphaMap:Pe,alphaTest:H,alphaHash:Le,combine:T.combine,mapUv:Ze&&M(T.map.channel),aoMapUv:We&&M(T.aoMap.channel),lightMapUv:Xe&&M(T.lightMap.channel),bumpMapUv:Qe&&M(T.bumpMap.channel),normalMapUv:ze&&M(T.normalMap.channel),displacementMapUv:Je&&M(T.displacementMap.channel),emissiveMapUv:gt&&M(T.emissiveMap.channel),metalnessMapUv:C&&M(T.metalnessMap.channel),roughnessMapUv:E&&M(T.roughnessMap.channel),anisotropyMapUv:Ue&&M(T.anisotropyMap.channel),clearcoatMapUv:Oe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:at&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ut&&M(T.sheenRoughnessMap.channel),specularMapUv:it&&M(T.specularMap.channel),specularColorMapUv:Ve&&M(T.specularColorMap.channel),specularIntensityMapUv:_t&&M(T.specularIntensityMap.channel),transmissionMapUv:Bt&&M(T.transmissionMap.channel),thicknessMapUv:un&&M(T.thicknessMap.channel),alphaMapUv:Pe&&M(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ze||ne),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:rt,vertexUv2s:st,vertexUv3s:Zt,pointsUvs:ve.isPoints===!0&&!!q.attributes.uv&&(Ze||Pe),fog:!!B,useFog:T.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:ve.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:en,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ze&&T.map.isVideoTexture===!0&&an.getTransfer(T.map.colorSpace)===gn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wn,flipSided:T.side===mi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:De&&T.extensions.derivatives===!0,extensionFragDepth:De&&T.extensions.fragDepth===!0,extensionDrawBuffers:De&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){let R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(let $ in T.defines)R.push($),R.push(T.defines[$]);return T.isRawShaderMaterial===!1&&(S(R,T),v(R,T),R.push(i.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function S(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function v(T,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),T.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function A(T){let R=x[T.type],$;if(R){let le=ji[R];$=gm.clone(le.uniforms)}else $=T.uniforms;return $}function F(T,R){let $;for(let le=0,ve=c.length;le<ve;le++){let B=c[le];if(B.cacheKey===R){$=B,++$.usedTimes;break}}return $===void 0&&($=new Tx(i,R,T,r),c.push($)),$}function D(T){if(--T.usedTimes===0){let R=c.indexOf(T);c[R]=c[c.length-1],c.pop(),T.destroy()}}function N(T){l.remove(T)}function Y(){l.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:F,releaseProgram:D,releaseShaderCache:N,programs:c,dispose:Y}}function Rx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(m,p,f,x,M,y){let g=i[e];return g===void 0?(g={id:m.id,object:m,geometry:p,material:f,groupOrder:x,renderOrder:m.renderOrder,z:M,group:y},i[e]=g):(g.id=m.id,g.object=m,g.geometry=p,g.material=f,g.groupOrder=x,g.renderOrder=m.renderOrder,g.z=M,g.group=y),e++,g}function o(m,p,f,x,M,y){let g=a(m,p,f,x,M,y);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(m,p,f,x,M,y){let g=a(m,p,f,x,M,y);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(m,p){t.length>1&&t.sort(m||Cx),n.length>1&&n.sort(p||dd),s.length>1&&s.sort(p||dd)}function u(){for(let m=e,p=i.length;m<p;m++){let f=i[m];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Px(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new fd,i.set(n,[a])):s>=r.length?(a=new fd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ix(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new xt};break;case"SpotLight":t={position:new k,direction:new k,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Lx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Dx=0;function Ux(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nx(i,e){let t=new Ix,n=Lx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new k);let r=new k,a=new zn,o=new zn;function l(u,m){let p=0,f=0,x=0;for(let le=0;le<9;le++)s.probe[le].set(0,0,0);let M=0,y=0,g=0,S=0,v=0,A=0,F=0,D=0,N=0,Y=0,T=0;u.sort(Ux);let R=m===!0?Math.PI:1;for(let le=0,ve=u.length;le<ve;le++){let B=u[le],q=B.color,z=B.intensity,G=B.distance,K=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=q.r*z*R,f+=q.g*z*R,x+=q.b*z*R;else if(B.isLightProbe){for(let re=0;re<9;re++)s.probe[re].addScaledVector(B.sh.coefficients[re],z);T++}else if(B.isDirectionalLight){let re=t.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity*R),B.castShadow){let oe=B.shadow,ue=n.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,s.directionalShadow[M]=ue,s.directionalShadowMap[M]=K,s.directionalShadowMatrix[M]=B.shadow.matrix,A++}s.directional[M]=re,M++}else if(B.isSpotLight){let re=t.get(B);re.position.setFromMatrixPosition(B.matrixWorld),re.color.copy(q).multiplyScalar(z*R),re.distance=G,re.coneCos=Math.cos(B.angle),re.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),re.decay=B.decay,s.spot[g]=re;let oe=B.shadow;if(B.map&&(s.spotLightMap[N]=B.map,N++,oe.updateMatrices(B),B.castShadow&&Y++),s.spotLightMatrix[g]=oe.matrix,B.castShadow){let ue=n.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,s.spotShadow[g]=ue,s.spotShadowMap[g]=K,D++}g++}else if(B.isRectAreaLight){let re=t.get(B);re.color.copy(q).multiplyScalar(z),re.halfWidth.set(B.width*.5,0,0),re.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=re,S++}else if(B.isPointLight){let re=t.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity*R),re.distance=B.distance,re.decay=B.decay,B.castShadow){let oe=B.shadow,ue=n.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,ue.shadowCameraNear=oe.camera.near,ue.shadowCameraFar=oe.camera.far,s.pointShadow[y]=ue,s.pointShadowMap[y]=K,s.pointShadowMatrix[y]=B.shadow.matrix,F++}s.point[y]=re,y++}else if(B.isHemisphereLight){let re=t.get(B);re.skyColor.copy(B.color).multiplyScalar(z*R),re.groundColor.copy(B.groundColor).multiplyScalar(z*R),s.hemi[v]=re,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=f,s.ambient[2]=x;let $=s.hash;($.directionalLength!==M||$.pointLength!==y||$.spotLength!==g||$.rectAreaLength!==S||$.hemiLength!==v||$.numDirectionalShadows!==A||$.numPointShadows!==F||$.numSpotShadows!==D||$.numSpotMaps!==N||$.numLightProbes!==T)&&(s.directional.length=M,s.spot.length=g,s.rectArea.length=S,s.point.length=y,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=D+N-Y,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=T,$.directionalLength=M,$.pointLength=y,$.spotLength=g,$.rectAreaLength=S,$.hemiLength=v,$.numDirectionalShadows=A,$.numPointShadows=F,$.numSpotShadows=D,$.numSpotMaps=N,$.numLightProbes=T,s.version=Dx++)}function c(u,m){let p=0,f=0,x=0,M=0,y=0,g=m.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){let A=u[S];if(A.isDirectionalLight){let F=s.directional[p];F.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(g),p++}else if(A.isSpotLight){let F=s.spot[x];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),F.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(g),x++}else if(A.isRectAreaLight){let F=s.rectArea[M];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),o.identity(),a.copy(A.matrixWorld),a.premultiply(g),o.extractRotation(a),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),F.halfWidth.applyMatrix4(o),F.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){let F=s.point[f];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),f++}else if(A.isHemisphereLight){let F=s.hemi[y];F.direction.setFromMatrixPosition(A.matrixWorld),F.direction.transformDirection(g),y++}}}return{setup:l,setupView:c,state:s}}function pd(i,e){let t=new Nx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(m){n.push(m)}function o(m){s.push(m)}function l(m){t.setup(n,m)}function c(m){t.setupView(n,m)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ox(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new pd(i,e),t.set(r,[l])):a>=o.length?(l=new pd(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Cc=class extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
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
}`;function kx(i,e,t){let n=new Sa,s=new He,r=new He,a=new jn,o=new Cc({depthPacking:Wp}),l=new Pc,c={},u=t.maxTextureSize,m={[Ls]:mi,[mi]:Ls,[wn]:wn},p=new ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Fx,fragmentShader:Bx}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let x=new yi;x.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new $e(x,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rd;let g=this.type;this.render=function(D,N,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;let T=i.getRenderTarget(),R=i.getActiveCubeFace(),$=i.getActiveMipmapLevel(),le=i.state;le.setBlending(Cs),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);let ve=g!==hs&&this.type===hs,B=g===hs&&this.type!==hs;for(let q=0,z=D.length;q<z;q++){let G=D[q],K=G.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let re=K.getFrameExtents();if(s.multiply(re),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,K.mapSize.y=r.y)),K.map===null||ve===!0||B===!0){let ue=this.type!==hs?{minFilter:hi,magFilter:hi}:{};K.map!==null&&K.map.dispose(),K.map=new fs(s.x,s.y,ue),K.map.texture.name=G.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let oe=K.getViewportCount();for(let ue=0;ue<oe;ue++){let Te=K.getViewport(ue);a.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),le.viewport(a),K.updateMatrices(G,ue),n=K.getFrustum(),A(N,Y,K.camera,G,this.type)}K.isPointLightShadow!==!0&&this.type===hs&&S(K,Y),K.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(T,R,$)};function S(D,N){let Y=e.update(M);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new fs(s.x,s.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(N,null,Y,p,M,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(N,null,Y,f,M,null)}function v(D,N,Y,T){let R=null,$=Y.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if($!==void 0)R=$;else if(R=Y.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let le=R.uuid,ve=N.uuid,B=c[le];B===void 0&&(B={},c[le]=B);let q=B[ve];q===void 0&&(q=R.clone(),B[ve]=q,N.addEventListener("dispose",F)),R=q}if(R.visible=N.visible,R.wireframe=N.wireframe,T===hs?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:m[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let le=i.properties.get(R);le.light=Y}return R}function A(D,N,Y,T,R){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===hs)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,D.matrixWorld);let ve=e.update(D),B=D.material;if(Array.isArray(B)){let q=ve.groups;for(let z=0,G=q.length;z<G;z++){let K=q[z],re=B[K.materialIndex];if(re&&re.visible){let oe=v(D,re,T,R);D.onBeforeShadow(i,D,N,Y,ve,oe,K),i.renderBufferDirect(Y,null,ve,oe,D,K),D.onAfterShadow(i,D,N,Y,ve,oe,K)}}}else if(B.visible){let q=v(D,B,T,R);D.onBeforeShadow(i,D,N,Y,ve,q,null),i.renderBufferDirect(Y,null,ve,q,D,null),D.onAfterShadow(i,D,N,Y,ve,q,null)}}let le=D.children;for(let ve=0,B=le.length;ve<B;ve++)A(le[ve],N,Y,T,R)}function F(D){D.target.removeEventListener("dispose",F);for(let Y in c){let T=c[Y],R=D.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Hx(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Le=new jn,De=null,rt=new jn(0,0,0,0);return{setMask:function(st){De!==st&&!H&&(i.colorMask(st,st,st,st),De=st)},setLocked:function(st){H=st},setClear:function(st,Zt,en,In,Nn){Nn===!0&&(st*=In,Zt*=In,en*=In),Le.set(st,Zt,en,In),rt.equals(Le)===!1&&(i.clearColor(st,Zt,en,In),rt.copy(Le))},reset:function(){H=!1,De=null,rt.set(-1,0,0,0)}}}function r(){let H=!1,Le=null,De=null,rt=null;return{setTest:function(st){st?ft(i.DEPTH_TEST):Ze(i.DEPTH_TEST)},setMask:function(st){Le!==st&&!H&&(i.depthMask(st),Le=st)},setFunc:function(st){if(De!==st){switch(st){case _p:i.depthFunc(i.NEVER);break;case vp:i.depthFunc(i.ALWAYS);break;case Mp:i.depthFunc(i.LESS);break;case vo:i.depthFunc(i.LEQUAL);break;case bp:i.depthFunc(i.EQUAL);break;case Sp:i.depthFunc(i.GEQUAL);break;case Ep:i.depthFunc(i.GREATER);break;case Tp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=st}},setLocked:function(st){H=st},setClear:function(st){rt!==st&&(i.clearDepth(st),rt=st)},reset:function(){H=!1,Le=null,De=null,rt=null}}}function a(){let H=!1,Le=null,De=null,rt=null,st=null,Zt=null,en=null,In=null,Nn=null;return{setTest:function(Jt){H||(Jt?ft(i.STENCIL_TEST):Ze(i.STENCIL_TEST))},setMask:function(Jt){Le!==Jt&&!H&&(i.stencilMask(Jt),Le=Jt)},setFunc:function(Jt,$n,Vn){(De!==Jt||rt!==$n||st!==Vn)&&(i.stencilFunc(Jt,$n,Vn),De=Jt,rt=$n,st=Vn)},setOp:function(Jt,$n,Vn){(Zt!==Jt||en!==$n||In!==Vn)&&(i.stencilOp(Jt,$n,Vn),Zt=Jt,en=$n,In=Vn)},setLocked:function(Jt){H=Jt},setClear:function(Jt){Nn!==Jt&&(i.clearStencil(Jt),Nn=Jt)},reset:function(){H=!1,Le=null,De=null,rt=null,st=null,Zt=null,en=null,In=null,Nn=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,m=new WeakMap,p={},f={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,F=null,D=null,N=null,Y=null,T=new xt(0,0,0),R=0,$=!1,le=null,ve=null,B=null,q=null,z=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,re=0,oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(oe)[1]),K=re>=1):oe.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),K=re>=2);let ue=null,Te={},J=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Ee=new jn().fromArray(J),ke=new jn().fromArray(fe);function qe(H,Le,De,rt){let st=new Uint8Array(4),Zt=i.createTexture();i.bindTexture(H,Zt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let en=0;en<De;en++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Le,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(Le+en,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return Zt}let ht={};ht[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ft(i.DEPTH_TEST),l.setFunc(vo),gt(!1),C(Yh),ft(i.CULL_FACE),ze(Cs);function ft(H){p[H]!==!0&&(i.enable(H),p[H]=!0)}function Ze(H){p[H]!==!1&&(i.disable(H),p[H]=!1)}function ae(H,Le){return f[H]!==Le?(i.bindFramebuffer(H,Le),f[H]=Le,n&&(H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Le),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Le)),!0):!1}function Z(H,Le){let De=M,rt=!1;if(H)if(De=x.get(Le),De===void 0&&(De=[],x.set(Le,De)),H.isWebGLMultipleRenderTargets){let st=H.texture;if(De.length!==st.length||De[0]!==i.COLOR_ATTACHMENT0){for(let Zt=0,en=st.length;Zt<en;Zt++)De[Zt]=i.COLOR_ATTACHMENT0+Zt;De.length=st.length,rt=!0}}else De[0]!==i.COLOR_ATTACHMENT0&&(De[0]=i.COLOR_ATTACHMENT0,rt=!0);else De[0]!==i.BACK&&(De[0]=i.BACK,rt=!0);rt&&(t.isWebGL2?i.drawBuffers(De):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(De))}function We(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let Xe={[Zs]:i.FUNC_ADD,[sp]:i.FUNC_SUBTRACT,[rp]:i.FUNC_REVERSE_SUBTRACT};if(n)Xe[Jh]=i.MIN,Xe[jh]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(Xe[Jh]=H.MIN_EXT,Xe[jh]=H.MAX_EXT)}let Qe={[ap]:i.ZERO,[op]:i.ONE,[lp]:i.SRC_COLOR,[uc]:i.SRC_ALPHA,[pp]:i.SRC_ALPHA_SATURATE,[dp]:i.DST_COLOR,[hp]:i.DST_ALPHA,[cp]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[fp]:i.ONE_MINUS_DST_COLOR,[up]:i.ONE_MINUS_DST_ALPHA,[mp]:i.CONSTANT_COLOR,[gp]:i.ONE_MINUS_CONSTANT_COLOR,[yp]:i.CONSTANT_ALPHA,[xp]:i.ONE_MINUS_CONSTANT_ALPHA};function ze(H,Le,De,rt,st,Zt,en,In,Nn,Jt){if(H===Cs){g===!0&&(Ze(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),H!==ip){if(H!==S||Jt!==$){if((v!==Zs||D!==Zs)&&(i.blendEquation(i.FUNC_ADD),v=Zs,D=Zs),Jt)switch(H){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $h:i.blendFunc(i.ONE,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $h:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,F=null,N=null,Y=null,T.set(0,0,0),R=0,S=H,$=Jt}return}st=st||Le,Zt=Zt||De,en=en||rt,(Le!==v||st!==D)&&(i.blendEquationSeparate(Xe[Le],Xe[st]),v=Le,D=st),(De!==A||rt!==F||Zt!==N||en!==Y)&&(i.blendFuncSeparate(Qe[De],Qe[rt],Qe[Zt],Qe[en]),A=De,F=rt,N=Zt,Y=en),(In.equals(T)===!1||Nn!==R)&&(i.blendColor(In.r,In.g,In.b,Nn),T.copy(In),R=Nn),S=H,$=!1}function Je(H,Le){H.side===wn?Ze(i.CULL_FACE):ft(i.CULL_FACE);let De=H.side===mi;Le&&(De=!De),gt(De),H.blending===Fr&&H.transparent===!1?ze(Cs):ze(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),o.setMask(H.colorWrite);let rt=H.stencilWrite;c.setTest(rt),rt&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ne(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(H){le!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),le=H)}function C(H){H!==tp?(ft(i.CULL_FACE),H!==ve&&(H===Yh?i.cullFace(i.BACK):H===np?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ze(i.CULL_FACE),ve=H}function E(H){H!==B&&(K&&i.lineWidth(H),B=H)}function ne(H,Le,De){H?(ft(i.POLYGON_OFFSET_FILL),(q!==Le||z!==De)&&(i.polygonOffset(Le,De),q=Le,z=De)):Ze(i.POLYGON_OFFSET_FILL)}function xe(H){H?ft(i.SCISSOR_TEST):Ze(i.SCISSOR_TEST)}function be(H){H===void 0&&(H=i.TEXTURE0+G-1),ue!==H&&(i.activeTexture(H),ue=H)}function Se(H,Le,De){De===void 0&&(ue===null?De=i.TEXTURE0+G-1:De=ue);let rt=Te[De];rt===void 0&&(rt={type:void 0,texture:void 0},Te[De]=rt),(rt.type!==H||rt.texture!==Le)&&(ue!==De&&(i.activeTexture(De),ue=De),i.bindTexture(H,Le||ht[H]),rt.type=H,rt.texture=Le)}function Ke(){let H=Te[ue];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(H){Ee.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ee.copy(H))}function Bt(H){ke.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),ke.copy(H))}function un(H,Le){let De=m.get(Le);De===void 0&&(De=new WeakMap,m.set(Le,De));let rt=De.get(H);rt===void 0&&(rt=i.getUniformBlockIndex(Le,H.name),De.set(H,rt))}function At(H,Le){let rt=m.get(Le).get(H);u.get(Le)!==rt&&(i.uniformBlockBinding(Le,rt,H.__bindingPointIndex),u.set(Le,rt))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ue=null,Te={},f={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,F=null,D=null,N=null,Y=null,T=new xt(0,0,0),R=0,$=!1,le=null,ve=null,B=null,q=null,z=null,Ee.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ft,disable:Ze,bindFramebuffer:ae,drawBuffers:Z,useProgram:We,setBlending:ze,setMaterial:Je,setFlipSided:gt,setCullFace:C,setLineWidth:E,setPolygonOffset:ne,setScissorTest:xe,activeTexture:be,bindTexture:Se,unbindTexture:Ke,compressedTexImage2D:Ue,compressedTexImage3D:Oe,texImage2D:it,texImage3D:Ve,updateUBOMapping:un,uniformBlockBinding:At,texStorage2D:Pt,texStorage3D:ut,texSubImage2D:at,texSubImage3D:Et,compressedTexSubImage2D:_e,compressedTexSubImage3D:qt,scissor:_t,viewport:Bt,reset:Pe}}function zx(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,m,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return f?new OffscreenCanvas(C,E):Ao("canvas")}function M(C,E,ne,xe){let be=1;if((C.width>xe||C.height>xe)&&(be=xe/Math.max(C.width,C.height)),be<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Se=E?xc:Math.floor,Ke=Se(be*C.width),Ue=Se(be*C.height);m===void 0&&(m=x(Ke,Ue));let Oe=ne?x(Ke,Ue):m;return Oe.width=Ke,Oe.height=Ue,Oe.getContext("2d").drawImage(C,0,0,Ke,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ke+"x"+Ue+")."),Oe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Iu(C.width)&&Iu(C.height)}function g(C){return o?!1:C.wrapS!==Gi||C.wrapT!==Gi||C.minFilter!==hi&&C.minFilter!==Li}function S(C,E){return C.generateMipmaps&&E&&C.minFilter!==hi&&C.minFilter!==Li}function v(C){i.generateMipmap(C)}function A(C,E,ne,xe,be=!1){if(o===!1)return E;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Se=E;if(E===i.RED&&(ne===i.FLOAT&&(Se=i.R32F),ne===i.HALF_FLOAT&&(Se=i.R16F),ne===i.UNSIGNED_BYTE&&(Se=i.R8)),E===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(Se=i.R8UI),ne===i.UNSIGNED_SHORT&&(Se=i.R16UI),ne===i.UNSIGNED_INT&&(Se=i.R32UI),ne===i.BYTE&&(Se=i.R8I),ne===i.SHORT&&(Se=i.R16I),ne===i.INT&&(Se=i.R32I)),E===i.RG&&(ne===i.FLOAT&&(Se=i.RG32F),ne===i.HALF_FLOAT&&(Se=i.RG16F),ne===i.UNSIGNED_BYTE&&(Se=i.RG8)),E===i.RGBA){let Ke=be?So:an.getTransfer(xe);ne===i.FLOAT&&(Se=i.RGBA32F),ne===i.HALF_FLOAT&&(Se=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(Se=Ke===gn?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT_4_4_4_4&&(Se=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(Se=i.RGB5_A1)}return(Se===i.R16F||Se===i.R32F||Se===i.RG16F||Se===i.RG32F||Se===i.RGBA16F||Se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function F(C,E,ne){return S(C,ne)===!0||C.isFramebufferTexture&&C.minFilter!==hi&&C.minFilter!==Li?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function D(C){return C===hi||C===Qh||C===Cl?i.NEAREST:i.LINEAR}function N(C){let E=C.target;E.removeEventListener("dispose",N),T(E),E.isVideoTexture&&u.delete(E)}function Y(C){let E=C.target;E.removeEventListener("dispose",Y),$(E)}function T(C){let E=n.get(C);if(E.__webglInit===void 0)return;let ne=C.source,xe=p.get(ne);if(xe){let be=xe[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&R(C),Object.keys(xe).length===0&&p.delete(ne)}n.remove(C)}function R(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let ne=C.source,xe=p.get(ne);delete xe[E.__cacheKey],a.memory.textures--}function $(C){let E=C.texture,ne=n.get(C),xe=n.get(E);if(xe.__webglTexture!==void 0&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(ne.__webglFramebuffer[be]))for(let Se=0;Se<ne.__webglFramebuffer[be].length;Se++)i.deleteFramebuffer(ne.__webglFramebuffer[be][Se]);else i.deleteFramebuffer(ne.__webglFramebuffer[be]);ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer[be])}else{if(Array.isArray(ne.__webglFramebuffer))for(let be=0;be<ne.__webglFramebuffer.length;be++)i.deleteFramebuffer(ne.__webglFramebuffer[be]);else i.deleteFramebuffer(ne.__webglFramebuffer);if(ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let be=0;be<ne.__webglColorRenderbuffer.length;be++)ne.__webglColorRenderbuffer[be]&&i.deleteRenderbuffer(ne.__webglColorRenderbuffer[be]);ne.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let be=0,Se=E.length;be<Se;be++){let Ke=n.get(E[be]);Ke.__webglTexture&&(i.deleteTexture(Ke.__webglTexture),a.memory.textures--),n.remove(E[be])}n.remove(E),n.remove(C)}let le=0;function ve(){le=0}function B(){let C=le;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),le+=1,C}function q(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function z(C,E){let ne=n.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.version>0&&ne.__version!==C.version){let xe=C.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(ne,C,E);return}}t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+E)}function G(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){Ee(ne,C,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+E)}function K(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){Ee(ne,C,E);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+E)}function re(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){ke(ne,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+E)}let oe={[xa]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[mc]:i.MIRRORED_REPEAT},ue={[hi]:i.NEAREST,[Qh]:i.NEAREST_MIPMAP_NEAREST,[Cl]:i.NEAREST_MIPMAP_LINEAR,[Li]:i.LINEAR,[Up]:i.LINEAR_MIPMAP_NEAREST,[_a]:i.LINEAR_MIPMAP_LINEAR},Te={[qp]:i.NEVER,[jp]:i.ALWAYS,[Yp]:i.LESS,[Hd]:i.LEQUAL,[$p]:i.EQUAL,[Jp]:i.GEQUAL,[Kp]:i.GREATER,[Zp]:i.NOTEQUAL};function J(C,E,ne){if(ne?(i.texParameteri(C,i.TEXTURE_WRAP_S,oe[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,oe[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,oe[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[E.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Gi||E.wrapT!==Gi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,D(E.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,D(E.minFilter)),E.minFilter!==hi&&E.minFilter!==Li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===hi||E.minFilter!==Cl&&E.minFilter!==_a||E.type===Rs&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===va&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(C,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function fe(C,E){let ne=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",N));let xe=E.source,be=p.get(xe);be===void 0&&(be={},p.set(xe,be));let Se=q(E);if(Se!==C.__cacheKey){be[Se]===void 0&&(be[Se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ne=!0),be[Se].usedTimes++;let Ke=be[C.__cacheKey];Ke!==void 0&&(be[C.__cacheKey].usedTimes--,Ke.usedTimes===0&&R(E)),C.__cacheKey=Se,C.__webglTexture=be[Se].texture}return ne}function Ee(C,E,ne){let xe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=i.TEXTURE_3D);let be=fe(C,E),Se=E.source;t.bindTexture(xe,C.__webglTexture,i.TEXTURE0+ne);let Ke=n.get(Se);if(Se.version!==Ke.__version||be===!0){t.activeTexture(i.TEXTURE0+ne);let Ue=an.getPrimaries(an.workingColorSpace),Oe=E.colorSpace===Di?null:an.getPrimaries(E.colorSpace),at=E.colorSpace===Di||Ue===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Et=g(E)&&y(E.image)===!1,_e=M(E.image,Et,!1,s.maxTextureSize);_e=gt(E,_e);let qt=y(_e)||o,Pt=r.convert(E.format,E.colorSpace),ut=r.convert(E.type),it=A(E.internalFormat,Pt,ut,E.colorSpace,E.isVideoTexture);J(xe,E,qt);let Ve,_t=E.mipmaps,Bt=o&&E.isVideoTexture!==!0&&it!==Fd,un=Ke.__version===void 0||be===!0,At=F(E,_e,qt);if(E.isDepthTexture)it=i.DEPTH_COMPONENT,o?E.type===Rs?it=i.DEPTH_COMPONENT32F:E.type===As?it=i.DEPTH_COMPONENT24:E.type===js?it=i.DEPTH24_STENCIL8:it=i.DEPTH_COMPONENT16:E.type===Rs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Qs&&it===i.DEPTH_COMPONENT&&E.type!==sh&&E.type!==As&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=As,ut=r.convert(E.type)),E.format===Vr&&it===i.DEPTH_COMPONENT&&(it=i.DEPTH_STENCIL,E.type!==js&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=js,ut=r.convert(E.type))),un&&(Bt?t.texStorage2D(i.TEXTURE_2D,1,it,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,it,_e.width,_e.height,0,Pt,ut,null));else if(E.isDataTexture)if(_t.length>0&&qt){Bt&&un&&t.texStorage2D(i.TEXTURE_2D,At,it,_t[0].width,_t[0].height);for(let Pe=0,H=_t.length;Pe<H;Pe++)Ve=_t[Pe],Bt?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Ve.width,Ve.height,Pt,ut,Ve.data):t.texImage2D(i.TEXTURE_2D,Pe,it,Ve.width,Ve.height,0,Pt,ut,Ve.data);E.generateMipmaps=!1}else Bt?(un&&t.texStorage2D(i.TEXTURE_2D,At,it,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Pt,ut,_e.data)):t.texImage2D(i.TEXTURE_2D,0,it,_e.width,_e.height,0,Pt,ut,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Bt&&un&&t.texStorage3D(i.TEXTURE_2D_ARRAY,At,it,_t[0].width,_t[0].height,_e.depth);for(let Pe=0,H=_t.length;Pe<H;Pe++)Ve=_t[Pe],E.format!==Wi?Pt!==null?Bt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,Ve.width,Ve.height,_e.depth,Pt,Ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Pe,it,Ve.width,Ve.height,_e.depth,0,Ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,Ve.width,Ve.height,_e.depth,Pt,ut,Ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Pe,it,Ve.width,Ve.height,_e.depth,0,Pt,ut,Ve.data)}else{Bt&&un&&t.texStorage2D(i.TEXTURE_2D,At,it,_t[0].width,_t[0].height);for(let Pe=0,H=_t.length;Pe<H;Pe++)Ve=_t[Pe],E.format!==Wi?Pt!==null?Bt?t.compressedTexSubImage2D(i.TEXTURE_2D,Pe,0,0,Ve.width,Ve.height,Pt,Ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Pe,it,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Ve.width,Ve.height,Pt,ut,Ve.data):t.texImage2D(i.TEXTURE_2D,Pe,it,Ve.width,Ve.height,0,Pt,ut,Ve.data)}else if(E.isDataArrayTexture)Bt?(un&&t.texStorage3D(i.TEXTURE_2D_ARRAY,At,it,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Pt,ut,_e.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,it,_e.width,_e.height,_e.depth,0,Pt,ut,_e.data);else if(E.isData3DTexture)Bt?(un&&t.texStorage3D(i.TEXTURE_3D,At,it,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Pt,ut,_e.data)):t.texImage3D(i.TEXTURE_3D,0,it,_e.width,_e.height,_e.depth,0,Pt,ut,_e.data);else if(E.isFramebufferTexture){if(un)if(Bt)t.texStorage2D(i.TEXTURE_2D,At,it,_e.width,_e.height);else{let Pe=_e.width,H=_e.height;for(let Le=0;Le<At;Le++)t.texImage2D(i.TEXTURE_2D,Le,it,Pe,H,0,Pt,ut,null),Pe>>=1,H>>=1}}else if(_t.length>0&&qt){Bt&&un&&t.texStorage2D(i.TEXTURE_2D,At,it,_t[0].width,_t[0].height);for(let Pe=0,H=_t.length;Pe<H;Pe++)Ve=_t[Pe],Bt?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Pt,ut,Ve):t.texImage2D(i.TEXTURE_2D,Pe,it,Pt,ut,Ve);E.generateMipmaps=!1}else Bt?(un&&t.texStorage2D(i.TEXTURE_2D,At,it,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,ut,_e)):t.texImage2D(i.TEXTURE_2D,0,it,Pt,ut,_e);S(E,qt)&&v(xe),Ke.__version=Se.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ke(C,E,ne){if(E.image.length!==6)return;let xe=fe(C,E),be=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+ne);let Se=n.get(be);if(be.version!==Se.__version||xe===!0){t.activeTexture(i.TEXTURE0+ne);let Ke=an.getPrimaries(an.workingColorSpace),Ue=E.colorSpace===Di?null:an.getPrimaries(E.colorSpace),Oe=E.colorSpace===Di||Ke===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let at=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let Pe=0;Pe<6;Pe++)!at&&!Et?_e[Pe]=M(E.image[Pe],!1,!0,s.maxCubemapSize):_e[Pe]=Et?E.image[Pe].image:E.image[Pe],_e[Pe]=gt(E,_e[Pe]);let qt=_e[0],Pt=y(qt)||o,ut=r.convert(E.format,E.colorSpace),it=r.convert(E.type),Ve=A(E.internalFormat,ut,it,E.colorSpace),_t=o&&E.isVideoTexture!==!0,Bt=Se.__version===void 0||xe===!0,un=F(E,qt,Pt);J(i.TEXTURE_CUBE_MAP,E,Pt);let At;if(at){_t&&Bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,un,Ve,qt.width,qt.height);for(let Pe=0;Pe<6;Pe++){At=_e[Pe].mipmaps;for(let H=0;H<At.length;H++){let Le=At[H];E.format!==Wi?ut!==null?_t?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H,0,0,Le.width,Le.height,ut,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H,Ve,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H,0,0,Le.width,Le.height,ut,it,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H,Ve,Le.width,Le.height,0,ut,it,Le.data)}}}else{At=E.mipmaps,_t&&Bt&&(At.length>0&&un++,t.texStorage2D(i.TEXTURE_CUBE_MAP,un,Ve,_e[0].width,_e[0].height));for(let Pe=0;Pe<6;Pe++)if(Et){_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,_e[Pe].width,_e[Pe].height,ut,it,_e[Pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ve,_e[Pe].width,_e[Pe].height,0,ut,it,_e[Pe].data);for(let H=0;H<At.length;H++){let De=At[H].image[Pe].image;_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H+1,0,0,De.width,De.height,ut,it,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H+1,Ve,De.width,De.height,0,ut,it,De.data)}}else{_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ut,it,_e[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ve,ut,it,_e[Pe]);for(let H=0;H<At.length;H++){let Le=At[H];_t?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H+1,0,0,ut,it,Le.image[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H+1,Ve,ut,it,Le.image[Pe])}}}S(E,Pt)&&v(i.TEXTURE_CUBE_MAP),Se.__version=be.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function qe(C,E,ne,xe,be,Se){let Ke=r.convert(ne.format,ne.colorSpace),Ue=r.convert(ne.type),Oe=A(ne.internalFormat,Ke,Ue,ne.colorSpace);if(!n.get(E).__hasExternalTextures){let Et=Math.max(1,E.width>>Se),_e=Math.max(1,E.height>>Se);be===i.TEXTURE_3D||be===i.TEXTURE_2D_ARRAY?t.texImage3D(be,Se,Oe,Et,_e,E.depth,0,Ke,Ue,null):t.texImage2D(be,Se,Oe,Et,_e,0,Ke,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ze(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,be,n.get(ne).__webglTexture,0,Qe(E)):(be===i.TEXTURE_2D||be>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,be,n.get(ne).__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,E,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let xe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ne||ze(E)){let be=E.depthTexture;be&&be.isDepthTexture&&(be.type===Rs?xe=i.DEPTH_COMPONENT32F:be.type===As&&(xe=i.DEPTH_COMPONENT24));let Se=Qe(E);ze(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,xe,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,xe,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,xe,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let xe=Qe(E);ne&&ze(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,E.width,E.height):ze(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let xe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let be=0;be<xe.length;be++){let Se=xe[be],Ke=r.convert(Se.format,Se.colorSpace),Ue=r.convert(Se.type),Oe=A(Se.internalFormat,Ke,Ue,Se.colorSpace),at=Qe(E);ne&&ze(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Oe,E.width,E.height):ze(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Oe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);let xe=n.get(E.depthTexture).__webglTexture,be=Qe(E);if(E.depthTexture.format===Qs)ze(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(E.depthTexture.format===Vr)ze(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ze(C){let E=n.get(C),ne=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ft(E.__webglFramebuffer,C)}else if(ne){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]=i.createRenderbuffer(),ht(E.__webglDepthbuffer[xe],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),ht(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(C,E,ne){let xe=n.get(C);E!==void 0&&qe(xe.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&Ze(C)}function Z(C){let E=C.texture,ne=n.get(C),xe=n.get(E);C.addEventListener("dispose",Y),C.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=E.version,a.memory.textures++);let be=C.isWebGLCubeRenderTarget===!0,Se=C.isWebGLMultipleRenderTargets===!0,Ke=y(C)||o;if(be){ne.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(o&&E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer[Ue]=[];for(let Oe=0;Oe<E.mipmaps.length;Oe++)ne.__webglFramebuffer[Ue][Oe]=i.createFramebuffer()}else ne.__webglFramebuffer[Ue]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)ne.__webglFramebuffer[Ue]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if(Se)if(s.drawBuffers){let Ue=C.texture;for(let Oe=0,at=Ue.length;Oe<at;Oe++){let Et=n.get(Ue[Oe]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&ze(C)===!1){let Ue=Se?E:[E];ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Ue.length;Oe++){let at=Ue[Oe];ne.__webglColorRenderbuffer[Oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[Oe]);let Et=r.convert(at.format,at.colorSpace),_e=r.convert(at.type),qt=A(at.internalFormat,Et,_e,at.colorSpace,C.isXRRenderTarget===!0),Pt=Qe(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,qt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(ne.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),J(i.TEXTURE_CUBE_MAP,E,Ke);for(let Ue=0;Ue<6;Ue++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Oe=0;Oe<E.mipmaps.length;Oe++)qe(ne.__webglFramebuffer[Ue][Oe],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Oe);else qe(ne.__webglFramebuffer[Ue],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(E,Ke)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){let Ue=C.texture;for(let Oe=0,at=Ue.length;Oe<at;Oe++){let Et=Ue[Oe],_e=n.get(Et);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),J(i.TEXTURE_2D,Et,Ke),qe(ne.__webglFramebuffer,C,Et,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,0),S(Et,Ke)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ue=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Ue=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ue,xe.__webglTexture),J(Ue,E,Ke),o&&E.mipmaps&&E.mipmaps.length>0)for(let Oe=0;Oe<E.mipmaps.length;Oe++)qe(ne.__webglFramebuffer[Oe],C,E,i.COLOR_ATTACHMENT0,Ue,Oe);else qe(ne.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,Ue,0);S(E,Ke)&&v(Ue),t.unbindTexture()}C.depthBuffer&&Ze(C)}function We(C){let E=y(C)||o,ne=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let xe=0,be=ne.length;xe<be;xe++){let Se=ne[xe];if(S(Se,E)){let Ke=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(Se).__webglTexture;t.bindTexture(Ke,Ue),v(Ke),t.unbindTexture()}}}function Xe(C){if(o&&C.samples>0&&ze(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],ne=C.width,xe=C.height,be=i.COLOR_BUFFER_BIT,Se=[],Ke=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(C),Oe=C.isWebGLMultipleRenderTargets===!0;if(Oe)for(let at=0;at<E.length;at++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let at=0;at<E.length;at++){Se.push(i.COLOR_ATTACHMENT0+at),C.depthBuffer&&Se.push(Ke);let Et=Ue.__ignoreDepthValues!==void 0?Ue.__ignoreDepthValues:!1;if(Et===!1&&(C.depthBuffer&&(be|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(be|=i.STENCIL_BUFFER_BIT)),Oe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[at]),Et===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ke]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ke])),Oe){let _e=n.get(E[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,ne,xe,0,0,ne,xe,be,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Oe)for(let at=0;at<E.length;at++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[at]);let Et=n.get(E[at]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,Et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}}function Qe(C){return Math.min(s.maxSamples,C.samples)}function ze(C){let E=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Je(C){let E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function gt(C,E){let ne=C.colorSpace,xe=C.format,be=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===gc||ne!==ds&&ne!==Di&&(an.getTransfer(ne)===gn?o===!1?e.has("EXT_sRGB")===!0&&xe===Wi?(C.format=gc,C.minFilter=Li,C.generateMipmaps=!1):E=Ro.sRGBToLinear(E):(xe!==Wi||be!==Is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),E}this.allocateTextureUnit=B,this.resetTextureUnits=ve,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=re,this.rebindTextures=ae,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=ze}function Vx(i,e,t){let n=t.isWebGL2;function s(r,a=Di){let o,l=an.getTransfer(a);if(r===Is)return i.UNSIGNED_BYTE;if(r===Ld)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Dd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Np)return i.BYTE;if(r===Op)return i.SHORT;if(r===sh)return i.UNSIGNED_SHORT;if(r===Id)return i.INT;if(r===As)return i.UNSIGNED_INT;if(r===Rs)return i.FLOAT;if(r===va)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Fp)return i.ALPHA;if(r===Wi)return i.RGBA;if(r===Bp)return i.LUMINANCE;if(r===kp)return i.LUMINANCE_ALPHA;if(r===Qs)return i.DEPTH_COMPONENT;if(r===Vr)return i.DEPTH_STENCIL;if(r===gc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Hp)return i.RED;if(r===Ud)return i.RED_INTEGER;if(r===zp)return i.RG;if(r===Nd)return i.RG_INTEGER;if(r===Od)return i.RGBA_INTEGER;if(r===Pl||r===Il||r===Ll||r===Dl)if(l===gn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Pl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Pl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eu||r===tu||r===nu||r===iu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===eu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===iu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===su||r===ru)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===su)return l===gn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ru)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===au||r===ou||r===lu||r===cu||r===hu||r===uu||r===du||r===fu||r===pu||r===mu||r===gu||r===yu||r===xu||r===_u)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===au)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ou)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lu)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cu)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hu)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uu)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===du)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fu)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pu)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mu)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gu)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yu)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xu)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_u)return l===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ul||r===vu||r===Mu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ul)return l===gn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vp||r===bu||r===Su||r===Eu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ul)return o.COMPRESSED_RED_RGTC1_EXT;if(r===bu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Su)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===js?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ic=class extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ei=class extends di{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gx={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let y=t.getJointPose(M,n),g=this._getHandJoint(c,M);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],p=u.position.distanceTo(m.position),f=.02,x=.005;c.inputState.pinching&&p>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Lc=class extends Ds{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,p=null,f=null,x=null,M=t.getContextAttributes(),y=null,g=null,S=[],v=[],A=new He,F=null,D=new ui;D.layers.enable(1),D.viewport=new jn;let N=new ui;N.layers.enable(2),N.viewport=new jn;let Y=[D,N],T=new Ic;T.layers.enable(1),T.layers.enable(2);let R=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=S[J];return fe===void 0&&(fe=new pa,S[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=S[J];return fe===void 0&&(fe=new pa,S[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=S[J];return fe===void 0&&(fe=new pa,S[J]=fe),fe.getHandSpace()};function le(J){let fe=v.indexOf(J.inputSource);if(fe===-1)return;let Ee=S[fe];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,c||a),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function ve(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",ve),s.removeEventListener("inputsourceschange",B);for(let J=0;J<S.length;J++){let fe=v[J];fe!==null&&(v[J]=null,S[J].disconnect(fe))}R=null,$=null,e.setRenderTarget(y),f=null,p=null,m=null,s=null,g=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",ve),s.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let fe={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new fs(f.framebufferWidth,f.framebufferHeight,{format:Wi,type:Is,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let fe=null,Ee=null,ke=null;M.depth&&(ke=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?Vr:Qs,Ee=M.stencil?js:As);let qe={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};m=new XRWebGLBinding(s,t),p=m.createProjectionLayer(qe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),g=new fs(p.textureWidth,p.textureHeight,{format:Wi,type:Is,depthTexture:new Bo(p.textureWidth,p.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});let ht=e.properties.get(g);ht.__ignoreDepthValues=p.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(J){for(let fe=0;fe<J.removed.length;fe++){let Ee=J.removed[fe],ke=v.indexOf(Ee);ke>=0&&(v[ke]=null,S[ke].disconnect(Ee))}for(let fe=0;fe<J.added.length;fe++){let Ee=J.added[fe],ke=v.indexOf(Ee);if(ke===-1){for(let ht=0;ht<S.length;ht++)if(ht>=v.length){v.push(Ee),ke=ht;break}else if(v[ht]===null){v[ht]=Ee,ke=ht;break}if(ke===-1)break}let qe=S[ke];qe&&qe.connect(Ee)}}let q=new k,z=new k;function G(J,fe,Ee){q.setFromMatrixPosition(fe.matrixWorld),z.setFromMatrixPosition(Ee.matrixWorld);let ke=q.distanceTo(z),qe=fe.projectionMatrix.elements,ht=Ee.projectionMatrix.elements,ft=qe[14]/(qe[10]-1),Ze=qe[14]/(qe[10]+1),ae=(qe[9]+1)/qe[5],Z=(qe[9]-1)/qe[5],We=(qe[8]-1)/qe[0],Xe=(ht[8]+1)/ht[0],Qe=ft*We,ze=ft*Xe,Je=ke/(-We+Xe),gt=Je*-We;fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(gt),J.translateZ(Je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();let C=ft+Je,E=Ze+Je,ne=Qe-gt,xe=ze+(ke-gt),be=ae*Ze/E*C,Se=Z*Ze/E*C;J.projectionMatrix.makePerspective(ne,xe,be,Se,C,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function K(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;T.near=N.near=D.near=J.near,T.far=N.far=D.far=J.far,(R!==T.near||$!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,$=T.far);let fe=J.parent,Ee=T.cameras;K(T,fe);for(let ke=0;ke<Ee.length;ke++)K(Ee[ke],fe);Ee.length===2?G(T,D,N):T.projectionMatrix.copy(D.projectionMatrix),re(J,T,fe)};function re(J,fe,Ee){Ee===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=yc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)};let oe=null;function ue(J,fe){if(u=fe.getViewerPose(c||a),x=fe,u!==null){let Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(g,f.framebuffer),e.setRenderTarget(g));let ke=!1;Ee.length!==T.cameras.length&&(T.cameras.length=0,ke=!0);for(let qe=0;qe<Ee.length;qe++){let ht=Ee[qe],ft=null;if(f!==null)ft=f.getViewport(ht);else{let ae=m.getViewSubImage(p,ht);ft=ae.viewport,qe===0&&(e.setRenderTargetTextures(g,ae.colorTexture,p.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(g))}let Ze=Y[qe];Ze===void 0&&(Ze=new ui,Ze.layers.enable(qe),Ze.viewport=new jn,Y[qe]=Ze),Ze.matrix.fromArray(ht.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(ht.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ft.x,ft.y,ft.width,ft.height),qe===0&&(T.matrix.copy(Ze.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ke===!0&&T.cameras.push(Ze)}}for(let Ee=0;Ee<S.length;Ee++){let ke=v[Ee],qe=S[Ee];ke!==null&&qe!==void 0&&qe.update(ke,fe,c||a)}oe&&oe(J,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),x=null}let Te=new Wd;Te.setAnimationLoop(ue),this.setAnimationLoop=function(J){oe=J},this.dispose=function(){}}};function Wx(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,Gd(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,S,v,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(y,g):g.isMeshToonMaterial?(r(y,g),m(y,g)):g.isMeshPhongMaterial?(r(y,g),u(y,g)):g.isMeshStandardMaterial?(r(y,g),p(y,g),g.isMeshPhysicalMaterial&&f(y,g,A)):g.isMeshMatcapMaterial?(r(y,g),x(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),M(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(a(y,g),g.isLineDashedMaterial&&o(y,g)):g.isPointsMaterial?l(y,g,S,v):g.isSpriteMaterial?c(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===mi&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===mi&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let S=e.get(g).envMap;if(S&&(y.envMap.value=S,y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function a(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function o(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function l(y,g,S,v){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*S,y.scale.value=v*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function u(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function p(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function f(y,g,S){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mi&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,g){g.matcap&&(y.matcap.value=g.matcap)}function M(y,g){let S=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let A=v.program;n.uniformBlockBinding(S,A)}function c(S,v){let A=s[S.id];A===void 0&&(x(S),A=u(S),s[S.id]=A,S.addEventListener("dispose",y));let F=v.program;n.updateUBOMapping(S,F);let D=e.render.frame;r[S.id]!==D&&(p(S),r[S.id]=D)}function u(S){let v=m();S.__bindingPointIndex=v;let A=i.createBuffer(),F=S.__size,D=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,F,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function m(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let v=s[S.id],A=S.uniforms,F=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let D=0,N=A.length;D<N;D++){let Y=Array.isArray(A[D])?A[D]:[A[D]];for(let T=0,R=Y.length;T<R;T++){let $=Y[T];if(f($,D,T,F)===!0){let le=$.__offset,ve=Array.isArray($.value)?$.value:[$.value],B=0;for(let q=0;q<ve.length;q++){let z=ve[q],G=M(z);typeof z=="number"||typeof z=="boolean"?($.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,le+B,$.__data)):z.isMatrix3?($.__data[0]=z.elements[0],$.__data[1]=z.elements[1],$.__data[2]=z.elements[2],$.__data[3]=0,$.__data[4]=z.elements[3],$.__data[5]=z.elements[4],$.__data[6]=z.elements[5],$.__data[7]=0,$.__data[8]=z.elements[6],$.__data[9]=z.elements[7],$.__data[10]=z.elements[8],$.__data[11]=0):(z.toArray($.__data,B),B+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,le,$.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,v,A,F){let D=S.value,N=v+"_"+A;if(F[N]===void 0)return typeof D=="number"||typeof D=="boolean"?F[N]=D:F[N]=D.clone(),!0;{let Y=F[N];if(typeof D=="number"||typeof D=="boolean"){if(Y!==D)return F[N]=D,!0}else if(Y.equals(D)===!1)return Y.copy(D),!0}return!1}function x(S){let v=S.uniforms,A=0,F=16;for(let N=0,Y=v.length;N<Y;N++){let T=Array.isArray(v[N])?v[N]:[v[N]];for(let R=0,$=T.length;R<$;R++){let le=T[R],ve=Array.isArray(le.value)?le.value:[le.value];for(let B=0,q=ve.length;B<q;B++){let z=ve[B],G=M(z),K=A%F;K!==0&&F-K<G.boundary&&(A+=F-K),le.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=A,A+=G.storage}}}let D=A%F;return D>0&&(A+=F-D),S.__size=A,S.__cache={},this}function M(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function y(S){let v=S.target;v.removeEventListener("dispose",y);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}var Ea=class{constructor(e={}){let{canvas:t=em(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let f=new Uint32Array(4),x=new Int32Array(4),M=null,y=null,g=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this._useLegacyLights=!1,this.toneMapping=Ps,this.toneMappingExposure=1;let v=this,A=!1,F=0,D=0,N=null,Y=-1,T=null,R=new jn,$=new jn,le=null,ve=new xt(0),B=0,q=t.width,z=t.height,G=1,K=null,re=null,oe=new jn(0,0,q,z),ue=new jn(0,0,q,z),Te=!1,J=new Sa,fe=!1,Ee=!1,ke=null,qe=new zn,ht=new He,ft=new k,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return N===null?G:1}let Z=n;function We(w,X){for(let j=0;j<w.length;j++){let se=w[j],ee=t.getContext(se,X);if(ee!==null)return ee}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nh}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Le,!1),Z===null){let X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),Z=We(X,w),Z===null)throw We(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Xe,Qe,ze,Je,gt,C,E,ne,xe,be,Se,Ke,Ue,Oe,at,Et,_e,qt,Pt,ut,it,Ve,_t,Bt;function un(){Xe=new hy(Z),Qe=new sy(Z,Xe,e),Xe.init(Qe),Ve=new Vx(Z,Xe,Qe),ze=new Hx(Z,Xe,Qe),Je=new fy(Z),gt=new Rx,C=new zx(Z,Xe,ze,gt,Qe,Ve,Je),E=new ay(v),ne=new cy(v),xe=new Mm(Z,Qe),_t=new ny(Z,Xe,xe,Qe),be=new uy(Z,xe,Je,_t),Se=new yy(Z,be,xe,Je),Pt=new gy(Z,Qe,C),Et=new ry(gt),Ke=new Ax(v,E,ne,Xe,Qe,_t,Et),Ue=new Wx(v,gt),Oe=new Px,at=new Ox(Xe,Qe),qt=new ty(v,E,ne,ze,Se,p,l),_e=new kx(v,Se,Qe),Bt=new Xx(Z,Je,Qe,ze),ut=new iy(Z,Xe,Je,Qe),it=new dy(Z,Xe,Je,Qe),Je.programs=Ke.programs,v.capabilities=Qe,v.extensions=Xe,v.properties=gt,v.renderLists=Oe,v.shadowMap=_e,v.state=ze,v.info=Je}un();let At=new Lc(v,Z);this.xr=At,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let w=Xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(q,z,!1))},this.getSize=function(w){return w.set(q,z)},this.setSize=function(w,X,j=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,z=X,t.width=Math.floor(w*G),t.height=Math.floor(X*G),j===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(q*G,z*G).floor()},this.setDrawingBufferSize=function(w,X,j){q=w,z=X,G=j,t.width=Math.floor(w*j),t.height=Math.floor(X*j),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,X,j,se){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,X,j,se),ze.viewport(R.copy(oe).multiplyScalar(G).floor())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,X,j,se){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,X,j,se),ze.scissor($.copy(ue).multiplyScalar(G).floor())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){ze.setScissorTest(Te=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(w=!0,X=!0,j=!0){let se=0;if(w){let ee=!1;if(N!==null){let Fe=N.texture.format;ee=Fe===Od||Fe===Nd||Fe===Ud}if(ee){let Fe=N.texture.type,Ge=Fe===Is||Fe===As||Fe===sh||Fe===js||Fe===Ld||Fe===Dd,nt=qt.getClearColor(),Ye=qt.getClearAlpha(),pt=nt.r,ot=nt.g,Ae=nt.b;Ge?(f[0]=pt,f[1]=ot,f[2]=Ae,f[3]=Ye,Z.clearBufferuiv(Z.COLOR,0,f)):(x[0]=pt,x[1]=ot,x[2]=Ae,x[3]=Ye,Z.clearBufferiv(Z.COLOR,0,x))}else se|=Z.COLOR_BUFFER_BIT}X&&(se|=Z.DEPTH_BUFFER_BIT),j&&(se|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Oe.dispose(),at.dispose(),gt.dispose(),E.dispose(),ne.dispose(),Se.dispose(),_t.dispose(),Bt.dispose(),Ke.dispose(),At.dispose(),At.removeEventListener("sessionstart",Nn),At.removeEventListener("sessionend",Jt),ke&&(ke.dispose(),ke=null),$n.stop()};function Pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Je.autoReset,X=_e.enabled,j=_e.autoUpdate,se=_e.needsUpdate,ee=_e.type;un(),Je.autoReset=w,_e.enabled=X,_e.autoUpdate=j,_e.needsUpdate=se,_e.type=ee}function Le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){let X=w.target;X.removeEventListener("dispose",De),rt(X)}function rt(w){st(w),gt.remove(w)}function st(w){let X=gt.get(w).programs;X!==void 0&&(X.forEach(function(j){Ke.releaseProgram(j)}),w.isShaderMaterial&&Ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,j,se,ee,Fe){X===null&&(X=Ze);let Ge=ee.isMesh&&ee.matrixWorld.determinant()<0,nt=ns(w,X,j,se,ee);ze.setMaterial(se,Ge);let Ye=j.index,pt=1;if(se.wireframe===!0){if(Ye=be.getWireframeAttribute(j),Ye===void 0)return;pt=2}let ot=j.drawRange,Ae=j.attributes.position,et=ot.start*pt,kt=(ot.start+ot.count)*pt;Fe!==null&&(et=Math.max(et,Fe.start*pt),kt=Math.min(kt,(Fe.start+Fe.count)*pt)),Ye!==null?(et=Math.max(et,0),kt=Math.min(kt,Ye.count)):Ae!=null&&(et=Math.max(et,0),kt=Math.min(kt,Ae.count));let It=kt-et;if(It<0||It===1/0)return;_t.setup(ee,se,nt,j,Ye);let Ai,dn=ut;if(Ye!==null&&(Ai=xe.get(Ye),dn=it,dn.setIndex(Ai)),ee.isMesh)se.wireframe===!0?(ze.setLineWidth(se.wireframeLinewidth*ae()),dn.setMode(Z.LINES)):dn.setMode(Z.TRIANGLES);else if(ee.isLine){let yt=se.linewidth;yt===void 0&&(yt=1),ze.setLineWidth(yt*ae()),ee.isLineSegments?dn.setMode(Z.LINES):ee.isLineLoop?dn.setMode(Z.LINE_LOOP):dn.setMode(Z.LINE_STRIP)}else ee.isPoints?dn.setMode(Z.POINTS):ee.isSprite&&dn.setMode(Z.TRIANGLES);if(ee.isBatchedMesh)dn.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)dn.renderInstances(et,It,ee.count);else if(j.isInstancedBufferGeometry){let yt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,jt=Math.min(j.instanceCount,yt);dn.renderInstances(et,It,jt)}else dn.render(et,It)};function Zt(w,X,j){w.transparent===!0&&w.side===wn&&w.forceSinglePass===!1?(w.side=mi,w.needsUpdate=!0,fi(w,X,j),w.side=Ls,w.needsUpdate=!0,fi(w,X,j),w.side=wn):fi(w,X,j)}this.compile=function(w,X,j=null){j===null&&(j=w),y=at.get(j),y.init(),S.push(y),j.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(y.pushLight(ee),ee.castShadow&&y.pushShadow(ee))}),w!==j&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(y.pushLight(ee),ee.castShadow&&y.pushShadow(ee))}),y.setupLights(v._useLegacyLights);let se=new Set;return w.traverse(function(ee){let Fe=ee.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){let nt=Fe[Ge];Zt(nt,j,ee),se.add(nt)}else Zt(Fe,j,ee),se.add(Fe)}),S.pop(),y=null,se},this.compileAsync=function(w,X,j=null){let se=this.compile(w,X,j);return new Promise(ee=>{function Fe(){if(se.forEach(function(Ge){gt.get(Ge).currentProgram.isReady()&&se.delete(Ge)}),se.size===0){ee(w);return}setTimeout(Fe,10)}Xe.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let en=null;function In(w){en&&en(w)}function Nn(){$n.stop()}function Jt(){$n.start()}let $n=new Wd;$n.setAnimationLoop(In),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(w){en=w,At.setAnimationLoop(w),w===null?$n.stop():$n.start()},At.addEventListener("sessionstart",Nn),At.addEventListener("sessionend",Jt),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(X),X=At.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,X,N),y=at.get(w,S.length),y.init(),S.push(y),qe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(qe),Ee=this.localClippingEnabled,fe=Et.init(this.clippingPlanes,Ee),M=Oe.get(w,g.length),M.init(),g.push(M),Vn(w,X,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(K,re),this.info.render.frame++,fe===!0&&Et.beginShadows();let j=y.state.shadowsArray;if(_e.render(j,w,X),fe===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(M,w),y.setupLights(v._useLegacyLights),X.isArrayCamera){let se=X.cameras;for(let ee=0,Fe=se.length;ee<Fe;ee++){let Ge=se[ee];yn(M,w,Ge,Ge.viewport)}}else yn(M,w,X);N!==null&&(C.updateMultisampleRenderTarget(N),C.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(v,w,X),_t.resetDefaultState(),Y=-1,T=null,S.pop(),S.length>0?y=S[S.length-1]:y=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function Vn(w,X,j,se){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){se&&ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(qe);let Ge=Se.update(w),nt=w.material;nt.visible&&M.push(w,Ge,nt,j,ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){let Ge=Se.update(w),nt=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ft.copy(w.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ft.copy(Ge.boundingSphere.center)),ft.applyMatrix4(w.matrixWorld).applyMatrix4(qe)),Array.isArray(nt)){let Ye=Ge.groups;for(let pt=0,ot=Ye.length;pt<ot;pt++){let Ae=Ye[pt],et=nt[Ae.materialIndex];et&&et.visible&&M.push(w,Ge,et,j,ft.z,Ae)}}else nt.visible&&M.push(w,Ge,nt,j,ft.z,null)}}let Fe=w.children;for(let Ge=0,nt=Fe.length;Ge<nt;Ge++)Vn(Fe[Ge],X,j,se)}function yn(w,X,j,se){let ee=w.opaque,Fe=w.transmissive,Ge=w.transparent;y.setupLightsView(j),fe===!0&&Et.setGlobalState(v.clippingPlanes,j),Fe.length>0&&xn(ee,Fe,X,j),se&&ze.viewport(R.copy(se)),ee.length>0&&dt(ee,X,j),Fe.length>0&&dt(Fe,X,j),Ge.length>0&&dt(Ge,X,j),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function xn(w,X,j,se){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let Fe=Qe.isWebGL2;ke===null&&(ke=new fs(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?va:Is,minFilter:_a,samples:Fe?4:0})),v.getDrawingBufferSize(ht),Fe?ke.setSize(ht.x,ht.y):ke.setSize(xc(ht.x),xc(ht.y));let Ge=v.getRenderTarget();v.setRenderTarget(ke),v.getClearColor(ve),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();let nt=v.toneMapping;v.toneMapping=Ps,dt(w,j,se),C.updateMultisampleRenderTarget(ke),C.updateRenderTargetMipmap(ke);let Ye=!1;for(let pt=0,ot=X.length;pt<ot;pt++){let Ae=X[pt],et=Ae.object,kt=Ae.geometry,It=Ae.material,Ai=Ae.group;if(It.side===wn&&et.layers.test(se.layers)){let dn=It.side;It.side=mi,It.needsUpdate=!0,tn(et,j,se,kt,It,Ai),It.side=dn,It.needsUpdate=!0,Ye=!0}}Ye===!0&&(C.updateMultisampleRenderTarget(ke),C.updateRenderTargetMipmap(ke)),v.setRenderTarget(Ge),v.setClearColor(ve,B),v.toneMapping=nt}function dt(w,X,j){let se=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,Fe=w.length;ee<Fe;ee++){let Ge=w[ee],nt=Ge.object,Ye=Ge.geometry,pt=se===null?Ge.material:se,ot=Ge.group;nt.layers.test(j.layers)&&tn(nt,X,j,Ye,pt,ot)}}function tn(w,X,j,se,ee,Fe){w.onBeforeRender(v,X,j,se,ee,Fe),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(v,X,j,se,w,Fe),ee.transparent===!0&&ee.side===wn&&ee.forceSinglePass===!1?(ee.side=mi,ee.needsUpdate=!0,v.renderBufferDirect(j,X,se,ee,w,Fe),ee.side=Ls,ee.needsUpdate=!0,v.renderBufferDirect(j,X,se,ee,w,Fe),ee.side=wn):v.renderBufferDirect(j,X,se,ee,w,Fe),w.onAfterRender(v,X,j,se,ee,Fe)}function fi(w,X,j){X.isScene!==!0&&(X=Ze);let se=gt.get(w),ee=y.state.lights,Fe=y.state.shadowsArray,Ge=ee.state.version,nt=Ke.getParameters(w,ee.state,Fe,X,j),Ye=Ke.getProgramCacheKey(nt),pt=se.programs;se.environment=w.isMeshStandardMaterial?X.environment:null,se.fog=X.fog,se.envMap=(w.isMeshStandardMaterial?ne:E).get(w.envMap||se.environment),pt===void 0&&(w.addEventListener("dispose",De),pt=new Map,se.programs=pt);let ot=pt.get(Ye);if(ot!==void 0){if(se.currentProgram===ot&&se.lightsStateVersion===Ge)return Yi(w,nt),ot}else nt.uniforms=Ke.getUniforms(w),w.onBuild(j,nt,v),w.onBeforeCompile(nt,v),ot=Ke.acquireProgram(nt,Ye),pt.set(Ye,ot),se.uniforms=nt.uniforms;let Ae=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=Et.uniform),Yi(w,nt),se.needsLights=Ln(w),se.lightsStateVersion=Ge,se.needsLights&&(Ae.ambientLightColor.value=ee.state.ambient,Ae.lightProbe.value=ee.state.probe,Ae.directionalLights.value=ee.state.directional,Ae.directionalLightShadows.value=ee.state.directionalShadow,Ae.spotLights.value=ee.state.spot,Ae.spotLightShadows.value=ee.state.spotShadow,Ae.rectAreaLights.value=ee.state.rectArea,Ae.ltc_1.value=ee.state.rectAreaLTC1,Ae.ltc_2.value=ee.state.rectAreaLTC2,Ae.pointLights.value=ee.state.point,Ae.pointLightShadows.value=ee.state.pointShadow,Ae.hemisphereLights.value=ee.state.hemi,Ae.directionalShadowMap.value=ee.state.directionalShadowMap,Ae.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ae.spotShadowMap.value=ee.state.spotShadowMap,Ae.spotLightMatrix.value=ee.state.spotLightMatrix,Ae.spotLightMap.value=ee.state.spotLightMap,Ae.pointShadowMap.value=ee.state.pointShadowMap,Ae.pointShadowMatrix.value=ee.state.pointShadowMatrix),se.currentProgram=ot,se.uniformsList=null,ot}function wi(w){if(w.uniformsList===null){let X=w.currentProgram.getUniforms();w.uniformsList=kr.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Yi(w,X){let j=gt.get(w);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function ns(w,X,j,se,ee){X.isScene!==!0&&(X=Ze),C.resetTextureUnits();let Fe=X.fog,Ge=se.isMeshStandardMaterial?X.environment:null,nt=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ds,Ye=(se.isMeshStandardMaterial?ne:E).get(se.envMap||Ge),pt=se.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ot=!!j.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ae=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,kt=!!j.morphAttributes.color,It=Ps;se.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(It=v.toneMapping);let Ai=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,dn=Ai!==void 0?Ai.length:0,yt=gt.get(se),jt=y.state.lights;if(fe===!0&&(Ee===!0||w!==T)){let _n=w===T&&se.id===Y;Et.setState(se,w,_n)}let Vt=!1;se.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==jt.state.version||yt.outputColorSpace!==nt||ee.isBatchedMesh&&yt.batching===!1||!ee.isBatchedMesh&&yt.batching===!0||ee.isInstancedMesh&&yt.instancing===!1||!ee.isInstancedMesh&&yt.instancing===!0||ee.isSkinnedMesh&&yt.skinning===!1||!ee.isSkinnedMesh&&yt.skinning===!0||ee.isInstancedMesh&&yt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&yt.instancingColor===!1&&ee.instanceColor!==null||yt.envMap!==Ye||se.fog===!0&&yt.fog!==Fe||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Et.numPlanes||yt.numIntersection!==Et.numIntersection)||yt.vertexAlphas!==pt||yt.vertexTangents!==ot||yt.morphTargets!==Ae||yt.morphNormals!==et||yt.morphColors!==kt||yt.toneMapping!==It||Qe.isWebGL2===!0&&yt.morphTargetsCount!==dn)&&(Vt=!0):(Vt=!0,yt.__version=se.version);let ni=yt.currentProgram;Vt===!0&&(ni=fi(se,X,ee));let On=!1,Yt=!1,Gn=!1,fn=ni.getUniforms(),Fn=yt.uniforms;if(ze.useProgram(ni.program)&&(On=!0,Yt=!0,Gn=!0),se.id!==Y&&(Y=se.id,Yt=!0),On||T!==w){fn.setValue(Z,"projectionMatrix",w.projectionMatrix),fn.setValue(Z,"viewMatrix",w.matrixWorldInverse);let _n=fn.map.cameraPosition;_n!==void 0&&_n.setValue(Z,ft.setFromMatrixPosition(w.matrixWorld)),Qe.logarithmicDepthBuffer&&fn.setValue(Z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&fn.setValue(Z,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Yt=!0,Gn=!0)}if(ee.isSkinnedMesh){fn.setOptional(Z,ee,"bindMatrix"),fn.setOptional(Z,ee,"bindMatrixInverse");let _n=ee.skeleton;_n&&(Qe.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),fn.setValue(Z,"boneTexture",_n.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(fn.setOptional(Z,ee,"batchingTexture"),fn.setValue(Z,"batchingTexture",ee._matricesTexture,C));let ii=j.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0&&Qe.isWebGL2===!0)&&Pt.update(ee,j,ni),(Yt||yt.receiveShadow!==ee.receiveShadow)&&(yt.receiveShadow=ee.receiveShadow,fn.setValue(Z,"receiveShadow",ee.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Fn.envMap.value=Ye,Fn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),Yt&&(fn.setValue(Z,"toneMappingExposure",v.toneMappingExposure),yt.needsLights&&ys(Fn,Gn),Fe&&se.fog===!0&&Ue.refreshFogUniforms(Fn,Fe),Ue.refreshMaterialUniforms(Fn,se,G,z,ke),kr.upload(Z,wi(yt),Fn,C)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(kr.upload(Z,wi(yt),Fn,C),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&fn.setValue(Z,"center",ee.center),fn.setValue(Z,"modelViewMatrix",ee.modelViewMatrix),fn.setValue(Z,"normalMatrix",ee.normalMatrix),fn.setValue(Z,"modelMatrix",ee.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let _n=se.uniformsGroups;for(let is=0,$i=_n.length;is<$i;is++)if(Qe.isWebGL2){let jr=_n[is];Bt.update(jr,ni),Bt.bind(jr,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function ys(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Ln(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,X,j){gt.get(w.texture).__webglTexture=X,gt.get(w.depthTexture).__webglTexture=j;let se=gt.get(w);se.__hasExternalTextures=!0,se.__hasExternalTextures&&(se.__autoAllocateDepthBuffer=j===void 0,se.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,X){let j=gt.get(w);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,j=0){N=w,F=X,D=j;let se=!0,ee=null,Fe=!1,Ge=!1;if(w){let Ye=gt.get(w);Ye.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(Z.FRAMEBUFFER,null),se=!1):Ye.__webglFramebuffer===void 0?C.setupRenderTarget(w):Ye.__hasExternalTextures&&C.rebindTextures(w,gt.get(w.texture).__webglTexture,gt.get(w.depthTexture).__webglTexture);let pt=w.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Ge=!0);let ot=gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ot[X])?ee=ot[X][j]:ee=ot[X],Fe=!0):Qe.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?ee=gt.get(w).__webglMultisampledFramebuffer:Array.isArray(ot)?ee=ot[j]:ee=ot,R.copy(w.viewport),$.copy(w.scissor),le=w.scissorTest}else R.copy(oe).multiplyScalar(G).floor(),$.copy(ue).multiplyScalar(G).floor(),le=Te;if(ze.bindFramebuffer(Z.FRAMEBUFFER,ee)&&Qe.drawBuffers&&se&&ze.drawBuffers(w,ee),ze.viewport(R),ze.scissor($),ze.setScissorTest(le),Fe){let Ye=gt.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ye.__webglTexture,j)}else if(Ge){let Ye=gt.get(w.texture),pt=X||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ye.__webglTexture,j||0,pt)}Y=-1},this.readRenderTargetPixels=function(w,X,j,se,ee,Fe,Ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(nt=nt[Ge]),nt){ze.bindFramebuffer(Z.FRAMEBUFFER,nt);try{let Ye=w.texture,pt=Ye.format,ot=Ye.type;if(pt!==Wi&&Ve.convert(pt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ae=ot===va&&(Xe.has("EXT_color_buffer_half_float")||Qe.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(ot!==Is&&Ve.convert(ot)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ot===Rs&&(Qe.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-se&&j>=0&&j<=w.height-ee&&Z.readPixels(X,j,se,ee,Ve.convert(pt),Ve.convert(ot),Fe)}finally{let Ye=N!==null?gt.get(N).__webglFramebuffer:null;ze.bindFramebuffer(Z.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(w,X,j=0){let se=Math.pow(2,-j),ee=Math.floor(X.image.width*se),Fe=Math.floor(X.image.height*se);C.setTexture2D(X,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,j,0,0,w.x,w.y,ee,Fe),ze.unbindTexture()},this.copyTextureToTexture=function(w,X,j,se=0){let ee=X.image.width,Fe=X.image.height,Ge=Ve.convert(j.format),nt=Ve.convert(j.type);C.setTexture2D(j,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,j.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,j.unpackAlignment),X.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,se,w.x,w.y,ee,Fe,Ge,nt,X.image.data):X.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,se,w.x,w.y,X.mipmaps[0].width,X.mipmaps[0].height,Ge,X.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,se,w.x,w.y,Ge,nt,X.image),se===0&&j.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(w,X,j,se,ee=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Fe=w.max.x-w.min.x+1,Ge=w.max.y-w.min.y+1,nt=w.max.z-w.min.z+1,Ye=Ve.convert(se.format),pt=Ve.convert(se.type),ot;if(se.isData3DTexture)C.setTexture3D(se,0),ot=Z.TEXTURE_3D;else if(se.isDataArrayTexture||se.isCompressedArrayTexture)C.setTexture2DArray(se,0),ot=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,se.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,se.unpackAlignment);let Ae=Z.getParameter(Z.UNPACK_ROW_LENGTH),et=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),kt=Z.getParameter(Z.UNPACK_SKIP_PIXELS),It=Z.getParameter(Z.UNPACK_SKIP_ROWS),Ai=Z.getParameter(Z.UNPACK_SKIP_IMAGES),dn=j.isCompressedTexture?j.mipmaps[ee]:j.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,dn.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,dn.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,w.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,w.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?Z.texSubImage3D(ot,ee,X.x,X.y,X.z,Fe,Ge,nt,Ye,pt,dn.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(ot,ee,X.x,X.y,X.z,Fe,Ge,nt,Ye,dn.data)):Z.texSubImage3D(ot,ee,X.x,X.y,X.z,Fe,Ge,nt,Ye,pt,dn),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Ae),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,et),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,kt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,It),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ai),ee===0&&se.generateMipmaps&&Z.generateMipmap(ot),ze.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),ze.unbindTexture()},this.resetState=function(){F=0,D=0,N=null,ze.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return us}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===rh?"display-p3":"srgb",t.unpackColorSpace=an.workingColorSpace===tl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ei?er:Bd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===er?ei:ds}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Dc=class extends Ea{};Dc.prototype.isWebGL1Renderer=!0;var ko=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ho=class extends di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ta=class extends Ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},md=new k,gd=new k,yd=new zn,ac=new Ma,mo=new Gr,Uc=class extends di{constructor(e=new yi,t=new Ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)md.fromBufferAttribute(t,s-1),gd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=md.distanceTo(gd);e.setAttribute("lineDistance",new Rn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;yd.copy(s).invert(),ac.copy(e.ray).applyMatrix4(yd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,u=new k,m=new k,p=new k,f=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){let g=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=f){let F=x.getX(v),D=x.getX(v+1);if(c.fromBufferAttribute(y,F),u.fromBufferAttribute(y,D),ac.distanceSqToSegment(c,u,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let Y=e.ray.origin.distanceTo(p);Y<e.near||Y>e.far||t.push({distance:Y,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,a.start),S=Math.min(y.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=f){if(c.fromBufferAttribute(y,v),u.fromBufferAttribute(y,v+1),ac.distanceSqToSegment(c,u,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(p);D<e.near||D>e.far||t.push({distance:D,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},xd=new k,_d=new k,zo=class extends Uc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)xd.fromBufferAttribute(t,s),_d.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xd.distanceTo(_d);e.setAttribute("lineDistance",new Rn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vo=class extends Ui{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,f=(a-u)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new He:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new k,s=[],r=[],a=[],o=new k,l=new zn;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),m=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ai(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ai(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},wa=class extends Ni{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new He,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*u-f*m+this.aX,c=p*m+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Nc=class extends wa{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function oh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,m){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+m)+(l-o)/m;p*=u,f*=u,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var go=new k,oc=new oh,lc=new oh,cc=new oh,Oc=class extends Ni{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(go.subVectors(s[0],s[1]).add(s[0]),c=go);let m=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(go.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=go),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(m),f),M=Math.pow(m.distanceToSquared(p),f),y=Math.pow(p.distanceToSquared(u),f);M<1e-4&&(M=1),x<1e-4&&(x=M),y<1e-4&&(y=M),oc.initNonuniformCatmullRom(c.x,m.x,p.x,u.x,x,M,y),lc.initNonuniformCatmullRom(c.y,m.y,p.y,u.y,x,M,y),cc.initNonuniformCatmullRom(c.z,m.z,p.z,u.z,x,M,y)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(c.x,m.x,p.x,u.x,this.tension),lc.initCatmullRom(c.y,m.y,p.y,u.y,this.tension),cc.initCatmullRom(c.z,m.z,p.z,u.z,this.tension));return n.set(oc.calc(l),lc.calc(l),cc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function qx(i,e){let t=1-i;return t*t*e}function Yx(i,e){return 2*(1-i)*i*e}function $x(i,e){return i*i*e}function ma(i,e,t,n){return qx(i,e)+Yx(i,t)+$x(i,n)}function Kx(i,e){let t=1-i;return t*t*t*e}function Zx(i,e){let t=1-i;return 3*t*t*i*e}function Jx(i,e){return 3*(1-i)*i*i*e}function jx(i,e){return i*i*i*e}function ga(i,e,t,n,s){return Kx(i,e)+Zx(i,t)+Jx(i,n)+jx(i,s)}var Go=class extends Ni{constructor(e=new He,t=new He,n=new He,s=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,s.x,r.x,a.x,o.x),ga(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fc=class extends Ni{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,s.x,r.x,a.x,o.x),ga(e,s.y,r.y,a.y,o.y),ga(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends Ni{constructor(e=new He,t=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new He){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new He){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bc=class extends Ni{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends Ni{constructor(e=new He,t=new He,n=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ma(e,s.x,r.x,a.x),ma(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends Ni{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ma(e,s.x,r.x,a.x),ma(e,s.y,r.y,a.y),ma(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends Ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(vd(o,l.x,c.x,u.x,m.x),vd(o,l.y,c.y,u.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new He().fromArray(s))}return this}},Md=Object.freeze({__proto__:null,ArcCurve:Nc,CatmullRomCurve3:Oc,CubicBezierCurve:Go,CubicBezierCurve3:Fc,EllipseCurve:wa,LineCurve:Wo,LineCurve3:Bc,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:kc,SplineCurve:qo}),Hc=class extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Md[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Md[s.type]().fromJSON(s))}return this}},Xr=class extends Hc{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wo(this.currentPoint.clone(),new He(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Xo(this.currentPoint.clone(),new He(e,t),new He(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Go(this.currentPoint.clone(),new He(e,t),new He(n,s),new He(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new wa(e,t,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Os=class i extends yi{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],m=[],p=[],f=[],x=0,M=[],y=n/2,g=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Rn(m,3)),this.setAttribute("normal",new Rn(p,3)),this.setAttribute("uv",new Rn(f,2));function S(){let A=new k,F=new k,D=0,N=(t-e)/n;for(let Y=0;Y<=r;Y++){let T=[],R=Y/r,$=R*(t-e)+e;for(let le=0;le<=s;le++){let ve=le/s,B=ve*l+o,q=Math.sin(B),z=Math.cos(B);F.x=$*q,F.y=-R*n+y,F.z=$*z,m.push(F.x,F.y,F.z),A.set(q,N,z).normalize(),p.push(A.x,A.y,A.z),f.push(ve,1-R),T.push(x++)}M.push(T)}for(let Y=0;Y<s;Y++)for(let T=0;T<r;T++){let R=M[T][Y],$=M[T+1][Y],le=M[T+1][Y+1],ve=M[T][Y+1];u.push(R,$,ve),u.push($,le,ve),D+=6}c.addGroup(g,D,0),g+=D}function v(A){let F=x,D=new He,N=new k,Y=0,T=A===!0?e:t,R=A===!0?1:-1;for(let le=1;le<=s;le++)m.push(0,y*R,0),p.push(0,R,0),f.push(.5,.5),x++;let $=x;for(let le=0;le<=s;le++){let B=le/s*l+o,q=Math.cos(B),z=Math.sin(B);N.x=T*z,N.y=y*R,N.z=T*q,m.push(N.x,N.y,N.z),p.push(0,R,0),D.x=q*.5+.5,D.y=z*.5*R+.5,f.push(D.x,D.y),x++}for(let le=0;le<s;le++){let ve=F+le,B=$+le;A===!0?u.push(B,B+1,ve):u.push(B+1,B,ve),Y+=3}c.addGroup(g,Y,A===!0?1:2),g+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xi=class i extends Os{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yo=class i extends yi{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Rn(r,3)),this.setAttribute("normal",new Rn(r.slice(),3)),this.setAttribute("uv",new Rn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new k,A=new k,F=new k;for(let D=0;D<t.length;D+=3)f(t[D+0],v),f(t[D+1],A),f(t[D+2],F),l(v,A,F,S)}function l(S,v,A,F){let D=F+1,N=[];for(let Y=0;Y<=D;Y++){N[Y]=[];let T=S.clone().lerp(A,Y/D),R=v.clone().lerp(A,Y/D),$=D-Y;for(let le=0;le<=$;le++)le===0&&Y===D?N[Y][le]=T:N[Y][le]=T.clone().lerp(R,le/$)}for(let Y=0;Y<D;Y++)for(let T=0;T<2*(D-Y)-1;T++){let R=Math.floor(T/2);T%2===0?(p(N[Y][R+1]),p(N[Y+1][R]),p(N[Y][R])):(p(N[Y][R+1]),p(N[Y+1][R+1]),p(N[Y+1][R]))}}function c(S){let v=new k;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(S),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function u(){let S=new k;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let A=y(S)/2/Math.PI+.5,F=g(S)/Math.PI+.5;a.push(A,1-F)}x(),m()}function m(){for(let S=0;S<a.length;S+=6){let v=a[S+0],A=a[S+2],F=a[S+4],D=Math.max(v,A,F),N=Math.min(v,A,F);D>.9&&N<.1&&(v<.2&&(a[S+0]+=1),A<.2&&(a[S+2]+=1),F<.2&&(a[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function f(S,v){let A=S*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function x(){let S=new k,v=new k,A=new k,F=new k,D=new He,N=new He,Y=new He;for(let T=0,R=0;T<r.length;T+=9,R+=6){S.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),A.set(r[T+6],r[T+7],r[T+8]),D.set(a[R+0],a[R+1]),N.set(a[R+2],a[R+3]),Y.set(a[R+4],a[R+5]),F.copy(S).add(v).add(A).divideScalar(3);let $=y(F);M(D,R+0,S,$),M(N,R+2,v,$),M(Y,R+4,A,$)}}function M(S,v,A,F){F<0&&S.x===1&&(a[v]=S.x-1),A.x===0&&A.z===0&&(a[v]=F/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},$o=class i extends Yo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var qr=class extends Xr{constructor(e){super(e),this.uuid=$r(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Xr().fromJSON(s))}return this}},Qx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Zd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,m,p,f;if(n&&(r=s_(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let x=t;x<s;x+=t)m=i[x],p=i[x+1],m<o&&(o=m),p<l&&(l=p),m>c&&(c=m),p>u&&(u=p);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Aa(r,a,t,o,l,f,0),a}};function Zd(i,e,t,n,s){let r,a;if(s===m_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=bd(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=bd(r,i[r],i[r+1],a);return a&&il(a,a.next)&&(Ca(a),a=a.next),a}function nr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(il(t,t.next)||An(t.prev,t,t.next)===0)){if(Ca(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Aa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&c_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?t_(i,n,s,r):e_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ca(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=n_(nr(i),e,t),Aa(i,e,t,n,s,r,2)):a===2&&i_(i,e,t,n,s,r):Aa(nr(i),e,t,n,s,r,1);break}}}function e_(i){let e=i.prev,t=i,n=i.next;if(An(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,m=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=p&&x.y>=m&&x.y<=f&&Or(s,o,r,l,a,c,x.x,x.y)&&An(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function t_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(An(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,m=r.y,p=a.y,f=o<l?o<c?o:c:l<c?l:c,x=u<m?u<p?u:p:m<p?m:p,M=o>l?o>c?o:c:l>c?l:c,y=u>m?u>p?u:p:m>p?m:p,g=zc(f,x,e,t,n),S=zc(M,y,e,t,n),v=i.prevZ,A=i.nextZ;for(;v&&v.z>=g&&A&&A.z<=S;){if(v.x>=f&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Or(o,u,l,m,c,p,v.x,v.y)&&An(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=f&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Or(o,u,l,m,c,p,A.x,A.y)&&An(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Or(o,u,l,m,c,p,v.x,v.y)&&An(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=S;){if(A.x>=f&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Or(o,u,l,m,c,p,A.x,A.y)&&An(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function n_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!il(s,r)&&Jd(s,n,n.next,r)&&Ra(s,r)&&Ra(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ca(n),Ca(n.next),n=i=r),n=n.next}while(n!==i);return nr(n)}function i_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&d_(a,o)){let l=jd(a,o);a=nr(a,a.next),l=nr(l,l.next),Aa(a,e,t,n,s,r,0),Aa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function s_(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Zd(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(u_(c));for(s.sort(r_),r=0;r<s.length;r++)t=a_(s[r],t);return t}function r_(i,e){return i.x-e.x}function a_(i,e){let t=o_(i,e);if(!t)return e;let n=jd(t,i);return nr(n,n.next),nr(t,t.next)}function o_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,m;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Or(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(m=Math.abs(a-t.y)/(r-t.x),Ra(t,i)&&(m<u||m===u&&(t.x>s.x||t.x===s.x&&l_(s,t)))&&(s=t,u=m)),t=t.next;while(t!==o);return s}function l_(i,e){return An(i.prev,i,e.prev)<0&&An(e.next,i,i.next)<0}function c_(i,e,t,n){let s=i;do s.z===0&&(s.z=zc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,h_(s)}function h_(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function zc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function u_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Or(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function d_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!f_(i,e)&&(Ra(i,e)&&Ra(e,i)&&p_(i,e)&&(An(i.prev,i,e.prev)||An(i,e.prev,e))||il(i,e)&&An(i.prev,i,i.next)>0&&An(e.prev,e,e.next)>0)}function An(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function il(i,e){return i.x===e.x&&i.y===e.y}function Jd(i,e,t,n){let s=xo(An(i,e,t)),r=xo(An(i,e,n)),a=xo(An(t,n,i)),o=xo(An(t,n,e));return!!(s!==r&&a!==o||s===0&&yo(i,t,e)||r===0&&yo(i,n,e)||a===0&&yo(t,i,n)||o===0&&yo(t,e,n))}function yo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xo(i){return i>0?1:i<0?-1:0}function f_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Jd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ra(i,e){return An(i.prev,i,i.next)<0?An(i,e,i.next)>=0&&An(i,i.prev,e)>=0:An(i,e,i.prev)<0||An(i,i.next,e)<0}function p_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function jd(i,e){let t=new Vc(i.i,i.x,i.y),n=new Vc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bd(i,e,t,n){let s=new Vc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ca(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ya=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Sd(e),Ed(n,e);let a=e.length;t.forEach(Sd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ed(n,t[l]);let o=Qx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Sd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ed(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ko=class i extends Yo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Pa=class i extends yi{constructor(e=new qr([new He(0,.5),new He(-.5,-.5),new He(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Rn(s,3)),this.setAttribute("normal",new Rn(r,3)),this.setAttribute("uv",new Rn(a,2));function c(u){let m=s.length/3,p=u.extractPoints(t),f=p.shape,x=p.holes;ya.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,g=x.length;y<g;y++){let S=x[y];ya.isClockWise(S)===!0&&(x[y]=S.reverse())}let M=ya.triangulateShape(f,x);for(let y=0,g=x.length;y<g;y++){let S=x[y];f=f.concat(S)}for(let y=0,g=f.length;y<g;y++){let S=f[y];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let y=0,g=M.length;y<g;y++){let S=M[y],v=S[0]+m,A=S[1]+m,F=S[2]+m;n.push(v,A,F),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return g_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function g_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var es=class i extends yi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],m=new k,p=new k,f=[],x=[],M=[],y=[];for(let g=0;g<=n;g++){let S=[],v=g/n,A=0;g===0&&a===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let F=0;F<=t;F++){let D=F/t;m.x=-e*Math.cos(s+D*r)*Math.sin(a+v*o),m.y=e*Math.cos(a+v*o),m.z=e*Math.sin(s+D*r)*Math.sin(a+v*o),x.push(m.x,m.y,m.z),p.copy(m).normalize(),M.push(p.x,p.y,p.z),y.push(D+A,1-v),S.push(c++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let v=u[g][S+1],A=u[g][S],F=u[g+1][S],D=u[g+1][S+1];(g!==0||a>0)&&f.push(v,A,D),(g!==n-1||l<Math.PI)&&f.push(A,F,D)}this.setIndex(f),this.setAttribute("position",new Rn(x,3)),this.setAttribute("normal",new Rn(M,3)),this.setAttribute("uv",new Rn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qn=class extends Ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function _o(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function y_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Yr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gc=class extends Yr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tu,endingEnd:Tu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wu:r=e,o=2*t-n;break;case Au:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wu:a=e,l=2*n-t;break;case Au:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,p=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),M=x*x,y=M*x,g=-p*y+2*p*M-p*x,S=(1+p)*y+(-1.5-2*p)*M+(-.5+p)*x+1,v=(-1-f)*y+(1.5+f)*M+.5*x,A=f*y-f*M;for(let F=0;F!==o;++F)r[F]=g*a[u+F]+S*a[c+F]+v*a[l+F]+A*a[m+F];return r}},Wc=class extends Yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),m=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*m+a[l+p]*u;return r}},Xc=class extends Yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case bo:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&y_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,p=m-n,f=m+n;for(let x=0;x!==n;++x){let M=t[m+x];if(M!==t[p+x]||M!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[m+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qi.prototype.TimeBufferType=Float32Array;qi.prototype.ValueBufferType=Float32Array;qi.prototype.DefaultInterpolation=bo;var ir=class extends qi{};ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Mo;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends qi{};qc.prototype.ValueTypeName="color";var Yc=class extends qi{};Yc.prototype.ValueTypeName="number";var $c=class extends Yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Us.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ia=class extends qi{InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.DefaultInterpolation=bo;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends qi{};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Mo;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends qi{};Kc.prototype.ValueTypeName="vector";var Zc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,p=c.length;m<p;m+=2){let f=c[m],x=c[m+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null}}},x_=new Zc,Jc=class{constructor(e){this.manager=e!==void 0?e:x_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zo=class extends di{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var hc=new zn,Td=new k,wd=new k,jc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new zn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new jn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Td.setFromMatrixPosition(e.matrixWorld),t.position.copy(Td),wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wd),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Qc=class extends jc{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jo=class extends Zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(di.DEFAULT_UP),this.updateMatrix(),this.target=new di,this.shadow=new Qc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jo=class extends Zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var lh="\\[\\]\\.:\\/",__=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",v_="[^"+lh.replace("\\.","")+"]",M_=/((?:WC+[\/:])*)/.source.replace("WC",ch),b_=/(WCOD+)?/.source.replace("WCOD",v_),S_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),E_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),T_=new RegExp("^"+M_+b_+S_+E_+"$"),w_=["material","materials","bones","map"],eh=class{constructor(e,t,n){let s=n||Mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(__,"")}static parseTrackName(e){let t=T_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);w_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mn.Composite=eh;Mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mn.prototype.GetterByBindingType=[Mn.prototype._getValue_direct,Mn.prototype._getValue_array,Mn.prototype._getValue_arrayElement,Mn.prototype._getValue_toArray];Mn.prototype.SetterByBindingTypeAndVersioning=[[Mn.prototype._setValue_direct,Mn.prototype._setValue_direct_setNeedsUpdate,Mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_array,Mn.prototype._setValue_array_setNeedsUpdate,Mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_arrayElement,Mn.prototype._setValue_arrayElement_setNeedsUpdate,Mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_fromArray,Mn.prototype._setValue_fromArray_setNeedsUpdate,Mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z_=new Float32Array(1);var Qo=class{constructor(e,t,n=0,s=1/0){this.ray=new Ma(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return th(e,this,n,t),n.sort(Ad),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)th(e[s],this,n,t);return n.sort(Ad),n}};function Ad(i,e){return i.distance-e.distance}function th(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)th(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);var hh=35,uh=25,dh=.29,mt=.95,ti=.35,ms=200,Ti=7,Fs=300,gs=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function R_(i){let e=typeof i=="string"?C_(i):i>>>0;return function(){e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t=(t^t>>>7)>>>0,t/4294967296}}function C_(i){let e=0;for(let t=0;t<i.length;t++)e=Math.imul(31,e)+i.charCodeAt(t),e=e>>>0;return e}var P_=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],rf=[],sl={tank:["knight","berserker","werewolf","ghoul"],melee:["samurai","assassin","ninja","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["ranger","hunter","alchemist"],caster:["mage","witch","vampire","necromancer"]},La={tank:2,melee:2,support:1,ranged:1,caster:1};function I_(i){let e=Math.max(1,i),t=Object.keys(La),n=t.reduce((l,c)=>l+(La[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(La[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(La[c]??0)-(La[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var tt={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Fi=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist","vampire","necromancer"];rf=[...Fi];function L_(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Kt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:6,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5},vampire:{name:"Vampire",gender:"female",hp:18,maxHp:18,mp:15,maxMp:15,str:11,agi:12,vit:3,dex:4,luk:3,int:9,range:1},necromancer:{name:"Necromancer",gender:"male",hp:20,maxHp:20,mp:17,maxMp:17,str:5,agi:4,vit:7,dex:3,luk:5,int:15,range:1}},Bs={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331},vampire:{primary:16704468,secondary:16704468,hair:1250066,cape:1250066,apron:1250066},necromancer:{primary:405028,secondary:405028,hair:7434350,cape:405028,belt:11372065}},Zr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp",vampire:"https://files.idyllic.app/files/static/2567599?width=256&optimizer=image",necromancer:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k"},ts=Fi.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function D_(i,e){gs&&(Fi.includes(i)&&ts[i]&&ts[i].kills++,Fi.includes(e)&&ts[e]&&ts[e].deaths++)}function U_(i,e){if(!gs)return;for(let n of i)!n||!ts[n.class]||(ts[n.class].battles++,e!=null&&(n.player===e?ts[n.class].wins++:ts[n.class].losses++));let t=Fi.map(n=>{let s=ts[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var Jr={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:8,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:5,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:5,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to HP and MP and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 3 turns.",cost:5,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}],vampire:[{name:"Gaze",description:"Reduce target's AGI and VIT by 1 for 3 turns",cost:5,target:"enemy",range:4,level:2,effectKey:"gaze"},{name:"Blood Suck",description:"Absorb enemy HP based on your MP",cost:7,target:"enemy",range:1,level:3,effectKey:"bloodSuck"}],necromancer:[{name:"Debilitate",description:"Reduce target's HP and VIT by 1 for 2 turns",cost:5,target:"enemy",range:5,level:1,effectKey:"debilitate"},{name:"Reanimate",description:"Resurrect dead unit into a skeleton",cost:10,target:"self",range:0,level:2,effectKey:"reanimate"}]};function Ce(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function Oi(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0,r=String(t);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}function Da(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,f=>f.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,f=>f.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",u=null,m=(f,x,M,y)=>{if(M)f.hp=Math.min(f.maxHp,f.hp+x),n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,`+${x}`,!1,"heal");else{let g=f===s,S=!0;if(!g&&!y){let v=Ce(f,"agi")*.7+Ce(f,"luk")*.3;S=Math.random()*Math.max(.001,v)<=Ce(s,"dex")}return S?(f.hp=Math.max(0,f.hp-x),f!==s&&(u=x),n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,String(x),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(f),f.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(f,s)):n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,"MISS",!0),S}},p=(f,x,M,y)=>{n.showFloatingCombatText&&n.showFloatingCombatText(f,x,M,!1,y?"buff":"debuff")};switch(i){case"brave":s.tempBuff={vit:3,duration:3},p(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let f=2,x=1;r.str=Math.max(1,(r.str||0)-f),s.str=(s.str||0)+f,r.vit=Math.max(1,(r.vit||0)-x),s.vit=(s.vit||0)+x,p(r.x,r.y,`-${f} STR and -${x} VIT`,!1),p(s.x,s.y,`+${f} STR and +${x} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let f=Math.max(1,Math.ceil(Ce(s,"int")-(Ce(r,"int")*.7+Ce(r,"luk")*.2)));m(r,f,!1,!0)}break;case"manaDrain":if(r){let f=Math.max(1,Math.floor(Ce(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-f),s.mp=(s.mp||0)+f,p(r.x,r.y,`-${f} MP`,!1),p(s.x,s.y,`+${f} MP`,!0)}break;case"mantra":if(r){let f=Math.max(1,Math.floor(Ce(s,"int")*.3));s.tempBuff={int:f,duration:3},p(s.x,s.y,`+${f} LUK`,!0),r.tempBuff={luk:f,duration:3},p(r.x,r.y,`+${f} LUK`,!0)}break;case"chakra":{if(m(s,Math.max(1,Math.floor(Ce(s,"int")*.3+Ce(s,"luk")*.15)),!0),!r)break;m(r,Math.max(1,Math.floor(Ce(s,"int")*.3+Ce(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let f=1;r.vit=Math.max(1,(r.vit||0)-f),s.vit=(s.vit||0)+f,p(r.x,r.y,`-${f} VIT`,!1),p(s.x,s.y,`+${f} VIT`,!0)}break;case"feast":{if(!r)break;let f=Math.max(1,Math.floor(Ce(s,"str")*.7-(Ce(r,"vit")*.3+Ce(r,"luk")*.2)));m(r,f,!1)&&m(s,f,!0)}break;case"impale":{if(!r)break;let f=2;r.tempDebuff={agi:f,duration:3},p(r.x,r.y,`-${f} AGI`,!1)}break;case"pierce":{if(!r)break;let f=Math.max(1,Math.floor(Ce(s,"str")*.6));m(r,f,!1)}break;case"focus":s.tempBuff={dex:3,duration:3},p(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let f=Math.max(1,Math.floor(Ce(s,"dex")*.7-(Ce(r,"vit")*.3+Ce(r,"luk")*.2)));m(r,f,!1)}break;case"cripple":{if(!r)break;let f=1;r.agi=Math.max(1,(r.agi||0)-f),s.agi=(s.agi||0)+f,p(r.x,r.y,`-${f} AGI`,!1),p(s.x,s.y,`+${f} AGI`,!0)}break;case"execute":if(r){let f=Math.max(1,Math.floor(Ce(s,"agi")*.8-(Ce(r,"vit")*.3+Ce(r,"luk")*.2)));m(r,f,!1)}break;case"berserk":r&&(m(r,Math.max(1,Math.floor(Ce(s,"str")*.8-Ce(r,"vit")*.3+Ce(r,"luk")*.2)),!1),m(s,3,!1));break;case"bloodlust":{let f=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff={str:f,vit:f,duration:2},p(s.x,s.y,`+${f} STR, +${f} VIT`,!0)}break;case"hex":{if(!r)break;let f=1;r.int=Math.max(1,(r.int||0)-f),s.int=(s.int||0)+f,p(r.x,r.y,`-${f} INT`,!1),p(s.x,s.y,`+${f} INT`,!0)}break;case"drain":{if(!r)break;let f=Math.max(1,Math.ceil(Ce(s,"int")*.6-(Ce(r,"int")*.4+Ce(r,"luk")*.2))),x=Math.max(1,Math.ceil(Ce(s,"int")*.2-(Ce(r,"int")*.4+Ce(r,"luk")*.2)));m(r,f,!1,!0),m(s,x,!0),p(r.x,r.y,`-${x} MP`,!1),p(s.x,s.y,`+${x} MP`,!0)}break;case"blind":{if(!r)break;let f=1;r.dex=Math.max(1,(r.dex||0)-f),s.dex=(s.dex||0)+f,p(r.x,r.y,`-${f} DEX`,!1),p(s.x,s.y,`+${f} DEX`,!0)}break;case"shuriken":{if(!r)break;let f=Math.max(1,Math.floor(Ce(s,"dex")*.7-(Ce(r,"vit")*.3+Ce(r,"luk")*.2)));m(r,f,!1)}break;case"iaido":s.tempBuff={str:1,dex:1,duration:3},p(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let f=Math.max(1,Math.floor(Ce(s,"str")*.4+Ce(s,"dex")*.4-(Ce(r,"vit")*.3+Ce(r,"luk")*.2)));m(r,f,!1)}break;case"bite":{if(!r)break;let f=Math.max(1,Math.floor(Ce(s,"str")*.7+Ce(s,"agi")*.1-(Ce(r,"vit")*.3+Ce(r,"luk")*.2)));m(r,f,!1)}break;case"howl":s.tempBuff={str:2,agi:2,duration:3},p(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let f=Math.max(1,Math.floor(Ce(s,"int")*.5));m(r,f,!0),m(s,3,!1)}break;case"judgement":{if(!r)break;let f=Math.max(1,Math.floor(s.maxHp-s.hp-(Ce(r,"int")*.2+Ce(r,"luk")*.1)));m(r,f,!1,!0)}break;case"sanctuary":s.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},r.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),p(s.x,s.y,"+1 ALL STATS",!0),p(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let f=Math.max(1,Math.floor(r.maxHp-r.hp-(Ce(r,"int")*.2+Ce(r,"luk")*.1)));m(r,f,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,p(r.x,r.y,"-2 LUK",!1),p(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let f=Math.max(1,Math.floor(Ce(s,"luk")*.8-(Ce(r,"vit")*.3+Ce(r,"luk")*.2)));m(r,f,!1)}break;case"windWalk":s.tempBuff={dex:1,agi:3,duration:3},p(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let f=Math.max(1,Math.floor(Ce(s,"dex")*.6-(Ce(r,"vit")*.3+Ce(r,"luk")*.2)));if(m(r,f,!1)&&n.world&&n.units&&n.updateUnitPosition){let M=Math.max(1,Math.floor(f*.2)),y=F_(n.world,n.units,s,r,M),g=r.x,S=r.y;r.x=y.newGx,r.y=y.newGy,y.collisionDamage>0?(console.log("knockback damage",{damage:y.collisionDamage}),n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),m(r,y.collisionDamage,!1),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)):n.animateKnockback?n.animateKnockback(r,g,S,y.newGx,y.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r))}}break;case"forge":s.tempBuff={str:2,duration:3},r.tempBuff={str:2,duration:3},p(s.x,s.y,"+2 STR",!0),p(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff={str:3,vit:3,duration:3},r.tempBuff={str:3,vit:3,duration:3},p(s.x,s.y,"+3 STR, +3 VIT",!0),p(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let f=Math.max(1,Math.floor(Ce(r,"luk")*.3));r.tempDebuff={poison:f,duration:3},p(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let f=Math.max(1,Math.floor(Ce(s,"int")*.8-(Ce(r,"int")*.4+Ce(r,"luk")*.2)));m(r,f,!1,!0);let x=Math.max(1,Math.floor(f*.5));s.luk=Math.max(1,(s.luk||0)+x),p(s.x,s.y,`+${x} LUK`,!0)}break;case"gaze":{if(!r)break;let f=1;r.tempDebuff={agi:f,vit:f,duration:4},p(r.x,r.y,`-${f} AGI, -${f} VIT`,!1)}break;case"bloodSuck":{if(!r)break;let f=Math.max(1,Math.floor(s.mp*.6+Ce(s,"int")*.6-(r.hp*.2+Ce(r,"luk")*.1)));m(r,f,!1,!0)&&m(s,f,!0),p(r.x,r.y,`-${f} HP`,!1),p(s.x,s.y,`+${f} HP`,!0)}break;case"debilitate":{if(!r)break;let f=2,x=1;r.tempDebuff={hp:f,vit:x,duration:3},p(r.x,r.y,`-${f} HP, -${x} VIT`,!1)}break;case"reanimate":{if(!n.units||!n.reanimateDeadUnit)break;let f=n.units.filter(y=>y.hp<=0);if(f.length===0)break;let x=f.filter(y=>y.player===s.player),M=x.length>0?x.reduce((y,g)=>{let S=Math.abs(y.x-s.x)+Math.abs(y.y-s.y);return Math.abs(g.x-s.x)+Math.abs(g.y-s.y)<S?g:y}):f.reduce((y,g)=>{let S=Math.abs(y.x-s.x)+Math.abs(y.y-s.y);return Math.abs(g.x-s.x)+Math.abs(g.y-s.y)<S?g:y});n.reanimateDeadUnit(s,M)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,u!=null?`| ${u} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function Qd(i){let e=hh,t=uh,n=Array.from({length:t},()=>Array(e).fill(!1)),s=Array.from({length:t},()=>Array(e).fill(0)),r=Array.from({length:t},()=>Array(e).fill(tt.GRASS)),a=i!=null?R_(i):()=>Math.random(),o=Math.floor(e/2),l=Math.floor(t/2),c=o,u=0,m=o,p=t-1,f=2,x=3;function M(z,G,K,re){let oe=re;for(let ue=G;ue<=K;ue++)if(!(ue<0||ue>=t))for(let Te=-f;Te<=f;Te++){let J=oe+Te;J<0||J>=e||(n[ue][J]=!0,r[ue][J]=z,s[ue][J]=1)}}M(tt.BASE_TOP,u,u+x-1,c),M(tt.BASE_BOTTOM,p-x+1,p,m),M(tt.CENTER,l-1,l+1,o);let y=new Set,g=(z,G)=>Math.abs(z-o)<=2&&Math.abs(G-l)<=1,S=(z,G)=>{z<0||z>=e||G<0||G>=t||g(z,G)||y.add(G*e+z)},v=Math.floor(e/2),A=Math.floor(t/2),F=Math.min(e,t)*dh,D=Math.max(60,(t+e)*2);for(let z=0;z<2;z++){let G=z===0?v-F:v+F,K=z===0?Math.PI/2:-Math.PI/2,re=z===0?Math.PI*3/2:Math.PI/2;for(let oe=0;oe<=D;oe++){let ue=oe/D,Te=K+ue*(re-K),J=G+F*Math.cos(Te),fe=A+F*Math.sin(Te),Ee=Math.round(J),ke=Math.round(fe);S(Ee,ke),S(Ee+1,ke),S(Ee-1,ke),S(Ee,ke+1),S(Ee,ke-1)}}let N=[[0,1],[0,-1],[1,0],[-1,0]];for(let z=0;z<1;z++){let G=[];y.forEach(K=>{let re=K%e,oe=K/e|0;for(let[ue,Te]of N){let J=re+ue,fe=oe+Te;if(J<0||J>=e||fe<0||fe>=t)continue;let Ee=fe*e+J;y.has(Ee)||G.push(Ee)}}),G.forEach(K=>y.add(K))}y.forEach(z=>{let G=z%e,K=z/e|0;r[K][G]===tt.BASE_TOP||r[K][G]===tt.BASE_BOTTOM||r[K][G]===tt.CENTER||(n[K][G]=!0,r[K][G]=tt.PATH,s[K][G]=1)});let Y=Math.round(v-F*1.6),T=Math.round(v+F*1.6),R=Math.round(v-F),$=Math.round(v+F),le=1;for(let z=l-le;z<=l+le;z++)if(!(z<0||z>=t))for(let G=Y;G<=T;G++)G<0||G>=e||(n[z][G]=!0,r[z][G]!==tt.CENTER&&r[z][G]!==tt.BASE_TOP&&r[z][G]!==tt.BASE_BOTTOM&&(r[z][G]=tt.PATH),s[z][G]=Math.max(s[z][G],1));function ve(z,G,K,re){let oe=Math.max(1,Math.min(z,G)),ue=Math.min(t-2,Math.max(z,G)),Te=Math.max(1,Math.min(K,re)),J=Math.min(e-2,Math.max(K,re));for(let fe=oe;fe<=ue;fe++)for(let Ee=Te;Ee<=J;Ee++)r[fe][Ee]===tt.BASE_TOP||r[fe][Ee]===tt.BASE_BOTTOM||r[fe][Ee]===tt.CENTER||(n[fe][Ee]=!0,r[fe][Ee]=tt.PATH,s[fe][Ee]=1)}let B=3,q=3;ve(u,u+B-1,R,c-1),ve(u,u+B-1,c+1,$),ve(p-q+1,p,R,m-1),ve(p-q+1,p,m+1,$),M(tt.BASE_TOP,u,u+x-1,c),M(tt.BASE_BOTTOM,p-x+1,p,m),M(tt.CENTER,l-1,l+1,o);for(let z=0;z<t;z++)for(let G=0;G<e;G++){if(n[z][G]||r[z][G]===tt.BASE_TOP||r[z][G]===tt.BASE_BOTTOM||r[z][G]===tt.CENTER)continue;let K=Math.abs(G-c)<=4&&Math.abs(z-u)<=3,re=Math.abs(G-m)<=4&&Math.abs(z-p)<=3,oe=K||re,ue=a();ue<.55&&!oe?(r[z][G]=tt.TREE,s[z][G]=1+Math.floor(a()*2)):ue<.75||oe&&ue<.5?(r[z][G]=tt.WATER,s[z][G]=0):(r[z][G]=tt.ROCK,s[z][G]=1+Math.floor(a()*2))}return{w:e,h:t,path:n,height:s,type:r,topBaseX:c,topBaseY:u,botBaseX:m,botBaseY:p}}function N_(i,e,t){let n=e===1?tt.BASE_BOTTOM:tt.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function O_(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===tt.CENTER&&e.push({gx:n,gy:t});return e}function ef(i,e){let t=O_(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function ar(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===tt.TREE||n===tt.WATER||n===tt.ROCK)}function F_(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,u=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&u===0)return{newGx:r,newGy:a,collisionDamage:0};let m=0;for(let p=0;p<s;p++){let f=r+c,x=a+u,M=f<0||f>=i.w||x<0||x>=i.h,y=!ar(i,f,x),g=e.some(S=>S.hp>0&&S.id!==n.id&&S.x===f&&S.y===x);if(M||y||g){let S=Math.max(1,m*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:S}}r=f,a=x,m++}return{newGx:r,newGy:a,collisionDamage:0}}function B_(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),u=Math.abs(l-a),m=r<o?1:-1,p=a<l?1:-1,f=c-u;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*f;x>-u&&(f-=u,r+=m),x<c&&(f+=c,a+=p)}return s}function rr(i,e,t,n,s){let r=B_(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!ar(i,o.x,o.y))return!1}return!0}function rl(i,e,t,n,s,r){let a=(p,f)=>f*i.w+p,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],u=s!=null&&r!=null,m=u?new Set(s.filter(p=>p.hp>0&&p.player!==r.player).map(p=>p.y*i.w+p.x)):null;for(;l.length;){let{x:p,y:f,d:x}=l.shift();if(!(x>=n))for(let[M,y]of c){let g=p+M,S=f+y;if(!ar(i,g,S)||u&&m.has(a(g,S)))continue;let v=a(g,S);if(o.has(v))continue;let A=x+1;o.set(v,A),l.push({x:g,y:S,d:A})}}return o}function tf(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let c=o;c<=l;c++)for(let u=r;u<=a;u++){let m=Math.abs(u-e)+Math.abs(c-t);m>=1&&m<=n&&s.set(c*i.w+u,m)}return s}function ks(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(f,x)=>x*i.w+f,l=new Set(r.filter(f=>f.hp>0&&f.player!==a.player).map(f=>f.y*i.w+f.x)),c=new Map,u=[{x:e,y:t}];c.set(o(e,t),null);let m=[[0,1],[0,-1],[1,0],[-1,0]];function p(f,x){return ar(i,f,x)?!l.has(o(f,x)):!1}for(;u.length;){let{x:f,y:x}=u.shift();if(f===n&&x===s){let M=[],y={x:n,y:s};for(;y;)M.unshift(y),y=c.get(o(y.x,y.y));return M}for(let[M,y]of m){let g=f+M,S=x+y,v=o(g,S);c.has(v)||p(g,S)&&(c.set(v,{x:f,y:x}),u.push({x:g,y:S}))}}return null}var nf={[tt.PATH]:2976557,[tt.GRASS]:2968109,[tt.TREE]:1719578,[tt.WATER]:1989278,[tt.ROCK]:4872778,[tt.BASE_TOP]:8014410,[tt.BASE_BOTTOM]:4872826,[tt.CENTER]:13940810};function fh(i){return i.w*mt/2}function ph(i){return i.h*mt/2}function af(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new Vo(e);return r.wrapS=r.wrapT=xa,r.repeat.set(4,4),r.needsUpdate=!0,r}function sf(i){let e=new Ei,t=fh(i),n=ph(i),s=new Xn(mt,ti,mt),r=af(64),a=.88,o=.02,l=[];function c(p,f,x,M,y){let g=new Qn({color:3828266,roughness:.9});g.bumpMap=r,g.bumpScale=.12;for(let S=0;S<M;S++){let v=.08+Math.random()*y,A=.03+Math.random()*.03,F=new $e(new Os(A*.5,A,v,6),g);F.position.set(p+(Math.random()-.5)*.5,x+v/2,f+(Math.random()-.5)*.5),F.rotation.x=(Math.random()-.5)*.2,F.rotation.z=(Math.random()-.5)*.2,F.castShadow=!0,e.add(F)}}let u=.12;function m(p,f,x,M){let y=x+.02,g=[[p-u,y,f-u],[p+u,y,f+u],[p-u,y,f+u],[p+u,y,f-u],[p-u+.06,y,f-u+.06],[p+u-.06,y,f+u-.06],[p-u+.06,y,f+u-.06],[p+u-.06,y,f-u+.06]],S=new Float32Array(g.length*3);g.forEach((D,N)=>{S[N*3]=D[0],S[N*3+1]=D[1],S[N*3+2]=D[2]});let v=new yi;v.setAttribute("position",new gi(S,3)),v.computeBoundingSphere();let A=new Ta({color:855309,linewidth:1}),F=new zo(v,A);M.add(F)}for(let p=0;p<i.h;p++)for(let f=0;f<i.w;f++){let x=i.type[p][f],M=i.height[p][f],y=nf[x],g=ti+M*.35,S=g/2+ti/2,v=new Qn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),A=(y>>16&255)/255,F=(y>>8&255)/255,D=(y&255)/255,N=A,Y=F,T=D;if(x===tt.PATH||x===tt.TREE||x===tt.ROCK){let G=Math.random()*.45;N=A*(1-G)+.42*G,Y=F*(1-G)+.26*G,T=D*(1-G)+.14*G}(x===tt.TREE||x===tt.ROCK)&&(N*=.5,Y*=.5,T*=.5);let R=1+(Math.random()-.5)*.12;v.color.setRGB(Math.min(1,N*R),Math.min(1,Y*R),Math.min(1,T*R)),v.bumpMap=r,v.bumpScale=.12;let $=new $e(s,v);$.position.set(f*mt-t+mt/2,g/2,p*mt-n+mt/2),$.castShadow=!0,$.receiveShadow=!0,$.userData={gx:f,gy:p,type:x},e.add($);let le=f*mt-t+mt/2,ve=p*mt-n+mt/2;if(x===tt.TREE&&m(le,ve,S,e),x===tt.TREE){let B=new Ei;B.position.set(le,S,ve);let q=f===0||f===i.w-1||p===0||p===i.h-1,z=q?.75+Math.random()*.35:.5+Math.random()*.2,G=new xt(4007959),K=()=>1+(Math.random()-.5)*.4;G.r=Math.min(1,Math.max(0,G.r*K())),G.g=Math.min(1,Math.max(0,G.g*K())),G.b=Math.min(1,Math.max(0,G.b*K()));let re=.85+Math.random()*.2,oe=new Qn({color:G,roughness:re});oe.bumpMap=r,oe.bumpScale=.1+Math.random()*.12;let ue=new $e(new Os(.12,.14,z,8),oe);ue.position.set(0,z/2,0),ue.castShadow=!0,ue.raycast=function(){},B.add(ue);let Te=r.clone();Te.repeat.set(3,3);let J=new xt(2972205),fe=()=>1+(Math.random()-.5)*.44;J.r=Math.min(1,Math.max(0,J.r*fe())),J.g=Math.min(1,Math.max(0,J.g*fe())),J.b=Math.min(1,Math.max(0,J.b*fe()));let Ee=.78+Math.random()*.24,ke=new Qn({color:J,roughness:Ee});ke.bumpMap=Te,ke.bumpScale=.16+Math.random()*.14;let qe=q?.52:.45,ht=q?1.05:.9,ft=.12,Ze=ht*.5,ae=ht*.45,Z=ht*.4,We=new $e(new Xi(qe,Ze,8),ke);We.position.set(0,z+Ze/2,0),We.castShadow=!0,We.raycast=function(){},B.add(We);let Xe=new $e(new Xi(qe*.75,ae,8),ke);Xe.position.set(0,z+Ze-ft+ae/2,0),Xe.castShadow=!0,Xe.raycast=function(){},B.add(Xe);let Qe=new $e(new Xi(qe*.5,Z,8),ke);Qe.position.set(0,z+Ze-ft+ae-ft+Z/2,0),Qe.castShadow=!0,Qe.raycast=function(){},B.add(Qe),e.add(B),l.push(B)}else if(x===tt.WATER){let B=nf[tt.WATER],q=(B>>16&255)/255,z=(B>>8&255)/255,G=(B&255)/255,K=1+(Math.random()-.5)*.12,re=new Qn({color:new xt().setRGB(Math.min(1,q*K),Math.min(1,z*K),Math.min(1,G*K)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),oe=new $e(new Qi(mt,mt),re);oe.rotation.x=-Math.PI/2,oe.position.set(le,S+.02,ve),oe.receiveShadow=!0,e.add(oe)}else if(x===tt.ROCK){let B=new Qn({color:6974058,roughness:.9});B.bumpMap=r,B.bumpScale=.2;let q=(re,oe,ue)=>{let Te=new $e(new $o(re,0),B);Te.position.set(le+oe,S+re-.2,ve+ue),Te.rotation.set(Math.random(),Math.random(),Math.random()),Te.castShadow=!0,e.add(Te)},z=.32+Math.random()*.14,G=.2+Math.random()*.12,K=.12+Math.random()*.12;q(z,(Math.random()-.5)*.15,(Math.random()-.5)*.15),q(G,(Math.random()-.5)*.25,(Math.random()-.5)*.25),q(K,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function k_(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=Qd(),t=document.getElementById("canvas-wrap"),n=new Ho;n.background=new xt(1711652),n.fog=new ko(1711652,30,90);let s=e.w*mt/2,r=e.h*mt/2,a=new ui(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,c=new k(12,38,16).normalize().multiplyScalar(o),u=new k,m=new k,p=new Vi(new k(0,1,0),0),f=new k,x=new k,M=!1,y=!1,g=!0,S=!1,v=null,A=5,F=.004,D=-Math.PI*.4,N=Math.PI*.4,Y=new k,T={x:0,y:0},R=!1,$=1,le=40,ve=.005,B=.15,q=1,z=null,G=new jo(16777215,.45);n.add(G);let K=new Jo(16774630,1.1);K.position.set(30,50,20),K.castShadow=!0,K.shadow.mapSize.width=2048,K.shadow.mapSize.height=2048,K.shadow.camera.near=1,K.shadow.camera.far=120,K.shadow.camera.left=-50,K.shadow.camera.right=50,K.shadow.camera.top=50,K.shadow.camera.bottom=-50,n.add(K);let re=sf(e);n.add(re);let oe=new Map,ue=new Ei;n.add(ue);let Te={30:!1,20:!1,10:!1},J=["red","yellow","purple","blue","green"],fe={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943},Ee=.92;function ke(d,h,_){let L=(ti+e.height[_][h]*.35)/2+ti/2,P=new Qi(Ee,Ee),O=new Cn({color:d,transparent:!0,opacity:.45,side:wn}),U=new $e(P,O);return U.rotation.x=-Math.PI/2,U.position.set(h*mt-Qe+mt/2,L+.01,_*mt-ze+mt/2),U}function qe(d){let h=new Ko(.22,0),_=new Qn({color:d,metalness:.3,roughness:.4}),b=new $e(h,_);return b.rotation.x=Math.PI/4,b.castShadow=!0,b.receiveShadow=!0,b}function ht(){let d=Math.floor(e.h/2),h=[];for(let _=0;_<e.w;_++){let b=d;if(e.type[b][_]!==tt.PATH||ae.some(O=>O.hp>0&&O.x===_&&O.y===b))continue;let P=b*e.w+_;oe.has(P)||h.push({gx:_,gy:b})}return h}function ft(d){let h=ht();if(h.length===0)return;let _=h[Math.floor(Math.random()*h.length)],b=J[Math.floor(Math.random()*J.length)],L=_.gy*e.w+_.gx,P=fe[b],O=Je(_.gx,_.gy);O.y+=.35;let U=qe(P);U.position.copy(O),ue.add(U);let I=ke(P,_.gx,_.gy);ue.add(I),oe.set(L,{type:b,mesh:U,glowMesh:I}),console.log("powerup appeared",{turnsLeft:d,type:b,gx:_.gx,gy:_.gy})}function Ze(d){let h=d.y*e.w+d.x,_=oe.get(h);if(!_)return;let b=_.mesh;if(ue.remove(b),b.geometry.dispose(),b.material){let L=b.material;L.dispose&&L.dispose()}_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose()),oe.delete(h),_.type==="green"?(d.hp=Math.min(d.maxHp,d.hp+6),li(d.x,d.y,"+6 HP",!1,"buff")):(_.type==="red"?d.tempBuff={str:4,duration:3}:_.type==="yellow"?d.tempBuff={agi:4,duration:3}:_.type==="purple"?d.tempBuff={int:4,duration:3}:_.type==="blue"&&(d.tempBuff={dex:4,duration:3}),li(d.x,d.y,`+4 ${_.type==="red"?"STR":_.type==="yellow"?"AGI":_.type==="purple"?"INT":"DEX"}`,!1,"buff")),ut(d,()=>Oe(d))}let ae=[],Z=1,We=new Map,Xe=af(64),Qe=fh(e),ze=ph(e);function Je(d,h){let b=(ti+e.height[h][d]*.35)/2+ti/2;return new k(d*mt-Qe+mt/2,b,h*mt-ze+mt/2)}function gt(d,h){d==="short"&&(hh=27,uh=15,dh=.35,ms=100),n.remove(re),re.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(L=>L.dispose())}),We.forEach(_=>{n.remove(_),_.traverse(b=>{b.geometry&&b.geometry.dispose(),b.material&&(Array.isArray(b.material)?b.material:[b.material]).forEach(P=>P.dispose())})}),We.clear(),ae.length=0,Z=1,oe.forEach(_=>{ue.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),oe.clear(),Te={30:!1,20:!1,10:!1},e=Qd(typeof h<"u"?h:void 0),Qe=fh(e),ze=ph(e),re=sf(e),n.add(re)}function C(){We.forEach(d=>{n.remove(d),d.traverse(h=>{h.geometry&&h.geometry.dispose(),h.material&&(Array.isArray(h.material)?h.material:[h.material]).forEach(b=>b.dispose())})}),We.clear(),ae.length=0,Z=1}function E(d,h){let _=(d>>16&255)/255,b=(d>>8&255)/255,L=(d&255)/255,P=1+(Math.random()-.5)*h;return new xt(Math.min(1,_*P),Math.min(1,b*P),Math.min(1,L*P))}let ne=.62;function xe(d,h){h=h??ne;let _=d instanceof xt?d:new xt(d);return new xt(Math.max(0,_.r*h),Math.max(0,_.g*h),Math.max(0,_.b*h))}function be(d,h,_){let b=Bs[h]||Bs.knight,L=xe(E(b.primary,.08)),P=xe(E(b.secondary,.08)),O=Kt[h]&&Kt[h].gender||"male",U=_??4006676,I=xe(E(b.skin!=null?b.skin:15250592,.06)),V=xe(E(U,.08)),Q=()=>(Math.random()-.5)*.08,ye=()=>(Math.random()-.5)*.04,W=new Qn({color:L,metalness:Math.max(0,.25+ye()),roughness:Math.max(.3,Math.min(1,.5+Q()))});W.bumpMap=Xe,W.bumpScale=.1;let ce=new Qn({color:P,metalness:Math.max(0,.2+ye()),roughness:Math.max(.3,Math.min(1,.55+Q()))});ce.bumpMap=Xe,ce.bumpScale=.1;let de=new Qn({color:L,metalness:Math.max(0,.25+ye()),roughness:Math.max(.3,Math.min(1,.5+Q()))});de.bumpMap=Xe,de.bumpScale=.1;let Ne=new Qn({color:I,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+Q()))});Ne.bumpMap=Xe,Ne.bumpScale=.05;let we=new Ei,Be=.28,vt=.08,je=.08,Gt=new $e(new Xn(vt,Be,je),ce);Gt.position.set(-.06,Be/2,0),Gt.castShadow=!0,we.add(Gt);let bn=new $e(new Xn(vt,Be,je),ce);bn.position.set(.06,Be/2,0),bn.castShadow=!0,we.add(bn);let nn=.28,$t=.2,mn=.12,Sn=new $e(new Xn($t,nn,mn),W);Sn.position.set(0,Be+nn/2,0),Sn.castShadow=!0,we.add(Sn);let Dt=.06,sn=.22,Ft=.06,Rt=new $e(new Xn(Dt,sn,Ft),de);Rt.position.set(-($t/2+Dt/2),Be+nn-.08,0),Rt.castShadow=!0,we.add(Rt);let Xt=new $e(new Xn(Dt,sn,Ft),de);if(Xt.position.set($t/2+Dt/2,Be+nn-.08,0),Xt.castShadow=!0,we.add(Xt),b.cape!=null){let ct=$t*1.95,Lt=ct*.6,ie=Be+nn*.28,ge=new qr;ge.moveTo(-Lt/2,ie/2),ge.lineTo(Lt/2,ie/2),ge.lineTo(ct/2,-ie/2),ge.lineTo(-ct/2,-ie/2),ge.closePath();let pe=new Pa(ge),te=new Qn({color:xe(E(b.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+Q())),side:wn});te.bumpMap=Xe,te.bumpScale=.12;let he=new $e(pe,te);he.position.set(0,Be+nn-ie/2+.05,-mn/2-.02),he.rotation.y=Math.PI,he.castShadow=!0,we.add(he);let Me=.055,me=Be+nn+.02,Re=.02,Tt=$t/2+Dt*.5,bt=new $e(new es(Me,10,8,0,Math.PI*2,0,Math.PI*.55),te.clone());bt.position.set(-Tt,me,Re),bt.rotation.x=-Math.PI*.35,bt.rotation.z=Math.PI*.5,bt.scale.set(1.2,.85,1.1),bt.castShadow=!0,we.add(bt);let vn=new $e(new es(Me,10,8,0,Math.PI*2,0,Math.PI*.55),te.clone());vn.position.set(Tt,me,Re),vn.rotation.x=-Math.PI*.35,vn.rotation.z=-Math.PI*.5,vn.scale.set(1.2,.85,1.1),vn.castShadow=!0,we.add(vn)}if(b.belt!=null){let ct=new Qn({color:xe(E(b.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+Q()))});ct.bumpMap=Xe,ct.bumpScale=.1;let Lt=.022,ie=.04,ge=new $e(new Xn($t+.04,Lt,mn+ie),ct);ge.position.set(0,Be+.04,0),ge.castShadow=!0,we.add(ge)}if(b.apron!=null){let ct=new Qn({color:xe(E(b.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+Q())),side:wn});ct.bumpMap=Xe,ct.bumpScale=.12;let Lt=$t*.95,ie=Be*.85,ge=new $e(new Qi(Lt,ie),ct),pe=Be+.2;ge.position.set(0,pe-ie/2,mn/2+.02),ge.castShadow=!0,we.add(ge);let te=Be+nn+.02,he=$t/2+Dt*.2,Me=.018,me=.008,Re=te-pe,Tt=new $e(new Xn(Me,Re,me),ct.clone());Tt.position.set(-he,(pe+te)/2,mn/2+.015),Tt.castShadow=!0,we.add(Tt);let bt=new $e(new Xn(Me,Re,me),ct.clone());bt.position.set(he,(pe+te)/2,mn/2+.015),bt.castShadow=!0,we.add(bt)}let lt=.1,Mt=new $e(new es(lt,12,10),Ne);Mt.position.set(0,Be+nn+lt,0),Mt.castShadow=!0,we.add(Mt);let Qt=new Cn({color:1710638}),En=new $e(new Xn(.032,.004,.004),Qt);En.position.set(-.032,.028,lt*.92),Mt.add(En);let Tn=new $e(new Xn(.032,.004,.004),Qt);Tn.position.set(.032,.028,lt*.92),Mt.add(Tn);let Wn=new Cn({color:2957087}),vi=new $e(new Xn(.045,.012,.008),Wn);vi.position.set(0,-.028,lt*.92),Mt.add(vi);let cn=new Qn({color:V,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+Q()))});cn.bumpMap=Xe,cn.bumpScale=.15;let Pi=ct=>{let Lt=lt*.32,ie=lt*.22,ge=new $e(new Xi(ie*.9,Lt,5),cn);ge.position.set(-lt*.25,lt*.22,lt*.72),ge.rotation.x=.35,ge.rotation.z=.12,ge.castShadow=!0,ct.add(ge);let pe=new $e(new Xi(ie,Lt,5),cn);pe.position.set(lt*.28,lt*.18,lt*.68),pe.rotation.x=.28,pe.rotation.z=-.1,pe.castShadow=!0,ct.add(pe);let te=new $e(new Xi(ie*.7,Lt*.9,5),cn);te.position.set(0,lt*.28,lt*.78),te.rotation.x=.4,te.castShadow=!0,ct.add(te)};if(O==="female"){let ct=new $e(new es(lt*.92,12,10,0,Math.PI*2,0,Math.PI*.52),cn);ct.position.set(0,lt*.28,-lt*.18),ct.rotation.y=.06,ct.rotation.x=-.04,ct.castShadow=!0,Mt.add(ct);let Lt=new $e(new Xn(lt*1.15,lt*2.2,lt*.55),cn);Lt.position.set(0,-lt*.6,-lt*.95),Lt.rotation.z=.03,Lt.castShadow=!0,Mt.add(Lt),Pi(Mt)}else{let ct=new $e(new es(lt*.9,12,10,0,Math.PI*2,0,Math.PI*.5),cn);ct.position.set(0,lt*.4,-lt*.12),ct.rotation.y=.08,ct.rotation.x=-.05,ct.rotation.z=.04,ct.castShadow=!0,Mt.add(ct);let Lt=new $e(new es(lt*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),cn);Lt.position.set(0,lt*.1,-lt*.05),Lt.rotation.y=.1,Lt.castShadow=!0,Mt.add(Lt),Pi(Mt)}return we.userData.leftLeg=Gt,we.userData.rightLeg=bn,we.userData.leftArm=Rt,we.userData.rightArm=Xt,we}function Se(d,h){let _=d.userData;if(!_.leftLeg)return;let b=h*Math.PI*2,L=.35,P=.28;_.leftLeg.rotation.x=Math.sin(b)*L,_.rightLeg.rotation.x=Math.sin(b+Math.PI)*L,_.leftArm.rotation.y=Math.sin(b+Math.PI)*P,_.rightArm.rotation.y=Math.sin(b)*P}function Ke(d){let h=d.userData;h.leftLeg&&(h.leftLeg.rotation.x=0,h.rightLeg.rotation.x=0,h.leftArm.rotation.y=0,h.rightArm.rotation.y=0)}function Ue(d){let h=be(d.player,d.class,d.hairColor);h.position.copy(Je(d.x,d.y)),h.castShadow=!0,h.userData.unitId=d.id;let _=.28,b=.28,L=.12,P=.18,O=.04,U=new Qi(P,O),I=new Cn({color:6037528,side:wn,depthTest:!0,depthWrite:!1}),V=new $e(U,I);V.position.set(0,_+b/2,L/2+.02),V.rotation.x=-Math.PI/2,V.rotation.z=Math.PI/4,V.visible=d.maxHp>0&&d.hp<d.maxHp&&d.hp>0,h.add(V),h.userData.slashMark=V,n.add(h),We.set(d.id,h),_e(h,d.maxHp>0&&d.hp/d.maxHp<.35)}function Oe(d){let h=We.get(d.id);!h||!h.userData.slashMark||(h.userData.slashMark.visible=d.maxHp>0&&d.hp<d.maxHp&&d.hp>0)}function at(d){d.traverse(_=>{if(!_.isMesh||!_.material)return;let b=_.material;if(b.color){let L=b.color.r,P=b.color.g,O=b.color.b,U=.2126*L+.7152*P+.0722*O,I=Math.max(0,Math.min(1,U*.55));b.color.setRGB(I,I,I)}})}let Et=.35;function _e(d,h){if(d)if(h){d.rotation.x=.35,d.scale.setScalar(.96);let _=d.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=.2,_.rightArm.rotation.y=.2),d.traverse(b=>{b.isMesh&&b.material&&b.material.color&&(b.userData.originalColor||(b.userData.originalColor=b.material.color.clone()),b.material.color.copy(b.userData.originalColor).multiplyScalar(.82))})}else{d.rotation.x=0,d.scale.setScalar(1);let _=d.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=0,_.rightArm.rotation.y=0),d.traverse(b=>{b.isMesh&&b.material&&b.userData.originalColor&&b.material.color.copy(b.userData.originalColor)})}}function qt(d){if(d.level>=3)return;let h=d.maxHp>0?d.hp/d.maxHp:1;d.level+=1;let _=L=>Math.max(1,Math.ceil(L*1.1)),b=L=>Math.max(1,Math.ceil(L*1.1));d.maxHp=_(d.maxHp),d.maxMp=_(d.maxMp),d.hp=Math.max(1,Math.min(d.maxHp,Math.ceil(h*d.maxHp))),d.mp=Math.max(1,Math.min(d.maxMp,Math.ceil(h*d.maxMp))),d.str=b(d.str),d.agi=b(d.agi),d.vit=b(d.vit),d.dex=b(d.dex),d.luk=b(d.luk),d.int=b(d.int),d.range>2&&(d.range=b(d.range)),console.log("[LEVEL UP]",`${d.name} (${d.class}, P${d.player})`,`\u2192 Lv.${d.level}`,`| HP ${d.hp}/${d.maxHp} MP ${d.mp}/${d.maxMp} STR ${d.str} VIT ${d.vit}`),Pt(d)}function Pt(d){let h=We.get(d.id),_=d.level===3?"levelup level3":d.level===2?"levelup level2":"levelup";if(Jf(d,_),!h)return;let b=performance.now(),L=0;function P(O){L++,L%2===0&&Ot();let U=O-b,I=Math.min(1,U/H),V=I<.5?1+.35*(I/.5):1+.35*(1-(I-.5)/.5);h.scale.setScalar(V),I<1?requestAnimationFrame(P):h.scale.setScalar(1)}requestAnimationFrame(P)}function ut(d,h){let _=We.get(d.id);if(!_){h&&h();return}let b=performance.now(),L=0;function P(O){L++,L%2===0&&Ot();let U=O-b,I=Math.min(1,U/H),V=I<.5?1+.35*(I/.5):1+.35*(1-(I-.5)/.5);_.scale.setScalar(V),I<1?requestAnimationFrame(P):(_.scale.setScalar(1),h&&h())}requestAnimationFrame(P)}let it=400,Ve=280,_t=.45,Bt=160,un=280,At=350,Pe=500,H=600,Le=400,De=280,rt=.2,st=.18,Zt=!1,en=new k,In=new k,Nn=new k,Jt=new k;function $n(d=!1){g=!0;let h=null;if(xn==="playing"&&Ae.length>0){let O=Ae[et];h=ae.find(U=>U.id===O&&U.hp>0)}if(h||(h=ae.find(O=>O.player===yn&&O.hp>0)),!h)return;let _=a.position.distanceTo(u);if(_<.1&&(_=o),m.copy(a.position).sub(u).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),Nn.copy(Je(h.x,h.y)),Jt.copy(Nn).add(m.clone().multiplyScalar(_)),d||Zt){u.copy(Nn),a.position.copy(Jt),a.lookAt(u),Ot();return}Zt=!0,en.copy(u),In.copy(a.position);let b=performance.now(),L=0;Kn.shadowMap.enabled=!1;function P(O){L++,L%2===0&&Ot();let U=Math.min(1,(O-b)/it),I=U*(2-U);u.lerpVectors(en,Nn,I),a.position.lerpVectors(In,Jt,I),a.lookAt(u),U<1?requestAnimationFrame(P):(Kn.shadowMap.enabled=!0,Zt=!1)}requestAnimationFrame(P)}let Vn=0,yn=1,xn="draft",dt="pvp",tn=1,fi={1:"",2:""},wi=null,Yi=null,ns=null,ys="long";function Ln(d){return dt==="online"&&fi[d]?fi[d]:"Player "+d}let w=1,X=0,j=null;async function se(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{j=await navigator.wakeLock.request("screen"),j.addEventListener("release",()=>{j=null})}catch{j=null}}function ee(){j&&(j.release().catch(()=>{}),j=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&dt==="cvcpu"&&xn==="playing"&&se()});let Fe="balanced",Ge=new Set(Fi),nt=0,Ye=null,pt=null,ot=new Set,Ae=[],et=0,kt=null,It=new Map,Ai=null;function dn(d){if(!d||d.hp<=0)return;Ai=d.id;let h=document.getElementById("unit-preview-card"),_=document.getElementById("unit-preview-image"),b=document.getElementById("unit-preview-name"),L=document.getElementById("unit-preview-meta"),P=document.getElementById("unit-preview-stats");h.classList.remove("player-1","player-2"),h.classList.add(d.player===1?"player-1":"player-2"),h.classList.toggle("level-2",d.level>=2&&d.level<3),h.classList.toggle("level-3",d.level>=3),_.src=Zr[d.class]||"",_.alt=d.name,b.textContent=d.name,L.textContent=`Lv.${d.level} ${d.class} \u2014 ${Ln(d.player)}`;let O=[["HP",`${d.hp}/${d.maxHp}`,"stat-val-hp"],["MP",`${d.mp}/${d.maxMp}`,""],["STR",Oi(d,"str"),""],["AGI",Oi(d,"agi"),""],["VIT",Oi(d,"vit"),""],["DEX",Oi(d,"dex"),""],["LUK",Oi(d,"luk"),""],["INT",Oi(d,"int"),""]];d.tempDebuff&&d.tempDebuff.poison!=null&&O.push(["Poison",`${d.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),P.innerHTML=O.map(([I,V,Q])=>{let ye=Q?` ${Q}`:"";return`<span class="stat-label">${I}</span><span class="stat-val${ye}">${V}</span>`}).join("");let U=d.maxHp>0&&d.hp/d.maxHp<.3;h.classList.toggle("low-hp",U),h.style.display="block"}function yt(){Ai=null;let d=document.getElementById("unit-preview-card");d.classList.remove("low-hp","level-2","level-3"),d.style.display="none"}let jt=!1,Vt=!1,ni=!1,On=null,Yt=!1,Gn=!1,fn=!1,Fn=[],ii=new Ei;n.add(ii);let _n=[],is=!0,$i=0,jr=0;function Ot(){is=!0,$i=performance.now()}let Qr=new Ei;n.add(Qr);let al=[],of=mt,lf=.02,cf=3368703,hf=13382451;function uf(d,h){let _=d/2,b=_-h,L=new qr;L.moveTo(-_,-_),L.lineTo(_,-_),L.lineTo(_,_),L.lineTo(-_,_),L.lineTo(-_,-_);let P=new Xr;return P.moveTo(-b,-b),P.lineTo(b,-b),P.lineTo(b,b),P.lineTo(-b,b),P.lineTo(-b,-b),L.holes.push(P),new Pa(L)}let df=uf(of,lf);function Ri(d=null){let h=ae.filter(_=>_.hp>0&&_.id!==d).map(_=>`${_.id},${_.x},${_.y},${_.player}`).sort().join("|");if(!(Ri._lastSig===h&&Ri._lastExclude===d)){for(Ri._lastSig=h,Ri._lastExclude=d,al.forEach(_=>_.dispose()),al.length=0;Qr.children.length;){let _=Qr.children[0];Qr.remove(_)}ae.filter(_=>_.hp>0&&_.id!==d).forEach(_=>{let b=_.x,L=_.y,O=(ti+e.height[L][b]*.35)/2+ti/2,U=b*mt-Qe+mt/2,I=L*mt-ze+mt/2,V=O+.02,Q=_.player===1?cf:hf,ye=new Cn({color:Q,side:wn}),W=new $e(df,ye);W.rotation.x=-Math.PI/2,W.position.set(U,V,I),Qr.add(W),al.push(ye)}),Ot()}}let ff=1.15,ol={1:8102901,2:15628943},xi=(()=>{let d=new Cn({color:ol[1]}),h=new $e(new Xi(.1,.25,8),d);return h.rotation.x=Math.PI,h.visible=!1,n.add(h),h})();function ll(){if(xn!=="playing"||Ae.length===0||fn){xi.visible=!1,xi.removeFromParent(),n.add(xi);return}let d=Ae[et],h=ae.find(b=>b.id===d);if(!h||h.hp<=0){xi.visible=!1,xi.removeFromParent(),n.add(xi);return}let _=We.get(d);if(!_){xi.visible=!1;return}xi.removeFromParent(),_.add(xi),xi.position.set(0,ff,0),xi.material&&xi.material.color.setHex(ol[h.player]??ol[1]),xi.visible=!0}function H_(d){let h=[[0,1],[0,-1],[1,0],[-1,0]],_=[];for(let[b,L]of h){let P=d.x+b,O=d.y+L;!ar(e,P,O)||ae.some(I=>I.id!==d.id&&I.x===P&&I.y===O&&I.hp>0)||_.push(Math.atan2(b,L))}return _}function mh(d){if(Fn.length===0)return d;if(Fn.length===1)return Fn[0];let h=Fn[0],_=Math.abs(gh(d-h));for(let b=1;b<Fn.length;b++){let L=Math.abs(gh(d-Fn[b]));L<_&&(_=L,h=Fn[b])}return h}function gh(d){for(;d>Math.PI;)d-=2*Math.PI;for(;d<-Math.PI;)d+=2*Math.PI;return d}let pf=1.2,Ki=(()=>{let d=new $e(new Xi(.12,.35,8),new Cn({color:4500223}));return d.rotation.x=-Math.PI/2,d.visible=!1,n.add(d),d})();function mf(d,h){if(!fn||Ae.length===0||Fn.length===0)return;let _=Ae[et],b=ae.find(ye=>ye.id===_),L=We.get(_);if(!b||!L)return;Wa(d,h),_s.setFromCamera(vs,a);let P=_s.intersectObjects(re.children,!0);if(P.length===0)return;let O=null;for(let ye of P){let W=ye.object;for(;W&&(W.userData.gx==null||W.userData.gy==null);)W=W.parent;if(W&&W.userData.gx!=null){O=ye.point;break}}if(!O)return;let U=Je(b.x,b.y),I=O.x-U.x,V=O.z-U.z;if(I*I+V*V<1e-6)return;let Q=Math.atan2(I,V);L.rotation.y=mh(Q)}function gf(){if(Ae.length===0)return;let d=Ae[et],h=ae.find(L=>L.id===d),_=We.get(d);if(!h||!_)return;Fn=[[0,1],[0,-1],[1,0],[-1,0]].map(([L,P])=>Math.atan2(L,P)),Ki.removeFromParent(),_.add(Ki),Ki.position.set(0,pf,0),Ki.rotation.x=-Math.PI/2,Ki.rotation.y=0,Ki.rotation.z=Math.PI,Ki.visible=!0,_.rotation.y=Fn[0]}function yf(){Ki.visible=!1,Ki.removeFromParent(),n.add(Ki)}let Ua=[];(function(){let h=Ti,_=[1];for(let b=0;b<Math.floor((h-1)/2);b++)_.push(2,2,1,1);h%2===1?_.push(2):(_.push(2,2),_.push(1)),Ua=_})();function Bi(){return Ua[nt]}function yh(){let d=Bi(),h=0;for(let _=0;_<nt;_++)Ua[_]===d&&h++;return h+1}function ea(){oe.forEach(_=>{ue.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(ue.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),oe.clear(),Te={30:!1,20:!1,10:!1};let d=Ti,h=[1];for(let _=0;_<Math.floor((d-1)/2);_++)h.push(2,2,1,1);d%2===1?h.push(2):(h.push(2,2),h.push(1)),Ua=h,xn="draft",nt=0,Ge=new Set(Fi),Ye=null,pt=null,ot.clear(),Dn(),hl(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function cl(){return ae.filter(d=>d.hp>0).sort((d,h)=>{let _=Ce(d,"agi"),b=Ce(h,"agi");if(b!==_)return b-_;let L=Ce(d,"dex");return Ce(h,"dex")-L}).map(d=>d.id)}function xf(d){let h=new Set(ae.filter(Q=>Q.hp>0).map(Q=>Q.y*e.w+Q.x)),_=(Q,ye)=>h.has(ye*e.w+Q),b=(Q,ye)=>Q>=0&&Q<e.w&&ye>=0&&ye<e.h,L=(Q,ye)=>b(Q,ye)&&ar(e,Q,ye)&&!_(Q,ye),P=We.get(d.id),O=P!=null?P.rotation.y:d.player===1?Math.PI:0,U=d.x-Math.round(Math.cos(O)),I=d.y+Math.round(Math.sin(O));if(L(U,I))return{gx:U,gy:I};let V=[[0,1],[0,-1],[1,0],[-1,0]];for(let[Q,ye]of V){let W=d.x+Q,ce=d.y+ye;if(L(W,ce))return{gx:W,gy:ce}}return null}function _f(d,h,_,b){let L=b?.position&&b.position.gx!=null&&b.position.gy!=null?{gx:b.position.gx,gy:b.position.gy}:xf(d);if(!L)return null;let P=h.class&&Fi.includes(h.class)?h.class:"knight",O=h.hairColor!=null?h.hairColor:(Bs[P]||Bs.knight).hair,U={id:Z++,player:d.player,x:L.gx,y:L.gy,level:h.level!=null?h.level:1,name:h.name!=null?h.name:"Summoned",class:P,hairColor:O,hp:h.hp!=null?h.hp:10,maxHp:h.maxHp!=null?h.maxHp:10,mp:h.mp!=null?h.mp:5,maxMp:h.maxMp!=null?h.maxMp:5,str:h.str!=null?h.str:5,agi:h.agi!=null?h.agi:5,vit:h.vit!=null?h.vit:5,dex:h.dex!=null?h.dex:5,luk:h.luk!=null?h.luk:5,int:h.int!=null?h.int:5,range:h.range!=null?h.range:1,summonedBy:d.id};_!=null&&Array.isArray(_)&&_.length>0&&(U.summonedSkills=_),ae.push(U),Ue(U);let I=We.get(U.id);if(I&&b?.useGrayscaleAppearance&&at(I),I){let ce=function(de){W++,W%2===0&&Ot();let Ne=de-ye;if(Ne<Le){let Be=Ne/Le,vt=1-(1-Be)*(1-Be),je=rt+(1-rt)*vt;I.scale.setScalar(je),requestAnimationFrame(ce);return}let we=Ne-Le;if(we<De){let Be=we/De,vt=Math.sin(Be*Math.PI);I.position.y=Q.y+st*vt,requestAnimationFrame(ce);return}I.scale.setScalar(1),I.position.y=Q.y,Ot()},V=We.get(d.id);I.rotation.y=V!=null?V.rotation.y:d.player===1?Math.PI:0,I.scale.setScalar(rt);let Q=Je(U.x,U.y),ye=performance.now(),W=0;requestAnimationFrame(ce)}return Ae=cl(),Ri(),typeof Nt=="function"&&Nt(),Ot(),U}function Na(d,h){let _=ae.indexOf(h);if(_===-1)return null;ae.splice(_,1);let b=We.get(h.id);b&&(n.remove(b),We.delete(h.id));let L=h.class&&Fi.includes(h.class)?h.class:"knight",P=h.hairColor!=null?h.hairColor:(Bs[L]||Bs.knight).hair,O=ye=>Math.max(1,Math.floor((ye||0)*6/7)),U=O(h.maxHp),I=O(h.maxMp),V={name:"Reanimated "+h.name,class:L,hairColor:P,level:h.level,hp:U,maxHp:U,mp:I,maxMp:I,str:O(h.str),agi:O(h.agi),vit:O(h.vit),dex:O(h.dex),luk:O(h.luk),int:O(h.int),range:h.range},Q=h.summonedSkills&&h.summonedSkills.length>0?h.summonedSkills.slice():(Jr[L]||[]).slice();return _f(d,V,Q,{position:{gx:h.x,gy:h.y},useGrayscaleAppearance:!0})}function vf(){document.getElementById("draft-panel").style.display="none";let d=document.getElementById("draft-placement-card");d&&(d.style.display="none",d.innerHTML=""),Dn();let h=document.getElementById("battle-start-overlay");h&&(h.classList.add("visible"),h.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");for(_&&(_.style.display="none",_.innerHTML=""),xn="playing",Vn=0,Ae=cl(),et=0;et<Ae.length&&ae.find(P=>P.id===Ae[et]).hp<=0;)et++;et>=Ae.length&&(et=0);let b=ae.find(P=>P.id===Ae[et]);yn=b?b.player:1,Yt=!1,Gn=!1,kt=Ae[et],setTimeout(()=>{h&&(h.classList.remove("visible"),h.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",Ri(),Nt(),ll(),$n(!0),dt==="cvcpu"&&se()},4e3)}function hl(){let d=document.getElementById("draft-panel"),h=document.getElementById("draft-title"),_=document.getElementById("draft-classes"),b=document.getElementById("draft-message"),L=document.getElementById("turn-player"),P=document.getElementById("draft-placement-card");if(Ye){d.style.display="none",L.textContent=`Draft: ${Ln(Bi())} \u2014 place ${Kt[Ye].name}`;let I=Bi();P.style.display="flex",P.classList.remove("player-1","player-2"),P.classList.add("player-"+I),P.style.left=I===1?"24px":"",P.style.right=I===2?"24px":"";let V=[...ae.filter(W=>W.player===I).map(W=>W.class),Ye],Q=(W,ce)=>{let de=Kt[W];return`
        <div class="draft-class-card${ce?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Zr[W]||""}" alt="${de.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${de.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${de.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${de.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${de.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${de.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${de.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${de.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${de.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${de.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${de.range}</span>
            </div>
          </div>
        </div>
      `},ye=3;if(V.length>ye){P.classList.add("draft-placement-cols");let W=[];for(let de=0;de<V.length;de+=ye)W.push(V.slice(de,de+ye));let ce=V.length-1;P.innerHTML=W.map((de,Ne)=>{let we=Ne===W.length-1,Be=de.map((vt,je)=>{let bn=Ne*ye+je===ce;return Q(vt,bn)}).join("");return`<div class="draft-placement-col${we?" draft-placement-col-current":""}">${Be}</div>`}).join("")}else P.classList.remove("draft-placement-cols"),P.innerHTML=V.map((W,ce)=>{let de=ce===V.length-1;return Q(W,de)}).join("");dt==="pvcpu"&&Bi()===2&&setTimeout(sa,500),dt==="cvcpu"&&setTimeout(sa,500);return}P.style.display="none",P.innerHTML="",xn==="draft"&&(d.style.display="flex");let O=Bi();if(dt!=="online"||O===tn){let Ne=function(){let we=pt;if(!we||!Kt[we]){I&&(I.style.display=""),V&&(V.style.display="none"),Q&&(Q.style.display="none"),de&&(de.style.display="none");return}let Be=Kt[we],vt=Jr[we]||[];I&&(I.style.display="none"),V&&(V.src=Zr[we]||"",V.alt=Be.name,V.style.display="block"),Q&&(Q.style.display="block"),ye&&(ye.textContent=Be.name),W&&(W.innerHTML=[["HP",Be.hp],["MP",Be.mp],["STR",Be.str],["AGI",Be.agi],["VIT",Be.vit],["DEX",Be.dex],["LUK",Be.luk],["INT",Be.int],["Range",Be.range]].map(([je,Gt])=>`<span class="draft-stat-label">${je}</span><span class="draft-stat-value">${Gt}</span>`).join("")),ce&&(ce.innerHTML=vt.length?vt.map(je=>`<div class="draft-detail-skill"><span class="draft-detail-skill-name">${je.name}</span><span class="draft-detail-skill-desc">${je.description||""}</span></div>`).join(""):'<div class="draft-detail-skill">No skills</div>'),de&&(de.style.display="block",de.disabled=!Ge.has(we),de.onclick=()=>{let je=pt;je&&Ge.has(je)&&ul(je)}),_.querySelectorAll(".draft-class-card").forEach(je=>{je.classList.toggle("draft-class-card-selected",je.dataset.classKey===we)})};h.textContent=`${Ln(O)}: Pick a class (${yh()}/${Ti})`,b.textContent="",_.innerHTML="",L.textContent=`Draft: ${Ln(O)} \u2014 pick a class`;let I=document.getElementById("draft-detail-placeholder"),V=document.getElementById("draft-detail-image"),Q=document.getElementById("draft-detail-content"),ye=document.getElementById("draft-detail-name"),W=document.getElementById("draft-detail-stats"),ce=document.getElementById("draft-detail-skills"),de=document.getElementById("draft-select-btn");L_([...Fi]).forEach(we=>{let Be=Ge.has(we),vt=Kt[we],je=document.createElement("button");je.type="button",je.dataset.classKey=we,je.className="draft-class-card"+(Be?"":" draft-class-card-unavailable")+(pt===we?" draft-class-card-selected":""),je.disabled=!Be,je.innerHTML=`
          <img class="draft-class-card-image" src="${Zr[we]||""}" alt="${vt.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${vt.name}</div>
          </div>
        `,Be&&je.addEventListener("click",()=>{pt=we,Ne()}),_.appendChild(je)}),Ne()}else{h.textContent=`${Ln(O)} is picking a class`,b.textContent="",_.innerHTML="",L.textContent=`Draft: ${Ln(O)} \u2014 pick a class`;let I=document.getElementById("draft-detail-placeholder"),V=document.getElementById("draft-detail-image"),Q=document.getElementById("draft-detail-content"),ye=document.getElementById("draft-select-btn");I&&(I.style.display=""),V&&(V.style.display="none"),Q&&(Q.style.display="none"),ye&&(ye.style.display="none")}dt==="pvcpu"&&Bi()===2&&setTimeout(sa,500),dt==="cvcpu"&&setTimeout(sa,500)}function ul(d){if(!Ge.has(d)||Ye)return;Ye=d;let h=Bi(),_=new Set(ae.map(P=>P.y*e.w+P.x)),b=N_(e,h,_),L=ef(e,b);ot=new Set(L.map(P=>P.gy*e.w+P.gx)),Vf(L),hl(),dt==="online"&&h===tn&&typeof ln=="function"&&ln({type:"draftPick",classKey:d})}function dl(d,h){if(!Ye)return;let _=Bi(),b=h*e.w+d;if(!ot.has(b))return;let L=Kt[Ye],P={id:Z++,player:_,x:d,y:h,level:1,name:L.name,class:Ye,hairColor:(Bs[Ye]||Bs.knight).hair,hp:L.hp,maxHp:L.maxHp,mp:L.mp,maxMp:L.maxMp,str:L.str,agi:L.agi,vit:L.vit,dex:L.dex,luk:L.luk,int:L.int,range:L.range};ae.push(P),Ue(P);let O=We.get(P.id);O&&(O.rotation.y=P.player===1?Math.PI:0),Ge.delete(Ye),Ye=null,ot.clear(),Dn(),dt==="online"&&_===tn&&typeof ln=="function"&&ln({type:"draftPlace",gx:d,gy:h});let U=document.getElementById("draft-placement-card");if(U&&(U.style.display="none",U.innerHTML=""),nt++,nt>=2*Ti){vf();return}let I=Bi(),V=yh(),Q=document.getElementById("draft-panel"),ye=document.getElementById("draft-title"),W=document.getElementById("draft-message"),ce=document.getElementById("draft-classes"),de=document.getElementById("turn-player"),Ne=dt!=="online"||I===tn;Q&&ye&&ce&&de&&(Q.style.display="flex",ye.textContent=Ne?`${Ln(I)}: Pick a class (${V}/${Ti})`:`${Ln(I)} is picking a class`,W&&(W.textContent=Ne?"Get ready\u2026":""),ce.innerHTML="",de.textContent=`Draft: ${Ln(I)} \u2014 pick a class`),setTimeout(hl,1500)}function Nt(){Nt._pending||(Nt._pending=!0,requestAnimationFrame(()=>{Nt._pending=!1,Mf()}))}function Mf(){let d=Nt._cache||(Nt._cache={}),h=d.turnEl||(d.turnEl=document.getElementById("turn-player")),_=d.menuLabel||(d.menuLabel=document.getElementById("menu-label")),b=d.turnMenu||(d.turnMenu=document.getElementById("turn-menu")),L=d.unitInfo||(d.unitInfo=document.getElementById("unit-info")),P=d.unitNameEl||(d.unitNameEl=document.getElementById("unit-name")),O=d.unitLevelClassEl||(d.unitLevelClassEl=document.getElementById("unit-level-class")),U=d.unitStatsEl||(d.unitStatsEl=document.getElementById("unit-stats")),I=d.unitClassImageEl||(d.unitClassImageEl=document.getElementById("unit-class-image"));if(xn==="playing"&&ae.forEach(W=>{if(W.hp<=0)return;let ce=We.get(W.id);ce&&_e(ce,W.maxHp>0&&W.hp/W.maxHp<Et)}),b.classList.remove("player-1","player-2"),b.classList.add(yn===1?"player-1":"player-2"),b.classList.toggle("level-2",!1),b.classList.toggle("level-3",!1),xn==="playing"&&Ae.length>0){let W=Ae[et],ce=ae.find(de=>de.id===W&&de.hp>0);dt==="online"&&ce&&ce.player!==tn?kt=null:ce&&(kt==null||!ae.find(de=>de.id===kt&&de.hp>0))&&(kt=W)}if(kt!=null){let W=ae.find(ce=>ce.id===kt);if(W&&W.hp>0){L.classList.remove("no-unit");let ce=W.maxHp>0&&W.hp/W.maxHp<.25;b.classList.toggle("low-hp",ce),b.classList.toggle("level-2",W.level>=2&&W.level<3),b.classList.toggle("level-3",W.level>=3),P.textContent=W.name,O.textContent=`Lv.${W.level} ${W.class}`,I.src=Zr[W.class]||"",I.alt=W.name;let de=[["HP",`${W.hp}/${W.maxHp}`,"stat-val-hp"],["MP",`${W.mp}/${W.maxMp}`,""],["STR",Oi(W,"str"),""],["AGI",Oi(W,"agi"),""],["VIT",Oi(W,"vit"),""],["DEX",Oi(W,"dex"),""],["LUK",Oi(W,"luk"),""],["INT",Oi(W,"int"),""]];W.tempDebuff&&W.tempDebuff.poison!=null&&de.push(["Poison",`${W.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),U.innerHTML=de.map(([Ne,we,Be])=>{let vt=Be?` ${Be}`:"";return`<span>${Ne}</span><span class="stat-val${vt}">${we}</span>`}).join("")}else b.classList.remove("low-hp","level-2","level-3"),L.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",O.textContent="",U.textContent="",I.src="",I.alt=""}else b.classList.remove("low-hp","level-2","level-3"),L.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",O.textContent="",U.textContent="",I.src="",I.alt="";if(kt!=null)h.textContent=`${Ln(yn)} \u2014 Unit ${P.innerHTML} active`;else{let W=Ae.length?ae.find(ce=>ce.id===Ae[et]):null;h.textContent=W?`${W.name} (${Ln(yn)})`:Ln(yn)}_.textContent=Ln(yn);let V=d.btnAttack||(d.btnAttack=document.getElementById("btn-attack")),Q=d.btnSkill||(d.btnSkill=document.getElementById("btn-skill")),ye=d.btnEnd||(d.btnEnd=document.getElementById("btn-end"));if(dt==="cvcpu"&&xn==="playing")V.disabled=!0,Q.disabled=!0,ye&&(ye.disabled=!0),h.textContent=`${Ln(yn)} (CPU)`;else if(fn)V.disabled=!0,Q.disabled=!0,h.textContent="Click on map to choose facing direction";else if(xn==="playing"){V.disabled=Gn;let W=Ae.length?Ae[et]:null,ce=W?ae.find(we=>we.id===W&&we.hp>0):null,de=dt!=="cvcpu"&&(dt!=="pvcpu"||yn===1)&&(dt!=="online"||yn===tn),Ne=de&&ce&&!Gn?bl(ce):[];Q.disabled=Gn||!de||Ne.length===0,ye&&(ye.disabled=dt==="online"&&yn!==tn)}if(xn==="playing"){let W=Math.min(Vn+1,ms);h.textContent=(h.textContent||"")+` \u2014 Turn ${W}/${ms}`;let ce=d.turnsLeftEl||(d.turnsLeftEl=document.getElementById("turns-left")),de=d.turnsLeftValueEl||(d.turnsLeftValueEl=document.getElementById("turns-left-value"));if(ce&&de){ce.style.display="";let Ne=Math.max(0,ms-Vn);de.textContent=String(Ne),ce.classList.toggle("turns-left-low",Ne<=10),(Ne===30||Ne===20||Ne===10)&&(Te[Ne]||(ft(Ne),Te[Ne]=!0))}}else{let W=d.turnsLeftEl||(d.turnsLeftEl=document.getElementById("turns-left"));W&&(W.style.display="none")}xn==="playing"&&Ml(yn)&&!jt&&setTimeout(pn,700)}function on(){if(dt==="online"&&yn===tn&&typeof Gs=="function"){let U=Ae[et],I=We.get(U),V=I?.rotation.y;Gs({type:"endTurn",unitId:U,facingAngle:V})}Ot(),yt(),Vt=!1,ni=!1,On=null,fn=!1,Fn=[],yf(),Dn();let d=Ae.length;if(d===0)return;let h=Ae[et],_=ae.find(U=>U.id===h);if(_&&_.tempDebuff&&_.tempDebuff.duration--,_&&_.tempDebuff&&_.tempDebuff.duration<=0&&(_.tempDebuff=void 0),_&&_.tempBuff&&_.tempBuff.duration--,_&&_.tempBuff&&_.tempBuff.duration<=0&&(_.tempBuff=void 0),_&&_.hp>0){let U=Math.ceil(Ce(_,"int")*.15);_.mp=Math.min(_.maxMp,_.mp+U)}if(_&&_.hp>0){let U=_.x,I=_.y;e.type[I][U]===tt.CENTER&&_.level===1&&qt(_);let V=_.player===1?tt.BASE_TOP:tt.BASE_BOTTOM;e.type[I][U]===V&&_.level===2&&qt(_)}if(Vn++,Vn>=ms){jf();return}let b=(et+1)%d,L=0;for(;L<d;){let U=Ae[b],I=ae.find(V=>V.id===U);if(I&&I.hp>0)break;b=(b+1)%d,L++}let P=b===0;et=b;for(let U=0;U<d;U++){let I=Ae[et],V=ae.find(ye=>ye.id===I);if(!V||V.hp<=0)break;let Q=V.tempDebuff&&V.tempDebuff.poison!=null?V.tempDebuff.poison:0;if(Q<=0)break;if(console.log("tempDebuff damage",{debuffKey:"poison",damage:Q}),V.hp=Math.max(0,V.hp-Q),li(V.x,V.y,String(Q),!1,"poison"),Oe(V),V.hp<=0){Un(V),b=(et+1)%d;let ye=0;for(;ye<d;){let W=Ae[b],ce=ae.find(de=>de.id===W);if(ce&&ce.hp>0)break;b=(b+1)%d,ye++}et=b;continue}break}let O=ae.find(U=>U.id===Ae[et]);yn=O?O.player:1,Yt=!1,Gn=!1,kt=Ae[et],P&&(Ae=cl(),et=0),Nt(),ll(),$n()}document.getElementById("btn-attack").addEventListener("click",()=>{if(jt||Gn||xn!=="playing"||Ae.length===0)return;if(dt==="online"){let L=Ae[et],P=ae.find(O=>O.id===L);if(!P||P.player!==tn)return}yt();let d=Ae[et],h=ae.find(L=>L.id===d);if(!h||h.hp<=0)return;let _=h.range!=null?h.range:1;kt=d,Vt=!0;let b=tf(e,h.x,h.y,_);It=new Map,b.forEach((L,P)=>{let O=P%e.w,U=Math.floor(P/e.w);rr(e,h.x,h.y,O,U)&&It.set(P,L)}),Gf(It),Nt()}),document.getElementById("btn-skill").addEventListener("click",d=>{if(d.preventDefault(),d.stopPropagation(),jt||Gn)return;let h=Ae[et],_=h?ae.find(U=>U.id===h&&U.hp>0):null;if(!_||_.player!==yn||dt==="online"&&_.player!==tn)return;let b=document.getElementById("skill-list-overlay"),L=document.getElementById("btn-skill");if(!L)return;if(b&&b.style.display==="block"){b.style.display="none";return}let P=bl(_),O=L.getBoundingClientRect();b||(b=document.createElement("div"),b.id="skill-list-overlay",b.className="skill-list-overlay",b.setAttribute("aria-hidden","true"),document.body.appendChild(b)),b.style.left=`${O.left}px`,b.style.top=`${O.top-4}px`,b.style.transform="translateY(-100%)",b.style.right="auto",b.style.bottom="auto",b.style.display="none",P.length===0?b.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(b.innerHTML=P.map((U,I)=>`<button type="button" class="skill-option" data-skill-index="${I}" ${U.disabled?"disabled":""}>
          <span class="skill-name">${U.name}</span> <span class="skill-meta">${U.cost} MP \xB7 Lv.${U.level}</span><br/>
          <span class="skill-meta">${U.description}</span>
        </button>`).join(""),b.querySelectorAll(".skill-option").forEach((U,I)=>{U.addEventListener("click",V=>{V.preventDefault(),V.stopPropagation();let Q=P[I];if(On=Q,b.style.display="none",b.setAttribute("aria-hidden","true"),Q.target==="self"){if(_.mp<Q.cost)return;_.mp-=Q.cost,Gn=!0;let ye={showFloatingCombatText:li,handleUnitDeath:Un,updateUnitSlashVisibility:Oe,updateTurnUI:Nt,units:ae,reanimateDeadUnit:Na};dt==="online"&&_.player===tn&&typeof ln=="function"&&(ln({type:"requestRender"}),Gs({type:"skill",unitId:_.id,targetId:_.id,effectKey:Q.effectKey})),Ga(_,_,Q,ye,()=>{Dn(),ni=!1,On=null,pr=new Set,Yt?on():Nt()}),Nt();return}if(Q.target==="ally"&&ra(_,Q,ae).filter(ce=>ce.targetUnit&&ce.targetUnit.id!==_.id).length===0&&_.mp>=Q.cost){_.mp-=Q.cost,Gn=!0;let ce={showFloatingCombatText:li,handleUnitDeath:Un,updateUnitSlashVisibility:Oe,updateTurnUI:Nt,units:ae,reanimateDeadUnit:Na};dt==="online"&&_.player===tn&&typeof ln=="function"&&(ln({type:"requestRender"}),Gs({type:"skill",unitId:_.id,targetId:_.id,effectKey:Q.effectKey})),Ga(_,_,Q,ce,()=>{Dn(),ni=!1,On=null,pr=new Set,Yt?on():Nt()}),Nt();return}ni=!0,Vt=!1,zf(_,Q),Nt()})})),requestAnimationFrame(()=>{b.style.display="block",b.style.visibility="visible",b.setAttribute("aria-hidden","false")})}),document.addEventListener("click",d=>{let h=document.getElementById("skill-list-overlay"),_=document.getElementById("btn-skill"),b=document.querySelector(".skill-wrap");!h||h.style.display!=="block"||b&&b.contains(d.target)||h.contains(d.target)||(h.style.display="none",h.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(jt||fn||xn!=="playing"||Ae.length===0)return;let d=Ae[et],h=ae.find(b=>b.id===d);if(!h||h.hp<=0||dt==="online"&&h.player!==tn)return;fn=!0,kt=null,Vt=!1,It=new Map,Dn(),gf(),ll();let _=document.getElementById("turn-player");_.textContent="Click on map to choose facing direction",Nt()}),u.set(0,8,0),a.position.copy(u).add(c),a.lookAt(u);let or=document.getElementById("mode-select-overlay"),xh=document.getElementById("mode-carousel-track"),_h=document.getElementById("mode-carousel-prev"),vh=document.getElementById("mode-carousel-next"),Oa=document.getElementById("mode-carousel-dots"),ss=document.getElementById("mode-play-btn"),Mh=document.getElementById("mode-settings-pvp"),bh=document.getElementById("mode-settings-pvp-map"),Sh=document.getElementById("mode-settings-pvp-num-units"),Eh=document.getElementById("mode-settings-pvp-none"),Th=document.getElementById("mode-settings-options"),Fa=document.getElementById("pvp-map-mode"),ta=document.getElementById("pvp-num-units"),na=document.getElementById("ai-draft-preference"),bf=document.getElementById("cvcpu-num-games"),Ba=document.getElementById("cvcpu-num-units"),wh=document.getElementById("cvcpu-grid-w"),Ah=document.getElementById("cvcpu-grid-h"),Rh=document.getElementById("cvcpu-center-plaza"),Ch=document.getElementById("cvcpu-max-turns"),lr=document.getElementById("move-speed"),cr=document.getElementById("draft-picks-per-player"),Hs=document.getElementById("online-connect-overlay"),Ci=document.getElementById("online-player-name"),zs=document.getElementById("online-create-section"),hr=document.getElementById("online-join-section"),ur=document.getElementById("online-offer-text"),ka=document.getElementById("online-reply-text"),Ha=document.getElementById("online-paste-offer"),ia=document.getElementById("online-join-answer-section"),dr=document.getElementById("online-answer-text"),fl=document.getElementById("online-error"),Ph=document.getElementById("online-waiting-msg"),Zi=gs?["pvp","pvcpu","cvcpu","online","story"]:["pvp","pvcpu","online","story"],pl=Zi.length-1,Bn=0;function ml(){return Bn===pl}function Sf(){return Zi[Bn]==="online"}function za(d){Bn=Math.max(0,Math.min(d,pl)),xh&&(xh.style.transform=`translateX(-${Bn*100}%)`),Oa&&Oa.querySelectorAll(".mode-dot").forEach((_,b)=>{_.classList.toggle("active",b===Bn),_.setAttribute("aria-selected",b===Bn)}),Mh&&(Mh.style.display=Bn===0||Bn===1||ml()||Zi[Bn]==="online"?"":"none"),bh&&(bh.style.display=Bn===0||Bn===1||Zi[Bn]==="online"?"":"none"),Sh&&(Sh.style.display=Zi[Bn]==="pvp"?"":"none"),Zi[Bn]==="pvp"&&ta&&(ta.style.width="11em",ta.value=String(Math.max(1,Math.min(20,Ti)))),Eh&&(Eh.style.display=ml()?"":"none"),Th&&(Th.style.display=gs&&Zi[Bn]==="cvcpu"?"":"none"),gs&&Zi[Bn]==="cvcpu"&&Ba&&(Ba.value=String(Math.max(1,Math.min(20,Ti))));let h=ss?.querySelector(".mode-play-text");ss&&h&&(ml()?(ss.disabled=!0,h.textContent="Coming Soon"):(ss.disabled=!1,h.textContent=Sf()?"Connect":"Play game"))}if(Oa)for(let d=0;d<=pl;d++){let h=document.createElement("button");h.type="button",h.className="mode-dot"+(d===0?" active":""),h.setAttribute("role","tab"),h.setAttribute("aria-label",`Mode ${d+1}`),h.setAttribute("aria-selected",d===0),h.addEventListener("click",()=>za(d)),Oa.appendChild(h)}if(_h&&_h.addEventListener("click",()=>za(Bn-1)),vh&&vh.addEventListener("click",()=>za(Bn+1)),or&&!gs){let d=or.querySelector('.mode-slide[data-mode="cvcpu"]');d&&d.parentNode&&d.parentNode.removeChild(d)}if(za(0),lr&&(lr.value=String(Fs),lr.addEventListener("input",()=>{let d=parseInt(lr.value,10);!Number.isNaN(d)&&d>=0&&(Fs=d)}),lr.addEventListener("change",()=>{let d=parseInt(lr.value,10);!Number.isNaN(d)&&d>=0&&(Fs=d)})),cr&&(cr.value=String(Ti),cr.addEventListener("input",()=>{let d=parseInt(cr.value,10);!Number.isNaN(d)&&d>=1&&(Ti=d)}),cr.addEventListener("change",()=>{let d=parseInt(cr.value,10);!Number.isNaN(d)&&d>=1&&(Ti=d)})),na&&(P_.forEach(d=>{let h=document.createElement("option");h.value=d.value,h.textContent=d.label,na.appendChild(h)}),na.value=Fe,na.addEventListener("change",()=>{Fe=na.value})),Hs){let d=document.getElementById("online-btn-create"),h=document.getElementById("online-btn-join"),_=document.getElementById("online-btn-copy-offer"),b=document.getElementById("online-btn-connect"),L=document.getElementById("online-btn-join-connect"),P=document.getElementById("online-btn-copy-answer");d&&d.addEventListener("click",async()=>{let O=Ci&&Ci.value.trim()||"Player 1";if(!O){oi("Enter your name");return}oi("");try{ys=Fa&&Fa.value||"long",ns=(Date.now()^Math.random()*4294967295)>>>0,gt(ys,ns);let U=await wf(O,ns,ys);ur&&(ur.value=U),zs&&(zs.style.display="flex",zs.style.alignItems="flex-start"),hr&&(hr.style.display="none")}catch(U){oi(U.message||"Failed to create game")}}),_&&ur&&_.addEventListener("click",()=>{ur.select(),document.execCommand("copy")}),b&&ka&&b.addEventListener("click",async()=>{let O=ka.value.trim();if(!O){oi("Paste your friend's reply");return}oi("");try{await Rf(O)}catch(U){oi(U.message||"Failed to connect")}}),h&&h.addEventListener("click",()=>{if(!(Ci&&Ci.value.trim()||"Player 2")){oi("Enter your name");return}oi(""),zs&&(zs.style.display="none"),hr&&(hr.style.display="flex")}),L&&Ha&&L.addEventListener("click",async()=>{let O=Ha.value.trim();if(!O){oi("Paste the host's code");return}oi("");try{tn=2,fi[2]=Ci&&Ci.value.trim()||"Player 2";let U=await Af(fi[2],O);dr&&(dr.value=U),ia&&(ia.style.display="flex",ia.style.alignItems="flex-start")}catch(U){oi(U.message||"Failed to join")}}),P&&dr&&P.addEventListener("click",()=>{dr.select(),document.execCommand("copy")})}let xs=new Audio;xs.loop=!0,xs.volume=.3,xs.preload="auto";let gl=window.location.href.replace(/[^/]*$/,""),Ih=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:gl+(gl.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");xs.src=Ih,xs.addEventListener("error",()=>{let d=gl+"assets/music/tavern.mp3";d!==Ih&&(xs.src=d)});function Ef(){xs.paused&&xs.play().catch(()=>{})}function oi(d){fl&&(fl.textContent=d||"",fl.style.display=d?"block":"none")}function Lh(){Hs&&(Hs.style.display="none",Hs.setAttribute("aria-hidden","true"))}function Tf(){oi(""),tn=1,fi={1:"",2:""},Hs&&(Hs.style.display="flex",Hs.setAttribute("aria-hidden","false")),Ci&&(Ci.value=""),zs&&(zs.style.display="none"),hr&&(hr.style.display="none"),ur&&(ur.value=""),ka&&(ka.value=""),Ha&&(Ha.value=""),dr&&(dr.value=""),ia&&(ia.style.display="none"),Ph&&(Ph.style.display="block")}function Dh(d){return new Promise(h=>{if(d.iceGatheringState==="complete"){h();return}let _=()=>{d.iceGatheringState==="complete"&&(d.removeEventListener("icegatheringstatechange",_),h())};d.addEventListener("icegatheringstatechange",_)})}async function wf(d,h,_){wi&&(wi.close(),wi=null,Yi=null);let b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),L=[];b.addEventListener("icecandidate",U=>{U.candidate&&L.push(U.candidate)});let P=b.createDataChannel("game-sync",{ordered:!0});Yi=P,wi=b,P.addEventListener("open",()=>Nh(P,!0));let O=await b.createOffer();return await b.setLocalDescription(O),await Dh(b),JSON.stringify({type:"offer",sdp:b.localDescription.sdp,candidates:L,playerName:d||"Player 1"})}async function Af(d,h){let _=JSON.parse(h),b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),L=[];if(b.addEventListener("icecandidate",O=>{O.candidate&&L.push(O.candidate)}),b.addEventListener("datachannel",O=>{Yi=O.channel,wi=b,Nh(Yi,!1)}),await b.setRemoteDescription(new RTCSessionDescription({type:"offer",sdp:_.sdp})),_.candidates&&_.candidates.length)for(let O of _.candidates)await b.addIceCandidate(new RTCIceCandidate(O));let P=await b.createAnswer();return await b.setLocalDescription(P),await Dh(b),JSON.stringify({type:"answer",sdp:b.localDescription.sdp,candidates:L,playerName:d||"Player 2"})}async function Rf(d){let h=JSON.parse(d);if(!wi){oi("Create a game first, then paste your friend's reply.");return}let _=wi.signalingState;if(_!=="stable"){if(_!=="have-local-offer"){oi("Wrong step: create a game first and send the code, then paste the reply.");return}if(await wi.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:h.sdp})),h.candidates&&h.candidates.length)for(let b of h.candidates)await wi.addIceCandidate(new RTCIceCandidate(b))}}let Uh=0,Vs=0,yl=[],xl=!1,_l=[];function fr(){Vs=Math.max(0,Vs-1),Vs===0&&vl()}function vl(){for(;Vs===0&&yl.length>0;){let d=yl.shift();if(d.type==="move"){If(d.unitId,d.toGx,d.toGy);return}if(d.type==="attack"){Lf(d.unitId,d.targetId,d.hit,d.damage);return}if(d.type==="skill"){Df(d);return}if(d.type==="endTurn"){if(d.unitId!=null&&d.facingAngle!=null){let h=We.get(d.unitId);h&&(h.rotation.y=d.facingAngle)}on();return}if(d.type==="unitDeath"){let h=ae.find(b=>b.id===d.unitId),_=d.killerId!=null?ae.find(b=>b.id===d.killerId):null;h&&(h.hp=0,Un(h,_,{skipSync:!0})),vl();return}}}function Nh(d,h){if(d.binaryType="arraybuffer",d.addEventListener("message",P=>{try{let O=JSON.parse(P.data);if(O.seq!=null&&O.seq<=Uh)return;O.seq!=null&&(Uh=O.seq),Cf(O,h)}catch(O){console.warn("Online message parse error",O)}}),d.addEventListener("close",()=>{dt==="online"&&oi("Connection lost.")}),!h){let P=fi[2]||Ci&&Ci.value.trim()||"Player 2";ln({type:"joined",playerName:P});return}let _=Ci&&Ci.value.trim()||"Player 1",b=ns??(Date.now()^Math.random()*4294967295)>>>0,L=ys||"long";fi[1]=_,ln({type:"start",mapSeed:b,mapMode:L,playerName:_}),Lh(),ea()}function Cf(d,h){if(d.type==="start"){fi[1]=d.playerName||"Player 1",ns=d.mapSeed,ys=d.mapMode||"long",gt(ys,ns),Lh(),ea();return}if(d.type==="joined"){fi[2]=d.playerName||"Player 2";return}if(xn==="draft"){d.type==="draftPick"?ul(d.classKey):d.type==="draftPlace"&&dl(d.gx,d.gy);return}xn==="playing"&&(d.type==="move"||d.type==="attack"||d.type==="skill"||d.type==="endTurn"||d.type==="unitDeath"?(yl.push(d),vl()):d.type==="requestRender"&&Ot())}function ln(d){if(Yi&&Yi.readyState==="open"){let h=(typeof ln.seq<"u"?ln.seq:0)+1;ln.seq=h,Yi.send(JSON.stringify({...d,seq:h}))}}function Gs(d){if(dt==="online"&&xl&&(d.type==="attack"||d.type==="skill"||d.type==="endTurn")){_l.push(d);return}ln(d)}function Pf(){for(;_l.length>0;){let d=_l.shift();ln(d)}}function If(d,h,_){let b=ae.find(L=>L.id===d);!b||b.hp<=0||(Vs++,Ht(b,h,_,()=>{Ot(),Nt(),fr()}))}function Lf(d,h,_,b){let L=ae.find(O=>O.id===d),P=ae.find(O=>O.id===h);!L||!P||P.hp<=0||(Vs++,Va(L,P,_,b,()=>{Ot(),Nt(),fr()}))}function Df(d){let h=ae.find(b=>b.id===d.unitId),_=d.targetId!=null?ae.find(b=>b.id===d.targetId):null;if(h)if(Vs++,d.effectKey&&h.mp>=(Jr[h.class]||[]).find(b=>b.effectKey===d.effectKey)?.cost){let b=(Jr[h.class]||[]).find(L=>L.effectKey===d.effectKey);if(b){h.mp-=b.cost;let L={showFloatingCombatText:li,handleUnitDeath:Un,updateUnitSlashVisibility:Oe,updateTurnUI:Nt,tryCollectPowerup:Ze,world:e,units:ae,reanimateDeadUnit:Na,updateUnitPosition(U){let I=We.get(U.id);I&&I.position.copy(Je(U.x,U.y))},animateKnockback(U,I,V,Q,ye,W){let ce=We.get(U.id);if(!ce){W&&W();return}let de=Je(I,V).clone(),Ne=Je(Q,ye).clone(),we=performance.now(),Be=0;function vt(je){Be++,Be%2===0&&Ot();let Gt=Math.min(1,(je-we)/Fs),bn=nn=>nn*nn*(3-2*nn);ce.position.lerpVectors(de,Ne,bn(Gt)),Gt<1?requestAnimationFrame(vt):(ce.position.copy(Ne),W&&W())}requestAnimationFrame(vt)}};Da(d.effectKey,h,_,L),_&&Oe(_);let O=b.target==="self"||b.target==="ally"?b.target==="self"?h:_:null;O?ut(O,()=>{Ot(),Nt(),fr()}):(Ot(),setTimeout(()=>{Ot(),Nt(),fr()},400))}else Ot(),setTimeout(()=>{Ot(),Nt(),fr()},400)}else Ot(),setTimeout(()=>{Ot(),Nt(),fr()},400)}function Uf(){if(Zi[Bn]==="story")return;let d=Zi[Bn];if(Ef(),dt=d,d==="online"){or&&or.classList.add("hidden"),Tf();return}if(d==="pvp"||d==="pvcpu"){let h=Fa&&Fa.value||"long";gt(h),d==="pvp"&&ta&&(Ti=Math.max(1,Math.min(20,parseInt(ta.value,10)||7)))}else d==="cvcpu"&&(gs&&wh&&Ah&&Rh&&(hh=Math.max(5,Math.min(50,parseInt(wh.value,10)||21)),uh=Math.max(5,Math.min(50,parseInt(Ah.value,10)||11)),dh=Math.max(.1,Math.min(.9,parseFloat(Rh.value)||.29))),gs&&Ch&&(ms=Math.max(10,Math.min(999,parseInt(Ch.value,10)||200))),gt("long"));d==="cvcpu"&&(w=Math.max(1,parseInt(bf?.value,10)||1),X=0,Ba&&(Ti=Math.max(1,Math.min(20,parseInt(Ba.value,10)||7)))),or&&or.classList.add("hidden"),ea()}ss?ss.addEventListener("click",d=>{if(ss.disabled)return;let h=ss.querySelector(".mode-play-ripple");if(h){let _=ss.getBoundingClientRect();h.style.left=d.clientX-_.left+"px",h.style.top=d.clientY-_.top+"px",h.style.width=h.style.height="20px",h.style.marginLeft=h.style.marginTop="-10px",h.classList.remove("ripple"),h.offsetHeight,h.classList.add("ripple"),setTimeout(()=>h.classList.remove("ripple"),500)}Uf()}):ea();function Ml(d){return dt==="pvcpu"&&d===2||dt==="cvcpu"}function Nf(){let d=Fi.filter(W=>Ge.has(W));if(d.length===0)return null;let h=Fe||"balanced";if(h==="random")return d[Math.floor(Math.random()*d.length)];if(h==="custom")return rf.filter(ce=>Ge.has(ce))[0]??d[0]??null;let _=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function b(W){let ce=Kt[W];if(!ce)return 1/0;let de=_.map(we=>ce[we]??0),Ne=de.reduce((we,Be)=>we+Be,0)/de.length;return de.reduce((we,Be)=>we+(Be-Ne)**2,0)/de.length}if(h==="tanky")return[...d].sort((ce,de)=>{let Ne=Kt[ce]?.hp??0,we=Kt[de]?.hp??0;return we!==Ne?we-Ne:(Kt[de]?.vit??0)-(Kt[ce]?.vit??0)})[0]??null;if(h==="aggressive")return[...d].sort((ce,de)=>{let Ne=Kt[ce]?.str??0,we=Kt[de]?.str??0;return we!==Ne?we-Ne:(Kt[de]?.agi??0)-(Kt[ce]?.agi??0)})[0]??null;if(h==="scout")return[...d].sort((ce,de)=>{let Ne=Kt[ce]?.agi??0,we=Kt[de]?.agi??0;return we!==Ne?we-Ne:(Kt[de]?.dex??0)-(Kt[ce]?.dex??0)})[0]??null;if(h==="ranged")return[...d].sort((ce,de)=>{let Ne=Kt[ce]?.range??0,we=Kt[de]?.range??0;return we!==Ne?we-Ne:(Kt[de]?.dex??0)-(Kt[ce]?.dex??0)})[0]??null;if(h==="caster")return[...d].sort((ce,de)=>{let Ne=Kt[ce]?.int??0,we=Kt[de]?.int??0;return we!==Ne?we-Ne:(Kt[de]?.mp??0)-(Kt[ce]?.mp??0)})[0]??null;let L=Bi(),O=I_(Ti),U=ae.filter(W=>W.player===L).map(W=>W.class),I={};for(let W of Object.keys(sl))I[W]=0;for(let W of U)for(let ce of Object.keys(sl))if(sl[ce].includes(W)){I[ce]++;break}let V=W=>Math.max(0,(O[W]??0)-(I[W]??0)),Q=W=>{for(let[ce,de]of Object.entries(sl))if(de.includes(W))return ce;return null};return[...d].sort((W,ce)=>{let de=Q(W),Ne=Q(ce),we=de!=null?V(de):0,Be=Ne!=null?V(Ne):0;if(Be!==we)return Be-we;let vt=Kt[W]?.hp??0,je=Kt[ce]?.hp??0;return je!==vt?je-vt:b(W)-b(ce)})[0]??null}function sa(){if(xn!=="draft"||!Ml(Bi()))return;if(!Ye){let _=Nf();_&&ul(_),setTimeout(sa,500);return}let d=Array.from(ot).map(_=>({gx:_%e.w,gy:Math.floor(_/e.w)})),h=ef(e,d);if(h.length>0){let{gx:_,gy:b}=h[0];dl(_,b)}}function Oh(){let d=[];for(let h=0;h<e.h;h++)for(let _=0;_<e.w;_++)e.type[h][_]===tt.CENTER&&d.push({gx:_,gy:h});return d}function Of(d){let h=[],_=d===1?tt.BASE_TOP:tt.BASE_BOTTOM;for(let b=0;b<e.h;b++)for(let L=0;L<e.w;L++)e.type[b][L]===_&&h.push({gx:L,gy:b});return h}function _i(d,h,_,b){return Math.abs(d-_)+Math.abs(h-b)}function Ff(d){let h=d.range!=null?d.range:1,_=[];for(let b of ae){if(b.hp<=0||b.player===d.player)continue;let L=_i(d.x,d.y,b.x,b.y);L<=h&&L>0&&rr(e,d.x,d.y,b.x,b.y)&&_.push({target:b,dist:L})}return _}function Bf(d,h,_){let b=_??ae.filter(P=>P.hp>0&&P.player===d.player&&P.id!==d.id),L=h??ae.filter(P=>P.hp>0&&P.player!==d.player);for(let P of b)for(let O of L){let U=O.range!=null?O.range:1,I=_i(O.x,O.y,P.x,P.y);if(I<=U&&I>0&&rr(e,O.x,O.y,P.x,P.y))return!0}return!1}function Ht(d,h,_,b){let L=d.x,P=d.y,O=ks(e,d.x,d.y,h,_,ae,d);if(!O||O.length<=1){b&&b();return}kt=null,Dn(),jt=!0,g=!0,Ri(d.id),Ot();let U=We.get(d.id),I=1;function V(){if(I>=O.length){d.x=O[O.length-1].x,d.y=O[O.length-1].y,Ze(d),jt=!1,Ke(U),Ri(),It=new Map,Yt=!0,dt==="online"&&d.player===tn&&typeof ln=="function"&&ln({type:"move",unitId:d.id,toGx:d.x,toGy:d.y}),b&&b();return}let Q=O[I-1],ye=O[I],W=Je(Q.x,Q.y).clone(),ce=Je(ye.x,ye.y).clone(),de=ce.x-W.x,Ne=ce.z-W.z;de*de+Ne*Ne>1e-6&&(U.rotation.y=Math.atan2(de,Ne));let we=performance.now(),Be=0;function vt(je){Be++,Be%2===0&&Ot();let Gt=Math.min(1,(je-we)/Fs),nn=($t=>$t*$t*(3-2*$t))(Gt);if(U.position.lerpVectors(W,ce,nn),Se(U,nn),g){let $t=a.position.distanceTo(u),mn=$t<.1?o:$t;m.copy(a.position).sub(u).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),u.lerp(U.position,l),a.position.copy(u).add(m.clone().multiplyScalar(mn)),a.lookAt(u)}Gt<1?requestAnimationFrame(vt):(I++,V())}requestAnimationFrame(vt)}V()}function Va(d,h,_,b,L){let P=_!==void 0,O,U=0;if(P)O=_,U=b!=null&&b>0?b:0;else{dt==="online"&&d.player===tn&&typeof ln=="function"&&ln({type:"requestRender"});let Dt=Ce(h,"agi")*.7+Ce(h,"luk")*.3;if(O=Math.random()*Math.max(.001,Dt)<=Ce(d,"dex"),O){let Ft=Ce(d,"str")*.7+Ce(d,"dex")*.2+Ce(d,"int")*.1-(Ce(h,"vit")*.3+Ce(h,"luk")*.2);U=Math.max(1,Math.floor(Ft))}}Gn=!0,kt=null,Vt=!1,Dn(),!P&&dt==="online"&&d.player===tn&&typeof Gs=="function"&&Gs({type:"attack",unitId:d.id,targetId:h.id,hit:O,damage:O?U:void 0}),P||console.log("[ATTACK]",`${d.name} (${d.class}, P${d.player})`,"\u2192",`${h.name} (${h.class}, P${h.player})`,O?`${U} dmg`:"MISS",`| ${h.name} HP ${h.hp} \u2192 ${Math.max(0,h.hp-U)}/${h.maxHp}`);let I=We.get(d.id);if(!I||!I.userData.rightArm){jt=!0,O?(h.hp=Math.max(0,h.hp-U),li(h.x,h.y,String(U),!1),Oe(h),h.hp<=0&&Un(h,d)):li(h.x,h.y,"MISS",!0),setTimeout(()=>{jt=!1,L&&L(),P||(Yt?on():Nt())},400);return}let V=Je(d.x,d.y).clone(),Q=Je(h.x,h.y).clone(),ye=V.clone().lerp(Q,.35),W=Q.x-V.x,ce=Q.z-V.z;if(W*W+ce*ce>1e-6&&(I.rotation.y=Math.atan2(W,ce)),(d.range!=null?d.range:1)>2){let Lt=function(ie){ct++,ct%2===0&&Ot();let ge=ie-Pi,pe=Math.min(1,ge/un);if(Ft.position.lerpVectors(vi,cn,pe),Xt){let te=Math.sin(pe*Math.PI)*1.1;Xt.rotation.y=-te}if(!En&&pe>=1&&(En=!0,n.remove(Ft),Dt.dispose(),sn.dispose(),O?(h.hp=Math.max(0,h.hp-U),li(h.x,h.y,String(U),!1),h.hp<=0&&(Wn=!0),We.get(h.id)?Tn=ie:Wn&&(Un(h,d),Wn=!1),Oe(h)):li(h.x,h.y,"MISS",!0)),Tn!=null&&O){let te=We.get(h.id);if(te){let he=Math.min(1,(ie-Tn)/Bt),Me=1-he;Ms.copy(Mt).multiplyScalar(Qt*Me),te.position.copy(lt).add(Ms),he>=1&&(te.position.copy(lt),Tn=null,Wn&&(Un(h,d),Wn=!1))}else Tn=null,Wn&&(Un(h,d),Wn=!1)}if(pe<1)requestAnimationFrame(Lt);else{Xt&&(Xt.rotation.y=0);let te=Tn==null;te&&Wn&&(Un(h,d),Wn=!1),te?(Kn.shadowMap.enabled=!0,jt=!1,L&&setTimeout(()=>L(),0),P||setTimeout(Yt?()=>on():()=>Nt(),400)):requestAnimationFrame(Lt)}},Dt=new Os(.035,.035,.4,6),sn=new Cn({color:16763972}),Ft=new $e(Dt,sn);Ft.position.copy(V),Ft.position.y+=.6;let Rt=Q.clone().sub(V).normalize();Ft.quaternion.setFromUnitVectors(new k(0,1,0),Rt),n.add(Ft),jt=!0;let Xt=I.userData.rightArm,lt=Je(h.x,h.y).clone(),Mt=Q.clone().sub(V).normalize(),Qt=.4,En=!1,Tn=null,Wn=!1,vi=Ft.position.clone(),cn=Q.clone();cn.y+=.6;let Pi=performance.now(),ct=0;Kn.shadowMap.enabled=!1,requestAnimationFrame(Lt);return}let we=!1,Be=performance.now(),vt=I.userData.rightArm,je=null,Gt=!1,bn=Je(h.x,h.y).clone(),nn=Q.clone().sub(V).normalize(),$t=.4,mn=0;function Sn(Dt){mn++,mn%2===0&&Ot();let sn=Dt-Be,Ft=Math.min(1,sn/Ve),Rt=Ft<=.4?Ft/.4:1,Xt=Ft>.4?(Ft-.4)/.6:0;Ft<=.4?I.position.lerpVectors(V,ye,Rt):I.position.lerpVectors(ye,V,Xt);let lt=Ft<=.35?Ft/.35:Ft<=.7?(.7-Ft)/.35:0;if(vt.rotation.y=-lt*1.1,!we&&Ft>=_t&&(we=!0,O?(h.hp=Math.max(0,h.hp-U),li(h.x,h.y,String(U),!1),h.hp<=0&&(Gt=!0),Oe(h),We.get(h.id)?je=Dt:Gt&&(Un(h,d),Gt=!1)):li(h.x,h.y,"MISS",!0)),je!=null&&O){let Mt=We.get(h.id);if(Mt){let Qt=Math.min(1,(Dt-je)/Bt),En=1-Qt;Ms.copy(nn).multiplyScalar($t*En),Mt.position.copy(bn).add(Ms),Qt>=1&&(Mt.position.copy(bn),je=null,Gt&&(Un(h,d),Gt=!1))}else je=null,Gt&&(Un(h,d),Gt=!1)}if(Ft<1)requestAnimationFrame(Sn);else{I.position.copy(V),vt.rotation.y=0;let Mt=je==null;Mt&&Gt&&(Un(h,d),Gt=!1),Mt?(Kn.shadowMap.enabled=!0,jt=!1,L&&setTimeout(()=>L(),0),P||setTimeout(Yt?()=>on():()=>Nt(),400)):requestAnimationFrame(Sn)}}jt=!0,Kn.shadowMap.enabled=!1,requestAnimationFrame(Sn)}function kf(d,h){let _=Je(d,h);_.y+=.4;let b=new es(.1,12,12),L=new Cn({color:8930559,transparent:!0,opacity:.9}),P=new $e(b,L);P.position.copy(_),n.add(P);let O=performance.now(),U=0;function I(V){U++,U%2===0&&Ot();let Q=V-O,ye=Math.min(1,Q/At),W=ye*(2-ye);P.scale.setScalar(W*4.5),L.opacity=.9*(1-ye),ye<1?requestAnimationFrame(I):(n.remove(P),b.dispose(),L.dispose())}requestAnimationFrame(I)}function Ga(d,h,_,b,L){if(_.target==="enemy"&&h==null){setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),L&&L()},400);return}let O=(_.range??0)>2&&h!=null&&(h.x!==d.x||h.y!==d.y),U=!O&&h!=null&&(h.x!==d.x||h.y!==d.y);if(!O&&!U){jt=!0,Da(_.effectKey,d,h,b);let Rt=_.target==="self"||_.target==="ally",Xt=_.target==="self"?d:h;Rt&&Xt?ut(Xt,()=>{setTimeout(()=>{jt=!1,b.updateTurnUI&&b.updateTurnUI(),L&&L()},400)}):setTimeout(()=>{jt=!1,b.updateTurnUI&&b.updateTurnUI(),L&&L()},400);return}if(U){let te=function(he){pe++,pe%2===0&&Ot();let Me=he-ge,me=Math.min(1,Me/Ve),Re=me<=.4?me/.4:1,Tt=me>.4?(me-.4)/.6:0;me<=.4?Rt.position.lerpVectors(Xt,Mt,Re):Rt.position.lerpVectors(Mt,Xt,Tt);let bt=me<=.35?me/.35:me<=.7?(.7-me)/.35:0;if(cn.rotation.y=-bt*1.1,!Pi&&me>=_t&&(Pi=!0,Da(_.effectKey,d,h,ie),h.hp<=0&&(Lt=!0),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(h),We.get(h.id)&&_.target!=="ally"?ct=he:Lt&&(Un(h,d),Lt=!1)),ct!=null){let vn=We.get(h.id);if(vn){let St=Math.min(1,(he-ct)/Bt),Pn=1-St;Ms.copy(Wn).multiplyScalar(vi*Pn),vn.position.copy(Tn).add(Ms),St>=1&&(vn.position.copy(Tn),ct=null,Lt&&(Un(h,d),Lt=!1))}else ct=null,Lt&&(Un(h,d),Lt=!1)}me<1?requestAnimationFrame(te):(Rt.position.copy(Xt),cn.rotation.y=0,ct==null&&Lt&&(Un(h,d),Lt=!1),ct==null?(Kn.shadowMap.enabled=!0,jt=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),L&&L()},400)):requestAnimationFrame(te))},Rt=We.get(d.id);if(!Rt||!Rt.userData.rightArm){jt=!0,Da(_.effectKey,d,h,b),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(h),setTimeout(()=>{jt=!1,b.updateTurnUI&&b.updateTurnUI(),L&&L()},400);return}jt=!0;let Xt=Je(d.x,d.y).clone(),lt=Je(h.x,h.y).clone(),Mt=Xt.clone().lerp(lt,.35),Qt=lt.x-Xt.x,En=lt.z-Xt.z;Qt*Qt+En*En>1e-6&&(Rt.rotation.y=Math.atan2(Qt,En));let Tn=Je(h.x,h.y).clone(),Wn=lt.clone().sub(Xt).normalize(),vi=.4,cn=Rt.userData.rightArm,Pi=!1,ct=null,Lt=!1,ie={...b,handleUnitDeath:void 0},ge=performance.now(),pe=0;Kn.shadowMap.enabled=!1,requestAnimationFrame(te);return}let I=Je(d.x,d.y).clone(),V=Je(h.x,h.y).clone(),Q=new Os(.035,.035,.4,6),ye=new Cn({color:16763972}),W=new $e(Q,ye);W.position.copy(I),W.position.y+=.6;let ce=V.clone().sub(I).normalize();W.quaternion.setFromUnitVectors(new k(0,1,0),ce),n.add(W),jt=!0;let de=We.get(d.id),Ne=de&&de.userData.rightArm?de.userData.rightArm:null;if(de){let Rt=V.x-I.x,Xt=V.z-I.z;Rt*Rt+Xt*Xt>1e-6&&(de.rotation.y=Math.atan2(Rt,Xt))}let we=W.position.clone(),Be=V.clone();Be.y+=.6;let vt=performance.now(),je=Je(h.x,h.y).clone(),Gt=V.clone().sub(I).normalize(),bn=.4,nn=!1,$t=null,mn=0,Sn=null,Dt=_.effectKey==="powerShot"?{...b,animateKnockback(Rt,Xt,lt,Mt,Qt,En){Sn={targ:Rt,fromGx:Xt,fromGy:lt,toGx:Mt,toGy:Qt,knockbackOnDone:En}}}:b;function sn(){Kn.shadowMap.enabled=!0,jt=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),L&&L()},400)}function Ft(Rt){mn++,mn%2===0&&Ot();let Xt=Rt-vt,lt=Math.min(1,Xt/un);if(W.position.lerpVectors(we,Be,lt),Ne){let Mt=Math.sin(lt*Math.PI)*1.1;Ne.rotation.y=-Mt}if(!nn&&lt>=1&&(nn=!0,n.remove(W),Q.dispose(),ye.dispose(),_.type==="spell"&&kf(h.x,h.y),Da(_.effectKey,d,h,Dt),We.get(h.id)&&h.hp>0&&($t=Rt),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(h)),$t!=null){let Mt=We.get(h.id);if(Mt){let Qt=Math.min(1,(Rt-$t)/Bt),En=1-Qt;if(Ms.copy(Gt).multiplyScalar(bn*En),Mt.position.copy(je).add(Ms),Qt>=1&&(Mt.position.copy(je),$t=null,Sn)){let{targ:Tn,fromGx:Wn,fromGy:vi,toGx:cn,toGy:Pi,knockbackOnDone:ct}=Sn;Sn=null,b.animateKnockback?b.animateKnockback(Tn,Wn,vi,cn,Pi,()=>{ct&&ct(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(Tn),sn()}):sn();return}}else if($t=null,Sn){Sn=null,sn();return}}if(lt<1)requestAnimationFrame(Ft);else if(Ne&&(Ne.rotation.y=0),$t==null)if(Sn){let{targ:Mt,fromGx:Qt,fromGy:En,toGx:Tn,toGy:Wn,knockbackOnDone:vi}=Sn;Sn=null,b.animateKnockback?b.animateKnockback(Mt,Qt,En,Tn,Wn,()=>{vi&&vi(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(Mt),sn()}):sn()}else sn();else requestAnimationFrame(Ft)}Kn.shadowMap.enabled=!1,requestAnimationFrame(Ft)}function pn(){if(xn!=="playing"||!Ml(yn)||jt||Ae.length===0)return;let d=Ae[et],h=ae.find(ie=>ie.id===d);if(!h||h.hp<=0)return;let _=Ce(h,"agi"),b=rl(e,h.x,h.y,_,ae,h),L=new Set(ae.filter(ie=>ie.hp>0&&ie.id!==h.id).map(ie=>ie.y*e.w+ie.x)),P=[];b.forEach((ie,ge)=>{ie!==0&&(L.has(ge)||P.push({gx:ge%e.w,gy:Math.floor(ge/e.w),dist:ie}))});let O=Ff(h),U=Oh(),I=Of(h.player),V=.25,Q=.03,ye=h.maxHp>0&&h.hp/h.maxHp<V,W=h.maxHp>0&&h.hp/h.maxHp<Q,ce=h.level===2,de=U.filter(ie=>!L.has(ie.gy*e.w+ie.gx)),Ne=I.filter(ie=>!L.has(ie.gy*e.w+ie.gx)),we=new Set(U.map(ie=>ie.gy*e.w+ie.gx)),Be=de.length>0?de:U,vt=Ne.length>0?Ne:I,je=Be.length>0?En(Be):null,Gt=vt.length>0?En(vt):null,bn=bl(h),nn=bn.filter(ie=>!ie.disabled&&h.mp>=ie.cost&&ie.target==="enemy"),$t=nn.length>0?Math.max(...nn.map(ie=>ie.range||0)):0,mn=Math.max(h.range!=null?h.range:1,$t),Sn=h.level>=2&&mn>=2,Dt=ae.filter(ie=>ie.hp>0&&ie.player!==h.player),sn=ae.filter(ie=>ie.hp>0&&ie.player===h.player&&ie.id!==h.id);function Ft(ie,ge){if(ge.length===0)return null;let pe=null,te=1/0;for(let he of ie){let Me=0;for(let me of ge)Me+=_i(he.gx,he.gy,me.gx,me.gy);Me<te&&(te=Me,pe=he)}return pe}function Rt(ie,ge){if(ge.length===0||ie.length===0)return null;let pe=null,te=1/0;for(let he of ie){let Me=Math.min(...ge.map(me=>_i(he.gx,he.gy,me.gx,me.gy)));Me<te&&(te=Me,pe=he)}return pe}function Xt(ie,ge){let pe=mn,te=[];for(let he of ae){if(he.hp<=0||he.player===h.player)continue;let Me=_i(ie,ge,he.x,he.y);Me<=pe&&Me>0&&rr(e,ie,ge,he.x,he.y)&&te.push({target:he,dist:Me})}return te}let lt=new Set(P.map(ie=>ie.gy*e.w+ie.gx));function Mt(ie,ge){if(!ie||ie.length<=1)return null;let pe=Math.min(ge,ie.length-1);for(let te=pe;te>=1;te--){let he=ie[te],Me=he.y*e.w+he.x;if(lt.has(Me))return{gx:he.x,gy:he.y}}return null}function Qt(ie,ge){if(!ie||ie.length<=1)return null;let pe=Math.min(ge,ie.length-1);for(let te=pe;te>=1;te--){let he=ie[te];if(!L.has(he.y*e.w+he.x))return{gx:he.x,gy:he.y}}return null}function En(ie){let ge=null,pe=null,te=1/0;for(let he of ie){let Me=ks(e,h.x,h.y,he.gx,he.gy,ae,h);Me&&Me.length>1&&Me.length<te&&(te=Me.length,ge=Me,pe=he)}return ge&&pe?{path:ge,target:pe}:null}function Tn(ie){let ge=ie??P;if(ge.length===0)return null;if(Dt.length===0)return ge[0];let pe=null,te=-1;for(let he of ge){let Me=Math.min(...Dt.map(me=>_i(he.gx,he.gy,me.x,me.y)));Me>te&&(te=Me,pe=he)}return pe}function Wn(ie){let ge=ie??P;if(ge.length===0)return null;if(Dt.length===0)return ge[0];let pe=h.maxHp>0&&h.hp/h.maxHp>=.6,te=null,he=-1/0;for(let Me of ge){let me=Math.min(...Dt.map(bt=>_i(Me.gx,Me.gy,bt.x,bt.y))),Re=sn.length>0?Math.min(...sn.map(bt=>_i(Me.gx,Me.gy,bt.x,bt.y))):999,Tt;pe?Tt=Re<me?me-1e3:me:Tt=me-Re,Tt>he&&(he=Tt,te=Me)}return te}function vi(){let ie=mn;if(Dt.length===0)return null;let ge=null,pe=-1;for(let te of P){let he=Math.min(...Dt.map(me=>_i(te.gx,te.gy,me.x,me.y)));Dt.some(me=>_i(te.gx,te.gy,me.x,me.y)<=ie)&&he>pe&&(pe=he,ge=te)}return ge}let cn=new Map;for(let ie of P){let ge=ie.gy*e.w+ie.gx;cn.has(ge)||cn.set(ge,Xt(ie.gx,ie.gy))}let Pi=O.some(ie=>ie.target.maxHp>0&&ie.target.hp/ie.target.maxHp<V),ct=Pi||P.some(ie=>(cn.get(ie.gy*e.w+ie.gx)||[]).some(pe=>pe.target.maxHp>0&&pe.target.hp/pe.target.maxHp<V));if(Gn){if(Yt){setTimeout(()=>on(),400);return}if(Sn&&Dt.length>0&&oe.size>0&&P.length>0){let he=[];oe.forEach((me,Re)=>{he.push({gx:Re%e.w,gy:Math.floor(Re/e.w)})});let Me=En(he);if(Me){let me=Qt(Me.path,_);if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(on,400));return}let Re=Rt(P,he);if(Re&&(Re.gx!==h.x||Re.gy!==h.y)){Ht(h,Re.gx,Re.gy,()=>setTimeout(on,400));return}}}if(ms-Vn<=20&&U.length>0){let he=U.some(Me=>Me.gx===h.x&&Me.gy===h.y);if(he&&P.length>0){let me=P.filter(Re=>we.has(Re.gy*e.w+Re.gx)).filter(Re=>Re.gx!==h.x||Re.gy!==h.y);if(me.length>0){let Re=Tn(me);if(Re&&(Re.gx!==h.x||Re.gy!==h.y)){Ht(h,Re.gx,Re.gy,()=>setTimeout(on,400));return}}setTimeout(()=>on(),400);return}if(he){setTimeout(()=>on(),400);return}if(P.length>0){let Me=je,me=Me?Qt(Me.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(on,400));return}let Re=Rt(P,Be);if(Re&&(Re.gx!==h.x||Re.gy!==h.y)){Ht(h,Re.gx,Re.gy,()=>setTimeout(on,400));return}}setTimeout(()=>on(),400);return}if(!ye&&P.length>0){if(ce&&I.length>0&&!I.some(Me=>Me.gx===h.x&&Me.gy===h.y)){let Me=Gt,me=Me?Qt(Me.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(on,400));return}let Re=Rt(P,vt);if(Re&&(Re.gx!==h.x||Re.gy!==h.y)){Ht(h,Re.gx,Re.gy,()=>setTimeout(on,400));return}}if(U.length>0&&!U.some(Me=>Me.gx===h.x&&Me.gy===h.y)){let Me=je,me=Me?Qt(Me.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(on,400));return}let Re=Rt(P,Be);if(Re&&(Re.gx!==h.x||Re.gy!==h.y)){Ht(h,Re.gx,Re.gy,()=>setTimeout(on,400));return}}}let ge=U.length>0?P.filter(he=>we.has(he.gy*e.w+he.gx)):null,pe=ge!=null&&ge.length>0?ge:P,te=null;if(pe.length>0&&sn.length>0&&(te=Wn(pe),te)){let he=ks(e,h.x,h.y,te.gx,te.gy,ae,h),Me=he?he.length-1:1/0;(!he||he.length<=1||Me>_)&&(te=Tn(pe))}if(!te&&pe.length>0&&(te=Tn(pe)),te&&(te.gx!==h.x||te.gy!==h.y)){Ht(h,te.gx,te.gy,()=>setTimeout(on,400));return}setTimeout(()=>on(),400);return}if(W&&ms-Vn>20&&!Yt&&P.length>0){let ie=null,ge=1/0;for(let te of P){let Me=(cn.get(te.gy*e.w+te.gx)||[]).filter(me=>me.target.maxHp>0&&me.target.hp/me.target.maxHp<V);if(Me.length>0){let me=Math.min(...Me.map(Re=>Re.target.hp));me<ge&&(ge=me,ie=te)}}if(ie){let te=ks(e,h.x,h.y,ie.gx,ie.gy,ae,h),he=te?Mt(te,_):null;if(he&&(he.gx!==h.x||he.gy!==h.y)){Ht(h,he.gx,he.gy,()=>setTimeout(pn,600));return}}let pe=Tn();if(pe&&(pe.gx!==h.x||pe.gy!==h.y)){Ht(h,pe.gx,pe.gy,()=>setTimeout(pn,600));return}setTimeout(()=>on(),400);return}if(!Gn){let bt=function(wt){return ra(h,wt,ae).filter(Wt=>Wt.targetUnit!=null).map(Wt=>Wt.targetUnit)},ie=bn,ge=h.maxHp>0?h.hp/h.maxHp:1,pe=.35,te=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct","bloodSuck"]),he=new Set(["chakra","sacrifice"]),Me=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),me=new Set(["impale","poison","gaze","debilitate"]),Re=new Set(["dominate","manaDrain","weaken","cripple","hex","blind","raid"]),Tt=new Set(["reanimate"]),vn={showFloatingCombatText:li,handleUnitDeath:Un,updateUnitSlashVisibility:Oe,updateTurnUI:Nt,tryCollectPowerup:Ze,world:e,units:ae,updateUnitPosition(wt){let zt=We.get(wt.id);zt&&zt.position.copy(Je(wt.x,wt.y))},animateKnockback(wt,zt,Wt,rn,Zn,hn){let kn=We.get(wt.id);if(!kn){hn&&hn();return}let gr=Je(zt,Wt).clone(),Ws=Je(rn,Zn).clone(),Al=performance.now(),Wh=0;function Xh(Qf){Wh++,Wh%2===0&&Ot();let qh=Math.min(1,(Qf-Al)/Fs),ep=Rl=>Rl*Rl*(3-2*Rl);kn.position.lerpVectors(gr,Ws,ep(qh)),qh<1?requestAnimationFrame(Xh):(kn.position.copy(Ws),hn&&hn())}requestAnimationFrame(Xh)}},St=null,Pn=null,Mi=Pi||!Yt&&ct;if(!Mi){for(let zt of ie)if(!(zt.disabled||h.mp<zt.cost)&&he.has(zt.effectKey)){let rn=ra(h,zt,ae).filter(Zn=>Zn.targetUnit&&Zn.targetUnit.maxHp>0&&Zn.targetUnit.hp/Zn.targetUnit.maxHp<.5);if(rn.length>0){let Zn=rn.sort((hn,kn)=>hn.targetUnit.hp-kn.targetUnit.hp)[0].targetUnit;St=zt,Pn=Zn;break}}}if(!St&&!Mi){let wt=ae.filter(zt=>zt.hp<=0);for(let zt of ie)if(!(zt.disabled||h.mp<zt.cost)&&Tt.has(zt.effectKey)&&wt.length>0){St=zt,Pn=h;break}}if(!St&&!Mi&&(O.length>0||P.some(zt=>(cn.get(zt.gy*e.w+zt.gx)||[]).length>0))){let zt=ie.filter(Wt=>!Wt.disabled&&Me.has(Wt.effectKey)).sort((Wt,rn)=>(rn.level||1)-(Wt.level||1));for(let Wt of zt){let rn=h.tempBuff&&h.tempBuff.duration>0;if(Wt.target==="self"){if(Wt.effectKey==="bloodlust"&&h.hp/h.maxHp>.8)continue;if(!rn){St=Wt,Pn=h;break}}if(Wt.target==="ally"){if(Wt.effectKey==="forge"&&rn||Wt.effectKey==="fortify"&&rn||Wt.effectKey==="mantra"&&rn||Wt.effectKey==="sanctuary"&&rn)continue;let hn=ra(h,Wt,ae).filter(kn=>kn.targetUnit!=null).map(kn=>kn.targetUnit);if(hn.length>0){let kn=hn.filter(Ws=>!Ws.tempBuff||Ws.tempBuff.duration<=0),gr=(kn.length>0?kn:hn).sort((Ws,Al)=>Ws.hp-Al.hp)[0];St=Wt,Pn=gr;break}}}}if(!St){for(let wt of ie)if(!(wt.disabled||h.mp<wt.cost)&&te.has(wt.effectKey)){if(wt.effectKey==="feast"&&h.hp/h.maxHp>.7||wt.effectKey==="berserk"&&h.hp/h.maxHp<.25||wt.effectKey==="shuriken"&&O.length>0||wt.effectKey==="judgement"&&h.hp/h.maxHp>.7)continue;let zt=bt(wt);if(zt.length===0)continue;let Wt=zt.filter(hn=>hn.maxHp>0&&hn.hp/hn.maxHp<pe),rn=Wt.length>0?Wt:zt,Zn=wt.type==="spell"?rn.reduce((hn,kn)=>{if(!hn)return kn;let gr=Ce(kn,"int")-Ce(hn,"int");return gr<0||gr===0&&kn.hp<hn.hp?kn:hn},null):rn.reduce((hn,kn)=>!hn||kn.hp<hn.hp?kn:hn,null);St=wt,Pn=Zn;break}}if(!St&&!Mi){for(let wt of ie)if(!(wt.disabled||h.mp<wt.cost)&&Re.has(wt.effectKey)){let zt=bt(wt),Wt=zt.length>0?zt.reduce((rn,Zn)=>!rn||Zn.hp<rn.hp?Zn:rn,null):null;St=wt,Pn=Wt;break}}if(!St&&!Mi){for(let wt of ie)if(!(wt.disabled||h.mp<wt.cost)&&me.has(wt.effectKey)){let Wt=bt(wt).filter(rn=>!rn.tempDebuff||rn.tempDebuff.duration<=0);if(Wt.length>0){let rn=Wt.reduce((Zn,hn)=>!Zn||hn.hp<Zn.hp?hn:Zn,null);St=wt,Pn=rn;break}}}if(St&&Pn){h.mp-=St.cost,Gn=!0;let wt=St.target==="self"?h:Pn;Ga(h,wt,St,vn,()=>setTimeout(pn,600));return}}if(Bf(h,Dt,sn)&&O.length>0){O.sort((ge,pe)=>ge.target.hp-pe.target.hp||ge.dist-pe.dist);let ie=O[0].target;Va(h,ie);return}if(O.length>0){O.sort((ge,pe)=>ge.target.hp-pe.target.hp||ge.dist-pe.dist);let ie=O[0].target;Va(h,ie);return}if(!Yt&&!ct&&oe.size>0&&P.length>0){let ie=[];oe.forEach((pe,te)=>{ie.push({gx:te%e.w,gy:Math.floor(te/e.w)})});let ge=En(ie);if(ge){let pe=Qt(ge.path,_);if(pe&&(pe.gx!==h.x||pe.gy!==h.y)){Ht(h,pe.gx,pe.gy,()=>setTimeout(pn,600));return}let te=Rt(P,ie);if(te&&(te.gx!==h.x||te.gy!==h.y)){Ht(h,te.gx,te.gy,()=>setTimeout(pn,600));return}}}let Lt=ms-Vn;if(Lt<=20&&U.length>0&&!Yt&&P.length>0&&!U.some(ge=>ge.gx===h.x&&ge.gy===h.y)){let ge=je,pe=ge?ge.path:null,te=U.length>0?Math.min(...U.map(St=>_i(h.x,h.y,St.gx,St.gy))):1/0,he=new Map,Me=new Map;for(let St of P){let Pn=St.gy*e.w+St.gx;he.set(Pn,U.length>0?Math.min(...U.map(Mi=>_i(St.gx,St.gy,Mi.gx,Mi.gy))):1/0),Me.set(Pn,pe?pe.findIndex(Mi=>Mi.x===St.gx&&Mi.y===St.gy):-1)}let me=null,Re=-1,Tt=V;for(let St of P){let Pn=St.gy*e.w+St.gx;if(he.get(Pn)>te||(cn.get(Pn)||[]).filter(rn=>rn.target.maxHp>0&&rn.target.hp/rn.target.maxHp<Tt).length===0)continue;let zt=Me.get(Pn),Wt=zt>=0?zt:0;Wt>Re&&(Re=Wt,me=St)}if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(pn,600));return}let bt=ge?Qt(ge.path,_):null;if(bt&&(bt.gx!==h.x||bt.gy!==h.y)){Ht(h,bt.gx,bt.gy,()=>setTimeout(pn,600));return}let vn=Rt(P,Be);if(vn&&(vn.gx!==h.x||vn.gy!==h.y)){Ht(h,vn.gx,vn.gy,()=>setTimeout(pn,600));return}}if(ye&&P.length>0&&!Yt){let ie=null,ge=1/0;for(let pe of P){let he=(cn.get(pe.gy*e.w+pe.gx)||[]).filter(Me=>Me.target.maxHp>0&&Me.target.hp/Me.target.maxHp<V);if(he.length>0){let Me=Math.min(...he.map(me=>me.target.hp));Me<ge&&(ge=Me,ie=pe)}}if(ie){let pe=ks(e,h.x,h.y,ie.gx,ie.gy,ae,h),te=pe?Mt(pe,_):null;if(te&&(te.gx!==h.x||te.gy!==h.y)){Ht(h,te.gx,te.gy,()=>setTimeout(pn,600));return}}if(Lt>20&&ce&&I.length>0&&!I.some(te=>te.gx===h.x&&te.gy===h.y)){let te=Ne.length>0?Ne:I,he=Gt;if(he!=null&&he.path.length<=5){let me=Qt(he.path,_);if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(pn,600));return}let Re=Rt(P,te);if(Re&&(Re.gx!==h.x||Re.gy!==h.y)){Ht(h,Re.gx,Re.gy,()=>setTimeout(pn,600));return}}}if(Lt>20){let pe=Tn();if(pe&&_i(h.x,h.y,pe.gx,pe.gy)>0){Ht(h,pe.gx,pe.gy,()=>setTimeout(pn,600));return}setTimeout(()=>on(),400);return}}if(Lt<=10&&U.length>0&&!Yt&&P.length>0&&!U.some(ge=>ge.gx===h.x&&ge.gy===h.y)){let ge=de.length>0?de:U,pe=je,te=pe?Qt(pe.path,_):null;if(te&&(te.gx!==h.x||te.gy!==h.y)){Ht(h,te.gx,te.gy,()=>setTimeout(pn,600));return}let he=Rt(P,ge);if(he&&(he.gx!==h.x||he.gy!==h.y)){Ht(h,he.gx,he.gy,()=>setTimeout(pn,600));return}}if(h.level===1&&U.length>0&&!Yt&&!U.some(ge=>ge.gx===h.x&&ge.gy===h.y)&&P.length>0){let ge=de.length>0?de:U,pe=je,te=pe?Qt(pe.path,_):null;if(te&&(te.gx!==h.x||te.gy!==h.y)){Ht(h,te.gx,te.gy,()=>setTimeout(pn,600));return}let he=Rt(P,ge);if(he&&(he.gx!==h.x||he.gy!==h.y)){Ht(h,he.gx,he.gy,()=>setTimeout(pn,600));return}}if(ce&&I.length>0&&!Yt&&!I.some(ge=>ge.gx===h.x&&ge.gy===h.y)&&P.length>0){let ge=Dt.filter(Tt=>Tt.maxHp>0&&Tt.hp/Tt.maxHp<V),pe=null,te=1/0;for(let Tt of P){let vn=(cn.get(Tt.gy*e.w+Tt.gx)||[]).find(St=>ge.some(Pn=>Pn.id===St.target.id));vn&&vn.target.hp<te&&(te=vn.target.hp,pe=Tt)}if(pe){let Tt=ks(e,h.x,h.y,pe.gx,pe.gy,ae,h),bt=Tt?Mt(Tt,_):null;if(bt&&(bt.gx!==h.x||bt.gy!==h.y)){Ht(h,bt.gx,bt.gy,()=>setTimeout(pn,600));return}}let he=Ne.length>0?Ne:I,Me=Gt,me=Me?Qt(Me.path,_):null;if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(pn,600));return}let Re=Rt(P,he);if(Re&&(Re.gx!==h.x||Re.gy!==h.y)){Ht(h,Re.gx,Re.gy,()=>setTimeout(pn,600));return}}if(Sn&&Dt.length>0&&!Yt&&P.length>0){if(!ct&&oe.size>0){let ge=[];oe.forEach((te,he)=>{ge.push({gx:he%e.w,gy:Math.floor(he/e.w)})});let pe=En(ge);if(pe){let te=Qt(pe.path,_);if(te&&(te.gx!==h.x||te.gy!==h.y)){Ht(h,te.gx,te.gy,()=>setTimeout(pn,600));return}let he=Rt(P,ge);if(he&&(he.gx!==h.x||he.gy!==h.y)){Ht(h,he.gx,he.gy,()=>setTimeout(pn,600));return}}}let ie=vi();if(ie&&(ie.gx!==h.x||ie.gy!==h.y)){Ht(h,ie.gx,ie.gy,()=>setTimeout(pn,600));return}}if(Dt.length>0&&!Yt&&P.length>0){let ge=function(te,he){let Me=null;for(let me=-ie;me<=ie;me++)for(let Re=-ie;Re<=ie;Re++){if(Re===0&&me===0||Math.abs(Re)+Math.abs(me)>ie)continue;let Tt=te.x+Re,bt=te.y+me;if(Tt<0||Tt>=e.w||bt<0||bt>=e.h||!ar(e,Tt,bt)||!rr(e,Tt,bt,te.x,te.y)||ae.some(wt=>wt.hp>0&&wt.x===Tt&&wt.y===bt))continue;let St=ks(e,h.x,h.y,Tt,bt,ae,h),Pn=St?St.length-1:1/0;St&&St.length>1&&(!he||Pn<=_)&&(!Me||St.length<Me.length)&&(Me=St)}return Me},ie=mn,pe=[];for(let te of Dt){let he=ge(te,!0);he&&pe.push({enemy:te,path:he})}if(pe.length>0){let te=pe.filter(Re=>Re.enemy.maxHp>0&&Re.enemy.hp/Re.enemy.maxHp<V),he=te.length>0?te:pe;te.length>0?he.sort((Re,Tt)=>Re.enemy.hp-Tt.enemy.hp||Re.path.length-Tt.path.length):he.sort((Re,Tt)=>Re.path.length-Tt.path.length||Re.enemy.hp-Tt.enemy.hp);let Me=he[0],me=Mt(Me.path,_);if(me&&(me.gx!==h.x||me.gy!==h.y)){Ht(h,me.gx,me.gy,()=>setTimeout(pn,600));return}}if(pe.length===0){let te=null,he=1/0;for(let Me of Dt){let me=ge(Me,!1);me&&me.length<he&&(he=me.length,te=me)}if(te){let Me=Mt(te,_);if(Me&&(Me.gx!==h.x||Me.gy!==h.y)){Ht(h,Me.gx,Me.gy,()=>setTimeout(pn,600));return}}}}setTimeout(()=>on(),400)}function Dn(){for(_n.length=0;ii.children.length;){let d=ii.children[0];ii.remove(d),d.geometry!==aa&&d.geometry!==oa&&d.geometry.dispose(),d.material.dispose()}Ot()}let pr=new Set;function bl(d){return d?(d.summonedSkills&&d.summonedSkills.length>0?d.summonedSkills:d.class&&Jr[d.class]?Jr[d.class]:[]).map(_=>({..._,disabled:_.disabled===!0||d.level<(_.level||1)||_.hpCost&&d.hp<_.hpCost||_.cost!=null&&d.mp<_.cost})):[]}function ra(d,h,_){let b=[],L=(O,U,I,V)=>Math.abs(O-I)+Math.abs(U-V),P=h.range||0;if(h.target==="self")return b.push({gx:d.x,gy:d.y,targetUnit:null}),b;for(let O of _)O.hp<=0||L(d.x,d.y,O.x,O.y)>P||P>=2&&!rr(e,d.x,d.y,O.x,O.y)||(h.target==="enemy"&&O.player!==d.player&&b.push({gx:O.x,gy:O.y,targetUnit:O}),h.target==="ally"&&O.player===d.player&&b.push({gx:O.x,gy:O.y,targetUnit:O}));return b}function Hf(d,h){let _=h.range||0;if(h.target==="self")return[{gx:d.x,gy:d.y}];let b=tf(e,d.x,d.y,_),L=[];return b.forEach((P,O)=>{let U=O%e.w,I=O/e.w|0;_>=2&&!rr(e,d.x,d.y,U,I)||L.push({gx:U,gy:I})}),L}function zf(d,h){let _=ra(d,h,ae);pr=new Set(_.map(L=>`${L.gx},${L.gy}`));let b=h.target==="self"?_:Hf(d,h);Dn(),b.forEach(({gx:L,gy:P})=>{let U=(ti+e.height[P][L]*.35)/2+ti/2,I=L*mt-Qe+mt/2,V=P*mt-ze+mt/2,Q=U+.01,ye=new Cn({color:8926122,transparent:!0,opacity:.4,side:wn}),W=new $e(aa,ye);W.rotation.x=-Math.PI/2,W.position.set(I,Q,V),ii.add(W),_n.push(ye);let ce=new Cn({color:11167436,transparent:!0,opacity:.7,side:wn}),de=new $e(oa,ce);de.rotation.x=-Math.PI/2,de.position.set(I,Q+.01,V),de.userData.gx=L,de.userData.gy=P,ii.add(de),_n.push(ce)})}let Fh=.82,Bh=1.02,aa=new Qi(Bh,Bh),oa=new Qi(Fh,Fh);function Vf(d){Dn(),d.forEach(({gx:h,gy:_})=>{let L=(ti+e.height[_][h]*.35)/2+ti/2,P=h*mt-Qe+mt/2,O=_*mt-ze+mt/2,U=L+.01,I=new Cn({color:2271812,transparent:!0,opacity:.4,side:wn}),V=new $e(aa,I);V.rotation.x=-Math.PI/2,V.position.set(P,U,O),ii.add(V),_n.push(I);let Q=new Cn({color:4508774,transparent:!0,opacity:.7,side:wn}),ye=new $e(oa,Q);ye.rotation.x=-Math.PI/2,ye.position.set(P,U+.01,O),ye.userData.gx=h,ye.userData.gy=_,ii.add(ye),_n.push(Q)}),Ot()}function Sl(d){Dn(),d.forEach((h,_)=>{if(h===0)return;let b=_%e.w,L=_/e.w|0,O=(ti+e.height[L][b]*.35)/2+ti/2,U=b*mt-Qe+mt/2,I=L*mt-ze+mt/2,V=O+.01,Q=new Cn({color:3381759,transparent:!0,opacity:.35,side:wn}),ye=new $e(aa,Q);ye.rotation.x=-Math.PI/2,ye.position.set(U,V,I),ii.add(ye),_n.push(Q);let W=new Cn({color:6730751,transparent:!0,opacity:.65,side:wn}),ce=new $e(oa,W);ce.rotation.x=-Math.PI/2,ce.position.set(U,V+.01,I),ii.add(ce),_n.push(W)}),Ot()}function Gf(d){Dn(),d.forEach((h,_)=>{if(h===0)return;let b=_%e.w,L=_/e.w|0,O=(ti+e.height[L][b]*.35)/2+ti/2,U=b*mt-Qe+mt/2,I=L*mt-ze+mt/2,V=O+.01,Q=new Cn({color:10035746,transparent:!0,opacity:.4,side:wn}),ye=new $e(aa,Q);ye.rotation.x=-Math.PI/2,ye.position.set(U,V,I),ii.add(ye),_n.push(Q);let W=new Cn({color:13386820,transparent:!0,opacity:.7,side:wn}),ce=new $e(oa,W);ce.rotation.x=-Math.PI/2,ce.position.set(U,V+.01,I),ii.add(ce),_n.push(W)}),Ot()}let _s=new Qo,vs=new He;function Wa(d,h){let _=t.getBoundingClientRect();return vs.x=(d-_.left)/_.width*2-1,vs.y=-((h-_.top)/_.height)*2+1,{x:vs.x,y:vs.y}}function Wf(d,h){if(jt)return;vs.x=d,vs.y=h,_s.setFromCamera(vs,a);let _=_s.intersectObjects(re.children,!0);if(_.length===0)return;let b=null;for(let U of _){let I=U.object;for(;I&&(I.userData.gx==null||I.userData.gy==null);)I=I.parent;if(I&&I.userData.gx!=null){b=I;break}}if(!b||b.userData.gx==null)return;let L=b.userData.gx,P=b.userData.gy;if(xn==="draft"&&Ye){let U=P*e.w+L;ot.has(U)&&dl(L,P);return}if(xn!=="playing"||dt==="cvcpu")return;if(ni&&On){let U=Ae[et],I=ae.find(ce=>ce.id===U&&ce.hp>0);if(I&&L===I.x&&P===I.y){ni=!1,On=null,pr=new Set,Dn(),Yt?It=new Map:(It=rl(e,I.x,I.y,Ce(I,"agi"),ae,I),Sl(It)),Nt();return}let V=`${L},${P}`;if(!pr.has(V))return;if(!I||I.mp<On.cost){ni=!1,On=null,Dn(),Nt();return}let Q=ae.find(ce=>ce.x===L&&ce.y===P&&ce.hp>0);if(On.target==="enemy"&&(!Q||Q.player===I.player)||On.target==="ally"&&Q&&Q.player!==I.player||On.target==="self"&&(L!==I.x||P!==I.y)||On.target==="enemy"&&!Q)return;I.mp-=On.cost,Gn=!0;let ye={showFloatingCombatText:li,handleUnitDeath:Un,updateUnitSlashVisibility:Oe,updateTurnUI:Nt,tryCollectPowerup:Ze,world:e,units:ae,reanimateDeadUnit:Na,updateUnitPosition(ce){let de=We.get(ce.id);de&&de.position.copy(Je(ce.x,ce.y))},animateKnockback(ce,de,Ne,we,Be,vt){let je=We.get(ce.id);if(!je){vt&&vt();return}let Gt=Je(de,Ne).clone(),bn=Je(we,Be).clone(),nn=performance.now(),$t=0;function mn(Sn){$t++,$t%2===0&&Ot();let Dt=Math.min(1,(Sn-nn)/Fs),sn=Ft=>Ft*Ft*(3-2*Ft);je.position.lerpVectors(Gt,bn,sn(Dt)),Dt<1?requestAnimationFrame(mn):(je.position.copy(bn),vt&&vt())}requestAnimationFrame(mn)}},W=On.target==="self"?I:Q||null;dt==="online"&&I.player===tn&&typeof ln=="function"&&(ln({type:"requestRender"}),Gs({type:"skill",unitId:I.id,targetId:W?W.id:void 0,effectKey:On.effectKey})),Ga(I,W,On,ye,()=>{Dn(),ni=!1,On=null,pr=new Set,Yt?on():Nt()});return}if(fn){let U=Ae[et],I=ae.find(Q=>Q.id===U);if(dt==="online"&&I&&I.player!==tn)return;let V=We.get(U);if(I&&V&&Fn.length>0){let Q=Je(I.x,I.y),ye=Je(L,P),W=ye.x-Q.x,ce=ye.z-Q.z,de=W*W+ce*ce>1e-6?Math.atan2(W,ce):V.rotation.y;V.rotation.y=mh(de)}setTimeout(()=>on(),400);return}if(kt!=null&&Vt){let U=ae.find(Q=>Q.id===kt);if(!U||U.player!==yn||dt==="online"&&U.player!==tn)return;let I=P*e.w+L,V=ae.find(Q=>Q.x===L&&Q.y===P&&Q.hp>0);if(V&&V.id===Ae[et]&&V.player===yn&&(dt!=="online"||V.player===tn)){Vt=!1,kt=V.id,Yt?(Dn(),It=new Map):(It=rl(e,V.x,V.y,Ce(V,"agi"),ae,V),Sl(It)),Nt();return}if(!It.has(I)||It.get(I)===0)return;V&&V.player!==yn&&Va(U,V);return}let O=ae.find(U=>U.x===L&&U.y===P&&U.hp>0);if(O){if(O.id===Ae[et]&&O.player===yn&&(dt!=="online"||O.player===tn)){yt(),kt=O.id,Vt=!1,Yt?(Dn(),It=new Map):(It=rl(e,L,P,Ce(O,"agi"),ae,O),Sl(It)),Nt();return}Dn(),It=new Map,Vt=!1,dn(O),Nt();return}if(yt(),kt!=null){let ce=function(){if(W>=Q.length){U.x=Q[Q.length-1].x,U.y=Q[Q.length-1].y,Ze(U),jt=!1,Ke(ye),Ri(),It=new Map,Yt=!0,dt==="online"&&U.player===tn&&typeof ln=="function"&&(ln({type:"move",unitId:U.id,toGx:U.x,toGy:U.y}),xl=!1,Pf()),setTimeout(Gn?()=>on():()=>Nt(),400);return}let de=Q[W-1],Ne=Q[W],we=Je(de.x,de.y).clone(),Be=Je(Ne.x,Ne.y).clone(),vt=Be.x-we.x,je=Be.z-we.z;vt*vt+je*je>1e-6&&(ye.rotation.y=Math.atan2(vt,je));let Gt=performance.now(),bn=0;function nn($t){bn++,bn%2===0&&Ot();let mn=Math.min(1,($t-Gt)/Fs),Dt=(sn=>sn*sn*(3-2*sn))(mn);if(ye.position.lerpVectors(we,Be,Dt),Se(ye,Dt),g){let sn=a.position.distanceTo(u),Ft=sn<.1?o:sn;m.copy(a.position).sub(u).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),u.lerp(ye.position,l),a.position.copy(u).add(m.clone().multiplyScalar(Ft)),a.lookAt(u)}mn<1?requestAnimationFrame(nn):(W++,ce())}requestAnimationFrame(nn)};if(Vt)return;let U=ae.find(de=>de.id===kt);if(!U||U.player!==yn||dt==="online"&&U.player!==tn)return;let I=P*e.w+L;if(!It.has(I)||It.get(I)===0||ae.some(de=>de.id!==U.id&&de.x===L&&de.y===P&&de.hp>0)||jt||Yt)return;let Q=ks(e,U.x,U.y,L,P,ae,U);if(!Q||Q.length<=1)return;dt==="online"&&U.player===tn&&typeof ln=="function"&&(ln({type:"requestRender"}),xl=!0),kt=null,Dn(),jt=!0,g=!0,Ri(U.id);let ye=We.get(U.id),W=1;ce()}}function kh(d){T.x=d.clientX,T.y=d.clientY,R=d.isTouch===!0,S=d.ctrlKey,v=Wa(d.clientX,d.clientY),t.style.cursor=(d.ctrlKey,"grabbing")}function El(d){return d.touches&&d.touches.length>0?{clientX:d.touches[0].clientX,clientY:d.touches[0].clientY}:d.changedTouches&&d.changedTouches.length>0?{clientX:d.changedTouches[0].clientX,clientY:d.changedTouches[0].clientY}:{clientX:d.clientX,clientY:d.clientY}}function Hh(d){if(!d||d.length<2)return 0;let h=d[0],_=d[1];return Math.hypot(_.clientX-h.clientX,_.clientY-h.clientY)}function Xf(d){if(d.touches.length===2){z=Hh(d.touches),v=null;return}if(d.touches.length!==1)return;z=null;let h=El(d);kh({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1,isTouch:!0})}function qf(d){if(d.touches.length===2){d.preventDefault();let _=Hh(d.touches);if(z!=null&&z>0){let b=_-z,L=a.position.distanceTo(u),P=Math.max($,Math.min(le,L-b*B));x.copy(u).sub(a.position).normalize(),a.position.copy(u).sub(x.multiplyScalar(P)),a.lookAt(u),$i=performance.now()}z=_;return}if(z=null,d.touches.length!==1)return;d.preventDefault();let h=El(d);zh({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1})}function Yf(d){if(d.touches.length<2&&(z=null),d.touches.length===2||d.changedTouches.length===0)return;R=!1;let h=El(d);Tl({clientX:h.clientX,clientY:h.clientY,ctrlKey:!1})}function zh(d){if(fn){mf(d.clientX,d.clientY);return}if(v==null)return;let h=d.clientX-T.x,_=d.clientY-T.y;if(!M&&!y&&(Math.abs(h)>A||Math.abs(_)>A)&&(d.ctrlKey||S?(y=!0,g=!1):(M=!0,g=!1)),y){Y.copy(a.position).sub(u);let b=Y.length();if(b<.001)return;let L=Math.atan2(Y.x,Y.z),P=Math.asin(Math.max(-1,Math.min(1,Y.y/b)));L-=h*F,P+=_*F,P=Math.max(D,Math.min(N,P)),Y.x=b*Math.cos(P)*Math.sin(L),Y.y=b*Math.sin(P),Y.z=b*Math.cos(P)*Math.cos(L),a.position.copy(u).add(Y),a.lookAt(u),T.x=d.clientX,T.y=d.clientY,$i=performance.now()}else if(M){let b=Wa(d.clientX,d.clientY);p.setFromNormalAndCoplanarPoint(new k(0,1,0),new k(0,u.y,0)),_s.setFromCamera(new He(v.x,v.y),a),_s.ray.intersectPlane(p,f);let L=f.clone();_s.setFromCamera(new He(b.x,b.y),a),_s.ray.intersectPlane(p,f);let P=L.sub(f);R&&P.multiplyScalar(q),u.add(P),a.position.add(P),a.lookAt(u),v={x:b.x,y:b.y},$i=performance.now()}}function Tl(d){if(v!=null&&!M&&!y){let h=Wa(d.clientX,d.clientY);Wf(h.x,h.y)}v=null,M=!1,y=!1,S=!1,t.style.cursor="grab"}function $f(d){d.preventDefault();let h=a.position.distanceTo(u),_=Math.max($,Math.min(le,h+d.deltaY*ve));x.copy(u).sub(a.position).normalize(),a.position.copy(u).sub(x.multiplyScalar(_)),a.lookAt(u),$i=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",kh),t.addEventListener("mousemove",zh),t.addEventListener("mouseup",Tl),t.addEventListener("mouseleave",Tl),t.addEventListener("touchstart",Xf,{passive:!0}),t.addEventListener("touchmove",qf,{passive:!1}),t.addEventListener("touchend",Yf,{passive:!0}),t.addEventListener("wheel",$f,{passive:!1});function Vh(){let d=t.clientWidth,h=t.clientHeight;a.aspect=d/h,a.updateProjectionMatrix(),Kn.setSize(d,h),Kn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",Vh);let Kn=new Ea({antialias:!1});Kn.setSize(t.clientWidth,t.clientHeight),Kn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Kn.shadowMap.enabled=!0,Kn.shadowMap.type=ih,t.appendChild(Kn.domElement),Vh();let Xa=document.createElement("div");Xa.id="combat-text-layer",t.appendChild(Xa);let Ji=new k,Ms=new k,Kf=1400;function li(d,h,_,b,L){let P=document.createElement("div");P.className="combat-text-float "+(b?"miss":"damage")+(L?" "+L:""),P.textContent=_,P.style.position="absolute",Xa.appendChild(P);let O=L==="skill-name"?1.7:1.2,U=performance.now();function I(){Ji.copy(Je(d,h)),Ji.y+=O,Ji.project(a);let ye=t.clientWidth,W=t.clientHeight;P.style.left=(Ji.x*.5+.5)*ye+"px",P.style.top=(1-(Ji.y*.5+.5))*W+"px"}let V=0;function Q(){V%2===0&&I(),V++,performance.now()-U<Kf?requestAnimationFrame(Q):P.remove()}requestAnimationFrame(Q)}let Zf=1500;function Jf(d,h){let _=document.createElement("div");_.className="combat-text-float "+(h||"levelup"),_.textContent="LEVEL UP!",_.style.position="absolute",Xa.appendChild(_);let b=performance.now(),L=0;function P(){Ji.copy(Je(d.x,d.y)),Ji.y+=1.2,Ji.project(a);let U=t.clientWidth,I=t.clientHeight;_.style.left=(Ji.x*.5+.5)*U+"px",_.style.top=(1-(Ji.y*.5+.5))*I+"px"}function O(){L%2===0&&P(),L++,performance.now()-b<Zf?requestAnimationFrame(O):_.remove()}requestAnimationFrame(O)}function Un(d,h,_){dt==="online"&&typeof ln=="function"&&!(_&&_.skipSync)&&ln({type:"unitDeath",unitId:d.id,killerId:h?.id}),D_(h?.class,d.class),console.log("[DEATH]",`${d.name} (${d.class}, P${d.player})`,`at (${d.x},${d.y})`,`Lv.${d.level}`),li(d.x,d.y,"DEAD",!1),ae.filter(U=>U.summonedBy===d.id&&U.hp>0).map(U=>U.id).forEach(U=>{let I=ae.find(V=>V.id===U);I&&(I.hp=0,Un(I,null,{skipSync:!0}))});let L=We.get(d.id);if(!L){Ri(),Gh();return}let P=performance.now();function O(U){Ot();let I=U-P,V=Math.min(1,I/Pe),Q=V*V;L.rotation.x=Q*Math.PI*.5,V<1?requestAnimationFrame(O):(n.remove(L),We.delete(d.id),Ri(),Gh())}requestAnimationFrame(O)}function Gh(){if(xn!=="playing")return;let d=ae.some(_=>_.player===1&&_.hp>0&&!_.summonedBy),h=ae.some(_=>_.player===2&&_.hp>0&&!_.summonedBy);d?h||wl(1):wl(2)}function jf(){let d=Oh(),h=new Set(d.map(O=>O.gy*e.w+O.gx)),_=ae.filter(O=>O.hp>0&&O.player===1&&!O.summonedBy&&h.has(O.y*e.w+O.x)).length,b=ae.filter(O=>O.hp>0&&O.player===2&&!O.summonedBy&&h.has(O.y*e.w+O.x)).length,L=null,P="";if(_>b)L=1,P=`Time's up! ${Ln(1)} wins! (${_} vs ${b} units on center base)`;else if(b>_)L=2,P=`Time's up! ${Ln(2)} wins! (${b} vs ${_} units on center base)`;else{let O=ae.filter(I=>I.hp>0&&I.player===1&&!I.summonedBy).reduce((I,V)=>I+V.hp,0),U=ae.filter(I=>I.hp>0&&I.player===2&&!I.summonedBy).reduce((I,V)=>I+V.hp,0);O>U?(L=1,P=`Time's up! Draw on center \u2014 ${Ln(1)} wins on total HP (${O} vs ${U})`):U>O?(L=2,P=`Time's up! Draw on center \u2014 ${Ln(2)} wins on total HP (${U} vs ${O})`):P=`Draw! (equal units on center: ${_}, equal HP)`}wl(L,P)}function wl(d,h){ee(),U_(ae,d),xn="gameover",document.getElementById("turn-menu").style.display="none",yt(),Dn();let _=document.getElementById("game-over-overlay"),b=document.getElementById("game-over-title"),L=document.getElementById("game-over-cards"),P=document.getElementById("game-over-class-record");P&&(P.style.display="none",P.innerHTML=""),b.textContent=h??`${Ln(d)} wins!`;let O=ae.filter(U=>U.player===(d??1));if(L.innerHTML=O.map(U=>{let I=U,V=U.level>=3?" level-3":U.level>=2?" level-2":"",Q=I.maxHp>0&&I.hp/I.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${V}${Q}">
          <img class="game-over-card-image" src="${Zr[U.class]||""}" alt="${I.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${I.name}</div>
            <div class="game-over-card-meta">Lv.${I.level} ${I.class} \u2014 HP ${I.hp}/${I.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${I.hp}/${I.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${I.mp}/${I.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${Ce(I,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${Ce(I,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${Ce(I,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${Ce(I,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${Ce(I,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${Ce(I,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${I.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),_.classList.add("visible"),dt==="cvcpu"){if(X++,P&&gs&&X>=w){let U=Fi.map(I=>{let V=ts[I],Q=V.wins+V.losses||1,ye=V.wins+V.losses>0?(V.wins/Q*100).toFixed(1)+"%":"\u2014",W=V.wins+V.losses>0?(V.losses/Q*100).toFixed(1)+"%":"\u2014";return{class:I,battles:V.battles,kills:V.kills,deaths:V.deaths,wins:V.wins,losses:V.losses,winRate:ye,lossRate:W}});P.innerHTML=`
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
              ${U.map(I=>`
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
        `,P.style.display="block"}X<w&&setTimeout(()=>{_.classList.remove("visible"),C(),ea()},2e3)}}function mr(d=0){requestAnimationFrame(mr),$i===0&&($i=d);let h=d-$i>500;mr.frameCount=(typeof mr.frameCount=="number"?mr.frameCount:0)+1;let _=()=>{if(is){let b=.6+.4*Math.sin(d*.004);for(let L=0;L<_n.length;L++){let P=L%2===0?.4:.7;_n[L].opacity=P*b}Kn.render(n,a),is=!1}};h?d-jr>=100&&(jr=d,is=!0,_()):(mr.frameCount%2===0&&(is=!0),_())}mr()}k_();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
