var Yc="160";var zf=0,Bh=1,Vf=2;var _d=1,$c=2,Qi=3,Ms=0,oi=1,Sn=2;var xs=0,Cr=1,kh=2,Hh=3,zh=4,Gf=5,Vs=100,Wf=101,Xf=102,Vh=103,Gh=104,qf=200,Yf=201,$f=202,Kf=203,nc=204,ic=205,Zf=206,Jf=207,jf=208,Qf=209,ep=210,tp=211,np=212,ip=213,sp=214,rp=0,ap=1,op=2,co=3,lp=4,cp=5,hp=6,up=7,vd=0,dp=1,fp=2,_s=0,pp=1,mp=2,gp=3,yp=4,xp=5,_p=6;var Md=300,Lr=301,Dr=302,sc=303,rc=304,Wo=306,oa=1e3,Li=1001,ac=1002,ii=1003,Wh=1004;var vl=1005;var Mi=1006,vp=1007;var la=1008;var vs=1009,Mp=1010,bp=1011,Kc=1012,bd=1013,gs=1014,ys=1015,ca=1016,Sd=1017,Ed=1018,Ws=1020,Sp=1021,Di=1023,Ep=1024,Tp=1025,Xs=1026,Ur=1027,wp=1028,Td=1029,Ap=1030,wd=1031,Ad=1033,Ml=33776,bl=33777,Sl=33778,El=33779,Xh=35840,qh=35841,Yh=35842,$h=35843,Rd=36196,Kh=37492,Zh=37496,Jh=37808,jh=37809,Qh=37810,eu=37811,tu=37812,nu=37813,iu=37814,su=37815,ru=37816,au=37817,ou=37818,lu=37819,cu=37820,hu=37821,Tl=36492,uu=36494,du=36495,Rp=36283,fu=36284,pu=36285,mu=36286;var ho=2300,uo=2301,wl=2302,gu=2400,yu=2401,xu=2402;var Cd=3e3,qs=3001,Cp=3200,Pp=3201,Pd=0,Ip=1,bi="",$n="srgb",ts="srgb-linear",Zc="display-p3",Xo="display-p3-linear",fo="linear",mn="srgb",po="rec709",mo="p3";var cr=7680;var _u=519,Lp=512,Dp=513,Up=514,Id=515,Np=516,Op=517,Fp=518,Bp=519,vu=35044;var Mu="300 es",oc=1035,es=2e3,go=2001,bs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Al=Math.PI/180,lc=180/Math.PI;function Hr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zn[i&255]+Zn[i>>8&255]+Zn[i>>16&255]+Zn[i>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[t&63|128]+Zn[t>>8&255]+"-"+Zn[t>>16&255]+Zn[t>>24&255]+Zn[n&255]+Zn[n>>8&255]+Zn[n>>16&255]+Zn[n>>24&255]).toLowerCase()}function jn(i,e,t){return Math.max(e,Math.min(t,i))}function kp(i,e){return(i%e+e)%e}function Rl(i,e,t){return(1-t)*i+t*e}function bu(i){return(i&i-1)===0&&i!==0}function cc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],p=n[2],f=n[5],x=n[8],M=s[0],y=s[3],g=s[6],S=s[1],v=s[4],A=s[7],N=s[2],I=s[5],L=s[8];return r[0]=a*M+o*S+l*N,r[3]=a*y+o*v+l*I,r[6]=a*g+o*A+l*L,r[1]=c*M+h*S+m*N,r[4]=c*y+h*v+m*I,r[7]=c*g+h*A+m*L,r[2]=p*M+f*S+x*N,r[5]=p*y+f*v+x*I,r[8]=p*g+f*A+x*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],m=h*a-o*c,p=o*l-h*r,f=c*r-a*l,x=t*m+n*p+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=m*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=p*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new Ot;function Ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hp(){let i=yo("canvas");return i.style.display="block",i}var Su={};function na(i){i in Su||(Su[i]=!0,console.warn(i))}var Eu=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tu=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oa={[ts]:{transfer:fo,primaries:po,toReference:i=>i,fromReference:i=>i},[$n]:{transfer:mn,primaries:po,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xo]:{transfer:fo,primaries:mo,toReference:i=>i.applyMatrix3(Tu),fromReference:i=>i.applyMatrix3(Eu)},[Zc]:{transfer:mn,primaries:mo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Tu),fromReference:i=>i.applyMatrix3(Eu).convertLinearToSRGB()}},zp=new Set([ts,Xo]),an={enabled:!0,_workingColorSpace:ts,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!zp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Oa[e].toReference,s=Oa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Oa[i].primaries},getTransfer:function(i){return i===bi?fo:Oa[i].transfer}};function Pr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hr,xo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hr===void 0&&(hr=yo("canvas")),hr.width=e.width,hr.height=e.height;let n=hr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pr(t[n]/255)*255):t[n]=Pr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vp=0,_o=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Hr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Il(s[a].image)):r.push(Il(s[a]))}else r=Il(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gp=0,Si=class i extends bs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Li,s=Li,r=Mi,a=la,o=Di,l=vs,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Hr(),this.name="",this.source=new _o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qs?$n:bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oa:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oa:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$n?qs:Cd}set encoding(e){na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qs?$n:bi}};Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=Md;Si.DEFAULT_ANISOTROPY=1;var Wn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],m=l[8],p=l[1],f=l[5],x=l[9],M=l[2],y=l[6],g=l[10];if(Math.abs(h-p)<.01&&Math.abs(m-M)<.01&&Math.abs(x-y)<.01){if(Math.abs(h+p)<.1&&Math.abs(m+M)<.1&&Math.abs(x+y)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,A=(f+1)/2,N=(g+1)/2,I=(h+p)/4,L=(m+M)/4,Y=(x+y)/4;return v>A&&v>N?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=I/n,r=L/n):A>N?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=I/s,r=Y/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=L/r,s=Y/r),this.set(n,s,r,t),this}let S=Math.sqrt((y-x)*(y-x)+(m-M)*(m-M)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(y-x)/S,this.y=(m-M)/S,this.z=(p-h)/S,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hc=class extends bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wn(0,0,e,t),this.scissorTest=!1,this.viewport=new Wn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qs?$n:bi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Si(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new _o(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ns=class extends hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vo=class extends Si{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uc=class extends Si{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ss=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],p=r[a+0],f=r[a+1],x=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=m;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=x,e[t+3]=M;return}if(m!==M||l!==p||c!==f||h!==x){let y=1-o,g=l*p+c*f+h*x+m*M,S=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let N=Math.sqrt(v),I=Math.atan2(N,g*S);y=Math.sin(y*I)/N,o=Math.sin(o*I)/N}let A=o*S;if(l=l*y+p*A,c=c*y+f*A,h=h*y+x*A,m=m*y+M*A,y===1-o){let N=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=N,c*=N,h*=N,m*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],p=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+h*m+l*f-c*p,e[t+1]=l*x+h*p+c*m-o*f,e[t+2]=c*x+h*f+o*p-l*m,e[t+3]=h*x-o*m-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),p=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=p*h*m+c*f*x,this._y=c*f*m-p*h*x,this._z=c*h*x+p*f*m,this._w=c*h*m-p*f*x;break;case"YXZ":this._x=p*h*m+c*f*x,this._y=c*f*m-p*h*x,this._z=c*h*x-p*f*m,this._w=c*h*m+p*f*x;break;case"ZXY":this._x=p*h*m-c*f*x,this._y=c*f*m+p*h*x,this._z=c*h*x+p*f*m,this._w=c*h*m-p*f*x;break;case"ZYX":this._x=p*h*m-c*f*x,this._y=c*f*m+p*h*x,this._z=c*h*x-p*f*m,this._w=c*h*m+p*f*x;break;case"YZX":this._x=p*h*m+c*f*x,this._y=c*f*m+p*h*x,this._z=c*h*x-p*f*m,this._w=c*h*m-p*f*x;break;case"XZY":this._x=p*h*m-c*f*x,this._y=c*f*m-p*h*x,this._z=c*h*x+p*f*m,this._w=c*h*m+p*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],m=t[10],p=n+o+m;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>m){let f=2*Math.sqrt(1+n-o-m);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>m){let f=2*Math.sqrt(1+o-n-m);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+m-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),m=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*m+this._w*p,this._x=n*m+this._x*p,this._y=s*m+this._y*p,this._z=r*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(jn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ll=new k,wu=new Ss,Ys=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(r,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fa.copy(n.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Ba.subVectors(this.max,jr),ur.subVectors(e.a,jr),dr.subVectors(e.b,jr),fr.subVectors(e.c,jr),us.subVectors(dr,ur),ds.subVectors(fr,dr),Fs.subVectors(ur,fr);let t=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Fs.z,Fs.y,us.z,0,-us.x,ds.z,0,-ds.x,Fs.z,0,-Fs.x,-us.y,us.x,0,-ds.y,ds.x,0,-Fs.y,Fs.x,0];return!Dl(t,ur,dr,fr,Ba)||(t=[1,0,0,0,1,0,0,0,1],!Dl(t,ur,dr,fr,Ba))?!1:(ka.crossVectors(us,ds),t=[ka.x,ka.y,ka.z],Dl(t,ur,dr,fr,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$i=[new k,new k,new k,new k,new k,new k,new k,new k],Ri=new k,Fa=new Ys,ur=new k,dr=new k,fr=new k,us=new k,ds=new k,Fs=new k,jr=new k,Ba=new k,ka=new k,Bs=new k;function Dl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bs.fromArray(i,r);let o=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=e.dot(Bs),c=t.dot(Bs),h=n.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wp=new Ys,Qr=new k,Ul=new k,Nr=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(Ul)),this.expandByPoint(Qr.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ki=new k,Nl=new k,Ha=new k,fs=new k,Ol=new k,za=new k,Fl=new k,ha=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nl.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(Nl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ha),o=fs.dot(this.direction),l=-fs.dot(Ha),c=fs.lengthSq(),h=Math.abs(1-a*a),m,p,f,x;if(h>0)if(m=a*l-o,p=a*o-l,x=r*h,m>=0)if(p>=-x)if(p<=x){let M=1/h;m*=M,p*=M,f=m*(m+a*p+2*o)+p*(a*m+p+2*l)+c}else p=r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;else p=-r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;else p<=-x?(m=Math.max(0,-(-a*r+o)),p=m>0?-r:Math.min(Math.max(-r,-l),r),f=-m*m+p*(p+2*l)+c):p<=x?(m=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(m=Math.max(0,-(a*r+o)),p=m>0?r:Math.min(Math.max(-r,-l),r),f=-m*m+p*(p+2*l)+c);else p=a>0?-r:r,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Nl).addScaledVector(Ha,p),f}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);let n=Ki.dot(this.direction),s=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-p.z)*m,l=(e.max.z-p.z)*m):(o=(e.max.z-p.z)*m,l=(e.min.z-p.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,s,r){Ol.subVectors(t,e),za.subVectors(n,e),Fl.crossVectors(Ol,za);let a=this.direction.dot(Fl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fs.subVectors(this.origin,e);let l=o*this.direction.dot(za.crossVectors(fs,za));if(l<0)return null;let c=o*this.direction.dot(Ol.cross(fs));if(c<0||l+c>a)return null;let h=-o*fs.dot(Fl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class i{constructor(e,t,n,s,r,a,o,l,c,h,m,p,f,x,M,y){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,m,p,f,x,M,y)}set(e,t,n,s,r,a,o,l,c,h,m,p,f,x,M,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=m,g[14]=p,g[3]=f,g[7]=x,g[11]=M,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),a=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let p=a*h,f=a*m,x=o*h,M=o*m;t[0]=l*h,t[4]=-l*m,t[8]=c,t[1]=f+x*c,t[5]=p-M*c,t[9]=-o*l,t[2]=M-p*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,f=l*m,x=c*h,M=c*m;t[0]=p+M*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*m,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=M+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,f=l*m,x=c*h,M=c*m;t[0]=p-M*o,t[4]=-a*m,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=M-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,f=a*m,x=o*h,M=o*m;t[0]=l*h,t[4]=x*c-f,t[8]=p*c+M,t[1]=l*m,t[5]=M*c+p,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,f=a*c,x=o*l,M=o*c;t[0]=l*h,t[4]=M-p*m,t[8]=x*m+f,t[1]=m,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*m+x,t[10]=p-M*m}else if(e.order==="XZY"){let p=a*l,f=a*c,x=o*l,M=o*c;t[0]=l*h,t[4]=-m,t[8]=c*h,t[1]=p*m+M,t[5]=a*h,t[9]=f*m-x,t[2]=x*m-f,t[6]=o*h,t[10]=M*m+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xp,e,qp)}lookAt(e,t,n){let s=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),ps.crossVectors(n,pi),ps.lengthSq()===0&&(Math.abs(n.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),ps.crossVectors(n,pi)),ps.normalize(),Va.crossVectors(pi,ps),s[0]=ps.x,s[4]=Va.x,s[8]=pi.x,s[1]=ps.y,s[5]=Va.y,s[9]=pi.y,s[2]=ps.z,s[6]=Va.z,s[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],p=n[9],f=n[13],x=n[2],M=n[6],y=n[10],g=n[14],S=n[3],v=n[7],A=n[11],N=n[15],I=s[0],L=s[4],Y=s[8],T=s[12],R=s[1],$=s[5],ae=s[9],ve=s[13],F=s[2],q=s[6],z=s[10],V=s[14],K=s[3],se=s[7],re=s[11],he=s[15];return r[0]=a*I+o*R+l*F+c*K,r[4]=a*L+o*$+l*q+c*se,r[8]=a*Y+o*ae+l*z+c*re,r[12]=a*T+o*ve+l*V+c*he,r[1]=h*I+m*R+p*F+f*K,r[5]=h*L+m*$+p*q+f*se,r[9]=h*Y+m*ae+p*z+f*re,r[13]=h*T+m*ve+p*V+f*he,r[2]=x*I+M*R+y*F+g*K,r[6]=x*L+M*$+y*q+g*se,r[10]=x*Y+M*ae+y*z+g*re,r[14]=x*T+M*ve+y*V+g*he,r[3]=S*I+v*R+A*F+N*K,r[7]=S*L+v*$+A*q+N*se,r[11]=S*Y+v*ae+A*z+N*re,r[15]=S*T+v*ve+A*V+N*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],m=e[6],p=e[10],f=e[14],x=e[3],M=e[7],y=e[11],g=e[15];return x*(+r*l*m-s*c*m-r*o*p+n*c*p+s*o*f-n*l*f)+M*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*h-r*l*h)+y*(+t*c*m-t*o*f-r*a*m+n*a*f+r*o*h-n*c*h)+g*(-s*o*h-t*l*m+t*o*p+s*a*m-n*a*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],m=e[9],p=e[10],f=e[11],x=e[12],M=e[13],y=e[14],g=e[15],S=m*y*c-M*p*c+M*l*f-o*y*f-m*l*g+o*p*g,v=x*p*c-h*y*c-x*l*f+a*y*f+h*l*g-a*p*g,A=h*M*c-x*m*c+x*o*f-a*M*f-h*o*g+a*m*g,N=x*m*l-h*M*l-x*o*p+a*M*p+h*o*y-a*m*y,I=t*S+n*v+s*A+r*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=S*L,e[1]=(M*p*r-m*y*r-M*s*f+n*y*f+m*s*g-n*p*g)*L,e[2]=(o*y*r-M*l*r+M*s*c-n*y*c-o*s*g+n*l*g)*L,e[3]=(m*l*r-o*p*r-m*s*c+n*p*c+o*s*f-n*l*f)*L,e[4]=v*L,e[5]=(h*y*r-x*p*r+x*s*f-t*y*f-h*s*g+t*p*g)*L,e[6]=(x*l*r-a*y*r-x*s*c+t*y*c+a*s*g-t*l*g)*L,e[7]=(a*p*r-h*l*r+h*s*c-t*p*c-a*s*f+t*l*f)*L,e[8]=A*L,e[9]=(x*m*r-h*M*r-x*n*f+t*M*f+h*n*g-t*m*g)*L,e[10]=(a*M*r-x*o*r+x*n*c-t*M*c-a*n*g+t*o*g)*L,e[11]=(h*o*r-a*m*r-h*n*c+t*m*c+a*n*f-t*o*f)*L,e[12]=N*L,e[13]=(h*M*s-x*m*s+x*n*p-t*M*p-h*n*y+t*m*y)*L,e[14]=(x*o*s-a*M*s-x*n*l+t*M*l+a*n*y-t*o*y)*L,e[15]=(a*m*s-h*o*s+h*n*l-t*m*l-a*n*p+t*o*p)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,m=o+o,p=r*c,f=r*h,x=r*m,M=a*h,y=a*m,g=o*m,S=l*c,v=l*h,A=l*m,N=n.x,I=n.y,L=n.z;return s[0]=(1-(M+g))*N,s[1]=(f+A)*N,s[2]=(x-v)*N,s[3]=0,s[4]=(f-A)*I,s[5]=(1-(p+g))*I,s[6]=(y+S)*I,s[7]=0,s[8]=(x+v)*L,s[9]=(y-S)*L,s[10]=(1-(p+M))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=pr.set(s[0],s[1],s[2]).length(),a=pr.set(s[4],s[5],s[6]).length(),o=pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ci.copy(this);let c=1/r,h=1/a,m=1/o;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=m,Ci.elements[9]*=m,Ci.elements[10]*=m,t.setFromRotationMatrix(Ci),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=es){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),m=(t+e)/(t-e),p=(n+s)/(n-s),f,x;if(o===es)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===go)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=es){let l=this.elements,c=1/(t-e),h=1/(n-s),m=1/(a-r),p=(t+e)*c,f=(n+s)*h,x,M;if(o===es)x=(a+r)*m,M=-2*m;else if(o===go)x=r*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},pr=new k,Ci=new Un,Xp=new k(0,0,0),qp=new k(1,1,1),ps=new k,Va=new k,pi=new k,Au=new Un,Ru=new Ss,Mo=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(jn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(jn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mo.DEFAULT_ORDER="XYZ";var ua=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yp=0,Cu=new k,mr=new Ss,Zi=new Un,Ga=new k,ea=new k,$p=new k,Kp=new Ss,Pu=new k(1,0,0),Iu=new k(0,1,0),Lu=new k(0,0,1),Zp={type:"added"},Jp={type:"removed"},ri=class i extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Mo,n=new Ss,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Un},normalMatrix:{value:new Ot}}),this.matrix=new Un,this.matrixWorld=new Un,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,t){return Cu.copy(e).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(ea,Ga,this.up):Zi.lookAt(Ga,ea,this.up),this.quaternion.setFromRotationMatrix(Zi),s&&(Zi.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Zi),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,$p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),m=a(e.shapes),p=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ri.DEFAULT_UP=new k(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pi=new k,Ji=new k,Bl=new k,ji=new k,gr=new k,yr=new k,Du=new k,kl=new k,Hl=new k,zl=new k,Wa=!1,Tr=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pi.subVectors(e,t),s.cross(Pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pi.subVectors(s,t),Ji.subVectors(n,t),Bl.subVectors(e,t);let a=Pi.dot(Pi),o=Pi.dot(Ji),l=Pi.dot(Bl),c=Ji.dot(Ji),h=Ji.dot(Bl),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let p=1/m,f=(c*l-o*h)*p,x=(a*h-o*l)*p;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getUV(e,t,n,s,r,a,o,l){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(a,ji.y),l.addScaledVector(o,ji.z),l)}static isFrontFacing(e,t,n,s){return Pi.subVectors(n,t),Ji.subVectors(e,t),Pi.cross(Ji).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Pi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,n),yr.subVectors(r,n),kl.subVectors(e,n);let l=gr.dot(kl),c=yr.dot(kl);if(l<=0&&c<=0)return t.copy(n);Hl.subVectors(e,s);let h=gr.dot(Hl),m=yr.dot(Hl);if(h>=0&&m<=h)return t.copy(s);let p=l*m-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(gr,a);zl.subVectors(e,r);let f=gr.dot(zl),x=yr.dot(zl);if(x>=0&&f<=x)return t.copy(r);let M=f*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(yr,o);let y=h*x-f*m;if(y<=0&&m-h>=0&&f-x>=0)return Du.subVectors(r,s),o=(m-h)/(m-h+(f-x)),t.copy(s).addScaledVector(Du,o);let g=1/(y+M+p);return a=M*g,o=p*g,t.copy(n).addScaledVector(gr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Vl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=an.workingColorSpace){return this.r=e,this.g=t,this.b=n,an.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=an.workingColorSpace){if(e=kp(e,1),t=jn(t,0,1),n=jn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vl(a,r,e+1/3),this.g=Vl(a,r,e),this.b=Vl(a,r,e-1/3)}return an.toWorkingColorSpace(this,s),this}setStyle(e,t=$n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){let n=Dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Pl(e.r),this.g=Pl(e.g),this.b=Pl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return an.fromWorkingColorSpace(Jn.copy(this),e),Math.round(jn(Jn.r*255,0,255))*65536+Math.round(jn(Jn.g*255,0,255))*256+Math.round(jn(Jn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=an.workingColorSpace){an.fromWorkingColorSpace(Jn.copy(this),t);let n=Jn.r,s=Jn.g,r=Jn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=an.workingColorSpace){return an.fromWorkingColorSpace(Jn.copy(this),t),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=$n){an.fromWorkingColorSpace(Jn.copy(this),e);let t=Jn.r,n=Jn.g,s=Jn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(Xa);let n=Rl(ms.h,Xa.h,t),s=Rl(ms.s,Xa.s,t),r=Rl(ms.l,Xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jn=new xt;xt.NAMES=Dd;var jp=0,Es=class extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=Cr,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==Ms&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nc&&(n.blendSrc=this.blendSrc),this.blendDst!==ic&&(n.blendDst=this.blendDst),this.blendEquation!==Vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_u&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wn=class extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dn=new k,qa=new Ge,li=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ys,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ai(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),n=ai(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),n=ai(n,this.array),s=ai(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),n=ai(n,this.array),s=ai(s,this.array),r=ai(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vu&&(e.usage=this.usage),e}};var bo=class extends li{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var So=class extends li{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tn=class extends li{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Qp=0,vi=new Un,Gl=new ri,xr=new k,mi=new Ys,ta=new Ys,Gn=new k,ci=class i extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?So:bo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,n){return vi.makeTranslation(e,t,n),this.applyMatrix4(vi),this}scale(e,t,n){return vi.makeScale(e,t,n),this.applyMatrix4(vi),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Gn.addVectors(mi.min,ta.min),mi.expandByPoint(Gn),Gn.addVectors(mi.max,ta.max),mi.expandByPoint(Gn)):(mi.expandByPoint(ta.min),mi.expandByPoint(ta.max))}mi.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Gn.fromBufferAttribute(o,c),l&&(xr.fromBufferAttribute(e,c),Gn.add(xr)),s=Math.max(s,n.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new k,h[R]=new k;let m=new k,p=new k,f=new k,x=new Ge,M=new Ge,y=new Ge,g=new k,S=new k;function v(R,$,ae){m.fromArray(s,R*3),p.fromArray(s,$*3),f.fromArray(s,ae*3),x.fromArray(a,R*2),M.fromArray(a,$*2),y.fromArray(a,ae*2),p.sub(m),f.sub(m),M.sub(x),y.sub(x);let ve=1/(M.x*y.y-y.x*M.y);isFinite(ve)&&(g.copy(p).multiplyScalar(y.y).addScaledVector(f,-M.y).multiplyScalar(ve),S.copy(f).multiplyScalar(M.x).addScaledVector(p,-y.x).multiplyScalar(ve),c[R].add(g),c[$].add(g),c[ae].add(g),h[R].add(S),h[$].add(S),h[ae].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let R=0,$=A.length;R<$;++R){let ae=A[R],ve=ae.start,F=ae.count;for(let q=ve,z=ve+F;q<z;q+=3)v(n[q+0],n[q+1],n[q+2])}let N=new k,I=new k,L=new k,Y=new k;function T(R){L.fromArray(r,R*3),Y.copy(L);let $=c[R];N.copy($),N.sub(L.multiplyScalar(L.dot($))).normalize(),I.crossVectors(Y,$);let ve=I.dot(h[R])<0?-1:1;l[R*4]=N.x,l[R*4+1]=N.y,l[R*4+2]=N.z,l[R*4+3]=ve}for(let R=0,$=A.length;R<$;++R){let ae=A[R],ve=ae.start,F=ae.count;for(let q=ve,z=ve+F;q<z;q+=3)T(n[q+0]),T(n[q+1]),T(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new li(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,m=new k;if(e)for(let p=0,f=e.count;p<f;p+=3){let x=e.getX(p+0),M=e.getX(p+1),y=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,y),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,y),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gn.fromBufferAttribute(e,t),Gn.normalize(),e.setXYZ(t,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,m=o.normalized,p=new c.constructor(l.length*h),f=0,x=0;for(let M=0,y=l.length;M<y;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let g=0;g<h;g++)p[x++]=c[f++]}return new li(p,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let p=c[h],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,p=c.length;m<p;m++){let f=c[m];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],m=r[c];for(let p=0,f=m.length;p<f;p++)h.push(m[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uu=new Un,ks=new ha,Ya=new Nr,Nu=new k,_r=new k,vr=new k,Mr=new k,Wl=new k,$a=new k,Ka=new Ge,Za=new Ge,Ja=new Ge,Ou=new k,Fu=new k,Bu=new k,ja=new k,Qa=new k,Ze=class extends ri{constructor(e=new ci,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(Wl.fromBufferAttribute(m,e),a?$a.addScaledVector(Wl,h):$a.addScaledVector(Wl.sub(t),h))}t.add($a)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(Ya.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Ya,Nu)===null||ks.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Uu.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Uu),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=p.length;x<M;x++){let y=p[x],g=a[y.materialIndex],S=Math.max(y.start,f.start),v=Math.min(o.count,Math.min(y.start+y.count,f.start+f.count));for(let A=S,N=v;A<N;A+=3){let I=o.getX(A),L=o.getX(A+1),Y=o.getX(A+2);s=eo(this,g,e,n,c,h,m,I,L,Y),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let y=x,g=M;y<g;y+=3){let S=o.getX(y),v=o.getX(y+1),A=o.getX(y+2);s=eo(this,a,e,n,c,h,m,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=p.length;x<M;x++){let y=p[x],g=a[y.materialIndex],S=Math.max(y.start,f.start),v=Math.min(l.count,Math.min(y.start+y.count,f.start+f.count));for(let A=S,N=v;A<N;A+=3){let I=A,L=A+1,Y=A+2;s=eo(this,g,e,n,c,h,m,I,L,Y),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let y=x,g=M;y<g;y+=3){let S=y,v=y+1,A=y+2;s=eo(this,a,e,n,c,h,m,S,v,A),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function em(i,e,t,n,s,r,a,o){let l;if(e.side===oi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ms,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:i}}function eo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,_r),i.getVertexPosition(l,vr),i.getVertexPosition(c,Mr);let h=em(i,e,t,n,_r,vr,Mr,ja);if(h){s&&(Ka.fromBufferAttribute(s,o),Za.fromBufferAttribute(s,l),Ja.fromBufferAttribute(s,c),h.uv=Tr.getInterpolation(ja,_r,vr,Mr,Ka,Za,Ja,new Ge)),r&&(Ka.fromBufferAttribute(r,o),Za.fromBufferAttribute(r,l),Ja.fromBufferAttribute(r,c),h.uv1=Tr.getInterpolation(ja,_r,vr,Mr,Ka,Za,Ja,new Ge),h.uv2=h.uv1),a&&(Ou.fromBufferAttribute(a,o),Fu.fromBufferAttribute(a,l),Bu.fromBufferAttribute(a,c),h.normal=Tr.getInterpolation(ja,_r,vr,Mr,Ou,Fu,Bu,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a:o,b:l,c,normal:new k,materialIndex:0};Tr.getNormal(_r,vr,Mr,m.normal),h.face=m}return h}var Fn=class i extends ci{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],p=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(h,3)),this.setAttribute("uv",new Tn(m,2));function x(M,y,g,S,v,A,N,I,L,Y,T){let R=A/L,$=N/Y,ae=A/2,ve=N/2,F=I/2,q=L+1,z=Y+1,V=0,K=0,se=new k;for(let re=0;re<z;re++){let he=re*$-ve;for(let we=0;we<q;we++){let J=we*R-ae;se[M]=J*S,se[y]=he*v,se[g]=F,c.push(se.x,se.y,se.z),se[M]=0,se[y]=0,se[g]=I>0?1:-1,h.push(se.x,se.y,se.z),m.push(we/L),m.push(1-re/Y),V+=1}}for(let re=0;re<Y;re++)for(let he=0;he<L;he++){let we=p+he+q*re,J=p+he+q*(re+1),fe=p+(he+1)+q*(re+1),Te=p+(he+1)+q*re;l.push(we,J,Te),l.push(J,fe,Te),K+=6}o.addGroup(f,K,T),f+=K,p+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Or(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ni(i){let e={};for(let t=0;t<i.length;t++){let n=Or(i[t]);for(let s in n)e[s]=n[s]}return e}function tm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ud(i){return i.getRenderTarget()===null?i.outputColorSpace:an.workingColorSpace}var nm={clone:Or,merge:ni},im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,is=class extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=im,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Eo=class extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Un,this.projectionMatrix=new Un,this.projectionMatrixInverse=new Un,this.coordinateSystem=es}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},si=class extends Eo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lc*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Al*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},br=-90,Sr=1,dc=class extends ri{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new si(br,Sr,e,t);s.layers=this.layers,this.add(s);let r=new si(br,Sr,e,t);r.layers=this.layers,this.add(r);let a=new si(br,Sr,e,t);a.layers=this.layers,this.add(a);let o=new si(br,Sr,e,t);o.layers=this.layers,this.add(o);let l=new si(br,Sr,e,t);l.layers=this.layers,this.add(l);let c=new si(br,Sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===es)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(m,p,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},To=class extends Si{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fc=class extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qs?$n:bi),this.texture=new To(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fn(5,5,5),r=new is({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:xs});r.uniforms.tEquirect.value=t;let a=new Ze(s,r),o=t.minFilter;return t.minFilter===la&&(t.minFilter=Mi),new dc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Xl=new k,rm=new k,am=new Ot,Ii=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Xl.subVectors(n,t).cross(rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||am.getNormalMatrix(e),s=this.coplanarPoint(Xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hs=new Nr,to=new k,da=class{constructor(e=new Ii,t=new Ii,n=new Ii,s=new Ii,r=new Ii,a=new Ii){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=es){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],m=s[6],p=s[7],f=s[8],x=s[9],M=s[10],y=s[11],g=s[12],S=s[13],v=s[14],A=s[15];if(n[0].setComponents(l-r,p-c,y-f,A-g).normalize(),n[1].setComponents(l+r,p+c,y+f,A+g).normalize(),n[2].setComponents(l+a,p+h,y+x,A+S).normalize(),n[3].setComponents(l-a,p-h,y-x,A-S).normalize(),n[4].setComponents(l-o,p-m,y-M,A-v).normalize(),t===es)n[5].setComponents(l+o,p+m,y+M,A+v).normalize();else if(t===go)n[5].setComponents(o,m,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){return Hs.center.set(0,0,0),Hs.radius=.7071067811865476,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(to.x=s.normal.x>0?e.max.x:e.min.x,to.y=s.normal.y>0?e.max.y:e.min.y,to.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function om(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let m=c.array,p=c.usage,f=m.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,m,p),c.onUploadCallback();let M;if(m instanceof Float32Array)M=i.FLOAT;else if(m instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=i.SHORT;else if(m instanceof Uint32Array)M=i.UNSIGNED_INT;else if(m instanceof Int32Array)M=i.INT;else if(m instanceof Int8Array)M=i.BYTE;else if(m instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,m){let p=h.array,f=h._updateRange,x=h.updateRanges;if(i.bindBuffer(m,c),f.count===-1&&x.length===0&&i.bufferSubData(m,0,p),x.length!==0){for(let M=0,y=x.length;M<y;M++){let g=x[M];t?i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count):i.bufferSubData(m,g.start*p.BYTES_PER_ELEMENT,p.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(m,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(m,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let m=n.get(c);if(m===void 0)n.set(c,s(c,h));else if(m.version<c.version){if(m.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,c,h),m.version=c.version}}return{get:a,remove:o,update:l}}var Hi=class i extends ci{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=e/o,p=t/l,f=[],x=[],M=[],y=[];for(let g=0;g<h;g++){let S=g*p-a;for(let v=0;v<c;v++){let A=v*m-r;x.push(A,-S,0),M.push(0,0,1),y.push(v/o),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){let v=S+c*g,A=S+c*(g+1),N=S+1+c*(g+1),I=S+1+c*g;f.push(v,A,I),f.push(A,N,I)}this.setIndex(f),this.setAttribute("position",new Tn(x,3)),this.setAttribute("normal",new Tn(M,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cm=`#ifdef USE_ALPHAHASH
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
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
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
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
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
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mm=`#ifdef USE_IRIDESCENCE
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
#endif`,bm=`#ifdef USE_BUMPMAP
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Im=`#define PI 3.141592653589793
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`
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
}`,Hm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
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
}`,Zm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ag=`PhysicalMaterial material;
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
#endif`,og=`struct PhysicalMaterial {
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
}`,lg=`
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
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
#endif`,Sg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,p0=`#if DEPTH_PACKING == 3200
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
}`,m0=`#define DISTANCE
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
}`,g0=`#define DISTANCE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
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
}`,v0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,S0=`#define LAMBERT
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
}`,E0=`#define LAMBERT
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
}`,T0=`#define MATCAP
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
}`,w0=`#define MATCAP
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
}`,A0=`#define NORMAL
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
}`,R0=`#define NORMAL
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
}`,C0=`#define PHONG
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
}`,P0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,L0=`#define STANDARD
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
}`,D0=`#define TOON
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
}`,U0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,B0=`uniform vec3 color;
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
}`,k0=`uniform float rotation;
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
}`,H0=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:lm,alphahash_pars_fragment:cm,alphamap_fragment:hm,alphamap_pars_fragment:um,alphatest_fragment:dm,alphatest_pars_fragment:fm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:ym,begin_vertex:xm,beginnormal_vertex:_m,bsdfs:vm,iridescence_fragment:Mm,bumpmap_pars_fragment:bm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:wm,color_fragment:Am,color_pars_fragment:Rm,color_pars_vertex:Cm,color_vertex:Pm,common:Im,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Um,displacementmap_vertex:Nm,emissivemap_fragment:Om,emissivemap_pars_fragment:Fm,colorspace_fragment:Bm,colorspace_pars_fragment:km,envmap_fragment:Hm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Vm,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:tg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:$m,gradientmap_pars_fragment:Km,lightmap_fragment:Zm,lightmap_pars_fragment:Jm,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Qm,lights_pars_begin:eg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:sg,lights_phong_pars_fragment:rg,lights_physical_fragment:ag,lights_physical_pars_fragment:og,lights_fragment_begin:lg,lights_fragment_maps:cg,lights_fragment_end:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:yg,map_particle_pars_fragment:xg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:vg,morphcolor_vertex:Mg,morphnormal_vertex:bg,morphtarget_pars_vertex:Sg,morphtarget_vertex:Eg,normal_fragment_begin:Tg,normal_fragment_maps:wg,normal_pars_fragment:Ag,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ug,opaque_fragment:Ng,packing:Og,premultiplied_alpha_fragment:Fg,project_vertex:Bg,dithering_fragment:kg,dithering_pars_fragment:Hg,roughnessmap_fragment:zg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:$g,skinning_vertex:Kg,skinnormal_vertex:Zg,specularmap_fragment:Jg,specularmap_pars_fragment:jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:a0,background_vert:o0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:h0,cube_vert:u0,cube_frag:d0,depth_vert:f0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:y0,equirect_frag:x0,linedashed_vert:_0,linedashed_frag:v0,meshbasic_vert:M0,meshbasic_frag:b0,meshlambert_vert:S0,meshlambert_frag:E0,meshmatcap_vert:T0,meshmatcap_frag:w0,meshnormal_vert:A0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:I0,meshphysical_frag:L0,meshtoon_vert:D0,meshtoon_frag:U0,points_vert:N0,points_frag:O0,shadow_vert:F0,shadow_frag:B0,sprite_vert:k0,sprite_frag:H0},Ie={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ki={basic:{uniforms:ni([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:ni([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:ni([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:ni([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:ni([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:ni([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:ni([Ie.points,Ie.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:ni([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:ni([Ie.common,Ie.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:ni([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:ni([Ie.sprite,Ie.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:ni([Ie.common,Ie.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:ni([Ie.lights,Ie.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};ki.physical={uniforms:ni([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};var no={r:0,b:0,g:0};function z0(i,e,t,n,s,r,a){let o=new xt(0),l=r===!0?0:1,c,h,m=null,p=0,f=null;function x(y,g){let S=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?M(o,l):v&&v.isColor&&(M(v,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Wo)?(h===void 0&&(h=new Ze(new Fn(1,1,1),new is({name:"BackgroundCubeMaterial",uniforms:Or(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=an.getTransfer(v.colorSpace)!==mn,(m!==v||p!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,m=v,p=v.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ze(new Hi(2,2),new is({name:"BackgroundMaterial",uniforms:Or(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=an.getTransfer(v.colorSpace)!==mn,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(m!==v||p!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,m=v,p=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function M(y,g){y.getRGB(no,Ud(i)),n.buffers.color.setClear(no.r,no.g,no.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(y,g=1){o.set(y),l=g,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,M(o,l)},render:x}}function V0(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=y(null),c=l,h=!1;function m(F,q,z,V,K){let se=!1;if(a){let re=M(V,z,q);c!==re&&(c=re,f(c.object)),se=g(F,V,z,K),se&&S(F,V,z,K)}else{let re=q.wireframe===!0;(c.geometry!==V.id||c.program!==z.id||c.wireframe!==re)&&(c.geometry=V.id,c.program=z.id,c.wireframe=re,se=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(se||h)&&(h=!1,Y(F,q,z,V),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function x(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function M(F,q,z){let V=z.wireframe===!0,K=o[F.id];K===void 0&&(K={},o[F.id]=K);let se=K[q.id];se===void 0&&(se={},K[q.id]=se);let re=se[V];return re===void 0&&(re=y(p()),se[V]=re),re}function y(F){let q=[],z=[],V=[];for(let K=0;K<s;K++)q[K]=0,z[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:z,attributeDivisors:V,object:F,attributes:{},index:null}}function g(F,q,z,V){let K=c.attributes,se=q.attributes,re=0,he=z.getAttributes();for(let we in he)if(he[we].location>=0){let fe=K[we],Te=se[we];if(Te===void 0&&(we==="instanceMatrix"&&F.instanceMatrix&&(Te=F.instanceMatrix),we==="instanceColor"&&F.instanceColor&&(Te=F.instanceColor)),fe===void 0||fe.attribute!==Te||Te&&fe.data!==Te.data)return!0;re++}return c.attributesNum!==re||c.index!==V}function S(F,q,z,V){let K={},se=q.attributes,re=0,he=z.getAttributes();for(let we in he)if(he[we].location>=0){let fe=se[we];fe===void 0&&(we==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),we==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor));let Te={};Te.attribute=fe,fe&&fe.data&&(Te.data=fe.data),K[we]=Te,re++}c.attributes=K,c.attributesNum=re,c.index=V}function v(){let F=c.newAttributes;for(let q=0,z=F.length;q<z;q++)F[q]=0}function A(F){N(F,0)}function N(F,q){let z=c.newAttributes,V=c.enabledAttributes,K=c.attributeDivisors;z[F]=1,V[F]===0&&(i.enableVertexAttribArray(F),V[F]=1),K[F]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,q),K[F]=q)}function I(){let F=c.newAttributes,q=c.enabledAttributes;for(let z=0,V=q.length;z<V;z++)q[z]!==F[z]&&(i.disableVertexAttribArray(z),q[z]=0)}function L(F,q,z,V,K,se,re){re===!0?i.vertexAttribIPointer(F,q,z,K,se):i.vertexAttribPointer(F,q,z,V,K,se)}function Y(F,q,z,V){if(n.isWebGL2===!1&&(F.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let K=V.attributes,se=z.getAttributes(),re=q.defaultAttributeValues;for(let he in se){let we=se[he];if(we.location>=0){let J=K[he];if(J===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),J!==void 0){let fe=J.normalized,Te=J.itemSize,He=t.get(J);if(He===void 0)continue;let $e=He.buffer,ht=He.type,ut=He.bytesPerElement,Qe=n.isWebGL2===!0&&(ht===i.INT||ht===i.UNSIGNED_INT||J.gpuType===bd);if(J.isInterleavedBufferAttribute){let le=J.data,j=le.stride,Je=J.offset;if(le.isInstancedInterleavedBuffer){for(let qe=0;qe<we.locationSize;qe++)N(we.location+qe,le.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let qe=0;qe<we.locationSize;qe++)A(we.location+qe);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let qe=0;qe<we.locationSize;qe++)L(we.location+qe,Te/we.locationSize,ht,fe,j*ut,(Je+Te/we.locationSize*qe)*ut,Qe)}else{if(J.isInstancedBufferAttribute){for(let le=0;le<we.locationSize;le++)N(we.location+le,J.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let le=0;le<we.locationSize;le++)A(we.location+le);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let le=0;le<we.locationSize;le++)L(we.location+le,Te/we.locationSize,ht,fe,Te*ut,Te/we.locationSize*le*ut,Qe)}}else if(re!==void 0){let fe=re[he];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(we.location,fe);break;case 3:i.vertexAttrib3fv(we.location,fe);break;case 4:i.vertexAttrib4fv(we.location,fe);break;default:i.vertexAttrib1fv(we.location,fe)}}}}I()}function T(){ae();for(let F in o){let q=o[F];for(let z in q){let V=q[z];for(let K in V)x(V[K].object),delete V[K];delete q[z]}delete o[F]}}function R(F){if(o[F.id]===void 0)return;let q=o[F.id];for(let z in q){let V=q[z];for(let K in V)x(V[K].object),delete V[K];delete q[z]}delete o[F.id]}function $(F){for(let q in o){let z=o[q];if(z[F.id]===void 0)continue;let V=z[F.id];for(let K in V)x(V[K].object),delete V[K];delete z[F.id]}}function ae(){ve(),h=!0,c!==l&&(c=l,f(c.object))}function ve(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:ae,resetDefaultState:ve,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:A,disableUnusedAttributes:I}}function G0(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,m){i.drawArrays(r,h,m),t.update(m,r,1)}function l(h,m,p){if(p===0)return;let f,x;if(s)f=i,x="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[x](r,h,m,p),t.update(m,r,p)}function c(h,m,p){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<p;x++)this.render(h[x],m[x]);else{f.multiDrawArraysWEBGL(r,h,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=m[M];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function W0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,A=a||e.has("OES_texture_float"),N=v&&A,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:m,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:N,maxSamples:I}}function X0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ii,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){let f=m.length!==0||p||n!==0||s;return s=p,n=m.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,p){t=h(m,p,0)},this.setState=function(m,p,f){let x=m.clippingPlanes,M=m.clipIntersection,y=m.clipShadows,g=i.get(m);if(!s||x===null||x.length===0||r&&!y)r?h(null):c();else{let S=r?0:n,v=S*4,A=g.clippingState||null;l.value=A,A=h(x,p,v,f);for(let N=0;N!==v;++N)A[N]=t[N];g.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,p,f,x){let M=m!==null?m.length:0,y=null;if(M!==0){if(y=l.value,x!==!0||y===null){let g=f+M*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(y===null||y.length<g)&&(y=new Float32Array(g));for(let v=0,A=f;v!==M;++v,A+=4)a.copy(m[v]).applyMatrix4(S,o),a.normal.toArray(y,A),y[A+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function q0(i){let e=new WeakMap;function t(a,o){return o===sc?a.mapping=Lr:o===rc&&(a.mapping=Dr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===sc||o===rc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new fc(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var wo=class extends Eo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wr=4,ku=[.125,.215,.35,.446,.526,.582],Gs=20,ql=new wo,Hu=new xt,Yl=null,$l=0,Kl=0,zs=(1+Math.sqrt(5))/2,Er=1/zs,zu=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,zs,Er),new k(0,zs,-Er),new k(Er,0,zs),new k(-Er,0,zs),new k(zs,Er,0),new k(-zs,Er,0)],Ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,$l,Kl),e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:ca,format:Di,colorSpace:ts,depthBuffer:!1},s=Vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(r)),this._blurMaterial=$0(r,e,t)}return s}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,ql)}_sceneToCubeUV(e,t,n,s){let o=new si(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,p=h.toneMapping;h.getClearColor(Hu),h.toneMapping=_s,h.autoClear=!1;let f=new wn({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),x=new Ze(new Fn,f),M=!1,y=e.background;y?y.isColor&&(f.color.copy(y),e.background=null,M=!0):(f.color.copy(Hu),M=!0);for(let g=0;g<6;g++){let S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let v=this._cubeSize;io(s,S*v,g>2?v:0,v,v),h.setRenderTarget(s),M&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=m,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Lr||e.mapping===Dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;io(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ql)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=zu[(s-1)%zu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,m=new Ze(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gs-1),M=r/x,y=isFinite(r)?1+Math.floor(h*M):Gs;y>Gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gs}`);let g=[],S=0;for(let L=0;L<Gs;++L){let Y=L/M,T=Math.exp(-Y*Y/2);g.push(T),L===0?S+=T:L<y&&(S+=2*T)}for(let L=0;L<g.length;L++)g[L]=g[L]/S;p.envMap.value=e.texture,p.samples.value=y,p.weights.value=g,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-n;let A=this._sizeLods[s],N=3*A*(s>v-wr?s-v+wr:0),I=4*(this._cubeSize-A);io(t,N,I,3*A,2*A),l.setRenderTarget(t),l.render(m,ql)}};function Y0(i){let e=[],t=[],n=[],s=i,r=i-wr+1+ku.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-wr?l=ku[a-i+wr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,m=1+c,p=[h,h,m,h,m,m,h,h,m,m,h,m],f=6,x=6,M=3,y=2,g=1,S=new Float32Array(M*x*f),v=new Float32Array(y*x*f),A=new Float32Array(g*x*f);for(let I=0;I<f;I++){let L=I%3*2/3-1,Y=I>2?0:-1,T=[L,Y,0,L+2/3,Y,0,L+2/3,Y+1,0,L,Y,0,L+2/3,Y+1,0,L,Y+1,0];S.set(T,M*x*I),v.set(p,y*x*I);let R=[I,I,I,I,I,I];A.set(R,g*x*I)}let N=new ci;N.setAttribute("position",new li(S,M)),N.setAttribute("uv",new li(v,y)),N.setAttribute("faceIndex",new li(A,g)),e.push(N),s>wr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vu(i,e,t){let n=new ns(i,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $0(i,e,t){let n=new Float32Array(Gs),s=new k(0,1,0);return new is({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function Gu(){return new is({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function Wu(){return new is({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function Jc(){return`

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
	`}function K0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===sc||l===rc,h=l===Lr||l===Dr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let m=e.get(o);return t===null&&(t=new Ao(i)),m=c?t.fromEquirectangular(o,m):t.fromCubemap(o,m),e.set(o,m),m.texture}else{if(e.has(o))return e.get(o).texture;{let m=o.image;if(c&&m&&m.height>0||h&&m&&s(m)){t===null&&(t=new Ao(i));let p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Z0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function J0(i,e,t,n){let s={},r=new WeakMap;function a(m){let p=m.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let M=p.morphAttributes[x];for(let y=0,g=M.length;y<g;y++)e.remove(M[y])}p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(m,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(m){let p=m.attributes;for(let x in p)e.update(p[x],i.ARRAY_BUFFER);let f=m.morphAttributes;for(let x in f){let M=f[x];for(let y=0,g=M.length;y<g;y++)e.update(M[y],i.ARRAY_BUFFER)}}function c(m){let p=[],f=m.index,x=m.attributes.position,M=0;if(f!==null){let S=f.array;M=f.version;for(let v=0,A=S.length;v<A;v+=3){let N=S[v+0],I=S[v+1],L=S[v+2];p.push(N,I,I,L,L,N)}}else if(x!==void 0){let S=x.array;M=x.version;for(let v=0,A=S.length/3-1;v<A;v+=3){let N=v+0,I=v+1,L=v+2;p.push(N,I,I,L,L,N)}}else return;let y=new(Ld(p)?So:bo)(p,1);y.version=M;let g=r.get(m);g&&e.remove(g),r.set(m,y)}function h(m){let p=r.get(m);if(p){let f=m.index;f!==null&&p.version<f.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:h}}function j0(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,x){i.drawElements(r,x,o,f*l),t.update(x,r,1)}function m(f,x,M){if(M===0)return;let y,g;if(s)y=i,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](r,x,o,f*l,M),t.update(x,r,M)}function p(f,x,M){if(M===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<M;g++)this.render(f[g]/l,x[g]);else{y.multiDrawElementsWEBGL(r,x,0,o,f,0,M);let g=0;for(let S=0;S<M;S++)g+=x[S];t.update(g,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=m,this.renderMultiDraw=p}function Q0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ey(i,e){return i[0]-e[0]}function ty(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ny(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Wn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,m){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=f!==void 0?f.length:0,M=r.get(h);if(M===void 0||M.count!==x){let F=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",F)};M!==void 0&&M.texture.dispose();let S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,N=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],Y=0;S===!0&&(Y=1),v===!0&&(Y=2),A===!0&&(Y=3);let T=h.attributes.position.count*Y,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let $=new Float32Array(T*R*4*x),ae=new vo($,T,R,x);ae.type=ys,ae.needsUpdate=!0;let ve=Y*4;for(let q=0;q<x;q++){let z=N[q],V=I[q],K=L[q],se=T*R*4*q;for(let re=0;re<z.count;re++){let he=re*ve;S===!0&&(a.fromBufferAttribute(z,re),$[se+he+0]=a.x,$[se+he+1]=a.y,$[se+he+2]=a.z,$[se+he+3]=0),v===!0&&(a.fromBufferAttribute(V,re),$[se+he+4]=a.x,$[se+he+5]=a.y,$[se+he+6]=a.z,$[se+he+7]=0),A===!0&&(a.fromBufferAttribute(K,re),$[se+he+8]=a.x,$[se+he+9]=a.y,$[se+he+10]=a.z,$[se+he+11]=K.itemSize===4?a.w:1)}}M={count:x,texture:ae,size:new Ge(T,R)},r.set(h,M),h.addEventListener("dispose",F)}let y=0;for(let S=0;S<p.length;S++)y+=p[S];let g=h.morphTargetsRelative?1:1-y;m.getUniforms().setValue(i,"morphTargetBaseInfluence",g),m.getUniforms().setValue(i,"morphTargetInfluences",p),m.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let f=p===void 0?0:p.length,x=n[h.id];if(x===void 0||x.length!==f){x=[];for(let v=0;v<f;v++)x[v]=[v,0];n[h.id]=x}for(let v=0;v<f;v++){let A=x[v];A[0]=v,A[1]=p[v]}x.sort(ty);for(let v=0;v<8;v++)v<f&&x[v][1]?(o[v][0]=x[v][0],o[v][1]=x[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(ey);let M=h.morphAttributes.position,y=h.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let A=o[v],N=A[0],I=A[1];N!==Number.MAX_SAFE_INTEGER&&I?(M&&h.getAttribute("morphTarget"+v)!==M[N]&&h.setAttribute("morphTarget"+v,M[N]),y&&h.getAttribute("morphNormal"+v)!==y[N]&&h.setAttribute("morphNormal"+v,y[N]),s[v]=I,g+=I):(M&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),y&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let S=h.morphTargetsRelative?1:1-g;m.getUniforms().setValue(i,"morphTargetBaseInfluence",S),m.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function iy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,m=e.get(l,h);if(s.get(m)!==c&&(e.update(m),s.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return m}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ro=class extends Si{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Xs,h!==Xs&&h!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xs&&(n=gs),n===void 0&&h===Ur&&(n=Ws),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ii,this.minFilter=l!==void 0?l:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Od=new Si,Fd=new Ro(1,1);Fd.compareFunction=Id;var Bd=new vo,kd=new uc,Hd=new To,Xu=[],qu=[],Yu=new Float32Array(16),$u=new Float32Array(9),Ku=new Float32Array(4);function zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Xu[s];if(r===void 0&&(r=new Float32Array(s),Xu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Bn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qo(i,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;i.uniform2fv(this.addr,e),kn(t,e)}}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bn(t,e))return;i.uniform3fv(this.addr,e),kn(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;i.uniform4fv(this.addr,e),kn(t,e)}}function ly(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kn(t,e)}else{if(Bn(t,n))return;Ku.set(n),i.uniformMatrix2fv(this.addr,!1,Ku),kn(t,n)}}function cy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kn(t,e)}else{if(Bn(t,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),kn(t,n)}}function hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kn(t,e)}else{if(Bn(t,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),kn(t,n)}}function uy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;i.uniform2iv(this.addr,e),kn(t,e)}}function fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bn(t,e))return;i.uniform3iv(this.addr,e),kn(t,e)}}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;i.uniform4iv(this.addr,e),kn(t,e)}}function my(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;i.uniform2uiv(this.addr,e),kn(t,e)}}function yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bn(t,e))return;i.uniform3uiv(this.addr,e),kn(t,e)}}function xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;i.uniform4uiv(this.addr,e),kn(t,e)}}function _y(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Fd:Od;t.setTexture2D(e||r,s)}function vy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kd,s)}function My(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hd,s)}function by(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bd,s)}function Sy(i){switch(i){case 5126:return sy;case 35664:return ry;case 35665:return ay;case 35666:return oy;case 35674:return ly;case 35675:return cy;case 35676:return hy;case 5124:case 35670:return uy;case 35667:case 35671:return dy;case 35668:case 35672:return fy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return yy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return by}}function Ey(i,e){i.uniform1fv(this.addr,e)}function Ty(i,e){let t=zr(e,this.size,2);i.uniform2fv(this.addr,t)}function wy(i,e){let t=zr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ay(i,e){let t=zr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ry(i,e){let t=zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cy(i,e){let t=zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Py(i,e){let t=zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Iy(i,e){i.uniform1iv(this.addr,e)}function Ly(i,e){i.uniform2iv(this.addr,e)}function Dy(i,e){i.uniform3iv(this.addr,e)}function Uy(i,e){i.uniform4iv(this.addr,e)}function Ny(i,e){i.uniform1uiv(this.addr,e)}function Oy(i,e){i.uniform2uiv(this.addr,e)}function Fy(i,e){i.uniform3uiv(this.addr,e)}function By(i,e){i.uniform4uiv(this.addr,e)}function ky(i,e,t){let n=this.cache,s=e.length,r=qo(t,s);Bn(n,r)||(i.uniform1iv(this.addr,r),kn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Od,r[a])}function Hy(i,e,t){let n=this.cache,s=e.length,r=qo(t,s);Bn(n,r)||(i.uniform1iv(this.addr,r),kn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||kd,r[a])}function zy(i,e,t){let n=this.cache,s=e.length,r=qo(t,s);Bn(n,r)||(i.uniform1iv(this.addr,r),kn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Hd,r[a])}function Vy(i,e,t){let n=this.cache,s=e.length,r=qo(t,s);Bn(n,r)||(i.uniform1iv(this.addr,r),kn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bd,r[a])}function Gy(i){switch(i){case 5126:return Ey;case 35664:return Ty;case 35665:return wy;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return Py;case 5124:case 35670:return Iy;case 35667:case 35671:return Ly;case 35668:case 35672:return Dy;case 35669:case 35673:return Uy;case 5125:return Ny;case 36294:return Oy;case 36295:return Fy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return Vy}}var pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sy(t.type)}},mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gy(t.type)}},gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Zl=/(\w+)(\])?(\[|\.)?/g;function Zu(i,e){i.seq.push(e),i.map[e.id]=e}function Wy(i,e,t){let n=i.name,s=n.length;for(Zl.lastIndex=0;;){let r=Zl.exec(n),a=Zl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zu(t,c===void 0?new pc(o,i,e):new mc(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new gc(o),Zu(t,m)),t=m}}}var Ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Wy(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ju(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Xy=37297,qy=0;function Yy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function $y(i){let e=an.getPrimaries(an.workingColorSpace),t=an.getPrimaries(i),n;switch(e===t?n="":e===mo&&t===po?n="LinearDisplayP3ToLinearSRGB":e===po&&t===mo&&(n="LinearSRGBToLinearDisplayP3"),i){case ts:case Xo:return[n,"LinearTransferOETF"];case $n:case Zc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ju(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Yy(i.getShaderSource(e),a)}else return s}function Ky(i,e){let t=$y(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Zy(i,e){let t;switch(e){case pp:t="Linear";break;case mp:t="Reinhard";break;case gp:t="OptimizedCineon";break;case yp:t="ACESFilmic";break;case _p:t="AgX";break;case xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jy(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ar).join(`
`)}function jy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ar).join(`
`)}function Qy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ex(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ar(i){return i!==""}function Qu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ed(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(tx,ix)}var nx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ix(i,e){let t=It[e];if(t===void 0){let n=nx.get(e);if(n!==void 0)t=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}var sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(i){return i.replace(sx,rx)}function rx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ax(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function ox(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Lr:case Dr:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function cx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vd:e="ENVMAP_BLENDING_MULTIPLY";break;case dp:e="ENVMAP_BLENDING_MIX";break;case fp:e="ENVMAP_BLENDING_ADD";break}return e}function hx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ux(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ax(t),c=ox(t),h=lx(t),m=cx(t),p=hx(t),f=t.isWebGL2?"":Jy(t),x=jy(t),M=Qy(r),y=s.createProgram(),g,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ar).join(`
`),g.length>0&&(g+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ar).join(`
`),S.length>0&&(S+=`
`)):(g=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),S=[f,nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_s?"#define TONE_MAPPING":"",t.toneMapping!==_s?It.tonemapping_pars_fragment:"",t.toneMapping!==_s?Zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,Ky("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),a=yc(a),a=Qu(a,t),a=ed(a,t),o=yc(o),o=Qu(o,t),o=ed(o,t),a=td(a),o=td(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let A=v+g+a,N=v+S+o,I=Ju(s,s.VERTEX_SHADER,A),L=Ju(s,s.FRAGMENT_SHADER,N);s.attachShader(y,I),s.attachShader(y,L),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function Y(ae){if(i.debug.checkShaderErrors){let ve=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(I).trim(),q=s.getShaderInfoLog(L).trim(),z=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,L);else{let K=ju(s,I,"vertex"),se=ju(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Program Info Log: `+ve+`
`+K+`
`+se)}else ve!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ve):(F===""||q==="")&&(V=!1);V&&(ae.diagnostics={runnable:z,programLog:ve,vertexShader:{log:F,prefix:g},fragmentShader:{log:q,prefix:S}})}s.deleteShader(I),s.deleteShader(L),T=new Ir(s,y),R=ex(s,y)}let T;this.getUniforms=function(){return T===void 0&&Y(this),T};let R;this.getAttributes=function(){return R===void 0&&Y(this),R};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=s.getProgramParameter(y,Xy)),$},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=L,this}var dx=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _c(e),t.set(e,n)),n}},_c=class{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}};function fx(i,e,t,n,s,r,a){let o=new ua,l=new xc,c=[],h=s.isWebGL2,m=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return T===0?"uv":`uv${T}`}function y(T,R,$,ae,ve){let F=ae.fog,q=ve.geometry,z=T.isMeshStandardMaterial?ae.environment:null,V=(T.isMeshStandardMaterial?t:e).get(T.envMap||z),K=V&&V.mapping===Wo?V.image.height:null,se=x[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let re=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,he=re!==void 0?re.length:0,we=0;q.morphAttributes.position!==void 0&&(we=1),q.morphAttributes.normal!==void 0&&(we=2),q.morphAttributes.color!==void 0&&(we=3);let J,fe,Te,He;if(se){let Ut=ki[se];J=Ut.vertexShader,fe=Ut.fragmentShader}else J=T.vertexShader,fe=T.fragmentShader,l.update(T),Te=l.getVertexShaderID(T),He=l.getFragmentShaderID(T);let $e=i.getRenderTarget(),ht=ve.isInstancedMesh===!0,ut=ve.isBatchedMesh===!0,Qe=!!T.map,le=!!T.matcap,j=!!V,Je=!!T.aoMap,qe=!!T.lightMap,et=!!T.bumpMap,We=!!T.normalMap,tt=!!T.displacementMap,gt=!!T.emissiveMap,C=!!T.metalnessMap,E=!!T.roughnessMap,ne=T.anisotropy>0,ye=T.clearcoat>0,be=T.iridescence>0,Se=T.sheen>0,je=T.transmission>0,Oe=ne&&!!T.anisotropyMap,Fe=ye&&!!T.clearcoatMap,ot=ye&&!!T.clearcoatNormalMap,bt=ye&&!!T.clearcoatRoughnessMap,xe=be&&!!T.iridescenceMap,jt=be&&!!T.iridescenceThicknessMap,Et=Se&&!!T.sheenColorMap,dt=Se&&!!T.sheenRoughnessMap,st=!!T.specularMap,Xe=!!T.specularColorMap,ft=!!T.specularIntensityMap,qt=je&&!!T.transmissionMap,gn=je&&!!T.thicknessMap,At=!!T.gradientMap,Pe=!!T.alphaMap,H=T.alphaTest>0,De=!!T.alphaHash,Ue=!!T.extensions,at=!!q.attributes.uv1,rt=!!q.attributes.uv2,tn=!!q.attributes.uv3,kt=_s;return T.toneMapped&&($e===null||$e.isXRRenderTarget===!0)&&(kt=i.toneMapping),{isWebGL2:h,shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:J,fragmentShader:fe,defines:T.defines,customVertexShaderID:Te,customFragmentShaderID:He,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:ut,instancing:ht,instancingColor:ht&&ve.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:$e===null?i.outputColorSpace:$e.isXRRenderTarget===!0?$e.texture.colorSpace:ts,map:Qe,matcap:le,envMap:j,envMapMode:j&&V.mapping,envMapCubeUVHeight:K,aoMap:Je,lightMap:qe,bumpMap:et,normalMap:We,displacementMap:p&&tt,emissiveMap:gt,normalMapObjectSpace:We&&T.normalMapType===Ip,normalMapTangentSpace:We&&T.normalMapType===Pd,metalnessMap:C,roughnessMap:E,anisotropy:ne,anisotropyMap:Oe,clearcoat:ye,clearcoatMap:Fe,clearcoatNormalMap:ot,clearcoatRoughnessMap:bt,iridescence:be,iridescenceMap:xe,iridescenceThicknessMap:jt,sheen:Se,sheenColorMap:Et,sheenRoughnessMap:dt,specularMap:st,specularColorMap:Xe,specularIntensityMap:ft,transmission:je,transmissionMap:qt,thicknessMap:gn,gradientMap:At,opaque:T.transparent===!1&&T.blending===Cr,alphaMap:Pe,alphaTest:H,alphaHash:De,combine:T.combine,mapUv:Qe&&M(T.map.channel),aoMapUv:Je&&M(T.aoMap.channel),lightMapUv:qe&&M(T.lightMap.channel),bumpMapUv:et&&M(T.bumpMap.channel),normalMapUv:We&&M(T.normalMap.channel),displacementMapUv:tt&&M(T.displacementMap.channel),emissiveMapUv:gt&&M(T.emissiveMap.channel),metalnessMapUv:C&&M(T.metalnessMap.channel),roughnessMapUv:E&&M(T.roughnessMap.channel),anisotropyMapUv:Oe&&M(T.anisotropyMap.channel),clearcoatMapUv:Fe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:dt&&M(T.sheenRoughnessMap.channel),specularMapUv:st&&M(T.specularMap.channel),specularColorMapUv:Xe&&M(T.specularColorMap.channel),specularIntensityMapUv:ft&&M(T.specularIntensityMap.channel),transmissionMapUv:qt&&M(T.transmissionMap.channel),thicknessMapUv:gn&&M(T.thicknessMap.channel),alphaMapUv:Pe&&M(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(We||ne),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:at,vertexUv2s:rt,vertexUv3s:tn,pointsUvs:ve.isPoints===!0&&!!q.attributes.uv&&(Qe||Pe),fog:!!F,useFog:T.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:ve.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:we,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Qe&&T.map.isVideoTexture===!0&&an.getTransfer(T.map.colorSpace)===mn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sn,flipSided:T.side===oi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Ue&&T.extensions.derivatives===!0,extensionFragDepth:Ue&&T.extensions.fragDepth===!0,extensionDrawBuffers:Ue&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ue&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function g(T){let R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(let $ in T.defines)R.push($),R.push(T.defines[$]);return T.isRawShaderMaterial===!1&&(S(R,T),v(R,T),R.push(i.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function S(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function v(T,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),T.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function A(T){let R=x[T.type],$;if(R){let ae=ki[R];$=nm.clone(ae.uniforms)}else $=T.uniforms;return $}function N(T,R){let $;for(let ae=0,ve=c.length;ae<ve;ae++){let F=c[ae];if(F.cacheKey===R){$=F,++$.usedTimes;break}}return $===void 0&&($=new ux(i,R,T,r),c.push($)),$}function I(T){if(--T.usedTimes===0){let R=c.indexOf(T);c[R]=c[c.length-1],c.pop(),T.destroy()}}function L(T){l.remove(T)}function Y(){l.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:N,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:Y}}function px(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function mx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(m,p,f,x,M,y){let g=i[e];return g===void 0?(g={id:m.id,object:m,geometry:p,material:f,groupOrder:x,renderOrder:m.renderOrder,z:M,group:y},i[e]=g):(g.id=m.id,g.object=m,g.geometry=p,g.material=f,g.groupOrder=x,g.renderOrder=m.renderOrder,g.z=M,g.group=y),e++,g}function o(m,p,f,x,M,y){let g=a(m,p,f,x,M,y);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):t.push(g)}function l(m,p,f,x,M,y){let g=a(m,p,f,x,M,y);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):t.unshift(g)}function c(m,p){t.length>1&&t.sort(m||mx),n.length>1&&n.sort(p||id),s.length>1&&s.sort(p||id)}function h(){for(let m=e,p=i.length;m<p;m++){let f=i[m];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function gx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new sd,i.set(n,[a])):s>=r.length?(a=new sd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new xt};break;case"SpotLight":t={position:new k,direction:new k,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function xx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var _x=0;function vx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mx(i,e){let t=new yx,n=xx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new k);let r=new k,a=new Un,o=new Un;function l(h,m){let p=0,f=0,x=0;for(let ae=0;ae<9;ae++)s.probe[ae].set(0,0,0);let M=0,y=0,g=0,S=0,v=0,A=0,N=0,I=0,L=0,Y=0,T=0;h.sort(vx);let R=m===!0?Math.PI:1;for(let ae=0,ve=h.length;ae<ve;ae++){let F=h[ae],q=F.color,z=F.intensity,V=F.distance,K=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=q.r*z*R,f+=q.g*z*R,x+=q.b*z*R;else if(F.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(F.sh.coefficients[se],z);T++}else if(F.isDirectionalLight){let se=t.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){let re=F.shadow,he=n.get(F);he.shadowBias=re.bias,he.shadowNormalBias=re.normalBias,he.shadowRadius=re.radius,he.shadowMapSize=re.mapSize,s.directionalShadow[M]=he,s.directionalShadowMap[M]=K,s.directionalShadowMatrix[M]=F.shadow.matrix,A++}s.directional[M]=se,M++}else if(F.isSpotLight){let se=t.get(F);se.position.setFromMatrixPosition(F.matrixWorld),se.color.copy(q).multiplyScalar(z*R),se.distance=V,se.coneCos=Math.cos(F.angle),se.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),se.decay=F.decay,s.spot[g]=se;let re=F.shadow;if(F.map&&(s.spotLightMap[L]=F.map,L++,re.updateMatrices(F),F.castShadow&&Y++),s.spotLightMatrix[g]=re.matrix,F.castShadow){let he=n.get(F);he.shadowBias=re.bias,he.shadowNormalBias=re.normalBias,he.shadowRadius=re.radius,he.shadowMapSize=re.mapSize,s.spotShadow[g]=he,s.spotShadowMap[g]=K,I++}g++}else if(F.isRectAreaLight){let se=t.get(F);se.color.copy(q).multiplyScalar(z),se.halfWidth.set(F.width*.5,0,0),se.halfHeight.set(0,F.height*.5,0),s.rectArea[S]=se,S++}else if(F.isPointLight){let se=t.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity*R),se.distance=F.distance,se.decay=F.decay,F.castShadow){let re=F.shadow,he=n.get(F);he.shadowBias=re.bias,he.shadowNormalBias=re.normalBias,he.shadowRadius=re.radius,he.shadowMapSize=re.mapSize,he.shadowCameraNear=re.camera.near,he.shadowCameraFar=re.camera.far,s.pointShadow[y]=he,s.pointShadowMap[y]=K,s.pointShadowMatrix[y]=F.shadow.matrix,N++}s.point[y]=se,y++}else if(F.isHemisphereLight){let se=t.get(F);se.skyColor.copy(F.color).multiplyScalar(z*R),se.groundColor.copy(F.groundColor).multiplyScalar(z*R),s.hemi[v]=se,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=f,s.ambient[2]=x;let $=s.hash;($.directionalLength!==M||$.pointLength!==y||$.spotLength!==g||$.rectAreaLength!==S||$.hemiLength!==v||$.numDirectionalShadows!==A||$.numPointShadows!==N||$.numSpotShadows!==I||$.numSpotMaps!==L||$.numLightProbes!==T)&&(s.directional.length=M,s.spot.length=g,s.rectArea.length=S,s.point.length=y,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=I+L-Y,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=T,$.directionalLength=M,$.pointLength=y,$.spotLength=g,$.rectAreaLength=S,$.hemiLength=v,$.numDirectionalShadows=A,$.numPointShadows=N,$.numSpotShadows=I,$.numSpotMaps=L,$.numLightProbes=T,s.version=_x++)}function c(h,m){let p=0,f=0,x=0,M=0,y=0,g=m.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){let A=h[S];if(A.isDirectionalLight){let N=s.directional[p];N.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),p++}else if(A.isSpotLight){let N=s.spot[x];N.position.setFromMatrixPosition(A.matrixWorld),N.position.applyMatrix4(g),N.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),x++}else if(A.isRectAreaLight){let N=s.rectArea[M];N.position.setFromMatrixPosition(A.matrixWorld),N.position.applyMatrix4(g),o.identity(),a.copy(A.matrixWorld),a.premultiply(g),o.extractRotation(a),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){let N=s.point[f];N.position.setFromMatrixPosition(A.matrixWorld),N.position.applyMatrix4(g),f++}else if(A.isHemisphereLight){let N=s.hemi[y];N.direction.setFromMatrixPosition(A.matrixWorld),N.direction.transformDirection(g),y++}}}return{setup:l,setupView:c,state:s}}function rd(i,e){let t=new Mx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(m){n.push(m)}function o(m){s.push(m)}function l(m){t.setup(n,m)}function c(m){t.setupView(n,m)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new rd(i,e),t.set(r,[l])):a>=o.length?(l=new rd(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var vc=class extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mc=class extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
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
}`;function Tx(i,e,t){let n=new da,s=new Ge,r=new Ge,a=new Wn,o=new vc({depthPacking:Pp}),l=new Mc,c={},h=t.maxTextureSize,m={[Ms]:oi,[oi]:Ms,[Sn]:Sn},p=new is({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Sx,fragmentShader:Ex}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let x=new ci;x.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ze(x,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_d;let g=this.type;this.render=function(I,L,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;let T=i.getRenderTarget(),R=i.getActiveCubeFace(),$=i.getActiveMipmapLevel(),ae=i.state;ae.setBlending(xs),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);let ve=g!==Qi&&this.type===Qi,F=g===Qi&&this.type!==Qi;for(let q=0,z=I.length;q<z;q++){let V=I[q],K=V.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let se=K.getFrameExtents();if(s.multiply(se),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,K.mapSize.y=r.y)),K.map===null||ve===!0||F===!0){let he=this.type!==Qi?{minFilter:ii,magFilter:ii}:{};K.map!==null&&K.map.dispose(),K.map=new ns(s.x,s.y,he),K.map.texture.name=V.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let re=K.getViewportCount();for(let he=0;he<re;he++){let we=K.getViewport(he);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),ae.viewport(a),K.updateMatrices(V,he),n=K.getFrustum(),A(L,Y,K.camera,V,this.type)}K.isPointLightShadow!==!0&&this.type===Qi&&S(K,Y),K.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(T,R,$)};function S(I,L){let Y=e.update(M);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ns(s.x,s.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,Y,p,M,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,Y,f,M,null)}function v(I,L,Y,T){let R=null,$=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if($!==void 0)R=$;else if(R=Y.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let ae=R.uuid,ve=L.uuid,F=c[ae];F===void 0&&(F={},c[ae]=F);let q=F[ve];q===void 0&&(q=R.clone(),F[ve]=q,L.addEventListener("dispose",N)),R=q}if(R.visible=L.visible,R.wireframe=L.wireframe,T===Qi?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:m[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let ae=i.properties.get(R);ae.light=Y}return R}function A(I,L,Y,T,R){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Qi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);let ve=e.update(I),F=I.material;if(Array.isArray(F)){let q=ve.groups;for(let z=0,V=q.length;z<V;z++){let K=q[z],se=F[K.materialIndex];if(se&&se.visible){let re=v(I,se,T,R);I.onBeforeShadow(i,I,L,Y,ve,re,K),i.renderBufferDirect(Y,null,ve,re,I,K),I.onAfterShadow(i,I,L,Y,ve,re,K)}}}else if(F.visible){let q=v(I,F,T,R);I.onBeforeShadow(i,I,L,Y,ve,q,null),i.renderBufferDirect(Y,null,ve,q,I,null),I.onAfterShadow(i,I,L,Y,ve,q,null)}}let ae=I.children;for(let ve=0,F=ae.length;ve<F;ve++)A(ae[ve],L,Y,T,R)}function N(I){I.target.removeEventListener("dispose",N);for(let Y in c){let T=c[Y],R=I.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function wx(i,e,t){let n=t.isWebGL2;function s(){let H=!1,De=new Wn,Ue=null,at=new Wn(0,0,0,0);return{setMask:function(rt){Ue!==rt&&!H&&(i.colorMask(rt,rt,rt,rt),Ue=rt)},setLocked:function(rt){H=rt},setClear:function(rt,tn,kt,Rt,Ut){Ut===!0&&(rt*=Rt,tn*=Rt,kt*=Rt),De.set(rt,tn,kt,Rt),at.equals(De)===!1&&(i.clearColor(rt,tn,kt,Rt),at.copy(De))},reset:function(){H=!1,Ue=null,at.set(-1,0,0,0)}}}function r(){let H=!1,De=null,Ue=null,at=null;return{setTest:function(rt){rt?ut(i.DEPTH_TEST):Qe(i.DEPTH_TEST)},setMask:function(rt){De!==rt&&!H&&(i.depthMask(rt),De=rt)},setFunc:function(rt){if(Ue!==rt){switch(rt){case rp:i.depthFunc(i.NEVER);break;case ap:i.depthFunc(i.ALWAYS);break;case op:i.depthFunc(i.LESS);break;case co:i.depthFunc(i.LEQUAL);break;case lp:i.depthFunc(i.EQUAL);break;case cp:i.depthFunc(i.GEQUAL);break;case hp:i.depthFunc(i.GREATER);break;case up:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=rt}},setLocked:function(rt){H=rt},setClear:function(rt){at!==rt&&(i.clearDepth(rt),at=rt)},reset:function(){H=!1,De=null,Ue=null,at=null}}}function a(){let H=!1,De=null,Ue=null,at=null,rt=null,tn=null,kt=null,Rt=null,Ut=null;return{setTest:function(ke){H||(ke?ut(i.STENCIL_TEST):Qe(i.STENCIL_TEST))},setMask:function(ke){De!==ke&&!H&&(i.stencilMask(ke),De=ke)},setFunc:function(ke,St,Cn){(Ue!==ke||at!==St||rt!==Cn)&&(i.stencilFunc(ke,St,Cn),Ue=ke,at=St,rt=Cn)},setOp:function(ke,St,Cn){(tn!==ke||kt!==St||Rt!==Cn)&&(i.stencilOp(ke,St,Cn),tn=ke,kt=St,Rt=Cn)},setLocked:function(ke){H=ke},setClear:function(ke){Ut!==ke&&(i.clearStencil(ke),Ut=ke)},reset:function(){H=!1,De=null,Ue=null,at=null,rt=null,tn=null,kt=null,Rt=null,Ut=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,m=new WeakMap,p={},f={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,N=null,I=null,L=null,Y=null,T=new xt(0,0,0),R=0,$=!1,ae=null,ve=null,F=null,q=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,se=0,re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(re)[1]),K=se>=1):re.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),K=se>=2);let he=null,we={},J=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Te=new Wn().fromArray(J),He=new Wn().fromArray(fe);function $e(H,De,Ue,at){let rt=new Uint8Array(4),tn=i.createTexture();i.bindTexture(H,tn),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Ue;kt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(De,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(De+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return tn}let ht={};ht[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ut(i.DEPTH_TEST),l.setFunc(co),gt(!1),C(Bh),ut(i.CULL_FACE),We(xs);function ut(H){p[H]!==!0&&(i.enable(H),p[H]=!0)}function Qe(H){p[H]!==!1&&(i.disable(H),p[H]=!1)}function le(H,De){return f[H]!==De?(i.bindFramebuffer(H,De),f[H]=De,n&&(H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=De),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=De)),!0):!1}function j(H,De){let Ue=M,at=!1;if(H)if(Ue=x.get(De),Ue===void 0&&(Ue=[],x.set(De,Ue)),H.isWebGLMultipleRenderTargets){let rt=H.texture;if(Ue.length!==rt.length||Ue[0]!==i.COLOR_ATTACHMENT0){for(let tn=0,kt=rt.length;tn<kt;tn++)Ue[tn]=i.COLOR_ATTACHMENT0+tn;Ue.length=rt.length,at=!0}}else Ue[0]!==i.COLOR_ATTACHMENT0&&(Ue[0]=i.COLOR_ATTACHMENT0,at=!0);else Ue[0]!==i.BACK&&(Ue[0]=i.BACK,at=!0);at&&(t.isWebGL2?i.drawBuffers(Ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ue))}function Je(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let qe={[Vs]:i.FUNC_ADD,[Wf]:i.FUNC_SUBTRACT,[Xf]:i.FUNC_REVERSE_SUBTRACT};if(n)qe[Vh]=i.MIN,qe[Gh]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(qe[Vh]=H.MIN_EXT,qe[Gh]=H.MAX_EXT)}let et={[qf]:i.ZERO,[Yf]:i.ONE,[$f]:i.SRC_COLOR,[nc]:i.SRC_ALPHA,[ep]:i.SRC_ALPHA_SATURATE,[jf]:i.DST_COLOR,[Zf]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[ic]:i.ONE_MINUS_SRC_ALPHA,[Qf]:i.ONE_MINUS_DST_COLOR,[Jf]:i.ONE_MINUS_DST_ALPHA,[tp]:i.CONSTANT_COLOR,[np]:i.ONE_MINUS_CONSTANT_COLOR,[ip]:i.CONSTANT_ALPHA,[sp]:i.ONE_MINUS_CONSTANT_ALPHA};function We(H,De,Ue,at,rt,tn,kt,Rt,Ut,ke){if(H===xs){g===!0&&(Qe(i.BLEND),g=!1);return}if(g===!1&&(ut(i.BLEND),g=!0),H!==Gf){if(H!==S||ke!==$){if((v!==Vs||I!==Vs)&&(i.blendEquation(i.FUNC_ADD),v=Vs,I=Vs),ke)switch(H){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kh:i.blendFunc(i.ONE,i.ONE);break;case Hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,N=null,L=null,Y=null,T.set(0,0,0),R=0,S=H,$=ke}return}rt=rt||De,tn=tn||Ue,kt=kt||at,(De!==v||rt!==I)&&(i.blendEquationSeparate(qe[De],qe[rt]),v=De,I=rt),(Ue!==A||at!==N||tn!==L||kt!==Y)&&(i.blendFuncSeparate(et[Ue],et[at],et[tn],et[kt]),A=Ue,N=at,L=tn,Y=kt),(Rt.equals(T)===!1||Ut!==R)&&(i.blendColor(Rt.r,Rt.g,Rt.b,Ut),T.copy(Rt),R=Ut),S=H,$=!1}function tt(H,De){H.side===Sn?Qe(i.CULL_FACE):ut(i.CULL_FACE);let Ue=H.side===oi;De&&(Ue=!Ue),gt(Ue),H.blending===Cr&&H.transparent===!1?We(xs):We(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),o.setMask(H.colorWrite);let at=H.stencilWrite;c.setTest(at),at&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ne(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(H){ae!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),ae=H)}function C(H){H!==zf?(ut(i.CULL_FACE),H!==ve&&(H===Bh?i.cullFace(i.BACK):H===Vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Qe(i.CULL_FACE),ve=H}function E(H){H!==F&&(K&&i.lineWidth(H),F=H)}function ne(H,De,Ue){H?(ut(i.POLYGON_OFFSET_FILL),(q!==De||z!==Ue)&&(i.polygonOffset(De,Ue),q=De,z=Ue)):Qe(i.POLYGON_OFFSET_FILL)}function ye(H){H?ut(i.SCISSOR_TEST):Qe(i.SCISSOR_TEST)}function be(H){H===void 0&&(H=i.TEXTURE0+V-1),he!==H&&(i.activeTexture(H),he=H)}function Se(H,De,Ue){Ue===void 0&&(he===null?Ue=i.TEXTURE0+V-1:Ue=he);let at=we[Ue];at===void 0&&(at={type:void 0,texture:void 0},we[Ue]=at),(at.type!==H||at.texture!==De)&&(he!==Ue&&(i.activeTexture(Ue),he=Ue),i.bindTexture(H,De||ht[H]),at.type=H,at.texture=De)}function je(){let H=we[he];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function jt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function st(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(H){Te.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Te.copy(H))}function qt(H){He.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),He.copy(H))}function gn(H,De){let Ue=m.get(De);Ue===void 0&&(Ue=new WeakMap,m.set(De,Ue));let at=Ue.get(H);at===void 0&&(at=i.getUniformBlockIndex(De,H.name),Ue.set(H,at))}function At(H,De){let at=m.get(De).get(H);h.get(De)!==at&&(i.uniformBlockBinding(De,at,H.__bindingPointIndex),h.set(De,at))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},he=null,we={},f={},x=new WeakMap,M=[],y=null,g=!1,S=null,v=null,A=null,N=null,I=null,L=null,Y=null,T=new xt(0,0,0),R=0,$=!1,ae=null,ve=null,F=null,q=null,z=null,Te.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ut,disable:Qe,bindFramebuffer:le,drawBuffers:j,useProgram:Je,setBlending:We,setMaterial:tt,setFlipSided:gt,setCullFace:C,setLineWidth:E,setPolygonOffset:ne,setScissorTest:ye,activeTexture:be,bindTexture:Se,unbindTexture:je,compressedTexImage2D:Oe,compressedTexImage3D:Fe,texImage2D:st,texImage3D:Xe,updateUBOMapping:gn,uniformBlockBinding:At,texStorage2D:Et,texStorage3D:dt,texSubImage2D:ot,texSubImage3D:bt,compressedTexSubImage2D:xe,compressedTexSubImage3D:jt,scissor:ft,viewport:qt,reset:Pe}}function Ax(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,m,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return f?new OffscreenCanvas(C,E):yo("canvas")}function M(C,E,ne,ye){let be=1;if((C.width>ye||C.height>ye)&&(be=ye/Math.max(C.width,C.height)),be<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Se=E?cc:Math.floor,je=Se(be*C.width),Oe=Se(be*C.height);m===void 0&&(m=x(je,Oe));let Fe=ne?x(je,Oe):m;return Fe.width=je,Fe.height=Oe,Fe.getContext("2d").drawImage(C,0,0,je,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+je+"x"+Oe+")."),Fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return bu(C.width)&&bu(C.height)}function g(C){return o?!1:C.wrapS!==Li||C.wrapT!==Li||C.minFilter!==ii&&C.minFilter!==Mi}function S(C,E){return C.generateMipmaps&&E&&C.minFilter!==ii&&C.minFilter!==Mi}function v(C){i.generateMipmap(C)}function A(C,E,ne,ye,be=!1){if(o===!1)return E;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Se=E;if(E===i.RED&&(ne===i.FLOAT&&(Se=i.R32F),ne===i.HALF_FLOAT&&(Se=i.R16F),ne===i.UNSIGNED_BYTE&&(Se=i.R8)),E===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(Se=i.R8UI),ne===i.UNSIGNED_SHORT&&(Se=i.R16UI),ne===i.UNSIGNED_INT&&(Se=i.R32UI),ne===i.BYTE&&(Se=i.R8I),ne===i.SHORT&&(Se=i.R16I),ne===i.INT&&(Se=i.R32I)),E===i.RG&&(ne===i.FLOAT&&(Se=i.RG32F),ne===i.HALF_FLOAT&&(Se=i.RG16F),ne===i.UNSIGNED_BYTE&&(Se=i.RG8)),E===i.RGBA){let je=be?fo:an.getTransfer(ye);ne===i.FLOAT&&(Se=i.RGBA32F),ne===i.HALF_FLOAT&&(Se=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(Se=je===mn?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT_4_4_4_4&&(Se=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(Se=i.RGB5_A1)}return(Se===i.R16F||Se===i.R32F||Se===i.RG16F||Se===i.RG32F||Se===i.RGBA16F||Se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function N(C,E,ne){return S(C,ne)===!0||C.isFramebufferTexture&&C.minFilter!==ii&&C.minFilter!==Mi?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function I(C){return C===ii||C===Wh||C===vl?i.NEAREST:i.LINEAR}function L(C){let E=C.target;E.removeEventListener("dispose",L),T(E),E.isVideoTexture&&h.delete(E)}function Y(C){let E=C.target;E.removeEventListener("dispose",Y),$(E)}function T(C){let E=n.get(C);if(E.__webglInit===void 0)return;let ne=C.source,ye=p.get(ne);if(ye){let be=ye[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&R(C),Object.keys(ye).length===0&&p.delete(ne)}n.remove(C)}function R(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let ne=C.source,ye=p.get(ne);delete ye[E.__cacheKey],a.memory.textures--}function $(C){let E=C.texture,ne=n.get(C),ye=n.get(E);if(ye.__webglTexture!==void 0&&(i.deleteTexture(ye.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(ne.__webglFramebuffer[be]))for(let Se=0;Se<ne.__webglFramebuffer[be].length;Se++)i.deleteFramebuffer(ne.__webglFramebuffer[be][Se]);else i.deleteFramebuffer(ne.__webglFramebuffer[be]);ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer[be])}else{if(Array.isArray(ne.__webglFramebuffer))for(let be=0;be<ne.__webglFramebuffer.length;be++)i.deleteFramebuffer(ne.__webglFramebuffer[be]);else i.deleteFramebuffer(ne.__webglFramebuffer);if(ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let be=0;be<ne.__webglColorRenderbuffer.length;be++)ne.__webglColorRenderbuffer[be]&&i.deleteRenderbuffer(ne.__webglColorRenderbuffer[be]);ne.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let be=0,Se=E.length;be<Se;be++){let je=n.get(E[be]);je.__webglTexture&&(i.deleteTexture(je.__webglTexture),a.memory.textures--),n.remove(E[be])}n.remove(E),n.remove(C)}let ae=0;function ve(){ae=0}function F(){let C=ae;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),ae+=1,C}function q(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function z(C,E){let ne=n.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.version>0&&ne.__version!==C.version){let ye=C.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(ne,C,E);return}}t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+E)}function V(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){Te(ne,C,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+E)}function K(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){Te(ne,C,E);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+E)}function se(C,E){let ne=n.get(C);if(C.version>0&&ne.__version!==C.version){He(ne,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+E)}let re={[oa]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[ac]:i.MIRRORED_REPEAT},he={[ii]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[vl]:i.NEAREST_MIPMAP_LINEAR,[Mi]:i.LINEAR,[vp]:i.LINEAR_MIPMAP_NEAREST,[la]:i.LINEAR_MIPMAP_LINEAR},we={[Lp]:i.NEVER,[Bp]:i.ALWAYS,[Dp]:i.LESS,[Id]:i.LEQUAL,[Up]:i.EQUAL,[Fp]:i.GEQUAL,[Np]:i.GREATER,[Op]:i.NOTEQUAL};function J(C,E,ne){if(ne?(i.texParameteri(C,i.TEXTURE_WRAP_S,re[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,re[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,re[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,he[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,he[E.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Li||E.wrapT!==Li)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,I(E.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,I(E.minFilter)),E.minFilter!==ii&&E.minFilter!==Mi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ye=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===ii||E.minFilter!==vl&&E.minFilter!==la||E.type===ys&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ca&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(C,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function fe(C,E){let ne=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",L));let ye=E.source,be=p.get(ye);be===void 0&&(be={},p.set(ye,be));let Se=q(E);if(Se!==C.__cacheKey){be[Se]===void 0&&(be[Se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ne=!0),be[Se].usedTimes++;let je=be[C.__cacheKey];je!==void 0&&(be[C.__cacheKey].usedTimes--,je.usedTimes===0&&R(E)),C.__cacheKey=Se,C.__webglTexture=be[Se].texture}return ne}function Te(C,E,ne){let ye=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ye=i.TEXTURE_3D);let be=fe(C,E),Se=E.source;t.bindTexture(ye,C.__webglTexture,i.TEXTURE0+ne);let je=n.get(Se);if(Se.version!==je.__version||be===!0){t.activeTexture(i.TEXTURE0+ne);let Oe=an.getPrimaries(an.workingColorSpace),Fe=E.colorSpace===bi?null:an.getPrimaries(E.colorSpace),ot=E.colorSpace===bi||Oe===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let bt=g(E)&&y(E.image)===!1,xe=M(E.image,bt,!1,s.maxTextureSize);xe=gt(E,xe);let jt=y(xe)||o,Et=r.convert(E.format,E.colorSpace),dt=r.convert(E.type),st=A(E.internalFormat,Et,dt,E.colorSpace,E.isVideoTexture);J(ye,E,jt);let Xe,ft=E.mipmaps,qt=o&&E.isVideoTexture!==!0&&st!==Rd,gn=je.__version===void 0||be===!0,At=N(E,xe,jt);if(E.isDepthTexture)st=i.DEPTH_COMPONENT,o?E.type===ys?st=i.DEPTH_COMPONENT32F:E.type===gs?st=i.DEPTH_COMPONENT24:E.type===Ws?st=i.DEPTH24_STENCIL8:st=i.DEPTH_COMPONENT16:E.type===ys&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Xs&&st===i.DEPTH_COMPONENT&&E.type!==Kc&&E.type!==gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=gs,dt=r.convert(E.type)),E.format===Ur&&st===i.DEPTH_COMPONENT&&(st=i.DEPTH_STENCIL,E.type!==Ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ws,dt=r.convert(E.type))),gn&&(qt?t.texStorage2D(i.TEXTURE_2D,1,st,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,st,xe.width,xe.height,0,Et,dt,null));else if(E.isDataTexture)if(ft.length>0&&jt){qt&&gn&&t.texStorage2D(i.TEXTURE_2D,At,st,ft[0].width,ft[0].height);for(let Pe=0,H=ft.length;Pe<H;Pe++)Xe=ft[Pe],qt?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Xe.width,Xe.height,Et,dt,Xe.data):t.texImage2D(i.TEXTURE_2D,Pe,st,Xe.width,Xe.height,0,Et,dt,Xe.data);E.generateMipmaps=!1}else qt?(gn&&t.texStorage2D(i.TEXTURE_2D,At,st,xe.width,xe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe.width,xe.height,Et,dt,xe.data)):t.texImage2D(i.TEXTURE_2D,0,st,xe.width,xe.height,0,Et,dt,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qt&&gn&&t.texStorage3D(i.TEXTURE_2D_ARRAY,At,st,ft[0].width,ft[0].height,xe.depth);for(let Pe=0,H=ft.length;Pe<H;Pe++)Xe=ft[Pe],E.format!==Di?Et!==null?qt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,Xe.width,Xe.height,xe.depth,Et,Xe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Pe,st,Xe.width,Xe.height,xe.depth,0,Xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,Xe.width,Xe.height,xe.depth,Et,dt,Xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Pe,st,Xe.width,Xe.height,xe.depth,0,Et,dt,Xe.data)}else{qt&&gn&&t.texStorage2D(i.TEXTURE_2D,At,st,ft[0].width,ft[0].height);for(let Pe=0,H=ft.length;Pe<H;Pe++)Xe=ft[Pe],E.format!==Di?Et!==null?qt?t.compressedTexSubImage2D(i.TEXTURE_2D,Pe,0,0,Xe.width,Xe.height,Et,Xe.data):t.compressedTexImage2D(i.TEXTURE_2D,Pe,st,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Xe.width,Xe.height,Et,dt,Xe.data):t.texImage2D(i.TEXTURE_2D,Pe,st,Xe.width,Xe.height,0,Et,dt,Xe.data)}else if(E.isDataArrayTexture)qt?(gn&&t.texStorage3D(i.TEXTURE_2D_ARRAY,At,st,xe.width,xe.height,xe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Et,dt,xe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,st,xe.width,xe.height,xe.depth,0,Et,dt,xe.data);else if(E.isData3DTexture)qt?(gn&&t.texStorage3D(i.TEXTURE_3D,At,st,xe.width,xe.height,xe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Et,dt,xe.data)):t.texImage3D(i.TEXTURE_3D,0,st,xe.width,xe.height,xe.depth,0,Et,dt,xe.data);else if(E.isFramebufferTexture){if(gn)if(qt)t.texStorage2D(i.TEXTURE_2D,At,st,xe.width,xe.height);else{let Pe=xe.width,H=xe.height;for(let De=0;De<At;De++)t.texImage2D(i.TEXTURE_2D,De,st,Pe,H,0,Et,dt,null),Pe>>=1,H>>=1}}else if(ft.length>0&&jt){qt&&gn&&t.texStorage2D(i.TEXTURE_2D,At,st,ft[0].width,ft[0].height);for(let Pe=0,H=ft.length;Pe<H;Pe++)Xe=ft[Pe],qt?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Et,dt,Xe):t.texImage2D(i.TEXTURE_2D,Pe,st,Et,dt,Xe);E.generateMipmaps=!1}else qt?(gn&&t.texStorage2D(i.TEXTURE_2D,At,st,xe.width,xe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,dt,xe)):t.texImage2D(i.TEXTURE_2D,0,st,Et,dt,xe);S(E,jt)&&v(ye),je.__version=Se.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function He(C,E,ne){if(E.image.length!==6)return;let ye=fe(C,E),be=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+ne);let Se=n.get(be);if(be.version!==Se.__version||ye===!0){t.activeTexture(i.TEXTURE0+ne);let je=an.getPrimaries(an.workingColorSpace),Oe=E.colorSpace===bi?null:an.getPrimaries(E.colorSpace),Fe=E.colorSpace===bi||je===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ot=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let Pe=0;Pe<6;Pe++)!ot&&!bt?xe[Pe]=M(E.image[Pe],!1,!0,s.maxCubemapSize):xe[Pe]=bt?E.image[Pe].image:E.image[Pe],xe[Pe]=gt(E,xe[Pe]);let jt=xe[0],Et=y(jt)||o,dt=r.convert(E.format,E.colorSpace),st=r.convert(E.type),Xe=A(E.internalFormat,dt,st,E.colorSpace),ft=o&&E.isVideoTexture!==!0,qt=Se.__version===void 0||ye===!0,gn=N(E,jt,Et);J(i.TEXTURE_CUBE_MAP,E,Et);let At;if(ot){ft&&qt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,gn,Xe,jt.width,jt.height);for(let Pe=0;Pe<6;Pe++){At=xe[Pe].mipmaps;for(let H=0;H<At.length;H++){let De=At[H];E.format!==Di?dt!==null?ft?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H,0,0,De.width,De.height,dt,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H,Xe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H,0,0,De.width,De.height,dt,st,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H,Xe,De.width,De.height,0,dt,st,De.data)}}}else{At=E.mipmaps,ft&&qt&&(At.length>0&&gn++,t.texStorage2D(i.TEXTURE_CUBE_MAP,gn,Xe,xe[0].width,xe[0].height));for(let Pe=0;Pe<6;Pe++)if(bt){ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,xe[Pe].width,xe[Pe].height,dt,st,xe[Pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Xe,xe[Pe].width,xe[Pe].height,0,dt,st,xe[Pe].data);for(let H=0;H<At.length;H++){let Ue=At[H].image[Pe].image;ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H+1,0,0,Ue.width,Ue.height,dt,st,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H+1,Xe,Ue.width,Ue.height,0,dt,st,Ue.data)}}else{ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,dt,st,xe[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Xe,dt,st,xe[Pe]);for(let H=0;H<At.length;H++){let De=At[H];ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H+1,0,0,dt,st,De.image[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,H+1,Xe,dt,st,De.image[Pe])}}}S(E,Et)&&v(i.TEXTURE_CUBE_MAP),Se.__version=be.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function $e(C,E,ne,ye,be,Se){let je=r.convert(ne.format,ne.colorSpace),Oe=r.convert(ne.type),Fe=A(ne.internalFormat,je,Oe,ne.colorSpace);if(!n.get(E).__hasExternalTextures){let bt=Math.max(1,E.width>>Se),xe=Math.max(1,E.height>>Se);be===i.TEXTURE_3D||be===i.TEXTURE_2D_ARRAY?t.texImage3D(be,Se,Fe,bt,xe,E.depth,0,je,Oe,null):t.texImage2D(be,Se,Fe,bt,xe,0,je,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),We(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,be,n.get(ne).__webglTexture,0,et(E)):(be===i.TEXTURE_2D||be>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,be,n.get(ne).__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,E,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ye=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ne||We(E)){let be=E.depthTexture;be&&be.isDepthTexture&&(be.type===ys?ye=i.DEPTH_COMPONENT32F:be.type===gs&&(ye=i.DEPTH_COMPONENT24));let Se=et(E);We(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ye,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ye,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ye,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let ye=et(E);ne&&We(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,E.width,E.height):We(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let ye=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let be=0;be<ye.length;be++){let Se=ye[be],je=r.convert(Se.format,Se.colorSpace),Oe=r.convert(Se.type),Fe=A(Se.internalFormat,je,Oe,Se.colorSpace),ot=et(E);ne&&We(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Fe,E.width,E.height):We(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Fe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Fe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);let ye=n.get(E.depthTexture).__webglTexture,be=et(E);if(E.depthTexture.format===Xs)We(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(E.depthTexture.format===Ur)We(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Qe(C){let E=n.get(C),ne=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ut(E.__webglFramebuffer,C)}else if(ne){E.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ye]),E.__webglDepthbuffer[ye]=i.createRenderbuffer(),ht(E.__webglDepthbuffer[ye],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),ht(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(C,E,ne){let ye=n.get(C);E!==void 0&&$e(ye.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&Qe(C)}function j(C){let E=C.texture,ne=n.get(C),ye=n.get(E);C.addEventListener("dispose",Y),C.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=E.version,a.memory.textures++);let be=C.isWebGLCubeRenderTarget===!0,Se=C.isWebGLMultipleRenderTargets===!0,je=y(C)||o;if(be){ne.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(o&&E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer[Oe]=[];for(let Fe=0;Fe<E.mipmaps.length;Fe++)ne.__webglFramebuffer[Oe][Fe]=i.createFramebuffer()}else ne.__webglFramebuffer[Oe]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Oe=0;Oe<E.mipmaps.length;Oe++)ne.__webglFramebuffer[Oe]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if(Se)if(s.drawBuffers){let Oe=C.texture;for(let Fe=0,ot=Oe.length;Fe<ot;Fe++){let bt=n.get(Oe[Fe]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&We(C)===!1){let Oe=Se?E:[E];ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Fe=0;Fe<Oe.length;Fe++){let ot=Oe[Fe];ne.__webglColorRenderbuffer[Fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[Fe]);let bt=r.convert(ot.format,ot.colorSpace),xe=r.convert(ot.type),jt=A(ot.internalFormat,bt,xe,ot.colorSpace,C.isXRRenderTarget===!0),Et=et(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,jt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(ne.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),J(i.TEXTURE_CUBE_MAP,E,je);for(let Oe=0;Oe<6;Oe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)$e(ne.__webglFramebuffer[Oe][Fe],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Fe);else $e(ne.__webglFramebuffer[Oe],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);S(E,je)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){let Oe=C.texture;for(let Fe=0,ot=Oe.length;Fe<ot;Fe++){let bt=Oe[Fe],xe=n.get(bt);t.bindTexture(i.TEXTURE_2D,xe.__webglTexture),J(i.TEXTURE_2D,bt,je),$e(ne.__webglFramebuffer,C,bt,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,0),S(bt,je)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Oe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Oe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Oe,ye.__webglTexture),J(Oe,E,je),o&&E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)$e(ne.__webglFramebuffer[Fe],C,E,i.COLOR_ATTACHMENT0,Oe,Fe);else $e(ne.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,Oe,0);S(E,je)&&v(Oe),t.unbindTexture()}C.depthBuffer&&Qe(C)}function Je(C){let E=y(C)||o,ne=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ye=0,be=ne.length;ye<be;ye++){let Se=ne[ye];if(S(Se,E)){let je=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Oe=n.get(Se).__webglTexture;t.bindTexture(je,Oe),v(je),t.unbindTexture()}}}function qe(C){if(o&&C.samples>0&&We(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],ne=C.width,ye=C.height,be=i.COLOR_BUFFER_BIT,Se=[],je=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(C),Fe=C.isWebGLMultipleRenderTargets===!0;if(Fe)for(let ot=0;ot<E.length;ot++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let ot=0;ot<E.length;ot++){Se.push(i.COLOR_ATTACHMENT0+ot),C.depthBuffer&&Se.push(je);let bt=Oe.__ignoreDepthValues!==void 0?Oe.__ignoreDepthValues:!1;if(bt===!1&&(C.depthBuffer&&(be|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(be|=i.STENCIL_BUFFER_BIT)),Fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[ot]),bt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[je]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[je])),Fe){let xe=n.get(E[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,ne,ye,0,0,ne,ye,be,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Fe)for(let ot=0;ot<E.length;ot++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[ot]);let bt=n.get(E[ot]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,bt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}}function et(C){return Math.min(s.maxSamples,C.samples)}function We(C){let E=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function tt(C){let E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function gt(C,E){let ne=C.colorSpace,ye=C.format,be=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===oc||ne!==ts&&ne!==bi&&(an.getTransfer(ne)===mn?o===!1?e.has("EXT_sRGB")===!0&&ye===Di?(C.format=oc,C.minFilter=Mi,C.generateMipmaps=!1):E=xo.sRGBToLinear(E):(ye!==Di||be!==vs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),E}this.allocateTextureUnit=F,this.resetTextureUnits=ve,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=se,this.rebindTextures=le,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=We}function Rx(i,e,t){let n=t.isWebGL2;function s(r,a=bi){let o,l=an.getTransfer(a);if(r===vs)return i.UNSIGNED_BYTE;if(r===Sd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ed)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Mp)return i.BYTE;if(r===bp)return i.SHORT;if(r===Kc)return i.UNSIGNED_SHORT;if(r===bd)return i.INT;if(r===gs)return i.UNSIGNED_INT;if(r===ys)return i.FLOAT;if(r===ca)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Sp)return i.ALPHA;if(r===Di)return i.RGBA;if(r===Ep)return i.LUMINANCE;if(r===Tp)return i.LUMINANCE_ALPHA;if(r===Xs)return i.DEPTH_COMPONENT;if(r===Ur)return i.DEPTH_STENCIL;if(r===oc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===wp)return i.RED;if(r===Td)return i.RED_INTEGER;if(r===Ap)return i.RG;if(r===wd)return i.RG_INTEGER;if(r===Ad)return i.RGBA_INTEGER;if(r===Ml||r===bl||r===Sl||r===El)if(l===mn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ml)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===El)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ml)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===El)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xh||r===qh||r===Yh||r===$h)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Xh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$h)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Kh||r===Zh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Kh)return l===mn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Zh)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jh||r===jh||r===Qh||r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===au||r===ou||r===lu||r===cu||r===hu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Jh)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jh)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qh)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===eu)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tu)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nu)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===iu)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===su)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ru)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===au)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ou)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lu)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cu)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hu)return l===mn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===uu||r===du)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Tl)return l===mn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===du)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rp||r===fu||r===pu||r===mu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Tl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===fu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ws?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var bc=class extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gi=class extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cx={type:"move"},ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let y=t.getJointPose(M,n),g=this._getHandJoint(c,M);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],p=h.position.distanceTo(m.position),f=.02,x=.005;c.inputState.pinching&&p>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sc=class extends bs{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,p=null,f=null,x=null,M=t.getContextAttributes(),y=null,g=null,S=[],v=[],A=new Ge,N=null,I=new si;I.layers.enable(1),I.viewport=new Wn;let L=new si;L.layers.enable(2),L.viewport=new Wn;let Y=[I,L],T=new bc;T.layers.enable(1),T.layers.enable(2);let R=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=S[J];return fe===void 0&&(fe=new ia,S[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=S[J];return fe===void 0&&(fe=new ia,S[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=S[J];return fe===void 0&&(fe=new ia,S[J]=fe),fe.getHandSpace()};function ae(J){let fe=v.indexOf(J.inputSource);if(fe===-1)return;let Te=S[fe];Te!==void 0&&(Te.update(J.inputSource,J.frame,c||a),Te.dispatchEvent({type:J.type,data:J.inputSource}))}function ve(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",ve),s.removeEventListener("inputsourceschange",F);for(let J=0;J<S.length;J++){let fe=v[J];fe!==null&&(v[J]=null,S[J].disconnect(fe))}R=null,$=null,e.setRenderTarget(y),f=null,p=null,m=null,s=null,g=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",ve),s.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let fe={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new ns(f.framebufferWidth,f.framebufferHeight,{format:Di,type:vs,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let fe=null,Te=null,He=null;M.depth&&(He=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?Ur:Xs,Te=M.stencil?Ws:gs);let $e={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:r};m=new XRWebGLBinding(s,t),p=m.createProjectionLayer($e),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),g=new ns(p.textureWidth,p.textureHeight,{format:Di,type:vs,depthTexture:new Ro(p.textureWidth,p.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});let ht=e.properties.get(g);ht.__ignoreDepthValues=p.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(J){for(let fe=0;fe<J.removed.length;fe++){let Te=J.removed[fe],He=v.indexOf(Te);He>=0&&(v[He]=null,S[He].disconnect(Te))}for(let fe=0;fe<J.added.length;fe++){let Te=J.added[fe],He=v.indexOf(Te);if(He===-1){for(let ht=0;ht<S.length;ht++)if(ht>=v.length){v.push(Te),He=ht;break}else if(v[ht]===null){v[ht]=Te,He=ht;break}if(He===-1)break}let $e=S[He];$e&&$e.connect(Te)}}let q=new k,z=new k;function V(J,fe,Te){q.setFromMatrixPosition(fe.matrixWorld),z.setFromMatrixPosition(Te.matrixWorld);let He=q.distanceTo(z),$e=fe.projectionMatrix.elements,ht=Te.projectionMatrix.elements,ut=$e[14]/($e[10]-1),Qe=$e[14]/($e[10]+1),le=($e[9]+1)/$e[5],j=($e[9]-1)/$e[5],Je=($e[8]-1)/$e[0],qe=(ht[8]+1)/ht[0],et=ut*Je,We=ut*qe,tt=He/(-Je+qe),gt=tt*-Je;fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(gt),J.translateZ(tt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();let C=ut+tt,E=Qe+tt,ne=et-gt,ye=We+(He-gt),be=le*Qe/E*C,Se=j*Qe/E*C;J.projectionMatrix.makePerspective(ne,ye,be,Se,C,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function K(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;T.near=L.near=I.near=J.near,T.far=L.far=I.far=J.far,(R!==T.near||$!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,$=T.far);let fe=J.parent,Te=T.cameras;K(T,fe);for(let He=0;He<Te.length;He++)K(Te[He],fe);Te.length===2?V(T,I,L):T.projectionMatrix.copy(I.projectionMatrix),se(J,T,fe)};function se(J,fe,Te){Te===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Te.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=lc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)};let re=null;function he(J,fe){if(h=fe.getViewerPose(c||a),x=fe,h!==null){let Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(g,f.framebuffer),e.setRenderTarget(g));let He=!1;Te.length!==T.cameras.length&&(T.cameras.length=0,He=!0);for(let $e=0;$e<Te.length;$e++){let ht=Te[$e],ut=null;if(f!==null)ut=f.getViewport(ht);else{let le=m.getViewSubImage(p,ht);ut=le.viewport,$e===0&&(e.setRenderTargetTextures(g,le.colorTexture,p.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(g))}let Qe=Y[$e];Qe===void 0&&(Qe=new si,Qe.layers.enable($e),Qe.viewport=new Wn,Y[$e]=Qe),Qe.matrix.fromArray(ht.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ht.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(ut.x,ut.y,ut.width,ut.height),$e===0&&(T.matrix.copy(Qe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),He===!0&&T.cameras.push(Qe)}}for(let Te=0;Te<S.length;Te++){let He=v[Te],$e=S[Te];He!==null&&$e!==void 0&&$e.update(He,fe,c||a)}re&&re(J,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),x=null}let we=new Nd;we.setAnimationLoop(he),this.setAnimationLoop=function(J){re=J},this.dispose=function(){}}};function Px(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,Ud(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,S,v,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(y,g):g.isMeshToonMaterial?(r(y,g),m(y,g)):g.isMeshPhongMaterial?(r(y,g),h(y,g)):g.isMeshStandardMaterial?(r(y,g),p(y,g),g.isMeshPhysicalMaterial&&f(y,g,A)):g.isMeshMatcapMaterial?(r(y,g),x(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),M(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(a(y,g),g.isLineDashedMaterial&&o(y,g)):g.isPointsMaterial?l(y,g,S,v):g.isSpriteMaterial?c(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===oi&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===oi&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let S=e.get(g).envMap;if(S&&(y.envMap.value=S,y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function a(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function o(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function l(y,g,S,v){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*S,y.scale.value=v*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function h(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function p(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function f(y,g,S){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===oi&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=S.texture,y.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,g){g.matcap&&(y.matcap.value=g.matcap)}function M(y,g){let S=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(S.matrixWorld),y.nearDistance.value=S.shadow.camera.near,y.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ix(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let A=v.program;n.uniformBlockBinding(S,A)}function c(S,v){let A=s[S.id];A===void 0&&(x(S),A=h(S),s[S.id]=A,S.addEventListener("dispose",y));let N=v.program;n.updateUBOMapping(S,N);let I=e.render.frame;r[S.id]!==I&&(p(S),r[S.id]=I)}function h(S){let v=m();S.__bindingPointIndex=v;let A=i.createBuffer(),N=S.__size,I=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,N,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function m(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let v=s[S.id],A=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let I=0,L=A.length;I<L;I++){let Y=Array.isArray(A[I])?A[I]:[A[I]];for(let T=0,R=Y.length;T<R;T++){let $=Y[T];if(f($,I,T,N)===!0){let ae=$.__offset,ve=Array.isArray($.value)?$.value:[$.value],F=0;for(let q=0;q<ve.length;q++){let z=ve[q],V=M(z);typeof z=="number"||typeof z=="boolean"?($.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,ae+F,$.__data)):z.isMatrix3?($.__data[0]=z.elements[0],$.__data[1]=z.elements[1],$.__data[2]=z.elements[2],$.__data[3]=0,$.__data[4]=z.elements[3],$.__data[5]=z.elements[4],$.__data[6]=z.elements[5],$.__data[7]=0,$.__data[8]=z.elements[6],$.__data[9]=z.elements[7],$.__data[10]=z.elements[8],$.__data[11]=0):(z.toArray($.__data,F),F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ae,$.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,v,A,N){let I=S.value,L=v+"_"+A;if(N[L]===void 0)return typeof I=="number"||typeof I=="boolean"?N[L]=I:N[L]=I.clone(),!0;{let Y=N[L];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return N[L]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function x(S){let v=S.uniforms,A=0,N=16;for(let L=0,Y=v.length;L<Y;L++){let T=Array.isArray(v[L])?v[L]:[v[L]];for(let R=0,$=T.length;R<$;R++){let ae=T[R],ve=Array.isArray(ae.value)?ae.value:[ae.value];for(let F=0,q=ve.length;F<q;F++){let z=ve[F],V=M(z),K=A%N;K!==0&&N-K<V.boundary&&(A+=N-K),ae.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=V.storage}}}let I=A%N;return I>0&&(A+=N-I),S.__size=A,S.__cache={},this}function M(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function y(S){let v=S.target;v.removeEventListener("dispose",y);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}var fa=class{constructor(e={}){let{canvas:t=Hp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let f=new Uint32Array(4),x=new Int32Array(4),M=null,y=null,g=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this._useLegacyLights=!1,this.toneMapping=_s,this.toneMappingExposure=1;let v=this,A=!1,N=0,I=0,L=null,Y=-1,T=null,R=new Wn,$=new Wn,ae=null,ve=new xt(0),F=0,q=t.width,z=t.height,V=1,K=null,se=null,re=new Wn(0,0,q,z),he=new Wn(0,0,q,z),we=!1,J=new da,fe=!1,Te=!1,He=null,$e=new Un,ht=new Ge,ut=new k,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return L===null?V:1}let j=n;function Je(w,G){for(let ee=0;ee<w.length;ee++){let Z=w[ee],Q=t.getContext(Z,G);if(Q!==null)return Q}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",De,!1),j===null){let G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),j=Je(G,w),j===null)throw Je(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let qe,et,We,tt,gt,C,E,ne,ye,be,Se,je,Oe,Fe,ot,bt,xe,jt,Et,dt,st,Xe,ft,qt;function gn(){qe=new Z0(j),et=new W0(j,qe,e),qe.init(et),Xe=new Rx(j,qe,et),We=new wx(j,qe,et),tt=new Q0(j),gt=new px,C=new Ax(j,qe,We,gt,et,Xe,tt),E=new q0(v),ne=new K0(v),ye=new om(j,et),ft=new V0(j,qe,ye,et),be=new J0(j,ye,tt,ft),Se=new iy(j,be,ye,tt),Et=new ny(j,et,C),bt=new X0(gt),je=new fx(v,E,ne,qe,et,ft,bt),Oe=new Px(v,gt),Fe=new gx,ot=new bx(qe,et),jt=new z0(v,E,ne,We,Se,p,l),xe=new Tx(v,Se,et),qt=new Ix(j,tt,et,We),dt=new G0(j,qe,tt,et),st=new j0(j,qe,tt,et),tt.programs=je.programs,v.capabilities=et,v.extensions=qe,v.properties=gt,v.renderLists=Fe,v.shadowMap=xe,v.state=We,v.info=tt}gn();let At=new Sc(v,j);this.xr=At,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let w=qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(q,z,!1))},this.getSize=function(w){return w.set(q,z)},this.setSize=function(w,G,ee=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,z=G,t.width=Math.floor(w*V),t.height=Math.floor(G*V),ee===!0&&(t.style.width=w+"px",t.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(q*V,z*V).floor()},this.setDrawingBufferSize=function(w,G,ee){q=w,z=G,V=ee,t.width=Math.floor(w*ee),t.height=Math.floor(G*ee),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,G,ee,Z){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,G,ee,Z),We.viewport(R.copy(re).multiplyScalar(V).floor())},this.getScissor=function(w){return w.copy(he)},this.setScissor=function(w,G,ee,Z){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,G,ee,Z),We.scissor($.copy(he).multiplyScalar(V).floor())},this.getScissorTest=function(){return we},this.setScissorTest=function(w){We.setScissorTest(we=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(w=!0,G=!0,ee=!0){let Z=0;if(w){let Q=!1;if(L!==null){let Ne=L.texture.format;Q=Ne===Ad||Ne===wd||Ne===Td}if(Q){let Ne=L.texture.type,_e=Ne===vs||Ne===gs||Ne===Kc||Ne===Ws||Ne===Sd||Ne===Ed,Re=jt.getClearColor(),ze=jt.getClearAlpha(),Ke=Re.r,pt=Re.g,_t=Re.b;_e?(f[0]=Ke,f[1]=pt,f[2]=_t,f[3]=ze,j.clearBufferuiv(j.COLOR,0,f)):(x[0]=Ke,x[1]=pt,x[2]=_t,x[3]=ze,j.clearBufferiv(j.COLOR,0,x))}else Z|=j.COLOR_BUFFER_BIT}G&&(Z|=j.DEPTH_BUFFER_BIT),ee&&(Z|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Fe.dispose(),ot.dispose(),gt.dispose(),E.dispose(),ne.dispose(),Se.dispose(),ft.dispose(),qt.dispose(),je.dispose(),At.dispose(),At.removeEventListener("sessionstart",Ut),At.removeEventListener("sessionend",ke),He&&(He.dispose(),He=null),St.stop()};function Pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=tt.autoReset,G=xe.enabled,ee=xe.autoUpdate,Z=xe.needsUpdate,Q=xe.type;gn(),tt.autoReset=w,xe.enabled=G,xe.autoUpdate=ee,xe.needsUpdate=Z,xe.type=Q}function De(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ue(w){let G=w.target;G.removeEventListener("dispose",Ue),at(G)}function at(w){rt(w),gt.remove(w)}function rt(w){let G=gt.get(w).programs;G!==void 0&&(G.forEach(function(ee){je.releaseProgram(ee)}),w.isShaderMaterial&&je.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,ee,Z,Q,Ne){G===null&&(G=Qe);let _e=Q.isMesh&&Q.matrixWorld.determinant()<0,Re=Xi(w,G,ee,Z,Q);We.setMaterial(Z,_e);let ze=ee.index,Ke=1;if(Z.wireframe===!0){if(ze=be.getWireframeAttribute(ee),ze===void 0)return;Ke=2}let pt=ee.drawRange,_t=ee.attributes.position,on=pt.start*Ke,Ct=(pt.start+pt.count)*Ke;Ne!==null&&(on=Math.max(on,Ne.start*Ke),Ct=Math.min(Ct,(Ne.start+Ne.count)*Ke)),ze!==null?(on=Math.max(on,0),Ct=Math.min(Ct,ze.count)):_t!=null&&(on=Math.max(on,0),Ct=Math.min(Ct,_t.count));let nn=Ct-on;if(nn<0||nn===1/0)return;ft.setup(Q,Z,Re,ee,ze);let Hn,Tt=dt;if(ze!==null&&(Hn=ye.get(ze),Tt=st,Tt.setIndex(Hn)),Q.isMesh)Z.wireframe===!0?(We.setLineWidth(Z.wireframeLinewidth*le()),Tt.setMode(j.LINES)):Tt.setMode(j.TRIANGLES);else if(Q.isLine){let Ye=Z.linewidth;Ye===void 0&&(Ye=1),We.setLineWidth(Ye*le()),Q.isLineSegments?Tt.setMode(j.LINES):Q.isLineLoop?Tt.setMode(j.LINE_LOOP):Tt.setMode(j.LINE_STRIP)}else Q.isPoints?Tt.setMode(j.POINTS):Q.isSprite&&Tt.setMode(j.TRIANGLES);if(Q.isBatchedMesh)Tt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Tt.renderInstances(on,nn,Q.count);else if(ee.isInstancedBufferGeometry){let Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Nn=Math.min(ee.instanceCount,Ye);Tt.renderInstances(on,nn,Nn)}else Tt.render(on,nn)};function tn(w,G,ee){w.transparent===!0&&w.side===Sn&&w.forceSinglePass===!1?(w.side=oi,w.needsUpdate=!0,yn(w,G,ee),w.side=Ms,w.needsUpdate=!0,yn(w,G,ee),w.side=Sn):yn(w,G,ee)}this.compile=function(w,G,ee=null){ee===null&&(ee=w),y=ot.get(ee),y.init(),S.push(y),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),w!==ee&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights(v._useLegacyLights);let Z=new Set;return w.traverse(function(Q){let Ne=Q.material;if(Ne)if(Array.isArray(Ne))for(let _e=0;_e<Ne.length;_e++){let Re=Ne[_e];tn(Re,ee,Q),Z.add(Re)}else tn(Ne,ee,Q),Z.add(Ne)}),S.pop(),y=null,Z},this.compileAsync=function(w,G,ee=null){let Z=this.compile(w,G,ee);return new Promise(Q=>{function Ne(){if(Z.forEach(function(_e){gt.get(_e).currentProgram.isReady()&&Z.delete(_e)}),Z.size===0){Q(w);return}setTimeout(Ne,10)}qe.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let kt=null;function Rt(w){kt&&kt(w)}function Ut(){St.stop()}function ke(){St.start()}let St=new Nd;St.setAnimationLoop(Rt),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(w){kt=w,At.setAnimationLoop(w),w===null?St.stop():St.start()},At.addEventListener("sessionstart",Ut),At.addEventListener("sessionend",ke),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(G),G=At.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,G,L),y=ot.get(w,S.length),y.init(),S.push(y),$e.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix($e),Te=this.localClippingEnabled,fe=bt.init(this.clippingPlanes,Te),M=Fe.get(w,g.length),M.init(),g.push(M),Cn(w,G,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(K,se),this.info.render.frame++,fe===!0&&bt.beginShadows();let ee=y.state.shadowsArray;if(xe.render(ee,w,G),fe===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(M,w),y.setupLights(v._useLegacyLights),G.isArrayCamera){let Z=G.cameras;for(let Q=0,Ne=Z.length;Q<Ne;Q++){let _e=Z[Q];yi(M,w,_e,_e.viewport)}}else yi(M,w,G);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(v,w,G),ft.resetDefaultState(),Y=-1,T=null,S.pop(),S.length>0?y=S[S.length-1]:y=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function Cn(w,G,ee,Z){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){Z&&ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4($e);let _e=Se.update(w),Re=w.material;Re.visible&&M.push(w,_e,Re,ee,ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){let _e=Se.update(w),Re=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ut.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ut.copy(_e.boundingSphere.center)),ut.applyMatrix4(w.matrixWorld).applyMatrix4($e)),Array.isArray(Re)){let ze=_e.groups;for(let Ke=0,pt=ze.length;Ke<pt;Ke++){let _t=ze[Ke],on=Re[_t.materialIndex];on&&on.visible&&M.push(w,_e,on,ee,ut.z,_t)}}else Re.visible&&M.push(w,_e,Re,ee,ut.z,null)}}let Ne=w.children;for(let _e=0,Re=Ne.length;_e<Re;_e++)Cn(Ne[_e],G,ee,Z)}function yi(w,G,ee,Z){let Q=w.opaque,Ne=w.transmissive,_e=w.transparent;y.setupLightsView(ee),fe===!0&&bt.setGlobalState(v.clippingPlanes,ee),Ne.length>0&&Gi(Q,Ne,G,ee),Z&&We.viewport(R.copy(Z)),Q.length>0&&xi(Q,G,ee),Ne.length>0&&xi(Ne,G,ee),_e.length>0&&xi(_e,G,ee),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Gi(w,G,ee,Z){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;let Ne=et.isWebGL2;He===null&&(He=new ns(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")?ca:vs,minFilter:la,samples:Ne?4:0})),v.getDrawingBufferSize(ht),Ne?He.setSize(ht.x,ht.y):He.setSize(cc(ht.x),cc(ht.y));let _e=v.getRenderTarget();v.setRenderTarget(He),v.getClearColor(ve),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();let Re=v.toneMapping;v.toneMapping=_s,xi(w,ee,Z),C.updateMultisampleRenderTarget(He),C.updateRenderTargetMipmap(He);let ze=!1;for(let Ke=0,pt=G.length;Ke<pt;Ke++){let _t=G[Ke],on=_t.object,Ct=_t.geometry,nn=_t.material,Hn=_t.group;if(nn.side===Sn&&on.layers.test(Z.layers)){let Tt=nn.side;nn.side=oi,nn.needsUpdate=!0,Wi(on,ee,Z,Ct,nn,Hn),nn.side=Tt,nn.needsUpdate=!0,ze=!0}}ze===!0&&(C.updateMultisampleRenderTarget(He),C.updateRenderTargetMipmap(He)),v.setRenderTarget(_e),v.setClearColor(ve,F),v.toneMapping=Re}function xi(w,G,ee){let Z=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,Ne=w.length;Q<Ne;Q++){let _e=w[Q],Re=_e.object,ze=_e.geometry,Ke=Z===null?_e.material:Z,pt=_e.group;Re.layers.test(ee.layers)&&Wi(Re,G,ee,ze,Ke,pt)}}function Wi(w,G,ee,Z,Q,Ne){w.onBeforeRender(v,G,ee,Z,Q,Ne),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(v,G,ee,Z,w,Ne),Q.transparent===!0&&Q.side===Sn&&Q.forceSinglePass===!1?(Q.side=oi,Q.needsUpdate=!0,v.renderBufferDirect(ee,G,Z,Q,w,Ne),Q.side=Ms,Q.needsUpdate=!0,v.renderBufferDirect(ee,G,Z,Q,w,Ne),Q.side=Sn):v.renderBufferDirect(ee,G,Z,Q,w,Ne),w.onAfterRender(v,G,ee,Z,Q,Ne)}function yn(w,G,ee){G.isScene!==!0&&(G=Qe);let Z=gt.get(w),Q=y.state.lights,Ne=y.state.shadowsArray,_e=Q.state.version,Re=je.getParameters(w,Q.state,Ne,G,ee),ze=je.getProgramCacheKey(Re),Ke=Z.programs;Z.environment=w.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(w.isMeshStandardMaterial?ne:E).get(w.envMap||Z.environment),Ke===void 0&&(w.addEventListener("dispose",Ue),Ke=new Map,Z.programs=Ke);let pt=Ke.get(ze);if(pt!==void 0){if(Z.currentProgram===pt&&Z.lightsStateVersion===_e)return Cs(w,Re),pt}else Re.uniforms=je.getUniforms(w),w.onBuild(ee,Re,v),w.onBeforeCompile(Re,v),pt=je.acquireProgram(Re,ze),Ke.set(ze,pt),Z.uniforms=Re.uniforms;let _t=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(_t.clippingPlanes=bt.uniform),Cs(w,Re),Z.needsLights=Jo(w),Z.lightsStateVersion=_e,Z.needsLights&&(_t.ambientLightColor.value=Q.state.ambient,_t.lightProbe.value=Q.state.probe,_t.directionalLights.value=Q.state.directional,_t.directionalLightShadows.value=Q.state.directionalShadow,_t.spotLights.value=Q.state.spot,_t.spotLightShadows.value=Q.state.spotShadow,_t.rectAreaLights.value=Q.state.rectArea,_t.ltc_1.value=Q.state.rectAreaLTC1,_t.ltc_2.value=Q.state.rectAreaLTC2,_t.pointLights.value=Q.state.point,_t.pointLightShadows.value=Q.state.pointShadow,_t.hemisphereLights.value=Q.state.hemi,_t.directionalShadowMap.value=Q.state.directionalShadowMap,_t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,_t.spotShadowMap.value=Q.state.spotShadowMap,_t.spotLightMatrix.value=Q.state.spotLightMatrix,_t.spotLightMap.value=Q.state.spotLightMap,_t.pointShadowMap.value=Q.state.pointShadowMap,_t.pointShadowMatrix.value=Q.state.pointShadowMatrix),Z.currentProgram=pt,Z.uniformsList=null,pt}function js(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=Ir.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Cs(w,G){let ee=gt.get(w);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function Xi(w,G,ee,Z,Q){G.isScene!==!0&&(G=Qe),C.resetTextureUnits();let Ne=G.fog,_e=Z.isMeshStandardMaterial?G.environment:null,Re=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ts,ze=(Z.isMeshStandardMaterial?ne:E).get(Z.envMap||_e),Ke=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pt=!!ee.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),_t=!!ee.morphAttributes.position,on=!!ee.morphAttributes.normal,Ct=!!ee.morphAttributes.color,nn=_s;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(nn=v.toneMapping);let Hn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Tt=Hn!==void 0?Hn.length:0,Ye=gt.get(Z),Nn=y.state.lights;if(fe===!0&&(Te===!0||w!==T)){let zn=w===T&&Z.id===Y;bt.setState(Z,w,zn)}let $t=!1;Z.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Nn.state.version||Ye.outputColorSpace!==Re||Q.isBatchedMesh&&Ye.batching===!1||!Q.isBatchedMesh&&Ye.batching===!0||Q.isInstancedMesh&&Ye.instancing===!1||!Q.isInstancedMesh&&Ye.instancing===!0||Q.isSkinnedMesh&&Ye.skinning===!1||!Q.isSkinnedMesh&&Ye.skinning===!0||Q.isInstancedMesh&&Ye.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ye.instancingColor===!1&&Q.instanceColor!==null||Ye.envMap!==ze||Z.fog===!0&&Ye.fog!==Ne||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==bt.numPlanes||Ye.numIntersection!==bt.numIntersection)||Ye.vertexAlphas!==Ke||Ye.vertexTangents!==pt||Ye.morphTargets!==_t||Ye.morphNormals!==on||Ye.morphColors!==Ct||Ye.toneMapping!==nn||et.isWebGL2===!0&&Ye.morphTargetsCount!==Tt)&&($t=!0):($t=!0,Ye.__version=Z.version);let Pn=Ye.currentProgram;$t===!0&&(Pn=yn(Z,G,Q));let Qn=!1,qn=!1,qi=!1,dn=Pn.getUniforms(),Oi=Ye.uniforms;if(We.useProgram(Pn.program)&&(Qn=!0,qn=!0,qi=!0),Z.id!==Y&&(Y=Z.id,qn=!0),Qn||T!==w){dn.setValue(j,"projectionMatrix",w.projectionMatrix),dn.setValue(j,"viewMatrix",w.matrixWorldInverse);let zn=dn.map.cameraPosition;zn!==void 0&&zn.setValue(j,ut.setFromMatrixPosition(w.matrixWorld)),et.logarithmicDepthBuffer&&dn.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&dn.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,qn=!0,qi=!0)}if(Q.isSkinnedMesh){dn.setOptional(j,Q,"bindMatrix"),dn.setOptional(j,Q,"bindMatrixInverse");let zn=Q.skeleton;zn&&(et.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),dn.setValue(j,"boneTexture",zn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(dn.setOptional(j,Q,"batchingTexture"),dn.setValue(j,"batchingTexture",Q._matricesTexture,C));let Bt=ee.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0&&et.isWebGL2===!0)&&Et.update(Q,ee,Pn),(qn||Ye.receiveShadow!==Q.receiveShadow)&&(Ye.receiveShadow=Q.receiveShadow,dn.setValue(j,"receiveShadow",Q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Oi.envMap.value=ze,Oi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),qn&&(dn.setValue(j,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Ea(Oi,qi),Ne&&Z.fog===!0&&Oe.refreshFogUniforms(Oi,Ne),Oe.refreshMaterialUniforms(Oi,Z,V,z,He),Ir.upload(j,js(Ye),Oi,C)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ir.upload(j,js(Ye),Oi,C),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&dn.setValue(j,"center",Q.center),dn.setValue(j,"modelViewMatrix",Q.modelViewMatrix),dn.setValue(j,"normalMatrix",Q.normalMatrix),dn.setValue(j,"modelMatrix",Q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let zn=Z.uniformsGroups;for(let Ps=0,jo=zn.length;Ps<jo;Ps++)if(et.isWebGL2){let Ta=zn[Ps];qt.update(Ta,Pn),qt.bind(Ta,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function Ea(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Jo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,G,ee){gt.get(w.texture).__webglTexture=G,gt.get(w.depthTexture).__webglTexture=ee;let Z=gt.get(w);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=ee===void 0,Z.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,G){let ee=gt.get(w);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,ee=0){L=w,N=G,I=ee;let Z=!0,Q=null,Ne=!1,_e=!1;if(w){let ze=gt.get(w);ze.__useDefaultFramebuffer!==void 0?(We.bindFramebuffer(j.FRAMEBUFFER,null),Z=!1):ze.__webglFramebuffer===void 0?C.setupRenderTarget(w):ze.__hasExternalTextures&&C.rebindTextures(w,gt.get(w.texture).__webglTexture,gt.get(w.depthTexture).__webglTexture);let Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(_e=!0);let pt=gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(pt[G])?Q=pt[G][ee]:Q=pt[G],Ne=!0):et.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?Q=gt.get(w).__webglMultisampledFramebuffer:Array.isArray(pt)?Q=pt[ee]:Q=pt,R.copy(w.viewport),$.copy(w.scissor),ae=w.scissorTest}else R.copy(re).multiplyScalar(V).floor(),$.copy(he).multiplyScalar(V).floor(),ae=we;if(We.bindFramebuffer(j.FRAMEBUFFER,Q)&&et.drawBuffers&&Z&&We.drawBuffers(w,Q),We.viewport(R),We.scissor($),We.setScissorTest(ae),Ne){let ze=gt.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,ee)}else if(_e){let ze=gt.get(w.texture),Ke=G||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,ze.__webglTexture,ee||0,Ke)}Y=-1},this.readRenderTargetPixels=function(w,G,ee,Z,Q,Ne,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Re=Re[_e]),Re){We.bindFramebuffer(j.FRAMEBUFFER,Re);try{let ze=w.texture,Ke=ze.format,pt=ze.type;if(Ke!==Di&&Xe.convert(Ke)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let _t=pt===ca&&(qe.has("EXT_color_buffer_half_float")||et.isWebGL2&&qe.has("EXT_color_buffer_float"));if(pt!==vs&&Xe.convert(pt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(pt===ys&&(et.isWebGL2||qe.has("OES_texture_float")||qe.has("WEBGL_color_buffer_float")))&&!_t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-Z&&ee>=0&&ee<=w.height-Q&&j.readPixels(G,ee,Z,Q,Xe.convert(Ke),Xe.convert(pt),Ne)}finally{let ze=L!==null?gt.get(L).__webglFramebuffer:null;We.bindFramebuffer(j.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(w,G,ee=0){let Z=Math.pow(2,-ee),Q=Math.floor(G.image.width*Z),Ne=Math.floor(G.image.height*Z);C.setTexture2D(G,0),j.copyTexSubImage2D(j.TEXTURE_2D,ee,0,0,w.x,w.y,Q,Ne),We.unbindTexture()},this.copyTextureToTexture=function(w,G,ee,Z=0){let Q=G.image.width,Ne=G.image.height,_e=Xe.convert(ee.format),Re=Xe.convert(ee.type);C.setTexture2D(ee,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ee.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ee.unpackAlignment),G.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Z,w.x,w.y,Q,Ne,_e,Re,G.image.data):G.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Z,w.x,w.y,G.mipmaps[0].width,G.mipmaps[0].height,_e,G.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,Z,w.x,w.y,_e,Re,G.image),Z===0&&ee.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),We.unbindTexture()},this.copyTextureToTexture3D=function(w,G,ee,Z,Q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ne=w.max.x-w.min.x+1,_e=w.max.y-w.min.y+1,Re=w.max.z-w.min.z+1,ze=Xe.convert(Z.format),Ke=Xe.convert(Z.type),pt;if(Z.isData3DTexture)C.setTexture3D(Z,0),pt=j.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)C.setTexture2DArray(Z,0),pt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);let _t=j.getParameter(j.UNPACK_ROW_LENGTH),on=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Ct=j.getParameter(j.UNPACK_SKIP_PIXELS),nn=j.getParameter(j.UNPACK_SKIP_ROWS),Hn=j.getParameter(j.UNPACK_SKIP_IMAGES),Tt=ee.isCompressedTexture?ee.mipmaps[Q]:ee.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Tt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Tt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,w.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,w.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,w.min.z),ee.isDataTexture||ee.isData3DTexture?j.texSubImage3D(pt,Q,G.x,G.y,G.z,Ne,_e,Re,ze,Ke,Tt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(pt,Q,G.x,G.y,G.z,Ne,_e,Re,ze,Tt.data)):j.texSubImage3D(pt,Q,G.x,G.y,G.z,Ne,_e,Re,ze,Ke,Tt),j.pixelStorei(j.UNPACK_ROW_LENGTH,_t),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,on),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ct),j.pixelStorei(j.UNPACK_SKIP_ROWS,nn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Hn),Q===0&&Z.generateMipmaps&&j.generateMipmap(pt),We.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),We.unbindTexture()},this.resetState=function(){N=0,I=0,L=null,We.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Zc?"display-p3":"srgb",t.unpackColorSpace=an.workingColorSpace===Xo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$n?qs:Cd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qs?$n:ts}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ec=class extends fa{};Ec.prototype.isWebGL1Renderer=!0;var Co=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Po=class extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var pa=class extends Es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ad=new k,od=new k,ld=new Un,Jl=new ha,so=new Nr,Tc=class extends ri{constructor(e=new ci,t=new pa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ad.fromBufferAttribute(t,s-1),od.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ad.distanceTo(od);e.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;ld.copy(s).invert(),Jl.copy(e.ray).applyMatrix4(ld);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,h=new k,m=new k,p=new k,f=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){let g=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=f){let N=x.getX(v),I=x.getX(v+1);if(c.fromBufferAttribute(y,N),h.fromBufferAttribute(y,I),Jl.distanceSqToSegment(c,h,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let Y=e.ray.origin.distanceTo(p);Y<e.near||Y>e.far||t.push({distance:Y,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,a.start),S=Math.min(y.count,a.start+a.count);for(let v=g,A=S-1;v<A;v+=f){if(c.fromBufferAttribute(y,v),h.fromBufferAttribute(y,v+1),Jl.distanceSqToSegment(c,h,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(p);I<e.near||I>e.far||t.push({distance:I,point:m.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},cd=new k,hd=new k,Io=class extends Tc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)cd.fromBufferAttribute(t,s),hd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cd.distanceTo(hd);e.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Lo=class extends Si{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,f=(a-h)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ge:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new k,s=[],r=[],a=[],o=new k,l=new Un;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(jn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(jn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ma=class extends Ei{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Ge,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*h-f*m+this.aX,c=p*m+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wc=class extends ma{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,m){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+m)+(l-o)/m;p*=h,f*=h,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ro=new k,jl=new jc,Ql=new jc,ec=new jc,Ac=class extends Ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ro.subVectors(s[0],s[1]).add(s[0]),c=ro);let m=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(m),f),M=Math.pow(m.distanceToSquared(p),f),y=Math.pow(p.distanceToSquared(h),f);M<1e-4&&(M=1),x<1e-4&&(x=M),y<1e-4&&(y=M),jl.initNonuniformCatmullRom(c.x,m.x,p.x,h.x,x,M,y),Ql.initNonuniformCatmullRom(c.y,m.y,p.y,h.y,x,M,y),ec.initNonuniformCatmullRom(c.z,m.z,p.z,h.z,x,M,y)}else this.curveType==="catmullrom"&&(jl.initCatmullRom(c.x,m.x,p.x,h.x,this.tension),Ql.initCatmullRom(c.y,m.y,p.y,h.y,this.tension),ec.initCatmullRom(c.z,m.z,p.z,h.z,this.tension));return n.set(jl.calc(l),Ql.calc(l),ec.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ud(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Lx(i,e){let t=1-i;return t*t*e}function Dx(i,e){return 2*(1-i)*i*e}function Ux(i,e){return i*i*e}function sa(i,e,t,n){return Lx(i,e)+Dx(i,t)+Ux(i,n)}function Nx(i,e){let t=1-i;return t*t*t*e}function Ox(i,e){let t=1-i;return 3*t*t*i*e}function Fx(i,e){return 3*(1-i)*i*i*e}function Bx(i,e){return i*i*i*e}function ra(i,e,t,n,s){return Nx(i,e)+Ox(i,t)+Fx(i,n)+Bx(i,s)}var Do=class extends Ei{constructor(e=new Ge,t=new Ge,n=new Ge,s=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ge){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ra(e,s.x,r.x,a.x,o.x),ra(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rc=class extends Ei{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ra(e,s.x,r.x,a.x,o.x),ra(e,s.y,r.y,a.y,o.y),ra(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Uo=class extends Ei{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cc=class extends Ei{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends Ei{constructor(e=new Ge,t=new Ge,n=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ge){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(sa(e,s.x,r.x,a.x),sa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends Ei{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(sa(e,s.x,r.x,a.x),sa(e,s.y,r.y,a.y),sa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oo=class extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(ud(o,l.x,c.x,h.x,m.x),ud(o,l.y,c.y,h.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ge().fromArray(s))}return this}},dd=Object.freeze({__proto__:null,ArcCurve:wc,CatmullRomCurve3:Ac,CubicBezierCurve:Do,CubicBezierCurve3:Rc,EllipseCurve:ma,LineCurve:Uo,LineCurve3:Cc,QuadraticBezierCurve:No,QuadraticBezierCurve3:Pc,SplineCurve:Oo}),Ic=class extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new dd[s.type]().fromJSON(s))}return this}},Fr=class extends Ic{constructor(e){super(),this.type="Path",this.currentPoint=new Ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Uo(this.currentPoint.clone(),new Ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new No(this.currentPoint.clone(),new Ge(e,t),new Ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Do(this.currentPoint.clone(),new Ge(e,t),new Ge(n,s),new Ge(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Oo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new ma(e,t,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Ts=class i extends ci{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],p=[],f=[],x=0,M=[],y=n/2,g=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Tn(m,3)),this.setAttribute("normal",new Tn(p,3)),this.setAttribute("uv",new Tn(f,2));function S(){let A=new k,N=new k,I=0,L=(t-e)/n;for(let Y=0;Y<=r;Y++){let T=[],R=Y/r,$=R*(t-e)+e;for(let ae=0;ae<=s;ae++){let ve=ae/s,F=ve*l+o,q=Math.sin(F),z=Math.cos(F);N.x=$*q,N.y=-R*n+y,N.z=$*z,m.push(N.x,N.y,N.z),A.set(q,L,z).normalize(),p.push(A.x,A.y,A.z),f.push(ve,1-R),T.push(x++)}M.push(T)}for(let Y=0;Y<s;Y++)for(let T=0;T<r;T++){let R=M[T][Y],$=M[T+1][Y],ae=M[T+1][Y+1],ve=M[T][Y+1];h.push(R,$,ve),h.push($,ae,ve),I+=6}c.addGroup(g,I,0),g+=I}function v(A){let N=x,I=new Ge,L=new k,Y=0,T=A===!0?e:t,R=A===!0?1:-1;for(let ae=1;ae<=s;ae++)m.push(0,y*R,0),p.push(0,R,0),f.push(.5,.5),x++;let $=x;for(let ae=0;ae<=s;ae++){let F=ae/s*l+o,q=Math.cos(F),z=Math.sin(F);L.x=T*z,L.y=y*R,L.z=T*q,m.push(L.x,L.y,L.z),p.push(0,R,0),I.x=q*.5+.5,I.y=z*.5*R+.5,f.push(I.x,I.y),x++}for(let ae=0;ae<s;ae++){let ve=N+ae,F=$+ae;A===!0?h.push(F,F+1,ve):h.push(F+1,F,ve),Y+=3}c.addGroup(g,Y,A===!0?1:2),g+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ui=class i extends Ts{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fo=class i extends ci{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Tn(r,3)),this.setAttribute("normal",new Tn(r.slice(),3)),this.setAttribute("uv",new Tn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new k,A=new k,N=new k;for(let I=0;I<t.length;I+=3)f(t[I+0],v),f(t[I+1],A),f(t[I+2],N),l(v,A,N,S)}function l(S,v,A,N){let I=N+1,L=[];for(let Y=0;Y<=I;Y++){L[Y]=[];let T=S.clone().lerp(A,Y/I),R=v.clone().lerp(A,Y/I),$=I-Y;for(let ae=0;ae<=$;ae++)ae===0&&Y===I?L[Y][ae]=T:L[Y][ae]=T.clone().lerp(R,ae/$)}for(let Y=0;Y<I;Y++)for(let T=0;T<2*(I-Y)-1;T++){let R=Math.floor(T/2);T%2===0?(p(L[Y][R+1]),p(L[Y+1][R]),p(L[Y][R])):(p(L[Y][R+1]),p(L[Y+1][R+1]),p(L[Y+1][R]))}}function c(S){let v=new k;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(S),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function h(){let S=new k;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let A=y(S)/2/Math.PI+.5,N=g(S)/Math.PI+.5;a.push(A,1-N)}x(),m()}function m(){for(let S=0;S<a.length;S+=6){let v=a[S+0],A=a[S+2],N=a[S+4],I=Math.max(v,A,N),L=Math.min(v,A,N);I>.9&&L<.1&&(v<.2&&(a[S+0]+=1),A<.2&&(a[S+2]+=1),N<.2&&(a[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function f(S,v){let A=S*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function x(){let S=new k,v=new k,A=new k,N=new k,I=new Ge,L=new Ge,Y=new Ge;for(let T=0,R=0;T<r.length;T+=9,R+=6){S.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),A.set(r[T+6],r[T+7],r[T+8]),I.set(a[R+0],a[R+1]),L.set(a[R+2],a[R+3]),Y.set(a[R+4],a[R+5]),N.copy(S).add(v).add(A).divideScalar(3);let $=y(N);M(I,R+0,S,$),M(L,R+2,v,$),M(Y,R+4,A,$)}}function M(S,v,A,N){N<0&&S.x===1&&(a[v]=S.x-1),A.x===0&&A.z===0&&(a[v]=N/2/Math.PI+.5)}function y(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Bo=class i extends Fo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Br=class extends Fr{constructor(e){super(e),this.uuid=Hr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Fr().fromJSON(s))}return this}},kx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=zd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,m,p,f;if(n&&(r=Wx(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let x=t;x<s;x+=t)m=i[x],p=i[x+1],m<o&&(o=m),p<l&&(l=p),m>c&&(c=m),p>h&&(h=p);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return ga(r,a,t,o,l,f,0),a}};function zd(i,e,t,n,s){let r,a;if(s===t_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=fd(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=fd(r,i[r],i[r+1],a);return a&&Yo(a,a.next)&&(xa(a),a=a.next),a}function $s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Yo(t,t.next)||En(t.prev,t,t.next)===0)){if(xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ga(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Kx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?zx(i,n,s,r):Hx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),xa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Vx($s(i),e,t),ga(i,e,t,n,s,r,2)):a===2&&Gx(i,e,t,n,s,r):ga($s(i),e,t,n,s,r,1);break}}}function Hx(i){let e=i.prev,t=i,n=i.next;if(En(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,m=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=p&&x.y>=m&&x.y<=f&&Rr(s,o,r,l,a,c,x.x,x.y)&&En(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function zx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(En(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,m=r.y,p=a.y,f=o<l?o<c?o:c:l<c?l:c,x=h<m?h<p?h:p:m<p?m:p,M=o>l?o>c?o:c:l>c?l:c,y=h>m?h>p?h:p:m>p?m:p,g=Lc(f,x,e,t,n),S=Lc(M,y,e,t,n),v=i.prevZ,A=i.nextZ;for(;v&&v.z>=g&&A&&A.z<=S;){if(v.x>=f&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Rr(o,h,l,m,c,p,v.x,v.y)&&En(v.prev,v,v.next)>=0||(v=v.prevZ,A.x>=f&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Rr(o,h,l,m,c,p,A.x,A.y)&&En(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=M&&v.y>=x&&v.y<=y&&v!==s&&v!==a&&Rr(o,h,l,m,c,p,v.x,v.y)&&En(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;A&&A.z<=S;){if(A.x>=f&&A.x<=M&&A.y>=x&&A.y<=y&&A!==s&&A!==a&&Rr(o,h,l,m,c,p,A.x,A.y)&&En(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Vx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Yo(s,r)&&Vd(s,n,n.next,r)&&ya(s,r)&&ya(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),xa(n),xa(n.next),n=i=r),n=n.next}while(n!==i);return $s(n)}function Gx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&jx(a,o)){let l=Gd(a,o);a=$s(a,a.next),l=$s(l,l.next),ga(a,e,t,n,s,r,0),ga(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Wx(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=zd(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Jx(c));for(s.sort(Xx),r=0;r<s.length;r++)t=qx(s[r],t);return t}function Xx(i,e){return i.x-e.x}function qx(i,e){let t=Yx(i,e);if(!t)return e;let n=Gd(t,i);return $s(n,n.next),$s(t,t.next)}function Yx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,m;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Rr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(m=Math.abs(a-t.y)/(r-t.x),ya(t,i)&&(m<h||m===h&&(t.x>s.x||t.x===s.x&&$x(s,t)))&&(s=t,h=m)),t=t.next;while(t!==o);return s}function $x(i,e){return En(i.prev,i,e.prev)<0&&En(e.next,i,i.next)<0}function Kx(i,e,t,n){let s=i;do s.z===0&&(s.z=Lc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zx(s)}function Zx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Lc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Rr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function jx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Qx(i,e)&&(ya(i,e)&&ya(e,i)&&e_(i,e)&&(En(i.prev,i,e.prev)||En(i,e.prev,e))||Yo(i,e)&&En(i.prev,i,i.next)>0&&En(e.prev,e,e.next)>0)}function En(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Yo(i,e){return i.x===e.x&&i.y===e.y}function Vd(i,e,t,n){let s=oo(En(i,e,t)),r=oo(En(i,e,n)),a=oo(En(t,n,i)),o=oo(En(t,n,e));return!!(s!==r&&a!==o||s===0&&ao(i,t,e)||r===0&&ao(i,n,e)||a===0&&ao(t,i,n)||o===0&&ao(t,e,n))}function ao(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function oo(i){return i>0?1:i<0?-1:0}function Qx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ya(i,e){return En(i.prev,i,i.next)<0?En(i,e,i.next)>=0&&En(i,i.prev,e)>=0:En(i,e,i.prev)<0||En(i,i.next,e)<0}function e_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gd(i,e){let t=new Dc(i.i,i.x,i.y),n=new Dc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fd(i,e,t,n){let s=new Dc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function t_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var aa=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];pd(e),md(n,e);let a=e.length;t.forEach(pd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,md(n,t[l]);let o=kx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function pd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function md(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ko=class i extends Fo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var _a=class i extends ci{constructor(e=new Br([new Ge(0,.5),new Ge(-.5,-.5),new Ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Tn(s,3)),this.setAttribute("normal",new Tn(r,3)),this.setAttribute("uv",new Tn(a,2));function c(h){let m=s.length/3,p=h.extractPoints(t),f=p.shape,x=p.holes;aa.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,g=x.length;y<g;y++){let S=x[y];aa.isClockWise(S)===!0&&(x[y]=S.reverse())}let M=aa.triangulateShape(f,x);for(let y=0,g=x.length;y<g;y++){let S=x[y];f=f.concat(S)}for(let y=0,g=f.length;y<g;y++){let S=f[y];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let y=0,g=M.length;y<g;y++){let S=M[y],v=S[0]+m,A=S[1]+m,N=S[2]+m;n.push(v,A,N),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return n_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function n_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var zi=class i extends ci{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],m=new k,p=new k,f=[],x=[],M=[],y=[];for(let g=0;g<=n;g++){let S=[],v=g/n,A=0;g===0&&a===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let N=0;N<=t;N++){let I=N/t;m.x=-e*Math.cos(s+I*r)*Math.sin(a+v*o),m.y=e*Math.cos(a+v*o),m.z=e*Math.sin(s+I*r)*Math.sin(a+v*o),x.push(m.x,m.y,m.z),p.copy(m).normalize(),M.push(p.x,p.y,p.z),y.push(I+A,1-v),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let v=h[g][S+1],A=h[g][S],N=h[g+1][S],I=h[g+1][S+1];(g!==0||a>0)&&f.push(v,A,I),(g!==n-1||l<Math.PI)&&f.push(A,N,I)}this.setIndex(f),this.setAttribute("position",new Tn(x,3)),this.setAttribute("normal",new Tn(M,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xn=class extends Es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function lo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function i_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var kr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uc=class extends kr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case yu:r=e,o=2*t-n;break;case xu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yu:a=e,l=2*n-t;break;case xu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,p=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),M=x*x,y=M*x,g=-p*y+2*p*M-p*x,S=(1+p)*y+(-1.5-2*p)*M+(-.5+p)*x+1,v=(-1-f)*y+(1.5+f)*M+.5*x,A=f*y-f*M;for(let N=0;N!==o;++N)r[N]=g*a[h+N]+S*a[c+N]+v*a[l+N]+A*a[m+N];return r}},Nc=class extends kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),m=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*m+a[l+p]*h;return r}},Oc=class extends kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ni=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ho:t=this.InterpolantFactoryMethodDiscrete;break;case uo:t=this.InterpolantFactoryMethodLinear;break;case wl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&i_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,p=m-n,f=m+n;for(let x=0;x!==n;++x){let M=t[m+x];if(M!==t[p+x]||M!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[m+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=uo;var Ks=class extends Ni{};Ks.prototype.ValueTypeName="bool";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=ho;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends Ni{};Fc.prototype.ValueTypeName="color";var Bc=class extends Ni{};Bc.prototype.ValueTypeName="number";var kc=class extends kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ss.slerpFlat(r,0,a,c-o,a,c,l);return r}},va=class extends Ni{InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};va.prototype.ValueTypeName="quaternion";va.prototype.DefaultInterpolation=uo;va.prototype.InterpolantFactoryMethodSmooth=void 0;var Zs=class extends Ni{};Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=ho;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends Ni{};Hc.prototype.ValueTypeName="vector";var zc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,p=c.length;m<p;m+=2){let f=c[m],x=c[m+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},s_=new zc,Vc=class{constructor(e){this.manager=e!==void 0?e:s_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ho=class extends ri{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var tc=new Un,gd=new k,yd=new k,Gc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Wn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(gd),yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yd),t.updateMatrixWorld(),tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Wc=class extends Gc{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zo=class extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ri.DEFAULT_UP),this.updateMatrix(),this.target=new ri,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vo=class extends Ho{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qc="\\[\\]\\.:\\/",r_=new RegExp("["+Qc+"]","g"),eh="[^"+Qc+"]",a_="[^"+Qc.replace("\\.","")+"]",o_=/((?:WC+[\/:])*)/.source.replace("WC",eh),l_=/(WCOD+)?/.source.replace("WCOD",a_),c_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),h_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),u_=new RegExp("^"+o_+l_+c_+h_+"$"),d_=["material","materials","bones","map"],Xc=class{constructor(e,t,n){let s=n||xn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r_,"")}static parseTrackName(e){let t=u_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);d_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xn.Composite=Xc;xn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xn.prototype.GetterByBindingType=[xn.prototype._getValue_direct,xn.prototype._getValue_array,xn.prototype._getValue_arrayElement,xn.prototype._getValue_toArray];xn.prototype.SetterByBindingTypeAndVersioning=[[xn.prototype._setValue_direct,xn.prototype._setValue_direct_setNeedsUpdate,xn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_array,xn.prototype._setValue_array_setNeedsUpdate,xn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_arrayElement,xn.prototype._setValue_arrayElement_setNeedsUpdate,xn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_fromArray,xn.prototype._setValue_fromArray_setNeedsUpdate,xn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R_=new Float32Array(1);var Go=class{constructor(e,t,n=0,s=1/0){this.ray=new ha(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return qc(e,this,n,t),n.sort(xd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qc(e[s],this,n,t);return n.sort(xd),n}};function xd(i,e){return i.distance-e.distance}function qc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)qc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);var th=35,nh=25,ih=.29,mt=.95,Kn=.35,ss=200,rs=7,ws=300,Rs=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function p_(i){let e=typeof i=="string"?m_(i):i>>>0;return function(){e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t=(t^t>>>7)>>>0,t/4294967296}}function m_(i){let e=0;for(let t=0;t<i.length;t++)e=Math.imul(31,e)+i.charCodeAt(t),e=e>>>0;return e}var g_=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],y_=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch","paladin","exorcist","bandit","ranger","blacksmith","alchemist"],$o={tank:["knight","berserker","werewolf","ghoul"],melee:["assassin","ninja","samurai","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["hunter","ranger","alchemist"],caster:["mage","witch"]},Ma={tank:2,melee:2,support:1,ranged:1,caster:1};function x_(i){let e=Math.max(1,i),t=Object.keys(Ma),n=t.reduce((l,c)=>l+(Ma[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(Ma[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(Ma[c]??0)-(Ma[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var nt={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},as=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist"];function __(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Jt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:4,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5}},Ko={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331}},Vr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp"},Vi=as.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function v_(i,e){Rs&&(as.includes(i)&&Vi[i]&&Vi[i].kills++,as.includes(e)&&Vi[e]&&Vi[e].deaths++)}function M_(i,e){if(!Rs)return;for(let n of i)!n||!Vi[n.class]||(Vi[n.class].battles++,e!=null&&(n.player===e?Vi[n.class].wins++:Vi[n.class].losses++));let t=as.map(n=>{let s=Vi[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var ba={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:8,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:5,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:5,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 3 turns.",cost:5,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}]};function Le(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function Ti(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0,r=String(t);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}function Sa(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,f=>f.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,f=>f.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,m=(f,x,M,y)=>{if(M)f.hp=Math.min(f.maxHp,f.hp+x),n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,`+${x}`,!1,"heal");else{let g=f===s,S=!0;if(!g&&!y){let v=Le(f,"agi")*.7+Le(f,"luk")*.3;S=Math.random()*Math.max(.001,v)<=Le(s,"dex")}return S?(f.hp=Math.max(0,f.hp-x),f!==s&&(h=x),n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,String(x),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(f),f.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(f,s)):n.showFloatingCombatText&&n.showFloatingCombatText(f.x,f.y,"MISS",!0),S}},p=(f,x,M,y)=>{n.showFloatingCombatText&&n.showFloatingCombatText(f,x,M,!1,y?"buff":"debuff")};switch(i){case"brave":s.tempBuff={vit:3,duration:3},p(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let f=2,x=1;r.str=Math.max(1,(r.str||0)-f),s.str=(s.str||0)+f,r.vit=Math.max(1,(r.vit||0)-x),s.vit=(s.vit||0)+x,p(r.x,r.y,`-${f} STR and -${x} VIT`,!1),p(s.x,s.y,`+${f} STR and +${x} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let f=Math.max(1,Math.ceil(Le(s,"int")-(Le(r,"int")*.7+Le(r,"luk")*.2)));m(r,f,!1,!0)}break;case"manaDrain":if(r){let f=Math.max(1,Math.floor(Le(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-f),s.mp=(s.mp||0)+f,p(r.x,r.y,`-${f} MP`,!1),p(s.x,s.y,`+${f} MP`,!0)}break;case"mantra":if(r){let f=Math.max(1,Math.floor(Le(s,"int")*.3));s.tempBuff={int:f,duration:3},p(s.x,s.y,`+${f} LUK`,!0),r.tempBuff={luk:f,duration:3},p(r.x,r.y,`+${f} LUK`,!0)}break;case"chakra":{if(m(s,Math.max(1,Math.floor(Le(s,"int")*.3+Le(s,"luk")*.15)),!0),!r)break;m(r,Math.max(1,Math.floor(Le(s,"int")*.3+Le(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let f=1;r.vit=Math.max(1,(r.vit||0)-f),s.vit=(s.vit||0)+f,p(r.x,r.y,`-${f} VIT`,!1),p(s.x,s.y,`+${f} VIT`,!0)}break;case"feast":{if(!r)break;let f=Math.max(1,Math.floor(Le(s,"str")*.7-(Le(r,"vit")*.3+Le(r,"luk")*.2)));m(r,f,!1)&&m(s,f,!0)}break;case"impale":{if(!r)break;let f=2;r.tempDebuff={agi:f,duration:3},p(r.x,r.y,`-${f} AGI`,!1)}break;case"pierce":{if(!r)break;let f=Math.max(1,Math.floor(Le(s,"str")*.6));m(r,f,!1)}break;case"focus":s.tempBuff={dex:3,duration:3},p(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let f=Math.max(1,Math.floor(Le(s,"dex")*.7-(Le(r,"vit")*.3+Le(r,"luk")*.2)));m(r,f,!1)}break;case"cripple":{if(!r)break;let f=1;r.agi=Math.max(1,(r.agi||0)-f),s.agi=(s.agi||0)+f,p(r.x,r.y,`-${f} AGI`,!1),p(s.x,s.y,`+${f} AGI`,!0)}break;case"execute":if(r){let f=Math.max(1,Math.floor(Le(s,"agi")*.8-(Le(r,"vit")*.3+Le(r,"luk")*.2)));m(r,f,!1)}break;case"berserk":r&&(m(r,Math.max(1,Math.floor(Le(s,"str")*.8-Le(r,"vit")*.3+Le(r,"luk")*.2)),!1),m(s,3,!1));break;case"bloodlust":{let f=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff={str:f,vit:f,duration:2},p(s.x,s.y,`+${f} STR, +${f} VIT`,!0)}break;case"hex":{if(!r)break;let f=1;r.int=Math.max(1,(r.int||0)-f),s.int=(s.int||0)+f,p(r.x,r.y,`-${f} INT`,!1),p(s.x,s.y,`+${f} INT`,!0)}break;case"drain":{if(!r)break;let f=Math.max(1,Math.ceil(Le(s,"int")*.6-(Le(r,"int")*.4+Le(r,"luk")*.2)));m(r,f,!1,!0),m(s,f,!0)}break;case"blind":{if(!r)break;let f=1;r.dex=Math.max(1,(r.dex||0)-f),s.dex=(s.dex||0)+f,p(r.x,r.y,`-${f} DEX`,!1),p(s.x,s.y,`+${f} DEX`,!0)}break;case"shuriken":{if(!r)break;let f=Math.max(1,Math.floor(Le(s,"dex")*.7-(Le(r,"vit")*.3+Le(r,"luk")*.2)));m(r,f,!1)}break;case"iaido":s.tempBuff={str:1,dex:1,duration:3},p(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let f=Math.max(1,Math.floor(Le(s,"str")*.4+Le(s,"dex")*.4-(Le(r,"vit")*.3+Le(r,"luk")*.2)));m(r,f,!1)}break;case"bite":{if(!r)break;let f=Math.max(1,Math.floor(Le(s,"str")*.7+Le(s,"agi")*.1-(Le(r,"vit")*.3+Le(r,"luk")*.2)));m(r,f,!1)}break;case"howl":s.tempBuff={str:2,agi:2,duration:3},p(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let f=Math.max(1,Math.floor(Le(s,"int")*.5));m(r,f,!0),m(s,3,!1)}break;case"judgement":{if(!r)break;let f=Math.max(1,Math.floor(s.maxHp-s.hp-(Le(r,"int")*.2+Le(r,"luk")*.1)));m(r,f,!1,!0)}break;case"sanctuary":s.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},r.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),p(s.x,s.y,"+1 ALL STATS",!0),p(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let f=Math.max(1,Math.floor(r.maxHp-r.hp-(Le(r,"int")*.4+Le(r,"luk")*.2)));m(r,f,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,p(r.x,r.y,"-2 LUK",!1),p(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let f=Math.max(1,Math.floor(Le(s,"luk")*.8-(Le(r,"vit")*.3+Le(r,"luk")*.2)));m(r,f,!1)}break;case"windWalk":s.tempBuff={dex:1,agi:3,duration:3},p(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let f=Math.max(1,Math.floor(Le(s,"dex")*.6-(Le(r,"vit")*.3+Le(r,"luk")*.2)));if(m(r,f,!1)&&n.world&&n.units&&n.updateUnitPosition){let M=Math.max(1,Math.floor(f*.2)),y=E_(n.world,n.units,s,r,M),g=r.x,S=r.y;r.x=y.newGx,r.y=y.newGy,y.collisionDamage>0?(console.log("knockback damage",{damage:y.collisionDamage}),n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),m(r,y.collisionDamage,!1),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)):n.animateKnockback?n.animateKnockback(r,g,S,y.newGx,y.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r))}}break;case"forge":s.tempBuff={str:2,duration:3},r.tempBuff={str:2,duration:3},p(s.x,s.y,"+2 STR",!0),p(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff={str:3,vit:3,duration:3},r.tempBuff={str:3,vit:3,duration:3},p(s.x,s.y,"+3 STR, +3 VIT",!0),p(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let f=Math.max(1,Math.floor(Le(r,"luk")*.3));r.tempDebuff={poison:f,duration:3},p(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let f=Math.max(1,Math.floor(Le(s,"int")*.8-(Le(r,"int")*.4+Le(r,"luk")*.2)));m(r,f,!1,!0);let x=Math.max(1,Math.floor(f*.5));s.luk=Math.max(1,(s.luk||0)+x),p(s.x,s.y,`+${x} LUK`,!0)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function Wd(i){let e=th,t=nh,n=Array.from({length:t},()=>Array(e).fill(!1)),s=Array.from({length:t},()=>Array(e).fill(0)),r=Array.from({length:t},()=>Array(e).fill(nt.GRASS)),a=i!=null?p_(i):()=>Math.random(),o=Math.floor(e/2),l=Math.floor(t/2),c=o,h=0,m=o,p=t-1,f=2,x=3;function M(z,V,K,se){let re=se;for(let he=V;he<=K;he++)if(!(he<0||he>=t))for(let we=-f;we<=f;we++){let J=re+we;J<0||J>=e||(n[he][J]=!0,r[he][J]=z,s[he][J]=1)}}M(nt.BASE_TOP,h,h+x-1,c),M(nt.BASE_BOTTOM,p-x+1,p,m),M(nt.CENTER,l-1,l+1,o);let y=new Set,g=(z,V)=>Math.abs(z-o)<=2&&Math.abs(V-l)<=1,S=(z,V)=>{z<0||z>=e||V<0||V>=t||g(z,V)||y.add(V*e+z)},v=Math.floor(e/2),A=Math.floor(t/2),N=Math.min(e,t)*ih,I=Math.max(60,(t+e)*2);for(let z=0;z<2;z++){let V=z===0?v-N:v+N,K=z===0?Math.PI/2:-Math.PI/2,se=z===0?Math.PI*3/2:Math.PI/2;for(let re=0;re<=I;re++){let he=re/I,we=K+he*(se-K),J=V+N*Math.cos(we),fe=A+N*Math.sin(we),Te=Math.round(J),He=Math.round(fe);S(Te,He),S(Te+1,He),S(Te-1,He),S(Te,He+1),S(Te,He-1)}}let L=[[0,1],[0,-1],[1,0],[-1,0]];for(let z=0;z<1;z++){let V=[];y.forEach(K=>{let se=K%e,re=K/e|0;for(let[he,we]of L){let J=se+he,fe=re+we;if(J<0||J>=e||fe<0||fe>=t)continue;let Te=fe*e+J;y.has(Te)||V.push(Te)}}),V.forEach(K=>y.add(K))}y.forEach(z=>{let V=z%e,K=z/e|0;r[K][V]===nt.BASE_TOP||r[K][V]===nt.BASE_BOTTOM||r[K][V]===nt.CENTER||(n[K][V]=!0,r[K][V]=nt.PATH,s[K][V]=1)});let Y=Math.round(v-N*1.6),T=Math.round(v+N*1.6),R=Math.round(v-N),$=Math.round(v+N),ae=1;for(let z=l-ae;z<=l+ae;z++)if(!(z<0||z>=t))for(let V=Y;V<=T;V++)V<0||V>=e||(n[z][V]=!0,r[z][V]!==nt.CENTER&&r[z][V]!==nt.BASE_TOP&&r[z][V]!==nt.BASE_BOTTOM&&(r[z][V]=nt.PATH),s[z][V]=Math.max(s[z][V],1));function ve(z,V,K,se){let re=Math.max(1,Math.min(z,V)),he=Math.min(t-2,Math.max(z,V)),we=Math.max(1,Math.min(K,se)),J=Math.min(e-2,Math.max(K,se));for(let fe=re;fe<=he;fe++)for(let Te=we;Te<=J;Te++)r[fe][Te]===nt.BASE_TOP||r[fe][Te]===nt.BASE_BOTTOM||r[fe][Te]===nt.CENTER||(n[fe][Te]=!0,r[fe][Te]=nt.PATH,s[fe][Te]=1)}let F=3,q=3;ve(h,h+F-1,R,c-1),ve(h,h+F-1,c+1,$),ve(p-q+1,p,R,m-1),ve(p-q+1,p,m+1,$),M(nt.BASE_TOP,h,h+x-1,c),M(nt.BASE_BOTTOM,p-x+1,p,m),M(nt.CENTER,l-1,l+1,o);for(let z=0;z<t;z++)for(let V=0;V<e;V++){if(n[z][V]||r[z][V]===nt.BASE_TOP||r[z][V]===nt.BASE_BOTTOM||r[z][V]===nt.CENTER)continue;let K=Math.abs(V-c)<=4&&Math.abs(z-h)<=3,se=Math.abs(V-m)<=4&&Math.abs(z-p)<=3,re=K||se,he=a();he<.55&&!re?(r[z][V]=nt.TREE,s[z][V]=1+Math.floor(a()*2)):he<.75||re&&he<.5?(r[z][V]=nt.WATER,s[z][V]=0):(r[z][V]=nt.ROCK,s[z][V]=1+Math.floor(a()*2))}return{w:e,h:t,path:n,height:s,type:r,topBaseX:c,topBaseY:h,botBaseX:m,botBaseY:p}}function b_(i,e,t){let n=e===1?nt.BASE_BOTTOM:nt.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function S_(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===nt.CENTER&&e.push({gx:n,gy:t});return e}function Xd(i,e){let t=S_(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function Gr(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===nt.TREE||n===nt.WATER||n===nt.ROCK)}function E_(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let m=0;for(let p=0;p<s;p++){let f=r+c,x=a+h,M=f<0||f>=i.w||x<0||x>=i.h,y=!Gr(i,f,x),g=e.some(S=>S.hp>0&&S.id!==n.id&&S.x===f&&S.y===x);if(M||y||g){let S=Math.max(1,m*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:S}}r=f,a=x,m++}return{newGx:r,newGy:a,collisionDamage:0}}function T_(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),m=r<o?1:-1,p=a<l?1:-1,f=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*f;x>-h&&(f-=h,r+=m),x<c&&(f+=c,a+=p)}return s}function Js(i,e,t,n,s){let r=T_(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!Gr(i,o.x,o.y))return!1}return!0}function Zo(i,e,t,n,s,r){let a=(p,f)=>f*i.w+p,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null,m=h?new Set(s.filter(p=>p.hp>0&&p.player!==r.player).map(p=>p.y*i.w+p.x)):null;for(;l.length;){let{x:p,y:f,d:x}=l.shift();if(!(x>=n))for(let[M,y]of c){let g=p+M,S=f+y;if(!Gr(i,g,S)||h&&m.has(a(g,S)))continue;let v=a(g,S);if(o.has(v))continue;let A=x+1;o.set(v,A),l.push({x:g,y:S,d:A})}}return o}function qd(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++){let m=Math.abs(h-e)+Math.abs(c-t);m>=1&&m<=n&&s.set(c*i.w+h,m)}return s}function As(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(f,x)=>x*i.w+f,l=new Set(r.filter(f=>f.hp>0&&f.player!==a.player).map(f=>f.y*i.w+f.x)),c=new Map,h=[{x:e,y:t}];c.set(o(e,t),null);let m=[[0,1],[0,-1],[1,0],[-1,0]];function p(f,x){return Gr(i,f,x)?!l.has(o(f,x)):!1}for(;h.length;){let{x:f,y:x}=h.shift();if(f===n&&x===s){let M=[],y={x:n,y:s};for(;y;)M.unshift(y),y=c.get(o(y.x,y.y));return M}for(let[M,y]of m){let g=f+M,S=x+y,v=o(g,S);c.has(v)||p(g,S)&&(c.set(v,{x:f,y:x}),h.push({x:g,y:S}))}}return null}var Yd={[nt.PATH]:2976557,[nt.GRASS]:2968109,[nt.TREE]:1719578,[nt.WATER]:1989278,[nt.ROCK]:4872778,[nt.BASE_TOP]:8014410,[nt.BASE_BOTTOM]:4872826,[nt.CENTER]:13940810};function sh(i){return i.w*mt/2}function rh(i){return i.h*mt/2}function Kd(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new Lo(e);return r.wrapS=r.wrapT=oa,r.repeat.set(4,4),r.needsUpdate=!0,r}function $d(i){let e=new gi,t=sh(i),n=rh(i),s=new Fn(mt,Kn,mt),r=Kd(64),a=.88,o=.02,l=[];function c(p,f,x,M,y){let g=new Xn({color:3828266,roughness:.9});g.bumpMap=r,g.bumpScale=.12;for(let S=0;S<M;S++){let v=.08+Math.random()*y,A=.03+Math.random()*.03,N=new Ze(new Ts(A*.5,A,v,6),g);N.position.set(p+(Math.random()-.5)*.5,x+v/2,f+(Math.random()-.5)*.5),N.rotation.x=(Math.random()-.5)*.2,N.rotation.z=(Math.random()-.5)*.2,N.castShadow=!0,e.add(N)}}let h=.12;function m(p,f,x,M){let y=x+.02,g=[[p-h,y,f-h],[p+h,y,f+h],[p-h,y,f+h],[p+h,y,f-h],[p-h+.06,y,f-h+.06],[p+h-.06,y,f+h-.06],[p-h+.06,y,f+h-.06],[p+h-.06,y,f-h+.06]],S=new Float32Array(g.length*3);g.forEach((I,L)=>{S[L*3]=I[0],S[L*3+1]=I[1],S[L*3+2]=I[2]});let v=new ci;v.setAttribute("position",new li(S,3)),v.computeBoundingSphere();let A=new pa({color:855309,linewidth:1}),N=new Io(v,A);M.add(N)}for(let p=0;p<i.h;p++)for(let f=0;f<i.w;f++){let x=i.type[p][f],M=i.height[p][f],y=Yd[x],g=Kn+M*.35,S=g/2+Kn/2,v=new Xn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),A=(y>>16&255)/255,N=(y>>8&255)/255,I=(y&255)/255,L=A,Y=N,T=I;if(x===nt.PATH||x===nt.TREE||x===nt.ROCK){let V=Math.random()*.45;L=A*(1-V)+.42*V,Y=N*(1-V)+.26*V,T=I*(1-V)+.14*V}(x===nt.TREE||x===nt.ROCK)&&(L*=.5,Y*=.5,T*=.5);let R=1+(Math.random()-.5)*.12;v.color.setRGB(Math.min(1,L*R),Math.min(1,Y*R),Math.min(1,T*R)),v.bumpMap=r,v.bumpScale=.12;let $=new Ze(s,v);$.position.set(f*mt-t+mt/2,g/2,p*mt-n+mt/2),$.castShadow=!0,$.receiveShadow=!0,$.userData={gx:f,gy:p,type:x},e.add($);let ae=f*mt-t+mt/2,ve=p*mt-n+mt/2;if(x===nt.TREE&&m(ae,ve,S,e),x===nt.TREE){let F=new gi;F.position.set(ae,S,ve);let q=f===0||f===i.w-1||p===0||p===i.h-1,z=q?.75+Math.random()*.35:.5+Math.random()*.2,V=new xt(4007959),K=()=>1+(Math.random()-.5)*.4;V.r=Math.min(1,Math.max(0,V.r*K())),V.g=Math.min(1,Math.max(0,V.g*K())),V.b=Math.min(1,Math.max(0,V.b*K()));let se=.85+Math.random()*.2,re=new Xn({color:V,roughness:se});re.bumpMap=r,re.bumpScale=.1+Math.random()*.12;let he=new Ze(new Ts(.12,.14,z,8),re);he.position.set(0,z/2,0),he.castShadow=!0,he.raycast=function(){},F.add(he);let we=r.clone();we.repeat.set(3,3);let J=new xt(2972205),fe=()=>1+(Math.random()-.5)*.44;J.r=Math.min(1,Math.max(0,J.r*fe())),J.g=Math.min(1,Math.max(0,J.g*fe())),J.b=Math.min(1,Math.max(0,J.b*fe()));let Te=.78+Math.random()*.24,He=new Xn({color:J,roughness:Te});He.bumpMap=we,He.bumpScale=.16+Math.random()*.14;let $e=q?.52:.45,ht=q?1.05:.9,ut=.12,Qe=ht*.5,le=ht*.45,j=ht*.4,Je=new Ze(new Ui($e,Qe,8),He);Je.position.set(0,z+Qe/2,0),Je.castShadow=!0,Je.raycast=function(){},F.add(Je);let qe=new Ze(new Ui($e*.75,le,8),He);qe.position.set(0,z+Qe-ut+le/2,0),qe.castShadow=!0,qe.raycast=function(){},F.add(qe);let et=new Ze(new Ui($e*.5,j,8),He);et.position.set(0,z+Qe-ut+le-ut+j/2,0),et.castShadow=!0,et.raycast=function(){},F.add(et),e.add(F),l.push(F)}else if(x===nt.WATER){let F=Yd[nt.WATER],q=(F>>16&255)/255,z=(F>>8&255)/255,V=(F&255)/255,K=1+(Math.random()-.5)*.12,se=new Xn({color:new xt().setRGB(Math.min(1,q*K),Math.min(1,z*K),Math.min(1,V*K)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),re=new Ze(new Hi(mt,mt),se);re.rotation.x=-Math.PI/2,re.position.set(ae,S+.02,ve),re.receiveShadow=!0,e.add(re)}else if(x===nt.ROCK){let F=new Xn({color:6974058,roughness:.9});F.bumpMap=r,F.bumpScale=.2;let q=(se,re,he)=>{let we=new Ze(new Bo(se,0),F);we.position.set(ae+re,S+se-.2,ve+he),we.rotation.set(Math.random(),Math.random(),Math.random()),we.castShadow=!0,e.add(we)},z=.32+Math.random()*.14,V=.2+Math.random()*.12,K=.12+Math.random()*.12;q(z,(Math.random()-.5)*.15,(Math.random()-.5)*.15),q(V,(Math.random()-.5)*.25,(Math.random()-.5)*.25),q(K,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function w_(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=Wd(),t=document.getElementById("canvas-wrap"),n=new Po;n.background=new xt(1711652),n.fog=new Co(1711652,30,90);let s=e.w*mt/2,r=e.h*mt/2,a=new si(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,c=new k(12,38,16).normalize().multiplyScalar(o),h=new k,m=new k,p=new Ii(new k(0,1,0),0),f=new k,x=new k,M=!1,y=!1,g=!0,S=!1,v=null,A=5,N=.004,I=-Math.PI*.4,L=Math.PI*.4,Y=new k,T={x:0,y:0},R=!1,$=1,ae=40,ve=.005,F=.15,q=1,z=null,V=new Vo(16777215,.45);n.add(V);let K=new zo(16774630,1.1);K.position.set(30,50,20),K.castShadow=!0,K.shadow.mapSize.width=2048,K.shadow.mapSize.height=2048,K.shadow.camera.near=1,K.shadow.camera.far=120,K.shadow.camera.left=-50,K.shadow.camera.right=50,K.shadow.camera.top=50,K.shadow.camera.bottom=-50,n.add(K);let se=$d(e);n.add(se);let re=new Map,he=new gi;n.add(he);let we={30:!1,20:!1,10:!1},J=["red","yellow","purple","blue","green"],fe={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943},Te=.92;function He(u,d,_){let D=(Kn+e.height[_][d]*.35)/2+Kn/2,P=new Hi(Te,Te),B=new wn({color:u,transparent:!0,opacity:.45,side:Sn}),O=new Ze(P,B);return O.rotation.x=-Math.PI/2,O.position.set(d*mt-et+mt/2,D+.01,_*mt-We+mt/2),O}function $e(u){let d=new ko(.22,0),_=new Xn({color:u,metalness:.3,roughness:.4}),b=new Ze(d,_);return b.rotation.x=Math.PI/4,b.castShadow=!0,b.receiveShadow=!0,b}function ht(){let u=Math.floor(e.h/2),d=[];for(let _=0;_<e.w;_++){let b=u;if(e.type[b][_]!==nt.PATH||le.some(B=>B.hp>0&&B.x===_&&B.y===b))continue;let P=b*e.w+_;re.has(P)||d.push({gx:_,gy:b})}return d}function ut(u){let d=ht();if(d.length===0)return;let _=d[Math.floor(Math.random()*d.length)],b=J[Math.floor(Math.random()*J.length)],D=_.gy*e.w+_.gx,P=fe[b],B=tt(_.gx,_.gy);B.y+=.35;let O=$e(P);O.position.copy(B),he.add(O);let U=He(P,_.gx,_.gy);he.add(U),re.set(D,{type:b,mesh:O,glowMesh:U}),console.log("powerup appeared",{turnsLeft:u,type:b,gx:_.gx,gy:_.gy})}function Qe(u){let d=u.y*e.w+u.x,_=re.get(d);if(!_)return;let b=_.mesh;if(he.remove(b),b.geometry.dispose(),b.material){let D=b.material;D.dispose&&D.dispose()}_.glowMesh&&(he.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose()),re.delete(d),_.type==="green"?(u.hp=Math.min(u.maxHp,u.hp+6),ti(u.x,u.y,"+6 HP",!1,"buff")):(_.type==="red"?u.tempBuff={str:4,duration:3}:_.type==="yellow"?u.tempBuff={agi:4,duration:3}:_.type==="purple"?u.tempBuff={int:4,duration:3}:_.type==="blue"&&(u.tempBuff={dex:4,duration:3}),ti(u.x,u.y,`+4 ${_.type==="red"?"STR":_.type==="yellow"?"AGI":_.type==="purple"?"INT":"DEX"}`,!1,"buff")),Et(u,()=>Fe(u))}let le=[],j=1,Je=new Map,qe=Kd(64),et=sh(e),We=rh(e);function tt(u,d){let b=(Kn+e.height[d][u]*.35)/2+Kn/2;return new k(u*mt-et+mt/2,b,d*mt-We+mt/2)}function gt(u,d){u==="short"&&(th=27,nh=15,ih=.35,ss=100),n.remove(se),se.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(D=>D.dispose())}),Je.forEach(_=>{n.remove(_),_.traverse(b=>{b.geometry&&b.geometry.dispose(),b.material&&(Array.isArray(b.material)?b.material:[b.material]).forEach(P=>P.dispose())})}),Je.clear(),le.length=0,j=1,re.forEach(_=>{he.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(he.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),re.clear(),we={30:!1,20:!1,10:!1},e=Wd(typeof d<"u"?d:void 0),et=sh(e),We=rh(e),se=$d(e),n.add(se)}function C(){Je.forEach(u=>{n.remove(u),u.traverse(d=>{d.geometry&&d.geometry.dispose(),d.material&&(Array.isArray(d.material)?d.material:[d.material]).forEach(b=>b.dispose())})}),Je.clear(),le.length=0,j=1}function E(u,d){let _=(u>>16&255)/255,b=(u>>8&255)/255,D=(u&255)/255,P=1+(Math.random()-.5)*d;return new xt(Math.min(1,_*P),Math.min(1,b*P),Math.min(1,D*P))}let ne=.62;function ye(u,d){d=d??ne;let _=u instanceof xt?u:new xt(u);return new xt(Math.max(0,_.r*d),Math.max(0,_.g*d),Math.max(0,_.b*d))}function be(u,d,_){let b=Ko[d]||Ko.knight,D=ye(E(b.primary,.08)),P=ye(E(b.secondary,.08)),B=Jt[d]&&Jt[d].gender||"male",O=_??4006676,U=ye(E(b.skin!=null?b.skin:15250592,.06)),X=ye(E(O,.08)),ce=()=>(Math.random()-.5)*.08,Ee=()=>(Math.random()-.5)*.04,W=new Xn({color:D,metalness:Math.max(0,.25+Ee()),roughness:Math.max(.3,Math.min(1,.5+ce()))});W.bumpMap=qe,W.bumpScale=.1;let ue=new Xn({color:P,metalness:Math.max(0,.2+Ee()),roughness:Math.max(.3,Math.min(1,.55+ce()))});ue.bumpMap=qe,ue.bumpScale=.1;let de=new Xn({color:D,metalness:Math.max(0,.25+Ee()),roughness:Math.max(.3,Math.min(1,.5+ce()))});de.bumpMap=qe,de.bumpScale=.1;let Be=new Xn({color:U,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+ce()))});Be.bumpMap=qe,Be.bumpScale=.05;let Ce=new gi,Ve=.28,Lt=.08,it=.08,Xt=new Ze(new Fn(Lt,Ve,it),ue);Xt.position.set(-.06,Ve/2,0),Xt.castShadow=!0,Ce.add(Xt);let _n=new Ze(new Fn(Lt,Ve,it),ue);_n.position.set(.06,Ve/2,0),_n.castShadow=!0,Ce.add(_n);let sn=.28,Kt=.2,pn=.12,vn=new Ze(new Fn(Kt,sn,pn),W);vn.position.set(0,Ve+sn/2,0),vn.castShadow=!0,Ce.add(vn);let Nt=.06,rn=.22,zt=.06,Pt=new Ze(new Fn(Nt,rn,zt),de);Pt.position.set(-(Kt/2+Nt/2),Ve+sn-.08,0),Pt.castShadow=!0,Ce.add(Pt);let Yt=new Ze(new Fn(Nt,rn,zt),de);if(Yt.position.set(Kt/2+Nt/2,Ve+sn-.08,0),Yt.castShadow=!0,Ce.add(Yt),b.cape!=null){let lt=Kt*1.95,Dt=lt*.6,ie=Ve+sn*.28,ge=new Br;ge.moveTo(-Dt/2,ie/2),ge.lineTo(Dt/2,ie/2),ge.lineTo(lt/2,-ie/2),ge.lineTo(-lt/2,-ie/2),ge.closePath();let pe=new _a(ge),te=new Xn({color:ye(E(b.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+ce())),side:Sn});te.bumpMap=qe,te.bumpScale=.12;let oe=new Ze(pe,te);oe.position.set(0,Ve+sn-ie/2+.05,-pn/2-.02),oe.rotation.y=Math.PI,oe.castShadow=!0,Ce.add(oe);let Me=.055,me=Ve+sn+.02,Ae=.02,Mt=Kt/2+Nt*.5,wt=new Ze(new zi(Me,10,8,0,Math.PI*2,0,Math.PI*.55),te.clone());wt.position.set(-Mt,me,Ae),wt.rotation.x=-Math.PI*.35,wt.rotation.z=Math.PI*.5,wt.scale.set(1.2,.85,1.1),wt.castShadow=!0,Ce.add(wt);let Ft=new Ze(new zi(Me,10,8,0,Math.PI*2,0,Math.PI*.55),te.clone());Ft.position.set(Mt,me,Ae),Ft.rotation.x=-Math.PI*.35,Ft.rotation.z=-Math.PI*.5,Ft.scale.set(1.2,.85,1.1),Ft.castShadow=!0,Ce.add(Ft)}if(b.belt!=null){let lt=new Xn({color:ye(E(b.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+ce()))});lt.bumpMap=qe,lt.bumpScale=.1;let Dt=.022,ie=.04,ge=new Ze(new Fn(Kt+.04,Dt,pn+ie),lt);ge.position.set(0,Ve+.04,0),ge.castShadow=!0,Ce.add(ge)}if(b.apron!=null){let lt=new Xn({color:ye(E(b.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+ce())),side:Sn});lt.bumpMap=qe,lt.bumpScale=.12;let Dt=Kt*.95,ie=Ve*.85,ge=new Ze(new Hi(Dt,ie),lt),pe=Ve+.2;ge.position.set(0,pe-ie/2,pn/2+.02),ge.castShadow=!0,Ce.add(ge);let te=Ve+sn+.02,oe=Kt/2+Nt*.2,Me=.018,me=.008,Ae=te-pe,Mt=new Ze(new Fn(Me,Ae,me),lt.clone());Mt.position.set(-oe,(pe+te)/2,pn/2+.015),Mt.castShadow=!0,Ce.add(Mt);let wt=new Ze(new Fn(Me,Ae,me),lt.clone());wt.position.set(oe,(pe+te)/2,pn/2+.015),wt.castShadow=!0,Ce.add(wt)}let ct=.1,vt=new Ze(new zi(ct,12,10),Be);vt.position.set(0,Ve+sn+ct,0),vt.castShadow=!0,Ce.add(vt);let Qt=new wn({color:1710638}),Mn=new Ze(new Fn(.032,.004,.004),Qt);Mn.position.set(-.032,.028,ct*.92),vt.add(Mn);let bn=new Ze(new Fn(.032,.004,.004),Qt);bn.position.set(.032,.028,ct*.92),vt.add(bn);let On=new wn({color:2957087}),di=new Ze(new Fn(.045,.012,.008),On);di.position.set(0,-.028,ct*.92),vt.add(di);let un=new Xn({color:X,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+ce()))});un.bumpMap=qe,un.bumpScale=.15;let fi=lt=>{let Dt=ct*.32,ie=ct*.22,ge=new Ze(new Ui(ie*.9,Dt,5),un);ge.position.set(-ct*.25,ct*.22,ct*.72),ge.rotation.x=.35,ge.rotation.z=.12,ge.castShadow=!0,lt.add(ge);let pe=new Ze(new Ui(ie,Dt,5),un);pe.position.set(ct*.28,ct*.18,ct*.68),pe.rotation.x=.28,pe.rotation.z=-.1,pe.castShadow=!0,lt.add(pe);let te=new Ze(new Ui(ie*.7,Dt*.9,5),un);te.position.set(0,ct*.28,ct*.78),te.rotation.x=.4,te.castShadow=!0,lt.add(te)};if(B==="female"){let lt=new Ze(new zi(ct*.92,12,10,0,Math.PI*2,0,Math.PI*.52),un);lt.position.set(0,ct*.28,-ct*.18),lt.rotation.y=.06,lt.rotation.x=-.04,lt.castShadow=!0,vt.add(lt);let Dt=new Ze(new Fn(ct*1.15,ct*2.2,ct*.55),un);Dt.position.set(0,-ct*.6,-ct*.95),Dt.rotation.z=.03,Dt.castShadow=!0,vt.add(Dt),fi(vt)}else{let lt=new Ze(new zi(ct*.9,12,10,0,Math.PI*2,0,Math.PI*.5),un);lt.position.set(0,ct*.4,-ct*.12),lt.rotation.y=.08,lt.rotation.x=-.05,lt.rotation.z=.04,lt.castShadow=!0,vt.add(lt);let Dt=new Ze(new zi(ct*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),un);Dt.position.set(0,ct*.1,-ct*.05),Dt.rotation.y=.1,Dt.castShadow=!0,vt.add(Dt),fi(vt)}return Ce.userData.leftLeg=Xt,Ce.userData.rightLeg=_n,Ce.userData.leftArm=Pt,Ce.userData.rightArm=Yt,Ce}function Se(u,d){let _=u.userData;if(!_.leftLeg)return;let b=d*Math.PI*2,D=.35,P=.28;_.leftLeg.rotation.x=Math.sin(b)*D,_.rightLeg.rotation.x=Math.sin(b+Math.PI)*D,_.leftArm.rotation.y=Math.sin(b+Math.PI)*P,_.rightArm.rotation.y=Math.sin(b)*P}function je(u){let d=u.userData;d.leftLeg&&(d.leftLeg.rotation.x=0,d.rightLeg.rotation.x=0,d.leftArm.rotation.y=0,d.rightArm.rotation.y=0)}function Oe(u){let d=be(u.player,u.class,u.hairColor);d.position.copy(tt(u.x,u.y)),d.castShadow=!0,d.userData.unitId=u.id;let _=.28,b=.28,D=.12,P=.18,B=.04,O=new Hi(P,B),U=new wn({color:6037528,side:Sn,depthTest:!0,depthWrite:!1}),X=new Ze(O,U);X.position.set(0,_+b/2,D/2+.02),X.rotation.x=-Math.PI/2,X.rotation.z=Math.PI/4,X.visible=u.maxHp>0&&u.hp<u.maxHp&&u.hp>0,d.add(X),d.userData.slashMark=X,n.add(d),Je.set(u.id,d),bt(d,u.maxHp>0&&u.hp/u.maxHp<.35)}function Fe(u){let d=Je.get(u.id);!d||!d.userData.slashMark||(d.userData.slashMark.visible=u.maxHp>0&&u.hp<u.maxHp&&u.hp>0)}let ot=.35;function bt(u,d){if(u)if(d){u.rotation.x=.35,u.scale.setScalar(.96);let _=u.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=.2,_.rightArm.rotation.y=.2),u.traverse(b=>{b.isMesh&&b.material&&b.material.color&&(b.userData.originalColor||(b.userData.originalColor=b.material.color.clone()),b.material.color.copy(b.userData.originalColor).multiplyScalar(.82))})}else{u.rotation.x=0,u.scale.setScalar(1);let _=u.userData;_&&_.leftArm&&_.rightArm&&(_.leftArm.rotation.y=0,_.rightArm.rotation.y=0),u.traverse(b=>{b.isMesh&&b.material&&b.userData.originalColor&&b.material.color.copy(b.userData.originalColor)})}}function xe(u){if(u.level>=3)return;let d=u.maxHp>0?u.hp/u.maxHp:1;u.level+=1;let _=D=>Math.max(1,Math.ceil(D*1.1)),b=D=>Math.max(1,Math.ceil(D*1.1));u.maxHp=_(u.maxHp),u.maxMp=_(u.maxMp),u.hp=Math.max(1,Math.min(u.maxHp,Math.ceil(d*u.maxHp))),u.mp=Math.max(1,Math.min(u.maxMp,Math.ceil(d*u.maxMp))),u.str=b(u.str),u.agi=b(u.agi),u.vit=b(u.vit),u.dex=b(u.dex),u.luk=b(u.luk),u.int=b(u.int),u.range>2&&(u.range=b(u.range)),console.log("[LEVEL UP]",`${u.name} (${u.class}, P${u.player})`,`\u2192 Lv.${u.level}`,`| HP ${u.hp}/${u.maxHp} MP ${u.mp}/${u.maxMp} STR ${u.str} VIT ${u.vit}`),jt(u)}function jt(u){let d=Je.get(u.id),_=u.level===3?"levelup level3":u.level===2?"levelup level2":"levelup";if(Ff(u,_),!d)return;let b=performance.now(),D=0;function P(B){D++,D%2===0&&Bt();let O=B-b,U=Math.min(1,O/Pe),X=U<.5?1+.35*(U/.5):1+.35*(1-(U-.5)/.5);d.scale.setScalar(X),U<1?requestAnimationFrame(P):d.scale.setScalar(1)}requestAnimationFrame(P)}function Et(u,d){let _=Je.get(u.id);if(!_){d&&d();return}let b=performance.now(),D=0;function P(B){D++,D%2===0&&Bt();let O=B-b,U=Math.min(1,O/Pe),X=U<.5?1+.35*(U/.5):1+.35*(1-(U-.5)/.5);_.scale.setScalar(X),U<1?requestAnimationFrame(P):(_.scale.setScalar(1),d&&d())}requestAnimationFrame(P)}let dt=400,st=280,Xe=.45,ft=160,qt=280,gn=350,At=500,Pe=600,H=!1,De=new k,Ue=new k,at=new k,rt=new k;function tn(u=!1){g=!0;let d=null;if(Ut==="playing"&&_e.length>0){let B=_e[Re];d=le.find(O=>O.id===B&&O.hp>0)}if(d||(d=le.find(B=>B.player===Rt&&B.hp>0)),!d)return;let _=a.position.distanceTo(h);if(_<.1&&(_=o),m.copy(a.position).sub(h).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),at.copy(tt(d.x,d.y)),rt.copy(at).add(m.clone().multiplyScalar(_)),u||H){h.copy(at),a.position.copy(rt),a.lookAt(h),Bt();return}H=!0,De.copy(h),Ue.copy(a.position);let b=performance.now(),D=0;Vn.shadowMap.enabled=!1;function P(B){D++,D%2===0&&Bt();let O=Math.min(1,(B-b)/dt),U=O*(2-O);h.lerpVectors(De,at,U),a.position.lerpVectors(Ue,rt,U),a.lookAt(h),O<1?requestAnimationFrame(P):(Vn.shadowMap.enabled=!0,H=!1)}requestAnimationFrame(P)}let kt=0,Rt=1,Ut="draft",ke="pvp",St=1,Cn={1:"",2:""},yi=null,Gi=null,xi=null,Wi="long";function yn(u){return ke==="online"&&Cn[u]?Cn[u]:"Player "+u}let js=1,Cs=0,Xi=null;async function Ea(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{Xi=await navigator.wakeLock.request("screen"),Xi.addEventListener("release",()=>{Xi=null})}catch{Xi=null}}function Jo(){Xi&&(Xi.release().catch(()=>{}),Xi=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&ke==="cvcpu"&&Ut==="playing"&&Ea()});let w="balanced",G=new Set(as),ee=0,Z=null,Q=null,Ne=new Set,_e=[],Re=0,ze=null,Ke=new Map,pt=null;function _t(u){if(!u||u.hp<=0)return;pt=u.id;let d=document.getElementById("unit-preview-card"),_=document.getElementById("unit-preview-image"),b=document.getElementById("unit-preview-name"),D=document.getElementById("unit-preview-meta"),P=document.getElementById("unit-preview-stats");d.classList.remove("player-1","player-2"),d.classList.add(u.player===1?"player-1":"player-2"),d.classList.toggle("level-2",u.level>=2&&u.level<3),d.classList.toggle("level-3",u.level>=3),_.src=Vr[u.class]||"",_.alt=u.name,b.textContent=u.name,D.textContent=`Lv.${u.level} ${u.class} \u2014 ${yn(u.player)}`;let B=[["HP",`${u.hp}/${u.maxHp}`,"stat-val-hp"],["MP",`${u.mp}/${u.maxMp}`,""],["STR",Ti(u,"str"),""],["AGI",Ti(u,"agi"),""],["VIT",Ti(u,"vit"),""],["DEX",Ti(u,"dex"),""],["LUK",Ti(u,"luk"),""],["INT",Ti(u,"int"),""]];u.tempDebuff&&u.tempDebuff.poison!=null&&B.push(["Poison",`${u.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),P.innerHTML=B.map(([U,X,ce])=>{let Ee=ce?` ${ce}`:"";return`<span class="stat-label">${U}</span><span class="stat-val${Ee}">${X}</span>`}).join("");let O=u.maxHp>0&&u.hp/u.maxHp<.3;d.classList.toggle("low-hp",O),d.style.display="block"}function on(){pt=null;let u=document.getElementById("unit-preview-card");u.classList.remove("low-hp","level-2","level-3"),u.style.display="none"}let Ct=!1,nn=!1,Hn=!1,Tt=null,Ye=!1,Nn=!1,$t=!1,Pn=[],Qn=new gi;n.add(Qn);let qn=[],qi=!0,dn=0,Oi=0;function Bt(){qi=!0,dn=performance.now()}let zn=new gi;n.add(zn);let Ps=[],jo=mt,Ta=.02,Zd=3368703,Jd=13382451;function jd(u,d){let _=u/2,b=_-d,D=new Br;D.moveTo(-_,-_),D.lineTo(_,-_),D.lineTo(_,_),D.lineTo(-_,_),D.lineTo(-_,-_);let P=new Fr;return P.moveTo(-b,-b),P.lineTo(b,-b),P.lineTo(b,b),P.lineTo(-b,b),P.lineTo(-b,-b),D.holes.push(P),new _a(D)}let Qd=jd(jo,Ta);function wi(u=null){let d=le.filter(_=>_.hp>0&&_.id!==u).map(_=>`${_.id},${_.x},${_.y},${_.player}`).sort().join("|");if(!(wi._lastSig===d&&wi._lastExclude===u)){for(wi._lastSig=d,wi._lastExclude=u,Ps.forEach(_=>_.dispose()),Ps.length=0;zn.children.length;){let _=zn.children[0];zn.remove(_)}le.filter(_=>_.hp>0&&_.id!==u).forEach(_=>{let b=_.x,D=_.y,B=(Kn+e.height[D][b]*.35)/2+Kn/2,O=b*mt-et+mt/2,U=D*mt-We+mt/2,X=B+.02,ce=_.player===1?Zd:Jd,Ee=new wn({color:ce,side:Sn}),W=new Ze(Qd,Ee);W.rotation.x=-Math.PI/2,W.position.set(O,X,U),zn.add(W),Ps.push(Ee)}),Bt()}}let ef=1.15,Qo={1:8102901,2:15628943},hi=(()=>{let u=new wn({color:Qo[1]}),d=new Ze(new Ui(.1,.25,8),u);return d.rotation.x=Math.PI,d.visible=!1,n.add(d),d})();function el(){if(Ut!=="playing"||_e.length===0||$t){hi.visible=!1,hi.removeFromParent(),n.add(hi);return}let u=_e[Re],d=le.find(b=>b.id===u);if(!d||d.hp<=0){hi.visible=!1,hi.removeFromParent(),n.add(hi);return}let _=Je.get(u);if(!_){hi.visible=!1;return}hi.removeFromParent(),_.add(hi),hi.position.set(0,ef,0),hi.material&&hi.material.color.setHex(Qo[d.player]??Qo[1]),hi.visible=!0}function A_(u){let d=[[0,1],[0,-1],[1,0],[-1,0]],_=[];for(let[b,D]of d){let P=u.x+b,B=u.y+D;!Gr(e,P,B)||le.some(U=>U.id!==u.id&&U.x===P&&U.y===B&&U.hp>0)||_.push(Math.atan2(b,D))}return _}function ah(u){if(Pn.length===0)return u;if(Pn.length===1)return Pn[0];let d=Pn[0],_=Math.abs(oh(u-d));for(let b=1;b<Pn.length;b++){let D=Math.abs(oh(u-Pn[b]));D<_&&(_=D,d=Pn[b])}return d}function oh(u){for(;u>Math.PI;)u-=2*Math.PI;for(;u<-Math.PI;)u+=2*Math.PI;return u}let tf=1.2,Fi=(()=>{let u=new Ze(new Ui(.12,.35,8),new wn({color:4500223}));return u.rotation.x=-Math.PI/2,u.visible=!1,n.add(u),u})();function nf(u,d){if(!$t||_e.length===0||Pn.length===0)return;let _=_e[Re],b=le.find(Ee=>Ee.id===_),D=Je.get(_);if(!b||!D)return;Ua(u,d),ls.setFromCamera(cs,a);let P=ls.intersectObjects(se.children,!0);if(P.length===0)return;let B=null;for(let Ee of P){let W=Ee.object;for(;W&&(W.userData.gx==null||W.userData.gy==null);)W=W.parent;if(W&&W.userData.gx!=null){B=Ee.point;break}}if(!B)return;let O=tt(b.x,b.y),U=B.x-O.x,X=B.z-O.z;if(U*U+X*X<1e-6)return;let ce=Math.atan2(U,X);D.rotation.y=ah(ce)}function sf(){if(_e.length===0)return;let u=_e[Re],d=le.find(D=>D.id===u),_=Je.get(u);if(!d||!_)return;Pn=[[0,1],[0,-1],[1,0],[-1,0]].map(([D,P])=>Math.atan2(D,P)),Fi.removeFromParent(),_.add(Fi),Fi.position.set(0,tf,0),Fi.rotation.x=-Math.PI/2,Fi.rotation.y=0,Fi.rotation.z=Math.PI,Fi.visible=!0,_.rotation.y=Pn[0]}function rf(){Fi.visible=!1,Fi.removeFromParent(),n.add(Fi)}let wa=[];(function(){let d=rs,_=[1];for(let b=0;b<Math.floor((d-1)/2);b++)_.push(2,2,1,1);d%2===1?_.push(2):(_.push(2,2),_.push(1)),wa=_})();function Ai(){return wa[ee]}function lh(){let u=Ai(),d=0;for(let _=0;_<ee;_++)wa[_]===u&&d++;return d+1}function Wr(){re.forEach(_=>{he.remove(_.mesh),_.mesh.geometry.dispose(),_.mesh.material&&_.mesh.material.dispose&&_.mesh.material.dispose(),_.glowMesh&&(he.remove(_.glowMesh),_.glowMesh.geometry.dispose(),_.glowMesh.material&&_.glowMesh.material.dispose&&_.glowMesh.material.dispose())}),re.clear(),we={30:!1,20:!1,10:!1};let u=rs,d=[1];for(let _=0;_<Math.floor((u-1)/2);_++)d.push(2,2,1,1);u%2===1?d.push(2):(d.push(2,2),d.push(1)),wa=d,Ut="draft",ee=0,G=new Set(as),Z=null,Q=null,Ne.clear(),An(),tl(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function ch(){return le.filter(u=>u.hp>0).sort((u,d)=>{let _=Le(u,"agi"),b=Le(d,"agi");if(b!==_)return b-_;let D=Le(u,"dex");return Le(d,"dex")-D}).map(u=>u.id)}function af(){document.getElementById("draft-panel").style.display="none";let u=document.getElementById("draft-placement-card");u&&(u.style.display="none",u.innerHTML=""),An();let d=document.getElementById("battle-start-overlay");d&&(d.classList.add("visible"),d.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");for(_&&(_.style.display="none",_.innerHTML=""),Ut="playing",kt=0,_e=ch(),Re=0;Re<_e.length&&le.find(P=>P.id===_e[Re]).hp<=0;)Re++;Re>=_e.length&&(Re=0);let b=le.find(P=>P.id===_e[Re]);Rt=b?b.player:1,Ye=!1,Nn=!1,ze=_e[Re],setTimeout(()=>{d&&(d.classList.remove("visible"),d.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",wi(),Ht(),el(),tn(!0),ke==="cvcpu"&&Ea()},4e3)}function tl(){let u=document.getElementById("draft-panel"),d=document.getElementById("draft-title"),_=document.getElementById("draft-classes"),b=document.getElementById("draft-message"),D=document.getElementById("turn-player"),P=document.getElementById("draft-placement-card");if(Z){u.style.display="none",D.textContent=`Draft: ${yn(Ai())} \u2014 place ${Jt[Z].name}`;let U=Ai();P.style.display="flex",P.classList.remove("player-1","player-2"),P.classList.add("player-"+U),P.style.left=U===1?"24px":"",P.style.right=U===2?"24px":"";let X=[...le.filter(W=>W.player===U).map(W=>W.class),Z],ce=(W,ue)=>{let de=Jt[W];return`
        <div class="draft-class-card${ue?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Vr[W]||""}" alt="${de.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
      `},Ee=3;if(X.length>Ee){P.classList.add("draft-placement-cols");let W=[];for(let de=0;de<X.length;de+=Ee)W.push(X.slice(de,de+Ee));let ue=X.length-1;P.innerHTML=W.map((de,Be)=>{let Ce=Be===W.length-1,Ve=de.map((Lt,it)=>{let _n=Be*Ee+it===ue;return ce(Lt,_n)}).join("");return`<div class="draft-placement-col${Ce?" draft-placement-col-current":""}">${Ve}</div>`}).join("")}else P.classList.remove("draft-placement-cols"),P.innerHTML=X.map((W,ue)=>{let de=ue===X.length-1;return ce(W,de)}).join("");ke==="pvcpu"&&Ai()===2&&setTimeout(Yr,500),ke==="cvcpu"&&setTimeout(Yr,500);return}P.style.display="none",P.innerHTML="",Ut==="draft"&&(u.style.display="flex");let B=Ai();if(ke!=="online"||B===St){let Be=function(){let Ce=Q;if(!Ce||!Jt[Ce]){U&&(U.style.display=""),X&&(X.style.display="none"),ce&&(ce.style.display="none"),de&&(de.style.display="none");return}let Ve=Jt[Ce],Lt=ba[Ce]||[];U&&(U.style.display="none"),X&&(X.src=Vr[Ce]||"",X.alt=Ve.name,X.style.display="block"),ce&&(ce.style.display="block"),Ee&&(Ee.textContent=Ve.name),W&&(W.innerHTML=[["HP",Ve.hp],["MP",Ve.mp],["STR",Ve.str],["AGI",Ve.agi],["VIT",Ve.vit],["DEX",Ve.dex],["LUK",Ve.luk],["INT",Ve.int],["Range",Ve.range]].map(([it,Xt])=>`<span class="draft-stat-label">${it}</span><span class="draft-stat-value">${Xt}</span>`).join("")),ue&&(ue.innerHTML=Lt.length?Lt.map(it=>`<div class="draft-detail-skill"><span class="draft-detail-skill-name">${it.name}</span><span class="draft-detail-skill-desc">${it.description||""}</span></div>`).join(""):'<div class="draft-detail-skill">No skills</div>'),de&&(de.style.display="block",de.disabled=!G.has(Ce),de.onclick=()=>{let it=Q;it&&G.has(it)&&nl(it)}),_.querySelectorAll(".draft-class-card").forEach(it=>{it.classList.toggle("draft-class-card-selected",it.dataset.classKey===Ce)})};d.textContent=`${yn(B)}: Pick a class (${lh()}/${rs})`,b.textContent="",_.innerHTML="",D.textContent=`Draft: ${yn(B)} \u2014 pick a class`;let U=document.getElementById("draft-detail-placeholder"),X=document.getElementById("draft-detail-image"),ce=document.getElementById("draft-detail-content"),Ee=document.getElementById("draft-detail-name"),W=document.getElementById("draft-detail-stats"),ue=document.getElementById("draft-detail-skills"),de=document.getElementById("draft-select-btn");__([...as]).forEach(Ce=>{let Ve=G.has(Ce),Lt=Jt[Ce],it=document.createElement("button");it.type="button",it.dataset.classKey=Ce,it.className="draft-class-card"+(Ve?"":" draft-class-card-unavailable")+(Q===Ce?" draft-class-card-selected":""),it.disabled=!Ve,it.innerHTML=`
          <img class="draft-class-card-image" src="${Vr[Ce]||""}" alt="${Lt.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${Lt.name}</div>
          </div>
        `,Ve&&it.addEventListener("click",()=>{Q=Ce,Be()}),_.appendChild(it)}),Be()}else{d.textContent=`${yn(B)} is picking a class`,b.textContent="",_.innerHTML="",D.textContent=`Draft: ${yn(B)} \u2014 pick a class`;let U=document.getElementById("draft-detail-placeholder"),X=document.getElementById("draft-detail-image"),ce=document.getElementById("draft-detail-content"),Ee=document.getElementById("draft-select-btn");U&&(U.style.display=""),X&&(X.style.display="none"),ce&&(ce.style.display="none"),Ee&&(Ee.style.display="none")}ke==="pvcpu"&&Ai()===2&&setTimeout(Yr,500),ke==="cvcpu"&&setTimeout(Yr,500)}function nl(u){if(!G.has(u)||Z)return;Z=u;let d=Ai(),_=new Set(le.map(P=>P.y*e.w+P.x)),b=b_(e,d,_),D=Xd(e,b);Ne=new Set(D.map(P=>P.gy*e.w+P.gx)),Rf(D),tl(),ke==="online"&&d===St&&typeof cn=="function"&&cn({type:"draftPick",classKey:u})}function il(u,d){if(!Z)return;let _=Ai(),b=d*e.w+u;if(!Ne.has(b))return;let D=Jt[Z],P={id:j++,player:_,x:u,y:d,level:1,name:D.name,class:Z,hairColor:(Ko[Z]||Ko.knight).hair,hp:D.hp,maxHp:D.maxHp,mp:D.mp,maxMp:D.maxMp,str:D.str,agi:D.agi,vit:D.vit,dex:D.dex,luk:D.luk,int:D.int,range:D.range};le.push(P),Oe(P);let B=Je.get(P.id);B&&(B.rotation.y=P.player===1?Math.PI:0),G.delete(Z),Z=null,Ne.clear(),An(),ke==="online"&&_===St&&typeof cn=="function"&&cn({type:"draftPlace",gx:u,gy:d});let O=document.getElementById("draft-placement-card");if(O&&(O.style.display="none",O.innerHTML=""),ee++,ee>=2*rs){af();return}let U=Ai(),X=lh(),ce=document.getElementById("draft-panel"),Ee=document.getElementById("draft-title"),W=document.getElementById("draft-message"),ue=document.getElementById("draft-classes"),de=document.getElementById("turn-player"),Be=ke!=="online"||U===St;ce&&Ee&&ue&&de&&(ce.style.display="flex",Ee.textContent=Be?`${yn(U)}: Pick a class (${X}/${rs})`:`${yn(U)} is picking a class`,W&&(W.textContent=Be?"Get ready\u2026":""),ue.innerHTML="",de.textContent=`Draft: ${yn(U)} \u2014 pick a class`),setTimeout(tl,1500)}function Ht(){Ht._pending||(Ht._pending=!0,requestAnimationFrame(()=>{Ht._pending=!1,of()}))}function of(){let u=Ht._cache||(Ht._cache={}),d=u.turnEl||(u.turnEl=document.getElementById("turn-player")),_=u.menuLabel||(u.menuLabel=document.getElementById("menu-label")),b=u.turnMenu||(u.turnMenu=document.getElementById("turn-menu")),D=u.unitInfo||(u.unitInfo=document.getElementById("unit-info")),P=u.unitNameEl||(u.unitNameEl=document.getElementById("unit-name")),B=u.unitLevelClassEl||(u.unitLevelClassEl=document.getElementById("unit-level-class")),O=u.unitStatsEl||(u.unitStatsEl=document.getElementById("unit-stats")),U=u.unitClassImageEl||(u.unitClassImageEl=document.getElementById("unit-class-image"));if(Ut==="playing"&&le.forEach(W=>{if(W.hp<=0)return;let ue=Je.get(W.id);ue&&bt(ue,W.maxHp>0&&W.hp/W.maxHp<ot)}),b.classList.remove("player-1","player-2"),b.classList.add(Rt===1?"player-1":"player-2"),b.classList.toggle("level-2",!1),b.classList.toggle("level-3",!1),Ut==="playing"&&_e.length>0){let W=_e[Re],ue=le.find(de=>de.id===W&&de.hp>0);ke==="online"&&ue&&ue.player!==St?ze=null:ue&&(ze==null||!le.find(de=>de.id===ze&&de.hp>0))&&(ze=W)}if(ze!=null){let W=le.find(ue=>ue.id===ze);if(W&&W.hp>0){D.classList.remove("no-unit");let ue=W.maxHp>0&&W.hp/W.maxHp<.25;b.classList.toggle("low-hp",ue),b.classList.toggle("level-2",W.level>=2&&W.level<3),b.classList.toggle("level-3",W.level>=3),P.textContent=W.name,B.textContent=`Lv.${W.level} ${W.class}`,U.src=Vr[W.class]||"",U.alt=W.name;let de=[["HP",`${W.hp}/${W.maxHp}`,"stat-val-hp"],["MP",`${W.mp}/${W.maxMp}`,""],["STR",Ti(W,"str"),""],["AGI",Ti(W,"agi"),""],["VIT",Ti(W,"vit"),""],["DEX",Ti(W,"dex"),""],["LUK",Ti(W,"luk"),""],["INT",Ti(W,"int"),""]];W.tempDebuff&&W.tempDebuff.poison!=null&&de.push(["Poison",`${W.tempDebuff.poison} dmg/turn`,"stat-val-poison"]),O.innerHTML=de.map(([Be,Ce,Ve])=>{let Lt=Ve?` ${Ve}`:"";return`<span>${Be}</span><span class="stat-val${Lt}">${Ce}</span>`}).join("")}else b.classList.remove("low-hp","level-2","level-3"),D.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",B.textContent="",O.textContent="",U.src="",U.alt=""}else b.classList.remove("low-hp","level-2","level-3"),D.classList.add("no-unit"),P.textContent="\u2014 Select a unit \u2014",B.textContent="",O.textContent="",U.src="",U.alt="";if(ze!=null)d.textContent=`${yn(Rt)} \u2014 Unit ${P.innerHTML} active`;else{let W=_e.length?le.find(ue=>ue.id===_e[Re]):null;d.textContent=W?`${W.name} (${yn(Rt)})`:yn(Rt)}_.textContent=yn(Rt);let X=u.btnAttack||(u.btnAttack=document.getElementById("btn-attack")),ce=u.btnSkill||(u.btnSkill=document.getElementById("btn-skill")),Ee=u.btnEnd||(u.btnEnd=document.getElementById("btn-end"));if(ke==="cvcpu"&&Ut==="playing")X.disabled=!0,ce.disabled=!0,Ee&&(Ee.disabled=!0),d.textContent=`${yn(Rt)} (CPU)`;else if($t)X.disabled=!0,ce.disabled=!0,d.textContent="Click on map to choose facing direction";else if(Ut==="playing"){X.disabled=Nn;let W=_e.length?_e[Re]:null,ue=W?le.find(Ce=>Ce.id===W&&Ce.hp>0):null,de=ke!=="cvcpu"&&(ke!=="pvcpu"||Rt===1)&&(ke!=="online"||Rt===St),Be=de&&ue&&!Nn?fl(ue):[];ce.disabled=Nn||!de||Be.length===0,Ee&&(Ee.disabled=ke==="online"&&Rt!==St)}if(Ut==="playing"){let W=Math.min(kt+1,ss);d.textContent=(d.textContent||"")+` \u2014 Turn ${W}/${ss}`;let ue=u.turnsLeftEl||(u.turnsLeftEl=document.getElementById("turns-left")),de=u.turnsLeftValueEl||(u.turnsLeftValueEl=document.getElementById("turns-left-value"));if(ue&&de){ue.style.display="";let Be=Math.max(0,ss-kt);de.textContent=String(Be),ue.classList.toggle("turns-left-low",Be<=10),(Be===30||Be===20||Be===10)&&(we[Be]||(ut(Be),we[Be]=!0))}}else{let W=u.turnsLeftEl||(u.turnsLeftEl=document.getElementById("turns-left"));W&&(W.style.display="none")}Ut==="playing"&&dl(Rt)&&!Ct&&setTimeout(fn,700)}function ln(){if(ke==="online"&&Rt===St&&typeof Ns=="function"){let O=_e[Re],U=Je.get(O),X=U?.rotation.y;Ns({type:"endTurn",unitId:O,facingAngle:X})}Bt(),on(),nn=!1,Hn=!1,Tt=null,$t=!1,Pn=[],rf(),An();let u=_e.length;if(u===0)return;let d=_e[Re],_=le.find(O=>O.id===d);if(_&&_.tempDebuff&&_.tempDebuff.duration--,_&&_.tempDebuff&&_.tempDebuff.duration<=0&&(_.tempDebuff=void 0),_&&_.tempBuff&&_.tempBuff.duration--,_&&_.tempBuff&&_.tempBuff.duration<=0&&(_.tempBuff=void 0),_&&_.hp>0){let O=Math.ceil(Le(_,"int")*.15);_.mp=Math.min(_.maxMp,_.mp+O)}if(_&&_.hp>0){let O=_.x,U=_.y;e.type[U][O]===nt.CENTER&&_.level===1&&xe(_);let X=_.player===1?nt.BASE_TOP:nt.BASE_BOTTOM;e.type[U][O]===X&&_.level===2&&xe(_)}if(kt++,kt>=ss){Bf();return}let b=(Re+1)%u,D=0;for(;D<u;){let O=_e[b],U=le.find(X=>X.id===O);if(U&&U.hp>0)break;b=(b+1)%u,D++}let P=b===0;Re=b;for(let O=0;O<u;O++){let U=_e[Re],X=le.find(Ee=>Ee.id===U);if(!X||X.hp<=0)break;let ce=X.tempDebuff&&X.tempDebuff.poison!=null?X.tempDebuff.poison:0;if(ce<=0)break;if(console.log("tempDebuff damage",{debuffKey:"poison",damage:ce}),X.hp=Math.max(0,X.hp-ce),ti(X.x,X.y,String(ce),!1,"poison"),Fe(X),X.hp<=0){In(X),b=(Re+1)%u;let Ee=0;for(;Ee<u;){let W=_e[b],ue=le.find(de=>de.id===W);if(ue&&ue.hp>0)break;b=(b+1)%u,Ee++}Re=b;continue}break}let B=le.find(O=>O.id===_e[Re]);Rt=B?B.player:1,Ye=!1,Nn=!1,ze=_e[Re],P&&(_e=ch(),Re=0),Ht(),el(),tn()}document.getElementById("btn-attack").addEventListener("click",()=>{if(Ct||Nn||Ut!=="playing"||_e.length===0)return;if(ke==="online"){let D=_e[Re],P=le.find(B=>B.id===D);if(!P||P.player!==St)return}on();let u=_e[Re],d=le.find(D=>D.id===u);if(!d||d.hp<=0)return;let _=d.range!=null?d.range:1;ze=u,nn=!0;let b=qd(e,d.x,d.y,_);Ke=new Map,b.forEach((D,P)=>{let B=P%e.w,O=Math.floor(P/e.w);Js(e,d.x,d.y,B,O)&&Ke.set(P,D)}),Cf(Ke),Ht()}),document.getElementById("btn-skill").addEventListener("click",u=>{if(u.preventDefault(),u.stopPropagation(),Ct||Nn)return;let d=_e[Re],_=d?le.find(O=>O.id===d&&O.hp>0):null;if(!_||_.player!==Rt||ke==="online"&&_.player!==St)return;let b=document.getElementById("skill-list-overlay"),D=document.getElementById("btn-skill");if(!D)return;if(b&&b.style.display==="block"){b.style.display="none";return}let P=fl(_),B=D.getBoundingClientRect();b||(b=document.createElement("div"),b.id="skill-list-overlay",b.className="skill-list-overlay",b.setAttribute("aria-hidden","true"),document.body.appendChild(b)),b.style.left=`${B.left}px`,b.style.top=`${B.top-4}px`,b.style.transform="translateY(-100%)",b.style.right="auto",b.style.bottom="auto",b.style.display="none",P.length===0?b.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(b.innerHTML=P.map((O,U)=>`<button type="button" class="skill-option" data-skill-index="${U}" ${O.disabled?"disabled":""}>
          <span class="skill-name">${O.name}</span> <span class="skill-meta">${O.cost} MP \xB7 Lv.${O.level}</span><br/>
          <span class="skill-meta">${O.description}</span>
        </button>`).join(""),b.querySelectorAll(".skill-option").forEach((O,U)=>{O.addEventListener("click",X=>{X.preventDefault(),X.stopPropagation();let ce=P[U];if(Tt=ce,b.style.display="none",b.setAttribute("aria-hidden","true"),ce.target==="self"){if(_.mp<ce.cost)return;_.mp-=ce.cost,Nn=!0;let Ee={showFloatingCombatText:ti,handleUnitDeath:In,updateUnitSlashVisibility:Fe,updateTurnUI:Ht};ke==="online"&&_.player===St&&typeof cn=="function"&&(cn({type:"requestRender"}),Ns({type:"skill",unitId:_.id,targetId:_.id,effectKey:ce.effectKey})),Da(_,_,ce,Ee,()=>{An(),Hn=!1,Tt=null,ar=new Set,Ye?ln():Ht()}),Ht();return}if(ce.target==="ally"&&$r(_,ce,le).filter(ue=>ue.targetUnit&&ue.targetUnit.id!==_.id).length===0&&_.mp>=ce.cost){_.mp-=ce.cost,Nn=!0;let ue={showFloatingCombatText:ti,handleUnitDeath:In,updateUnitSlashVisibility:Fe,updateTurnUI:Ht};ke==="online"&&_.player===St&&typeof cn=="function"&&(cn({type:"requestRender"}),Ns({type:"skill",unitId:_.id,targetId:_.id,effectKey:ce.effectKey})),Da(_,_,ce,ue,()=>{An(),Hn=!1,Tt=null,ar=new Set,Ye?ln():Ht()}),Ht();return}Hn=!0,nn=!1,Af(_,ce),Ht()})})),requestAnimationFrame(()=>{b.style.display="block",b.style.visibility="visible",b.setAttribute("aria-hidden","false")})}),document.addEventListener("click",u=>{let d=document.getElementById("skill-list-overlay"),_=document.getElementById("btn-skill"),b=document.querySelector(".skill-wrap");!d||d.style.display!=="block"||b&&b.contains(u.target)||d.contains(u.target)||(d.style.display="none",d.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(Ct||$t||Ut!=="playing"||_e.length===0)return;let u=_e[Re],d=le.find(b=>b.id===u);if(!d||d.hp<=0||ke==="online"&&d.player!==St)return;$t=!0,ze=null,nn=!1,Ke=new Map,An(),sf(),el();let _=document.getElementById("turn-player");_.textContent="Click on map to choose facing direction",Ht()}),h.set(0,8,0),a.position.copy(h).add(c),a.lookAt(h);let Qs=document.getElementById("mode-select-overlay"),hh=document.getElementById("mode-carousel-track"),uh=document.getElementById("mode-carousel-prev"),dh=document.getElementById("mode-carousel-next"),Aa=document.getElementById("mode-carousel-dots"),Yi=document.getElementById("mode-play-btn"),fh=document.getElementById("mode-settings-pvp"),ph=document.getElementById("mode-settings-pvp-map"),mh=document.getElementById("mode-settings-pvp-none"),gh=document.getElementById("mode-settings-options"),Ra=document.getElementById("pvp-map-mode"),Xr=document.getElementById("ai-draft-preference"),lf=document.getElementById("cvcpu-num-games"),yh=document.getElementById("cvcpu-grid-w"),xh=document.getElementById("cvcpu-grid-h"),_h=document.getElementById("cvcpu-center-plaza"),vh=document.getElementById("cvcpu-max-turns"),er=document.getElementById("move-speed"),tr=document.getElementById("draft-picks-per-player"),Is=document.getElementById("online-connect-overlay"),_i=document.getElementById("online-player-name"),Ls=document.getElementById("online-create-section"),nr=document.getElementById("online-join-section"),ir=document.getElementById("online-offer-text"),Ca=document.getElementById("online-reply-text"),Pa=document.getElementById("online-paste-offer"),qr=document.getElementById("online-join-answer-section"),sr=document.getElementById("online-answer-text"),sl=document.getElementById("online-error"),Mh=document.getElementById("online-waiting-msg"),Ds=Rs?["pvp","pvcpu","cvcpu","online","story"]:["pvp","pvcpu","online","story"],rl=Ds.length-1,Yn=0;function al(){return Yn===rl}function cf(){return Ds[Yn]==="online"}function Ia(u){Yn=Math.max(0,Math.min(u,rl)),hh&&(hh.style.transform=`translateX(-${Yn*100}%)`),Aa&&Aa.querySelectorAll(".mode-dot").forEach((_,b)=>{_.classList.toggle("active",b===Yn),_.setAttribute("aria-selected",b===Yn)}),fh&&(fh.style.display=Yn===0||Yn===1||al()||Ds[Yn]==="online"?"":"none"),ph&&(ph.style.display=Yn===0||Yn===1||Ds[Yn]==="online"?"":"none"),mh&&(mh.style.display=al()?"":"none"),gh&&(gh.style.display=Rs&&Ds[Yn]==="cvcpu"?"":"none");let d=Yi?.querySelector(".mode-play-text");Yi&&d&&(al()?(Yi.disabled=!0,d.textContent="Coming Soon"):(Yi.disabled=!1,d.textContent=cf()?"Connect":"Play game"))}if(Aa)for(let u=0;u<=rl;u++){let d=document.createElement("button");d.type="button",d.className="mode-dot"+(u===0?" active":""),d.setAttribute("role","tab"),d.setAttribute("aria-label",`Mode ${u+1}`),d.setAttribute("aria-selected",u===0),d.addEventListener("click",()=>Ia(u)),Aa.appendChild(d)}if(uh&&uh.addEventListener("click",()=>Ia(Yn-1)),dh&&dh.addEventListener("click",()=>Ia(Yn+1)),Qs&&!Rs){let u=Qs.querySelector('.mode-slide[data-mode="cvcpu"]');u&&u.parentNode&&u.parentNode.removeChild(u)}if(Ia(0),er&&(er.value=String(ws),er.addEventListener("input",()=>{let u=parseInt(er.value,10);!Number.isNaN(u)&&u>=0&&(ws=u)}),er.addEventListener("change",()=>{let u=parseInt(er.value,10);!Number.isNaN(u)&&u>=0&&(ws=u)})),tr&&(tr.value=String(rs),tr.addEventListener("input",()=>{let u=parseInt(tr.value,10);!Number.isNaN(u)&&u>=1&&(rs=u)}),tr.addEventListener("change",()=>{let u=parseInt(tr.value,10);!Number.isNaN(u)&&u>=1&&(rs=u)})),Xr&&(g_.forEach(u=>{let d=document.createElement("option");d.value=u.value,d.textContent=u.label,Xr.appendChild(d)}),Xr.value=w,Xr.addEventListener("change",()=>{w=Xr.value})),Is){let u=document.getElementById("online-btn-create"),d=document.getElementById("online-btn-join"),_=document.getElementById("online-btn-copy-offer"),b=document.getElementById("online-btn-connect"),D=document.getElementById("online-btn-join-connect"),P=document.getElementById("online-btn-copy-answer");u&&u.addEventListener("click",async()=>{let B=_i&&_i.value.trim()||"Player 1";if(!B){ei("Enter your name");return}ei("");try{Wi=Ra&&Ra.value||"long",xi=(Date.now()^Math.random()*4294967295)>>>0,gt(Wi,xi);let O=await df(B,xi,Wi);ir&&(ir.value=O),Ls&&(Ls.style.display="flex",Ls.style.alignItems="flex-start"),nr&&(nr.style.display="none")}catch(O){ei(O.message||"Failed to create game")}}),_&&ir&&_.addEventListener("click",()=>{ir.select(),document.execCommand("copy")}),b&&Ca&&b.addEventListener("click",async()=>{let B=Ca.value.trim();if(!B){ei("Paste your friend's reply");return}ei("");try{await pf(B)}catch(O){ei(O.message||"Failed to connect")}}),d&&d.addEventListener("click",()=>{if(!(_i&&_i.value.trim()||"Player 2")){ei("Enter your name");return}ei(""),Ls&&(Ls.style.display="none"),nr&&(nr.style.display="flex")}),D&&Pa&&D.addEventListener("click",async()=>{let B=Pa.value.trim();if(!B){ei("Paste the host's code");return}ei("");try{St=2,Cn[2]=_i&&_i.value.trim()||"Player 2";let O=await ff(Cn[2],B);sr&&(sr.value=O),qr&&(qr.style.display="flex",qr.style.alignItems="flex-start")}catch(O){ei(O.message||"Failed to join")}}),P&&sr&&P.addEventListener("click",()=>{sr.select(),document.execCommand("copy")})}let os=new Audio;os.loop=!0,os.volume=.3,os.preload="auto";let ol=window.location.href.replace(/[^/]*$/,""),bh=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:ol+(ol.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");os.src=bh,os.addEventListener("error",()=>{let u=ol+"assets/music/tavern.mp3";u!==bh&&(os.src=u)});function hf(){os.paused&&os.play().catch(()=>{})}function ei(u){sl&&(sl.textContent=u||"",sl.style.display=u?"block":"none")}function Sh(){Is&&(Is.style.display="none",Is.setAttribute("aria-hidden","true"))}function uf(){ei(""),St=1,Cn={1:"",2:""},Is&&(Is.style.display="flex",Is.setAttribute("aria-hidden","false")),_i&&(_i.value=""),Ls&&(Ls.style.display="none"),nr&&(nr.style.display="none"),ir&&(ir.value=""),Ca&&(Ca.value=""),Pa&&(Pa.value=""),sr&&(sr.value=""),qr&&(qr.style.display="none"),Mh&&(Mh.style.display="block")}function Eh(u){return new Promise(d=>{if(u.iceGatheringState==="complete"){d();return}let _=()=>{u.iceGatheringState==="complete"&&(u.removeEventListener("icegatheringstatechange",_),d())};u.addEventListener("icegatheringstatechange",_)})}async function df(u,d,_){yi&&(yi.close(),yi=null,Gi=null);let b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),D=[];b.addEventListener("icecandidate",O=>{O.candidate&&D.push(O.candidate)});let P=b.createDataChannel("game-sync",{ordered:!0});Gi=P,yi=b,P.addEventListener("open",()=>wh(P,!0));let B=await b.createOffer();return await b.setLocalDescription(B),await Eh(b),JSON.stringify({type:"offer",sdp:b.localDescription.sdp,candidates:D,playerName:u||"Player 1"})}async function ff(u,d){let _=JSON.parse(d),b=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),D=[];if(b.addEventListener("icecandidate",B=>{B.candidate&&D.push(B.candidate)}),b.addEventListener("datachannel",B=>{Gi=B.channel,yi=b,wh(Gi,!1)}),await b.setRemoteDescription(new RTCSessionDescription({type:"offer",sdp:_.sdp})),_.candidates&&_.candidates.length)for(let B of _.candidates)await b.addIceCandidate(new RTCIceCandidate(B));let P=await b.createAnswer();return await b.setLocalDescription(P),await Eh(b),JSON.stringify({type:"answer",sdp:b.localDescription.sdp,candidates:D,playerName:u||"Player 2"})}async function pf(u){let d=JSON.parse(u);if(!yi){ei("Create a game first, then paste your friend's reply.");return}let _=yi.signalingState;if(_!=="stable"){if(_!=="have-local-offer"){ei("Wrong step: create a game first and send the code, then paste the reply.");return}if(await yi.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:d.sdp})),d.candidates&&d.candidates.length)for(let b of d.candidates)await yi.addIceCandidate(new RTCIceCandidate(b))}}let Th=0,Us=0,ll=[],cl=!1,hl=[];function rr(){Us=Math.max(0,Us-1),Us===0&&ul()}function ul(){for(;Us===0&&ll.length>0;){let u=ll.shift();if(u.type==="move"){yf(u.unitId,u.toGx,u.toGy);return}if(u.type==="attack"){xf(u.unitId,u.targetId,u.hit,u.damage);return}if(u.type==="skill"){_f(u);return}if(u.type==="endTurn"){if(u.unitId!=null&&u.facingAngle!=null){let d=Je.get(u.unitId);d&&(d.rotation.y=u.facingAngle)}ln();return}if(u.type==="unitDeath"){let d=le.find(b=>b.id===u.unitId),_=u.killerId!=null?le.find(b=>b.id===u.killerId):null;d&&(d.hp=0,In(d,_,{skipSync:!0})),ul();return}}}function wh(u,d){if(u.binaryType="arraybuffer",u.addEventListener("message",P=>{try{let B=JSON.parse(P.data);if(B.seq!=null&&B.seq<=Th)return;B.seq!=null&&(Th=B.seq),mf(B,d)}catch(B){console.warn("Online message parse error",B)}}),u.addEventListener("close",()=>{ke==="online"&&ei("Connection lost.")}),!d){let P=Cn[2]||_i&&_i.value.trim()||"Player 2";cn({type:"joined",playerName:P});return}let _=_i&&_i.value.trim()||"Player 1",b=xi??(Date.now()^Math.random()*4294967295)>>>0,D=Wi||"long";Cn[1]=_,cn({type:"start",mapSeed:b,mapMode:D,playerName:_}),Sh(),Wr()}function mf(u,d){if(u.type==="start"){Cn[1]=u.playerName||"Player 1",xi=u.mapSeed,Wi=u.mapMode||"long",gt(Wi,xi),Sh(),Wr();return}if(u.type==="joined"){Cn[2]=u.playerName||"Player 2";return}if(Ut==="draft"){u.type==="draftPick"?nl(u.classKey):u.type==="draftPlace"&&il(u.gx,u.gy);return}Ut==="playing"&&(u.type==="move"||u.type==="attack"||u.type==="skill"||u.type==="endTurn"||u.type==="unitDeath"?(ll.push(u),ul()):u.type==="requestRender"&&Bt())}function cn(u){if(Gi&&Gi.readyState==="open"){let d=(typeof cn.seq<"u"?cn.seq:0)+1;cn.seq=d,Gi.send(JSON.stringify({...u,seq:d}))}}function Ns(u){if(ke==="online"&&cl&&(u.type==="attack"||u.type==="skill"||u.type==="endTurn")){hl.push(u);return}cn(u)}function gf(){for(;hl.length>0;){let u=hl.shift();cn(u)}}function yf(u,d,_){let b=le.find(D=>D.id===u);!b||b.hp<=0||(Us++,Gt(b,d,_,()=>{Bt(),Ht(),rr()}))}function xf(u,d,_,b){let D=le.find(B=>B.id===u),P=le.find(B=>B.id===d);!D||!P||P.hp<=0||(Us++,La(D,P,_,b,()=>{Bt(),Ht(),rr()}))}function _f(u){let d=le.find(b=>b.id===u.unitId),_=u.targetId!=null?le.find(b=>b.id===u.targetId):null;if(d)if(Us++,u.effectKey&&d.mp>=(ba[d.class]||[]).find(b=>b.effectKey===u.effectKey)?.cost){let b=(ba[d.class]||[]).find(D=>D.effectKey===u.effectKey);if(b){d.mp-=b.cost;let D={showFloatingCombatText:ti,handleUnitDeath:In,updateUnitSlashVisibility:Fe,updateTurnUI:Ht,tryCollectPowerup:Qe,world:e,units:le,updateUnitPosition(O){let U=Je.get(O.id);U&&U.position.copy(tt(O.x,O.y))},animateKnockback(O,U,X,ce,Ee,W){let ue=Je.get(O.id);if(!ue){W&&W();return}let de=tt(U,X).clone(),Be=tt(ce,Ee).clone(),Ce=performance.now(),Ve=0;function Lt(it){Ve++,Ve%2===0&&Bt();let Xt=Math.min(1,(it-Ce)/ws),_n=sn=>sn*sn*(3-2*sn);ue.position.lerpVectors(de,Be,_n(Xt)),Xt<1?requestAnimationFrame(Lt):(ue.position.copy(Be),W&&W())}requestAnimationFrame(Lt)}};Sa(u.effectKey,d,_,D),_&&Fe(_);let B=b.target==="self"||b.target==="ally"?b.target==="self"?d:_:null;B?Et(B,()=>{Bt(),Ht(),rr()}):(Bt(),setTimeout(()=>{Bt(),Ht(),rr()},400))}else Bt(),setTimeout(()=>{Bt(),Ht(),rr()},400)}else Bt(),setTimeout(()=>{Bt(),Ht(),rr()},400)}function vf(){if(Ds[Yn]==="story")return;let u=Ds[Yn];if(hf(),ke=u,u==="online"){Qs&&Qs.classList.add("hidden"),uf();return}if(u==="pvp"||u==="pvcpu"){let d=Ra&&Ra.value||"long";gt(d)}else u==="cvcpu"&&(Rs&&yh&&xh&&_h&&(th=Math.max(5,Math.min(50,parseInt(yh.value,10)||21)),nh=Math.max(5,Math.min(50,parseInt(xh.value,10)||11)),ih=Math.max(.1,Math.min(.9,parseFloat(_h.value)||.29))),Rs&&vh&&(ss=Math.max(10,Math.min(999,parseInt(vh.value,10)||200))),gt("long"));u==="cvcpu"&&(js=Math.max(1,parseInt(lf?.value,10)||1),Cs=0),Qs&&Qs.classList.add("hidden"),Wr()}Yi?Yi.addEventListener("click",u=>{if(Yi.disabled)return;let d=Yi.querySelector(".mode-play-ripple");if(d){let _=Yi.getBoundingClientRect();d.style.left=u.clientX-_.left+"px",d.style.top=u.clientY-_.top+"px",d.style.width=d.style.height="20px",d.style.marginLeft=d.style.marginTop="-10px",d.classList.remove("ripple"),d.offsetHeight,d.classList.add("ripple"),setTimeout(()=>d.classList.remove("ripple"),500)}vf()}):Wr();function dl(u){return ke==="pvcpu"&&u===2||ke==="cvcpu"}function Mf(){let u=as.filter(W=>G.has(W));if(u.length===0)return null;let d=w||"balanced";if(d==="random")return u[Math.floor(Math.random()*u.length)];if(d==="custom")return y_.filter(ue=>G.has(ue))[0]??u[0]??null;let _=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function b(W){let ue=Jt[W];if(!ue)return 1/0;let de=_.map(Ce=>ue[Ce]??0),Be=de.reduce((Ce,Ve)=>Ce+Ve,0)/de.length;return de.reduce((Ce,Ve)=>Ce+(Ve-Be)**2,0)/de.length}if(d==="tanky")return[...u].sort((ue,de)=>{let Be=Jt[ue]?.hp??0,Ce=Jt[de]?.hp??0;return Ce!==Be?Ce-Be:(Jt[de]?.vit??0)-(Jt[ue]?.vit??0)})[0]??null;if(d==="aggressive")return[...u].sort((ue,de)=>{let Be=Jt[ue]?.str??0,Ce=Jt[de]?.str??0;return Ce!==Be?Ce-Be:(Jt[de]?.agi??0)-(Jt[ue]?.agi??0)})[0]??null;if(d==="scout")return[...u].sort((ue,de)=>{let Be=Jt[ue]?.agi??0,Ce=Jt[de]?.agi??0;return Ce!==Be?Ce-Be:(Jt[de]?.dex??0)-(Jt[ue]?.dex??0)})[0]??null;if(d==="ranged")return[...u].sort((ue,de)=>{let Be=Jt[ue]?.range??0,Ce=Jt[de]?.range??0;return Ce!==Be?Ce-Be:(Jt[de]?.dex??0)-(Jt[ue]?.dex??0)})[0]??null;if(d==="caster")return[...u].sort((ue,de)=>{let Be=Jt[ue]?.int??0,Ce=Jt[de]?.int??0;return Ce!==Be?Ce-Be:(Jt[de]?.mp??0)-(Jt[ue]?.mp??0)})[0]??null;let D=Ai(),B=x_(rs),O=le.filter(W=>W.player===D).map(W=>W.class),U={};for(let W of Object.keys($o))U[W]=0;for(let W of O)for(let ue of Object.keys($o))if($o[ue].includes(W)){U[ue]++;break}let X=W=>Math.max(0,(B[W]??0)-(U[W]??0)),ce=W=>{for(let[ue,de]of Object.entries($o))if(de.includes(W))return ue;return null};return[...u].sort((W,ue)=>{let de=ce(W),Be=ce(ue),Ce=de!=null?X(de):0,Ve=Be!=null?X(Be):0;if(Ve!==Ce)return Ve-Ce;let Lt=Jt[W]?.hp??0,it=Jt[ue]?.hp??0;return it!==Lt?it-Lt:b(W)-b(ue)})[0]??null}function Yr(){if(Ut!=="draft"||!dl(Ai()))return;if(!Z){let _=Mf();_&&nl(_),setTimeout(Yr,500);return}let u=Array.from(Ne).map(_=>({gx:_%e.w,gy:Math.floor(_/e.w)})),d=Xd(e,u);if(d.length>0){let{gx:_,gy:b}=d[0];il(_,b)}}function Ah(){let u=[];for(let d=0;d<e.h;d++)for(let _=0;_<e.w;_++)e.type[d][_]===nt.CENTER&&u.push({gx:_,gy:d});return u}function bf(u){let d=[],_=u===1?nt.BASE_TOP:nt.BASE_BOTTOM;for(let b=0;b<e.h;b++)for(let D=0;D<e.w;D++)e.type[b][D]===_&&d.push({gx:D,gy:b});return d}function ui(u,d,_,b){return Math.abs(u-_)+Math.abs(d-b)}function Sf(u){let d=u.range!=null?u.range:1,_=[];for(let b of le){if(b.hp<=0||b.player===u.player)continue;let D=ui(u.x,u.y,b.x,b.y);D<=d&&D>0&&Js(e,u.x,u.y,b.x,b.y)&&_.push({target:b,dist:D})}return _}function Ef(u,d,_){let b=_??le.filter(P=>P.hp>0&&P.player===u.player&&P.id!==u.id),D=d??le.filter(P=>P.hp>0&&P.player!==u.player);for(let P of b)for(let B of D){let O=B.range!=null?B.range:1,U=ui(B.x,B.y,P.x,P.y);if(U<=O&&U>0&&Js(e,B.x,B.y,P.x,P.y))return!0}return!1}function Gt(u,d,_,b){let D=u.x,P=u.y,B=As(e,u.x,u.y,d,_,le,u);if(!B||B.length<=1){b&&b();return}ze=null,An(),Ct=!0,g=!0,wi(u.id),Bt();let O=Je.get(u.id),U=1;function X(){if(U>=B.length){u.x=B[B.length-1].x,u.y=B[B.length-1].y,Qe(u),Ct=!1,je(O),wi(),Ke=new Map,Ye=!0,ke==="online"&&u.player===St&&typeof cn=="function"&&cn({type:"move",unitId:u.id,toGx:u.x,toGy:u.y}),b&&b();return}let ce=B[U-1],Ee=B[U],W=tt(ce.x,ce.y).clone(),ue=tt(Ee.x,Ee.y).clone(),de=ue.x-W.x,Be=ue.z-W.z;de*de+Be*Be>1e-6&&(O.rotation.y=Math.atan2(de,Be));let Ce=performance.now(),Ve=0;function Lt(it){Ve++,Ve%2===0&&Bt();let Xt=Math.min(1,(it-Ce)/ws),sn=(Kt=>Kt*Kt*(3-2*Kt))(Xt);if(O.position.lerpVectors(W,ue,sn),Se(O,sn),g){let Kt=a.position.distanceTo(h),pn=Kt<.1?o:Kt;m.copy(a.position).sub(h).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),h.lerp(O.position,l),a.position.copy(h).add(m.clone().multiplyScalar(pn)),a.lookAt(h)}Xt<1?requestAnimationFrame(Lt):(U++,X())}requestAnimationFrame(Lt)}X()}function La(u,d,_,b,D){let P=_!==void 0,B,O=0;if(P)B=_,O=b!=null&&b>0?b:0;else{ke==="online"&&u.player===St&&typeof cn=="function"&&cn({type:"requestRender"});let Nt=Le(d,"agi")*.7+Le(d,"luk")*.3;if(B=Math.random()*Math.max(.001,Nt)<=Le(u,"dex"),B){let zt=Le(u,"str")*.7+Le(u,"dex")*.2+Le(u,"int")*.1-(Le(d,"vit")*.3+Le(d,"luk")*.2);O=Math.max(1,Math.floor(zt))}}Nn=!0,ze=null,nn=!1,An(),!P&&ke==="online"&&u.player===St&&typeof Ns=="function"&&Ns({type:"attack",unitId:u.id,targetId:d.id,hit:B,damage:B?O:void 0}),P||console.log("[ATTACK]",`${u.name} (${u.class}, P${u.player})`,"\u2192",`${d.name} (${d.class}, P${d.player})`,B?`${O} dmg`:"MISS",`| ${d.name} HP ${d.hp} \u2192 ${Math.max(0,d.hp-O)}/${d.maxHp}`);let U=Je.get(u.id);if(!U||!U.userData.rightArm){Ct=!0,B?(d.hp=Math.max(0,d.hp-O),ti(d.x,d.y,String(O),!1),Fe(d),d.hp<=0&&In(d,u)):ti(d.x,d.y,"MISS",!0),setTimeout(()=>{Ct=!1,D&&D(),P||(Ye?ln():Ht())},400);return}let X=tt(u.x,u.y).clone(),ce=tt(d.x,d.y).clone(),Ee=X.clone().lerp(ce,.35),W=ce.x-X.x,ue=ce.z-X.z;if(W*W+ue*ue>1e-6&&(U.rotation.y=Math.atan2(W,ue)),(u.range!=null?u.range:1)>2){let Dt=function(ie){lt++,lt%2===0&&Bt();let ge=ie-fi,pe=Math.min(1,ge/qt);if(zt.position.lerpVectors(di,un,pe),Yt){let te=Math.sin(pe*Math.PI)*1.1;Yt.rotation.y=-te}if(!Mn&&pe>=1&&(Mn=!0,n.remove(zt),Nt.dispose(),rn.dispose(),B?(d.hp=Math.max(0,d.hp-O),ti(d.x,d.y,String(O),!1),d.hp<=0&&(On=!0),Je.get(d.id)?bn=ie:On&&(In(d,u),On=!1),Fe(d)):ti(d.x,d.y,"MISS",!0)),bn!=null&&B){let te=Je.get(d.id);if(te){let oe=Math.min(1,(ie-bn)/ft),Me=1-oe;hs.copy(vt).multiplyScalar(Qt*Me),te.position.copy(ct).add(hs),oe>=1&&(te.position.copy(ct),bn=null,On&&(In(d,u),On=!1))}else bn=null,On&&(In(d,u),On=!1)}if(pe<1)requestAnimationFrame(Dt);else{Yt&&(Yt.rotation.y=0);let te=bn==null;te&&On&&(In(d,u),On=!1),te?(Vn.shadowMap.enabled=!0,Ct=!1,D&&setTimeout(()=>D(),0),P||setTimeout(Ye?()=>ln():()=>Ht(),400)):requestAnimationFrame(Dt)}},Nt=new Ts(.035,.035,.4,6),rn=new wn({color:16763972}),zt=new Ze(Nt,rn);zt.position.copy(X),zt.position.y+=.6;let Pt=ce.clone().sub(X).normalize();zt.quaternion.setFromUnitVectors(new k(0,1,0),Pt),n.add(zt),Ct=!0;let Yt=U.userData.rightArm,ct=tt(d.x,d.y).clone(),vt=ce.clone().sub(X).normalize(),Qt=.4,Mn=!1,bn=null,On=!1,di=zt.position.clone(),un=ce.clone();un.y+=.6;let fi=performance.now(),lt=0;Vn.shadowMap.enabled=!1,requestAnimationFrame(Dt);return}let Ce=!1,Ve=performance.now(),Lt=U.userData.rightArm,it=null,Xt=!1,_n=tt(d.x,d.y).clone(),sn=ce.clone().sub(X).normalize(),Kt=.4,pn=0;function vn(Nt){pn++,pn%2===0&&Bt();let rn=Nt-Ve,zt=Math.min(1,rn/st),Pt=zt<=.4?zt/.4:1,Yt=zt>.4?(zt-.4)/.6:0;zt<=.4?U.position.lerpVectors(X,Ee,Pt):U.position.lerpVectors(Ee,X,Yt);let ct=zt<=.35?zt/.35:zt<=.7?(.7-zt)/.35:0;if(Lt.rotation.y=-ct*1.1,!Ce&&zt>=Xe&&(Ce=!0,B?(d.hp=Math.max(0,d.hp-O),ti(d.x,d.y,String(O),!1),d.hp<=0&&(Xt=!0),Fe(d),Je.get(d.id)?it=Nt:Xt&&(In(d,u),Xt=!1)):ti(d.x,d.y,"MISS",!0)),it!=null&&B){let vt=Je.get(d.id);if(vt){let Qt=Math.min(1,(Nt-it)/ft),Mn=1-Qt;hs.copy(sn).multiplyScalar(Kt*Mn),vt.position.copy(_n).add(hs),Qt>=1&&(vt.position.copy(_n),it=null,Xt&&(In(d,u),Xt=!1))}else it=null,Xt&&(In(d,u),Xt=!1)}if(zt<1)requestAnimationFrame(vn);else{U.position.copy(X),Lt.rotation.y=0;let vt=it==null;vt&&Xt&&(In(d,u),Xt=!1),vt?(Vn.shadowMap.enabled=!0,Ct=!1,D&&setTimeout(()=>D(),0),P||setTimeout(Ye?()=>ln():()=>Ht(),400)):requestAnimationFrame(vn)}}Ct=!0,Vn.shadowMap.enabled=!1,requestAnimationFrame(vn)}function Tf(u,d){let _=tt(u,d);_.y+=.4;let b=new zi(.1,12,12),D=new wn({color:8930559,transparent:!0,opacity:.9}),P=new Ze(b,D);P.position.copy(_),n.add(P);let B=performance.now(),O=0;function U(X){O++,O%2===0&&Bt();let ce=X-B,Ee=Math.min(1,ce/gn),W=Ee*(2-Ee);P.scale.setScalar(W*4.5),D.opacity=.9*(1-Ee),Ee<1?requestAnimationFrame(U):(n.remove(P),b.dispose(),D.dispose())}requestAnimationFrame(U)}function Da(u,d,_,b,D){if(_.target==="enemy"&&d==null){setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),D&&D()},400);return}let B=(_.range??0)>2&&d!=null&&(d.x!==u.x||d.y!==u.y),O=!B&&d!=null&&(d.x!==u.x||d.y!==u.y);if(!B&&!O){Ct=!0,Sa(_.effectKey,u,d,b);let Pt=_.target==="self"||_.target==="ally",Yt=_.target==="self"?u:d;Pt&&Yt?Et(Yt,()=>{setTimeout(()=>{Ct=!1,b.updateTurnUI&&b.updateTurnUI(),D&&D()},400)}):setTimeout(()=>{Ct=!1,b.updateTurnUI&&b.updateTurnUI(),D&&D()},400);return}if(O){let te=function(oe){pe++,pe%2===0&&Bt();let Me=oe-ge,me=Math.min(1,Me/st),Ae=me<=.4?me/.4:1,Mt=me>.4?(me-.4)/.6:0;me<=.4?Pt.position.lerpVectors(Yt,vt,Ae):Pt.position.lerpVectors(vt,Yt,Mt);let wt=me<=.35?me/.35:me<=.7?(.7-me)/.35:0;if(un.rotation.y=-wt*1.1,!fi&&me>=Xe&&(fi=!0,Sa(_.effectKey,u,d,ie),d.hp<=0&&(Dt=!0),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(d),Je.get(d.id)&&_.target!=="ally"?lt=oe:Dt&&(In(d,u),Dt=!1)),lt!=null){let Ft=Je.get(d.id);if(Ft){let Wt=Math.min(1,(oe-lt)/ft),yt=1-Wt;hs.copy(On).multiplyScalar(di*yt),Ft.position.copy(bn).add(hs),Wt>=1&&(Ft.position.copy(bn),lt=null,Dt&&(In(d,u),Dt=!1))}else lt=null,Dt&&(In(d,u),Dt=!1)}me<1?requestAnimationFrame(te):(Pt.position.copy(Yt),un.rotation.y=0,lt==null&&Dt&&(In(d,u),Dt=!1),lt==null?(Vn.shadowMap.enabled=!0,Ct=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),D&&D()},400)):requestAnimationFrame(te))},Pt=Je.get(u.id);if(!Pt||!Pt.userData.rightArm){Ct=!0,Sa(_.effectKey,u,d,b),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(d),setTimeout(()=>{Ct=!1,b.updateTurnUI&&b.updateTurnUI(),D&&D()},400);return}Ct=!0;let Yt=tt(u.x,u.y).clone(),ct=tt(d.x,d.y).clone(),vt=Yt.clone().lerp(ct,.35),Qt=ct.x-Yt.x,Mn=ct.z-Yt.z;Qt*Qt+Mn*Mn>1e-6&&(Pt.rotation.y=Math.atan2(Qt,Mn));let bn=tt(d.x,d.y).clone(),On=ct.clone().sub(Yt).normalize(),di=.4,un=Pt.userData.rightArm,fi=!1,lt=null,Dt=!1,ie={...b,handleUnitDeath:void 0},ge=performance.now(),pe=0;Vn.shadowMap.enabled=!1,requestAnimationFrame(te);return}let U=tt(u.x,u.y).clone(),X=tt(d.x,d.y).clone(),ce=new Ts(.035,.035,.4,6),Ee=new wn({color:16763972}),W=new Ze(ce,Ee);W.position.copy(U),W.position.y+=.6;let ue=X.clone().sub(U).normalize();W.quaternion.setFromUnitVectors(new k(0,1,0),ue),n.add(W),Ct=!0;let de=Je.get(u.id),Be=de&&de.userData.rightArm?de.userData.rightArm:null;if(de){let Pt=X.x-U.x,Yt=X.z-U.z;Pt*Pt+Yt*Yt>1e-6&&(de.rotation.y=Math.atan2(Pt,Yt))}let Ce=W.position.clone(),Ve=X.clone();Ve.y+=.6;let Lt=performance.now(),it=tt(d.x,d.y).clone(),Xt=X.clone().sub(U).normalize(),_n=.4,sn=!1,Kt=null,pn=0,vn=null,Nt=_.effectKey==="powerShot"?{...b,animateKnockback(Pt,Yt,ct,vt,Qt,Mn){vn={targ:Pt,fromGx:Yt,fromGy:ct,toGx:vt,toGy:Qt,knockbackOnDone:Mn}}}:b;function rn(){Vn.shadowMap.enabled=!0,Ct=!1,setTimeout(()=>{b.updateTurnUI&&b.updateTurnUI(),D&&D()},400)}function zt(Pt){pn++,pn%2===0&&Bt();let Yt=Pt-Lt,ct=Math.min(1,Yt/qt);if(W.position.lerpVectors(Ce,Ve,ct),Be){let vt=Math.sin(ct*Math.PI)*1.1;Be.rotation.y=-vt}if(!sn&&ct>=1&&(sn=!0,n.remove(W),ce.dispose(),Ee.dispose(),_.type==="spell"&&Tf(d.x,d.y),Sa(_.effectKey,u,d,Nt),Je.get(d.id)&&d.hp>0&&(Kt=Pt),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(d)),Kt!=null){let vt=Je.get(d.id);if(vt){let Qt=Math.min(1,(Pt-Kt)/ft),Mn=1-Qt;if(hs.copy(Xt).multiplyScalar(_n*Mn),vt.position.copy(it).add(hs),Qt>=1&&(vt.position.copy(it),Kt=null,vn)){let{targ:bn,fromGx:On,fromGy:di,toGx:un,toGy:fi,knockbackOnDone:lt}=vn;vn=null,b.animateKnockback?b.animateKnockback(bn,On,di,un,fi,()=>{lt&&lt(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(bn),rn()}):rn();return}}else if(Kt=null,vn){vn=null,rn();return}}if(ct<1)requestAnimationFrame(zt);else if(Be&&(Be.rotation.y=0),Kt==null)if(vn){let{targ:vt,fromGx:Qt,fromGy:Mn,toGx:bn,toGy:On,knockbackOnDone:di}=vn;vn=null,b.animateKnockback?b.animateKnockback(vt,Qt,Mn,bn,On,()=>{di&&di(),b.updateUnitSlashVisibility&&b.updateUnitSlashVisibility(vt),rn()}):rn()}else rn();else requestAnimationFrame(zt)}Vn.shadowMap.enabled=!1,requestAnimationFrame(zt)}function fn(){if(Ut!=="playing"||!dl(Rt)||Ct||_e.length===0)return;let u=_e[Re],d=le.find(ie=>ie.id===u);if(!d||d.hp<=0)return;let _=Le(d,"agi"),b=Zo(e,d.x,d.y,_,le,d),D=new Set(le.filter(ie=>ie.hp>0&&ie.id!==d.id).map(ie=>ie.y*e.w+ie.x)),P=[];b.forEach((ie,ge)=>{ie!==0&&(D.has(ge)||P.push({gx:ge%e.w,gy:Math.floor(ge/e.w),dist:ie}))});let B=Sf(d),O=Ah(),U=bf(d.player),X=.25,ce=.03,Ee=d.maxHp>0&&d.hp/d.maxHp<X,W=d.maxHp>0&&d.hp/d.maxHp<ce,ue=d.level===2,de=O.filter(ie=>!D.has(ie.gy*e.w+ie.gx)),Be=U.filter(ie=>!D.has(ie.gy*e.w+ie.gx)),Ce=new Set(O.map(ie=>ie.gy*e.w+ie.gx)),Ve=de.length>0?de:O,Lt=Be.length>0?Be:U,it=Ve.length>0?Mn(Ve):null,Xt=Lt.length>0?Mn(Lt):null,_n=fl(d),sn=_n.filter(ie=>!ie.disabled&&d.mp>=ie.cost&&ie.target==="enemy"),Kt=sn.length>0?Math.max(...sn.map(ie=>ie.range||0)):0,pn=Math.max(d.range!=null?d.range:1,Kt),vn=d.level>=2&&pn>=2,Nt=le.filter(ie=>ie.hp>0&&ie.player!==d.player),rn=le.filter(ie=>ie.hp>0&&ie.player===d.player&&ie.id!==d.id);function zt(ie,ge){if(ge.length===0)return null;let pe=null,te=1/0;for(let oe of ie){let Me=0;for(let me of ge)Me+=ui(oe.gx,oe.gy,me.gx,me.gy);Me<te&&(te=Me,pe=oe)}return pe}function Pt(ie,ge){if(ge.length===0||ie.length===0)return null;let pe=null,te=1/0;for(let oe of ie){let Me=Math.min(...ge.map(me=>ui(oe.gx,oe.gy,me.gx,me.gy)));Me<te&&(te=Me,pe=oe)}return pe}function Yt(ie,ge){let pe=pn,te=[];for(let oe of le){if(oe.hp<=0||oe.player===d.player)continue;let Me=ui(ie,ge,oe.x,oe.y);Me<=pe&&Me>0&&Js(e,ie,ge,oe.x,oe.y)&&te.push({target:oe,dist:Me})}return te}let ct=new Set(P.map(ie=>ie.gy*e.w+ie.gx));function vt(ie,ge){if(!ie||ie.length<=1)return null;let pe=Math.min(ge,ie.length-1);for(let te=pe;te>=1;te--){let oe=ie[te],Me=oe.y*e.w+oe.x;if(ct.has(Me))return{gx:oe.x,gy:oe.y}}return null}function Qt(ie,ge){if(!ie||ie.length<=1)return null;let pe=Math.min(ge,ie.length-1);for(let te=pe;te>=1;te--){let oe=ie[te];if(!D.has(oe.y*e.w+oe.x))return{gx:oe.x,gy:oe.y}}return null}function Mn(ie){let ge=null,pe=null,te=1/0;for(let oe of ie){let Me=As(e,d.x,d.y,oe.gx,oe.gy,le,d);Me&&Me.length>1&&Me.length<te&&(te=Me.length,ge=Me,pe=oe)}return ge&&pe?{path:ge,target:pe}:null}function bn(ie){let ge=ie??P;if(ge.length===0)return null;if(Nt.length===0)return ge[0];let pe=null,te=-1;for(let oe of ge){let Me=Math.min(...Nt.map(me=>ui(oe.gx,oe.gy,me.x,me.y)));Me>te&&(te=Me,pe=oe)}return pe}function On(ie){let ge=ie??P;if(ge.length===0)return null;if(Nt.length===0)return ge[0];let pe=d.maxHp>0&&d.hp/d.maxHp>=.6,te=null,oe=-1/0;for(let Me of ge){let me=Math.min(...Nt.map(wt=>ui(Me.gx,Me.gy,wt.x,wt.y))),Ae=rn.length>0?Math.min(...rn.map(wt=>ui(Me.gx,Me.gy,wt.x,wt.y))):999,Mt;pe?Mt=Ae<me?me-1e3:me:Mt=me-Ae,Mt>oe&&(oe=Mt,te=Me)}return te}function di(){let ie=pn;if(Nt.length===0)return null;let ge=null,pe=-1;for(let te of P){let oe=Math.min(...Nt.map(me=>ui(te.gx,te.gy,me.x,me.y)));Nt.some(me=>ui(te.gx,te.gy,me.x,me.y)<=ie)&&oe>pe&&(pe=oe,ge=te)}return ge}let un=new Map;for(let ie of P){let ge=ie.gy*e.w+ie.gx;un.has(ge)||un.set(ge,Yt(ie.gx,ie.gy))}let fi=B.some(ie=>ie.target.maxHp>0&&ie.target.hp/ie.target.maxHp<X),lt=fi||P.some(ie=>(un.get(ie.gy*e.w+ie.gx)||[]).some(pe=>pe.target.maxHp>0&&pe.target.hp/pe.target.maxHp<X));if(Nn){if(Ye){setTimeout(()=>ln(),400);return}if(vn&&Nt.length>0&&re.size>0&&P.length>0){let oe=[];re.forEach((me,Ae)=>{oe.push({gx:Ae%e.w,gy:Math.floor(Ae/e.w)})});let Me=Mn(oe);if(Me){let me=Qt(Me.path,_);if(me&&(me.gx!==d.x||me.gy!==d.y)){Gt(d,me.gx,me.gy,()=>setTimeout(ln,400));return}let Ae=Pt(P,oe);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){Gt(d,Ae.gx,Ae.gy,()=>setTimeout(ln,400));return}}}if(ss-kt<=20&&O.length>0){let oe=O.some(Me=>Me.gx===d.x&&Me.gy===d.y);if(oe&&P.length>0){let me=P.filter(Ae=>Ce.has(Ae.gy*e.w+Ae.gx)).filter(Ae=>Ae.gx!==d.x||Ae.gy!==d.y);if(me.length>0){let Ae=bn(me);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){Gt(d,Ae.gx,Ae.gy,()=>setTimeout(ln,400));return}}setTimeout(()=>ln(),400);return}if(oe){setTimeout(()=>ln(),400);return}if(P.length>0){let Me=it,me=Me?Qt(Me.path,_):null;if(me&&(me.gx!==d.x||me.gy!==d.y)){Gt(d,me.gx,me.gy,()=>setTimeout(ln,400));return}let Ae=Pt(P,Ve);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){Gt(d,Ae.gx,Ae.gy,()=>setTimeout(ln,400));return}}setTimeout(()=>ln(),400);return}if(!Ee&&P.length>0){if(ue&&U.length>0&&!U.some(Me=>Me.gx===d.x&&Me.gy===d.y)){let Me=Xt,me=Me?Qt(Me.path,_):null;if(me&&(me.gx!==d.x||me.gy!==d.y)){Gt(d,me.gx,me.gy,()=>setTimeout(ln,400));return}let Ae=Pt(P,Lt);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){Gt(d,Ae.gx,Ae.gy,()=>setTimeout(ln,400));return}}if(O.length>0&&!O.some(Me=>Me.gx===d.x&&Me.gy===d.y)){let Me=it,me=Me?Qt(Me.path,_):null;if(me&&(me.gx!==d.x||me.gy!==d.y)){Gt(d,me.gx,me.gy,()=>setTimeout(ln,400));return}let Ae=Pt(P,Ve);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){Gt(d,Ae.gx,Ae.gy,()=>setTimeout(ln,400));return}}}let ge=O.length>0?P.filter(oe=>Ce.has(oe.gy*e.w+oe.gx)):null,pe=ge!=null&&ge.length>0?ge:P,te=null;if(pe.length>0&&rn.length>0&&(te=On(pe),te)){let oe=As(e,d.x,d.y,te.gx,te.gy,le,d),Me=oe?oe.length-1:1/0;(!oe||oe.length<=1||Me>_)&&(te=bn(pe))}if(!te&&pe.length>0&&(te=bn(pe)),te&&(te.gx!==d.x||te.gy!==d.y)){Gt(d,te.gx,te.gy,()=>setTimeout(ln,400));return}setTimeout(()=>ln(),400);return}if(W&&ss-kt>20&&!Ye&&P.length>0){let ie=null,ge=1/0;for(let te of P){let Me=(un.get(te.gy*e.w+te.gx)||[]).filter(me=>me.target.maxHp>0&&me.target.hp/me.target.maxHp<X);if(Me.length>0){let me=Math.min(...Me.map(Ae=>Ae.target.hp));me<ge&&(ge=me,ie=te)}}if(ie){let te=As(e,d.x,d.y,ie.gx,ie.gy,le,d),oe=te?vt(te,_):null;if(oe&&(oe.gx!==d.x||oe.gy!==d.y)){Gt(d,oe.gx,oe.gy,()=>setTimeout(fn,600));return}}let pe=bn();if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){Gt(d,pe.gx,pe.gy,()=>setTimeout(fn,600));return}setTimeout(()=>ln(),400);return}if(!Nn){let Mt=function(yt){return $r(d,yt,le).filter(Vt=>Vt.targetUnit!=null).map(Vt=>Vt.targetUnit)},ie=_n,ge=d.maxHp>0?d.hp/d.maxHp:1,pe=.35,te=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct"]),oe=new Set(["chakra","sacrifice"]),Me=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),me=new Set(["manaDrain","impale","poison"]),Ae=new Set(["dominate","weaken","cripple","hex","blind","raid"]),wt={showFloatingCombatText:ti,handleUnitDeath:In,updateUnitSlashVisibility:Fe,updateTurnUI:Ht,tryCollectPowerup:Qe,world:e,units:le,updateUnitPosition(yt){let Zt=Je.get(yt.id);Zt&&Zt.position.copy(tt(yt.x,yt.y))},animateKnockback(yt,Zt,Vt,hn,Rn,en){let Ln=Je.get(yt.id);if(!Ln){en&&en();return}let lr=tt(Zt,Vt).clone(),Os=tt(hn,Rn).clone(),xl=performance.now(),Nh=0;function Oh(kf){Nh++,Nh%2===0&&Bt();let Fh=Math.min(1,(kf-xl)/ws),Hf=_l=>_l*_l*(3-2*_l);Ln.position.lerpVectors(lr,Os,Hf(Fh)),Fh<1?requestAnimationFrame(Oh):(Ln.position.copy(Os),en&&en())}requestAnimationFrame(Oh)}},Ft=null,Wt=null;if(!lt){for(let Zt of ie)if(!Zt.disabled&&oe.has(Zt.effectKey)){let hn=$r(d,Zt,le).filter(Rn=>Rn.targetUnit&&Rn.targetUnit.maxHp>0&&Rn.targetUnit.hp/Rn.targetUnit.maxHp<.5);if(hn.length>0){let Rn=hn.sort((en,Ln)=>en.targetUnit.hp-Ln.targetUnit.hp)[0].targetUnit;Ft=Zt,Wt=Rn;break}}}if(!Ft&&!lt&&(B.length>0||P.some(Zt=>(un.get(Zt.gy*e.w+Zt.gx)||[]).length>0))){let Zt=ie.filter(Vt=>!Vt.disabled&&Me.has(Vt.effectKey)).sort((Vt,hn)=>(hn.level||1)-(Vt.level||1));for(let Vt of Zt){let hn=d.tempBuff&&d.tempBuff.duration>0;if(Vt.target==="self"){if(Vt.effectKey==="bloodlust"&&d.hp/d.maxHp>.8)continue;if(!hn){Ft=Vt,Wt=d;break}}if(Vt.target==="ally"){if(Vt.effectKey==="forge"&&hn||Vt.effectKey==="fortify"&&hn||Vt.effectKey==="mantra"&&hn||Vt.effectKey==="sanctuary"&&hn)continue;let en=$r(d,Vt,le).filter(Ln=>Ln.targetUnit!=null).map(Ln=>Ln.targetUnit);if(en.length>0){let Ln=en.filter(Os=>!Os.tempBuff||Os.tempBuff.duration<=0),lr=(Ln.length>0?Ln:en).sort((Os,xl)=>Os.hp-xl.hp)[0];Ft=Vt,Wt=lr;break}}}}if(!Ft){for(let yt of ie)if(!yt.disabled&&te.has(yt.effectKey)){if(yt.effectKey==="feast"&&d.hp/d.maxHp>.7||yt.effectKey==="berserk"&&d.hp/d.maxHp<.25||yt.effectKey==="shuriken"&&B.length>0||yt.effectKey==="judgement"&&d.hp/d.maxHp>.7)continue;let Zt=Mt(yt);if(Zt.length===0)continue;let Vt=Zt.filter(en=>en.maxHp>0&&en.hp/en.maxHp<pe),hn=Vt.length>0?Vt:Zt,Rn=yt.type==="spell"?hn.reduce((en,Ln)=>{if(!en)return Ln;let lr=Le(Ln,"int")-Le(en,"int");return lr<0||lr===0&&Ln.hp<en.hp?Ln:en},null):hn.reduce((en,Ln)=>!en||Ln.hp<en.hp?Ln:en,null);Ft=yt,Wt=Rn;break}}if(!Ft&&!fi){for(let yt of ie)if(!yt.disabled&&Ae.has(yt.effectKey)){let Zt=Mt(yt),Vt=Zt.length>0?Zt.reduce((hn,Rn)=>!hn||Rn.hp<hn.hp?Rn:hn,null):null;Ft=yt,Wt=Vt;break}}if(!Ft&&!fi){for(let yt of ie)if(!yt.disabled&&me.has(yt.effectKey)){let Vt=Mt(yt).filter(hn=>!hn.tempDebuff||hn.tempDebuff.duration<=0);if(Vt.length>0){let hn=Vt.reduce((Rn,en)=>!Rn||en.hp<Rn.hp?en:Rn,null);Ft=yt,Wt=hn;break}}}if(Ft&&Wt){d.mp-=Ft.cost,Nn=!0;let yt=Ft.target==="self"?d:Wt;Da(d,yt,Ft,wt,()=>setTimeout(fn,600));return}}if(Ef(d,Nt,rn)&&B.length>0){B.sort((ge,pe)=>ge.target.hp-pe.target.hp||ge.dist-pe.dist);let ie=B[0].target;La(d,ie);return}if(B.length>0){B.sort((ge,pe)=>ge.target.hp-pe.target.hp||ge.dist-pe.dist);let ie=B[0].target;La(d,ie);return}if(!Ye&&!lt&&re.size>0&&P.length>0){let ie=[];re.forEach((pe,te)=>{ie.push({gx:te%e.w,gy:Math.floor(te/e.w)})});let ge=Mn(ie);if(ge){let pe=Qt(ge.path,_);if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){Gt(d,pe.gx,pe.gy,()=>setTimeout(fn,600));return}let te=Pt(P,ie);if(te&&(te.gx!==d.x||te.gy!==d.y)){Gt(d,te.gx,te.gy,()=>setTimeout(fn,600));return}}}let Dt=ss-kt;if(Dt<=20&&O.length>0&&!Ye&&P.length>0&&!O.some(ge=>ge.gx===d.x&&ge.gy===d.y)){let ge=it,pe=ge?ge.path:null,te=O.length>0?Math.min(...O.map(Wt=>ui(d.x,d.y,Wt.gx,Wt.gy))):1/0,oe=new Map,Me=new Map;for(let Wt of P){let yt=Wt.gy*e.w+Wt.gx;oe.set(yt,O.length>0?Math.min(...O.map(Zt=>ui(Wt.gx,Wt.gy,Zt.gx,Zt.gy))):1/0),Me.set(yt,pe?pe.findIndex(Zt=>Zt.x===Wt.gx&&Zt.y===Wt.gy):-1)}let me=null,Ae=-1,Mt=X;for(let Wt of P){let yt=Wt.gy*e.w+Wt.gx;if(oe.get(yt)>te||(un.get(yt)||[]).filter(en=>en.target.maxHp>0&&en.target.hp/en.target.maxHp<Mt).length===0)continue;let hn=Me.get(yt),Rn=hn>=0?hn:0;Rn>Ae&&(Ae=Rn,me=Wt)}if(me&&(me.gx!==d.x||me.gy!==d.y)){Gt(d,me.gx,me.gy,()=>setTimeout(fn,600));return}let wt=ge?Qt(ge.path,_):null;if(wt&&(wt.gx!==d.x||wt.gy!==d.y)){Gt(d,wt.gx,wt.gy,()=>setTimeout(fn,600));return}let Ft=Pt(P,Ve);if(Ft&&(Ft.gx!==d.x||Ft.gy!==d.y)){Gt(d,Ft.gx,Ft.gy,()=>setTimeout(fn,600));return}}if(Ee&&P.length>0&&!Ye){let ie=null,ge=1/0;for(let pe of P){let oe=(un.get(pe.gy*e.w+pe.gx)||[]).filter(Me=>Me.target.maxHp>0&&Me.target.hp/Me.target.maxHp<X);if(oe.length>0){let Me=Math.min(...oe.map(me=>me.target.hp));Me<ge&&(ge=Me,ie=pe)}}if(ie){let pe=As(e,d.x,d.y,ie.gx,ie.gy,le,d),te=pe?vt(pe,_):null;if(te&&(te.gx!==d.x||te.gy!==d.y)){Gt(d,te.gx,te.gy,()=>setTimeout(fn,600));return}}if(Dt>20&&ue&&U.length>0&&!U.some(te=>te.gx===d.x&&te.gy===d.y)){let te=Be.length>0?Be:U,oe=Xt;if(oe!=null&&oe.path.length<=5){let me=Qt(oe.path,_);if(me&&(me.gx!==d.x||me.gy!==d.y)){Gt(d,me.gx,me.gy,()=>setTimeout(fn,600));return}let Ae=Pt(P,te);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){Gt(d,Ae.gx,Ae.gy,()=>setTimeout(fn,600));return}}}if(Dt>20){let pe=bn();if(pe&&ui(d.x,d.y,pe.gx,pe.gy)>0){Gt(d,pe.gx,pe.gy,()=>setTimeout(fn,600));return}setTimeout(()=>ln(),400);return}}if(Dt<=10&&O.length>0&&!Ye&&P.length>0&&!O.some(ge=>ge.gx===d.x&&ge.gy===d.y)){let ge=de.length>0?de:O,pe=it,te=pe?Qt(pe.path,_):null;if(te&&(te.gx!==d.x||te.gy!==d.y)){Gt(d,te.gx,te.gy,()=>setTimeout(fn,600));return}let oe=Pt(P,ge);if(oe&&(oe.gx!==d.x||oe.gy!==d.y)){Gt(d,oe.gx,oe.gy,()=>setTimeout(fn,600));return}}if(d.level===1&&O.length>0&&!Ye&&!O.some(ge=>ge.gx===d.x&&ge.gy===d.y)&&P.length>0){let ge=de.length>0?de:O,pe=it,te=pe?Qt(pe.path,_):null;if(te&&(te.gx!==d.x||te.gy!==d.y)){Gt(d,te.gx,te.gy,()=>setTimeout(fn,600));return}let oe=Pt(P,ge);if(oe&&(oe.gx!==d.x||oe.gy!==d.y)){Gt(d,oe.gx,oe.gy,()=>setTimeout(fn,600));return}}if(ue&&U.length>0&&!Ye&&!U.some(ge=>ge.gx===d.x&&ge.gy===d.y)&&P.length>0){let ge=Nt.filter(Mt=>Mt.maxHp>0&&Mt.hp/Mt.maxHp<X),pe=null,te=1/0;for(let Mt of P){let Ft=(un.get(Mt.gy*e.w+Mt.gx)||[]).find(Wt=>ge.some(yt=>yt.id===Wt.target.id));Ft&&Ft.target.hp<te&&(te=Ft.target.hp,pe=Mt)}if(pe){let Mt=As(e,d.x,d.y,pe.gx,pe.gy,le,d),wt=Mt?vt(Mt,_):null;if(wt&&(wt.gx!==d.x||wt.gy!==d.y)){Gt(d,wt.gx,wt.gy,()=>setTimeout(fn,600));return}}let oe=Be.length>0?Be:U,Me=Xt,me=Me?Qt(Me.path,_):null;if(me&&(me.gx!==d.x||me.gy!==d.y)){Gt(d,me.gx,me.gy,()=>setTimeout(fn,600));return}let Ae=Pt(P,oe);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){Gt(d,Ae.gx,Ae.gy,()=>setTimeout(fn,600));return}}if(vn&&Nt.length>0&&!Ye&&P.length>0){if(!lt&&re.size>0){let ge=[];re.forEach((te,oe)=>{ge.push({gx:oe%e.w,gy:Math.floor(oe/e.w)})});let pe=Mn(ge);if(pe){let te=Qt(pe.path,_);if(te&&(te.gx!==d.x||te.gy!==d.y)){Gt(d,te.gx,te.gy,()=>setTimeout(fn,600));return}let oe=Pt(P,ge);if(oe&&(oe.gx!==d.x||oe.gy!==d.y)){Gt(d,oe.gx,oe.gy,()=>setTimeout(fn,600));return}}}let ie=di();if(ie&&(ie.gx!==d.x||ie.gy!==d.y)){Gt(d,ie.gx,ie.gy,()=>setTimeout(fn,600));return}}if(Nt.length>0&&!Ye&&P.length>0){let ge=function(te,oe){let Me=null;for(let me=-ie;me<=ie;me++)for(let Ae=-ie;Ae<=ie;Ae++){if(Ae===0&&me===0||Math.abs(Ae)+Math.abs(me)>ie)continue;let Mt=te.x+Ae,wt=te.y+me;if(Mt<0||Mt>=e.w||wt<0||wt>=e.h||!Gr(e,Mt,wt)||!Js(e,Mt,wt,te.x,te.y)||le.some(Vt=>Vt.hp>0&&Vt.x===Mt&&Vt.y===wt))continue;let Wt=As(e,d.x,d.y,Mt,wt,le,d),yt=Wt?Wt.length-1:1/0;Wt&&Wt.length>1&&(!oe||yt<=_)&&(!Me||Wt.length<Me.length)&&(Me=Wt)}return Me},ie=pn,pe=[];for(let te of Nt){let oe=ge(te,!0);oe&&pe.push({enemy:te,path:oe})}if(pe.length>0){let te=pe.filter(Ae=>Ae.enemy.maxHp>0&&Ae.enemy.hp/Ae.enemy.maxHp<X),oe=te.length>0?te:pe;te.length>0?oe.sort((Ae,Mt)=>Ae.enemy.hp-Mt.enemy.hp||Ae.path.length-Mt.path.length):oe.sort((Ae,Mt)=>Ae.path.length-Mt.path.length||Ae.enemy.hp-Mt.enemy.hp);let Me=oe[0],me=vt(Me.path,_);if(me&&(me.gx!==d.x||me.gy!==d.y)){Gt(d,me.gx,me.gy,()=>setTimeout(fn,600));return}}if(pe.length===0){let te=null,oe=1/0;for(let Me of Nt){let me=ge(Me,!1);me&&me.length<oe&&(oe=me.length,te=me)}if(te){let Me=vt(te,_);if(Me&&(Me.gx!==d.x||Me.gy!==d.y)){Gt(d,Me.gx,Me.gy,()=>setTimeout(fn,600));return}}}}setTimeout(()=>ln(),400)}function An(){for(qn.length=0;Qn.children.length;){let u=Qn.children[0];Qn.remove(u),u.geometry!==Kr&&u.geometry!==Zr&&u.geometry.dispose(),u.material.dispose()}Bt()}let ar=new Set;function fl(u){return!u||!u.class?[]:ba[u.class]?ba[u.class].map(d=>({...d,disabled:d.disabled===!0||u.level<d.level||d.hpCost&&u.hp<d.hpCost||d.cost&&u.mp<d.cost})):[]}function $r(u,d,_){let b=[],D=(B,O,U,X)=>Math.abs(B-U)+Math.abs(O-X),P=d.range||0;if(d.target==="self")return b.push({gx:u.x,gy:u.y,targetUnit:null}),b;for(let B of _)B.hp<=0||D(u.x,u.y,B.x,B.y)>P||P>2&&!Js(e,u.x,u.y,B.x,B.y)||(d.target==="enemy"&&B.player!==u.player&&b.push({gx:B.x,gy:B.y,targetUnit:B}),d.target==="ally"&&B.player===u.player&&b.push({gx:B.x,gy:B.y,targetUnit:B}));return b}function wf(u,d){let _=d.range||0;if(d.target==="self")return[{gx:u.x,gy:u.y}];let b=qd(e,u.x,u.y,_),D=[];return b.forEach((P,B)=>{let O=B%e.w,U=B/e.w|0;_>2&&!Js(e,u.x,u.y,O,U)||D.push({gx:O,gy:U})}),D}function Af(u,d){let _=$r(u,d,le);ar=new Set(_.map(D=>`${D.gx},${D.gy}`));let b=d.target==="self"?_:wf(u,d);An(),b.forEach(({gx:D,gy:P})=>{let O=(Kn+e.height[P][D]*.35)/2+Kn/2,U=D*mt-et+mt/2,X=P*mt-We+mt/2,ce=O+.01,Ee=new wn({color:8926122,transparent:!0,opacity:.4,side:Sn}),W=new Ze(Kr,Ee);W.rotation.x=-Math.PI/2,W.position.set(U,ce,X),Qn.add(W),qn.push(Ee);let ue=new wn({color:11167436,transparent:!0,opacity:.7,side:Sn}),de=new Ze(Zr,ue);de.rotation.x=-Math.PI/2,de.position.set(U,ce+.01,X),de.userData.gx=D,de.userData.gy=P,Qn.add(de),qn.push(ue)})}let Rh=.82,Ch=1.02,Kr=new Hi(Ch,Ch),Zr=new Hi(Rh,Rh);function Rf(u){An(),u.forEach(({gx:d,gy:_})=>{let D=(Kn+e.height[_][d]*.35)/2+Kn/2,P=d*mt-et+mt/2,B=_*mt-We+mt/2,O=D+.01,U=new wn({color:2271812,transparent:!0,opacity:.4,side:Sn}),X=new Ze(Kr,U);X.rotation.x=-Math.PI/2,X.position.set(P,O,B),Qn.add(X),qn.push(U);let ce=new wn({color:4508774,transparent:!0,opacity:.7,side:Sn}),Ee=new Ze(Zr,ce);Ee.rotation.x=-Math.PI/2,Ee.position.set(P,O+.01,B),Ee.userData.gx=d,Ee.userData.gy=_,Qn.add(Ee),qn.push(ce)}),Bt()}function pl(u){An(),u.forEach((d,_)=>{if(d===0)return;let b=_%e.w,D=_/e.w|0,B=(Kn+e.height[D][b]*.35)/2+Kn/2,O=b*mt-et+mt/2,U=D*mt-We+mt/2,X=B+.01,ce=new wn({color:3381759,transparent:!0,opacity:.35,side:Sn}),Ee=new Ze(Kr,ce);Ee.rotation.x=-Math.PI/2,Ee.position.set(O,X,U),Qn.add(Ee),qn.push(ce);let W=new wn({color:6730751,transparent:!0,opacity:.65,side:Sn}),ue=new Ze(Zr,W);ue.rotation.x=-Math.PI/2,ue.position.set(O,X+.01,U),Qn.add(ue),qn.push(W)}),Bt()}function Cf(u){An(),u.forEach((d,_)=>{if(d===0)return;let b=_%e.w,D=_/e.w|0,B=(Kn+e.height[D][b]*.35)/2+Kn/2,O=b*mt-et+mt/2,U=D*mt-We+mt/2,X=B+.01,ce=new wn({color:10035746,transparent:!0,opacity:.4,side:Sn}),Ee=new Ze(Kr,ce);Ee.rotation.x=-Math.PI/2,Ee.position.set(O,X,U),Qn.add(Ee),qn.push(ce);let W=new wn({color:13386820,transparent:!0,opacity:.7,side:Sn}),ue=new Ze(Zr,W);ue.rotation.x=-Math.PI/2,ue.position.set(O,X+.01,U),Qn.add(ue),qn.push(W)}),Bt()}let ls=new Go,cs=new Ge;function Ua(u,d){let _=t.getBoundingClientRect();return cs.x=(u-_.left)/_.width*2-1,cs.y=-((d-_.top)/_.height)*2+1,{x:cs.x,y:cs.y}}function Pf(u,d){if(Ct)return;cs.x=u,cs.y=d,ls.setFromCamera(cs,a);let _=ls.intersectObjects(se.children,!0);if(_.length===0)return;let b=null;for(let O of _){let U=O.object;for(;U&&(U.userData.gx==null||U.userData.gy==null);)U=U.parent;if(U&&U.userData.gx!=null){b=U;break}}if(!b||b.userData.gx==null)return;let D=b.userData.gx,P=b.userData.gy;if(Ut==="draft"&&Z){let O=P*e.w+D;Ne.has(O)&&il(D,P);return}if(Ut!=="playing"||ke==="cvcpu")return;if(Hn&&Tt){let O=_e[Re],U=le.find(ue=>ue.id===O&&ue.hp>0);if(U&&D===U.x&&P===U.y){Hn=!1,Tt=null,ar=new Set,An(),Ye?Ke=new Map:(Ke=Zo(e,U.x,U.y,Le(U,"agi"),le,U),pl(Ke)),Ht();return}let X=`${D},${P}`;if(!ar.has(X))return;if(!U||U.mp<Tt.cost){Hn=!1,Tt=null,An(),Ht();return}let ce=le.find(ue=>ue.x===D&&ue.y===P&&ue.hp>0);if(Tt.target==="enemy"&&(!ce||ce.player===U.player)||Tt.target==="ally"&&ce&&ce.player!==U.player||Tt.target==="self"&&(D!==U.x||P!==U.y)||Tt.target==="enemy"&&!ce)return;U.mp-=Tt.cost,Nn=!0;let Ee={showFloatingCombatText:ti,handleUnitDeath:In,updateUnitSlashVisibility:Fe,updateTurnUI:Ht,tryCollectPowerup:Qe,world:e,units:le,updateUnitPosition(ue){let de=Je.get(ue.id);de&&de.position.copy(tt(ue.x,ue.y))},animateKnockback(ue,de,Be,Ce,Ve,Lt){let it=Je.get(ue.id);if(!it){Lt&&Lt();return}let Xt=tt(de,Be).clone(),_n=tt(Ce,Ve).clone(),sn=performance.now(),Kt=0;function pn(vn){Kt++,Kt%2===0&&Bt();let Nt=Math.min(1,(vn-sn)/ws),rn=zt=>zt*zt*(3-2*zt);it.position.lerpVectors(Xt,_n,rn(Nt)),Nt<1?requestAnimationFrame(pn):(it.position.copy(_n),Lt&&Lt())}requestAnimationFrame(pn)}},W=Tt.target==="self"?U:ce||null;ke==="online"&&U.player===St&&typeof cn=="function"&&(cn({type:"requestRender"}),Ns({type:"skill",unitId:U.id,targetId:W?W.id:void 0,effectKey:Tt.effectKey})),Da(U,W,Tt,Ee,()=>{An(),Hn=!1,Tt=null,ar=new Set,Ye?ln():Ht()});return}if($t){let O=_e[Re],U=le.find(ce=>ce.id===O);if(ke==="online"&&U&&U.player!==St)return;let X=Je.get(O);if(U&&X&&Pn.length>0){let ce=tt(U.x,U.y),Ee=tt(D,P),W=Ee.x-ce.x,ue=Ee.z-ce.z,de=W*W+ue*ue>1e-6?Math.atan2(W,ue):X.rotation.y;X.rotation.y=ah(de)}setTimeout(()=>ln(),400);return}if(ze!=null&&nn){let O=le.find(ce=>ce.id===ze);if(!O||O.player!==Rt||ke==="online"&&O.player!==St)return;let U=P*e.w+D,X=le.find(ce=>ce.x===D&&ce.y===P&&ce.hp>0);if(X&&X.id===_e[Re]&&X.player===Rt&&(ke!=="online"||X.player===St)){nn=!1,ze=X.id,Ye?(An(),Ke=new Map):(Ke=Zo(e,X.x,X.y,Le(X,"agi"),le,X),pl(Ke)),Ht();return}if(!Ke.has(U)||Ke.get(U)===0)return;X&&X.player!==Rt&&La(O,X);return}let B=le.find(O=>O.x===D&&O.y===P&&O.hp>0);if(B){if(B.id===_e[Re]&&B.player===Rt&&(ke!=="online"||B.player===St)){on(),ze=B.id,nn=!1,Ye?(An(),Ke=new Map):(Ke=Zo(e,D,P,Le(B,"agi"),le,B),pl(Ke)),Ht();return}An(),Ke=new Map,nn=!1,_t(B),Ht();return}if(on(),ze!=null){let ue=function(){if(W>=ce.length){O.x=ce[ce.length-1].x,O.y=ce[ce.length-1].y,Qe(O),Ct=!1,je(Ee),wi(),Ke=new Map,Ye=!0,ke==="online"&&O.player===St&&typeof cn=="function"&&(cn({type:"move",unitId:O.id,toGx:O.x,toGy:O.y}),cl=!1,gf()),setTimeout(Nn?()=>ln():()=>Ht(),400);return}let de=ce[W-1],Be=ce[W],Ce=tt(de.x,de.y).clone(),Ve=tt(Be.x,Be.y).clone(),Lt=Ve.x-Ce.x,it=Ve.z-Ce.z;Lt*Lt+it*it>1e-6&&(Ee.rotation.y=Math.atan2(Lt,it));let Xt=performance.now(),_n=0;function sn(Kt){_n++,_n%2===0&&Bt();let pn=Math.min(1,(Kt-Xt)/ws),Nt=(rn=>rn*rn*(3-2*rn))(pn);if(Ee.position.lerpVectors(Ce,Ve,Nt),Se(Ee,Nt),g){let rn=a.position.distanceTo(h),zt=rn<.1?o:rn;m.copy(a.position).sub(h).normalize(),m.lengthSq()<.01&&m.copy(c).normalize(),h.lerp(Ee.position,l),a.position.copy(h).add(m.clone().multiplyScalar(zt)),a.lookAt(h)}pn<1?requestAnimationFrame(sn):(W++,ue())}requestAnimationFrame(sn)};if(nn)return;let O=le.find(de=>de.id===ze);if(!O||O.player!==Rt||ke==="online"&&O.player!==St)return;let U=P*e.w+D;if(!Ke.has(U)||Ke.get(U)===0||le.some(de=>de.id!==O.id&&de.x===D&&de.y===P&&de.hp>0)||Ct||Ye)return;let ce=As(e,O.x,O.y,D,P,le,O);if(!ce||ce.length<=1)return;ke==="online"&&O.player===St&&typeof cn=="function"&&(cn({type:"requestRender"}),cl=!0),ze=null,An(),Ct=!0,g=!0,wi(O.id);let Ee=Je.get(O.id),W=1;ue()}}function Ph(u){T.x=u.clientX,T.y=u.clientY,R=u.isTouch===!0,S=u.ctrlKey,v=Ua(u.clientX,u.clientY),t.style.cursor=(u.ctrlKey,"grabbing")}function ml(u){return u.touches&&u.touches.length>0?{clientX:u.touches[0].clientX,clientY:u.touches[0].clientY}:u.changedTouches&&u.changedTouches.length>0?{clientX:u.changedTouches[0].clientX,clientY:u.changedTouches[0].clientY}:{clientX:u.clientX,clientY:u.clientY}}function Ih(u){if(!u||u.length<2)return 0;let d=u[0],_=u[1];return Math.hypot(_.clientX-d.clientX,_.clientY-d.clientY)}function If(u){if(u.touches.length===2){z=Ih(u.touches),v=null;return}if(u.touches.length!==1)return;z=null;let d=ml(u);Ph({clientX:d.clientX,clientY:d.clientY,ctrlKey:!1,isTouch:!0})}function Lf(u){if(u.touches.length===2){u.preventDefault();let _=Ih(u.touches);if(z!=null&&z>0){let b=_-z,D=a.position.distanceTo(h),P=Math.max($,Math.min(ae,D-b*F));x.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(x.multiplyScalar(P)),a.lookAt(h),dn=performance.now()}z=_;return}if(z=null,u.touches.length!==1)return;u.preventDefault();let d=ml(u);Lh({clientX:d.clientX,clientY:d.clientY,ctrlKey:!1})}function Df(u){if(u.touches.length<2&&(z=null),u.touches.length===2||u.changedTouches.length===0)return;R=!1;let d=ml(u);gl({clientX:d.clientX,clientY:d.clientY,ctrlKey:!1})}function Lh(u){if($t){nf(u.clientX,u.clientY);return}if(v==null)return;let d=u.clientX-T.x,_=u.clientY-T.y;if(!M&&!y&&(Math.abs(d)>A||Math.abs(_)>A)&&(u.ctrlKey||S?(y=!0,g=!1):(M=!0,g=!1)),y){Y.copy(a.position).sub(h);let b=Y.length();if(b<.001)return;let D=Math.atan2(Y.x,Y.z),P=Math.asin(Math.max(-1,Math.min(1,Y.y/b)));D-=d*N,P+=_*N,P=Math.max(I,Math.min(L,P)),Y.x=b*Math.cos(P)*Math.sin(D),Y.y=b*Math.sin(P),Y.z=b*Math.cos(P)*Math.cos(D),a.position.copy(h).add(Y),a.lookAt(h),T.x=u.clientX,T.y=u.clientY,dn=performance.now()}else if(M){let b=Ua(u.clientX,u.clientY);p.setFromNormalAndCoplanarPoint(new k(0,1,0),new k(0,h.y,0)),ls.setFromCamera(new Ge(v.x,v.y),a),ls.ray.intersectPlane(p,f);let D=f.clone();ls.setFromCamera(new Ge(b.x,b.y),a),ls.ray.intersectPlane(p,f);let P=D.sub(f);R&&P.multiplyScalar(q),h.add(P),a.position.add(P),a.lookAt(h),v={x:b.x,y:b.y},dn=performance.now()}}function gl(u){if(v!=null&&!M&&!y){let d=Ua(u.clientX,u.clientY);Pf(d.x,d.y)}v=null,M=!1,y=!1,S=!1,t.style.cursor="grab"}function Uf(u){u.preventDefault();let d=a.position.distanceTo(h),_=Math.max($,Math.min(ae,d+u.deltaY*ve));x.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(x.multiplyScalar(_)),a.lookAt(h),dn=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",Ph),t.addEventListener("mousemove",Lh),t.addEventListener("mouseup",gl),t.addEventListener("mouseleave",gl),t.addEventListener("touchstart",If,{passive:!0}),t.addEventListener("touchmove",Lf,{passive:!1}),t.addEventListener("touchend",Df,{passive:!0}),t.addEventListener("wheel",Uf,{passive:!1});function Dh(){let u=t.clientWidth,d=t.clientHeight;a.aspect=u/d,a.updateProjectionMatrix(),Vn.setSize(u,d),Vn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",Dh);let Vn=new fa({antialias:!1});Vn.setSize(t.clientWidth,t.clientHeight),Vn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Vn.shadowMap.enabled=!0,Vn.shadowMap.type=$c,t.appendChild(Vn.domElement),Dh();let Na=document.createElement("div");Na.id="combat-text-layer",t.appendChild(Na);let Bi=new k,hs=new k,Nf=1400;function ti(u,d,_,b,D){let P=document.createElement("div");P.className="combat-text-float "+(b?"miss":"damage")+(D?" "+D:""),P.textContent=_,P.style.position="absolute",Na.appendChild(P);let B=D==="skill-name"?1.7:1.2,O=performance.now();function U(){Bi.copy(tt(u,d)),Bi.y+=B,Bi.project(a);let Ee=t.clientWidth,W=t.clientHeight;P.style.left=(Bi.x*.5+.5)*Ee+"px",P.style.top=(1-(Bi.y*.5+.5))*W+"px"}let X=0;function ce(){X%2===0&&U(),X++,performance.now()-O<Nf?requestAnimationFrame(ce):P.remove()}requestAnimationFrame(ce)}let Of=1500;function Ff(u,d){let _=document.createElement("div");_.className="combat-text-float "+(d||"levelup"),_.textContent="LEVEL UP!",_.style.position="absolute",Na.appendChild(_);let b=performance.now(),D=0;function P(){Bi.copy(tt(u.x,u.y)),Bi.y+=1.2,Bi.project(a);let O=t.clientWidth,U=t.clientHeight;_.style.left=(Bi.x*.5+.5)*O+"px",_.style.top=(1-(Bi.y*.5+.5))*U+"px"}function B(){D%2===0&&P(),D++,performance.now()-b<Of?requestAnimationFrame(B):_.remove()}requestAnimationFrame(B)}function In(u,d,_){ke==="online"&&typeof cn=="function"&&!(_&&_.skipSync)&&cn({type:"unitDeath",unitId:u.id,killerId:d?.id}),v_(d?.class,u.class),console.log("[DEATH]",`${u.name} (${u.class}, P${u.player})`,`at (${u.x},${u.y})`,`Lv.${u.level}`),ti(u.x,u.y,"DEAD",!1);let b=Je.get(u.id);if(!b){wi(),Uh();return}let D=performance.now();function P(B){Bt();let O=B-D,U=Math.min(1,O/At),X=U*U;b.rotation.x=X*Math.PI*.5,U<1?requestAnimationFrame(P):(n.remove(b),Je.delete(u.id),wi(),Uh())}requestAnimationFrame(P)}function Uh(){if(Ut!=="playing")return;let u=le.some(_=>_.player===1&&_.hp>0),d=le.some(_=>_.player===2&&_.hp>0);u?d||yl(1):yl(2)}function Bf(){let u=Ah(),d=new Set(u.map(B=>B.gy*e.w+B.gx)),_=le.filter(B=>B.hp>0&&B.player===1&&d.has(B.y*e.w+B.x)).length,b=le.filter(B=>B.hp>0&&B.player===2&&d.has(B.y*e.w+B.x)).length,D=null,P="";if(_>b)D=1,P=`Time's up! ${yn(1)} wins! (${_} vs ${b} units on center base)`;else if(b>_)D=2,P=`Time's up! ${yn(2)} wins! (${b} vs ${_} units on center base)`;else{let B=le.filter(U=>U.hp>0&&U.player===1).reduce((U,X)=>U+X.hp,0),O=le.filter(U=>U.hp>0&&U.player===2).reduce((U,X)=>U+X.hp,0);B>O?(D=1,P=`Time's up! Draw on center \u2014 ${yn(1)} wins on total HP (${B} vs ${O})`):O>B?(D=2,P=`Time's up! Draw on center \u2014 ${yn(2)} wins on total HP (${O} vs ${B})`):P=`Draw! (equal units on center: ${_}, equal HP)`}yl(D,P)}function yl(u,d){Jo(),M_(le,u),Ut="gameover",document.getElementById("turn-menu").style.display="none",on(),An();let _=document.getElementById("game-over-overlay"),b=document.getElementById("game-over-title"),D=document.getElementById("game-over-cards"),P=document.getElementById("game-over-class-record");P&&(P.style.display="none",P.innerHTML=""),b.textContent=d??`${yn(u)} wins!`;let B=le.filter(O=>O.player===(u??1));if(D.innerHTML=B.map(O=>{let U=O,X=O.level>=3?" level-3":O.level>=2?" level-2":"",ce=U.maxHp>0&&U.hp/U.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${X}${ce}">
          <img class="game-over-card-image" src="${Vr[O.class]||""}" alt="${U.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${U.name}</div>
            <div class="game-over-card-meta">Lv.${U.level} ${U.class} \u2014 HP ${U.hp}/${U.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${U.hp}/${U.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${U.mp}/${U.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${Le(U,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${Le(U,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${Le(U,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${Le(U,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${Le(U,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${Le(U,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${U.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),_.classList.add("visible"),ke==="cvcpu"){if(Cs++,P&&Rs&&Cs>=js){let O=as.map(U=>{let X=Vi[U],ce=X.wins+X.losses||1,Ee=X.wins+X.losses>0?(X.wins/ce*100).toFixed(1)+"%":"\u2014",W=X.wins+X.losses>0?(X.losses/ce*100).toFixed(1)+"%":"\u2014";return{class:U,battles:X.battles,kills:X.kills,deaths:X.deaths,wins:X.wins,losses:X.losses,winRate:Ee,lossRate:W}});P.innerHTML=`
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
              ${O.map(U=>`
                <tr>
                  <td class="class-name">${U.class}</td>
                  <td>${U.battles}</td>
                  <td>${U.kills}</td>
                  <td>${U.deaths}</td>
                  <td>${U.wins}</td>
                  <td>${U.losses}</td>
                  <td>${U.winRate}</td>
                  <td>${U.lossRate}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `,P.style.display="block"}Cs<js&&setTimeout(()=>{_.classList.remove("visible"),C(),Wr()},2e3)}}function or(u=0){requestAnimationFrame(or),dn===0&&(dn=u);let d=u-dn>500;or.frameCount=(typeof or.frameCount=="number"?or.frameCount:0)+1;let _=()=>{if(qi){let b=.6+.4*Math.sin(u*.004);for(let D=0;D<qn.length;D++){let P=D%2===0?.4:.7;qn[D].opacity=P*b}Vn.render(n,a),qi=!1}};d?u-Oi>=100&&(Oi=u,qi=!0,_()):(or.frameCount%2===0&&(qi=!0),_())}or()}w_();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
