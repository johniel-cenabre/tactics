var fc="160";var kd=0,th=1,Hd=2;var Ou=1,pc=2,zi=3,us=0,ri=1,_n=2;var ls=0,hr=1,nh=2,ih=3,sh=4,zd=5,Ts=100,Vd=101,Gd=102,rh=103,ah=104,Wd=200,Xd=201,qd=202,Yd=203,Ml=204,bl=205,$d=206,Kd=207,Zd=208,Jd=209,jd=210,Qd=211,ef=212,tf=213,nf=214,sf=0,rf=1,af=2,Ba=3,of=4,lf=5,cf=6,hf=7,Fu=0,uf=1,df=2,cs=0,ff=1,pf=2,mf=3,gf=4,xf=5,yf=6;var Bu=300,fr=301,pr=302,Sl=303,El=304,xo=306,Vr=1e3,Ai=1001,Tl=1002,$n=1003,oh=1004;var ko=1005;var mi=1006,_f=1007;var Gr=1008;var hs=1009,vf=1010,Mf=1011,mc=1012,ku=1013,as=1014,os=1015,Wr=1016,Hu=1017,zu=1018,As=1020,bf=1021,Ri=1023,Sf=1024,Ef=1025,Rs=1026,mr=1027,Tf=1028,Vu=1029,wf=1030,Gu=1031,Wu=1033,Ho=33776,zo=33777,Vo=33778,Go=33779,lh=35840,ch=35841,hh=35842,uh=35843,Xu=36196,dh=37492,fh=37496,ph=37808,mh=37809,gh=37810,xh=37811,yh=37812,_h=37813,vh=37814,Mh=37815,bh=37816,Sh=37817,Eh=37818,Th=37819,wh=37820,Ah=37821,Wo=36492,Rh=36494,Ch=36495,Af=36283,Ph=36284,Ih=36285,Lh=36286;var ka=2300,Ha=2301,Xo=2302,Dh=2400,Uh=2401,Nh=2402;var qu=3e3,Cs=3001,Rf=3200,Cf=3201,Yu=0,Pf=1,gi="",zn="srgb",Gi="srgb-linear",gc="display-p3",yo="display-p3-linear",za="linear",on="srgb",Va="rec709",Ga="p3";var Ws=7680;var Oh=519,If=512,Lf=513,Df=514,$u=515,Uf=516,Nf=517,Of=518,Ff=519,Fh=35044;var Bh="300 es",wl=1035,Vi=2e3,Wa=2001,ds=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qo=Math.PI/180,Al=180/Math.PI;function Mr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function Xn(i,e,t){return Math.max(e,Math.min(t,i))}function Bf(i,e){return(i%e+e)%e}function Yo(i,e,t){return(1-t)*i+t*e}function kh(i){return(i&i-1)===0&&i!==0}function Rl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],y=n[8],v=s[0],g=s[3],m=s[6],M=s[1],_=s[4],w=s[7],U=s[2],I=s[5],L=s[8];return r[0]=a*v+o*M+l*U,r[3]=a*g+o*_+l*I,r[6]=a*m+o*w+l*L,r[1]=c*v+h*M+f*U,r[4]=c*g+h*_+f*I,r[7]=c*m+h*w+f*L,r[2]=d*v+u*M+y*U,r[5]=d*g+u*_+y*I,r[8]=d*m+u*w+y*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,y=t*f+n*d+s*u;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=u*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$o=new At;function Ku(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kf(){let i=Xa("canvas");return i.style.display="block",i}var Hh={};function Fr(i){i in Hh||(Hh[i]=!0,console.warn(i))}var zh=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vh=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ua={[Gi]:{transfer:za,primaries:Va,toReference:i=>i,fromReference:i=>i},[zn]:{transfer:on,primaries:Va,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[yo]:{transfer:za,primaries:Ga,toReference:i=>i.applyMatrix3(Vh),fromReference:i=>i.applyMatrix3(zh)},[gc]:{transfer:on,primaries:Ga,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vh),fromReference:i=>i.applyMatrix3(zh).convertLinearToSRGB()}},Hf=new Set([Gi,yo]),Jt={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Hf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ua[e].toReference,s=ua[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ua[i].primaries},getTransfer:function(i){return i===gi?za:ua[i].transfer}};function ur(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ko(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xs,qa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=Xa("canvas")),Xs.width=e.width,Xs.height=e.height;let n=Xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ur(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zf=0,Ya=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Mr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zo(s[a].image)):r.push(Zo(s[a]))}else r=Zo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vf=0,yi=class i extends ds{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=mi,a=Gr,o=Ri,l=hs,c=i.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Mr(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Cs?zn:gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zn?Cs:qu}set encoding(e){Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cs?zn:gi}};yi.DEFAULT_IMAGE=null;yi.DEFAULT_MAPPING=Bu;yi.DEFAULT_ANISOTROPY=1;var Hn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],y=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(y+g)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,w=(u+1)/2,U=(m+1)/2,I=(h+d)/4,L=(f+v)/4,q=(y+g)/4;return _>w&&_>U?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=I/n,r=L/n):w>U?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=I/s,r=q/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=L/r,s=q/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-y)*(g-y)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-y)/M,this.y=(f-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+u+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cl=class extends ds{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Hn(0,0,e,t),this.scissorTest=!1,this.viewport=new Hn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cs?zn:gi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new yi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends Cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$a=class extends yi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pl=class extends yi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fs=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],y=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=u,e[t+2]=y,e[t+3]=v;return}if(f!==v||l!==d||c!==u||h!==y){let g=1-o,m=l*d+c*u+h*y+f*v,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let U=Math.sqrt(_),I=Math.atan2(U,m*M);g=Math.sin(g*I)/U,o=Math.sin(o*I)/U}let w=o*M;if(l=l*g+d*w,c=c*g+u*w,h=h*g+y*w,f=f*g+v*w,g===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=U,c*=U,h*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],y=r[a+3];return e[t]=o*y+h*f+l*u-c*d,e[t+1]=l*y+h*d+c*f-o*u,e[t+2]=c*y+h*u+o*d-l*f,e[t+3]=h*y-o*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),u=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f-d*u*y;break;case"YXZ":this._x=d*h*f+c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f+d*u*y;break;case"ZXY":this._x=d*h*f-c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f-d*u*y;break;case"ZYX":this._x=d*h*f-c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f+d*u*y;break;case"YZX":this._x=d*h*f+c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f-d*u*y;break;case"XZY":this._x=d*h*f-c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f+d*u*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new B,Gh=new fs,Ps=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(r,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),fa.subVectors(this.max,Dr),qs.subVectors(e.a,Dr),Ys.subVectors(e.b,Dr),$s.subVectors(e.c,Dr),ts.subVectors(Ys,qs),ns.subVectors($s,Ys),vs.subVectors(qs,$s);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-vs.z,vs.y,ts.z,0,-ts.x,ns.z,0,-ns.x,vs.z,0,-vs.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-vs.y,vs.x,0];return!jo(t,qs,Ys,$s,fa)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,qs,Ys,$s,fa))?!1:(pa.crossVectors(ts,ns),t=[pa.x,pa.y,pa.z],jo(t,qs,Ys,$s,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Oi=[new B,new B,new B,new B,new B,new B,new B,new B],Si=new B,da=new Ps,qs=new B,Ys=new B,$s=new B,ts=new B,ns=new B,vs=new B,Dr=new B,fa=new B,pa=new B,Ms=new B;function jo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ms.fromArray(i,r);let o=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Gf=new Ps,Ur=new B,Qo=new B,gr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Qo)),this.expandByPoint(Ur.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fi=new B,el=new B,ma=new B,is=new B,tl=new B,ga=new B,nl=new B,Xr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){el.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),is.copy(this.origin).sub(el);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ma),o=is.dot(this.direction),l=-is.dot(ma),c=is.lengthSq(),h=Math.abs(1-a*a),f,d,u,y;if(h>0)if(f=a*l-o,d=a*o-l,y=r*h,f>=0)if(d>=-y)if(d<=y){let v=1/h;f*=v,d*=v,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-y?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=y?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(el).addScaledVector(ma,d),u}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){tl.subVectors(t,e),ga.subVectors(n,e),nl.crossVectors(tl,ga);let a=this.direction.dot(nl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;is.subVectors(this.origin,e);let l=o*this.direction.dot(ga.crossVectors(is,ga));if(l<0)return null;let c=o*this.direction.dot(tl.cross(is));if(c<0||l+c>a)return null;let h=-o*is.dot(nl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class i{constructor(e,t,n,s,r,a,o,l,c,h,f,d,u,y,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,d,u,y,v,g)}set(e,t,n,s,r,a,o,l,c,h,f,d,u,y,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=y,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),a=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*f,y=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+y*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=y+u*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,y=c*h,v=c*f;t[0]=d+v*o,t[4]=y*o-u,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-y,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,y=c*h,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=y+u*o,t[1]=u+y*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,u=a*f,y=o*h,v=o*f;t[0]=l*h,t[4]=y*c-u,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=u*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,u=a*c,y=o*l,v=o*c;t[0]=l*h,t[4]=v-d*f,t[8]=y*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*f+y,t[10]=d-v*f}else if(e.order==="XZY"){let d=a*l,u=a*c,y=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=a*h,t[9]=u*f-y,t[2]=y*f-u,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wf,e,Xf)}lookAt(e,t,n){let s=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ss.crossVectors(n,hi),ss.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ss.crossVectors(n,hi)),ss.normalize(),xa.crossVectors(hi,ss),s[0]=ss.x,s[4]=xa.x,s[8]=hi.x,s[1]=ss.y,s[5]=xa.y,s[9]=hi.y,s[2]=ss.z,s[6]=xa.z,s[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],y=n[2],v=n[6],g=n[10],m=n[14],M=n[3],_=n[7],w=n[11],U=n[15],I=s[0],L=s[4],q=s[8],b=s[12],A=s[1],Y=s[5],ae=s[9],Me=s[13],P=s[2],N=s[6],G=s[10],re=s[14],ie=s[3],ee=s[7],H=s[11],de=s[15];return r[0]=a*I+o*A+l*P+c*ie,r[4]=a*L+o*Y+l*N+c*ee,r[8]=a*q+o*ae+l*G+c*H,r[12]=a*b+o*Me+l*re+c*de,r[1]=h*I+f*A+d*P+u*ie,r[5]=h*L+f*Y+d*N+u*ee,r[9]=h*q+f*ae+d*G+u*H,r[13]=h*b+f*Me+d*re+u*de,r[2]=y*I+v*A+g*P+m*ie,r[6]=y*L+v*Y+g*N+m*ee,r[10]=y*q+v*ae+g*G+m*H,r[14]=y*b+v*Me+g*re+m*de,r[3]=M*I+_*A+w*P+U*ie,r[7]=M*L+_*Y+w*N+U*ee,r[11]=M*q+_*ae+w*G+U*H,r[15]=M*b+_*Me+w*re+U*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],y=e[3],v=e[7],g=e[11],m=e[15];return y*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*u-n*l*u)+v*(+t*l*u-t*c*d+r*a*d-s*a*u+s*c*h-r*l*h)+g*(+t*c*f-t*o*u-r*a*f+n*a*u+r*o*h-n*c*h)+m*(-s*o*h-t*l*f+t*o*d+s*a*f-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],y=e[12],v=e[13],g=e[14],m=e[15],M=f*g*c-v*d*c+v*l*u-o*g*u-f*l*m+o*d*m,_=y*d*c-h*g*c-y*l*u+a*g*u+h*l*m-a*d*m,w=h*v*c-y*f*c+y*o*u-a*v*u-h*o*m+a*f*m,U=y*f*l-h*v*l-y*o*d+a*v*d+h*o*g-a*f*g,I=t*M+n*_+s*w+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=M*L,e[1]=(v*d*r-f*g*r-v*s*u+n*g*u+f*s*m-n*d*m)*L,e[2]=(o*g*r-v*l*r+v*s*c-n*g*c-o*s*m+n*l*m)*L,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*u-n*l*u)*L,e[4]=_*L,e[5]=(h*g*r-y*d*r+y*s*u-t*g*u-h*s*m+t*d*m)*L,e[6]=(y*l*r-a*g*r-y*s*c+t*g*c+a*s*m-t*l*m)*L,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*u+t*l*u)*L,e[8]=w*L,e[9]=(y*f*r-h*v*r-y*n*u+t*v*u+h*n*m-t*f*m)*L,e[10]=(a*v*r-y*o*r+y*n*c-t*v*c-a*n*m+t*o*m)*L,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*u-t*o*u)*L,e[12]=U*L,e[13]=(h*v*s-y*f*s+y*n*d-t*v*d-h*n*g+t*f*g)*L,e[14]=(y*o*s-a*v*s-y*n*l+t*v*l+a*n*g-t*o*g)*L,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,y=r*f,v=a*h,g=a*f,m=o*f,M=l*c,_=l*h,w=l*f,U=n.x,I=n.y,L=n.z;return s[0]=(1-(v+m))*U,s[1]=(u+w)*U,s[2]=(y-_)*U,s[3]=0,s[4]=(u-w)*I,s[5]=(1-(d+m))*I,s[6]=(g+M)*I,s[7]=0,s[8]=(y+_)*L,s[9]=(g-M)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ks.set(s[0],s[1],s[2]).length(),a=Ks.set(s[4],s[5],s[6]).length(),o=Ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ei.copy(this);let c=1/r,h=1/a,f=1/o;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=f,Ei.elements[9]*=f,Ei.elements[10]*=f,t.setFromRotationMatrix(Ei),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Vi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),u,y;if(o===Vi)u=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Wa)u=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vi){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(a-r),d=(t+e)*c,u=(n+s)*h,y,v;if(o===Vi)y=(a+r)*f,v=-2*f;else if(o===Wa)y=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ks=new B,Ei=new An,Wf=new B(0,0,0),Xf=new B(1,1,1),ss=new B,xa=new B,hi=new B,Wh=new An,Xh=new fs,Ka=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ka.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qf=0,qh=new B,Zs=new fs,Bi=new An,ya=new B,Nr=new B,Yf=new B,$f=new fs,Yh=new B(1,0,0),$h=new B(0,1,0),Kh=new B(0,0,1),Kf={type:"added"},Zf={type:"removed"},Zn=class i extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new Ka,n=new fs,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new An},normalMatrix:{value:new At}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ya.copy(e):ya.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Nr,ya,this.up):Bi.lookAt(ya,Nr,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,Yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,$f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Zn.DEFAULT_UP=new B(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=new B,ki=new B,il=new B,Hi=new B,Js=new B,js=new B,Zh=new B,sl=new B,rl=new B,al=new B,_a=!1,ar=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ti.subVectors(e,t),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ti.subVectors(s,t),ki.subVectors(n,t),il.subVectors(e,t);let a=Ti.dot(Ti),o=Ti.dot(ki),l=Ti.dot(il),c=ki.dot(ki),h=ki.dot(il),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,y=(a*h-o*l)*d;return r.set(1-u-y,y,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getUV(e,t,n,s,r,a,o,l){return _a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_a=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(a,Hi.y),l.addScaledVector(o,Hi.z),l)}static isFrontFacing(e,t,n,s){return Ti.subVectors(n,t),ki.subVectors(e,t),Ti.cross(ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),Ti.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return _a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_a=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Js.subVectors(s,n),js.subVectors(r,n),sl.subVectors(e,n);let l=Js.dot(sl),c=js.dot(sl);if(l<=0&&c<=0)return t.copy(n);rl.subVectors(e,s);let h=Js.dot(rl),f=js.dot(rl);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Js,a);al.subVectors(e,r);let u=Js.dot(al),y=js.dot(al);if(y>=0&&u<=y)return t.copy(r);let v=u*c-l*y;if(v<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(js,o);let g=h*y-u*f;if(g<=0&&f-h>=0&&u-y>=0)return Zh.subVectors(r,s),o=(f-h)/(f-h+(u-y)),t.copy(s).addScaledVector(Zh,o);let m=1/(g+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(Js,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},va={h:0,s:0,l:0};function ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var mt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Jt.workingColorSpace){if(e=Bf(e,1),t=Xn(t,0,1),n=Xn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ol(a,r,e+1/3),this.g=ol(a,r,e),this.b=ol(a,r,e-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(e,t=zn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zn){let n=Zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return Jt.fromWorkingColorSpace(Wn.copy(this),e),Math.round(Xn(Wn.r*255,0,255))*65536+Math.round(Xn(Wn.g*255,0,255))*256+Math.round(Xn(Wn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Wn.copy(this),t);let n=Wn.r,s=Wn.g,r=Wn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=zn){Jt.fromWorkingColorSpace(Wn.copy(this),e);let t=Wn.r,n=Wn.g,s=Wn.b;return e!==zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(va);let n=Yo(rs.h,va.h,t),s=Yo(rs.s,va.s,t),r=Yo(rs.l,va.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new mt;mt.NAMES=Zu;var Jf=0,ps=class extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=hr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=bl,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(n.blending=this.blending),this.side!==us&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ml&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==Ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vn=class extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wn=new B,Ma=new Fe,ai=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=os,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array),s=si(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array),s=si(s,this.array),r=si(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fh&&(e.usage=this.usage),e}};var Za=class extends ai{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ja=class extends ai{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mn=class extends ai{constructor(e,t,n){super(new Float32Array(e),t,n)}};var jf=0,pi=new An,ll=new Zn,Qs=new B,ui=new Ps,Or=new Ps,kn=new B,oi=class i extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ku(e)?Ja:Za)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new At().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(kn.addVectors(ui.min,Or.min),ui.expandByPoint(kn),kn.addVectors(ui.max,Or.max),ui.expandByPoint(kn)):(ui.expandByPoint(Or.min),ui.expandByPoint(Or.max))}ui.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)kn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kn.fromBufferAttribute(o,c),l&&(Qs.fromBufferAttribute(e,c),kn.add(Qs)),s=Math.max(s,n.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new B,h[A]=new B;let f=new B,d=new B,u=new B,y=new Fe,v=new Fe,g=new Fe,m=new B,M=new B;function _(A,Y,ae){f.fromArray(s,A*3),d.fromArray(s,Y*3),u.fromArray(s,ae*3),y.fromArray(a,A*2),v.fromArray(a,Y*2),g.fromArray(a,ae*2),d.sub(f),u.sub(f),v.sub(y),g.sub(y);let Me=1/(v.x*g.y-g.x*v.y);isFinite(Me)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(u,-v.y).multiplyScalar(Me),M.copy(u).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(Me),c[A].add(m),c[Y].add(m),c[ae].add(m),h[A].add(M),h[Y].add(M),h[ae].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let A=0,Y=w.length;A<Y;++A){let ae=w[A],Me=ae.start,P=ae.count;for(let N=Me,G=Me+P;N<G;N+=3)_(n[N+0],n[N+1],n[N+2])}let U=new B,I=new B,L=new B,q=new B;function b(A){L.fromArray(r,A*3),q.copy(L);let Y=c[A];U.copy(Y),U.sub(L.multiplyScalar(L.dot(Y))).normalize(),I.crossVectors(q,Y);let Me=I.dot(h[A])<0?-1:1;l[A*4]=U.x,l[A*4+1]=U.y,l[A*4+2]=U.z,l[A*4+3]=Me}for(let A=0,Y=w.length;A<Y;++A){let ae=w[A],Me=ae.start,P=ae.count;for(let N=Me,G=Me+P;N<G;N+=3)b(n[N+0]),b(n[N+1]),b(n[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let d=0,u=e.count;d<u;d+=3){let y=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,y=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let m=0;m<h;m++)d[y++]=c[u++]}return new ai(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jh=new An,bs=new Xr,ba=new gr,jh=new B,er=new B,tr=new B,nr=new B,cl=new B,Sa=new B,Ea=new Fe,Ta=new Fe,wa=new Fe,Qh=new B,eu=new B,tu=new B,Aa=new B,Ra=new B,Xe=class extends Zn{constructor(e=new oi,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(cl.fromBufferAttribute(f,e),a?Sa.addScaledVector(cl,h):Sa.addScaledVector(cl.sub(t),h))}t.add(Sa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(ba.containsPoint(bs.origin)===!1&&(bs.intersectSphere(ba,jh)===null||bs.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Jh.copy(r).invert(),bs.copy(e.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],m=a[g.materialIndex],M=Math.max(g.start,u.start),_=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let w=M,U=_;w<U;w+=3){let I=o.getX(w),L=o.getX(w+1),q=o.getX(w+2);s=Ca(this,m,e,n,c,h,f,I,L,q),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let g=y,m=v;g<m;g+=3){let M=o.getX(g),_=o.getX(g+1),w=o.getX(g+2);s=Ca(this,a,e,n,c,h,f,M,_,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],m=a[g.materialIndex],M=Math.max(g.start,u.start),_=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let w=M,U=_;w<U;w+=3){let I=w,L=w+1,q=w+2;s=Ca(this,m,e,n,c,h,f,I,L,q),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let g=y,m=v;g<m;g+=3){let M=g,_=g+1,w=g+2;s=Ca(this,a,e,n,c,h,f,M,_,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Qf(i,e,t,n,s,r,a,o){let l;if(e.side===ri?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===us,o),l===null)return null;Ra.copy(o),Ra.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ra);return c<t.near||c>t.far?null:{distance:c,point:Ra.clone(),object:i}}function Ca(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,er),i.getVertexPosition(l,tr),i.getVertexPosition(c,nr);let h=Qf(i,e,t,n,er,tr,nr,Aa);if(h){s&&(Ea.fromBufferAttribute(s,o),Ta.fromBufferAttribute(s,l),wa.fromBufferAttribute(s,c),h.uv=ar.getInterpolation(Aa,er,tr,nr,Ea,Ta,wa,new Fe)),r&&(Ea.fromBufferAttribute(r,o),Ta.fromBufferAttribute(r,l),wa.fromBufferAttribute(r,c),h.uv1=ar.getInterpolation(Aa,er,tr,nr,Ea,Ta,wa,new Fe),h.uv2=h.uv1),a&&(Qh.fromBufferAttribute(a,o),eu.fromBufferAttribute(a,l),tu.fromBufferAttribute(a,c),h.normal=ar.getInterpolation(Aa,er,tr,nr,Qh,eu,tu,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};ar.getNormal(er,tr,nr,f.normal),h.face=f}return h}var Cn=class i extends oi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(h,3)),this.setAttribute("uv",new mn(f,2));function y(v,g,m,M,_,w,U,I,L,q,b){let A=w/L,Y=U/q,ae=w/2,Me=U/2,P=I/2,N=L+1,G=q+1,re=0,ie=0,ee=new B;for(let H=0;H<G;H++){let de=H*Y-Me;for(let le=0;le<N;le++){let W=le*A-ae;ee[v]=W*M,ee[g]=de*_,ee[m]=P,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[g]=0,ee[m]=I>0?1:-1,h.push(ee.x,ee.y,ee.z),f.push(le/L),f.push(1-H/q),re+=1}}for(let H=0;H<q;H++)for(let de=0;de<L;de++){let le=d+de+N*H,W=d+de+N*(H+1),ue=d+(de+1)+N*(H+1),Ce=d+(de+1)+N*H;l.push(le,W,Ce),l.push(W,ue,Ce),ie+=6}o.addGroup(u,ie,b),u+=ie,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yn(i){let e={};for(let t=0;t<i.length;t++){let n=xr(i[t]);for(let s in n)e[s]=n[s]}return e}function ep(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ju(i){return i.getRenderTarget()===null?i.outputColorSpace:Jt.workingColorSpace}var tp={clone:xr,merge:Yn},np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xi=class extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ja=class extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kn=class extends ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ir=-90,sr=1,Il=class extends Zn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kn(ir,sr,e,t);s.layers=this.layers,this.add(s);let r=new Kn(ir,sr,e,t);r.layers=this.layers,this.add(r);let a=new Kn(ir,sr,e,t);a.layers=this.layers,this.add(a);let o=new Kn(ir,sr,e,t);o.layers=this.layers,this.add(o);let l=new Kn(ir,sr,e,t);l.layers=this.layers,this.add(l);let c=new Kn(ir,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Qa=class extends yi{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ll=class extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cs?zn:gi),this.texture=new Qa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ri,blending:ls});r.uniforms.tEquirect.value=t;let a=new Xe(s,r),o=t.minFilter;return t.minFilter===Gr&&(t.minFilter=mi),new Il(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},hl=new B,sp=new B,rp=new At,wi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hl.subVectors(n,t).cross(sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rp.getNormalMatrix(e),s=this.coplanarPoint(hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new gr,Pa=new B,Yr=class{constructor(e=new wi,t=new wi,n=new wi,s=new wi,r=new wi,a=new wi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],u=s[8],y=s[9],v=s[10],g=s[11],m=s[12],M=s[13],_=s[14],w=s[15];if(n[0].setComponents(l-r,d-c,g-u,w-m).normalize(),n[1].setComponents(l+r,d+c,g+u,w+m).normalize(),n[2].setComponents(l+a,d+h,g+y,w+M).normalize(),n[3].setComponents(l-a,d-h,g-y,w-M).normalize(),n[4].setComponents(l-o,d-f,g-v,w-_).normalize(),t===Vi)n[5].setComponents(l+o,d+f,g+v,w+_).normalize();else if(t===Wa)n[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Pa.x=s.normal.x>0?e.max.x:e.min.x,Pa.y=s.normal.y>0?e.max.y:e.min.y,Pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ju(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ap(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,d=c.usage,u=f.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,f){let d=h.array,u=h._updateRange,y=h.updateRanges;if(i.bindBuffer(f,c),u.count===-1&&y.length===0&&i.bufferSubData(f,0,d),y.length!==0){for(let v=0,g=y.length;v<g;v++){let m=y[v];t?i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}var qi=class i extends oi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,u=[],y=[],v=[],g=[];for(let m=0;m<h;m++){let M=m*d-a;for(let _=0;_<c;_++){let w=_*f-r;y.push(w,-M,0),v.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let _=M+c*m,w=M+c*(m+1),U=M+1+c*(m+1),I=M+1+c*m;u.push(_,w,I),u.push(w,U,I)}this.setIndex(u),this.setAttribute("position",new mn(y,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
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
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
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
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
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
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Mp=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lp=`vec3 transformedNormal = objectNormal;
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
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`
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
}`,kp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
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
}`,Kp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
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
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
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
#endif`,am=`struct PhysicalMaterial {
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
}`,om=`
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
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
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
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
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xm=`float getShadowMask() {
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
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
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
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
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
}`,fg=`#if DEPTH_PACKING == 3200
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
}`,pg=`#define DISTANCE
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
}`,mg=`#define DISTANCE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
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
}`,_g=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,Mg=`uniform vec3 diffuse;
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
}`,bg=`#define LAMBERT
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
}`,Sg=`#define LAMBERT
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
}`,Eg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,wg=`#define NORMAL
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
}`,Ag=`#define NORMAL
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
}`,Rg=`#define PHONG
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
}`,Cg=`#define PHONG
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
}`,Pg=`#define STANDARD
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
}`,Ig=`#define STANDARD
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
}`,Lg=`#define TOON
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
}`,Dg=`#define TOON
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
}`,Ug=`uniform float size;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Fg=`uniform vec3 color;
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
}`,Bg=`uniform float rotation;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:op,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:hp,alphatest_fragment:up,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:xp,beginnormal_vertex:yp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Tp,color_fragment:wp,color_pars_fragment:Ap,color_pars_vertex:Rp,color_vertex:Cp,common:Pp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Dp,displacementmap_vertex:Up,emissivemap_fragment:Np,emissivemap_pars_fragment:Op,colorspace_fragment:Fp,colorspace_pars_fragment:Bp,envmap_fragment:kp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:zp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:em,envmap_vertex:Gp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:qp,fog_pars_fragment:Yp,gradientmap_pars_fragment:$p,lightmap_fragment:Kp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:jp,lights_pars_begin:Qp,lights_toon_fragment:tm,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:am,lights_fragment_begin:om,lights_fragment_maps:lm,lights_fragment_end:cm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:xm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:_m,morphcolor_vertex:vm,morphnormal_vertex:Mm,morphtarget_pars_vertex:bm,morphtarget_vertex:Sm,normal_fragment_begin:Em,normal_fragment_maps:Tm,normal_pars_fragment:wm,normal_pars_vertex:Am,normal_vertex:Rm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,opaque_fragment:Um,packing:Nm,premultiplied_alpha_fragment:Om,project_vertex:Fm,dithering_fragment:Bm,dithering_pars_fragment:km,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:zm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Gm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:$m,skinnormal_vertex:Km,specularmap_fragment:Zm,specularmap_pars_fragment:Jm,tonemapping_fragment:jm,tonemapping_pars_fragment:Qm,transmission_fragment:eg,transmission_pars_fragment:tg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:sg,worldpos_vertex:rg,background_vert:ag,background_frag:og,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:hg,cube_frag:ug,depth_vert:dg,depth_frag:fg,distanceRGBA_vert:pg,distanceRGBA_frag:mg,equirect_vert:gg,equirect_frag:xg,linedashed_vert:yg,linedashed_frag:_g,meshbasic_vert:vg,meshbasic_frag:Mg,meshlambert_vert:bg,meshlambert_frag:Sg,meshmatcap_vert:Eg,meshmatcap_frag:Tg,meshnormal_vert:wg,meshnormal_frag:Ag,meshphong_vert:Rg,meshphong_frag:Cg,meshphysical_vert:Pg,meshphysical_frag:Ig,meshtoon_vert:Lg,meshtoon_frag:Dg,points_vert:Ug,points_frag:Ng,shadow_vert:Og,shadow_frag:Fg,sprite_vert:Bg,sprite_frag:kg},Re={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Li={basic:{uniforms:Yn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Yn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new mt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Yn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Yn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Yn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new mt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Yn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Yn([Re.points,Re.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Yn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Yn([Re.common,Re.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Yn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Yn([Re.sprite,Re.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Yn([Re.common,Re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Yn([Re.lights,Re.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Li.physical={uniforms:Yn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};var Ia={r:0,b:0,g:0};function Hg(i,e,t,n,s,r,a){let o=new mt(0),l=r===!0?0:1,c,h,f=null,d=0,u=null;function y(g,m){let M=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===xo)?(h===void 0&&(h=new Xe(new Cn(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:xr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(_.colorSpace)!==on,(f!==_||d!==_.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,d=_.version,u=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Xe(new qi(2,2),new Xi({name:"BackgroundMaterial",uniforms:xr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(_.colorSpace)!==on,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,m){g.getRGB(Ia,Ju(i)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:y}}function zg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,h=!1;function f(P,N,G,re,ie){let ee=!1;if(a){let H=v(re,G,N);c!==H&&(c=H,u(c.object)),ee=m(P,re,G,ie),ee&&M(P,re,G,ie)}else{let H=N.wireframe===!0;(c.geometry!==re.id||c.program!==G.id||c.wireframe!==H)&&(c.geometry=re.id,c.program=G.id,c.wireframe=H,ee=!0)}ie!==null&&t.update(ie,i.ELEMENT_ARRAY_BUFFER),(ee||h)&&(h=!1,q(P,N,G,re),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function y(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,N,G){let re=G.wireframe===!0,ie=o[P.id];ie===void 0&&(ie={},o[P.id]=ie);let ee=ie[N.id];ee===void 0&&(ee={},ie[N.id]=ee);let H=ee[re];return H===void 0&&(H=g(d()),ee[re]=H),H}function g(P){let N=[],G=[],re=[];for(let ie=0;ie<s;ie++)N[ie]=0,G[ie]=0,re[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:re,object:P,attributes:{},index:null}}function m(P,N,G,re){let ie=c.attributes,ee=N.attributes,H=0,de=G.getAttributes();for(let le in de)if(de[le].location>=0){let ue=ie[le],Ce=ee[le];if(Ce===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(Ce=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(Ce=P.instanceColor)),ue===void 0||ue.attribute!==Ce||Ce&&ue.data!==Ce.data)return!0;H++}return c.attributesNum!==H||c.index!==re}function M(P,N,G,re){let ie={},ee=N.attributes,H=0,de=G.getAttributes();for(let le in de)if(de[le].location>=0){let ue=ee[le];ue===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));let Ce={};Ce.attribute=ue,ue&&ue.data&&(Ce.data=ue.data),ie[le]=Ce,H++}c.attributes=ie,c.attributesNum=H,c.index=re}function _(){let P=c.newAttributes;for(let N=0,G=P.length;N<G;N++)P[N]=0}function w(P){U(P,0)}function U(P,N){let G=c.newAttributes,re=c.enabledAttributes,ie=c.attributeDivisors;G[P]=1,re[P]===0&&(i.enableVertexAttribArray(P),re[P]=1),ie[P]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),ie[P]=N)}function I(){let P=c.newAttributes,N=c.enabledAttributes;for(let G=0,re=N.length;G<re;G++)N[G]!==P[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function L(P,N,G,re,ie,ee,H){H===!0?i.vertexAttribIPointer(P,N,G,ie,ee):i.vertexAttribPointer(P,N,G,re,ie,ee)}function q(P,N,G,re){if(n.isWebGL2===!1&&(P.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let ie=re.attributes,ee=G.getAttributes(),H=N.defaultAttributeValues;for(let de in ee){let le=ee[de];if(le.location>=0){let W=ie[de];if(W===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let ue=W.normalized,Ce=W.itemSize,Te=t.get(W);if(Te===void 0)continue;let ze=Te.buffer,ht=Te.type,je=Te.bytesPerElement,Ke=n.isWebGL2===!0&&(ht===i.INT||ht===i.UNSIGNED_INT||W.gpuType===ku);if(W.isInterleavedBufferAttribute){let ut=W.data,j=ut.stride,cn=W.offset;if(ut.isInstancedInterleavedBuffer){for(let We=0;We<le.locationSize;We++)U(le.location+We,ut.meshPerAttribute);P.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let We=0;We<le.locationSize;We++)w(le.location+We);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let We=0;We<le.locationSize;We++)L(le.location+We,Ce/le.locationSize,ht,ue,j*je,(cn+Ce/le.locationSize*We)*je,Ke)}else{if(W.isInstancedBufferAttribute){for(let ut=0;ut<le.locationSize;ut++)U(le.location+ut,W.meshPerAttribute);P.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ut=0;ut<le.locationSize;ut++)w(le.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let ut=0;ut<le.locationSize;ut++)L(le.location+ut,Ce/le.locationSize,ht,ue,Ce*je,Ce/le.locationSize*ut*je,Ke)}}else if(H!==void 0){let ue=H[de];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(le.location,ue);break;case 3:i.vertexAttrib3fv(le.location,ue);break;case 4:i.vertexAttrib4fv(le.location,ue);break;default:i.vertexAttrib1fv(le.location,ue)}}}}I()}function b(){ae();for(let P in o){let N=o[P];for(let G in N){let re=N[G];for(let ie in re)y(re[ie].object),delete re[ie];delete N[G]}delete o[P]}}function A(P){if(o[P.id]===void 0)return;let N=o[P.id];for(let G in N){let re=N[G];for(let ie in re)y(re[ie].object),delete re[ie];delete N[G]}delete o[P.id]}function Y(P){for(let N in o){let G=o[N];if(G[P.id]===void 0)continue;let re=G[P.id];for(let ie in re)y(re[ie].object),delete re[ie];delete G[P.id]}}function ae(){Me(),h=!0,c!==l&&(c=l,u(c.object))}function Me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ae,resetDefaultState:Me,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:Y,initAttributes:_,enableAttribute:w,disableUnusedAttributes:I}}function Vg(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,d){if(d===0)return;let u,y;if(s)u=i,y="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[y](r,h,f,d),t.update(f,r,d)}function c(h,f,d){if(d===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let y=0;y<d;y++)this.render(h[y],f[y]);else{u.multiDrawArraysWEBGL(r,h,0,f,0,d);let y=0;for(let v=0;v<d;v++)y+=f[v];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Gg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,w=a||e.has("OES_texture_float"),U=_&&w,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:U,maxSamples:I}}function Wg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new wi,o=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let y=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||y===null||y.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,_=M*4,w=m.clippingState||null;l.value=w,w=h(y,d,_,u);for(let U=0;U!==_;++U)w[U]=t[U];m.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,y){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,y!==!0||g===null){let m=u+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,w=u;_!==v;++_,w+=4)a.copy(f[_]).applyMatrix4(M,o),a.normal.toArray(g,w),g[w+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Xg(i){let e=new WeakMap;function t(a,o){return o===Sl?a.mapping=fr:o===El&&(a.mapping=pr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Sl||o===El)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ll(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var eo=class extends ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},or=4,nu=[.125,.215,.35,.446,.526,.582],ws=20,ul=new eo,iu=new mt,dl=null,fl=0,pl=0,Es=(1+Math.sqrt(5))/2,rr=1/Es,su=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Es,rr),new B(0,Es,-rr),new B(rr,0,Es),new B(-rr,0,Es),new B(Es,rr,0),new B(-Es,rr,0)],to=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,fl,pl),e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Wr,format:Ri,colorSpace:Gi,depthBuffer:!1},s=ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qg(r)),this._blurMaterial=Yg(r,e,t)}return s}_compileMaterial(e){let t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,ul)}_sceneToCubeUV(e,t,n,s){let o=new Kn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(iu),h.toneMapping=cs,h.autoClear=!1;let u=new vn({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),y=new Xe(new Cn,u),v=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,v=!0):(u.color.copy(iu),v=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let _=this._cubeSize;La(s,M*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fr||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;La(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ul)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=su[(s-1)%su.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Xe(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ws-1),v=r/y,g=isFinite(r)?1+Math.floor(h*v):ws;g>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ws}`);let m=[],M=0;for(let L=0;L<ws;++L){let q=L/v,b=Math.exp(-q*q/2);m.push(b),L===0?M+=b:L<g&&(M+=2*b)}for(let L=0;L<m.length;L++)m[L]=m[L]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-n;let w=this._sizeLods[s],U=3*w*(s>_-or?s-_+or:0),I=4*(this._cubeSize-w);La(t,U,I,3*w,2*w),l.setRenderTarget(t),l.render(f,ul)}};function qg(i){let e=[],t=[],n=[],s=i,r=i-or+1+nu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-or?l=nu[a-i+or-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,y=6,v=3,g=2,m=1,M=new Float32Array(v*y*u),_=new Float32Array(g*y*u),w=new Float32Array(m*y*u);for(let I=0;I<u;I++){let L=I%3*2/3-1,q=I>2?0:-1,b=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];M.set(b,v*y*I),_.set(d,g*y*I);let A=[I,I,I,I,I,I];w.set(A,m*y*I)}let U=new oi;U.setAttribute("position",new ai(M,v)),U.setAttribute("uv",new ai(_,g)),U.setAttribute("faceIndex",new ai(w,m)),e.push(U),s>or&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ru(i,e,t){let n=new Wi(i,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function La(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Yg(i,e,t){let n=new Float32Array(ws),s=new B(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xc(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function au(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function ou(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function $g(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Sl||l===El,h=l===fr||l===pr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new to(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new to(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Kg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zg(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);for(let y in d.morphAttributes){let v=d.morphAttributes[y];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let y in d)e.update(d[y],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let y in u){let v=u[y];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,y=f.attributes.position,v=0;if(u!==null){let M=u.array;v=u.version;for(let _=0,w=M.length;_<w;_+=3){let U=M[_+0],I=M[_+1],L=M[_+2];d.push(U,I,I,L,L,U)}}else if(y!==void 0){let M=y.array;v=y.version;for(let _=0,w=M.length/3-1;_<w;_+=3){let U=_+0,I=_+1,L=_+2;d.push(U,I,I,L,L,U)}}else return;let g=new(Ku(d)?Ja:Za)(d,1);g.version=v;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Jg(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,y){i.drawElements(r,y,o,u*l),t.update(y,r,1)}function f(u,y,v){if(v===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,y,o,u*l,v),t.update(y,r,v)}function d(u,y,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(u[m]/l,y[m]);else{g.multiDrawElementsWEBGL(r,y,0,o,u,0,v);let m=0;for(let M=0;M<v;M++)m+=y[M];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function jg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qg(i,e){return i[0]-e[0]}function e0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function t0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Hn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=u!==void 0?u.length:0,v=r.get(h);if(v===void 0||v.count!==y){let P=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],q=0;M===!0&&(q=1),_===!0&&(q=2),w===!0&&(q=3);let b=h.attributes.position.count*q,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let Y=new Float32Array(b*A*4*y),ae=new $a(Y,b,A,y);ae.type=os,ae.needsUpdate=!0;let Me=q*4;for(let N=0;N<y;N++){let G=U[N],re=I[N],ie=L[N],ee=b*A*4*N;for(let H=0;H<G.count;H++){let de=H*Me;M===!0&&(a.fromBufferAttribute(G,H),Y[ee+de+0]=a.x,Y[ee+de+1]=a.y,Y[ee+de+2]=a.z,Y[ee+de+3]=0),_===!0&&(a.fromBufferAttribute(re,H),Y[ee+de+4]=a.x,Y[ee+de+5]=a.y,Y[ee+de+6]=a.z,Y[ee+de+7]=0),w===!0&&(a.fromBufferAttribute(ie,H),Y[ee+de+8]=a.x,Y[ee+de+9]=a.y,Y[ee+de+10]=a.z,Y[ee+de+11]=ie.itemSize===4?a.w:1)}}v={count:y,texture:ae,size:new Fe(b,A)},r.set(h,v),h.addEventListener("dispose",P)}let g=0;for(let M=0;M<d.length;M++)g+=d[M];let m=h.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let u=d===void 0?0:d.length,y=n[h.id];if(y===void 0||y.length!==u){y=[];for(let _=0;_<u;_++)y[_]=[_,0];n[h.id]=y}for(let _=0;_<u;_++){let w=y[_];w[0]=_,w[1]=d[_]}y.sort(e0);for(let _=0;_<8;_++)_<u&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Qg);let v=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let w=o[_],U=w[0],I=w[1];U!==Number.MAX_SAFE_INTEGER&&I?(v&&h.getAttribute("morphTarget"+_)!==v[U]&&h.setAttribute("morphTarget"+_,v[U]),g&&h.getAttribute("morphNormal"+_)!==g[U]&&h.setAttribute("morphNormal"+_,g[U]),s[_]=I,m+=I):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function n0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var no=class extends yi{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Rs,h!==Rs&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rs&&(n=as),n===void 0&&h===mr&&(n=As),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$n,this.minFilter=l!==void 0?l:$n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qu=new yi,ed=new no(1,1);ed.compareFunction=$u;var td=new $a,nd=new Pl,id=new Qa,lu=[],cu=[],hu=new Float32Array(16),uu=new Float32Array(9),du=new Float32Array(4);function br(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=lu[s];if(r===void 0&&(r=new Float32Array(s),lu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function In(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _o(i,e){let t=cu[e];t===void 0&&(t=new Int32Array(e),cu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function s0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2fv(this.addr,e),In(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pn(t,e))return;i.uniform3fv(this.addr,e),In(t,e)}}function a0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4fv(this.addr,e),In(t,e)}}function o0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,n))return;du.set(n),i.uniformMatrix2fv(this.addr,!1,du),In(t,n)}}function l0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,n))return;uu.set(n),i.uniformMatrix3fv(this.addr,!1,uu),In(t,n)}}function c0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,n))return;hu.set(n),i.uniformMatrix4fv(this.addr,!1,hu),In(t,n)}}function h0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2iv(this.addr,e),In(t,e)}}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;i.uniform3iv(this.addr,e),In(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4iv(this.addr,e),In(t,e)}}function p0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2uiv(this.addr,e),In(t,e)}}function g0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;i.uniform3uiv(this.addr,e),In(t,e)}}function x0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4uiv(this.addr,e),In(t,e)}}function y0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ed:Qu;t.setTexture2D(e||r,s)}function _0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nd,s)}function v0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||id,s)}function M0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||td,s)}function b0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return a0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return M0}}function S0(i,e){i.uniform1fv(this.addr,e)}function E0(i,e){let t=br(e,this.size,2);i.uniform2fv(this.addr,t)}function T0(i,e){let t=br(e,this.size,3);i.uniform3fv(this.addr,t)}function w0(i,e){let t=br(e,this.size,4);i.uniform4fv(this.addr,t)}function A0(i,e){let t=br(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function R0(i,e){let t=br(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function C0(i,e){let t=br(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function P0(i,e){i.uniform1iv(this.addr,e)}function I0(i,e){i.uniform2iv(this.addr,e)}function L0(i,e){i.uniform3iv(this.addr,e)}function D0(i,e){i.uniform4iv(this.addr,e)}function U0(i,e){i.uniform1uiv(this.addr,e)}function N0(i,e){i.uniform2uiv(this.addr,e)}function O0(i,e){i.uniform3uiv(this.addr,e)}function F0(i,e){i.uniform4uiv(this.addr,e)}function B0(i,e,t){let n=this.cache,s=e.length,r=_o(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Qu,r[a])}function k0(i,e,t){let n=this.cache,s=e.length,r=_o(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||nd,r[a])}function H0(i,e,t){let n=this.cache,s=e.length,r=_o(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||id,r[a])}function z0(i,e,t){let n=this.cache,s=e.length,r=_o(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||td,r[a])}function V0(i){switch(i){case 5126:return S0;case 35664:return E0;case 35665:return T0;case 35666:return w0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return P0;case 35667:case 35671:return I0;case 35668:case 35672:return L0;case 35669:case 35673:return D0;case 5125:return U0;case 36294:return N0;case 36295:return O0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return z0}}var Dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b0(t.type)}},Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V0(t.type)}},Nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ml=/(\w+)(\])?(\[|\.)?/g;function fu(i,e){i.seq.push(e),i.map[e.id]=e}function G0(i,e,t){let n=i.name,s=n.length;for(ml.lastIndex=0;;){let r=ml.exec(n),a=ml.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fu(t,c===void 0?new Dl(o,i,e):new Ul(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Nl(o),fu(t,f)),t=f}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);G0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function pu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var W0=37297,X0=0;function q0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Y0(i){let e=Jt.getPrimaries(Jt.workingColorSpace),t=Jt.getPrimaries(i),n;switch(e===t?n="":e===Ga&&t===Va?n="LinearDisplayP3ToLinearSRGB":e===Va&&t===Ga&&(n="LinearSRGBToLinearDisplayP3"),i){case Gi:case yo:return[n,"LinearTransferOETF"];case zn:case gc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+q0(i.getShaderSource(e),a)}else return s}function $0(i,e){let t=Y0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function K0(i,e){let t;switch(e){case ff:t="Linear";break;case pf:t="Reinhard";break;case mf:t="OptimizedCineon";break;case gf:t="ACESFilmic";break;case yf:t="AgX";break;case xf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Z0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(lr).join(`
`)}function j0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function lr(i){return i!==""}function gu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(ex,nx)}var tx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nx(i,e){let t=Tt[e];if(t===void 0){let n=tx.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}var ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(ix,sx)}function sx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _u(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ou?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ox(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function lx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fu:e="ENVMAP_BLENDING_MULTIPLY";break;case uf:e="ENVMAP_BLENDING_MIX";break;case df:e="ENVMAP_BLENDING_ADD";break}return e}function cx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=rx(t),c=ax(t),h=ox(t),f=lx(t),d=cx(t),u=t.isWebGL2?"":Z0(t),y=J0(t),v=j0(r),g=s.createProgram(),m,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(lr).join(`
`),m.length>0&&(m+=`
`),M=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(lr).join(`
`),M.length>0&&(M+=`
`)):(m=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),M=[u,_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cs?"#define TONE_MAPPING":"",t.toneMapping!==cs?Tt.tonemapping_pars_fragment:"",t.toneMapping!==cs?K0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,$0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=Ol(a),a=gu(a,t),a=xu(a,t),o=Ol(o),o=gu(o,t),o=xu(o,t),a=yu(a),o=yu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let w=_+m+a,U=_+M+o,I=pu(s,s.VERTEX_SHADER,w),L=pu(s,s.FRAGMENT_SHADER,U);s.attachShader(g,I),s.attachShader(g,L),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function q(ae){if(i.debug.checkShaderErrors){let Me=s.getProgramInfoLog(g).trim(),P=s.getShaderInfoLog(I).trim(),N=s.getShaderInfoLog(L).trim(),G=!0,re=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,I,L);else{let ie=mu(s,I,"vertex"),ee=mu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+Me+`
`+ie+`
`+ee)}else Me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Me):(P===""||N==="")&&(re=!1);re&&(ae.diagnostics={runnable:G,programLog:Me,vertexShader:{log:P,prefix:m},fragmentShader:{log:N,prefix:M}})}s.deleteShader(I),s.deleteShader(L),b=new dr(s,g),A=Q0(s,g)}let b;this.getUniforms=function(){return b===void 0&&q(this),b};let A;this.getAttributes=function(){return A===void 0&&q(this),A};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=s.getProgramParameter(g,W0)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=L,this}var ux=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bl(e),t.set(e,n)),n}},Bl=class{constructor(e){this.id=ux++,this.code=e,this.usedTimes=0}};function dx(i,e,t,n,s,r,a){let o=new qr,l=new Fl,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function g(b,A,Y,ae,Me){let P=ae.fog,N=Me.geometry,G=b.isMeshStandardMaterial?ae.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),ie=re&&re.mapping===xo?re.image.height:null,ee=y[b.type];b.precision!==null&&(u=s.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let H=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,de=H!==void 0?H.length:0,le=0;N.morphAttributes.position!==void 0&&(le=1),N.morphAttributes.normal!==void 0&&(le=2),N.morphAttributes.color!==void 0&&(le=3);let W,ue,Ce,Te;if(ee){let gn=Li[ee];W=gn.vertexShader,ue=gn.fragmentShader}else W=b.vertexShader,ue=b.fragmentShader,l.update(b),Ce=l.getVertexShaderID(b),Te=l.getFragmentShaderID(b);let ze=i.getRenderTarget(),ht=Me.isInstancedMesh===!0,je=Me.isBatchedMesh===!0,Ke=!!b.map,ut=!!b.matcap,j=!!re,cn=!!b.aoMap,We=!!b.lightMap,nt=!!b.bumpMap,Ne=!!b.normalMap,rn=!!b.displacementMap,_t=!!b.emissiveMap,R=!!b.metalnessMap,S=!!b.roughnessMap,te=b.anisotropy>0,be=b.clearcoat>0,ve=b.iridescence>0,Se=b.sheen>0,Ve=b.transmission>0,De=te&&!!b.anisotropyMap,ke=be&&!!b.clearcoatMap,it=be&&!!b.clearcoatNormalMap,vt=be&&!!b.clearcoatRoughnessMap,ye=ve&&!!b.iridescenceMap,Ht=ve&&!!b.iridescenceThicknessMap,St=Se&&!!b.sheenColorMap,at=Se&&!!b.sheenRoughnessMap,Ye=!!b.specularMap,Be=!!b.specularColorMap,st=!!b.specularIntensityMap,ot=Ve&&!!b.transmissionMap,gt=Ve&&!!b.thicknessMap,Ze=!!b.gradientMap,we=!!b.alphaMap,F=b.alphaTest>0,Ae=!!b.alphaHash,Pe=!!b.extensions,lt=!!N.attributes.uv1,Je=!!N.attributes.uv2,Ot=!!N.attributes.uv3,kt=cs;return b.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(kt=i.toneMapping),{isWebGL2:h,shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:ue,defines:b.defines,customVertexShaderID:Ce,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:je,instancing:ht,instancingColor:ht&&Me.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:Gi,map:Ke,matcap:ut,envMap:j,envMapMode:j&&re.mapping,envMapCubeUVHeight:ie,aoMap:cn,lightMap:We,bumpMap:nt,normalMap:Ne,displacementMap:d&&rn,emissiveMap:_t,normalMapObjectSpace:Ne&&b.normalMapType===Pf,normalMapTangentSpace:Ne&&b.normalMapType===Yu,metalnessMap:R,roughnessMap:S,anisotropy:te,anisotropyMap:De,clearcoat:be,clearcoatMap:ke,clearcoatNormalMap:it,clearcoatRoughnessMap:vt,iridescence:ve,iridescenceMap:ye,iridescenceThicknessMap:Ht,sheen:Se,sheenColorMap:St,sheenRoughnessMap:at,specularMap:Ye,specularColorMap:Be,specularIntensityMap:st,transmission:Ve,transmissionMap:ot,thicknessMap:gt,gradientMap:Ze,opaque:b.transparent===!1&&b.blending===hr,alphaMap:we,alphaTest:F,alphaHash:Ae,combine:b.combine,mapUv:Ke&&v(b.map.channel),aoMapUv:cn&&v(b.aoMap.channel),lightMapUv:We&&v(b.lightMap.channel),bumpMapUv:nt&&v(b.bumpMap.channel),normalMapUv:Ne&&v(b.normalMap.channel),displacementMapUv:rn&&v(b.displacementMap.channel),emissiveMapUv:_t&&v(b.emissiveMap.channel),metalnessMapUv:R&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:De&&v(b.anisotropyMap.channel),clearcoatMapUv:ke&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:at&&v(b.sheenRoughnessMap.channel),specularMapUv:Ye&&v(b.specularMap.channel),specularColorMapUv:Be&&v(b.specularColorMap.channel),specularIntensityMapUv:st&&v(b.specularIntensityMap.channel),transmissionMapUv:ot&&v(b.transmissionMap.channel),thicknessMapUv:gt&&v(b.thicknessMap.channel),alphaMapUv:we&&v(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ne||te),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:lt,vertexUv2s:Je,vertexUv3s:Ot,pointsUvs:Me.isPoints===!0&&!!N.attributes.uv&&(Ke||we),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Me.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ke&&b.map.isVideoTexture===!0&&Jt.getTransfer(b.map.colorSpace)===on,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_n,flipSided:b.side===ri,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Pe&&b.extensions.derivatives===!0,extensionFragDepth:Pe&&b.extensions.fragDepth===!0,extensionDrawBuffers:Pe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pe&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){let A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(let Y in b.defines)A.push(Y),A.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(M(A,b),_(A,b),A.push(i.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function M(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function _(b,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function w(b){let A=y[b.type],Y;if(A){let ae=Li[A];Y=tp.clone(ae.uniforms)}else Y=b.uniforms;return Y}function U(b,A){let Y;for(let ae=0,Me=c.length;ae<Me;ae++){let P=c[ae];if(P.cacheKey===A){Y=P,++Y.usedTimes;break}}return Y===void 0&&(Y=new hx(i,A,b,r),c.push(Y)),Y}function I(b){if(--b.usedTimes===0){let A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function q(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:U,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:q}}function fx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function px(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,u,y,v,g){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:u,groupOrder:y,renderOrder:f.renderOrder,z:v,group:g},i[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=u,m.groupOrder=y,m.renderOrder=f.renderOrder,m.z=v,m.group=g),e++,m}function o(f,d,u,y,v,g){let m=a(f,d,u,y,v,g);u.transmission>0?n.push(m):u.transparent===!0?s.push(m):t.push(m)}function l(f,d,u,y,v,g){let m=a(f,d,u,y,v,g);u.transmission>0?n.unshift(m):u.transparent===!0?s.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||px),n.length>1&&n.sort(d||vu),s.length>1&&s.sort(d||vu)}function h(){for(let f=e,d=i.length;f<d;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function mx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Mu,i.set(n,[a])):s>=r.length?(a=new Mu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function gx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new mt};break;case"SpotLight":t={position:new B,direction:new B,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function xx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yx=0;function _x(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vx(i,e){let t=new gx,n=xx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new B);let r=new B,a=new An,o=new An;function l(h,f){let d=0,u=0,y=0;for(let ae=0;ae<9;ae++)s.probe[ae].set(0,0,0);let v=0,g=0,m=0,M=0,_=0,w=0,U=0,I=0,L=0,q=0,b=0;h.sort(_x);let A=f===!0?Math.PI:1;for(let ae=0,Me=h.length;ae<Me;ae++){let P=h[ae],N=P.color,G=P.intensity,re=P.distance,ie=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*G*A,u+=N.g*G*A,y+=N.b*G*A;else if(P.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(P.sh.coefficients[ee],G);b++}else if(P.isDirectionalLight){let ee=t.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){let H=P.shadow,de=n.get(P);de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,s.directionalShadow[v]=de,s.directionalShadowMap[v]=ie,s.directionalShadowMatrix[v]=P.shadow.matrix,w++}s.directional[v]=ee,v++}else if(P.isSpotLight){let ee=t.get(P);ee.position.setFromMatrixPosition(P.matrixWorld),ee.color.copy(N).multiplyScalar(G*A),ee.distance=re,ee.coneCos=Math.cos(P.angle),ee.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ee.decay=P.decay,s.spot[m]=ee;let H=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,H.updateMatrices(P),P.castShadow&&q++),s.spotLightMatrix[m]=H.matrix,P.castShadow){let de=n.get(P);de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,s.spotShadow[m]=de,s.spotShadowMap[m]=ie,I++}m++}else if(P.isRectAreaLight){let ee=t.get(P);ee.color.copy(N).multiplyScalar(G),ee.halfWidth.set(P.width*.5,0,0),ee.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=ee,M++}else if(P.isPointLight){let ee=t.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity*A),ee.distance=P.distance,ee.decay=P.decay,P.castShadow){let H=P.shadow,de=n.get(P);de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,de.shadowCameraNear=H.camera.near,de.shadowCameraFar=H.camera.far,s.pointShadow[g]=de,s.pointShadowMap[g]=ie,s.pointShadowMatrix[g]=P.shadow.matrix,U++}s.point[g]=ee,g++}else if(P.isHemisphereLight){let ee=t.get(P);ee.skyColor.copy(P.color).multiplyScalar(G*A),ee.groundColor.copy(P.groundColor).multiplyScalar(G*A),s.hemi[_]=ee,_++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=u,s.ambient[2]=y;let Y=s.hash;(Y.directionalLength!==v||Y.pointLength!==g||Y.spotLength!==m||Y.rectAreaLength!==M||Y.hemiLength!==_||Y.numDirectionalShadows!==w||Y.numPointShadows!==U||Y.numSpotShadows!==I||Y.numSpotMaps!==L||Y.numLightProbes!==b)&&(s.directional.length=v,s.spot.length=m,s.rectArea.length=M,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=I+L-q,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=b,Y.directionalLength=v,Y.pointLength=g,Y.spotLength=m,Y.rectAreaLength=M,Y.hemiLength=_,Y.numDirectionalShadows=w,Y.numPointShadows=U,Y.numSpotShadows=I,Y.numSpotMaps=L,Y.numLightProbes=b,s.version=yx++)}function c(h,f){let d=0,u=0,y=0,v=0,g=0,m=f.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let w=h[M];if(w.isDirectionalLight){let U=s.directional[d];U.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(m),d++}else if(w.isSpotLight){let U=s.spot[y];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(m),U.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(m),y++}else if(w.isRectAreaLight){let U=s.rectArea[v];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){let U=s.point[u];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){let U=s.hemi[g];U.direction.setFromMatrixPosition(w.matrixWorld),U.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:s}}function bu(i,e){let t=new vx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Mx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new bu(i,e),t.set(r,[l])):a>=o.length?(l=new bu(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var kl=class extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hl=class extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
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
}`;function Ex(i,e,t){let n=new Yr,s=new Fe,r=new Fe,a=new Hn,o=new kl({depthPacking:Cf}),l=new Hl,c={},h=t.maxTextureSize,f={[us]:ri,[ri]:us,[_n]:_n},d=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:bx,fragmentShader:Sx}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let y=new oi;y.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Xe(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let m=this.type;this.render=function(I,L,q){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let b=i.getRenderTarget(),A=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),ae=i.state;ae.setBlending(ls),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);let Me=m!==zi&&this.type===zi,P=m===zi&&this.type!==zi;for(let N=0,G=I.length;N<G;N++){let re=I[N],ie=re.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let ee=ie.getFrameExtents();if(s.multiply(ee),r.copy(ie.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,ie.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,ie.mapSize.y=r.y)),ie.map===null||Me===!0||P===!0){let de=this.type!==zi?{minFilter:$n,magFilter:$n}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Wi(s.x,s.y,de),ie.map.texture.name=re.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();let H=ie.getViewportCount();for(let de=0;de<H;de++){let le=ie.getViewport(de);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),ae.viewport(a),ie.updateMatrices(re,de),n=ie.getFrustum(),w(L,q,ie.camera,re,this.type)}ie.isPointLightShadow!==!0&&this.type===zi&&M(ie,q),ie.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,A,Y)};function M(I,L){let q=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Wi(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,q,d,v,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,q,u,v,null)}function _(I,L,q,b){let A=null,Y=q.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(Y!==void 0)A=Y;else if(A=q.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let ae=A.uuid,Me=L.uuid,P=c[ae];P===void 0&&(P={},c[ae]=P);let N=P[Me];N===void 0&&(N=A.clone(),P[Me]=N,L.addEventListener("dispose",U)),A=N}if(A.visible=L.visible,A.wireframe=L.wireframe,b===zi?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:f[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let ae=i.properties.get(A);ae.light=q}return A}function w(I,L,q,b,A){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===zi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld);let Me=e.update(I),P=I.material;if(Array.isArray(P)){let N=Me.groups;for(let G=0,re=N.length;G<re;G++){let ie=N[G],ee=P[ie.materialIndex];if(ee&&ee.visible){let H=_(I,ee,b,A);I.onBeforeShadow(i,I,L,q,Me,H,ie),i.renderBufferDirect(q,null,Me,H,I,ie),I.onAfterShadow(i,I,L,q,Me,H,ie)}}}else if(P.visible){let N=_(I,P,b,A);I.onBeforeShadow(i,I,L,q,Me,N,null),i.renderBufferDirect(q,null,Me,N,I,null),I.onAfterShadow(i,I,L,q,Me,N,null)}}let ae=I.children;for(let Me=0,P=ae.length;Me<P;Me++)w(ae[Me],L,q,b,A)}function U(I){I.target.removeEventListener("dispose",U);for(let q in c){let b=c[q],A=I.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function Tx(i,e,t){let n=t.isWebGL2;function s(){let F=!1,Ae=new Hn,Pe=null,lt=new Hn(0,0,0,0);return{setMask:function(Je){Pe!==Je&&!F&&(i.colorMask(Je,Je,Je,Je),Pe=Je)},setLocked:function(Je){F=Je},setClear:function(Je,Ot,kt,Ft,gn){gn===!0&&(Je*=Ft,Ot*=Ft,kt*=Ft),Ae.set(Je,Ot,kt,Ft),lt.equals(Ae)===!1&&(i.clearColor(Je,Ot,kt,Ft),lt.copy(Ae))},reset:function(){F=!1,Pe=null,lt.set(-1,0,0,0)}}}function r(){let F=!1,Ae=null,Pe=null,lt=null;return{setTest:function(Je){Je?je(i.DEPTH_TEST):Ke(i.DEPTH_TEST)},setMask:function(Je){Ae!==Je&&!F&&(i.depthMask(Je),Ae=Je)},setFunc:function(Je){if(Pe!==Je){switch(Je){case sf:i.depthFunc(i.NEVER);break;case rf:i.depthFunc(i.ALWAYS);break;case af:i.depthFunc(i.LESS);break;case Ba:i.depthFunc(i.LEQUAL);break;case of:i.depthFunc(i.EQUAL);break;case lf:i.depthFunc(i.GEQUAL);break;case cf:i.depthFunc(i.GREATER);break;case hf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=Je}},setLocked:function(Je){F=Je},setClear:function(Je){lt!==Je&&(i.clearDepth(Je),lt=Je)},reset:function(){F=!1,Ae=null,Pe=null,lt=null}}}function a(){let F=!1,Ae=null,Pe=null,lt=null,Je=null,Ot=null,kt=null,Ft=null,gn=null;return{setTest:function(Oe){F||(Oe?je(i.STENCIL_TEST):Ke(i.STENCIL_TEST))},setMask:function(Oe){Ae!==Oe&&!F&&(i.stencilMask(Oe),Ae=Oe)},setFunc:function(Oe,ct,zt){(Pe!==Oe||lt!==ct||Je!==zt)&&(i.stencilFunc(Oe,ct,zt),Pe=Oe,lt=ct,Je=zt)},setOp:function(Oe,ct,zt){(Ot!==Oe||kt!==ct||Ft!==zt)&&(i.stencilOp(Oe,ct,zt),Ot=Oe,kt=ct,Ft=zt)},setLocked:function(Oe){F=Oe},setClear:function(Oe){gn!==Oe&&(i.clearStencil(Oe),gn=Oe)},reset:function(){F=!1,Ae=null,Pe=null,lt=null,Je=null,Ot=null,kt=null,Ft=null,gn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,f=new WeakMap,d={},u={},y=new WeakMap,v=[],g=null,m=!1,M=null,_=null,w=null,U=null,I=null,L=null,q=null,b=new mt(0,0,0),A=0,Y=!1,ae=null,Me=null,P=null,N=null,G=null,re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,ee=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(H)[1]),ie=ee>=1):H.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ie=ee>=2);let de=null,le={},W=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Ce=new Hn().fromArray(W),Te=new Hn().fromArray(ue);function ze(F,Ae,Pe,lt){let Je=new Uint8Array(4),Ot=i.createTexture();i.bindTexture(F,Ot),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Pe;kt++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ae,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,Je):i.texImage2D(Ae+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Je);return Ot}let ht={};ht[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),je(i.DEPTH_TEST),l.setFunc(Ba),_t(!1),R(th),je(i.CULL_FACE),Ne(ls);function je(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function Ke(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function ut(F,Ae){return u[F]!==Ae?(i.bindFramebuffer(F,Ae),u[F]=Ae,n&&(F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ae),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function j(F,Ae){let Pe=v,lt=!1;if(F)if(Pe=y.get(Ae),Pe===void 0&&(Pe=[],y.set(Ae,Pe)),F.isWebGLMultipleRenderTargets){let Je=F.texture;if(Pe.length!==Je.length||Pe[0]!==i.COLOR_ATTACHMENT0){for(let Ot=0,kt=Je.length;Ot<kt;Ot++)Pe[Ot]=i.COLOR_ATTACHMENT0+Ot;Pe.length=Je.length,lt=!0}}else Pe[0]!==i.COLOR_ATTACHMENT0&&(Pe[0]=i.COLOR_ATTACHMENT0,lt=!0);else Pe[0]!==i.BACK&&(Pe[0]=i.BACK,lt=!0);lt&&(t.isWebGL2?i.drawBuffers(Pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pe))}function cn(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let We={[Ts]:i.FUNC_ADD,[Vd]:i.FUNC_SUBTRACT,[Gd]:i.FUNC_REVERSE_SUBTRACT};if(n)We[rh]=i.MIN,We[ah]=i.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&(We[rh]=F.MIN_EXT,We[ah]=F.MAX_EXT)}let nt={[Wd]:i.ZERO,[Xd]:i.ONE,[qd]:i.SRC_COLOR,[Ml]:i.SRC_ALPHA,[jd]:i.SRC_ALPHA_SATURATE,[Zd]:i.DST_COLOR,[$d]:i.DST_ALPHA,[Yd]:i.ONE_MINUS_SRC_COLOR,[bl]:i.ONE_MINUS_SRC_ALPHA,[Jd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[Qd]:i.CONSTANT_COLOR,[ef]:i.ONE_MINUS_CONSTANT_COLOR,[tf]:i.CONSTANT_ALPHA,[nf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ne(F,Ae,Pe,lt,Je,Ot,kt,Ft,gn,Oe){if(F===ls){m===!0&&(Ke(i.BLEND),m=!1);return}if(m===!1&&(je(i.BLEND),m=!0),F!==zd){if(F!==M||Oe!==Y){if((_!==Ts||I!==Ts)&&(i.blendEquation(i.FUNC_ADD),_=Ts,I=Ts),Oe)switch(F){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nh:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,U=null,L=null,q=null,b.set(0,0,0),A=0,M=F,Y=Oe}return}Je=Je||Ae,Ot=Ot||Pe,kt=kt||lt,(Ae!==_||Je!==I)&&(i.blendEquationSeparate(We[Ae],We[Je]),_=Ae,I=Je),(Pe!==w||lt!==U||Ot!==L||kt!==q)&&(i.blendFuncSeparate(nt[Pe],nt[lt],nt[Ot],nt[kt]),w=Pe,U=lt,L=Ot,q=kt),(Ft.equals(b)===!1||gn!==A)&&(i.blendColor(Ft.r,Ft.g,Ft.b,gn),b.copy(Ft),A=gn),M=F,Y=!1}function rn(F,Ae){F.side===_n?Ke(i.CULL_FACE):je(i.CULL_FACE);let Pe=F.side===ri;Ae&&(Pe=!Pe),_t(Pe),F.blending===hr&&F.transparent===!1?Ne(ls):Ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);let lt=F.stencilWrite;c.setTest(lt),lt&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),te(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?je(i.SAMPLE_ALPHA_TO_COVERAGE):Ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(F){ae!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),ae=F)}function R(F){F!==kd?(je(i.CULL_FACE),F!==Me&&(F===th?i.cullFace(i.BACK):F===Hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ke(i.CULL_FACE),Me=F}function S(F){F!==P&&(ie&&i.lineWidth(F),P=F)}function te(F,Ae,Pe){F?(je(i.POLYGON_OFFSET_FILL),(N!==Ae||G!==Pe)&&(i.polygonOffset(Ae,Pe),N=Ae,G=Pe)):Ke(i.POLYGON_OFFSET_FILL)}function be(F){F?je(i.SCISSOR_TEST):Ke(i.SCISSOR_TEST)}function ve(F){F===void 0&&(F=i.TEXTURE0+re-1),de!==F&&(i.activeTexture(F),de=F)}function Se(F,Ae,Pe){Pe===void 0&&(de===null?Pe=i.TEXTURE0+re-1:Pe=de);let lt=le[Pe];lt===void 0&&(lt={type:void 0,texture:void 0},le[Pe]=lt),(lt.type!==F||lt.texture!==Ae)&&(de!==Pe&&(i.activeTexture(Pe),de=Pe),i.bindTexture(F,Ae||ht[F]),lt.type=F,lt.texture=Ae)}function Ve(){let F=le[de];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function De(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(F){Ce.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ce.copy(F))}function ot(F){Te.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Te.copy(F))}function gt(F,Ae){let Pe=f.get(Ae);Pe===void 0&&(Pe=new WeakMap,f.set(Ae,Pe));let lt=Pe.get(F);lt===void 0&&(lt=i.getUniformBlockIndex(Ae,F.name),Pe.set(F,lt))}function Ze(F,Ae){let lt=f.get(Ae).get(F);h.get(Ae)!==lt&&(i.uniformBlockBinding(Ae,lt,F.__bindingPointIndex),h.set(Ae,lt))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},de=null,le={},u={},y=new WeakMap,v=[],g=null,m=!1,M=null,_=null,w=null,U=null,I=null,L=null,q=null,b=new mt(0,0,0),A=0,Y=!1,ae=null,Me=null,P=null,N=null,G=null,Ce.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:je,disable:Ke,bindFramebuffer:ut,drawBuffers:j,useProgram:cn,setBlending:Ne,setMaterial:rn,setFlipSided:_t,setCullFace:R,setLineWidth:S,setPolygonOffset:te,setScissorTest:be,activeTexture:ve,bindTexture:Se,unbindTexture:Ve,compressedTexImage2D:De,compressedTexImage3D:ke,texImage2D:Ye,texImage3D:Be,updateUBOMapping:gt,uniformBlockBinding:Ze,texStorage2D:St,texStorage3D:at,texSubImage2D:it,texSubImage3D:vt,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ht,scissor:st,viewport:ot,reset:we}}function wx(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,S){return u?new OffscreenCanvas(R,S):Xa("canvas")}function v(R,S,te,be){let ve=1;if((R.width>be||R.height>be)&&(ve=be/Math.max(R.width,R.height)),ve<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let Se=S?Rl:Math.floor,Ve=Se(ve*R.width),De=Se(ve*R.height);f===void 0&&(f=y(Ve,De));let ke=te?y(Ve,De):f;return ke.width=Ve,ke.height=De,ke.getContext("2d").drawImage(R,0,0,Ve,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ve+"x"+De+")."),ke}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return kh(R.width)&&kh(R.height)}function m(R){return o?!1:R.wrapS!==Ai||R.wrapT!==Ai||R.minFilter!==$n&&R.minFilter!==mi}function M(R,S){return R.generateMipmaps&&S&&R.minFilter!==$n&&R.minFilter!==mi}function _(R){i.generateMipmap(R)}function w(R,S,te,be,ve=!1){if(o===!1)return S;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Se=S;if(S===i.RED&&(te===i.FLOAT&&(Se=i.R32F),te===i.HALF_FLOAT&&(Se=i.R16F),te===i.UNSIGNED_BYTE&&(Se=i.R8)),S===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(Se=i.R8UI),te===i.UNSIGNED_SHORT&&(Se=i.R16UI),te===i.UNSIGNED_INT&&(Se=i.R32UI),te===i.BYTE&&(Se=i.R8I),te===i.SHORT&&(Se=i.R16I),te===i.INT&&(Se=i.R32I)),S===i.RG&&(te===i.FLOAT&&(Se=i.RG32F),te===i.HALF_FLOAT&&(Se=i.RG16F),te===i.UNSIGNED_BYTE&&(Se=i.RG8)),S===i.RGBA){let Ve=ve?za:Jt.getTransfer(be);te===i.FLOAT&&(Se=i.RGBA32F),te===i.HALF_FLOAT&&(Se=i.RGBA16F),te===i.UNSIGNED_BYTE&&(Se=Ve===on?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(Se=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(Se=i.RGB5_A1)}return(Se===i.R16F||Se===i.R32F||Se===i.RG16F||Se===i.RG32F||Se===i.RGBA16F||Se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function U(R,S,te){return M(R,te)===!0||R.isFramebufferTexture&&R.minFilter!==$n&&R.minFilter!==mi?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function I(R){return R===$n||R===oh||R===ko?i.NEAREST:i.LINEAR}function L(R){let S=R.target;S.removeEventListener("dispose",L),b(S),S.isVideoTexture&&h.delete(S)}function q(R){let S=R.target;S.removeEventListener("dispose",q),Y(S)}function b(R){let S=n.get(R);if(S.__webglInit===void 0)return;let te=R.source,be=d.get(te);if(be){let ve=be[S.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&A(R),Object.keys(be).length===0&&d.delete(te)}n.remove(R)}function A(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let te=R.source,be=d.get(te);delete be[S.__cacheKey],a.memory.textures--}function Y(R){let S=R.texture,te=n.get(R),be=n.get(S);if(be.__webglTexture!==void 0&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(te.__webglFramebuffer[ve]))for(let Se=0;Se<te.__webglFramebuffer[ve].length;Se++)i.deleteFramebuffer(te.__webglFramebuffer[ve][Se]);else i.deleteFramebuffer(te.__webglFramebuffer[ve]);te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer[ve])}else{if(Array.isArray(te.__webglFramebuffer))for(let ve=0;ve<te.__webglFramebuffer.length;ve++)i.deleteFramebuffer(te.__webglFramebuffer[ve]);else i.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&i.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let ve=0;ve<te.__webglColorRenderbuffer.length;ve++)te.__webglColorRenderbuffer[ve]&&i.deleteRenderbuffer(te.__webglColorRenderbuffer[ve]);te.__webglDepthRenderbuffer&&i.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ve=0,Se=S.length;ve<Se;ve++){let Ve=n.get(S[ve]);Ve.__webglTexture&&(i.deleteTexture(Ve.__webglTexture),a.memory.textures--),n.remove(S[ve])}n.remove(S),n.remove(R)}let ae=0;function Me(){ae=0}function P(){let R=ae;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),ae+=1,R}function N(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function G(R,S){let te=n.get(R);if(R.isVideoTexture&&rn(R),R.isRenderTargetTexture===!1&&R.version>0&&te.__version!==R.version){let be=R.image;if(be===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(te,R,S);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+S)}function re(R,S){let te=n.get(R);if(R.version>0&&te.__version!==R.version){Ce(te,R,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+S)}function ie(R,S){let te=n.get(R);if(R.version>0&&te.__version!==R.version){Ce(te,R,S);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+S)}function ee(R,S){let te=n.get(R);if(R.version>0&&te.__version!==R.version){Te(te,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+S)}let H={[Vr]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},de={[$n]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[ko]:i.NEAREST_MIPMAP_LINEAR,[mi]:i.LINEAR,[_f]:i.LINEAR_MIPMAP_NEAREST,[Gr]:i.LINEAR_MIPMAP_LINEAR},le={[If]:i.NEVER,[Ff]:i.ALWAYS,[Lf]:i.LESS,[$u]:i.LEQUAL,[Df]:i.EQUAL,[Of]:i.GEQUAL,[Uf]:i.GREATER,[Nf]:i.NOTEQUAL};function W(R,S,te){if(te?(i.texParameteri(R,i.TEXTURE_WRAP_S,H[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,H[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,H[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,de[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,de[S.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Ai||S.wrapT!==Ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,I(S.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,I(S.minFilter)),S.minFilter!==$n&&S.minFilter!==mi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let be=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===$n||S.minFilter!==ko&&S.minFilter!==Gr||S.type===os&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Wr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(R,be.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ue(R,S){let te=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));let be=S.source,ve=d.get(be);ve===void 0&&(ve={},d.set(be,ve));let Se=N(S);if(Se!==R.__cacheKey){ve[Se]===void 0&&(ve[Se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,te=!0),ve[Se].usedTimes++;let Ve=ve[R.__cacheKey];Ve!==void 0&&(ve[R.__cacheKey].usedTimes--,Ve.usedTimes===0&&A(S)),R.__cacheKey=Se,R.__webglTexture=ve[Se].texture}return te}function Ce(R,S,te){let be=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(be=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(be=i.TEXTURE_3D);let ve=ue(R,S),Se=S.source;t.bindTexture(be,R.__webglTexture,i.TEXTURE0+te);let Ve=n.get(Se);if(Se.version!==Ve.__version||ve===!0){t.activeTexture(i.TEXTURE0+te);let De=Jt.getPrimaries(Jt.workingColorSpace),ke=S.colorSpace===gi?null:Jt.getPrimaries(S.colorSpace),it=S.colorSpace===gi||De===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let vt=m(S)&&g(S.image)===!1,ye=v(S.image,vt,!1,s.maxTextureSize);ye=_t(S,ye);let Ht=g(ye)||o,St=r.convert(S.format,S.colorSpace),at=r.convert(S.type),Ye=w(S.internalFormat,St,at,S.colorSpace,S.isVideoTexture);W(be,S,Ht);let Be,st=S.mipmaps,ot=o&&S.isVideoTexture!==!0&&Ye!==Xu,gt=Ve.__version===void 0||ve===!0,Ze=U(S,ye,Ht);if(S.isDepthTexture)Ye=i.DEPTH_COMPONENT,o?S.type===os?Ye=i.DEPTH_COMPONENT32F:S.type===as?Ye=i.DEPTH_COMPONENT24:S.type===As?Ye=i.DEPTH24_STENCIL8:Ye=i.DEPTH_COMPONENT16:S.type===os&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Rs&&Ye===i.DEPTH_COMPONENT&&S.type!==mc&&S.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=as,at=r.convert(S.type)),S.format===mr&&Ye===i.DEPTH_COMPONENT&&(Ye=i.DEPTH_STENCIL,S.type!==As&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=As,at=r.convert(S.type))),gt&&(ot?t.texStorage2D(i.TEXTURE_2D,1,Ye,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Ye,ye.width,ye.height,0,St,at,null));else if(S.isDataTexture)if(st.length>0&&Ht){ot&&gt&&t.texStorage2D(i.TEXTURE_2D,Ze,Ye,st[0].width,st[0].height);for(let we=0,F=st.length;we<F;we++)Be=st[we],ot?t.texSubImage2D(i.TEXTURE_2D,we,0,0,Be.width,Be.height,St,at,Be.data):t.texImage2D(i.TEXTURE_2D,we,Ye,Be.width,Be.height,0,St,at,Be.data);S.generateMipmaps=!1}else ot?(gt&&t.texStorage2D(i.TEXTURE_2D,Ze,Ye,ye.width,ye.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,St,at,ye.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,ye.width,ye.height,0,St,at,ye.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ot&&gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,Ye,st[0].width,st[0].height,ye.depth);for(let we=0,F=st.length;we<F;we++)Be=st[we],S.format!==Ri?St!==null?ot?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,ye.depth,St,Be.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,Ye,Be.width,Be.height,ye.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Be.width,Be.height,ye.depth,St,at,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,Ye,Be.width,Be.height,ye.depth,0,St,at,Be.data)}else{ot&&gt&&t.texStorage2D(i.TEXTURE_2D,Ze,Ye,st[0].width,st[0].height);for(let we=0,F=st.length;we<F;we++)Be=st[we],S.format!==Ri?St!==null?ot?t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,Be.width,Be.height,St,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,we,Ye,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage2D(i.TEXTURE_2D,we,0,0,Be.width,Be.height,St,at,Be.data):t.texImage2D(i.TEXTURE_2D,we,Ye,Be.width,Be.height,0,St,at,Be.data)}else if(S.isDataArrayTexture)ot?(gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,Ye,ye.width,ye.height,ye.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,St,at,ye.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,ye.width,ye.height,ye.depth,0,St,at,ye.data);else if(S.isData3DTexture)ot?(gt&&t.texStorage3D(i.TEXTURE_3D,Ze,Ye,ye.width,ye.height,ye.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,St,at,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,ye.width,ye.height,ye.depth,0,St,at,ye.data);else if(S.isFramebufferTexture){if(gt)if(ot)t.texStorage2D(i.TEXTURE_2D,Ze,Ye,ye.width,ye.height);else{let we=ye.width,F=ye.height;for(let Ae=0;Ae<Ze;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Ye,we,F,0,St,at,null),we>>=1,F>>=1}}else if(st.length>0&&Ht){ot&&gt&&t.texStorage2D(i.TEXTURE_2D,Ze,Ye,st[0].width,st[0].height);for(let we=0,F=st.length;we<F;we++)Be=st[we],ot?t.texSubImage2D(i.TEXTURE_2D,we,0,0,St,at,Be):t.texImage2D(i.TEXTURE_2D,we,Ye,St,at,Be);S.generateMipmaps=!1}else ot?(gt&&t.texStorage2D(i.TEXTURE_2D,Ze,Ye,ye.width,ye.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,St,at,ye)):t.texImage2D(i.TEXTURE_2D,0,Ye,St,at,ye);M(S,Ht)&&_(be),Ve.__version=Se.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Te(R,S,te){if(S.image.length!==6)return;let be=ue(R,S),ve=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+te);let Se=n.get(ve);if(ve.version!==Se.__version||be===!0){t.activeTexture(i.TEXTURE0+te);let Ve=Jt.getPrimaries(Jt.workingColorSpace),De=S.colorSpace===gi?null:Jt.getPrimaries(S.colorSpace),ke=S.colorSpace===gi||Ve===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let it=S.isCompressedTexture||S.image[0].isCompressedTexture,vt=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let we=0;we<6;we++)!it&&!vt?ye[we]=v(S.image[we],!1,!0,s.maxCubemapSize):ye[we]=vt?S.image[we].image:S.image[we],ye[we]=_t(S,ye[we]);let Ht=ye[0],St=g(Ht)||o,at=r.convert(S.format,S.colorSpace),Ye=r.convert(S.type),Be=w(S.internalFormat,at,Ye,S.colorSpace),st=o&&S.isVideoTexture!==!0,ot=Se.__version===void 0||be===!0,gt=U(S,Ht,St);W(i.TEXTURE_CUBE_MAP,S,St);let Ze;if(it){st&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Be,Ht.width,Ht.height);for(let we=0;we<6;we++){Ze=ye[we].mipmaps;for(let F=0;F<Ze.length;F++){let Ae=Ze[F];S.format!==Ri?at!==null?st?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,F,0,0,Ae.width,Ae.height,at,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,F,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,F,0,0,Ae.width,Ae.height,at,Ye,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,F,Be,Ae.width,Ae.height,0,at,Ye,Ae.data)}}}else{Ze=S.mipmaps,st&&ot&&(Ze.length>0&&gt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Be,ye[0].width,ye[0].height));for(let we=0;we<6;we++)if(vt){st?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ye[we].width,ye[we].height,at,Ye,ye[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Be,ye[we].width,ye[we].height,0,at,Ye,ye[we].data);for(let F=0;F<Ze.length;F++){let Pe=Ze[F].image[we].image;st?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,F+1,0,0,Pe.width,Pe.height,at,Ye,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,F+1,Be,Pe.width,Pe.height,0,at,Ye,Pe.data)}}else{st?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,at,Ye,ye[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Be,at,Ye,ye[we]);for(let F=0;F<Ze.length;F++){let Ae=Ze[F];st?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,F+1,0,0,at,Ye,Ae.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,F+1,Be,at,Ye,Ae.image[we])}}}M(S,St)&&_(i.TEXTURE_CUBE_MAP),Se.__version=ve.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ze(R,S,te,be,ve,Se){let Ve=r.convert(te.format,te.colorSpace),De=r.convert(te.type),ke=w(te.internalFormat,Ve,De,te.colorSpace);if(!n.get(S).__hasExternalTextures){let vt=Math.max(1,S.width>>Se),ye=Math.max(1,S.height>>Se);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,Se,ke,vt,ye,S.depth,0,Ve,De,null):t.texImage2D(ve,Se,ke,vt,ye,0,Ve,De,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ne(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,ve,n.get(te).__webglTexture,0,nt(S)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,be,ve,n.get(te).__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(R,S,te){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let be=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(te||Ne(S)){let ve=S.depthTexture;ve&&ve.isDepthTexture&&(ve.type===os?be=i.DEPTH_COMPONENT32F:ve.type===as&&(be=i.DEPTH_COMPONENT24));let Se=nt(S);Ne(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,be,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,be,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,be,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){let be=nt(S);te&&Ne(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,i.DEPTH24_STENCIL8,S.width,S.height):Ne(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let be=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ve=0;ve<be.length;ve++){let Se=be[ve],Ve=r.convert(Se.format,Se.colorSpace),De=r.convert(Se.type),ke=w(Se.internalFormat,Ve,De,Se.colorSpace),it=nt(S);te&&Ne(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,ke,S.width,S.height):Ne(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,ke,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ke,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let be=n.get(S.depthTexture).__webglTexture,ve=nt(S);if(S.depthTexture.format===Rs)Ne(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,be,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,be,0);else if(S.depthTexture.format===mr)Ne(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,be,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function Ke(R){let S=n.get(R),te=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");je(S.__webglFramebuffer,R)}else if(te){S.__webglDepthbuffer=[];for(let be=0;be<6;be++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[be]),S.__webglDepthbuffer[be]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[be],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(R,S,te){let be=n.get(R);S!==void 0&&ze(be.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&Ke(R)}function j(R){let S=R.texture,te=n.get(R),be=n.get(S);R.addEventListener("dispose",q),R.isWebGLMultipleRenderTargets!==!0&&(be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture()),be.__version=S.version,a.memory.textures++);let ve=R.isWebGLCubeRenderTarget===!0,Se=R.isWebGLMultipleRenderTargets===!0,Ve=g(R)||o;if(ve){te.__webglFramebuffer=[];for(let De=0;De<6;De++)if(o&&S.mipmaps&&S.mipmaps.length>0){te.__webglFramebuffer[De]=[];for(let ke=0;ke<S.mipmaps.length;ke++)te.__webglFramebuffer[De][ke]=i.createFramebuffer()}else te.__webglFramebuffer[De]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){te.__webglFramebuffer=[];for(let De=0;De<S.mipmaps.length;De++)te.__webglFramebuffer[De]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Se)if(s.drawBuffers){let De=R.texture;for(let ke=0,it=De.length;ke<it;ke++){let vt=n.get(De[ke]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ne(R)===!1){let De=Se?S:[S];te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ke=0;ke<De.length;ke++){let it=De[ke];te.__webglColorRenderbuffer[ke]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[ke]);let vt=r.convert(it.format,it.colorSpace),ye=r.convert(it.type),Ht=w(it.internalFormat,vt,ye,it.colorSpace,R.isXRRenderTarget===!0),St=nt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Ht,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,te.__webglColorRenderbuffer[ke])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(te.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,be.__webglTexture),W(i.TEXTURE_CUBE_MAP,S,Ve);for(let De=0;De<6;De++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ke=0;ke<S.mipmaps.length;ke++)ze(te.__webglFramebuffer[De][ke],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+De,ke);else ze(te.__webglFramebuffer[De],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(S,Ve)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){let De=R.texture;for(let ke=0,it=De.length;ke<it;ke++){let vt=De[ke],ye=n.get(vt);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),W(i.TEXTURE_2D,vt,Ve),ze(te.__webglFramebuffer,R,vt,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,0),M(vt,Ve)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let De=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?De=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(De,be.__webglTexture),W(De,S,Ve),o&&S.mipmaps&&S.mipmaps.length>0)for(let ke=0;ke<S.mipmaps.length;ke++)ze(te.__webglFramebuffer[ke],R,S,i.COLOR_ATTACHMENT0,De,ke);else ze(te.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,De,0);M(S,Ve)&&_(De),t.unbindTexture()}R.depthBuffer&&Ke(R)}function cn(R){let S=g(R)||o,te=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let be=0,ve=te.length;be<ve;be++){let Se=te[be];if(M(Se,S)){let Ve=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,De=n.get(Se).__webglTexture;t.bindTexture(Ve,De),_(Ve),t.unbindTexture()}}}function We(R){if(o&&R.samples>0&&Ne(R)===!1){let S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],te=R.width,be=R.height,ve=i.COLOR_BUFFER_BIT,Se=[],Ve=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(R),ke=R.isWebGLMultipleRenderTargets===!0;if(ke)for(let it=0;it<S.length;it++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let it=0;it<S.length;it++){Se.push(i.COLOR_ATTACHMENT0+it),R.depthBuffer&&Se.push(Ve);let vt=De.__ignoreDepthValues!==void 0?De.__ignoreDepthValues:!1;if(vt===!1&&(R.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),ke&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[it]),vt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ve])),ke){let ye=n.get(S[it]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,te,be,0,0,te,be,ve,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ke)for(let it=0;it<S.length;it++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,De.__webglColorRenderbuffer[it]);let vt=n.get(S[it]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,vt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}}function nt(R){return Math.min(s.maxSamples,R.samples)}function Ne(R){let S=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function rn(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function _t(R,S){let te=R.colorSpace,be=R.format,ve=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===wl||te!==Gi&&te!==gi&&(Jt.getTransfer(te)===on?o===!1?e.has("EXT_sRGB")===!0&&be===Ri?(R.format=wl,R.minFilter=mi,R.generateMipmaps=!1):S=qa.sRGBToLinear(S):(be!==Ri||ve!==hs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),S}this.allocateTextureUnit=P,this.resetTextureUnits=Me,this.setTexture2D=G,this.setTexture2DArray=re,this.setTexture3D=ie,this.setTextureCube=ee,this.rebindTextures=ut,this.setupRenderTarget=j,this.updateRenderTargetMipmap=cn,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Ne}function Ax(i,e,t){let n=t.isWebGL2;function s(r,a=gi){let o,l=Jt.getTransfer(a);if(r===hs)return i.UNSIGNED_BYTE;if(r===Hu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===zu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===vf)return i.BYTE;if(r===Mf)return i.SHORT;if(r===mc)return i.UNSIGNED_SHORT;if(r===ku)return i.INT;if(r===as)return i.UNSIGNED_INT;if(r===os)return i.FLOAT;if(r===Wr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===bf)return i.ALPHA;if(r===Ri)return i.RGBA;if(r===Sf)return i.LUMINANCE;if(r===Ef)return i.LUMINANCE_ALPHA;if(r===Rs)return i.DEPTH_COMPONENT;if(r===mr)return i.DEPTH_STENCIL;if(r===wl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Tf)return i.RED;if(r===Vu)return i.RED_INTEGER;if(r===wf)return i.RG;if(r===Gu)return i.RG_INTEGER;if(r===Wu)return i.RGBA_INTEGER;if(r===Ho||r===zo||r===Vo||r===Go)if(l===on)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ho)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ho)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Go)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lh||r===ch||r===hh||r===uh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===lh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ch)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dh||r===fh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===dh)return l===on?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===fh)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ph||r===mh||r===gh||r===xh||r===yh||r===_h||r===vh||r===Mh||r===bh||r===Sh||r===Eh||r===Th||r===wh||r===Ah)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ph)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mh)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gh)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xh)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yh)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_h)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vh)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mh)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bh)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sh)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Th)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wh)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ah)return l===on?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wo||r===Rh||r===Ch)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Wo)return l===on?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ch)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Af||r===Ph||r===Ih||r===Lh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Wo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ph)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ih)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===As?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var zl=class extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xi=class extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rx={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,y=.005;c.inputState.pinching&&d>u+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vl=class extends ds{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,y=null,v=t.getContextAttributes(),g=null,m=null,M=[],_=[],w=new Fe,U=null,I=new Kn;I.layers.enable(1),I.viewport=new Hn;let L=new Kn;L.layers.enable(2),L.viewport=new Hn;let q=[I,L],b=new zl;b.layers.enable(1),b.layers.enable(2);let A=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ue=M[W];return ue===void 0&&(ue=new Br,M[W]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(W){let ue=M[W];return ue===void 0&&(ue=new Br,M[W]=ue),ue.getGripSpace()},this.getHand=function(W){let ue=M[W];return ue===void 0&&(ue=new Br,M[W]=ue),ue.getHandSpace()};function ae(W){let ue=_.indexOf(W.inputSource);if(ue===-1)return;let Ce=M[ue];Ce!==void 0&&(Ce.update(W.inputSource,W.frame,c||a),Ce.dispatchEvent({type:W.type,data:W.inputSource}))}function Me(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",Me),s.removeEventListener("inputsourceschange",P);for(let W=0;W<M.length;W++){let ue=_[W];ue!==null&&(_[W]=null,M[W].disconnect(ue))}A=null,Y=null,e.setRenderTarget(g),u=null,d=null,f=null,s=null,m=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",Me),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ue={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),m=new Wi(u.framebufferWidth,u.framebufferHeight,{format:Ri,type:hs,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,Ce=null,Te=null;v.depth&&(Te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?mr:Rs,Ce=v.stencil?As:as);let ze={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Wi(d.textureWidth,d.textureHeight,{format:Ri,type:hs,depthTexture:new no(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let ht=e.properties.get(m);ht.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(W){for(let ue=0;ue<W.removed.length;ue++){let Ce=W.removed[ue],Te=_.indexOf(Ce);Te>=0&&(_[Te]=null,M[Te].disconnect(Ce))}for(let ue=0;ue<W.added.length;ue++){let Ce=W.added[ue],Te=_.indexOf(Ce);if(Te===-1){for(let ht=0;ht<M.length;ht++)if(ht>=_.length){_.push(Ce),Te=ht;break}else if(_[ht]===null){_[ht]=Ce,Te=ht;break}if(Te===-1)break}let ze=M[Te];ze&&ze.connect(Ce)}}let N=new B,G=new B;function re(W,ue,Ce){N.setFromMatrixPosition(ue.matrixWorld),G.setFromMatrixPosition(Ce.matrixWorld);let Te=N.distanceTo(G),ze=ue.projectionMatrix.elements,ht=Ce.projectionMatrix.elements,je=ze[14]/(ze[10]-1),Ke=ze[14]/(ze[10]+1),ut=(ze[9]+1)/ze[5],j=(ze[9]-1)/ze[5],cn=(ze[8]-1)/ze[0],We=(ht[8]+1)/ht[0],nt=je*cn,Ne=je*We,rn=Te/(-cn+We),_t=rn*-cn;ue.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(_t),W.translateZ(rn),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let R=je+rn,S=Ke+rn,te=nt-_t,be=Ne+(Te-_t),ve=ut*Ke/S*R,Se=j*Ke/S*R;W.projectionMatrix.makePerspective(te,be,ve,Se,R,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ie(W,ue){ue===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ue.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;b.near=L.near=I.near=W.near,b.far=L.far=I.far=W.far,(A!==b.near||Y!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,Y=b.far);let ue=W.parent,Ce=b.cameras;ie(b,ue);for(let Te=0;Te<Ce.length;Te++)ie(Ce[Te],ue);Ce.length===2?re(b,I,L):b.projectionMatrix.copy(I.projectionMatrix),ee(W,b,ue)};function ee(W,ue,Ce){Ce===null?W.matrix.copy(ue.matrixWorld):(W.matrix.copy(Ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(ue.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ue.projectionMatrix),W.projectionMatrixInverse.copy(ue.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Al*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=W)};let H=null;function de(W,ue){if(h=ue.getViewerPose(c||a),y=ue,h!==null){let Ce=h.views;u!==null&&(e.setRenderTargetFramebuffer(m,u.framebuffer),e.setRenderTarget(m));let Te=!1;Ce.length!==b.cameras.length&&(b.cameras.length=0,Te=!0);for(let ze=0;ze<Ce.length;ze++){let ht=Ce[ze],je=null;if(u!==null)je=u.getViewport(ht);else{let ut=f.getViewSubImage(d,ht);je=ut.viewport,ze===0&&(e.setRenderTargetTextures(m,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(m))}let Ke=q[ze];Ke===void 0&&(Ke=new Kn,Ke.layers.enable(ze),Ke.viewport=new Hn,q[ze]=Ke),Ke.matrix.fromArray(ht.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ht.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(je.x,je.y,je.width,je.height),ze===0&&(b.matrix.copy(Ke.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Te===!0&&b.cameras.push(Ke)}}for(let Ce=0;Ce<M.length;Ce++){let Te=_[Ce],ze=M[Ce];Te!==null&&ze!==void 0&&ze.update(Te,ue,c||a)}H&&H(W,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),y=null}let le=new ju;le.setAnimationLoop(de),this.setAnimationLoop=function(W){H=W},this.dispose=function(){}}};function Cx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ju(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,_,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&u(g,m,w)):m.isMeshMatcapMaterial?(r(g,m),y(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ri&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ri&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ri&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Px(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let w=_.program;n.uniformBlockBinding(M,w)}function c(M,_){let w=s[M.id];w===void 0&&(y(M),w=h(M),s[M.id]=w,M.addEventListener("dispose",g));let U=_.program;n.updateUBOMapping(M,U);let I=e.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function h(M){let _=f();M.__bindingPointIndex=_;let w=i.createBuffer(),U=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,U,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],w=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let I=0,L=w.length;I<L;I++){let q=Array.isArray(w[I])?w[I]:[w[I]];for(let b=0,A=q.length;b<A;b++){let Y=q[b];if(u(Y,I,b,U)===!0){let ae=Y.__offset,Me=Array.isArray(Y.value)?Y.value:[Y.value],P=0;for(let N=0;N<Me.length;N++){let G=Me[N],re=v(G);typeof G=="number"||typeof G=="boolean"?(Y.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,ae+P,Y.__data)):G.isMatrix3?(Y.__data[0]=G.elements[0],Y.__data[1]=G.elements[1],Y.__data[2]=G.elements[2],Y.__data[3]=0,Y.__data[4]=G.elements[3],Y.__data[5]=G.elements[4],Y.__data[6]=G.elements[5],Y.__data[7]=0,Y.__data[8]=G.elements[6],Y.__data[9]=G.elements[7],Y.__data[10]=G.elements[8],Y.__data[11]=0):(G.toArray(Y.__data,P),P+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ae,Y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,_,w,U){let I=M.value,L=_+"_"+w;if(U[L]===void 0)return typeof I=="number"||typeof I=="boolean"?U[L]=I:U[L]=I.clone(),!0;{let q=U[L];if(typeof I=="number"||typeof I=="boolean"){if(q!==I)return U[L]=I,!0}else if(q.equals(I)===!1)return q.copy(I),!0}return!1}function y(M){let _=M.uniforms,w=0,U=16;for(let L=0,q=_.length;L<q;L++){let b=Array.isArray(_[L])?_[L]:[_[L]];for(let A=0,Y=b.length;A<Y;A++){let ae=b[A],Me=Array.isArray(ae.value)?ae.value:[ae.value];for(let P=0,N=Me.length;P<N;P++){let G=Me[P],re=v(G),ie=w%U;ie!==0&&U-ie<re.boundary&&(w+=U-ie),ae.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=w,w+=re.storage}}}let I=w%U;return I>0&&(w+=U-I),M.__size=w,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let w=a.indexOf(_.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var $r=class{constructor(e={}){let{canvas:t=kf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let u=new Uint32Array(4),y=new Int32Array(4),v=null,g=null,m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this._useLegacyLights=!1,this.toneMapping=cs,this.toneMappingExposure=1;let _=this,w=!1,U=0,I=0,L=null,q=-1,b=null,A=new Hn,Y=new Hn,ae=null,Me=new mt(0),P=0,N=t.width,G=t.height,re=1,ie=null,ee=null,H=new Hn(0,0,N,G),de=new Hn(0,0,N,G),le=!1,W=new Yr,ue=!1,Ce=!1,Te=null,ze=new An,ht=new Fe,je=new B,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return L===null?re:1}let j=n;function cn(T,V){for(let $=0;$<T.length;$++){let Q=T[$],J=t.getContext(Q,V);if(J!==null)return J}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fc}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),j===null){let V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),j=cn(V,T),j===null)throw cn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let We,nt,Ne,rn,_t,R,S,te,be,ve,Se,Ve,De,ke,it,vt,ye,Ht,St,at,Ye,Be,st,ot;function gt(){We=new Kg(j),nt=new Gg(j,We,e),We.init(nt),Be=new Ax(j,We,nt),Ne=new Tx(j,We,nt),rn=new jg(j),_t=new fx,R=new wx(j,We,Ne,_t,nt,Be,rn),S=new Xg(_),te=new $g(_),be=new ap(j,nt),st=new zg(j,We,be,nt),ve=new Zg(j,be,rn,st),Se=new n0(j,ve,be,rn),St=new t0(j,nt,R),vt=new Wg(_t),Ve=new dx(_,S,te,We,nt,st,vt),De=new Cx(_,_t),ke=new mx,it=new Mx(We,nt),Ht=new Hg(_,S,te,Ne,Se,d,l),ye=new Ex(_,Se,nt),ot=new Px(j,rn,nt,Ne),at=new Vg(j,We,rn,nt),Ye=new Jg(j,We,rn,nt),rn.programs=Ve.programs,_.capabilities=nt,_.extensions=We,_.properties=_t,_.renderLists=ke,_.shadowMap=ye,_.state=Ne,_.info=rn}gt();let Ze=new Vl(_,j);this.xr=Ze,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let T=We.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=We.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(N,G,!1))},this.getSize=function(T){return T.set(N,G)},this.setSize=function(T,V,$=!0){if(Ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,G=V,t.width=Math.floor(T*re),t.height=Math.floor(V*re),$===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(N*re,G*re).floor()},this.setDrawingBufferSize=function(T,V,$){N=T,G=V,re=$,t.width=Math.floor(T*$),t.height=Math.floor(V*$),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(H)},this.setViewport=function(T,V,$,Q){T.isVector4?H.set(T.x,T.y,T.z,T.w):H.set(T,V,$,Q),Ne.viewport(A.copy(H).multiplyScalar(re).floor())},this.getScissor=function(T){return T.copy(de)},this.setScissor=function(T,V,$,Q){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,V,$,Q),Ne.scissor(Y.copy(de).multiplyScalar(re).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){Ne.setScissorTest(le=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){ee=T},this.getClearColor=function(T){return T.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(T=!0,V=!0,$=!0){let Q=0;if(T){let J=!1;if(L!==null){let Ie=L.texture.format;J=Ie===Wu||Ie===Gu||Ie===Vu}if(J){let Ie=L.texture.type,Ge=Ie===hs||Ie===as||Ie===mc||Ie===As||Ie===Hu||Ie===zu,Ue=Ht.getClearColor(),tt=Ht.getClearAlpha(),xt=Ue.r,ft=Ue.g,yt=Ue.b;Ge?(u[0]=xt,u[1]=ft,u[2]=yt,u[3]=tt,j.clearBufferuiv(j.COLOR,0,u)):(y[0]=xt,y[1]=ft,y[2]=yt,y[3]=tt,j.clearBufferiv(j.COLOR,0,y))}else Q|=j.COLOR_BUFFER_BIT}V&&(Q|=j.DEPTH_BUFFER_BIT),$&&(Q|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ke.dispose(),it.dispose(),_t.dispose(),S.dispose(),te.dispose(),Se.dispose(),st.dispose(),ot.dispose(),Ve.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",gn),Ze.removeEventListener("sessionend",Oe),Te&&(Te.dispose(),Te=null),ct.stop()};function we(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let T=rn.autoReset,V=ye.enabled,$=ye.autoUpdate,Q=ye.needsUpdate,J=ye.type;gt(),rn.autoReset=T,ye.enabled=V,ye.autoUpdate=$,ye.needsUpdate=Q,ye.type=J}function Ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pe(T){let V=T.target;V.removeEventListener("dispose",Pe),lt(V)}function lt(T){Je(T),_t.remove(T)}function Je(T){let V=_t.get(T).programs;V!==void 0&&(V.forEach(function($){Ve.releaseProgram($)}),T.isShaderMaterial&&Ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,$,Q,J,Ie){V===null&&(V=Ke);let Ge=J.isMesh&&J.matrixWorld.determinant()<0,Ue=Ln(T,V,$,Q,J);Ne.setMaterial(Q,Ge);let tt=$.index,xt=1;if(Q.wireframe===!0){if(tt=ve.getWireframeAttribute($),tt===void 0)return;xt=2}let ft=$.drawRange,yt=$.attributes.position,un=ft.start*xt,qn=(ft.start+ft.count)*xt;Ie!==null&&(un=Math.max(un,Ie.start*xt),qn=Math.min(qn,(Ie.start+Ie.count)*xt)),tt!==null?(un=Math.max(un,0),qn=Math.min(qn,tt.count)):yt!=null&&(un=Math.max(un,0),qn=Math.min(qn,yt.count));let Sn=qn-un;if(Sn<0||Sn===1/0)return;st.setup(J,Q,Ue,$,tt);let Mi,It=at;if(tt!==null&&(Mi=be.get(tt),It=Ye,It.setIndex(Mi)),J.isMesh)Q.wireframe===!0?(Ne.setLineWidth(Q.wireframeLinewidth*ut()),It.setMode(j.LINES)):It.setMode(j.TRIANGLES);else if(J.isLine){let Et=Q.linewidth;Et===void 0&&(Et=1),Ne.setLineWidth(Et*ut()),J.isLineSegments?It.setMode(j.LINES):J.isLineLoop?It.setMode(j.LINE_LOOP):It.setMode(j.LINE_STRIP)}else J.isPoints?It.setMode(j.POINTS):J.isSprite&&It.setMode(j.TRIANGLES);if(J.isBatchedMesh)It.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)It.renderInstances(un,Sn,J.count);else if($.isInstancedBufferGeometry){let Et=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ys=Math.min($.instanceCount,Et);It.renderInstances(un,Sn,ys)}else It.render(un,Sn)};function Ot(T,V,$){T.transparent===!0&&T.side===_n&&T.forceSinglePass===!1?(T.side=ri,T.needsUpdate=!0,Vt(T,V,$),T.side=us,T.needsUpdate=!0,Vt(T,V,$),T.side=_n):Vt(T,V,$)}this.compile=function(T,V,$=null){$===null&&($=T),g=it.get($),g.init(),M.push(g),$.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),T!==$&&T.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights(_._useLegacyLights);let Q=new Set;return T.traverse(function(J){let Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let Ge=0;Ge<Ie.length;Ge++){let Ue=Ie[Ge];Ot(Ue,$,J),Q.add(Ue)}else Ot(Ie,$,J),Q.add(Ie)}),M.pop(),g=null,Q},this.compileAsync=function(T,V,$=null){let Q=this.compile(T,V,$);return new Promise(J=>{function Ie(){if(Q.forEach(function(Ge){_t.get(Ge).currentProgram.isReady()&&Q.delete(Ge)}),Q.size===0){J(T);return}setTimeout(Ie,10)}We.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let kt=null;function Ft(T){kt&&kt(T)}function gn(){ct.stop()}function Oe(){ct.start()}let ct=new ju;ct.setAnimationLoop(Ft),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(T){kt=T,Ze.setAnimationLoop(T),T===null?ct.stop():ct.start()},Ze.addEventListener("sessionstart",gn),Ze.addEventListener("sessionend",Oe),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(V),V=Ze.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,V,L),g=it.get(T,M.length),g.init(),M.push(g),ze.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),W.setFromProjectionMatrix(ze),Ce=this.localClippingEnabled,ue=vt.init(this.clippingPlanes,Ce),v=ke.get(T,m.length),v.init(),m.push(v),zt(T,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(ie,ee),this.info.render.frame++,ue===!0&&vt.beginShadows();let $=g.state.shadowsArray;if(ye.render($,T,V),ue===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ht.render(v,T),g.setupLights(_._useLegacyLights),V.isArrayCamera){let Q=V.cameras;for(let J=0,Ie=Q.length;J<Ie;J++){let Ge=Q[J];hn(v,T,Ge,Ge.viewport)}}else hn(v,T,V);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(_,T,V),st.resetDefaultState(),q=-1,b=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function zt(T,V,$,Q){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){Q&&je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ze);let Ge=Se.update(T),Ue=T.material;Ue.visible&&v.push(T,Ge,Ue,$,je.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){let Ge=Se.update(T),Ue=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),je.copy(T.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),je.copy(Ge.boundingSphere.center)),je.applyMatrix4(T.matrixWorld).applyMatrix4(ze)),Array.isArray(Ue)){let tt=Ge.groups;for(let xt=0,ft=tt.length;xt<ft;xt++){let yt=tt[xt],un=Ue[yt.materialIndex];un&&un.visible&&v.push(T,Ge,un,$,je.z,yt)}}else Ue.visible&&v.push(T,Ge,Ue,$,je.z,null)}}let Ie=T.children;for(let Ge=0,Ue=Ie.length;Ge<Ue;Ge++)zt(Ie[Ge],V,$,Q)}function hn(T,V,$,Q){let J=T.opaque,Ie=T.transmissive,Ge=T.transparent;g.setupLightsView($),ue===!0&&vt.setGlobalState(_.clippingPlanes,$),Ie.length>0&&sa(J,Ie,V,$),Q&&Ne.viewport(A.copy(Q)),J.length>0&&Os(J,V,$),Ie.length>0&&Os(Ie,V,$),Ge.length>0&&Os(Ge,V,$),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function sa(T,V,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let Ie=nt.isWebGL2;Te===null&&(Te=new Wi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?Wr:hs,minFilter:Gr,samples:Ie?4:0})),_.getDrawingBufferSize(ht),Ie?Te.setSize(ht.x,ht.y):Te.setSize(Rl(ht.x),Rl(ht.y));let Ge=_.getRenderTarget();_.setRenderTarget(Te),_.getClearColor(Me),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let Ue=_.toneMapping;_.toneMapping=cs,Os(T,$,Q),R.updateMultisampleRenderTarget(Te),R.updateRenderTargetMipmap(Te);let tt=!1;for(let xt=0,ft=V.length;xt<ft;xt++){let yt=V[xt],un=yt.object,qn=yt.geometry,Sn=yt.material,Mi=yt.group;if(Sn.side===_n&&un.layers.test(Q.layers)){let It=Sn.side;Sn.side=ri,Sn.needsUpdate=!0,Ki(un,$,Q,qn,Sn,Mi),Sn.side=It,Sn.needsUpdate=!0,tt=!0}}tt===!0&&(R.updateMultisampleRenderTarget(Te),R.updateRenderTargetMipmap(Te)),_.setRenderTarget(Ge),_.setClearColor(Me,P),_.toneMapping=Ue}function Os(T,V,$){let Q=V.isScene===!0?V.overrideMaterial:null;for(let J=0,Ie=T.length;J<Ie;J++){let Ge=T[J],Ue=Ge.object,tt=Ge.geometry,xt=Q===null?Ge.material:Q,ft=Ge.group;Ue.layers.test($.layers)&&Ki(Ue,V,$,tt,xt,ft)}}function Ki(T,V,$,Q,J,Ie){T.onBeforeRender(_,V,$,Q,J,Ie),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(_,V,$,Q,T,Ie),J.transparent===!0&&J.side===_n&&J.forceSinglePass===!1?(J.side=ri,J.needsUpdate=!0,_.renderBufferDirect($,V,Q,J,T,Ie),J.side=us,J.needsUpdate=!0,_.renderBufferDirect($,V,Q,J,T,Ie),J.side=_n):_.renderBufferDirect($,V,Q,J,T,Ie),T.onAfterRender(_,V,$,Q,J,Ie)}function Vt(T,V,$){V.isScene!==!0&&(V=Ke);let Q=_t.get(T),J=g.state.lights,Ie=g.state.shadowsArray,Ge=J.state.version,Ue=Ve.getParameters(T,J.state,Ie,V,$),tt=Ve.getProgramCacheKey(Ue),xt=Q.programs;Q.environment=T.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(T.isMeshStandardMaterial?te:S).get(T.envMap||Q.environment),xt===void 0&&(T.addEventListener("dispose",Pe),xt=new Map,Q.programs=xt);let ft=xt.get(tt);if(ft!==void 0){if(Q.currentProgram===ft&&Q.lightsStateVersion===Ge)return vi(T,Ue),ft}else Ue.uniforms=Ve.getUniforms(T),T.onBuild($,Ue,_),T.onBeforeCompile(Ue,_),ft=Ve.acquireProgram(Ue,tt),xt.set(tt,ft),Q.uniforms=Ue.uniforms;let yt=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(yt.clippingPlanes=vt.uniform),vi(T,Ue),Q.needsLights=Dn(T),Q.lightsStateVersion=Ge,Q.needsLights&&(yt.ambientLightColor.value=J.state.ambient,yt.lightProbe.value=J.state.probe,yt.directionalLights.value=J.state.directional,yt.directionalLightShadows.value=J.state.directionalShadow,yt.spotLights.value=J.state.spot,yt.spotLightShadows.value=J.state.spotShadow,yt.rectAreaLights.value=J.state.rectArea,yt.ltc_1.value=J.state.rectAreaLTC1,yt.ltc_2.value=J.state.rectAreaLTC2,yt.pointLights.value=J.state.point,yt.pointLightShadows.value=J.state.pointShadow,yt.hemisphereLights.value=J.state.hemi,yt.directionalShadowMap.value=J.state.directionalShadowMap,yt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,yt.spotShadowMap.value=J.state.spotShadowMap,yt.spotLightMatrix.value=J.state.spotLightMatrix,yt.spotLightMap.value=J.state.spotLightMap,yt.pointShadowMap.value=J.state.pointShadowMap,yt.pointShadowMatrix.value=J.state.pointShadowMatrix),Q.currentProgram=ft,Q.uniformsList=null,ft}function jn(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=dr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function vi(T,V){let $=_t.get(T);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Ln(T,V,$,Q,J){V.isScene!==!0&&(V=Ke),R.resetTextureUnits();let Ie=V.fog,Ge=Q.isMeshStandardMaterial?V.environment:null,Ue=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Gi,tt=(Q.isMeshStandardMaterial?te:S).get(Q.envMap||Ge),xt=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ft=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),yt=!!$.morphAttributes.position,un=!!$.morphAttributes.normal,qn=!!$.morphAttributes.color,Sn=cs;Q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Sn=_.toneMapping);let Mi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,It=Mi!==void 0?Mi.length:0,Et=_t.get(Q),ys=g.state.lights;if(ue===!0&&(Ce===!0||T!==b)){let Qn=T===b&&Q.id===q;vt.setState(Q,T,Qn)}let Ct=!1;Q.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ys.state.version||Et.outputColorSpace!==Ue||J.isBatchedMesh&&Et.batching===!1||!J.isBatchedMesh&&Et.batching===!0||J.isInstancedMesh&&Et.instancing===!1||!J.isInstancedMesh&&Et.instancing===!0||J.isSkinnedMesh&&Et.skinning===!1||!J.isSkinnedMesh&&Et.skinning===!0||J.isInstancedMesh&&Et.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Et.instancingColor===!1&&J.instanceColor!==null||Et.envMap!==tt||Q.fog===!0&&Et.fog!==Ie||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==vt.numPlanes||Et.numIntersection!==vt.numIntersection)||Et.vertexAlphas!==xt||Et.vertexTangents!==ft||Et.morphTargets!==yt||Et.morphNormals!==un||Et.morphColors!==qn||Et.toneMapping!==Sn||nt.isWebGL2===!0&&Et.morphTargetsCount!==It)&&(Ct=!0):(Ct=!0,Et.__version=Q.version);let bi=Et.currentProgram;Ct===!0&&(bi=Vt(Q,V,J));let To=!1,Zi=!1,Fs=!1,Un=bi.getUniforms(),Nn=Et.uniforms;if(Ne.useProgram(bi.program)&&(To=!0,Zi=!0,Fs=!0),Q.id!==q&&(q=Q.id,Zi=!0),To||b!==T){Un.setValue(j,"projectionMatrix",T.projectionMatrix),Un.setValue(j,"viewMatrix",T.matrixWorldInverse);let Qn=Un.map.cameraPosition;Qn!==void 0&&Qn.setValue(j,je.setFromMatrixPosition(T.matrixWorld)),nt.logarithmicDepthBuffer&&Un.setValue(j,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Un.setValue(j,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Zi=!0,Fs=!0)}if(J.isSkinnedMesh){Un.setOptional(j,J,"bindMatrix"),Un.setOptional(j,J,"bindMatrixInverse");let Qn=J.skeleton;Qn&&(nt.floatVertexTextures?(Qn.boneTexture===null&&Qn.computeBoneTexture(),Un.setValue(j,"boneTexture",Qn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Un.setOptional(j,J,"batchingTexture"),Un.setValue(j,"batchingTexture",J._matricesTexture,R));let Tr=$.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0&&nt.isWebGL2===!0)&&St.update(J,$,bi),(Zi||Et.receiveShadow!==J.receiveShadow)&&(Et.receiveShadow=J.receiveShadow,Un.setValue(j,"receiveShadow",J.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Nn.envMap.value=tt,Nn.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),Zi&&(Un.setValue(j,"toneMappingExposure",_.toneMappingExposure),Et.needsLights&&en(Nn,Fs),Ie&&Q.fog===!0&&De.refreshFogUniforms(Nn,Ie),De.refreshMaterialUniforms(Nn,Q,re,G,Te),dr.upload(j,jn(Et),Nn,R)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(dr.upload(j,jn(Et),Nn,R),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Un.setValue(j,"center",J.center),Un.setValue(j,"modelViewMatrix",J.modelViewMatrix),Un.setValue(j,"normalMatrix",J.normalMatrix),Un.setValue(j,"modelMatrix",J.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Qn=Q.uniformsGroups;for(let wr=0,Bs=Qn.length;wr<Bs;wr++)if(nt.isWebGL2){let ei=Qn[wr];ot.update(ei,bi),ot.bind(ei,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function en(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Dn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,V,$){_t.get(T.texture).__webglTexture=V,_t.get(T.depthTexture).__webglTexture=$;let Q=_t.get(T);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){let $=_t.get(T);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,$=0){L=T,U=V,I=$;let Q=!0,J=null,Ie=!1,Ge=!1;if(T){let tt=_t.get(T);tt.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(j.FRAMEBUFFER,null),Q=!1):tt.__webglFramebuffer===void 0?R.setupRenderTarget(T):tt.__hasExternalTextures&&R.rebindTextures(T,_t.get(T.texture).__webglTexture,_t.get(T.depthTexture).__webglTexture);let xt=T.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(Ge=!0);let ft=_t.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ft[V])?J=ft[V][$]:J=ft[V],Ie=!0):nt.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?J=_t.get(T).__webglMultisampledFramebuffer:Array.isArray(ft)?J=ft[$]:J=ft,A.copy(T.viewport),Y.copy(T.scissor),ae=T.scissorTest}else A.copy(H).multiplyScalar(re).floor(),Y.copy(de).multiplyScalar(re).floor(),ae=le;if(Ne.bindFramebuffer(j.FRAMEBUFFER,J)&&nt.drawBuffers&&Q&&Ne.drawBuffers(T,J),Ne.viewport(A),Ne.scissor(Y),Ne.setScissorTest(ae),Ie){let tt=_t.get(T.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+V,tt.__webglTexture,$)}else if(Ge){let tt=_t.get(T.texture),xt=V||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,tt.__webglTexture,$||0,xt)}q=-1},this.readRenderTargetPixels=function(T,V,$,Q,J,Ie,Ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=_t.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ue=Ue[Ge]),Ue){Ne.bindFramebuffer(j.FRAMEBUFFER,Ue);try{let tt=T.texture,xt=tt.format,ft=tt.type;if(xt!==Ri&&Be.convert(xt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let yt=ft===Wr&&(We.has("EXT_color_buffer_half_float")||nt.isWebGL2&&We.has("EXT_color_buffer_float"));if(ft!==hs&&Be.convert(ft)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ft===os&&(nt.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Q&&$>=0&&$<=T.height-J&&j.readPixels(V,$,Q,J,Be.convert(xt),Be.convert(ft),Ie)}finally{let tt=L!==null?_t.get(L).__webglFramebuffer:null;Ne.bindFramebuffer(j.FRAMEBUFFER,tt)}}},this.copyFramebufferToTexture=function(T,V,$=0){let Q=Math.pow(2,-$),J=Math.floor(V.image.width*Q),Ie=Math.floor(V.image.height*Q);R.setTexture2D(V,0),j.copyTexSubImage2D(j.TEXTURE_2D,$,0,0,T.x,T.y,J,Ie),Ne.unbindTexture()},this.copyTextureToTexture=function(T,V,$,Q=0){let J=V.image.width,Ie=V.image.height,Ge=Be.convert($.format),Ue=Be.convert($.type);R.setTexture2D($,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment),V.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Q,T.x,T.y,J,Ie,Ge,Ue,V.image.data):V.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Q,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,Ge,V.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,Q,T.x,T.y,Ge,Ue,V.image),Q===0&&$.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(T,V,$,Q,J=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ie=T.max.x-T.min.x+1,Ge=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,tt=Be.convert(Q.format),xt=Be.convert(Q.type),ft;if(Q.isData3DTexture)R.setTexture3D(Q,0),ft=j.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)R.setTexture2DArray(Q,0),ft=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Q.unpackAlignment);let yt=j.getParameter(j.UNPACK_ROW_LENGTH),un=j.getParameter(j.UNPACK_IMAGE_HEIGHT),qn=j.getParameter(j.UNPACK_SKIP_PIXELS),Sn=j.getParameter(j.UNPACK_SKIP_ROWS),Mi=j.getParameter(j.UNPACK_SKIP_IMAGES),It=$.isCompressedTexture?$.mipmaps[J]:$.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,It.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,It.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,T.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,T.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?j.texSubImage3D(ft,J,V.x,V.y,V.z,Ie,Ge,Ue,tt,xt,It.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(ft,J,V.x,V.y,V.z,Ie,Ge,Ue,tt,It.data)):j.texSubImage3D(ft,J,V.x,V.y,V.z,Ie,Ge,Ue,tt,xt,It),j.pixelStorei(j.UNPACK_ROW_LENGTH,yt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,un),j.pixelStorei(j.UNPACK_SKIP_PIXELS,qn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Sn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Mi),J===0&&Q.generateMipmaps&&j.generateMipmap(ft),Ne.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Ne.unbindTexture()},this.resetState=function(){U=0,I=0,L=null,Ne.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===gc?"display-p3":"srgb",t.unpackColorSpace=Jt.workingColorSpace===yo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zn?Cs:qu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cs?zn:Gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Gl=class extends $r{};Gl.prototype.isWebGL1Renderer=!0;var io=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new mt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},so=class extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Kr=class extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Su=new B,Eu=new B,Tu=new An,gl=new Xr,Da=new gr,Wl=class extends Zn{constructor(e=new oi,t=new Kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Su.fromBufferAttribute(t,s-1),Eu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Su.distanceTo(Eu);e.setAttribute("lineDistance",new mn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;Tu.copy(s).invert(),gl.copy(e.ray).applyMatrix4(Tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new B,h=new B,f=new B,d=new B,u=this.isLineSegments?2:1,y=n.index,g=n.attributes.position;if(y!==null){let m=Math.max(0,a.start),M=Math.min(y.count,a.start+a.count);for(let _=m,w=M-1;_<w;_+=u){let U=y.getX(_),I=y.getX(_+1);if(c.fromBufferAttribute(g,U),h.fromBufferAttribute(g,I),gl.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let q=e.ray.origin.distanceTo(d);q<e.near||q>e.far||t.push({distance:q,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let _=m,w=M-1;_<w;_+=u){if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),gl.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},wu=new B,Au=new B,ro=class extends Wl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wu.fromBufferAttribute(t,s),Au.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wu.distanceTo(Au);e.setAttribute("lineDistance",new mn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ao=class extends yi{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Fe:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new B,s=[],r=[],a=[],o=new B,l=new An;for(let u=0;u<=e;u++){let y=u/e;s[u]=this.getTangentAt(y,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(Xn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,y))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Xn(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],u*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zr=class extends _i{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Fe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xl=class extends Zr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ua=new B,xl=new yc,yl=new yc,_l=new yc,ql=class extends _i{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ua.subVectors(s[0],s[1]).add(s[0]),c=Ua);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ua.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),xl.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,y,v,g),yl.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,y,v,g),_l.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,y,v,g)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),yl.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),_l.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(xl.calc(l),yl.calc(l),_l.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ru(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Ix(i,e){let t=1-i;return t*t*e}function Lx(i,e){return 2*(1-i)*i*e}function Dx(i,e){return i*i*e}function kr(i,e,t,n){return Ix(i,e)+Lx(i,t)+Dx(i,n)}function Ux(i,e){let t=1-i;return t*t*t*e}function Nx(i,e){let t=1-i;return 3*t*t*i*e}function Ox(i,e){return 3*(1-i)*i*i*e}function Fx(i,e){return i*i*i*e}function Hr(i,e,t,n,s){return Ux(i,e)+Nx(i,t)+Ox(i,n)+Fx(i,s)}var oo=class extends _i{constructor(e=new Fe,t=new Fe,n=new Fe,s=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,s.x,r.x,a.x,o.x),Hr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yl=class extends _i{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,s.x,r.x,a.x,o.x),Hr(e,s.y,r.y,a.y,o.y),Hr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lo=class extends _i{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$l=class extends _i{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends _i{constructor(e=new Fe,t=new Fe,n=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kl=class extends _i{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y),kr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Ru(o,l.x,c.x,h.x,f.x),Ru(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Fe().fromArray(s))}return this}},Cu=Object.freeze({__proto__:null,ArcCurve:Xl,CatmullRomCurve3:ql,CubicBezierCurve:oo,CubicBezierCurve3:Yl,EllipseCurve:Zr,LineCurve:lo,LineCurve3:$l,QuadraticBezierCurve:co,QuadraticBezierCurve3:Kl,SplineCurve:ho}),Zl=class extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Cu[s.type]().fromJSON(s))}return this}},yr=class extends Zl{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new lo(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new co(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new oo(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s),new Fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ho(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Zr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ms=class i extends oi{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],y=0,v=[],g=n/2,m=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new mn(f,3)),this.setAttribute("normal",new mn(d,3)),this.setAttribute("uv",new mn(u,2));function M(){let w=new B,U=new B,I=0,L=(t-e)/n;for(let q=0;q<=r;q++){let b=[],A=q/r,Y=A*(t-e)+e;for(let ae=0;ae<=s;ae++){let Me=ae/s,P=Me*l+o,N=Math.sin(P),G=Math.cos(P);U.x=Y*N,U.y=-A*n+g,U.z=Y*G,f.push(U.x,U.y,U.z),w.set(N,L,G).normalize(),d.push(w.x,w.y,w.z),u.push(Me,1-A),b.push(y++)}v.push(b)}for(let q=0;q<s;q++)for(let b=0;b<r;b++){let A=v[b][q],Y=v[b+1][q],ae=v[b+1][q+1],Me=v[b][q+1];h.push(A,Y,Me),h.push(Y,ae,Me),I+=6}c.addGroup(m,I,0),m+=I}function _(w){let U=y,I=new Fe,L=new B,q=0,b=w===!0?e:t,A=w===!0?1:-1;for(let ae=1;ae<=s;ae++)f.push(0,g*A,0),d.push(0,A,0),u.push(.5,.5),y++;let Y=y;for(let ae=0;ae<=s;ae++){let P=ae/s*l+o,N=Math.cos(P),G=Math.sin(P);L.x=b*G,L.y=g*A,L.z=b*N,f.push(L.x,L.y,L.z),d.push(0,A,0),I.x=N*.5+.5,I.y=G*.5*A+.5,u.push(I.x,I.y),y++}for(let ae=0;ae<s;ae++){let Me=U+ae,P=Y+ae;w===!0?h.push(P,P+1,Me):h.push(P+1,P,Me),q+=3}c.addGroup(m,q,w===!0?1:2),m+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ci=class i extends ms{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jl=class i extends oi{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new mn(r,3)),this.setAttribute("normal",new mn(r.slice(),3)),this.setAttribute("uv",new mn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new B,w=new B,U=new B;for(let I=0;I<t.length;I+=3)u(t[I+0],_),u(t[I+1],w),u(t[I+2],U),l(_,w,U,M)}function l(M,_,w,U){let I=U+1,L=[];for(let q=0;q<=I;q++){L[q]=[];let b=M.clone().lerp(w,q/I),A=_.clone().lerp(w,q/I),Y=I-q;for(let ae=0;ae<=Y;ae++)ae===0&&q===I?L[q][ae]=b:L[q][ae]=b.clone().lerp(A,ae/Y)}for(let q=0;q<I;q++)for(let b=0;b<2*(I-q)-1;b++){let A=Math.floor(b/2);b%2===0?(d(L[q][A+1]),d(L[q+1][A]),d(L[q][A])):(d(L[q][A+1]),d(L[q+1][A+1]),d(L[q+1][A]))}}function c(M){let _=new B;for(let w=0;w<r.length;w+=3)_.x=r[w+0],_.y=r[w+1],_.z=r[w+2],_.normalize().multiplyScalar(M),r[w+0]=_.x,r[w+1]=_.y,r[w+2]=_.z}function h(){let M=new B;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let w=g(M)/2/Math.PI+.5,U=m(M)/Math.PI+.5;a.push(w,1-U)}y(),f()}function f(){for(let M=0;M<a.length;M+=6){let _=a[M+0],w=a[M+2],U=a[M+4],I=Math.max(_,w,U),L=Math.min(_,w,U);I>.9&&L<.1&&(_<.2&&(a[M+0]+=1),w<.2&&(a[M+2]+=1),U<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function u(M,_){let w=M*3;_.x=e[w+0],_.y=e[w+1],_.z=e[w+2]}function y(){let M=new B,_=new B,w=new B,U=new B,I=new Fe,L=new Fe,q=new Fe;for(let b=0,A=0;b<r.length;b+=9,A+=6){M.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),w.set(r[b+6],r[b+7],r[b+8]),I.set(a[A+0],a[A+1]),L.set(a[A+2],a[A+3]),q.set(a[A+4],a[A+5]),U.copy(M).add(_).add(w).divideScalar(3);let Y=g(U);v(I,A+0,M,Y),v(L,A+2,_,Y),v(q,A+4,w,Y)}}function v(M,_,w,U){U<0&&M.x===1&&(a[_]=M.x-1),w.x===0&&w.z===0&&(a[_]=U/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},uo=class i extends Jl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var _r=class extends yr{constructor(e){super(e),this.uuid=Mr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new yr().fromJSON(s))}return this}},Bx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,d,u;if(n&&(r=Gx(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let y=t;y<s;y+=t)f=i[y],d=i[y+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return Jr(r,a,t,o,l,u,0),a}};function sd(i,e,t,n,s){let r,a;if(s===ey(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Pu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Pu(r,i[r],i[r+1],a);return a&&vo(a,a.next)&&(Qr(a),a=a.next),a}function Is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(vo(t,t.next)||pn(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&$x(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Hx(i,n,s,r):kx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Qr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=zx(Is(i),e,t),Jr(i,e,t,n,s,r,2)):a===2&&Vx(i,e,t,n,s,r):Jr(Is(i),e,t,n,s,r,1);break}}}function kx(i){let e=i.prev,t=i,n=i.next;if(pn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=d&&y.y>=f&&y.y<=u&&cr(s,o,r,l,a,c,y.x,y.y)&&pn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Hx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(pn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,u=o<l?o<c?o:c:l<c?l:c,y=h<f?h<d?h:d:f<d?f:d,v=o>l?o>c?o:c:l>c?l:c,g=h>f?h>d?h:d:f>d?f:d,m=jl(u,y,e,t,n),M=jl(v,g,e,t,n),_=i.prevZ,w=i.nextZ;for(;_&&_.z>=m&&w&&w.z<=M;){if(_.x>=u&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&cr(o,h,l,f,c,d,_.x,_.y)&&pn(_.prev,_,_.next)>=0||(_=_.prevZ,w.x>=u&&w.x<=v&&w.y>=y&&w.y<=g&&w!==s&&w!==a&&cr(o,h,l,f,c,d,w.x,w.y)&&pn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;_&&_.z>=m;){if(_.x>=u&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&cr(o,h,l,f,c,d,_.x,_.y)&&pn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;w&&w.z<=M;){if(w.x>=u&&w.x<=v&&w.y>=y&&w.y<=g&&w!==s&&w!==a&&cr(o,h,l,f,c,d,w.x,w.y)&&pn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function zx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!vo(s,r)&&rd(s,n,n.next,r)&&jr(s,r)&&jr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Qr(n),Qr(n.next),n=i=r),n=n.next}while(n!==i);return Is(n)}function Vx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jx(a,o)){let l=ad(a,o);a=Is(a,a.next),l=Is(l,l.next),Jr(a,e,t,n,s,r,0),Jr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Gx(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=sd(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Zx(c));for(s.sort(Wx),r=0;r<s.length;r++)t=Xx(s[r],t);return t}function Wx(i,e){return i.x-e.x}function Xx(i,e){let t=qx(i,e);if(!t)return e;let n=ad(t,i);return Is(n,n.next),Is(t,t.next)}function qx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&cr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),jr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&Yx(s,t)))&&(s=t,h=f)),t=t.next;while(t!==o);return s}function Yx(i,e){return pn(i.prev,i,e.prev)<0&&pn(e.next,i,i.next)<0}function $x(i,e,t,n){let s=i;do s.z===0&&(s.z=jl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kx(s)}function Kx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function jl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Zx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function cr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Jx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!jx(i,e)&&(jr(i,e)&&jr(e,i)&&Qx(i,e)&&(pn(i.prev,i,e.prev)||pn(i,e.prev,e))||vo(i,e)&&pn(i.prev,i,i.next)>0&&pn(e.prev,e,e.next)>0)}function pn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function vo(i,e){return i.x===e.x&&i.y===e.y}function rd(i,e,t,n){let s=Oa(pn(i,e,t)),r=Oa(pn(i,e,n)),a=Oa(pn(t,n,i)),o=Oa(pn(t,n,e));return!!(s!==r&&a!==o||s===0&&Na(i,t,e)||r===0&&Na(i,n,e)||a===0&&Na(t,i,n)||o===0&&Na(t,e,n))}function Na(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Oa(i){return i>0?1:i<0?-1:0}function jx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&rd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function jr(i,e){return pn(i.prev,i,i.next)<0?pn(i,e,i.next)>=0&&pn(i,i.prev,e)>=0:pn(i,e,i.prev)<0||pn(i,i.next,e)<0}function Qx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ad(i,e){let t=new Ql(i.i,i.x,i.y),n=new Ql(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pu(i,e,t,n){let s=new Ql(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ql(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ey(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var zr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Iu(e),Lu(n,e);let a=e.length;t.forEach(Iu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Lu(n,t[l]);let o=Bx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Iu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Lu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ea=class i extends oi{constructor(e=new _r([new Fe(0,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new mn(s,3)),this.setAttribute("normal",new mn(r,3)),this.setAttribute("uv",new mn(a,2));function c(h){let f=s.length/3,d=h.extractPoints(t),u=d.shape,y=d.holes;zr.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,m=y.length;g<m;g++){let M=y[g];zr.isClockWise(M)===!0&&(y[g]=M.reverse())}let v=zr.triangulateShape(u,y);for(let g=0,m=y.length;g<m;g++){let M=y[g];u=u.concat(M)}for(let g=0,m=u.length;g<m;g++){let M=u[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=v.length;g<m;g++){let M=v[g],_=M[0]+f,w=M[1]+f,U=M[2]+f;n.push(_,w,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ty(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function ty(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Di=class i extends oi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new B,d=new B,u=[],y=[],v=[],g=[];for(let m=0;m<=n;m++){let M=[],_=m/n,w=0;m===0&&a===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){let I=U/t;f.x=-e*Math.cos(s+I*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+I*r)*Math.sin(a+_*o),y.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(I+w,1-_),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let _=h[m][M+1],w=h[m][M],U=h[m+1][M],I=h[m+1][M+1];(m!==0||a>0)&&u.push(_,w,I),(m!==n-1||l<Math.PI)&&u.push(w,U,I)}this.setIndex(u),this.setAttribute("position",new mn(y,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Vn=class extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yu,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Fa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ny(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ec=class extends vr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dh,endingEnd:Dh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uh:r=e,o=2*t-n;break;case Nh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uh:a=e,l=2*n-t;break;case Nh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,y=(n-t)/(s-t),v=y*y,g=v*y,m=-d*g+2*d*v-d*y,M=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*y+1,_=(-1-u)*g+(1.5+u)*v+.5*y,w=u*g-u*v;for(let U=0;U!==o;++U)r[U]=m*a[h+U]+M*a[c+U]+_*a[l+U]+w*a[f+U];return r}},tc=class extends vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},nc=class extends vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fa(t,this.TimeBufferType),this.values=Fa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fa(e.times,Array),values:Fa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ec(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ka:t=this.InterpolantFactoryMethodDiscrete;break;case Ha:t=this.InterpolantFactoryMethodLinear;break;case Xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ka;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ny(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,u=f+n;for(let y=0;y!==n;++y){let v=t[f+y];if(v!==t[d+y]||v!==t[u+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=Ha;var Ls=class extends Pi{};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ka;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends Pi{};ic.prototype.ValueTypeName="color";var sc=class extends Pi{};sc.prototype.ValueTypeName="number";var rc=class extends vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)fs.slerpFlat(r,0,a,c-o,a,c,l);return r}},ta=class extends Pi{InterpolantFactoryMethodLinear(e){return new rc(this.times,this.values,this.getValueSize(),e)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.DefaultInterpolation=Ha;ta.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends Pi{};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ka;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends Pi{};ac.prototype.ValueTypeName="vector";var oc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],y=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return y}return null}}},iy=new oc,lc=class{constructor(e){this.manager=e!==void 0?e:iy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};lc.DEFAULT_MATERIAL_NAME="__DEFAULT";var fo=class extends Zn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var vl=new An,Du=new B,Uu=new B,cc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new An,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uu),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var hc=class extends cc{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},po=class extends fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zn.DEFAULT_UP),this.updateMatrix(),this.target=new Zn,this.shadow=new hc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},mo=class extends fo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var _c="\\[\\]\\.:\\/",sy=new RegExp("["+_c+"]","g"),vc="[^"+_c+"]",ry="[^"+_c.replace("\\.","")+"]",ay=/((?:WC+[\/:])*)/.source.replace("WC",vc),oy=/(WCOD+)?/.source.replace("WCOD",ry),ly=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),cy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),hy=new RegExp("^"+ay+oy+ly+cy+"$"),uy=["material","materials","bones","map"],uc=class{constructor(e,t,n){let s=n||ln.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ln=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sy,"")}static parseTrackName(e){let t=hy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);uy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ln.Composite=uc;ln.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ln.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ln.prototype.GetterByBindingType=[ln.prototype._getValue_direct,ln.prototype._getValue_array,ln.prototype._getValue_arrayElement,ln.prototype._getValue_toArray];ln.prototype.SetterByBindingTypeAndVersioning=[[ln.prototype._setValue_direct,ln.prototype._setValue_direct_setNeedsUpdate,ln.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_array,ln.prototype._setValue_array_setNeedsUpdate,ln.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_arrayElement,ln.prototype._setValue_arrayElement_setNeedsUpdate,ln.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_fromArray,ln.prototype._setValue_fromArray_setNeedsUpdate,ln.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ey=new Float32Array(1);var go=class{constructor(e,t,n=0,s=1/0){this.ray=new Xr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return dc(e,this,n,t),n.sort(Nu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)dc(e[s],this,n,t);return n.sort(Nu),n}};function Nu(i,e){return i.distance-e.distance}function dc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)dc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);var Mc=35,bc=25,Sc=.29,bt=.95,Jn=.35,gs=200,Yi=7,Us=300,Sr=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),fy=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],py=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch","paladin","exorcist","bandit","ranger","blacksmith","alchemist"],Mo={tank:["knight","berserker","werewolf","ghoul"],melee:["assassin","ninja","samurai","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["hunter","ranger","alchemist"],caster:["mage","witch"]},na={tank:2,melee:2,support:1,ranged:1,caster:1};function my(i){let e=Math.max(1,i),t=Object.keys(na),n=t.reduce((l,c)=>l+(na[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(na[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(na[c]??0)-(na[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var $e={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},$i=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist"];function gy(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var qt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:4,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5}},bo={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331}},ia={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp"},Ui=$i.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function xy(i,e){Sr&&($i.includes(i)&&Ui[i]&&Ui[i].kills++,$i.includes(e)&&Ui[e]&&Ui[e].deaths++)}function yy(i,e){if(!Sr)return;for(let n of i)!n||!Ui[n.class]||(Ui[n.class].battles++,e!=null&&(n.player===e?Ui[n.class].wins++:Ui[n.class].losses++));let t=$i.map(n=>{let s=Ui[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var od={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:8,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:2,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:3,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:5,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:3,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:2,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 3 turns.",cost:5,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:6,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage to one enemy and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}]};function xe(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function So(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,f=(u,y,v,g)=>{if(v)u.hp=Math.min(u.maxHp,u.hp+y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${y}`,!1,"heal");else{let m=u===s,M=!0;if(!m&&!g){let _=xe(u,"agi")*.7+xe(u,"luk")*.3;M=Math.random()*Math.max(.001,_)<=xe(s,"dex")}return M?(u.hp=Math.max(0,u.hp-y),u!==s&&(h=y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(y),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u,s)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),M}},d=(u,y,v,g)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,y,v,!1,g?"buff":"debuff")};switch(i){case"brave":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let u=2,y=1;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,r.vit=Math.max(1,(r.vit||0)-y),s.vit=(s.vit||0)+y,d(r.x,r.y,`-${u} STR and -${y} VIT`,!1),d(s.x,s.y,`+${u} STR and +${y} VIT`,!0)}break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(xe(s,"int")-(xe(r,"int")*.7+xe(r,"luk")*.2)));f(r,u,!1,!0)}break;case"manaDrain":if(r){let u=Math.max(1,Math.floor(xe(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-u),s.mp=(s.mp||0)+u,d(r.x,r.y,`-${u} MP`,!1),d(s.x,s.y,`+${u} MP`,!0)}break;case"mantra":if(r){let u=Math.max(1,Math.floor(xe(s,"int")*.3));if(s.tempBuff=s.tempBuff||{},s.tempBuff.int=u,s.tempBuff.duration=3,d(s.x,s.y,`+${u} LUK`,!0),!r)break;r.tempBuff=r.tempBuff||{},r.tempBuff.luk=u,r.tempBuff.duration=3,d(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(f(s,Math.max(1,Math.floor(xe(s,"int")*.3+xe(s,"luk")*.15)),!0),!r)break;f(r,Math.max(1,Math.floor(xe(s,"int")*.3+xe(r,"luk")*.15)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,d(r.x,r.y,`-${u} VIT`,!1),d(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"str")*.7-(xe(r,"vit")*.3+xe(r,"luk")*.2)));f(r,u,!1)&&f(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=u,r.tempDebuff.duration=3,d(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"str")*.6));f(r,u,!1)}break;case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"dex")*.7-(xe(r,"vit")*.3+xe(r,"luk")*.2)));f(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,d(r.x,r.y,`-${u} AGI`,!1),d(s.x,s.y,`+${u} AGI`,!0)}break;case"execute":if(r){let u=Math.max(1,Math.floor(xe(s,"agi")*.8-(xe(r,"vit")*.3+xe(r,"luk")*.2)));f(r,u,!1)}break;case"berserk":r&&(f(r,Math.max(1,Math.floor(xe(s,"str")*.8-xe(r,"vit")*.3+xe(r,"luk")*.2)),!1),f(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=u,s.tempBuff.vit=u,s.tempBuff.duration=2,d(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,d(r.x,r.y,`-${u} INT`,!1),d(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(xe(s,"int")*.6-(xe(r,"int")*.4+xe(r,"luk")*.2)));f(r,u,!1,!0),f(s,u,!0)}break;case"blind":{if(!r)break;let u=1;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,d(r.x,r.y,`-${u} DEX`,!1),d(s.x,s.y,`+${u} DEX`,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"dex")*.7-(xe(r,"vit")*.3+xe(r,"luk")*.2)));f(r,u,!1)}break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=3,d(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"str")*.4+xe(s,"dex")*.4-(xe(r,"vit")*.3+xe(r,"luk")*.2)));f(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"str")*.7+xe(s,"agi")*.1-(xe(r,"vit")*.3+xe(r,"luk")*.2)));f(r,u,!1)}break;case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=3,d(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let u=Math.max(1,Math.floor(xe(s,"int")*.5));f(r,u,!0),f(s,3,!1)}break;case"judgement":{if(!r)break;let u=Math.max(1,Math.floor(s.maxHp-s.hp-(xe(r,"int")*.2+xe(r,"luk")*.1)));f(r,u,!1,!0)}break;case"sanctuary":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.vit=1,s.tempBuff.dex=1,s.tempBuff.agi=1,s.tempBuff.int=1,s.tempBuff.luk=1,s.tempBuff.duration=4,r.tempBuff=r.tempBuff||{},r.tempBuff.str=1,r.tempBuff.vit=1,r.tempBuff.dex=1,r.tempBuff.agi=1,r.tempBuff.int=1,r.tempBuff.luk=1,r.tempBuff.duration=4,s.hp<s.maxHp&&(s.hp+=1),r.hp<r.maxHp&&(r.hp+=1),d(s.x,s.y,"+1 ALL STATS",!0),d(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let u=Math.max(1,Math.floor(r.maxHp-r.hp-(xe(r,"int")*.4+xe(r,"luk")*.2)));f(r,u,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,d(r.x,r.y,"-2 LUK",!1),d(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"luk")*.8-(xe(r,"vit")*.3+xe(r,"luk")*.2)));f(r,u,!1)}break;case"windWalk":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=1,s.tempBuff.agi=3,s.tempBuff.duration=3,d(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"dex")*.6-(xe(r,"vit")*.3+xe(r,"luk")*.2)));if(f(r,u,!1)&&n.world&&n.units&&n.updateUnitPosition){let v=Math.max(1,Math.floor(u*.2)),g=My(n.world,n.units,s,r,v),m=r.x,M=r.y;r.x=g.newGx,r.y=g.newGy,g.collisionDamage>0?(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),f(r,g.collisionDamage,!1)):n.animateKnockback?n.animateKnockback(r,m,M,g.newGx,g.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r))}}break;case"forge":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=2,r.tempBuff.duration=3,d(s.x,s.y,"+2 STR",!0),d(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff=s.tempBuff||{},s.tempBuff.str=3,s.tempBuff.vit=3,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=3,r.tempBuff.vit=3,r.tempBuff.duration=3,d(s.x,s.y,"+3 STR, +3 VIT",!0),d(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let u=Math.max(1,Math.floor(xe(r,"luk")*.3));r.tempDebuff=r.tempDebuff||{},r.tempDebuff.poison=u,r.tempDebuff.duration=3,d(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let u=Math.max(1,Math.floor(xe(s,"int")*.8-(xe(r,"int")*.4+xe(r,"luk")*.2)));f(r,u,!1,!0);let y=Math.max(1,Math.floor(u*.5));s.luk=Math.max(1,(s.luk||0)+y),d(s.x,s.y,`+${y} LUK`,!0)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function ld(){let i=Mc,e=bc,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill($e.GRASS)),r=Math.floor(i/2),a=Math.floor(e/2),o=r,l=0,c=r,h=e-1,f=2,d=3;function u(P,N,G,re){let ie=re;for(let ee=N;ee<=G;ee++)if(!(ee<0||ee>=e))for(let H=-f;H<=f;H++){let de=ie+H;de<0||de>=i||(t[ee][de]=!0,s[ee][de]=P,n[ee][de]=1)}}u($e.BASE_TOP,l,l+d-1,o),u($e.BASE_BOTTOM,h-d+1,h,c),u($e.CENTER,a-1,a+1,r);let y=new Set,v=(P,N)=>Math.abs(P-r)<=2&&Math.abs(N-a)<=1,g=(P,N)=>{P<0||P>=i||N<0||N>=e||v(P,N)||y.add(N*i+P)},m=Math.floor(i/2),M=Math.floor(e/2),_=Math.min(i,e)*Sc,w=Math.max(60,(e+i)*2);for(let P=0;P<2;P++){let N=P===0?m-_:m+_,G=P===0?Math.PI/2:-Math.PI/2,re=P===0?Math.PI*3/2:Math.PI/2;for(let ie=0;ie<=w;ie++){let ee=ie/w,H=G+ee*(re-G),de=N+_*Math.cos(H),le=M+_*Math.sin(H),W=Math.round(de),ue=Math.round(le);g(W,ue),g(W+1,ue),g(W-1,ue),g(W,ue+1),g(W,ue-1)}}let U=[[0,1],[0,-1],[1,0],[-1,0]];for(let P=0;P<1;P++){let N=[];y.forEach(G=>{let re=G%i,ie=G/i|0;for(let[ee,H]of U){let de=re+ee,le=ie+H;if(de<0||de>=i||le<0||le>=e)continue;let W=le*i+de;y.has(W)||N.push(W)}}),N.forEach(G=>y.add(G))}y.forEach(P=>{let N=P%i,G=P/i|0;s[G][N]===$e.BASE_TOP||s[G][N]===$e.BASE_BOTTOM||s[G][N]===$e.CENTER||(t[G][N]=!0,s[G][N]=$e.PATH,n[G][N]=1)});let I=Math.round(m-_*1.6),L=Math.round(m+_*1.6),q=Math.round(m-_),b=Math.round(m+_),A=1;for(let P=a-A;P<=a+A;P++)if(!(P<0||P>=e))for(let N=I;N<=L;N++)N<0||N>=i||(t[P][N]=!0,s[P][N]!==$e.CENTER&&s[P][N]!==$e.BASE_TOP&&s[P][N]!==$e.BASE_BOTTOM&&(s[P][N]=$e.PATH),n[P][N]=Math.max(n[P][N],1));function Y(P,N,G,re){let ie=Math.max(1,Math.min(P,N)),ee=Math.min(e-2,Math.max(P,N)),H=Math.max(1,Math.min(G,re)),de=Math.min(i-2,Math.max(G,re));for(let le=ie;le<=ee;le++)for(let W=H;W<=de;W++)s[le][W]===$e.BASE_TOP||s[le][W]===$e.BASE_BOTTOM||s[le][W]===$e.CENTER||(t[le][W]=!0,s[le][W]=$e.PATH,n[le][W]=1)}let ae=3,Me=3;Y(l,l+ae-1,q,o-1),Y(l,l+ae-1,o+1,b),Y(h-Me+1,h,q,c-1),Y(h-Me+1,h,c+1,b),u($e.BASE_TOP,l,l+d-1,o),u($e.BASE_BOTTOM,h-d+1,h,c),u($e.CENTER,a-1,a+1,r);for(let P=0;P<e;P++)for(let N=0;N<i;N++){if(t[P][N]||s[P][N]===$e.BASE_TOP||s[P][N]===$e.BASE_BOTTOM||s[P][N]===$e.CENTER)continue;let G=Math.abs(N-o)<=4&&Math.abs(P-l)<=3,re=Math.abs(N-c)<=4&&Math.abs(P-h)<=3,ie=G||re,ee=Math.random();ee<.55&&!ie?(s[P][N]=$e.TREE,n[P][N]=1+Math.floor(Math.random()*2)):ee<.75||ie&&ee<.5?(s[P][N]=$e.WATER,n[P][N]=0):(s[P][N]=$e.ROCK,n[P][N]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:o,topBaseY:l,botBaseX:c,botBaseY:h}}function _y(i,e,t){let n=e===1?$e.BASE_BOTTOM:$e.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function vy(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===$e.CENTER&&e.push({gx:n,gy:t});return e}function cd(i,e){let t=vy(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function Er(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===$e.TREE||n===$e.WATER||n===$e.ROCK)}function My(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let f=0;for(let d=0;d<s;d++){let u=r+c,y=a+h,v=u<0||u>=i.w||y<0||y>=i.h,g=!Er(i,u,y),m=e.some(M=>M.hp>0&&M.id!==n.id&&M.x===u&&M.y===y);if(v||g||m){let M=Math.max(1,f*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:M}}r=u,a=y,f++}return{newGx:r,newGy:a,collisionDamage:0}}function by(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),f=r<o?1:-1,d=a<l?1:-1,u=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let y=2*u;y>-h&&(u-=h,r+=f),y<c&&(u+=c,a+=d)}return s}function Ns(i,e,t,n,s){let r=by(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!Er(i,o.x,o.y))return!1}return!0}function Eo(i,e,t,n,s,r){let a=(d,u)=>u*i.w+d,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null,f=h?new Set(s.filter(d=>d.hp>0&&d.player!==r.player).map(d=>d.y*i.w+d.x)):null;for(;l.length;){let{x:d,y:u,d:y}=l.shift();if(!(y>=n))for(let[v,g]of c){let m=d+v,M=u+g;if(!Er(i,m,M)||h&&f.has(a(m,M)))continue;let _=a(m,M);if(o.has(_))continue;let w=y+1;o.set(_,w),l.push({x:m,y:M,d:w})}}return o}function hd(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++){let f=Math.abs(h-e)+Math.abs(c-t);f>=1&&f<=n&&s.set(c*i.w+h,f)}return s}function xs(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(u,y)=>y*i.w+u,l=new Set(r.filter(u=>u.hp>0&&u.player!==a.player).map(u=>u.y*i.w+u.x)),c=new Map,h=[{x:e,y:t}];c.set(o(e,t),null);let f=[[0,1],[0,-1],[1,0],[-1,0]];function d(u,y){return Er(i,u,y)?!l.has(o(u,y)):!1}for(;h.length;){let{x:u,y}=h.shift();if(u===n&&y===s){let v=[],g={x:n,y:s};for(;g;)v.unshift(g),g=c.get(o(g.x,g.y));return v}for(let[v,g]of f){let m=u+v,M=y+g,_=o(m,M);c.has(_)||d(m,M)&&(c.set(_,{x:u,y}),h.push({x:m,y:M}))}}return null}var ud={[$e.PATH]:2976557,[$e.GRASS]:2968109,[$e.TREE]:1719578,[$e.WATER]:1989278,[$e.ROCK]:4872778,[$e.BASE_TOP]:8014410,[$e.BASE_BOTTOM]:4872826,[$e.CENTER]:13940810};function Ec(i){return i.w*bt/2}function Tc(i){return i.h*bt/2}function fd(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new ao(e);return r.wrapS=r.wrapT=Vr,r.repeat.set(4,4),r.needsUpdate=!0,r}function dd(i){let e=new xi,t=Ec(i),n=Tc(i),s=new Cn(bt,Jn,bt),r=fd(64),a=.88,o=.02,l=[];function c(d,u,y,v,g){let m=new Vn({color:3828266,roughness:.9});m.bumpMap=r,m.bumpScale=.12;for(let M=0;M<v;M++){let _=.08+Math.random()*g,w=.03+Math.random()*.03,U=new Xe(new ms(w*.5,w,_,6),m);U.position.set(d+(Math.random()-.5)*.5,y+_/2,u+(Math.random()-.5)*.5),U.rotation.x=(Math.random()-.5)*.2,U.rotation.z=(Math.random()-.5)*.2,U.castShadow=!0,e.add(U)}}let h=.12;function f(d,u,y,v){let g=y+.02,m=[[d-h,g,u-h],[d+h,g,u+h],[d-h,g,u+h],[d+h,g,u-h],[d-h+.06,g,u-h+.06],[d+h-.06,g,u+h-.06],[d-h+.06,g,u+h-.06],[d+h-.06,g,u-h+.06]],M=new Float32Array(m.length*3);m.forEach((I,L)=>{M[L*3]=I[0],M[L*3+1]=I[1],M[L*3+2]=I[2]});let _=new oi;_.setAttribute("position",new ai(M,3)),_.computeBoundingSphere();let w=new Kr({color:855309,linewidth:1}),U=new ro(_,w);v.add(U)}for(let d=0;d<i.h;d++)for(let u=0;u<i.w;u++){let y=i.type[d][u],v=i.height[d][u],g=ud[y],m=Jn+v*.35,M=m/2+Jn/2,_=new Vn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),w=(g>>16&255)/255,U=(g>>8&255)/255,I=(g&255)/255,L=w,q=U,b=I;if(y===$e.PATH||y===$e.TREE||y===$e.ROCK){let re=Math.random()*.45;L=w*(1-re)+.42*re,q=U*(1-re)+.26*re,b=I*(1-re)+.14*re}(y===$e.TREE||y===$e.ROCK)&&(L*=.5,q*=.5,b*=.5);let A=1+(Math.random()-.5)*.12;_.color.setRGB(Math.min(1,L*A),Math.min(1,q*A),Math.min(1,b*A)),_.bumpMap=r,_.bumpScale=.12;let Y=new Xe(s,_);Y.position.set(u*bt-t+bt/2,m/2,d*bt-n+bt/2),Y.castShadow=!0,Y.receiveShadow=!0,Y.userData={gx:u,gy:d,type:y},e.add(Y);let ae=u*bt-t+bt/2,Me=d*bt-n+bt/2;if(y===$e.TREE&&f(ae,Me,M,e),y===$e.TREE){let P=new xi;P.position.set(ae,M,Me);let N=u===0||u===i.w-1||d===0||d===i.h-1,G=N?.75+Math.random()*.35:.5+Math.random()*.2,re=new mt(4007959),ie=()=>1+(Math.random()-.5)*.4;re.r=Math.min(1,Math.max(0,re.r*ie())),re.g=Math.min(1,Math.max(0,re.g*ie())),re.b=Math.min(1,Math.max(0,re.b*ie()));let ee=.85+Math.random()*.2,H=new Vn({color:re,roughness:ee});H.bumpMap=r,H.bumpScale=.1+Math.random()*.12;let de=new Xe(new ms(.12,.14,G,8),H);de.position.set(0,G/2,0),de.castShadow=!0,de.raycast=function(){},P.add(de);let le=r.clone();le.repeat.set(3,3);let W=new mt(2972205),ue=()=>1+(Math.random()-.5)*.44;W.r=Math.min(1,Math.max(0,W.r*ue())),W.g=Math.min(1,Math.max(0,W.g*ue())),W.b=Math.min(1,Math.max(0,W.b*ue()));let Ce=.78+Math.random()*.24,Te=new Vn({color:W,roughness:Ce});Te.bumpMap=le,Te.bumpScale=.16+Math.random()*.14;let ze=N?.52:.45,ht=N?1.05:.9,je=.12,Ke=ht*.5,ut=ht*.45,j=ht*.4,cn=new Xe(new Ci(ze,Ke,8),Te);cn.position.set(0,G+Ke/2,0),cn.castShadow=!0,cn.raycast=function(){},P.add(cn);let We=new Xe(new Ci(ze*.75,ut,8),Te);We.position.set(0,G+Ke-je+ut/2,0),We.castShadow=!0,We.raycast=function(){},P.add(We);let nt=new Xe(new Ci(ze*.5,j,8),Te);nt.position.set(0,G+Ke-je+ut-je+j/2,0),nt.castShadow=!0,nt.raycast=function(){},P.add(nt),e.add(P),l.push(P)}else if(y===$e.WATER){let P=ud[$e.WATER],N=(P>>16&255)/255,G=(P>>8&255)/255,re=(P&255)/255,ie=1+(Math.random()-.5)*.12,ee=new Vn({color:new mt().setRGB(Math.min(1,N*ie),Math.min(1,G*ie),Math.min(1,re*ie)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),H=new Xe(new qi(bt,bt),ee);H.rotation.x=-Math.PI/2,H.position.set(ae,M+.02,Me),H.receiveShadow=!0,e.add(H)}else if(y===$e.ROCK){let P=new Vn({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let N=(ee,H,de)=>{let le=new Xe(new uo(ee,0),P);le.position.set(ae+H,M+ee-.2,Me+de),le.rotation.set(Math.random(),Math.random(),Math.random()),le.castShadow=!0,e.add(le)},G=.32+Math.random()*.14,re=.2+Math.random()*.12,ie=.12+Math.random()*.12;N(G,(Math.random()-.5)*.15,(Math.random()-.5)*.15),N(re,(Math.random()-.5)*.25,(Math.random()-.5)*.25),N(ie,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function Sy(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=ld(),t=document.getElementById("canvas-wrap"),n=new so;n.background=new mt(1711652),n.fog=new io(1711652,30,90);let s=e.w*bt/2,r=e.h*bt/2,a=new Kn(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,c=new B(12,38,16).normalize().multiplyScalar(o),h=new B,f=new B,d=new wi(new B(0,1,0),0),u=new B,y=new B,v=!1,g=!1,m=!0,M=!1,_=null,w=5,U=.004,I=-Math.PI*.4,L=Math.PI*.4,q=new B,b={x:0,y:0},A=!1,Y=1,ae=40,Me=.005,P=.15,N=1,G=null,re=new mo(16777215,.45);n.add(re);let ie=new po(16774630,1.1);ie.position.set(30,50,20),ie.castShadow=!0,ie.shadow.mapSize.width=2048,ie.shadow.mapSize.height=2048,ie.shadow.camera.near=1,ie.shadow.camera.far=120,ie.shadow.camera.left=-50,ie.shadow.camera.right=50,ie.shadow.camera.top=50,ie.shadow.camera.bottom=-50,n.add(ie);let ee=dd(e);n.add(ee);let H=[],de=1,le=new Map,W=fd(64),ue=Ec(e),Ce=Tc(e);function Te(x,p){let C=(Jn+e.height[p][x]*.35)/2+Jn/2;return new B(x*bt-ue+bt/2,C,p*bt-Ce+bt/2)}function ze(x){x==="short"&&(Mc=27,bc=15,Sc=.35,gs=100),n.remove(ee),ee.traverse(p=>{p.geometry&&p.geometry.dispose(),p.material&&(Array.isArray(p.material)?p.material:[p.material]).forEach(C=>C.dispose())}),le.forEach(p=>{n.remove(p),p.traverse(E=>{E.geometry&&E.geometry.dispose(),E.material&&(Array.isArray(E.material)?E.material:[E.material]).forEach(k=>k.dispose())})}),le.clear(),H.length=0,de=1,e=ld(),ue=Ec(e),Ce=Tc(e),ee=dd(e),n.add(ee)}function ht(){le.forEach(x=>{n.remove(x),x.traverse(p=>{p.geometry&&p.geometry.dispose(),p.material&&(Array.isArray(p.material)?p.material:[p.material]).forEach(C=>C.dispose())})}),le.clear(),H.length=0,de=1}function je(x,p){let E=(x>>16&255)/255,C=(x>>8&255)/255,k=(x&255)/255,D=1+(Math.random()-.5)*p;return new mt(Math.min(1,E*D),Math.min(1,C*D),Math.min(1,k*D))}let Ke=.62;function ut(x,p){p=p??Ke;let E=x instanceof mt?x:new mt(x);return new mt(Math.max(0,E.r*p),Math.max(0,E.g*p),Math.max(0,E.b*p))}function j(x,p,E){let C=bo[p]||bo.knight,k=ut(je(C.primary,.08)),D=ut(je(C.secondary,.08)),Z=qt[p]&&qt[p].gender||"male",z=E??4006676,O=ut(je(C.skin!=null?C.skin:15250592,.06)),X=ut(je(z,.08)),he=()=>(Math.random()-.5)*.08,Ee=()=>(Math.random()-.5)*.04,ne=new Vn({color:k,metalness:Math.max(0,.25+Ee()),roughness:Math.max(.3,Math.min(1,.5+he()))});ne.bumpMap=W,ne.bumpScale=.1;let oe=new Vn({color:D,metalness:Math.max(0,.2+Ee()),roughness:Math.max(.3,Math.min(1,.55+he()))});oe.bumpMap=W,oe.bumpScale=.1;let _e=new Vn({color:k,metalness:Math.max(0,.25+Ee()),roughness:Math.max(.3,Math.min(1,.5+he()))});_e.bumpMap=W,_e.bumpScale=.1;let qe=new Vn({color:O,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+he()))});qe.bumpMap=W,qe.bumpScale=.05;let He=new xi,rt=.28,Lt=.08,Yt=.08,bn=new Xe(new Cn(Lt,rt,Yt),oe);bn.position.set(-.06,rt/2,0),bn.castShadow=!0,He.add(bn);let Fn=new Xe(new Cn(Lt,rt,Yt),oe);Fn.position.set(.06,rt/2,0),Fn.castShadow=!0,He.add(Fn);let tn=.28,Bt=.2,Gt=.12,Dt=new Xe(new Cn(Bt,tn,Gt),ne);Dt.position.set(0,rt+tn/2,0),Dt.castShadow=!0,He.add(Dt);let wt=.06,dn=.22,$t=.06,Wt=new Xe(new Cn(wt,dn,$t),_e);Wt.position.set(-(Bt/2+wt/2),rt+tn-.08,0),Wt.castShadow=!0,He.add(Wt);let Ut=new Xe(new Cn(wt,dn,$t),_e);if(Ut.position.set(Bt/2+wt/2,rt+tn-.08,0),Ut.castShadow=!0,He.add(Ut),C.cape!=null){let K=Bt*1.95,fe=K*.6,me=rt+tn*.28,se=new _r;se.moveTo(-fe/2,me/2),se.lineTo(fe/2,me/2),se.lineTo(K/2,-me/2),se.lineTo(-K/2,-me/2),se.closePath();let ce=new ea(se),pe=new Vn({color:ut(je(C.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+he())),side:_n});pe.bumpMap=W,pe.bumpScale=.12;let ge=new Xe(ce,pe);ge.position.set(0,rt+tn-me/2+.05,-Gt/2-.02),ge.rotation.y=Math.PI,ge.castShadow=!0,He.add(ge);let Le=.055,et=rt+tn+.02,Pt=.02,Nt=Bt/2+wt*.5,pt=new Xe(new Di(Le,10,8,0,Math.PI*2,0,Math.PI*.55),pe.clone());pt.position.set(-Nt,et,Pt),pt.rotation.x=-Math.PI*.35,pt.rotation.z=Math.PI*.5,pt.scale.set(1.2,.85,1.1),pt.castShadow=!0,He.add(pt);let nn=new Xe(new Di(Le,10,8,0,Math.PI*2,0,Math.PI*.55),pe.clone());nn.position.set(Nt,et,Pt),nn.rotation.x=-Math.PI*.35,nn.rotation.z=-Math.PI*.5,nn.scale.set(1.2,.85,1.1),nn.castShadow=!0,He.add(nn)}if(C.belt!=null){let K=new Vn({color:ut(je(C.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+he()))});K.bumpMap=W,K.bumpScale=.1;let fe=.022,me=.04,se=new Xe(new Cn(Bt+.04,fe,Gt+me),K);se.position.set(0,rt+.04,0),se.castShadow=!0,He.add(se)}if(C.apron!=null){let K=new Vn({color:ut(je(C.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+he())),side:_n});K.bumpMap=W,K.bumpScale=.12;let fe=Bt*.95,me=rt*.85,se=new Xe(new qi(fe,me),K),ce=rt+.2;se.position.set(0,ce-me/2,Gt/2+.02),se.castShadow=!0,He.add(se);let pe=rt+tn+.02,ge=Bt/2+wt*.2,Le=.018,et=.008,Pt=pe-ce,Nt=new Xe(new Cn(Le,Pt,et),K.clone());Nt.position.set(-ge,(ce+pe)/2,Gt/2+.015),Nt.castShadow=!0,He.add(Nt);let pt=new Xe(new Cn(Le,Pt,et),K.clone());pt.position.set(ge,(ce+pe)/2,Gt/2+.015),pt.castShadow=!0,He.add(pt)}let Qe=.1,Mt=new Xe(new Di(Qe,12,10),qe);Mt.position.set(0,rt+tn+Qe,0),Mt.castShadow=!0,He.add(Mt);let fn=new vn({color:1710638}),Kt=new Xe(new Cn(.032,.004,.004),fn);Kt.position.set(-.032,.028,Qe*.92),Mt.add(Kt);let ii=new Xe(new Cn(.032,.004,.004),fn);ii.position.set(.032,.028,Qe*.92),Mt.add(ii);let di=new vn({color:2957087}),En=new Xe(new Cn(.045,.012,.008),di);En.position.set(0,-.028,Qe*.92),Mt.add(En);let yn=new Vn({color:X,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+he()))});yn.bumpMap=W,yn.bumpScale=.15;let fi=K=>{let fe=Qe*.32,me=Qe*.22,se=new Xe(new Ci(me*.9,fe,5),yn);se.position.set(-Qe*.25,Qe*.22,Qe*.72),se.rotation.x=.35,se.rotation.z=.12,se.castShadow=!0,K.add(se);let ce=new Xe(new Ci(me,fe,5),yn);ce.position.set(Qe*.28,Qe*.18,Qe*.68),ce.rotation.x=.28,ce.rotation.z=-.1,ce.castShadow=!0,K.add(ce);let pe=new Xe(new Ci(me*.7,fe*.9,5),yn);pe.position.set(0,Qe*.28,Qe*.78),pe.rotation.x=.4,pe.castShadow=!0,K.add(pe)};if(Z==="female"){let K=new Xe(new Di(Qe*.92,12,10,0,Math.PI*2,0,Math.PI*.52),yn);K.position.set(0,Qe*.28,-Qe*.18),K.rotation.y=.06,K.rotation.x=-.04,K.castShadow=!0,Mt.add(K);let fe=new Xe(new Cn(Qe*1.15,Qe*2.2,Qe*.55),yn);fe.position.set(0,-Qe*.6,-Qe*.95),fe.rotation.z=.03,fe.castShadow=!0,Mt.add(fe),fi(Mt)}else{let K=new Xe(new Di(Qe*.9,12,10,0,Math.PI*2,0,Math.PI*.5),yn);K.position.set(0,Qe*.4,-Qe*.12),K.rotation.y=.08,K.rotation.x=-.05,K.rotation.z=.04,K.castShadow=!0,Mt.add(K);let fe=new Xe(new Di(Qe*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),yn);fe.position.set(0,Qe*.1,-Qe*.05),fe.rotation.y=.1,fe.castShadow=!0,Mt.add(fe),fi(Mt)}return He.userData.leftLeg=bn,He.userData.rightLeg=Fn,He.userData.leftArm=Wt,He.userData.rightArm=Ut,He}function cn(x,p){let E=x.userData;if(!E.leftLeg)return;let C=p*Math.PI*2,k=.35,D=.28;E.leftLeg.rotation.x=Math.sin(C)*k,E.rightLeg.rotation.x=Math.sin(C+Math.PI)*k,E.leftArm.rotation.y=Math.sin(C+Math.PI)*D,E.rightArm.rotation.y=Math.sin(C)*D}function We(x){let p=x.userData;p.leftLeg&&(p.leftLeg.rotation.x=0,p.rightLeg.rotation.x=0,p.leftArm.rotation.y=0,p.rightArm.rotation.y=0)}function nt(x){let p=j(x.player,x.class,x.hairColor);p.position.copy(Te(x.x,x.y)),p.castShadow=!0,p.userData.unitId=x.id;let E=.28,C=.28,k=.12,D=.18,Z=.04,z=new qi(D,Z),O=new vn({color:6037528,side:_n,depthTest:!0,depthWrite:!1}),X=new Xe(z,O);X.position.set(0,E+C/2,k/2+.02),X.rotation.x=-Math.PI/2,X.rotation.z=Math.PI/4,X.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0,p.add(X),p.userData.slashMark=X,n.add(p),le.set(x.id,p),_t(p,x.maxHp>0&&x.hp/x.maxHp<.35)}function Ne(x){let p=le.get(x.id);!p||!p.userData.slashMark||(p.userData.slashMark.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0)}let rn=.35;function _t(x,p){if(x)if(p){x.rotation.x=.35,x.scale.setScalar(.96);let E=x.userData;E&&E.leftArm&&E.rightArm&&(E.leftArm.rotation.y=.2,E.rightArm.rotation.y=.2),x.traverse(C=>{C.isMesh&&C.material&&C.material.color&&(C.userData.originalColor||(C.userData.originalColor=C.material.color.clone()),C.material.color.copy(C.userData.originalColor).multiplyScalar(.82))})}else{x.rotation.x=0,x.scale.setScalar(1);let E=x.userData;E&&E.leftArm&&E.rightArm&&(E.leftArm.rotation.y=0,E.rightArm.rotation.y=0),x.traverse(C=>{C.isMesh&&C.material&&C.userData.originalColor&&C.material.color.copy(C.userData.originalColor)})}}function R(x){if(x.level>=3)return;let p=x.maxHp>0?x.hp/x.maxHp:1;x.level+=1;let E=k=>Math.max(1,Math.ceil(k*1.1)),C=k=>Math.max(1,Math.ceil(k*1.1));x.maxHp=E(x.maxHp),x.maxMp=E(x.maxMp),x.hp=Math.max(1,Math.min(x.maxHp,Math.ceil(p*x.maxHp))),x.mp=Math.max(1,Math.min(x.maxMp,Math.ceil(p*x.maxMp))),x.str=C(x.str),x.agi=C(x.agi),x.vit=C(x.vit),x.dex=C(x.dex),x.luk=C(x.luk),x.int=C(x.int),x.range>2&&(x.range=C(x.range)),console.log("[LEVEL UP]",`${x.name} (${x.class}, P${x.player})`,`\u2192 Lv.${x.level}`,`| HP ${x.hp}/${x.maxHp} MP ${x.mp}/${x.maxMp} STR ${x.str} VIT ${x.vit}`),S(x)}function S(x){let p=le.get(x.id),E=x.level===3?"levelup level3":x.level===2?"levelup level2":"levelup";if(Nd(x,E),!p)return;let C=performance.now(),k=0;function D(Z){k++,k%2===0&&Ue();let z=Z-C,O=Math.min(1,z/vt),X=O<.5?1+.35*(O/.5):1+.35*(1-(O-.5)/.5);p.scale.setScalar(X),O<1?requestAnimationFrame(D):p.scale.setScalar(1)}requestAnimationFrame(D)}function te(x,p){let E=le.get(x.id);if(!E){p&&p();return}let C=performance.now(),k=0;function D(Z){k++,k%2===0&&Ue();let z=Z-C,O=Math.min(1,z/vt),X=O<.5?1+.35*(O/.5):1+.35*(1-(O-.5)/.5);E.scale.setScalar(X),O<1?requestAnimationFrame(D):(E.scale.setScalar(1),p&&p())}requestAnimationFrame(D)}let be=400,ve=280,Se=.45,Ve=160,De=280,ke=350,it=500,vt=600,ye=!1,Ht=new B,St=new B,at=new B,Ye=new B;function Be(x=!1){m=!0;let p=null;if(gt==="playing"&&Oe.length>0){let Z=Oe[ct];p=H.find(z=>z.id===Z&&z.hp>0)}if(p||(p=H.find(Z=>Z.player===ot&&Z.hp>0)),!p)return;let E=a.position.distanceTo(h);if(E<.1&&(E=o),f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),at.copy(Te(p.x,p.y)),Ye.copy(at).add(f.clone().multiplyScalar(E)),x||ye){h.copy(at),a.position.copy(Ye),a.lookAt(h),Ue();return}ye=!0,Ht.copy(h),St.copy(a.position);let C=performance.now(),k=0;On.shadowMap.enabled=!1;function D(Z){k++,k%2===0&&Ue();let z=Math.min(1,(Z-C)/be),O=z*(2-z);h.lerpVectors(Ht,at,O),a.position.lerpVectors(St,Ye,O),a.lookAt(h),z<1?requestAnimationFrame(D):(On.shadowMap.enabled=!0,ye=!1)}requestAnimationFrame(D)}let st=0,ot=1,gt="draft",Ze="pvp",we=1,F=0,Ae=null;async function Pe(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{Ae=await navigator.wakeLock.request("screen"),Ae.addEventListener("release",()=>{Ae=null})}catch{Ae=null}}function lt(){Ae&&(Ae.release().catch(()=>{}),Ae=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Ze==="cvcpu"&&gt==="playing"&&Pe()});let Je="balanced",Ot=new Set($i),kt=0,Ft=null,gn=new Set,Oe=[],ct=0,zt=null,hn=new Map,sa=null;function Os(x){if(!x||x.hp<=0)return;sa=x.id;let p=document.getElementById("unit-preview-card"),E=document.getElementById("unit-preview-image"),C=document.getElementById("unit-preview-name"),k=document.getElementById("unit-preview-meta"),D=document.getElementById("unit-preview-stats");p.classList.remove("player-1","player-2"),p.classList.add(x.player===1?"player-1":"player-2"),p.classList.toggle("level-2",x.level>=2&&x.level<3),p.classList.toggle("level-3",x.level>=3),E.src=ia[x.class]||"",E.alt=x.name,C.textContent=x.name,k.textContent=`Lv.${x.level} ${x.class} \u2014 Player ${x.player}`,D.innerHTML=[["HP",`${x.hp}/${x.maxHp}`],["MP",`${x.mp}/${x.maxMp}`],["STR",xe(x,"str")],["AGI",xe(x,"agi")],["VIT",xe(x,"vit")],["DEX",xe(x,"dex")],["LUK",xe(x,"luk")],["INT",xe(x,"int")]].map(([z,O])=>`<span class="stat-label">${z}</span><span class="stat-val${z==="HP"?" stat-val-hp":""}">${O}</span>`).join("");let Z=x.maxHp>0&&x.hp/x.maxHp<.3;p.classList.toggle("low-hp",Z),p.style.display="block"}function Ki(){sa=null;let x=document.getElementById("unit-preview-card");x.classList.remove("low-hp","level-2","level-3"),x.style.display="none"}let Vt=!1,jn=!1,vi=!1,Ln=null,en=!1,Dn=!1,T=!1,V=[],$=new xi;n.add($);let Q=[],J=!0,Ie=0,Ge=0;function Ue(){J=!0,Ie=performance.now()}let tt=new xi;n.add(tt);let xt=[],ft=bt,yt=.02,un=3368703,qn=13382451;function Sn(x,p){let E=x/2,C=E-p,k=new _r;k.moveTo(-E,-E),k.lineTo(E,-E),k.lineTo(E,E),k.lineTo(-E,E),k.lineTo(-E,-E);let D=new yr;return D.moveTo(-C,-C),D.lineTo(C,-C),D.lineTo(C,C),D.lineTo(-C,C),D.lineTo(-C,-C),k.holes.push(D),new ea(k)}let Mi=Sn(ft,yt);function It(x=null){let p=H.filter(E=>E.hp>0&&E.id!==x).map(E=>`${E.id},${E.x},${E.y},${E.player}`).sort().join("|");if(!(It._lastSig===p&&It._lastExclude===x)){for(It._lastSig=p,It._lastExclude=x,xt.forEach(E=>E.dispose()),xt.length=0;tt.children.length;){let E=tt.children[0];tt.remove(E)}H.filter(E=>E.hp>0&&E.id!==x).forEach(E=>{let C=E.x,k=E.y,Z=(Jn+e.height[k][C]*.35)/2+Jn/2,z=C*bt-ue+bt/2,O=k*bt-Ce+bt/2,X=Z+.02,he=E.player===1?un:qn,Ee=new vn({color:he,side:_n}),ne=new Xe(Mi,Ee);ne.rotation.x=-Math.PI/2,ne.position.set(z,X,O),tt.add(ne),xt.push(Ee)}),Ue()}}let Et=1.15,ys={1:8102901,2:15628943},Ct=(()=>{let x=new vn({color:ys[1]}),p=new Xe(new Ci(.1,.25,8),x);return p.rotation.x=Math.PI,p.visible=!1,n.add(p),p})();function bi(){if(gt!=="playing"||Oe.length===0||T){Ct.visible=!1,Ct.removeFromParent(),n.add(Ct);return}let x=Oe[ct],p=H.find(C=>C.id===x);if(!p||p.hp<=0){Ct.visible=!1,Ct.removeFromParent(),n.add(Ct);return}let E=le.get(x);if(!E){Ct.visible=!1;return}Ct.removeFromParent(),E.add(Ct),Ct.position.set(0,Et,0),Ct.material&&Ct.material.color.setHex(ys[p.player]??ys[1]),Ct.visible=!0}function To(x){let p=[[0,1],[0,-1],[1,0],[-1,0]],E=[];for(let[C,k]of p){let D=x.x+C,Z=x.y+k;!Er(e,D,Z)||H.some(O=>O.id!==x.id&&O.x===D&&O.y===Z&&O.hp>0)||E.push(Math.atan2(C,k))}return E}function Zi(x){if(V.length===0)return x;if(V.length===1)return V[0];let p=V[0],E=Math.abs(Fs(x-p));for(let C=1;C<V.length;C++){let k=Math.abs(Fs(x-V[C]));k<E&&(E=k,p=V[C])}return p}function Fs(x){for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;return x}let Un=1.2,Nn=(()=>{let x=new Xe(new Ci(.12,.35,8),new vn({color:4500223}));return x.rotation.x=-Math.PI/2,x.visible=!1,n.add(x),x})();function Tr(x,p){if(!T||Oe.length===0||V.length===0)return;let E=Oe[ct],C=H.find(Ee=>Ee.id===E),k=le.get(E);if(!C||!k)return;ca(x,p),ji.setFromCamera(Qi,a);let D=ji.intersectObjects(ee.children,!0);if(D.length===0)return;let Z=null;for(let Ee of D){let ne=Ee.object;for(;ne&&(ne.userData.gx==null||ne.userData.gy==null);)ne=ne.parent;if(ne&&ne.userData.gx!=null){Z=Ee.point;break}}if(!Z)return;let z=Te(C.x,C.y),O=Z.x-z.x,X=Z.z-z.z;if(O*O+X*X<1e-6)return;let he=Math.atan2(O,X);k.rotation.y=Zi(he)}function Qn(){if(Oe.length===0)return;let x=Oe[ct],p=H.find(k=>k.id===x),E=le.get(x);if(!p||!E)return;V=[[0,1],[0,-1],[1,0],[-1,0]].map(([k,D])=>Math.atan2(k,D)),Nn.removeFromParent(),E.add(Nn),Nn.position.set(0,Un,0),Nn.rotation.x=-Math.PI/2,Nn.rotation.y=0,Nn.rotation.z=Math.PI,Nn.visible=!0,E.rotation.y=V[0]}function wr(){Nn.visible=!1,Nn.removeFromParent(),n.add(Nn)}let Bs=[];(function(){let p=Yi,E=[1];for(let C=0;C<Math.floor((p-1)/2);C++)E.push(2,2,1,1);p%2===1?E.push(2):(E.push(2,2),E.push(1)),Bs=E})();function ei(){return Bs[kt]}function wc(){let x=ei(),p=0;for(let E=0;E<kt;E++)Bs[E]===x&&p++;return p+1}function wo(){let x=Yi,p=[1];for(let E=0;E<Math.floor((x-1)/2);E++)p.push(2,2,1,1);x%2===1?p.push(2):(p.push(2,2),p.push(1)),Bs=p,gt="draft",kt=0,Ot=new Set($i),Ft=null,gn.clear(),xn(),Ao(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function Ac(){return H.filter(x=>x.hp>0).sort((x,p)=>{let E=xe(x,"agi"),C=xe(p,"agi");if(C!==E)return C-E;let k=xe(x,"dex");return xe(p,"dex")-k}).map(x=>x.id)}function pd(){document.getElementById("draft-panel").style.display="none";let x=document.getElementById("draft-placement-card");x&&(x.style.display="none",x.innerHTML=""),xn();let p=document.getElementById("battle-start-overlay");p&&(p.classList.add("visible"),p.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let E=document.getElementById("draft-placement-card");for(E&&(E.style.display="none",E.innerHTML=""),gt="playing",st=0,Oe=Ac(),ct=0;ct<Oe.length&&H.find(D=>D.id===Oe[ct]).hp<=0;)ct++;ct>=Oe.length&&(ct=0);let C=H.find(D=>D.id===Oe[ct]);ot=C?C.player:1,en=!1,Dn=!1,zt=Oe[ct],setTimeout(()=>{p&&(p.classList.remove("visible"),p.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",It(),Xt(),bi(),Be(!0),Ze==="cvcpu"&&Pe()},4e3)}function Ao(){let x=document.getElementById("draft-panel"),p=document.getElementById("draft-title"),E=document.getElementById("draft-classes"),C=document.getElementById("draft-message"),k=document.getElementById("turn-player"),D=document.getElementById("draft-placement-card");if(Ft){x.style.display="none",k.textContent=`Draft: Player ${ei()} \u2014 place ${qt[Ft].name}`;let z=ei();D.style.display="flex",D.classList.remove("player-1","player-2"),D.classList.add("player-"+z),D.style.left=z===1?"24px":"",D.style.right=z===2?"24px":"";let O=[...H.filter(Ee=>Ee.player===z).map(Ee=>Ee.class),Ft],X=(Ee,ne)=>{let oe=qt[Ee];return`
        <div class="draft-class-card${ne?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${ia[Ee]||""}" alt="${oe.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
      `},he=3;if(O.length>he){D.classList.add("draft-placement-cols");let Ee=[];for(let oe=0;oe<O.length;oe+=he)Ee.push(O.slice(oe,oe+he));let ne=O.length-1;D.innerHTML=Ee.map((oe,_e)=>{let qe=_e===Ee.length-1,He=oe.map((rt,Lt)=>{let bn=_e*he+Lt===ne;return X(rt,bn)}).join("");return`<div class="draft-placement-col${qe?" draft-placement-col-current":""}">${He}</div>`}).join("")}else D.classList.remove("draft-placement-cols"),D.innerHTML=O.map((Ee,ne)=>{let oe=ne===O.length-1;return X(Ee,oe)}).join("");Ze==="pvcpu"&&ei()===2&&setTimeout(Rr,500),Ze==="cvcpu"&&setTimeout(Rr,500);return}D.style.display="none",D.innerHTML="",gt==="draft"&&(x.style.display="flex");let Z=ei();p.textContent=`Player ${Z}: Pick a class (${wc()}/${Yi})`,C.textContent="",E.innerHTML="",k.textContent=`Draft: Player ${Z} \u2014 pick a class`,gy([...$i]).forEach(z=>{let O=Ot.has(z),X=qt[z],he=document.createElement("button");he.type="button",he.className="draft-class-card"+(O?"":" draft-class-card-selected"),he.disabled=!O,he.innerHTML=`
          <img class="draft-class-card-image" src="${ia[z]||""}" alt="${X.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
        `,O&&he.addEventListener("click",()=>Rc(z)),E.appendChild(he)}),Ze==="pvcpu"&&ei()===2&&setTimeout(Rr,500),Ze==="cvcpu"&&setTimeout(Rr,500)}function Rc(x){if(!Ot.has(x)||Ft)return;Ft=x;let p=ei(),E=new Set(H.map(D=>D.y*e.w+D.x)),C=_y(e,p,E),k=cd(e,C);gn=new Set(k.map(D=>D.gy*e.w+D.gx)),wd(k),Ao()}function Cc(x,p){if(!Ft)return;let E=ei(),C=p*e.w+x;if(!gn.has(C))return;let k=qt[Ft],D={id:de++,player:E,x,y:p,level:1,name:k.name,class:Ft,hairColor:(bo[Ft]||bo.knight).hair,hp:k.hp,maxHp:k.maxHp,mp:k.mp,maxMp:k.maxMp,str:k.str,agi:k.agi,vit:k.vit,dex:k.dex,luk:k.luk,int:k.int,range:k.range};H.push(D),nt(D);let Z=le.get(D.id);Z&&(Z.rotation.y=D.player===1?Math.PI:0),Ot.delete(Ft),Ft=null,gn.clear(),xn();let z=document.getElementById("draft-placement-card");if(z&&(z.style.display="none",z.innerHTML=""),kt++,kt>=2*Yi){pd();return}let O=ei(),X=wc(),he=document.getElementById("draft-panel"),Ee=document.getElementById("draft-title"),ne=document.getElementById("draft-message"),oe=document.getElementById("draft-classes"),_e=document.getElementById("turn-player");he&&Ee&&oe&&_e&&(he.style.display="flex",Ee.textContent=`Player ${O}: Pick a class (${X}/${Yi})`,ne&&(ne.textContent="Get ready\u2026"),oe.innerHTML="",_e.textContent=`Draft: Player ${O} \u2014 pick a class`),setTimeout(Ao,1500)}function Xt(){Xt._pending||(Xt._pending=!0,requestAnimationFrame(()=>{Xt._pending=!1,md()}))}function md(){let x=Xt._cache||(Xt._cache={}),p=x.turnEl||(x.turnEl=document.getElementById("turn-player")),E=x.menuLabel||(x.menuLabel=document.getElementById("menu-label")),C=x.turnMenu||(x.turnMenu=document.getElementById("turn-menu")),k=x.unitInfo||(x.unitInfo=document.getElementById("unit-info")),D=x.unitNameEl||(x.unitNameEl=document.getElementById("unit-name")),Z=x.unitLevelClassEl||(x.unitLevelClassEl=document.getElementById("unit-level-class")),z=x.unitStatsEl||(x.unitStatsEl=document.getElementById("unit-stats")),O=x.unitClassImageEl||(x.unitClassImageEl=document.getElementById("unit-class-image"));if(gt==="playing"&&H.forEach(ne=>{if(ne.hp<=0)return;let oe=le.get(ne.id);oe&&_t(oe,ne.maxHp>0&&ne.hp/ne.maxHp<rn)}),C.classList.remove("player-1","player-2"),C.classList.add(ot===1?"player-1":"player-2"),C.classList.toggle("level-2",!1),C.classList.toggle("level-3",!1),gt==="playing"&&Oe.length>0){let ne=Oe[ct];H.find(_e=>_e.id===ne&&_e.hp>0)&&(zt==null||!H.find(_e=>_e.id===zt&&_e.hp>0))&&(zt=ne)}if(zt!=null){let ne=H.find(oe=>oe.id===zt);if(ne&&ne.hp>0){k.classList.remove("no-unit");let oe=ne.maxHp>0&&ne.hp/ne.maxHp<.25;C.classList.toggle("low-hp",oe),C.classList.toggle("level-2",ne.level>=2&&ne.level<3),C.classList.toggle("level-3",ne.level>=3),D.textContent=ne.name,Z.textContent=`Lv.${ne.level} ${ne.class}`,O.src=ia[ne.class]||"",O.alt=ne.name,z.innerHTML=[["HP",`${ne.hp}/${ne.maxHp}`],["MP",`${ne.mp}/${ne.maxMp}`],["STR",xe(ne,"str")],["AGI",xe(ne,"agi")],["VIT",xe(ne,"vit")],["DEX",xe(ne,"dex")],["LUK",xe(ne,"luk")],["INT",xe(ne,"int")]].map(([_e,qe])=>`<span>${_e}</span><span class="stat-val${_e==="HP"?" stat-val-hp":""}">${qe}</span>`).join("")}else C.classList.remove("low-hp","level-2","level-3"),k.classList.add("no-unit"),D.textContent="\u2014 Select a unit \u2014",Z.textContent="",z.textContent="",O.src="",O.alt=""}else C.classList.remove("low-hp","level-2","level-3"),k.classList.add("no-unit"),D.textContent="\u2014 Select a unit \u2014",Z.textContent="",z.textContent="",O.src="",O.alt="";if(zt!=null)p.textContent=`Player ${ot} \u2014 Unit ${D.innerHTML} active`;else{let ne=Oe.length?H.find(oe=>oe.id===Oe[ct]):null;p.textContent=ne?`${ne.name} (Player ${ot})`:`Player ${ot}`}E.textContent=`Player ${ot}`;let X=x.btnAttack||(x.btnAttack=document.getElementById("btn-attack")),he=x.btnSkill||(x.btnSkill=document.getElementById("btn-skill")),Ee=x.btnEnd||(x.btnEnd=document.getElementById("btn-end"));if(Ze==="cvcpu"&&gt==="playing")X.disabled=!0,he.disabled=!0,Ee&&(Ee.disabled=!0),p.textContent=`Player ${ot} (CPU)`;else if(T)X.disabled=!0,he.disabled=!0,p.textContent="Click on map to choose facing direction";else if(gt==="playing"){X.disabled=Dn;let ne=Oe.length?Oe[ct]:null,oe=ne?H.find(He=>He.id===ne&&He.hp>0):null,_e=Ze!=="cvcpu"&&(Ze!=="pvcpu"||ot===1),qe=_e&&oe&&!Dn?Lo(oe):[];he.disabled=Dn||!_e||qe.length===0,Ee&&(Ee.disabled=!1)}if(gt==="playing"){let ne=Math.min(st+1,gs);p.textContent=(p.textContent||"")+` \u2014 Turn ${ne}/${gs}`;let oe=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left")),_e=x.turnsLeftValueEl||(x.turnsLeftValueEl=document.getElementById("turns-left-value"));if(oe&&_e){oe.style.display="";let qe=Math.max(0,gs-st);_e.textContent=String(qe),oe.classList.toggle("turns-left-low",qe<=10)}}else{let ne=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left"));ne&&(ne.style.display="none")}gt==="playing"&&Io(ot)&&!Vt&&setTimeout(Mn,700)}function an(){Ue(),Ki(),jn=!1,vi=!1,Ln=null,T=!1,V=[],wr(),xn();let x=Oe.length;if(x===0)return;let p=Oe[ct],E=H.find(z=>z.id===p);if(E&&E.tempDebuff&&E.tempDebuff.duration--,E&&E.tempDebuff&&E.tempDebuff.duration<=0&&(E.tempDebuff=void 0),E&&E.tempBuff&&E.tempBuff.duration--,E&&E.tempBuff&&E.tempBuff.duration<=0&&(E.tempBuff=void 0),E&&E.hp>0){let z=Math.ceil(xe(E,"int")*.15);E.mp=Math.min(E.maxMp,E.mp+z)}if(E&&E.hp>0){let z=E.x,O=E.y;e.type[O][z]===$e.CENTER&&E.level===1&&R(E);let X=E.player===1?$e.BASE_TOP:$e.BASE_BOTTOM;e.type[O][z]===X&&E.level===2&&R(E)}if(st++,st>=gs){Od();return}let C=(ct+1)%x,k=0;for(;k<x;){let z=Oe[C],O=H.find(X=>X.id===z);if(O&&O.hp>0)break;C=(C+1)%x,k++}let D=C===0;ct=C;for(let z=0;z<x;z++){let O=Oe[ct],X=H.find(Ee=>Ee.id===O);if(!X||X.hp<=0)break;let he=X.tempDebuff&&X.tempDebuff.poison!=null?X.tempDebuff.poison:0;if(he<=0)break;if(console.log("tempDebuff damage",{debuffKey:"poison",damage:he}),X.hp=Math.max(0,X.hp-he),ni(X.x,X.y,String(he),!1,"poison"),Ne(X),X.hp<=0){Rn(X),C=(ct+1)%x;let Ee=0;for(;Ee<x;){let ne=Oe[C],oe=H.find(_e=>_e.id===ne);if(oe&&oe.hp>0)break;C=(C+1)%x,Ee++}ct=C;continue}break}let Z=H.find(z=>z.id===Oe[ct]);ot=Z?Z.player:1,en=!1,Dn=!1,zt=Oe[ct],D&&(Oe=Ac(),ct=0),Xt(),bi(),Be()}document.getElementById("btn-attack").addEventListener("click",()=>{if(Vt||Dn||gt!=="playing"||Oe.length===0)return;Ki();let x=Oe[ct],p=H.find(k=>k.id===x);if(!p||p.hp<=0)return;let E=p.range!=null?p.range:1;zt=x,jn=!0;let C=hd(e,p.x,p.y,E);hn=new Map,C.forEach((k,D)=>{let Z=D%e.w,z=Math.floor(D/e.w);Ns(e,p.x,p.y,Z,z)&&hn.set(D,k)}),Ad(hn),Xt()}),document.getElementById("btn-skill").addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),Vt||Dn)return;let p=Oe[ct],E=p?H.find(z=>z.id===p&&z.hp>0):null;if(!E||E.player!==ot)return;let C=document.getElementById("skill-list-overlay"),k=document.getElementById("btn-skill");if(!k)return;if(C&&C.style.display==="block"){C.style.display="none";return}let D=Lo(E),Z=k.getBoundingClientRect();C||(C=document.createElement("div"),C.id="skill-list-overlay",C.className="skill-list-overlay",C.setAttribute("aria-hidden","true"),document.body.appendChild(C)),C.style.left=`${Z.left}px`,C.style.top=`${Z.top-4}px`,C.style.transform="translateY(-100%)",C.style.right="auto",C.style.bottom="auto",C.style.display="none",D.length===0?C.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(C.innerHTML=D.map((z,O)=>`<button type="button" class="skill-option" data-skill-index="${O}" ${z.disabled?"disabled":""}>
          <span class="skill-name">${z.name}</span> <span class="skill-meta">${z.cost} MP \xB7 Lv.${z.level}</span><br/>
          <span class="skill-meta">${z.description}</span>
        </button>`).join(""),C.querySelectorAll(".skill-option").forEach((z,O)=>{z.addEventListener("click",X=>{X.preventDefault(),X.stopPropagation();let he=D[O];if(Ln=he,C.style.display="none",C.setAttribute("aria-hidden","true"),he.target==="self"){if(E.mp<he.cost)return;E.mp-=he.cost,Dn=!0,la(E,E,he,{showFloatingCombatText:ni,handleUnitDeath:Rn,updateUnitSlashVisibility:Ne,updateTurnUI:Xt},()=>{xn(),vi=!1,Ln=null,zs=new Set,en?an():Xt()}),Xt();return}if(he.target==="ally"&&Cr(E,he,H).filter(oe=>oe.targetUnit&&oe.targetUnit.id!==E.id).length===0&&E.mp>=he.cost){E.mp-=he.cost,Dn=!0,la(E,E,he,{showFloatingCombatText:ni,handleUnitDeath:Rn,updateUnitSlashVisibility:Ne,updateTurnUI:Xt},()=>{xn(),vi=!1,Ln=null,zs=new Set,en?an():Xt()}),Xt();return}vi=!0,jn=!1,Td(E,he),Xt()})})),requestAnimationFrame(()=>{C.style.display="block",C.style.visibility="visible",C.setAttribute("aria-hidden","false")})}),document.addEventListener("click",x=>{let p=document.getElementById("skill-list-overlay"),E=document.getElementById("btn-skill"),C=document.querySelector(".skill-wrap");!p||p.style.display!=="block"||C&&C.contains(x.target)||p.contains(x.target)||(p.style.display="none",p.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(Vt||T||gt!=="playing"||Oe.length===0)return;let x=Oe[ct],p=H.find(C=>C.id===x);if(!p||p.hp<=0)return;T=!0,zt=null,jn=!1,hn=new Map,xn(),Qn(),bi();let E=document.getElementById("turn-player");E.textContent="Click on map to choose facing direction",Xt()}),h.set(0,8,0),a.position.copy(h).add(c),a.lookAt(h);let ra=document.getElementById("mode-select-overlay"),Pc=document.getElementById("mode-carousel-track"),Ic=document.getElementById("mode-carousel-prev"),Lc=document.getElementById("mode-carousel-next"),aa=document.getElementById("mode-carousel-dots"),Ni=document.getElementById("mode-play-btn"),Dc=document.getElementById("mode-settings-pvp"),Uc=document.getElementById("mode-settings-pvp-map"),Nc=document.getElementById("mode-settings-pvp-none"),Oc=document.getElementById("mode-settings-options"),Fc=document.getElementById("pvp-map-mode"),Ar=document.getElementById("ai-draft-preference"),gd=document.getElementById("cvcpu-num-games"),Bc=document.getElementById("cvcpu-grid-w"),kc=document.getElementById("cvcpu-grid-h"),Hc=document.getElementById("cvcpu-center-plaza"),ks=document.getElementById("move-speed"),Hs=document.getElementById("draft-picks-per-player"),zc=["pvp","pvcpu","cvcpu","story"],Ro=3,ti=0;function Co(){return ti===Ro}function oa(x){ti=Math.max(0,Math.min(x,Ro)),Pc&&(Pc.style.transform=`translateX(-${ti*100}%)`),aa&&aa.querySelectorAll(".mode-dot").forEach((E,C)=>{E.classList.toggle("active",C===ti),E.setAttribute("aria-selected",C===ti)}),Dc&&(Dc.style.display=ti===0||ti===1||Co()?"":"none"),Uc&&(Uc.style.display=ti===0||ti===1?"":"none"),Nc&&(Nc.style.display=Co()?"":"none"),Oc&&(Oc.style.display=Sr&&ti===2?"":"none");let p=Ni?.querySelector(".mode-play-text");Ni&&p&&(Co()?(Ni.disabled=!0,p.textContent="Coming Soon"):(Ni.disabled=!1,p.textContent="Play game"))}if(aa)for(let x=0;x<=Ro;x++){let p=document.createElement("button");p.type="button",p.className="mode-dot"+(x===0?" active":""),p.setAttribute("role","tab"),p.setAttribute("aria-label",`Mode ${x+1}`),p.setAttribute("aria-selected",x===0),p.addEventListener("click",()=>oa(x)),aa.appendChild(p)}if(Ic&&Ic.addEventListener("click",()=>oa(ti-1)),Lc&&Lc.addEventListener("click",()=>oa(ti+1)),ra&&!Sr){let x=ra.querySelector('.mode-slide[data-mode="cvcpu"]');x&&(x.style.display="none")}oa(0),ks&&(ks.value=String(Us),ks.addEventListener("input",()=>{let x=parseInt(ks.value,10);!Number.isNaN(x)&&x>=0&&(Us=x)}),ks.addEventListener("change",()=>{let x=parseInt(ks.value,10);!Number.isNaN(x)&&x>=0&&(Us=x)})),Hs&&(Hs.value=String(Yi),Hs.addEventListener("input",()=>{let x=parseInt(Hs.value,10);!Number.isNaN(x)&&x>=1&&(Yi=x)}),Hs.addEventListener("change",()=>{let x=parseInt(Hs.value,10);!Number.isNaN(x)&&x>=1&&(Yi=x)})),Ar&&(fy.forEach(x=>{let p=document.createElement("option");p.value=x.value,p.textContent=x.label,Ar.appendChild(p)}),Ar.value=Je,Ar.addEventListener("change",()=>{Je=Ar.value}));let Ji=new Audio;Ji.loop=!0,Ji.volume=.3,Ji.preload="auto";let Po=window.location.href.replace(/[^/]*$/,""),Vc=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:Po+(Po.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Ji.src=Vc,Ji.addEventListener("error",()=>{let x=Po+"assets/music/tavern.mp3";x!==Vc&&(Ji.src=x)});function xd(){Ji.paused&&Ji.play().catch(()=>{})}function yd(){if(zc[ti]==="story")return;let x=zc[ti];if(xd(),Ze=x,x==="pvp"||x==="pvcpu"){let p=Fc&&Fc.value||"long";ze(p)}else x==="cvcpu"&&(Sr&&Bc&&kc&&Hc&&(Mc=Math.max(5,Math.min(50,parseInt(Bc.value,10)||21)),bc=Math.max(5,Math.min(50,parseInt(kc.value,10)||11)),Sc=Math.max(.1,Math.min(.9,parseFloat(Hc.value)||.29))),ze("long"));x==="cvcpu"&&(we=Math.max(1,parseInt(gd?.value,10)||1),F=0),ra&&ra.classList.add("hidden"),wo()}Ni?Ni.addEventListener("click",x=>{if(Ni.disabled)return;let p=Ni.querySelector(".mode-play-ripple");if(p){let E=Ni.getBoundingClientRect();p.style.left=x.clientX-E.left+"px",p.style.top=x.clientY-E.top+"px",p.style.width=p.style.height="20px",p.style.marginLeft=p.style.marginTop="-10px",p.classList.remove("ripple"),p.offsetHeight,p.classList.add("ripple"),setTimeout(()=>p.classList.remove("ripple"),500)}yd()}):wo();function Io(x){return Ze==="pvcpu"&&x===2||Ze==="cvcpu"}function _d(){let x=$i.filter(ne=>Ot.has(ne));if(x.length===0)return null;let p=Je||"balanced";if(p==="random")return x[Math.floor(Math.random()*x.length)];if(p==="custom")return py.filter(oe=>Ot.has(oe))[0]??x[0]??null;let E=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function C(ne){let oe=qt[ne];if(!oe)return 1/0;let _e=E.map(He=>oe[He]??0),qe=_e.reduce((He,rt)=>He+rt,0)/_e.length;return _e.reduce((He,rt)=>He+(rt-qe)**2,0)/_e.length}if(p==="tanky")return[...x].sort((oe,_e)=>{let qe=qt[oe]?.hp??0,He=qt[_e]?.hp??0;return He!==qe?He-qe:(qt[_e]?.vit??0)-(qt[oe]?.vit??0)})[0]??null;if(p==="aggressive")return[...x].sort((oe,_e)=>{let qe=qt[oe]?.str??0,He=qt[_e]?.str??0;return He!==qe?He-qe:(qt[_e]?.agi??0)-(qt[oe]?.agi??0)})[0]??null;if(p==="scout")return[...x].sort((oe,_e)=>{let qe=qt[oe]?.agi??0,He=qt[_e]?.agi??0;return He!==qe?He-qe:(qt[_e]?.dex??0)-(qt[oe]?.dex??0)})[0]??null;if(p==="ranged")return[...x].sort((oe,_e)=>{let qe=qt[oe]?.range??0,He=qt[_e]?.range??0;return He!==qe?He-qe:(qt[_e]?.dex??0)-(qt[oe]?.dex??0)})[0]??null;if(p==="caster")return[...x].sort((oe,_e)=>{let qe=qt[oe]?.int??0,He=qt[_e]?.int??0;return He!==qe?He-qe:(qt[_e]?.mp??0)-(qt[oe]?.mp??0)})[0]??null;let k=ei(),Z=my(Yi),z=H.filter(ne=>ne.player===k).map(ne=>ne.class),O={};for(let ne of Object.keys(Mo))O[ne]=0;for(let ne of z)for(let oe of Object.keys(Mo))if(Mo[oe].includes(ne)){O[oe]++;break}let X=ne=>Math.max(0,(Z[ne]??0)-(O[ne]??0)),he=ne=>{for(let[oe,_e]of Object.entries(Mo))if(_e.includes(ne))return oe;return null};return[...x].sort((ne,oe)=>{let _e=he(ne),qe=he(oe),He=_e!=null?X(_e):0,rt=qe!=null?X(qe):0;if(rt!==He)return rt-He;let Lt=qt[ne]?.hp??0,Yt=qt[oe]?.hp??0;return Yt!==Lt?Yt-Lt:C(ne)-C(oe)})[0]??null}function Rr(){if(gt!=="draft"||!Io(ei()))return;if(!Ft){let E=_d();E&&Rc(E),setTimeout(Rr,500);return}let x=Array.from(gn).map(E=>({gx:E%e.w,gy:Math.floor(E/e.w)})),p=cd(e,x);if(p.length>0){let{gx:E,gy:C}=p[0];Cc(E,C)}}function Gc(){let x=[];for(let p=0;p<e.h;p++)for(let E=0;E<e.w;E++)e.type[p][E]===$e.CENTER&&x.push({gx:E,gy:p});return x}function vd(x){let p=[],E=x===1?$e.BASE_TOP:$e.BASE_BOTTOM;for(let C=0;C<e.h;C++)for(let k=0;k<e.w;k++)e.type[C][k]===E&&p.push({gx:k,gy:C});return p}function li(x,p,E,C){return Math.abs(x-E)+Math.abs(p-C)}function Md(x){let p=x.range!=null?x.range:1,E=[];for(let C of H){if(C.hp<=0||C.player===x.player)continue;let k=li(x.x,x.y,C.x,C.y);k<=p&&k>0&&Ns(e,x.x,x.y,C.x,C.y)&&E.push({target:C,dist:k})}return E}function bd(x,p,E){let C=E??H.filter(D=>D.hp>0&&D.player===x.player&&D.id!==x.id),k=p??H.filter(D=>D.hp>0&&D.player!==x.player);for(let D of C)for(let Z of k){let z=Z.range!=null?Z.range:1,O=li(Z.x,Z.y,D.x,D.y);if(O<=z&&O>0&&Ns(e,Z.x,Z.y,D.x,D.y))return!0}return!1}function jt(x,p,E,C){let k=x.x,D=x.y,Z=xs(e,x.x,x.y,p,E,H,x);if(!Z||Z.length<=1){C&&C();return}zt=null,xn(),Vt=!0,m=!0,It(x.id),Ue();let z=le.get(x.id),O=1;function X(){if(O>=Z.length){x.x=Z[Z.length-1].x,x.y=Z[Z.length-1].y,Vt=!1,We(z),It(),hn=new Map,en=!0,C&&C();return}let he=Z[O-1],Ee=Z[O],ne=Te(he.x,he.y).clone(),oe=Te(Ee.x,Ee.y).clone(),_e=oe.x-ne.x,qe=oe.z-ne.z;_e*_e+qe*qe>1e-6&&(z.rotation.y=Math.atan2(_e,qe));let He=performance.now(),rt=0;function Lt(Yt){rt++,rt%2===0&&Ue();let bn=Math.min(1,(Yt-He)/Us),tn=(Bt=>Bt*Bt*(3-2*Bt))(bn);if(z.position.lerpVectors(ne,oe,tn),cn(z,tn),m){let Bt=a.position.distanceTo(h),Gt=Bt<.1?o:Bt;f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),h.lerp(z.position,l),a.position.copy(h).add(f.clone().multiplyScalar(Gt)),a.lookAt(h)}bn<1?requestAnimationFrame(Lt):(O++,X())}requestAnimationFrame(Lt)}X()}function Wc(x,p){let E=xe(p,"agi")*.7+xe(p,"luk")*.3,k=Math.random()*Math.max(.001,E)<=xe(x,"dex"),D=0;if(k){let Gt=xe(x,"str")*.7+xe(x,"dex")*.2+xe(x,"int")*.1-(xe(p,"vit")*.3+xe(p,"luk")*.2);D=Math.max(1,Math.floor(Gt))}Dn=!0,zt=null,jn=!1,xn(),console.log("[ATTACK]",`${x.name} (${x.class}, P${x.player})`,"\u2192",`${p.name} (${p.class}, P${p.player})`,k?`${D} dmg`:"MISS",`| ${p.name} HP ${p.hp} \u2192 ${Math.max(0,p.hp-D)}/${p.maxHp}`);let Z=le.get(x.id);if(!Z||!Z.userData.rightArm){Vt=!0,k?(p.hp=Math.max(0,p.hp-D),ni(p.x,p.y,String(D),!1),Ne(p),p.hp<=0&&Rn(p,x)):ni(p.x,p.y,"MISS",!0),setTimeout(()=>{Vt=!1,en?an():Xt()},400);return}let z=Te(x.x,x.y).clone(),O=Te(p.x,p.y).clone(),X=z.clone().lerp(O,.35),he=O.x-z.x,Ee=O.z-z.z;if(he*he+Ee*Ee>1e-6&&(Z.rotation.y=Math.atan2(he,Ee)),(x.range!=null?x.range:1)>2){let fi=function(K){yn++,yn%2===0&&Ue();let fe=K-En,me=Math.min(1,fe/De);if(wt.position.lerpVectors(ii,di,me),$t){let se=Math.sin(me*Math.PI)*1.1;$t.rotation.y=-se}if(!Mt&&me>=1&&(Mt=!0,n.remove(wt),Gt.dispose(),Dt.dispose(),k?(p.hp=Math.max(0,p.hp-D),ni(p.x,p.y,String(D),!1),p.hp<=0&&(Kt=!0),le.get(p.id)?fn=K:Kt&&(Rn(p,x),Kt=!1),Ne(p)):ni(p.x,p.y,"MISS",!0)),fn!=null&&k){let se=le.get(p.id);if(se){let ce=Math.min(1,(K-fn)/Ve),pe=1-ce;es.copy(Ut).multiplyScalar(Qe*pe),se.position.copy(Wt).add(es),ce>=1&&(se.position.copy(Wt),fn=null,Kt&&(Rn(p,x),Kt=!1))}else fn=null,Kt&&(Rn(p,x),Kt=!1)}if(me<1)requestAnimationFrame(fi);else{$t&&($t.rotation.y=0);let se=fn==null;se&&Kt&&(Rn(p,x),Kt=!1),se?(On.shadowMap.enabled=!0,Vt=!1,setTimeout(en?()=>an():()=>Xt(),400)):requestAnimationFrame(fi)}},Gt=new ms(.035,.035,.4,6),Dt=new vn({color:16763972}),wt=new Xe(Gt,Dt);wt.position.copy(z),wt.position.y+=.6;let dn=O.clone().sub(z).normalize();wt.quaternion.setFromUnitVectors(new B(0,1,0),dn),n.add(wt),Vt=!0;let $t=Z.userData.rightArm,Wt=Te(p.x,p.y).clone(),Ut=O.clone().sub(z).normalize(),Qe=.4,Mt=!1,fn=null,Kt=!1,ii=wt.position.clone(),di=O.clone();di.y+=.6;let En=performance.now(),yn=0;On.shadowMap.enabled=!1,requestAnimationFrame(fi);return}let _e=!1,qe=performance.now(),He=Z.userData.rightArm,rt=null,Lt=!1,Yt=Te(p.x,p.y).clone(),bn=O.clone().sub(z).normalize(),Fn=.4,tn=0;function Bt(Gt){tn++,tn%2===0&&Ue();let Dt=Gt-qe,wt=Math.min(1,Dt/ve),dn=wt<=.4?wt/.4:1,$t=wt>.4?(wt-.4)/.6:0;wt<=.4?Z.position.lerpVectors(z,X,dn):Z.position.lerpVectors(X,z,$t);let Wt=wt<=.35?wt/.35:wt<=.7?(.7-wt)/.35:0;if(He.rotation.y=-Wt*1.1,!_e&&wt>=Se&&(_e=!0,k?(p.hp=Math.max(0,p.hp-D),ni(p.x,p.y,String(D),!1),p.hp<=0&&(Lt=!0),Ne(p),le.get(p.id)?rt=Gt:Lt&&(Rn(p,x),Lt=!1)):ni(p.x,p.y,"MISS",!0)),rt!=null&&k){let Ut=le.get(p.id);if(Ut){let Qe=Math.min(1,(Gt-rt)/Ve),Mt=1-Qe;es.copy(bn).multiplyScalar(Fn*Mt),Ut.position.copy(Yt).add(es),Qe>=1&&(Ut.position.copy(Yt),rt=null,Lt&&(Rn(p,x),Lt=!1))}else rt=null,Lt&&(Rn(p,x),Lt=!1)}if(wt<1)requestAnimationFrame(Bt);else{Z.position.copy(z),He.rotation.y=0;let Ut=rt==null;Ut&&Lt&&(Rn(p,x),Lt=!1),Ut?(On.shadowMap.enabled=!0,Vt=!1,setTimeout(en?()=>an():()=>Xt(),400)):requestAnimationFrame(Bt)}}Vt=!0,On.shadowMap.enabled=!1,requestAnimationFrame(Bt)}function Sd(x,p){let E=Te(x,p);E.y+=.4;let C=new Di(.1,12,12),k=new vn({color:8930559,transparent:!0,opacity:.9}),D=new Xe(C,k);D.position.copy(E),n.add(D);let Z=performance.now(),z=0;function O(X){z++,z%2===0&&Ue();let he=X-Z,Ee=Math.min(1,he/ke),ne=Ee*(2-Ee);D.scale.setScalar(ne*4.5),k.opacity=.9*(1-Ee),Ee<1?requestAnimationFrame(O):(n.remove(D),C.dispose(),k.dispose())}requestAnimationFrame(O)}function la(x,p,E,C,k){if(E.target==="enemy"&&p==null){setTimeout(()=>{C.updateTurnUI&&C.updateTurnUI(),k&&k()},400);return}let Z=(E.range??0)>2&&p!=null&&(p.x!==x.x||p.y!==x.y),z=!Z&&p!=null&&(p.x!==x.x||p.y!==x.y);if(!Z&&!z){Vt=!0,So(E.effectKey,x,p,C);let Wt=E.target==="self"||E.target==="ally",Ut=E.target==="self"?x:p;Wt&&Ut?te(Ut,()=>{setTimeout(()=>{Vt=!1,C.updateTurnUI&&C.updateTurnUI(),k&&k()},400)}):setTimeout(()=>{Vt=!1,C.updateTurnUI&&C.updateTurnUI(),k&&k()},400);return}if(z){let pe=function(ge){ce++,ce%2===0&&Ue();let Le=ge-se,et=Math.min(1,Le/ve),Pt=et<=.4?et/.4:1,Nt=et>.4?(et-.4)/.6:0;et<=.4?Wt.position.lerpVectors(Ut,Mt,Pt):Wt.position.lerpVectors(Mt,Ut,Nt);let pt=et<=.35?et/.35:et<=.7?(.7-et)/.35:0;if(yn.rotation.y=-pt*1.1,!fi&&et>=Se&&(fi=!0,So(E.effectKey,x,p,me),p.hp<=0&&(fe=!0),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(p),le.get(p.id)&&E.target!=="ally"?K=ge:fe&&(Rn(p,x),fe=!1)),K!=null){let nn=le.get(p.id);if(nn){let ci=Math.min(1,(ge-K)/Ve),dt=1-ci;es.copy(di).multiplyScalar(En*dt),nn.position.copy(ii).add(es),ci>=1&&(nn.position.copy(ii),K=null,fe&&(Rn(p,x),fe=!1))}else K=null,fe&&(Rn(p,x),fe=!1)}et<1?requestAnimationFrame(pe):(Wt.position.copy(Ut),yn.rotation.y=0,K==null&&fe&&(Rn(p,x),fe=!1),K==null?(On.shadowMap.enabled=!0,Vt=!1,setTimeout(()=>{C.updateTurnUI&&C.updateTurnUI(),k&&k()},400)):requestAnimationFrame(pe))},Wt=le.get(x.id);if(!Wt||!Wt.userData.rightArm){Vt=!0,So(E.effectKey,x,p,C),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(p),setTimeout(()=>{Vt=!1,C.updateTurnUI&&C.updateTurnUI(),k&&k()},400);return}Vt=!0;let Ut=Te(x.x,x.y).clone(),Qe=Te(p.x,p.y).clone(),Mt=Ut.clone().lerp(Qe,.35),fn=Qe.x-Ut.x,Kt=Qe.z-Ut.z;fn*fn+Kt*Kt>1e-6&&(Wt.rotation.y=Math.atan2(fn,Kt));let ii=Te(p.x,p.y).clone(),di=Qe.clone().sub(Ut).normalize(),En=.4,yn=Wt.userData.rightArm,fi=!1,K=null,fe=!1,me={...C,handleUnitDeath:void 0},se=performance.now(),ce=0;On.shadowMap.enabled=!1,requestAnimationFrame(pe);return}let O=Te(x.x,x.y).clone(),X=Te(p.x,p.y).clone(),he=new ms(.035,.035,.4,6),Ee=new vn({color:16763972}),ne=new Xe(he,Ee);ne.position.copy(O),ne.position.y+=.6;let oe=X.clone().sub(O).normalize();ne.quaternion.setFromUnitVectors(new B(0,1,0),oe),n.add(ne),Vt=!0;let _e=le.get(x.id),qe=_e&&_e.userData.rightArm?_e.userData.rightArm:null;if(_e){let Wt=X.x-O.x,Ut=X.z-O.z;Wt*Wt+Ut*Ut>1e-6&&(_e.rotation.y=Math.atan2(Wt,Ut))}let He=ne.position.clone(),rt=X.clone();rt.y+=.6;let Lt=performance.now(),Yt=Te(p.x,p.y).clone(),bn=X.clone().sub(O).normalize(),Fn=.4,tn=!1,Bt=null,Gt=0,Dt=null,wt=E.effectKey==="powerShot"?{...C,animateKnockback(Wt,Ut,Qe,Mt,fn,Kt){Dt={targ:Wt,fromGx:Ut,fromGy:Qe,toGx:Mt,toGy:fn,knockbackOnDone:Kt}}}:C;function dn(){On.shadowMap.enabled=!0,Vt=!1,setTimeout(()=>{C.updateTurnUI&&C.updateTurnUI(),k&&k()},400)}function $t(Wt){Gt++,Gt%2===0&&Ue();let Ut=Wt-Lt,Qe=Math.min(1,Ut/De);if(ne.position.lerpVectors(He,rt,Qe),qe){let Mt=Math.sin(Qe*Math.PI)*1.1;qe.rotation.y=-Mt}if(!tn&&Qe>=1&&(tn=!0,n.remove(ne),he.dispose(),Ee.dispose(),E.type==="spell"&&Sd(p.x,p.y),So(E.effectKey,x,p,wt),le.get(p.id)&&p.hp>0&&(Bt=Wt),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(p)),Bt!=null){let Mt=le.get(p.id);if(Mt){let fn=Math.min(1,(Wt-Bt)/Ve),Kt=1-fn;if(es.copy(bn).multiplyScalar(Fn*Kt),Mt.position.copy(Yt).add(es),fn>=1&&(Mt.position.copy(Yt),Bt=null,Dt)){let{targ:ii,fromGx:di,fromGy:En,toGx:yn,toGy:fi,knockbackOnDone:K}=Dt;Dt=null,C.animateKnockback?C.animateKnockback(ii,di,En,yn,fi,()=>{K&&K(),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(ii),dn()}):dn();return}}else if(Bt=null,Dt){Dt=null,dn();return}}if(Qe<1)requestAnimationFrame($t);else if(qe&&(qe.rotation.y=0),Bt==null)if(Dt){let{targ:Mt,fromGx:fn,fromGy:Kt,toGx:ii,toGy:di,knockbackOnDone:En}=Dt;Dt=null,C.animateKnockback?C.animateKnockback(Mt,fn,Kt,ii,di,()=>{En&&En(),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(Mt),dn()}):dn()}else dn();else requestAnimationFrame($t)}On.shadowMap.enabled=!1,requestAnimationFrame($t)}function Mn(){if(gt!=="playing"||!Io(ot)||Vt||Oe.length===0)return;let x=Oe[ct],p=H.find(K=>K.id===x);if(!p||p.hp<=0)return;let E=xe(p,"agi"),C=Eo(e,p.x,p.y,E,H,p),k=new Set(H.filter(K=>K.hp>0&&K.id!==p.id).map(K=>K.y*e.w+K.x)),D=[];C.forEach((K,fe)=>{K!==0&&(k.has(fe)||D.push({gx:fe%e.w,gy:Math.floor(fe/e.w),dist:K}))});let Z=Md(p),z=Gc(),O=vd(p.player),X=.25,he=.03,Ee=p.maxHp>0&&p.hp/p.maxHp<X,ne=p.maxHp>0&&p.hp/p.maxHp<he,oe=p.level===2,_e=z.filter(K=>!k.has(K.gy*e.w+K.gx)),qe=O.filter(K=>!k.has(K.gy*e.w+K.gx)),He=new Set(z.map(K=>K.gy*e.w+K.gx)),rt=_e.length>0?_e:z,Lt=qe.length>0?qe:O,Yt=rt.length>0?fn(rt):null,bn=Lt.length>0?fn(Lt):null,Fn=Lo(p),tn=Fn.filter(K=>!K.disabled&&p.mp>=K.cost&&K.target==="enemy"),Bt=tn.length>0?Math.max(...tn.map(K=>K.range||0)):0,Gt=Math.max(p.range!=null?p.range:1,Bt),Dt=H.filter(K=>K.hp>0&&K.player!==p.player),wt=H.filter(K=>K.hp>0&&K.player===p.player&&K.id!==p.id);function dn(K,fe){if(fe.length===0)return null;let me=null,se=1/0;for(let ce of K){let pe=0;for(let ge of fe)pe+=li(ce.gx,ce.gy,ge.gx,ge.gy);pe<se&&(se=pe,me=ce)}return me}function $t(K,fe){if(fe.length===0||K.length===0)return null;let me=null,se=1/0;for(let ce of K){let pe=Math.min(...fe.map(ge=>li(ce.gx,ce.gy,ge.gx,ge.gy)));pe<se&&(se=pe,me=ce)}return me}function Wt(K,fe){let me=Gt,se=[];for(let ce of H){if(ce.hp<=0||ce.player===p.player)continue;let pe=li(K,fe,ce.x,ce.y);pe<=me&&pe>0&&Ns(e,K,fe,ce.x,ce.y)&&se.push({target:ce,dist:pe})}return se}let Ut=new Set(D.map(K=>K.gy*e.w+K.gx));function Qe(K,fe){if(!K||K.length<=1)return null;let me=Math.min(fe,K.length-1);for(let se=me;se>=1;se--){let ce=K[se],pe=ce.y*e.w+ce.x;if(Ut.has(pe))return{gx:ce.x,gy:ce.y}}return null}function Mt(K,fe){if(!K||K.length<=1)return null;let me=Math.min(fe,K.length-1);for(let se=me;se>=1;se--){let ce=K[se];if(!k.has(ce.y*e.w+ce.x))return{gx:ce.x,gy:ce.y}}return null}function fn(K){let fe=null,me=null,se=1/0;for(let ce of K){let pe=xs(e,p.x,p.y,ce.gx,ce.gy,H,p);pe&&pe.length>1&&pe.length<se&&(se=pe.length,fe=pe,me=ce)}return fe&&me?{path:fe,target:me}:null}function Kt(K){let fe=K??D;if(fe.length===0)return null;if(Dt.length===0)return fe[0];let me=null,se=-1;for(let ce of fe){let pe=Math.min(...Dt.map(ge=>li(ce.gx,ce.gy,ge.x,ge.y)));pe>se&&(se=pe,me=ce)}return me}function ii(K){let fe=K??D;if(fe.length===0)return null;if(Dt.length===0)return fe[0];let me=p.maxHp>0&&p.hp/p.maxHp>=.6,se=null,ce=-1/0;for(let pe of fe){let ge=Math.min(...Dt.map(Pt=>li(pe.gx,pe.gy,Pt.x,Pt.y))),Le=wt.length>0?Math.min(...wt.map(Pt=>li(pe.gx,pe.gy,Pt.x,Pt.y))):999,et;me?et=Le<ge?ge-1e3:ge:et=ge-Le,et>ce&&(ce=et,se=pe)}return se}function di(){let K=Gt;if(Dt.length===0)return null;let fe=null,me=-1;for(let se of D){let ce=Math.min(...Dt.map(ge=>li(se.gx,se.gy,ge.x,ge.y)));Dt.some(ge=>li(se.gx,se.gy,ge.x,ge.y)<=K)&&ce>me&&(me=ce,fe=se)}return fe}let En=new Map;for(let K of D){let fe=K.gy*e.w+K.gx;En.has(fe)||En.set(fe,Wt(K.gx,K.gy))}if(Dn){if(en){setTimeout(()=>an(),400);return}if(gs-st<=20&&z.length>0){let ce=z.some(pe=>pe.gx===p.x&&pe.gy===p.y);if(ce&&D.length>0){let ge=D.filter(Le=>He.has(Le.gy*e.w+Le.gx)).filter(Le=>Le.gx!==p.x||Le.gy!==p.y);if(ge.length>0){let Le=Kt(ge);if(Le&&(Le.gx!==p.x||Le.gy!==p.y)){jt(p,Le.gx,Le.gy,()=>setTimeout(an,400));return}}setTimeout(()=>an(),400);return}if(ce){setTimeout(()=>an(),400);return}if(D.length>0){let pe=Yt,ge=pe?Mt(pe.path,E):null;if(ge&&(ge.gx!==p.x||ge.gy!==p.y)){jt(p,ge.gx,ge.gy,()=>setTimeout(an,400));return}let Le=$t(D,rt);if(Le&&(Le.gx!==p.x||Le.gy!==p.y)){jt(p,Le.gx,Le.gy,()=>setTimeout(an,400));return}}setTimeout(()=>an(),400);return}if(!Ee&&D.length>0){if(oe&&O.length>0&&!O.some(pe=>pe.gx===p.x&&pe.gy===p.y)){let pe=bn,ge=pe?Mt(pe.path,E):null;if(ge&&(ge.gx!==p.x||ge.gy!==p.y)){jt(p,ge.gx,ge.gy,()=>setTimeout(an,400));return}let Le=$t(D,Lt);if(Le&&(Le.gx!==p.x||Le.gy!==p.y)){jt(p,Le.gx,Le.gy,()=>setTimeout(an,400));return}}if(z.length>0&&!z.some(pe=>pe.gx===p.x&&pe.gy===p.y)){let pe=Yt,ge=pe?Mt(pe.path,E):null;if(ge&&(ge.gx!==p.x||ge.gy!==p.y)){jt(p,ge.gx,ge.gy,()=>setTimeout(an,400));return}let Le=$t(D,rt);if(Le&&(Le.gx!==p.x||Le.gy!==p.y)){jt(p,Le.gx,Le.gy,()=>setTimeout(an,400));return}}}let fe=z.length>0?D.filter(ce=>He.has(ce.gy*e.w+ce.gx)):null,me=fe!=null&&fe.length>0?fe:D,se=null;if(me.length>0&&wt.length>0&&(se=ii(me),se)){let ce=xs(e,p.x,p.y,se.gx,se.gy,H,p),pe=ce?ce.length-1:1/0;(!ce||ce.length<=1||pe>E)&&(se=Kt(me))}if(!se&&me.length>0&&(se=Kt(me)),se&&(se.gx!==p.x||se.gy!==p.y)){jt(p,se.gx,se.gy,()=>setTimeout(an,400));return}setTimeout(()=>an(),400);return}if(ne&&gs-st>20&&!en&&D.length>0){let K=null,fe=1/0;for(let se of D){let pe=(En.get(se.gy*e.w+se.gx)||[]).filter(ge=>ge.target.maxHp>0&&ge.target.hp/ge.target.maxHp<X);if(pe.length>0){let ge=Math.min(...pe.map(Le=>Le.target.hp));ge<fe&&(fe=ge,K=se)}}if(K){let se=xs(e,p.x,p.y,K.gx,K.gy,H,p),ce=se?Qe(se,E):null;if(ce&&(ce.gx!==p.x||ce.gy!==p.y)){jt(p,ce.gx,ce.gy,()=>setTimeout(Mn,600));return}}let me=Kt();if(me&&(me.gx!==p.x||me.gy!==p.y)){jt(p,me.gx,me.gy,()=>setTimeout(Mn,600));return}setTimeout(()=>an(),400);return}if(!Dn){let et=function(dt){return Cr(p,dt,H).filter(Rt=>Rt.targetUnit!=null).map(Rt=>Rt.targetUnit)},K=Fn,fe=p.maxHp>0?p.hp/p.maxHp:1,me=.35,se=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct"]),ce=new Set(["chakra","sacrifice"]),pe=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),ge=new Set(["manaDrain","impale","poison"]),Le=new Set(["dominate","weaken","cripple","hex","blind","raid"]),Pt={showFloatingCombatText:ni,handleUnitDeath:Rn,updateUnitSlashVisibility:Ne,updateTurnUI:Xt,world:e,units:H,updateUnitPosition(dt){let Qt=le.get(dt.id);Qt&&Qt.position.copy(Te(dt.x,dt.y))},animateKnockback(dt,Qt,Rt,Zt,Bn,sn){let Tn=le.get(dt.id);if(!Tn){sn&&sn();return}let Gs=Te(Qt,Rt).clone(),_s=Te(Zt,Bn).clone(),Fo=performance.now(),jc=0;function Qc(Fd){jc++,jc%2===0&&Ue();let eh=Math.min(1,(Fd-Fo)/Us),Bd=Bo=>Bo*Bo*(3-2*Bo);Tn.position.lerpVectors(Gs,_s,Bd(eh)),eh<1?requestAnimationFrame(Qc):(Tn.position.copy(_s),sn&&sn())}requestAnimationFrame(Qc)}},Nt=null,pt=null,nn=Z.some(dt=>dt.target.maxHp>0&&dt.target.hp/dt.target.maxHp<X),ci=nn||D.some(dt=>(En.get(dt.gy*e.w+dt.gx)||[]).some(Rt=>Rt.target.maxHp>0&&Rt.target.hp/Rt.target.maxHp<X));if(!ci){for(let Qt of K)if(!Qt.disabled&&ce.has(Qt.effectKey)){let Zt=Cr(p,Qt,H).filter(Bn=>Bn.targetUnit&&Bn.targetUnit.maxHp>0&&Bn.targetUnit.hp/Bn.targetUnit.maxHp<.5);if(Zt.length>0){let Bn=Zt.sort((sn,Tn)=>sn.targetUnit.hp-Tn.targetUnit.hp)[0].targetUnit;Nt=Qt,pt=Bn;break}}}if(!Nt&&!ci&&(Z.length>0||D.some(Qt=>(En.get(Qt.gy*e.w+Qt.gx)||[]).length>0))){let Qt=K.filter(Rt=>!Rt.disabled&&pe.has(Rt.effectKey)).sort((Rt,Zt)=>(Zt.level||1)-(Rt.level||1));for(let Rt of Qt){let Zt=p.tempBuff&&p.tempBuff.duration>0;if(Rt.target==="self"){if(Rt.effectKey==="bloodlust"&&p.hp/p.maxHp>.8)continue;if(!Zt){Nt=Rt,pt=p;break}}if(Rt.target==="ally"){if(Rt.effectKey==="forge"&&Zt||Rt.effectKey==="fortify"&&Zt||Rt.effectKey==="mantra"&&Zt||Rt.effectKey==="sanctuary"&&Zt)continue;let sn=Cr(p,Rt,H).filter(Tn=>Tn.targetUnit!=null).map(Tn=>Tn.targetUnit);if(sn.length>0){let Tn=sn.filter(_s=>!_s.tempBuff||_s.tempBuff.duration<=0),Gs=(Tn.length>0?Tn:sn).sort((_s,Fo)=>_s.hp-Fo.hp)[0];Nt=Rt,pt=Gs;break}}}}if(!Nt){for(let dt of K)if(!dt.disabled&&se.has(dt.effectKey)){if(dt.effectKey==="feast"&&p.hp/p.maxHp>.7||dt.effectKey==="berserk"&&p.hp/p.maxHp<.25||dt.effectKey==="shuriken"&&Z.length>0||dt.effectKey==="judgement"&&p.hp/p.maxHp>.7)continue;let Qt=et(dt);if(Qt.length===0)continue;let Rt=Qt.filter(sn=>sn.maxHp>0&&sn.hp/sn.maxHp<me),Zt=Rt.length>0?Rt:Qt,Bn=dt.type==="spell"?Zt.reduce((sn,Tn)=>{if(!sn)return Tn;let Gs=xe(Tn,"int")-xe(sn,"int");return Gs<0||Gs===0&&Tn.hp<sn.hp?Tn:sn},null):Zt.reduce((sn,Tn)=>!sn||Tn.hp<sn.hp?Tn:sn,null);Nt=dt,pt=Bn;break}}if(!Nt&&!nn){for(let dt of K)if(!dt.disabled&&Le.has(dt.effectKey)){let Qt=et(dt),Rt=Qt.length>0?Qt.reduce((Zt,Bn)=>!Zt||Bn.hp<Zt.hp?Bn:Zt,null):null;Nt=dt,pt=Rt;break}}if(!Nt&&!nn){for(let dt of K)if(!dt.disabled&&ge.has(dt.effectKey)){let Rt=et(dt).filter(Zt=>!Zt.tempDebuff||Zt.tempDebuff.duration<=0);if(Rt.length>0){let Zt=Rt.reduce((Bn,sn)=>!Bn||sn.hp<Bn.hp?sn:Bn,null);Nt=dt,pt=Zt;break}}}if(Nt&&pt){p.mp-=Nt.cost,Dn=!0;let dt=Nt.target==="self"?p:pt;la(p,dt,Nt,Pt,()=>setTimeout(Mn,600));return}}if(bd(p,Dt,wt)&&Z.length>0){Z.sort((fe,me)=>fe.target.hp-me.target.hp||fe.dist-me.dist);let K=Z[0].target;Wc(p,K);return}if(Z.length>0){Z.sort((fe,me)=>fe.target.hp-me.target.hp||fe.dist-me.dist);let K=Z[0].target;Wc(p,K);return}let yn=gs-st;if(yn<=20&&z.length>0&&!en&&D.length>0&&!z.some(fe=>fe.gx===p.x&&fe.gy===p.y)){let fe=Yt,me=fe?fe.path:null,se=z.length>0?Math.min(...z.map(pt=>li(p.x,p.y,pt.gx,pt.gy))):1/0,ce=new Map,pe=new Map;for(let pt of D){let nn=pt.gy*e.w+pt.gx;ce.set(nn,z.length>0?Math.min(...z.map(ci=>li(pt.gx,pt.gy,ci.gx,ci.gy))):1/0),pe.set(nn,me?me.findIndex(ci=>ci.x===pt.gx&&ci.y===pt.gy):-1)}let ge=null,Le=-1,et=X;for(let pt of D){let nn=pt.gy*e.w+pt.gx;if(ce.get(nn)>se||(En.get(nn)||[]).filter(Zt=>Zt.target.maxHp>0&&Zt.target.hp/Zt.target.maxHp<et).length===0)continue;let Qt=pe.get(nn),Rt=Qt>=0?Qt:0;Rt>Le&&(Le=Rt,ge=pt)}if(ge&&(ge.gx!==p.x||ge.gy!==p.y)){jt(p,ge.gx,ge.gy,()=>setTimeout(Mn,600));return}let Pt=fe?Mt(fe.path,E):null;if(Pt&&(Pt.gx!==p.x||Pt.gy!==p.y)){jt(p,Pt.gx,Pt.gy,()=>setTimeout(Mn,600));return}let Nt=$t(D,rt);if(Nt&&(Nt.gx!==p.x||Nt.gy!==p.y)){jt(p,Nt.gx,Nt.gy,()=>setTimeout(Mn,600));return}}if(Ee&&D.length>0&&!en){let K=null,fe=1/0;for(let me of D){let ce=(En.get(me.gy*e.w+me.gx)||[]).filter(pe=>pe.target.maxHp>0&&pe.target.hp/pe.target.maxHp<X);if(ce.length>0){let pe=Math.min(...ce.map(ge=>ge.target.hp));pe<fe&&(fe=pe,K=me)}}if(K){let me=xs(e,p.x,p.y,K.gx,K.gy,H,p),se=me?Qe(me,E):null;if(se&&(se.gx!==p.x||se.gy!==p.y)){jt(p,se.gx,se.gy,()=>setTimeout(Mn,600));return}}if(yn>20&&oe&&O.length>0&&!O.some(se=>se.gx===p.x&&se.gy===p.y)){let se=qe.length>0?qe:O,ce=bn;if(ce!=null&&ce.path.length<=5){let ge=Mt(ce.path,E);if(ge&&(ge.gx!==p.x||ge.gy!==p.y)){jt(p,ge.gx,ge.gy,()=>setTimeout(Mn,600));return}let Le=$t(D,se);if(Le&&(Le.gx!==p.x||Le.gy!==p.y)){jt(p,Le.gx,Le.gy,()=>setTimeout(Mn,600));return}}}if(yn>20){let me=Kt();if(me&&li(p.x,p.y,me.gx,me.gy)>0){jt(p,me.gx,me.gy,()=>setTimeout(Mn,600));return}setTimeout(()=>an(),400);return}}if(yn<=10&&z.length>0&&!en&&D.length>0&&!z.some(fe=>fe.gx===p.x&&fe.gy===p.y)){let fe=_e.length>0?_e:z,me=Yt,se=me?Mt(me.path,E):null;if(se&&(se.gx!==p.x||se.gy!==p.y)){jt(p,se.gx,se.gy,()=>setTimeout(Mn,600));return}let ce=$t(D,fe);if(ce&&(ce.gx!==p.x||ce.gy!==p.y)){jt(p,ce.gx,ce.gy,()=>setTimeout(Mn,600));return}}if(p.level===1&&z.length>0&&!en&&!z.some(fe=>fe.gx===p.x&&fe.gy===p.y)&&D.length>0){let fe=_e.length>0?_e:z,me=Yt,se=me?Mt(me.path,E):null;if(se&&(se.gx!==p.x||se.gy!==p.y)){jt(p,se.gx,se.gy,()=>setTimeout(Mn,600));return}let ce=$t(D,fe);if(ce&&(ce.gx!==p.x||ce.gy!==p.y)){jt(p,ce.gx,ce.gy,()=>setTimeout(Mn,600));return}}if(oe&&O.length>0&&!en&&!O.some(fe=>fe.gx===p.x&&fe.gy===p.y)&&D.length>0){let fe=Dt.filter(et=>et.maxHp>0&&et.hp/et.maxHp<X),me=null,se=1/0;for(let et of D){let Nt=(En.get(et.gy*e.w+et.gx)||[]).find(pt=>fe.some(nn=>nn.id===pt.target.id));Nt&&Nt.target.hp<se&&(se=Nt.target.hp,me=et)}if(me){let et=xs(e,p.x,p.y,me.gx,me.gy,H,p),Pt=et?Qe(et,E):null;if(Pt&&(Pt.gx!==p.x||Pt.gy!==p.y)){jt(p,Pt.gx,Pt.gy,()=>setTimeout(Mn,600));return}}let ce=qe.length>0?qe:O,pe=bn,ge=pe?Mt(pe.path,E):null;if(ge&&(ge.gx!==p.x||ge.gy!==p.y)){jt(p,ge.gx,ge.gy,()=>setTimeout(Mn,600));return}let Le=$t(D,ce);if(Le&&(Le.gx!==p.x||Le.gy!==p.y)){jt(p,Le.gx,Le.gy,()=>setTimeout(Mn,600));return}}if(p.level>=2&&Gt>=2&&Dt.length>0&&!en&&D.length>0){let K=di();if(K&&(K.gx!==p.x||K.gy!==p.y)){jt(p,K.gx,K.gy,()=>setTimeout(Mn,600));return}}if(Dt.length>0&&!en&&D.length>0){let fe=function(se,ce){let pe=null;for(let ge=-K;ge<=K;ge++)for(let Le=-K;Le<=K;Le++){if(Le===0&&ge===0||Math.abs(Le)+Math.abs(ge)>K)continue;let et=se.x+Le,Pt=se.y+ge;if(et<0||et>=e.w||Pt<0||Pt>=e.h||!Er(e,et,Pt)||!Ns(e,et,Pt,se.x,se.y)||H.some(dt=>dt.hp>0&&dt.x===et&&dt.y===Pt))continue;let pt=xs(e,p.x,p.y,et,Pt,H,p),nn=pt?pt.length-1:1/0;pt&&pt.length>1&&(!ce||nn<=E)&&(!pe||pt.length<pe.length)&&(pe=pt)}return pe},K=Gt,me=[];for(let se of Dt){let ce=fe(se,!0);ce&&me.push({enemy:se,path:ce})}if(me.length>0){let se=me.filter(Le=>Le.enemy.maxHp>0&&Le.enemy.hp/Le.enemy.maxHp<X),ce=se.length>0?se:me;se.length>0?ce.sort((Le,et)=>Le.enemy.hp-et.enemy.hp||Le.path.length-et.path.length):ce.sort((Le,et)=>Le.path.length-et.path.length||Le.enemy.hp-et.enemy.hp);let pe=ce[0],ge=Qe(pe.path,E);if(ge&&(ge.gx!==p.x||ge.gy!==p.y)){jt(p,ge.gx,ge.gy,()=>setTimeout(Mn,600));return}}if(me.length===0){let se=null,ce=1/0;for(let pe of Dt){let ge=fe(pe,!1);ge&&ge.length<ce&&(ce=ge.length,se=ge)}if(se){let pe=Qe(se,E);if(pe&&(pe.gx!==p.x||pe.gy!==p.y)){jt(p,pe.gx,pe.gy,()=>setTimeout(Mn,600));return}}}}setTimeout(()=>an(),400)}function xn(){for(Q.length=0;$.children.length;){let x=$.children[0];$.remove(x),x.geometry!==Pr&&x.geometry!==Ir&&x.geometry.dispose(),x.material.dispose()}Ue()}let zs=new Set;function Lo(x){return!x||!x.class?[]:od[x.class]?od[x.class].map(p=>({...p,disabled:p.disabled===!0||x.level<p.level||p.hpCost&&x.hp<p.hpCost||p.cost&&x.mp<p.cost})):[]}function Cr(x,p,E){let C=[],k=(Z,z,O,X)=>Math.abs(Z-O)+Math.abs(z-X),D=p.range||0;if(p.target==="self")return C.push({gx:x.x,gy:x.y,targetUnit:null}),C;for(let Z of E)Z.hp<=0||k(x.x,x.y,Z.x,Z.y)>D||D>2&&!Ns(e,x.x,x.y,Z.x,Z.y)||(p.target==="enemy"&&Z.player!==x.player&&C.push({gx:Z.x,gy:Z.y,targetUnit:Z}),p.target==="ally"&&Z.player===x.player&&C.push({gx:Z.x,gy:Z.y,targetUnit:Z}));return C}function Ed(x,p){let E=p.range||0;if(p.target==="self")return[{gx:x.x,gy:x.y}];let C=hd(e,x.x,x.y,E),k=[];return C.forEach((D,Z)=>{let z=Z%e.w,O=Z/e.w|0;E>2&&!Ns(e,x.x,x.y,z,O)||k.push({gx:z,gy:O})}),k}function Td(x,p){let E=Cr(x,p,H);zs=new Set(E.map(k=>`${k.gx},${k.gy}`));let C=p.target==="self"?E:Ed(x,p);xn(),C.forEach(({gx:k,gy:D})=>{let z=(Jn+e.height[D][k]*.35)/2+Jn/2,O=k*bt-ue+bt/2,X=D*bt-Ce+bt/2,he=z+.01,Ee=new vn({color:8926122,transparent:!0,opacity:.4,side:_n}),ne=new Xe(Pr,Ee);ne.rotation.x=-Math.PI/2,ne.position.set(O,he,X),$.add(ne),Q.push(Ee);let oe=new vn({color:11167436,transparent:!0,opacity:.7,side:_n}),_e=new Xe(Ir,oe);_e.rotation.x=-Math.PI/2,_e.position.set(O,he+.01,X),_e.userData.gx=k,_e.userData.gy=D,$.add(_e),Q.push(oe)})}let Xc=.82,qc=1.02,Pr=new qi(qc,qc),Ir=new qi(Xc,Xc);function wd(x){xn(),x.forEach(({gx:p,gy:E})=>{let k=(Jn+e.height[E][p]*.35)/2+Jn/2,D=p*bt-ue+bt/2,Z=E*bt-Ce+bt/2,z=k+.01,O=new vn({color:2271812,transparent:!0,opacity:.4,side:_n}),X=new Xe(Pr,O);X.rotation.x=-Math.PI/2,X.position.set(D,z,Z),$.add(X),Q.push(O);let he=new vn({color:4508774,transparent:!0,opacity:.7,side:_n}),Ee=new Xe(Ir,he);Ee.rotation.x=-Math.PI/2,Ee.position.set(D,z+.01,Z),Ee.userData.gx=p,Ee.userData.gy=E,$.add(Ee),Q.push(he)}),Ue()}function Do(x){xn(),x.forEach((p,E)=>{if(p===0)return;let C=E%e.w,k=E/e.w|0,Z=(Jn+e.height[k][C]*.35)/2+Jn/2,z=C*bt-ue+bt/2,O=k*bt-Ce+bt/2,X=Z+.01,he=new vn({color:3381759,transparent:!0,opacity:.35,side:_n}),Ee=new Xe(Pr,he);Ee.rotation.x=-Math.PI/2,Ee.position.set(z,X,O),$.add(Ee),Q.push(he);let ne=new vn({color:6730751,transparent:!0,opacity:.65,side:_n}),oe=new Xe(Ir,ne);oe.rotation.x=-Math.PI/2,oe.position.set(z,X+.01,O),$.add(oe),Q.push(ne)}),Ue()}function Ad(x){xn(),x.forEach((p,E)=>{if(p===0)return;let C=E%e.w,k=E/e.w|0,Z=(Jn+e.height[k][C]*.35)/2+Jn/2,z=C*bt-ue+bt/2,O=k*bt-Ce+bt/2,X=Z+.01,he=new vn({color:10035746,transparent:!0,opacity:.4,side:_n}),Ee=new Xe(Pr,he);Ee.rotation.x=-Math.PI/2,Ee.position.set(z,X,O),$.add(Ee),Q.push(he);let ne=new vn({color:13386820,transparent:!0,opacity:.7,side:_n}),oe=new Xe(Ir,ne);oe.rotation.x=-Math.PI/2,oe.position.set(z,X+.01,O),$.add(oe),Q.push(ne)}),Ue()}let ji=new go,Qi=new Fe;function ca(x,p){let E=t.getBoundingClientRect();return Qi.x=(x-E.left)/E.width*2-1,Qi.y=-((p-E.top)/E.height)*2+1,{x:Qi.x,y:Qi.y}}function Rd(x,p){if(Vt)return;Qi.x=x,Qi.y=p,ji.setFromCamera(Qi,a);let E=ji.intersectObjects(ee.children,!0);if(E.length===0)return;let C=null;for(let z of E){let O=z.object;for(;O&&(O.userData.gx==null||O.userData.gy==null);)O=O.parent;if(O&&O.userData.gx!=null){C=O;break}}if(!C||C.userData.gx==null)return;let k=C.userData.gx,D=C.userData.gy;if(gt==="draft"&&Ft){let z=D*e.w+k;gn.has(z)&&Cc(k,D);return}if(gt!=="playing"||Ze==="cvcpu")return;if(vi&&Ln){let z=Oe[ct],O=H.find(oe=>oe.id===z&&oe.hp>0);if(O&&k===O.x&&D===O.y){vi=!1,Ln=null,zs=new Set,xn(),en?hn=new Map:(hn=Eo(e,O.x,O.y,xe(O,"agi"),H,O),Do(hn)),Xt();return}let X=`${k},${D}`;if(!zs.has(X))return;if(!O||O.mp<Ln.cost){vi=!1,Ln=null,xn(),Xt();return}let he=H.find(oe=>oe.x===k&&oe.y===D&&oe.hp>0);if(Ln.target==="enemy"&&(!he||he.player===O.player)||Ln.target==="ally"&&he&&he.player!==O.player||Ln.target==="self"&&(k!==O.x||D!==O.y)||Ln.target==="enemy"&&!he)return;O.mp-=Ln.cost,Dn=!0;let Ee={showFloatingCombatText:ni,handleUnitDeath:Rn,updateUnitSlashVisibility:Ne,updateTurnUI:Xt,world:e,units:H,updateUnitPosition(oe){let _e=le.get(oe.id);_e&&_e.position.copy(Te(oe.x,oe.y))},animateKnockback(oe,_e,qe,He,rt,Lt){let Yt=le.get(oe.id);if(!Yt){Lt&&Lt();return}let bn=Te(_e,qe).clone(),Fn=Te(He,rt).clone(),tn=performance.now(),Bt=0;function Gt(Dt){Bt++,Bt%2===0&&Ue();let wt=Math.min(1,(Dt-tn)/Us),dn=$t=>$t*$t*(3-2*$t);Yt.position.lerpVectors(bn,Fn,dn(wt)),wt<1?requestAnimationFrame(Gt):(Yt.position.copy(Fn),Lt&&Lt())}requestAnimationFrame(Gt)}},ne=Ln.target==="self"?O:he||null;la(O,ne,Ln,Ee,()=>{xn(),vi=!1,Ln=null,zs=new Set,en?an():Xt()});return}if(T){let z=Oe[ct],O=H.find(he=>he.id===z),X=le.get(z);if(O&&X&&V.length>0){let he=Te(O.x,O.y),Ee=Te(k,D),ne=Ee.x-he.x,oe=Ee.z-he.z,_e=ne*ne+oe*oe>1e-6?Math.atan2(ne,oe):X.rotation.y;X.rotation.y=Zi(_e)}setTimeout(()=>an(),400);return}if(zt!=null&&jn){let z=H.find(he=>he.id===zt);if(!z||z.player!==ot)return;let O=D*e.w+k,X=H.find(he=>he.x===k&&he.y===D&&he.hp>0);if(X&&X.id===Oe[ct]&&X.player===ot){jn=!1,zt=X.id,en?(xn(),hn=new Map):(hn=Eo(e,X.x,X.y,xe(X,"agi"),H,X),Do(hn)),Xt();return}if(!hn.has(O)||hn.get(O)===0)return;if(X&&X.player!==ot){let he=xe(X,"agi")*.7+xe(X,"luk")*.3;if(Math.random()*Math.max(.001,he)<=xe(z,"dex")){let oe=xe(z,"str")*.7+xe(z,"dex")*.1+xe(z,"int")*.07-(xe(X,"vit")*.3+xe(X,"luk")*.1),_e=Math.max(1,Math.floor(oe));X.hp=Math.max(0,X.hp-_e),ni(X.x,X.y,String(_e),!1),X.hp<=0&&Rn(X,z),Ne(X)}else ni(X.x,X.y,"MISS",!0);Dn=!0,zt=null,jn=!1,xn(),setTimeout(en?()=>an():()=>Xt(),400)}return}let Z=H.find(z=>z.x===k&&z.y===D&&z.hp>0);if(Z){if(Z.id===Oe[ct]&&Z.player===ot){Ki(),zt=Z.id,jn=!1,en?(xn(),hn=new Map):(hn=Eo(e,k,D,xe(Z,"agi"),H,Z),Do(hn)),Xt();return}xn(),hn=new Map,jn=!1,Os(Z),Xt();return}if(Ki(),zt!=null){let oe=function(){if(ne>=he.length){z.x=he[he.length-1].x,z.y=he[he.length-1].y,Vt=!1,We(Ee),It(),hn=new Map,en=!0,setTimeout(Dn?()=>an():()=>Xt(),400);return}let _e=he[ne-1],qe=he[ne],He=Te(_e.x,_e.y).clone(),rt=Te(qe.x,qe.y).clone(),Lt=rt.x-He.x,Yt=rt.z-He.z;Lt*Lt+Yt*Yt>1e-6&&(Ee.rotation.y=Math.atan2(Lt,Yt));let bn=performance.now(),Fn=0;function tn(Bt){Fn++,Fn%2===0&&Ue();let Gt=Math.min(1,(Bt-bn)/Us),wt=(dn=>dn*dn*(3-2*dn))(Gt);if(Ee.position.lerpVectors(He,rt,wt),cn(Ee,wt),m){let dn=a.position.distanceTo(h),$t=dn<.1?o:dn;f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),h.lerp(Ee.position,l),a.position.copy(h).add(f.clone().multiplyScalar($t)),a.lookAt(h)}Gt<1?requestAnimationFrame(tn):(ne++,oe())}requestAnimationFrame(tn)};if(jn)return;let z=H.find(_e=>_e.id===zt);if(!z||z.player!==ot)return;let O=D*e.w+k;if(!hn.has(O)||hn.get(O)===0||H.some(_e=>_e.id!==z.id&&_e.x===k&&_e.y===D&&_e.hp>0)||Vt||en)return;let he=xs(e,z.x,z.y,k,D,H,z);if(!he||he.length<=1)return;zt=null,xn(),Vt=!0,m=!0,It(z.id);let Ee=le.get(z.id),ne=1;oe()}}function Yc(x){b.x=x.clientX,b.y=x.clientY,A=x.isTouch===!0,M=x.ctrlKey,_=ca(x.clientX,x.clientY),t.style.cursor=(x.ctrlKey,"grabbing")}function Uo(x){return x.touches&&x.touches.length>0?{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}:x.changedTouches&&x.changedTouches.length>0?{clientX:x.changedTouches[0].clientX,clientY:x.changedTouches[0].clientY}:{clientX:x.clientX,clientY:x.clientY}}function $c(x){if(!x||x.length<2)return 0;let p=x[0],E=x[1];return Math.hypot(E.clientX-p.clientX,E.clientY-p.clientY)}function Cd(x){if(x.touches.length===2){G=$c(x.touches),_=null;return}if(x.touches.length!==1)return;G=null;let p=Uo(x);Yc({clientX:p.clientX,clientY:p.clientY,ctrlKey:!1,isTouch:!0})}function Pd(x){if(x.touches.length===2){x.preventDefault();let E=$c(x.touches);if(G!=null&&G>0){let C=E-G,k=a.position.distanceTo(h),D=Math.max(Y,Math.min(ae,k-C*P));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(D)),a.lookAt(h),Ie=performance.now()}G=E;return}if(G=null,x.touches.length!==1)return;x.preventDefault();let p=Uo(x);Kc({clientX:p.clientX,clientY:p.clientY,ctrlKey:!1})}function Id(x){if(x.touches.length<2&&(G=null),x.touches.length===2||x.changedTouches.length===0)return;A=!1;let p=Uo(x);No({clientX:p.clientX,clientY:p.clientY,ctrlKey:!1})}function Kc(x){if(T){Tr(x.clientX,x.clientY);return}if(_==null)return;let p=x.clientX-b.x,E=x.clientY-b.y;if(!v&&!g&&(Math.abs(p)>w||Math.abs(E)>w)&&(x.ctrlKey||M?(g=!0,m=!1):(v=!0,m=!1)),g){q.copy(a.position).sub(h);let C=q.length();if(C<.001)return;let k=Math.atan2(q.x,q.z),D=Math.asin(Math.max(-1,Math.min(1,q.y/C)));k-=p*U,D+=E*U,D=Math.max(I,Math.min(L,D)),q.x=C*Math.cos(D)*Math.sin(k),q.y=C*Math.sin(D),q.z=C*Math.cos(D)*Math.cos(k),a.position.copy(h).add(q),a.lookAt(h),b.x=x.clientX,b.y=x.clientY,Ie=performance.now()}else if(v){let C=ca(x.clientX,x.clientY);d.setFromNormalAndCoplanarPoint(new B(0,1,0),new B(0,h.y,0)),ji.setFromCamera(new Fe(_.x,_.y),a),ji.ray.intersectPlane(d,u);let k=u.clone();ji.setFromCamera(new Fe(C.x,C.y),a),ji.ray.intersectPlane(d,u);let D=k.sub(u);A&&D.multiplyScalar(N),h.add(D),a.position.add(D),a.lookAt(h),_={x:C.x,y:C.y},Ie=performance.now()}}function No(x){if(_!=null&&!v&&!g){let p=ca(x.clientX,x.clientY);Rd(p.x,p.y)}_=null,v=!1,g=!1,M=!1,t.style.cursor="grab"}function Ld(x){x.preventDefault();let p=a.position.distanceTo(h),E=Math.max(Y,Math.min(ae,p+x.deltaY*Me));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(E)),a.lookAt(h),Ie=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",Yc),t.addEventListener("mousemove",Kc),t.addEventListener("mouseup",No),t.addEventListener("mouseleave",No),t.addEventListener("touchstart",Cd,{passive:!0}),t.addEventListener("touchmove",Pd,{passive:!1}),t.addEventListener("touchend",Id,{passive:!0}),t.addEventListener("wheel",Ld,{passive:!1});function Zc(){let x=t.clientWidth,p=t.clientHeight;a.aspect=x/p,a.updateProjectionMatrix(),On.setSize(x,p),On.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",Zc);let On=new $r({antialias:!1});On.setSize(t.clientWidth,t.clientHeight),On.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),On.shadowMap.enabled=!0,On.shadowMap.type=pc,t.appendChild(On.domElement),Zc();let ha=document.createElement("div");ha.id="combat-text-layer",t.appendChild(ha);let Ii=new B,es=new B,Dd=1400;function ni(x,p,E,C,k){let D=document.createElement("div");D.className="combat-text-float "+(C?"miss":"damage")+(k?" "+k:""),D.textContent=E,D.style.position="absolute",ha.appendChild(D);let Z=k==="skill-name"?1.7:1.2,z=performance.now();function O(){Ii.copy(Te(x,p)),Ii.y+=Z,Ii.project(a);let Ee=t.clientWidth,ne=t.clientHeight;D.style.left=(Ii.x*.5+.5)*Ee+"px",D.style.top=(1-(Ii.y*.5+.5))*ne+"px"}let X=0;function he(){X%2===0&&O(),X++,performance.now()-z<Dd?requestAnimationFrame(he):D.remove()}requestAnimationFrame(he)}let Ud=1500;function Nd(x,p){let E=document.createElement("div");E.className="combat-text-float "+(p||"levelup"),E.textContent="LEVEL UP!",E.style.position="absolute",ha.appendChild(E);let C=performance.now(),k=0;function D(){Ii.copy(Te(x.x,x.y)),Ii.y+=1.2,Ii.project(a);let z=t.clientWidth,O=t.clientHeight;E.style.left=(Ii.x*.5+.5)*z+"px",E.style.top=(1-(Ii.y*.5+.5))*O+"px"}function Z(){k%2===0&&D(),k++,performance.now()-C<Ud?requestAnimationFrame(Z):E.remove()}requestAnimationFrame(Z)}function Rn(x,p){xy(p?.class,x.class),console.log("[DEATH]",`${x.name} (${x.class}, P${x.player})`,`at (${x.x},${x.y})`,`Lv.${x.level}`),ni(x.x,x.y,"DEAD",!1);let E=le.get(x.id);if(!E){It(),Jc();return}let C=performance.now();function k(D){Ue();let Z=D-C,z=Math.min(1,Z/it),O=z*z;E.rotation.x=O*Math.PI*.5,z<1?requestAnimationFrame(k):(n.remove(E),le.delete(x.id),It(),Jc())}requestAnimationFrame(k)}function Jc(){if(gt!=="playing")return;let x=H.some(E=>E.player===1&&E.hp>0),p=H.some(E=>E.player===2&&E.hp>0);x?p||Oo(1):Oo(2)}function Od(){let x=Gc(),p=new Set(x.map(Z=>Z.gy*e.w+Z.gx)),E=H.filter(Z=>Z.hp>0&&Z.player===1&&p.has(Z.y*e.w+Z.x)).length,C=H.filter(Z=>Z.hp>0&&Z.player===2&&p.has(Z.y*e.w+Z.x)).length,k=null,D="";if(E>C)k=1,D=`Time's up! Player 1 wins! (${E} vs ${C} units on center base)`;else if(C>E)k=2,D=`Time's up! Player 2 wins! (${C} vs ${E} units on center base)`;else{let Z=H.filter(O=>O.hp>0&&O.player===1).reduce((O,X)=>O+X.hp,0),z=H.filter(O=>O.hp>0&&O.player===2).reduce((O,X)=>O+X.hp,0);Z>z?(k=1,D=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${Z} vs ${z})`):z>Z?(k=2,D=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${z} vs ${Z})`):D=`Draw! (equal units on center: ${E}, equal HP)`}Oo(k,D)}function Oo(x,p){lt(),yy(H,x),gt="gameover",document.getElementById("turn-menu").style.display="none",Ki(),xn();let E=document.getElementById("game-over-overlay"),C=document.getElementById("game-over-title"),k=document.getElementById("game-over-cards"),D=document.getElementById("game-over-class-record");D&&(D.style.display="none",D.innerHTML=""),C.textContent=p??`Player ${x} wins!`;let Z=H.filter(z=>z.player===(x??1));if(k.innerHTML=Z.map(z=>{let O=z,X=z.level>=3?" level-3":z.level>=2?" level-2":"",he=O.maxHp>0&&O.hp/O.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${X}${he}">
          <img class="game-over-card-image" src="${ia[z.class]||""}" alt="${O.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${O.name}</div>
            <div class="game-over-card-meta">Lv.${O.level} ${O.class} \u2014 HP ${O.hp}/${O.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${O.hp}/${O.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${O.mp}/${O.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${xe(O,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${xe(O,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${xe(O,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${xe(O,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${xe(O,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${xe(O,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${O.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),E.classList.add("visible"),Ze==="cvcpu"){if(F++,D&&Sr&&F>=we){let z=$i.map(O=>{let X=Ui[O],he=X.wins+X.losses||1,Ee=X.wins+X.losses>0?(X.wins/he*100).toFixed(1)+"%":"\u2014",ne=X.wins+X.losses>0?(X.losses/he*100).toFixed(1)+"%":"\u2014";return{class:O,battles:X.battles,kills:X.kills,deaths:X.deaths,wins:X.wins,losses:X.losses,winRate:Ee,lossRate:ne}});D.innerHTML=`
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
              ${z.map(O=>`
                <tr>
                  <td class="class-name">${O.class}</td>
                  <td>${O.battles}</td>
                  <td>${O.kills}</td>
                  <td>${O.deaths}</td>
                  <td>${O.wins}</td>
                  <td>${O.losses}</td>
                  <td>${O.winRate}</td>
                  <td>${O.lossRate}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `,D.style.display="block"}F<we&&setTimeout(()=>{E.classList.remove("visible"),ht(),wo()},2e3)}}function Vs(x=0){requestAnimationFrame(Vs),Ie===0&&(Ie=x);let p=x-Ie>500;Vs.frameCount=(typeof Vs.frameCount=="number"?Vs.frameCount:0)+1;let E=()=>{if(J){let C=.6+.4*Math.sin(x*.004);for(let k=0;k<Q.length;k++){let D=k%2===0?.4:.7;Q[k].opacity=D*C}On.render(n,a),J=!1}};p?x-Ge>=100&&(Ge=x,J=!0,E()):(Vs.frameCount%2===0&&(J=!0),E())}Vs()}Sy();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
