var Bc="160";var If=0,Ch=1,Lf=2;var hd=1,kc=2,Zi=3,vs=0,si=1,_n=2;var ys=0,Er=1,Ph=2,Ih=3,Lh=4,Df=5,Bs=100,Uf=101,Nf=102,Dh=103,Uh=104,Of=200,Ff=201,Bf=202,kf=203,Yl=204,$l=205,Hf=206,zf=207,Vf=208,Gf=209,Wf=210,Xf=211,qf=212,Yf=213,$f=214,Kf=0,Zf=1,Jf=2,io=3,jf=4,Qf=5,ep=6,tp=7,ud=0,np=1,ip=2,xs=0,sp=1,rp=2,ap=3,op=4,lp=5,cp=6;var dd=300,Ar=301,Rr=302,Kl=303,Zl=304,Bo=306,ta=1e3,Ii=1001,Jl=1002,Qn=1003,Nh=1004;var ul=1005;var vi=1006,hp=1007;var na=1008;var _s=1009,up=1010,dp=1011,Hc=1012,fd=1013,ms=1014,gs=1015,ia=1016,pd=1017,md=1018,Hs=1020,fp=1021,Li=1023,pp=1024,mp=1025,zs=1026,Cr=1027,gp=1028,gd=1029,yp=1030,yd=1031,xd=1033,dl=33776,fl=33777,pl=33778,ml=33779,Oh=35840,Fh=35841,Bh=35842,kh=35843,_d=36196,Hh=37492,zh=37496,Vh=37808,Gh=37809,Wh=37810,Xh=37811,qh=37812,Yh=37813,$h=37814,Kh=37815,Zh=37816,Jh=37817,jh=37818,Qh=37819,eu=37820,tu=37821,gl=36492,nu=36494,iu=36495,xp=36283,su=36284,ru=36285,au=36286;var so=2300,ro=2301,yl=2302,ou=2400,lu=2401,cu=2402;var vd=3e3,Vs=3001,_p=3200,vp=3201,Md=0,Mp=1,Mi="",Xn="srgb",ji="srgb-linear",zc="display-p3",ko="display-p3-linear",ao="linear",pn="srgb",oo="rec709",lo="p3";var sr=7680;var hu=519,bp=512,Sp=513,Ep=514,bd=515,Tp=516,wp=517,Ap=518,Rp=519,uu=35044;var du="300 es",jl=1035,Ji=2e3,co=2001,Ms=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},$n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xl=Math.PI/180,Ql=180/Math.PI;function Nr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($n[i&255]+$n[i>>8&255]+$n[i>>16&255]+$n[i>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[t&63|128]+$n[t>>8&255]+"-"+$n[t>>16&255]+$n[t>>24&255]+$n[n&255]+$n[n>>8&255]+$n[n>>16&255]+$n[n>>24&255]).toLowerCase()}function Zn(i,e,t){return Math.max(e,Math.min(t,i))}function Cp(i,e){return(i%e+e)%e}function _l(i,e,t){return(1-t)*i+t*e}function fu(i){return(i&i-1)===0&&i!==0}function ec(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],p=n[2],u=n[5],x=n[8],M=s[0],y=s[3],g=s[6],b=s[1],v=s[4],A=s[7],U=s[2],I=s[5],L=s[8];return r[0]=a*M+o*b+l*U,r[3]=a*y+o*v+l*I,r[6]=a*g+o*A+l*L,r[1]=c*M+h*b+m*U,r[4]=c*y+h*v+m*I,r[7]=c*g+h*A+m*L,r[2]=p*M+u*b+x*U,r[5]=p*y+u*v+x*I,r[8]=p*g+u*A+x*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],m=h*a-o*c,p=o*l-h*r,u=c*r-a*l,x=t*m+n*p+s*u;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=m*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=p*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=u*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vl.makeScale(e,t)),this}rotate(e){return this.premultiply(vl.makeRotation(-e)),this}translate(e,t){return this.premultiply(vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vl=new Dt;function Sd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pp(){let i=ho("canvas");return i.style.display="block",i}var pu={};function Zr(i){i in pu||(pu[i]=!0,console.warn(i))}var mu=new Dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gu=new Dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pa={[ji]:{transfer:ao,primaries:oo,toReference:i=>i,fromReference:i=>i},[Xn]:{transfer:pn,primaries:oo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ko]:{transfer:ao,primaries:lo,toReference:i=>i.applyMatrix3(gu),fromReference:i=>i.applyMatrix3(mu)},[zc]:{transfer:pn,primaries:lo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(gu),fromReference:i=>i.applyMatrix3(mu).convertLinearToSRGB()}},Ip=new Set([ji,ko]),nn={enabled:!0,_workingColorSpace:ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ip.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Pa[e].toReference,s=Pa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Pa[i].primaries},getTransfer:function(i){return i===Mi?ao:Pa[i].transfer}};function Tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ml(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rr,uo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=ho("canvas")),rr.width=e.width,rr.height=e.height;let n=rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ho("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tr(t[n]/255)*255):t[n]=Tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lp=0,fo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Nr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bl(s[a].image)):r.push(bl(s[a]))}else r=bl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dp=0,bi=class i extends Ms{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ii,s=Ii,r=vi,a=na,o=Li,l=_s,c=i.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Nr(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vs?Xn:Mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ta:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ta:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xn?Vs:vd}set encoding(e){Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vs?Xn:Mi}};bi.DEFAULT_IMAGE=null;bi.DEFAULT_MAPPING=dd;bi.DEFAULT_ANISOTROPY=1;var Vn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],m=l[8],p=l[1],u=l[5],x=l[9],M=l[2],y=l[6],g=l[10];if(Math.abs(h-p)<.01&&Math.abs(m-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(h+p)<.1&&Math.abs(m+M)<.1&&Math.abs(x+y)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,A=(u+1)/2,U=(g+1)/2,I=(h+p)/4,L=(m+M)/4,q=(x+y)/4;return v>A&&v>U?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=I/n,r=L/n):A>U?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=I/s,r=q/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=L/r,s=q/r),this.set(n,s,r,t),this}let b=Math.sqrt((y-x)*(y-x)+(m-M)*(m-M)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(y-x)/b,this.y=(m-M)/b,this.z=(p-h)/b,this.w=Math.acos((c+u+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tc=class extends Ms{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vn(0,0,e,t),this.scissorTest=!1,this.viewport=new Vn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vs?Xn:Mi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new bi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qi=class extends tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},po=class extends bi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nc=class extends bi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bs=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],p=r[a+0],u=r[a+1],x=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=m;return}if(o===1){e[t+0]=p,e[t+1]=u,e[t+2]=x,e[t+3]=M;return}if(m!==M||l!==p||c!==u||h!==x){let y=1-o,g=l*p+c*u+h*x+m*M,b=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let U=Math.sqrt(v),I=Math.atan2(U,g*b);y=Math.sin(y*I)/U,o=Math.sin(o*I)/U}let A=o*b;if(l=l*y+p*A,c=c*y+u*A,h=h*y+x*A,m=m*y+M*A,y===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=U,c*=U,h*=U,m*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],p=r[a+1],u=r[a+2],x=r[a+3];return e[t]=o*x+h*m+l*u-c*p,e[t+1]=l*x+h*p+c*m-o*u,e[t+2]=c*x+h*u+o*p-l*m,e[t+3]=h*x-o*m-l*p-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),p=l(n/2),u=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=p*h*m+c*u*x,this._y=c*u*m-p*h*x,this._z=c*h*x+p*u*m,this._w=c*h*m-p*u*x;break;case"YXZ":this._x=p*h*m+c*u*x,this._y=c*u*m-p*h*x,this._z=c*h*x-p*u*m,this._w=c*h*m+p*u*x;break;case"ZXY":this._x=p*h*m-c*u*x,this._y=c*u*m+p*h*x,this._z=c*h*x+p*u*m,this._w=c*h*m-p*u*x;break;case"ZYX":this._x=p*h*m-c*u*x,this._y=c*u*m+p*h*x,this._z=c*h*x-p*u*m,this._w=c*h*m+p*u*x;break;case"YZX":this._x=p*h*m+c*u*x,this._y=c*u*m+p*h*x,this._z=c*h*x-p*u*m,this._w=c*h*m-p*u*x;break;case"XZY":this._x=p*h*m-c*u*x,this._y=c*u*m-p*h*x,this._z=c*h*x+p*u*m,this._w=c*h*m+p*u*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],m=t[10],p=n+o+m;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>m){let u=2*Math.sqrt(1+n-o-m);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>m){let u=2*Math.sqrt(1+o-n-m);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+m-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),m=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*m+this._w*p,this._x=n*m+this._x*p,this._y=s*m+this._y*p,this._z=r*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sl=new B,yu=new bs,Gs=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ai):Ai.fromBufferAttribute(r,a),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),La.subVectors(this.max,qr),ar.subVectors(e.a,qr),or.subVectors(e.b,qr),lr.subVectors(e.c,qr),hs.subVectors(or,ar),us.subVectors(lr,or),Ds.subVectors(ar,lr);let t=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Ds.z,Ds.y,hs.z,0,-hs.x,us.z,0,-us.x,Ds.z,0,-Ds.x,-hs.y,hs.x,0,-us.y,us.x,0,-Ds.y,Ds.x,0];return!El(t,ar,or,lr,La)||(t=[1,0,0,0,1,0,0,0,1],!El(t,ar,or,lr,La))?!1:(Da.crossVectors(hs,us),t=[Da.x,Da.y,Da.z],El(t,ar,or,lr,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xi=[new B,new B,new B,new B,new B,new B,new B,new B],Ai=new B,Ia=new Gs,ar=new B,or=new B,lr=new B,hs=new B,us=new B,Ds=new B,qr=new B,La=new B,Da=new B,Us=new B;function El(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Us.fromArray(i,r);let o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),h=n.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Up=new Gs,Yr=new B,Tl=new B,Pr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Up.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);let t=Yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Yr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(Tl)),this.expandByPoint(Yr.copy(e.center).sub(Tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},qi=new B,wl=new B,Ua=new B,ds=new B,Al=new B,Na=new B,Rl=new B,sa=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wl.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(wl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ua),o=ds.dot(this.direction),l=-ds.dot(Ua),c=ds.lengthSq(),h=Math.abs(1-a*a),m,p,u,x;if(h>0)if(m=a*l-o,p=a*o-l,x=r*h,m>=0)if(p>=-x)if(p<=x){let M=1/h;m*=M,p*=M,u=m*(m+a*p+2*o)+p*(a*m+p+2*l)+c}else p=r,m=Math.max(0,-(a*p+o)),u=-m*m+p*(p+2*l)+c;else p=-r,m=Math.max(0,-(a*p+o)),u=-m*m+p*(p+2*l)+c;else p<=-x?(m=Math.max(0,-(-a*r+o)),p=m>0?-r:Math.min(Math.max(-r,-l),r),u=-m*m+p*(p+2*l)+c):p<=x?(m=0,p=Math.min(Math.max(-r,-l),r),u=p*(p+2*l)+c):(m=Math.max(0,-(a*r+o)),p=m>0?r:Math.min(Math.max(-r,-l),r),u=-m*m+p*(p+2*l)+c);else p=a>0?-r:r,m=Math.max(0,-(a*p+o)),u=-m*m+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(wl).addScaledVector(Ua,p),u}intersectSphere(e,t){qi.subVectors(e.center,this.origin);let n=qi.dot(this.direction),s=qi.dot(qi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-p.z)*m,l=(e.max.z-p.z)*m):(o=(e.max.z-p.z)*m,l=(e.min.z-p.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,s,r){Al.subVectors(t,e),Na.subVectors(n,e),Rl.crossVectors(Al,Na);let a=this.direction.dot(Rl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ds.subVectors(this.origin,e);let l=o*this.direction.dot(Na.crossVectors(ds,Na));if(l<0)return null;let c=o*this.direction.dot(Al.cross(ds));if(c<0||l+c>a)return null;let h=-o*ds.dot(Rl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class i{constructor(e,t,n,s,r,a,o,l,c,h,m,p,u,x,M,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,m,p,u,x,M,y)}set(e,t,n,s,r,a,o,l,c,h,m,p,u,x,M,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=m,g[14]=p,g[3]=u,g[7]=x,g[11]=M,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let p=a*h,u=a*m,x=o*h,M=o*m;t[0]=l*h,t[4]=-l*m,t[8]=c,t[1]=u+x*c,t[5]=p-M*c,t[9]=-o*l,t[2]=M-p*c,t[6]=x+u*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,u=l*m,x=c*h,M=c*m;t[0]=p+M*o,t[4]=x*o-u,t[8]=a*c,t[1]=a*m,t[5]=a*h,t[9]=-o,t[2]=u*o-x,t[6]=M+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,u=l*m,x=c*h,M=c*m;t[0]=p-M*o,t[4]=-a*m,t[8]=x+u*o,t[1]=u+x*o,t[5]=a*h,t[9]=M-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,u=a*m,x=o*h,M=o*m;t[0]=l*h,t[4]=x*c-u,t[8]=p*c+M,t[1]=l*m,t[5]=M*c+p,t[9]=u*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,u=a*c,x=o*l,M=o*c;t[0]=l*h,t[4]=M-p*m,t[8]=x*m+u,t[1]=m,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*m+x,t[10]=p-M*m}else if(e.order==="XZY"){let p=a*l,u=a*c,x=o*l,M=o*c;t[0]=l*h,t[4]=-m,t[8]=c*h,t[1]=p*m+M,t[5]=a*h,t[9]=u*m-x,t[2]=x*m-u,t[6]=o*h,t[10]=M*m+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Np,e,Op)}lookAt(e,t,n){let s=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),fs.crossVectors(n,ui),fs.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),fs.crossVectors(n,ui)),fs.normalize(),Oa.crossVectors(ui,fs),s[0]=fs.x,s[4]=Oa.x,s[8]=ui.x,s[1]=fs.y,s[5]=Oa.y,s[9]=ui.y,s[2]=fs.z,s[6]=Oa.z,s[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],p=n[9],u=n[13],x=n[2],M=n[6],y=n[10],g=n[14],b=n[3],v=n[7],A=n[11],U=n[15],I=s[0],L=s[4],q=s[8],T=s[12],R=s[1],Y=s[5],ae=s[9],Me=s[13],F=s[2],W=s[6],z=s[10],V=s[14],$=s[3],ie=s[7],re=s[11],le=s[15];return r[0]=a*I+o*R+l*F+c*$,r[4]=a*L+o*Y+l*W+c*ie,r[8]=a*q+o*ae+l*z+c*re,r[12]=a*T+o*Me+l*V+c*le,r[1]=h*I+m*R+p*F+u*$,r[5]=h*L+m*Y+p*W+u*ie,r[9]=h*q+m*ae+p*z+u*re,r[13]=h*T+m*Me+p*V+u*le,r[2]=x*I+M*R+y*F+g*$,r[6]=x*L+M*Y+y*W+g*ie,r[10]=x*q+M*ae+y*z+g*re,r[14]=x*T+M*Me+y*V+g*le,r[3]=b*I+v*R+A*F+U*$,r[7]=b*L+v*Y+A*W+U*ie,r[11]=b*q+v*ae+A*z+U*re,r[15]=b*T+v*Me+A*V+U*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],m=e[6],p=e[10],u=e[14],x=e[3],M=e[7],y=e[11],g=e[15];return x*(+r*l*m-s*c*m-r*o*p+n*c*p+s*o*u-n*l*u)+M*(+t*l*u-t*c*p+r*a*p-s*a*u+s*c*h-r*l*h)+y*(+t*c*m-t*o*u-r*a*m+n*a*u+r*o*h-n*c*h)+g*(-s*o*h-t*l*m+t*o*p+s*a*m-n*a*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],m=e[9],p=e[10],u=e[11],x=e[12],M=e[13],y=e[14],g=e[15],b=m*y*c-M*p*c+M*l*u-o*y*u-m*l*g+o*p*g,v=x*p*c-h*y*c-x*l*u+a*y*u+h*l*g-a*p*g,A=h*M*c-x*m*c+x*o*u-a*M*u-h*o*g+a*m*g,U=x*m*l-h*M*l-x*o*p+a*M*p+h*o*y-a*m*y,I=t*b+n*v+s*A+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=b*L,e[1]=(M*p*r-m*y*r-M*s*u+n*y*u+m*s*g-n*p*g)*L,e[2]=(o*y*r-M*l*r+M*s*c-n*y*c-o*s*g+n*l*g)*L,e[3]=(m*l*r-o*p*r-m*s*c+n*p*c+o*s*u-n*l*u)*L,e[4]=v*L,e[5]=(h*y*r-x*p*r+x*s*u-t*y*u-h*s*g+t*p*g)*L,e[6]=(x*l*r-a*y*r-x*s*c+t*y*c+a*s*g-t*l*g)*L,e[7]=(a*p*r-h*l*r+h*s*c-t*p*c-a*s*u+t*l*u)*L,e[8]=A*L,e[9]=(x*m*r-h*M*r-x*n*u+t*M*u+h*n*g-t*m*g)*L,e[10]=(a*M*r-x*o*r+x*n*c-t*M*c-a*n*g+t*o*g)*L,e[11]=(h*o*r-a*m*r-h*n*c+t*m*c+a*n*u-t*o*u)*L,e[12]=U*L,e[13]=(h*M*s-x*m*s+x*n*p-t*M*p-h*n*y+t*m*y)*L,e[14]=(x*o*s-a*M*s-x*n*l+t*M*l+a*n*y-t*o*y)*L,e[15]=(a*m*s-h*o*s+h*n*l-t*m*l-a*n*p+t*o*p)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,m=o+o,p=r*c,u=r*h,x=r*m,M=a*h,y=a*m,g=o*m,b=l*c,v=l*h,A=l*m,U=n.x,I=n.y,L=n.z;return s[0]=(1-(M+g))*U,s[1]=(u+A)*U,s[2]=(x-v)*U,s[3]=0,s[4]=(u-A)*I,s[5]=(1-(p+g))*I,s[6]=(y+b)*I,s[7]=0,s[8]=(x+v)*L,s[9]=(y-b)*L,s[10]=(1-(p+M))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=cr.set(s[0],s[1],s[2]).length(),a=cr.set(s[4],s[5],s[6]).length(),o=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ri.copy(this);let c=1/r,h=1/a,m=1/o;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=m,Ri.elements[9]*=m,Ri.elements[10]*=m,t.setFromRotationMatrix(Ri),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ji){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),m=(t+e)/(t-e),p=(n+s)/(n-s),u,x;if(o===Ji)u=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===co)u=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ji){let l=this.elements,c=1/(t-e),h=1/(n-s),m=1/(a-r),p=(t+e)*c,u=(n+s)*h,x,M;if(o===Ji)x=(a+r)*m,M=-2*m;else if(o===co)x=r*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cr=new B,Ri=new Ln,Np=new B(0,0,0),Op=new B(1,1,1),fs=new B,Oa=new B,ui=new B,xu=new Ln,_u=new bs,mo=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],p=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _u.setFromEuler(this),this.setFromQuaternion(_u,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mo.DEFAULT_ORDER="XYZ";var ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fp=0,vu=new B,hr=new bs,Yi=new Ln,Fa=new B,$r=new B,Bp=new B,kp=new bs,Mu=new B(1,0,0),bu=new B(0,1,0),Su=new B(0,0,1),Hp={type:"added"},zp={type:"removed"},ti=class i extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new mo,n=new bs,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ln},normalMatrix:{value:new Dt}}),this.matrix=new Ln,this.matrixWorld=new Ln,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Mu,e)}rotateY(e){return this.rotateOnAxis(bu,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return vu.copy(e).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mu,e)}translateY(e){return this.translateOnAxis(bu,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fa.copy(e):Fa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt($r,Fa,this.up):Yi.lookAt(Fa,$r,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Yi),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),m=a(e.shapes),p=a(e.skeletons),u=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ti.DEFAULT_UP=new B(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ci=new B,$i=new B,Cl=new B,Ki=new B,ur=new B,dr=new B,Eu=new B,Pl=new B,Il=new B,Ll=new B,Ba=!1,vr=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ci.subVectors(e,t),s.cross(Ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ci.subVectors(s,t),$i.subVectors(n,t),Cl.subVectors(e,t);let a=Ci.dot(Ci),o=Ci.dot($i),l=Ci.dot(Cl),c=$i.dot($i),h=$i.dot(Cl),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let p=1/m,u=(c*l-o*h)*p,x=(a*h-o*l)*p;return r.set(1-u-x,x,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getUV(e,t,n,s,r,a,o,l){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(a,Ki.y),l.addScaledVector(o,Ki.z),l)}static isFrontFacing(e,t,n,s){return Ci.subVectors(n,t),$i.subVectors(e,t),Ci.cross($i).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Ci.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ur.subVectors(s,n),dr.subVectors(r,n),Pl.subVectors(e,n);let l=ur.dot(Pl),c=dr.dot(Pl);if(l<=0&&c<=0)return t.copy(n);Il.subVectors(e,s);let h=ur.dot(Il),m=dr.dot(Il);if(h>=0&&m<=h)return t.copy(s);let p=l*m-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ur,a);Ll.subVectors(e,r);let u=ur.dot(Ll),x=dr.dot(Ll);if(x>=0&&u<=x)return t.copy(r);let M=u*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(dr,o);let y=h*x-u*m;if(y<=0&&m-h>=0&&u-x>=0)return Eu.subVectors(r,s),o=(m-h)/(m-h+(u-x)),t.copy(s).addScaledVector(Eu,o);let g=1/(y+M+p);return a=M*g,o=p*g,t.copy(n).addScaledVector(ur,a).addScaledVector(dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Dl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var vt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nn.workingColorSpace){return this.r=e,this.g=t,this.b=n,nn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nn.workingColorSpace){if(e=Cp(e,1),t=Zn(t,0,1),n=Zn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Dl(a,r,e+1/3),this.g=Dl(a,r,e),this.b=Dl(a,r,e-1/3)}return nn.toWorkingColorSpace(this,s),this}setStyle(e,t=Xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){let n=Ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Ml(e.r),this.g=Ml(e.g),this.b=Ml(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return nn.fromWorkingColorSpace(Kn.copy(this),e),Math.round(Zn(Kn.r*255,0,255))*65536+Math.round(Zn(Kn.g*255,0,255))*256+Math.round(Zn(Kn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nn.workingColorSpace){nn.fromWorkingColorSpace(Kn.copy(this),t);let n=Kn.r,s=Kn.g,r=Kn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nn.workingColorSpace){return nn.fromWorkingColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Xn){nn.fromWorkingColorSpace(Kn.copy(this),e);let t=Kn.r,n=Kn.g,s=Kn.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(ka);let n=_l(ps.h,ka.h,t),s=_l(ps.s,ka.s,t),r=_l(ps.l,ka.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kn=new vt;vt.NAMES=Ed;var Vp=0,Ss=class extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=Er,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=$l,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(n.blending=this.blending),this.side!==vs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yl&&(n.blendSrc=this.blendSrc),this.blendDst!==$l&&(n.blendDst=this.blendDst),this.blendEquation!==Bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},bn=class extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var In=new B,Ha=new He,ri=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix3(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array),s=ii(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array),s=ii(s,this.array),r=ii(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uu&&(e.usage=this.usage),e}};var go=class extends ri{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yo=class extends ri{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mn=class extends ri{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Gp=0,_i=new Ln,Ul=new ti,fr=new B,di=new Gs,Kr=new Gs,zn=new B,ai=class i extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sd(e)?yo:go)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return Ul.lookAt(e),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];di.setFromBufferAttribute(r),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(zn.addVectors(di.min,Kr.min),di.expandByPoint(zn),zn.addVectors(di.max,Kr.max),di.expandByPoint(zn)):(di.expandByPoint(Kr.min),di.expandByPoint(Kr.max))}di.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)zn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zn.fromBufferAttribute(o,c),l&&(fr.fromBufferAttribute(e,c),zn.add(fr)),s=Math.max(s,n.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new B,h[R]=new B;let m=new B,p=new B,u=new B,x=new He,M=new He,y=new He,g=new B,b=new B;function v(R,Y,ae){m.fromArray(s,R*3),p.fromArray(s,Y*3),u.fromArray(s,ae*3),x.fromArray(a,R*2),M.fromArray(a,Y*2),y.fromArray(a,ae*2),p.sub(m),u.sub(m),M.sub(x),y.sub(x);let Me=1/(M.x*y.y-y.x*M.y);isFinite(Me)&&(g.copy(p).multiplyScalar(y.y).addScaledVector(u,-M.y).multiplyScalar(Me),b.copy(u).multiplyScalar(M.x).addScaledVector(p,-y.x).multiplyScalar(Me),c[R].add(g),c[Y].add(g),c[ae].add(g),h[R].add(b),h[Y].add(b),h[ae].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let R=0,Y=A.length;R<Y;++R){let ae=A[R],Me=ae.start,F=ae.count;for(let W=Me,z=Me+F;W<z;W+=3)v(n[W+0],n[W+1],n[W+2])}let U=new B,I=new B,L=new B,q=new B;function T(R){L.fromArray(r,R*3),q.copy(L);let Y=c[R];U.copy(Y),U.sub(L.multiplyScalar(L.dot(Y))).normalize(),I.crossVectors(q,Y);let Me=I.dot(h[R])<0?-1:1;l[R*4]=U.x,l[R*4+1]=U.y,l[R*4+2]=U.z,l[R*4+3]=Me}for(let R=0,Y=A.length;R<Y;++R){let ae=A[R],Me=ae.start,F=ae.count;for(let W=Me,z=Me+F;W<z;W+=3)T(n[W+0]),T(n[W+1]),T(n[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,m=new B;if(e)for(let p=0,u=e.count;p<u;p+=3){let x=e.getX(p+0),M=e.getX(p+1),y=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,y),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,y),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let p=0,u=t.count;p<u;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zn.fromBufferAttribute(e,t),zn.normalize(),e.setXYZ(t,zn.x,zn.y,zn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,m=o.normalized,p=new c.constructor(l.length*h),u=0,x=0;for(let M=0,y=l.length;M<y;M++){o.isInterleavedBufferAttribute?u=l[M]*o.data.stride+o.offset:u=l[M]*h;for(let g=0;g<h;g++)p[x++]=c[u++]}return new ri(p,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let p=c[h],u=e(p,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,p=c.length;m<p;m++){let u=c[m];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],m=r[c];for(let p=0,u=m.length;p<u;p++)h.push(m[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tu=new Ln,Ns=new sa,za=new Pr,wu=new B,pr=new B,mr=new B,gr=new B,Nl=new B,Va=new B,Ga=new He,Wa=new He,Xa=new He,Au=new B,Ru=new B,Cu=new B,qa=new B,Ya=new B,qe=class extends ti{constructor(e=new ai,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(Nl.fromBufferAttribute(m,e),a?Va.addScaledVector(Nl,h):Va.addScaledVector(Nl.sub(t),h))}t.add(Va)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(za.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(za,wu)===null||Ns.origin.distanceToSquared(wu)>(e.far-e.near)**2))&&(Tu.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(Tu),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,p=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=p.length;x<M;x++){let y=p[x],g=a[y.materialIndex],b=Math.max(y.start,u.start),v=Math.min(o.count,Math.min(y.start+y.count,u.start+u.count));for(let A=b,U=v;A<U;A+=3){let I=o.getX(A),L=o.getX(A+1),q=o.getX(A+2);s=$a(this,g,e,n,c,h,m,I,L,q),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,u.start),M=Math.min(o.count,u.start+u.count);for(let y=x,g=M;y<g;y+=3){let b=o.getX(y),v=o.getX(y+1),A=o.getX(y+2);s=$a(this,a,e,n,c,h,m,b,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=p.length;x<M;x++){let y=p[x],g=a[y.materialIndex],b=Math.max(y.start,u.start),v=Math.min(l.count,Math.min(y.start+y.count,u.start+u.count));for(let A=b,U=v;A<U;A+=3){let I=A,L=A+1,q=A+2;s=$a(this,g,e,n,c,h,m,I,L,q),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,u.start),M=Math.min(l.count,u.start+u.count);for(let y=x,g=M;y<g;y+=3){let b=y,v=y+1,A=y+2;s=$a(this,a,e,n,c,h,m,b,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function Wp(i,e,t,n,s,r,a,o){let l;if(e.side===si?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===vs,o),l===null)return null;Ya.copy(o),Ya.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:i}}function $a(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,pr),i.getVertexPosition(l,mr),i.getVertexPosition(c,gr);let h=Wp(i,e,t,n,pr,mr,gr,qa);if(h){s&&(Ga.fromBufferAttribute(s,o),Wa.fromBufferAttribute(s,l),Xa.fromBufferAttribute(s,c),h.uv=vr.getInterpolation(qa,pr,mr,gr,Ga,Wa,Xa,new He)),r&&(Ga.fromBufferAttribute(r,o),Wa.fromBufferAttribute(r,l),Xa.fromBufferAttribute(r,c),h.uv1=vr.getInterpolation(qa,pr,mr,gr,Ga,Wa,Xa,new He),h.uv2=h.uv1),a&&(Au.fromBufferAttribute(a,o),Ru.fromBufferAttribute(a,l),Cu.fromBufferAttribute(a,c),h.normal=vr.getInterpolation(qa,pr,mr,gr,Au,Ru,Cu,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a:o,b:l,c,normal:new B,materialIndex:0};vr.getNormal(pr,mr,gr,m.normal),h.face=m}return h}var Nn=class i extends ai{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],p=0,u=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(h,3)),this.setAttribute("uv",new Mn(m,2));function x(M,y,g,b,v,A,U,I,L,q,T){let R=A/L,Y=U/q,ae=A/2,Me=U/2,F=I/2,W=L+1,z=q+1,V=0,$=0,ie=new B;for(let re=0;re<z;re++){let le=re*Y-Me;for(let Ae=0;Ae<W;Ae++){let Z=Ae*R-ae;ie[M]=Z*b,ie[y]=le*v,ie[g]=F,c.push(ie.x,ie.y,ie.z),ie[M]=0,ie[y]=0,ie[g]=I>0?1:-1,h.push(ie.x,ie.y,ie.z),m.push(Ae/L),m.push(1-re/q),V+=1}}for(let re=0;re<q;re++)for(let le=0;le<L;le++){let Ae=p+le+W*re,Z=p+le+W*(re+1),fe=p+(le+1)+W*(re+1),we=p+(le+1)+W*re;l.push(Ae,Z,we),l.push(Z,fe,we),$+=6}o.addGroup(u,$,T),u+=$,p+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function jn(i){let e={};for(let t=0;t<i.length;t++){let n=Ir(i[t]);for(let s in n)e[s]=n[s]}return e}function Xp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Td(i){return i.getRenderTarget()===null?i.outputColorSpace:nn.workingColorSpace}var qp={clone:Ir,merge:jn},Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,es=class extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=Xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xo=class extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ln,this.projectionMatrix=new Ln,this.projectionMatrixInverse=new Ln,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=class extends xo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ql*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ql*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yr=-90,xr=1,ic=class extends ti{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ei(yr,xr,e,t);s.layers=this.layers,this.add(s);let r=new ei(yr,xr,e,t);r.layers=this.layers,this.add(r);let a=new ei(yr,xr,e,t);a.layers=this.layers,this.add(a);let o=new ei(yr,xr,e,t);o.layers=this.layers,this.add(o);let l=new ei(yr,xr,e,t);l.layers=this.layers,this.add(l);let c=new ei(yr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(m,p,u),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},_o=class extends bi{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sc=class extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vs?Xn:Mi),this.texture=new _o(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nn(5,5,5),r=new es({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:si,blending:ys});r.uniforms.tEquirect.value=t;let a=new qe(s,r),o=t.minFilter;return t.minFilter===na&&(t.minFilter=vi),new ic(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ol=new B,Kp=new B,Zp=new Dt,Pi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ol.subVectors(n,t).cross(Kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zp.getNormalMatrix(e),s=this.coplanarPoint(Ol).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Os=new Pr,Ka=new B,aa=class{constructor(e=new Pi,t=new Pi,n=new Pi,s=new Pi,r=new Pi,a=new Pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ji){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],m=s[6],p=s[7],u=s[8],x=s[9],M=s[10],y=s[11],g=s[12],b=s[13],v=s[14],A=s[15];if(n[0].setComponents(l-r,p-c,y-u,A-g).normalize(),n[1].setComponents(l+r,p+c,y+u,A+g).normalize(),n[2].setComponents(l+a,p+h,y+x,A+b).normalize(),n[3].setComponents(l-a,p-h,y-x,A-b).normalize(),n[4].setComponents(l-o,p-m,y-M,A-v).normalize(),t===Ji)n[5].setComponents(l+o,p+m,y+M,A+v).normalize();else if(t===co)n[5].setComponents(o,m,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ka.x=s.normal.x>0?e.max.x:e.min.x,Ka.y=s.normal.y>0?e.max.y:e.min.y,Ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let m=c.array,p=c.usage,u=m.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,m,p),c.onUploadCallback();let M;if(m instanceof Float32Array)M=i.FLOAT;else if(m instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=i.SHORT;else if(m instanceof Uint32Array)M=i.UNSIGNED_INT;else if(m instanceof Int32Array)M=i.INT;else if(m instanceof Int8Array)M=i.BYTE;else if(m instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,m){let p=h.array,u=h._updateRange,x=h.updateRanges;if(i.bindBuffer(m,c),u.count===-1&&x.length===0&&i.bufferSubData(m,0,p),x.length!==0){for(let M=0,y=x.length;M<y;M++){let g=x[M];t?i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count):i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(m,u.offset*p.BYTES_PER_ELEMENT,p,u.offset,u.count):i.bufferSubData(m,u.offset*p.BYTES_PER_ELEMENT,p.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let m=n.get(c);if(m===void 0)n.set(c,s(c,h));else if(m.version<c.version){if(m.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,c,h),m.version=c.version}}return{get:a,remove:o,update:l}}var Bi=class i extends ai{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=e/o,p=t/l,u=[],x=[],M=[],y=[];for(let g=0;g<h;g++){let b=g*p-a;for(let v=0;v<c;v++){let A=v*m-r;x.push(A,-b,0),M.push(0,0,1),y.push(v/o),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){let v=b+c*g,A=b+c*(g+1),U=b+1+c*(g+1),I=b+1+c*g;u.push(v,A,I),u.push(A,U,I)}this.setIndex(u),this.setAttribute("position",new Mn(x,3)),this.setAttribute("normal",new Mn(M,3)),this.setAttribute("uv",new Mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qp=`#ifdef USE_ALPHAHASH
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
#endif`,em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sm=`#ifdef USE_AOMAP
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
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am=`#ifdef USE_BATCHING
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
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,um=`#ifdef USE_IRIDESCENCE
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
#endif`,dm=`#ifdef USE_BUMPMAP
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mm=`#define PI 3.141592653589793
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
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sm=`vec3 transformedNormal = objectNormal;
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
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cm=`
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
}`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
}`,Hm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
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
#endif`,Jm=`struct PhysicalMaterial {
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
}`,jm=`
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lg=`#if defined( USE_POINTS_UV )
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
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
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
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
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
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
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
#endif`,Mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Og=`float getShadowMask() {
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
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`#include <common>
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
}`,s0=`#if DEPTH_PACKING == 3200
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
}`,r0=`#define DISTANCE
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
}`,a0=`#define DISTANCE
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define MATCAP
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
}`,g0=`#define MATCAP
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
}`,y0=`#define NORMAL
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
}`,x0=`#define NORMAL
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
}`,_0=`#define PHONG
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
}`,v0=`#define PHONG
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
}`,M0=`#define STANDARD
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
}`,b0=`#define STANDARD
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
}`,S0=`#define TOON
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
}`,E0=`#define TOON
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
}`,T0=`uniform float size;
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
}`,w0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 color;
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
}`,C0=`uniform float rotation;
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
}`,P0=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:jp,alphahash_pars_fragment:Qp,alphamap_fragment:em,alphamap_pars_fragment:tm,alphatest_fragment:nm,alphatest_pars_fragment:im,aomap_fragment:sm,aomap_pars_fragment:rm,batching_pars_vertex:am,batching_vertex:om,begin_vertex:lm,beginnormal_vertex:cm,bsdfs:hm,iridescence_fragment:um,bumpmap_pars_fragment:dm,clipping_planes_fragment:fm,clipping_planes_pars_fragment:pm,clipping_planes_pars_vertex:mm,clipping_planes_vertex:gm,color_fragment:ym,color_pars_fragment:xm,color_pars_vertex:_m,color_vertex:vm,common:Mm,cube_uv_reflection_fragment:bm,defaultnormal_vertex:Sm,displacementmap_pars_vertex:Em,displacementmap_vertex:Tm,emissivemap_fragment:wm,emissivemap_pars_fragment:Am,colorspace_fragment:Rm,colorspace_pars_fragment:Cm,envmap_fragment:Pm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Lm,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Xm,envmap_vertex:Um,fog_vertex:Nm,fog_pars_vertex:Om,fog_fragment:Fm,fog_pars_fragment:Bm,gradientmap_pars_fragment:km,lightmap_fragment:Hm,lightmap_pars_fragment:zm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Gm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:Ym,lights_phong_fragment:$m,lights_phong_pars_fragment:Km,lights_physical_fragment:Zm,lights_physical_pars_fragment:Jm,lights_fragment_begin:jm,lights_fragment_maps:Qm,lights_fragment_end:eg,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:ig,logdepthbuf_vertex:sg,map_fragment:rg,map_pars_fragment:ag,map_particle_fragment:og,map_particle_pars_fragment:lg,metalnessmap_fragment:cg,metalnessmap_pars_fragment:hg,morphcolor_vertex:ug,morphnormal_vertex:dg,morphtarget_pars_vertex:fg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:yg,normal_pars_vertex:xg,normal_vertex:_g,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:Mg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:Sg,iridescence_pars_fragment:Eg,opaque_fragment:Tg,packing:wg,premultiplied_alpha_fragment:Ag,project_vertex:Rg,dithering_fragment:Cg,dithering_pars_fragment:Pg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Dg,shadowmap_pars_vertex:Ug,shadowmap_vertex:Ng,shadowmask_pars_fragment:Og,skinbase_vertex:Fg,skinning_pars_vertex:Bg,skinning_vertex:kg,skinnormal_vertex:Hg,specularmap_fragment:zg,specularmap_pars_fragment:Vg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:qg,uv_pars_fragment:Yg,uv_pars_vertex:$g,uv_vertex:Kg,worldpos_vertex:Zg,background_vert:Jg,background_frag:jg,backgroundCube_vert:Qg,backgroundCube_frag:e0,cube_vert:t0,cube_frag:n0,depth_vert:i0,depth_frag:s0,distanceRGBA_vert:r0,distanceRGBA_frag:a0,equirect_vert:o0,equirect_frag:l0,linedashed_vert:c0,linedashed_frag:h0,meshbasic_vert:u0,meshbasic_frag:d0,meshlambert_vert:f0,meshlambert_frag:p0,meshmatcap_vert:m0,meshmatcap_frag:g0,meshnormal_vert:y0,meshnormal_frag:x0,meshphong_vert:_0,meshphong_frag:v0,meshphysical_vert:M0,meshphysical_frag:b0,meshtoon_vert:S0,meshtoon_frag:E0,points_vert:T0,points_frag:w0,shadow_vert:A0,shadow_frag:R0,sprite_vert:C0,sprite_frag:P0},Ie={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Fi={basic:{uniforms:jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:jn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:jn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:jn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:jn([Ie.points,Ie.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:jn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:jn([Ie.common,Ie.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:jn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:jn([Ie.sprite,Ie.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:jn([Ie.common,Ie.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:jn([Ie.lights,Ie.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Fi.physical={uniforms:jn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};var Za={r:0,b:0,g:0};function I0(i,e,t,n,s,r,a){let o=new vt(0),l=r===!0?0:1,c,h,m=null,p=0,u=null;function x(y,g){let b=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?M(o,l):v&&v.isColor&&(M(v,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Bo)?(h===void 0&&(h=new qe(new Nn(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:Ir(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=nn.getTransfer(v.colorSpace)!==pn,(m!==v||p!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,m=v,p=v.version,u=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new qe(new Bi(2,2),new es({name:"BackgroundMaterial",uniforms:Ir(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=nn.getTransfer(v.colorSpace)!==pn,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(m!==v||p!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,m=v,p=v.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function M(y,g){y.getRGB(Za,Td(i)),n.buffers.color.setClear(Za.r,Za.g,Za.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(y,g=1){o.set(y),l=g,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,M(o,l)},render:x}}function L0(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=y(null),c=l,h=!1;function m(F,W,z,V,$){let ie=!1;if(a){let re=M(V,z,W);c!==re&&(c=re,u(c.object)),ie=g(F,V,z,$),ie&&b(F,V,z,$)}else{let re=W.wireframe===!0;(c.geometry!==V.id||c.program!==z.id||c.wireframe!==re)&&(c.geometry=V.id,c.program=z.id,c.wireframe=re,ie=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(ie||h)&&(h=!1,q(F,W,z,V),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function x(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function M(F,W,z){let V=z.wireframe===!0,$=o[F.id];$===void 0&&($={},o[F.id]=$);let ie=$[W.id];ie===void 0&&(ie={},$[W.id]=ie);let re=ie[V];return re===void 0&&(re=y(p()),ie[V]=re),re}function y(F){let W=[],z=[],V=[];for(let $=0;$<s;$++)W[$]=0,z[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:z,attributeDivisors:V,object:F,attributes:{},index:null}}function g(F,W,z,V){let $=c.attributes,ie=W.attributes,re=0,le=z.getAttributes();for(let Ae in le)if(le[Ae].location>=0){let fe=$[Ae],we=ie[Ae];if(we===void 0&&(Ae==="instanceMatrix"&&F.instanceMatrix&&(we=F.instanceMatrix),Ae==="instanceColor"&&F.instanceColor&&(we=F.instanceColor)),fe===void 0||fe.attribute!==we||we&&fe.data!==we.data)return!0;re++}return c.attributesNum!==re||c.index!==V}function b(F,W,z,V){let $={},ie=W.attributes,re=0,le=z.getAttributes();for(let Ae in le)if(le[Ae].location>=0){let fe=ie[Ae];fe===void 0&&(Ae==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),Ae==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor));let we={};we.attribute=fe,fe&&fe.data&&(we.data=fe.data),$[Ae]=we,re++}c.attributes=$,c.attributesNum=re,c.index=V}function v(){let F=c.newAttributes;for(let W=0,z=F.length;W<z;W++)F[W]=0}function A(F){U(F,0)}function U(F,W){let z=c.newAttributes,V=c.enabledAttributes,$=c.attributeDivisors;z[F]=1,V[F]===0&&(i.enableVertexAttribArray(F),V[F]=1),$[F]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,W),$[F]=W)}function I(){let F=c.newAttributes,W=c.enabledAttributes;for(let z=0,V=W.length;z<V;z++)W[z]!==F[z]&&(i.disableVertexAttribArray(z),W[z]=0)}function L(F,W,z,V,$,ie,re){re===!0?i.vertexAttribIPointer(F,W,z,$,ie):i.vertexAttribPointer(F,W,z,V,$,ie)}function q(F,W,z,V){if(n.isWebGL2===!1&&(F.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let $=V.attributes,ie=z.getAttributes(),re=W.defaultAttributeValues;for(let le in ie){let Ae=ie[le];if(Ae.location>=0){let Z=$[le];if(Z===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){let fe=Z.normalized,we=Z.itemSize,Fe=t.get(Z);if(Fe===void 0)continue;let Xe=Fe.buffer,ut=Fe.type,ft=Fe.bytesPerElement,$e=n.isWebGL2===!0&&(ut===i.INT||ut===i.UNSIGNED_INT||Z.gpuType===fd);if(Z.isInterleavedBufferAttribute){let ue=Z.data,J=ue.stride,Ke=Z.offset;if(ue.isInstancedInterleavedBuffer){for(let We=0;We<Ae.locationSize;We++)U(Ae.location+We,ue.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let We=0;We<Ae.locationSize;We++)A(Ae.location+We);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let We=0;We<Ae.locationSize;We++)L(Ae.location+We,we/Ae.locationSize,ut,fe,J*ft,(Ke+we/Ae.locationSize*We)*ft,$e)}else{if(Z.isInstancedBufferAttribute){for(let ue=0;ue<Ae.locationSize;ue++)U(Ae.location+ue,Z.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<Ae.locationSize;ue++)A(Ae.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ue=0;ue<Ae.locationSize;ue++)L(Ae.location+ue,we/Ae.locationSize,ut,fe,we*ft,we/Ae.locationSize*ue*ft,$e)}}else if(re!==void 0){let fe=re[le];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(Ae.location,fe);break;case 3:i.vertexAttrib3fv(Ae.location,fe);break;case 4:i.vertexAttrib4fv(Ae.location,fe);break;default:i.vertexAttrib1fv(Ae.location,fe)}}}}I()}function T(){ae();for(let F in o){let W=o[F];for(let z in W){let V=W[z];for(let $ in V)x(V[$].object),delete V[$];delete W[z]}delete o[F]}}function R(F){if(o[F.id]===void 0)return;let W=o[F.id];for(let z in W){let V=W[z];for(let $ in V)x(V[$].object),delete V[$];delete W[z]}delete o[F.id]}function Y(F){for(let W in o){let z=o[W];if(z[F.id]===void 0)continue;let V=z[F.id];for(let $ in V)x(V[$].object),delete V[$];delete z[F.id]}}function ae(){Me(),h=!0,c!==l&&(c=l,u(c.object))}function Me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:ae,resetDefaultState:Me,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:A,disableUnusedAttributes:I}}function D0(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,m){i.drawArrays(r,h,m),t.update(m,r,1)}function l(h,m,p){if(p===0)return;let u,x;if(s)u=i,x="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[x](r,h,m,p),t.update(m,r,p)}function c(h,m,p){if(p===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let x=0;x<p;x++)this.render(h[x],m[x]);else{u.multiDrawArraysWEBGL(r,h,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=m[M];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function U0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,A=a||e.has("OES_texture_float"),U=v&&A,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:m,maxVertexTextures:p,maxTextureSize:u,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:U,maxSamples:I}}function N0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Pi,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){let u=m.length!==0||p||n!==0||s;return s=p,n=m.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,p){t=h(m,p,0)},this.setState=function(m,p,u){let x=m.clippingPlanes,M=m.clipIntersection,y=m.clipShadows,g=i.get(m);if(!s||x===null||x.length===0||r&&!y)r?h(null):c();else{let b=r?0:n,v=b*4,A=g.clippingState||null;l.value=A,A=h(x,p,v,u);for(let U=0;U!==v;++U)A[U]=t[U];g.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,p,u,x){let M=m!==null?m.length:0,y=null;if(M!==0){if(y=l.value,x!==!0||y===null){let g=u+M*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(y===null||y.length<g)&&(y=new Float32Array(g));for(let v=0,A=u;v!==M;++v,A+=4)a.copy(m[v]).applyMatrix4(b,o),a.normal.toArray(y,A),y[A+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function O0(i){let e=new WeakMap;function t(a,o){return o===Kl?a.mapping=Ar:o===Zl&&(a.mapping=Rr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Kl||o===Zl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new sc(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var vo=class extends xo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mr=4,Pu=[.125,.215,.35,.446,.526,.582],ks=20,Fl=new vo,Iu=new vt,Bl=null,kl=0,Hl=0,Fs=(1+Math.sqrt(5))/2,_r=1/Fs,Lu=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Fs,_r),new B(0,Fs,-_r),new B(_r,0,Fs),new B(-_r,0,Fs),new B(Fs,_r,0),new B(-Fs,_r,0)],Mo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,kl,Hl),e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:ia,format:Li,colorSpace:ji,depthBuffer:!1},s=Du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F0(r)),this._blurMaterial=B0(r,e,t)}return s}_compileMaterial(e){let t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,n,s){let o=new ei(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,p=h.toneMapping;h.getClearColor(Iu),h.toneMapping=xs,h.autoClear=!1;let u=new bn({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),x=new qe(new Nn,u),M=!1,y=e.background;y?y.isColor&&(u.color.copy(y),e.background=null,M=!0):(u.color.copy(Iu),M=!0);for(let g=0;g<6;g++){let b=g%3;b===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):b===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let v=this._cubeSize;Ja(s,b*v,g>2?v:0,v,v),h.setRenderTarget(s),M&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=m,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ar||e.mapping===Rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new qe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lu[(s-1)%Lu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,m=new qe(this._lodPlanes[s],c),p=c.uniforms,u=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ks-1),M=r/x,y=isFinite(r)?1+Math.floor(h*M):ks;y>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ks}`);let g=[],b=0;for(let L=0;L<ks;++L){let q=L/M,T=Math.exp(-q*q/2);g.push(T),L===0?b+=T:L<y&&(b+=2*T)}for(let L=0;L<g.length;L++)g[L]=g[L]/b;p.envMap.value=e.texture,p.samples.value=y,p.weights.value=g,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-n;let A=this._sizeLods[s],U=3*A*(s>v-Mr?s-v+Mr:0),I=4*(this._cubeSize-A);Ja(t,U,I,3*A,2*A),l.setRenderTarget(t),l.render(m,Fl)}};function F0(i){let e=[],t=[],n=[],s=i,r=i-Mr+1+Pu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Mr?l=Pu[a-i+Mr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,m=1+c,p=[h,h,m,h,m,m,h,h,m,m,h,m],u=6,x=6,M=3,y=2,g=1,b=new Float32Array(M*x*u),v=new Float32Array(y*x*u),A=new Float32Array(g*x*u);for(let I=0;I<u;I++){let L=I%3*2/3-1,q=I>2?0:-1,T=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];b.set(T,M*x*I),v.set(p,y*x*I);let R=[I,I,I,I,I,I];A.set(R,g*x*I)}let U=new ai;U.setAttribute("position",new ri(b,M)),U.setAttribute("uv",new ri(v,y)),U.setAttribute("faceIndex",new ri(A,g)),e.push(U),s>Mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Du(i,e,t){let n=new Qi(i,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function B0(i,e,t){let n=new Float32Array(ks),s=new B(0,1,0);return new es({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function Uu(){return new es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function Nu(){return new es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function k0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Kl||l===Zl,h=l===Ar||l===Rr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let m=e.get(o);return t===null&&(t=new Mo(i)),m=c?t.fromEquirectangular(o,m):t.fromCubemap(o,m),e.set(o,m),m.texture}else{if(e.has(o))return e.get(o).texture;{let m=o.image;if(c&&m&&m.height>0||h&&m&&s(m)){t===null&&(t=new Mo(i));let p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function H0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function z0(i,e,t,n){let s={},r=new WeakMap;function a(m){let p=m.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let M=p.morphAttributes[x];for(let y=0,g=M.length;y<g;y++)e.remove(M[y])}p.removeEventListener("dispose",a),delete s[p.id];let u=r.get(p);u&&(e.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(m,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(m){let p=m.attributes;for(let x in p)e.update(p[x],i.ARRAY_BUFFER);let u=m.morphAttributes;for(let x in u){let M=u[x];for(let y=0,g=M.length;y<g;y++)e.update(M[y],i.ARRAY_BUFFER)}}function c(m){let p=[],u=m.index,x=m.attributes.position,M=0;if(u!==null){let b=u.array;M=u.version;for(let v=0,A=b.length;v<A;v+=3){let U=b[v+0],I=b[v+1],L=b[v+2];p.push(U,I,I,L,L,U)}}else if(x!==void 0){let b=x.array;M=x.version;for(let v=0,A=b.length/3-1;v<A;v+=3){let U=v+0,I=v+1,L=v+2;p.push(U,I,I,L,L,U)}}else return;let y=new(Sd(p)?yo:go)(p,1);y.version=M;let g=r.get(m);g&&e.remove(g),r.set(m,y)}function h(m){let p=r.get(m);if(p){let u=m.index;u!==null&&p.version<u.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:h}}function V0(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,x){i.drawElements(r,x,o,u*l),t.update(x,r,1)}function m(u,x,M){if(M===0)return;let y,g;if(s)y=i,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](r,x,o,u*l,M),t.update(x,r,M)}function p(u,x,M){if(M===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<M;g++)this.render(u[g]/l,x[g]);else{y.multiDrawElementsWEBGL(r,x,0,o,u,0,M);let g=0;for(let b=0;b<M;b++)g+=x[b];t.update(g,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=m,this.renderMultiDraw=p}function G0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function W0(i,e){return i[0]-e[0]}function X0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function q0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Vn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,m){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=u!==void 0?u.length:0,M=r.get(h);if(M===void 0||M.count!==x){let F=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",F)};M!==void 0&&M.texture.dispose();let b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],q=0;b===!0&&(q=1),v===!0&&(q=2),A===!0&&(q=3);let T=h.attributes.position.count*q,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let Y=new Float32Array(T*R*4*x),ae=new po(Y,T,R,x);ae.type=gs,ae.needsUpdate=!0;let Me=q*4;for(let W=0;W<x;W++){let z=U[W],V=I[W],$=L[W],ie=T*R*4*W;for(let re=0;re<z.count;re++){let le=re*Me;b===!0&&(a.fromBufferAttribute(z,re),Y[ie+le+0]=a.x,Y[ie+le+1]=a.y,Y[ie+le+2]=a.z,Y[ie+le+3]=0),v===!0&&(a.fromBufferAttribute(V,re),Y[ie+le+4]=a.x,Y[ie+le+5]=a.y,Y[ie+le+6]=a.z,Y[ie+le+7]=0),A===!0&&(a.fromBufferAttribute($,re),Y[ie+le+8]=a.x,Y[ie+le+9]=a.y,Y[ie+le+10]=a.z,Y[ie+le+11]=$.itemSize===4?a.w:1)}}M={count:x,texture:ae,size:new He(T,R)},r.set(h,M),h.addEventListener("dispose",F)}let y=0;for(let b=0;b<p.length;b++)y+=p[b];let g=h.morphTargetsRelative?1:1-y;m.getUniforms().setValue(i,"morphTargetBaseInfluence",g),m.getUniforms().setValue(i,"morphTargetInfluences",p),m.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let u=p===void 0?0:p.length,x=n[h.id];if(x===void 0||x.length!==u){x=[];for(let v=0;v<u;v++)x[v]=[v,0];n[h.id]=x}for(let v=0;v<u;v++){let A=x[v];A[0]=v,A[1]=p[v]}x.sort(X0);for(let v=0;v<8;v++)v<u&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(W0);let M=h.morphAttributes.position,y=h.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let A=o[v],U=A[0],I=A[1];U!==Number.MAX_SAFE_INTEGER&&I?(M&&h.getAttribute("morphTarget"+v)!==M[U]&&h.setAttribute("morphTarget"+v,M[U]),y&&h.getAttribute("morphNormal"+v)!==y[U]&&h.setAttribute("morphNormal"+v,y[U]),s[v]=I,g+=I):(M&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),y&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let b=h.morphTargetsRelative?1:1-g;m.getUniforms().setValue(i,"morphTargetBaseInfluence",b),m.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Y0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,m=e.get(l,h);if(s.get(m)!==c&&(e.update(m),s.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return m}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var bo=class extends bi{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:zs,h!==zs&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=ms),n===void 0&&h===Cr&&(n=Hs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ad=new bi,Rd=new bo(1,1);Rd.compareFunction=bd;var Cd=new po,Pd=new nc,Id=new _o,Ou=[],Fu=[],Bu=new Float32Array(16),ku=new Float32Array(9),Hu=new Float32Array(4);function Or(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ou[s];if(r===void 0&&(r=new Float32Array(s),Ou[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function On(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ho(i,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2fv(this.addr,e),Fn(t,e)}}function Z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;i.uniform3fv(this.addr,e),Fn(t,e)}}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4fv(this.addr,e),Fn(t,e)}}function j0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Fn(t,e)}else{if(On(t,n))return;Hu.set(n),i.uniformMatrix2fv(this.addr,!1,Hu),Fn(t,n)}}function Q0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Fn(t,e)}else{if(On(t,n))return;ku.set(n),i.uniformMatrix3fv(this.addr,!1,ku),Fn(t,n)}}function ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Fn(t,e)}else{if(On(t,n))return;Bu.set(n),i.uniformMatrix4fv(this.addr,!1,Bu),Fn(t,n)}}function ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2iv(this.addr,e),Fn(t,e)}}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;i.uniform3iv(this.addr,e),Fn(t,e)}}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4iv(this.addr,e),Fn(t,e)}}function ry(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2uiv(this.addr,e),Fn(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;i.uniform3uiv(this.addr,e),Fn(t,e)}}function ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4uiv(this.addr,e),Fn(t,e)}}function cy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Rd:Ad;t.setTexture2D(e||r,s)}function hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pd,s)}function uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Id,s)}function dy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cd,s)}function fy(i){switch(i){case 5126:return $0;case 35664:return K0;case 35665:return Z0;case 35666:return J0;case 35674:return j0;case 35675:return Q0;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return ry;case 36294:return ay;case 36295:return oy;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return dy}}function py(i,e){i.uniform1fv(this.addr,e)}function my(i,e){let t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function gy(i,e){let t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function yy(i,e){let t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function xy(i,e){let t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _y(i,e){let t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vy(i,e){let t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function My(i,e){i.uniform1iv(this.addr,e)}function by(i,e){i.uniform2iv(this.addr,e)}function Sy(i,e){i.uniform3iv(this.addr,e)}function Ey(i,e){i.uniform4iv(this.addr,e)}function Ty(i,e){i.uniform1uiv(this.addr,e)}function wy(i,e){i.uniform2uiv(this.addr,e)}function Ay(i,e){i.uniform3uiv(this.addr,e)}function Ry(i,e){i.uniform4uiv(this.addr,e)}function Cy(i,e,t){let n=this.cache,s=e.length,r=Ho(t,s);On(n,r)||(i.uniform1iv(this.addr,r),Fn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ad,r[a])}function Py(i,e,t){let n=this.cache,s=e.length,r=Ho(t,s);On(n,r)||(i.uniform1iv(this.addr,r),Fn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Pd,r[a])}function Iy(i,e,t){let n=this.cache,s=e.length,r=Ho(t,s);On(n,r)||(i.uniform1iv(this.addr,r),Fn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Id,r[a])}function Ly(i,e,t){let n=this.cache,s=e.length,r=Ho(t,s);On(n,r)||(i.uniform1iv(this.addr,r),Fn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cd,r[a])}function Dy(i){switch(i){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return yy;case 35674:return xy;case 35675:return _y;case 35676:return vy;case 5124:case 35670:return My;case 35667:case 35671:return by;case 35668:case 35672:return Sy;case 35669:case 35673:return Ey;case 5125:return Ty;case 36294:return wy;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Ly}}var rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fy(t.type)}},ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dy(t.type)}},oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},zl=/(\w+)(\])?(\[|\.)?/g;function zu(i,e){i.seq.push(e),i.map[e.id]=e}function Uy(i,e,t){let n=i.name,s=n.length;for(zl.lastIndex=0;;){let r=zl.exec(n),a=zl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zu(t,c===void 0?new rc(o,i,e):new ac(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new oc(o),zu(t,m)),t=m}}}var wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Uy(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Vu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ny=37297,Oy=0;function Fy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function By(i){let e=nn.getPrimaries(nn.workingColorSpace),t=nn.getPrimaries(i),n;switch(e===t?n="":e===lo&&t===oo?n="LinearDisplayP3ToLinearSRGB":e===oo&&t===lo&&(n="LinearSRGBToLinearDisplayP3"),i){case ji:case ko:return[n,"LinearTransferOETF"];case Xn:case zc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Gu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Fy(i.getShaderSource(e),a)}else return s}function ky(i,e){let t=By(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hy(i,e){let t;switch(e){case sp:t="Linear";break;case rp:t="Reinhard";break;case ap:t="OptimizedCineon";break;case op:t="ACESFilmic";break;case cp:t="AgX";break;case lp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zy(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function Vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(br).join(`
`)}function Gy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function br(i){return i!==""}function Wu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(Xy,Yy)}var qy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yy(i,e){let t=Rt[e];if(t===void 0){let n=qy.get(e);if(n!==void 0)t=Rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}var $y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(i){return i.replace($y,Ky)}function Ky(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ar:case Rr:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Qy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ud:e="ENVMAP_BLENDING_MULTIPLY";break;case np:e="ENVMAP_BLENDING_MIX";break;case ip:e="ENVMAP_BLENDING_ADD";break}return e}function ex(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Zy(t),c=Jy(t),h=jy(t),m=Qy(t),p=ex(t),u=t.isWebGL2?"":zy(t),x=Vy(t),M=Gy(r),y=s.createProgram(),g,b,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(br).join(`
`),g.length>0&&(g+=`
`),b=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(br).join(`
`),b.length>0&&(b+=`
`)):(g=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),b=[u,Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xs?"#define TONE_MAPPING":"",t.toneMapping!==xs?Rt.tonemapping_pars_fragment:"",t.toneMapping!==xs?Hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,ky("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=lc(a),a=Wu(a,t),a=Xu(a,t),o=lc(o),o=Wu(o,t),o=Xu(o,t),a=qu(a),o=qu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let A=v+g+a,U=v+b+o,I=Vu(s,s.VERTEX_SHADER,A),L=Vu(s,s.FRAGMENT_SHADER,U);s.attachShader(y,I),s.attachShader(y,L),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function q(ae){if(i.debug.checkShaderErrors){let Me=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(L).trim(),z=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,L);else{let $=Gu(s,I,"vertex"),ie=Gu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Program Info Log: `+Me+`
`+$+`
`+ie)}else Me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Me):(F===""||W==="")&&(V=!1);V&&(ae.diagnostics={runnable:z,programLog:Me,vertexShader:{log:F,prefix:g},fragmentShader:{log:W,prefix:b}})}s.deleteShader(I),s.deleteShader(L),T=new wr(s,y),R=Wy(s,y)}let T;this.getUniforms=function(){return T===void 0&&q(this),T};let R;this.getAttributes=function(){return R===void 0&&q(this),R};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=s.getProgramParameter(y,Ny)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Oy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=L,this}var nx=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hc(e),t.set(e,n)),n}},hc=class{constructor(e){this.id=nx++,this.code=e,this.usedTimes=0}};function ix(i,e,t,n,s,r,a){let o=new ra,l=new cc,c=[],h=s.isWebGL2,m=s.logarithmicDepthBuffer,p=s.vertexTextures,u=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return T===0?"uv":`uv${T}`}function y(T,R,Y,ae,Me){let F=ae.fog,W=Me.geometry,z=T.isMeshStandardMaterial?ae.environment:null,V=(T.isMeshStandardMaterial?t:e).get(T.envMap||z),$=V&&V.mapping===Bo?V.image.height:null,ie=x[T.type];T.precision!==null&&(u=s.getMaxPrecision(T.precision),u!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",u,"instead."));let re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=re!==void 0?re.length:0,Ae=0;W.morphAttributes.position!==void 0&&(Ae=1),W.morphAttributes.normal!==void 0&&(Ae=2),W.morphAttributes.color!==void 0&&(Ae=3);let Z,fe,we,Fe;if(ie){let Pt=Fi[ie];Z=Pt.vertexShader,fe=Pt.fragmentShader}else Z=T.vertexShader,fe=T.fragmentShader,l.update(T),we=l.getVertexShaderID(T),Fe=l.getFragmentShaderID(T);let Xe=i.getRenderTarget(),ut=Me.isInstancedMesh===!0,ft=Me.isBatchedMesh===!0,$e=!!T.map,ue=!!T.matcap,J=!!V,Ke=!!T.aoMap,We=!!T.lightMap,Ze=!!T.bumpMap,ze=!!T.normalMap,Je=!!T.displacementMap,yt=!!T.emissiveMap,C=!!T.metalnessMap,E=!!T.roughnessMap,te=T.anisotropy>0,_e=T.clearcoat>0,Se=T.iridescence>0,Te=T.sheen>0,Ye=T.transmission>0,Ne=te&&!!T.anisotropyMap,Ue=_e&&!!T.clearcoatMap,ot=_e&&!!T.clearcoatNormalMap,bt=_e&&!!T.clearcoatRoughnessMap,ve=Se&&!!T.iridescenceMap,$t=Se&&!!T.iridescenceThicknessMap,wt=Te&&!!T.sheenColorMap,pt=Te&&!!T.sheenRoughnessMap,et=!!T.specularMap,Ge=!!T.specularColorMap,mt=!!T.specularIntensityMap,Gt=Ye&&!!T.transmissionMap,mn=Ye&&!!T.thicknessMap,At=!!T.gradientMap,Pe=!!T.alphaMap,k=T.alphaTest>0,Le=!!T.alphaHash,De=!!T.extensions,nt=!!W.attributes.uv1,tt=!!W.attributes.uv2,jt=!!W.attributes.uv3,Ot=xs;return T.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(Ot=i.toneMapping),{isWebGL2:h,shaderID:ie,shaderType:T.type,shaderName:T.name,vertexShader:Z,fragmentShader:fe,defines:T.defines,customVertexShaderID:we,customFragmentShaderID:Fe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:u,batching:ft,instancing:ut,instancingColor:ut&&Me.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Xe===null?i.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:ji,map:$e,matcap:ue,envMap:J,envMapMode:J&&V.mapping,envMapCubeUVHeight:$,aoMap:Ke,lightMap:We,bumpMap:Ze,normalMap:ze,displacementMap:p&&Je,emissiveMap:yt,normalMapObjectSpace:ze&&T.normalMapType===Mp,normalMapTangentSpace:ze&&T.normalMapType===Md,metalnessMap:C,roughnessMap:E,anisotropy:te,anisotropyMap:Ne,clearcoat:_e,clearcoatMap:Ue,clearcoatNormalMap:ot,clearcoatRoughnessMap:bt,iridescence:Se,iridescenceMap:ve,iridescenceThicknessMap:$t,sheen:Te,sheenColorMap:wt,sheenRoughnessMap:pt,specularMap:et,specularColorMap:Ge,specularIntensityMap:mt,transmission:Ye,transmissionMap:Gt,thicknessMap:mn,gradientMap:At,opaque:T.transparent===!1&&T.blending===Er,alphaMap:Pe,alphaTest:k,alphaHash:Le,combine:T.combine,mapUv:$e&&M(T.map.channel),aoMapUv:Ke&&M(T.aoMap.channel),lightMapUv:We&&M(T.lightMap.channel),bumpMapUv:Ze&&M(T.bumpMap.channel),normalMapUv:ze&&M(T.normalMap.channel),displacementMapUv:Je&&M(T.displacementMap.channel),emissiveMapUv:yt&&M(T.emissiveMap.channel),metalnessMapUv:C&&M(T.metalnessMap.channel),roughnessMapUv:E&&M(T.roughnessMap.channel),anisotropyMapUv:Ne&&M(T.anisotropyMap.channel),clearcoatMapUv:Ue&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:pt&&M(T.sheenRoughnessMap.channel),specularMapUv:et&&M(T.specularMap.channel),specularColorMapUv:Ge&&M(T.specularColorMap.channel),specularIntensityMapUv:mt&&M(T.specularIntensityMap.channel),transmissionMapUv:Gt&&M(T.transmissionMap.channel),thicknessMapUv:mn&&M(T.thicknessMap.channel),alphaMapUv:Pe&&M(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ze||te),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:nt,vertexUv2s:tt,vertexUv3s:jt,pointsUvs:Me.isPoints===!0&&!!W.attributes.uv&&($e||Pe),fog:!!F,useFog:T.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:Me.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,useLegacyLights:i._useLegacyLights,decodeVideoTexture:$e&&T.map.isVideoTexture===!0&&nn.getTransfer(T.map.colorSpace)===pn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_n,flipSided:T.side===si,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:De&&T.extensions.derivatives===!0,extensionFragDepth:De&&T.extensions.fragDepth===!0,extensionDrawBuffers:De&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){let R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(let Y in T.defines)R.push(Y),R.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(b(R,T),v(R,T),R.push(i.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function b(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function v(T,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),T.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function A(T){let R=x[T.type],Y;if(R){let ae=Fi[R];Y=qp.clone(ae.uniforms)}else Y=T.uniforms;return Y}function U(T,R){let Y;for(let ae=0,Me=c.length;ae<Me;ae++){let F=c[ae];if(F.cacheKey===R){Y=F,++Y.usedTimes;break}}return Y===void 0&&(Y=new tx(i,R,T,r),c.push(Y)),Y}function I(T){if(--T.usedTimes===0){let R=c.indexOf(T);c[R]=c[c.length-1],c.pop(),T.destroy()}}function L(T){l.remove(T)}function q(){l.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:U,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:q}}function sx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function rx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $u(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ku(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(m,p,u,x,M,y){let g=i[e];return g===void 0?(g={id:m.id,object:m,geometry:p,material:u,groupOrder:x,renderOrder:m.renderOrder,z:M,group:y},i[e]=g):(g.id=m.id,g.object=m,g.geometry=p,g.material=u,g.groupOrder=x,g.renderOrder=m.renderOrder,g.z=M,g.group=y),e++,g}function o(m,p,u,x,M,y){let g=a(m,p,u,x,M,y);u.transmission>0?n.push(g):u.transparent===!0?s.push(g):t.push(g)}function l(m,p,u,x,M,y){let g=a(m,p,u,x,M,y);u.transmission>0?n.unshift(g):u.transparent===!0?s.unshift(g):t.unshift(g)}function c(m,p){t.length>1&&t.sort(m||rx),n.length>1&&n.sort(p||$u),s.length>1&&s.sort(p||$u)}function h(){for(let m=e,p=i.length;m<p;m++){let u=i[m];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function ax(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ku,i.set(n,[a])):s>=r.length?(a=new Ku,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ox(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new vt};break;case"SpotLight":t={position:new B,direction:new B,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function lx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var cx=0;function hx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ux(i,e){let t=new ox,n=lx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new B);let r=new B,a=new Ln,o=new Ln;function l(h,m){let p=0,u=0,x=0;for(let ae=0;ae<9;ae++)s.probe[ae].set(0,0,0);let M=0,y=0,g=0,b=0,v=0,A=0,U=0,I=0,L=0,q=0,T=0;h.sort(hx);let R=m===!0?Math.PI:1;for(let ae=0,Me=h.length;ae<Me;ae++){let F=h[ae],W=F.color,z=F.intensity,V=F.distance,$=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=W.r*z*R,u+=W.g*z*R,x+=W.b*z*R;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)s.probe[ie].addScaledVector(F.sh.coefficients[ie],z);T++}else if(F.isDirectionalLight){let ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){let re=F.shadow,le=n.get(F);le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,s.directionalShadow[M]=le,s.directionalShadowMap[M]=$,s.directionalShadowMatrix[M]=F.shadow.matrix,A++}s.directional[M]=ie,M++}else if(F.isSpotLight){let ie=t.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy(W).multiplyScalar(z*R),ie.distance=V,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,s.spot[g]=ie;let re=F.shadow;if(F.map&&(s.spotLightMap[L]=F.map,L++,re.updateMatrices(F),F.castShadow&&q++),s.spotLightMatrix[g]=re.matrix,F.castShadow){let le=n.get(F);le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,s.spotShadow[g]=le,s.spotShadowMap[g]=$,I++}g++}else if(F.isRectAreaLight){let ie=t.get(F);ie.color.copy(W).multiplyScalar(z),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),s.rectArea[b]=ie,b++}else if(F.isPointLight){let ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*R),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){let re=F.shadow,le=n.get(F);le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,le.shadowCameraNear=re.camera.near,le.shadowCameraFar=re.camera.far,s.pointShadow[y]=le,s.pointShadowMap[y]=$,s.pointShadowMatrix[y]=F.shadow.matrix,U++}s.point[y]=ie,y++}else if(F.isHemisphereLight){let ie=t.get(F);ie.skyColor.copy(F.color).multiplyScalar(z*R),ie.groundColor.copy(F.groundColor).multiplyScalar(z*R),s.hemi[v]=ie,v++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=u,s.ambient[2]=x;let Y=s.hash;(Y.directionalLength!==M||Y.pointLength!==y||Y.spotLength!==g||Y.rectAreaLength!==b||Y.hemiLength!==v||Y.numDirectionalShadows!==A||Y.numPointShadows!==U||Y.numSpotShadows!==I||Y.numSpotMaps!==L||Y.numLightProbes!==T)&&(s.directional.length=M,s.spot.length=g,s.rectArea.length=b,s.point.length=y,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=I+L-q,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=T,Y.directionalLength=M,Y.pointLength=y,Y.spotLength=g,Y.rectAreaLength=b,Y.hemiLength=v,Y.numDirectionalShadows=A,Y.numPointShadows=U,Y.numSpotShadows=I,Y.numSpotMaps=L,Y.numLightProbes=T,s.version=cx++)}function c(h,m){let p=0,u=0,x=0,M=0,y=0,g=m.matrixWorldInverse;for(let b=0,v=h.length;b<v;b++){let A=h[b];if(A.isDirectionalLight){let U=s.directional[p];U.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(g),p++}else if(A.isSpotLight){let U=s.spot[x];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(g),U.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(g),x++}else if(A.isRectAreaLight){let U=s.rectArea[M];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(g),o.identity(),a.copy(A.matrixWorld),a.premultiply(g),o.extractRotation(a),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){let U=s.point[u];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(g),u++}else if(A.isHemisphereLight){let U=s.hemi[y];U.direction.setFromMatrixPosition(A.matrixWorld),U.direction.transformDirection(g),y++}}}return{setup:l,setupView:c,state:s}}function Zu(i,e){let t=new ux(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(m){n.push(m)}function o(m){s.push(m)}function l(m){t.setup(n,m)}function c(m){t.setupView(n,m)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function dx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Zu(i,e),t.set(r,[l])):a>=o.length?(l=new Zu(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var uc=class extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dc=class extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`;function mx(i,e,t){let n=new aa,s=new He,r=new He,a=new Vn,o=new uc({depthPacking:vp}),l=new dc,c={},h=t.maxTextureSize,m={[vs]:si,[si]:vs,[_n]:_n},p=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:fx,fragmentShader:px}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let x=new ai;x.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new qe(x,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let g=this.type;this.render=function(I,L,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;let T=i.getRenderTarget(),R=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),ae=i.state;ae.setBlending(ys),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);let Me=g!==Zi&&this.type===Zi,F=g===Zi&&this.type!==Zi;for(let W=0,z=I.length;W<z;W++){let V=I[W],$=V.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ie=$.getFrameExtents();if(s.multiply(ie),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,$.mapSize.y=r.y)),$.map===null||Me===!0||F===!0){let le=this.type!==Zi?{minFilter:Qn,magFilter:Qn}:{};$.map!==null&&$.map.dispose(),$.map=new Qi(s.x,s.y,le),$.map.texture.name=V.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let re=$.getViewportCount();for(let le=0;le<re;le++){let Ae=$.getViewport(le);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),ae.viewport(a),$.updateMatrices(V,le),n=$.getFrustum(),A(L,q,$.camera,V,this.type)}$.isPointLightShadow!==!0&&this.type===Zi&&b($,q),$.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(T,R,Y)};function b(I,L){let q=e.update(M);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Qi(s.x,s.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,q,p,M,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,q,u,M,null)}function v(I,L,q,T){let R=null,Y=q.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(Y!==void 0)R=Y;else if(R=q.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let ae=R.uuid,Me=L.uuid,F=c[ae];F===void 0&&(F={},c[ae]=F);let W=F[Me];W===void 0&&(W=R.clone(),F[Me]=W,L.addEventListener("dispose",U)),R=W}if(R.visible=L.visible,R.wireframe=L.wireframe,T===Zi?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:m[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let ae=i.properties.get(R);ae.light=q}return R}function A(I,L,q,T,R){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Zi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld);let Me=e.update(I),F=I.material;if(Array.isArray(F)){let W=Me.groups;for(let z=0,V=W.length;z<V;z++){let $=W[z],ie=F[$.materialIndex];if(ie&&ie.visible){let re=v(I,ie,T,R);I.onBeforeShadow(i,I,L,q,Me,re,$),i.renderBufferDirect(q,null,Me,re,I,$),I.onAfterShadow(i,I,L,q,Me,re,$)}}}else if(F.visible){let W=v(I,F,T,R);I.onBeforeShadow(i,I,L,q,Me,W,null),i.renderBufferDirect(q,null,Me,W,I,null),I.onAfterShadow(i,I,L,q,Me,W,null)}}let ae=I.children;for(let Me=0,F=ae.length;Me<F;Me++)A(ae[Me],L,q,T,R)}function U(I){I.target.removeEventListener("dispose",U);for(let q in c){let T=c[q],R=I.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function gx(i,e,t){let n=t.isWebGL2;function s(){let k=!1,Le=new Vn,De=null,nt=new Vn(0,0,0,0);return{setMask:function(tt){De!==tt&&!k&&(i.colorMask(tt,tt,tt,tt),De=tt)},setLocked:function(tt){k=tt},setClear:function(tt,jt,Ot,Ct,Pt){Pt===!0&&(tt*=Ct,jt*=Ct,Ot*=Ct),Le.set(tt,jt,Ot,Ct),nt.equals(Le)===!1&&(i.clearColor(tt,jt,Ot,Ct),nt.copy(Le))},reset:function(){k=!1,De=null,nt.set(-1,0,0,0)}}}function r(){let k=!1,Le=null,De=null,nt=null;return{setTest:function(tt){tt?ft(i.DEPTH_TEST):$e(i.DEPTH_TEST)},setMask:function(tt){Le!==tt&&!k&&(i.depthMask(tt),Le=tt)},setFunc:function(tt){if(De!==tt){switch(tt){case Kf:i.depthFunc(i.NEVER);break;case Zf:i.depthFunc(i.ALWAYS);break;case Jf:i.depthFunc(i.LESS);break;case io:i.depthFunc(i.LEQUAL);break;case jf:i.depthFunc(i.EQUAL);break;case Qf:i.depthFunc(i.GEQUAL);break;case ep:i.depthFunc(i.GREATER);break;case tp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=tt}},setLocked:function(tt){k=tt},setClear:function(tt){nt!==tt&&(i.clearDepth(tt),nt=tt)},reset:function(){k=!1,Le=null,De=null,nt=null}}}function a(){let k=!1,Le=null,De=null,nt=null,tt=null,jt=null,Ot=null,Ct=null,Pt=null;return{setTest:function(it){k||(it?ft(i.STENCIL_TEST):$e(i.STENCIL_TEST))},setMask:function(it){Le!==it&&!k&&(i.stencilMask(it),Le=it)},setFunc:function(it,ln,An){(De!==it||nt!==ln||tt!==An)&&(i.stencilFunc(it,ln,An),De=it,nt=ln,tt=An)},setOp:function(it,ln,An){(jt!==it||Ot!==ln||Ct!==An)&&(i.stencilOp(it,ln,An),jt=it,Ot=ln,Ct=An)},setLocked:function(it){k=it},setClear:function(it){Pt!==it&&(i.clearStencil(it),Pt=it)},reset:function(){k=!1,Le=null,De=null,nt=null,tt=null,jt=null,Ot=null,Ct=null,Pt=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,m=new WeakMap,p={},u={},x=new WeakMap,M=[],y=null,g=!1,b=null,v=null,A=null,U=null,I=null,L=null,q=null,T=new vt(0,0,0),R=0,Y=!1,ae=null,Me=null,F=null,W=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ie=0,re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(re)[1]),$=ie>=1):re.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),$=ie>=2);let le=null,Ae={},Z=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),we=new Vn().fromArray(Z),Fe=new Vn().fromArray(fe);function Xe(k,Le,De,nt){let tt=new Uint8Array(4),jt=i.createTexture();i.bindTexture(k,jt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<De;Ot++)n&&(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)?i.texImage3D(Le,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(Le+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return jt}let ut={};ut[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ut[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ft(i.DEPTH_TEST),l.setFunc(io),yt(!1),C(Ch),ft(i.CULL_FACE),ze(ys);function ft(k){p[k]!==!0&&(i.enable(k),p[k]=!0)}function $e(k){p[k]!==!1&&(i.disable(k),p[k]=!1)}function ue(k,Le){return u[k]!==Le?(i.bindFramebuffer(k,Le),u[k]=Le,n&&(k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Le),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Le)),!0):!1}function J(k,Le){let De=M,nt=!1;if(k)if(De=x.get(Le),De===void 0&&(De=[],x.set(Le,De)),k.isWebGLMultipleRenderTargets){let tt=k.texture;if(De.length!==tt.length||De[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,Ot=tt.length;jt<Ot;jt++)De[jt]=i.COLOR_ATTACHMENT0+jt;De.length=tt.length,nt=!0}}else De[0]!==i.COLOR_ATTACHMENT0&&(De[0]=i.COLOR_ATTACHMENT0,nt=!0);else De[0]!==i.BACK&&(De[0]=i.BACK,nt=!0);nt&&(t.isWebGL2?i.drawBuffers(De):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(De))}function Ke(k){return y!==k?(i.useProgram(k),y=k,!0):!1}let We={[Bs]:i.FUNC_ADD,[Uf]:i.FUNC_SUBTRACT,[Nf]:i.FUNC_REVERSE_SUBTRACT};if(n)We[Dh]=i.MIN,We[Uh]=i.MAX;else{let k=e.get("EXT_blend_minmax");k!==null&&(We[Dh]=k.MIN_EXT,We[Uh]=k.MAX_EXT)}let Ze={[Of]:i.ZERO,[Ff]:i.ONE,[Bf]:i.SRC_COLOR,[Yl]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[Hf]:i.DST_ALPHA,[kf]:i.ONE_MINUS_SRC_COLOR,[$l]:i.ONE_MINUS_SRC_ALPHA,[Gf]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Xf]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function ze(k,Le,De,nt,tt,jt,Ot,Ct,Pt,it){if(k===ys){g===!0&&($e(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),k!==Df){if(k!==b||it!==Y){if((v!==Bs||I!==Bs)&&(i.blendEquation(i.FUNC_ADD),v=Bs,I=Bs),it)switch(k){case Er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ph:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ph:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}A=null,U=null,L=null,q=null,T.set(0,0,0),R=0,b=k,Y=it}return}tt=tt||Le,jt=jt||De,Ot=Ot||nt,(Le!==v||tt!==I)&&(i.blendEquationSeparate(We[Le],We[tt]),v=Le,I=tt),(De!==A||nt!==U||jt!==L||Ot!==q)&&(i.blendFuncSeparate(Ze[De],Ze[nt],Ze[jt],Ze[Ot]),A=De,U=nt,L=jt,q=Ot),(Ct.equals(T)===!1||Pt!==R)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Pt),T.copy(Ct),R=Pt),b=k,Y=!1}function Je(k,Le){k.side===_n?$e(i.CULL_FACE):ft(i.CULL_FACE);let De=k.side===si;Le&&(De=!De),yt(De),k.blending===Er&&k.transparent===!1?ze(ys):ze(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);let nt=k.stencilWrite;c.setTest(nt),nt&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),te(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):$e(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(k){ae!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),ae=k)}function C(k){k!==If?(ft(i.CULL_FACE),k!==Me&&(k===Ch?i.cullFace(i.BACK):k===Lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$e(i.CULL_FACE),Me=k}function E(k){k!==F&&($&&i.lineWidth(k),F=k)}function te(k,Le,De){k?(ft(i.POLYGON_OFFSET_FILL),(W!==Le||z!==De)&&(i.polygonOffset(Le,De),W=Le,z=De)):$e(i.POLYGON_OFFSET_FILL)}function _e(k){k?ft(i.SCISSOR_TEST):$e(i.SCISSOR_TEST)}function Se(k){k===void 0&&(k=i.TEXTURE0+V-1),le!==k&&(i.activeTexture(k),le=k)}function Te(k,Le,De){De===void 0&&(le===null?De=i.TEXTURE0+V-1:De=le);let nt=Ae[De];nt===void 0&&(nt={type:void 0,texture:void 0},Ae[De]=nt),(nt.type!==k||nt.texture!==Le)&&(le!==De&&(i.activeTexture(De),le=De),i.bindTexture(k,Le||ut[k]),nt.type=k,nt.texture=Le)}function Ye(){let k=Ae[le];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(k){we.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),we.copy(k))}function Gt(k){Fe.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Fe.copy(k))}function mn(k,Le){let De=m.get(Le);De===void 0&&(De=new WeakMap,m.set(Le,De));let nt=De.get(k);nt===void 0&&(nt=i.getUniformBlockIndex(Le,k.name),De.set(k,nt))}function At(k,Le){let nt=m.get(Le).get(k);h.get(Le)!==nt&&(i.uniformBlockBinding(Le,nt,k.__bindingPointIndex),h.set(Le,nt))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},le=null,Ae={},u={},x=new WeakMap,M=[],y=null,g=!1,b=null,v=null,A=null,U=null,I=null,L=null,q=null,T=new vt(0,0,0),R=0,Y=!1,ae=null,Me=null,F=null,W=null,z=null,we.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ft,disable:$e,bindFramebuffer:ue,drawBuffers:J,useProgram:Ke,setBlending:ze,setMaterial:Je,setFlipSided:yt,setCullFace:C,setLineWidth:E,setPolygonOffset:te,setScissorTest:_e,activeTexture:Se,bindTexture:Te,unbindTexture:Ye,compressedTexImage2D:Ne,compressedTexImage3D:Ue,texImage2D:et,texImage3D:Ge,updateUBOMapping:mn,uniformBlockBinding:At,texStorage2D:wt,texStorage3D:pt,texSubImage2D:ot,texSubImage3D:bt,compressedTexSubImage2D:ve,compressedTexSubImage3D:$t,scissor:mt,viewport:Gt,reset:Pe}}function yx(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,m,p=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return u?new OffscreenCanvas(C,E):ho("canvas")}function M(C,E,te,_e){let Se=1;if((C.width>_e||C.height>_e)&&(Se=_e/Math.max(C.width,C.height)),Se<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Te=E?ec:Math.floor,Ye=Te(Se*C.width),Ne=Te(Se*C.height);m===void 0&&(m=x(Ye,Ne));let Ue=te?x(Ye,Ne):m;return Ue.width=Ye,Ue.height=Ne,Ue.getContext("2d").drawImage(C,0,0,Ye,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ye+"x"+Ne+")."),Ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return fu(C.width)&&fu(C.height)}function g(C){return o?!1:C.wrapS!==Ii||C.wrapT!==Ii||C.minFilter!==Qn&&C.minFilter!==vi}function b(C,E){return C.generateMipmaps&&E&&C.minFilter!==Qn&&C.minFilter!==vi}function v(C){i.generateMipmap(C)}function A(C,E,te,_e,Se=!1){if(o===!1)return E;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Te=E;if(E===i.RED&&(te===i.FLOAT&&(Te=i.R32F),te===i.HALF_FLOAT&&(Te=i.R16F),te===i.UNSIGNED_BYTE&&(Te=i.R8)),E===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(Te=i.R8UI),te===i.UNSIGNED_SHORT&&(Te=i.R16UI),te===i.UNSIGNED_INT&&(Te=i.R32UI),te===i.BYTE&&(Te=i.R8I),te===i.SHORT&&(Te=i.R16I),te===i.INT&&(Te=i.R32I)),E===i.RG&&(te===i.FLOAT&&(Te=i.RG32F),te===i.HALF_FLOAT&&(Te=i.RG16F),te===i.UNSIGNED_BYTE&&(Te=i.RG8)),E===i.RGBA){let Ye=Se?ao:nn.getTransfer(_e);te===i.FLOAT&&(Te=i.RGBA32F),te===i.HALF_FLOAT&&(Te=i.RGBA16F),te===i.UNSIGNED_BYTE&&(Te=Ye===pn?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(Te=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(Te=i.RGB5_A1)}return(Te===i.R16F||Te===i.R32F||Te===i.RG16F||Te===i.RG32F||Te===i.RGBA16F||Te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function U(C,E,te){return b(C,te)===!0||C.isFramebufferTexture&&C.minFilter!==Qn&&C.minFilter!==vi?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function I(C){return C===Qn||C===Nh||C===ul?i.NEAREST:i.LINEAR}function L(C){let E=C.target;E.removeEventListener("dispose",L),T(E),E.isVideoTexture&&h.delete(E)}function q(C){let E=C.target;E.removeEventListener("dispose",q),Y(E)}function T(C){let E=n.get(C);if(E.__webglInit===void 0)return;let te=C.source,_e=p.get(te);if(_e){let Se=_e[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&R(C),Object.keys(_e).length===0&&p.delete(te)}n.remove(C)}function R(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let te=C.source,_e=p.get(te);delete _e[E.__cacheKey],a.memory.textures--}function Y(C){let E=C.texture,te=n.get(C),_e=n.get(E);if(_e.__webglTexture!==void 0&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(te.__webglFramebuffer[Se]))for(let Te=0;Te<te.__webglFramebuffer[Se].length;Te++)i.deleteFramebuffer(te.__webglFramebuffer[Se][Te]);else i.deleteFramebuffer(te.__webglFramebuffer[Se]);te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer[Se])}else{if(Array.isArray(te.__webglFramebuffer))for(let Se=0;Se<te.__webglFramebuffer.length;Se++)i.deleteFramebuffer(te.__webglFramebuffer[Se]);else i.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&i.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let Se=0;Se<te.__webglColorRenderbuffer.length;Se++)te.__webglColorRenderbuffer[Se]&&i.deleteRenderbuffer(te.__webglColorRenderbuffer[Se]);te.__webglDepthRenderbuffer&&i.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Se=0,Te=E.length;Se<Te;Se++){let Ye=n.get(E[Se]);Ye.__webglTexture&&(i.deleteTexture(Ye.__webglTexture),a.memory.textures--),n.remove(E[Se])}n.remove(E),n.remove(C)}let ae=0;function Me(){ae=0}function F(){let C=ae;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),ae+=1,C}function W(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function z(C,E){let te=n.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.version>0&&te.__version!==C.version){let _e=C.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(te,C,E);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+E)}function V(C,E){let te=n.get(C);if(C.version>0&&te.__version!==C.version){we(te,C,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+E)}function $(C,E){let te=n.get(C);if(C.version>0&&te.__version!==C.version){we(te,C,E);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+E)}function ie(C,E){let te=n.get(C);if(C.version>0&&te.__version!==C.version){Fe(te,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+E)}let re={[ta]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[Jl]:i.MIRRORED_REPEAT},le={[Qn]:i.NEAREST,[Nh]:i.NEAREST_MIPMAP_NEAREST,[ul]:i.NEAREST_MIPMAP_LINEAR,[vi]:i.LINEAR,[hp]:i.LINEAR_MIPMAP_NEAREST,[na]:i.LINEAR_MIPMAP_LINEAR},Ae={[bp]:i.NEVER,[Rp]:i.ALWAYS,[Sp]:i.LESS,[bd]:i.LEQUAL,[Ep]:i.EQUAL,[Ap]:i.GEQUAL,[Tp]:i.GREATER,[wp]:i.NOTEQUAL};function Z(C,E,te){if(te?(i.texParameteri(C,i.TEXTURE_WRAP_S,re[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,re[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,re[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,le[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,le[E.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Ii||E.wrapT!==Ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,I(E.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,I(E.minFilter)),E.minFilter!==Qn&&E.minFilter!==vi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let _e=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Qn||E.minFilter!==ul&&E.minFilter!==na||E.type===gs&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ia&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(C,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function fe(C,E){let te=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",L));let _e=E.source,Se=p.get(_e);Se===void 0&&(Se={},p.set(_e,Se));let Te=W(E);if(Te!==C.__cacheKey){Se[Te]===void 0&&(Se[Te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,te=!0),Se[Te].usedTimes++;let Ye=Se[C.__cacheKey];Ye!==void 0&&(Se[C.__cacheKey].usedTimes--,Ye.usedTimes===0&&R(E)),C.__cacheKey=Te,C.__webglTexture=Se[Te].texture}return te}function we(C,E,te){let _e=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=i.TEXTURE_3D);let Se=fe(C,E),Te=E.source;t.bindTexture(_e,C.__webglTexture,i.TEXTURE0+te);let Ye=n.get(Te);if(Te.version!==Ye.__version||Se===!0){t.activeTexture(i.TEXTURE0+te);let Ne=nn.getPrimaries(nn.workingColorSpace),Ue=E.colorSpace===Mi?null:nn.getPrimaries(E.colorSpace),ot=E.colorSpace===Mi||Ne===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let bt=g(E)&&y(E.image)===!1,ve=M(E.image,bt,!1,s.maxTextureSize);ve=yt(E,ve);let $t=y(ve)||o,wt=r.convert(E.format,E.colorSpace),pt=r.convert(E.type),et=A(E.internalFormat,wt,pt,E.colorSpace,E.isVideoTexture);Z(_e,E,$t);let Ge,mt=E.mipmaps,Gt=o&&E.isVideoTexture!==!0&&et!==_d,mn=Ye.__version===void 0||Se===!0,At=U(E,ve,$t);if(E.isDepthTexture)et=i.DEPTH_COMPONENT,o?E.type===gs?et=i.DEPTH_COMPONENT32F:E.type===ms?et=i.DEPTH_COMPONENT24:E.type===Hs?et=i.DEPTH24_STENCIL8:et=i.DEPTH_COMPONENT16:E.type===gs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===zs&&et===i.DEPTH_COMPONENT&&E.type!==Hc&&E.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ms,pt=r.convert(E.type)),E.format===Cr&&et===i.DEPTH_COMPONENT&&(et=i.DEPTH_STENCIL,E.type!==Hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Hs,pt=r.convert(E.type))),mn&&(Gt?t.texStorage2D(i.TEXTURE_2D,1,et,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,et,ve.width,ve.height,0,wt,pt,null));else if(E.isDataTexture)if(mt.length>0&&$t){Gt&&mn&&t.texStorage2D(i.TEXTURE_2D,At,et,mt[0].width,mt[0].height);for(let Pe=0,k=mt.length;Pe<k;Pe++)Ge=mt[Pe],Gt?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Ge.width,Ge.height,wt,pt,Ge.data):t.texImage2D(i.TEXTURE_2D,Pe,et,Ge.width,Ge.height,0,wt,pt,Ge.data);E.generateMipmaps=!1}else Gt?(mn&&t.texStorage2D(i.TEXTURE_2D,At,et,ve.width,ve.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve.width,ve.height,wt,pt,ve.data)):t.texImage2D(i.TEXTURE_2D,0,et,ve.width,ve.height,0,wt,pt,ve.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Gt&&mn&&t.texStorage3D(i.TEXTURE_2D_ARRAY,At,et,mt[0].width,mt[0].height,ve.depth);for(let Pe=0,k=mt.length;Pe<k;Pe++)Ge=mt[Pe],E.format!==Li?wt!==null?Gt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,Ge.width,Ge.height,ve.depth,wt,Ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Pe,et,Ge.width,Ge.height,ve.depth,0,Ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,Ge.width,Ge.height,ve.depth,wt,pt,Ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Pe,et,Ge.width,Ge.height,ve.depth,0,wt,pt,Ge.data)}else{Gt&&mn&&t.texStorage2D(i.TEXTURE_2D,At,et,mt[0].width,mt[0].height);for(let Pe=0,k=mt.length;Pe<k;Pe++)Ge=mt[Pe],E.format!==Li?wt!==null?Gt?t.compressedTexSubImage2D(i.TEXTURE_2D,Pe,0,0,Ge.width,Ge.height,wt,Ge.data):t.compressedTexImage2D(i.TEXTURE_2D,Pe,et,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Ge.width,Ge.height,wt,pt,Ge.data):t.texImage2D(i.TEXTURE_2D,Pe,et,Ge.width,Ge.height,0,wt,pt,Ge.data)}else if(E.isDataArrayTexture)Gt?(mn&&t.texStorage3D(i.TEXTURE_2D_ARRAY,At,et,ve.width,ve.height,ve.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,wt,pt,ve.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,et,ve.width,ve.height,ve.depth,0,wt,pt,ve.data);else if(E.isData3DTexture)Gt?(mn&&t.texStorage3D(i.TEXTURE_3D,At,et,ve.width,ve.height,ve.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,wt,pt,ve.data)):t.texImage3D(i.TEXTURE_3D,0,et,ve.width,ve.height,ve.depth,0,wt,pt,ve.data);else if(E.isFramebufferTexture){if(mn)if(Gt)t.texStorage2D(i.TEXTURE_2D,At,et,ve.width,ve.height);else{let Pe=ve.width,k=ve.height;for(let Le=0;Le<At;Le++)t.texImage2D(i.TEXTURE_2D,Le,et,Pe,k,0,wt,pt,null),Pe>>=1,k>>=1}}else if(mt.length>0&&$t){Gt&&mn&&t.texStorage2D(i.TEXTURE_2D,At,et,mt[0].width,mt[0].height);for(let Pe=0,k=mt.length;Pe<k;Pe++)Ge=mt[Pe],Gt?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,wt,pt,Ge):t.texImage2D(i.TEXTURE_2D,Pe,et,wt,pt,Ge);E.generateMipmaps=!1}else Gt?(mn&&t.texStorage2D(i.TEXTURE_2D,At,et,ve.width,ve.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,pt,ve)):t.texImage2D(i.TEXTURE_2D,0,et,wt,pt,ve);b(E,$t)&&v(_e),Ye.__version=Te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Fe(C,E,te){if(E.image.length!==6)return;let _e=fe(C,E),Se=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+te);let Te=n.get(Se);if(Se.version!==Te.__version||_e===!0){t.activeTexture(i.TEXTURE0+te);let Ye=nn.getPrimaries(nn.workingColorSpace),Ne=E.colorSpace===Mi?null:nn.getPrimaries(E.colorSpace),Ue=E.colorSpace===Mi||Ye===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ot=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let Pe=0;Pe<6;Pe++)!ot&&!bt?ve[Pe]=M(E.image[Pe],!1,!0,s.maxCubemapSize):ve[Pe]=bt?E.image[Pe].image:E.image[Pe],ve[Pe]=yt(E,ve[Pe]);let $t=ve[0],wt=y($t)||o,pt=r.convert(E.format,E.colorSpace),et=r.convert(E.type),Ge=A(E.internalFormat,pt,et,E.colorSpace),mt=o&&E.isVideoTexture!==!0,Gt=Te.__version===void 0||_e===!0,mn=U(E,$t,wt);Z(i.TEXTURE_CUBE_MAP,E,wt);let At;if(ot){mt&&Gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,mn,Ge,$t.width,$t.height);for(let Pe=0;Pe<6;Pe++){At=ve[Pe].mipmaps;for(let k=0;k<At.length;k++){let Le=At[k];E.format!==Li?pt!==null?mt?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,k,0,0,Le.width,Le.height,pt,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,k,Ge,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,k,0,0,Le.width,Le.height,pt,et,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,k,Ge,Le.width,Le.height,0,pt,et,Le.data)}}}else{At=E.mipmaps,mt&&Gt&&(At.length>0&&mn++,t.texStorage2D(i.TEXTURE_CUBE_MAP,mn,Ge,ve[0].width,ve[0].height));for(let Pe=0;Pe<6;Pe++)if(bt){mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ve[Pe].width,ve[Pe].height,pt,et,ve[Pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ge,ve[Pe].width,ve[Pe].height,0,pt,et,ve[Pe].data);for(let k=0;k<At.length;k++){let De=At[k].image[Pe].image;mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,k+1,0,0,De.width,De.height,pt,et,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,k+1,Ge,De.width,De.height,0,pt,et,De.data)}}else{mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,pt,et,ve[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ge,pt,et,ve[Pe]);for(let k=0;k<At.length;k++){let Le=At[k];mt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,k+1,0,0,pt,et,Le.image[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,k+1,Ge,pt,et,Le.image[Pe])}}}b(E,wt)&&v(i.TEXTURE_CUBE_MAP),Te.__version=Se.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Xe(C,E,te,_e,Se,Te){let Ye=r.convert(te.format,te.colorSpace),Ne=r.convert(te.type),Ue=A(te.internalFormat,Ye,Ne,te.colorSpace);if(!n.get(E).__hasExternalTextures){let bt=Math.max(1,E.width>>Te),ve=Math.max(1,E.height>>Te);Se===i.TEXTURE_3D||Se===i.TEXTURE_2D_ARRAY?t.texImage3D(Se,Te,Ue,bt,ve,E.depth,0,Ye,Ne,null):t.texImage2D(Se,Te,Ue,bt,ve,0,Ye,Ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ze(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,Se,n.get(te).__webglTexture,0,Ze(E)):(Se===i.TEXTURE_2D||Se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_e,Se,n.get(te).__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(C,E,te){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let _e=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(te||ze(E)){let Se=E.depthTexture;Se&&Se.isDepthTexture&&(Se.type===gs?_e=i.DEPTH_COMPONENT32F:Se.type===ms&&(_e=i.DEPTH_COMPONENT24));let Te=Ze(E);ze(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,_e,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,_e,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,_e,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let _e=Ze(E);te&&ze(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,i.DEPTH24_STENCIL8,E.width,E.height):ze(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let _e=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Se=0;Se<_e.length;Se++){let Te=_e[Se],Ye=r.convert(Te.format,Te.colorSpace),Ne=r.convert(Te.type),Ue=A(Te.internalFormat,Ye,Ne,Te.colorSpace),ot=Ze(E);te&&ze(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Ue,E.width,E.height):ze(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Ue,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);let _e=n.get(E.depthTexture).__webglTexture,Se=Ze(E);if(E.depthTexture.format===zs)ze(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(E.depthTexture.format===Cr)ze(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function $e(C){let E=n.get(C),te=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");ft(E.__webglFramebuffer,C)}else if(te){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]=i.createRenderbuffer(),ut(E.__webglDepthbuffer[_e],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),ut(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(C,E,te){let _e=n.get(C);E!==void 0&&Xe(_e.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&$e(C)}function J(C){let E=C.texture,te=n.get(C),_e=n.get(E);C.addEventListener("dispose",q),C.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture()),_e.__version=E.version,a.memory.textures++);let Se=C.isWebGLCubeRenderTarget===!0,Te=C.isWebGLMultipleRenderTargets===!0,Ye=y(C)||o;if(Se){te.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(o&&E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[Ne]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)te.__webglFramebuffer[Ne][Ue]=i.createFramebuffer()}else te.__webglFramebuffer[Ne]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)te.__webglFramebuffer[Ne]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Te)if(s.drawBuffers){let Ne=C.texture;for(let Ue=0,ot=Ne.length;Ue<ot;Ue++){let bt=n.get(Ne[Ue]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&ze(C)===!1){let Ne=Te?E:[E];te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Ne.length;Ue++){let ot=Ne[Ue];te.__webglColorRenderbuffer[Ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[Ue]);let bt=r.convert(ot.format,ot.colorSpace),ve=r.convert(ot.type),$t=A(ot.internalFormat,bt,ve,ot.colorSpace,C.isXRRenderTarget===!0),wt=Ze(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,$t,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,te.__webglColorRenderbuffer[Ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(te.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Se){t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),Z(i.TEXTURE_CUBE_MAP,E,Ye);for(let Ne=0;Ne<6;Ne++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Xe(te.__webglFramebuffer[Ne][Ue],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ue);else Xe(te.__webglFramebuffer[Ne],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);b(E,Ye)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){let Ne=C.texture;for(let Ue=0,ot=Ne.length;Ue<ot;Ue++){let bt=Ne[Ue],ve=n.get(bt);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),Z(i.TEXTURE_2D,bt,Ye),Xe(te.__webglFramebuffer,C,bt,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,0),b(bt,Ye)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Ne=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,_e.__webglTexture),Z(Ne,E,Ye),o&&E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Xe(te.__webglFramebuffer[Ue],C,E,i.COLOR_ATTACHMENT0,Ne,Ue);else Xe(te.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,Ne,0);b(E,Ye)&&v(Ne),t.unbindTexture()}C.depthBuffer&&$e(C)}function Ke(C){let E=y(C)||o,te=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let _e=0,Se=te.length;_e<Se;_e++){let Te=te[_e];if(b(Te,E)){let Ye=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ne=n.get(Te).__webglTexture;t.bindTexture(Ye,Ne),v(Ye),t.unbindTexture()}}}function We(C){if(o&&C.samples>0&&ze(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],te=C.width,_e=C.height,Se=i.COLOR_BUFFER_BIT,Te=[],Ye=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(C),Ue=C.isWebGLMultipleRenderTargets===!0;if(Ue)for(let ot=0;ot<E.length;ot++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let ot=0;ot<E.length;ot++){Te.push(i.COLOR_ATTACHMENT0+ot),C.depthBuffer&&Te.push(Ye);let bt=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(bt===!1&&(C.depthBuffer&&(Se|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Se|=i.STENCIL_BUFFER_BIT)),Ue&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[ot]),bt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ye])),Ue){let ve=n.get(E[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,te,_e,0,0,te,_e,Se,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ue)for(let ot=0;ot<E.length;ot++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[ot]);let bt=n.get(E[ot]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,bt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function Ze(C){return Math.min(s.maxSamples,C.samples)}function ze(C){let E=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Je(C){let E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function yt(C,E){let te=C.colorSpace,_e=C.format,Se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===jl||te!==ji&&te!==Mi&&(nn.getTransfer(te)===pn?o===!1?e.has("EXT_sRGB")===!0&&_e===Li?(C.format=jl,C.minFilter=vi,C.generateMipmaps=!1):E=uo.sRGBToLinear(E):(_e!==Li||Se!==_s)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),E}this.allocateTextureUnit=F,this.resetTextureUnits=Me,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=ie,this.rebindTextures=ue,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=ze}function xx(i,e,t){let n=t.isWebGL2;function s(r,a=Mi){let o,l=nn.getTransfer(a);if(r===_s)return i.UNSIGNED_BYTE;if(r===pd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===md)return i.UNSIGNED_SHORT_5_5_5_1;if(r===up)return i.BYTE;if(r===dp)return i.SHORT;if(r===Hc)return i.UNSIGNED_SHORT;if(r===fd)return i.INT;if(r===ms)return i.UNSIGNED_INT;if(r===gs)return i.FLOAT;if(r===ia)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===fp)return i.ALPHA;if(r===Li)return i.RGBA;if(r===pp)return i.LUMINANCE;if(r===mp)return i.LUMINANCE_ALPHA;if(r===zs)return i.DEPTH_COMPONENT;if(r===Cr)return i.DEPTH_STENCIL;if(r===jl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===gp)return i.RED;if(r===gd)return i.RED_INTEGER;if(r===yp)return i.RG;if(r===yd)return i.RG_INTEGER;if(r===xd)return i.RGBA_INTEGER;if(r===dl||r===fl||r===pl||r===ml)if(l===pn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===dl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===dl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ml)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Oh||r===Fh||r===Bh||r===kh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Oh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_d)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Hh||r===zh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Hh)return l===pn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===zh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vh||r===Gh||r===Wh||r===Xh||r===qh||r===Yh||r===$h||r===Kh||r===Zh||r===Jh||r===jh||r===Qh||r===eu||r===tu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Vh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$h)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qh)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eu)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tu)return l===pn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gl||r===nu||r===iu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===gl)return l===pn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===iu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xp||r===su||r===ru||r===au)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===gl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===su)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ru)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===au)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hs?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var fc=class extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},fi=class extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}},_x={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let y=t.getJointPose(M,n),g=this._getHandJoint(c,M);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],p=h.position.distanceTo(m.position),u=.02,x=.005;c.inputState.pinching&&p>u+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=u-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pc=class extends Ms{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,p=null,u=null,x=null,M=t.getContextAttributes(),y=null,g=null,b=[],v=[],A=new He,U=null,I=new ei;I.layers.enable(1),I.viewport=new Vn;let L=new ei;L.layers.enable(2),L.viewport=new Vn;let q=[I,L],T=new fc;T.layers.enable(1),T.layers.enable(2);let R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=b[Z];return fe===void 0&&(fe=new Jr,b[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=b[Z];return fe===void 0&&(fe=new Jr,b[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=b[Z];return fe===void 0&&(fe=new Jr,b[Z]=fe),fe.getHandSpace()};function ae(Z){let fe=v.indexOf(Z.inputSource);if(fe===-1)return;let we=b[fe];we!==void 0&&(we.update(Z.inputSource,Z.frame,c||a),we.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Me(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",Me),s.removeEventListener("inputsourceschange",F);for(let Z=0;Z<b.length;Z++){let fe=v[Z];fe!==null&&(v[Z]=null,b[Z].disconnect(fe))}R=null,Y=null,e.setRenderTarget(y),u=null,p=null,m=null,s=null,g=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",Me),s.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let fe={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),g=new Qi(u.framebufferWidth,u.framebufferHeight,{format:Li,type:_s,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let fe=null,we=null,Fe=null;M.depth&&(Fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?Cr:zs,we=M.stencil?Hs:ms);let Xe={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};m=new XRWebGLBinding(s,t),p=m.createProjectionLayer(Xe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),g=new Qi(p.textureWidth,p.textureHeight,{format:Li,type:_s,depthTexture:new bo(p.textureWidth,p.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});let ut=e.properties.get(g);ut.__ignoreDepthValues=p.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(Z){for(let fe=0;fe<Z.removed.length;fe++){let we=Z.removed[fe],Fe=v.indexOf(we);Fe>=0&&(v[Fe]=null,b[Fe].disconnect(we))}for(let fe=0;fe<Z.added.length;fe++){let we=Z.added[fe],Fe=v.indexOf(we);if(Fe===-1){for(let ut=0;ut<b.length;ut++)if(ut>=v.length){v.push(we),Fe=ut;break}else if(v[ut]===null){v[ut]=we,Fe=ut;break}if(Fe===-1)break}let Xe=b[Fe];Xe&&Xe.connect(we)}}let W=new B,z=new B;function V(Z,fe,we){W.setFromMatrixPosition(fe.matrixWorld),z.setFromMatrixPosition(we.matrixWorld);let Fe=W.distanceTo(z),Xe=fe.projectionMatrix.elements,ut=we.projectionMatrix.elements,ft=Xe[14]/(Xe[10]-1),$e=Xe[14]/(Xe[10]+1),ue=(Xe[9]+1)/Xe[5],J=(Xe[9]-1)/Xe[5],Ke=(Xe[8]-1)/Xe[0],We=(ut[8]+1)/ut[0],Ze=ft*Ke,ze=ft*We,Je=Fe/(-Ke+We),yt=Je*-Ke;fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(yt),Z.translateZ(Je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let C=ft+Je,E=$e+Je,te=Ze-yt,_e=ze+(Fe-yt),Se=ue*$e/E*C,Te=J*$e/E*C;Z.projectionMatrix.makePerspective(te,_e,Se,Te,C,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function $(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;T.near=L.near=I.near=Z.near,T.far=L.far=I.far=Z.far,(R!==T.near||Y!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,Y=T.far);let fe=Z.parent,we=T.cameras;$(T,fe);for(let Fe=0;Fe<we.length;Fe++)$(we[Fe],fe);we.length===2?V(T,I,L):T.projectionMatrix.copy(I.projectionMatrix),ie(Z,T,fe)};function ie(Z,fe,we){we===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(we.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ql*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&u===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)};let re=null;function le(Z,fe){if(h=fe.getViewerPose(c||a),x=fe,h!==null){let we=h.views;u!==null&&(e.setRenderTargetFramebuffer(g,u.framebuffer),e.setRenderTarget(g));let Fe=!1;we.length!==T.cameras.length&&(T.cameras.length=0,Fe=!0);for(let Xe=0;Xe<we.length;Xe++){let ut=we[Xe],ft=null;if(u!==null)ft=u.getViewport(ut);else{let ue=m.getViewSubImage(p,ut);ft=ue.viewport,Xe===0&&(e.setRenderTargetTextures(g,ue.colorTexture,p.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(g))}let $e=q[Xe];$e===void 0&&($e=new ei,$e.layers.enable(Xe),$e.viewport=new Vn,q[Xe]=$e),$e.matrix.fromArray(ut.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ut.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ft.x,ft.y,ft.width,ft.height),Xe===0&&(T.matrix.copy($e.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Fe===!0&&T.cameras.push($e)}}for(let we=0;we<b.length;we++){let Fe=v[we],Xe=b[we];Fe!==null&&Xe!==void 0&&Xe.update(Fe,fe,c||a)}re&&re(Z,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),x=null}let Ae=new wd;Ae.setAnimationLoop(le),this.setAnimationLoop=function(Z){re=Z},this.dispose=function(){}}};function vx(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,Td(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,b,v,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(y,g):g.isMeshToonMaterial?(r(y,g),m(y,g)):g.isMeshPhongMaterial?(r(y,g),h(y,g)):g.isMeshStandardMaterial?(r(y,g),p(y,g),g.isMeshPhysicalMaterial&&u(y,g,A)):g.isMeshMatcapMaterial?(r(y,g),x(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),M(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(a(y,g),g.isLineDashedMaterial&&o(y,g)):g.isPointsMaterial?l(y,g,b,v):g.isSpriteMaterial?c(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===si&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===si&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let b=e.get(g).envMap;if(b&&(y.envMap.value=b,y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function a(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function o(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function l(y,g,b,v){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*b,y.scale.value=v*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function h(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function p(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function u(y,g,b){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===si&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,g){g.matcap&&(y.matcap.value=g.matcap)}function M(y,g){let b=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,v){let A=v.program;n.uniformBlockBinding(b,A)}function c(b,v){let A=s[b.id];A===void 0&&(x(b),A=h(b),s[b.id]=A,b.addEventListener("dispose",y));let U=v.program;n.updateUBOMapping(b,U);let I=e.render.frame;r[b.id]!==I&&(p(b),r[b.id]=I)}function h(b){let v=m();b.__bindingPointIndex=v;let A=i.createBuffer(),U=b.__size,I=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,U,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function m(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){let v=s[b.id],A=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let I=0,L=A.length;I<L;I++){let q=Array.isArray(A[I])?A[I]:[A[I]];for(let T=0,R=q.length;T<R;T++){let Y=q[T];if(u(Y,I,T,U)===!0){let ae=Y.__offset,Me=Array.isArray(Y.value)?Y.value:[Y.value],F=0;for(let W=0;W<Me.length;W++){let z=Me[W],V=M(z);typeof z=="number"||typeof z=="boolean"?(Y.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,ae+F,Y.__data)):z.isMatrix3?(Y.__data[0]=z.elements[0],Y.__data[1]=z.elements[1],Y.__data[2]=z.elements[2],Y.__data[3]=0,Y.__data[4]=z.elements[3],Y.__data[5]=z.elements[4],Y.__data[6]=z.elements[5],Y.__data[7]=0,Y.__data[8]=z.elements[6],Y.__data[9]=z.elements[7],Y.__data[10]=z.elements[8],Y.__data[11]=0):(z.toArray(Y.__data,F),F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ae,Y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,v,A,U){let I=b.value,L=v+"_"+A;if(U[L]===void 0)return typeof I=="number"||typeof I=="boolean"?U[L]=I:U[L]=I.clone(),!0;{let q=U[L];if(typeof I=="number"||typeof I=="boolean"){if(q!==I)return U[L]=I,!0}else if(q.equals(I)===!1)return q.copy(I),!0}return!1}function x(b){let v=b.uniforms,A=0,U=16;for(let L=0,q=v.length;L<q;L++){let T=Array.isArray(v[L])?v[L]:[v[L]];for(let R=0,Y=T.length;R<Y;R++){let ae=T[R],Me=Array.isArray(ae.value)?ae.value:[ae.value];for(let F=0,W=Me.length;F<W;F++){let z=Me[F],V=M(z),$=A%U;$!==0&&U-$<V.boundary&&(A+=U-$),ae.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=V.storage}}}let I=A%U;return I>0&&(A+=U-I),b.__size=A,b.__cache={},this}function M(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function y(b){let v=b.target;v.removeEventListener("dispose",y);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}var oa=class{constructor(e={}){let{canvas:t=Pp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let u=new Uint32Array(4),x=new Int32Array(4),M=null,y=null,g=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this._useLegacyLights=!1,this.toneMapping=xs,this.toneMappingExposure=1;let v=this,A=!1,U=0,I=0,L=null,q=-1,T=null,R=new Vn,Y=new Vn,ae=null,Me=new vt(0),F=0,W=t.width,z=t.height,V=1,$=null,ie=null,re=new Vn(0,0,W,z),le=new Vn(0,0,W,z),Ae=!1,Z=new aa,fe=!1,we=!1,Fe=null,Xe=new Ln,ut=new He,ft=new B,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return L===null?V:1}let J=n;function Ke(w,G){for(let Q=0;Q<w.length;Q++){let K=w[Q],j=t.getContext(K,G);if(j!==null)return j}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",Le,!1),J===null){let G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),J=Ke(G,w),J===null)throw Ke(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let We,Ze,ze,Je,yt,C,E,te,_e,Se,Te,Ye,Ne,Ue,ot,bt,ve,$t,wt,pt,et,Ge,mt,Gt;function mn(){We=new H0(J),Ze=new U0(J,We,e),We.init(Ze),Ge=new xx(J,We,Ze),ze=new gx(J,We,Ze),Je=new G0(J),yt=new sx,C=new yx(J,We,ze,yt,Ze,Ge,Je),E=new O0(v),te=new k0(v),_e=new Jp(J,Ze),mt=new L0(J,We,_e,Ze),Se=new z0(J,_e,Je,mt),Te=new Y0(J,Se,_e,Je),wt=new q0(J,Ze,C),bt=new N0(yt),Ye=new ix(v,E,te,We,Ze,mt,bt),Ne=new vx(v,yt),Ue=new ax,ot=new dx(We,Ze),$t=new I0(v,E,te,ze,Te,p,l),ve=new mx(v,Te,Ze),Gt=new Mx(J,Je,Ze,ze),pt=new D0(J,We,Je,Ze),et=new V0(J,We,Je,Ze),Je.programs=Ye.programs,v.capabilities=Ze,v.extensions=We,v.properties=yt,v.renderLists=Ue,v.shadowMap=ve,v.state=ze,v.info=Je}mn();let At=new pc(v,J);this.xr=At,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let w=We.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=We.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(W,z,!1))},this.getSize=function(w){return w.set(W,z)},this.setSize=function(w,G,Q=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,z=G,t.width=Math.floor(w*V),t.height=Math.floor(G*V),Q===!0&&(t.style.width=w+"px",t.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(W*V,z*V).floor()},this.setDrawingBufferSize=function(w,G,Q){W=w,z=G,V=Q,t.width=Math.floor(w*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,G,Q,K){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,G,Q,K),ze.viewport(R.copy(re).multiplyScalar(V).floor())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,G,Q,K){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,G,Q,K),ze.scissor(Y.copy(le).multiplyScalar(V).floor())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){ze.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(w=!0,G=!0,Q=!0){let K=0;if(w){let j=!1;if(L!==null){let ge=L.texture.format;j=ge===xd||ge===yd||ge===gd}if(j){let ge=L.texture.type,Re=ge===_s||ge===ms||ge===Hc||ge===Hs||ge===pd||ge===md,Oe=$t.getClearColor(),Be=$t.getClearAlpha(),St=Oe.r,xt=Oe.g,dt=Oe.b;Re?(u[0]=St,u[1]=xt,u[2]=dt,u[3]=Be,J.clearBufferuiv(J.COLOR,0,u)):(x[0]=St,x[1]=xt,x[2]=dt,x[3]=Be,J.clearBufferiv(J.COLOR,0,x))}else K|=J.COLOR_BUFFER_BIT}G&&(K|=J.DEPTH_BUFFER_BIT),Q&&(K|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ue.dispose(),ot.dispose(),yt.dispose(),E.dispose(),te.dispose(),Te.dispose(),mt.dispose(),Gt.dispose(),Ye.dispose(),At.dispose(),At.removeEventListener("sessionstart",Pt),At.removeEventListener("sessionend",it),Fe&&(Fe.dispose(),Fe=null),ln.stop()};function Pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Je.autoReset,G=ve.enabled,Q=ve.autoUpdate,K=ve.needsUpdate,j=ve.type;mn(),Je.autoReset=w,ve.enabled=G,ve.autoUpdate=Q,ve.needsUpdate=K,ve.type=j}function Le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){let G=w.target;G.removeEventListener("dispose",De),nt(G)}function nt(w){tt(w),yt.remove(w)}function tt(w){let G=yt.get(w).programs;G!==void 0&&(G.forEach(function(Q){Ye.releaseProgram(Q)}),w.isShaderMaterial&&Ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,Q,K,j,ge){G===null&&(G=$e);let Re=j.isMesh&&j.matrixWorld.determinant()<0,Oe=Vi(w,G,Q,K,j);ze.setMaterial(K,Re);let Be=Q.index,St=1;if(K.wireframe===!0){if(Be=Se.getWireframeAttribute(Q),Be===void 0)return;St=2}let xt=Q.drawRange,dt=Q.attributes.position,ct=xt.start*St,cn=(xt.start+xt.count)*St;ge!==null&&(ct=Math.max(ct,ge.start*St),cn=Math.min(cn,(ge.start+ge.count)*St)),Be!==null?(ct=Math.max(ct,0),cn=Math.min(cn,Be.count)):dt!=null&&(ct=Math.max(ct,0),cn=Math.min(cn,dt.count));let sn=cn-ct;if(sn<0||sn===1/0)return;mt.setup(j,K,Oe,Q,Be);let rn,rt=pt;if(Be!==null&&(rn=_e.get(Be),rt=et,rt.setIndex(rn)),j.isMesh)K.wireframe===!0?(ze.setLineWidth(K.wireframeLinewidth*ue()),rt.setMode(J.LINES)):rt.setMode(J.TRIANGLES);else if(j.isLine){let je=K.linewidth;je===void 0&&(je=1),ze.setLineWidth(je*ue()),j.isLineSegments?rt.setMode(J.LINES):j.isLineLoop?rt.setMode(J.LINE_LOOP):rt.setMode(J.LINE_STRIP)}else j.isPoints?rt.setMode(J.POINTS):j.isSprite&&rt.setMode(J.TRIANGLES);if(j.isBatchedMesh)rt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)rt.renderInstances(ct,sn,j.count);else if(Q.isInstancedBufferGeometry){let je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,mi=Math.min(Q.instanceCount,je);rt.renderInstances(ct,sn,mi)}else rt.render(ct,sn)};function jt(w,G,Q){w.transparent===!0&&w.side===_n&&w.forceSinglePass===!1?(w.side=si,w.needsUpdate=!0,Sn(w,G,Q),w.side=vs,w.needsUpdate=!0,Sn(w,G,Q),w.side=_n):Sn(w,G,Q)}this.compile=function(w,G,Q=null){Q===null&&(Q=w),y=ot.get(Q),y.init(),b.push(y),Q.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),w!==Q&&w.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights(v._useLegacyLights);let K=new Set;return w.traverse(function(j){let ge=j.material;if(ge)if(Array.isArray(ge))for(let Re=0;Re<ge.length;Re++){let Oe=ge[Re];jt(Oe,Q,j),K.add(Oe)}else jt(ge,Q,j),K.add(ge)}),b.pop(),y=null,K},this.compileAsync=function(w,G,Q=null){let K=this.compile(w,G,Q);return new Promise(j=>{function ge(){if(K.forEach(function(Re){yt.get(Re).currentProgram.isReady()&&K.delete(Re)}),K.size===0){j(w);return}setTimeout(ge,10)}We.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Ot=null;function Ct(w){Ot&&Ot(w)}function Pt(){ln.stop()}function it(){ln.start()}let ln=new wd;ln.setAnimationLoop(Ct),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(w){Ot=w,At.setAnimationLoop(w),w===null?ln.stop():ln.start()},At.addEventListener("sessionstart",Pt),At.addEventListener("sessionend",it),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(G),G=At.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,G,L),y=ot.get(w,b.length),y.init(),b.push(y),Xe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(Xe),we=this.localClippingEnabled,fe=bt.init(this.clippingPlanes,we),M=Ue.get(w,g.length),M.init(),g.push(M),An(w,G,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort($,ie),this.info.render.frame++,fe===!0&&bt.beginShadows();let Q=y.state.shadowsArray;if(ve.render(Q,w,G),fe===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(M,w),y.setupLights(v._useLegacyLights),G.isArrayCamera){let K=G.cameras;for(let j=0,ge=K.length;j<ge;j++){let Re=K[j];ss(M,w,Re,Re.viewport)}}else ss(M,w,G);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(v,w,G),mt.resetDefaultState(),q=-1,T=null,b.pop(),b.length>0?y=b[b.length-1]:y=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function An(w,G,Q,K){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){K&&ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Xe);let Re=Te.update(w),Oe=w.material;Oe.visible&&M.push(w,Re,Oe,Q,ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){let Re=Te.update(w),Oe=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ft.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ft.copy(Re.boundingSphere.center)),ft.applyMatrix4(w.matrixWorld).applyMatrix4(Xe)),Array.isArray(Oe)){let Be=Re.groups;for(let St=0,xt=Be.length;St<xt;St++){let dt=Be[St],ct=Oe[dt.materialIndex];ct&&ct.visible&&M.push(w,Re,ct,Q,ft.z,dt)}}else Oe.visible&&M.push(w,Re,Oe,Q,ft.z,null)}}let ge=w.children;for(let Re=0,Oe=ge.length;Re<Oe;Re++)An(ge[Re],G,Q,K)}function ss(w,G,Q,K){let j=w.opaque,ge=w.transmissive,Re=w.transparent;y.setupLightsView(Q),fe===!0&&bt.setGlobalState(v.clippingPlanes,Q),ge.length>0&&rs(j,ge,G,Q),K&&ze.viewport(R.copy(K)),j.length>0&&pi(j,G,Q),ge.length>0&&pi(ge,G,Q),Re.length>0&&pi(Re,G,Q),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function rs(w,G,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let ge=Ze.isWebGL2;Fe===null&&(Fe=new Qi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?ia:_s,minFilter:na,samples:ge?4:0})),v.getDrawingBufferSize(ut),ge?Fe.setSize(ut.x,ut.y):Fe.setSize(ec(ut.x),ec(ut.y));let Re=v.getRenderTarget();v.setRenderTarget(Fe),v.getClearColor(Me),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();let Oe=v.toneMapping;v.toneMapping=xs,pi(w,Q,K),C.updateMultisampleRenderTarget(Fe),C.updateRenderTargetMipmap(Fe);let Be=!1;for(let St=0,xt=G.length;St<xt;St++){let dt=G[St],ct=dt.object,cn=dt.geometry,sn=dt.material,rn=dt.group;if(sn.side===_n&&ct.layers.test(K.layers)){let rt=sn.side;sn.side=si,sn.needsUpdate=!0,zi(ct,Q,K,cn,sn,rn),sn.side=rt,sn.needsUpdate=!0,Be=!0}}Be===!0&&(C.updateMultisampleRenderTarget(Fe),C.updateRenderTargetMipmap(Fe)),v.setRenderTarget(Re),v.setClearColor(Me,F),v.toneMapping=Oe}function pi(w,G,Q){let K=G.isScene===!0?G.overrideMaterial:null;for(let j=0,ge=w.length;j<ge;j++){let Re=w[j],Oe=Re.object,Be=Re.geometry,St=K===null?Re.material:K,xt=Re.group;Oe.layers.test(Q.layers)&&zi(Oe,G,Q,Be,St,xt)}}function zi(w,G,Q,K,j,ge){w.onBeforeRender(v,G,Q,K,j,ge),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(v,G,Q,K,w,ge),j.transparent===!0&&j.side===_n&&j.forceSinglePass===!1?(j.side=si,j.needsUpdate=!0,v.renderBufferDirect(Q,G,K,j,w,ge),j.side=vs,j.needsUpdate=!0,v.renderBufferDirect(Q,G,K,j,w,ge),j.side=_n):v.renderBufferDirect(Q,G,K,j,w,ge),w.onAfterRender(v,G,Q,K,j,ge)}function Sn(w,G,Q){G.isScene!==!0&&(G=$e);let K=yt.get(w),j=y.state.lights,ge=y.state.shadowsArray,Re=j.state.version,Oe=Ye.getParameters(w,j.state,ge,G,Q),Be=Ye.getProgramCacheKey(Oe),St=K.programs;K.environment=w.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(w.isMeshStandardMaterial?te:E).get(w.envMap||K.environment),St===void 0&&(w.addEventListener("dispose",De),St=new Map,K.programs=St);let xt=St.get(Be);if(xt!==void 0){if(K.currentProgram===xt&&K.lightsStateVersion===Re)return Rs(w,Oe),xt}else Oe.uniforms=Ye.getUniforms(w),w.onBuild(Q,Oe,v),w.onBeforeCompile(Oe,v),xt=Ye.acquireProgram(Oe,Be),St.set(Be,xt),K.uniforms=Oe.uniforms;let dt=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(dt.clippingPlanes=bt.uniform),Rs(w,Oe),K.needsLights=qo(w),K.lightsStateVersion=Re,K.needsLights&&(dt.ambientLightColor.value=j.state.ambient,dt.lightProbe.value=j.state.probe,dt.directionalLights.value=j.state.directional,dt.directionalLightShadows.value=j.state.directionalShadow,dt.spotLights.value=j.state.spot,dt.spotLightShadows.value=j.state.spotShadow,dt.rectAreaLights.value=j.state.rectArea,dt.ltc_1.value=j.state.rectAreaLTC1,dt.ltc_2.value=j.state.rectAreaLTC2,dt.pointLights.value=j.state.point,dt.pointLightShadows.value=j.state.pointShadow,dt.hemisphereLights.value=j.state.hemi,dt.directionalShadowMap.value=j.state.directionalShadowMap,dt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,dt.spotShadowMap.value=j.state.spotShadowMap,dt.spotLightMatrix.value=j.state.spotLightMatrix,dt.spotLightMap.value=j.state.spotLightMap,dt.pointShadowMap.value=j.state.pointShadowMap,dt.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=xt,K.uniformsList=null,xt}function $s(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=wr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Rs(w,G){let Q=yt.get(w);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Vi(w,G,Q,K,j){G.isScene!==!0&&(G=$e),C.resetTextureUnits();let ge=G.fog,Re=K.isMeshStandardMaterial?G.environment:null,Oe=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ji,Be=(K.isMeshStandardMaterial?te:E).get(K.envMap||Re),St=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,xt=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),dt=!!Q.morphAttributes.position,ct=!!Q.morphAttributes.normal,cn=!!Q.morphAttributes.color,sn=xs;K.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(sn=v.toneMapping);let rn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,rt=rn!==void 0?rn.length:0,je=yt.get(K),mi=y.state.lights;if(fe===!0&&(we===!0||w!==T)){let Yn=w===T&&K.id===q;bt.setState(K,w,Yn)}let Ft=!1;K.version===je.__version?(je.needsLights&&je.lightsStateVersion!==mi.state.version||je.outputColorSpace!==Oe||j.isBatchedMesh&&je.batching===!1||!j.isBatchedMesh&&je.batching===!0||j.isInstancedMesh&&je.instancing===!1||!j.isInstancedMesh&&je.instancing===!0||j.isSkinnedMesh&&je.skinning===!1||!j.isSkinnedMesh&&je.skinning===!0||j.isInstancedMesh&&je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&je.instancingColor===!1&&j.instanceColor!==null||je.envMap!==Be||K.fog===!0&&je.fog!==ge||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==bt.numPlanes||je.numIntersection!==bt.numIntersection)||je.vertexAlphas!==St||je.vertexTangents!==xt||je.morphTargets!==dt||je.morphNormals!==ct||je.morphColors!==cn||je.toneMapping!==sn||Ze.isWebGL2===!0&&je.morphTargetsCount!==rt)&&(Ft=!0):(Ft=!0,je.__version=K.version);let Rn=je.currentProgram;Ft===!0&&(Rn=Sn(K,G,j));let ni=!1,Ei=!1,gi=!1,Dn=Rn.getUniforms(),Kt=je.uniforms;if(ze.useProgram(Rn.program)&&(ni=!0,Ei=!0,gi=!0),K.id!==q&&(q=K.id,Ei=!0),ni||T!==w){Dn.setValue(J,"projectionMatrix",w.projectionMatrix),Dn.setValue(J,"viewMatrix",w.matrixWorldInverse);let Yn=Dn.map.cameraPosition;Yn!==void 0&&Yn.setValue(J,ft.setFromMatrixPosition(w.matrixWorld)),Ze.logarithmicDepthBuffer&&Dn.setValue(J,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dn.setValue(J,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Ei=!0,gi=!0)}if(j.isSkinnedMesh){Dn.setOptional(J,j,"bindMatrix"),Dn.setOptional(J,j,"bindMatrixInverse");let Yn=j.skeleton;Yn&&(Ze.floatVertexTextures?(Yn.boneTexture===null&&Yn.computeBoneTexture(),Dn.setValue(J,"boneTexture",Yn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Dn.setOptional(J,j,"batchingTexture"),Dn.setValue(J,"batchingTexture",j._matricesTexture,C));let Gi=Q.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0&&Ze.isWebGL2===!0)&&wt.update(j,Q,Rn),(Ei||je.receiveShadow!==j.receiveShadow)&&(je.receiveShadow=j.receiveShadow,Dn.setValue(J,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Kt.envMap.value=Be,Kt.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Ei&&(Dn.setValue(J,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&xa(Kt,gi),ge&&K.fog===!0&&Ne.refreshFogUniforms(Kt,ge),Ne.refreshMaterialUniforms(Kt,K,V,z,Fe),wr.upload(J,$s(je),Kt,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(wr.upload(J,$s(je),Kt,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dn.setValue(J,"center",j.center),Dn.setValue(J,"modelViewMatrix",j.modelViewMatrix),Dn.setValue(J,"normalMatrix",j.normalMatrix),Dn.setValue(J,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Yn=K.uniformsGroups;for(let Br=0,Yo=Yn.length;Br<Yo;Br++)if(Ze.isWebGL2){let _a=Yn[Br];Gt.update(_a,Rn),Gt.bind(_a,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function xa(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function qo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,G,Q){yt.get(w.texture).__webglTexture=G,yt.get(w.depthTexture).__webglTexture=Q;let K=yt.get(w);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Q===void 0,K.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,G){let Q=yt.get(w);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,Q=0){L=w,U=G,I=Q;let K=!0,j=null,ge=!1,Re=!1;if(w){let Be=yt.get(w);Be.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(J.FRAMEBUFFER,null),K=!1):Be.__webglFramebuffer===void 0?C.setupRenderTarget(w):Be.__hasExternalTextures&&C.rebindTextures(w,yt.get(w.texture).__webglTexture,yt.get(w.depthTexture).__webglTexture);let St=w.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(Re=!0);let xt=yt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(xt[G])?j=xt[G][Q]:j=xt[G],ge=!0):Ze.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?j=yt.get(w).__webglMultisampledFramebuffer:Array.isArray(xt)?j=xt[Q]:j=xt,R.copy(w.viewport),Y.copy(w.scissor),ae=w.scissorTest}else R.copy(re).multiplyScalar(V).floor(),Y.copy(le).multiplyScalar(V).floor(),ae=Ae;if(ze.bindFramebuffer(J.FRAMEBUFFER,j)&&Ze.drawBuffers&&K&&ze.drawBuffers(w,j),ze.viewport(R),ze.scissor(Y),ze.setScissorTest(ae),ge){let Be=yt.get(w.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,Q)}else if(Re){let Be=yt.get(w.texture),St=G||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Be.__webglTexture,Q||0,St)}q=-1},this.readRenderTargetPixels=function(w,G,Q,K,j,ge,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Oe=Oe[Re]),Oe){ze.bindFramebuffer(J.FRAMEBUFFER,Oe);try{let Be=w.texture,St=Be.format,xt=Be.type;if(St!==Li&&Ge.convert(St)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let dt=xt===ia&&(We.has("EXT_color_buffer_half_float")||Ze.isWebGL2&&We.has("EXT_color_buffer_float"));if(xt!==_s&&Ge.convert(xt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(xt===gs&&(Ze.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-K&&Q>=0&&Q<=w.height-j&&J.readPixels(G,Q,K,j,Ge.convert(St),Ge.convert(xt),ge)}finally{let Be=L!==null?yt.get(L).__webglFramebuffer:null;ze.bindFramebuffer(J.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(w,G,Q=0){let K=Math.pow(2,-Q),j=Math.floor(G.image.width*K),ge=Math.floor(G.image.height*K);C.setTexture2D(G,0),J.copyTexSubImage2D(J.TEXTURE_2D,Q,0,0,w.x,w.y,j,ge),ze.unbindTexture()},this.copyTextureToTexture=function(w,G,Q,K=0){let j=G.image.width,ge=G.image.height,Re=Ge.convert(Q.format),Oe=Ge.convert(Q.type);C.setTexture2D(Q,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,Q.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,Q.unpackAlignment),G.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,K,w.x,w.y,j,ge,Re,Oe,G.image.data):G.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,K,w.x,w.y,G.mipmaps[0].width,G.mipmaps[0].height,Re,G.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,K,w.x,w.y,Re,Oe,G.image),K===0&&Q.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(w,G,Q,K,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ge=w.max.x-w.min.x+1,Re=w.max.y-w.min.y+1,Oe=w.max.z-w.min.z+1,Be=Ge.convert(K.format),St=Ge.convert(K.type),xt;if(K.isData3DTexture)C.setTexture3D(K,0),xt=J.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)C.setTexture2DArray(K,0),xt=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,K.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,K.unpackAlignment);let dt=J.getParameter(J.UNPACK_ROW_LENGTH),ct=J.getParameter(J.UNPACK_IMAGE_HEIGHT),cn=J.getParameter(J.UNPACK_SKIP_PIXELS),sn=J.getParameter(J.UNPACK_SKIP_ROWS),rn=J.getParameter(J.UNPACK_SKIP_IMAGES),rt=Q.isCompressedTexture?Q.mipmaps[j]:Q.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,rt.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,rt.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,w.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,w.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,w.min.z),Q.isDataTexture||Q.isData3DTexture?J.texSubImage3D(xt,j,G.x,G.y,G.z,ge,Re,Oe,Be,St,rt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(xt,j,G.x,G.y,G.z,ge,Re,Oe,Be,rt.data)):J.texSubImage3D(xt,j,G.x,G.y,G.z,ge,Re,Oe,Be,St,rt),J.pixelStorei(J.UNPACK_ROW_LENGTH,dt),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,ct),J.pixelStorei(J.UNPACK_SKIP_PIXELS,cn),J.pixelStorei(J.UNPACK_SKIP_ROWS,sn),J.pixelStorei(J.UNPACK_SKIP_IMAGES,rn),j===0&&K.generateMipmaps&&J.generateMipmap(xt),ze.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),ze.unbindTexture()},this.resetState=function(){U=0,I=0,L=null,ze.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===zc?"display-p3":"srgb",t.unpackColorSpace=nn.workingColorSpace===ko?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xn?Vs:vd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vs?Xn:ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},mc=class extends oa{};mc.prototype.isWebGL1Renderer=!0;var So=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new vt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Eo=class extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var la=class extends Ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ju=new B,ju=new B,Qu=new Ln,Vl=new sa,ja=new Pr,gc=class extends ti{constructor(e=new ai,t=new la){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ju.fromBufferAttribute(t,s-1),ju.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ju.distanceTo(ju);e.setAttribute("lineDistance",new Mn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;Qu.copy(s).invert(),Vl.copy(e.ray).applyMatrix4(Qu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new B,h=new B,m=new B,p=new B,u=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){let g=Math.max(0,a.start),b=Math.min(x.count,a.start+a.count);for(let v=g,A=b-1;v<A;v+=u){let U=x.getX(v),I=x.getX(v+1);if(c.fromBufferAttribute(y,U),h.fromBufferAttribute(y,I),Vl.distanceSqToSegment(c,h,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let q=e.ray.origin.distanceTo(p);q<e.near||q>e.far||t.push({distance:q,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,a.start),b=Math.min(y.count,a.start+a.count);for(let v=g,A=b-1;v<A;v+=u){if(c.fromBufferAttribute(y,v),h.fromBufferAttribute(y,v+1),Vl.distanceSqToSegment(c,h,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(p);I<e.near||I>e.far||t.push({distance:I,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},ed=new B,td=new B,To=class extends gc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ed.fromBufferAttribute(t,s),td.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ed.distanceTo(td);e.setAttribute("lineDistance",new Mn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var wo=class extends bi{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,u=(a-h)/p;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new He:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new B,s=[],r=[],a=[],o=new B,l=new Ln;for(let u=0;u<=e;u++){let x=u/e;s[u]=this.getTangentAt(x,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Zn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,x))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Zn(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],u*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ca=class extends Si{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new He,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=l-this.aX,u=c-this.aY;l=p*h-u*m+this.aX,c=p*m+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yc=class extends ca{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,m){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+m)+(l-o)/m;p*=h,u*=h,s(a,o,p,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Qa=new B,Gl=new Gc,Wl=new Gc,Xl=new Gc,xc=class extends Si{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Qa.subVectors(s[0],s[1]).add(s[0]),c=Qa);let m=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Qa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qa),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(m),u),M=Math.pow(m.distanceToSquared(p),u),y=Math.pow(p.distanceToSquared(h),u);M<1e-4&&(M=1),x<1e-4&&(x=M),y<1e-4&&(y=M),Gl.initNonuniformCatmullRom(c.x,m.x,p.x,h.x,x,M,y),Wl.initNonuniformCatmullRom(c.y,m.y,p.y,h.y,x,M,y),Xl.initNonuniformCatmullRom(c.z,m.z,p.z,h.z,x,M,y)}else this.curveType==="catmullrom"&&(Gl.initCatmullRom(c.x,m.x,p.x,h.x,this.tension),Wl.initCatmullRom(c.y,m.y,p.y,h.y,this.tension),Xl.initCatmullRom(c.z,m.z,p.z,h.z,this.tension));return n.set(Gl.calc(l),Wl.calc(l),Xl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function bx(i,e){let t=1-i;return t*t*e}function Sx(i,e){return 2*(1-i)*i*e}function Ex(i,e){return i*i*e}function jr(i,e,t,n){return bx(i,e)+Sx(i,t)+Ex(i,n)}function Tx(i,e){let t=1-i;return t*t*t*e}function wx(i,e){let t=1-i;return 3*t*t*i*e}function Ax(i,e){return 3*(1-i)*i*i*e}function Rx(i,e){return i*i*i*e}function Qr(i,e,t,n,s){return Tx(i,e)+wx(i,t)+Ax(i,n)+Rx(i,s)}var Ao=class extends Si{constructor(e=new He,t=new He,n=new He,s=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qr(e,s.x,r.x,a.x,o.x),Qr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_c=class extends Si{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qr(e,s.x,r.x,a.x,o.x),Qr(e,s.y,r.y,a.y,o.y),Qr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ro=class extends Si{constructor(e=new He,t=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new He){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new He){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vc=class extends Si{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends Si{constructor(e=new He,t=new He,n=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(jr(e,s.x,r.x,a.x),jr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mc=class extends Si{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(jr(e,s.x,r.x,a.x),jr(e,s.y,r.y,a.y),jr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(nd(o,l.x,c.x,h.x,m.x),nd(o,l.y,c.y,h.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new He().fromArray(s))}return this}},id=Object.freeze({__proto__:null,ArcCurve:yc,CatmullRomCurve3:xc,CubicBezierCurve:Ao,CubicBezierCurve3:_c,EllipseCurve:ca,LineCurve:Ro,LineCurve3:vc,QuadraticBezierCurve:Co,QuadraticBezierCurve3:Mc,SplineCurve:Po}),bc=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new id[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new id[s.type]().fromJSON(s))}return this}},Lr=class extends bc{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ro(this.currentPoint.clone(),new He(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Co(this.currentPoint.clone(),new He(e,t),new He(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ao(this.currentPoint.clone(),new He(e,t),new He(n,s),new He(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Po(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new ca(e,t,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Es=class i extends ai{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],p=[],u=[],x=0,M=[],y=n/2,g=0;b(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Mn(m,3)),this.setAttribute("normal",new Mn(p,3)),this.setAttribute("uv",new Mn(u,2));function b(){let A=new B,U=new B,I=0,L=(t-e)/n;for(let q=0;q<=r;q++){let T=[],R=q/r,Y=R*(t-e)+e;for(let ae=0;ae<=s;ae++){let Me=ae/s,F=Me*l+o,W=Math.sin(F),z=Math.cos(F);U.x=Y*W,U.y=-R*n+y,U.z=Y*z,m.push(U.x,U.y,U.z),A.set(W,L,z).normalize(),p.push(A.x,A.y,A.z),u.push(Me,1-R),T.push(x++)}M.push(T)}for(let q=0;q<s;q++)for(let T=0;T<r;T++){let R=M[T][q],Y=M[T+1][q],ae=M[T+1][q+1],Me=M[T][q+1];h.push(R,Y,Me),h.push(Y,ae,Me),I+=6}c.addGroup(g,I,0),g+=I}function v(A){let U=x,I=new He,L=new B,q=0,T=A===!0?e:t,R=A===!0?1:-1;for(let ae=1;ae<=s;ae++)m.push(0,y*R,0),p.push(0,R,0),u.push(.5,.5),x++;let Y=x;for(let ae=0;ae<=s;ae++){let F=ae/s*l+o,W=Math.cos(F),z=Math.sin(F);L.x=T*z,L.y=y*R,L.z=T*W,m.push(L.x,L.y,L.z),p.push(0,R,0),I.x=W*.5+.5,I.y=z*.5*R+.5,u.push(I.x,I.y),x++}for(let ae=0;ae<s;ae++){let Me=U+ae,F=Y+ae;A===!0?h.push(F,F+1,Me):h.push(F+1,F,Me),q+=3}c.addGroup(g,q,A===!0?1:2),g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Di=class i extends Es{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Io=class i extends ai{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Mn(r,3)),this.setAttribute("normal",new Mn(r.slice(),3)),this.setAttribute("uv",new Mn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let v=new B,A=new B,U=new B;for(let I=0;I<t.length;I+=3)u(t[I+0],v),u(t[I+1],A),u(t[I+2],U),l(v,A,U,b)}function l(b,v,A,U){let I=U+1,L=[];for(let q=0;q<=I;q++){L[q]=[];let T=b.clone().lerp(A,q/I),R=v.clone().lerp(A,q/I),Y=I-q;for(let ae=0;ae<=Y;ae++)ae===0&&q===I?L[q][ae]=T:L[q][ae]=T.clone().lerp(R,ae/Y)}for(let q=0;q<I;q++)for(let T=0;T<2*(I-q)-1;T++){let R=Math.floor(T/2);T%2===0?(p(L[q][R+1]),p(L[q+1][R]),p(L[q][R])):(p(L[q][R+1]),p(L[q+1][R+1]),p(L[q+1][R]))}}function c(b){let v=new B;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(b),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function h(){let b=new B;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];let A=y(b)/2/Math.PI+.5,U=g(b)/Math.PI+.5;a.push(A,1-U)}x(),m()}function m(){for(let b=0;b<a.length;b+=6){let v=a[b+0],A=a[b+2],U=a[b+4],I=Math.max(v,A,U),L=Math.min(v,A,U);I>.9&&L<.1&&(v<.2&&(a[b+0]+=1),A<.2&&(a[b+2]+=1),U<.2&&(a[b+4]+=1))}}function p(b){r.push(b.x,b.y,b.z)}function u(b,v){let A=b*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function x(){let b=new B,v=new B,A=new B,U=new B,I=new He,L=new He,q=new He;for(let T=0,R=0;T<r.length;T+=9,R+=6){b.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),A.set(r[T+6],r[T+7],r[T+8]),I.set(a[R+0],a[R+1]),L.set(a[R+2],a[R+3]),q.set(a[R+4],a[R+5]),U.copy(b).add(v).add(A).divideScalar(3);let Y=y(U);M(I,R+0,b,Y),M(L,R+2,v,Y),M(q,R+4,A,Y)}}function M(b,v,A,U){U<0&&b.x===1&&(a[v]=b.x-1),A.x===0&&A.z===0&&(a[v]=U/2/Math.PI+.5)}function y(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Lo=class i extends Io{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Dr=class extends Lr{constructor(e){super(e),this.uuid=Nr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Lr().fromJSON(s))}return this}},Cx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ld(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,m,p,u;if(n&&(r=Ux(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let x=t;x<s;x+=t)m=i[x],p=i[x+1],m<o&&(o=m),p<l&&(l=p),m>c&&(c=m),p>h&&(h=p);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return ha(r,a,t,o,l,u,0),a}};function Ld(i,e,t,n,s){let r,a;if(s===Xx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=sd(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=sd(r,i[r],i[r+1],a);return a&&zo(a,a.next)&&(da(a),a=a.next),a}function Ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zo(t,t.next)||vn(t.prev,t,t.next)===0)){if(da(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ha(i,e,t,n,s,r,a){if(!i)return;!a&&r&&kx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Ix(i,n,s,r):Px(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),da(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Lx(Ws(i),e,t),ha(i,e,t,n,s,r,2)):a===2&&Dx(i,e,t,n,s,r):ha(Ws(i),e,t,n,s,r,1);break}}}function Px(i){let e=i.prev,t=i,n=i.next;if(vn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,m=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=p&&x.y>=m&&x.y<=u&&Sr(s,o,r,l,a,c,x.x,x.y)&&vn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Ix(i,e,t,n){let s=i.prev,r=i,a=i.next;if(vn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,m=r.y,p=a.y,u=o<l?o<c?o:c:l<c?l:c,x=h<m?h<p?h:p:m<p?m:p,M=o>l?o>c?o:c:l>c?l:c,y=h>m?h>p?h:p:m>p?m:p,g=Sc(u,x,e,t,n),b=Sc(M,y,e,t,n),v=i.prevZ,A=i.nextZ;for(;v&&v.z>=g&&A&&A.z<=b;){if(v.x>=u&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Sr(o,h,l,m,c,p,v.x,v.y)&&vn(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=u&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Sr(o,h,l,m,c,p,A.x,A.y)&&vn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=g;){if(v.x>=u&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Sr(o,h,l,m,c,p,v.x,v.y)&&vn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=b;){if(A.x>=u&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Sr(o,h,l,m,c,p,A.x,A.y)&&vn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Lx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!zo(s,r)&&Dd(s,n,n.next,r)&&ua(s,r)&&ua(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),da(n),da(n.next),n=i=r),n=n.next}while(n!==i);return Ws(n)}function Dx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vx(a,o)){let l=Ud(a,o);a=Ws(a,a.next),l=Ws(l,l.next),ha(a,e,t,n,s,r,0),ha(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ux(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Ld(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(zx(c));for(s.sort(Nx),r=0;r<s.length;r++)t=Ox(s[r],t);return t}function Nx(i,e){return i.x-e.x}function Ox(i,e){let t=Fx(i,e);if(!t)return e;let n=Ud(t,i);return Ws(n,n.next),Ws(t,t.next)}function Fx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,m;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Sr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(m=Math.abs(a-t.y)/(r-t.x),ua(t,i)&&(m<h||m===h&&(t.x>s.x||t.x===s.x&&Bx(s,t)))&&(s=t,h=m)),t=t.next;while(t!==o);return s}function Bx(i,e){return vn(i.prev,i,e.prev)<0&&vn(e.next,i,i.next)<0}function kx(i,e,t,n){let s=i;do s.z===0&&(s.z=Sc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hx(s)}function Hx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Sc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function zx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Sr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Vx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Gx(i,e)&&(ua(i,e)&&ua(e,i)&&Wx(i,e)&&(vn(i.prev,i,e.prev)||vn(i,e.prev,e))||zo(i,e)&&vn(i.prev,i,i.next)>0&&vn(e.prev,e,e.next)>0)}function vn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zo(i,e){return i.x===e.x&&i.y===e.y}function Dd(i,e,t,n){let s=to(vn(i,e,t)),r=to(vn(i,e,n)),a=to(vn(t,n,i)),o=to(vn(t,n,e));return!!(s!==r&&a!==o||s===0&&eo(i,t,e)||r===0&&eo(i,n,e)||a===0&&eo(t,i,n)||o===0&&eo(t,e,n))}function eo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function to(i){return i>0?1:i<0?-1:0}function Gx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ua(i,e){return vn(i.prev,i,i.next)<0?vn(i,e,i.next)>=0&&vn(i,i.prev,e)>=0:vn(i,e,i.prev)<0||vn(i,i.next,e)<0}function Wx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ud(i,e){let t=new Ec(i.i,i.x,i.y),n=new Ec(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sd(i,e,t,n){let s=new Ec(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function da(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ec(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ea=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];rd(e),ad(n,e);let a=e.length;t.forEach(rd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ad(n,t[l]);let o=Cx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function rd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ad(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Do=class i extends Io{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var fa=class i extends ai{constructor(e=new Dr([new He(0,.5),new He(-.5,-.5),new He(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Mn(s,3)),this.setAttribute("normal",new Mn(r,3)),this.setAttribute("uv",new Mn(a,2));function c(h){let m=s.length/3,p=h.extractPoints(t),u=p.shape,x=p.holes;ea.isClockWise(u)===!1&&(u=u.reverse());for(let y=0,g=x.length;y<g;y++){let b=x[y];ea.isClockWise(b)===!0&&(x[y]=b.reverse())}let M=ea.triangulateShape(u,x);for(let y=0,g=x.length;y<g;y++){let b=x[y];u=u.concat(b)}for(let y=0,g=u.length;y<g;y++){let b=u[y];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let y=0,g=M.length;y<g;y++){let b=M[y],v=b[0]+m,A=b[1]+m,U=b[2]+m;n.push(v,A,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return qx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function qx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ki=class i extends ai{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],m=new B,p=new B,u=[],x=[],M=[],y=[];for(let g=0;g<=n;g++){let b=[],v=g/n,A=0;g===0&&a===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let U=0;U<=t;U++){let I=U/t;m.x=-e*Math.cos(s+I*r)*Math.sin(a+v*o),m.y=e*Math.cos(a+v*o),m.z=e*Math.sin(s+I*r)*Math.sin(a+v*o),x.push(m.x,m.y,m.z),p.copy(m).normalize(),M.push(p.x,p.y,p.z),y.push(I+A,1-v),b.push(c++)}h.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){let v=h[g][b+1],A=h[g][b],U=h[g+1][b],I=h[g+1][b+1];(g!==0||a>0)&&u.push(v,A,I),(g!==n-1||l<Math.PI)&&u.push(A,U,I)}this.setIndex(u),this.setAttribute("position",new Mn(x,3)),this.setAttribute("normal",new Mn(M,3)),this.setAttribute("uv",new Mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Gn=class extends Ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function no(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ur=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tc=class extends Ur{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ou,endingEnd:ou}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case lu:r=e,o=2*t-n;break;case cu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lu:a=e,l=2*n-t;break;case cu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,p=this._weightPrev,u=this._weightNext,x=(n-t)/(s-t),M=x*x,y=M*x,g=-p*y+2*p*M-p*x,b=(1+p)*y+(-1.5-2*p)*M+(-.5+p)*x+1,v=(-1-u)*y+(1.5+u)*M+.5*x,A=u*y-u*M;for(let U=0;U!==o;++U)r[U]=g*a[h+U]+b*a[c+U]+v*a[l+U]+A*a[m+U];return r}},wc=class extends Ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),m=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*m+a[l+p]*h;return r}},Ac=class extends Ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ui=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=no(t,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:no(e.times,Array),values:no(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case so:t=this.InterpolantFactoryMethodDiscrete;break;case ro:t=this.InterpolantFactoryMethodLinear;break;case yl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return ro;case this.InterpolantFactoryMethodSmooth:return yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Yx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,p=m-n,u=m+n;for(let x=0;x!==n;++x){let M=t[m+x];if(M!==t[p+x]||M!==t[u+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,p=a*n;for(let u=0;u!==n;++u)t[p+u]=t[m+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=ro;var Xs=class extends Ui{};Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=so;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends Ui{};Rc.prototype.ValueTypeName="color";var Cc=class extends Ui{};Cc.prototype.ValueTypeName="number";var Pc=class extends Ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)bs.slerpFlat(r,0,a,c-o,a,c,l);return r}},pa=class extends Ui{InterpolantFactoryMethodLinear(e){return new Pc(this.times,this.values,this.getValueSize(),e)}};pa.prototype.ValueTypeName="quaternion";pa.prototype.DefaultInterpolation=ro;pa.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends Ui{};qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=so;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends Ui{};Ic.prototype.ValueTypeName="vector";var Lc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,p=c.length;m<p;m+=2){let u=c[m],x=c[m+1];if(u.global&&(u.lastIndex=0),u.test(h))return x}return null}}},$x=new Lc,Dc=class{constructor(e){this.manager=e!==void 0?e:$x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Uo=class extends ti{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var ql=new Ln,od=new B,ld=new B,Uc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new aa,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;od.setFromMatrixPosition(e.matrixWorld),t.position.copy(od),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Nc=class extends Uc{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends Uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new Nc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Oo=class extends Uo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wc="\\[\\]\\.:\\/",Kx=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",Zx="[^"+Wc.replace("\\.","")+"]",Jx=/((?:WC+[\/:])*)/.source.replace("WC",Xc),jx=/(WCOD+)?/.source.replace("WCOD",Zx),Qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),e_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),t_=new RegExp("^"+Jx+jx+Qx+e_+"$"),n_=["material","materials","bones","map"],Oc=class{constructor(e,t,n){let s=n||yn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kx,"")}static parseTrackName(e){let t=t_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);n_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yn.Composite=Oc;yn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yn.prototype.GetterByBindingType=[yn.prototype._getValue_direct,yn.prototype._getValue_array,yn.prototype._getValue_arrayElement,yn.prototype._getValue_toArray];yn.prototype.SetterByBindingTypeAndVersioning=[[yn.prototype._setValue_direct,yn.prototype._setValue_direct_setNeedsUpdate,yn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yn.prototype._setValue_array,yn.prototype._setValue_array_setNeedsUpdate,yn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yn.prototype._setValue_arrayElement,yn.prototype._setValue_arrayElement_setNeedsUpdate,yn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yn.prototype._setValue_fromArray,yn.prototype._setValue_fromArray_setNeedsUpdate,yn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x_=new Float32Array(1);var Fo=class{constructor(e,t,n=0,s=1/0){this.ray=new sa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Fc(e,this,n,t),n.sort(cd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fc(e[s],this,n,t);return n.sort(cd),n}};function cd(i,e){return i.distance-e.distance}function Fc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Fc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);var qc=35,Yc=25,$c=.29,gt=.95,qn=.35,ts=200,ns=7,Ts=300,As=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function s_(i){let e=typeof i=="string"?r_(i):i>>>0;return function(){e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t=(t^t>>>7)>>>0,t/4294967296}}function r_(i){let e=0;for(let t=0;t<i.length;t++)e=Math.imul(31,e)+i.charCodeAt(t),e=e>>>0;return e}var a_=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],o_=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch","paladin","exorcist","bandit","ranger","blacksmith","alchemist"],Vo={tank:["knight","berserker","werewolf","ghoul"],melee:["assassin","ninja","samurai","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["hunter","ranger","alchemist"],caster:["mage","witch"]},ma={tank:2,melee:2,support:1,ranged:1,caster:1};function l_(i){let e=Math.max(1,i),t=Object.keys(ma),n=t.reduce((l,c)=>l+(ma[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(ma[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(ma[c]??0)-(ma[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var Qe={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},is=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist"];function c_(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var en={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:4,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5}},Go={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331}},ga={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp"},Hi=is.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function h_(i,e){As&&(is.includes(i)&&Hi[i]&&Hi[i].kills++,is.includes(e)&&Hi[e]&&Hi[e].deaths++)}function u_(i,e){if(!As)return;for(let n of i)!n||!Hi[n.class]||(Hi[n.class].battles++,e!=null&&(n.player===e?Hi[n.class].wins++:Hi[n.class].losses++));let t=is.map(n=>{let s=Hi[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var Wo={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:8,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:2,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:3,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:5,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:3,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:2,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 3 turns.",cost:5,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage to one enemy and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}]};function xe(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function ya(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,m=(u,x,M,y)=>{if(M)u.hp=Math.min(u.maxHp,u.hp+x),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${x}`,!1,"heal");else{let g=u===s,b=!0;if(!g&&!y){let v=xe(u,"agi")*.7+xe(u,"luk")*.3;b=Math.random()*Math.max(.001,v)<=xe(s,"dex")}return b?(u.hp=Math.max(0,u.hp-x),u!==s&&(h=x),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(x),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u,s)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),b}},p=(u,x,M,y)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,x,M,!1,y?"buff":"debuff")};switch(i){case"brave":s.tempBuff={vit:3,duration:3},p(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let u=2,x=1;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,r.vit=Math.max(1,(r.vit||0)-x),s.vit=(s.vit||0)+x,p(r.x,r.y,`-${u} STR and -${x} VIT`,!1),p(s.x,s.y,`+${u} STR and +${x} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(xe(s,"int")-(xe(r,"int")*.7+xe(r,"luk")*.2)));m(r,u,!1,!0)}break;case"manaDrain":if(r){let u=Math.max(1,Math.floor(xe(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-u),s.mp=(s.mp||0)+u,p(r.x,r.y,`-${u} MP`,!1),p(s.x,s.y,`+${u} MP`,!0)}break;case"mantra":if(r){let u=Math.max(1,Math.floor(xe(s,"int")*.3));s.tempBuff={int:u,duration:3},p(s.x,s.y,`+${u} LUK`,!0),r.tempBuff={luk:u,duration:3},p(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(m(s,Math.max(1,Math.floor(xe(s,"int")*.3+xe(s,"luk")*.15)),!0),!r)break;m(r,Math.max(1,Math.floor(xe(s,"int")*.3+xe(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,p(r.x,r.y,`-${u} VIT`,!1),p(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"str")*.7-(xe(r,"vit")*.3+xe(r,"luk")*.2)));m(r,u,!1)&&m(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff={agi:u,duration:3},p(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"str")*.6));m(r,u,!1)}break;case"focus":s.tempBuff={dex:3,duration:3},p(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"dex")*.7-(xe(r,"vit")*.3+xe(r,"luk")*.2)));m(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,p(r.x,r.y,`-${u} AGI`,!1),p(s.x,s.y,`+${u} AGI`,!0)}break;case"execute":if(r){let u=Math.max(1,Math.floor(xe(s,"agi")*.8-(xe(r,"vit")*.3+xe(r,"luk")*.2)));m(r,u,!1)}break;case"berserk":r&&(m(r,Math.max(1,Math.floor(xe(s,"str")*.8-xe(r,"vit")*.3+xe(r,"luk")*.2)),!1),m(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff={str:u,vit:u,duration:2},p(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,p(r.x,r.y,`-${u} INT`,!1),p(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(xe(s,"int")*.6-(xe(r,"int")*.4+xe(r,"luk")*.2)));m(r,u,!1,!0),m(s,u,!0)}break;case"blind":{if(!r)break;let u=1;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,p(r.x,r.y,`-${u} DEX`,!1),p(s.x,s.y,`+${u} DEX`,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"dex")*.7-(xe(r,"vit")*.3+xe(r,"luk")*.2)));m(r,u,!1)}break;case"iaido":s.tempBuff={str:1,dex:1,duration:3},p(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"str")*.4+xe(s,"dex")*.4-(xe(r,"vit")*.3+xe(r,"luk")*.2)));m(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"str")*.7+xe(s,"agi")*.1-(xe(r,"vit")*.3+xe(r,"luk")*.2)));m(r,u,!1)}break;case"howl":s.tempBuff={str:2,agi:2,duration:3},p(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let u=Math.max(1,Math.floor(xe(s,"int")*.5));m(r,u,!0),m(s,3,!1)}break;case"judgement":{if(!r)break;let u=Math.max(1,Math.floor(s.maxHp-s.hp-(xe(r,"int")*.2+xe(r,"luk")*.1)));m(r,u,!1,!0)}break;case"sanctuary":s.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},r.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),p(s.x,s.y,"+1 ALL STATS",!0),p(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let u=Math.max(1,Math.floor(r.maxHp-r.hp-(xe(r,"int")*.4+xe(r,"luk")*.2)));m(r,u,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,p(r.x,r.y,"-2 LUK",!1),p(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"luk")*.8-(xe(r,"vit")*.3+xe(r,"luk")*.2)));m(r,u,!1)}break;case"windWalk":s.tempBuff={dex:1,agi:3,duration:3},p(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"dex")*.6-(xe(r,"vit")*.3+xe(r,"luk")*.2)));if(m(r,u,!1)&&n.world&&n.units&&n.updateUnitPosition){let M=Math.max(1,Math.floor(u*.2)),y=p_(n.world,n.units,s,r,M),g=r.x,b=r.y;r.x=y.newGx,r.y=y.newGy,y.collisionDamage>0?(console.log("knockback damage",{damage:y.collisionDamage}),n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),m(r,y.collisionDamage,!1),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)):n.animateKnockback?n.animateKnockback(r,g,b,y.newGx,y.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r))}}break;case"forge":s.tempBuff={str:2,duration:3},r.tempBuff={str:2,duration:3},p(s.x,s.y,"+2 STR",!0),p(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff={str:3,vit:3,duration:3},r.tempBuff={str:3,vit:3,duration:3},p(s.x,s.y,"+3 STR, +3 VIT",!0),p(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let u=Math.max(1,Math.floor(xe(r,"luk")*.3));r.tempDebuff={poison:u,duration:3},p(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"int")*.8-(xe(r,"int")*.4+xe(r,"luk")*.2)));m(r,u,!1,!0);let x=Math.max(1,Math.floor(u*.5));s.luk=Math.max(1,(s.luk||0)+x),p(s.x,s.y,`+${x} LUK`,!0)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function Nd(i){let e=qc,t=Yc,n=Array.from({length:t},()=>Array(e).fill(!1)),s=Array.from({length:t},()=>Array(e).fill(0)),r=Array.from({length:t},()=>Array(e).fill(Qe.GRASS)),a=i!=null?s_(i):()=>Math.random(),o=Math.floor(e/2),l=Math.floor(t/2),c=o,h=0,m=o,p=t-1,u=2,x=3;function M(z,V,$,ie){let re=ie;for(let le=V;le<=$;le++)if(!(le<0||le>=t))for(let Ae=-u;Ae<=u;Ae++){let Z=re+Ae;Z<0||Z>=e||(n[le][Z]=!0,r[le][Z]=z,s[le][Z]=1)}}M(Qe.BASE_TOP,h,h+x-1,c),M(Qe.BASE_BOTTOM,p-x+1,p,m),M(Qe.CENTER,l-1,l+1,o);let y=new Set,g=(z,V)=>Math.abs(z-o)<=2&&Math.abs(V-l)<=1,b=(z,V)=>{z<0||z>=e||V<0||V>=t||g(z,V)||y.add(V*e+z)},v=Math.floor(e/2),A=Math.floor(t/2),U=Math.min(e,t)*$c,I=Math.max(60,(t+e)*2);for(let z=0;z<2;z++){let V=z===0?v-U:v+U,$=z===0?Math.PI/2:-Math.PI/2,ie=z===0?Math.PI*3/2:Math.PI/2;for(let re=0;re<=I;re++){let le=re/I,Ae=$+le*(ie-$),Z=V+U*Math.cos(Ae),fe=A+U*Math.sin(Ae),we=Math.round(Z),Fe=Math.round(fe);b(we,Fe),b(we+1,Fe),b(we-1,Fe),b(we,Fe+1),b(we,Fe-1)}}let L=[[0,1],[0,-1],[1,0],[-1,0]];for(let z=0;z<1;z++){let V=[];y.forEach($=>{let ie=$%e,re=$/e|0;for(let[le,Ae]of L){let Z=ie+le,fe=re+Ae;if(Z<0||Z>=e||fe<0||fe>=t)continue;let we=fe*e+Z;y.has(we)||V.push(we)}}),V.forEach($=>y.add($))}y.forEach(z=>{let V=z%e,$=z/e|0;r[$][V]===Qe.BASE_TOP||r[$][V]===Qe.BASE_BOTTOM||r[$][V]===Qe.CENTER||(n[$][V]=!0,r[$][V]=Qe.PATH,s[$][V]=1)});let q=Math.round(v-U*1.6),T=Math.round(v+U*1.6),R=Math.round(v-U),Y=Math.round(v+U),ae=1;for(let z=l-ae;z<=l+ae;z++)if(!(z<0||z>=t))for(let V=q;V<=T;V++)V<0||V>=e||(n[z][V]=!0,r[z][V]!==Qe.CENTER&&r[z][V]!==Qe.BASE_TOP&&r[z][V]!==Qe.BASE_BOTTOM&&(r[z][V]=Qe.PATH),s[z][V]=Math.max(s[z][V],1));function Me(z,V,$,ie){let re=Math.max(1,Math.min(z,V)),le=Math.min(t-2,Math.max(z,V)),Ae=Math.max(1,Math.min($,ie)),Z=Math.min(e-2,Math.max($,ie));for(let fe=re;fe<=le;fe++)for(let we=Ae;we<=Z;we++)r[fe][we]===Qe.BASE_TOP||r[fe][we]===Qe.BASE_BOTTOM||r[fe][we]===Qe.CENTER||(n[fe][we]=!0,r[fe][we]=Qe.PATH,s[fe][we]=1)}let F=3,W=3;Me(h,h+F-1,R,c-1),Me(h,h+F-1,c+1,Y),Me(p-W+1,p,R,m-1),Me(p-W+1,p,m+1,Y),M(Qe.BASE_TOP,h,h+x-1,c),M(Qe.BASE_BOTTOM,p-x+1,p,m),M(Qe.CENTER,l-1,l+1,o);for(let z=0;z<t;z++)for(let V=0;V<e;V++){if(n[z][V]||r[z][V]===Qe.BASE_TOP||r[z][V]===Qe.BASE_BOTTOM||r[z][V]===Qe.CENTER)continue;let $=Math.abs(V-c)<=4&&Math.abs(z-h)<=3,ie=Math.abs(V-m)<=4&&Math.abs(z-p)<=3,re=$||ie,le=a();le<.55&&!re?(r[z][V]=Qe.TREE,s[z][V]=1+Math.floor(a()*2)):le<.75||re&&le<.5?(r[z][V]=Qe.WATER,s[z][V]=0):(r[z][V]=Qe.ROCK,s[z][V]=1+Math.floor(a()*2))}return{w:e,h:t,path:n,height:s,type:r,topBaseX:c,topBaseY:h,botBaseX:m,botBaseY:p}}function d_(i,e,t){let n=e===1?Qe.BASE_BOTTOM:Qe.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function f_(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===Qe.CENTER&&e.push({gx:n,gy:t});return e}function Od(i,e){let t=f_(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function Fr(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===Qe.TREE||n===Qe.WATER||n===Qe.ROCK)}function p_(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let m=0;for(let p=0;p<s;p++){let u=r+c,x=a+h,M=u<0||u>=i.w||x<0||x>=i.h,y=!Fr(i,u,x),g=e.some(b=>b.hp>0&&b.id!==n.id&&b.x===u&&b.y===x);if(M||y||g){let b=Math.max(1,m*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:b}}r=u,a=x,m++}return{newGx:r,newGy:a,collisionDamage:0}}function m_(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),m=r<o?1:-1,p=a<l?1:-1,u=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*u;x>-h&&(u-=h,r+=m),x<c&&(u+=c,a+=p)}return s}function Ys(i,e,t,n,s){let r=m_(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!Fr(i,o.x,o.y))return!1}return!0}function Xo(i,e,t,n,s,r){let a=(p,u)=>u*i.w+p,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null,m=h?new Set(s.filter(p=>p.hp>0&&p.player!==r.player).map(p=>p.y*i.w+p.x)):null;for(;l.length;){let{x:p,y:u,d:x}=l.shift();if(!(x>=n))for(let[M,y]of c){let g=p+M,b=u+y;if(!Fr(i,g,b)||h&&m.has(a(g,b)))continue;let v=a(g,b);if(o.has(v))continue;let A=x+1;o.set(v,A),l.push({x:g,y:b,d:A})}}return o}function Fd(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++){let m=Math.abs(h-e)+Math.abs(c-t);m>=1&&m<=n&&s.set(c*i.w+h,m)}return s}function ws(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(u,x)=>x*i.w+u,l=new Set(r.filter(u=>u.hp>0&&u.player!==a.player).map(u=>u.y*i.w+u.x)),c=new Map,h=[{x:e,y:t}];c.set(o(e,t),null);let m=[[0,1],[0,-1],[1,0],[-1,0]];function p(u,x){return Fr(i,u,x)?!l.has(o(u,x)):!1}for(;h.length;){let{x:u,y:x}=h.shift();if(u===n&&x===s){let M=[],y={x:n,y:s};for(;y;)M.unshift(y),y=c.get(o(y.x,y.y));return M}for(let[M,y]of m){let g=u+M,b=x+y,v=o(g,b);c.has(v)||p(g,b)&&(c.set(v,{x:u,y:x}),h.push({x:g,y:b}))}}return null}var Bd={[Qe.PATH]:2976557,[Qe.GRASS]:2968109,[Qe.TREE]:1719578,[Qe.WATER]:1989278,[Qe.ROCK]:4872778,[Qe.BASE_TOP]:8014410,[Qe.BASE_BOTTOM]:4872826,[Qe.CENTER]:13940810};function Kc(i){return i.w*gt/2}function Zc(i){return i.h*gt/2}function Hd(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new wo(e);return r.wrapS=r.wrapT=ta,r.repeat.set(4,4),r.needsUpdate=!0,r}function kd(i){let e=new fi,t=Kc(i),n=Zc(i),s=new Nn(gt,qn,gt),r=Hd(64),a=.88,o=.02,l=[];function c(p,u,x,M,y){let g=new Gn({color:3828266,roughness:.9});g.bumpMap=r,g.bumpScale=.12;for(let b=0;b<M;b++){let v=.08+Math.random()*y,A=.03+Math.random()*.03,U=new qe(new Es(A*.5,A,v,6),g);U.position.set(p+(Math.random()-.5)*.5,x+v/2,u+(Math.random()-.5)*.5),U.rotation.x=(Math.random()-.5)*.2,U.rotation.z=(Math.random()-.5)*.2,U.castShadow=!0,e.add(U)}}let h=.12;function m(p,u,x,M){let y=x+.02,g=[[p-h,y,u-h],[p+h,y,u+h],[p-h,y,u+h],[p+h,y,u-h],[p-h+.06,y,u-h+.06],[p+h-.06,y,u+h-.06],[p-h+.06,y,u+h-.06],[p+h-.06,y,u-h+.06]],b=new Float32Array(g.length*3);g.forEach((I,L)=>{b[L*3]=I[0],b[L*3+1]=I[1],b[L*3+2]=I[2]});let v=new ai;v.setAttribute("position",new ri(b,3)),v.computeBoundingSphere();let A=new la({color:855309,linewidth:1}),U=new To(v,A);M.add(U)}for(let p=0;p<i.h;p++)for(let u=0;u<i.w;u++){let x=i.type[p][u],M=i.height[p][u],y=Bd[x],g=qn+M*.35,b=g/2+qn/2,v=new Gn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),A=(y>>16&255)/255,U=(y>>8&255)/255,I=(y&255)/255,L=A,q=U,T=I;if(x===Qe.PATH||x===Qe.TREE||x===Qe.ROCK){let V=Math.random()*.45;L=A*(1-V)+.42*V,q=U*(1-V)+.26*V,T=I*(1-V)+.14*V}(x===Qe.TREE||x===Qe.ROCK)&&(L*=.5,q*=.5,T*=.5);let R=1+(Math.random()-.5)*.12;v.color.setRGB(Math.min(1,L*R),Math.min(1,q*R),Math.min(1,T*R)),v.bumpMap=r,v.bumpScale=.12;let Y=new qe(s,v);Y.position.set(u*gt-t+gt/2,g/2,p*gt-n+gt/2),Y.castShadow=!0,Y.receiveShadow=!0,Y.userData={gx:u,gy:p,type:x},e.add(Y);let ae=u*gt-t+gt/2,Me=p*gt-n+gt/2;if(x===Qe.TREE&&m(ae,Me,b,e),x===Qe.TREE){let F=new fi;F.position.set(ae,b,Me);let W=u===0||u===i.w-1||p===0||p===i.h-1,z=W?.75+Math.random()*.35:.5+Math.random()*.2,V=new vt(4007959),$=()=>1+(Math.random()-.5)*.4;V.r=Math.min(1,Math.max(0,V.r*$())),V.g=Math.min(1,Math.max(0,V.g*$())),V.b=Math.min(1,Math.max(0,V.b*$()));let ie=.85+Math.random()*.2,re=new Gn({color:V,roughness:ie});re.bumpMap=r,re.bumpScale=.1+Math.random()*.12;let le=new qe(new Es(.12,.14,z,8),re);le.position.set(0,z/2,0),le.castShadow=!0,le.raycast=function(){},F.add(le);let Ae=r.clone();Ae.repeat.set(3,3);let Z=new vt(2972205),fe=()=>1+(Math.random()-.5)*.44;Z.r=Math.min(1,Math.max(0,Z.r*fe())),Z.g=Math.min(1,Math.max(0,Z.g*fe())),Z.b=Math.min(1,Math.max(0,Z.b*fe()));let we=.78+Math.random()*.24,Fe=new Gn({color:Z,roughness:we});Fe.bumpMap=Ae,Fe.bumpScale=.16+Math.random()*.14;let Xe=W?.52:.45,ut=W?1.05:.9,ft=.12,$e=ut*.5,ue=ut*.45,J=ut*.4,Ke=new qe(new Di(Xe,$e,8),Fe);Ke.position.set(0,z+$e/2,0),Ke.castShadow=!0,Ke.raycast=function(){},F.add(Ke);let We=new qe(new Di(Xe*.75,ue,8),Fe);We.position.set(0,z+$e-ft+ue/2,0),We.castShadow=!0,We.raycast=function(){},F.add(We);let Ze=new qe(new Di(Xe*.5,J,8),Fe);Ze.position.set(0,z+$e-ft+ue-ft+J/2,0),Ze.castShadow=!0,Ze.raycast=function(){},F.add(Ze),e.add(F),l.push(F)}else if(x===Qe.WATER){let F=Bd[Qe.WATER],W=(F>>16&255)/255,z=(F>>8&255)/255,V=(F&255)/255,$=1+(Math.random()-.5)*.12,ie=new Gn({color:new vt().setRGB(Math.min(1,W*$),Math.min(1,z*$),Math.min(1,V*$)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),re=new qe(new Bi(gt,gt),ie);re.rotation.x=-Math.PI/2,re.position.set(ae,b+.02,Me),re.receiveShadow=!0,e.add(re)}else if(x===Qe.ROCK){let F=new Gn({color:6974058,roughness:.9});F.bumpMap=r,F.bumpScale=.2;let W=(ie,re,le)=>{let Ae=new qe(new Lo(ie,0),F);Ae.position.set(ae+re,b+ie-.2,Me+le),Ae.rotation.set(Math.random(),Math.random(),Math.random()),Ae.castShadow=!0,e.add(Ae)},z=.32+Math.random()*.14,V=.2+Math.random()*.12,$=.12+Math.random()*.12;W(z,(Math.random()-.5)*.15,(Math.random()-.5)*.15),W(V,(Math.random()-.5)*.25,(Math.random()-.5)*.25),W($,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function g_(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=Nd(),t=document.getElementById("canvas-wrap"),n=new Eo;n.background=new vt(1711652),n.fog=new So(1711652,30,90);let s=e.w*gt/2,r=e.h*gt/2,a=new ei(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,c=new B(12,38,16).normalize().multiplyScalar(o),h=new B,m=new B,p=new Pi(new B(0,1,0),0),u=new B,x=new B,M=!1,y=!1,g=!0,b=!1,v=null,A=5,U=.004,I=-Math.PI*.4,L=Math.PI*.4,q=new B,T={x:0,y:0},R=!1,Y=1,ae=40,Me=.005,F=.15,W=1,z=null,V=new Oo(16777215,.45);n.add(V);let $=new No(16774630,1.1);$.position.set(30,50,20),$.castShadow=!0,$.shadow.mapSize.width=2048,$.shadow.mapSize.height=2048,$.shadow.camera.near=1,$.shadow.camera.far=120,$.shadow.camera.left=-50,$.shadow.camera.right=50,$.shadow.camera.top=50,$.shadow.camera.bottom=-50,n.add($);let ie=kd(e);n.add(ie);let re=new Map,le=new fi;n.add(le);let Ae={30:!1,20:!1,10:!1},Z=["red","yellow","purple","blue","green"],fe={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943},we=.92;function Fe(f,d,_){let D=(qn+e.height[_][d]*.35)/2+qn/2,P=new Bi(we,we),H=new bn({color:f,transparent:!0,opacity:.45,side:_n}),O=new qe(P,H);return O.rotation.x=-Math.PI/2,O.position.set(d*gt-Ze+gt/2,D+.01,_*gt-ze+gt/2),O}function Xe(f){let d=new Do(.22,0),_=new Gn({color:f,metalness:.3,roughness:.4}),S=new qe(d,_);return S.rotation.x=Math.PI/4,S.castShadow=!0,S.receiveShadow=!0,S}function ut(){let f=Math.floor(e.h/2),d=[];for(let _=0;_<e.w;_++){let S=f;if(e.type[S][_]!==Qe.PATH||ue.some(H=>H.hp>0&&H.x===_&&H.y===S))continue;let P=S*e.w+_;re.has(P)||d.push({gx:_,gy:S})}return d}function ft(f){let d=ut();if(d.length===0)return;let _=d[Math.floor(Math.random()*d.length)],S=Z[Math.floor(Math.random()*Z.length)],D=_.gy*e.w+_.gx,P=fe[S],H=Je(_.gx,_.gy);H.y+=.35;let O=Xe(P);O.position.copy(H),le.add(O);let N=Fe(P,_.gx,_.gy);le.add(N),re.set(D,{type:S,mesh:O,glowMesh:N}),console.log("powerup appeared",{turnsLeft:f,type:S,gx:_.gx,gy:_.gy})}function $e(f){let d=f.y*e.w+f.x,_=re.get(d);if(!_)return;let S=_.mesh;if(le.remove(S),S.geometry.dispose(),S.material){let D=S.material;D.dispose&&D.dispose()}_.glowMesh&&(le.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose()),re.delete(d),_.type==="green"?(f.hp=Math.min(f.maxHp,f.hp+6),Un(f.x,f.y,"+6 HP",!1,"buff")):(_.type==="red"?f.tempBuff={str:4,duration:3}:_.type==="yellow"?f.tempBuff={agi:4,duration:3}:_.type==="purple"?f.tempBuff={int:4,duration:3}:_.type==="blue"&&(f.tempBuff={dex:4,duration:3}),Un(f.x,f.y,`+4 ${_.type==="red"?"STR":_.type==="yellow"?"AGI":_.type==="purple"?"INT":"DEX"}`,!1,"buff")),wt(f,()=>Ue(f))}let ue=[],J=1,Ke=new Map,We=Hd(64),Ze=Kc(e),ze=Zc(e);function Je(f,d){let S=(qn+e.height[d][f]*.35)/2+qn/2;return new B(f*gt-Ze+gt/2,S,d*gt-ze+gt/2)}function yt(f,d){f==="short"&&(qc=27,Yc=15,$c=.35,ts=100),n.remove(ie),ie.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(D=>D.dispose())}),Ke.forEach(_=>{n.remove(_),_.traverse(S=>{S.geometry&&S.geometry.dispose(),S.material&&(Array.isArray(S.material)?S.material:[S.material]).forEach(P=>P.dispose())})}),Ke.clear(),ue.length=0,J=1,re.forEach(_=>{le.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(le.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),re.clear(),Ae={30:!1,20:!1,10:!1},e=Nd(typeof d<"u"?d:void 0),Ze=Kc(e),ze=Zc(e),ie=kd(e),n.add(ie)}function C(){Ke.forEach(f=>{n.remove(f),f.traverse(d=>{d.geometry&&d.geometry.dispose(),d.material&&(Array.isArray(d.material)?d.material:[d.material]).forEach(S=>S.dispose())})}),Ke.clear(),ue.length=0,J=1}function E(f,d){let _=(f>>16&255)/255,S=(f>>8&255)/255,D=(f&255)/255,P=1+(Math.random()-.5)*d;return new vt(Math.min(1,_*P),Math.min(1,S*P),Math.min(1,D*P))}let te=.62;function _e(f,d){d=d??te;let _=f instanceof vt?f:new vt(f);return new vt(Math.max(0,_.r*d),Math.max(0,_.g*d),Math.max(0,_.b*d))}function Se(f,d,_){let S=Go[d]||Go.knight,D=_e(E(S.primary,.08)),P=_e(E(S.secondary,.08)),H=en[d]&&en[d].gender||"male",O=_??4006676,N=_e(E(S.skin!=null?S.skin:15250592,.06)),X=_e(E(O,.08)),ce=()=>(Math.random()-.5)*.08,be=()=>(Math.random()-.5)*.04,ee=new Gn({color:D,metalness:Math.max(0,.25+be()),roughness:Math.max(.3,Math.min(1,.5+ce()))});ee.bumpMap=We,ee.bumpScale=.1;let oe=new Gn({color:P,metalness:Math.max(0,.2+be()),roughness:Math.max(.3,Math.min(1,.55+ce()))});oe.bumpMap=We,oe.bumpScale=.1;let ye=new Gn({color:D,metalness:Math.max(0,.25+be()),roughness:Math.max(.3,Math.min(1,.5+ce()))});ye.bumpMap=We,ye.bumpScale=.1;let Ve=new Gn({color:N,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+ce()))});Ve.bumpMap=We,Ve.bumpScale=.05;let ke=new fi,st=.28,It=.08,Zt=.08,fn=new qe(new Nn(It,st,Zt),oe);fn.position.set(-.06,st/2,0),fn.castShadow=!0,ke.add(fn);let kn=new qe(new Nn(It,st,Zt),oe);kn.position.set(.06,st/2,0),kn.castShadow=!0,ke.add(kn);let hn=.28,Vt=.2,qt=.12,gn=new qe(new Nn(Vt,hn,qt),ee);gn.position.set(0,st+hn/2,0),gn.castShadow=!0,ke.add(gn);let lt=.06,an=.22,Cn=.06,Et=new qe(new Nn(lt,an,Cn),ye);Et.position.set(-(Vt/2+lt/2),st+hn-.08,0),Et.castShadow=!0,ke.add(Et);let Bt=new qe(new Nn(lt,an,Cn),ye);if(Bt.position.set(Vt/2+lt/2,st+hn-.08,0),Bt.castShadow=!0,ke.add(Bt),S.cape!=null){let at=Vt*1.95,Ut=at*.6,ne=st+hn*.28,de=new Dr;de.moveTo(-Ut/2,ne/2),de.lineTo(Ut/2,ne/2),de.lineTo(at/2,-ne/2),de.lineTo(-at/2,-ne/2),de.closePath();let me=new fa(de),se=new Gn({color:_e(E(S.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+ce())),side:_n});se.bumpMap=We,se.bumpScale=.12;let he=new qe(me,se);he.position.set(0,st+hn-ne/2+.05,-qt/2-.02),he.rotation.y=Math.PI,he.castShadow=!0,ke.add(he);let Ee=.055,pe=st+hn+.02,Ce=.02,Mt=Vt/2+lt*.5,Tt=new qe(new ki(Ee,10,8,0,Math.PI*2,0,Math.PI*.55),se.clone());Tt.position.set(-Mt,pe,Ce),Tt.rotation.x=-Math.PI*.35,Tt.rotation.z=Math.PI*.5,Tt.scale.set(1.2,.85,1.1),Tt.castShadow=!0,ke.add(Tt);let Nt=new qe(new ki(Ee,10,8,0,Math.PI*2,0,Math.PI*.55),se.clone());Nt.position.set(Mt,pe,Ce),Nt.rotation.x=-Math.PI*.35,Nt.rotation.z=-Math.PI*.5,Nt.scale.set(1.2,.85,1.1),Nt.castShadow=!0,ke.add(Nt)}if(S.belt!=null){let at=new Gn({color:_e(E(S.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+ce()))});at.bumpMap=We,at.bumpScale=.1;let Ut=.022,ne=.04,de=new qe(new Nn(Vt+.04,Ut,qt+ne),at);de.position.set(0,st+.04,0),de.castShadow=!0,ke.add(de)}if(S.apron!=null){let at=new Gn({color:_e(E(S.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+ce())),side:_n});at.bumpMap=We,at.bumpScale=.12;let Ut=Vt*.95,ne=st*.85,de=new qe(new Bi(Ut,ne),at),me=st+.2;de.position.set(0,me-ne/2,qt/2+.02),de.castShadow=!0,ke.add(de);let se=st+hn+.02,he=Vt/2+lt*.2,Ee=.018,pe=.008,Ce=se-me,Mt=new qe(new Nn(Ee,Ce,pe),at.clone());Mt.position.set(-he,(me+se)/2,qt/2+.015),Mt.castShadow=!0,ke.add(Mt);let Tt=new qe(new Nn(Ee,Ce,pe),at.clone());Tt.position.set(he,(me+se)/2,qt/2+.015),Tt.castShadow=!0,ke.add(Tt)}let ht=.1,Lt=new qe(new ki(ht,12,10),Ve);Lt.position.set(0,st+hn+ht,0),Lt.castShadow=!0,ke.add(Lt);let Xt=new bn({color:1710638}),tn=new qe(new Nn(.032,.004,.004),Xt);tn.position.set(-.032,.028,ht*.92),Lt.add(tn);let Hn=new qe(new Nn(.032,.004,.004),Xt);Hn.position.set(.032,.028,ht*.92),Lt.add(Hn);let xi=new bn({color:2957087}),hi=new qe(new Nn(.045,.012,.008),xi);hi.position.set(0,-.028,ht*.92),Lt.add(hi);let un=new Gn({color:X,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+ce()))});un.bumpMap=We,un.bumpScale=.15;let Jn=at=>{let Ut=ht*.32,ne=ht*.22,de=new qe(new Di(ne*.9,Ut,5),un);de.position.set(-ht*.25,ht*.22,ht*.72),de.rotation.x=.35,de.rotation.z=.12,de.castShadow=!0,at.add(de);let me=new qe(new Di(ne,Ut,5),un);me.position.set(ht*.28,ht*.18,ht*.68),me.rotation.x=.28,me.rotation.z=-.1,me.castShadow=!0,at.add(me);let se=new qe(new Di(ne*.7,Ut*.9,5),un);se.position.set(0,ht*.28,ht*.78),se.rotation.x=.4,se.castShadow=!0,at.add(se)};if(H==="female"){let at=new qe(new ki(ht*.92,12,10,0,Math.PI*2,0,Math.PI*.52),un);at.position.set(0,ht*.28,-ht*.18),at.rotation.y=.06,at.rotation.x=-.04,at.castShadow=!0,Lt.add(at);let Ut=new qe(new Nn(ht*1.15,ht*2.2,ht*.55),un);Ut.position.set(0,-ht*.6,-ht*.95),Ut.rotation.z=.03,Ut.castShadow=!0,Lt.add(Ut),Jn(Lt)}else{let at=new qe(new ki(ht*.9,12,10,0,Math.PI*2,0,Math.PI*.5),un);at.position.set(0,ht*.4,-ht*.12),at.rotation.y=.08,at.rotation.x=-.05,at.rotation.z=.04,at.castShadow=!0,Lt.add(at);let Ut=new qe(new ki(ht*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),un);Ut.position.set(0,ht*.1,-ht*.05),Ut.rotation.y=.1,Ut.castShadow=!0,Lt.add(Ut),Jn(Lt)}return ke.userData.leftLeg=fn,ke.userData.rightLeg=kn,ke.userData.leftArm=Et,ke.userData.rightArm=Bt,ke}function Te(f,d){let _=f.userData;if(!_.leftLeg)return;let S=d*Math.PI*2,D=.35,P=.28;_.leftLeg.rotation.x=Math.sin(S)*D,_.rightLeg.rotation.x=Math.sin(S+Math.PI)*D,_.leftArm.rotation.y=Math.sin(S+Math.PI)*P,_.rightArm.rotation.y=Math.sin(S)*P}function Ye(f){let d=f.userData;d.leftLeg&&(d.leftLeg.rotation.x=0,d.rightLeg.rotation.x=0,d.leftArm.rotation.y=0,d.rightArm.rotation.y=0)}function Ne(f){let d=Se(f.player,f.class,f.hairColor);d.position.copy(Je(f.x,f.y)),d.castShadow=!0,d.userData.unitId=f.id;let _=.28,S=.28,D=.12,P=.18,H=.04,O=new Bi(P,H),N=new bn({color:6037528,side:_n,depthTest:!0,depthWrite:!1}),X=new qe(O,N);X.position.set(0,_+S/2,D/2+.02),X.rotation.x=-Math.PI/2,X.rotation.z=Math.PI/4,X.visible=f.maxHp>0&&f.hp<f.maxHp&&f.hp>0,d.add(X),d.userData.slashMark=X,n.add(d),Ke.set(f.id,d),bt(d,f.maxHp>0&&f.hp/f.maxHp<.35)}function Ue(f){let d=Ke.get(f.id);!d||!d.userData.slashMark||(d.userData.slashMark.visible=f.maxHp>0&&f.hp<f.maxHp&&f.hp>0)}let ot=.35;function bt(f,d){if(f)if(d){f.rotation.x=.35,f.scale.setScalar(.96);let _=f.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=.2,_.rightArm.rotation.y=.2),f.traverse(S=>{S.isMesh&&S.material&&S.material.color&&(S.userData.originalColor||(S.userData.originalColor=S.material.color.clone()),S.material.color.copy(S.userData.originalColor).multiplyScalar(.82))})}else{f.rotation.x=0,f.scale.setScalar(1);let _=f.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=0,_.rightArm.rotation.y=0),f.traverse(S=>{S.isMesh&&S.material&&S.userData.originalColor&&S.material.color.copy(S.userData.originalColor)})}}function ve(f){if(f.level>=3)return;let d=f.maxHp>0?f.hp/f.maxHp:1;f.level+=1;let _=D=>Math.max(1,Math.ceil(D*1.1)),S=D=>Math.max(1,Math.ceil(D*1.1));f.maxHp=_(f.maxHp),f.maxMp=_(f.maxMp),f.hp=Math.max(1,Math.min(f.maxHp,Math.ceil(d*f.maxHp))),f.mp=Math.max(1,Math.min(f.maxMp,Math.ceil(d*f.maxMp))),f.str=S(f.str),f.agi=S(f.agi),f.vit=S(f.vit),f.dex=S(f.dex),f.luk=S(f.luk),f.int=S(f.int),f.range>2&&(f.range=S(f.range)),console.log("[LEVEL UP]",`${f.name} (${f.class}, P${f.player})`,`\u2192 Lv.${f.level}`,`| HP ${f.hp}/${f.maxHp} MP ${f.mp}/${f.maxMp} STR ${f.str} VIT ${f.vit}`),$t(f)}function $t(f){let d=Ke.get(f.id),_=f.level===3?"levelup level3":f.level===2?"levelup level2":"levelup";if(Af(f,_),!d)return;let S=performance.now(),D=0;function P(H){D++,D%2===0&&Kt();let O=H-S,N=Math.min(1,O/Pe),X=N<.5?1+.35*(N/.5):1+.35*(1-(N-.5)/.5);d.scale.setScalar(X),N<1?requestAnimationFrame(P):d.scale.setScalar(1)}requestAnimationFrame(P)}function wt(f,d){let _=Ke.get(f.id);if(!_){d&&d();return}let S=performance.now(),D=0;function P(H){D++,D%2===0&&Kt();let O=H-S,N=Math.min(1,O/Pe),X=N<.5?1+.35*(N/.5):1+.35*(1-(N-.5)/.5);_.scale.setScalar(X),N<1?requestAnimationFrame(P):(_.scale.setScalar(1),d&&d())}requestAnimationFrame(P)}let pt=400,et=280,Ge=.45,mt=160,Gt=280,mn=350,At=500,Pe=600,k=!1,Le=new B,De=new B,nt=new B,tt=new B;function jt(f=!1){g=!0;let d=null;if(Pt==="playing"&&ge.length>0){let H=ge[Re];d=ue.find(O=>O.id===H&&O.hp>0)}if(d||(d=ue.find(H=>H.player===Ct&&H.hp>0)),!d)return;let _=a.position.distanceTo(h);if(_<.1&&(_=o),m.copy(a.position).sub(h).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),nt.copy(Je(d.x,d.y)),tt.copy(nt).add(m.clone().multiplyScalar(_)),f||k){h.copy(nt),a.position.copy(tt),a.lookAt(h),Kt();return}k=!0,Le.copy(h),De.copy(a.position);let S=performance.now(),D=0;Bn.shadowMap.enabled=!1;function P(H){D++,D%2===0&&Kt();let O=Math.min(1,(H-S)/pt),N=O*(2-O);h.lerpVectors(Le,nt,N),a.position.lerpVectors(De,tt,N),a.lookAt(h),O<1?requestAnimationFrame(P):(Bn.shadowMap.enabled=!0,k=!1)}requestAnimationFrame(P)}let Ot=0,Ct=1,Pt="draft",it="pvp",ln=1,An={1:"",2:""},ss=null,rs=null,pi=null,zi="long";function Sn(f){return it==="online"&&An[f]?An[f]:"Player "+f}let $s=1,Rs=0,Vi=null;async function xa(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{Vi=await navigator.wakeLock.request("screen"),Vi.addEventListener("release",()=>{Vi=null})}catch{Vi=null}}function qo(){Vi&&(Vi.release().catch(()=>{}),Vi=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&it==="cvcpu"&&Pt==="playing"&&xa()});let w="balanced",G=new Set(is),Q=0,K=null,j=new Set,ge=[],Re=0,Oe=null,Be=new Map,St=null;function xt(f){if(!f||f.hp<=0)return;St=f.id;let d=document.getElementById("unit-preview-card"),_=document.getElementById("unit-preview-image"),S=document.getElementById("unit-preview-name"),D=document.getElementById("unit-preview-meta"),P=document.getElementById("unit-preview-stats");d.classList.remove("player-1","player-2"),d.classList.add(f.player===1?"player-1":"player-2"),d.classList.toggle("level-2",f.level>=2&&f.level<3),d.classList.toggle("level-3",f.level>=3),_.src=ga[f.class]||"",_.alt=f.name,S.textContent=f.name,D.textContent=`Lv.${f.level} ${f.class} \u2014 ${Sn(f.player)}`,P.innerHTML=[["HP",`${f.hp}/${f.maxHp}`],["MP",`${f.mp}/${f.maxMp}`],["STR",xe(f,"str")],["AGI",xe(f,"agi")],["VIT",xe(f,"vit")],["DEX",xe(f,"dex")],["LUK",xe(f,"luk")],["INT",xe(f,"int")]].map(([O,N])=>`<span class="stat-label">${O}</span><span class="stat-val${O==="HP"?" stat-val-hp":""}">${N}</span>`).join("");let H=f.maxHp>0&&f.hp/f.maxHp<.3;d.classList.toggle("low-hp",H),d.style.display="block"}function dt(){St=null;let f=document.getElementById("unit-preview-card");f.classList.remove("low-hp","level-2","level-3"),f.style.display="none"}let ct=!1,cn=!1,sn=!1,rn=null,rt=!1,je=!1,mi=!1,Ft=[],Rn=new fi;n.add(Rn);let ni=[],Ei=!0,gi=0,Dn=0;function Kt(){Ei=!0,gi=performance.now()}let Gi=new fi;n.add(Gi);let Yn=[],Br=gt,Yo=.02,_a=3368703,zd=13382451;function Vd(f,d){let _=f/2,S=_-d,D=new Dr;D.moveTo(-_,-_),D.lineTo(_,-_),D.lineTo(_,_),D.lineTo(-_,_),D.lineTo(-_,-_);let P=new Lr;return P.moveTo(-S,-S),P.lineTo(S,-S),P.lineTo(S,S),P.lineTo(-S,S),P.lineTo(-S,-S),D.holes.push(P),new fa(D)}let Gd=Vd(Br,Yo);function Ti(f=null){let d=ue.filter(_=>_.hp>0&&_.id!==f).map(_=>`${_.id},${_.x},${_.y},${_.player}`).sort().join("|");if(!(Ti._lastSig===d&&Ti._lastExclude===f)){for(Ti._lastSig=d,Ti._lastExclude=f,Yn.forEach(_=>_.dispose()),Yn.length=0;Gi.children.length;){let _=Gi.children[0];Gi.remove(_)}ue.filter(_=>_.hp>0&&_.id!==f).forEach(_=>{let S=_.x,D=_.y,H=(qn+e.height[D][S]*.35)/2+qn/2,O=S*gt-Ze+gt/2,N=D*gt-ze+gt/2,X=H+.02,ce=_.player===1?_a:zd,be=new bn({color:ce,side:_n}),ee=new qe(Gd,be);ee.rotation.x=-Math.PI/2,ee.position.set(O,X,N),Gi.add(ee),Yn.push(be)}),Kt()}}let Wd=1.15,$o={1:8102901,2:15628943},oi=(()=>{let f=new bn({color:$o[1]}),d=new qe(new Di(.1,.25,8),f);return d.rotation.x=Math.PI,d.visible=!1,n.add(d),d})();function Ko(){if(Pt!=="playing"||ge.length===0||mi){oi.visible=!1,oi.removeFromParent(),n.add(oi);return}let f=ge[Re],d=ue.find(S=>S.id===f);if(!d||d.hp<=0){oi.visible=!1,oi.removeFromParent(),n.add(oi);return}let _=Ke.get(f);if(!_){oi.visible=!1;return}oi.removeFromParent(),_.add(oi),oi.position.set(0,Wd,0),oi.material&&oi.material.color.setHex($o[d.player]??$o[1]),oi.visible=!0}function y_(f){let d=[[0,1],[0,-1],[1,0],[-1,0]],_=[];for(let[S,D]of d){let P=f.x+S,H=f.y+D;!Fr(e,P,H)||ue.some(N=>N.id!==f.id&&N.x===P&&N.y===H&&N.hp>0)||_.push(Math.atan2(S,D))}return _}function Jc(f){if(Ft.length===0)return f;if(Ft.length===1)return Ft[0];let d=Ft[0],_=Math.abs(jc(f-d));for(let S=1;S<Ft.length;S++){let D=Math.abs(jc(f-Ft[S]));D<_&&(_=D,d=Ft[S])}return d}function jc(f){for(;f>Math.PI;)f-=2*Math.PI;for(;f<-Math.PI;)f+=2*Math.PI;return f}let Xd=1.2,Ni=(()=>{let f=new qe(new Di(.12,.35,8),new bn({color:4500223}));return f.rotation.x=-Math.PI/2,f.visible=!1,n.add(f),f})();function qd(f,d){if(!mi||ge.length===0||Ft.length===0)return;let _=ge[Re],S=ue.find(be=>be.id===_),D=Ke.get(_);if(!S||!D)return;Ra(f,d),os.setFromCamera(ls,a);let P=os.intersectObjects(ie.children,!0);if(P.length===0)return;let H=null;for(let be of P){let ee=be.object;for(;ee&&(ee.userData.gx==null||ee.userData.gy==null);)ee=ee.parent;if(ee&&ee.userData.gx!=null){H=be.point;break}}if(!H)return;let O=Je(S.x,S.y),N=H.x-O.x,X=H.z-O.z;if(N*N+X*X<1e-6)return;let ce=Math.atan2(N,X);D.rotation.y=Jc(ce)}function Yd(){if(ge.length===0)return;let f=ge[Re],d=ue.find(D=>D.id===f),_=Ke.get(f);if(!d||!_)return;Ft=[[0,1],[0,-1],[1,0],[-1,0]].map(([D,P])=>Math.atan2(D,P)),Ni.removeFromParent(),_.add(Ni),Ni.position.set(0,Xd,0),Ni.rotation.x=-Math.PI/2,Ni.rotation.y=0,Ni.rotation.z=Math.PI,Ni.visible=!0,_.rotation.y=Ft[0]}function $d(){Ni.visible=!1,Ni.removeFromParent(),n.add(Ni)}let va=[];(function(){let d=ns,_=[1];for(let S=0;S<Math.floor((d-1)/2);S++)_.push(2,2,1,1);d%2===1?_.push(2):(_.push(2,2),_.push(1)),va=_})();function wi(){return va[Q]}function Qc(){let f=wi(),d=0;for(let _=0;_<Q;_++)va[_]===f&&d++;return d+1}function Ma(){re.forEach(_=>{le.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(le.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),re.clear(),Ae={30:!1,20:!1,10:!1};let f=ns,d=[1];for(let _=0;_<Math.floor((f-1)/2);_++)d.push(2,2,1,1);f%2===1?d.push(2):(d.push(2,2),d.push(1)),va=d,Pt="draft",Q=0,G=new Set(is),K=null,j.clear(),xn(),Zo(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function eh(){return ue.filter(f=>f.hp>0).sort((f,d)=>{let _=xe(f,"agi"),S=xe(d,"agi");if(S!==_)return S-_;let D=xe(f,"dex");return xe(d,"dex")-D}).map(f=>f.id)}function Kd(){document.getElementById("draft-panel").style.display="none";let f=document.getElementById("draft-placement-card");f&&(f.style.display="none",f.innerHTML=""),xn();let d=document.getElementById("battle-start-overlay");d&&(d.classList.add("visible"),d.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");for(_&&(_.style.display="none",_.innerHTML=""),Pt="playing",Ot=0,ge=eh(),Re=0;Re<ge.length&&ue.find(P=>P.id===ge[Re]).hp<=0;)Re++;Re>=ge.length&&(Re=0);let S=ue.find(P=>P.id===ge[Re]);Ct=S?S.player:1,rt=!1,je=!1,Oe=ge[Re],setTimeout(()=>{d&&(d.classList.remove("visible"),d.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",Ti(),Wt(),Ko(),jt(!0),it==="cvcpu"&&xa()},4e3)}function Zo(){let f=document.getElementById("draft-panel"),d=document.getElementById("draft-title"),_=document.getElementById("draft-classes"),S=document.getElementById("draft-message"),D=document.getElementById("turn-player"),P=document.getElementById("draft-placement-card");if(K){f.style.display="none",D.textContent=`Draft: ${Sn(wi())} \u2014 place ${en[K].name}`;let O=wi();P.style.display="flex",P.classList.remove("player-1","player-2"),P.classList.add("player-"+O),P.style.left=O===1?"24px":"",P.style.right=O===2?"24px":"";let N=[...ue.filter(be=>be.player===O).map(be=>be.class),K],X=(be,ee)=>{let oe=en[be];return`
        <div class="draft-class-card${ee?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${ga[be]||""}" alt="${oe.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${oe.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${oe.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${oe.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${oe.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${oe.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${oe.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${oe.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${oe.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${oe.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${oe.range}</span>
            </div>
          </div>
        </div>
      `},ce=3;if(N.length>ce){P.classList.add("draft-placement-cols");let be=[];for(let oe=0;oe<N.length;oe+=ce)be.push(N.slice(oe,oe+ce));let ee=N.length-1;P.innerHTML=be.map((oe,ye)=>{let Ve=ye===be.length-1,ke=oe.map((st,It)=>{let fn=ye*ce+It===ee;return X(st,fn)}).join("");return`<div class="draft-placement-col${Ve?" draft-placement-col-current":""}">${ke}</div>`}).join("")}else P.classList.remove("draft-placement-cols"),P.innerHTML=N.map((be,ee)=>{let oe=ee===N.length-1;return X(be,oe)}).join("");it==="pvcpu"&&wi()===2&&setTimeout(zr,500),it==="cvcpu"&&setTimeout(zr,500);return}P.style.display="none",P.innerHTML="",Pt==="draft"&&(f.style.display="flex");let H=wi();d.textContent=`${Sn(H)}: Pick a class (${Qc()}/${ns})`,S.textContent="",_.innerHTML="",D.textContent=`Draft: ${Sn(H)} \u2014 pick a class`,c_([...is]).forEach(O=>{let N=G.has(O),X=en[O],ce=document.createElement("button");ce.type="button",ce.className="draft-class-card"+(N?"":" draft-class-card-selected"),ce.disabled=!N,ce.innerHTML=`
          <img class="draft-class-card-image" src="${ga[O]||""}" alt="${X.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${X.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${X.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${X.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${X.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${X.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${X.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${X.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${X.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${X.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${X.range}</span>
            </div>
          </div>
        `,N&&ce.addEventListener("click",()=>Jo(O)),_.appendChild(ce)}),it==="pvcpu"&&wi()===2&&setTimeout(zr,500),it==="cvcpu"&&setTimeout(zr,500)}function Jo(f){if(!G.has(f)||K)return;K=f;let d=wi(),_=new Set(ue.map(P=>P.y*e.w+P.x)),S=d_(e,d,_),D=Od(e,S);j=new Set(D.map(P=>P.gy*e.w+P.gx)),xf(D),Zo(),it==="online"&&d===ln&&typeof En=="function"&&En({type:"draftPick",classKey:f})}function jo(f,d){if(!K)return;let _=wi(),S=d*e.w+f;if(!j.has(S))return;let D=en[K],P={id:J++,player:_,x:f,y:d,level:1,name:D.name,class:K,hairColor:(Go[K]||Go.knight).hair,hp:D.hp,maxHp:D.maxHp,mp:D.mp,maxMp:D.maxMp,str:D.str,agi:D.agi,vit:D.vit,dex:D.dex,luk:D.luk,int:D.int,range:D.range};ue.push(P),Ne(P);let H=Ke.get(P.id);H&&(H.rotation.y=P.player===1?Math.PI:0),G.delete(K),K=null,j.clear(),xn(),it==="online"&&_===ln&&typeof En=="function"&&En({type:"draftPlace",gx:f,gy:d});let O=document.getElementById("draft-placement-card");if(O&&(O.style.display="none",O.innerHTML=""),Q++,Q>=2*ns){Kd();return}let N=wi(),X=Qc(),ce=document.getElementById("draft-panel"),be=document.getElementById("draft-title"),ee=document.getElementById("draft-message"),oe=document.getElementById("draft-classes"),ye=document.getElementById("turn-player");ce&&be&&oe&&ye&&(ce.style.display="flex",be.textContent=`${Sn(N)}: Pick a class (${X}/${ns})`,ee&&(ee.textContent="Get ready\u2026"),oe.innerHTML="",ye.textContent=`Draft: ${Sn(N)} \u2014 pick a class`),setTimeout(Zo,1500)}function Wt(){Wt._pending||(Wt._pending=!0,requestAnimationFrame(()=>{Wt._pending=!1,Zd()}))}function Zd(){let f=Wt._cache||(Wt._cache={}),d=f.turnEl||(f.turnEl=document.getElementById("turn-player")),_=f.menuLabel||(f.menuLabel=document.getElementById("menu-label")),S=f.turnMenu||(f.turnMenu=document.getElementById("turn-menu")),D=f.unitInfo||(f.unitInfo=document.getElementById("unit-info")),P=f.unitNameEl||(f.unitNameEl=document.getElementById("unit-name")),H=f.unitLevelClassEl||(f.unitLevelClassEl=document.getElementById("unit-level-class")),O=f.unitStatsEl||(f.unitStatsEl=document.getElementById("unit-stats")),N=f.unitClassImageEl||(f.unitClassImageEl=document.getElementById("unit-class-image"));if(Pt==="playing"&&ue.forEach(ee=>{if(ee.hp<=0)return;let oe=Ke.get(ee.id);oe&&bt(oe,ee.maxHp>0&&ee.hp/ee.maxHp<ot)}),S.classList.remove("player-1","player-2"),S.classList.add(Ct===1?"player-1":"player-2"),S.classList.toggle("level-2",!1),S.classList.toggle("level-3",!1),Pt==="playing"&&ge.length>0){let ee=ge[Re];ue.find(ye=>ye.id===ee&&ye.hp>0)&&(Oe==null||!ue.find(ye=>ye.id===Oe&&ye.hp>0))&&(Oe=ee)}if(Oe!=null){let ee=ue.find(oe=>oe.id===Oe);if(ee&&ee.hp>0){D.classList.remove("no-unit");let oe=ee.maxHp>0&&ee.hp/ee.maxHp<.25;S.classList.toggle("low-hp",oe),S.classList.toggle("level-2",ee.level>=2&&ee.level<3),S.classList.toggle("level-3",ee.level>=3),P.textContent=ee.name,H.textContent=`Lv.${ee.level} ${ee.class}`,N.src=ga[ee.class]||"",N.alt=ee.name,O.innerHTML=[["HP",`${ee.hp}/${ee.maxHp}`],["MP",`${ee.mp}/${ee.maxMp}`],["STR",xe(ee,"str")],["AGI",xe(ee,"agi")],["VIT",xe(ee,"vit")],["DEX",xe(ee,"dex")],["LUK",xe(ee,"luk")],["INT",xe(ee,"int")]].map(([ye,Ve])=>`<span>${ye}</span><span class="stat-val${ye==="HP"?" stat-val-hp":""}">${Ve}</span>`).join("")}else S.classList.remove("low-hp","level-2","level-3"),D.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",H.textContent="",O.textContent="",N.src="",N.alt=""}else S.classList.remove("low-hp","level-2","level-3"),D.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",H.textContent="",O.textContent="",N.src="",N.alt="";if(Oe!=null)d.textContent=`${Sn(Ct)} \u2014 Unit ${P.innerHTML} active`;else{let ee=ge.length?ue.find(oe=>oe.id===ge[Re]):null;d.textContent=ee?`${ee.name} (${Sn(Ct)})`:Sn(Ct)}_.textContent=Sn(Ct);let X=f.btnAttack||(f.btnAttack=document.getElementById("btn-attack")),ce=f.btnSkill||(f.btnSkill=document.getElementById("btn-skill")),be=f.btnEnd||(f.btnEnd=document.getElementById("btn-end"));if(it==="cvcpu"&&Pt==="playing")X.disabled=!0,ce.disabled=!0,be&&(be.disabled=!0),d.textContent=`${Sn(Ct)} (CPU)`;else if(mi)X.disabled=!0,ce.disabled=!0,d.textContent="Click on map to choose facing direction";else if(Pt==="playing"){X.disabled=je;let ee=ge.length?ge[Re]:null,oe=ee?ue.find(ke=>ke.id===ee&&ke.hp>0):null,ye=it!=="cvcpu"&&(it!=="pvcpu"||Ct===1),Ve=ye&&oe&&!je?sl(oe):[];ce.disabled=je||!ye||Ve.length===0,be&&(be.disabled=!1)}if(Pt==="playing"){let ee=Math.min(Ot+1,ts);d.textContent=(d.textContent||"")+` \u2014 Turn ${ee}/${ts}`;let oe=f.turnsLeftEl||(f.turnsLeftEl=document.getElementById("turns-left")),ye=f.turnsLeftValueEl||(f.turnsLeftValueEl=document.getElementById("turns-left-value"));if(oe&&ye){oe.style.display="";let Ve=Math.max(0,ts-Ot);ye.textContent=String(Ve),oe.classList.toggle("turns-left-low",Ve<=10),(Ve===30||Ve===20||Ve===10)&&(Ae[Ve]||(ft(Ve),Ae[Ve]=!0))}}else{let ee=f.turnsLeftEl||(f.turnsLeftEl=document.getElementById("turns-left"));ee&&(ee.style.display="none")}Pt==="playing"&&il(Ct)&&!ct&&setTimeout(dn,700)}function Qt(){it==="online"&&Ct===ln&&typeof En=="function"&&En({type:"endTurn"}),Kt(),dt(),cn=!1,sn=!1,rn=null,mi=!1,Ft=[],$d(),xn();let f=ge.length;if(f===0)return;let d=ge[Re],_=ue.find(O=>O.id===d);if(_&&_.tempDebuff&&_.tempDebuff.duration--,_&&_.tempDebuff&&_.tempDebuff.duration<=0&&(_.tempDebuff=void 0),_&&_.tempBuff&&_.tempBuff.duration--,_&&_.tempBuff&&_.tempBuff.duration<=0&&(_.tempBuff=void 0),_&&_.hp>0){let O=Math.ceil(xe(_,"int")*.15);_.mp=Math.min(_.maxMp,_.mp+O)}if(_&&_.hp>0){let O=_.x,N=_.y;e.type[N][O]===Qe.CENTER&&_.level===1&&ve(_);let X=_.player===1?Qe.BASE_TOP:Qe.BASE_BOTTOM;e.type[N][O]===X&&_.level===2&&ve(_)}if(Ot++,Ot>=ts){Rf();return}let S=(Re+1)%f,D=0;for(;D<f;){let O=ge[S],N=ue.find(X=>X.id===O);if(N&&N.hp>0)break;S=(S+1)%f,D++}let P=S===0;Re=S;for(let O=0;O<f;O++){let N=ge[Re],X=ue.find(be=>be.id===N);if(!X||X.hp<=0)break;let ce=X.tempDebuff&&X.tempDebuff.poison!=null?X.tempDebuff.poison:0;if(ce<=0)break;if(console.log("tempDebuff damage",{debuffKey:"poison",damage:ce}),X.hp=Math.max(0,X.hp-ce),Un(X.x,X.y,String(ce),!1,"poison"),Ue(X),X.hp<=0){Tn(X),S=(Re+1)%f;let be=0;for(;be<f;){let ee=ge[S],oe=ue.find(ye=>ye.id===ee);if(oe&&oe.hp>0)break;S=(S+1)%f,be++}Re=S;continue}break}let H=ue.find(O=>O.id===ge[Re]);Ct=H?H.player:1,rt=!1,je=!1,Oe=ge[Re],P&&(ge=eh(),Re=0),Wt(),Ko(),jt()}document.getElementById("btn-attack").addEventListener("click",()=>{if(ct||je||Pt!=="playing"||ge.length===0)return;dt();let f=ge[Re],d=ue.find(D=>D.id===f);if(!d||d.hp<=0)return;let _=d.range!=null?d.range:1;Oe=f,cn=!0;let S=Fd(e,d.x,d.y,_);Be=new Map,S.forEach((D,P)=>{let H=P%e.w,O=Math.floor(P/e.w);Ys(e,d.x,d.y,H,O)&&Be.set(P,D)}),_f(Be),Wt()}),document.getElementById("btn-skill").addEventListener("click",f=>{if(f.preventDefault(),f.stopPropagation(),ct||je)return;let d=ge[Re],_=d?ue.find(O=>O.id===d&&O.hp>0):null;if(!_||_.player!==Ct)return;let S=document.getElementById("skill-list-overlay"),D=document.getElementById("btn-skill");if(!D)return;if(S&&S.style.display==="block"){S.style.display="none";return}let P=sl(_),H=D.getBoundingClientRect();S||(S=document.createElement("div"),S.id="skill-list-overlay",S.className="skill-list-overlay",S.setAttribute("aria-hidden","true"),document.body.appendChild(S)),S.style.left=`${H.left}px`,S.style.top=`${H.top-4}px`,S.style.transform="translateY(-100%)",S.style.right="auto",S.style.bottom="auto",S.style.display="none",P.length===0?S.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(S.innerHTML=P.map((O,N)=>`<button type="button" class="skill-option" data-skill-index="${N}" ${O.disabled?"disabled":""}>
          <span class="skill-name">${O.name}</span> <span class="skill-meta">${O.cost} MP \xB7 Lv.${O.level}</span><br/>
          <span class="skill-meta">${O.description}</span>
        </button>`).join(""),S.querySelectorAll(".skill-option").forEach((O,N)=>{O.addEventListener("click",X=>{X.preventDefault(),X.stopPropagation();let ce=P[N];if(rn=ce,S.style.display="none",S.setAttribute("aria-hidden","true"),ce.target==="self"){if(_.mp<ce.cost)return;_.mp-=ce.cost,je=!0;let be={showFloatingCombatText:Un,handleUnitDeath:Tn,updateUnitSlashVisibility:Ue,updateTurnUI:Wt};it==="online"&&_.player===ln&&typeof En=="function"&&En({type:"skill",unitId:_.id,targetId:_.id,effectKey:ce.effectKey}),Aa(_,_,ce,be,()=>{xn(),sn=!1,rn=null,tr=new Set,rt?Qt():Wt()}),Wt();return}if(ce.target==="ally"&&Vr(_,ce,ue).filter(oe=>oe.targetUnit&&oe.targetUnit.id!==_.id).length===0&&_.mp>=ce.cost){_.mp-=ce.cost,je=!0;let oe={showFloatingCombatText:Un,handleUnitDeath:Tn,updateUnitSlashVisibility:Ue,updateTurnUI:Wt};it==="online"&&_.player===ln&&typeof En=="function"&&En({type:"skill",unitId:_.id,targetId:_.id,effectKey:ce.effectKey}),Aa(_,_,ce,oe,()=>{xn(),sn=!1,rn=null,tr=new Set,rt?Qt():Wt()}),Wt();return}sn=!0,cn=!1,yf(_,ce),Wt()})})),requestAnimationFrame(()=>{S.style.display="block",S.style.visibility="visible",S.setAttribute("aria-hidden","false")})}),document.addEventListener("click",f=>{let d=document.getElementById("skill-list-overlay"),_=document.getElementById("btn-skill"),S=document.querySelector(".skill-wrap");!d||d.style.display!=="block"||S&&S.contains(f.target)||d.contains(f.target)||(d.style.display="none",d.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(ct||mi||Pt!=="playing"||ge.length===0)return;let f=ge[Re],d=ue.find(S=>S.id===f);if(!d||d.hp<=0)return;mi=!0,Oe=null,cn=!1,Be=new Map,xn(),Yd(),Ko();let _=document.getElementById("turn-player");_.textContent="Click on map to choose facing direction",Wt()}),h.set(0,8,0),a.position.copy(h).add(c),a.lookAt(h);let Ks=document.getElementById("mode-select-overlay"),th=document.getElementById("mode-carousel-track"),nh=document.getElementById("mode-carousel-prev"),ih=document.getElementById("mode-carousel-next"),ba=document.getElementById("mode-carousel-dots"),Wi=document.getElementById("mode-play-btn"),sh=document.getElementById("mode-settings-pvp"),rh=document.getElementById("mode-settings-pvp-map"),ah=document.getElementById("mode-settings-pvp-none"),oh=document.getElementById("mode-settings-options"),Sa=document.getElementById("pvp-map-mode"),kr=document.getElementById("ai-draft-preference"),Jd=document.getElementById("cvcpu-num-games"),lh=document.getElementById("cvcpu-grid-w"),ch=document.getElementById("cvcpu-grid-h"),hh=document.getElementById("cvcpu-center-plaza"),uh=document.getElementById("cvcpu-max-turns"),Zs=document.getElementById("move-speed"),Js=document.getElementById("draft-picks-per-player"),Cs=document.getElementById("online-connect-overlay"),yi=document.getElementById("online-player-name"),Ps=document.getElementById("online-create-section"),js=document.getElementById("online-join-section"),Qs=document.getElementById("online-offer-text"),Ea=document.getElementById("online-reply-text"),Ta=document.getElementById("online-paste-offer"),Hr=document.getElementById("online-join-answer-section"),er=document.getElementById("online-answer-text"),Qo=document.getElementById("online-error"),dh=document.getElementById("online-waiting-msg"),Is=As?["pvp","pvcpu","cvcpu","online","story"]:["pvp","pvcpu","online","story"],el=Is.length-1,Wn=0;function tl(){return Wn===el}function jd(){return Is[Wn]==="online"}function wa(f){Wn=Math.max(0,Math.min(f,el)),th&&(th.style.transform=`translateX(-${Wn*100}%)`),ba&&ba.querySelectorAll(".mode-dot").forEach((_,S)=>{_.classList.toggle("active",S===Wn),_.setAttribute("aria-selected",S===Wn)}),sh&&(sh.style.display=Wn===0||Wn===1||tl()||Is[Wn]==="online"?"":"none"),rh&&(rh.style.display=Wn===0||Wn===1||Is[Wn]==="online"?"":"none"),ah&&(ah.style.display=tl()?"":"none"),oh&&(oh.style.display=As&&Is[Wn]==="cvcpu"?"":"none");let d=Wi?.querySelector(".mode-play-text");Wi&&d&&(tl()?(Wi.disabled=!0,d.textContent="Coming Soon"):(Wi.disabled=!1,d.textContent=jd()?"Connect":"Play game"))}if(ba)for(let f=0;f<=el;f++){let d=document.createElement("button");d.type="button",d.className="mode-dot"+(f===0?" active":""),d.setAttribute("role","tab"),d.setAttribute("aria-label",`Mode ${f+1}`),d.setAttribute("aria-selected",f===0),d.addEventListener("click",()=>wa(f)),ba.appendChild(d)}if(nh&&nh.addEventListener("click",()=>wa(Wn-1)),ih&&ih.addEventListener("click",()=>wa(Wn+1)),Ks&&!As){let f=Ks.querySelector('.mode-slide[data-mode="cvcpu"]');f&&f.parentNode&&f.parentNode.removeChild(f)}if(wa(0),Zs&&(Zs.value=String(Ts),Zs.addEventListener("input",()=>{let f=parseInt(Zs.value,10);!Number.isNaN(f)&&f>=0&&(Ts=f)}),Zs.addEventListener("change",()=>{let f=parseInt(Zs.value,10);!Number.isNaN(f)&&f>=0&&(Ts=f)})),Js&&(Js.value=String(ns),Js.addEventListener("input",()=>{let f=parseInt(Js.value,10);!Number.isNaN(f)&&f>=1&&(ns=f)}),Js.addEventListener("change",()=>{let f=parseInt(Js.value,10);!Number.isNaN(f)&&f>=1&&(ns=f)})),kr&&(a_.forEach(f=>{let d=document.createElement("option");d.value=f.value,d.textContent=f.label,kr.appendChild(d)}),kr.value=w,kr.addEventListener("change",()=>{w=kr.value})),Cs){let f=document.getElementById("online-btn-create"),d=document.getElementById("online-btn-join"),_=document.getElementById("online-btn-copy-offer"),S=document.getElementById("online-btn-connect"),D=document.getElementById("online-btn-join-connect"),P=document.getElementById("online-btn-copy-answer");f&&f.addEventListener("click",async()=>{let H=yi&&yi.value.trim()||"Player 1";if(!H){li("Enter your name");return}li("");try{zi=Sa&&Sa.value||"long",pi=(Date.now()^Math.random()*4294967295)>>>0,yt(zi,pi);let O=await nf(H,pi,zi);Qs&&(Qs.value=O),Ps&&(Ps.style.display="flex",Ps.style.alignItems="flex-start"),js&&(js.style.display="none")}catch(O){li(O.message||"Failed to create game")}}),_&&Qs&&_.addEventListener("click",()=>{Qs.select(),document.execCommand("copy")}),S&&Ea&&S.addEventListener("click",async()=>{let H=Ea.value.trim();if(!H){li("Paste your friend's reply");return}li("");try{await rf(H)}catch(O){li(O.message||"Failed to connect")}}),d&&d.addEventListener("click",()=>{if(!(yi&&yi.value.trim()||"Player 2")){li("Enter your name");return}li(""),Ps&&(Ps.style.display="none"),js&&(js.style.display="flex")}),D&&Ta&&D.addEventListener("click",async()=>{let H=Ta.value.trim();if(!H){li("Paste the host's code");return}li("");try{ln=2,An[2]=yi&&yi.value.trim()||"Player 2";let O=await sf(An[2],H);er&&(er.value=O),Hr&&(Hr.style.display="flex",Hr.style.alignItems="flex-start")}catch(O){li(O.message||"Failed to join")}}),P&&er&&P.addEventListener("click",()=>{er.select(),document.execCommand("copy")})}let as=new Audio;as.loop=!0,as.volume=.3,as.preload="auto";let nl=window.location.href.replace(/[^/]*$/,""),fh=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:nl+(nl.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");as.src=fh,as.addEventListener("error",()=>{let f=nl+"assets/music/tavern.mp3";f!==fh&&(as.src=f)});function Qd(){as.paused&&as.play().catch(()=>{})}function li(f){Qo&&(Qo.textContent=f||"",Qo.style.display=f?"block":"none")}function ef(){Cs&&(Cs.style.display="none",Cs.setAttribute("aria-hidden","true"))}function tf(){li(""),ln=1,An={1:"",2:""},Cs&&(Cs.style.display="flex",Cs.setAttribute("aria-hidden","false")),yi&&(yi.value=""),Ps&&(Ps.style.display="none"),js&&(js.style.display="none"),Qs&&(Qs.value=""),Ea&&(Ea.value=""),Ta&&(Ta.value=""),er&&(er.value=""),Hr&&(Hr.style.display="none"),dh&&(dh.style.display="block")}function ph(f){return new Promise(d=>{if(f.iceGatheringState==="complete"){d();return}let _=()=>{f.iceGatheringState==="complete"&&(f.removeEventListener("icegatheringstatechange",_),d())};f.addEventListener("icegatheringstatechange",_)})}async function nf(f,d,_){let S=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),D=[];S.addEventListener("icecandidate",O=>{O.candidate&&D.push(O.candidate)});let P=S.createDataChannel("game-sync",{ordered:!0});rs=P,ss=S,P.addEventListener("open",()=>gh(P,!0));let H=await S.createOffer();return await S.setLocalDescription(H),await ph(S),JSON.stringify({type:"offer",sdp:S.localDescription.sdp,candidates:D,playerName:f||"Player 1"})}async function sf(f,d){let _=JSON.parse(d),S=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),D=[];if(S.addEventListener("icecandidate",H=>{H.candidate&&D.push(H.candidate)}),S.addEventListener("datachannel",H=>{rs=H.channel,ss=S,gh(rs,!1)}),await S.setRemoteDescription(new RTCSessionDescription({type:"offer",sdp:_.sdp})),_.candidates&&_.candidates.length)for(let H of _.candidates)await S.addIceCandidate(new RTCIceCandidate(H));let P=await S.createAnswer();return await S.setLocalDescription(P),await ph(S),JSON.stringify({type:"answer",sdp:S.localDescription.sdp,candidates:D,playerName:f||"Player 2"})}async function rf(f){let d=JSON.parse(f);if(ss&&(await ss.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:d.sdp})),d.candidates&&d.candidates.length))for(let _ of d.candidates)await ss.addIceCandidate(new RTCIceCandidate(_))}let mh=0;function gh(f,d){if(f.binaryType="arraybuffer",f.addEventListener("message",P=>{try{let H=JSON.parse(P.data);if(H.seq!=null&&H.seq<=mh)return;H.seq!=null&&(mh=H.seq),af(H,d)}catch(H){console.warn("Online message parse error",H)}}),f.addEventListener("close",()=>{it==="online"&&li("Connection lost.")}),!d){let P=An[2]||yi&&yi.value.trim()||"Player 2";En({type:"joined",playerName:P});return}let _=yi&&yi.value.trim()||"Player 1",S=pi??(Date.now()^Math.random()*4294967295)>>>0,D=zi||"long";An[1]=_,En({type:"start",mapSeed:S,mapMode:D,playerName:_})}function af(f,d){if(f.type==="start"){An[1]=f.playerName||"Player 1",pi=f.mapSeed,zi=f.mapMode||"long",yt(zi,pi),ef(),Ma();return}if(f.type==="joined"){An[2]=f.playerName||"Player 2";return}if(Pt==="draft"){f.type==="draftPick"?Jo(f.classKey):f.type==="draftPlace"&&jo(f.gx,f.gy);return}Pt==="playing"&&(f.type==="move"?of(f.unitId,f.toGx,f.toGy):f.type==="attack"?lf(f.unitId,f.targetId,f.hit,f.damage):f.type==="skill"?cf(f):f.type==="endTurn"&&Qt())}function En(f){if(rs&&rs.readyState==="open"){let d=(typeof En.seq<"u"?En.seq:0)+1;En.seq=d,rs.send(JSON.stringify({...f,seq:d}))}}function of(f,d,_){let S=ue.find(D=>D.id===f);!S||S.hp<=0||Ht(S,d,_,()=>{})}function lf(f,d,_,S){let D=ue.find(H=>H.id===f),P=ue.find(H=>H.id===d);!D||!P||P.hp<=0||(je=!0,Oe=null,cn=!1,xn(),_&&S!=null?(P.hp=Math.max(0,P.hp-S),Un(P.x,P.y,String(S),!1),Ue(P),P.hp<=0&&Tn(P,D)):Un(P.x,P.y,"MISS",!0),setTimeout(()=>{rt?Qt():Wt()},400))}function cf(f){let d=ue.find(S=>S.id===f.unitId),_=f.targetId!=null?ue.find(S=>S.id===f.targetId):null;if(d){if(f.effectKey&&d.mp>=(Wo[d.class]||[]).find(S=>S.effectKey===f.effectKey)?.cost){let S=(Wo[d.class]||[]).find(D=>D.effectKey===f.effectKey);if(S){d.mp-=S.cost;let D={showFloatingCombatText:Un,handleUnitDeath:Tn,updateUnitSlashVisibility:Ue,updateTurnUI:Wt,tryCollectPowerup:$e,world:e,units:ue,updateUnitPosition(P){let H=Ke.get(P.id);H&&H.position.copy(Je(P.x,P.y))},animateKnockback(P,H,O,N,X,ce){let be=Ke.get(P.id);if(!be){ce&&ce();return}let ee=Je(H,O).clone(),oe=Je(N,X).clone(),ye=performance.now(),Ve=0;function ke(st){Ve++,Ve%2===0&&Kt();let It=Math.min(1,(st-ye)/Ts),Zt=fn=>fn*fn*(3-2*fn);be.position.lerpVectors(ee,oe,Zt(It)),It<1?requestAnimationFrame(ke):(be.position.copy(oe),ce&&ce())}requestAnimationFrame(ke)}};ya(f.effectKey,d,_,D),_&&Ue(_)}}setTimeout(()=>{Wt()},400)}}function hf(){if(Is[Wn]==="story")return;let f=Is[Wn];if(Qd(),it=f,f==="online"){Ks&&Ks.classList.add("hidden"),tf();return}if(f==="pvp"||f==="pvcpu"){let d=Sa&&Sa.value||"long";yt(d)}else f==="cvcpu"&&(As&&lh&&ch&&hh&&(qc=Math.max(5,Math.min(50,parseInt(lh.value,10)||21)),Yc=Math.max(5,Math.min(50,parseInt(ch.value,10)||11)),$c=Math.max(.1,Math.min(.9,parseFloat(hh.value)||.29))),As&&uh&&(ts=Math.max(10,Math.min(999,parseInt(uh.value,10)||200))),yt("long"));f==="cvcpu"&&($s=Math.max(1,parseInt(Jd?.value,10)||1),Rs=0),Ks&&Ks.classList.add("hidden"),Ma()}Wi?Wi.addEventListener("click",f=>{if(Wi.disabled)return;let d=Wi.querySelector(".mode-play-ripple");if(d){let _=Wi.getBoundingClientRect();d.style.left=f.clientX-_.left+"px",d.style.top=f.clientY-_.top+"px",d.style.width=d.style.height="20px",d.style.marginLeft=d.style.marginTop="-10px",d.classList.remove("ripple"),d.offsetHeight,d.classList.add("ripple"),setTimeout(()=>d.classList.remove("ripple"),500)}hf()}):Ma();function il(f){return it==="pvcpu"&&f===2||it==="cvcpu"}function uf(){let f=is.filter(ee=>G.has(ee));if(f.length===0)return null;let d=w||"balanced";if(d==="random")return f[Math.floor(Math.random()*f.length)];if(d==="custom")return o_.filter(oe=>G.has(oe))[0]??f[0]??null;let _=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function S(ee){let oe=en[ee];if(!oe)return 1/0;let ye=_.map(ke=>oe[ke]??0),Ve=ye.reduce((ke,st)=>ke+st,0)/ye.length;return ye.reduce((ke,st)=>ke+(st-Ve)**2,0)/ye.length}if(d==="tanky")return[...f].sort((oe,ye)=>{let Ve=en[oe]?.hp??0,ke=en[ye]?.hp??0;return ke!==Ve?ke-Ve:(en[ye]?.vit??0)-(en[oe]?.vit??0)})[0]??null;if(d==="aggressive")return[...f].sort((oe,ye)=>{let Ve=en[oe]?.str??0,ke=en[ye]?.str??0;return ke!==Ve?ke-Ve:(en[ye]?.agi??0)-(en[oe]?.agi??0)})[0]??null;if(d==="scout")return[...f].sort((oe,ye)=>{let Ve=en[oe]?.agi??0,ke=en[ye]?.agi??0;return ke!==Ve?ke-Ve:(en[ye]?.dex??0)-(en[oe]?.dex??0)})[0]??null;if(d==="ranged")return[...f].sort((oe,ye)=>{let Ve=en[oe]?.range??0,ke=en[ye]?.range??0;return ke!==Ve?ke-Ve:(en[ye]?.dex??0)-(en[oe]?.dex??0)})[0]??null;if(d==="caster")return[...f].sort((oe,ye)=>{let Ve=en[oe]?.int??0,ke=en[ye]?.int??0;return ke!==Ve?ke-Ve:(en[ye]?.mp??0)-(en[oe]?.mp??0)})[0]??null;let D=wi(),H=l_(ns),O=ue.filter(ee=>ee.player===D).map(ee=>ee.class),N={};for(let ee of Object.keys(Vo))N[ee]=0;for(let ee of O)for(let oe of Object.keys(Vo))if(Vo[oe].includes(ee)){N[oe]++;break}let X=ee=>Math.max(0,(H[ee]??0)-(N[ee]??0)),ce=ee=>{for(let[oe,ye]of Object.entries(Vo))if(ye.includes(ee))return oe;return null};return[...f].sort((ee,oe)=>{let ye=ce(ee),Ve=ce(oe),ke=ye!=null?X(ye):0,st=Ve!=null?X(Ve):0;if(st!==ke)return st-ke;let It=en[ee]?.hp??0,Zt=en[oe]?.hp??0;return Zt!==It?Zt-It:S(ee)-S(oe)})[0]??null}function zr(){if(Pt!=="draft"||!il(wi()))return;if(!K){let _=uf();_&&Jo(_),setTimeout(zr,500);return}let f=Array.from(j).map(_=>({gx:_%e.w,gy:Math.floor(_/e.w)})),d=Od(e,f);if(d.length>0){let{gx:_,gy:S}=d[0];jo(_,S)}}function yh(){let f=[];for(let d=0;d<e.h;d++)for(let _=0;_<e.w;_++)e.type[d][_]===Qe.CENTER&&f.push({gx:_,gy:d});return f}function df(f){let d=[],_=f===1?Qe.BASE_TOP:Qe.BASE_BOTTOM;for(let S=0;S<e.h;S++)for(let D=0;D<e.w;D++)e.type[S][D]===_&&d.push({gx:D,gy:S});return d}function ci(f,d,_,S){return Math.abs(f-_)+Math.abs(d-S)}function ff(f){let d=f.range!=null?f.range:1,_=[];for(let S of ue){if(S.hp<=0||S.player===f.player)continue;let D=ci(f.x,f.y,S.x,S.y);D<=d&&D>0&&Ys(e,f.x,f.y,S.x,S.y)&&_.push({target:S,dist:D})}return _}function pf(f,d,_){let S=_??ue.filter(P=>P.hp>0&&P.player===f.player&&P.id!==f.id),D=d??ue.filter(P=>P.hp>0&&P.player!==f.player);for(let P of S)for(let H of D){let O=H.range!=null?H.range:1,N=ci(H.x,H.y,P.x,P.y);if(N<=O&&N>0&&Ys(e,H.x,H.y,P.x,P.y))return!0}return!1}function Ht(f,d,_,S){let D=f.x,P=f.y,H=ws(e,f.x,f.y,d,_,ue,f);if(!H||H.length<=1){S&&S();return}Oe=null,xn(),ct=!0,g=!0,Ti(f.id),Kt();let O=Ke.get(f.id),N=1;function X(){if(N>=H.length){f.x=H[H.length-1].x,f.y=H[H.length-1].y,$e(f),ct=!1,Ye(O),Ti(),Be=new Map,rt=!0,it==="online"&&f.player===ln&&typeof En=="function"&&En({type:"move",unitId:f.id,toGx:f.x,toGy:f.y}),S&&S();return}let ce=H[N-1],be=H[N],ee=Je(ce.x,ce.y).clone(),oe=Je(be.x,be.y).clone(),ye=oe.x-ee.x,Ve=oe.z-ee.z;ye*ye+Ve*Ve>1e-6&&(O.rotation.y=Math.atan2(ye,Ve));let ke=performance.now(),st=0;function It(Zt){st++,st%2===0&&Kt();let fn=Math.min(1,(Zt-ke)/Ts),hn=(Vt=>Vt*Vt*(3-2*Vt))(fn);if(O.position.lerpVectors(ee,oe,hn),Te(O,hn),g){let Vt=a.position.distanceTo(h),qt=Vt<.1?o:Vt;m.copy(a.position).sub(h).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),h.lerp(O.position,l),a.position.copy(h).add(m.clone().multiplyScalar(qt)),a.lookAt(h)}fn<1?requestAnimationFrame(It):(N++,X())}requestAnimationFrame(It)}X()}function xh(f,d){let _=xe(d,"agi")*.7+xe(d,"luk")*.3,D=Math.random()*Math.max(.001,_)<=xe(f,"dex"),P=0;if(D){let qt=xe(f,"str")*.7+xe(f,"dex")*.2+xe(f,"int")*.1-(xe(d,"vit")*.3+xe(d,"luk")*.2);P=Math.max(1,Math.floor(qt))}je=!0,Oe=null,cn=!1,xn(),it==="online"&&f.player===ln&&typeof En=="function"&&En({type:"attack",unitId:f.id,targetId:d.id,hit:D,damage:D?P:void 0}),console.log("[ATTACK]",`${f.name} (${f.class}, P${f.player})`,"\u2192",`${d.name} (${d.class}, P${d.player})`,D?`${P} dmg`:"MISS",`| ${d.name} HP ${d.hp} \u2192 ${Math.max(0,d.hp-P)}/${d.maxHp}`);let H=Ke.get(f.id);if(!H||!H.userData.rightArm){ct=!0,D?(d.hp=Math.max(0,d.hp-P),Un(d.x,d.y,String(P),!1),Ue(d),d.hp<=0&&Tn(d,f)):Un(d.x,d.y,"MISS",!0),setTimeout(()=>{ct=!1,rt?Qt():Wt()},400);return}let O=Je(f.x,f.y).clone(),N=Je(d.x,d.y).clone(),X=O.clone().lerp(N,.35),ce=N.x-O.x,be=N.z-O.z;if(ce*ce+be*be>1e-6&&(H.rotation.y=Math.atan2(ce,be)),(f.range!=null?f.range:1)>2){let Jn=function(at){un++,un%2===0&&Kt();let Ut=at-hi,ne=Math.min(1,Ut/Gt);if(lt.position.lerpVectors(Hn,xi,ne),Cn){let de=Math.sin(ne*Math.PI)*1.1;Cn.rotation.y=-de}if(!Lt&&ne>=1&&(Lt=!0,n.remove(lt),qt.dispose(),gn.dispose(),D?(d.hp=Math.max(0,d.hp-P),Un(d.x,d.y,String(P),!1),d.hp<=0&&(tn=!0),Ke.get(d.id)?Xt=at:tn&&(Tn(d,f),tn=!1),Ue(d)):Un(d.x,d.y,"MISS",!0)),Xt!=null&&D){let de=Ke.get(d.id);if(de){let me=Math.min(1,(at-Xt)/mt),se=1-me;cs.copy(Bt).multiplyScalar(ht*se),de.position.copy(Et).add(cs),me>=1&&(de.position.copy(Et),Xt=null,tn&&(Tn(d,f),tn=!1))}else Xt=null,tn&&(Tn(d,f),tn=!1)}if(ne<1)requestAnimationFrame(Jn);else{Cn&&(Cn.rotation.y=0);let de=Xt==null;de&&tn&&(Tn(d,f),tn=!1),de?(Bn.shadowMap.enabled=!0,ct=!1,setTimeout(rt?()=>Qt():()=>Wt(),400)):requestAnimationFrame(Jn)}},qt=new Es(.035,.035,.4,6),gn=new bn({color:16763972}),lt=new qe(qt,gn);lt.position.copy(O),lt.position.y+=.6;let an=N.clone().sub(O).normalize();lt.quaternion.setFromUnitVectors(new B(0,1,0),an),n.add(lt),ct=!0;let Cn=H.userData.rightArm,Et=Je(d.x,d.y).clone(),Bt=N.clone().sub(O).normalize(),ht=.4,Lt=!1,Xt=null,tn=!1,Hn=lt.position.clone(),xi=N.clone();xi.y+=.6;let hi=performance.now(),un=0;Bn.shadowMap.enabled=!1,requestAnimationFrame(Jn);return}let ye=!1,Ve=performance.now(),ke=H.userData.rightArm,st=null,It=!1,Zt=Je(d.x,d.y).clone(),fn=N.clone().sub(O).normalize(),kn=.4,hn=0;function Vt(qt){hn++,hn%2===0&&Kt();let gn=qt-Ve,lt=Math.min(1,gn/et),an=lt<=.4?lt/.4:1,Cn=lt>.4?(lt-.4)/.6:0;lt<=.4?H.position.lerpVectors(O,X,an):H.position.lerpVectors(X,O,Cn);let Et=lt<=.35?lt/.35:lt<=.7?(.7-lt)/.35:0;if(ke.rotation.y=-Et*1.1,!ye&&lt>=Ge&&(ye=!0,D?(d.hp=Math.max(0,d.hp-P),Un(d.x,d.y,String(P),!1),d.hp<=0&&(It=!0),Ue(d),Ke.get(d.id)?st=qt:It&&(Tn(d,f),It=!1)):Un(d.x,d.y,"MISS",!0)),st!=null&&D){let Bt=Ke.get(d.id);if(Bt){let ht=Math.min(1,(qt-st)/mt),Lt=1-ht;cs.copy(fn).multiplyScalar(kn*Lt),Bt.position.copy(Zt).add(cs),ht>=1&&(Bt.position.copy(Zt),st=null,It&&(Tn(d,f),It=!1))}else st=null,It&&(Tn(d,f),It=!1)}if(lt<1)requestAnimationFrame(Vt);else{H.position.copy(O),ke.rotation.y=0;let Bt=st==null;Bt&&It&&(Tn(d,f),It=!1),Bt?(Bn.shadowMap.enabled=!0,ct=!1,setTimeout(rt?()=>Qt():()=>Wt(),400)):requestAnimationFrame(Vt)}}ct=!0,Bn.shadowMap.enabled=!1,requestAnimationFrame(Vt)}function mf(f,d){let _=Je(f,d);_.y+=.4;let S=new ki(.1,12,12),D=new bn({color:8930559,transparent:!0,opacity:.9}),P=new qe(S,D);P.position.copy(_),n.add(P);let H=performance.now(),O=0;function N(X){O++,O%2===0&&Kt();let ce=X-H,be=Math.min(1,ce/mn),ee=be*(2-be);P.scale.setScalar(ee*4.5),D.opacity=.9*(1-be),be<1?requestAnimationFrame(N):(n.remove(P),S.dispose(),D.dispose())}requestAnimationFrame(N)}function Aa(f,d,_,S,D){if(_.target==="enemy"&&d==null){setTimeout(()=>{S.updateTurnUI&&S.updateTurnUI(),D&&D()},400);return}let H=(_.range??0)>2&&d!=null&&(d.x!==f.x||d.y!==f.y),O=!H&&d!=null&&(d.x!==f.x||d.y!==f.y);if(!H&&!O){ct=!0,ya(_.effectKey,f,d,S);let Et=_.target==="self"||_.target==="ally",Bt=_.target==="self"?f:d;Et&&Bt?wt(Bt,()=>{setTimeout(()=>{ct=!1,S.updateTurnUI&&S.updateTurnUI(),D&&D()},400)}):setTimeout(()=>{ct=!1,S.updateTurnUI&&S.updateTurnUI(),D&&D()},400);return}if(O){let se=function(he){me++,me%2===0&&Kt();let Ee=he-de,pe=Math.min(1,Ee/et),Ce=pe<=.4?pe/.4:1,Mt=pe>.4?(pe-.4)/.6:0;pe<=.4?Et.position.lerpVectors(Bt,Lt,Ce):Et.position.lerpVectors(Lt,Bt,Mt);let Tt=pe<=.35?pe/.35:pe<=.7?(.7-pe)/.35:0;if(un.rotation.y=-Tt*1.1,!Jn&&pe>=Ge&&(Jn=!0,ya(_.effectKey,f,d,ne),d.hp<=0&&(Ut=!0),S.updateUnitSlashVisibility&&S.updateUnitSlashVisibility(d),Ke.get(d.id)&&_.target!=="ally"?at=he:Ut&&(Tn(d,f),Ut=!1)),at!=null){let Nt=Ke.get(d.id);if(Nt){let zt=Math.min(1,(he-at)/mt),_t=1-zt;cs.copy(xi).multiplyScalar(hi*_t),Nt.position.copy(Hn).add(cs),zt>=1&&(Nt.position.copy(Hn),at=null,Ut&&(Tn(d,f),Ut=!1))}else at=null,Ut&&(Tn(d,f),Ut=!1)}pe<1?requestAnimationFrame(se):(Et.position.copy(Bt),un.rotation.y=0,at==null&&Ut&&(Tn(d,f),Ut=!1),at==null?(Bn.shadowMap.enabled=!0,ct=!1,setTimeout(()=>{S.updateTurnUI&&S.updateTurnUI(),D&&D()},400)):requestAnimationFrame(se))},Et=Ke.get(f.id);if(!Et||!Et.userData.rightArm){ct=!0,ya(_.effectKey,f,d,S),S.updateUnitSlashVisibility&&S.updateUnitSlashVisibility(d),setTimeout(()=>{ct=!1,S.updateTurnUI&&S.updateTurnUI(),D&&D()},400);return}ct=!0;let Bt=Je(f.x,f.y).clone(),ht=Je(d.x,d.y).clone(),Lt=Bt.clone().lerp(ht,.35),Xt=ht.x-Bt.x,tn=ht.z-Bt.z;Xt*Xt+tn*tn>1e-6&&(Et.rotation.y=Math.atan2(Xt,tn));let Hn=Je(d.x,d.y).clone(),xi=ht.clone().sub(Bt).normalize(),hi=.4,un=Et.userData.rightArm,Jn=!1,at=null,Ut=!1,ne={...S,handleUnitDeath:void 0},de=performance.now(),me=0;Bn.shadowMap.enabled=!1,requestAnimationFrame(se);return}let N=Je(f.x,f.y).clone(),X=Je(d.x,d.y).clone(),ce=new Es(.035,.035,.4,6),be=new bn({color:16763972}),ee=new qe(ce,be);ee.position.copy(N),ee.position.y+=.6;let oe=X.clone().sub(N).normalize();ee.quaternion.setFromUnitVectors(new B(0,1,0),oe),n.add(ee),ct=!0;let ye=Ke.get(f.id),Ve=ye&&ye.userData.rightArm?ye.userData.rightArm:null;if(ye){let Et=X.x-N.x,Bt=X.z-N.z;Et*Et+Bt*Bt>1e-6&&(ye.rotation.y=Math.atan2(Et,Bt))}let ke=ee.position.clone(),st=X.clone();st.y+=.6;let It=performance.now(),Zt=Je(d.x,d.y).clone(),fn=X.clone().sub(N).normalize(),kn=.4,hn=!1,Vt=null,qt=0,gn=null,lt=_.effectKey==="powerShot"?{...S,animateKnockback(Et,Bt,ht,Lt,Xt,tn){gn={targ:Et,fromGx:Bt,fromGy:ht,toGx:Lt,toGy:Xt,knockbackOnDone:tn}}}:S;function an(){Bn.shadowMap.enabled=!0,ct=!1,setTimeout(()=>{S.updateTurnUI&&S.updateTurnUI(),D&&D()},400)}function Cn(Et){qt++,qt%2===0&&Kt();let Bt=Et-It,ht=Math.min(1,Bt/Gt);if(ee.position.lerpVectors(ke,st,ht),Ve){let Lt=Math.sin(ht*Math.PI)*1.1;Ve.rotation.y=-Lt}if(!hn&&ht>=1&&(hn=!0,n.remove(ee),ce.dispose(),be.dispose(),_.type==="spell"&&mf(d.x,d.y),ya(_.effectKey,f,d,lt),Ke.get(d.id)&&d.hp>0&&(Vt=Et),S.updateUnitSlashVisibility&&S.updateUnitSlashVisibility(d)),Vt!=null){let Lt=Ke.get(d.id);if(Lt){let Xt=Math.min(1,(Et-Vt)/mt),tn=1-Xt;if(cs.copy(fn).multiplyScalar(kn*tn),Lt.position.copy(Zt).add(cs),Xt>=1&&(Lt.position.copy(Zt),Vt=null,gn)){let{targ:Hn,fromGx:xi,fromGy:hi,toGx:un,toGy:Jn,knockbackOnDone:at}=gn;gn=null,S.animateKnockback?S.animateKnockback(Hn,xi,hi,un,Jn,()=>{at&&at(),S.updateUnitSlashVisibility&&S.updateUnitSlashVisibility(Hn),an()}):an();return}}else if(Vt=null,gn){gn=null,an();return}}if(ht<1)requestAnimationFrame(Cn);else if(Ve&&(Ve.rotation.y=0),Vt==null)if(gn){let{targ:Lt,fromGx:Xt,fromGy:tn,toGx:Hn,toGy:xi,knockbackOnDone:hi}=gn;gn=null,S.animateKnockback?S.animateKnockback(Lt,Xt,tn,Hn,xi,()=>{hi&&hi(),S.updateUnitSlashVisibility&&S.updateUnitSlashVisibility(Lt),an()}):an()}else an();else requestAnimationFrame(Cn)}Bn.shadowMap.enabled=!1,requestAnimationFrame(Cn)}function dn(){if(Pt!=="playing"||!il(Ct)||ct||ge.length===0)return;let f=ge[Re],d=ue.find(ne=>ne.id===f);if(!d||d.hp<=0)return;let _=xe(d,"agi"),S=Xo(e,d.x,d.y,_,ue,d),D=new Set(ue.filter(ne=>ne.hp>0&&ne.id!==d.id).map(ne=>ne.y*e.w+ne.x)),P=[];S.forEach((ne,de)=>{ne!==0&&(D.has(de)||P.push({gx:de%e.w,gy:Math.floor(de/e.w),dist:ne}))});let H=ff(d),O=yh(),N=df(d.player),X=.25,ce=.03,be=d.maxHp>0&&d.hp/d.maxHp<X,ee=d.maxHp>0&&d.hp/d.maxHp<ce,oe=d.level===2,ye=O.filter(ne=>!D.has(ne.gy*e.w+ne.gx)),Ve=N.filter(ne=>!D.has(ne.gy*e.w+ne.gx)),ke=new Set(O.map(ne=>ne.gy*e.w+ne.gx)),st=ye.length>0?ye:O,It=Ve.length>0?Ve:N,Zt=st.length>0?tn(st):null,fn=It.length>0?tn(It):null,kn=sl(d),hn=kn.filter(ne=>!ne.disabled&&d.mp>=ne.cost&&ne.target==="enemy"),Vt=hn.length>0?Math.max(...hn.map(ne=>ne.range||0)):0,qt=Math.max(d.range!=null?d.range:1,Vt),gn=d.level>=2&&qt>=2,lt=ue.filter(ne=>ne.hp>0&&ne.player!==d.player),an=ue.filter(ne=>ne.hp>0&&ne.player===d.player&&ne.id!==d.id);function Cn(ne,de){if(de.length===0)return null;let me=null,se=1/0;for(let he of ne){let Ee=0;for(let pe of de)Ee+=ci(he.gx,he.gy,pe.gx,pe.gy);Ee<se&&(se=Ee,me=he)}return me}function Et(ne,de){if(de.length===0||ne.length===0)return null;let me=null,se=1/0;for(let he of ne){let Ee=Math.min(...de.map(pe=>ci(he.gx,he.gy,pe.gx,pe.gy)));Ee<se&&(se=Ee,me=he)}return me}function Bt(ne,de){let me=qt,se=[];for(let he of ue){if(he.hp<=0||he.player===d.player)continue;let Ee=ci(ne,de,he.x,he.y);Ee<=me&&Ee>0&&Ys(e,ne,de,he.x,he.y)&&se.push({target:he,dist:Ee})}return se}let ht=new Set(P.map(ne=>ne.gy*e.w+ne.gx));function Lt(ne,de){if(!ne||ne.length<=1)return null;let me=Math.min(de,ne.length-1);for(let se=me;se>=1;se--){let he=ne[se],Ee=he.y*e.w+he.x;if(ht.has(Ee))return{gx:he.x,gy:he.y}}return null}function Xt(ne,de){if(!ne||ne.length<=1)return null;let me=Math.min(de,ne.length-1);for(let se=me;se>=1;se--){let he=ne[se];if(!D.has(he.y*e.w+he.x))return{gx:he.x,gy:he.y}}return null}function tn(ne){let de=null,me=null,se=1/0;for(let he of ne){let Ee=ws(e,d.x,d.y,he.gx,he.gy,ue,d);Ee&&Ee.length>1&&Ee.length<se&&(se=Ee.length,de=Ee,me=he)}return de&&me?{path:de,target:me}:null}function Hn(ne){let de=ne??P;if(de.length===0)return null;if(lt.length===0)return de[0];let me=null,se=-1;for(let he of de){let Ee=Math.min(...lt.map(pe=>ci(he.gx,he.gy,pe.x,pe.y)));Ee>se&&(se=Ee,me=he)}return me}function xi(ne){let de=ne??P;if(de.length===0)return null;if(lt.length===0)return de[0];let me=d.maxHp>0&&d.hp/d.maxHp>=.6,se=null,he=-1/0;for(let Ee of de){let pe=Math.min(...lt.map(Tt=>ci(Ee.gx,Ee.gy,Tt.x,Tt.y))),Ce=an.length>0?Math.min(...an.map(Tt=>ci(Ee.gx,Ee.gy,Tt.x,Tt.y))):999,Mt;me?Mt=Ce<pe?pe-1e3:pe:Mt=pe-Ce,Mt>he&&(he=Mt,se=Ee)}return se}function hi(){let ne=qt;if(lt.length===0)return null;let de=null,me=-1;for(let se of P){let he=Math.min(...lt.map(pe=>ci(se.gx,se.gy,pe.x,pe.y)));lt.some(pe=>ci(se.gx,se.gy,pe.x,pe.y)<=ne)&&he>me&&(me=he,de=se)}return de}let un=new Map;for(let ne of P){let de=ne.gy*e.w+ne.gx;un.has(de)||un.set(de,Bt(ne.gx,ne.gy))}let Jn=H.some(ne=>ne.target.maxHp>0&&ne.target.hp/ne.target.maxHp<X),at=Jn||P.some(ne=>(un.get(ne.gy*e.w+ne.gx)||[]).some(me=>me.target.maxHp>0&&me.target.hp/me.target.maxHp<X));if(je){if(rt){setTimeout(()=>Qt(),400);return}if(gn&&lt.length>0&&re.size>0&&P.length>0){let he=[];re.forEach((pe,Ce)=>{he.push({gx:Ce%e.w,gy:Math.floor(Ce/e.w)})});let Ee=tn(he);if(Ee){let pe=Xt(Ee.path,_);if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){Ht(d,pe.gx,pe.gy,()=>setTimeout(Qt,400));return}let Ce=Et(P,he);if(Ce&&(Ce.gx!==d.x||Ce.gy!==d.y)){Ht(d,Ce.gx,Ce.gy,()=>setTimeout(Qt,400));return}}}if(ts-Ot<=20&&O.length>0){let he=O.some(Ee=>Ee.gx===d.x&&Ee.gy===d.y);if(he&&P.length>0){let pe=P.filter(Ce=>ke.has(Ce.gy*e.w+Ce.gx)).filter(Ce=>Ce.gx!==d.x||Ce.gy!==d.y);if(pe.length>0){let Ce=Hn(pe);if(Ce&&(Ce.gx!==d.x||Ce.gy!==d.y)){Ht(d,Ce.gx,Ce.gy,()=>setTimeout(Qt,400));return}}setTimeout(()=>Qt(),400);return}if(he){setTimeout(()=>Qt(),400);return}if(P.length>0){let Ee=Zt,pe=Ee?Xt(Ee.path,_):null;if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){Ht(d,pe.gx,pe.gy,()=>setTimeout(Qt,400));return}let Ce=Et(P,st);if(Ce&&(Ce.gx!==d.x||Ce.gy!==d.y)){Ht(d,Ce.gx,Ce.gy,()=>setTimeout(Qt,400));return}}setTimeout(()=>Qt(),400);return}if(!be&&P.length>0){if(oe&&N.length>0&&!N.some(Ee=>Ee.gx===d.x&&Ee.gy===d.y)){let Ee=fn,pe=Ee?Xt(Ee.path,_):null;if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){Ht(d,pe.gx,pe.gy,()=>setTimeout(Qt,400));return}let Ce=Et(P,It);if(Ce&&(Ce.gx!==d.x||Ce.gy!==d.y)){Ht(d,Ce.gx,Ce.gy,()=>setTimeout(Qt,400));return}}if(O.length>0&&!O.some(Ee=>Ee.gx===d.x&&Ee.gy===d.y)){let Ee=Zt,pe=Ee?Xt(Ee.path,_):null;if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){Ht(d,pe.gx,pe.gy,()=>setTimeout(Qt,400));return}let Ce=Et(P,st);if(Ce&&(Ce.gx!==d.x||Ce.gy!==d.y)){Ht(d,Ce.gx,Ce.gy,()=>setTimeout(Qt,400));return}}}let de=O.length>0?P.filter(he=>ke.has(he.gy*e.w+he.gx)):null,me=de!=null&&de.length>0?de:P,se=null;if(me.length>0&&an.length>0&&(se=xi(me),se)){let he=ws(e,d.x,d.y,se.gx,se.gy,ue,d),Ee=he?he.length-1:1/0;(!he||he.length<=1||Ee>_)&&(se=Hn(me))}if(!se&&me.length>0&&(se=Hn(me)),se&&(se.gx!==d.x||se.gy!==d.y)){Ht(d,se.gx,se.gy,()=>setTimeout(Qt,400));return}setTimeout(()=>Qt(),400);return}if(ee&&ts-Ot>20&&!rt&&P.length>0){let ne=null,de=1/0;for(let se of P){let Ee=(un.get(se.gy*e.w+se.gx)||[]).filter(pe=>pe.target.maxHp>0&&pe.target.hp/pe.target.maxHp<X);if(Ee.length>0){let pe=Math.min(...Ee.map(Ce=>Ce.target.hp));pe<de&&(de=pe,ne=se)}}if(ne){let se=ws(e,d.x,d.y,ne.gx,ne.gy,ue,d),he=se?Lt(se,_):null;if(he&&(he.gx!==d.x||he.gy!==d.y)){Ht(d,he.gx,he.gy,()=>setTimeout(dn,600));return}}let me=Hn();if(me&&(me.gx!==d.x||me.gy!==d.y)){Ht(d,me.gx,me.gy,()=>setTimeout(dn,600));return}setTimeout(()=>Qt(),400);return}if(!je){let Mt=function(_t){return Vr(d,_t,ue).filter(kt=>kt.targetUnit!=null).map(kt=>kt.targetUnit)},ne=kn,de=d.maxHp>0?d.hp/d.maxHp:1,me=.35,se=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct"]),he=new Set(["chakra","sacrifice"]),Ee=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),pe=new Set(["manaDrain","impale","poison"]),Ce=new Set(["dominate","weaken","cripple","hex","blind","raid"]),Tt={showFloatingCombatText:Un,handleUnitDeath:Tn,updateUnitSlashVisibility:Ue,updateTurnUI:Wt,tryCollectPowerup:$e,world:e,units:ue,updateUnitPosition(_t){let Yt=Ke.get(_t.id);Yt&&Yt.position.copy(Je(_t.x,_t.y))},animateKnockback(_t,Yt,kt,on,wn,Jt){let Pn=Ke.get(_t.id);if(!Pn){Jt&&Jt();return}let ir=Je(Yt,kt).clone(),Ls=Je(on,wn).clone(),cl=performance.now(),wh=0;function Ah(Cf){wh++,wh%2===0&&Kt();let Rh=Math.min(1,(Cf-cl)/Ts),Pf=hl=>hl*hl*(3-2*hl);Pn.position.lerpVectors(ir,Ls,Pf(Rh)),Rh<1?requestAnimationFrame(Ah):(Pn.position.copy(Ls),Jt&&Jt())}requestAnimationFrame(Ah)}},Nt=null,zt=null;if(!at){for(let Yt of ne)if(!Yt.disabled&&he.has(Yt.effectKey)){let on=Vr(d,Yt,ue).filter(wn=>wn.targetUnit&&wn.targetUnit.maxHp>0&&wn.targetUnit.hp/wn.targetUnit.maxHp<.5);if(on.length>0){let wn=on.sort((Jt,Pn)=>Jt.targetUnit.hp-Pn.targetUnit.hp)[0].targetUnit;Nt=Yt,zt=wn;break}}}if(!Nt&&!at&&(H.length>0||P.some(Yt=>(un.get(Yt.gy*e.w+Yt.gx)||[]).length>0))){let Yt=ne.filter(kt=>!kt.disabled&&Ee.has(kt.effectKey)).sort((kt,on)=>(on.level||1)-(kt.level||1));for(let kt of Yt){let on=d.tempBuff&&d.tempBuff.duration>0;if(kt.target==="self"){if(kt.effectKey==="bloodlust"&&d.hp/d.maxHp>.8)continue;if(!on){Nt=kt,zt=d;break}}if(kt.target==="ally"){if(kt.effectKey==="forge"&&on||kt.effectKey==="fortify"&&on||kt.effectKey==="mantra"&&on||kt.effectKey==="sanctuary"&&on)continue;let Jt=Vr(d,kt,ue).filter(Pn=>Pn.targetUnit!=null).map(Pn=>Pn.targetUnit);if(Jt.length>0){let Pn=Jt.filter(Ls=>!Ls.tempBuff||Ls.tempBuff.duration<=0),ir=(Pn.length>0?Pn:Jt).sort((Ls,cl)=>Ls.hp-cl.hp)[0];Nt=kt,zt=ir;break}}}}if(!Nt){for(let _t of ne)if(!_t.disabled&&se.has(_t.effectKey)){if(_t.effectKey==="feast"&&d.hp/d.maxHp>.7||_t.effectKey==="berserk"&&d.hp/d.maxHp<.25||_t.effectKey==="shuriken"&&H.length>0||_t.effectKey==="judgement"&&d.hp/d.maxHp>.7)continue;let Yt=Mt(_t);if(Yt.length===0)continue;let kt=Yt.filter(Jt=>Jt.maxHp>0&&Jt.hp/Jt.maxHp<me),on=kt.length>0?kt:Yt,wn=_t.type==="spell"?on.reduce((Jt,Pn)=>{if(!Jt)return Pn;let ir=xe(Pn,"int")-xe(Jt,"int");return ir<0||ir===0&&Pn.hp<Jt.hp?Pn:Jt},null):on.reduce((Jt,Pn)=>!Jt||Pn.hp<Jt.hp?Pn:Jt,null);Nt=_t,zt=wn;break}}if(!Nt&&!Jn){for(let _t of ne)if(!_t.disabled&&Ce.has(_t.effectKey)){let Yt=Mt(_t),kt=Yt.length>0?Yt.reduce((on,wn)=>!on||wn.hp<on.hp?wn:on,null):null;Nt=_t,zt=kt;break}}if(!Nt&&!Jn){for(let _t of ne)if(!_t.disabled&&pe.has(_t.effectKey)){let kt=Mt(_t).filter(on=>!on.tempDebuff||on.tempDebuff.duration<=0);if(kt.length>0){let on=kt.reduce((wn,Jt)=>!wn||Jt.hp<wn.hp?Jt:wn,null);Nt=_t,zt=on;break}}}if(Nt&&zt){d.mp-=Nt.cost,je=!0;let _t=Nt.target==="self"?d:zt;Aa(d,_t,Nt,Tt,()=>setTimeout(dn,600));return}}if(pf(d,lt,an)&&H.length>0){H.sort((de,me)=>de.target.hp-me.target.hp||de.dist-me.dist);let ne=H[0].target;xh(d,ne);return}if(H.length>0){H.sort((de,me)=>de.target.hp-me.target.hp||de.dist-me.dist);let ne=H[0].target;xh(d,ne);return}if(!rt&&!at&&re.size>0&&P.length>0){let ne=[];re.forEach((me,se)=>{ne.push({gx:se%e.w,gy:Math.floor(se/e.w)})});let de=tn(ne);if(de){let me=Xt(de.path,_);if(me&&(me.gx!==d.x||me.gy!==d.y)){Ht(d,me.gx,me.gy,()=>setTimeout(dn,600));return}let se=Et(P,ne);if(se&&(se.gx!==d.x||se.gy!==d.y)){Ht(d,se.gx,se.gy,()=>setTimeout(dn,600));return}}}let Ut=ts-Ot;if(Ut<=20&&O.length>0&&!rt&&P.length>0&&!O.some(de=>de.gx===d.x&&de.gy===d.y)){let de=Zt,me=de?de.path:null,se=O.length>0?Math.min(...O.map(zt=>ci(d.x,d.y,zt.gx,zt.gy))):1/0,he=new Map,Ee=new Map;for(let zt of P){let _t=zt.gy*e.w+zt.gx;he.set(_t,O.length>0?Math.min(...O.map(Yt=>ci(zt.gx,zt.gy,Yt.gx,Yt.gy))):1/0),Ee.set(_t,me?me.findIndex(Yt=>Yt.x===zt.gx&&Yt.y===zt.gy):-1)}let pe=null,Ce=-1,Mt=X;for(let zt of P){let _t=zt.gy*e.w+zt.gx;if(he.get(_t)>se||(un.get(_t)||[]).filter(Jt=>Jt.target.maxHp>0&&Jt.target.hp/Jt.target.maxHp<Mt).length===0)continue;let on=Ee.get(_t),wn=on>=0?on:0;wn>Ce&&(Ce=wn,pe=zt)}if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){Ht(d,pe.gx,pe.gy,()=>setTimeout(dn,600));return}let Tt=de?Xt(de.path,_):null;if(Tt&&(Tt.gx!==d.x||Tt.gy!==d.y)){Ht(d,Tt.gx,Tt.gy,()=>setTimeout(dn,600));return}let Nt=Et(P,st);if(Nt&&(Nt.gx!==d.x||Nt.gy!==d.y)){Ht(d,Nt.gx,Nt.gy,()=>setTimeout(dn,600));return}}if(be&&P.length>0&&!rt){let ne=null,de=1/0;for(let me of P){let he=(un.get(me.gy*e.w+me.gx)||[]).filter(Ee=>Ee.target.maxHp>0&&Ee.target.hp/Ee.target.maxHp<X);if(he.length>0){let Ee=Math.min(...he.map(pe=>pe.target.hp));Ee<de&&(de=Ee,ne=me)}}if(ne){let me=ws(e,d.x,d.y,ne.gx,ne.gy,ue,d),se=me?Lt(me,_):null;if(se&&(se.gx!==d.x||se.gy!==d.y)){Ht(d,se.gx,se.gy,()=>setTimeout(dn,600));return}}if(Ut>20&&oe&&N.length>0&&!N.some(se=>se.gx===d.x&&se.gy===d.y)){let se=Ve.length>0?Ve:N,he=fn;if(he!=null&&he.path.length<=5){let pe=Xt(he.path,_);if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){Ht(d,pe.gx,pe.gy,()=>setTimeout(dn,600));return}let Ce=Et(P,se);if(Ce&&(Ce.gx!==d.x||Ce.gy!==d.y)){Ht(d,Ce.gx,Ce.gy,()=>setTimeout(dn,600));return}}}if(Ut>20){let me=Hn();if(me&&ci(d.x,d.y,me.gx,me.gy)>0){Ht(d,me.gx,me.gy,()=>setTimeout(dn,600));return}setTimeout(()=>Qt(),400);return}}if(Ut<=10&&O.length>0&&!rt&&P.length>0&&!O.some(de=>de.gx===d.x&&de.gy===d.y)){let de=ye.length>0?ye:O,me=Zt,se=me?Xt(me.path,_):null;if(se&&(se.gx!==d.x||se.gy!==d.y)){Ht(d,se.gx,se.gy,()=>setTimeout(dn,600));return}let he=Et(P,de);if(he&&(he.gx!==d.x||he.gy!==d.y)){Ht(d,he.gx,he.gy,()=>setTimeout(dn,600));return}}if(d.level===1&&O.length>0&&!rt&&!O.some(de=>de.gx===d.x&&de.gy===d.y)&&P.length>0){let de=ye.length>0?ye:O,me=Zt,se=me?Xt(me.path,_):null;if(se&&(se.gx!==d.x||se.gy!==d.y)){Ht(d,se.gx,se.gy,()=>setTimeout(dn,600));return}let he=Et(P,de);if(he&&(he.gx!==d.x||he.gy!==d.y)){Ht(d,he.gx,he.gy,()=>setTimeout(dn,600));return}}if(oe&&N.length>0&&!rt&&!N.some(de=>de.gx===d.x&&de.gy===d.y)&&P.length>0){let de=lt.filter(Mt=>Mt.maxHp>0&&Mt.hp/Mt.maxHp<X),me=null,se=1/0;for(let Mt of P){let Nt=(un.get(Mt.gy*e.w+Mt.gx)||[]).find(zt=>de.some(_t=>_t.id===zt.target.id));Nt&&Nt.target.hp<se&&(se=Nt.target.hp,me=Mt)}if(me){let Mt=ws(e,d.x,d.y,me.gx,me.gy,ue,d),Tt=Mt?Lt(Mt,_):null;if(Tt&&(Tt.gx!==d.x||Tt.gy!==d.y)){Ht(d,Tt.gx,Tt.gy,()=>setTimeout(dn,600));return}}let he=Ve.length>0?Ve:N,Ee=fn,pe=Ee?Xt(Ee.path,_):null;if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){Ht(d,pe.gx,pe.gy,()=>setTimeout(dn,600));return}let Ce=Et(P,he);if(Ce&&(Ce.gx!==d.x||Ce.gy!==d.y)){Ht(d,Ce.gx,Ce.gy,()=>setTimeout(dn,600));return}}if(gn&&lt.length>0&&!rt&&P.length>0){if(!at&&re.size>0){let de=[];re.forEach((se,he)=>{de.push({gx:he%e.w,gy:Math.floor(he/e.w)})});let me=tn(de);if(me){let se=Xt(me.path,_);if(se&&(se.gx!==d.x||se.gy!==d.y)){Ht(d,se.gx,se.gy,()=>setTimeout(dn,600));return}let he=Et(P,de);if(he&&(he.gx!==d.x||he.gy!==d.y)){Ht(d,he.gx,he.gy,()=>setTimeout(dn,600));return}}}let ne=hi();if(ne&&(ne.gx!==d.x||ne.gy!==d.y)){Ht(d,ne.gx,ne.gy,()=>setTimeout(dn,600));return}}if(lt.length>0&&!rt&&P.length>0){let de=function(se,he){let Ee=null;for(let pe=-ne;pe<=ne;pe++)for(let Ce=-ne;Ce<=ne;Ce++){if(Ce===0&&pe===0||Math.abs(Ce)+Math.abs(pe)>ne)continue;let Mt=se.x+Ce,Tt=se.y+pe;if(Mt<0||Mt>=e.w||Tt<0||Tt>=e.h||!Fr(e,Mt,Tt)||!Ys(e,Mt,Tt,se.x,se.y)||ue.some(kt=>kt.hp>0&&kt.x===Mt&&kt.y===Tt))continue;let zt=ws(e,d.x,d.y,Mt,Tt,ue,d),_t=zt?zt.length-1:1/0;zt&&zt.length>1&&(!he||_t<=_)&&(!Ee||zt.length<Ee.length)&&(Ee=zt)}return Ee},ne=qt,me=[];for(let se of lt){let he=de(se,!0);he&&me.push({enemy:se,path:he})}if(me.length>0){let se=me.filter(Ce=>Ce.enemy.maxHp>0&&Ce.enemy.hp/Ce.enemy.maxHp<X),he=se.length>0?se:me;se.length>0?he.sort((Ce,Mt)=>Ce.enemy.hp-Mt.enemy.hp||Ce.path.length-Mt.path.length):he.sort((Ce,Mt)=>Ce.path.length-Mt.path.length||Ce.enemy.hp-Mt.enemy.hp);let Ee=he[0],pe=Lt(Ee.path,_);if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){Ht(d,pe.gx,pe.gy,()=>setTimeout(dn,600));return}}if(me.length===0){let se=null,he=1/0;for(let Ee of lt){let pe=de(Ee,!1);pe&&pe.length<he&&(he=pe.length,se=pe)}if(se){let Ee=Lt(se,_);if(Ee&&(Ee.gx!==d.x||Ee.gy!==d.y)){Ht(d,Ee.gx,Ee.gy,()=>setTimeout(dn,600));return}}}}setTimeout(()=>Qt(),400)}function xn(){for(ni.length=0;Rn.children.length;){let f=Rn.children[0];Rn.remove(f),f.geometry!==Gr&&f.geometry!==Wr&&f.geometry.dispose(),f.material.dispose()}Kt()}let tr=new Set;function sl(f){return!f||!f.class?[]:Wo[f.class]?Wo[f.class].map(d=>({...d,disabled:d.disabled===!0||f.level<d.level||d.hpCost&&f.hp<d.hpCost||d.cost&&f.mp<d.cost})):[]}function Vr(f,d,_){let S=[],D=(H,O,N,X)=>Math.abs(H-N)+Math.abs(O-X),P=d.range||0;if(d.target==="self")return S.push({gx:f.x,gy:f.y,targetUnit:null}),S;for(let H of _)H.hp<=0||D(f.x,f.y,H.x,H.y)>P||P>2&&!Ys(e,f.x,f.y,H.x,H.y)||(d.target==="enemy"&&H.player!==f.player&&S.push({gx:H.x,gy:H.y,targetUnit:H}),d.target==="ally"&&H.player===f.player&&S.push({gx:H.x,gy:H.y,targetUnit:H}));return S}function gf(f,d){let _=d.range||0;if(d.target==="self")return[{gx:f.x,gy:f.y}];let S=Fd(e,f.x,f.y,_),D=[];return S.forEach((P,H)=>{let O=H%e.w,N=H/e.w|0;_>2&&!Ys(e,f.x,f.y,O,N)||D.push({gx:O,gy:N})}),D}function yf(f,d){let _=Vr(f,d,ue);tr=new Set(_.map(D=>`${D.gx},${D.gy}`));let S=d.target==="self"?_:gf(f,d);xn(),S.forEach(({gx:D,gy:P})=>{let O=(qn+e.height[P][D]*.35)/2+qn/2,N=D*gt-Ze+gt/2,X=P*gt-ze+gt/2,ce=O+.01,be=new bn({color:8926122,transparent:!0,opacity:.4,side:_n}),ee=new qe(Gr,be);ee.rotation.x=-Math.PI/2,ee.position.set(N,ce,X),Rn.add(ee),ni.push(be);let oe=new bn({color:11167436,transparent:!0,opacity:.7,side:_n}),ye=new qe(Wr,oe);ye.rotation.x=-Math.PI/2,ye.position.set(N,ce+.01,X),ye.userData.gx=D,ye.userData.gy=P,Rn.add(ye),ni.push(oe)})}let _h=.82,vh=1.02,Gr=new Bi(vh,vh),Wr=new Bi(_h,_h);function xf(f){xn(),f.forEach(({gx:d,gy:_})=>{let D=(qn+e.height[_][d]*.35)/2+qn/2,P=d*gt-Ze+gt/2,H=_*gt-ze+gt/2,O=D+.01,N=new bn({color:2271812,transparent:!0,opacity:.4,side:_n}),X=new qe(Gr,N);X.rotation.x=-Math.PI/2,X.position.set(P,O,H),Rn.add(X),ni.push(N);let ce=new bn({color:4508774,transparent:!0,opacity:.7,side:_n}),be=new qe(Wr,ce);be.rotation.x=-Math.PI/2,be.position.set(P,O+.01,H),be.userData.gx=d,be.userData.gy=_,Rn.add(be),ni.push(ce)}),Kt()}function rl(f){xn(),f.forEach((d,_)=>{if(d===0)return;let S=_%e.w,D=_/e.w|0,H=(qn+e.height[D][S]*.35)/2+qn/2,O=S*gt-Ze+gt/2,N=D*gt-ze+gt/2,X=H+.01,ce=new bn({color:3381759,transparent:!0,opacity:.35,side:_n}),be=new qe(Gr,ce);be.rotation.x=-Math.PI/2,be.position.set(O,X,N),Rn.add(be),ni.push(ce);let ee=new bn({color:6730751,transparent:!0,opacity:.65,side:_n}),oe=new qe(Wr,ee);oe.rotation.x=-Math.PI/2,oe.position.set(O,X+.01,N),Rn.add(oe),ni.push(ee)}),Kt()}function _f(f){xn(),f.forEach((d,_)=>{if(d===0)return;let S=_%e.w,D=_/e.w|0,H=(qn+e.height[D][S]*.35)/2+qn/2,O=S*gt-Ze+gt/2,N=D*gt-ze+gt/2,X=H+.01,ce=new bn({color:10035746,transparent:!0,opacity:.4,side:_n}),be=new qe(Gr,ce);be.rotation.x=-Math.PI/2,be.position.set(O,X,N),Rn.add(be),ni.push(ce);let ee=new bn({color:13386820,transparent:!0,opacity:.7,side:_n}),oe=new qe(Wr,ee);oe.rotation.x=-Math.PI/2,oe.position.set(O,X+.01,N),Rn.add(oe),ni.push(ee)}),Kt()}let os=new Fo,ls=new He;function Ra(f,d){let _=t.getBoundingClientRect();return ls.x=(f-_.left)/_.width*2-1,ls.y=-((d-_.top)/_.height)*2+1,{x:ls.x,y:ls.y}}function vf(f,d){if(ct)return;ls.x=f,ls.y=d,os.setFromCamera(ls,a);let _=os.intersectObjects(ie.children,!0);if(_.length===0)return;let S=null;for(let O of _){let N=O.object;for(;N&&(N.userData.gx==null||N.userData.gy==null);)N=N.parent;if(N&&N.userData.gx!=null){S=N;break}}if(!S||S.userData.gx==null)return;let D=S.userData.gx,P=S.userData.gy;if(Pt==="draft"&&K){let O=P*e.w+D;j.has(O)&&jo(D,P);return}if(Pt!=="playing"||it==="cvcpu")return;if(sn&&rn){let O=ge[Re],N=ue.find(oe=>oe.id===O&&oe.hp>0);if(N&&D===N.x&&P===N.y){sn=!1,rn=null,tr=new Set,xn(),rt?Be=new Map:(Be=Xo(e,N.x,N.y,xe(N,"agi"),ue,N),rl(Be)),Wt();return}let X=`${D},${P}`;if(!tr.has(X))return;if(!N||N.mp<rn.cost){sn=!1,rn=null,xn(),Wt();return}let ce=ue.find(oe=>oe.x===D&&oe.y===P&&oe.hp>0);if(rn.target==="enemy"&&(!ce||ce.player===N.player)||rn.target==="ally"&&ce&&ce.player!==N.player||rn.target==="self"&&(D!==N.x||P!==N.y)||rn.target==="enemy"&&!ce)return;N.mp-=rn.cost,je=!0;let be={showFloatingCombatText:Un,handleUnitDeath:Tn,updateUnitSlashVisibility:Ue,updateTurnUI:Wt,tryCollectPowerup:$e,world:e,units:ue,updateUnitPosition(oe){let ye=Ke.get(oe.id);ye&&ye.position.copy(Je(oe.x,oe.y))},animateKnockback(oe,ye,Ve,ke,st,It){let Zt=Ke.get(oe.id);if(!Zt){It&&It();return}let fn=Je(ye,Ve).clone(),kn=Je(ke,st).clone(),hn=performance.now(),Vt=0;function qt(gn){Vt++,Vt%2===0&&Kt();let lt=Math.min(1,(gn-hn)/Ts),an=Cn=>Cn*Cn*(3-2*Cn);Zt.position.lerpVectors(fn,kn,an(lt)),lt<1?requestAnimationFrame(qt):(Zt.position.copy(kn),It&&It())}requestAnimationFrame(qt)}},ee=rn.target==="self"?N:ce||null;it==="online"&&N.player===ln&&typeof En=="function"&&En({type:"skill",unitId:N.id,targetId:ee?ee.id:void 0,effectKey:rn.effectKey}),Aa(N,ee,rn,be,()=>{xn(),sn=!1,rn=null,tr=new Set,rt?Qt():Wt()});return}if(mi){let O=ge[Re],N=ue.find(ce=>ce.id===O),X=Ke.get(O);if(N&&X&&Ft.length>0){let ce=Je(N.x,N.y),be=Je(D,P),ee=be.x-ce.x,oe=be.z-ce.z,ye=ee*ee+oe*oe>1e-6?Math.atan2(ee,oe):X.rotation.y;X.rotation.y=Jc(ye)}setTimeout(()=>Qt(),400);return}if(Oe!=null&&cn){let O=ue.find(ce=>ce.id===Oe);if(!O||O.player!==Ct)return;let N=P*e.w+D,X=ue.find(ce=>ce.x===D&&ce.y===P&&ce.hp>0);if(X&&X.id===ge[Re]&&X.player===Ct){cn=!1,Oe=X.id,rt?(xn(),Be=new Map):(Be=Xo(e,X.x,X.y,xe(X,"agi"),ue,X),rl(Be)),Wt();return}if(!Be.has(N)||Be.get(N)===0)return;if(X&&X.player!==Ct){let ce=xe(X,"agi")*.7+xe(X,"luk")*.3;if(Math.random()*Math.max(.001,ce)<=xe(O,"dex")){let oe=xe(O,"str")*.7+xe(O,"dex")*.1+xe(O,"int")*.07-(xe(X,"vit")*.3+xe(X,"luk")*.1),ye=Math.max(1,Math.floor(oe));X.hp=Math.max(0,X.hp-ye),Un(X.x,X.y,String(ye),!1),X.hp<=0&&Tn(X,O),Ue(X)}else Un(X.x,X.y,"MISS",!0);je=!0,Oe=null,cn=!1,xn(),setTimeout(rt?()=>Qt():()=>Wt(),400)}return}let H=ue.find(O=>O.x===D&&O.y===P&&O.hp>0);if(H){if(H.id===ge[Re]&&H.player===Ct){dt(),Oe=H.id,cn=!1,rt?(xn(),Be=new Map):(Be=Xo(e,D,P,xe(H,"agi"),ue,H),rl(Be)),Wt();return}xn(),Be=new Map,cn=!1,xt(H),Wt();return}if(dt(),Oe!=null){let oe=function(){if(ee>=ce.length){O.x=ce[ce.length-1].x,O.y=ce[ce.length-1].y,ct=!1,Ye(be),Ti(),Be=new Map,rt=!0,setTimeout(je?()=>Qt():()=>Wt(),400);return}let ye=ce[ee-1],Ve=ce[ee],ke=Je(ye.x,ye.y).clone(),st=Je(Ve.x,Ve.y).clone(),It=st.x-ke.x,Zt=st.z-ke.z;It*It+Zt*Zt>1e-6&&(be.rotation.y=Math.atan2(It,Zt));let fn=performance.now(),kn=0;function hn(Vt){kn++,kn%2===0&&Kt();let qt=Math.min(1,(Vt-fn)/Ts),lt=(an=>an*an*(3-2*an))(qt);if(be.position.lerpVectors(ke,st,lt),Te(be,lt),g){let an=a.position.distanceTo(h),Cn=an<.1?o:an;m.copy(a.position).sub(h).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),h.lerp(be.position,l),a.position.copy(h).add(m.clone().multiplyScalar(Cn)),a.lookAt(h)}qt<1?requestAnimationFrame(hn):(ee++,oe())}requestAnimationFrame(hn)};if(cn)return;let O=ue.find(ye=>ye.id===Oe);if(!O||O.player!==Ct)return;let N=P*e.w+D;if(!Be.has(N)||Be.get(N)===0||ue.some(ye=>ye.id!==O.id&&ye.x===D&&ye.y===P&&ye.hp>0)||ct||rt)return;let ce=ws(e,O.x,O.y,D,P,ue,O);if(!ce||ce.length<=1)return;Oe=null,xn(),ct=!0,g=!0,Ti(O.id);let be=Ke.get(O.id),ee=1;oe()}}function Mh(f){T.x=f.clientX,T.y=f.clientY,R=f.isTouch===!0,b=f.ctrlKey,v=Ra(f.clientX,f.clientY),t.style.cursor=(f.ctrlKey,"grabbing")}function al(f){return f.touches&&f.touches.length>0?{clientX:f.touches[0].clientX,clientY:f.touches[0].clientY}:f.changedTouches&&f.changedTouches.length>0?{clientX:f.changedTouches[0].clientX,clientY:f.changedTouches[0].clientY}:{clientX:f.clientX,clientY:f.clientY}}function bh(f){if(!f||f.length<2)return 0;let d=f[0],_=f[1];return Math.hypot(_.clientX-d.clientX,_.clientY-d.clientY)}function Mf(f){if(f.touches.length===2){z=bh(f.touches),v=null;return}if(f.touches.length!==1)return;z=null;let d=al(f);Mh({clientX:d.clientX,clientY:d.clientY,ctrlKey:!1,isTouch:!0})}function bf(f){if(f.touches.length===2){f.preventDefault();let _=bh(f.touches);if(z!=null&&z>0){let S=_-z,D=a.position.distanceTo(h),P=Math.max(Y,Math.min(ae,D-S*F));x.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(x.multiplyScalar(P)),a.lookAt(h),gi=performance.now()}z=_;return}if(z=null,f.touches.length!==1)return;f.preventDefault();let d=al(f);Sh({clientX:d.clientX,clientY:d.clientY,ctrlKey:!1})}function Sf(f){if(f.touches.length<2&&(z=null),f.touches.length===2||f.changedTouches.length===0)return;R=!1;let d=al(f);ol({clientX:d.clientX,clientY:d.clientY,ctrlKey:!1})}function Sh(f){if(mi){qd(f.clientX,f.clientY);return}if(v==null)return;let d=f.clientX-T.x,_=f.clientY-T.y;if(!M&&!y&&(Math.abs(d)>A||Math.abs(_)>A)&&(f.ctrlKey||b?(y=!0,g=!1):(M=!0,g=!1)),y){q.copy(a.position).sub(h);let S=q.length();if(S<.001)return;let D=Math.atan2(q.x,q.z),P=Math.asin(Math.max(-1,Math.min(1,q.y/S)));D-=d*U,P+=_*U,P=Math.max(I,Math.min(L,P)),q.x=S*Math.cos(P)*Math.sin(D),q.y=S*Math.sin(P),q.z=S*Math.cos(P)*Math.cos(D),a.position.copy(h).add(q),a.lookAt(h),T.x=f.clientX,T.y=f.clientY,gi=performance.now()}else if(M){let S=Ra(f.clientX,f.clientY);p.setFromNormalAndCoplanarPoint(new B(0,1,0),new B(0,h.y,0)),os.setFromCamera(new He(v.x,v.y),a),os.ray.intersectPlane(p,u);let D=u.clone();os.setFromCamera(new He(S.x,S.y),a),os.ray.intersectPlane(p,u);let P=D.sub(u);R&&P.multiplyScalar(W),h.add(P),a.position.add(P),a.lookAt(h),v={x:S.x,y:S.y},gi=performance.now()}}function ol(f){if(v!=null&&!M&&!y){let d=Ra(f.clientX,f.clientY);vf(d.x,d.y)}v=null,M=!1,y=!1,b=!1,t.style.cursor="grab"}function Ef(f){f.preventDefault();let d=a.position.distanceTo(h),_=Math.max(Y,Math.min(ae,d+f.deltaY*Me));x.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(x.multiplyScalar(_)),a.lookAt(h),gi=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",Mh),t.addEventListener("mousemove",Sh),t.addEventListener("mouseup",ol),t.addEventListener("mouseleave",ol),t.addEventListener("touchstart",Mf,{passive:!0}),t.addEventListener("touchmove",bf,{passive:!1}),t.addEventListener("touchend",Sf,{passive:!0}),t.addEventListener("wheel",Ef,{passive:!1});function Eh(){let f=t.clientWidth,d=t.clientHeight;a.aspect=f/d,a.updateProjectionMatrix(),Bn.setSize(f,d),Bn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",Eh);let Bn=new oa({antialias:!1});Bn.setSize(t.clientWidth,t.clientHeight),Bn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Bn.shadowMap.enabled=!0,Bn.shadowMap.type=kc,t.appendChild(Bn.domElement),Eh();let Ca=document.createElement("div");Ca.id="combat-text-layer",t.appendChild(Ca);let Oi=new B,cs=new B,Tf=1400;function Un(f,d,_,S,D){let P=document.createElement("div");P.className="combat-text-float "+(S?"miss":"damage")+(D?" "+D:""),P.textContent=_,P.style.position="absolute",Ca.appendChild(P);let H=D==="skill-name"?1.7:1.2,O=performance.now();function N(){Oi.copy(Je(f,d)),Oi.y+=H,Oi.project(a);let be=t.clientWidth,ee=t.clientHeight;P.style.left=(Oi.x*.5+.5)*be+"px",P.style.top=(1-(Oi.y*.5+.5))*ee+"px"}let X=0;function ce(){X%2===0&&N(),X++,performance.now()-O<Tf?requestAnimationFrame(ce):P.remove()}requestAnimationFrame(ce)}let wf=1500;function Af(f,d){let _=document.createElement("div");_.className="combat-text-float "+(d||"levelup"),_.textContent="LEVEL UP!",_.style.position="absolute",Ca.appendChild(_);let S=performance.now(),D=0;function P(){Oi.copy(Je(f.x,f.y)),Oi.y+=1.2,Oi.project(a);let O=t.clientWidth,N=t.clientHeight;_.style.left=(Oi.x*.5+.5)*O+"px",_.style.top=(1-(Oi.y*.5+.5))*N+"px"}function H(){D%2===0&&P(),D++,performance.now()-S<wf?requestAnimationFrame(H):_.remove()}requestAnimationFrame(H)}function Tn(f,d){h_(d?.class,f.class),console.log("[DEATH]",`${f.name} (${f.class}, P${f.player})`,`at (${f.x},${f.y})`,`Lv.${f.level}`),Un(f.x,f.y,"DEAD",!1);let _=Ke.get(f.id);if(!_){Ti(),Th();return}let S=performance.now();function D(P){Kt();let H=P-S,O=Math.min(1,H/At),N=O*O;_.rotation.x=N*Math.PI*.5,O<1?requestAnimationFrame(D):(n.remove(_),Ke.delete(f.id),Ti(),Th())}requestAnimationFrame(D)}function Th(){if(Pt!=="playing")return;let f=ue.some(_=>_.player===1&&_.hp>0),d=ue.some(_=>_.player===2&&_.hp>0);f?d||ll(1):ll(2)}function Rf(){let f=yh(),d=new Set(f.map(H=>H.gy*e.w+H.gx)),_=ue.filter(H=>H.hp>0&&H.player===1&&d.has(H.y*e.w+H.x)).length,S=ue.filter(H=>H.hp>0&&H.player===2&&d.has(H.y*e.w+H.x)).length,D=null,P="";if(_>S)D=1,P=`Time's up! ${Sn(1)} wins! (${_} vs ${S} units on center base)`;else if(S>_)D=2,P=`Time's up! ${Sn(2)} wins! (${S} vs ${_} units on center base)`;else{let H=ue.filter(N=>N.hp>0&&N.player===1).reduce((N,X)=>N+X.hp,0),O=ue.filter(N=>N.hp>0&&N.player===2).reduce((N,X)=>N+X.hp,0);H>O?(D=1,P=`Time's up! Draw on center \u2014 ${Sn(1)} wins on total HP (${H} vs ${O})`):O>H?(D=2,P=`Time's up! Draw on center \u2014 ${Sn(2)} wins on total HP (${O} vs ${H})`):P=`Draw! (equal units on center: ${_}, equal HP)`}ll(D,P)}function ll(f,d){qo(),u_(ue,f),Pt="gameover",document.getElementById("turn-menu").style.display="none",dt(),xn();let _=document.getElementById("game-over-overlay"),S=document.getElementById("game-over-title"),D=document.getElementById("game-over-cards"),P=document.getElementById("game-over-class-record");P&&(P.style.display="none",P.innerHTML=""),S.textContent=d??`${Sn(f)} wins!`;let H=ue.filter(O=>O.player===(f??1));if(D.innerHTML=H.map(O=>{let N=O,X=O.level>=3?" level-3":O.level>=2?" level-2":"",ce=N.maxHp>0&&N.hp/N.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${X}${ce}">
          <img class="game-over-card-image" src="${ga[O.class]||""}" alt="${N.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${N.name}</div>
            <div class="game-over-card-meta">Lv.${N.level} ${N.class} \u2014 HP ${N.hp}/${N.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${N.hp}/${N.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${N.mp}/${N.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${xe(N,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${xe(N,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${xe(N,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${xe(N,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${xe(N,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${xe(N,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${N.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),_.classList.add("visible"),it==="cvcpu"){if(Rs++,P&&As&&Rs>=$s){let O=is.map(N=>{let X=Hi[N],ce=X.wins+X.losses||1,be=X.wins+X.losses>0?(X.wins/ce*100).toFixed(1)+"%":"\u2014",ee=X.wins+X.losses>0?(X.losses/ce*100).toFixed(1)+"%":"\u2014";return{class:N,battles:X.battles,kills:X.kills,deaths:X.deaths,wins:X.wins,losses:X.losses,winRate:be,lossRate:ee}});P.innerHTML=`
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
              ${O.map(N=>`
                <tr>
                  <td class="class-name">${N.class}</td>
                  <td>${N.battles}</td>
                  <td>${N.kills}</td>
                  <td>${N.deaths}</td>
                  <td>${N.wins}</td>
                  <td>${N.losses}</td>
                  <td>${N.winRate}</td>
                  <td>${N.lossRate}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `,P.style.display="block"}Rs<$s&&setTimeout(()=>{_.classList.remove("visible"),C(),Ma()},2e3)}}function nr(f=0){requestAnimationFrame(nr),gi===0&&(gi=f);let d=f-gi>500;nr.frameCount=(typeof nr.frameCount=="number"?nr.frameCount:0)+1;let _=()=>{if(Ei){let S=.6+.4*Math.sin(f*.004);for(let D=0;D<ni.length;D++){let P=D%2===0?.4:.7;ni[D].opacity=P*S}Bn.render(n,a),Ei=!1}};d?f-Dn>=100&&(Dn=f,Ei=!0,_()):(nr.frameCount%2===0&&(Ei=!0),_())}nr()}g_();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
