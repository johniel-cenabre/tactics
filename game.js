var _c="160";var Jd=0,ch=1,jd=2;var Wu=1,vc=2,Gi=3,fs=0,si=1,yn=2;var hs=0,ur=1,hh=2,uh=3,dh=4,Qd=5,As=100,ef=101,tf=102,fh=103,ph=104,nf=200,sf=201,rf=202,af=203,Rl=204,Cl=205,of=206,lf=207,cf=208,hf=209,uf=210,df=211,ff=212,pf=213,mf=214,gf=0,xf=1,yf=2,Ga=3,_f=4,vf=5,Mf=6,bf=7,Xu=0,Sf=1,Ef=2,us=0,Tf=1,wf=2,Af=3,Rf=4,Cf=5,Pf=6;var qu=300,pr=301,mr=302,Pl=303,Il=304,Eo=306,Wr=1e3,Ti=1001,Ll=1002,Qn=1003,mh=1004;var qo=1005;var pi=1006,If=1007;var Xr=1008;var ds=1009,Lf=1010,Df=1011,Mc=1012,Yu=1013,ls=1014,cs=1015,qr=1016,$u=1017,Ku=1018,Cs=1020,Uf=1021,wi=1023,Nf=1024,Of=1025,Ps=1026,gr=1027,Ff=1028,Zu=1029,Bf=1030,Ju=1031,ju=1033,Yo=33776,$o=33777,Ko=33778,Zo=33779,gh=35840,xh=35841,yh=35842,_h=35843,Qu=36196,vh=37492,Mh=37496,bh=37808,Sh=37809,Eh=37810,Th=37811,wh=37812,Ah=37813,Rh=37814,Ch=37815,Ph=37816,Ih=37817,Lh=37818,Dh=37819,Uh=37820,Nh=37821,Jo=36492,Oh=36494,Fh=36495,kf=36283,Bh=36284,kh=36285,Hh=36286;var Wa=2300,Xa=2301,jo=2302,zh=2400,Vh=2401,Gh=2402;var ed=3e3,Is=3001,Hf=3200,zf=3201,td=0,Vf=1,mi="",Vn="srgb",Xi="srgb-linear",bc="display-p3",To="display-p3-linear",qa="linear",fn="srgb",Ya="rec709",$a="p3";var Xs=7680;var Wh=519,Gf=512,Wf=513,Xf=514,nd=515,qf=516,Yf=517,$f=518,Kf=519,Xh=35044;var qh="300 es",Dl=1035,Wi=2e3,Ka=2001,ps=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qo=Math.PI/180,Ul=180/Math.PI;function br(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function $n(i,e,t){return Math.max(e,Math.min(t,i))}function Zf(i,e){return(i%e+e)%e}function el(i,e,t){return(1-t)*i+t*e}function Yh(i){return(i&i-1)===0&&i!==0}function Nl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ur(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ct=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],f=n[2],u=n[5],y=n[8],M=s[0],x=s[3],m=s[6],b=s[1],_=s[4],A=s[7],U=s[2],I=s[5],L=s[8];return r[0]=a*M+o*b+l*U,r[3]=a*x+o*_+l*I,r[6]=a*m+o*A+l*L,r[1]=c*M+h*b+p*U,r[4]=c*x+h*_+p*I,r[7]=c*m+h*A+p*L,r[2]=f*M+u*b+y*U,r[5]=f*x+u*_+y*I,r[8]=f*m+u*A+y*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*r,u=c*r-a*l,y=t*p+n*f+s*u;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/y;return e[0]=p*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=f*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=u*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tl=new Ct;function id(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jf(){let i=Za("canvas");return i.style.display="block",i}var $h={};function kr(i){i in $h||($h[i]=!0,console.warn(i))}var Kh=new Ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zh=new Ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ga={[Xi]:{transfer:qa,primaries:Ya,toReference:i=>i,fromReference:i=>i},[Vn]:{transfer:fn,primaries:Ya,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[To]:{transfer:qa,primaries:$a,toReference:i=>i.applyMatrix3(Zh),fromReference:i=>i.applyMatrix3(Kh)},[bc]:{transfer:fn,primaries:$a,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Zh),fromReference:i=>i.applyMatrix3(Kh).convertLinearToSRGB()}},jf=new Set([Xi,To]),sn={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!jf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ga[e].toReference,s=ga[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ga[i].primaries},getTransfer:function(i){return i===mi?qa:ga[i].transfer}};function dr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qs,Ja=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=Za("canvas")),qs.width=e.width,qs.height=e.height;let n=qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Za("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=dr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qf=0,ja=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=br(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(il(s[a].image)):r.push(il(s[a]))}else r=il(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ep=0,gi=class i extends ps{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ti,s=Ti,r=pi,a=Xr,o=wi,l=ds,c=i.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=br(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Is?Vn:mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vn?Is:ed}set encoding(e){kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Is?Vn:mi}};gi.DEFAULT_IMAGE=null;gi.DEFAULT_MAPPING=qu;gi.DEFAULT_ANISOTROPY=1;var kn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],u=l[5],y=l[9],M=l[2],x=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-M)<.01&&Math.abs(y-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+M)<.1&&Math.abs(y+x)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,A=(u+1)/2,U=(m+1)/2,I=(h+f)/4,L=(p+M)/4,X=(y+x)/4;return _>A&&_>U?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=I/n,r=L/n):A>U?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=I/s,r=X/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=L/r,s=X/r),this.set(n,s,r,t),this}let b=Math.sqrt((x-y)*(x-y)+(p-M)*(p-M)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(x-y)/b,this.y=(p-M)/b,this.z=(f-h)/b,this.w=Math.acos((c+u+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ol=class extends ps{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kn(0,0,e,t),this.scissorTest=!1,this.viewport=new kn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Is?Vn:mi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new gi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ja(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qi=class extends Ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qa=class extends gi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fl=class extends gi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ms=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],f=r[a+0],u=r[a+1],y=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p;return}if(o===1){e[t+0]=f,e[t+1]=u,e[t+2]=y,e[t+3]=M;return}if(p!==M||l!==f||c!==u||h!==y){let x=1-o,m=l*f+c*u+h*y+p*M,b=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let U=Math.sqrt(_),I=Math.atan2(U,m*b);x=Math.sin(x*I)/U,o=Math.sin(o*I)/U}let A=o*b;if(l=l*x+f*A,c=c*x+u*A,h=h*x+y*A,p=p*x+M*A,x===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=U,c*=U,h*=U,p*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],f=r[a+1],u=r[a+2],y=r[a+3];return e[t]=o*y+h*p+l*u-c*f,e[t+1]=l*y+h*f+c*p-o*u,e[t+2]=c*y+h*u+o*f-l*p,e[t+3]=h*y-o*p-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),f=l(n/2),u=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=f*h*p+c*u*y,this._y=c*u*p-f*h*y,this._z=c*h*y+f*u*p,this._w=c*h*p-f*u*y;break;case"YXZ":this._x=f*h*p+c*u*y,this._y=c*u*p-f*h*y,this._z=c*h*y-f*u*p,this._w=c*h*p+f*u*y;break;case"ZXY":this._x=f*h*p-c*u*y,this._y=c*u*p+f*h*y,this._z=c*h*y+f*u*p,this._w=c*h*p-f*u*y;break;case"ZYX":this._x=f*h*p-c*u*y,this._y=c*u*p+f*h*y,this._z=c*h*y-f*u*p,this._w=c*h*p+f*u*y;break;case"YZX":this._x=f*h*p+c*u*y,this._y=c*u*p+f*h*y,this._z=c*h*y-f*u*p,this._w=c*h*p-f*u*y;break;case"XZY":this._x=f*h*p-c*u*y,this._y=c*u*p-f*h*y,this._z=c*h*y+f*u*p,this._w=c*h*p+f*u*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],f=n+o+p;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>p){let u=2*Math.sqrt(1+n-o-p);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>p){let u=2*Math.sqrt(1+o-n-p);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($n(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=r*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new B,Jh=new ms,Ls=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mi):Mi.fromBufferAttribute(r,a),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),ya.subVectors(this.max,Nr),Ys.subVectors(e.a,Nr),$s.subVectors(e.b,Nr),Ks.subVectors(e.c,Nr),is.subVectors($s,Ys),ss.subVectors(Ks,$s),bs.subVectors(Ys,Ks);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-bs.z,bs.y,is.z,0,-is.x,ss.z,0,-ss.x,bs.z,0,-bs.x,-is.y,is.x,0,-ss.y,ss.x,0,-bs.y,bs.x,0];return!rl(t,Ys,$s,Ks,ya)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,Ys,$s,Ks,ya))?!1:(_a.crossVectors(is,ss),t=[_a.x,_a.y,_a.z],rl(t,Ys,$s,Ks,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new B,new B,new B,new B,new B,new B,new B,new B],Mi=new B,xa=new Ls,Ys=new B,$s=new B,Ks=new B,is=new B,ss=new B,bs=new B,Nr=new B,ya=new B,_a=new B,Ss=new B;function rl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ss.fromArray(i,r);let o=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),l=e.dot(Ss),c=t.dot(Ss),h=n.dot(Ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var tp=new Ls,Or=new B,al=new B,xr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(al)),this.expandByPoint(Or.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ki=new B,ol=new B,va=new B,rs=new B,ll=new B,Ma=new B,cl=new B,Yr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ol.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,a=-this.direction.dot(va),o=rs.dot(this.direction),l=-rs.dot(va),c=rs.lengthSq(),h=Math.abs(1-a*a),p,f,u,y;if(h>0)if(p=a*l-o,f=a*o-l,y=r*h,p>=0)if(f>=-y)if(f<=y){let M=1/h;p*=M,f*=M,u=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=r,p=Math.max(0,-(a*f+o)),u=-p*p+f*(f+2*l)+c;else f=-r,p=Math.max(0,-(a*f+o)),u=-p*p+f*(f+2*l)+c;else f<=-y?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+f*(f+2*l)+c):f<=y?(p=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+f*(f+2*l)+c);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),u=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ol).addScaledVector(va,f),u}intersectSphere(e,t){ki.subVectors(e.center,this.origin);let n=ki.dot(this.direction),s=ki.dot(ki)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,n,s,r){ll.subVectors(t,e),Ma.subVectors(n,e),cl.crossVectors(ll,Ma);let a=this.direction.dot(cl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rs.subVectors(this.origin,e);let l=o*this.direction.dot(Ma.crossVectors(rs,Ma));if(l<0)return null;let c=o*this.direction.dot(ll.cross(rs));if(c<0||l+c>a)return null;let h=-o*rs.dot(cl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class i{constructor(e,t,n,s,r,a,o,l,c,h,p,f,u,y,M,x){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,p,f,u,y,M,x)}set(e,t,n,s,r,a,o,l,c,h,p,f,u,y,M,x){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=p,m[14]=f,m[3]=u,m[7]=y,m[11]=M,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=a*h,u=a*p,y=o*h,M=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=u+y*c,t[5]=f-M*c,t[9]=-o*l,t[2]=M-f*c,t[6]=y+u*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,u=l*p,y=c*h,M=c*p;t[0]=f+M*o,t[4]=y*o-u,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=u*o-y,t[6]=M+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,u=l*p,y=c*h,M=c*p;t[0]=f-M*o,t[4]=-a*p,t[8]=y+u*o,t[1]=u+y*o,t[5]=a*h,t[9]=M-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,u=a*p,y=o*h,M=o*p;t[0]=l*h,t[4]=y*c-u,t[8]=f*c+M,t[1]=l*p,t[5]=M*c+f,t[9]=u*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,u=a*c,y=o*l,M=o*c;t[0]=l*h,t[4]=M-f*p,t[8]=y*p+u,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*p+y,t[10]=f-M*p}else if(e.order==="XZY"){let f=a*l,u=a*c,y=o*l,M=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=f*p+M,t[5]=a*h,t[9]=u*p-y,t[2]=y*p-u,t[6]=o*h,t[10]=M*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(np,e,ip)}lookAt(e,t,n){let s=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),as.crossVectors(n,ci),as.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),as.crossVectors(n,ci)),as.normalize(),ba.crossVectors(ci,as),s[0]=as.x,s[4]=ba.x,s[8]=ci.x,s[1]=as.y,s[5]=ba.y,s[9]=ci.y,s[2]=as.z,s[6]=ba.z,s[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],f=n[9],u=n[13],y=n[2],M=n[6],x=n[10],m=n[14],b=n[3],_=n[7],A=n[11],U=n[15],I=s[0],L=s[4],X=s[8],E=s[12],R=s[1],q=s[5],re=s[9],Me=s[13],P=s[2],O=s[6],V=s[10],se=s[14],ee=s[3],Z=s[7],ae=s[11],ce=s[15];return r[0]=a*I+o*R+l*P+c*ee,r[4]=a*L+o*q+l*O+c*Z,r[8]=a*X+o*re+l*V+c*ae,r[12]=a*E+o*Me+l*se+c*ce,r[1]=h*I+p*R+f*P+u*ee,r[5]=h*L+p*q+f*O+u*Z,r[9]=h*X+p*re+f*V+u*ae,r[13]=h*E+p*Me+f*se+u*ce,r[2]=y*I+M*R+x*P+m*ee,r[6]=y*L+M*q+x*O+m*Z,r[10]=y*X+M*re+x*V+m*ae,r[14]=y*E+M*Me+x*se+m*ce,r[3]=b*I+_*R+A*P+U*ee,r[7]=b*L+_*q+A*O+U*Z,r[11]=b*X+_*re+A*V+U*ae,r[15]=b*E+_*Me+A*se+U*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],u=e[14],y=e[3],M=e[7],x=e[11],m=e[15];return y*(+r*l*p-s*c*p-r*o*f+n*c*f+s*o*u-n*l*u)+M*(+t*l*u-t*c*f+r*a*f-s*a*u+s*c*h-r*l*h)+x*(+t*c*p-t*o*u-r*a*p+n*a*u+r*o*h-n*c*h)+m*(-s*o*h-t*l*p+t*o*f+s*a*p-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],u=e[11],y=e[12],M=e[13],x=e[14],m=e[15],b=p*x*c-M*f*c+M*l*u-o*x*u-p*l*m+o*f*m,_=y*f*c-h*x*c-y*l*u+a*x*u+h*l*m-a*f*m,A=h*M*c-y*p*c+y*o*u-a*M*u-h*o*m+a*p*m,U=y*p*l-h*M*l-y*o*f+a*M*f+h*o*x-a*p*x,I=t*b+n*_+s*A+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=b*L,e[1]=(M*f*r-p*x*r-M*s*u+n*x*u+p*s*m-n*f*m)*L,e[2]=(o*x*r-M*l*r+M*s*c-n*x*c-o*s*m+n*l*m)*L,e[3]=(p*l*r-o*f*r-p*s*c+n*f*c+o*s*u-n*l*u)*L,e[4]=_*L,e[5]=(h*x*r-y*f*r+y*s*u-t*x*u-h*s*m+t*f*m)*L,e[6]=(y*l*r-a*x*r-y*s*c+t*x*c+a*s*m-t*l*m)*L,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*u+t*l*u)*L,e[8]=A*L,e[9]=(y*p*r-h*M*r-y*n*u+t*M*u+h*n*m-t*p*m)*L,e[10]=(a*M*r-y*o*r+y*n*c-t*M*c-a*n*m+t*o*m)*L,e[11]=(h*o*r-a*p*r-h*n*c+t*p*c+a*n*u-t*o*u)*L,e[12]=U*L,e[13]=(h*M*s-y*p*s+y*n*f-t*M*f-h*n*x+t*p*x)*L,e[14]=(y*o*s-a*M*s-y*n*l+t*M*l+a*n*x-t*o*x)*L,e[15]=(a*p*s-h*o*s+h*n*l-t*p*l-a*n*f+t*o*f)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,p=o+o,f=r*c,u=r*h,y=r*p,M=a*h,x=a*p,m=o*p,b=l*c,_=l*h,A=l*p,U=n.x,I=n.y,L=n.z;return s[0]=(1-(M+m))*U,s[1]=(u+A)*U,s[2]=(y-_)*U,s[3]=0,s[4]=(u-A)*I,s[5]=(1-(f+m))*I,s[6]=(x+b)*I,s[7]=0,s[8]=(y+_)*L,s[9]=(x-b)*L,s[10]=(1-(f+M))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Zs.set(s[0],s[1],s[2]).length(),a=Zs.set(s[4],s[5],s[6]).length(),o=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bi.copy(this);let c=1/r,h=1/a,p=1/o;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=p,bi.elements[9]*=p,bi.elements[10]*=p,t.setFromRotationMatrix(bi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Wi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),f=(n+s)/(n-s),u,y;if(o===Wi)u=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ka)u=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Wi){let l=this.elements,c=1/(t-e),h=1/(n-s),p=1/(a-r),f=(t+e)*c,u=(n+s)*h,y,M;if(o===Wi)y=(a+r)*p,M=-2*p;else if(o===Ka)y=r*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=M,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zs=new B,bi=new Rn,np=new B(0,0,0),ip=new B(1,1,1),as=new B,ba=new B,ci=new B,jh=new Rn,Qh=new ms,eo=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin($n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin($n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$n(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-$n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};eo.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sp=0,eu=new B,Js=new ms,Hi=new Rn,Sa=new B,Fr=new B,rp=new B,ap=new ms,tu=new B(1,0,0),nu=new B(0,1,0),iu=new B(0,0,1),op={type:"added"},lp={type:"removed"},ti=class i extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new eo,n=new ms,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rn},normalMatrix:{value:new Ct}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(tu,e)}rotateY(e){return this.rotateOnAxis(nu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tu,e)}translateY(e){return this.translateOnAxis(nu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sa.copy(e):Sa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Fr,Sa,this.up):Hi.lookAt(Sa,Fr,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Hi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(op)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),u=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ti.DEFAULT_UP=new B(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=new B,zi=new B,hl=new B,Vi=new B,js=new B,Qs=new B,su=new B,ul=new B,dl=new B,fl=new B,Ea=!1,or=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Si.subVectors(e,t),s.cross(Si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Si.subVectors(s,t),zi.subVectors(n,t),hl.subVectors(e,t);let a=Si.dot(Si),o=Si.dot(zi),l=Si.dot(hl),c=zi.dot(zi),h=zi.dot(hl),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,u=(c*l-o*h)*f,y=(a*h-o*l)*f;return r.set(1-u-y,y,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getUV(e,t,n,s,r,a,o,l){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static isFrontFacing(e,t,n,s){return Si.subVectors(n,t),zi.subVectors(e,t),Si.cross(zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),Si.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;js.subVectors(s,n),Qs.subVectors(r,n),ul.subVectors(e,n);let l=js.dot(ul),c=Qs.dot(ul);if(l<=0&&c<=0)return t.copy(n);dl.subVectors(e,s);let h=js.dot(dl),p=Qs.dot(dl);if(h>=0&&p<=h)return t.copy(s);let f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(js,a);fl.subVectors(e,r);let u=js.dot(fl),y=Qs.dot(fl);if(y>=0&&u<=y)return t.copy(r);let M=u*c-l*y;if(M<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(Qs,o);let x=h*y-u*p;if(x<=0&&p-h>=0&&u-y>=0)return su.subVectors(r,s),o=(p-h)/(p-h+(u-y)),t.copy(s).addScaledVector(su,o);let m=1/(x+M+f);return a=M*m,o=f*m,t.copy(n).addScaledVector(js,a).addScaledVector(Qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function pl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var gt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=sn.workingColorSpace){return this.r=e,this.g=t,this.b=n,sn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=sn.workingColorSpace){if(e=Zf(e,1),t=$n(t,0,1),n=$n(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pl(a,r,e+1/3),this.g=pl(a,r,e),this.b=pl(a,r,e-1/3)}return sn.toWorkingColorSpace(this,s),this}setStyle(e,t=Vn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){let n=sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=nl(e.r),this.g=nl(e.g),this.b=nl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return sn.fromWorkingColorSpace(Yn.copy(this),e),Math.round($n(Yn.r*255,0,255))*65536+Math.round($n(Yn.g*255,0,255))*256+Math.round($n(Yn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sn.workingColorSpace){sn.fromWorkingColorSpace(Yn.copy(this),t);let n=Yn.r,s=Yn.g,r=Yn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=sn.workingColorSpace){return sn.fromWorkingColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=Vn){sn.fromWorkingColorSpace(Yn.copy(this),e);let t=Yn.r,n=Yn.g,s=Yn.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Ta);let n=el(os.h,Ta.h,t),s=el(os.s,Ta.s,t),r=el(os.l,Ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yn=new gt;gt.NAMES=sd;var cp=0,gs=class extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=br(),this.name="",this.type="Material",this.blending=ur,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rl&&(n.blendSrc=this.blendSrc),this.blendDst!==Cl&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mn=class extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var An=new B,wa=new Oe,ri=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ur(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array),s=ii(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),n=ii(n,this.array),s=ii(s,this.array),r=ii(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xh&&(e.usage=this.usage),e}};var to=class extends ri{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var no=class extends ri{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var vn=class extends ri{constructor(e,t,n){super(new Float32Array(e),t,n)}};var hp=0,fi=new Rn,ml=new ti,er=new B,hi=new Ls,Br=new Ls,Bn=new B,ai=class i extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(id(e)?no:to)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Bn.addVectors(hi.min,Br.min),hi.expandByPoint(Bn),Bn.addVectors(hi.max,Br.max),hi.expandByPoint(Bn)):(hi.expandByPoint(Br.min),hi.expandByPoint(Br.max))}hi.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Bn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Bn.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(e,c),Bn.add(er)),s=Math.max(s,n.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new B,h[R]=new B;let p=new B,f=new B,u=new B,y=new Oe,M=new Oe,x=new Oe,m=new B,b=new B;function _(R,q,re){p.fromArray(s,R*3),f.fromArray(s,q*3),u.fromArray(s,re*3),y.fromArray(a,R*2),M.fromArray(a,q*2),x.fromArray(a,re*2),f.sub(p),u.sub(p),M.sub(y),x.sub(y);let Me=1/(M.x*x.y-x.x*M.y);isFinite(Me)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(u,-M.y).multiplyScalar(Me),b.copy(u).multiplyScalar(M.x).addScaledVector(f,-x.x).multiplyScalar(Me),c[R].add(m),c[q].add(m),c[re].add(m),h[R].add(b),h[q].add(b),h[re].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let R=0,q=A.length;R<q;++R){let re=A[R],Me=re.start,P=re.count;for(let O=Me,V=Me+P;O<V;O+=3)_(n[O+0],n[O+1],n[O+2])}let U=new B,I=new B,L=new B,X=new B;function E(R){L.fromArray(r,R*3),X.copy(L);let q=c[R];U.copy(q),U.sub(L.multiplyScalar(L.dot(q))).normalize(),I.crossVectors(X,q);let Me=I.dot(h[R])<0?-1:1;l[R*4]=U.x,l[R*4+1]=U.y,l[R*4+2]=U.z,l[R*4+3]=Me}for(let R=0,q=A.length;R<q;++R){let re=A[R],Me=re.start,P=re.count;for(let O=Me,V=Me+P;O<V;O+=3)E(n[O+0]),E(n[O+1]),E(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,p=new B;if(e)for(let f=0,u=e.count;f<u;f+=3){let y=e.getX(f+0),M=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h),u=0,y=0;for(let M=0,x=l.length;M<x;M++){o.isInterleavedBufferAttribute?u=l[M]*o.data.stride+o.offset:u=l[M]*h;for(let m=0;m<h;m++)f[y++]=c[u++]}return new ri(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){let u=c[p];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],p=r[c];for(let f=0,u=p.length;f<u;f++)h.push(p[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ru=new Rn,Es=new Yr,Aa=new xr,au=new B,tr=new B,nr=new B,ir=new B,gl=new B,Ra=new B,Ca=new Oe,Pa=new Oe,Ia=new Oe,ou=new B,lu=new B,cu=new B,La=new B,Da=new B,Ye=class extends ti{constructor(e=new ai,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(gl.fromBufferAttribute(p,e),a?Ra.addScaledVector(gl,h):Ra.addScaledVector(gl.sub(t),h))}t.add(Ra)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Aa.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Aa,au)===null||Es.origin.distanceToSquared(au)>(e.far-e.near)**2))&&(ru.copy(r).invert(),Es.copy(e.ray).applyMatrix4(ru),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,M=f.length;y<M;y++){let x=f[y],m=a[x.materialIndex],b=Math.max(x.start,u.start),_=Math.min(o.count,Math.min(x.start+x.count,u.start+u.count));for(let A=b,U=_;A<U;A+=3){let I=o.getX(A),L=o.getX(A+1),X=o.getX(A+2);s=Ua(this,m,e,n,c,h,p,I,L,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let y=Math.max(0,u.start),M=Math.min(o.count,u.start+u.count);for(let x=y,m=M;x<m;x+=3){let b=o.getX(x),_=o.getX(x+1),A=o.getX(x+2);s=Ua(this,a,e,n,c,h,p,b,_,A),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,M=f.length;y<M;y++){let x=f[y],m=a[x.materialIndex],b=Math.max(x.start,u.start),_=Math.min(l.count,Math.min(x.start+x.count,u.start+u.count));for(let A=b,U=_;A<U;A+=3){let I=A,L=A+1,X=A+2;s=Ua(this,m,e,n,c,h,p,I,L,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let y=Math.max(0,u.start),M=Math.min(l.count,u.start+u.count);for(let x=y,m=M;x<m;x+=3){let b=x,_=x+1,A=x+2;s=Ua(this,a,e,n,c,h,p,b,_,A),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function up(i,e,t,n,s,r,a,o){let l;if(e.side===si?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===fs,o),l===null)return null;Da.copy(o),Da.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Da);return c<t.near||c>t.far?null:{distance:c,point:Da.clone(),object:i}}function Ua(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,tr),i.getVertexPosition(l,nr),i.getVertexPosition(c,ir);let h=up(i,e,t,n,tr,nr,ir,La);if(h){s&&(Ca.fromBufferAttribute(s,o),Pa.fromBufferAttribute(s,l),Ia.fromBufferAttribute(s,c),h.uv=or.getInterpolation(La,tr,nr,ir,Ca,Pa,Ia,new Oe)),r&&(Ca.fromBufferAttribute(r,o),Pa.fromBufferAttribute(r,l),Ia.fromBufferAttribute(r,c),h.uv1=or.getInterpolation(La,tr,nr,ir,Ca,Pa,Ia,new Oe),h.uv2=h.uv1),a&&(ou.fromBufferAttribute(a,o),lu.fromBufferAttribute(a,l),cu.fromBufferAttribute(a,c),h.normal=or.getInterpolation(La,tr,nr,ir,ou,lu,cu,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new B,materialIndex:0};or.getNormal(tr,nr,ir,p.normal),h.face=p}return h}var In=class i extends ai{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],f=0,u=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(h,3)),this.setAttribute("uv",new vn(p,2));function y(M,x,m,b,_,A,U,I,L,X,E){let R=A/L,q=U/X,re=A/2,Me=U/2,P=I/2,O=L+1,V=X+1,se=0,ee=0,Z=new B;for(let ae=0;ae<V;ae++){let ce=ae*q-Me;for(let be=0;be<O;be++){let Y=be*R-re;Z[M]=Y*b,Z[x]=ce*_,Z[m]=P,c.push(Z.x,Z.y,Z.z),Z[M]=0,Z[x]=0,Z[m]=I>0?1:-1,h.push(Z.x,Z.y,Z.z),p.push(be/L),p.push(1-ae/X),se+=1}}for(let ae=0;ae<X;ae++)for(let ce=0;ce<L;ce++){let be=f+ce+O*ae,Y=f+ce+O*(ae+1),me=f+(ce+1)+O*(ae+1),Le=f+(ce+1)+O*ae;l.push(be,Y,Le),l.push(Y,me,Le),ee+=6}o.addGroup(u,ee,E),u+=ee,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function yr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function jn(i){let e={};for(let t=0;t<i.length;t++){let n=yr(i[t]);for(let s in n)e[s]=n[s]}return e}function dp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rd(i){return i.getRenderTarget()===null?i.outputColorSpace:sn.workingColorSpace}var fp={clone:yr,merge:jn},pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yi=class extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},io=class extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=class extends io{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sr=-90,rr=1,Bl=class extends ti{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ei(sr,rr,e,t);s.layers=this.layers,this.add(s);let r=new ei(sr,rr,e,t);r.layers=this.layers,this.add(r);let a=new ei(sr,rr,e,t);a.layers=this.layers,this.add(a);let o=new ei(sr,rr,e,t);o.layers=this.layers,this.add(o);let l=new ei(sr,rr,e,t);l.layers=this.layers,this.add(l);let c=new ei(sr,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(p,f,u),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},so=class extends gi{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kl=class extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Is?Vn:mi),this.texture=new so(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new In(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:si,blending:hs});r.uniforms.tEquirect.value=t;let a=new Ye(s,r),o=t.minFilter;return t.minFilter===Xr&&(t.minFilter=pi),new Bl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},xl=new B,gp=new B,xp=new Ct,Ei=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xl.subVectors(n,t).cross(gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xp.getNormalMatrix(e),s=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ts=new xr,Na=new B,Kr=class{constructor(e=new Ei,t=new Ei,n=new Ei,s=new Ei,r=new Ei,a=new Ei){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],p=s[6],f=s[7],u=s[8],y=s[9],M=s[10],x=s[11],m=s[12],b=s[13],_=s[14],A=s[15];if(n[0].setComponents(l-r,f-c,x-u,A-m).normalize(),n[1].setComponents(l+r,f+c,x+u,A+m).normalize(),n[2].setComponents(l+a,f+h,x+y,A+b).normalize(),n[3].setComponents(l-a,f-h,x-y,A-b).normalize(),n[4].setComponents(l-o,f-p,x-M,A-_).normalize(),t===Wi)n[5].setComponents(l+o,f+p,x+M,A+_).normalize();else if(t===Ka)n[5].setComponents(o,p,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Na.x=s.normal.x>0?e.max.x:e.min.x,Na.y=s.normal.y>0?e.max.y:e.min.y,Na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ad(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let p=c.array,f=c.usage,u=p.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,p,f),c.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,p){let f=h.array,u=h._updateRange,y=h.updateRanges;if(i.bindBuffer(p,c),u.count===-1&&y.length===0&&i.bufferSubData(p,0,f),y.length!==0){for(let M=0,x=y.length;M<x;M++){let m=y[M];t?i.bufferSubData(p,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):i.bufferSubData(p,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(p,u.offset*f.BYTES_PER_ELEMENT,f,u.offset,u.count):i.bufferSubData(p,u.offset*f.BYTES_PER_ELEMENT,f.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let p=n.get(c);if(p===void 0)n.set(c,s(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,c,h),p.version=c.version}}return{get:a,remove:o,update:l}}var Di=class i extends ai{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=e/o,f=t/l,u=[],y=[],M=[],x=[];for(let m=0;m<h;m++){let b=m*f-a;for(let _=0;_<c;_++){let A=_*p-r;y.push(A,-b,0),M.push(0,0,1),x.push(_/o),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let _=b+c*m,A=b+c*(m+1),U=b+1+c*(m+1),I=b+1+c*m;u.push(_,A,I),u.push(A,U,I)}this.setIndex(u),this.setAttribute("position",new vn(y,3)),this.setAttribute("normal",new vn(M,3)),this.setAttribute("uv",new vn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},_p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,Mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
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
#endif`,Rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
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
#endif`,Dp=`#ifdef USE_BUMPMAP
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vp=`#define PI 3.141592653589793
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
} // validated`,Gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`
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
}`,Jp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,am=`#ifdef USE_GRADIENTMAP
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
}`,om=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
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
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
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
#endif`,ym=`struct PhysicalMaterial {
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
}`,_m=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cm=`#if defined( USE_POINTS_UV )
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
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dm=`#ifdef USE_MORPHNORMALS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Nm=`#ifdef USE_MORPHTARGETS
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
#endif`,Om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
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
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
}`,wg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ug=`#define LAMBERT
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
}`,Ng=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,Fg=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define NORMAL
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
}`,Hg=`#define PHONG
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
}`,zg=`#define PHONG
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
}`,Vg=`#define STANDARD
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
}`,Gg=`#define STANDARD
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,Zg=`uniform float rotation;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:_p,alphahash_pars_fragment:vp,alphamap_fragment:Mp,alphamap_pars_fragment:bp,alphatest_fragment:Sp,alphatest_pars_fragment:Ep,aomap_fragment:Tp,aomap_pars_fragment:wp,batching_pars_vertex:Ap,batching_vertex:Rp,begin_vertex:Cp,beginnormal_vertex:Pp,bsdfs:Ip,iridescence_fragment:Lp,bumpmap_pars_fragment:Dp,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Op,clipping_planes_vertex:Fp,color_fragment:Bp,color_pars_fragment:kp,color_pars_vertex:Hp,color_vertex:zp,common:Vp,cube_uv_reflection_fragment:Gp,defaultnormal_vertex:Wp,displacementmap_pars_vertex:Xp,displacementmap_vertex:qp,emissivemap_fragment:Yp,emissivemap_pars_fragment:$p,colorspace_fragment:Kp,colorspace_pars_fragment:Zp,envmap_fragment:Jp,envmap_common_pars_fragment:jp,envmap_pars_fragment:Qp,envmap_pars_vertex:em,envmap_physical_pars_fragment:dm,envmap_vertex:tm,fog_vertex:nm,fog_pars_vertex:im,fog_fragment:sm,fog_pars_fragment:rm,gradientmap_pars_fragment:am,lightmap_fragment:om,lightmap_pars_fragment:lm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:hm,lights_pars_begin:um,lights_toon_fragment:fm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:xm,lights_physical_pars_fragment:ym,lights_fragment_begin:_m,lights_fragment_maps:vm,lights_fragment_end:Mm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:Tm,map_fragment:wm,map_pars_fragment:Am,map_particle_fragment:Rm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Im,morphcolor_vertex:Lm,morphnormal_vertex:Dm,morphtarget_pars_vertex:Um,morphtarget_vertex:Nm,normal_fragment_begin:Om,normal_fragment_maps:Fm,normal_pars_fragment:Bm,normal_pars_vertex:km,normal_vertex:Hm,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:Xm,opaque_fragment:qm,packing:Ym,premultiplied_alpha_fragment:$m,project_vertex:Km,dithering_fragment:Zm,dithering_pars_fragment:Jm,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:eg,shadowmap_pars_vertex:tg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:ag,skinnormal_vertex:og,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:ug,transmission_fragment:dg,transmission_pars_fragment:fg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:xg,background_vert:yg,background_frag:_g,backgroundCube_vert:vg,backgroundCube_frag:Mg,cube_vert:bg,cube_frag:Sg,depth_vert:Eg,depth_frag:Tg,distanceRGBA_vert:wg,distanceRGBA_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Pg,linedashed_frag:Ig,meshbasic_vert:Lg,meshbasic_frag:Dg,meshlambert_vert:Ug,meshlambert_frag:Ng,meshmatcap_vert:Og,meshmatcap_frag:Fg,meshnormal_vert:Bg,meshnormal_frag:kg,meshphong_vert:Hg,meshphong_frag:zg,meshphysical_vert:Vg,meshphysical_frag:Gg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:qg,points_frag:Yg,shadow_vert:$g,shadow_frag:Kg,sprite_vert:Zg,sprite_frag:Jg},Ce={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Li={basic:{uniforms:jn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:jn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:jn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:jn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:jn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:jn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:jn([Ce.points,Ce.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:jn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:jn([Ce.common,Ce.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:jn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:jn([Ce.sprite,Ce.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:jn([Ce.common,Ce.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:jn([Ce.lights,Ce.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Li.physical={uniforms:jn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};var Oa={r:0,b:0,g:0};function jg(i,e,t,n,s,r,a){let o=new gt(0),l=r===!0?0:1,c,h,p=null,f=0,u=null;function y(x,m){let b=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?M(o,l):_&&_.isColor&&(M(_,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Eo)?(h===void 0&&(h=new Ye(new In(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:yr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=sn.getTransfer(_.colorSpace)!==fn,(p!==_||f!==_.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,p=_,f=_.version,u=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ye(new Di(2,2),new Yi({name:"BackgroundMaterial",uniforms:yr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=sn.getTransfer(_.colorSpace)!==fn,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,p=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function M(x,m){x.getRGB(Oa,rd(i)),n.buffers.color.setClear(Oa.r,Oa.g,Oa.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(x,m=1){o.set(x),l=m,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,M(o,l)},render:y}}function Qg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=x(null),c=l,h=!1;function p(P,O,V,se,ee){let Z=!1;if(a){let ae=M(se,V,O);c!==ae&&(c=ae,u(c.object)),Z=m(P,se,V,ee),Z&&b(P,se,V,ee)}else{let ae=O.wireframe===!0;(c.geometry!==se.id||c.program!==V.id||c.wireframe!==ae)&&(c.geometry=se.id,c.program=V.id,c.wireframe=ae,Z=!0)}ee!==null&&t.update(ee,i.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,X(P,O,V,se),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function y(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function M(P,O,V){let se=V.wireframe===!0,ee=o[P.id];ee===void 0&&(ee={},o[P.id]=ee);let Z=ee[O.id];Z===void 0&&(Z={},ee[O.id]=Z);let ae=Z[se];return ae===void 0&&(ae=x(f()),Z[se]=ae),ae}function x(P){let O=[],V=[],se=[];for(let ee=0;ee<s;ee++)O[ee]=0,V[ee]=0,se[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:se,object:P,attributes:{},index:null}}function m(P,O,V,se){let ee=c.attributes,Z=O.attributes,ae=0,ce=V.getAttributes();for(let be in ce)if(ce[be].location>=0){let me=ee[be],Le=Z[be];if(Le===void 0&&(be==="instanceMatrix"&&P.instanceMatrix&&(Le=P.instanceMatrix),be==="instanceColor"&&P.instanceColor&&(Le=P.instanceColor)),me===void 0||me.attribute!==Le||Le&&me.data!==Le.data)return!0;ae++}return c.attributesNum!==ae||c.index!==se}function b(P,O,V,se){let ee={},Z=O.attributes,ae=0,ce=V.getAttributes();for(let be in ce)if(ce[be].location>=0){let me=Z[be];me===void 0&&(be==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),be==="instanceColor"&&P.instanceColor&&(me=P.instanceColor));let Le={};Le.attribute=me,me&&me.data&&(Le.data=me.data),ee[be]=Le,ae++}c.attributes=ee,c.attributesNum=ae,c.index=se}function _(){let P=c.newAttributes;for(let O=0,V=P.length;O<V;O++)P[O]=0}function A(P){U(P,0)}function U(P,O){let V=c.newAttributes,se=c.enabledAttributes,ee=c.attributeDivisors;V[P]=1,se[P]===0&&(i.enableVertexAttribArray(P),se[P]=1),ee[P]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),ee[P]=O)}function I(){let P=c.newAttributes,O=c.enabledAttributes;for(let V=0,se=O.length;V<se;V++)O[V]!==P[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function L(P,O,V,se,ee,Z,ae){ae===!0?i.vertexAttribIPointer(P,O,V,ee,Z):i.vertexAttribPointer(P,O,V,se,ee,Z)}function X(P,O,V,se){if(n.isWebGL2===!1&&(P.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let ee=se.attributes,Z=V.getAttributes(),ae=O.defaultAttributeValues;for(let ce in Z){let be=Z[ce];if(be.location>=0){let Y=ee[ce];if(Y===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let me=Y.normalized,Le=Y.itemSize,We=t.get(Y);if(We===void 0)continue;let Xe=We.buffer,ht=We.type,ut=We.bytesPerElement,je=n.isWebGL2===!0&&(ht===i.INT||ht===i.UNSIGNED_INT||Y.gpuType===Yu);if(Y.isInterleavedBufferAttribute){let de=Y.data,$=de.stride,Qe=Y.offset;if(de.isInstancedInterleavedBuffer){for(let He=0;He<be.locationSize;He++)U(be.location+He,de.meshPerAttribute);P.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let He=0;He<be.locationSize;He++)A(be.location+He);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let He=0;He<be.locationSize;He++)L(be.location+He,Le/be.locationSize,ht,me,$*ut,(Qe+Le/be.locationSize*He)*ut,je)}else{if(Y.isInstancedBufferAttribute){for(let de=0;de<be.locationSize;de++)U(be.location+de,Y.meshPerAttribute);P.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let de=0;de<be.locationSize;de++)A(be.location+de);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let de=0;de<be.locationSize;de++)L(be.location+de,Le/be.locationSize,ht,me,Le*ut,Le/be.locationSize*de*ut,je)}}else if(ae!==void 0){let me=ae[ce];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(be.location,me);break;case 3:i.vertexAttrib3fv(be.location,me);break;case 4:i.vertexAttrib4fv(be.location,me);break;default:i.vertexAttrib1fv(be.location,me)}}}}I()}function E(){re();for(let P in o){let O=o[P];for(let V in O){let se=O[V];for(let ee in se)y(se[ee].object),delete se[ee];delete O[V]}delete o[P]}}function R(P){if(o[P.id]===void 0)return;let O=o[P.id];for(let V in O){let se=O[V];for(let ee in se)y(se[ee].object),delete se[ee];delete O[V]}delete o[P.id]}function q(P){for(let O in o){let V=o[O];if(V[P.id]===void 0)continue;let se=V[P.id];for(let ee in se)y(se[ee].object),delete se[ee];delete V[P.id]}}function re(){Me(),h=!0,c!==l&&(c=l,u(c.object))}function Me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:re,resetDefaultState:Me,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:q,initAttributes:_,enableAttribute:A,disableUnusedAttributes:I}}function e0(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,p){i.drawArrays(r,h,p),t.update(p,r,1)}function l(h,p,f){if(f===0)return;let u,y;if(s)u=i,y="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[y](r,h,p,f),t.update(p,r,f)}function c(h,p,f){if(f===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let y=0;y<f;y++)this.render(h[y],p[y]);else{u.multiDrawArraysWEBGL(r,h,0,p,0,f);let y=0;for(let M=0;M<f;M++)y+=p[M];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function t0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,A=a||e.has("OES_texture_float"),U=_&&A,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:f,maxTextureSize:u,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:x,maxVaryings:m,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:A,floatVertexTextures:U,maxSamples:I}}function n0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ei,o=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let u=p.length!==0||f||n!==0||s;return s=f,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,u){let y=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,m=i.get(p);if(!s||y===null||y.length===0||r&&!x)r?h(null):c();else{let b=r?0:n,_=b*4,A=m.clippingState||null;l.value=A,A=h(y,f,_,u);for(let U=0;U!==_;++U)A[U]=t[U];m.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,f,u,y){let M=p!==null?p.length:0,x=null;if(M!==0){if(x=l.value,y!==!0||x===null){let m=u+M*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(x===null||x.length<m)&&(x=new Float32Array(m));for(let _=0,A=u;_!==M;++_,A+=4)a.copy(p[_]).applyMatrix4(b,o),a.normal.toArray(x,A),x[A+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function i0(i){let e=new WeakMap;function t(a,o){return o===Pl?a.mapping=pr:o===Il&&(a.mapping=mr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Pl||o===Il)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new kl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ro=class extends io{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lr=4,hu=[.125,.215,.35,.446,.526,.582],Rs=20,yl=new ro,uu=new gt,_l=null,vl=0,Ml=0,ws=(1+Math.sqrt(5))/2,ar=1/ws,du=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ws,ar),new B(0,ws,-ar),new B(ar,0,ws),new B(-ar,0,ws),new B(ws,ar,0),new B(-ws,ar,0)],ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,vl,Ml),e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:qr,format:wi,colorSpace:Xi,depthBuffer:!1},s=fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s0(r)),this._blurMaterial=r0(r,e,t)}return s}_compileMaterial(e){let t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,yl)}_sceneToCubeUV(e,t,n,s){let o=new ei(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(uu),h.toneMapping=us,h.autoClear=!1;let u=new Mn({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),y=new Ye(new In,u),M=!1,x=e.background;x?x.isColor&&(u.color.copy(x),e.background=null,M=!0):(u.color.copy(uu),M=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):b===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let _=this._cubeSize;Fa(s,b*_,m>2?_:0,_,_),h.setRenderTarget(s),M&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pr||e.mapping===mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Fa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=du[(s-1)%du.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new Ye(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Rs-1),M=r/y,x=isFinite(r)?1+Math.floor(h*M):Rs;x>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Rs}`);let m=[],b=0;for(let L=0;L<Rs;++L){let X=L/M,E=Math.exp(-X*X/2);m.push(E),L===0?b+=E:L<x&&(b+=2*E)}for(let L=0;L<m.length;L++)m[L]=m[L]/b;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=y,f.mipInt.value=_-n;let A=this._sizeLods[s],U=3*A*(s>_-lr?s-_+lr:0),I=4*(this._cubeSize-A);Fa(t,U,I,3*A,2*A),l.setRenderTarget(t),l.render(p,yl)}};function s0(i){let e=[],t=[],n=[],s=i,r=i-lr+1+hu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-lr?l=hu[a-i+lr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],u=6,y=6,M=3,x=2,m=1,b=new Float32Array(M*y*u),_=new Float32Array(x*y*u),A=new Float32Array(m*y*u);for(let I=0;I<u;I++){let L=I%3*2/3-1,X=I>2?0:-1,E=[L,X,0,L+2/3,X,0,L+2/3,X+1,0,L,X,0,L+2/3,X+1,0,L,X+1,0];b.set(E,M*y*I),_.set(f,x*y*I);let R=[I,I,I,I,I,I];A.set(R,m*y*I)}let U=new ai;U.setAttribute("position",new ri(b,M)),U.setAttribute("uv",new ri(_,x)),U.setAttribute("faceIndex",new ri(A,m)),e.push(U),s>lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fu(i,e,t){let n=new qi(i,e,t);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function r0(i,e,t){let n=new Float32Array(Rs),s=new B(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function pu(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function mu(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function a0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Pl||l===Il,h=l===pr||l===mr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new ao(i)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{let p=o.image;if(c&&p&&p.height>0||h&&p&&s(p)){t===null&&(t=new ao(i));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function o0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function l0(i,e,t,n){let s={},r=new WeakMap;function a(p){let f=p.target;f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);for(let y in f.morphAttributes){let M=f.morphAttributes[y];for(let x=0,m=M.length;x<m;x++)e.remove(M[x])}f.removeEventListener("dispose",a),delete s[f.id];let u=r.get(f);u&&(e.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(p){let f=p.attributes;for(let y in f)e.update(f[y],i.ARRAY_BUFFER);let u=p.morphAttributes;for(let y in u){let M=u[y];for(let x=0,m=M.length;x<m;x++)e.update(M[x],i.ARRAY_BUFFER)}}function c(p){let f=[],u=p.index,y=p.attributes.position,M=0;if(u!==null){let b=u.array;M=u.version;for(let _=0,A=b.length;_<A;_+=3){let U=b[_+0],I=b[_+1],L=b[_+2];f.push(U,I,I,L,L,U)}}else if(y!==void 0){let b=y.array;M=y.version;for(let _=0,A=b.length/3-1;_<A;_+=3){let U=_+0,I=_+1,L=_+2;f.push(U,I,I,L,L,U)}}else return;let x=new(id(f)?no:to)(f,1);x.version=M;let m=r.get(p);m&&e.remove(m),r.set(p,x)}function h(p){let f=r.get(p);if(f){let u=p.index;u!==null&&f.version<u.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function c0(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,y){i.drawElements(r,y,o,u*l),t.update(y,r,1)}function p(u,y,M){if(M===0)return;let x,m;if(s)x=i,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](r,y,o,u*l,M),t.update(y,r,M)}function f(u,y,M){if(M===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<M;m++)this.render(u[m]/l,y[m]);else{x.multiDrawElementsWEBGL(r,y,0,o,u,0,M);let m=0;for(let b=0;b<M;b++)m+=y[b];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=f}function h0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function u0(i,e){return i[0]-e[0]}function d0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function f0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new kn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,p){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=u!==void 0?u.length:0,M=r.get(h);if(M===void 0||M.count!==y){let P=function(){re.dispose(),r.delete(h),h.removeEventListener("dispose",P)};M!==void 0&&M.texture.dispose();let b=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],X=0;b===!0&&(X=1),_===!0&&(X=2),A===!0&&(X=3);let E=h.attributes.position.count*X,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let q=new Float32Array(E*R*4*y),re=new Qa(q,E,R,y);re.type=cs,re.needsUpdate=!0;let Me=X*4;for(let O=0;O<y;O++){let V=U[O],se=I[O],ee=L[O],Z=E*R*4*O;for(let ae=0;ae<V.count;ae++){let ce=ae*Me;b===!0&&(a.fromBufferAttribute(V,ae),q[Z+ce+0]=a.x,q[Z+ce+1]=a.y,q[Z+ce+2]=a.z,q[Z+ce+3]=0),_===!0&&(a.fromBufferAttribute(se,ae),q[Z+ce+4]=a.x,q[Z+ce+5]=a.y,q[Z+ce+6]=a.z,q[Z+ce+7]=0),A===!0&&(a.fromBufferAttribute(ee,ae),q[Z+ce+8]=a.x,q[Z+ce+9]=a.y,q[Z+ce+10]=a.z,q[Z+ce+11]=ee.itemSize===4?a.w:1)}}M={count:y,texture:re,size:new Oe(E,R)},r.set(h,M),h.addEventListener("dispose",P)}let x=0;for(let b=0;b<f.length;b++)x+=f[b];let m=h.morphTargetsRelative?1:1-x;p.getUniforms().setValue(i,"morphTargetBaseInfluence",m),p.getUniforms().setValue(i,"morphTargetInfluences",f),p.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let u=f===void 0?0:f.length,y=n[h.id];if(y===void 0||y.length!==u){y=[];for(let _=0;_<u;_++)y[_]=[_,0];n[h.id]=y}for(let _=0;_<u;_++){let A=y[_];A[0]=_,A[1]=f[_]}y.sort(d0);for(let _=0;_<8;_++)_<u&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(u0);let M=h.morphAttributes.position,x=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let A=o[_],U=A[0],I=A[1];U!==Number.MAX_SAFE_INTEGER&&I?(M&&h.getAttribute("morphTarget"+_)!==M[U]&&h.setAttribute("morphTarget"+_,M[U]),x&&h.getAttribute("morphNormal"+_)!==x[U]&&h.setAttribute("morphNormal"+_,x[U]),s[_]=I,m+=I):(M&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),x&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let b=h.morphTargetsRelative?1:1-m;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function p0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,p=e.get(l,h);if(s.get(p)!==c&&(e.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return p}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var oo=class extends gi{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ps,h!==Ps&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=ls),n===void 0&&h===gr&&(n=Cs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},od=new gi,ld=new oo(1,1);ld.compareFunction=nd;var cd=new Qa,hd=new Fl,ud=new so,gu=[],xu=[],yu=new Float32Array(16),_u=new Float32Array(9),vu=new Float32Array(4);function Sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wo(i,e){let t=xu[e];t===void 0&&(t=new Int32Array(e),xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function m0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function g0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2fv(this.addr,e),Dn(t,e)}}function x0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ln(t,e))return;i.uniform3fv(this.addr,e),Dn(t,e)}}function y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4fv(this.addr,e),Dn(t,e)}}function _0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),Dn(t,n)}}function v0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;_u.set(n),i.uniformMatrix3fv(this.addr,!1,_u),Dn(t,n)}}function M0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;yu.set(n),i.uniformMatrix4fv(this.addr,!1,yu),Dn(t,n)}}function b0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2iv(this.addr,e),Dn(t,e)}}function E0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3iv(this.addr,e),Dn(t,e)}}function T0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4iv(this.addr,e),Dn(t,e)}}function w0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function A0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2uiv(this.addr,e),Dn(t,e)}}function R0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3uiv(this.addr,e),Dn(t,e)}}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4uiv(this.addr,e),Dn(t,e)}}function P0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ld:od;t.setTexture2D(e||r,s)}function I0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hd,s)}function L0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ud,s)}function D0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cd,s)}function U0(i){switch(i){case 5126:return m0;case 35664:return g0;case 35665:return x0;case 35666:return y0;case 35674:return _0;case 35675:return v0;case 35676:return M0;case 5124:case 35670:return b0;case 35667:case 35671:return S0;case 35668:case 35672:return E0;case 35669:case 35673:return T0;case 5125:return w0;case 36294:return A0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return D0}}function N0(i,e){i.uniform1fv(this.addr,e)}function O0(i,e){let t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function F0(i,e){let t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function B0(i,e){let t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function k0(i,e){let t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function H0(i,e){let t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function z0(i,e){let t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function V0(i,e){i.uniform1iv(this.addr,e)}function G0(i,e){i.uniform2iv(this.addr,e)}function W0(i,e){i.uniform3iv(this.addr,e)}function X0(i,e){i.uniform4iv(this.addr,e)}function q0(i,e){i.uniform1uiv(this.addr,e)}function Y0(i,e){i.uniform2uiv(this.addr,e)}function $0(i,e){i.uniform3uiv(this.addr,e)}function K0(i,e){i.uniform4uiv(this.addr,e)}function Z0(i,e,t){let n=this.cache,s=e.length,r=wo(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||od,r[a])}function J0(i,e,t){let n=this.cache,s=e.length,r=wo(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hd,r[a])}function j0(i,e,t){let n=this.cache,s=e.length,r=wo(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ud,r[a])}function Q0(i,e,t){let n=this.cache,s=e.length,r=wo(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||cd,r[a])}function ex(i){switch(i){case 5126:return N0;case 35664:return O0;case 35665:return F0;case 35666:return B0;case 35674:return k0;case 35675:return H0;case 35676:return z0;case 5124:case 35670:return V0;case 35667:case 35671:return G0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return Y0;case 36295:return $0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return Q0}}var Hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=U0(t.type)}},zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ex(t.type)}},Vl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},bl=/(\w+)(\])?(\[|\.)?/g;function Mu(i,e){i.seq.push(e),i.map[e.id]=e}function tx(i,e,t){let n=i.name,s=n.length;for(bl.lastIndex=0;;){let r=bl.exec(n),a=bl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mu(t,c===void 0?new Hl(o,i,e):new zl(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Vl(o),Mu(t,p)),t=p}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);tx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function bu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var nx=37297,ix=0;function sx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function rx(i){let e=sn.getPrimaries(sn.workingColorSpace),t=sn.getPrimaries(i),n;switch(e===t?n="":e===$a&&t===Ya?n="LinearDisplayP3ToLinearSRGB":e===Ya&&t===$a&&(n="LinearSRGBToLinearDisplayP3"),i){case Xi:case To:return[n,"LinearTransferOETF"];case Vn:case bc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Su(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sx(i.getShaderSource(e),a)}else return s}function ax(i,e){let t=rx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ox(i,e){let t;switch(e){case Tf:t="Linear";break;case wf:t="Reinhard";break;case Af:t="OptimizedCineon";break;case Rf:t="ACESFilmic";break;case Pf:t="AgX";break;case Cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function cx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(cr).join(`
`)}function hx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ux(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function cr(i){return i!==""}function Eu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(dx,px)}var fx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function px(i,e){let t=At[e];if(t===void 0){let n=fx.get(e);if(n!==void 0)t=At[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}var mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(mx,gx)}function gx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function yx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _x(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function vx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xu:e="ENVMAP_BLENDING_MULTIPLY";break;case Sf:e="ENVMAP_BLENDING_MIX";break;case Ef:e="ENVMAP_BLENDING_ADD";break}return e}function Mx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=xx(t),c=yx(t),h=_x(t),p=vx(t),f=Mx(t),u=t.isWebGL2?"":lx(t),y=cx(t),M=hx(r),x=s.createProgram(),m,b,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(cr).join(`
`),m.length>0&&(m+=`
`),b=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(cr).join(`
`),b.length>0&&(b+=`
`)):(m=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),b=[u,Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==us?"#define TONE_MAPPING":"",t.toneMapping!==us?At.tonemapping_pars_fragment:"",t.toneMapping!==us?ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,ax("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),a=Gl(a),a=Eu(a,t),a=Tu(a,t),o=Gl(o),o=Eu(o,t),o=Tu(o,t),a=wu(a),o=wu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let A=_+m+a,U=_+b+o,I=bu(s,s.VERTEX_SHADER,A),L=bu(s,s.FRAGMENT_SHADER,U);s.attachShader(x,I),s.attachShader(x,L),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function X(re){if(i.debug.checkShaderErrors){let Me=s.getProgramInfoLog(x).trim(),P=s.getShaderInfoLog(I).trim(),O=s.getShaderInfoLog(L).trim(),V=!0,se=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,L);else{let ee=Su(s,I,"vertex"),Z=Su(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Program Info Log: `+Me+`
`+ee+`
`+Z)}else Me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Me):(P===""||O==="")&&(se=!1);se&&(re.diagnostics={runnable:V,programLog:Me,vertexShader:{log:P,prefix:m},fragmentShader:{log:O,prefix:b}})}s.deleteShader(I),s.deleteShader(L),E=new fr(s,x),R=ux(s,x)}let E;this.getUniforms=function(){return E===void 0&&X(this),E};let R;this.getAttributes=function(){return R===void 0&&X(this),R};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(x,nx)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ix++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=L,this}var Sx=0,Wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xl(e),t.set(e,n)),n}},Xl=class{constructor(e){this.id=Sx++,this.code=e,this.usedTimes=0}};function Ex(i,e,t,n,s,r,a){let o=new $r,l=new Wl,c=[],h=s.isWebGL2,p=s.logarithmicDepthBuffer,f=s.vertexTextures,u=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return E===0?"uv":`uv${E}`}function x(E,R,q,re,Me){let P=re.fog,O=Me.geometry,V=E.isMeshStandardMaterial?re.environment:null,se=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),ee=se&&se.mapping===Eo?se.image.height:null,Z=y[E.type];E.precision!==null&&(u=s.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));let ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ce=ae!==void 0?ae.length:0,be=0;O.morphAttributes.position!==void 0&&(be=1),O.morphAttributes.normal!==void 0&&(be=2),O.morphAttributes.color!==void 0&&(be=3);let Y,me,Le,We;if(Z){let Dt=Li[Z];Y=Dt.vertexShader,me=Dt.fragmentShader}else Y=E.vertexShader,me=E.fragmentShader,l.update(E),Le=l.getVertexShaderID(E),We=l.getFragmentShaderID(E);let Xe=i.getRenderTarget(),ht=Me.isInstancedMesh===!0,ut=Me.isBatchedMesh===!0,je=!!E.map,de=!!E.matcap,$=!!se,Qe=!!E.aoMap,He=!!E.lightMap,Ze=!!E.bumpMap,Fe=!!E.normalMap,tt=!!E.displacementMap,yt=!!E.emissiveMap,C=!!E.metalnessMap,S=!!E.roughnessMap,J=E.anisotropy>0,xe=E.clearcoat>0,ve=E.iridescence>0,Te=E.sheen>0,$e=E.transmission>0,De=J&&!!E.anisotropyMap,Ue=xe&&!!E.clearcoatMap,at=xe&&!!E.clearcoatNormalMap,_t=xe&&!!E.clearcoatRoughnessMap,_e=ve&&!!E.iridescenceMap,$t=ve&&!!E.iridescenceThicknessMap,Tt=Te&&!!E.sheenColorMap,dt=Te&&!!E.sheenRoughnessMap,et=!!E.specularMap,ke=!!E.specularColorMap,ft=!!E.specularIntensityMap,Gt=$e&&!!E.transmissionMap,pn=$e&&!!E.thicknessMap,wt=!!E.gradientMap,Re=!!E.alphaMap,k=E.alphaTest>0,Pe=!!E.alphaHash,Ie=!!E.extensions,it=!!O.attributes.uv1,nt=!!O.attributes.uv2,Jt=!!O.attributes.uv3,Ut=us;return E.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(Ut=i.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:Y,fragmentShader:me,defines:E.defines,customVertexShaderID:Le,customFragmentShaderID:We,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:ut,instancing:ht,instancingColor:ht&&Me.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Xe===null?i.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:Xi,map:je,matcap:de,envMap:$,envMapMode:$&&se.mapping,envMapCubeUVHeight:ee,aoMap:Qe,lightMap:He,bumpMap:Ze,normalMap:Fe,displacementMap:f&&tt,emissiveMap:yt,normalMapObjectSpace:Fe&&E.normalMapType===Vf,normalMapTangentSpace:Fe&&E.normalMapType===td,metalnessMap:C,roughnessMap:S,anisotropy:J,anisotropyMap:De,clearcoat:xe,clearcoatMap:Ue,clearcoatNormalMap:at,clearcoatRoughnessMap:_t,iridescence:ve,iridescenceMap:_e,iridescenceThicknessMap:$t,sheen:Te,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:et,specularColorMap:ke,specularIntensityMap:ft,transmission:$e,transmissionMap:Gt,thicknessMap:pn,gradientMap:wt,opaque:E.transparent===!1&&E.blending===ur,alphaMap:Re,alphaTest:k,alphaHash:Pe,combine:E.combine,mapUv:je&&M(E.map.channel),aoMapUv:Qe&&M(E.aoMap.channel),lightMapUv:He&&M(E.lightMap.channel),bumpMapUv:Ze&&M(E.bumpMap.channel),normalMapUv:Fe&&M(E.normalMap.channel),displacementMapUv:tt&&M(E.displacementMap.channel),emissiveMapUv:yt&&M(E.emissiveMap.channel),metalnessMapUv:C&&M(E.metalnessMap.channel),roughnessMapUv:S&&M(E.roughnessMap.channel),anisotropyMapUv:De&&M(E.anisotropyMap.channel),clearcoatMapUv:Ue&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:at&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&M(E.sheenRoughnessMap.channel),specularMapUv:et&&M(E.specularMap.channel),specularColorMapUv:ke&&M(E.specularColorMap.channel),specularIntensityMapUv:ft&&M(E.specularIntensityMap.channel),transmissionMapUv:Gt&&M(E.transmissionMap.channel),thicknessMapUv:pn&&M(E.thicknessMap.channel),alphaMapUv:Re&&M(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Fe||J),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:it,vertexUv2s:nt,vertexUv3s:Jt,pointsUvs:Me.isPoints===!0&&!!O.attributes.uv&&(je||Re),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:Me.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:be,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,useLegacyLights:i._useLegacyLights,decodeVideoTexture:je&&E.map.isVideoTexture===!0&&sn.getTransfer(E.map.colorSpace)===fn,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yn,flipSided:E.side===si,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ie&&E.extensions.derivatives===!0,extensionFragDepth:Ie&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ie&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ie&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function m(E){let R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(let q in E.defines)R.push(q),R.push(E.defines[q]);return E.isRawShaderMaterial===!1&&(b(R,E),_(R,E),R.push(i.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function b(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function _(E,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function A(E){let R=y[E.type],q;if(R){let re=Li[R];q=fp.clone(re.uniforms)}else q=E.uniforms;return q}function U(E,R){let q;for(let re=0,Me=c.length;re<Me;re++){let P=c[re];if(P.cacheKey===R){q=P,++q.usedTimes;break}}return q===void 0&&(q=new bx(i,R,E,r),c.push(q)),q}function I(E){if(--E.usedTimes===0){let R=c.indexOf(E);c[R]=c[c.length-1],c.pop(),E.destroy()}}function L(E){l.remove(E)}function X(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:U,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:X}}function Tx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function wx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ru(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p,f,u,y,M,x){let m=i[e];return m===void 0?(m={id:p.id,object:p,geometry:f,material:u,groupOrder:y,renderOrder:p.renderOrder,z:M,group:x},i[e]=m):(m.id=p.id,m.object=p,m.geometry=f,m.material=u,m.groupOrder=y,m.renderOrder=p.renderOrder,m.z=M,m.group=x),e++,m}function o(p,f,u,y,M,x){let m=a(p,f,u,y,M,x);u.transmission>0?n.push(m):u.transparent===!0?s.push(m):t.push(m)}function l(p,f,u,y,M,x){let m=a(p,f,u,y,M,x);u.transmission>0?n.unshift(m):u.transparent===!0?s.unshift(m):t.unshift(m)}function c(p,f){t.length>1&&t.sort(p||wx),n.length>1&&n.sort(f||Ru),s.length>1&&s.sort(f||Ru)}function h(){for(let p=e,f=i.length;p<f;p++){let u=i[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Ax(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Cu,i.set(n,[a])):s>=r.length?(a=new Cu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new gt};break;case"SpotLight":t={position:new B,direction:new B,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Cx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Px=0;function Ix(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lx(i,e){let t=new Rx,n=Cx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new B);let r=new B,a=new Rn,o=new Rn;function l(h,p){let f=0,u=0,y=0;for(let re=0;re<9;re++)s.probe[re].set(0,0,0);let M=0,x=0,m=0,b=0,_=0,A=0,U=0,I=0,L=0,X=0,E=0;h.sort(Ix);let R=p===!0?Math.PI:1;for(let re=0,Me=h.length;re<Me;re++){let P=h[re],O=P.color,V=P.intensity,se=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*V*R,u+=O.g*V*R,y+=O.b*V*R;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(P.sh.coefficients[Z],V);E++}else if(P.isDirectionalLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*R),P.castShadow){let ae=P.shadow,ce=n.get(P);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,s.directionalShadow[M]=ce,s.directionalShadowMap[M]=ee,s.directionalShadowMatrix[M]=P.shadow.matrix,A++}s.directional[M]=Z,M++}else if(P.isSpotLight){let Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(O).multiplyScalar(V*R),Z.distance=se,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,s.spot[m]=Z;let ae=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,ae.updateMatrices(P),P.castShadow&&X++),s.spotLightMatrix[m]=ae.matrix,P.castShadow){let ce=n.get(P);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,s.spotShadow[m]=ce,s.spotShadowMap[m]=ee,I++}m++}else if(P.isRectAreaLight){let Z=t.get(P);Z.color.copy(O).multiplyScalar(V),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),s.rectArea[b]=Z,b++}else if(P.isPointLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*R),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let ae=P.shadow,ce=n.get(P);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,ce.shadowCameraNear=ae.camera.near,ce.shadowCameraFar=ae.camera.far,s.pointShadow[x]=ce,s.pointShadowMap[x]=ee,s.pointShadowMatrix[x]=P.shadow.matrix,U++}s.point[x]=Z,x++}else if(P.isHemisphereLight){let Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(V*R),Z.groundColor.copy(P.groundColor).multiplyScalar(V*R),s.hemi[_]=Z,_++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=u,s.ambient[2]=y;let q=s.hash;(q.directionalLength!==M||q.pointLength!==x||q.spotLength!==m||q.rectAreaLength!==b||q.hemiLength!==_||q.numDirectionalShadows!==A||q.numPointShadows!==U||q.numSpotShadows!==I||q.numSpotMaps!==L||q.numLightProbes!==E)&&(s.directional.length=M,s.spot.length=m,s.rectArea.length=b,s.point.length=x,s.hemi.length=_,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=I+L-X,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=E,q.directionalLength=M,q.pointLength=x,q.spotLength=m,q.rectAreaLength=b,q.hemiLength=_,q.numDirectionalShadows=A,q.numPointShadows=U,q.numSpotShadows=I,q.numSpotMaps=L,q.numLightProbes=E,s.version=Px++)}function c(h,p){let f=0,u=0,y=0,M=0,x=0,m=p.matrixWorldInverse;for(let b=0,_=h.length;b<_;b++){let A=h[b];if(A.isDirectionalLight){let U=s.directional[f];U.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(m),f++}else if(A.isSpotLight){let U=s.spot[y];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(m),U.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(m),y++}else if(A.isRectAreaLight){let U=s.rectArea[M];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(m),o.identity(),a.copy(A.matrixWorld),a.premultiply(m),o.extractRotation(a),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),M++}else if(A.isPointLight){let U=s.point[u];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(m),u++}else if(A.isHemisphereLight){let U=s.hemi[x];U.direction.setFromMatrixPosition(A.matrixWorld),U.direction.transformDirection(m),x++}}}return{setup:l,setupView:c,state:s}}function Pu(i,e){let t=new Lx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(p){n.push(p)}function o(p){s.push(p)}function l(p){t.setup(n,p)}function c(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Dx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Pu(i,e),t.set(r,[l])):a>=o.length?(l=new Pu(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var ql=class extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yl=class extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
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
}`;function Ox(i,e,t){let n=new Kr,s=new Oe,r=new Oe,a=new kn,o=new ql({depthPacking:zf}),l=new Yl,c={},h=t.maxTextureSize,p={[fs]:si,[si]:fs,[yn]:yn},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Ux,fragmentShader:Nx}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let y=new ai;y.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ye(y,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let m=this.type;this.render=function(I,L,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;let E=i.getRenderTarget(),R=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),re=i.state;re.setBlending(hs),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);let Me=m!==Gi&&this.type===Gi,P=m===Gi&&this.type!==Gi;for(let O=0,V=I.length;O<V;O++){let se=I[O],ee=se.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);let Z=ee.getFrameExtents();if(s.multiply(Z),r.copy(ee.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,ee.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,ee.mapSize.y=r.y)),ee.map===null||Me===!0||P===!0){let ce=this.type!==Gi?{minFilter:Qn,magFilter:Qn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new qi(s.x,s.y,ce),ee.map.texture.name=se.name+".shadowMap",ee.camera.updateProjectionMatrix()}i.setRenderTarget(ee.map),i.clear();let ae=ee.getViewportCount();for(let ce=0;ce<ae;ce++){let be=ee.getViewport(ce);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),re.viewport(a),ee.updateMatrices(se,ce),n=ee.getFrustum(),A(L,X,ee.camera,se,this.type)}ee.isPointLightShadow!==!0&&this.type===Gi&&b(ee,X),ee.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(E,R,q)};function b(I,L){let X=e.update(M);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new qi(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,X,f,M,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,X,u,M,null)}function _(I,L,X,E){let R=null,q=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(q!==void 0)R=q;else if(R=X.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let re=R.uuid,Me=L.uuid,P=c[re];P===void 0&&(P={},c[re]=P);let O=P[Me];O===void 0&&(O=R.clone(),P[Me]=O,L.addEventListener("dispose",U)),R=O}if(R.visible=L.visible,R.wireframe=L.wireframe,E===Gi?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:p[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let re=i.properties.get(R);re.light=X}return R}function A(I,L,X,E,R){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Gi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);let Me=e.update(I),P=I.material;if(Array.isArray(P)){let O=Me.groups;for(let V=0,se=O.length;V<se;V++){let ee=O[V],Z=P[ee.materialIndex];if(Z&&Z.visible){let ae=_(I,Z,E,R);I.onBeforeShadow(i,I,L,X,Me,ae,ee),i.renderBufferDirect(X,null,Me,ae,I,ee),I.onAfterShadow(i,I,L,X,Me,ae,ee)}}}else if(P.visible){let O=_(I,P,E,R);I.onBeforeShadow(i,I,L,X,Me,O,null),i.renderBufferDirect(X,null,Me,O,I,null),I.onAfterShadow(i,I,L,X,Me,O,null)}}let re=I.children;for(let Me=0,P=re.length;Me<P;Me++)A(re[Me],L,X,E,R)}function U(I){I.target.removeEventListener("dispose",U);for(let X in c){let E=c[X],R=I.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Fx(i,e,t){let n=t.isWebGL2;function s(){let k=!1,Pe=new kn,Ie=null,it=new kn(0,0,0,0);return{setMask:function(nt){Ie!==nt&&!k&&(i.colorMask(nt,nt,nt,nt),Ie=nt)},setLocked:function(nt){k=nt},setClear:function(nt,Jt,Ut,Pt,Dt){Dt===!0&&(nt*=Pt,Jt*=Pt,Ut*=Pt),Pe.set(nt,Jt,Ut,Pt),it.equals(Pe)===!1&&(i.clearColor(nt,Jt,Ut,Pt),it.copy(Pe))},reset:function(){k=!1,Ie=null,it.set(-1,0,0,0)}}}function r(){let k=!1,Pe=null,Ie=null,it=null;return{setTest:function(nt){nt?ut(i.DEPTH_TEST):je(i.DEPTH_TEST)},setMask:function(nt){Pe!==nt&&!k&&(i.depthMask(nt),Pe=nt)},setFunc:function(nt){if(Ie!==nt){switch(nt){case gf:i.depthFunc(i.NEVER);break;case xf:i.depthFunc(i.ALWAYS);break;case yf:i.depthFunc(i.LESS);break;case Ga:i.depthFunc(i.LEQUAL);break;case _f:i.depthFunc(i.EQUAL);break;case vf:i.depthFunc(i.GEQUAL);break;case Mf:i.depthFunc(i.GREATER);break;case bf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=nt}},setLocked:function(nt){k=nt},setClear:function(nt){it!==nt&&(i.clearDepth(nt),it=nt)},reset:function(){k=!1,Pe=null,Ie=null,it=null}}}function a(){let k=!1,Pe=null,Ie=null,it=null,nt=null,Jt=null,Ut=null,Pt=null,Dt=null;return{setTest:function(vt){k||(vt?ut(i.STENCIL_TEST):je(i.STENCIL_TEST))},setMask:function(vt){Pe!==vt&&!k&&(i.stencilMask(vt),Pe=vt)},setFunc:function(vt,Cn,Kn){(Ie!==vt||it!==Cn||nt!==Kn)&&(i.stencilFunc(vt,Cn,Kn),Ie=vt,it=Cn,nt=Kn)},setOp:function(vt,Cn,Kn){(Jt!==vt||Ut!==Cn||Pt!==Kn)&&(i.stencilOp(vt,Cn,Kn),Jt=vt,Ut=Cn,Pt=Kn)},setLocked:function(vt){k=vt},setClear:function(vt){Dt!==vt&&(i.clearStencil(vt),Dt=vt)},reset:function(){k=!1,Pe=null,Ie=null,it=null,nt=null,Jt=null,Ut=null,Pt=null,Dt=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,p=new WeakMap,f={},u={},y=new WeakMap,M=[],x=null,m=!1,b=null,_=null,A=null,U=null,I=null,L=null,X=null,E=new gt(0,0,0),R=0,q=!1,re=null,Me=null,P=null,O=null,V=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,Z=0,ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ee=Z>=1):ae.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ee=Z>=2);let ce=null,be={},Y=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Le=new kn().fromArray(Y),We=new kn().fromArray(me);function Xe(k,Pe,Ie,it){let nt=new Uint8Array(4),Jt=i.createTexture();i.bindTexture(k,Jt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<Ie;Ut++)n&&(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)?i.texImage3D(Pe,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(Pe+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return Jt}let ht={};ht[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ut(i.DEPTH_TEST),l.setFunc(Ga),yt(!1),C(ch),ut(i.CULL_FACE),Fe(hs);function ut(k){f[k]!==!0&&(i.enable(k),f[k]=!0)}function je(k){f[k]!==!1&&(i.disable(k),f[k]=!1)}function de(k,Pe){return u[k]!==Pe?(i.bindFramebuffer(k,Pe),u[k]=Pe,n&&(k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Pe),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Pe)),!0):!1}function $(k,Pe){let Ie=M,it=!1;if(k)if(Ie=y.get(Pe),Ie===void 0&&(Ie=[],y.set(Pe,Ie)),k.isWebGLMultipleRenderTargets){let nt=k.texture;if(Ie.length!==nt.length||Ie[0]!==i.COLOR_ATTACHMENT0){for(let Jt=0,Ut=nt.length;Jt<Ut;Jt++)Ie[Jt]=i.COLOR_ATTACHMENT0+Jt;Ie.length=nt.length,it=!0}}else Ie[0]!==i.COLOR_ATTACHMENT0&&(Ie[0]=i.COLOR_ATTACHMENT0,it=!0);else Ie[0]!==i.BACK&&(Ie[0]=i.BACK,it=!0);it&&(t.isWebGL2?i.drawBuffers(Ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ie))}function Qe(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let He={[As]:i.FUNC_ADD,[ef]:i.FUNC_SUBTRACT,[tf]:i.FUNC_REVERSE_SUBTRACT};if(n)He[fh]=i.MIN,He[ph]=i.MAX;else{let k=e.get("EXT_blend_minmax");k!==null&&(He[fh]=k.MIN_EXT,He[ph]=k.MAX_EXT)}let Ze={[nf]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[Rl]:i.SRC_ALPHA,[uf]:i.SRC_ALPHA_SATURATE,[cf]:i.DST_COLOR,[of]:i.DST_ALPHA,[af]:i.ONE_MINUS_SRC_COLOR,[Cl]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[lf]:i.ONE_MINUS_DST_ALPHA,[df]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[mf]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(k,Pe,Ie,it,nt,Jt,Ut,Pt,Dt,vt){if(k===hs){m===!0&&(je(i.BLEND),m=!1);return}if(m===!1&&(ut(i.BLEND),m=!0),k!==Qd){if(k!==b||vt!==q){if((_!==As||I!==As)&&(i.blendEquation(i.FUNC_ADD),_=As,I=As),vt)switch(k){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hh:i.blendFunc(i.ONE,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}A=null,U=null,L=null,X=null,E.set(0,0,0),R=0,b=k,q=vt}return}nt=nt||Pe,Jt=Jt||Ie,Ut=Ut||it,(Pe!==_||nt!==I)&&(i.blendEquationSeparate(He[Pe],He[nt]),_=Pe,I=nt),(Ie!==A||it!==U||Jt!==L||Ut!==X)&&(i.blendFuncSeparate(Ze[Ie],Ze[it],Ze[Jt],Ze[Ut]),A=Ie,U=it,L=Jt,X=Ut),(Pt.equals(E)===!1||Dt!==R)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Dt),E.copy(Pt),R=Dt),b=k,q=!1}function tt(k,Pe){k.side===yn?je(i.CULL_FACE):ut(i.CULL_FACE);let Ie=k.side===si;Pe&&(Ie=!Ie),yt(Ie),k.blending===ur&&k.transparent===!1?Fe(hs):Fe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);let it=k.stencilWrite;c.setTest(it),it&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),J(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):je(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(k){re!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),re=k)}function C(k){k!==Jd?(ut(i.CULL_FACE),k!==Me&&(k===ch?i.cullFace(i.BACK):k===jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):je(i.CULL_FACE),Me=k}function S(k){k!==P&&(ee&&i.lineWidth(k),P=k)}function J(k,Pe,Ie){k?(ut(i.POLYGON_OFFSET_FILL),(O!==Pe||V!==Ie)&&(i.polygonOffset(Pe,Ie),O=Pe,V=Ie)):je(i.POLYGON_OFFSET_FILL)}function xe(k){k?ut(i.SCISSOR_TEST):je(i.SCISSOR_TEST)}function ve(k){k===void 0&&(k=i.TEXTURE0+se-1),ce!==k&&(i.activeTexture(k),ce=k)}function Te(k,Pe,Ie){Ie===void 0&&(ce===null?Ie=i.TEXTURE0+se-1:Ie=ce);let it=be[Ie];it===void 0&&(it={type:void 0,texture:void 0},be[Ie]=it),(it.type!==k||it.texture!==Pe)&&(ce!==Ie&&(i.activeTexture(Ie),ce=Ie),i.bindTexture(k,Pe||ht[k]),it.type=k,it.texture=Pe)}function $e(){let k=be[ce];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function De(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(k){Le.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Le.copy(k))}function Gt(k){We.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),We.copy(k))}function pn(k,Pe){let Ie=p.get(Pe);Ie===void 0&&(Ie=new WeakMap,p.set(Pe,Ie));let it=Ie.get(k);it===void 0&&(it=i.getUniformBlockIndex(Pe,k.name),Ie.set(k,it))}function wt(k,Pe){let it=p.get(Pe).get(k);h.get(Pe)!==it&&(i.uniformBlockBinding(Pe,it,k.__bindingPointIndex),h.set(Pe,it))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ce=null,be={},u={},y=new WeakMap,M=[],x=null,m=!1,b=null,_=null,A=null,U=null,I=null,L=null,X=null,E=new gt(0,0,0),R=0,q=!1,re=null,Me=null,P=null,O=null,V=null,Le.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ut,disable:je,bindFramebuffer:de,drawBuffers:$,useProgram:Qe,setBlending:Fe,setMaterial:tt,setFlipSided:yt,setCullFace:C,setLineWidth:S,setPolygonOffset:J,setScissorTest:xe,activeTexture:ve,bindTexture:Te,unbindTexture:$e,compressedTexImage2D:De,compressedTexImage3D:Ue,texImage2D:et,texImage3D:ke,updateUBOMapping:pn,uniformBlockBinding:wt,texStorage2D:Tt,texStorage3D:dt,texSubImage2D:at,texSubImage3D:_t,compressedTexSubImage2D:_e,compressedTexSubImage3D:$t,scissor:ft,viewport:Gt,reset:Re}}function Bx(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,p,f=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,S){return u?new OffscreenCanvas(C,S):Za("canvas")}function M(C,S,J,xe){let ve=1;if((C.width>xe||C.height>xe)&&(ve=xe/Math.max(C.width,C.height)),ve<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Te=S?Nl:Math.floor,$e=Te(ve*C.width),De=Te(ve*C.height);p===void 0&&(p=y($e,De));let Ue=J?y($e,De):p;return Ue.width=$e,Ue.height=De,Ue.getContext("2d").drawImage(C,0,0,$e,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+$e+"x"+De+")."),Ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return Yh(C.width)&&Yh(C.height)}function m(C){return o?!1:C.wrapS!==Ti||C.wrapT!==Ti||C.minFilter!==Qn&&C.minFilter!==pi}function b(C,S){return C.generateMipmaps&&S&&C.minFilter!==Qn&&C.minFilter!==pi}function _(C){i.generateMipmap(C)}function A(C,S,J,xe,ve=!1){if(o===!1)return S;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Te=S;if(S===i.RED&&(J===i.FLOAT&&(Te=i.R32F),J===i.HALF_FLOAT&&(Te=i.R16F),J===i.UNSIGNED_BYTE&&(Te=i.R8)),S===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(Te=i.R8UI),J===i.UNSIGNED_SHORT&&(Te=i.R16UI),J===i.UNSIGNED_INT&&(Te=i.R32UI),J===i.BYTE&&(Te=i.R8I),J===i.SHORT&&(Te=i.R16I),J===i.INT&&(Te=i.R32I)),S===i.RG&&(J===i.FLOAT&&(Te=i.RG32F),J===i.HALF_FLOAT&&(Te=i.RG16F),J===i.UNSIGNED_BYTE&&(Te=i.RG8)),S===i.RGBA){let $e=ve?qa:sn.getTransfer(xe);J===i.FLOAT&&(Te=i.RGBA32F),J===i.HALF_FLOAT&&(Te=i.RGBA16F),J===i.UNSIGNED_BYTE&&(Te=$e===fn?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(Te=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(Te=i.RGB5_A1)}return(Te===i.R16F||Te===i.R32F||Te===i.RG16F||Te===i.RG32F||Te===i.RGBA16F||Te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function U(C,S,J){return b(C,J)===!0||C.isFramebufferTexture&&C.minFilter!==Qn&&C.minFilter!==pi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function I(C){return C===Qn||C===mh||C===qo?i.NEAREST:i.LINEAR}function L(C){let S=C.target;S.removeEventListener("dispose",L),E(S),S.isVideoTexture&&h.delete(S)}function X(C){let S=C.target;S.removeEventListener("dispose",X),q(S)}function E(C){let S=n.get(C);if(S.__webglInit===void 0)return;let J=C.source,xe=f.get(J);if(xe){let ve=xe[S.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&R(C),Object.keys(xe).length===0&&f.delete(J)}n.remove(C)}function R(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let J=C.source,xe=f.get(J);delete xe[S.__cacheKey],a.memory.textures--}function q(C){let S=C.texture,J=n.get(C),xe=n.get(S);if(xe.__webglTexture!==void 0&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(J.__webglFramebuffer[ve]))for(let Te=0;Te<J.__webglFramebuffer[ve].length;Te++)i.deleteFramebuffer(J.__webglFramebuffer[ve][Te]);else i.deleteFramebuffer(J.__webglFramebuffer[ve]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[ve])}else{if(Array.isArray(J.__webglFramebuffer))for(let ve=0;ve<J.__webglFramebuffer.length;ve++)i.deleteFramebuffer(J.__webglFramebuffer[ve]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ve=0;ve<J.__webglColorRenderbuffer.length;ve++)J.__webglColorRenderbuffer[ve]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[ve]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ve=0,Te=S.length;ve<Te;ve++){let $e=n.get(S[ve]);$e.__webglTexture&&(i.deleteTexture($e.__webglTexture),a.memory.textures--),n.remove(S[ve])}n.remove(S),n.remove(C)}let re=0;function Me(){re=0}function P(){let C=re;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),re+=1,C}function O(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function V(C,S){let J=n.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){let xe=C.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(J,C,S);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+S)}function se(C,S){let J=n.get(C);if(C.version>0&&J.__version!==C.version){Le(J,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+S)}function ee(C,S){let J=n.get(C);if(C.version>0&&J.__version!==C.version){Le(J,C,S);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+S)}function Z(C,S){let J=n.get(C);if(C.version>0&&J.__version!==C.version){We(J,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+S)}let ae={[Wr]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Ll]:i.MIRRORED_REPEAT},ce={[Qn]:i.NEAREST,[mh]:i.NEAREST_MIPMAP_NEAREST,[qo]:i.NEAREST_MIPMAP_LINEAR,[pi]:i.LINEAR,[If]:i.LINEAR_MIPMAP_NEAREST,[Xr]:i.LINEAR_MIPMAP_LINEAR},be={[Gf]:i.NEVER,[Kf]:i.ALWAYS,[Wf]:i.LESS,[nd]:i.LEQUAL,[Xf]:i.EQUAL,[$f]:i.GEQUAL,[qf]:i.GREATER,[Yf]:i.NOTEQUAL};function Y(C,S,J){if(J?(i.texParameteri(C,i.TEXTURE_WRAP_S,ae[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ae[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ae[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ce[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ce[S.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Ti||S.wrapT!==Ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,I(S.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,I(S.minFilter)),S.minFilter!==Qn&&S.minFilter!==pi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Qn||S.minFilter!==qo&&S.minFilter!==Xr||S.type===cs&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===qr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(C,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function me(C,S){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",L));let xe=S.source,ve=f.get(xe);ve===void 0&&(ve={},f.set(xe,ve));let Te=O(S);if(Te!==C.__cacheKey){ve[Te]===void 0&&(ve[Te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ve[Te].usedTimes++;let $e=ve[C.__cacheKey];$e!==void 0&&(ve[C.__cacheKey].usedTimes--,$e.usedTimes===0&&R(S)),C.__cacheKey=Te,C.__webglTexture=ve[Te].texture}return J}function Le(C,S,J){let xe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(xe=i.TEXTURE_3D);let ve=me(C,S),Te=S.source;t.bindTexture(xe,C.__webglTexture,i.TEXTURE0+J);let $e=n.get(Te);if(Te.version!==$e.__version||ve===!0){t.activeTexture(i.TEXTURE0+J);let De=sn.getPrimaries(sn.workingColorSpace),Ue=S.colorSpace===mi?null:sn.getPrimaries(S.colorSpace),at=S.colorSpace===mi||De===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let _t=m(S)&&x(S.image)===!1,_e=M(S.image,_t,!1,s.maxTextureSize);_e=yt(S,_e);let $t=x(_e)||o,Tt=r.convert(S.format,S.colorSpace),dt=r.convert(S.type),et=A(S.internalFormat,Tt,dt,S.colorSpace,S.isVideoTexture);Y(xe,S,$t);let ke,ft=S.mipmaps,Gt=o&&S.isVideoTexture!==!0&&et!==Qu,pn=$e.__version===void 0||ve===!0,wt=U(S,_e,$t);if(S.isDepthTexture)et=i.DEPTH_COMPONENT,o?S.type===cs?et=i.DEPTH_COMPONENT32F:S.type===ls?et=i.DEPTH_COMPONENT24:S.type===Cs?et=i.DEPTH24_STENCIL8:et=i.DEPTH_COMPONENT16:S.type===cs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ps&&et===i.DEPTH_COMPONENT&&S.type!==Mc&&S.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ls,dt=r.convert(S.type)),S.format===gr&&et===i.DEPTH_COMPONENT&&(et=i.DEPTH_STENCIL,S.type!==Cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Cs,dt=r.convert(S.type))),pn&&(Gt?t.texStorage2D(i.TEXTURE_2D,1,et,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,et,_e.width,_e.height,0,Tt,dt,null));else if(S.isDataTexture)if(ft.length>0&&$t){Gt&&pn&&t.texStorage2D(i.TEXTURE_2D,wt,et,ft[0].width,ft[0].height);for(let Re=0,k=ft.length;Re<k;Re++)ke=ft[Re],Gt?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,ke.width,ke.height,Tt,dt,ke.data):t.texImage2D(i.TEXTURE_2D,Re,et,ke.width,ke.height,0,Tt,dt,ke.data);S.generateMipmaps=!1}else Gt?(pn&&t.texStorage2D(i.TEXTURE_2D,wt,et,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Tt,dt,_e.data)):t.texImage2D(i.TEXTURE_2D,0,et,_e.width,_e.height,0,Tt,dt,_e.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Gt&&pn&&t.texStorage3D(i.TEXTURE_2D_ARRAY,wt,et,ft[0].width,ft[0].height,_e.depth);for(let Re=0,k=ft.length;Re<k;Re++)ke=ft[Re],S.format!==wi?Tt!==null?Gt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,ke.width,ke.height,_e.depth,Tt,ke.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Re,et,ke.width,ke.height,_e.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,ke.width,ke.height,_e.depth,Tt,dt,ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Re,et,ke.width,ke.height,_e.depth,0,Tt,dt,ke.data)}else{Gt&&pn&&t.texStorage2D(i.TEXTURE_2D,wt,et,ft[0].width,ft[0].height);for(let Re=0,k=ft.length;Re<k;Re++)ke=ft[Re],S.format!==wi?Tt!==null?Gt?t.compressedTexSubImage2D(i.TEXTURE_2D,Re,0,0,ke.width,ke.height,Tt,ke.data):t.compressedTexImage2D(i.TEXTURE_2D,Re,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,ke.width,ke.height,Tt,dt,ke.data):t.texImage2D(i.TEXTURE_2D,Re,et,ke.width,ke.height,0,Tt,dt,ke.data)}else if(S.isDataArrayTexture)Gt?(pn&&t.texStorage3D(i.TEXTURE_2D_ARRAY,wt,et,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Tt,dt,_e.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,et,_e.width,_e.height,_e.depth,0,Tt,dt,_e.data);else if(S.isData3DTexture)Gt?(pn&&t.texStorage3D(i.TEXTURE_3D,wt,et,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Tt,dt,_e.data)):t.texImage3D(i.TEXTURE_3D,0,et,_e.width,_e.height,_e.depth,0,Tt,dt,_e.data);else if(S.isFramebufferTexture){if(pn)if(Gt)t.texStorage2D(i.TEXTURE_2D,wt,et,_e.width,_e.height);else{let Re=_e.width,k=_e.height;for(let Pe=0;Pe<wt;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,et,Re,k,0,Tt,dt,null),Re>>=1,k>>=1}}else if(ft.length>0&&$t){Gt&&pn&&t.texStorage2D(i.TEXTURE_2D,wt,et,ft[0].width,ft[0].height);for(let Re=0,k=ft.length;Re<k;Re++)ke=ft[Re],Gt?t.texSubImage2D(i.TEXTURE_2D,Re,0,0,Tt,dt,ke):t.texImage2D(i.TEXTURE_2D,Re,et,Tt,dt,ke);S.generateMipmaps=!1}else Gt?(pn&&t.texStorage2D(i.TEXTURE_2D,wt,et,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,dt,_e)):t.texImage2D(i.TEXTURE_2D,0,et,Tt,dt,_e);b(S,$t)&&_(xe),$e.__version=Te.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function We(C,S,J){if(S.image.length!==6)return;let xe=me(C,S),ve=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+J);let Te=n.get(ve);if(ve.version!==Te.__version||xe===!0){t.activeTexture(i.TEXTURE0+J);let $e=sn.getPrimaries(sn.workingColorSpace),De=S.colorSpace===mi?null:sn.getPrimaries(S.colorSpace),Ue=S.colorSpace===mi||$e===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let at=S.isCompressedTexture||S.image[0].isCompressedTexture,_t=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let Re=0;Re<6;Re++)!at&&!_t?_e[Re]=M(S.image[Re],!1,!0,s.maxCubemapSize):_e[Re]=_t?S.image[Re].image:S.image[Re],_e[Re]=yt(S,_e[Re]);let $t=_e[0],Tt=x($t)||o,dt=r.convert(S.format,S.colorSpace),et=r.convert(S.type),ke=A(S.internalFormat,dt,et,S.colorSpace),ft=o&&S.isVideoTexture!==!0,Gt=Te.__version===void 0||xe===!0,pn=U(S,$t,Tt);Y(i.TEXTURE_CUBE_MAP,S,Tt);let wt;if(at){ft&&Gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pn,ke,$t.width,$t.height);for(let Re=0;Re<6;Re++){wt=_e[Re].mipmaps;for(let k=0;k<wt.length;k++){let Pe=wt[k];S.format!==wi?dt!==null?ft?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,k,0,0,Pe.width,Pe.height,dt,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,k,ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,k,0,0,Pe.width,Pe.height,dt,et,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,k,ke,Pe.width,Pe.height,0,dt,et,Pe.data)}}}else{wt=S.mipmaps,ft&&Gt&&(wt.length>0&&pn++,t.texStorage2D(i.TEXTURE_CUBE_MAP,pn,ke,_e[0].width,_e[0].height));for(let Re=0;Re<6;Re++)if(_t){ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,_e[Re].width,_e[Re].height,dt,et,_e[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ke,_e[Re].width,_e[Re].height,0,dt,et,_e[Re].data);for(let k=0;k<wt.length;k++){let Ie=wt[k].image[Re].image;ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,k+1,0,0,Ie.width,Ie.height,dt,et,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,k+1,ke,Ie.width,Ie.height,0,dt,et,Ie.data)}}else{ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,dt,et,_e[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ke,dt,et,_e[Re]);for(let k=0;k<wt.length;k++){let Pe=wt[k];ft?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,k+1,0,0,dt,et,Pe.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,k+1,ke,dt,et,Pe.image[Re])}}}b(S,Tt)&&_(i.TEXTURE_CUBE_MAP),Te.__version=ve.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Xe(C,S,J,xe,ve,Te){let $e=r.convert(J.format,J.colorSpace),De=r.convert(J.type),Ue=A(J.internalFormat,$e,De,J.colorSpace);if(!n.get(S).__hasExternalTextures){let _t=Math.max(1,S.width>>Te),_e=Math.max(1,S.height>>Te);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,Te,Ue,_t,_e,S.depth,0,$e,De,null):t.texImage2D(ve,Te,Ue,_t,_e,0,$e,De,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Fe(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ve,n.get(J).__webglTexture,0,Ze(S)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,ve,n.get(J).__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,S,J){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let xe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(J||Fe(S)){let ve=S.depthTexture;ve&&ve.isDepthTexture&&(ve.type===cs?xe=i.DEPTH_COMPONENT32F:ve.type===ls&&(xe=i.DEPTH_COMPONENT24));let Te=Ze(S);Fe(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,xe,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,xe,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){let xe=Ze(S);J&&Fe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,S.width,S.height):Fe(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let xe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ve=0;ve<xe.length;ve++){let Te=xe[ve],$e=r.convert(Te.format,Te.colorSpace),De=r.convert(Te.type),Ue=A(Te.internalFormat,$e,De,Te.colorSpace),at=Ze(S);J&&Fe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Ue,S.width,S.height):Fe(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Ue,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);let xe=n.get(S.depthTexture).__webglTexture,ve=Ze(S);if(S.depthTexture.format===Ps)Fe(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(S.depthTexture.format===gr)Fe(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function je(C){let S=n.get(C),J=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ut(S.__webglFramebuffer,C)}else if(J){S.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[xe]),S.__webglDepthbuffer[xe]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[xe],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(C,S,J){let xe=n.get(C);S!==void 0&&Xe(xe.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&je(C)}function $(C){let S=C.texture,J=n.get(C),xe=n.get(S);C.addEventListener("dispose",X),C.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=S.version,a.memory.textures++);let ve=C.isWebGLCubeRenderTarget===!0,Te=C.isWebGLMultipleRenderTargets===!0,$e=x(C)||o;if(ve){J.__webglFramebuffer=[];for(let De=0;De<6;De++)if(o&&S.mipmaps&&S.mipmaps.length>0){J.__webglFramebuffer[De]=[];for(let Ue=0;Ue<S.mipmaps.length;Ue++)J.__webglFramebuffer[De][Ue]=i.createFramebuffer()}else J.__webglFramebuffer[De]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){J.__webglFramebuffer=[];for(let De=0;De<S.mipmaps.length;De++)J.__webglFramebuffer[De]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Te)if(s.drawBuffers){let De=C.texture;for(let Ue=0,at=De.length;Ue<at;Ue++){let _t=n.get(De[Ue]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Fe(C)===!1){let De=Te?S:[S];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ue=0;Ue<De.length;Ue++){let at=De[Ue];J.__webglColorRenderbuffer[Ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Ue]);let _t=r.convert(at.format,at.colorSpace),_e=r.convert(at.type),$t=A(at.internalFormat,_t,_e,at.colorSpace,C.isXRRenderTarget===!0),Tt=Ze(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,$t,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,J.__webglColorRenderbuffer[Ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(J.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),Y(i.TEXTURE_CUBE_MAP,S,$e);for(let De=0;De<6;De++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Ue=0;Ue<S.mipmaps.length;Ue++)Xe(J.__webglFramebuffer[De][Ue],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ue);else Xe(J.__webglFramebuffer[De],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);b(S,$e)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){let De=C.texture;for(let Ue=0,at=De.length;Ue<at;Ue++){let _t=De[Ue],_e=n.get(_t);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),Y(i.TEXTURE_2D,_t,$e),Xe(J.__webglFramebuffer,C,_t,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,0),b(_t,$e)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let De=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?De=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(De,xe.__webglTexture),Y(De,S,$e),o&&S.mipmaps&&S.mipmaps.length>0)for(let Ue=0;Ue<S.mipmaps.length;Ue++)Xe(J.__webglFramebuffer[Ue],C,S,i.COLOR_ATTACHMENT0,De,Ue);else Xe(J.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,De,0);b(S,$e)&&_(De),t.unbindTexture()}C.depthBuffer&&je(C)}function Qe(C){let S=x(C)||o,J=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let xe=0,ve=J.length;xe<ve;xe++){let Te=J[xe];if(b(Te,S)){let $e=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,De=n.get(Te).__webglTexture;t.bindTexture($e,De),_($e),t.unbindTexture()}}}function He(C){if(o&&C.samples>0&&Fe(C)===!1){let S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],J=C.width,xe=C.height,ve=i.COLOR_BUFFER_BIT,Te=[],$e=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(C),Ue=C.isWebGLMultipleRenderTargets===!0;if(Ue)for(let at=0;at<S.length;at++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let at=0;at<S.length;at++){Te.push(i.COLOR_ATTACHMENT0+at),C.depthBuffer&&Te.push($e);let _t=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(_t===!1&&(C.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),Ue&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[at]),_t===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[$e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[$e])),Ue){let _e=n.get(S[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,J,xe,0,0,J,xe,ve,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ue)for(let at=0;at<S.length;at++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,De.__webglColorRenderbuffer[at]);let _t=n.get(S[at]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,_t,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function Ze(C){return Math.min(s.maxSamples,C.samples)}function Fe(C){let S=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function tt(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function yt(C,S){let J=C.colorSpace,xe=C.format,ve=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Dl||J!==Xi&&J!==mi&&(sn.getTransfer(J)===fn?o===!1?e.has("EXT_sRGB")===!0&&xe===wi?(C.format=Dl,C.minFilter=pi,C.generateMipmaps=!1):S=Ja.sRGBToLinear(S):(xe!==wi||ve!==ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),S}this.allocateTextureUnit=P,this.resetTextureUnits=Me,this.setTexture2D=V,this.setTexture2DArray=se,this.setTexture3D=ee,this.setTextureCube=Z,this.rebindTextures=de,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=Fe}function kx(i,e,t){let n=t.isWebGL2;function s(r,a=mi){let o,l=sn.getTransfer(a);if(r===ds)return i.UNSIGNED_BYTE;if(r===$u)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ku)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Lf)return i.BYTE;if(r===Df)return i.SHORT;if(r===Mc)return i.UNSIGNED_SHORT;if(r===Yu)return i.INT;if(r===ls)return i.UNSIGNED_INT;if(r===cs)return i.FLOAT;if(r===qr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Uf)return i.ALPHA;if(r===wi)return i.RGBA;if(r===Nf)return i.LUMINANCE;if(r===Of)return i.LUMINANCE_ALPHA;if(r===Ps)return i.DEPTH_COMPONENT;if(r===gr)return i.DEPTH_STENCIL;if(r===Dl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ff)return i.RED;if(r===Zu)return i.RED_INTEGER;if(r===Bf)return i.RG;if(r===Ju)return i.RG_INTEGER;if(r===ju)return i.RGBA_INTEGER;if(r===Yo||r===$o||r===Ko||r===Zo)if(l===fn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$o)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ko)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gh||r===xh||r===yh||r===_h)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===gh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_h)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===vh||r===Mh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===vh)return l===fn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Mh)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bh||r===Sh||r===Eh||r===Th||r===wh||r===Ah||r===Rh||r===Ch||r===Ph||r===Ih||r===Lh||r===Dh||r===Uh||r===Nh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===bh)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sh)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eh)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Th)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wh)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ah)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rh)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ch)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ph)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ih)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lh)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dh)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uh)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nh)return l===fn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jo||r===Oh||r===Fh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Jo)return l===fn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Oh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kf||r===Bh||r===kh||r===Hh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Jo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Bh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Cs?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var $l=class extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ui=class extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hx={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let x=t.getJointPose(M,n),m=this._getHandJoint(c,M);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),u=.02,y=.005;c.inputState.pinching&&f>u+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kl=class extends ps{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,u=null,y=null,M=t.getContextAttributes(),x=null,m=null,b=[],_=[],A=new Oe,U=null,I=new ei;I.layers.enable(1),I.viewport=new kn;let L=new ei;L.layers.enable(2),L.viewport=new kn;let X=[I,L],E=new $l;E.layers.enable(1),E.layers.enable(2);let R=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let me=b[Y];return me===void 0&&(me=new Hr,b[Y]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Y){let me=b[Y];return me===void 0&&(me=new Hr,b[Y]=me),me.getGripSpace()},this.getHand=function(Y){let me=b[Y];return me===void 0&&(me=new Hr,b[Y]=me),me.getHandSpace()};function re(Y){let me=_.indexOf(Y.inputSource);if(me===-1)return;let Le=b[me];Le!==void 0&&(Le.update(Y.inputSource,Y.frame,c||a),Le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Me(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",Me),s.removeEventListener("inputsourceschange",P);for(let Y=0;Y<b.length;Y++){let me=_[Y];me!==null&&(_[Y]=null,b[Y].disconnect(me))}R=null,q=null,e.setRenderTarget(x),u=null,f=null,p=null,s=null,m=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",Me),s.addEventListener("inputsourceschange",P),M.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let me={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),m=new qi(u.framebufferWidth,u.framebufferHeight,{format:wi,type:ds,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let me=null,Le=null,We=null;M.depth&&(We=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?gr:Ps,Le=M.stencil?Cs:ls);let Xe={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};p=new XRWebGLBinding(s,t),f=p.createProjectionLayer(Xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new qi(f.textureWidth,f.textureHeight,{format:wi,type:ds,depthTexture:new oo(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});let ht=e.properties.get(m);ht.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(Y){for(let me=0;me<Y.removed.length;me++){let Le=Y.removed[me],We=_.indexOf(Le);We>=0&&(_[We]=null,b[We].disconnect(Le))}for(let me=0;me<Y.added.length;me++){let Le=Y.added[me],We=_.indexOf(Le);if(We===-1){for(let ht=0;ht<b.length;ht++)if(ht>=_.length){_.push(Le),We=ht;break}else if(_[ht]===null){_[ht]=Le,We=ht;break}if(We===-1)break}let Xe=b[We];Xe&&Xe.connect(Le)}}let O=new B,V=new B;function se(Y,me,Le){O.setFromMatrixPosition(me.matrixWorld),V.setFromMatrixPosition(Le.matrixWorld);let We=O.distanceTo(V),Xe=me.projectionMatrix.elements,ht=Le.projectionMatrix.elements,ut=Xe[14]/(Xe[10]-1),je=Xe[14]/(Xe[10]+1),de=(Xe[9]+1)/Xe[5],$=(Xe[9]-1)/Xe[5],Qe=(Xe[8]-1)/Xe[0],He=(ht[8]+1)/ht[0],Ze=ut*Qe,Fe=ut*He,tt=We/(-Qe+He),yt=tt*-Qe;me.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(yt),Y.translateZ(tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let C=ut+tt,S=je+tt,J=Ze-yt,xe=Fe+(We-yt),ve=de*je/S*C,Te=$*je/S*C;Y.projectionMatrix.makePerspective(J,xe,ve,Te,C,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ee(Y,me){me===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(me.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;E.near=L.near=I.near=Y.near,E.far=L.far=I.far=Y.far,(R!==E.near||q!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,q=E.far);let me=Y.parent,Le=E.cameras;ee(E,me);for(let We=0;We<Le.length;We++)ee(Le[We],me);Le.length===2?se(E,I,L):E.projectionMatrix.copy(I.projectionMatrix),Z(Y,E,me)};function Z(Y,me,Le){Le===null?Y.matrix.copy(me.matrixWorld):(Y.matrix.copy(Le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(me.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(me.projectionMatrix),Y.projectionMatrixInverse.copy(me.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ul*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)};let ae=null;function ce(Y,me){if(h=me.getViewerPose(c||a),y=me,h!==null){let Le=h.views;u!==null&&(e.setRenderTargetFramebuffer(m,u.framebuffer),e.setRenderTarget(m));let We=!1;Le.length!==E.cameras.length&&(E.cameras.length=0,We=!0);for(let Xe=0;Xe<Le.length;Xe++){let ht=Le[Xe],ut=null;if(u!==null)ut=u.getViewport(ht);else{let de=p.getViewSubImage(f,ht);ut=de.viewport,Xe===0&&(e.setRenderTargetTextures(m,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(m))}let je=X[Xe];je===void 0&&(je=new ei,je.layers.enable(Xe),je.viewport=new kn,X[Xe]=je),je.matrix.fromArray(ht.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ht.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ut.x,ut.y,ut.width,ut.height),Xe===0&&(E.matrix.copy(je.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),We===!0&&E.cameras.push(je)}}for(let Le=0;Le<b.length;Le++){let We=_[Le],Xe=b[Le];We!==null&&Xe!==void 0&&Xe.update(We,me,c||a)}ae&&ae(Y,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),y=null}let be=new ad;be.setAnimationLoop(ce),this.setAnimationLoop=function(Y){ae=Y},this.dispose=function(){}}};function zx(i,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,rd(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,b,_,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),p(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&u(x,m,A)):m.isMeshMatcapMaterial?(r(x,m),y(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),M(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&o(x,m)):m.isPointsMaterial?l(x,m,b,_):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===si&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===si&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let b=e.get(m).envMap;if(b&&(x.envMap.value=b,x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap){x.lightMap.value=m.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,x.lightMapTransform)}m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function o(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,b,_){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*b,x.scale.value=_*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function p(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),e.get(m).envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function u(x,m,b){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===si&&x.clearcoatNormalScale.value.negate())),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,m){m.matcap&&(x.matcap.value=m.matcap)}function M(x,m){let b=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,_){let A=_.program;n.uniformBlockBinding(b,A)}function c(b,_){let A=s[b.id];A===void 0&&(y(b),A=h(b),s[b.id]=A,b.addEventListener("dispose",x));let U=_.program;n.updateUBOMapping(b,U);let I=e.render.frame;r[b.id]!==I&&(f(b),r[b.id]=I)}function h(b){let _=p();b.__bindingPointIndex=_;let A=i.createBuffer(),U=b.__size,I=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,U,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,A),A}function p(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let _=s[b.id],A=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let I=0,L=A.length;I<L;I++){let X=Array.isArray(A[I])?A[I]:[A[I]];for(let E=0,R=X.length;E<R;E++){let q=X[E];if(u(q,I,E,U)===!0){let re=q.__offset,Me=Array.isArray(q.value)?q.value:[q.value],P=0;for(let O=0;O<Me.length;O++){let V=Me[O],se=M(V);typeof V=="number"||typeof V=="boolean"?(q.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,re+P,q.__data)):V.isMatrix3?(q.__data[0]=V.elements[0],q.__data[1]=V.elements[1],q.__data[2]=V.elements[2],q.__data[3]=0,q.__data[4]=V.elements[3],q.__data[5]=V.elements[4],q.__data[6]=V.elements[5],q.__data[7]=0,q.__data[8]=V.elements[6],q.__data[9]=V.elements[7],q.__data[10]=V.elements[8],q.__data[11]=0):(V.toArray(q.__data,P),P+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,re,q.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,_,A,U){let I=b.value,L=_+"_"+A;if(U[L]===void 0)return typeof I=="number"||typeof I=="boolean"?U[L]=I:U[L]=I.clone(),!0;{let X=U[L];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return U[L]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function y(b){let _=b.uniforms,A=0,U=16;for(let L=0,X=_.length;L<X;L++){let E=Array.isArray(_[L])?_[L]:[_[L]];for(let R=0,q=E.length;R<q;R++){let re=E[R],Me=Array.isArray(re.value)?re.value:[re.value];for(let P=0,O=Me.length;P<O;P++){let V=Me[P],se=M(V),ee=A%U;ee!==0&&U-ee<se.boundary&&(A+=U-ee),re.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=A,A+=se.storage}}}let I=A%U;return I>0&&(A+=U-I),b.__size=A,b.__cache={},this}function M(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function x(b){let _=b.target;_.removeEventListener("dispose",x);let A=a.indexOf(_.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Zr=class{constructor(e={}){let{canvas:t=Jf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let u=new Uint32Array(4),y=new Int32Array(4),M=null,x=null,m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this._useLegacyLights=!1,this.toneMapping=us,this.toneMappingExposure=1;let _=this,A=!1,U=0,I=0,L=null,X=-1,E=null,R=new kn,q=new kn,re=null,Me=new gt(0),P=0,O=t.width,V=t.height,se=1,ee=null,Z=null,ae=new kn(0,0,O,V),ce=new kn(0,0,O,V),be=!1,Y=new Kr,me=!1,Le=!1,We=null,Xe=new Rn,ht=new Oe,ut=new B,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return L===null?se:1}let $=n;function Qe(T,z){for(let j=0;j<T.length;j++){let ne=T[j],K=t.getContext(ne,z);if(K!==null)return K}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_c}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),$===null){let z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),$=Qe(z,T),$===null)throw Qe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let He,Ze,Fe,tt,yt,C,S,J,xe,ve,Te,$e,De,Ue,at,_t,_e,$t,Tt,dt,et,ke,ft,Gt;function pn(){He=new o0($),Ze=new t0($,He,e),He.init(Ze),ke=new kx($,He,Ze),Fe=new Fx($,He,Ze),tt=new h0($),yt=new Tx,C=new Bx($,He,Fe,yt,Ze,ke,tt),S=new i0(_),J=new a0(_),xe=new yp($,Ze),ft=new Qg($,He,xe,Ze),ve=new l0($,xe,tt,ft),Te=new p0($,ve,xe,tt),Tt=new f0($,Ze,C),_t=new n0(yt),$e=new Ex(_,S,J,He,Ze,ft,_t),De=new zx(_,yt),Ue=new Ax,at=new Dx(He,Ze),$t=new jg(_,S,J,Fe,Te,f,l),_e=new Ox(_,Te,Ze),Gt=new Vx($,tt,Ze,Fe),dt=new e0($,He,tt,Ze),et=new c0($,He,tt,Ze),tt.programs=$e.programs,_.capabilities=Ze,_.extensions=He,_.properties=yt,_.renderLists=Ue,_.shadowMap=_e,_.state=Fe,_.info=tt}pn();let wt=new Kl(_,$);this.xr=wt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let T=He.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=He.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(O,V,!1))},this.getSize=function(T){return T.set(O,V)},this.setSize=function(T,z,j=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,V=z,t.width=Math.floor(T*se),t.height=Math.floor(z*se),j===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(O*se,V*se).floor()},this.setDrawingBufferSize=function(T,z,j){O=T,V=z,se=j,t.width=Math.floor(T*j),t.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,z,j,ne){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,z,j,ne),Fe.viewport(R.copy(ae).multiplyScalar(se).floor())},this.getScissor=function(T){return T.copy(ce)},this.setScissor=function(T,z,j,ne){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,z,j,ne),Fe.scissor(q.copy(ce).multiplyScalar(se).floor())},this.getScissorTest=function(){return be},this.setScissorTest=function(T){Fe.setScissorTest(be=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(T=!0,z=!0,j=!0){let ne=0;if(T){let K=!1;if(L!==null){let Se=L.texture.format;K=Se===ju||Se===Ju||Se===Zu}if(K){let Se=L.texture.type,Ne=Se===ds||Se===ls||Se===Mc||Se===Cs||Se===$u||Se===Ku,Ke=$t.getClearColor(),Ve=$t.getClearAlpha(),Be=Ke.r,qe=Ke.g,st=Ke.b;Ne?(u[0]=Be,u[1]=qe,u[2]=st,u[3]=Ve,$.clearBufferuiv($.COLOR,0,u)):(y[0]=Be,y[1]=qe,y[2]=st,y[3]=Ve,$.clearBufferiv($.COLOR,0,y))}else ne|=$.COLOR_BUFFER_BIT}z&&(ne|=$.DEPTH_BUFFER_BIT),j&&(ne|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ue.dispose(),at.dispose(),yt.dispose(),S.dispose(),J.dispose(),Te.dispose(),ft.dispose(),Gt.dispose(),$e.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Dt),wt.removeEventListener("sessionend",vt),We&&(We.dispose(),We=null),Cn.stop()};function Re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=tt.autoReset,z=_e.enabled,j=_e.autoUpdate,ne=_e.needsUpdate,K=_e.type;pn(),tt.autoReset=T,_e.enabled=z,_e.autoUpdate=j,_e.needsUpdate=ne,_e.type=K}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ie(T){let z=T.target;z.removeEventListener("dispose",Ie),it(z)}function it(T){nt(T),yt.remove(T)}function nt(T){let z=yt.get(T).programs;z!==void 0&&(z.forEach(function(j){$e.releaseProgram(j)}),T.isShaderMaterial&&$e.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,j,ne,K,Se){z===null&&(z=je);let Ne=K.isMesh&&K.matrixWorld.determinant()<0,Ke=ji(T,z,j,ne,K);Fe.setMaterial(ne,Ne);let Ve=j.index,Be=1;if(ne.wireframe===!0){if(Ve=ve.getWireframeAttribute(j),Ve===void 0)return;Be=2}let qe=j.drawRange,st=j.attributes.position,kt=qe.start*Be,ln=(qe.start+qe.count)*Be;Se!==null&&(kt=Math.max(kt,Se.start*Be),ln=Math.min(ln,(Se.start+Se.count)*Be)),Ve!==null?(kt=Math.max(kt,0),ln=Math.min(ln,Ve.count)):st!=null&&(kt=Math.max(kt,0),ln=Math.min(ln,st.count));let Kt=ln-kt;if(Kt<0||Kt===1/0)return;ft.setup(K,ne,Ke,j,Ve);let Zn,Wt=dt;if(Ve!==null&&(Zn=xe.get(Ve),Wt=et,Wt.setIndex(Zn)),K.isMesh)ne.wireframe===!0?(Fe.setLineWidth(ne.wireframeLinewidth*de()),Wt.setMode($.LINES)):Wt.setMode($.TRIANGLES);else if(K.isLine){let bt=ne.linewidth;bt===void 0&&(bt=1),Fe.setLineWidth(bt*de()),K.isLineSegments?Wt.setMode($.LINES):K.isLineLoop?Wt.setMode($.LINE_LOOP):Wt.setMode($.LINE_STRIP)}else K.isPoints?Wt.setMode($.POINTS):K.isSprite&&Wt.setMode($.TRIANGLES);if(K.isBatchedMesh)Wt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Wt.renderInstances(kt,Kt,K.count);else if(j.isInstancedBufferGeometry){let bt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,un=Math.min(j.instanceCount,bt);Wt.renderInstances(kt,Kt,un)}else Wt.render(kt,Kt)};function Jt(T,z,j){T.transparent===!0&&T.side===yn&&T.forceSinglePass===!1?(T.side=si,T.needsUpdate=!0,yi(T,z,j),T.side=fs,T.needsUpdate=!0,yi(T,z,j),T.side=yn):yi(T,z,j)}this.compile=function(T,z,j=null){j===null&&(j=T),x=at.get(j),x.init(),b.push(x),j.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),T!==j&&T.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights(_._useLegacyLights);let ne=new Set;return T.traverse(function(K){let Se=K.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){let Ke=Se[Ne];Jt(Ke,j,K),ne.add(Ke)}else Jt(Se,j,K),ne.add(Se)}),b.pop(),x=null,ne},this.compileAsync=function(T,z,j=null){let ne=this.compile(T,z,j);return new Promise(K=>{function Se(){if(ne.forEach(function(Ne){yt.get(Ne).currentProgram.isReady()&&ne.delete(Ne)}),ne.size===0){K(T);return}setTimeout(Se,10)}He.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ut=null;function Pt(T){Ut&&Ut(T)}function Dt(){Cn.stop()}function vt(){Cn.start()}let Cn=new ad;Cn.setAnimationLoop(Pt),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(T){Ut=T,wt.setAnimationLoop(T),T===null?Cn.stop():Cn.start()},wt.addEventListener("sessionstart",Dt),wt.addEventListener("sessionend",vt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(z),z=wt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,z,L),x=at.get(T,b.length),x.init(),b.push(x),Xe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(Xe),Le=this.localClippingEnabled,me=_t.init(this.clippingPlanes,Le),M=Ue.get(T,m.length),M.init(),m.push(M),Kn(T,z,0,_.sortObjects),M.finish(),_.sortObjects===!0&&M.sort(ee,Z),this.info.render.frame++,me===!0&&_t.beginShadows();let j=x.state.shadowsArray;if(_e.render(j,T,z),me===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(M,T),x.setupLights(_._useLegacyLights),z.isArrayCamera){let ne=z.cameras;for(let K=0,Se=ne.length;K<Se;K++){let Ne=ne[K];Ci(M,T,Ne,Ne.viewport)}}else Ci(M,T,z);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(_,T,z),ft.resetDefaultState(),X=-1,E=null,b.pop(),b.length>0?x=b[b.length-1]:x=null,m.pop(),m.length>0?M=m[m.length-1]:M=null};function Kn(T,z,j,ne){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)x.pushLight(T),T.castShadow&&x.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){ne&&ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Xe);let Ne=Te.update(T),Ke=T.material;Ke.visible&&M.push(T,Ne,Ke,j,ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){let Ne=Te.update(T),Ke=T.material;if(ne&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ut.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ut.copy(Ne.boundingSphere.center)),ut.applyMatrix4(T.matrixWorld).applyMatrix4(Xe)),Array.isArray(Ke)){let Ve=Ne.groups;for(let Be=0,qe=Ve.length;Be<qe;Be++){let st=Ve[Be],kt=Ke[st.materialIndex];kt&&kt.visible&&M.push(T,Ne,kt,j,ut.z,st)}}else Ke.visible&&M.push(T,Ne,Ke,j,ut.z,null)}}let Se=T.children;for(let Ne=0,Ke=Se.length;Ne<Ke;Ne++)Kn(Se[Ne],z,j,ne)}function Ci(T,z,j,ne){let K=T.opaque,Se=T.transmissive,Ne=T.transparent;x.setupLightsView(j),me===!0&&_t.setGlobalState(_.clippingPlanes,j),Se.length>0&&aa(K,Se,z,j),ne&&Fe.viewport(R.copy(ne)),K.length>0&&Bs(K,z,j),Se.length>0&&Bs(Se,z,j),Ne.length>0&&Bs(Ne,z,j),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function aa(T,z,j,ne){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let Se=Ze.isWebGL2;We===null&&(We=new qi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?qr:ds,minFilter:Xr,samples:Se?4:0})),_.getDrawingBufferSize(ht),Se?We.setSize(ht.x,ht.y):We.setSize(Nl(ht.x),Nl(ht.y));let Ne=_.getRenderTarget();_.setRenderTarget(We),_.getClearColor(Me),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let Ke=_.toneMapping;_.toneMapping=us,Bs(T,j,ne),C.updateMultisampleRenderTarget(We),C.updateRenderTargetMipmap(We);let Ve=!1;for(let Be=0,qe=z.length;Be<qe;Be++){let st=z[Be],kt=st.object,ln=st.geometry,Kt=st.material,Zn=st.group;if(Kt.side===yn&&kt.layers.test(ne.layers)){let Wt=Kt.side;Kt.side=si,Kt.needsUpdate=!0,ks(kt,j,ne,ln,Kt,Zn),Kt.side=Wt,Kt.needsUpdate=!0,Ve=!0}}Ve===!0&&(C.updateMultisampleRenderTarget(We),C.updateRenderTargetMipmap(We)),_.setRenderTarget(Ne),_.setClearColor(Me,P),_.toneMapping=Ke}function Bs(T,z,j){let ne=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Se=T.length;K<Se;K++){let Ne=T[K],Ke=Ne.object,Ve=Ne.geometry,Be=ne===null?Ne.material:ne,qe=Ne.group;Ke.layers.test(j.layers)&&ks(Ke,z,j,Ve,Be,qe)}}function ks(T,z,j,ne,K,Se){T.onBeforeRender(_,z,j,ne,K,Se),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(_,z,j,ne,T,Se),K.transparent===!0&&K.side===yn&&K.forceSinglePass===!1?(K.side=si,K.needsUpdate=!0,_.renderBufferDirect(j,z,ne,K,T,Se),K.side=fs,K.needsUpdate=!0,_.renderBufferDirect(j,z,ne,K,T,Se),K.side=yn):_.renderBufferDirect(j,z,ne,K,T,Se),T.onAfterRender(_,z,j,ne,K,Se)}function yi(T,z,j){z.isScene!==!0&&(z=je);let ne=yt.get(T),K=x.state.lights,Se=x.state.shadowsArray,Ne=K.state.version,Ke=$e.getParameters(T,K.state,Se,z,j),Ve=$e.getProgramCacheKey(Ke),Be=ne.programs;ne.environment=T.isMeshStandardMaterial?z.environment:null,ne.fog=z.fog,ne.envMap=(T.isMeshStandardMaterial?J:S).get(T.envMap||ne.environment),Be===void 0&&(T.addEventListener("dispose",Ie),Be=new Map,ne.programs=Be);let qe=Be.get(Ve);if(qe!==void 0){if(ne.currentProgram===qe&&ne.lightsStateVersion===Ne)return zn(T,Ke),qe}else Ke.uniforms=$e.getUniforms(T),T.onBuild(j,Ke,_),T.onBeforeCompile(Ke,_),qe=$e.acquireProgram(Ke,Ve),Be.set(Ve,qe),ne.uniforms=Ke.uniforms;let st=ne.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(st.clippingPlanes=_t.uniform),zn(T,Ke),ne.needsLights=Bt(T),ne.lightsStateVersion=Ne,ne.needsLights&&(st.ambientLightColor.value=K.state.ambient,st.lightProbe.value=K.state.probe,st.directionalLights.value=K.state.directional,st.directionalLightShadows.value=K.state.directionalShadow,st.spotLights.value=K.state.spot,st.spotLightShadows.value=K.state.spotShadow,st.rectAreaLights.value=K.state.rectArea,st.ltc_1.value=K.state.rectAreaLTC1,st.ltc_2.value=K.state.rectAreaLTC2,st.pointLights.value=K.state.point,st.pointLightShadows.value=K.state.pointShadow,st.hemisphereLights.value=K.state.hemi,st.directionalShadowMap.value=K.state.directionalShadowMap,st.directionalShadowMatrix.value=K.state.directionalShadowMatrix,st.spotShadowMap.value=K.state.spotShadowMap,st.spotLightMatrix.value=K.state.spotLightMatrix,st.spotLightMap.value=K.state.spotLightMap,st.pointShadowMap.value=K.state.pointShadowMap,st.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=qe,ne.uniformsList=null,qe}function Ji(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=fr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function zn(T,z){let j=yt.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function ji(T,z,j,ne,K){z.isScene!==!0&&(z=je),C.resetTextureUnits();let Se=z.fog,Ne=ne.isMeshStandardMaterial?z.environment:null,Ke=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xi,Ve=(ne.isMeshStandardMaterial?J:S).get(ne.envMap||Ne),Be=ne.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qe=!!j.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),st=!!j.morphAttributes.position,kt=!!j.morphAttributes.normal,ln=!!j.morphAttributes.color,Kt=us;ne.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Kt=_.toneMapping);let Zn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Wt=Zn!==void 0?Zn.length:0,bt=yt.get(ne),un=x.state.lights;if(me===!0&&(Le===!0||T!==E)){let mn=T===E&&ne.id===X;_t.setState(ne,T,mn)}let en=!1;ne.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==un.state.version||bt.outputColorSpace!==Ke||K.isBatchedMesh&&bt.batching===!1||!K.isBatchedMesh&&bt.batching===!0||K.isInstancedMesh&&bt.instancing===!1||!K.isInstancedMesh&&bt.instancing===!0||K.isSkinnedMesh&&bt.skinning===!1||!K.isSkinnedMesh&&bt.skinning===!0||K.isInstancedMesh&&bt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&bt.instancingColor===!1&&K.instanceColor!==null||bt.envMap!==Ve||ne.fog===!0&&bt.fog!==Se||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==_t.numPlanes||bt.numIntersection!==_t.numIntersection)||bt.vertexAlphas!==Be||bt.vertexTangents!==qe||bt.morphTargets!==st||bt.morphNormals!==kt||bt.morphColors!==ln||bt.toneMapping!==Kt||Ze.isWebGL2===!0&&bt.morphTargetsCount!==Wt)&&(en=!0):(en=!0,bt.__version=ne.version);let _i=bt.currentProgram;en===!0&&(_i=yi(ne,z,K));let oa=!1,vs=!1,Tr=!1,Un=_i.getUniforms(),Oi=bt.uniforms;if(Fe.useProgram(_i.program)&&(oa=!0,vs=!0,Tr=!0),ne.id!==X&&(X=ne.id,vs=!0),oa||E!==T){Un.setValue($,"projectionMatrix",T.projectionMatrix),Un.setValue($,"viewMatrix",T.matrixWorldInverse);let mn=Un.map.cameraPosition;mn!==void 0&&mn.setValue($,ut.setFromMatrixPosition(T.matrixWorld)),Ze.logarithmicDepthBuffer&&Un.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Un.setValue($,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,vs=!0,Tr=!0)}if(K.isSkinnedMesh){Un.setOptional($,K,"bindMatrix"),Un.setOptional($,K,"bindMatrixInverse");let mn=K.skeleton;mn&&(Ze.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Un.setValue($,"boneTexture",mn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Un.setOptional($,K,"batchingTexture"),Un.setValue($,"batchingTexture",K._matricesTexture,C));let wr=j.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0&&Ze.isWebGL2===!0)&&Tt.update(K,j,_i),(vs||bt.receiveShadow!==K.receiveShadow)&&(bt.receiveShadow=K.receiveShadow,Un.setValue($,"receiveShadow",K.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Oi.envMap.value=Ve,Oi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),vs&&(Un.setValue($,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&Mt(Oi,Tr),Se&&ne.fog===!0&&De.refreshFogUniforms(Oi,Se),De.refreshMaterialUniforms(Oi,ne,se,V,We),fr.upload($,Ji(bt),Oi,C)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(fr.upload($,Ji(bt),Oi,C),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Un.setValue($,"center",K.center),Un.setValue($,"modelViewMatrix",K.modelViewMatrix),Un.setValue($,"normalMatrix",K.normalMatrix),Un.setValue($,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let mn=ne.uniformsGroups;for(let Ar=0,Rr=mn.length;Ar<Rr;Ar++)if(Ze.isWebGL2){let Wn=mn[Ar];Gt.update(Wn,_i),Gt.bind(Wn,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function Mt(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Bt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,z,j){yt.get(T.texture).__webglTexture=z,yt.get(T.depthTexture).__webglTexture=j;let ne=yt.get(T);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=j===void 0,ne.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){let j=yt.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,j=0){L=T,U=z,I=j;let ne=!0,K=null,Se=!1,Ne=!1;if(T){let Ve=yt.get(T);Ve.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer($.FRAMEBUFFER,null),ne=!1):Ve.__webglFramebuffer===void 0?C.setupRenderTarget(T):Ve.__hasExternalTextures&&C.rebindTextures(T,yt.get(T.texture).__webglTexture,yt.get(T.depthTexture).__webglTexture);let Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ne=!0);let qe=yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qe[z])?K=qe[z][j]:K=qe[z],Se=!0):Ze.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?K=yt.get(T).__webglMultisampledFramebuffer:Array.isArray(qe)?K=qe[j]:K=qe,R.copy(T.viewport),q.copy(T.scissor),re=T.scissorTest}else R.copy(ae).multiplyScalar(se).floor(),q.copy(ce).multiplyScalar(se).floor(),re=be;if(Fe.bindFramebuffer($.FRAMEBUFFER,K)&&Ze.drawBuffers&&ne&&Fe.drawBuffers(T,K),Fe.viewport(R),Fe.scissor(q),Fe.setScissorTest(re),Se){let Ve=yt.get(T.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ve.__webglTexture,j)}else if(Ne){let Ve=yt.get(T.texture),Be=z||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ve.__webglTexture,j||0,Be)}X=-1},this.readRenderTargetPixels=function(T,z,j,ne,K,Se,Ne){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ke=Ke[Ne]),Ke){Fe.bindFramebuffer($.FRAMEBUFFER,Ke);try{let Ve=T.texture,Be=Ve.format,qe=Ve.type;if(Be!==wi&&ke.convert(Be)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let st=qe===qr&&(He.has("EXT_color_buffer_half_float")||Ze.isWebGL2&&He.has("EXT_color_buffer_float"));if(qe!==ds&&ke.convert(qe)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===cs&&(Ze.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-ne&&j>=0&&j<=T.height-K&&$.readPixels(z,j,ne,K,ke.convert(Be),ke.convert(qe),Se)}finally{let Ve=L!==null?yt.get(L).__webglFramebuffer:null;Fe.bindFramebuffer($.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(T,z,j=0){let ne=Math.pow(2,-j),K=Math.floor(z.image.width*ne),Se=Math.floor(z.image.height*ne);C.setTexture2D(z,0),$.copyTexSubImage2D($.TEXTURE_2D,j,0,0,T.x,T.y,K,Se),Fe.unbindTexture()},this.copyTextureToTexture=function(T,z,j,ne=0){let K=z.image.width,Se=z.image.height,Ne=ke.convert(j.format),Ke=ke.convert(j.type);C.setTexture2D(j,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,j.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,j.unpackAlignment),z.isDataTexture?$.texSubImage2D($.TEXTURE_2D,ne,T.x,T.y,K,Se,Ne,Ke,z.image.data):z.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,ne,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Ne,z.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,ne,T.x,T.y,Ne,Ke,z.image),ne===0&&j.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(T,z,j,ne,K=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Se=T.max.x-T.min.x+1,Ne=T.max.y-T.min.y+1,Ke=T.max.z-T.min.z+1,Ve=ke.convert(ne.format),Be=ke.convert(ne.type),qe;if(ne.isData3DTexture)C.setTexture3D(ne,0),qe=$.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)C.setTexture2DArray(ne,0),qe=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ne.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,ne.unpackAlignment);let st=$.getParameter($.UNPACK_ROW_LENGTH),kt=$.getParameter($.UNPACK_IMAGE_HEIGHT),ln=$.getParameter($.UNPACK_SKIP_PIXELS),Kt=$.getParameter($.UNPACK_SKIP_ROWS),Zn=$.getParameter($.UNPACK_SKIP_IMAGES),Wt=j.isCompressedTexture?j.mipmaps[K]:j.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Wt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Wt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,T.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,T.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?$.texSubImage3D(qe,K,z.x,z.y,z.z,Se,Ne,Ke,Ve,Be,Wt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(qe,K,z.x,z.y,z.z,Se,Ne,Ke,Ve,Wt.data)):$.texSubImage3D(qe,K,z.x,z.y,z.z,Se,Ne,Ke,Ve,Be,Wt),$.pixelStorei($.UNPACK_ROW_LENGTH,st),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,kt),$.pixelStorei($.UNPACK_SKIP_PIXELS,ln),$.pixelStorei($.UNPACK_SKIP_ROWS,Kt),$.pixelStorei($.UNPACK_SKIP_IMAGES,Zn),K===0&&ne.generateMipmaps&&$.generateMipmap(qe),Fe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Fe.unbindTexture()},this.resetState=function(){U=0,I=0,L=null,Fe.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===bc?"display-p3":"srgb",t.unpackColorSpace=sn.workingColorSpace===To?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vn?Is:ed}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Is?Vn:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Zl=class extends Zr{};Zl.prototype.isWebGL1Renderer=!0;var lo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},co=class extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Jr=class extends gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Iu=new B,Lu=new B,Du=new Rn,Sl=new Yr,Ba=new xr,Jl=class extends ti{constructor(e=new ai,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Iu.fromBufferAttribute(t,s-1),Lu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Iu.distanceTo(Lu);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;Du.copy(s).invert(),Sl.copy(e.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new B,h=new B,p=new B,f=new B,u=this.isLineSegments?2:1,y=n.index,x=n.attributes.position;if(y!==null){let m=Math.max(0,a.start),b=Math.min(y.count,a.start+a.count);for(let _=m,A=b-1;_<A;_+=u){let U=y.getX(_),I=y.getX(_+1);if(c.fromBufferAttribute(x,U),h.fromBufferAttribute(x,I),Sl.distanceSqToSegment(c,h,f,p)>l)continue;f.applyMatrix4(this.matrixWorld);let X=e.ray.origin.distanceTo(f);X<e.near||X>e.far||t.push({distance:X,point:p.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),b=Math.min(x.count,a.start+a.count);for(let _=m,A=b-1;_<A;_+=u){if(c.fromBufferAttribute(x,_),h.fromBufferAttribute(x,_+1),Sl.distanceSqToSegment(c,h,f,p)>l)continue;f.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:p.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Uu=new B,Nu=new B,ho=class extends Jl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Uu.fromBufferAttribute(t,s),Nu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uu.distanceTo(Nu);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var uo=class extends gi{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(a-h)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Oe:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new B,s=[],r=[],a=[],o=new B,l=new Rn;for(let u=0;u<=e;u++){let y=u/e;s[u]=this.getTangentAt(y,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos($n(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,y))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos($n(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],u*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},jr=class extends xi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Oe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*p+this.aX,c=f*p+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jl=class extends jr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ec(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+p)+(l-o)/p;f*=h,u*=h,s(a,o,f,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ka=new B,El=new Ec,Tl=new Ec,wl=new Ec,Ql=class extends xi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ka.subVectors(s[0],s[1]).add(s[0]),c=ka);let p=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ka.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ka),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(p),u),M=Math.pow(p.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(h),u);M<1e-4&&(M=1),y<1e-4&&(y=M),x<1e-4&&(x=M),El.initNonuniformCatmullRom(c.x,p.x,f.x,h.x,y,M,x),Tl.initNonuniformCatmullRom(c.y,p.y,f.y,h.y,y,M,x),wl.initNonuniformCatmullRom(c.z,p.z,f.z,h.z,y,M,x)}else this.curveType==="catmullrom"&&(El.initCatmullRom(c.x,p.x,f.x,h.x,this.tension),Tl.initCatmullRom(c.y,p.y,f.y,h.y,this.tension),wl.initCatmullRom(c.z,p.z,f.z,h.z,this.tension));return n.set(El.calc(l),Tl.calc(l),wl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ou(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Gx(i,e){let t=1-i;return t*t*e}function Wx(i,e){return 2*(1-i)*i*e}function Xx(i,e){return i*i*e}function zr(i,e,t,n){return Gx(i,e)+Wx(i,t)+Xx(i,n)}function qx(i,e){let t=1-i;return t*t*t*e}function Yx(i,e){let t=1-i;return 3*t*t*i*e}function $x(i,e){return 3*(1-i)*i*i*e}function Kx(i,e){return i*i*i*e}function Vr(i,e,t,n,s){return qx(i,e)+Yx(i,t)+$x(i,n)+Kx(i,s)}var fo=class extends xi{constructor(e=new Oe,t=new Oe,n=new Oe,s=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,s.x,r.x,a.x,o.x),Vr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends xi{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,s.x,r.x,a.x,o.x),Vr(e,s.y,r.y,a.y,o.y),Vr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},po=class extends xi{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends xi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends xi{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,s.x,r.x,a.x),zr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends xi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,s.x,r.x,a.x),zr(e,s.y,r.y,a.y),zr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Ou(o,l.x,c.x,h.x,p.x),Ou(o,l.y,c.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Oe().fromArray(s))}return this}},Fu=Object.freeze({__proto__:null,ArcCurve:jl,CatmullRomCurve3:Ql,CubicBezierCurve:fo,CubicBezierCurve3:ec,EllipseCurve:jr,LineCurve:po,LineCurve3:tc,QuadraticBezierCurve:mo,QuadraticBezierCurve3:nc,SplineCurve:go}),ic=class extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Fu[s.type]().fromJSON(s))}return this}},_r=class extends ic{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new po(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new mo(this.currentPoint.clone(),new Oe(e,t),new Oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new fo(this.currentPoint.clone(),new Oe(e,t),new Oe(n,s),new Oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new go(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new jr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var xs=class i extends ai{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],f=[],u=[],y=0,M=[],x=n/2,m=0;b(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new vn(p,3)),this.setAttribute("normal",new vn(f,3)),this.setAttribute("uv",new vn(u,2));function b(){let A=new B,U=new B,I=0,L=(t-e)/n;for(let X=0;X<=r;X++){let E=[],R=X/r,q=R*(t-e)+e;for(let re=0;re<=s;re++){let Me=re/s,P=Me*l+o,O=Math.sin(P),V=Math.cos(P);U.x=q*O,U.y=-R*n+x,U.z=q*V,p.push(U.x,U.y,U.z),A.set(O,L,V).normalize(),f.push(A.x,A.y,A.z),u.push(Me,1-R),E.push(y++)}M.push(E)}for(let X=0;X<s;X++)for(let E=0;E<r;E++){let R=M[E][X],q=M[E+1][X],re=M[E+1][X+1],Me=M[E][X+1];h.push(R,q,Me),h.push(q,re,Me),I+=6}c.addGroup(m,I,0),m+=I}function _(A){let U=y,I=new Oe,L=new B,X=0,E=A===!0?e:t,R=A===!0?1:-1;for(let re=1;re<=s;re++)p.push(0,x*R,0),f.push(0,R,0),u.push(.5,.5),y++;let q=y;for(let re=0;re<=s;re++){let P=re/s*l+o,O=Math.cos(P),V=Math.sin(P);L.x=E*V,L.y=x*R,L.z=E*O,p.push(L.x,L.y,L.z),f.push(0,R,0),I.x=O*.5+.5,I.y=V*.5*R+.5,u.push(I.x,I.y),y++}for(let re=0;re<s;re++){let Me=U+re,P=q+re;A===!0?h.push(P,P+1,Me):h.push(P+1,P,Me),X+=3}c.addGroup(m,X,A===!0?1:2),m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ai=class i extends xs{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xo=class i extends ai{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new vn(r,3)),this.setAttribute("normal",new vn(r.slice(),3)),this.setAttribute("uv",new vn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let _=new B,A=new B,U=new B;for(let I=0;I<t.length;I+=3)u(t[I+0],_),u(t[I+1],A),u(t[I+2],U),l(_,A,U,b)}function l(b,_,A,U){let I=U+1,L=[];for(let X=0;X<=I;X++){L[X]=[];let E=b.clone().lerp(A,X/I),R=_.clone().lerp(A,X/I),q=I-X;for(let re=0;re<=q;re++)re===0&&X===I?L[X][re]=E:L[X][re]=E.clone().lerp(R,re/q)}for(let X=0;X<I;X++)for(let E=0;E<2*(I-X)-1;E++){let R=Math.floor(E/2);E%2===0?(f(L[X][R+1]),f(L[X+1][R]),f(L[X][R])):(f(L[X][R+1]),f(L[X+1][R+1]),f(L[X+1][R]))}}function c(b){let _=new B;for(let A=0;A<r.length;A+=3)_.x=r[A+0],_.y=r[A+1],_.z=r[A+2],_.normalize().multiplyScalar(b),r[A+0]=_.x,r[A+1]=_.y,r[A+2]=_.z}function h(){let b=new B;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let A=x(b)/2/Math.PI+.5,U=m(b)/Math.PI+.5;a.push(A,1-U)}y(),p()}function p(){for(let b=0;b<a.length;b+=6){let _=a[b+0],A=a[b+2],U=a[b+4],I=Math.max(_,A,U),L=Math.min(_,A,U);I>.9&&L<.1&&(_<.2&&(a[b+0]+=1),A<.2&&(a[b+2]+=1),U<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function u(b,_){let A=b*3;_.x=e[A+0],_.y=e[A+1],_.z=e[A+2]}function y(){let b=new B,_=new B,A=new B,U=new B,I=new Oe,L=new Oe,X=new Oe;for(let E=0,R=0;E<r.length;E+=9,R+=6){b.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),A.set(r[E+6],r[E+7],r[E+8]),I.set(a[R+0],a[R+1]),L.set(a[R+2],a[R+3]),X.set(a[R+4],a[R+5]),U.copy(b).add(_).add(A).divideScalar(3);let q=x(U);M(I,R+0,b,q),M(L,R+2,_,q),M(X,R+4,A,q)}}function M(b,_,A,U){U<0&&b.x===1&&(a[_]=b.x-1),A.x===0&&A.z===0&&(a[_]=U/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},yo=class i extends xo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var vr=class extends _r{constructor(e){super(e),this.uuid=br(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new _r().fromJSON(s))}return this}},Zx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=dd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,p,f,u;if(n&&(r=ty(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let y=t;y<s;y+=t)p=i[y],f=i[y+1],p<o&&(o=p),f<l&&(l=f),p>c&&(c=p),f>h&&(h=f);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return Qr(r,a,t,o,l,u,0),a}};function dd(i,e,t,n,s){let r,a;if(s===dy(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Bu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Bu(r,i[r],i[r+1],a);return a&&Ao(a,a.next)&&(ta(a),a=a.next),a}function Ds(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ao(t,t.next)||_n(t.prev,t,t.next)===0)){if(ta(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ay(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?jx(i,n,s,r):Jx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ta(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Qx(Ds(i),e,t),Qr(i,e,t,n,s,r,2)):a===2&&ey(i,e,t,n,s,r):Qr(Ds(i),e,t,n,s,r,1);break}}}function Jx(i){let e=i.prev,t=i,n=i.next;if(_n(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,p=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=f&&y.y>=p&&y.y<=u&&hr(s,o,r,l,a,c,y.x,y.y)&&_n(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function jx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(_n(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,f=a.y,u=o<l?o<c?o:c:l<c?l:c,y=h<p?h<f?h:f:p<f?p:f,M=o>l?o>c?o:c:l>c?l:c,x=h>p?h>f?h:f:p>f?p:f,m=sc(u,y,e,t,n),b=sc(M,x,e,t,n),_=i.prevZ,A=i.nextZ;for(;_&&_.z>=m&&A&&A.z<=b;){if(_.x>=u&&_.x<=M&&_.y>=y&&_.y<=x&&_!==s&&_!==a&&hr(o,h,l,p,c,f,_.x,_.y)&&_n(_.prev,_,_.next)>=0||(_=_.prevZ,A.x>=u&&A.x<=M&&A.y>=y&&A.y<=x&&A!==s&&A!==a&&hr(o,h,l,p,c,f,A.x,A.y)&&_n(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;_&&_.z>=m;){if(_.x>=u&&_.x<=M&&_.y>=y&&_.y<=x&&_!==s&&_!==a&&hr(o,h,l,p,c,f,_.x,_.y)&&_n(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;A&&A.z<=b;){if(A.x>=u&&A.x<=M&&A.y>=y&&A.y<=x&&A!==s&&A!==a&&hr(o,h,l,p,c,f,A.x,A.y)&&_n(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Qx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ao(s,r)&&fd(s,n,n.next,r)&&ea(s,r)&&ea(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ta(n),ta(n.next),n=i=r),n=n.next}while(n!==i);return Ds(n)}function ey(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cy(a,o)){let l=pd(a,o);a=Ds(a,a.next),l=Ds(l,l.next),Qr(a,e,t,n,s,r,0),Qr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ty(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=dd(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(ly(c));for(s.sort(ny),r=0;r<s.length;r++)t=iy(s[r],t);return t}function ny(i,e){return i.x-e.x}function iy(i,e){let t=sy(i,e);if(!t)return e;let n=pd(t,i);return Ds(n,n.next),Ds(t,t.next)}function sy(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,p;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&hr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(r-t.x),ea(t,i)&&(p<h||p===h&&(t.x>s.x||t.x===s.x&&ry(s,t)))&&(s=t,h=p)),t=t.next;while(t!==o);return s}function ry(i,e){return _n(i.prev,i,e.prev)<0&&_n(e.next,i,i.next)<0}function ay(i,e,t,n){let s=i;do s.z===0&&(s.z=sc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,oy(s)}function oy(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function sc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ly(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function cy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hy(i,e)&&(ea(i,e)&&ea(e,i)&&uy(i,e)&&(_n(i.prev,i,e.prev)||_n(i,e.prev,e))||Ao(i,e)&&_n(i.prev,i,i.next)>0&&_n(e.prev,e,e.next)>0)}function _n(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ao(i,e){return i.x===e.x&&i.y===e.y}function fd(i,e,t,n){let s=za(_n(i,e,t)),r=za(_n(i,e,n)),a=za(_n(t,n,i)),o=za(_n(t,n,e));return!!(s!==r&&a!==o||s===0&&Ha(i,t,e)||r===0&&Ha(i,n,e)||a===0&&Ha(t,i,n)||o===0&&Ha(t,e,n))}function Ha(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function za(i){return i>0?1:i<0?-1:0}function hy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&fd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ea(i,e){return _n(i.prev,i,i.next)<0?_n(i,e,i.next)>=0&&_n(i,i.prev,e)>=0:_n(i,e,i.prev)<0||_n(i,i.next,e)<0}function uy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function pd(i,e){let t=new rc(i.i,i.x,i.y),n=new rc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bu(i,e,t,n){let s=new rc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ta(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dy(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Gr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ku(e),Hu(n,e);let a=e.length;t.forEach(ku);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Hu(n,t[l]);let o=Zx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ku(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Hu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _o=class i extends xo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var na=class i extends ai{constructor(e=new vr([new Oe(0,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new vn(s,3)),this.setAttribute("normal",new vn(r,3)),this.setAttribute("uv",new vn(a,2));function c(h){let p=s.length/3,f=h.extractPoints(t),u=f.shape,y=f.holes;Gr.isClockWise(u)===!1&&(u=u.reverse());for(let x=0,m=y.length;x<m;x++){let b=y[x];Gr.isClockWise(b)===!0&&(y[x]=b.reverse())}let M=Gr.triangulateShape(u,y);for(let x=0,m=y.length;x<m;x++){let b=y[x];u=u.concat(b)}for(let x=0,m=u.length;x<m;x++){let b=u[x];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let x=0,m=M.length;x<m;x++){let b=M[x],_=b[0]+p,A=b[1]+p,U=b[2]+p;n.push(_,A,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return fy(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function fy(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ui=class i extends ai{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new B,f=new B,u=[],y=[],M=[],x=[];for(let m=0;m<=n;m++){let b=[],_=m/n,A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let U=0;U<=t;U++){let I=U/t;p.x=-e*Math.cos(s+I*r)*Math.sin(a+_*o),p.y=e*Math.cos(a+_*o),p.z=e*Math.sin(s+I*r)*Math.sin(a+_*o),y.push(p.x,p.y,p.z),f.copy(p).normalize(),M.push(f.x,f.y,f.z),x.push(I+A,1-_),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let _=h[m][b+1],A=h[m][b],U=h[m+1][b],I=h[m+1][b+1];(m!==0||a>0)&&u.push(_,A,I),(m!==n-1||l<Math.PI)&&u.push(A,U,I)}this.setIndex(u),this.setAttribute("position",new vn(y,3)),this.setAttribute("normal",new vn(M,3)),this.setAttribute("uv",new vn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hn=class extends gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function py(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Mr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ac=class extends Mr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vh:r=e,o=2*t-n;break;case Gh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vh:a=e,l=2*n-t;break;case Gh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,u=this._weightNext,y=(n-t)/(s-t),M=y*y,x=M*y,m=-f*x+2*f*M-f*y,b=(1+f)*x+(-1.5-2*f)*M+(-.5+f)*y+1,_=(-1-u)*x+(1.5+u)*M+.5*y,A=u*x-u*M;for(let U=0;U!==o;++U)r[U]=m*a[h+U]+b*a[c+U]+_*a[l+U]+A*a[p+U];return r}},oc=class extends Mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),p=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*p+a[l+f]*h;return r}},lc=class extends Mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ri=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Va(t,this.TimeBufferType),this.values=Va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Va(e.times,Array),values:Va(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ac(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wa:t=this.InterpolantFactoryMethodDiscrete;break;case Xa:t=this.InterpolantFactoryMethodLinear;break;case jo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return Xa;case this.InterpolantFactoryMethodSmooth:return jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&py(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let p=o*n,f=p-n,u=p+n;for(let y=0;y!==n;++y){let M=t[p+y];if(M!==t[f+y]||M!==t[u+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[p+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Xa;var Us=class extends Ri{};Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Wa;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends Ri{};cc.prototype.ValueTypeName="color";var hc=class extends Ri{};hc.prototype.ValueTypeName="number";var uc=class extends Mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ms.slerpFlat(r,0,a,c-o,a,c,l);return r}},ia=class extends Ri{InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.DefaultInterpolation=Xa;ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Ns=class extends Ri{};Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Wa;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends Ri{};dc.prototype.ValueTypeName="vector";var fc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){let u=c[p],y=c[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return y}return null}}},my=new fc,pc=class{constructor(e){this.manager=e!==void 0?e:my,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var vo=class extends ti{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Al=new Rn,zu=new B,Vu=new B,mc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new kn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),Vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vu),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var gc=class extends mc{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mo=class extends vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new gc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},bo=class extends vo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Tc="\\[\\]\\.:\\/",gy=new RegExp("["+Tc+"]","g"),wc="[^"+Tc+"]",xy="[^"+Tc.replace("\\.","")+"]",yy=/((?:WC+[\/:])*)/.source.replace("WC",wc),_y=/(WCOD+)?/.source.replace("WCOD",xy),vy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wc),My=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wc),by=new RegExp("^"+yy+_y+vy+My+"$"),Sy=["material","materials","bones","map"],xc=class{constructor(e,t,n){let s=n||xn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gy,"")}static parseTrackName(e){let t=by.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Sy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xn.Composite=xc;xn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xn.prototype.GetterByBindingType=[xn.prototype._getValue_direct,xn.prototype._getValue_array,xn.prototype._getValue_arrayElement,xn.prototype._getValue_toArray];xn.prototype.SetterByBindingTypeAndVersioning=[[xn.prototype._setValue_direct,xn.prototype._setValue_direct_setNeedsUpdate,xn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_array,xn.prototype._setValue_array_setNeedsUpdate,xn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_arrayElement,xn.prototype._setValue_arrayElement_setNeedsUpdate,xn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xn.prototype._setValue_fromArray,xn.prototype._setValue_fromArray_setNeedsUpdate,xn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fy=new Float32Array(1);var So=class{constructor(e,t,n=0,s=1/0){this.ray=new Yr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yc(e,this,n,t),n.sort(Gu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)yc(e[s],this,n,t);return n.sort(Gu),n}};function Gu(i,e){return i.distance-e.distance}function yc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)yc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);var Ac=35,Rc=25,Cc=.29,pt=.95,Gn=.35,$i=200,Ki=7,Os=300,_s=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),Ty=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],wy=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch","paladin","exorcist","bandit","ranger","blacksmith","alchemist"],Ro={tank:["knight","berserker","werewolf","ghoul"],melee:["assassin","ninja","samurai","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["hunter","ranger","alchemist"],caster:["mage","witch"]},sa={tank:2,melee:2,support:1,ranged:1,caster:1};function Ay(i){let e=Math.max(1,i),t=Object.keys(sa),n=t.reduce((l,c)=>l+(sa[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(sa[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(sa[c]??0)-(sa[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var Je={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Zi=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist"];function Ry(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Qt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:4,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5}},Co={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331}},ra={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp"},Ni=Zi.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function Cy(i,e){_s&&(Zi.includes(i)&&Ni[i]&&Ni[i].kills++,Zi.includes(e)&&Ni[e]&&Ni[e].deaths++)}function Py(i,e){if(!_s)return;for(let n of i)!n||!Ni[n.class]||(Ni[n.class].battles++,e!=null&&(n.player===e?Ni[n.class].wins++:Ni[n.class].losses++));let t=Zi.map(n=>{let s=Ni[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var md={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:8,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:2,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:3,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:5,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:3,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:2,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 3 turns.",cost:5,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage to one enemy and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}]};function ge(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function Po(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,p=(u,y,M,x)=>{if(M)u.hp=Math.min(u.maxHp,u.hp+y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${y}`,!1,"heal");else{let m=u===s,b=!0;if(!m&&!x){let _=ge(u,"agi")*.7+ge(u,"luk")*.3;b=Math.random()*Math.max(.001,_)<=ge(s,"dex")}return b?(u.hp=Math.max(0,u.hp-y),u!==s&&(h=y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(y),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u,s)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),b}},f=(u,y,M,x)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,y,M,!1,x?"buff":"debuff")};switch(i){case"brave":s.tempBuff={vit:3,duration:3},f(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let u=2,y=1;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,r.vit=Math.max(1,(r.vit||0)-y),s.vit=(s.vit||0)+y,f(r.x,r.y,`-${u} STR and -${y} VIT`,!1),f(s.x,s.y,`+${u} STR and +${y} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(ge(s,"int")-(ge(r,"int")*.7+ge(r,"luk")*.2)));p(r,u,!1,!0)}break;case"manaDrain":if(r){let u=Math.max(1,Math.floor(ge(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-u),s.mp=(s.mp||0)+u,f(r.x,r.y,`-${u} MP`,!1),f(s.x,s.y,`+${u} MP`,!0)}break;case"mantra":if(r){let u=Math.max(1,Math.floor(ge(s,"int")*.3));s.tempBuff={int:u,duration:3},f(s.x,s.y,`+${u} LUK`,!0),r.tempBuff={luk:u,duration:3},f(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(p(s,Math.max(1,Math.floor(ge(s,"int")*.3+ge(s,"luk")*.15)),!0),!r)break;p(r,Math.max(1,Math.floor(ge(s,"int")*.3+ge(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,f(r.x,r.y,`-${u} VIT`,!1),f(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(ge(s,"str")*.7-(ge(r,"vit")*.3+ge(r,"luk")*.2)));p(r,u,!1)&&p(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff={agi:u,duration:3},f(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(ge(s,"str")*.6));p(r,u,!1)}break;case"focus":s.tempBuff={dex:3,duration:3},f(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(ge(s,"dex")*.7-(ge(r,"vit")*.3+ge(r,"luk")*.2)));p(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,f(r.x,r.y,`-${u} AGI`,!1),f(s.x,s.y,`+${u} AGI`,!0)}break;case"execute":if(r){let u=Math.max(1,Math.floor(ge(s,"agi")*.8-(ge(r,"vit")*.3+ge(r,"luk")*.2)));p(r,u,!1)}break;case"berserk":r&&(p(r,Math.max(1,Math.floor(ge(s,"str")*.8-ge(r,"vit")*.3+ge(r,"luk")*.2)),!1),p(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff={str:u,vit:u,duration:2},f(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,f(r.x,r.y,`-${u} INT`,!1),f(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(ge(s,"int")*.6-(ge(r,"int")*.4+ge(r,"luk")*.2)));p(r,u,!1,!0),p(s,u,!0)}break;case"blind":{if(!r)break;let u=1;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,f(r.x,r.y,`-${u} DEX`,!1),f(s.x,s.y,`+${u} DEX`,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(ge(s,"dex")*.7-(ge(r,"vit")*.3+ge(r,"luk")*.2)));p(r,u,!1)}break;case"iaido":s.tempBuff={str:1,dex:1,duration:3},f(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(ge(s,"str")*.4+ge(s,"dex")*.4-(ge(r,"vit")*.3+ge(r,"luk")*.2)));p(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(ge(s,"str")*.7+ge(s,"agi")*.1-(ge(r,"vit")*.3+ge(r,"luk")*.2)));p(r,u,!1)}break;case"howl":s.tempBuff={str:2,agi:2,duration:3},f(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let u=Math.max(1,Math.floor(ge(s,"int")*.5));p(r,u,!0),p(s,3,!1)}break;case"judgement":{if(!r)break;let u=Math.max(1,Math.floor(s.maxHp-s.hp-(ge(r,"int")*.2+ge(r,"luk")*.1)));p(r,u,!1,!0)}break;case"sanctuary":s.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},r.tempBuff={str:1,vit:1,dex:1,agi:1,int:1,luk:1,duration:4},s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),f(s.x,s.y,"+1 ALL STATS",!0),f(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let u=Math.max(1,Math.floor(r.maxHp-r.hp-(ge(r,"int")*.4+ge(r,"luk")*.2)));p(r,u,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,f(r.x,r.y,"-2 LUK",!1),f(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let u=Math.max(1,Math.floor(ge(s,"luk")*.8-(ge(r,"vit")*.3+ge(r,"luk")*.2)));p(r,u,!1)}break;case"windWalk":s.tempBuff={dex:1,agi:3,duration:3},f(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let u=Math.max(1,Math.floor(ge(s,"dex")*.6-(ge(r,"vit")*.3+ge(r,"luk")*.2)));if(p(r,u,!1)&&n.world&&n.units&&n.updateUnitPosition){let M=Math.max(1,Math.floor(u*.2)),x=Dy(n.world,n.units,s,r,M),m=r.x,b=r.y;r.x=x.newGx,r.y=x.newGy,x.collisionDamage>0?(console.log("knockback damage",{damage:x.collisionDamage}),n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),p(r,x.collisionDamage,!1),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)):n.animateKnockback?n.animateKnockback(r,m,b,x.newGx,x.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),r.hp>0&&n.tryCollectPowerup&&n.tryCollectPowerup(r))}}break;case"forge":s.tempBuff={str:2,duration:3},r.tempBuff={str:2,duration:3},f(s.x,s.y,"+2 STR",!0),f(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff={str:3,vit:3,duration:3},r.tempBuff={str:3,vit:3,duration:3},f(s.x,s.y,"+3 STR, +3 VIT",!0),f(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let u=Math.max(1,Math.floor(ge(r,"luk")*.3));r.tempDebuff={poison:u,duration:3},f(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let u=Math.max(1,Math.floor(ge(s,"int")*.8-(ge(r,"int")*.4+ge(r,"luk")*.2)));p(r,u,!1,!0);let y=Math.max(1,Math.floor(u*.5));s.luk=Math.max(1,(s.luk||0)+y),f(s.x,s.y,`+${y} LUK`,!0)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function gd(){let i=Ac,e=Rc,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill(Je.GRASS)),r=Math.floor(i/2),a=Math.floor(e/2),o=r,l=0,c=r,h=e-1,p=2,f=3;function u(P,O,V,se){let ee=se;for(let Z=O;Z<=V;Z++)if(!(Z<0||Z>=e))for(let ae=-p;ae<=p;ae++){let ce=ee+ae;ce<0||ce>=i||(t[Z][ce]=!0,s[Z][ce]=P,n[Z][ce]=1)}}u(Je.BASE_TOP,l,l+f-1,o),u(Je.BASE_BOTTOM,h-f+1,h,c),u(Je.CENTER,a-1,a+1,r);let y=new Set,M=(P,O)=>Math.abs(P-r)<=2&&Math.abs(O-a)<=1,x=(P,O)=>{P<0||P>=i||O<0||O>=e||M(P,O)||y.add(O*i+P)},m=Math.floor(i/2),b=Math.floor(e/2),_=Math.min(i,e)*Cc,A=Math.max(60,(e+i)*2);for(let P=0;P<2;P++){let O=P===0?m-_:m+_,V=P===0?Math.PI/2:-Math.PI/2,se=P===0?Math.PI*3/2:Math.PI/2;for(let ee=0;ee<=A;ee++){let Z=ee/A,ae=V+Z*(se-V),ce=O+_*Math.cos(ae),be=b+_*Math.sin(ae),Y=Math.round(ce),me=Math.round(be);x(Y,me),x(Y+1,me),x(Y-1,me),x(Y,me+1),x(Y,me-1)}}let U=[[0,1],[0,-1],[1,0],[-1,0]];for(let P=0;P<1;P++){let O=[];y.forEach(V=>{let se=V%i,ee=V/i|0;for(let[Z,ae]of U){let ce=se+Z,be=ee+ae;if(ce<0||ce>=i||be<0||be>=e)continue;let Y=be*i+ce;y.has(Y)||O.push(Y)}}),O.forEach(V=>y.add(V))}y.forEach(P=>{let O=P%i,V=P/i|0;s[V][O]===Je.BASE_TOP||s[V][O]===Je.BASE_BOTTOM||s[V][O]===Je.CENTER||(t[V][O]=!0,s[V][O]=Je.PATH,n[V][O]=1)});let I=Math.round(m-_*1.6),L=Math.round(m+_*1.6),X=Math.round(m-_),E=Math.round(m+_),R=1;for(let P=a-R;P<=a+R;P++)if(!(P<0||P>=e))for(let O=I;O<=L;O++)O<0||O>=i||(t[P][O]=!0,s[P][O]!==Je.CENTER&&s[P][O]!==Je.BASE_TOP&&s[P][O]!==Je.BASE_BOTTOM&&(s[P][O]=Je.PATH),n[P][O]=Math.max(n[P][O],1));function q(P,O,V,se){let ee=Math.max(1,Math.min(P,O)),Z=Math.min(e-2,Math.max(P,O)),ae=Math.max(1,Math.min(V,se)),ce=Math.min(i-2,Math.max(V,se));for(let be=ee;be<=Z;be++)for(let Y=ae;Y<=ce;Y++)s[be][Y]===Je.BASE_TOP||s[be][Y]===Je.BASE_BOTTOM||s[be][Y]===Je.CENTER||(t[be][Y]=!0,s[be][Y]=Je.PATH,n[be][Y]=1)}let re=3,Me=3;q(l,l+re-1,X,o-1),q(l,l+re-1,o+1,E),q(h-Me+1,h,X,c-1),q(h-Me+1,h,c+1,E),u(Je.BASE_TOP,l,l+f-1,o),u(Je.BASE_BOTTOM,h-f+1,h,c),u(Je.CENTER,a-1,a+1,r);for(let P=0;P<e;P++)for(let O=0;O<i;O++){if(t[P][O]||s[P][O]===Je.BASE_TOP||s[P][O]===Je.BASE_BOTTOM||s[P][O]===Je.CENTER)continue;let V=Math.abs(O-o)<=4&&Math.abs(P-l)<=3,se=Math.abs(O-c)<=4&&Math.abs(P-h)<=3,ee=V||se,Z=Math.random();Z<.55&&!ee?(s[P][O]=Je.TREE,n[P][O]=1+Math.floor(Math.random()*2)):Z<.75||ee&&Z<.5?(s[P][O]=Je.WATER,n[P][O]=0):(s[P][O]=Je.ROCK,n[P][O]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:o,topBaseY:l,botBaseX:c,botBaseY:h}}function Iy(i,e,t){let n=e===1?Je.BASE_BOTTOM:Je.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function Ly(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===Je.CENTER&&e.push({gx:n,gy:t});return e}function xd(i,e){let t=Ly(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function Er(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===Je.TREE||n===Je.WATER||n===Je.ROCK)}function Dy(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let p=0;for(let f=0;f<s;f++){let u=r+c,y=a+h,M=u<0||u>=i.w||y<0||y>=i.h,x=!Er(i,u,y),m=e.some(b=>b.hp>0&&b.id!==n.id&&b.x===u&&b.y===y);if(M||x||m){let b=Math.max(1,p*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:b}}r=u,a=y,p++}return{newGx:r,newGy:a,collisionDamage:0}}function Uy(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),p=r<o?1:-1,f=a<l?1:-1,u=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let y=2*u;y>-h&&(u-=h,r+=p),y<c&&(u+=c,a+=f)}return s}function Fs(i,e,t,n,s){let r=Uy(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!Er(i,o.x,o.y))return!1}return!0}function Io(i,e,t,n,s,r){let a=(f,u)=>u*i.w+f,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null,p=h?new Set(s.filter(f=>f.hp>0&&f.player!==r.player).map(f=>f.y*i.w+f.x)):null;for(;l.length;){let{x:f,y:u,d:y}=l.shift();if(!(y>=n))for(let[M,x]of c){let m=f+M,b=u+x;if(!Er(i,m,b)||h&&p.has(a(m,b)))continue;let _=a(m,b);if(o.has(_))continue;let A=y+1;o.set(_,A),l.push({x:m,y:b,d:A})}}return o}function yd(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++){let p=Math.abs(h-e)+Math.abs(c-t);p>=1&&p<=n&&s.set(c*i.w+h,p)}return s}function ys(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(u,y)=>y*i.w+u,l=new Set(r.filter(u=>u.hp>0&&u.player!==a.player).map(u=>u.y*i.w+u.x)),c=new Map,h=[{x:e,y:t}];c.set(o(e,t),null);let p=[[0,1],[0,-1],[1,0],[-1,0]];function f(u,y){return Er(i,u,y)?!l.has(o(u,y)):!1}for(;h.length;){let{x:u,y}=h.shift();if(u===n&&y===s){let M=[],x={x:n,y:s};for(;x;)M.unshift(x),x=c.get(o(x.x,x.y));return M}for(let[M,x]of p){let m=u+M,b=y+x,_=o(m,b);c.has(_)||f(m,b)&&(c.set(_,{x:u,y}),h.push({x:m,y:b}))}}return null}var _d={[Je.PATH]:2976557,[Je.GRASS]:2968109,[Je.TREE]:1719578,[Je.WATER]:1989278,[Je.ROCK]:4872778,[Je.BASE_TOP]:8014410,[Je.BASE_BOTTOM]:4872826,[Je.CENTER]:13940810};function Pc(i){return i.w*pt/2}function Ic(i){return i.h*pt/2}function Md(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new uo(e);return r.wrapS=r.wrapT=Wr,r.repeat.set(4,4),r.needsUpdate=!0,r}function vd(i){let e=new ui,t=Pc(i),n=Ic(i),s=new In(pt,Gn,pt),r=Md(64),a=.88,o=.02,l=[];function c(f,u,y,M,x){let m=new Hn({color:3828266,roughness:.9});m.bumpMap=r,m.bumpScale=.12;for(let b=0;b<M;b++){let _=.08+Math.random()*x,A=.03+Math.random()*.03,U=new Ye(new xs(A*.5,A,_,6),m);U.position.set(f+(Math.random()-.5)*.5,y+_/2,u+(Math.random()-.5)*.5),U.rotation.x=(Math.random()-.5)*.2,U.rotation.z=(Math.random()-.5)*.2,U.castShadow=!0,e.add(U)}}let h=.12;function p(f,u,y,M){let x=y+.02,m=[[f-h,x,u-h],[f+h,x,u+h],[f-h,x,u+h],[f+h,x,u-h],[f-h+.06,x,u-h+.06],[f+h-.06,x,u+h-.06],[f-h+.06,x,u+h-.06],[f+h-.06,x,u-h+.06]],b=new Float32Array(m.length*3);m.forEach((I,L)=>{b[L*3]=I[0],b[L*3+1]=I[1],b[L*3+2]=I[2]});let _=new ai;_.setAttribute("position",new ri(b,3)),_.computeBoundingSphere();let A=new Jr({color:855309,linewidth:1}),U=new ho(_,A);M.add(U)}for(let f=0;f<i.h;f++)for(let u=0;u<i.w;u++){let y=i.type[f][u],M=i.height[f][u],x=_d[y],m=Gn+M*.35,b=m/2+Gn/2,_=new Hn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),A=(x>>16&255)/255,U=(x>>8&255)/255,I=(x&255)/255,L=A,X=U,E=I;if(y===Je.PATH||y===Je.TREE||y===Je.ROCK){let se=Math.random()*.45;L=A*(1-se)+.42*se,X=U*(1-se)+.26*se,E=I*(1-se)+.14*se}(y===Je.TREE||y===Je.ROCK)&&(L*=.5,X*=.5,E*=.5);let R=1+(Math.random()-.5)*.12;_.color.setRGB(Math.min(1,L*R),Math.min(1,X*R),Math.min(1,E*R)),_.bumpMap=r,_.bumpScale=.12;let q=new Ye(s,_);q.position.set(u*pt-t+pt/2,m/2,f*pt-n+pt/2),q.castShadow=!0,q.receiveShadow=!0,q.userData={gx:u,gy:f,type:y},e.add(q);let re=u*pt-t+pt/2,Me=f*pt-n+pt/2;if(y===Je.TREE&&p(re,Me,b,e),y===Je.TREE){let P=new ui;P.position.set(re,b,Me);let O=u===0||u===i.w-1||f===0||f===i.h-1,V=O?.75+Math.random()*.35:.5+Math.random()*.2,se=new gt(4007959),ee=()=>1+(Math.random()-.5)*.4;se.r=Math.min(1,Math.max(0,se.r*ee())),se.g=Math.min(1,Math.max(0,se.g*ee())),se.b=Math.min(1,Math.max(0,se.b*ee()));let Z=.85+Math.random()*.2,ae=new Hn({color:se,roughness:Z});ae.bumpMap=r,ae.bumpScale=.1+Math.random()*.12;let ce=new Ye(new xs(.12,.14,V,8),ae);ce.position.set(0,V/2,0),ce.castShadow=!0,ce.raycast=function(){},P.add(ce);let be=r.clone();be.repeat.set(3,3);let Y=new gt(2972205),me=()=>1+(Math.random()-.5)*.44;Y.r=Math.min(1,Math.max(0,Y.r*me())),Y.g=Math.min(1,Math.max(0,Y.g*me())),Y.b=Math.min(1,Math.max(0,Y.b*me()));let Le=.78+Math.random()*.24,We=new Hn({color:Y,roughness:Le});We.bumpMap=be,We.bumpScale=.16+Math.random()*.14;let Xe=O?.52:.45,ht=O?1.05:.9,ut=.12,je=ht*.5,de=ht*.45,$=ht*.4,Qe=new Ye(new Ai(Xe,je,8),We);Qe.position.set(0,V+je/2,0),Qe.castShadow=!0,Qe.raycast=function(){},P.add(Qe);let He=new Ye(new Ai(Xe*.75,de,8),We);He.position.set(0,V+je-ut+de/2,0),He.castShadow=!0,He.raycast=function(){},P.add(He);let Ze=new Ye(new Ai(Xe*.5,$,8),We);Ze.position.set(0,V+je-ut+de-ut+$/2,0),Ze.castShadow=!0,Ze.raycast=function(){},P.add(Ze),e.add(P),l.push(P)}else if(y===Je.WATER){let P=_d[Je.WATER],O=(P>>16&255)/255,V=(P>>8&255)/255,se=(P&255)/255,ee=1+(Math.random()-.5)*.12,Z=new Hn({color:new gt().setRGB(Math.min(1,O*ee),Math.min(1,V*ee),Math.min(1,se*ee)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),ae=new Ye(new Di(pt,pt),Z);ae.rotation.x=-Math.PI/2,ae.position.set(re,b+.02,Me),ae.receiveShadow=!0,e.add(ae)}else if(y===Je.ROCK){let P=new Hn({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let O=(Z,ae,ce)=>{let be=new Ye(new yo(Z,0),P);be.position.set(re+ae,b+Z-.2,Me+ce),be.rotation.set(Math.random(),Math.random(),Math.random()),be.castShadow=!0,e.add(be)},V=.32+Math.random()*.14,se=.2+Math.random()*.12,ee=.12+Math.random()*.12;O(V,(Math.random()-.5)*.15,(Math.random()-.5)*.15),O(se,(Math.random()-.5)*.25,(Math.random()-.5)*.25),O(ee,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function Ny(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=gd(),t=document.getElementById("canvas-wrap"),n=new co;n.background=new gt(1711652),n.fog=new lo(1711652,30,90);let s=e.w*pt/2,r=e.h*pt/2,a=new ei(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,c=new B(12,38,16).normalize().multiplyScalar(o),h=new B,p=new B,f=new Ei(new B(0,1,0),0),u=new B,y=new B,M=!1,x=!1,m=!0,b=!1,_=null,A=5,U=.004,I=-Math.PI*.4,L=Math.PI*.4,X=new B,E={x:0,y:0},R=!1,q=1,re=40,Me=.005,P=.15,O=1,V=null,se=new bo(16777215,.45);n.add(se);let ee=new Mo(16774630,1.1);ee.position.set(30,50,20),ee.castShadow=!0,ee.shadow.mapSize.width=2048,ee.shadow.mapSize.height=2048,ee.shadow.camera.near=1,ee.shadow.camera.far=120,ee.shadow.camera.left=-50,ee.shadow.camera.right=50,ee.shadow.camera.top=50,ee.shadow.camera.bottom=-50,n.add(ee);let Z=vd(e);n.add(Z);let ae=new Map,ce=new ui;n.add(ce);let be={30:!1,20:!1,10:!1},Y=["red","yellow","purple","blue","green"],me={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943},Le=.92;function We(g,d,v){let F=(Gn+e.height[v][d]*.35)/2+Gn/2,D=new Di(Le,Le),G=new Mn({color:g,transparent:!0,opacity:.45,side:yn}),H=new Ye(D,G);return H.rotation.x=-Math.PI/2,H.position.set(d*pt-Ze+pt/2,F+.01,v*pt-Fe+pt/2),H}function Xe(g){let d=new _o(.22,0),v=new Hn({color:g,metalness:.3,roughness:.4}),w=new Ye(d,v);return w.rotation.x=Math.PI/4,w.castShadow=!0,w.receiveShadow=!0,w}function ht(){let g=Math.floor(e.h/2),d=[];for(let v=0;v<e.w;v++){let w=g;if(e.type[w][v]!==Je.PATH||de.some(G=>G.hp>0&&G.x===v&&G.y===w))continue;let D=w*e.w+v;ae.has(D)||d.push({gx:v,gy:w})}return d}function ut(g){let d=ht();if(d.length===0)return;let v=d[Math.floor(Math.random()*d.length)],w=Y[Math.floor(Math.random()*Y.length)],F=v.gy*e.w+v.gx,D=me[w],G=tt(v.gx,v.gy);G.y+=.35;let H=Xe(D);H.position.copy(G),ce.add(H);let N=We(D,v.gx,v.gy);ce.add(N),ae.set(F,{type:w,mesh:H,glowMesh:N}),console.log("powerup appeared",{turnsLeft:g,type:w,gx:v.gx,gy:v.gy})}function je(g){let d=g.y*e.w+g.x,v=ae.get(d);if(!v)return;let w=v.mesh;if(ce.remove(w),w.geometry.dispose(),w.material){let F=w.material;F.dispose&&F.dispose()}v.glowMesh&&(ce.remove(v.glowMesh),v.glowMesh.geometry.dispose(),v.glowMesh.material&&v.glowMesh.material.dispose&&v.glowMesh.material.dispose()),ae.delete(d),v.type==="green"?(g.hp=Math.min(g.maxHp,g.hp+6),Xn(g.x,g.y,"+6 HP",!1,"buff")):(v.type==="red"?g.tempBuff={str:4,duration:3}:v.type==="yellow"?g.tempBuff={agi:4,duration:3}:v.type==="purple"?g.tempBuff={int:4,duration:3}:v.type==="blue"&&(g.tempBuff={dex:4,duration:3}),Xn(g.x,g.y,`+4 ${v.type==="red"?"STR":v.type==="yellow"?"AGI":v.type==="purple"?"INT":"DEX"}`,!1,"buff")),Tt(g,()=>Ue(g))}let de=[],$=1,Qe=new Map,He=Md(64),Ze=Pc(e),Fe=Ic(e);function tt(g,d){let w=(Gn+e.height[d][g]*.35)/2+Gn/2;return new B(g*pt-Ze+pt/2,w,d*pt-Fe+pt/2)}function yt(g){g==="short"&&(Ac=27,Rc=15,Cc=.35,$i=100),n.remove(Z),Z.traverse(d=>{d.geometry&&d.geometry.dispose(),d.material&&(Array.isArray(d.material)?d.material:[d.material]).forEach(w=>w.dispose())}),Qe.forEach(d=>{n.remove(d),d.traverse(v=>{v.geometry&&v.geometry.dispose(),v.material&&(Array.isArray(v.material)?v.material:[v.material]).forEach(F=>F.dispose())})}),Qe.clear(),de.length=0,$=1,ae.forEach(d=>{ce.remove(d.mesh),d.mesh.geometry.dispose(),d.mesh.material&&d.mesh.material.dispose&&d.mesh.material.dispose(),d.glowMesh&&(ce.remove(d.glowMesh),d.glowMesh.geometry.dispose(),d.glowMesh.material&&d.glowMesh.material.dispose&&d.glowMesh.material.dispose())}),ae.clear(),be={30:!1,20:!1,10:!1},e=gd(),Ze=Pc(e),Fe=Ic(e),Z=vd(e),n.add(Z)}function C(){Qe.forEach(g=>{n.remove(g),g.traverse(d=>{d.geometry&&d.geometry.dispose(),d.material&&(Array.isArray(d.material)?d.material:[d.material]).forEach(w=>w.dispose())})}),Qe.clear(),de.length=0,$=1}function S(g,d){let v=(g>>16&255)/255,w=(g>>8&255)/255,F=(g&255)/255,D=1+(Math.random()-.5)*d;return new gt(Math.min(1,v*D),Math.min(1,w*D),Math.min(1,F*D))}let J=.62;function xe(g,d){d=d??J;let v=g instanceof gt?g:new gt(g);return new gt(Math.max(0,v.r*d),Math.max(0,v.g*d),Math.max(0,v.b*d))}function ve(g,d,v){let w=Co[d]||Co.knight,F=xe(S(w.primary,.08)),D=xe(S(w.secondary,.08)),G=Qt[d]&&Qt[d].gender||"male",H=v??4006676,N=xe(S(w.skin!=null?w.skin:15250592,.06)),W=xe(S(H,.08)),ue=()=>(Math.random()-.5)*.08,we=()=>(Math.random()-.5)*.04,Q=new Hn({color:F,metalness:Math.max(0,.25+we()),roughness:Math.max(.3,Math.min(1,.5+ue()))});Q.bumpMap=He,Q.bumpScale=.1;let oe=new Hn({color:D,metalness:Math.max(0,.2+we()),roughness:Math.max(.3,Math.min(1,.55+ue()))});oe.bumpMap=He,oe.bumpScale=.1;let ye=new Hn({color:F,metalness:Math.max(0,.25+we()),roughness:Math.max(.3,Math.min(1,.5+ue()))});ye.bumpMap=He,ye.bumpScale=.1;let Ge=new Hn({color:N,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+ue()))});Ge.bumpMap=He,Ge.bumpScale=.05;let ze=new ui,ot=.28,Nt=.08,tn=.08,Sn=new Ye(new In(Nt,ot,tn),oe);Sn.position.set(-.06,ot/2,0),Sn.castShadow=!0,ze.add(Sn);let On=new Ye(new In(Nt,ot,tn),oe);On.position.set(.06,ot/2,0),On.castShadow=!0,ze.add(On);let cn=.28,Vt=.2,qt=.12,gn=new Ye(new In(Vt,cn,qt),Q);gn.position.set(0,ot+cn/2,0),gn.castShadow=!0,ze.add(gn);let lt=.06,an=.22,Tn=.06,St=new Ye(new In(lt,an,Tn),ye);St.position.set(-(Vt/2+lt/2),ot+cn-.08,0),St.castShadow=!0,ze.add(St);let Ot=new Ye(new In(lt,an,Tn),ye);if(Ot.position.set(Vt/2+lt/2,ot+cn-.08,0),Ot.castShadow=!0,ze.add(Ot),w.cape!=null){let rt=Vt*1.95,It=rt*.6,te=ot+cn*.28,he=new vr;he.moveTo(-It/2,te/2),he.lineTo(It/2,te/2),he.lineTo(rt/2,-te/2),he.lineTo(-rt/2,-te/2),he.closePath();let pe=new na(he),ie=new Hn({color:xe(S(w.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+ue())),side:yn});ie.bumpMap=He,ie.bumpScale=.12;let le=new Ye(pe,ie);le.position.set(0,ot+cn-te/2+.05,-qt/2-.02),le.rotation.y=Math.PI,le.castShadow=!0,ze.add(le);let Ee=.055,fe=ot+cn+.02,Ae=.02,xt=Vt/2+lt*.5,Et=new Ye(new Ui(Ee,10,8,0,Math.PI*2,0,Math.PI*.55),ie.clone());Et.position.set(-xt,fe,Ae),Et.rotation.x=-Math.PI*.35,Et.rotation.z=Math.PI*.5,Et.scale.set(1.2,.85,1.1),Et.castShadow=!0,ze.add(Et);let Lt=new Ye(new Ui(Ee,10,8,0,Math.PI*2,0,Math.PI*.55),ie.clone());Lt.position.set(xt,fe,Ae),Lt.rotation.x=-Math.PI*.35,Lt.rotation.z=-Math.PI*.5,Lt.scale.set(1.2,.85,1.1),Lt.castShadow=!0,ze.add(Lt)}if(w.belt!=null){let rt=new Hn({color:xe(S(w.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+ue()))});rt.bumpMap=He,rt.bumpScale=.1;let It=.022,te=.04,he=new Ye(new In(Vt+.04,It,qt+te),rt);he.position.set(0,ot+.04,0),he.castShadow=!0,ze.add(he)}if(w.apron!=null){let rt=new Hn({color:xe(S(w.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+ue())),side:yn});rt.bumpMap=He,rt.bumpScale=.12;let It=Vt*.95,te=ot*.85,he=new Ye(new Di(It,te),rt),pe=ot+.2;he.position.set(0,pe-te/2,qt/2+.02),he.castShadow=!0,ze.add(he);let ie=ot+cn+.02,le=Vt/2+lt*.2,Ee=.018,fe=.008,Ae=ie-pe,xt=new Ye(new In(Ee,Ae,fe),rt.clone());xt.position.set(-le,(pe+ie)/2,qt/2+.015),xt.castShadow=!0,ze.add(xt);let Et=new Ye(new In(Ee,Ae,fe),rt.clone());Et.position.set(le,(pe+ie)/2,qt/2+.015),Et.castShadow=!0,ze.add(Et)}let ct=.1,Rt=new Ye(new Ui(ct,12,10),Ge);Rt.position.set(0,ot+cn+ct,0),Rt.castShadow=!0,ze.add(Rt);let Xt=new Mn({color:1710638}),nn=new Ye(new In(.032,.004,.004),Xt);nn.position.set(-.032,.028,ct*.92),Rt.add(nn);let Fn=new Ye(new In(.032,.004,.004),Xt);Fn.position.set(.032,.028,ct*.92),Rt.add(Fn);let di=new Mn({color:2957087}),li=new Ye(new In(.045,.012,.008),di);li.position.set(0,-.028,ct*.92),Rt.add(li);let hn=new Hn({color:W,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+ue()))});hn.bumpMap=He,hn.bumpScale=.15;let Jn=rt=>{let It=ct*.32,te=ct*.22,he=new Ye(new Ai(te*.9,It,5),hn);he.position.set(-ct*.25,ct*.22,ct*.72),he.rotation.x=.35,he.rotation.z=.12,he.castShadow=!0,rt.add(he);let pe=new Ye(new Ai(te,It,5),hn);pe.position.set(ct*.28,ct*.18,ct*.68),pe.rotation.x=.28,pe.rotation.z=-.1,pe.castShadow=!0,rt.add(pe);let ie=new Ye(new Ai(te*.7,It*.9,5),hn);ie.position.set(0,ct*.28,ct*.78),ie.rotation.x=.4,ie.castShadow=!0,rt.add(ie)};if(G==="female"){let rt=new Ye(new Ui(ct*.92,12,10,0,Math.PI*2,0,Math.PI*.52),hn);rt.position.set(0,ct*.28,-ct*.18),rt.rotation.y=.06,rt.rotation.x=-.04,rt.castShadow=!0,Rt.add(rt);let It=new Ye(new In(ct*1.15,ct*2.2,ct*.55),hn);It.position.set(0,-ct*.6,-ct*.95),It.rotation.z=.03,It.castShadow=!0,Rt.add(It),Jn(Rt)}else{let rt=new Ye(new Ui(ct*.9,12,10,0,Math.PI*2,0,Math.PI*.5),hn);rt.position.set(0,ct*.4,-ct*.12),rt.rotation.y=.08,rt.rotation.x=-.05,rt.rotation.z=.04,rt.castShadow=!0,Rt.add(rt);let It=new Ye(new Ui(ct*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),hn);It.position.set(0,ct*.1,-ct*.05),It.rotation.y=.1,It.castShadow=!0,Rt.add(It),Jn(Rt)}return ze.userData.leftLeg=Sn,ze.userData.rightLeg=On,ze.userData.leftArm=St,ze.userData.rightArm=Ot,ze}function Te(g,d){let v=g.userData;if(!v.leftLeg)return;let w=d*Math.PI*2,F=.35,D=.28;v.leftLeg.rotation.x=Math.sin(w)*F,v.rightLeg.rotation.x=Math.sin(w+Math.PI)*F,v.leftArm.rotation.y=Math.sin(w+Math.PI)*D,v.rightArm.rotation.y=Math.sin(w)*D}function $e(g){let d=g.userData;d.leftLeg&&(d.leftLeg.rotation.x=0,d.rightLeg.rotation.x=0,d.leftArm.rotation.y=0,d.rightArm.rotation.y=0)}function De(g){let d=ve(g.player,g.class,g.hairColor);d.position.copy(tt(g.x,g.y)),d.castShadow=!0,d.userData.unitId=g.id;let v=.28,w=.28,F=.12,D=.18,G=.04,H=new Di(D,G),N=new Mn({color:6037528,side:yn,depthTest:!0,depthWrite:!1}),W=new Ye(H,N);W.position.set(0,v+w/2,F/2+.02),W.rotation.x=-Math.PI/2,W.rotation.z=Math.PI/4,W.visible=g.maxHp>0&&g.hp<g.maxHp&&g.hp>0,d.add(W),d.userData.slashMark=W,n.add(d),Qe.set(g.id,d),_t(d,g.maxHp>0&&g.hp/g.maxHp<.35)}function Ue(g){let d=Qe.get(g.id);!d||!d.userData.slashMark||(d.userData.slashMark.visible=g.maxHp>0&&g.hp<g.maxHp&&g.hp>0)}let at=.35;function _t(g,d){if(g)if(d){g.rotation.x=.35,g.scale.setScalar(.96);let v=g.userData;v&&v.leftArm&&v.rightArm&&(v.leftArm.rotation.y=.2,v.rightArm.rotation.y=.2),g.traverse(w=>{w.isMesh&&w.material&&w.material.color&&(w.userData.originalColor||(w.userData.originalColor=w.material.color.clone()),w.material.color.copy(w.userData.originalColor).multiplyScalar(.82))})}else{g.rotation.x=0,g.scale.setScalar(1);let v=g.userData;v&&v.leftArm&&v.rightArm&&(v.leftArm.rotation.y=0,v.rightArm.rotation.y=0),g.traverse(w=>{w.isMesh&&w.material&&w.userData.originalColor&&w.material.color.copy(w.userData.originalColor)})}}function _e(g){if(g.level>=3)return;let d=g.maxHp>0?g.hp/g.maxHp:1;g.level+=1;let v=F=>Math.max(1,Math.ceil(F*1.1)),w=F=>Math.max(1,Math.ceil(F*1.1));g.maxHp=v(g.maxHp),g.maxMp=v(g.maxMp),g.hp=Math.max(1,Math.min(g.maxHp,Math.ceil(d*g.maxHp))),g.mp=Math.max(1,Math.min(g.maxMp,Math.ceil(d*g.maxMp))),g.str=w(g.str),g.agi=w(g.agi),g.vit=w(g.vit),g.dex=w(g.dex),g.luk=w(g.luk),g.int=w(g.int),g.range>2&&(g.range=w(g.range)),console.log("[LEVEL UP]",`${g.name} (${g.class}, P${g.player})`,`\u2192 Lv.${g.level}`,`| HP ${g.hp}/${g.maxHp} MP ${g.mp}/${g.maxMp} STR ${g.str} VIT ${g.vit}`),$t(g)}function $t(g){let d=Qe.get(g.id),v=g.level===3?"levelup level3":g.level===2?"levelup level2":"levelup";if(Yd(g,v),!d)return;let w=performance.now(),F=0;function D(G){F++,F%2===0&&un();let H=G-w,N=Math.min(1,H/Re),W=N<.5?1+.35*(N/.5):1+.35*(1-(N-.5)/.5);d.scale.setScalar(W),N<1?requestAnimationFrame(D):d.scale.setScalar(1)}requestAnimationFrame(D)}function Tt(g,d){let v=Qe.get(g.id);if(!v){d&&d();return}let w=performance.now(),F=0;function D(G){F++,F%2===0&&un();let H=G-w,N=Math.min(1,H/Re),W=N<.5?1+.35*(N/.5):1+.35*(1-(N-.5)/.5);v.scale.setScalar(W),N<1?requestAnimationFrame(D):(v.scale.setScalar(1),d&&d())}requestAnimationFrame(D)}let dt=400,et=280,ke=.45,ft=160,Gt=280,pn=350,wt=500,Re=600,k=!1,Pe=new B,Ie=new B,it=new B,nt=new B;function Jt(g=!1){m=!0;let d=null;if(Dt==="playing"&&Mt.length>0){let G=Mt[Bt];d=de.find(H=>H.id===G&&H.hp>0)}if(d||(d=de.find(G=>G.player===Pt&&G.hp>0)),!d)return;let v=a.position.distanceTo(h);if(v<.1&&(v=o),p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(c).normalize(),it.copy(tt(d.x,d.y)),nt.copy(it).add(p.clone().multiplyScalar(v)),g||k){h.copy(it),a.position.copy(nt),a.lookAt(h),un();return}k=!0,Pe.copy(h),Ie.copy(a.position);let w=performance.now(),F=0;Nn.shadowMap.enabled=!1;function D(G){F++,F%2===0&&un();let H=Math.min(1,(G-w)/dt),N=H*(2-H);h.lerpVectors(Pe,it,N),a.position.lerpVectors(Ie,nt,N),a.lookAt(h),H<1?requestAnimationFrame(D):(Nn.shadowMap.enabled=!0,k=!1)}requestAnimationFrame(D)}let Ut=0,Pt=1,Dt="draft",vt="pvp",Cn=1,Kn=0,Ci=null;async function aa(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{Ci=await navigator.wakeLock.request("screen"),Ci.addEventListener("release",()=>{Ci=null})}catch{Ci=null}}function Bs(){Ci&&(Ci.release().catch(()=>{}),Ci=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&vt==="cvcpu"&&Dt==="playing"&&aa()});let ks="balanced",yi=new Set(Zi),Ji=0,zn=null,ji=new Set,Mt=[],Bt=0,T=null,z=new Map,j=null;function ne(g){if(!g||g.hp<=0)return;j=g.id;let d=document.getElementById("unit-preview-card"),v=document.getElementById("unit-preview-image"),w=document.getElementById("unit-preview-name"),F=document.getElementById("unit-preview-meta"),D=document.getElementById("unit-preview-stats");d.classList.remove("player-1","player-2"),d.classList.add(g.player===1?"player-1":"player-2"),d.classList.toggle("level-2",g.level>=2&&g.level<3),d.classList.toggle("level-3",g.level>=3),v.src=ra[g.class]||"",v.alt=g.name,w.textContent=g.name,F.textContent=`Lv.${g.level} ${g.class} \u2014 Player ${g.player}`,D.innerHTML=[["HP",`${g.hp}/${g.maxHp}`],["MP",`${g.mp}/${g.maxMp}`],["STR",ge(g,"str")],["AGI",ge(g,"agi")],["VIT",ge(g,"vit")],["DEX",ge(g,"dex")],["LUK",ge(g,"luk")],["INT",ge(g,"int")]].map(([H,N])=>`<span class="stat-label">${H}</span><span class="stat-val${H==="HP"?" stat-val-hp":""}">${N}</span>`).join("");let G=g.maxHp>0&&g.hp/g.maxHp<.3;d.classList.toggle("low-hp",G),d.style.display="block"}function K(){j=null;let g=document.getElementById("unit-preview-card");g.classList.remove("low-hp","level-2","level-3"),g.style.display="none"}let Se=!1,Ne=!1,Ke=!1,Ve=null,Be=!1,qe=!1,st=!1,kt=[],ln=new ui;n.add(ln);let Kt=[],Zn=!0,Wt=0,bt=0;function un(){Zn=!0,Wt=performance.now()}let en=new ui;n.add(en);let _i=[],oa=pt,vs=.02,Tr=3368703,Un=13382451;function Oi(g,d){let v=g/2,w=v-d,F=new vr;F.moveTo(-v,-v),F.lineTo(v,-v),F.lineTo(v,v),F.lineTo(-v,v),F.lineTo(-v,-v);let D=new _r;return D.moveTo(-w,-w),D.lineTo(w,-w),D.lineTo(w,w),D.lineTo(-w,w),D.lineTo(-w,-w),F.holes.push(D),new na(F)}let wr=Oi(oa,vs);function mn(g=null){let d=de.filter(v=>v.hp>0&&v.id!==g).map(v=>`${v.id},${v.x},${v.y},${v.player}`).sort().join("|");if(!(mn._lastSig===d&&mn._lastExclude===g)){for(mn._lastSig=d,mn._lastExclude=g,_i.forEach(v=>v.dispose()),_i.length=0;en.children.length;){let v=en.children[0];en.remove(v)}de.filter(v=>v.hp>0&&v.id!==g).forEach(v=>{let w=v.x,F=v.y,G=(Gn+e.height[F][w]*.35)/2+Gn/2,H=w*pt-Ze+pt/2,N=F*pt-Fe+pt/2,W=G+.02,ue=v.player===1?Tr:Un,we=new Mn({color:ue,side:yn}),Q=new Ye(wr,we);Q.rotation.x=-Math.PI/2,Q.position.set(H,W,N),en.add(Q),_i.push(we)}),un()}}let Ar=1.15,Rr={1:8102901,2:15628943},Wn=(()=>{let g=new Mn({color:Rr[1]}),d=new Ye(new Ai(.1,.25,8),g);return d.rotation.x=Math.PI,d.visible=!1,n.add(d),d})();function Lo(){if(Dt!=="playing"||Mt.length===0||st){Wn.visible=!1,Wn.removeFromParent(),n.add(Wn);return}let g=Mt[Bt],d=de.find(w=>w.id===g);if(!d||d.hp<=0){Wn.visible=!1,Wn.removeFromParent(),n.add(Wn);return}let v=Qe.get(g);if(!v){Wn.visible=!1;return}Wn.removeFromParent(),v.add(Wn),Wn.position.set(0,Ar,0),Wn.material&&Wn.material.color.setHex(Rr[d.player]??Rr[1]),Wn.visible=!0}function Oy(g){let d=[[0,1],[0,-1],[1,0],[-1,0]],v=[];for(let[w,F]of d){let D=g.x+w,G=g.y+F;!Er(e,D,G)||de.some(N=>N.id!==g.id&&N.x===D&&N.y===G&&N.hp>0)||v.push(Math.atan2(w,F))}return v}function Lc(g){if(kt.length===0)return g;if(kt.length===1)return kt[0];let d=kt[0],v=Math.abs(Dc(g-d));for(let w=1;w<kt.length;w++){let F=Math.abs(Dc(g-kt[w]));F<v&&(v=F,d=kt[w])}return d}function Dc(g){for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;return g}let bd=1.2,Pi=(()=>{let g=new Ye(new Ai(.12,.35,8),new Mn({color:4500223}));return g.rotation.x=-Math.PI/2,g.visible=!1,n.add(g),g})();function Sd(g,d){if(!st||Mt.length===0||kt.length===0)return;let v=Mt[Bt],w=de.find(we=>we.id===v),F=Qe.get(v);if(!w||!F)return;pa(g,d),es.setFromCamera(ts,a);let D=es.intersectObjects(Z.children,!0);if(D.length===0)return;let G=null;for(let we of D){let Q=we.object;for(;Q&&(Q.userData.gx==null||Q.userData.gy==null);)Q=Q.parent;if(Q&&Q.userData.gx!=null){G=we.point;break}}if(!G)return;let H=tt(w.x,w.y),N=G.x-H.x,W=G.z-H.z;if(N*N+W*W<1e-6)return;let ue=Math.atan2(N,W);F.rotation.y=Lc(ue)}function Ed(){if(Mt.length===0)return;let g=Mt[Bt],d=de.find(F=>F.id===g),v=Qe.get(g);if(!d||!v)return;kt=[[0,1],[0,-1],[1,0],[-1,0]].map(([F,D])=>Math.atan2(F,D)),Pi.removeFromParent(),v.add(Pi),Pi.position.set(0,bd,0),Pi.rotation.x=-Math.PI/2,Pi.rotation.y=0,Pi.rotation.z=Math.PI,Pi.visible=!0,v.rotation.y=kt[0]}function Td(){Pi.visible=!1,Pi.removeFromParent(),n.add(Pi)}let la=[];(function(){let d=Ki,v=[1];for(let w=0;w<Math.floor((d-1)/2);w++)v.push(2,2,1,1);d%2===1?v.push(2):(v.push(2,2),v.push(1)),la=v})();function vi(){return la[Ji]}function Uc(){let g=vi(),d=0;for(let v=0;v<Ji;v++)la[v]===g&&d++;return d+1}function Do(){ae.forEach(v=>{ce.remove(v.mesh),v.mesh.geometry.dispose(),v.mesh.material&&v.mesh.material.dispose&&v.mesh.material.dispose(),v.glowMesh&&(ce.remove(v.glowMesh),v.glowMesh.geometry.dispose(),v.glowMesh.material&&v.glowMesh.material.dispose&&v.glowMesh.material.dispose())}),ae.clear(),be={30:!1,20:!1,10:!1};let g=Ki,d=[1];for(let v=0;v<Math.floor((g-1)/2);v++)d.push(2,2,1,1);g%2===1?d.push(2):(d.push(2,2),d.push(1)),la=d,Dt="draft",Ji=0,yi=new Set(Zi),zn=null,ji.clear(),bn(),Uo(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function Nc(){return de.filter(g=>g.hp>0).sort((g,d)=>{let v=ge(g,"agi"),w=ge(d,"agi");if(w!==v)return w-v;let F=ge(g,"dex");return ge(d,"dex")-F}).map(g=>g.id)}function wd(){document.getElementById("draft-panel").style.display="none";let g=document.getElementById("draft-placement-card");g&&(g.style.display="none",g.innerHTML=""),bn();let d=document.getElementById("battle-start-overlay");d&&(d.classList.add("visible"),d.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let v=document.getElementById("draft-placement-card");for(v&&(v.style.display="none",v.innerHTML=""),Dt="playing",Ut=0,Mt=Nc(),Bt=0;Bt<Mt.length&&de.find(D=>D.id===Mt[Bt]).hp<=0;)Bt++;Bt>=Mt.length&&(Bt=0);let w=de.find(D=>D.id===Mt[Bt]);Pt=w?w.player:1,Be=!1,qe=!1,T=Mt[Bt],setTimeout(()=>{d&&(d.classList.remove("visible"),d.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",mn(),jt(),Lo(),Jt(!0),vt==="cvcpu"&&aa()},4e3)}function Uo(){let g=document.getElementById("draft-panel"),d=document.getElementById("draft-title"),v=document.getElementById("draft-classes"),w=document.getElementById("draft-message"),F=document.getElementById("turn-player"),D=document.getElementById("draft-placement-card");if(zn){g.style.display="none",F.textContent=`Draft: Player ${vi()} \u2014 place ${Qt[zn].name}`;let H=vi();D.style.display="flex",D.classList.remove("player-1","player-2"),D.classList.add("player-"+H),D.style.left=H===1?"24px":"",D.style.right=H===2?"24px":"";let N=[...de.filter(we=>we.player===H).map(we=>we.class),zn],W=(we,Q)=>{let oe=Qt[we];return`
        <div class="draft-class-card${Q?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${ra[we]||""}" alt="${oe.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
      `},ue=3;if(N.length>ue){D.classList.add("draft-placement-cols");let we=[];for(let oe=0;oe<N.length;oe+=ue)we.push(N.slice(oe,oe+ue));let Q=N.length-1;D.innerHTML=we.map((oe,ye)=>{let Ge=ye===we.length-1,ze=oe.map((ot,Nt)=>{let Sn=ye*ue+Nt===Q;return W(ot,Sn)}).join("");return`<div class="draft-placement-col${Ge?" draft-placement-col-current":""}">${ze}</div>`}).join("")}else D.classList.remove("draft-placement-cols"),D.innerHTML=N.map((we,Q)=>{let oe=Q===N.length-1;return W(we,oe)}).join("");vt==="pvcpu"&&vi()===2&&setTimeout(Pr,500),vt==="cvcpu"&&setTimeout(Pr,500);return}D.style.display="none",D.innerHTML="",Dt==="draft"&&(g.style.display="flex");let G=vi();d.textContent=`Player ${G}: Pick a class (${Uc()}/${Ki})`,w.textContent="",v.innerHTML="",F.textContent=`Draft: Player ${G} \u2014 pick a class`,Ry([...Zi]).forEach(H=>{let N=yi.has(H),W=Qt[H],ue=document.createElement("button");ue.type="button",ue.className="draft-class-card"+(N?"":" draft-class-card-selected"),ue.disabled=!N,ue.innerHTML=`
          <img class="draft-class-card-image" src="${ra[H]||""}" alt="${W.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${W.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${W.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${W.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${W.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${W.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${W.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${W.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${W.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${W.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${W.range}</span>
            </div>
          </div>
        `,N&&ue.addEventListener("click",()=>Oc(H)),v.appendChild(ue)}),vt==="pvcpu"&&vi()===2&&setTimeout(Pr,500),vt==="cvcpu"&&setTimeout(Pr,500)}function Oc(g){if(!yi.has(g)||zn)return;zn=g;let d=vi(),v=new Set(de.map(D=>D.y*e.w+D.x)),w=Iy(e,d,v),F=xd(e,w);ji=new Set(F.map(D=>D.gy*e.w+D.gx)),Bd(F),Uo()}function Fc(g,d){if(!zn)return;let v=vi(),w=d*e.w+g;if(!ji.has(w))return;let F=Qt[zn],D={id:$++,player:v,x:g,y:d,level:1,name:F.name,class:zn,hairColor:(Co[zn]||Co.knight).hair,hp:F.hp,maxHp:F.maxHp,mp:F.mp,maxMp:F.maxMp,str:F.str,agi:F.agi,vit:F.vit,dex:F.dex,luk:F.luk,int:F.int,range:F.range};de.push(D),De(D);let G=Qe.get(D.id);G&&(G.rotation.y=D.player===1?Math.PI:0),yi.delete(zn),zn=null,ji.clear(),bn();let H=document.getElementById("draft-placement-card");if(H&&(H.style.display="none",H.innerHTML=""),Ji++,Ji>=2*Ki){wd();return}let N=vi(),W=Uc(),ue=document.getElementById("draft-panel"),we=document.getElementById("draft-title"),Q=document.getElementById("draft-message"),oe=document.getElementById("draft-classes"),ye=document.getElementById("turn-player");ue&&we&&oe&&ye&&(ue.style.display="flex",we.textContent=`Player ${N}: Pick a class (${W}/${Ki})`,Q&&(Q.textContent="Get ready\u2026"),oe.innerHTML="",ye.textContent=`Draft: Player ${N} \u2014 pick a class`),setTimeout(Uo,1500)}function jt(){jt._pending||(jt._pending=!0,requestAnimationFrame(()=>{jt._pending=!1,Ad()}))}function Ad(){let g=jt._cache||(jt._cache={}),d=g.turnEl||(g.turnEl=document.getElementById("turn-player")),v=g.menuLabel||(g.menuLabel=document.getElementById("menu-label")),w=g.turnMenu||(g.turnMenu=document.getElementById("turn-menu")),F=g.unitInfo||(g.unitInfo=document.getElementById("unit-info")),D=g.unitNameEl||(g.unitNameEl=document.getElementById("unit-name")),G=g.unitLevelClassEl||(g.unitLevelClassEl=document.getElementById("unit-level-class")),H=g.unitStatsEl||(g.unitStatsEl=document.getElementById("unit-stats")),N=g.unitClassImageEl||(g.unitClassImageEl=document.getElementById("unit-class-image"));if(Dt==="playing"&&de.forEach(Q=>{if(Q.hp<=0)return;let oe=Qe.get(Q.id);oe&&_t(oe,Q.maxHp>0&&Q.hp/Q.maxHp<at)}),w.classList.remove("player-1","player-2"),w.classList.add(Pt===1?"player-1":"player-2"),w.classList.toggle("level-2",!1),w.classList.toggle("level-3",!1),Dt==="playing"&&Mt.length>0){let Q=Mt[Bt];de.find(ye=>ye.id===Q&&ye.hp>0)&&(T==null||!de.find(ye=>ye.id===T&&ye.hp>0))&&(T=Q)}if(T!=null){let Q=de.find(oe=>oe.id===T);if(Q&&Q.hp>0){F.classList.remove("no-unit");let oe=Q.maxHp>0&&Q.hp/Q.maxHp<.25;w.classList.toggle("low-hp",oe),w.classList.toggle("level-2",Q.level>=2&&Q.level<3),w.classList.toggle("level-3",Q.level>=3),D.textContent=Q.name,G.textContent=`Lv.${Q.level} ${Q.class}`,N.src=ra[Q.class]||"",N.alt=Q.name,H.innerHTML=[["HP",`${Q.hp}/${Q.maxHp}`],["MP",`${Q.mp}/${Q.maxMp}`],["STR",ge(Q,"str")],["AGI",ge(Q,"agi")],["VIT",ge(Q,"vit")],["DEX",ge(Q,"dex")],["LUK",ge(Q,"luk")],["INT",ge(Q,"int")]].map(([ye,Ge])=>`<span>${ye}</span><span class="stat-val${ye==="HP"?" stat-val-hp":""}">${Ge}</span>`).join("")}else w.classList.remove("low-hp","level-2","level-3"),F.classList.add("no-unit"),D.textContent="\u2014 Select a unit \u2014",G.textContent="",H.textContent="",N.src="",N.alt=""}else w.classList.remove("low-hp","level-2","level-3"),F.classList.add("no-unit"),D.textContent="\u2014 Select a unit \u2014",G.textContent="",H.textContent="",N.src="",N.alt="";if(T!=null)d.textContent=`Player ${Pt} \u2014 Unit ${D.innerHTML} active`;else{let Q=Mt.length?de.find(oe=>oe.id===Mt[Bt]):null;d.textContent=Q?`${Q.name} (Player ${Pt})`:`Player ${Pt}`}v.textContent=`Player ${Pt}`;let W=g.btnAttack||(g.btnAttack=document.getElementById("btn-attack")),ue=g.btnSkill||(g.btnSkill=document.getElementById("btn-skill")),we=g.btnEnd||(g.btnEnd=document.getElementById("btn-end"));if(vt==="cvcpu"&&Dt==="playing")W.disabled=!0,ue.disabled=!0,we&&(we.disabled=!0),d.textContent=`Player ${Pt} (CPU)`;else if(st)W.disabled=!0,ue.disabled=!0,d.textContent="Click on map to choose facing direction";else if(Dt==="playing"){W.disabled=qe;let Q=Mt.length?Mt[Bt]:null,oe=Q?de.find(ze=>ze.id===Q&&ze.hp>0):null,ye=vt!=="cvcpu"&&(vt!=="pvcpu"||Pt===1),Ge=ye&&oe&&!qe?ko(oe):[];ue.disabled=qe||!ye||Ge.length===0,we&&(we.disabled=!1)}if(Dt==="playing"){let Q=Math.min(Ut+1,$i);d.textContent=(d.textContent||"")+` \u2014 Turn ${Q}/${$i}`;let oe=g.turnsLeftEl||(g.turnsLeftEl=document.getElementById("turns-left")),ye=g.turnsLeftValueEl||(g.turnsLeftValueEl=document.getElementById("turns-left-value"));if(oe&&ye){oe.style.display="";let Ge=Math.max(0,$i-Ut);ye.textContent=String(Ge),oe.classList.toggle("turns-left-low",Ge<=10),(Ge===30||Ge===20||Ge===10)&&(be[Ge]||(ut(Ge),be[Ge]=!0))}}else{let Q=g.turnsLeftEl||(g.turnsLeftEl=document.getElementById("turns-left"));Q&&(Q.style.display="none")}Dt==="playing"&&Bo(Pt)&&!Se&&setTimeout(dn,700)}function rn(){un(),K(),Ne=!1,Ke=!1,Ve=null,st=!1,kt=[],Td(),bn();let g=Mt.length;if(g===0)return;let d=Mt[Bt],v=de.find(H=>H.id===d);if(v&&v.tempDebuff&&v.tempDebuff.duration--,v&&v.tempDebuff&&v.tempDebuff.duration<=0&&(v.tempDebuff=void 0),v&&v.tempBuff&&v.tempBuff.duration--,v&&v.tempBuff&&v.tempBuff.duration<=0&&(v.tempBuff=void 0),v&&v.hp>0){let H=Math.ceil(ge(v,"int")*.15);v.mp=Math.min(v.maxMp,v.mp+H)}if(v&&v.hp>0){let H=v.x,N=v.y;e.type[N][H]===Je.CENTER&&v.level===1&&_e(v);let W=v.player===1?Je.BASE_TOP:Je.BASE_BOTTOM;e.type[N][H]===W&&v.level===2&&_e(v)}if(Ut++,Ut>=$i){$d();return}let w=(Bt+1)%g,F=0;for(;F<g;){let H=Mt[w],N=de.find(W=>W.id===H);if(N&&N.hp>0)break;w=(w+1)%g,F++}let D=w===0;Bt=w;for(let H=0;H<g;H++){let N=Mt[Bt],W=de.find(we=>we.id===N);if(!W||W.hp<=0)break;let ue=W.tempDebuff&&W.tempDebuff.poison!=null?W.tempDebuff.poison:0;if(ue<=0)break;if(console.log("tempDebuff damage",{debuffKey:"poison",damage:ue}),W.hp=Math.max(0,W.hp-ue),Xn(W.x,W.y,String(ue),!1,"poison"),Ue(W),W.hp<=0){Pn(W),w=(Bt+1)%g;let we=0;for(;we<g;){let Q=Mt[w],oe=de.find(ye=>ye.id===Q);if(oe&&oe.hp>0)break;w=(w+1)%g,we++}Bt=w;continue}break}let G=de.find(H=>H.id===Mt[Bt]);Pt=G?G.player:1,Be=!1,qe=!1,T=Mt[Bt],D&&(Mt=Nc(),Bt=0),jt(),Lo(),Jt()}document.getElementById("btn-attack").addEventListener("click",()=>{if(Se||qe||Dt!=="playing"||Mt.length===0)return;K();let g=Mt[Bt],d=de.find(F=>F.id===g);if(!d||d.hp<=0)return;let v=d.range!=null?d.range:1;T=g,Ne=!0;let w=yd(e,d.x,d.y,v);z=new Map,w.forEach((F,D)=>{let G=D%e.w,H=Math.floor(D/e.w);Fs(e,d.x,d.y,G,H)&&z.set(D,F)}),kd(z),jt()}),document.getElementById("btn-skill").addEventListener("click",g=>{if(g.preventDefault(),g.stopPropagation(),Se||qe)return;let d=Mt[Bt],v=d?de.find(H=>H.id===d&&H.hp>0):null;if(!v||v.player!==Pt)return;let w=document.getElementById("skill-list-overlay"),F=document.getElementById("btn-skill");if(!F)return;if(w&&w.style.display==="block"){w.style.display="none";return}let D=ko(v),G=F.getBoundingClientRect();w||(w=document.createElement("div"),w.id="skill-list-overlay",w.className="skill-list-overlay",w.setAttribute("aria-hidden","true"),document.body.appendChild(w)),w.style.left=`${G.left}px`,w.style.top=`${G.top-4}px`,w.style.transform="translateY(-100%)",w.style.right="auto",w.style.bottom="auto",w.style.display="none",D.length===0?w.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(w.innerHTML=D.map((H,N)=>`<button type="button" class="skill-option" data-skill-index="${N}" ${H.disabled?"disabled":""}>
          <span class="skill-name">${H.name}</span> <span class="skill-meta">${H.cost} MP \xB7 Lv.${H.level}</span><br/>
          <span class="skill-meta">${H.description}</span>
        </button>`).join(""),w.querySelectorAll(".skill-option").forEach((H,N)=>{H.addEventListener("click",W=>{W.preventDefault(),W.stopPropagation();let ue=D[N];if(Ve=ue,w.style.display="none",w.setAttribute("aria-hidden","true"),ue.target==="self"){if(v.mp<ue.cost)return;v.mp-=ue.cost,qe=!0,fa(v,v,ue,{showFloatingCombatText:Xn,handleUnitDeath:Pn,updateUnitSlashVisibility:Ue,updateTurnUI:jt},()=>{bn(),Ke=!1,Ve=null,Vs=new Set,Be?rn():jt()}),jt();return}if(ue.target==="ally"&&Ir(v,ue,de).filter(oe=>oe.targetUnit&&oe.targetUnit.id!==v.id).length===0&&v.mp>=ue.cost){v.mp-=ue.cost,qe=!0,fa(v,v,ue,{showFloatingCombatText:Xn,handleUnitDeath:Pn,updateUnitSlashVisibility:Ue,updateTurnUI:jt},()=>{bn(),Ke=!1,Ve=null,Vs=new Set,Be?rn():jt()}),jt();return}Ke=!0,Ne=!1,Fd(v,ue),jt()})})),requestAnimationFrame(()=>{w.style.display="block",w.style.visibility="visible",w.setAttribute("aria-hidden","false")})}),document.addEventListener("click",g=>{let d=document.getElementById("skill-list-overlay"),v=document.getElementById("btn-skill"),w=document.querySelector(".skill-wrap");!d||d.style.display!=="block"||w&&w.contains(g.target)||d.contains(g.target)||(d.style.display="none",d.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(Se||st||Dt!=="playing"||Mt.length===0)return;let g=Mt[Bt],d=de.find(w=>w.id===g);if(!d||d.hp<=0)return;st=!0,T=null,Ne=!1,z=new Map,bn(),Ed(),Lo();let v=document.getElementById("turn-player");v.textContent="Click on map to choose facing direction",jt()}),h.set(0,8,0),a.position.copy(h).add(c),a.lookAt(h);let ca=document.getElementById("mode-select-overlay"),Bc=document.getElementById("mode-carousel-track"),kc=document.getElementById("mode-carousel-prev"),Hc=document.getElementById("mode-carousel-next"),ha=document.getElementById("mode-carousel-dots"),Fi=document.getElementById("mode-play-btn"),zc=document.getElementById("mode-settings-pvp"),Vc=document.getElementById("mode-settings-pvp-map"),Gc=document.getElementById("mode-settings-pvp-none"),Wc=document.getElementById("mode-settings-options"),Xc=document.getElementById("pvp-map-mode"),Cr=document.getElementById("ai-draft-preference"),Rd=document.getElementById("cvcpu-num-games"),qc=document.getElementById("cvcpu-grid-w"),Yc=document.getElementById("cvcpu-grid-h"),$c=document.getElementById("cvcpu-center-plaza"),Kc=document.getElementById("cvcpu-max-turns"),Hs=document.getElementById("move-speed"),zs=document.getElementById("draft-picks-per-player"),ua=_s?["pvp","pvcpu","cvcpu","story"]:["pvp","pvcpu","story"],No=ua.length-1,ni=0;function Oo(){return ni===No}function da(g){ni=Math.max(0,Math.min(g,No)),Bc&&(Bc.style.transform=`translateX(-${ni*100}%)`),ha&&ha.querySelectorAll(".mode-dot").forEach((v,w)=>{v.classList.toggle("active",w===ni),v.setAttribute("aria-selected",w===ni)}),zc&&(zc.style.display=ni===0||ni===1||Oo()?"":"none"),Vc&&(Vc.style.display=ni===0||ni===1?"":"none"),Gc&&(Gc.style.display=Oo()?"":"none"),Wc&&(Wc.style.display=_s&&ua[ni]==="cvcpu"?"":"none");let d=Fi?.querySelector(".mode-play-text");Fi&&d&&(Oo()?(Fi.disabled=!0,d.textContent="Coming Soon"):(Fi.disabled=!1,d.textContent="Play game"))}if(ha)for(let g=0;g<=No;g++){let d=document.createElement("button");d.type="button",d.className="mode-dot"+(g===0?" active":""),d.setAttribute("role","tab"),d.setAttribute("aria-label",`Mode ${g+1}`),d.setAttribute("aria-selected",g===0),d.addEventListener("click",()=>da(g)),ha.appendChild(d)}if(kc&&kc.addEventListener("click",()=>da(ni-1)),Hc&&Hc.addEventListener("click",()=>da(ni+1)),ca&&!_s){let g=ca.querySelector('.mode-slide[data-mode="cvcpu"]');g&&g.parentNode&&g.parentNode.removeChild(g)}da(0),Hs&&(Hs.value=String(Os),Hs.addEventListener("input",()=>{let g=parseInt(Hs.value,10);!Number.isNaN(g)&&g>=0&&(Os=g)}),Hs.addEventListener("change",()=>{let g=parseInt(Hs.value,10);!Number.isNaN(g)&&g>=0&&(Os=g)})),zs&&(zs.value=String(Ki),zs.addEventListener("input",()=>{let g=parseInt(zs.value,10);!Number.isNaN(g)&&g>=1&&(Ki=g)}),zs.addEventListener("change",()=>{let g=parseInt(zs.value,10);!Number.isNaN(g)&&g>=1&&(Ki=g)})),Cr&&(Ty.forEach(g=>{let d=document.createElement("option");d.value=g.value,d.textContent=g.label,Cr.appendChild(d)}),Cr.value=ks,Cr.addEventListener("change",()=>{ks=Cr.value}));let Qi=new Audio;Qi.loop=!0,Qi.volume=.3,Qi.preload="auto";let Fo=window.location.href.replace(/[^/]*$/,""),Zc=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:Fo+(Fo.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Qi.src=Zc,Qi.addEventListener("error",()=>{let g=Fo+"assets/music/tavern.mp3";g!==Zc&&(Qi.src=g)});function Cd(){Qi.paused&&Qi.play().catch(()=>{})}function Pd(){if(ua[ni]==="story")return;let g=ua[ni];if(Cd(),vt=g,g==="pvp"||g==="pvcpu"){let d=Xc&&Xc.value||"long";yt(d)}else g==="cvcpu"&&(_s&&qc&&Yc&&$c&&(Ac=Math.max(5,Math.min(50,parseInt(qc.value,10)||21)),Rc=Math.max(5,Math.min(50,parseInt(Yc.value,10)||11)),Cc=Math.max(.1,Math.min(.9,parseFloat($c.value)||.29))),_s&&Kc&&($i=Math.max(10,Math.min(999,parseInt(Kc.value,10)||200))),yt("long"));g==="cvcpu"&&(Cn=Math.max(1,parseInt(Rd?.value,10)||1),Kn=0),ca&&ca.classList.add("hidden"),Do()}Fi?Fi.addEventListener("click",g=>{if(Fi.disabled)return;let d=Fi.querySelector(".mode-play-ripple");if(d){let v=Fi.getBoundingClientRect();d.style.left=g.clientX-v.left+"px",d.style.top=g.clientY-v.top+"px",d.style.width=d.style.height="20px",d.style.marginLeft=d.style.marginTop="-10px",d.classList.remove("ripple"),d.offsetHeight,d.classList.add("ripple"),setTimeout(()=>d.classList.remove("ripple"),500)}Pd()}):Do();function Bo(g){return vt==="pvcpu"&&g===2||vt==="cvcpu"}function Id(){let g=Zi.filter(Q=>yi.has(Q));if(g.length===0)return null;let d=ks||"balanced";if(d==="random")return g[Math.floor(Math.random()*g.length)];if(d==="custom")return wy.filter(oe=>yi.has(oe))[0]??g[0]??null;let v=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function w(Q){let oe=Qt[Q];if(!oe)return 1/0;let ye=v.map(ze=>oe[ze]??0),Ge=ye.reduce((ze,ot)=>ze+ot,0)/ye.length;return ye.reduce((ze,ot)=>ze+(ot-Ge)**2,0)/ye.length}if(d==="tanky")return[...g].sort((oe,ye)=>{let Ge=Qt[oe]?.hp??0,ze=Qt[ye]?.hp??0;return ze!==Ge?ze-Ge:(Qt[ye]?.vit??0)-(Qt[oe]?.vit??0)})[0]??null;if(d==="aggressive")return[...g].sort((oe,ye)=>{let Ge=Qt[oe]?.str??0,ze=Qt[ye]?.str??0;return ze!==Ge?ze-Ge:(Qt[ye]?.agi??0)-(Qt[oe]?.agi??0)})[0]??null;if(d==="scout")return[...g].sort((oe,ye)=>{let Ge=Qt[oe]?.agi??0,ze=Qt[ye]?.agi??0;return ze!==Ge?ze-Ge:(Qt[ye]?.dex??0)-(Qt[oe]?.dex??0)})[0]??null;if(d==="ranged")return[...g].sort((oe,ye)=>{let Ge=Qt[oe]?.range??0,ze=Qt[ye]?.range??0;return ze!==Ge?ze-Ge:(Qt[ye]?.dex??0)-(Qt[oe]?.dex??0)})[0]??null;if(d==="caster")return[...g].sort((oe,ye)=>{let Ge=Qt[oe]?.int??0,ze=Qt[ye]?.int??0;return ze!==Ge?ze-Ge:(Qt[ye]?.mp??0)-(Qt[oe]?.mp??0)})[0]??null;let F=vi(),G=Ay(Ki),H=de.filter(Q=>Q.player===F).map(Q=>Q.class),N={};for(let Q of Object.keys(Ro))N[Q]=0;for(let Q of H)for(let oe of Object.keys(Ro))if(Ro[oe].includes(Q)){N[oe]++;break}let W=Q=>Math.max(0,(G[Q]??0)-(N[Q]??0)),ue=Q=>{for(let[oe,ye]of Object.entries(Ro))if(ye.includes(Q))return oe;return null};return[...g].sort((Q,oe)=>{let ye=ue(Q),Ge=ue(oe),ze=ye!=null?W(ye):0,ot=Ge!=null?W(Ge):0;if(ot!==ze)return ot-ze;let Nt=Qt[Q]?.hp??0,tn=Qt[oe]?.hp??0;return tn!==Nt?tn-Nt:w(Q)-w(oe)})[0]??null}function Pr(){if(Dt!=="draft"||!Bo(vi()))return;if(!zn){let v=Id();v&&Oc(v),setTimeout(Pr,500);return}let g=Array.from(ji).map(v=>({gx:v%e.w,gy:Math.floor(v/e.w)})),d=xd(e,g);if(d.length>0){let{gx:v,gy:w}=d[0];Fc(v,w)}}function Jc(){let g=[];for(let d=0;d<e.h;d++)for(let v=0;v<e.w;v++)e.type[d][v]===Je.CENTER&&g.push({gx:v,gy:d});return g}function Ld(g){let d=[],v=g===1?Je.BASE_TOP:Je.BASE_BOTTOM;for(let w=0;w<e.h;w++)for(let F=0;F<e.w;F++)e.type[w][F]===v&&d.push({gx:F,gy:w});return d}function oi(g,d,v,w){return Math.abs(g-v)+Math.abs(d-w)}function Dd(g){let d=g.range!=null?g.range:1,v=[];for(let w of de){if(w.hp<=0||w.player===g.player)continue;let F=oi(g.x,g.y,w.x,w.y);F<=d&&F>0&&Fs(e,g.x,g.y,w.x,w.y)&&v.push({target:w,dist:F})}return v}function Ud(g,d,v){let w=v??de.filter(D=>D.hp>0&&D.player===g.player&&D.id!==g.id),F=d??de.filter(D=>D.hp>0&&D.player!==g.player);for(let D of w)for(let G of F){let H=G.range!=null?G.range:1,N=oi(G.x,G.y,D.x,D.y);if(N<=H&&N>0&&Fs(e,G.x,G.y,D.x,D.y))return!0}return!1}function zt(g,d,v,w){let F=g.x,D=g.y,G=ys(e,g.x,g.y,d,v,de,g);if(!G||G.length<=1){w&&w();return}T=null,bn(),Se=!0,m=!0,mn(g.id),un();let H=Qe.get(g.id),N=1;function W(){if(N>=G.length){g.x=G[G.length-1].x,g.y=G[G.length-1].y,je(g),Se=!1,$e(H),mn(),z=new Map,Be=!0,w&&w();return}let ue=G[N-1],we=G[N],Q=tt(ue.x,ue.y).clone(),oe=tt(we.x,we.y).clone(),ye=oe.x-Q.x,Ge=oe.z-Q.z;ye*ye+Ge*Ge>1e-6&&(H.rotation.y=Math.atan2(ye,Ge));let ze=performance.now(),ot=0;function Nt(tn){ot++,ot%2===0&&un();let Sn=Math.min(1,(tn-ze)/Os),cn=(Vt=>Vt*Vt*(3-2*Vt))(Sn);if(H.position.lerpVectors(Q,oe,cn),Te(H,cn),m){let Vt=a.position.distanceTo(h),qt=Vt<.1?o:Vt;p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(c).normalize(),h.lerp(H.position,l),a.position.copy(h).add(p.clone().multiplyScalar(qt)),a.lookAt(h)}Sn<1?requestAnimationFrame(Nt):(N++,W())}requestAnimationFrame(Nt)}W()}function jc(g,d){let v=ge(d,"agi")*.7+ge(d,"luk")*.3,F=Math.random()*Math.max(.001,v)<=ge(g,"dex"),D=0;if(F){let qt=ge(g,"str")*.7+ge(g,"dex")*.2+ge(g,"int")*.1-(ge(d,"vit")*.3+ge(d,"luk")*.2);D=Math.max(1,Math.floor(qt))}qe=!0,T=null,Ne=!1,bn(),console.log("[ATTACK]",`${g.name} (${g.class}, P${g.player})`,"\u2192",`${d.name} (${d.class}, P${d.player})`,F?`${D} dmg`:"MISS",`| ${d.name} HP ${d.hp} \u2192 ${Math.max(0,d.hp-D)}/${d.maxHp}`);let G=Qe.get(g.id);if(!G||!G.userData.rightArm){Se=!0,F?(d.hp=Math.max(0,d.hp-D),Xn(d.x,d.y,String(D),!1),Ue(d),d.hp<=0&&Pn(d,g)):Xn(d.x,d.y,"MISS",!0),setTimeout(()=>{Se=!1,Be?rn():jt()},400);return}let H=tt(g.x,g.y).clone(),N=tt(d.x,d.y).clone(),W=H.clone().lerp(N,.35),ue=N.x-H.x,we=N.z-H.z;if(ue*ue+we*we>1e-6&&(G.rotation.y=Math.atan2(ue,we)),(g.range!=null?g.range:1)>2){let Jn=function(rt){hn++,hn%2===0&&un();let It=rt-li,te=Math.min(1,It/Gt);if(lt.position.lerpVectors(Fn,di,te),Tn){let he=Math.sin(te*Math.PI)*1.1;Tn.rotation.y=-he}if(!Rt&&te>=1&&(Rt=!0,n.remove(lt),qt.dispose(),gn.dispose(),F?(d.hp=Math.max(0,d.hp-D),Xn(d.x,d.y,String(D),!1),d.hp<=0&&(nn=!0),Qe.get(d.id)?Xt=rt:nn&&(Pn(d,g),nn=!1),Ue(d)):Xn(d.x,d.y,"MISS",!0)),Xt!=null&&F){let he=Qe.get(d.id);if(he){let pe=Math.min(1,(rt-Xt)/ft),ie=1-pe;ns.copy(Ot).multiplyScalar(ct*ie),he.position.copy(St).add(ns),pe>=1&&(he.position.copy(St),Xt=null,nn&&(Pn(d,g),nn=!1))}else Xt=null,nn&&(Pn(d,g),nn=!1)}if(te<1)requestAnimationFrame(Jn);else{Tn&&(Tn.rotation.y=0);let he=Xt==null;he&&nn&&(Pn(d,g),nn=!1),he?(Nn.shadowMap.enabled=!0,Se=!1,setTimeout(Be?()=>rn():()=>jt(),400)):requestAnimationFrame(Jn)}},qt=new xs(.035,.035,.4,6),gn=new Mn({color:16763972}),lt=new Ye(qt,gn);lt.position.copy(H),lt.position.y+=.6;let an=N.clone().sub(H).normalize();lt.quaternion.setFromUnitVectors(new B(0,1,0),an),n.add(lt),Se=!0;let Tn=G.userData.rightArm,St=tt(d.x,d.y).clone(),Ot=N.clone().sub(H).normalize(),ct=.4,Rt=!1,Xt=null,nn=!1,Fn=lt.position.clone(),di=N.clone();di.y+=.6;let li=performance.now(),hn=0;Nn.shadowMap.enabled=!1,requestAnimationFrame(Jn);return}let ye=!1,Ge=performance.now(),ze=G.userData.rightArm,ot=null,Nt=!1,tn=tt(d.x,d.y).clone(),Sn=N.clone().sub(H).normalize(),On=.4,cn=0;function Vt(qt){cn++,cn%2===0&&un();let gn=qt-Ge,lt=Math.min(1,gn/et),an=lt<=.4?lt/.4:1,Tn=lt>.4?(lt-.4)/.6:0;lt<=.4?G.position.lerpVectors(H,W,an):G.position.lerpVectors(W,H,Tn);let St=lt<=.35?lt/.35:lt<=.7?(.7-lt)/.35:0;if(ze.rotation.y=-St*1.1,!ye&&lt>=ke&&(ye=!0,F?(d.hp=Math.max(0,d.hp-D),Xn(d.x,d.y,String(D),!1),d.hp<=0&&(Nt=!0),Ue(d),Qe.get(d.id)?ot=qt:Nt&&(Pn(d,g),Nt=!1)):Xn(d.x,d.y,"MISS",!0)),ot!=null&&F){let Ot=Qe.get(d.id);if(Ot){let ct=Math.min(1,(qt-ot)/ft),Rt=1-ct;ns.copy(Sn).multiplyScalar(On*Rt),Ot.position.copy(tn).add(ns),ct>=1&&(Ot.position.copy(tn),ot=null,Nt&&(Pn(d,g),Nt=!1))}else ot=null,Nt&&(Pn(d,g),Nt=!1)}if(lt<1)requestAnimationFrame(Vt);else{G.position.copy(H),ze.rotation.y=0;let Ot=ot==null;Ot&&Nt&&(Pn(d,g),Nt=!1),Ot?(Nn.shadowMap.enabled=!0,Se=!1,setTimeout(Be?()=>rn():()=>jt(),400)):requestAnimationFrame(Vt)}}Se=!0,Nn.shadowMap.enabled=!1,requestAnimationFrame(Vt)}function Nd(g,d){let v=tt(g,d);v.y+=.4;let w=new Ui(.1,12,12),F=new Mn({color:8930559,transparent:!0,opacity:.9}),D=new Ye(w,F);D.position.copy(v),n.add(D);let G=performance.now(),H=0;function N(W){H++,H%2===0&&un();let ue=W-G,we=Math.min(1,ue/pn),Q=we*(2-we);D.scale.setScalar(Q*4.5),F.opacity=.9*(1-we),we<1?requestAnimationFrame(N):(n.remove(D),w.dispose(),F.dispose())}requestAnimationFrame(N)}function fa(g,d,v,w,F){if(v.target==="enemy"&&d==null){setTimeout(()=>{w.updateTurnUI&&w.updateTurnUI(),F&&F()},400);return}let G=(v.range??0)>2&&d!=null&&(d.x!==g.x||d.y!==g.y),H=!G&&d!=null&&(d.x!==g.x||d.y!==g.y);if(!G&&!H){Se=!0,Po(v.effectKey,g,d,w);let St=v.target==="self"||v.target==="ally",Ot=v.target==="self"?g:d;St&&Ot?Tt(Ot,()=>{setTimeout(()=>{Se=!1,w.updateTurnUI&&w.updateTurnUI(),F&&F()},400)}):setTimeout(()=>{Se=!1,w.updateTurnUI&&w.updateTurnUI(),F&&F()},400);return}if(H){let ie=function(le){pe++,pe%2===0&&un();let Ee=le-he,fe=Math.min(1,Ee/et),Ae=fe<=.4?fe/.4:1,xt=fe>.4?(fe-.4)/.6:0;fe<=.4?St.position.lerpVectors(Ot,Rt,Ae):St.position.lerpVectors(Rt,Ot,xt);let Et=fe<=.35?fe/.35:fe<=.7?(.7-fe)/.35:0;if(hn.rotation.y=-Et*1.1,!Jn&&fe>=ke&&(Jn=!0,Po(v.effectKey,g,d,te),d.hp<=0&&(It=!0),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(d),Qe.get(d.id)&&v.target!=="ally"?rt=le:It&&(Pn(d,g),It=!1)),rt!=null){let Lt=Qe.get(d.id);if(Lt){let Ht=Math.min(1,(le-rt)/ft),mt=1-Ht;ns.copy(di).multiplyScalar(li*mt),Lt.position.copy(Fn).add(ns),Ht>=1&&(Lt.position.copy(Fn),rt=null,It&&(Pn(d,g),It=!1))}else rt=null,It&&(Pn(d,g),It=!1)}fe<1?requestAnimationFrame(ie):(St.position.copy(Ot),hn.rotation.y=0,rt==null&&It&&(Pn(d,g),It=!1),rt==null?(Nn.shadowMap.enabled=!0,Se=!1,setTimeout(()=>{w.updateTurnUI&&w.updateTurnUI(),F&&F()},400)):requestAnimationFrame(ie))},St=Qe.get(g.id);if(!St||!St.userData.rightArm){Se=!0,Po(v.effectKey,g,d,w),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(d),setTimeout(()=>{Se=!1,w.updateTurnUI&&w.updateTurnUI(),F&&F()},400);return}Se=!0;let Ot=tt(g.x,g.y).clone(),ct=tt(d.x,d.y).clone(),Rt=Ot.clone().lerp(ct,.35),Xt=ct.x-Ot.x,nn=ct.z-Ot.z;Xt*Xt+nn*nn>1e-6&&(St.rotation.y=Math.atan2(Xt,nn));let Fn=tt(d.x,d.y).clone(),di=ct.clone().sub(Ot).normalize(),li=.4,hn=St.userData.rightArm,Jn=!1,rt=null,It=!1,te={...w,handleUnitDeath:void 0},he=performance.now(),pe=0;Nn.shadowMap.enabled=!1,requestAnimationFrame(ie);return}let N=tt(g.x,g.y).clone(),W=tt(d.x,d.y).clone(),ue=new xs(.035,.035,.4,6),we=new Mn({color:16763972}),Q=new Ye(ue,we);Q.position.copy(N),Q.position.y+=.6;let oe=W.clone().sub(N).normalize();Q.quaternion.setFromUnitVectors(new B(0,1,0),oe),n.add(Q),Se=!0;let ye=Qe.get(g.id),Ge=ye&&ye.userData.rightArm?ye.userData.rightArm:null;if(ye){let St=W.x-N.x,Ot=W.z-N.z;St*St+Ot*Ot>1e-6&&(ye.rotation.y=Math.atan2(St,Ot))}let ze=Q.position.clone(),ot=W.clone();ot.y+=.6;let Nt=performance.now(),tn=tt(d.x,d.y).clone(),Sn=W.clone().sub(N).normalize(),On=.4,cn=!1,Vt=null,qt=0,gn=null,lt=v.effectKey==="powerShot"?{...w,animateKnockback(St,Ot,ct,Rt,Xt,nn){gn={targ:St,fromGx:Ot,fromGy:ct,toGx:Rt,toGy:Xt,knockbackOnDone:nn}}}:w;function an(){Nn.shadowMap.enabled=!0,Se=!1,setTimeout(()=>{w.updateTurnUI&&w.updateTurnUI(),F&&F()},400)}function Tn(St){qt++,qt%2===0&&un();let Ot=St-Nt,ct=Math.min(1,Ot/Gt);if(Q.position.lerpVectors(ze,ot,ct),Ge){let Rt=Math.sin(ct*Math.PI)*1.1;Ge.rotation.y=-Rt}if(!cn&&ct>=1&&(cn=!0,n.remove(Q),ue.dispose(),we.dispose(),v.type==="spell"&&Nd(d.x,d.y),Po(v.effectKey,g,d,lt),Qe.get(d.id)&&d.hp>0&&(Vt=St),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(d)),Vt!=null){let Rt=Qe.get(d.id);if(Rt){let Xt=Math.min(1,(St-Vt)/ft),nn=1-Xt;if(ns.copy(Sn).multiplyScalar(On*nn),Rt.position.copy(tn).add(ns),Xt>=1&&(Rt.position.copy(tn),Vt=null,gn)){let{targ:Fn,fromGx:di,fromGy:li,toGx:hn,toGy:Jn,knockbackOnDone:rt}=gn;gn=null,w.animateKnockback?w.animateKnockback(Fn,di,li,hn,Jn,()=>{rt&&rt(),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(Fn),an()}):an();return}}else if(Vt=null,gn){gn=null,an();return}}if(ct<1)requestAnimationFrame(Tn);else if(Ge&&(Ge.rotation.y=0),Vt==null)if(gn){let{targ:Rt,fromGx:Xt,fromGy:nn,toGx:Fn,toGy:di,knockbackOnDone:li}=gn;gn=null,w.animateKnockback?w.animateKnockback(Rt,Xt,nn,Fn,di,()=>{li&&li(),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(Rt),an()}):an()}else an();else requestAnimationFrame(Tn)}Nn.shadowMap.enabled=!1,requestAnimationFrame(Tn)}function dn(){if(Dt!=="playing"||!Bo(Pt)||Se||Mt.length===0)return;let g=Mt[Bt],d=de.find(te=>te.id===g);if(!d||d.hp<=0)return;let v=ge(d,"agi"),w=Io(e,d.x,d.y,v,de,d),F=new Set(de.filter(te=>te.hp>0&&te.id!==d.id).map(te=>te.y*e.w+te.x)),D=[];w.forEach((te,he)=>{te!==0&&(F.has(he)||D.push({gx:he%e.w,gy:Math.floor(he/e.w),dist:te}))});let G=Dd(d),H=Jc(),N=Ld(d.player),W=.25,ue=.03,we=d.maxHp>0&&d.hp/d.maxHp<W,Q=d.maxHp>0&&d.hp/d.maxHp<ue,oe=d.level===2,ye=H.filter(te=>!F.has(te.gy*e.w+te.gx)),Ge=N.filter(te=>!F.has(te.gy*e.w+te.gx)),ze=new Set(H.map(te=>te.gy*e.w+te.gx)),ot=ye.length>0?ye:H,Nt=Ge.length>0?Ge:N,tn=ot.length>0?nn(ot):null,Sn=Nt.length>0?nn(Nt):null,On=ko(d),cn=On.filter(te=>!te.disabled&&d.mp>=te.cost&&te.target==="enemy"),Vt=cn.length>0?Math.max(...cn.map(te=>te.range||0)):0,qt=Math.max(d.range!=null?d.range:1,Vt),gn=d.level>=2&&qt>=2,lt=de.filter(te=>te.hp>0&&te.player!==d.player),an=de.filter(te=>te.hp>0&&te.player===d.player&&te.id!==d.id);function Tn(te,he){if(he.length===0)return null;let pe=null,ie=1/0;for(let le of te){let Ee=0;for(let fe of he)Ee+=oi(le.gx,le.gy,fe.gx,fe.gy);Ee<ie&&(ie=Ee,pe=le)}return pe}function St(te,he){if(he.length===0||te.length===0)return null;let pe=null,ie=1/0;for(let le of te){let Ee=Math.min(...he.map(fe=>oi(le.gx,le.gy,fe.gx,fe.gy)));Ee<ie&&(ie=Ee,pe=le)}return pe}function Ot(te,he){let pe=qt,ie=[];for(let le of de){if(le.hp<=0||le.player===d.player)continue;let Ee=oi(te,he,le.x,le.y);Ee<=pe&&Ee>0&&Fs(e,te,he,le.x,le.y)&&ie.push({target:le,dist:Ee})}return ie}let ct=new Set(D.map(te=>te.gy*e.w+te.gx));function Rt(te,he){if(!te||te.length<=1)return null;let pe=Math.min(he,te.length-1);for(let ie=pe;ie>=1;ie--){let le=te[ie],Ee=le.y*e.w+le.x;if(ct.has(Ee))return{gx:le.x,gy:le.y}}return null}function Xt(te,he){if(!te||te.length<=1)return null;let pe=Math.min(he,te.length-1);for(let ie=pe;ie>=1;ie--){let le=te[ie];if(!F.has(le.y*e.w+le.x))return{gx:le.x,gy:le.y}}return null}function nn(te){let he=null,pe=null,ie=1/0;for(let le of te){let Ee=ys(e,d.x,d.y,le.gx,le.gy,de,d);Ee&&Ee.length>1&&Ee.length<ie&&(ie=Ee.length,he=Ee,pe=le)}return he&&pe?{path:he,target:pe}:null}function Fn(te){let he=te??D;if(he.length===0)return null;if(lt.length===0)return he[0];let pe=null,ie=-1;for(let le of he){let Ee=Math.min(...lt.map(fe=>oi(le.gx,le.gy,fe.x,fe.y)));Ee>ie&&(ie=Ee,pe=le)}return pe}function di(te){let he=te??D;if(he.length===0)return null;if(lt.length===0)return he[0];let pe=d.maxHp>0&&d.hp/d.maxHp>=.6,ie=null,le=-1/0;for(let Ee of he){let fe=Math.min(...lt.map(Et=>oi(Ee.gx,Ee.gy,Et.x,Et.y))),Ae=an.length>0?Math.min(...an.map(Et=>oi(Ee.gx,Ee.gy,Et.x,Et.y))):999,xt;pe?xt=Ae<fe?fe-1e3:fe:xt=fe-Ae,xt>le&&(le=xt,ie=Ee)}return ie}function li(){let te=qt;if(lt.length===0)return null;let he=null,pe=-1;for(let ie of D){let le=Math.min(...lt.map(fe=>oi(ie.gx,ie.gy,fe.x,fe.y)));lt.some(fe=>oi(ie.gx,ie.gy,fe.x,fe.y)<=te)&&le>pe&&(pe=le,he=ie)}return he}let hn=new Map;for(let te of D){let he=te.gy*e.w+te.gx;hn.has(he)||hn.set(he,Ot(te.gx,te.gy))}let Jn=G.some(te=>te.target.maxHp>0&&te.target.hp/te.target.maxHp<W),rt=Jn||D.some(te=>(hn.get(te.gy*e.w+te.gx)||[]).some(pe=>pe.target.maxHp>0&&pe.target.hp/pe.target.maxHp<W));if(qe){if(Be){setTimeout(()=>rn(),400);return}if(gn&&lt.length>0&&ae.size>0&&D.length>0){let le=[];ae.forEach((fe,Ae)=>{le.push({gx:Ae%e.w,gy:Math.floor(Ae/e.w)})});let Ee=nn(le);if(Ee){let fe=Xt(Ee.path,v);if(fe&&(fe.gx!==d.x||fe.gy!==d.y)){zt(d,fe.gx,fe.gy,()=>setTimeout(rn,400));return}let Ae=St(D,le);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){zt(d,Ae.gx,Ae.gy,()=>setTimeout(rn,400));return}}}if($i-Ut<=20&&H.length>0){let le=H.some(Ee=>Ee.gx===d.x&&Ee.gy===d.y);if(le&&D.length>0){let fe=D.filter(Ae=>ze.has(Ae.gy*e.w+Ae.gx)).filter(Ae=>Ae.gx!==d.x||Ae.gy!==d.y);if(fe.length>0){let Ae=Fn(fe);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){zt(d,Ae.gx,Ae.gy,()=>setTimeout(rn,400));return}}setTimeout(()=>rn(),400);return}if(le){setTimeout(()=>rn(),400);return}if(D.length>0){let Ee=tn,fe=Ee?Xt(Ee.path,v):null;if(fe&&(fe.gx!==d.x||fe.gy!==d.y)){zt(d,fe.gx,fe.gy,()=>setTimeout(rn,400));return}let Ae=St(D,ot);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){zt(d,Ae.gx,Ae.gy,()=>setTimeout(rn,400));return}}setTimeout(()=>rn(),400);return}if(!we&&D.length>0){if(oe&&N.length>0&&!N.some(Ee=>Ee.gx===d.x&&Ee.gy===d.y)){let Ee=Sn,fe=Ee?Xt(Ee.path,v):null;if(fe&&(fe.gx!==d.x||fe.gy!==d.y)){zt(d,fe.gx,fe.gy,()=>setTimeout(rn,400));return}let Ae=St(D,Nt);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){zt(d,Ae.gx,Ae.gy,()=>setTimeout(rn,400));return}}if(H.length>0&&!H.some(Ee=>Ee.gx===d.x&&Ee.gy===d.y)){let Ee=tn,fe=Ee?Xt(Ee.path,v):null;if(fe&&(fe.gx!==d.x||fe.gy!==d.y)){zt(d,fe.gx,fe.gy,()=>setTimeout(rn,400));return}let Ae=St(D,ot);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){zt(d,Ae.gx,Ae.gy,()=>setTimeout(rn,400));return}}}let he=H.length>0?D.filter(le=>ze.has(le.gy*e.w+le.gx)):null,pe=he!=null&&he.length>0?he:D,ie=null;if(pe.length>0&&an.length>0&&(ie=di(pe),ie)){let le=ys(e,d.x,d.y,ie.gx,ie.gy,de,d),Ee=le?le.length-1:1/0;(!le||le.length<=1||Ee>v)&&(ie=Fn(pe))}if(!ie&&pe.length>0&&(ie=Fn(pe)),ie&&(ie.gx!==d.x||ie.gy!==d.y)){zt(d,ie.gx,ie.gy,()=>setTimeout(rn,400));return}setTimeout(()=>rn(),400);return}if(Q&&$i-Ut>20&&!Be&&D.length>0){let te=null,he=1/0;for(let ie of D){let Ee=(hn.get(ie.gy*e.w+ie.gx)||[]).filter(fe=>fe.target.maxHp>0&&fe.target.hp/fe.target.maxHp<W);if(Ee.length>0){let fe=Math.min(...Ee.map(Ae=>Ae.target.hp));fe<he&&(he=fe,te=ie)}}if(te){let ie=ys(e,d.x,d.y,te.gx,te.gy,de,d),le=ie?Rt(ie,v):null;if(le&&(le.gx!==d.x||le.gy!==d.y)){zt(d,le.gx,le.gy,()=>setTimeout(dn,600));return}}let pe=Fn();if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){zt(d,pe.gx,pe.gy,()=>setTimeout(dn,600));return}setTimeout(()=>rn(),400);return}if(!qe){let xt=function(mt){return Ir(d,mt,de).filter(Ft=>Ft.targetUnit!=null).map(Ft=>Ft.targetUnit)},te=On,he=d.maxHp>0?d.hp/d.maxHp:1,pe=.35,ie=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct"]),le=new Set(["chakra","sacrifice"]),Ee=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),fe=new Set(["manaDrain","impale","poison"]),Ae=new Set(["dominate","weaken","cripple","hex","blind","raid"]),Et={showFloatingCombatText:Xn,handleUnitDeath:Pn,updateUnitSlashVisibility:Ue,updateTurnUI:jt,tryCollectPowerup:je,world:e,units:de,updateUnitPosition(mt){let Yt=Qe.get(mt.id);Yt&&Yt.position.copy(tt(mt.x,mt.y))},animateKnockback(mt,Yt,Ft,on,En,Zt){let wn=Qe.get(mt.id);if(!wn){Zt&&Zt();return}let Ws=tt(Yt,Ft).clone(),Ms=tt(on,En).clone(),Wo=performance.now(),ah=0;function oh(Kd){ah++,ah%2===0&&un();let lh=Math.min(1,(Kd-Wo)/Os),Zd=Xo=>Xo*Xo*(3-2*Xo);wn.position.lerpVectors(Ws,Ms,Zd(lh)),lh<1?requestAnimationFrame(oh):(wn.position.copy(Ms),Zt&&Zt())}requestAnimationFrame(oh)}},Lt=null,Ht=null;if(!rt){for(let Yt of te)if(!Yt.disabled&&le.has(Yt.effectKey)){let on=Ir(d,Yt,de).filter(En=>En.targetUnit&&En.targetUnit.maxHp>0&&En.targetUnit.hp/En.targetUnit.maxHp<.5);if(on.length>0){let En=on.sort((Zt,wn)=>Zt.targetUnit.hp-wn.targetUnit.hp)[0].targetUnit;Lt=Yt,Ht=En;break}}}if(!Lt&&!rt&&(G.length>0||D.some(Yt=>(hn.get(Yt.gy*e.w+Yt.gx)||[]).length>0))){let Yt=te.filter(Ft=>!Ft.disabled&&Ee.has(Ft.effectKey)).sort((Ft,on)=>(on.level||1)-(Ft.level||1));for(let Ft of Yt){let on=d.tempBuff&&d.tempBuff.duration>0;if(Ft.target==="self"){if(Ft.effectKey==="bloodlust"&&d.hp/d.maxHp>.8)continue;if(!on){Lt=Ft,Ht=d;break}}if(Ft.target==="ally"){if(Ft.effectKey==="forge"&&on||Ft.effectKey==="fortify"&&on||Ft.effectKey==="mantra"&&on||Ft.effectKey==="sanctuary"&&on)continue;let Zt=Ir(d,Ft,de).filter(wn=>wn.targetUnit!=null).map(wn=>wn.targetUnit);if(Zt.length>0){let wn=Zt.filter(Ms=>!Ms.tempBuff||Ms.tempBuff.duration<=0),Ws=(wn.length>0?wn:Zt).sort((Ms,Wo)=>Ms.hp-Wo.hp)[0];Lt=Ft,Ht=Ws;break}}}}if(!Lt){for(let mt of te)if(!mt.disabled&&ie.has(mt.effectKey)){if(mt.effectKey==="feast"&&d.hp/d.maxHp>.7||mt.effectKey==="berserk"&&d.hp/d.maxHp<.25||mt.effectKey==="shuriken"&&G.length>0||mt.effectKey==="judgement"&&d.hp/d.maxHp>.7)continue;let Yt=xt(mt);if(Yt.length===0)continue;let Ft=Yt.filter(Zt=>Zt.maxHp>0&&Zt.hp/Zt.maxHp<pe),on=Ft.length>0?Ft:Yt,En=mt.type==="spell"?on.reduce((Zt,wn)=>{if(!Zt)return wn;let Ws=ge(wn,"int")-ge(Zt,"int");return Ws<0||Ws===0&&wn.hp<Zt.hp?wn:Zt},null):on.reduce((Zt,wn)=>!Zt||wn.hp<Zt.hp?wn:Zt,null);Lt=mt,Ht=En;break}}if(!Lt&&!Jn){for(let mt of te)if(!mt.disabled&&Ae.has(mt.effectKey)){let Yt=xt(mt),Ft=Yt.length>0?Yt.reduce((on,En)=>!on||En.hp<on.hp?En:on,null):null;Lt=mt,Ht=Ft;break}}if(!Lt&&!Jn){for(let mt of te)if(!mt.disabled&&fe.has(mt.effectKey)){let Ft=xt(mt).filter(on=>!on.tempDebuff||on.tempDebuff.duration<=0);if(Ft.length>0){let on=Ft.reduce((En,Zt)=>!En||Zt.hp<En.hp?Zt:En,null);Lt=mt,Ht=on;break}}}if(Lt&&Ht){d.mp-=Lt.cost,qe=!0;let mt=Lt.target==="self"?d:Ht;fa(d,mt,Lt,Et,()=>setTimeout(dn,600));return}}if(Ud(d,lt,an)&&G.length>0){G.sort((he,pe)=>he.target.hp-pe.target.hp||he.dist-pe.dist);let te=G[0].target;jc(d,te);return}if(G.length>0){G.sort((he,pe)=>he.target.hp-pe.target.hp||he.dist-pe.dist);let te=G[0].target;jc(d,te);return}if(!Be&&!rt&&ae.size>0&&D.length>0){let te=[];ae.forEach((pe,ie)=>{te.push({gx:ie%e.w,gy:Math.floor(ie/e.w)})});let he=nn(te);if(he){let pe=Xt(he.path,v);if(pe&&(pe.gx!==d.x||pe.gy!==d.y)){zt(d,pe.gx,pe.gy,()=>setTimeout(dn,600));return}let ie=St(D,te);if(ie&&(ie.gx!==d.x||ie.gy!==d.y)){zt(d,ie.gx,ie.gy,()=>setTimeout(dn,600));return}}}let It=$i-Ut;if(It<=20&&H.length>0&&!Be&&D.length>0&&!H.some(he=>he.gx===d.x&&he.gy===d.y)){let he=tn,pe=he?he.path:null,ie=H.length>0?Math.min(...H.map(Ht=>oi(d.x,d.y,Ht.gx,Ht.gy))):1/0,le=new Map,Ee=new Map;for(let Ht of D){let mt=Ht.gy*e.w+Ht.gx;le.set(mt,H.length>0?Math.min(...H.map(Yt=>oi(Ht.gx,Ht.gy,Yt.gx,Yt.gy))):1/0),Ee.set(mt,pe?pe.findIndex(Yt=>Yt.x===Ht.gx&&Yt.y===Ht.gy):-1)}let fe=null,Ae=-1,xt=W;for(let Ht of D){let mt=Ht.gy*e.w+Ht.gx;if(le.get(mt)>ie||(hn.get(mt)||[]).filter(Zt=>Zt.target.maxHp>0&&Zt.target.hp/Zt.target.maxHp<xt).length===0)continue;let on=Ee.get(mt),En=on>=0?on:0;En>Ae&&(Ae=En,fe=Ht)}if(fe&&(fe.gx!==d.x||fe.gy!==d.y)){zt(d,fe.gx,fe.gy,()=>setTimeout(dn,600));return}let Et=he?Xt(he.path,v):null;if(Et&&(Et.gx!==d.x||Et.gy!==d.y)){zt(d,Et.gx,Et.gy,()=>setTimeout(dn,600));return}let Lt=St(D,ot);if(Lt&&(Lt.gx!==d.x||Lt.gy!==d.y)){zt(d,Lt.gx,Lt.gy,()=>setTimeout(dn,600));return}}if(we&&D.length>0&&!Be){let te=null,he=1/0;for(let pe of D){let le=(hn.get(pe.gy*e.w+pe.gx)||[]).filter(Ee=>Ee.target.maxHp>0&&Ee.target.hp/Ee.target.maxHp<W);if(le.length>0){let Ee=Math.min(...le.map(fe=>fe.target.hp));Ee<he&&(he=Ee,te=pe)}}if(te){let pe=ys(e,d.x,d.y,te.gx,te.gy,de,d),ie=pe?Rt(pe,v):null;if(ie&&(ie.gx!==d.x||ie.gy!==d.y)){zt(d,ie.gx,ie.gy,()=>setTimeout(dn,600));return}}if(It>20&&oe&&N.length>0&&!N.some(ie=>ie.gx===d.x&&ie.gy===d.y)){let ie=Ge.length>0?Ge:N,le=Sn;if(le!=null&&le.path.length<=5){let fe=Xt(le.path,v);if(fe&&(fe.gx!==d.x||fe.gy!==d.y)){zt(d,fe.gx,fe.gy,()=>setTimeout(dn,600));return}let Ae=St(D,ie);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){zt(d,Ae.gx,Ae.gy,()=>setTimeout(dn,600));return}}}if(It>20){let pe=Fn();if(pe&&oi(d.x,d.y,pe.gx,pe.gy)>0){zt(d,pe.gx,pe.gy,()=>setTimeout(dn,600));return}setTimeout(()=>rn(),400);return}}if(It<=10&&H.length>0&&!Be&&D.length>0&&!H.some(he=>he.gx===d.x&&he.gy===d.y)){let he=ye.length>0?ye:H,pe=tn,ie=pe?Xt(pe.path,v):null;if(ie&&(ie.gx!==d.x||ie.gy!==d.y)){zt(d,ie.gx,ie.gy,()=>setTimeout(dn,600));return}let le=St(D,he);if(le&&(le.gx!==d.x||le.gy!==d.y)){zt(d,le.gx,le.gy,()=>setTimeout(dn,600));return}}if(d.level===1&&H.length>0&&!Be&&!H.some(he=>he.gx===d.x&&he.gy===d.y)&&D.length>0){let he=ye.length>0?ye:H,pe=tn,ie=pe?Xt(pe.path,v):null;if(ie&&(ie.gx!==d.x||ie.gy!==d.y)){zt(d,ie.gx,ie.gy,()=>setTimeout(dn,600));return}let le=St(D,he);if(le&&(le.gx!==d.x||le.gy!==d.y)){zt(d,le.gx,le.gy,()=>setTimeout(dn,600));return}}if(oe&&N.length>0&&!Be&&!N.some(he=>he.gx===d.x&&he.gy===d.y)&&D.length>0){let he=lt.filter(xt=>xt.maxHp>0&&xt.hp/xt.maxHp<W),pe=null,ie=1/0;for(let xt of D){let Lt=(hn.get(xt.gy*e.w+xt.gx)||[]).find(Ht=>he.some(mt=>mt.id===Ht.target.id));Lt&&Lt.target.hp<ie&&(ie=Lt.target.hp,pe=xt)}if(pe){let xt=ys(e,d.x,d.y,pe.gx,pe.gy,de,d),Et=xt?Rt(xt,v):null;if(Et&&(Et.gx!==d.x||Et.gy!==d.y)){zt(d,Et.gx,Et.gy,()=>setTimeout(dn,600));return}}let le=Ge.length>0?Ge:N,Ee=Sn,fe=Ee?Xt(Ee.path,v):null;if(fe&&(fe.gx!==d.x||fe.gy!==d.y)){zt(d,fe.gx,fe.gy,()=>setTimeout(dn,600));return}let Ae=St(D,le);if(Ae&&(Ae.gx!==d.x||Ae.gy!==d.y)){zt(d,Ae.gx,Ae.gy,()=>setTimeout(dn,600));return}}if(gn&&lt.length>0&&!Be&&D.length>0){if(!rt&&ae.size>0){let he=[];ae.forEach((ie,le)=>{he.push({gx:le%e.w,gy:Math.floor(le/e.w)})});let pe=nn(he);if(pe){let ie=Xt(pe.path,v);if(ie&&(ie.gx!==d.x||ie.gy!==d.y)){zt(d,ie.gx,ie.gy,()=>setTimeout(dn,600));return}let le=St(D,he);if(le&&(le.gx!==d.x||le.gy!==d.y)){zt(d,le.gx,le.gy,()=>setTimeout(dn,600));return}}}let te=li();if(te&&(te.gx!==d.x||te.gy!==d.y)){zt(d,te.gx,te.gy,()=>setTimeout(dn,600));return}}if(lt.length>0&&!Be&&D.length>0){let he=function(ie,le){let Ee=null;for(let fe=-te;fe<=te;fe++)for(let Ae=-te;Ae<=te;Ae++){if(Ae===0&&fe===0||Math.abs(Ae)+Math.abs(fe)>te)continue;let xt=ie.x+Ae,Et=ie.y+fe;if(xt<0||xt>=e.w||Et<0||Et>=e.h||!Er(e,xt,Et)||!Fs(e,xt,Et,ie.x,ie.y)||de.some(Ft=>Ft.hp>0&&Ft.x===xt&&Ft.y===Et))continue;let Ht=ys(e,d.x,d.y,xt,Et,de,d),mt=Ht?Ht.length-1:1/0;Ht&&Ht.length>1&&(!le||mt<=v)&&(!Ee||Ht.length<Ee.length)&&(Ee=Ht)}return Ee},te=qt,pe=[];for(let ie of lt){let le=he(ie,!0);le&&pe.push({enemy:ie,path:le})}if(pe.length>0){let ie=pe.filter(Ae=>Ae.enemy.maxHp>0&&Ae.enemy.hp/Ae.enemy.maxHp<W),le=ie.length>0?ie:pe;ie.length>0?le.sort((Ae,xt)=>Ae.enemy.hp-xt.enemy.hp||Ae.path.length-xt.path.length):le.sort((Ae,xt)=>Ae.path.length-xt.path.length||Ae.enemy.hp-xt.enemy.hp);let Ee=le[0],fe=Rt(Ee.path,v);if(fe&&(fe.gx!==d.x||fe.gy!==d.y)){zt(d,fe.gx,fe.gy,()=>setTimeout(dn,600));return}}if(pe.length===0){let ie=null,le=1/0;for(let Ee of lt){let fe=he(Ee,!1);fe&&fe.length<le&&(le=fe.length,ie=fe)}if(ie){let Ee=Rt(ie,v);if(Ee&&(Ee.gx!==d.x||Ee.gy!==d.y)){zt(d,Ee.gx,Ee.gy,()=>setTimeout(dn,600));return}}}}setTimeout(()=>rn(),400)}function bn(){for(Kt.length=0;ln.children.length;){let g=ln.children[0];ln.remove(g),g.geometry!==Lr&&g.geometry!==Dr&&g.geometry.dispose(),g.material.dispose()}un()}let Vs=new Set;function ko(g){return!g||!g.class?[]:md[g.class]?md[g.class].map(d=>({...d,disabled:d.disabled===!0||g.level<d.level||d.hpCost&&g.hp<d.hpCost||d.cost&&g.mp<d.cost})):[]}function Ir(g,d,v){let w=[],F=(G,H,N,W)=>Math.abs(G-N)+Math.abs(H-W),D=d.range||0;if(d.target==="self")return w.push({gx:g.x,gy:g.y,targetUnit:null}),w;for(let G of v)G.hp<=0||F(g.x,g.y,G.x,G.y)>D||D>2&&!Fs(e,g.x,g.y,G.x,G.y)||(d.target==="enemy"&&G.player!==g.player&&w.push({gx:G.x,gy:G.y,targetUnit:G}),d.target==="ally"&&G.player===g.player&&w.push({gx:G.x,gy:G.y,targetUnit:G}));return w}function Od(g,d){let v=d.range||0;if(d.target==="self")return[{gx:g.x,gy:g.y}];let w=yd(e,g.x,g.y,v),F=[];return w.forEach((D,G)=>{let H=G%e.w,N=G/e.w|0;v>2&&!Fs(e,g.x,g.y,H,N)||F.push({gx:H,gy:N})}),F}function Fd(g,d){let v=Ir(g,d,de);Vs=new Set(v.map(F=>`${F.gx},${F.gy}`));let w=d.target==="self"?v:Od(g,d);bn(),w.forEach(({gx:F,gy:D})=>{let H=(Gn+e.height[D][F]*.35)/2+Gn/2,N=F*pt-Ze+pt/2,W=D*pt-Fe+pt/2,ue=H+.01,we=new Mn({color:8926122,transparent:!0,opacity:.4,side:yn}),Q=new Ye(Lr,we);Q.rotation.x=-Math.PI/2,Q.position.set(N,ue,W),ln.add(Q),Kt.push(we);let oe=new Mn({color:11167436,transparent:!0,opacity:.7,side:yn}),ye=new Ye(Dr,oe);ye.rotation.x=-Math.PI/2,ye.position.set(N,ue+.01,W),ye.userData.gx=F,ye.userData.gy=D,ln.add(ye),Kt.push(oe)})}let Qc=.82,eh=1.02,Lr=new Di(eh,eh),Dr=new Di(Qc,Qc);function Bd(g){bn(),g.forEach(({gx:d,gy:v})=>{let F=(Gn+e.height[v][d]*.35)/2+Gn/2,D=d*pt-Ze+pt/2,G=v*pt-Fe+pt/2,H=F+.01,N=new Mn({color:2271812,transparent:!0,opacity:.4,side:yn}),W=new Ye(Lr,N);W.rotation.x=-Math.PI/2,W.position.set(D,H,G),ln.add(W),Kt.push(N);let ue=new Mn({color:4508774,transparent:!0,opacity:.7,side:yn}),we=new Ye(Dr,ue);we.rotation.x=-Math.PI/2,we.position.set(D,H+.01,G),we.userData.gx=d,we.userData.gy=v,ln.add(we),Kt.push(ue)}),un()}function Ho(g){bn(),g.forEach((d,v)=>{if(d===0)return;let w=v%e.w,F=v/e.w|0,G=(Gn+e.height[F][w]*.35)/2+Gn/2,H=w*pt-Ze+pt/2,N=F*pt-Fe+pt/2,W=G+.01,ue=new Mn({color:3381759,transparent:!0,opacity:.35,side:yn}),we=new Ye(Lr,ue);we.rotation.x=-Math.PI/2,we.position.set(H,W,N),ln.add(we),Kt.push(ue);let Q=new Mn({color:6730751,transparent:!0,opacity:.65,side:yn}),oe=new Ye(Dr,Q);oe.rotation.x=-Math.PI/2,oe.position.set(H,W+.01,N),ln.add(oe),Kt.push(Q)}),un()}function kd(g){bn(),g.forEach((d,v)=>{if(d===0)return;let w=v%e.w,F=v/e.w|0,G=(Gn+e.height[F][w]*.35)/2+Gn/2,H=w*pt-Ze+pt/2,N=F*pt-Fe+pt/2,W=G+.01,ue=new Mn({color:10035746,transparent:!0,opacity:.4,side:yn}),we=new Ye(Lr,ue);we.rotation.x=-Math.PI/2,we.position.set(H,W,N),ln.add(we),Kt.push(ue);let Q=new Mn({color:13386820,transparent:!0,opacity:.7,side:yn}),oe=new Ye(Dr,Q);oe.rotation.x=-Math.PI/2,oe.position.set(H,W+.01,N),ln.add(oe),Kt.push(Q)}),un()}let es=new So,ts=new Oe;function pa(g,d){let v=t.getBoundingClientRect();return ts.x=(g-v.left)/v.width*2-1,ts.y=-((d-v.top)/v.height)*2+1,{x:ts.x,y:ts.y}}function Hd(g,d){if(Se)return;ts.x=g,ts.y=d,es.setFromCamera(ts,a);let v=es.intersectObjects(Z.children,!0);if(v.length===0)return;let w=null;for(let H of v){let N=H.object;for(;N&&(N.userData.gx==null||N.userData.gy==null);)N=N.parent;if(N&&N.userData.gx!=null){w=N;break}}if(!w||w.userData.gx==null)return;let F=w.userData.gx,D=w.userData.gy;if(Dt==="draft"&&zn){let H=D*e.w+F;ji.has(H)&&Fc(F,D);return}if(Dt!=="playing"||vt==="cvcpu")return;if(Ke&&Ve){let H=Mt[Bt],N=de.find(oe=>oe.id===H&&oe.hp>0);if(N&&F===N.x&&D===N.y){Ke=!1,Ve=null,Vs=new Set,bn(),Be?z=new Map:(z=Io(e,N.x,N.y,ge(N,"agi"),de,N),Ho(z)),jt();return}let W=`${F},${D}`;if(!Vs.has(W))return;if(!N||N.mp<Ve.cost){Ke=!1,Ve=null,bn(),jt();return}let ue=de.find(oe=>oe.x===F&&oe.y===D&&oe.hp>0);if(Ve.target==="enemy"&&(!ue||ue.player===N.player)||Ve.target==="ally"&&ue&&ue.player!==N.player||Ve.target==="self"&&(F!==N.x||D!==N.y)||Ve.target==="enemy"&&!ue)return;N.mp-=Ve.cost,qe=!0;let we={showFloatingCombatText:Xn,handleUnitDeath:Pn,updateUnitSlashVisibility:Ue,updateTurnUI:jt,tryCollectPowerup:je,world:e,units:de,updateUnitPosition(oe){let ye=Qe.get(oe.id);ye&&ye.position.copy(tt(oe.x,oe.y))},animateKnockback(oe,ye,Ge,ze,ot,Nt){let tn=Qe.get(oe.id);if(!tn){Nt&&Nt();return}let Sn=tt(ye,Ge).clone(),On=tt(ze,ot).clone(),cn=performance.now(),Vt=0;function qt(gn){Vt++,Vt%2===0&&un();let lt=Math.min(1,(gn-cn)/Os),an=Tn=>Tn*Tn*(3-2*Tn);tn.position.lerpVectors(Sn,On,an(lt)),lt<1?requestAnimationFrame(qt):(tn.position.copy(On),Nt&&Nt())}requestAnimationFrame(qt)}},Q=Ve.target==="self"?N:ue||null;fa(N,Q,Ve,we,()=>{bn(),Ke=!1,Ve=null,Vs=new Set,Be?rn():jt()});return}if(st){let H=Mt[Bt],N=de.find(ue=>ue.id===H),W=Qe.get(H);if(N&&W&&kt.length>0){let ue=tt(N.x,N.y),we=tt(F,D),Q=we.x-ue.x,oe=we.z-ue.z,ye=Q*Q+oe*oe>1e-6?Math.atan2(Q,oe):W.rotation.y;W.rotation.y=Lc(ye)}setTimeout(()=>rn(),400);return}if(T!=null&&Ne){let H=de.find(ue=>ue.id===T);if(!H||H.player!==Pt)return;let N=D*e.w+F,W=de.find(ue=>ue.x===F&&ue.y===D&&ue.hp>0);if(W&&W.id===Mt[Bt]&&W.player===Pt){Ne=!1,T=W.id,Be?(bn(),z=new Map):(z=Io(e,W.x,W.y,ge(W,"agi"),de,W),Ho(z)),jt();return}if(!z.has(N)||z.get(N)===0)return;if(W&&W.player!==Pt){let ue=ge(W,"agi")*.7+ge(W,"luk")*.3;if(Math.random()*Math.max(.001,ue)<=ge(H,"dex")){let oe=ge(H,"str")*.7+ge(H,"dex")*.1+ge(H,"int")*.07-(ge(W,"vit")*.3+ge(W,"luk")*.1),ye=Math.max(1,Math.floor(oe));W.hp=Math.max(0,W.hp-ye),Xn(W.x,W.y,String(ye),!1),W.hp<=0&&Pn(W,H),Ue(W)}else Xn(W.x,W.y,"MISS",!0);qe=!0,T=null,Ne=!1,bn(),setTimeout(Be?()=>rn():()=>jt(),400)}return}let G=de.find(H=>H.x===F&&H.y===D&&H.hp>0);if(G){if(G.id===Mt[Bt]&&G.player===Pt){K(),T=G.id,Ne=!1,Be?(bn(),z=new Map):(z=Io(e,F,D,ge(G,"agi"),de,G),Ho(z)),jt();return}bn(),z=new Map,Ne=!1,ne(G),jt();return}if(K(),T!=null){let oe=function(){if(Q>=ue.length){H.x=ue[ue.length-1].x,H.y=ue[ue.length-1].y,Se=!1,$e(we),mn(),z=new Map,Be=!0,setTimeout(qe?()=>rn():()=>jt(),400);return}let ye=ue[Q-1],Ge=ue[Q],ze=tt(ye.x,ye.y).clone(),ot=tt(Ge.x,Ge.y).clone(),Nt=ot.x-ze.x,tn=ot.z-ze.z;Nt*Nt+tn*tn>1e-6&&(we.rotation.y=Math.atan2(Nt,tn));let Sn=performance.now(),On=0;function cn(Vt){On++,On%2===0&&un();let qt=Math.min(1,(Vt-Sn)/Os),lt=(an=>an*an*(3-2*an))(qt);if(we.position.lerpVectors(ze,ot,lt),Te(we,lt),m){let an=a.position.distanceTo(h),Tn=an<.1?o:an;p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(c).normalize(),h.lerp(we.position,l),a.position.copy(h).add(p.clone().multiplyScalar(Tn)),a.lookAt(h)}qt<1?requestAnimationFrame(cn):(Q++,oe())}requestAnimationFrame(cn)};if(Ne)return;let H=de.find(ye=>ye.id===T);if(!H||H.player!==Pt)return;let N=D*e.w+F;if(!z.has(N)||z.get(N)===0||de.some(ye=>ye.id!==H.id&&ye.x===F&&ye.y===D&&ye.hp>0)||Se||Be)return;let ue=ys(e,H.x,H.y,F,D,de,H);if(!ue||ue.length<=1)return;T=null,bn(),Se=!0,m=!0,mn(H.id);let we=Qe.get(H.id),Q=1;oe()}}function th(g){E.x=g.clientX,E.y=g.clientY,R=g.isTouch===!0,b=g.ctrlKey,_=pa(g.clientX,g.clientY),t.style.cursor=(g.ctrlKey,"grabbing")}function zo(g){return g.touches&&g.touches.length>0?{clientX:g.touches[0].clientX,clientY:g.touches[0].clientY}:g.changedTouches&&g.changedTouches.length>0?{clientX:g.changedTouches[0].clientX,clientY:g.changedTouches[0].clientY}:{clientX:g.clientX,clientY:g.clientY}}function nh(g){if(!g||g.length<2)return 0;let d=g[0],v=g[1];return Math.hypot(v.clientX-d.clientX,v.clientY-d.clientY)}function zd(g){if(g.touches.length===2){V=nh(g.touches),_=null;return}if(g.touches.length!==1)return;V=null;let d=zo(g);th({clientX:d.clientX,clientY:d.clientY,ctrlKey:!1,isTouch:!0})}function Vd(g){if(g.touches.length===2){g.preventDefault();let v=nh(g.touches);if(V!=null&&V>0){let w=v-V,F=a.position.distanceTo(h),D=Math.max(q,Math.min(re,F-w*P));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(D)),a.lookAt(h),Wt=performance.now()}V=v;return}if(V=null,g.touches.length!==1)return;g.preventDefault();let d=zo(g);ih({clientX:d.clientX,clientY:d.clientY,ctrlKey:!1})}function Gd(g){if(g.touches.length<2&&(V=null),g.touches.length===2||g.changedTouches.length===0)return;R=!1;let d=zo(g);Vo({clientX:d.clientX,clientY:d.clientY,ctrlKey:!1})}function ih(g){if(st){Sd(g.clientX,g.clientY);return}if(_==null)return;let d=g.clientX-E.x,v=g.clientY-E.y;if(!M&&!x&&(Math.abs(d)>A||Math.abs(v)>A)&&(g.ctrlKey||b?(x=!0,m=!1):(M=!0,m=!1)),x){X.copy(a.position).sub(h);let w=X.length();if(w<.001)return;let F=Math.atan2(X.x,X.z),D=Math.asin(Math.max(-1,Math.min(1,X.y/w)));F-=d*U,D+=v*U,D=Math.max(I,Math.min(L,D)),X.x=w*Math.cos(D)*Math.sin(F),X.y=w*Math.sin(D),X.z=w*Math.cos(D)*Math.cos(F),a.position.copy(h).add(X),a.lookAt(h),E.x=g.clientX,E.y=g.clientY,Wt=performance.now()}else if(M){let w=pa(g.clientX,g.clientY);f.setFromNormalAndCoplanarPoint(new B(0,1,0),new B(0,h.y,0)),es.setFromCamera(new Oe(_.x,_.y),a),es.ray.intersectPlane(f,u);let F=u.clone();es.setFromCamera(new Oe(w.x,w.y),a),es.ray.intersectPlane(f,u);let D=F.sub(u);R&&D.multiplyScalar(O),h.add(D),a.position.add(D),a.lookAt(h),_={x:w.x,y:w.y},Wt=performance.now()}}function Vo(g){if(_!=null&&!M&&!x){let d=pa(g.clientX,g.clientY);Hd(d.x,d.y)}_=null,M=!1,x=!1,b=!1,t.style.cursor="grab"}function Wd(g){g.preventDefault();let d=a.position.distanceTo(h),v=Math.max(q,Math.min(re,d+g.deltaY*Me));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(v)),a.lookAt(h),Wt=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",th),t.addEventListener("mousemove",ih),t.addEventListener("mouseup",Vo),t.addEventListener("mouseleave",Vo),t.addEventListener("touchstart",zd,{passive:!0}),t.addEventListener("touchmove",Vd,{passive:!1}),t.addEventListener("touchend",Gd,{passive:!0}),t.addEventListener("wheel",Wd,{passive:!1});function sh(){let g=t.clientWidth,d=t.clientHeight;a.aspect=g/d,a.updateProjectionMatrix(),Nn.setSize(g,d),Nn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",sh);let Nn=new Zr({antialias:!1});Nn.setSize(t.clientWidth,t.clientHeight),Nn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Nn.shadowMap.enabled=!0,Nn.shadowMap.type=vc,t.appendChild(Nn.domElement),sh();let ma=document.createElement("div");ma.id="combat-text-layer",t.appendChild(ma);let Ii=new B,ns=new B,Xd=1400;function Xn(g,d,v,w,F){let D=document.createElement("div");D.className="combat-text-float "+(w?"miss":"damage")+(F?" "+F:""),D.textContent=v,D.style.position="absolute",ma.appendChild(D);let G=F==="skill-name"?1.7:1.2,H=performance.now();function N(){Ii.copy(tt(g,d)),Ii.y+=G,Ii.project(a);let we=t.clientWidth,Q=t.clientHeight;D.style.left=(Ii.x*.5+.5)*we+"px",D.style.top=(1-(Ii.y*.5+.5))*Q+"px"}let W=0;function ue(){W%2===0&&N(),W++,performance.now()-H<Xd?requestAnimationFrame(ue):D.remove()}requestAnimationFrame(ue)}let qd=1500;function Yd(g,d){let v=document.createElement("div");v.className="combat-text-float "+(d||"levelup"),v.textContent="LEVEL UP!",v.style.position="absolute",ma.appendChild(v);let w=performance.now(),F=0;function D(){Ii.copy(tt(g.x,g.y)),Ii.y+=1.2,Ii.project(a);let H=t.clientWidth,N=t.clientHeight;v.style.left=(Ii.x*.5+.5)*H+"px",v.style.top=(1-(Ii.y*.5+.5))*N+"px"}function G(){F%2===0&&D(),F++,performance.now()-w<qd?requestAnimationFrame(G):v.remove()}requestAnimationFrame(G)}function Pn(g,d){Cy(d?.class,g.class),console.log("[DEATH]",`${g.name} (${g.class}, P${g.player})`,`at (${g.x},${g.y})`,`Lv.${g.level}`),Xn(g.x,g.y,"DEAD",!1);let v=Qe.get(g.id);if(!v){mn(),rh();return}let w=performance.now();function F(D){un();let G=D-w,H=Math.min(1,G/wt),N=H*H;v.rotation.x=N*Math.PI*.5,H<1?requestAnimationFrame(F):(n.remove(v),Qe.delete(g.id),mn(),rh())}requestAnimationFrame(F)}function rh(){if(Dt!=="playing")return;let g=de.some(v=>v.player===1&&v.hp>0),d=de.some(v=>v.player===2&&v.hp>0);g?d||Go(1):Go(2)}function $d(){let g=Jc(),d=new Set(g.map(G=>G.gy*e.w+G.gx)),v=de.filter(G=>G.hp>0&&G.player===1&&d.has(G.y*e.w+G.x)).length,w=de.filter(G=>G.hp>0&&G.player===2&&d.has(G.y*e.w+G.x)).length,F=null,D="";if(v>w)F=1,D=`Time's up! Player 1 wins! (${v} vs ${w} units on center base)`;else if(w>v)F=2,D=`Time's up! Player 2 wins! (${w} vs ${v} units on center base)`;else{let G=de.filter(N=>N.hp>0&&N.player===1).reduce((N,W)=>N+W.hp,0),H=de.filter(N=>N.hp>0&&N.player===2).reduce((N,W)=>N+W.hp,0);G>H?(F=1,D=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${G} vs ${H})`):H>G?(F=2,D=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${H} vs ${G})`):D=`Draw! (equal units on center: ${v}, equal HP)`}Go(F,D)}function Go(g,d){Bs(),Py(de,g),Dt="gameover",document.getElementById("turn-menu").style.display="none",K(),bn();let v=document.getElementById("game-over-overlay"),w=document.getElementById("game-over-title"),F=document.getElementById("game-over-cards"),D=document.getElementById("game-over-class-record");D&&(D.style.display="none",D.innerHTML=""),w.textContent=d??`Player ${g} wins!`;let G=de.filter(H=>H.player===(g??1));if(F.innerHTML=G.map(H=>{let N=H,W=H.level>=3?" level-3":H.level>=2?" level-2":"",ue=N.maxHp>0&&N.hp/N.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${W}${ue}">
          <img class="game-over-card-image" src="${ra[H.class]||""}" alt="${N.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${N.name}</div>
            <div class="game-over-card-meta">Lv.${N.level} ${N.class} \u2014 HP ${N.hp}/${N.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${N.hp}/${N.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${N.mp}/${N.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${ge(N,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${ge(N,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${ge(N,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${ge(N,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${ge(N,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${ge(N,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${N.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),v.classList.add("visible"),vt==="cvcpu"){if(Kn++,D&&_s&&Kn>=Cn){let H=Zi.map(N=>{let W=Ni[N],ue=W.wins+W.losses||1,we=W.wins+W.losses>0?(W.wins/ue*100).toFixed(1)+"%":"\u2014",Q=W.wins+W.losses>0?(W.losses/ue*100).toFixed(1)+"%":"\u2014";return{class:N,battles:W.battles,kills:W.kills,deaths:W.deaths,wins:W.wins,losses:W.losses,winRate:we,lossRate:Q}});D.innerHTML=`
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
              ${H.map(N=>`
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
        `,D.style.display="block"}Kn<Cn&&setTimeout(()=>{v.classList.remove("visible"),C(),Do()},2e3)}}function Gs(g=0){requestAnimationFrame(Gs),Wt===0&&(Wt=g);let d=g-Wt>500;Gs.frameCount=(typeof Gs.frameCount=="number"?Gs.frameCount:0)+1;let v=()=>{if(Zn){let w=.6+.4*Math.sin(g*.004);for(let F=0;F<Kt.length;F++){let D=F%2===0?.4:.7;Kt[F].opacity=D*w}Nn.render(n,a),Zn=!1}};d?g-bt>=100&&(bt=g,Zn=!0,v()):(Gs.frameCount%2===0&&(Zn=!0),v())}Gs()}Ny();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
